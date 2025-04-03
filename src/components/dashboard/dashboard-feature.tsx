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
    "4sNE8N7c26EKfqm188wvJapiyaMn9emB4DbSwUhY5MzXwLfQuGbiWYHMaEy7rhU4SVHwonAGDewMMCnQcPZfvdBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48Bw7WJjypRab3jnvio6TRv6Qd4FzP2fszcarrd6i5QrvAW9k9LMo3sKrSHjRAnbd3xZ2kPkCdjKVXWxag33Q7iY",
  "key1": "4JPJdFkADYkc1x2vWuqQxkcJ6vAmaDTARex925JWvb6vE5KMKsftFtJV9Fuh4ZZix96sos2sUcSfT2WBQzBad5CS",
  "key2": "srD6ND9xhrkCGZGC42oMAHREhWzqVLMeJzbee3UaXGR9UYVjKEeqehN7RRZNR3cVojSvDvhKGkgszgsxC7nLStK",
  "key3": "3S2pSrY786f3AXw8JJe2GGXUtgbcBsdR3XbZzia2rWebk5MAwhzkhrqR9UxdMUdtxqtAYfnfnJpUwfp5ZHyTLG53",
  "key4": "32RUGKqyaFfMKfWuc57GYp8YsG8w3KuiaB1LX8iKvy4SAoZUVTDJrRLZpxWJfHRH4FQW8PZn9i3nVxNuwiRyLfvj",
  "key5": "4iMFScYkRhZ77V7rTwWoU8vkzwNcZj8XUwWVHxjo9G1Tg6faQZox157iWhTJxVhzKz4N6BDqHPkW3shNj2p4TtMw",
  "key6": "2s7Psi4cNNUWUdZQspHAARXVgLyhSqQyCrDWxRpLodsTFHqjY1yvCHcTmgTVe7FhGBfgzH4r3xBxJeq82NsZ49nV",
  "key7": "5KLAQBKfYc1wEGs27r5sH7mXoaB1uvwHXXu4erX616yXf4NEoKpiKg69U5TuD9njUin3pymqm8Jz5UKVX4wDENEw",
  "key8": "3KNBZ91NLvrn7aRe25EFy8pmDhDgw77v1csaTa4fcWw81p47GXVd82LE8veRsHmt2Zm5hDh1qCgo5c2CviFrXuQT",
  "key9": "58SfVxhBrPCGpUTtT7xGD9j4uJw5PBXQWWJ9RatCWiKoMrjVEwF9c8sP4d8emF6ssh3tPvEw1fsziYCLMBbNk7r1",
  "key10": "4RhQandmVxMpb7m7raggwnym4DkA5jcHtbcc61m5qjZcxGHANMCHFnxN2E738ZMNzurAg7PF619fqtsoHccxbPqU",
  "key11": "tub73vMwTokmu1iW9EAuVrbHPudoKWvsdEpG8kjJpaSJ3bhGVeMxdC4Po1BQHbSCkFpCFN9ior1VNu59DnKjqqT",
  "key12": "2Y7pVaP9vePR2opJz1XscjBFShwj44TrpGKfBqrJYTvXazgWCvMWx9LFnBfKyYZkXSirxRnY1q54DMQ3Up7eyFa4",
  "key13": "4xKoxAYbpgiX2wtZBKozh56LTgY6oR1BHPyHDVHojkqLLkZi48PHh8nPRXe8qq2YQeboR2WobxEWeZntc1gjng57",
  "key14": "4kXVh7tjHCFJLxrfqycvXH46sEPofkN5JaLsuHoakvGuTja7MQ4dxpjVYCFs77213HMDLTeHpPpmJnWe18GfWtny",
  "key15": "4BN1bvbDEL8SG53STyyQockzg9gKDJBmoPwHYn3ypqzPHcUSRwAUpYdcJmyZDDsn1XuuR7aLu6whFSwiYcrXW9mi",
  "key16": "3vMcHPGDjem64j1JddgoDUxHZn2LhC7oyceAh6Hq1aGHNnvSL44Yb2udUkJsCHNHbVXh5FhQZDpgiBxrTCzjXaPj",
  "key17": "23gLnSfNcJMozyoV5riukxkqTfLwV81mLy8ArKbLWasJUVB3ZLMQ7cKHr6vUe4WVrv9QvZ5W4i91tMNz5ADGutNe",
  "key18": "3exxMjHJjL9QgZGeQ6jHCLGMiMt5LxNVx1iMRqmMhFKsLqoWD3Bbx6agzzhGjWfp58EaTBSKKMiuqnBhkZQSfK7w",
  "key19": "2guwzArFYhJZVWzGdQzoEU2FJ6UznsEr3cVaqSCeWmnDYSvF6wt6Ebazv8oTTVK82ccc8cUYqjLrQd7vM9fDNWsm",
  "key20": "4Zd5XmakmHYUvHCvQAEqUasR618XuAtryFHsuoDZ62z9DPKd8sBAMMuwSQWbDE8p8s3jFsVfrYdht58pMRqjni2X",
  "key21": "37bD9aZ9vQQ9Cmq8z6aKyH3PxJoWrh4CXTUTHjHx8UCoGW44DLzv8EDM1Y6Aaw88wPL2hMhSzNK6s3wezjotfBaq",
  "key22": "4YxB45E3M7awsqSniGn3TWjQnwT4cjytW75mVqJJTNd8uw8EupVoC3DYQ2YT3ZUpjL3jTVm93pqGLuyWZYqoyA18",
  "key23": "3LoKF8STQhicrp8DpTUdiVUovGv53akEBuUDgQvDLv6hBSPoFBthF4XGsYKMLYkmhNGbi6SP3DPLmy58mQd8sSwT",
  "key24": "R84B1ja6bSEdFZKb2bEyVUL3Namt4mXoYzi4nSDfbehPh8UTWkYR3fDPfhC5cG6xALqZCtewutWFhsQvWkZXZmf",
  "key25": "473QecYXbQVVvtgiTYptLtwocM72G7wZW5gS1M28zHUq54gyMAkCFM3LuR82XTkDf1UozTHYxkG5ZMtYM38W2hCD",
  "key26": "2FrSUwJhLUrLYxZ9X4zua2hD9RvCFaitk4tLTzDSRtqDY3jCYeftjefLWTjj3YaN8vNU3bJhGCuFkE9ZxxW7m5oZ",
  "key27": "2yoMee6DBveoGGvGmq76yqHqK9Qg6qQ9eUpDQ82AA8P6LkhNGUMtBbLxDu1wt1ojjhei2YZPg6CAXbn7WTEEs7eq",
  "key28": "5HoWWsHLYtpJqAZo8SMykvK52g9nXmkLDB6LJfXK8jtu9W1dJbbzEvy5B5oFEM65qCJX81L1ezybFURrDnNW18cH",
  "key29": "585j8ySnamB5uHbATGL57cXg4e9cvpZ7kxcyNaUXsUcKWZ8MUwaBN4cR8GKaqwSr4DSKBGXuV84wsr5BZy28ad4N",
  "key30": "3BUetMD3BrbPizsfvF83zvvpGdS9kWwjVEjCJCjzYVRe5nHwoTcChMTGx1GkT9AN7yTHkC1G94Ac91m6dsaK1Kv",
  "key31": "3jhJ28jGzr8u11kzq2tSuwjTWTY3gMHf8e1GhRkco75PZtB8uRFL1vxSCtvRisqcyB96kThSmWULYfkeRFVBDZ8Q",
  "key32": "3jWwt18jVxNW44qobmqAzbzs7QfDADxooRYYGeUTNZvoVm23c96aT59icDWE7MyYstkNrqnyUC4Qe9GujuHnBVqa",
  "key33": "4sQwVtkCUBYCadthp1LC5bKSvFud95eQj18ByMMsFW3DVSFbj8JA7g8TLv8FhrP2YneFiKpxPb3ifac7uq3kaCPf",
  "key34": "59THzaQ42mGRHk9GuRfSobXULEYHmnK5z19KbKuMR4iMr3sfecJ9YuhrVKhcKwcmdtwWcSL58yK5cFLtR7pBfbB2",
  "key35": "2oPyn9E6tcQQstEfW6KN3KvmDQHfKW5ZbCVrjiHJVqhXXc7Yv7ABSoDGGRi891dohPwMXPx6o2u3vjJzkXZANdTB",
  "key36": "32VSjtZQYwH6wHdSg4sptZxpgpbfWCcNDvkNAnN5qhp79rZguy9Nk82hsPVApybo9KmbQYTdU7KM6NUSRaBR5kv",
  "key37": "5eAB4f6VwxCCQ8JsHA8zSHEkGWdcUUvsy6Z45rVcY9VLHMjjfLBwp9fAfgmXVSrGp6aJjsYXTb3sd6ZWr8WrFyAT",
  "key38": "2xSnpY8Wx2c2NuZJeJ3wvDW8MAi1N4i2SrzzUTtrmWzhmDqNyA7kiwngurcQJkybKn723BsRHqXH4QuuvKF7UHij",
  "key39": "kExCA1FfdB3yo4YihqaKk92ehsymz3HXvvee9JhMcHus6VdRAvwsSJaaeYaqaSDqueHpQ2NgfwxiSSkpQENDdjn",
  "key40": "2hxUaUoGeMAkh9i9iX7H1GB5hLGF9tsmaRZmzMhaerT22AgiiZQCohDbfoKuYBZzrT2aSH2nmKeFx3PJZUX6kYgN",
  "key41": "2WQGEsRXFetJvGsy47GYkeAznj4fM5a9ipxh9QQmtxEj7PoMoBYwgP4CvEYGF3jinp6stpn7tHkYCbQ8h9q9zV1",
  "key42": "42TBHZvRVqAe7zrr52w5fByJg58pH2o3GYkG5uN2ZJqWQbmBaarcbq3P462YB21z6u3XHXh9LSz2tB6PA3wJ2ARQ",
  "key43": "DqxNL5gtNmcZCzhAPwG2pwbTwkeWVJ4NGyYEB6PScydaXbGownWMsyZag37Y3W9ZhJG1VFTpgo6RcTBRLXjmZSM",
  "key44": "fXGQ44DhNq56HPmTSCT8QNHpHSfLKWJVSGkUtVDvVCGubRYMxGjA1nzqzVdbt53iNNpfCAfg3ZSPqxoHZFPfecP",
  "key45": "24ufw9XGNUHZPCcBQDJ77Dukn9VHry8wZhde2ZprpNMuCgxpvrLfDXaGmQB1KtBH5EpXh6fuwrppmD4g39Aru5L8",
  "key46": "5eKYc6schuEKS51mHTWurHmfVg1MA2c6KtdJd72gEZrd4ooy5sA7fAAfC9tv4X85Mbw1RE7NmDKHJqaNAF5hTKv2"
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
