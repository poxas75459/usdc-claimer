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
    "3jWWi8c2XcPum216SPfAZyVtMWkbjCUMdWXsHhdsd86FyNBmc7otx6fiaVkxLFUs6BCWJEp1bKMycvobMV3Wwe7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fvU6qSXrLF3gVB7YydZWFt7FSqiLkgAt6GkPos9XXMnVCQEYsuECF2Zna3VyvvFQntZsoZAxmpaB2Ca2NVMxxoj",
  "key1": "5A45iTiWCJ1zRDarcfPE1wqmFNz75KcbAVARgLHgCuJv9VoPZeAxJVeJE9GXFt3ur5cw6Qwmozh9r8ryNSWvtPnA",
  "key2": "47nXq6epatZVGNEYeTkU9LowaNTuS79RTTJegYQCs3pYduircNUyV1yySasB3frSSnJHD1jfpt2FrGPCEhS4RCdy",
  "key3": "2aRD1h1dSzVTWr1yg4mH2SdAfvsM1sU12FWx2sSPiC7kqMFnGcLH4MDdUgMNQQ1bp1QHsKDxrcqjhipQHx2pKxr7",
  "key4": "2PU3VJaiJp42aHEwZcYTsCUHq94FswthRKTowaK7YUBtzyzGfebJ6SY2qDD4sjkjopp7Kr9YuuhJ21oiDVCtwREy",
  "key5": "3nSAZZLDVeowk2NxoBbTi2E6BSYXAuxBAbp9eXhb9MqmQQxCfDsH5qZe7YmjMQFFjJfYihvAThKgmSBb8F31ctak",
  "key6": "3dEJsCNBdaBi2T8kqupuoRZWGtdqq1cHfaQ985Pr6S1Z2FUfNpE8cwgMNk4GYMD9UxnvmXGATsF7bbdGeNuWhDG",
  "key7": "2PGK7uCt1a7ncgxyuCQWsTMzQgM63WGo8XRWt7ksacjqCj4FvzJP9HBghDq5mTcjKZpzzEWU6MSe4XTg6rj2dNAB",
  "key8": "4Mnd7cBAY8kSqWpzns3je6vaXSJMEviPBvdmmnKp3Lvzi5yWJGCQ7qi1o3QrM3nBJwVfhjVeh6qmJRA9aogEXqkV",
  "key9": "qztSTfdkbpWoW27L8eMXSVZTxCZQPQfuAyTxBNbhgJhnHYZqe1BukJ39qpbTmWwyXpwYBfpBpEyhDBLCTA9sAKn",
  "key10": "3ZiuRR2qmynjyYNbvk3rpcRjSJpF8C1LwbruLPaN3kipEzpXHW1w66d38e5VHFKsx52WDjHAvzWhdUXaaVLuz7rf",
  "key11": "5CrRyZ9GfeVVRvRVR38BaUrZxBoLfCQfhKnFQLgrrN649h9sWiaFd67J98fX5pv8cpoemngbhddYofS5YV56ssws",
  "key12": "5ABGbpneJasuDRUX1fiMiHJ839KQtnmuBomhP8LDdQkgLagnuKL3KbhJvzFGVw1qCNz5YWkcV8ifa6pHeBQ1b9WX",
  "key13": "4DwtmGTqhTc8jRuSRozJUw8hN15Jok3Tr7DLRhMX3AUPC3dbwMC1zp5YL2A6peJrdbMYtUkZ6jj4qD1bDyySmbYG",
  "key14": "28cKJzZCZ57zDz5AivzmsB6D6nwEA7TExqkZvwrV9wU68GA9zQFuYSdzC2hcMhyhNrBGW4svUsWJCeQ2D2vRzQSk",
  "key15": "4LAtGQc6VsMfgjiRQoWebn22kcVmkT1dC2RbPRVeXWxW6WvJcm4DQCm94YKQCF17wa52heLH15ueTCAo2Nsygroc",
  "key16": "3BQgWE9UYBEyMvAFDNXskFMnfau2pxBjA48oUZwB2gWZdigP82NXcPx1yyFEmwRHXcmpZyZjWEa1aMrc1JK8KJ5p",
  "key17": "hXrB5TCoj33AfM9JZtE3wZk8gxW88BZtT8r59kAhiXRfJNs74GSEWBrjQcnD1Q39hWmgaXuMHXqZqteFZ3jJEcq",
  "key18": "4XX8U8GyPS7QK5sVwTJfSPM1geV5mkMNpUAiSpKv3SKMXYkfCYak6DRLFh9bY1FiR4UKmsdzqy6TW4GowLHJ9r8z",
  "key19": "o2dP1EJWpjZ9KKoeG8nZMqejpqb2g8JZaLmxdffLsUSAxHfigQJ6hGqW9URdZvhpakqgCV8ZMenF2EWohUa3oJ6",
  "key20": "3iZhECfTRPhSGBMP9EawTN6SNwraC7JU4rGG65ytAjEKrJ22KMh2QQ143GgkpXucP7W51fxUbTQTZnui4W6N4h5j",
  "key21": "kvt7LR4are9arWbTwjwLRtfi5BCj4CGyT9q7aHQW6yJbnMep87WRGVarbZHdWQVsPxMVRFzof2fp87WKXdjrqzF",
  "key22": "2xFkKMEQWgr9LHx8Q656cwfZ8KGXG5F1qwcqPBEBW1B6Pf6QJGFjp6aCYybAbAonPJkLUXMVN5aj1pV6u2DKPqBV",
  "key23": "2uhHrWFKomrNrefCAtERFaTxBE4GnAUE4MKewTgHe1omnhWfBxf9JajURvAB7zyFDRRDhhU1qB2oz9f2Z3Z1uvVw",
  "key24": "Zjjm1NZhq2gFc1kFi45SRtucfEcDa6ProjL4AQ4fm6CFELzC6YAdb6vQxWfzrLPLCL63ddoRMxGns9uq1NieZib",
  "key25": "5pfYRkQTWzN2Nn54jJyE5DaU6Sg6prRhegYhBocFNMAhstUv6yyVBZUNJ1G1zKF8aqB2X4beTTypWMJpYwZT7yij",
  "key26": "2GFFWxFcKPwBSJZMd7fkvo7Nvc8XJDEMYZxthzRGwAjj8B7Kr3xQUDjq8F2HgD9GC8kLwoKajZgHv9gzdvdK63qy",
  "key27": "4AadCQ1RrQVjPnEYZZXbKEmSgFF5a9nMuyzgaLhyC7pncomvZrZDfhvudCA5gx4ktvXZgG9CQoJQXmczgxtFKcdj",
  "key28": "3bm7bnfRwbuy6MNeAjZwvaSoUX7ErmdiHExZTQa1ty2yjq5UBtxrzZdY5mZ3EzCj6rdnNktjh5eZ511SwydpEbrM",
  "key29": "3foTTHpQ7AyQ1435CxcXwn32WBJcwatGaHF4yyD6nLra4CjGKuSJkm8iizT84PX3GZR9XcdhUDZ2DgC8hHY2bKot",
  "key30": "4pDMk9fbHEd9W4CJf223Y7g4UzSuXoEE6ahx3boa1DFXKqUSoahYD7JfYWaSrxynTnytvECJhX6K9etqWBvaj2fM",
  "key31": "62KufHfLX3qL2aKcgbQHHZKDcbQoJQMB7ToZJY23DuByrRpdzYZnYrx2E5w8JbVPpzdWvgQouyjgLS1QXHdjfpkk"
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
