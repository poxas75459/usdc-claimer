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
    "2jtSA8fiaebZxYxJo1FrnyhPfvvNwS5iJnwnGHjuTVaT4F365Q3cd6DACg3qW5YFKSnCshX3gAoeanXRJZoCDdLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z3vUgGa5gVPxsP4NuV1xwQMgr4nQYvFf8NqpjyqTnPrFtejFXVD2LMWJ2w4kLVhVbL6L8Ky5eGA7qakv9oTeNuR",
  "key1": "2NLWwskXbJJcc93qwU51jGz7MHey1bsU4jhsvTmyEmEgRojmA2pUmvpaDWn6vwjctXyoggDX8WnszHFYYFgb6irH",
  "key2": "4tFaqZBqx98xwkW8BBBN1UokYERPnCuPXqwv18sQxX63L7u2UnvY9B7ZfPHZB3QgcpXH7qyMvaQ27p4jdU1BX9du",
  "key3": "3VX42oVA8Hp6nNC91PFymNdE2VPtmcTcWFYE54NEF5SQj7HaRnMbz6vnv4RndMNdkRCquq86iPGPc2tZRwn2hP1H",
  "key4": "65Y9Utq6oLUHo8f1DRtK2mZBEJtVpAiVqCq8AemhXt5gSanSvuWKcWPYWmyLcrR9tF4FC39jUyEiaHYcLqCmexWt",
  "key5": "yhtzBFjQPvcRjcMQzsfkQ5TyyYsf8p8AutY2jarRKEYRpF13GdRfadTxZBHWVHAcUf2WDTKGm135goNM7icZffR",
  "key6": "3z9rQeXsp2hRXn4geiRzQ8jdy5BqA8FTyZR6Uj76Tfgd3ko3eREbL2AnDNpHm6RgPPVZhL9jNKJhnrTwjTsabjLA",
  "key7": "2hEhrfXhtoPDN93p47kRV97kMmRQLcs63C4Mi6jcvCPmByuFMArxgw4RWWPoGfbbGVcewbjtqD6uUbGaE1fHD6XD",
  "key8": "4WaauJvVkWJBUT5cytvziUNmnvQmPfTMzPjeVeZaaX5c3Ao1M1HAoj7LZ5w4htEiYotxKTQD2coepJdAjxuVhEEJ",
  "key9": "3oUfF4pJE83NdTsmubPoFkXTHQb3jq8oHYrtjL2dr4ZkTZ7Nvpyq2DTp4bE8JLHcGm86tWmj4x7MDqo8GZFNNsjc",
  "key10": "4SW4DasecUv6SxaAgeV3G1aGPwoRcddmJ3NCqryP6tPkLgaQMNLMEmSsLUX3Um1WGBWF5myeeRBAWWVJwRN222Qb",
  "key11": "3mZ2x9hBHm9Rp4fza92AfgpXnVjtFFH3YY92vWajcnXTu3xNaTUBeUzS4MzJmt7ipLTcKcbh4PGMAMTeyfJQWjov",
  "key12": "5RamkwUqWNjiGYqo3C5gt2ZbQxnFZsZNTiLevMc69K1Sq7gjzcWjwRDQ86XxHwChBQD5gCHtAnwQj6ACG9i178Do",
  "key13": "mL1ciW5u4Ar75Y9K7vW17wdySniAdw463HKv7KVYYHMKVUp5arbZ1DLqRRKhHwqA2nfkHjGYDF7V5dGHcTT5MoA",
  "key14": "5NyxAP7E1yUyKekcyH429eRZieJ89Z4FMHSvwo9Bagpq59gEq6dgjddnjNKzQDTT5PnHvLAmPBh7JYxoods1SAY2",
  "key15": "2bgz6AT9WfnXr64tZFsMEaSShP6G28xZ9Zde1o7N5LPzN1X5DpTQQPhnEc6S2qVSD8C5HwJVyNqCPxNQ9DX2a7GR",
  "key16": "3gvcpsfonTfzBeJg4sszNCmRcCJPe2Gc5w8gt7thoLDyuvSeRCYwroQhBSrRNrZuiq8WLgSoTGjDVFqiDzn62CBV",
  "key17": "vtP2YXcuCCdBtKrJLHrHNvcBewQWtjMC85gUtRfi4GV1JxhcHp6ievJp68JSamK8S3iVaU1VVXuf3N3ogh18eXH",
  "key18": "4rr38HBNWcNuA1WyCAL1TSf5zRz77rm3rVCwYvomAX5gAqCtJTESBVECgwwFonAwP7hmyHu1izRuHWoBy6KYFiQq",
  "key19": "r3AzJCQqqsh2MEaRZo5AgN8P3XMSdaH6wsZ99qQpXoraMQG3uBW6cYfyJ788Rj7sCfRb4XDvcxzX6QhrpTacER8",
  "key20": "3kj8DGz1e8jCyNS7S766rwrqT1MfaQs8Gyh7WFKEDuFt6Kat2AjSPvQDLa9JhvsnraFoMmhe4n3k5gSrNfpxATRi",
  "key21": "3y4cZJ6H6yErJJxKjneEwHccQaPh7o8srqfjTyNDkCb1FwjWhuhTS1fcvRqSC9RSJfFkZkq7EszNTUfQschQ7QdG",
  "key22": "2D46ZKRdzK9eCAwBd5ALEL4v8xoDUqJmCghuNVNoHzTfzuhKhybXiYUZoseXu7kX7Q5RBqbSqdex6vrre5tpgD3h",
  "key23": "4Tz43vMdb4jLyJ4onNyno2zHzZJfZ6NNZ1EHef2vnhuzTzGW7hEATfEvXBPqukMnqYqn6XFEdQcKFpzRk1csu9rS",
  "key24": "22AmABVsJhL7b3AtcidWvnYDQaJ1Gb1jdYEhFJnLGQdjrZLniqqbExyhvGA3QoQD3sqiu4Ls3EQwKe4eh6D2WGEX",
  "key25": "brYotdmxSHNAWexe5dMdZ8rs7UA8fTkaHSrZin8BnsJ6EiwCtEo5xXsLFB7Sn73HtHxJfJ9trPCWwL83V5s6PRM",
  "key26": "ThAc3NPHJBvhVycrbK3YCkQcbqXfjsZJPEsPKL5mZzku5C8BMjiMA1Sfzyhc1VWLAZFCGjzBVB43X5JuC5UgjFR",
  "key27": "3jkrqrLhgxRjUTrmccdet1dwXLioXZrbVAu7MSDK4m9LJsyTy6pBCYFrzUV8t95HBjqsJQD5aUjbnEwauzAxmKdw",
  "key28": "5semUa8SWPqp37ELNgr3WusFBWyNUhgK6hiBgMobm4zyVvY7kCHdEEKUNC9xEkpmAW8bac91Z42BQ9a3NVWt8x1M",
  "key29": "47DsR2xpBK22LA3ksgiBvu9GCKSkDoVz9y6UPCwektKyD7yZSrUCSQ9t3JQb9mm8fAWoFbPseqxzR78d5TvdoQbi",
  "key30": "jp2ktRHFHqZUvzFNFNSSfM8gmhFmeMhDWHcZPAxic79zEBEszyU7L43dH4kLEM238aYsVCqwrsJeyN4ciqZkM2n",
  "key31": "5VexPhFAm2mBktFkwAcQTuwSg8WqnbDSePGnUSMWCBA8cuFtfZ3SbUXafiKa8Q824Md4xQwupgzRbvexKGg8chve"
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
