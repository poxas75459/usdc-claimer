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
    "P7fEvcFGGEFJWJ6mLjxSt6NtMAkUqQCrRR8yWDYHNQSYhsq3kJWH1BaNT9e3BrvhjE8JjjaaBoMC2wqLsDrsXbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EzrPxPRginfJ7bEdRtgebHAtKXVwqFdUPN7S7d6ZTVked59D28yHRhjd6VwC25FeS4cinhLUtN4fMvqg1PJCBp7",
  "key1": "37aY34eyLm4eBtdYvQWzeJAPYbiux5S5nTU1eiUAZw1nPNxCEYbcUjNRfWmpjHLAQ7S6D3xuRj5gEEXU2Nq5uhUK",
  "key2": "2uRfPHj6F11HMdhTVssnKSt1cgwyyqqbVJTcKNtmBhv5NDyBFrvCFH4AWpzJU2nR3NssZ2c42XoAYPR7KzS8Q3oS",
  "key3": "662CdGgyA2DH5BDT3R6iHVVXLqXHH965Lg4exvV7wnCdjWiErtVdjSGgApUG7sE7tG3sVJbQy9Hec2rD9FnWfzJM",
  "key4": "1bpt8cTPRr2yGoLFcAuUS2s8tB9ihLM9apR4LatQ2WY3oA2NpjiJjBg9wNCTxdcQha5dEA8Fkd6WodWiCNjiDq6",
  "key5": "5hqfSqc694bKDFs61agH2gaWHQJjNSxhe7jxacmPYNL2RvQytfizj6JQsoKLqdPtDycjeS6gRvvzu8jaSZjjTvGv",
  "key6": "5DnKzpMtLChg4ogzaZL75LGEJgXCpQLbNKg7DNEnZ1dPDjHEbJbhYD4AiPVpRtTLY2amYa9VVWMHC5Rk2UhdbC2J",
  "key7": "5MNVyPAeqn3WsZtWTAvimAdWK6UtN4FXdDogH9ost2RVNKLscerP1Vy5cYLSPxB2WbFrSLxcUwN3ronmMbbSSfjF",
  "key8": "ukard3oPbAz9yATwW3sbUF3FkrrJctRFHHQV7wxGB2mq2r8CDaiVp1vnmNMT23sXwSMaJJjMYWuYeriVbPrDXRL",
  "key9": "5knRMdx7XzUJhcPUhYM7UkSxzsR84JfxEWvoa7LsqR5QM4SAXLaQPFMJrML4VNFTNmHjtsyaNi7Lw95TeRvoEEDQ",
  "key10": "5Vr35foMPyxvuXEvPm4bcZUGP4VoEyg51HyWbgQRSWRQ4DX76wvHyrXNLeH3DyBzoVon9TEza5r6gf8scf2mymUp",
  "key11": "2Cnd3yU3se7mbpom2v8P8uesDNniUkSXykxcXkbdC5JpWUsevicovSo6ef8Uz1iPvwmG1BtrLWhSsvWr2zvYGFt5",
  "key12": "3FZvVzFTFiUTHZR1NVNn25xSek1Ac6jJU2cb4hHrUC6UXBSm9cwNUNb9yNKB4Z71T6uTAPxjxHYGLStigHzcKc8f",
  "key13": "33xew9wod8WxK4Vvz28o2uQmESj9aqsZZYGj8VWeDrdUMYshGSo56KFCT2PjcFR7qtrAjyVkP8gn9XgbfGExr9m",
  "key14": "3BMzcTBYY32XTWvJk6AJbJcNyDw23Av4Uuk4j272u4NWTUNZAQhBehpz7z6sLCMbX17qneKnVPnoPQZqovZZATvT",
  "key15": "3HdERqjdi5biJAf8kUzW9RAgwtCmY7fWUfQkra1SDLaMp3hTANrZgMWVAvYQfkPthaqTe3xCuGhBx7cbsN7TigaY",
  "key16": "4ssw9GQBntNy4YE2Jf1gy5r5NQvMrvG1cSiSqkxEddjytiAdP5aUwebtjkHSdUrWs1dJ92r9JsbNTEUseiZNLwbe",
  "key17": "4gk1ffTzbvRY1RNNLAJDvjQ7KfhgdZEwDUKwdY7Usq3uWch9qMr5DMsgoUGxkpbwpqUntR3FRa766Z8aX94gVK9o",
  "key18": "38ZDmm4Nmzmb3DbsAfDHP9cquc46FyX6WuMksDG4YfgGe3ovgDVCW2ai24XdjjFXUtRH56gaeLWQaPvwmWN1dCrC",
  "key19": "EjKnWUKij2SW2RnjByFVhWvzxRvzpDfULY8G5e7Kc3kJCajizJ2p21mFma8LuEt2C8EnupoHrHJoJNa3pi6vchb",
  "key20": "4uNTQ4yZXj1PMieYrXBgrJDW4cvc21dRLYhAjTirSfGp3UCmVJQoThW8aDboxqT2dEaQZqUGGhUGg6f2o566ANwc",
  "key21": "5j45BdidFWUjJzjrXiaAH2X2bgZ4evK6QMviQRFqsjNhN3eaqJDqwoRp2HUwRrNzyR1dFBcC1AVPG8n2aeCkWX4B",
  "key22": "3jDMsZ8CfyDunJVvDnSS3nQMi2LZii2LBEWJsDg4bRDQREywUzLnSq5jjsxBQA17nQxzqSkdq6MQgjMYyccp8Zd7",
  "key23": "xHupkDA94K6D3rtRJcjbjHjwB9t244BVGnR1HgBiSCeWgzsh5HgRPiPNMpRsC7MCMRHdei4hNiVpnRg6m3xXSQp",
  "key24": "5D9TKUrPM4NM9qKphWg9q5KsoxJLmR8fq8kDokPEhZH9DmdT9ywj8LuBYQVmesPJumzJzyFsPFgfUYNc8C1iy4BU",
  "key25": "2nhddaTpFdVNk3uXeSYrHgdHGpUJrRqqBr1FYAhPbv5cW7ZCLA3o6seVERz8TQq2sDSPthGSpunJZXsEKUePkcHU",
  "key26": "4v7vXe2bkpxcW1mHFZ8UkYX9m963gNAjdhFWajazmkUVGDFCyVfM2gXmt1LG1jtw6RKrTTbwgcVUjyfwQntf3aNi",
  "key27": "5v3KLchs36UV1S1xTNczxjAhKLFBpa5gzHb8RAdoKJ4UvXjo2SbEvssyCjTQ98Ck1zKamUAPaYbqCCDvsLr2jCjH",
  "key28": "2quRRq7u5T8qmaaJsJH92Z5EdBXdaDRd5vBJKCED3n2tapr4yWzyhopeS9gjv299QRvhM6H3VZ9LGxCxRHwLuoeQ"
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
