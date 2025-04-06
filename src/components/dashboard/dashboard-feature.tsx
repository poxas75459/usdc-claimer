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
    "CXBi9N8kAq9U2RyyDNKRVz4QQwzxMZgqEVCV1xXo8H2Eg3qThnKEKTidf5qybMGmkdekezuJbFxBGm6JdsTQFRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PTYVF9CKvTLBUE19qSzxPHFXhYhrDx1TzYxjb5XpHNs1gsNhWkMUCjLUkCywHrMXm9pg3tKH9Evnrx8LYgToWzn",
  "key1": "2nqioSkroTjo12JQHMTJnf9MGEftwCLwLHCQkrgm5WUswU9qVYiYdaU6yJFgaqYrxL8Ka2LSt7hAsQU4i81v395",
  "key2": "3M7qJorKzb3yzE6wXaQbSxxu9EV2WdPwSrjmBhka44QDoA9eMpA8kyYLhs7fJhpfCfNx4NuHDJRXj9GwCU7STqw",
  "key3": "qdFPa9xvwEAUQJkoX3ehEcTRVDfRZVPjfh7Zur6E5yWw9GKHpj6HGu6J5ABxGkxmpFuX1hg3XU53UTy6EFjenfG",
  "key4": "AEPfEVdoEyhN5pNMXWpBjnSMV33ehSWkPVetAT7gJmkGua3s5RPMoR3UPG5WhPjf4NJfYRGoPDK5e4nGJhATnMt",
  "key5": "2oS6xbm7HCK9UBE8p7vzFVhsckUW8eq8HhFTyAqhZZkCwh1WHmH7TyVanhXQbqtoRFcwcnqRE3NfcNQWcPPEbeVS",
  "key6": "2MS8SUqMXxS8AxYL6QzG4VS7kHp2Fxy7E4eoD58dEHuCETFx7nEJEYC1dWTPeqCvPh6ffQ9kyYC8txvwdMEE31ux",
  "key7": "41NpvTjajSZDWwwHVpnS8Ksw8p5t5MLEtcZKKPPXcVCmts54Sf7MK9dduvq4ztJW5KnKZJAjbjnRf6tfJmZ8SkRo",
  "key8": "666kqzybgDQFtbeA5UF7g5B7zVSZoqJHAd96HhLhKQPRSYDDE7Cy2dLJpSE688XULXXo1XHguURPm3ar2N6yuawH",
  "key9": "2CECSCaNqzpJYtASmPLWTYWFrd1hmfDoPkDRf9ndhhrm7qwG9A6FEqd4jT9Dnr9nYiDKLuwXpFgtaJtvfccUkBG1",
  "key10": "4pLXRjP9kFV8ZzEGbzbUcVxhmMqkGBzjX5d1trQofEwSXN94SYZcYfLXTLnT7g1dxvPSSMyvS71f5ZACM9feKr6a",
  "key11": "5ejsWC4AXrdPV2djfT5HiFVhoodDEU5TZuwcPdtNLiksGHVNXN8Lq4L5whsPBfLdKM5VexyNy1dZLj8vzK9mYk7K",
  "key12": "5Yon169dKt3ucHS2V61PynkHfraNcBY6hP5XSAMyTmQ48DT5dzX8ZF7cGCwmGngMtfrvvZsnHxCc8Tor57kMbuEj",
  "key13": "52VGvUWti8wFrNfBvYLfYT6BHMCVswGRETzKTKuVHuCnJiHFcoFQDtKEM24DEKwgNXVGRYcGRPtDFKSqAtvqpQXx",
  "key14": "4x2TAxoowCTgexqNgajgXqWGPmpCuJAf92Mb5KXF3wSqX8nPmHCPavXtdzB6MSDNsduJ8PaUMmPVYxN92KWALRFT",
  "key15": "x2oGRgPN2ZkYVVqF3eKEwt3yqP7qwFWcpahWFRr65ephsRBPv53dNdQkP2191P6dEhB1mqxSe9ep46Tg8hCo3sS",
  "key16": "4VDEz75MbX5gZMgeU8ztXNecJi4AcmiayropovAo5HxUM4NXjghdRwXGwqhT58XCYbMBZt7GFygiTJXC1FuP2i4J",
  "key17": "1DP9G16JegVZGEPSoyfmDZAff6MhCXwxkLuEZ6tNffQ1RA9B2WqUMnch1N9boyDfe8sRWFUP5zRsPdXDvbFHLx3",
  "key18": "2vk3JFZgDgZnBcBiAFxQL9A3beTuJS2AduE5nZCf6rdTkbcYXjWgiQ2uHw887PAi2hjXmEFFA3vxnKmKvya5HPeU",
  "key19": "2e7VhUNbTwgJQF6jhvnmgk7qPDrh8cMtSAEc3DTb5WBTsALxnysZbWuArFcGMNJfpmE489sjs8MoNKZjesSiNqk5",
  "key20": "3X45aVU1qrZ2Ugm67GcARW3ZKEvuqmkuJxmDs1VqoG724mwxfUbDnsyMXziWf4boQX5T2Xkr1cjXZ5N7DZghP5r5",
  "key21": "8K5NWrMJrSEN2zbLhDqZXBr69opxjKPAgYA3WLABrpHzmn6rgbpko9FXqQVCnH2z9CAEEziaUKzdDmSHxJQaTGS",
  "key22": "5QQjp6xfCBTAuhKw7Ykk7fhjWSZNppVmtruJXK3ygmqGR8stUtLGmYpL9jyfSiYrcanDaHMfobCb2onFoNp3GFFF",
  "key23": "4tm7BVqK1tPmh3q94vzXBZT1yZAgmANrUqMUVb77tUUP6QT7caa8UHJUbs3ovAtaVNASTCY9tD9pTdAixbqy2YWv",
  "key24": "mecdYSX9gYoDKu3tJ5d8xQLCZz6LohTyB1XXZRzvWxjr1xakdxCczLoD8thjzznif7iDRD8yvF8BKveuwRnk88i",
  "key25": "8PJji8MB6kxhfMWLWtjD5n7ETbVtdA4qqUFuLGjknmtWogdNrxkmWoAmwXC1fyqw6MWAPFz5HzRX426AD3zUu53",
  "key26": "5D8hPf3qm9AsjSpDgKDvJ6ddsu1L3DgxrWbpT5CgJEYkWCRfNMJtLYSuExMpCgdA74Y2EfizefvFdF51aaeEunjV",
  "key27": "4XzYF1u6xdrSKBLQqJBGCSUZMURwJtLzqVzyKawknzfG2idy2d5ujXMbjQX34gvn8jh2FP6RsJvxagsK5AQigPhx",
  "key28": "4PDBcmu4Ntq9KDgmCxJXNy2Uhdov5QjpYqBneJfkQCGFbXJBpH2tCmsBrxjZgy9FEUin99GrDJxSCL64YnbZnPY8",
  "key29": "5oG28wMR26UQbmESmwDRWu8dzNkx69bbbQSFU7EUxiLGy2oUX1JyQ2h3C1ZyEDG5HvkViyomhbX4JaQThWvhyww5",
  "key30": "3WCBC9BoknhRATCMgb5f6wJe8YVg29wZDwEzMuiXNweYd4UKHziLt9TKDEAAEKTVr8ArCaY9hwzRic3yMYnTSiiV"
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
