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
    "WTsZYEcxC8KEm6xBYG5Sz3r2hwwP7bgR158wUyjk28txnu82gpyaTSQ3FTnZcuyohLEMSaeaPo9nfVwHmap4g8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65Piqm7ZXw1rW8ELR1CsAuU3Kvwmd1kmDtXHsVcA3JP13bhMB1cXFC4oMcrz14S3ZDRD1BREBHrniytVMyVqqjXf",
  "key1": "2xTg8efHx7ZFpYGa8cWxKLUKsZSEE3L1ok7WiLo4YgeTjWEPc1uyAx1MWkz6PN9acHrJziPPQFpFAv39o2JRwgMa",
  "key2": "3zvs3hJgE3Hwzan72ijEkTTyGHnQQwGFk9pWvRWdsUnNj1p5d2hn6S8o1tJK5niSTy8vUTtG3AnX4XuGcxL2V65B",
  "key3": "4BWeHv92xcPdvcic1n5Htfj4eaZWdjLh9JTkgAJZe1wyYy4pzJ1N8QF1QFxmRpmX6xRHFCuCnJftdnPGgYnGdqgG",
  "key4": "48kJ9cik9sDoiaxC2g7TWhiBgGN3UnvvZKMMReZcvH6q79YMPYxehgW6hWZPfHJFu9okdZww9xnUx4ZcWYtBeRNm",
  "key5": "4ZWBdRDmsRj9pLE59JTP9fzeMeXFnrQ3uvZXP8Ddb5zgGTcFwwQ5LCRnSLDKUUPvYo7Kgax1uTAJ9ZTVcFZZWACs",
  "key6": "4GDWGres3XFkCwEqte7trmocMFJzjCLJsou4TRMmJmcdhGXPT481MA74kjmNSJtL3uJPZAaS4AEHJCummcWePpVv",
  "key7": "WMVRg2suUPbu1QLR27M2hUiazxdBxMvLmdQW7nGEYCdhBvmTEbExvd4mzioSpLkWDD4psdVpFg8SzCU8GytwkE8",
  "key8": "jqWeoJNk3sQDeHKd2VbuGVZVnXV6ioe4YoSNE386xBW3mVdi9VW3UjVzHWzVH52at43jZpRrHbYdTs6YgSdvpgq",
  "key9": "21UQaVGDCzarRE24sUfivkFZDtTyncHQMyP9nRxuDL5VnDKQSPWcQWDRPtkqJ3R2p5fcSAsveHKEcmnMRLJpiXsD",
  "key10": "2AkNWZmYCZs9sNH8j4M8S1sywTbxPyUPEDvshGoNtmE1L5NqZh1bNejkVvZeQFDAv2skEqX9MGKsA32mVZvWjW9a",
  "key11": "2QEQECQYrtG7cBTzThUDqEbsY6xzqMequmjW5yaSPLG6CGBwY42VpcTCEhsWpf654tXuT1968gLgYdKXjMxRX9zM",
  "key12": "vnSo41teR123KJG7PQDR2h3ujrNnNCz2XBVL6X4F8WMA2tANmzu9ZNEDEKGmP5n6MgikEQTDJQskYyQqxngyCuG",
  "key13": "3a1ZZvoCLEsRtbjxatEpXVFtnu55uAqQvMmdYLkHUAnuwazNV3DDUZydvhZZZhCA3zoy2DS2puZgKvbpHphAhVxQ",
  "key14": "4CdCXinPs13N8HgBeFKL4dXARouYh75TeRmjJ64YXJtAnFyqp4QXcEWWwxP7xLGhkvnkzkSpMoDyveF7Rb59pwrJ",
  "key15": "3UPJbAJrh1ZH7NMuow85gL5Zv7c4tKgHBPqk15EgS33EoSMoFY3tdrXc9seqpqNj9FFPokXhdriUrV4zG3x1ADh9",
  "key16": "4gQqzV9xm6D7qf483mmbPceQ64hkAHQgGk1gE23jHzv1kqd5FqdE3AfsgXp3TbKGUCJ9Q6aCenPuhzhG88NFd7mu",
  "key17": "57BzHrNMuJmR3ytmCBseJfWkwFk6zqHkSyVkUKo2bu3HAeX1UXv2ZmmfoE4Do1fzGPyz9QsEuEQ958SscjJ1g5Z6",
  "key18": "25tkECF12sfo2Fje8kufrAiyWwu8Zci2woAhxZdHeNebRKh5zhq9sWhD6wRhizo146LRgdgVFWpJKGRuZ5ezLKf2",
  "key19": "4cj2KePkGEjjUYgZX3bChTiYk4DRRMaqep6zWhQzcnrWzgDGH7BeRGzxQRVm3BQnGSrdJFpYCWhi2kn1wZXKwtQ4",
  "key20": "KSP1fK6aChiJdRUjBqs3DWg42qDyjDKE9e9eUMqcPfaci3Pwn3sgMo7XgCStYc6ZD5B2sxDyvVSJEZuTxKRSYoK",
  "key21": "5BYLnagAFmdTKmeaLsWqdTpAcrPjZKPhvFJVcLTu6ne959An6Bir1JAUKUs1C98dV5aRxPHRd6kSJ99NaoKZFpXh",
  "key22": "3Rq2h5aD8vsE33yG74Y1mfJW5wvZfq1b7UvCYJHeLHar5JvTsQXX8748nuq8tkgsHWwH7KmwuTJX2XyiecYcBAUJ",
  "key23": "2P3fJ7pA65UMVGTMPreM9zUEQ3J4qP1WQAv6kgfiJsAgeayVVjqwsWbvo8xxJSZcoEtK15RTPkMveKmoiMzBUbbd",
  "key24": "53XjTDmeEyu8DHFLkx1xzE3RsFDVWrUkL2RFmquc9ebV4wDbHf7fidEoYgdkwQeFn8c8Zo41o9i1KrAWs58XSHey",
  "key25": "2LuL9BKiWyojugJpUZhuZCYer7jfRWdsWUrRUthZFY2XHruh2hCMJVCxh1A3gW1HtNsqEcFpqP7TT4m4Xg1tEcU5",
  "key26": "62Tk796hEisEEz34CwVhW4nEy3bboTFoBF1RN25QL9MfwrRxXoLg3px8fq56bGm5eVeBS6kPJ7hLmgKZ7CXdD83R",
  "key27": "Mv8UZxKDSB7QvS9MNRhKdG1SkacqGbDb8Fx9tESDUkXda94rFXnVgUgzoftmQZLqLCiXHyMNjwbeK8rRaLyoaVU",
  "key28": "YbFnF3a1HdBp8EZiBMHqJKt352GzCRhzRMQXWdD2oS3QftkFcWsYwMcUNKQZaCJamAcFzyP3Jh25ZTqZiDsGMaX",
  "key29": "3tfae2D21SUnrUELCkKcwFhJy1hr6Sv1Q9qQuNPxUh3a7wJysqWuTjsX4Kea21frFByNjp2fL7x1SLamgQ66WAjn",
  "key30": "2fyXTt2QGwkZYuMcXr39CB5E7QuNEkSRXL74b3mojesuDpxgsDHwwHVcrink9ZShctea6rpwKwm26diojWsP1cbY",
  "key31": "5HUNbEyBdqBL8LZgcGvFzZ9RWeDLfz5hEq2uxPZjcw1yVvLR4pCjRSgLfUUf72rWiE8mVX7tLHazcotLhyENS4Jc",
  "key32": "5hXgC1ttPYawKwU7kPdqGxWjMJDSKXCdLuLCWhb14BbYCK8FLCxTfDUDiX3vMbiXVohs7LmsTAfsGvsLt4rumX1T",
  "key33": "Mhfh7HwD86QZKjXbDJov2Ew7LfBzgzZV9TyD7f6ZdSvDDzjoJ5u8f6ATyctNEYdXzJNSw3ntJ9SC8ofFvZomB7B",
  "key34": "5YMTCsd6Z47j8mJBkqTY1RhTcG1E89GrGsFuEekNUr11TaB7rYwYEo7s33hoVAHs2SPqnkYt9bswi6mtN7Fb2kzS",
  "key35": "2RubN7E9qHU6iYvb2BmhAPS1u3R5k6ihD1JyenvjrkQWGqBz4Fni8VGxmAnfrhtfyA94wMds2AndUs9AUTVvJ4yZ",
  "key36": "2ZD8jXYFz3aPhdJcA2UwJ8x2qnyoUzEfygruZCMLiuCmSKusaLJKu46RNQ499kn6sK3kRQj7CWBCsz1QaucTzfMo"
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
