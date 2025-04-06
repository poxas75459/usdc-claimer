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
    "43Bh47cXdHx7HbFAmqCMRaAkHWd4GjZP94YBxKX1TxnXyVM7CrXDxAhTNuv8mLFfdKNUbEjhG9eenkJRajBRWpV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BCvZVLtzYuThbzYydKz8TL1ccXc4ATunDNfwzL6TxEqGPuAP3D5HUBuzv3ozg4Dp971L96ijuzi8qq33qLpTLAR",
  "key1": "67SHCZVM48bXCR9Q87EMocwTVr7yZk26yn8hvfLpjPhWCVeikbc4hh9veS7h4AawUr3r3XVtiXi8duuBwRs1aYY9",
  "key2": "4NZrFt1EqiJix9FxVPZmX7Jou7qkhQapnyLu3PqoofFgPpbe32di9qAxNXe4NytmGRnCesRYdCyeQ7Gyva39gj7t",
  "key3": "3tNK5LUUYLyPcygsqveFAFBXEsaU3ifam2dkvwUmFS7tDXmZQEfrm4JgK3ZouhgtN99fzXiYa2gBELcCvE2Kw8Yr",
  "key4": "g2Z8k9bmTcp2QqYnfWmB9SG8G9GUHUJnWz1aceGXmeud3VzGPPvgnXYJoDg7uiDQRw9eC9jRsapwTH6H1oeEqB9",
  "key5": "Qsem6TFfkcNnCcjQ6s6WE8JmjgGwkZ6Q4WrM7r75VmvMTnuXqn9NTsJztBDPQs8yh1UNUXi5rnW7fAUKeHCd332",
  "key6": "6tm4UAFMKgXyNv8MV7e69oAK7YthxViZZbSxEkvDx8YYWt8ppXzq4YgHU7p8Dq8iux6uGbNx3TRYKT2XuE1UZBL",
  "key7": "5m6Ec6KJ7kpyZiFvqjLENJZrpiq9BG9gRztjjucbKfekD9gcTm2TTFiDKg6AfuqQH8hcSkoPcKJTjBTunCn47Hd",
  "key8": "5TF64eVt88WuZcF7456A7Nrypewy5dPmtT2SnGU4iSdnFLmHFQKLMbJsekNW8eeo8URL63rHMRUycc6X5NZABX3x",
  "key9": "5vfsZ6fEFXKUs27Wrhoq2naRitMQQM6ARYt7btkirxA5v8XMjcADQwgzzrBEwom1GCx1dSXUC24LPeTfbMxWaAK2",
  "key10": "24pHBspHdStTngUQv43Z4uoZjkhVqcmAREZ6sbvc2cyLhJsCKcW9WybejJdKLW3FsWGmpv1xfAEdq82zQ1zQGgVH",
  "key11": "67QbKYAFLDdF3LC7xnunpmr26Q7Z4h2fomkkKRDRHUX3ojUT6KtX8T3Ng1RTWFpWMgTjTdrw7xFzJ4TDvHUCWrWE",
  "key12": "H6Gfx4EbU733X9Kpg4NZ8YY6P84QbbDfjEmDNy4XSbpoQTUgAvipDXLRHmLVfxMpDRn2aWUQLSeTGeCvUDtQo3v",
  "key13": "4vDYSPoYe2GeG16Hfrx68JzrvjiRFCPFmmFsnWGF23ToDHAVUuBNdJNwBAab4x6Y8n9QTVumsFE3xTu1pjjG1sk8",
  "key14": "Ywtv3LGLwJxVxNT6hpGcLb7mJo5GQaZRScAoFSCS2oh9SPqV1a9Yx22S3fJezg9mUsKpcYxvQy37UR2yfNPb6ro",
  "key15": "4c3YkfpQxGVX1oLgDw9gv3DF5iCu2Nr63BWhrQ1jrakKw5pDLwrpeDqq4U6Xoo4VboHWnp4kbHkM9ocsguP683hx",
  "key16": "59aPMTtV39uDcai1PHa45H2ReFRG4VbcJRHRBb9kqPsRLJEr765HgPjgSEuB3vnbmJJjuJn7amZDDpncdjb9FnWW",
  "key17": "5VctKdZouwupZ3YR3FriECi7ecgSbMsLxeJmg9kK6obeDsthG1autM57hCMoNYpYnAyH4HnDvuZxwf1cjKUKyDF4",
  "key18": "5axVVMtM2weB7pLc3W1Wp8yuu8UrVHFpuZrMwCpt413C2Mg2BqyX6AUxJ8Jty9ivTuDrst3uca8kB74v3yRmRQsp",
  "key19": "zVQT9BgPwupF4b8M4U2wZfotVncsk8WhUiFA5FqzUvRhPqDZ3ehMskYMUpwbb6QSrsvLsJeLpNoEeW9282nrp1Z",
  "key20": "9hLjziQZRBccqyXDT3Re1RgoPyqPa8PZQJchu662DUAVQ4HxCGfcXuSYXM3e7LcWRziSHSMU2866tTRA5LgEbSP",
  "key21": "3H4ek2r83XEzxbVCHWann4HeTe24UjJcL1fsvUUHPuENTgvNzN69XZ8CYRduAWX9Ubi3A8vo7ds8KFozPwuPBW5T",
  "key22": "4M91sMF5opzyX8nVoUwqnWMJNFXmpJfDYLmnTLLdULLVBV32Mv2ynaXAv5WQ6C6Ec7ZMbSSQpNY6CmzQbGQwCxzk",
  "key23": "3wieVa6aN1Hm6pKwVauuzLviNB8V4TUxMiXqqQdJGm6Qx1keeTFVhGLzf5LPgg3SY1NYrQfmoheRAAmPLQkeaUTx",
  "key24": "22PrCyFzPah2iibCoVDthEr53K3NuTf1xabTN2Y1qGZDy5qNGSUwdyKDG5Rcv9d5TxnaPpJZutGmsQmNxtyWK4Vx",
  "key25": "5Krg4kPdoo47N1oxaAYRLq8VKKNyfju8sMw8YtQeLFFvapFFZqFyZVJsmDvtGvEAM59cLWKqHi3wviAMEBQpqAb7"
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
