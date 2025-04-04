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
    "qEjxGnTUh2cdhgKwXRADBiao57oJDojGsJDRvD9eYALd1jKxfAnksPSagmWLBNsu3XFQWLSPcNeuLct3f6fMAkc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YZMfLfn2xp5Jn1GqynCx2tVTiRgrtuQyoKob4TMAiZtdo5hbJ8JxDTaw74cc3KhwXBb5qzYcTQrMF7ZAZDkJwmY",
  "key1": "ECQM9XH9yyBxMBo6kyRb3GqDaAnLTcAEq3sEvLsi2t4TvcXGBfuiyD9dqdqjmAjY7wUk6NZ9gDGiWZhosTA6kPP",
  "key2": "2MYqqDnmWWEhPg9di44BN4HEs7G3E2owoA1vR7YtK3Czwev7mQbPiBgPBEyETguNDxyKbd1ECY7tUZGemrv8Y8AQ",
  "key3": "5FjbGkpshTxVSKVhf8V7R1AqQcFKyEnwhzLgsSBVJaAXW8nEXGtnqkaYKPSUBQXv5TLsieizX2SDYFgxx8griwas",
  "key4": "2MuSNx1YxcDSE2EztUwNaXxPwJm22kmBSgLiQm5bwuweqGKpqGNFA9xMw6ZyGEjzRBrqV7TvDV19MLu6WqD6dRuD",
  "key5": "4XRmmqccqEEpW5aU5uAKqCPutt3yFGcxMhAwn99dbrXuSXQJBf9yH9mf4zXLSrfMAjPxXdSFCCyA22FCaMuatvh5",
  "key6": "PVMsC8MbUwRdbZ62vuNW9mAkgks9G3jbwWKxzkyAkPt1bnFnA1sJn3s8RuMmHF8jMyCamt9cRRW9XGfEvS4gpz9",
  "key7": "N7wHbRbhWn8WFEzEakvUhLuu8my9T4yAdNPgwe9Q3pqkRkx5GdB22xGjKTHHNbb6H23QGWGTLHdNu8Do9BJVJcp",
  "key8": "52NSLedgKzunmXMoNxSKu8WwwuP3goNg9F9M5G68zsXbYsZuRDqzjxXHNDrXN5DLAHtps4FdWngDCBuJyQgv82xM",
  "key9": "2feeUs3JcNp69MLGfVa7oxQngR23GC998BynXXL7GdmZE9vCz9v8py9dTtUMxqSSwKttr3xJcQG6soCVxRch5BZD",
  "key10": "51CdDqpKK7n1rNr5Kkn9j9uNz71AQxn4tkcYsQ3fWvAqzycMe2HhQdkYVvNtR6wCZw6fzWFH3Xc7YVNA9Qty5im3",
  "key11": "CqMstoUNnXSdaYY4YzPJCoCo8QMLQPMqN4kW2QuTxvMbForZrkTiVv7aTo7yiwS5kEAjqJqHgEgfF9GG2o5SCNr",
  "key12": "32eN1KWKyfFVxE6vFKHoHbiqFd8G2SgAmzY7Jk44ou8L59DQ1GFgPrBhhBJwx9rtWaC7MwvAwLZQzy1hVAfc4jeV",
  "key13": "3Uv2PVc16kreUUp2G2uP1DAkJDvzgJDYeYaAdKNgcLkS8jj3fkyef1KKQ6vAMp31ynHCVz7zJxUKqrsLmy4LkU48",
  "key14": "JJNvrWn151trnJhLZHoXePzVKPesNQqnz6ehjr5Csdo3gWfXNVwSbstWfktitYYMv4Vrt1WL3be7YYjWHSx7AVN",
  "key15": "4eSa4JVsYgw5oR4uZtxGVK3VuQrsavuMvKc2ykCFzxgCHngWEDM49FS1eCMyw9t6AnJN2SZYvyjKq14gdy4jkjn2",
  "key16": "PpE5xEu3gHrB97XRV8gbd42uxjpRojyH6hkQfFJ1kQtDrBT6bn5tvAiyPaozo2xtKmLATYV9ochiVsML5Yt6bXr",
  "key17": "WCLsbkKKJRin6XaLri8MxiAT6zteRzDPhGDy6Ua4jBGFHvkxyb2nHCCtujzW4AXtEjnzygSjwkDgeWqMKFQ55tR",
  "key18": "3rZHSjFF5qPYUqN8aQm2R2GB49PC1B2WAfLBhuGEXWs4sHxrbV3sPzVxRkABfB5mDLqjJ7qgpDMK36QHZqeKCzSV",
  "key19": "K44NZR96bjpy4y4AxVgrmzCnxuFEE5V3ihu3EasD4uFfPXi5QeeJv58WTdgPw9NzN6ft8BqGoXjDt8SD9osZVnr",
  "key20": "61hN98wTCmKTMansYyK879MGK7GnmzPfxd2gf2LrXURjgdCZgGFWa5S3ZxMTE8zaZNz4N4scfR3QHhwkZcKhkX9z",
  "key21": "QzoVJfQtjfRbhP7sv3Z5GSzJeV61UrTb8srjQp3Zqs35SwpLGK5qk7nVVFrivy8jEEg9GLGKqBpm9vzdmgZBcor",
  "key22": "3VL5SMp3ozUUPJk7zE2d5R71BirvtejGcCaUeyHPaFCNHzq5Hfc3h3weABr3sJPYMvdtFcVzpQF86ahoY7Lfnonu",
  "key23": "ociGmoxYnbZy4skPuS3BchSpH5UzYGPxfoPV93KG5hsESpNYVgU8nbyJ9xG1xWby4ff6r4rHtJEmzPMUevHqJmo",
  "key24": "45TWCtPUiFygyY24qZRvhCT5dYMncHziKZPpUYL29wFaZbmT6BWg3i181LSNaoGVJDrwxMeFcfDZ2REQiJ5zNpGB",
  "key25": "ZufwGsRxQNKUya4GJEAnFqpTAGsxj6Cyys6dLGKr6DeRuVsN3Qh3hZEYxw9UkDzfGkLbHRuayTMQVQCJ59yGbrD",
  "key26": "1SUG5zDbQq5PQT1TZ3Y9JGJKX7BWM7ZUbKiCiNEckNwuSELo5WC7cxw1jFMa1TTL8frKfNxaTSWNJgq3SMbftfb",
  "key27": "38FXsg2nLVQtpmPn1sxwVpnWFPhFBCMJY1pUby39C6MnrVXvHGyW4AMfQfJ3jZKFqXqnkZUWbAiNre5iZPXYSime",
  "key28": "3pSvyCA6nRptTJLFP6mFXGce2wXQLqCAjG1yCi4oyshAbcMG7mqYco5PNPQ8JCnqf6n6rvF7jL71ocLbiHeWaMLc",
  "key29": "5t8R76NifdJGiQ3m7JnAPF5tqpzT6i2AxMxUHXnqoGzNi3mRzt9Xe5rbtYiin2uHxce9WE5HSAPoLCJ2gqRXLA7V",
  "key30": "jHZL7i3oinNN5YxM1ydZyWKRkdFi4RHEuonZvLqZNc85aJjt6GFoNK1Lo8Nw6JV9NoyHjCvrAWpn9qhx9t2ZRKX",
  "key31": "42Jz7D9W4UaGsdpKp9AgiXrNzE8Vszi3J4LHN4SbpwSTExJ8xVoqBFg337GSARvMQqcQtGuoki1BBeTi6e5LMZY1",
  "key32": "39PBWURLwBePcpRLkWrJNkRXi5ow5Y6xUTosZSW37JkiwPigaFrxrv7TnYb8p8Eebkt2EUaiyQG5jYFHp6t3nTjQ"
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
