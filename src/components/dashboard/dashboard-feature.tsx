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
    "4teec4wezVDGUjfTzcAi9H8MoNU2YviR7SFkQebeqe5hdYdHPyxycUuC8UKkJRqmHcWe8xGQAz34dXBvU7DX7HHe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SGQAqL4yPbE66FQYXPzCMTpgXYork3TrcsR53MVyckuEVDxi714qYoAFavogtQkVhaBwBf7WsPNZxEPLzyC525P",
  "key1": "26ByZWckwkpjf921bSLQisEPGmNaDeCcEHzrsnzjPjsKo8ebUTzY6GYFz7gZYpviiyUjezw3N5q27x9Mq8K5gX28",
  "key2": "61Z8tyftVF9CNrB8LESaJp5xNqCnwoD7GiHHwJtFtoCGtiLroJ2Yryy63cb786cn85wBESGgT5RVMBHZ4n4vm59x",
  "key3": "27npnvgeWQeXFStzBhcXdzHdjLE6VMMBwtmbKKe6mbPtjpPgsxStuF8n4n9JFtqfvHbKqw1PRwtxQomreKmDGxcN",
  "key4": "5qVxnxE9QjNjE3nsTmE8dgesCp5W1LdGEPeQKmsY9L8uqU7NNmUR8HVXGgoAiZAL34WWZVJB6jBFTsuN2S96JBdm",
  "key5": "5otpQqm269uEVRBTdtBzPsFwuk1anvdvg2GMFptEGJLydcQvgjsF1AM2zL2BHgTpFoFcbzLb2u8K6UjgKnXMNLcm",
  "key6": "4t3zNwwGmPUhFWoLkDoWpxU9A3Ecc7DSRTsLaNLqn8iHC6tn3XJBa3JGJ1r6nE6DUR9D4NzG3KUqptw65x3Ri5kq",
  "key7": "xGnMytWmUe8ABYwrLyc3fSYzbTnuf84RjLEkyquegxjSeyxoLwAunjp8sFaDdSMHrkw6c6UfBmsdJo1PSv41s1T",
  "key8": "2SAtVHGJBRm6yj8cmeRpqjbm99bs1xniuJqF57RSDj4u1nE9UXRzTwNXNDXx7asf97h5dxAFJFNj8rUPBVsMQcuv",
  "key9": "2MsuEk2xga23vnGNXFBc2ERFqi5gJUwGmeXAho9DTfuoRZUmUtidS42Nmb5fzK8otRvg2ZMShK2CiGguCWgN11uy",
  "key10": "2H68dUS6hpKf7twWubqhARZPFwbfhxrVfZvQ2Bmyd6DkCvtVwydZhRuaGKsZVjhL6aUWjAtYoCoVxW9WrwJcdvcj",
  "key11": "2dyJETtDPusq7EMoHPb43VrCjCWExM1GVJ7Q9K1eqYooATfKTixLPYRPeH1V5CJYGvWZfn4ZyHhqfJVpbEaQKvMt",
  "key12": "3kQCdZkkKwq1nmRFcyJHhbw8KhUysARR4LTjFitiEab8kxXk47GpwfqoTFxd7jqjHMDnCERj1vNo3nWVpvNp2yXW",
  "key13": "5ugug2uBdDC5SWpxTmf8P1hyu6imPhFcN6uc99yWCZXjB6eLpGZfq5Bq74ZNe3Vfbn8ff9S1aDjDyiFXn9AwVDWC",
  "key14": "67o1GAG3zNyh2kdsRNpf9WLirdpuFXW6rsDhVLGXcV1bLe9CKJ9LwwgKQRNqHMMP38XFUJ61mbTDejj45GF98qir",
  "key15": "3RwNeJ6enfqCGjWsbcnLi9WoNQWGdSpBCFKBCeSmLzDzuE3wwGgyhCBoRBDZNwsUKxYzGqU5GDAafjpcCre2Gkxm",
  "key16": "2t4AGWSbEswSgiQJpjuUpPEdEF3gt4VSw2126E8YMVbEzxQkkqJKGTwkMjmLTfso7Cc6TC6RdT2Sbhd8bjjRrRCx",
  "key17": "QD7nYz81xpWGLms1VZgLY3sgtLUCnWdmunakc2DrkQfW9yRqVsoSr2k7CgSTQbZHnq2qjNbdXYgpWbZ9qnDjFvm",
  "key18": "2SJRMmYDMEpRi7WTiZxe1XARkE9oM1bejrQesHkKQAuRATF3GR4Dd36Ar2WEnHmYyhB144WxKULmdz8K9PCcSJT9",
  "key19": "5yNUNnEXwqE765u3ZuMx8EVBqR5a9KHJJZDy9YgdZq5r3r1VDbc5t8S8q2b8rvoYiXp9veiZsJKPkPKJzXZB4Lne",
  "key20": "57igyFPD8fnFMwEpLqcrLswCaXvQ8ZCeJTqJQRSfRk4qqbHusZLJttCVsAxfDxAQ9pEUwEnvFYhY2tfuaxN4NNLT",
  "key21": "31xVkBfmTZP8kWa7hmP9K71nbRpWZ7j123sBixJxCiYxM6VrbhTxESS8AUmK3ckhCrV4qwxcwJMiPdrcvJqeFfJS",
  "key22": "hnm2oJA6JPYXCtZJg7SZxBqKb43ZcFv2wrxXBkrv9Mtcwn3GPxNRE9nRh1HCqmgNYpNCToWU6FDCWdT95nBGA1N",
  "key23": "4J4c2bfBZUwcLhYyoMhU54M99t5rMJfsxqbCDYym8CezsHcu9YAFzKvtTVaAZGYvLfz3XZrmXSRXS4bCscBdqA6T",
  "key24": "3wprhSPta1n1iXixHkWa5fKGY8WgEVHw2H6eyBhUdHATkV54d7xQHmL3y9ZT7ezYpDUkh2o5CEiYFyogjW6kXF4W",
  "key25": "4RF2s3LJS7f8DAqzfNQU2RP4UtNw3X5cDVGbapKksoGzSwsjLsfiW6uxhPcAYExaboqX6g3eqFLBQLKSauKUMCXo",
  "key26": "5aJ9T2DWf4Jaf57feZcuiL7NjQ5LEjgYdkFguK8FmqW9xtCWV8RGtz5e4SC5QBbxTxMgcGfeWrezaiFTAuFrkC4G",
  "key27": "4Z76rmcZKaDVvtzFWDxfRgL3w4YCJjkVAcn157naouwrd5DpfvR9qhq8M1uHmGF85BQ7tnaEMXFpmJwcUVuXKfRo",
  "key28": "2rNAjmREn2tLrr99pnupM1tMbF323iVTBHCkig6EGzFJBuqutszuUrDrf6jj228EYhYqJ3uLhdtinoAs9gDVxFgy",
  "key29": "2oWrsAU25Jme6QLagrHWCyAsdc8XWzHPpZmSrwzggnUtnLNiHdPePgTzx68ph2NjhxHZmAp4wfWE4tEkgFj7swFd",
  "key30": "58mXrzerJNUXp4Hw5ez5kwp3opJNmh6V3kVaVYGkfXsgMMGt6cLpgE5wvTbUZ4gv5y3eTSSvdXmWCx9SgzTwihxP",
  "key31": "Z98EPw4LcBGSsMPqa47VLPCvHVtkMsYe4D71xRmJp7Pr3jPoM85F2cP3FMEt3ymnDT3Jc6SVWMc55VTr56phKJu",
  "key32": "4hc5THmeVjhYxbydwMH68FWWhnsBHMxLSeYSGc6ZxZDktnMdPPznm6HeVpkdoKX9VSnU9H5ZbMgWA7Xj3nt94wwc",
  "key33": "3bff3YPtw3iuq4ZjeXpLU8riG4UMqyTsSdGBMTxiYeU1RrsCaKFpRSH6rcsu5GiqEXcedVdfCYsqmYXkkCK4WJ39",
  "key34": "3ntoqxwFc5YJfZqkqdLEFfWoqCTiwDe8h1cZfurcg1wyhjrTq8exCpSNGiooKH66ogZkCNN6wnFahVk1PBTyoEpk",
  "key35": "2xqtUcpiTqSmkqzhxgcz6aSUXx1qTedgeHs5zfrL6ff4M22VJhZigAeoNqcGqVp77b9BBcqzotUPE4C5HgtyRb4Z",
  "key36": "2Pu25FQzx2iFEVMjueAw4ZomDXMUSsNRvDdJqUHTqdCqRLm6HGNJw2uhenv427WQptRJwP9uzutUxmGbV2aNFYvb",
  "key37": "3GcPmUE8k2CHbh8T5YfFtrjm8uwn9u4UjCJR9cUJgBrCEQHPbKjoa87cUA3FhNBfbQcMFKHWB2gz78VeYGsqD35u",
  "key38": "2LFcyYTFMFPQ4JoSUHaq4Tfmd73TESuUgdKPpEtVd1Mk2FncA2gY7QCxBn6qZTWBvAArtfevRjzqm8ggoFC2FMLz",
  "key39": "5mLrKMPzMvSo5CzWYqjJtHd3iG1jboHzeh8Hhe6cRgVAJov3mQXL5PjkzeDi3VCCQZ6MiNaZJXG4QZjgMrPn1dkC",
  "key40": "2xwwcC2WBPKowQEnWFdBa868apQRP14guLPXvjZeUVFuZQy5RrZiDvqk2AGVxoqr565qYgAqpvv3wMoxb4QfrxNj",
  "key41": "41N7eM58g6avE5go6fS5qEaDBNFhNznjCxM6y3eLUNuvaikNAWKzREfpdbkJBG8Ewe8zt8xYCyHLCyB9aWRmBdQs",
  "key42": "BU6geX59ff4AcCKdkgJRYijw7mYJDFt954xCuSVi682XYPfTuvqrGUAcALpWQp8W6Ve3V8qFmx8gwjQZZTuJg6z",
  "key43": "5vYA7CVjMfA7kfosGC92vaTPxGZKjGeUYRKKebbXf1466KmPNQNx8JffPsGRYRLCMfuEkD4vZXQ2Ug1izjPksSkW",
  "key44": "2jDM6jnNyyXFS5gxypQCsunyF27VDXeSVq1ioSZSHVaw5wDhMbQjFYLLwV61Bs51t8ccjMusfthzCGhNkUSvNata",
  "key45": "62LQMjFPujjLLm1TbjYuE1xjifDtCVLrbswqcqwxNNfANQy6HF8y6GATs2h8azN5sqjev3YneMvfiPd8Tzhk9M8B",
  "key46": "3bydDcDi6YmDsVHXEh27PHkJoQNULkdo67bye5RrEvLHBMftQpieru6QreVqhUCp7NZCn9sQmxujJew37ssJJfRm",
  "key47": "61j6mCNYLHhiNC2EkWqA8GyoM9PZfXBybBohSoRa4vbt3V683orXJDhuJT2epmgcHkUKxV97WjznMei6gyVVyyi",
  "key48": "fj3fXf2hoUqT2pkKxMP3Bm5UoTGbAekJnKV4rM1EN6d2A7zJUifPkKGRGibdatusgAxBL9BReCuDP5kd5VX7xdM",
  "key49": "5f6uarFSe1GJmDMfa9x8itzk8ayquNjYczEasCjLSWdbQBcdthGeuTBvac8ZdveEUmzkRHuKQea9e96WWnmzaLAN"
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
