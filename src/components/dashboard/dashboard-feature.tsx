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
    "4Ccjg4FUSe9XEespACGNudfCvauxkZG1vqpTZ7cxpS25Wf7Adv4abh5aMTVZsVYKQGESvRNXfiEuJXXZjr6tfaTQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sixQRe9krEk4Z9T6yY1V1kxegmcJ3rYt8pmLNspaW8P97hjCzmH15T7FWTQAppBRb31L2dwsjaAcNB1szRBBDAt",
  "key1": "5wn2KvraGXstpc3oRtv5n8g7HGqXkfZauBaLGphqoW3tdK44AVp2RYwZhCGVGYcivapjjT923ZH2Qyj5yeRK175q",
  "key2": "5xqZy3KUPYm2YRNC4n8HBAmCrK8YTHUNFcygjeRk1TkL92wM2tRFd4739VeyseikVZ4dUwQEkHRAvikBNVf6yat1",
  "key3": "vntFMaQ8K6SmcrgC75QUY8PYbNwNojyxmbs4djJbvUNLUsqpJGqUfJhC8chQU9B3KJhQhpq7LWqQFMYgzS87GSS",
  "key4": "3MyzpkZVQXh6yctK5j9ySKZV39ibszAxnDM5r77GDnKuKNoMv3ZY6LYdTREUEVeAYeVf4c6Lk3HVhVvBkT7MXQhb",
  "key5": "4EYi6n5rDqPg2y94kAnagv3CrD31wYDix4nmkcCbxEDzueCnw54UXzDi56ZSWJmAgH98LCxA2aFQY7D9nYDZKkkg",
  "key6": "3CsNPSedKtbgqCF9Dx4iSVjSmyymJCkE1544biuBSzdWuftG3KGPCSB3RQCmEDjkLBe6AicbM3dwm62xXgSWUTuh",
  "key7": "28PjCeLo1nEL6SLnUJccMMaeSdnfbgnFMrjxD7bpWDafoaxZkWj98QhmrSQKDbzkvwSp9TiY2kj1dhYg2qi4L2wA",
  "key8": "5AdnuHENDGpJYs4hDjAoh8io9JUbBwT9SNdXSFaV4a9fWn29hXaLUGt1iZ8L91wMFjza4SnKjgRp14BfwoXbBiTa",
  "key9": "3Evchm5q9Sc2r9m3LFivLdJCh1tBmeh23NkNjh5z84H6rqNRhVv9cYw6ccoVjnrGoLAmuXcWJ9YGWxpuegKAJZss",
  "key10": "V1mPjZNaDNH3hm7HMjCXonux4N8EnzpJ5bSmHigjVrkkpYKvN8CyLr5kyuCVJeuiHQoiDWdEac7Uu8UdefgNycM",
  "key11": "39LiRtMiNiyBYCpc388LDfE7MPP6BLvjoLN2qK9vps7Tz5WwD8R5qrFEefeqfSU75V461Muk9MYLfkFP3zSQNe8g",
  "key12": "39xW31rqbYqKTBnXRAdYNSeodFgdx9fs9SEoeghkpGjoUfjVciA7MhYa4FnapfHQLDepqMYjazUe6t6UGvHthkS9",
  "key13": "21GpotyKesSkBXgQ5BgPBi7obfLJVX1jiz2VN4AWKJ8m8FzQvDSsfGc34T8GN2pgbwDiwNkWcLc82vMvABqYbEmP",
  "key14": "5c1XgR1urUY2hZG5285YRFMhHreJqkD2LZzRSVGwodpZv3TTx8a9o9nWPak9NkKkvCiZyhNPyKDjJCng68oJNy6W",
  "key15": "pC8ghTDXAkt1JAoXEAogkFAUrie3fnqabsBgoBHYkY4iFwWmnReBF56fDYWLmwkX6216rUnnbugnrugCEc8DKsj",
  "key16": "2guWq99tK259oySFNKqbTmJcr1MiJqmM1gLHnGYjh9EiXaVufagV63gR4yfYb3dAnk5XdYvFA7zArCjgdZqxCMVs",
  "key17": "63Du42k5HjshEsVnoX4qANvbi7zD9GUGKGeCTDdD7KWGo15G3dDBrYyh32q7ESsaCHRzmwKBe94ieu2NAvsHqXzf",
  "key18": "4KrTPiU3BD4NVFg86ZgvLSa238waQpqh7FS8GjMeCcV4J9EndLhm94MLPEmFVitCBBbjwtpBW8x2Gva9orUjj7tm",
  "key19": "5gjfdhku5LvjFeqVTNpvaH2ChGKiAxyrZWMJxDScAzHXvYViWUET5JMQuLWJLavPgr1GEaeSydyLNPqBCsaTAFMc",
  "key20": "4Ytz4EushQ1sxKda4yyjz7fCqw4vSBJ66ccyCNa7JotX3rvTqtJC8hxNV28gQhrhfUgxYsz3DykFJQmrXmyaEzkf",
  "key21": "LtawbthZzKdWVoc6A4x5iwJDgax7CF9kFNjRv9PjhBryMrheRVkUfvrtJDTXHPCefN4hqWvZ7o313g9dfYQVA4P",
  "key22": "2bcZUSoKWLWh7DKopBWWDh4VDSaYPf6fD8Y65rtmkqHb39GjdXkCComWhAqABC9PhJjEB6M7VTLBCesQx9BtXUC",
  "key23": "23TK63dDqKDfMbpTrwn2CSfzj5Wfb77pWW4RqBAUj26jDBbdFbGcwSQHBTt61BTW62eWVC2SmggdrkNqRpLG6NdR",
  "key24": "4LF59BHnhQx5HkU3VRqD1L7xcKx7UCzEZHKP4u8Tdppmh5kh8ezFSZwH45BZmWDuw1SS12hMDRW25d9YfQFwode6",
  "key25": "2HQ3c6gtvQanVtZyMQsxp1kxFfdguo9SSKP5agdLM8sj8iEhsfwHVaLm8NXdk3zTVdG9oMxVEzkZxtkzGkssv8Fd",
  "key26": "3sqJWcoXgK5W4Acbj3ah22LtnN5QmdmDYxUtKVSsmEbp4XfKDx7w7N5oKx2D7GfgNKrwMUKXg4enpoC6xrnjY3Na",
  "key27": "phzeJkXN3n7fXmRHPoXHp67bSCXEKh6sh34CeuGrgeTqgsqZPYvLXLqRx8h1h6UrYXeUYm2gLRJvhuXpirjwSby",
  "key28": "5mcGSnmGt4b4aUWuhsWJBdDuMXPGhDagTqNbsmP273JxH4NAwYejFJ4bbBVv5FxVL3CFwN4xGwu39XvTSxjY3FyT",
  "key29": "3QRbvCpUGR1cN59xmnbvNXqbsLkegTnnEWjReFUh7VTebAzHXxaECdv9T2nun9pKuEbFsDZLbr4Lk57EDTwxvdsh",
  "key30": "bNtr8yzc8ALXT4pwEWddzdpHUMZAiUHFS2nXoX4asuB2RB7MTDcDzzYaxTyUAs6D2sYvN9ybwUMDyrDnnEtSSUC",
  "key31": "e3aw8FHTZPTzZWbPeqiP8vD5Jr1C5GyfJ7TcJB9SezvswLSoJLFUxiDZ9qHPxhXSDcpoTJxvL1xH1wBvgA3ZyDx",
  "key32": "2Hj6pkf9eWeePiap5KoueaazztHCc1yB6qk26fPzbZc2Z1rkbHssE3USrhEDYer3UDSST7gPhAkcvX4MY5ntGiPU",
  "key33": "2CYPdRJQp4s44BoSCQY4ivWDCi5WUgjt4VkMJFkEM9qRSX3zZmhqy2Gas5cQTT4bfhR12Mwmn1nePjRo23Jq4qCg",
  "key34": "5R6fjMgQE1G2JYhLTaKgHXqywBL1cBT1rKnSaq3NAmVDuENZCafni1APyCAvxPPbKYKHbbBNF5N7V9VebXn9u7a9",
  "key35": "4tNWDztQXf57pXrFUbbVKWpn1FWkVW5Uk4Y18F8Wdz89ZWLfMA1CMVvavk67QWBqceLtGed8ccNmYXfJn1Jd9z3D",
  "key36": "qaVJGNynuAVpXycfTZVr3cV6B8wPm7yRyGnLysFLuF4dP7oJPSAaTR8fznFpzjiwhRQbXp2ZTTASpEg46WEM4ot",
  "key37": "mBihPtWDaQTbA24FBV19LRNn2mhVq3VwfwFjsTWxrtGKrB6F4zyfqsnvjWL6QQFJBid8GkohEoCQQ5EiEY9pcLu",
  "key38": "278xgsC1YFnUzYWmJb8cmBDkHpRi43BaqU25aZ6K7hMmhySfo4G93rwM3EadDEfuNtDchDsRVcJSY3LJ7hRaB1X8",
  "key39": "59twcRj4mbn6r4mNMy33j9oms419rxSHMEoopMMtvpeEVLkCymn2oABigAjmhLJRRpmgxtEPYyYnHKuXYhdEnf6T",
  "key40": "2efmm8HpBtWTq1eBtnzJ9hu7h7te3Nv9wsLADMerCi8qVs9R2fPC4EKaTz1CHPHCC55njxJTbq3emscfaAeQJcHe",
  "key41": "3iJGWHE5ofQJZXWUJGAoRVWu4dZg4npCK6HFsAm6CBzoWYUBmfBGQmhhYhCyiN4zEZPanGmw2X3o1c3foGT4xEmi",
  "key42": "2KVTHpzc6QHycKMkGVvN4GKV68oQWd92CGEHKwkkmvWr32UKe9FVA6KgtkvHctuQSyZtmcdAdaKKTYjj2Mj8rSay"
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
