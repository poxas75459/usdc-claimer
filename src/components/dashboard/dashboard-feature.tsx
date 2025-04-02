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
    "33nW5dEsTxfewyh3ZoR1BFx55jNLTJeJNJ8We8x1GGEpi1kyUSCxgpeEYUxpGiemaqHpitUd8UsQ7NdeJYnpZkS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NZRPeun6vkPi7dXQmaCvM846Ep2vYLM62xkuiGLZTYbsfSYrM9G2fJJjW386fVvFh2xYFiHLVC8UJiWnpjZqymZ",
  "key1": "qWQsUiSdEoJSEfgdDtw7VAXDgUFocMKEkpVdeBGYC6GmhS6nvsXC6wiJUcJRV3gnZaFP1UW2LKBract9sUy2qzf",
  "key2": "5BYmxRrE4bw43zXYBxsF6QoAFNX4ajk2DsPjjJupRTQYgZ5oWManeJtSPJq8ftggLbdmrVPVG6RPqxZd53jJaQLw",
  "key3": "3mcoQKBBwLL2zhcHEHn58u632S4gwxPCE1bGR8dZchkjVkZzqdF7aAap9jW78QuVvGKgyrDJTZNuTqskP99WADnc",
  "key4": "2kfKswXodwEHxTVnGxa2zSFPQpJ71inKPudiiFrvV2RDS8qekWJmpLghQhC3zgy5PhJpJQVuhAopv8vXYJyia8G6",
  "key5": "Q29DmKyAyehdLCvZe4DbDW1UG4yxmXfLfh27tEaYmT5k748m1xZ4439w7GdmiJXXDGMo48Ht9ABDYu5tdDHnCRY",
  "key6": "2A2sCmawyTGPM3r4agswNtRnKXFqgFt5fCggBREv2d6Q6ru9dpgUzqyDtbZ23PUMT9pzKxrPdhbzvmhw9SzQPhxE",
  "key7": "2G4eeiav1YmajGsFNzW3d2Wd6vHTkXyszHCUYZ5dBTvRkRsqbT65Yr4C15fr8A4fDeVayVNHepuGFK6MF7MTXu1B",
  "key8": "5co6FZ9gQjAcY7EScm7Kjrwf7wCGd6349LxUCVJ8UzSB3Xvy9TZtbKL6toiyXf3NL7Vf6Y1STSfMqnqqzJavYuJV",
  "key9": "54DxDbnrXjdBvy7vRJeasiAyXS76v8q34mpPGxq5NA1oyspDUXJqMEgmmGXd9DLRJRiLTS63y6XgXmeVVnJTGstS",
  "key10": "54Hy4QxaiNvP993mCEQqyUvvx9oFr3UQxtRK41Z31gTwD8PvYUB6vJCjDV8KXBPM2C1MyPpaG6ZH37mJptUpF7zj",
  "key11": "54JA6UByMHB2n8gPKABYex68Bfw88oxTHK4RnvVJEEnobgQBB8a63BZ3HHSKWNa6mnQzhuinT29Diy1BZ6i15bTN",
  "key12": "5ERgkPjYS3wHVLnZ3fsvwaeR6Hea7JaAAM4SoLsoSmQkeL9FkMdrbJEZfa1HSVkLBoPcvo93Wp7fRNSwZyBUtTVQ",
  "key13": "fHU8JE9Rdum8KBnokaxY9WVzirrcigb8fLVNS9Zs2FqsJjpWmypSi51bA858ZVPeCiEB4JFP6EmwkJy97ZqaizW",
  "key14": "57t9E3a15pgAeUL4Gx1AizHULCjeZMLfiJfmjXLDMfo8nwmPLnrqn9FzVithjqwaJvfcsa2ESyHy28GaJgZrXFoW",
  "key15": "52GxNDq1pVhZqoLRZYXCsZKm571iDzsou36o46G41Bzgi2HjhkYNmc2hj6nK4LexKRhbcmWcDN9NP2vi9qfmRqks",
  "key16": "2g7eYSzTpd4QiJGhQ2LDYUkWVZihYNgXCXnj4T1G5Pq3G1edEo82vCJxSX3RqhB9iBM6qay3UigpnD79P8hxPYBk",
  "key17": "3dwa3hD18ZhZ5NXxKToP5LMxu1W8cupAxLjw1aZn3h6bbS6UNu3kp8BTumsVdjQ5BLf6sjoU6c9UE8g7UZb1iMZi",
  "key18": "46yffrdqvAZ7wWvuCcLYhrnV2Lud9xuPy58stTyqZJHo3wLchEMnGz7b4dxCXBhxEQGWzKv2Ew1f8KYTPw4oEui1",
  "key19": "28MQ7fa73qEJ84KHmNyX2Atw9gQDBcu9ViJMwg7g1ZCLCz13Lefz88S5g2LSCa8t1tyyaezhddie7qbRJnsg8rjB",
  "key20": "2g4KmqvQtVGufHdFCEy6TAYrGZzvmWbvQFfTyhzqMUx9PQhPhzHRuwGuntwpg8RLiRHcyRREgvzuXPAr9MH6nVox",
  "key21": "2cSAMPabrNykw7b4Zt8KYSPshq7aF5iSAXpaxYPhbSfg7K28z9XEB3EQpfrp8obgqFgDuY4MoDbqoP5rfh2xmxtd",
  "key22": "4zBcwaR13DGwpiT5i6MU2UmjGiHQfonEXGBuH2eqNn4ypdPFYGavUB7MokbVMZPgBRPenV9Ah6fCegrA1Przx3qJ",
  "key23": "5GEQ3jsAgLyxxF1KoT3PF5embZU64n8RTeey8Pcvxc4ApgQ45EVngpxfrJgqMr1YK4kzRztLKGGEMfeB2umJD1Xt",
  "key24": "31gi6d1CquCMojtj4LXnZfZhkMvqcwDNuiiajnJHFfbeAvwuiFLgf4FZ7wrMiCW3ie8xRaGZogjkMRk2GgXButBf",
  "key25": "JXiU8VcUqHNuVQWxTPR2wFu7mSs6mbufxBb3rTDMNL4BsWTJqz997nUuWs46sfJd3FFACyNvXKopueohV9pNzub",
  "key26": "5LpZbRuSkMLqMwvMsZc1Fj7YNfQFfEHKtV82PMcxL4P73vNp5VZ1Jg85LTZ2AtYNqST8vuMjFeZYKVow636krY6f",
  "key27": "idN7LyJQ4FnUgrQdZ96AQGNM8TWaqrR6rxoc2BxV6STaSfR7mvEULYGNctkFo5Gf2z8Z5o8KstFjBp8LHNZoCB8",
  "key28": "5vBNKyib6s5dVUrLEgmus3MhTSBSLu3ZaLqZ4EzB2wm19F65JdpSWD1GbCxF5TThYe1HcW9BSqvs9pRhVrKPxDJH",
  "key29": "ber4Ts2uLimp3Vxje6T4yvA58x332gegwvZDiYJqtiLZr7pdtKAvkSnUiqTN24sd32jJSM2FmJfcKpx7jjFEXdc",
  "key30": "3w2L85y2hSJKsxGp3aC8CV9y3rnEZCAx77SXSFgRpsmMs4oKhuEFrQc42uxWCZNhHRXxhpqm33X84FWHVaLZjAfY",
  "key31": "5jGNAuGpSa4GbBEVM5A3SRYPwndsmNc6xgriE9QrPAz3kYSUCimMPVuysGQDXCqjk3mnVf2VoUDzikCDLtnFBrMm",
  "key32": "Ww7RkiQ99RK7oc1yqxb4mi5qohXLqcToSUWzaX8phZQQzgA3BXv8ozD8KqhTe3upFW3e6K4JhSeMu1GeSNWLHHD",
  "key33": "PaceK8SWdfPnpz9ynpeQRezMMXx1Dw7A92xejgV3ewU1BvK1Vwv3eGyzX7WrkZyUgSnSTGZdL9GbuGGPqEBWYCc",
  "key34": "5edQjdVSQDgLABEyLPSSbo75KKCXynR1ejgvmQiggpdVeA8iXiqBLHY2hjEJESZzx5ky9xu2n9j6pbeoYM165Np6",
  "key35": "2QJP85vD6HrKZo7oAjvG7icCfYTjouhEoKhaK4xXV9SSGuqPDkczxLmJj8KG6zTe4NTeGyWvMNJUg1a97m1nKQ2N",
  "key36": "4177s8HafeR91ax4gtt33FwXkhVgm2hP7fFpZ7YY7i2EjGhsy6FA8XTY6fBMawvqpYeLDgMtr4v9XYDm5btNcAhj",
  "key37": "3Zb6cu8KESxeswsV1TpZeGjQaFMgZRQJyoJbREeG8DFkW2z8Mp7KV6SxwyR3yzqQ87rEoqSnc5KcanRxX4kEM5AM",
  "key38": "4GjFsXcraVCwda1ZDvNP2VsBJ5HKbtZmMxANsKyfJGq2uPHEqpPZsYAywktMaE1uPxdhUGZk929MRkLaDo8a95F5",
  "key39": "3CaoKg5rpjfW4Z8RSwGKLndonX8CAD794WyTWH3kv5aiaLByobMYWik6jDueKUwHAmTzpcZmPcXP5HhkR7MGdzBD",
  "key40": "5FapgQjsSLLFs6bp81iFntEMPPYW78uZrRyyYqzSYp7eqdypRAn5vgKAeNKA8uPggB9uWiiqWxs1KxTXgVT5MJqA",
  "key41": "4GB6zAeYM5H1LJANsVbbDbQJNE3kGjmvejpmD8yqWKb2itFRDZMTCM66rRHKqkRffV48gqwEa4NcabLbxiwNompv",
  "key42": "3LYojG7KTq4Mbk9mAVikwojhvze3qtQrkrq8odWCw823sQXc61fX6oGLHjPxeVodaz49a98tva4naBy5EzvAjpgA"
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
