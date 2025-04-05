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
    "DQYTaDZ65dZoiZrSXUccn2UAo1yAZykZ31hwi2v8KHnaYZLcTKXp8MKqvSHLJ7RMKC48bHx5KGkUjiZ49kvXLxJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23XGR2BqSwZdmhVX1hbsnsY9RjCFpDoMu6CMdsztsiHrLkspm2LNVYo8giWrDjjckk4MJXxDWd8D9AfVLkxc6et6",
  "key1": "HXfrzMBVQQx4xyCJhXCpw1w1WQ2cVrffM1FJWALu9qSinBeCuzYgbPpjECbx7bFq3h5JcH4b4gJansRFdd3hgB5",
  "key2": "5BPVHXBdeSp1XMHrJMVtmFg1neJJ6uhsJjPWjdaDu8Z1o76qyhS4RXQyNJERJSuSZWwtJHP8kHyWixN5M1VqWXoY",
  "key3": "5APRNzm2sffzRgdzpWWY2fdD9gEUeVFW5sKStuApRxZuE2dUFR3T1eAzgpXvf2Hc3iFBEirfB6zfiXo9UXc4JRft",
  "key4": "2EXYuVgPaGXS21x95xffkrKf7HpPEdgnS9PqXEiaAnYqayo5q29SxYHeytxcFXGGDA1PxN1NsZESj4FoWNEFZ1x2",
  "key5": "EwuyFdErm5q1dM8Jo7BZRzEbYdjcJnS8GjBKuSRvwFhrgcmP7CZQFdocUHbHKXvu3m6aL8m2rF3opNws1VwQW6n",
  "key6": "2bD2AtQPTrdjN6oyNXMFTqK5zFumN1bbdWQCbRDuvRh1yPo2tg8ACxVLvx6vhaUPV3zZAa1NxwxcNrjEu2SKW2kq",
  "key7": "2mSPzJGv4T1UhgEfQfxUAmVv8y6ZFdfwkJ9BSG7NhqyP5dgbirBkXJk95mvRDsUeas3usLwkwTCzNRuxwP4MEZL8",
  "key8": "vJSXNuVZMLQkCaXrRxANuJXFWNXUPaQyVNefdhfjFjbPw56rmQ5ek7RiraNdfG5g5B6ZhoWGdLSGsei9oZBeKZC",
  "key9": "2b2cJyxBNwMDpY4UZGes8JfNwezU8NbUfCAKNHxu1MxBPhRjuWgY5qsY4xyfp4LVS1j4qeCbxKTDV96PTiivJhsx",
  "key10": "cwxMQ9S3ze6xLDzDj4kZ6cjq7EEzzEhXr6V2KkFZgy4ZAtiF3bLswYXZHKB4KVwtFwvELdMEeQDY549CwugSdak",
  "key11": "3qoS2VcUnNQHgr87uequk19qvawBsnAkqzXwECQyAoHo9L5K5n1PRUKMtSAaHF2zdouiC3YnwAb15ASN1iY2wATv",
  "key12": "61fmBZ5SL5mQpdS1umwxq3mZmDCASg15KetzfgTfPPbpkk6Q7rqLpZ1EPfUZ2z5ofPbGs6nsbDQm9zy7mkTj11Tt",
  "key13": "5jPiauEEUDN6bufquppxRw2CeJmmjChzawDhxkfQzDoC1Cj47NJEcy2zD7z78QqcoLEsHerfayAfbrYAvVcWh8vF",
  "key14": "25g6AtmQBPMK7smerJVb9r5nb8b7ChgWkFwMRo2p3udpzwBYHYJaEPk791XDVhKnXnXU7UstFaCy59MhwBJUaLFm",
  "key15": "2PRWtmxpYaAZqMf2eytGkRwPBvuwXpM8kLwRb4p24wHxrRLfjnEwXXuPZdLgeCLH4YCZ1ZSgiCCjQLpPtrSbvCwq",
  "key16": "5sWGoW9W7z6Y5MLdDgbxT4QgSjZ3JgR1fsy3yaNmrBxCqBhBii5ffv146SXy7MLDAzNrcqqSpG1N6qWsGyzyZPVm",
  "key17": "8Me6GgaCKDS7LfBDTpgg9A6A567Xz4ustvm52mFgTftB4SGdkn6xge8zRZ7iK7FrXfL6my8bRgRGVBXuBcu1x8E",
  "key18": "2MN7XfrADuQPYMDSuabqKUmGTLFV6AHJtEWcgdHC8y1uijpgdp9eJPaop1uq5Agus8zD5XZrqRrdEMjCkcb6WXNA",
  "key19": "iM7bRQ36FyPyYfN5y2iVp9yWKLzzEonxeLR4BmLUbaLUHBzBCKuQS7z2oSp2JAE78b5aKC6mTxTYSgjK92CT7yq",
  "key20": "2aXBbcCGHkuPitAkbopBwuTyuYLKzNPh6Nm8Wd9YGqyDnLRsU5dZdzrEvF9QYqAzW5b1WwZuSTVH3t5A8QSQksfh",
  "key21": "2P3xEzDZUeSVfxPx8Au9xH8DNMc4GY3t931ZaUHMTTTzw8M8X2ENWA61Ezwmw8Lsg23LzmcNb1QS9QGzf2gQqC69",
  "key22": "h5oRFLBXurSqe1bm4RtxNdNr4xevs9Y79mQFGTkWh5AUQ2vZnZMcN3V67rwDNqXuf6mHZEwN8zjmBveYGe9VPEr",
  "key23": "4bLBoY5wfKQGyYgKjKZAXFdPHbWbGH9MYenEygVmSwXiYZNUMHFJS8VFvHnr31o4sntQqTZaerEKw5BMggFYmDA2",
  "key24": "7ML316aTbNiaveTE9YsRhQNFEhWSQs7VVdYm4JYzAnd5chBQq9RATctHZ5RfTmGD488FU68GmBLARZTqCS6MkzV",
  "key25": "29xWtzpeAfTBcqSLDmYnhVW46VzmmbJyAkgdezSnJY6FdZDgWbAkiADLXRfVA7qyUbxao5W4zgana9UhEcHFHSyy",
  "key26": "21gkFiWt8UHY24Hf5rFHboJ7sm2Z6nxLwUs6gv3fgZJb5jHNRu57byfHwwQR7kjBdkzPUGGvzHXatTKWz9GJZpJ3",
  "key27": "3YqmQzs2WaMN21Dz9sQ3yG5cVuZEWtSvLr1xh3PDoPprisubvu5MN4ZBofG3SZ9RaP4a3YKMwwqUA6jxaar7WWGs",
  "key28": "54SGrVBcKhkds8DyS6Jcb5PNowdyQsduCgjKwCtUFW3fwmrB77ayEFCquLjzEUk99eoApM9HvkM1SSBx2stjP64",
  "key29": "4LTPn77DBzAFnYDxS6Reo6qXSZNv7vttmAyqEcQ776hWs114wMbmp2ByGuGog5YKtjDtn5kztTGQHbCYpKPmeuBn",
  "key30": "5Mn1H5Pt6qp5iS2MWA2LLvXrfUnw8YXSMq2tj7oQNMdE5ww1p3GPczRRrz2yUNvdsSgHw5WvHLoynLB7nytGdH8D",
  "key31": "5Bz2wPwfK3uSBiqChDBPQusrrSMGRmBoYBWGJjWqmqdyT7BwUMQQKD5ZFVxjPfQLeEED7hMLfEWyTBBWhbW6PSm8",
  "key32": "2bQUXEwoUSSoi6DLAwzntZNfUNShtJXVY73yPVXQW1UuuV9AbsvwuATdGAx93vz5PFRwTH1oSxCV8WJEFwNZBLAu",
  "key33": "3JHSJHkir9qkooJJtEvXnyXU6qVVfAjXKrNCzqR3drFrPXAkw1w3RkxiDSV6BC5QnBiG8CB5jMwt9WXAjWfVL6Mu",
  "key34": "5cjKg2AByzzFwxWu37pUBiYcM3QzmuTQ2qZXpGWBx5ZSB8w4z7q8ACKEkCYxCZ1vtVo9NrE3iSRbDFPmznXVWUDz",
  "key35": "47YGniguXRT36JrjuSX49i8A25sRA8sZKFmRKnsaUjqEAS4zKfM7PnJVms9JTaJobNc53DiKxkgoRgHRp7RugWTr",
  "key36": "37gJRTXtMYeCDLgNf1j97qw2k6Ka1rQSpQgZWNQKMjxMCeVV6AGxk1K1gUULWGt12FjdmTC7RKcKfCsMtuySUdi5",
  "key37": "5Swrso11Ycc96dDgrN8Hq4tXBUMa7enq6z1j6KPV3X5mfRsSqToHhTPhvFkqjoiW1W8sBPxcmio3ZYPGozJQf5pm",
  "key38": "4uPvCTLaF9vLL1WxcRPajwNpWUeYSkHg1BbRG2FixLtJrt16wFmg9BeUeNR8wbm3Kamp4y79uvFuTR2FiLs1NTmq",
  "key39": "5Zt7isdKfApTnMau7gvLwcraC2gj1bYqZUk1b72FYaKKZkboV4qP3GucDzgipD5QmvMjGLw8kLjb7BcDEzXdeX5Z",
  "key40": "5wRPHwyn1faT3ipSv6xQG8uBB12bALSV4MaJ6JJp5JJhjAugiKKsYJTPmZUBVbHtG83RuKGjBf8MuieQbNQXxZpA",
  "key41": "kNunyVJpeA7w8DACY4zh8cxyRf5NNYfgyYYWBiXd6RLnjcMf6GKZgoNZB2cBSVG1enSAF6R9pjXjxdTsxmxwjNz",
  "key42": "4GZZ5Df6h3yHFymTK3uyRHZoKrEydGWbVchR6dtgNexp69EnPP6tEANAZTTAhfoUPPqPvouSsFacxhNTZTG1xCs3",
  "key43": "EZ7PLjsMUxU1QitPdYPnBNqT8i3TPCuTJjsr8N4Aag4Y6V4wjNvS7JRqDgRF11UU7ZYU1SFK6YvWkznCJo5wLjP"
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
