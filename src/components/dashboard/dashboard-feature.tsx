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
    "YBUFifzxqFo4fmmraKGGxcCyxoEELUsKR9skQq1fb3dx51tFVFZcHUiN6PYsm3VhKqYegmBU1hZF1SHcy4bwx2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5orxkczfnWJN2AHWSuQKUGUcKLsFGXqPowWPvX6U4F4LFAeGfzaxZ78pXUQPhiLuKJKexLEjoEfJ9CojG6heLE5q",
  "key1": "2uF6Ruv71S32MxrBwxA94yLQWBUjSsjNqJUSMFzmY4W5SnKdwxq3hUeysvuzVCPwUU4J6E7Q7aVF4iGUnAjBv6JH",
  "key2": "4HUJpbvRkYtW3gZ8tKdrjeFqf6Fg3Qy8dMQPWU9GYuKyqnnkWsv7NMCRG1t1TRyey1gwzaTq4NMHvBkbHVN5UnuE",
  "key3": "1QUm2LxfcgonTLqkTrGt8n8nuyu4WYbREtsDUvxmuZcFWmxnYo81hb4SKNDQAk49omJT1WFafiRLysYtDfwBVZi",
  "key4": "4yc1rVtR33iHfgrRCj9JMQN7Eb1ZouqrYBFahGyyCMchx9X2hVJ1Rzj9oXDmUbH9pz4X44GdP7Eb6jnX7wEUxxX3",
  "key5": "3Gvw4iA3YhzvVfv1e6LnBpkGpJHixoSiNuJr63dj3R8ks65wv8266oo6ctgQimJpetnrB7gkpNSf5Wru9ZuKkMK9",
  "key6": "yvTLEMUUmZBmd8syCq3QuHBKnY2Ej571oN6LQ9k4uyG793btDuwPzbwoMHXDWuXLZtuAhhJZ1f1Y9YkpYJQ6KhF",
  "key7": "4VhyUu7bHe22DZDMTiALnqWjc84nDKo2ykbtwzzDvb5PTyKJCvA5agD4sk1hrEHyyXCTUpRnssvA2L1DD4mWEByJ",
  "key8": "BVvThLyvRoUn1a5sXz88EhnfKExtDisZMzwy14ZL7NQTRbofKSg51MnnGvQ9h842Pzm2NXs1LqVeoaJGEBWR5Vj",
  "key9": "2YHwvq8YbZZp7NEPrS6uuPpV7v89ScoKi2qmNuwTJ6DarLewbzAbWByQy9i81XJ2fhNrBbyX62FX1iWnF88hG9rd",
  "key10": "Sp7f3PAxKaNKUykHr19L3yGKZLGncLcPwrzMVsQLTjM9YCGMWdaErRPtGGwn193GprMRTsmmN5G5GKydjobmbua",
  "key11": "8dSRQBAXsy3KPx83htZxEfFXmZwpJ4LtvMmKCnf4nzLLZygYJwrhhR6XDi5prx9cFTM8A7rsqWWFedkBA2R9rxL",
  "key12": "3AkpdVSnjCLzczjxdc3N2BeBpKj4oyr8WWDrADDjQHK5EPFaJGWwd4WGVNyyzbtseZrrm1yf4UVZjiKaNwjKV5V3",
  "key13": "prPGoosZDJsF1vDWgYP9CLbMiCN2tYAQo3vLHRvZ7qnfdcxDqNmFqZUczcLxcb4ikcCpjV2ZUbmgQUfKn54E2F8",
  "key14": "2kh4Y5EP6iJNGKmddobU5ceRk1xBViUC3jnM7s7TcG6nB8MYMPay1f1AsCaLqp2PTPzWVnGb8i4LLPHyJaY8QKLz",
  "key15": "xddrsqqYjuKnot9gyZemS7KY8j2Tt26rR9gvQpXLCQr2gvrt9aLGtQwnkzdG7VutuUx8x72oBKbjHjp5KFtxnmN",
  "key16": "4VN7ihbv3bFWuK4tLmiimRD5KRavGR2UhxRuYx4buXvkptHfPGZMx868mMEJ7bVTYiWmBRk7cWV4WCPk6bqwX2o7",
  "key17": "5wrfzZYHqsfZJVg4LiqxnaAsoiZmP22SKBrgPsv5f2tMfFfyLBoo9FLfsXsJjrwWSwgosoKiamBb1NR3g1DsujZJ",
  "key18": "2DLzUGssP9jSPFBQ3DHeLYDgURkwmVsxKmfjURVUnWyn4kN1ja1VygPszkFD15RsvnvL6i9fJVLV4ZrM18HmcTMR",
  "key19": "23sam5g2PrUnZzgzGzq3s1QAHZqUjNJUhgNx5iUvbUhDiHnzxrf9xBA41ZRYgeVfyrC4PcxiFeUrYQmK3RKR59HJ",
  "key20": "5ovdk1utKZXSfKPdgW55tknNeUNCBPNjTp5htCKZrG1xtNNYHSRfRdmiLEo7Dm7gi2DrzpPeDSDdd4Law1tkSA1r",
  "key21": "2Z7bfVi9Rw6hVqyHU5Pg67gdrxkmDwUWq63ibKx7PXFjMoYSYuFzVoqweaUir1GJWAwa3p6xkpR2y4bDus9KP2ki",
  "key22": "5w359kotn7s1hSZL7mGUPvptn4AEMPxDAStJJagpVcX7ZpV9uhExyJni1An1e71nWYNk26tnw4xHg77qk3Rqs1R6",
  "key23": "52Sb1bhCDx5MezmzrCMUv6pcNAxCk7espGTZmVAdDKe9LNgShWxmXb4YViQtaUmGyDNhL5phL98yLQdQoRhzmADh",
  "key24": "55WnEPFQGkXobozcyYhBYCwQ4zs2JNEnhubUVvX9NzWtYk2355CUvetzy5vDbM7bxeT6BVJvbRYfNN9joZaMmCb7",
  "key25": "Rd9LgNssidSRtADShTfV319sRjBF9aw49MpYwPjrxXthiiQgsNF8A2L2Q9XkM7dp8nk5G2GoTdm9KdQZZ7W5Y8R",
  "key26": "5CzabRgR5oGEmPP4HVRKoH57Dfn93RLcfmWuFwnopzNq3k8wJXxbTHehFaoBMfUsjvP7fzYo5orZ1hJCTQCb7xKF",
  "key27": "2oqMjaUq6cNcb8BwJa7LBQfZmgXhGZEB1uGZFhxNgFaCFxyTAUAgwy6Q3HqViuUkbUrqLqFobfEkUFrgPqxUpavN",
  "key28": "2B1LV828MsKZ2U4ZnFc7gKFF6V6QMSheMsDDVQ2PFbcuUXs5eyUGaQ8sg6oKeX5KMgjmKrz4eAJUjTkLruVF7yEB",
  "key29": "4fot9thZ7oMrebQMQArD4Q7mceY3xgKQ85FWEnPX2wt8zUSFG4C21mogx3xoFoQ3mfRtRjhVRM9HQTxRishs26H5",
  "key30": "5Wr1JHqqxYGfC6HrisfP3QoSUSuSPrwtLahxP4aCQumv7tNsPpwaJkgacU21aewN9Yw7XpNrS9e8gfWEzgDYwXWR"
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
