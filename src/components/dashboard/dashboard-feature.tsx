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
    "AdGxHKpJWHZjDipTkW4FRpmDzVbVR8VtZAnxBaAW2UyL7hUg3BwtqWuK3JK5j3Nj6684sbJvKsmcF8C3CHdCnfC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28pUHu7DUTuxeacpuxyBmNJRKiPA42iyghRTMFNjLLuDM2pvtdKB6MUk45LtnHuWUejKLwtmQdzSH31GEn88aD2F",
  "key1": "42d9oUdgtkxiQ9DuYAXQ3i8ZPyeqV3foxLzj2mSXDjva4WzWxSuvUAuYtJ8PjwkPctAUJHGdkyb337DdVZqhrT9S",
  "key2": "4zwaoR511kkhaAKQQdFhJQ6wG8bi6N2cw6tSyqhjBrrYUaLAakEcVH7ZZfPizVTw1Ze1vUGi7mZADKSe5UDfB5gM",
  "key3": "sqwXNBwrB9eiuAj6eTauwPwge6Ye3BPjDzLdtkKK7aKCLToiafoeSHAfHdKk3Yt4wJHdAWSXWbH6jB5DP8oj3p1",
  "key4": "5yifPNSx6vo1XkkiNT2NnWvVKTnGKoJfheAuuroJciWfUvinxYhJpZRWMhcFxgidA75gDogj67VhfCEpk6FSuXp7",
  "key5": "3uRC52VKLRGqQATNj8vE6MLqjWEtgJKvNU4Gt6jCw3QN42WgPTEcEu1wry35A76GhNwaCxhu78jdqXumg6Dorne8",
  "key6": "4mPgBg5yfWpQ7yh4cTJRUpip5Zu32CHvMURpMbyweCzpS1Zf8ucmMHSEr8XZ2eTV5Eu9V7gYqvyiez7TR6Xo4azx",
  "key7": "DUXaVxzoZWg1Rf4eSF5BM1BajUFjY9HpV1MXDX3WNAFT7fJGbJAavVorHN4sfbPM1XfMSB6rFybHJTU7qYHVjnB",
  "key8": "4errkcLjf9gQX6inNeFtnoQyCnQc7pKieXa2JHP6ooyer1M5BxRGGbBTtC9UYyLBoCAioPgyKa7r4rW6Ms58ZM5Z",
  "key9": "3hFjtUx5e5NmrfQmmqo6RKbmPj6Jv6HecTXeT2BqxTj7dGuvGnHtBmsjwvc2t2fPUHTQHjt5osgYMvNKvEdUxdLQ",
  "key10": "3qCtQ74AYxPmQgm7VoApP7ka7ppfG39jhSw1KG2QXtch7sayB16d2r3BkjaxGQbTfqw1KgE76Bo9HS3KqCjVkTv7",
  "key11": "3RZtoGgrtXkbzDDdrFipaqw9vZAc584DTMFY6T9hjsQyDMQkizsX493jSduLJkkLmeYqYJXoo5bhnjRqtDS8bRNK",
  "key12": "5i43XJSfJY7PFSKxpEsQ47ZyqA5YNo9hMZRr2QGu3yVktWFNh3fPr66rXVi7ZYtbXtrTh7RcYPmtKKKHj4uymq4s",
  "key13": "4RenHnBRjZ6bgeCvK72iLysNAE1ueCkEb77oFh6ikTJBPdbdUA2QJ5swjZ1xNyuy2CnQZ9AoswnE9JJ8gxsC1nKw",
  "key14": "McZDfoyie9gnzNr3JPL75wGcq6n3AkSQKSeyj8v66Ws91dPuQfxwLvHm3eRTZU4crjLY8b5cUfV7XMCcPAtJ5mE",
  "key15": "43Z7wGjNd1PZDqukFEz83BLy54nx3hBEBqPmfJgyE8SknuAN8W2XfnbVNbxoh5Sgg421Ttojj9bhbycZkCLEdyPH",
  "key16": "2WCerVG9d76GZaJVMDdVTDpVEbckEfiwgMiGsjUgZHDVo1Yjy9hgGybo3KmtSGwsdx94i9JsmQnSWb423ZfgZGeu",
  "key17": "4PrgYhzmU4UWPxcFsBoG4i5ssc4FqxKC1r6mjAbzuCAA395sbWhS5jrbDbgEY2JW1P6AEX3bL9znMGZHVEU7S1vM",
  "key18": "5FHpZ6KzQpjTLiJAnh9g1Enc9ajKdF3yv695cZsPgvCFFsmMUx6MeKa6vwM2GpGVkVE9ek9r99r3hTzFx6p8YERB",
  "key19": "2oc9C8sYsMb4RoQSqrMea7WHUQZs2sjtJrA79tA7ctuff97tbtZnCg6VBhb7pCzkC5rdiiWtVSPoSKgD4Y4jEW1g",
  "key20": "5Ff3DAzh4GXRujtceovvzZWWX3oX29znExjGcapQr4EtT2QGRoDJ6z7kyepxrks4Fg24Agzh6fzXs4KvgvUX4NQ6",
  "key21": "cdZvoZNNeQrfYBgQjEESaDETGsmZe6cggpZsNHzCeAsToLHEZimF7EF75TxkRKtf3aYa2uoERzV4Q938nASWiTs",
  "key22": "35HVE4ntYnb7qmo89FZ8dTqis4YPfHWRoMLWebsAQyEFTAoQJEbpgiqe1H65VqDrBwVDBvT8hv1dBDwTZhMp6JgM",
  "key23": "3KuGSojcWcK4c3YfqjSNgCPkx26FnMJNCTubrVkfNStNG31BpfPRt2wdUau1FQTt36JXks9m48gAxvTeVK8wZrW4",
  "key24": "4DqgrS7pHRrKqfMnPWmvXgCWeMLK2eJdPDiivGNqZj5bVb26aPf2o1qydVpUK7QajGVYwKenbbSYd22ZWh23fGSW",
  "key25": "5PvqNGWWoo4kxSQEttrBfNvrUNZ9u9HfGuf8biHzep7RaQFqYCcBEmFrFEEjcaEKaoRqnCnV3HxtHSCgqpJXuM7s",
  "key26": "3jXf8y45QGYoCsyc8FczuMrDX9dqMYhKwvxXgr5WubFThYKcVGEeU5TukoiGSYpxKSEXYqpc7tkxYS1Qzz4HAdrp",
  "key27": "kWTcq377NosgF95j2A3xWTWfX21JswAY425Dr2rqj4FvobFa9ytgrVVbx3kCLzLCYKafVXt1bfTtBv92okVUyM2",
  "key28": "4c3scM27pjXveLtYcK9Dareh72dUCJV9vFo1eLDRVG6C9yL49duQX1EzHqifpo3ThAZzhAvTJvhuMb5iMzYatQML",
  "key29": "2wPhQwZ2KAhUy22eP1mXiCZkB5WoU6EvAkQtzJB8hoKqx3iZVZP3tZxRw7Hk4R3zrvH6yaoRZMMbmWXEJL6pyHAB",
  "key30": "3nwkBZVp1rwC6TXacXmYEG8RWeEYxGQNsuPUopNUnpCLfzVQ18RkaSuhH1CPoZeErpxpAk7zEPf6CWLncYAQPSPv",
  "key31": "2RMcDhvpB59WnpL2LmuSRrszPUYCNRj5CJUeKVLMJdvWWHcmhrnn1uS4xjjqLXitrzv5PDHG2Fi7ZPvQ5LFmttA7",
  "key32": "fMFniBmJyiCVoEVZs3HzdGRktf77LPMvAcHoY41Xkdzf2amBMCryvbxGe7WicT1FNeM4MKNJiRMFAMGvdrcQpBA",
  "key33": "SdEMULFDkaTUTW6yEUN8s3ofRv8eo5KEH9oGJTkue7wSMZw9oJRUuM73F4PNMhGysMuj6YDqj4noK8hpaDq5msF",
  "key34": "5yfMdY3nv5yYwJ8MZQ5YpSrPNc6axbgjSVRxjfNDzg2hWGv2LosRcsm5Xi9St8o1y2A6yYkJbR7VqJVWB7kJYxC4",
  "key35": "4mSBqtCtf7BzFy2NvPLgEtA6C5or5NfvMSNCG9Tg7mS95dd5KZq6ghiDbBpefYxL5UhCAuw3RE1896rgEjakqKY7",
  "key36": "2vp7TMURrMGtTQiNdXE9eFNc2ou8KNrEHi9dvT5gYCvf7oXCZn9wEyGbbPFZPbPN5eWwkmLBKBBEX2pF5rD8Qw6j",
  "key37": "5Snne3QRqmFfAixuyMJ5GC5AFdT1CGQ6kuKLtYxjBuu3KnQGEWTuNSPLJfQhf4H257tSo2vk58fQ1iioue1Fh3Zn",
  "key38": "5iqa7CM43ZD1QiveECQQ82cxDcS5xGhZpcMw2w6kSX5mpU8rZMfY8QsyF3Wj86kBnUyk7bigh8HkyzbTe1ekat6x",
  "key39": "FVfNXREFw1jdXCHhjBcV9S3vSGjv7GGbSXvFpaqZXHYmRedGYvMxgTZ1QAV7o2FXuLfh27u28RkvdYrjZh5m8t1",
  "key40": "4jbCdquSmhBwGfJEUdTiw1YBZYt68w7AJ9oHBf59sVL6RJQYUCKSkmGqqPWemmWJRf7QCZUnqK584VHLpNpwhb98",
  "key41": "5W1pWRwh3B2s76joqJLgeJZxuG8UgUj3KMcfTok1cvJGAFyruT6aKyiKKVAcGKzkkXuRdd6M2ajfWSmnbgJfjfeA",
  "key42": "4G8kFYPvs7RUwPtRL1jueVBijrn9PeFh3Sch9kR5kLZXqiJ1Eoj7485VRP1HxDZaDUR9cVyjmnhj16NgyGsVo5yM"
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
