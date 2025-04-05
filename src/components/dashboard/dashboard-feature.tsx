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
    "3nTL4vv3RNQCf6gLFoEUHoKSMcxinwDZRseewDYmnzqFW1MVGpPkaNwmtRMAjNr2UtVX7abwSoKUk8VTrptxkBim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qvgr88dv2e55NZjBzndRkYAmKvUDrhDYumzNrxJwnVKfXsayiZvUPjRqardncqzsufRoV7DK318okLdoK1mgwWF",
  "key1": "2XE4W2k2vzb3oYaPw7YxpcAbG9PaDQv69tUdJUvYEQtVX4q7HDCSbfSwNoP6DzpKHwvFfpjtheUEKoUdRCVkjDmd",
  "key2": "3rLXWTQ9nkvbp9izYMnfrfay5iGMwpDNDmozzqhZiioELPeSBwYEwAXHWh6GJLykRExgLjkM3NYUsZ5iUjiZoznw",
  "key3": "3oNXwKwuupTkA7rb11XWyHr2Gyrey2kfDP5yeVy7NGp1U21YcynWJyXTk8TK7FrH8n2UUokMMUeGYtsHvaXaC4He",
  "key4": "2JZzVH45x9JKoPxaEyiL6X7Y7wFbVNfrP1PkomfwRmAz8FBd9qEq7iWZJ98mC1AQ6DpNBUkh5Zg4AB4YQ5qmBHvs",
  "key5": "MKywAq3fFMbGsZGoGECtkotNtXJimrfR4YyhRtvdR8d9wUymN4rdLv9L7NzRJzL6qSfRsezcWCcrJTTK8kV12eS",
  "key6": "3eEDZe8ZR6emhbziWa9HHq1zkUS1BN52NqW3WoNDPXypphVtLKMV5kT8BvoBSgWZfWi8xxWhSvbifAquAXQAPBPV",
  "key7": "t71SwP8dDZJ2w6sQZNEKuN5ZKHY5ntKufiAZJAmdT8Z6othKShkoxXGPCjWo9Bi6VMc86M7sT5ZDoZmrgrUo4x1",
  "key8": "5zUSyiVChchdPFrvSvoQvstq9BJxKsAZwhXR4gJCR8u21SV3Bjps4RF1gv9krFqGqC3b5VEtx4PksA4Sq4jHmCac",
  "key9": "ZL4FqB37jxZhUR7Yi792GuccqZVEWD4nGLdwnqoJSrB2c9j3LwLkUdGn4eknuQsx7vYywbgnf4AWeycuEHA6fa3",
  "key10": "58ApsG7v7fM9mhQyyQVCEypBkCNSd78AeVXWY5z4apnb1JhF9jBegWPod2yWGLg36ZsZ9saUzPvGFauZsUCn9FVf",
  "key11": "58EBMzMFN7mxRE3JfSPE32vmnDoERNomsnKgJ4EJaZF5a1M2rC5QeFNFaPYMvDPZT4PTTVHzoNuzgvBYkhqEifPa",
  "key12": "569cbnaajqCLZcPAGaqSWgJDyF6w47ove52TbJjPAMvVGbQ1PZFTTKP28RNkbwiJwbA3EfAD7jnPc1WHKNGwcPrq",
  "key13": "5eMaSjPvrzYyj9dd4AhDPNXJjipf3h1qmam4fDqgHeZ78p9J2gwr7n2zUGGe4RppnsWt8aEwkNhSCEucaUC9A6ZA",
  "key14": "4r9GQGpqJvdMz3N174sEjZvif2yYsSKF2qDoqe86NV78ygQB3kzR1AMrCJEAJy6ctnPqwjKgBhZ6h5aYBZss1zvr",
  "key15": "Yj7n3ngwUAc48oU8MTt1Rg4xQpW8AocoAnSSsERqktnJJdqy8GvPL8BQipJNf6gjBUbs1UJppHDzyv26X2MwrUQ",
  "key16": "4UPrNH2FCY11TpDE2XUcLTgWy69S8DqAbBGNFy6ttsvf6uuXmuJ2hdYcZAyp5kMJN915G5oSjdxm6WqHZF7s9hci",
  "key17": "5Y1oG9d4ckWaoyfFD9dg3at7VYsthamCcpRVWLiqkk5oQmoqNLSGbczG9pbkSvHccfgR2iZg7bEUjjT2FiYe2dQy",
  "key18": "54qaZnefKTmuFRnrZHmwMg8Q144qrPd28cTbXCTJn3xqTrRUFYGiCe2ptFi1NJzTtLqDa7JvSHjbrAN7nRnqEZ4u",
  "key19": "5sr6fv82Zi6dvVBkxyrMFh2ij2doTPRzcHtuZ3w9uqx5yUW6R68BPBJvrUMjwfEd6XsEyBnMxRuXtWK9974VGyc1",
  "key20": "5knZi2ByGF9ED1rVrXJi1NFqqUXG4ZSMxLprBbxkW3VrjAN27bieFiEkg28Fb4vqRy3tnY5NkTpvYyE4PGFgaXmZ",
  "key21": "5Tx2TdvaQKQLedf3L4XFG6i9ZUCrFEtksYusMmZkznufvsjFkdyR5iokWBeWSqzJJvYiXe6KwSm77QC277Y78S8y",
  "key22": "4qbk44z8wrJgag4ScaKRv1btWbYWB68iiR5iFrQLFMEMdSpnaQk3kG2fKyNMeEE9Rdfoty1L2fbtEzeKz6BDSbbu",
  "key23": "PQMukE1RYGmgLCbka9tnS85DFVNhbkHdaWtwsXB2wHrZbiSoTPF88xvnouoyEHuJcbfYmXM2ELK8STqHJ9seeur",
  "key24": "277JGEYSZXVbtkssy7v1aLqFvK64te61VcCEkknP3sYyqYcUGH6WcUmDtqwCgR7VDX8CrQpCAfaTwVHyEaPv47Cr",
  "key25": "4uRM2vuFf94zWvrGaJzRRq6igY1MJiuubCwQQ7tgPpLTRuuuG6NfmWPq4mnS2EAcRypt4M1f6DWfUy6B7iA7mtxW",
  "key26": "4J2kmTNwVacVp56kDCFP8cZdSRsXBR5pgYLzvYu81hh5NudJADNKAn9BpJf59paPTD5TuyVXuf48j6BUR4uwh6LA",
  "key27": "5WmYtUfYBpuJthrd45kbPWTWyWccqDvLWcj4ruVwjgqkFigQah383uPhbfCfyK8LcAgGTDwVhXvpZWPmZF7EF9Qv"
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
