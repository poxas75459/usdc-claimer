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
    "4eoNvWhjvk15rY69DcdRiytxxFWKQiHCHLd6VXmQeMZkkrytCwCi72qTdj4AtqqoDB8sywkMSb9ukjr8mKhzsW1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rTMhzoPKiuDvJutf4TAPCryP3ZxhziF2C1bWBjMGcitKfymnfNzaJP7C89KGN1RxwwEa72BPzsZVG5uaFwrzmaB",
  "key1": "4ZMwHTdt8bDzxfQDNoFeDCLk16msRxY6cJc3LyfffRhpiFR74B3Bj3WwT63T7hZGpv9kbtrhTvRWUA7oFD61erro",
  "key2": "44oAw2Fv1wpERRGqMcyJfPF9sZXUQWiAQcoEdxzjgx9rsAqJZLtEm2W3saB7DgeZRWAzTACMkHr44BcshRyZqnV2",
  "key3": "5SvFWiKwEk56Tp7k7MQGGyNjazMhPwo8yGFPHrLcnL6tqXLU2MJNF8DdJuvHWA8kxVNDfTsNNT6rAKKCeYAb8YDR",
  "key4": "59nCxwZ3gGPgEUXPAXHdVdC7Xk9vRBB3FmiipzGZx71GVvyZj5NtQVdnTfafxAMPZdaEFznZNmPLbbhS6JvjucN1",
  "key5": "2h1upmPSN96wn9pZKAaoLMohBmd2VsQGuespDuP63DEjytNxFrXWU2obZFHbvhEvDZQhUgFYH4fEQ45bZF52RS9d",
  "key6": "2qcxG7W33ipSEKZiY9u3wgYQXoHLEEhWiztinvzWYcfdNGj2cDfUuHbsbzL5hxPYRauXLzwAhthRx8PtDVzxetsj",
  "key7": "2NVtQbeo2ACA3ESWtTtzARnVjq55ixvUdid4nZmCbVeWMuQs1rNeNB4wLR9gtnjAysTFkUboaRYgwVfBuiHgWzp4",
  "key8": "3pXC8ZSmy2fnMiMyHA7VD3DsgTLdXJCFDHxkRkmAt2vLzC8c5meV8y1DATTTtSa8uHm6nVXKkE6cymeonBGt7tqP",
  "key9": "4V6c48ABK3T7cz5P79EJKVDxRJ6JbKMMPjJ2dxjeVwvn4HE2ikPDsKG3jw4Ktf1Lf8mToBc1xS37byymiNp2KNfm",
  "key10": "2JVoJ9UmpJNzPcE1jPdJPf4pfwhEeb7FjyEZs5y9zp4KjPR6g893ygZaJ592NLwkxgF4YqRg8gxDUn2osJ71gJh8",
  "key11": "5jwqEvZ1LMTU3Qw14U9zUsTxfcuYUNVmwtmFYKyhPdGz7Jjax5cecwAqN468GsG1Aua4SCe2SSJKnPZsgEu6fT2",
  "key12": "52jmnd1Vgwj56AtAzCsL3kH8dW8SkkA2Ut6FEc4H48DNTmm2c2Ci2RNKtKZDZQFjQmRsAV8suB7emSfx6Bsxfspk",
  "key13": "3v9YJ9hfLQLztPz2znh1p22rh6i2MQvouRmkh9HLuMpNuFYuspWpxACzR9sVwRuxLUF3v8ibd8AUEtSA1so8YV34",
  "key14": "4Z5wCFGzxvfKg6FKSd1GohTxiRo1UmcEGakERqr9mfc2uJeDEMp9fVpGx8qTruWz2oQ9KMBcXXC9QUu6sdWWnmeD",
  "key15": "prF63aFri3xLM54M7hi43oaUUGPC4obi8z5L9DmvXgVWHUMtSHXcS1LDmbmCq3r6fs3dtF1StqUwL39o9WvujmN",
  "key16": "3H9bEiqevuRdb9ZCrTAfpgc4B6R2ySi4oWcXZ8wWLhCyvrWRrwHdKkdH2Zm7E2cew8aJCzs2RYwt7ZD94CCMwPtp",
  "key17": "3dGztetB3dB7dFC47jS4BLRjQsHaDgC61QE9dWuPr1fopxTUpDKPzMLUvAvntji7WdnVA7jLfeCZbvE4msmrz8SF",
  "key18": "a35GHu92wDaHoHjCHAgmjk4YPYJKeVUWhDezm3oAhNda1tMT5p82KV2MoWzo3XwiHDbWRCcUwe8EJ3aV8DnQHnQ",
  "key19": "3UH4JsV9K3JX6gQve42uZVt7v3NeQFGoZZHBYunitSa2pKMa1hfTXYjZCyybEho6xFVjkgojfogmbi8AFGMUyJ8o",
  "key20": "2t2FSQYUVRXcX9QHATnaj2tKpfWWJUK2WgBptJBrdBUSwyNUdtTP48E56Fy137JWUZZ4vTWjar1qiPQScpUzBX75",
  "key21": "2M8PH4DxZ1bYe8JZ6x43tpkz5nVpYp5ooYrAyR9Ndyhf9539pPMv8ywHRn3GfPyyagmKNjgwqepJRUEi6iELLt7c",
  "key22": "2XVHq1jr3sTx2wos7cRSkufVaRYD6gA3QA5hiXgR5qaBeRsuiTi6J7rKZg3HsvG2GDC4x2DJxShhLLiExYfscmEX",
  "key23": "ViyNUuMaXtc1DGna3ZKpAEvDJGpWNs8cUeqJik3HNjEZrA1XEFXVnvRo7EXJRFfV4BSXFZzF1WZMoAqcujosFkW",
  "key24": "3hMvFTuuuwr28sJrHR1VqX1FJFpooVtY64E9DbyQfEcJybx8735UTB8jGezeHfGGRkaLszcytuLd1Suqft16KMEn",
  "key25": "dkZtnhxKAk6zQQLSMeoCayJsp67FoBfQy46Tzu3hEhWEsAh3Xwt8u5tNL8zvvYoQ4Fyz3gSVGmpMG4emDasNsEA",
  "key26": "64xtTrmtntTgmLex5XpRdADJPWGHFEsYVaCHeWepps6girBZUDRmGpZhY4bkNQ2LCBVifKcKnVZFikmGZCw9fvuB",
  "key27": "EGyy6HUWbiFs5EwGPa21yerckzH5LqkDoXDPv5VxsFWWmGdcJN42hcFKXXRW5K6vG6nCc1C2UFtw1vYTuHuujVf",
  "key28": "ppcgniha5NR9P2Y2sSsRvJGSdRNn4HSkZSWhq8Nkyd4eWuTR5BipSz66C9yP6ej5kUkHf3aWYtR9oDFoNg97ooU",
  "key29": "61EdTq7fMg9gbZm1cX3kxU9ZKWxCXJiVAqJtAd9RA9wvi9Jw7XudsXpCcZWxxuAzV6DJrAMDuicgZPU2NL9FRnrQ",
  "key30": "XvVifEeMb1B8CdTBgbabRwwJYr31v8WbmgnfZVvCPuFQqVgh59BYhf4e4JbRtNe7gXXG9xQpuASt3BycHvmZkex",
  "key31": "3b9i8uS48TLAsDHLdaLoGMip2dEx91cqk66LRCxjWcmQDWaBE46pe42ErRNvbg2U3APrvGmYLnEoic6Pt2jkGmr4",
  "key32": "3F8gbmgM3CvTo9s6BkWov9XzU9p5niuDUNXMhwVupLiM6RuJ48zjBhLFxbcgXQHvxx7totG2yXogw7fwPP2QJMBF",
  "key33": "3R1JLZAmeR8hd4fEpERcNK1R6NMcFLa7TLuVMXdDQmSYAuS5Lk1D57kezAmmxtvGj61QCYyzLFh9VedqDHkBrfDT",
  "key34": "3fhdho4cF3zfbYKE1mgZRYNmkYpWmWvR9hBB2JzUGw73XNd6Y8v1v8EN9RTrbhJc9R64bEuMQWhDPBK54N38rk4P",
  "key35": "23ZiwEQusY96ijGH7DxCqEW4W1mn4qrrFi3Px7ens5CoGgHwPmJtbmf8R2pYBLe7b5wziNimh7ZeJh7K8HPiMo52",
  "key36": "QVHQq7PmvxJ8KpZeBxF3rGhbA82yaSUkA7VauaZMttBYaPAKBHiYn8UqDraXjvD2cmSUY9h4N6yBYFRzWcZiVmN",
  "key37": "3TSyuWK6ECisr4rtji7sDiggVpPSFnxCfcMoSXXnrhzdsCunLEjfSGfQUhdrP9Zpqr34g96JYyE366kQD9CK1aDB",
  "key38": "2BwoQsTgcuHS5Au5HpbBoQ6empd1bi2knKjRDcKAMxrKiFyzHnTWj7PcA6Vdw4XAPWNSRSsa2FrDGD3PsuWaMcYX",
  "key39": "2Ba25ALibtwvKw2qkxZPi6PzupQWw4Dtu6ZQbW91SniBNS1UaUHqWGWpxvxr9zTKA9ZZS5UJYH1tsf51nCkkK2T4",
  "key40": "2kBfXep96TY2E8XjVnMSujvdz5PBdDKQpYbhj5JZ8gqdJjnfNVUPaEZNXcL6hnnWRabyJb5SaXRs3hrWbRPQEECe",
  "key41": "Q1V4Y4at6T36gfeKb5nqzmbr1gbSUWKjErVgi5UiHSivQop4ZBET21Cw4z7WBJSwAbSZWpLQmLxnAggkJc5ixR6",
  "key42": "3nFzN4XWQL695A1kTDNSRgTDhsjapjpAwzSWi5AaPkfCGYpNELCUpQKWcaBYHe9iAM1ZurCaN4YNLHpBRXiPzLSh",
  "key43": "4Ugdhk6B3DVaz3UgnQV2DUYGmVcrMXoQsQXsYDiJwzrZJr5wyddGyLbf9nYn8qFY5FHfZ2csWRFNw7mks2KPC9bq",
  "key44": "27U1FVxd9cUFzKVsfEGJkfrfo9JupmrTvh5uwZ4kQJkrVyBF2VvNKtZBfCCb9xLWG8vhUmUMKuLyCHbc5ayNWtwR",
  "key45": "4q3xvM897AAz76q72vj9zEtWzEWDdqg35irUT88jaMSpK79jvJcF9xQXfSt1QocPn1CaQLXnqCq29BVk9nyQvpsN"
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
