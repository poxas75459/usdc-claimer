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
    "eCzT9XFHCM48LSgstAEfGb1ekHpx7n1VAGhW5HpHcCaEW8BpQJjZAtwbcj7z4eXoU3MJ3fjkoHymFf35VqwJ6pg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ADKyBaPYGKjQerF3byxXzPNrPbEnEVvz7J3LL8TjRr2gQjtd5eGj5jPjDNCJQDJZNT355KMrDzfvd7oDDy69K2G",
  "key1": "5oNeUvGW9NoMr6m52yGP3adTY9pwdWXS6EvUcPYXioDrLCZzdMpyJ5RT8qjNLkJeL2TiDENvCvXtgfyN9hfEef9K",
  "key2": "4UsZnsEV67dUze7mGTxwbz9DviMJ3CiQkSvn5xcjH5ZfKyoU9DLB4hhgypLonP68cT2dczsRMdYYx85DArrE5sbz",
  "key3": "5TLviVtKhzx4pAgSGQViJjR7KQPmDQYEoNnvixhiLhFY3SknLWXTb6H5iQNe3hzcjy3akMtUnmx8ErwqowdPaxzv",
  "key4": "2b3LTwE5PPiCpDh5X8xJL6rEfuZqNGqdfvKFUY79hbxMGA582mKxWx3y3oLRW4r7o81ymLajD4whXXwiK2dnkqcZ",
  "key5": "sLw6SzopXzcwUruSVRXga2KuWFozUyQ1DzXQABodtvFW7u51SwPMzYrF8wNPEcDjEEQhTpRuPqeNdx2YjtcRhxT",
  "key6": "RhLSbdRUGZoJAxzCRPkHBRTmHsjEYZG4DfVYC6JBx11rbpvqyhj5ob4UreJr3o5BPiuu2rA1VVbAVA8KYAVbwWj",
  "key7": "5qKN5pycExvWssnyR7X2YVVKbH7Du62M8sYhrh1eQqGeztRupHwnsfG3xvAZfRvYpXUg2hAqaVupmTZaEnQFhgW6",
  "key8": "2uPG6DFRZay43xuHUV7aDBzVtnZtZR5ZUESJaFdaA9hgQA6a9v8z1e8jUjpXBSfkyQytTVo37iLLYvSqZyxfGMWM",
  "key9": "2aMStrGw9eT4kqPKiMoW25DrEcpwNkx3x2Y7SsVm3tKDZSuaVjfouBHwkTkktvkGzTNxaoVzC7sL5YUTfc4L8yxv",
  "key10": "2Rf8Q5wRkfQe8ZSU2tyvsc3KiBAzor1YNZj71EkZj1f4ZQsvY3xNMkukh5GTqQtUbA2gnrpSNgWimYJL8vxxuXrC",
  "key11": "HB3VWoCBJoynFJAHJ9ZZtL5vL6GiZ8wmZEuNWitSCTHTyRAXGnVr9H1uzyfqPxHWzCvE6fCCHn79zs4pKRiarMS",
  "key12": "4WpZBLpDXYZSY8CeNWVjjHS7bgDvDabpRLrxCyWHDXNNpJHMuo6cVUqpQwg3kfiDExcmNYRfNSDQ7eofHPUqG8Hh",
  "key13": "3fgaBBPtdVHJfrXxt3uheu4fQLuwjKbChcHc6rTgiYj8gfQf6wJiy6VEUuivHTJBUwRt18nEmJBory5ELKe4NiiA",
  "key14": "GE9takgn5WfXcq3GzP3G6d96ZKAbkzobxtiWuc6hGT2VJ7jeZYk3fJCPXikSxXVs5agiUgBEbvfyTEjEDvCoEqa",
  "key15": "tDibxJxEd9TCSkGQKC5nF62sg4ZtFwSkT8Rm6A8gubDxoWNsb6vBXLnqzz2a6yM5Gv6UiygVidm51btMGywjPme",
  "key16": "22Wmqhqn6GtmPY2bCMZ4Ti3RXiZL3QiemwN1R2rFBrEjiUfNKRSe63qdNhSM1QoQGsHwoVwDS4gipuNwDSAgUpc5",
  "key17": "6276MyZA1rrYm7dMYzEtSx8p8XmCmfNJciYunRjz3mMUCGN58tR7pTqhGTpmGy9XjpFXjDPxkNqMvj4dFm27rY6Y",
  "key18": "4vzHtMjVg8dRHpcET6yAPgn5Je5N5HPRDYN12fabkgmExr5cQmZrH8zvAzPZZkNMzwsaSTiF7X9sRqFvqhrqZKz6",
  "key19": "3B1q9tCx2jbb66cXMH5JxpLPsdMESD9gQ16zpaMzPp22rXPGH3J6Jxe5XwbcoLGZaEmLzHHBXb4xHo6RedeFVPBt",
  "key20": "5GDK59o6Udwzo8zoM7hLKggiBgQTVsmWcAypRkmaPUhxAwwi7EGfuLhynYw4D582wx9X38nUwgiS8JzRzzgZC84L",
  "key21": "2x8FiPs7DrjyTTgjR7G7jfzsuqu4JT1vxrDPcwsbSxXvApwMkiRK49GRPn6VuhxkyxqxfBvUtvdxmXYqNxPbhjMT",
  "key22": "2zbjX6Cjw5Qy85gRkjfHj5cphrjW59pss69scLNVVb2AGHQZfVERY3uN1M2HgV4meXHmq58cFP6C49gcKyX7SHgE",
  "key23": "3vUgEKrmvvrk3c1DneJqJCyxJky8nfYuyrNUL7rgbn66HmwwpUsjan7efrcFpYrUXhioRVY2zSt6sXvdqJ9Ekcrv",
  "key24": "2figusYGEm6rrWnJNRzuJq26w5EHfUtz362Ad6RAxFpSNR3dazRFCvC5UVCQgd6bF6CqzbLQmYanrQtNh43x7RD",
  "key25": "y1AeizjqhcdHHUxeKR26xDzyCpWQ4vQdtqxQYaMEPdyWaYSPCFkCRN5enDx8DhSGsQks1LN2SdmUMd8J4YqMimC",
  "key26": "3WcfPWLUakFwHniMQR2hK3VPToYWWEnA2gxjueWxrpch9XAuyfRGQ3MZZ3Zkj9gw4w3fcMjbUehJZJmeeqd2F19y",
  "key27": "3Gu7Kd6MqkmBUT3WgeCiWdJJRxHTubPYKXD2xZLCUq2ao16ao4LCA3sGZyRRbuRhVG5BriTyCeHFEwTEVvMNxtii",
  "key28": "XdKFrRuL5fPHCCN1rJNyDkvuXwPxRkq4YauGzZqXJvPu7fXrTSRyBDBkLAw1UgMk5NA6r6efSdBwWJa1g7KrzF9",
  "key29": "5sKdMeGdSPEqAw9SzWyWgDeK3eNmHr1gzpa7Wt9SRqirtyPXPEFeeErGCYqbEs1FeGqmgDZ3ZUqwc5zVfwZ6ghUY",
  "key30": "4nGCViPqNYg9mKjgqp1gd9KHfeQL3t6DfJLBwwNSFjMJjxHVR7ruvekic7AHpCM2oxij7smobvndobyda4ucGhxG",
  "key31": "ZWewHiJosvFFkeDwvxbfHrwRS5aXWPDeRHkCahiFc6B6SEVfnFsaoeWdqsz4njLw42W4HNpf8RJeHDhpVFL3Mjn",
  "key32": "5Rym7rd4dcyo7aVsqLND7jrNwZVnetXCyJwnMvrZANq6kZk3KEf5uJEHwziPBbnkwkoat2oEP2v7QnsZX2ZJfDtr",
  "key33": "4uuFABwH8BRXynoHSNPB8YtTtHdhBhrPcUfxdKryHVcTVk4ruRwiV94Sf9caeiVaHd3V6r7v4E6beWMXrw7BxEqd",
  "key34": "5wJbSn4xqtjzEerqzgAXTSdvnY3bAnTsBbGPrksPeUzJrUF6NbkTtuLBNj25rd48hu6RJEmPuhTiGGfX1pgm4cjs",
  "key35": "5Kp7y4WQLUKGBjDbpVDYcSEZxthEukUE8GQX77jQqcqSS5LnkV6KFFZw3qPY5MwXGAXS3KbTnFthD1Wkb9ukPcFt",
  "key36": "4DYM5cvkFihGd9L7QQ53i7AaGssPB8U5AqZyCZXiW3xjVorLFvYnt3rGQ2kTz4dEqZQqhM1idUvmsd7ueX6sBnGW",
  "key37": "3RnFGdU1S5nryZppox7mkexHbNF7UbnTsTpffkqSLYAcqgooxLMmweCUAL8AJL2quNoK2Zzp2rG8TvbVcyYe4MEi",
  "key38": "4EB517w1imtzmkTAzyAu18t3yV3jY6e73CffrDmXHr3X6Xx4A16dRSu85JRyYNad24NLbhWQrrcrUzijpMBKySLV",
  "key39": "2S6e4a5QmgwA3UH3uXJzpt12S3BgZDQ66GKe3tTB7b8C2BXjKE7RMqCfwXGTQHPsY9HSJC2e55KaE1DdQAKjYvMM",
  "key40": "5eUdmogzHVP1oSRCoqcX3oAMRc5LvboXKWR8gps89etQ1HGT9BHnFdrZa2qvBaq35j6A1QykUDcpts9yG7NJDjaK"
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
