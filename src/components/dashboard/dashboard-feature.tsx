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
    "dM8hQbv4fzX6KKSKHqgx7cRTr1f26uci2uKGiEZknxW3wvDgZ4UaQtvUccqgeuYMWZeBamhamtgH1HD9R21mjBB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xgQ7cM1HpRNFQwxEWozrozhoM4gwTwHdNU1nsGM7ekjs9j6VrrxMPEU3MMwcWVrqVxyd1hTtyws2Ej78oTnAnr5",
  "key1": "3xp1KdkcHrvKtXRzn5dCVxtAfW3rdJU5KApXSJhokTi18t5x2tE3MX32W4JJeuchtjMB4wBbHDFyM8hcs3j9o7UJ",
  "key2": "4ESrCBRvQJVXEd86tkUoSPoRfzFeSHbwvDreuknWuhUECx3Z4rG68aExF8TiB7M7xEtJHrQWTMwNYFYwJDHAxULr",
  "key3": "3EEnrrP56NPkaVB5wRMNFV5X53tbwkG2J2sxauYY4ikCFpRT9NeErT1JpD8rb4CNszrA5EeiwyhvoBjyUJVLZQ25",
  "key4": "3SUawJrdWE85VeDqKiPbSehZaJ6c5FUr6ixhc81aPjfGTbCVcQtiPS6a363tppkfjVMAnKm5ux9C4WEvRmcsXayw",
  "key5": "4dP3GVquztxa5dzAd3LZSpGJvzidMRbXha28fQhqboedeXRkKyU5iaTf9i5s3z9K5KzNCedZyqhCzRsDtQg3NGbW",
  "key6": "59BJxie1YF9NHEn6HRGq49wmfDNi1YBtzg7ujR3nu3hd6HphMaS1BfrA5F7wANyYyFYfxjJY7iXkS5GBjWY8KT5T",
  "key7": "2Y2MbfgCCrqkU7brFh3X66R39Yq3h6jMwSfafZkHW3EpDpLjxnviqYcDAm6tvwEJFi3VBc3Jf9AGmG79cqGBsvvC",
  "key8": "5RxTTaw3UxAjqRBcU2tm2kKZwPbe62F6m9osMBjVamPkgEHNKBDvcRqS7GFqwq31rR7UwTJa6P1UhxhEbekHQB79",
  "key9": "4DyTrXkA1qkW8cn4GMRaARMv6QUNStJdWPQw1fxCzQxbn2dkCQJi3Y6CXvgEhA3JUoeXBXDUvq3TvptbT9fFyJqc",
  "key10": "2Uvy8naUZiF6fWTmq82oJXUQnVQev2jUJ1EADktm73yyo1Q6cn53YmMCWmSVxA8Hz7CvpiALr73RHpmqeYMudXdw",
  "key11": "2ZweGFFgZ5GkUF3XM7wh1HzNY2oEr3gGqPNuynW5NFSdMNRWiKf5qjo7ngUEaJ7JRFMFn994tSxGiBS8UdWDeatv",
  "key12": "412t6QQ94VSyopUVBuhiWykzViuBUnqSpp91XRA5qQafGsAgqgzNvS8Ks4Y13xi5CRFW2YtfnZRwRisyCzbZb7sa",
  "key13": "3juTnixbCdR3FAw1we5ejh6HwJYAZjcYhF791pHpnGJd53xk6vxhybKJPxokJqSZUYwg5FQp2QhA5nji538vQy8F",
  "key14": "f6w3eSo34Sv1b51fhwKbRHwNBifviZUGDirCk1xFzcP7F7kJ6qZxeG4vLFWVFLSh1YL69kVRkwCB49REaaHmgCi",
  "key15": "5z4jrheEAVt6RZQDefhRiLY8oNoXM1C6iqw26ftAH1WTqs28t9LUHLzEt4wCKik9pTSN3VCW7DWCh1bCagY2hFRM",
  "key16": "2FNMgtWQTPDatfkFBL8huFEYwsN7QzE4aKKn1euVLBEojsaewQzPyQXnkqJZq8q78vW8iB3e1crd9kkTMUpEnHdY",
  "key17": "3tBDMUAD2S2RRaNvkUrvqJ2K8wksp5uN6khMf1sPy6UQRZ1nhB8JYAyZVRN6RFQV4ooThNsiMFGmh8j1t2LPfNBE",
  "key18": "wbyYwY9wTL9NokyKLD1wHYmgL1BtsaU6FW1umMHXabTJwazfMfonpowDc2QfCYZnU5DKefV2uL85UV2Q1LGjq2o",
  "key19": "RC4i6kGLgkSgR5BJkTeaDxc5JFi4ZuDpUjJkdqTAVnS383CTmYkzALCeMVHnmGrgKvRsw5dcBp3K2tKRv8JRLY9",
  "key20": "2ZrLuKZFk8sUTMzQA6NwLftgxcMUpwhVvppydfp9zwCB1ZYjX4mhrDLCoXA63K6MFAoGm4cKg69D1fpMgnzr2FP9",
  "key21": "3YQvb5KF6gkQqQjjpnw4T93sUxw2KxuNCGwfpqaaWDJwwW4PNzyQFh8x8hKLw78iJPhVHFJ6JspqugCCeqJ4bBQD",
  "key22": "3RQxyVqUaVuAKfMEkbenuFkcvHHAnoAR5hYxSzvWmg76yaBNeyEreBYt5MHz8iDWQi8UYFRn9EsivzDbDVFLfN5Y",
  "key23": "5zwzEK5jfLZexWtZ68KfTnT6b7W4ruQC4L8RBVGEXwabedBgKAoccqATGDQEQpR6qJpeo9UttaXjdktcwB3WCndX",
  "key24": "4oayqKHtuLN1nogQXyB7RAD47W8CxmzC7gvXh4VhyiXnBvGhCH45yEqHLLjv2kWgdoDMsgiSdEhvBQxsjJxDCdx6",
  "key25": "2U7och7xpCbQMfHQAKmwZoMFaKqaFULQDo9kFfcBebSSmvyosmZ2kKBocqBeoZLytx1UEDsGkNEqo4p2qPs74hpz",
  "key26": "23nrgBtpTuQ1AvcRXMgnvEQkeCR43REmBTE8uiyGomiSCWBUDpo5sGy1uM7KQvx4nWsgJML9J5BwXYEWTc3rpryq",
  "key27": "3yi8qnCeM4Xi8XkVVdt9XLH8rivVXseiFZLsUgWeET6jq7BrKofUrNHZQBpM47etP7mxP17RimGbGsitia6pGcKH",
  "key28": "4vUYxmvqMJay9qt4FFbJV7P3L1kUgqkiK9LbyFkSG3VvMmkneQkSjh6LobRssUyuEcSb9UY5pLVUJBTvbrbeSGeu",
  "key29": "4ThewqKJ2LNV2iNnYdynXZK4Mo7iJH8B6hzxwi2guTT48EF5CTWqxgk5SFkikgFovarjMmbpNqv4ZYJyKrVS7eij",
  "key30": "4kAANpHFCRhP5rq9Ws5Fnkm2uUQ8AGKiktpgVA8ejcMDxD6LPdUPDQMordBG9rrSXRQmZKL22r5nUG9YoNaGaHYL",
  "key31": "iJs3cQX3HetQ7qqqG8z8CY8Fc2P3FQE2SsAWoXiHotcqZQK8yD4RXQb6gVoL1XGgmWGZ4j7mCHvRNeZhSg8G1tu",
  "key32": "3nqMLSnCjq8EiwP7tpr3XS4qvN9xVRBv7D59ejxFjKpT28PhDZ5XCFmhaanpKEoTi78thB1EgqUN4d5Zr6TJmhKa",
  "key33": "45Cbom7D4ToaUBSXt1qM6fxJFEGtfMUTo7Za2HCWRwW4CNQJrLJcc96AjWnDceWkHYNh9kD3kRJRNUZvy16bXQ6J",
  "key34": "26dYujXfCKDkftyNziqAgUFq9zxip7yvB45pCoPQB1thfPX4KJPP4DQukFsw2hbG2yiNJLNr78GcJYMqUCJ7aPKE",
  "key35": "45FfK44p1rwkJHg69w7nvwP1J1bMhT9dCviASaj91csGCURYM588rusgXZVMRGiZWvdoUxaXUcZRu3mX2DiEfAb6",
  "key36": "3kqep2nnzr1H9qSocVScJmXvKRiZc6rQrnxPw2THeqsjZ7gfN3e5uDEThKQGVuamZVyDRAQhYNWVtBKvoktvN5uJ",
  "key37": "2jPTiDbVWWNU4ZEBSAHRXPZHP1snVZLkboUBBh9wQ1dctsFgUa3EHMaLqNvZkS8kMitWryMYVY4itjKZ3rfN4N5C",
  "key38": "45cLk13uSCdQJYxeot4ro19aEUYdA5Ayods8TXbwxspJpak53zpeTrUUB4XKFXauQSKb5xFZRVQEu6MvVubQzPcT"
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
