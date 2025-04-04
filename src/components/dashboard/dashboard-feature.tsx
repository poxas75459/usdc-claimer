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
    "2DKtzWiVJTe1Hu9ZyhNRK3Dhu4vnMckp9bzeqprWfxExuktwM8Bn7V5ndTEgaHFqMfGRZrNfGiNmRDTp8ocAG1Vm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fr38KLNjpoWG5tWG1wJStS671e2JGjSfPhbzvAM6Q4QpPa5EJP5AHQa4KQUmVqknTxuYejS7JkmiNXa16CyiiVS",
  "key1": "4ywy2PBtqynJxW3qV723tZNW66o4LTW9n9PeBonR7F62MMDh4uoCpw3WnktJpQzWJsvAe1nmA4EKbQDURuBVCENS",
  "key2": "2gXSQPCxpnckqQDiXfvBMnT7przQZyZi2zZPGcDmWjeiFPDJAhdtEoSKmp7nS1TAyVVFYhdDQGa1n4YGVw94XtL7",
  "key3": "uCk99CGUFZu7dWARH9vn93Mg4jgeskCvoZU3LHEZKg8wFBz1QJfzCBS7HkfFXcTaTQcGgL56RESHfwo6toq3fgP",
  "key4": "w6Y69giVCaG7osygwDW2R9hh5zAPFxg4tCkKkz9GUh1WfKjxbWYhxvnBZA5nJLccA91fuq3hMnJUU5XkxGbocq5",
  "key5": "5nc22NAwbrGuchuYFDnKA5a24ofzeA7YQAt8SNd7JSpyNVdrwRjFVQDnxVWrBCPGDDB2EcTVDg89h66F4mjp1dez",
  "key6": "EXtyesppMFXbeFEFwrqjALN5wksLNRUoxzb7ubg4ZQLk6BoVRBh8kxnZG3KR5cXUKdyhr9CKvWRfQNRbLjP5KEB",
  "key7": "2g5WPE4RRSHhypcEmbZbw9NYR1K48uJefgzvgU988s66Mi6d8xFUVjv2E9MBxqLNbMDHvsDt96rM1GfGpx8ndcQw",
  "key8": "qQha24xhWzQHopX2UFJuXnZycedkq2ycZDisGcnXdLVinoAmfGM1G7RE6oHYXWJiVQgtpo7J7w7RchjCmwscUcs",
  "key9": "5FzDP3F6ErbdAGa1TbvpoceFfCHsxJi73rK2v3mfGHidtksVUbkN9Mgd1cGvS6Q3pYoCcRvs5cqBoKp2PUVpkBwN",
  "key10": "3U4L7cKcZpSNR9gMFxJxFH3HELbYTFz6QTU1aRUAB2csHwqEUCEuj4e8hmVZXBvRpQex2DPo3jBnkMtCXYhLfDM3",
  "key11": "5QB59pog8pHBed2QiR2nkU6tEVRTEFarig6fsuUWBdduvJ2g5ZFKDDokYt2QSeCasTWCdBLqc54kr1mvgwqdLJbt",
  "key12": "42xpkZ2M1qeNBne3A5JXoexDYHcSUmUNZcPgXbqBsX1JAjQkezTNQM1j3Jwh5BWdH1mc57GnCSJFzxKiPmja4Krt",
  "key13": "58gbGuSdvgd66Etj4QChNa2k26PHBwgZYYQ8urHoLjiYJdSNs5s4acp3cnDLGYFH7b19eVdWmT6puWpHHbKfUrRL",
  "key14": "2HGqzskTuhgvGQyT9rqEq95vtfLmb4tU1iWzPnkB8GK6ru4BqvUzKYULYKR8thJmQZb1QDRnxr2jK3w4C94qMVnL",
  "key15": "6397xmaeQ31wGuim4kjRT5Hi4aBofFAL676VRpeeqS8qMdbShLnL2AYW2guQGuKSu8HjjfuCHozcnPp4uLavUoL7",
  "key16": "2vVBLYQRx9CXr55EyACwjUeFzBS8nZ2ZDDgZogomAeCovK875wd4Z1AThi7NzvfsSAzRw4S1W9NTncD7RSJmGymX",
  "key17": "55f7UQsPQJkDhqS574gyLFds4bK85G8bFSDapD4jjA4TuN92BwXTRwhP8zKKvLKsj6CwVZ62UvGnDuX2bE9op63w",
  "key18": "5giS5k5yk6f4ixR4WCWTag7F2SBq5LDKQt9rNJxU6yZEPW1Wo8XAEykxVaqbWKp5ZwaUrC3L4vm8Nbc9zQNRRvea",
  "key19": "3533bgu2sKGzg3Ms4tAHHXu4STjqvGvXJF8PK8DbB6sCqyXCzE1N3Q7nPRwwNtxKyYms2LrjsZf1SeWDrsqjgfLQ",
  "key20": "2cLSpVcToxBHRMECE36UtvpxW4m8yaf8eq4wsdV8QYfsoNp8QRBnkmkmCiM6FwdHy1hhkbiN5LdLjFu3VHcUh7bb",
  "key21": "4Pgq6vMB7fYvEDPoYYpxAsx9PioyrvYwEKaUuZbr4xyG5eG1zsxzKD7rxotJbyFBgeVFgaoeEhJCTkcAUS1ct1e6",
  "key22": "wgbUMpi6vHtzJHzjmwBHr9QZJ5JcxuSoMZkB6sx3pjNydhfMgYroLdDPBbnCdeMtZLx1Dbp93rPtpoV6bQf3ixc",
  "key23": "3BUXtCYQnhufdtdJzJ3PB1KQ9tyBQLaPgJfjpqwijEZsBmNcG5fZt3Z67MSABABUoy6Df7bTN7dLqUpQXVGWzKUK",
  "key24": "QnFK6jqmLARDpLej81VtzJDNrG2x6PGgEAy7zS5tJN1RmRYcwWkDhSjCCibgTtVNVRnMkfcu43Aaudrxi7zaJW3",
  "key25": "XUgbJYEDrN9AtifCnjXjf9Tz5wPRge8rknMfpeCxec1y4XzD6512LnwJseMZukCxRJZr6s7EwW6GnXrZotC85ga",
  "key26": "5zu1eysze9C1HF7ka3PMxctWKnrxh9VWyyvg5HLwM7uFTSoYP1i7bzwEPqmgupdNYG7bBEADkrTkvwsSPE87xBJm",
  "key27": "34BVkW9zVkRVvCrKdWSLEwgW4UDsr9nq2V4HtmQfjGetUgFpHYUgqFoumX2dTo4JBGoVHLH2k9enYrCoU9Z7x1SM",
  "key28": "4SXA51YfNEUsaQJFKppu5YRmDaLwHzsFXt8aGCZ7QVGuEkPbkjLWyjtBXBpoiJhG19P7NvqF3y5hrYjcdp1jnhkw",
  "key29": "4Q7TvYtiFeV5cLaZrpHqsUfCAbR3Efdkfz3TVwCFoQknE1KHs68MXxoQM7hYDQxU8RKAk8pqKg8DJ7qyLHcgCta1",
  "key30": "4ZWRD6Sge9qknMPNNjd5RbGRN8NWRCJJivm9Xuqa7iLUHPk49iM4xG6wbhLFwfR9cijtyK2vB9ouu3Y6bjsD1SJM",
  "key31": "61kKoep2VBczQh1NWKybnykSNTCyBo5DBUCexteM4YuA8vkkQHKy2wUo6Cu82qd8LMV2fXQMF2m1hspSArxmuUC4",
  "key32": "4ysnTrusvZkeutqQqXdtgBVcxcyAEJXgaKdM9mBd8PspYt9fzvpjcUUht1QjVuSRVN1rkvtgtbXwYB1G2G52m5ck",
  "key33": "5u8jPZTJMB9jFCMkuywVHTKJGjmwNqkEUH1XKPHzWBykbBY8GtDXpGSsKsc4YbNptUpoeu3tPPgaBYseEA3jsvyB",
  "key34": "58Td5HgUdxwu9oF46gCgNuFYv4mSriR9MLotUv8x6j8Bj5qaSHBsx9nu3kmu4fPJcwXdL4BZjjMH951mdRwX1hm5",
  "key35": "3iD5Wu8bDh78xJTWDEHuJG4RJd3fgMKYeaDa1nBeR9s1n4ZoR2BYbWEQJjYFgB4euyE4o8n6iePHTeHTY9GMPHG8",
  "key36": "3XfjqYSgKHMswBNLDPFvnYp1oiP4FwXLsk3gnkt4wp27yjbETGvMvHvznowRJNh416DSwCnGf4K3NqxhBjCTVjYs",
  "key37": "5XuhoHoYAmXjSsq8cB5EMSNAjhLyPYQtQdMPyCdbqDoZas3KbRqmoBmQ3RuCu6hUdaek5oK7ys59LqyZ5HvDNB3c",
  "key38": "56J53taT3wX8JkcNxtLZoQtK6UVrWWtW8uQW55rBmRZ4TqvnxoetdnN1e1Mg2ehdk3pEDpJPUMhzFSfWQhoLG7Gj"
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
