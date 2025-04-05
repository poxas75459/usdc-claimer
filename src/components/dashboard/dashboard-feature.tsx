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
    "4JMZZtLj6TVoUn1Aipkaq7s9FJm3JSDY9tCu9smvNMgK4AdtcLbPJqazVnVBSYg2nqZevWsNf98j5xCKL3Gh6W5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WvQA3t4BczdFLfMUAQV5BSnT7cTZCx9JD8u9UnYQvTcp3cgJUbitr1GWMXKN6cfF2x8oQceN85YmPjSZA7prjS7",
  "key1": "5DRT98iYBbXNMdufm5YgxyPTAHjoh4xADeH8rGwj4kPoiUzLTWfBSPbkH3zsG49XZXUPUPeE6d1T9X7EVKRPJe6y",
  "key2": "59gCpvgoUaWrufsRCmGM3ma7AngPr5Nhc2dEiR35hiyD8JKCBrdaep3cvgCR44PvffTbVVvJtJZfZNtsTTFj3wna",
  "key3": "51nQS5MUCj7jwwPMKc2NRQ9HFVwLm99Gwrv4TMdv9MpaH2SPGpgJJLQgsRAF7oagNZDuKziqhSXo1QFCYPVx9mjD",
  "key4": "mvpyJ3X76QPERfKqjgugJ55eFbzejMRU4dhePojgfLaxjTCAF64BH9cxoqTLMo4fZwexwVup5to7XVGHNHahFuY",
  "key5": "2wsHV1Vi9JDDaPLbkvVFFjPsyXhjMLo9qyryeWcTEjVsnog8rre3MN4apmArrFSUvZxNe3LNc7hW9xFVBqBXdNcN",
  "key6": "2KMLPYCaMWkJrZi27hrqkEU1v4wGXvBjfwXnpazSUyBYh44pXHia184psZfvTdqt2pKW8FuBmqrxRzgyBbvkH4AR",
  "key7": "41NFSgxTTswwZubNPvnbdVGXcw43Pw5NaV6Du4uAkU5XxwvtpNhoHfCEpiyT7NtehvK4NUhTAaxnpembR93H6eTX",
  "key8": "5NTa4DpxfxmUXyBczQomKjKsQC88Yz9RytdQLwHFGiAhc11gEeT8e5suXyZvCU1YR3tiaqY2RGn6B3KLeYibcbyt",
  "key9": "2FKkJ3cbYfURVdS6T2PDbGBqaCDjf4Zig3CMgoJnZc5xhFbGWNh1GccNBSbVksbqF7dcFbKzhZedn8QBhjtGAQ42",
  "key10": "4ZqZgGaHVsMBdegZktrgC43uCagYiL1GU6nCa5gWhZburGKyaRzGcfjW85qGG2Mycz4o1sLC3KGMkTEmD68ep3dS",
  "key11": "5sFmsKsNywWXTMC7ykswcSAU4UjHwT6Pt73jDqJyEjv1y395nwXzwHieo1Z3qaiKfYE2nC49mprheUkXYCTQs3NQ",
  "key12": "336HQnyP5krP4KYf9nNoRL5srA1abonoj3vNh2ZcQi21X5JU7n6U5T1oB79PzRrysZc7LKCFjGnU6g7EKxVwTzCj",
  "key13": "2h5ivoFgFTqED7bV3o2wxW6axj8daazNZJxcZnZtbmFsTsFLZijxqTuWjhoSRr5heFApAMS4U3gLPsuPURmVd8bX",
  "key14": "5jorMSso5eTEFtUaqsY5x6tFYMwrtu3mzqRkCmcnrLZWwHtrFunXpa7dQ32GG1vCdQqQqp2ocviKuRvocvBDGVcr",
  "key15": "oHC9cTsQx8pvpgxDbrzAxxGYht6SoQyMejKeRuMXaGtpAsHR4A7i4xVwSoBtuKFw27pMDzyXqyTj39kyMheFCPQ",
  "key16": "44g2k815q7eKFMNye7BYL7CQmJmWCw4r3hyzDL2AqS6Lp1t45xRv4BsVPdJZhfUsDcwArWVCKYrptmRxuyEcBGEE",
  "key17": "66B3w7pyVS8RpwGpWDiwTgmgQP9bPbNG2zPm8Vb48kBvmEu6z6es2ckERJ3EZbCE7xN6r7DeP1DWCEMsiPfuL5Dr",
  "key18": "4M6RUiQsUf5Li2nehUjqfUnZjeeoCD8hke57znnviph6mWEGU3pGxVcW7jesYprnaSbEeu8yZZhGqSeMCm4NCDvd",
  "key19": "2BbnNfyN1BKXVeCXmYbei3YdzewUKDftNkAYfbdTEvJUcK3VmKGgjUB7J1NaABbjLBRoPe2Ajgf9vDYXYtEwGEKu",
  "key20": "Eoyb5nDeVgFtFhCxnXE9Eu3w5wUS7GNf1hn3PJ1zQ8uU3dAJ5kMyPDczRxR8BApjHsN1ZQtMYdtSVajq243oQ5h",
  "key21": "49HY2zLbX2ohy4jM7i5nWnc3Y3vLMn2HFXguNf982KMgrSpFMrhEwwe4bTvDsdoVtosybz3NkYWPzUsKyG2E9KNW",
  "key22": "3zLgWk8xYXagacPnSmXSYpjTRUFqLk49An1LThteezreKxgcLkEjnwnQuvKJgZB44QPwzR7kGBpAtanmZrhW35gL",
  "key23": "3SpJzJzFqVUdHppZDyUpDDLvQe2jbiLz9tnaJ81Tc7CLM1KgYPXwzQsE1Cra8PxRWAKtGNy7UGbpNNYyHDQe6mj4",
  "key24": "4L2ChtkYS73GgMwBWegNBHkYKrQSY2XvCQGNceQUGVGV5K5rD26H9dcp1J427LhTF9MTZJBpqwrB3CNJVv69Lku3",
  "key25": "24JbneAcy9KHHNVguLMRb56tWx7qzej9zgWGKaC6ZJVpRUs7dP2SvHP3i4R8gXB3SRuqmH6GaGQF4rM7a78C2zkL",
  "key26": "cBPiKvCD6vSqBuJQHRcknTftuJW7aR3uNh35gwMAvNbKCDFaRtZKu5bF3Zb6pq87VnDUSFJC1saW8qjkihpffeH",
  "key27": "3YAXARNRMKL1yTsTuNYNmj4aEMWq9K2E46qKrd2pRRM6oHospJLcP1bS3R9KD73ZVDQo2mTT9mmV7SpZfGwH7gdJ",
  "key28": "4xZZeja4SnTaNVZvEx6TMdia2iYSmKozYjEEo3kzRjzBhagiy2hskstHZgAk5mRKWuHzozcKeieLbywSG4c2eKAq",
  "key29": "3o2WYeM6FAywchVx4ZSWGS9Jrt7o5SB6f1kiRoCYtLq6eN2Z7cTDFDGVfuJtyZWNcWqSVScdi4tKQAJsrU9giHcQ",
  "key30": "3FY65hpYb84Pk8TcpCr6AB7mARW252u8jooK69gguE5xFiKNskfmazCoBmFYdhZLjTCcg9yMvUFb2GkwhiK3bA4j",
  "key31": "aJivPg9TjXymbkupVzAUij2n8LjEhYyCz3p9b44zbrNxgS7RQCdZPMg34oYaYbdqrYPWgvksXdNN79EpJrcSDzF",
  "key32": "3f2drviySwdsgeF5UjDf5ssppf7pKhUpL7cuiPi33Ck2TypC8Su82MBPUFKWstcLA537FnBSSJXy28Q9XNU1bBBd",
  "key33": "418LssifbgzA9kboPSAzsjuunXus8zJi2aCsxYvyicUHsBDtDQHzjXeuMadPAmAG4Zjz52CVUgZCSAzvDsMzScTk",
  "key34": "27o11K66MLFxnguvfFs2ugpfY75nADfC4kGbziSyDZSgL57fxULy2TBe7EZJCfwCUBVNPvQy4ecxFFMWrq3pEuv6",
  "key35": "R4J8dCEbsc7Fb1ZLEqtu4t1GT29ZgW867tr1okFtT6Ac6mMBfurVszhM8cebaHAoxCpwvWwTF6Rie1BnA1yviEc",
  "key36": "3JB9FkcWJRoLSuhhyvu44CFKoZdGGdEaRxfNroGgknViQkvL1XzzCgJG3UED6LhPSeSaR1ZaFgEKw6yCyKQxnovN",
  "key37": "5HBMyddBn5o7xDzvjxFyyAL3gNAnN7urKSufzEdfaYb6D1WzgaBzek7dpJUNz14KJgbH98wC1bQoCUsCQPbyj8GT",
  "key38": "5ZtD2BSD73T5XBTK6DzY2imFcUU15r3RtnWprER2o1MeaV5XRjWGRWBifqjCL4ptsyumNXtHqCAPusWDXWNYf89z",
  "key39": "5kfKUgHrKW2eThM96K5oen2n1Ajv4NCJF5cvBvvXfrEqvYdWCWDu11MBNLXMrKVrmMnwkWVeF4vAsMK6MXsqhLnx",
  "key40": "5QEXaeWRbXbpQ6y9w8Z4jevUxTDAb22w5AemJuLSJhNJ84dmKctWh9dQMyVjEoKSUoR4VCrgFtgu1v2qfcsYQwoi",
  "key41": "5qc4vLhVpFG5kW6tmTitezk87X9ksGkUNxLBKxLn83HifwoBUP7NVrEX4t9ihLjRcRr3dAebbKt7c3Y3VZuqS7v7",
  "key42": "2wpTfoDoQj2QMQNntMAD2iCA46HdRhR2TLfTVuyXG5JTM1H1jogGxxXD2VEsdL1iyZTSt3L7xxx54sMZ2bvrk3ak",
  "key43": "2z7h72XdM8Mk78Ht1vpFvYPHd9APaKXPiTmfsJq9JjVATzswGejifi5fDTrjoPZRxtMLd3oUL6LEeeBHzvNJ9WpG",
  "key44": "3hJeenPVLMvFjr3hQZrWm1AcUZkCSpDR6Y57BmwL8eSpWSgWPCZ7fXMTRbFzrv9nkhzqUdxQTtboX8WhAThfzEZU",
  "key45": "3DfCV44Z11fBbCYf9DEvefrgMdZaNyyNZddQsfoNGkYMrgCuPn9EG97ixh4zJkt2TzxC5m8vwGFfTx3jQDvFZiTw",
  "key46": "5xtvZYeWQuYWPpDHcKHe4x3wyco2nzrNtmnpu2by69oY9jzWUnV16MzUjdAKBb2RoVmtTHcL4va6z31DbcZKDn2",
  "key47": "3m93Yq1StHyqPu7WGQbV2w91CqfUcmRSxbzZDgtzjeG1jYGLx1MWWpo4DbsbDQLPP3vWmQRmhAKs2tvkoBRCBgkj",
  "key48": "4ti4v2P1nWZ3NyFUq7H9skA5nZzGSeVu5Vec3ncSnkynpsfQiknR3ZCxV2nudEYyKzpoKg2mBZE3442EewepESPE",
  "key49": "4MZjJGdxxKzC2a8F3ERntgWjgrsoMzxrW94WhyiBcBBpYJVsW7J1hfAjJH9rrUHfib5BRQH9HF2iLxU4G2nbbwPL"
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
