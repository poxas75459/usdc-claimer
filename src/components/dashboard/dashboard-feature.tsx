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
    "2vBEZaAyUBcb1fDR5XNrBbqpT2AqarNT9LoRAqkttAaSDaWHzUKLwAPAFkFsJbFbhFyx3oRcMjmEGEV11c1JZioy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43SuHtFYYKtby5Z16us1eaxj3SPSkcBYRCnwKBvjRynufYx9NchGFpk3WqjsBKgfryGpcSma4X5Pn3fZVUTPYVzP",
  "key1": "sbh1sW3GACi3ZKdYETHboxr79Dymv9633EjAw8J1x3B3Fub6uU4sXT2ebWgujK2TeN5KduD6L5S7CtkP4teaukF",
  "key2": "61nYFmTAo5wCoRYx4LCv2v3oiZXgMgBVEPP25vUJwBmhkMTdCkWo7LkADbpZhUiLbDPw8MZynqpwPRdv31zRVhZE",
  "key3": "5hHzaQKeGMp5egR5cDEgs7hd3Krve1cUyGsfwbREB8evms3kKPxBJ4P5HWcj5vs7maAMZkisRfLj6ziBQJeBQwg2",
  "key4": "4uFFVGawGstxzmffcxcmR6QDuLnirUuVhZ3cZxZPEnxpaUnhond7qBusjSGyz72xp7amR8nsj5kzc5TWtMcKSrRJ",
  "key5": "4JRcUViBdiKs4WatCFLzBaj6KBBmKNQiCvpGg5XbtFtFPPCH9qhH6Yy5N3Vk9d3qo4FyX6UZNMCmY1gFz3w2gKrc",
  "key6": "2szQeynNACwQD8NCZUufCSiy4QcAa1M4MBu4wrfMVTMxXrmfAmdiLSTFRhLzTN9Uzzf5YsXFJyEZeMajxdeZgJhK",
  "key7": "5futAdrjDH4BFobTRZHQsh6YWgJ9yiAhShZaJyTxCaFBm5vEc4KJHc2GjECrXVAdebpZYC9ArUcLi3AJaGx2fRZT",
  "key8": "1PEL4Vh7kd24WYqCUEcJiPb7pp37887wHWYg2PJyzCGx9WhdbGFiRKYpakYTQ2BUTE6iPzmP3cQadPJRxGnXadK",
  "key9": "3jWt1VvUByeDME54D1G5wEmj4c6Y6hzPtQLyG2rZV1WmadG6xaUh3ofSGEVXHHXD7He2enzS4koCo6jFmYrW1pZ2",
  "key10": "4K3uU8DeKWC3kvLEaHnDEoG6w9AH5Dne9AAGLz4B6BMXEi9kfmMEhwZ4dp3ySnS9emHsCwPHDU2wGh1GR9eUSEo7",
  "key11": "3NAvrrXjvLJnheC553oR8M23cJgJ98LUFhMpP8wGKdGEcLZCyoqF1cEpSnK8tdpSTWLpjrfMaMPQ2tNGGqQ2jVmu",
  "key12": "4LnVbZhoKWNzsKGwov6jUnKuZ73wSccFZMgmcGtFkgqfuAUaL2qr5vHgQzsgLCMRsFpxUiTm3ytq6rYJ32PHGWLF",
  "key13": "2QhUkmySs51naD7AZ2RZExDtMF27iT9qb6Jab16dh5UMaWQ3UFfRXarr81hC93UCQBpXtoVKwSEjxy7oCUSBNUHG",
  "key14": "4YycHoV5gVTEKfrccDrPSPJBSqE6kyJgWsLJ1b6JSYPaP6HCV4tAVTEhmjMRrAdeBd4buLhYcS66PnEqqVFWUeo3",
  "key15": "2gQNzZAAKnAHxMUjvfdDQYSWDMY53V9tHRRPuSyymgewWh5Wa85zSnGj4WxS6jCB4aNYs6pAsDXL9w9cXkMkQ5Lm",
  "key16": "5yxZyKrLFfFopVgXmcWtDyBa6CRe8md5rh8RThRfpAfXif5AG95CaZLxKGT9oRoJFTzYLofnUHMTCkerAfDKsb1X",
  "key17": "5yjkUH6Zi4rLE7DY1DTTWYrKGXSymPJfSyks9Nu8gPWCqHQREtk8pzJJ1AJHoHSaKMowznasn2zEuMK4jRHdrQ3T",
  "key18": "5FVg41XpMYaCD8Vbsj5xCZzikusFFmrtUu4SpvcFmwUrrJ6Ws1qc4hWa2r2kBfPGTdCooP8DzxFn3sWCB8Pe69VU",
  "key19": "4Xrbvsod6aP5Dd3YAYP8x9YHLyaT2F4o4md6tAMGgVr4TyTgatNJ2uDsqBkpU9wWZz6E3rVcJsXhhaPqLv5wjFvB",
  "key20": "5qo4tFeTVzUqZE38M7TSMDPNBjfNHsXpuKZk9FRKxM9ULo7AceuBk4n3X2HDW4JGKdUgrURV2oTV7JTwDU7BjHk4",
  "key21": "3ogU1JvbqppaGzs8ftkZYfBw9oifTXMrYXmmuuPmogX8UNJ37EnYtyyeEC3NhdGMbJ17gxUSmyQzAic3jd37LkVJ",
  "key22": "59qsdiBWzKJQSC9WXV3tvSk5Jp71oGkTnbjTe6SjA927yMs41eX3dNr522HnaXg6gUJ4Kv6LDbyUAYd7KAX5wo32",
  "key23": "34tyXeonFoyX2h5fnsXUss8BYaA7g5k1Tmm98WdrUzHeeLuuATGUnfpLZ9u4ycqzYFn72RoZqVmXe5XwpvLzfbZ3",
  "key24": "3iBL49qYB3fJxZSySHG3iPySkHxSzqim1idYFMHezdk9VMs6mMcbdB3cKwRpbyhWzr3GW75UAVjJJz6JS1hAPzPm",
  "key25": "2tPgAjHHavomL7yTuwcp4MvYihk4oKVyWNzJoN15Y3hU7jKNB1KYdPiww3x7yZ2BcDK1zNPSxRMBuikYp8rFvsnH",
  "key26": "52JDGNmbx7kkAAoQHmpdgV4jsMPPFTTq3y6uYKW53MfRGJ6PmC62HFKvumhB8Xb85mNuYdAYSc1Rs2DmZEnt42XD"
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
