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
    "wt5NESab6St6nhaCMUFZBWaTMS9oRc4z4D95gWCPMA2yKWN44LNiymZbAxFZVdR1WJ9EjBXn5VjBQJh1YzDxezx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qZQxNBMv47MHHbyNSbi5nHRom32XbonpJxVE1Uzh9SF3UbvCyNttxWeRehrpRQpuYPyuRtAvyutEJSjdYVWhdvb",
  "key1": "C3QJyFSw4fzkGRY2cwmVb4xwrff6RXeeujW68R6WszgcfH7U1Jns2u7sNEfg2c1aeSLMheDi4RvmWwnVZqmRBXi",
  "key2": "2Qt5i86RYwRGS9bD8z5QFwrQWiMxwEtXinR3dAjPGFDRXizfTDxksLjWkjKsvgjnJdgwX7AfEaiDHNuEG2dkTavY",
  "key3": "58Me5PBg3LNRZQRp3dT1H98wDBrwWMZiiLroHjxtHgMWJFogxR42hJAGcDuZp6839d2z8sgUCSbeqMxwQADoXkwJ",
  "key4": "3eTiJYTu8rkuKao1Lz891VZseQtiggj5XV59LeyU6L6vtRvGVu5AchwVzT4FWY9wpDN9shKzeCuREDyKe6g3H4Gj",
  "key5": "3Ypwoi6CEgLKpt2TtumndtGJkfC9iZndDDf3FBRj7QLYxeiRSX8rfjiy7noiXAYJCP9G3PV7t6oTkGudXEYzJnK",
  "key6": "4QeEG9bGosiuuk9AWPLEC4oJTBHD2WgpVLAyuPGeucYd6sZitK82wN8jkcnWbwvv2imzadcZ52XVDXeh5sim5rYj",
  "key7": "3YSzAovJ9JaL5zyk2CubmCZruWBjiayns6iZkgt5anPa5goZSzn41VxrkJwoNSiEUxrSZeEAWtnXZ1JQgv5GTVMN",
  "key8": "2ten7Y1tpjLivXBDoQxjqiPXB5vJAn1gRG9FUKnhS3fZFzfdm1tL4oYRsSjwJp3eR4ghLk1KHwL4v4MsV5tXwtGu",
  "key9": "mc7e4aDJDWNwrzS1EjwPyhdfUmt77Sp8oikBmhxkMxDJkgdUuTp7r4yMbpwHdzF6Bs5htpvoeJkoBXvdSTzUDJc",
  "key10": "4pA9oakVJASLd6JcaR2m47R57Vks7RP1BV9rtN8dYENKyN9mfXW5h4i1bhxpKPkF6h9xnh28w2z1ZPs6xfbenQmU",
  "key11": "L2JVAFWsyBTQrdWLKuV4jkFcPKWeKURAmxTxJw91aU4Zm7Da4c2y8kdQr3baeiasba9KcEL32gMhxM3iputaECL",
  "key12": "2yx8CxguB9ReuHpN76zXSere5A6ZyBK4757jg8zdAwDNWNhERmZanbyCjoV2MrnY9ju1Lvyy3ah17zyfk6fcJTNc",
  "key13": "3JQ1CkTaZU3Tgi58axPeBEbyRFS4UxZmaRxrY82q9YuUGcLogRmeoYJ5TLKy1LqrEmKTjLW8W14YRT9SR2qUZF3F",
  "key14": "4k8PzrXmrbNrmgHuMnuaBpxh44e4oQK1vSupFGgfHrfbXhEEAmRizfw2TbhPnmT552bKuHY2MdNNZgAYtp89hkJX",
  "key15": "57Buh3gN96azA8CVqhvmLLHJqCb6fdSN9ycGjr4YUYZTRrcAupAgmRbuUp3RxurLZDAjPTEjovVMt4VpRUjKqwfM",
  "key16": "TfdmAf2E5z56tWP1qB1LBcQaeZjWvCsSrFWgmz1tphR64XzJJ6rpSXPjCF3r6YjEPH3dF5bNcuF4Lr5x45oRake",
  "key17": "5hG63KRW9cBtt76mB9T5m1q9eQb8MBmTaAPGVwiQzkgAKxhEufdCepovRE5PBY4wiWeNaUMUt7CmiwW3ZdZaV9uM",
  "key18": "2uWSDsi8GPCyYsGCZAVx8NocCWRzLYNUbmBYuTWUZy82xNbkz3eZTEsXBWtoZfU8HuCn8MCzpxzWsMDTQfB99ige",
  "key19": "3ZuZzS6Xs1x7GWPBvtsWaja4TKp2P4JSY31fLYKwywacbUVQoiw5NyBnWfek5SuQLEgqPgLoczaQSMM1QumzJdFz",
  "key20": "56S81dfX4ZQMkF3BvQ83b9wUhn9voBdZnGQfJwyAqFEJrnKaxo41nKCHkfx6QzRinGgwkFRWfpBZhcQkk4t2gCYt",
  "key21": "5jC3HeaWt1ZU6phRpmzT4h9m4qQxhRmaCdRFydfdkX47zqpks3af6gUXTt7YV3JNxhNJcT2YggzzwGbtdpCc5SMb",
  "key22": "3Nw45P1xEzsvS7ya7P7fNNCqq4xdkZmqAatT83Vo7QRcUqjWCf5Vx6z5NYL8oR2yrm9qt2tdxrQcJ4A9qEzpBZBZ",
  "key23": "36Ab9fPS2QNqzptGEdYoAJ5PYxYznCNEQ7BHJNefkhM4um329T34dsy2FSj5Sg81Ebxwc6BHCtCKJ944giXCCQ9Q",
  "key24": "3fc7qDfN1eaTe4ar5w1fyLYcrTSQSqPgAPZHKnPXjBAgmgBpMhHcKVRiLMAVAxTMxvWPTTiBBRPkYHj264AHMLSW",
  "key25": "2fJcW8VP63pxXGRBxVXQmjxXjLx3rQMWQKandrZ7U6kxz2Gd4cao6qYAkqz3grP1HTYktRamEpXTAwb9WVUdh5Ze",
  "key26": "5s3vauWbrc86dXQNzo1oxbakW7V8t3oHrDgLTHtfayKRGVivGnJY4KWHT6FFqYBXHbjCrqmQXT2TaQgZPTdyxeMo",
  "key27": "3VCuyhsqtGSgBXbc8jMC9FK6Nnto1GK5d3BnDeeE6hGZVJneWXyhwasYZF7Fd6XrQ7ieDhqiw38wqZgTAj1pSGnU",
  "key28": "2ML7eCDuxUVyenZGJrnHNBDgLDz8j2517S2ksganZAzSqG7hCHY9oWDhc8d6jW1m4RiGuyeSRvy1gYgQpFGwQjQe",
  "key29": "2N5fNAGharPnSi2zSjWYvcdro9RosGvDMYjcx8BpVUWuLNMZuKKRsXSvqCAVpmkynM1KpjfuFyKcZVum2VjhriPc",
  "key30": "2h96maRA1BjqkJJ7LeKJKxVsJb7ZMjTBDC1Jvi4p8nEvqAT2zYtNRgDpdPBMYKqke4tYHj82Bc8yungTYiXnGJRX",
  "key31": "v3exZCsazRSucra1shkxbMFMwoDojBMMBzxn7CosQHYXCoHdX1oJzgMGReTx4S9GCBoGfC3bBRkWYKJYw1wH8E4",
  "key32": "4xV7Z3Ntbd1itJUep2cTJVLrUBh3da4PvMdLb9CGMYaknZQnNUXteK4HfqHJbD1yw9TjJhbJQqP1p53MPiWTWqLK",
  "key33": "4jDUPX3u9h74Z4FqzkeaZ52yr9bx7XBVPQZrjuaeroQkctYZ8VbCehSJi5PfjinUEP6MGyX4msLRHBdsJ1P4Hvuy",
  "key34": "2PMJGGcGqMn7c1EUCGnbfpL2dy25WRyjZsbG4yMVhCngfoKENQBWnJrCj1DFdpjRV6cB11QcbKsLtQxzEMU9332h",
  "key35": "GVJpPMuoELD5utyR1idB5CbTUgUbBpAxnjYyt9bn69wfNJZbS2KT5eC3nKDR6hNRacTkQ97bwqnof5iPTwe5kL1",
  "key36": "rVL2XzdktCV1DcUD5zq6BEgbEW1ZpRpdudXucTHXnVhFbaGXJhjcRJ1LfaK9EaZwd915aJFXMrHca9mT3CMD6Nw",
  "key37": "3hMbpKqT6mdZaYjX4FWgsuLXH9UqT4MvBFnF5WhFpyNbwo6JqEnPh65A7msnemuV6bHoNsK9KRrXWRFtvCTuc9TA",
  "key38": "3atzekLs8GyGToNfm3FJNF1ZRDYG627L7cZwdjbgTF9RvM9ZkW8aXHxqrs9xP4kBaAummDWkR8p9RrnZ8ardyhQE",
  "key39": "2F9RK3amDHgZuuZNCGRZNJaumc1qfHDfbcDw8LLdoHMdpo8XZSA3jgQMvzaBbwhQVzBoCVwREj5c71PRUXsB8L8y",
  "key40": "5B3W693ka7URb6uvr84uv1om51GU23jgeqegcQUnApR8AakvQEm2SMQXEtRw55CeG7kkvvW2gWP2q13MecmLP44Z",
  "key41": "4RiTKDFKY8R4SR5oRnhNMQHaxitzTjof25cF9XGiiP94RWDVivpudnX6HMFabReSAAkUNgBAzDMcPMS1RW9uBbkW",
  "key42": "3aYAF3Up8szCe6Nen4AnPJHmc9TVHNgaMp1rGJdhszYc8Vs2sZnvihwv36xQuui8jKkPQvqjBVAj1g3TaEQfb7jM",
  "key43": "5rBsyyVZwoo5yEdVRG2qCHJdsyMhXWN6TS2i3KqhkHaBLHZD8wue6gakfNxxPpKXdZad4Kbvhk7zEaFU3Po6UJem",
  "key44": "5p4ymphZJFbRMx3ikE4end7cBMrWXFQbbWHLtpJAqimM7Xom7GEEcHq8SbirV3uR6kJcQUGN8fDBfpTaKUyHHwji",
  "key45": "3RfK2cnQUYSnjbttchgB9JVfW141PQeNsSHJ7pFHr6BFB4LAi125EVLFWe3K3TgD93wBbLrW7SuCneiRpt3He5cw",
  "key46": "4dK1BYhCCRHxmpJqrYd9ibKsPZmo57qQk8eRR1zgrcvaHAbn5yqPugjARUYmsWcuQRDTzCgZnoFfii5Wd5hCgP3g",
  "key47": "53eeGfuohLU8mF2mQRZawGLcLcqRNgHSf4QfyGpA8iMjeJZ1ac66WN3tYHwVmoZKaSfSY2QqdHZ5tM6AntL4UY9e",
  "key48": "5pfhpuAzQPsTexDKxn4fcHTkdKwSiPGZQAJKX4XpRVVwzHBhtpdwF4tq1X8fDH8y5LicyfXrjD6rwM2Nm8iNuhAU"
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
