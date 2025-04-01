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
    "32tLXBD4jW1ewXsUT2b6UkJG7ucPi4AUza58zWdRLdeySP5u9LnUdKoEkgiingrNwfeWFa7zpwJcFBNMwMdvMKK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37QGgVRG71oudxuViSyStqhhunqmBwJBvd9SLHd7KSnjEPu6fymWqLB5ow7B4AqWY6vihtEJ6wb319oevU6jPDS9",
  "key1": "5iTrByNKSipKTCRBxwejFN7s8Rp9towtogg14HLZagpjK9wcifCh1aHnJtpwwn3j2tmRcNXf7WoaTyyNcmUdp9tv",
  "key2": "3eTCgYaEEvC2fPK2bAUcJB7uwEF48ruDV5h94SqsLo9BQ9kSpSYajo5FwDpLWtK4vGhztb7cGJoVv7qr83unXD4v",
  "key3": "5HQvqdKTFLWGYySYbWBQhw9Zq7XjUzZ21U71pLtoXE3HZJL7TcaMretWBwvVRwQDDEaY9Qd3JGwBv9H92fxAuC6k",
  "key4": "3QG49k1sHaP1phqPacZ3JVwV3DNi38XtHWdAA9hM2E7nX8DsdJLL4XwsJPoj4G5FNvFGXXaVnk8XabfQJkzusR6o",
  "key5": "22fNktDZy9JwVkmqsh4LV8ABnTeC1p6hxN7WjkbGRnhPktkRdTF92LYtuefpH1iDD5w3z9QSkxKnPej74tP1LCqS",
  "key6": "4udP1mAionTbKtss6CNvQQNgkCsMCcS6mkiPCWqH6jyczti4DuZqyerxpf1HhtE5kipDLtszEJa1ttd4WMeuvyz5",
  "key7": "5CjbAUfZ1g92epusNL8hi1Qafyi2XdWwTQbQVunUitjV9XV6HVTLeDR3JHn5enKDnakMei75Z9keCiDD2K9UekN1",
  "key8": "4LzVLKZkLvJNyo4HU2HJnnSUCXAvFLr7WEajSHQ1n8f4mPvHgaUgHufqA9VjCpip2dTSwAyTLfL36QVQLpMtLbUi",
  "key9": "nZZPe7qeUcpv4iXFVTu7yuGNehkXezkmeP9rySWmQrADvMJaD9LpoMFHvP79fV4MjRJc7iriK4kcNdo23P8FNco",
  "key10": "4aFDk1xKyoF8e9Cg7P5qBwKTiNiodAKrUTC1HGpXjxaPzxxfJQ9btPt2SmMTvT8zQTWc3kU2idLjTy6NX3mwNk6R",
  "key11": "2JfCqvJFsf9VaVZXmogiLJRAoCLQPembqc4dZtNS2HkSvHJhzp5UjBMi2TpYYe3azuQvwgMb2rF7eBKnf9XC1m6X",
  "key12": "F2zFR8CP6JBpPhobU7tkQgbGndJQLcSGoVvMi3JQbVCFBxAeQnXNm7TVxH1Lu7LcS6gxwNHhrYuydeUa7JCuCjT",
  "key13": "3WtW12DxRNpdQRQzUwX3BNyyYrP4aY5nZY663f4Y8VHsobWTDVCqy5xxtdpwsNB7aUM4eWxjQz2UpF6kKZNM9ipk",
  "key14": "QhdLoXLHZyR7qKjabVXM9HdNuwQfncTMVT1Xe1ANR3wmQPjvtsw1V9jeLaNhjoBLLGYYWdUkj9fvsfL3wrxk9sx",
  "key15": "59Tcn5HQXESN98xfnfESq7hkRXLCg5ZU95HimhWhKvDCpR7UpMiJJd3PBZn7oBe4HhvHwaxkM3FGC9Fbc3DS38b",
  "key16": "3yNHevtmT491JVvCncZUv18t5hqhRePGfRZcdnYWxF3VbeQgoGn2farSScBFADeMcq7n8JM4rTR3JqkNxCdA3z1g",
  "key17": "5gmUymr5j4LYucKeoaDbw24AnGYi2Ag9HgsxsCdRoSNiKoAToPsmPce232fRLNnsp33jkf4pMWakEN4vowd5YNpW",
  "key18": "3ZnCeHYhGCbf8Rd8zw2e486hVcRxw5hZVwG8av69sUo6FN1ci9cGrbvhqAMNPvJR2BK2vnhv7v4SJ1xUY6wA3fq1",
  "key19": "3RsmF7kHhYVokW6APpdmbZ6VjAkFRnMkUHtGZJGdK8wvbt1kJ7L7idCMJtZQqXXxPT5JGAuSXkrv96pLk7h8ppjV",
  "key20": "dxoXL2KfasS1LpXFgCYJ3CUzRGf1cnoE7ixNcGKx78wXspynBBoxKcSyrSoW5vzhwHZJY999LUh44Z1r7wtT9Sg",
  "key21": "2TKZDCuWKgChMitrEH3142y1SR4x4ji6JPdvZKwZQMxhFFmPcJeoAJqh7GbVsFpBuwL1zzyWThHdoz5TwoE2k7Wm",
  "key22": "4fuFkZ7xrvrWJjtUpsvV5xg5xQFYoLLBttQcTdhJ26pe57xQzpXEPeLAtzAD8VYQCLQcGUwiNqNttQBDfnT9XhVG",
  "key23": "5VBvJuVy9j4eM1CViBHJv3udz1eAcYxH4B3JrkMDxyECDCcc8dCiqyj85gcFGiErNKvjTsYct8gp3TenFW6bZmLW",
  "key24": "48cLNHgAJ3qSPHPuCcEfZTx94RWtupH9xP4xTyTm7j9vZBUeEZEp4ux8pXbQs1MUamDdhyfetPqhaXYAyWxV14re",
  "key25": "2xvyWrMtZsV4bZe4KSzypK5XTh1XcWRWDujpABX8HiRAE9KgnaUtuiVwe1vNryCGo8FG9cK58FWgk12foNadTX7B",
  "key26": "2NdvUn3cgM96PDDuwE3tMXz782BhZCWHgEHPQp2Qpmf7bP5R5LNaCDafEuvRjei1kc1SL6kJsgyhGQtvKfi6eZeP",
  "key27": "5gKnaaLASNRniof9a5d2MbY9vfbYvsGAJhmhkoH4mcyrXQ7SkrgY57D7QpdV5CbnAzGrEkpUjvrFiQYAy3BK5wpa",
  "key28": "4U6fEoCrrTdSKiQKBbb6MqA4kWkjxn7NgoyBsYcaGUruREnh5kVji6nK5nPUMzDmL7y2YKkcsWc52ccVdFV2YzNU",
  "key29": "fVAdZj1AyQT59e8BBDv1NrZrTF6WE4z1KYnVQC2AP2eAvWf3RGWikuH5N3KtQriqYTXnX1WH4W2nnoA3258qXn4",
  "key30": "5TCQUC8QVVb3kNzXKZAA2j9VgiNWswWjy5ZPJgPWqYpvs7BXtk3h1Vg8X9YKGaTnbDAzMcHBfvJagVKhDCgeJVuf",
  "key31": "49qAPd4iH8P4YizjCFrx4AXg2aZLVKE2GArF7BZRXbsULPvYfPVkHEShnkMTWhUtmNgRgSHYze84izQsgYZrASKB",
  "key32": "2a7zFcVAQPuZdGqJMDreMwbxPLReayd3wbG4Jg6mPVFPoe6xvzUL4FSpKtYhLKUzxJFUmqEK17YEhVvAz4Z42aWY",
  "key33": "w1Bu2gafaqMC9AhUygfKKnZwuCxK72f53YxNmBzDansRGA4dbDHZbg6nKkRa922DkYD1AUNXpdXx5PFbEBBXFn4",
  "key34": "4c22CUE9eDNSZuAVn1iLtZPPbAzVbfQeX8x1CLzz6VbzzMGEpQRHFxav2XXhpSRTzcjhi1SNb4bpwFhjcUQa1BoZ",
  "key35": "3pPPjpr3mePijG4P2wuoxWqb5cFkL2gM7EMLrRnmMRLUgiQjuPYnJGJaESh5u1ZZSFYyyWWqKhao9zELJyVgmDvf",
  "key36": "37Gs2BvtSpkB8p15EJLDikVVWEVhct8B49FoGTq93GxVQAByuYhhHZV8esT6mS4rC2uyad8FFGyTKzKTgAKo5vQD",
  "key37": "57fLHMYK9e8pcSt4zrAmGL19rpXu1gdkqXtV2gY1uEXYJ2mC8Q7drNsgYLyoARJgwHrBLneo5NnRmZHyppJJHQrh",
  "key38": "239eRHYx3wyMuih9SWQRVPMG258NCRy9DdUBRWdUCNmkj2b7UWt17fVUBCpUSTdRsjPZdKfPGcPPDnxXo5hU8z3L",
  "key39": "4Y5LhQrh96wp4VxaMbyRt2b7tGjJ2CeJ2to64NsB2LBuR6H94pNRpbkMSwpW9xsCiWrW4JH8sgRCg1ca9piqhMPh",
  "key40": "3gjamZvyVDVvmx2Y2uTzEJsSbDCWvUmnPShEGkxt9JUATSDLepfNam4rC9f3yw1mYhcFjcPJ7Dg7a5mm2fCJeYgU",
  "key41": "1HLjbEjoYdbSLpfB8BPAHrkfKA7tUcEoZff14zXDc3wNuDy1iVZTYzYvqdiznszpYvyga3zuFtX3dgEVyR6x9HL"
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
