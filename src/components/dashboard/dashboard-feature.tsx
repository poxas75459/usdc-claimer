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
    "3h6dnYYDucExScjNCHv1qhXmgX21H4FzAV3582zi62CwYHmJxtqaopMnuFuGKKYjtQw9329JUtsTrDnaqRJetmKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KSFub1WBuoQdCLjwyS525fwTUz2ZVydZWuorSv56WiV34aEz3NRxqaXxXwKnFEpaxed1abvKyy1JyHpGPMCCeHc",
  "key1": "5mQi5DQPyJQf1skMr9s8Fa7F48tTiXnJvb9sHKB4Q5TuiY32C9MiLqgBrZV5XVy6XhncfsWeWL1aJJR2oQrtzoWA",
  "key2": "3oZhbN5vePVnoowxyL6wXWFTALCg1az7NgJ22s66qLNfmaqy51wZXMoEDFDjaL7vA24imb2hWYo7Xdbkxpih8pBk",
  "key3": "2yNAsPemrzuJzK2d3okGz2TRHNHiWhGQU2ZtBFy7xi1t4SxhAdJcbPX4ipSvF34tUpq5gsRMAEGcN1ytafVb7AjQ",
  "key4": "3kpoamskKefch7x4MN2LyFvNpyqWQNpcZ9EeyWtwy9kapkjMiymZvznBZ3oCTvY1CagztGRueD8uKMRbg7v8FggH",
  "key5": "5Rd88rGWNTx9ntFYLChr8imAwetbGUpq1JNxDjYrJsU2LShAYJWzLvUTNzW1GRJHC9RkhyvMG2RU7NnVVNfFfFnW",
  "key6": "2mj4yXW6GEGBMP95mUmEzDS3y7a93o8kWsymtv3EuBo88DgFDbRJ6uazJFjXtVB8BEoot9nhm4YrFoi3w3q9hGAk",
  "key7": "TXCRVDDqUxhHSzA4XrvQFdyrS9JUu2YEcxqrYz2SuxBakKAtMz9ruscti6KpBHdAz6BAh1xx5Q8vhj55P8t2CXR",
  "key8": "524ivzX6hdwNQApe5bfexttNx91fM8Swo4kd1mqJhMqRgbXPyba48Pw8ASXLUyEnK1YvvfGNMdjKAZHsgPrRrtuk",
  "key9": "FFfDKsHZ1fa2FrvNYiTMzMVW6nG5TddH3fPZQsW5NFcxNiZgkL6kifrcmz9cbBBLiovMdSwP8vgSKpHoJZUMye1",
  "key10": "45T7MfivkdxAVi8JYdhZM9qD9SmBGPZt6v8tpgdoQsDdiX7S472uNVVLhCrgukGTiRCkzQB3CTqxVqowXYoiNqfx",
  "key11": "NWvvHk2bTPwr4Cf3DX3NoJrvqSdwqR55qKqAP2nYsiPLQqjM682BKPzxpwohcgfFPp7dRXSHfp2XFx7XxdHYAnZ",
  "key12": "33xTpQ3xknYo1msQuBb9GGha52PipNEdh9qgNaZuSHQT55oFCpWFHqbrhs8TiZbEXoxYAmqU885um9sPESEMvyXu",
  "key13": "3SUif6inByymFBJB2DoW5PokPQd7QJifQFcirzyNDMm5Amr1bkGNQpQiDGUPrNdA2CAd3wzczNTedgrPzvCwBa3r",
  "key14": "54jFWwoWTA154P3qBAwAHyEd3NzCD6oCMVrr1Z9d82ZLAWSVxx1kAa8pH2kaeiqDLp26rzgVyzsohpEoiQdhmNxn",
  "key15": "r79rA1pU55RYMqWsScduNyCrLnqWWyCNXzfXMz9Cuui6DdqRHHsiAHstfV37aytyiL2DWJBL9sMEWD9jrd2ePyb",
  "key16": "2dBywCSd3kkUcSWrgt5pEZuSRrfhht1A6jevapkfGTzhnf87EMTzDBWn9r86WbbNpJgzijQLwuqDYceKDVxCDJ2b",
  "key17": "411kHEAEcwSigXpCUegaWXZCqqBeyc5UxwdNyP5iHiyhfTqa8U8htGHmbbH9XtBHnkiEwWWRFRHpRe3AEe45RRnd",
  "key18": "4RyMzenfVR4eDJCt53LAz1F5BSjSaC978vmMrdM9PpcCwijWPS8VLrTiQSVGT4XXHiZtXxjbwSQ6gac59nuGJayJ",
  "key19": "2mCok2m68JvQp2prx3QG5N2MYcynuyNzgUJcXCjZ9J7Gm4y9h6mquM7s5qquTZ8yt77akW1z3dBjwQdfzfjTuQVf",
  "key20": "742PXKAmdaVoFFkehhXJcBdCASBZULtVP4UwbhHRSMUUk9spBx9Lxy52oqdaU8Hej2oA2hCqb7hmFJVzuj8bNck",
  "key21": "5U9LYhGdAMSEMfqZusfVuQPxyiHt33XYXMM3DDZQhw8bH6XSt4xdUaaD4rAezyZNP4mRqKgSeuYtRUJQ2uoQTe2B",
  "key22": "266YjQqJJt7Axk1rs8pPuaMBAUU636WzNyzreyiUf96s8kPUU4PL4KsVaBVqjohLTcg4VdeQ7e1KGSKotknSCsg2",
  "key23": "4vnvGPB5ytzbAzJ5Qf9TX1RWV82Y9zcLtJyWZSiH5XjJ9VV3wWQsLGcEoPm2hNtxuPmM5tP8dZuYmZjHp4gvTUwn",
  "key24": "2vQq8ixu6oYrn4jXbDzau9yFynGte3mRfRLZ425eN1sEX4LU1qb3u2ZWqnUXeuxKLg6osB9VdvM2yVTNjDzb2Vz3",
  "key25": "4guuJ6rY3P2E1aNMfU8R5RfRc9T4taRdhTQNHAetnr37tNi87DguVtTxvweQgap9dwqb3Gy24nJFcVJYGFLM5sRe",
  "key26": "dxf4uHn7TTcvjDTSt7urokPGJW2wHysDJuWXS6VRBMU1Y7zybQothaCAFWteyPews8qtjJHSarSL5ndGdBLp2Vf",
  "key27": "31ridnzh9GEgZeEEMXBf4Wy7UUFHHWLjc3k5cZ1gL4PYrA8yCDauHvnvt6cJLQL6LvnBnRr6qTeGM8FNWDkEnVV9",
  "key28": "2miDHgSVHDJdPSh4bRTtsNa1HCUJMk81r8SqEoKSXcfMRSJc5EzWfNU5NwsE6BHu7jXXyTML18qcQPeCGbrFoRC3",
  "key29": "61NJEQZdYqaDEuM5QQdZnfbGjSmoPk6kkBaLMcoCZEnhqDv69tGatx4MKJLniwCmV2zGZsjfW3dok3DWiZNz4DJV",
  "key30": "26ZqEMxckYZTCFW15HG8rvkURvKGToiFrN7zpMhZpjgaaPYUnnNG34Lx3mPG9J2ctmSUbUN8HX4r2eve5Dc3CrQ7",
  "key31": "Gk2cwncC2QkXQcSmGkQ8UYKRMBN1rZZmrArADH3tK8p3ojEZrvcU95ZWSfvqRD2aMqG9uB1VitoHrvrn2UK8BcR",
  "key32": "2x1dJKK2pVMYLFhzTKqR6Zn5QoP7HRsSHwQdBQn3TL4xrF4SWDYq6jjyu8u72HYpFTeoWBrDzHDKBPxmRkPJvYEW",
  "key33": "9BadA7HtcC8UUuRfAYoMWib5uEY8nvEKuQBDna8hbNH4ZdqquQRR5HYEhpYShp5y8rE7pwBNtJBH7xsB7WJFjCE",
  "key34": "72FxGQFCcKZFcyyRuPUXu5szbqe15ktV9VtXtHAxg969i9GJqsTsVWk9fUXYpCeMFCxLDAqCuc4Bu49XW1PfqRQ",
  "key35": "2oJ6LxLNtHqeCfTGjKXyxXhk46nj5xGobp6EKd4TEj62YNq1TStDGDZSBCRhcGSZS6bWrso8kyVNzAs8hRdzfMLe",
  "key36": "2st4J4nkDr19TMwawfmhqXbxkGmd1MkiMjutJ1Gk84Zss42c5gcmi8btBENHhMj8yKxSZ2N3MonfWjfoRjVJnR35",
  "key37": "3Qmb2c6ki2P3NVWmGPGyH5tf5RmKMAU5NiQJsjCTafPPxAugceszMjd6529DTonhdr6FzmYffQ167kZ8t7RKrHjJ",
  "key38": "28kCMag6JpRPPmJJkw6rbWc9K4DK1MigqisMqgwmFrcT4CkGWRV1k1NzCLPcSnnWQ3VdJ85vTP6tJpLUJj1wPGER"
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
