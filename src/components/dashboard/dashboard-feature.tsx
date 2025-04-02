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
    "41sDMwYLb6tLBqjn2Tv9ap87zboYi2v2v58sJ6NhtqWnwxapt12JWBzbJgZKwnkPte9aG1gMjmiG9QtjC398Nmif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yPTyEvSqV2gP1wgXcioeNjRe274FxnyCaaSpNaFLjk7AAgRFL8tRFU9KJ6CfQeqgJpLd9ErDPt19RDdL4adaxYT",
  "key1": "ruuDwPkU8Ysf59WJEt3X8PDzmYZhSaq5iFuE6AV915Xo1ofFeozoxycLBnyQq7hnsqu8QAXH7rJMS7fKnVsE3si",
  "key2": "4guy5iieyqjNSaazaQYp1JXmtSqgAoxorWHE8gFTkUHo84iwQsB2eSpSo4dfTjPGCUWQZ7r1636LP7HdZwTWKysM",
  "key3": "5MkGPJUcr3q4CDv2d6cKjz6YVpH9cB8WAbQEzVWjttALsg1x9cav7GD9qe8vBNRPTYTzqRtXWK4tFf3sy6ZozoXW",
  "key4": "4uuP7wwzPVyi3LAHGgqqTxp6kyETABemA1kyeirFiKoBbNAKMBDcFccJvNqssPzPo1Zn716KhJBgyM1341V1gfbt",
  "key5": "4iQar41CCRpXPyJZJheGonp6q64ZCK3QFrjtoxssp9qtn91ATVfq925xuyBY7q4zQVhwsEsWX4pShd8uedpkXzPa",
  "key6": "3dvg6P5DNTZ1GooEi1EAncks5D1KqnKstoDDrsspmp17Xm8hht9E82cx68QJffanPJCTEZtv989VqeRrK2FwLfwA",
  "key7": "YypMZjJKYqKbtio7vKaHTWLVNruix7fDbXGYM9h2u4x6UoEf2uVwz9maYc4UhpXRZhwe4Hh2cYMzBctmgJ5fzgm",
  "key8": "DyWSgRT7RJhnVgEqEz2cfCjarNUE8HruKkhnNRLUH2j8AArzcvmGfYpZzuP9DTmiQPJkLCrDhxM4PMT1VE1JdpS",
  "key9": "4VU6mspSURCJkSoCiJfNmydcwvDJLRuboAWMvykVRSKj1QQK5fDN4uH699MDJH85XpmodMi9tvqmUoqmtSn4gCPx",
  "key10": "2ozVASqcVchbHXCcWdp1ypjjapyLxPbwHJpmS4Lj2JdhnQzBzj3eiQcQkB1vWcCTMWkb5E4AzKN4oBLZtpUBcZr2",
  "key11": "4mF6C9om6mSinbLGgp4Q9HPfVrgm4Sm8iUg7dzc2V73BM97UDqjBKuWMZjaeQzDtD9bE5yySu36euQW9xnVdXHPq",
  "key12": "5SLWJd6Gb8BtXgz6e5oEtt8P69eJGPQLwyYmp3MfBekTLSdvztnNFQiQb2qavwSJhfGWip888ZkWHLgCA2cA6gmZ",
  "key13": "4ezwFP5arXD3ieknyKyuGEu6XJN4gdSQBB2ZZXpLRsTm5AQgBLAiBg8atUNNr37CxWuXiRoaUxuaW3HqcDRhVL5p",
  "key14": "431zJMjhmhotUGi14hjfmUokQGEYvh9mCXwKoByRNupMKbHcedeVMojr7KyRAGKDiUn8abTzKFpPc3Zv7kDaPWsP",
  "key15": "3DhVCEmMcmhMq6KSUVXr1McZy8s21VfbBHGHM2p5voz9DpW8cc8Fk3bSMWHsyQD98QkvmZWXZy5EUX8dLVo8D83J",
  "key16": "5XzKcPeMnysyFUmW9F8GCDpnB4esX4iiVfXB8TBjFS5R4PKGW1udqmytEasS3MxE1fmBseb8hUa1oVSer746C1DY",
  "key17": "5Eja3F49quE2B3iykQWKiRUcZB43on2QAhBFzTjaMtDCbTYii9BqmPEjGg9czdsCstegsKN3PThBMVtDs3ABbNgc",
  "key18": "39iidMhWmgjqHK1CFSBmiKAnGUj9c3NrTCbXKVYPQH6n7GvdHKBZRf78wJPpwVn3LxFbbu9PBjoDPZxKCbPb96w7",
  "key19": "2rgTDkgbdbVustm8HroWy3ZA6U3p5mvCXc5Zx4onEKxXFYxF1EAwUzwBxmMaWqXVm72WrXqrAqoFaPeoL6q9grRW",
  "key20": "4TfWg1s1btxK5i8uBQLECx8opSD1P4sL8mTTiXvzKc3Uf2nBtrLQJwaVnun6YDSzi5B5ha34HYJCm7pWFfGREMsg",
  "key21": "ZvwoQhZHjGXZkBcGmB2gbD7T48YUidGJdhUfMSV4pox1WE95wru8tSHbkeZzgSDCRuPYdkvKWVLFS2N7dLNnYK2",
  "key22": "5JfS1eHckjnmr45xaxgtLBhvs8zDLjuLUqihqvnp9rjGotDDY8cBWwakiMzKtgxA2nbbk3qS9GLvfzx7RuHKvGLk",
  "key23": "4BeheWKBMMDb5d2uqihfgGDmEfQWFeZr5hphT2ZLZeqRZkGgdCP35ghtF2AkujcH1KAW6Yaxnq2qWDxH6yDZ2m9H",
  "key24": "2acdFU6GMAYMf3D4h87d4DXKsL8J8E1wq5WYZrofmvTCzo5chQgPBMXLofdPjMWm3bBdZ7bmMh1oyuMNLDjSP1ci",
  "key25": "5k58ww3rmxvqfwgK9EQ1BzNknmDagrBYJS7DpkHaF8H8Zu5Vg1FxZFv5964Ai6asKNB3di6822tinoH1eBNRAvGF",
  "key26": "5KJmniaZsNvRvGjr9LP5S3mVKAZuTGA122e4TX8qatqyZnVBX6YZ1uyDAGUUzCT6nJzo9tf2WuhYEQwoRwxCuqVQ",
  "key27": "37sDgpgGpKSt8Y4sZ9FwxUskiwiDDn6iExHBEmF57vHxGWc4KnGTqfFEys7ojwNDgVc4ehC1axi4YRPy1pish9da",
  "key28": "FkL8opNkWA21LFGjivc5HX2kGJfm2Bav7ECnSQzirp7cAiYRJPXAJxhQ9DXfYYkZing2kvCJgrU71yHdDkWv4iB",
  "key29": "2xsW8PQPFyMdUHM2Lo719tyz1hCyXpMHL5HksLodqhpfquLigTHGn54WvDtLv85Ad4wbBrxTKMHfVcc7zs5b2vNL",
  "key30": "vAHsEe84svLo6NfBBhqvmTT97GMTK8JqwDeSaog6jmV32th4VrZo9hhvUPLfooqJ3eqSeinB31Km3TuPp9GFSmD",
  "key31": "2DEwUEmUDG26scc3TKwwydaeMDgwh4HYjZRv2dsyNYB4FwmNFMbeRAxzidFJUXK6BXNenZHpdGxZzfC1TNmSN54q",
  "key32": "5wLqCTvKhWFb4zNTScLpSuw1ZYWEMtc8b42ZwsF4ekoqsy3NhJ1tDRjHEn2LpMy1jgrc6qgNHdwXoNUeRCqoHtYw",
  "key33": "ZNZ64v2ytJRct8MJGJyVFe6uWsXKWA99Vfncpsgo8szvApJ7oXK4BMtnMuPzYUC5eLsvPbSezq3qSYScdkAy81g",
  "key34": "21t3uj2bCrFnykRrPjpeErPVvdW235CSr76mWjAghsDu2VsBsrq8GSwN7e4Eaao5L3jrsxEFEM2JhSu6AgUHTZ1i",
  "key35": "5DAWPo47ANhivbxRdPTx5nad3kibezmCi4PHmoDyb2NLGrnPXxuaCewoiEhoLgKxvKWsyeCQsvVgMmV2iuh5YUUn",
  "key36": "5PWkpehdEXKhdTioCnGi3dT8PYuQJZjxtg7M6Ss8NqpWzBYXJGFhH1qf8wcmM7bEkRwz7cfW7mx2vWQtCTMgjb5d",
  "key37": "ewYTcjRavCM3QidCGyD4mCJ1HKUqDibxyqxqQoJCjLDBEsXTz3V9zc9XLNg255BMz7AvvKj7cCThKkmMsxgGLA8",
  "key38": "3bfogfDKDoL6iep6Efeg1pYAHjnkoJAVqDfRouV8wSuH4rQUFya5JGjLMsdChBBcWAnwrQspRCuA4iT41wRAKXN",
  "key39": "3iS69hjTUG4W7AiPAjWzarHaJih3hbWu9AGtng2ptSYUCK7DWjdkWRnJyfjPmxqtPPFdf998zwiRJJVTqLdsZ78X",
  "key40": "32yeuPzf7UiDGfLjp6S3CpdZj6Bvw7AhtYvSd94z9MGFjJMgkJWW3E37iGKd1qNzaUZdand8BkC4nAZTXEpKRSHN",
  "key41": "3v1uim9iidDYaHM14BHRSjHmBZ1tpJJy9HDJR4k3zUwQrYxeGeQnw4qNX5tg6BfTPnsTo6MXa99VHRwanqQrPgHY",
  "key42": "3xRYU8gqAx7jGLF29KzUfZmwL1S2HcpYBQ5cJscAPxgHnMQrXCce76LxPi83HtoTheuYjgHERdAhjv9mAPXhpeuV",
  "key43": "3hQnsfQyMDZHG4TbX9aGoEMBd2L6qRVPP76EyHuS718dGqoUCrUnEweJUV77j7moY5TSwcWxoepMorEPHSsFXGzo",
  "key44": "5WFDca5JxgAujoQeAWsWCS6u2vvneZ9wHQB2BSUYNUMXQW3MGHQFe6nSStxRCjxMtsNVC84EVjS4Z7f7H9qPM5MV",
  "key45": "26jFRT4SZpDi3kAfcQ86W31Y8n3o2ia4rrdKG85RFot8ErtycUPsgX91czFQz6QHqGfX7NYgA6tgHcscnkcEg79J",
  "key46": "eW1iJotAm8f7GxpwGDd4RdEPBnj6JeDkzuzw8XpHjqWdqDzezdtqdNZj5d4u1kqLHQC9ZYZsmDKKQtYwhxZ75S5",
  "key47": "5CN5CDXjxthnuzJQzywRJNTDtBztmmoiGZrjZjLxgWEL82bFABY7T8Luq6L8asatP2W5mMUe4ZkjxR54Ytt4Gvbt",
  "key48": "2U3BtZeC2p8VQC3h2Sg6sgdSY4FaULUsDWxXDrGAPMosnETxZgDPDsEiuL57mQvvkqeTzMKcz6uCLUTvAtXfLqDU"
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
