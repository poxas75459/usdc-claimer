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
    "5WSaK5ifGMveJgvATsaHJgvaciDkgtPdM9tcRXYCeW7G3XhLVo5FVxkAsKBPQp49ZABzd2jjo7d3hdf4r5RYAenM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hskQo4whGRXn5c6mSwM2fa3Wm5JNta1QxLDiHD7EVjk17LxfMQjPwFPeVuqFLH3PBXmxc5F3M5b2QTbJEm2zRKa",
  "key1": "3mhyrkoCG9ju9jPNpYbwcW96tBqpJUcP29mBa8n77WU294YsvpGBCDRwstWP9P1ECXtL1enZcRsj8i9nmMnaqgbm",
  "key2": "ahz1LNQzSwPABAnpC7VB9VjrB4uANTLmXbwdmFaHH61yQe7xcmAHwduiZffm52sEv7kSeg2Sh3BdikwUq4odUcp",
  "key3": "5R5XdiiVgRSaVQWDhDcTV23ZYa7u2iPuewKFS2rxHHXgEBXJSyFtUxE6QtEexgvhRqznWb9FRy7bW91uzb4CdD7B",
  "key4": "2AiNBN28Lj2XNRsjgvo7LGosRfLQ6ugi4JZZ4JJSKSfXeaTJ9bmFr4CJPWTyNsrnpaUUos2N2wnLiuMLk38rHc2g",
  "key5": "4eTqY4CGKpxLJruxjuwRbQzcL5npppMEjXfBK1VEs5HyxPLMUehjucA1gNMsD1fbrL1udVzNwmYyg93T3v9ibmGJ",
  "key6": "5bipC3Gs1L72gmDmDJFcfwarSt6jLAHYHpbjPsFn1KMuRsVAwYnT7Hhhxaf7RHpResKyrQkqppWHsb37RBRBznjA",
  "key7": "4p7A3XXrtMBDp1rx2Z9SyyejHBMniGJiE6PEjyhJfVfGCpHeJne8q4eDxi5q2it9THsSRKNSBCaUh1hpjnGt3Ff2",
  "key8": "2mH2f727cEVfbbwASgCJw6V8HPrxErVsCsQQKcvYtoZCiDe7DAC8FT6BtRu4HkRJfVPf7RLfdVaRGijtxVdDpsRa",
  "key9": "3hCnsQgdt1KCpNPLZ83Puq2heTgVDSrC4AS897gucfad6YkjsvwMiqeupKkup5fZmJMteApjGLciGKFq8xKAiBV6",
  "key10": "9uc2y778pGvYVsjkrBmw8BjDMrkRAKrDodQoftGnwKvv122ZKkJaZBNb9UdAVNkq8ijV1MpZCjgf6iFpdQ4mo8v",
  "key11": "2rYmcr8A4Jar4Rd3LHaDMf2ayYCxQH8pLJ7LyGEgHFbmmC8LmPsaRHzT4W6rwwYT9DSJnqy7LCvF5mDLmvHp4aiV",
  "key12": "5VLPaDm12poHS3SuGfE211tZzYxgaW94ssf3QsXWjv711EvchcTQ2yk4r5GkTapPqBcDuzWHQUHPg1ink3D2Ygxh",
  "key13": "5D7m4KEaWbpETpxoJ9GefeRcUurJMaZjKXd6MmUtHYXxJgJHR5jaMBrdCL4gqmW7JgVSpoYBXU4rxzySGynYetYR",
  "key14": "5wW6ym6uEySKncxy8tRn9Yt3J5ALCPUHvzqipkWxXxYdUy6LQztygh3iCuX4EFc2iLzhVPPETHZ9J1sgU2JydxnX",
  "key15": "boQHidbbikiSpDfJDXSX1EK95AFXCuCtVCfhT1EoPFe4QFeT5fMbZxUMXkDCDCtdi8DNSPGKkQoigYNhjAkT8bX",
  "key16": "1dPE5G1VNVB5MpU19W85xPbd6UzXnPr73qSveYSQ87fua1xNwNN9vLuNfZEWvJzBLmX35Rcu3iLpAvkwba8CmeU",
  "key17": "2be9sQc5suLw4bPBu284RQ53bRauVA3uvyEpf7dtYj6tcqM81EMBEXsyfweNEc6GH5BwnvpQtA4TyKyJDzzpSph7",
  "key18": "5S6ThgZyx3LLMWhfakybkx63GyFsbDH3h5Brn6TPm3mFoNVj8zSmzfEJcVoa9FEYQSkE3syFdPLmF4fEKLUjuWnH",
  "key19": "25kVaWDp1yCqNnUUV6M3VYHCDeNxHCp9YRYW1QGjaXYpM2roZByXWSBBZM5mUv2MY6vScyHRMfAsfz9Xm8gd6dfe",
  "key20": "BL3wGKunPPmpKXq3Dhaxzf7KuH222XLgjA5XaTDbAvsM8DRqfCUYWsrSWEYEAnVS9oAFiUPC9PhtywGX1gPiJf6",
  "key21": "5t2uNGT8MJMEcf7SZ4n97UPPozuXxXWER7t6LCTUcNNVNMSMeWxWN3UYy9PH6UHvM7dAJ7ur27jmLTpkoe9AziJH",
  "key22": "3osonSg5iRyT1ZSYqHfPuFKsRroBbmqmAFrhKbLpWSdqYGP56RgDXNWhZXdF2UsrXJgVwxK67yLD4o58wEek5JWn",
  "key23": "5DHHgYCRMsLtuefHjsXXPPadigD6KUPW2BmgksE8GRwZYdrbo4wzrLfxy2XFWyN1n7q6Yjo9Jr4gwfiYqkhuprCh",
  "key24": "5Yv5twW7DH6z1t4NMkxxrnrMNGDnmfhxbgJUa6eygXEp3VfTg5ebyq9ZrKrFt2gRA2hyoXa4aiUY5CTL8fpVgYbc",
  "key25": "4ufa7UtxK3LgTGYampPpPzadc9q9Z4WGMWukLz2s32KDKroGEupQXPU4AkVBorsLHRHNrr49f9vAnFVYgxk2UVV4",
  "key26": "5c6TDZ1L1QXS8T4TUBRDKxW8SDM8sNDZhxLS5hdKUZLh17KdZpYkNWVYSoaN327VdQp65QiowLMNBQNXGt2JyTam",
  "key27": "3JDHs1vjgp7MYzrrqB6D2f7pnRVwaKUuBrz98TjqBb1HTZ1cKhSNdK1vihVvoM1m2Lf3ykBvG4LfA2zFP7yB4tA6"
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
