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
    "3BLNQffwxGH1murq9d5HUq34LDSMDjXzpYzqFwwU2cs4wRErxeimcqZAFj6JNsUnuLkm5X2jRnKGrM2C49wxhe12"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NgNSL4fJsMJeYprubq7i1bBJ5DFXgq8RCNjLBmupoLB7dTB4gUF219XtYKLMRD4RnupaLJYtpkhsZxX1S8dfuk9",
  "key1": "3ZeaUaQtY1xKYCh9BFq33doLVDAWKAc51aLYyBo6ChE2bRMdnszfqUVLZWgJMqGWb69nBovNzNL2CsfpRYsNsM9P",
  "key2": "3V3Zf4LuMzonuZrJ2ra3n794MnMvvmS56K4w11Er5Lwztw37axtBDV1AoWNy6qXQdzhc3AU9rVHCCfGGQXQg8isd",
  "key3": "37FPs1poNUo4w5rXmVV7jcQNURJVw9simEpLfUZMFDiu1EfKZa1eS1ScihKkwYPGo5BZj2mBefQoJBL71g8j3tQm",
  "key4": "5YDFjWnKL3Etpzgqt9TKYFNNb52GYhDmVDRpQTN7XYWg8jS7iR62JyeN6RYMDhWsYnE3yDWLFFnjXw6foU5Uxrb7",
  "key5": "4mhikVkgMfQ3T9VCZNphc25R5k1gwyLHXc6NQHDpW1kANQkdicFEKELXTQQu1x8jPvNSJYyekwHAuEHDGKy5sbQ7",
  "key6": "3mYt3Ym6kUa5R69qiZ8ifFHN922vv9PM6coxUouvFgvxCD1XUVx9VshzxE49avWGgdxAnF9Ha6naDF8weVqqtRDi",
  "key7": "vJXrx1qyNFCeTFwsq9oQPUzv2vnfyP2iv6QjvsJi9zxqmigida3iZZKmyHA8LMcgyRa8ETosE27GCjukCXX2Zph",
  "key8": "5jmLVhs94trR6DsSqnwmu539isrh5H8s4iCKar6bGr6G6jyMxtwbNmcjFojR1i3jAFXhS5dLGCtAgBKZWUpie6d2",
  "key9": "51MxroDyuWxWH3ijSYQn9pnGbuai57FTYKv75vmeby69d2oppPQw9JvzVvCCggrFhHyTxQuk2hJfaEpfUcBQqGLw",
  "key10": "5aq9Z65eFZbCma3ni2hmsZpu9yZMVMYGctawSxuGmYV31QWFr31XEYMCCoxDMCsQGNBmbhWRRg8Vp7jnLm7MEVNT",
  "key11": "2ja6KgPchgy7LiHnd4c8XJHa4AQmXH75S7iupGyzqwNkLDFvSc8u7eAZZ3w5oJzP5BfhccHiGcoKSFE8hp3ketKA",
  "key12": "4qjEjuq9MgsdyDwmkfqGEVPyG9HcxbAJYzLNYq6zdRCYkWzDAjxQWpPNJ8mzFRY5rf9znQsgFCDSK8i85wh1nYrQ",
  "key13": "21Efgf79F6fGWKbbutCxaGhh3CxhUS8kKwuT9qyQcupwB7U5J7gV7NEQ9WccXThfY9vKoLR6nSBeAXv51Fae8oHV",
  "key14": "4PsaK8vJ9FN7w7wTjdkQxnz7wtsFxU88VodPZAUHMusuieDg1uicAUBjTi8mwsyrhFQE1yGfBts4rB2iaVRapakN",
  "key15": "2HcSLXkZpwpBR882ewFB3B1FeEaPkLC525qaHimGkKcujsYrJY4xWVaxqhm7gCi1UP9zzRGFVBvLEtgzXR3Uiz7R",
  "key16": "4tjirkRvMVR7akFB5QeS8jhutAU4mU484zGNKvjT8HwdP2aiNffpc6NBDQ7mtBBtbEK3hDnpgwNNgZTpHAEXrJ89",
  "key17": "3ZV5v7yHipY2Z3R3tCUGPC1xUYj3JLGqhcd5nwQMFm3AFviZup5rCBHBUJLCw8pJv1uKuPJZ85Hm1K58FFMkqj3L",
  "key18": "4C3gq8ueBLFMNGXmingkAaCEFBtU3cumShrU9oxxFbfhywKecWmPPR1DeZ1YPfkNRwLzNfeKhbzoHv4vR5k8oiys",
  "key19": "4V9vS9hagywi7MB4QCTPqHMpDn2qteTVqFPPUNheupXamsS1LWrUaoXqppdyCC5E1xXUZFWPVR7Hgpm2xNkWSbPC",
  "key20": "5S1AfDwVbFArA8mf1o5XgiPtnq6hxmYPAHQgLRrGHKr1Bi36g7mbQbMKmy48KW6LrmeckK8uTEBmczx3ViqAKDFa",
  "key21": "3crKhvW5JwDDEx5kgmefaYB7XXrVHMxGAnFitLsBGupdJmkWqWAw6riqaM5UXHbkzZY14hKGiBibFHdFYMJwQ67T",
  "key22": "tuKHe3jxWs2q4FcRbcE8f35vDPwc6WD7cVp765NBGKxDMCnqtB94RM754VMKuLqvKBQnnjfSBfdw3ZRqM3SF2pY",
  "key23": "2fSfMYbgc8qwetcHs3X5mf6UFeKmPvDEWuNYPQ1MoimayrZQtdNXXqE8xY1Gjizo1Ym6KgX2WEfLmGh4Bhr4kmPa",
  "key24": "2DLMaCRhaFYrm9MK7cav9fVKm1NctsvHsKdhwXCgxZqoyfao8LDNnCr7p2yasMxhNY3iqYSyaDrx9fqxGf7eVbaH",
  "key25": "29xhVfPhswiJsZCrGWeVdaevR8dkWKx98KpZx6AZBqq5qzzkSJWSVxEVfpne28FGgPsA4tQsuZfgHCcPnAQ2RUDM",
  "key26": "mEkqQPL1eVCR4TUNPtQXSABSNMgGXmEs4jVkUguX3QkTP5PqDBAvDh7Q9h9hXhXy4jEaSPgMjycjBSPUMAcN1NW",
  "key27": "EYmAEWumgq78EaP8zTvwiYceagezhYLUdp9EosoWJiMjScCjCeZUUMA38BntLg4w5YpURcGmzXxSeCQXSVqXhXk",
  "key28": "5smvqQc6CFxqntWiRhSzaqCNA12pP2f6hk3Xma3VGL6RcnGyRZvjHGbYj5BxDur8EyA7JihMHYiniaHygjrS7na5",
  "key29": "3vzRnsDhFXrCioFSDNchtq8eYyhneBovvUYHAeXpw3GNhrd4wzR1bhjxNAUarEqCcHHgGL8ZqmpQLhkjSaevFiS7",
  "key30": "2FYS4EHjiriusLh3RYqymyyKbuKkwhT3rD8PVhMz2bGpXcz8TL1YxLxpdYjF8tQyRodncsXDhBxCSy6Nv9Z7WLyy",
  "key31": "5wXsUqfaqeh6bJKqT9VdQc5EoRmvDznA5fkSi1Ye4zNxUfjDNfWesHRRZS5qmHMArcVyBGhhpzWk2a7MYP1j1jsd",
  "key32": "5s22GBdcUzPgyLQobcsN5nLxxmJBTVEg6S9yesJG1EonJqm3YKgzs1naCDiLEqEC1yyMahqjNy6yv6MPbaokYQzQ"
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
