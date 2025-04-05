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
    "59PQW9rAQEsWGAvF15UayFATascKBb3cELzHsFNfGzy6FWZ6AE2w9MFWhLM9iCGffdFahwSoAft4DRJp58avWukr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e5PVWeQpTdMtksQSmBhrJFKGL8sH1RAhRm4x7j2YXYZhBmiS4V4RKCwu2nKqxGnQP5CQPDc3tntUY5ExwRH4Gkf",
  "key1": "5K3D8y7fMPxC1SLjqKcp5zZLeHz1JpJ4hmiVvdVdahHVBgtFYyErpWTB4H16o3TmR5SRk6Qo6ctNgjxVaiWkWaNJ",
  "key2": "66f2SazHA1W3MPFCtHq6qeqVsaMeTF5c3eQeqpXXDXpDw2CdTdCgcrGbCgVU8knnQEADmmp9Tjw29yrnR7W4k8re",
  "key3": "Vuq9au5yfnp4JvgBBopTsX8oAoShrTBfuQZiJe6AVzDY2WTUsJErLgkHJREum9hTSFywhNeAyBaYdevtXdBtKFp",
  "key4": "4mRbcVPjaLheepc6haMhS5Zs2Qh77JbhEwrLdxVKj7ArdYFg4mdro5scHP5u8zPqqkWkYEN1VLxuCTZwsbd6ZUKS",
  "key5": "5t8azKyNW5Wi5c9dyYKXWuuNeARyrMVzGqYd9p3AzAGwnjkdMo1bmksUtBpxcWU16HkmGUUUjcY13sk5WJpf5NP6",
  "key6": "3qPWeGMZamxmMjXhfXurA8nRxXKi58bAp1WESfEzidxxskjyRrRdzfkcoAbnrpPFUTfEgpWHiJRXyohnJGRqi3kE",
  "key7": "5ZS7cCLr73gD2apc9tB45YKyMZJvcmvwLHgAUWQ9DRaZbxZeKScHikp7SqmMDDxwnQTmBg1jBTB1Bik2LSzxEHKk",
  "key8": "3JNNsvb8joQRgU55LEj1bR4VQByiUaxEVmqGA2awq2nyfQQWCwX5T1bbbkd3jBpeSYAeX5biDqtXC5g5T6xbhZXb",
  "key9": "3RwLvxuXPn1pCJZ5kE1XAjpXzYYwVXWpxS2fLpW5wT1RNECJaqZnUZmEnxBR6BEN87BSZvAhNmVqFUoDJ4mseUK9",
  "key10": "4uPEkHRnymNxTK6Vgdc1kdAhqBmJSuvAr1tK9j5RQuFq4hEDqAqQXwnnGCRXr6L1M3d2mumZHYtZc1whLQBxAdeL",
  "key11": "rKtRPS8MHJUAeiz27Merr4PrXeK2MV6E6gNArDn9q3S4aFvYaX55o2kSVn79UPfp52am5wnFLerxpTPwrTaPNBv",
  "key12": "5X8yturYyWkVazFNhhrEVVRidp9qMebjpkBv4vyjkDAufotHP5CKX5iq2UKKWenets7rFKCFKiwKjqQdLww8gAD1",
  "key13": "2nHNzyENMUEHEXms6nYYTL2GsAXUB6SYPWbbjvD4VXXjHaR2hLgCek66mfUBeb6PAgmNznVvE4fgvuS27Xmvqe72",
  "key14": "4jCZZg99YBYV2vMwZ77cGZyXwk3h879cWzrPEfT87Voh4D2VpPBpfCqHZwTap4GCBStTHtdBgmaGe61cfdPDPdax",
  "key15": "4Y4o1iSxA7Bz5k1xrZMjFw7HYSPmzS63W8vp8ahPwCV3yNZRJTmZr73gjkADCZ2GZ4PSQx6nLnRCLBE6Tc8jpNbG",
  "key16": "44pp7sXBHzJHYK4tnKzTkmb2Vdj2j2V3nPDVF1XZ5rGp8XNEExg75mapC8xoBAiqsixaTaZVbmgwfrZdCspcx2Vg",
  "key17": "67XjNzqUfGYgappvGCjG4LxLTWBMVDksyvGU16HH5Ltn2ym4erVH3YJ8hoN4i5gL117hkj9J4RY1Umx8VmYnGa6r",
  "key18": "5KKip1WaVKbyBCVCYrwFYL4BiGnSK9er75CHpXtB5timc6qtTKQBxtonB2P6WcMDQuWoPEheazWtibGF7wFSPMej",
  "key19": "2wGEcc5Q9sMBwkDZrHW7eszhZzD3JyTd4wp75D3sW8aEZiJ6C9Vopi7FNn8HVyikmLhXS4wLig4mTEFVwJ8jkiuc",
  "key20": "21LB4Bx5kJ8tckAN1mAuG8fvNJWiTRvEfZfkN9SLrMwSuK4hU2ZKipTDQ2CaJQhqS33GFPWY5KYSScPzqvsmd1yE",
  "key21": "4K51wZbEkwihHjyE6FKZ6qisU252pT5KN7DVCRndw6UzTBcJY4AP8fWyu7dGtiBqG9QxnN71nUTD7LsuJhxESDPi",
  "key22": "2htuivqRUdtPaRtbohrHEppFSrCTAFoQ7qjZXWsnw8sbYShQn5uiZaZsRJVucLfGC9kokyap8Hi8ekF4DbG9JU2W",
  "key23": "2MaHgaN1rbnrvvU7F1JPYv2v9CnsYjCTDCKrEKwYgrLvvhwGQzuid96JjhHNiefjT733njCectVXJBabSzkNnzQM",
  "key24": "RRcQu2ga4d5L7SKwHzT6S3a4Lc3fzYreBdymLgfkC5x3NEXMQcsj6eoZ7rxkJMazgX6TS63QvALMNGzSKDwLUDA"
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
