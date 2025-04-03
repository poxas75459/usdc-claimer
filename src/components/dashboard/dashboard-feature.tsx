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
    "5ddN2uJBgsRguemxvSt6ocsyquHhJ4Tux8Ag7q9K871rbhWGGL9zXFJmfg8WNtpMusSk2afQ7B9ikAezNT19kNZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G1BBtcBkCrmxT8TCzoNQCsPBjhrR5XDogECGg2q2iG3h8CeX5du8WuRJpn2v1WAYzi6bn8ZyjSkRYnTJGeCC6oH",
  "key1": "3tCkZLGUppywtAkWLS6sHGvRv2UNH1swesBCE7XwKJCbicuRGjQfjrUAQvyr5Hsuhy2GXhhqoqFv6kQjLXZwQgNe",
  "key2": "5DH7Cs51fLH13Mfg7DV8UUFGerGdKU3HE7KhQHZD2hkCmnLTChCcos3aatvdbg2oFzF2r1p7yJx8RSM3rg9AhK1w",
  "key3": "4oGnn7BPBuzJuaoWkQFoAkAxkxWzEQvFszd2ig25BQyUnuECjaCkDeuekNXqe9qvrw9Ae5KmcBRSPUYrcd7Gn6dr",
  "key4": "5ztiHPNN92CvoLkdL1PTfpuoM3tr8U2m6Hsd7Hg6HyKcsEQqhCbCYFqCYphk31aeCECQyv76bmMrn6QYQrX4BbJV",
  "key5": "2vVWKiyNjCx2Reu4QghX5gdsEY7g2WLEiw3Vc24m67gTaF9kJuFYdY1QRoUh9PrSDmmEfT7dVZZHLNDjSG9vg161",
  "key6": "2ibxXKzTccTBqfUymUacHPP36CoCtAU8burmddT8TTWUoVabh4SA34TUjXSN15FwYTMczHHYBaLtY9WxhiSyq8oV",
  "key7": "2N9bmAG955boTFt2JcbEjRnEcDaur5yBH66RnGsaS8HKv5HS4biv8G9iUGH4pBNGmQFFgjZNTy9dacMKEenHC8KH",
  "key8": "5FegqVyWAQhBW6ADhf8L92CMNrMB5VmydCe9asgQj8K52WiyT3PPzr1h26dZkkUUoJg6EnV7CUoduCfzSZqQ3Ypt",
  "key9": "2XN4E4RJzHkt7vqYfJHPjRXpZRSAoyhSC7FbQ8ymdZ24JP1U61zvVWb6YwPcxA1jrHTk2GfNjGUfGqUUyYPA6H2V",
  "key10": "63U9vEaxBUYPhEH4hoQhYmYHuBAc9FsnbmrnYajBhb6wrEShwGk4DEoChjp8sVphbv8ZEKGGGqH5Po7qxmTCbxNk",
  "key11": "2HTbrPqGS4hzJSAoxFxHfk8tjvDRm22XyjAcQdb2L656PLGfbmZNULt6Ez34Cf6iiXLLBN3C5Rh2kSEwSyYNLJC9",
  "key12": "3FRzXk3GxCAxnC5Wt6V9HjZrKtSiUyTFcFSYh8F6rTX8eiecWJF9DzeRjg8dT319nA41Jr6usFB2GQ3PrdrJRfcV",
  "key13": "5fmtT4zSye1VvS3urK8gPFCsYqFTmf6yrcR752aAEXSFaCbQATDJdgZ39XjUfwawY1JJNvxDNv1ij92zqNuCpThd",
  "key14": "7ebuogh8tWn4q4gGW5yQdAAvyyjqS2Q43RJcxvHqCxYqzRetqW2iNqcgePG7ZHghsM5Y3KTcp2CN9JibYebUCpR",
  "key15": "59VgN4fYQyyn7MuSKuHi9mzm4ytZKUppt8G4SmwBrzZfakXy4x2LSPCUSjbdqKSTkUwJsSZk1tubs1wEf26Q5xb5",
  "key16": "3qxESNAUjr5yvdaoD1ijysxsxuaiTwL2iJHDnW2gtef4ji3o91ecet8D3crFTEymCiXJJj2o6bELgF6BtH9tgsuv",
  "key17": "27KykRqQDHcZF8stpu5anQZEa2qepJiXjFomroeAUdzBdZAwtBuiNd66LcGHFyMAzEFdLCkogFyxiwXNEj6J1uF6",
  "key18": "2DsLvdpRRA3rhfutXwpzVTVRXzfAKR7DPcA2W86aEDQCAEi1J3aJfVAEr19hHYFaZJizCPo5zqZP5ADL3eAnH5Ps",
  "key19": "2vur924CUu8jVhfc9XRtphAMvm1t8BQ4XNir6ErpKbfFRU5nkvANcftzeXVksVHNzr8i7brtftVQK4dKcMpeWw6g",
  "key20": "5PFdMm2jzrPJL7RL14aiAMWynSvcTCkxrPZLJepvtZDa5eyWiMAq6bneFMWqhttJNCiuZXPBZnuWA4RmknheAcCJ",
  "key21": "2rgbGUeR8Sx6mQ4h1Waa2heb9zAbfz9ZW7hBE6mAjRUo55Y6vYab1r6PZpqZshDpNXmuXEBj1rhNKEQrpcsoPbzj",
  "key22": "43nsD25u4GjFm5N1vYQJLx6DoGWyEJHVRNojveC2jAm6FwipwBz95iR2ZgHQYKwHgnjyyMqqd5Q4KY4KwVLNSQPA",
  "key23": "2VMHf6XZESXA5GZfiMXrR2RjvDqSmxFw6qZd2fCHWRgqo96CmSNEbMVU5Lw3e1qAT1on9uFdUXRqksRN86HJuNBQ",
  "key24": "RAM5FEhvZVaa4xj8BR4Yig5PvaGVJyyUXvzqadRa9DVXNnjeUCZtzMEEDbNdCU1eGgpn1CrqLAUVFeJbZzDFdeD",
  "key25": "29nuj6vGuq7AyabRnrwa2gpvGTNfti5FRKj8HjDCnZm3B2tnAbxhSaxwm2PT63tvuc33Qo7Q5umGMQCZCJz4w7WU",
  "key26": "4DaJCm7PqZaPiMum8g2EJjJnJEqkmhvtdN7eghVqzQ9GJNn9e4zmCiXmcAc96fcqGeonuoFpUrUVePoCMasiDH7Q",
  "key27": "5byKL89rCGkx58MbJPk75RbTUe6cYkk4B48xDyg77WVZxUV4VrtPEUYQvk5zf6d6gBf7xxMoPxYrY65yo3TQca2v",
  "key28": "3DHbCiSLqi3wZETjKJv1d5gm9HoKESgn12YcxtwtNfDeGgKFpdPijatHXExmHSYGQkiFrWJRa9BhYcinoakZDoxS",
  "key29": "5iDk6mLV1VUhS4y8dP9dcpqVZMskKQRvtWWasFG5Jh7CjJ2kqsWbXBgTztTcixiRBXwuCWE5ejDjeWCap49znptC",
  "key30": "5WnVfz533gALJruZWnzPRmrTyGERYzijYpSTLeH1KQXFVniYb7UCLbqch6KsDETJbCcVXkKCwhjgQRZjpb9hGLX6",
  "key31": "5yVkBDbpz5KWWU5QrqW74Vutq4oG89WTG7bH1qPuM61Co6Mk4woNZ6cjqmorxo5pW4hX6rnrFC3dQkrb3jpASUq9"
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
