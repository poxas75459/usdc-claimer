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
    "kh64BR9ug5jWhkCL1QbDpkfmkCYp4Qkfwqdw1LNwHN3AC7mKb3uQnsYVBgTk2XhnZGo3VXqJVJEjT5JuQe9zoea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vVcTVnSvKLXn8cTbRoBisWCkNLrJcwRb8AvSuZEheDgLy2etKxbbV8LmrxSBRFeVqj4orVYsgcNv2GXSTknUyvM",
  "key1": "4SmVwfCyH3YCtd46hyUQTLBwg7u6ubUdUsC8sPDCRZQs3VBVrGbnQQ2TCYtsdxARgKLb3H2a1G9NQN9uyngnHUoX",
  "key2": "31YcxSGG3TcaatcG5dghp4TMmVmUoz8dJeqzroGsmAz9mmr8LKh22KDBLi9S6JvPcr6HZo54xSpHBxARURKAHNzi",
  "key3": "3F9d7xRJJ3EGaYmWPmgBss9j5X68AmoFbVBz73Tj3MQDsERfmgW4CehGGqiSkounHbsxjyhreZG34STqkyzvX2Da",
  "key4": "423xct7BVH3UjrtbCSScUceaHL3uEbL5MvnPLZydG5HqLJ12MoNCG3nprTeAAppR6rM3nhima1F9LQrZZMT2774D",
  "key5": "3a7uW11pSs1RkvJBBu2uc1oLWzUNNdbNfBoA67Y62EySnDP15funVpVK4D9hzh3vMC1wXuxDbUNFQK4N19CdEzBT",
  "key6": "65LBSoizGkvEcAv7GyXuqNnip3cGGsqnKsnnn8RCGqB6YrijyHGB6X9aRY5poxgjNqNiGDGb8VN59Z8ww3wes7Jo",
  "key7": "34Dw99eoh6TNtnS8eJEA1zxecF5uhVZXLaf6GzfZcgkFN1msexaueaTKvf41bc6cEEFuybRCGSiqGPFA6sFXAcse",
  "key8": "4R2zoZTQ6EQRQNN7y5FGt7SqnYPeECioan4MHyYwJcu66WjdqWCSC9GS5LKzmaeGVRtaZnnPnBXL6ZnFgkziqeut",
  "key9": "4fduxr8YgDtf4pho6PM89N3k6asBZXxMkuwJW9GZK7MMPjVvUCLnjsk4d7jhzJowTkMKse8JFXi6nDydJ3LvJsX3",
  "key10": "4xAGWLz1JRcrvLpE3igbBcTgWuLiiubwe7ngZDmUXBEyv6ktecoNbBU9bcZrSFdP8Ua2pmCrAzaYfMvcb1XwEUd7",
  "key11": "2GrkMpQa2mF5QNGBmshToscCzVKLcBSpdXNjx7iUY4p4iHULSFoR6JZRVSLrwam3ddJKp6T8EoFyo7cL4q4ewRGY",
  "key12": "2AB2ZbE3rGi8fvFTcJBEpFGMyDNFJqNGNoegkNpSLnPm4c6S1HhrrNuTs4S6LSAGCiv4HwkJ7i4hbSvG7DGrKjgK",
  "key13": "4LRaTDbs3JVz3y38EZKShyQfgZPNLpuBdbbGH4YjjYw94gZeZ3tVWbfTA7e8v62bywQrH5Eb2dwJgUguwdg7MfDT",
  "key14": "Xbh87vsZhX217LiM4QBtVqXuQbpXxwL35vVGeeHw8pMhovjxc9YJTxiyWqDHmgnqbKMknEMg6nzKem8LotWLcpn",
  "key15": "673p22s4nSoMA3oV1YKUQUTnBE6TVgJ6JrAnSxaG5iw1fMeQaZCmQ3fDfvjHMK23wzSYd4VKVu6cYYgzmXFmz6rg",
  "key16": "8DRyCM83C73ohfvRTyyhySZNRBETshGf4XoveCxZYaTkM8UxYXeF6Pra4Bt3tbafaruL45D6rnb1FoHZJ6PfbyW",
  "key17": "3sNgFbQdPRPvFqdNhkMbHLzM5jkDUkYjPkf7PzrGMUN8em7XJQ1mBgFh4ecDd5xy9jEcR3y9G1e4gEXCog9HjXZC",
  "key18": "2AYUrGjHqwF62v3qBgV8YjauzMB3txCtGfMYYqMRCWL3DMfaRVuwfgDQCYZme3KmeZS4Q9vNpr1y2Si1HGVqu5VK",
  "key19": "4uS5qZu6BBeFc1heJ22EaZxuagvizdeSLdrsV1tnJUB9zQLHDEwzkDuMY92L2NRBXr27DEdHFJZxhJBVJX2Fz34X",
  "key20": "5FSiXBKVfEYdv2ZyxgNHN2Skn8aJKHLHkAk4kRRWxk7HTyyipSC9pt3DG7hr5tvMWRVTGZpFLtuR87RYGpmWcmEJ",
  "key21": "5KC5wNnmKhWSx8jitXbG9oNm5Z9GJHBd7kMQXzXkUZLah2jUpCms431MGhd7DTqxMWgrqrgbcidQ8nUJYf1WsMFc",
  "key22": "P4F6dPn48BoZJquGeynqRPVALSRq3NLH3NtMBD2H3NygQQu4pNCydWa2uCjnanqLTQBmNjdoHtMM7G1tPsZFWTK",
  "key23": "4qJuZcDxdH5rmEC2xijevkCqeiytgnKDguPFt5xeKLVZaNdwEdCChJ3jpSNaGxqUwYx3ecy6bNjUDbwa4yECg6zC",
  "key24": "4inU4pUL5SRQz4PkuNrqoeFV6YhDqKKTsKAKSQwkFG28qWAqMvikfVCaopWaGeecJ1aCgfb1Qf8iayPBUpsn7kSD",
  "key25": "4rEcDewtgmTMmJX1VD6UBkaHzjb2ndeRhSnDYgHraUCWycjgsv4Ru33LsNrVDDcDmxskiqHmW5UXaQXUmbU59LAi",
  "key26": "2aHMjTo2g54RcJGeTMByEimApK8TUsbB6cm8caYTZAe75u5oSDpgqe644PqiZR9P7TM5jbyZHJnDB7rqz3cBNza",
  "key27": "qdKYwTnk8cSctBqdBakdMK1sXu8HJBcGMrCXi78tFjpvL5mMSR8tbA25SdNfRyWHTSqMTNdbv46noQeV4QvJfN7",
  "key28": "5F3Y46PSSEpT78u1WqT13EpYDnZxW7FNSMoTfmhXmmBvMvQnGZohE7GACcupC7BX9WczpY6fDTQFghpL51Ucat1B",
  "key29": "2h3thWAtS5irxyWhjjVXVF6PxNWDewvah9xWcTWmw7noN2gyyqC6eEmFJaFRQL8pYxqB5JTV6tq7or8TxHnfwfCF",
  "key30": "YHHix6V6fJ7ADM3B9v1tLY8c9WK49HUWLZd26GzFY1mxUk9DLWmscYsT2vpgW7AXBUb9dXCj4EtFm7eU5EoveB7",
  "key31": "5FuLikAf81CSxb1VaPLQXyBLgaoVrz5dPHQiqw5yU1NoXsFPrv1XSTaq4yLFeHRdUqXdWi7mTePhqkQpBcgAxkUb",
  "key32": "5ucstMHkitxyeKDq1ijwmvBmQbFYcYBfNpZdVtXC9e3MfNFe9P2YnFGNosFrpfPuX4gedVvBmreyAkmw6T3eu5RZ",
  "key33": "5sDjdbiuc9BjHZzWvrFApK786M7cxz1zDQhFtXgnJygnXjhgxzbmZU4ABrTJ5J52y32pQvQ1oXQMcj5jG5gzPVgH",
  "key34": "2Zhu6Hwv5tezMAVTwbgZF7jDzyNEBBDhgvJMQ9XeGGa9cS1fWxW9EXW7S6NPnydMxJMZ7zmwwociQdae8CqNTpwg",
  "key35": "2aipgYxZ45KyuUm2yD7VHTYmmM9dkSSQAHMTFMhJ6iPwXbKFUnM5g7qBLnwb3rstEr86iVVQwF2AKMPXySunJJUY",
  "key36": "264iV2reumkkeuM4QcXDhMGZ35faX4ysk3VbNFspZme8Yj7LqYh54NAjzgsLG5twFDxP7J8vLHJM5u9Dzpnueee2",
  "key37": "2XEGJtuuUReawNFpxbBsu36Z3oCnfZ6Ux8fUo8B974uHvrM8y7vE7WnQjemjwkkxdCwGpQN4fekvSox7wrqamxdj"
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
