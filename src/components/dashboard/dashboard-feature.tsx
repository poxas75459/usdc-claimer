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
    "EpNASgj4C4XGGH3SCi9kUyxYX6FzVEwt3N7KvuDPER3YvuwQkgYxhNFBzfSc7szXjfBgP1k9BZjWPfeaz72Y4Um"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AdDgCcefw8Jy1L9Lks99znCNVwaNwrHPH5Y7crTHFdLCZE7Xn8Ldu961XvAQdrQpwd9LmiDQgzaCa7W2FudttmW",
  "key1": "MbUT6kaVCW4BoRS1n9gdpJPN4RgE74W9iF3PRxisA3YDzyLVK8q3pdtxMv2NsCVF6AZsercNTtpY5Y2FaUGvtJH",
  "key2": "31f3FuxVhCA5wthDpLocd7pNhnNBytzSbykGrjevdtb7k2EMFtunTVHffhV4DqShZh7aGDiLxDAYj8gx1MXXkZbN",
  "key3": "5DrJwLWeU3nnw6aqa5moaHprMGkDeaG6GwJVCLXavocVfpPb7wXAKLhhAVKi2ZqrJDvKfAzh9PatJc3oac1mSVqE",
  "key4": "2uwKPY4udQaeDFBegX636jRnU1cf8nyniB4hEJzK75NEacoHrTFKdkNdyLTVPpUL36mkdyAqqLmfVfB9VgcnAzrC",
  "key5": "4X3c4G2v1BcuTyJJmiorr9Zx1c6WrgUnLjbxZTy1SMjwViyEeTSWnfkKiEJZrf2m7gMDnPhQYhTSCfhoshDeyjGX",
  "key6": "3Waegb7hkBK2HZzAjwX5sVQg3BEEy9kk7RxyFuKerhDBsfdd6UxhxKAXsPFD4tdhFWYLPPHSmHFQwcst8yWPhxu1",
  "key7": "54MN8fRfjKJq6k3zbZD1SYD9bg4WGHWNYRngvugdZ32TZ4L8yxZdFomAL7n1ezD9apukNCujfa2m18Qw3UtmkQKy",
  "key8": "2zchVDygadwnk63YAs8vDXoLjxhzV988gG3pcRDL3xsAE1VH8jhFngRBmMA4hHE4J3G8jyKNvjis69Lcj4yU1LWW",
  "key9": "4xgihDGhEXAoUjJ5WPwX4LCZafTF2ybhV2mHPLqhsL9TQrBBBafPBt7W3pUes8MCjvVq233kKbsp2jSrYyYnuRMm",
  "key10": "5uP7knH7qxAHP6BVLdoFqZNdKHfeeTVEcKeJcMscpi8gjMafzDZhFW9XGHgBw9QKvsL7uySMqEAsgpE5NBftcEVE",
  "key11": "Wj4i3TrpkEhw61S1amvc3Vpnx5FTZ39oXiuRfqzPukBM2ir3qNL61NRHrybCTnr1cTcxn453dmXP51WSCzH2BmZ",
  "key12": "xN5A2pDPV1TvH2tBgrr6xNpuZtKXX6prnmUb4eQ4wDc19Hssva7uc72eZwpk4iYVSmP3ppzb6zhTh352rB4zkmw",
  "key13": "64pYvuVXHMrmubN9eMVCe7NUnzMbK5t6soa8bVFwAvCHECQs3mKWaQkPqBZ2zAsWrEBXjBsdECyJGjxjhumzHTFe",
  "key14": "4b9MhNSYCLT8KV7rKYvyx1ToWyrof7ZLvF51Xa4c8tTVRDqpwMMJeg5FpWRmwMkXuUSNfYsY6VfDXCZKuJkQ5NXW",
  "key15": "ZtnPjSfZqk3JepezXoBDfprnZVbCYgpLtTvtPFQUCDGuUzc4eMQDZe5fVMviq6m4uiLfq5wgs5EKLgN3rYbsgDn",
  "key16": "5tFgqbidNoUdhhLuhw5HKTafK8FWrCYBdMJpxsPa34pa3iErxhi8J9bhJcjPytbuVX4XJFXpqLggztfvAxzBjr74",
  "key17": "2pnNynqCRfBFrbVaB6HCtB8rdopppv8YgsG1UAXa52GsSVYXM39ekhaSvLrEYqUiWRsj39NFQHpJ5wX3g9Frsu19",
  "key18": "43FJuiSU1VMM3dufXdKKFSXZpaKAvkHPc8E7wy2fEChCBRnaF9Sw2J8FYqQBroZSHXcQmQ2T7QqAL5kySDwjf1ug",
  "key19": "Fi1X4B2zECcd4PohjARJjdZafY4SBFX5zTWhVnohfMWnj8AdTo3zJdv2gWBdSzoBQ3mxuttHnRKrMiPTLg14qbf",
  "key20": "3sND9Pg3FRKrTDscnCjXDwEnopba8kLdskCBrKuo7zgp6a5DWBu8ceDdsMwxDDJ8F7Zmo7zBKhtw9cwoxd1VRTRD",
  "key21": "pt82dDBoKsudwNk9YzNuqYr1rca8rBtAwyHksWr7CsM2WcwA8S6qbEqfNhxdpiLXCevuNXXWmpyj4qpngbggLKm",
  "key22": "5mw7bLCmSjhee5Tv83WL1QygY8MtHAS8yei6wmQgMHSVfsbWRuUuvrZAXX9Gj4R8HDzWKgLCELq5t3XCaLtmYDKK",
  "key23": "4ZMdoVyo8YhQkWvCchvjpkdtNf6HPoztJ2i3G14PiG8p7T4scr1Qo3DyKVGnwndDPLKPQta6bkijGmsPiaKRGntU",
  "key24": "8YjekCV4Z6wFHPRXLWuowPexvKybxNiZm3KRQY7ENYkURD3gXnj7kprnZ3dn8f16uskMDCU8gu5DiBk1zmMkjat",
  "key25": "3EA8kysM7tt7KouF8LpBuB38Vz6ep9a3mqgUPCyjc9ewq8VquVN6GaAGFpUEcv85QGg6jy6rdvstBQybgAha4Ggb",
  "key26": "4fTXiSTLtgFD9Swps4SaPsNrZjfNTPhDNr1L6J3krTVCMUuYGaV2GMx6tvHU64Xg7ALAZs8bMe8YAhCyxiXMv8zf",
  "key27": "24jwyYmgXsDzeDPK2eKKXQaxndtVoQdbWfGyiPTTWaEktv1zTxdLWK661XSSKTET2HYMAyoAMj7MhD1mje5ZHK3A",
  "key28": "5hmNVFkUSEaLYfXRorCGwGK5n34F42HRxjyzwHD4ipTBJ7KiYQFLYsQubsECuiL3HxE4WNecfQcGCRbXWdhvZcfu",
  "key29": "63tEnEoqucCPfEvpE5VjWESSZHnu2jCq4ci1ANMm4FvbjNg1Df3YqrCuqCmE7i2vAANupZ2mz1q1wNNvgZjVVJrA"
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
