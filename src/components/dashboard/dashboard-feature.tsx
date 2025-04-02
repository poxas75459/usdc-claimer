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
    "4BwBjyBY9fMDndkW8JMuGhbT8govzji5w2a4X2tcU5KzNeo2cnBN317fRdcGuNyw5wRdXMMP5Fxpj5NuAcTknCmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dqypF9aKzMTdTsUC3673VAEacqhzJFsAz3Lyp27tkhrUxYYTVYdG9HSPTmTvDNhvmaabx7bev3pLgdabfbvzHtT",
  "key1": "5gBCEumtHFr5HcAtBZ68iJyoXXJEW3PKEN9qrmy2UbwF1Zurx3pdc2jxGY8kQhqrwgffhUGQgndScVyJCaFT1CXR",
  "key2": "5wD2uYHESsQ5daULnMj6qwBHYZaHGW34nJn5XqoAx8bC5oEegYatqGd62ADwLrT6sqNk1hcaCuiDnekaByWTM4Uz",
  "key3": "rwG9xnp5fc7QA6DUSJQiaY2ytkThusDDEDf7xUrsd41vEpDvgpEWNvsvhvEmmyqNyZPTeB2d3HZiZeGnAnYoiqL",
  "key4": "5ZKWMgJJXoLPKGTsb6fxFLqLRZSPDypZdyrtJ7EqGD6SwBbGHbs1NNbNRHkaWKBL1ECgBoGeQdYT68yxja3UZsdA",
  "key5": "2dXtrK57hgdDBH4TGHZKA9VqktGLGDvHQD5AehoVXdsNynuyCvZQGKYK76A1ybivpkKozduvwZn1nCwiGqkpCZmY",
  "key6": "4EZAKd1r3QiejT3QzhmBmyqsZ3HjcVWSxcoWHy91Qo3HbpvZsQ4T8yYbbKo8ha7rueLmuhBFfyr4ZHZrxqoBef8U",
  "key7": "4CwMQyFmHYczHGBFs6yNhoEqRoPJiM4qsqGM9LiQ19QpMY186Pghsrmhoa5z66b947nvX2F8HPSf7VwUb2dtJLgb",
  "key8": "2qnNuXn7Ku1WJMbBmQ3eHdHa6ZyRgYjKmkFHUUrHhWHGwmxUp94r1CWMh73iYsAx8vq8rujmhiC51Cny5U2Y37TF",
  "key9": "35p2Sym7nuG9kptHoWbBR9JQn5f428qtfAUQVFMN4dXxr32XnJBhmPsgwmHEtZuz5ZPLJiDdZvPqDL1Y2oJSUDfV",
  "key10": "3M3CoWWJ7s7FNAvbXH58yyuG3tTi4fJ8RX8wfr2Tgkb12LbEYAkG2TrrqGAizBPd6JemTPcZX3gYbJHC3YJnGZGb",
  "key11": "eAo6q8nVP14UByKzEZ2GijL5eLnL5JRrpLC1KYTXkQHWobDcxvhxFko286BPN5xp2gCnuHw3CEYkkzi3VNia597",
  "key12": "oSWeVLXHyVfmzsXKNSysqwpDahy4ZXnbhpjgPdFdnprfxotUKybsv8GK8SWWxT2YSuaQPP6QtBruMb5KjWR9E2a",
  "key13": "bVEM6SEthJajXPPXu9NgEceTf8P91o32RcV8oDhcvqvUW7zpEbtzmU9pWujRTj3oeyeMKMaDtgc4yXJF8NzzN6Q",
  "key14": "2kwveGyA6owBceYFBxBQwjLdz5PLtQ5tqXjDAZLnbTPnfcTXUpT2dXSzB2QLCrs7YzSsDAdDGk4E5X6YDrJEYLTZ",
  "key15": "4JtcssxLdxSt1cpQ5V9UfCnooy6VDuoztBkwvguUqBneucTWZ76z9AcgHGxMTi5L36opBNzb8cBCZFrt7GphYLKy",
  "key16": "2AWNtAfL5YXESgk91b9Jdc4qvZGnhDrs9ivenQyKeBCjsNtMAQAs4a6uj98vJdRbsbMMepCF9nPvSeBMHWTSaLqc",
  "key17": "FERMhyjmB68sknVCHBJu1g6sZYbQnq9UsyaWc9s83pBidyCMSSbL5NqwLmTdt2YwPHqC9nf2S2mCxvvwojyiVDS",
  "key18": "5cyLeKs2N5MronqBYPhk8iLwwCvJUqNLXkubNKU5VRmgvx7DE33VHPTaa7FBxrJPMriW2GJDTxpCneUNU5J5tSaP",
  "key19": "3h6FC3VFhvpSeruzEtmDMM9gdkmAheWFPGGAXQQWWrPVu27YC1zrELuDrssVSQehhyhGgdSigmBbuXjFRYz7Db5t",
  "key20": "3iN4HVCm5nEuHYTpUDqFRmZa3arg6piZnrseKxVTv97VkweB2waCigdaKWMuueGm1BsQFkkKRQTXcmwkameF2wQx",
  "key21": "4zUgShk1xgN6H96ambe4AhUA1Gdt8diYTLG2jomvvTvj3uCH74pv5Zvy2Edny4k2pELPNLSuZAontMyeCUM9tbon",
  "key22": "4EKycrESoRLXenaePMeUdTuFmCmDjFatJq58KYEE8B4qD8is2hxAADAXzS6xsBTMDooz7TZX9XV442R1wFYvk2n8",
  "key23": "5keHSGSZZW527rDaMd8ZzVprVk2buHhBFyAAqBVKHvP3RBEsGPuVdk53p8JkSGqbeaUG77ZmioWM9MubajrxquDU",
  "key24": "47XBe8Pp9Xh65eNMdoNnCYirviLFcCuUdvL2Ew1uxEQZh7u6WSVgWeVCFtXGKerYGJZZTBhor9xwcboP1FiYjaSH",
  "key25": "3v6fUbqHnAUj8P3dt3FTSJKqyLRWN2chsogtppPXrg3fRZo55oHcEuPrpmW2Zr5d53UrV5JbMjT4f4ugqV9TUJa4",
  "key26": "36Bai8YsS45eCi4eBrhefYq1Ybizm8hrnrYEPUJcjcEH3DvtAq8P8q7tRDvSgfDsvz9iqidBGkL93tsaa57QNLUZ",
  "key27": "VHT5gWkS7WHGawattRquPixAKrBDXvYPGc7Ymdu8RzQMJFjnFNKuVvjjFZu7HDPd1RtytMNAMUuM8igDPdQ2Hgc",
  "key28": "4viWELJi5iWSRKRWAopnFRHWsMJdytZ95XVt5nmDfLZpxDWexikeXxp5wz3wAF1PhCWbya6DQecv1tXeZNFxCc3t",
  "key29": "si3uthgm5rD7QdW43BknVsKJdSvGB5DMvHGACgD1tFGJvHknLtFQMojeY9c24U3gC4bcxtVoG6kwYwHxeWjSTqs"
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
