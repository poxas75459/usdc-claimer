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
    "3oEDomursx2dS4EfQYKJ6QhV8qPhkpEeDnpd3cp3TvBTkuJ88W6QuK9kSZeMSdUguLFjfDcsX1akdAJaec85XetH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cVW6C2SCbVmjp5emni9gvrF7R6vtNdj498ynH6wnYDaZymCmTjjmdG63hhDFpoUCnZZFhd7CQgfVqDJe7PBE7Eh",
  "key1": "49DLbSoGDskMCmQPvoPWghZgK7TaDDoRiRGok7hS2FASXi3F9GmgUWAcPJZ34hzB5YZmErfAHTLjjBuYzabRYGNB",
  "key2": "3SBrF91qvYqNrX1vFjSYrVDsLHzKxCcRpCWRXvNmvfbZ5YpoypjNihTmMadPKdHMCuWzsf7BLbwzyhKeGMkQoCEZ",
  "key3": "22TKmNWxJnFnWTidrsoRigCzMpNKxPWwcs5sSbW4NFxa1H6b37bQaR8sV51JgxbEw1DGbLYdunAao1jwfPF7THnZ",
  "key4": "64wd2cPPDRWdxHjGV9vt8KpRgSAtDjaaoonbRnim5kQL9vhJVFuiUXoE1wdNSDk1aGdWyd8pE5NzbTNVF68gxuy4",
  "key5": "31m2oDTwLDXnusuipPHtbFWPQHByLqqtPkgNLWTbSdEoD46cwkQ1xLnnLof1di1JUkHnFWCZzFJr4HHjPPyeoidF",
  "key6": "5TPP7XcZnuDr7ev26Kkhvw2bb5iPG72bdtE3J6x7BAhGGWqVMcdZG4QRf6AodTAQaPcpBhCcMqZ89FwMWzQADqzD",
  "key7": "4urDyzkhM523uizUnuGjEewX6EvtfMkTM6UufyarYEvg5qtt1v8ZKcYjceSukDRM2U3GemczCLTqZJnZVmuxc6Li",
  "key8": "3K8i5SvTdiFh5NLzxPU65RoKZVHM16JXgUn2FTvB5JRQ44hdtWV5Pyprt7uCXGgQgZ7Bq8bXb8PmHr6V1UzkPboU",
  "key9": "223z7VB1mcnnGfuBTktU3i1wJSzBfPiWi7FVvMHUDGSAMpJNLLH5JHeAbmEvyNC4k9XUFFpkpRn3eKN49yTrBC1X",
  "key10": "4G1RK2WVkvcghp9d98mV8HgM2GFRW71kbwXLNBacPmewLV8WjNuVE7w4XQTVWwQbEJAkMQpLJ5c8QsfCzumjRshP",
  "key11": "r9393F9z9XMM28DPAwbiQFv5qKNuddL7Fi3B84AAuxsknewi5dQSxdssjMbroEoHYCRWPm5bgMpvQcJe2jaHeDm",
  "key12": "3nPrEBGzpG51yh6fdMHHfavciQRa65b1LipFekjpyNXHfwSw48MAR1SeuXEXqZkLSYQzrn9bq9Niiu7ifxR952kW",
  "key13": "3nUvzfGMXY91tGzq7VE5Z6WvJGRAZRJcrpXFyx41YVkZ4BPqCBVweCwWxm4ndDx5Y3QbRZQbTTgw4jrLzBC8C9UF",
  "key14": "GzCBC6cmQifdjt8QxNePnLtcL5faax3TffZR9PGG1tWC76m2CzuFZCvAADuKCjkrqzWsEDeqcnGHv2wm93MT37U",
  "key15": "nYZWJEfAD37mrbQM87RbLLggBRvYigL7C4wtutDwjrBsXyv1NMNQ4TpKsPw2pA8Versjb3mZSmZpupd3MVz3PSL",
  "key16": "2Kdqrn1PnCLiMcYEQedS4FibF5H9DZLADVtgbLqTNaoUzoYwxNB6P34BPLaXLrBysHzj6J7tiFjLpg4ZshQug29H",
  "key17": "2THtdUdLrHWUVojV2Fqe3jKjtf2VMJogy4WC4hn9b4EqsBxA23F1t2Pr6oVnEmPdgvPuuCgLkEiSQfATCFnncmLs",
  "key18": "5XoUrdfL7HBrufwdNakzmnrh8etwwEyEKpwpk2rJXiKuhfwyxUiuEaxa6KJw5EXoNxX9y3ehQfdPFYunTYmNcoiJ",
  "key19": "4qWsbfd3kwqeqhmAB9YT2tepcweh8AhX5rBkoGiVcoJZ31f2v6XnLgGN1c59mY4L4GzcUNgrPzRMruUKqk5auLGA",
  "key20": "3wd5rdekpgNez2ej7t6ya6hVcFW34qbwpW9DtajreNeSAta3kXHsfCWpniKZ65tsdsNy7VmCUWBATDfJ11zJCbz9",
  "key21": "3ndHTVQG26y3UD1bp7HHJSFaRpFtxPS131HNHpEsoYs8DaNJVbBFJ8qS4pPCJuCqDp5YcBBSUD2n7BS87szKSmKj",
  "key22": "2tMQLdUsV1KqxoLV5La15jLkLrNriRE7NKqfWgS9QwqEEqRAZr1C2q4r3Xs281tbKhgJ68Xttj18oi4UAbY2Xdp4",
  "key23": "4TigrfFSkDPgD1YLqUVEgfoZ9j23nfQ4jESMywaDBhWuwmhdG4y3ivENRyH83C599ZFsaew23RWnHLrXucDbvNkt",
  "key24": "47KtnUiTPuFRFcvfmEJvvHkbgPsn5ZxkL4joFDXSwCvRKRDDeqWEithHBjmxb7fqXtR9YMQi75kHVDGCAWzzbWic",
  "key25": "3Y6esRkhiskSYi4aKqEcyfKRWTkYGj7MttpmBTMeyR6Uq29AZhD249wvsTtQckqYk43ZU6FbpTL9SRG6NvsZewew",
  "key26": "2rZbkRMjAqYPKDbLDxYhgTW2wHcTV5vCfa6vRePpq35KUttUaWK8P8WiD4arGmA3C8iYxNL6kcyBbie13L5ePWHJ",
  "key27": "2FEN9kVUNawLFgrm8GDQmvPPivckcoCBg6sbUxND9LkUgAoMnA8vT7A3qE49TdJv8LyX9NHSiR2pyym5zHvzkX6J",
  "key28": "SwPoyrGZYF3aGt2BJHMWdzS1FHBGEUrXbqyUW5jCiPM46BWFrXw7fo9xoVaGnrx21LRKLcAzwRoJwCcnvB1oAbr",
  "key29": "5yPZLSYZSqm2wTaucijm9CVQaJeuoKDvQWVA5wTEi9qMovnNPBwXPWabBDHRZS7uGnMZtsw17Jyj3c7pKxprkw2o",
  "key30": "2CJ3EX3bWyKtJYrcDVCZvRpw3tmaz3z3YL9u2gMcKSWZKogrUpwTeQ5G3nTjMqJtc445EeDPzSHvXADpyyjz5W9m",
  "key31": "5AvKUTBNgZcURaF3idMmM9aKdEtYVDtvYBY6LiR2FP3DFdVrkFsrsE4p9VyENhi95v95bbMySysr3j7FUpRGL5Wi",
  "key32": "4XgseJefrq2VZMjfGndnW3XVeJNPBocMSKq44qqTdrCUYj46Gfkh9fNFxegsJUsTNQP2Mx8A5CYrt8DsUXE1iRwn",
  "key33": "4Giu6ZDAV8k25BR9UiGYWheEX4CQUv6y9A8oQqNodzoH94ncBfgFTNQ3hNoSKUJJwfZdMpdBwcgGHi1Bhuy9tUS5",
  "key34": "2PJ5G74XwCD5XXwZjeZfvAQcHYio8V6dETtVQis4RXqRPZ4ak1hs2x3qxyMaz931bcKoUu6Wjj2YUEmdaM16YWRB",
  "key35": "2yudRjsNx2xV16KM56JQopgkVyfV87k7XgZg8UUFJ5zq5nMZdzqkSWryf7ZDTbcTfdY5Qq15Jjrt9MVFUxj2LMez",
  "key36": "2Tu51hBH5mKad3f3nnnGYQUgvb7JbSbWwojNKWDhS8DCJCT3bz5CqGkXzfFNwygbJXh99xWixnHS8u2D6j1ou129",
  "key37": "2Gev6WeV98Rr3jmPKyCYeEJ8Ec1bwHVsMCKUNqSrDe6nK9p315mbnpVYEUvEwL3VoqGcoDNiXAb94DkDhy72MNMQ",
  "key38": "3i7tqWbd2q3MSyqUKqAGPExyBaFzjRVy5fHpYJsAMBC6DB81kppFcLo4YeT4XoBPDAxio6uPBCzVF2CtEv8opURR",
  "key39": "43mLx14BvkYkehXVGnHfPZSpGcH4srLgVcUA7qFU4LNg9sPPYXy5dAqqucshgRWnqG85y3ikfxJV1CeVQRx4jvSc",
  "key40": "4HCNe5pSEJF329F5gGVU1imFLBRWhpYNqqCAhGSpoKvNPYZAptM3piJ8hDBW3AiXMRVhBJJVympBft5XAQAsfNcM",
  "key41": "5HPjfrzV335iALo9ibUtNyynL3UVYtVkJagpB4nPTZyWFw7TNZDaYMqTBMKcuysTpeEjNaAMACSbVXXCM2DV3DuL",
  "key42": "2e4io2zKv2eDkK1Sb2HWu4ocoRYsiJymvLG7EoG4d318F6KPkSKXB1kC3EAT917aFiqxaxHsvaw1FV64iaKnWa87"
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
