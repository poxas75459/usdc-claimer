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
    "27QJtcuQQLwtzBbKL4AK9YZYtLsjqtMYVXQ85g5SdKpiNBCd9yg96BPieY7EhiGUYxohxfkDQGjQxnG1s2Xh5hsy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MrtCLhpaoN2CgaoCCdjXmLksuEUsj1zxtK1KwNpUTBkyM8tXAKMpdzevboSmygCfEynWzoVRMyhhrXSBYgk9jnP",
  "key1": "5sfGiw7cUdywLB9XNDCfbcnXNrGnXQYyu2eYaJqLxYSqqLmsgqdVQvDYy5MxjfSugVkEeJf2X5r54yWEaRndQXsu",
  "key2": "5r22iHgT9y8zcARg49e69nUmNpjwmsmcQwUUue3jbCtiLQkJ3bvPoPSDS5MXFP5v9KMuLeWguR6Lpz8CpzeSp2cA",
  "key3": "3Qik3LuQzetovgddRTRYecr6SkUKrChtmv1G1Mw1xCLh5zd4LNQXsqsnsf6yWtkNK67SroBScw98Au1GMgpb6veB",
  "key4": "2sZseyhJ7Y9fg76ygidrmtM75fBpqVjwDT8bGAYngCDi5c3PU45xt7dVKcAbc6qpCuAiWZG2Zk3h9QmaWDGgAG5N",
  "key5": "3bAivZpjKbxTsc7SGsBu36MyBtVxoJEYybzLCU9KoUHCFdMcQDmse13jNkpg8DQPkDtvRHjXgnJTBrZnCHNctduY",
  "key6": "3u8KjfZmAJUdRXvibCJrVMdgjJWN1HCVruPQqEBLrzx25r7bvW15DwicXGPh8bxruSA5RqbRLW2rMY9DhgZ2fvyr",
  "key7": "5LwhVJc4swL6tdxQmkmG74ZNU8BkUwzVbCZ9FcFjEKQUhZwp74PdASHmmJ6nvkGGsrWLuPqmS5HUzw72p971Z9Zv",
  "key8": "4oMfqoeoAstuMdYA4rBjVSzGzFP4jMwzRYaeXRuipyfnmw9Lvppqo8P9b2BaVNe3HsC6rTvaoLBuZVwtBjkudx6F",
  "key9": "nWFD8AxQGjyQ3fE4byKtZeCut8w2xbvCYJ2yUY1rfMU8FQvbVv5oXo33QMoWqi8yPVsSvVPB1ydRYrGzVymZzEP",
  "key10": "2dKTRKuX7Ez4EukF4rFq5hAUU7Tk7sGkE3Laz5MFRDszqNhmu9kzVsKixFBumyJZjrheJpdsdmVXKRngMLXeEEHh",
  "key11": "4UsqMJMAufceao7aGK257kQYGN7NaF3PyvdBjjB7pxLDGoEPA49VquJFKn4yPGsUrfXRWgpaMLZweJ3Hz2sWBkMJ",
  "key12": "5Tf8znD8kiJM1Z9JS2EzqkUyrDzcUcnPHzJ2DgNYPkxaawH5yX9JWfui6SzKamvMUodnjUcXCE7QDRw7dRtSQ9p1",
  "key13": "3WEb9WLNCWuhG9bPzW1xYpEWG99xBEztxaRcxF7LngbkKaWmqCQKpM4aT8bNhC8YFeqauLsGUiDfoyguKALfUCjr",
  "key14": "5w47yftTZ15vAD7aVN8by3zVNpJH1HVNyFAGPsSFC43EDQt1Nn3rSRQBcwk7zBgGpSjonFVm4uK836jU1zu5ge34",
  "key15": "t41m8StcLUfK4eaCfuQmMK9XQgjAu7XoYBUmsKxtWpDCyBfckEcmG6bWXisUXKqamg27oKUS9fHMUwAJEY337rk",
  "key16": "3rBsmfTsVFcYRAyTy4HCTpjWZ4neVN9TY1wHQ3ovZhZBP1QNtyEmzC8yXQ1ssTT8Z6CTy31CaKFgsf3f1xf4sjAA",
  "key17": "36ph5xdWZnzegWKmosm4jdud2ViiEfpfjBq1wR1AN3E3eTjYDJRoptUNaTGLnLU9ixDc5smnpDSoii195KfQh5Zk",
  "key18": "4h1rAv4q8dKwaihc1KwoiuZ27Et4LyMgogoDA1Y5px9ApNjm7fTa93aMCTsQBkwGYjWDkg7tqNaaCXE1mEp7Cr12",
  "key19": "3RTqB4xfU4Z2xJhkQ9PCXodDMm2VTBHk6JPr9kDNNTgc1ftYE8s3DzhbDDzUvuvWBEZM4ah5S5zxkkuCt68bRfLh",
  "key20": "4xXSJBhZ2jxcegfmcCRrkBSeSmNaJXVyS7ZfUFWr6BeMS45uLC3Zxtb1F9QZQ3o67KfxgxffAJ6ZrK8uzx9yAMuN",
  "key21": "3gEx4Ay3UyWNSa9tB85yxWcHzDDqexo8WKKpLrN71rhPmN2YGvKCQNS9ucfHZxUChGe17XatWp6waT52BRAH79Q6",
  "key22": "3z8dDe5DJdZiyNUphXuK54MVzDiAZcuqmhnYPwBmAm5Gtbtfy3X8aBadbbCtUbj2Z87PKRZudm6SVD7b1uBTZ6r7",
  "key23": "N7fmdF8Fi2iWWdT8ErkT8aFn2ck5o7JF6iwPGsyz3Y6YUEFXLmrR5Z8zn7Kt1RdCP3KKx5E69pfpywQeF4gcGYe",
  "key24": "8ynaSiWzvLoe6jdGoNTHq82hUiJaZaq2vxCzi5pEAM8ddaQ5E5F8ovq5hVRABFzhhqnmktZHBtE8gJQYb6DPhLW",
  "key25": "3QqBr67sNaG3iPBoHpgZUq8BPchREdCcxcsgkMPWyc6LCckVj75QBYadiKVUjXsbeBPrh4dm5a3qEDajfAMzJnvr",
  "key26": "55ZqcwrBKPjEjjdvuyxbaieXiF2AgUof21fpZusA3ZetGt8y9ppK8iAvqPWJ41v2YdnUjXCTibeRTXLGXZPF6Z4S"
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
