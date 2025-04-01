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
    "258ME2kbDDk5XWhzgqrPktT3NxwksZWe1Tq998xT99WsXkEokmM79rxq1kSd2aNDyrXDZUQQBGu6tKUN1ncCFwb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64rZ19Fr2Kyy65jBMtM6do2v5X3eVa3wJT7EnYUpwFqth3oy5MHrFcSeb8f8dQRuzhKvnDef56yEjZLoAdM2vjTt",
  "key1": "5iwP2n2g447kKxjCu5tMoKRbtWWUCoFvqHBpWCDcB9thh4WvahnzNCdndf1DhJ1TcFim1KNjLK2dg11b8qL8anFG",
  "key2": "4DCQbonbKjLBtW24sG7m4i2D1rRTZumdNwpmYzau44PKioN1wuZq74HQj2s3nkvGBT1bgSMBar982Gb1aUPRS1y4",
  "key3": "2Mi1i6DnTSDcRinnTxBu5dK9u1cFSnYGbADPyfBfBZxQ7KMTT68DjvzQNFQBEn6CSKhiRVWSqiWRZcxvGgBfnjWe",
  "key4": "nWSTMcvazdJyuKDKZXygyFSiubucjZVkjQ8D1N8Tne78CEuF4m1skXoGpyHiKoKAUdFwdfJauNzzeRwbEVf7ZYT",
  "key5": "4JpK5L6HZD69R124zKUk3WWnnG439hSEycS4a4jtCJkCbjrYEgLUVdJYzeZ1rC6wZmY1PJJ9GGGNnoMeFqToGVAe",
  "key6": "3xvbTrZejyyS5NncidojfUWy6xddEj9LDW42WwMqJf5WvLTuZEbqdnQdSdVZJtNH3y5CyXMA3n2EMRQ4tupxvLMS",
  "key7": "4UDSu3kS5BbhefwvNkkZupWc3gGBX9JgseM7S3dYWiAHG1feENWp6EU9MK8t8KsKXjUyp7f5EPEUFCogjfoMgNqa",
  "key8": "3KDxHTFe4vp1wCeNZ7zmRJoDVY8uVuYgXxT8q23oHf6Jw6Pov9ieGkLXeDHxRo3vyJA7nHANhyU4D5XGb18PCQ9p",
  "key9": "3s4HyV1ESCe6jm2qX6smD9TYJdqBPzuPtiBpwV4mYEHbb3VQPqytyu764Syi2XswzvB13ia7Q9WKhub5qShYgis",
  "key10": "4nTviMGpsuhvKkJqpud7U9qa7arfUaG72kLGLBdmQJ3ZbdYio9TGRuBCdCsUFCeXzZSyxrUodVb5WgfWS8VUMcix",
  "key11": "4d5WkfCURzHPWGzBPDzmGDXMjBR9WTPY2942EgpUfEhGBTPMBtndNiwHbquMYjtVRDFzPiK4tR2mFurabaGmNKPq",
  "key12": "33NWEhyC7D7SZ71bchWPNGgfhEWq5QqWyYg56btgGxuFtuPhqK52nyaQ2FkD5egnsRQQpy32YjQMB3qvdETJmvBz",
  "key13": "3pzjFHMXripjALYH2U77BFAFQ59vDsQQCMaKcWoBDqZQ8NoUyqugcHFfMGDLH2xPfxceEDRaK8M1RCReVQdXuXjx",
  "key14": "6562knCuSa8wCUunCiaYGpibgoK5Qcz4owcZL5699QZsesnUwQtEqVRGxkAKv8dXV8YqQPEWTdorC3cStiTv55AS",
  "key15": "3SYZTrzojWZ75ftfeKondSTKbvKsEtLz8xR1jDzbtoBTTicfynTKf5Ac2C1wX7HBVc9x8ja1La9csnJGnduvGq8S",
  "key16": "2NaH5z3wewA6mG3WjutDdrmqBsoeycUJkFdVNeh6j64QD2c51oyutaZu32RwNwXuSoQR5ZagLZfvPohr6zGFEbGJ",
  "key17": "MAwnyiy9yBtQhQkNEWCkCPrR7nxC3ukboiqGQ9SpBYAr4mMGUHD3xrZofoeToYKqLVthRLx6NBthFZuXSmNTqbk",
  "key18": "5HBbegmMxEvvvPDBW3uBgcudiTuTT4ihdhemZn4BbUtCNCSEvjesu7L5siex6vJWbamCZ5R2hvzEhVsKZHbx3LxS",
  "key19": "4714A93f9n4Zoy2X3Q1Tb8QciTG95YQ8wRwf9k133Hj8trin5WqjY6q3gZn2hr2jmCqLWSLUodNE2HXP6N8yXSGc",
  "key20": "2RFYDxXL2MVqvc8QHFgqhNibue66VakYCWWm41cLwUs7va3eRc3KEpAxzaztk9riL6VKYjxxWTGm9jciaQHR2nA9",
  "key21": "5TtX6HSnj1zFDuDHUj2B6oVrjsAbQaGT1hzRTqccfe3Y8K98UZZheBKzEFG3HatpRtmabdqDj5nvu31xcf3juKnG",
  "key22": "4xUzv8Dmg5zLcZmtiEsYEszKbCR59nVYZHxvk1jy31VeeEPJ398hvVTKCWsixUhfbhVx7vQA5kpDUBiNZENdGrNM",
  "key23": "5nLLzCsU6MnoK6yZ58eEixQH7rx2AKPB6Mch7RiUhQd2JzPNj2vJf2UonK7UbBNzF32P9m1wZC9YQhS6D5cHpm1F",
  "key24": "UkPPbsXFQ8XGY5YAF49FGG5pQAFAsuNyDxyRB1YgRFaoTxepShLepQ7sMWCUYKVCZom6cye8DKi3Uk8LKR765md",
  "key25": "2PLbyzViqNyD8k1XPEspdYcejrw9uRRR7b8Dqbz6DnkhnQZGBqEoLBcqZyewhMxXkHh3WtapXCZsxBBr1Derbu1M",
  "key26": "44sUHXkETk2n9FeqLykfwFDTy1sAuoYgUGpsKrcc6VeWb5U8wVySHxQVVp6vknEjA1xA7MVpC7pWpxk8M1rx6cdU",
  "key27": "5As56DAyWraeJsK5LcEWNHeUrNxBW3xAuY2CTSPpcQmywUrUYLm8FH68cL5BRgutmxuCuo5ZMFia3ebrbM7d8ZjV",
  "key28": "2zqcMPdpCdmDreeffyN3Vbi3RoXhBG1SxQebwjL8sxfhM1SLaQRfdojXgi5TaSJnXyK8D3kv7xtJbhy6rf4XitCk",
  "key29": "4ypjUPyCKPC9PAkEaMd43pvhV63w4nKnyBexSxuUsYS7Sf2fwmie25YHJtf1aLs3jCZGZfXRiaZMZJ647otYpbHL",
  "key30": "4TwNsypdkzCMKLq7DvHLHk4Jc8bPvss3dLf6LCgHiDZVncEPTBedVKouYi3cHHaRRAy7ZLkKAHcavpwYL1VaUXx5",
  "key31": "3a6Nr52mFG1H2FwDozJeYSGjigXJ4sKj2BGvJZ4NEepJEWU3XNxJWTYtQ3RMAvAVoNFHVEt8QxiCKQ4VWCDsUznj",
  "key32": "5jYZnmxpxKSEqK81492rC3gT9RrNBkiNd61JZjJnjQciaabxMxUwTA8yBXJj5HkzvCetSe7RGrpMX7zWr662UmU7",
  "key33": "2dMo8yPZ2phDKVFtbScyDg7gva2p8Ausu1TpqP4z6L29NesChbLtFfDW3CVPD36NwXmdZedFALXmf3feYkK1ynLR",
  "key34": "qxrPquLy4HTiLHwbboHFHQrSneFb91prRYLxzRrPrvfThoXarKRVA3PRrGafsjGCXTGCQ34z6pNJ2xBXBTT7yQe"
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
