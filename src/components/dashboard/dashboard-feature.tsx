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
    "3a7oL9DZLqLQJKq9wmGbVx1AUiF2t2a9TdDGbcwiZdMENJjKAxRA3WfcXsHnuEDU7tZSzrwYef4C3w7oK8eg8xXL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ocEFNSpmihr5d3eHawFhy9XoUeDTiM8NjVtUpzrs7EomBn6QujWWMNX3W3PMCQgCKjBNRawfkYvVpAs3geTPHYK",
  "key1": "2fVbqYuuJfmJryz4qe3jj1M8KMuHkj2ZZoFn6DniDqzkjEq1E3e6EpTGKw8MkzixvfQLuVB1mUPpa6Pbp8AJnwh6",
  "key2": "42RprXFtaNm9YcZQF5wYjjJL4NwA58ZUAKDGcYhuvx2LeoMmc3zr14AGmJvNbkBN43316rXNxzFrrKhkMePMqoEh",
  "key3": "5NECHCnJ1WESwFJvHqbjFzDuiKsn3msoEEtYoGnBkz3icmsnp9Hsiqyd2ojaBKg7AtAjTxd7U7iPb5v9qUpUmiUy",
  "key4": "2iqEdi9EytRCMcU7tUz7pmPs1e4EwFK5KqU12z5PmMNUvKTgQFrhXcBzH5DMJMz2zbQoVNhAsnLhiB2YRJwsHVrF",
  "key5": "4caXfZucpARFhJUAcXpUjapU6vgEPBJiFRJFLv3dJqUHNSJVdhC77k6uvuCUrQpSzzakmhKZAgu6DPT4nQwSniRP",
  "key6": "3ZkYinJV4AgWZX2oD8wCuYtENc3mKGjckaiS43UiF6fjAfUPNYERFb9ncjsnTyrzZ9SSW9GcqDSB4oXgd34LbzZp",
  "key7": "4KF5yqFTonfPsPxYoDDoReuhVNjBqjXZs4EAUDB12NffsJNeHrTDaycZLtt1dBYTcNiZA29QPgxPTkagX3XaMTfz",
  "key8": "2snWw51BCpijj4pGYeqACUrkMSibuPHuJQBwk9658hr7aLXCeA9Vo3rURgkgtJJLBAhNeHmYmBCQAQyrdxBHyyhg",
  "key9": "3P2VGknYQiFGxaEmksyGt5dfzjAADa1oQjbJvUDNXHhsB5e8mEh2mvMu27bwdjWQREhnQA9Npd8oXaytHEFDZySi",
  "key10": "236rUBrtVfUbw3rPcr5m3WkVafhNSVd9Fr77aK9qBavKAJZVd38uVyJRgJ78zcMQZPsbGj83ZmkfpkFLzKJPJ1x6",
  "key11": "2rT6pSWmuArXj7VcNP6RBh4ACCuHs7in3aE1oCHfMbct5um3vJe3ja9ck8YR6d6phhc1mg3uZr9JFQRB9fFszWnG",
  "key12": "5sVRTGQ3Wuwso2yKvzTMNjFqBeKpKfMYNcVwuMPV66xxaAFXFyMBsUmQajepNP5zVuGk4yLUvDDjr9QehgCNMd6v",
  "key13": "64qzy1P956QCPiWZSDKutG3s9Pe2eZE5MZFk3kRLoigxQjuygHcKSp1RZ9PAPE4Hr2RyccBZo8ScSc43ThKUPJib",
  "key14": "3PBbxd8Wmz5KKP73QbokY1w2w7qhyich2rkd99N5a1mwUSvnQHCYcPKUoSsSYntViUn7sBky298gRQUrfNnHpGM4",
  "key15": "5Bn3T1QhuBVqdGk9V7fnPf4eTZ3trzrHkYZgs7ZxETzrDDEkja62UAv1EGhgrECDSoQtQyxsjR7ePgBfycmW9cBA",
  "key16": "ht51c4X8xEBWg83fbX4sDdSQduFWEgC1Ptbz8rJziRZSSyhrWrmHa165p1aH6zpnRog2Md9xCZF1pqQpxuhrdxE",
  "key17": "GWYzyCjtzDFTY7LmdofJ5V5wEBFrDQHPEkbrDmB4HUK6Eb7KBwQbsArpe1hXXkMb4BuwwuqbFnChVNUBEqpjCxQ",
  "key18": "32fF7Rax6y4Y5VKHYCEhjpfWpsr45oW4g9vrJaajL6JAyULoCnSVwcjV2bxQnAcj8B1j7ZdXdrENP4VhaKgyzgSq",
  "key19": "4Vp8G8HTmVmvQFbdzBwAChek6LBELwckShzhAJs6F673ibGyvH8EH5oLJ2KtZ4jH4JQXoqFhxFcjF6SzXLLb7iz1",
  "key20": "4Zi6MicdCeN97jfRPGR39H6CUgKQeZkbZ8xJoJ9Vk6onNv1CCr9HHce25XRhdPUVqvw5ksaGYTQqETxsmuFa2dUG",
  "key21": "43DSFq4fndNKjsHtcsoxmHSWjfFWUZgkvMvJWLQhxJKNNC525qgqBxtfE8JQN7f1VDwwCV7gSXsHosaXoo4petaW",
  "key22": "5WCotZRoWdTDp8gjtPiBohEXFY9rTQPHVhjm9v9eFa7KUtUywcX9tG6KXfKEBsKiwbstnwFZPxV6ovrEoeyvRakA",
  "key23": "2NJbBEo3Q5rQ7MC6jmzRknjZtDdWa7fJ1be3Xi5XQB12TFnLxdeGcHX7P7DmxFK1jutPrwTx2QdgJyGPdjYr2sNL",
  "key24": "4ZgKGksakUa87zZeoTeMfAygcm4JscyKahcEMVYvEbivJqoXRWoSW2uRAdzFkMgexgZUb7nYLScdC4FQL7rhzJ65",
  "key25": "2RQPsVGckE95uxsdQHPzdcMLREE67fQKb7W2DDZ3pRYHj7Cue9gsf1EU7E6A8wzxxm9DXYdqXFumcrDxvQqY5ZWH",
  "key26": "36ZNwWYL3yp5kDdpEeDigHaKHikcu44XaNTdnjN4imgNUfsQr5HbV4Tabwy9YbwzRcxbTkwA59PXjxwN7b9Fekwn",
  "key27": "pubzgcVTMZpwrRjARDPyh3MimmiPRPNacaFT8VNYcvb3E1q1MWCK26TUsiKNSAHBX6prhkncuj4MxPi9xxCyo9A",
  "key28": "4f8Py8XnNf6PZcz17ZkVycfwrKvAn91sWuap4UhRobnbMzrHSR9eGbG1jFKUH2EY4NiD8Z3BdShHQZftVPJy3ZK3",
  "key29": "4xQWP6RHxcGG8FmX6m8WaJqybVhgvGpKaqUUjpoVb6HHaiqrp3vi6NhrEnPY1YddmK51Vv24zeC1L6Cxd3p8ugeD",
  "key30": "37pgQK3eXrQRrKrHmNrUooNFNNNrfARA5ntEMHeeNhqqBxD19HSFUYsYXBjTCh5oyoDFR6XgP3GMuBG8Zo9V74MX",
  "key31": "648im4cvoVMztBkpjPJ9N8BaP5SnDJDvkDWtuSvjXpoDZQHsQxxcZe45X2YJCTL1xX4UCeQTchreZjYWnXmZo3hC",
  "key32": "4C8yKjU6Rc6yPoZxhy555KjgoP7Vf6z8GLfMbMv2ja7WsfQympiU6GMXHJzY1PLxVUW958T37V8iZQ8PhWnK6stB",
  "key33": "GU4hZRQtFSoHwRXg8udvq2wtUGBrP8QKHmrQbTQGzUpz6YNGToDmtXTbaZt6wnUeFzQVp2jS92DKpDZt6NAqbcD",
  "key34": "3Dsozr4Nw1KGAVyE9y1J6SAqWtMHiYtjQj7PWLgabsFdnJZmfypEU1Ub6d5W1ZFEUcEcAsRehgXXvFrYukokzMfR",
  "key35": "gZzvCErh5Lxw9HhSSKuJha62JA6vTPdvpPBBGjHgRxCLRAVAYQ1Wa9HCmKVMPosMkooAJJJisfRkz72S6uW1WvM",
  "key36": "5r5Xixf1e29TU6pC5YwUsoNEre68B9gmLAXQAdKCPBAkxePy9ZDi2MRzQ58jNvB7zoRfudVJUQNLRJQyoC2jZeUt"
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
