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
    "5hQsfgVR4SvEdytMnjX28npzumk1AT6Ls3ureZR4mJEWY14SVDgtsnwEwCabHXFUJTLsRntv2YGRxqnjvJRyjk4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jXA7QntouHU8qUYD9o4dB8iytmfsmxhkWAwyQKN5eZR3epewJ9rFH9pjNggW2qQv6oTgnhfeY6xzhfFmZ57qrXG",
  "key1": "3cthZXC546myQwpjftMkX1U9amwfebvXpr5yHLhE6eX7gnTfnfMSdLcKrxkwpujzwQBrMn1aLoz57k9GWeQZX36G",
  "key2": "4Zk7qr23DgnLgvrJqgitCwukBRDx8XVMeiJPfgjHL15TqZiZkUvPdX3UsiiNE1JM1762mH1gqdnY5drqmWMe5rCr",
  "key3": "4VPpd21QbyXQJUuxjtUEwwLHcjjVfQVMnr8VH8W6mPgzwhD3Lk2z8ooZ3TFLJByHMQhmQvREbsH5FfNTJjDiG8Mz",
  "key4": "cd1bfQs7c4y9mJ7XM5vhhUE9gdju47KuyjFGXTn6sx6KTPq55XPqEWPYRTia7Tre9NwCacK2VQjmqgz64hu5ZXH",
  "key5": "2xgTSkW1UwnHhSLhc67GE5g1M6YFTreycFyP13KbZo8gRKoSiZjgZnaNN31oUFgbaiQdzPhZkRafSwpazFomZrS9",
  "key6": "2TgEMREergxmyhQ1oc6qWjjq3ee59KiBXXizxiQs2yVPGmD2N6zBrJ3X1YuXLnRGEFpZDoakbV2HjUjVR2RZKmjs",
  "key7": "447Gobz4p9ySWLZiVipt8WZwFYLycJowiWsfNbWi3e53aXDqwURAc7uNeybRZF1gBd3nYS1q1noodVbNZ4kgqh5t",
  "key8": "2QvwEhUFwtiRzymn69JunMzMmdxdNRmHSyJ7DXhjkUD4UWzixsgaLtMMMjMhpY9tNJQdeGPsNFZwdw2bz261ZzYN",
  "key9": "2uErYf6Tdr4EFXMVc9prYRih2T6UMYxAjVDxDpcykAY1bVEnePtvo37UZJfHXLnJ5pdkmrSc2JnLoEz9LazfnB17",
  "key10": "y7yhEAJ3GFFFPey96x5eo9axfcg88U6Nsjhpp9TuKEpvzM886SgoMAw5FwsS8xH1PEFwgT7Pp14Aqr3pWn1CPLJ",
  "key11": "2MFbvWjXEq9uRghCz9FEHGGhc9FQn28hivWuLAmWpLqpMHQhsju5wbZM7ojqCr1vQZjnBrFaSyE7gZuRNnn1ZkoT",
  "key12": "22RG6o8KQosEcbWge6od12nVYVEGzPH5UHqKNaKzjgbc2EimTH7guPpLMeUrbYpZz9ztduzT5UFHscGTCWD9oKhH",
  "key13": "2w5E1zdspxGhrCrxEh7TY7bFdMeTU9NZc32aR8mBfrr3PctjsqH1VJu5h1saQnzGCAscaEcgv1Xh3KHxLt1aTL54",
  "key14": "2zd37vFDwZw69WuxoQtBsCNb8rmFEMfkwnDrAopqZEWdiY5rL5kf9J4c126FmoXpyfWK63U2Bh7zDhpehbqJ1KFC",
  "key15": "56b8RsyEYhsc2pvUxNhukhW75dyPqyWVqZ7LTKnhaNG9mrV1CqdwGfbTR5phs2gGc4LXam5XrotmQFz1up66zqqe",
  "key16": "4gT4g6c77Mbq6wrk2bu2Rimh3Mnpr8FNULs4weJa7TCWtZMoHLkrRA9wzTqCiEfgEURxqgUcv1ciVJvVXq4EEVm",
  "key17": "3x2W9TSW1pqpdgcLxY1ApjFhYP6av9Kr8y4JeWjZ6U2CG1pBtZMD6SV65L1y8BepNMCNViCTFob1cGfgPDdchH3x",
  "key18": "2LDxJsNKqKcur6zyaV2gPvqUXvGjr5u1TG87k8asRUJAcKgXBgBT1QruESZKcT1aUZcy7CQDsRLoNP7pfRCA1Nqq",
  "key19": "2iqoZmj8REG7mU9UoRVqyQXZi3nAQ2zxv6DMAyTa1kLv1jHWZnsmrtwS2pbdA5RPWDJoUs2WkDagi7QY53od2k3E",
  "key20": "4FkiCyJf9zLvvZzMmgdX4NLHvwBpozgUUafwdeGNx3nnCXCSmW8gQFJkDBQXXtYxJ72eo9M54TspYPJxH14PUhXn",
  "key21": "5RAovbj5bKvQdCFNUH3wbNDKWhhdFrf447yAg21AnGNJjp57gi1KqrsMHFJghCJEAzAE8Dr6Si6cLLVtuaMUYDs6",
  "key22": "4LzKmodSrHYwTgMTSeWYi6Vv58GtsDhxhc5nPjRuc4poTs6SwCBy5vM4vsS2HSxsnxwYok6iLWQbr6kKqiPYWBbe",
  "key23": "2GVAzuK4w93DChpb4CmuNPB3oKSFeus868AEz5XD9usfSdHzhHu29a6CeJFyD7EeiASEw8u8LELDBzNYb7vh9xtY",
  "key24": "5s1pa8LyNiVqikUpv8dWC4PvPm23kXp7S9WwdcGSbPMwuCZJNUkXRPadwepDyRDefmQZ4Tct7c4voyYmNLS8uGcN",
  "key25": "9aLXWrnjoT8z6GJPVgbBUiXKwQoHMqcfxLb18mrhrtR2zgXZx4UYdeaj97tPkHkWT9MSYDfPehRNSqqAT2LZ1ds",
  "key26": "3RXkFaz2yPwTeEindCBAcKNW6YNLfmjWy5zxKbkfgQLKG1zweD3wM2F3RRqwtHMPdR9PBAnVnHQTjFTovDfXUwAa",
  "key27": "4UiL6DXxwXLMR5PFW3cPTCQ8U6qBu19XuZV1iuYyHTz7TwxrgCycmuSBgfGZEfpFMoiYfqvWQav2RgLeN7PR8hXo",
  "key28": "3ufbzWK9Cus3VZaWyjjFsx8sFjCe84pfXw7Aen9JK419jUaT3S8KPYw5oN16D9k2Ezx9X8swNu2KzhG5DqCJRUdR",
  "key29": "21H8rAvxFebNFuLf3ydTwoCFjYtm2oTwdppY5H1ECvrZppBNDdU2x1cC3HGzN7ASmjCESM2mGRrwiQRug212qX6N",
  "key30": "4tF1dTJRGqbJAiiEKJF8KAUXdS5wLgYXehi2hRg3k3VN3DkyjPwpo3J9iwTzDLDtRHzSrvjFzRLML5AgLEP9N9DS",
  "key31": "23GZKNuyjhG8yTqL9inE2h1Brf2cjNUr21BhvAeErWYUBHfTWQSMPAv18o6zrLrxnFDUJ4KzPP8Nm1ezqPuWCWkv"
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
