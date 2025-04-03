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
    "4StWAZnd6abTR6Y9LCZRqL6WDVVa9RHyPnXQsxfZ4u7T7UFH3Jofbd6XqosQjVtJh1BinePx4VueBr9pBg9THf3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BCPtBR8r5upY7T419aXzmtChVZzV4E5XgP8dzxJSTF9FQVuDZFb8QjzRj3f5u9Y2MFz6JaPqEXj7rCdkErFR2oM",
  "key1": "3WrDuPGVXyYkFs1Q7DHtegyrsbE2Qqfa3qDqYtGqThJAgf1VqfrsWjseDxRv6pF5GgLMKix8X9P2hb4ynZsfc9P8",
  "key2": "3scMpU2dwQokHAbQAUmqevkZPESpC53STvtGDKs2hEfvrqKDn7L1sMyuyBxmrCXCSEvJxLwJVsK5Y4soahe64AkF",
  "key3": "377LgHcCJmoZkJNaVLRptMZKZusVvS1pGqanBB3hEuxGsvHGSJ7m9L8pA79WaSE58DHNHk8BpYyweBmJhhWnRBQg",
  "key4": "4FeYLvL5id3De2752vUxZVzc9VE1fKZTgu63VwLkQKvKp8UZPVea7j9XQ8VeHXBBu1b57NokXF44WqCh5YQvV9Cr",
  "key5": "5LFFSWmXTaMdPNdfmwj8kDjPfzXYAqqTZRAd4kiC5TRWXsAbhAdee8H9Re146trhZqeN7yD4PDGzGRbYsJ62MRCJ",
  "key6": "57nboKURHLr5uAEZfSAdYTixKeWVnKKBRz8hLhKcpg3L1p2x4WN4ZEKSg2d9JuTQn4efmCrjp8D1YaHdoHoJHX6M",
  "key7": "2G1w9CQ62joHQL9rTDLXa4EMvaopdsU7Bmxe6PPFNyzPRXCX9HGmvWp3Tkv6EpGhbAyA8uvTrKo9CuNGm85Qq4oo",
  "key8": "4zEVCEqG427zvNjXoRWuj2jPR7BmBDTUwdjAtNzcyPb1jWrNgDEB8RtZXmFTzZfzM4VC67zr9sFdQDuaxJkUHorB",
  "key9": "3w2rzuRvfVbFRW4jnp2dgSnoSAKQYEGKZAgP4QCp6NwmXaZL75UEPFtZujDdH8E6gpKe8nzERnPo1y3mLbYas249",
  "key10": "2eyF9YmHU2pfVdfhrbE2QJhT4sCz4XShUVMHrrAGEmuYPmE1zqpcFpSePqeo8JAJa8czk5DgcVgmxJ6GDSPaSjYB",
  "key11": "N9T9LhSpsByLdxyvN4f87193ajLi1mhEBGvJMLUqPCeS19tBz4cLupPATcPrb9qco7rEdLJjr2TARQj9ghgP8VR",
  "key12": "24pnPM8FmuRDonujpTsj8xMUr2Hq8rQyPKknSZi7u2k7JqU3FzAK7eHtXEzSt1ZKcCuSHVvwYEPhA7f2PsWJvaKP",
  "key13": "4cg8FexWdChcg6prYoUs2Swj73vLBPPY4DbG4jN4DUAqkvz6wGnqxwHTEFkLSB9joHWGFQq9g86f89nGJpEex9uv",
  "key14": "32ih7dZqrXmSF4iaYdfswaHva7pQSrGHGXUFQA5dEphG33vKsthmGcUuVKCKex86hirY3a993AdEUs3eZv2oPEQB",
  "key15": "3q664KUu5Pr7tsXBmZP8SNgpZW2VqbXtucCxqrqAFifVbBCP67j3oXziSzjv5HNW9zAvPeP2wjneg9tzgTxHhgJq",
  "key16": "5uSSCDqgjf6Gv7uwj2UBesnmvYREVEPXNLmrqNTXfy7MXF8HMZfNHCHG82v868iHquZDGEDBxJK1KF8P938RofMA",
  "key17": "3QHSCuyNap4SVqovoUv2o6gKZbpwrDMZMkMu88LLpWtJspxzU8ZNNWx7hFWPt3mMeFJvd6UQRPwDv22XmanqVZwn",
  "key18": "2KnCYB7t9M6cbCb8Db1Wgvf3n3rpfEG6nhQv3kY2ZpKw8t1QrzhV9gtDhnkdsHyfK7CLB1YtmrB4Qx8iJY1CCnAw",
  "key19": "2sdvyJsXiitx3kxRXfsfmFQUy5qdqmTZKPFNmtDUebEivFcRf2cJj7kVo46mEdRF462TnJVG7BH49JxswTY31EyX",
  "key20": "4dWUUEkb6Fb8fTcR5tDswqUaKqMTwfvNZfCjA31rCU76hFJaMC41uVV2aaxpsxKtL9DXstxfvCjY6z6Rca1ZNXBU",
  "key21": "4deDU1BfGJa9k6X7n38vqkz1SY2tZirCj7mtF3GMB4kYg5F2WHbUc3dmRFmzZskuw4ipbCqxcNK4ND2UCrMBjcT4",
  "key22": "7JuND2zznuDnZTvVojcf654itHqF92vS3sZjUZUkNKPbsr3rcPkbWngCi95jQHeEskbwvTb5Up3PmcS2bnLCHBm",
  "key23": "Ee1heQb61XednbSj2Qv8GNUnL3GfL38bWEC6A4R7nigpNuENa8dgr8D5kDkXAHaumQQJuJDN5u9gowyLKuiUT3c",
  "key24": "2pXrVdGQKvpCqrvjxkExA9twKG5Q7p5U2mxF8MzZyEx7UAmfn96gyaKKvxX9CgxepKnLPypPwowWMmMyU1BNGM2t",
  "key25": "5k2genytDxdusCPJv5bLNBskS5ryBBHrK2i1FY8QzN2X6U1avFm2SmxMvLysQUwJiCnb6m6rw6qwGho3NZQnAFed",
  "key26": "5L2fadMDovMj47BPCcqMdjcaYFPxhG1L6mC7e9ostQHYvtLc5pVx5BzvQoJyyNsUnAthz7zZRwgMxcPAUhGK9CKM",
  "key27": "q1q5ah75oxfEdvoyytgddQ2m1BMNQ9KeuFYLDzGVkx4pRfGSPfF2uucdwPQK6GCQLHbiHvCWm3ANwHTwqrG1byQ",
  "key28": "5pvyuWVufVG8ik5KnnTsoxhms49C35em1g1jaRsHfr3eFDHXt8NHEsGGn7RhboHEkgwMCZELMt6ZeLYSyqbTTphA",
  "key29": "31LQquApfPzi62wtJa25MepT74YkoBoquspMMMqDMicYmPU54EEqgQ5M4cT7JdLWUcf1vRURTUvZZSh6zZbqniNu",
  "key30": "4uCUeyL9cghWPi9ZRn4d3eTKFHFdToCfMoAf2BbgRoRrLQ2pVSGjpzb8Pd8shDQU8MN7FHnRmdF2zx3mK6zGPNxo",
  "key31": "5hq5z1qp2ZomAFBV1kp47mC67kv9gNYX3J49ujHmoVR9nKKzAjYtTXM1fAos9GvXRsY5iZT8y4aBu3Pkhcp9Hw1d",
  "key32": "j9MdSgwaS6N7aWRTSbZ36M1jake5ecfwAv1JMMbwBCA3Lvn3c35okxH1bvygut9LxbNmu6TC6koz2h8E81FNVPn",
  "key33": "3qzwwhWqb5ujsmuFyEPyWGrHbJvKumENz5s7PB6FgAYCX8J5RojGLipbqZoA55qSDejWrSeSsMWNCXXjKYvxJqwx",
  "key34": "5CxKr9x3KLxYK6VQ8tdXhRWawcKX1Zazqjz68bMcUGQwr9x789gThgdVPQdtG5quXFW3iSwjc3iya2bee16BwgjA",
  "key35": "3tMK3mYT4b6tw7cyDwS3g8QNtCcjL2drAniJ16CwfTy7YmNmxyJVmXwG2WcBkrUqavfjmMga2oJb1WbYEwZhoMSS",
  "key36": "3CK21YnJ39FykPqi58TYSNTyodXYLrkyVxWzJU1BPMfL292ceifhNc1dQtz9jcKDxnd9vtZJ6wXnk2fPpdFHdtnv",
  "key37": "4ari3QCgNaWo1BdHaMEHdcexuKC2hnqqEBGmQnQTjgALWVtH6cVxAyNzcB3UxHpfjd1znDYZ6a67eh9A5vf5tKPp",
  "key38": "65EghWYh7z4zqHnPpiunehyUTKYt7qgoxF7pkBaBZfo7kAAAyr1G6uTLmsTBVEEYSYTdZDvxg1GhffcqVkAse5Ad",
  "key39": "4jgFqjV48nW6Z9B2uTENhvSAVN4sbZ6va3zFBzuded37a96YaqMhLnirEedqF68Y6UHFGCapeT7LM3gjGR5Aix2d",
  "key40": "3u5bMbrsXsyjRyup4xEVCikk9yxsbec78cuUNvU3b4sCx9NR6PS6FQtsu4u4A1qhwMVHzs36zuJxbiHqjncRYxWG",
  "key41": "3xwPWRAHw1eC14Ur8sE1WNcPYeenbnnUFt1WFLR23AYduyZpbzgbVZYKRRmJZiik1LTuwsdkdXAa6pMFBmksrUmf",
  "key42": "5WgUPqjK83Mm1xzXHercf6hLh1AtXJdh1sJfR8TRk7ERpAzNAnEPktwgZ46hSTY6Y9epzdjac2bmQnHET5zx2z3o",
  "key43": "Bv1EkeQAJmmYtFR9bQyFP3nLmycr1o9TWQJsKd6G5tVjPqzfWwDRWLNZAwQH6U5tjcAcC1DoX9PAdoFYHRrGwZt",
  "key44": "3x3sM8A58DQm3CtvHUzcmTwbJnPu31ruf1o457f1Ww9CZafhB1k68zjL5n8N8x4AtmsqDqjr4cB2LbAUFFGGcTyZ",
  "key45": "5q8WMdjuPZ3p92iCwQ1Wbi9Hy8GFtWTu7YoaKVCavoB9KihNG7YNTcpcz5iUoxa9AuxKLJS1AzsFXayTRTLF6ebZ",
  "key46": "5Eb2U7QAHDMY227TVeXU7Apf3okX84gi6nwHs5nJ3gdwhsQiJk48yYvBQHY1sgGYX6gcjRuEUeYsjJbJR6rv5sBy",
  "key47": "3X2LFHrSwn9SdwhpUKhzCjLqSaVP4tFXKPGa23zPbvXWWTg933vKwDvUd7uvFmFodHvV3wpWDYcQLjN9bU4KfuBq"
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
