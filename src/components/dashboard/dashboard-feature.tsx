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
    "3A6uc6vkL6ibpztVm3xTmWQyjohWsJqcid7373DiDdmyAjj3ntCLQZs8vtXrWyxcC6zntm8zBFUADbe6cHEBGBHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jx6qttSjCfGdFnCwvRuJr4DSYWbHwbQKrbBk4KKvrVmWcbNNkMeiy8gkRFoLrQEaxVkAmZbUx1e2QibgcnWns5Z",
  "key1": "VmFyVvJjzNN31bRPvNo8ccqhCW75H3xeCvAmodaRtX1U6r5SnQVnFqpPBbGNeWQcnBt7sdqUhoGLrkjQyAtyKsA",
  "key2": "Xg8nctUrEnF8PepwtW35MAfYNZFmbpWTrBXYojufiKVdVSwXrzbrb3wZ6CH8KcFRxPQ1vrsZt3aPtLMx96E3MFt",
  "key3": "62shu9cx1sdwq9WXt8NevmA7Cb5XngyfEhCfCeFooLfkK5vo4zRFpnz6EyAAnLwMhZ64rPYQnfBWPzZSeEipCP55",
  "key4": "3iXqudaoTunGbdz25uppQs8ewyXXFe53oDFTqmmE9xZSUkVm2ePm2yREaMFrUDX1c8jJhdvoPyMj2CvFPxgWRjet",
  "key5": "2igQ18QQaEu4VRQurKdBCYGhDn4nUPwQ9HFURbcSGawtdTekDzHVqnevZdryXzbpfHUx7PNbnhsHq2gdbrRzvcUq",
  "key6": "5Sh71Yw6mTwdoJkjYFvGtXyrBCeb7hV5QSdA567J6eBW3L5gxPFeJaqZu4XeEdC9EaNyAcdRq1oWMPUrC6YxCqVd",
  "key7": "Mfo7Wtmh5NCcds8fY3R3VEYjA1sY1sSFKzKJaAjgAaudeAKAy6ZdSiLpTc6YNaFLfG9VHupD6tg444ib7rnW7SL",
  "key8": "2uvfnwvs5tAK15WRpNPdpGiLDxg5KscirJJ9mSDkHgqQJ1GDUt7WePJSP6zErnYLARUDxSfprjJ2HXrHYk8R2HQZ",
  "key9": "2n3K8DrjCrqiTwMcGm4RRXR7Jv7bpf7vQa57A2XE3TmN53FSPccoQo5j4GffN9ZhoymWychqSfQMR2B2P8SN6mCv",
  "key10": "3mDB6VLrD2VRBMWCNMN7cH8YgTzGUb1yLUCZQG1tFH6d6LixiwnBTQLQPsk92a6ceM3Zv2YiPC9ucWjio2qkaVYQ",
  "key11": "5koS8L3qhWoiCKmXWkuXVKQ652hYFuMU7Mb7mKy7WrKJdBdqvdnY8e6wcYRepRUGnP2VcppkHb7hkXC44As8rAFC",
  "key12": "64NUzcVHQUUCEhndS24jMV6WJMgzhPRMVUHrSg2Aveq3r4gNybVLTrnz7QBbkx6t44GVBRSR7qYNaTvxLv7kxetx",
  "key13": "5oFTHqzU2AxRUSvDm6Lp7SYEHgBBNK7w1ur8bKkVGb8RgzT7F9h1iJHZgctrzK3w1zKaf644f51Ed887kRoK14ZU",
  "key14": "5RokVGHBHAnyDjGQ9tE8ZqevsUYuCoPQgwenex1nUAqtCD996JVdRTfzTkNk8WPjHwJXR67caQi2AzNPAxxaf7Tp",
  "key15": "WRLiQj7qpzK2x8N4ibeAWjVHzEp755uJGZDvnwfxJw53jHKqRVBa8MqGAKFV9tAafSXYtdtkfy9BvqE4MdzS3UX",
  "key16": "3irVZg9QqfrtT1xMSByxR9naU4HrF8yJGqBQkDZnnZRaCrbFMJ1sMsdAn41fqNSYj8WQvDA2MccGcVvH1pYmD78R",
  "key17": "5sZVWYi8mNYxrsqtbMJa1rBUZoCdUX6Npb3A86kSpYU4KZR4ruP9aLvNomJDGXVLY65m6ge72kAf6rruHkpg2p5Y",
  "key18": "3zCZVA5XTWH274zbKjCLsJeNBicZGgupWSxtdHZE2HWDwKCzNWe2sSjt8kWLpiHnUTeFiAo88uefmJB6gcgNqSnS",
  "key19": "34cWTknG4fw9kmWqGGYMeEjPANNmYTBYNfUBCAGodRtQzw2pSfbLjLQ8Zihp2eEr3wRfRc21PBtgXDvBf2qfgMWj",
  "key20": "5U1EM2Nfusb8eFuFVR7T9gt8zPHx5GBXmXSHe3fhktt1Cup2Jp4Pj6RWFFTAjEuqANb6czgvcwDA4QpzQihCTV8E",
  "key21": "3NRg2FMRVbYZzVvfC4drxM7jfdzBzUd45Uc1drAqjXCwtiKwrdMvB17fnZVK8u5imJzQK5PR14kAk4aMRYJxZB9p",
  "key22": "2uHEkkzWHrv46J4D5ncE8vj63chN1e8J9a5C7iJJkvaEH7Zum8iAJc6nxTSK5gHjEnm4sfCNHa4hDBxhGDEyqrwa",
  "key23": "4eqSmtTHvcJnjARrypJL7L4kDTLmbQeZ5oD7C8qa2zzhGdeKJ16WjddQitdjeDTkLBtwGaDdBgdKWPf8pgE9fBEn",
  "key24": "3bMwuMVmp1LG8ZoXayMhujxqMrYmZ8JS1X4S44ZLXXp99zSX2EZY17oD41Z5eTo2ckzizz46hemkoJdd1cC5c9ur",
  "key25": "2eTBhpwWTz4t1yPryNKVqiqQQ3Cgh7TbcwZvk8c5SkhSPtx3baQn4su9MtWg4XZJzrGviekV5W8uxEagYzQ976F7",
  "key26": "3i3mS5heWaddEY3U7Ch6GJGhEqoojR2JxEg3zs37VTBK6FrBQHxaUKDU4wjEq5pwvdvjgJqHdc73kxn86DqLrvwX",
  "key27": "45rtjJsyzFsYdXUr6CB35DUhESgfZDx1gUzMpac7aom8LiGh8DJkdy7ME3PkY7M9a1Mggtn1yBzDm1JKgGLGhWwY",
  "key28": "2TeJM6nGVJDhVFYA5GNAVVTYWP3vUmxRVGbsNiBFzFdyPJ4CjWuSTEJiaVv9CbR9J1T1yF86ZbW99PhPnfhtjGqb",
  "key29": "G1VcBcZiSB5nE9vYHDAfnYtGrnagDLWSM6TUvv9AMyRLz9dyZhjRkvbDymvhmD3TeVvwbL1hK8hhu796JfEFro6"
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
