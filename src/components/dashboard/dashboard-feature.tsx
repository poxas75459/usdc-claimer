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
    "57eXB5e3NT9oYEavYbX6Lkak6YunYtfbA4JEWNAH71oYeb5NMzZAfvLLRh9UoWifmuY83BzLJGjSXXXpj8unwAnY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E4Lu3tVJweCJ6j5hNVX4jbP828pnjxPaus8QjafKzsCTiDCqgSeVWpNPYHFvGmfweDH3vvCidBWZFVbgYgbFRR3",
  "key1": "65LNbyEnNynMbsgaT5P4Uq7FiW7av3JvmLx9RZAoZ9AiDGFDUjE4P95BfgdxQMYS6sgTgyZHKoFuMTXmAXJJeRcR",
  "key2": "413B1j12idd1wdVdbzppKiMzm8J3r5QeeFZsRrmRYXmC5V4Gjh7LR7jR3AxNxHtHxeo1YBcyMXFqPcUwgkkvZ8yQ",
  "key3": "5hj9MW8b9qb5t5M7mLHFHLeT5GwJfUiHRa6ATCR4TXiddMZDPRJ3nZ5iDxYBGkRchrbt1SxEJXpsfzDk6AyD9fA9",
  "key4": "3DR4ZkRhYJy9VFN1C7iYii1bBQwLwn2PLC5Kn2mEde4K6dQaszE6jowmg96ujMZb452iWEAQFs8MzNWHuMoEZ7kU",
  "key5": "37r2VUqbH8BcNAnup9p7fuprh8VYUyKa6tbdFtqDfnxvwUAHCcnmD8SmETN48vfvyNm69DrfoAaizKhwRZQLug5Y",
  "key6": "3xrfqhGxYz4pTtbipifiaoxfaUoBRxGrzgNJWSJt7fxDLhPadrtGUYtVMJ8kDC92dmEaugirxSSx6SGak26q1ntA",
  "key7": "5azeLyUtJczthrEe9eegRm7HJV2wrgRBv3WMUMZomEzMxLobc7ii9reu7grymh6XJSWpmwY58nyhEq3VAM3SaCaB",
  "key8": "3M83MdsuEG66Uqp6M3me1E9wJUmLQPFfcSbWzDrxebLHgg1ZXjFtR29uY9z7oQFhSr38Um3dF6BCuKX5FfYoYvob",
  "key9": "5wxBawkymsrh8h2TEBGE8BK24EAi1Uhy4W8UcjUCEKcbY7auATpDFsCrEc68rSbn36Znc3XAAHLx9jrbgGdxvu5a",
  "key10": "GrTnZ63pJmh6WpFi25iawDrDkKi79fFYXjEFRGsSxK7j94qWbcPNUmBLpbTe7oWQkwHKs4SmC5FAzMRhjzCaKis",
  "key11": "22EuXiDDCYsFFhyjo2tnXcSdyH1b4uwpmnC6Sf85jTmU8PLaRwwBPLXiKmGY1NHgziF3QouGbBbq57ebYrFqTudP",
  "key12": "o2PcV5qWRHcswXASTK5YGGNz2jWm5kirSHTuTFRXVcKt4AgMm4tNTgyUJ9Fm1JfRm629SVwsJdasFwFU1cLQqET",
  "key13": "2X9wt2xWmXUeZ9H23csrE7QyFWTCjfzhoPiamt5gWa63i1uRdnCBry3T4Qih7WTYPkX3wTRGTJfHxFbZvJapWGD4",
  "key14": "B6xAq1KotZJW6Dq4bMtCk2Z9aGE7pRkf5sF9LWZgyVqp3yBWfe59hMAjRvVbSCSufjpc2Lx64DYrZLXqYwtb3o1",
  "key15": "4DB9d9DYBCcyqPYzELWNVbtW3YuPGaEMmJQDsUdM83CtXxrUYoGtLzjvWMXsPcmYHvJHcBvCtLpKJDsa8hPcdZC8",
  "key16": "59JBTENdXPVGzfaVB9wUUoiG9tHKneoPrD7jSj94eqLdLBsSjs7masT5zdF1oAWnpgBgvLNw2w279rV4ShSjpeps",
  "key17": "2dTxKmzZQWTt5ZMuDVBJRS13YuQaXeDf6cSrtrZCKXsBpXVoAsXQ7YNNyQdjvT3he96BkeQhzYezsV2kVjNDZAM2",
  "key18": "2wWvKGip1b41B2vHYJ6FXETEKQZBnV9JvcBoVbLPj8XPx8GNzQZ8JmhPYat428D4QBH4XvCpvvgeYDFWtiyxkxYh",
  "key19": "5kfD4cDwsFWJHUvsfANgQu34wZ4o6mfj3NdSv2oMezEBjuqLyszJhskdrPnLK9s798XLNG7RFUxqF5cqGdbbgzu1",
  "key20": "47ZiUpVyp3fF9Bqchx3cEh9CjRtgkFkAEB2G8jNiayD4C7vwKpeckX657sejDS6p71u9k5HrVAGoegYxyaabYjWx",
  "key21": "4oq2ksM7pyC79TJmRcijs1CtyFoq2dweFYkhavEKXBNhrcLBGRckpq2XXaNeKydqeo4gN46bBTGibMLzvPkELQeu",
  "key22": "RJJta1t88T2k6o8QMrNWzgB5pZrsGZcYMHyHMuA3S832XXUTpCRKcDYd3g7X7qefy2Y9r3x966ttBKjjLB9LJ18",
  "key23": "5zE9N5gjqsSDjRFzND4uSqnfcDZAUeFAKgGZLozevj4im2HyJv1fus1CWYU8zdubezdAcxCTdFLwfjo494cDYZNA",
  "key24": "2U91LJyHJtjxFNEt1GLDumMv4cCycgTzVUwWoqrQwxPxhfA5EvCa3mfQJZMroadqVmLdkWqSPR32XSq8BuUHAV76",
  "key25": "2DjRTqCp2fcwbxcEeicVTH1WKahNdMZGERBRKvgdNDoMfKxnxwU1aQwcQ78wkNmT8PE2PKzSAoSjwk4K5pkjgsCn",
  "key26": "23FWuDq97tRSorpiBiyyTKMeFh8MbriSJ95KsUw8CVa9xWqV6rEU7AWqYT2Wq76g3iczB6cZ4mmcVniX1rrCewdF",
  "key27": "3oFDxyf1ZN1tvu2HpevFAqiQQX85Yfc9kiz8iks1nSr4opBpzmX6a8VjFK3DJYEA7mE1U2jq3gELzkfr4oLRHfn4",
  "key28": "39r5nYoUn8hATetmRxWCWW5DAgWuicQCrLZPtKM2G4JGo7uqZPtEGz48ZuyBUzjviJ1cXvuwNFRVYuf1rpjbr4pu",
  "key29": "3RmFj4bSvd7THaLVBX3h8uBfouH4pjxFFYv4vCbZMpued9UmFyefnfD3LqJd1Wi3VGeePmgbesWsdz11BSwA74RH",
  "key30": "2DyHo1McESRFRGndxiudyTntpKE2SjiwUfpBRopXfzNwHHjdUKijWbdWcepcpwDyQdtbP2XFHGCPRBHVtr9j12Lz",
  "key31": "29neqzgvdc6PyUb1LVjpz26c8fDusu8WwKFQJA1WXN1EPb3MfV8dQdy1wZY8BUoJRbRhCxPaVb3Zho17r3eWrhRG",
  "key32": "2R6Sdojwq8guqV7MUTL34w2NE4zW894xYyMe9iCBmcJMH2v2y7kohddWbC4C8PE49Wk7sTokDsSiDzZuoMfaHAKN",
  "key33": "34bS9hJNQso5PWgvPz784NcfKexU5F8D2gnXvgQfP4ZjVb8t4CisAd22Ant5u3M9gLhY5uC8Rzb36n4xLCrGU2pR",
  "key34": "5DWZ17aqp4QNdhoDuiM3eXL6hJS3XQ885VMvEFHwk3Af92pW7y4mwVjvXpdw6bmkcWJWkXkKo4Ahd5MZD6UPWxHM",
  "key35": "4NthThBeun2e4PddHkTztBrWgVAjPjRydeaWN5DNGWVhjs2WJS6tez3vvHwwGoKfM4CowfPQijZoeySmi4xminqm",
  "key36": "3SC3rKXmwvX1Pc2fYpwS9GYxt3QzbCRtUQ8Bq8brT3AtcYqi7cTskfpCHzEDCCozgTKTzjJkvgdUtvNPQKc9SGxj",
  "key37": "B6762mBP9eHZMBf3YH7MeQ3kQoQxLq8YaqFWCR8xEw4K38oYcUan8vchaNgfwXRdBzVTgrxA3cKKca3NasxpoeT",
  "key38": "SctxLGhhHJzbGo6LmudY56oFN9wCx9fKdmGQnkZ4Pn42Cd6dFjVuGez5WNnXcVGsJo8FGdTHaCF2JuNK3CNhMNQ",
  "key39": "3BqZ7VWLFajqPqTmySPrcn4EqBfb726hykaNSaUqFsfGaEWMDHTy78Cx4P5vB2szWHsyni52hCKqM1Du9Bn5q4zN",
  "key40": "5aGgdAa5Txy3rycDsEmBsZxMUeYyiohRWz1KbBBN4fyzp3f9EGPsion3mnVtvwspxKGu8nTycZ48KsULvYKo2TDH",
  "key41": "38LuEvJBi5v4LM2jbwHjD4FWgaoYXYpw3xoRnhU6NjvgPp9BA4awJPdWppMFAQsPWXDxS9qqvrggGTQchu3askWU",
  "key42": "wvJuCcyQnS8tMNvtycJAC6bZ8VpmefFH8mrqiAiLUCuaghtzjgBdaGwdMRFLkqNPVVdbHEStz94Eiox2A5kW9Z3",
  "key43": "3rHikucs2k56CsdVHQvJjetKY82XqGijVSSzYzfZMs8TrZCo5JPiSZLfWFMWsRfhQbaGwNgep1Yyqae3KPqDZAX1",
  "key44": "4gUNxdZ2wRedg5JHZFL5zyTWi5UXFyWmUcE6eLL2XzcAXgDUxcipX2XnuzgaWykaXgGDrVkLwBWmhCtvxVvDWAJU",
  "key45": "2rL4QVo6ZzCMdvoiFcBMfsUQLosvJCNmDUVumoQDfjrk9qRQywoTb8EvJUNxscgjjuw3frn4pLpfTtqN656t147S",
  "key46": "37YFU6mYTwuPo6jJZadpjEdfPFnBqKvtyrd1yYZPBRBvwDSFgMDwRDgerug1ruynSpsN1dW8VEd2EGAzM9QgJJJd",
  "key47": "64TyoqNNbehV3DuHufZHtU8JiHjBDraq2RRkHQDMG9oZEXJi65aaLo2e7rJL9JQUFpC6ayF7jzJreEDZMnZ86g8t",
  "key48": "2GPGsG2tRYqi9nbVUDR9VMsvS6qr7Gj9DZm2eAn2SzXZjvz7tKnpXnpcrw1AwaZ9JBY7LyUqxzyjkWWaKCrcT5FV",
  "key49": "3J5Kw2BGGCBwBKoTmv1GjHd3easZfUQzj41hCk5pfJKDg4YnTJdr7GMDtihg1RTsCbdk129GKgooxYYUTtpGK5d8"
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
