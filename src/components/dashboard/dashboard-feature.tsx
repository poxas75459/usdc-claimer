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
    "WMrMYRs1iie2kkstbaM9uMgRgEE95TwE92pSYNFeoD8mxJMM2b3EpqhkyYAbu5gg5RLhCzgTEuiETUQYXiKPjuB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5szimJ449evqfcrzhhcvEhjSeapgfwFvEHzddTkiuHSQZQHKVoMrLRMf6ymRs61Bb8ZKKEgR79vt9X3kvHX9YkaR",
  "key1": "5ipVwhP3Vf5GaK1iZie2Wm3MA52jBQepZpUNkLRqBBTafbnMx3xdDb54ajDw7yQgA2FJdxHKnDaM8dQoxDZcqHs",
  "key2": "ntSZ2kw7rmTUo6zt4XKZF8WGqh7YAuWdUxUh3R7HXxH2oDHiNXSDjiRUGYfj9CDyNF19qPPSXRQZStJbnRQPWqF",
  "key3": "2GCzXcDjUGd24vRKgQ2d4mqoZz92kjVbEX41AyBbayeUr1VmJv9jm3byHJwiGoSvv7BK4QmdJRaPWxQnpA8XUD2N",
  "key4": "24qP2KD1DcNymvjnprw5TjbdKcEidLVdXwLrpzDgvJACKPpY4cXqwV61MmrHn9spR79uhZt3oVjK4pAqzjbEh4sk",
  "key5": "5mjeVXwzeA4b4cPaNYVPBwZmqNfd53NT4tgqL5RFgG56XwTUxVrDsVtcj36ac3LA7kMyq5nrStoNEdvhsjefx6E5",
  "key6": "3iGje13VDtWS4QhByAbxt6RCUUUsgSQ4pLPRaXteAoh5eKQerwAcmuzmSz4wDFbKk74bjnRdwifCxKkdnkWC7TCF",
  "key7": "4YsSJYNDFHtUwMbYHudt6osPkqkcfswL75SDaLkcdQaXzrmcDNuuTQC6LYWag64q5B3pG2okpHYo7yCVpKcAw6sj",
  "key8": "4MUSr8FWnZM6vkbac9jCf1cUnLwf8R6guBYTgqDAjhBUoQb9wEaQa37NdqkCRnV4GrHnsHxT5pSigC9sLyFryQUe",
  "key9": "oJJVJYj8osQMD33Z8FTPAsGSgqVW8R9zcnHgrL5feM22n6YgvHFi71FA7APsVPTn9hLbReS8n8SsrJvykT8Qih3",
  "key10": "5EmJ8fj3pRTBctTkcoKsLciAS759BufB7D8tXNZ2SPTUR6adiBAuhdGFz9hBuBrdvtcqeP3rjQJWABoTcXcL3CFE",
  "key11": "4EKFX7TeRP9Atk3n9V4bNDYJSmfRK5rPL4XTQm9zj4A85Yywt3YKKeZEo7uFogSxnb6rDqaLDm8vpUdpGgVHYtb5",
  "key12": "5ob1SCR96uPghM5gi7vXwJa5Nr7XkjGTnyDMi6ejptYMmexwchg8qV7i78E7qZVPgET6LfStvfaYXRf2QB875Mce",
  "key13": "4mPyGC8YHeFGFP366CX2vkeKApax8LhF4pQyepa2Uy3cnWYHjhhknepyJpWGbhLqJNp3iRuYLJyUA16x1JsFhmrp",
  "key14": "eQ39oLCnUc3oMzfVvNkCZumRifKUMUsnipkfCC16LFr5E4httPMvkfdVrrHq3bojZp7zYbbidps24kiNU1kTJcf",
  "key15": "5x2VBLoYto3xnrC1obWwFHf8gg6MdyNeZ3yyqADF3HCJwjQXRMkcHPbFPViaWrJTvjw1pZ9dnKoipbajbascfBEf",
  "key16": "4zTNW9fzffQfPCpJJ6sMo3bkuPm4LVpxmxB6taoV2bNdSQWNm4z8c8NyhakDFY2gEsBioMwb2xiN629hQwqXD8mY",
  "key17": "ge46gKMStiGWyGmz9PypDPqvvjmPwk3MRtgsTo9zehUtj7cv5VWiosMbYH91UePyNKNkiJGN3QyNiwSa6EhnyBe",
  "key18": "3fNm4sSERh9kyHUngtLS5BM3C34i2NRWRXNTmLPMU1nC8WJZz3fjBmBhsKwPPuQc4dY2DeDXbBUC4eGzrNGTowLA",
  "key19": "2qTMGKd4b5r4jVgeqZZzms21Yr68XGLLGzCZn1jKVj1HEcqYPdasAcG7mUwMtU5u7dadNZhZomCUAD2cPyo6HkKL",
  "key20": "5t2PhBNp86K4dgusceFRNTs4damua7JCoe5QC9ZzfVAL8uWSCVN2EHpvWoYdzJbSqqvvjPJjgnBZLNv8VGqMAkQJ",
  "key21": "4zWh8rWSPg3RrD7KygRQnmmjKRzJ3EBKdMZkpbZzzSTa5EVEJbXt2DzWYm7KiYDg7ag399mhtpuFYSQDSEZEmxx5",
  "key22": "4vxxBHbuAQxkcppvEU5UtTb4Ud3zL7UfstastuXhTtmgS3MukqCz2znxciVDRoaFFaVh7K1qcEmxcBWiRVcpEeaQ",
  "key23": "5eK9poKJhckPSQrz5gr6yrKq7G8CJniAfsnWRNfAhdnuMteZY28FiVq3bJoN9Gup9Z5KgSAy57gcKfqGgXxu38g7",
  "key24": "ikS1sH8z1GZV4oqR7RycwcJgiK2ARYzzHkL3EtTuPJpGj8Lnr5ohAZaKiCE3t79N845zGqorkGttguBiteKBhk5",
  "key25": "3w5FSZTuL16rfC7KUsqcsu34wdqdDUCG3A1jHJSTT6tvq98G9wi7Jm2pyUYpguxzkTxoUpE3JCsu8HjV72KRJBuo",
  "key26": "VbHUZxvkhHjNF7FGLCyrcs8nrQ9uuDXqd9pa2GjdYmr365mAm6NzV1nZ7a3TcoJ3eykQ5zv5aiUa6Ww7QbE5HdY",
  "key27": "4xyQKQVQqBC86qGrkEh5LT8ymsBSHXN3yerniWvhkNtVSKzQiJtiW1Ldtg63K1PHbit7BGzx46ZXMxdWnDHerZCX"
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
