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
    "5bmjgzC8CPfrbD82w32TiqVry7ZJhWoXBSy6qrojMMTNJxSxD65d3JYDKLYfuJ4w2JBUpTHyjPzg5wjR7f4GK6AE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "439vxYi1zST5kuLqQW783MC6D7c2TeXAP99VxbbQmNH8tMhemi7hFKnVdLSb87y7mqUzaLFv2hXw6NvhYHg4rxAN",
  "key1": "2yGLpBKZMnVkvFbxqEBSugsDaj6P8UvdNxSQQGvNku4tMbvcYnZy3FetPvDi6tEyYWcibJQ9idd94genWYg2Zrdg",
  "key2": "5Gk7Un6VcFuq56MzvN7ddta7HKxmujfwWwRptmw2AGviV1YvEPfr3JgqyC7MWTNKFLsnFSdWw3dzLqdWFY1RJ7Ky",
  "key3": "4FJfkpDuADm2UwFn4e5KqbZe5h8sjwsoT8MvMjydcKdmETgwzqmCFiaoZfk9bacaKVX7DzY4JXfb3puDYNoo6Jst",
  "key4": "4TUzqgU4YtB7T54Un4AteLKgZXQ9acbosUhdtSsh3jEKEMXJzmiCHdTMvZriSRqqxQhoUefdtQWD5Ezc6BCW3Bzv",
  "key5": "zdSMn6Y2Qfzedok2rgd4oPZgaH1AtXCiX9PHRCa8dq2VJttLymXhn7JosZ7zhB11migeLEXN2c3o9eLsvq1BScT",
  "key6": "3JsxZ4PW56nutyJavw63Xb3xFA2Y9Pkndcfbd7ugzwEj9hcVVrkh2nvvo23A69xaQ26xYqHXvCgysANtGoAesV4v",
  "key7": "caMiMXsQzvHAq4cc5HBTK5zA4JNGufE3owc1dpmR2C96GjfYuitYGfEdwxWrBHhAd9ZSScE734MdZZ6vAtiFEZi",
  "key8": "5rutzaDqzrzRJzqkk3Mtb8xNCYj4V69wErZrLAvN39trS331pgpYdHcBxbXQcQ3yz55jx3dhtrwJmvM9G49AbXdk",
  "key9": "7FdwhKf2nbuSM9juFFz2V6g3ScjqgLCGZe3bswFF9SoGRhcGjfJXs2EkDwpkx3DgBFKfHHjrC4xtSTE1XdLy5SS",
  "key10": "2ZbHzKP9aC3uRecQyPmVsnUEG7NYAW4pskv4nN5ath7FLdqNfZG2ShB1uVwLyhgKtCZ4deDKouGngjzfhd6v3zE8",
  "key11": "4rvqDLf41jDUmv7iTVrrPKiRYzLobtb1m4atNm72U7waHq618sLV6hRAeceUMpYd7DP9ovbcu4UzFcy81tjTeLJR",
  "key12": "5f337NoXKHByHh6Cc7q9kq1L4LmkdMNGk2V6Bv2m1aW949RHuw67T2NkKKsPPWmPv6aokgJmP1Sz2J5dickQynAq",
  "key13": "46jvicFWvrRGx32WPh7Uo52E61ahmeSEhoesTr1s1TTD7dTYEGzvsmzMR4eUBxyjiST3iBeM1EZ7VTMaT7AZAG8Y",
  "key14": "3HoWA2Za4zhyaNMxUtVKAv3uuAe56CNPQFfLCshqcwLXpZaRUbL2fxZSGfeHcx14hSNKSnE8fsoa8Hjex2ZhyiXX",
  "key15": "3rhT78es8taTmj8gBGLf8HFW6RNbyg5GQY5QYayJCFJa23dCWJBaeDX1U8JW4qwm36zpHkyjfPjHF1d3uLYNrqL1",
  "key16": "5FV8ZjDPnPSgUEK1sf2fRB2bH8g4SL8vspVriLxJbKXQuJjD6ym4JK4TERAW7UQdyd51cU1QF7DLKqtBae1XGULn",
  "key17": "4fktokxoA2BZPk8A73T5zBL9VfJycndkwz4ad59raXECjSkgewtkA2MXx5UmFw3iX1FvvgoEt6jLeuoSBuGu4swB",
  "key18": "5Fk4jYFqB1EQ1bJTvRbopnWkAphq5FHoThhjT1ittRLT3YxN8TYeR91kHCYYDQ5yakcLaAXBaSNShdk2VadYaJcx",
  "key19": "5BC5pou3CU3pELuPQxJEwCB4tm3DtM5kKVPrereqE4wmqp5KDmkCHZXtFoxpXX6EzcHpGEDBpAFVRVfzKWpt82oC",
  "key20": "4DLXS5dH1YKrxdLzEtnfJeHsEnh8iXtY9GRVMXEqMATRnisFR3kiJs5Xrf3YYTmAycoSTi73MFYZpVakHTPsvLVp",
  "key21": "4JRfgDo6Qg5MW9pGv4k9reXzVkhcf7HvNNYuPPmuhtuGqjYoyNudFdGrHfeZVSwQxJaN3Rz4LFuCgBFV75je7TFf",
  "key22": "3YQHD8oBtCX1E2tWGv4L7FC6R8WsFc1qEhX572JhFc67bZGTGhkNTx4RJpMeYktLhWBbnvu9JCQR1Cq88be1e83V",
  "key23": "3gz1WPC7C88MV6Qe9rAXJbvVcDf68BWpBiXBUhbNM4q6HfdQTgQ95JLneWJ9tMU7DmzijjQoi89uj6fgGU6sgELY",
  "key24": "3G8inJid4XDKHx3QA8BDvV92mNK4L8kH5hXZsUJEk9hUEbzbefmQRcywjb5LM9ZP81k4A6ebGSabiX6h95Bi3GMA",
  "key25": "4pMAJRaDMuq4rzQNWWMitNc3x9zx5VpjC5bSXoXKpUy89ACgmxdCH8xrMrVvfv5oEmfUE7hLiSwAuDqron5fhqZG",
  "key26": "4GzGUYCFQs6YyujeNKmkESN4Ne84QXJ4EYhdXgq7Xch6LM8UtXkXjfSJV2trwASBD41bwCynE82vX4SqirrLqYD4",
  "key27": "6QC6YndFw1do3vjRMwDomNHZTByc8F2CxVFmQfnhZVVi8ZFvLjJ24V6L2kJhkNBxEn6dytSSqiTRFwMxp5qJq9d",
  "key28": "3UqLrBR5SnGXWy8Qm9THpBM7Th9YesddFHSHjQjxY3B7dWPiDqd23BGexgHK1PERPqcQ3C4DtfLaKmkL1BZs8bCs",
  "key29": "UbyNjbfHTxakKa8PaN5XTQ4erAshJNPZBbAAnKvAamsswGfe8c5oWMq8CZqzDhH7wPYpPZMsJGMGdrU6Q2NSu8m",
  "key30": "5y6uAF9zPXXviBEJ6vP21bVGuEzTv1EbdjbCu8zVxfMvmM3q2Y6AqKyx1uDP2tEirXeimHD4ahoQd8wJtDD2qW5k",
  "key31": "27joWmcKjYqHdPzdmJxn3KsFPqrmQrjQvskYK5oDgDQBhd8NggGAuHQ2SNYcCT9NLMkHx5qve8aAqKCrq8MJvPdW",
  "key32": "5a3rkqJUBHFSqhmr1uNLHEjhp7RSR2xqQ9JbNKcfTs2uXXsUP87KpeLqtCWijRRa6wV1yihtfc53mnmrU1HBDr72",
  "key33": "3Tt2yDqNkJLSM5df6LFHPPcFLWKW2eriEfEn3jcenimqKWTTeAqY9Q8bjQwH9HrsSwaCpuNkLwT6V3Xr3tAPc3L9",
  "key34": "3y4Vua5Bwy1x9p6fXxJ3evdzuh2bGQf3d6kZxnAVrBCAvUQZKdL8kxEf9iG371x517QVVEYhUkqbGGL1Z4VS9puG",
  "key35": "2suRMoVHWwr9ZZvCtfrydbqHaesop7hDaDA48hxgt7EenS7ATyNzGckaxo2Tebgzj8n1VgGvS3HK9rooUbNaotBh",
  "key36": "3G56yNsSBrjSc31FatP78QsbK5w5fBpjfSVqC84icGQmroU1M6gpLkV5uKRBxgDhjNadYtccpQQ9pAiFP34ZBihi",
  "key37": "4yCo9GYeSBafzaZQgvAeLJ5H2ra4dNNdt6fZR5eRbJ2x2nWRpvfpXS17HaiqR4sKZLnFwjKQeuwibpWdV8Dw5pHQ",
  "key38": "2fpL3HZDPXLoMXMzty6SmWmhRqqJoykXyXY7XfLY7wVQvGSV7MF7f3RbiGAvSUG9b1jt33mPFFQH5HWSZapxscBj",
  "key39": "5nf6e2irSPR42NJ6EsmFwMjz1aHBbKpDgDFYZQhNYH5NbsygYLEWsC1i42Dx27Cv37sv5F9f5FXWKXkR6LC5i6sH",
  "key40": "5rcgQPKUGycU8dLfLdTwbCDyA6FZRPGbmWMNfCzquW9A8r71xr1Rsbywdf7gGFvoftmxdCePhwiWJzTjnzDDWiQx",
  "key41": "y1KKRKSohHDY8pv8ZcyocJLD6fRbFfoAVyADXph7UHN15ojiEbddWFZV2CYNGCY7p5Mqg1y5gmzRMJyykbYwd6e",
  "key42": "u3MyxZa3zJMuTfLAzSNMYJ1u1Lk8dYz68ewFjQ8Gpq2BsPoFAHRJPKW49zQx8vjuyH1zv5wSH6rpuRjjKvBsV8T",
  "key43": "58Ai1imd9L8QMfMzVu4Lu2oYhNfc75r9Q9ccsS3YGyySNqZES9n4U3Xx9HWajexjmTF9XNYNb5ooNkYNFhjGVMm3",
  "key44": "xD7MBdGJECmC2dSEZBfANGtS6tTK6ZNYFDVNDFeQo1Uaj4bkZC1nxDZ5w8fKRCpxxLSLfF36uhokZvEL9uDiy7c",
  "key45": "5wBG3KSzvV7YxCdbejaS982YSCDv1uHApgY3V6ZVQw7r6oo17ZCj67s6hBkVxqdanpZ35uBvRtsDy8MD4NdhKfeN",
  "key46": "4dMPe36hjiG8SHtNa2SAQgUj69MDrvsdQMKzxRMqw8yxk9AZfCaSLyB1XGMC4c9nDGqgNHoiPjkKqND4kaknWpJW",
  "key47": "5T7rdNxvQebAYFsgMfH7wJoteBguHYDCTu4iH3akxDY8Gs9RriTnSsTzwCHVU7fXadn3Sn9cTnTCRi5zZKeJAADm",
  "key48": "5rFwsjWXzDbMV77NExtp2rx7NDnf9GLmv56WLnAe77rGopzaHLx7NDrYQZY5SYz3VAVy1cX8iywrpeXyoa6Q9tkF",
  "key49": "2g7KSu4E6buaAWMDigXHgUWsR1rm7gnfa91LEwiEVUVjvs5KfFsaKJ2dVuTs3ypqXRWYHq4xHXbhYVzNCzQUKQge"
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
