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
    "5UmZ6kRRv64QJr3F11kzFhSMvteRgrqf7nuzKqnvG8ZCkTa5du9c6LN4RLETiuVyjcEo4CDj4BBMcUsdPedhrYRT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WbpeaJevQBVodzEmQ1ih1J2EEQgNWZjNT34NNZ8vjMMpKqM6KTPZm4Bds8H4DNJwuqYW6eyCmPywUmhSo5LL4eV",
  "key1": "3wwVz9n9uhu9Ltc8jhG3iiT6XyJZQxp5CwN6xAkTVbpDzm6XdwxrrZTfQYNqa7nvDApGURxXZexgCsNTCNTimzYP",
  "key2": "53EFgu7id8oEDb2adprWS1tENhnYBrmZU2mCydgqBjP3u143GQUS55zuXvFcJUgc6BTxxis7WqK7CEuuRgwDZkzC",
  "key3": "kyyemBq5Ab7ndvvV9m4rsXorUnpdVJWT9KPJkrY2ZuwzWtVXYcdCicmZiGqFvGHjTbXupvUBoz8LySfHrtvipDS",
  "key4": "4a4RBhwEN95PFgEUk5TsMrcFJopazTa4TA4EZb2EcnqFus7CZ4oHWPg9TXTSYyMfywyYRGuuf6ATNZBgWKCDgyJA",
  "key5": "5Ns8DCMJGzHuKgsBDJ5HYeYS6yxvYmimPZxCwvNguWM9vMHz2onWQTkpVaqnDpdB343upqeqvuRRs17r6sXamSGH",
  "key6": "5ndD9qbQ3CoUY7R55ZFAf9eJix4BP3c77ALZU8sxytZWU4jWKisoywrH6TifxMsRb8zzSGz78EynGFeeWnm5bEoy",
  "key7": "2X86bARNHxWAkBbds4refqij6KTM9ZDth8AVrHZ9bxgm5EZrXKN5RUsSDWHWNz4whnSsjiL8aX6q1n47TTXdyNP9",
  "key8": "2bVBs9GgazsUU3ekfGPTBj9naQJiNyLLXjsMFaYtGL1vZSembD4knLeGczYf2yDUYnSdTwrjazX33izJbJf1xpff",
  "key9": "MGS8WDqajManWLJjgQnwhQcwFiitAh9NPBkF8DDLApdYe52LgfHragfBGc7WDChouL2Hy8zq3CseEQsXffXX41r",
  "key10": "3GVWfqY7sQUtj6eN146NcGFD2w4pHMDPgDfyUcrqrnX6Wss6cXcbfA9eQQAHStvtKWS8dW2zMAMgAg2FF13cN8AW",
  "key11": "KB8qmMoopppjRNp4oMunEs53qZEEakeSBGV9acqR9u8gAR8TvTRCGPFuToZBmNPmsXjCNePRcF7CXbCH8sr65te",
  "key12": "6PoKTMWdwzs7YhcXEiDqxR55Mriv7noNKixaaN8xVYF8eRqhQSxquvu6NajA3obeT5f7ZT731pijf4cAyVJS5pX",
  "key13": "3Je9M7429ycHysNxoXWPagsjrSAPGbPVyiwdpHQWupyyCJupZqjGZmrLfjAr2QFxwNQeBEm4Y8hNDCDaB7YsdUjt",
  "key14": "GqFewu6fJ5dLDim4fMJvSumNeoVbHzp1rvE8nrWQy3KTuA2u2puJLxMUwasfqsnxCX1MCjH1k84AyVp6PBLdCYK",
  "key15": "qc89F2CVkeMbQRUPtyykXKaT5d8Kh7G46WKUsSWDXZhDe81GqT4MdQnsamnn6jufZnVqtxb1HQz4niU6LcpJm5T",
  "key16": "rpooys145jVMWcQGbqSG4awX969AjWu7AB4qYX39jy8UcnimUPbu49rjZZpg9F5FTdpHtYBTCffT2838Tevst4W",
  "key17": "HEyHpMz77BBNmmYw5hCuCk9BCoxtyfE61MJWW4PqojG7LmJqTqVXrm3Pbo1iaKfnFcD3zznwfq4hhJbLopVjy5f",
  "key18": "2v6XFuCscbpLERm68snb1VdC3AFKT98KjthBuYxLGSWzrCNFxCkqyfA2SHqDQoWEV5ZM1QNyui2fKUhF5ky8V2iB",
  "key19": "3RmQQoNdrQg9tL3r64SvRcMAPcuKE3yB72muX43eVo9juUEsWrAKLQyuM7ibiWNtoMSCApDWuJ6pBKWCUQM73pnc",
  "key20": "3qmE2CuXMSEfjXPAP46Ad9gHFz71VmPGt2jDx3vGHsm163xJYT8Rne2bdtnLZQgLQs7Eo2ukaCFtuPXwDQYNEsLa",
  "key21": "3wPYZpdT1212WW2SMP5fUdzc4ePUnJEkVVNbBEAEPBYnc1NYQMixiBRWpqaZFpQ5f64YAyRe2TTheASmV2wxGwnr",
  "key22": "nFhNrv8tqe6frsV9aRN8v3B8sZrKCdBhBoPNBrtLCx8Zi3xsur7ryx1QxSr1CBJTmeTisi3zr3Yh2Rzrf5ErFia",
  "key23": "5Zak8doX2ntWWo14zk83FAG7GngxdnR9iTVDednaeZKqsufwYsxU81dPeVaQ3h9BNcd1XEiWgmefpyyt7b2XA6Fw",
  "key24": "5fjc2piA3DvRXUeTiT9Q7vpTbWjMLvBDoGssqoUBRtKhMetPMTV4vVZSWdRc8JBdT6QXKMDAR951mWcuxo8QbTFi",
  "key25": "3Uc7o56ux4o8QNuS9PYmG8ut4EQ77GwpHaQVzUzKtemdFNJSx6dtTdyQQkPusSZpSqq8YAJPFRSntQZHszWfPLff"
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
