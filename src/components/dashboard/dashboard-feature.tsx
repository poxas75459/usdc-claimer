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
    "3GMvPp7nFYBccmpN6zgHon8XpNPYJsEvtiVpZgRo7BE6cdn5zurLD9Q1FrFHJkpyXhCSGL8B47pagcUYFnLFFn38"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rjfdhRRWPQzhdcWqesxmHCoQ5EkyZL1dmnjmbHmrUU9r1P7wwRSwpuzxUAMQGTQkEHbsQdw2meeqVDaPJM4k84K",
  "key1": "5y1rFTaV7xngnXLQwEdRNYVjLD7jQrXj6Tu4mGHaJaMrF7dmBQ7ZNZiZhSmLb61VTPa55GY91yxdHybZFDPqdh8f",
  "key2": "526up8wmWn3mqW34gSCDU3TayFkmDUUnn9sF2ai3Sdr7qua64fmwTqSQFwGTCt1Xkp9xhMWSW3vkJG72d7mKXiYS",
  "key3": "2BffkYJFNG17V8Ct4Z8LWD9cDf8dE2ZNMPzXo99dnGYH6KCceWrzU73ad6EGX3M4Yb8rzQVxAR6wjdQtDok1u6p4",
  "key4": "mGz5BVeTU4MmNS2mY91upQFv1L6sJvaq2HbFXxBZRyX9eQuK6GkibtLUNpEK1LSnRVJLf6JAQJyycKxTwbEb4Nr",
  "key5": "2PfeLbTAfgvPFcpVDL6pfJKQBazW6MGXsDYEyxo27AcQDBmo6GQ22PJnTszgEycQvLVJmd2i8XRzVkEpQLTUbxTR",
  "key6": "3XL41kt6Ew49mtz6mRvRJhYTN2b9PE4bVHwPQQVkgtqd4ytUK7MHtZ7risJgv6zMdpnLjAM2bC1CCmCjGJDKPF9p",
  "key7": "r674xr93MrUke3sxvk26pDkBbUfurTXBiQeuSqTKLcCqtJ4urCycc6EjZMTBTctq2ThVnQvyWCyEc2pYAXUbP6P",
  "key8": "2SdJHNZZiSYX6rzis2Xon7zsKiCAuiBBarJfqFTc12wLB9CSmR8j8NkKpptKXCfYi5SSJxxPnCRjKFdFEJCpxq27",
  "key9": "LJ35xcKjTVoDWk9CqL3miMk5B7bwoVmuyjruPSx8Eb9XcWT52pXX9qxg2x78pRwHEPmAPgYDhbxmr56bQxzSZxR",
  "key10": "4GW8WpMao23icNRR96ZNAy5YZJPibLwsMsFvduVUKxWboym9kU694VBeg3quzdAjLa2CC6tsFVHN6NJg43PYNb5y",
  "key11": "58Egi37aBCFW3RmnrDwB1Pk3QSFSMx2QFHxqMU6iDVFqPWbxYqsMzH52WbrHTzR2idmUqRBYMFSNHCLATrf976Vv",
  "key12": "4CyL7MJ4d5CkRKujWNm1KE1RXB9qGj654UApjorRZDWmKPfvKYTmWD4P6n7Kp7dbGJmtYvCP8RAci5aTvMQenWEE",
  "key13": "3vMeituCgfwKqkaCnxGeyyPmyFHveBDeAGu1cXZvqTawRBsu5hTS782T94cEmVaX1ZsaiykfDqMsZiknEe72omqD",
  "key14": "xrQekFL5jWEHVNs8FpKg5ZV2n2Qx5QZhiAoKd9jECtDqxgK4bif8tDP3PBkru8TcqHv6MRat55TFmLRaBF6K3c5",
  "key15": "7ZQPq7X2F3cHBvyGvzQgya8jpDEm8wvKUPcRhxK9xSoCH9PuZi5T6aXLWbtEa19U3fUgKQDAVjNuSvq6ZVUM6D9",
  "key16": "NNmV8dyLoYXLdiNAGuXrLNdm4dCDhjdLKUSWD8SmB9iTUBrYS9tJ1Kn6i93Yy7Lei2WT7PbnFPdWcZA6bT4rymL",
  "key17": "2xpHGGG2tMdBP1fmD6bjUxHjxbBrfNYvaV43tu9u3LJZBhcwodL4pkVCJE92t4NUpqdLSh2gyyU2P4G8xH9iUBkW",
  "key18": "4kwCE757mm4wwjHkTtLSuH9nDkNEkFj7g5jkKHxRaxuKeaB9wgWFcBkkueSmdKahw5iSuU4ZMjkrVJwbLJpUWADE",
  "key19": "2u3Keebo7v47hTyv5Zskktj84zF4jYPdtAcJyB6TdUf8WMsHn8qeD1fcFtqkzrGzDGV26KZqoeKupoy4Eyh7tcUa",
  "key20": "SCY1wffM2QbQpBoVLSfMzktnecqFzknHwkT9rsuWuh6C4hQzr87tXu2iXvpX7FqCSssMqsgm9R6zQAk9TSGhkNA",
  "key21": "1D4EzUMX4VZff9k52o2FuG5ThW2WT1ibp9NStfDMweTwsqnnjox7gpsZDKHFJbg8Vj5rtPHvTrtJnrXrr3yGbZz",
  "key22": "52XrHsUcesQsbNs8krQrzdgrYZiAStsF2H81gegZuuvGkvnbSygmPizn52aGwjxctUHBEQDR3JmaTzCAYu1XZCvp",
  "key23": "4cfG4iqcQG82cCBdSEJ9G6tA2BE5vmsFCThsEMo4AXxUE9CqUXhuqnH9X8qTsRgevsCokDK4VYwgE4r2Xk1Ui5k2",
  "key24": "4adgwRySdZYAVqsbEt7YzpYGVfbUdUJmj2eKgSDYSgzbdpQLKdzXrSyNb43U5jSzahf97f1BcmtPj1SQyTUBhUHZ",
  "key25": "61rxf76AVNQvGzBbgsNyXBSPji2Rdw1BV2Vw34uRxkdMxeStcUUVx1L3P5caopmkck2Ecqzkxf3SxwdPTwx53KKY",
  "key26": "28NWj7Y1C74jqHA1BQvbwxomXD5wsy7BFMi4YTE5gBFsP434iA3vByZcFhkic7iHE2TXwscLW1ZjCgp589yBjt8b",
  "key27": "3QZwndSAh7b8jLyWtxwYAV2Noqg638UjP2LCwdLMGCRA4WcxXcB6Y4aTfcaTvjdtk8EZqZYwHp21pbtsgwzA8eXR",
  "key28": "4G7nek8JGZxzMfsQv3azVufRm6XZm8r21PEeY4E552Bo9Hwp3KJERxTuY1fYm5HLFugDm8VkzV6rCaLesDNBGX83",
  "key29": "4u499nViwu8CFwi4BQuUbP2jKjMHy4Bz3uHXPyqsKk1Dh5d9HKiBCYSpn7Ssdci5xt3shhpMTBe1jLJfrrvfk4FQ",
  "key30": "3bHawL8khyoUhLDEJcXABjnyYciv6DseBJZJvG8KNQYCNxW1gckg6SPenbhVPy5Fa9kWCE2wwvCu54fcy6PGFh9j",
  "key31": "3Yy1L16uNHmxnumusGWUquX9DgecBoP15N5DQzdwSarUXLcjmj5vfgn4MxmhgcoiutmBzPdKCXa54UxsmU9PWmTx",
  "key32": "5QSCDKBb4Mco9dSDCoWsYjZ8D5mrhsrM7jYJcarc6CbNFt7FZo3mC5qF1bYkYk4QgyB3v1ETcQ6kq4Ysd5pttNi",
  "key33": "4vs9yCDvVeQwE7WMvQgQh5KZntdpTjBz798yHtz4avTLDNUNfdqTXbh3BVgmTMvHzCuZsc67Vr8LZPun2rRo6EKJ"
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
