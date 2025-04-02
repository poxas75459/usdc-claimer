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
    "4mwXPACzLRun8JMRLNgEAcPW8ACb4fmTy4v62GmUiVnQfh1LFXdghK7wza363E3RpwkETvYAYgCdHAEVF6b3A1DT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iquVnCiSzvgaRh9FQ3sd6abLMgfTe3dt8wAsh3rNodJ2BFHaNMTgFcRCqXyYUX6f6bzVr9FPx4m4P8g3RUVf3NX",
  "key1": "2hbazmkm5gvwabKwrZMKZ4LNEKhcLor4yYXSp2b2iCX2nmSHoNzMhqt365eduCf27wryTGUxXjaTfRqCG2rAEeWi",
  "key2": "QdkzhHqEgYM77fqhpecybofVVsRPMcVjbJEVtQXe22jCdWPyTvFKboZQYGSgYGiP5zmoA9Y4fjMJ8pJYHG1huEn",
  "key3": "4nP36JRoJQYTynWGUCGSjFpv58UW6wDakV34DBumRj6j1VRoXfaUWK4QJp6V1wNzZU9gbH6Ff7zniZGfzjQ88po",
  "key4": "4LDuvS4TQVRx4VyFmAkMitvqPMUTNKKh4zDjstAqHHqJEzxZoS5GSUw5F1Lz25jrswGvWzx8dpMFJ66dxQzSvZBo",
  "key5": "pE7qQYqrwovzqrhM8qZWeBXFekLMGeSTfjNngpwai7agPnsz2p6uh2jAqLu1zu7fuq4RyNPVqeBGrcKkt4hJ7FY",
  "key6": "q7CpnFbz5VwFjMe1RZHy6HSGUEUfa6gBUbQfnW89j22G8cpp5b6LdNkumqEYMeZcSJ1JzswuoVf4xmsWdFKScC2",
  "key7": "3HJJFH8yV5TchANJVKevVqEaLsi7opTNZ6ufUjaRkkQYo49UyezcFri5B4RivbAoStEY1dDFu8PvRBWqYAnWLd7K",
  "key8": "3SufCbD9X1vR6fEFZco41SQj21jkvMQ6uDiDedjzTp4g8ESbvQg2So1GqVEWEK61gXexF3e1b531hQZ4qucwpPNa",
  "key9": "4BBgLTbuDokZrPnJjwQo5zNmwwT9b62c1LwNFQGgumUaFeuKyVDv9U723356semubKMuE3Bo1kDFVvdbxhpmNJhd",
  "key10": "4MPyx2V2ZPyeJdGBSgw4jPgVobN1TbsDaowZxdUu2zct74jtCRx43uL27wyjSocWQikXGMoFpGREENuuWA99bxub",
  "key11": "5kXESZC2GRbdJWuB67NWY6GxCQQxXJFXozPKRHA5cwZVq2tdw4fTxXpJNrBBGAMzaTKcpeLwoMcecafiR5wfw7G8",
  "key12": "4vDYB5wFEgimskTyPBPAV5b38G1HXJXV2PqapRXnRMizNbLfsrPTxnLsQAQeJSR9jgRnJ3gUnCPqy1BF754HNXz7",
  "key13": "2qhLyYcVyS48hHeZLJsaR9iuxUCEPFDWsyUjibiVm3vaeDE6V28PeddGbRHztEnZGzpcp6uFEP2vLCNt9tuPGUbz",
  "key14": "3DUyFKEN7hv2UHY67nEJocHybNpAZgrhPUeq4k87kVvQ9rmA1Js3XPsBjnEL7KukCyRG5fhvYn31KP7rtTq7G7HU",
  "key15": "38n41cVhSd7b1TjvvQ5uWqE6Q6eLqSiERZsMXiDyHNYCKgXPsTQSHRdo6C3XkaXEgmnrjkJ8JdXcFjraZirsTcGJ",
  "key16": "oUExydmDaFY2aixi5mFsvTPTbcjTnG7YwxdiakiCwyTuuEqLtZmeYJaGroXCoULz4QczssWyqKjhTvW9zxbsNLE",
  "key17": "61QM5WGVdCb88YN4A5mwbMJmC7AgpvuRyYepH5SKCn4rPZK7GUVjw7s8zCWHcsg9YXXPpqDJY35ZcQMZxREY2iX3",
  "key18": "5Fh1FA9NoDScJdRCmvEsi2sa2R5tGMWDrnCuNJRZyUaRFHCZnzgmkAZJjQ65UE22gqmEVAFkUMoVVqj2wkSadSj2",
  "key19": "5vXhGuPEQDyg94M7zuwN9XBUN7MjgEKCEKiSyAq5YvHyPirZn9BtgSLuojVm7ftpTRDpZvu3CA4ajUU7iHuVMjBU",
  "key20": "GUbUq6BwCgZPw2Bj7w3QUVnyhNcQymQrZyvapyh6gMUZgDNPCFed3dZsLLfhimb3cxfSGjnzgRxGJsiKPmbjYNK",
  "key21": "4EpUucUSYdcrhHTW8LR5tzkmnxNyk9rEgUVxBUi1yGTw2P7B9vbrE8c1xVkFspgcCus9svBK3NYy6WT1Lp7dg6hS",
  "key22": "5P69TGCCW4WbHSv5j6Jo42SBWJmaY73jcFp1Qz4m58ePQT7qyhrEbLhcpC6n6Vc8RgQmHTuBdgooGX9NrFvfFkrj",
  "key23": "5ei3QRMPtFhzKafAyBiyVW7PRtjW1rfc6Jv51mAWJg6AAB5DoCFqAFUb8NdChPwm698yUFKn8KCYypbejnvLcnhT",
  "key24": "641piAxtzTQ4xS7ttDW4sQzpYkGRHnrNe8drWNaAzh1VAosmkmkwfcBCSDwyL335BNE5YgX8o8R6gwYiButAT6WF",
  "key25": "5hXsXGkGGGnm97bQVQy96HdbfTRCDZLqXbHWSehe8ee2mnguvRBbygkwhrkW4XxAJgixd7DoHafjCHrt8VzWCVso",
  "key26": "786coJfRxz7BhCAyUmLeHtDtbDJCcHP9uU4JyCiw4B99gSC12B7KcoscqxH5ojt1wSKHKowpyioNKg5LiXs41UF",
  "key27": "27btPAxaJTYMBxAoax6FqCDQPxjuQgQsBZSP3wQ7eP1NEJUttcAJB1YRG32mQUa7SiiPqgzpjM1tJ5gY2WTCfK8A",
  "key28": "55bByNJ2v2tbxJ65bCEeWmtPqAeYc4dAeP1yMcid1hVYknqVPLmMqgDUb2d7waeBY2TYCtqNm4F62kQ9SfWyzRrB",
  "key29": "4a4eZ2qZFWmYxZrBwtKwJBpbCom8gqgnSZYHtzrJSAutwi5n55keNoJhKTzdKD7Mp469DhUUc98bSTB7PQ6NejV",
  "key30": "i7WDNUQj5TN6hFsN86ky1885SXd6J4ZGzk52PrQs7LbbdXmMAuSCewz34cASCpDJLQ4QETGhLjA5UVGYdaqrrGQ",
  "key31": "sDrSsG2WZs4YMkkjygjA5eDryPivCx9R6kse9y4omcsFPpt9oWzGXRPEB5wkQqeKKCdG2sp1BXHYfNQGgqD9qvQ",
  "key32": "5n6D2mihQGjv8G2hqiZa1ZtzHbS5fkrFkxSEgzc3zWSMYjJ31D4U3GJK9oDXofn7Ge3YiocagrRjnnpVzBSJmMFU",
  "key33": "4FEjvcP1ZSDSiErVDVRat69QmuSKWrJhmd8M1Pm8bh3C6jVGFULZRJRYoqvkXvYSA9jQBwjDc2wGrNvQ9jPvEa4U",
  "key34": "4X8b1LvMArfFQrT7BMFEth329MqdErvyCsv1JvoEb6pLMtxqZaWdmhbvYVc8D4YEQxixVcoNopJHuE3bCBCUKYdf",
  "key35": "LADchrE6TQdo7PrBcpMNSKKe2znB1nPEJA1ELf49NrsV9kotdgEH2vBRGivJtVcmVaUREBraQk5bimPpuA9xEF1",
  "key36": "4MYxEtZYtZ15X9j3XxrFCeJtkGu9c6XiUVJZ7Lbvj2ENpLUJjhszwvqvnxjc17xRSaLD4CFAyxAXiKeib5QZsqKG",
  "key37": "4FfPT1eBR16k9hB96ErSJwLwHuEmPtYctv71TGn7PSW8R7hH8gMDYbRgTkcBQquToXEDvezdaGapwVqUd5B26bCY",
  "key38": "2XP8DhMS3TemXrpG2mHnikT2e12Ep5hXC3NpuVGG1HFGpfceuWEhukjU869QY98KWxVEY5GKZWckeNjr2SadabTi",
  "key39": "4QdnTEWqo4VCaH5aUCfMEUqWDdFA6HPGfg3BqXrs4MXpaptexv2QH4Tt1JYb82UEnbdCr9ymLBWuRQ2zZceBnuVb",
  "key40": "5AKZGqmAX4X3vVPrCvnH6UprdSaCajCfhd29az65QoW915bQKVjM6nKKMfaPuSuk3Ai7KtznG7MicVj2rjRPZAZi",
  "key41": "5ihYWv6HQzS7PFVn2jQFjCuQ1jLW8yxrFE5botLFDtVgKupasgQ41wtwyRXkzCtGB4y8PiMtH6euhgAGGTHQifXf",
  "key42": "DmcyVvDs9XgHsyGex3x93qoA2qKp8DPpZwVWcjxcA4vtyNtoBEDX6NF9cVg5UuSeusx4skCKtig4M2MHB8eEa54",
  "key43": "1Jf2gw9ZaZQqPRYRSRTaeHzmHz8wP81q9HLsPnNjjgsrN9Cf8QBgkxu438g3APYXnGv2EMCtA7qU7K8srn1zTdm",
  "key44": "37fgHboe5Jtk7zKSSEBV21XqSiQKEHdYt6Wdie6PPb95iwegh9RjA2Nnc3VUuT1y1bAQHFA1y34BYEW5CcuJQTNU",
  "key45": "4mYPecPWMmCu2KuRfgsPcjKQzmiDSXJEZh2Xqu52mGt9nUhA4VqDYpJYvKHsDhbDt2YZ7EKdrruWR1fzWuX8vdi3",
  "key46": "3iX1tvYPHtuNkDLyKTFMY5AXkSjksHLyba2HXGCsVwXbfJ8prxz3RPRmchXeMeJzq22NeGMFqitn5Wq1XFrD46hZ",
  "key47": "3HyVeJkASqNicYFQ5Eoa3RWMCGqQMrJK2Z9djzhEBybpp8A2enEwJLXitsXverdLUuQkQLZPnaty2nffDList79U",
  "key48": "3qHWrhzWkaNWAeTvYNpeL3gfnVLK3VpKbSmHUkZJWHjNqmTKJNjF7rzwiQsjnVjmqQnfwd93syhFiBian1LHPaAo",
  "key49": "5fejzdGdhC35reA26w4PuaJDkhCHsVisM4VfBNxGXDwkfcR2iurm42fDJeVj4vB4kr416o1QecEmqMz4JFm34xea"
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
