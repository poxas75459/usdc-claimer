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
    "2BrApVtBLMUN4qivEuaGYeyc8L3Y4TDd2qafzjXJRxNhXNHCLAWU976BPqEyGY8yFBAi6qC1Etx7oAP9FLRFn8xb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7qoxs58PuptDKAWa3xmqeCHyT7enVqsTt7Xfk2RnN1C7MoZcEHNqKQ7gtqKieF8rJBv9FChQS7zSsQbvFhhPsZi",
  "key1": "2nAQkgRybRR5F1Mrs3nbzACZyhYrCb8JGHxAD7AhBAFWhhncFdhRvkhx4EoGBHqU4tU9e9KYkR7GKfPN9kASb2V8",
  "key2": "hLd3VMTG9QoRM5XBRNeJSDSBWPcvUFJj2WGAbgbi393BQHbqvhx5ETbnFHBrdu3uATYbhLko43trit1JVw5PeMH",
  "key3": "5kttz6p1p8JcVyQqaR8kxhMLL6zQytZNcpLpdpNvvYXkB11S2h78G3xHwNNFBAoYJ8fWfEpmEXUPrKsv4WJ6unKc",
  "key4": "4s9LR9LohkRdsijSoEQrJ7MDXrHokYiq9RgT7wSHpcEo1qMgtbBkuuo1fudgcCw8Q3UQdeFxwBnXraVSrf3KxPN2",
  "key5": "dR5Net9haqJWNFE4d7pBxaqiE5mJjMRtAmtbPftAQigd7SwCCMRxbqCvgjtf6dTqBwC62gr7mqUVNkKBdyUU7Cb",
  "key6": "4oJQxiQftkHy8PdKxQH8zPH9pahAkZJWVDFF4uMzfLRcJXRwtCeXfyMxhfjfGgX8bfVBxg7RaYRznya7DPdVwaGw",
  "key7": "32Z9bBDpJDyez6iqnY3dNBmUDmAVN1Gg3ASaPdW5zt56UZTW8DF7UWk7C5zM6eiPd4jPNdbB9miGEFf9ak2jdzTS",
  "key8": "2gWLKD9ti9amdS4J15CKPDBwyKgsvF3GUFwkMYYUVxbBb9mS8bN5fjWgv3p4dGQx6gAKWNSCj26siWpjX3vTbCx4",
  "key9": "3ja5WCHJsW2UZG5qrCg6qVo4Y3SgaCwyeKw8rTfdsedHa6okEjSRJeP4cCRJi4hyJ5fC7jCwRySCactWMe5ubSmK",
  "key10": "5qZCb3vWDfhxLuYzBMe41XpkzrBH1xZrqYh95JTMVqnHYu1W6xguvnG1nQY77H3Gn3ko314ccpUKjs5KMenNQRvJ",
  "key11": "3gCQa271cizen6RvPWvM47kZtXvXs68Y2KCGXgcBAn1EwpgLvyJiVdj18xtqHFhdMhUB5rDABLJZS3r8CgEoQtVc",
  "key12": "2y9gTanzm1h1u76rHjNAvBnD5sL7xxY2TDUvzDxTeVrKPFBrPdwvn6QMCnpCDoydBuMbKfPande8JbESNwNzrzsZ",
  "key13": "4FhmT3KhUR12cfhay7vbLFuiWgd67WwezMbX18zLEoHyaavHRR8gA16Cg8ARdFev8yK8RAT7ZyF4CqTW8jSjxjDD",
  "key14": "2aDW1SMucwBU9VgABijF6HC9Jcmo3MZM444JjCTRcr1HwHYHd354qX1c6ankHX2Zr1y9HNZGAJUKZ663VaBgc1Y1",
  "key15": "3fEFY7N1khMAgSaKtH55vxAWd2jTuE3TArvrxkaMq9NBxy1gH6zmiTCVhdvoDiTCDmVzHc5MTj4cqJna6Ny8THup",
  "key16": "4NMFtb2pSdGskHoDJBm2AbLsG1JUVkQkv9d5PYJ1uN15N4cEbfwpu8VJ6bMgMvzkHTmapumoPbAFnQt3NdsXGqVu",
  "key17": "4fNFneEgvw1Aw6zUiDBDbLiEzePXqGQVDiAbJD5jajCpEtPaR1ee2Wjbt2oJMB6bPZkfJ65r4V5udfnACqZ7cvxL",
  "key18": "53G2s5rzsKcQYup7qSWsQVyTztdMGdtuszApYPQoovhJENRm61PtrMrvAmCaA8MavpA1DiW7jEk2TeP1rteNqrky",
  "key19": "4Fbsomjx8fLkwgyDhcgL5VJbfUFg4YCDUqsFaw5Ai9xNSxEYmJuvLqcmdBE2rrRMZafL22Myvw2BrgZZ85CZJQW9",
  "key20": "DcRiVySawqC7c1R4TFtX5nUb9TZKuLxXT6uvzFkmBaRdYQuqR5dZQsQG5ySLwxP67te6GbkzzeuvYqc4XhXKmSh",
  "key21": "gF5gMs8v8xoNPGPUnmpzWPH4UFSNYdec29YgkvVCpz2rL2Z9eEAYxD3XnrWASSAUp9ptuS4UosYLvd6bERE3EGc",
  "key22": "4PtGjYW5juzmEVNR9N3gTX5yLNLZb148BjVaFjLoJ9wE5auThnRU3aPgGjxWRXGk9HWtKdoYskwJEinbjLvRsgYP",
  "key23": "5b51BHZsCRnCwrqaMgQo1uDrTiE21jvMvVkS3gLTDBoF76c6iELM6v1i8WNbuBDJi4qKLRSXMLZSXDawyLB5ijCd",
  "key24": "466dsbuYrkSmux3JbX6LraPmSZZoYD9H4ZC3cfwVDKiqeEEx8sCBAryAxRPMr2CNpRvWwwxcbLMKPHVJtxDY7Hnd",
  "key25": "dKDsLb4i99qq2n84E7RqjY1MBSy1LEkdbJZ869gqWPMFa6uvMi9gpHebVLSYgeTqfS7PjYMT4meyho8qUJHGXHQ",
  "key26": "KLN5PaEdbXYLXJUXLAjCNJCzR4F8eBUgLruBMeYnpqjcZSUc9RgtAzT7L3PErFgJB7knbVd3TK6cM8BatwXpbYJ",
  "key27": "EtVyt682WvFccoQ9A5aBAi37je32kMbXtfV7tsi4dMXCRokofrRUvyEgfaFJs7e9y5rkQc2JtF6AJ1wFapZRhsE",
  "key28": "5nuP6dATqbRmXpYPF647CovQfM4rT3uJLXLbXyaSrPYp7Ba4bkmRoEphHH9HcZi5nCtzrLPTmiXBL64UGDXjDzUR",
  "key29": "4jcyWGXK9EfLnqQDtemybrwzWNT8fbrRvd1XiqmPzYGQiD9yhanN1RVidgmKstEe9wbyXvKfHaHh3cUhQmwa9CVS",
  "key30": "5K5DcPPFe2j1SBwy5uRQUaNT2Ad1KYhjadqUDKdp2LrBHktuimjFXC3ZnX5wxkEJBwQLKPUhzdRUUgyDcyws6LY4",
  "key31": "5zXC122ZCbareGNY1oeeuTg7J6612MbZbHg9LCSSjVnYHwjgegr3qcsxyB6XS7i86yjh2FQ9WJE5aht86pLWKobt",
  "key32": "5APrSKLmkiAW5koADFofyRhEmxbqU7kqKkdJuMGs9NH2Y3eZPBG8p1ZYHT9Kf32TXzhkJbbRg5GmwQnk6LemPm7j",
  "key33": "5qHv1guGJhKNTkVNvpxB2k5gBFXQJqSkQgc24ceE4ZLFF2vsq7TngyX3pbWeTaYVVQQjbTxCKKVtfRfaRiyvmJ4Q",
  "key34": "2zwmT8E9vmSwUtKfXRiWVXJtvmCK1C8h2Tzh1i1DdPRwJ3Bzz8KtSXBQ5TbKgSmukJW7bxunL4oP5LYK3vEMVTfA",
  "key35": "4Xz4Dr6hR71hwLkQ2JNZefnowxiJthXvFAGz3q6roaoj83U9KN99JoENxEpFgArBUrUSGotnWExMauHM8dLmcdbt",
  "key36": "5YjEgsF9sgjMJzW3N9RKxzfdPAdyXxFY7UtJbEhT4b8JneV7KpXfNebiiUfzaLRYJ9XAGN5Vgqd3fECWTLLjhbCo",
  "key37": "5NfTfonfebEwf7yxT7y3c5HHFdb9mzgLTanioX8Wu29ENcHukhQ1grJtTNrkzppJjf8CTxfh4nqfBgEznJm43bZz",
  "key38": "5KdJtiRkY59z9h75s2nTkNvDEUMJ51dzkUP7ARQ9U4jCY3ZBhB5ExA4wiEz1ZMRvLxd6Xdt6GrcppCTDcSJwxrZX"
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
