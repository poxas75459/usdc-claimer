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
    "2YnUwxCo34uRVGGH7qEPbQHs99dRzAkQbTkaLZwcHkSWG39DL5uzqmAhNpLjWWYpoURcudKtRf4uZxRZfshdDLnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kdkyeRibXpmjxwPonFGLxXqCb8roxKfM6ZdbEGk5npfpkTNmyJ83eDYvAMW1GCT2pVEcUZ2WnA28zYZoJ3UNTMM",
  "key1": "2m92gEQcJy4LFbUNkn7U6VqqtkCSTbiWgECvnEnhCakQAewHG3ow2MUHK3RNipvqMzrd5fKVmBAaAgA7NhrsPSn6",
  "key2": "64afJgceFW86ngf2YxPBRr2d9BqeX8p7uNerScQAgeDycchLzZfr9BJ4SH6xYtaxsJy8xGUFpWdNiEdZ8tyicYF1",
  "key3": "3jV3PDLpWdA2Gu94QrbfMfMcmyfZV6xL7vLmmJajT8MMwNUGFzyMeXeU7BAFnuJbE6K99ihHmSJvZCosdPoDQsNz",
  "key4": "2udm854Mfrbw6Qk2pv8U1sXhBsUfu14YC4yUTyw8wtKyy1u7scQ58yxL7pZn8F2hgRhEYueZ5ERh9snVhrvyMktY",
  "key5": "pesAaJRZFJeKuaS5CGpERv6cu5pRzCzCPUMGTbgV3FKyWue9rtpPyBcWokZuzXJuhyLJVTL773dTtykyhaMRMF1",
  "key6": "3rAPJZvHp1uhXwqLMVk9fUmTBrPUv5dMwz2R6CKfmSM1ncHFAki1pxHBveoD22hH4mZ4HoX4xStaKWbhcjYnLPGp",
  "key7": "3PJz9646xiVC9AAu8GngSHmGtkqv3LHoKzGq5xExpRrYvZHXbz3esDWWKKQ8sFC64eML4XDGzR8TsDyuEqUNeKps",
  "key8": "4GDSBZiT3hk4sgLghqKgrTX2NoG7XXxThMsskUdYquSRYY8ZggJKdM2b2oro4avqayNLPeYtzvyZZghw7oCMUEf6",
  "key9": "39HtqMyaSz5DHBKCq1Y4GZj1GV5cqF4HFo2J9gxCZrboCC6YAPAFbQB9wq1CsK3ZoNMHFV13bpRF1WbfgL8m3KuB",
  "key10": "4rr7T4aY5WiDpQTRuLkdEkutxDtbGLWrUhuRHbzSDMpidJyJUb7HVwVx9g6PforanAA6STPPG5AyX3zwh3482acZ",
  "key11": "ZxKTdWw2TyGpWCfWLSLs3DME4az8BKYtk4PjneYehHcNU73KxjkpvtN4nuyy9TtJ25cnkYVYNQk9byM2uhFRc2V",
  "key12": "5GqaqjE6DpidkiCkghkZj92KagHe1YJWQrULR1JkCFkscMuuF2NkbvLvatBPsusYe6mUDZLkoCBWzJ1AT8V7oQje",
  "key13": "5KFuargbKss5v8qwKk5vankuNTvYsezAPCJLWNhHQhLGonjWUKTzE5MYZNQGv5s4TEJ5dK8vNCnJyLZPoFqUnWQM",
  "key14": "2Yt5CxWn4FQn1Y8sbPReP4a8khD52dMCyrqCzjZDtwcZahc3xuTjiiF7zUgidocRfddnb61v32FNJRTLtqGZxKCT",
  "key15": "MP68rJBaU2pp6yhKAfUQTWZWbbUorhZ9QdvrpppjEHanxN1PxzpY91stKNqVzT6QJxLjbWjZxrfBsB5j1pEqGqr",
  "key16": "4o3rkn8X4CErStDgEvN8bRwy8CpWPxtvNF87X93fopDYswqHezRbEKwnNqnrv1FCLMXW592gW26vAGsVncDMD7sw",
  "key17": "SQoozNGEEipCn4tEWWofXiUKy7Pi14hRfMXUZ4zraiziazZqPfTrVayM2kYxSHagt4UAo1oh7hg7BE3rfeTNKMh",
  "key18": "4X3SDtBAHBD4r8EkTUm8ReHqEBakZTdU18chnqVuUy8uvtDKoja13vKiPXzP3kw2NYj2K63NaUFczPUwUHg4zz4Q",
  "key19": "5FsgkSVTvCpGhqwNsKmjEx8cBJkMT9URbVreMynxx4gUSF7Z7ae9Q6spLEjUmczuxytMhNiGGQmTv7Gk1WgQ4DbS",
  "key20": "2oVK3nY2Q5PvMom8X8CMDZyZLiRwPiN8ACWHEuNaiYRruWooVArmRC3coQcgbJj6CMtLRcCNy8ZtR8kxgMfmvVLm",
  "key21": "4Tb6GxrskceeAp1ZnonxgRS7NYRgYJ7REHTG6SJDTts1gxVjiobPX5R1PDNpxM28x9E17AgrqCaGuvr8PLfTGm2j",
  "key22": "5f1MXKbYT8hbngMjCYV9Q4cPR2U6ZieWH5rBUaxS8MDBJAvJXyYpuLNKiAcdocY9MUMEGHrx1GDWkMuaoa4jF511",
  "key23": "4Sar1ECTvNd5Fr2jnfHSfdJ1aKU1fktjEg5Dctn3eQauJhW1KeD8toWjiSsf6BxeRHVh2xs4gKzVn8uqMJsoDViR",
  "key24": "4MSH1FuYEJxgSoJZm1FC18xrDhSm9RhndtHPYHGFi5qHJaXE68yEFDMNsCFcg6Ma6fevad59AY9UxiLgY55YTKn6",
  "key25": "Y7N7ZmTv6cfLKXEEoJMnYpy28nUjwdxc1TUWbHshA4csRHQum544Ju2S9xniY2eFkUwgWueTTexGSGxviTDThJB",
  "key26": "5TfYzCZTJdxh9wDJRDXZBMi1vXWaEy6V61pDeLFWnqeLu4pPEQNrJz9AxxaHCv7bphWDzWVMYH7BGVBGY7TAkhJq",
  "key27": "4mNuZDh8g1N1ePJDgo35T9asvwdGXhvPewpGGCK2vAzywNr72fLWXRMh71X4wJXzRRqgUvBZTWZac2USNn5m2vDd",
  "key28": "52DRJ9xTxdsaLL5QQtoiuGUVeq3gdzTSN1XpvrCF44oQHd7xw7ZPoRR9HXKCqfy77D3zDiUCRhVG1epsMZsU1tdZ",
  "key29": "KjryEyeUiKizMuZjUBcanFpCLUnUCQE212R13qBZjf1xox1dvTfzfYU5C2KSfW8gwi7FM7TjGB3U5T1USRqzPHG",
  "key30": "WqCUciy8XFBpScyk4rxs5Sic3v6s7rmh34RSBVA4nTTCC1FBU3GifZMdDaDE74vG6JTVjzbzjHrbyJhRJLSnG35",
  "key31": "4WWA6G8RjHRuJRS4f8yZCD6mRBdqULjinCFAvpaNwvzsk8GGhVyF4smYNhACW4rLZaQGAx82RJuNcPeZKrXSjFDd",
  "key32": "oDpb9p2x8Q4BLAdLZDPHAVWPr7ChtapsqifumyjXjUNJ38PvPy5Wccx7a8cKvE6kitejUT2BKGjPurf7HViAEHq",
  "key33": "3ceCnDYLUowGngQ337h8WhDy4EmSLH3aMQQAhbTyf8XxgqftfCXCvoy1vkEN1zTNLE9sFrmyqH88FHz4sYLUPqux",
  "key34": "3qvCTfvfcY7JHBQaiG13xEUDE6z9yBWcPk4neRg5sy9GU8KNYy3wdJ7e6zszhhLpRtaUQAEjg4BH36ysQ9BwwWzQ",
  "key35": "5ebjMvothMVQXr4ksRYB4cY63w9rrUbXiPttvdTGe8coCxjqJwEAnwu98BN5oykEwjXsJrnaCNZcecAucLsdXVa5",
  "key36": "5QLJQxqkaMo222o7bnX8FuT5Rvjuzjqw7YzyKn84QHudsZ7sZMsxRNtXm2zZA59rSd9hkH8A5KMAt9ukUi3evLgr",
  "key37": "5Kn3HBQg8giMGBrGPRXwM2DWZJXBJK8hgGuGwNhm6sJaqXTYGic7fw4aaWbnDj6mCgfFTBDFmgspF9nYrzpc4rro",
  "key38": "2yP6gpXrScaMh1e3cJg5D6So8NFyxzzTmgWjkTRv9jMb1aNWnyGrsrLzinoB4FYCvepicXkbCeZoUqPgYZsd6YRn",
  "key39": "3Usk7SeqVN3TdK265psp3W6fWqxCt2k824CEqDdEGtLu6RvWNGSmgQWikKyTkS3bEnVdUmB3VDujW5sEjHUwj1Qi",
  "key40": "4AYmSv87xkTcpEpHKjR5cxoFcQ1er4N1qsXgvE6Gf7Rx3ewk8TVL9EsPwzBw532hdG6WVcW8MJsg6eQxfBH8NLD3",
  "key41": "4eDRoD4MNoPMXoyfC9MxAQbLsMGcGTwzhewyYbxhEFGVfE2XstMeGEA7iEmSaEvPWmdArLJh1qDQZsGGfkrfD26v",
  "key42": "5KdypiE1sPMUTtQp7UNYfkrGQHLBBYxDcYyj5EAFHUsfc8KbtrqkdxDwqwRZfUafkGKLd4c9f7rZgkSyq9QUqVNH",
  "key43": "5UmNjEcqrTMeEMmrC1XcxBNuE7Vc7vxN8bFf7WSYwTsHsnFXUiaXYEbsjraAZXNXNqcFzzkfKvvsuJMiRU1vTakT",
  "key44": "2au2sDna4dx4g1ZhDDvmqeRsnEX15u7tKmPE2ym8Aj4PKHuNy7bZ3FzoVt6bA9GvNeAWJp2hEoSa8GsiumhqASiB",
  "key45": "F2c3JCRCJxyigKNRZgv8YMbLSYX5v11zyaMkKxF1M4mDjUNqAHx2xgpQSegJoJ9Lkp4Lkarv5zCESpt812on3Ew",
  "key46": "3kNpXNS2FFL7rP4LDyfJ8s4sSNBFUDuiBc1fVQNQXVrnC417Z71ZYiima4gWAxDY7eRwiTKTXBqFwA4rpWKTUWhK"
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
