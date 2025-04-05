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
    "3VdM1vmVAM9vBMWQGUFuk4isR4wtnL53afSC1YV5vbB5fx7gfGFHLtcuo8pKowC5BL1pg3oJofiGY4AMDtakY9Q1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZgNfzz5eoKQdBteLu3K59eoYz1YL6BoXEpZKVfPaeLKHKeMK6ZH24qYRTzehM9xR6CAQzy77RoW6Z6VnZhUKcp8",
  "key1": "5UUBG6u1RZV7BUTmLijLSXXJQ2UMV2Vhs33zM5nTrN29zKBHW3yNfNVJmbYX7m3aAqkFpED8cXEynZezT62D8gH1",
  "key2": "4XyaW2xSnQHAv34P8VXN8iGokNdUfmDv1mAN2BWH7hvBpZnbFtgsAmTmDS55xvUB1H9yfRmYVj3HBNwjv6GCYPye",
  "key3": "47YeMqvjX7ZqR7cJLexWr2Ujga3BWnegdC81efTjw1WN4YVDjejhUzFSJU84UEjxFSxCASNrX6E4NCcmQbiyXT8K",
  "key4": "gamcccqn915vLxER51XstScRFe9zuqptS52ybPZt9SezusQdtUu7Q3h3xsWT91FzMsAp8PksCi7BRqKkw8EPthS",
  "key5": "2erAVkMPEW5HstVxEcDTyUMmZ3sbAQqx2Mpcy3gDCX8DmUuS1zEzZXMAo41QaQfUUDzmh6nD7coVXsbc4qFdhak6",
  "key6": "2N7QQyDDsFBJeRJT2b14GzTuWLZXUKyTAxSwh9pgD6GQjBvqn9QDXJwZkuoKFEtGcmqQ1bdNqfqA1VDLMmJA1943",
  "key7": "31oMgtCf25oShe31kcbAgq8FEqdSXe1smaVpgfDknG6SQY8K958tPUG1jGXxi7ZW2UWWwEWSqvNo7Xfm7rz7MCj8",
  "key8": "31BUK4w8AoPVM3znuPZrpvysZnjt26J63aAXsPxRPmYMj2BdFyLZmU3VGVUSe5mbU8TL799Dy7LMtcBj1BtrK9Q1",
  "key9": "45sR8o8jvQqX2izJC3KobnNytJsQsCeo9e6VrXDpGyowAH9gz7TeZxcxogpUT1LYcPqjCuitz31Mi1pGhMUFi5LS",
  "key10": "5rxLVNB62xjfrHAWB7uz5pgAXC3mVRwHxav7nv5uhuJXg4Pe7Wdg6hABkFVqX9X6oB91yNwTt6p7C4w3vqK9FXx9",
  "key11": "7NFjK7Q586XakMRW1RkeWvNQtCv5rA8rRWucG4qCn4tFymfCBdJXyRaHW8VYSGZq7TnVsmPnmEpwJJXPpntAhzp",
  "key12": "5cgvpkzJfQQzabDENT1KHntcknJ8BKJhVftKkgdqjyyR7i8dt4fDoW8PQ5V25z8BcYknk8i62RshyDQVZU529bzD",
  "key13": "4nUR9wEjAChKi5oq8A2Czp2ib9b2kUtNZkfgrbFAvR8wjC68Z4VierdXeSwy3nJQpM4veq8x8csQ8QShJYoDMLrz",
  "key14": "5nE5G7p6HTLpA1EhJXmsRjPMqEcapejqUDfHviEmtztNjnryiYyxgKFWvp6HFLMH4h4ccrYEzqUAnzGGjRYnfukz",
  "key15": "4BDiq42JcMN5FWEafMF3ASdKHyqZn1naBjM92Mrkr3wjbwX6tHg829MDPQE5aLu3W2K7hq6NFNqFefVTsU8Cqi86",
  "key16": "ijVenodtXWq3fgPWtivATrpHN1fRopdB4ncx2zGRZC5XtxMWcmuvKxuDuke4UDC4G5noDN72eCF6Pdgw5ei3aaT",
  "key17": "4VffNGYgaB5SwJjcy5CeLMoBY9pynuD8DFp6gsDdXeS9s2nDKb6zF4bPdLiqxr9X5vbpr5Hm4KUiQTykS8wXaofe",
  "key18": "5dChAmNQkBFKXoZSkwtp2vbxpKG74dx8gMeptnNKUetAVWaEGzgffT8sDepdA3PsHknrhe5dr3EHHsZTX65Nc7xQ",
  "key19": "35Puet9x7cYXoZJySEg73EQgYgKEKbmtbzuN6Sm2L6Dw85LgVqvaJDS6zGyTCHXEvSb9jTynCeyiLdpXdap8eW9b",
  "key20": "3Ug6QfRkmzNC39G7oj2KvgQ97EZC4b2WFHNKtVjFDhrkhWPiKfL17mpVqngTNGBrLwPjYX9Uak6Gr6Y7whPhPVf5",
  "key21": "4JT92Jx35vh55KqVmD2tibi2ZofTQ8aQKt1X3gKJZU7zhgAY1GDpoBPb8r6EMoxavcXYEBbzBvvLbqfNheE9FpnT",
  "key22": "4TTtdJWDFmN3cMQBwFB6vzk4d8BSRnTzSDMoP6AqCxHehNSA8kcd49JBChXBFrKBWwzKzCNqeMyVCT2RdY8bLizz",
  "key23": "3MBkttzHc8Nx9ZRL7f87C91sUuUDxPqsdtcQxKnz7qwEfBiXqFM5sftHBvb6cUBCZFHHgU5XT6vaChFka8FWcUo",
  "key24": "5icyUSLM6mQQg6aRvb2qppcMVMzVDB6bNK7nTZWiSr1yJmXAu7HPQSRJDuLNFvFBF6qiaF1zZBe1hWnM3pcgEvMQ",
  "key25": "39BQjE73xUFCF5srR4bguEsVFCfVsefBKdhzHUQjLqsMMhjcSJNTAuiBtY2A35sZUR5LmyJUcc4vE99GNqQLoyyy",
  "key26": "24f4TnXAPmzzfy3tgVRNzovoWfdoJfgosdnLsP6kMxLv78SpfvwZhBih6iHMrz7VufXQKXwGXSfVvhPx7sFZEiJ7",
  "key27": "vcDX2Nvon4uF6vXnzQ5L41sUZ6QdDhqApkGWxymL5NFH6aSoU4hGFDyCE7tJhGadtwLhd47s1F8K1imCbGPs9aV",
  "key28": "2oHBatr7gyLiW3uX2LdbJiT7o5aFcLUWi6GHZmfYywjaE824ixi1tPvswV5tPgDM6hXYftiSoHp4yYd2tNE7aSch",
  "key29": "5mw6wuogDq3AL93pDR2V6VUZ58Kf58xoZXpzMbkH5PxexMKYphyRcRgHGL6UgwTeuNzbS4tDfsvqeYB4igAfJQpA",
  "key30": "91v9MzQBjDnYL7NNaBcZL62hJimsHxqsEd4CBjSDD1VeX6aGV5GqYtpC7oiaFN4okZYCqV5EpHxyfB99UMqmxfb",
  "key31": "3vSo2Arp514ZJ7JkdDEBcM6BsQZ6XyZ4QU7G6263yUW7AJik59Za11Atsf3jNvAYeYf6q3dE4VrQAqcuvi8spV6M",
  "key32": "5ceb66ZBfPx1n6CzHNrFtjwDsvyusSgNyH7Z4Vq7KFF4HteS7q5vCztHoW316h4LpwvisNPqXBJLSTvevtjJPQip",
  "key33": "4k7FBtJWMSAm2zWKMBVpaJqpLxxWfsDb9yiW1xaoitsVfEq1XDEH1U8GdKVgtkzbiQFfu9bkW6HyxiCig1swQ6ha",
  "key34": "oSDmfawJvqnDoso2ZKrRK5TcKNtkLrq3jc39ADzbF7ds1N2bK1MWWSFZE4jp1Zwpcr3jFbKitCwzFFEjqyMJtGd",
  "key35": "4qLYPsa19BoeTidSDEhGWsvjGy67XTKF3MsLZqDJKYXJ9XjJsP9DHsnmQmZQQFrbsJeyor3n3fC1VBRmfPTNdvg1",
  "key36": "5KDRXDxZtx9kZwKt6R6LxafBKjDkiP888VfiVCAKMs3btfpEnmQc3toKWsFwPHNDR4AThugcbPJEyheDsRajuuKx"
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
