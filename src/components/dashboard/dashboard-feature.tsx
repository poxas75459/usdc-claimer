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
    "4uk1KiBQDpzzxDPr5ayqDY93hrnPiE5CwS5ELVtZZ5bKbLXQu6yCFRHrvSucoDjnsZfhnGRFVcKMYsdnbp2cJ2Dc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mfS6VoCsuKFMuCL4tv5ytv4QokdFkUcEZNoGmK6RYawroMsweCUNnUMCFmiDxNM2G5fou9ATCBLEHkNVV7Wjcm1",
  "key1": "5gprfyhWsePDjiTGvhiAY9NB4iXxJGrL8kpZA2iNy9wT525MeVsydoY6gFfPAatDYHdf8d1ELoVNxbU8yvPzD3Ew",
  "key2": "2Qt1sY1jb3XgJ1yHydYNiQmjfck3GMabJgjQy9NtbAKfdDTn4q2Fhofhfj7Y73GXSJ66emsFJbUBBHB9pEvB76hQ",
  "key3": "3JwfTW7Nrk3PgsG6cGeoxqgqmC8tARPMDVCFcSBbCkH1vx3nZ54kx99T3LZu6hEoyfM4QiW17um7h7aw7AAUmiJM",
  "key4": "3bNYC3jEuuxkpVRLZ1FniiK2ses6Rj6VuYvjH12nmeAKK2gYc61V4a4f7EGE6ewDSfvXe1wGhcpjzUGsKpfT3jt2",
  "key5": "5FjCucvjNyp5faKM94yMbXUEJ5GCemGWaMZbLm7QbfgCZVjnCBEYTPL6rzWpDuFhhnMJCrAn2A4aagz3NWeFyYGG",
  "key6": "4EJmpkafkqT6SyA1aMDbQCtiEsA7x52Wssq8gJYEDYvLZCXkECUq5WNqa4LuCruGB3s2jA4HyRSzevnxgWifG1oZ",
  "key7": "4Sxb2b76sKWFcqA1Ag4xa4nMGzdJwCPRtcydxhHPipmU2yVEkj45HK4KB2r7H34dxyNPE9KioAjssiujv1c6mdFc",
  "key8": "4UcjA9xsAtmjoAWRMSyPWkaVfdmbDzU55j8315ujXuucnfgtuitfonmekzru4WsCj7ZVkw1qMiTx55WvTNsTmJLo",
  "key9": "5CVxhT5SvALNbGZ2JjEpHQoEMBFVJfTEiGwZXDz41WcpCJhszU5vEtCMZy6nbJ7kmg91wvuGvCk7q5aiBDjuK1hv",
  "key10": "5bMXNDA3Nseefvmkgr8G4scNAVfd6sNosqhW7SZjCfmuBQ1bTAeRAJnx2iyP9RW4MZDxAgFTBHm5GqxedXM3yeRU",
  "key11": "4XcmATtg2KhG5q41cQ1LvoiR3f3sgbFTVHaGbYfsRYB3P3sQ7Q55ULQKk3bdjuLd1znbcqPkN2PNSV8WnKz83fUE",
  "key12": "apZAyngkGa9tSSvSmAKrtFrY43ZUerVJy9xA5m6dCkJmwaAJYBWtkn8GWMLmJpyHPi4VrrUukJ5ZP8baZkrzuN6",
  "key13": "4XuCkQFNyFncMi4aepA4VfyPbFC5E6kzd3ryHVTyXVxsxZwJwRVRJGYKLSreumbrKLQjg5kcvfYdjPae9dZ7s6bG",
  "key14": "2yb2HFcfaakH5KeycTiAQpW81U6744qE8VWrTUATxoeb9kMudNe6UiLLWBQBhsEFrgP7Fm5kZqoATCXQqMLxcvAa",
  "key15": "2jZAtTpq3R5GLkyVBSmjZsBZLQk8TyADGKKaq9UNS2qeGEmGLt6SXvqEGiN36fHuJxoW3NGFy1rBAEGytoucSvUj",
  "key16": "YAH65VCxYsrVefdSWU5KF2hcAPF57v4nXBmbuSDVH82f376Y4z9niyu9w67voFyH7FgSzPCeNMJJoL7Y62tbwAr",
  "key17": "2nmPikysszDnYkmrRxt3AgQttH5RmdYfD8N9Pb4osA1fc38HkA42n86vaseZoXpkXXrr9yPGsKh6RuadfMRWXn8S",
  "key18": "4wgbQWNepjKEJ56P5AvX4BJxWmeqRZgVzE4TMPWBfgiXjdfLzpWEcQVhdNbcRVugB24XUB85hqoHaHkNfKSnSiuX",
  "key19": "1293AkyDJtQa7R3ndZasvYdMPUR35PWhgsCK3Ybhob555nTRrwaafXtJXeSWT6FWcC2Rq1MsKDznN2MhvqgHcZLo",
  "key20": "55Wt36kcah3v9yH1ZvZocHn9qdbs6Ww2XMnWxzd7AVyLkXFHJE78mcuby5mv7XejJDJSSoPPv47wqHKNfsLpNses",
  "key21": "3rLAQn2HiJUzofwfvmyy7jaNmGgUqwjFtazJVttQmPgN8ko8avdp94NJAEjugzwSKrzE7ULfctcgbjsVswNous8t",
  "key22": "4apgyTSxid79MXFo8sTprPNLBfd58LNLpbESBj4byBLvkTorHPraPw17wMZUyQ15km2xKvBxEA7rJt7g48NtBQiz",
  "key23": "59rDNqu4NA4wzi6cKMeyW4CPA8uY7mdqWw6ieNe8k2zUt5SEHMggPQXjfk4NbKagjDAk1FyN4dwU7PNRpsEf64EZ",
  "key24": "2Hc9P4PD7c4ScuPKfBeKVyC7bu1tf7QHQ2kWuQLBonqtZVZFjWQzgbMSz24HKAgTZf3BToWL4jXPeVGMKXWTUUp5",
  "key25": "58YzVdidLxNfvSBTxxBc2NYK36WKu1vsgPuE4DDs7Ap5kRU5x2N6qRdFfKWgGtN3GDyCEg8qp3bpHX9TzJJYZYyQ",
  "key26": "5ZgEoJEb3zH6tEbLxyHnwEsPerhueLTsUUFSBaewBFV8rW4dPQDbxrNmi83YEmmGjxKbJ7wNPWQ711yBfrJDUEBU",
  "key27": "3WMA8tyXhNuhPyrd1E1zY7UZbyPXyWRVD7qtUcwLn7YoAybKwD3tBVSPNsGJ2yBbxanT4McjUWqwUYGk4zSm4YTk",
  "key28": "3kowQJUF42bPAJLPnys1unbA2ocGse8w5mtf3fzn3TsXakoa6g8Q4De99TDD12L872gB6Dq8MsrXx3dMuiHy78d6",
  "key29": "2dDT2ruZ1pcZZU4oDer4hZgy9UPqavTeEcH1x4icrMRWR6WJUWruhkHGogCM7ZXQqVTF7vv7AsJ3SH2DfthjhyPT",
  "key30": "2vTMPymzrPoEAGCeZPQgjFX1SXij5rjH1NFB4YaGmdEkzbpKHbAta5Fon5Co62Z5vGNX3Rij4yZ9VxjC1MiiWhnR",
  "key31": "23YxS3nYotwdV7mHMssTbnqX5g2S1FBHRhKqfTdqtodvWs4i3xxYraXpFLp7nJUq9bRoXQGtzT1yMLyBDnMNzaiJ",
  "key32": "5A2qdYBVkp6jr1hDEHqB8394ZEykr4MBZskrKrpfuaDYzkhHssuY29aijpQQZfQaEcwgWj9DnTxupEK8cHUdzDws"
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
