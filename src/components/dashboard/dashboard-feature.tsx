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
    "2W58nMoKX7t6X3AtT6UjMyYzDmvEeAv8F5HJPR3LV1jSoPr4AYucAVgRveRiJ9AwK7Jx8C8r1kJ1Z5E3dZ7HbK49"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58W3uwVzgV97DJswg3mchx99h4HLS4imC3tNiBaX8R2VXQfV39m36yZDLdHoER5XZ9iztpDxqoGUDZxaqu8mj6hE",
  "key1": "2qX3Yb8y6kAHTMw21dSexE5ntrJBN8ZxAShuTjiHj1MrGEs8FXuRQP1cNMqb4QFSW7B3jabpDiNaWackBoShQuwb",
  "key2": "4QT6rpfkM9oiLqrVa5MTGSk2BtrMsHSz2Y7iJYeAZhvsiDSmfEHxQ3icSDWT43cptTnWEhnv1JBQMQS7FxBEVF92",
  "key3": "2WQzukVBiKAsobFbfhFxXpKBCZGikvHvGcXC35JA6DKzdas7ZM4Tg8dV1cCPKrdqoRU6CZ1HpT2fgnpaBLbwT3ZK",
  "key4": "C6ZEXDuY9XZjAwJ755oGw15Fp3Xq28xPc7wG9uE6RGcG6S7FWeg1KoSPnPy35QzQxwtDkwyEE4XZ5ukPm6xjoPM",
  "key5": "4vX5fNYuix3tzsnzr75Zego8Vyr1NhpvWtKBxqe18RTuogscFg1Ght1CsmS7j4xNnDbvdjfyJ1k2XETF88t4Q25t",
  "key6": "377VsE6gFiXU92oMsmxxpW5LAXaatTLUz8Wm3mkatTov4S58jYJNjcozBzwBE49ZtUvzyskv9essR3GzTBWkU8qW",
  "key7": "43hijLWguxmBfmMMo86ehnJR2zL258Yknf9kk6ymdQQKosEzhGvotKwU2ECGCqoZZBUpdS3GFnkB9qTHRnBn491u",
  "key8": "3QwnQdmXBA9ERgJXsiTgd7LGCf2gP7frXxpApD2zcD8yxLMitGMG9x6JTUK9eoY4MXVPe3twHfL6K8nTqwgkZ1s4",
  "key9": "zenFtZXrdgV6z8ky5jHdd2oisAeVx5PBATJtKbUhoYNAG6NEjdX4id3S8NqB5xBKPYR8hpfp3Yfh9iaVooUbidk",
  "key10": "2yPjtHrXHqWkuSrBkpcwKfai7A9UEJQvJkKVcqZwthdeyGRsGQ9dG4Ce9pxEkTCfvhjNm5VV3FhyvL54cXK76yFn",
  "key11": "673UP6nMMRomiz5NJQjp4A4PLufeSbkvehwyHWBAgGV7nZXokjADS8vjHXejUX2Tur7fWL7siyAYMhPyYpYZTFbZ",
  "key12": "5hC6nYoSgYwrFzdjnL37HWhsLwFSCDE9byA2MyGZT7yMhs3wPJEYXJLiEa32CmMg2hTPY2vkoxRheEWyQPgSCidL",
  "key13": "3KNdrT2hNKmueqyFUf8WeG5wmiicysMCsAfT4RXDXfwX9wkEtwB5U8cFG582K9UvrLRB7z4Uk9ZAwMs5Wn8iGbuY",
  "key14": "48jni5ZEAV7cXa6CWMr5T7J3NFbNrMHjVuuaBysrNLqpdbaK92xrdkW6VVzJvBDYPZDRCNVqUgWKA5kiuT95wQy1",
  "key15": "5ThYkUnvLQ5mRhpJxRkTSmzeaG9eNS99Dv23VL9y1JVvqNXtB3AB7bTQGfwmezKFBCms46qxNxpgUfh5JucoXnCp",
  "key16": "3TXe2aCCnTuQ1NPHstgTomEFEDX8QqdfKh5J4JpPwuGk1UTebo5gJqseQ5ju8Sgs6QXMbBkDuoUtofpeYGTrkEnE",
  "key17": "2agWnQqakBP6tx5UuWht7oVkwTeZeEcBbjC5371jNcC8wSxP6NAmMkXQShq2MeM5Kb3w5mL9EQwdDewWAScpAqf3",
  "key18": "3JNTEijCqUg3343bNmxidVUaTh3CiutT4oLWeceHoRKRnsecvotd37WjyF1sHWd2WY4A3aW7yEXshLAwHMY6Swbh",
  "key19": "k1Utz6Wz5VvYJnGahYrMZdkzcBZHQpXR6GeSm8LUyYesEC6AyKW6qEqV4TERoBDVneiWRMar2o7e6qYaoaNPbMV",
  "key20": "5YMwiWDEu4WEMEQjEJx2GN1kfFMSdkjMSNqfbEiBaRneK8xP9BfksUAii7jHzu4FfgZ5mxvU6dhtXTcEayzsiNhH",
  "key21": "3184ss1opTHSE47QnrxPQTzypGciqgCh8nNraoJH8PkV4Qb1UtjfX7YRxxA27Hc3piSSyk9u6nnAzr3APNon4L9T",
  "key22": "5tiMqTvjQVqU22JZD5ANGeWGfSncrZ8KVZYx2t9CSkkR8uX8jePhnXVa18ZM56DX2huCd78TvkdqyRf9pyzzs8aC",
  "key23": "3qGJKX61aj6xeXx1EmHBnAkESELSrEJPf1UmnxNiFhS87P7qNFji7k5iicaXeR4xyE6dmYjHSqJVHWW61yd4Me3Y",
  "key24": "Shn4deXxBLXXB47qJAx7R3x9EwtmfDd8Tjh3z5hZ2eWrYirbTvcLRmZzwGUgL9UedAZCR12MsBY3sKB5DBMxauX",
  "key25": "3DmWHZVk5FTYiKAxs4Cfyvqki8ymJsfJRPZqeLdnenGsYxTvGFkxZiojeh8S8KM6466cenkrAMVugEgKDAxv6mdw",
  "key26": "2ap5iBJAHaF174f4a9RezRFVU2VNKeEE5BJBxVc1UtAQmBF6PXjrdmnXcSLxoNNBfv85oHRD2kG4RLU3EKB2Fztp",
  "key27": "2YiFKsLvL8h18Qm4CvxyywLC4BCzvU3Nk5EKt39VmLdWh4a8Ddt3f6vT6PYKKdiqKrJs1dN4QaovmaihA72PiKJv",
  "key28": "2xHh4a1ZD8MpcEQH6uDi8MDLJ5WAxJAWKHqqtMaarChzAEjQaMxFkUiw1jVNTXvBJuGmrP3Psufq75FsbkkrmARh",
  "key29": "2fqPZg5GbzGtKcnh3y1TUcy2uxacYBZq8bc4Zy5qN1omARirx3Was1WTYs7fKkrq3bJGCi3UiizD1HUbHfBo2zre",
  "key30": "3KKsMMvNcozHhmysWfQHGAzAfC4rWqFPhBYLHH9Mu4m8NBAD3RnzdciH1AJJNsMKZsgLQKNHtAqL2vyz2fyKWQr2",
  "key31": "T6eLphyTeDh8xvLLBLzjBskppKo7uq98ovUFQVyAm7hnPHNaxU3EDY3Swra5c6jEW1dkaDLCTird3o2tLYRZEPJ",
  "key32": "5jxx8XAkocZi7Me1J5R8KwXmFDViRBAPVdDmr5GcPooBwj28ee9dzpQnGWUCYrNNHAD3kFbZ8tJBRY4iEC8Biv2B",
  "key33": "EUtBtfFpGE2fRaNRykxU7tXx9Y7KFCwvSKEZfJsdZLokEDhVGs8D4PQmHRA3CcTDMtA5xpudRi7uP8D7cYt7TDA",
  "key34": "3sXbMNeN9KNiWqX433z4H9nrW9NXND5PKNSRNAxrmudHdNi9temKVCuec9tjAsADPmLXbccPd2xKXywgMaWsKeAT",
  "key35": "49xdELkjMtD2ZVzTt3LgVaCFK16ocKsiKuw9XuBKDjDpMs6jeQ7HPoCCGWk7JuD4CzapueFc9T6VS2LtpHbnFK4y",
  "key36": "3Rz2SxuxbSbWhJwDwmvJJDQ7B4FofG8gngPBeyC4esGRLxyPnEmrSx6XGNWweFWr9VvwoDY8snU38DM8zGLaqADz",
  "key37": "2FrNRCDESjnUMRiEUT2hqbfqDZxoPKe7JeKZwgUo9eMvhx32pTYGaykWSMBfGzFxXcKAs7ysE4F3AhMSaCStvyiN",
  "key38": "3pxn9ZijBSACyMqywF351TqXbRrNhPGvcR32B1JiUdDuhEK67hTTTsH6q82Ceic8ZjSior7HBy4dtD5woKzCN7tw",
  "key39": "2Qg2oVAPZS8un9eosCjB1qpbti4coKFmhosV6cuAL8omSqRdHTGMq3HVU3QrNBfyk8g7M2ePGC7nasrLzTfa9fqe",
  "key40": "5wDcB841wEW6n7ZpuD1WZFTNnzjMuw9tv1shSxRxEjVkd3ywB2Dv5umi3sDT4Q2a7Zkvk8Z7ZzuaRNbDAyajrbHs",
  "key41": "2YdHjQ7UubRQ9zJKrtE77g632u1PprhKKvGonDpNMyH8PZ61rWEwLEmLF98qYpZi1xW9UzxNb4jG3piuEL3NW4Mv",
  "key42": "vSQ6jY8ky8AH1HdV3xPfGrCKq48eBziJ7Fon4K2gD5McStN8JkK6yNGNeu6ihxQeRpRrkXvDbScTjHvgKZy58bS",
  "key43": "5j1Hb22scWUV1jpZp5yaqAmmVcfYJ4gkwYbdaZjQqhKVApC7XYLnsGxDQuaAe5Mt9rTqSpXzzrmrCsuDpcTrpVzQ"
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
