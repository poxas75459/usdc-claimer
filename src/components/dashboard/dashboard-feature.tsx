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
    "5o3Ls174p4jAEfGDRSntrdj5dNcfx2kDzGiqgeMcCA14myEa9Mb9VkEjPQi4YiuUgov17nYg1kyAYBb8hJbAypXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xa7pU13hkfDMgoc9dXMAMjRhpgta7TajAUjEJzB57Ao8jzmbJFJQXt6wxL3uKuhuLFzRePCd5EeKxVvpZGieJWU",
  "key1": "hfPcUL6GrvwivVsiG28r6HSGJ3YQQ7ow6s7TFQ6yrA71DSiCH7jRRNjrn2oUvyMgm9oZcVk1Fu2NdoJPhCcfgrk",
  "key2": "4U3Npk2ojUHLaR5QqdZFZBdcdpYLeTueY6WZmdihtBdg5u8CeX323vKrZ5o1MZ52ScajVETD4fqp3rjfhxTgMC4X",
  "key3": "4yW5e4aBWAnxzJ2U4D7BCoE2mrqPv1j8vFF9YZ6P9D3K8H96W2ouYiFkDtZejr1Mbmj6KGsqcs2pQ3tj8mtQuVMq",
  "key4": "2V8oVRBxf5jajB8J85RhVRHGnekzvAXTjJPGMXBjmN3Lfs79yuWQ6DsSFfsvsHeWzf3MLiKiQtKtc41qPnydmrHL",
  "key5": "4vfNLGaVciXFheP4D4DvVYvL3SAYhihV7wUzbPP61ewrvvCdfctWgT4XS4S1YtXqyY3Xi2kekECDiBHEvKbWPnzQ",
  "key6": "3TMBVASugAWM2SmT7L2imnT5dStNN618tUppzWWbo8XrjgWthNkpat3iPREjB2CUqEJ1C7sBjVmyu8WnpuFtDW2w",
  "key7": "5xMzJbsSgu5bR21RKiB2QvEv3tjQHw32r4EJQ3vwuZaeUZ4mUzRgSyBbE3HWxK477iGgq52vKBtAG1Nuo6eAxCQi",
  "key8": "4S3rTP4erJyNxGrY5nWdEP9pPdB9YdaziaxKgr2mED9zWR7AFmctWx3uvTPQJEBbwJoqZbZ86qXT589kwjNA38TY",
  "key9": "62ESt3XHDBWxHMch7wc5qUfpphUeASSVhsALrowuuZB3mhNZ5SJKTkgPnN1iGKYjSf6xjSHTSWJSPThQDBMefUzS",
  "key10": "4knKrqAVuT2jvPW4zcMz6B8T3tJoxxR6qiYGqzmMogyPpkjFrWYUGQ9tx67vaLDRn8U8Ny6vN4X8LNz5DHT6qdZ6",
  "key11": "4jwGpsuqPr629KdFs91UsajEFtxgNQB41kp56wKECteJ9SGKDBpTPzysjMc35g3nqyfrxquAsPYV89m3Y5SVzeL8",
  "key12": "3YU2FgYZaLmeAWynH67bAbAEqzg8EgmjrCcFWWPmdJ1FW38RWKVeA2rb1d9k1UsX8iURSCATAMA1mtrznp6Cikz5",
  "key13": "2yCWXDH2ADp6H9AAP371tgFdg7t6yrExoXkCpgp1JvrESbRs2E5qhhEy6fCuhqSBHpdP1h7kgD4Yaa5FPHunGTKF",
  "key14": "Y5aEdXia1QDd5BXsacw8bdgBSwaL7tzrsQG7FegvzPyjdQW4SMLyEYamzcDPiEAmDgP72jg3CMi16gCE2YUHYpg",
  "key15": "6rbh1A2beeEMyTfjVuryxxV2fL7odN55AZPn76PzWbS5gEGQYupJMWMc8tuASHFnsCyAvMeJ6w6fRaAJdbPqJvh",
  "key16": "3UsxgyJi3eNJsr8tHfukWhTcaicbG11QRHV773XBgsfxNhTwbxYNQysXigm2yZKn6nAizJvFfomWWrdP7J46WX1H",
  "key17": "K388DmxTSLfZxayQ2fnrsRoYUGjZngfJ9Kfx9KBwZRmBKCJxq5TCVGfSwtEyqzToLR8LsWcJYR8k1z5JmQMnC8v",
  "key18": "2vz2oP2eTfk4oLJXZTyMc6z5Dq2eA5pYWKveLer9V61VD7oVwkGMydox5VPjJ1CTsVyhBgNxJhHECMRq1EKC6xiV",
  "key19": "2a1s2hiwMnP7groAg1ao1ftCsXpch9VfEkD84MtmZMKHBLb3gN8KjcGpwXnVHvFzP8g397G67csL8mAUZ354hmk5",
  "key20": "4h2HyhG3ehSufuTicyEDW6aaeezbKCEeR5dgdvZDsWAVAmHdWL56mohm2sZuAmDft9226qD6LtzCuJCcy8U7gATr",
  "key21": "2nMxa1NFQpqzcMgJW6Kbj6zXHXE2uNnPyxFPQ8TEVcGq1pPNgMcc7babYbEzviJc48bLn9MKiqyyUFXpJLmsvNPT",
  "key22": "5uB2hPrCT4K7QHbqJextLw4xF55vKYsUjD8mWo4z39iJt2HTKseAqfjXwfRUHQYuccNfq9T54nHUo58J9e2E1D9s",
  "key23": "2j1hE5puC7rF6zUQV2MSK8uyqrUjrXPDQknhZmSfbuErzrAnbBHvTKFDsp6RTRtCoXqW3ijp5Sa6nP6Gi5fGe4fJ",
  "key24": "2WmGTmmEMDyhBZyU63pXvLJVc6LjAHnM9b3SSwwmuBkeQFAkH7FyBGnxxf8RmFpLeemaMDRLUFKH4yBFcDsd4qc3",
  "key25": "REsoMMaHvgUyB1oPPHqgtikXYHRcERMUw83YC7BuYL4oVKQEoNNXht3ecZLYayMHzVeNejtJyJD2AGfYek4FLxt",
  "key26": "iWJF9y6rG4UFjcnUxvsESLqKeooKZXdo3gcV8cpUL4wbdJPx7JBshVMR3EQCyJdiQeDNuKc2Qfk3YaJd2yHWngy",
  "key27": "2Q1UbdJsQVfQxaeFKVHnGECsutNuawtu26yKLvoV8CGjMR4pqNQLPgte7hZ2AGyP8u1bRK6aABQUqfo3m8VyB3Ab",
  "key28": "3f568LsWzXcV6a81va7wujK4VzC5JYgatuM3Z6HYjFmcv3uwCQo9v1w9CtW1VgpCmggtK3TFFoYsKF4Zr7zSJeqc",
  "key29": "2cwSTYoLvFUWyuCrWY1Jm7LuefUdKiAdZ7gB5QpJtu4h55tysFD5NQEi2KBkLbTqyXuCqSeecMbUW6uw1YV95jff",
  "key30": "4MmwadfbNLbYG8ZXRejyrs45dPHrwUWgU6N6a8L1NfJc6BsGVDtpLmmQpoKgLWjBQ4996ggiVVjra3JX5ncixo7S",
  "key31": "yWM1NSdiAKymjDG3hQhiwTDih5NsMFnWrTd6N2WJTurJ2DnZ5Q51JtCkQAab1RmHz76kvK9VAo6Md1ZSCzf3LSE",
  "key32": "4EL76r9KSTdcpqCantuXwc1HiqDE7rkFnJD7CJCMFWwp6zC7JnBeLLFbVxN37hEGzvZN7sXKpeaFREbWcfGRaFN7",
  "key33": "3QXjMzKPDXPqAAgDkBYL8Z2cizrMiDA47sqXvkMSJfudopDxo2SpfRxFL9ss23dUL2U6wQg362BkRQCn5hZynCPj",
  "key34": "3LaVb2xXe24Bj7U6tpwcFfvyUWqtt2fQqjEqFHTz23WyWYJcnrTQobEyFfK5CvJZdpe2ene4vuXhkLhsWYe7GYv9",
  "key35": "iuhN5cZ9cXSZiiADCZChh6jox813pZshw829Su9tm7fbpzoQ3N7tLf1ftuJxxBkLHGfiswNFjHVw1rj6EbCqERh"
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
