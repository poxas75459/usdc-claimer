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
    "5CwLmfpUVr9Grb9oPxRioPBPZAt9jXoqXewQ5MnM7XGw6hU5Uc7oUwbNGiBFA359mbKmBsLDm1TRmdrz2uMoUbJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JNh9m7pRzESbecdt5r4MP5cQfPTKXPyYyL1n4hkAxhqqwTPS74dKcp21PXQfJpBUrj649wtFD6az8KGKdap3Xkx",
  "key1": "5jaGnrCApQmqxw7912qAtdboipA4cPmQvsFBwU9tJwdmCncvini8XuMH6u2aex1ouqPCb1kRVvGWbaWQrrdVNnYS",
  "key2": "4Efcm3SAKU7tTwdiouDmd4YHP1z9G9xzgbvieaFNVkkNVjgDaWaXtHGjxeYWLTmhiPuKEhdbSrP8wWJUUVDCvNWm",
  "key3": "2BVwatbE9iBnW75x9mhAfQJGNn6kYVeF4pnFpiJrZNEgN3scQbJcFYHo42R5Qpf4U5xvhS4VnY2nncRYfafxZyP2",
  "key4": "4qUKoD47ghowuXnywvaQUDcdc9VsaFuqSBdPSkvcwJ36djJZQwfVgnbRNUQPBZtzDuJmE6xmUGcbH5A7seUMKZkZ",
  "key5": "aaov2a8oN4DwsezuxWQmopBvDvAgbckb24ZSNcGitBbeFgfcq56HD9fcLzEL8HdUSnU6zbXnL8h3HaMfrRupSVf",
  "key6": "4mewSy35trfsbKwa9RgmkLudyHkBa8HbLgKwLpTnzCF3moJpiwb6Bxxetivx5zHYMZTEwg2EEuZdLxTkvCPFkfbZ",
  "key7": "41UwQUz4KswrJ7GTjcVLX1dWvp4ZiNRVKemcKdj2bdExuz9qQ9uxDFkmvxJhgfPVc4c22tA4QBuhhx6jJj9sXFv",
  "key8": "B4LsNpJCckCe4yZe5mnXWNjQse4HwzqTEPicM77nm585pzmsVj9Kxn89zfQTaXaesVhXD7NsuJh9psmsXqKkZUA",
  "key9": "3JrbKQcGr84YbHSqP9gC2huiM6oxwAvbyEnPNGpKTqcKmYgKkqckh7F73eNNuiBtL7MUfkxBcQLwuqjyRqhgrVa2",
  "key10": "5TYE8aJWAEmAHFRBmnebh4XsnTLCghaAaZsLJzAdHk1WdhfMD91tJedRwVzzeub9TNyaGd4daJpmUaMEqxnFNJrh",
  "key11": "43HEBdi88Aqrcu9vsgAzomfn7zhFEwsRyTN7NNjHgKW7pdddAUBtkPsr6kmbMrJwytcM2rwp34u3x9Re29wKH5LR",
  "key12": "3zP4anTHna2DkL3BGQesPgCXyU2XRXm3PZtcvxKUTuvZnNK6qZF8SiNkkpxeusHGACAwqyhx4f1m46gaEjqGDPkS",
  "key13": "2SpqKLhCXQYjPxdxPt3tPmQsghatEbiEoZkfb267DDFhnoynN1pJycNDdauxociwcBv8r7h4Vz9NK6HtzPPTNW4x",
  "key14": "44sgG9CUGQGxjmoVGfjVPg2NnzsFpFUeWGEhYGFiyht4XMngqHk9ZQyF4GT8Sd2i5Kv5XS64bx1eANmFbdNSinqF",
  "key15": "4Hc1YoJYNxL9LdCzZ8oTLA7LY3kdmKBhctFv3kwQtkXzA8vK8Crgt3kiQjwGzAVr9PryL7YahfSnf8vx5idP4ytW",
  "key16": "3aGodEQRHs5FsNXDtaE5ThSTHxhDZsTipv1hcRgUfXfj1WtT3QU67i5QLXzzrm3HoTceUzEFX43fCF81fVAPfHqu",
  "key17": "2rhNtPZVGfpD8ESg6qyE8mAc8KkomAi8od9DeBhTC3Smht7WJppWynnp6kiGVw3KVbnbnsLxA7vKXxWpM8qRMhoX",
  "key18": "2H1BALU9m2mZPPT1Hx7FRKgairJMz2vHK5Ve5Z5js1U3rbJRjJ8cv5NB62EDwRNDg7ZfajDjcTypWHJKLUwWqQnV",
  "key19": "5Zr2Bj2Mhwq1BQHknAWfC9Wh69JCWgXPDcNzVpEmoszgUPCbc6Av1kzGEpuVjYkFx7722vRhpyZuqADrYCLQNhhs",
  "key20": "4iSnL2A96Jm47c58y36Fv48GUPBqWTYHxr76MKiKcQEjWno2V77KSh6ZUVjaFNxTxgjMac7eUgbCvsMnamp6dd8T",
  "key21": "4WqbD4Hy9B8JAGQzTwD8Roh51gfqFTUGvSu5shRo4LT3BDPp86Hm38iSg3t9E3W1hD4UhU1XMCcJFUquHYJQt1vP",
  "key22": "47c4WeNDiegMRhVowKgTmoDnuNhWfiTKbXCWpYv7YdWHCsSyWr77vgQggoytL54PSLc66HhabBax5A4k2ykpbDKm",
  "key23": "2hT8NPkBZSR8siHeNYEDXBsiro9EBQvMHEWcgpJBm3ZMeDbwmmJrbEecgg7CgJxupWX957fSC5hB2ikzLe8DHVm3",
  "key24": "dS1o4ENxfLG74X1Faj3GQfWns2bLqczhS7kqnBYqhvdmCCoExnbBC727yoFk5hm7hbLcHgVxudaFtsKRFzVcTqN",
  "key25": "3ptG91D8goqjdq6p5NLFTasim1MXoNMjuWbG3vfCPsTbREFBgJKjdtuvwuHM3pKCWWDxjDEPt1rPdMAy5o5wYskt",
  "key26": "Xciew1ERot86hNmjF6j5xbsaYqniY9AMiWT1JuwLiL8JtJjHwSSjwMX6BGLBhU3bKFxmMsPHF2uwcpbii7UQeuc",
  "key27": "2rkyE9BcBfdXqg2mMr2nxPd8GPkeUsn6ePyYnYUub2xvsPJhAcsUSHFdNauc5RADtchE96wbZAKwHtmYytfiLASg",
  "key28": "4YcgCWA1YJJLoJBoJwFiaTyXTX4ZwmrPx6yu5PbuHXSzYPMCJj7aBc41FxwzPkhUhoUozAZtg249caCS5UQ32NWT",
  "key29": "5egVgKH6qk1E8BjzV8oYeYMGp2mtiH6ei4iTN5NosfsAnpFHFWBZaL9jqf3GD3egdFTJv7qQyo2KkXATd5e5Fifz",
  "key30": "5uiHtLZUAFtVhMfjnzgRzVUSXN4hGKZvnfnbDPpahBarBwvGh8qa78epqnx5yjxqkj794rnGx2QbXbgWp3A7i1Mu",
  "key31": "Ujgy5XvGy5ww3Q64HEoSpDjGTGwBYN4GPDwoUkF54uA5a2oP2EMEecStMb3RZv6wMsdfqBCg58hgzWxysqByeyN",
  "key32": "3h85vk6vHZ5AaAXyj2jCi3NTW97iX5rEN8gGQHAij4QMYQzPuP3JGqCT78jS7GYrr3mzkEemQHsXRqH4Upzdbc5",
  "key33": "5ntmxuUGd5SqD5odVE4U5M6iEXxWYRcqXPgdEuJG6aKvpL7duem3MjSJhvntNctShNacGvNz2r4t3QXUdKeVePxy",
  "key34": "4ajkJCyR5X6AyRB1uXQK2KaVr24Mr942kTfDo7Js6XCoeFeySacBo3JSj2ec71HAfpz4USpTkXCjysZES9zN1Mvz",
  "key35": "4xtgSBtgMq1KETosF8H1ZhLBRgvTJuQCsU1tmV6eii5mKBjhKyUpDfvGjPLLWkWNzid7e7ZZ9WNQjYhodTt8tfnW",
  "key36": "5cgQP4XwoT4nktKma6J3Ku9c48TBijXTdxNwEbj9nbmfTRuqkwVVJUGzyNSSpucr8jJEZEWT7arsCXZAGAniMzvf",
  "key37": "577mGrJtkdAyKHrZPmftJPA9vjdmMqvkfnhX6rxLNTGouVEpc6fC4gbHVfJ2mNxtYBduWV3BWBz5AYyMZ1d6MisC",
  "key38": "2uVyE3K2EH7zytToNSHFVWjD2b6eCeh44TtFoeHZsiJhviKv8ErA9dqzbtWUsTaZTSu97bJLx9f32oBbDXxueHST",
  "key39": "4MX51gxs1pw4xxjYcjJ8kER4vTyg4Hum1fiNxfHBoyzUf3J4Vpq5H4Nrwy23Y9JeXC55y4wYDd81rzg2oSeyf9N",
  "key40": "56zACVrKWETzgkhKg6p53swU97HCwtcWdudYewNvv4WCj2y2D1urvtemhQHZQRe6n2q4cDw6mZygkVk6Fim2zMNK",
  "key41": "3Z8xSmZ8KnyG55j87RFvwvnBxbvvXx4H4G9D8WcLgRPUitHEqEWSiD4YsuqxHr6UxxqbJ5r4tKG19389k3K3yuA",
  "key42": "3muvEhxJTeFUsvawzkoEDNLhPMPfq7WpWjkmVFtU9niH4cgdnDoaCuvBVcLG4WLfHeGMLn6K5juPWtfiERCfcgrM",
  "key43": "3yemffAiygdptEKc4r3J58q22gH7Y4tEL446RR9URriRfMgCbyAmEkEzXfaM7pVyz9RRyWZ1Y1ES6jyFBFK3kzex",
  "key44": "29vQ2d4e3gW54jnpYS1GnPHcDK411bUQyNhehpMZGUsJt3vjb4hZNXtCu11vBc3uTNjRxG2SotQNWeXBLfqnof4v"
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
