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
    "2dJcFJbjyqTcAV1TneZ42eHcYFvTMYXQsWrs6z8kFk7nanuuHMw84Ly9ij5g8Vmd1WTieUMuWfjeW2GzvoL6i5L8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sRj2BBzBnYFayCyhN7QY7yPjMeh38mmsVKy2SLc38L4Xq1dmVvKEj2G4xQBmGCpjE4uLgr158C2vMVQsbuPJzGC",
  "key1": "HFkZJM1xnM26ewBQvmH2HE2DaxQ2zryBgZwtTsFQjkdDrdxAxdc6PbZhpnTn3trVn8F2CScNJaxraXAB88unS98",
  "key2": "3ZjD9CGziLMAakhA6ogSDEFR8LyNukQtdRaUhtRXNm3WdN6hK4ebBdS36ScpMy85C31ipKPAG2AvrnD3NWzRo8aS",
  "key3": "58PGfrJmwGqCAbwLXmMQBoPJcsnF88bSMrs15thKDiv36dzLx7WEArDU74C2rAam59U4Vx23LiQru8M8P8bbFibV",
  "key4": "3yBEHWbZE8ku9JsLYw18umDZ7w4GpTL2doDghmVm4BeXMyrWdbmJkzjfWfViLJU1zPc9JQXZGbNTit3wvECKF9Um",
  "key5": "3ZCZPWLNiaWSd4ppDixc93P1SKdihSjbkHAVsV4gk5HLDKCkbNgaNKKCH4bPi7VGNAkHZX5wNZD6qgLxeyFaeqMP",
  "key6": "5cuh4iR9JzTC2XuTKiczZrGkuTd4L6Csgo1Ate62qQcoE6ynwQjgaggLp6VpXV69pHJ6CRbZjQkfQfykUR3KRobK",
  "key7": "4S756mjbLbueqk8Cn8J8Eeud4kB18akXMRZBc3Xd8Y8rrUJDJFbLHNkD6Ez7YzUJniMkyqk2SEohrwSU386pjKL5",
  "key8": "4kVqDYPBWD5o2gGTT68YPZnGgozLULhfyZAHiLcNBKXzwQ3RuLRC6qkeLJn2z24fGBL2bd3yStKtTTrhvReszdWJ",
  "key9": "jw3eYTMP5x2YgsZqoybRP1GqxPN6BhmANvcZdHKP6vo9JjFBfiQd5TBGaanzeHfyVrTtiuGRd2kyT4EsLXetr7r",
  "key10": "3dJgScgKrH7rZWLpSejBec1CYn2untq5p5QHTkYcLuomevy27R2LxFo5iSqJA124TVwB1jcuRhxVMdhD384r83HQ",
  "key11": "3WuH5vxVFYCn7h9nBxeUP6ZLRmJEe98J1d47JZzkJAoFATDEb8xeGq8muqJzCkbuZZVj3o52WMt74EZWpUAFBYt1",
  "key12": "3VmBckiswA5AdUQJSM5mULFYnEUh7Tknm3LQwyLBxuYukVCT6YQh5DKxdwBEWArng8kkwJrQDK8q9J3CYXcTStaE",
  "key13": "yhqxzHDv6oJYhGvjmB1eoiDPzGoVFp1ANmYP7RPFGmg7YL88bArvKzjRnx3zhijUNNwJSyF9Ey5xkm354QiKidS",
  "key14": "TZ1Pt1MgBZ2xv5FMaqWUHXqadwuaUUkBssDgStYN2cqPU4nfaSu3oWSetuhErNoZNtcCPiCy4ifVVYGWFEK9DJx",
  "key15": "4YNjMvA8aQdn8nva1CsZPhiRvWbk5oGHJnUxoiqbRQqVGMJP2camUREFePUUz38z3UxTZAnGusJaNP4RpeUZLaYM",
  "key16": "STHF7ThNA9N8UzEnRadhKW13AhMwfERGV7XpDgnPVGCrCVCDtfkt3wfRZwaqtF5bX5YSN9Z9HBXB5vR9rsvRa1K",
  "key17": "4jGx5QhDz3gogbNkTLqc12isuT4Qd75NzNWDnzGfqY8LCY8Svhc21FoRBKyb6pQht4cLLDW6jpmBCut8DceBsVfu",
  "key18": "45Ro9vA2Lnm2NpbLH8jrBdPRQxBd9hM4xrqbvYYGNKMSqHrrMoM5oDpF7G2zRrbyk9pfFsN93YmiPF8PE7b2YFXU",
  "key19": "4z2FomCyVg1X1hEp473K1SrotSewJWz1tZxMQpCRjM2VZx8hrpxXePbeuMwuUzqKNDtF3eZxgudpKoTniNdUwKfG",
  "key20": "4UC6aciVwpo6jVm32KYZSWL2dXohNhKkzVjJvhLPhPoCQps8XRFLy6nXXnjA74FGxqmPUaNVTfWPnTLFyAw8tpbQ",
  "key21": "4MjR5icCCXQbF23SGzqsQ3fU3t2eKastshCAPo17RebrMdsRsWgLjd9wJbVVvPtnZ7cX7s4iE4yb3NDkZG8UKsGL",
  "key22": "26DwQgbPvg9sgoiKTp95th5oWkPRsg1QW1JX6HSDCnF5pGLCroXsNGWxi88FFJmQkNGZqrojVxYTMcE1iLdKE6o9",
  "key23": "5qECx1MSgr6HrAFQrSNddchXU85uxCtvBK6mUoWVHTJmxqAeHPwfsNMSaB2wDUcCN2BHV49nuoY7xEi5VSH1XT88",
  "key24": "2t6LeceVK7iqCcarruzcZK36MpmtbLfwgAXbZS77rycBAzn3SSjzdQzdCG8DLXHeVrhpKdkjEfdz3Gx3uUFZc4KS",
  "key25": "5TEKiQwjmNjp4QEDCDnkHuA9fwTUDsfyHRwQdgz2biaYi2tL1Lbu3xTvArSdjdALRZMYH6FmZQVsTBCbKcTn37CM",
  "key26": "2UT1UKZ6PXDn4GNWpp551WH4dbjLgEnYjYcQRYXjMED2Pdkg5QBxXhM9JqAvSPNDHAdazk3LwFHUgekQf7XTcEjr",
  "key27": "485ySDZmbcvQ6v8cokwgyArgqvWQF9J8ZLd56BQPe7Mk2P1eT6x8vQcmHW77YEYdvhM7mRnTM3s35garypRstvT2",
  "key28": "4FP6hVNfhj8i3dBn7dv5Tzhx8UJLLw7moCCv9fLuMZceFsPMrNbQigf2xbwz4FNUqaCd9uQMwupA6Add2uVy7GjD",
  "key29": "2CJn7ifDHAB5RFPZFcmZJnfcvejTsJqJE2ci5eRG2oGU5u2EKMQhLwk4eU5uJmVNrFsEgyKGRjrQuFjD3oWYG1ye",
  "key30": "SC4d59oE1qkjBWrHuA4FUQj2gkDjJkERiQkivXRYa13f3Y3MtUrEiwtN9LQQ5fTH28sUpDCikMQFo5D61R7B185",
  "key31": "312tC3qpSsfbho636sL7wtnhGPCSmV1HUtevPEva14dZAS1rRHJL8u9WAMsSwAQPKEbg2Pkdm8rkHsxvhtywF8Yh",
  "key32": "4SoobbEZGmSxL9n5o71rScLJ8fkDrmLWuqPyPT5b3YD3dJxC5mWyoZL8giZ1vyoGYeHW5AHmgzNjtvWLsKmDk1rS",
  "key33": "5762mKHPTg1U1o9iNG2hXTEgNEeXK9zJGPLiq2x5iE5LpVhHGDhDP28peDnVKe3BuTe4Lp1Zbofp9uEEx4UixJ8h",
  "key34": "38FuNUHcm92KzbKHqScrZEFzSvmAvPKShE7w5HkeRoRti5JhZiA1Nno2XjS8tJYQWsyvk1gPf7dSKEBcyFULMeGH",
  "key35": "35F8fJgPmRVVCYBj1zxx34qq8KRPUT96Wif55QSimH6MxtxN3aSA2PJrokgfQxtxX7JXs5GbAprbxSxYyRsCVtwu",
  "key36": "WUKCkP9X4wuZ4wioTnXSm1ganrYopKZUgzkLTR1AA67m1ZLyd6L8Gv1fHLxQzdkz5PQSVujY8mJ6ZmVsSVZyVmp",
  "key37": "48ZgXCcxB1VYLWfJ9wu9Dt6uxQvr872pRMAjXRP232sowLPUsprVS5Lu5KWjTnFFdUtdpeRCJVkszY3TM8vSEC2Y",
  "key38": "oD3KUDpJEvKRkbfeSDbho4QksfWZAbvtEoj5urtRVKDBQB87T1jsC78BiwwYud649gB5VodZawF4RfGZ5MDnXgz"
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
