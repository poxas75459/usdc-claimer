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
    "2S1grPNktyCmsmSHfu9ZoJDUD9vqUyEa4qa8Tq68AkH4beitZtM6r2v1dkYD1Jvu2TkVTwDc2tjDq68QUvg8rkzA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24DFFGP6jzyYSyy51a3QidKgy8YiTzUPr5J6Ejr1AyFGwBwPnLACvYCEYffnHK9thRsqH8tdvxfyqzkoC37sZ72C",
  "key1": "2TETZvZtFypFsK2Dk9GgCk99iSkPfjpQqYMkGFv6LgbezcWgLMPYpmrpaH9JiifR6idJGfSvh94D3qs9RYSdEyG4",
  "key2": "5VRK4oAgtyYCHBVXzh55J1fgjaDW8KsSwcJfJjQ5dvzLQUQ5Anv7egqPXZNEwvcPbKhUmvBSYhBHSZWT9jDtR9KQ",
  "key3": "EmrJ56wySQaHwTKZqmsHnnwWCQvdwkTUUuDesPUSnvNV3pNaSKnapy3oLAukdQxN4ox6rvnytupGViS1wLtk1Kk",
  "key4": "5j3MA6KZY9EcoMoNYU7D7UXiti8uVApedBqQHX7cqUMJJCGAYQQGD2J61PYZYh1wYxofJqPzRoBVqqwLW1UuwUpG",
  "key5": "3hKsYdWwdC6vbfBS7Xm2FKsbbjs9HWzMfJrGufAmCXHCW68oEnrYhEdgYph4GDYE4qS8NnMdMAMaZz95hQ5XABeA",
  "key6": "2uuvfLthABPm9RH3cqSGJwCDsR4Jx64WtE3puXd9jEriAwuCYPbxwu166Y9dJWTbJXgm327DzXx1USVWUwfrUsyn",
  "key7": "25GLh8ouQUhCcjtBXS1hyUMz7rh2SsCUtzrTn26hcZHi7CC1Cd5WeqwcagEdEbbwvDUksRqnhEdAusramkD5Uf26",
  "key8": "WcX4JQVXfadjPEncPDZxKnk6vegoxCwYELcFXiSp8LceZ794diGX8VdrTJP72iyhEwxZjrHLueyFVRcU6GDPoEv",
  "key9": "295z5enrgMk4VtWdYhP2tG6BPWErfjGJQNmYFSmVTFJrjYxpMd2H4ZxZq6xueeCQqAYv2UVZtJR1Gx8mhUc36wyE",
  "key10": "5ZChKkRPrsTiGyLHevMvuHAuUwe3LqwCNKzkW3SW4NB3J6MM6W1GrSyzt2wGLXDcvfXc76bKRCtaHDiGnojQsCLQ",
  "key11": "2K4ReanWReuED6sU3ApzUcTTroFPeSqR6Pna6YqxVZbqcDJ6va14jqJ7y274PNCcm3pGTFh7yJvZDya6SdkPbpgG",
  "key12": "mCELccYKteaF6HgBD7RPZcQdssL2YJkS2X9kJyAZbwECKd2Uf3ywQQXhNTspgNNixSW3otsyN24PwBiycjE6Mit",
  "key13": "4BqSgpki17rarqvcqBfdFNkuJsDBa2xdMbUSxwNj3msce7gjQGbpeihS4Mf64AGdhjbwWhvX2XkjTe4HiVr9PTuc",
  "key14": "GKcxGmQEGqBh1GU5zKdvWfy1Xxd61ibFCnKFvKLgrdKATcExZiXcD7eajeuduDRrKeCUg3sCDHWQed7oviuSqWL",
  "key15": "26NAH6zuJ1Ht6Ey4un4QG4Ar4JzuEnipnWW2nLfMS71ZF1C32cGCjJkHVW17K2PTafYHs8icU3WVf76zszocKDer",
  "key16": "56QrsUDnzmHAR4H8wwWGD7qZoBw58WKEqHxrpQY8jdmmAwiC1KvLouMYmAuyVv8kZAYZgW7JKYT5e17MEZ24vNru",
  "key17": "4HhGikdzaH5yserp2UBKWJ1C6hKVmoofjfS146cDBQBWyZh7r9JBAx5zeSeKquRvJZH2KdKXqGBL84zNx1KEsXmJ",
  "key18": "Bi3Zx1FZK2NWFi4BczmnvYmvCceRqXhbExGrc3mdh6QQF54448TNfye7zguN78S46bjdT6m1LT5xhSxdRgopkiW",
  "key19": "56A4hXFQU95Qa9VN3FsPtAXaXNgsJiHDQEQQ689xjkMkjTeh8CtDHxxTG5aDEAnQvC6vMqARkw6WZbfDFwc5oncS",
  "key20": "3pnt29t6uUg56H51VHpWyPnYBH1nX3ZGma63JKtDn4DurfpQP7sA4dedXfNHAg5tAqhqkw2o4C7ncMuVNrwAcoMR",
  "key21": "3fnip4eS3i1Efwx4F9jpr3NuBWNHk3bTpky6zodxgtJcCZuJnr6eyxY71ERgCXtXXPQtmWQRrw8gqAhAUiXPtDn5",
  "key22": "3k5WUijyQ9KnggzFKwCdGwDcLDoyurHvgyBWoysKda7HaufHf5FstwZAvGE1miAkD9jryT1ecQKPJUosBzKECh66",
  "key23": "4M65sp29Xz5VNbeNrTMLrXCWbCw2bfRSMTCtuKU2bsbtdABgGTNPtiqynGjS9k4wrRHASLSv3fAivJCdqpdMdTgv",
  "key24": "3upi5gjBDgayJCyWk6dmd9C6XBHDTs5ryQcEQaBsdR6T7zFduAXzvkSoQ1nyWr8p9Fex1tbfWKDEhpKMLgBgSEpv"
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
