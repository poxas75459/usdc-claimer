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
    "5NAYe6jN8MSJmc5gisMH6NAvkD24EKWCnrJNrk42GnYgiVcTohaWJtRCQbwPDGBHQJF3mNZW55KwnQqmfEx4wmkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UromBdGiBfUoVBRc1FgaJWa77jHoUeSeXgnXMfaiU3gaN8NREZdMj5Xhgs8qEqLHzQj4vguRRee6Ygj9QSzuFeQ",
  "key1": "5ezav7DJdWRwoj5DD88tX4k4xqb35GjE91GmXzQEsy3LDhEwMzW8soayf4m6P9XGJsiDtzxZMSfakbErUBpieF6A",
  "key2": "4TccyhZR8DTU7Wg4AWRPSiMcWDTwem8XA9JjaMzRit49WcAcNw4yC3zRq8gRtcLqJM31HpWQTZv75tzNsuxsKnH3",
  "key3": "CurYtv8Tdu8xZ9fZBcrbSYCNroqsHuoyd6DenXiAXeXbSUNHjrr1DmARWeEyHr6E7NcLvsGJQWgTfd3b3yvQkvB",
  "key4": "2Ja7kN8mG8ftBEhZJRXFxT51wat3ToUSd4e1ZdWWvYAXBr8N49hvnPgUmyY9cKjAwyXxopRPLf4N64vVfeVzQRtb",
  "key5": "5RutQgNXp8oHNJWWtdXKS66ka1j2q5dkYmeev1bytAgXg7w7oePedZH56JQE8tTwBXrySkeoqqyneSPr6Fcod9xr",
  "key6": "RrotQhXD5J7WV7gEhvDH6ZQJBzf7ua8jPvLN2DbdBAUCTTZNTpg2GLPAWcC2ycKm93vU9y3opBHhNVReLNtvJUy",
  "key7": "zFThaaeNE4fbz1VcxBFhjA7XwUKeXPfCCpXM6UARs8n4tCwFq3cCzRXaMm2eKgDt8RDozCjdD7MQejUWcqdx1w8",
  "key8": "5EBeU2KtDztXr3pqmxSyCsQQLTbdeXkFqY9qZRXSBA3yLXr4V5k4t3FykU9hMsdgpvkZ4UvvWPWHdvnxdbqASirv",
  "key9": "BgA8iSmaxuJnqE4aGxqvAUms7U8VN3Q9eMrzLFjiKfwq9339Fpr3hFPiooDxW9bSUU4YtfSdJZM5gLY9KpM29H6",
  "key10": "3Qxf7a1DiuUyLHiavoTTRLQ9MH9UaZrVZtnUH9MZzvimYE8iFVZ5zgfNSPRHVyV5BQH93gD6XXK32fiBzfVc5MA9",
  "key11": "2jZnF8yacSH8hTZXReUXGVMWnC39ezdbHn2FtqWPwh2ZR7vB1pzJ9c2Ed476RWqJTJArRGSg5ikyYTKnGGCTnjPX",
  "key12": "4Gt9svaKASzcjmtVu49cSe9VzZh4urgoZkSfSS4Lj6QXw8GoR4rZNFvi9SUDcikcwQeDMYDpAFKmRS3faUhd7v7A",
  "key13": "2UwSchVYdV5kHd5omFGADTjARAT43pZJPygVUmvZbeAUG9EPthZFBxdNuaYpiHmsHCT1ncR4XL2MiKd8tXE9evwk",
  "key14": "56VosjbFDNqqH2ryUKhSNZN89wQXUk98mE6XTCe9H9GwysxstHpxHX6RL6RJCRscH1c3njHG44c9iaxTCuitnHZc",
  "key15": "AWRsyLkJy5zPDDSgM14bo8UmQzsEJeNUvYCN4oL3QeJvhfEdvNnA527TBfUtNZco3DZ4rNfHfGBgdRfXqEvzmNX",
  "key16": "VMHJJrkSu9GhtFmZ1vZnEhGmD3ZizVeu8wqSyWdPJczppjcSTHaxRLa9ZeiF8UGazZEHpvRub8diff9edossQci",
  "key17": "5kosSrkj4NMLHMG2g8NaZ8tiiodNctrNokWefsDPJCNgX73oXwCDVWhx8ZWrktJEkjPWv3xrby5prHGUoWia9eck",
  "key18": "2jkkpuTskBxe2riXPhxHVU3k6NHU5FF3qsEf72941o5Mti52uTM74joi8qvkr9WoVgMmRCK4LvcrWRWAbkvmsyJN",
  "key19": "4VisUkp352v4vs7RZYWkxsWBw98DveaRQxeGiaXnaxzZToo7ZtTUsQXN11hAJWXan2PyEy2m7iXLjgakr4yyMKVX",
  "key20": "yznLAWJSazSP4dUZ6JcYYwNdnAd2SFzC9Bc4tSG651Xb6tj55oDDAHikwQcaNXo4gqN95xMNE51zMdnXW17Kgox",
  "key21": "iDvRsHASn4ECmznVDRamdddQsXJg3fSkQPcVS15GViUYwX3SSWM8kRMw43w4hAvL6pKUyUJvhg3QjxLWK77kCsM",
  "key22": "3rJVak2k7Gi6rKgtkfzSxZ86612VJ5N1WD4ojkMSpEG7TByG3SeNZTWBUnAopGmGZKXWuCabRs5kN5ZPFaREXQUt",
  "key23": "4vrjguSboSU75FVAZVSNrgPd4CR27CeZPfHRHikVDxmByHmgBBxaGD1Mb5FjyRQd49ZpFo42yNsKcAu4in9SdB5o",
  "key24": "e2rnpzNPoEU6732fz2VTnPfNyfvXzJrN5ZQfzrmFKbbpL3ms8CvAxFELBzdsHaxyo9Z1u4PJieWyAW42cdkwgcc",
  "key25": "4uVuhLV9KgXjnYiLeBb1sqbmDWWME85sbLjQQCyQhu7tQb2GrkjdpbAd6SYYFhRHxemzz4sYkQZmiUoAq5meUSDT",
  "key26": "67MN7EbbzDr8Z3FGLC189dkiC28ANiWLXCaeqQRi5MpCwbn5Tui7jydDMFgWNAVaa51vKGjVFxaRvBViXGpuoivv",
  "key27": "5xASM9SojhDq6j9PhFPd1KAaFDB2WrqptgdaMHTJVvUuUUrE9MFYQjCtd5FT4VBKd37MYWjMG46yHB3PST7dYmt9",
  "key28": "2H4rMY9ashR7LC1wQit1wTf2fRADntzta5J9juuE51rKCeBQkvojUnNP8UB4PBKKn7DJmWZvDSjeLHs9REyVF6JK",
  "key29": "4hGP1wLie3pkcxtziX1igDk5utfZoAEj9ZUcpWZpHMaDgmsJzpxs7tuqB37XsjrYqxVffkUcTngj7UA3GwNiwtgp",
  "key30": "3CEue9haizfwcHpaDUdjiKhQL4DpB6RjM7Y7LV6RDWNa8icj5ezbvU1LWNcrVyN1F1kw1SFeH5xjiU6UfWhBPcv2",
  "key31": "5TohEASz9Ntht5zXiZGA1rD9f1qwR9nojhSpD5jLGQDHcqsh7gyWsxtPchnmdsJw4LTJFTL3c4M45j9hTT2cN7wW",
  "key32": "Thg5c9rQXEmxUMVzQxqjwtxET4FE9GSoKyUJwzbu4gGQJUx8mtgZHiEdtA1JsxgwxfKDGqaHkQ6M3nTyjaG8SZx",
  "key33": "3Zv9zYzJNuSzEEW9EZdZGBgBgZwqzXVoWcwrFFWfgYQYcabM3PWKjHvF6heCELSWdYwxs3yq3FcwKEQ4rtJASsBG",
  "key34": "grWZ7H1xiBrCHSKvkv1tGU3oHSymsFCBjHym65kzgqjT8B8qiyczMrnmivPvRu7r2scwztn7xr1d43CKYZTzwW3",
  "key35": "47FoUUf9EmXyjX1Noxh4BM3MPgQUts1JZE1Td7vbT77iT6JoS6YyiUgGMYy1sWpnfrtTKVetUGqi3vG1iHDzTsdM",
  "key36": "28w1ten3S8aff9z2cRqn9RY3ojLm2jme2wja8jxEpvgwzVpwMeGNo9NZDSA7uUCY3SoCXG3MyptpopwBEsSC1UPw",
  "key37": "3Vb17qm8aVu8ffKshDLcdKGy476ppuhaP9ArtkEqqTEHEFodXyASakzF7Yy8rr15skTg6zxgb2n2JLiTVszPAwsf",
  "key38": "5A1tLGuWiievdUVaQKVrc7NE4NoG7UTkXknHyrNAsHjxoE1fWJCZRPfVNLeqsYxjno9mxP5pEm4nhs31tiNRmUAc",
  "key39": "45tpAUTinean2Gc1KdgbUDSsV1j9t3A2F2tSRXacaXS8YN6cgFwCm2cnoZ1fs6agB72HMcsvuidXLVxhCifLX1hZ",
  "key40": "3L92XxcRnLgbvvnwUswT2aXb3HLMzA768xKAkAKBy9bf3HpzJ1M9gXRvRMoYyCprEz3p61Ya6pjamMNMPpdtBXjd",
  "key41": "26wfxovs3mYjvsnCXbfzKYPNiyNSHFXxUu2VQTMgb3NxhiFdGLNAsvD4ZgtCGpW25GUnSBUpiTvCzoAP5d5BK1WD",
  "key42": "3sX6cCTq9UwEFrKyYCpJ9qW1h6eCY2jSUd1XowEmKvayYK4e7icJfvasFpVqP1YDVQskSojGuksHGRTqvyuYpQgV",
  "key43": "67TR1tqjMLdaNgsF69ihrXe3tYw2y9MGfuqnTNu5SXBZpohWknC7mX1gKGAHHsoae91aSW4uQZDnzQrcqiVsWZa2",
  "key44": "3JdLZzMhcNWt12XU3zXXhagnC1vy6HyowiAkaEvXtHj1ZZAfoRSWESe6K427uJWp3uSgV3hHjiWSPTRrbTw1q7fh",
  "key45": "3fGtewuPepN81A4rHNrQfRJ5BuMTrYvNnJ1wnQSh8tgUsCsQC98fr1s8yePW8g8vA2dV5vV4orgE68evcx7daHmm"
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
