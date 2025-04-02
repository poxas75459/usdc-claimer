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
    "5xo7jXmoGoSFM75Ybzqj12yARDx29HDM8LDqQstmZpzhbaBp291M75h6LxG724hjnn6NjXPhzkXyMGBazu92iJiq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NT33vwV5k424SK9CDeLfRZoP8YK9MZMQ41eNax2qCUWpPdzfNjzK4EeYN4eNjVRzWxqFUikdpYYVwQu3KmDN6gZ",
  "key1": "3pLaEoDCcJ9TVGrcDjDivtQ8sxWTuERnoznfKnUQUC6ovdJxVV1ChfQXw4eC222t3XDujX7rBpCKWFVZgdoZrw6q",
  "key2": "5JwzcFkqt5jmC2v337gceu3Fqk5CsavAZKLqMM3vWZ8bvniqP7kXdU9oVwTbcSsYvr3SZPVFTo7DCdB2tY8sQ2W8",
  "key3": "4QJAygdtWP37UHHHhFZUKVDN84SWeUvzjyf7qz6k2nyYGXATYoYtPsdnt4SRdVTMTTBCWyrVCufYBkmncPHBkCGp",
  "key4": "4qyGmb9bR8YXeGPRwfDveQYJvG5gfTmrmfhn56AoactxzArKk7Hi4C435JmzGVxRW1355jebkeLo8V72EHcuQaAP",
  "key5": "2ZaTEErknjE5AoopxKMup1uBioSNnEYb78kAZTtbAxT9ZA3WX2R5k3CKT4NKXHbTZsHZ4g7i6ic7yKATZ36D8kYq",
  "key6": "4mfJ5LAAREJKBxtPSdc7d16jUP8jV5wq47tUZYpa1CUoBsSFtEnPk9jnXcw7LqatUQpikBcX199PfKybTGc1U1Q3",
  "key7": "2YY5AKAHYNitB6Wq8rHdk5gh4AF2ZeeE695V6ehJuwzye4fNX61wXuWRChQVXE1VY4pNce8dDy6961Z8D4BucUNG",
  "key8": "2xqwQL93iSLVznjMmMSQQhzTSVUUZFh3ArzYjbrTF699gHwUQjcZ7pTBv5EPqdpciGPbdLeRTPRuv2mAXuiSpgzX",
  "key9": "3kw6uaDkKQboUSgCap1E2KJAF7WwuHqftZFeSv1yWD2FjvgciR7W4gARJ5TRChYtWsLd5TszdTSXonrs6QThJxbi",
  "key10": "5j6SkmGcXiL69vBYYoKiAyTv4yuo3a8D9Ar6ucbi8Jq899sCp3txZ2VoYd1NHCMSxHPSXEP2XqerMTPu6cAzibyL",
  "key11": "3pHXE8tz4pycApXMVMFfg5Rf6LqRsRW8bYdW8QRJvKixRGqzcvdJkJdWDhvwYXBByFZvsW1GfdpfXnfTrkM1B2rg",
  "key12": "ySZWdAZs922Rb8ST8ANsFXpZoY5VHGUXJEGirNhYQ5GmmzQ57bWx5smZ3Y7ArjcLGzPWdZ9dGhq3cbRCASyYE2N",
  "key13": "2ga4TXLWAvdVRXjLnNNLwx21UWsw6NRVVmM6M41aToBjEFLrdgxykehkcUEDXfVWviaU37z4uNTnopvvyjAqXuS9",
  "key14": "4vQuDazS5nMfSfWuyxWVVi87bJAegGUpriBiKUiH6uSbYC44f415X9XTpfr2bo41LSCptwkZ2g2FA4vS8YsgGC2C",
  "key15": "BRX1LUENsQiCR3ovG99u6Ng8WdppUP8oksNo35y8aCystW14dbJCv2BPpFwM2nuFq1RBHDMXQaRgPWTj7EtSxvW",
  "key16": "2AqMSVrbPpkGyATkFiZL93MpVoZzkTvyAHEXxFznXr3WrQnSafqCKaZ3ty37MUNzq1WA5h7fq6PhM4FBfqy75uwX",
  "key17": "4xXxbf1Ba916jLWjobsTQnfu1rukTseFVC9yAQiho7qeQRojwvJ4LhrroxM3MKMc6YBdayF9Lx8151iRjSaL6RVn",
  "key18": "2JA4bJhhpQL4tEtrDkdSkfckVL1MW9D4awSrgit7ydVFLx9ymWHsjk1smXZC3spz7c7gFsDLrawhahJ4U155foPx",
  "key19": "2ET4LuMxp6PPg1BSWHc6ZmE7Dzt5tfrah2TWTzcnLooSRMzmQvzQ9ED8Nk6B2o5t8DhArsCRP5RfigDBEjtXwvBT",
  "key20": "5dT5jtG9Mi7TDBAVfxHGHSN7gZQRqhrvjicFKouzNw5LnHZH3KA9VGp1LB2QoXcB1G5iZDwzmc5889xhEPBZSeVX",
  "key21": "5UHn9nUpeDUZ8cymCMcTjCMzPuRLNSjG2iW1Xicebg4zWgwKQMXTYSB4oSENAMbDzkBHi2iwKw3Ppv22ZKyPkJyV",
  "key22": "4oLvRmH9Lrb8fGmR4aNtwbQugi2LVX6kvXnBfCP1uCCvUaFgxHxyLFRo7Lox7vQsrcCuLCQV62F2Qp26DVyFfA7P",
  "key23": "5BW36F5ogrDhdkjZeNsqZisbFkeM4Gcft1JimV4GZMv3AztRoVR46eEUPF3YPvGp1SJASvPQg56p3KCRTRrW2LN9",
  "key24": "4BuXufgnkJpjbYaVvr2TTBFoRr8cdo11cfUSW768VtTcQ7vDobkfv2MQEqhdzwhvVvBgUC8yUeH57HxQ71tkF41G",
  "key25": "5hL9ty6npXPCHyVgCLgKaTa16vB6EdJP89fYxQYekmoJ9t3yUhRZrksxLHCTftvF4NGhkkvpzmUQUQKoWPQT3BVV",
  "key26": "5P58fnM8mBLyk4xuAmFR4ZgzPEzxjsRkvsN7ABd7P8W4dfvhdm8oYT6wfbfMwnWMjce1cmahRDAmwUghMZowfryz",
  "key27": "qCuPSmQJe4UDmX67R3DqYYuV8wJQBubpUW71DKm3BvZMPNJG7CSRopcGUeckZQAct9tSxdZCAcpwDgoyx57NKqn",
  "key28": "5zmomFmP5PSNEz7M91fAxHmqDNhrBNJ4i1RJ9oNRZa2jSdHswyog6x8kh5xzrAsYkq4Dg3oDn5wbbv1wd95gHMKJ",
  "key29": "3UcwtQUnvKSQXrUrQ7Z4FHcVPxyEwL4eXP4LNLQAhChHXSpvorx364EAoMBPAaHi4HGTHgtpGtyHtpg9DWYzro2q",
  "key30": "3DFtn6n75kFqbsHAThZN7wCBA9i2haqsZQJudyAxrA2a8pfgGT6N3FywBZ11vPpkogZ7eTv3yThAbWSP3ui99qNs",
  "key31": "5UrGrYvegaTXn5g5yRhk5oy2YNWJjb5imghpnZ9jP4nUJhacqahbHJndSgPBH9ZqDBP4mdCsGmWjhvxFSC46Zj9r",
  "key32": "4waBzTuPsbmWhQTuiQPuPCZ7c28sPGiqijN1SRa9WjPTc1Q4MAoimKCztLF8JPzAeKG6dgTfwDF1L6smW73eaLbY",
  "key33": "2CQ33DsucQczAegou6qb7dG1RQb5K1YSyHjGV4i6H3yWf5eajWxfm6UBfadQDCMsKxnr6h6KDFf6hwxwrB6K9Da4",
  "key34": "2jeizwyXFGXhsfVgWKwtt8W797mwhENRuGa1LCBhfvepWfCWWvZGf6CPrQHtYPGAxFzZvwBkT4MdPMVbNJdEs87R",
  "key35": "5wLKN2WP6bhZPtxMW7BvhuMc13iLbg4Si5mDC9N9S1dSzi71mPFvdwcrv83MXtzeXP78XBsMAQjFqnaXNNY3cgck",
  "key36": "3vwyaiZ2YvanW5q97iyMa3v5KedCqKMDuccryibhoqS4hk2fhbqnVFAKBBWhbAAVemps3P76drAuMpdHPBZm6FFQ",
  "key37": "3cXQfNETLvDDQ66zGogVc7nweVeQVZH6WGQKVAzM6uQCeVxCLoxsVdd7R4XwwgAkFDjLR7Q1G76d5qsfTpq77Xgv"
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
