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
    "4oQMGNnkjnxktB9BkwHgMeXz1Qt2VKoQKMsjJfqrjai4LbJTnPLAervK2r9bHAW27NQPtphmWfUq4smCSXoS4oMJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vp4BJZRMjvE8jDhaWxdTU8hypm6k2yBLM3TZUEHFMGVJEDX2bnNQy1sHhP9MUuW9j1MrwMTsa8RwvhwUJptF1v2",
  "key1": "3PEGr5QwCGkv4G2bM8QTu9h1vST6ZKRSEZBigr1QFjwN88kfJyvdDRTr3cQpTmwyST3SZKi98UFjLBMRH2C1SC4h",
  "key2": "UYLWBJtyfrcrNhNNzyCeGtn14dLJLV1ey4c6zuAvKnDod3agwEuSfWrv9Gv5codJZDxygzUwRAvL5177jDnVGvX",
  "key3": "SSXeqEHoMbejTjh55wy1wriw5FK8yRCCuP7r4Qs84fVH3dao2nrbAfkGTZujLM6kmMhzNDxDj9Ze8rkbTMzz4EW",
  "key4": "2V7jwdKrLzfECGanD2pc3c12AktrpTw781BzAcpXXsEnFJFfxniDPfQQ3ELrAZBoQYWHSC3VoHbFwwAQZCrD5Xnj",
  "key5": "51RqSUp5utVxtd2mzvhkcsdLJDHsc8z4WZjZnPbPkLkHQ4CuXwEEjTAGmpFZ8PY4zzmdLR45p4oQb6PsVjbWscbz",
  "key6": "62HSw42LwzGLqH6nPtWW8pVDk59sakMQzJSHsKprfKi2dRVzx7KZberaPA1U5veExZmKmtSn2HG5wk9uSddQwQoW",
  "key7": "2e5a1DisnLFAsEevu9UhKigk11yWMLut5Pjzbrna6hxy7jd76nBBYsd5HZQjTTJEhvJXS1czCgS1A1i4judEdd4V",
  "key8": "3CfxBbcbLv2e2GhfhtKJhLk9fTjBkuL12quNZ9tDk1ChZnfo8vBhUyqNMWgJCghL3dq7cKX1Z6ydty6SUM6TSuUp",
  "key9": "5LcJW4yidLLmUT7qwSjyKJDgA1e5rzE7SXH6L8tBtcE8H3GbM2CaoikNBNsPwXxm6kTu1ArnvdCfF5GauJVgEYFD",
  "key10": "24c5XsdB4AZpw4oFjrWazrHTyWrnBgoKuHBhNaPcHuzvp6vQGk3qPNUr65mwFx2YtCZgCLVvSBwtpsbEg6KLh7GQ",
  "key11": "5xWF2dB7RUhiv1QoGwkCp2XuuuW7hbWcYcHnB5hoFHTMyTCQM1B5dXLnQaN32DxhD2qUcfGTZUo2Tu9vzS58Smge",
  "key12": "3xQc2tS16zzzrjSPeYLvgCDrRHgkwNWeHa3FZKaGEXN9oMC1GYXSzvKDmm8r3wL1TmwBpdNrQkT1b5jdfscQdQ1r",
  "key13": "49RCDAUC7y49ygVoHCJgbxpfWy3WteKoaAgxGHC7ppRqvFfxHKHnxRnHLprE7deEhqTyp4DiDre2bgdHjWjjCg6d",
  "key14": "4oQMKFgr8cCiVwoWqkNKpEkc3Z1LL7v6KhkLk4U8qrGSEQxQty7jBjAbA5FU2TQWJANaZs9poXqFVs8J4iZHq7BJ",
  "key15": "52Fz9uPso1bNDfVzpKt6PY3PZcU8yum7SmcoSZbHfLbKecKg1epV6e8AYCHjq5wueCTn8ktVUetKzv21CqNUujoQ",
  "key16": "3x9VcHtjxTPRC9e4h1vyAC7xectXW1PShoU5zz7qZPJam5VrM98VYQcTz5bmMWFsw5MQoo7KNDSRKzo1mJezHHGY",
  "key17": "39JaxNDSwwTTcBMvhDzQxb3UYQutzs628nZ9si3aaronUx1zDvVsYheatABYqHEJf3ycWve5zAp2McwJkHNVuupo",
  "key18": "5AWn7medxi7YggptMks6KL4NS66RB7Z71ZHHRe9fAtn55qFTMs25MFdxPdH2Mptrk296dA2RJGycyC6YKPuapBSH",
  "key19": "55hkw2Ve3GTrY9ZSzB5TK9CTBDNnLYhQ8eqjsipw3mknWpn3GK1HEWb9JgmoxpgffhR9buTnFrmL6W463tk45Kon",
  "key20": "3GQuog5YgaFegLakXBZRzhe7Fzte9VExQb8mEKGuevzBwmY31cz1TRm5uvuVzUKwxaETz4hgFSBSzWKP1tzhmru6",
  "key21": "4LzQgPjo8YeqYc3kAUGYHksYDNbXWjgfzcbufNpt5Q53MsJ5j6AUdQinXKS7hecRnS9vuXk47Me9rwzT1AuVSyFV",
  "key22": "5Am7snqiAHDGGw77xw11KFSJGNKqd8L6dsojf3xRLxAsZEWB3gv2jHVGdhhdbMR4HRw7JY4ANEQJAaYBn6tp2gkM",
  "key23": "uaGsDetTpCvZfm76eis8FpLpu6SvDv7AKdSKfYNpR9raqo4Coh9s4W9ue7nNXcZ8EAGw1kKDfwQNCk7vFfkxng5",
  "key24": "2AdFxsBL56CyFGSnKpxNB6A9Cmas77zKyiA5mXAZ9GLrTzLvicWFKtR2iq8rPSwBJqCiEwTsg3wA1K9az7g3JhLN",
  "key25": "2UZbbLBE8nxZbRwq5wwQsUWZmbT5FKBATmi5hPrwDRT5Hr8mfCHr81Le3CH8amVvm6zUvBnbFNWRiBkmcQG2XtNE",
  "key26": "5X7z5ymBkZesRHWVW6Nh5gu8a87xyyDvv7apZjJpSDhozg6ZN1QuPsa8heJx1aCsavRE2dUePJro4DFFsv6ET21k",
  "key27": "5vvQgvDXCkMc1mWR9oEqR6GcnHdCrbfL2oknqCTDRZ3VT34sZyK3HMVdtMz1sjx7si98V2kh4BS3YokirmShQjvv",
  "key28": "3JwrUdxh3auMeQxFAMC6zSggy2nHvtvZF2Dwh5b7gakmMpxucgM2dowT8FZH7dCBocS8XGee9ui595tcwCNGb1eV",
  "key29": "3W6cW5S8k4UhQHTzEaDkkF95itiErhZfmSZCcUt1fqcVWXUTBG2t51T3ahCorADdWUsYtWaMcBuwT1fvFfUMTmvV",
  "key30": "2XHuKHXFFQDJ8Qssf21rrQ6V7g5tFwGE5xUHRt11e5TPYjE1kutKZZhgccjaUm1KVvfEMqmdHLbCiHCqvoHarr1Q",
  "key31": "9mqw1D34YJ59cYDwf7jt3ugih18wcu24VBs4AY6pMv6CpYjo3SiMMonUaLtcMWEhj7cXcNCnGUbyAdLPZrYTVP9"
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
