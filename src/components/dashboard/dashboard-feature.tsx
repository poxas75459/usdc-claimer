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
    "5U48iDuaZ3BZQg1uBwFoeDT2JC6mA6oGzV4qffXwkQKmSV1Sok6fRRFtyn5r5DvvSrHLzAtcDxNH9VPtHy1ZaHPv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55YDPpqGhWcGj7au2zwu4GV6Xc3XH8EUwkyw3FTLs1zMCQKieqEfW5Y1S14cobJWjHbyj3S6ntFstao3Uv2s6cmb",
  "key1": "5RjoaYL4ESYgZw2GBxbkGbpDfjHbkRVhAmNWo7L87HfzkeY1ZWS1jaS8H3u7NNApq9ffAaK3F1cG1GAyZ19hYRmc",
  "key2": "3o8c3BU3fQZGeLAavnwPJ8gFsVSDa8jUoaEB62ct4ijcCjj2bUxPWbwxx7wY6Vy1zu4wLj9ewvJEiuBkbuaSWXD",
  "key3": "5CWagW7xDhU3xKHecbUK5d4BuMdkqrmDxdgpwSySxedMEhguD8eQ3hRFGcn1sLz1jMdUihje5CuBBVoz7Peut6Dn",
  "key4": "2xBG6SrDajet2FUkWLVVXNRQjafsBdA1s9in6pZy1MXUFykgpf5eQ6DAhLyKqfM6ssM2DgLrUB5gZxA7YLCANAaL",
  "key5": "5MLuCSxJ9DhATwHStChZWZBtKURNxF8oRjHJooiKTKEahU7FBk2vcVsEFME71jiJ4cs5Amod1tc4e7GtvWvw5k34",
  "key6": "SRzhqemHLh7PFhUKREJq2DmmPuuD2yBzj7xP3eSDEiP9RHjehw9hR8cz6FswWLrrETB2eiaYhqC7MHLeUr2XKfP",
  "key7": "zp8cHVtAgszya72BZhEzv4jjmhxanmu7bi3jKk33H3Ja4FMaScv2mi6fCy7Bp7p2mYMDAkVB5jdbUZZd9FNhfvD",
  "key8": "36XSwko6yAW4oidu839w4ytZjQiGNYzgL9nJruPXW1BM61RXPr9ryT2bhXAtiCmSQbH4mRLVT7UZQYvyE8sqrGYH",
  "key9": "42bkKeFmaF9UN6qk2PYmi5kp9xiNpiRoPfFUWHspWCogcdk3o1mGZe599sv94USYZXcarvd3dSm3qNjRdaQ2aXzm",
  "key10": "3ZHdcVHvQ2MwSxuTJ7odDQHKPHBxnmY4kVsEk6V1zxRrbX8sKMSb4amC6RuBZpDYq371kguJdrhPXrkjXXeCpkQz",
  "key11": "tZS795VxnmpsExmvQGxaNSR3R5NgqPmMwrWjRTsiMdLuyDUr2kMzyV9vXLCwnDo5XU2UrqJBX9cPcM29aRXhjdU",
  "key12": "3SFcqGijguh6w4XcfLBwtDxyGJX8n7FWrpZpS3WrSJK2S3NBQ4sSZKVf51biiseYs4aXx6HeRGeu93bbxgdSgsLi",
  "key13": "2ShptD9rhvhVXYU7dC4Dot9Kq91zxgChQMqM7e8Nq7EM7PL8wsSdiaoqU33eWNinnLcsazTX9WWHgShT8vvVNFPm",
  "key14": "54HYjVPD5xQDkJcNo8443cNcNAU5sDunZ2kV4xFPBckVBNcbQv3qPd483ZBj4LcHthZY4kCjERWde5hrtDujKAy3",
  "key15": "35MNmvzLsAe9V3nt85SX7wt5bycUq9RjbJn7vtP2SLhc6xP1SFrCiDiJyD7Yy7eRLxnpaDtUYxoCNmM7NRDdRVkZ",
  "key16": "4GfBKMmbrXc7pGzLnRMVBtmEiDMG4vFBYjBUUvWjZN7EJr51ZGbb9esxKLwvDJGFUbkchzpoZvvbKzeNJ9g34FuS",
  "key17": "4s23XoJaSn5W2tinDz8nabn7htsZ8XkWZeyTjZkDVbn1EHXBU6nstTpJu7Sx3AawXgEfrwfyxuKVsTdpoEyo9Q87",
  "key18": "5dJ2foCkxVywRAHkhr9MdXDjE4GJwDPuE4a4FyujdWzDQ5izdHVTdU17YNie9XS2oU2Z1gx73jPSgvbxJmfU3Ytr",
  "key19": "2RWwksQYZZifbbE8NVvTjjLKEci3EU1WXGhnjAsuTPMoXvfMyhGhXT6FVPT3sxU2n88NthNCALsH4EcDEXj5PZvt",
  "key20": "5V6GnSABHAarhYxbyPVKYciEZnY38JTTueeVLCfLGpBDKkk9Sd4pQMtjXTosujJ9NuZNxJuW12HbKYCtDczcAgBa",
  "key21": "4xoFdzeAe7Lwm1su18AX5utNSWYayyPaeSVnT7MiH2LxKjZMi3pKBgDW2uphWmj1n54qdxHTbqYAj63P9FKsi6Uy",
  "key22": "3moDQbZp1aumwTx6sPvRmE1VnjD97yQYgVNSTZJH4DEgWdrA2xXyAw9K3bfeMaTnj9kGhoxhRtZdArQ53Wcr2YXu",
  "key23": "4GumKmJrautfvxgHGF7i3sBfAFUxLCdzc1mchTwdUc8Yx63F2ArG1BACkfAPZwSziqZEF6gSmBKGk2WQthYG47ND",
  "key24": "3pP87Q6jq7imF7GRJ6fQq4mCXeptZgFpkR5ibaK6sRvNpfgZUzpHqb9yp9xWF6zzcHE6BBcfLWtTUnhmsKoW8AFy",
  "key25": "2qvazghtYHsb8Z5Geiu6oL3dM5DL5J3jRcrbTAUz7WFULwwWpTpcSBsHRF6CoE8vVrcjPLmRePVT2RNzwc3Qjzap",
  "key26": "53SrwrfKS1xNkqnQYGF32SHJ4L4E9HeF7GqmQPZPCAFwMgNT53fQAwNVtKh2dMNxWfGkQ2pKMzFo6wqkHPRGgjAi",
  "key27": "2UMzVh8cQWz9faGiw3HZiYKsdQAuyraTgpVQY1MWAGtwdie4SHrs84XyCpkrapes6C3QVP9pb1QtoUuHe7qKSgH7",
  "key28": "3E9J8nSRuw6qRahicUFVhMkwDT2sJFuasSes99s4WShwHWgkBSVutLctNz4CKWzwKaygME8aryfZgZ4J8zYj9wFv",
  "key29": "4Qb6MjCV7HXEnMrFVA11PXFzB2YqVuV1ozNDR982h7kt3hwyCVo4sWk5E8P6XWzR3W4Bu4vUmGtTZE8imXqvUL8y",
  "key30": "5QcPaCudgWQiJ18jVwe8DbnFoa9rhK3xXCsB1SGdZ5wgAiHGB5yiRzDqTBuy5WDD4tojNKat3XAUTKBfzShYgZR7",
  "key31": "5bs7ifcHdy8qnRvH9WQZto3h1DdMHdjRJhT4akkLuaxPikUDwLbTDsrgR5MNfLnFpqJYBfWeKBDMovEgsUyjNtKB",
  "key32": "5VRDfHRp6SpZbQa7j4zdrvNHLvxr1eiFosBPLQ15Q6iuxj4XcADnbMFkFyoXYz1eXmefYxd1KHd1wTvz1k7bpG4e",
  "key33": "22czaxysLDpyUnMnqze7ZzP6S85iEL35MphC1WgQQuxKu7tLtmEK5WuJdAN3o6Zo1tF9hmRWUqiRXhAQDovgVPmR",
  "key34": "HYTyYGhDKXgYMzwcSunQ8mdF4zYzishN8qVegTJKHZmWx6hqbFDRuTWps6gPqmbGZdKo4L5ohyPW5eha7o4kEq6",
  "key35": "5ZPvo6hNJbFT8ARMNgMZKzTpX5rr56rwGTQaQ1jgWA7rhcJqHwH9L3mNw855srs1jqgAPNd97ax8HPK9gxxL19aG",
  "key36": "3gmQWxu7QMpbfFNkLnHZee6dC6Jm9kFSJzvECoeRxfPYY56icXcwh9eQimzU1E49NjcDmuPfy8VmpDWTcGN17bCm"
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
