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
    "2sqnHeavkWqhB9uY6RhZUvG9QxTSGrBxiFYSC33UPXv8YF4UKpuWX7qaomP7Q7wdQFGjeJqNfqFWDXqt61pgtWBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CrHYD3L2F9ejKZZctJBEPfATqfy9sgmPQtRVfHS5s9VbJgRfQK6nddUpfZE9VB8qAKEmdFLJjrdQDz9Ud938tpM",
  "key1": "5XPZgvyBzhRwMr2SWZLfUBey1Cm6HNsgsEoJTyo74dqYEZTorM2ukAN6PWGLrmsK9xkC2HAjXZSBubnDogzyjLJa",
  "key2": "8w5DRciYT292PB66EeGuyi1BMU9UVaWEdjsSyN2UhEQ8MjpTn9h7aUia8tzRRu7xguEmbzxznKPBY8Y7kjRk2Sk",
  "key3": "4ucrCcDPsdiKA9QFQgb9BcZRVuGQ8Ej1cUmEq877CzLzGWhG43zZCshdbGE4m2RCszaMaD6UQZNK7SGsJpNxi1e7",
  "key4": "RiZX2Bq7pgwSWh8f7Fytn2CxWXF3WZAvk59ja1fMgdkDZqGjKtZ7wsVYozm47WoMZvxtSaR778BrQToNnmne8nt",
  "key5": "4oMrrAXfCgiD8KpvLt72t5THZpkzcSC3p2V9Nek1QuiyzYWPNpfJka8DM3KEBfJVdrGn3NXXBT55fwFwL3UVnizE",
  "key6": "2YrRLgBMAW3aoGwmkzqAAix3Dw5uP4xXxqBDqk9ofAevRRxcqcPatARJVZsAW71v43NvJH3eyAKiprc1Q8goxGQh",
  "key7": "5FXTuGybVxvasQjJ2nCdXunzbqZqQrw5cUvf77Pm4CoTWnHLYKx8zWwu2NrhdkFAgrB1F2hx3ZNP1jhaEpLWuCzh",
  "key8": "y2oRQezPCJCFaiG1QqCRWkfCG6NgKiZP6zgk4PMz5AqU11QCiKLTvZxMmvKxkaiHe7UJVycqM3pLKV7UpEvrAiD",
  "key9": "548u8eHUq6MUt785uWDgzQgaEo94Zh1HkB3cx2JwZfaEXpGFGe9erEWcvAXxacNuDDv9nRJRqrFXP1qneFVRBU3X",
  "key10": "5BJxbEnvkoNDN54dD1nP4wRkgqNnnsyB3rbU7CjcLeYj9XBCGS2deUukEaR5VV3MTGXkVE4iv2jS1vygZF9fHZnD",
  "key11": "ntE4uPyxvXV7X7PCmaXe2hJ2v8RXvfQGiVHVZguNrtCQmgvCU3mp2B3ePkuMPR7X9HtVuY6Z2cqeLTcpkUGQ18Y",
  "key12": "pDLPMgoZA5bvG9fgovXbCUqBjuGpGyi416RAGbNBGfeHptDbYTVyEr6VP8Z56PkfaxSDgaPejUSyCJvqPfU8m7r",
  "key13": "4KEUZQfw4ivzHqrcGMunMpzhgWfMkL3Msr3etX5HrAF2w6gdtdjReLEqyq34TicPSyLoD6WBpTeG6t3mYV9txHUM",
  "key14": "2Biq7x8ZXv98uaGTuMxh6QWXw6mJSoEhyN1idiRG8kQCiBp3Jf6a68WaZxrdjvHZCg12h5fnXgkErdpWeN4fURnE",
  "key15": "LciLdwUT2X4fxnPTfqwGSs7WsJAGzJvxhd1dGhe84QWJ4Mpu66L3n9hg46mie2PC53u7zY31iPD1MFYKgPszFBv",
  "key16": "2Rtfb8cycGy1XPECV8frt54VSWYWaF5XaqtGV2VNT1fDsE4oSVUSLJHNUXRENt98jZojtcYhxLhcvZsQK8gAGEEa",
  "key17": "3YWNqi6XtFgHSGNAbYZzj231aQ8wF69XENxP92RaMGs1wnK3QmWjY3e6zohHog9eHxuDgz5v6cePJREH6xZ6ctng",
  "key18": "3VH7no3FjQbJQyDBxkjaT3h2Ay4vPRrnoCHUs486LyWoCWXdppyhMveoHKVHZUejUmcT2wpLxvRDvtNGwwZNpNAc",
  "key19": "2Ja5DKQCp9mijFraA1MMKMsvG8C5gQccdMDTKHM2RdnWyYFWLSyezRLwecNGG3qYwHSTRe1uJxrnr7JBWeBJMEBp",
  "key20": "458BDqPzLu4cuNLRJqAJstyoRfQ7JKLZaLBZMLgEQcqNQchaE4dNv5MvtGy7Mj1AKoUt6UwR5JaQoK1LdHdYTYeQ",
  "key21": "3c5s3iMQNkhJStLAvX6mvTTYE7gka9BarW8CwZvQ3E9EUngtYPLZqFKYSK4sWFAiUkMDWS1g55ZifyFj82UGRZR4",
  "key22": "UYTcpaWvBebY7m4sF4jkDur2CVD6XeHBtrnjnmZVVL9rBjVhxmRmcPk2YBh45o6tWHPcjdiubpUQQMiYFsjcgNz",
  "key23": "suNWhjJxcaYXfA13UnNiKJXE3t1UMWah5BdDw64arSPtnajMQ1T9fvXLKQ9EAChbqZvmQpq25xWcN5SE452s7Pr",
  "key24": "5BqgNE8hnHw94BDKmYcURBP7YX7xTgRc6oWL7L2x61ogLZjboRnxERdLT2wz1zKktkJRKx5Wcq9mpYWbGNs1xefH",
  "key25": "5EUKdLB4uXgp1C1zT598gmPuj9z2qVSMYwpWTRGeot3o2t7itiphmuLTRZP561Yp4fV74THrXHQBuDvgKdh9dvsS",
  "key26": "58839nJg9ycnS5PjtBaxUgaXzL2LPvvL637opxDjFiPeWtDMyo8Nw9bP6859YokY61pZcCKKU9dMLhK7fjqY4mM7",
  "key27": "4h89YwALa3EGyeGnzBfHVQhbwT8smoZds7xW6gGbFAyYpUwnq4SD42E69CBPFV9SoZMeLGeT9iDcYhkSwyJhGQff",
  "key28": "2CrtZfJ6K1XGCRtKftWA2tpFXWezc6JaNTkA7ojkaZ4dFqgVjvFaNm8htEZqRaGJAdwYi22UGdGjtiwrkAWyB9N1",
  "key29": "kwjrAr4f9rFqXCmWifoSMC33F5fbmYE1buTCPmnfgiFiCeASiWsGN8Xd8dRyE2Fg1dTVuP3dCbrATo9Gpiqs5Aj",
  "key30": "S7BFhh3nse75diBVAXKnbtMxg69MmkTfZywaVq75wzZqcyBpzN9pbezX7BZmubiRHqstoDZD9AgRyD5us2svekS",
  "key31": "39QrnZc5b1d9FU1phigLCs45gS3uqfCjD5sgaj4zQL4g6oCYzBSfqpWmvK2URkw5h54Pcjb4mzbZVUAUGfyza96b",
  "key32": "4BB6sVDQm3Fuh8uhJVDASDMM2tFzqP4buievSEKMncXHq36PNAyaRZkVEUeDykubBo7fxqPRktKDauuGJ1u8PQwG",
  "key33": "4A85Wng4111UNQRgcEBnGfHE2XVZsiN4dgCm1dXpe5fMkMow4BBpd4nTuTqdaR2urVE7r3M8PVRkHre8pmd1FYDA",
  "key34": "Sv2t4om7vuFQfbzbbqUmZ3RRY3ftfQP9AMCREpqJcwVzCMtVuwN4vZ4jpfVzmV199aFJsvJq18H4zt6AowqG6fg",
  "key35": "2pLnTfmiqDSCmmUKrASFm37YNjP5rSrJ63MkZeRSq5KJoLn9fHmGUP7f16sxPo6Riz1ootstm7AQ2u1pGmaU8vCw",
  "key36": "4jwqY8nQ76MzkasuWpCEbyFAfR9FawiPMwuTifjpYPuWSLHoq9oj6Df3bTuJuAxUU6Jx1BFRasBg9XE7e8PqNkTv",
  "key37": "3bmx53CkxxDf9grnWDeV4E2NwFA11LYXjFq3Cvz33KyePU1J3XhKJxqVAtJ6Cd6nPNtP6Crk5c1oATykdjnJUSHY",
  "key38": "2Tc75dTQyEdpz82qFyUq93MAWsZwSX7ZAULuP5MNH2F3LgQ2EM1L4o4EygoJteJYhu2Rz2JDP55Jk4bxkNc16Ehv",
  "key39": "5zZTAPqsYBTnYVq32c5HQL8tBAHcCj7Thc3phvmt1VkuXDMqePmdxTsak6h27FNzfw6eUDmBUkgNYzpxdd4gA8aD",
  "key40": "41Xp2b6WQRps4oLzviUja9sojW4aikwjpTnsktw5RNxeWAsJa311pTTDzwQxW4WxXmLngVB9wWccjepAw8RxWC8d",
  "key41": "5MaGzEjfxNjmii6TryaWK2FgN4E92Mfk7GwKKn6Lcv3HgCP6oM1Whj36U9RbMVgnUMRZJhdkwANRmDzmsv46xGZk",
  "key42": "Njqdvn6rXuhehnyHsdjMi4heStY5D2XwjATVcvBQqY4oBjGvsbeACHP6FjL4HJgVJfwwZ3dqJoSA9Jwa3SkpwcL",
  "key43": "FBuLiQHx8HJtiM62niK89uBZAZ977gKvcH75vqXGRjh7RoNxsKWCVUnX8cMudAdde3oJfTPb32XUXCWeKUS8PPL",
  "key44": "ooDhsZzrwkj5y79zLVKS7wCt6ybJxF1tFPqHsjQzckgzSLMZBttnEjaDL7nStX5UuY4vHfKtjqsZ8uS1RfkMxKK",
  "key45": "2MuGRtYuffwF6ZoqxppADPhQr7VY7B6x2MV8wTKVKTiS7wCgFHZWcBMhJsCB138RxhtyRZvr7dboBXj97tnKq5Hx",
  "key46": "5nwEhqmXv8jXoPBsPvFughsr73uaGCY3GhwF3pinRKzETnTVr2hK3q5W9AHqJqWzGrRprsDwrmxv3ydo7cF7Lkkn",
  "key47": "3qfvjWihz1NyqMrUtch1vzg7tiHZrGrZ9E2dYf5CYSPyVEbkZD4rqXagNxGhwncUTkth1SZgCuuEgmdjR2dk2PmA",
  "key48": "5zjpstQ6z4fM7C9dKQnWTjrgoCANqKHrAxSmXKJBYVACPr491T2WNnx2bvVmNmxNc4sdYzSiJfS7EsJjexzpFZHo",
  "key49": "3crL64QSxVYzHt7DBq6G2qqmNxrEi1PwPzL4HYjvqfZa6XustXcbC2d3S234UCYgtFid4idkCLqaVFCnZnu4EM62"
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
