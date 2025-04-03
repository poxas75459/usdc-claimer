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
    "2Ak61gRfbTabdmzVxkuckC5myergS5YoPFk1GXxJouzNS1TZyvR1J6xEP7NVVaqp96KboGFP59zV1vxGudSx27bb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57phewYwrQ1v1qucJh7wngUEzXVUo15kR8VgNMESjoJY5Mr9WKmKxHGj38oVp2XqQMfLJTVRCotkKMHZbjUHDRbN",
  "key1": "4SwLPEagco9oZbTmeKEdGjFdaTmUJMAqEjfxRz9PuFzzQj8Jn8LNcQxxfVFbGb62TcBBhQRQGnW36y4trqtC1Bb3",
  "key2": "23WiR8BXtWiTgfGzgichT46KqCoq6ezzuL8M2ErCjm3npvK7gbwvmBQbjJNuFrAEPTHYRA1VAtaEs2MpyZ7gdEUh",
  "key3": "21WAoYk13RHWHpVDtBV7LqhhqgU7teuC1XczQKdnZoPCfjU9mNABTFZDsn9qJiBuHcgrzSi32CP7geixA5VmoSRH",
  "key4": "4qAkQVEy8idRfUusGAFcKSqmCTTvh6bqayXRDUg6LdYs1ASsMMkYpoCojAppPNjdwhidCDs41ibkPnhMisFUddXd",
  "key5": "2E1PVcV5ushai3xkYMhg3sEjSLhamMs1Panc6XmFiPw7fWGnMctnknPSgLWSZJ4mSiVu7jwJ8Vb31M4SiEqx6GUz",
  "key6": "2tBvRyVfph4DJoWicpHfQvKdXZXzzK5mVSc6xMe6vFw6cVjmVTwnkWJh85aprHmc7PhgMWV2qAujRXL5uANx1zrn",
  "key7": "5YRytzyRAUiqg1FCcuuY1PUEJeQxBTDe87yXY6PvMrUrfN4EyX2jG1Dx5Hdj7VuFBsJmp7bz2DikDU4DNXcBQ5F",
  "key8": "2CWbBPpJ1bNfYXLYhZwo113QU4YTTdTBkRgfsmXYDAaKoMeSRughhYAkMyG1f2kPJyjJa8oDbn936RAiRrbiKKJG",
  "key9": "3nPDpGQfLWFu82JuviTfjnhYwGjL38nm6GWtQuTQYCwuLfZdMWnahdiCMiJJgvTrxZ2Z4KDuurpPA64fq9yDMbjU",
  "key10": "4BJ9tX7ceF5aXsG3wwdWwMBbnfbv7W3xSrDaz6Cdxq6WhtjxvP3jnuKvcTrjU3Ua8zWiuPd8DczbWDg3GCsFp2u1",
  "key11": "PygZ6BNJAAJTkx1RADRBRhMAWtsmffU1bVBDCLJcBVvUQZsbeWhH635Jx9dyUQ2F2mLnT6uw4ZS9TXztXBzgheQ",
  "key12": "26Z35khKxSsiRQnnL89X7env5kQWkhBh43UYPCgG4afn5nCtDb4UX1RKMnomcTqbvpsdNsuub67LtA6JGj5QYzu8",
  "key13": "35VvheTuURJk941ZA6gwPX3MwR1u5QLiu592Awzy4nA4UURQ66NVnGqfSMqrmhSiihu1TVNFV7Z4uruwC6MH2JiS",
  "key14": "4ijBfB36XersAsTyi5bcpnxj6QDESBmPzTwTbZE3aduKGiq1UupJ8xtsdTPCmAd63FQdGUMXRAGRSujtbb82c548",
  "key15": "4oeaQoC7ySEkPF8CnwK4Y6fxgSZGZspfAmHh4A47V9DqAfDbKyrmkHbjFzoJb1gKcTyDiYpLy8e73HeM45VDgmYB",
  "key16": "23yN6A7z7ib1eTdWEyfbNyJD9d1YC7DnhRZwp7YcQ4qtuvKCDAeFMzr1HdmKwz2MByNscoLiYBF7VtJx5sgWoodj",
  "key17": "3dy6QHE2ahKXvKg9s2Gb8z9AKdS9yYuKkp4kZdK8fJngQ4sbsh2oZLNixqqcSxrFsr3sEptMwNEpXWeVNcD1hU5b",
  "key18": "5xxgCJGedReJkjYamknqHBfHe5HgSYKKhqWPdjGsVKNZuLtfhL42Jo3e1vfmutGFDrGvFLQQMc61JvgJRYF17vng",
  "key19": "3AWTRooGK8uWgkAUKZyV34KPgvqwxqBiCXKXwmCfWn7WkGM2DYDK1vzy3a6h9QoMDoM4wr6oP4SKpsXMkJ6nCsyt",
  "key20": "4RTKBKgAN4zERmZqJpgBVhRuuTMcJ7LTerH1nSKeMZ8x2nCHEMB12YsNs3PoMX4MN2wT5CTLbTJbURZ5dRgvXSM3",
  "key21": "5jBsy4oG8GKAZDwQpbmPJDiLWvBv79CTPPRt9iJKyutKTaPPnLLjqncpL2pLuAjo8VrUTgDqVKMZodzRLw1gVSPy",
  "key22": "5yMNtjYqQyLJsccxK5gy1GRMtDZzYRjADr6Fdd4gNh8Y2brv1nKngZsGEVz3VoN45dSSqXUnULWSLp2NxPnPTqxT",
  "key23": "2vo2BxoHGFSCwRMA8nFczyFoFW1sLfqHDpPNWm5WhaVZfrNpFCR9W7isKjrMsCWgWrZujmhH3paeSZfRxivLjjf7",
  "key24": "HGrseHKSHBKZTZLfYgMm2Q3x9GYjmuWG9KnjSd1EgLsa1r4ZxzmhELfYciGpuotJtEmpdjzn6eRtpUXxxyzpPeC",
  "key25": "DXfwMp87vrhxxzL7CQtBMBbJg7HpWbAKD9gQqfW5fNA3Qtw3jcmBftzz1TbiVxAMXXmo6PY3NoE7S8Smcnz6p4P",
  "key26": "5HJKbRvGxe5t2WLDjvakigJf1jJDjywmmQcXWAFHoxkDcPYnCKQc7zsFiJXUoLUJ1Q1c616r7zxPPxToh9NUuQ6V",
  "key27": "4r7kPUpGnr2KUH7XYfr38ZwXjsExdHWozcNPRH1Qw2Tn6wcqTPmY2xrnz3JkTpgUT6Wwzzm1rWr4wt9xCWEnLuhq",
  "key28": "2SJ97dqtwfmikrSPrxFHEvzDwpyUrQUXaeDUk6ndth1ZTYh5xbZb3khiv755V7MkZYubpETcRsk9nagzg16KLpJP",
  "key29": "3yexMXYyUw48WRaY9iw3Z3PEHQYcCgxyeEsFnxjghemjE4R4barpxFy2FUNmUyY9CDKnxxcmxmewcLZ8JrxWFHDc",
  "key30": "hMgCxUQppr6bqEMbQ3VMnpjptHvMXP7ZD5NykrJBF5Jwpn3qpy3168YmSFGJx6pikS6wx3CfuAfUqxZSsKUezr3",
  "key31": "22U8MB92ATLUshuV8kJMsRSoJMRCsZ7QuRVywhC7P5nGSL7V8GgiFnAva2JLTo4Ph7Z3Q9gtg46QsWdX9kMqHVyK",
  "key32": "4xgoTArDD7qHyPkzQyYuvNbj58qi9rkQ3DuANqd5pxvLZ6ygvS5c6yHFLA7y7v62bLkSGZtB4WjS5akmZ7teWRcz",
  "key33": "4sG4wtQ51Kh9eCrJYB7yyw8iCsVsJpvukUqtGiFcdWsP8MxHm5xXnnm8zUSMxSknjmh5VPbgq48YuDTrNE1uYjue",
  "key34": "4fw7YDXxkocUQ91FEzAC4VbLMFv8ZSM6qBFz5V2rKib3iXWG1T3ZER4oPc5E3k9caJbpGFKgDrMRzvt3kf9HWkx4",
  "key35": "5uJ79CNnKv1cxW2nnRSiqRV7AWCTeFTszTkmvs52yY5v27wRS6LrQ7JFHGMMMYa6xXZJc4bmXN8Dkr9Wur2coZQC"
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
