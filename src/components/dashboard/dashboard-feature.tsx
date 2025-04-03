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
    "5EjdXq3z8xWDWq75kSxEhsPvYw5gRdMJYubvK7dejws6mHaF934r56GUKdxfvcbsXFhr4tXhygmQqcjN6tozVi4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FcismBUa2kiVjEGbQDuorVbvb39q5xZNWHpgJ3UmBjtAV4vZ2wyQeGwEJmk9uPhG7jv48e16HUHumXZ2MU677m5",
  "key1": "5rHXu3TbqJ8SMTjuUQvgFb8yXRkS7EEEv7nc1XHMixiubSppWj7SmzYn5JwZWcdUr4QLDE3gx7EdqGVsY415Qv9e",
  "key2": "4xKxAiVXLCV32MD6WN5bgfyVsn2xYwsWqqQeWDeuQJJ3ECh9tMHWDSGWAZbxtJJ5Aonpo3C8ZJFAGh7vLLxQ4YRV",
  "key3": "2yXCfaq1P7Dk6j4bU4XvxNK3ZfAuRPLEUbanKcErZob7bWtxjv8K4tbuk9q6NyMYa5j3pKeSeKpB1WXzwTHnr9i8",
  "key4": "2pVdtL8ZirohYHzBsc1QJeiykhfrwP5hJWsRo23t9JiLSa5PYBNNAKa1fPKqHGY5ZiJsZyVgbu5ArLocFgDB777Z",
  "key5": "YuTqGbeFD62VJtGuszggFGw7sZcJhAHSmwnTRQhi9aQEUjv4KS3VrGyBnknihW6pw663UkDezfmTZ5tvJhR6BMi",
  "key6": "4ENCzW6FuRzsCSo2p3yqvTSLdUM4zRhrP3No5JHsH5AWNgxwtuvE3T1zQToaVvRpYjRRHua3viT4woKiteqy8RPG",
  "key7": "3vSdY3X5bftbn5Hp7vbtjJb2dFHjoebucPufxm44rmzcQvhQMU8LKbRQMinN4SnQkNSCTkMq5CR54UfMCzzUZsSp",
  "key8": "23khrS3EsNReMY9rn9sgcddAT8QHzu57HUXo9eWds2PfSRTFUUVvvrVbYu287JUteS8vxSHYgCaRYQN9QRiDr2aT",
  "key9": "5gpaV8wZqW2yYbLgb53GoKD827a3GDWD5a4EsocVLd7HgmA78QKkiEki5rTNafdzbRrFMTGyTK3eTV4P2JSYKwQT",
  "key10": "4YVrr93kkoYQ51NL5jZwryrc7NBEpf9WwU86mZoSz9isVQK1ySW3WjgS1HejeV7ztiewbLsGsBHDwHuJ9vbXEwxW",
  "key11": "49wWVT1owgLk8Vif72Z6ZovvHu5zAoVicHrBhXAjhBTU21HTN7VEHHBtiBJTs2AdmefBzKqm9FBc9ZJaho3tKsPi",
  "key12": "2s9cNLXrum1UqZke95AtKoPWboxocGMHM6GEAkZAEvqpbiHgyyCwCWm9rKPeGS1ZGU1Sx2rxraeH78sGzH2DBXAN",
  "key13": "5eu1veYd7bhMVBmYU5iSJr88cLt3Lu5g17xHi2K2sDxhsbinAXy8huKybLWTLGodG2tSJjKQ17HTevqAqJh2R2jr",
  "key14": "3TLrkCNF6Ziop9qfsJtxfxCmzfa9sdDbMHoHttJAeoiHVRwhyak3yrdpB56d1wntesFfJ4CNWJC1zmpVZ4bwqpW4",
  "key15": "3jckDwj5v65HEd3XoSfhusvZccvJRiwaK9JW7hetCv5nSbK1QNM5JBRz3qdMrdMLfNMCSrc7vuToeWGKfVDUyGkt",
  "key16": "2iwGXuNmCSgfPowLn6WbMZjdH8Rm9cCgEp4izZn65aFDtwUr5fvQ6o1yj4MMWa56Tejmr1JJ2xVvkCQoBs4ixqQV",
  "key17": "4mPnk9CKa2bV5KFJ5V46MgJjmrna1vYp7Yv73hm5BUms2MXRpwd6EFMFcXPQmKcv83sBFzdt5mSVeGu1dh6Nx8bq",
  "key18": "67Vg6nxQsNmRgqUWi4Gqt8uqc5YC2cKJCUgd7yGL6aEawFTNYDjG6kG8u51Np7FMrezCfGbPjy4fvmuYnJgz1YKE",
  "key19": "2875Upe2sRaNx3ahTfyL1os7gUuXTnWwaej7qixH36qF8AL8gRngtD3p5raL1du283tL3QxAp7bNDwhFhxo36hSB",
  "key20": "7eUTGkzj7ca6KWf3hdfpi6Q78CaERJDp9FAYaHqXo4jEFPYYVm4T4FaeHALsx9SVx3WwfYZdMbiwpqcerqshSuM",
  "key21": "3x9jXbfJeNtfXuajEMhT4rERQoRPvA1vJd4PVyBqXAmMF6twg1W4xMb1Ubmu9aiQ7DbfMdTfqUnWob7R4Zv9Miq8",
  "key22": "2cVcQimDvuHVwMkr24XkLMnYfBHrCb6FmUnms6Q6mFc2wDXDU6TvvWK6HMbCZAX9x6qVUYWaJcNLtXs3pDuQ9FNw",
  "key23": "4nDAy1g4ndBnJw3GoBuDK36BDnPvRH3FDhzg54AZpADrhAow3nuLDC6u5aBLiXMQwe9mAtRiWnyffCB8ki9Uo1hJ",
  "key24": "5jV4szod2pTrrrjetYEJwe1q1xRqKDWK5iSeGtTt9mCTDN2tuWyfP7fvPLJBmgQTEitXtyeEHsb4h2SHShw6nbJu",
  "key25": "3yTeNJoiZXgpuUvoQwZFVVgPgpWNVCYErKHBzKYeC3H8DPEbnJVo9BeSMGU3QQ8GLi9S2bpkuf8S8vn62U9Xjzqp",
  "key26": "4jLd6WZq7dyurZNXJVz6qN6UiTgWoVZDrGaAE2W138w59bMvBU7kZ4snrWvX3YnRT63mt7zBqwYDBSPWygoho9rL",
  "key27": "5oPjnrxq3KqqERsUsSaZe4NvbMezD8a1Eod5LkrMUJWoFo4U9rRfqfBGe66Ft6jGzWYHfhodaXg4SvxpQFVQ1jJv",
  "key28": "4aNfGUaQPgEZth8wNbGsXbJNW741mA4dwVj6V5RdS7yxkKyKUuoRAMRTgq4jj9uE5spC7rMS53KVcukS8dex1TEB",
  "key29": "2R1FktX2Uoczx4VwTHkNJDPsx5Zs7JpRwBofTtPh8Y68nPdKCDt6dpWyf7QEeryEVSsbgg15sf4jtiLsQz2ZCoXS",
  "key30": "5yurnbCMqEKXsQjoGnUnXut8WW93p2unqxqHT4aKYq2fFxBFUianfME9V9Df821sLP8skyAoEuSTtjj7LMCsPYrn",
  "key31": "5aMCKegS3xbGqcwNSMnRPaSTRNfHQtiJSZWSMkpLYffNRL3xNtqSSssbtztU5gAUagzRLgEAv2RxGWKLaPYLezTE",
  "key32": "2yDt2itnXHVqGk4SzAYqKghStjdgSHcTPk17kXgDNpYsGNm8VTRGvLYmSYdCuCrJQoQBsjXXrwcGvc81foXnhJRk",
  "key33": "uGX3ZktnwpFcZfNN8fSccPGr6GB35KCq6nk1XvFpPDAdYhq4Pfev5XUUia3cx25PWByGNZLv1dwUKAc7LQaamD9",
  "key34": "2sAiuLCxSXTPLxqYvdMDKFU3GX5b62ruHJWjQcbdfLz2t5Zh42UVuq82veiyt4fY2NCeMZ6jmYonnHxEShWuAU79",
  "key35": "3tq2DxFVxWR7PWPK4aR6JR9Wong1Y77Y6ddyd8K2FdN55nDKFxxZxKHt6pynVytbUB8Lz8v8BVKFaNeH59RqEp3G",
  "key36": "2VqfzZLpgu9UjTiBk8zMqN1TgMdAwZ6SgC3xUa4rrwoiS66CqZZRD7qhwm8Hg56j1qZChCz4phtYkmzVy4KHihb9",
  "key37": "2NvvBGr2DGiv5XddZHvmzgdFaNg9LCcmuRex8GWffoS4QPrDfsSg9tM2boudAZ3hDdb68eAJvLbEPuPeFWyKxoQw",
  "key38": "47ZMuEhkwGnkmyQEUsHhgW9SoynCT56TBGraN32gHw3H6aArvx1eq3PLaPTBN8NJ5Arozh2HqhrwBY4pbssNudd4",
  "key39": "2TUaG53rtTwvnyRnVNHXwf9cvng4HRe7XagEPN4PHDr8YpCQL1wAuYTC5TVXD92GuyypgMcoeBu3cKjCj5GWCkYJ",
  "key40": "EpwvEyvySdDXJouAhxefmcDePbgd5Xipy5Tgzq1UM5s2yoX1W5NZFsHpGSweahdk73CxYipYfHnepxCgHj6eJLF",
  "key41": "2dqd1UD9CBoKXNe7rZDhiSfGdjKEZTPLAxqPxRhMcGUuC6nUzvWb8Z6BbSCbyUUeHCNMuJh3B5XKUf1u3vwntpbK",
  "key42": "yax5z8X5dc6scS7BrZ4CGnYFuw6Vhw8SWtNjF1D1PXqzib6kou9uaNJt6LRV6s1SBzD1uCg38zKw15fHb85k7Pb",
  "key43": "zsRsFtR3FjMeHDjkNR5rrZDFxm1iiaFsPnwhMm5xcSFvKh3zF78AcaFAWQ2Edqo2msR6yUFgjGfzc3t93Yqvqoj",
  "key44": "2wpS8jDQHV6Z7aXMV4bYgH8S2xQVTYpKvZm8AoXMg2axNjpXcUo2PXNJQEaLmBAVUhvoymaUft5nqUtWCdKNiWkH",
  "key45": "45DUCeSaLDEoRsCnVxhbtupC76a18JhbYJbBCAEwnmFdMeUVmgJF8wmbZZiJbBuwAqs9UNaKa3phJtsgX4EqafcS",
  "key46": "2mW3Amqd46moy3buJYobp1WdjhrSziT7nVYwGKrAbCxfPvVzdfs9FNZiJG1PKUogSELLxaRmWCmn9hL913qbSRgw",
  "key47": "2L28HkiV5qgzB3LUFnq7ezkKTtbpwErxS3QNJVXuwHmQfchYPVMEWUC1xDPPr6JUACqaXKLE8pUAyx9PpNiuD7g",
  "key48": "64BngF5zVLs91FrhjmRwg1cQmd8p3f9Enf7DVXrrBPBkAiV6QNw1wCppsSg4AkvErEdvLYd3xVWU8PkbgbQAJnW3",
  "key49": "65LUwdw3DqjGSsCZJkWWYihiyvedv4j2A925s6V15EWrKViXrU8PdccGF1ZGcqGz7JYdKHbdyr7dhc33DHUHqFeG"
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
