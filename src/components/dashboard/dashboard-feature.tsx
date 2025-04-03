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
    "3i6miY5oAzsEjtHThQJnLvRaYGxGRE6nHiPGBSWQwA5aiMjz4eVHYhXG2BMcaxFDs5D5TQfgXgjoQAKgYnBuAdsE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f8sdmKs6G5tfyJrYfGForyZ7qQAfVFBgd6EkMDaRjJcRjo5rbY9xvPU35jYmkzN6NsqyyDqJPVCm25uCciDUwrC",
  "key1": "43aWASW5Tg1VEpw2AEV3APx5RMAv2NALaigtkFt7QhARiwVCxB84NFofRFSX8n5v9uMxqovvZYHY8T9vTdK7zNZE",
  "key2": "r5d7hqMR82g5z9mnDcLdgC8NKsU8UXY9XNUfGK71NqFTetqqjMvRwWP2yRTiBCrr55spwqnDShnnZnaSBbdvnc6",
  "key3": "cWqXiP9jTNCCzviuoPz6usTrMKFVGCpdXKcQvaZH42GAj9P1fJF7gHEqPb5Qso7FndnFJXnVSTasqGKrqzgkhqb",
  "key4": "3qp3LNc44Ahx932LuTk6kEZ9MYhaJhHb4kZyW6hstWueB9F7BdHhNHGAHEg68mwCQP6QSSTwZ7XQXtTFCbT4cPFz",
  "key5": "2nqaJiNAHBZdGyneyHWA1mpTbNNuP4eeEbFAbpgZEUH9jtfqVKapT8cYMu3TfC6KwZUSnK9NXQBUv8kySLDV5Pcq",
  "key6": "5XLZ4xrskZ7W2Ch696ELFwZJfxpEnSH5qwUhq8FnK9ufTWbTvSwrs9m1R6cq7C4wbyA3T5wEKEjqUPo1UGedtgJu",
  "key7": "vBKXqSpnC7nRwx9j196fkfRMGbpMh2KGKYfBbbMyXmWNZKqf1grfCzcRGUUpBeKyCkaa2vzzFEpCdBb5qkW4dKX",
  "key8": "3uk8H4MyCUXWfaEERcFLJhu6vR85bBJJHSNWEtvcJhAdvu7KxKfxUrn7f4GcajF2M51N2fSSu8wzwoYTBpfEV5GV",
  "key9": "3xkfRqt99kwUrmTrGsaLQUuBvSp8BiiVmcQZPRfXx5oFQy4JCy3WyqeTMmUAY6Q25E7HvREnMUpKa7yDRPrD2MUq",
  "key10": "3FbtxhaYYtbxmZn61K85mejKPqAGJjrrm8LwK6wzTzUd8v22D46c2RnXVyr1z6sPysmSRFc1K4ZioXEivwWEm5k4",
  "key11": "5PtdS6AUthJCypefpUGiZVKYTGHkZ69U5QRL9sMFKip8pYJdxZ7BmKk28K2qHUgq8YpQbFTMTTPiMW52RZvoX2kj",
  "key12": "4XgdA4WKZpAHmswxTyTqKeU3mDVZoXztpRGJZiYQQJeWBceBSEMf8Sytf9vg6DqDUmPjHR4awXcr98QuR8cAWfpf",
  "key13": "3aVfpGnCrfoCjAuBayWvPavJZJjHGLNBM36W8USCKLeqbCie1i9rFENhmQf6PZEbA2iYUanmMUVpec2QGW36RmMg",
  "key14": "3aZenesAe9jc1ELPbiVMcaGbR6W3MCDFVqi65Ak16UqMcwa5Pw1WXfEzgYQAsVp6jcprv1Njn2KyZaDrLqaPv8Gi",
  "key15": "2rfSsybZVc5XgQJgurv2PJRrijjyyrssJwL9tTZRiyKiWYemQdBERijxDecLsbutMCQtUmkg5Fkuiq9AShuhcxuw",
  "key16": "41rVGnKsUSm83eacWdkKMbVDCufqEg2xsDuiQYTQi8LBjDFEU8hYnKNkWAbfbmwtq3PeeZNjEDEVVLHZnB9utAtp",
  "key17": "4QXVNC9wYxGkM1RiZETWsT75XD3oTy3wV5AezCvhNTxF8hvTYA6sE1nwNzdqcgNx46PmYXPAEZu5fWk7if4Yy3Gz",
  "key18": "5RRBQ3wDkKEqqsM4HjCbUXA4486RZJt2Ns1cPwYr99znZVc8LGb9UCZUPbrzRpArHLoF695qqNFxXGvimXy6PKow",
  "key19": "3xrN3vLvz3BioZnmNHJofP9KNNKs4gRP5yCaRr45JmmzShofVGoPnGFJ8qkD5UXiMVLU1eAjXtjpZVWCsvpM43LS",
  "key20": "QLg6BYhcSCojCSSMNgvc19REAmnCdz1aigq9LkwPP9AjoFdYueKGH6eV3PwqppdB5nQyF4RYFrrt33sUHTQaAHL",
  "key21": "4nTS1LHzBmovDvCjibNdpWbouaXCq3TmGDem1TYwgA8HMYFWxTCzhVqTdzDG8WTLrG7uRoK2DtQ1b2CoaJMMkRcH",
  "key22": "4kkpg7WL5XfGoXuxUYnHXQ1Cf43zZFCz5VzntX6wCAaieDBDLHXBk7i1YEtcLir3YJMD5kVPvESG23rdeDuxwCrV",
  "key23": "3pJVib1HNYZnEDFxQuikx5QeRpSn9NseJXhQTpHwmuZbYeqyh3SZs5ffc8udc7heoaC6XvyXajx3xmLxv4ThjcRg",
  "key24": "2db5i5BK2U9yUYM4oDm4aTY5yCFaVoTJeQFrVGJKtR9tgqY98x3CYXC3MXcAifw4jnAbuJCtT7qJESnZGBhH1Vwq",
  "key25": "yF9FmiNYNrJeKSnaeGPiD4PWh6Xj13JpKtcfwjATQPgwkDh87Wzey4eEWXGDDRPcwNs79RmLm3S82bvPddnzLQB",
  "key26": "3HaUaNT5TqBaU2zq8j8NHM5KN3Z3EnGxf3C3MoituD5jvfKGtj9iu1WpawLSjFGP9Wifj8dLRnvve3c7zpV9vMFs",
  "key27": "2jxyBpV9KfMQyRbF64cVThskXorLpkZ56PWNxDpnKFGx7QfWbojkPGypsEmDU8ieGCunmu7noWa6jmPqG9huE61y",
  "key28": "4ZzHwEYRNvkBpZSiVyBeMvVBwLJCVkgkXxMxLLMJBP1yo3ieV29knnqEp3UzuT4Zi6m4VRFuNgHWcFCiN5otHRy2",
  "key29": "4t1ZvHjuaAhMMdVxbAXnTKasASbfkgEkSqWsWA46YJW5cYmPjFsUBRGxwj2dTXJmoroxQmPeBM5KEX5UKfSQdzqh",
  "key30": "3GScpmSLZPH7Ntf1Y4omSuHTo2wEiogiXix7ZRAegwSM1oZFwkYPbGJTJBV5XvrzFDuxPn4DzhUWoQTAyrziohdR",
  "key31": "5kktEQMnz6GmSGs356P7ZCNLYS7asouHbmVtsAUyi2Zm2Y9sZDgk65AyTYGZnmy3xMd735mqNw7Us2EzmRSosZP9",
  "key32": "4VyL6PNbbBYSoH5nGzYVV6S8qvwCsnhDghnYvhnCfak6hXGiFcWsx15xTohYQjsD1RStpSxoeB3W6jRnAYpkFWXy"
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
