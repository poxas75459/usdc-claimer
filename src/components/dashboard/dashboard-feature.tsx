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
    "3P6bngHSUjxGYEDTdQkvxxS95ydgmBYWgM6VRZvTAEEvYjZkxYGy9fHLQDtHLjDeNFibkBsHzHmb3BF7CfwNKqBN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vp8TuNkE7fDkFTK1yDpS3MKabYgSkBsYd2FQ2xEfvGtsKHfD1zF16ssbrMNBVAM1JdpiAfPc5py1F6NZwLGbYH2",
  "key1": "4bj1asFAknVa7Cx1b9mJMPKMxmeW47ZaNn8P1GhBB4aziWQUrBSLxA1SJKsKkxijzcyUmF7QQtgNCisU5XvW5WVZ",
  "key2": "5KfqrAGUDxFxuv4W6uTPXuKhich7PDMx6FTcde5ho53bTuyykhDmYyJKbC9oDgZRZj9DhwZjDq6z7JYNSctXdWMd",
  "key3": "4MEkkQ45agLSD5tc5NXgZfSnn3m8qnRByNPUY5yDSr3wEpw458EXyh3MESrwzSWJbor8iCasKCJvHfYTGXjubsqZ",
  "key4": "5cfCgxXsFms4cdQb2S8rUz73oz2ycdJ7z4D6G8GhFMYthLhndWECgekyPHXPJmJEbw7iassZ9ukWx4PgTfhy5pwe",
  "key5": "2PuJzVUmjYGSzsRkvDHfFFM9b2EJr7Y6pguCX5yKjKCAAew69FBDDR83EQeLeeG6HdXph8CyDE8g36Bvxpgbnf54",
  "key6": "5n1cNFMpGQ78o28RCGaAffq6jpTfdd5E1Ci2HwbbutMbgpiz3UdgyannFAVEhuGsv5Hxf2KJr7PSC9t8oZQjA6ir",
  "key7": "5ZnT2i1QvPiqeKpkzDjekiXJtUF4kp9HAuYEPTTmbzfur7PdNrdabumJy1aZTx3qKQdRcqbEzBNEUWGEjqmDZHw6",
  "key8": "2asQkFSAxgK8wBZXb1tG3Z88RpNG5TxNQpPyQLWY7Vm5pk7dHEaT7c7dUsDFRzFaCrRuCkVx7APcruW6qqksSnCi",
  "key9": "3u1wphSAgaYPXr1uCx4tkjpPcJS8kKVqESJ3cDfaivKDYaFHSWP3oTqxkp516ANAY46Hc2hwWy2xWTSTGG9ToWWi",
  "key10": "5JkMLYyj5KBLVeiPsrRHq5HnFe4nJhrLdJk58Umt93FsEH9HM3NFQs2F2xqkASHD7kX634mBCvmBywFfzDie5UF7",
  "key11": "5Y4YMJ921igJLNY9mozRURGKRWPdYPyUVGTeCAuao7aZCeJ8Ef1tEkUUvF83PZCCR8HskxexFYoJWtW3ZsfNzQV4",
  "key12": "5LYxHSoGNWDzXc1tY8xcyS7gs7T3fVd2QiiSpKHufmWPi3HaXZek5NYXtmn6DV5F9SFvQHSbgTftpkJYWyBBQpRC",
  "key13": "3mbgddZPx2VEiDuL84xhpR4HBiRETYdtd5RqjXZFbJyoAMwbre9gchG4g6muhSFoP6eJ52BMPft5FxcDF8FPtxue",
  "key14": "4ZJ9HX4cb4WSfNqJzz824R7EGVCC1mrD8bBZV4e6mAuDXXyjyUzhPZnM26h4b1VMz3nqa6jc58HBBn1dgd6csGPP",
  "key15": "58e3VPGx8UbkY319BqBbxNWNFvf6BmV6kg1M9MTUQrVry338Gm4F199wEdUfTe8Eabb4uippt6nn51c9iR8bFeDT",
  "key16": "27w4mcy6Y7qjCRbPhDECpfGidW7QtmSHsrQ12ShykSo7VJGxANozXx3p6SUgvMCx6jekkHACbViBmag9muTedFPp",
  "key17": "5cMWSRQ2FqxrQbVD8wbCmzjVsvJBs56spYqvFFWekUXnGdRiv1r6B5u7ZxKNrsG3LkwkgM6x652QUpdtkoxpjTqo",
  "key18": "95pgG4SVmwEm8JESWpEsD9xgUrRoXEDEqNwFNZ2N3L2XtrGx5ViA1tZNaKrD3C2eVwGTgwrjSRyTELTPsCz92oy",
  "key19": "t5QfXmRwKoZmh3X8e9Ub7J1o9UfPQrTf6x5Y7LVtYAjiWNSCN4gMZqqq64TqEirDxf9NhHRsp6cFwBEEYvkLJVa",
  "key20": "64JS6Bu7H5vG3o8YZkQEx5R2Ft1pjDoqoVhmfviGCNEamQFhrqw3mKSL2EDakxohCF9RKxBY9BwnMUTCWVzr1igk",
  "key21": "3Ye1KhKnpcsHhV2UJCSqPciPtRFtd9hKz3kcgAFAZVzPy9FtWLTbpwPjPpNW9ze2UZPNPBuFk12qaXS5b6WYNRmS",
  "key22": "45HsRdxSF4iMqaw8FfmChxnNwtK67CrsYCmFU29zHZc2XiS975nKWV4o2EwExFarYmhUXiToC8rrxE1jtSo9rKq3",
  "key23": "4rKUjeUBu1yns8Kw5Gr1zFfjoinEnHiwAZoKpjxVPBNEbQ3LRFutewgieb9adgFCtU9Bt55MCgAMHJZNtLVbyxgt",
  "key24": "5asnEyU3XkhBkGGAuiauwWFvHwbBFEH57xMTNZQj3LsG5ZgRZLUH3KHj59GeF19d1UVnsXoWx2BF6LYZkUtjNR1W",
  "key25": "2mf9K6YUYTGu3Z2MXKjqBnv5pZMpEm3sGwadYQDS5boJ33r56BYbBij2ThcL8aTx52oNsQuri4EDmzYRMGtkmZvn",
  "key26": "4KiHQc6vk266CjgWnNY8EymhGvWoezvuYCWLGr4vobgi9oTXDTY7ouaZunXmHnGWuirnkU89guQ92T5Tp6DVCzvE",
  "key27": "J7GLP1Gz2u9rgM9JyEGe8zjmkM2sHcipA82rwZxSbW1YUBuSC7m4H5fZuytBG7mqnHsN9EGhUgd6gfnoJ1TNtWH",
  "key28": "5hMsGzL3Cg8NhArGTxmm5EvvbsEz3h9GYqEMs7a16xTMCTjG6agWPe1YChgtkVJjoqrfK2owaAhrGovbCxBwj2hM",
  "key29": "4cUbZ5ao3sFw44V9DUrxhQGZdisz6L2h4VJQZGH9h6b7DBpv4q5fptHZ5pX3FsJfAbTtVSsDi9Vw1DEPZX1oCDP",
  "key30": "5Gv3kRLjQ3qxRt8dJDDdCsLdLAwdZJddzfQt1QSQQYFeVE2ZBHCPohe59JbwwZwMc4kNM4B8tHsPLacxZMhZiME",
  "key31": "2FwCvnEVfN1nfHn9iH64bWmXheA77FEgrSzaVuCrspZeXxzj9GrwwtwQpNVqJb6mxorLBQSfqC8rqZGx2Z19mPnN",
  "key32": "5KywMnwUTggrZpgFBUvPyrxct4SYUnkAt5TGJCCUH6A6oy7m1nFdDHGtbMQMJkkbXq7rr7KXYJtCLteaQCVRecyY",
  "key33": "3JCCNd8u3dU4V52eEpaAUGcgq66fDwEvqfscgwib4SDxCkeeqCjSqS3imBqvN3gV28QfUeygzNyDs6KNLtQRYZZD",
  "key34": "672CcAkMx469nCwQRDpZAzWKj8E1Suej3JxUhtbyhMuo41ZJFUzt4MUDmYpgwKVtqrVq9r45G6BBFwDdesnKnbFa",
  "key35": "54dz11Mnvwh9uFraWz46hPMRkPc9ZwCf3x3rPqF24vyfApw5ggGDocNboHVSdqTDcaYDpR2Vh6NdpgK6oXqXWB87",
  "key36": "22rorgxXeDW5vVAVUCEGg6RNC3ZZpMkj6exEsLxJ4EkpnC3scjXVsTiEyU5Wchqd4xGEFPaSuxjhiKxEniAw1aVz",
  "key37": "5HqmFQbC4RzerL3ymfxjEEJsrJefJM9FcecQePrMSmJr1B27JJgxRefiCU4mVXx5UefqbLApsMXosza6UJyTMYpz",
  "key38": "2VB4RxL5LhsNL4XivEEMpge2Did6aW7TUx2RLLwtJRnqnY2R9YZnaUxgcJvUYev1T1JhhiNfAgSx1EenfP6FAsYP",
  "key39": "cCX34aRcdWnsxu7ms549stPbBPb3gfdTGLZXMzhNEd3nxBiPkrEx5vxqNscbjG6aoZo9gevvKfEvE1DruCJ2aCN",
  "key40": "3Fs4JL5ijd7xajxRvydGLdTuaf8Fa2eb6PJ2NcytwpXAtY19G1qasL5BmomB3GSyEKTSRoTXC1Ru1vsXiKj2qtSk"
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
