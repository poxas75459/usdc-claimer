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
    "5ThJdZreLZiSrqtGeuY35P6wnn1p6dr7tQifZUmZrqtsCfpK8JTNwgqu6eKkfCbtDef3MzuLA9kDe1gWLtQRB4X5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JA3CMhRY6uKKBLcmgJbQj6gtDZoKZEPsHwEBmkoBDnTqkT9Raz71J7eUKsNdtmyTYaYLisbHGJw7PyP7AF95WLb",
  "key1": "rLMTJJ6uC1fb4z7Ker4kyjpY5cqgKAS5hHytxd3ogsq67EqRX1AS6D7GF6QNyCNToP6eao6j9iib21TdLQqPzo2",
  "key2": "31m1Y3qUL5Q9Uv2MbM5VWzXeiXT9r94mvdXQQMydPUELgaTd2AzkmR23iFQPw7C6cHHXQBuDjKoGoedd8is5FnWo",
  "key3": "4uWGia3VeGWsYFo1CLc4ZvZZTAu8gfducGu6spTbNyY4RithMrHftmjRnSgA44mvjDYiz45PWCy5gap76cUUEzy3",
  "key4": "ihCcH9hTrhTpwdMygjrXQFArdt9mu3pnDpCCDq5QR5W6cndx8F2Kz3rDRnjR5Z8qiP4a15xCmhidXuTbgbhWNT9",
  "key5": "3TJ72EpSyYAUsBgy2Hr5QMMexZMbBBUtRgWziHsZX7oRCug6gho1JxkKEmZxa4GXR6rwY8aeVBBoivpFcP456fVR",
  "key6": "4Q4MRw9JH84YgePBZmc6mffAQUEUykM9cSoQezbBCwNnHB4Nu3VSmmaYkWnQBNr9LXTkXD6e4k29mrdEdfqS6tY3",
  "key7": "4FWSxo2XoKGarkV6YeNGfKfzLffhgEUgLgCVH1Si3X7pZGjhG7VtrUbaJX3UBm2igcKLEerJpjTicYLUt7BnD1yS",
  "key8": "4MSCCx613LkwrUxquzPKuxUcXWiSNJSKnWX8htyYhDQkM4yMrvmrjktuSuDLgrstQN91xvVGe2AbCaq4DQiVK3D2",
  "key9": "4bxUJx7gYYWF9aBHmtgW7ESYh31PU86YKZQMUvXhEEpyT8G3dSAqJKqj9GjjTQqs8c7dyQyWTFBVHPpvvLDq11An",
  "key10": "3zE4bfzMehHogRjAo53oREofMjBNzkEbUAa52ygbNSdQUeVuic7tJAz8EHagrH6YF9JHDaoVHcMs2GH8zJY5udyF",
  "key11": "5QWRL6rHnQFUEsW5Ma5QXapE2rbfuywSPu9DoYrxNcu3VELZEd6A235o7YBqyiQDEKYQ8ecrYpApHCbXLfFCQg88",
  "key12": "3J5nNbEkH1pmAAAcdgJJgcCHCwwWR9xfTAvHnpYxaL3iYJ6mr1MFGN9Sr5AXJGho8yZCU1uKxp5rtfDaQiN7T1Sv",
  "key13": "4r98W47gV9FSpVLyiv7SQXAA2HSUqzh3n2bJiFM3kQxjkfQJVntvi9CofiQH8oQkiQpQffCUuEjV8SqCWdz7GvjX",
  "key14": "5PMLDJdt2uj3h99YHnqQbsW6GaL9te5uTDHUhviGHpAHJ8HqiBYtFvXxh8EBaLwpYHn3Pp5ePXmfpuuEkWXDenHr",
  "key15": "TeHgEdE77WHTxzmrV6U9D5owAQV4yB7xaCHK1Ps3vjSLi3zLE8MMSBQmgybScvj5ZpkV7REM8yWa3jWMe9VkV9G",
  "key16": "4stpKUySncGKQAXBZoo2KxckGhKxZgixbAeLo7yYfZxCZTEjPLF3MjKuF6dBJ7DJvEBpgwgWZMbk3XJ1Uf81eiyM",
  "key17": "3GBxigZm6DseC1hahJt3TA89ciYAKymfvcPiobq4PGyqRbfAjJkRVPk5NqDqju1h5zh4naABw31pQwVY69yEKxAH",
  "key18": "66XZnxq8TWn5iL5pmNkPzqvGbfV86YPLVouGQP7Y11KerheGZ5A28ycwCic5mRu14qe5GSaxcc2aeu21pF7v9hLJ",
  "key19": "5rmegic9P6KFwcUzbDfz2P48rhNdzqsW9uvezL3u3NC42NUad5dqcZnHE2JPgR5LxFP9J8dNnYkRFzZKoF5g5WDT",
  "key20": "3KHVifEf29oLHqdk7nR2h2gwUuqwYjfQPuMBNwm3yfDmuJAcbRKzG5VGitUvCNFMjh4fTff5MWa7jwUfYBgCpPSh",
  "key21": "4Tp7T7MZJqCxRBLB5X7wwWV7st7w5BBSABEmmdL7SZzbSNXFbPaUcYNupakLGAmgKg4ii2ATQnLuF3DX3HWj97Fs",
  "key22": "3SawQJjjDKo6xsm3LRxVpGEFnApxNTJmn1SvrBhfhGwaFTsTyDytwxvvp5X34KYwcCf2J3Lpkqjr58Pg6mD3buCn",
  "key23": "3bNvx7wQ436z4qJQdBY4Rv5Woqcz5xPYzGEVG5Ruw42Ei9dhn1yfNjAGUuWh71aH6rtaToxoZZB319FvLcxWuwe2",
  "key24": "26HmMGuaGEDZcd9mmuKP6gnvJodYgkWJZurcwqycvmZTA6pLBNUdc3USgJTY4x3r3TDESd4RckP9G5U2znuNJXqy",
  "key25": "5V8R4jRaZ4hh9hk2YAUXbc6NiTa8vLhG77Pf43zUp9Tnbs1NTB7AJtQa6CAVdt7bBqTjeSG7wMBUvx6kt35Tr8kQ",
  "key26": "3Kx762B63jYXevhuCUEMRaYi2tFh2nezuJyKr5WFtceNejQpAvzdfP3uTw8dGUfRPQD4sQdpRZaKD3x4cXFqrdNm",
  "key27": "5N92qtFZXcmituMDgfBXNmLCVkio4v8r5bYgLFDvvEuJZUFPsr3NGRPg5oagNUhy9WgGeAyif44QguhQatXkmmEo",
  "key28": "ZmVYVfeRWURoph5pnFugckcqe5vbbHWHaaYKt6yVG1ZuhX2YuFZaefxBjC6ob7QFRYxsBxentPYcUv9svuV5ZRW",
  "key29": "3HizB49bGGMNrR2duC296mxUtHbabMPNBP3XvPevuZsiTEBZGfCV1HwM83Y9KXWJx69qAm5QPQQWBAkRnuEFEjXW",
  "key30": "4VsxU9wcCrFr999QsWYjHz6vJzCtkSdturYtPK5YA1WV7faVeZC28E6nf9bNvGNxKbJHgbE7b5XWTiwUWSr5fETd",
  "key31": "Uy23tn3rZHPJ6bibq97v8ceopvmgcLG2N16YSs1xB7ZmCo1FguKRHVGzAzn8Vxrk5883bUbWzZC2H9qr2RNjcvh",
  "key32": "4GzfHCJ5ACaT5KpMVkMDvq3ZciDRyXkub3eqseZ8VmMXpfTABszWmQjGfJP6axGEdohWLmwomeoSE8A98ZrhE9eN",
  "key33": "2gt45a3CprYFfATTp49X8FTXizqQT3VMgLdw2fcbPUmb946UoXtm9Rhqp4DQkcP1GkKgd841QsWiSX8A5Qj4GFNr",
  "key34": "4tS6A1TRdCdcxRacfMSVdrdUaZc8MbgUhLgB7fZU3gPogwUxm4ZSoar2Vc9iDvUiM3Yp4pCriJ8QFSri5YgRHDLY",
  "key35": "2RVxCoD9q8Fzvz5WnWdTQqLBaP6A68DwLYcU8dUsNbnSYMkmznKesxYsLnSRgkGNfnx32FFdVZesGQPnS6KXRSun",
  "key36": "4JXhLqceavBv73jbvyA7BWEhT65d3jTMKP17dyBSc19ZiXEMadisAQUDbuyjEeSnbuuz3bMuSa2wVuYX7QHRRf1e",
  "key37": "3S2GpZbkcmMyY1LozpQ81ZsP8n8jv5TPit1BZ1MAaZfDR6W9RAxp72FsbxEySQiU8bHf4BS7spRPdAy4Ry75s8xb",
  "key38": "3Hs5WooJmxe4L6dC34qtUcfqjH4rGsmf1pB29uzjQ4KFvJQRHbmL4JtEGLqnVTojbDkZuJn6H1t8sRYtHqJ6R1zD",
  "key39": "51wJuJdZsQ34iq1GVJwaJqL6fPrFGDFp9RLX1aGwwkZRdFhzS5APUZRuZWeSGJEbevzGFxY6MGYuXxc83JQCFEgU",
  "key40": "21cc3HfzwE4GXW2Mt3rBAazfMSCGizNrZNxKVNtBaxpEYVhDiuXTZYvPQnJoH6TctavotEEdyNrkeo916jB5yDzJ",
  "key41": "1zeMUg8TvqL1BvWj15kkuNamY7kcM3aKajoaKqtgEjoLBUbgxS1ydVJXCoqKR88F8Z3Pk68qcjpXSFX4XARtzdZ",
  "key42": "3ToRejpvBVKXQqDB6wRVgG4m3mnvpwRbSwTf5kxFDfgkC1fhLQz9d3dexxdQabvs3GJiLVZPBdazHGJueThN2Q6C",
  "key43": "4DT9HNpN4MiudFYzJQAXnTYwCZBRfux3bR98xwXM2wFj6fXEHXdxYk7MyzVDfdtdeVtXFF8Yd8AwbrwwciWWdZAB",
  "key44": "67QdLCkokqYx163xv6SdiidNuSCMH4jRgFnbTnueG3XJMXsSZsznBibKKqHSGYFPv2vAqCoZ9NcCJUbmoJo1wixt",
  "key45": "2fJoL9dgaqaJ9DgY3Kp91rR4jPD68J3gJLa2d6vT7JSix3QKQo2wpw1Hw2kLkztScqBE3n5zoq6naBBZYYucbe3k"
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
