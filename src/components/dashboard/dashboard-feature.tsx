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
    "495LAmun4RhJNMZnCsFSohLbgWaN1ZAsC9R29SYG2nKTnuVBjbtUTSThdJmaZFXqRLZfWuhAVrhCkbvhCJHBTdmx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6uXM784RUJ4jB2T6Tpqh9dCS3hU6yxCHeEiC7kkC3CPeXHjUD8LEi2Qh7scwvmx4Ss7gRsWshJYncD2EDGM4BSJ",
  "key1": "DM2zak6otq8y7zTivA6wmLxUR18cdCWSYXnuKLGg4U94xg85rWVxqLbN7Q6neo1kJtD9hT8jv5BdiE3KJZAhD4C",
  "key2": "2gZPomEeu6RJCFi12usGFsfJ4MWa3CbgAwPm1XWLLaYMk5KLuKwRE8hMyHp5J2vubryzuS3YEwQ6ycT7hc7Z6Eyi",
  "key3": "4rxP1J7ksdc4gc6Q26vYuBR29xywonk9yQqDiMAndXvRDmMuvUGMif88iWRmewQC72p3Fz1cW5eh5w7LmNRALbDo",
  "key4": "3LMFUZP4Mj114dvMRjac1Cskiv6TEpLr8EMvMuoCa2yvWa2t5xLrXonpg44KN3idRHShHEZSYfooCX4j5Nz2K8dK",
  "key5": "3j9EB24tNsrRn6nJhLGT1drJZAEurXCHKPB39PuY8n7yEzNG11u96p9iiY47CnqMaUq5hrQfwXrVxDousQZ8iDuW",
  "key6": "5gCUmYzpdkgxnKwRZHocDvxvXSfezzjtFehdVooe3rzG5Y1g19TMJr6XyMLFdSfs67s135kBirKciqQ3cL8qgvdq",
  "key7": "5jMsoAJTJDAnZ6EvBBfPsYenceC6J2DwiRWMaPXxogzyPUpsHhxyVXBTQB9iCdU4m28DxQno4Mryz2xKmd6VdWPQ",
  "key8": "2ARQFXqjrx2cvW8C86h2AG8DFcNX3cSGphQoiMEtvovR9joeZjuYehm3LpAYPsBUFFJd8PXy6vNh6dKiYX19DVx2",
  "key9": "3DNc3SeEPfqFJGA9Ug26A1anNzNPKzrtFSWYh9ym2FyprwFh2VNJHyzhCYyJJb5vkT4bQTerQs56sWH1hHnT98it",
  "key10": "5mWWp5F56nffEV9qzZdLh7gzDoYrzdGgbyLHh2Z4AvQzVUFGT3j4JAuU71z5qnzC7PHQNsD56qAYkEQfFDYuVsK2",
  "key11": "EC4S32zS9ccuJHDQnhPAxf6v6V14HcsEWcigX63zLH9XWEEHFYnYoAyDvBxgrHvzia9fHSyioL7wkaEmGcoE39w",
  "key12": "2XMRdjHqmMpdnZ11ABtUwbeJBX7LTXQun4yvZCcLFmzjmywpceikQDKeQbMdkuHrEmrwo4FQ2edd4MM5qHuHboVs",
  "key13": "4WTBQY2PS7CXKLJVfwRCjiSk9kjPXaACBCifJsuDKLmudeTSjUNKhRLVXENCnY7ucrwmegePh8bvmMA52hQYP1gw",
  "key14": "jdj4UFFrf6FLuKnrLfQACyS4iedYsQavVDETk6CA7Rs8E16xvL34AeFxytWWV4TsKr85QFQowt7GzbfpHg5c9Qj",
  "key15": "4qfeRtEqosCMgbNZLKsbgWy5ZHxAQiquQ6fBMfQsxthPeiXnBg8XeHFPsYU5AJbDMcp9Jwz7a7vY7FNT2MfgkKKW",
  "key16": "TYfaXfaEMnf45Twvcb6JV2ehGghZFNLahU8hThnNbvdJk9jfaXrVwAgJHKQ5PbrJAEvhjKGZLesS9mYCALHavS6",
  "key17": "3xfvbCtahcbuxhym4raD9Xe7zpyTyp9duJqjquZi1JZZESR8vkDZ8vMyGmsjwdvhMvHgiKkcbhXgh6xD59ikQi54",
  "key18": "5BfeX2HDYCAVoWJDmaE1og1d4xEcp5RkpPy5cXKpv3wXhHB9koGrcG6PNAuHN59JknsXYeEza42rLa91Z8K3AKRT",
  "key19": "3WjMmUWoKv3c6cC4QEGwu1cQKdKvcrXP5bDtiWsvR6TggLuc2kc2wnworydNXebigsqDSnsaX3RSFK32rG1oBybW",
  "key20": "3HjqdLU11pgqpxFEmeVwuCS79aR6L7MCTwjmVNZYV5XAeVwtFBcqkbjMBg8Nkjuz4fq3mivXgf2FP1W5EVYb8qtM",
  "key21": "49M5GW5MeVaeFxRxfZWcjPa77myYrR6EwpjEqbiPnS9u6aRW2oHqSTVsAELwjyxnnXE48gEHYt1M9rv1Udbi1q2G",
  "key22": "2eFWMbD7CbgjvUuKBSW1forEUhbvZxBCTpHrmPmqX8j3smSzJUcugn28zG5EgzjQTNFpa7MLC1CAWeZYDfLYGjfv",
  "key23": "5euFAcPCYCyDRje5wUxR7yrywBk78ZuZq5Gnam96YjzCdXABRXZMmFVrQAS7JunuK56QQUQoCWZQUwvHjAn96WY4",
  "key24": "4XmNfnLvqvkkUuKpmstiVtsBJa8TMCkLAdQGGySaZkEtwoduVPC6wvBTiA2eWgPu8jhYFcUMigyQTAsEJVUCyXXX",
  "key25": "4J39kkVoLJYT2ygREXmYB6u6TpL4VrmSiwKnCmZU5GNgqjF5k3thzBSKYkmYcoUsu32CP8HjEWr9Ap8SUtQWAo26",
  "key26": "AYsGP7bQzGLpVtqrMyRkLyrVtHuucZRxMfgwsmUx6pR9tdojXFzzpC6nzyybxaGL89tyXtLqxoTzgWNSxXFLcz9",
  "key27": "4B4mzLMS4rSihHNUbM7dMncAnJmqNh5WytjokKYaomhSgJYZBPdVVJQEY1PkJN822tzXDkQZTBQmDPGU5eTpE8xe",
  "key28": "24CqReZXHJT5FC8a1fCpofajDhMpfeALenw3Df5nWb1o4sTYkQYkedykmMZbmJ78GtnogHo2o2hM65SU5HLb2PLA",
  "key29": "2okLQEWxfb7Arq3hxiRZqUatSSegkqCS4jHBoYcJhJhcNanbUCi5HahzkJ8UY3mWVnpqk69imwoGgtRgDSs6crsZ"
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
