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
    "4zqtj3kFrTZRvw8RAzyxSrvAdpCTcCeQtsUnjbSx5i5w7Vjr9DbauETBYBAE7HbycDLdrRyuCYfZG3WtJPNxi768"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qa5vRAWR2v9GqT9FrvDjnxfxj9K3VxXM1UK1tD8DQMS6Awy29H73wKTfCwGBYw7btA52PARu4dhbxaPcJPgvqiE",
  "key1": "3HKF6Mocna15kUstKP46ydBW5jADtF7ys54b8yLyXtoVCvnab7tieqqvgNMefa6zaPX7gpYE5rYGxFxGnqG4Yozi",
  "key2": "3foUurZD9K1MQsSyknG77qjiE7QhUzzKNLopkQXHewQRBQ7Deee6mFvRkmSToWx14xAaApDY6bZtN7Y7Quds9DWB",
  "key3": "4hhzV9YjnP7DqowPp2Ky5W8qRApmtBhkbzo3fEWCkEytDGp3Bob4DLwDw48d4krAZRDwetZeqTRVuTqQ86P1QuNB",
  "key4": "5sVjRuwD1fpH1juHg8tStNnbJsFb6Awy8We68EcZGLu5hcbuPLr1TEkQDjiwsocc2ThBUbmGsyQZDYdcsz1hUv4i",
  "key5": "3nh1mwGgzL9HSb4hr9mSSRfx1mWMSZZtiy3aLYak1AXQefC7mpH4GrPjFZPiGZVJa2L5Ys71iPa9oWMDtrCMxW6J",
  "key6": "1PTKMX2HFXhhcytSNVxV796kUgcXEeN7Py2ucTymZhuqXouMh4Tq2vnnKQMy55KyQZ1KteqetCvsLcAipLm9aCZ",
  "key7": "3CNykBpDuBcYsBYCKeoyCtE5vBZk4JERSnhcDKkyWzrqLD1VpbGCjRZg7Atx3qiTC9eVpUjHPeGi2tM8j2BdexdH",
  "key8": "4WGkJ9oLqxqzTubneKxYun6qz4wZmtcb98RBtT786dX4gJmsGczH9zLWB9Ugn9apujCTHsoRozroEfWf9AJ1ix4n",
  "key9": "2NPbNMWs6pVXRRsATiffEDqq4V9NniNjgb2FC5MsWKhkYVPaissLiyV5zjNfaqXoXEQtE9s9Ty5ho7HSZwa2bPEp",
  "key10": "3SsXHLPHMqQj9DK2JJqjbsbVyG111gzCxhfX8Pw9YGJUZwcYhQwnmvVCsVgH7AjFJKwMRcAiNasSdxJhv77RHzjU",
  "key11": "5FFeA6Gm2LsjY6cix4eWmfoQN569Xa7dFPDjuci2xyAdAaMmTspQj1aFERPMy2ULePtGuPpo34PnExNmvbihdMfK",
  "key12": "2mxMb2WKF9ZcPMJaVc3y744SakxLNWyHm1V3MhCWyx74Zonk2oFWEsCMRMCTftYdyMcJtyyXpvtB4VGfyny5FweE",
  "key13": "5LbyMrjzX152u7M44QUvQPzUcGSxePS73HyCwTEdKpoXDztYZ8Hdx7hZy6FEB4fskFFEmmuNUhx3idDDxzZoAPoX",
  "key14": "c2niNRYeaeUWy4U7b7XBtGrEB8B7iNHUY2PSKFEYHJiXyuGUSE6SV3P5LSh711TXWNz2K1cYCn6nUN7YxcbkUcX",
  "key15": "29JfNuoQ3RrSwUcW7e1GJY18PwBuW4apYCA19tXhKvg4ABLoV2eyqZ7iA2Q3DQeqpda5DY71Zi1r8ha3SA1Pv7t2",
  "key16": "2DE1HgQJHQpDBfAi1e1NJnPqhRhHvKhLkyxotGTdvKab1v1aHnU9zLWDC82y2N97nsBrygmCqz9eryGd4NAXqonK",
  "key17": "3K2BrvYhKxxTg1tyChCcdeTQkk4afyKE71u1Js1MMgpjKEevTRgfdSSVUDufit165xtPmrGJaajMuS75SHSbQEiM",
  "key18": "5cu34ZrNXvUZpPNjzWcYP8k2LmgcxMbJyGmhAHgTszDSn5PoiSJMn3RAngD5TtjocbpCzVshgjuMK22FsweSe3st",
  "key19": "5PYAfCC3vU7aPE5FrXYRVApEoViqctsQV8hYDUgBYm7js7tR6YZyBSpY2tJvjYNjboLXatKHKcChf8xpxehTyTcS",
  "key20": "2Xb1AJJNF7Hxvj7T5hXvhCEnVMQf9ZwNXkR6PCceifHfA6EQZFdhrMq2hSeryTXNahiPAia5w4RcxgHb3c5uepZv",
  "key21": "3HTNnZRGsgYNtZtnVDLWDH84ms854BPMSJWfgb2pjxyJMLsoTKcmsZy1TgS6Py8dJJs6mjuQfW3qbFMKegr62Xcx",
  "key22": "2DbDgCVP6F92B7tvMVj1ADeAYxNeeVJA79ULjF3xp2CFkEBNhw9fw4CoSw3sYkhSpjwCRLQCgtZRESeoDTRD4WVB",
  "key23": "2aXHzmYhigPDoWj1YpY7U4Z3batqGnfdbmBgdSM4K4vj8px5YYzxWvuVS2aPKEhEza38rtQ2t5EEyFEfjTVgegPR",
  "key24": "2LYAA1XVFbHzgxYdcwU8V6gLmGCadafJYmXw95xwVB7jcAGe6nKiDKNtTWd9DPfxUbP9ppouKCUWhLDXogCE4FLj"
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
