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
    "MPtfA8wd6DndZckJarGn3ReE4qX3rVKpY63vB5xUKRYhfTDfgXVGSA3GYrsBBZNvnjxWucoTmDV7nNNJ2jL9Swk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SSDGYc1ueNBG8hPPo3xcXRKUTi3L7upNzRDC9rLiNFNF4M45Yd4eKnJvgP7hTHtNbLWbkaSKvpxwC7GaLuxHPuR",
  "key1": "qr1gNUGVyV17kZYcNP7NXAqNFrT17A7UX6TwWBdV4tGjMFo3Vi28rXPV2dq1yQmqrJoVa5Gf3oydKp8WR8R5Yfc",
  "key2": "4Vdd2MFSsSASVKRMoHHk5LFBbH5TE8TzixSnmwZ12crixXvYVVwydMXrtVYTCqjSZqsJVMEjqPzeM4ocrQ2Xxi2P",
  "key3": "4PCz6VWZqRW8rJDuffTAt3WB5MNKffiWtiTUePhAWoxJb5tozzagWyjFaUyPD7YQudii55QBYxdc5v72LYHe2TC9",
  "key4": "5YPgr2ycHg2eJgRL7RbYdMPpZ5hMZnwvPXcLZ2vLRpqKMyUEhWLzw2a5YUAzgwuJMRJmLf3sGqWraM2JSr1iUEmS",
  "key5": "5LmW83txR8G2wR1MwUyrh3rJRGVe42aNmYzqZrjbt74oEwUzb9BnBVEZ8goanvNykdttG4QpsQvVrL9H2rvmBEeM",
  "key6": "ecjaZFnHz4EbyWiGCwyvcfDEVfZ3xwzG2DWyp2QFvELzccgnJZrg6nWHryczkWTWgEvVHnqzi2MBU4xutdSexYt",
  "key7": "e2q6C7PQP2CfCAwo3FZKUSr9caAvcKzkBsye156snzPkCvHure4FRJH3gKY59LL5BCamaLr6AssavfyDKgWaX33",
  "key8": "3b2CkNXbnKiTeupUVKVy8wGgmBMN8HzvgBiG36b3FTNSwdQ9ztATKQ5r1nZbV6BAKS3bz1EgokSJRUT9tpGxBWRi",
  "key9": "5feCQqHMd6FcELnebre5pzjKj3VRd8DG2PDXdA7ZXCKekrUyeYDKbWKuZrPB1yk6xiWLR9XYE83kEBiN8aXDAs96",
  "key10": "4AGoweNN4x5NgeimN7fTZLZ9EN84xpFqW5F4Qar4Eq9k4o47zLbxTjLMg7tHwgAMe9zLnwRvWzhaW8cqyu7CbLXJ",
  "key11": "67VcYZC6Bkq2oTYyq7uJCz62CGDa9JP29dDLdzRBwqj86aap55Ho9rZTm9A6UBzK3Xh9t7xQ6JJodPULtARgP49h",
  "key12": "4ukRDTDwvxtduNSNTcwHVm39dmDKim8jLyuGAzguu8upw4GNmMa5bee1Rbh5oLgnVSzuxbmZTgZJbo4Cfzf4xtna",
  "key13": "2859HscvNNtYhLMSf9dT1a7Cd6tyByYZnY7kKpaY8hD2xvshft26W3w6kCsBTHLEVr5rLrTn87w2VducEyB5oWS6",
  "key14": "2WDL4ACNnQEG1N9ig4AWPWYgc2PjSC3xAkHMEQe9XGGJKjnYG91BL7YHNineV4dDL8ApPpgrBsnWpPawjqj7jwGK",
  "key15": "48k47somS1Xe7msdTjiDWz7LuPbXH3jwWhCyCp1Qj8ZnkDk2fr3vigFu5T1QXGfgcmcpDcXsnLtFJYRfJbB7iiao",
  "key16": "4VRhNF1EVLNnSoEzHsfXjD3j6LVsKGJviMRP2VbSdEd8fkD241kzW4H364gJmNwe3kX1yziyveJKRaMmWS3SRFWr",
  "key17": "3WXRBDFG8jkUwxB8XUoUxdRePGnvyqUu3KastAtRAZz54LQAMdPdXNsU9pGDeajgnkjfzfssdYrRmQ6iLag5pxmL",
  "key18": "59LzuwbW4dzPa4VRCXTceg6RCucAGQ3ybiht4ghxQgyvbqjTBsjPMvhYvmaK2iUMDYhEjgy5oTbDmbNavdW8dzHa",
  "key19": "2ejgxGjHNESq5yzyZARPpyD3b4QSkB9nm8g4GVLHJWBD476XdBknRY7e2GqFJYsvZGWjoQAKc4iSFrkXxXUKhYYd",
  "key20": "39ajpdjfxqDG6sTeyjgQ7QkeoDJqfBGUM2GfT4YUHd3dzLL62mWMgSy8AzECaimMC5SvzERJZJG8XTczjEvjbA7X",
  "key21": "56GMGDC3eLogcqBCKApd4Xb7o6J4hNpxKrimCUBYyMhBWLhZZJuSfHqP77d6t9gs2g3yyztV4XUcj6NjFc6Qtxd3",
  "key22": "5YazwkkP3U1YALKnzVYk9ovnVfbSpFVRbsUv1LymzBW4wZNvAZy2DJ7pGwwcqq2V7RPXXTiiCV3gihAk8rdDgueW",
  "key23": "4KCtvAvCesokiWfsyFWQprDcsyMpftCw3MuqHZDaE2zEvcqksMZ6ar4bRxCeAWqpfHff5oZUq9JYR2xgd7ZinRtf",
  "key24": "J14ZxEByXdQ91w2tEJSbTTsSJG9ZkWtgXFnQYC2cjNftLLanREV5UJNWzCc84Dvr6NqmdoDHoXjqXRe9GRKybDr",
  "key25": "2EUvKsddS5ZuRWWDFTNFKbr6xqsgP64iEhDoXKbEvBDeA9vpCkzqR2eASbYZzqrFqrn13boPJ6aBrce2NTKTqr3q",
  "key26": "366g7pTaz8aoi7gNZ7T9oufZ5bb3H1rzwgHgruAotxvctsz6nNzGiWBaBtfHGFYHgym6Fu1sDb3WRuTAD2gwQagU",
  "key27": "3MnUJr2dXTkAXEgtyfmgTDGRh6sJtor8ma68QceE2CVRn1xCVi8V1u595y4xtvxW8dWyjw7zXG7gnbWfEJmJYg8A",
  "key28": "LMho8jvng8zjF1bso3zx8Js1drhd9pCVqs9EtEBsDqHN9Q65AZmn8GgfYPzKEqHwhbEfsPU4fc1Jpe7YQ8cYCoz",
  "key29": "4AahWpCU2DEot7CHbXq3oPVkch6mY7MCnYoCYeSFGUHDkkQEQ7x9eaqSXJhaYKCbpqi39CqYs3Z2HikdsoEWaZzc",
  "key30": "2uwWnWKPRCGmvMUkrqigK4myLgTfp1Ye7gh1ZBKnYJmjrYfHohPhKoxw8jt14EbSn36fSAucy9GFyLPFo2oSQ2iN",
  "key31": "4cScKMBMRqUybncSLRhjmBjyYKmfwnUcDMkkx9crpeXDv3enghRo6UYatroiEyqRHi83YyRmFhhaVqSdRXSeafm4",
  "key32": "3GsKCDPUzCrc6e8FPk1xqTK2HGEjY8wggY58nDZWJA3BADDgbXeXY3jvqNTa8m52JfJ45GCjjKo2boXGhDkUg3Dy",
  "key33": "5Xsf1RgnTN79XmtNaTiQkSLgQ9cmBFcqvyiAUwzVB1f2C6MVLCR9zgtuW7g7AfkjkEVV3aS44uegwqouL9R9PiCx",
  "key34": "4ZFwyVEYP85DHDQJRHvULeukxHhVKj5kkgSiiApnEiR24BXSGeKYwAbJV6NaGybbXXEauTW3Ze8HXyncb81NgmsP",
  "key35": "5zGNJNBSzS9eQhsWPCoctqkt4wnrtjY22NzrfqcuF4Ddcridw1GSk1YGd2SK9TzDqxUr7zDFEqMC7F1BH94hmiUE",
  "key36": "2ywcJcvBDzBaH5Wc4Mm7AdDKPxVRK9rF9gGT4jumwvexZXuobz3gfEX7k52kNSnNjE94wUbWmHWEYqP1k8eGu238",
  "key37": "LoSwPWzcwfWAXtUgZGDuMTeLJmvNcgGirmsZPnagw1m2sA4ZisDewhpKbHuj5CRFyPh2E9z4euK5eKGUnvn81cU",
  "key38": "cKu1mqhUdMm7DcY8boR2RZ4UgF1SMPoNgTYhUJi7qaDiRDR28DE4mpKhWWjyssvyF3D1fgKtccDeYn1wu6NUaX5",
  "key39": "4Xg3fohEk6LVLctW3rpfpawH4J11U3H8zkGHzpHDrawKJRqARzZjjMckAC4yCx5WZfBtExfHcsM4ThiY1VbQ4HU2",
  "key40": "46brwyjJ9cZ6MvT93idpB56iRBQeSq8G5tTwHqe7K7Rw8cKynrr3YY1aSddQVkTHjaJZGNjFL2xK2ucCbLvx4mrj",
  "key41": "qPoETwnMh7mefbHkD9FnbtqECiz9z9S35aHLDDKrch5M2ZDFTS3ZAAqwim23G7oCy2tbG1vCkMkCwFLSZfuDohW",
  "key42": "3pYHL4jVXPjW5P2B69ATtXvNDfJ2NbsVKfvU5GdSKKAkQus1pfw349L9SrugR87vBstEYeVZvnX2AqBDpcRM5rzH",
  "key43": "4KNK3kPyNkbQFh6c1obJWWgcHcnewLTUQ4F7UYaLCwdKwxQxa5ntNyPazJwZ6xJWt5v6BSYfdtqhCDNGkGtcXQFp",
  "key44": "2FaBXTvSHmSt4EPkMDYyvKULjy1gqe6T9f3E2j5d39KqPXXG3zX5bvzf7j2L73hEqUUJJANNrntsDGAry7w9DzPL"
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
