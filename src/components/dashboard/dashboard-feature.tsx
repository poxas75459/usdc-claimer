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
    "3v19Uvz8kor2DfAToQR6VAC9HeBrfRCN9qWB16KJ2XS7HACuRbxagS4rN52su1UXnTjMbef7rbrn3o29YKNSWw7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xWkYo78STjGnn6B2CcQjDRrSdTxrQu9DAzf4rhMBD3f61pizz55swUXdHAzEQN6Rgdqi1BBrUJVqFYZxM4S8sqi",
  "key1": "2nuLA4xfVq4DMiwqkkTcDrZrusAMXZBBDGerUYJ149Jkg9vFjmVEf8MvqhBaZtgVi9SEck8ZiEn3ipvk3xmffM3C",
  "key2": "252pQaKZuJRss9f7mMdjUi19S7LVNKViafWkDSHz5WNN88WYmK3C1LWvR4t8fHH2qvop6QDaXA9ZSJP3firGLCe2",
  "key3": "qy5dCPgegpeGW8M8r9jJamdNK1XNjVfpgWGYUxmtHQMayWpZGvs4DNTAyKqzACJo5yGxvP2TaiHcvck6K5JkYfo",
  "key4": "Vfywub7BTNxwrvCBXZp1hEdQHdytAxHHwvkPs4RYBUPJUeSYeBiK2XziwiweoTCn1FwcKY5HBASoz27RjVk9UXt",
  "key5": "3ZxxkCXiVQoHSKMUWvtcHDC3bgFrzeMFJbQQwVcagSJvjCrqFtcUSA3D2eBCS7vzi31eRVxbMLzEwoWnKoqx2skE",
  "key6": "2yBW2GbbsRPip6N5WiwdbUvRRsgJpT1WLNQRFSyoiZcc13mCizVtUUnRjjqqw7pST1xe8GpwtMEovQB664f4fo4n",
  "key7": "4DV4Tkxu4YDqHTNFXTo2oph1cPK6HKxDXLap3yVzzx4SRqYoYjm5eSAB8N14fD8SPrS7uD1gE95LZK7Fy5yWvQxw",
  "key8": "4p8QgcpCzkYpvkb4nbzkPBS3ermyNnswjx6M7mn9pXRtpMzF6tELBy61FFMA9HzPverwJV65i5badUTBFsp6H48v",
  "key9": "384PqoCzkDNh2GGyESA8aarupg2ZHuLA77LZUtbtBPggjZmi88J4QYaQXdeeMLUjnCrBTDi24CSZ8R6twoeFiWxS",
  "key10": "4PCGMxWHBQBqGrXTsrC8go6nKpJopFeKmkaxvEgW71t551QzJms9Xa8yYZJk9Q4bvduZpoSzLdVMaAhnC7225h8w",
  "key11": "2Yz58nEq1Ej17EXzp2jQNp2khs7PdJoyKVQAPKzZReXajXpq5HLT5GB3ABapp2nWKA7vWF4kyceGdWAD9yAcGGsj",
  "key12": "2tFcnaRaCLDtDCLVwQUPeQoPz7UCtopfW55aszrVng62ohwCh82rVSbRUcAAepguxC3xZiPG4EwVBt1q1nKRBSGd",
  "key13": "5fVjLPFhAwR3ePea5xvhi4mkuTxWKhRacxQVmr37Z4zN6Cjq8wKUAt656sAkVYQbMshXYBnZ52fNPbgb2X34JENR",
  "key14": "5T4hPpw9ShABucBoYqZ6LqbJN83NRQt1yvix5kuRoPrZSng4S6sRLoennE8UfeSjHTFfQVYRaB4sr583jMdCFUJD",
  "key15": "4Wb9su2Gdz2WGChtppRUwZuEGaaWYPrLHvYWPwyEeUrakwXNUUiSUugjgwpNqRS74mrRrAkFv7ZSgJAZeEBQNdt6",
  "key16": "2WGzJKdf8HyBHocd4mK7aa9Piawc4K5pRo1MwQrm12yJYhkucAxr74zrMoCCyQcyzMRns2yB3oQ2WHyFTKHMQWjx",
  "key17": "2G6T7ndT6HeJuJAyQyb3CQjrGJB8uUon15SxGcxCbNLrZnximMNR4a6nXSkrP7wVL9zLyMUHLKqzfPq32teFuWHK",
  "key18": "5Vh191VNcXJFA4hRgnTEmBfjP1KtqUAw4jhqLZVVAieZddSo8PZ5NUor657BcZz2r5ECQtAYjexW55mtCDMPx2Kh",
  "key19": "3gXhbL634iv8cMqkTnVaSjfPDg1WyHrJjA1C17idAwzLns9PosCoLsw2Cm8metVN8wPKmzsZeQHLKYWYjtV2aMys",
  "key20": "4Hn6Jd2XAepgckDtkHRyCGSFcwo5AeF9TjDuTC4hrwWGR6BLYBAuTFhQzQc3vqxDb8CUprc1s8KdPct2m6pEg6Zm",
  "key21": "D1GPXtyKAjLnigfrdwFV9R9QWDBUZwdbE7UYGgAgDV2MeFMvCTDPtmDWmXmdcCDBePjK5ocUuWipDe7Uaw13wsf",
  "key22": "HQTM3WDyPzQK4MyzLyRSFNNxynmQRb5pgPCiFoMWFvvzeZSbWY3ueDnxHyXXYM9AgM2Fus8ZgQb8JGTPuh2kexv",
  "key23": "5HvD2Cyys5c1xDuq75MBWpobGiSVavF7JwpUD9NG4eNf4bkVjLGrmnCrUYN9T2dn64pXUNNPV2nncCo7nH7QWiwj",
  "key24": "23adzPz2TNujDspKd2WyW5DLsy8TPEovUmTDFExC3GTv5ivTLQWZmAUHpdAsTwjeFoH8L81h3gkcbUzJGtnrTRME",
  "key25": "3M9q5G2ZbrBEkXd1ypiFnA7Q4xupPWisSkXgAGo8U5xyDfzY25LVr4GcKvkSEQstKjMkmkJ4xFda93gt1yaistqV",
  "key26": "2yL6VuHRY1Sfrx6UHBV2PHz5dv3C3Tf2Q9MtZg7G3oJgBW8T6Y1HiwPnfgst7o2wdzTjec3BsUJcWZUCFSoYiX1s",
  "key27": "GSnbiBuxJ4k87PM22hjYQ71vGPxDb6VQPxPjKe74vcK4pS1eg2iu6dAu3RrfLaAbth5bafxudVZLNM1Arbaocpn",
  "key28": "3AggVRMk9q9ng3xyZxL3as1ouaL33tdrjaUz441k2rpQaC5YrV4fsXRSA9Rts9dkMCuDYyPs65dhKL6FPbeCD75K",
  "key29": "2ujhiqLvBQgALzWmLMuuZpG7w61JxwrdsVRcBRRZ4whL5YP7m33pV3J5Pz6darvG2Ee4QSz1wWRUyZrSHRPHtBuU",
  "key30": "5er3NTxtACcdi7cZ7MWbnxos37VGSa7dtiNCmRijVZd3PCVzoeCmqa62Lc3g4D7ymopvBadLABoDAsiMzyYxVSpB",
  "key31": "49LgB9eUVzjpkkcjAfctHeKrCJHzfpCwLNtHVMaQ9to6cMtuxhvsUxhMByWGHiZWpx4cyLyqwuMkfcBQEzWTub7P",
  "key32": "5MdaiE1W4V8rP7XDczJ5NVqpHwomdTSSGyMh96FMNnKFDr7y2YPscmyMkSy8c27Ydruryyex3prr27oF7TxGKtq6",
  "key33": "2zjSbwym7pLw69XLDKheBjZr6826Kzki48MMcCuE6y9Kd91VR78G43rqQeErtFxrRLqYojLNwGEbv9G1KbvX5NuC",
  "key34": "4PXX1bkHw1eSPe2iaiiof8gmPCLBHvK51CiAdMkz8xVaS7e6t7FjMjBrkAQ5LW7bNjAPFGNksjrK1UQN6UUkkUe1",
  "key35": "bV6cUMaoDpsKPtUQAU42Wq53L518zETqDS4Bmd2pBCkqK5WM5iysssJxn2sEW8b138vuq2QXCTDHTi6Xr7fQTTY",
  "key36": "2ErWYRDH5gyh85cNXFff7BdZ464dAFjAhLqtPWT3DhfzabupNUZSYzDi2qYbUXwmzfCst13Bahpvyg6H4zMwSbwZ",
  "key37": "5NazvMYEgkGN1k9ZXuf85pU1FeJZM4Q3qgfHP17bgJPnAfjdxADymmqUKYAeBJV9pQrFYCMnmbRzEN73vAAuFWMy",
  "key38": "4XmgzjMPJCpCo69e4LUN3PKftyR9jT95MmCrNJQot8fJB2j7e86jGktWo7ZzMJNVHr9UBZrqGnbMJHDuQkz3EDwa",
  "key39": "3uu9dPfrj8b36dFyN2JfFGYZ7MrL2SmMBVyA9tvHYPt5iavpHjwai9sK7ERoxKCyPEMHTVYKH6wDCmWcaCt4iX1E",
  "key40": "45DbqY2tEkkQNXKwGrbCYNoDjB8CG2KUCUdPafMc8rJ7PZB2pV8QZnYSAaZ5ToRXuxfijFXukbyR7ehLGNx9HYkG",
  "key41": "B7uvzkW2fgx2gQszBHJJ2D7Cs1MieXc1XSZD1HGYV33sW3Qptbopjd7s85fTGT73BmF3xiqG7H1XuZXrWRux6pz",
  "key42": "5UsJpM6quQoGYNnwbzspfa71u3bspD1Ji6fzW1hqoJEWnNbaHFth81hWrVUzCrfwJpRJxgRxiR4CuBk8nAAM7pES",
  "key43": "2V6L67xLokvh6qH6CZKiYEpnMpknFaBj8kSEHL3aRba7e55BknrYEVRhJw3sVs9BC94voxV1Lmr5xV3zKXg3kpV1",
  "key44": "5JL8uupsi5xjLK7419qaSMPBRohXKSddewppDNSTCvkFaXzuo19D8wQmZDX4QkKAdVHUuSKtgcg5BL3J17she9ts",
  "key45": "5am2yqiBnjwxcQd9Tp947KRAXqyrYSswZYMV98969TSW9eRvMZxbCak75xC1i17xcFASL9CLDaHqd9TVRp2wX77i",
  "key46": "5EgEZEEg6BgvpEfEUanbcJ3eAwTu42B8TXPFpNEABnJ7DaGyorzs5rEcM2FckJwhu7Wju7MxCZHhgugDiDBDcG1U",
  "key47": "3gT2NqkSDbgDmJ43jQ8qPhF2tVwRwFcC1pZFjyVspKU5GBzbSNgQyQaLx85zLhSK7A3p7QQYHb6k1hTxbEGD91k4",
  "key48": "3JKK5BHgAvTJ5bwY5fW8YDc8eysDa6KVkumjHrivfSo44sX2oxM8MdPQ5owz86AoLQiZ8dtXokosiT1xoDZwd7VT"
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
