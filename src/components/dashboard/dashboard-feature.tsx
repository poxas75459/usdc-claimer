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
    "JBdyq5z5ydFZWAsJgrds5sQYnwFVXhBty17TL6fs1W29Wq9G97fgkwtewHJ1KTdqvU7mLbicCuxSxF7Xy6hCeuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pniwfWAoLGYi884LJ9DUx9ZtqC1z77wGoP2zSsdsUGytqNVPeN9vmuxRM4E2S5jEJc3aRv2iBMgrWeVVvqdwsvr",
  "key1": "4zenu2FeHwwDant5mEY1imQhzUvNPx5Hq9WwinChepnubRNqCJ5acErNio4MuprDnRjo52b83uVpsj8zw4NHJvxq",
  "key2": "34MTufrby9xxxLvgJGHr3MY7BJxYns4s5aUNTPYgK8jVgPbPSK2zmr9QmFUt565YuMA4pqCXjpNWFmE8GzDtFwwG",
  "key3": "5p5Bu9amb9xTb4ajA7DkjoLfqb9nRKSKx2uJfnpDM6U7qmJqyW9BghFfgtxz7F7KJC54hVv9XsY1EzSQPHRZpyf2",
  "key4": "3aXQVDxDcccEcAx6yZmBEhrgVnAp842WEXgrGQVtbyavQfroJ4pnsJehSacq37tF8m45svhBXc36KbphFcgYTHjL",
  "key5": "dDV6CWn1XvgeFejFFGsVM55k4S6Tg4L1xWfLReHbE15idhzizgskPgocUCSrawyoQnbbgcQX27WsQz16FjYSynm",
  "key6": "5z5Fao6UkLTiPNqYXnZ8qi822fGumMVNM96zUixpczmKMqaHxCgHN4fUP3sjtUawhewWS9XHGV5PdQC2JnvKSL1e",
  "key7": "2D25PSbXJRYsotn2uMkfcnzsWm6bzSLnP19RvsREXwRvDHcyvdwLRR564hvcRFWbQUmdVKLAJtnSujorzKtP3v4Q",
  "key8": "3SFA8fCvVdazj7N2MwfdNqRFXehvbaonQUxjour8T4LzjEeLQZKnNggpJxL8xcwAVPW3VHhAMcETjJmbh3uc6rGf",
  "key9": "5uZAmQHQx7boKLmP2o22yUza1H5jqbAzyHBxMdXewe6tpk4dShAkq5W2AKDos9L9tcZAcu7GKhTPPia5H1UV6Kqh",
  "key10": "5HdKjxT4VPskdxhe2WqVyxCyknTTQZ2qdyyKVrsVWHcY2yZGAt3LTKbmTFuRf6bEyoeDWY3vemYcvLuvfYXnd9KY",
  "key11": "3YrWCChfPRbVUhbUk7octqFydTZVoJYRZsq5pzTnxskUsbmoJCzKjcxHMWqsavYFnrmDBhZ5z6FUaXJawb51dMp1",
  "key12": "5wpx6gTbgE6mXzYMftiDfB9usYb1skhe2X4MGuPWVPmd5cLh1w3SDp2EV2uvUJwc7w5kDrZKzFsPtKAWyoxBDiom",
  "key13": "3wA5JShNXfC7rJM1Mu3JdvawspcpPVjZnJkAtNUJP5eBTLyEnq5vwoz4D8T2cYxsvk1osc5ic6z6oFicVpji8kW9",
  "key14": "5e4Qq4K8ZraTNSdxATUT3wyK2XM5mYabwoAKntaywtxVcXfAPrZV3pWQFReNHWXspLmEh7RRfbRAt66WQ7DZXtGy",
  "key15": "2ToWUVuBrZtzqZUbYH7JQE1cAvPJN1mo7rWZYK3ti8KyHpF3khh9QFd26hFbgm9qLbLXJDgf1ww9T8sty8EZtS2T",
  "key16": "2MVHbNM4XDL4Pvoz3t4u2LQ2HRyQq1BzoSvEj9adW6RtdYnUKUepqzMAtAvVyPJnKKKXcKfnDZk99UpxSqJp4f4b",
  "key17": "343RWXUTyehMwj4hAy2Tj7BmyBvoKX9kkjvY5byrMgj9oqgz3Dh8qjMxEk3hxT2Bi8s3rKmKEYv59fRvdmsZVjFB",
  "key18": "5QqfV4ZaF2VkUP8dt9fpHHYsE3yDDH1BncaewoNRsTmFrkqxwcuBJcwcjC58f1nJeTPEEwAHpWYo8CeV3phSzoB4",
  "key19": "3fjfWhHqfDDv6boGpAh5Tu6DLhv2TTVRp8EaAsBKnHCHHVKFNsUc1ERuMve7TFxS8cwBgWHVSfypxn8YWTgw7STX",
  "key20": "ayM2FdPaZpMiJ4bNjRQX88zLvpBHiiBeeijK4vbRYFaE91Z7Acm5pZcRb13KVdwsBwjJfueoQi7rzcVq3riDwnS",
  "key21": "2vnkULBwFY9zXXtAqgV84hiDFtZvymLhLenmAjnUW95ACi3uCiMKiB2hmRigfdjifM1t8jaX9Cs8yYpTNiYQk9ec",
  "key22": "2VRUdejb5YGdXu5PJPUMeNDxeNdTMdpjLjo5BBL2NFVxxb7NqftXc8J7NjUoxna7B5ze76s6ie6jsZ9HTqg5e2Em",
  "key23": "34uxKkBx6eZDXgTzNFky5A185dHSc7hrZaHB9XqQutmaoy3DAJpuPbvcCgr93UFXZq3d5YR6bES8bjGzmE98X98C",
  "key24": "36QSRjz1RbF6xAXsymAQPoHjuMF1swkABzeVWMSYEpj1BA3VtvjrB8J689Tzxc1FnxAZS78YkjidoRMd5iwAQQAu",
  "key25": "3NvQnDg7cBvJgqA39FU3C197TPikQCxrXz6we98ZKrMGJXyYvGyUHJnB5A4dEyVMw1PNhTV9vBSdxDxzmbDkr9LK",
  "key26": "35td49bYwR3A8bokXH3dqTQDQrCgXuDsggTbF6gJ48rSH99vdWtug9doE51wWajpVbkt6kxMqrB63PWGA1RxNcMH",
  "key27": "3wYq8d6ur69Y3ZANQ3kJVovPtuCkoR2jkdLqskQG5TFRe9qeaZfrWb6jajvQDf1EPqgxPYSECqSAZ1rFUDqr647H",
  "key28": "4Z7R4GM88YucnmediytGkpBBKfB9rm6w6mGa4RUkVgLXCuoowmXeuJqq528ywqpTJUGEVCuqWCjjDngWZyGbFcs2",
  "key29": "5NqjuDPdS9kPAnq3CScNtZpjonU8xeYHA3L5ZZdzw7jPJyMoEAho7M4muxrQV2ZAZcv1tfBWL3E4AndNURepUyNA",
  "key30": "4ofskSebmgGY8rVP8JUqnqvsZwqv8Sak77rfEnT73Dmo1yMJU3cCPGjatZ9mLA6Gk88XKnK8GF3fUSrJf9UiEJy6",
  "key31": "4gQqJ1phjrmkyoNbQfcCKZ3sskFPkvuduwCA512VxLkh7HMbbhWFSUoEU7XKdgJCtDGUxy4SMDXRRPC9fZxq2iMG",
  "key32": "vZs4sXbhow3KXGVk1h5MrBupLBYmdA7tLwhdKkP4pQnQ6bqb7teFfr9UDxuWMfH2NGqr4JhuM8sbsTPNhGDjerD",
  "key33": "4iBtoHQVyCtxivKprBkScEskVfcAraAAuVWtxNbR7KcXfEZZvNPgNE5sqYkjy6qVepwyoBwYbYUej3TxgVXhnGLx",
  "key34": "5DvB5SMVerbrkCwADcy4oFphdPQeqXbVf99Duug7fgNSFZCUfTsp3pjbBnMXjDoGxSHn68xxvACLC6uuPmnmjfJ8",
  "key35": "5Kbjzbv2NL5GgjfUDT7t9iWumkBrFt2CTrUJnesg7NUjkp2GwLfw1kT2G3wYDUmLq2W6DyZRc3FVst2xveKQFQz8",
  "key36": "2guA4rVX89ZPX8WDRBNo5QvQSSoFgTUa8M8HKaDmx2y8c5FruPVmeoqaipE4ujEooUUpKf7tBDDog1iipawEVUqz",
  "key37": "4FznDE1GWgoqXF6k5P54A1idWy5bKM8x9RLb5yRGbXv7F1qH7x8SVWDmSsF9TDjkNhGfLzehQtg55wrJXfAVrgfR",
  "key38": "25g94xtoWU8pBpEV1W83h15qpddTssSpGBsCAttUevQ843MZFsxdhRf2shBXx8C46ncQG68FfF6jm1gHvmZbRpgB",
  "key39": "42f93fez44Lbvxx1BLuRRrg8ggRqoAbTFV8jGBL3mihRYed5aFJjs7UyEBkRSrYkYuF35ifUKiAEbp5WDrFvE7gg",
  "key40": "2ej3brqrqNNbEbHeR2yfqcSeL7zgfSSA2nyx36Pw6cZfa1uBZL6X6LCwpN4MvVSKV6pHnpVM9zYyo5Xtd39Hn55x",
  "key41": "2a239bqyr7GYhHHWdy11apXrMayKK9bcgRavfLorJTizqaVTMFvQu718jJEPoZjm23VeREcrj8Zr56fw1wuWS4zE",
  "key42": "5AsvinbFAuNw8w6ARib9pMonksmHTuzFzL1upgPUa8NdmNSwMY1a4pTK9gb68jXLBfHEUjMSf5rRPkxdeDiF4sU4",
  "key43": "33vCdnUSAohB7AgYdPKUjxKGSfQbpsY6eWcaMJuQHs4faRwhwC7kQCyom3XJow8YKJUWc2gBg822VoS7exsP8E8K"
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
