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
    "3TP7pMxYk4X9csQph5hGGTQtmBM4sU9aq5EobZ1ZNfLMYZfjAwm97kS8tidz8sSXPaR9Prp4Tkw9KryNoNFvENZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WLUGu4GLaFX5U6DhmihKAgev29RpDUaVokCMGaCoSfK2LkJPnCHnM1RbsNWthEcm7RAEj841ocQRa8AC47FwWmS",
  "key1": "26RjaWhGG6pd6emCNQFCdEkuCfbxRXyG3uh2cv7Rcjhj8dqKHUXRW4a4dUtxmdD3WoVRgC1idHJQx4AUiXhtbmHq",
  "key2": "4gimCZaoj2fbfCcmtqwyAyBCaqXQGUHYBkYAgonyY64DaEBFZrcFFh5ehtsLsDRdsekamHcMZr3Yi3EMmHzRFX3m",
  "key3": "3g8sLojrSQ88FTZyXC74RXAFsYNV2pKtBFEw9fvvehrFVFX5WaqL9xD6ovqgZbNssJCGcW6pGZcB2q4HBSqcqb6x",
  "key4": "2v5yVoS9HN1SpMnYqwPtg5k7JRsQSLgphDGttnuWu4zGSrUEkkUUQTdFq83bxew9AZy3DihVYKb94z4nAse9qeX3",
  "key5": "5bebgR9LiZJfG7G8eh5pPoP224yssraQkS1zreMVPURfDASvekRNZi2jUSggjHz9B1ind2X7bhF89KgaaiicrKy6",
  "key6": "2ov2N86QhPbFBVUHCczMFhmCBrhaPRvm8nUrGWYofVRJZJudSwiV4Nk7gJqgUaTgjUBRyMNP56dAA8TaDvE6kD9J",
  "key7": "1DkHJXtCrp2zcUBh3ZjvKXTbNviEQr8c2b6hWZnYgo7woUxCxU97C3sDYQM7yiah9tu2ZMt6n9UYSQ12Yg9YXe9",
  "key8": "48EakuFbFhfXodebqRMAPa1VcTHRPuXR7JtX6h2BpkJRGhXinCBqYxB4F8LvxmH6a99mmgwz22moxupLSEdnXRrN",
  "key9": "65zFP31e4ZbbS6AAGHj5kCfR2x4Mb7eipwXEskzRspMuoo1q9bXPR4XzsmAMR7GJCMcKP9hkC7RSwJPbt3PVejDF",
  "key10": "33RYo8eodAGEk3rBCiR9CYFF2UCSnno6PCCn4wWQ4whe355esAgJb2vDE2DsoPRZYhmr8qASSYHWcbQrXuwfrzLQ",
  "key11": "23ddE74yDBNguA2KDnXQ5pwEQsJ84UPt9oetF6VteCxrxR6X3uGKqkwhRaAqbmR6xKEexw39K6n4dK45MKXRTxcr",
  "key12": "5jncnzNExtg3ARXy7EJXzVbWAfF8EeiTyL3fHd3nYMtiHkt1JBqPjrxrtNoAkDgAP3oRLhJPk7L7h1fVg9nmECZN",
  "key13": "4nabSVNzRwLErmwVYwoSY4VkJcEybMBY5fRkBzWXmB4WLoLmbt3bN25HZPRtSG81bLwWje9JW5gDnm8vrLkVD4vG",
  "key14": "Rzyddzc42AheP5znPrLwYtfiMqqej5GG71XWUvRQw7DXivJHzrD7ECsv1jnxuEHR15WFAk5uaZX6t5PqEBQufcV",
  "key15": "2xDVQGXX8uuPRYShEgqcDrfuXAjDpa7SDXZ3Q6jx6XWGrES8Gp3pV6XPxxKoP7UBc5qHRFkedoQgK39znc8cAwxC",
  "key16": "2SQZCRkX6eJQtu8M7r8A9TjLsCQxenZdhqpfsqDqqBoAdZtuJsaZmAMyvEe9BA6ErCUYeBkDD8VQJr54o1ENT3bV",
  "key17": "4L79hGbheRyBMBP87YkFJVjQn1V8uKwn9nKYiwrtENW9sXUyC6Y9uw2uQKfrNnLBy3hotsASDg6jN1xoXoHdGc2R",
  "key18": "2aJvQSSMgktp8poJsW2jZ7bsRZLMPhagfWauyoUTxSvNvDMMJdNvaCsn6gkkSFpd4Sbzdfdhk1DEXkEC6bhpmHHw",
  "key19": "4GiUKaPf9fkM6zaYz4usbQMQgwZmpKhKMLRNGVxgNukdbbwgg64mBhJsW8kCeErgzTD2m9CRTDE4A1RD5opK1UHt",
  "key20": "3RHpdtdvfrN9FhDZVSFa4N5JkB4VbP25hYgBQxHRTF9ZCLt8sTEqGMqi4amGcfyfAHUV9EerPdaDdn6FqANqWUA",
  "key21": "4VWS6HbKh6cqxtyQQzbaN1CnaUkgiWfCoXq6UrtUg5GMBudUR8XF9YMqRLhBbV62owuYFAoaNbPE2zkguZhHWQFS",
  "key22": "K2E9ws54awXhczNwNAs76YDPsYqJeFwz6M2ATCPipcTMZkZoy45T58dKFhnu85Dd69uxQNjS96sx1UNMaRFzxNa",
  "key23": "2SUGgxdSUVv91VjZnBEyBBV6dNL6gKs6iBDdRWBJ335LswmM9bxNc1Cqyp2WzhhNgZ4j2HQNiP5To7uXe1bjY2pJ",
  "key24": "f6q9B5NfDwj5fxDMTg3dniFxDmBSwJgVRJ494EGaFvmUaCqCFqwrdudD4zgxSyfRCsoNZkaTkSAPdFFSLdE9pNr",
  "key25": "2tAYjZ7uDzqcNZ1XKd7mrKzUxzck8yFjQau4R1FdgX5CbJY6iX1HbUv3yKCckFfGEnzVYBjvQ3h3gcwdEGjCyxUZ",
  "key26": "3H6gqcqPgSAF1MPKVALWgWnMhdgGSVzKsUUt4vo2EsjQiJbRwgUvkDk7wjiXEujWjFj6KnyckBWBZ3sAhoLb5JRB",
  "key27": "3NpFvsqSrB4NQ9ACgRTwsMRtAxobPYKexUQuix7vBZfRqB4sMNvruSt9xRDj8iv3F2DD4nKKNWtxX73RZW4JGnEd",
  "key28": "5iB356YeVQGB93p9DQur7pYtM6hbrg9tM8iqBrZhj6FsnqvcYuJgtFqwL7iDEfwrHWwwbziQHfpTUZSWrWJFUMsh",
  "key29": "t3DJGBiHGgFjC6SCraMgJAE9GBDPeEipDYh2hVt1US8oGEc5K4gXNGBEWG5iQPjMCiKMQwgTA9pKktGyqmRbm7f",
  "key30": "5F5d72Sp1sSHZYySR5GLxcSa4G9VjLFS5hh6qYiFQrJHS49YSUqimq1obizyd1LmQYtowRcPEBf8wBueR1qxp8zw",
  "key31": "2zKqBwjLdfrGt3drHZhsLmH1KjBAFWDWjXyoVnjo5rfmJreSj6xwAACst4RzYGRqDu2aav1VnKXxa9LaeXKo5taH",
  "key32": "4Twf68NkGcSekwqdfEnhZApAMMN4ar5W4ECZBEnxFpp2fVmrgFNyLevqD8L3igEij6EwRhDi9AVNmHnbG3hSgQDV",
  "key33": "5H5bvHVBZXtCAwLw6e3FWkEYZA2boS4iXCePk9kkWfWkpC6pD3fUXeesm5mv4FFadcbMjCDjDXY2wffqRmdtvXqR",
  "key34": "3FjTJ21apxbyXFTrJkaQzk8dsRqTo96PJ7asraJHQtQ5qyK2n5eZrrRA6EW8DJWNstvfeKyrAf1gW7fDp2tL7GCB",
  "key35": "2XfxeWfWdaVwUJPE2N2B4kCwkxRiAbUsJs9Qno79cNbZkdtf6A3GajSvzsKDfN4PL1cwzSdzqiiRmrfnG3NhYpbB",
  "key36": "xXLbzFKqMMXA7Tk5ThvdESNzTDFR1nxUVzq4XSWYR2Zx46ApPkBQh7FNAaAUNvijytU4bBjSMtx3kU3upxgPN4f",
  "key37": "3NRAupikXdkNFCEMAhJrTmntvqZXMKzBh2FggijLH8qCRKjA99Kjc2QMLsMLyEmVPh6hS9WCqZ3vtUvGCYma4x2",
  "key38": "4B4xS1zVZFuJVJnvCTbR3wsEvGM8wVPUsvy1K41zjeUZKvt3XS8m18yEJ9uUC2npxu8Gsf7U7RcyHKJA8C2aZoug",
  "key39": "BSRiD6aDQdSKbv3HmvN9PgM5u79Jgy8EkFfHt35ZmDb2ALPAkK2HrV3AQShD4EUxbebrQxmGFEEvVuv1ZeUisv3",
  "key40": "3yhVipob3QqfPAehdGgrf6HWBtDQ5mfpZDgWGuWU9TresHYaaeE6JhEPbAqkKvoFhbWGraUfbnPmhbF9eGEn3JZi",
  "key41": "4dZ76f4hpFC7rJ7r5rXsXZTa5MBE2K68ZmZ2R5FHMoHX3f1c1hAMrUe6LcSdVA4aq6BUm3V3BbopzD48pUdFZASf",
  "key42": "5HcpgJyfhcGuPYuEV8ckWpuwanyzyKREkpxxADiUGEa2JDCVNHd5W6AT5n79qcDBQ15yyvQZbCcWQmV8EECcfGfH",
  "key43": "427m4PUPPCcdgTWYQDaDbeTfsr46wVgTJcoEgz9KMFiubixVYfBQSZVarKn15aYbXZDiZKhuofxJ4nSCjWWEtPnh"
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
