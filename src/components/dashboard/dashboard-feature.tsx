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
    "VVJfjdCrVdqRk7NA2c1dRHugfvzYBmjJKocEBpxiPKe1964nNWpHWY6XM7DXJmkYfazzzgc8fnrMFm6CGhnD1S4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VgNyvhKVW1ZtKWrhLwvLYgbVVRTPoBHiZ9ZWFUS7Gk5iLbEC4VdN488AMHGmuF4XfmkBFqcWy89AnwUsFzETAqS",
  "key1": "2LurfibxNqQgW6imhaQRp23XzY3XEDZJgUVnTYNmFJStDwCrf88YacKcySGiei8PbyzcNHQNoW2GVCqJg61RRnf8",
  "key2": "67ShnQc5KC5JcdNwiYeo1b9LrfkHt3Z25k93G1WK4pEafzgVamWyTyc5gEDhLndGKkrddEBZbgJyAxWn8jAseTTN",
  "key3": "3zSAqZEXC64kEF3KTat7hyTdxCgTAD9fyVbkYEmuzsYorsrwQHqGUDZBaizGPQ7ECQVEjbCEjh7dR7m71u49DqFg",
  "key4": "5SUJ471LjJrS968f1Zju2jSZhc2JMZ9o8MjH1739LCcauo8d8cBaQDFa1gwdcy2X3hn6z9tFGugpxcYXxAVDm4cc",
  "key5": "4Ehk4wu6XaP5P1t6SVcJZkunRsdjQeTfBCu8vBkQfoCj446ZcyFmro3hjshEyvAxsaqry2boZEeN7euHudhcCK7D",
  "key6": "2bmbNLbcFSArJp11WvoiD4Wb71nq7sUf1ALduBQqVSJD9BHabGnS68tJ6Lt7Zns94iyyaeSVJwsMUUMz8X1uhUCR",
  "key7": "3AAC8r2vVFVgRompwkvVfk6p6EYYhKL86qHZHpcC7LbUg2oqTGxLXfXLm2B9Wrsiixv8uFf3PJLL6NKceX5Ec4R7",
  "key8": "FjBEg9RNvgr4CmoYi5wGWZt55JzESJxDZje2WjsDeApA7G9PCzjHS2iL2BCYchUXVTBfA2poN19C8jzzazQbZyn",
  "key9": "4mu4Wu1PcEyFoQ2vzyUAJTY1NbYQtyqUtiYah912mV6zgBTTWxaT9knWHmaE6coGSCFM1ExW1cxi1Lgvoz1jnFLf",
  "key10": "AbdVfZBCJKvGaXLVeSmTTkQp5HHfzGyLt97ggKkJwp1fDkEi8nbC35xe7zPDFCyeiLKJVJ6Fgn9jLC8BwtWy8FU",
  "key11": "39ZLY47UNzrwixHHgypgPGHBw4JSywucnBYTWRLx49BjQLa9szrBEqxAoK5PQn5gDu16cBDYybcJ2757joPNxHb2",
  "key12": "cPLNmgm8fwF75Taf4jUL4ytcq4iE52SzTm933awXZ8z16RheK5DG9j6hUQh4vsYY9RuE15UJQDaWfQzqGKEkRPt",
  "key13": "3nt9G8hsVHs92UfPkAJPTJnZ9QtyfNKHHUFTcdUN4EAaeCtUe731WXyHYEGfgnsrXgRAWAFiq3FSwvsFjb2QjPuo",
  "key14": "4eZczifYkmSVbi2ysgW1zDEn7GC5q7iQzaK9JPkqxZCzdoYVyHfzTkTEksKmcZZTfxKqAmoUq6pHRGGwEvLn1sEF",
  "key15": "4Fr4dWj6fDL5N9yXa1pmmRJG51ej6GYN7ZBxQt1FX54RzZLXtzXGowRWdCZVhskFgAZgrTAyEtYqLPWpmzsss4cP",
  "key16": "3gr1hGbqJEztM4CHJA4kApC6DWAb44tQmPQFzLbnevMHZW4vZpE8GSspLYv3S1QR8J7BSYyBxnQ9cd1Tm1xmnYHo",
  "key17": "TSGR7NcVxrVvMys7HQdPgkRJ8nvzGQLTEJDFZY574EJxDFMtBAf5foiA5KxZfzRib31TLdNxELVEbqGGJRx7khd",
  "key18": "2CYMPe5VxxaJgHYDRw8gLB3KAUUZ6eTnVCFPD9tpsrb2yfxAAnQkQSPAEof2nwb4eUsAsy46gYTnLHoAhNbLB8Mk",
  "key19": "3avecUfQECEatBbJ7JNJWnfEC9z1eLuJbKsV5Gy7CJ85JkXswfc9zymJEDQfXo2pJ5n6aQ4tamTZb1uuHNbxiwvt",
  "key20": "2NCYXkt4Hp1cgjWLfk7GgdAS48aqgXcFTqA9ebvmRfygK8an2u7oMbmCyznRjiS2zk5EyTesJRBL4JFCjRiMjzu3",
  "key21": "8r3x35dAPgmdSiFj7cUiYjLyEXBrTJqCigmUceY4Sab9S5NiCmPmMkLiWgauFDigD4UvV7nfMZUXy934NoZd3Ls",
  "key22": "5WCKMgQEYGMzt2KyAKv7iRKwSC3CDQuvwAMobDzwr32fHW7EgVrQb4XJND43i7DcMToT2DARLGkGKUVFhwtJm3HD",
  "key23": "mcoSnVJ4LS7nbNKxGfjMyqNrs7HCfNXEkRTqXVaG2aXr59KQhVcNkH6rDKv2MrQbiU2XRGyYUDRudWaKkNaRrq2",
  "key24": "f5tEUuhJf2AzBUXFncjXECS38vWaMwzmq8ERzcTATfvLT9pVYSMK9dpphTDP2hzcK37anftaT1WD7yAG2C9EB2y",
  "key25": "58Gi15dQWgQFkYrUpDCG7dqhzAfjXqm4VQ3XCxQdcQWD2VEbqLcMiPECW963UZ8c6fNSjy2m63byEHPRBxz9WGBP",
  "key26": "2EM6xog11rJmn7wcm3RJKctLCXaGgQhqoFVPLoz2P8RPycZsYX6zUqV5d55FPUpHwSHsozSXnnrt8yH27zQ8Avsc",
  "key27": "3W7A9KM53176917qx9ZGDJ1M2YD772NZ7uWFTtBeWj968k652k2aoLWQoTJ2Tpa3UGj1genRvwqopZhdk7FANNXU",
  "key28": "4nzircBKVrHtdy4DsYh1ntDae5HZgdr1UHF9A2xSm6ds7afnDefkX64yXkLqx55NmArFofg1oXxjw4Ctk9NkBnmx",
  "key29": "5fcvi5VJEfeDWzL9z3dsjDDisUzYYHNkgCmHrCWC12Nmd2i8Y3gBhX56K1xG8ShRyvDqWmAMYCZgW5dgGsozCPwY",
  "key30": "KdRUog1ZhFSqkwF3KE2CyLFyHPjDDe7Kgc5hcVK88s9kdS2QorBWmSs55QLc4gwydcV21zdWrUFFY46o4SbXe8A",
  "key31": "4EbtjxVAjMUMheFNXfx99yWUwg4Fg2keDyN7YFrYiqhusvjRE65eqktXVhRQjAGFtb8wYbR11xe1TSJGFJrvWJtU",
  "key32": "2rD7YbnybH7s9Y6BSy5DWYcNLDRYstSPSqEYZgQQu2YrXrejR3RkfEKf3xj7PTFZBJWFpZMi1wybEB8m38ojPmm3",
  "key33": "541uPcwQBq7KwjXGwNQXAw6noPmQxdGMfFMdiQh6qKwBrrVHAE6ZzXV1LEVw5D7jWozC981fDwaCPT6WP1pfyquJ",
  "key34": "2nKerWyVuy5iFLA1YjdRrYGFX2H6Q3h5QsMVSvYuGShqoV63LZFmxytfeurjTAct5dYWAeBGJgvoQfCSrgJi4FcA",
  "key35": "3TXBezachLVnzy658TjP18CsMjnbjkxMHZkRVh53vvXNfwv3azna9na1hi6JtAqpwdeMF333tVxEQj6VrPwfmvDU",
  "key36": "3jAaNEmspnRUv3dFF2w88GABKoSQ1nisZQ36shwu4wME1Nwd78bW9a2qZjzZrLoxFnro8rEK92mgT34qVLY466Wv",
  "key37": "KzADUAg1XJ7ZEBkSAW7E3rw9p8xzTqtYFMPBbcAQQhGNGF9FQjcV3QENqePciz5FQ2yGzVLvxDs6k5EjR7cv5MD",
  "key38": "65NS1tKeycMzB6tc2gibo9UNR8p3Vy75FJUdywhy4mGKhEA8gRfqY4pCkicqaFSEhMcj5hNs7NMPnBdSpJ2XykpK",
  "key39": "3DtJ5NWQj61HoJA9yrj21teN48eoXB2XX2DVJraD2tMV6o2bqk3X8dzi6uSoSeywcYCxGQgfGVNvDGjZZLA5y6GS",
  "key40": "4EtvdvWbeQwZtEy8BP6TwzPFX3LfTaWTpPyyVAkqgpeisJHKgkt97yBoTJwP6rQ2dM6ymmDTmbNpuA5PwZqd272D",
  "key41": "cQseKJQNjXVNF1wxJCFYe8ygDT8gnBw7Xegn7HiBcTAqbGVLta2Gtj9xckL4uooAie3khqLZDHSXNcmPRfbpb5W",
  "key42": "w3WnBcidvaMBqi17DHaQECAJ4kp1NmboMDzj343JwdLHAvBRPqzJdoHAbBvZgaXwvZ4CAkTSpjnMaqtEqKZTA5D",
  "key43": "5HZEbb5ZDa7h24rYRsuzNaKNUMcAX5hM4AzAWsuvoPZcyq3b7simJYNxbkkRyiR2ow7zXbqjDzBRXmKCRVyptGTX",
  "key44": "24x5a6XLFFvE8GsjgcBMCK37TZhdp3911EovpTAL6fTiQqgcgykhia1BgyHw7Mg493FWiKXkAxFg8rQro9hhU6wh",
  "key45": "48UYbnhpBq6jZLVXPyhJW5YiYgtTiqNKHzvN8iwT1Z5qEhvxbTKvazvn8HUnZGejdW747xf1DhY7EUsKnHFNLd2W",
  "key46": "5LFzUsCpKdGiye6xLdHCKJwoxNo9dmM83SoBytqJ4J2LNAYxMVNqNS2bybtxUvUPSMh8Z1kCWGZa5op9aDMZt6JV",
  "key47": "3nNv1ZtRhAWEpKLccKXJ9P1FnzqDLYAo1uYzvruVoavAQrW3EVSjReE87bo9LNkvrZynvYtZqofMGvyWpeoQKhXN",
  "key48": "3Y296P1PZbbePk67v4JNhWRUViWJJ26hwMs74j68DLTTu8HvnQ3DjDA5vrGoj7Th9VEjvfKDBeRDu3bj2jixTnvi",
  "key49": "4V1zw7uWDLnHCBeYxQTgwhpd1qTyT6mg1d6zDzxpf3zNc7T4dMoZrEoVep51VtZPZzZ55R6g2MUAce961innmK6V"
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
