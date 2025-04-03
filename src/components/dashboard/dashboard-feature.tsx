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
    "kERMiF7bkLRApyzp8WwS4sBquvNz7W44sYN3Dk6mA1xGR4g6Bcs9NqrjEYvutL7vA9PmgVq99r6n5aAF5LpSGD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oB4abwHpT8oo6CWZHH1vmVTSV1bA4w31eJxBMCy6r8oiwwmEFNbPsnVSujhd92ETuEirysSjAJc6EVFiSF4Q4EV",
  "key1": "4PpbkyKZ3HfKSuzjYWkhKWZTYzzHNug3Cf5ZxZXSrbMi2Cg7ErYTjFfcZSUdktR6KAgfqvpTzbvjFCVAsspUDDjQ",
  "key2": "2LvdMHyB4SNt2egUjns6YLQHYbPoxPJfzY4oGYPbmaMJ2dE6SACGE8fkPwDy9V7sNhCqUDqvsSVxFBeayALeQPpt",
  "key3": "4RwnXY94mgBa3jRzVH4yaAH85eDG8MvABi9CRJzxeM9RF1W5XPW4Wv6prDwvUVASWPn8guVRzjLAS3SFG3CukJXm",
  "key4": "2JHci5EasxDKsifKmCcv4QeDAAs1G3nXwmGbnaN5CzYePyVoa1yfNfbaWeqZRFY5jPs8cWJ7EG5sdG2ghS3BdpiN",
  "key5": "4nh74JVpXzXGvNDTCtqySDv6Brjyvr1Ds9tB9sP2jW31ZzRrRxi3szxEkjH5XQHmQRYVoPoBYkRPSZ32JEGdPeLH",
  "key6": "2RFThu2CCu5ed4Y9CGcnQPDwuP4pmCHYYv44viWdo6BGb2uM98ukZBScxjdykocnbzebfhXNNobRNogcmkvfCLjt",
  "key7": "RTug6SGAGboCCihNhdvrmaQwKqCwTTKfLxWtvJXcArKni2SEm8SDiuWVkpWmYYrYPXjPrD6ryjqfp1qRhu7APLs",
  "key8": "5AHvfoqkRKpYz7AAWmewx7xN6GvzqD4C9nZJvg8CB5XpXhaC2zNc53rZG8YSwJ1zg39M36vGUmb7FXUjJQ7pbQ36",
  "key9": "3FVzu7FcVRqxuNFRSZwV1HuQS2sUkouMWSfTmhBWtR96HR7Bv4rq1qX59YhfNK4KEfcLtxAMEcwm6uYdSa4SRYsm",
  "key10": "5Nsk7ewMg3LhhJ1CZx4W8pnH8yeVFhVvYFCrBrTrAgf5PszNWqd3xL1Vhsiok2Z2yBNxhEfBYVdeP3RsuxsN6nyp",
  "key11": "3Zk9mBcTNG5pQFVTD8k6K4XTQtqDPGesgoPouh8XhJdd5RiaSbnP35Ae4R9KByUZhK7nFC3eq8NCurmF7kYD22MU",
  "key12": "3XzvSgkTVZKus61tUG4q6nZG3ahTtyebGTYHMaEH7hKdcPdLT7gE6Nh5p17cbaXJUR1NUym5boKjmehBhX8kkxc6",
  "key13": "3ti8FVYBxqwQ5uhEQgjsVkRo5cZQHXdyEoK8joufXfShNQqCC7U9iH8mQGSXNwam6Z8xk16r7fqEaWsiDCzcycsd",
  "key14": "iVB6TDzgW66orPBneTJ6T5iDuBB7XgEGw9A183j5pLyp4ggHAjXuGD1u4PNCHznHPvnWZqTi94Uy6HAQMGrusgQ",
  "key15": "5o4MFgMyZhX267TknuafsevtJPHFgW7YwyMqpn18Rm6rXEenWRmRYV7gJF2wfxd1z5wZjkhRXaBT8uFin9r6dD8o",
  "key16": "uKAgKkdY27up1qzNcYoZhNjRGa4nnMejoPQbRbJJGGXpWj7AMvKZkyKR6TqoCGFUSuhqk6y97PcH8wffqd2U9m4",
  "key17": "4Qhsvbb2LjuMLjuHo7z5GqZY7kMbEnH2MY9JPtZhCXzfimuUzjhppTW6x3AtVPh5yLBa3TpF41pxPy1vUryRmmy7",
  "key18": "2zrwqSqz71SBGytCmfLDLGWWxxWB1iueetNHBBcZKkDoMkzhcLSLFgqgyCRsceyNXqyqrmUuRsXF7nseH3LdMYLE",
  "key19": "548upihaRD6GsAahVCFGuEgjxg6Wd9X6DsjQ87YBYhzWK4J8Gq1zfQrMMrYKo88ZQE3RJTAshVXBXATLqAVAWX2J",
  "key20": "5N5bZSEWFDQDtNGz6CadVRzUXobz6FCMWdpGRk7ArT8xA1emsN65Sr2U4ieotvyrkLS4JvTR4obsbFejXrrbu31t",
  "key21": "3rzmxWVVt3bwcTVoDkCVbMEiw1DAg8cR87AwXNqqB51M8LhoQKK7ftzRmBSTD62fCwUzL4pdvDDWoJzVZMu378F6",
  "key22": "63dVuv32vMr3JnxjmUcQixhwmdHhDhQVPAAtxGbH5vdpZ4dQWwuVT6ByzTzifFyHwfnQLyu7basaUhmwRTJp8T4A",
  "key23": "2ERYFF1vaC1nwiDMuKAXEgv1pvCRqEdpjMuHS6puk9G5aPxdNUUNU9RKPveiceYy6MQUtxarttG3vM7sAApYKUEZ",
  "key24": "3bRQ3SijRVqLaBnAr8x3rGQA18fYYew6u6cA2Yu6g9nmrSkW2rdfFXXxYcghsRvkZBaKVGm4J88oV6BZhakQqAaL",
  "key25": "3yXvfVb3AKFgQwiZtgonDKMH1EYkrgCpuDyZdA2r3q5LmpQyb34cUgvF2M1LEf2wsBvTXksksq4apMwTH13kDgzH",
  "key26": "2W3Gz4jr4jZjkkosghASzQYCF7rGuvFXEEGAk8n5xfz4qp4qdNurFLP8Uqii1jooWaToUNJjYLAYkVKQ7L4ACpex",
  "key27": "4AQdDC4A5ypfUGCwW1x1SERNp1XxvMb3bAkRfQVQdYUcNnSdgFcWNZbKacTQhqhgqbNCATjDxAMehz2Zjdo2qdDo",
  "key28": "tNesHs46ppj6KS39qXU3HZagX5sY6QkCn1ZgkCbYkaY6ZEEw7gAbQvwSnpCkHD6fUikD4YasAEwCmdBYAjfMuNA",
  "key29": "3z5msVidtXMhKQMt7R5RJaWCXv31y1qfDiPgC29mD8nnBtQJ9TYzBJTtSfNhiXm43MBj6K1TerGBYcdRNy8GWBZt",
  "key30": "3P9GKkGtZg3cQniijw2KF1BErSg7TU6vaNbf49myVM6tfdW176TZ4K9UBcHne8JjbVyZwWjF8usbFDkxaUmwKTj9",
  "key31": "3vgnPrDStGURqWBZ97omL2rJWUtvr2ytA13ma2whq9UpYowy5R5WvJ89SPXZRYPWLujcyayk5xxKGXwZZfDywjaY",
  "key32": "5amt7RnZzUVcUeC3FudWRrizLAGj8aGAU9TVJaGbKBAs1PKKz4FbUAx81yStWte1z3ZJRC1PhSQ4kpYhr2fykwNZ",
  "key33": "4AEuGeK94ioHSJdigXBcJjx9uvkHS5h4XZUbmMmHunHDdLomHNCyYA7ZDgXHTig7E8hq8aso4ksvixLeUeA2TuHK",
  "key34": "2pc4uprNWy71Z1SFdJ2xefRNUXN2Anf6sHp7jpnLMsFWXgn1LctY7M5N12919fYbTeWqNVxkvXbPGpQX9HuQ75ZN",
  "key35": "5aLttHHB6PsDhdaE2txxGrFpD7xjYErGy9JJ1hSRw89J7QGZFQ97nhdRSTjf2fYmufsAkdZEhkS29zqBvEYrmNJG",
  "key36": "4MGbJsh7P7Q8x4xqS8zjuE5YTBgH2TWpHxRSwLb1pkF7aSmS8JAuQ3jcmNtwJAreszeeotjUUQXSzqAYZBR5P76g",
  "key37": "47Pgof115t6dxhRfNt8ex4RudFnFCpMimNxo2pz9o4phThUzY8NkJUnZY63FpZaQkGFxGHDTzTEvqTuM2FkRuv2D",
  "key38": "DawCwrTJZPAiTpXjCjLcva2RJkJ2o3R6WwjSrPjiJgLHGHKidKofvdnBfLgzzQQB3g3e8wsVHzWszxMvzoNnkrN",
  "key39": "4svtCTnXYVv5jaQHTK4powSmBJ1f9fd6Zgre8ZTk9dGTxmUJYy7ZUhvywZj9RePuTHvk4hTvuYgqQ9RWSH2qipUe",
  "key40": "LkFbLvZD18E3rPC9UF4xAMrSDwAwyDomHVeAMQq23csEwiU1xPFQ7ynaVTWGdr4ACNCboLa5aPvwQmLJq8FmhSi",
  "key41": "31E2Nadc2aEe2DNZbADbbCnWForZt3GAVSQgN1N7G5JzFGLt88KLnX6W4FU7sxWEAK432v6JTEockXYWRxEFLEM3",
  "key42": "5tsuihQszzuLHAGD1qvurvAZmUYd8Tbpn4xsJmHFKZz7T2oTGceawLBYLtod5MFkpDjNMuuYantCUoW6yNaf987T",
  "key43": "djeWNYfGDb352Zrxkcpm61qk1cfvzsWdK6nBqKSe9WJ38Fzy8CvgLdHyPktELgPBaTb3JyUxHneAm5gFHYuGYSt",
  "key44": "mdMdAqE2sqyfBSsZ4eLiM3ugJNKYfuDb9f6zHN8hN27ezXdpbWANpYSjhfcjyfNT4fwm9GNtMMvH46zwsu59y73"
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
