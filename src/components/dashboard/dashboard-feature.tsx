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
    "2XoAEkWRj4oR2eKTdt2EpmqjdTDZiwutnoc5CdpyYtkkZH7M3gibhtPv6jNogCqtPcavU61R85P6goPijdDMhTtY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41exJTERvn59tQGup48YRV35JgSBxMCL6h8j9qTFjdQnRLyFAKLYUNB3Fz2iegnL85dzCcn4LQAMgfAQjm36sAGr",
  "key1": "52aZYVuVdtb9jt5a84dnLpddRbkV6pa43KZY8jofrU4vXEUH4Sb6ZCFwYvEk4xGeD6v7yNHJo78UoNU9HveE95vM",
  "key2": "ZN6jsNmHqDrTVjCaY47L714xgbzLg7y5KXv5BZi1sNCa5WqJf2bJRhrParF1pYGZqf9SP4SEyRD3U8jWxHWH27T",
  "key3": "4RphgP4SgR377WRu9uwrGS4D6a2AYSM3kwFAeQ61STX2nqGAEMKGJZWwWkYXBVXPvKYURhLpGXwFLn8jWgJfBMTK",
  "key4": "5SRk5TCKbheQbEhJVoD7C1vcfTKjei4Rt7BQcP2CQz1vvLPR72T4ETx7k2HLXvD4jFuHcFC45QtkL9QYT6vyYDR9",
  "key5": "2tsQ3fVVzGhEbDGBz7pGAoX1Qx3h4yMmqfbGCV8LQMBXV7myVSnHCfHsu8xfzXmj9wBkbJCAbHk8HpVCvESvgBxW",
  "key6": "LrHVh5j4DxV3MQVRBXX92XH8bvSTySNfSG31Nbe1G5Y3Mc2SaFD3maEo1SvJzmdkqzdUfcUthNrVmLN3LhzBjwS",
  "key7": "5kgPaaEY3zwoj7BeuTjiJgB9P6XWMKT5iiZujQFDUTBEiE4GZ4YGXnShHPH8dgdYwvpghz5MXGhnZS1E8KwbX8gC",
  "key8": "3szdUJ2s4ZfKow6Fi3XCE7h1PsWd4EKYRcN1dMwrNYXEXSaML4mt3CsjvutpguMko64EwbKgPdQszAGeXb319xaR",
  "key9": "4HGiaWETmbhWukmSmUR2jjTGmVUFmfF9LefdK3G6t34YxBsQNZPN72w35CE388SAvHWxkeNoPD4QgAWH4PXHC8FD",
  "key10": "5XUosJ2a9m1ThkooXRfUtWs83TCaNXtqKZs4StWmJtP5TAApzuVKGspgyTu5cMMs264eTYf7eUaC7onNiZKL2nca",
  "key11": "2VFq89hcy8mWNLfUTxWrkQiUCE9RmTjT68ZninxS6gJnh8vHt6H1bnAsyczvT1v3cpkfUW7Ytpw3T8e79L86jeMi",
  "key12": "5jsnHPSFknsnDZD2YEea4AFbqvpxuGzKSBozpzYKiYKqGASz4ir8dZUkmKEAmu4zgCHx82NoNBc1CUNuW3CMzqBp",
  "key13": "5dLdoM63M8bh3QQMDE53hmBGuSnbTEr2L9m5YwMVbb66U21aMvDD72VYJLY5v1Ajc8Tcqs8oxGhfHceHh2UZb3Un",
  "key14": "3ehZagyFPaAVDw38dtuYx56T4K6sp9D2fu9f4vJVaqjhBhxhTHfM9879J44WnzedNaWNSoEB8bDR8jBo5urj35F1",
  "key15": "5Gn5RTFv28KFm4VWMpJzVTdViwZzFUZYHQAH5WGQWYbTGUdvFhKwFpTYcqYJRDzK4qn5qf4skXWRBEJnA4dhZmeW",
  "key16": "4hNYi7rxKmQvnfDGRFn6Vvdotr7PrqWnaTZW8CuM6KvzoRj6zYtbMy6sFtzQXhvfRbPGdfroJEMGBXgNTJCMkPJi",
  "key17": "4pcNy7NM6fe5TkvgeFAS9kGZ8XADFikxjTpkRs2uFvZErBAfvyTxprJ79TnDTqfZz3tuwRpGyb8R5AY3KCdraujv",
  "key18": "98eJrGsQz5kjst93oxvMjaE3jGVLgQqy3Gbu4VueWGToo1FzQMAGEFXzPQkPDhLhz2ss7nGrJbAoypJ2hsPozZs",
  "key19": "29W58wnchMfpgZTtJJNRf4uGzsUF2S8yDGhbi58NgqDQTR4GnPAuHX2NqJT5KctWKxNoRe1mgho6bGYJdr1cvYn1",
  "key20": "5F6LzoWFvhWBqRJ5P5bmsiwZwTrqGiF7CVnZAScaGeAfTdCPzxL7ZeB33nwoX8d87enCh1XPnrD5u4PJHLJwNBDh",
  "key21": "3zFBpq3qfGn1oJmEQ76VD9ppryi33ChJorv6Ve8YPPy7jm8sF8YZP2yc4umjYZ9U56pRwGrpipw885tmznynnGzG",
  "key22": "EwYVSBy8sMGA3N4JEnuTd37FfgeiE5Bv8TF8Jiuk5f1PfSXMiAqrcSkNyNpXg8DyDdgQr9DNbRs67LdUy8u3faD",
  "key23": "57qrR1gpdFqrLpuRMA6jei1mKMpwvJtQH6axTfEckq9QL3TjoemwqtYd7ZQjgqcvmPvQG3vFuw3tjC4Tkk42EP8p",
  "key24": "2YZyPp53ESMaQVoApK9ySkcLyUAC1ef9Tx1zYTBaFHPvmHCCGKZCeDujtMRrs5gTGLAPnTtfdXFWc69X5Uoh6Qz9"
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
