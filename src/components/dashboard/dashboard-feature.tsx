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
    "5SCtFynizLbneoAo1PiZx3bmUpVQYf5pCfYZyQ46euowhu6bA5bpBS3VVw768FsqhcHGLAskZJqw5rXrqRSH9g1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n8JYQtUg5mtvvcsi76mapEspFPK74Frdf5sBNbQmTepFsuugFWivAnhsgjCRGv8zdJ8b5EKaUvKpGTpDvrhYZRW",
  "key1": "5XxtpYePk9DjSBTqRcCCkCzv75V8qY2pwqYzrXtXtLkNx4zYrqyh2Cimuy5eNGzkfY8JEPnbvXnq3uCHVnBvWpXM",
  "key2": "3reCfwqh2ntvFZ4abMnm8QmTfB8dkohcf8DWL4HpjvHhDREB8hvMa5LXTzLEu3xbQ7ErEN3JRHHuGAxyyJ3CWL6e",
  "key3": "3qGmm72C6KEGQ7hcSH5UJHp98invtjdbb7wioiVB5ja9TDzuGoYjij4UfjrkguuqSmH6a7pGkfEDXFCsThCQ4pk1",
  "key4": "c9MJmcJQCqe1qEECyK3VsoZcp11Q3NP1D2mvnsurxfvz2SFqAg5tjK5knkP418rktyVSS94kLrGHa66E9ZLfobk",
  "key5": "2RRbJfv29WhXAXj26wJPdAsPvSpRTi14iiWgzg7b2dbQn5WY8zNCC2gUfGA9FUrxKXBvJQ6KbJZgEGDRRW8EQ5gm",
  "key6": "Ao95pbLrWPkrJBwwz5aayezsJh7hSaaiAwqi6VUqrN3wjmEGSZERYAiTrUGCHrrANwuhYN7WwWAAMr6y8Hm51Hp",
  "key7": "3Hp1DH3LWzcEmRnYuD4kSVh6L9awQC9uuy3UDXTnTPemKGPWPML5FwMPckCN5hASrJfP8waHKJzREJjR9HxuYL7n",
  "key8": "4LtkLEXfBqiwS5UkcUUky3mLxwU427hjichQQ733N5SCa9dPeEj2iZsQiziEH22arLwMsy8T5XCVDrmfkzfSJCsJ",
  "key9": "fVxDxpCrsBsot2Bg1JNF8ZBaZTzQirYmMjNzFuz7L3XrgeCZ1tszuYdvrgT2dpDGsvDh9ny2VhG1LZeDHBH24oK",
  "key10": "5Yz1uFQFdKzhiiNRztuN53ggiGK8mzg1UJAXDt57e4pADrTGEfJERRc69tyc5A4JkbskVQSQcf6mcy6csJU6f64F",
  "key11": "26Dgi5cUzw7YHPmPaekMNAd41R9m9JQLVLTQNmVaFo6ZozDTkfjd5hERuyyLj31bwtRJ43KaGYcAvc8BaT385dPK",
  "key12": "5fv3Ka6jFjJAXHAiAeot1J8rHSsBb7G5RHNSHd8ibbeeL6K9FCTTKPNunxVhRQt8BqLUTzSpHTcr8Yc2CnPQqKrd",
  "key13": "5Go381BCkjdtie5ZzCSVxF3qzDStTR3Tj5FnhhwTH62SLEdVQpGUiivjisbEixxaNFcr1RsqCwzhynkce4zvai4E",
  "key14": "5FgweSwtVA9SE6C7nP7WW8qrtRNMKt5TQZHseyu9Qyf35Pe6M3LyvDQrPaScPPvu94XM6aC3X1GnhwsNJFT6K6EE",
  "key15": "5grC3KQwJ11mtTnBir5RCiuX7ZAAQ5AZatAmkiy6bciPqbAKnCwnLFn52D4bK93EmpcWzZFRYY6BKUBffAf4oPvr",
  "key16": "4jG3rgSdP6RbvPsRP7xJnWbcx3eSoFLGiScxaVaUEwxF9p4csaw7A4b2da7w61EyHi5KVhrWFCDGKDPFs1wjiWev",
  "key17": "3MJk2CXXR4cLhXdqW17kbHJFVZdsayt3MJXWFFKZt3skfHZr6mcjLGxc3SFi6cUJ7w9jyPmxzFRr7suVRw7Kngo2",
  "key18": "2EG6t3ejarSVchVXSjxDZAsmAYM1fSRqJ7rSLrJwATxdYja8sgjphPXytUDQphpv9fUe7uLeGKhzR67QcHYJVSDE",
  "key19": "w4yfiMUhM9WctVomxfNzEaurdeXV4Uh4e97sggMswdTT9vMkYGF2tAWbvYbiYYLRGXdi8kjUggGJWR7nZdJPwRE",
  "key20": "65sH85RqshNEL1HPKfvsfZYZ7TssLxWDUM6qSggzNiHGRYcK6zsxy7t1i8kSFExbPBiF1L5VL7UTAwQpRwbvJ2TB",
  "key21": "it8CgYNGei9pYped7s4GnuQotrevPC9GVfnwTeG6CF1L92NooYPyVVnQo3n35MVWk43aj4ceCCPWVCxZx1SUNXk",
  "key22": "4JnQQnrAYMUKwrjpoxGQPjopMhM9VJ57NUEWNR9GQym4t5wv4Adv7wnjuQG3x4qj4KD9H6hoNj1vbRHMhkarvCvS",
  "key23": "43YAKM2MTq2bqQpfCSyMW66FSXH3ETKpWTvPSWmZRCzK1m4Sc7LhjxMLSNtxuPVuHTAvrT5MkmaFnqcNhUpFJFVx",
  "key24": "66wj2F2hCdkQdywHzDnmKGmLkvyTGMi6TdGBd6c7rfDn3Mt9whyevRFeeKfCjtG7EKXcviwsXQSgYQPUNDgTAG7z",
  "key25": "4gjtW9E8TpUWWYrHu7jevmzU24KmwoX1XZtyjy5Q2ivb1w6gUorp2usriMMHm5EBaWESS32bSgUMUMTtuxLKL1mc",
  "key26": "cuUTSk2ddCKtBfb6mYFRkdRe5LqRNQRA1ardx2JdNrKndsdtZELdZmZ42T4oayu7oiUVP7Wm9vmtzRDSv3DfjuB",
  "key27": "4BuxUMKHXrJGkeZNCSttyeFGDSzoPWYnoJrFq44r3WHZP5QPEV7cHKsKssmG7TQuWn2HkfPKXgySgPVL3hYTxytM",
  "key28": "3EBWqaMQj6XRRS6iw5RVVgzXFR3FHtMoMcNr1GyUaajXWqseK2t9UWDmrkYmvi6SiiiLYF74wzxnUkzP726q5sAn",
  "key29": "gmr4BxAdGtJcm7hKDNPSFFxfUVqtMpin8jXTyesLTspTpwcDEH1zZWBBi6agbYFcKuD6A9JGcbAf45ExJ3vhsGf",
  "key30": "5tYWDzpcTD4uswh5CEUE3zevj6WmZw2ZXcbFiA4cgADex3k6cBz8DW5RwpZqsNMmhys5WqK2jbtt3yQ5XK6tme2Q",
  "key31": "2JyAshnA9PFWFc6xyoRtpdqG85NzVPFWM1YzRNkksqentPu25gnGvFdfNKYuMyQJkyqSu9sKrKZCQmtACgZY9mzT",
  "key32": "5PF3LtoKDLAYuKZr13da4jphWN99zfaKpjHFnBFNHrW5nHpUcZ7t4DWNt7QkuwAcLbDKCEYenpM7xTuBxLwNAKCR",
  "key33": "2EwHRJ2456s1inu8X8VPXWArmvBfyDjBhiGCp8wqhvjh9Zc29TAWiA41q5ZcfprjkpBM3DTchJQHe4y5tfh3AXwr",
  "key34": "k4m8J7nGo1DFFm9zNqNe37eQFzMpFtaRxhJP6VwXppLxoDgv5BpP28MoeCyirCnURRUAtNhHpTkjyenFYj8HQdw",
  "key35": "3XruyMo4QTknVVhpudBaVavGdVKGXDXEWYXDR83iBT8jDvdd4ftS8nJ9eP3rBaZ1Vve4XC1A471s4Cn6uQQbQxiE"
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
