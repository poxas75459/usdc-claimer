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
    "pFvq6qDiDaFVPgarUsjyHu2o4LkqaMprmm6VNBdxurzTER6oZhrXFH9wTfZsjPjV5cGzyUZFRJQsi5chRUYaxKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7z8RFY2scmEdQVVop2o8wLWLK1qqxerPisftR8wEUkojYJx4hsAUTwoq3aLBDLjhGAH4wiQmP9jCtJrST2gjbq6",
  "key1": "2a6EBWNgW8AJwTp371LfqdLxVxdR7FJovL27sHqnnT5STP9Fadmyk5Mqza2mWwRwwsbbaoQaKeU84L16QcyMW3TE",
  "key2": "4pAhrsp6VbJKTcNuTLZtbLBntgJwSSoEn6qgEvvXn36KiK6R5Qb9n1iA4PDpmquYa9nLMMpyd1sGFEQrfcZLzhLM",
  "key3": "4txpfJsW8kZksQ4FWzxBBuNfSkggAz1grST3zp7nmuGr9uj4VXXbwzsUuYXBM6S2HAkENf8LeA9zkxFMcU7hnKTo",
  "key4": "5DbMj6LADHWuouWVPvgAqnmMCvZaXXJ9XpRZ91KdEnmQoQKokobcwPqtWNqPL8WcoQjLY63nBth2dxQYfQKT6q3w",
  "key5": "5ZewQXf5xnLCAfNcFPBRsaRFRUVzb9mMkNF11es9UTS9sdJE9jTZWQF72pgCjEWfkudETb2rT8bNti9vrykxqbUx",
  "key6": "2akAQJozFwZ3iTq5dsBJJs9YrbVvWip92gZ5vCEBKbGeroVS7B3fJ2XDAaFuPe6Lwy6XTFoEmoxyYNxMzn1mM5So",
  "key7": "54HkFmC6a5yYv6LrfnPPkja5gEatmPMf1nn7oPnUJ5wyKrpCy8t26RUXDJHCj5gwu2QqXtHBDdUKAvdj4bdCJXFp",
  "key8": "31UdbUReVzsYPX8QMFnH7uYWJZVPiaZ5JMU2KgzcAGjrd67oJoQwoZc2pJLMUdi7TcV7LkaWgUERAwfqhQDm84vY",
  "key9": "4vF66GRX1PRWhDrwLF5zkYmCSTuUY1PVknNTFMjNP8dwZr8Wod1kFNpyVK3LHRdKcnGKXXRqnKuw29zj7S1Rfx4R",
  "key10": "5T2LfqQjqHfGysDLHe7J8LHpZ6hKeqWnaf6LyxzgDLyQdPryeojhP9Wiu9uCbq1dU9LDkJ83cfjYFrrUPfvvA5er",
  "key11": "4bh3pDUxvz2pw5PE1pGrTt2m6YWXiVvuPhRT7NpGRXPFv65BM8LnvxAeoFJH1NdqassWFihbXLLWW67uTbPEgwE2",
  "key12": "M7P29SB73MyCd3DrC3L57V87vy2tmdVcshwAzHztwfMoApYwqit49iYGgWbs8DWGzsRRsH8JgkiaR75H8KRMHtR",
  "key13": "4bon5RZ4kqirJsSuKrf7rrRRUaEyrZpTUsxqfvv5DAwTTafn6apbP9CE9mUi8MBFR15jkLqGugPyUTqK3zF86Duc",
  "key14": "4vP4rQST8RiNCeGaB7zvQyHUTMhnzgocsbPnzpajTr4fAweTWXATMYKM6ZKkzJ42cqZamq6MoVTj1P7gWPwmLMNt",
  "key15": "62MYuADrYSMFbpi9aod7gVCWLMVi4nC8A3tG1nAQn1BvZv2rzYwKN9GEyj6iDzx1uzTUvwM7iuqKStfMiudZPX7R",
  "key16": "2g9Ek1x7HeZtSP2tdc8PEYBgqrcfJng4iNjJWpXsGMZc1eUNFhgvLDGzFcLjxC2YZZZm3p5KNJPbPsHBtd6rYCaB",
  "key17": "3gNdyHLZBMuAX9U5ngkcPKpEWTVV8MBBfxgGH3eK2pz7X27RNM9sN1d5nhZuNjoUqfiPfzY4kZ4bpmj6qtbvsNAv",
  "key18": "4Y7bdvWDFMmSB2PrzjCo4bXKZmLRPmfYTktsk61Sxf1TLWWNUqCtydxqWdiZHfdhiSZe4LLzRG1S2jmg3628aD1f",
  "key19": "2TJ3TivRq8XVN5if3ppkwT5psegewXXdWNrbizbaRwf1pfcrfh5wweVm7Msg83qo9zJkM6R1FyYH255x9fbyPu5X",
  "key20": "5jdvUjWUXbu6XXVGmMKwa4hbHtPHBnpoyDfpbmyqroYkWk3Agdv774R4pBKqMnLtFKamVAES1vTrzjkWDpQveJrM",
  "key21": "RHrVEfbgwYCx3D9eu52cjYfqQqnZHxFrEkahjULNdjtUVKnpEWDt4rXAdsXcBCKWq7vqJTJnuUYcnDso7gQnLQF",
  "key22": "48aGs5Tea3vdoT2TzYs6LngD7hZfCn4fUUdJK8bgtpjLzeB7n9AGtQWfabckHd5SygjqVWhmSgsYdcSFzQLq3L7n",
  "key23": "3NMnvxdNfCJr5Btk57fAzJTdhH3SUpB8nWDk3gjBduC3auTyDctupgTttSKpKXDB9xQeG3wwhpTcnUZsqP8r3Hxh",
  "key24": "4rQsvdSVYsbVySqBGpamWXwrcMFTGPLTjDkyGbmHioaiNZjqCQwBTC2saoh5jDosznm98zkazAPLo8tWTSeVMYVD",
  "key25": "3AeD8KH2jVAfbsepAnwPtGdFcDAMbQLPGZupxpzJtD7qnhz8E27zJaeJBUVCV3eTy4asVScYE9nm6pejGDTBFDKs",
  "key26": "2Sp5agF4EiDhUJmn93htn9HzHnDuYFStM92764A5pcznny58HSfpAj6VyWnuhCRUB15EqsaCFK84qvBsnnou9MAu",
  "key27": "4DLKHabNoABrV3cdraqekGC57ocQpbGUPaF62BSR7EbGfPxe9WNvcjeZ1tHUC3B45q3AKwxDU6mrvHMo8UFSTcHv",
  "key28": "TUCEh9KJsEu7pg2vgqJK3qdhdQwDnPJCkRPbiiSGxDjLuJzKNRp3AUwotbeig8LGqwzVBuoZjeiHqpD9xeGPDWx",
  "key29": "4FQrSKKXUU2mroCh4NrTLFXU32w4jmAaZAJ78mW9NUjW7kJrbDQpWBMK8y72snLwab9EFkWouq42zEo95VCrbA2V"
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
