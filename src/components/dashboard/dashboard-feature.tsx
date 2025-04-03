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
    "3F5NESz7AZh9LQixfZzCAsX6iajF1igYAia36w8ZPz7g2kXNbtU9owHwY8dRWyeq155oGGC8VLPfGvsWVWeJa1wx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WMc55drNJEJmGU43SzWJK3sbnzEkpFryef21ksz3tdzL62hc65KJ7CUJRwGVXwUpx8fNJ5LFWK1tj2ECACbTRag",
  "key1": "VFMvGibFU7c59Y6tZnf9fFs71CxP7Px1n7nicg7TL9CSX3WAqds7tAnJBLmcJaM8LUDi7VyPEpkAM3QioccyXV8",
  "key2": "7Si9Kj7Ddac9Tp43bdhFLn5PhVt98ojk3NmwRmtJ3acYynZWABsFbMmVS1V7TYcar9NBRURBc1gmctUcTTWNWNT",
  "key3": "3xkvDrHhDJgibjZHHDfocHhMf8uYG4FHHqHnBLgjrRDvsT2ixTczYPnawYhDYZ3SD29wYKZM4622EPWK4ssexpBA",
  "key4": "4ouQy7XyUigHM7qzCt9tV1yy7z5VLiv8yWW3Yc6xsgTyLbkTmq5xXkzTUrdXdrNd75NoeaoYbemGUK8uzGVVSjgk",
  "key5": "53tXneEPCjDcuyfGurYB8x44jArhCfEJAeouUr5zW3MAyn3i6jSfqxKuuHUMG1i2mTma16GbRyLWeVDjBB7ww3Qc",
  "key6": "2Ru4hVk4nxuWoGderE1gxoAcfytBYVzDrYJiL9hVkifY22WF6SzTDBiQt8ygDVcUGwBp5ozi4QBJ8985Ce7wuAgm",
  "key7": "4P4pWoTXRw2jBqQjc4JGXhJcvixQiztSEyXJRmvzHKn2Hv6ZRDbXZUjkwNG3mJGMx8vLUXYoVLURDhcXFceqMscL",
  "key8": "KTYxt5CL5Lb9Q6p9o4TugnPbA6KHRsAt2CcRYWghBDJaVKz58wTEcBgm9N6rNpDsn9cSNnVjsLCSDPEceutWoMA",
  "key9": "DDqkJoYuo16P8EEYL9x6TynpGivXRyipRFK8j6vn9mWcPEWhjaKbYevTS8nsGYFAxrHn8u4EHqVMYeZQHHmawJH",
  "key10": "4DMov9riTvHkMzt8PDX9fCNBZ4LmMdB1rvXYGhqqquccNhSv5rDvKYp7b5gZu7LPubuyqgyftAv71uLPh3DFVcnU",
  "key11": "5D99HmnNrRFyDE7p56SUCQ5K8CmqUg2CtFSYYQg6mpRwjKUtsmbLgZMTFnzXXQAigh9HDf2XMyfzc7oGmJt1FhXc",
  "key12": "58c4EWuZZPSKgte9KPNNaXBwddffQzXXtLw63RWYQoR4YAKhfwu1tiP5DqHgVofuGBQNKwdkQ6fDqUBAMSv4Di49",
  "key13": "4tScFFAJQ18X3tTXQVTATTgJzrkaHSogkJkLGb7968qozYzPCF9TZs4JKG2V9NuKvZBhw9MfpmenUYxQ19264wLF",
  "key14": "5hxXtQuS9iPJCC6eEebUJDM1v42e1erqeR9iGQTDp6TsrCGzzjLZwwwgW9XFjZsvgxtm51FaWB2snfC4kjP9K4rW",
  "key15": "4RLyidWY2geM4jM5EFzHZXF5cATtKzxGz87yEpxU8qcE5VTnMBVj6VqZmtMLXSPnXuT3FSXp1wc2mP3yZ8pooMpN",
  "key16": "335tBWemLkA78Pj4dEs49pMPaZDHtKQ2tVfEutdZCAQ6VCR6pDgUTS7k3Aw3gtYdvYJyPdk8CXiZKKTb5NURzEVM",
  "key17": "3bskBctyM3XNUFwCqBbaxtKCbjEaTZTb3VEjEi7xNTkh3kLpHzJUgfiGcUuJEtihn5zEhjMNAsPU5Sb2UywbNViP",
  "key18": "4QDYt11JGGn55AFaFyRPxbAKKKLd52V8jMMwuYwkBG3tHBbrDTcUzbGmYryrTqkkpAyudGZDPFKdZb9TXgVoBnCC",
  "key19": "ScZhTCvKYs4Huqzsozmqw28qkTPUiH5qan9nD7HSSStW6Ww6uF5EyXjTN8qDufRTUXjsDx6Kc6MtfvsT9Jcc7do",
  "key20": "1ykTwn6oL9hXBQ1YLpRY6Djcit7oS9Mobm4EAEBvE8ZVCaQSR5JtD9967KTxrmoaUazcDjc6scFgPi87YgTY3tg",
  "key21": "5zPLUCyQBdHtS9Hwhg439YDAWmTpUAiA5jLdrUVG8qKhJNDbtThx5eQQg4LvQJaNmq3rXKdsUYTshdtty5J7cciX",
  "key22": "2Z5YbyAj3qP1su9sz4hqiAfUM3LtBoG5rQMAQdEoWkzZLJH17zmSfQyXtk8BxGNan2VBR313ZnvLyxUdBBghv4UF",
  "key23": "4H4LHBxQgCJydHktFUTFjjyYtNm89w2CRUUKyTJxq2rYdUe9BsSdUqiFej8sRnGUMWAyUPmZBonZNAkjzxj8BRiK",
  "key24": "45be9mVuRiVqNfjJGEXYQaxfosXuif1c8EeEJ9xXTZStQu9Z9vm7q5z9Zp7DqMDQRVoubCsjjwyKbLUjkQYkCUr6",
  "key25": "2GGBj3pb79aV4VGpeCBYW75MMLYiGBGKQ6DorF73s6EYrQRZo2qoke8TGJTwBd47GJQoanGbiXNLHhqncCbU28AQ",
  "key26": "HhFjqHgvgGUbKL2VC9gAbLqdu2agQwRmZ9xK884Ljz9ePCrZjBmd5YCnJHAWTtMSBYgtEcemyM8EV1mSyPnq6MF",
  "key27": "4vWHQppe55TGuYP2vJnSHesVLoKJU4dUXw93QsGEtJZ7QYte7wfjnF9uytLfTSNHTF8Qwrh8ajHU5MZMD7ButVdL",
  "key28": "34oUf6GHyXv4iPokpmaUwupDPExc6Dm9TGtAie8pHF4V5RqVCcmMwTK9XwEyp1RzAaHDu31guDv7eYRJPXJ77uTm",
  "key29": "CwZcfRt3z15UTzFHNLaXFQdobsvQkcjfHS5Z77eUMLcgx9dyxygVmgjGrjNPHt2f6oEXnHPaHF7R5BvEDZYs3HK",
  "key30": "3HSMEZkNuw3fHqZDRJLxCFkoZQXhk1nedG2WjHEcs4YK48g3sNmeL5UKNT2nGQF8as1JLbKborv6mP8XRCSMYVUN",
  "key31": "36jrt4eh3ASiqjvSC387sX2ob8UAyhCMBGHiv8HrXGziqmHwUCy73Gx3exTAiHbtzoSkNf3B13zLs6TZJsMweGLS",
  "key32": "3S8wrCk6cvQdF8Fq5AVnrEXUvTgFgt9nFra75eJ2gimUdkTW7MhyKWVsMer1YSPJkDkcBkL9z2RhSP6Fs8zpwbrh",
  "key33": "CDgeRWghjmFw9U4Q6MVNkxH95PwDcg3BjRBqCnBxzBteefNy5zABjjQZtFdK8DMgcXc1bbdetKCjsbauV8PA5XQ",
  "key34": "2Zo38pcM3gaZFAiNMx4XK2miFS5y2Hnc81FkNfjakaJT2LGsWKYhmbFwxNDGkhW6mSxzjRLTtq9txwzpf1DriABr",
  "key35": "3R7Do4sF2eXC2zD33KTbg7hpVdHTAnHVoZdjRi9ptBt3ZAYhC357RG7kviQ8C19YbhjWBihrJqhmyfcBEbBtF4iY",
  "key36": "31oNPVkxe6SHiSoHb8SWDkNjHswCx3JxQ2zvFuSMQS4W5zYsYY7a1Wu5kYJFvwci9RHj2fRT6NivpsaueVpK6kmn"
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
