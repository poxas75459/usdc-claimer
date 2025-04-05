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
    "4VCEVTWm96c44jUTYya4rnqoikTZR1QYWjerQBu2od1J2cqBKRj2yjSjk2X3DskDYLMrtUzYwjwcn1fvx2oW91Z5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vvEYwX1ruf6dGFZftZ2pAd5Xkxy1ib9NXapjLHGwDADkh5CLqrYUaBDz6VDyCTZHjeP2VTuTNFBkLSkGsc5s4US",
  "key1": "PnJGu8uKoJm2Z7JY8kp4tKv5FsfoDGrgQqeMLNn2wrGNfmVHtqYMgBjKDrYh39kCym78b7aJmMMYnnZ9sR1CZNk",
  "key2": "u6LxcSk989CAfR7CYUacvBq6YrUKF1LgsnTbyTYpJLQQMnWat2w1FJpbcRM6SEbhXa1AYaa9GaLbZ6WkcHgt6MX",
  "key3": "vQCHGYY7j7CYPFMwiscsizWMyTtEYyZfDB1Zu2UV7wvNxPTdUKaGuByTX1HjL8evPY7vmgppY3REpWPx4z9xcjC",
  "key4": "ykBiTA1ZZDZtsYECmUmGBZ47npbdMdXtJ2y2p1XwYwbGt4tm2xfqoc41ZYFaMf8CEgkBL1N7Saf5jvn9RhG621m",
  "key5": "ugwpJWGVs6otTHmnDSvzf9Usc9r5QRuJ6C99tfdqx7nj6iHkKSG5e6MTtg6z4ZJzy5GY7DXUncfN59JCGRvG3x7",
  "key6": "2W5i65YcBscq5Jbb8o2TYNzXxLyXQdmhD3sf75zes6FLQdUyYAPgjWx9PN94xBUEV5VRSm5JEwi8HzGmuVrV9FJY",
  "key7": "HrtHU5E7V9T51Jvn9gw1No6dGTiTpfJxmtQuy35XU9hgFgU3D8wPh6PB6tUEPycRuwWTQvbhYq5yHDfzYN7PmST",
  "key8": "5duQBzLKqNFg1nJfjBGxyNyepmuorAtNTEqEkwTtwUzepkbeUwtv3EzQPSWMUs9cz1ZaJuUtnR1p5QPQGoFWjhgm",
  "key9": "2KfJgwsX3mzvKUnsFZ3BkhXwKJr3NrsLCoDpyn6gAWmFZHDdaQgp2ShDGAB6keFoRPoW3Nsmzvi8CyQsLnq5rHQ4",
  "key10": "5PVSxst2HgoXiPXm8HZbBFVaE1Kz36s3ZR88PEyEGxg5ZuYpWq4ACBaCbTMxaJp5pptHNjC7pwSwyqBwyYdzJrPj",
  "key11": "2qUStFNx2b9JojnM7ZquitUgxMA4osYpCmJxioRC2HproTMhWEo9gZycqJn1sAi9uGaLivKRyArJqUmbBwuAsehb",
  "key12": "5rXFD8xU9UyZhtncJRasKm4UHk4zTDUTepBfzW8meb3MLmd26PQnsjunPM9vNfS1pQfApm8Po2aGZ4QDyJz36JhK",
  "key13": "5E3EFubkqThG9Y3F4yN2FtiwPEVzyqQNKwQ2CJ11BWGPm8JxkRkHqTomCS1QaroFXa6cZCFAne74VHntYtySDWy7",
  "key14": "4NxQ6f2Hd5UqixLKZCsirhxsM8z48c7ay3sBazsUE3PEo4Gb5JPp2zY8tuBmjiUntveJdvQC8hipcQjYfYvGxnni",
  "key15": "2fk8sSm3gqYJHWJNSXFqZghSmPzbqjUxN45p6Te1vxSYF8vBVnJcpkvUnMedwamSd1vU2TVs77MVsqGGSSWfMNut",
  "key16": "478b4DdKYSsjXy9GmaKXTdoiVoF3hkzCFjvdKzen1ncDkvM8UJMuMNCzPPLSzUtey7GZdHaQcfSCBpFZnW16eHFy",
  "key17": "5L4oMcaVVELDPm58oL7rg7Qid9EFZPMTKh9Q4DhCTvcLvNNYCQCLX9yYiwKaLYY5thEFRghE1LhVE5vn3WU1YEfx",
  "key18": "32giE6NzjysccaYqx8RHvHPVbeGJRLeyk9Pg2K6pPWyqqnYbb8iA1viAoMr8eAFPoi1a5gU4THAxmYtzj4EjBpsh",
  "key19": "g3AXtQb9BYk4Ekk1hcFNvKD6G7McgZtggCxVGCT3NY86AktAww7YfhzP45qzSyJw8gwH6xfSeUW7i3nVQ5vVJAu",
  "key20": "62mbaSbhr7eWDcsYgGYC8t1MkUuAgrWyNFdW2yLFtPo8iPWdzM2KDfkmyfRShDTXexQQnUrc3e81qcN53KoJo3n5",
  "key21": "ixRP3Z3BeyAE2uHuejpVMnbXAhZSWqWX6kjzLgL8wGjqBhb9xjt4nhC3K67T8ian4ZPdL2T4rdEuGVTNb9hg9Ec",
  "key22": "4ccWASXYA9E4pkXtZboiK2pFGZ5ac7W9FkE3zKpRB4XMw13qGcsi6yvEphovheCK7sWTqTK4FESsih5pDf4Xatkx",
  "key23": "5UsnY67ug5x1huL9zkDpeWSXN4WYNw4sWbNrvH8fybHddUCkF8PgSLKMt6nttNobqvLA4tN1ZqqTNx53JgA5VDVG",
  "key24": "5qcib5fjMaB6Rjzwqi9y7xMs8rZWpN3uCCDHDUWJo8oFMPkdJS6waRHU2qp2WVMur9hAdH55BFBii8JfNg2jrLuv",
  "key25": "62kfW7eZmFDBFWarVQCapjSjtcK3bvzciDLL1oFSy6yDTNymkPn3DHGghjLcfsWoYGsEzYgg1GHZZVfBkPQzNQa2",
  "key26": "5wAJPLn8uevLNszJHPdYjPiG4iX9yXiasea5LQtwBx7VSSQ4aDfBAx7L8Yc8frpYBZwuzjsvLnnPBCR1nmacFDS9",
  "key27": "4bbwxrwrJSfRtgntYATk5kNYfFEYAn5MgcR72oksn32b61Wkwa1VQ7eVhZnaGYqRmes6KwM1SNPzcpBn4G9S1XtS",
  "key28": "npfxZgfBCUzDEVWwtQiR4r2XUwaJExBUj72DoLqWX5iUh4pf9Bw6C7Kkqh16oksd9RwntwvW8K2xCE5T4vth1qq",
  "key29": "4wg6Vcb6BRuHEAsnbLgRemLWpBygLQitjaS6Q1gmaubBqdroVs1iii1J8z92ALKnaqRnGLmvVTUJBDKpJeVBaz76",
  "key30": "5Xux4rBX5AXVJBenAyMggHo7mLKk7YNBwnjLBTvXq4FuqKm8eKb8vD3bnDRTBRRN8b2hd7gv6oFYNwbGLKP8f5aa",
  "key31": "67YcjnDnuMoUewZJerUzWhsVBp1TokA6TtzdKSVCenE6fo7FqrJwDYRhZzuN7BfdFF59y6h3h8RK2RN7yGXEFNwR"
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
