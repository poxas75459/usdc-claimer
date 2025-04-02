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
    "4xssfYSyHNyQsJTfGPjtHBpuxeX3aEdosvKsPs2bbH2WmSfcJtwnZQ7nqGUaHzpy4FjaSThyMBWze6Rc9jivoCXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yo731MGd2VAoWGFF6J5iszHwicN32KL1ieqJBjSwiv2EvNct4pfy2x1E5KELWFcxsKEaKQs6AybEweSAosU6K77",
  "key1": "2bXjSLQy5BnjtkUvdbNjaRYRpzc4TYE6fCFtpaToFdcwHyT2743myythEjGdZdbTuKuvoiorFVFBiuXnAX4grQ6g",
  "key2": "5iWcGDnV2t721VwdBHfdBTsmsWw3GqzbTL8TWqTUYcNiYMZRdXn8LUNPib8mUiexrE7fx7qwgV5c5JcaPKnAGyeo",
  "key3": "U3YKCHdXRsCb537YztWYokGL5sRiJoiBN4gdFCZN7dQSgyqKQuZDxqgrPqPUjQBRZtW5pvxHVoc6MDUsaCDtDeV",
  "key4": "zdLhUipR5PTkG9hU6wy5nDym76SiNwunZfujd1afzrsjxwKuzHRwqCV9MdQKWQFXtANgCoaVbyvPJLYJULpkFQ6",
  "key5": "5xw2U7exBHTYbgsMcuqHSa7fJxBKwpBmoevRkyeLovo5TAg8JNfsTHE9z1nBCYYdhCCqNiAjfkDAvHPh8Esh9WKf",
  "key6": "y37VpW18oJjaUJ4ThJh2PvQgb1AmkL1kepHvUSqNqSAisLmXYYfrAYMp2L8Ky78quUiwJBPemQzHi2p5kTsmz34",
  "key7": "5rHcXgEURfCXrAKa5uWCqaiKa6gmM3t2jpoh4c8qmJzpf5h3UzX9e9RxgdNeyJS1daBT9pG2LaJX9ALuKVtPxFih",
  "key8": "2xNQvaja67AUW72dhqTvSVNuhZNJjKH6zF1VPvozCd4hBjbdz37L5g2eXJKgvtp3ZarfsTdxjFHFsG7KWkPRL6jA",
  "key9": "4cdJ6WzuitJ4dYtgJ2WQ8rzMqi1DDfWa6vCLmvEQtfczfEaqJin9ApkCvXeBn5HjeCiQvL4wUtqGk8Lbi2cKJu6Q",
  "key10": "59mXe5FXsv1bHMuRF6trbFtfPhMfyEyKDjoGB9ABduUNZqvA1g2k3NbqqttyXT2vdFsvRRKc9my21xcfEq8sHJMF",
  "key11": "4tT1eDPdVjm3izGCkGZbjD7CKfqVYcwDDJZKhahcxi7bUSUDE4epSgePAzDJz4wxa3mAYcJWEyF4yYWmJm2faHaa",
  "key12": "2oiCiDxf2hXbNmwbHM8uozMfrfwR6BrYtNmRaswzE3pjN5m5D3kwcSLr2Ndge81ap8JXUQjDeAcHg8wdGW95KFxF",
  "key13": "21VFs3XhsQnsG8gxdRSu4Mx4BvrB862B38FAaQCgmBVhniGR5fUpx1afuNCM7R1VwdkXCcqdxwJe58bYh3gxcffp",
  "key14": "41MQksXuzCacqb33c45CgELyE5kzStyEkacufKGuFAmFfaf7Q3coz1P9N9thGv63ay4XMmBfSz8bkSWb2qWLaSem",
  "key15": "39hPs3BUAqU4H6stz87th79v58rJLN2Ui3pApV9SYYTfzKymvCozvJCWnyUCWTUtaL7Mgznp6gqLJzNFi3dFNKbP",
  "key16": "2jCjNUVJy7sKfTJ5U4tq4Tmibiz153rnnX8fjjErCNbUFYzpjqY6uRA15RL6S7zrjFBq9VBxf6mg5Jy4BiSTYAYp",
  "key17": "39EDFmUNhsiAgTxgfctnP8y8uDC1QTsHUAAn2BAzVJtPCqBpnpxgxgiKx9eRmoNdXYvYRCcoCHsaapSZFnzTPJMt",
  "key18": "36DLKfPwcFuGES7HpCfxdxiDwHpxyU4e2cW2W5FhkAqjCn2oTw8aae3nD2TKfx9KLQActBA3YvmiF2MnwHKLFkkN",
  "key19": "2aDsKi7XcrnisXnfnZXcaMeN9DWoABuF5mbtond7SLe5kc9kdh3YXSvxCwuBfBv55RzRsoG5fT2CWc564rWEu3iF",
  "key20": "2kPGCtHUFQfDBJ3b7gUfiQ6FciUDQJJBQCcwZKzkKRYmeubE8EzA2z7HdbWHA3aRcQ1DcCu3cZCRT2A1Hw9wLKZq",
  "key21": "Mfd21CUzSKDDUBWFggPRDQmxnc2h7MP29KbFaLaGimqjNiQY9vygghjTNhwJjpDAa4JTQhiYTddJMgPAGuTX9fU",
  "key22": "3JNBQJ39M65BqESH2pZJpiw3GVFnhKGo32759E66uQJ4Fg7koN7ouvMKMhcJFXXywrvdMUJ12vDZ3k8EdJjNtHbe",
  "key23": "5RxAnPEp8BADDYQjpt1cVsftnTB3QccrJgdbT6cYfFAeLLNfeRyoWubkGEKJDUUfDSdfkTFRAUhK3xNXW3WiL8UB",
  "key24": "gYf96z8XJQ73Kp2sEdoGTUq6VryVAWEkwJtMfzTi7Z7RU9QyzucHG6E5g76XKmyobTG3C6LURBzqQL8RNBGN78x",
  "key25": "4ZKHcC69ZHMkBERb5bH5EoyjNPZb99gAcqqxGCQiW4aCn65BCg2WUSLgyNyDM7PUHYLKJuGWnqqvX6NxwmyzpYcv",
  "key26": "4MqoL5SNhzhCbSbQDX7v5eKs6XMyTPK8BKqktV13KUaVdgPCFr287DWZVnv3dL4Gx5fpeqpPQbZMQVRdR9h8Q4r4",
  "key27": "2cVaFi8EbEuzU55NigDJqsg14j4EqxanMW9WnPp1ZG4uh1kk7BPydfpqA57WMDLj89YSrfCpMnkdLjhrinKVTim4",
  "key28": "3qj91hTM53WZB7qpnurKtwKdpmsN7GemYjTs82fpH9H7ahxfknJs3KfsyBbW3LUmus5fz2TrjA7UkvA2QssVxE5x",
  "key29": "5z9VuMCzXdrT4QnZ3HyjpMtw3hLFAf4J152KWdWfAStxMnNvdYKRNZbg9vDk9sm2upCxX97HxzSHgvgm6tg21hv1",
  "key30": "43rbtUbJ8AAbHWSUtpNzYNh5fPHiYZiKxaTzCafTk4Gay4aBQ5K1TXLm66cnGMMfuMWyMU4J5EQDiPkVtUb8m69M",
  "key31": "5SiP5bjMsTrzijCRACbeh9KUBG3L9fcewWEhe19H4NXFDbbizMzkyPLdigosdCeWADhTZL5AufhM6CXWauByjnM8",
  "key32": "4e74fgjRmfHc6DiP5zS932fRMmZR4CYkneuHx3Y27mazuWbBzGdCvGh32fdwE2GdydRm3BfSg1maFKGfBiwb8M8V",
  "key33": "67M3SNESvzWKCwfsKCvF92TuQP2gQ2ZdFqBsJa1FMXuBfLKAfiUaVQ8LKhsQz2hNG8ExJMSqe93ZMoE6fFqZUTrv",
  "key34": "m7UFqSfZELgEFphApwnVDJune3cikCvkgX6wAjaqkACrwYQbkSMoASjiZZdYB67QMQa2krRAjsbgwY2YMfGzaXX",
  "key35": "45ZS8Xby9ZRPZ45K3bi35bev72q3LZZYAJh8rwPXAzqa3LpmvEbioBt2MSPN6b4ZjxRzaPpoZr4BRvmwhpoQ5A8N",
  "key36": "2L9Vq16E816ThNuQ3QN15Z1YH2jJzMvLvbKesSFieNgshqKasiF3thxNVqCDHKEkGQUi6sv1dyhn2XxTbvBPGwMq",
  "key37": "2spWcQ3kzrZ1zfmeoZ9zdNwZRyBNaaNoWSupdQX4XF3UkKpyjRDJY4LWpoXofScywdRTNYCQJTEdkPyXnQyvL9Gf",
  "key38": "2ZstRAKhKjXHwRyx3ohLwSPxUBzTiggmpGd3W9Xu7ii1tZvBzhB6b8myvLPjkZfu8tzFKtKE6bvnXrLBfaaQJ681",
  "key39": "2q61a3NXAoGSB1kfkYQLSyTTRzdC2tQSYv7Z2xYZnKWCAAzzAddA1qH9WMFGKhaejSDQnUJAdqmcEPwzGCkvdmNn",
  "key40": "nNJAXokMxh2BY237Rk4g2RLZMpoWAkQ3D5msG6A2xC6Z9fjowsGYTMARm8ormFjq1Pf7Z139twu7ee7LPqegLF3",
  "key41": "2HUKH8aqUTQ6ULtjeGxbkQMTcF9iVT1x4XG8BpPhQqqrvqeuWVBtWuEJ6rauedXvJZEJAjLQLWL4QWsyb6FN5VaG",
  "key42": "5htsSXCrUKswx7w35JFckqePhc6SeQcTvqw1vLgbkjAsWWRCke9a4pe4UnTpwGCHtmXhURAwh1E8hbuuLamPvHtQ",
  "key43": "5JkwbBDYmEYrh6WdVV7288u5dF22LBzHCTqxBreU3hSS6CtoPmTRtbHLJydp9JzbvunzBLj27uDCLCF5C1BRmopR",
  "key44": "2cEb6rM38B2VZ9AwheTJ37EeDWZWbDkLUJZ1s8Gig42p51ajPcVQsozpfBDBFDb6PC1ZyEJ2ECwSqz7LeMPysxvt",
  "key45": "5L6WnuqVPYp3tFpeHAXXB7DEWEXtr81xA3vpEXiERwxJu7iio5YBdoNCPimhAYJ8ABaHvqtht3xwtPJr8DKWLczL",
  "key46": "z4ruHFJKSp6439pRNDLUZXzUDNY1GT7huHBHm1bJEzkQ89ww6LxDfLVA1SxoptKp4JTzpufWp9qLGdBEBpcN5Va",
  "key47": "JtLmDtjDXK6tQPjsV8TEpbgwLDQZuAtBgGrQ4bSMNCmw7rwE3X9dHjN2CyeSVVS5jkXYuAYNXtDyRDvx36mv2FW"
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
