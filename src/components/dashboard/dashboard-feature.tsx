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
    "3M3rizEAaeh2zpS9KdLxWTQER7WeQUE5niLV1pSecauqfg5Mm2mqUy7CPVZrov6hj81JP1wGK6ce7oJJW6jaDJnM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qUVSCYSyDZ9J3eWD5GffdxGJyLMzv71nC8jjdWVkxE11ffjBxASBSULaVyaTucVeyaxjFc8rE1CDWs1ZwGTKkGB",
  "key1": "61F4huHy7YntpS9EeGGkSWTw9fyfYoMmYJC8JgJVifLbCLuPRBuaA3VLmYCUaXkXyLuUPSb86Ynzz66MGVk5CJDS",
  "key2": "495DHQfx4vQ9u19re9nL7nQTJnK7Kd1Eg1wbrJX97KtmBLjLc9Urf8KRQ1HTqayNwEHK1hB4sRnsi9NcDqXUqha7",
  "key3": "3jZPPGK419ZkNTJMREvw8nmP59DhZehPxmZSQWBuZCKNxyVzQuXwUuUpX6Jr73RC3HuiUb2m4JHS9RvkQEAwjyKr",
  "key4": "qd6QSbibpz4hCTNsvkdyfoiBToBNLs59qwzd2pg5ULo5Do1TegMashGq2UQwrSWkVZtZGNpD8FbvBs8C9cKFQkm",
  "key5": "2KydeeLG4HPUXNXvE4am9cG6t1QCTNFTQ6MCdBffHBTb5rQwre9wd995yg6a7F4cu7Gik5yqbVeqwCdvwqnBDAYX",
  "key6": "FKiVYg1YX5j7f3WrkdcqrajrxNwcwfZwPMe27dWGtAsrDaHdZExcXd48Tkp4czR5oj8icAw1VZDDuWcWFr8JRT2",
  "key7": "4GH8g2gJ749AzikDkAesdf4GYgrSMzH6aLXoQhWmuC58rhRyxLoJ2DXcVCHkVCjhPhCBLaCtQx3kLjWBDEJZuan9",
  "key8": "66AJ59M2X9Ps1Qrb3femhWzuQQAgehWHgi4Wfy3YX3z8R1dN3dTPdA8BskH8N4zA9eHsT8sNEDpLLLcqzT3YmYM1",
  "key9": "ZacMNKGXT7fM3Ft9r9XpBbNuKNqHgGLbsZ4bJwcGd6aXBSqAebSLKTS8VZKuhAFgj5x8tvrZDCcTuYAkpaxx8NG",
  "key10": "57Y33qfueKW3L3kvJXubf9FUgSiSb6ao1Bxvpto9hhNtnuCHvRnP5PHZ7uWQURKNzbBHbTD9mnn77ofvT443SpuB",
  "key11": "2h7BPngvaDkK2X7di71EtroFBGTB4URnXdo2r3WPu6axgHvwS4CtLJqERAqpC7GGGSxu1LWKm7nV5FQDStRU8iJS",
  "key12": "3LPwuYXhqxKNxohw44FwweZRHFNk7pHYjuPYN6vv37ytbtMjU7yM8exdB2EYWmYKRfnR71MtsBd3Tvy481xFZRNt",
  "key13": "2LoAKxt174zM37x2dRMJd6teC9v2bZyrptc3uEEoLqLy23P39kxMYSpmARBcbR2PsE8Z1oPdKGYqBTiEdUMorFbu",
  "key14": "8oa37pCbZUvCqo4p12dSuyzCM1o2Z87xue4WY62GjgsG1LXsYNcpJSvWWDU3y2KtUMwqCTmwLy4kvAmvhDY7tGT",
  "key15": "2CdXmVMjgCdi9MNurqPernU7FD3J3QZfZhzA5ki65NGxdUJhu4fHAC5rgSifgJ2sRyCsGfYTcvHKDvneHX1stRmJ",
  "key16": "2MUdfa3xDDAZTh7sr7R7BhnmQNdjGPEP7JqMh6WapmFQot6nFTmeaPQEFVBStrN5SL9KgrJmKtzPD6JAuXkxgbDs",
  "key17": "cGwGHZE427uw8P62KDSFDAB29bobxUbk2QZFisCbjNcYUkqDzhbDC7yQY5ui2PJ6J1QJkcn6SmW8v6AiGgqqkyA",
  "key18": "2EhgDP7Y1k1JXFmASetwH9TFsRno9MDJcHVFiGdWrfo4zBCMphdAWgUbigPNsp8GLHRFbkQr8WR5EUfAXAv3U9pE",
  "key19": "tuMe9gVtkdM8Jfs2r24JW4cxSvTQwmdrdiS1GKTRzswPdCjRpW83AJzhLdFNPydh4eSEk6JLgkGibivxxkARHR6",
  "key20": "278gfCsHtH6YuBDWxHPpStrhwp98m2oCc1FmgL7e6CP8C4FDP7W7beEcyFAsdPSKC695Lxc3KPRvS8cLNMgGqXmJ",
  "key21": "4GKkLuCdVEy7MoF1v1oShoVjDsKukYWBVtnCnQGTHzdhhQRRFAXqoxVhh1vkqwiUAsUEZf6imga1oHgkjt7NvRJC",
  "key22": "62pbSwSGM6SzTeGchA4JNqNF1gDFBWYGydN7okx1vUTG23tZfqwEZ4S3oRz1PuccroGx3cNFmuNpJ7dJxEgbxeuc",
  "key23": "2mEobHeop9yBDJAqhm9B9jEAVM1moYiCYLuiEQyTPuxyDxHK95a2eB3eUAszuGeTcdL1tCYEEYGFayYeUizRKMGX",
  "key24": "62feUezFXUcMyTSqPWGYLg3j4BjPveBgbN3WoiaRcotrV2J3Cy8a56YaXg1KE69DB9RGuBheofijcR6QWMthMjTK"
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
