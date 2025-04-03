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
    "4AMs5zW3QAkSmR8DBUnr9nVnfB7pbWcnDNomC556AqxdD2eSqxDFYofN6DzWkVNuyRSQqxP9HJCgDrGifKe1HtCJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kqmsFTnJ2toC3TWosqzG9MbiVApaJ6uYup4kvCz8sGc5VR42EAtya3gCWBUWQpRFgfHYBtukpjsoZmTZZ9s9Vhs",
  "key1": "5mhcG3vWv4acDim2DKu3ac2TNeLCV8JwxkjXDrfnNkrbHFKLPfs1MscQa7rVZDKhvBcDY1eXdXKjt3Qfa1BmDDdU",
  "key2": "2APug1v8QuLomoAh3ekAwbE7ZJZKGA2YbXChT9XE5zwqEG8XNbtZ9ctTYk2SovN5ukDpmr5DkZ4Epfzp9cp22rMF",
  "key3": "63JFRESVdpkFyTpB9cEpmj3wY9Lr37Kpgc8HjpXwAsnf3QMR9ZqezqAajPq1ocDdhdFg968VkvJkavDXA2BE1qRs",
  "key4": "cYcD6z8my7hsQB7BsZkummjwuyyAzRzxpg9ww491NJi4hAe4israf29QPGhMqRpziq2KEd6gZc8qKUEBfvWURcQ",
  "key5": "5J6nNAzdxhmC13cwQZwoWCqyzEheM9ntWWNomuuwjtYSoYfojhHT5pMbFfqPv6x9akXXaxfZSi2R75u6dgxzRKN8",
  "key6": "4fQuyXDXJMmxZ4KkBCJGxzFxEKFzpnDU5Z6J86W8Ki3oo71UsbV89tUbsqBKKNhvvq4NEC7WHGF5mqMT3CbJ13Dm",
  "key7": "45vQqcecX1sfpCxdf2Ado6znGuWXv1r4rTmPtmDR15aP6hmArYmVtdPHAgKbMp3qajaK2KfMFVoMDStwVQT7KSs5",
  "key8": "vgLaUz87pVZf9u7D4bbhzkyrnZrHYzN2i5GLy83QCq8QTFyt48V5VLnx3KR6h6PHtcCi6zjes9ysHKMPJtqKdwG",
  "key9": "5gr3pCU4LKBLGdGguEKAtbTJogcPZkR1Ltt9QRhtQDpVJromJMihbweAqU9sgJN7zpDcGCruQMWmQFjtxW2S5Pxa",
  "key10": "Tx2rbLp3pxAC8YFnCzhM1wq1Y7Vj4kXsQgiMTj9dGLLmUFuFmJfR1aoDsa75rNrPV4SZgQ5dN5cuix7JuyEamuw",
  "key11": "3ghbv5B8VPUzTgsei34hB6x83usDrkjP6Z4RBn665yUry57qS3H2J2FTLoxR6Eb51BpBmtqsiu16LrmNtJFDiMqk",
  "key12": "3jSNmJkwLKXa3yzTaftA1PABRA5wpK8RjWdMhFL9Ke2sLzMKA2B7vs6nTHfaWrVk1GdrJnwC4ZsSNks3JBe5AjP3",
  "key13": "4x281eFi5D4aq6gFj9Rz4mYJ24AgpJUJ31Md2cvn89AxmHr8zZghs5piDG7Vv1NTgbwwAahvvrPAeW8VwWQDGGPA",
  "key14": "3a41DGBcB9xyN4z6gVxvK4ZtGa4KMrrn9H27hj8uWCgcGXAZBYmcos5ozukJJTWK2LVYiHEMKbnxCAJt4brnmfWg",
  "key15": "3MkMvvDNaoFqvxmUTwnsotczMYFR2GXe6wJE7MSAc9PMPJA4T4fgQpbh1sW9KV383Yj3TH7pceUJj3c9Dz2bvLgU",
  "key16": "yvV6QxDExz9nr4yfiQNCGb4Ec6hz7FizTsvxYjkPrWuFqDD66tmWkTJBwu89v5Lek59J4eQ9RfPnpS8mPBNdEmK",
  "key17": "4puShNfWfvAKJEKkZTH8T6ujaHujXYb9CMV4pddZPMHuJoFk7Fx6n8iFo1pwwE1qmvMUsDpLve7j3JqpiLsxo1bU",
  "key18": "3nk6hq1e5PBE2Gq9ocswA7pseabj22sBKDSYwQ3sbUuE6tFJzNzP8MVxtgNncgaUfv5BhpuAAyf2daRXgShEf5Ta",
  "key19": "465TDx3uhtxo7nCtwkdaNjqbHnMyWPkuGsQWBLjW6hhhQF9b7zHTa1bESoTDNFrFrRye8KSzumK4HWiyrugeSLSq",
  "key20": "4jJm4MNyrnmdzA8EpsdYQPLvN71WLHTTVoU9ANpeodM9dtWxJG3xSTS1Da3quvCphtadhTJ5yXDf4wvNeFunbtQU",
  "key21": "5i8vfktxmUoBDzc4xYjtpryiHP8iQoNxt7bhmGkJUXwCr9YrrydQJSNsa8uxfu6u5j5tut53MLfaaQVjmL1UGwmB",
  "key22": "5BB9bkfkAE8EhBj9vGYXSghL3u4LZXTY644jo7gPgz5KAfB5dKnhUt3vNzRAfjQR6ft6mVaCiJV9vpE3BDfT2y1c",
  "key23": "2YwRY6fJe6kzDHPyCeZcsN3cPNfR1ps4bgNsmR5yg196NrVDnUFvdhjjes41hrs7ugsA4JBJSYJMctK9oCjJfWrS",
  "key24": "3RAM2QThpkeSVe1xUggDmpziz9Bk3pVy3jNM2eRUkUmvSYC8YCar8ebeBFeKWpo3PrxHibFsHuTo1PDnPS3BgDFU",
  "key25": "3kJyBLT6G6yuXYNYqTjkwsYHDZDucGB61NPFYQKpxqk7NXwvM1vwT9MNvnRyPtxvcDyjVNK1EBeeD1zXFCxnBfmT",
  "key26": "416CK1QtiPfsRk8y1Hq1sRsKKPcSStpMdW1xepTGRVeWLMTHmN56oL4WmYLbvrQe7u8haU5GMaxDNkxwovRoSe7w",
  "key27": "3yXvHQkPiaGgd1kkhKPorMSd8zDnd8RqjSbFPuV3G4rEo2tLemqTQfnvgYeJ4DJQH32vFKB21N2cxFoABLfRNRLp",
  "key28": "5QvnH5jTcsQCvKietRHtT4ehcApiNewPL3u8DAuX1xdCDvDzzDXzCeSxTtMndy1za6HKMt3YgC7EG6ttsNu8gKsG",
  "key29": "4idXDRmohUJtA9FaDA6Gu9SbhxZQurSutjvpNd2zH3ysBX1qQiTfZxSL1gVn9MWzFDWLYHurY2hdvYAkp6R2QBYG",
  "key30": "3jPtnr1yab3PEHqHbadW9ZPx8xQ5pbpP8UsJWaNjGRpBN36JsUG9mUZFiW7uNMB2jjLvwSMxP1TxMh4kCoAD9jXW",
  "key31": "5PgLUuv64tXPy9sBz3LY83bnt1S7Q9SxgGYpFsUxXN3xYuLy2ADufbx6QTxeJvnbf3cfCwjB9D6J1j4ekjeRcAph",
  "key32": "2obLq8sevHoAf7eSr1TePF3Za24kmjBcwpazikbE3EKwo3H9JRUQD9VvuSb85zHCapF1DQqSFVMWn2H7B5nJe9GG",
  "key33": "2iLXweNDGCxW2fPXc4tWgWotwMAVTx4XhhEZHzTmgEntZTRMuLkUW8v427PybW5J2qZiftAzPe4Fw4QAx7Fb59Fe",
  "key34": "SihZMrDt8jN4fz8Mb9uSKQynsEYypzW3k5reuBzzFF2U5ctYyqZ1opceMAGkWeYcUN5WqAhwYbFg95gmMPie3BC",
  "key35": "2jqy7FjWDHFZaZffg7hSRdBTFmWAy8Z9jj9FgRYCt1y7XT7AC4N9D379ZMF3mDQYBfukFiK13okFYk9ypy4SHuWY",
  "key36": "4wjHbgQu8jeWLMJdGnzLCwHzQpXjqEMn1ptYxMi2cxEgfBHLxteiNUe8Cg53T7tZsaMoa7ZrohEdmCbGcodRes3F",
  "key37": "WFTBRpVsxE6YAgADrWnspMqHuCHLMWpXNDSAGDnKbDDmeBr54Gk4BzDccr9Fgm8oHzPu337a1atF279NyN7TKtd",
  "key38": "5KfbcPBdSa4ZmgszswprKxQmMb46qmhuYsEABQn1PsGMT28RtVzsDSLFJxctjierTug9pUGhftqKMe1V7sRnqEqU",
  "key39": "3pWGEjj4YsrC4kFqwrsJJENKu75zdhZHecuFtwkT81zu5SPnxnkm1AGmFoqvJfsjaxxvHU2m3qVPrKzRCmXb1cnk",
  "key40": "88228LVn8cHiQjUs5gNbNkgqm7v2g7UygP3FV2QD6GnC3HVNPfHzKAjWR4t7HHBDUuckvQcYxbnV1hKwDV5BzZ4",
  "key41": "4ijis7p5ZiMDWnh69HFQ4YmtZMNrvB3EvLGN2eBUnkUujHi2SFQyWAriLDX4iUooEcgyte1JA4ffcCNLRPdYeumg",
  "key42": "5niYbKsFf9KivrBxSjB75JdZUp8DhQvJbmoLoSGYj7h7DMXMSyfAebj4XkEup6uvCqeK37gQngG5jkRWkrp4F8UF",
  "key43": "35uJ23oor8WagP1fkYuwcK5T5eE2YpCuRkxaA2FhLX87Zicjuva7dy81hVPCHiaRZ8CrR5smg3QKpiyo1DbGvWGN",
  "key44": "4R7hvgdhko7S2qRgKaWc2mkuguFkQ571wNTntHCvy7TteUHBMG8bPfeHRBfDF2HoL2XX71THCcqADmpEt7iX77Qy",
  "key45": "65vv9TYq96qKtCczCdpC4MTzRtq9DqUb7f7hf5CxH7GnerEmZAcv1UofAjNCYT8T8m98DHBdtQNRj1P4PnmJSSFT",
  "key46": "5rLisTcnrviAuPzNwBTs2Zj9P339nv26BMewtK9kvU3YJdGQs6V2LTaBntM4N5C33jYgqtwccqGzNjXw7zMeZBVf",
  "key47": "2kTd6kxzt7WoDv5etbPuxuKUviE4hrDb4XLsSSgP35bXi7ZJmvcrF9CzZN1JnXqXn9z4FV3mEx3sevKRHYiMRhc",
  "key48": "N4urxz24VnvJCuNoCKtfgyqTP9fgAGvDwrECEzN6hnAiwuPCfLfmkxoHd2PYd1kHKjnycGqJNXjPc6qvyMPeC58"
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
