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
    "6gFvY5PFEfzHF9k5ojCFJVr4JRikpydHQuonFYSjWJhEH6GWsvNtqZq9M7U9pjLuiQUU91skKbpfU1Gh5pNQCz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f4o6sxpZS8zg7E4qwE1cYStqxpKfTRSPAJ9YMaFcohqDtBuDVshfAzXs2fb2TKzEGePPtNbXYoK4DKnkUGu2trv",
  "key1": "2ePSdJvHReyCWGM9nivjrm6ZyUfWGTGqPm1TenLKKd3dJCqYPbo6V7PaKi1BLVNAPeJsk76dxZGtrD3nSayYmhNz",
  "key2": "43ayzNczEVY42uRJzwkm4bTmntTchFcABU2wbUrGvPjW4dAyRyyb9anNthFQoMtaaPh7HkC2ZCYZxEwRnjGHeNEo",
  "key3": "336ATQsrNyDGRt2kXhYj7iqUpCuvPaWh9rifZmxhyj7cgLpHXbsHPoDX6dYUS6tgh2o8mvf1JBdxmMh62Pp3iSHe",
  "key4": "FV2T9v12ErWejFZLTtLAQMSfuwHV5eahCWYrDo6BhUN2YuMPDSrQ8Z8MWSxf8E6o53YczB6ExFYpxeVGSYJt8FD",
  "key5": "31Jnc9xPgGMgbuckMeBz2Y4stgfG6sJZ9dax49SamrACEzhEFpaC5DjrwUGkHqGRufQrW4EpWE6nCYYJMzRAqF25",
  "key6": "2VwfgeHHCQtRVTFRyx93f8n887WgZpVBhbVh43h9ahdZh8LiZBJ6RzXfGA3hFb7rk3BxFRyivsZLcSy8wqhhq8Xv",
  "key7": "2yj55jXtJJcXWrN25SFnngVphLaYeVxCK5d5kbcCgqq8waGdcToruGC8ChERM7QKrDLTjQGegngGtzxi9rFpoRCX",
  "key8": "2aHxRKV87V9eDCZQwUDNfWmuCPsRXLpohL6HeWYymUA8zduRKhN1qsSvVGoc8CK2vSQCNNRtDGaa6ksZoDZMQoSf",
  "key9": "5RN33ZwjQC33F9Ry5gUuGyfozhG9WnAsQZT5uV9eSCguX2NXLNitZ2GKZFbEEd7EB9kvi6smLMJH7AYwHbcP1zDN",
  "key10": "3bkTQNdqUujYhLix7egyq12BFwUWtxQhBDBYsWfTtiGFbe7CKQ3jVt47nF75o4MHGa7yBYGgsGKyupigj8VCSapu",
  "key11": "48NUiRV8GzVTjKuwfEu1HNuALnTWc5TL3zziD8y9ycm1J8aQZSQjkThTZa7PVvzV4Dd5Ao8nheJV4Bf7ogkSFPA",
  "key12": "2LKpwgvXmZRQwdkq3gdFfDGSDpfRbMFjwikCRHCQy3QUMoqYHHsAtjyC4R4kobk5RXeuTWWQzVQ9PCvXnVGheDAP",
  "key13": "2qc8sFQYzqXGFCpPhjbJaeaeVZEBz3Af2dpfAVy8tNSBVgCUdCKC1KpVq98wiH9twr6XhYBiJimfmy7vMDWLxfMt",
  "key14": "ziB3mdhQqQiXoVPTEEz4unmnbrFufNUaUm4BXQLyN1BHHikZGCaUvUf7zPXgQheYQM7ec4sxMKrC5h4ompjDQYj",
  "key15": "5zjrSFs8KMgapTpgm5ZGuiiu83W9adTKv6fMfuR7PuTHvapDgaPComxkoZC6WmmnwecpjJ1TwUA5EpkpRk1HZwxN",
  "key16": "5jiwGb9TXUVGGos3hLgX8Yx8nJWXKT94GXYh2ZBcQJmAJxUazcHzYjBfib8PcYKBk59t7sYt6NgViUsPiP7UQJt3",
  "key17": "4Qr7YR6VVk6VSRMeenU77hmAMe5Y9FgcQfGBAKLx8tR6Z7tB3JgQh22Y8jJqfopVmFduvzaR6PGdZWBrxztfwV4Z",
  "key18": "bM144UKQisgDknbvB5FAPzDSwNQhLVYaxWeoqhGv71wXX361HyNVPsQt3BcybMq65pp3goYomjJNvjM8MxqwYFi",
  "key19": "vBc53afhtsBT899aPzDMZQC1nUe28cD8PfLpQDdS1vTUjGHiBr7juRkMYAgqgi83EH5NmN7gTkJpwHhzPzZz92A",
  "key20": "4nA6cZSjtHfnUN9d7q9gzzrhJ4HnWEvPth6g7vAHWxmbXNoDgfcCjx7Kx5HBdzN1yzFCMAGMBfd2g2ihVdXM8jqa",
  "key21": "3GuTn4J7KDdu5QKtHB2DxiEMHRq82gXRA9LSHskMsfMZaBohe5i4a5JKQaD4JqTL2RbxLvzxXpYRj4KqXsWXTaFZ",
  "key22": "39vKXZ6SNuoJxzwW6bkhHvkhFRUnwh6bp7RVLSz9ysWuCMP68x45fD9wsxAP2WapJfppaaZyDun3DJa8qV6rVjuF",
  "key23": "2VEDWSCatRQnKuPdGhzQUQ8GJGqPimeZSZJsE5snvKF9tW2w2MwRGTYBc4VwBpsksZ4RMFeiutw2vVSKDSTc5E8N",
  "key24": "6bWCnzXdhB8Sx252DhekruhcKC8AY9DzrZJwFifARhSFTSKU2qicYpaaptMRyu1MJe8gKgf9A8zyUwtbtjUjJcB",
  "key25": "V3wJqCwveEexFkUmA22fvawNqmo3wErJKU5qFG5HcLV6sB2LBJUdrWtPGp3VWEr3K1C2nac67PzujzSy1S92SeG",
  "key26": "2P9HDQAuj4FNRhUfmibRFMdtwVgrAefK2sH6yfXUj5ai9fwzHrJPGqY6N5cTGxRNw2J3rFWCF7tKHxqdRuW7rahB",
  "key27": "ri63WtDR1oBhBbZw76Ao6LxY97fWHY2NfbR9mYEj1sZZdtvL1FMKGhDfVia7S97Hzf4gNuFaXzAtBiravJWVEno",
  "key28": "Lp74QyoS9rNKEdy1x33WHRYfx6W6qYvU3z7tBtGKmzT1bdHTq6ikrUfgvoeT7Qp9tvse85D8vw1f59MkJRQcp4t",
  "key29": "2Jd2FD5iBiDV23nu1YAfTtjiWTP8jd8HPAWM2L7HYPuxqxAVwVvUptojied1fpwPhJLozuA2AKdeGdsZC8uuN3Aw",
  "key30": "3CS7VMByqKT594ZvC72UYoAyrJTTEwSEdhNLT6kBt7RbQP1SPp7LKCYJ2zHoBWGR31ypYYP183AZ3AJPV2PHNrH2",
  "key31": "4iVKmYVWQ1fTajLTcYwbb6RTRJ9zj3ZJ8tCNHTCtUwQDKmokgXyuCNpGCta3BWZvpeHnV6i8dnfgfwCM3JFZVvGg",
  "key32": "31q4QzkBpE1VTMJd8BBSwmDqbes73XRGjPMTpqkSNK2U5ojnKSupfBxJF4Qis4nu1She3smza7Me2ghP9AoqGb8L",
  "key33": "DrUQn48XbpktREvbpuyHWo9UxzP999W7jxnKbT4ZT5TCpF8x5FQ8ZDJ8TAx9TjCXdbXCUeMsP2MZwuX4GWPeyof",
  "key34": "3woR3KmxXhTXqm8gp6hehhrTMuYFXFjnGnuG485JrSG2jSia9eQHEUGqkMVynGJiyc3TCxYjDKoAdPmSrcdq1HqG",
  "key35": "EHDnwB6bwz5H6pY9Q7HasbrhV41FPpKWtqmRgHuMhd5aYNju1X1GPYjtDgNJ8rVHKCAbYtNVmcf949Qq79HTU6t",
  "key36": "27Cz4VduyFgqM1nUjLHnCADzyRdmzVbto7TuA9fnn6Ass9t6idZ78YQPLYYaQe28gbuEpWLaVbz49LJHgjBRS62H",
  "key37": "3AZJJJmEdudYJ6ZruG2C39aWeLgQzsGBQxgrZ6KE73Rp2D7hvCJ8dFxjQEiK3qrtEaeQbfL9Tet3h3ydD73nNypE",
  "key38": "3p3b2cnj1h2BjLrGJ3nwjiAe6nHrH2vEmnH2D1mb2b6F3xBPnKudeGqBrTPX6Hvt7Cm3FhNe5NPrEEo8YgQCJKBn",
  "key39": "dMaBRv6FMQVbnAU5x7t25NQ5D4iSZwbvGfyc3fhiDBtZPQnF1Hevgns51rHqDgSdBUchw6epPvxpNeJdALYkogX"
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
