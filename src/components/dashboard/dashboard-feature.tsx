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
    "LrGQB11f54wyjjj5rJ1jVWR55RbNduLnkLn26KSP816YpeqjgLc9NTmKLWS8sDEx6GU3XzSfqLYZCTRYFDvnjyo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rZ23WaHTNEQhhrYKTrgvkE1rN1v8uaQkeCeG2JeaaMeRrwAmmdQ5au8xJ2pvwRNieRSgynfYELbCBoJbQfM5kMF",
  "key1": "5aLqxHTC8bvHgnjPJwgCWKcffXj3jmXtopw1cPEvDetKp6NLx3kBQsjNcHyn41PTKczoAmz7PidbSXPEs9D6aLaA",
  "key2": "3UzyTBKebjwrpj8yheA6QeN3uskgYURquS2bmBHn8c5PN4rHbQhXr99Z7A1vvunoWUuBuDgZr5bAdfcdVZp56bto",
  "key3": "4Ghok8fBCwxfZFFFoEUD88sxKYsdxVGsQpaCFW3ir3Ym4wEbXrjQfoYUrHr8HbddLKJANh7vAJtJP7HZkEz6KqdZ",
  "key4": "egtdsG2LRzgRWWavX6Q1hXE4CQNxs3dksHWDtiDA5cZ4NwMPZJqeWDKEVJSPi6UD5qnZUCQKT3j4cjV1uJh3VMb",
  "key5": "38MCPqqrWnFbmRHaKEqeBn888hcdaUYkzn3jZc3o2HUKLqP6nQ8LvjZwivfApp7iVSqiBbesivomBE11ajToiCF4",
  "key6": "oc6LoupNttbVoDFGCtiCcmXfh7T8cwCssGXroQgYaj3TUQA1ryXYtNBZUUQ5Q8UjQiSGgEsdArfpz3n57UEXj1r",
  "key7": "3nujduVsmfnQeuQmpgeCvVjp8M7PSbKfo357RSAk9omjTkcWGaR9eaUt6y6zdCx9tx7yZj8PhDYuj63sVUQ7UK4w",
  "key8": "4gRBHd4SCuUVoWddRZpbTuHjtukKCVg8Wp6qTH1sBgGnm74jZ2g1YHJPsVq34Dqe7jdF3miAETHPXhXGyg7puiEw",
  "key9": "38X5Z9VTgrytffoG2UfgA9A9AgaA5o3LzxMXpSHHQdz72Ry3iG3mmjvLxrErRNHyz7dUPWuD1KXE72FpPhVdgM26",
  "key10": "2XpX8rV427DeAh2fTDGVF7u6NQZMQZXbkeLt45d9oJmZFP4RkCLZcHpB2SoMMmv8EsfziT1GA2QKd1BEaUL1rtSg",
  "key11": "4Wphgo6Px8zdGBd7rEU2Q9JYcjZuvF7gVPDCoMwcLyMtMvomcmjDiFk1ou4m8CwZCsyj3X382Hm7N2Lpy13KtsQQ",
  "key12": "BYeftqgyPANFtg41md6MktfzA1GfBVHRqPCAMkSB5WQzqrrUgxMa86wqBVfXtKXG1MW4NBJGef1WMM4RT3DM4Be",
  "key13": "3enBMZkcd9A7RNJhVp1m3Q1U8tarEEyEssjXyzAMepY1LNUGJkG16uKFAaFrn8W6ceaC3VNqzgbVnmqKGzhteD1q",
  "key14": "5ZuNT3WbtY7z2JfpypZuZKnAs1SMaJ3EZfUhjc1VUNCijNyHFSG6xz6o4DdtqsQrmKVBFBA5M2jCRgRn8etBeMuf",
  "key15": "2sP51X6aPTvrfgpWbu7qUDBJQ523Qz9aP3caq7tFfz7Rvh9c6ZhD68YgKyu6RQKT5WgZBwUdsohSVkr2pp6XaCgD",
  "key16": "41yJXqJ9ygvvkdGzsKuvmxpkQz1tVQY45nUsXFLTWyrhHVmhiAC6Tsy8fQu3VXKNdu8zPW5MJKGXTWesJehqJv9p",
  "key17": "DxNaXCHkbi9b8WQJaafGpJgwCa8r3ZMPQtB7QMeL9DXKopxcmtuH6yCpmHVfHNWwFA1pdauDJsWDtCVUPbLvR9A",
  "key18": "4jTbff3GUYimcaP5GB2Zye29VNkJCMSiEKub25cej5RT9HurKgMJ2dg9voyxpAvNSNAGhwV8d5YhHGvqa6erDsor",
  "key19": "2c3TL8rKyUnakEaTdnh6jcjpowJRGjWD8nVJ9VKK3vi73WT8YEFbzLvBuNZ1vnmaqzLQZoWGgRT9tFUZQvymH5zP",
  "key20": "4CHc4fGMpQpYxKqs4C6whdwByj3G5SsGpnVKncHL4AUMcWsjBwt4RwTVjAmWARWhSF3iE83VwYNcfb9NwiEf9bs1",
  "key21": "3UQmLwiuwUbtnFpzjdK3VL3goAzA6z45Jj3bt354XRBHrUQdZC8umhkYe9mgWG4bKuy8iubd8KMa3sdf5kyNwFCM",
  "key22": "4E7BYPoRV92zGeXyuayDeaYip6CCubuZMtSJ1y1x5X6n4VccmaLaMP7WBViEbtMQLNGRruKD2XkPrGaW7U2gu8pv",
  "key23": "28eKfpnWBVjac3bmoFKPmVncqN1sovXsNjjTf2Q6KY2SEDRWgNJ65jdUFVwik6AAjhB1GoNWifjNpPEro5DQMsuG",
  "key24": "3wvnppA6hFtK7GzU3Xocdn2CqZnUdRXV93sBNivjpyYj1XHq6MUDLoGSGZ3Z2ebHToWGYCQUvW8VYcz9gRsMcSkb",
  "key25": "5SRFM1SV6LHkVz6zeiCRUXFJqHPPh8vh3mbCu1n1jx89Ksz78ULPAAdMdfn822F8uaNV2TcEgZGPjVsABhVbMHE4",
  "key26": "3WcM5QSjUkAm8m6mHxwT9KS24VvYRN2okZENi8NsFJNrts8vhi4n4xKUMWBdz4ZQ2oCbJ9iadTFqA4QVRQscaXMj",
  "key27": "5Bj2raMouTQXBMAWwPjdTobNtJ2Co6kuoqNosQ7uLD2tr7TfPoG3wsT9PFgsEisUriXvnEqNAbkShirj68iU5353",
  "key28": "65FbXtZrBBgN1jay2oX1RM3fhYqtbK6rGKkmQocZGWxUwzwomFsWzz4LdmPj9XXF5RhosrJMmixnAPRT4QWs5Rfg",
  "key29": "2v2AhTzxYyTzZ6kCrdPf1fXEqit984uiAHffWwuG9zyeVg9pWUiKtoHD4bagQBhYeHY3N4h82RSCJhQDGtG4EoQY",
  "key30": "4HxXco1ev1NkTL7ZGPJd9znRit6sSz7YJp8Mnh5ChYb4wADeque48yQ26WhbtF6XqfSKsFS5JTx6uxokxyuwAKRn",
  "key31": "2P25Mo5wwpWTRnMKjPkGPBRhUGTqqsBwAtYe8zgtSvZxJhcABiamKzyKeerjHQYaoqgmYzpd4Wn7BsR8LPt5APKH",
  "key32": "2oaWiV31UWMoXwjNXaEcjH8raKM7GweAU9osh6e9HmJhffh7tF6HL3UcyQLzwYCCRpbH5Qbzj1Bm8a7vn1g2tR4m",
  "key33": "3SEBzgH3gShSqBeYKBxCV7hHxbBUiYoa1m98ha1XMbHhG5wh7eAoYBWRjTQnEongWssXD6vyckbzhhDPiaQwBVYq",
  "key34": "5sog4Npz1c97v6M2yUpmj3gratPqcNUsLvqQBffYUjaoZWY6mknwh6zwtfUXbiTws1QTHpEy4tkRhgzjMx2ZPiEk",
  "key35": "3GiYqHgecxQVnyTbA8q5rsAvykoz5M5WzRug1wKgxESsYQfXS23pQXpFBtygDX3HZYYHeHKA4xD9zgeAoFHzbfvQ",
  "key36": "3Soy5GrHW8aapjG4QXtzD8AMtyTV8QNiiDP1oqGn3FboDrJDLajuZMgsJ3CBnFDdigxjFMyRcrUykXg12iYYAc7T",
  "key37": "bQzAzQt5FQXoWwCdzB2nBKZavXNg7DRCAFJrKhosqqAYkmF6sAKqoGTT2GsMVb1r9EuohT9WgtAbE6yS73JVNxU",
  "key38": "3nN8ihRFByztc9J5sBddxnWb7hVvjC93pWVBi9PWzaCw3wUSRXUhTA1DPy3BLcCXmDUUA9rVD1HfJdvLB4cAMUKV",
  "key39": "3EBZ8shiVt8osEzk1vd9HqU7nPWpvAJF9dQYFqymepScP6DGnVkPgoRmVavvJYaHCNdBgVfrtmXEU4pggUZ5PsiT",
  "key40": "Zse5c6KjW5ratQDNhZhm71E4pAcZ9AukXRgjnCYHs3CzUhSJyEXGUUgUZhug7eK9yz8M7M5qfKsbUzraFg7k3JE",
  "key41": "5mehYMCSMEXeJYuB4rGWMAkKVnDRkkppZvovsiwrmKw5ZdGYjFaeZ6zpYFrKsfFMSByN2Bm9yh3WMu1jACWQXUsv"
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
