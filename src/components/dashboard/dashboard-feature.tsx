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
    "4HJzQv8n3bctRW8YhegqYRfH6hmkMP35Ug6SqYpwKLngxmYRa4rF1ugcjJXbC4swf1qEwwMdCFhVC5bnyZ9KcXXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oDvYsbUMPQW8UZncyxaUC9zTYRX8VwVYiZrQn2ipPNuGh1gz9yQsZz8HizPP9uaoLg3gZhXhbhPv1DYsMW2qP3r",
  "key1": "3UeoP2Sby5Hy4aucnEq8L4VGi3H8WmXiNm3ZKZjAKHPKH2zNi9CS7qjb2nkRY4meSYtwmGpnATwdHJjsAQpQB5SL",
  "key2": "8oXqvL7zg2ve9H4MKiYkuMSa2TwCnWCrBnxL2qg1oqfAr256xTh9WEiXD8CEU7dZd4hmDZCwT4JCWL9GNaYrLum",
  "key3": "2XmUTpigDd59h6LZt67SuvZYL89nv1shzadT6tF45kUfRD9Bs2nJjRSGboN8HxPB3vmoV73LcbNc9Ychn3iEYzmx",
  "key4": "5hszHAMcCgLUhhDjZMsBvthWUrci8AmJQdo5H4tgJNwNk6Vs19PqEv3MzQPsUt3NoiCCpdsxBWbj97rfsrPy4vtB",
  "key5": "5LRVUjtkuWvXMAyXtyjCKhuneiqBikYG3MJnuRXeczuDHt93vmgwfwdQjf59qjdu9HQGrg5TVJYvtpgCdCi8HtCF",
  "key6": "3bPfuaVXc1aJMP3jybVQLHwDdPkJpr3kza6GptAQorpA6PGFs59y9Wtp845vVyVE9GsfEKFjQNDszhxdD8ftrMp",
  "key7": "T8aZaPAGLrmkwZUmDbeTnVpkGa2uHqJWZ5HsxzsNgDddghcKjJAfLaosVc9TdMFE9WuDcogU3aFZZLmvxRwKCfk",
  "key8": "5rkxAEtyv2Kt35nuRDGUby5PAinNZqujFnZjdUUf4o4ioiCcfFcYUDEB2iAwU47WK6293N2sLwGUgaknhVZrsieZ",
  "key9": "2NVzpkSq7bnfFJED6hqwEc6TBP9yHUWTZLRN5Qmf7HLigt4E2rmHhMNgZSe7BaViZVh8CYMGgKdvNdGpQt4fGWDX",
  "key10": "5yRUWmQonLNeNdDW9skoeBtHJad1XWnB9UXZbfigAi3UkvPs6Yo1kxVHCBGPGk8ToiMhssuoPPw2y2r5rC73zK3b",
  "key11": "msm2BEZE8yTA7S68gWjsV3CgYaUZNyZ4js2P2ykW8A4bnP2dN7DzDSJj1YAFhY8Ciy8DJhqkvsFAaMzsX6e5gPn",
  "key12": "7bWejphB6Lc5LKSDN8c4Nf4HmW2avQovpiLrVwJ93swqRn3h4sN5N8wDGuAvGqS6bVHcPoe9mMykn7tTuvbud46",
  "key13": "4aEh9S2o6XqqdwaAdfnhUhH3P3YvqZXL8Mc771z4xHgJQCiTp52J27bnrhgGD76zoJFzcGCHj53wVPdFgqpc18Tn",
  "key14": "45armTsFNV3psxoEEATVuA95oDtohE3Ssr8FZYEYcveueMmecaSjuxoCinwKbnVEcrqgLaakbyMkPfGpm3PmSBUZ",
  "key15": "3mDmTs4DUPweczaqg3XfuBPXRZipK5kdyjeV8ogF1w8HNKfnqnvUthGXuVwtKMyq91MWJTKuaGmthvnEo2p21GLg",
  "key16": "5xnLH5Xo3qFCeMCtaNJKwNCMTMabMB8jnN5w6sXHAnxwwFUP47th7UyeZapYYZighLfd1EHxrU3eAduGdgCEjN28",
  "key17": "3XF3eSF76RGWJR1Uoa7oEHURuhriAp14drEvRWEjT1zQQD78ZfePF4nAkA5QHTkmDt2rYt1nGYH8DsT6wtnYjEEu",
  "key18": "64aEhF28LzUtXwCMvUMM1X6z1wovCByJHue4JcsGVJAtczeRfXaTj39yxbWd8SMfRLUEvLcRZrCCLordzsLuwtoY",
  "key19": "KdQKTJUstiHWQKpLUv1jPevwnV6WoAeyB66FQ8bgYM8waaHH3RSrXxLys5KtLmTirZiun6V3rMPzAWbXL3g79dU",
  "key20": "2FneM1He9cWxvZ56ZYtAmDTakGABrfhSxWrT7s1Liwe31c38uMGRcsygYZDTb4ouX6X3XkP4PuUt73Pnqjpw8DPG",
  "key21": "53YYStKyC6qFVk32HBVyi5THZAqytKgB37uJ9dxCDUFZ8EfxqQVWwSwajxgG5sfAC5Myf5RvFBS1AP3meD9YfsVk",
  "key22": "5c64MTcvreAu3B6fdDTpoPsmioGsWq5QE5MwPq1JLWBX3ERJFxMEman5nkDdHurZWcZHC1RYu4pfQiMFhp62yPmD",
  "key23": "3oh46ZnvguiAVoqBXJUsEYwYPbU7Hy1ULouFvzYuZqSNhHBpKkbT8qCjvYHmfPKeroHxCjxUDH9tyeVnwVrVas4J",
  "key24": "3bhTPSkxf4o8qZvL9n2dFhNwR6k18SbwCsec9NLA22Pp6oJcoHBqbNgo248jCxwT15d4n8tCbgBys1g9EHiztNNH",
  "key25": "zThgi8ouwKx7mLuFkoM2zgAwvk87osxoJThTTVr5g2XW4m8sgU5XxsJHeLJysk2XXXbhD9NmSUX1eBcPJTnuKxN"
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
