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
    "2XcFEjYwk47gwFXyWpqJaYWsyTSqp2QUGDmZBBaa6M2sgKj7XeUFCFNi5GzoATJQdvAwVD9moL118NFgefacvsif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c3EBCPSCytHy9eye2JCjqeH9C6PL8q7bUyk8aYhbEw22YY85dkdVyPmM7VSG4vG5yetnyFi21gS9XoicNbehj36",
  "key1": "PCRVQdyEfPDF5sAikZCvGnfSBtuYFiz3CETUZirBAYtGu4cm3oDxWtoWBS1cfd14hJrEfz7hFCANSDUgXq551Fk",
  "key2": "4o3apNwMoVGGfHevhdeVx5L7WWNXXMZGYn38SJQCzbP6qfZyQZo2Ma3S6oSnrZVPcQR9ANMPx3bccYJvMgR4Rqpd",
  "key3": "2mpk7z7sL9QmMhkgQsDroHt7XM4vkLmhS37H6NsZQRFDEhqzWGo1CtKke8uYtjCcmRfz4huKkxHuNF3CZXXWR2Ut",
  "key4": "mC8Zz2Z6DYmenmqT15bBQ4JJrXCuZ4H5nYNvqU3np7okbGPMFuvH51KhyCzQo3YG8Fv8y87mL4UkTvgvKdvbcMX",
  "key5": "3eY5z8UyykzUziDwdPFDePJuFvjKL5koN4pTQpgchXMdNEzDXsi9ptesY3ygHTgvTUGZY2Tgx76fBB2qesPXLJxo",
  "key6": "5bX9KWm368o8j4GWJyL8UkZTp8bdj3Pu7dZ5uyL2iFx9LZyLYSugpQhV8xNJtVYnALacChsyFwcogp8ZkhkkfiAw",
  "key7": "4SS2rFc7JXrCvKMxR1g8QStGcMepU8vPc2W9w1sxL4EHrVVXP5Z2TB5U6PipjKc7CDshqGjoyVHDrhkagSvC6nei",
  "key8": "n2XunL8s5imfoGDAfcRTVox2dvwYkumFNaGyiUuXGV6XRztgZrQU7smdTrSYtXjac8Dg9gCSqybThhufcaJcjTT",
  "key9": "5FuovC4ZvRVSCHw459a9eX7xdMYnjpnVmyfnW2rcZ4Q4Jh8kVEQEqTT5hjSQvrJpVjeixCSrLow9YH4xfVBPBwFC",
  "key10": "2aipa15nyFAQf2j1xSotgs36FHFSRA1gvLwrKUJk6GnbxCSNuaXRhgt8CkixEXPWWMyugUsxFNVPdtCSpaZMTCW3",
  "key11": "3DYWkmfmVjDQrBGaHe94PhcfcEsn26fUch3y4o2AkVjhKkaNcyQtam9ThojTsnxaLFZPB3s5nXpAoLK1LQxWbufR",
  "key12": "3UxgDrQ7QkhkzpXCyiQBavrwXVVm79sApgzCJKySUZQvXAJFRyeMGKTUrLhJLJstKP9jhp7aBsro6w5zwjNtuxFj",
  "key13": "3rCeZSJFH6NwvAHQdkureeryhWAf37nfn7EByhzLxhpYq36WsyUWLNPwX9UuZGPQtXBBanBQHsH2b8gs4g28ijr9",
  "key14": "wDZeD4y82iLradymXv23t43QLsNoMEfkP8yqnxVRVcgmeTyST2RaiTMh1Wse47cexVUs2KVJKyRvfNbTKCKVre8",
  "key15": "HAzjqBwppyZox2cj7fwrpXBKZduGCggTTToJAxxG6JsyJjzugU1zLzXR4MLnStQTo7KnPkoXtjuSYjHLFNRwkjG",
  "key16": "4vzN29QT8JaByEzPmNnDerz2CQBdrZo5uFBFGQM3C9p3rKsnSqa1oGryduncdhRzCwBwoxKDYHuQpxxraHHxmbYP",
  "key17": "4EX1VuKqbPFLFctTpVXPHwWebr4k4mk4bYMJiVSRtgN6ooFTRxKHdeVrYHKWaa9La4oe7UAc1QyanHcqdogwoPFK",
  "key18": "PgRFuLMUMbedcbbKU2pK3zzBWDafwGu39hQGCfNZztN8UQ2SYEskt7wMM1HrtYHSzsoovshv4XR32LdHxVQF3M1",
  "key19": "44dRLKLaRJsJdtswg3owS8YXv2S8SqC1ukqXme3tUAFqs8XEknFvNELyTesNjKkdixf6YUAB6ij9cbRf6HTNn1jZ",
  "key20": "3K2Yh59bY7qVHhSabsX64TzWkg4wbkDjrCWhJJ6UuJchxVpVSxAdVhxm2J9jW3kNwytxyUNAezeK5Yjjj8kP7RkC",
  "key21": "53dz2LrTx44uGZ5MFe4rsg9wZZLZbfJdNLGUTAVjuy8g8KXpqWhHWr2Chtvb8cSQCMPegxMCFB5vKDush7LyKroj",
  "key22": "4w1iGirgD89xcmWUEsG575M3rG7P35QSg6dvxPAeb8PAXJwg78acDQx1fKuBLkxxZEnaEQjJVgDDCh8eBs9u6Bgk",
  "key23": "418q7nDEc3JgafRLeKF2thac96ANuRYtLG328MDgLBBFdqWu6s9PjPPmQPVPEMEvDefX9HhttxydPt5GhbTjyZSz",
  "key24": "2HeyDRgTNyRVQdqk9vSwJvHmUjR3QsFyYnEUzUCQ9uvpxVDMGB3yfvbzGfLYXCXLxjbsrjRkKvmzagkZUtSxRgtL",
  "key25": "4JcMGinYmhk6Xqq3KsQpg2CmnEKJLsRWFJ2VNdkCrsz1bGaHd8uiconUPQpQ82kMK6y7i1ndqu9WGo7qNwfWPatY",
  "key26": "2GSarfHMwzwT3QFTGyUxePBYNvd4SxGbd2tMxFUFVCJo43tyZobHvtupYndq1KKL1WKsxtedWaKAEA1kYMsYXmnC",
  "key27": "mJUVW8mr3Hvcsfi352PC7LpjuZFryyY1rG9ZjpqhgYeXvvokeQkiGgiFe99eatNu9nJbHicSfn3eE19eJPDMZ3t",
  "key28": "5iVt8drhvtdAvXpqznYXqPqkCcAW8JhtMvwc9Pyw38o1u9DkLCWpvyMZ5NV3Yt8bZRBQohd8oUEuQuM8Ny1vuLpe",
  "key29": "A6HLg4u7FT39GeZsYeKFrRYRJiwwUs7i3BZqB9Ef2TE2CKXsuubjF2HpcmeHiz3QVxH7t9i6TwKmfRySPG8d3Ns",
  "key30": "3gj56ckzfYEEmV7Ara1v3isWANLZRZ1SwqL37BQvJYrTB6xvkvopHaAw2UXCHVqC6M7UFuQubaJiR6ahGbDLi6k8",
  "key31": "4i1T6jqBSNyP7MBu9LqDpN6uGnqdtU7XWwVvhfcFmA1EZVvU6EUuYShN4kYGCZyrFuxNonw1p6GcUVeWUHGerNJR",
  "key32": "5Z9agfjAPUsXnvgfiEjPs8ra8UFMFoC4VRf2QScGjoNfMnhqP7N4LCEaPP349D1bvXkfR6bVHnGJXtxQkKUCHyQF",
  "key33": "3dZqVehbY7hdiKoLBqV8BjRSQ4HnMSiMsPMn9bZeiLmWMf97VWB7RQ4sXbLCuqiGZX9DorZq6nQbKdMtWM6shgRK",
  "key34": "PQH6eb7SAhTdWKJEp2JY7FXXS2XJzdS1sxtJFrxv8oM217gRerWuF7ZySZyQVNjX9FA3zUP89F7Y81EQ554yKvy"
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
