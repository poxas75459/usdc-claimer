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
    "2MNDu6ZZjsWsZzwcQ3Vt8jPsuqvDXEt3PAhPMu7UEoJvzd6iaogaSaPxvFKFo8kPqczLFNeUmTEMhWzqvhuTzC1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62DYF5pEm13Z7JrE8TRY7AeazgpxPf15giPkAJ9WKrHp12HoFZokMFWAZLneKFgff2qtNpMBsUW1rgqUKPEBXVg9",
  "key1": "Nmi3StmVmY4tgjWYQj2SRLRsyAbu8qYo1PngwZhzRZnSWnkf5WzvvhqNfkpDmrcLCtWGGyTjM3KqSWBRG1sK8fs",
  "key2": "z9BiSzjZWtUZVYfgGQSgY3EBYJf6seHh3gVi2FTvjLaD2SkhKSU9z4Du2xxPR4Mrbdu5xLcW1vXHrtXc74CG3f3",
  "key3": "McnShWqMxLMGDAxUg2qEMbDJobkC4aUUNPhAcL8G7mC7adYusDSYGJging6NR6MHPE35CJVxiWEgwz3wtCZeRLu",
  "key4": "4UJDszTP7kVENhdRoebi6nNgqevRbYYavSZUreDg62SsbRQRrKntQhr1VdHh57SF9G3g3XYmYYMHS7MN22qkjEyf",
  "key5": "2HrctbVw7rfFq4XUgYPKs5g9YYxbzbXxfbLe4btG44ZyTtqiY3eixyfDwMr14XxL1FbtbKx7JPTrCwQfqPCfcjAZ",
  "key6": "3o3ddwoySpMnkXJ7EZ6vMdE1FTiZGxECe5U2nZ7d4wq3stApkxqqC7PEqk74KUVY2xnu7SdCzEtUM4dFtG3w89Nf",
  "key7": "5uRikZB6ZaRixbGz8y3QsBiostJ6QiV84ERTPJXdG9avd7t7w5ufmHpKd88qp9SFydH5Z1m2Anqnno6SyEWmEVVh",
  "key8": "4saWztZ344kxEyaV8N8nCR1RAvw1oYgJUxtsyQ9tBX8ZL6KYV3c9ek5JTQTjFJqwhrkLXgsLqa4ATqFLxTZ4Rrb2",
  "key9": "2D7AotKCYpJft7tKa5V9uDY5fwFfQaThMx7EupB9AGscKL2cHfNZs87TRZJZ3PLzzQ9UiPWpS6DQf66ExsVkQhNd",
  "key10": "52P6mChnLBy3T4GukG5ZUBcqKo7bANYaYfWHgRshawFHYnVkT8KJxRay69hnWsZqSZc5HKR5CsnJBhKsNJzMCjJW",
  "key11": "5npXmT9ExR13J1W3YNcSmxToYZUbNzU3Dn4WsW1mdEpi3JnX51GyavA2VkmLWbw9o3Dq8WQzUSXfi6shNP8tLCYE",
  "key12": "5F6rMZr2xa2CUThqq44eVns49p97hKjnGrvxRsRjNmf4DufpvKcfyLTY1kT2SnJaBR5KPP57Xrzss2fmRdHLohSy",
  "key13": "3i34AAdPvjdXwX1dnevWTSEmf73u7vvnU3VPR7GA6qS7inWzkR9Fvd9Sar1FQhtsKKennGuQd5VzwJYne5Paq5Pt",
  "key14": "3jg2qKrMKA91RmeD5VyX6VgVFqw31trDHre4qbLtubNQHk81HnVBmjCtsbP3R5cd1BF8tU5m7rKV4CM2gzqhSSHr",
  "key15": "3osQUXkhNBXZAmZfhzEo5bKVKybqKzsfVm5DJrBxFidq6Ex4CrUmZNMqKAkYUrKzdiUvTBkjqhRANGDfC4ieu1vw",
  "key16": "37MgXYMqMT7C6H63HAQck71DdXhxNUhxpirqRT58zUSfviqH8eF15S8v3S2N7Q7gzuBaG45ThfTtST5muzLpWGEE",
  "key17": "5MQ8gWJ8ma1bV26T3d8uWVNpypEGQ3RJY8sVGGpMvBuAfYHEqniUjSvSHcy63mPG1kj1gTKYyDzn9XCz1aRnshvP",
  "key18": "5vMUzwsSF5PSyUgrFLUuKcEiiZuDaVwAMHZzSYehV8iNiGRXBzs9EGG2RB5ssMzxxRadvEjYHhvHq1USbJ4iLGH9",
  "key19": "58wTxWVaGCN5rNGdjB7WdMTyAwMvh6ePwbbHmhffYNkYwAgKKvVpJsEemAxeuAV6gaiYFVqr46ixJZBPhGo61g9F",
  "key20": "42WjPJWNdThsWpKm2Yx9xMjTDhP98ZHT9ssnD1qQcHzirYfP1KRLJ81UFLWdrp9vgadM57iw1ZCa8Q3x7DPHVTnJ",
  "key21": "31MmMk8u6oNPUfWDrMnic8jYdEmN2Tz3BW98y4MJPGkwo1yDpcnQ6imYmmhNFmwsKomMtt2n8YgpcSMDnyNWfDXK",
  "key22": "2hhWkM78DC4hjfQbDwSWEwN4mFsNjeHaiVJ4Na26rSc4zXy6ABNuaQVdGb28oF1AKHnaGCknhrniuJbv73p3kLGy",
  "key23": "5T7RmpYnhyfRjTwZ4XUvQTVExtP2YgBMebUAb44H4X9yB9Wtwgx4hHGFwJ7tBhpCoRxgGtYLiQEpygsFdkcwQKmx",
  "key24": "4eJy9QewPEqF5Ns3ZDbZRG3HvRTHRexWE9r8ec1b838JCMBe1gf4HW99kztMhpASEtYqx1Um4qZGTneEShu7SVht",
  "key25": "5gFgX1uLyDewJdUJcxZB4xkLvX1Yk7PMFrgSVrQvMRVRXdx2aDcTbgDvJ5mJBJ3eVd1mmxJJ3TiHLxDPj23ekKNJ",
  "key26": "2usPwCaGf8ZjvvVpFKaRaHrdGBxwAtrP7nHFUk8cQXZqTVzQZV8vQhtBjVccLZfaWibtSZxA1JGKF6qfWqGRik6w",
  "key27": "4Av96dmrGTnNx7rU4hpMNTqzargEmEGSMHDk6PVGpZUaFuxq4MA8kpMQV8D6eNG38cgQXq98swR9T9kDq6Kok9DP",
  "key28": "3nH3BDQdEKYVeyoMkrvkqmyoc2avwA2xoqmdgGk5BvL2tKSWC5iMTr3bcFMdDg1hJbxstH72U5QKCw2YJEN9egDC",
  "key29": "uKrtThGHEh3ipSas9VVTySVTvJ9xmLpCD1vGzhVDwSEZhPt8BW9MMxMSa3g7oDnJ7r7fRkxiwms49p6GAFuXKbU",
  "key30": "5YrCpuRXpVZvo3RNrXgVxzNudGtdK4oUaq21TGVUdGxpp66rmyFfqztcC38qYF6x5w3ZLvhWQxEVezYmBk57F3z4",
  "key31": "42vU3YGDMgwcUw9rwaxwzFDvY8M2EDTu8kiMN71jcH9an1YqPFpJ6b11dES4mYESbniaMruh2hJUWtR5FjFA5Jtc",
  "key32": "cXTxjvoJM2hk7S6V7d1qzAVKCFMtzCQDWxT9pSbE77rWVHVwZfEb8yJLs72PiB2YwnGAYCD6awtZp7bYgk4cDzG",
  "key33": "2UzB5wnSsx45mW9UJkfkAMd7mU26JWTnn2fwLmapdHTyNsEgYoQaaFGZGrMFrShR3CfvjdC9gk5r47eU3LLWuvDn",
  "key34": "2Fo642j7fCUJUkE5oVAinZdNJFVPuufxx3pC9nhtKb78P7mB95VQtc8diA5ecvr7SGkZyANsQE4SKtcwofgkBxsk",
  "key35": "4qKi2nPZdgMZncZ3RVw1mvvjKsmhMXe44HLNb8Sg6Xp5TNVKRdYpvJsdLdp4yRgb9pcs94QGA3KkquUFDYJwvgE4",
  "key36": "5NAtdoRmHrxwVLXsvmqEEfdtqhnGXdabcijGWg5egFbXdQkhnywLJTBqEWZRC88fGjfoYgvdZnEoXLoAovGshmPt",
  "key37": "3WLqByDkTHKKPSeDsXPZRgiF82tv7gntUML9qphPDKiyUjvZeyKDf4RcVrrkHtnP84ZLH5Ad3fQhYDnrk3dRtvR9",
  "key38": "5YctyBq1Uc6nZxc3CDYCb58XEikWtxA3v4gw4RnuTNuabBkmBmneYbaNZRGj2CXgthnqejrs2TP5AosVimto2tCY",
  "key39": "3trr8wANSU7yK72QToyFZZYRQyv88bF7ZCAiVh6SSdMnmLn47uiQ7sewfAhQhkLSh1ycBx2X8xEiHt3i1g9LonNq"
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
