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
    "5b9UnApxHsUwGxUe25BwbDQWSDru6mTj76aEHi88JUcfiywAUMSPRwZkHXz37wuMDEBCbyPtzK7CNfAKWJgnyGvj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sUWpVH7jeiQePyMVmaVqegm7VYqsG4T2HYNC8wyNrMUgdNCYLfpHUa9gzqfzDXGQ5xjEohc9jGnL8mff9DJX13k",
  "key1": "2LAVs4REx3wMUsFwEtsJpTFFCwKmLkNxGr3ttTMLvRYjARfmD4F3Yktfie1rxEhqG2cUmYp1HV2CtiRWGCSYmJwj",
  "key2": "4ui38hUWcuKsCgQSD4wmK2qjnMWc3aJrPazSkGqQFFcBB7qd5YuDPqyhv8krjzZcDPWVoZ2rYkF5wiqGv1T3oP8W",
  "key3": "5amEwdrr5h5za3LsxYeNyJq3DFLfvxDBaEz3waekhgwqQ1meRujSYQYf6uhJA2QgcVN5hdhEGYLDHg5T5LNzwQNF",
  "key4": "3p533i8fHftNPoNhBhju78DcFpuFFggcec3jw4gXvFpfkieTVqCnNQWwkY31ywdWT2YpRSyeYdbaF77eUEQkKHzB",
  "key5": "3AQ1agrL6bSof2wLW28U8J1eHxi123Rpkp7H2ZWLGUKKr7AW1JueMhD3BRLDHEx5RmR2fKGRb3ThsMXafNyQQuyW",
  "key6": "5FeMoVMMQdygYTF92CL4mmU4b6BN9uJVh61Wu7c2DNvYcS4DDzKu7J5zHD2VMsZbhfpkoRQSBGgsGhsXhQFY6g9Y",
  "key7": "3dC3Z1aa9dz5zXq8fgWAX56qsWSrFWj31VTMPsKeBAt31qdvNduVeEkkCVmXaQbBej4ujMfbuc7a7edfiXPQFxMT",
  "key8": "bwbn5KvoRsLdofzBG5s3XzZXSCtgURgHjgaDJvgninw1ej4TWD6PfTinMyind7kJDz5bCbeKqSEkayk99RuNzWT",
  "key9": "42THZLbGqU5JqNd4Y7PkewjHwqbrtQbuxQQziq5akbFybRvR7JEj4VYL83sq1nPNbb1SJbkPEctiNDQi9y9rZjtK",
  "key10": "4CGHX6vUHBcGv576XVj7jdUFPhcgrgCEjo9wcaohcuCroFAxzPKWSFTF2GHYDkLrgJA3eX2sLNYS4YZmc3YJrPjC",
  "key11": "4Kfh4MDjp4xYb3YwmpDDtHcufY4dQtMEYT39eAvMpgkNiyeTdC7AUpDeJP2sLuiLGkC1KufiuR8k7x1Kf9m7d4LR",
  "key12": "29yiSrxGcaoM1iFqMLmLfbff2qMYmcKxRgXSSXJ9XaNuM44eE1k9U69yVw5HyXJeXe5t35thBSVEBYfQUM3DEH66",
  "key13": "3rmPvJYLmvNVrqD9s344C1wagMgggBg1QzRS1Jq4Y9R5FsvJHpNWikQ1D8hsnTa24F66np5gKZ8PDWTnMVjjFMy1",
  "key14": "3wSYDyR1Ko3hjwTyje8quD6YdrL7DaSMdaDeh2v7weFy3cD3SZdP9DpqMUDVdHbBy83tQfa4qyPGUPJBA9aF319p",
  "key15": "2hsW1qsDUUvwXvQZACU8jf9CamP1m4mD2jvV6B5KxbZ9dCtEuxJp21ujFo4qDUpzcYUCeGy9pGF5Rk4YfBxTF1SG",
  "key16": "UcfRDKzARi4hYhgLyBoWxCazsF3wNvkNR1F2Q7m8gapby19URaSgvV6vXC9UDPzTsg6gYTV8hpdwUs1Ap24ApAo",
  "key17": "5CceNURsULuiDBabNbi5n6hsiW3Xhi8QCTVJn8NDG35JpuJgv3zfGqX9XhcwmVk6FWwXvTSRGCrzGVquKcL1Rnut",
  "key18": "5Zvr56y62EWZ2CtcVyFah52qpeoQF9yjdC1JSsKf6jgMAZt7eopCXCw9oXMhbnBoRWXPaDMgrFnjf9UVzxweuxxe",
  "key19": "2e64Kde5JH6dj9vMyzZQPvhWfCkDmUpeLyYrvbhdrG82u65fkee9icmgRok8mbKgD8vd8uLWSsBG4kxDSEbP2qpE",
  "key20": "2ijpz1QHaMSqwLj7hPqTw4eUbsaHCfGYFXAr8nMdhwg9GeFdu8pxt7B2YMTJuxY6tPcggLKQQCFE8FH8VEyrgfwD",
  "key21": "2gsccMkkCEUTG5Mmibe9syYE1ms1bqtbyoqPxFwQkPjXVG8UT4wa2JJN1Lpw5TD5xh9pbqnGnJZqU6MUp6ksHtYN",
  "key22": "qASrxybwMRYcyxFhDPD2KVBjoYCFnxyzitmWcSSaxUSFWenFHjkKwc1KYUK4NFvNKAK63cUXXqv3SKrCMDVkdVm",
  "key23": "46ntPmYdjFMKobX9Tyi1t3hLgHKeeCmvgzT29xwb4SWhqPC7CNuNxUtm7dMmFFdw79jDVDDhrbsVLNGkfHmWWzGR",
  "key24": "Da8KavPKRipzzqabMey5GDtNrubfCb6179n9wynasHWyZQyTysaBRDKu5zh95nc2uGnURycu2756gayKif1fAu2",
  "key25": "2WvGeKp1FDyACJWLZuYPMsNwEUqBaWvbwUEMHy56xZyz7CxWsDSYqqYcDNzKTUuhg2aMmdTKW2AoiiJxJkrTgnJk",
  "key26": "48fGLdmpMcZ8BuLHoX4cPkcbhYmg2p3EEBP1gZUyJAvY5WFu1Nt22aRq2TZ9d2CzcngrqzRGsKwJSFsQcq17oHPM",
  "key27": "XTRWHnBs9xVh9cJEmUvK3YBuDSaogPjRvA1XxK4L7rpTZ5tkzd4etHeNPxM5y79VSDkKokXC9ebHXYe9VT5MGPY",
  "key28": "2y7LcWRmf9NKwC1wx1XkYbXGphVrRoLCDpvuHyLir5SFpv6ZkpxaEhC4gwu4zHHQtcShwXJD7p68tYwb8jLLdVjx",
  "key29": "3gNWLpPQV2Wbpw4DELXKXmG7cgnqgGydNjDUGcqCd4ahE8G3eJcZWeR2S8uTwzB3mCYD4SffqaR4SzBWZZNRhDxJ",
  "key30": "2n4Fw4ioDPGGZ5G6LRWDXq9cWmbqo3dd5oMehbwU5zCMkqUT45Qebuo6U5VfHBXLTJCHHUQZLTxUcJW273NG8kVL",
  "key31": "2w5Efzhs7P1BSYLKEnq7xHcbVvbH2cAEmM6UxnSLpYQdLcSAu4VJLEHBFuTsgNuU6gTJEZoKe5Bw4H3m8tqyiEpz",
  "key32": "4ucNybe9YLuHsU9SEuHfKPPPUJzgJHb3Q8WbeAvN2xShcPL6DWTbHQyy82KhDpJnFaFDJCw78ykTnS1kdrUci5p4",
  "key33": "4Ub12PoUJUi1HiU4mQaKTRhykytLpXB2EJfjEuepcmVRsfmnZ133mqeMKjEwfsDzPMBJiPxyduDY1wnri1ypiBGm",
  "key34": "66cpMRe4HQNt7dizS5HX7LTbAncLk5THB9UmhTL1W88HQqsyJzuNukbDkJrKg8XWLDv5y2HYzXUKd3xnTu3KF3QP",
  "key35": "2hkZ6Tx3WzkU8fr4R5AHybKYYyKyKmXY7peVVMabXh48dRpo79dCN72pCLn3RXBQQ2mMKGSkAru7WChwR9HixB7k",
  "key36": "Nk1qPYLb4ng8X7DCrRe3vBg19r4FeAacsEEP1ZVnh7Pn48iYv2BNBQbgqedTSHmR1AEm6JbYFcaQsah4hdiVsBk"
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
