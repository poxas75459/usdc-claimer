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
    "2Np2dXFWe9mSGLiFX4XYQ6XQS3nwieGurWusBrxLJm5rYHCCNVv4sKdZ34PdVXnubCi652w8NBXKtv1DjZEEgWDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M5vCwBCyotG524TBXSRPJUCda6ZBCU2oCr72cC5hqTifVUsy27ZUx5DNRJBrDogePo1bisE81jFynXizMSPD5Nq",
  "key1": "3zQnCG7c7GnvXCpWKKM7BnhxW2iMd1mZmS9AokDegtpZzAgnUXoAZ69j1Vuzkw6DG3ZwdYaBH6hghxVXnTsEQ5R4",
  "key2": "4zxyzsB8PtdgjewTDVYhLdz9d5xu6Tos7d8PVSNaxhKo6H69qLKJjfUHiDrAtZNGUFPmjvGMiZQ7R51VZKWWKMMh",
  "key3": "4Nuc8ix6tyoPDZBFVjBsJ9uZF3xABvKc6THSfNKN1ev8e9Je7ixd4pccmcXUFiBbu93quNGaDHXrPFDSNWyBdqtx",
  "key4": "pNrveArbfC9FBZgy9Gq6PmMyfAn7ea5xGBYGnQwzyN9K616vWyWGEz5Gx1Mz24ghVdrShQegNE5jLgNspjEJ7WU",
  "key5": "4EzE3A6McSkWmvSadEm5YxoV2WdD8LZr5ipKwjp6PAk9fmExxc1XSrBS6BpjZf46B351jv8qwks529FQa81KXCFy",
  "key6": "3tys1195T4NE2zG8BuG5ktpkRuSc1oc8iZ8he5h57XLJ2FQS4JReu6DWtFfmx2b1cwsHW6KVPiRouFDNqT1W7Hz5",
  "key7": "4FGy1uARFT5Bnjv3siD27mHVUtvCj1QdFqdHc7yJApTPKaAUYBsLLDd6akfbTLAa8jM2uVS23ociNifffihWB5XT",
  "key8": "5kLFJiL2vkvM2esqEvxV9x9tjQN8z1XSSgfPngKeZGuVNZgq7fJ4JVCGvjCYwPwUBDBVtvRL8jnydvfXnv77nVrW",
  "key9": "2iQnDT3WNs7hqkXjHZNCkLyyQLzdEEVx5ZSLy3JSX53647gms1SboEW7EJsVeMYKwEUGShL3E9ZLzipk9AH9f4Qd",
  "key10": "4EXeSNAoFhbDknJot9ia75aDxyKiP7T2tLcBZtNDah52vHBcgHyRYtu4kh6zPGnMcD8hyhberwUmsL4i7n9KAej6",
  "key11": "4PSM8osmogJekqhF1f6ix6eXrh83sWhx6KXwNaqD72BC4wUkTns4G2nVdFetouSRp2UgLzeveeoVRNE7MChqdMhD",
  "key12": "2WyDoMKzJhQ4K7hCT8eUwJWdNgxNu5a2C3bPNihWN7gfU5njt8s86QxWK3aP9RfvcJ1akQeDbHxC1mzv6jXp8FPH",
  "key13": "24uSScuqz44zDPpKS6F4o52bfHE6JNfgV993Vv3SpcQrd4ZCMWnGpjwcZcs2knAnMknRoiuvqGp6eo6GrbXy5ZAB",
  "key14": "3ZsLhvCrDe5259ezxuzV2p8auSyzPWbPvQboiusAiynhcysg4NqstVz1F7Zb5E9ZGxrvtucxNBmSg8TseF7tPpZQ",
  "key15": "yp85WLHtCe6yPjc7HJZvzJR27SLFzWMawSoLio1cGDHzpkzDTut9wR7Br2gUapEWBYkVYpHtBwYZ4p1pTaw2Zy4",
  "key16": "57bZLnRCnjeoe6yAcor8jrz88EYyMefUAQjjk1KnVkcLxX6eYNpLhqpRartra2NrBgU7iTSwkQje1z9txCQKVa8U",
  "key17": "3dAX4cthke1UQTckA7mvRJjm9RZkEdCqPz6t46PRtWkfFpxPmpcdZ7b2JLgpYnMQXa4iEVzxrxknwpGbATB68a5W",
  "key18": "33VFjDvuriLYpVD1pxTNX5p4aeSTDFDxdY91azUD4BbSawZKbbMKKxML64tYUURVcH6kEXxTPdTDuprEpF8VWCon",
  "key19": "5dQU8HFh1rhjUCKmJuxN15rvenboPDW3yKzDB4esEqk3uDX5eZcUxfjcEezuwZx7r22JFEiQ4J1TeT4aN2v2jHiF",
  "key20": "4JnxoTe3V7TanfS9pRjdoQm4n8XD5PaR3c1VTFw7hyGmn9vvfuXuFkcMz9LrGTjtJkD9ZhjqG6Qbj4NLsxtzx73G",
  "key21": "5EFgWAqzseNu4gzBAaxZeRqCdZJkVD3UACfrS6Rdbuwxi8qZvjDzEvnHL58aheHc7sS4jbDMVR2S71o6qEm2okK7",
  "key22": "41WnBDEFtbnsyNaBmCRTEy7zKhvJmFxVxiugPgFYXDZXLGt8nvrykEjCbdGfDjJbqi9VXLVNdQ98LfGuUJog1wwR",
  "key23": "2YMdPnvWMtgX3xhD62VyU64uwP5qNes8Wgy5nEECGNjnS9tLQGtswdvwef8gfeeyQ4rpX7ZXcXsJeYccTspmdBaW",
  "key24": "2vckkpnFiRSx2Qb26Pb3WQZ4kcB6GhF4Wi3KSG9RoZ3ZuxQQBGZqMfyakLuqqp3A4G5LjHK44QrZyf3LVr19goRp",
  "key25": "tju3UVfBrENa79NB2zGM9o2ehgteUFjScoWwcHFqEGSqE5nwiCJYds7iQw2yNDerNH6eZWzFVDuxkzhUwSqxBqF",
  "key26": "5HbiZ7royvCFfpNtMu1fX8j7BFuCXnDdLKA84KGms37U5NKCZqCc47iGCS5aJNJvm8JcUtvfyuSE3qjg6hYMn6jP",
  "key27": "PHZmdjFohqyE2Ys8uCP2sr9mqQyWN2HqkvgmrQshEiwDEn7wcNjwkMUCuP1LUJXSAfhu95pK1Cfnp5UrWX3pf4x",
  "key28": "2Gp69Q5NpZqMGm9mJEAmroQDSFieL8YWSnQHwFKL2TJWWiemPiAmMCYW8ptxEjjhdVFgeUWcjiV7wbxHMYQkorm2",
  "key29": "3tRdqAQhoFTdV4F2hEar7w2hfKjWjgfshfzecG5a4FVKnXoa3fpTCuk46worDxxWQW78MXZhajayEonwUxUujPQm",
  "key30": "5JshwvvQifz8p2X1aZEzQYah2Yph3o2S16hqYkpioJo5BhcLQsCrZVZes374eosp5bDG7yQqQMkPt3joFfgJibaY",
  "key31": "2GwvauuLYbddWwa1qQW8wLrTAd5xYRwP83BoY2gqaPaf7BC3qAykFs6dErmoriqDaG3DTXDt22R8xKrETGDAuHvb",
  "key32": "5XMPWsNobacz5tJB6ikVoPjCmcubsgtdpYopVYWiDRqg5RiqBJ1GnzM94X3xR2BzQ3Fdwds9AKqGj1MFTWtSUA3e"
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
