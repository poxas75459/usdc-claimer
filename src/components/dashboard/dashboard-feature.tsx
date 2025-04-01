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
    "5CMiEdiaqKFiJPBLdmPdbBbHYGsEdZVgxHHwy3Rt2CZXCzVwphtaPtG71YortYZH39J7vSxRD9SGJTf8Am2fv88t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M5yeskuKJ2qjHqvy3Zv5CL8xWNGthsc6NgJHHwKqkZuixmyHjeVpndwaPFjCAbjwQgjmarSuLAAxRhN6aRXR8RV",
  "key1": "3ujbyVqrjAgaBCXKtzjL4kosFDdUEP4GYWPeh8y5PbiRzpY7qg5hcBGxujW78NfRtZJ2DFqWZAmN7o1fpHePcgsE",
  "key2": "X4LiSGGSUaRyZpzXiPNhrFFYKe7eYMo3UG76yFrfnCyQhriAPz2SdhcVVrhH89VmYVaxGY1NFHhBfJUcM3KGab7",
  "key3": "hCTKZ42GWXHGwRSeooTH5rnpi8PesU8yCJqwdycNgtVCJgJBQa1X7NvT5b1ppNZrMxTCfnLHyKEYE7RoCpiHa9k",
  "key4": "3h2VUDqCD1sxFP9pWB9Wma4nPRNovvRJcFGWXKDELS6C51G86hU8JguK7jo1FjDdg2E4CWaK1yaA1pKugc5odCLP",
  "key5": "2yRxqPFksL9i9FnwDr9kJ8jWgGpeaNMxGNkmTB6FgpRkMQZnjEaXJoK47fckfAsYfginoCwn57ps6cta4r9LYQ2b",
  "key6": "4ME3ZDLewdLfTDNrUD4jMfegckpGA1KTyNhpBueof4Z5V6wCrryxTjwGJnDbZcvYgMVcX8ts7qVNqRktAeaBhziC",
  "key7": "3QQ6fAZkM9frSmV5oN6s2qVyEQokUweSEQGfY2pGVWKfehi7d9JunkfvYo3R8FK4wf9Jr9qHTsBY61ago9UZYh9Q",
  "key8": "h4bRsQdwotwc5V1uWpLisXKvz5tf5hNn9CFTDeCmEHchJ6kXshDiGgiGHr5pCuBETid8q7d2Puutc67Fr4o2YWD",
  "key9": "2QU4jd3UAUS4Mt93pVuZKtWXqC1fX1uo658DnT5if17N6jaGZTtZLHbCFitfSim5W6u6chXqNqv4DbFSb89o8yJC",
  "key10": "4GDD3AxKrMAijsq3vTRYcxUvkETBSnARYSAqnLcnqVrRwhyN7mhdxXugnez9Urg1HxeLQdW6JxHqkLehFgsfwwVh",
  "key11": "5bn9k2ruVQNSBdWd7MwMHr9xiXd6NCFKAWGPHQk4Ls8GGZd62VNuugr2m63f6bHocTLeti5vn6GfVPDNJZrVQkyR",
  "key12": "4M6qHb2XsCdh6HmaPzo43uzh7P8NphTj6HWFbPgmJoHEViJfqSA17g1vMhkLzX24Bsh1WUAYjErwqiBfSETZoct7",
  "key13": "3h8o4dXh51wKL8SNkqPaxPQLHyFpS834MwpJWRWCsXfkEonqRNsTCrwaSzGgTjWAe8NRZuPze2JH8WhmJJaGFTHH",
  "key14": "3QWH2zXNCegDFQ3G3mgH1aDxxQk4kJzjsCnaXqXzyseM8vFo9KhiAskJGkoVwp9rL1hy6Y6R2x7xSJL2P5HStAwd",
  "key15": "2UHAgmNSsgNrmryAFXrzzAtnVK7vKwah6RU9DAmVD6RNyFawu7MobhFk6p1YziXyhJmMwQHpZq3FZhUMHQS4TVBY",
  "key16": "4WSGBB2hXx2NiaVeC9UEBau2yhd9XdmPQGhBrYjPDwgeUyWpAK1oEeu69FKQBRTSG7AoEicBDeANjusojCYLiXbM",
  "key17": "8hXuVmZux3suFTt8ZM56YREXn2tWuK1myUVQW4ikgpyxDMahe7F2nV7FkUud26nK8eLtdzmjAZ8dHKJVMkR9v33",
  "key18": "4VuGUDVne6NnDA2h8219qtXvx61mkkFcQkCzM1p6uHwkcaLv58CLfRRsrqYAXgtkQ87BcU6QFKkyzFJjDD3UvDJ",
  "key19": "2UuHmhUPQ4Je6d4FEiiSvaY4abQqhrxGhZbznEw3M5BFkjnmuvu3iMBX7aTUgWsRMeR8rGau5oCJJjCSime3T2X3",
  "key20": "kNcenk8FxfG2o3HR7u45QDGaeJSHegnqKCqXBvSauCysEtNQM7zB8mwdgdTBo8jv83Q4wFHUMnMA5xwG9TGStDW",
  "key21": "5aSSZnL3EhDB5UV5X99rw3V8X6hs9Ce4YnXQdXrhRqenS3xxGpst36Zs7VP9zncpiyRT61TBMg1Afk7kUVuznxkc",
  "key22": "5gg8drTjwBntYnVLivyNuY8LiAnWU7fq6NCCACRBz25G5SSLiEK4MXj6PQFoX4QzqW3Ex9Ydr29FNpfMnfnrzAFL",
  "key23": "4om8k6MDVZUNd89ZMDftvUi3rMkw2UTa6CUJ3rrVso4fv6YLKwWAG6YeaJkiJyLPsMyXHoiSBsJCj8qeoqEVidLS",
  "key24": "LP6mPgMqUHE4hRqbMgS2GqEHyB3x6iUTRN6iaZGnkSbFH3wyoy7676kyLdwSHMSoMrg3YTBJRDs3ov5f87da7Pp",
  "key25": "5Gs3Si7qTqq6fJY41ApkVXPBFus8JjHuq6Qov4op6rKiAGMdNSFw1JW4o4HNVtLKx37wDiXDknca2RQcDRoLfqWJ",
  "key26": "ibBhbSjr9HVYtvSV64qVJLQqQFRRNuWqVJgpMtCKZjwudafU6uf8SMceh8ZERXvjPR9y197YyWJYKmsZSAGnRep",
  "key27": "5f2cb9hkZEWSAntYMFeWZ9iWU5ShvM93M9T4qY9HAhfFSDTXdmtXyBCDDY6MRcda6CUP7fAMYCAYL4gcUhUUHMUE",
  "key28": "3mCWQsMyLmMfm3zkWCLbyavo9XwesJpCQgxkPdHbb4jdPuNvpVGKADEohSpZbC1qhSM222DtBb3Be5oBEXGhoraV",
  "key29": "3FxoUYdG5fBXSq9JAyxJ5pKRirJ4ASGTLhn71jK5sSyAZLZfBxXVDKAi6EoxcNE4C9mCzGz3NLb54BsU1oLboVeJ",
  "key30": "4aiQj4d869wWHrFR4kj5w1j4vo68GmSNak6Ggr6RqX6HgwwhkB7AfsZMmFdJCHXJKHmV4EiehM7qapKU2acuiRS1",
  "key31": "5nM5kuWfykz36ggJEtRe3YWaNzH1sy8Z3jkd8ETHx78DV1e3s8Xt9gUPHcpZm9KrbddnSVC3hsTSt7AfWoymapF",
  "key32": "3nNt3oTYrFRgR5NvibeCEKEdfXkvtuboFo1z5xoRYwNFfJhcaqG96vrkxPTJ2CWbzTXrsQLZbHZiFA1PKjHhuQHo",
  "key33": "43QFNbDXLUTQzMT8YpYZZCwWdDBjpm2vmJJxgGaQXtRpL3jjvu6bEkezjPay8rCNxhNamHcgYXLcYTj2JLckzaTH",
  "key34": "P35nNteAszJkAst8HzD9BNT4GZybsY9B1zd1FugVGUFwgByaGFvp6K4c838NtiwqkFStFmiEDMPv84E2PJ5PNAm",
  "key35": "54TJSiW2rfpwHQ6Pbk7NTkFnHbriV7ZJhLn9x2o8mtuNHe5xemT1JukZmtZ9HsAiHEJyX5pVgzokVjD47mLNZVJy",
  "key36": "4GnUxQRisaYjUc6FoMNpkGvsWeeUXwRy9MJ9nuPcPFBBwCZNToxChsDi268ZwgkTc4iiR1toZhvpwD79tEbFUssC",
  "key37": "4zm3mHQXBZBT9y1heqndhUeceRtKTjyLG1emREKqcdoZh6fqrhYsiBq5UYXZ3ZcCjEMJwNbs1jUrpxJfk62WEMxK"
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
