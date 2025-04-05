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
    "DJmjSf2iYPdst1JZwP6YSpqpRXetpioyWZAF2ivwRpW8FWi6nSJDTzbL8VAJBiVU8tJLFneqa65dRr3HpgciwA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tsj5QaiQ2QRCDQXkKfHHbGFbdLE7DtPsLFVYhS63TfHBm5b1yNQuMBpbFzVSK5rQJUmHs6mG8Tn6QounREVVLPs",
  "key1": "4FQfb2Euxp8xSUTSfMm9AGxbpCqjoyzwHcXZZGAZ8iR9RPJ5Qe2yuBs9AgNF2JSEsBkZ2s8Y7pBYLZYuSywmydPS",
  "key2": "2B5mtGPZuTZ56wxnPXUrRwezdseSRqVaR9eykQqjRW2UeaPquEV5Vao3jdAxG1vwNJM27iEJs4NhHR7V5KnCYGGc",
  "key3": "372xhkP7idCLsJ83KQyAet36VTDrTpgFZ3G8oLanUPeezfH4xhC75PSkXjPU8sgfSbBdkThafckjz2f7oSAvPAuP",
  "key4": "4ekHMXXW1qRus1PPHDQmHwY9HVmesFfVp7vZr1ksB17SU816d725EzcLLpUp6permPADaf5YQnSDDMcr4tr5igJk",
  "key5": "jfSxaFd19urigsQQaYjcXyNiMa1LhmUfTHBii2FLhXwysVD6E5ueuq3L6i37mSQYjzaJnUCGCwhdMox4rVMjwW6",
  "key6": "3uHd95TpCWfJiKokC1snSMNH3W6XYa8SYWPcYsmWJjUk2yW1YRaHLS7pXF3PQuPvFTM5o5ZoCL8CMjXXNrugMmpL",
  "key7": "23odNA4dpToa3nQ8EreKiMjMUNv6xj4TgYLS2KfEvkRZ8urMYysY542UQw4xauf69165h8AEA6LCN3L9gNPho8fz",
  "key8": "3JQeNAshpAzAXh9zcGC9gd6uWEpTqtGBpfezm8UXHCgnyDuzk7Ud5WjTfURa8iQSwB3QHky4PLzCepUuzFrbwaLL",
  "key9": "4KqifEcgFKMR8HTuNwm8Kmv5X3A7zPDxcA5b2Yn4T8koLTybMXsLeqjPRtioRoHSShXiCNzGD9jX1ytbrkE4LZoY",
  "key10": "Xo8GfjAin3jdY8anQFNLkzHBwYBKHfoxRBYRFH7nGF2DKNJv5RTBjpa4D3UjdHNCxDpXeYJhcc8e8gWSfEQ76JU",
  "key11": "5L5t142tvvf9e3MNhixZzVxFP847VcwPYbRqjHXJch7ddGNPTgM4jzE2Ue1YD9evfdgHRjM2XvUCXuUB5rfPUTeB",
  "key12": "5yQZLNRYV2gWAHCbD1b4UnMJP1HcYJSmYx7ZnAmgcebnnRgQmTdFXuQUgsx5uUhkqVmJdjn7bvcxnbziTNkfVtJy",
  "key13": "3ewjrtRjU8pbe1LPCPqLWEjLM5H9tU3o8p8gkELxwCMaeLEqLKhJEUvr89bk5vCHB6Zfb8zB31jP8ZZB2QiPJqb",
  "key14": "4Z8Ze6LdWfPmWCvA5eZQUqLsHaGSMUXzDkjFWVKefzYKgzZb8tiMSRk264bAqxpVuvKPM6MaJodvhhRVuRrNKDSd",
  "key15": "3kaUFzwemGpr9833Q4ppSgVvHGfT2LA5LuLuwcBcnpdWPKJ9qH1NiKndfR8wVomZgd8uUgnmXKMGEGXvwQMMfF31",
  "key16": "Qizdz5L4jw6xteYocbuCsovPV6JYLTBxeuLVyGRdMpXcsBtTJfiaDGgnBhuDtvU3wEt29HragGRzVBVEMfzxjxm",
  "key17": "2AG8b684wX8jGepQFAGGBbWSQ73q5P7Xjzx9gJLkjD4ebvZYSt8eKNe3qLR8YJd4NY6VXNr4dWmrnNYUEFSCT5K1",
  "key18": "PEkjahdrFrDcve31Ns5oELjarwXQ215wZbcXerE2aSUreDmR5VfyQpR9HQjEhZ5bPBUHZHMQ4X9fAEPJUt4yXw6",
  "key19": "3AQjhz8Y5rrHgtHJnfuxkxtbEYV4Wyo93gNya9id3hX1i8DZm2xoFXXX5mn9CMkj5uZbBDCDts6hvvDhH4mJfRex",
  "key20": "L7DFzk9dcy5DAdSrQvhSYCmhPpv37PmWK6pSiHsP49k7dm9RSZj9keNYVrjQAFhTv9HukEFz86Mon7vp8oTyWUc",
  "key21": "3RuQC2UQW3jvYf6f77Pj22otRpp492n7MCojH22Gd1YHdBLu7LvGz9XZ434cJEcG1vxMBpHychuk1WnoS5mXx5R4",
  "key22": "4ktUTLQMKRPRe8vrNgrQYmDFAB4EqzzswehpsicrAUBLEWxFXazwmrbeAD5eLcL8AqsqerN6KB7J5fhFk61je4aE",
  "key23": "5a5LMgncoaUAgMVMYqVh5xcbBJbKTxVgPqxvPkmGVeSiNXCuuGLfPsCAhRSjk6bRabpkcwgQC7QMEtxtFdmPUaqx",
  "key24": "3UcbUS6S5AAAuHmopu2PjGb1W2r5inW7pvUbYyGZQXe1QZtxUNnbqSqYuJjtqQk6tJjVeqGGAvWwwLtY54RZP84E",
  "key25": "vAcxtp6ZHKa2ezjA4TPg5rEEbYDM2dKZyjj7R7URhM4vYtrVjymN35x1Y1QXksLNMMFMFwg54GVHJ3uozTjxwjJ",
  "key26": "44urYYHLZuLzijDCRzixPpZE5Xmcs8jtxN9uA2BXcBNLBrphCULjPBi6abrAxszXQUHBYGzFKoFsvBLWzkp7aFyi",
  "key27": "4e6R8HXV12awLpfnypWQwQ1cewaiacHhqHvxFQW2qupfhag47tAkhw4AzTHrCjR1XH93uHTNmdvdoMtiM9xNRa7M"
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
