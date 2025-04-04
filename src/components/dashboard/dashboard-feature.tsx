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
    "4e5QqVLtEhGEgKp3BKatkvxLCTkHod3B89254r9jb4DMXaVcjeunnvGwb9TtrNqArofVk16Jc9PTiofMC4D3Ansm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZpeWdJ54ygS4fwL6stBghWU1SBQCW9m2K9bwTjarJHdG7AxUBdLfM5GndA9NYh4dwTY2yeKFrFpWcqjQX9MRvT9",
  "key1": "4od1kvCf3QUDXGasgww7phECUoCF7U2x76iF4feDFNsVpnPaiogJ3ipc1kJrN2i137bCJpC8ZjuQxvcHMrniaNXv",
  "key2": "4TvrRnwhzLhWRv2pCPv3WMrJPbbSvNbJxS424VvmJVLvE4D1e26WZbViJaDJatK7LJp8d38mHKn6a4Sv19zMWBqJ",
  "key3": "5L1ZHV9pss67cMrc8b42zBAcRYhfSDG5kDTf5A9926VwGjLacFdoGyokVFRdTVD6ZKANWYarmfg3aSFCdNK8fdRC",
  "key4": "3otLgjBhRsRXU9JRnawXhvtP5V178mRwDiV5JPNugBV6S5h4cWVsbm8jHwRQgNitptMHgNsTLhVm5u92BFxUKanF",
  "key5": "3q8V99AxyqekDdv2rMWAX1qe685XbcAYVh5z1AmEd24QixrmhuxEUHHzskYwrKZJ9sDwwcD38rVyGa3YxSEw6YzH",
  "key6": "2kyAq2hP8PdYn7LA14j4HbQzN81M7heW2eAKShxy4HXsiHcu5NmtFmc1nvn75Zzs9wZs3DtssxxzFMVqFhPAbs4e",
  "key7": "JETcDeiYgXSfmV9PmAherWtVjB9LAf2WeyJXjj1AnH3tZjbEBfURDpJyN2jbMe7d7TpcZKo2n54MR6oYTsieDvS",
  "key8": "MwUMs2pcHK48iAW3U5AM1iCxHHCwvmmGFFUBAqNnJ6CJkhmCkiP8UNJuB9SRK1qWX4H2VHi13eNNuoweJFQ2Uv3",
  "key9": "4CDjsViqxa1vuov1Z1dYrUDHDmKL3Emf6fN3nBaL5rCFGvEvY7HT1wf5kEWYbxoAsbMYfbqiUMK2kS3RFXMnsF1B",
  "key10": "LRrqEttCAzDmTh2JQ5weaGGXTvLhuTRSJZUH7Fhu4ZJMkE7VTZ8hVJkcrQuQduV5TuAJP6M1nffcNge2EWz68x7",
  "key11": "4Q9TeNNkv1o1x5AQyzTuTAD57zo2eM44xEjFSVgSycMpvyw4eUdAx8ycFm2Lo6aedLPUNqV3mawq3b3hmRDijcJ4",
  "key12": "3uWynChGk9bgdFmCSHxinSNFZ29gGFPYBDiHX1tunNyRryUdkN4iXgAPKqF7Jek8JqQyGEXnj9REQXNAES3A5QBR",
  "key13": "2SxAWiwJJffutT88tcAo7bnq9X1rnzXHksQn2oXR239EwEe1m5pUkX9mgeG83qWTRXNuWi4GSDJtap8Qj6uuhkEH",
  "key14": "4BrBeeVkdADZWUJgE6GzxnpUjYt9bhcsS9PS2DarEDh5PUY6LPbTtkcHC7kTBZx14nJAk5WmpNnuD6iXoFxhx4Us",
  "key15": "zZ2LUYhzXVtX2n79kX46SPmGWyhEaeSNjyKqK3vpg7SzbKEFMKSDZxp5pEJvwQwdgEDQQtjzrqNeQCBMFBtc2ys",
  "key16": "2ovAeFdpjCNjdxz2fh6vGK5bgC5PzsJxx6ocwgTXJMum2dbQL6FyKbXLVH7dj3TZJF5394RsRT6ka1qJpduvSCfp",
  "key17": "wYFmtmdaeZGh7fBSspZx76hdxMaYFNgvPF51829TiS4nagr1afXy9htkva2YgLyHTPyNoFiBFGR84x1Sbe3kn2u",
  "key18": "48HD7V4b2inH523Jmfcmt8cnEF97i3iKfJE6CKvn5RHwn4vh2pBWtrCYnBiKx38n65bCK4A6HD8M8MXbtGnCDDja",
  "key19": "5cCZ8BEBBNchbFDRsA3PYMtNKFrTXzJRUzW3nhMQ8oTUSAutwQuRPoHCcojGnz56JU1qh8qcuNExzvTXVWVcT3A1",
  "key20": "5X11MP6WmbHDakWJJQ5PzTmnfe8K9aZDfFfJfoPZrCk1uytLbHzszgN16G6YLDyngHeLynjwZk6cvKJZ5ihA4s1y",
  "key21": "3HyCdZVtKtej5TKeJVWJkQw28T5hg621oUeG1H1SFUzEjuHKYNpLsYXnzqfhwbnKZX428RQ5At7gBRxpiTABCRpY",
  "key22": "5weA8gTgnyTGFD2DZ6CQoUCcVdYotBoePTFybehq2nW99KzDWSGMWkvAHStGufa5xJS5F1uz7qj68Wjmq3Uoyydy",
  "key23": "3CW9HdkWuxLpqjYS6qMe37N8EwcrU1GftS1KDys2tZidWZ4SPpU7syGZbg5U3h7N4hMwTGgLStbinS77k5sgAT25",
  "key24": "3SVTZWeqxYp2j22R5oVtYWNHWwna7pzi6qpFiH2PEqg5ewwJfnpfLU7LNoz9w4E2c5f3uxKqkCrJDoiEE6ZMvTZL",
  "key25": "2mVxykoWkq2oBKYe2BFPfGSGAUueT9jd6txNV4NY7CA4qWg2hCEDHuxZuiJAwKQrXhMWyf1eNqv5EDdhA4L8EBXn",
  "key26": "2BJ1w1i1x5GsBLVQy2ibYtZPsj989PMCzsZXMfkH4kT8WbDnXKxCr7JmdcRByyhgHBn1XXPKHnt9k1BJSpjEoPEK",
  "key27": "5d8ab5ZorR5xXTgbBbfvMRFU2ky1R4pfvCzLjpnPyqCm82naQqeHVxE3j73wvRHH48B5hi9GAYf3eJwwFikYs5FW",
  "key28": "uS6ReJ4tEbAhSmZMZApSGnWN4RSUMuandLkUhzTsXZEQN7qiEn12GmrrjCjNGGqNVrACdks2dYoWkQe8974gkae",
  "key29": "tCpJNxWLcGRwCt6CfMYkhNpxPYXYiPytiRQbGcxvkpAM7xqf7Dogm4gPfrFqJUWb42YAYmjtZhUhb6Lz8pK2qst",
  "key30": "5MVnViFvRKcHNRpdYtEdjFkmNZAxCvswk9ERD9XJ3uHJeRC7NXyx6dAEo1iwA5bqPY3L6aNnFspBeAWmhiboNRVr",
  "key31": "3idnnbixMUcEUqYMKP881GuV8mjzhyKaFzz8sQpsyfBPkc9Tv1yxtn9MQa4g8uCHfZw5jZNNMFW6UNmoo1qo4Vg",
  "key32": "Z1vmc9DggTUsiPDrcM3KRmLSFx4aU7pu9dfwuf1kn8XvwKChzYKGYnziwY7SgkHPtCFGm3hcz75k51W4o1WqVGv",
  "key33": "5CzQgBtwu14hbGSVBJCiZ3YxiQrgnk3rnNgRFUhXiVKv94diYAYT7zezwRNgFipFR1Xdx2KJEo7QkoAK5W9gCwHn",
  "key34": "471dB2qmr4veahG8DawecmRmjgAq46naCphspmDRTCLY6m5PC81EnvmgvGaspRHuG6mNvKxzSdUUto87UCvwxsSX",
  "key35": "4BxHtJfmTUjB3oP4ef8BiH3Srb7FKtmu4GQKpZjAawM3hePox4SeJ3J5iJdjEaKwVs2ud8fPo4erXL9jnxXijFJp",
  "key36": "5Da51k8eMUvuLxDf29jBLDtN7UL9dBRrNnaTvJy6KF5nAavqChZ1J4LmZNPw3ghLkMTZURpjZFMBFjiNiAdeVZ38",
  "key37": "5Fap8JtwHXEAZxeDtk8ZHEy9bM8PiF8pMDvXJs1UBt3tTYoj6FDtzeyLky5a9aVcvNvUBDMnyTwBHPqfyhsaPfrp",
  "key38": "4nPaBVoUWS935q84eUPEnS7EFQQTV5eShwT7VJxWqGfhzbBKKfs3f5e7vqaeVhWfZZn8F2soEMKYspsgrV3tW6n4",
  "key39": "48DMWKETg2Gj4eyUsDsYvBGSh5VxLQSs9au5SjmBTE34mJj3ZWwF2y3b5Xe9r5GuQpfxKgigzLyodFd3PAGw94ZX"
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
