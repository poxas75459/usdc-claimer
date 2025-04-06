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
    "2fhZx4oVaS45BDxEK9P2VcnndgkDNe4mdMDJ5GQRd2NjsEX9MY8yHKrxWiWN6Td3hqMXaWuzFARyYBBQ5r2qJnpu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zjJjZ7Lq67kYCfeLBJNSTsgR3MNd3xVYnKYMy4zP1TLtQEhZkXahiAmQzHTGguJyzfQydGVRg7A2P5Z6obBxkCF",
  "key1": "3jH2ck8ZuSC6FVJakwexgxE966kB8qmjFTcd4F441RVLdqGb5eD3DdcZhkj6NBJbP9t6iixooKruz8ZMKXGZTdh5",
  "key2": "53TBAE6svPQ9NvMy6wxk8ku9P5whDbf5SXjTx4pVky7k6VrJjjMGFm1Vg1r98XNAnZf8mY7xWtYAKPbBvndXQFK4",
  "key3": "nWrupcvUKLyhummAGm9TdWscb7DzjiE7ZSkvY1REpAU2dSCYaB5cXi8SZce6yuoYyxDm9FVCVFczXeiEPjEnFJ8",
  "key4": "3LGQVMAi73S6MyVPbEBdLVLxYARoTzF5RgJSkGaRXswhcYEcNSyZ8ycgGScz79Z35dARe8aR3QirBnH3mNVDWn5C",
  "key5": "4wtHuDuHLw8iQYeQQCpjcBdKzUYK3ink8EwPocfFkFKUh2GfDK1Xn78RadfZ7XR1Y9T549fsmA9Dg4PMh4jjj721",
  "key6": "4phMvRzpakK5Jc1NHjhxvGBYihazZeqTw7VRRYPKRfBMfCM8xNLVSc1XdsRBWvsYPDwby37LsnArmsA8ndCFLV5j",
  "key7": "5LUUY5o59TeHHYLTHQxwEKib78YDuqMnFYVGsAjioHzoFspKHtr3zng73dQmJ3ahfWKn9oGdhtqbaFFZ6hyC9xPq",
  "key8": "5e6qaBZqMbK1yNanpGDpBfhiqCummARDnU7MCaoqdiPVvZmF1dd8ER2zrenhZVVekWnFQR1SCriXDchMerWCQkED",
  "key9": "4S77hgMjvkbxZAWjxZChSSUtzckxeZ3mAYhH6x9FjVzJCHcX36YqeoDGuQJCfhE8xP1a27EpGQNeshRApQwh8eud",
  "key10": "5Ag6aPZNtCkqqKtf17Xw8GmUEekqLd3c15if59LR1iYuf72w7wQeLobcLKyR3UvvHQLrcx72HyjKrFM54vbK9UkY",
  "key11": "5F9MA88ADkU9XdZCSR5cTL8pKDVzq8YqT7jk2oRhkdUBgpQGHvHAwRroVR7n5EMRHG1DPsHcdncxCQdDZk62d7oq",
  "key12": "3WaKoerZeukTbkefkm9M9DgyUiNd89JyqzEEumjDfUMUVh1gUT5i3dTAt3R4sgNKErwtZeyAStHsAB2XTPn5WMGt",
  "key13": "58BQmxNNvbaTNrcZzHeSXQ6E8gd1zx7iLyVcPYd9WJh5D5QqAKd4XfA3nkdKKQXcyHEi1whoSjVaPSanTPhiMZwQ",
  "key14": "5n9ZLfgRtQ6DXCKWqM84vdtkg9SoaEMoWgqkE5hCZjNK5nrpTQJHDowVgx22xoQ8w3TMFFY2gEbKhqKpfFdksugM",
  "key15": "2P1x29iSdbs9APHKz6qqMAFwHZ4X9yinfjyh1afZmd6XAXNn5EsBvrUbf6krMeC6mjxjLM6Kc1ivrU1Yn8Txhjd5",
  "key16": "4ZTExFr4YNeBjh7tWiAeeWRm7kekdTGa9Gth1LccbQWPrCZT8WrYLxDHWdWkyP6gLrQ6R1c2qWobWnPigifNdPHJ",
  "key17": "3U53wcfyfRp9BDmt9CqNPeMzAwuy8JdBnPZqRGK8wxi1LifTdhaEooeM6RzVL1gHieryReBUp7xuqKnp2Zs5NwLb",
  "key18": "3WxFH9hLbCShH4wmWEmPoWSx3yXaVErMK44s2yb984zT3SVR5qnj56xYdRjveMHcp8LgsgeUy16Qw6u6UdrmyBXt",
  "key19": "n3XrqDuF5ooTpHrrPa4QaeWkwgTJQV3fB1YpKSp8f5L9xhhWaNkk5oY1CpaKAeyJFmNBgBvfvN6HMttgM2dR43p",
  "key20": "4aVehu3jnh5R3UCHezp6CuAKYRGH1FnbSswPphsDEpGKcrU9aFwNEr3xQ6SpJAu5f7aw2f8BhTZGdMcpC2jqMLes",
  "key21": "4Vv7pWJiZs9tELB7x3f86M3Jg9e1rL6NSbyDXcNBW1NBngwENs2fYUsa5ixQEkFyPT9PbHkw1xWBT7G5KmBrzGi8",
  "key22": "2wHcPKpuaojN6DdMPkN1gDYnm4pCh9bkHfmMvyLuaiC59DEZ8LWCRxKqGsqXEdHmTwLnh84TZETxFCq4SxMdDy56",
  "key23": "3i2MGP7yk1AyZrVrks5dWRdmjtZmAQ8x4xmgX8i7XgusY33MugjFKoeYeecgwi9AArXAcFUHMXGQCCF4vP8BK1A1",
  "key24": "4mse2SDQpZpLbYb8Cvw4uqRLy4KSMVo6fHhMU9Swi5DUNNbrRd5mFid7RXCmCs7uEaXvQvPSWS7b1hTqB15hNAgR",
  "key25": "4h4eMv3BbYufgysJFm6dvH78xJzvsLA2to1j1aAnMbzYdU5tr1EQktruehmZ2TiLTGrCeT9ynt6WJWhyEeQjvsLg",
  "key26": "2CDeZJXCzmBubAm8unEbWhPGShmo3VXHPuNwRATsW76mctjEkSzbrTkdyZQyyGmQHz2WgmXANGfP2JcqkANdFfrP",
  "key27": "2yJYvLQDeLw7zAxFGrj7hL2ypRwsnRqoFiE5XnNbdqWHRxjM4s7gv4ppV1rsiCn8i6qu9jtWnfaKebBX7d2MEkkP"
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
