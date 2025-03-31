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
    "5LqxcuumDTBmvKJWCX2KHzdy29zEr6QZi6fzkWGKggpoeuyWQxWdTiVXLEssVu8ZKtMUVt1Qpuy2oZMYsQkgUWvG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tK9XPZyvvKzLSXmNifCKfTzvrDs4qYzVpPnLiFrnxaE96n7ix424cyJp6yw1cTGdALik7MXDKcV3Xk3ePYCysbt",
  "key1": "48QWYcTXjF39yiS95Vxe8NdewdL5fz8riLev3GCAGaMGdxbKBWocU6kLhRXKk7ktmwu9Vc4K8iAoyu7FnWsEVB53",
  "key2": "5Tpm2vkc8tvVNVu4avfrt4zeXfB3CaDN64Arn7yiW8ZrG8BAJvmUkRyJ3NtwSPXyN4iCFtgNcSg6My81xsmFtfpw",
  "key3": "3Y6JDrdFxRy6UMo14roFVUyK4YDs7NQ9t9AV1vf3qA3TziKztmyhR9D8MNkFXXioXikQZ5AeiUwhgya51KJKYX5s",
  "key4": "2tZGCN49HGu51ZNkMtvpmqJDUQnJrtgiqRNBwXTvHMt3iF5thL51UQGhe6iG55FeEh27d4w4bDdXKyympni71eXb",
  "key5": "5n6NZXTP4AjB32ED7UdGCu3dg8kViZyvUbYMtEck4yzczywgFufLCEE4Dp6E4K8y9ZBcjSMHuUVSk3RHYkVvdqNM",
  "key6": "4JqDaywUc2Zbc64gCz7dfgchaESwdmMBKGqdnzjRdRdgv4bNHW8WVztd4ErjL7dtd9qkwcagWMZjzAzpsesiiPj8",
  "key7": "2uSjnNW1q4bqAWHDADbAKFkrPDKP9ixZWAyY8PYWnLoL51ayK3AafVbCPkD5g3whWS61HAHD22wbZRgFu3teJ2xG",
  "key8": "63qXdAprMjZ3QcXR8Deg965HFDsDj3ATdWURvo5YuNYX3TFcyePF9u5fCFBFyF9LZCZCEpN4MZUwZQ6kuxiVzMAK",
  "key9": "2ST568uDB7ugudHPHpHHGGUE8xsufYiwGSf4KYdu8UYSbzAocCYeRYBZD8S1YKx7xUhchJWE9jpqEsUD83ejUfF8",
  "key10": "3zcppHE5kceMGki94yzgWSG4aopiAcaitewa5NUXq2XmEQkfKFv8wcdT8AN8SXm1jKRuu1bbnZex719jhUWGn4wo",
  "key11": "2KFKAoa3A4jEwAQyCWt3j6u7QyGcNdyRwSBZtLbvE1TVrFXptYQ7TZFqTbZAnez5A8eh1L7L7YL3GfLKJK6DukPw",
  "key12": "5D14wTKVHts3C4JniPbnX9U6W9X1GcdscV7gboxLJu5Q7rpXcXEkB64bVAdjdbwBRyRXgooaLCo15RFuDZeLrUzs",
  "key13": "4uhSJA7U6Npypnswipr1w4scdmuNev3grax2KRRX2tM9G9Sadd7j5xgs5DN8SHHUq3NzdSnU5UHJ8CAPwoc7CksR",
  "key14": "5oEkPctE5G9NA7SzoPUBRQQvX3MPsufH7n2mEvTHZdWrCmBaaDqcagjQ2ey82y83AwkALeTidEq9PznsCszwZkMC",
  "key15": "5eAT76gKGpBxzH4bBCjRfTHSS7hiAU9VmatpeyB4Q5ybYhaXmQHtzYjxPVtH8dzKmumeZGcgCCxy2jJJxTLtdSwE",
  "key16": "tJQbeQSPXr6X6XS5U2o86P2q5RRCnTAUqcvVpMDP46DBggLRMrnu22P6ep2RujCEJjxdtBFf86sUkuhXKS4RQe7",
  "key17": "4me7wLNqvoboe88uvXAHoE4y5H6QHTbyWgkjBiQaFSh1D2fduRhjnmM5R2ARVswTxp4QBKBjRYaMWpgWWJDAy8k3",
  "key18": "41v3rvHRe7ndess3M2fnpLokYM77CNQq4ft1jkpbjwA7r1DxBkk9ie4p1SPkzLqCzfVXCiZ2YPmST1zH8H2mQRZK",
  "key19": "2QNHVHrMTvY2S5svyVHurQVKZMUToEBa4S3Cyj8478XmcZYxi4XjCa1pq5gy7iZiu9U56fVKJqWyrTDWrkY3XTAz",
  "key20": "3xhsBNC75eG5ohGnGQCx1YMGPHW15KrssW8dwbcPcAzP4iFrmheLKVTE3SUy29vfqukMsGBrEHPqaBU8iXRartox",
  "key21": "4qt8qR2KzKMN3w3G9Th5r8y6gdkGV493vbXhpGbNrWdSE1hURGiK1AKcpTB9EgKJ8QWexjKmt7XMm37cbCYNrMq9",
  "key22": "4W9X3z7eSkTVZmjfziHYtg6JwG6y6gFJ9STsytFJvvVDrYm8RgEKfdwY8H8W75r755CnmM7VZKPziv9E131Abtd",
  "key23": "2V5KzCzwQRvxcGdv5CcU3RqcW6cewTB9vYWQHGjvw7GQ14hNoVfV4gsCkJB6XhfRFDtH5M8uHdtsQwsQBFZcJLvf",
  "key24": "46LFRyJz8ysrYZodWsKCnZDiRXtMncvP6AFoKUpdGL4CGnu8VzKjff1M1EA1ec1n442bv7PaAuJSKZCW2CKQdz5g",
  "key25": "ykprQyP7bUz6NrWMhYaQPp5CVywUnyLyRLACFLmZ9NzyENpCMgCUXaKaho1UERxHTfFCENS1Ru3UqqXrknU542Z",
  "key26": "PZsBTRUMqkbT9H4Av2uEu414p6FejzEAebPgHzRapKWGWMkq2fA7Kqk6ALGdDM4ijiBaTHbnmYZ4xUJhsj3wsXt",
  "key27": "z7FvUEXxYpEzKYu5ip9qx8y2HWf1TSNZNhTXAAWf3uEXv9ST2PsSzBCmS3o2ashN6ZbUfc6mYjSYaV86w6BMjDg",
  "key28": "xV6E986Qz8AzvF1VLrAd3ijEzjE8oFr7BzCg4zZpLa3ti6Bgdy8UysrPsSJkmWyGPw9aN2X5jbepMjHmV1gYFMS",
  "key29": "B2hH39y9aRPAkESu69Ami9T5pp5buuaekMrMvgRC5nK6NVxTQVgKmArdkMhH5gAsPozCttN7cEm8Nq9PtUNgJoi",
  "key30": "5ve4pWnXjXqJ4NcjACQ92giSsFdFhFeq6PX8Xzyr7M15BH3bbLGsLhx9oUeEiLDuAHWEvaGLrBbxhU3EhRjXC3Mv"
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
