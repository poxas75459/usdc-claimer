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
    "3m668s9NWov8Gxg6jiE3w277GPjDsYPGLazYEWVERWWWaDJpM66UE8bRwKSzJvMtWnaFBgpFEympbzyojdvwcwPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v68UYqZfRkbcaU71GPyPAHyZmMtaCr49FJRcjy1cVtcgTcf3nbGjDEJFE5G8bePSW6rHuWwNwmAB2yGgAzxJaph",
  "key1": "2Q5RhasBYWA4DhXL8WGGTiZhghP9geA1XmdxdtABypuFfTrn9CK3TEveb5uCDAhMeoscm3nJnbj4qav7kLKaSE2z",
  "key2": "29QNZrTBELjGCXCWXkyJBpQDKBuGVJxA27eUYQwSX2FXJTQrQEvTAmmdQ2N3toB7nfYbEAEzXQkagBzFW4KYdkch",
  "key3": "5E5vkBPcjozv3B2kDytyNa4mCrQYPGWzTq3umjWSvRt4xZy82QYeS48P4167FLLxpz6gbdK4YByyeQ7gxZWupH5f",
  "key4": "TYKXs3PeBreS411H88a8Pg3Aq3zfqR1UokYZf1E8HZHaCtQRX1pEJ2KGXQyVoEMJanPoKa3VZxRcwGBsbdSjSsc",
  "key5": "4LThrERbZov3niCSok6jRrbTdKWbj88toX256hWjeRbq7HPW8iJQpkxPGgjheHNBFwzf4bWMCVbYm8W77gWQZTe6",
  "key6": "XH5NSge363DrPS45PRf254JqXKj1md2w8kjr3zcBNP5qv1CMn8NLhoevvU3ZCtitAdAZFqMWRahgZCoLYeM4rnf",
  "key7": "4uukizyqpBZVJvR4G6YQ7UgTXpx4XcbRRjUMmXv6Pi7YTJYz7FQRC7rQVtN9a6BtrF51zGohyCLY2tpKZJX9YtLE",
  "key8": "36vxBoRwAvdvWHqAJenML8vEzN35ZJZAHCMhXNJhmfWkMGAXCeHt4bXrBCzNSRoG5Nxo9u9gmFRhcMJQP22ZEsbP",
  "key9": "2ayJUvPgiBf6orp5CuQ8e36WdJuNQSAABKJTrm3oktJw7QKXKaoUxt1ogD2rXRJEJi9z2NYFo4Hy6AHeMobbq3a3",
  "key10": "2XKCdtNxA75mXKWGGt22W1NuNLTSfVXan4NmqZmh2rH6x3p6qWYXt5rP9nfvT4wvNqscCRt8CcANeomYnYsyPiCY",
  "key11": "5zywivh7vzbE9LXDt8m6F7NWzAkh6wEQV1eyLbhz1n2rc2NsMw6yfHzjAWf7vd5Bt6CcETGbRiyoLRQ7vemSu8xd",
  "key12": "25nzXoViJ99AbDypzFqVzpqpTsLyNUkyeL9EK4bYkbN5R2fuNczXcjmCeKhZZHYEJfd2ffEafbRpFcg9jpSE9kdS",
  "key13": "3D5YDrVrQMQgi5vsRz2TWHVQEjktAykKU8zqQdvcPRJFCyRKhwv61Q15foQEQESrTfQRrsMYKoXCkEFtMKPD6dY7",
  "key14": "57SxJ77MRR3ykEYu8EFYq8Df1krtM4SSKgxQk7LuBiX57kPqUgFhhTKMRN7XFwXJMPpuSFuzWFCrAYfyqXadd3Ah",
  "key15": "2NKPw6fDzU3mKZZWr89toycjEJkcpBRCog1p8FANCCpHXSSfW7BzmxcrwmGM1iSsB4wy5GeyZkdsQQGbfpuyXpF7",
  "key16": "CtvW2ozCps9CVYn1hyGC6E6J7xxdhFgZYQFvFy6FCRW3u3ZG8xZFQhYCmPx5xscb517WjUdWsrTHSn2t5oeSzgE",
  "key17": "5M1t3nN1ybqfGVvvxDxKwd8pBCadRsvDJS4zKi6m9sgStEZ1YENKZax6ZtqwXr6NP5jqBF77NAFXGuYacfD3ouyM",
  "key18": "2sLS8grm25sDb4SErcbY8VpRV3CzRRiC7wDbkVvXL873LSxpREYeF6bYv3TQ6VY2c9nrsv7WpXDSy5QbahrXZWRP",
  "key19": "2Tapop7ohQyCzFkrjxGVZLHzhmovmq2qcFR1D7qXyk4vaatmD1GQ7dPzwKtNERMhJukWoMwrATksgbfNmykhcCUZ",
  "key20": "41ALveJue7CSie5ppfb2anrTeBNGbEDZj5sd6QcDk2ZkPbb9raoYTach7u5c22hBUAb7ykKJ2ypewosuYfTF8NfT",
  "key21": "4RYewhnkZPz5Csrx3cKwezR19NGEnCEZ3sao8J3vdXSgvwpyxKqEAJQi58YWnKCZNRjU5K3Mi4Ty95RKYKc2rj7D",
  "key22": "LZrCF1hNdtPENHW8ekxSRZpvteofrYEzk36pz4Z2ouREYcg1eb69i7zTYxX1kzvvzKRkDJhYt1tybCmto2WQY53",
  "key23": "FRY5VFtAWZowv5kWorwtD2dB7RVvpk8JAY4VQtwTGwvDWd1n7qcFtB2D8b2vhAgHA5DM9ErCD9M3WX4Q2v25BDj",
  "key24": "7WDFxVrwegHBLo8s2ttx7ohEuqzg1hfkS4EUiaLhwp5dCbKggw8VGs4sgxaCMdaSxDzS58aQ8sPZYdSdvP49Srq",
  "key25": "244fK1ZhKbTvL3HR3osik5PMqN5oUaqWD2VhiCruEx1V1JivjkYHTns1rj2yiPfxTcogpD6DbkqaNNJQA8TbNGWM",
  "key26": "TL3JpAtjbwcGhhaVSiNwpiAQMxivkWZf4bETdFJLhrEcNrfqDH6rfB6yueurhxLmnaDoZsiTJdUtD36LQ1A8aAJ",
  "key27": "aZr3nEJ7NMFeWagbRnssQq52jVvGbXe8Zo5WqyuUCp73goG4hTeZGRuVNHGVF2KzszTkyQ4A7VX3iSdkFsc1yLz",
  "key28": "5mkfwjeFK3YRnATFiXQSqTbn7QHNkyiv8zKezJ9xv9YSinC8AxU6Xso58wU1TUz5uZLXtR3haAaziTLnDMNVAYMf",
  "key29": "6znQybq9kFw16WwUMTGz6x6JfTd6X1Uz23eUihw6T2xpqSR9JBy3yFtgvKJZdm2jgeE8shqyEsX5eTYz2gMowuj",
  "key30": "4Uvy9deXGZQgQ6XkND7xQ4bSsDfYyf8QyZyU25DkCa12LQdt3oDyMwpCqJGFhLAVT2AYMUzaD3Hxd3ELiqHdA48g",
  "key31": "AprxtMXc2rrgf8dm776DyK3LZPoSkDVCA6r7XuhXjmUpjjHMWydJY3RWbtYcHKUipt4rHuhFYsCyQppasa1Qnu6",
  "key32": "3uQ1DQZPKA9x21HouCraBQSEHoALPWzUfi3zHb7Yvj6gj1m9H7cPFaHwexigKHxaSwxHDi1Q5zL1GcbV9RFr8UcS",
  "key33": "4QMt2KAmMDVyyBy8Ndznn2baTAC64dMiWtZDVKzuTFVDasDg5oF4quVz7rr97UuAYHL365QDKrLHwwxTbHoofvrp",
  "key34": "5nLt8y98xfsySYemhsoQwu7w1nknWSknoDHL5JjojtSe8RM5u9RT3kmDBgcCNXvq8rqEAZL6ifw6q5AD7xhfrzqL",
  "key35": "2NRXXWSsjr22Mznm9HYC7fzsWqpTxSVaPfWURGrw3yUcAbwXDhmkp7NHseWTkBJKyg1hi9fDsa2hFGMMUWRzuaRc",
  "key36": "2xZM42XRN92xCmCu2vfbcNUte2s6Sw8yYPGMxzZWe4UyY7t186gz5JBHyh1X6jgWNGhCgDNegw9ggSmxjKvjGAtB"
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
