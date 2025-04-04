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
    "3Mo2PCwhUvKqKDECEAMd74CZPdct1N8Tk3PiUnVUkY6RTKyhJLT3dn7EeVVpDirca62hvCPvmkYm2kCqzmtQY3Ga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jvZqoeb2qAGpcgKnDVfxBWgC9T84XDjvGw7ccLxADPXuxiNeX9pC489Qv3AmZp5PSFexbnjuPSFqgc9QmTmdK6w",
  "key1": "5p9hRFzX9MobgtnLh2y7n6buT2hKhoXUvtRYZNtfjEJztoHVKRVnB98GaEmetVyEQ2YR8AhG4bXAeicJgqPJUbmp",
  "key2": "2cdFQnV9Ae4s8kYa3aNLS8MUEK5Mz4kz2b3dCrzrET7fF21tJAbNW9jTzroN9vKDuN1jHiaNGb5cbiHu6ybEn5Gz",
  "key3": "4S7P6eLpygJx1dH4Xykur4cG3GGYqxaKJjsqwyt6uRiEHz8yymjLGF7oWs6fCe6NkZFBg7jk5wvvW8PZmVL812iK",
  "key4": "5DgsYefKS4Vi8t54KVdcjUSKnEV9A1mdXJfWCnwUZdYVemo6SyFnvEeRjzXrhWqk3evRApWbStkhTrX63j33cJYA",
  "key5": "4xiZwpbCkH4w7vUTgdLWhfrZdmiGQeLtZGbNi6s9pCYE4wjnW1sSYWxL5wXq2Ew7X9AybNiMVeQGVR7drmfgR29r",
  "key6": "3hsfZ84MnvUxtPeWo4uHUndpJXjaCS1uZDvLUait5HJzoDT3xc5CSTWQh6nCZpNpwJNbM56jk8qacpsyngzyvQXk",
  "key7": "2WqcQ4gtzche1YH9iFnhiPLBK3PHfoyj1jEEwz8jdBWpfMh2o7RPkSdi23YCjnpSqM3JjPq2HA1Hvf2nr9LrvQic",
  "key8": "3XcwkugUUs9qRcPUf1rkH7xM7XVWgw3vpy2dWSkfEwNaGpiTHd2brpu6s3BXg3B3Wpo2WqqPzazgFx3Y5ZfBpb37",
  "key9": "N7RAoDRJkAR2b6sggPK7hmTEudrFzanWtbG6DKZMtEJN6fhjfgrUGDhnp4LSJTBSJ19ksNEE2BZEs9QogKYnFP7",
  "key10": "51H7HB3J8Vkqg7CQm2ECSn9AQ5PwXuLkyx84FUgABAmCwM972iEuk1d12MRE1G2EchMJbU3AhipeXQes6cNb7qaG",
  "key11": "bXjXQknfsDpjy2ZESLMacgFm5EwYeZ9kk5NpSCVeB2sg93LjgjamBZiPGevesNdj52i215obRxG8ux83N8etJra",
  "key12": "7gV6Tz2Lb65KWmWUeBniZSC3D6qbvzZ8ygaTewDWHwUkF4fcFoxobh2NQsjUbjjFUdy8Nub9crwkJiZLWBqqYv3",
  "key13": "4dH3XaysDzbUNNaGdcditV78d8ewGneSHpSch4bfjVbz44GwviouztHoDHnFXDCBpGKM1X4z4vE9uRyMPerkPEVD",
  "key14": "YkFbjTNWSgNfybL98em6g15jPmoX6kWAZnNT11sHh4SrkX2ih3zastuprrhpvi3Kca4WQY66cuEvSqqXhR2fQS8",
  "key15": "u1QAg13LAGPmGTxzxPYntvtXFY332w3FoD5m9WUW2bpyTuBGmc34cyAWxhLnyzbfvZaTDKf9g56SrPsw88cRKx2",
  "key16": "38UBiQSYqGS7v89YhDtzDRESqWxa9fSgWbPmXLVkhTYe7x5TjvYJMg69msNXUtcnQdYevZf1ibs762v4WgsZE36L",
  "key17": "4URYcJZNubfyFgDZkAcFcpxcvcR58sFZ1tHmSWQCgXt2hXELcLg2B4DC8Jfuh6zArLx8FhpbA4UAf6TDzDC9QKzX",
  "key18": "65EiVJmhVn9AtJeV1fhY1w9uqnwSS2oKtAdD32kh9v2HZRYfk51mrQtjfAZhnyqQthx1tvBnpCTkzTKVb7Uv4eUP",
  "key19": "cjCcxGaCacHrvcHhGnXeYT3zJXzkAkqKr27VWqpztviuXA7hVg9G35EVpejNViYWhDLuBdZh37b7u6YPv8wB6Gf",
  "key20": "354wgRGTctrGoiAuRnveR3rLFuChvTSTVrpP3xDCTTNo8TiNzEJeHGBWdERz1hgPNHHGmbrqqUfRQcqJvge1Ayvf",
  "key21": "4ZkpBwHHvpBj23itqXJUopJvwxo8yXi3jsXcKHgvFX4vEGTxkHWap6TeDtx4pADSVMNmNZrcx5MTnpdF79om6nBb",
  "key22": "5XhiuydF2SZ3E2whr62f4ryRvMo6Xu9ptX7Zx8Zyvn8zue7jod45FX8KFaTedC7kKzFZUpSTj3AQ7iuG5ho7dYUB",
  "key23": "AhwNj36Rsb9qEMZAAyuuTupsKMhVGipfmAz5bcKDNpHE8zJFwCmDEp1bLqfQuYXszTdEbgeKNEHCD2XpomzKaYU",
  "key24": "LcBYBh3bTGrxPETDi8sjZ89ACqYGTtjeK62hTrzCmWrLMaSz44zF6Ge2TQPNnu3wNUBQebXp3hCWS1hPbT5DqvJ",
  "key25": "3eYme63g5dHPJjMKSNRa7e7g24RVLdmPY37EfW9Tt69ySLzEDiDwukFR2quVVruyBaoSC7D5pwhf2cc66JYnPygP",
  "key26": "38tdbrL4cQkByLb2Ms8rL9DyCzfdeksLfihvaFvskq1ghrv8tDM4RgXPxvvijS33igAqezipqjTY9tP9WJi2BoWk",
  "key27": "4w8EgCtakoFaNVCWxbL3TutZsaUoYmP2EGLqKcfUxtL5p2j7TfWaNshHhv8UtWEALdumKyDxP2rWn6qmpTMzn2mZ",
  "key28": "5H2PkCzHgWKygBygg9Qfo9UDk88xpSNaC71nQtNFL5u7PemgDLDuTSmDQdKMDmfMh9RxG6Ps7cUudADbbZFee23u",
  "key29": "2qRBsmriD4rK8X8ApDvPWFUNb2dwTsdTD7Ld7vjbPYmNNGkjMEYcc4euiuJf9dsmjDFwtRWSRs3bBP3s26yrP1cp",
  "key30": "dj67Zk9JVF3qgCbcHGKRefUqYdEHa57FU18d4Kc5gcbPAXEyDYmiMcmi11XgbV5puhBaw3iDs2dLzRqpwLYPMW3"
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
