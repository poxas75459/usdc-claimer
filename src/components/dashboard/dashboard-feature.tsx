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
    "2qxAgRGmbA3TKFmEjtwAMeR6dQryFL77MTnnFBYGmx8DQfBCf6KMt29SAJxL31rjgNcKiTv4vufynRzqxHbwsMSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jXn1V6QWr9ZoruqS68dimCS8fgnMdhRJfFNEti6AikJAQ8WFt61Y3PSu8CgMhNuR6qxri4ZhuHPHAtk7263yUrf",
  "key1": "V41TUpdL7rREA7D8hxfU9mZVRUPCRApokeWLy81E7iZCm3ysvxctVBJTBQ2Ddb84Nd8PXCi5pvprStqzt1mwv8s",
  "key2": "2vEeMDBefJdVKE5qxPCzvqyzBUMKngftosHVkeagZhzJVU8HcKMR15cABt8RwRtHZEFozb5CHykc1J4N7aFv5V2w",
  "key3": "5ph83DQd3vc3w9iZezpWhsGcTWCU2dn6opwzJFjJKit3Pxh5gPMsCo4ZkEnjYRvZoQ2xiJ7oiT3k5h2t3LJ2XLin",
  "key4": "5SSk5EWqVX5xDKdMGecbNx5BaAd2W7gtrsHnxsAuMSn1m1tSsfHgrXk6WqWJGCVJGW1fs9radTkidaZ7zy2ruADT",
  "key5": "QtPJGg8Fuif6wx1SbfJrUvxuzw27goAcaEdgCeWcAjtP7cWByg7iYaRQ4pjZ1HooP2s77Q65y1jmahf2Aqoxj6s",
  "key6": "4Ezn2HmsAwTGByuZ6SYNFjA7Xihx3BLthhbfkxczvYr8v3YxX1RbTSgesMDVd1SbQeYfDCaTUeh3QeGGcPCP6Ubx",
  "key7": "4uHnQSgXnFeLkhQvKJV6mYeP9LSjPDf18N5MFKCKtqviUsqSHu84f6fX7dqhRer6nqawHFfr3w8JdD2Yjk24hi8x",
  "key8": "2HFwnh68dkksgLaFRvQWvTggQwJPKvwYVeU16Ttn3upWgzHes4krj6gSDi3cgdxu7SKUozv3yFE5QDUbuuRU4g8o",
  "key9": "4ALaCiSq8wVFvoHJ273zxnLUA9vDZev4dnbYbuZNnB2wdQzUvacyKtqvodA21xJ1GUBUMfu6rJpn9BKygcb5VvSN",
  "key10": "2MDEvMpsPLteMnDdPZXQ9M2w1wAmeuepikarFh9FBoGrkiB6eyuF4PKQJb8PYHPUFH1Nmqpv5JwNhWTBdpL7pcCu",
  "key11": "5Cz77LhvwcieJxCv2pJ5JrJS6Am6m6om9LXJp6Gvt1kLVAo98ZiKxgqsDYbGCCnShbTnULrJs9ubGakmLpDT3eH",
  "key12": "3aWL15s3dC6S8Cw7qqswBc3QNwc3z746vwbYK6Tu826Hj1vkuXG8aWRrrLTuUGqRNRCa5snAcouWQCrT1Vh2RMFd",
  "key13": "2uv227zCjCWAFpFvsrs4LB8n8V7kQL8MiKMwhtMqPyiMEZVoHyVSn5XR578JMk6uTDaKuCn4R4aEbBLT2kkCCWFu",
  "key14": "CJ5WzsgQmzjtKSCWZti9MtjZGh2JhU2f1sQ5KAbg52YHmxQgkDqTtjxYU1JoMEiib4famtHLfYNQdvf7dDuSTWQ",
  "key15": "439WKLp2uDxiJ6S6H9wsFHHPo6JjpnAuQkG4UvgnTrXSsrK2oyYeXDrd69Aaoq8C9LrRn5tcW7XonR9W5LT6qxKT",
  "key16": "n2ywjBhnRAAkoUcQdPQmaU6mAeYo4xCnWn13EEkuh3UjKR5yGPB84TVRyUbRGZ4wPfCgSYn32WbDr1HhXUB64Yh",
  "key17": "3Kk2fJZfCTMtF3GxLnmnjnrnVy1ao87j9Vc5hgMwNKoZXBvrt14i1iDc9RV6sB9xE8UG6HcLrQBxnPAMyHggaVLj",
  "key18": "CEEutYksEqm3WqBQTJxHwTZJppkiuc98sxeJzYJH6n9CpHhPRysbQwEYiYm7TUhCB6cHShL5rS5EHi2ohPrFikN",
  "key19": "4yRJXA2EUWNGL3WgdNyHU5NvgCzK2RhRPgL1e4QyeJAemsJhMtFeV2WdcspXi72A61cFJuCbYZ33e2DDyFU8mTTx",
  "key20": "4yQNtoG4n9LscVkd2naM1PiC6axSmTKEWrmx4JZx8AnCZFftLP3gpACRB3BVgKwedYqJkiEiUJnc66p2sfUiByKJ",
  "key21": "uwzeeuY3u8HaRYCHBvxs6SPrjYFezhDbPAXssTxzGGbwnC1PjjZMryVLchkc5HomkHtkpLbkjUTHzjwu3pSFoEs",
  "key22": "49UzJDywYccASicdq6gsydJ4eMCgxDKLqsNK1dXwmUwbehiWzHzu3NWJZkktgzKRJkmcozW4SzP9oQ75J5oxoFvf",
  "key23": "3ovJLvH3UQYVCXrKi5VYMZQG15HzAgWS3XcWaGTSuwYDui7CMx1dGVmabsc4yuL69AnhjJE246bUEBd4jgeFV2fZ",
  "key24": "52BMbYfBoprCvZkvA29kBNyUYGGmXuZu7UgipKPgLXDU2PTppnsD7DuR2YbdbmSX74PzP5Wc5b4RFi4kphgxT43X",
  "key25": "AuvokvTnQ1htp1CTBRxgLZL4xXTicXmmEMhsccGW838vhVWBRWXFsUHuQFZGezEqtMghNgkuM9kaWxAN1nxnptU",
  "key26": "3CCD9xdRBVjukvzrUqeib5AknwWzFcuUTiYwDK4tJ9tybYSCLYvAxFNBJ2PsqCxFR1PNm4bjhTSkXqytaPc1zQf2",
  "key27": "2yeSevsqWreUL5VXQYdnibhF4Z9sUN2zE7aidTj1HVtForggxhiAxPnThtPfm4jJ5SnjqbZQooSDZNVP3Uy9B2kc",
  "key28": "3MeEZvg7zcKfBR58qYS1ZvrPfzc73YnqWfrbSbheycFHUWtA9bXAUkeHjW1rV1pUKwFMVVp5z89pHC4hkRyU812E",
  "key29": "CKNNAeTkQTvg69iLeNCkvBAZXppQtHHTzRLZBjLp2HUyNDP9T51AwLCQNbg3BkALyk1o7nFcUJc92uyiYAFwPNi",
  "key30": "38yohfodKkkCVtihuDSp8cWNVrZ5Xh7EyQN3uhgjGqen3UheUtEmb9cHioXb7KSJmKdm57i8ktHAEpLaiyPK42pe",
  "key31": "3acAi7vK8VYnCZDZiCru4gH1RTqFueBsdNdAuNAA8byYdpgqt7czJTBQ1amiiGnPNe8DyRdwVNybxS8uDHhsznCs",
  "key32": "34ZXyifSeDijgCptzVamfBdjKzU8w63ubx9tWW4D1dR4XcQq1VYyYTxiEdfrGPmBuo3Ze2v1uBVauZaJxQ36NwMK",
  "key33": "uqSSkot1TeWbmAUUJtRyAHoLnAMULLTkWPUf4VAqFUQ7x2KX7ezLmyGdfS3kk63S3FQjeon4gXUm7VoEewcTemn",
  "key34": "3xwKQmarNtVQFCWDK3onLUBbYprMQF2w4EyPcsaneYKhvDcF2yW839JRHZjaDWqUFrgJDPTqAB8QLPANscPWgw2V",
  "key35": "XqULSrp5zHeDLpoT859s6XiFjQgnJtmhKfVd4j51qC3fvqCPPtjr4mFhCi5YuEquMK4V8MNUuo8hBxRoBtegWfd",
  "key36": "3on4svHYK3P759S3cYDJ5TqvGmehyV61HMVgWaAEeHHXqMKKBvzmo71CG9rqXGRonZvEha9bsDw2u4XaG5qYcFFe",
  "key37": "46hA67os52YmqZfNfLFi9T9nGbYrDECF3nRn1D5QaMsPYYaxuV6ngMUhUEJVUNAhcL7iLt1tCf8EKD4jM3ysLsSs",
  "key38": "2FMTbC8mrQwPFJLrW3WvG5p1MRZojbGA3yhRa62cxuvvDimXQsTYiiNHLprr5W4YjgfAZhhP74sfzpyihmpMr9Q3",
  "key39": "4LwQux7mW7K5GKZLtCvQcMaWTLRxx2V6KYTr4VF7Xbjo36BGvG9zQFZMwdkWabdC91imTpSdM4c8XByCjNHU12M6",
  "key40": "3p5koPHxxjNLKPprKAis9vBgm8RwsJuRUtWaiXQhkbEC3L5DSu84fSt5LXL3ETpY2LjTXt45u3AprXfRwkjrbKSx"
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
