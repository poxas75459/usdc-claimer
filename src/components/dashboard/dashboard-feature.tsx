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
    "5pr4e267gtmtvips1qshbtgZTAFWYuRQZ9qs6uq3zBsTHCFHe4gGa6JcVPNgHEubhFmsBoVqwxpvy1bUQHGpoauC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23sMuhhYnZtmnaCcRqXpkMY52EN8v6hCiMRbv7jzBu8tEKLY17iCQD45MfQQCBmuZwY26QqYUY6p898rzKcWdShn",
  "key1": "nqPGYHBaJHnh87tf1Kmi93zdbBcUcNJFm9SSf3RT3bseM5wCbK1ZdX8Kfq51owJw8rVWjJvhkd9gcg1dmgssbkB",
  "key2": "2xAFtVSQpTJLaC79Ly8syi5smoXohCXrwMFeLzoaMcejwb7DyjEg7zRVLF5A5cZN2S8EWVSdwY61aSajJugxSJuz",
  "key3": "2zZJ5QJVyuW3Jz7QkaZQRED3JEuNBYvn8t7fGzEN5XpMwLYPu8XRU11pHgmRkxXzh7MUt2ggSUryZZLJcdoexPfP",
  "key4": "3HLvm8bFGDHktA73AH3rURh9XfWKsPqUPvG6gbvZnRR6LvBbBrAJGsQkF7Rf9q4pzow1cMkAxdRBwG3tKuZpS3ep",
  "key5": "TviUZvoCVf7SZpDRsx2GgGkmrqPzsJc6Vopbwb4Wss5cQ3iFRBKW3B6FiaCiJhHt9KWuuJ54uiPASsJoghbRvXs",
  "key6": "4uGhEEsn6wRQ4gA2nLmDU8sCLnUxEk2csC3Gk4SvWtt4SUQwPLMQqkrA2B7RjY7NYGiNzwAZX2i89Z5shk1EeZud",
  "key7": "2ttUvc7f95TUpWdFxtqjD6twf8XcXLoEQpXGsD3sQk6xzeLv9DZG2LcGkbsLFkRX9ykyw2ZgqnqS9uYiPprC2UqV",
  "key8": "nT5ourpKubxCzLPDsumaVLUJdvhyCskfL6dtDEc48y7Tuwk2NYvWzw2ctWs73ZJMGSmtGRGBhNVZh6mgqgYqmrB",
  "key9": "5R9zArg9qSkE6ZCKCsM3Twe6ALfMAv48jfpjxWzx6eyZJQyiMnATYWKEp6GnZiH3dfSgWehJvGV4u5UcfLfSn7X3",
  "key10": "5WSrKWKMgbstkpHwNsqUxWoh3gzdc9hobK6ec3aaJAaiMsxXDaJwouADuEZPMqvBtVEWQyeqaJhwHP6ZHXwVy1Rg",
  "key11": "53aXn2s1gzGeSgGBCLwJRYFq9UcNd2zUq94mSaj4Rxeb5simTgVPQ2y3wuSKUxYz2F2CSbKEG1GGMTkRM1cp8xZn",
  "key12": "31H33XvbxsqShWTufKM41uCiwFki3ANYLMi4BrmU4XKRiUFCCxCLmbHcU25rDvfx7XJ1xNEW8WBopGaVkgU6vWCJ",
  "key13": "2cJp7tFDtxTxqoYZ7wxF9x71tD8nkmGDyckFMWp5dbiU9BHm5Ssarec741U3LQr64yxTaAAkda69Nbnt2adm6k61",
  "key14": "2kkL6UzyuFQ2vhe2xgBrtrZ916Gh3oA4HXic36gZJV14zAPUFVnJ4gEF8JdXxPevTfGvQCox33FGiBVY437MsCiK",
  "key15": "TYPX9iZ4Fsftv84VPMkEbPu5cme1aE2Xyn3D7JyjABfV2X2ncxUWD3n6qmJeawRtrnoDH3RrYCK14NUqzT49Y8k",
  "key16": "ix7zaX4GWDZwa6mFbSckeKMr8bVrKqij5pSCienPv1UMjwXdxvs9F2S2VtbizpQD8yWUSS5pHsqLswVxdgMn9zE",
  "key17": "RM37UJj24suSUAMc3ZSoC7mYsfjhaL4YMjvHTypMQvHtv4Z1qE3DkYA15GYc1KJMdNHJWaEHwKgfDdZybjXy5Rg",
  "key18": "5Gve1jx5orLG78tccne3xjUiNQ9YEGE4vBkq9fj69d7hqVoCoiLZorak7JfaD6smUQFM7NvMb41cVWA6HDSinPyQ",
  "key19": "hNwXL1hShKpes3rTZd989C1iYR5GGAPTTDpYFxQKk4CkWewz5G4pYfHtWqCaPAK57LbNs85fkoDpbJSft1SkGjt",
  "key20": "3oMTxwgdK2ki9F6mXMKr9L8FirDhep4Fy21K1Zhed9GANFPHUNUwNXb9YtHiXMPucFDSyExzEfbkWyZCnqnnAwwo",
  "key21": "3ZshMjLMs4KNVkuUsXdLvQZWk3scNZ6cBLUoDK4TDViZVjojtYdfBGX9e25tvyPgyUW1VAWhoFHvJTf6B4U1DgBF",
  "key22": "JAkcLyXCVF21jFFkaRoyxFU49P98CiycxZcmBUiNpALUbmPYEjtXG5hXBuisoA7Ajc7a588g9BYBSLiCKJjxnkE",
  "key23": "4xyVfrMYx1zuJfWV3xCUwdeYaA13cbsKRTUFVFD9Ckrfch273mvtXev2KXgsoVWcaem4PCS2acWLfYjeyUzjdsNW",
  "key24": "4X3535r1YCfdjWC6hVV8ZoTP9w3JyZXNqiD3aq7BNxBBqWA4SRqL3fzjdPbvgGCqPMP34k8cQjmSYrg2oS5awBXQ",
  "key25": "5pw7DamNWcFmo4xfA8uS17t5PV5VLHjmgw9R14whr8s25Xv4KXYzDGQR69XVo3hpnS5mh5PS1JYvLpsvjC93DmVj"
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
