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
    "2DQw8BS6ez4v612y7QWpSLCVBe5xFTmksBPsrKckLobSVSzZsMEjhnmEJiYUi3t8fKpSJwDQPjHvkoUrXpvUk9ME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qkiSeGNse14SgG9TK5EfXsbgXb8hYUckt2YVczA5ysRKDAtNAR8ASEHCmb5TbLRiUtYFr362hAphFpfKWsbZaXz",
  "key1": "4dwbdMCgWCE7br7sXULxi9cQiFKzMFEV1JmLDinYVAzSEe6L2jVw42qVaJtXjDiZPihuxzz7tax8Z3vRpm7pnHw7",
  "key2": "3KZmXtCEJVgxqBeezjbjQzkMRf3jpAceeAd7EoqRS5VW51c6gJWLRK7nJTBG85njv6JSuEfBppty63cqT98faC76",
  "key3": "4W3KnF7SjLFQ1xt5k1srrnNPiJYpdJbHzJAAxQ4BbtK1vyaJVa3q8JBvpdzX5YzUWyX9KvGSFiiW27zkdqmhTcJ3",
  "key4": "5kFqqkWpoJu9xnZcmpipvif2vjqA3dALqz6XeeSCudRNZpoWzFz8ebvZaM1Sq2uacQb9ZtovcxVH1gWGtz6e5xQn",
  "key5": "kNvgFvpC7GwUvHacC3nU3uJkpZUsPkqTVtVPJuzfF2fe6rBV5A8d6FBN7gj8ivSmgDpZNxV96qEggNPeRDSTnpx",
  "key6": "4T758vnCqtwnBVfvtfDpRLbsFYzqJE4dpohi3iMh66DmZb2xrEppZMSYMVK1Vk9nKGi7qCN9m39BMjMjnvAWnDaQ",
  "key7": "4ErrkTQoKnrkx15XKoBqFvRnCtXwtVaX3Cnt6XTT4jzCWUrHehaeaWfgwfk9xu6Q1naQhNF7dXobq2dnfdDcTBK6",
  "key8": "2RHnoDMNJpRADNU67ybYxB3KrYjNVUZ3WdGDxrVUae6tob235e756tHFmzEUqvuJ1oCwcd6rorcBhVuA5JQbwDDf",
  "key9": "35mSZSRxADSPndTFLJm6DPmt62c75LZmbif5VWWmoKJKpT7rFkfqt8y6hgFUF1XpxEn8xycdQUGGzcKsc3BQUgVW",
  "key10": "5ZCLw3WUoumT8tbpoLE6pFK57uvEDwbsiYYbwJb51JbXsQKSQJNbDkrWXhQjzaT4at1yxUVeobf3BJiknX9eiBae",
  "key11": "3e6bPn1qQxWf6XLFNLHNyHE5eMChJoePMoFSbm7bGLTjJxcMJmB1gk5XyzfgayXjx3pC7sGEMkmg46A5xxLPp9xC",
  "key12": "2kvtC5ZXb2Pv1a2GH4z4mh4JL3DDhcBJV1f4n3LHXegmgFJgvLgZM7beHnJSPJgz3VNMq4PAKkT2Z39fnVi9pmgr",
  "key13": "5oRX3tityNsRdkBUujUaKPXTmsRj8NxrxBYqWXTSBPNf8qBgSC6a47339NgHicUseQUnnwgHyKufp2CL2DBKk89R",
  "key14": "jBKEnoZoyk1fDxtaexx3T2XxBWKM1MLenNsqLHKdedXMAy21kcTtiazoL5DhiuTJwpkni7rVwdVNVkYWXgyHvxc",
  "key15": "mrx8oHA1gLMLuKo8F9nsMFYpdC8jJNsMabWFMmihxK78Ent8xjTvWaeGzm5gtfo9hkhLUWWqGJHC1ozx1QVBeBs",
  "key16": "akADdc4TfChnwD56nfgCqUtFq68bgksv8imp69ztFwPVAKHp8UN6d9cgeEJUrTYTRSdWw8XHDW3imLkFLmsmvPT",
  "key17": "4CwfK834GHTQdFRSvUJk9jcKX9qLjSF34KwFLSj7nbDiUQPm6H9N45DZdYpbVx6tMfUX9pQybZEJeCCwQ8hEczzi",
  "key18": "4LFBnZs7Uj7hvJi7UcRFZxhLQsrFzKVxT61yT5dPw2Y17e3SAzCNXtHS6YTdC9Rv4dzWrwhf221a3YHHmvZYkDyr",
  "key19": "4ZHq71rC7ZCrCTsVvpqkjVU85KNTwXG2SytqL4iWQ5HoLyh5oZKMczpkZYLEPa7qZGDZAkKpEU3CL6idfauDTVfD",
  "key20": "5KMJrV4TB3BEqg73B4qbt3hLqe8kWdXUFeQzQ47rvSWzA9cH1fZZhze8YD3v9P3dFVstjdSahgvQTEy24nwmYP8r",
  "key21": "2fBBwn7eTrjFUMTU2ST4UotchN8m1k3i98kmkr6wBZaBT3WXPcZQkWTLkgMCfbmBejb1FVKfbEbjAN5KT1wwrXUD",
  "key22": "42jBGfkqWwHjNfVTDUdJm3rD2FYUpF7pdGLmohdyuUX5TP4F2S43FZamV4Aiqz9rujeVEHnQWJe1PHFhmkyqNvhq",
  "key23": "3XbC4AWkEhbX9xgMM2kg4eYGQwtmjBaT6ZkiaqZ5UhuoZHjtfPx7LbMByCAxVi5c3wXfAi5gLqbdkqZ6LTiTKLbk",
  "key24": "578QkwBjRfajzbniDXQWumMDFrz129v7RU9LJvJMJw2DNgaPf4hNXsHRaMoLyrARa5yQieRm2XyiPksyM38yjko6",
  "key25": "4n2akiF4WEKaSkYhANodPqvHiWjmVSakztmmsQv1fc9GWfSbkw1dZpQxM3Ac986JZSjfTra5EzAxVNaALB9MzdhD",
  "key26": "4YHLR4duw8QRQZcrdwTCWVMbVQaJcu7erRyTPQC21oqC6QDjLpvGHqLRxMcRMbAkeX1vJJYkY3L9ftByzFF29y9s"
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
