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
    "5x1nxGDysajohc7j8KPtGuLjG6A7KsfZWuFjqgAM49PS6mrsY8msLEALjsFmoYnR8qhy6z4tTt1Fgq7er31W9eNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HRU4Lv138Q8886nG29BMWGeBP7AyGXpGXPVgdLeWwp1BRM8aGLB2QjkAnzeePxRQmNw7ebNQQ26Ak4mC6q1VouP",
  "key1": "5uR6iLguhDcTnEfni6ieTbztTr5xePiAfVv3ngmnf1pkhAsTdknDpAtXtBMRpeoiJrHF7tjVNdKUXRpDhb3yaFtn",
  "key2": "5RYvsSjxfvGA3T2xrgvvZ1b4r8Kuujt32a6D4Xf7tJxxi5GJ8bEeU3HYckNhxJBgS6rycDbCiwoef3M5gvJVbw7A",
  "key3": "f2kvzxFmpsdM72Q6oEiZcAyPsCMxje5L7n6WDtxWGrAXnFjHyiwD6oaT29PYiGoTNcrx5AE9nvoQ5SS2QeYaYka",
  "key4": "5tMtgvJPQSmZNyFxWgPtA92AaDXftkPFgStsWs3GyryySt6jHWARrJmJdp2tuyvyFmgrM7n1gzYSpS2hXdZB3QpR",
  "key5": "2xGrKVzUE8mHL9g5sjc2eJQFJduL9GGoNVQQmjH4Y3aP2DMN5aCtTzqA7JFiqNkf8fncM7G1R8itnG4WKnHmmgfb",
  "key6": "5U37Ei4RN2kXojp5VStxKU1C66wknJHtfPvvn37GNVX8YXjEEat27DJj1JHv3ikw9zsR9a8wwpM1y9C9SnLCUZgv",
  "key7": "pEpisyi3XZyFQ1Nzd9LH7gvzv2QckatUCbVZp9Z5yJ7cTTkrcZKpz1ocunMWeLCKEfYnSntz8JYCM4F2tap4zc1",
  "key8": "3NZDZnHcda4DCtjfRrRsdPmBWUAiRVUdYdSgWb2VPe563irLzFfVhBSSvpTad1tX7AAtbTdBpNqQSCBLsG5WZPVg",
  "key9": "5CgUc6vkdb2WCcXEo1SMuqbeAAnnHEGp6Pn28ReqBvZUecofneMP9nUojwXJZYmYoY5P6r7dYbKDZN8kuf2xaznW",
  "key10": "3A61uxS8FVBXpH7xrsKzJNadBraX3vd6Jbf7RDFLGe74SYRMPpwv93RJZ4vNWRQKosDuXRBLZfzwFiWvuvQdg8CH",
  "key11": "3ed65vQiNzG3eD4prykv98YMYnx83v91zAhoK7zsxudmYfvhBbsepKDEf569hjC9eBCo7Do7tGcmexfR4neTPtZD",
  "key12": "5BdhdrUNiKqnm5RS9hZiLjg42iUKSzE8wimSXxyhYTXBfZw8ydXdVQakaCp32LsTyt6ACgVtJzoJ3K85U9fC3ae2",
  "key13": "5ve9e8kNDXdiXdB4R2ZnAEidxirPuvtSqkAsBucKZAJz1sEy5S1erMD4qMspnSXCiytRHfEBSPQsPsUmKDWJRywv",
  "key14": "3UvhKqP2eXnPwguHUTFsxxghucUUMVdnuVvfn569WpPzeaCHbUUtEnn9bPjbRL2qT23TYnKccNVNTTDzTSqhtywK",
  "key15": "mKPU67oHKGgBDK1V46Q5sVQZihtGBFpdERcgZfzdWvgPe2E2PgRe6SywAaVFq6mEba5oGjWFpdQfmGVLydwuCGJ",
  "key16": "4DutXhvLmVDYatpEr81s8YzLHTJETr9xF2Z3syarFmHd2ntbTE7bzUZXNF5RREPvzdoHZKEVZijK3jKe5CGNiveQ",
  "key17": "2CeNUuLiZhQbTwdn4d9FEHepuJYDDjPs832zG9MNnTVXbKGAkXeLq7aCDk452y79Byf7bUaBzjANL3MQQKi3tScf",
  "key18": "2dDLLiFHE6U1QQ5xLi6MiraZgUx9cBFCyACJW7fYci333N4KJCEDv8fTrbWUfcgYWGhfJuWq3gnf3WgZ6JhBAKpT",
  "key19": "3wTsc72AZc8jWN4SLWWhBacJCQjswgC4X4VNuheHvp3rrcFAEHWSrLyxMqkTWZVLqAYx5H62eWSdKpCUEWeHj1D2",
  "key20": "3JgvSYPkD5xhPxeEqQQrxdJ2r43VTi2fKmosXWnGte5AudeYgDdVr8zicseqWTuGUMpU2YAGfxgXRNfVNrjhmPxT",
  "key21": "3Z3CpwmTLzuThaiAJmV8xGDGJd1pwertA72SgNmQBSPy18kPjr7Vx1xci8sThGQhTizrJtuxoYQbyL1Qo8eZfA8i",
  "key22": "4Cb8BY85B798LrvkdA3sBne5HZG7R42Eja47hA3fqQKSyqrr9i16rQxt6MiiFFNPvifo4uKSyhRvKrizUvkvahCi",
  "key23": "4SHYWwp71xFNLoSfUmFQZUzXamfNB5rs1Vg2Cg1HD19jiP9haRu53YCfpCAPeYEwHMhHZF1XMExVST46cXE2pqqN",
  "key24": "GTXs4HRUCKrz91fzSJmVSjxTA5WRbtRsxw6DdTBtaoPGWFxAae2Rb1V3KDUm8eUFmMxmqcceyFtVw4V4zBsR1yU",
  "key25": "xdNTWa45F4mEWv79P21KVAnkP3nievkaqMn37b1xcgbufjqMqr373Et33zt3xDDBJv5C5GMxmr1QuqX9fi7sMEY",
  "key26": "2Ag4x1M9MPrm2eo2X7jUKtQ8Rip233ksSToXab31XHnrBhfQE39PiRCkNjyaiGUzUtuNivbc8MKhTTvUmtpTwHNK",
  "key27": "3yZHV13PUzF7jHxGqjFJ33dH1t8eC31s45T3kQB8xLJsx19srmn7EH2Hi13ApqDxDjMi5EjqKt8Rz2QMBe1LgWiz",
  "key28": "4RWZE3Gc4pcWoBT9ZrorzM1b5nE4vEsmVzVqSg6BFmUoMLoMtoFM7BWEryZ43q2K88RdM1DM4HthsGvqB5MCh6LB",
  "key29": "4MbDfyUEUtA2notFpuQ93oSMCW24Z2PgBRXVfUYQm7V99TWDchSGkkZkTovaGj2UXMYnSNFcb8d4agxKQCnpwbAb",
  "key30": "3vrttL3k9SiDgUbsDWsrxdfSrW5Dbkr15ecM2cYytaAkpJLiYgLG9kmGD2ibU6TFDQ61Gj9SR1EcYusjET3GG2Vs",
  "key31": "5sceuDPt3z5GRdgYKnkZocFja79aCABVqaJCNnkttTLbmm16isxSp8nYz5gX3pCD3EmV25iFL5sCH8ftwexrbQAb",
  "key32": "5bSshnreK6HwMyV9Q1iQzXnFkzxHtSk1Jx44MHuGMn6GmWdFQbuHUP8kbEBEHFvRDAPJ6bUDaCvDWks3TUtowzru",
  "key33": "3X59KCmUajYx7XmRKLLFkYrQYwg1jnkNf4CeAZneuKU1ckEnqY5drHP2wKhFGUZ5uPWLrtYQJmvwbsNhtkwm2GDU",
  "key34": "4my5B3idPstBzFT6GucZVKPCfktKMRg3PTceXx9PdDKA6MSUXkhJyXV3XSPPnnDY2TQfEoKk2KwS27UzNkH2ZiUj",
  "key35": "45Wd82igVGLauPDQWHHEggvzt62mj88MwQjLVsuifRm9RTQ5eWj2v6SXa5i25EfNtjnTXVcx4EHTwFcyYAbtT6fF",
  "key36": "5MjxdWZrTYUFSNaYxc6ABULZqooXCNBg7fa4E2meypnJQ87SnSD39JjfnWemnE25orFmSVd7w7BCquoy86rUFVfY"
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
