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
    "3iwjTEPsuRTTSEdm2pPYF7cq5hckgJtrDu4rCMDbH2DZminp5sLFN5aw11UkcfQSDQCfku5Hps6HFo9HwchjLW81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xT2mUBkpcTGwQxzB1fEb9WVmbB8k221RADcTiXEUJDYQoGSih5nm8XH3dCYT1TvpScMgFZpReeEGae8k22vENUY",
  "key1": "4rXsWLzC5ABVJHVx6ghQujikgngxR6k5AkH1eYNUvCFmDHMqpGp3GgF2yXJSctDhsuMUiPHYbdVBopkMHrg8LpEg",
  "key2": "sPkeiPGNXZV1Etyi6mFH8CQzRrNZAK8fo2fJSdLHHvw36vgwR26z1C4VDuRddd81JjV2mgRhFnfBXPWB7DK7nGQ",
  "key3": "5c6466NUg5CSykvo7Dz8UN6BKMwbjd5eBC1Rb7hNcPCn6VULpbGmmTFTwdK79MYWyk5RqCgS2BzdWZmCsrNAxMBM",
  "key4": "3KSugSHxqyS6Ygznhd9JyiQRkoAMupBb4W4ed6Piuf7NumHUgTVq9eHJyKL2KHtpQxT6253pmqTKivu7VpLNAgUU",
  "key5": "5JWWXGu6MbBXrJhitcTrM72itNYhbRD25oaidjn7unCARWmtgGnkA7fXustmEaFAQqkNwra72WpFZkVyGykpVAYR",
  "key6": "3xu1rCzzgc1ACgTvt7QKmD8o9cVr3LTVczz4uStZWYuwYUi3YVR8Pv63Gpjq1x725UyEaGbg8SrvDg6HrhKnSfJJ",
  "key7": "2SLnUBe2kntfVrgEmM2eXMJa9EDVeHjvxvZasyAShk1fqQ4dnNoyQb5MXqcYNFipSjjgg7ZemnfyZTr6ed48ZJJT",
  "key8": "525CD2JfZirxnq5ckVfgsq2n6w47Ei3BcQVV1W7vG3r1bxdJ925vEmFEhhMLAeLMwe8PF9WxSLkDYUJptSD5dh5p",
  "key9": "3Ufed8yZDyTAMUeL2BHs1sSdXVeosgdfFfq57qcn1zqvFQuMMMU3R5kmkPvGWUke4Jk6FnuzavmkFDf4hSboZ5bi",
  "key10": "3E2RTbvyJMxm5aYqNHa2nznLQ4sV8kcFTJ8yJU5zPJAbZ5x3GTSwBjrysosXKbD2rfKmLe3bUANwWB7AX5swjCyy",
  "key11": "3oxq8NwP4ZnRfgmH28TCXL6i74DZm7Ss5MmQgXMJUXxjJsP1BuGKShJ4vMTei21TJ5R3AxXUDJxqZC15EWd5cLww",
  "key12": "3QhZ4DLtsLBppfcsagNa7CVUXKCkcRdxma9sf2QxssbGzsuBG4BmcK8qYjVrE1KFHK9mG5oq1rDfYngLQgenkvQY",
  "key13": "376VTW4CLfRfv9f8BzaC5Lb91P9evYhVVD9aW2ijyGeYC3NPih9TTSsyt6U5RHau9XTjZU7L3BP1Hogs8hAjjHUo",
  "key14": "2LcxSsqzD9HpqXtZDJEwCZbbdNNmnSHYWkZEfYYKEVo3HMfAgnWkysRxKxMTGvaAmo1gRHFqb1GQ86hD3gRoR2jv",
  "key15": "5B2pNjAAMTwUjSkDbnTE8CvpfD54kGCnjxv13P4QkEK9VFo5pLdCTLHVW4P1Hj7s1U47Pf3J9E4X5sQmbwZc7kyU",
  "key16": "4hVP98RQZsYJrnzeYYdhhQ7dH828SW5haAmZVtNPCuF5H2DpjctpWMD3UPqPhV8yZbf5wqn4aeAHKeHRpNzMiFZp",
  "key17": "3ES7Z9mn1mDGsKkgkKcM57bcdNUbtbDRhtSJtJiYV34EfKTpNsXZu8uJMDtQi6CJ7EKU8YA3Ri9RJdBTkUS2MWQV",
  "key18": "wWvH3vurjicV75Avs6GdfL2zSKX6HBBnqdkHPYjqWD3xazLHcrRVKHoS8s2TWrbCUgKG2EnRQkwN21YzGBNzbiF",
  "key19": "f3gnMkNm3ARNeKundjWj2ABeKehi554URsgYh1pUfN8cRtbiRiCGSpt7UVdqdZeuTA1Zj2xKpaC1fAvDfsXf9NE",
  "key20": "4Pn1vGoGDpHEkHStNQdFFCdFuUn2PBhNdMEFUNV4XkN63m7TWBKXzfZ7vKv22ZY8ckakeWZE6f8cDfiuNjYLNUSz",
  "key21": "4rtEQWqQQ32emotGF5hnVEU4FZTNAeTtEZbProndKi8ZVEXwbAAj2TkTbaf5CZF7Ljr8h1X6xUMvaxNcgHQAJs6c",
  "key22": "3hjYtV1BpkAiHAtSg5sDwHiviWwU2mvSqz7n1RcWyQqhLG7Fu9eVRZM7jABkyj4uvMajnsCjoV2HJ2r7ftYLt5mA",
  "key23": "62BrG7xyaDves6bwAHojyE4KHATVrriUHuTS8HNpYRVddgpCqAT4sGFgAjG9YHLL6VpVJ77SMbBuYyifb2G1ar2d",
  "key24": "39zpDkZpS6U2qJMDpWRp2vqnZKQENw4MZMDud62YSr2xTsTJ5WfmZ2NCgkXKAJuNEy2RnwiLE5GjPVXFuae2eUpX"
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
