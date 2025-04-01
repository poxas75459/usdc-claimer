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
    "3ryDr3rgvpknWCTCmRHh33JYrYhwWACTbnVYoJGtkQXtXQWrBKeZgPg2GoTUNJNiPHCnuSbsx13m5XGucPBwudM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EEgsM5VHYa7pQWwm4UtjrhSvfAvNiorDzWvCSV48KUPJJcvgZZrpByhBjfTteFe6G2Y9t6Zna6ev14X9bGfas3t",
  "key1": "4gPmoUKPX6HHuuAo81szBpedXPThSAz8XBNnCWcSKN91dLbPScfUEouvpqM8htadiwUMkTbZhv3pXnZWC5hWaraG",
  "key2": "5fM8WshNV6yBYf1mB7ZKL9bsWVm4k73NKRR1cXtddh7RxGUgLeZ1yKLSGh5fEuZiGLLUfcXGc2MHMYgJdMX6TBHu",
  "key3": "4wghSTo2AF3hYyJNa6qdiCNJH1kBKJrtj9CvGMtKBeCvn7CUU6J6fmwWyQNxiTzaa6nXCDrvGugugfW1Lou8NFUq",
  "key4": "5Geddb9iKMskG5G27mesSm7PkGPBenbvVtLPNrzzbaQ9Smj8GhnHZuXhaVZZga3iTUPKnuedQwTucUj8Jagc8FQM",
  "key5": "22qh97HzVFkdFVSXAGhF7FpazeAmp2C3oQ7UpsF91Y1Xwd47X2jnuHzew9TXwdVNwcHvozj6EvnP3nKJLYrSk414",
  "key6": "iBnp3ueMPothy7cMweGPpWasomEHi12BJYnqgv4Bp54we3Qrzm1h3zBXoc3zWPkjK75dFXURY3w7UzidrwFSHx5",
  "key7": "L4kDFxLppGUgcGaj6NkyfB1p5Ey86R7TNSf2dnqviKjyLvPWwDWDrqRudJgUaCT9PT2pvbHTip89vBQunjUNYjk",
  "key8": "2pDCPrYU4um9RsggZyC8Z97rPygfjmB6vjBzA6DJzqd64g13siD9ndj7EvvdWK1QNyTdrk89u8dajw6tEGctsdVC",
  "key9": "2sn5Nd6LQCsLxm33PjB4dLyLrujdN14Rq2oSAttwDDsxBBU6SHGxNCckKSprvNYLvZN7VeRnMk3Cn5M9KPxmudv9",
  "key10": "23KC8tznhjFQkcF62VDFZSkffgCTdCK9tCL8k5432rmNXFWqwF7TFcqteENuLCQQ7zZ8Jv8URvRqJYEhvQJwVwNX",
  "key11": "3EtddcL2HuwKDFmBT1AVPANc9NRvtL1fpHaHo82dCr1CfT4axtRxXYRnVUKc2wmQZ2UHmP1S5fZjey7YjkfBNNde",
  "key12": "4XoP45bdqenQXKmunXbro6EBKjHwvEyCf5LgHbVwpCasNwCUeiPhQ9NAjx7jWqpCTPuUgDMHMqoifUEebGu1xWgv",
  "key13": "2TJhiT9mY9tUc8bFv72E1d3tJ4vFtFjrm1gX4VuVNK5dsJyZb6FjD2zHwShULzDZWWTT5tkC4X6qCccX7Vh2XmQE",
  "key14": "3xaNx7Qw2fdW2K9gj9V2uA6phBuyhLkfNZggPswXo7GMYJ6wf5MSe8gKiHPysbHyQ3inQm2t6hozgrnLaVvSfYWi",
  "key15": "KnpvHyb9EdcVUCYfbXLx8YPq8VSApYyFbDt32dgK5ztyyj4Y3ZxGnXN47W2HdgPzJH2oCRLWiSeiGRvctN2u7aD",
  "key16": "2EBWrQLugibqYrnjgrtYiQUhgDbYsmGbUrMyNHSKkNHi64z2kWUzQGRseLkq2jr8owZiqxkrzb1xRpmU8uhioqyr",
  "key17": "2VQjaAhUTiRajrhJSeJ56AZBUUtyvuJ1bkUtZXW8fbLjigeeonrkzSwRDB8yqmuBxuBxoY9Y6Ld38WBrdfV76S5s",
  "key18": "4c9vsPh2nEXQnamyUSsmNZ7qCfCBsJ7pPpmdnGWPWtxKhBdgA5F7UxsWRGjknaEGhJUpGj9k7FCQDAnZ8jWZQiXP",
  "key19": "4vXS4BBrBikkfWFEGzrUTMYnsTnECDy1awDXx5fxWUMpZ8XmUhL7YowcJPMhsWaXa2NuGrUgrwFM6UYx3ZbpwvrA",
  "key20": "tx8uZFZFFjsumsVppesBFdPcpDoYSAuetDYeKp3BbetvUzxcJr6EsjyK19JdnS2nqPhbDGNMnxfDvbpRetuWKn1",
  "key21": "3vwaCB4imdUyk2WcDCNuPv63jVMWAqeKV5Y4iy9yq7gC6N4wVyaW1C1GfzNz2bp4C9GYN58c5MypQHAUHgVygNDG",
  "key22": "3bfqj1vh5mddce1UxPnZeKgEnriTGTHJVeJWpKAkpXKUPKDS2eCMArFEtgpdzoU9G7jqz27GkEgbFZffG5QRJhvW",
  "key23": "2nxP1S1g7NKs8Cs1MkFsfxxXpvsvTb2H76HXx4AbcGKpxCvfdeRzE5ggo8iTqAFL21cRMNGvaxcDue9cFrqTPkwB",
  "key24": "3iQ1yoEyZoT6W12QmDfL1QWq79kBRgzwJCMcv3ekgppfzH5StPcHbBwxSUHkzYJM1kUYUoVxMMKGEyRvefYfN7Pj",
  "key25": "2uwSngsnXwsjEPje3jncdigb6Zpx81He8USpHdQzkz2oKsonrfP8srKFEtc2mYp5KXodeuxA1a7DtJ1oBUDzKEPQ",
  "key26": "24o2KztbWbY4FdszJugCZ6PhdDMKYWT2d9Nn4a8zKStoie6CvHM562hbARPwmjxuRQwc56jegUuQuS8eaG57CLzz",
  "key27": "4gtnj7j76w435NPLmTmePoXWqg3HeqJgpyAnTpHkxRET4wygMXnoiXgL5Go9o2b3dCu6vVPozBnorfabrqKWvnbf",
  "key28": "PHkmc7nVyCS7o4W3BLKx6eG77NBWi8rmyMS9FjrjhsgTZ51tNd2L5W8gd6vYpJ88LEpH45Sutg5ShNbqSGWQhqo",
  "key29": "5vW6UNjNybyWLYLQVc7EbumpNK9ju2UfNg27pnWmP3XZipJimq4kwzG1ANsBWBPH8ijra2vJBzyrUnMrTxca7jS6",
  "key30": "2faymA1GmxbHEHMjDyJH7jihW3NYWCX4VqpdovAhkMzZAy1xDeC8eFo4xAdXFiD9BVVnRivc4FyTKifURb8sKNgh",
  "key31": "42sV1mRcndUGDiHN2PSeV9gEbjm8V9D3ukgNKa9Vw6cFUeWUqq5jfDdGnw74RtM4EFbzgRFJKH9dd5A35mgdaHyN",
  "key32": "52zbMGAUP4noJz7dvLdMyY1BHqibGwiZPxSPgJFjoj8RrbW2X65mfAfXLqDoh2G8VrfZitznD7F67RKEG1Lg5Ryz",
  "key33": "uoy37VmjiDYpZJtiEq6ABmMweVKX3tfmGwJexPCtz73CdtShyXezbvspLve899oud8sZ71T5dH2Y6twzyn2oaFM",
  "key34": "PHdr3AGbkVVdQNuMpBJF59DgTUvyEHziu8TzswW8V1q2Uyub9sRBqQ6Cum6MuvgdcGrju8UnaR1ngtnRm9NNHdR",
  "key35": "2F7BkGMGX56uz3qqm8rxryH53WTbJxrenWKL6ExKvWTjA8PGYSgFcwH3NBGr4yRs7U6TXEYqY8cAhVWw39zTXaeD"
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
