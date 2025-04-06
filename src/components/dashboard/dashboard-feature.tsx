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
    "4ePTZYANqVDZBCK5gWauRtLvxj7hjgCQYD3Xoahhrgxjr1vwQKEfGfYYtVDjaGcbFQw7A5iaGucN9oWQAMCoFfFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bhR1y8tdA6HdGLw1oe8wxTTxC4XjsSdstWFzq3CQqZZmy48YeiXR7VgamBmYjGebgQRG6axsMCWfXPNq9tFANv6",
  "key1": "FYAnnywm6BMxAC9YcGhohtP8vewTLJxpFsMGpmAMseCweawgYBQjQnnVh2sf1HyxDE8bPX6EydAPmVFgfb2gjA7",
  "key2": "3cKJS322RBLhiPdrNs2HJkf8tsPtZH7G18BRZKwttsEdpV2dmsCph9Sa2Wva7zehFopL75TbrRyD1VLBsoMCr8nc",
  "key3": "54E7QnF3mZx2cdcLQ4sx8kYuNNnrPQoE1acJhbyRqWPEGh4R3JQTTZdbmtbzJaU2SoE7ZhiszQEWkNBiAUMmDNje",
  "key4": "39qT6Q8scNunZV1FEPn54sUnQW5Pm1jGBamU3GuKjZLFbt6nxdTHowAqEFoMH8AcAVZpNFU3BdDhrGZGT5WiEtb4",
  "key5": "3mUgeSu4RZCh6u3Uz4yr58EA39ExcwbfpL2GfYK4K5JqfjYP3HRhJW6jsegYJQ9zPJcYBdCvEKd6DNtzT59uaVpz",
  "key6": "2qRAFCPzgTzREVjKDV4WHSgcrH2xKNwJw3z7jE7d42QPQ2BqewuHY4GjYen384Bp2Xkz1s5zhgWYMP3BKpYdtRFF",
  "key7": "2bjQRXCVQc4j93Z2REpFNqvd4zJ68S1c6AfFAbw5ZWWv4grzqFTHWf6oMfoCFtHuZCESiizAyFSHjR6YhKGhkWnr",
  "key8": "658RNA6WParJDGUM1WourPvdC9mEwE2c5Zsz6angUhyaGraas8UeAEeZcxKtqJZZhrZ4HSopAiMru2ACZmbnKDiH",
  "key9": "5gTuw6f6AmEjAamH2YCUoCpq9jmwxbMDBDuJjUWkresr6ANFkctdwyntUMgvzEtyCVRJG55zfuGCofvkWXAFrbgg",
  "key10": "3gqXR3J6qTtEzs4E6ikBScGVaKPMR1ehjcmFhYo1Gpk9cPfraGdetpXt3TjTr1raCCXKYFUTzx8ZzBfJ1LijFgrS",
  "key11": "3JmiJB7Ew3qZzNQvcFbLez1Md679TkeyxYHtQgKUyBha3ZsyzEAMVGCu5WNPRK8QYMYJgHiDG1pLeRHPsghgnAt6",
  "key12": "3FB45QSZvTRr1oYmwFxKoErQY2mAdTthWMAGc7Py7b5ckUzVZ27aZecirq73towrsjBouZxKB8MHSvoUDqtvZEDm",
  "key13": "5qrEHp9gJkovLDaW35aLYxTs4KDSzhcSguomDPPf7AoTHYSc2TKibM35d2d7VhoQeQ9gbF8cn6hi5vWCzKWgATNG",
  "key14": "6SzPjhSsASmBbuFnn6pYmcVdCLcfNj4UfLTYADgJ6YzAM21sXoEszdq4BQcYZuqFDM9RS19Frv8xzyNPhtJq9B7",
  "key15": "4oKyNHHQHJDzBRZhF3mhAEQ4Wc9u8Mp9SPe22wTJMN9Esoxy79e5mGB2g4agiiBYHEcygTVXTzG2qnz29UC2qfMk",
  "key16": "VTjApyFD7CVRQg3W1XdoPSKWHg9KJnXzQyiN6WBS7x8UasbsaNmnh74atiCHPoxiSR4MbGg6Tz51mM7E8PaNnDk",
  "key17": "3xGjaUFugagWFRx9yTjuEZxPXVaSnKEbcP89YjD2M43p43jFpkQ3rGt59UmnapBmiMsgKu3Lu9p4ZAV6uCfEYyv8",
  "key18": "UnEdaM6opNERnSHstMUTyVRhtJYYTQjESEGEVxZPVUiHqyjDgtPbum4a9LqKtciKF1vTakCDDEcNWnsbbD1hFMN",
  "key19": "4NDEJ97enkwW6p6Yiy8b1dbPSBBEwhK6uvKzvhJYgiHJgkEBqZFH81768cAM58JzDADcqxHiGd7mPF579rZSBBzp",
  "key20": "3hUNtfSRGTqrbKsCVhCyCUQgdrSMhRLiH7eDUm6vqAUbkHPMjPy7ngFFRejQzN829tVNKDYHwCwmwNoD8u86cGbo",
  "key21": "3h1HopQnRdhPDYyAgJhJcJbbecPTWbCypG2QjkS5SxVK4vCUdTdGCwgXE8iRRdgxnem4SCn7Ev9FjGHiGJtmbia2",
  "key22": "2U66oZCbcb8ZsNybdJAPgSS3tJ1AFxXKPF4e1xyTAP4t1TohG2fBm9vM3LTL6AvRTZTRq1KWhwv4N1p8toHzma1F",
  "key23": "2kDbhk1w56RgahNMVYcZZepxewErTxoTQ2svD47T73cmVLHnt4KH4sRCX7VqbauBBd4eoqXYHYovgZ4xo6z6SpFb",
  "key24": "5fK1ynActca9bmNGQjhkzqBbMjhrRcYdzPoGcxYrTcabVAorByFriYZU1AxadGJ4pLqqMsf5Rp1Te5nyvwsirRir",
  "key25": "2EWyN8zvrLE4mduavNnmUdTbQNuDCsSfKGBm7EgqWJKbqfyBLgaRBawrq16NnwAx8tYr8ye18RAH69Qu3JLashCu",
  "key26": "ZfgQP27iT7Nhjixa2uvi8SwXJsDfenaESYjEM6ciDMQrJ96KqUNmXEwv3qjZpvSy9rBpqWx1hDQmxjxZU3UtAmY",
  "key27": "5wHPfjikMmq4WCcJbq5iddrZtShZapG3nBDbpTzA14ujjY8Dhqo7u74hSHN7S7QcrFwoBMn1PqjzQXXFP3dP6Wxa",
  "key28": "tfhXJdQc5S6pwkHuBKyfRJtUgg43mZbugeJApk9ggwjRHB6UCBnfB2veXAm27EHMQShM1QUsRK9gPszv462n7PU",
  "key29": "3HTLULrTCpPpbpGXLjgFDneMHzG6kQZbF8q4zJyrScxkYtTMSrRCF62KsdNkBY2saU3osafBCe9Z7wKwaLngK47v",
  "key30": "3HHL5hELup229oH9AMQjCj75CyWDkQEoAJn4v5y6JsPCMSHn4wsHXvxs8tFx2YK9Pf8KUnZAue4BeAma3rajaHVY",
  "key31": "ABVJDRmpWAREjAVqLyVbnJh51PZXss35ka4ieURcVZRGueAbPpzftT3DckZfkRRga1o7j92Dvarg5Jr7fz6q8pX",
  "key32": "63FTQeBvVoZ14vBuVtn2ohg2iDvYS65tiBk77Z3SCCCwUTqRgX6Qm2wWc7cdYBeaMJVbZkmAFAzzrMbEJiLcgGdU",
  "key33": "XXkSRKUha5QwgP5LncbAFhUvZfaa674m6woBSmpC6QjVnomE3NumWQUA6d34bkCPWRkctbuRAuHNbF8ZGvfBW4u",
  "key34": "4ojcSkw8JohMCfNgpvGfB2DbR18pnNcm4pYKM3r9ADFLraJ1yywGJZmjs2vKANao7fr5wCeJmQtJasxRRz783Kqr",
  "key35": "3iH81qGRpZtwUqqa5ASxbimd9X99siPQ7otCDdG9ChZyvMfSbj48amv1jiZJDXYqipNhYZbt35cXurVymC7s37ZD",
  "key36": "38pNkcyWnPNxUq2w4qzMQWpHCQZ9R3GkdQJ8HeTMWprAjzT7uu2Jcpyvngzx5TYe4QZnX4sRseeQNfXG9rmuiVMH",
  "key37": "3KEfN4bbSLDPzdfarhUX9wR2UfND77oiYud1UoptgBS8sBPEHfnp2z63yNtU3m3FZTSmE6rQAhZVkKD7G9MyFmPs",
  "key38": "5ZpyjhvjnDecRv3gSQe959UAtm5mbPqNCPRMeK5Awrdn9KoyijBuUdZpZV5oDGD8JU4mMBxBTeEhhK3G6yGLCjiV",
  "key39": "5ezryiJtSQ8i2uvQC5VHZLLXfyWC8g76MDormPNgFKp3Kig71zqtamX4XybKmHZ4oXDs6w82tvHHEW8ebStdU2dm",
  "key40": "4NTFZAaNHnapQ61E8yQKb9CFUHUzWmQ7yYCRwxkFJMRgwP2F2TfDyRojRv5q3nHHrGQrzu6qkA2SmPrG9DekG9yi",
  "key41": "5AwQ6DY6tGSkDaqQWyz7C41jK9qxivafUH1t4bLzo5iXEGprGdQm4zgFQHJZUUHdRr9tcBdMs1aYNfJ7AktnZFgZ",
  "key42": "41cZgJ64Kz5V8u6KFGnaUYY4FPH5L1WnJDF5c7UTZEHA8k1KaZu5NxfVTGUUCT7d99HRM5bpki87ogZmTCMsdk91",
  "key43": "2d4fw18zHLbD1kiHxTwFa8KVhQAPkKFZJ7shVqfTNtwsYAp6ABvhGCYFW4NBBc3ZDDgS1eL1yCPkRrGVg3B4KQfU"
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
