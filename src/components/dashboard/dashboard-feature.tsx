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
    "3fHdCHsE5p7BDDm5BuL4TLkUvUbBBsqG5HkZz5fRRRoNqkn5T8qq8k7Ksp7mQyKvdygAZfQrcyKzTqtXbsAadeb9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ff3mFLhH2RAVnykGFxjHMCfDjD21XaHT3ZoYceLHhafjYuvSY27UJWiD9WGGJ9KBy2CW6Bx8t5NaM4z7UwqvjXe",
  "key1": "2GGqRC92Fxrnh4hszbrvggpz1KfP5NtdBNQcL5DBodhwEYA3TRKhaxiQFfjHVw6xggdxC4sikaA58LyLSKm9zPCD",
  "key2": "4NePKdUvAVesf3NK1AvMq9KCbar6LdDMxGJBa7tNL1SBcU9EVZTWjmX21UVCSeiWTMkj8oGxJXqZH2jo628B7qu8",
  "key3": "5cjPTGSHCQuKbJQ58nDeyQsowG3MRjcBKRgZiCoVzRyGLDYdqPCZteyYLUi5SxWSeDMWR7tGZKcaaoeX6dhTAVqE",
  "key4": "4yDUGBQqB7fBjMFtdHjKBMkN5ViCwVEHRSrpPHK2LcBx66gMn8sY8fECJeXWiAJSxvBRWiS1ztNkhYckRpc8PdNd",
  "key5": "3seczGKxriuPKKV7t6gbY1R3WRTwPp3uvjPYzP3suntUEZDXFBRmKhdZoj4Dofq2KrvmuuP6yB7MDisGNRLSP724",
  "key6": "5hyYGRy59mJ7bPJXY3MiBsPfRnDDy6TqAawAYUV3E7AZW1V3hqvutCZyDp6s1vwFDgFRjdCCYTZhXznsiRy7PDHN",
  "key7": "2ZefbfaD2QBnxwBuoxbWcZkMzyehLZhQr2aj4dv1JePFGkGrz5GvFtVAZ3UCPxkTwuRt1kUS3r7mkrMRAM1Ym2Eg",
  "key8": "J9iaTZurQJ5Yvkx6dYXb5Sbi4R7GgfUdqoUXsMqqthY8xX2TZTYQX46WdzbCAsVVhHbaCC1BMHLJTriaNHmgKRS",
  "key9": "5q8D4igZKsUag4kepAd8VGyAGDw3ZiLXxAK3wubVbcSZVmj4THni2obJfU4qcrDVWVSfjjWsCR3QJKfyXgJWxXT1",
  "key10": "221itK16d9WhE7tARBobuDrq1PPtSvpneniuV3sb6gXkCusPkvvqEmP5RUTUxQhobGTAdPQ2RoTg2FJphWHJbU18",
  "key11": "5QmtE61Q2GPFi2T93TEf3BRYebkCVcGquRm5AfsSGTpQ1BURKXsnN46JkJrhBfbbT22aFBqwtwc984Jcsr7SQqSn",
  "key12": "5W4sEVbsWoMbPP6rF6SGTBpFkRi8DgSunDpTjJBVW3auQfZ8ePGuFq6PXb53LF9wFQi52qXwPQdGE9X5K8fSHxev",
  "key13": "5Y2FJ3tRDXSokXp6DezSFe3uHgEZRga6y8SR6FQij3NBpW9Mc6thBJRtr3Q54wNHnzZjyJDs1gKsED5xn5jjuciP",
  "key14": "Ln1RsmKBAkig9qyEPJzz6YmYQTncdGQjFiSwD4Vdu48xrwZvgqrjytLJtA1i2uKcNGyEFy8NCcSRE7N6gUUVYhn",
  "key15": "4h29A9rotAnF7NRYoRSYNJEBNkZv8bkowTnzzEmK71ztAwu6DixwBaapH37RUXQqZM7o3aYHR4F94m8r7iQpp2Vy",
  "key16": "3Pr9zzGUUdT5LWCSY5zHyRRxeZadDzdLA2h1VSxUJTegh4LBmAMAhUc3hvCffqjCAzykERirorFPbp53fji2e1K6",
  "key17": "4qoQfRMuWigXdZrQb19z1Az5XfzezwH3NJSXBRjteGurhr61rUUT39AZHBYGLWwqFDsjair3gARpe6hBmKBPmmrg",
  "key18": "NxCnTpvVQzkCco6ft2R6hwvxy2jRi9UX5CVQWcNHf2gNUjQkab4piSVWi4qtZxjcctRsY48VbVf5oq4sh45b8dm",
  "key19": "5V8amoS6xVEXpGzoKGkHb3dudsTaoLRvhrFEfvLRjEZuU8dMwDGS6LVuHD6ak9We8d8r9wk8gqJVKwX1VF8RbbP5",
  "key20": "3hsfVXqnN1BCGhwM63ZhKiT5thPcozb3n2JTLS6TtrwY8yY43xz7wCy1H8mUw8tNLKqhLqEHjbvLnQbb26DrrUrd",
  "key21": "2LxW7L2NWHcYmQcfppNNJbqrJMHCXKBJ9wGXrvBtMwhToZgWjRWV1GGM3gm7Udf4WpWbfvrhYhaLC8DzRtGNCS3B",
  "key22": "27z4XvzLhDaHfmCRMtNEsm5AZa2qTL4awg6CDNto2CDwiYsKKBXmVFHPWhxd7gVRrteoEwBVHwyZxyHWmtrujaMW",
  "key23": "21b7QULo4pVRQ8drWfauVDr2YshHLFwrM7b2NHPiPEUtqU8u5KjSD7trB6X8LfCuwYLLRFZMSz463iKnF2MUSqDt",
  "key24": "3HK8y6P2G7kbx5QCCs4NZyNETGXbd3S8hivJC1jCXHKAA9ePCSMBAEwxXFVzLoS17cEKb9JV2VsbpvFpAVVVkH7W",
  "key25": "48hFff4vxF2SXTz4p3iLx7sET2jXpYzgpF8d7JdmyA2wdu1wkwiusnnx4HVabtDWmsGT4HqhXftKJAu7dpRjsXGp",
  "key26": "5ZnD7pNkrtXfrdbHuraCq8s2d4JChgsTDRH4fcws5Z5zB6X6NmLWQdTGZfiwZMCrxR63Rf2nVsKghvLnctvdH2ks",
  "key27": "4qK5Zr6CbY6NZAe4quqgWL6bJeRBHDMNdGToHhFKkxANNxz5vLuYpSEYwNoYCs2cyqhz7oDkCxYQqxjVrMoWEyRw",
  "key28": "4CUfjTQbB48rx4ajMGGCkFrefVErp5rqm8TJnEEsSEazvCV5WzDLfX4z5CpRHbP5zKPAYJyWNZButWSJTMJ4mVjR",
  "key29": "3Cx7tDkQw3LcuTgTDUv6srC5CqWBrDUESzGNXcg1QUZnVqYpf9Cxtgt2xHstvNVzfkF1Dh5wijWzhV3rnECumvgr",
  "key30": "2DnXqB8qDfxeJTYMtDFyKYyhw2Fv4ar3mVfEwm8Zqgx3ieWzMoMkdFPZCCnkaEM2bN9NXxFciDLuCCKknbWB52b7",
  "key31": "3jKunADnF5qXkMFY24LTQ2yDxmNpGTdESzZRA2gMEZrXtXBLhPwLxQ8SjzfmpGMLmF7eJa26w8SJJdhZukZSFKwx",
  "key32": "53yQ7kH7YRBiFEjBZX1NavGB9frcj4cZysabtnQWFssP4PwxbGr6EmPhzH2aiPorACJG34NDnBbPYRUjjasvfis3",
  "key33": "4G1VdBaLaKvoL4uXzyHjbxS2e5Q9jmDQpxr1rLEdR8PKxTyKVx5qV2jNGPnLHUXrBSKLCTqX6HfefHXkTsofBjPo",
  "key34": "5bz2Vo41CvfsGhyK8THMUDjDqdToZgWy52T2o38oBsRRoCHEY8izihbJqKmhj8YZiaET2BG8BJrwDug2V2P6hGtK",
  "key35": "2Zdw9N8KiKwffQmiKpAnZTkDnw7vAknxE2U1yqXTyR5edXKKcN8mJRS5e9wtZxv4ZunkDPdAX2UPfnY8roDQ42oE",
  "key36": "PHVsdSjAs91VUtNk1RH6va9QBCqu274Jrop8Srg5jpa7hFbAzqcMTmVKMC3uK4uM7cE6FN4nzFgWYZ3EcU8En5J",
  "key37": "2QtpaZVcYVBDJVs7jV754dxuD9mB31jTzesGJvZs3e373PYXw6arzkPgnXRdAFQ6vt5o2SKupQYnztz9Jy1YSy5J"
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
