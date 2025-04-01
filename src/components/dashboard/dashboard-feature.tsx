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
    "3zr1tFjNvVh5oMAFDGYvSjieyqh4VJgm9Va9VT4whmtuoHmxjamPJ3ZCS74Gokh7KTh2saruxHSGneMVJXvLz8hT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BFdx1rMEBgf5MiF9gQWcGhtvohe8GRWUHx1QRmWdTyF2gWJEnUMGHX2ThDzS54VanPDAbUQdGRuQJ76HRpJcMEL",
  "key1": "4PegVSWPZYh9SaVpBqYzwYvq6P56s84CvPJRZkigAGsZpdANJmPTXGa7iCLTvubAmLEVnh7cizY7w7TvJLvvtZz4",
  "key2": "CTT8bkjuKPHAjM7MpyGCasJXq3L7unhjmEYUEKjhPrJdHamh2mvPy4CDCq94yHaHARNUw3T5dXQaQQwuKJZEvUF",
  "key3": "49xy3eEotjB44uMpsTQTEkZaKF4AL4pNoaFQ1AjdZ6pufLDCyeN6X15sYw96H1buPuc6gQgaTznwmr4gAYa8pyz5",
  "key4": "3njdxWfByTdT3PBMKLHq6C85sCoKXZc2y4W3h8wjDaiB1NPSDv8uHvoKW8PWfVoXRf4s7jMefuG6Pnuf38VTYWFi",
  "key5": "4Zs6EQmB8iHqhqRaJ3sHL1FSjhDFkTrpNRednrRT2ED157i5gstGe1CXQipdfhNPGpE1p5s8nT4DaCiZSfzPLAH9",
  "key6": "36kCSWCPTK72zQ1Vqx7zGQ7eUeRNbqnPhpNZNYkr941V1oRpTd9dydXzgUMjimWGLUB7KntfcSBYme95FyhbTEwR",
  "key7": "2iqwdGhgTGmmvGyLwhoHT8LRJ1MBhTPhkaw4GzkDEecLCQqqiix3j62wxNKEUApEPbhcegxzy19593so1EUcjcx6",
  "key8": "5kXoeEZTiLVZStSQnziWXGeMwpy7LEnECktVZYrF3tuAQVcm6pL2xFHXUZxbAgZCbWD3j7W6nWBJdwmtordMeRLm",
  "key9": "3M4cV5SamqHEK1E6Zsur9so9qrZb8Wnzbt2aryvPjdR6juEQFezB3muserdPNadSRRKGCbrYySuAsVHw67nM23T7",
  "key10": "29JnqWe5EH8cNbJ4hARWx3ojcdqpHc5Ahsga877Njjq8BHt1NkJf138Cvh95uwUcfude63pJRt3dt9FRgU5kgMVk",
  "key11": "3qGWGeeQshAgtvGi7scTsjFCF8ew5tjgNuoqccxoCBm17ZQBw4LfgkRx8KAUZYgaELv8YQV65xfdAUWeAx7eAhsK",
  "key12": "3StUsWNtPp1Lsyh2WnvqtQgCtFqMzczYUCUZbBNa5HvLS5wM4jJoeCRoThU3nSGuLPFsXpQYjJbu3F4yYH9fGzqf",
  "key13": "4mxnMYuZVCrdeAWNz517fU3GqzT2Rn6AkywyG4t2gjkwudG2oXAU3WQfioFSda3J9vu6xx7imipJ2bDGe9DS3FRm",
  "key14": "3rW1dGFJ55qvU8oc35DRbJsbh5VjxFurLvJsU1ANdzjreB2YL9YW6bTNBRrqw22rN2PN5tbFbhzWdsdfSqFvNEM3",
  "key15": "AznEzJjnqkQsoaabr8Y9puNuDugjSyj7ZdCCCehfKXctYBtCwFJTd5XPugR48S9XhGarDG8dW2RfxRg7JUxSBfd",
  "key16": "55UZfmsPXTLv2MH2wTwRBfaV6vHtMJhSgZiRkKkfLwGzkfXU5f1yDA7zHLdsHvPyYKfUFRXZPM3ytDS8TrF7yhtj",
  "key17": "5s91sM65vr2YDKWcAwxRGnnun66tBuZrguadDnRBSn1GzKiuuoNf5P1jCV1f5gEiN5qxA9X57zQDV8Ff7G7vSKNF",
  "key18": "3TAFg9SNnWYRRAy7uNFovKHUdYBxzeFUKLgUjWX7fCuiJvN8trhBx7sfHLcStJcJUnxBCi58D9zbdRNYcn83zTjd",
  "key19": "3ZyZqrQttv7hpiCgnDZDDySk2hLXQ97UN7YLSe2TMVZDXSDydXU3q9Mb9CtecXDJ2qgt3EjUCTW4abmLw3Etw7GD",
  "key20": "65fVzeVVesHVnKE8FyeFZmXoWD1egZFxfjFrcuivCdDCDmKApMNwYZWEEvQfy1qY98Gx1GjMy6pZDq9M6W3zyJ9W",
  "key21": "3Ugv1WDn4s3K5Mx19ZkCRs2KvXn4mL9Xzx9tHH9dUAADd4p4xAq78Xy2ai9nDB9ThKxXDSz8AxRjS9469LzefuiE",
  "key22": "2y2cmUJpfWi4oL1jBcwVVB3sq5FsmC1ELgtii1k6DgoC57XYW4bSNPhvaFF8TbjG9Rc3zH1Z5hDjyDyzSxfd1knQ",
  "key23": "4GxEe3fMG64pbFh1fTmGbxUQUdvZ9X6ShHP8Tp4xS9Vh7JyWCut1S2UPFMMqjnByiEoDV2nsScY42tAXynX7Xf72",
  "key24": "3HdpvUPWLk6J8v7i4tvgDE4u4CL5CR1savqMazgoQir4ADShazJhTw1UBLRKDzK2oPyoy85DFRnfFQnGoTTAoDdq",
  "key25": "325exwdiBuvdATnUwtHW6pD4NdoqHXPLqATDATa4sdWu6DNTEDZzFtaje8UyWb67c9ZohN6nsp4PXqFCRbpCVojD",
  "key26": "2CJ6Ckose5ZhKewqCdNcyqw6ZkGh5pcxLXS7H57sugeDAnpzQPYGeGYfz8pDyPU82f88agMxTtUZkB2eqkzKJhCG",
  "key27": "63tPLqRrY5vdKRjosVSpBNJyVLsB5inbTSqJPPhPbjQo9Z3uszETZ7yjQad7k5x15c1MgcFkYRZ4Mq4qVMzAuYjH",
  "key28": "3EBfybRu6F5e8qyxiUUXxUusryXhR2bZgKtzQSLLdop8UoUWd7LDRjwAtXqey7tkd7mpT8iAuiaNuURQz1xfqm1e"
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
