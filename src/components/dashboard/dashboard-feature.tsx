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
    "319cec78GH5tt3YzJbSa6gnRo7HoWbm6qSnr7FRzL1oSJmSe2URyev3ZxvnERsNpBezyHyNMCHHVvahbuZLojjP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TtkhMXJH2hYWVRP9GodYHf4Grm3Sg6mBUVP2CLZ9CFVBpJGLUbPuaHzQMKwT4kxKaa2C3tqQFuQJ7ysCsxeb3PQ",
  "key1": "4CvCd9cWN9gH3h2Cky6BT7uA6cWedSgPVEZtmyi1zc1JWLoeKv3xsQ3Gw9ZnwYiNawWoDYyRSaWwebNfdbMG83vo",
  "key2": "4GweDR2tyquKsjGkmZTgfXJ5Gx8J6nA7wX1JQ39dW2SQfr2t7Kt8HBbm4m2uhdEEfksaeZqVLoVjjCpKqNxwU49y",
  "key3": "5tVvvXsubCAAawXNvuxuEC675zaGAv5yMx7iqGkMM2F7mhRBGrvzsGEvLdt1H1Wooq9nWxekEwbcDZvqYavgdDyb",
  "key4": "3qXie9dCw3MFSyps5CzD7KWNBUqiP1jS1qfhAiiPBtVRRwvXHwcPq29wQRrJM3Dpho6Neg5CrUbYVcXAtJQvMzri",
  "key5": "3dMfXK6tq2HKSEHWMHhFK9yE8L6iW23Xk62PbtiZwtmVHTr1Wj2YKCWpXmV9jMHtktQ9HieqohvdPWUGTcBJnAph",
  "key6": "26wqxaatS2bj2mbrxHr32MVWvCXX5XBURD3KobGykL2nx59HkJiZkcUxrukVpNwnzbqBtjqVXsKz3ePNpDDmHeH8",
  "key7": "4Jnp3t33M77LUaG5VuDxa5FyaZoUV4MZD16LPdzaw8y3W1bhjYJb3uAuZo81pBmpTCZs371kjyn85fqG2J3swmSe",
  "key8": "4Hm1k1R7pfzmd6pyU8qsiRgasypzQJtRUAFonUAueRSnKdnPATab9YKfLmdVR9CJ7XYPcXbKZcAHL4NbotZDsPU3",
  "key9": "5hsPhMe4pYs7KXxzEB1MZBTkHwzw1DR9YevQCW8SXxCneu55WRARbKRAKS497rZBGHZb7ebE1U7LrMUQwptvAZaE",
  "key10": "2bNCB3NoeWaUgyKdbdmjnEYzfcR5j13Vj81KeFtiskugPGH2tBr8mJejsgTVN3p4kBnxvXi86zLayvDb7ndqNzzZ",
  "key11": "2Eg5G29p78Naw9uZ1qYRfeQoCk3tLe93WyvtrpuBEqx1iLmaCKX8B14q9gRQtFKGss3ikV95v4mmZSUCae215rR1",
  "key12": "5smjdu7ioBpsXGmBMxVfBFQo5h7cP5MRPJVoZMBXPse4kcxMD4iqm8T9ZWrLjMTq3bC6vH1PETsWb7kDfWR3NKhZ",
  "key13": "3XMvyycBeWGzDtTudM3AgRXh1kpxo33CFJZk5n9ZSZYwa7fD3EVhtd5Dm7er36WyDgMLN4afSZQWBFnLMvb3hDT5",
  "key14": "59nnwgNfsiT1evuiLZ3xZkDE89oWsvh7VqXZepY2Mc7ceBjgFjpCKsUmuh4ZNxyqV5ogecUDWnhYJWEWLFQui6KC",
  "key15": "5L2yup2hDZLNyUiiAaWiDP62KTTGi7g5X8FEvPsnGRTBxtPNe6Bk1MHLaCEhrKRKKYW88RHDtwrDLQyL1SBm7ELL",
  "key16": "4qT58dawgYGtetVayvS1nfXL9v1gBNqqiLetTKjfSjXT47iKU57wZEgTJWsEh2nMDq4Ehsj4SGoy4gkTjEkioqKZ",
  "key17": "2dow4uaHbFCejYUhV5ePfrdz1uhNUWpevyP6MRQn2wSRHLPJMDBx4uUGYFaboNgqZs5eMZ4pSq1dQBCtjJREKAx4",
  "key18": "2BXTJw7pugnuTNfBtkNnGmFDXkkk8ee5riXMYjk53Ceg5kSxhwxDaFShdbjwvcP3LriDDfU9jemVSSBSMpGvKfEH",
  "key19": "5cj1nyDRaERYNrxw72HbEAazrhx6ntvzKg1Z6awRhHGtwcBK4g49DpAeTitGMY2xaGhwf4gpMN67rVXGsxk4XqC5",
  "key20": "3Dvk2MoLPJevjxkmFBafZQ5JxKpjx65eWVTNfDEC8MoXn9ekhdXxgyx8KwhJT5LcqvAngM6AfoRLV2oTBpHfkWh3",
  "key21": "3yaUoKBKRswPW5XGnWRhVv7yA6ZiZdr64HqoYjprmvwyA1qat9uuj3HngehumLjFRcFdmeTgEnqvui1p7uFj9HbT",
  "key22": "22N5k6nAv2F2KzMYJZ4Ysck2JqACsnJT53mmDjYmrnTEyetu6G8AZ9TgsNiAtRCikXmRLLDB7VP7NFA33RHFpoty",
  "key23": "FYVrHurTKJd9ZL1VSFFWQa7q24fhHZvaTnCW3RSZr8DpzqR7KPPNBqX1w66Pp3SNLBj4qjZorPv3nj6AUeCgF3E",
  "key24": "5uE2PsfEW9v9RG8BuT1sPYLH78XNzfkLkvhom4yjuMQ8w1GevcSGNsPXfgqVbdwhF6k55NnLnyQ9wQcSWdXqQ2FF",
  "key25": "E8qoLZsxCkunv4G6w1hMAbCMVc6eVZUQR8cHfr4mqKHdWbQcZBkbALJPnWMACjdG2zcGsRgA4G7EZyXRYA2jyLN",
  "key26": "3w3JVv6YmN5mnQwusZunLdX6EEaXUdX5aHV62eZF6Q1j2kWhbfiaPE7w8pW1h3R9XK3cYbmeaRQxV7enkqmo8ZtZ",
  "key27": "5djJ4Q24prmB1PnnmcKr3vBmuoNRvrSjLJJuqE2ri1TtfR3WXefJwXAwk828CnPWmtRpz3ztQHNEPbEfE4vtmwR1",
  "key28": "GNEdSJ6wBvW6EfVAPNUfSfhHRW2wby1yBgcYDaAq62WSdaPFJENCLu7RdwTeQdM19zdPuHCSoShdqg7qsQcYThr"
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
