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
    "3t23LMeqZEuAfzZQUq86XCTvngNTAmVor9R1JKyadUJUECgWwyZVAunnqpzUwHrXzTLVA7WFtVb1TP66U93iN689"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "327xSnMMzQi8tmetB2m4VurGez1d6UNyWC95uovt2ubuxN7ocK4Rxk8cjw1hsCdP2fFDVoZWhgCcGwV9RHKhR3zK",
  "key1": "4MdrJVU7g649gQ3q7MieSqchpLGj6HNMwvKFoLVtuBmmxyJfLrfGRL4cmhcnrHuiAzoad3tMvv3hwbMsE7rbeWCj",
  "key2": "47TaCuWudCHkFiGh1e9PFvmtAesr4y8VETtAbxHnnauwz1ADb8QzFBvxhgVcxnv1Fty3SWcwikdA1iHQMGvz61N9",
  "key3": "u6bRFHdiF9xDt8RRgaYqYs7HJJfU1im8RkSyJvoCtRSuBNgiJfyKJiSZAYbYDWWe4hWLN5qmBiSgje7MSZuwHdY",
  "key4": "2NiSKiytSWM2HpnZgvVbTELy3SqBP2aHHMYanJ2ru4ZJAky3XWnSM3TmYoxGLVjk1G6A4VScdBYtYdYrS3GHp1WV",
  "key5": "2ZJP3JxEFtAPcpWj18X1PkDPfwNDeumWoDyKyqdGHVEsXG2YNvevBKqP27ZfZB72FsMtKoLHQTTMMh7VyM5o7iBT",
  "key6": "7zUCJWEXLwqoFpaciqZr7iW4XXecrJ1hza8dSC5BrkJQtxMMgCs4t18uzNRRoaXkZocgf3pW8s5XqPjL3ceccb3",
  "key7": "2x19odvS4CMr4TGnXewuXLtFRp6Kgm29y4vdfyWVEBMKPzXiczDAXtMWTUyFziTP3bBavyYRCyKwEB6qPLs29QuY",
  "key8": "4NknN827JiTjsHkGG7KVswHxrCewbHsR2zWeERp6vjvDMPppe5CW1UDRmaCyUJBLsg8chLHuf9Jsb4wgF3zmtPQW",
  "key9": "1FjmLH2dT9imhrFSat5w4vAbkDvLARu2wpMD8ZB6XERxpEmkVxMkUkG6XnzntTiW219R1ASsFYmZieP6Lfoi8ub",
  "key10": "5ti8ZANeotibNfy269hTenJ9HK1kvwWGfftE3Aoqw6zWMsv13XvVs5Mcey8jJ4SQ9BNCrnwpS5VQXmdV3XTP7k2J",
  "key11": "37u6s1nw2ivnErubgza7K5fKP9eAqxaCuuponAuULWcfFpyES1EtxbziyPFKmAeoJfPxp1JAkjHLezt58BcCu161",
  "key12": "5Fd3fLwonWcJREjvXk1bWcgR3UTkT2UDrLC9XbzzoDLpfZ3MxcsoH9WysWszYZSR9cu21ukTa6Mo4gfMk1A93NQE",
  "key13": "5xgenpKMwTtadhHaqijtcT9WpsMjEJqvJNPFC9t2uhgeYCmHvygTuANVXT3UHZdkEK32HmEtDL7M3yvYw4pCwWrj",
  "key14": "2nCmfSqmZk82a4Xq2zzTd49iZUUeoYfnCuBMyi35tdGf5c2vV79P1fth4yosvBVUVN5vrUsqrt97oRsSMiRuVvZL",
  "key15": "4zntJ9w6JpgCdwZFRgRoMe91XgnuHvnEtpRnwWUzJxQdTTJaWohqwHzA1SGEhn3JY3PpdbkZYjQ7ACgF4vFXs8N9",
  "key16": "5uMRTx7XdwkzmijsKBqrGt2fNLPJnwgtxaDVvFyCPvoWK3SxDrjf3Wd9xv4jZ1gNf5WXsMFRh2NGkFciVyTvPgnM",
  "key17": "4y8M6tJCZPjiFE5xF8snp4K2oRGEfr4RnTUWiygAE4XgMkBeLZKab3y6ws3UvdD3BuajRvvszJYzQeE7rmU1H5Bk",
  "key18": "2RS9GYEyv185TCiLpSDhFowZa5g7Gkwt1ToPUoB21nTNcyb1TC8BRY71duC7Fc3uLcyWNx6FukiWtczWtgoX4HAa",
  "key19": "2zkiqzY7H3nsDYufVWq6rJAhy9gPwb3HBM65X8ZNayCTez5v6QZsTN1oEEvnebqQVYgBZRgeAhdyifpQodJAfVg8",
  "key20": "Fu4YoMvFRrUsSejHfkD7cWgPSHrzZ6iaUdxv4gZUma2xT13uc3Z4ibEbFzdZvtS9H87FDxSBsdMgR55p5zPN743",
  "key21": "fAvwAZ7TLCw6o7nusVRrbZYvRwYKLGbxHbEMffXMmtTcpczdZ7thn3QBDH1f1jW4fwhia9TtaaymDcxbzF3DKnk",
  "key22": "4a3ooZNYx6mps8dQZmMAmPViyurJMbHbASCYM1ymgZeNcrp4Bwg7hdCUYCaKnXfV3FM3KtGtXRGWyrbSxwH694SZ",
  "key23": "4ZWQW3DiMvhfisutT3Qyd2mp1psaeyqKPHBJPX3LVBMN9n6pKTTzhdzS7qKpJaNnmbvgGc4HDGGKwmGjJ7hu6Cf6",
  "key24": "5ycUQVJeMAJrjbauExMLdDQHvFvYbhJv2JvB5ckVnX9j4pAJNo1g27VZnUHVfRugkU2TxGc6t3CFq94PJ1TnEdCT",
  "key25": "4jHz1pnpHDZ4F2AicfZHqgEGHqsneJkpmFK6u8kc3CjCTHx4m9kWbj3yYYKF2Ayqk5ECCforGkkzbT1UTeRw8YyM",
  "key26": "oLXqGEwihnpsC7kowyrjRxbKvEeE6dCm4JWgh6Ja48nYWEWsR7hzQsJF7B63yzLPYXFATaf8wQHToyv1e8oBZdR",
  "key27": "3u3X2vJKPmY6YFPyqGqP7dbDxFmAXeNqz1xPnnRU4DDrFHJdQaEcDKtFzM7hCk3mHoF4AVqxdjX4kF2veAWTibw3",
  "key28": "icVZV6oaoMN4SSAT9Xt5oPg14J3kf9sgXM4qDfiafpteTD918cEvta94etLFxseGfuMmk6eLjhpETogwn6V4zd3",
  "key29": "Nz9HdCQjfswafqRsJzxPVD1T9KaEjuAsoSMetPNk1Ad2RAEfFxgTHC4thXu4bzPJ2WvEFWfvLE3TkHxeaSeLUcz"
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
