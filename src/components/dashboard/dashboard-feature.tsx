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
    "3CE8vvVv5vPFLf1fmnoRhgeP6PDFWBthguGN5Cdov4TqXUeeygf4doRhkoxfzsQVRJn1FbvGjThhDZYUU3dAVhpc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ijwT7hD9Xjtb1FT73JCw9CCPVZ9Yzy7mMy8R8ZRDNpUhQ7J2exKXnqVbEWH9ddK8uDFJbNSEohTWJXmjsBXkvy4",
  "key1": "3YYdAFxXU2GCLmHR387u7D7uBCPNnT7YbVDZscDwtPT134tGHgFhXZkmdczVww1fc3pENyBucDrNGV8zhyD5EUMY",
  "key2": "4mvf49DBvBnRJkyLi4yEFY8geMcSJRd5f2B76xwrf32vKH6pMxyEBW8WYbKQ1ieh2uH76rhcf5hPA9vb7HcdHUut",
  "key3": "VsYAp4oPH6MVuRdCoPopxL1FFUUiY1KPQoVUvAoUF3aMzEnaK23dCjM5JQTgUd4Kjp87bB3VtjDv2eLaJfLHrUS",
  "key4": "4mEjBkqipmLf86ZqbtWox4djHRNwmPdDbDoDYnc8FjjQQ6orw8iyfwYZvynVcoSh4HvufY6q8W2wqe5WsvnX33oB",
  "key5": "4hr2RHfgABnvTfUDqzmXS59C7TsSLTBWXCjuZmXNxvYeRzzzRZH1R2Jxf4SZ6ovv3KTgyHRn8Y8AUt32KrN6fnXN",
  "key6": "3t5nukGw8kHcPX28fN37NNpsLB3AT5tSKTyDVWHGcACJLzYJWS185VvkPnE48zNAoM1Rm3NSzdMrgtUNvDEA7YmS",
  "key7": "2uPS9yTqphMZ9uH1mT6SDjuKs28AkNz5fV8goMBRVMng54zgmRKm6ZfYHajbW9UV3FCouaVaKVCKthHnjeRxhJBD",
  "key8": "5jdcpFx2W4oHvpdwg5be9Wfen7GF6wsHr5XHVkrvcqFArFBdNgwFk5Xmhr9wxp26o4V4bv3SKartX9QXxa3EfoUo",
  "key9": "3aNCoZwP8sdYQja94VjRKT2U8B4awQSe3x7UXe3TD3wsSwCQvNDQWSJCrCLNDmutQqhozA4JMYTwaLYoHtjtA5Uy",
  "key10": "vdkrF3fJmGzAYnt4jh4JALZ8d1dieVLD2nfmkhbiHCteyAenjqdR85K2qmEy9EcsYBXAP7iT4LQZNmLCVLdmtmL",
  "key11": "BzUjVqenJi1ArYVP9eYnSPnxzYpADkDvEFqviUp3LYNJXpUqXrqrr7e8M8MRRJKCzEXGrx8H4zcU7JX32BXtH9E",
  "key12": "5A3KowyyHi3wGNhQfq2imRT3r1zJhPCsgCTLhJVf1afWy7JfyAd6x7JMSKAqP5uKuB7PXZUqp2v8jnmD88cGg4UX",
  "key13": "3Eg5vKRMviW4mWDHbxwXHZ57zkTDzYumj9NtoY98fCcWScFfVNUXJHYCK2jP52FRLHeQKZBMijmRqtUtqHDNyKW6",
  "key14": "UisAXkproakAZgL4FC22akGuG3M4SgRxK3vcpgs176QJeGtgCoRoHmi8drkyfy6pfDCDfyoakFnB5Ny16FKAMH2",
  "key15": "5sXwjNqMteF28yGqsLK7aYNAgQTkwNBxRr5nZfq7F2hXTg6QS7Qtt2TgC28CdCSrSrmp9KugnZ5KoE55Q9MrrPvx",
  "key16": "3hS49yMhf9CW3mtHBaAU9a7SAaMe6YGsb5jpCjhTS9yNNz1ViAdQwGqK6KeeC7AgQ59Pf5BKNjmej38PrBhrDyS6",
  "key17": "TN1ANQevbiMfCNab8x6MRV7WUNirdkAn47tPmForRELLQTo3VweQ5Bes1iLhp8F6oce4LbAQbPkgKWATVpPWvvB",
  "key18": "3QQ1cuxZeYpoEDMGFDfGNXiq3fMa9SY42BWEKeLNwTaunxjmsjKBQZJxsyNGwaCgj5DHDUP53DR2DEUdEz2g5XWq",
  "key19": "4nb7JTtyV7GEWacmMCqW2fGkqknBxVqoCACnfR8WpB1PXZ84RFT2HjMDgVBndNYjp6dv23VCAEV8VbhCBLcu7RwN",
  "key20": "5KaKPQoypCyjBZXd6q48ohKma5fkBAZhcTLx5fN64t9PFoqH14N1vARMQ9n49jsxq92YsARa7vdBrpSkxvUPFjFu",
  "key21": "4xKzhBGJVp8GRFxUnAsbu3PpfECvFn5nWyyku2gcFS8KZKjxq75fzKfQXr1xm4YFPmUi97kLZ5vfGtVD4QxfzUT5",
  "key22": "5K5rHbinRm3GYqqjxWDRU8DQkTv3Ea7fnuKQB9mojtwNUXp6CGKbjAtGXjdkA9a4XCfW78DUewFwYWXBTF4AD2TF",
  "key23": "5xqb8hjmrUw8B8yQUwagCmKZiEo8xYeRRGKReNtzSfCA8ULJX2eNaa32wkKFcRMP2qGhwwYoZYmssau7m2mTPsTf",
  "key24": "24q2pkP4z4zTDDedtoGDzgNjGU84htUHnHzEAggS9fXSg2yoQBjxCbyL7iduCZAjoWdqNGEgHy86LKv57QLKauFE",
  "key25": "66ER15L87nRCxqihU7kQ999SDXciZaNenSjvhtpsETgXydQn5cXz9TrAXK8FsJKbTKGKhBYoDfPRfaEHKgkQcQ7k",
  "key26": "4G1sGDzoG3UYM78SSjLCjpF5618AdSk6tjLBVangEWaeYDD8KUf6BZpinPLEuxzjZuWLg5ioMtYpsCV6ivmNmxRc",
  "key27": "4fFVLT3tP8ji5GP39HJQsY4GXosNTEYgVpvadiWZnW2V4bRbRfsPGeexz6aEVSLg7eKwGcFN9Vnzv3WTsZrKcmrX",
  "key28": "4fhPk93FBaHjbugs85bxaaizAEdBTHyS3N1nF9ngmEk4CNMwc1atHDuj29Wg8ibKc2tfbHmzGDCoqVK4oPiLsJrb",
  "key29": "5t1oSnDJekBccsmbJNohZKZfUgicTspG5XftNfgoLZaztf58vjuA4o3xYSF8CvsnJpf9ktH3QLu3wNE5hdaB5zMg",
  "key30": "imbgy2r76kyUQYuxWVRFf2WZvEtBBmZjwPWaZZeocz6i3sxnjjVbZtiLcnxkdUTsXxPfBCQYXd7vvLjtJ2BbQd6",
  "key31": "YQagBT6vThSSbex2dhn3QUvKjP41T4TBvWVXVcRTYZCF7MWakgX3C9bBYocTUo9JK81zttMMyY3YdsB94rMTUZZ",
  "key32": "4PERt2quKeMju9ne7kYBjLLfCumuvurWmxoYcmDyTejt2BYLTK9myzuhC9RWfCwnQQt4pkK45QNo8Ey6ueVtKw35",
  "key33": "59vWcypfD1Cmr1FGqbGitSPqELEaHaJaBuJ73Jw7wJzcaBHCNy9NRgPzm5gnZermKDZ733BoSghMWiMssnWqaexH",
  "key34": "5b4SmiRJDx1oXvMHFiLD8HrhAhQf8EHfNBTz4VLRqcQ6epVcRyRCK955U5Gij7nf6fzADr7FLBKGi87Xac8BwqZD"
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
