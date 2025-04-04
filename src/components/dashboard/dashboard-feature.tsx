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
    "34kdi4uHNWXyt9YyV2hC7efNM331UyDz863Rxf6Db8JWfJvxSBSc1JCJsfhgC564PTyQ1FRncEFndJR42WzFyCcK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zzx3hn7YzuBGbJXrXiH3bk3qWxv5u7USuynFye5guFh5Y2d5rZgLs3K17x4HAvvN67aq2GZpe1nsQvYxWJWs3j2",
  "key1": "5Ev5WR8FBgecGrpqnCuLNQk2535B9MKh8wEtC4pzzUZjftk7pb5oFExuQ9haMuJATgC2t1UtvLpHAtaN7PeaFCCX",
  "key2": "5uVuWfv7o4QHXThU1utYsC3Pj1AwJX9NUKUyrHNceZknTWZB5XHSuDcwXEiVmT3QAW1MN6o48FuaWRTzGLryM9Bf",
  "key3": "4fdyvL7sGYkRk5XL4HFt7oTtjz6uA7cAPrcUmbkg6LLit1PDrMGsUBXZXtjG5qoieUn2eGXdkaCJpMXVUpL4oyhq",
  "key4": "4CX3zn7c97DtTDEDmJCTjh2QAvmTgX9NYYkhxD9n2NXnxLiFt4BdcymqtPvsdd1RaXa7HmacgbHroED418yfMkDc",
  "key5": "2ZSVcF8FZmd9FbvkCQN2HoNq61frcoww8H72wr7KcxKhsB7eS8337GakJC9gqmUKsEE6Yxdd2AppaNhPBcCCbyHP",
  "key6": "591oB3Ht2W2an9KEs3HJ6nNkFgULu17pnd4M1PBCDq9s8PSnzVgJvi4ZmKizk6kTxEayWzXoktT2H13DHiX3NGhr",
  "key7": "nyAPcobLTdoAasAbzeXY1fC6n5ZkX42Aykz5yuqo7wWu9t1kAkCrzcNnfDA5TDBPSrgGntwVkXUyhhjgmtf7pFn",
  "key8": "2vRbqVnms1uVvdPLUhwGwD5E48TCno5maixuVb3jPa8N2e5gWrwQ7nFC4kzuJkZF1ZDyusyPJ6Bah432BgKdgPw3",
  "key9": "276xRvKS7JMKdH6NQPtLh6UeJacRpBwFRU6Aw69VWDTcrwPUHEnxrifh4fRM7jYy5LecPda3ADYpi5szq6NFbih9",
  "key10": "2T8JUGbb2n3t1KMkVkbdXvGNGwKWiyHMkz7mAFchRFqvEgNixQDy7hRfrmYcgc5mvfz9ie276PGYqdHw5enBiV9W",
  "key11": "4En7K34Ggv3m8pk9yjCfjeZXG4a43uxgHdsoBD43oeSzv6MTfpvsmynx4rtzQQARfAJMSYTo8mAGRVhPTMXp6brA",
  "key12": "4XH7krzQijwvYmPaVSXSskt7T7bkEcqcWGEGqq4eobSusFrazVyswGwRak8tQTHmGL93xbVhRiAHHJjUGKnnwcs2",
  "key13": "5S3A1bBHEFc8QgG7fX1yv6NyNg3HJ49yQzdjfhbfuAGoBc4vKwkWLVu6Bdmm57QJhGBT878J5b21v8u2CaQc9suj",
  "key14": "4YrMLTN75ocrbDbTY4z2g2FUqgQzVumgEXqZhtGhbtRM9EFMGNv45fQYSiEQgimHi5BCXgzcrNuNPVUMMpYEmkb9",
  "key15": "33XCFtXGyeYATFqswe9GNhkLcXA3cBCCaHqmyB79yTkY4XHD8xKxAsw2E2WH6kWHD68a2eb49vcrchhnZy5MWaoS",
  "key16": "3NAr2XweesnFMkZR2JcYEKBkyk9vy4yN1WVWwRTWKW9Qxn5NC3pTxfyURj7jqRNW17SJkxPpc6stHokUvwS6Uwch",
  "key17": "4AAJBsm6cmPUmnDBZrwnM2hHN3S41DuzLxyhzzBZ3sHMJm199XGjXcmJxmegtDu1QzFKcFiPSsnDhkWEPDQBvWCB",
  "key18": "2Y6vb8jzyuRPKTR9izeZnDWbPBAAxJTwp7QLn12S3KesSHegeidYmvCwiTDAwm7EBBx1cy8SDh9VEXf72NrKF4Me",
  "key19": "aeufi9Dzf4gf6jGDqkYJnkVG1vkVN5qiuseCA8UuLXTEdJWZ95rdbeiCNsX4YvRU2Xp823dSZ7K6CQxBmMu9bje",
  "key20": "2KdX2dhsqomAXSDU8LJFUW3g3P3zeCG42A68SPVPxiXE8aB9X4ExfndoqwMgb3XWDhsKgsJPJFvRBYvUvWVFi7tV",
  "key21": "2wrir5pwfrKNHdgxHTkmyTk15GXirSk5NRUCoZdL4uxsdaHR24uaJHQtw7xZiWCEEvDJWUkDJSGD2Zm9vDjYg2Fg",
  "key22": "hGx9t56SpDmib3ff56tnV9XpTkL5Y7DF6DFzDnokDSGwjNKdQRm3kbHTKANyWnPEDRTXanFyV7QLyacBbTeAEGq",
  "key23": "5jdmEP3ANcnqKY24ohvwZicFCU5EwX9AmxJVrH16gtCT5X5mAToZr7fYVXomM8cMfy2vYZ59vFXQAiHyPYA768sk",
  "key24": "36deQMb5M16YGFtSWJ7LogjyppaN6JiZ8bjQAAyGjN8yd7z2btYkV1CHspLHkoWQhXTSsRXbmQWPyyT9ZDGh9CD1",
  "key25": "62fF8qqJG7DVpdXeZSRbg5NUMnV933WEuYomyhyUGtnDfpdnqcJ82fdePcq4bGYQxj5i6V7SK3PCSmTv4LQnikwm",
  "key26": "1gk5peG6tvicBDC2nddLHcKbR9roJrQsGHV88TV3buNSb29BvuhPcSCkNiR1pybodpbtsSWZ4Bg3fp4jMAQkr2V",
  "key27": "adKN4gGjRkDcNm7cywv37K7sVPjcbxSdNvPqfiAEpfu5Q8o1ZMGHH1CPEMpn7ovWimKXmSzYgdYY3aaJLapfujf",
  "key28": "24nFm21KR4uxBvNVuvGUXV7AvvSQKThpsqhVwYa7zqoK46XBQWZqVcts9hetQ3oY2FrxjZVpcoZ8rhGKKmsXeuB2",
  "key29": "4yZxhzdmyTphNbWJvy2kFbj5poa1ZueFUnw61AhAxR9EerpvMuop9nSFGUBw7RDWJrACZQDqMEWHGanMjr5t79w3",
  "key30": "2acG9gZBUt8q3wsM33sj85CEUKtRkw7fczFuGC1cK2udwKd5hDizRxnvMwiKjNtZdmsTfH9x6ttMz5zYs6NAipDm",
  "key31": "RsZUQnajNjEMd855qa3Za1vdRVxVLaAPyuCkMM4ndGXfy9gBXWY8xagwHPvi7EvG52SxKBAYRyZJMmMDdb94WY7",
  "key32": "38w7DD6oUxv3WNKzgDzZZ7a7S94Hb1VzgGfQ1TdyapBo3Qg2MJywSZgDmu8CTwgiGQCXU2CNuE5vjuuarQPSv91V",
  "key33": "2HMNfKEttLMDR1A4oFi1SJ64FqXc8Z7rNvdYmoMjDZ5Vx5uHB77c5Gu2evD8jsgLL7ogF2GkRqMTUw2LzApdPnGX",
  "key34": "4bdBquUvnidzf1ibWTmECVAgoo4kYvuydx29n6FrKUrZG4YaWcj8mHpjGWCgDPMsWr7cCKb5c3ovRfuD9XdizpXG",
  "key35": "5RdUsuPfgB2X349LV5h1JLCDQcGr8X9YrEbAGTZVGLoA6e9MZ7QciQA2S3z7UMJ3j9xFuRrfXKS47bKTb4u8NSkT",
  "key36": "3XasTi6hEyAYfbYnwqmA5VmiBac58H6P55MurG6bVF35MHA5rNJdYhMigG3G4KXvEtrb51gTWmmcH1ybpn8iGXDL",
  "key37": "2Lmd4yWMnoeRTacMSP3HHax6cjEx9WgJZPohpZp9x7L2FGp8eVEuHw9AR33j62bT1ZZKmzqnE6p2i6EkK3PjHN1m",
  "key38": "4VpQRY27tzzk7ZXgEUFumja5iQSwvvp4Ftj1be9S86T46VpWr6vck8ZjPY39T1et3wLW3yVLoYKqfBNEMPCD8q6J",
  "key39": "3yxLa6NAaB26zf4gxLQRu6FmT2gtcSAhhhTXiL7pzJ9ns2j9v2523WGDJ6rpxWwQ9cM64NcLdnApRUyxxMFzeWXy",
  "key40": "28T5xYxYFr4ERsjfee3N86LZeF2Voyi7p29YsBsxYNqVJPicgjidP7YpxCKaWvcdJ9AuKq2jzXbMikfHFMhBcirB",
  "key41": "2P5CYCLoGQChDVoEoYQRx5YtByAQjqPfTkb5HKyNC2xs8mX8o2M14PVLTdKSQQ2cNqsVmHPTzrrpkqDhYncsksuz",
  "key42": "2ZYGcaiTYvuzWbR9f9SVH1mR6sofuUTWTGGnrEsmB5MbsZTbMMZdG7914j2B6CV7MrobWHcyKbUrD5Nxmv77z39K",
  "key43": "4oJhGzisQeg6MQ4PXNn5onUuWpe46zeujKuJmUVyUhiP4SzA6EZVetGbAcRqMurvyYR15e1QVzoX26HZy8ettjsf",
  "key44": "3MektEWGB35Q4NcFRQn6QLbN4s4jNCA8yk7W2KFbkc3kKURk5kXmun9Fa3YDAUGKvzaQu35ePniqrM7NZFTVyQkx",
  "key45": "5dVu75S9Yhd3J8dqp77m7zWiZM9QmiXaFCwhbq4pAwdyvw2abhtKcYYnhHLoHzoUf5R8wkbniNssCNWAgBdbSTFw",
  "key46": "3b4nHy2D2qef51UViF3zTFqat5C7uaCNSKF2r9M5988U1nRn71sj1hJAsVwxesqespo3A2RBENZgGyaKWkUXC9BP",
  "key47": "2aEtQwJMAR5QYcTWdCaEvhEcz2CRuLLnCKXqwfASnqqDRfNMqoDVXwLL5c28n23WurYRHrWs2jTUSYexWabEQAbN",
  "key48": "5MDwrufbqstpXxGhakoRwjJvbWhqafKkuAqWbQgYTeRVj8WGyPPq9StLSnGRW4UzYfKwx14Fiynx2n2jED2zUpiJ"
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
