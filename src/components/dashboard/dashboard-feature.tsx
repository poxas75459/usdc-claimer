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
    "3DBqaQ6EwGfKxe158cYZaAtFGreYX7CvnrXc8FD8CrPGv1xUm567aqN99zqRi9VxA8Dt2brvcyq8kjBH85uuTuPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fa2FNUhcsGbicyjsvEZeVzz5UbXscLwuEF91WGPz2EFxdUG85kiobSarw8uQMmYdvnWbsYNMMh4PdzReZnxNbnM",
  "key1": "3zBgjmNqV4iHbC1U8cWhxFVwAKVBqq41so237tc6hDqxgcVGyTR5bhXUWMtQzDe9GT5Gcfb2YCb23C94aG8rF2sv",
  "key2": "2zt6c7dbqwkVbXv2wz7voyLRDB2ary4UcUUTnCfdWv8gcVCjTh8XTKcNbJmi3gJ6XThyYZ7udc3cknAaFftdDmSn",
  "key3": "UkJx6Mk9qboXg9htL9DtDzkvYuJkXNbUWEssnx9zfh5mhsJEWYB7dba87aK3EesAiJvS5Wx2WJEMbPmfmwHyLPT",
  "key4": "sqdZ7BULJFc28Rbs3FDLbBMWQPbcSJ4gGcmvh3yLBDGvgnadk6BxHW2hRGsNuPCcRj7iKqqQy8ksQKLt5Vf1WYc",
  "key5": "WXbaz8Tmrgr2BdvBFmhBpm3XJffPq66dsHuNgCjDovXhSapJvu7u1vWPrdgP4T2Jne4YGRAkmm6h8qzn6qRc9ch",
  "key6": "62HLnQYhiY3tfaMJFAHnYDcGXw9TvzMrKwna5CcJx4gyDiLTjVbRAoPG6bcKNuHS5kVB69zk9DB9mdh6KdtbXHVt",
  "key7": "3iqWzd4CwBVQJkskYUtYtnbJZajmU9wneJwL9vz2Z5NtVuNqWQhiowoYrrbCLLihcwW6Mx2uiogPDrShqu2GQAXN",
  "key8": "bpQ1y8UrTBB8HNZZRDr4EQ1sLH8TEgpCS872gZWGn4ztKfrUuutYaRrTLNRPdVa3B5UAtqF8zAZ1U9q9hxt4hne",
  "key9": "3PJroBHRaKm2BVzukWAy387dT6bjETQAdRs1q3Vy4QrRFu6BfeQUtYbKB1vgfRYnvANH5z9jGudsALanP5Sn9R3L",
  "key10": "TJCb4KiLctu98wjQKnPdfAJbb1taqyawRVAQ5YAmbWRWb3Dnx7zVUE6v1UvDbF49tpX2ch6DvSv67w1HZZWMb5o",
  "key11": "4cDyMED4JqFZ6hsuBS5ixeVyB4BAXLW7faHscdwqnKZqqUWt8mQBZ2HZ29XgmLLL44Urxc2h89tMjDjhCr1mfrYR",
  "key12": "5ssK8yTnYvxm9JMSTKHs6GRm6Y1CzZrEhhmRiN9cr2W1PaSV6T5Jk4u6uwKDdo2i3i3YZ5fyeR1T62LkRJJ9AdeL",
  "key13": "51be18nDhnnJTuFyipzkQ3kvbwVYXoUMUTw9L8sZS9v9G4buYsdq1HgQBGwhhhHndDC7ev7P6MqG54Lkxtq26Jqe",
  "key14": "25i9tWtgSv4N2QFTNhM6e1aCNjDEk3gbmaMnDLvAbipn5vfZ5VuNDCfgTnASRYqFvfeQhpkZ7dDcNu8EbwAcufby",
  "key15": "3tZ6FpkCqb5Rtr9zcLzZ6guWrkq1Ef7btVry9mQtL1bPeaoxen4JtWANaLsxU6JtpuWyED4DYEsB5HpRkhJWUbPW",
  "key16": "qWf6HoSSV5zVBMJ7Mi9Jjib7QQS7KsUGWvXcY1m3sjBp5t2gxNSVB7m4sFmpr5QghwpGxTVNQvitR4tavwyhrJF",
  "key17": "5MTA3yrTJrgu4vrp8wXaxhaDEUHxQK4CcGsWwnS45vKWTTLDqQVKstjt9Z8pwkS3JiFJzmGTYho3AHaAbHLkzvLe",
  "key18": "3FaCcWzZ58jPWjRz25DipTHdAmREwGmsRvzpzFyQs325Hbpwd3DX1eaEMx2gQkC9BzXPRpZYreu4hiMfkoG2CDDr",
  "key19": "5XkjY1nkvK4Dr9xqsKjbdkuPq86jABunsVVmZLaH4HV8xk5SzCVi59dKTHF57Kc4192cn1KvFT6aRgpfdeEXoz4c",
  "key20": "2D1h6o1aDjFKR26bmEPkE2JMQhPqrUJRQWgcYkuhLtvRjiCVDTwoujcA6hwpsZJ7zByxbYrVcG5j6HDxbst19DMa",
  "key21": "4DPyQAYSgPT1CAveC3PeeeYerj3FDD2eSZbc2JiERGv8QBCufWnaE2AhqngSjC239yuWSgTLsuAFxXWJ34sj6GxQ",
  "key22": "34oDG4pPzoinsW3kAgLnBS1vTTaQ8LBpXtFvkCAxoQAesLR9wdpaY7MSLm3bew4TFGetEsMhPWknqLff9ZyJBRne",
  "key23": "3JDEQ98fB4FouaoBBwkLnyoMdaQaSXAkaRkY9FJ6y6bksRiqHAbug3u4Br6ZG95gEeJ5sPpsia82AMXPyop6CWA6",
  "key24": "8Q7ZNiX8DPdyXjV6LABG4aReTCuPvq3qB94zQ4mg3FbuLNKMhUaqnsmjA6cWFfTtLcGkYRZWsv6wjZnFSfjHDSj",
  "key25": "59XGUZXVSJxCGTfFfG5i6hB6KEVAQnC8VUZPMdqL6kdZdRzA8sN6EfTRCkSzYzbKVvVDSty5hLtkngWHaSp6QH3t",
  "key26": "3ckaqiqJaAU1SiihfkE1BL5jBqBY5h8Z9yePLX3jLTcdFN1kzyjDCh9ddsiRTA8BvAtAe3rLrMxVJQ6dY62mBt56",
  "key27": "5dXUP6XHAxXbkFbJaHE81kHB2cL4q3q4b3w31B9QLMW1TnTU4ZSzRX3KajkVzDS1GMYhBc9VFeTAgpE7kp44ru49",
  "key28": "5w5du72AGaxH2k7B8Tcf21PS5vw51fnJpKHucqyNek9EaBCtEmvXGXA2XwNrBRbmqQ1iNnWyVqSLNrFc2NAmjL4K"
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
