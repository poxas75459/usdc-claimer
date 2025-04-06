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
    "2UKFD43LCXr5cAYke899sek6nNBQzM48i9T7KsnZQ13E4EBHPFvj7wxud9RsFmKhRX8BdMgaZHKAje1ji9WebVkA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2haDTd4JceGENJnx1E7LfdeoVo17XYXxjmaeXmCrYb9UXCVFGdhcBdaXSykHVxnufoUBrDxfGcRoyutUc35N9Csm",
  "key1": "2DhPrBachEsRQMAUnQ5MQEiiTow3uGfERAb1LHapYndwmfxcbzudz2dWW4HnVPkyRSJ4m5RZutd8F5Ac83ZRhqWa",
  "key2": "4Vb85SgK1TAeS7V7K5a923qH7T2mwawSWpXWmTRPQCzWYxGQqZfVKEkAKMrDHtBkrHtWhUNRQpdJcQ3cDs3NDchc",
  "key3": "5D78gKuYCyzghNo9i46FA2fo7UQgLNP5rwBR4PCMuriZBnpvYoTao4DmayF1rH5gQnfmTa4fwbWwzmy8fY5qivm6",
  "key4": "3Aw8CqC89WfiL2RGpKkMbWggCXKhaEhA9xBxoibHt5aY9k2cizMZyFkpwEtTR46Qyvv6zYm7Db8VHgDHbAf8Zfar",
  "key5": "2WsZmuUPYPYpEkBS9tx5XK8Muuh3x5TaTZMQPEdoW4HJzuCqspwu2CutYTQEWvyw43gi1jxV6qoBULgDfVMqZCy2",
  "key6": "4QV5oc65Wbqv2TjX9uJ4V963pGsqjWTwcB3vYyhawwqYqZT6KnxAWNgTMe3skMpowzJUiY41GaQUEp8fiko8N8QY",
  "key7": "5iTzJt7zA8pAosCX7NX7Hrm12pdwLKxbfkCZgnPo6yGCoJwb51dMcFJC3XDbEBu7SkPC36pQagUDKSUnM8nk9gpG",
  "key8": "32z8rroRx2HbMJFV3AJgJYjBaXS25qpCrg81iEG4m7FAxKeuHtikiT5ZFDfhgjzELtXb8ecRu4q81CWzSesq3Lqj",
  "key9": "5QU3yhBZSS77J1qP2UTPunWFVXSg5KsXgHky2vck73Vs2Z2eEHrxMP5GpGnKoxQ9hy1uYHHDYvVhbERzaomvT9n4",
  "key10": "5cQEYzerN5qh7PRwzcc7EETDsXKcTm4WXgm1qid4H2vzHJNVN5iAqxSX8kuPwvhVySiXPSqGSpq99193Gz6ndMb5",
  "key11": "5tKEK31RCm2JhaC2mq6XFmX4aHbH5e7wVskJLrqkGqoJW8G7Y5rdrAEMJ24x55pZbVEhdPDgkrVs4343HjxAa4nU",
  "key12": "DvFQwvoMVXkEV3Jhc6QnBp1gq2VroKGQuGfNmAwn7sqD1bopx3XmUCAfCgd71ePeBoaZEXRM2dJEp7pt5Af3Qu7",
  "key13": "3k95J46QC7bDNGv2yjU2GwCaQ9ETdtoRKUxSfsArvNMYZw895MSAZiBANze7j34pNAE89KGEijqKPxwYUa5Mh1Jz",
  "key14": "SVyA6QjhGV5nzuxJK4CgyXYW8weiVAKG2xdRa6shxuguAJedAM4MZcWs6W7jv6hE5Lrn3dY5tFVZHxvY5NavbhS",
  "key15": "3LVvR7U1JakmGhLrrxR4MqD6UEWHPKisH5FgjvYAqHjSeEp2vwphKaoQ8LMioFFBUrfd1M7jFS65Us8rAAJ9Q35W",
  "key16": "5SRS2BctWtGUr3Jhbx1ZAFw9Wzic1zPMiC8PhRW2xZuVXF6z5CmhaNf11nNwrrwzXWnXUnp781i9Erf3ULWZ3DE7",
  "key17": "GbgHvsQsC6wDpUUA7GfaZzSx6GeHGZ7joKpJwTzfQ7Z293hCJ5H5uTypRn6rn5pZMrFRgAYXFXJhMj9sCn9RNZV",
  "key18": "2hboN6SahjXsnZCAthNatsgzLGKGgtF6eL7T5ARXVR7kN5W5Tqfq6NSNcmKsj7goeVH5z7GR2KKNpivbdfTsXjtP",
  "key19": "3KcRh8FVdsp7w8h7JuReoZ36RcLEXxdC6G3BVA6ZhWQ7Np4CJTdhtfA7knX5VExzmCbgJtVGDCAkfiHgsp6qs7CZ",
  "key20": "3Vp4y4rqvHH753YcPJE3xZQvPptsj7G2NH2KkFYfDiqvFP7Xpi3QeLkCFrwSGdEgTmQu4yVFDf8NecxkG6GSQffQ",
  "key21": "C2iXiYfyvRNhj9XR4oW9DtFVUfBH4eYbyYtQM7JFheaQ1aTzYz7SwTUwsutqjqipFXDgVZAqz9FBVzWT5BEFXDK",
  "key22": "EwkyUciNH2XnBvRLXadk9VhQV3r8AHCdFZ2kEwBKTap8z7eGXdSqsdrUzYsLULpyAG2ekFZoK6cuau2Sz5cthhX",
  "key23": "5zMhSvqiL5uPnY6oAV9DWmDeSuraJjNysGuwY66EjoUhbungGmgsTSfinuSpUgWQmkWf6bsGTpfwmSEC8bfo2LaH",
  "key24": "4AtEcTHS5DAp51B1oyfwx5B9aCSYb3PagKwWAJAj4BwhmYcXy3YDciMKduVy9yk8ngziCDTaeVPwLTFF1HSsDbC",
  "key25": "5oPbhz6nNCb8UZqGt939ub5qGact2vw7rMsPeWivrp6TXWTYTJoNVprFridDk1oWF7kwrwbgwC1MtsA6iJFtQx7S",
  "key26": "4tCDDqNuCEgEJ9TjqD2qBi1nd6bAZnZ8RKApGQG46Z2WcSZ2bNZCjM7DzGep9sy4TUSbgSed9ycDPwNYm3N55EyS",
  "key27": "2N89decC8JewGCZztqzEmURpZvZDWcf8Xj2yie7Vf8zPtnG13GsEpg4o6tSUKcH5nrBcrP5DxX1Kte5AGVtkazMB",
  "key28": "3UdL5EAvMzd6RHgLuXF5WRz4aGDsr46kfrzw9LwipK2A5AS5xi8JjzYMCPL3f6C4QsSR99CXDNKbb27P3eV92h38",
  "key29": "5oH4txUsbmyePRNafG5SAxoUPUtAtgnF49HYJmWZAt4XPEqafcysRs3PfD1frgiiHSr25bzcwimqYiN9TvqGLS5a",
  "key30": "2YadGmD9pkyVn9xwAT3WJg9Kp4jozGWFFaMsgjhWruThtvHyDLCPSp9QFPsqjxrGgD48Uc9WtMKD3MELGR7zpmK4",
  "key31": "3jANW11okGedv8W6qrKNTZ3W7785GV94xU1vdeN8U1U6CkXKuft7goRhJp9ZDUbamswFQuqcSCSbz5jurVcAzy5z",
  "key32": "WebVZP2JsAzyY8GpeaMmfGDaxsaVKk7YtedMKp4eqiDZiJ753wMeZjB2suGLxfcsYQ1mPA228fhRmF3vUMVXrab",
  "key33": "2M7pSVj6e4MWgxShmQSML7Z2Q3z8kvYLRZJBFNc26PHwrywiv4mW6s5Z3Kishg53nFSDmdQJJeC8nUqB9anCZEc1",
  "key34": "26dDgwWjNzVX3ZVZPYWRZzLgWiTTPoqf6sMHVntx4ry1E4s6ZpXSvPiwawbeG2uJXCjNVe5XzcHegsbxHbG6ofMG",
  "key35": "5R5yfsTqKgYoqXw8B6PDYommbBtRYAyK4J71ZxESEcDWjhjVL5PrRREHVFd5R9NLDyvnBG5WqHmeUAe1pdEYzjbG",
  "key36": "9euSCFTCmDSqR4wkDyMvnexYT8RmPBkLbkYJssJPyKZ54JLoe143Z72BUUbUz69DkTzzELZFnjs4sQygsBNAh1i",
  "key37": "495mMLv6wfeVxUxWjdxj2KXb1P78KmikzSTGvssKsJriR5vb7NPze8JVJwv55WMCcETe2NsPeufssLxLX17ZU31E",
  "key38": "4HT8iCvmEhGW18kKdMqdNXxAsVC2d4y4uf8r84PEpZ9Pp2ugc3CD4SgtLVepQHHeqAyPKVQKQAY3tWwU2N3tckPi",
  "key39": "5jnhWd3LDivyyDK6E5WGi6Tmn3m3Tua9MHjYAsm5qALQeu9MY6LEVPCS7s5AiYraomXb9wARxFak1AwH5HfNiLrD"
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
