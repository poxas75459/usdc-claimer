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
    "3ARmsxaJsR4iQc5Vr6hxgYd2pxU24RXhgGxXQaGm4Ls3RSLNWosAPcC7JQ7QK4WbDNXUnHtk65jh2PY53ZzEMPFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56RVwAoStaYgFDBJqToB54ANCET1sU5TkazYiCMZ5etpNJ5s3cQUspew273f91KVGbPMJz5G4U9Dz3BSgPwpheas",
  "key1": "2ivfhWfSh1qzEaqw7QqvWdYXi3uBgdZLGyW8cj66R4ejGmBHwjtuyQteUyMgHDPXfz43X665n8NgJZBUAA7ErYSc",
  "key2": "5EUYwTYx9ub3yddsyZTi16bFTwgAQmLas6EKfPY297ejAy1RmeCFSTbr6CDandM6nYZYezVJ119Es84Qb5jLe43m",
  "key3": "4CiTMNYPL3ymw2S6CCJBLE7snworiakUvonr5iUkwfsTBffVcVTUAAk1THeHWLbj3ePqAuYrs8rxSCoE5BrCKKRU",
  "key4": "2cuqFPeMNMgy46LkrJn9xYNkGsaeE9rCVDNBEQx66gNZoHQvdin1rvSFVqXYLnghMNmkseXWGkxG2d1ukpxCbhfh",
  "key5": "4eHeVLcMHPaMM9TDM24VhRYqMP2TABmS9Pz7cJZp4QRUmWS5mX8UyGxG5hqjue7uLrpb36FVENiDh9aFTVSh64eG",
  "key6": "U9tMuoobuipx1LS62tF1p2YkNz26nnBAK21HC4t7f1YVfyWpHvbgwRbd41SL5D1ASUCwWfpEN8Y4xpNC8soXXhW",
  "key7": "3grWLaJL7PPs2UjoAiG7bwngwMTWyU1gXNoWPczw5DEu44Szn89n1jtsnERMKsJCZCskiW6Wp59ME1b4fgxoW5vR",
  "key8": "5cyhRQ8Auqxrm4CD2WS173px6ihHhGGDjQMb2as7gBTn3rYbxPV921UTG5u3UTLvdju4ibuZ3iFMrPx3gW9kL96C",
  "key9": "3wg7vmGU9XyMSj1dNvdMguUKq8iux5mrCBbXbD5Z2WaqWmH7FTXM6uRpsxXFhX5NkocQ5sTjLbLjMJ2s2U3q9MnN",
  "key10": "2qgsEVTWwpvkEMqYYUhRtMm4iN6f59xQt37wY499hrQU8x2ggtjDEhDwjNaMQnAT9oC7AAkuMUy4CuwshBD1FnjM",
  "key11": "3FHVY1N9bqCV7rfnTF42C2ARd4aywwmK8xX27J1ZMQinBb3eT54VLNB9BEp2m3xjmzh895d7e78c1V2AkLYohjfD",
  "key12": "SYoUJkQwcijHaV2bZHnzg6pV7Zgp8bu85x262orm6hVX5rz8rGTCHToDnXCJxVjdJt2UB2imyPSybhPrfZpvRW3",
  "key13": "4DeRUMW3iFPXU8zhhcLrfbHsd29eLqMDCZqS3V5zvZammxWmgfkiRihu9kvfufWYtNvzQQjLvrkzjJogV3HgNqoU",
  "key14": "4BKseA1WLdWME5Mbe4BsQkseRGypW6usp3A9jAHQxXzBxU6wVRqSbjWTJLPPkDGv8goMWqisnfqVQn7Rnh4tHTMG",
  "key15": "4ZxWwHkTK2EsmdjBH6GYvdFbjvr7Lb7JGZ79CGZT2wMkc5VMnNUkfVURNij2jMh1Ustv4B2ecDh9Cju472KcrBsC",
  "key16": "3v7dNZU5ZvGBk8r9XbGLxNTo1bj9QxjpkGZZ7fTGwoFyALAzoqFaycT9avj9zi4mqDiDzNgcBfPo1VQn5c7DKpCY",
  "key17": "5AssXp4ETtdDJkLGinqXGEG8is7xhvBoag7BH3xBQKiAxCJmgdMwgJYCq9ASovP17Q2waW3br1aPbXJuiAc6s6vw",
  "key18": "3cT9NfHPgggMmGwz7TtZCPRWR6XrAuSpRAVzmVrkdsTFKn2jCJmpsqLSyyCryL67uytAeJv33Xg6caqSUgnSnJRS",
  "key19": "5UNxWsz6q8aF4qcPfwsGTtkJqQfUzT3cUc94zrcmN3zepER7h7RG5M5yoBHZnZ8MxeXMR5SYo1HA9542dS9w43AT",
  "key20": "37dBtgx8HV5tR9JJdEQ5937DS39aencMUxG3ib5KLxJg2ZocsGk6vPZndPPsXbYFaoJBjYzjaMwmoavCoLFbL6TH",
  "key21": "2c9UyD8MTLM7rU4DFv8dqGBjygmi6d23FftmZaVZ7GeAYwZnqY4eLneYAiWYA8iT8ajjRRQMzLBm9PZTmJNptYXR",
  "key22": "SNZmwjGTnQDmuXgYxe7F5qC4VnZC41iiGV9YztraGSo7q9ynh2wK2oL9MwSAKVER1tbFNSPMeJafzJv32oQvx67",
  "key23": "5tzMvDkgJxoSggjazGWMGHZsNJTy7yoCUiaZyQiEH3mAu8fGWE8tVLw4xUojj7JpLw2hdzkHTL1aXK5fJ7PXyKjr",
  "key24": "4Wmog6ahHcCHuxoRucMGtj9RW5bX1kS4yNgF1mwKRZmcngfZvWiNoFEuD2Dfc7HvWcr4BGbUsAfDVvqv8fB9cioj",
  "key25": "3PmzEV1GzjhBYt1DXSB8XXCG3ZGk7MmAzzgmnHiACECjjFhotpzPzbX5WgC8vid5XMmwcwBWm4pazrVUBP46gwZR",
  "key26": "3v1aCNqbBVK4tvoE9mqkAfjTJirULbjrcCiBKvXsmTuvghxDqKUuoBjChQgNAqF8W5wvnBy7mHYZGJuMVA97AZyv",
  "key27": "4aVUWkNxfGbPdL2dNSAgkndG3sJo1rPMG4xE4U3nJmXt5rpneyVAa3A4vhtv1vE5jK5cpoGDwePsVAWSQVpXD4kx",
  "key28": "26Z9SfrxckfDktbg66esirtnFr8NnubV31wKd67JeYPwmCUb3x3hoheaDN7b2Cw1jWYchsEe8PLswcYPfUCG6fT3",
  "key29": "4GG96otfUHQgfxoHppNc5nBY5pHmYW5qJpUrREX1Gt3qdjFfMAzLLJVQUScHnhbGvF6wVFB7ece3XGkgt1fxonZu",
  "key30": "4aZhxhY8HtVKSS6Vi88jWgMWa9wkdhJ4GEGuYsnaJktMn5Ube6VGA6UbXW3hz8gDVWD9kYktsYUuC9tBS3hSSmc8",
  "key31": "2kunG8aKe2cw6xPZtCjdrKBQtC8diuzYCPp8sRctHavyGom4G5F2LmXZnpqzsjDvGstPZQdH4WZje8YPdp9B3F7t",
  "key32": "2fZPPjH5bTiUuYyfRbFcGrwgT4N9cmynr299kthVrX8cDcZSHUcZRP8xpPHwUjSiezAAWJ6QqY5ydwwqQK6iF1KW",
  "key33": "58xVesg6Njzw93AYyFFp6SJpFQPDD5eaubg133afKM3GvMyX98aj4tdwMbKqDGzAnXZBYowCvFCqBf9PxWNHfLrd",
  "key34": "3Jt1DKRuTsYnEDqVRT6EAr4xXKGYBkRP4MbgSCubw447wXfaTvo5DFEthscdNHvzzLnprBcuRvXRUi5x6TgGQnRe",
  "key35": "3UuK9jAFH9zGC1nFBNdx253avVhcfA7BdaKFy4qPgu3GeHicnN8sRNFtJ7sUBAPuf5sgvs7JYcVrSCtcc9fWi5a7",
  "key36": "54cHGcJbmYN2P6JEE1VNUmyo7pCibdccJoDkvJPHzo4ucEtz44DSsYUYomQtSLGkYxKnsPFz6w1333RhYPCzZDpH",
  "key37": "4ef45a1PHJrDZScTfcUtCsCJQJxc7GYPFFuibf9NRFCPk7hkPmrPMoS1kVtfWPPJio5sWyX3vPWFFLBcGAuTvDjL",
  "key38": "65jkVwx6f654S5jyXyKtd3rhwz5nBY4kKaw6zJecqqhsdDwWkmq6zXmVTLnYfMRCjJRG8VNQioFg7BmkjzqqyCno",
  "key39": "29uwgLpwK5fWxWPhrauzeDxsVhyoaunJWEzTgH584xyiA3zKQz3E5K26ctsHpvBixHkCYWd8c8Emz7HFntp8HT7L",
  "key40": "5ths7joEPoJM3HdrsYMKpqGWn9c7ZE9pDoNMcv16Tet3Vy4HWSoGfm53onzX9Ssnd7fK55FJy2ps8n6WSrVqgvn3",
  "key41": "4wDWMtudHosu9NE6CqLXP9EUeJt5epiuLY4HZBPNnmwzPYCyhmc5TKWM8aSUFxo5zThxciXDgiJnS5PPs9JjxSqJ",
  "key42": "3qpZFRY2xV4crJA8JnhYf6NwKnXtDzb4t5Lg3LWjMgiSmyg2Q9XYdeBnsZGfaWjgbSztBPdSwCktCbLPQf3kjHNq",
  "key43": "31kTBAT88n6z2gqtLaFHFj2NYoLT76Ez9v615TuSY9xtA9UeLHn7i6s8FFNsX9YVcYazmfJsTHtCx9mndYfnM1Ut"
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
