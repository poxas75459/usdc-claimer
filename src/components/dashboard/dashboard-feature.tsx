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
    "3H44a3snHDsEhZA36HaJ8sL1ckkyCnJpo14ePqVx7UzeiV83mdLZf1nKFkb27hnFso3sW4zFoZ3LbcKwTzaShUXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hf1s1KU8pa5G1vdBikn5z6X67SRnD9Cme6nZDLJzTsdDeyMs1nYSMiyTXx1GE1hXTaz84bnYSp8pY613A1mnMdi",
  "key1": "4MsHQ6ZxP18gFRPigvnHqJ9Sdh8o4RkdfBZuigDrnpdqSJpR3ku4V48ZwHftL6wUkmJAN6bHmT7fGufefvAZoRjb",
  "key2": "3cwf1wF7mrWFjfSVqyRAR9Vokj9sLF6XreCYRovG5T8AAeU5Ea5iuBxsDV4VZLREGer7wY9YzbaJ7JPicHM388tE",
  "key3": "3pouVQjAfDbTvyYaSdiSeXaRMuJAqBCeDHL8w1C9QvGJywWiVqsm8nLKygF36xuNcYtgDMTXp8v8kzmys1npjk5",
  "key4": "5Bo4NDZMeDrVX9A4NibsN1cH4m9XMbtAXsnx2TufUGf6aQV82oH5NEcqSMZuxidgKGvrGAiD7z8Vng3xAy7jTjVb",
  "key5": "23zttT566tkpauQfsEMYHxdwtFGDgXRaZMVUEsznKMfPbSfbmoajnM83jA9EQ6XAFtkxpKZmBGUhRQK19WHRQkA8",
  "key6": "5kojmpkKJ5kiysFRev6diw91d3fDUpB7paoN3Rby3M2X3GsiDbF4ZH3KC7ybsqQCz1jsfdkUHpASTWj1eWFMTULm",
  "key7": "3jPLNmsxz8d3reS3Ncay2Tgs4bRMFecjWqj4bKPPv4is6Mp15nczChoSDn9e9qEocm6pWHSZHveqgCRBjuodRktM",
  "key8": "5EAZYVeRJk2nBC6biEzpYviBgkLFAnApHsXcrbg1QYzwXfrjmCCcNdQ3R7iBJmVg6THgS9xYByZ4TLUsjBVCMS2T",
  "key9": "huD2YQnmq3AM8EqXPffpKtnSge4Z16jizfpAp8gMUqFDSCnezfaKhhax8V4KdBweKgWPDYNZ4VLZ9XmQ2gPA2W7",
  "key10": "F3CSvwPYEJfXL18Rjf6EQE7JP7eMo6TZdZE4ZaEJpJbkiw3PCFbLC7zMuynCwDYTUsTBWWwHvqWW42MVvVAp9zu",
  "key11": "jXiprw5LhwNxgvvzWxMHtLYJ6q48ZjbKnhiyncTvKFXhvtw76MbDPfkvc7NENLA7ToV2HdXVDB6xNVJ4MsJ7PBd",
  "key12": "3SSLsuWr5TAmGbnUzHagx2dWzcpdkUaYUgrP23ZBXs2ub4d4qSAevrvdsp9eHyeiVwoQcDf1tZwcTLNRiim573nw",
  "key13": "9gtPmVum6Yo2qQXWuDzfTSNYYVZSXd9fZmD6KFaNpH5PLV5T8XDBen1Jf7W1dooYoGhqbuEtjYmWxNQkFQZPGDr",
  "key14": "5PHqVmKxHr812PrkgbdEKJCixn2oQmLm3FWRE5bE1gBQApdQjGY1NXHPMjnksc4YxvPWwB1eYVCdfWrNBLK4vqxR",
  "key15": "3o9a8SrH8WtS8Y4dzVqvxAwSmgEQwP2kmDqn7s57DawoQrbaC3qRTH9xE3euan6tRwxAeTBL74GoExC96ZoNtG42",
  "key16": "4Uwq7x1mzzfoVkpuwmNiUdMjPACQwsngsBAY516h24nbszRdvGxGwxKQ5HEcHuu2uFWLDGjK4QGWjQ7tC4KP8gfA",
  "key17": "VZSdecM64w3Bsf1wUqy4X8ThdWnrysTEkVJHN1YBjJk9CfmA9DFge5vngUDsiM3pGxqEfpZGLqFfR22Xy8uV4Nf",
  "key18": "NNM7iXsRxxeRyfdMfmNBFE1xvnWbWdykcZn3CtAPZP3QD4FPhDbcyHcwC1wJJD6ub2RdhYLQrLkzxHT1CBtd5Hu",
  "key19": "4QxxM3axM6tci3R1ndRFjbadv15ciWiySX3ko4HBLUNL6gg2YKqvynYo4KH2KNtYtPCKikXMhQ18zsVjw8ACedeg",
  "key20": "4EL1wz7NCrJGm6GfBQRs7oUAtyT6YdnCsP7dAXtQsxzdUmmNRHZ8uCbFUJDScxD4MpAN1uyvYZqCttAMQ6QBP9gM",
  "key21": "2XXxgJpUdMRNobeqoFHEB3Fyy9SNJNbLJpvayzD2wPfmHcRY8caHRZmhvt4iRHKQMbh78HdAetHwaaEgXyehe8Zs",
  "key22": "5dch66xu2hC6Bb9iggXtDkiSRKN2edWoKMhcbgzT5CiUT7noDgZgxVPCPRPMmmPqNVr9RtvU2nbeVqXW6pMkUjtF",
  "key23": "5Fqt9VymVEnNhxxMB1exBrig3UK4AQ38VjG5uWw7tGgT9JFo2ACaZxLaTLWpU7BLYcA4B7UKQcxHSzdePyBqvfyd",
  "key24": "nhpMxCPa2w2Q5yxVueMYFZWwKgamAZb1vEftYXFPNMy8z4kPiApnpVUUrFGzax6tbwbzd47i8Ge1poRK71UjuMY",
  "key25": "5P36Z7kNpGfxoqhAMyyFSJZYHHvkoPnxLLvyG6BgTsD3wFtg35SM1DxiaYi3kRbY7S2KL5t8ARRdkB9PvJPtwcgX",
  "key26": "3vK8pVbDtJG6VrS76bipDmVbhvnTNppeB2RZzKQsVnmuwsEXtJ1KG64JrLs1PgF5TN8MdVdHMNCL3Hnu7zRfPShH",
  "key27": "VJDKq8AAP1gFtuhbbrAuVaoJ4pwJmPF7u7EZvZ1c7YyDjAaxwaKaJFj3rQ8w9tMWbF2kf3miLmHkAZNu23yaJZG",
  "key28": "4oygYCvWeY9wSR5TBvdriUBF7difKw4NBvV28Xj1Gamsp7bAA6JBipikx9jgBYfNNmedut7f9ZXzEAFKkzNJdXAm",
  "key29": "Xk44TwXjHD4HginWiy3KPa9xgo5R6jBLT2hWwtUmGEHAy7XBB9upNd2u4n9eG4mhFP23pwXbGnxiKVGAoLmPRDz",
  "key30": "4nXDU1P6rHbtnzQ78PuZ3cLwebZxgXitFLbSME6cx8S5pk3gB2tbR23y3v9gmFSgGexKQgknp4r9Cad4PXETMuGZ",
  "key31": "57WH1WrhMF7fP916V6dXTnoDKvD6VBTyHpKwKwHmf7zaVseC5fVsKZFS1v2CtoGQd2DUYLGG9o7UUNxouEnE1HTG",
  "key32": "3JfGy14PyfDyHypp4KjdfqF4CrUPL3ire9SpzDdwZifHX4z1ssy3jVQCRFQPDCdsFkbQBPper15jtsbr2gk9dEyL",
  "key33": "4LhVfqgWB66ja6czX7sYmTSosRPJMpZbC9DZKFKiFQNzmD94DfMXhCUdG41HPfUgFBrjX2b6SmGfDqbyy1QgXtxG",
  "key34": "22rDYcE3DVquRK3xBxSb7ufVGxjxCxbmbB3mG71fpLDxNcHqA8nj8ho7w7XEhpKyLwawNXS3t6BpWwRg6YME5ahw",
  "key35": "5RikaaJBTSG9UnMKPaTk7AkdLoimkzX3NK3RfYB9ftMFPLALrHpmCsbT2mUV4RZ82Pcso2y9iBCccLAcU4rTVVpu",
  "key36": "5VFMNcan3nG7UuxX8sxX4qyW4ci7ZNzjbVAi3bMVnpW4ARhgv9LQnQd5dYDVrcXRtM4guDPvVoVFy9EZTimtUVic",
  "key37": "3r2Lx2fzKVYUtAPfKihYhofzG7v7MnUyRK3wKQ53ab3mGA62dCPYgCoej191TnrJZ8EucpqJNi4tS46uQt2q4Bbd",
  "key38": "QTiCcsWsnwszYvng1oRmYDcgrcagxSf7GvHhENmaKwmPQmKG9PCddfLWEoDQa1Ka9oWhKAkWEymBmjKtxmbZ4G2",
  "key39": "3qWNds1CzdwUx4EPNrTsQNzpPocBSh5JZ7SWTGn9TDNSsKxEBRELuGerUJb863hip9ycc5NyecAdvmEfc283WGKk",
  "key40": "2VWZvZWsN1u4cCSUhpLZbuS4Ar2SLdXSBHCcWfLQPt1Bg2Z4iQ3yK39qfsEA8R5thR7Ui8ijcYJv33AMF4SMNTsK",
  "key41": "3LzWPoqXMtcLMq7gzqrNSvDUt9hRLQkN1n13adZvpFcNwP7BxZCqY41oaRHyP3cq3ZEhjYCcCPkdfqwTuJooZbXf"
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
