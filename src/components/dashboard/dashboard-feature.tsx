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
    "Z1Gb4sMZtiktzfeNA6aNvMvgQSHsTzGu1NRg3ogW2j5KTkenDUe9QyGsHFeGTGG3Fx7FrurMjrVaF182ka3xvhv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fBqUkT26pQ617bFMEcos8GbK7czN7YvhRyYDDibwC7L2rQhRDB2nvkPXqoTJdPiF21Mt5aQenER8UbRSAbi5cHF",
  "key1": "zn9WYLMVVgXtUJMv7pbfC689rZXdtxsK1N5GYhsufFcmuYTc3Y6a1hkY1Qb51UbCiRxtJ2p9V7c297j1rV8Lr45",
  "key2": "9XM3HgjYPNHrzWQYEhSPYwf9dKD886nMKCjVaLy57Y3z8sYbp7A45krquMDL9C8WXpnhEZXcDJ3ritndGHojPT8",
  "key3": "U3TKfcFybyG57qdm9BqUiUG7riaXzbWyqef8Ys3r1LjNn7czftAzeDLuwSZXBWhHwZeF5aqwbeBixSnTqPszrB5",
  "key4": "7TYUbRfY1rxN8TU3uR7k7X2HjRkvLgeLtCypUwEkXWK8dVrWWzrvRziPTdoCMbgnF8dinTMm2yBSBxtE5Goav7m",
  "key5": "4oFFaMxzn7wfyJP74gqJ3Bymgopjtb6794hEScqiXb8MkgxTx35kwCZwwaJc5CC6mjN74XLWvD3FvrEeeTKz8Hph",
  "key6": "5uGBhEvhhoE7ERYVNCcFgxQHtuPUWYX4upvW6kazcjC5RvdfNgLQ6MhcEwUgkEqz1QxWmUgWGfF14spiAQVCbGHF",
  "key7": "3i4kzdCycG2t3FACDkcA1NdehpJtU8CPGshcetxjCE3P2HR2yAoenkmSJB6V9rZFR8kC7cD7owBohiritkRVbWfg",
  "key8": "pGJ8D1Hpo8m3GwL4i3bHGpoLwVe7hRsKxJ5dMiyrUAaz9PDRzzLDiUormPLUfkPb7EW9CVio9i2V3ALMEhZakaG",
  "key9": "3gMU3mrR8YAGB1wNnDr4aGwMsdR3pv1X6KAMr5c2YNm9Ypu5JfCHqGzzAf9iqk7CsxVbfcGcAJoDXoEsqEVUX9nA",
  "key10": "7cg3yEcBrQcFJdQgambQLNkYtNFTc718uQ8vgJ2dWUV1D1yq8Cts9QgftLEmobyUh3GCZiMPtHVdeb1pPZVbkyd",
  "key11": "32iR93drLbbtpG41wA4vRs3nExEHpFTUUzeWhM7c7AGPKbc7HJAWZsfWfT3jvGAoX4mv3FXooLngFrvFsW46w4Ya",
  "key12": "3UVFU6yxhx6NimUjMPA1MVckaQywH9sWmGkCHGntTtAXWQHA2tzxni6ofUyCG9osUrNA4DboyhXy6TwCLXbJsHPp",
  "key13": "3GTCpu7eWUYupPPhmv13oEDLWifbNodoXjT392fGtuZkKiutKZrHsFcLYWADHPj2aib6V14rMbnAbHsdmXYL1HMb",
  "key14": "2MaRHdyvTPXEJFhUYpLMQ73j5CcdXmt6L8dat89uyfJmeNrVtVDUatzjp7TD8gxLmkmdJkyUfFzTrke4GFk7NiYX",
  "key15": "2eQCYL5rRcACU7ADmEt4JUS2gDxt53kMNFSqQyNhnAG3iFBoRCaocscMvYQqLoscKCqcVJR5tnZSjaANkPyENRFW",
  "key16": "Qtn3dDEsp4jX72iS86uusfUbZLQDyuscnQL7T6i2imKaFymcpsGWgHKwdcNM9LfzW2g7YoiuSmmgPN4BhERYJ2w",
  "key17": "4CZnppwGYsoFfLXmqT8bz8LB9x7Lx4WCv59JhikCPhytCbPGcRULFa1XCSXLFmhb8hH8gNwhfqmbE3EtdVg7t17L",
  "key18": "5Y4Di4BEASXpZqKXTmvS1Sk83KYLjs3ZD4vgSzVA3wytjv5i1sgMMK22wnSNQLLJV5FiYEzrEe9kRsGDEKRpvZuK",
  "key19": "4vHKB9jeccEdWKYLmzaECtLDmNHXaZT8AJapdf6X4UiCWpfT7dkbQwe9wVjsuQZA2RdE5P24XRUUxYyiVtJCobAn",
  "key20": "gLXgsuMWf7dRfPZ1At2phhubMSvweiCEJ2m8No8dAMFCjtVZ9i1Vj8pQFFPkFdRm1iJf4scerAhweuiRB5nH8FS",
  "key21": "2Azh8R7x7uLvx1qfQ3XphBfguYjKe7zJhkGSXJtWsWyTcG1JSCVrrg6uAXPkPuJqerC8MEsXN1F7Ny96zRGAb8jU",
  "key22": "4MqgcCNgTjWrCeQPqS2XdbmviNch3VkWEboVHY13r7jncRybBuKcmv5svkgTYUNVznwa2Re2Qz4Hdz6ArwQV7BGJ",
  "key23": "4wP4cNjnWEszWj5q7QuZRerMg1gZF7KzWa77j4p5GYYyKHV9C2mDoAtr2XiyGECiETiP2CLA8kiN9kj6s6UHqxcd",
  "key24": "3qZYPQBBRYFCejGPyUfGRtwk9XAHUkVADE7zrQs5JjCQWP1KG225xtAHUCnj91FmS64rosYJu1SgnMT7HTotmFHr",
  "key25": "5DyT9EYT3PEn7TDEucQaprGM9m59b15bdgprjj3CKykWRJ2x6pDGdim3UvunfiEsvNQtdKFvEGk5QdYRbiWM3G8G",
  "key26": "3ZVt486Upc6YdCqrTDr91JvRn8FSwrT7UH7b3KuG7i1J84CxSmR7X8HHS7e3v8hhiejSG9F1mTtip3ba6zhtaM5n",
  "key27": "5NcemQZTDCRbM9zfsEU6TjGHEtPxbUkeYhpMx4jpGYWJ27mSupV1PV1vcGBYPcyQTLcq96bbCEH7S5vMttp7oxER",
  "key28": "5J3B7thcRwRPpmA3E8aKjs3zZUGmY9TmjA5aoEH8RUDawNXjzBffKwguc8NP2aruGvmh1oMpSdAujuJGLiUjoNJq",
  "key29": "2SosAUeMipVwu7mzkEZSJ8AemDwuCTViumhPBiV8AsoW1vp55mJuLax57TiyfHTkg7pvqhkdSjvgAtP5d9CQprd4",
  "key30": "3qPtZPk1H7WkgRULxk7yuNJxjqLNjzFoGUdqE3z8aMRzHvoqdJ5L5BkXroS1EVtShcsncH8jYgvUDezmTDKzSNLL",
  "key31": "3gZ11gDAoriRPiuUVpP7quMjCECVUCFXuEEHQ5A6Dp5d5NE11MnbFHmyxj1pLwP5K9kappo1W8pva9mZamCbK7im",
  "key32": "5LhNnYYDZrrk7iQR5i5eA6qEcQK29Cxopyk8KzMx96EnsASu9vAoirSgWyMyD8BYiPe97HmWzWA69r89eTj5n4WG",
  "key33": "4pjWGckg5PrsnTS8vVsicQU73DkMR4aufV7uEcDJCD3iEgB2k2KgMYjQmh8h7D4stNKSwDS6wvYGn14B1sQGcTnD",
  "key34": "2S5fDf9t44US6vokeSQqThXJybPQkTogviSvxRu9Z8KinF2Xz6q16bLGh6GDnByQRRDBG3UZC2cd1TaFjQbF5qHb"
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
