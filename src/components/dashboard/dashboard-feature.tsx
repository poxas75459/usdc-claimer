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
    "2sjbLHAYXz3dAjVKDZw9Mg8EFXXhyFXPPbm4WmAdU9BdAtRAqsqPKXUgYoEEMXNgcrKm7ebL9JUUdrg7evHAWTRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KnbSiK6yytN2pHKNao28YX3b3KEuXoLai9tABfjcAHfGmKKcn6pRgfMS2qfd8Uq9nPGNHDYsnBdsVVyHCRFsJMB",
  "key1": "L8zK3FAMTLqcysBfYswWvjc5xnFbnyTQwcxbyNCbx4H3ruSRajZvqHRHNaBsZRBkoyB9CAmM4LqJTbPFihepNGW",
  "key2": "3AsSQC6cyf9ZAvaqtTma18gBn26usf7dcmp2TDcPraPRZBr77MXHSGB3Vu92tBBnGxLp1piEKE85ao9ttbhhZGN3",
  "key3": "31juKkLLo2uDBBRvpgx6dn9DA1BETJHEMrpaekNQmqq23ckrQR9vSNkhfYEvT5KbPWkJRXAGYcrzzNfPn5rDBDob",
  "key4": "5rrgkpX29542ivWnoxKNjiSr6fyizYSAZi1zC787GKKZVLxo8AR7VLWo8CGkhdUB6iJEoTBRo2WGcRLWbB5e1Doc",
  "key5": "27NM88MASFZqia9SWoMjxBYSu8QWK5DPYztXsReg2fT9EbPUAEynbbMNHWkpQmoUyJkaQjYSSBX6Av2uQgiKWhjK",
  "key6": "3ksDffgwFk7jQ8adPT7MSFWeGQ8o8WJix6ZUUczLS3CHwvU2Tb1ge4k1wJfMUnjww8AsTi7dS9ScufzudHkMpju1",
  "key7": "Jmobqg7DHf3vQJktFKuEfZgHPxCrHRCUei1642ZCCC3qcjwNsUaVLH3usrSHwi2u5XtkYDUjvh4SV2M6psT2yW2",
  "key8": "4KogrGQwhsUqqPLopnDzoskrTGVZKJtfWaPKvRLpTLYq9p7ibesfzLMhM5gtNxuvNuDp8dvEJaAJYo1T216zDj2w",
  "key9": "3dSKqoYPfZR19wNHtHPHkerjFNUKsdGkgAq6FRfnYbSQfpUDxugaURoXddaTaTrRb9Ed6JXYbXBVFHy18UN3rrof",
  "key10": "4krTkLKuVGECP561xtKSGs1S4UtyDXzfLDRAZef2q6Hfn2wawfNAKX5TuzaAi3oq4VxrBGmLbznqxgyLv4he4y5n",
  "key11": "3Zu2KDqvUc88VRp3Nrpe9prJx2oFSAYnWn2uKkbVpBCcS5SgFZdJS3mzNHjkp6k56S5JTSvEu3DwhCNsWvuuHDQH",
  "key12": "2Vcr2tu5qBkVTGUkigEb5Ydwyt5ncJRpV3GVqenYy6TgYLsjZF1HbNrV7TsDRUyqRXf9xVrbqcEtAgyf3w98ZWoJ",
  "key13": "45HrHLxooZuvEH6yNweuw7AAXYphofawhXZtZoHNbV87oSPhyJrP6FWdyBNgc4LxMYoqPxArFkYAAxHLBKNp8Jfk",
  "key14": "5TjG5DAuGugV6kNyj98yupb9fZgDPRG1tCy7vq51ejdmFg73cnNjVoCj3oRE3jnUHAo1rqcp28nf9P5JLzxbsyva",
  "key15": "4RNwAJg2wQ2aqmA86e22JubDBZkiYFZkxgAzvXjTrMd2rQaZ9eWysXgVdJqxMk8s1mbLDzqBEMzApyhi227fpjek",
  "key16": "246qvYvdjMPR6gxao1a3b2JvCKgCkW9CwzCRNuKm3uNLgEwbteuPx3F57XqKxp12UhBCuyWtQMQhWRYN7ogrPQLa",
  "key17": "49T56pXVEH9JBH5LvUqeWX1bbiXjgMwNcRQZcv2NaF7WVwcDtNvLJHvRn63UV3Lu2LKci2xHzLoahx3N5bJBqw7t",
  "key18": "3RN7DDEaskvphHifojEYWZVkWSzrDnWFKd4ntQ876JCLyPyrPtt74NLBERvHpbMimanfBUtUD6TcqzbfYaUbfJAW",
  "key19": "4ze92WTK2LU7HHJHYU8wkgjUPBtVsGujiN3sXik4o4ECTmDVnkoUc1Q1uBj8DgNJ5FqBxSzR7UKk3nmxQX7KzN9e",
  "key20": "4MXzg2nJ9q6BP1WHzg19zSCKa7Jr6qzX8CoDv9sjdBSaerR1MoP5ajBB9po4UrPCDQzqM9NQK8AmjifvN8d1pv6m",
  "key21": "3AZK4DNLZJEWcoXRbXYo6WRTZns7CiuQFshCKXW6wm8e72TM2aJjQDSgZwLZimuhCjBndx11smrYNJXZ4uFnxXsH",
  "key22": "4t3e5rbCQnbm6GRfbcKDeKZ5Lk2jKCE8TK4oorYTj1ptLvY7PauSvvwyjCDggPFJCQuhhxnPkFjS73gcarLCrjKx",
  "key23": "3SrwtmxSawmGXAFe2gp5TUBobyCN1UteZEAfTXw2nDb721ViNCrr4STzy8KVnHCunr1vPUefeCT3JzmxDuNdRwaA",
  "key24": "4jW7YEwn5tfqVX3TRHmQ8YCoEywLtQZ9VNsX5YUPGjWcNQ81G3Ugzd6uSmbYTzBqdNKZQ9DsVzzh5Qdf3YKuVFrr",
  "key25": "41AwfMkBSUY1oGAvJrF9DRtKdyJreUqwcMJLVaYyu79FgKSzvuEauPYxWDutyMaamaUwgcv8upqinXmXFcj87Mw4",
  "key26": "trJBJwBwp6R4zj9uiPxFYB4Fkrw5Uwdvzkw8KMZ7YJp9hvJny7P1wYBzETBKBJTGQkN5gU7WrY1pqWYPWtG5z85",
  "key27": "56b9GJ1tLHzbvgFmTomfrpXvA3Nade3tmGqWLo31c6wG8NteMqsD4KKU8N3E93YiZF3JdfwTFYNc44XzZ6cPPwNu",
  "key28": "2hRXC3J1epjxcXEiS2gW7GTfurHgwquhGh8MmcNpLWZMmQzZHBGB72Mt7AFXCrreYnaPpDTfKo2K8bHAgKTpjZMM",
  "key29": "3R6VhRfvN7djcDptxh2Zu9f1j82mBKyjpixT2RyFWW8nuLfMNE8GqYY2mFPH2MA9hbKPPojHDTMBLxfa3ppfAEVH",
  "key30": "4Rx9zRBeaX3FM6PXCWxeSzSfGasFVPT1EmFXzac9MS1GmHoMtFMmYjERvnMzCD8LmhPtD6sBEmvNVUj6XFYpN1pA",
  "key31": "iZ2sTwAF37Y9v6Rc5EL9VwANbNmQfadDteGjQPi3Ss6sXN98TJkqRRc1eTb1sb7KZvumroykgw6Goqas5EgGv9U",
  "key32": "5A9jUqF1fMRrpNwXSJSrkxFfAVFUxAWAtGfN4gfbw8oWCpx8ATkBWb5N9r56NwhfrVmd7SzH7nHtEWT33WZq9hkJ",
  "key33": "4Ub9Jmgp73vfBgw2tfEwPZTr1RTVPuG5yzLTNJg2Z9xBF2cnZNeG4Qu2pR8uijymKegHyaCoLgGcqjed2YBpA5k5",
  "key34": "pa8vWq5ZZitBpPCF3sHBgB31QaGC5mMTdH96TnKUd1y7rCV5WbEVwwczqCFdSLVpeC1r6gZ9bhAbSsSGj5zaqQL",
  "key35": "4XioBp1SxHGEsUJsdDmVHz8GhD4wzB5edu7GDqUfodVpPABrnvV76dK1ADaHrLyFVgFAAQUDVpnuzRJLnaERNSnn"
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
