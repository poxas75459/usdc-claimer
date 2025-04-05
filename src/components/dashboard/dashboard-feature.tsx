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
    "63oZQp219nQq7tgFEXeDQd9U8wjVUk7Vh1mngv66e8HvyocBeTxBHGxbiSEcvPx8ec2nkNMDpdZeNx35d4QAK1XA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cqJCR4kReJhk1g1MKDNEX8GhyeR852jWvrJHrjs5fCXi76LBRugkSHARkGxSPynrf7AyBMwAXrW5UWp3VRzCyT1",
  "key1": "8cU8CHCVkZnRWMbQHypHqLKueX7jRi6AHpEwBnFCETRxNY2rMnNkK5sHKSbxciED8McueK3UAKqcqgcCG3nwpbg",
  "key2": "3QRjCpRb1vxA5wtoVKaMYvkgpPGrecDw9geBzm53VxwPQNtruqcioCmZY8Hd9suUgqjeMNmTFpEorCs7NG1hzYj4",
  "key3": "3UuxUUDQcQMjkNqB5y35B7tj4RbmG99spzwgmyZJ3hMeaGvzaKiqDXFwFRakMh23B8PhQEoxCgFcsqd75tmiR82N",
  "key4": "2LCgoEAjyQfujzpfqX95m8fHKk1uJ8yHqBpES16sitVY9quW7e6ZEpoD2arWHnnizKrvtb35K9h4rWWYU8Pvqgbt",
  "key5": "5CYtUeGg9V6sZEggP9aEnUirnHLEgE7YtxjaNsbUjLNd1sZsTMhcsMYvgdNeRB69wukm5CzhUiTjgiW7di79ofPb",
  "key6": "6GZoWk3xJvfNJqiHXThQsbeaifQCQnhP1a7it5UR4wM6g1P45TVB452C7wZjRABWf8t4zqNNA3e7HEricNqRUJq",
  "key7": "38oAF8PTueJ1PwAEFbtgN2HAfuJWu4STCowC4wnZvGyaPWNFohyAPZz7c6ERWjmrMyHv1ZdydoGtXu7NHY9vy5KP",
  "key8": "zuJMdU6q7oEXpd689CXqReG3eivpwVdVwPEGoGQrKFaWAPPjnLp4QSVnBNZRErgMmGXu49cs2JneLLwJFGkvUrJ",
  "key9": "5qCC52yoVF4ouGH9PmHJNqR7YgWtWNz12UXQ979t6n26tEV6knsZh4yP8gD6oLWiqMZATSnypkePszzF9qfcgAZZ",
  "key10": "3dHSGdtzYF5YqS2RruvsFTwZ8wssSU81ywY7EKJV5XgUC956XzpDxWXg6LhSFa15fw4jVbUpX6oFi6BLvohrkH2E",
  "key11": "5m4tJHdzRoCVPxauL1RiqU3r1iVEsiG17VxV6tvs2dPEaBggQA6wx67ePmvEakkCY3LG52NbzLfQGNZACya1x29R",
  "key12": "FmZCRXff51xyUTCMSbLcpVA6SXTk36dvKHD1gv1jh84UE8cVeDDD576gUkRjiKfrd2oDTdp3Fi1ff4JVWivhJoL",
  "key13": "3PiSr1LjAXGPEocDxTGsYPUkxzPrZiEQSYFn7cN43RwbgzVETz79M65Ca5A8zdhhxz7tWTMKyxndR1DNknBBUXD",
  "key14": "3nqUvRpPvaMNVcrrJ6hBg4Md4XUTphD7HyzXoZmoBUgHBH6ZYVe2xaw5XcG7qD3JCsrR5wveAVhvaPeZ3BE7MpcJ",
  "key15": "5eAtqLLqtb67YDzNmoSYhWd763UC3hhAxMnCfcP1fV2niQWwUrZp5PmmbUhQaBHGbSCnGBVR4Cay3NrdeNnoqTPv",
  "key16": "3mkkJyNkwNbg6vkrx9U6vqGFRSn5f6BGuvV7mzSvvWvRPGCtHNB4XCpb5Z3PhJvhBqizaiXkmbUFzocqT5v8qvBP",
  "key17": "3Qg2s2yoAEAXqPCRDvnoRBtnfGFZreRxc9n5UdH6vPmAXrKgZgrKNkxfDW7sh4WgoT8ofGVZur6mG2o7HpfGdFEz",
  "key18": "2Xc9znccYS1wKBPB4JCRCSLQTKJ6GaE8VNV6Sb6zEfsQAaiHKF2kW5wE3iYHMGErwwpC8b4NXALHcwYCxFAD9YdS",
  "key19": "uHipKP39QELMWWgFsGTcDV6CwtDSLpJt9RTaKezSxhS2zFK8wJkqT5ZUP3BaAs9QF54kSrwi8WWFLJRNwwyXRaq",
  "key20": "44UzsLy6pevErzTvceH4W838gfNQzRuhFKA942iLfXK1XeZBygYoCDE7ihSGZCSSkAK41ueBpQUi4SBVQXHcUxEt",
  "key21": "2Lfcb8cQ5ZqDd57HaJpD4UR3NexThxugTc8StRALM4ncSwkaXWAmfh1rMCJy9pL9j8BigFnetcB5QXFbeXg9qcqn",
  "key22": "3X89gvL11xzva65TULvWZmr9yLFQcMXEYkzANt5MavtmZtPvVdnAKjEuBJyZY4zK73j39TSrJnXzVFZeXAEr8tD2",
  "key23": "5af7TYfvfBR3Dt7L6Qw6upQJENmWrDnZcRkJU9DtnyFZfz8sgVA888La6GAW2nrWVVj3pVEhKd29fXFxk25JuJku",
  "key24": "Z5iACNeCrEDu6agcRKLNABewGcrtpu9Yp8qogoEJN2ZYWrtYhYUHvCqFZAt7UJse6N2HHaumq2mcuKakHnyeqqA",
  "key25": "4TJpnSFqznS3hBhPyUSMmUQq4pVdjLrA4qA6pvtR5EtcVXyxSGQvmSFVzJqGwqb5PAYRmBBCtfztjDxjbQMU8hLk",
  "key26": "2jx2WTCdLsD8AgbV1SjsWsxoUXr3khM8kdpdpHA3rHukpuA1ADXNCpZzNNzJ2E1psJs46hjmFPEZhG7csWA9pFFH",
  "key27": "2Hx6fydQgtyUd1bKp8a1QLCPjzyMeTf2LEtyaeRCK9Ma7JYGefgh9HQiiJHZhkJ42Pih54WZqFkF77hk87GGbUW9",
  "key28": "uYFm4VPKRFUjaJj3pFchJmWQA2DcwUQPKU1GpamNgziop8PxSyZvUq95zVd7YSFWMzV2zYG2KgW6m6YVK7Rg5eE"
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
