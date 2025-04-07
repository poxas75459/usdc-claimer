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
    "5q5WnNVHgw1p5vZU8fnQFem1knW8jrjDMihhqNpo8ybcHnqMKNnVhT2SNzjbkaLWDaETFw2saYiywmv2R6bWZCCB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hRruL2SGYRACzkLy2dnQfmNfE8h7JDB6YEfgPNfP7RAYmkQWZ91S69jSZKwGBaVSMqK6ymYmJyTZy87zB7avEMP",
  "key1": "5qp7J78MCgfdbjPMRiZzRpzVMbEncWExhMAH5YjYDrMoXG3Gg2pZ4TZxaNuzjbW8Yv2991uXarufkTN6naZz4bFo",
  "key2": "45TceTWKmayvjVrc8hqA1TMfqo8PfXzYT7bcan2znSqsk42Y83qgUFynrDdcPi9AzZ6JNSHdy5popX452spUAA3r",
  "key3": "5YJQ9xLSunESbH3xSmPJyYEJZapYgV27akBUe514N2kEgWUJsdrHQYFLCXEutzYzKh2Ga2SM2RyXHosvs9hWiuzT",
  "key4": "fL8m5aTrEcoE6ikM32KuKKjGR2y4bAyPrD3rNE7txPZQweQx7GQRcatcqpYh4UA1M6oDnC6CVqZFNqKQMZDsBW3",
  "key5": "4FKcFtY4VwyodTwKt68KSU5Z1nSBTjKPbwiS3zUiiSQdEg6RjRncJoT28GJR3LbTZ5BokX2Fb6FpGZGcD3oVszCk",
  "key6": "3cXdRtkGfSV5JeuRPGm9SN9gQy3QXqtZw2sDRMuXXP69Y2T6yHtnA5rE8b3Zxoq4suw463xYQBEn78inp7i18p2f",
  "key7": "3ptXmHfVPjVKKeqkaeNFgDn2a4c82SRh1fW7JdBANUoPn8QHUd4BveWz6Z9FCqtoQWVPvXSiFPLyn3YhrkzetTzV",
  "key8": "2NBKUcRy8pjq2w6K5c4NizoVqcX56d8pzyCz7LLsqJrtgYuGpR4jmYZa6DesnfkWHREkPsPDX7LoEHc7QiGRt9Fp",
  "key9": "DaDXuq7XdMd5a2wEzoXrBGFUmjsMtcwdE7Z2h4DBPWmoaGqcFJw2CbfxFo1fZkh8oqRuk7xmkwuKWYzwiSEmtpF",
  "key10": "5JdyKDtjr2YP1xrfPBwrorB3pKvWC7f26ML37RtP159icsoeRAwHUHKjptqS5DwsRFfDpTmEXFrhSWt2ux7tNxp4",
  "key11": "5j92mLDXydHVB1nQn7LY1EhvSEKdLNnhJEvsXMLKVQoTpJvXUM1r1z6Z7K5mKcEW7U2Pb73NaViz4eLw8FFYoM2o",
  "key12": "3TzEeGX2P3Q5f99qktgVv48aX17LWHH82WffaUTAF9opisaW4bUbZwNKXnAP4poh4SYiSwSe5vqa1pDWfezUWp47",
  "key13": "4PBpcF8e6RtgnQy9cWWpPjiiapyj8v6KqQknzPaxVyzHHGQqVYr67Pb4PZAvLwjjtML2bjtf5p8mymHM1jguqWsW",
  "key14": "2kwA8swbUEdRhcpcu7E8wvpPYQ6brDuhrMf88KsL5QYqSdhMEtgQbcCUGPNUuWZmDwf8zYm9zzhBvbEvDqZcgpYc",
  "key15": "65ZVTTEtCp9qX8qexrGzijLrGtMJ4ACmQ1zWMKSmxvndY1KiGrEh525jPYoNaBRQmxsAefPrQ6xQcGPj6KLL236g",
  "key16": "2eJE7MkWtYfrabUbav1pUvVuK4sz3vGCLWMFQqJnyttkpAArR2gW5BhbMkiZZkZfsYq4xpF2KebZaXCMHjW72tY6",
  "key17": "67QEtBpBqw9pfMohLV2mbp3qznbRgBREE4W9F3hxYyhr6ReDBQw1p2krXBYL3KEXZevx7abRez5rJBr7emZfU6UV",
  "key18": "2bErEm5wX3cR48GdFfQS2W6NZs5gyuexQ7Dh9kRDhUzSom66vZctuhBJzWqdj1Ds9A5tDY8GAr8BkoBDP3ytNT3P",
  "key19": "39eiNDDiNafJSRuQ4zUvF6ArGVz3jheRctTPFWoavzxYC7P9dWuWeZ5CKStxUkpgnZusushL3PBvk7dGBhHWmrMS",
  "key20": "32ktXyeSA11GtWf1jMg1tUGSxDnQbAsnxwhbSMpYTV2WpDyiFYLth5QcL3R8ADDdanRSbPUEq8hXmZmTNxnxDLaA",
  "key21": "5zqy3MtSD3QEEJGzyZTsQTqrxjizVCNnGiS9jTH55bhC6M4aGrppauJGqUqozga9BnACTTqJkMeAnJxiqfjwKKLL",
  "key22": "5W14iAUfNgfq2GzsyktXKzwYE2VB2J8TRRdyGCfASdw7VnG911uRPrPAtbp7zfMjFa1uwZKUMDtq2JFfdht2Ysoy",
  "key23": "3EiYpLZjXRP6oXh76fpmZz6XBccJoYs6q8a4asHqVxG74cjK2o9K2sfQcUUZiuugvnhqF83cZ4XWuE3vidZQTret",
  "key24": "2imNw7MLYExoHAf2oy7WVKXGChX1Bg1RTwH1KVL4qExoP7hYque4qCHMmF2rwBag634RcwTaGPnnrRG49j8Fyo74",
  "key25": "4F1h7DiPuHAW9otzYkzE7XarQAqVNBYS4LfmEG9em3pVwRDRDFgZwiVESGxxfb5aDM62NfqbHmpiSKt1anTd5eam",
  "key26": "c6vHimhkZ9yBFRPC1pxKQXUDkymNZWMEwtSwyNAJi7VrvJm9tgmtz8mQr33zDbCHPknW1UC9w6wSUNbjo8o2c8o",
  "key27": "5yCFPnZVkKaNCiAcpfHcHqqWPqhNwRSboi9AQUd9CvLyTC8aJBqjLFLhy13wQ2ujAp15ojMJ9jCJwxeLoAMWYc6W",
  "key28": "5VdfKBcLDgkQEQuXiErLakkADRsp1FBdJg9s6cSNcYDPQ2GeaAstPyHcfrbeCWr54ArXfmkLyxPH7dBn3Wv1pUPA",
  "key29": "39JUpWXequkgLjmXDo8zP7GSvwGxCmQTt1zvwTK4KQNYKKxziJywTLcbtzpd2ZuwSHKPRDKMV684jbFZZH73Wzgi",
  "key30": "3VmcbHUeiUig6SXx3rWkYduxpiRsX1uKxqGXYeTiw3dkjuRNmhvC6Tcgf16CKdpDWH8uKXDQ9GDqU8fzopeEitut",
  "key31": "4U7jYNMkm495oaxKLcc8JwiJoaKxB8FQRKchJUKyjQFuUJzY6yMNrQjfHAe3fJMABDexfvp1G9ekmc3MAyQCm1Qv",
  "key32": "2avWSQ1M9cxMmCxQRNwycvweJMxZwFAfYv3dcoFsNzVvywUM1Dd6BN1bRF9f1mDfqWSwMdHMbX3yQsi5qCYsz7xg",
  "key33": "5DMEjSn5xsjutzuBe3kjFJ2QZpdh5mGpCBiqQuhZHG2BE5m3BrepyRyXz4xPaHgJ8GAsdMQmqnzPq3xVHUJn3ipi",
  "key34": "3XngnTVDHhpd5DfEPs2TheEaMqSHL7U53UTxRvFsfnFX8kQr6Fa2pQdY8b6h8vfFSkMjiAP9QdqQYVuSULwgp6ND",
  "key35": "2JFYFDwbQfi9iddhHd7MVVxj4wEjq7FeRSX4xF3c4tpefcy6Bw6h5stZ3GTzHdE9qMGA1aXuYUahf4XSBY3mVJMx",
  "key36": "642besXUfRF21Xd8PBUayRRMozConRAxEJWdSDa85tTga65WTMWJDEbrFTuZ7VzKXbjCrb2bud74uUpkmhxXSTuV",
  "key37": "TgHKx1QfEt7ae8LMcaKuQtEuVL1DhjHDsY7uz5iLmH5HLqkd7PdfmkMRih9yaNUBhNAPKpugbziMq7YiJKcFE2K",
  "key38": "P4p4qtgkDwod3ABnLWCEjfo5yRz2XztF7dJxCDuce4kd4naAHTz3eJaWQtBF5hpfqNrxVP7xyJGr6Mg4wzchstJ",
  "key39": "oqqXUGAsddM983tBYgaVGmzz7jYRcXubZ32aWGNumxA3ctPNj72goWAU4JHbJS2dNkSDUX2RucryfQuTsmateun"
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
