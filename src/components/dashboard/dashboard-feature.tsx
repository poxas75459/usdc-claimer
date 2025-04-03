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
    "4KAbYHjhgQDKp9oNKzjhVHtkfs6icJ3VBX1kPUkwArwWTsBcPZDTe5GaXWdPfcz64q3rNwUqmVZy3ppmifZXXmuY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4znB6ruzNpfAdvzdZzSgvy9tL71gn7nGGHWghTFZjoZy8BYyhvrBUb4rVaBLhvCt3jTyunjxNYeGYbpjTCJQWwuH",
  "key1": "5Nudeuvw2GfwYGE6eN4xEukjwccSLSJMWBCubT8Mz8atfkJHQJaKfLCwQJvBN2Un9hZF66WMx5Vif4TdGVy7ZJdF",
  "key2": "2f6or7wK6KommXnNKZwGCHhe6e18efggSNXufwYVwaEKQcYG3VRjAADwMkVdqRWp15AAQJoNjoGQGEpkwznsBMnV",
  "key3": "4rvrsLQ752Z6SB1m5VSWtoGZ8iYen9CooM3dtYpZEE272t3STdmT95LBshz2eH7s4KgDfv9ooXxTpuXVp2GfusEd",
  "key4": "tokoBxWz7F48QRgD2et8YkX4tNe6R3gzGcSfxJ52krAfBrQaTgzhWQhMS6jTANBeF1PWZx4oKBshgeF3bWUpvrr",
  "key5": "52Au5WGzaGEXqL29hxVrZSECumynh4wgjacvAwDVGxbUbnKbjsfi5C6drwjvTSpkaZcfYEtk9axKfrXLt6iZPGzq",
  "key6": "43kk8CryKmdX2bC3xo7yd1xQVFSmQDQL5UE3w6Hn48m9vn6e6m11Zfzn6K3VPD99ZkGRLGXXzHiUdgP8YKcm6z5e",
  "key7": "S2wv1WiA9gHsQbhAPnWfmrP9BomQxZPwFQGh67LJJ3enCGXnhnwoB8zTa6o8AFQgyZ348r7dED2UYtcq8BhCsXy",
  "key8": "x8Vc9dxi5Wj2fcL3zWwNDNRYDKV7xbdUuirCYLUFGo4s7KkXGpL5Go1MMpU6k1PzTYKRYtnGBnshhz3W9Bm1oHM",
  "key9": "2QfBa2d9JhPzX5xEXxtA2FhMzuRLhf2aX1PUeebP4dcTaE6ib8a9m4Tk9GR551KqAE2jebfC5q8RyEhrGurTBJRu",
  "key10": "3XJKpATS3TotXCpCYjeWvMyGcrftr9zvzEEE9GARtbjBj1fWJVR64Ac7R599SaQ3DVNvxj2CJs2onzdpds4Qqa2Y",
  "key11": "uRkahjhxBLPD46oFpM7tzW9vWsAW6HMxrArKjQV28scdY8j4AVJ73MQX1tSVNQ59hKGNLGAVmdUGqpppSabkP18",
  "key12": "vCrj561VfiobHPWVuAfLSEGwFf9sgGCxgCRWnVEcexEXikXxtHtAP7213oKP33RoHuyaJYdbTfRoXWTVTEXnaH5",
  "key13": "5FwfiYgMjKcLKFaVGoGpCkqAfoL7Ly4oqdoQPUPzRkfksbWCkQ5WaZ69uHqvMW1DsYXPUp7V7eQDNB73g4g6ie9n",
  "key14": "5hXF9VoqbnoHQzmtQ76c7MxBEPFZdGj4qkyZhdqk4TLLPs2ECLaRQjaa6yaeNaSL1sacV9ZmxDvBpi8VJ6QUQcKc",
  "key15": "4r69bTQ5mk7NgXb9E7CXpjd65cFbvLpeqz4WQ4n93i1wgHjGNAX32zCPWVwT6Lg9aUse5XY6WCDL2BvUSCrTLk6Q",
  "key16": "uPxkURmh9MhC1eLrh1RHuYt3JrXbtHvojPRthi2Q4aXE15ycPKdCLwHPBSbJz6uir1TSjYU7daJpSHfrSD93tPe",
  "key17": "Ejt3prgST3u3ahvo2Sh6ur2Z2Xpyx6dwLhQcy4ra5FTYGAZFuPCUCsoN8ZrGb4srBcioQhDXVZ2UaFUuWTcoVHQ",
  "key18": "37c5TnaZXCjjK433w1jsEbNJbg6EWKwJ8guEEdwyXQbWdnVhkY8qH7pTqAWUDcK7fDTaBGKvv1bAvz2Gcoemz2W3",
  "key19": "3W5kFDTzXsCT2gwAS2dSDjFzHLCsAqRew5gJRZGcdoa5iu7FRjA7Z29DigzZmrXPwcCLtvt634ydnQyTru1LhU7t",
  "key20": "2S6H8k3wtQaKpctNMKGNDJnhBJFmL8N4xgAv7YKHKE5sDkSPH5Jwg8C3DxVojdUK6e1zbi6aEahznJ1AcPxJGrd7",
  "key21": "4Qs4UYmxYaWqDo96XKQ6UPaqrHa5k6yS35Kn5rNxdk7Go4AYMAx9pfkNbqnJUyZwNoafW4XSASfmQRTsKReLsLr6",
  "key22": "4QKMMKpKB3hmECy7whsbHSGryGEti4PgribduqcVn1DzFBw6zrzFUvSwwUrLZ76YwxuuCywCXwvEtvZNE2gBYnFe",
  "key23": "5iasKCLUCQiYSc9zQZeC9DfoGEzGjFWNn1JPQGHMTLURzwVogYoTE5irGbgStjBeM9km5ggsEdxA9TP3SheEfUzG",
  "key24": "3rvBdFP3uP8SMTSWcVMu8qPRKGjArPVUPLFtTBY2N3QwnjBYMjgAHDDB3k11wSpK4KWk1tjCY77fC5R8W6NNcGNq",
  "key25": "c4AsWm2URFsQDXqaBy4vjvqLU8h7GEZLnhAZTPdiyv6ypxe2HCrKd913SGfo4UFKHw2rTHGGhNewqv2yjYZb3n2",
  "key26": "4TfgKRKrBszNRF98LFhzh7xvNXPArejcDPfuzzPPaXQvF7f9p7wfADEr2ayVJGp1vxiFDPtPLywbYv8zWYRmWo4Q",
  "key27": "TxR4uK8xKM9FzRGkcanVoJtSUY6LqaA9P3Eq1yBVTwiFSwjS1yPSc6fdmPFo26a6iXcC3TnQ49yyCbmyXsX7ssT",
  "key28": "317KcLeLZef8Uizz99QMKuY19sNzcCSfnRtbwBVLS3kii7WC6MkNK9CaZ4JhTd7Wi6cWmrPEofCRndhTYdnMC7X7",
  "key29": "2sACPFQ38q3qZFAwLL36zgzPpQ3s9X9Ut2R7MpC4L2kvk4nHgvBLABgnBLmn5xTfcbUJWpc4PcT1X88yxCVe8CVJ",
  "key30": "2a6XWFdjhj9VxmDB5bBVm3CCqg5SNyN4JxTmgn3u9xpnv5xTNRCsGSyuKfXiRnqqn7MBBc5cCiSMg26J7ERRxMxv",
  "key31": "2brPVX1FAFQUBDYw2s8EUdQRUpW3mTLvyvLhh5KzcFuEXV8WegXK2bSkwJhbGu66okYibDPTwATd28tgACyPKydd",
  "key32": "3Zs4ucwo3ES7KYMnRw7ZaFbTNAmpwLhurw4ua4ZPB47HQprrhKbfFFb2fWAX9uzmrKnBKWqNPa1bTsbkKKyFubag",
  "key33": "5789smaEqNuKRHMSYuUeGCqehx58GP9BwbfTh7bMKn1BKZzKHJW2P2bLbvq66gZMGr8EpUurTw9a6h39EcSyWCdo",
  "key34": "2nNWBesU4eeLpS87krv5WWtXhHfmiuMWdQGd86m1WkGpzu2GpN3TKggoSEPS665ZW7PLwMstS9V3FdDB1tRfmEtA",
  "key35": "2RjKfbwpDvGfoMaoU5S2RdXyyJ7AY7mGirrRpKkCJDxghrundkJ98xGEdXwwGtgWx2va86QeYqBpXPLvXp1dLd9A",
  "key36": "4Xo6jj3HVdB8UQbDFoiGVjf2tuu33HtpdogFwtHNRTcM8Ce14MTSbsoEY7QynGiMKvd7gMopTbD6Rqeq2pbFAkxa",
  "key37": "mKbCASaL7gdCf6MAiWF3ooU27aHmn1vAkXTinXm8EPMWGU5KUYnnmmDK4Uux32FvR61zwHz5hmA79er7DFsdBua",
  "key38": "3FiCsHQSgFXNdB3MkzEF1oovyinAD8wcYRb4nCRNZSLGu5r7wUtujBZ2L5WuegR8U8CXiYqppKgVAiCHZV87Ci79",
  "key39": "4ZMJv5Jx82Tvb6iS17DxesAmYrFaYod7kxH7CU2PMauhi7TuQfd6XrFMipLzU9QngLm2j8yyq2bErwg9DoDNXSNp",
  "key40": "3BMvRCP4TBNoBkMDRnnaJ7Vq1AyT6czqwTQi9coNG8ybhPNKxboMhQ9vyFqoGqiXS6Cy2Uw2igXtucbtHubx5Web",
  "key41": "3dKq5xin8eMeW4gzTY1MfgTFZ2MwyjzQ8evX5KcUKrNuHYpszusbt1RgH7KRks7R9cGwCmTPUk1d7RnKmnTG1Kuh",
  "key42": "57BJcmfdvfAEb8FHTyVTKkC6NLKiLb67RZeBBvFgrCUrR1hqAMgLGTeCbFyrBJMzUiVhrfC5HY4cfcv55W6tdyQp",
  "key43": "4hvf1uaVJ97WYeQ9Ny115wn7JzBEsU54DJE1dscAZfmZRs7393qHe1jfWkDFpWsJYxo1TyUGAmddjy9VVJS3Qv7c"
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
