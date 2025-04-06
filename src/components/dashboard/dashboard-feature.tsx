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
    "u84psiH4ewf3eQnxYQkh6WqCxvC5CSGj4Dh542tTsBCfQiXibGv7rEcgCbhUEDj532FKeMBsdBL3kT2FqAgh8kw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qj125fWzZS8tFbY2Rxz419n8tRsh4839aG5YS27vQ6hpb1aVc6t781zX7RPHa948VnVkpNeWoTDwGo93JDXgbvq",
  "key1": "3EnMBR8wwyuet42M7U1gH2XDFEPWkbynLuvEr33ETZDT9aCWFskZP9D4NDMex9eNBwDRTBvoy2xTvhvM7xNRm1VR",
  "key2": "5roEwPL8YpnfgWJfJPkGeFiGxA4rJpPWsP5MCUrc7wKtU281heEPCj3hjJmcdEZMwDw31For9hLHMghKXjYqtQzT",
  "key3": "G6FfrHfZdex2AeZgxsa1nCy45wxx7j4K5f8DnNeAqKfUBbmCmJPp2AiorrrHQoTx7KrcxcHGEE5PWtU6r9FeSda",
  "key4": "4hvk16g6n1qKtoDMkXiehCBn9Xnp1anGK9nubyFjCrAJWdmaovUpskvB84LZH5H7HfBzuk4KtGoTk8Qhbo67PxYr",
  "key5": "4o2GGzKpHiJ9oBDqJzjGamru7gZX6eCm2MZH5haUBjNSkS2hJ2Kc5boV4EE6Hue1JjTqHwGBfRifHVRMs3QHUpJy",
  "key6": "2YUjf9SjbBWkx4sWuxt2vteCPwfEUXVqw8M2iN6dqP6Mnon2i41vrW8VVtgEXhP4uYj49LMScGwLcJXygHMaNArX",
  "key7": "48Y3Kie96RSjnUn7ZhsDs4ruMh9WxWnJuXh4Ez2JuhaGcqrgTkrF4eqT6SJQM7o7ysFMFXQSJ8bo5QuvFjcf1XPw",
  "key8": "LUjtP9CGBSqAKC8Hg76jqZtNw1FmMon6QTmUTGWLFdd4aSURoZkzML4vJoCv2ixWHUhzXLmBJpEaErTVMZDhKmu",
  "key9": "4u7ANkc8dvf1k5o11Y1x8xoUCXnwneX2KPZtwiw4WgaNkYfwq6aSfwJ9zEsB7qqmnhPiWKZvMYXjsZfACFhvKTtU",
  "key10": "5bpbwaKLoN9RQ7yksAnJk3W85fddEiJ59Ys1FQfYJrQov7SHxrcxMRVPFnr9aAd7nhvLPoLFhWqAcdrW5XWq7eSF",
  "key11": "4JNeonyepLVcg5pZ5mUUSjiynTJYfY4GHfPeNgscz3bzWocJ7ujTTxfB8oSbRfwMutmikbJrBVnk7DbXM4d1WAhc",
  "key12": "31ShJKHrh9vX29GX6cBHv1v4GhAwHuaF9j96tmnzCtBGbrQRYrUQcE4t2Nzva3es1tbiihCzr2ERGB8V5YeTyQnY",
  "key13": "3tBtYCa7hbxjH6uqaeDpW81opmfTEQpvuWDBhqyjy7U9BJEPLKkPGuNMiJ6rfHxKUuKK9F6YXqWnsaEsVabPo1J8",
  "key14": "5co7sK8Lvn8ncoTFXcRGTrhbrU2ePVRA6mcRh44wUtfM5vv8bE4BDQNTJDq3YUWmy1YUeFkQjUMpnw5r3Lds4Uzr",
  "key15": "3f4n36N4oqp3fXCaQEbGm6iXwqM3BxNoL6wH1sqfTqe8iEcALGawYE1pvi9EewfW8FQtW8haZ57VFikBaRfnazef",
  "key16": "V5cWQXutaYdMWFCCMi1WRTdbw9ufBofuH6oAW4hjzRaSPucjjyGcoXNnesh7DgatEhshz2Ei8FPW1QvcSr6hupC",
  "key17": "5gYnCZ8tWb7ig8wLd6hNxARXz56dFuQP3rocwXXTakXac9NUuVKQKnUgNXCov6s8hFGyFQtERsk3Qm7tdpmTkVmc",
  "key18": "6h5kP22sJLWXqFH9aeGrmEx4JgU44UaiCh3DjYLmzxtJLQ8TEXruahSHdZSCedyyb4UyBHDqrhntKR5J4gEVT86",
  "key19": "5GzNNPtu3X8HmLmwFNtg9tiQAZxAjpbGajdjZjLbS8Q4JmCbTsuXZFBfFZTwQWA3nZDHkGU4ydDVDJe1sZ6rtoKy",
  "key20": "zYH27B1HRh7GhVjcHdtHWrTytJTsS9X5Nw99kHiyAa9cYLjsGELZ6f2hngv3shGTMBfAthDL6Eyi3FwBnGeeKkG",
  "key21": "5mNpQaoSLFCKXYgHGDdnVbd9FiCAd6r7sXjSqtAYrDDh6Bbknn6v61vieiunxrtaht2vbxezbaL4dAvTizYCA7Fs",
  "key22": "4JwYZusYsLVBRrxGZnEQvX6U9E5rWhtDXp2sMpeGj2TvZraNT7FDpvDJSauZBXcc3xGUn32BMsetzdT6Kf7W2bna",
  "key23": "5LCutr7eQZtHDK8BS9Zvp7T2ZuVmkp2vMMXjUeiAWfhch5Vme3Wic7PXc1xmYGpo3YV11SXLBLx5f3bT4yj9Y5fS",
  "key24": "3x7SjB4D2vkjMPSEqTNpVzc9trBdaAmFPqAH41sy83T4FSbe8s4GpH43BydLJQBVTKJ1b1pmWKw1bk6wjcP4R1eM",
  "key25": "4Zb2rJyuDoXaP8s3mZbgr1BKTuAqhs8hsfDHqdxexdQnZ24ixkZmsz6cfSNuqxKaQY9BGPV15CZ579Wu1DozuXY1",
  "key26": "3GJTTkeZt3yNxML3GXNC9RHH53ZWQ4EfcLVrhq2b3ziAkGsyusijizqX4wNy5Tx5dwrCptDGWWBNcxTL1TEWeCg1",
  "key27": "3zTUB1rbF1PPAb5SYu19o21tCSsKDWwfWRtWLukPKPSGMorUGxkRds3xzq6grBnXrmUbqHZvjtqsMSMQzkQfGKQo",
  "key28": "1274bJdQpqJr6hoHWZ95AKvr9rd8CT4UgQM9WzYujNCrVbHiBedzWSumJ5BskU6Bh9zBDpEEuDs3cE1hpQSpqZz8",
  "key29": "muTR1z8FzYMrvGMVdjTFCPRdrb79MLALAmKwR5YnF5bEYG8tUBSkrArhzdvvKRfJLv8T2YxjQMJ48CMCjECvGtR",
  "key30": "5NDnaCYcG46RxkskkZCQSa8Nc7Y9GjSEgkuY7nEHnBHvoLx5r7MAFLkynqN9ZDiYBbnBibqD58FR8GBjhwNybQs4",
  "key31": "2iybMeuZzBBjHPTaWMGybwnPdbhX7L9cRTSMFj2kV7sMxAtB57B5pdiNRM8dhwhqQnfXEymotYU2i2imaYRQ6R36",
  "key32": "jAZUUqJkh6cmFEzSWaEwShyDzr3RuqtBtFTAuANkBsGr2ifQenqh7HUz14LqjgkQRL4oFC4VKE9wEcUEyCQXwco",
  "key33": "P9Akmy3m4Kn9bPvxwDFg8FBEa99cjTDAaTEZSiJ5LbFNTyNVPPNBWsjdnEM6vRvso4Ey14qYbLX7iTVCpcyUS8a",
  "key34": "4uQTQKyXA12cHjRKTpwYgPzBbrQShQNLXpkQauhN1Gqp93ehFQbCu7WJGzZ6pHRbrUTW3DJyEuvz4sTChEzkbKgE",
  "key35": "4Ey6x4py957gbehm26z96HuVTiPmiVSvDxqWTVneY9ihzKkuA6UGXyTASeFwFhXP9ndMUtXjWiofS22uLFzTrnJt",
  "key36": "2rwRzkBi9MgiHdaHGv6hvc5fQyAS2628GCo6TVUkXGfLhWZFgmbK8tLeXsZfdgEPAnsS2667ctczfmoqpN5X8kj9",
  "key37": "5KvzR5G8XMUnJnN9ETg4Etoyzq7NGhUzSA7kiNeUrmgExqpMBzJuuNhwfJfyz2LSPQFQPHwR8NJmS1k8vRvpMFrM",
  "key38": "2pXFBHjL3JmD494z6UE1UdEeTvTRBJ6zD2TZgiZHH7gP1NxEJ1FYZnFpy44zmFBA566M8gFQ68dAP9C5f5A5PR88",
  "key39": "awmWs26u6EKsxLfnu3Af9YmnogAYVGnMB69N4p2TRQQZACok9sW9mH7RMNjutZRWsVES4bNTDvstEbHfsNnUjqz",
  "key40": "4RzU4R5XeVuLvyZJabrTwcmHFWQizSPHbb4prcWGPmXzZVu3w8C11EFhU7wEjvHtaPoBz7haspgkDmXKo8mGCRZb",
  "key41": "4PJiJ1hXuAkBw1Kr9NvSHJ4oxd8sjYNBDgTm5RS4oPVci1W1Ewbf8fuzVQWDrNVcyQYKyzaJWFAmUxB6bRXUMwkS"
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
