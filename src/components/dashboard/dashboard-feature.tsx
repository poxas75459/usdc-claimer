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
    "552GW28zaz2P9eSWPFjaxDpxYCgBbWASC9NZ4Y6AWWb3bYCykpJBnBkBKaGjPKrhL8LciTWCuHL2muifNW1kGaBu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34Pg33Wz6U7xbfMJUT1c5qEa1bmGvbUioNnocf32g7pfRPqyMGAPTmr2WkeZVhEHJJycMyw2GvYmnzFVMbAwaMmm",
  "key1": "4soSEfvrPkWmifk6z9JXraZbiH4iHNzcEqg28S4TYfkjFHWJppoEV4gNQzzo9AvXmpiDNHjKYtH6b6tyNZwuRFuJ",
  "key2": "67AUexAphnkrNHz2bwNXozPem84b9sT7oF8VhgfyUAmbXGY6cSdE2Q9kfLmqauPzEsbgBAr7vgpbHtJ3CaGWBGmf",
  "key3": "3KYSQ1L9PfVbJcEM8sEgjzWhD4AEXdezoLCnFdEpzPFLMqFbUfLPoVqH6HJRpcAJC21GdaQCai2s2ntKDUy9toiG",
  "key4": "vYqtFSirv1tU7Dy3Cb2VFzJ95vw2eSeKaANJRW8qx4qg9SM1yCYSEmdDrdCkptMoo5zfvuRAsByCHduMyA7h3iK",
  "key5": "5rNE4msUZFd8tt3gaTcCub5Cwtn6wfScf2GQtcJhvD61MGw9YtoUoHouUp69ETFNvjknN1vinycFbQeR6dXn3B63",
  "key6": "59gG2oo9a4nCDyMebmYsdPYGaGcCshnKJDq3VcKJVkaovuBj9YfRFp3N1NDEk4zH3obhXjEpyPwEgrNyMZRpKKPY",
  "key7": "65as3VBDTXJDfDwUJhhbhRG1bFKroxY5aWaByXiwxNHyf4FJ8XGKYiN1BGPFm6tJzPzwf7MPWZfNCsT9i1ZhRYDT",
  "key8": "4w4GSTNU9SA9L29ViVF6SVkTghSVn8As8oyfg64fsqrXRbrVfmAyBZ7xSRhC98tDz9EeYvcWrWtv9gNGtUjVoXj8",
  "key9": "HcyhVozqSqq777jo8Bj2XePK6ttmvz6XUd36uJFyumCUcuXG3CDGDorztsJaeXdJNQgHpqrBhoKaRDXXhCmQXoN",
  "key10": "NK1Zsp2uojKnVYftV8DA8Xo3et2JWfmW7PhcLG9AC5VZZ9sKErcVmfTm2cte8Fo6Zyk37oo5D9y3u3e6HJoMFUk",
  "key11": "pj1y5923w2RVnaMC9jdA1tteer5W4SLjq2ErxLb4RiVZjVn3sprq23P9UnC96BvquzRUVjV8Pj7qJDPNqxtbacU",
  "key12": "3p1aNZsV9BGPf8skqF22634ZL3K3REBYd4XYy93eN4DyR8sbc8ntkJSftXuyW93bc2a96R79dTywrNcTPEERYeZ2",
  "key13": "4knP4c1zTGF8SHnpGh5BrArzuQBZueeJTncbonzGbaE6xcEefBh2XHrrrJKd99pjbnxbEQwWjNsAeVxJ6DviwNZk",
  "key14": "3JXjWVXueKdbZuZV76Lv9D8MQuDCHrjQJv7N93LCmMYuKDBbA4nZYZrxDUmp1koEeDqBWd2fMykz4hHM1Ag6eENB",
  "key15": "26UQiKSZtZE84hLV6gHFpAA7PvUJ4KmGVtkcacsXoZTya99StJ3qNdiBcajrykf1BtvmvRLV2BgjugxzoG1YTbDD",
  "key16": "66kQgGZDcR7bJcaozC73amdXjCFnLZjGrPWESzedmFJq16PEseVmysJXUQTvZtztduoRX2jt2RQn1e4TbX66cMV4",
  "key17": "4ypHSSgRVMD82ZF94Cz7vbF74Z9U5dQtxBoX8EXT5VS9GQwbw7rPPtV7Hw3GC7omRY6S4FsLh3H4bLAvfH5aeoh8",
  "key18": "542Hk722Z9nu3oMLLehwL8EqiwgenRjDspoPYQWSayDFJ4dJ6GSzeJhb1sxAsgD9EnEarJos8G3rmJe8wJBBXZoy",
  "key19": "4BwzCzrbg1cUWFHXLnK9mEmQYRuEQdmMAyeusEtjerLYn56V7ev3UHXbYt9wTjQKMf8nWYSvJZsnobDX2wWJuBmr",
  "key20": "2PzUruUw2Kwqo9X32nTjDJGSLfTGrcggsMY3wVtympDaETTRrSKDoapJgYaUH8D3fwfy3g3Enc7HwrKWFQ8nHD4n",
  "key21": "4myU4365MbGqAFb2uGEoZrRGQAPLeBUDsrbLM5DYd5gAhimzsrhG9mGrUT5a3ZZXewCud6Nvt1VsXZZsnyxRt6DU",
  "key22": "3fHLqhKno1R7jWEH48sDekxUKXjmmfjCiDh7LK2tGLMQpXjdxMghDYw9UwxCT2tqhMivr7p2oBjywdRrDSBRJS95",
  "key23": "3ZciAXkhSKj4ktysQczZUQ6gk6Mg5YkEk4fnTE1hLuhGA7madauWY2cktyuR8YtADNPJSoaPPCMXWTssr7QwkagS",
  "key24": "5zsH36vzYFqruxVJEG9EvrTrqWK2sL4Bi4pyWtkcqDBSmy14A3LPWRNLF3k4YG2SK4mDXsk6cLQWtYWG5VjWxbh8",
  "key25": "2daJGtm5zxbPAr2ukoQ6oWHQ2ThLahwngvuyDzjfnxc9feKegHedf7vGF1oU9CZ5No7ZU3ZxKP3zfKkFbtPAZuWj",
  "key26": "44hk3QYPF3KqbJfiwFYr6KPgUxevnftqtv7UwrtdtLAa3E8MyqNFj9qzEfBxJNVLxbwCgQ3VJr71DKeAY7E6xkUv",
  "key27": "323j1GoTigz1sy9tadVsmgD3U9V6qabgPxXrJS3qjXLsxjxg5cenJdGXHQn5usA74NcNvr5nVBufh1dTQqpeSjHm",
  "key28": "95pTePH8YnMLPpFaZedC95MCo7a58kjWpW13rYaJ2LTdQYnLYv37J9vuxjQNamy3m67YU1P8PSGABqtpZmLoztE",
  "key29": "eBctD5YWpxZaGrU3dzjXNUJFBQViQJJ7DDyH4WfXytW2qUzNgME3stzjMPbW2noEP6o739qv3tcxE9JNQSaG5HP",
  "key30": "5pR7q6MHGbJCX7TK23cfaNW4PGEBMp4cdXLrEbVgR2yDviNU5aj7kDq2vhZjucwjW8rJkWHRwQNwHuP824idaFqp",
  "key31": "26YYUJQomtmxd2TA7he5JvskjPFXABCGTmQceuKLbBsFkhfdL2KtRJVo4ckxMbjkdgMvsgAmfJ4SoJZDQEw6PeWL",
  "key32": "3h2omAXaXd7H3c2y3ytVnxzJq3BrKtjuW54fVWh5P6SR3TtAbP8WNxnVBdHcQXxkoCezTSicTQks76XtGktrisMk",
  "key33": "iAUmVjrY4cAegDBihtyTL8ywhubDUUkLGoPkoDqCMxACgmUHyrxq7ZmSL5j7dDPmSUt1ShFHqLbEgqa8X4sK82A",
  "key34": "5xDuJMXT8afhtjR9gimiNCbJZpn5an89J5FJXKVKvx1trkLzxjSyc3hJqwrjM9wbuMo1Bbes1J7VsuWfimCLtiuB",
  "key35": "5xQ7PExZA8qFZKBbna3eK2cAFyJwot5SRVRXmyoSwBG6GbsjU2RyZc4HxdV5sXgc6MD57nP8qjMueKDNtn8MJ9YC",
  "key36": "4XhYAi4mUnko9TnMGQzQ5hjqNgrM5BRTbhnaE4F8T1mqmJSEBYRcsFrPcRkcSJcfkkpwCAD5ZkMrqmb3oahjGuWX",
  "key37": "5WaWfexUFBiTaKteXht4aaDpZiUyVJhDyDrSoCUhW8BRfajBrXsZ2m7MP7hYxhbt5nPzjmtNAns7RLHTAnZbHd4i",
  "key38": "4J27A3LEsHzXyYBPeEVsoVxr57TGGS9vc4tBMySD33YeGDrUWi7MWYcGrm35W7FszvHxhhD2t4SMLCwaYrRLS1Js"
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
