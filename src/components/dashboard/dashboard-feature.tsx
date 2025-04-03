/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2s9urvrJKfmzpBW3uLASBRfMZi8fjY3VgT9WxTYxjCjcWr4jxn7W99oTVgKPSasH3s4gM7BWQVVsMWo8pYuAX6wX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N2tM53xJiztijkGXrXhGtfLsHohzSCHeyd76KKvUf3H6kqg7MXcRmmM15MmbmrFE5zaGGcFVAKN1hmmBFi6MDwD",
  "key1": "5r73hZGe18w959PSstyhsbWq4FtWyKLXcmuYC4UYr5C4YainKKxcqbFStinHAuTpruLjx98ukwvj75og2GCwxaLQ",
  "key2": "2t713SHjvMBTVn6GK1pmaPXZpp25aAJyEvjBdJQH8T4krPPGR8SVaPoaM7HzR6PVakQyL3iHeweBpZiEyESa3X9o",
  "key3": "4B165sjQuTwGXwSX14SMwttG84TqLPe5quZB4PHsJjgpJagUck6YGPNH2EpJye9Jt1KMMbwsS4iyMjEpB1QgCEAS",
  "key4": "4YJk4SFwREuScuryJTZ123R2wFFFJKiPhvw3FhKGf88B9fHa9pAd4vTU47Wy1dzyJzRxxgaKmmk2NuNrUJUcLkqG",
  "key5": "5tTZMo7SPgRezBqRU1uLKujEfLfp5En9zS9spdtZb13DiTBHdT3txCEHst4zBwxmB6LrebzpvDxC6wJ1uJzHL4XP",
  "key6": "46tLXDnG4ihmDrG2mNq42iEjFHUpXyrLVHwPb8Nkz5S9p45mdDWrPzRYvzF3uX39PNgwfqvMbyfeiFXQEMkdq55s",
  "key7": "5fe2SnK8WrtXPDd4w88JsBW1fetqFnELkxbBqqBJddFSVLKrpr1ND5YDbChLynSn5wNS8rnAJMm5eyWuu9SmvkXe",
  "key8": "5KuWGYMGfroRDeQ3D4rYDzgxJniEb55eTqSRQjxyfyUVoALBcPvrRtwEA7iUkPRNFW9CiZXa9hRc8X5XiKZXKFWq",
  "key9": "oyaotGyLcgRudQBcN9mCXcz3BbFQZMB1MJtmsLDx34Rfm3aFU72YLH2s94hZaCMBApnc6E5KgDJ6mDrWxi8iRwG",
  "key10": "5xCUPT1YhVa6UCYCrqvHdnADD6MpzHyy2CykrTLdbPByVdN3ijnRXHF3TvL9icLtqx6xfCWJN1fnqTU4wEofgBSL",
  "key11": "21Yu51wpPAo56P7R2nBc2wgG8EQiFYgknHfuvqXbugAuAR71Vvjw2UWhjLJF2MXHnuvCA6XGQ7PxqJnhXL4CbjDN",
  "key12": "2hSL4fyy8JNqUzST9rjEzRKfd9r76S7cYgipWYbV2v8AkgJ56PV9KGr5ncNe4Ht5JTJtRrCqqCFSrjSGCVCyxM9d",
  "key13": "6mQp5a6CPmSB1FTQJQHJzY724YsB5MNzqHu8PzURou8KsSHxfYfxanLS5Kc4hcZHHTonTMcJniLJe4yKsWbsfgf",
  "key14": "peDLJzVff4swWKxFmLMEpAFp1AYUWgBr6wge3A6AFMeevU5EkqeLagfGiwVpUAawbBoZP6TD6WFEUFi1c649vB5",
  "key15": "5vC1WjhmD23qHibQEPLBwX5HjHFBH8BpDTYByDsxDHSyV11kEyUfNXncKCK9CHdXLHNbELabVZPjv21Jzcsp2hGB",
  "key16": "25QDw5EsfczTQVwugZm9DgQpXwCfo1N5J3pE5PJsdYptVEa4FmkpH9n223RhzD3sxMfDNynKT11h2uTfyjE9SLvd",
  "key17": "tkEZyUKFDSu63p2TpncF1nvZW6HC4aNRANvwJZVVUDAw21azAmtrTydoZK3Kv7Sg6EE1WmLK5nuxmNkigagsS7i",
  "key18": "2WHckruUKrVLHkbTWBV1zbjfb3gR8ueM9z6Nw4VQvGLCd6y6bsnmrBB1LRrnFPvACUCh34ihEETp47eRJdRr1xqt",
  "key19": "3Rwdmfsi9RDpuQWhTT8DwE4k3AaFHSqBs6ymwnwsZvyFLNhrYm3A8gAK4pJBUo9zG8ws7f49T8NfC8itAt2ZhsR4",
  "key20": "tjgZ26ff4VfQikEtnqKJEohw6oVVy9kHqsX6JpVx9VHFN4gFGVP8KdjPTfti7p6t15SUzWJ4CNd2SKhhq4EaHiN",
  "key21": "2YKZL79Qm9Q9KKho4NTXrMuHUEJqba1PqqnacsrTeqJNzcx1FYUzaVWwVmGw8KBfHQ6oFFp5SZZKBbp1hqFQovBY",
  "key22": "QUxKWM4je39T2DJWdawcTJD2bWJSBZxHKBWsDWjzNLWytMMVCY2aLJwk6M7gY4rDBDSnhRb7G5F9iC9zUMdgJBZ",
  "key23": "4y3HwM3QiskY9Nf73vBwJeomMehjAHZfJxBxNwujUTw52nsHsLz2hNLP39LpxKnYXjJdfowon2BiCc9BoUaij44Y",
  "key24": "3z6enRpeUdcb65z97RsMMXHteoLSdijgZwULJZdATEP9tB9w6ny79uvmZVMzz61i4DEwzpeZ9XCjCV9sPrVD6qFo",
  "key25": "2rs5KKf98bmMrNbAP6jrQHxpZfDoSooBf8jWStJnZt4mbB7Yke5fkgG4VwTFhyo8psgydaZvVYdGxn9jLPPvLtv",
  "key26": "2D6Rh6tr2hEys9uv9n74pMnfdyf2esdXjUchGVmqbGcYkk5yGeikA4mNBg8xrva3T2k5mXMwN79B3pZMh5LAdFbu",
  "key27": "2onCrYwfjt5pinHemGyRoiJap12eAjr34M454XTdsbcMoRLAaY7fG93TWfCbxgpB5pDRvxxqWJigzCnh3E7BmDJH"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
