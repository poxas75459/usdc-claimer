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
    "2haUaY4bMDhm7VWrZwLmWQWquicRRP9mSAKPWbrftxe5391HA6auBsfj5CHXxrZaN95VwtSFzN3eDZHJh8EGaQnj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aMh71HiCvt19cdCKLGpkUxSinFLvTFzo356h4a2NCx2jCbZkHK57pF5fGVxLKLLGR9WPv1fW8aRSWRuZB6AL5bc",
  "key1": "2Sm3p8d5AVpyCTZrZuN1vFMp1PD6i8vwimLSJnVovDptPbgUMuYT6qDVCvJjVJrS8mJuVF3wHyYvN825heP4yHMq",
  "key2": "5kUBzNawVdgf2ynC9xv2HbAj31Xyq6wpHd8kFFR1yGcpM9edu2HUebcocQA8zEyYokj8b4pFdSaWfFirY5XhGPw7",
  "key3": "4wERz7H8Q1PkP7AS2G2dFFdDeyx7tGF8NjJe2PwhccU5eLzbX5FEzpfqsx7N3AZAYsLjXPJeZerW7z1MyLgKZ47t",
  "key4": "5eCKM4zkQRF2XEPhdmiG4FdEvuLUsbvoKRBxcUnGDpJBUCr3kuAXo4Xx1DQEAygHrgur4Dc7LuWiYKJcAVnEHzbq",
  "key5": "354sUGyHfTCV4689uQ5evSxgaPdgWqkf3N4CrV3T82FQoLessPryYwguNZExvXJLkGHeuowH7EHp2ce4wvP7QeYB",
  "key6": "gYYdY4fuYiipZVHqe986bY9oCjLo4xvryngxADhFqJW4YMYgmfzr4ERPibLjABintHjfvB6pVEGvJSkZ7CukEG2",
  "key7": "3DSJWqzjeaX7RVZSanGhtBzzXNNHCvYqVqqf3PqHK14XBfERYWtNYtDVVoMmM7BAcxnTLmfMdXZeEbEUi2DmFH8o",
  "key8": "28aHxWhUQuy5N8f2d4za7t8snGbicnuoPEkGXyBgZsKBp8TijK5XqJ9kVWwaLfLDUxpGpPGUmNxY4YVYhpkCgrd2",
  "key9": "55gE4Hb8mTaSABW8stos9AyUDWeBai4DoTUw2jfvhzJZKeCXFaYKRHojrRWf8FJeDqne85UJUTQS4MmrUeNEiUFV",
  "key10": "533d6i35TaehYfysZCJNtHsTkrfVdckihDRDrBH9WcV85m2PSfqwFsYCGWam5E45vhcMB4J5MmDvvHTTVSZuS4va",
  "key11": "4xaxLrBKP6VDdFaP14ggsud92rsUu2YgYvnKAj1THPNAjVwXZ9xfeuEUPS697ESj4Yrx4XLo58sC9DpQAc1oaVBa",
  "key12": "5vTn5MqvciktBUQ5rCxokjtZnuJe52swyhU2BksjBQxP6YqyQ3NXPxWo8Xfgm3eNUDRktV8JBssPtNy2HyWfVVFU",
  "key13": "u4BQtyefaZy1tAiQ8paLMEfy9uYAz1yBteuCnyG9bhSj7xap8KjPuXA2HQU2GKET1i3oXMTp2Pfa7PCA6RkTDf9",
  "key14": "FaxDzdGGhjP8ZmZPXfwLm1FnG1r4k22TtkaiF4Fj2pdhLTYsTHEnM2WQBopZXWososHebMQo6zWALcDsEDYUtms",
  "key15": "mij1zAzNWGxR4t8Bac6uG1si3yty2qEr7uqY1SN52Kyh9Sb2JxAaDXCE1pjpFXUjpQoxHD9fMo5whb6VDMsbxVn",
  "key16": "3DUjeHHZT86NnjDWrPttU7NPyPcbKyPy9yjFz2Ug33HeDr2cJafCmqNimHgkrgCx6s3gUNUkv8t4mPCw2ahgiaoh",
  "key17": "4XKYW8T2rZjrqVeY8xsiEeg93NAxhbX1WcgZBEWPzyj9c5C9MfypEJqzneGko56ZUQiMw3cqSbkfWs6pURcsKKuD",
  "key18": "3RttHfQqDy4CyYmRcagveNxbZU6rVBh5gUQn91xEDM5GNXYA6HSwEJUk4CTjhqEgicMFugwbDdps7dwpwSAZkjdQ",
  "key19": "2vKjuWh6ZAC5YZHGdPbXnHb6TKH8S5D7vNFUcFTjM9rkSwhTp97V6HSEmKeN6wYXhC3k14zJxiuumotHK9UuzpGq",
  "key20": "43rv3SWjR5VrxZtTBcATkrhyWay69rgLxpbZVSCibGUwABXfMUKkKEjShT9K6c25Euf8z7N36bakKNhPvequG71b",
  "key21": "571Up6PJCApAArC255Avv1TGrQ4vVsdVtyR77w7quRGopwZjTy5SJAqba2GfxJDwwhQjXuJLytpoaZn2Ei2YHskw",
  "key22": "3uBMTqgLjKBsw7f9yGot5QGpeSqyHYab2PiaTfh17zWBVYiH5vUhdif7MpKDiQqG8TzWXGKPC1AjUhP2s559zNe7",
  "key23": "5GQX58LfrrzbPbkgFoFtKmGREn8oa2ZZFV8z6BNqhzsHCNBwBgYwQTkq8dkLwpVTM9ADcaqxvRB5ggPy3udg2e6y",
  "key24": "5jHne8G3zwkWNBwVZ54Z8snHtwVw4uAFT98LkgSHtMifhqLuzq9cjMXa6ScNjxmhksMpLpsL6Jzj6y4sk4Vjt3V7",
  "key25": "3eHNefgmKMvtNrMVV6opskpW7CJuJgptsn8kYCDKAEfjEsAuZodZRMNaoTy3LXRoEKKYXzoR4Z48wi81mSLr4UuH",
  "key26": "3FwGjtP1Ug5MChBHTR49aiv8QXhfSRgRWDE7H8ddrByAdcTnX1z7xdjbzjyYJpcvGMs7BUGNdN7G4Mwaao5DaRdC",
  "key27": "55fzXD8cdR33Q4pSB2yQPh6cH4PRfuDZR72fJj3rN3fVTAwAWZLMT3yWNePGtCR3EzMAUYL4v8YFU3Bfr5i9EwVg",
  "key28": "4qW6BbdM3E67EgfybM7mdSj4sUpEdBYG96b4BkkN2j2zZ8CVCNccpY8qe3BZx6PVDvvhnrDA7j1V6X8Kdk73U1u7",
  "key29": "4w8d1F4cKeMuq6FwXWrxpbJJ1EndPNonsug1VKCDS7RipyNFpJUjovxXCGZ6GQBkaof3zhuCJPRPqNfd3qNMQ6A",
  "key30": "535M2Q1S2JXFXECNefMLJdDo3iUB86GJuapMtKQguiygWMwH4NvnMPbX3CGMpiMFMUScsjqsQGL39k8ETV7SowqT",
  "key31": "wmajyF59TwCbi79WCiFTHy7uqLMX1CZ6JN5ugNC94quFsP1e5vHfE76pCgsPueJ8Nh2Xdoey76vifuzpi1D4XuF",
  "key32": "56Sq7CN5z1Vjhhh8qi2MqmYSTKLDvzc2nd2F9tiBekL9bh7ct5hT2MK2T98zw1VUyu79w3JAbdZxU59raCNq2d7r",
  "key33": "4wrKHSvuzTZTC6RLj1PTxcd3BE1pAsRhxyNQY5qBof2YiYQmPb5XVv7JKZRcMs5GWsnTHpJXsYhcEFz3Ju33ZKn4",
  "key34": "enXqLAYebiUJQHQqXp3yNvtkU3deepzKF4vQe8qSj7H5HnCVhBut3g5yTPHrbVXJnJDgKUvVFgyHRoZtJ7cNqrD",
  "key35": "P4Sm8o39mvNdz4T4uezb6A3NqS9Y1n6mjwrXAANwrw3eZqFQ1omQba6qcnPb9hDPBtmqhKzDPhAvs6Qs9FpLeve",
  "key36": "2gFiEUXG2dfRBAznTuJuMv2cquQtN128rzz8uGMhPHRsueZS7Ejb9mVZXUSw7e6TNCxWjBwq2ZFzPdPKLXu1PyPo",
  "key37": "655QAU6QT5WbVBYTG3KaVmcjwJB22fH1KmXe2Ufacpe4rYGb4Gs838woXjCdfYMU1mp3RhtvT4BjDNGRHMBFEjaa",
  "key38": "2uEC93dJHmtm8vpXCCkzGY9Q1RyQn6WeJv6mFBysdSkupxeHuxRLLUXV2qDhePWkowdgzreqdss6Xz5oUBzTobed",
  "key39": "4whjbp1ovc6S4HVR8fKPWD4XnBtWGtE5nXtMexxVXzPKCcG8ZHBsoBGwD2MZX2p22UWArPpuBFmFuBLPAGhuTzY2",
  "key40": "2C6e9aYPQHVVjiS5PQdjjbh7SJccV1RM8W8KSi8Ffq6gESAPrTa92aYCYA9S8tpsBuL2E3Pxab1RTk9GkrxZBefL",
  "key41": "AsXEURR1pkMHUirWvoGmvk25b9F4tJq41kzz1knDpzrjZbyPHJUdpao7jR5LYiV3n52HnKpFMabWN9ah4CPm3Wi",
  "key42": "2beSxZeDFugcRzxmknMCT8hURjwfjtyzY7km7YWTPbaHAn6VFCYQW5KJ8ZmjKjvvwUjYXdgMnz4RjznHHeufhmE6",
  "key43": "Xbwf1GcvwBogPUHLkkJmgWhGze5Auyq6f7FHBybgDMeh8MF1w74DMeLcibq3hX6K8WXLroySQu3QKpys27AKPQi"
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
