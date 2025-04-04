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
    "2JSuxi9BYPPDGqCisxHfZF1JnRcFKiFfP3MDJ6QcUz3suWHbBBvsERMB8QaYzL7LPnDdkZbvfieJ7kTFjU6mTQEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iUe7yWHKR7nHNq8JhrQiR3khXjHhR6y5M6gqbeck7mbzGpatnqN9DDHhBLVDF5Lc5ixVAn2jc49wR6UNtQKBxXG",
  "key1": "1S1P2fVVpctiL9tdygzCaBENPqvmo2JkNDLSYVQoTUTZQjLvihWHtPvVjsPQDXoD1RRNJTdeK5k6JYipcHe7tGn",
  "key2": "3y1fP4PXDuFBW5b1radqBbguB2b4cwQ9JEoDi6FUFwU8zvpy132CAc1YS7n5HGXxnYb7kGfjdAGfuyiXwVvvZ4tn",
  "key3": "2WrsVWvyCAMGCrrKZEvJ4zhzA6pdmJavmjtSpJYDSfqbN1XxDakCdFgSX2MCnatD3352siarvwUvjfRk8JH88Rcg",
  "key4": "2ppH9u1VYr8UJLxYeWcV5BHvCQhBd1yFDpDn1pKFrGBr8LYsDEkUumrz1KqTgcNVToxi2XeWW97iq7QXTmUuZ6RU",
  "key5": "3pNigFyxGXoKiDoCW9DiP8frZpUC1xFuyvgXRwBSxN2KTXdqmLc3gumvVZLVSd4BWQZhaVVYUfovjPJwxBqKThcs",
  "key6": "2WdCpUkTbxYXBajVR4eGDUQaS5WouiiNNSfzuqF2axXUtxiYn5qTewsX72fwoCsPEeLEEMcNgvqC7z2zozSsb9KM",
  "key7": "2NE3Tq3iQ4je33ZqUPLRShycyD3ukXLbvxb7rHULtaVBEEWhFXRFWLHnjmx5CRXdUVoQjhTCnUqyW2BYQ2SE4PLq",
  "key8": "CP3rRp9aJWtYSntg7EUZHfAdb6NgLyabBYgwg5RgREraLWorPn5cAGTPs4n3YUwKXW2XsZ2zE3kKtcgckEhNDyW",
  "key9": "4mfrTNdzhmvp6mq8jTKo8KkS2amvSKV31H731WhfjAW4ViKxSXQDKu1oiGyyRiXznxevfxcurfn4uLF3QaP9sRSF",
  "key10": "4zGTrjxohWvqEj2P6vzKUn3NzcDXT2CFiuKBwkuypj6gsENRhSvP5amxTm9nmwfwgjVzkBiCQqGwTKTWo8fNZpZd",
  "key11": "uYwCeNoCSbJgTE4YjFjKchtEgAqbhNwuWN1DF858XRBZe6me3ij9HBEN6R8byPrb8xLQ43G46Mbk83pJnnLRjKK",
  "key12": "5FY4YFuCfbSTsQBW8sNR3Hz2i2VYHSPQcJtaL6cUxMYQsD1yvAQxCmWwpW8SXUPfs3KBptCjWTGkkT5WFoF43ZsM",
  "key13": "5PgTBZnC2CRQnAqTN8yWCBcNTm5SEudeDTYyp9NFiuCY6rf1vBKhMgwKuwnjk72PcFhHsinS72vD6QpJbG81UJBZ",
  "key14": "5gpJBqXY6ZkKUb6XEdEkdFJ9adaQrBHs75m7W4XBooeJrbXKtE1MAx394kstWb3neFW8TLqcHDptFdgcZDKtU9ua",
  "key15": "3CZ4EZTFjWWLMgk6UV9USL7gbt1aYZotsGeLNjyPeRzauMu16deVSDVpgSPrLpkQwUMbjpkKRTnNjw7h1YN3eyBG",
  "key16": "2KWLCnjWcLpEfneAo3jHbM1tC78tMTA2ShKvfAbG5gaXYGfU4DPUD1ABnQySXSaYGMpQt9RUPevy5R49wBSM4j9E",
  "key17": "3AL9zfFGyzcQyjCPhghLQPkApR1fbH3NZtpVPHuNkwmBEEKcS7Vt5DyLc4N65mASWuXgfM6FcknNSdMpeEoJaQo5",
  "key18": "bStUQ18wAR3idwYZxW9HUhUyNHdWRqS9BagqSxnWayg9mGAbQyEBLLYTxjYHxL1DWj7qMwvQW5wmxFr4Xu31Suo",
  "key19": "i8d9XxXPw3JxsywWVEUQoLwDS2zMeNzEcdDYPahwNxDuyudrE7MQj4HuKXFgypGrwueWaHrpaU1XjgVqtJMdKSe",
  "key20": "33cr59aKaBY1eVs27HBjSofJVjyLGgeSB4dWT2PdbFNk8huvgYAbd4qmAiryJDNiPEDhNWYZqb9FnhLyfNLFUdQU",
  "key21": "FoVQbvNctKriLCZRJvBayKpBcnFHC7KV9Sd8b6UPRGpuSbFaWJbjH1uW7BqKRkXC7wHSBJGw26y6SiYGpNG1haX",
  "key22": "24TZutzDA6VsuYwNRV6YyLCbmHfE1XzRHnT24kgQNXb464GXUNJP8uyGBgQSTWuWumR7nnC33rXQc59MGv1rfgnS",
  "key23": "3FZQCodX9uzLVRPT96fuJzAdiimT1rw7haCJU6y8fBZtzMXzB35VuEQT7mUyUJvzrjoyzvPFZD11TmMYjqFjWb2Z",
  "key24": "3VNNrf2pDqFgj1ANKWM5L3vMe1mvd2t7P96WgXbkCWYj5tbYFMK7jr9DVbrCgNAjV9dox5yhX1fTH7ew7qBXNr5x",
  "key25": "NKVLdudvPXXFRHfcMvEL7HzCefvfkhVQLKkqgiVw36jbv1Xi9TBG88JWKa2X83vb6SGm6NY7jTeK7QnjQX9bZYt",
  "key26": "2ya8bEMi14ZaQ3Dkw1RcauT6xrtsMz2B3JRoQvkHK9zLipFmrvBrknBDAVJFgGP3XKEBY1HQ7wAmMiR4qcELjH7E"
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
