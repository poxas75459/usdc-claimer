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
    "3jHoAAv8voQ3HionQmMdCp7qQbBeNUsq8m5kuKX6t55GZsvmgvN8SEr8XcsNt4a32jb1EqCN7R3xYkZgag5r38jX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "456AtVhEPFTLawudzQZvJ9oFiKvBpqNNUXYe7iXaSFDoMk7kTzjPVETDqcaVU2aMTgdMqpg3jQjSTwiR3zgzCNDU",
  "key1": "2rAm1cgucAYxtGaA6PpQZGtRy7utzt11WHbr5qTd2DBRM5Gyj22S5KNgZDJMEdbGZS5r7wQdH9Gi9yMi6rwy6AQw",
  "key2": "4aKVhxuJfhb2by2keMucmAC7BdahSUzRgRj2vfFm9GA3AW1Uk1uRdB96Guhi3ipuVWahT6GYfRRFSeroVnRULe1R",
  "key3": "4yZwT9YiJ6zzSQgCymgLESkxydZYHoBfVQyLhBVWonJTnfX4VVgRwYxfxBEdanprfiW45PxtjCkb9xo492Ua33q8",
  "key4": "24TsvQsngMsCycg7F74PG77aVpMguQGKBJpReHwiLYaaofsZMHow36Xug5W679gCwcZjr2pHcsFxopiEJ7Tv6YgL",
  "key5": "4PbyN8SCf9iuBuVRcxUEboJnFKm8r43R56e8Vh1PdEWTMw1xthbjVLP3iqPjVtGoRiz5hYdoj4cRueaqNkDCfrbz",
  "key6": "5EsfZ7y1MCmLHaKVJTBSMqZVkNVm8NEiAxgJ88yMV8PtzF61rcv6KzNMPC9hXWjNW9M6VQrD3fLVowupuu6NisaY",
  "key7": "4Up61kNsoRuP6cAZYSKUGDj3dA7VSQVjmS7YUZYHdEuY4rYWVtB1i8zpz1ZcWG56q9XfDc3oMC4CinBwkTKjG28b",
  "key8": "3i2pFjP9uzqwH5AXHcmCyBJC4s2ZDA1qW5UBdRUUP46RtCK1cmEqRUDm37ZrTMgZ2pk1X1E3fwYCBnYXJsyAT2pv",
  "key9": "5YRuMHa4wMy59C45VZEyN2Da6hoARKi4xNqi1x1FgqsivcvMoMsMMT1FFfSiMqynsTbvAU6Lym8sCueMh7ZV7DXp",
  "key10": "3RevJT3LuoJYfU61MHCDt3dKX3gKsdJQNakPqjhsdWG7uEC3ko2hYGakMPfCAcWJzhp3CguAARizboeqPxtpfW51",
  "key11": "VvBnYDDc7ibFTDxJCSvVThJPw6vu8p5sJtsnYBDwAupL88Ww1EL9MnQAgog6iqgDqRXo8zc8rHJT6b1f7AwGdq9",
  "key12": "4oq2rov789K1Xu8o5cPEHaRnoEavLnND55NMB5Av3QaF9321TzwfzeW8buosNV9ZHxNmBbwrBE5Jx6gVNEuKoKjf",
  "key13": "cyMedEsk4N8UurmSmqzyBV7DoKDZfWz3KfhrvvT2F5LLv7kftKo8xXPXpWKgGJm8RaoiwNXPhPHHTf5Mm7tKTpM",
  "key14": "4gDXXvc7X4T8sjEVGT38GMx6BxysQA6TLB8VrYdjSmwGMoPCb4s746FcE4SpFH4zT8YfhUE9nciViDAJtMegBftC",
  "key15": "EF4rQ2LiFf3hFtxjvMu5bERWjioXo6XdPE2AUYWJo12FbizJ3RTh6e8SXu2CcT8N7xuNLG9SVygn69ZgjK5uc7y",
  "key16": "213Wg1VY3t9Zaut3tGZ6dmLp1tTfu1Xya8etkUo7UJ634MswaFS8h9BxkGWjisjHE9teXvat3BTQFBPFRXnZ4X5R",
  "key17": "3WxHcQcWjXJ64Vd59UzLMi1rkAnPNVQzjvfkeKuCdiimpKqPhAZeesMGz3stD83Rd4eaVpVozDCv9NqU2tBmwHj6",
  "key18": "53XY5iJeimH5onikv94KsvMamMoCQWPAEqaH9MYFwnD9LNSsSFnEqKH1yf3Nf7xhHWM2aH3Gmuaxy2L6xe6mFWCK",
  "key19": "FsHPR9r51D1z7FdQzsnc8LSoGNiY9f6X2yKmzMuJjtZ3GZaTcqb5MUq6pN5KzeUWk3MQPezfJ3ARkgyLDKQgADQ",
  "key20": "3AyoX9AtvV53omhmp9JLYBBUuUPrK1o62WS1V8883hpjHb9bkHvqfKg3gvc7sdCroVLKXSaiCTeTGapk2YJvMWds",
  "key21": "5LEDyAdvBvZtTLbeLRrG2q3F9EGRNH5zqSrBuN6LC2JrEvyQthoKKvKte4yboGQ3D7YMnjd6K9D2zCdgduk3UD8f",
  "key22": "5KFdn5zvZNR86JdKFY2tE7Bshum5qWz646cRWrGU5ycB35WtH5Z4RrSBvNyHamU8n9m5V45kvKrqWKubb56mP7kn",
  "key23": "391FTRuy5pHhiC6AVuJtsyNfptJd3wvsLbhm3KZGR1Jyzr9LfkAM2aBbSjSXi7YMfFsH14Qt5tRyfAV1Lao7jmVs",
  "key24": "3uNqL3GdoCZQaRYACffQbtn6mECPotgbhjkaifUzsr7KWFLDo1JvReSvemASn3Q4g88P7HESNfBnXxi9RrAYiBnL",
  "key25": "ADkQivBkscrJpuDD8ajR1tmYjKbEZjSx7fan9kE7bSDYGE2sUcidWkHuSqmtBcA1vFXymoqvrVzZ6irHvW5YUJt",
  "key26": "56XzPFuMhTn7BWUh89VwSXVtHTjcUgJtho24fBHokC19HxSg9SMEpS24YGHajw1dUYz5SxW5DJmBniuZLxfemLbX",
  "key27": "4GK6V5oXKt2w2wC5VwBuM3tmkgUyQ9SW9p2M7D9AonuihXmjQ1W4GG9ifFh9Fn3yUVJH265238dUk2HFQhpsEgbJ",
  "key28": "4owgBBjxf45USKdU8ZM3pmR9HrdUQboqgueEczuEJjjZ18Mhsj8sSTPwtnrABrvB1RnBoty8yJSzCqvCeKHyzdqd",
  "key29": "7FPTiALaY6zqWF84k6NxhhhbHRLbTn2Gt5tSWo6wdhdZmwdLuzzoEX9RMNofU38kM95Xy9grxm8HrXQUwXmfXtT",
  "key30": "3RsCut4VAVSK91iXDvraPtgMBqzzoqx2mbSbedCvgLSKztE1KqYRJGpYPRgCcrisZvxhzaP7Xty2giu5EEJdFrqT",
  "key31": "op8sHoZvNM567wK5w5nErURaK47R8KguUi7VGTU6pRUTptPWmxNKxWzcihfbgNYZJ52ST2TDL6poN1XdXM1xkUp",
  "key32": "56rLa7SxGZ2D8cYVYPrnTWDY8THfUBqK5kp4HtRvMmAccuPvW5V9SdPLcraBxYTjsBJ8JBe6QWUCR1JYMsCvZ1oW",
  "key33": "5c2vXXMTAJPdTnZqTHoCriCyNbExs1D4Xn2T7RpQa4vMTL7gJ3YmKEfEQLhykQWbXpRsp6oHb8AzqNDD1ibVqRgS",
  "key34": "3F4RrtYkiQdtv6jFTd2jmn3hxQeMv3ud4uuU26HyDrAqUF9GeN7FMU6sdHXXP7vz4TZEo4Dbe9dMx98egocLGgBQ",
  "key35": "2RDzo4vMMYr9ds624W6AmaK4uGS5ShzsDtZHTh23n2jjDmL1Bf5p2D7dXXQ11SafeVpRgrd5vkPSAwfu4Di7QSpd",
  "key36": "45eMtQw1mgersy4FVZdtfzWDp7s7mN7feUicco6NpoQyENraG7nbdVbhDmMV44DZ9kBv2BawXvwVsxsC1Be8D9C2",
  "key37": "3RNxCPk6825qVkR1EbH17Xb9i1yHKNPUGZDYf2NgPjz1ENNTrHHQqkjSepk18NirAZiWsDgRYSe9JFPpkHKVG3of",
  "key38": "2e8BxQvDiB5Wc9TSj5LRBVaK4DfFEbZkoRfMGDuuRwurATLyt8oEG4uRpqQ5Cw7vZ2ktVb7dXMFRbkvekwTLh37z",
  "key39": "ZCCSUZTwg9EYLsjNT4vBnxYsdrXepwwTmGEQnrE6uFhJNY7tXFE85tozYuHMnhFu2XvB1SwVVrLQa9nNgu58yuo",
  "key40": "2het37NdX9LteqSqYkNatFBhx6mcoRReU4Vsz8D8bVpuUr1XRzGFLx7KzQ1V3Sv2eFbtDYLXbyaYCz4ng88eyyjR",
  "key41": "3cRJ3zA8ScGxSFkUCSb6RytPchh1ArtfAkLE9SVqzSeh778gvzqbv6BWM9S7URDzcCriEouWDAh1ucJ892ASBarG"
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
