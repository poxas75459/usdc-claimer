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
    "vm6R9sSLakN1ETm1keXVLsdrDpyJxpN3X1wwXQ7CAZo4VNyWroAujGcEUmUcddJ3DM9G2RzKgxXGcobbF9sVtMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gw2P6tpPRvHpGxbAQ5GiGK624xP4ku2kFacEWBtWyPKp9xXzF8RBjc9wWxwSHtW62hjLzZWp5wuqfS282iQwyTE",
  "key1": "4W44RNZWfWFzBhqpvxBEEWUij7MEaV59Z1b2ZTbCjWpRYgp24en867mbMV7eZXt8xon3swahMqcLucqeuLLSPsHX",
  "key2": "2r9UcrgtcgenewkcwVYCBJM7AdE1hbXFDVamdDvShGCdU1GJmCjCoDYvTSx92UutnHZNeu5ScBcPtNK5KVCpN8ir",
  "key3": "31Zp6cYMkyZxm9mMvZQNSWWNtucqKRxCiriEt5VLSSkKBDKsM61thb3krJCQtueEupuYfytFRNrRuqEtRSD58wSn",
  "key4": "3MhEmDczTvf39XrsbaUKfoKPFo3odTDw5hbJerAt8FcQD9hXM9QbwQAKXmLPB74bSydF2BTFHd4YnpRA7pQk2yVZ",
  "key5": "6d3sWW9aa344jcejVe11wf6z2rSgYAqoR4dVGwEevt3wUVjM7tDUKsrSk48pHe4cgKwLJKcsEUPh5HtLwXigRTR",
  "key6": "5iCeqKCxWtA3XbeW8sYre8RMMGiHmaDkmBF2x2EH3TVaSj8eY5YkdsX85XxUoPdNvU2mAzaiPf4hpzFsAay2a3HX",
  "key7": "582bSKtpsZdmB3LN7LCH7X8RtMPqEaNagoXwT1YqkBScrH9EZodBWaQc5jcHFH3w6S9Vj9JNMiEqEUNmGMrvbY2q",
  "key8": "4Pwhu6yRb764cXN67QrFYNQKB7rTodh8hjRifraonipSM778J9qYt19CKVD6HBbcesn7GVeNSaZPwmQcG3uRd9S2",
  "key9": "5iXdgZaD9zrqHqoJu8VFaodt6gTJZ5easzhPFyQh4v11QaP2nCihmPtLS28ycCUPRr7Yzbbg5hAnH8C1bxvDcRDs",
  "key10": "5s56fRushChi84BL8UBBo2N7BuPgqbrT6w3LCPDw3SxTa3v5PhrAwrfdftoQBrxLGpv9HaME4bjeSYZsLyG4XB5R",
  "key11": "2MsHJ4Z3oBKui1ETyui76FqHuZVGc1Dk793yt3YePoFY1gYrzD615una9eJ8yRpd37ujNyn9CMSCPDGs9v3NcHQk",
  "key12": "2YZBJmRtpBNdSEpK7aydQQu55FFeFKorYHKsHAAoqhNiuoEZujqxC6Qi8Q95TX8od3qhDQWTHUPiVJFugrP9kFcg",
  "key13": "3jw2b4fyHEy8uQ369TArDLuvjLWZaNGHL9xDpkWxMvxK1iAE9akoWyr8EExQtX3L8SdYHsarXmAHsxfG5eJm9JFS",
  "key14": "5nKSBcuejPpSN43SAgzX31BjozLMqEJH2k1tYWBG1TzmXrn6H5aZtFi6KNwBKi9PPSBQUeo9NMat9DKj4L1W9sKW",
  "key15": "4suChTLR5sEhjpf168EnJFVoHArpFMRTnvnxxaLvckyDmJBXemUduwuBoRTLpTFfk5inS3HS3pxbptFoTjK6qk5Y",
  "key16": "442AheYUCtgeSCekYagm8egtAGsyPKuRQV4TPm7A8APB5q83bsh998UKiCNhp8PQUzHkQEx361nyRQxkpzsMxWoS",
  "key17": "53nZYuyhufWsq85zTtTTtTTbrWA6GHecf7vyV5Wab62XxGCAjYzZFh3yhUpxPrM8LRcoY26MpJxTF626qu3SzYfR",
  "key18": "27kHxXm29Kw4Xc3rTg5m37Wip5mJQ8gR6GXodTXJS43DC6CrWJSnyHkdTDyL3X3UK2iFDiJpPWdggrYDrYHcbKsy",
  "key19": "5ZGgbJaxdUyoDAAJTnfEvQEE5nwyw9rZVL7EbxHgUR7k9hcZ3wuBGvvmiZDdoWoiYxKzPBYQYHGNeKatfu4NtRDR",
  "key20": "36VzrGHcrxuZER33XnW9KA6JUC5Zi2zHtkzjByiq64JYa5tn5R9rYKRC22WNMB6KCQBDoBgtEfWeW2c4c5Xkmrr4",
  "key21": "4dfDsfHfM4uURN6oZDjjy45MMJ6DvQc4pLPxvFwftbXiJfRoGjgan8YodsPQSoQvF8hQqvxTys8RKpcuRUPCbBMw",
  "key22": "2SAfBcD6e5sZbkFvg9GDEUBR74bmTkkjzdBppbZPpR9ipKDqBdoJVF7Uoid1dbPpPiEF3UGX5Hhswr2KkjNzPt8j",
  "key23": "4a7ebFRJLzoX1hUo29HdSiNVa4bowMx7Swcrrow1YyeiL35LnacoLc8VjBCXSM9v8Z1GLyNtRG7x3Upa6GtZ2Ua6",
  "key24": "bRoR6xCZQMVWHkLc4LdtbmMvFEo2XyUAJJV87aQd3aZP2XQFBg2QazJdjwWMDvMznip4X4KhcTApgim7sDbsSGN",
  "key25": "57Dd3kk2LyyF1EB7nxgNfp48AxJwegeodgpj4ki6MNFA3K3U8ghmHzJmBskouDU1viiAe1bg1WeeYtdpi9yENhx6"
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
