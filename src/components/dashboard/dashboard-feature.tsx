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
    "3Pha7St3mgo9rCo8AEdo1H3uQxJ3aCrynVbgXXgGeuFuPH6VW3kJYYtdSUGwk4ywXVud8LoSHSRBJx8625w9pNYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AX8tJ96mAZu63CofBTh1AgUq5j8saf9c3S3XTypuHsuRdNuj765nxXrw7WHapjgdPr8YXv9U6aR2CEDCnQ6W1jB",
  "key1": "4ssQhsaEDdv7ehuVBaozjHf5vS6Mifw2CuuYE96NhPZ94a8m954UGYrkxSBruSyo3dYeCHd5VNMpNTuk62qSQH7q",
  "key2": "2rYHF7enwUJDs1Uuf8ae4siHf7xDbExMdrXNEYErAjXvFH62GnRzN2YLFvfbnJXWLxpa6WRSQr3SdVosySqYJ5CG",
  "key3": "31ofUGqRFiFW911VhnSVvLanU56d9tBXVLkeKbMp8Lhcion3nAG4fw2AyNT989zhccipUXCWk2TBCjQFvmU8CykT",
  "key4": "2a47uvwqNU5MUUyBB3rh6ahxxpDxs4uYLtjm4xCQ7SSeYzhCbMMLjoLtnrnn6qTzry3iVaJKCWQRujXRynoXAqeG",
  "key5": "2JWw1vmqb6Bf89GUCGwmev8AhbhWHnu4sxPuLdVCF4z9mVCEJNFietwSMAj6NNWy2seb5P3QpUSG4pwje2suGZYP",
  "key6": "n3tjX1BdhwJtjoZ46GN2SpBnf6mMGo7JqoSjrHbK5mA7LPSGvdjRTGfPVcQ1mFSUdRYgNpQVccqSdPzURKKWpwx",
  "key7": "4EKXizQcdQgmVjQgeoKn8xM561MacDFdZWKHJnUTYH3y7FTL9AoDEjMyH1dkwKwM13WUY868GZ7iQkXbYgECxKS5",
  "key8": "2vhnkDoUsDDX9YcmV8LN7wFw82MbzHu7dMXuHQHMCwWUAYs5aAXgsvu7kyBMnTngoekyEbuiXeoCjw7AJC5cLXpa",
  "key9": "BAkk6tq8dtFDD7wF628bkeQiowgSDUedHNNLf2Ev1QZ3PvSHDgiY5kh1ardgMCMgxqbZzDoiVNyb6UbjGRrdmQU",
  "key10": "4VZKrp5M5j2cv9xryENNbGQb1f9F4LVZx8CBSpMbvCMMS9kjXpdjGxzSAE5YyxcceGsC9VW4BCoQavJhBG1dgvMe",
  "key11": "5HpxBgbJXL3sMKSdC3XWbrA2DGZ6uFjrWCPQN3d9owSn3DmEzDyfx5hH4AmWAhHBvBKTZ19SXCyu2jNYb8xVyuFb",
  "key12": "2BBXuG2cdhPqzTTyx4NMrx6GNChPkoU23HyyCKrCSF2cad8Y6Xg1WKi8tHgaKdM1v15JBZDW2W2F8j7nuXbMku1D",
  "key13": "tmifQkuKa1GzhHHVckNpWHdcVTzCLF6NTXP6m835uHfizE1reM7vvkh3yfZ5pFvkatw2vkKhroXPZi4jzFyLY3N",
  "key14": "4YqwiR4RuByY1tx4q4i4UYh9T2ZXJPPQDwUBGPUUH7EewYNFNaPM7dtT5Yf3sM67jPVzRm249r9P5o4u2peys4vC",
  "key15": "5p4Ph7ULzKbDPowpE5gRmkhbEu48ZZjpmh9kgwumY8qW9heZpVTh7HcbBUSjoGNZsWicquLJPqBM9kKrMUSANCMz",
  "key16": "3hF1g6q3Gq5zwjfrVWRQXKgp9pSByKvQJAtMTP1LK7MM65L1Gprt4B2HKHaaGA3TSCoPkJyF7T4Mq8Ec8NhKDVV8",
  "key17": "qFvsGiRVW7vYpTxWZDEzdRYREY69nCLZg6AqVu4oLKVfKiWgT36MPVsMZGVQEB31FSLRYS85qK8AWfcp4TQgtj7",
  "key18": "52kDc62wouF1AfpRcMgaMzbCxyQLe5YJgQr3yjdSaiYRdimPNmPGyERBRFRL7BppzLWSzMXN5FVdTnB8UrjLtrQL",
  "key19": "5tho32UUV7xS58iHoWNDdbXEE2y3wU2we3JFsCXbGkRBDH3ZMX8EhsW5vWd2dG11fXV1ZFUUUAWQpyMkavS3anpr",
  "key20": "2gVdyAkiToUxjQzex13TJNma1VzdCVvrzCKunCh7xvzVoa2BZrhbbg7xvVNKxWKKDbXjJRpCsXBNs7t3ztmKWQkB",
  "key21": "2xYJoY7PDPxA7HJmBu4yHPS8gTd8wvh7uKAaJXBP3uyMp3mvs9uAjUa3sto1efDAb4EZS2rH6RRkfMeHxpJLHUFm",
  "key22": "2a79YsMDJxgtbjVrcHwjWEXhNQFkaEyDhYgaPWS6F2g8cwBx5Y5oeWrMFHCMi8EK78Qzwa3XGcmKHwuJMoqCYwAa",
  "key23": "5Kbs7tQAqzQ5qj7H6N3kpAyoxd1sjAfufUo16cLNknrWditghVjnraYK7gGfE7kxH4AXVwdx3G9LcyN3xtmvWr5j",
  "key24": "5pi91KuZtum6kwHxRDgYkkmdS43VRE2b1SMZAwmxkscCW5bnmU6VFXnWHPKoRmq3S1c3TDg8f72xG6vfeaQfDog7",
  "key25": "2BfAgv4FpUq4tXiuDgTQq81uhAc3aFuvVg2pcinwvNsRnseY9XVXLpEmwXrrTSa1U5yTVZ6vqRsGuetH7sJ8t9Us",
  "key26": "5ULfdDUvo7bS9PUv3fWSvymyz7xout6sur7EMQMK1a7uefc6dx7fkiY97rGJjDY1oMptY2yojbQeYQaEjrPeS32F",
  "key27": "inqbkZvMyaR3pEfTR4qQMqoG81iE5y9D4dUomXVMRPErYMzQVCoDkMCmXkwR8qEznqw7NrhTPkHrrxJspiHDK8u",
  "key28": "3cMbeMK8HGuzGnuQhrGXm2wm7TCQcgKPGRzb3anD22rGURpX8i4M18uGfutGmJERdBvtiyeq1WVZXWK4MsUmxHgN",
  "key29": "3rxwnTN6jL87hzGFTWbbjyit5W5gTuYSS6kcU58JtKjjETFUXm6GedyCmUaMpXK6oJXRS8AhfMVw6ekkGoe63KHn",
  "key30": "3QyPho7bkQdqAcQrceyH4JHA2KafVU8cHfKjNuDWeoGa4ywCQZV2HgDxbrZCwzW2sds1rirmfiSTzG8X26rsivEK",
  "key31": "wkaUpQC9U8gLhpHYqfe2nn4hBxm2mfT39BtN575SNSHuTVFUaXJob1WEqvAvny1WCwWsMqGMc7MawW8B6gCxCHM",
  "key32": "3unp59ZqHtaPNRXgWDzU9aijaczPmVuVKsKDXqGqDf5xEdU5SvzYwR4vYYykC5uDm5Nrnv3gxf5LYGj7VQ4S7Zy7",
  "key33": "e3iZbMHSMZUJW5SQPUUERDENsTdkkLbYs3VCSFuve4QJrT9CJbV6FPNAvg1XBAnXyYq299mau8EJrYCT9QV6Upw",
  "key34": "2jRt1uASShYBpoRBweqWWiJEUtTG3WpPaNLVtcRzZvmbN5rkEfugwcHn1myhfncDyBHU9VTzj7UXZYZEJiDcqe8x"
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
