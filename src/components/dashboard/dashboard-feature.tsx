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
    "4pEMuFpxUkFwkdcafSuMwyim8cwSLFvWMHkAZLhjagDV5yXN8VVFrFgftXGNokpLyx4WJ5Uujt3o1yxAFXA3TQmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41ZTJ9XciPBJgMAkMd1dCUM7y7L7fuzk3yLSN1QhGhRSUhqwHRqowg5pLxYYAg7bQuS22joaez3bgT7McP8QcxqR",
  "key1": "4dqkY7rwDv4fBEYFUmEnkNGSHUQJ5c8vfUcpzAWrTyhXRpCVwBp6TxykDrpqvDBLW9yV6CRzHKctU6QaNebRTemB",
  "key2": "4tycCS6TEukovmQtww5d813rcppcfWnuLPJYouZr4wYksC2Dn6ruThkkonQHFxyB1gPPAKCY7SFzpqYokvW27vmH",
  "key3": "2SXmv8QuKaHQRD6QEyK4fptL5zjioq3X1KnVpVMmCqDYA1QmPF4nwchze5pSA43ZBWMhnead17RLEM7eGNHhiVKp",
  "key4": "4iioT4FMWfbdVrw7HBJ2xoDoZcFaJr4hFkiiUhBypNnjzPVbTKLDqBnEy9AFyvyNrUVurVZGWkdKbuLdDvK8fDDZ",
  "key5": "L9Aixdi9dDZn6pn88u4oihMWRo5vaWXuT3T29uCiK5DXEWrrbn2jBX9nuDD6w3BYNHmB321YSC3CzWhQZmNmYGY",
  "key6": "5jRgdnnFA86pPWDuHZuL5veBSSL6BCbqmK4KNNR91BhWQaz9H84AQ9dKabenpA2ghC7wX2rYg6XJHKYh1E8Q7Z8R",
  "key7": "4VhnLwXCHWLhAsHjWUUAKXrcSxULy6jMMnenow3KX7teGWme8sAm3XFGwgxU5uS4vLN1vtT26oB6RLjbyT24TuAb",
  "key8": "2ySdhh4R8vTYMezwfL3yAA8dXFPrKCj8uAeqaGr6kEus9SkTeNo2ee1c4wf9qYabYigMwTK1L7XuFKAzckCqcDMX",
  "key9": "zWm2PTuCz7SHg9HxFRQCuBzjsKBpgLJN1aio2oBwPdSfXpBpdfYq5br2gMwAjLJJR9Zhr8fq98NLuqzdZDMgJjW",
  "key10": "5aUFxj6soKKMPw51fpuTw3TAaM1Kike7qn6fnEHKASM5vyRn8HWRGaXHQ8u22C9SNkJN68z23SbWez9rGenmWj1D",
  "key11": "5MSxQW7DsictHGtUCpm1RRX5ZbxXNzSAooBffw7aqb6wQmJcxEkTD6yuLG7ubaXbcCucaYZPqzeWd8hk1xwJaYMj",
  "key12": "4j7xqLcrpKLFUMPvaRpeuSYp3WS2Tqme1sATx3qcQHE2T1A77kU9QAkwBnExQdzJ3ULx1ADCvvEhghZKRycJEBBv",
  "key13": "47eFqb3rfQj4tiNEn3QnU9endeZRi5fiZW3KZvKycNsTmKFD4apngSiDiJQUVFFJKPXux1GyM8Eg3KWnZqtFXX1u",
  "key14": "3X6thAZRtKXjn3XVo3Czd3oWu65maYTdLXEY6UDRMP8S2ovomuSM2uEaiTpTwYPZtJs4bEvKGDbtBuwkcRy4iisv",
  "key15": "5rUjZQj7PKpLneX7cXbCgXSSE4bQGBj7P4Vr4cUAuQXZNLCC8CVH1mL56UpaU15ixza64VmHhjxVaKaxbC1chAJ4",
  "key16": "g9Kj5xbmXHd42KgCn5Q5J9qPV2NqvgJYiyM7cBSLo5JJxxLY6sBFc6zGJyxmubs4QLsgnVvdtLXSaUzGDoL2QuD",
  "key17": "48M7b9boTJNfiWhbnAucqTE7Q6wZzma68dTNQ1miUWynzjZFXVsCpMwKotW5UUg4X1iwmPKYFKC44K7ZnE5Z8L2r",
  "key18": "4NLMzkFqTsj45qbudNycqmZvnxnUbvgXbMymYBVpkxBEjaf9ajaVTRhcnZuMG4daepeam8A3jtsJjj8t4euVfpeX",
  "key19": "4xktpVcheemURRuW8wqz8QfMr4yQCKoDGoSLtBD3S1ACwtn6TTvRtrWN6xNegHMGFAasaqSEVEjKRNzxEVx7tpGz",
  "key20": "2uNaf33cxDQ8Firx8rTxk1vdQ1UNmzFQDsJbPRuTwqwtaDs52Pr22xzXS2DRFx4svDwQqwQkpbkhAV2hLJk31dL2",
  "key21": "3Fnx9M6uo81BjLSCoQty5V49gQnT7WznSZMYZ6CZhbRD4fDCDXdAQeDX5qqUooH1mURNJxrFHiVvSAwvYotZiVNA",
  "key22": "3oecWTFDze8j8iRH2BqrKhEqznQHjF77Ty8NMmJbFCHxowFe27H5bcEYRF3VvXMUNabcqBkayfK6pAhNMA4bXTCE",
  "key23": "4spu4jtEwwc4twNkF78gyLsUfUhqrGDY6yP7U8Zc91rtFrKrgBempmUBZpeEynFVY8sWQ2U4TQegu5MBs234z2v7",
  "key24": "4ALWWY6zDDNJMuRwiQq8nwSWhpBgexq7t2CYgo6LvAsMqyTUXpJueBL8Ma9v256bDUedY7xMdRRNEWW12NcfUiAx",
  "key25": "WDkenEQQD5ajG5UaBKg2BEcG9VMQBhX6Vpq4Fj3Nd6ezX6hs5oRhVGGCP83WVK1Ch6ijaRSxA38qPoM4to7Z4pN",
  "key26": "ZjomNL3faXUUcjbkM7xnFgcB7gdxFBrWDWGbCVACxuGeLumTj7djmHRMZBKYaButw2WRPcjjPkJYpqF9XGLRQ2x",
  "key27": "2dJNAvNVfufNhF7tKTye4KVEDzBMSDVGSNUoMkbaTQMmabC594dpVmUmnohLmEnzyE2vjSsfkDAhjJd5TjJXeEQ1",
  "key28": "5zUBSk5531tPtCgz31iGkeoP8hHJHjfvHR7UiawYuWWMxFsxg9W8VYpCpm4caZ1G4ReJxmki12Y1AVH3pAtgNtZv",
  "key29": "n5f6WFPhy2LeuSAKYbLncsmYue222bK3Zz5byj9GvRthvPnVMo2gqimoGicWWUGhzrugFHk8uokTsL6RGPSLJSc",
  "key30": "jwmQxq3dzcqPyjnEEEXFUATjoJxvJW4R79Sp5sTpjfAQA2QXJa1mBfuoKdN3yYTGw1JPQzk3egakbpmDP75hap9",
  "key31": "36Qe5Q2GJT6iEcG5GMNtL2QxYXUgz9BANMtG1edoZMXc9SKh6nNxAVFveXiPTPCq8EA9c2jerkWeyvMffNvKkR1j",
  "key32": "3DRkpmt2byWViYZzSXuYDLjpJHu5yaSy8teSiNrprnyEie8zdVVSCq2Z9nN3BWdUB1dJ9tB553TkPWQMemTs5N17",
  "key33": "4bM5Uf3gpFUmattbUjQEiZd1iUCq4m1vi3hXqNRig47jJanXK6AqYH68By5rRYs3KhDsQ51zF7Vn4TzuemMfTb2b",
  "key34": "8hecuE1FJyfYUWD3JBC9Yfi2Lkbs49a26AvgmQ4agZgvmM9JCWnX2vAFamtGN4M3Bk6FVd1nn7FFrYKwdHVzzFD",
  "key35": "5uC3iM22c2tNcq8wYHHTGQEUsDHvxM6vC79Wt94EzcmB5vcng6qjrrojTnda17mq3DZskqqaEmGT7HKumJH3atb9",
  "key36": "2A2BgnQAzMFd1geHeT7D32oYkf6bxb2AiWvoeuYPVDBPF58k25ZbCmEDjwRRfBafj12A6KVAZK26MpbhPGx5TFMP",
  "key37": "38XxhwoLNQQaQudtJEWHRTnrkztPGcxEGZ1NZ1ngMd9k6jprGevzWxciUdt1UbT21LnDSRWdjeB1FCiGhtzakkxk",
  "key38": "dWngkVUoKdYEchstDpVYwepoZP8Z7r6oXcWHqsUaxVumGLtetsjeEX2VAnwBfAF7cFAFcGBhc6NAT3JGQFnGT3j",
  "key39": "4bWgYamHjohBFQjSCRcjyLhSr7NqS4rnduHhpq878EEnrMhkQ2aRT9XrsFhvg5tRG5i5si3ZDKMUWHs8U71Hgq6z"
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
