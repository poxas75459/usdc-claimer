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
    "54RXqTndJyroeB6QqL5qVCDerJBgXMHtDb21LTojnHnT3yeWjxSAyZMXf26M6VWUeAehXiGbY7XtBoWSk3eXaUW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DwgsWD9utC9qpSDoujXSH6489E26z2rTyd959vBmp3bMxzmKKtFfB7V67Sujh71Ar2RbpBaA9LsCqVZkoA3JMaa",
  "key1": "2yeTmrZzXX6awoMkdt7cYjeYqkMnmweiNJedojVCAiPEBZC8qDwBcGokUwFg8SX7G3NFnCb2ZMUcswo8PaY6WdZC",
  "key2": "4Hwoq9oiPQBGGYYE1ikNTT7cEddNi1rTPLqN7ASy5XN7CVBMnswojYVcn7HQL8wykGCc9NbiHMuYZiexVZ2efWZU",
  "key3": "5B71mK5vuY4VPSyGMkt4DeRzkJXvgxYBxJN4GL32uu7RKk3zd8FhNrLSw1EiCRWQPrTic1TevJ8aKrkCDnsj4ZDa",
  "key4": "7TvAxwrWQAmRFSpFrF55N9Ce8zerxga4ca5MXaWbfRwXH2WFpTBYm587kP1snX5LPfDwv1xSTE3qjP2nsUeMGXz",
  "key5": "2tdXmJxMMRuNy8AzmT2Y5VD7LWeP7XMerw7k7q52CngEpWajTjwD6NxDWsjjwuPfGhGaGWJjDxbdG3vhYZoGpb6H",
  "key6": "4WuWW2RUqnzaNcpQuEH9tZeRqeXtv4RXjjoKfiEHNV8rCmJtbmfSfQAQnAVfkQYD9hE8wbBz9mDKTSuzqVphrUoB",
  "key7": "35cW5tyiVo75ub5U2Ua8oUaCMov5pBxSmfQ8z6H4RwGDDCNG188utTf6mQXj3dKE5YMo359dpx5QeENBouXVoZmR",
  "key8": "4Rzmr6DqaMJWwDCV47TFMWUUJRQvmUQ4AS9jPk9yWAEKrS5jTwXozLSjKZDnGY4n2tEphDPwtQrqd99cq4vL5B97",
  "key9": "32VZ8vsmwk82DnKY9v7RRELunNLxNfuqow3vUotgXWVFfwWjqrtNMA8tsxkUMYEB4KNa7nQtNML8NfPhZHX7GwDA",
  "key10": "3ArqkwRn3Aswcu38z4qky44XHV1gmmtVcahEJBHMQb5ieywHNNXmXDkFgSm3mWJ1L7ZrQ1uxa3mCSQ8UanTxjYf",
  "key11": "3a8yZB1HPoQpbCF48mPZM82BXucXzHQdYAxxtahwmJ9zeaj1sXE6cz86QYxFYG92tSXFZALN2YotbkU64TTaAFTT",
  "key12": "Y1bUmEFxQX7TbJBZTdLtrYNCC4nHQCeRYBPs9A7YSuTB9QNfNPPBeRhJeyH4peAzntBXRLyN3rdHgu5a34maDrh",
  "key13": "XhyrGdm3snGmT5rTcCvXDgfvpPq14RoLounpE5j5ug4MYiH4JNq3u9smuj4ZtDJ4k787ZWQeoZ44LCjou7uvM45",
  "key14": "BTmSmgyjctcktuidx5CtyEV7W7tcZzc5dChnjSUo2JW68GDRHZXS2kJB2eaKZWnYaCavEoVD9m14Gjsg9xxja93",
  "key15": "4cL3Jrdyh8C8DGNpYDfcPAvS5yBe7sRMoJoiR1Z9YmAzGpN3iQ5ERyiQi7w2jELzb1uxvKGMYFtiSX8cytXAizaL",
  "key16": "PucvCtDhi7UwMHhbf8Vr9jbjSyuuDuNEQSVS7aJ3kvKdqoyLTA2u1yMc1SUFAQvG5XcrLmNy1HAt5PHM45SWNX2",
  "key17": "3FCsiJELZsFLFJzUTpkXTpBdNhwuqPzHq2VzcaNGF6rVHXsoaSPNbV8DyYdN42bH32nbboAXZtzjz1BSUjNQmsPx",
  "key18": "4XWUihqJvHNMmZYAmnWd8THm1Lk4dhHE983D2if659T7tsLBs5ZN8obUUgmfrezXkvtaamkzV2DBs4aL8tq9QicD",
  "key19": "3MQL3veSFW72kr3oUJuzZ3d2pN82MdQYL5JFXggWSJtWs7iZXpifxuXrhb9swiU8aysDsfSyGhksqbLyawrqbKyd",
  "key20": "34f2B3e6Gx8hJ7GwivTADBU5JrSD1Yepw1EXdwPjzS8aQD9DFpN6SxkfwNGm8YoysoUyhAZWtAfK6jfs3TZWqmxA",
  "key21": "2A7wFavqDjuYyG1JT5aMiQGvCHJ8sHFXsrMNUHbyTPioNvHC6qRhiaTJffMJ9zMJhQhZQe6bANt4YkXxrmj7aRMN",
  "key22": "AcTkppRpLwZUMLkjn1LqHwpbffrmhchmFyvjYSzYw5KY5fesgjVEucDLVYcQ5BB6mYgkL765daVDnqfSupqNEvw",
  "key23": "2w7bfCBQdF5LDWsow336aDNDkcuoMLMTHLipcnjZqQMPQc85XJ9xoZ5vkHvq6FWnPMBpxfXAKuUrddcYS9FLTtZE",
  "key24": "4y1peuepmqwDgLcRkFMzrwh7v1qVSxivBtmAS2ejRoK5jF5WcLoPxzpW7Wr26Gjs1LWWXMnmc2DS9nqupPQ2GajG",
  "key25": "5YVyaHp4kAvEsTKtk7KA5WNMrohqhDdHqi16NysaaXhwhfUgD5KdABgNLqMmQJM1RhZNkitKB1wgRcDuApuyvt67",
  "key26": "5jUucAxLGw4kfAkUTcAAQFra6CYmd56ty2eQ4Qji4VVoRumaSjCLCxBbdpiy4AgFjGmwxHgf9T42FtD2GTpFqMY9",
  "key27": "353gLuGAyA9KD7L4JHjdg36ukTscwVZNxFrgckNjRnYcF3x67XAorcze2GKoGYGwiwdFRbLrfp1tbK931Jof1t8v",
  "key28": "21ab3z4ukNf7peep8Kt3saRdnMgvaWfjVpw61tcsvDeAXq9hiSnQr1DWnSrcDEsvGSik63vNNF8akffKRsTPPKNF",
  "key29": "3fmTp1CiAYEmBvPe3YJjBV4fnJdyhpe4AKtM1TuJUHM1CV3qNNVqKtMnsLp3qJLmqJHnyJkNy4NzP6LKubc7Wvbe",
  "key30": "Arvnn1V87koP7EPqCsApQYcuTokS1rwwqgx7jPq9uGrZAcqHoBph8H56xsJSX9kWwU6AwT446eVhsbGkK5UMCth",
  "key31": "63XBQtvnsn5yQ2DEoQS6ZdMikM4eYVHXkEsxureryisZfCed38F37eB9KVe25QxSB6FB6k2qibUw8fGxwKWiScNd"
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
