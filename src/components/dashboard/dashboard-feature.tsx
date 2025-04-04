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
    "2FDEyEGyHfCKF5J9wYKYZkawTVVkrCRcSRoEZUtukhN9uuigforhGjJqJtGpp6SogfnYNpfQETSseHuCUPDBio4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2niumArwruJuTKpENiTEe2RJAxKi34tpuer6VvNRo9Kxmf464pqNEzNNFHmE9CX5A8UCvXCHbvW6EDuQ6wCtnkLK",
  "key1": "SyukCySvqEWDJZsWaN42kXnPPwxTxVLXeeVqgkeJYns46aPtcnGku9CfnzSvvfhzZDvVh2aH2qmnT2ygcKXf812",
  "key2": "LW5nBuoRaBqU6qz1rwqbvQenpvYL5nRYyDBKY5QdddEdpeX5DvDNeaih9NAJ7FiwkqRugotYm6KHNAWH1LbfUdZ",
  "key3": "5FkQMw7nDH1rqLtuYUWGWAdMLTp7akNpUdBpz16FTptnWF2CiLAk2tayUALP8QnpNnTY8AFJHhefD6bZrN5MQ2sq",
  "key4": "6ua9xnJn1hY1wn8s1UZnqrNXpMiQuVGj3sEzMC2361YP7R3H99BL9ooKJkhAhocib5tdE8bjDoA8xPeJkrbT3kU",
  "key5": "4oUUzzURsoW49VuHaWuCXJkUsS2q45QPEEvPA766NwRrsLhysFTA74YT6DaeeuUWxQ8fXuoRZWyxCxoQJVDEhe9U",
  "key6": "3jnbvzKwfTfmoAetiT8SvP5z1iCn536mAkKTrnAuMrTW7brJQSzP4nyUmqDG6y7XkpGkoJCPW7jN2fWoqjRmXory",
  "key7": "oGUyCAfHVzj2pZSHVihNLXHAR9kGok3EfDLYaSjhFXy9UjQoKK3tjgQXDBQHSCjkB5gu13NRTxL8pHCHTyfH9Gc",
  "key8": "nThMD2oGJNeukLUZEiVB8Z6GCyzhtggwvccwqH89xwSDTgijmz61mvSzgy4C4KxBWmmetyBtfHhgsiesRwzak3p",
  "key9": "39QNzk1kwu8RWojMb34Afcgip1am1D36qk84v9yaCfvPL21xfUfDhML4PS1wRcN1VLPbbmrrK9tVBVTGSjjm5oWb",
  "key10": "4yxTJ4GQAb26W6CSfjfyg9uDFXELRtEteL8vgmaQeqDFeEuAx2h8EtZxbwLtnWxVxc3kEno99pfVbn7qtX387a1j",
  "key11": "22xuuxpEwpU2utZA6uSNSkojazSgaDS9pAkM3rUyLzYNx6S9WYVSokF7JVpntkJhBzyNFN3ufyrJ9dEnT69WRVSS",
  "key12": "3hJFDTKSCp9cdTeMkXms5VNfkQ5BbnhLuNnBdu1Z51bwdhU85aQLeJfJ55xS4M6A1HoqMrTr1N6ENHm4ScNQjUJp",
  "key13": "fLsrje9sQhLoB7Dk3Q8Lji875Rwh1y4rj8er6KPySXtkLc1Jp5rCHRwsnE7iKoXxMBG3uBeYrtNf9jRFJJGYTzU",
  "key14": "8hMHEszfAoCR8dRxjvUFiHqN9qXacn9B1kpd27gBQJ2GkCaR3tz62bXZBGehsfgCWHqkWM7fHJeVXSgFWGvQJSV",
  "key15": "4Qn8VgmuvgCcUbNL9yWTbFyTsHB9jevnNM2gcF9LLzimL8yuyVGYpGyxDk6yJRknUx3p56kgCrUPE9H5zW18yuXR",
  "key16": "62nz6jNBAiwtdESvZnenRgdvpZpJwwuoCjUb1u7f1AKZpgZgDDv8Z13Te3q46VCqib5mdRaJT8hUGpeY2hDWMzAt",
  "key17": "2b5rCPL7wdrr22daME9TsNwBNmhFPqYTqgKXuA1jgZVtJRNAcZoqjkxqnWWNmkpLdwWPWhiCBmCqebXcNq1XyTn3",
  "key18": "4qLksNuGCBZq8FQzUpd38nUVhDHtvqZg27qkU6bbLo9Z89TFxPsbfwNT3tY79aorjUXgqzLs68aGo26YboY9D8LT",
  "key19": "5qa5WPUKpFrsgtcMxMVMWThsmnhfYQqkqHY9KjkFXKfX9839aKbAygVDYUM94esu5cr4uUDGNReA7v3qNAPSaohj",
  "key20": "2QJT2ARwQ91i7xFTkAGYDM8mg5zvvqQnBiVdqboeo9dc1M44VvcaLSuFb8fsPEWu5Hyt9Rm4NN3bYGYSto6k2HRf",
  "key21": "3BSirTen8zJEbG2KPeJUsmKRvz8CQ931y5NjQB6XepoJjNKKQTDotmVYrV7sfDspgJJ8N6iK7FPCZZcD1UkiMLTY",
  "key22": "5LB737ryF2xhicR2YV5hQL5n8yr6sxyF5xqWhqat3oT5nMzgFCGKTTsPCDUKQwGgV1N8C8Nscij6qEdJBo7azxrT",
  "key23": "2cnJhVwdBjxLHxBWhS4wnhLdjd7eikNPwZKJenJoLfwnYJZemJ4aavFsceaxfqzbgi4s5cvpdVBhbqCs8Nhvcvha",
  "key24": "a84EyYGsN92yT8gTS1QHUZd6qtHDhKtFzHKFHZxp4pVXDzkVrZvFaZW4j1g7E2MEanpxHW6LPyJv4awgED4FN1g",
  "key25": "T55QnG297jiz1mMfSgkker14KXQVwLtWnqTSet67Nmp5a3iCsvaF1XnKBtz8gdfr6ZQmaFu2H8uf4fZC9SNiQjD",
  "key26": "zALhSBmzZ8KdnQHJbE7Wd55sLezd41E1MSHYc4R3KD4bR3CRa5RPHiuy2EkpUszBp1jeUboRTuTcJ6zidmoRAq2",
  "key27": "65TXZ1qYeKuysQV57S7ejbgDVLNVKcEAuJunvy2fqffkVCfTpkrBzqXKrcencdiGSPS3bb9PvbeXAUt1hPKQmUE8",
  "key28": "4NHj8xyKFjRuECWxmH7fgwEwHb6bR4MyuaQJrR99SqCZmBEcrskZCoETqBLAcrTvsirviJ8MkrhZ2eb3PvPxGeMJ",
  "key29": "HU6tpBtM9ZApcPagpxqpapEdBJGi7ydQkmcqv8Sz5a3g5N5pGo3j6nw4HDVfeF1VTh8vE8P1vB9YBHSW6MV4hHJ",
  "key30": "KKXemWHXphzeQeUEDTSZDKpSPySDw3qvZFaYeTWPxDR9inizsGwfHxuQjzgJzyLCC8xCzgVLzPNtbvKvRSQshBL",
  "key31": "4ug1dvizwdvtwQqUx7JLmkqbGJ7Ztex18JnV858Y6V25FLwNwXmCSJxNZGtCdAz29XE23vaFBDJ83GTRi9eVewVN",
  "key32": "5PrJp23GvrmUq5K2zLk7LCNNAfeZkzPktPT9t3MW8eFUGubFHiSgux3cVS4rtYWNnHuLYsUtiz4d5XTMvXZENDW1",
  "key33": "2f6f8byHXHMgcNB4RuHC3LD5XGXwBCJatLT7eqbQKeP9XB92XBTDnyZVRZLiBgEGavXNBwFaVh3xoWRa475oc7EA",
  "key34": "3uaxT3KF6q3xv5TG8N7eNN4wCL9D9wipegbZu567YoGW8hGVgVvsuAaoXR21ivo7pwwMSHMZxXb5d99ixJynkYbK",
  "key35": "3iLVgeLYdy5NsSRFYmnoV46H9qAsRWh492r9fsCvUNAtWrzCk1a6ZooDQ2QBfDf4PnkmGXYz6JY29fvy5gXBNF3B",
  "key36": "5Hwos2PHb7ShwB1Ybd6BAMkh4eze8uFDN9HhMsRnexCBQh7xRu6zDmmF7FJbGAEzpMPb843eUUD5LQArbBQ9JAjH",
  "key37": "3Wdimakqe7cfybKXfTif89CeVjpQgUCQAKwwC5BN5WxBsaU2h61rqpFdiBuPhpwbFZ2YHxN5PiCBKqtiwLFj7Ciz",
  "key38": "KywA2fEuGDH7wCKS1jjPA9tbMA4wcCHh4Ryd7JeHPBqJrs6ptoygo6aEEU8vo8TkAMKhpYmf2UJp31GeV3zm192",
  "key39": "2eUCWApTx6qecW3zFgWSB9MqSsk6jGtJS8utwird66PcQhyznw744gLSzGbqfWxcukW9RMmLTKqeisZBig7aDmQX",
  "key40": "spZXw88DGUx8Ge6oYd7AvFueREjEiBJKxxMNwLxBQSguB4j6L7Ma5w55DjxEphexeWVdN5vJ6G1tizA9oC6Mhi2",
  "key41": "2xJC4PwKATFonnAKM6nP9KNv7LK8EqQcvDjKrgaibkj8qsEzALxX7RhSJArmV2hcVRsYp5y7rUffVKWe1c5ugCJh",
  "key42": "R4Fhrdsqd8gnwBYHFxckZXEjdcPUDR48rVAp8wEmV2mufwyBGSZ2mkKX3vpjAtHp5gjC7MmKtxrToResL598X4h",
  "key43": "3WGYMRdfrhBjZE9TQmxZeVMWpg313W2Mj6SLEu58Ni9yv3X2rqepTLPmAkofd3btcpn4mZqHDyESzmnxjShpK52q",
  "key44": "3SD7uwNS2hS65UAa8YoK8qsts8viK2NiryYWdetcQrVjrMa6aPtWTvqUmmR9qc36fi5QTD65CwARKRHBAHztBEBb",
  "key45": "53ceBfpM5sxpeJsEoR7xSCBe1QcGoKG1rAVKrvVWepSLjGn4py76XuXmqj16iUzjMww3pMgwyRRpfJ5w5NvZzhfh",
  "key46": "3pufo2RjjARxchfrx3Vp8UmdPvs2JiDHXByzwaMvm7b9reRNCLPfYMZt2tp8yxqS7GRmaEfZLTaQayTKxtj81WSi",
  "key47": "2YYSW4m7uT6ZxuLVihWzCeiLArbfqwGicP91hQSBzspyJzegwhrNqsmx2oywKzHcDuUsLHYTTnyxyTtcQSxbGWTg",
  "key48": "TdGLuXDPc28bxU3bUZ3K2jqNWpGNbJckETVocLPiKU4sxu8VoHmeagPpqHoUc92MLDZU7hrpErxgtLWJu39a9SK"
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
