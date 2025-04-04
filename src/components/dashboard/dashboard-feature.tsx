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
    "AtZp3bg1eZ1fzw1ZAsMvaTnrK3JSb7z7J6p8VKt6w1swVq4y91yreSTttQPdNJazFqyNm82F1i2zjsKvMKKuLiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uD2WmvFFv93Tvn6PRCu1x9kCUUCi8TG2zCWP3kCSD1Bbr6YyvqUZkK25bxsGcxXZxdf9aUKxrnydQFsaRKPZE6g",
  "key1": "3A3SbRLnVuwF1LBdYYSaWrrj6oS8AGuMg7fwN75EwdcjizqEyekQuRd8cQ8rzFzuuuZCKSheWPRJxooEdbii78uB",
  "key2": "2BSZcCp6EuNJrycDpZwcqhLNyXwz8CcSedCwFG8fBoUzMzYvW9bePcXo9ZZuHhTVHidTVQi6neur6s7u19VeY9FQ",
  "key3": "4s7tVnfYbAGTSE3dLEebr3MErq3m6mp7Fv5SVzHggiUr9XsLUR6gETVKYtHj1PCAmSkozD9k4EJZ8bFvBwRfiWUx",
  "key4": "2dB7AQYcsRsoqBtRLAqHCe7jamke23k53wD4B4iU2k184FLWvSE7agdPpWNiHainFbQrcm7rmwsk8yFb6qmmZ2Vb",
  "key5": "2NzcDvSrcT14T3sqhG738ZHxbAENsEpAZPnay1KNr7qYftTxBPUh6P99ATkuwFA6JbDmWJoEAVSywzU8XEKxynpx",
  "key6": "41tbPJePvRAzkFfzoprJKacRNirdCP8D61boKZ4nEdqbD77gCKtku93AfWzo1yUtsFoJEEVYuDNpyyFouKXyDNR7",
  "key7": "2DhDAyEw5NMUpcLqYr9RyYXAZ4AXj7AiRfba2vPDo9pAuRAtY5R1jqXAVePDXhVRzhQb8Satau2pWJHgeK89xRk6",
  "key8": "2fx2tzbKSdjhf2TfeoLaHPNN4cfGxXAnXMFyWbPT4x6G4cYBLsucfjwRxBkcBWr6tUGHpQEYziobZNqydcjXZWrn",
  "key9": "4TGkyEgomWQKJg3mbrHvNY5fazCLNFCBtvptAX1MYYx6waF9S5W3sGt7iS8LQWYKAAPuSwwVw3Lq45cw7keHj8AN",
  "key10": "3ZTMJFzuxeZwDXHTZbrAcnd66cWTF6kFiPkz2Lj2bvLtx9ekhpJ3dRArELrXyuBosQW3BLchw4VMPRqrKqvkqG9h",
  "key11": "51aPaxEnVNpNVsgcHfsZUdPrfBk3a1NdsxGHgEnje2f3w8tpJFo3uGepC245ieCHSrXSL4PxBneUbyEVoCbXxP4k",
  "key12": "49qiwXwebByycY9pvoNcGZkTd9J84H9z1gPwXiVjChVbBNoDmXscV8Gwh1NqkcR2RNqwg4fEh9tEMXKs2KDtyZPq",
  "key13": "492zuhLErguQryaF2jTuvTQYDZ3E6QWzbVvU5eE6c1KMa96uumnmYdiNTtTNzRFCMVbf2GVzvApFZYKeBMXRn9jm",
  "key14": "3yueRgwWA6LWveeCpgfgUef29J46XJGGCYQVqDZVVUuK9SWioDkX4YJiFLFRNEk1emqkLcML8qVFgo1c18p88NsP",
  "key15": "4kMpnFzNasA1cwV15G6AzPWDEuryhLSE4KJMkVAZfN148Jx4qNSiFMU8v73996yf2Vx4LNuaxEjMrMFjDZ6UnH5T",
  "key16": "2GzKZa55pPaTNomQPs9Ho49dY1gYWojPzRBkkqaAs3MtgtK4SieGenApjdpnrhjPKqt59HZgGe5WPmzuScALytzu",
  "key17": "3fCXHBvZoLqWjeebokQi2ZdHQr4mYL3UscKzRishfffcRrsAyKYPzRDYbXNYZTMtPXECxjpaxmsS1NkveiozhyXV",
  "key18": "CQcq5Kuc9GneUoudYWMQfiq3pxkmQScVHFc7UzCvVgqkdHwnBVCTHn7k8ki6PdmtJRuLzhU2o97EgAqmrikQrnP",
  "key19": "4Ceg9AJxfitoQEGaPtgV45KX1mKJ8TxVaspUD53kbcepYZqJNmhAqFNbNG3ncNXS95DzVGYU8hTUExdfXTyf8mKw",
  "key20": "641dmsf6MqcW9v3EEH6n5W8dbydvsiqHYNUN6VkVbCbjxwAW3JvCu6bLNvESAijaQc3LtMX3ce3SJhiqbeUD491X",
  "key21": "ZLBgug5Qnf3A3tAheTbCkVffYA5E7bYCLR8Y9UYvhiDd59QA8vLnmYsKV6mMjCt8n8rmvqVnrKViXD2UwgzuVe5",
  "key22": "5ePvAt8ZH3M9ZQ3UDXLXo3sixkh7tkUnjAkkN4xkuQ3dusrnLXj7HoP8NwSKZW5BmbzxzFFdhUzha3C8E6wEDM3z",
  "key23": "2uPGfEdyNm6iG8PecfaKfkvhKacXf6Z6eqvwgz7MuE7shScDA51PTsV74EDmCKia2CavN8knz4CG6HxaorVWQin4",
  "key24": "3Qn2zN8av51Er2BvbEBJGKQ3zv5BqzzjXgFTkQFUSbBjaP1pq3hoybZZRUfRv69fDPLKMKtNKhn4oxdMakHiLwHH",
  "key25": "4ggWoLp11QDLsokxaVXtSTojcftwf7maC2XodLbuY4H5AUwMrwsgu2kjUEVNHZecxSdiqxuJqnrdBZqcVVGeGnQo",
  "key26": "rqfnuDdm2NxTBPDKTnUFNeXB9jwmSGgc87AhQUV38TFBpsfwsu9TVx2RNvT7FxUsBmHUuVtr7qQPqbiHvRbDKHr",
  "key27": "2mbSbm8xLUjBtfBgnYak29YBB7XAW54C9ZQ4kFEMk1Uj4ZV55wbqS3UaJriAkSKRPd9dBxV9T2h6JidrDEW1Pk1P",
  "key28": "4zC9UcLBekerqXHa5XhdxXqQ8iaycWZTAUVcDrLq68MSwCXkbJEWZdjbJyaQ6Ghp6W4cZ7qg9FiAMZjDkw8cQ1yV",
  "key29": "WS8xuKQN7kg8YagW5bGYmpmF15tGp6e3VUphiT5JXo9tQFuoGsjf1LRkBbEdVoWhjsknCyy34b6evPnwKfTBLHj",
  "key30": "zXsDNJvfk5kQbXmpeEUNuM7U9AUoVGL1q4GdaNk4Ja5TpzkMgL2ausUbeqMzExZnTMfJdS4pCg8j2s3TbJwWcNg",
  "key31": "4bHaQKmgK67aW3JbgeRXrdaU4jAu5gwm22fAUPJbToPpB8C5CT2SzxPzNKxKatG8seFNmY5eSYx8s7kzAQQq19af",
  "key32": "5U41jZxSvFcMSWkg2ytfw1F1V5f7tzFMd2dEWcpUxU4saykfzoA5uNtCgcjTL3BDZiMVt18F7vigXAw499f7BdBi",
  "key33": "4iuXTCsXfyEHzEGtET8Eadxd4FVVvKETp4XqJr2Sh1YhHZBcyWyqEq6oAo6FwfPsN644TCHByqTRaUHdESvkyT49",
  "key34": "5S29bcEWENZ1a5K2x2P4QkwcGwG5PqVb3CYu9k3GUJFf1ow96rD2shYosZ1NrogBGpBw62SgYiwknpN9jr83wV5c",
  "key35": "xBqsvTvwiWjAEZcUuksXQ8SN38YU6LWtURE5eF4ahS2dBUaAorq5bDDZUa9HfhhpxmjTt3GYBiukHKQNVzs75jJ",
  "key36": "5z94UEPkr2NaWCqGhugVcUzmNGJs3imfhiy18a1bxfhwwK2jeB9s84o9JwWwWRG3vYvm8stBr3pEwvHtdn5PHEUf",
  "key37": "B3zMVYhwXKrKggNLn7c6uBiasdPLrpC5pjaVMageZTJE5BiebEx7eVe71KsyNv9usoY5CyLai6Gkvf59fXy3tCq",
  "key38": "vymMdgv8mqcmoMKnF3Q9G44qM5awvWxPuTmcW92picR3SpuLGgx1HM5Xd99j2vFK2FxoquvytxXPw8jzt5cJdzN",
  "key39": "2mYMLJybDwjZdurDyzs3cy81M4221n8NCn1ewHLcjdtfXYGHtEJg5RuvS6S5LuX9vuuYy1boJK3ZeAm5cmARB5B3"
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
