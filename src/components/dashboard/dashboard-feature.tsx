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
    "3HScJNbxbuuX7VrTAQ6RsxezLNUfbxcRv5z9eQS24GkeZfXnbMLRUi2Py7EcayBcCJKGpYncUhLWn56hLN9b14aR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cHdfWTKFijKxBN3HD4RQnbHhLByY8qBqCNAG9gXnBjXntVEzZ4LQUs77VDLyqKSpM1YP2uiu9KPdbjmFBf98kL",
  "key1": "3eTM1KDeRCvyvWZD38ammJMLgTgfCzQS6t8PeXkjVtJEkf1TAYntmifKyyYkDbK3svZstRNrVNQYEL3xkhxkbV6o",
  "key2": "3CMY5gPw858bYsCzRpjbG15L6FE5mmhcTRyAtqeWaYDNCJcrMXZy1vTTC4MMVwvygD7ys5gUyraQaQCKpFrC7689",
  "key3": "4brNZj8koWSoGujXkTD6Tm5CRzQi1ULU15iotQAH23Lr51B2C5wnQ23vMKiFbQ57i5yVSaCxnjCW1CVrFyzTvyyx",
  "key4": "5uAiBZev6HbBuJZ4hnrb5UVrm5JS3XidneRs3n2RWf3gFg44XHnbGzpu64TiKJzLesFZYLys8ZPVws2X9wEvsAKy",
  "key5": "jaDz4WH7b8uJrH4eUWfFcHtDZuPHyZMgMkw5PB4HuDDYxdKhqYVicMGhizvKjLeXHBAJffouFjZQfEuPCZs6XFw",
  "key6": "Ag33fffuMMqYeCzfP6eo72gaoe2M6Jvivu2MuExf4LG4asERGnLzP1DcgB2azAUYVTX6M2ZGFtLezK58XLyadq9",
  "key7": "61a6MyCffVs9Wz9ew96iPCnN8XBnKo8T4QxGkp9GcMeAaw35cGVHgZ3LBVTtiY6Wzs3Fpkpn8utFvSmgNUZzFf9D",
  "key8": "qZaep7Q3juDNepkv7sw9jY6axcVWNAS2LTHwNnmrJN3iq8zXnyUUn8R54gszFKFdkPD4w6HZT2XtBab8mKRErBi",
  "key9": "5J2QzzDhnehckjbetFF8nsTczZ3dqP4NAhZu9NNokAPFttVR7JjpFViNcJuGp3CiStXcJ1VhoBo4QVDpDGoJjC9w",
  "key10": "34PXYwwCmiMQXARcnrNMUCvgBP1Vj2nwWsPVE2JLgwVg3C2Y9yTpQYmAiBFybtVYgbiVKE5LdJsH5uwaVt5QQfEy",
  "key11": "3qCVQ9ZCY3PtqWcx3rQtzjFPVVTt5BWnB8XjMEMbFLBYmt9PUY9Rhi1TCakoYddJqsH6x6HzRpU4jTmPNRfgX5gb",
  "key12": "4oKdQ61MkemGc1TRjMFDr1cHMnozFpvbD8ZAkE77pABuSPm9AEk9zLdnN4E2krgFEqAqjtfhgQ9k8Y83i67pYjpY",
  "key13": "3qqqzMPmrwzGf8NcU8WU7gwvmYneCTK6J4aNVwv5V7Hpn7CLDJcX7HpKHJQZ4QFKHzthrotrrn9TwK5KaYz7vXhd",
  "key14": "5ZFH25vaQa6b4kMKUKMfUWm8gxMM1XbJHr56tD7zBBCMU75BV5smxvrB8bkh5R5xjYHppSQv7w8m9JfjPTDMrYtk",
  "key15": "59RDJ8ERRrGQyv5DmwpQ7c1kkiKboKNX8GVrh9RSf2WoxWHhTUperci5VAjAsb7fwX63y7VS3tYUrtWJ8QHNT9qa",
  "key16": "sXL3gk1UCAVA6UUFBtzZ7UuYHd4X44LJRPs92ZdzzyPgEmbTUbSm17Gx5DzX55Wj4mF2Tik5WkXuaiXkbxyDfZs",
  "key17": "2KcRH86Zw2iFvzXhg4DgPWmAveRXx8pEVhusqcV93mYuQyLzAf6CFrNrXo6jVPjRmqqvpSigpzPJyBLQVks67Pv9",
  "key18": "Fex9m2GpEcE9cjvKR9JmGH7PMo3swqQuckv4ACqNrVmtirDnu6LMpebAT6AvUsoNXzmtUKngUwg51ciNx8G3evj",
  "key19": "4Sr4sq8DqDWy9reZRe8m2E7Ay3jzg3rgkfWcbHuCm6TErpEc4Z2HvSNB17sA2pcgheVqJKbDr6Ltp5rmAHefcji5",
  "key20": "5qUXmUaMchXmWV3zzqipJnqyUaHHJj6z91ahTRELmc8WLGw31bnjCP4Qq1psneG9qWf9cNWvcirsGxZ58MbPYGUE",
  "key21": "3SzUDNqaKMy1BDX5nNrG3TEqCfxpa4bLRw9JEkKsYkMQ1UCz4qHbxmmA1vZHnax6DnQ1PNZcJWFxR9fV7ocHLEBu",
  "key22": "5NUS4UsVWwcFJJHeyJU1zbJwtr91BJTYv87sd43HbruVSo4gJBYtmkZ7o88QLSm8JN2wbKDsVCGv94zNLwy1v6B6",
  "key23": "5R6wympwnHKBnZbLE34rci8ndYuncQrk5fZRvrkwTaX1QcwJs79UR8aWQB4ChAKkHqZKGA9tXHUvicFtNT5df5wP",
  "key24": "542Ztr5WxD8eGByJG9fhm3ewM5TJuJu4yoUWSYDKp61jycC6SdFf4ccBbmCAyC4THptexrXfCe9QqR1xzBn2b83b",
  "key25": "4Z3pTRD37SS2FhkAmN461wa7cZrTnG23xnygtHifg5h9X6F6hVtiWdmjHWJLw9NP1ZX7WaX6XT5zHc9kuEQ27xZ4",
  "key26": "3Wq6DYJeDmcYqERZGJtD7Fr45gwGQv4iCvWVPfQR4WoXkvLgUMcCAiYQnJG2Lf9CQr7DsbsHxZJyxrFrzehpnztX",
  "key27": "4f8mAP8yQjYRaP4k2XdA3DEW95bNXWHqcPZ2FmaqntE23Xadrc6J4DQFjkAVVLN6zJvKZWJCyJW8ByqKTbkMPQS2",
  "key28": "4Esoqv7m3MPPJP3GRL7URRvUH4Qf18UoCj6tbvHmwAhwyAUBFumAwVZ2C5shtLMZjKSCfe5tiDTMUwdmGQypDsWe",
  "key29": "5TxMAFu3XzL5xvh5A1Bh8ZFTxDFs9riz5yVyhEBmRsVnVFvJaEpoh7gt9sf3s7rK7X7uGsNdxfHo2Juxh7XKbUVg",
  "key30": "5DaBAYVexZki2SzmiNpe8T8SNrVnbwbXj6rwL68YawyBWoGzHje2h2Yg8VJhPRiWdjJrj1AgQkA1kPFndNN1sEDh",
  "key31": "2G6Su3AskcP6nuj66tnRoK2J4efNu2oasXzmJj8hA8Hax7Ssy7JQvkCWi83ResJQP6Jc3ebHAeSUdY9kjoLxT8Aa",
  "key32": "5HYmFuqukgPqCMTifvnSJzMUMcgRq4ghAXr7UZYRGy2tGaPpNDg84MiqEpouGKG4xD4SSnggPZtwtcUttXdhzyNX",
  "key33": "2NhtHyshiHzC2NDBLCBSW2bq1geJz1BgHPfRAWtMTK69kUERGRyYoXfSojpDnCNj43dadyUV3WZiWWyPZ8PJqUFt",
  "key34": "5wa8nJUSCXLZum3Nny5nyAiWG1zCLb2csKJEinxQh2SWQQSeZaHXusYhmRWx7vfn1qx3QuVSmdBte5Nn6bDahHRN",
  "key35": "4qvdF9gpLyyQ1r1sE3cuXQyK3iNFP1TuQXsUN5CvDWeqoVPHXfs3CJXz6HdcKC7qksCmHsVRcaLXjiMX6e7zYNGR",
  "key36": "2ohMk2B3vFcac8wDpmxUcLo3fawhTeQYvki2AxcVc4znjrKsXTC8Fbd73RWGzpK6icLJjfJe3VNeZbtVytP9TbLH",
  "key37": "3yTEfXHoRaUfNMJkA4MJKetknpV1o71FBAJa66j93QBsLTMr7vBZSVfSiMTJeGdd3ubbE57noCHmZP5mNQ8E7Zaj"
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
