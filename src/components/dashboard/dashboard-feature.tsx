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
    "5cRc53nKTqLSD2Dyf6WAuxwZtoERbyPjuWG6SQNc5xJm8xn711XSUp1RdQx3ipvKP4Rj6qZQHn6VvByzRCox39cC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52TU61buoZkPTjKV1eppXBWpbDYhjEcdgwz5XmUW5SiukdrX2a3igboTiheRpMm7ACNbh9uq54k6au1SpDv6DvC8",
  "key1": "WLdhSK5DTaNyDHQV1jPH1N3LNuutrzcYMKkyV6v86d4LBagRHMHehygzE4vsGxDehtdzkqaj5jCcVMf1GR9UNTi",
  "key2": "2mr3NLWZSHt1tv4cyMjBSQSa1yTKi3PKxi8Vt623HYH3FcdfnjU1DF22T7dUkpCXT5RHrihEjBV1u9kWRit9NNX4",
  "key3": "4VuH53RWn18URq1jChaFXb4RrS31CPNauEzbdxCYTX1HNvJgJqGjWTRC3X1wXmLqdYfBKPefeq9KCWGTVBPsnRnk",
  "key4": "v6pLN69u4YbSTuHtVY4GJBkZnVnu6rV7ZPPUjp1hpnyxVeoEpbKYcNgpUhMiRWLXoa4QbDsdMeAjBKcqRgB5D7P",
  "key5": "2qMoYi7zNubzvZfwseDsH6SYLjYgkPqNXkAaXCWxyq9HhCmEXXLbjW1gEstXMvxrwyxwGFu5xn7sdjov3aTonrdD",
  "key6": "2seUxfyM5xaewiH9SNkYYvoauvpwTS9kbhimD5nkCzsgPAyxEPBWLodVA2ytMjxJU6D48jFxpjpbhQdEbFbUqpoi",
  "key7": "3qpQHJeU54Ldet78KmDB7kiWQytKkJkQHUwSecEdyWMKEWZSAvFQGdtVGHxVP5bjPMeZBMLBdywNsVaapSPBrS3j",
  "key8": "485adrFUEThpmgPgsWBaWZ7RSeNe1SeC29oFDKnCGUr3Bm4RKeQ2i9aW77xywtfeQhtCV2BHi3JwtQ8r9mTekeXp",
  "key9": "5ZC3zoZ9JvAXiZb9VuC8odyBYf92YGrniVGxYwy1GkxQEDdt2v4Yf5txP47xxxiQmKqumxMTUrP7tA9mL3Qnmkdy",
  "key10": "44xoUXJN2p9oN4iiFLGJhRK9ciDPEv4ehFu4RWy8eignbnneK2yfeM8AMWsZKg4fb8n49K5N4LhGUEcCL31iSk8c",
  "key11": "T95VVc55qpU9k44YRZVAXWofiVU7yH6QUgcx5fHkWukQyju8Y15Pep8idrqMmaJdxns2dNHnmkTRdDHugs13Y6a",
  "key12": "ayCh2zi8eByVc4Wro8xBP3qBjbaGq794brLFn359gVvPKYgQnRRYS6Dhjhdycg4FKpinhXW32aQYc9JX4RCTeuF",
  "key13": "2wrGKWyCdAkMZMvvnWK7YNJ2XehxC7VimDjCebVqMT7AV8cVwLvy7jpoHQsLkPhyYttLruYGqsKPkzQCzMTGxB9H",
  "key14": "3yN2JmhgtjuiYhfNFLtPjjf83z3nPShKpQ6yqoBjr6AjXgXhmvnw4sxXaFV7xRdnbY5JR4V9spQgBp7DJ4M39bM2",
  "key15": "5vSBpeaD4Y8qbGzYDavHbaMPDwxENJaxvpAFeYvzKYoG8sn8XN6ZsxmjvG1X1bU8nUEXkBFszYEW5ghJF8juAz7g",
  "key16": "4HZBpVt7qJVYi3RB6HHy6c7j35fNN4nMnxuUZE5TwQbDaXyz1dtVmKQwhjX8mrqjQhovL9hHE8moEmNzdkjtq2a6",
  "key17": "397Y4BN5n5nY3LHvMKKNVamVZt6HADwxNKUguAfDf61Rs4j6u9WZRDY5rHKocG1qHCLn16gzxKLKggbaqss5thT",
  "key18": "5tdLgKa8rvizRHwBi4GjwwUskTXL6zvnfkZs2gjZGBxAR3g7j5q6cFa6Q57CZ2LCBtAppuPrBWUZLpQShEVjoug4",
  "key19": "4ceQo8SErQrGC9BR3aqW9MEzjFPfUc9YSb6Y8FSVJvUe4BCKoFrC47u5TGR2pHhzpULqueY1t2ctbKuzFtvbHkDb",
  "key20": "46UXivAjwsawMSoZnNTqJhMScdnE9pdVyBQX2pBaCJxhJRLwNYLb3URjBcncQSPoHVwFNnqkyMw8nHC7bhRHP9HF",
  "key21": "3PdW24RwTtbFkH62pGnjkynQ1UD1J7geteDTS7U8yaLKWyAoRavm3aPLHqeT3jTvWiUhumhmkDqAE5siibZTVR2G",
  "key22": "5WxUzeXTfD8dt1SRkT5EXK7EKYTFRXMHDEkqnXaG8fAd6E7gGVzR6YCm6VG2DWnNaVWXh1592gEjNagyCmZWpA1s",
  "key23": "2PgwNSEMWFpdf662PMWZSHDZ2FFP7WvncbqmiqkCkuKd6cubyTNvv3NSrszV53vvcy1D6ynpKQcgEGkFNKkuBNT6",
  "key24": "3NK1mJdKvGbXuamAw44ULeDYgn9Tn3cJXpCGNpERtg3mvX7dYszipsDG1E7XXLjb9Ksun3xpmci8GtzFQHLhvsPd",
  "key25": "quwHveqNkuWiHGrfS3zGTr2MzvkcHCxphVqPb2hnWp3JwfuBipmRZ2StGvSqef5duDu81foXD1vRWbkG7ifr24d",
  "key26": "31tQE6PFg3USy6SkomXc32JdaZpDPVbtsvG5NT8ghuUUCYhvX1pbhkx8mH45fuQjpQGiyFoGVgdzzqG3GDkVP7wi",
  "key27": "2LDqS19mxoLvWScxzyjWwXwbNWadfwqSSXnzHTN6aaTjxcebBJ3nEk311Wsk4vigkLJj3CaX8CBP37ArKZp3MZaU",
  "key28": "XvKY7hFdouJUsAcZy7RYdfdeFsqB6M6gS7KFgM6P9zDY4jEb3TPXqkuvam9XHfFz1hqYtPiaKomeiGDp68hYDjy",
  "key29": "HXZ4qTj6jzAuZmjSBg4GWYaE8BREdTaAi58mxVJ8V6vFb83C2wZcRZHkWL5fh2F14ZRjvNqjRf86UyxAdgf2zkf",
  "key30": "4fAJ9tk83RENCh1MNhM2MEmFxLCVjdS2BvJsLD5YX2AtCUbLN2QsTP65fDTj4eMWfB612AwsDz8yuNiRN8fSxjaV",
  "key31": "4p6bZYNZgmY6hn4VeRRchTSonNpHbm5B47o6yvNTWq2YeKyfiK2xUVahsxj5tVTVxRKqfY9gv3Ltnf7cJRRXZrUu",
  "key32": "5ismPyoZRqBhMGRjVM9C3zcS1SwhhQ6DUC7ZJJEmdFLQ1qbFgH3WaosVComVHsXTCY4yL8dPhLx54PrMWuvMxUmZ"
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
