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
    "3N85jPJHtisUAWJrRN9ppoushFyrdE4WyUyEb8bi4qj9DrDpjr6cLNGA2aySN1TWhLgMv3BWbbjH9g4XPqcE6V9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BzVubj1hnLCsRPyyH4Zd2XSkMVbhYUX8nzNKqyCmiyLZcR3YZSrrRzCGGbCoQYyLXPfz29t4LvWCySiwVUanWjT",
  "key1": "5qHVgdAnTk9YkrcgLXdVPS2hcvQaB5QfMeaR8zFAVoVbS81PYDHnFoiCFek7zwtzvUBwJmX7nKBVz3EKTVWp8WGw",
  "key2": "2GByNcDqAjvmtWRFTDR7vMMUeT8rFRRW6UTdMCP1Z7PUt4GxJ2TdPPZXzjB2teprGevZEepkqtJiDsdzjGTwXkAJ",
  "key3": "aYGDBj2oQF57mP23ZaRdd6LMk96ZL8jzJyq7Kj1KN3A2fNDHwBqLukk2rzi8RAbGUSBJCZGENXFRkS86eqbTEH1",
  "key4": "5Vhx7DJm6wog82RbVCgPQWmj2GE1GXBbxyyBWqdFeFvoomZB3DLpdBU4ojvcAyUey1r66XRK9HGUuRd7aChxe4uX",
  "key5": "x1zayMBeT32nVWZw7vGRhqVP2U54Lt6GHbftHimZBcJJhmquUPwMapTFoDD8AMghBh2dST4yB88XwmpYhFB7zDf",
  "key6": "X5iTNQ7g97R3mmVSfh2vCcoXBvdFtwrpPgmgBzuXqxeY6duxurU8tkerswznjwvxHmM2u4BHFadaDHKn1WAYLck",
  "key7": "2SkdJqR7umQHC3rGHYdAcNESowXLtFRGUQpxD6oRCSAS7HsyVsxXVwEtEvfjRP9yCw81n42UCPdn2XEeCtaTz7BL",
  "key8": "62R4XrxMtXRtr1QC6vtM9N5q21pAt1RA49hERkJehjBxiqPbDackH435HqZRy5xjdo4JywuVsmav1Gqx1Kygtgsg",
  "key9": "2eRSEr3cWBAYR87fgyyh9jnZPQQ9EK1dY18MET3fi7sCNNLt4URMV7hdNLFiFf9Wodr183noYjc15mbLGyF2YpNK",
  "key10": "caWE9WenSrpif81ZjwPhjCTxtHmHM6dAquLCKVSEqjnthe6ANS9kbTGr13G3xezCCR4pQVFTVkWDKcsfb8ZSJvM",
  "key11": "ZMie2oKW1JPmHQhWAc2Hz78AyS21xqB5GhBJETAVx4s6s29j8aPu88TMfnsPqcHnrVJ8xnZWLtYHXK4b1crfs6B",
  "key12": "3kbFStXfymDTgwtQRuEtTSvC5CcckqFFnjfqSj4hoMd7kg6adzsTd1EL7tRRowbivy1X46H2Y19AhBNXffDBenw",
  "key13": "6xU7xrtRGjNDigy6CUFUC8gDNMXceNLWet7QtYL5jU6K5BXsiBTiaVi9fvQMjY2UU4Uk6v8kCYqazJPYou8vFTk",
  "key14": "4JUemdkq6co23YSc32DtTf3qfDGQ775pcn9FMnbps7D2RGPb31eed4WS1NJYTBuD9AwbcgzWcz8Cb6n9MspEknvY",
  "key15": "3qERVU3xe2eyFzY523yKnYsasCGa3KoC2vGnuu9X1tmUHaNuPxZojhMbZKec2Vv2NsPomhMwyHk1Ezci5QWT4ReQ",
  "key16": "3S9XCyhX4tx3Co6b8HgURouGfLYgwLXYoHL94za4cad32rFHqUeVqkfxCj7ARq4x8rLzzu5iLphFLcWYJA1pzWUY",
  "key17": "3CUMq8pPHMJQZkoRaZ426ptV1NNwrP64CexSQkbYXEBJFeAQBm88NuEDjxpf2VJeHWndyCPcitHAQVJsQh5ubjhq",
  "key18": "62yqbGd38HWXyndmG4CG7Xw7ZWmEdgqhbEVm7D9cGa112dzdgvyw78rMEbR5z1sGx2deFWr6bkuCBgAFQRsgBDQg",
  "key19": "4hwQDfyK2NTJ9wpUEVMVvGvzeyJawhy3sqfvryJFNjiHR2hyGbzr1fwig8SvcWyrZRwG9ZL48z5TmS7hX8TfRTSB",
  "key20": "3SCHQx88uZyMSCchcwSPZsLqx5pifVjqB1bMnnomZRTj81HmVVRhaYRAecvtm1uuBNgHAqyvAmTE6R3e32nxnMsY",
  "key21": "4T9upigtqEGzVsQ1hdPBm5BTTRfzgURbzM252EFA1uNcuK6a43iSVe4X767cTaURZL4f21rzBqM2MA4YGzguRCeH",
  "key22": "3PP4tzSEAtAxcdUacE5cRgXoXjJ6WXB3UWD6Vgmnezao1S1orYrrBjTxwvZJZYiwhYQTHAa3Eg8aq7KTDzQeVP1n",
  "key23": "2WcgA61X7Fcf4jhb8B28hQWHzJ78RE3Wrx4NMyKopq4123pu5qd9kT91vRAea6a3FkXoKvnAerLQJGzfxkwG5c3o",
  "key24": "BTQS9EpFFx1n4DaBgF4wfUfEabhS8HR9HAZy357DFdn1DA7jvKmTDxeCXzpfLgwhbukxYkTXanLNA98KCSP8BpM",
  "key25": "5d6UCt18rqFDx4SPtTig4mhdM9KarTnVTSJoErJas1nbeacUDvmUMXGFCd8akywZzXvLt1LFBmL4XcUF6Mu2bF3L",
  "key26": "7DgAJWZkjdwWdqsQsEgFjbVQ4ujhiV2ymc3yLxgwP2bd1Xys6vMQegSwnQXcTyQufyUQZC6GrNZF8NV3zLWy6vZ",
  "key27": "3tuBtU8qkcfcqyQ9aBDwFmvhB7g8zhPAH5Sj8NmUuwW1uaB1a6uKH6umoDvDfQ277W9tgsF85cw1BpZwnBNiRiwn",
  "key28": "3UESdXWEA9khDu6RY2FHJ47baHTGpBiSttbLVbvKxyHUK2xJuC3sQ37NP4mHAzuocvKtnpxqHEMaoGuAhriGVmgZ",
  "key29": "Qy8kmx8BFBYwo23XHtAMj1Hp4rjpgKyUW3Ky9aLb6egBdy6wpYESzB9WrMYQRS9SSJRyjcwTTDgJgvjtfd7T2kR",
  "key30": "515yVirYVxZM9GS2yVTpFLhbLhwC9guxEBoXeXuvQnYhrsW2kuaWrXDZbQyPJMnYFYc4uiPGM5xaUV3UAUrY2swX",
  "key31": "49Suk9DK3PVGaVgjgrNsLxaunapbuKmcGfutR73fhzr8JAwJKtqx63XfsJa1mz1pCP8H2yHxmsPWeriQGRAoZRd6",
  "key32": "3dYDbtt8W186Q2iqRsLuS43WveQgut7KQa2y1tbPCqYmReqM22dNptcDKw6pNVueisAgX6RTGuymeW9Vbmzp4oRF",
  "key33": "2wr1kd2H4JYbD9JEeNqYd2TGH9VjHLVbHsefFMqJTAULeBRytBwzdPZQfytFySndUw1G4xDaC3VhQuFomTK8Wcfc",
  "key34": "8h8B9Jdbo7wuDTHa7EgLgpebv7XhUXe7nvzmNqMNGESAes9PSP5m5xjFR3RJH2ESu3KqWfCymxy7Z6c5tFh3gtG",
  "key35": "4DvAGQ9z6YbSGrSzpdKHTkEnsErAXctYdatoZekLejTbF8UouxLdRKge2nc59okyExGhTSerVYn9Po7QwMDUJVbL",
  "key36": "Fpb2mzSrJrwv1c2zdxEuudWwvziHnEg1wMT9BT4XyYf61oA4vxUkQ5HkrBEruTSu1ndLXKJ1DLcQdoVJVfrGNZv",
  "key37": "59ZbdMa5eWwwg3RPRJhkwf8f181mR7FoHjaqYJMTV9EVZWqmWKkNQafQqFauAUtvtgEfLnn9sgSu3qnHKMf87yop"
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
