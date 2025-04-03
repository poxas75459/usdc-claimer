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
    "3Jgja27DZLZguWR2qLy6mCLwpjPhPw5BNfXLbgWZE7AYmKPLhjuFU1VyL5RfC7cwDDUPTTE9JUfXChhrrrtk2RFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xYGA4bAgvJdWPgsrNwp1zHYcWQBemBepuJC5YbFLxCB48wxCzrbZNEeHKeGregEcWhqxhAV5vtHmNVmTnVuXmMe",
  "key1": "5jbGGzWBD7GE3rqudfhLcJh2wioX7QzTYXGxXUn4tcAgPzZ91kP5DU29TdyKScFKE7JY79hJnWynLFKSY9F7wkWL",
  "key2": "57GQgZtnMhTNx5GKHESpdawNzECqYcFcySSDauz4cZZ2AztHLjZBST8MLBgPsL4hKEs7rVzWbgVJhwXpXhWMjRsR",
  "key3": "4obA2sQPtpq6Ye73sqEWxry1Ww99UBazy8t7g9hQTzfnAWtd8mE7XcgW5oizpGamrZVMJRPiRepqFKCM1FcdHQKr",
  "key4": "3HZ55df5FUD8jjjtYYDsAgZ3oRmdUBgXStX6aDY2N8L12HZnhjhbgA6rQYZatwS8vGMd8fPAXpVEPLKr2SvWdqAo",
  "key5": "5hY1XWV8BkjecXNKcJhV9EQarZBzy8A7qtmufHUHaWV15Xu4Tz8EBB7cjj8aXgSycGho3UsQscANxxhUc1VztLg7",
  "key6": "4AWUVPiMbWXL7qZ9dQtMcLwmb2jo1jGV3s9VGXbQvWBcWPsWT61vmn6mHfx7JQLXJn4bE2ZwykhQJkR8ZHSKdU3S",
  "key7": "3P5Csg1r1tAikqRoXLvvn1BYKTp2dFxhk9PzhVwU42ouXxU4E1K5hJ7aUvSjWcmsrA43k1f3EkuP6ckV6kLvuZmV",
  "key8": "4Dz4zb8KgqRho9FEamFSWWSVAqtBvjYVqkVZfv158WC5JGvsoaA8y7GXSF134W5PzZTRJcdExJU3UhpAWDcbR4q5",
  "key9": "5VrivGmo1XjD9Z5YqrtKJmeceCLbmHp3U2hGF3zPQu6Hhxmxg5T4yNekJY6jRNazHNnGBokJTgqwqcAu56F41FLc",
  "key10": "iBRExKg76fvp7AuKLtidncLsLPXPJLpjhYZUFXTp7Snt1XToPGedXDwtgBxsDThoAn4rUtmVJY7KMpMrNky2TZS",
  "key11": "67mV4oANqNbh9CgYoUbjJb6edT9FroFvs15UE76Wj8S18PguKBhLUqqSRVXdTn97dh7fV3cDHnMx8fyM4siQ3tNJ",
  "key12": "2635uCzJL38zY3kWghVfctkzVxkZb3LjaqgVfWH8GCbCCiRmdmCzq9awXW2x72j7PZaAes6utqLpgwkwWwZRmAiM",
  "key13": "4RHcxDPJxHk4Jv8NYG35J8ZWHFC7UEb39gpenTFzornBJFCXDCJJKi8sJyYisKh7RttHQkepr4AWjFZ7D71EDZL",
  "key14": "kEWLRmcnMnieHnrhnJHDgvnMkqY9Bkg6wcgPncKoFeVRdDHUA5s7ufFbXEF7UdJNXxUSMDirCrAtinuMgyouz6F",
  "key15": "3tDJ9dYLZ6yQb7qYe1xpEqzSxBHMweWPhjgoZiZTw2qnSkb39QijHKick6h7LJkY8qMGAwRdRgoFMo1KCy7eHNeA",
  "key16": "5kwbtRMoYYhmSjSLTTPLWQudCEbKfJUdpsRksf7aSwA1Ao1prdwaZ4tAE2UMtEBB44CPhRBWsHMwHbn6hQT12rdc",
  "key17": "2hPD65LZhi8KBHjo79v5hhpT3y7BhZGwdWmn1GHRBrNAq9jmJndeVK27mJZ5W5Bz9xCGzVLrV5cfdR21WHFTENt2",
  "key18": "wcFNzSRe1VjnVXAAhmiyH1gvVGQUimkm6AK6wvfTjoLuQoRjpySZMet7SoGDDyXTZwnJwdBZM7N2jesVqUf6auE",
  "key19": "5Zv7q6pNZg9Z33B1EPYipouZh4BU8eXdtSpAPPS28havc63FRA2bsuack5arbtqPPGZHjM7LrFgWxyN9NS96sueL",
  "key20": "3Lgqvr6ypvHnQA5tAFiy3BNiPybgFcWMPy69A92R8eidGm1G4EJpueKW2XzqN6nCnjoYdHLYxvpR1VvsQiAwZiQd",
  "key21": "5Bm6mcqqtrEkubGCNy4eFgsS4xgMFqGoNcRVfgRQkYmjxgdE8HDaoYUk1jkyHKpcVXnRar3NnuJSBvysekgyKswH",
  "key22": "Auguz8Bnzfogu85XQCXocGnLKsKRaudsiY8Y82v2iVK9KS5C8dNBBWwjnHa6Yvfrw76pGjpT1P6Rq2ySKThcmCW",
  "key23": "58136LKZYquz3FCQ2FxwBXff256GW3S67scbFgCghP1bsZKo1c8pU2D2RGmivJNmn3KETrBchR2M8n3FrDFbcQUS",
  "key24": "4hK9eCnUVAzDM8WxKpmo6tetQMN1aJcof3i3NbP2mDRRkMQ523jWAmvJTa4bQWrFbr7s4d7fk5Ns3BCcvmr51zJi",
  "key25": "2wzkJH7fqixTRKvJ8KEPAf88zVkmdFLmzpCdDRTPmyYAv9nQrRjV6L5A7edsknYWMerBoYe3HFQ2JRt8QXyZAste",
  "key26": "3eDYf9tFGgc5htGGL7W3CczLESz1FhR6QoMbKRiMQPPZojku41wwAcgqXoDKJLmpCBCbvXGMuzAt6YyDBvxpJGtq",
  "key27": "tj82wshbQjq6yYwJYthiBb6VtzcZq59KUcYhrfHZVwWr8CuXfkFM8BTmNNVHUcAPDnB9NLSrVwGm2Adez615xwS",
  "key28": "3d19dhutM1JVDFfazXYm5PYXPcjon1YwJQrhex9kVZAPSk3RpfaFZMJoa2oxVhEMN4Zb95sgx4sn2V8vt5SY3ojD",
  "key29": "5PSLyNk9eFrsWRmzwyUeZtvsozXBpGtzKR7b2cyNXybAjiYLgEqPsZYCDRcHo7EqBNyBoeLBTR816yk6wnQcT6LP",
  "key30": "49QJJXx6Sjy5SNaVVYNNheanziWti5bMTg64pLb6YSbJzUPLs9UtM53mdB4FCXLngafTtwFSP49wG96sLMqbEaBD",
  "key31": "2nCda9mYm2JVqqwohU4W4XNYbSrPMr23jmEYi8vWk5mErgS5yiAgTDtPJ4nGsPqSohAM8xFEMWgsAMTxG24Xiuiy",
  "key32": "42XYCuSEhB6RLPwM1em8mrE5JGnk4HNKUMRUzRRzvpb6gVx2kueJmw9eSjXmEDKkkbwKyoroDUsdwZ4yeNGvpQtB",
  "key33": "37A5oTN36nHfBgkx78bLT5SGADr7u8XN6mHSngEsB71uquLKJ76c1UfZBAV7YxQSf8Kj7jhh1rfPnSuZX43BuTmN",
  "key34": "5w9fdLMsoPyrHue1xowFHHnJhcZsQsm5Q2mzBeWcoyErC1QLMejbgRcQiX37EDasc2kYWQ65Xw4T2m2JjeJdoKCL",
  "key35": "2eBJJp4mbEUg6EoS6pdLm2JAyLdXFdKbNZVM6CmzLBTaaJZN5VBkVphz7iVPtjvAey96Xn9efFBEqMUgZL1epxKf",
  "key36": "58x5XiJoTQqEQpbxGoD888MbAfKTWQHFL9rXNJDSMP3xrQzTn8teN3YJikotTHQaZz9CfoaK34LsL1AsGYsWrksb",
  "key37": "3D1hU1sdsbv5FGQdSUE9K522XMdnwz97LoMFNXETYasxtjTaYcERHgNTdNBCFA4QCahnHDubW1MKQTMimWY8x9ac",
  "key38": "5LvwWqGNqwBHsbmXdcgirkQtP4RrYimt1VKcoya2SuM9S41tkeXSVSNBKskzkyUC5ttrWXrECXL98Q4NSzM2t9xa",
  "key39": "KBkjx4vLpbpJ4Nd52TMBtRVVZKdRLzMEwypgqEXRbsXvX7GhH7Ncb2cxSpcSoJJZboH4A9utY7N6jZhYZXg3Gj5"
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
