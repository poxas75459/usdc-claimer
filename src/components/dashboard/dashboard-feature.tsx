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
    "3ETzhW8cMNQBWs4Sm2eNywftVVV5wFkdJzzN4p6wyL17EyG3ueLMjSgdrMZ8JHdKh3LEMbLzd87kKnRbKhDjigcF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57eKiiMTBjep1DvJ5NW45VLJbwng811xYW5gWwz6sAMZH8XeGuRjo3xYvbNUFiWsrtHyEs3BzRyxkNWVSDq66vMW",
  "key1": "49jGsAPuymzZRVN9avG8knzFHsxXrJoTw4ywALiE6K7E4J5wMzqWNYysgoTugTsuQpmTtJsYgMEPPKp1deh88B1N",
  "key2": "4SK8u6F7Fo6iYJNq4aGjowKtgDMSf9REX4F8Qy76gotkDzWXoh31h4kSWT46SoLA6xRqJ1QcqTjWBBYCBZPSHfj7",
  "key3": "55HEBAnGthT1qqgEATLtH2iuozrSgUUGCBsX7uHGkX1cQpfLG3nVmmxfa3LbGHozCjttapdaNoaX8h4e2ACTd2Cc",
  "key4": "576z195aodrpe22d6UoL26G8WoZX22wdByVL4S95bPRbeRHhCwM6zHaBcybjCc39pqSieDv8K9xcfKBqKeokckud",
  "key5": "QeeweCJJCZw36aNr2hsbhttbVGgYXFSE6VqzCDDEyP6gh3jQjM9wqPKvWzSHabF5b94TrSozepRRaywUokGp35v",
  "key6": "FpMXB9fsZ41Juau5q4E9D435E1pjuCKw4XMYBWTAyx76vwLdvFu8jGBLyMMop6JaqXcwYpSycpQMVwNfUS8JcJ9",
  "key7": "3CgPJpw8Y4TtYXuaVnw8qVfyM5owx6M6GkLHsJvNzzM27D7GyRBsx8P9yoouNYJyUE6fCRoZhJj55r6jKErcoYcG",
  "key8": "4fiyMHysHFgzVEngf3NK9wVmHxoeyGGNhXk2Ct3cm7Sb58EV6unKmm2RXcM6guSnBwxdMN1CgweDUGjuQvAp6tMp",
  "key9": "3eePizK2mFyF678nwCkJxsfyWQRdeJuMJXJxXxaeiAHDDCj4a122pg75NrsZoErF8VjGYP1MYv2yX3skV3A7sEqC",
  "key10": "ephvXnkDPsotKKCoh1S5Jub23N1nDgL45bD1VZCXC8jfsQ65zaAZLQgpgKJpZZ26iz5GLJVcs6k6ueJsQhLnZgt",
  "key11": "3sk23CQGG9Sys25Lqgj94cmUycBB2dz68e6CH8KaVu1dD3VoBmfNnEb7dMXHRawnrSveime77nmzumCWiJJXJYCj",
  "key12": "nti8t9B68uh7Hk9gfLxf2k6PED4sTYYiKzFA4MFwsffBsLCqPxzGb56aw3KZZfGbvci6dgRoEfi6tsKbp8y7N18",
  "key13": "2YH5aF7NUMeubn5zK8qu58oWaatoqPvGxX6sTfNFXWWnyxwi85MKt2XUhXGBGXkcu64291hX1bbSwzvS9NeMUMJ5",
  "key14": "4tfjrv2xXJTE1uifRKCthWxKvNR846eTtxJkHJnfDjygLWm4EkU795AiPkfAjhxzz2f8pFGFKP2QucrMWRjWkPgs",
  "key15": "5rZKVagz4S9QqYCeLuQXsvAdQxKFYQE1MFCoS1tFbD1QnWNi6p4o3TTiz5YEtuoFeqg4sxx3RCDoSzGCrmpWeYVb",
  "key16": "TpVLY7AAKFfLZSCg8FCnhM5WQi1wkJnrCvcdmGkcbatny2fvvsfZXdhVfz4E8jhsgzKfvDT3sGFcqtpdF7aUFXu",
  "key17": "56dHU5NY4iqASiDxdxJewxaWQRUjzsoB4wstuDLZhSRavXzpKb2QeBvJXHveL2n2UULHHvPPkso8DRqPTotDUtsN",
  "key18": "1abBLuG9KpUouHeMctEDZToQVHjo4nXKspkz16FDMQS3iErhFhvAcwHf2TTxc3PfVfh4ERTeu96e8AbRD2PjXHU",
  "key19": "4YZBwXdPTmFZucV2utyxAFbcZi9mkZKX7Xymp2xUWEVLvnCvL57vWUGhu6gBg8y3HCPc4Hc7tSvhvBwW4VsibutV",
  "key20": "23zYcASjoktNLiE8ZrmFbX1H89GzPATfYoYmTFLcFMLyjZtCo6NfTJJ4tWnJFMZyd5eEefpwviHJgAhyn5V7oRgb",
  "key21": "4SgskpjDfsb1QYgebYL6pR3NeVs4R65TahQCzzxe1WA2Sktk4XSWjChWjMWmUxv828xMefRGTo8kWZj9kmJitEiV",
  "key22": "679JgrrQewk6ryPdt6pFJ2DunqCiCiLhdvnuRy3q9aYRVkFisCnAzvX4UmTavqyJCuDbgD22QbN1q1Grfxp5y9Dj",
  "key23": "5hN8GmV6kwjgRcgo84M76nYuHK7ZjCZt51XZZxNLzWEG6VHpSSPqWjLszzMNiMMVAvJ57Q5U41VXRwDE3wskaeL8",
  "key24": "4HqpA2LQ8HCCTmrUDTx7TSt2e9N63RK6uVuL5oS7EQTBzdPiKwmpTRQxJdt6mkxYJxuunz9DvSoBoDJ1sYjdiNgF",
  "key25": "5qJmUrvC8sa9iTdk8p1K2A4v8191PmAeffuSL4UqE7A5atzVEQKdXXpeWera7iTUEdoi7ZdPACfbiy89uMCqSutz",
  "key26": "4VfTQXGLyQNwB6MoycHgd2fZkkxfTQvu3mmkVtqESc4h1hCaoC92WK8Mrsy1WKbX1wsaeXBCKPDV9esTm24G9TJn",
  "key27": "3Kk8iwao2iZEQsfFEKDPX9cgYP63VqyBKDfUNmZFPkMDtmgCsvLRc1ds1xhuz3aTo9AH6fcX91QzSjQzJDZuXeuK",
  "key28": "3y7uJmMN3fH7E4fg5LwX45Q2UtCs59tQ6BG3YSMsfNFR1iMHE5dTULDaXv9LGqqTXZbpEBTm6BXBBxDY4Lx3nh9A",
  "key29": "67ENnzgzt7P6uGsYJABsUybLHZB2punneVxyCvrtXU64BqxTu9K8xmbRPwQUmMVpfhgWzZMnh2DEMYMf7Te4wo6n",
  "key30": "4jF2UPYPcxxF963q35jExV88vKV7nnSiRR3Spomz5vTVfnKCZYJPWN2fn8etTeRKKq3eFiBNsowisJC298RSSSLn",
  "key31": "4GJHzZCR8vjCwZQ5XbnxPUJ6nUv9RbSVsdFM1R47nt7AEYRBgyD5xzC2bvttAiPEasNAhre4UL2RUSSB5v3Sdcth"
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
