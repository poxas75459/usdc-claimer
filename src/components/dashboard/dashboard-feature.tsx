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
    "VKcgkmTGHJ3nLbT1Pc7gUrcNUtxJspv7xDWREK2yV1s9Q9wASWzwt6jwVvMdDsvDYmaVAExv4GJzeuKgfyKTizn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mqv34TciU74i7tZxFRUuBKjgZ1Rr2VjenugYYhTeoEP9YZkKCDVtsxU6Hwweu7gyx7xm326szB5xNEFZhXQHgLY",
  "key1": "3xigvs6kuxDNkY6brcCrGQue9HVqKx5BcAgxkgz25C3kN8xHX7L8FJs6ZBZnLyYkNQiocYYsKsUyUQozNF3jiFXc",
  "key2": "TwjuQ1xkdzUVt71Yfc3uPzuYfwLAnoXVhY6cFJNb9PjJuEXSZxwmHPwpZrQ3V3MkjdexBQjqkQFmA9MiRMLHKLz",
  "key3": "GS95fBqNfAq2PGtb9U1aAy3TgTSo3tnkBKYfUmNi4iUgPdPPvzo6aBigrffyFaRovSt8VhqGzjFK5nD1dugSpGe",
  "key4": "3ztVfaJhRzyW5Tkra2BPT4qWLzkszbYrUGe7rKGh8R6PTgMeJvZt7oySnmeqirEypGFYULAwt9pRopm2VehEktAX",
  "key5": "3cKDRLRERei5bZycgm31fnQqVjoC7CYUNvMerQYF1ibeZBhxeoG8WtheX4NSojDd2Ngrfmc8dqcpToQJNXj1LRo1",
  "key6": "FUCWFTNj2RkPrKF87qKFCg1JgrWLuh5iwdiSGJQxAMx8Babo2cUzAntXbEZPidWsm1L4iAdYyYVqhwEek9dS8NG",
  "key7": "4MNRCEVq5rwX9nkpKcUSb6n7UEK54X6VZVGLakwQT9nj84omMXJ1kpqVchepUj4wpAykYYKskvPZ9B6G9XD5Ztdx",
  "key8": "3F7SP99cDpPnVkefaxotQgCjybPeyGurZi2WU84jWimBNnVNViaKwgKdEU2xPobHAgQPBYgoR7UYTowRuQebktK5",
  "key9": "9g3D1pMGutoJiWXaKNWDY6K1WgcEYTBD3ChXpvjU22khymFt57X1iMDBsCoirBXup4c4EUEdqju72rZ97Pa6gPZ",
  "key10": "4prSa6DPBz7iq7HfUPGKVczMpJujcGXsHGDsWaVKheCK4aK89tNzR9E7aeHDgtrh8R3K4qxb75pCEsij86wVGVVd",
  "key11": "4hhrnhEyR5nYrEF7aX8ZrERog5AAmvV4ZP51gRicCxWYBZGzNJM85XyPproATi3MJeBuUdDnQEko9MdGfTxY1tfd",
  "key12": "2Es6pzrtfT1RutdKkTX2ZopvPVyYy1sCYUQAtZPu4fg7YPTfuP8hS7sVf3Ga7HPx727T6zHXHJ3oU9doZPXi8R18",
  "key13": "459ta8Ww6Kh9wJKs5oSdm47Ni51Fgeo6h5rC2tNZYDn8ro8sLvR1EZ6h8niy8UiwoRuWHvnwPjYnw9fSEAnFHZDK",
  "key14": "WjvihxLjGGJTQRrgTfNw2N1LEGg7PyoVH5tK3FugEa4NJAhMbH8hJ4rp6Van912d9sszFGqDbmwingnRPMKUW4n",
  "key15": "4y5SqyetmteZ6Gu56mhTgdUkAccF1kZ5MmKbhQQ7mER3HjudZFsQvfUxisQ3SkYJHGNcccRT7Lg3Ao6qDAGbk6Rp",
  "key16": "4cWygSMvHzS9dWBv3TBn1WykFH9JvcLZNzSVKoGE9yKyUPxHFurbKZdoXjDAqdGxnZ4zaTZcuDTPMmVUnmbDKcmn",
  "key17": "45s6q1necbtWcapnampEc7pcc1EDrrw6fE4zYe8DbJLGLhzHDW4DQG6wxK77ze5u7f3Jjrzc6nAzhqwCSbY9VEEk",
  "key18": "329geaDjUDfqudqtQDdJqDQVvTgknSd2wUo9RGhkBDZkJaSzTDPbH7JeSZ3ZkcMykBtpJCVmjTSEWM2NN8m42aon",
  "key19": "2VvoE3JifjeQFFSQPajZkPH6xHWuXeYFwW879Sw1rBSCtbHPeRsw8ivEsS1snwPezvfynXwvMuHfYhD58MY3KGTe",
  "key20": "5RFZetqAJ5YnwZmXSGb3RgHjoCKoDEEiGvQsr1HVqBn5Ua1RL5oR33aSveUSiD8A5SWTeiLyyF58ArYjSU6C8cfw",
  "key21": "5aR6PyKxX2hQnykNR32ywXKFXvLz6XFMNHyWqYtgWdafAMx3Xg4d6c6fDnkMNosHJZQGPogVofFYr7J7TDBiGQpF",
  "key22": "AnDRwpTTuofWwP9guXEoPKbzdu1t3Q4aogtXJgMjhy6QDCFsCzGhAJBdaM68Hvz5C6aPmQJ2dsuSh3s3tmkkUgw",
  "key23": "2hoaz37voy3hYVNYjSejHdLEAeZyRw4kWuUPRdqpbnH1Kjnp8RhhaN3N8UsYSuT4tXVpqjnEkAKvAVjogRb9XyCQ",
  "key24": "3Jor4cda8e4aF99fjAQU4tAsPSEPkjKEcAXAx5NZpinLXSE4aZXLbVwcyNoegwbSitCZf18KkVAjJfMKFxWXdyiN",
  "key25": "4ZcMuzvvTJdvDf3RQnHGVzDuy2AsLMLnS89SVjJmShCMHWSQUwqbSuMMG9u5FAkmGDUoHjeLnbG7PSFpCthEsPoZ",
  "key26": "vdv3UFZrDQe9LYHMcL523AP7Zfy9HsyhaKDgbpJMpGgbJYW5tSNoq5wx7AAt66yC8LwqsbHmJzFGFPro3742CdQ"
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
