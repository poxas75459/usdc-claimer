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
    "58APb3Z9kRhZEE4HAKdzSserfkpFpEQ7kKS5EYvoMeSRfhPgiZzhpkGMfiwLR8ikErgEMd3bAGi7pC8a3VsdopUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cj6mZr1WU6R9iXKD6bFzbDTGXvR1hDKLCLRVDy7riThcLEdR9UDTRTMLnkdRm6n2AZsknPMBhcvcABS6vfoky4G",
  "key1": "52Biw74q41ksaQaYrZHrF6UtjC9fMR3oaHsrhaB2KtKPpdysmKHhtJpFZrtPCczdPhSJPBDXHQs7CLJyUkZvzU4A",
  "key2": "3o26YroUk1VpvRxE33evneiHBoVwkv8VJUPPPYRrfwWVE2e5v9UKJsZMkAKUurascYLsv2xChv7HJ2A7NuPUiqLo",
  "key3": "5QNCftYcTW5VVSnTgEuDVxewvnXv9CgeUTvreLNAP9CseK9fuEmCATPogEuXg7NjvNbxGEApxFP1phWGUJGQkjtP",
  "key4": "ywSaT9uGQbq6TGBpXK4xPaojmJpobjdc8cpeMZJz3ib3V1mDzdAtayVKXiNh1rZ2HJnAsj4brAx95wg18hHfY1o",
  "key5": "347wQxcGMJeXg6Ub6qvEY3bSra1jPEb4GQZBL7ydZ2o6bSyzbmxMhfeqqJu42MYseatt8m6stCRKpeigrAq1NLFJ",
  "key6": "3zveN7daKZUbZtgHTM99eA6hB8xCq3AzPJzwfGqAkPBu9Xewh7vizEKkPckuZDnoyHto9sfDYqvsiaLHxGhWS2Dd",
  "key7": "2qzRRtnRyhTi2G2RDnFMCKfZH2mVdm4qA885r72yZw4V8NaQu4eooxNQHqLnAmZvzseNbxZiKE8QDth9rQzvYBMp",
  "key8": "3kDZR951teZaraV3qfmuwGQ5nJd6Q8xakqq9KiZryYfiZSmL739uFskaBRvgncbLX1b5EwQbTJAMi5kUK7TmMsvF",
  "key9": "sS3CRGJQi7jRjSWbSfwZiPxTxWSTyhJHSZjDc5WG5zUYWenEgHHJdCQgmPQfPjeyosRBoCq26Q1QfMoreZmC2pT",
  "key10": "ZLVaEcEna4nvesshH3XaxZXb7YS6MY15Hbi8QszxDsthi5trHqY5ZSHx2Zy2SiSVxAaE3ejPFWwYH1RikHPFGJE",
  "key11": "29crQxMmrR9jjigAziVsKQHD6p7uAPWA4o2FH9VQmHRcUU1tGNxVZY8pQfv5HMCrUiRV8X6M2sDeXsfXMHJNe7jX",
  "key12": "2KRFBRSFtUAPK7oj4nAWvkPbirAkw3A2AyopLrh5k3ScdA6YgM47ZukeSBYFyy3H5pSGuRjtXdKSFNzpYiBvRnpf",
  "key13": "4ryzfYpcDv2fG7EsdgNq1gHnuUdijk6bMrBtZYLMe7bc9ABwtv9LfVfCG5H8v6EQBKTb4uBVEGu3AxKgGdSSGWDo",
  "key14": "49gKTDcp6bduEeUnHTuDvGgbwiD3LqudY8SNUa6NHF3E9VAjEvb1ahoURy1ezZrmZfHsyy25dk7uzTfKczdHAJgZ",
  "key15": "p6VWeEj7haM7gQiRgukcTCSFTSRybu5NFP64vpKVi1hPLq2LwXucuDVg3sYRuYhfXFx9zCeLyaWqhT1Bia6L3Pn",
  "key16": "ZebDXSCyaC7H88o9XSTc1z8YZZ9ByfoN6sDh4UZ9qKEVuQF1fDDPaG69zPJ1xzv9iUxVcdrvFiCUT53k4NYqvkR",
  "key17": "25bpc6hKUPpGhXad4eQeEAdewRZXjMqxFha9xoSXusvFR25HbSrgqZfNRbagCfUR6SCpMg1H3cV29zT3v6YX9mqQ",
  "key18": "5L99tLxwXNkSAFqqus1PdTtoKkxnkq9jDhAJRF4p3kmQeKC1xEd9njZgpp8RPGeEbqzn8qs14t3n1wvBiuvEoqkg",
  "key19": "3uEcduqiGwcCy9cPKbkHcxsfgPKerC8NBTqpKS4L2F8iJsXsvM2VyhVKHVtiCdTRZtX9founiM9QEmZCfWSMyN6E",
  "key20": "43DNnw9e463guvTjB39aoum595fmu9bJKYGh9FkHKHbZ66UZkDHYVeacxXeR7vS9sJKrE3Xb6JM6wnNnTSjrUGp7",
  "key21": "33nmtAp69LwMCLFRSAgteqvrbwqxvHYU4rjkTWqLceRNRFHCiQ9quyE1S1Wj79gray681Bunh456H7RuTEYi5hPG",
  "key22": "3ix2j3CoXjHxG8Wm4PZiTjb6W2HDwyMCb8oKrV9zjoCzjP1J5w7yZYx6zYPyLQB9sLf24eCH4bXKt7P2j23CUSnQ",
  "key23": "2MUKGapiTV3ENmYGWY1yoijrrpjiwoRdcuBor3VXB2qFibsdepjjK95zXWDNsShAp7vibGHsqKysm1CTmi1uCp3m",
  "key24": "5G7KD1V45EikQRiXAbLw6b6vinhw7UebzqAReb2xQYE6pfPp75X3B8y1rvUJ8cBXHdngKDGANY93RBAqgcCXoEhz",
  "key25": "3TT7U7sZytWSqQ5KGFhsUZJ3vTB4BurJUYZY8iUGfk5XM2A6WqTZAcsrHpcXFzZeJti5z8UCaE9FwjvXeoakBXMj",
  "key26": "2NcgGPeLeZJG6i3SF9Pw7E3JppcfwvDkn47yqHPUkv8NahDxjqtYYshWTjfecP4JWD1XzbzQboxNBKrJrKESspaH"
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
