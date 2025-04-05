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
    "5Hs47iTMfD6ydFD2NGyzi62HAoU4ZFTB516CuFoWnfmZfafL8x15DvvCmdpMtafB9F3iSLkfvxjpsV6CtytDCNzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CFDnsCS5W2SFRPHvHsbJMj1jWYsvPddBpKSY2nJkGCmj7qc4UwtbytR3YwfQGfLg8mKMc21iqzPGHGacQvxsLGs",
  "key1": "nV7Tdog7C44AgAynTxXpUbcVNmHVkvJs2Qdrf7dwLySvKyUqu18kwfUdyyT6anRdkCXYVWXerfXSjKpRDXDyWnb",
  "key2": "54ZnvZRC6KujVjWmc3GE7B1LYBqv48jd2yVzLCkm6y5BgfypDHkS1FsZkPiMLUMaSafPhT1wHgea5L91QL4M2vwh",
  "key3": "61BLvuWD6As2mVzZU1vNhPQjjBdBC2PSyefUeSTBTzTTzqDP4cDu3q5BBY2enN4VKYids1gKdwART7r26w3jDhVY",
  "key4": "kG3sCLYauXTa9EXBckFLJMLC17amNTjrQhb8fh357TUGa7SVuck13baFNUa89Bt5a81dABQiinjotdBG1JNcnah",
  "key5": "5q22sBL34ZaroZ2UjdjxzLHpxkY9fCQiEZQSoz4Zi1cLiEm4pfZgHWzCbmSURXg1rYTi2vi6E6CqWhL2FUNsVfVY",
  "key6": "2uiYsgBjpcccfBXUL8ABMVLBbe6bSuzscRfWqhnSDpM9GtbLJGrbA5YPcMdTBVQFDAGj3WPpjBSHpMDiMJCqP1UQ",
  "key7": "2YLRiYS43UoRsmtNZoV3TCZGmapm2W8CswrXTeiMuAmE1JonjFvqCdVmaHb1sj18LcpVq5VQTEZNycXkQ8xBpoT1",
  "key8": "3d6z3KCyXWqzEhiBeyxDK11LaABtFwiGPkGx4zZSi8tVyECg55yCGH8mcqdAc5uZQpoyuJ4CWNzFFdf7K4e17v96",
  "key9": "4QRGnb9sLQYxWuZJa4LcJJ1coyTiCYiZyjXCBAu3BAtu96GdFm5XHToPWtndPK1sFGvhcH7K71Wmi25665oJkBeX",
  "key10": "4yTKTw1b1FchXxTSmuWXwhS9zAoZeoqnZNBy8A8CGCW43evJgy5k96mSkkv1E9nZw3oNe2zprUdZJJQ3nN4Vqr7f",
  "key11": "3CpU5rVQrntaVSdmh6ebLB6PbtDQdKo6ezSgdNvytHKoopsRYrbRfMfH8JWgbfMdTMk5PTiDJTb12oxnGjEoPqB5",
  "key12": "rcKhn3Cj2kQKiu7fn7DdcLzDrWeUecGaE6furjAeUqsq9pPs8ts1ybibCNfuzeckonGa14DkcPA8Mu41QjkFQD6",
  "key13": "3sCyqJvampjFFtnmRZ5w6np91Mi3g94vF7C54q7xKMTaU1y1yoaUHDR98qJ4u8c2X6rjJ4QhkDrMoFJk3GshBihU",
  "key14": "5DGiJqvYPEZgSANgBhofCHhviEEqRyKypCLyXgho5qsdf5dSTq82MpdxEojqyj7WrXnjDuoid9aFsfMNHFGcrTxd",
  "key15": "2E9ntQUNbfE4rwuLzK5hJBPq8hfCKnNN3kyd2vnShG3EPA1z6rKZTGrEh38U95682cpdkXSZCmfgSi39xaqUYp23",
  "key16": "27tEPExGF3VwXbuEhSxjbBtDpLR4TrLUiaMyunk89pBzRaJqnFMvgyTqoUFYTF2VRgNd2LHzJtVcPWYsFf4ndmmN",
  "key17": "2NJ64w6Lowto9yhckMtrDbSkrdt3qxh7abZzvUFVyByyzwwFsHAUtvppULCnmUk5NSiHgzPMrX7q4WGjQ2wdNKf8",
  "key18": "MA4oTepD5dRQczm9LAxiMWNLHmmF4khoNwNJnthrqhsw4yNtTS6vGv9hACemCntdbh2Jz7y2KLu41Qwz6gjz5DJ",
  "key19": "5NYuueQ21s7S8AHrDFEpKipVERbG5Ltetfo51rrDSgyx1XKHy9K1mH5DNRfzfhUNLfqmWi6aJw3y2xianLCyexSh",
  "key20": "2VujjcJAUj4xv9XEzVLnNQdDHdQh4Mi3itaFmco55qALqiV5TwUJe7vLNta1phhBuSaTEU5NaxiZNMQmhSSG17b6",
  "key21": "2bfTq8UjKGfjxox7SyY84qiANmoGPVbHZ4WCuarNMYKvxJzocA7yMicdkKK3pySh6BY5pUfuGpgogLqWBAWjQuR4",
  "key22": "3mStWNovLpxtKSBsUpoCR6ZT46ft7cfEpA7tpYr3sP6egHxZnqFuDxfU3bnsMwFdRgV2Jcu5m9QhqoxYFqUKFkEm",
  "key23": "2Qtwvc5LvyUd6s7CEadHkcJnN1FSoWvKtLUB5k4d512hKnzuSY3V7aHtdaHgQKyJp7R3pRM4zfKUshGWXRVEsaq2",
  "key24": "S3zSrKbd36XoCfFaKKcNwKdCazhtwFALMmEfrGZq9fycEEx8AnnrRPCZPhp8jWZEtyWH32jWqBFrzz4P7mLqSAP",
  "key25": "8ktysUcNPHRewVacydrEiz8ianfYmq7AJhp6CHJZCWAhXp7RGDAyMaCpLUTJfznC6Mc5NtfuCEQ77UJeq32TA6v",
  "key26": "4bQCSDfiVmDMCmJPtt84Mxxnt3JpnDWLwJR35BxVLGtjUvEEkdNoAkd9NxZFqhbMQJ13iGjNZWcyYPSWiR8UAVip",
  "key27": "4gUpjgM8mcvqW5Grz19vDKYLyJgSwCdprRZyMi4c126dnEyMbBikJLpwfHBL7fBM5qU3wgFoVKZBsrWo87aYDf3w",
  "key28": "4dzu2uXEyfXLLhgiZnKtwWB8DHpYtaSE5WEUByuQiSnKNKTtU6d9rBtTPJtcWFVJfAiDPq7eGAjLWWj1SVgsRZSC",
  "key29": "4c73nxzHA68vTf6AsLKkrJznG5MPrALtDyBPUw7mp8S6yNkZZcf8ZfE77ibNhwJ22yztFNQzixNbypkk5gQPYBMS",
  "key30": "2ag2WUwB4T6awPDKbQts4fK12V6mq7Zo2bfCeA3axje9mi8tP87j5nqhf2SkU3zVWRYbEd62CLMajgRppTpLadHA",
  "key31": "36cnU1S14UBWb8NfktDm5M3ibrKDfykWr34r818M2JvctdtP25bAheJJps4aUxhY6Cbv2JJGs6qkZwxVKQVEA4ya",
  "key32": "2kTJ8ARTBPfwq6TcFhL8CG2NWf4rmnBsb7dGCRFJ6NTqEYZ3aZnWBzARAgXZL49PnTJ2S33AHv4731oE6Ur7AKxE"
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
