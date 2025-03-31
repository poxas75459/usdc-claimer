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
    "3NDHYCXPxUX4KTTRrNbNs37NJx45oUmHqvo85cHXNeVnJyEceZrmY54pEiuDYRFESnZrmUxiwLSEq5xAJpJbcfec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YDiNQWUm7EeyxGSY5FnWaP7vR5onAnCXC1P2pMpm1uAU84wbn8XE4RGxSxzk6kiBNpfeP8iQ96pbk9NZMuZtXRq",
  "key1": "2wpUK62aj3MGRPdWUA9BDB8LRjV6WwJhxDuwysjC5RUrH6W5itHRGUt83DG9VYYKPeRB7pxJyqVf1k5HHXnrcPBB",
  "key2": "4qo8TVACKrv4Pumog6R1qoTdFyoY6ceMrXNNK9Y2LtMX4gBCda9P6TLEfHKSM7ycbeQYen7TNsL36RYNNGnuyQdC",
  "key3": "N62ZE1EWDpajo3fTQTvjdYg1Kj7BQ7PFHQRuhQJpGawcrSJMTSC2jLoo1JTmGHqfYc7L2jjGLwHStx7BzXBRKAg",
  "key4": "4BNgJC1qzEJAbkNaTcDcdJpL29b2AzpxoQyHZvWjTTRzojuQXLiecvE6iA3mXunW23xoqv4q322c9qEQAVi9Sbw2",
  "key5": "5Gd4dDdDn4UCKdsAcRS424ESLSjzHFWfpUwkdz3R9EsGihJZycRSHeq2p9LdAjeBbTh8Cz5zrEFFJZ6wtbjryy64",
  "key6": "3FnYK1eKq765TXcAgfV2LHMDknX2weqFVq83rPtYqkAXETirLYLAC7jg1RXRPmzW8pT5VLPbyJmmueEp1FzHc4Yw",
  "key7": "WW58CWatP4BUexY9b8EUyZpJFjKEYEnsCEu8d9WT78oVEwYxE545kqWgCQ31D9oSueXeBtH9HHy7UxiiJKGkxgV",
  "key8": "4qENmPHjq9AymUWkhFF4GKQt89Z1F8c2bTnerX8HYLccj1PGi7p41fa3VANGpPZdxSZwKSHbqETUvQsTHWyF9P7J",
  "key9": "QU28EEMHXcWHZUanoXY9YD6teFhE7PYnnCUMkeWuX99RzPjxMEAc3myzt88xHG28rZhiamT25zHecPVBS2rQaL3",
  "key10": "3jgnRxsk1X29qpBExUoMCeVVaR2Cjy8dk3PKbXvo8qU6hjHKo2BmzAjLyKWcx6P4QufQyqYtk34isWi1nMMp6cwW",
  "key11": "4b2rktPsSTRGRDn2eJUJbdCjypaAPAcUSwn7LVwmdvkHMtGVhPfcRYWuYjRpg53NPpHLxxAL539Z5yn46enBLMKN",
  "key12": "2QR8A4qSzgchhvpRagLpsd7vCEizKK9z2YWgcvoBKihZK23Qt8q25Pr6LzCR9X6WbhWnkoRiSBWF31kQ9SSZ5HpK",
  "key13": "3NZvDPjpfYpU7Ec8nWGmXXAPVbYjbjJByAFKM1dBUgv2uwSRwQS8Fw9n3e6hnZpemPjkTCmZGHRN1WbUgFFPj8dp",
  "key14": "wvLA4aBeL9RAjCijAwojfTWpwHLoGWmd9iYpXevdus4yL5DoaiZfmDMybEE9qKRcsaSAMPDUbAoTDBujNERXnY5",
  "key15": "5zdMWNfEwcmQDZvyZMhWdNLJZTaFbyaNyZQCPf4hCEwjPhGWeAJgmH5Fu4D8Btnsp56Te9a4eUChWuef3jKWMuHf",
  "key16": "47bCTAznTdCYq7XtfAMui4GjJ54abYi3tRbpaSmxEAuFgQmSdU4SXPr7QCYXPrmrS3rJKZ7unYSuHXVDzaE1erSh",
  "key17": "3ZbdWt55zcxsNbmPoVm9sCMkSZZkC4T459hW5wiZYH9ynCegCdfrupZZ3X1jHJo3BF3u2zMoZ2LApmoUvpYBCMKM",
  "key18": "2FboNZZpNzXVxyNvDt5hDaQ4j4M7pU6KH9aazZUcvDKHXcSMJ87FNASDkEmATrsfznho69nfFGkQnhKBTFRUJNuJ",
  "key19": "4CKrzDqeE11MiRYurmUjyV5XkxdfSFa6887vWRZoax6gspW8ks1cWsvnfe5KHFH4CELyeAo1HyukzvXK6bgEzoiK",
  "key20": "5Lb8s2aHjmrkb7HD865sPodHkfEMgALxiwS7FiS2EQ8PBZ5EizFfjp4jaeKtcuMRX5gomwagkngVpx7M5jpKMdSW",
  "key21": "2bV57idsnXahgAn2amGsSqrdFKmbhuytn7jk13jc4VoQqGJ6pw1TT8fzwYxhSmNV9SsZ3fyx6HhGaSokNVAiTxb8",
  "key22": "4bSNCtLyA9fp2VFc7LSVBb7fVtSuFTH9Uk2xgWgzEouiAzoqXGt146WUwBzwt2Yr611gWWDYBcyBmHBh7QtQh1cM",
  "key23": "ZSSo4pdoYjJwEztfpLHJvrbWvinyt39ReX6j7tkJZfpYwN5XLxpSBeoQsFFU4gFEugPjtae1YPMckaEZC4fi8tb",
  "key24": "2DkxyzMMK77qVPncMewSTfot7o6r4zWTMi3dFYWHAHFyJ827XtDQuvy2bEqCNKGmi2fMHJA838uJvbAgtbH3UqXi",
  "key25": "5h7KnUMHyrUZFA8zUqVvVukUyZ8mgrwLvu3vuRT6E6miREZnCX7TywAMjQmvCW5nXboWgP36GGV8v3zXpVC2xQE"
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
