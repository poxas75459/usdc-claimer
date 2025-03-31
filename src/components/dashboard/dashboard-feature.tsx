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
    "2znJmuxYTZkZX8FhgjUW1a1BgQkSjJJQ3A8DXN5FoezbtGA7NL7nBabi5nuoGFSPxyFiuS8cLUUUqXujkJtmWB9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sMLU7Gi2fmHZSyrc9PCfGYEiYw1Ki9MGvcfG4Arkckr4aWzTyY98cq99fcw1pKxVd5idr1mPsjCZCHBKDnXx4Ca",
  "key1": "5ajJaXvRGykXfjQ8aorGMAiyvJ9qgkZ6XULG7PHMFRxUvd1AxkFLxD4rND6NL7vnhFCDzqZv9Fi1pJ4GfQ9Z7gNN",
  "key2": "2fSFmEqReaQKJEyszcn4P7diBvCc8e7Q4RksABdHxWZSyL7HwtEGTC7kiZdSHt2HkGKKgWxhmQZc49hzBahk3Hb3",
  "key3": "HUd6QmxPFRwekWw8DqrQwG5zVAgVTLkhkRMwFP8YtFLnzGcWnDrbeY2ovP3zrZEYh8iwhGZXtYKzr34eJYEDnrR",
  "key4": "WmLvH5cyF9tqWA3psKt4uX8Dys2eQTR9AvpQDRH7eMoRdve5n788U4gcWm65RjRZ3LL9uivftdZwBEdAu5v1Fiv",
  "key5": "5XeTcNhAfzfeRNGo3KEyD86gaY43fLgprQex8EpFPtL9oy5fe9hk9n7rboeu8ungqxHrUWWW6Qnkgu3Dz429Pk9m",
  "key6": "48YuxYoxhqeRAUHL9dwkwVMtCq1tdcUsFV5HGYUcSzaJoeynYh7SgHT9D2wgmNGLVuGwU9VYcbMZoFGwdg4ADtnb",
  "key7": "28BnLGw85TXXVAGfcwg3Vkg71p8dAHyZZccXVD4EdeNV2ro7ZLAQ3Td1X98YDM4wdT5KkbjjYAk8uhrSgUb9RACC",
  "key8": "3gwRZmyrvLm3xVfapWn2653smzieeuKjjFS5WjV6ba3gL8B2MovBgHmuabUnz9SEYmxh5VTAuJvuTGvVsa4wpZfJ",
  "key9": "4pMtKfQpUTK61hxXxY3ogBYVkLCobvg8yKNeSLyz1nxFx4TQ3R7fE3rrCPoNvneZKmp258sAsF63kq8NTQ4ZEode",
  "key10": "YrxyaYZwtmUDqzPzrL5F1FiW84fHZQ8hRXFmjX6GbzhrqSsKKQtfd6yz9G29UWrmfUnbj5JAwcB3SEUvt9aP2hc",
  "key11": "44b8ZyPcfe7YJLXLgzqc4BMeWtWE7cnzkBnAjf9zNL1KGS8mPMdSB6vjtiSW85Yi5bU128p9a51CvhwhnkyrFZJA",
  "key12": "24SDxcbpDw9G9ixRRdDhyGPcEnWUoEJgfykF4i7DbeTu2rbE9WW4Veefo9UoVjKYUzSbV9Xr9fg4WNQw4cf9C6xC",
  "key13": "4SEASszP1Gok2sp18NGh1rShvazHbgocyQvJgzvx2qT8F6LSexujVgEUkVYS9qEA56wWXTA5LumpFgMmfxU9m2me",
  "key14": "Sn1yo23ZFHvHuHfFiTpQY39WaZb7WqF6J2PXLVSc8BRp2opG3xXiiP8JzPWcDhHHyfm5LqEL5CaZEQU5noLT5GB",
  "key15": "66JUVQ2z3cGFw2qgyPRLLehfLkTBpWWatmv3wdvMsv92c4GbZAzeaS9CkaiFim3nLw2ryh8Zz87DYJ2dp42X2JZ9",
  "key16": "xpvYXZzJ4kmP449R33T1sCH8dgqy7CvAWMB6KhwWXBxHj8qrFn2bX7La1cUiWEnJGeX1tcnoyW7RFDk1BZXasBJ",
  "key17": "2PK85yCLR3PZC7MnDcUon6rXjDKppvsufnmxW2aQ9vt99XnkM8zSfLwVzzLFuDACWMAvn8u2sUkePESZxtWQqXsG",
  "key18": "4d9hprhhg65nAAGATnGKwx5BGLtoyGQfoenHZ9ShLuJ8CyWLtpzt1eRqHrNKRkDGcE1SnSwxVsx3JRMny2iaDuK",
  "key19": "wYkg9TLk3DjQmzsDFf64eV7LNFmhKeeLePWdGRjJUuuVxzEKQvXJNAPBBNqJ78GtBDg1mrv8kjhqKEyGD8TmjRa",
  "key20": "3zzCpN1GDebZCPZMhGQSxhU9frwKDBUZrD2N1684iZNK6UhoACvMRod8kvTia4xVku2UkaLkzjs3K5ZqSYJYVzH5",
  "key21": "KECyHi9fQZdscZie6wEmktStCzH5K3EQA28nYjm3noeXT1JgiK2RAANDSqevVgy9Ln9AonGQaVG6Cb6t1iWC3ZE",
  "key22": "4c2YDig1awZVLUqbxrCZMpHFPXEf68tJBgEhTDip6FmPgqMPfGVuE4fB36cXFujzeq1dgEkBewBthNZtHqG7wLwc",
  "key23": "5smdD19C6QLYJbdvqzBiksgVNJhV4nwMvQCuvRpRbcsip4yPLKYe7vKGtQXcCESjiAm9WDzz7yWyV1N9WoZ6nmVR",
  "key24": "MFJbBMT43MxN1D27UNJVEbFmAHTZMyT9jr1PNNGjPnPNGTjEgwTRNZgbms731A7gpoigHsCZrkU54QF9xw2iLDm",
  "key25": "2AyQNLvEoQUGC5UPwXpbs8uvR3dw3WfGCh5QQjqirWin42KdyjuXDaygGkNmCWRnireyuetrQN8HQZpbpaXrEows",
  "key26": "38tYy626EmX31hD1zXtfi8dj6JNWihfSPDbxNh6ZcTwZSDDFmFQGRHiSrwRevqbyaeyHach6SPjdzg1AYGKjtaY8",
  "key27": "5nQKYAQacjztWA1zUL9oCfgQe5KzKkd1r9V6x4KLWxJVdHhjha5GiHVGjDNdnthU7TfqgrfDqXgCgfQBYCTKJKTp",
  "key28": "2EDTqcjN7r3KwUqDG2xaveVi7DRQfa156wpq1acvy7BNHtcS73urWYeWReSZdmk1AvzdC4utCByuU6BG5cWYGZLN",
  "key29": "wCVVVKV5AMQ7yEtSi5WbtgMUHTvtBUVRjxxV9GTTWqAZtGJsRbeKq71FBgjxJQK5qRxvsdZzyAt4qr17LL2Jztf",
  "key30": "2DB2A6Khhik1g7Nd1AKhhum5nAvZrGqBEvF4iVMrGDFcei8xdSz6M3eYN2LxMQtbumMdBs3ySkXv6UzZiewYEd7r",
  "key31": "3fgU48hgPzXCfQJVoSVNeBAnDCX2aHxpvMCN68hDrP6jXASMv3vFvUe2EjoX4WwGzoqWXEwrfF7k23aVgtW8dd2P",
  "key32": "AgW1BG3mjbEvehybkAmRxsDuqYkJqiYtJmatFTjuFAkBYPewK9k2fuizwXou6nmawQZwH2hF1cADjU7jDLZwbSt",
  "key33": "32ieqq1soAKNmgQppFPUdtwj47HiG4M28oVjoeciPSwf9ZQgfhxoeBf1ZfuEUSc2SryTnzHPPJPXgNLjjcw22Z9M",
  "key34": "2bshRj98ywyfSBJ33HH2QCu9HwRGkibqr27LX45iEE1wphrgepFyqEfJRTCtmtRv7NoVsDGg5hDri1v8kMBfnunB",
  "key35": "2WdaSqZbcgE9jRRHChzf9pKtsmVR3Xi1yb9C3RtaVA7p59vfRKBa8JdxRHRF4JyovCdap8wrkatAz3iXwBjH54wp",
  "key36": "7Lqh4PbLN9ScUW6rAWgCA3EV74tLirTwg8DyZnAp6itWRE3eHKYsn54nhgevd1nmGuPNZJfH9m5Wuc4CXFrzD9N",
  "key37": "VD7E9HoNGX7tpc616CLtgqtBmxrf1GD5j69n68Dx3kDL72SoDsRAf4HrGAUzXiKUZAH6Gej6qoy4gP7P96DL4aC"
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
