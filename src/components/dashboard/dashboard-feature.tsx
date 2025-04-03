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
    "5v9dZwNJ4vKZHDaJm1PSYYWuj96GLqDzwzVbi5g6WCW4VawZhWoGpdj46GEZ2H5HCruCruUZMDgXh9B93BumpiKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37vLWGL2QCkDuove8QHWFGQfFN2xLGU3JFZ5dxBbWeTwfaog9195kwPPPDenRxzXsXCyqtWj8zePNJsvtJK91wv2",
  "key1": "2poYRYX6aUBMhWFJmRH7YEmTq1DV3YKQBez6LSeXXRejC34euyxXqeDgoceuoCVq6tBR4Qmu5mBW7CuJSkXtgaFi",
  "key2": "yFc2bGAVK7ngEcz5d1UCNxpCe7wucG3d9nenmaGTVSagdwyW9EizjMaZVFKTdgP6vcBoorwZTxcdwFzKgk6jdqm",
  "key3": "329MWMXxRoYUepHMY2Q1Q3Re6FKF1dcf52dM3zS64JXyUec2LvyRwZod6sKBhBRpS1VuUQ8WURecjmnJ1emasbED",
  "key4": "2LEHGdv3FwwxmvygXtKcGS3PKC97emAYNZcmvH74zKan7EUQ2huhwx4h1m5aYoi9P7nzSEFD1Ve3Ac3JfFRTN48F",
  "key5": "5xEvymyMLeCgciSz9iCPCCt4KiPkkoShjdBqtTasgYPwsa9Yf9KSAj6m2ZKwC7RdcDRW86bkvPQgGn5pwboS36D7",
  "key6": "5qwzDGTf4GcBQQPvv75rxNy9JmEfx8DsqsJhDFC5UeocVdHYucxADfuGmbbQvgAtNcsd8yZRatKcNDYAX1acoBT4",
  "key7": "4N2daAA4CVAU96tJbeenjweW4fi2rwXyQ32U9QayUcuiTf82XyRxxcRKXDJrRyEgXFcTfqLXB6X2SjujyY2v1GBZ",
  "key8": "4JtStxoiHPFakkwL5gDfZTwhJbhpJdCFfs5FBQa8JSCDReK5yn4EZeq5E1AC921su9wCgrD4VoNZayxSthQ8GYZg",
  "key9": "5spW8Q4HVvksCkXZkuHRz2FPxZ3CqqFmPK7fHv71vdq8UpyVZJSrxuuipFYZ5F8BnHwetm4MTxWZeiYRUjVhTEVP",
  "key10": "5Uaami7SgWs8Jyv8HydA8YL1QkjX6QdZpHaixgJwcfF4hLSzm8KdAeR2WsRBmSGgypZJMY6Q8Qj9g9tMMMKaZWGj",
  "key11": "3QDuFaXiJ2og7KPLu7cfzLAJZmuFNvQGBmmCVqZ7KZ39PusriH8TDKsFGN8eDMEtuMMP5ZUTioQfgo7FmV2AFmdf",
  "key12": "27WHKs96BU2eyuScijtY5kqjVezaHYvoG43UQXCQioTCQmmMQeHWjqacFdiWeKWPmqVD9BAYgQnYeaPT4uLDyb4H",
  "key13": "4jrdiLaFGarGufjnt7E2A4JNnXrcgDVmR1ttQCsh3Kusn48qtynCR5FKSEdBiwuv39vwmAs5ZGhqiuJPZooR9rah",
  "key14": "3kWcQebsVahXK9s3c6XRgEbg4mGLtX7ZptG55KpRwnuwKDpd3PLzDTb8vktaSHh8BUz9v8ephkRXhnf1qh71K4ub",
  "key15": "54ZRezCBfZQpV8pDDsfJZ7EBjqDeoQC2fbz3v5pgHN4Bj8mo6PKT74JafLNWyfz2HzKkDBQohLbMNtWKH97Bvz41",
  "key16": "dkSQ521TUeDkhW8cAFL8KUR4ZfuiJ3UjVVK3byhFcBm4RyX28boLQvhXAk55GhdCwWDS91W4LfFYRVkyX1ugqpu",
  "key17": "2CeAHkxpfT8S96RoJUVwAdsSToMWUU4K8Jf7eNyMY3Hfv1TZdjRndRJCz21gAsLRviFLv4PF9SWkz287LZ4oQrSK",
  "key18": "2j8udzVdsJyo4gU5PGur2BgYAmRcQmQPcSuzgmJTCYzVFv4WV1UskGwvPkztL7xTXYYd9cUK8STDpZgJZwG6LjeC",
  "key19": "33ssBTjzDPnKyFGFCFQ6AHnTFGD42kW7gutA2Ez3e8uRJ5CD2HPR4LNmVv24eb4sbxUf69B1NFqktkn9xGp8eb9n",
  "key20": "2q3UWkxmNGVnDEihjWbQNWsRW8U1TqTFyUHJ28rVS93Y2zcxNLYAsQ38FLRfqXndeasPF9EjuypRjjecCXg74GFw",
  "key21": "5oypiB2MJ18Qn6UKd6YVrttsn2xvJczV4LiRDFhdkE5YJyhjn43NiMRGtqS7KKGUxF9aoD1rsZnATA8HuCbGariB",
  "key22": "bMhJwjatCduo3PviTnnXg63yN2SJYJw8RUBtRL1thdhrEZn8cyzgcS5U1nVcH19TgfG3mrbXjwknq3Y8tgb8FiP",
  "key23": "2svkZyFbM3t6paavUvdQ37TXPuP1pwB3Sc2mJ18r2yUnQg53DGcNMhf8YNFZPaYt3MapuNtg3ajmqQVLGe1SnEnx",
  "key24": "yrytqjY5wN7C363vjkpiGu99pbw14pu5byZHmHVCojzKFGJoUDm9MG7RtHCiVYEXRGak8R2m3RsBDtRAagW4Lwk",
  "key25": "56ksmo7p5UhqUF1cpEArediBGFz6GKSdEryEKBdR6n3TUVQ44h9ZexuXmzSfwwCNykSUBiiqmUkC4obFKYPNp1w1",
  "key26": "5BHdVGy4XupgnMkJ2gg5Ss8dBz9dAgxPAviCiTLQC5YS99r31Ww6rXusp4NVLk546GNcuX4KdjtcW35onUn6YAhC",
  "key27": "GF4UQbAyVMtMLs97RDzUGtB8M3eJ8uem4WEpMvweCQ1huprVDhoRpXXh2QoQjZCeK4xc3mLZ5oSggRZxFAVYEhn"
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
