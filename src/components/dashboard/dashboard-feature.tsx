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
    "3HF7ryAK5PGSHaUv7Tj5ZrBEYfTB9LwaU1NiADtZ7KZUx6LXsf7ATM678NhJEcgQZiExbdHD6hKSWiUtJ5yCAuEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56TYNATF4zopRj8ePcW2Z8sbg6LB3427PmtMfmtYYBBSaBT42sd9cAvq2oZwUw8FeK37Myzr3rkSpVjU3ndUYHGS",
  "key1": "2VpwNCkkYN56AA3Wv16QhYoy51J43C5cnNS6ffHyFHCZQ5BoPyAFkM7FpHqXDbV8pgFSzvBrsXoyQWbFLFqnzA6b",
  "key2": "3t2u5z4x1P42nT9FT9cM92FMog7SAMj146Jh6ZCZmUm7wWuHGDP5ED6voR6bTtbLXvqr9dyd9Rfn6yRbAcZ4fk1s",
  "key3": "1fcj8iMYE5yeiswS9iEd4AxZfHT1tRtB3FinHX78TCR8FXZgYAopGuZigxWWAFMQFbhbTzycBZPYKBk5vCzuS74",
  "key4": "2ofsVHGMtxcSPJYoF2Xwt3c8YAEcKS73c5pV2f9W4Fkv5RvrACtU1jRjF6mMNLt6xntJCMSYTq3399X3PhqNgjYp",
  "key5": "2FeHArbdJP12Xhk4b5BXHuM7WwfwwvQUqN2fC7ojnBW58MLRSRe217r2SHparg2kjQNqEmrxxFrGtqyDu3tmCj1Q",
  "key6": "5npm4upUoVePbP8TH68JhUW33UN2UMZwnBPkM5KZk87WUqGP3yZGm47DSTaJ5m9Qmg2bRgyoAc568DmPyrkpbeSB",
  "key7": "2ywQyAbXn6c3f2uQZnjhJU726MNGcpoT3huM3oZrekbD1nEunyTWfm2baMRa5qCHHLjNmnx9C1MeB1uLFe3JKKjd",
  "key8": "QSB2gs1QJzursfSeqgDxfFPhysc5HchKHdUCjDD2YxEBu9TfRDJR7nFVhMxSUSH29MQQx6fyrBHi2E9dGW3ZK5o",
  "key9": "2837h2Jh8hyV5ZHKAaUZfeAgnJCFdY5uFCswk6Hi1xxYgYkpNt5NQSsCB99okRQadPVWDvKkd5jAmd9bJNWpdi79",
  "key10": "57GWTcX72Z8UtB6MLftFppMj1o4aDkH4NctsAkJ3nHpv32cNcQz4UcZxsh89bFKGoZ8CCEvNuZacUk2Dgr8EygY5",
  "key11": "7JX134PS9mjjDrgk52xWoSFUot3Xh5zBaiAvZ8ZfTMCjv8TKdS9NKJnbKTF2Doqdybjiunun5pv5HBcozJv7zMF",
  "key12": "4Td7JP4h5cpAHgR8dkaqk1PH34ZAhGQaZNq5Sz4oqCyZDgiphNTzPaCTzBtsT31Gbv8wovUAMoDNxVhEvHxxhUb3",
  "key13": "PThbA6EFDRcb846m91VeUsuC84K6YXSheUhLpUnDMGDiAHSbcV9dssyPUyXd88tpajV7JtnGqmLB5tdVKxKi9SP",
  "key14": "4m4xYvjowve1xGHnNNFyrc3DVA1CysXFWtkgh5oxKf9jmvScNzc8rd8AHPpfPMy3YwjqWAH4vsXeXhAbTGoDCbnj",
  "key15": "48w6gN3pRhytfS6vUgtEpjQ4MTgKfubHhXTfzQBoTwPELfcG8CsDGw3EhCtz7MAoo6eydzQCmRHtSQPQF2U49WCK",
  "key16": "38rZ8bPYcCrmJndm5BS3Hh6nfkHp52HrQYGYEQhaJgzfCtDAn7ZNHP8SAw463YiL9huGojS3fak4UTMMoe2uxXwz",
  "key17": "3htAbhxYBgGjtdVTfwLPp7TL5NeaFSaNHJZvepdpH2KPFviGUC8UaqFoZEXBkYVFt5CZme2UCo91ZnBQzWuUj9h2",
  "key18": "YkQPA5vATZFdGQAvZ2uXoUEiiRwxUVoDFxem5VS55c3PfMTKFvhZJKAH8WKmbqV1eCUdnnf4xkfpKXRE7Xy1QQ2",
  "key19": "3Pstujf8AnZTRjMJJyDGh6oLZ8inNPRCkcHaoPJv4WqtcBJPqqnxx8b8aoJ8Vy3DEMkQWJnUSSAtADfHTz75Tm8v",
  "key20": "3B9smzFC3r4AepMcHNd1cogHKFv4XxS5YiMnSBf9cf4RvYY6QtCuh9bLVYSo18xGNEPDqcAZRYrkJyFLwGjgVgNE",
  "key21": "5QMaVnUh9z4DzyjUBYnqC7MPuQ3vHpYKwvrxe1qvAcipUi5LrRq1tfexC8WUpJaCwPRKRfVtuMGBURUSmQHeBRwm",
  "key22": "59976gAmBKLYjEDAdsZdYBtwsKpNPEH56cPUn8YqzbjHRXufyk1D8K86dtFYv5VZVB8R582isWrRRB67CenE2b3w",
  "key23": "Jb3RBKuCHPuCBjLzeBiG3bwNahLQgF6ALCFqjRNnf1965SbiZsdX2B3RK7vNFqkNFkG67Q2oubWGJCFX8mumBt4",
  "key24": "1VjsW3LdhhQKdetRtrgG1XaW9wC22qR5sw5U1YtMDZngAhmACNEnUnnozZYbis3RtbLejDWWatfEkQydoTpzK96",
  "key25": "5khj5X4wcyKRGnZHij9gLbJLUqwstfFJzBdgqFHpxpaQtiLaW42E3RKiybRfnKaUtpC9iJ7oGqA4VxyCGWtUx6Gk",
  "key26": "5gNn7Z6d7YnEWQyFfEFMrwmE6yAxy8CwcKQnwjFZB6b8J3BH6kLaXqdfJuXBo6uTnJEF7yR5agdpArWkkx6TkcYP",
  "key27": "73sytucamH9448cf1w1orYGfeUQV4384ZS2c3vaZaPBtukAPYtKTuo5Ksb4XbCHoihgyXyE7dmsm1uUxvxQUuLP",
  "key28": "3yYrSEmin3yHgxYeCDTnKGpcy4V9UD67boQuXUPNvNs4h5obC4Cnv8rsuALjDGFmGggn6LPjoidf6b6sxtYgQnhV",
  "key29": "5bcoBR73ju9MiJc4AY5LbP87YPEPoFCdHd75p3eR99reexWq6GW4VXrCNafD5RwAhfZhj7Hruh1a82T1utPuX4Kv",
  "key30": "3pjHRGYS4kjRHMcKc6rZhyxwMwezw8togNn7cHV7rNTjDPd1gvVoVBtMYYm4U62yohrHKAkdnS2DpGqxxMqHDrZk",
  "key31": "23tTyxpGNzi38kZvQkMA3StiWaZ2fjj91fqmaTYE7hHDnoMpnBGRtWXjD38RhuGtvuV36ofdGdLX8xDuy2fHQhQH",
  "key32": "Rfvruao8U4Xmc2NpimHuA21Cqr9HdhueXqqxGZzn2MDVR8jrHxEpLeX91dfScSHZYUXfUmkXq25bJiXfqvptvWA",
  "key33": "566Rf7EeTsSBnjAbX1zgZpMNb9YwjcuZWHC71rtSt9qXaM21JghadHHnyzzaMrjcUHBvFDdF9NYLspPBCyLw2HsZ",
  "key34": "gEVJZuJesdfGFZmfjPR6eb8NhwdNizhKHaKrwmyB8NwHHJtjSsZ7HYJXWA7sL1AqfVkycWgEnkFnZGbVaRKJpor",
  "key35": "4ztTebcAQnnYcYhEDgtgC5PEUGDjxvNPW9Yhv3L55EWN25Fp4E93fyd43c5amx1WoPDFwSJLEU43DeN37kFA8RWB"
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
