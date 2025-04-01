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
    "3797pJwUPQdX18et8JRy8T1uDtNUhUXqTohcTGwGMH9Zoa6w56oUxj9sEhwoPoJuTRaYHLZsTytJPnBT5Awv7CeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XZ5YSTwHjVLCZQ7qVkY6XV9ddm3UMFsEMwvnKKLGmcDFXEroGcwmFFsQ87XqJ78w36Bw8zofMR56dVNEWqfNTU9",
  "key1": "3Mjr3Aad3qj9pYvP3wsmZAi5ePFeeAF7EKxEKvJCGRQsLEtcCzZk7Z1p7e1H5QGnHyzN17RigQCpdgK27UDZjEDJ",
  "key2": "4CmAnnVXD2a9WUZKJ55huL8wnWT9avAD29qC54ykcNkhLrLbQBuHDVyvBaDAZpg2c4zbf5HFBNCkKU6Zz16FLxyj",
  "key3": "eKosyGFhu5iYE5y4XDppikaPRJ9EuNgDLmGGiRwpNkVWKJXS694Qtp8Y7x1ph2PfXA44r8VeahMAqjQcqkCZ3zk",
  "key4": "5PKcGWFM9o1KZiPzLVoX5YTU6GYQnLK5gtoM4y31Kma1pojReEcB3Fae2HDmLm2H8uaycYnSffdmyy8UPCsuUchM",
  "key5": "4LtUynR9bEvynmZy6Gnk7PMi3NcHDB3NDuiXAbmakuL6MY9poaRVZK5Y5ye1zdck28NWPtScYUJZTK1mmCmNqpuu",
  "key6": "5DvyAYrUfyhgxgS63a6vCfb8sNBmcfhQh67oCzcrEX9qh9vfsqVG1d7G6iNW2jpd8CjG487xXsz9vkn6JYMUqzpt",
  "key7": "4DXKKezGdes3EdLffAkibsCfJKCb3SSRg9okwf6uFiznHrZQ83tLrKrC8RgcbNTq42LYfoBd8eGNpdfUTxjbugob",
  "key8": "4b1JUey7rE6M6LNiborEzwSgS6QbBGyiwpAj1s5A36auThxVX93aRtrkUBbN7ukGJWW81KUFJ5GwkvwM9GDX5Yn7",
  "key9": "4concoCptvLTKRfM5zC2RjeqLDi94A5sePn9b8hwboQB3NVgEnzWKit9GbwaJ8rz3uUJeAC6jSCjMcfuanQkPvwS",
  "key10": "4hfcZFhnpLXA67rS7DCPoPK8pBwgiUXygQCSVbdGjtbSrNSty9EJc4J8uJWZLGLHEUb7Qn5mfEnEVjWkQZx7WKKr",
  "key11": "WkDQhht4bSrURnQC4KScdK9L79dkd5phPbXg7yrnqzxfr4Yykr1hNneYa2Lq4FcwQZtNcPWSJREdUHDpKwFDYFR",
  "key12": "4SrUqpvNBF6duafrGa3R99EawS4MG3YinYuwofvP4799aRAq1ETmDKq2nim3NSLrcKzqzbaR5ZtJqKeMGiT9WpX2",
  "key13": "CWq5X8gnnGAqd2PTXm7BXGLj3UPARDQrxcxPKMDTL1skUo4Qvvs3ukjbUCsv6xVCTaavv4nAa8qFNxrAN15nrwY",
  "key14": "29z9p8ZKv2bxKcpuB7E1RYBD4hPJHVUgEJS6Li6KC4AUts4NoWgWA4SwdojpgsXcm2gS9cyA2m8qRrSqqGK9MybP",
  "key15": "5VGff6TNHBiFdNHz4ru2kaovEdmaqD1A99Tho3jRDLbZPGGZWTPsDCAPFrzYaAkNuo4oFnSwgZVpoWwuyQYRdjox",
  "key16": "4RnRx5ALQgtBkdJw7E1xrJuRDKurEuXTDogBgL9pTidCRPm4RprnPvwcWk1QcfvottgQaMSAsGxnuUoy3QswFW3p",
  "key17": "2YQLNUjBQ6RGbG7vaReXJi8abwE1Gu3Q5ZBBxr6F8MRndcsnBxWBWLCQM8qNSyTQjxVbR6tyonqMD5Hz8gksCjph",
  "key18": "3Sr1T8JtzQ8WUK9EREhcszyfg2fjyKi69ciJwUKo7DeVWCLwY5o67SXdi3afowbVUj2cx19vEghJdQymzvX39oFE",
  "key19": "3KtrZupbKMR1i6PJbrA9fi2PPjJuUhVZZyNsseMpGcJo4TM98umVXeVhaT4ysDEK1GUMJmXwapYgEFL6A2hXuxRS",
  "key20": "3YPHJ8VZ4JaNxRs6tTa8zqgpcMqEnyyDJtW5n4HkUEgdhRoSCpYLKu6EAh1gzY2xLxYkf6fsYJCDQXQB7xEdCZET",
  "key21": "5xvfebREfJtez45mQjmvf174s8nsyraGghfwSNxq3Xhofou9gSdXvNjUomgzcSumkRMKbYy2ENKo9r55GQoFJq9C",
  "key22": "2CzsJeSfCM9NyzrpoHt7sJeZiiNyUqMFSewfsP3FMzenW2dE9VZnXjFK7JLNuesZnxyGSg9CeR5LkbFR3z32nT4x",
  "key23": "5ALznFNGaiBrwN3e36eGhiEtNmd4XJoEBzvTL4DbTpoASh5Trh1j45JGZYyHgexkHyhQgFc5cahRK3KQD24LzmTP",
  "key24": "2bwUDy4sruo3GjbWzhey8DUgbyYFS16UkL5pWKKsQUZThQSwZZQ8TBfPzSqqV7zpYDf4ag2RxLep9wM3sgk4teGo",
  "key25": "h9SAxGnnqw1Jc2sCHWSgbnvPJ6TsmfzFWYNW9SXgjYoq3aEE2k6Kqm5LMeQkvfg4zmgjvYyBGCEyfw7PjGbZj9x",
  "key26": "2541hX7p2LMGoYW34eVoVRiiQG9uZbiigDmY8W3WeUm3Wwt4vmE8DBqMDLo95eMTtU4NQsymP37Sa2m1jXJyFCzF",
  "key27": "28jzA8gspyfzGXBGJEkk6biboDeuB7Lf1LqUb281CSd8rtrfk4XJvoEtqmorM7ijHuVSaFzY4XQCoA2uhHvXnXmk",
  "key28": "3zJvfyZgJDf5QJ6rENY4PK3S2KReFJvdKs5QKa14auioqoMh7vmNkyaZFGPsF1iecrFzLpEntTYXxXXB5tNhRsg8",
  "key29": "3AfjkjGcm9vn2fHYDqTT7j1sWPMyafSR1daxnUimUrW635FS17gCDYHoKs7z3Z3KiDYqQahuSYruv3QvyfveqJts",
  "key30": "4GZQkB7iZYYAxDmD8LycrXb6FKUG5Vj4HCv5LiQTK2Pzj6tMG3eqvcV7tvGz5mGStkuVScXeCBTCoGoWK3hX4e7p",
  "key31": "4VLHMj1DiQKKxP3MvAAr3uY1tE11PUM9DrpnmH7WvLsXG6Ecsqb1bxSoEa5rti1qen1XwG7QQuuJxL4fvRbMcUc1",
  "key32": "3BugQiakgPCdr1vrPqaRXE7GSWDMSYLGdtcUi3GuLichphSnBx1uDcvfi7EoiAxJVtJU3M3FqVz4yCnDCBT23y9e",
  "key33": "27emdeMw11BXj7VG7voCAR4dS9iuJQfxkCsDs3XYhqeyJTwp1rsHauvW3RHMH2FahJH1eHwcD6cYfkzqaRrhngtM",
  "key34": "64kv7iWSfgDRieggMc9vFmgvSGvaiE9RBSQZYFJA8hhLmVqWasLaWZUggrju9wSFe7jEdsxvFMFAEgmjw4SwAMsw",
  "key35": "3BGzzt1AEXACwenfMCwyTJUs62cir3vs7GXiWmqhHXWbcsmquagWgonpvyZRmUF2nZgdFnBmWSvk3Sr5QRyXkG2y",
  "key36": "a7VSpThDK7wpCncJykBzdBrHMDHpR76zAx6UodmEAAFzzrYAWK61McmCsZHaz9ty7KZcgNt2FAsV7czWeHPhonu",
  "key37": "3U3CXXMzKih4Wbh7QFvq6YwAdAEoAU1g7RPwxu7VQCcNB467NEp2LSt4r59Wp6vYoyAYR5MmyANmJhE7ez7KWmpF",
  "key38": "vLhoiRx442yqjXFLhMZEmXVtmPMbCKdJqsRTcLDM1k6GZQWg2WxQN5UPQyjbEaU3yZvHduKZLsU4DAwcAKj8pvY",
  "key39": "21MotccmhEM8wnNmqQvJh3WwwXcJT9sQUyqYWhxhZpVpFEz2XAtsVQR2sUxnTrLzyk2dVbamdYV1hkjX92dp5VoH"
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
