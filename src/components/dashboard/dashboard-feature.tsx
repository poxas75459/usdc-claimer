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
    "3c4UEg4eqGNwb1HouopQpS4y52Q43819fZpJZCXGNWX3DNvepjb5Kw4fpzywAPcFpybRqnvqEyJLK4ALR6q3h3qx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m4Hi3Qoacbz2QBMRnNSbLvXL8FYfzJGaQXmrUZ4FSqbVo2NBZv52JSM4A67FWiAKZUjTzWKZRwJ3iirgMLivbrW",
  "key1": "4h7jshFVj34CRE6AXDmKoSzASj62oazYLUngysJzwiTpUyLSyjSJeDr6xdLHTRM2nh5Sw3q8R6EYgbzZpw2PT7SE",
  "key2": "2pJVGpCw4CkCnwbrfUdA4jh1EUP71rULX6k6fJ2yUHRY4JJxi2m3Uy4PqopguD7AvWqbAue9kgSeDS1YV5hYzzUE",
  "key3": "3T87Zysn37FEEAoUPFFrR7zAa3kRANip7nsLB1j4bBqhtgbQyWXS71mb6X21eabTZc2X5d96UfqBUaNLTjsYVocf",
  "key4": "cj3QsCsHZBGqQbyWjVtBHzvuDXZWgGpY8Ek2DPByuUTn9EwmnGr6vPcQ7bkQ49owTaWhNoE9hd2gZJekoZMRRG4",
  "key5": "4e4uE7QohmRu1rR2r9Vn28BXrAPU3Lpheddvb1eAJEinhTAooUQYHrXkG1szkDqohVSc3f31nHNzpUNf2RsrqkVy",
  "key6": "5XeVz5UChggQJTyvzgbkZC8cRju8BVU97YVrvSZn3Y9JFJ8bruA5kc5AiHakRi2HyNpdokFjwJN7d3ByKbTqH3Ys",
  "key7": "2XU1sXvWTpBaifwy1bTLcz7AaVN6YDmuxhFQUy6rgx8UPgMYoi44J7Vmaz5sYMzEx6auz5UTZ6mtty6Ta2qvsMaU",
  "key8": "2xqReTswxXAHE7yQS2optvvSXGPFqEs8ds6jnNyuV5Fu1pydKheZTPBpxJuGP95Gg8GGkwA5UQvTPFJPdSQBTtZS",
  "key9": "3wmBYBUDmtsdF9JD98icsMXCyuoreW93ksRvugVDGCCf2YCBcn69vhC7QnrQtSMS2Qa8G7aw9E1zvPRxR2mcp2cz",
  "key10": "5M65Nn8zEinNAQnbBQKgHFaLTcs4rgiMUbvdQA2k9m9TAhmQ9wJrByhhYcGYuxWXcpBW9n1MGQKwjnrGeNeHkTVM",
  "key11": "27PeV4Mkfr6zvqmoEKSxStf6QAUvr4d2q5ciFvQisvYmf48mGyDAAFvTYQYPLuzY6PwzFAF9PwyFgY72zGrRqgZD",
  "key12": "2andrmGdkPW9pYLdQYFRFcawkGJtVKh2ZXccqTekjoh9p7ZnozpvNt5Q2oxQrNKAyKSNV3b7qM4LcwhbPZG1WbaJ",
  "key13": "4QWk3FR6QXJBeGLrcf4NYfzwbpfASg4d6HQ7bzAL9XyN9nrCZ4cWFcVKzF2hhvR3Ednt7z8AoBBRcTkq211ZQq5U",
  "key14": "5DTmXXx7Eo15R2LVRNuih5YduuLAhWBJr9PQBadT65t14f3ASB9sztSZ8MMc6dcEb4c4xdqvifbNB3t5DkHkGvZj",
  "key15": "wrxipYzFZh4vF7FGb26n2uF9dkQFV9BMYg88bAi88SbG3syBFGPE6nfTFX8hvy5TgqQPKCxsSN13zcGnskN5jMs",
  "key16": "2Pb4U4UxP7LRZgmbNq4zrR2uv8J8oHuUxDXFzxrWqwwLYYR7yWMTWne2cudCEsoyedEVkXqZw41Yw1nvP5b9s2tv",
  "key17": "2G6d1pydTpFiTtrjF3t3Hz9iosAJt92WWKaojwD82JWSRC9jipFE8VX7TmEZNspuJqkV659dJwDVmGShh35cWixC",
  "key18": "3UPruRHG2GSieoz8gp9eN7LBdTc5dFrPv196MxoVQcv852wx8cvwM64qxVJgB5Q5yqeWderekdvjf29CU1ndTsTE",
  "key19": "2uJVkPrn3yn85bo9kX7Y7kMsXnMgrKJ9XxyvyduGwe8672HRnrksXN93rcExgaagbvamCV7A6XSeJKjyEq85p5rF",
  "key20": "5bCzz7QmEBZdMttypzhDhKTZ1NHqApqdhSpVqjSPe1ezBc1jhCCmKCzyeukWesFPdCQgCc575wYCPKZsxMZdNevz",
  "key21": "2arfpJg7KQyjJLofVFz5XLtDndRQX26cmtxA5wWaq4pheMiA5WMaK8gAf4G6su16NoYwzSNcFzAAnPv4pcSj4dtB",
  "key22": "2mD8sJTETD18E7PSG9yPnJ7AsiwsZusaxZSUpDLs1LjKQSUjabi2koL9uAsN5i1mYy4AcJ594KgzjZRewz4WVyyD",
  "key23": "3AuB1aaGcnWj22YvtseVy4qAsmDVjGSMYwwaBooAPskimaeTKkz1yHFQSWTVV65h53pn5HCnfoATQBAxCQ5WXYVd",
  "key24": "vrGrk93DMJBNcV2CEJfcxUqPQyBYtmrv4xMU1BSPQugxMao1tdQtkB53iu6nLTYf7XwDkPAJY5SDTTjWrfdYYze",
  "key25": "5cizz4dJihPcx3Y6TyWS7CeVSgo7pMwUbdtruujsFSb6YApPsQHdkC1gGvqkMcVFxyiEAMYrCCziWyfcuSsfT4Zh",
  "key26": "5PXSTw9gtAMZdJQQoUfMa4uLmNiT4Pa2UgbecwFWYgrzuwnAua2FhAVnAAkhQhUU82hn99fT9zkzsnjL5p4VVx23",
  "key27": "5gNTDN6GC3APi5eqMexKTuBBRgU7CctAbnNPK7dwAqoV8SoGPV2n4bFUqxoxp5DiJxqj98FnabTGzVzZn5dPk8tq",
  "key28": "3kTZkjobsY7H7ChzCG9UjxpyWJ31p8LiMdFrx997zRfJVHzbCg35LkPfCANYx6mKLSgrJtziuj1P68qEGSFBLNSM",
  "key29": "4b3W4ARhKGNaASbBfpgEUbmL1GH961Z2HaV4KegPUuuznnnfh36x8bAptkPMgiZhgBypxuFVFdCcfjbhapf7q2av",
  "key30": "27NVdd5yZpR48JXFgJ7coFttf9mbr6YrjGsZZTefRJ2KUqN5h34DKERQ7vX4KSFPBtSyiCDZMew67DdSjRKuuoXY",
  "key31": "413CJiW7PtSdcbCPSUpDWeQ84SLtR7ksP3wGwbJ4Xhuy3LDmmkGoFpvG4EsSZZqDMR62wnzNs1jxPWLX6kGy1E8K",
  "key32": "2UvXudTwbXnVnMoesKftfib9os6YhrVd8G4V5JuR9vGp6WPSJGp7ohaNqAPad57MT5mobHtWCSxTXtriKpaiX5zn",
  "key33": "HfLwZURp48ov1yD7vsvzKuY5PvebuGt6yMDWcaEVNJQYuqto919SqLYnKq7o9dTj8anV8xG1JcKbTeMHtUjJ7Yz",
  "key34": "3pu5RqJjMzy7QV1L2SZW6z8uTgfoPLyTdyQaw3SVhzdJjPQFyXjx2nAvnyYFxjgAKL28MrtFDv99fUuUh61RHK26",
  "key35": "4VeeVUznQU8So3gnHJnb21WK4vkFTiMZTF5GabLTWf8oJq7NxKbotqpv2Ew2PmAyUozHinBeZe8rN4pSDUAsJ6AC",
  "key36": "4s3o9qaWdhV3QGkMY2AJcYeeJxe7weHwrxZ9gTxqfNQikKZJc31Qesqk7NyWTKUXp8JCV4i3YaVSy1ex1cj8TJiq",
  "key37": "4HbKp6teHzvKn7rcAEs3JqUivjxKni3TTn4yup9b3TX87bUke3veqrKrdJa2XkeZhuoDsox8i7bzusxZ6MTpiZLh",
  "key38": "aYA1g1dUrxrWKh5xmWYugiwPEGi7L1qLuXzhAxLhHTqcaPpcprE5zT5fsT64EwHzyi8jw9W97oSrnUFBm5mMCk4",
  "key39": "39ixovdsx7V84Znkixkhivvv6J7aqiux5bDT6cLqaf9P3acshyKrC7sQCPpXone6R9BAkQiqNTJ1eWWww3pBatCW",
  "key40": "5Ry82im9J9BDvzvBYCvu6UqLUmuR4eM5VrKwvELQjaCa58iWmPMRUYkfzhXtivtcy4zFXUkNwGFerhCxDZQQZsFa",
  "key41": "4P5h3ch6YSiKAULXHRVcS1MA9dTWQjgQrKjF8mntazCk8mkkwgyVrNLQH9Czic2LYh2K2748a4Ertksv8v13nQwr",
  "key42": "5Tz2u5VuQHF93jZ5BsmkpRFS1ktQG63L89rh4BRWDo8oTxcapuGQwH6u4fNRQhwrnQdK8w2iT6DbUmRopNHcGNzk",
  "key43": "5hABv2cqeEYg4CsiLZrmZGw5sgKHqbk6PhUQbUbjWPz2ZByvnDhKiquX2eko8g7R7Qq7A8exqEmQcpgLRKGcx66v",
  "key44": "AdLjZtKg47mXKhWGb79x5G3jok97FMxuCXz3BMP7kymS2vXbva3mcdbRnsdLmxbNJ7uoWgnpD8SYxgtjqQMcFbm"
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
