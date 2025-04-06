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
    "v8GPBJydkinhyUnQ22KTPBR1wdgFtWUnE6qk9P1hEZxj2MHALLEUY73n8QrcC4kYLa35T56Fmp1WT3WftL1QFMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zSYWWYojY8ppiiS5mgphRm7NM7SeemgzAbuwyTicDPRWVg78CFWT6gqGw3zLBcxvbrHWJcNBAwCTiBSNa86tbFL",
  "key1": "5mthUZvckbPrsmc2WeCjSGHWZ4qAfb5H7Y3Tz8NVJJ2zrNNvWdPvWi96ngTmMvyeNbrPnGCm2B3fBTViaWXARHHg",
  "key2": "H4A7CRgWshPbnZuxLCeSUwkWzzREQDTBSAYdfGQtCpPzBx7tEsoNxdYYV1aFh9baGTZMDAQ3qDw1VmM4142WmBk",
  "key3": "59oT35feSGdy5tTdwxSRZYtWvZf9MM35boweKkpH5XfKdgCJpaBkvRuoxtuV8ip6WVjLTxNM12jh8tJMM6dsG3qE",
  "key4": "mtphBq9CeLpGYuwZXgMDv9TwS9J9MjNiGTZmiLvqT1bW5uudrMpBMKnRTxGCCiD83QZHiBDGQt569xDhJ96Pymm",
  "key5": "ncdJFiCYvdU5eqi3kGLQuX6LpkmxwxPAKbxeG97HitUDYgSp5noYPPzABG6gFSKyfnuRYRnX9mhDL9rSf6zShvu",
  "key6": "5A5Z3qGRk2QWN9vCkQV8e3fvsrA67neEaXyYKEiMjQBhu7zMiWyJMQZTWgzrKg2K3ZyzyCYhyCbU5rLR7QgYJnc4",
  "key7": "3Q4AWdzqWtsNWsMUwquCgeok82nWUdU37BV9Zq3oFj8TnnB7ikXCgBD4Dro3jJz6L4mAxySPYDtirSHMjzgiWARp",
  "key8": "2pwBZmmMm34h5SX422yZkiU5n3toAxrkr25s735SBktNToBiWBg3q343L2jRvSkGwoVB93hL3RKpD6ZmyY4JLLky",
  "key9": "3C6DQ6mNwh2LMMyCWjX5as8AXScCuB22Um2wh9fFBo6ctiRMa614TMsEndvEgJGU2JwYq4VuzXmvCg4fpKB8q6fs",
  "key10": "3cjp4q8jByDCQpJSdVRNhjo6srsRm7GH6JovXwjuZkwQSoTaJJiEBFcdj8VRgvrhdVESSvdSMMsTTsfQeeT3Fryr",
  "key11": "5ZuY9YaQ6jqrpCsBXZRiDTUztdKzEed54WKakWDZCdeLgXt38HwbFSeBZSsD4bqxq8MnjJ9hDMxg6UVRReXZUSoc",
  "key12": "41NpAHoyY99TpnpLFF7VAo1vgdUSzJH9SQcK7hKkgczRKNDHNtRV3bcrFd8jvChzJ4utSZgrxdTSom76JAKa7Lqi",
  "key13": "595jUPodDsGfsHVFeDX1j7v9CAfNXUmeyeXN71ym7ArHStWj55zCnUcKREfBFYFpZ1WqgRknwofVLqTb1ULXjAHd",
  "key14": "4JwHXLvLSwJ1SvJFGwARNhQiejdCDWW5kTvNUHCrktGg4crdRAyAqGWZQCWHpqNetg42hGVrdHuo3v5zNk57DGcs",
  "key15": "h4TU7UGdaiKevMRGBtBB8AhbeRMFm5sXoCX9ZXFS9tVett7C8fE4Ka1uNq5gby1Nk2QfPNeMn6ZXUdtyJvW8TQd",
  "key16": "27ZnCArnZkF5StTEWMcK7oRd1uWoFD8V7Vwx8KyHyokEqeq7Lw6xbHbdRuN8hf6JTURi39TPo1RCUJ4vZahwc2jf",
  "key17": "5vpWPJTc9W96PPk3XBRTZtwXvFu5YWx8H51tGaptibeB7HbYNK3c2ih7vTZ76JqByAaEatpcQ93S8QTUAVv8Xa87",
  "key18": "EesUJnp7ggn6emDofV1WH1Qqb3L8fGLWuJAAgZW55Sy4VFv8R2YmHnBHtMLuz4dJLC9UdXX1rwyEyGFixGWSRes",
  "key19": "5TWWWtaARAxgmPh1uhmEDdaPiEnmBk5qGbSDMySjjezj2nu7nmNyH119tLT3pNLhMYoHb2ALarMUbPnk69cTxwM9",
  "key20": "32gPL81CJReLwEnGULTBjjPaKLeLjxtkdfeUM8ue2HHjsZsUBhL3xKj3dZuCrcz3g6D8Lppgm3wV772YoP5q7Ebx",
  "key21": "5MDuGXtAU6uy8AoQaR6SnboNzhLj6tg3zw2Hm3MtTXeW1JZPxGMSYT7cNwrNNf29Sui6cWeXQWT4riHYc56jKEdG",
  "key22": "JxLN4BYFVYcEWLFCrgazGEx7Mhnh6aneiEfWBicpRXtTcNxrWthp9ekpr8YkvnsFQf5U6yrkk6PCfeGnRjQ1ZZv",
  "key23": "2caEzufvgVGSMB6TrtoGUkKtVTB1uDb2N8PFVEjHE7FxZtT5rvyLmDehU1uKaoRnTFz8AyYeRT52i8T1QqAVb4ev",
  "key24": "w3Q6nT5HYsrebiF4AewYSbtZ5npuP8K5FahqBXocAUif1CoFi9cdtKPposKK1mJwzqjdX81uezyA39QobsFmRj7"
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
