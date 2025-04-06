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
    "37YhwtaQmETqn8prNYESzH7ejFPso5sNmqsUUi4Nri81NGcydA3of8rqNoFVjT939V997QifZ82seL75PD1Nm9wh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yEF6fEqR1mbp7KjJ64JB5rQGubGM5Hf8mfq2MGQdUmwiFi9ikCHozEjncrcDYUTDcavTp1S8FwvPKsC43xoBAEq",
  "key1": "5aHh662aB71wX5Y4se9xuMA3tJrfdAU1LXKHnEsmsTSCmqNd1HBb3vrm9FBW9hxmqfV4Vanoirep6EsxkniRp6PF",
  "key2": "4Pe3cYdMNZhZ7N9HnVJCfMebjJ1Pm53G5JjcH2866yzXU6cxU3WQ72spoGzsjdVZWSgqPs8wNNXYVj3JFXySFE47",
  "key3": "2WpAjRWhzkYi59C76QK4StgcB6KjY93FyX1692oG4iK2s3zQwhtf64S3zXBWwiMaeFxPUrFSXj2HZGEKA7NBmZgU",
  "key4": "3j77qFKmGrg1TWWuPTBKKky4s8cfxnesumx7pgHVvAr2GnQPeMYnz7RCnJYHsHWXEtQUVdaiDiRsBdj2PXXYQr34",
  "key5": "yWovVtqv3weUG1UTxYMDZH9R9JzmG8KTstXD3gFUEPZ3dWfujW5Cq73xCpAsFyCqgSSJHMjDQPtdufYP1CToH7A",
  "key6": "3Wnuon4SpEwLW3Hkyr11wbeLhNpgqD31hDVDPP4D7uqaHE4Rcfag94wvRezRrnENx3tjqYX52rUP374nMujKZZUq",
  "key7": "5WZhaZLD9SEFnmEQDtt25kJeDnqW5A76JcYQPuAjVx1Q1uk33WHg2BUp8Hm7ioEzTC9bVgwVUF74wEke6SSGX5Mi",
  "key8": "5SuKSf6ffJi3NSfFdCbBvs9roDJce3oFMc1iD6fJbSAuZ3xCD42cqYNbuygwUah9qN5gdMjxpPwXqepG8Lx6uz5N",
  "key9": "o3Uz78fsxu3851k1JGqQodwZAwGE3bGrJBnNKDKf17zVB6KRXc2Whce2nf2iZFqURGXF7ycPLWvPwSrNxBiGa3m",
  "key10": "4G53dNwXy6SyuY5sYCPutYyBLkN5NJAZje4mA5QB8kif3iv8aignZXBo4egcQodysxgFDSGdXCjCh7Q83oN2Lt6q",
  "key11": "2A2uX3AuGKmSsnw2pHmMcveCqwS4aLEz1piqH9khZzWHqQq1DQH2FUTQRN9jGXyy7dYq2Qkhp3GawKjgqjigvgQh",
  "key12": "5subEXUDbSsyV7A5HK6bvyt828D4Y5Mzw6GyAoGuWkrojhyuifJivmuf2qjNjZiT3CQ8RurUYhshFq92BcjNpiS8",
  "key13": "2XKc9QJPyb1eRr527Rzmky2QXNFtDfzUtGtyyjQT9pSU3UNAAx8RoFXFjuwjTP3m6ny1D8Gt9oL7rJDW3WuFBjnK",
  "key14": "NnW9iNhM5dMez7AobRSswAAuQvMtgqySwNt5VQ4yu2Si1eV1K5G5CRFiQBjdT9ccYPm2k7owjsSA2Wyaj5GDuEk",
  "key15": "56YQScMjtoUTPs1ePKvNrFHVpeF2bQPYqe2YzEzZAPzkdp7SiAiMphR3H5Aykrb9cKC6FcQaFV9cuxuLgiRJAKr1",
  "key16": "3jrkXM4kC4XVbrRwHC5GSBvBoehXFaFPyHJJhc28eNnc8tRibzsSmzuzpLnqcvycM5QPwi1DzFMc5Aoprj4272LF",
  "key17": "5iM1fPGNPy2q67UBijGLi3D6k4kDJjypsPdVwSi65YcpUrFTs7upVoacgpdWnyaYNJjBL3tWzBZ2X4YvFzjLDAJ3",
  "key18": "3KyM62copcmquFeZ9XuZEJURQDjqmfHqKK2wqxqchkuPmvAdaqM8dKD9oXJRi8wBCV6NHrPCwNGFzALfH8Zjh3kQ",
  "key19": "5FjgeQFzDFgJmUbsDAadA3fezAiz9kJycj74CeyGNhDTUW8XPqdQNihtC2Mwwk9qb1KUAHxQzpeFsqUToxsajKQF",
  "key20": "gymV59NC9khkTWrduShQmrcKuedhJewmQMnVQJqfJhWf2pcqEzoFng4LjB4tjzuq1WmU2yv25RzUFKfLqEBeNQu",
  "key21": "3dQUU8b2zKEpx1qWCBHf26gMzcQJBWmKo4qMCU5LvngRqNW9r2XDTdi1Jx3hbvRuG4wVCTEJ17wDuNPioGqLDT2C",
  "key22": "2mSwzpAsw3Q3DsDz31LrGnovDLQg9ecfFzq2jqyTnk8LmhffMW4K1D9NBcE8dZzvU2AfLmBpTDvajNL1iCGh9pkJ",
  "key23": "1DiBPGsqYFKgam6tK4Hqgb2mz2Q2LQQAcDcdoxDM23BGsYx5m4t6Xv3XMT4kBdyg1RhapFrMUvytG8eavTgMzSC",
  "key24": "2t6yzQxJf6M6HWdSisyinHgtT1crys9FFo5J6n8Une6HLXmJBp5AHUquhov7od6CjExpvvQJjmNUYGpyxXosYKSw",
  "key25": "29VqRqvVoamZfEATVzuF9mwpoGyrAVxHNEe7GM9cT6NyLvsq3SoMF4D5yXaM8NiYy2TDgFSqErFMUEMQv4Etb3XY",
  "key26": "3vUNCgm19eeQkz92fSFgJodTzL86o8s1o3P3Gy5kPNgxVkFREwYf9JuQeGdSoMFGgBvF5v8sfTVAyDF2Uf9oRnZC",
  "key27": "tBR2KVhGiyTwqi8H8ubHxyA6VZ5prxCSVTpAz4EHSMhHHP9pRwTHwrx9esCbJFvPE3YDAUftCP67sL2Tmtk1Tb5",
  "key28": "bietakgJLUCt68TXbcGJig9KYvDwjK5TvMy59d77xZ4VXP9nGHPrCsTeA1TNuQ56hHdyHYXfWqJ6u8oAyiXNd4v",
  "key29": "3BSTwqmmtk7xjTrjQrTU3NHGP2Biy9d2PZQqzFYHZ9ZJgrFRphGDb3qoxHnMnwBo5KagbxcCKYnFXFPKUX9cT79s",
  "key30": "4XdmxhbbuS9uBTjJWsbKwtyd5zZAQB14VhUKfYSyGPbuLR1B6d4QetaGVQz2NsnociheDQS27RweEEXDCUvHrJyp",
  "key31": "kFUdH5DdTbXvKjX2Dfq33B3KayeS4JEJSCd4hGYEVicMJ3WLntVRPmPmXFdk6k4CqE7mEuqWmp8C2uT4j7xe66b",
  "key32": "3ndTgLFt2MtvjNYpYEZ6c4momQ6c8MqdBYr2tVjguRYo3EaMBtezuqehKYSujS8scZoqq3C3QEbMKWEA3Jc3r4bZ",
  "key33": "67evcV5wSNxgeiysCzrvooUe1zmLVavfMmDsF5YrfCreRp6DePMkkChhkVpraqnqYzsfTLCfADC4ve73bgQWWYbh",
  "key34": "3ncQB6rLvPnG5xLTVVsuN93nN2rk3TLDPimKpyqse4CfbEFzP8CudUScWjK5styk9HPsFjLzhERFU1Jy1nVBjU7U",
  "key35": "5ursz4EKZixYLW24GGJg4Jp6coV1zHHa2JAjPeRqG2u7dQrNj1cN2MHcnQY1G4AqbyfFTroQu3nCeWrk97X95nJH",
  "key36": "3i7fDmrWsdDtR1275dSZUh52CLUpY14KxYNLK9NyNCYgUyAW9zGijtVQWMaAHtiq9Vb7EUFZnvLkBh6wh6iykSDx",
  "key37": "5cU3KdaycdnUiw2Kd85ScCzRr76fxZKmYDigvgBLJYNrzi6aMYjnGQ5uwJAPQuRANUNtPM7cLtbkWH8RyjbpmrZE",
  "key38": "3GKsHTRk56FB5krwFeyUKmUSsWLBdcBvDdeSpLQnBebG8m3q6kUep961NNdKKMhFVC6zdLsMNf7HLzbdSVtFCsqV",
  "key39": "2FcQUMCJq9dd29VjW3VpSmN6rK8x6CgK5TBrGw8HuFBpt6kVJaw9e5ZaVbPv7i6zSPi8HyykJCj45PTAK9THmByN",
  "key40": "2KHaKdEYeNuWZgNS3KSsL9P1FLyCwaUBveT1zK9twYBXPrK2NdYQ3euRED9WUeRYfgK7rkX8MMBayqJjRTowkwq3",
  "key41": "2SoYdS8JgvAok6sGCseaFPERSyvF1gc8bukHVMuVVA6mVSHMGoCZbwSYem2kWetvNjXiNzEyRbdo7Wct949HBWm1",
  "key42": "2w1ni3V4pYAYwy3fZkE8dEY6kjgyJwmDeyDWroMYWKxrqZoQx3K9RGXH1quBRcDCHRDjvxSspynnXfK67TtjypYX",
  "key43": "3v4Bb8TRwYWw1k73Ms9hV8e6AaSRaFkBvQxe94WGYENHeJXozLzaniamoQT7tcEB4ifAEe8UbxEnj12VFz4ytcB7"
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
