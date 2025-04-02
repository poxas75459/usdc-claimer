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
    "3EHwdCV1qJycmxGUYa6N6So51Tgp8GpzXjBjRpp3pX92Kcd1Vrb3qCzEBCsEoR7bhKq7t8wxfwyJJLKfqJ2Wkkh8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eGFj6FJjZKRmzQNr4e2wFuVfUGw4jUH3hdyMvjJBcjEStPwbAz8SFu4J53sqrmobKySiJcHVDj7EwiSwTzXKy2W",
  "key1": "vQhkoPG13UV8wdFmvG87XAoMjGX5pGWqwu9wnhw9K6JdfarCsGyyshq2ZSo42LGFgFTKQYnvJ1k6fL4YvArFzrM",
  "key2": "352MVnw8TkQUUFbmAa5hiHfzoLkuDqyML5UZSKuZqoJzUdzsuBtPiVWpCFfxvBNAzd52queoGYjNLL9sgL8K3mL",
  "key3": "2c5er2srjEwejPC6Q3MMwiiriiVheevrSLDq9zsDPsBgAxiXRJZrxUvgKmrGaaQnzdULN2Jm5ct2vM3MAdC9vCad",
  "key4": "6Dhj5JL7C3Hzo3NYV7HCXZeqDUCiUBJ1a2jnDnsgKaxy7JQ1juboyJ2Ce7n5oQiko22X8PVTaPkML2oNvifXdqh",
  "key5": "2WzXwwGxQBUFZWWZ5bxzPrrLfm4CeLbs4t3SySrN7eAcU3LMw6Sw5w834onhK2AJeWFkMAjTGx2NPXtALoS1kmjm",
  "key6": "5Ycq81KpTYYjKvPHsDkEGL6UcLGMBtm9bZi1KcUN9XEWbhtWZRBwacVCKSeFcY3o42vx8Hy9udnr8KZxCaqiKqd3",
  "key7": "3pbezJxi3yafwQhtLXEk8ZiRJ8NJDSVacedhMtDwAdg2Vyn32r9sqSPRRQUJE7UqmUrwpQzE5jQbMjZcWEsnoj9N",
  "key8": "4eCow82zNXF2bcqG13TeFzRBuj3V4761DMY5aZwxZH4enqi7HNaMda1Jdp1xiy3YaCSs7aLJdMB9kaPYYCP25sAs",
  "key9": "3ASxjmHW4aivrSjnSY2nj3spFzLnVzUAdmS8HTHrKxF6ohA5hKNupHMVqi5vw6ygzdbu6gxZuX6AF2UhKczwFFJ4",
  "key10": "4BKacnnYRfx8yUvrLqeGPNtCpvrPrrG8JchTZ6CadmdfNQmuJTmLQpyPqhGHYSXkdh3Szm6fxEdVQ2erWPnwrjg4",
  "key11": "4fm88odCa77s9FJf53iheqMVXWMprzjXsNi7YemVVaHTqVJaZnt2Ee5XCn49HihTWN1gipum8YzQW9crU25xLFeD",
  "key12": "311oyYG8dfP6Djzc7eF2HZj2mPVAGnbfFupGVedYH8TgE1nqWP89PpRAx7qkJFfWZxmNYq3QM9abtUDwDaPYBsmP",
  "key13": "3C49H6bhh17HKH7fMd6qZcJqa2qU9GRHo6YF8UfpgoTdzXu9zxnpAUdMgofk2JmDRWWsgaNyK5cHbZM8JjzeY3VR",
  "key14": "4T75SywePm9ec5sktwtqCaiCPZSGapTmrcQPv978cwmg2h4FHDDVDXQmYvVkofGtbMc9aWcYaoaDgcpX3pDvoxWh",
  "key15": "52nV1KTTc1VdZfgb9pK8Aarjz37TBhhtvsuQrmndjqiWgt3MwgoAfEc6nhR83gf6uyQQGiqhc8vb4QKWow3aENiU",
  "key16": "4croeeKBLGKmA8FujK9oMxgN7xT8p7aVKNBkDiW2B3nhuFHWLismEYpQ3xHmpsBQqjeQmHMR8N5HWn2fCKRthrbQ",
  "key17": "3jrLeC6rkuefCAy6sBZHHUjwtXLSuvW3uSJ6t5o5tYGUC48D1gzKi8rpM1mReqN9xtsAroxUbSSztGpRqaL7yG2e",
  "key18": "3iH9gGPPtdQsjPm84zYHuxDyGFmq9Z7ubyKdU5qukWBMMdysdVfwfMc3yMegixs7e9oVMHEfKsdAZqScmA4Xh3pD",
  "key19": "5LvxEU1LRwnHuvhWjMeEJT3ggcEtK61M1s2JPR6d87enyvwdrcxpw5yaYNZwuB8e6pjduixAc6puvh8JTqcf35KY",
  "key20": "5ekrqj9pTaVb2Xtjxosdw1rVS11zhA15M37zSQkWBm8BsMLNbCPWLyYW92zgvcVkgau9Gfgk67NRAB8J3gzMUvQv",
  "key21": "2wBhwoxPpmJ5LiKKoRedDG32qP7y28op15VNU2nVe9Gd3qZDsi2GG4bK5CoVEGY6JyTJmRGqDWonhjMgo3ncnaCq",
  "key22": "3sMrg8SesjiAypH41c6hBvysAxRmSjrDuMfRBzgwn49k5Ja1qCSZFi2TnY34fyACEaFCLtqyo52gh9QXxLRquc6L",
  "key23": "4Fdn5ZpUpmcvaXFxofyKjDm6tGBuaUhoxF9C7RF39r6cfXffb8yHrVwgL8mxdsH48Xn1QFcsYNonZAVx9TrBm5X3",
  "key24": "4hoJRrGyCHTnzqcq7xAYubYHFHLQc8J54wowt7S8LFH4JajS26PnY56QgwFXsnEhofjAs9qTBoUsj1AwrKp53Wbv",
  "key25": "57fj1RQ3W7ribV8MwVghkmR5qGJvychuQjyaay1LUi4tTLy992jWPnJWw4KimZ8CGxPxpLsSqVv2N9rDgieFUtJo",
  "key26": "2NxyYDvpc14hxcRuc9v855KzMT4R76k3AYg8iPjae1qmWJvMAZXZTVq4NoBF9pzLg61YSjZr4Q99h8m3ZYk7up1q",
  "key27": "3T98WoNQ6WBw6tNveyDEkeDmiN8MV1mUzTjAvoVvuKNaz7TkpfEwn5EB1cKXxgS2xsj33Ek1Csaq3Z9J8Z4iohdi",
  "key28": "4v5wTSrhbKbfmFdFYbuzX7bjTsgkZsFFtYkH4KNUNbstdQfpMREqCtzUFpNmkiCKpvYKv5qU86X453Saia1qqAwC",
  "key29": "56r4yN1EFD67u5R1XiSTin4edoEsnfzwuuVv8Ct5S2TJW78Jony8gsJ8eqsRvBwKguqNCjXccRt2K8BKNNGuXJL1",
  "key30": "5uae5tsWtERm6TnB6YsZ7QygukxXGHxChDBrjjdiLuzT5hX15hY1yc6Q64FEARxyS799nKmVY4SVcdY9Ga3vC5go",
  "key31": "3SjpPS7xbboEALqeYVKtoQ4JexBGHZiWw9YNfrfA74SnfPFURz3L5rbxUeZavVPfWHGwjrF4DaavWmnfNru3NcbY",
  "key32": "47FvdW1K68AwvumpHtqqL8Vc37V9TmzdqJ6GNxNQp4zpE61nqG17w3R85AwEw2xUqQ6nPiqpTaXjqRSwDxZ8NpA8",
  "key33": "2f2vp2uevGer9MPnnv3ceRd9mBYn9rDLtgphEmNcvzEYS8HEJuyuky6pu26iSwVGXroJrMsbruW5kSe4tAG6QTeo",
  "key34": "2Sm8edBNjoocA1ysjfnMwUjpngFmzLxQGf4Y8Bp339oCyonxx4HgMZLLe5TZpKsheqHvJejpAESZ44r8tdohTjRW",
  "key35": "3NYrhcJ5eJo3ywYmrCvVNzvWybKCphKDnUcDSwrK5RdJQF8U97nD47kqcBS9P5Mrb2siFwZRTSAftktyarSA5tDe",
  "key36": "vGkPSJnPnK5j1op7uZCPFH2WNDavdUsbkpwyn19dzKPvXKYCUdk3oDJ7pNnBDbZYuYpFwBwX8ditBBiLtH2oDVe",
  "key37": "4d1GS87CbekurjJENJjj9iszMmR42mSTtFPDHSa9HxpaK55zqY3d41iL4oRZZZv9qbZZ5nWbneiJdJsLnAD4875g",
  "key38": "4nh4L8zHdiruzzc5zkja4GKCnf9Wbam985cgg9GZGwMZ96jW4FBtm4WLqyDk8FtmBxBA36HE7K3AeemGp1PG9oEY",
  "key39": "JNdXPFwpF5RrTgcBjzLjwg8KfVykWJfh6wMFoAVpcxKhHKAJMpgmimxvJBoEZjGEWKnUFzejp95ZWHTcvHcwdmN",
  "key40": "63MK9t7vkByJazQ6raPU3QRfAvhfEZw9p34n6uPk93A7yZDncfFNYBC6xXp9z1CiJUy6RvMuKCvJwdAtqhkZkw32",
  "key41": "ZvXLtSLkECg21bjr5x87XLLsgnz2muBaVSMRwgy4DRcY3Tupx21TCRaH5KWyWSXiCEzm2bz4pRaDN9bspqVAEGf",
  "key42": "42zpYp2ABVwaTmD6BBxrmGHes8LTXJPVUBFZnkaG39yGU75v59BqSUVWnABfajdQPAUoKZEsdiDr1U52gWZ8b5N1",
  "key43": "f3Esbs3w5zgaUFCsi8raSgPtFQ4923FL1uvVZmF1hmEGemqGemDb8nzYXYRbTRiKLCS8yUj4fg1eA4A5yjfzHy8",
  "key44": "2QDryQgoZvbUcNjkpkejBXd7WqoDzK2TakjsZBLNdDAKR7Cu7bzen2xfkwCzMhWVQTTW8iQ4cm4v3cSSTTd68msm",
  "key45": "4FtopKhr98TjResxuE8wpFHQAw8koRB4C9vjbjM13d1eHgcNTzc6dwj1AmWf9RV9FwJpbnk1FAZ4KugRrn4PDJFi",
  "key46": "VgHHzwKtcN2uAvopuZGRoTRvjeLibCotHx9deUPT7CctMcJHxwhK8VCKMMsuhB8Dwteeu7ArF1zPktNmiie9SoE",
  "key47": "25Gj34HJcXuTUYuHVh67mi6aZbpNTEGPeA2EJc2E48rVxBbY53ce2NYEW3Gy4VEiRgL9BKTLLQr5aUBxmSFz7RgQ"
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
