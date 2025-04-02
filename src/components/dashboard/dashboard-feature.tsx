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
    "63fpF9ShkHg7pDd5bVsCyBAhebSgdyLq8uTAtyXRXNiBRiYoYaJT49Gz91C9pJXM7t1B6V61b58UWTz9frNFdbPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46xxS3LnUPLm4o4iax3Y9o4j5aTX9BtwY54h1fMATSbL2Wqo46VSA8hQWC34nbakcJgxuTZC4Fcgqqgt88VQ4H8e",
  "key1": "4wBAjSixwFmMTf5J3GtmYG1ugmiwvwhJQwtVh6V52obxNpqKMPXep3zfDsSd7my1R2vCFxHGQSSTY3MbnnRj3Ty5",
  "key2": "4VweWZAtbLU97zbp7g84xNEJ4dt9gSw9DtrEofgE6Wa9AQ2Ut9LHkfTSNvpJAxpJtb44NLC5tVbhD2dQtWZTo3Yn",
  "key3": "3wj34rcaUqycii2ykDxHdsoqff1jRs6vbLtehn4aaMgu2CCHobPSw4YgucRSwVnKZ7Dh21pBjiGbV6wAM6qTWu72",
  "key4": "5MFJphWfnRFVckanLMbmW5kJhapZqNyNMRp6WiKtogopXoinhVzKqxhNMd2ynmhe559k6XrhqZKjvwfycvW9oVjZ",
  "key5": "4Ppmz5wTJCYLFL7cm37r8Q9k49VH9neSNUvbHmDqeL75oN394rhDwRDdPp745LsG8hnnAr1LZ8R8B1gt56AMwWDh",
  "key6": "2zWEniAHymDbUgU441t3rDBDQsXkfPiot2GmJ2LbHgdfNFg48TgMgW7Ac96xobzSMnprAm4bPzzfCyio7ySshbwB",
  "key7": "5xnHErsy27JwMCsDmwfigbAjaDTNXPYEt3mfXnZMnWdo73FPb6EfkgSukRoDU6vTobbqK5PVNSUXS4wqDDCEgWbA",
  "key8": "5snQdweEVeAcRoz6mgjVxasXqxuzPeMcpt4Lmz68ireQsfHtLTyDPBQkawh5vfqT2JV2TRfxYcXPo2wYiic2nGhe",
  "key9": "4GiBzM4LRZ7gmerGcM5AfhFbSsgQEf8fFAa9JgmAqsWJwREcn9iKuPwYTZVtpnbZFddxuKpT4Xhg9aZSKU3MWaDG",
  "key10": "3h9YHiQapCUftC9McsBjML13QJ9LsdSnxi9vCj1DmuCTxEfHB5tVfzBH9YtX8csyEPKC87HaHRLKqQJnkn4RAau1",
  "key11": "4GPt2G2i8pidK1W51D7QgxFrrV9cLBvcA5SXiVkaCmkzTTTNNkP5sRe5Kfiap51i54pVjQPcdz77fiwZhwngHW35",
  "key12": "4EGH7JKMcQdPmg4a9wQvvaypKngkqQ9qt59bxmBfWsbNQ8QsBp4feDSdv5FYzNa2f8xeG6cS6kFoxh3aUgvAcYqT",
  "key13": "2EHwZRnyGmXvcif6sAduPRL54PttTrNpq9d4CBReLgGUctRQDvkGvSXs9FchQPzQqvfL7Wb5kitRRuYmYqg746w7",
  "key14": "2GNA5qaK3J5TkBwLeuvNESmsaorywDLvWhbsLBK6h2oTdiiNquv4QgFSdepSCZGQF5iP1JMhMsh1DS1ZkF9jSd7V",
  "key15": "5sciAyZCcPPeqVqp91nVfUTNs8GHYd4w9NaGqvrwaCYPKYyTPJ9KcRDkrhtmAKGTDWdQkVdM57A27jk3awUqEJ58",
  "key16": "4r624gGWzfYveAt2RLGAY9QYWNCpsqKNE1GTiA2kR6o44Jg6tfgFwTVXH52uTouCz9eES75YsZbspZMRSddyW2WK",
  "key17": "55DCCcP2wj7tXeGURKZvfBWjjEL87VKuLtNsdFKsjopByznA3AaEi9SGb9dPxnemWRMWaFrpHXUtooZkBpyuZiHe",
  "key18": "3pZ7ineAVcW3PfBfLyyRxC5DBssnPtRDvbP2Jea9XV9NXU6N3fTRXjasU4UaDezMzy96hm7dZTevFacK9qcJ8XRc",
  "key19": "2fFYEYhW2mWkreEufiFzk5GomYKSLQcXGFgSv3JRfTfEvUwHPxK8uJGNvwDhUQmGgAhD89H56rCQvubNdpjaPNkC",
  "key20": "3ZqPdMwpSQ3MaBGjy2UiSonzsFNCVuR9adBLAmyqV83PWrFYg3sQD6yKRQDyM7NPnk8RMKgtEWSFGXTAPsJhJmwz",
  "key21": "4hY1PozgZp2DKTqTukxqszg5vj5aBnwSe9o44cRJYX4suaes7yUpraKzW3jW3PMnegycNM4NaBYQwdtq2ggTaQy2",
  "key22": "3urb7EC6GJxSL9yELcqBDsxzQr8yWEUz1BnJo2RYL4g9zHEqBMMtSFZo55DDjgDoBMr3RV9TtuV4pZdZrZkCMt2Y",
  "key23": "irU6FpS4ajogidef1Mdfs9o1UvypFu1zEHFcUBAKaNDxGrLoiXkhzA8FuQW8b1FWixNSAbpZDgJtiseKswuBBN9",
  "key24": "uVS4cPBjNgaokCZix9YFdxJnitiqgGFUxv1UgrnNRtvaVxA6rb53cohwt7mSyzu7wb3Q4a9XrMZ5BpgfXMVKp5a",
  "key25": "52oYgNDYkk4VxVn3NjgFjDG9XtCkft18gzX7JWPDfP6wrhZtzjF88QzJJse3PND3NCKBu2cgCZGLjc4GAVCkre4t",
  "key26": "HK4RvKhSP568bxHEdfXexe1Voh8ABxTB1P6hqVrquoYocKedCzpPTFhn5XGsaq72dH8SiPe8QicPqgT98NNBZVQ",
  "key27": "3WGYZmh5ohMgaqDcRQf4Wdx92nn5BEHUdFVq1SDsx1NRhiP699BzpWeoHcQhm7FSMdsdtv4K3gmQFtj3vRCHgNk5",
  "key28": "EJmxf1Zdh5v2tHNyERZUhaMravCxkxbwXn6JdjxGTaezxaYDJRPFLvwCPdPLxh7DAjYkVGRh1Wc5ahveQqskxj8",
  "key29": "618vxhPFeP3Cnno5V1WF9kk88ckQUSmJof3DhaRHnzPDq96jDKn3fEefJNVGn374sx8AbBPLv4u3aPg5WcPic4SM",
  "key30": "2vK1pF5c1wqrn6tSQ249Z76kJHjey7h4YE68GNmYMDnKCdh1TBAZnTFTtyonnU5zjXCSFRvk4aoABZWMQHEvy5bJ",
  "key31": "38DspkX9VBsNmJTDo2jf4f6ZFgCazLnSa5yhPGjgQCge12ufChWjhLt7VpznBPkPHWfEDCe7nc3riAwafSveVbe5",
  "key32": "w8Nx8oetCWngXrpUdQAnXWN2nrcYvGy63Zbxng79nYZWgwNTYEam2aQxj1rz2LfpiMcPo8RDGiEczP8p6jSSWNy",
  "key33": "JiNahdJkxuayus54p5uAbhSrUH9yYvtAVmWiXKp5u19h5myCTah4rxKkBCiTL8rpzzNjp9Y1paZ79t78xvfmE1t",
  "key34": "5a38jCNrn2HeNF95k4Ka3gCqTnehNPo1MfzVLT9Gk7abG1tNKkzkhbCzUzuKzmtcux1Wibcwtx4d4yyyJ3sP5aXN",
  "key35": "5WK3ogGeSbmQDPEoHFTkckDR2x1ctwkWCgp4oQsmQqd2sM1g8zJ5fxQsHuHZiabESsCUEHVPufMbPukeR9io2Fb5",
  "key36": "5ncnQgT9VqsGe7fKvYKaAVGBxMt5YwW4tHa5douwvR3mHFiVJrbbqF8HERwACcgKktYigKzb9JG1kU6EJhFnaqa5",
  "key37": "5d2HNUQLGEyghpffRnHhymMKxzMaGX4nVcSmLVH44miCJKvx8zu5eZ96fKNwFaZLvjB1D5Ue5dEVKe7hNnaS7gZV"
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
