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
    "2R4v8CDuk2gmkEzaw5ypiqWVP4XAz9ESE7KNwK4kCrLLMFdWteomTBvLthzhuFE5JwZ5T8cu1kWVX4vTkkwhgwK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DnfC4dnJp8bVJu29E6AAxh4nRK1WNVPr3MobNYkrJiouK4ysrx1tLR3mYEfhAJBqUcvdXTTuPSW5664pUrqesoE",
  "key1": "5D672EZgFFDGfToiY3g8pMYyQdbwtihDfBsiPZaGqC6QWNqAvHyRr66NW2cdADpjanZB9tWFVEMioeUDeNpnrqsN",
  "key2": "3TatN6PkGKrUKWU2Gkx4mewdxfud8jKuhCPqEPLsZFd2S19ZCagcizDNkZrhuzZ3e2VGHDXP6MVa4BTeWbDSwFxG",
  "key3": "4UhU5zf3TXkuajztfPKyevvMboB8RPzoaQ94csXWdfGSgtYYM3b7PwiBbtpB9Y6cL3Uy6HsH13DaGNXvZo7diVm4",
  "key4": "1z6VTV1wBvPVTJGqZvYxvR9qNfv7CMX85abMYucTqGrRszmFyvwJEEv2QJAgTgZywPGgFixw33EyNFy7gJHERVc",
  "key5": "276g4VPi8RsnryEFeE6UoeJ56bZPqM31NiKcuPowykqeUKm8oDbWKWrQ6hkt6RRxvNK3o7vAysoUua98BYHpnfBH",
  "key6": "4wRJ1khsKMhy5JzbfvgHtGhKM4cJENWM8Hu8asdhJLkSFcBcMEJs4fgWj7nK1mZ3NTJmdUKgjVD239a79Phqr8dC",
  "key7": "2hkGbzjnaUPcG285PDmVomDJ9oEukWWbCqLD5dpewBd77dad1RUXCsyjhhBXbhc9SZESxyPGCBcTTVjbeYkhZdng",
  "key8": "4zD2TKpLAHZYth4TrMiTEAF3pQ7A2CLjUKggANVdKFG3ev8q2Rj3LYzgKviRc6m2yYGxkw4UaTWCp5hoaLshzfD7",
  "key9": "23WooVj2Byuwfc6hoUixayMxBVE2WYaAajE4MTsYCjruQFAb2pd4bieuJGwZuT7zy7SR4wztta1WM8TRt4vo4MWe",
  "key10": "61fvVuFWvEaVGALkkNXw5k27Xng5iWdmAgDyPLxXA25wdu7bWQHp1Mh7vEtmssvmfehpXsU5GoZw9v6dS5PbkphP",
  "key11": "2w84LLBmvHJSRMLVS2g97gtJRs1qkqyYzB3u4cmZ8Z9fuoSkuWaeo7Voy2HDz6x6m1CvqYBM2LjFSWYJcXfXfu2F",
  "key12": "37jeH4kzLPQQePxScb2dbA7MUxrMr119hhYEi1EveHesAM31JH4DTrVMFkt3o4G7WRcYoYZzV8ALtkXwfawoGHoZ",
  "key13": "2Tk9r4WWcegeUJvck1UYk8pwdE9PvaDnEcVzw3WC9jFbckTfPuhpQAUvSSqz6fG8wtxg7RoNHgMAtqxDQowt8aK3",
  "key14": "5rZ9CgoL1vTbSWY2FU43Yo9Tt3NDePnUx28QLhLyjRkHLMgoZ69YfQg8EoWKNLYRNmP2xLmDNh7egny9dVe7GMXL",
  "key15": "4o4Am9M9AMBdWvC5m9noUwNS6wb5Vekt66XBjRgKqAqCqiEp25qcSAPg5GtNU1JZRvVSRCnUWVDTthxSZTGDjNR7",
  "key16": "4gHLd7hBJqLooyA9WgKRcU4awR1x9EEGdsSh9WVkMfvKZyMx3rYDFKk1DYy3n8X93AGbAapLUkb26AqKqSYfiMxr",
  "key17": "dLs6CQuTNLWHCDzUJcVPZ6PnYKQVEZqXoz6zoSGZNq1WvYd5nNu2wvy8hKk4Yqdr5mUQXwq8t8YEjf2UpMpTGLj",
  "key18": "2fcF1Ve7kmrjqoBaqLcuCtDhJRhUwaNVUtJaTMZsy1RLx2JDereD8SDdaVURXt4Siv9sCUTwZwJnRZen9bL1Ky1w",
  "key19": "5yHWDvGMYgrZgAv5PNY3utDrBB37bsit43SXvjQGVr7dCo5m7gsxJXa65wqUaW98Kh5CpccC13KRnvBVNaxmhq7r",
  "key20": "BKwCN2n8p9Ke9m92pNHPGauNiJf3N18kAp4b6jXQeyLki5uXF1DDcBhuwdUT8muBGCMYsGAujLSa4SQ1TjK8DNc",
  "key21": "2BwauGs5dkGkVKVUmRT41Cjz2YwSXVSt8rV8cxHihvxoFQGVbHYsMJbqdTptJEGFr8wmUUr97xFUqjdt1i2H7hWE",
  "key22": "AYfJPZoh4xvXFEbrMe1eb3EEuopYG2EbSryYsHzCisq2SyfGerkrB7upQj7PEVLjp7juaNzboqZHHbsUWb81jST",
  "key23": "3BdPpbwNZcwfPTFP8sRUnz8hqSGyLjyJa1LKzN9ENqUm73dkN3S6TaUvE8shxmwUcvAuk5VgA76ZPpMQbEx16sJd",
  "key24": "5xumvM6YNaX9gm6RRcGQjiLr6oqr4bjBULoWhsVhKHCsj8Sao5iPLfmH4FNH1WxAZPP1PWnCRExQRbFRjE2iz6Ke",
  "key25": "5MTZuoiiu5v9Z9HD2HdCypcZ4wkAPBKaaDcCqmwL2SxGvWE7d1dgKRo8voFae6pWJZisGGiNs4TMa23dciNtfXCk",
  "key26": "4tW4KnXDsKAYWLSXVAtJ5jLRyEsLsiobZwGY8zBsoy4i3A9bFLDRGDqnqix66XMreQfBcipnYVEkK6oEkhsEmREn",
  "key27": "2DYQ24g4W6jRQqwzSE9Xyy6691k3WCiHnCazhuDWrbtofvPECufpPSaS11Rxfme8sLJxzdmkFp9BN7WRD76ms3k5",
  "key28": "4zQ6xkGkQojoSiYKokRr5exGaQ6e2qLzdDjNmTsqjqtUGaXUrXNWAf73N2rafZVBU6yvWPpbohEYyGpThBU9XD5c",
  "key29": "4mTusiAW6LFfMH9sb5khmeseepcvrA7kHkbFummjukDZvyj37c4cXeiwX2FKLAZWsurFkgkSCQ1jN9DbvCdjq3TB",
  "key30": "5mzVdN8egEE8EEf8f15oPRNB2EfHbZUhtCx54aR6AXZk3sWN42NiejNfm8zgs6TUtgZTYzv8BCTdENTNyRhEM633",
  "key31": "BxkxwQq5ZfPtiXeStN2vocykAk4Y9uwbcHH7Y7mx92xV2tjuXub81Hiy3Fs9M4YskcLZrg2Bdr1rBGazLvWay4p",
  "key32": "EhAHev5yzr7czxJL5MJ2veE8AkdKdTwGjTpmnVFe1V4R1wXLmqvh5At7S6gyACd1RwKupqQr6877svattZhe232",
  "key33": "5AqXfCRtF8GM4aVj92RxCY8c2VL24gjnhT3B28ih2Urz3owP46hayLwEWWDPDmffEgRC8Gtj2KH5LjhEhQNu1MrK",
  "key34": "5izpxDbYs6ngctRE7c6YDLYppEsdFYp7Z5E8SQRFrT1UHk4QwUxKm9zi1Bh7eoFEPXf4NXjjy3DUivQVcFhAHZq",
  "key35": "5hZHMqUyatjoDVeARsiomKqaDMS689zXY7525iB3GtRJ3EG2Jb9s2ywqsLwsyNCcNVC6ZCEsgscsehE8wLECwgF",
  "key36": "bo5UbxG4a11kLTx9pVm3GG8AL62pYeVF6RHrV8GdiSnFEz97VkCZ95ogAQejcbptsCSgYz8i9rdNdteeMuuDzTz",
  "key37": "TA4SpqJhPerrniocmUHKmUc7k6gH28CQzrrbAD4Ce5v7xp5xn2KQQaRdcPPqe7cvUxK9biS6FQ5EiSkHhmv7DuP",
  "key38": "7icmmVqAHEWbvbBLfKDwh1dDfGatihBqZgiAJfwacApiBtCvKh431VJmjp3XwQyf1TRNjjo4SLXPDr5AU1W3UxV",
  "key39": "pU9JDPz3oXtYiScMsJiu9tGCvAYHUqe3nxACbGoPdTuL4eQECsvu77gVSU223moJEW2QUgf2n9a3C9qKH915hDP"
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
