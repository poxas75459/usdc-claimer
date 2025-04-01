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
    "4NeTC1aARnrjtU9qx78EUBiiEp8QWQchFAhhDx7i9XcYJ6Fw67XBCJ6AXJKTNSZAKxVUTgGar5yriR8dSLDJsaMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GfUnGmearkS8ZTVH8tFoZs17NDFQjSH9bhgJLUPZAP1aV9SuFFzzFMBMTANkob6H4apCRiKHahj4qXdNp7DGrcw",
  "key1": "XpmubJAoHs1eZTbjzGsHfjSdeuC4AijVpvqD4mYaPqyqfm7YqowVQ1qBFAyo7EfSHkSDKALVvr8Wwx7BPPV1NhR",
  "key2": "2P4LRW47LWRGHPhkJ5KH3zJSZ8T8369BtHSuqUf9T5JDHF6FzoWtARkEjow351LHbscWYq5VsKNpSwbDKy6rj4yv",
  "key3": "2hTQKduBFn1LhkZxVJP6iv2mk5S59SsEfTiQawjcWAbogoCZ1YCe4gmv1MMPW1GRx1Ncqm8wkMZ52aUMbVPySSYC",
  "key4": "npqy4dybCX97y3YqMRYhRw8idRP5X77TVCiGwsqgXSLs71vBLnyFQ7spthiRyFqnBC52wSvkkirdYVp4iMVeebH",
  "key5": "29SMk8zZRWpctXMF4CyRtjkc5h4oq6TALwuxzbJ714VsxDygBxwpkbFXq5Jwnq7bxzhBe4mxKRYdtbLRzecD9Shb",
  "key6": "5i8wC2ZQR7u7ViaEZ6kYFuHqjwSV2esiJ133hVXHRA7os1Xs9qCovSYm8VUkNCKJmbmqaEF4Mbbr7D3Mr6PTEWXx",
  "key7": "yLqkPrP2Ax6u1KNvDNw2WaahJv3mXjrozeZ4VNzTz6pZmy73hj5vMNKAnhJiscyMJGCmzj7pXpmB9ojUYuPJN6d",
  "key8": "2EKFhBf1Zm3xtRXihEfuyGQhTSR177v32fAVhteLtVXGCksCKkyq94MpkRweXaMgrz4N2dQnJkroBcmtPZv381Un",
  "key9": "4aE1XKaWJQMiQoZjwhoG137XgWP8MB2B6maU2BxZCwRfJXAUa31gyXw6wXutJvjjzK4xf3GrGUqsTxtuBRMLX1hg",
  "key10": "28Q5d9inHtNMYqnPe8ZefMJfvUFmG43mTAPVG1Krxe8YrLKMTpE1UN7ejGpatTGrXRhowSJCD83MwipFVSeprmts",
  "key11": "5QSXXFKd9dT9g6yNzKsWNpASbfKf2rjc6xrS2Kjh8C31n1nGCVSzA4B4CM7ciMoczn1NRK5wvnq7Sw66j8bwH3sK",
  "key12": "3zdEEVcUvJi8BSvrb2mNUmRkaMayDVjkjQi6Pz5RDQxzGSzgBXTfF6b3UKrzk5QPFGnbsygvTL7N8jrn88rYA24z",
  "key13": "5FTe1MKUMJ1RALs6RCjn7YPzsfQbaiq9apjAHj6pcnrkkPFkitSTio9L6rmDZc4GckeeUA595KFJmj4E2YrYNBZ4",
  "key14": "4TY9mpCxhFa1amuPx6w9iHX6KEeccnbuLuvVZFFrv3t2v6zKeUBPN4kBkKLD8wkurznwsjGiEJdoKJCgtvQFCnM2",
  "key15": "4YMxdY5S587nm6Zy7kYKXDKbyEjDxnBSceLGMtoYTkNHKvXjju7DvF7Mzyx5ydG8RTezE7nVxHe45XEcWdzYJFcu",
  "key16": "57ucioggkEL7m3ZpuvQFCY6GMCwqdQN7oEu6AvGfRPePtDjL2caERZVVDj27t9yyAeTUaLiqSHqEr4HxeaCwgi79",
  "key17": "DZ3w4Su3uvUHWxuf8zazixZJj8shauTY3wRSYC7Ch98QUiEJySgEb1bkG65LFDpGVtWzYgyPoMV2FiadtXRNzJj",
  "key18": "4ZSiULYJSwSTai4D3ELWbwTVwdeYqHX3StQSSWRkmXbCpBpfn2GcgAJVFokLB4vs5SapPvUMkv8qiexMSYa38s1",
  "key19": "XrRY4zb94QvBPG2EdzAgYvbfgvRKg5sqjcuG3YGm5xzZvti4umdFP9cNosCJHvMEoG2LHyCqX4wqL3NE98mcJP3",
  "key20": "2gaj8SbaPZowkJHnTypHVgsLRmo2DvZKAZaYukwuwtibcYsLYovhLUEoyzgLrrKJGrEaunkVZX3cmjTPQ1wJj2Mh",
  "key21": "YB4W4tNJ7Wan6gmM9Amty2ju4hF3MPK2LJx82bar6U2cifcj5nAPsQjCNWf7MdbKnZxXCvbcrGRBbAkVEWpUHLT",
  "key22": "2Fzt8wquwvECstBeb9Sn9bJ7ZFLkumZLQHBdFyQaS4oyKoLrArFuFFo75hNzWdHA7WpqHZu4DhZSXBuorL3zr15F",
  "key23": "399ioMEjGQBm1NzBavJ468WB5mZ5ZqYyDTbfPUPmKk5JA7MDBJTGjAFZS8zhi8GF3iiRoe95ZdouqzxTUXCp2Zsk",
  "key24": "4mU1oANfBVqfT8bgJuh5QHfDFK42a9xDyBxLFk7JW66WDJScYUDrSAhktRar1WfocjnwSjA7iq1o2vV3e9mkQq7t",
  "key25": "V2zqAGanYfXW6msveV6r5RfDyVhK1c1kd8DwuKM95AMg2ELAqGau9YuVbk3piruMyxqu3DLNmBVajZW5fCJDsRd"
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
