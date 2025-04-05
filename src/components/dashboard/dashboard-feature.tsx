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
    "2jjq9Q4tYE7MvxPaJBgJJy4NyhPXoyyBmC7XRe3zyoGPCyf9M75GJqjJwEJsenGHGCZrgEmqwMuZDBuNbKXKPjUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6ah5WHaLEEA5S847iSytuwUh7g7BucF8o4CEEEgTnebj5An6qZMfqDVdwY7eqMyfKtBZw57RKB3jmh3bvUXfH4n",
  "key1": "4NGrU3CHg3m7RWfCJirhZesGv1rAkeBfi4ppg5813ARcx8rczaBGupKDnMajUjQCHhR4WQQqfhs9nuSc4KH9ESZF",
  "key2": "4M1ttvaZSQShMQDu9hj5iKWu8Eefu61ZCa8Gzd25S8X2du3Ua3SCy9Ycs35uDnL5EEbcVq3A1ixLBJFDob7HQWYt",
  "key3": "2XVkCrjaGmMZKutybTvsSiy9EZuVmLJ7Es5ZK3Xmzwdv5PLhUGjF7ERkk4BxUw8dv5JvqPUgkwZFppFN9uBknjQf",
  "key4": "am7f6vofvAGg3UdgSEgn9JwRMmh3LFLqshp92GZa5A5qBhk1yB9dNnF9EzZsJDCTEUzYxxLgfWZ7yJq2siqxTdH",
  "key5": "3iQougBux194rgUyYmHAhio1BZZA8XPA4uFQPt2Fk2F5MHaU4uGCbULudg9SmKw5SyAtQ6bDjzdrMLujo3qaRzab",
  "key6": "4tt85GQEvpp5ECinDBrvEPFwcQBTmHeyvbmhq6SYSDHHUGK3ZZWFVqXQNe6bbmLvCtvcM6rZyxrd6wnb1y3ZVSyY",
  "key7": "2k8XidYBja5T3U1vomqbfiS1gTjpQsydFeYt7SqBvae9h94FtLg3vw9bG2zvJxbPJ5ZoFbySempRJdh7bHGnuooL",
  "key8": "dvmurzwnkpYiMQFujrYUYxL4rbifFs63XeCPxuRKGuqgWmiEx1g4BVjGf72XG56gwYeTM21cHkKfHkzqsEJvCzV",
  "key9": "3x3uoNviyUXLt8Dog3RfGt5JsZ2cpHbmGFEPALGchLfv6Wy2grpeLL8juuACR7JMqa5zfbFCPDvExMe6kUxo4pR3",
  "key10": "zjCpjjvmmPFmxV8MkqDZmGKqrxB8QxRqNL3bBszGst2VZgSdqp96woxFhg6qBuuX5HAHwhrbB845vzKxP3SjQyV",
  "key11": "5NtUQTM8a1ZsCzi8UMavuuAdCWAL7A4Yg9ocQ3KNuiiSg4JbA6uKBuJY3sX4NFRJizYBhH6gNaCuLqvz7BY568pz",
  "key12": "2beuaJXaVb4f1mHkXNuxvqM1djUUr9p4pu66T6G34WyhW6T9wsLeQnzSUoq6mqsPT6bCNWYcwbiAsQzKgm7nL8Qo",
  "key13": "5gjYwzzYhcnBc47WCxon8rhpWQE4QmFk1VN4LXZFxVTn6X44qv2iTzrvGeaNg3qHE3cju2xfxadbp8dYgDht4Wdt",
  "key14": "8twv3QU6rLw5aSwiaKVdjVnWg3imXBiya7M8uGi3ZwhvCtVy5NXP91Eg8XUoQNE8wPcMtes92MB8vFqK3Mn2JFt",
  "key15": "qfmM6Qk2An2RfgoQAPJCYZ94TgrZxuYEa1o9bAQWP5ApPyy1MJyGLDATLHghetSC51Ue8dRVk3zwgt8U4cyicp9",
  "key16": "2hF4oJsXPcKzUvTDpKLuwoSws1YnC7nLBCusaWhJsU55hs6asfhHMBeKmKvcL4JSRgpS4wbjW2yjAEXvjjdGg6Bb",
  "key17": "4h1quiqwAHpv6NsgsbAYHEU8MKVdBTcaUPA3xbByB7nWPSMMJS3q97EyBcUvqomqrib3pXizAyd2cRF8JMby9dhj",
  "key18": "2ePzKZRwwrmDNZQQHrtwdm34TAgSXPB1FTkkKyp4VVLan7xFt96dbTHSyYyAqSuxH2Pbnvyum8MspeDRg8XeCZuo",
  "key19": "5BgeBVpx17cvP9K8375hV4RKf9VKLRA9nmHF9P8iTo2grmjhFE2rFhXp6q7aakjdbQCLkaonLProwueZhSgavAhk",
  "key20": "3AeCpa4AqtTUQUY4zBRzCiwDDqXzBho5jqxdsbBWRzsx8T5dkyvWdQPsBjS7NFFh5jbf9yw5amKgFReWNH9rcjVb",
  "key21": "669Ans8cjbnYqpdvnD45WAWeTnAkoczUfCGFkGK2pwtEU6pLv28ES5Xyn3ud3PmJR5yx8CsPWPv4gGJHUk3euKZv",
  "key22": "JfPWYyLKeQuTD9iR5RYEgg2bSW1QizTc5XV8trBRBJJLVHTp9JrWuBHHMstrAmUfMxHgPT4bKcxDPccrvfUCYeP",
  "key23": "5rRuotpJxZWTPGoPLTjNzHD8qb4omD69RU2HNactB9ygcR5TV9qLp7fnvDMaVS8tcsMgBQXLytBfoiWAfLEPh8vA",
  "key24": "5seQu6DRNQPqgbwoMd7gviN7R5CqgzBW26WToEN5MyMCq1F7pB9PTtyxTitTgGP1TmwhZkFgf9KaqKrBt7cS6ZL8",
  "key25": "5NnHSQZSNwgJTGUTsPkW2h9gs5ufMeVqoyDNxKEsS2bcvRE2oXjoqoR6NMesq54DZjZtb5gaQ84iYyeqAu8W4PnX",
  "key26": "2d8hxfLGwjGT4p8DSNJGu8LU4k2fcWP4o8vA8gNehrW8j1C2eVbtCBrWp681Da2cKEdr8GgfRZNi7qAecrcUYrYz",
  "key27": "Diy3wtALrhhMjSP8thbVYxyAb1K21knagv7Bcj3sUW9M7t1htbdgAaEcdyiCscMLtkxvMC3iYSU8RWP9x8kQ1B4",
  "key28": "JTW9Vx4S4n4GBiwn9fqGCZdaaci9HSVoq1g2fuwYQNdW5GLSfYWkN6ZUD3kraUEBLsyfDrecMzP46xfz7VN5KAF",
  "key29": "2mKDZsgTzuWf8VCyUdVXLbzAKrhdBxgBsXMEwBdkGwEZxskFHu6wAHzC1WgiPMEJfsBmGNA86errjFTkV5Zaa67u",
  "key30": "2ki3ecJpYuqKumGuvv7P6DRHaLsokj6fmd2gsn5CBCFJXCZ9iVTJEN2dtebjqcGanEtNCM9wggqphEGPAvPajxyP",
  "key31": "5uS4SEcEP1djToDeErTLmPxS6sAf9pZ2crVxwL5vGTxhnv24j8wEkv6JscmPmeUZNyZjZkwxjU1BVDpDLWKg32SB",
  "key32": "3NHGsQRYwa5WhWXUy8AB9YMo4F1o6CgTws8UC2JAGSZyCwfzF8Fq2QpGw5BrUaQkaD2TVyj1abPZsvPhHBTHvQ34",
  "key33": "4b17fTcvyMcYGhucdcXkcF5TwauQEJR4hfCbj2c1yVZxGsc3LKpTyV2ju45JWzYyRUzsTLusCpd7VCkgTcAPH9hj",
  "key34": "2hbvG3GkDZDeYzGZ25wtsJHj7xAsCXiokL9fSwKkBqv5Sj5wgwLvAfUQgMC3dpphLpCRh3v8VhLuwqP1ZiW88x7d",
  "key35": "3PGjyjgMmFXRbYiXeFcFNRj2jUEuqMN9ufDMGKxEdKG5k4RuGJefq1gguNRL1Cn5yNREy34h8Eiy8m12DhRp9iSF",
  "key36": "5YhskHaU69Bs83z1dT5Cvm54FWEUDhtqMBCimKQQ43cZmpQnSbCpBJtpvBzEpL1G3tAMw9ya1on3m4gf6sGLJS82",
  "key37": "5dcJoAT9TMBP9UTYHQ8XZWDBhCimWyMabLkS7Zp14Zq4USYy8XDETrnaPETLmEXzmtdm3oi6ptgHQLpLnZaGtGQX",
  "key38": "5BLs3EnepLwZ6LzDdSHgnmwECAfWq1bb1BeWgBVvEAf5pvwsViX3rnJV1s7ktqUZ9Yw3GpW46hkpUP5n6do2RTX",
  "key39": "421qpPHzPtbyiacwYNP2LkPmg5J9qmgXC3ttcMN5d6Moi6EH8Cpc5NFGfpRAgaJ3vEkU4QURQ2BgHH7uaiXgUmBe",
  "key40": "5YsJqD4aZPgZvyAQA9RCz5TKf4yYxGwMfvS9mSMiTrnvy7p5aBHv3yCyW99vdLLPfP1PWzcsiQySLWybDFyHu2c7",
  "key41": "668pwtGB5FnneqSJkMxpVQgq2yS7erEAKokGRqWoh264A2MhJo5GAQj91x8rtRByH89a6fYqK5vZi3ERgwqis8AZ",
  "key42": "4mDYcST3vGy6WYNf7QjwPxBfXEmew2jAjBce9Q64KzozPF6jjFJYbZcPKsVshZBqBT8RkfFi12G7kRA9u1tSyMFT",
  "key43": "629gYKyD1w3N2MDrMqN8vwW1oCPVLUgnn2Scvd8yoypgmvvrvBrfQjvkxoTqZ4zeAirkeGA4NA5BF3ZVHJ4iPVe8"
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
