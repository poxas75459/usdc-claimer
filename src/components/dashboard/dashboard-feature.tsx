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
    "4JPa7z2sVh1rf3jyeo59Qy3g9KSoXEE6Avz2tML44MQLgY8C1mz7ZauGkapXkVtqKrkpA74ZBKwTZX6bNY9TSHYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dEpAr9eenRjRtSq28ZWrupvwhWRQ3aLHE92D3uhwfLZc8R9ucsBn8HeMHY6zcrfpFrmBFiZresdmETQKUSCLBUS",
  "key1": "xJMPaVKFaKtKGNPXV4JBiWdWnEAvomLZwX3FP2B485VWDiFgF6cDnSkr6jyw4vM6AXQyx5p1CRdaM3WFdQZWbJh",
  "key2": "5WRwJKwQYwFmy9GL2QoZDFoXrDc5BdC1XumbyVB3enahVtFrrpDP3ENuYZkkZEMKGQVhKcgErUG5jg6aaPen1cqc",
  "key3": "VPQZuzBZWzdy5noc7ZJ4992Dj8AZa1qqXHRuojcMsMX7wMEmkCavF8i415W3wWjkMt1PXmLqogHyG8rvyURutJ8",
  "key4": "5XCZNixgPPGZe6TQxrzxaTYjBhmjeDGKTZiXiqToyKr6NE1kfShP1aF2yHErB3tkY1MjkEUzvh48hMoBunWjS9Dk",
  "key5": "5AwRRfD3YWT4enVATaXZmM7ULfBx3fjDA14KiKqvWgHCZ9tQGLg3ZLbANdAvJZA5WfBJYp6PguGiUDKMcaadV4ab",
  "key6": "2RubXusshoXNvxSFwbCHrmPL7qTuerrYJYQGFaupR9ZdkPrPS9AGG6UopTLZ1h9rBzM8w64BrGfQuHW6dADwP9tu",
  "key7": "2XFKqRuuzvY9YHxa6GrczGMqKC75LpYknPsSJfK9SfBMpsqxgxeTiZtqc6SYgEMzZiK5mQyvBoch7T265rePTKia",
  "key8": "FbfShf6HzcpUAB96KAx52TSixEvxMrMxKaNcYE9yriBcm5AfUGivuzobEKKHzys9Wckwz8pCJJC4sEXASD3C8H3",
  "key9": "2SofEA3r8p6p5WsBa2HcTJp27TetsQ3DBeeJbXzKxnyfMuGjJeMyEu4A7Wwkd9ptzgGRFGxqSWUhVcVSGi6pyhxg",
  "key10": "AEcfqygyMTuQybGCRUyXZ2sU9sqJnB2EsXPR4CaNj64noTjhAG13qAwLH7Czmi8g3gcQppsFBg1e7LKJhjrSz1N",
  "key11": "4uSGBtA7bX6uLJFRgnNcwNfKjkPwZps3wjPqsxbBLMfje2i5ZibuwiERsThXpXP3oHWAm1vgry2KVBCBjkNC3Ngi",
  "key12": "2SDKT2E8bxR1CEimu6PHuv3oGA3BSgtc5qLkTu5izGrUHybcDxejbddXbsjcLKubrsntNhBUnaQG1k1NRV35d3iy",
  "key13": "2pF9quz9hZubPZuvnCayxXMJCTdGc3qG8XveoGbw7D5htyr5jB42jvj5rkXjDTkXTKP13jRCcCV9mDtzMHGJEvAg",
  "key14": "5rpUKZ6kWpn84QdN4yuhgY13Xb9oncEqVFjKtMwH5w9bxPsMBZkX3Y3Sxk97nssLJ7EF4ULMqnyudKZWF1TBSHon",
  "key15": "36eiwLfgvKcxkxfuCz9MaDqucmkJWkRbbHNDjoiKJMcLZ57Ry6TAWzXpq8DDUuD1SRteMBekbpFSq1GQijKYhZCW",
  "key16": "2Mwc1iJ7KJVif6di8mqqumPzFqzmkjcTehJHKBfc2FYAPecMZQTPYkh2E75E7ZCP7s432UonMmxBLmGW7M4gRJWQ",
  "key17": "nNUJQZsLbxCWHYhL8Us1LvhUFppMiSkxkvPbyj3rRkdhk6dzMbcXXYX4ouy7AqTjqeFZAjVWZU7gU1uMQ2aRBcw",
  "key18": "3Hf4jUysiYNtQBF51FvAefP1ZxonMci7J6GAk2E79RZGrxfXCMhGVcW4KU8zbHDrAFkQqzrC5ikVLeDp3sin8m4E",
  "key19": "5qcXAzSXhbaAPXnHfFRVRCbaoJPozxfTyaQPcLpcZPnrZFT3rwjF5GhGmAzzidMsNEfX6UDjk9fNH1kStqGYYUpc",
  "key20": "3D8bHdSvFb7XUPB9EpzYPFmLVkQJAiW4WehV1nU8J7JwwMcZvwsAuQyRbEG8ELhbARPiar3M3PCZie53qJSoGgjw",
  "key21": "2LYn4Gw8mRaTqumWNCYFs2kqqz3QEqg15gbnNVyn2wexRyhwDk4RPMgxVTtYLSe3jJAAka8Z4SuYQVYvbufbZwQr",
  "key22": "3qomCqELrjhCuLDZRd9Mi8XoNSHtdFL8kuSsvA4176SGUec8oLLpPmEVjUocYmQgb5DTT4di4b5EaQAp7HrP3ox4",
  "key23": "3umTQ2gZuA5zKFa2sphH5vFumr5omBGd81USaQ5gBmpjdn6yfMZAfqbtwWprits68jZEZec8c3w7vYQzjJMZmwad",
  "key24": "2TyJDbFSBuVsQrbu4JSeMb2a51McW7i9TxagnNATE4vzvwdCYiszxvWEXBmYU8P1BNFRggNfwuXhT2g2cvwX6Ltd",
  "key25": "32E7CkEw5N6NtFKyqhj8ZAAkxnhrrviwQPcPFsZituRm8ZVZ2EK6qWt8FFpcBR6tNNiACga3Mr1ijC2tf4MkeYDa",
  "key26": "b9j38N4Yf4Hp79zs1dNFaavXu7shwpoNnHXG8rrbJdptXpV2kZdXrxufUJBhMYVyJJcjTY2KS7Qyj2FwQFbxMb6",
  "key27": "3XkH7xNb9B8BvWC454KTyDRiPhaGh9tKhiETB6puvFvvwKX4kavTYcxi5svft95wGZ5ummz3YTBT6AEQRShJM5qz",
  "key28": "3fX3BhcErmKVRgqYgK6DZwuuvpXdPoBWw6zumSaDJk7fGwwUWCJgrA1AgUvtB2t4AVhG9GjiTsrSQY4pA6w57bJf",
  "key29": "2waJgwN53tFSDniPvMEVzBYj9sGy7bv95TyaCN6ENFM7T5rvHk9SjshQRxPYEiHb2BJP224Zr1ZdHo5BSca1ETfp",
  "key30": "S7bvwugRR13hVwZW3jYsvsrffokQUHsHWtdMcgKySC5dE1MgPFAvYrbFMmK2c4z6J367gbbeebs2s9fgVcp2QuH"
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
