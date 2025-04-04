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
    "4ANqUi7g83NZ4krrje7Y5dABG7hHuXH1s7bcR47E3jXRJTKUx8aRowFU9HUgN9haGer7pmpTghEZQoRQ18XCctun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mzUT8UjmrWLU1LjCvuKr6oU985tyqcPX5Y1appuyGt5y9JG8KomBTaLg9k7uVRVxE6Q2ayhZCUhUqzQtGoujiqR",
  "key1": "3PNf3hZZcBhnAP4wkYFUryjwdJ6YnWzgPykQ3DrnQs5Ept78QgWL6ZCAaZiKpWZQJkGfYqJ28jTPqzXwxBWoQ6B9",
  "key2": "2BWtpXdDowms7cd2pw5s1hLz97hXWa6HxAZi9BPEiJMq5Mn1rNoRRaJPS5RnaRryarVrg1NZ3kXeExoEHmF845ec",
  "key3": "55y9fWrtQ2W7WXC3E2zdYUQ4JnLGQb911rWyCZzDZjjewmxisJHMT6DeZierDEwQQmg2Ne5ZiUXCHEAVrTK6DBUy",
  "key4": "58h2xaDZ4MY1BsXyCFzUi9W6ymRFYvoQUqu3NXpmKT9qv1hynNpcR9ThV21re6HgygCYoPv7tmtWGk45wRVBMDhs",
  "key5": "5rgeTmJjmTMP5Su6nP4Y23CMm5MdAe9bC3s3cwm21AiSsYDYLNN4LrkWTrtb4ug3UfYYZtN87kqKG8KNxUKaY7J",
  "key6": "4WGPzxzGWVKopTyvKirDi488BnsQV1hdwoSwCucwFDWSWHr9sUuB3kFz2qrCsd2fR3rt4xa4YJeL1yaYYamDJYj9",
  "key7": "58YjH4iaeDvAtkbNCsVN6BFvEAm5CwJTCfuBuZM3t64FJonpEvLNfRtKEjbf868c2Fy6koSgNVnKPpT7z7ousdAJ",
  "key8": "2fvwQJuBRUwA3gj6w5E1jfgQWMcy2HzSYNN7SaThSghwfHYncdhrCih2wAdzbVLNgNVkUpQL6ivrEQBFHQAMeMdd",
  "key9": "2dJQpiAYomjhm5iqv1PCVHViEp1HeY5kAubds6vXgW7d7L84fQ3VZZx3BKPxUyQvmQVt94Lo9MmhC5Aw9izEX2Po",
  "key10": "9WSSG8dp9PFrJ1vjmBhYiTt9UHAdt9WrG8QyFpXEohFiRNpy8jhTyXkFRE4n37kdGh7JDvq4gLzQZPHyxRnxAxG",
  "key11": "46dYaTaKpMGZ3ncCyEuqSUAUd4XJDGvs3ykUhY1tuWpxWHpvkQREpWTKq5cfUPXBYY57NWg2SyPGp3K6WQHnzGez",
  "key12": "3aK6AbYPAGDCgNh6YMVBbak386JtDFpGvhSfUoLBNE5gXC1uv2EAUH8nDEdUNf68dEA45wWZ2DvViiuSrQDmfo6G",
  "key13": "ZHFmh7vw1s9GErEsjFNEXxsrUd93j6w8vQkZZTsEHZbQcsS7Pa5Nr96r14pCaa4FhM4F974SAxNf59J4dNyVH9a",
  "key14": "3g9SzfcdEUUbCp5ssMomtv1KZpYTYyfhnqwQ2CFGiwyASuNceXUJEz1Czm2dEMr1YZaAMXW7nBNebXJXnGkmSYG8",
  "key15": "4ridkLirs8TvL6rE9347sXBFJVuHHdzLHgEt4rVohUxHKzP6vMFSN2pgezWHHx5fWTyJuYVdA87ut3DrJxDhe6qu",
  "key16": "3vZqiSJAbCri5pRCHffLduQ45Dh4eGYoVdE6gkDd3KQwU4QgRiuzU7GU87vrHpUPdwQ2cqzQM7gbGpyd9pAj4y7K",
  "key17": "4FcKvu9WTGrxZVoetsfUbe23uK1TpqsTKjiw5HTEJtgUgVnygZi5MNVLYSfxngfgrJ8jPbfwTwqNwRQZodigLQvJ",
  "key18": "3GzNX5S9G9WSfxxxXLSnN5Z1dkKZkiiHAGw6G3NApJVW6hzHUxPAFrwLs1iKwjgrQtPWtwibcKy14h2WR5ST2NSJ",
  "key19": "4AdVDeL6McrHDw1g4G26r8Le6MU1JFda2cq9ApsMdWftUteutkrGkc5KnjrZ4zqfVQgxH29C9QA5Ah5f7yJB6ug7",
  "key20": "3MTCKuPKLTgQZNh9ffHkKvpXSdn7XGBgL3X7kxTGCMUsQhvRtduEyNaDfAxfDSdLL7Gsuuq9Whxjs5pex7QYGcmJ",
  "key21": "3YcqNWjhH18zrNwzy7LdVD4wsmZg8Wiywo2N1yK4xFhB7giaPjyrCq1mTyCuxee2G6XMPkf4tCDWP99C2p8ryxfB",
  "key22": "2kLZtKTzoXXF4V2g6S4RKxsiSqnWUvgfrUdj6SE23ugQqKxaXwWZHuJzUpSvZwPaqdJmekcidRkGEoCfR9MJauMD",
  "key23": "34fRwVMRNiBw9xeh31U1mJ7yUNQY8gmqL2FvMP9DwZGwCFHAGeJZTvYG5h9xTYXhvRSQXJhpYNHz4Urjmk6fC7U5",
  "key24": "4zuvSyJVni7zPPjhCYCBzkfZ8gRcFmP3joraxZtK79iSTvYdwDVeYaV7knfPwm8FtBx7dXgYNDLhYsbNsRcoMCsw",
  "key25": "zS4DmpuHEBynzoNYYdFDkTnDZVFme4XLMhsqXj9GNv9z4gZhzNdPHJdasRCNTt9UaH8W8XV8uXCznLmkDdgeEyC"
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
