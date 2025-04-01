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
    "rMdos5SZB1Ud7V3dGC72ao81UfHb1LBM4QEK4HKbdwDhznQ2sLF62KW5UrpYZxKoyeNJnihb5HiBw5GHTvvkciE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33Qo5CRCy9jCrW6zLGJ9x6DjpjhMtYZMCkPKGNfCVSk8jaV8tSU3W4cHHGLTaksxcRTaWVoXXb7BmdeMYC9zq4vX",
  "key1": "4XpwysogJGeEDMsyV2nCQsZigKzopFwrujpyqUqQRsfxMGkeUXvbtotRqPR6of8a9hJFXeFG3pAV1zPBaDJZbosc",
  "key2": "27UtrSrKzuBoEsgEsdDYwoWLXqnqsxYVj51Es4d8ewp2HeAeZwwa79DoJ7QSQdvvQxWGib2UJcerhLqmiDVbhi1q",
  "key3": "3uG7RauUrfqUDuPzatNLMyBqowhVrQabGnhkqywMGYLY4oVsm3jDyfyWn6u7CdsMCMzmZHwtT6TNS5AwPDYrh9MA",
  "key4": "3td1b9j1rhgg4JrQ6cUyybNxBZasWknYwkK1yupRwHtZQE8ALCGLws6hR1aEA9XB3tEUFjfyFYYsZJky2nssKeaz",
  "key5": "67m8dkhgrkPvanP2LzW3Cj8eDg4bt4CzKfK52KCYBrw7CaSstqXwc9YWsK43iretdvGFBaBChMWhyAcA28eVcLkm",
  "key6": "fYonLZQV7abcoztWAHGRXTKt4AqtakX9XCxgPkTHzKAPqR33CJ7qzicnGTxuwHyV8GYaAsdoWDwy4fHr7U4Wmio",
  "key7": "X24JjnwKPkJ2Hy6cuypVoJc1WPcMSYkWFb36s1ssERdEXvP8nrMVNuzciqBvUH3moc5mjC7hY5u86s7x1MHuSUt",
  "key8": "46RxTGzhWjcEiZMoUCFAYS7yFZEM6Vf47EfdV8cAH5qvRWiLrnDdm1iqCwA1UGNk5qTCzVvGbqQX63xx4UFPaVgm",
  "key9": "3Bu8fVzrEExxgny21u2kuontzdSo6tCBX6QPVnVnxfuQkNYo1AEDSHgjR5FsdiRDTbRCKRQc1S2kx4WV5TwZnFrx",
  "key10": "2hDP7ZZ9kTTLQRcw6tL8cXrYMyg82qShRt2Y8wcA8quJqbr2C8qQy2GmWYZZYrwZPM2SKfNRbkKHdZYrbUX1rXtw",
  "key11": "51gZi9KMpwJSggBwELcEx3U5bDQkXUzcUjC8YXYVXzRaMzbKgUmVrzAGCR3AY5XpvVpzNWqRf1n68hdK6TCsXeUZ",
  "key12": "5dbPKkxJxJc2z59KLQUtTnw9Npfn6ysYP9BCZD8y5XT4Mm9uEzDYorGCJaspNjedzBANbG5VnjJpEFoG4pCMLmWW",
  "key13": "5gRW3Fpmw6TZdQfE7LtgZ1FMjuLci3o3MDmvL3CP86dXRVMVe9mtZtBtHwo6bYGFtpuwLkjdJVcDovZHY37Kkzvm",
  "key14": "4yCV1xJCezGryKCZzdhEWu2E5sW2BqDXFb3UA6a1iSDxtgHYQqhvaSDNg4TeSqm2UDtMWRcK6VdnhMGikSjwpBhz",
  "key15": "4Rmo5VE3Y61zFLWP9vuBrvuVfdwdoTpHddEUwimv2ETBTc53BDNGzi9SCS1wKKy6t4zmWRTXTx3TffMrK3j4fjkS",
  "key16": "3nQzNTpxSoprGaHqdrEsUAhqTpZqaeE58T6HCUSwGz8HJXirAr2M6E6duLVbxdoyGonSbXekoF2Vn7yh5M8g9pGx",
  "key17": "4wq6bmKAL7FHMN1NHvKEy1Meb7nVMHgtNTMFgmGwpFMBN5U77JPkLyBwMr6XN9axGahK81KK6mAkVwSLoRYYbuUM",
  "key18": "3YPzGFxTdrAtR4dXFgTRBbYYTGAJUVjnpTf6xJ2nn2KnVd6FKfDSevnekhwehyTnSJSD8TcR6zA2QCxpNSHz9qBX",
  "key19": "5s3kG4g124ZNNAdeSVwYfMvzZrX2dQB7yZiNSkskKNzktgyxS33VxxRGfuPVNBBG76UimTC1ttFUoYTaqZL95CpG",
  "key20": "4BAgShsiQ23koAomgQrWN9gcEexkf371YFTZDw57xNP58Y6LRpBxEGWQr9d1u213ZmEptpdSvc2ZYGUzhXT4gwBr",
  "key21": "4ai9CssgthMpbb6j8Y4paHmKBAyLMHpSPpj27AZ6nLkF7YSxQaEBRiGJDzVtPLjQAfXzEzKzZzUmr3hRyVAwQQf2",
  "key22": "384BLjqmuLuZ16t5YfwwYfh845SqyCw6TwFrnmHVKzjdqZ68Szy8HVUsrcHKwozrVtV3cjtfZEY7s2TYKQuf8XSm",
  "key23": "2TqBS55znegW9iRXmt6mcVsmoUXuZmPDjjhRMLV92DaVVfjXA3SUeKWxFLJqgNhRAvo3hMhoxCyAFEjsVci9n8mH",
  "key24": "3xnQNpXnuoZs6YxGPx4YbgqQKWZVxkZNxBG5xmZFScSZRcjmvDfHdg2bZTovwFgZhM9GNXaiFKAscvtpCcLaQU8o",
  "key25": "3Dsd7FYaLNazdRaMpMtCnzUjCmfMKorP3T6UjbrndWrEscgpoHY9T6RQGAVkaSvzfneXj7BR4Kmnw3kaELw96i11",
  "key26": "5aEqdTf9LnKo8xmjbrCoT4S5KpHHZY33CQYnXGcTVUy7m6qwdwATaWDhhEwUEcvFYcWfsCQmVbShaBYE2w37pb49",
  "key27": "4jN78Pvf4iVsiUduvgE2XmNY3NUACCejsSCiWSftB3ruJovNLY9waWuAnBworQje7CosB5FxCLRVyYsUqLxHsJPc",
  "key28": "5PqqhHM9h4uKkUfHLLa8gWcMWbchAS56c5R42Lx6KnfbxikRqFLHeqGNHdQzbiZTN9s8M8QF2jN3Y9veC9YFeoGt",
  "key29": "UWhWkoa4LrLzendF9zqccgEGNaNzsZvai5ZeP4ZyeqWRbah4sCaKjUUuqUhgndVdBgTWfBmHjkKPMimHy5CVgdr",
  "key30": "5pdPtfcHhyEzcwfQ51SsVHVF2Pz4XRrSKApYFCxbHp1PHitDHg26P76X1BmTSpqSkEfZGJN38jgPwmtfkMiqP6Gh",
  "key31": "26ZqDp2VifWhk7wB9KvmNZ3DSfeH542nNnBdDEaGbyJCc8gSg9iXzxMNLqQnifijvEdJMmiQ7CC2S73u5gk5GZXA",
  "key32": "62qghxuYLciq4f93Kg4KPy5Tc6oDzNKd6X5rVjZ8nNhMFDbE2vpV5qjhNbiNvfeZZyyJ2vqj8J7UVhH5vBxG7Epf",
  "key33": "3qAbhpS5VML1EaP5ptEsArTdi9tkbez4jiX1X2ybsJXdxdNn6SybZgdojqVkPnp8zgxJEiRcanBdAR6t2bzTwVfZ",
  "key34": "2nsMERba24TL6nRvQ8nA5ZJjn1etHZYCk9ychoVFVBdRDc5Pb3MYXaTd6gsYeKGyVY2HuMc5tKvVkCEETFS1KoDC",
  "key35": "AmGWsd2sY8YsKdwTNNMW9CTB2pLTbgXEPh8HPcAzJiRGfKVqkJsR96zEx366JwW9gat2nFWtvNxCJkxJ5iuiTux",
  "key36": "5begLqqDxn7TDehPgeRKRGMqc4TLzLDo2wTibja5PWfYiSmQj1mtC3MdwSbFhC6B8TEmqp921HYXz8ncELyk1g45",
  "key37": "4oNbn4THQqCwZNZdZhZ8R94VGyuE8XutuF9KifgZ5dTxurL7J69Cakf4miCdntdxmrZnRdaMuL1nFcYpSyYpNJeo",
  "key38": "4DiiiMuuVcuAmux6JgSpkumB3dQ8uLJ87xNguPqoLjVzuu31jgh9ZY4sLu8fNpvEfk477X5tvUrXce2KuRnVjtpw",
  "key39": "5CUcBcCXiGQBzo68XEM1tqzWHGpdbuMzdEYnS64qaGSAtncC4oYvXwUCj48zVAULY5kTLAunU3jY3WgN8YgeiM6u",
  "key40": "WHNZPPfTxYYyNNPv58SXgyFZFtWo42zscpQVoFZvyBxgp5ruYJkBJ5ur6VbSQgLcviiYgzrE3cCAdTKE6j5htGc",
  "key41": "3wGw95QWEMgmmACDyVu1Fq5AHX1ZR88cj3SRgefsBNQT6FZ3s4ByZLN6xFzAgeEFaD6rnjXozUTioZwXQgcUHVCr",
  "key42": "2P1gYgFsPKftMFuRLMvumZt8qRWdBoo1RjL2qorEPF6dDQi1PFs3CYQYP5HJpTcSAfokgyedJvWYEgnhngFc8qgp",
  "key43": "3dNrQaWEeYX8BkCDJa79QPVxMEHj8YGUQ6sBPbme9NtBUgRCy9LagTbLAHKQjT5yjtVcW4TZc4V1KaAP6YXSPp72",
  "key44": "5DTGX5ohWuBNjFnMDmxxJKZvoQhgNq6LzfvLUaLkFgMewkPWp2wY2BneWJVzsMRorGCT9pzHGoyxhWHCbWtbTnQK",
  "key45": "2zmPyLZahSHFGQqLese2GX5AhMGdM3sdVrjaoV6Qya85SAXHpX4qrCeUsvhdCgbqDv6i2k32zcf9qisnD4Z2UuZ"
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
