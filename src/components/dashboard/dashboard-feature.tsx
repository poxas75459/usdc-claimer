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
    "3U54ysBZ5k9aBUr1HwXMViHstiwhMqdjYEHT3kDg5QsuSWj7Sb6DMLWypr34rhDBw2VtVguReCAGTSCoZdc94XC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iuPUuQNtTeepgPepY3RxxsY1rdivXcVikUtNEz7LU7ZYZZy93XZRWZgCGKfTGkv2WBPJMw31xBJH9MLjgdzhNXJ",
  "key1": "3GJK8mYGTXSSJkF7Dyd8s3F8iw6AaQ5rbgdhF8CGgDTNZ1cQgaK7ZLZWJN7qBGKiMKqqjfEY55HiGkh6MoeJfkQ6",
  "key2": "2jiapgHxt4qMsKGTH9c1XswWJvHBoqYLUxEGm9QL1XrnJjJw4KLRFSddsMHynRALexaH4TaNY1piqAEVXM1MUwKt",
  "key3": "2Ftzw7B7ZA2MXfQYTFqWi1DWXXeJ8i9xfoK9HmN7CZypUp5dEkaR9tBaTLNr2coKj7GEGfifCT42e7hTNFQy9Fh5",
  "key4": "2ZEnMbXicJdG8HadTcLxA1vEWJbtu8QrP4mg3AXzUkXc6QsYwPxkCP2jcgNmM9EMUageBmRug9oNhd6ZTBxxzTKQ",
  "key5": "5CD8gpLRyPzDcfPySgce7NGwTu7ijfhcbvCcYVxBL4sf8mSQSmvsf3toxN2GSi8dU5B8VL85BriGqm4RM6pBPncj",
  "key6": "5xtQnKvMWvYPtiXB7xnwZcy71EduFJHFDkq5VRZwhVbFxwsR6i3ChDYnD7tP4D9kjBcnxRaGPqVFW55MKRxaKzjr",
  "key7": "2ZsBTeTAmRPRfxvTsUfdHfhwV9goDk59b9Zgg5aqFhkCdNA3uHs3tNg3fj7nBpwRQyeeS6dg47W4MLcTfggKS5s7",
  "key8": "4NgSdfJvjxGboGG4nCK9TnmER36rvnKngGCNHVgscsQeMnkhQwq6qjeJ2vvvNDMWmbFbtatsKiE5f6jhFg2Cq3dZ",
  "key9": "23CG6V57WpAmoLGngaG5xC8pQ8r4FZfdCevKiXKxMqMniB1B5pj5HnTjJP9vAjHmPqaD7f1WFAkS7Xv7RbtFi6Br",
  "key10": "4HuaECLo4HU4M1ZEL7pDnoPBaxFgqbsp6nBrMEB4MpEtcSpu6QB979V6D7NbUX6Uh5L4qWt57wJGPZVfokqRpUL8",
  "key11": "3WZtis3pSaUinDNNpp6qJpx3yCmdKeBiyUJ3oqavv3H3JzhvjziwMJ8ZvGFCQfNg3zwDrMCFHbs2jzmnWHayEXt9",
  "key12": "5uP1Xko9zodFk3FKAqDNTxbzG4VyQNGC1G5eE97ArXCBFmbKQfyjv4qrBRTnKHsqnBqKYpR6q91Ld1gzPcnj19zG",
  "key13": "29jLiL2B3tgSpG25k2mQUFr7MqNFjAWM7NUPFvsG1vZqdHnjf9nb3iy3sjKhUuXUFCkJBxjmPCqxJ2wNgPnCTPPD",
  "key14": "21Yq25vVy835uLxUvPM6M2oqN6NmfZvccdcogUBVoxUvXuRbcxG88udDSSpZQm2eq8YBaFTJqgWUY7p7sEjkAu31",
  "key15": "5Jbu6V7ocZ1Qeb4X2eBBCocTEK7CL2iRiJpAoxfy6cEod6J7oNVrvBcPw85pkwc86ZLFWuR7CwXZyTvEyJzP7Hn5",
  "key16": "3yZ2BbvSjtCVcSHJWpMuxFDEU81Q8PiBSfW67qm9Tbzw8NHbqiCFu5F2z2nWsFySDoAgYUa5cNSfUznGJTDkubDL",
  "key17": "4FnD5HBXwxHBpzuPyVe9NPP7ga1V5VdwxPsheD5fijb8gtr6YHGVnDDty26PXeJVEX8goF4vsrSk7J2vEQkq1ypZ",
  "key18": "63NfqsRBQ2uiUWVMdxdEEaaQnhpfz8vi9vPj1b4UFCemrm119Jxdn9KXUyrRZjQbN87dxSUD7pfLyiHNv4sP3AVm",
  "key19": "3VLDTyujKu3hGEVG1jGY8CdnaGisUriwhMLGWZK31vLDZQP5auqUEYj2YFuauBkjAQjw4C4ypGkQmmXyHW3yvnEd",
  "key20": "5oXQVjWSBGzAaUSrE86w8BsJZB5JpzVBSMhTjAjo7KjvN96tr6vvxS3JgQbgXLWVpeirN2YYaFgr3ECKfnKZCrqq",
  "key21": "4sB2LYVnjkT9svDGEPA2PM6qYy8TXTvhXsgHzsBKixoitAzpcKktujiTfiHaR2nAdVFE1wJMdYahPCNNnauw6GJt",
  "key22": "5Zz9katBvEWUUxAdkyHS7RbX8J8QSoWcj24M8CzRhsHwoRBcwrWBen1jDCsxpobxyGQYoU63t9eRyThnvKEx2wfv",
  "key23": "2bsg8jjx2w4FrCXsoJmK5rRvRdTAm4ycdVFCcjHweJpakpU762v6TotkbwcZDBkqcvXvRxP3SRDBds2W4wUDgWbS",
  "key24": "4bKGPyMC69AN6eMVdZRbbNHj4b89N961uzpuThi1zfmT555yFxRwMnSPLn39Ma8nH3jga8WgLsdbG8yFXBNkNGZD",
  "key25": "5DmheJu214Bymx5qWuj4i6UkzLFCewM9L8uSMHN9g31DcB9wx54sqYEqx6c4iLURKmdrXHiM9PkVS5HSCb1A1c47",
  "key26": "4nEUMGjSnHCLyWAs399EFiF2RCMfLDmri9osRsWjiYpskniZdcZHrdD3bFe4zdP1JCZu6YWVMVpfEneNS7q1NYfp",
  "key27": "2GcGRRu94sz3j7dowVQ9yTRL5rqNjujpwr5uJxym6XPfraYBqZT6ZBf4S4qVReEJqB6JM9ZbQFwzdSqgEX9fCfdT",
  "key28": "2XRTSEz6wLHqJMgpqDFtwQnUt13wueTymhf3y2HdVNLxf7qDSVCyCAEyxiDAU5snv3Nf7QEF8JyAcJ83CT9F6JmY",
  "key29": "tdWrMg3xmkzo46HKrFK4QkghgDwUMF1FETCahXRdprKkYaQDfsg7bePbuhgziXJNzyf9569SMLum3kyqbBtTy4t",
  "key30": "4CiChaEX1aotWMy964nDy1u3hYooYjquC9ifV4P3LYLWV8i3D9dYxhdjCPVdX5ixVwxjp1zigTFCP4uJ5CWhdWCz"
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
