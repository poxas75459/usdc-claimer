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
    "2hiQcQp2CfuBWgjFoKxRVPCoi2MS5eBChyYXSibPp486HJQHTsCv87WdUxqdfC2Vj8ZMBuzPXGFHvwe51JN6c8uv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EjFk1bobACq7dqWEPfrWydD7NEBiyg1eQ4iWMie6hx8X9Xb4BqDMxNNT8WWaKchSzWAwnkTSVyYnW9JEPLubhYV",
  "key1": "5N1SaYtvEsaZU8V3kKt61ipAPxq3oEwiWnnJLgc4jYsiVngc7iWqwn4EmW43G112PzZBRP7gnMTTD588RY1jJmoE",
  "key2": "3zDkpbhenURnH3YxJt9a2ZufEmRNRo7pEgYwhDcyBDvurpaiDtz9NAh36Zfwx7RSwcf5C33zA1duHLf2jF1YFFDx",
  "key3": "3wizQWXUQa6bajhC3Xzf2wSvCVAs2swGJ5PKn4J8LqSckSfZfnScAXNQp2VjVP7mueYiEeebV9xYtWkdaBDJc6pE",
  "key4": "2JhFLswYcY4yZiCevkGMK3GNUVf89gQqQBWXifi3RibbKy1DKm9qupiS9SKQbGDoKsCqQEsPaRRe8CeMpV1ngr6W",
  "key5": "5qZatTVaphS6hyTnSsRFB3DpLPiCdK6L29DutYghZWQ2qFt7BnHjUqEnHneBwHxuhy3jog2RNjD7B8UTtqQEPZGz",
  "key6": "4cKbUjbbB2oVGSjGLxYzY5jWog8P17hqV8kVLBrNuChHTWMyAeEhUZNLHXAysYFE7m2LfteLxPCHNF9coLDwWztm",
  "key7": "38DSqvFPom5kysAMbrLMtHpFc5axWqfQNzsFxsxbRuxrDCstgWGLv7GLLocw6vNYp2dWJ4kEzPexwNypyXrQWHSD",
  "key8": "2sXr47yRcpxHAT1nxTtjyHsGjnYbGmfb7452c7iCu9UTTTxYzhffQHVWwTyAeZ86nCrERcoioM6kprZATUjP3WkV",
  "key9": "FtcFuhhkVDwnvSxGrVkovbEqbotwLfCdcTY8ahyDLFJigTJHtZB9f6eZUxXWizP2PC7RwYiGDBut1DdLfKCvvKR",
  "key10": "hxJFxjyUCSXXFiv5ndHgRgvBHwb336BJSGA4wX7mEG5cdt3rYo8au2mZ26HhwZnsrDHQ9e4Wb9oiffj7h2vjayz",
  "key11": "2W3bgWdfnkKGcUCCPjnaryTHHDsti5fRD984XSPxFsDgo8ZKYEhibsHYDxAcnhfi4pFc4XQFAvS1gKDbsPtPgNJ1",
  "key12": "4b3eqaK6ZeockcSwnkdRwvT9M5CVR4oQDhkSXW4Fz53QNfefBaX6wFMo9f93i91q16jBr9K3JVzmKfy4AexTNdLw",
  "key13": "3kkYpY2dhP8iUyUrZd7mJVc6SC1zAJkfiEr4cLVtEA8qJ6hk2iZhsqterm3JhhdYakgqUNkJfkASfANUr1NnUbGX",
  "key14": "3JQ7tjUqb5WVBewkfcDHaKVvgvZzwmabmU3ejsh6q5MjFZzqxbUKDvBhVVMnQbEm7qEa795BmY5oEkJY8C8s9Amd",
  "key15": "2rdURkY7UsXNSetuHsefUaXbiZkizGKoaBdwQKidV6WQ1CkF7q2puDSY4kEnB3NdnorNCkSjSiTRfq831SSv1dYi",
  "key16": "4BefF53d7riZ4JyytviCPfhNTqit42zskVLrDuFMpDMgKb8NFcDwe6wiByUrwLZQJTFSFFNNe2R5R4TmSgsbUwsn",
  "key17": "2msSV8i4KkvzsufbmbQsK1sa6ny4J6DGCexjfjKGxgprQD9xQ1XqfsugVgfBCJyXZMVc7xbPwjFpXsEGwkerDcSk",
  "key18": "4ruNfAXYwWFvSvfm26UEVMn5kvu2xp94eP5DF5cpgYUnDXRbxapFqby2pNgJ8XTvPbSfvXw1VXyo5c5U3ve35P1B",
  "key19": "5sKibNkUXEBtLzKTw3Ej5gbjGrkqKSszBpkdA2qgpGxr1VS393vyUvd9m1zGvx2B893ETi7dCBsCyG11GXUqqRb4",
  "key20": "4FQ4JXq3Wpcd3LkTiH5AxvVPHZmcdaGfyyTrqhNV9iBqvAqri8WdM17UuynrqE43oub5CAwu5XBcvXCaU74kFoTm",
  "key21": "3eu1rhpvkjA8aGFyhjqERPSZ8Tu7Foz2UmbogsFir7VetXifG9YAXSu3WHLPu7erKD2PqX5u7Y2XQVUPzqeTM7Qs",
  "key22": "4h5SWJrq2DsYoPFNTMVYMb161BEYzXpmoMXJztZq7RAyHahsmirv6PGbEFsBDQTtv6GKd2Gb739NuXAkGPPtF5CW",
  "key23": "3gzDGncpT8QHgCEefTQpu7Rhrd8UnnUZxokpLjTMDprZ2UrADse4EDpxSrzfZMzcLLg8cwsrW8w3PZPjYkW5v8NF",
  "key24": "3N5zWpU9G7raQPtBzGtUaLwJPEkm6e5BdnMtEAe2sZJnjtCELXqzfGYWA7U9C8dmnMx5jqW9DE5kGG3j11MHZQn9",
  "key25": "4Xkue4BATMsACf4dsatqvwTy32VMapJt4PrRgtZaGS65c6tkpiVgkYPW7SqHaFMnPsL8n4rGXA84eDjME1mu6vHk",
  "key26": "47SMJKrg9jascXA3vqtMDknSxCKZEvBdSQHG7NuKz8dXasf7XMxC92qpytnp9eGAuUAweLXWuTspTKni8BwNTmgn",
  "key27": "5Q6jcEyAdfCzboUVn3AcFL1qMoDJo4UYDzA95q6YWmXMfJp3KVJZcXwVZkjSxBGm7phtR2T2NueeJo8ak59sxQSs",
  "key28": "3AdqhCyMmyBqtiqX7LxLaXojeLddQZRzz5xKdTep98A7WG52wgeoSo4VnYrxonepEoHkNvinVZugJhVgWtMF745v",
  "key29": "5LtDvGH6jAUdLqZ5c5AJrKPmd3wZYbfxLsdVuwDqrnyiwWcbQpsSAAZYbBcccLFNFSmuXJG14LhWg5BiJai2osz7",
  "key30": "2bCwBaNA96sTh5WPQ4npVtCB4XD9UtWECT5WnJaGMCaHNntovzSPLzM8Xd8pwti3vzamCswY44xkAjhCLN3mz9se",
  "key31": "34szQt4r6zUYjvgjwcGZyX4gAt3k94R1REozdf3KXdmtUu8mYANehMLNRwWynS77tSKAfe5okQgh6uhW65RNiS5v",
  "key32": "4LCnDkyQzMEjgRoBd1jLKEJsf5dcSdAXndmPLzbj3ntpWbW4CnQWGCE9aPpN2H261r2wQT8eSyBvRC8QC3T9v62t",
  "key33": "56fSdonKFZBod5ez2KP3on5WjBat1mg63bfLWEQhaDoaGWRTvgGXqkY3ZsfhMSk9TrmxY54xqoYN7qMjTC8qeYRh",
  "key34": "7e2WLAg6rgcPUnpUXmYo4VWawxV2rd13rbJzmD2yF7o4BJmdAf9yDZqfDrWcJaQdvcFE56nVXcCaiHRHfZV27rB",
  "key35": "2bkL5Qpg2aTEQUzNNm4NuDPtPJjb3HC5CDofMRTD29HcAKoUnF6JqbjgJ3AaHzUFrubVG1Snv5zexW83VcctXMCr"
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
