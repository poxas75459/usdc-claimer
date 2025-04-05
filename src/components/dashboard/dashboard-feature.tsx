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
    "5i7VhmHAFSVxeu8c1rV18APyPM7VX192BL9pi3eC2z3kRQLmuTD3EPgYdQoHzW6qoQmGW74yGADzLTc1qQ9mUDos"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y6beXfLWfjpGSgPWW6cxpiQH2Na7fSJZg1bmog7C3kcF54XSWeXcYMAu8nusiGnM6vPyQtLFZiza861uppxjcSx",
  "key1": "43G8ePt3CJWB9x5fWnbj6rJnoCWA2HhvuFnf6GUQjTHKfoFwY6dafVK7WKctC64RzP1i6fVYA1zZVY1JVfLgfJaw",
  "key2": "4qSqkwg1zQt7DhyvaQEKLu8E72iD2e7dm9wrnnDwL8L8VnU8nJycBm1kmRikUntw1xkWgpL7fBdxDBwp5oFjwMbz",
  "key3": "5SYbrxaEb5CuHDfVxZj4S8EXdWyxqBP9BDBNUG8XYJjd8kNGswN1pR5zQcnu9inZtc43ZfQYsojFMAaYFqMJxqJd",
  "key4": "5viLXUBvhrorB7Zgo3DwwfPEwLdRLv4ZARfjymkz6UWqVBNXLbw4udaFEBsZREuGnvkNi2TkCtbykMahsxEo3H5S",
  "key5": "5udeF41bU3cSRN1nFy2bwCkt4eLHqF98BQJrXvRCNuQQcPStC2Nz1fxpNvoddTy94aXDvDcYzT1Z5pG3fAXNqzW8",
  "key6": "2GR6tCFnbLgQsqWmavJB26jkprZvuQeDo13LkhJEgUo7fnfPkqMMrbqmn2h71Vn99QuEQ5tEFGmAJGRaSyFBrbCa",
  "key7": "3zC6FoW15yDVkaAruSVxMfMU4Gbpon2Ux4cq7JdemimoFykNDawPB8FceUs2XgZkgooSc9Zd14o83HjHgCDj6ovF",
  "key8": "3NLrXDYMCFGie3W5QrjADgAuWUpgUu4Zcf84ArMjzrCw2KcQ9jcL8o6k9HuJC2E2UcRH6UaXMQnxifihfeSFio68",
  "key9": "8JT2WiYnTQPG656LFEc3pAURHXqZasmVx97HFRfbgtgsetPck2qZgCnaFTmzs15kdj12R86sJWcs8ihYD2mbubi",
  "key10": "5zTGnSEfWhf1MfuqLeBW9aPGcpJtFcmCfGb3cSjwNirFx2n6YeXPa1f9mXQRtF26j77BdV5N9WZQRuApVwinxAXY",
  "key11": "7STp5EXQnUGpcioy9kmaD4sHcrGNRrDTxQTtc7XMrkg98L4oNUzt1xPkYXEPirjHDWATjn7y7pr9PxoaSopgZUw",
  "key12": "WyXQSW4nrJHsx4rekXVdJtaR75JLkxZch7xxUkzxwo4ULtqF9dpkSwsGwjsFEevGk72e22y77QpPaxE7re5srZf",
  "key13": "4shHbiHCsEhH2W8N8Jjwe4fNrdr8Xr5e5oMMK4aQntX2hmvKf6vEznc9KnKJFWZn6W86LPdWiNhW31TrPT9SiZpV",
  "key14": "3BCNzyXRiP2CuUYMcCVcNe7Ja8sGrbFEG8XatfKyRFfuh66vShBCvwB13XZjQZadJxFVVxGwosv4YdnpoJCqRy9V",
  "key15": "jHCVpH7mtNoCCPFbYUeMsWn6Ns4X89jfkuZdr7qtjKPEcGJh3X6vrpeZ5fyL5yBy9Xv22UgNaGqGQhCsZS83bBF",
  "key16": "4m3QKttm1gEfGQ3NHUbkkdBVVTcnkJnBP3KVy3Y5wdXdwatdMaYrtx7tr1FGAEZfzaT49WvVbLRLszGm7fgxKGx9",
  "key17": "5V1KjC43bEW976qtGYLKZWKjUTwo1VcVWFe5MwXg5gwB7Wr8pPC294bdHRnFJ3eWpybnoYPGdbt9umwYchcekozn",
  "key18": "4RL5SHcFUrUGTTxN43HpaG5b3oXbUy9LKhsAGTB4zC9MWiTpwsCbA4g2bKkkT2RyBwwMaz1mXH4e7A2M8KfktLre",
  "key19": "5MRD7y6E5JroSQMpoAH5emhT43ciqi3zZvJyxFHHzbsv7nFJDXrxbEkNum8phXwVkX4CMBuM2RWvSQwQhicbAVVh",
  "key20": "5ajqnPypAW9CSCdDNtrdKDJ3BLkVrJCyfGZ1hQcjucg48U5K75u2j12kyPdFS34D3Ds4WabCVFFik499747PEtsM",
  "key21": "3LUcyiYMUYg32d7GtYFzMLoQC4qqSYEcYZ9XR5x26PtNj1fCQg2K1MCyARKxJuzcACPYfPvEWUJhNzY77YUgnXy8",
  "key22": "oMdwgFXrVFVbVFnvcCzW6mCwwJmQBUdmfs5oEnvYYsM3Ea2rU5xi5QTFNSjSqWnWxEuTR6esEH16dmhA9jYmEPe",
  "key23": "48ZtYVBBnx1ZxVm5TtpF3pockLRBxL8ZbYzg27VCWtvEmS7kTCpHGBfojes3RhF5p43G2dE5G27gBsRpW8RCo1wT",
  "key24": "3pskxYwAsoXnXL6sQUBWVAr6HTLkGn3kbf6HxCRqAZDyhEFgDKKs6sM8u7ivKZCD6ZTdWEcRhkVkXGbYF2xrXjvD",
  "key25": "2ByEnsYgmaPHprVEsaCpE82xEtCkjpgzhKWRfmQ1Ps4f9RrJRsGXyQu2RYa9YyvHBaK2uU7PTKaod68bATjNppZ9",
  "key26": "6298gSJSuhq5cNuWU9Gzn4zLz3xhEH94xANwrWGacLumEjAJuitmN2vUJqqMKqKvLN5964zzYmTZsipnxXKaFhjo",
  "key27": "3Xj3Ykvv1yjjfw4R1Pd6VcYnwoxFJvM49HZGFfCpdctRR1CkcxehCY3P4bDxzCAw8EzDvJB8RFPdTQEpcQbP4tPs",
  "key28": "QzW8D3TMYsWB1FbA3qzSXZ3hsV3CLj9Mo1mKEHGhvHgJP3Vcnt62XFSf2wJvyiZ8ze9yB477ZYVEjWA1q47WyUa",
  "key29": "8imKA3ySQkJ6y87MVdmNh2XRRYkewVwfQc25vHNzry5gRNugLYJjuSqc1VQftVej8Cr3wwqkfDj9RM8YBr3jrnA",
  "key30": "855GzFyPCerWNWZemKi4nrmZeiWpQGuwG9z67fNLgq9aSew2CYoa1Pfp9AnhXwHCo2NVnNAff5sL85JjppS6nC3",
  "key31": "4Lf2MvuAmcRh8t1PbHb3fLsmaRDwZ98sK1genvHZX2DCzApsiyza1jmZznrt6nwK5a8r4bPkZKNsjfd7kYdh8NbJ",
  "key32": "d1Z8qWi8cERp9uU9eZZvUe91Nm2cUYPFkmg5mhuMDrx99gUrwA9Xg3LGwe8Nt9ZZ4aSm8nSMzPE4qXRKNMrB16U",
  "key33": "5iK5XBSFnEUAc2SoHDq5WQnTB2ntH7xq8k4jgRNMsunSubyf2Wcn11pVfEyVHPhtSCNQ2MHy7ZwYJqpomfCYUkWt",
  "key34": "3xkv9YbpD8oZbG9avfwNSfAJzzmSmyrwdzcq2ociCsvbrHJGYUi3Nx2ZW7t4DEf5mBmGe69o3AxW4kAYqdr2jSBB",
  "key35": "546L3sag3M9PZ1dKC8qGZecRcZZtvkwf2kCwNmz3MtGwHcNivT56wyLKGfTayBu8F745A9YM8imW1kbQrjFKFdQ6",
  "key36": "2FNAk6wKEXGxsp8Cs2zCW2riGJR3HCWe6bsSgdVFzdTu9niLoCNg9hmsBD71J8udKYd6D7d67GRSz5WcBRzRQSNX",
  "key37": "21Z4Tb83RYeq2HHLLQqsU9WM543f3U8RUydWYskGwJohmwa82xXxAFT3jE9VMGzsRUbmi1opQXs1aEtqsDcgqGRz",
  "key38": "2Y7XEVKqrjg6YfGDmLLdXVoxadgAWLZkZBzGLCKzhmmA2xV1NMEcfrnxRinFdF6BifD6rWJP1MvNWHuto6cDKDmH",
  "key39": "xrUofwH6GWiDAbVHzaDgHoMKFqSNCYkD2aKAgiG7cZJWwaMsqT2HvQrHfi2t6fHGPnUP2CBb7abubsQZZuyZGwG"
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
