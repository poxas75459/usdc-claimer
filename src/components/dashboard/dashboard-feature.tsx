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
    "3xVyzWkdgQrdqeocVotREi1TEvLyb9yg6gpq4aCkf39pZjHzYnUgVzv8TyeTJNwERmmXMDV71JVp7w78N2JRY7yc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eFByqhQ2bTfEzUAXgKnGZDruxjXfMPinaF5UgK7uJirWwY3eD8Ph18cLizsUJw5eNLT6UsHZ2P97CZP1pGF3gjq",
  "key1": "2BuUeH1jFqz4QtynD52bguQ6F6gxy5cwKHvM8KZt3LVY1Y62PcGpbD9mHnAT9qrMVKhdS3Y9uAkC2WRA523D1Y5y",
  "key2": "3TXZfVyy5hTwELyQTYzpexmKJxLoAPveyYfKyXsySSRoREUHzHZSMxWDKDf4CeA8wFiQA8jyaNzvw9hpkxan2fSy",
  "key3": "5eJ467mw3kfDvnAP8H9zz7AhgcwypEJs4MM8dMe6ReRMkbJcnYdG6SkfCgJz59AxaJwqdgxan3zVrbj3rvjoeUvE",
  "key4": "4XmMNdphkzAQXTjGkwVQyeE4HuUYbyumfrKkHW1jHJmHvXUcHJC2zhziHrG2x4mC7i8kbcUbcqshhB5HSqgudyNU",
  "key5": "ZkQEm1Zifc7ppyFcAQpUG6DrjRLedzCnpbtt2hjRKGZFihY1WeSXfnE4iKWPhg9SkELUNcATtq92w4b7yy67fX9",
  "key6": "2qr9khWjUgmJxrE35avVMRfAVNQHqsDWf93myHhha422rzXXZ43pB2Ebrv3fx1i7V9gctioaCxHuDsU6cF1RsC5B",
  "key7": "4Qz88Nv14BfF2d5MW7AujwXWzJGB9QkVfJv5hJPKLBBL8zyeFivUtsMX56f3jJUD7rqSBNHLCWjQakEtFsdT29Mz",
  "key8": "4tbpCEkjmMNyaCeNTvJ4aeRnNB2JJw9oc5Goo1n6VMyJRy445ZAec3ggzEMiHfX47GbYukovSwn26uyqZhRRdQEP",
  "key9": "3gRtJFzWdiPnuCrTtouAuQnWFi6F2Fxz1QwF6dcYyTTDdtFDaXNNYCsCpZNsrWScMbisSquZpjRCCeFqRdvGBUtr",
  "key10": "HYotHr2aZVVhWakTHVAMKnoYrenyP4VFm8iEMyvG4qEP7equoNpTAj4fu2KMRdctKxnCBZ6x7A7ByukvDz3XoEg",
  "key11": "3w3fQgnVvNt5X53rVXU65s3k4zHdhgYqGEPmgrDJUTFFeRqAkFqTbBsSySnX4CPYTpMkjKF6E1RXC8snHSSt9mbV",
  "key12": "nvqWmpacqzLsdeLZ8LBwUMkkTWrzRdodPiu6i13U5SQ8kVdyyXe5WJXHi7oBVvQA17DLuPqUGPyJVK3gFWcKkzD",
  "key13": "gMFmYaPdcHieRCqGVJebdnkAu8UtF6CK4NqVy8Aj18cGJLYSR78mkimSN5FpEbLpYKsM4oi78nsEHSyV3ax3esT",
  "key14": "4T3EkkshvT56dAj1KDYQi1RwAdFnUAcVkqoDBRK8rFLrPNkVMA2Yz5Feyh1WkunhTF4LubdzdLD5PcxRkYkaeENx",
  "key15": "5sjZ8UhyjoK4Zeyh3PbG7KVWPc7iiTQgwnMtgjm23xkCDwpdgDLfaDLUziArLt5GRSy1hXZu5YjGyWmVpZPHNKv7",
  "key16": "uRqGK5NqVoSzDSUMN84grvCCVYYmZPxcXx5yo7pqw9wdRYKEFCAPXnGtUajKW1ZKxQDgxoCAEtyQgyYF8eajyxb",
  "key17": "5V3a3bmi4V9Loxtqs1PQLHSMmm7zHkNxePSqovAKjmQbtBE84brKccr4xNQ4mwWx1E4WQQYqsgEUxBoCUbtVDC4x",
  "key18": "3x13myTpVk7drbUf9NdxHEiXFwR1ERDqrqi7yAPytbPxcMZ7R47dNseswhjQnKbQkwyu8q1LBMfnYS9oqGautske",
  "key19": "4ZhmmcQui8Wof8G6df8MCC7mg3YG2AGzKosuf4nyEWpjxg8FAdtGcgT1smuidnB67b6NtshPZvY9JrXTw6gLV3tR",
  "key20": "MZG9Bo1DZ3R37ZNZDwsycVACuYJS2YFAwsdmqksxDm1DYJapgfTiDPM8cgGKrWunxNHWnAiwmiS7CMdiUkMAq8n",
  "key21": "22CmpRWVTe3YRDCzqyr34795iK1JXNFemY45deUbjWQVvm1XCfuV96ZLd3W3XgsEXUSBA5u4CT5ndcPQJB62woXW",
  "key22": "53fjyb4LWFDoghYfkN4dWb1uEQbgBbMjd95cBZueZAAQyAgnRzFRY7aWavHaKpArnQKFQhurSWWb8gUDmSR9Lnyj",
  "key23": "5S4Uh4mswbhfvsG7cNfE8qCfKo6p48qhuKcJ6ifYeAyxje5RcgPEW67ZLdt56K2y8xBuDrUDbeM3yX2SedEsqGA2",
  "key24": "3jU7F4q4FiD4j4oFunY46XnVsL6pWhXFuFwCiFqscWJsAVeRu6HKwYxwPzyBf9mFsy48gGTMNXY3cTBU4xefWQGc",
  "key25": "5xa1WrfUZTAV8hTvTseiQUP3v9DZ2bYXyA932gWKsHKz7H4mLUX4QGCorcgRGTdgR6GuoWXPEizGAzWZ9A3mWyZo",
  "key26": "43NTzRJNWesDY7SrWZHsfzwj4YwjxTQJcLpxVz8TPhYrQVcwoNhzPWMZfP1zMuxAc7DjC9XcCAdZ8iLza6GwSFmF",
  "key27": "2v1nPRgXiPGYT6BqjLvBpAnPfrDHLeqhGKj1t3wHP53jKcVeP7NJgWUDozsREDaDw4LrXTxM7rRjvZ2TcBvxgFK",
  "key28": "4hBQE2Wjpt77dpQNpS7uoB2TLpvu3sN8B12cx77upNLFeW7wM3yV638oF6jNpmuTdYR1t8BBCBQcizFYHkSXukXN",
  "key29": "2wRA2M5j9gTqJ5AhLEYd9Q5FFdY5v9KdxWVgy1v9jB72YqKQx8hqUEcUyCeHb6dRJ7hsgdgvKKZrnre9d9LJYJ2n",
  "key30": "5sLD3oTW22fec7iCb3F1vQrtccPPxfKS78H24TU2ibqwizSA57dLcRCbNCbPUiaAKF929C3GA2rHWS1qpoyyv8BQ",
  "key31": "4Uw9xRudy7UDkwpsq67WHgz95hLzdNCgdrfzX7mDSbV4BfijF1HNxDLvJKUDcdaUT3JcnUw9G1rfDPdifdw51sKr",
  "key32": "4iMv6FAkSpMZpLnoxZm6qnqyLmHbiRpjJfpCkxjYgwW6TYPrETSHMzNokF1TaiMJ4oroK272SfS8spG8Nufpmn33",
  "key33": "41aqy5z3xP43AWZwDtmxkPxPvBqHnXKKi86PY4t4J3fD8UN8N5qaAPpn1NJi2Wt39ubkdJJ9zbHaqHi6VgttZXtL",
  "key34": "5skFNmkDAoEVeCQPa4sppaW2udLoU7cJSKdLSAxtzSBiWwuyZ8YkvGsD5QGjogi4tqMhj6F8t8wCi7uzTrmJFWRu",
  "key35": "5M4LuEdCHk3zzcvEf9FUB1kfKTjsDJfazszAj4pjXeCWfaxKm1vH7miNK9yNyG72KV2YGdVAdMcWKWsjHdmQSZhW",
  "key36": "3oPbNu1L91QbiAWC9HQV3MxaiQeEGGTX7BmU89H6S7xdgXPH83fVoJmezLpEiQXgc1BkzZrfWvLmm8rdxXe3coxg",
  "key37": "5pNZj4XeEu5cyHCSUv8bbQuEQ8bytecozk8U2rAKNA2FBhewKaRH78vsdwyNhtYskKt28xRCQAPzj1YSzgn8RL9F",
  "key38": "ydGpPfrjwwMdhLdPM7c3L3in8vD7LncdCCj32KRAKGvLpmnp9WCPAywfQ46kaeqcDygWeBQQgQc98c5toQ1MWSS",
  "key39": "5vjq9Pqa7bbr6JXd2SeAUhxpzuDezbaJ9HDCd1g8VFQ3o5FT8CX4gNsxy2D41vSydW6koG1mrNnfrdjxuVevEEoC",
  "key40": "u9twiSBs9HhnANqq2Vr5XmC2wgeVUaezupXq9hBbXCBAZio5GnuLjzs8uoQhaQKJrS1hvhLqCZE18rpDTUp1gfh",
  "key41": "2nFsn7VTt1Zt1hrLUspbCdLSGGRSw6wve8az4PE1rvZBr8gi1gaRACThXUKWSuKXwTbhqxD1ZqX5zHVfY6Lax3Fw",
  "key42": "ETYZkQtZTE9FHLQGWxKM9CmaRFiBJPwyt7BK3dWkaYCK5MMyRyxizuCvz12WC5pG3KquPK4kxJcJijvUCqAK9Va",
  "key43": "57qaaHLY8JLi2fvLog2WvyAkN2nqRsFXfkxbVwX7SnnKR6ZK24uRWSN5oog2QdUbAJMVPFQ2KUPHJPGZz6RQQJxe",
  "key44": "2dRMrA8LGywwrGgtrAeR1MkjnE5K9rw6aF3RAhy6umsHU2jVQRch1pR1ewd7BzSgaQhmqN7rf4zPDVQRxFyDfE4q",
  "key45": "5RnDxTscEJ1HAKkEFTKkKwqf8YE9HZV8Rjp8y6V2FAbqSPZwoz7wK2mAzE4vuMWA6FvFyZo8ANLT6tGPL69TYxW5",
  "key46": "3mTPJXeFU1as93sevsLEDuftdU3jEKXyBVGDNE6nW1AtdPurXiE1m5GaiDmr1i57AmwFrYt7W3PsBqKPWbgihsZz",
  "key47": "48XvkynqEWpLRG36yHxsJxCLehJZ31z2jBNYtJkup7VbwwMcyVCzVJGvGT3ucGGWYNUMPoUmv3ifxeUymV5cwwc1",
  "key48": "5r4G3ZqYZuuXq2RMjTr3T8P9h9wJgQARf3CiTSGQv5hPmQVnG2DRUon1sgTytacuoJZto832ZqCKmMXBUGpQT3jF",
  "key49": "3FMcxUKy2JVB95P58hJvgmiXFbWbTyBonytqiJGTbeuR3Pkxi47yAh1Dq38cQm7VMuq4jFb2pHnBrBttbF9P5Dia"
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
