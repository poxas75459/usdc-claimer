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
    "ATkTHEsao3fHvwrArmVQQ5n8fVJWAv3ZJt5fYAbhUbTaGtCGag1hbvZpfJY9yysZTNDa3xkc4k12cWsBKShoaKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48CYTgomXMjK2mPW6noQMmsp9FdrycJmrYngKAXpiPX5djAZAv3f8tz6oMHyZ6sRYmftER18eRKMyJfMGdLRYmMP",
  "key1": "2ZnTx8k4HFJak9Fg4ytyXyX8SL3zTBPDCH2omuaRGJUutZZH6dYn58eyH6t8Ey1hVJ8ZKzdA9bZVdfi1AoETE5Dz",
  "key2": "2VqCFsPEcNcCNR4tr2TEGg1h7h8znAoJ72iaE3cjzGmNrMEFgQahXM713mGx6jLxCFnh5VFxUEsz2xFBvHqxRDeZ",
  "key3": "3M75yehq9UWprKunCBWSuGfouSGhMdsuvU87QxNaNkjaH3oXkm3az5gGPRDms2qt6sbGzcgmShRPtjyeQQ3BCk7U",
  "key4": "4aLQ1XZyHZwQmxC5uHEd1xCZZVjoGe7NF5XL7CA9odh6QmFKsVi6iBaRjhSLY2fHTRm1basrU3aswkqFWH1ZP6Ag",
  "key5": "5Mghz251xcryPFnna7AW6LqtAH6QjaXpU7wGDza15cYDK36PdRiK4GYEh2dJF2Sxyw7tmY1eyydpVoKv216XvN2h",
  "key6": "3qa3VLD9GF2yspdQkuqtT6FFQDkkaWVxRPfiKWPkbR6ks973px2P3vvTzHu8Hy1Yu2TZhmjuEMcQ1N7Xxqg3V2Mp",
  "key7": "5NamrjkYEizdVygaDHYyCqTTtzEh2Ph2dR1CTZYseJKfrtdH94EccpMZYepghBsWkWeT3i7ZJyDZ14j1Lc8kW4VK",
  "key8": "LXwjffBevBfM3fq2kRfx9pqn4jAFs4X54dzLFTAzfC6v3PJ8gaKryTk8w44ToqvS2Bh5xZMC5xN5QZZJEwpP4kc",
  "key9": "4MGtK696BVEyctJg2wKyKmZznAceQbrNWadKEutuDFCVbewLUuGR1X81eRnHXawQmueH5g3JV94yYxVvJKMweA8k",
  "key10": "43vo4jQfnJjUgn91eYUpKaQP2eXxkz4932YTRPbUZ138y12gN8Sv1PMux5gLRxg2zY9BuuhEbtCphvxc3rFpFEvF",
  "key11": "2wNwhtPRtPxBw73qgWgQquxLsbZhHxdBE5kZ7fZoYDj4DycqAh3ifgFNjE3BcLB7gR9vMSzPrmN9GXMP7pt9U6Fe",
  "key12": "4Pv4DVZ2eZBztbFKXXayFr5KSsRn9RM1GxRvUC7UAtmdhxgvbKrwtwBNnuBjr9C34SaugKf3tZrpg3xE3MDMYpCV",
  "key13": "29Pvb96vMoCDohjE1BcJ77C1q1mCBCPZAgHKg65rHxVP8FFiYiYCj4MEkBbC6s6MBzjCjANEZZsPz6jUvrfo1CU3",
  "key14": "N4d4gbbc9JXvLpb135D2iH2295zZR3PiMnpafWkLq4rMHUvbTSVbdKyki95J1Rx94KQXMDE47S8vagF7kHeV9yp",
  "key15": "3HGFaWzXiotMS2cM8YqZDErccY9FbTyopeEu4XZRh8kykGTqhbtde4ya4YH8B4GpvL4XBs1TUyhkg7Pz9WhkoyUw",
  "key16": "5xhtFqHjDRV2XjczTpcuLWTWuW5v2kHDTNXRm1cN5DxgJj1WYGfHBTAq7yyGoU1pQwNDhdhZ5Dhpuc9Pq3pc45Sh",
  "key17": "5YM3aGm9oELGbpMJdWkHgQvNLtedNqNZkQ5tWP32aYqWfwSGkBoEwAYRApLvxViwysL8oMPMi223XjWPegNzzuyM",
  "key18": "3QnmPjnTxmp69to8abzq8mBjA2Qh5ipPxH7b29XXHb4K24ZNJmyVixbiYrj6isr5r7irYEnMyeVhHGNzY6sUhTs2",
  "key19": "5HgJoZBx1BmksZPH3ToFscmMk2HT43a9342n2DBuZGdPqCjG5qdseNaUrCpLRpmH9Z1b7vjsSppRWGLkgbqfFxDp",
  "key20": "5fms44Ckn1XTUynfPYFetdof5q9k3iU1NTiWy8o1hgdxMrmLjL6ympt2WYmm6spdgw4okghPyNvH1ATuSiCm84d9",
  "key21": "64KDdYoGsUcUFJp79N5GJQRAhEv5DSddcK63CAoHeAqB9PHgT8QEZNicePK3QCrAFPtUeUfRK8Tfu1rLYZeNBQSK",
  "key22": "2Gt2Y2z95i2X1stn5cFffD3PQtmso2rYU9DJZRKyWpRWxQo97YG17hNDxZhqdoTLBTb87HHyv9ToBXmtSWehuu3W",
  "key23": "coJ9embmzdcLSPETFuD2ndGoanbuQqbypf4pJEWExHu2Dbt1YEUhibjNRwQBCmYC8au6XzAvnwNxuazhPtWsMDa",
  "key24": "26cpzqKPpbEVDT7HJABBBvdEuiWEDSQWGny7Sg2MyT4u6XK391Vke1rMYWq3KdVPP4CELp1sVtho1fcySH5eLS7q",
  "key25": "k3LGpuuMdPNCQWEVTjuZu7CMwxh125c8X9kNBB2t3xA6ejJiTJQJDL68Eajauq75Hhv2kirgNfiwjnAH6GYoXh6",
  "key26": "3vUmexx2LBaD1CbGpQDy9yw2sUDNCm3wWgz6NC6quATaxLGjgoiz5t2qKRVsi88mFSjyZSjVTt49oqXvpF29B17k",
  "key27": "UoxwUKrFKofC6JprfS81QMovwpCTEQpRZk7eQDoJYvueV4S183Jtzg7rKEFaLnmBQFxMFCLiw3TFc7CfdVtDRYE",
  "key28": "3dKBoTgCvE4Kku4MRpLdkhU33LuphwyS58N4ufa7CAAUmvbWn9tXmLrKitXuL8mRkGtRUyaszhVyJxVFnjX9tH8N",
  "key29": "2smfCWQr5dWDUW3TvogZy3eKsSg8JxioLEJJVknxE7nrEcS6Qtky2URxVFHsiKuFuVTp3KkBASuMcx8bBcryPwiu",
  "key30": "2EHm1D6n4zCuX6xtKkFCXXtUMSCjkMEw7aNzE89DZw2ykiczt9MDvu58y5PdAiyBN3fc8zUBRGcNyrFnrQu9bnMT",
  "key31": "36QEB7JehNG7dFERM5ZQqmSrK33NLgU5KRccXpAQLTQ4m1XkCmvmsbsCyhPgVDjWUpDQ3Pbbuf6398sAugZvcQmk",
  "key32": "4SracMdKffRgehH1G4MKvdKoQ98D4LcY2MhabVED5hs8bT6co1DPW2er8FpZHuDNeq1qCuYg4DQ1FVJMhLQX15k4",
  "key33": "4uTZL63U9DNxjmEpxUebibsWp2sxc8oALMkRhUod7Vc2enNnJ9S1D6E2vu4nsgLfCaFkgwrF9CzMSpwvgi7RbH9y",
  "key34": "4AVEsDcrtpXRQMUqesp6mbNxujhiZ2BmVqiELCBNdQvJYsUw3Zyf3vzQ59YgF3Hau8RyqzkZtGPv4hP1uHbyCTG1",
  "key35": "2jnYKdxFTkH3bnPmYaxYwEXHdqwwV2A2F5tuUCm3y2Yh7tu3YEv8mkbrfbMZn2gB5o25Z8GjCLuLnjeC9zqMGmTa",
  "key36": "2cxw8ozrW6beoxKiSsr7q56ThE9iD6YEq4Q8qgkgJmXz5JSRyrU5U8i4kzmVH4GnKnaNq9FdLaZkLdaZdQF6RTKv",
  "key37": "3akjjuGMgFwJSsPnWHLvPBs8nX57TyqmEpX1Z1r7NYsMkK8vrUH79JGcJuVF9bJieQ8Lt2DriGfqGtjz3YhjVi5p",
  "key38": "KNT7CuJBheD4ncsCLToMPDbMFK68hyKh8UqRXYaipr4D1CieeyCm1ceBfRo14EZX8Me8S2tooA11dXboRoBS4cQ",
  "key39": "4bWtjNFkxVtHiTy4m4ErWg7N4We6AdwhsgdeN79JW1PgGBUkTS547ZKXLDCsLGZCL27gKkUjiJBGh9Yvku5rCYky",
  "key40": "2Y5qjWHoUhqq7Z8JKqt8YKhLpcv8dDq6TLMMrS23dDXxtz7UPmaym4hs53ShugiQ9vFYkG8QopGcbUtdUMdqSmzu",
  "key41": "5oBMCqFbCgsYW64iLde3ddg2C25mNRQYycjEtMzwZB9ygS1GrxiyTks4UMQeZbdXBAWVQX4FPZn29hgvkdHo5hx6",
  "key42": "hKbwuUySgzXKWW8DPZyP6CwxXo11WcxbRnby26T2s2ggBsHwAAeAJmKAtWU18rCUpnRhxhTCbCFx97qKwChojNK",
  "key43": "4QYjzHDgBs6HMiLDoVMqLTs9x88UdZkgaKubkmDSZXAeF5cxpnQhrtzmLnj6ZgtiP1Q1emAbSjZPT35Wr4coAeN3"
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
