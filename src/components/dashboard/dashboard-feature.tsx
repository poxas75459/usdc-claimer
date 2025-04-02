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
    "ythMw21HqXfXPykCFX3BfijiZSiDZPnFEji8A41g3WqaPX7uzkoFFc4gK7cQphfj9MLsSjdjup8M4WqSFNF4JzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5frQAykJTTJpfxZLntXs87TpnMdFXpY9qJK3Uxz1ppNTHK3Psb2cu12SYJUwkoBeYfMyXkiYFQm8JyRnp4fQiCik",
  "key1": "4GLwQWqFGyE4mMpnP4cewCNkri74vkBwwwHFyjiskALzNbLKPNmN3S5uXaBGwqKVHNXi79Bk5WNAY9KEN5PY3Lqo",
  "key2": "3fRJiPUZsPJWVvsSsNJ6Wai2EfC5MjxsT69cgSipdL6vKfWGEfDkvj5qwvLZVPJzSooW7c2u637zM1Y95DsYzBSP",
  "key3": "2FpyjuDL477QM3K7y7Li6tzJAnyAA9PEE1BvLPutdkvyX6vcXV1jV3YieA9EqF7GLZuU3dvTpRr5FWRx5sQ2GXn9",
  "key4": "4Nyr5kdzh9KzPbKrhSF2mAmQEKEFBvhTpzfg8hfyoLPKuiPHHo2gmXXoURY3YKEW2QwtQB4wDqYoTszui3SkmGHq",
  "key5": "4JV3rLSLxnMUr9QYx8Z6q8jbqtmhvWzR8tjqExPA3NdXoFezCpFfF6oeh1hvSDX8dF4wt7vwivhBr7fXUn9ST7My",
  "key6": "48Nxpw1TPeeqt6rCkb8SWkFJiCYFBHufjXYFgQJ2DiUSP3LbDzcBJGBGPhPCH9qL55tiiZkmVvrbV3y2TzcWo7mQ",
  "key7": "661da2UaNwZGZ8D4oHxGvHzMQZpKP5NTSeyDvhnLfVd27YVriM1sHUCBk4rQFumpS8TZkMuCSgptgrmBSDWi49Vc",
  "key8": "5fRHoSpjagZBSWEmrwLiK96AtYmb8p1bjML17grh1L6x199fgqquaXdMSCmBe3sthAkMnzSsXvzfh1k6V8hYe2vz",
  "key9": "4VpdFx1dj4XqrsdYJYQ96zt8ZX57WyaPhkR5W8v9FF6di1AaDJ32jY9RBaQzFUX1Ao2wNTPAKsNN9bpfDYTRjyk8",
  "key10": "3rwBqbroKtqeUU22Z2ZZdVnvPdREssAmaQQGAWAvwjvbGht4NzWXm8U54Py1ezbnUmi4vxXmjnXGLpWXyzvf5D6x",
  "key11": "66jY2L59XkHvoa3Skwni7s6ofPX1DveoLPjWpQ4jWeBqcSdSy6rMxo3QLGepsdi7UxS3wNyrvKkQ9wRpHC4rE6PJ",
  "key12": "5BAFmgzFaQoZHSkHrmwdW6gzKnWoTFWEm5SN2PW3eRTokH6uxC1GX7t9ARynxGbGKdDx49TT9YNPUc2Sm1d4fxt2",
  "key13": "F5Lwwob5EYS5SArCnV7FBtKUPM5rAzVgjxqqphpebJJMmN4fc3jPdE7Pk8tBsrnYvwxV62wsaK2krsKXZLbF3B6",
  "key14": "Ab3iE84gdvCLPLoqBJFbNYZmypTFVcSEPJutbThCrWYMHyWT7scgTb4tvp5FAviSv6GzSGWyysWExRTsuEoa1it",
  "key15": "5mGPY7v4ZYuhVVesoT7MX2cvwm44iJSpuAKTC3kpRnnNoQkqWDx7fchUZjqyr9LTmABCroBWH6Hf4QdQw6s9zaML",
  "key16": "4s4itH44oEm43aBzcnqkcwM33uq5Zuz1oq2FvGs25zonpUizrAQchWTq7CeYaCaBR8XN9fAbTUYygDcW6frAy66B",
  "key17": "2KKV53EYTY2LBu9wR5FKD4cEeE3nCNfNKaEtKEB5AfRAnZBaGcuyUfp3CuvWzU6nTq1bjQ1X63rixZmwzUrqMWVW",
  "key18": "3nhSH2fmjFjf9vQk9jFrb7NgA9cQPssNXrcb5RL3aYBnTUJsddLCNeXMAPsdRDXQbRwzXvKKpBWLJvCtva7xfvFF",
  "key19": "BvQdX4Zz7CkPDD1qX3KMeSujJiPy8NtTzx6eZRiUNgEMwmYfg9QL5qkQRnPVRcHQyVQcPhq57Lm99p1Eut2KwBM",
  "key20": "4y3wCm1AJnwfU57EUjWUu6WjQgqXy4xBRhK2Kv4d1wSego522gCS5T9a3ngKtA3JVtcfA8emrfGYQ5VCmo9boqqk",
  "key21": "3H3q3KAT2qzFVQvqHbfQtvUCPeSsXXkmPaZgSAEKugTa6ydz1Cudr3QM43bVYVPKieJxmpAxVuMg3QDFFnNpiwzm",
  "key22": "XNBToCggmUhD3rivZRtxGcZfuCoeCtAogsYH2qwyRNuh1FmzK2WvyfNWjmTJCJananCmatoDr5UvmiJ3kDRUTN1",
  "key23": "1npUn1UdYRscKqBYqhYKovMSpzhcKmx2pBj8Z5iV5bPifeskhu2NcP3SB2ZS1EPAdzhEwhaFYEAE7ZYdq8BqWTk",
  "key24": "DDBJTFGy2KXZhmDxmRTTMLXejjUqgdXSWUy1DYWyaLmki7RkHDVNiZqoUTB3qrXR7gKWsYEm2KQSrjqw4fknCqr",
  "key25": "4gupBhdrW2nbhJLMWJZDkXNvuCbRhEDkyjt3wxwDkSnpQd5GFHRRSGtc4v2hobvbFM3vkMsH8ENyU7NP7KW2sAUB",
  "key26": "pXjuMVkDuPiXzXgYWKR98Bri4qJPmmUy3ktCGhNaJrLdXh4Vq7L6Y9dEhCtHco66PeyoVJeazyVAsoCErUBJSej",
  "key27": "664x1am4gQ6Ra79nfJPa2UVDeAjLZfXXPpTYRCYErBgb85bU3gvC8VisQ82R95pFBoA3nnJmxPBjbCtn3tQfcmhk",
  "key28": "pG8YN25Cf8g8M7VKJNjcuSkd9VhfWKjayxv8rC8YwMkY6FXrtzFRmrLD3cRtFvELWyHPsGqmeSo3wytmLNLESnj",
  "key29": "4NTRDS7xauGjpqjtt3w5pF5TEJkyTw2ZiugSmMbozpDT1nJCpsCV2j6wasUpogeKj6UcxYWPMKeErA1x9UYc8BxK",
  "key30": "67CraBcRiiZ32e5BEGYhSrKyhtqyRQcFg3xSkM5T56FKR6SPEnM9t7orrCVcurXgnLXDjQgbhyxJpDygUUyzCdpW"
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
