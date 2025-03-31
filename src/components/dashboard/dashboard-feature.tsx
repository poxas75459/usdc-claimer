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
    "2gS8anjKchmPLFjf5pzqAxuFrufMUdKmH6p9r3nbWEpveVMFkAWYUV5NU1j7H87NkTwPuuUc2NfjMgJB62bR3rbs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vAfWjqZD8iJfksLeGNZVvp5nzvbbsQGfeBhPouBev2TVM5u3NU1Ca5aMBffZebGmFn5ZbVBt97P6tfntTcCCvAK",
  "key1": "2ZuGXjwxBzFrfnppNPDAZoYVkM9U9wngq4hcSiZBW5xRuH4G6RohV51twZ7fvX9jvYJhX8YxBKunozG7CGgNRsDF",
  "key2": "5r9xgsm9CM6hB8kWErnHMLpX5ukFrV1GS6tczaASLEiePg4ezv9yAAbm7sZbqBsfvSnsnQLM5mqQz7XzMDRNYY7S",
  "key3": "4S53K9EUGX4RFV9tPUxwKLLbRj1CE1gr26t8CHw78PtoQLeKgVyjuTKSUynr4ejzYQNUG1qkTcJfem29BCiBnqD3",
  "key4": "zNyfps9WK4bpwpNVXN9uatP2kJBDj4XTRDjpPfceKomP9Y3G7Sdjz469m6aT7JuRTDfXLXRcwwjZQAtLdYrXwTG",
  "key5": "3bzLaLvTx6ogR735pfJ9bouGvuVA4K4zWKqjUQetyGVHTMkFNiZkGkJqQ5FPcw8oCWgHyjZoZjpycRyneER5tmtq",
  "key6": "3MknFDnGehGc6zSKhfQgp1jR3PSVdivTkdKkM2tCc23azbmSX5yssWtDdStLTvdKRi4LLHc5yP7bv2qByS8pzrkc",
  "key7": "2EDuhFjUyx9jHvdhvgc2nxbKbrzj8aC3RnnmEHbtVNWzrxQdhNnvv6QWoAGBtzhv5X8EJrnEtJBdg6qqAQf62KvK",
  "key8": "2KFW7mDGFhvy6HKrnVwMRhPUtziLTXP2Pc855pK9YUtcUvYTRx5MjB5r5s45jy2FA4gj9t5PTz8D8zmMCYy7aVe2",
  "key9": "2NH9jFkk1XEZ6afXVYZTNQQkNHHCDArjCqxMah74Htb656CDQe2UnsCP2ZogFKA6BqMabCpDsex8rxi3N6EL1suZ",
  "key10": "5USZ2fdG3NVbjz7nKbqfHQpAewgUJGwbCA63uDGfK5diGfQFwgCviZPaFZNpTdeM6akVvW27co36MH7N7jvZiXXj",
  "key11": "41hRCKEQSStHdyj1RHW3ieDDsrtGpAVPAPchZnfgwUKBy3F6TE7AWRECLVxXnYNqo6FNjzPrAXMjzQqe4mmLoCGh",
  "key12": "62erx73EMuHA5UnUQ7BC2EDZknPjLWuNfpbQdJ9S32h2tE7vnECEMVsC3kaumoG4e9994AwTH14wB6LtUqRF28j2",
  "key13": "4jhmk1VJeBAsBbRyiYfxqdjCTXpifqbWcGrXK4oNLhJbt7aditncZhm7Pb1hFQje4qf9AGJHpBPeRAVLzPCkNvVF",
  "key14": "5N4szy3fXCdYsZkPJAu8uVRnBJ4pvqHzVqcBXjJETeBSvPdfnpd8TSeGmpLHPqc3UsFFZBXvb4Q1NGSmJdMA4era",
  "key15": "2BQkeSsdk9GKPkCEUybH7VLwy9G56dYhEXCEXsuhstPMUqmGUgYh2KLpFnc57qWrpJzHQs9WqpfPdMD2C8o31QAz",
  "key16": "4evFSrk3J4QEA5tsw1oVUqCBrAuAqZpwvfCcLgrdudSvbsEXdbqbjVdc3ZJrkEAMugWdvgkT7SGgxXjy8XnoVGHE",
  "key17": "2KGk6Qurgv6PVQPFmsePe3KsTepkgPRwZtuJzLLr1DohVhWLbKErKMBwMs13zCTJfGM6kysw4F4nsUbCCBDEEiGm",
  "key18": "3iLBZJyEruE4owfvHZ1MADAojmcJCHCGNLSTT1xFVipCnqFiw86X2tLonuNp6HFsqM9WUkgmu417Eg47LfP7K6Gk",
  "key19": "2sXFPnvRmarHAivEyrxx5PAe2s78xoCDidnoLfy5QFkuxK2fPCtYeAHKDK1YyafKW8FR1W8Ve6iGUv4qotjm1f1m",
  "key20": "5nSuKajLHoEUZwYDFtsA62NGvyYm9RWhg5Sp7EQzHFSuDBpgQg3Zf4Lvj1TXxUMYWnEx25C98SEs74DfM8PDNgvo",
  "key21": "57uXzJJnCYfVbqHZqgE7UvN7QB7LNb28pDdvE2zUopa39aexpycNUv7vNrYoaetJGCmguf2TfU2pJ4XUaEQANmr",
  "key22": "2s1LnD235ZsrETyD6REvPKnxaeuEgTr66XvB4M3GyNUD5LB5uSdk8QWXD5ywcWc8iscau3MHzKkrmFdN2xmhEhyN",
  "key23": "51Yucjs14n1PCpGpBBg4Shcpj7WYxRMtpgWRQ6RdCdoepyysZxVobTg5BMKG76Sbj2aaXPzZbgDQnWR2ZxCz4PrT",
  "key24": "2rCskhZMuV8pH98X1tk6fyFQVXAEsPH826w7KTvJhiSCx1cKptKr9E5UbTr1nyBR6qeuLhJaCdhuE7ZySYbKNSec",
  "key25": "34N6p6SXess1tGHGHqY8rkJbvVSHoWjMFs8TnyMS5gbf8X11dufpNoqnBpY838FfKoLTDyRFg1ckAx1F7dxEmbe",
  "key26": "2Yv77PAtjHGZurvvxTGJ2PN3ZgstnxaxA9m1PH3W5X2T9gxU14aZZJJZnZwZvFwMDbAGjJ5nLiTNXhcJmcJ8UBwM",
  "key27": "2GB2PJkjVitkVCRtQsitawUA3R38MUotr2y7xQC4A98Ewwky4DEW5UsBjRmuP5E4x4VH4N7e9EJGRrm48DkmDgx"
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
