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
    "3VD44tuKuw1Nv63mMuwd7oq84su2FhzF8M579RPALCcWKtTaeFcfJebkQpt4aeZSGXXasEyUABjib8BSBJM5mPfm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KbheGnkAC5MGXDbRhdyS3zyUucKgifU4GG3oc4Qpnf5Q5kXwhnZEZugr14bL8LcY5dbMSDgzNzX6zbRaja3Sjn5",
  "key1": "596LnAfuJK3xpi5ZjZ3Cn4FGqTC8thHPH6EkS9chcVddhfpqnAPRkPnj558K3257CxGUPFERjbedXAWw4523Q3h5",
  "key2": "2KBH447DqZEgpg1A4iH3VowpstE7NzjM4YNFndPBhXNNsbNrDhWGTJxZoXuhRvXUrnMCnQYqzqBRZidNEx7JTpXV",
  "key3": "5eKr8zsnBZjVwFPbCCVgbGSkMDqNTL8wLjdXNSXMSpRvTQwn5oFmpY2ADsLKYD5i9qKm7emkj8ywtFdYPZ5dNqw9",
  "key4": "2E1KJHrQ7yvztwuLiV5Gbj5DfQdZrxEKPVkyPjny4CzWuokkvaxSJ6UUzL6KBMKiGepCCcjGd1bDhMtb1imYAShY",
  "key5": "315Sgzb1RdZbTpGUAvKnrcqcwn1Ahy6dxnZTwCU9tMZ91b3eBgbA3w2no7jKbfXLmv1Ebr6vygSGoDNeGyiKcfhf",
  "key6": "boTa2xFFsjP8vHqS1qFDGE4WkjCtJe5j1uhY5Ktx6nmvaHwLnxrYwYQuxZVgbSH1PZeQxUaa2dToBMEm7bxgGfs",
  "key7": "3tWLdd4gZTNMzuBAfDYadZpdvTBK52oiyyYZVELeK4s6HLzr8dFUqLMAfs6VLjetcrZZ6sGhfd2shSrZq1xzvrPk",
  "key8": "2spviukrpVr4qXGyPRXk9mwivCT88cZwREPfXreCTYR6UGfEn44eG2J3fMQcso71EZxH3iDXigo5edPJjoBqSH6C",
  "key9": "2hi5RZCZG1crwFSxA4gFu1fPuk6NVDgtnzhULEcSPpxrYmEUNUQQtXpXsJfQQitZ1S9z3siTmvm4nWUMBUYgWvdZ",
  "key10": "3bBvVTqEYYH8iqj5TjzaUbc7REw5kRwNK2WaPpvnKyXLHSB5GAmFozaC3H6L9fLQ1CMVj9fCsTgx6anqjqpAibtW",
  "key11": "4TjyivBRfwRphE7uDU3EDRfScYqCb4u788XBoK97duSFgVCTuHbpDjN5zAdFo3e3XSxM44vNutecpNqShasEUidX",
  "key12": "XRThFQGcWiQJ1s5Tm1StDufHyLH4uCgaqRWMsg9VuCzALuppMNekPmVk6psEWxGpCQtgAPaRTYRZkhqAkcS4xUS",
  "key13": "5T3hapQHEGW9NJrKBtUk4oYqtsR2sFu5yEp1h2gfTzSioDepY4PGiz1Pf49ws297tkBE6mBsfPriJnBMMs2kLzJm",
  "key14": "4EVZxU22LecqA47M5pZtvdsM14cpnWY6BjjnHgddKGejLvxFHS3DUjMCWBgEjz9X4xbwXv7mJbZxKZJU5mpuWdLJ",
  "key15": "4keEH2kmiteMq2uRJPXs4aHmmgN5bzeQ4Bh6ypHhAmnth9zWXdD5bVRcQ9GNxGvR9wev2AQ2EpyBLv76m4QkdqAJ",
  "key16": "1Ph7k6AP5TTuXzdC8bMY1BFVH55LHWWVLY6Q7DcFyXjXaKYMdZ2VrFqCYNGPmnFmPLAAUmHJ28PaLkkNdZYe1R4",
  "key17": "5Ni9RGBpfkQkhiJ4b2t1AzL5cQD1AUkkjPTZPRw9DLLKqpKaKDHebc5exboXb4TwA9oyVNWWvskDmqipQptaBmPf",
  "key18": "2xtnU6RK6Wf4JVF8y3G2dAcip2aWg6Cbd6eS8toKVwYihYhTChmtyDyj2gPB9Xx5qwSULmDYEMnbdSYUfiznqMRp",
  "key19": "45pckbR5U9GnQFmjpWQwuz8M4SRc7NAE1j3EihXdqb7FpiJNquHKwRb2Mvs4ktMSE6PvtzLKuhEFdw7NuAewugUf",
  "key20": "5YhJpjfct9PjRXAj31PadzuVgSRW27pq5d9uGgGrzXDN4gEf7UeEMgLfaMQJAtfKuUrc25XrbYTpKZU6fLoN688R",
  "key21": "3ng4EWsk9afpHotYGz9LULofgdrJWyCBJBp27JFHG5CSCxMM3ENmqRdJSQ7aWYN25F9SPEAj5PbvKsy9xondCARm",
  "key22": "5XmvnvRWwBTTXqvibzrCQWWmJZS2WRugMRpxuNvwyJWqVmBcJdaX4qj3AhCComnDpxFUWN4GJAXBr4ro1qVC1HrV",
  "key23": "588kiyfWU1AvgScrShpn4VPWXNeeLWEHp1bYatozWr6CuXqr5kKg87bhL1DkGD4WMsCREym7CShVXZaejHnFTxjq",
  "key24": "647PC1kxEmgMBGX7TjTkUz4SCfnDd6neAuBhcPPHeFoJ5sdXVHzHFJXVaVTJzLaJsbTdM6DiUxRLEVKntBW4KUH7",
  "key25": "3XiRQM7WhvjJBYRtFkMmCFsTM2DSuW85WpYbFBjQoaYpRbPHuz31tTjB1uctQFbw9AsWugakNRfTxRxg8oiu5BTt",
  "key26": "2uo6SqCXaH6npVNLT2fHDpQKwdVms4Qfgf6qUyjwA5RrWzun7AiNtYpHEdhFqQDXHn3j7a9mQ9VfDetHMJ3CwBbF",
  "key27": "sgvqg6qToohtdUXvidCihJbQRzQVmTLFRx28YjCyUcxdK3iy9XaL5ofEJfWBGcon81JgPdAkRHtFEqWdmx7N2xx",
  "key28": "tvAHm7aubDwD7YpBktCDFuXb5zbRuDcxvJTSmWUsMiW5bDhcnr6ztNMtMCPz1D18EYsBn93pDQFkXFzHDCQn6hW",
  "key29": "5dECgd8YU18TLnkFs8iC8BbvQb5ZqF98LMn62rRjaB9w27BiG6jQXinVPjjqSGN9hKTkWffdNZPw1UJr7iFuDWs7",
  "key30": "H59ecPQiKAoMSFXDzaxDYbikub8qcVxspBxjxVBmRfW3at5U2sh77C2GwTnMLXDjAtb1Uc97UiKpfKTdTkp2a5B",
  "key31": "4Gq6CiJUPCc3Cr5QQrj7Ay2QwZk8cCHqW4PjtwMyGT7P7cLbBCpjM9kJ9zcHJ6aFStGBeqxJYRdCV6FeWLup1aPN",
  "key32": "4Na4fhCerS2ZXXfMzovqAnu43Ko9WgxkmGTZiHno2Up15VZWH8yaRCsCxSwWCUbfTom7aycswwrN3pTEAEwnSCjo",
  "key33": "5vk9wzr6CaCLVeAqo61py6HhchLDWHbcJ9oBBnwjyrxAAQyEsmcQhFL6tN8gmBLhrEFY1CtQy9AsfLWU5A5MLgSs",
  "key34": "4RUvBuhtND9G4bwPELaUYE4iPtUuQrqcVkPgsxgwCNeqUBcubwrjRnRWMGMtmQfvb5uhhQJNbTMcrTQPsSQtnHfd",
  "key35": "55c2RvUxkzrWqWvPnMnk2s8pjunzmhv8XapczzuQSKMPhi9ZDSkJpLswztTnZSUf91MSyty4U5gkmq3i2V9UKXhV"
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
