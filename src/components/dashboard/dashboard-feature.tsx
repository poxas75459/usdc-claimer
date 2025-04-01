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
    "63Vvq9nuSUqW6jVQASTvTcjgz1K1iUBbZtM84WYq7Uws1daZuW5AVRYZw7idBKUFkKw5yyn8d2M129gczsqwBt14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LeYB2EX81yrD7GbVZQnzfgaGuvLWGBKnxoWcsKV8XVqu7MmGyY4K3CwxjU2CqvJiYRDgJQaPMmVSTaYPGMcx7dP",
  "key1": "55dqW5v4NCNfGtVZfUe5URWTLjNqeRrF6AHGFBrySAth2Na7Ypu7rwapJ6rBTBF42JUKwSkzcwe2mzz5oraFNgha",
  "key2": "2QVwVHVDrFqqm3awnQH4rhk975FsDLWtiXhWZRTgHt6XafSvE3uaHLCdWyUyXvZbenAC3kwNybQhaYAa11H8zcyB",
  "key3": "4DEoWGVFECMNBY8mDJEJD95BSsNmKycgFXy3qbytLve82ggkbiM3xJHGC7AgmnYdirK1tmRJnLnrPmUK6apf97dF",
  "key4": "zHXeugRx45CHa6MutQZ1yjVaSoqXAEuhacujQymMRKD3GkNVZ9cXhwNgfDybTFAYGwHxgvWJyQK3wEg4HLyRiKu",
  "key5": "65WWG3oYLcPLJDA6QCiXeT7B6Z11ohNRehYp3FD93CytjMPAzjuBA4Ea6fzaBcBvgczwRgX2f8Kmg3SCsiu859No",
  "key6": "jyXoXEQFLv5h6BvwU8zPmYjbSHdEoH9FoCzdDnzxjmcVxVTFJk8M516im17dDNXJ7t6DkJrETHcoPGBZb5XpkUV",
  "key7": "W57H9xjGM1C14V6qem5qmHkBWWhMcEgQ9DknsmUfdpFv7dVddmjQeofUW3uvPPHZSY4s1L2add46SUSD466EwKa",
  "key8": "oiLzvzQ5ArjZJqZKYFYjpQ9EKUXyZWEcvxmtjLzRemXfRzoopPS9tBp5Y3FU6YW1WcpvGWcsr3ZzA7MtuRnwUAc",
  "key9": "wjZcja3xmqa6Gv1E1BMGUQv1wn9pt9rf3vmuBzPzEjrgaAo9ykjNTqmiwet3xxW3wZFNkTsXqw7q6d3q6jMpb2u",
  "key10": "32dWRy5wPtu4ZhtCr8HtcVXcNL5a2UvTBTLkH1WHAi9YfixFAb5mbUVBtXCPBCaVbJBoAhWLU3PVtqUEpz8z38q",
  "key11": "2Qv4pgukJu8iefFqkq84J5QK8k32Jq9EBRyCMfsJBbyKF88QP55GJssdbtVqUE135zjn9uj4xPK5VSkm86jQmPjS",
  "key12": "XvEh56A3YSLHQaXR1BxHj54xBzXTvwjC747DMijay4XF3hAUuPLBiZ8wdGiGURK6BTDMm1CsRQgf85z6JSZubAo",
  "key13": "4s8addLuzAHHPRQCSVUcVKwqH1BSMXQWtAgcG7GKriwv1jw3SfBcCETTtwreVpmsDBsoSXC7F3Ba8mqSGzG6NNhm",
  "key14": "sUkpHxhXXx2a44KFG7C2ZSY2t9rc3NvTgfVzPu5Q8NoihBd8YrFC11eASjyG91x46xGKFxWCK1f55yzjWGKATwd",
  "key15": "3BjPdgWMcy31YduUCf7M3xF2PQGgpRRNXXvQ7PZBfZwqNuWcAkhYTkWx3VXRPqYkRphKnz3yFjaSRDuSkDRnsHSh",
  "key16": "5HBn4yCLfsC38nkd1fKttPV2W5uAoscfEJmdMu2iLETtRycWghzrm7L1XFdvSAkwGe8RVbroMvfSAboajoB9WdNi",
  "key17": "43VvLvBMKiGk4kt9MaUJ3umUnZUBxLe99Hb2oRJLnfuo39Ejf34GuZ2SCiVv3sgJPLwNta5EYXUif9EbFSXVC3JU",
  "key18": "3JYpUDTXXyJLHLcP1fhfLydapg3jDWggtUn4MuZR7BWpzVmyduiYERM55uArEYJSz3YRxZLnqSGJeX7ZoJ2T6Ark",
  "key19": "Gzd8DHWd6581e5br5HXF3mkJRUxH8iLi6t9SFAxhmvGguGRJr1Ma3G5xCsbRaTvmF9ajN2D8hZyPEkvSLj4Njuo",
  "key20": "4SZvWwUkSLu32RgUNsPMuNHat5PDXZAY2jsFoRWJ3d9LajLFY2XkALwCYr2nWHHqiUpYimQXYG2bAFEy55GZaTLX",
  "key21": "2pYcSZAP75UpZyonf5TQphXSgZfdFaj9CP2sqBzAZ4AfV3nAWbm3uTA4rrBHmXXq9wybyV7qWokdvtr96BVWuwCV",
  "key22": "tmjfzrGEfR9NyBJyscgR9yog4bYyVeB5zFekdPQitrK3G6cXpPp2GQDkxg8pyEAJMe62rQJVaVLL8dcZH9zPkj9",
  "key23": "55UJmcYn6z77LVAKBaUPMBNBwrnM9V3jCLMHs3k5DXGeA2ZW9rTXzkdrsHLaSSFpEkG8S2Ap6or5fD72zZjqpV3r",
  "key24": "ka2g29cSPhNsKB4H1FtSMAToSVVabSgS5HwLospD7ojaMqv8KizpXcD8tZFVbtYcd38EeGGDc7yu32aoU8heVf4",
  "key25": "J2Z6SK4AdmrehrhCXiTRBFeqBRmsE9c5V5XvPiw73NNx6MfkyscWQiy9LBzoxATG66PobG5VZhAdkEuWXKzpCMB",
  "key26": "4nR1TPVhHMPgJ1y8ZPnhrn57dfCguJXd9U43MNX3vcaVLAGyUsYQn92EQ9YbMwVkGVx6uCTJGsC4PuyXhcufSc2r",
  "key27": "5J1b1ZPjecW1SnMEcEUTNJBYq9NuYVCepx1NbBwEdZL3chdjdnUA72Qo6enKuwfvWHJ9w38x4Lc6PSUQGjEW3vdS",
  "key28": "5TyGkP4EwM9tNVVZxqScdLJers5DMU15Caia1MWdSQD55RM5hm1ACQVnWFNUyeHFLnkDqWhqwxrHdbXtvNcUsXcu",
  "key29": "5Tw5XtgY8P9X6a5FvzokFRQxSaqpcvgawTDFoC3HgFFzca1nh4nxD8MUXU3SrvmSNMQpnMN724fCnFXLzbmeBZDS",
  "key30": "2ZwvVJY2YDx7WGwi8GT7uzaDFsH3HiwPSg27xwWh8kZfTEm65rk3RG62ADeyrsLJSiQ8SqGeozazteuL5G7ZhcLD",
  "key31": "2okBzg1pH1SYF5vbJA2TP41QDhi91KY3Uzxk2hp29xE4p4YCbUDHGmiWE5SGrCnJEPb5L5WeryZ7F1bqLw4aNT2p",
  "key32": "493sD3QaD59L8BSc9hi59kN4KGtFvGnUwWkytZDGHsezWvLaZ76sbkZacMW8etWLk1rmajzuSpP42Nf95kD8nEEB",
  "key33": "63QMjojaFmmAvR9fwKMvq3NiBn9eFsbzvHjZLLb86aUrxizpUYHRbNEvdijcpUwuMs32VjNWxPKnX8UToxxYqpa6",
  "key34": "4LavVWUz3NMbvfAn35cNG6Y2in9a8pBRw5q3YUrkbb92dhBdxPPBi3d3PQM2WbeteUiGABpty9RnEUJmsTmetFvw",
  "key35": "EuaAbADPNeGsHVvkNWLrDDyYpZYapBQAGeqA6JXmLFsXAPkBU8BrSPifBix2vPpCLnKJ2bAjDkFzYQhUTZ7baE5",
  "key36": "2diZD7DdP1HfrNM62mrsRqEo8kr2AEbNUqKBconCF1SF62vxFAD5eFE43Uqbf2Soa5FCgacPXyjAMT3WS8kaxN6o",
  "key37": "26vkcCiRcYjRQpzCzK8qTkqtEjuELDRqhFYDfywtmNfSZZ7LtywCLqrvo4qcuwVJBwq69q7xMWu236Sp4cbAPfmb",
  "key38": "G9WNwVCqatAHSFcVJZYJHNR4GrXzJ1GvETEVaCxcUAKA4SKBRXtDnHphDeMzWLu3Lb7jxFsQxS91SLNJ6477VHL",
  "key39": "2UMaHunuQdJNymyAStcQ74Bne13LCwRnEMcs3JBrdZAv8ucATJRc3aNyoiGx77GN7EESwLNKEAgBZvv3V88Scce3",
  "key40": "HfZVxyDkTEY17GxwHhTDdZDhL6qdc5pkMtYAapWWpmapFex8uDnKaqqYsGkSwAFXvLtWvn4ABTUQBodUtVzeFK1",
  "key41": "caktfmCbUDQjB3RAeM5GD9PaGrHJ1jC9BsVRjxr6mcxMMNt2ALcKaFvDUA69KzAkr7GMXA2BfsXuCNcYCNVqAai",
  "key42": "652QuLUaezWRqxK1p2nhpTzZsvsjWKRRjVDBQvvAtb4m2kZ86Nx6fy7BPCViFd5voM1BK2efbDbnLq7QaGiFozwT",
  "key43": "3BVNNtN5d8j4fmZmx7gwMzhL21SHrbHjySVKWWwFCdqRg9AQkTSJ26hZW132Nb6Mo34VmbxUmBNL5kQSKRDpddu7",
  "key44": "5ipRb8VveAqCwuXyRU55Dx4LVsrqGubmbtec68qGgrSPovXcd9H7JrqmDUEwHauqTabL8u8HBfNrmpbRo8aoMdAe",
  "key45": "9a9PZJ9SGYkDdP86xZ1G3ifoZ6yDpzP6Qtd4PMQqfuCvZXfmEqxx934B4aPBY9brfuPD96CG8vE7b1uzGQiYNpM",
  "key46": "4cxGyTWshX3R3iqZTJG5YB78iWjfkF1SZD32vCfhZeCbFnThRBqUwXsgUxEPHiuwLyY1ZZL9JbqbKZyiNASow8MU"
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
