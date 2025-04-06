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
    "4rx6V28ggWTz8kDcD6m42SqL7RjQGKuop5s2d9Xt2ZS2y9bVTForLKWhiXrFRoPq67EifNajjy5KmWbWwU8JTzdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53VojcT1gnbRHwesU4Roda7mLr2VAbnEhRM6AFN7pRoty6G6tq3AVMkRDo92fPTZq5KTw3DJEcAtZKnKRefokt6x",
  "key1": "2k8FTHvU1bnfh4ZTaNtpwYoYT8NSVZW2tmaCAfHxJxhY5WBZia6En8JMmihXgYqE5SSFp6KDRt3c786aY1DDX1Ub",
  "key2": "Bf3ySZBbVx9RzXbVraAhVrUTMaNEDPV7uebBNgFnNeBSMYsSLxfUhJaCvt2ejBmoPNWCvaR8ZbKiVpxNXdX99GW",
  "key3": "3fE877wVVmR7e5ZKq4GDm6tWjC99CzsYhK2of5bnzJ5Zy1Py6FtX2spGKA9gaYKRq65bNr7RiR8aZZRj2FVHTHAE",
  "key4": "4WHoZm5wuWYvAnyedktk4atBgjgnRj9PFrgw8mqKe5GhebXSAAUrge7z32AKahQxF8mc8eteKEiF9FyXch41usjP",
  "key5": "2rVXNyKzL7UUNEHv7KGXTW1ib2EqVdsq29bBivW4LDsdutMbWQ7TNJW1bv1sY6SzzspZVHpeQt4i4xRDEoxXWycH",
  "key6": "3s7m7Up7PQdtxNTTThnu5TBraHQM5nwEnyMwAFLeV7R9qcUaS4hLN54wYU5brFJKSuxoF3r71UUXmm9DthGv3Hd3",
  "key7": "mp3tKTZuYQUFEgxF7LiKB7NVHbzHTBaESpoTLyGWGTdM8MG6c5D8TVvhmejnVf3bvSN2Sr7KbaX5bsKm93FyXLc",
  "key8": "2xiRwYsLVrAxPddmNA58z47fcWQetwes67aKJWN5TSYapneYtnMYXcaVVwdeT7ZeMdCEHCTiPW9psaDEb6GCpYbA",
  "key9": "2KhabogK1bq9pbD8jGtmyYcmVKRhfwRA2bVDjFbMJk2e7pQLiT6aeqHxGEDnPn3pZFa7uyLz3tAv7bDgnmvBn3JA",
  "key10": "YZHqzRyxEhApMYBhFSiyLus9wHsyq5HApPFzt2eAEgCi4Vgpn5gKhD9ZtHYvigH2k8t4VEYU6f4ivp1xXVg1JeW",
  "key11": "2NgSZHeygRU1KnkU62Uopeg1W72ZCQbPWCoojJKPrwH41GzRZMKoXJGnonbSdab81J56Ya1eTXceg6ruoy62bSWC",
  "key12": "8KbAXzEoorEQ6xFD6Xc4L4jJfX8GQHfxmy7DPWCc4tddGRW2gUFYBNEiCQNmXbRfRx3goEzQXsrL1obJ96TbGuv",
  "key13": "5eraBsKg9gDfHPtsdmrgsqWsB3w8jWfpUUHepBUqgC3HnGemvsRmKX4Tk9NzvsjMB1cAm273s1pz37Hyser6GM4s",
  "key14": "3GCavmfnFoVi7deE82dpZn52tbXHt2ZQaxtVFfXkCUiNuxfuUJwNc7g6w2gjtpwsfPA1wWMq3UNK1nQ1RjRirW7L",
  "key15": "2kCZ5g73yFWuR3efTGyKeL9cThXSuUPytngNLWZYJUZHbk4nsXZqhhjGZ6BYZZhmm2dtQTGAt99sgsKJpn6fxkGh",
  "key16": "5PuVc7rEjYciavHnmBCJtLQf82vjmzJ6kKJ75QP9fHRWHhYqbPFFe2aoWXDAxN7bT2YbCP7n8kUxAcrrDAJhwTw4",
  "key17": "2yf9AnwBnzTmWBSVN4kq4cQQ7UBXBvA9XBx51NGfDFm1rt2SyyT7NMsvPBe2LbquGM24GueC6wmqXZk67pPPczg1",
  "key18": "4DvMZHNWXFz3TV7MSiT4vB4PvZoeg4u7DrjYqypK3avSauujdeeVXzfg3L95FjLFq3Kqr5v2EKoQjgoghwgtdTYz",
  "key19": "4DDAyrmGiVt3PMgZXD6Uae1nX39deXduVtUENP4osjBuSPgmMvWA12CCBsVQgFwhmLZ8z4yEoggdH1ihm7NFh5Vn",
  "key20": "4HFA4MzjW5wNzsWvcTE5NaNPDyLJNyREiVMHsaDPwHfQFbgZde7LXAZT8CQnPPY9pooBXnsMHwWMvWHPja9bzJ4P",
  "key21": "5w2VMNXy7PCW5apYesL4oWk6WiaJ3ks81VRAL5phhsfMw36WSG1eK732E3Gv3RKsZFubytQwNQgsUhkajAAc2h1Q",
  "key22": "2pKoScA4PidReWm3Yx3bR7cveNYffWTqBegepQKJ5ZRXxCeHDAzHD3BeX9b66sfMQYs7BvT7rNTip64anr8SJFZ4",
  "key23": "3vjDuimA35PjJZxiwAEB2XahLjoFtPEFJs38cXr11NvgB9CesVGHyYtTRYk292RjbwGUNvWz5ESffu6LgTDrwaVw",
  "key24": "5uYnE7DxfMcPDF924aA5iBjitQGjbt3s7wiEaeieWoZ8fnAztCt2gbVL63Eig7p7X7rP3AscCw9wr7tntu3A6Wtk",
  "key25": "4kYP8ajkWPhhMstgFXudYPtY8dePKAGQVkBWZe5fG1XNG4MHP1bVmkzbfqnjPmaUPBzWxpEAzwqTgPFoe1jifmRN",
  "key26": "DrUQGbg8xWriZ2snWypRK3GvkPFWbLQmqaMdJteo7Qnrx6BjagcjjzzmbuDXar7GmPjJsVzZDf8KgWVZgmDhDsr",
  "key27": "5YTNU3V9bg1dW1BM1LfswpHp5K5ebVXkAs8yAkkhxpkLoNt6fVdSqxG6JzWWe41aZsDhXqg3r24LMbNznZcd5SXk",
  "key28": "y3GpyTRbQDv3eo8DM8tDwimsroTNPxH94QFrhKnFSha1GR2BvLgdZeeuwDh7UrBsw1Cc69hoe5DjKHZvp2AVKmD",
  "key29": "2sXG8X2bvqjvipchG7YumHVQtSTRkpeBKy4depkDU3NxokXx8UPh1DqthfnWCRnhmPonhsWubDtM3UdW4kfKML2d",
  "key30": "47WU7TWJ9LA6ar7ZS8eJafaxd2cesLuN6GBNgKymR7DWb1qGZhb2sYuhaUXaviYEZtT2J8y6wavRgYQQufSrMqoT",
  "key31": "65TwYADmywDumFLC1xDRYFhBE9Wa114JczteCLho7TxwQTDvKsYWAAwQ6qXJW2XekqstXzNFJiSs369iNo6FSwaC",
  "key32": "sqvcCUwbxtTPB2mFz3B9uKejo2dk1hYyUAMVuAXUYGrPi9J6VVS2HVbSMGvm2Fjxxc3MLCPAETXgmGb6y4SSr21",
  "key33": "49k5JLsNWx5yA335PSUp84LfxJeaPHTYdJcxMsMhMJUtGbgorsWWmWj6UTsjQ3rCZstsHB1eyCsZxHh3dzin6Kwr",
  "key34": "4gUsckwL37tuMozQq2RvuMUekJyAafGPJEdfV61YVHMpKKKubvESbFZ2KeGFqYRXXMiiK818B5zJwbZVQT7s7dYG",
  "key35": "3u4vWEFbrQu8MmKXrBGyQ7n81hHQNTsrqLyUiwk47uQop7KPgypcC2Hmb9j3y2ponzLsqF9xFj2QFMHhhwjhyprM"
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
