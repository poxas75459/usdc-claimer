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
    "YQ8a4VYCkfPTDejY6hWtTXPc5qWpuXsu1KLGXiPqUBkeadzVAamwejvVxzGtym9zyfvr9jcd5y8Tu1KKxmKCrnt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x5VCJ31zkxD1gjPjktooDTUtUCrnuZWQ9sgTrLs6c6pFfVy2MMH7BFfRLqVM6uohgjj4DpRpUzrw6N6UhETsE4Z",
  "key1": "46YMFbQyj3vxRoaQwRFSTYMZNaXEgaJ2mDLcKEQK2iTG3hVEr3Sw95PGWMYrMbFAgV8XpdPtVoGyq7xCVdDQVqGA",
  "key2": "4FRXzPfzFXZaoxk6HYj5xCjPWDDbRwouE31ZG836ad5NgJmH1VrB1PysqnpPGKdKizdmyfU1km8XKozEvgR5wnSy",
  "key3": "4w14kr5QGAuG1JdoSUodvtpfARD28oB9c2i3AavnbiKUjVzfgGV9riHhcjqPLWT47ozVabAauwvYcugSd6Dg4AaS",
  "key4": "7izMJho9WL6kXNiT249icr6ydWru5EKir8tcddSkasyUCtoB3yxKqh6GoenQeLAR4YQZ35Fo5hNBwkBJrv6tFhP",
  "key5": "41bxXcn61V8nK9fJSQjn1594FKPrtdNLYXYKSdt9Y68pZoGNhbinceNPQEK4xQBFHA3jznhoC4kekRADCsp481MM",
  "key6": "2WPphX7bJ9eFhTPmUgivfFR7aK14T9PHud1XnrwPQGUd7rq3UQ3ErCPp8aTtTkC86kKvoKunEFkrhMEYv2ckikVQ",
  "key7": "5gBc734pvG9H191wdoq2WH3TcyZSbpHv2XBrymL5ZpgTkUDNzycXjzmdfMJhA4gy15x8HisTdjvou6xgj5bx6GUN",
  "key8": "5RuMFMJYVvmShEsRemz9HqafeCfCSyAVJtWgYwPFAjUwTzexyf2no2onJ9T2WMYMQ8YyFAdfQ4d5W9jnv11QpyBf",
  "key9": "3Fy62LQKGDvqDvgre4ksQxAnnY4AqyyuvFdwyPgwtsTnTCrAq4fhS8wq38o2yzg3q8cBFk3UnL1XLbX8f4wuiER",
  "key10": "5gZo3eC7DJKBR1NZRQAt8gkaTLNxkvarCfzsQPR69CQHJHFcP4aV2xt4Q1UXhmijQHnMmvhThvsDXuskowQ2LUca",
  "key11": "RRr3Ytqhkd3hrAELzHk82rGXraw3UNCRF8tiAbWc3tDzdN7MUjc5vcuaHHDN5z7Y5SZViKaVJkQzPsCZhLqGoPx",
  "key12": "3AHtaypTuNKD6E72ENBDmfhoWJhqxpVzn8PFYBosRho73GbyvpYhHrisyLxC1NBuHpYEiH6Fssw8EycWhCHcSsvR",
  "key13": "4kzTk7JiZrCW4fzHbr4mdyJCGG8pych6SpExv7Zj5xt98FVpAGHg4puVKZQfN7pcMZk7upaW7diSNFWGq4y452Xb",
  "key14": "2tNd9hmwnXDXayhkW5u5scZkUKiVBoyPUVi8Y3tWxp9vYZmGePaH7UgSF6Zat9Tb1RykT7XTkpvcjAYrhyxzMWro",
  "key15": "4ypEqTpwMXxxrMAFua1u5zYHSJu1TGmPt8cZQZZqisVJyJYp7TitRuTS5NhSnmAEGGN1zLJCYfKr2yvb6pLMhr51",
  "key16": "4MPKYLn9GLVbBXET8nPzAgHkYbVbakDHm2vkCqZtG4doEF4mmFr5C9iaZAnfFNCe817KGE5izt9yo2kG6q3VYCAc",
  "key17": "2pswpHJk4QnwVfaBuxoAFdSx3SwBEsrNGCqCFWthN5WfqX7z3Dt5YzLHfM36sj29TfRWiwA9uY6z6Mab2uHjENmh",
  "key18": "L6raXLKUtrbDtHAgJossPwpz5vuCFR1jfEsRF9o6uFseTKW7YXwxQmERcU1sHhmrTk6A7hQvrugs7aB76hYhYoU",
  "key19": "5UUCUrC4FXAhPy1NToLHELubHN288m4zn5qoHZ6cNeBfEKBZc8AfsCndtmGZeQG1RoY8gzyz7bwUs1AAEE6aADER",
  "key20": "2nzA4jfhMe38EkzAncT78EtSRy9tjc1MwSqHLmH2UqnqWWJAyeyGEHrPeaSPjYHvKKC89NWG4DPWTH4xfB3XMLJL",
  "key21": "2NLvh3EJoVnN6MJxmJgjWFea7gqFNzWHXQEjGLrH56sT7VC4k8yjydodABp3zRxLApQfbqgsr4hkCSn24nkkbdfs",
  "key22": "5FMe43oTt1mEBL9TCQVMLqhMp2VMiWxaFboXAy2Ma7XJUjvQVPLZXLeYWdrrBScDjTeRga1jE36oR7utq2LqheCo",
  "key23": "4ZPuTABiWad98nPj3CQFRjMgZqoxBzM8NbVzFEYX992Bx7JxdgNVm3fRtvtzQW39yxnrZW6QiuAUF1q7Xvp2ovUL",
  "key24": "ZMu1DP5RFaEZeThMLLaEy6rfzu72bQK2euxqMfte56ssuPThSRKvnnEhdvrLrPjSVujfa6iinNHytuFWRY7Dehf",
  "key25": "4GqamHffjBo2xYjNqT8c81GfwQReL1G5ybs87iALh9Zs6eCQckY8Kqq1gYUwfkDZUm6BMCjmym4qYEDuHXaX4yuN",
  "key26": "iSAhKHAkXcnqTVevS7FcKEKh5Epv8gS9ddc5ViM4dBgwz1JWcuUQii28qbRiJgU5aHPtiRCQsdUmbw5Sz42XdhC",
  "key27": "3KCZxGLcnDkRsPDTVNCvq42pJqBVe5pM5WuCK42n4Zs3ZXQGaTmhtAP9KtRDbEmMymgpwDqv8MYsjocaXyZxjVh8",
  "key28": "51U3KAaK1eW7fe54UE5Rzg6L8gfgeLZQEVZWnFtTJgD6ZEdx1o46sSRBT7MJL4aS9mpnS7Hripxq74EHT2eCPbDU",
  "key29": "5358UrhfL1E9p4SPcZ3tLtmSAE77w89AdGPfJvgUj4xfgrEoSCiveVih4RoBytLDfPbNjTjH4w9y8AjH9kQqabZS",
  "key30": "4ngbV4DfoKrNAHi6VY968T2xvSSLbNT5t6sULNe3yS2vSCHF6PARa9WeuUT7zjK3Pp7rTfTg1eg7rNjxc7LWzjai",
  "key31": "2qmpX6VpG79m6M2D7Vb38pmUMg6T5yj8aMniNWK8a1bHkFn6xJHzzxi4LaMecBp8zfsD9RKhoG5eivqvasiTjBi4",
  "key32": "5UK33ZvnEjrbVxZiy3VNSATHkg37gK3jhUbZD8fqkQRLgmX3FERFmj4RiZP16CYWXWGmjXh3PBtdoo7uSzkpgeER",
  "key33": "3LmQVocjXsMyJeGCFtXKxYFxyZmJXkUpLK9qBacBEPwn81iHKKLbd5Bw8oBLxCYmQwgRhK22CpBmiQyvTmHNsSHp",
  "key34": "QGFve5jhhwDAcC5minEuYNWeoyL2ymRpLYrPHS3z9bbrqhDMdsUQFW78SeeZSoDkZHaHdniVktY747H1v6F8uxr",
  "key35": "2RecnpYQHJs2cwc1Xrb2mpsBsF5P72TtqKH1ytuaNGdMCiQnbZRbZBsKLhQP4YWtWGQUAhxReDvkTMaNpDbDs3FJ",
  "key36": "3QwDCGoAUDKL1FgUMs7hmU596Fk3B48GxKWBs4kW2Mr7U2Gh5Gp4VvQhQMymXSgiZ7AhTxpAMhnCWAmjZ3eHAwpF",
  "key37": "4bsSNaWz5UAsqPhzFVDNU4CJx5RccMbz8pTi9YyknSkXexJ6VzT9QxPgzo3gzoJ9r4U3L3deQoQJT94fQTRNqVEk",
  "key38": "4neYmni3gzbMADUs6y8yUhBc4FVeBdTfFvaUKKQPwbwkQneVGKyh6H2Y167jPguk1jU2x3iPZmh85j48AVQKtZUU",
  "key39": "KpeLWayvj8RxB6UJEpmvp1XJ1t1rgazsaVWu7cHb7MQzLGrYdQh1dmJThwxuQqF3euvC2E9CBfYb5upmS2xcgAY",
  "key40": "2AUuUpWjK4NEuU954DqGqnZiDeaFyLTnsVZKexm1vVK4sg7A5Dr3c3hvEJMfafgJf9nPADjDYHor4b1a5nzzGjeB",
  "key41": "HvoUddHrCRvxyF7qmEjEybcGFpmwbky87YE9Vw2PycEE5Pp9Uo6Kz1prq9JuY6MUGnUsfjNt56cWiEZURGAFoGo",
  "key42": "46j8U5jtd2TPRe1Q5deic4cTRF5C2LEbzd4yTL97Wbq3kC12cCFSjJCQZmshyvysCKXVzzuyEu1zYCtJ5pjuQMsg",
  "key43": "Y2msxpBSkg5zwgBwPMjbP4Suyqide9FC5M2CV5UR7eisVUirZsjXjhwipAnwVmh5RsxEp7eRxYB2EiipJYMFH8V",
  "key44": "5BwTDyhJfhQvfum3SobwUNoxLs5VepVEGtYGZ5cCFooeKxhgQLB7A5yK9MoNSsQbvnsMsCEpbVBGfaFFuGhEnUFi",
  "key45": "61Qx6P5VFceD3Ng4HMePH7hHzPG7EK9CSbQiVBdUwfz9EqNSZccKE56zYdzpsdtkMGPaGcvYgpF21kuM3pTTLJDp",
  "key46": "M8TRsHV7Nrg6yCGZpdN7dcDmGueY4P7Mfg7dfg5Wy5voNkLupDmQsXY6Zn5gb1Vz3GkHW7nu8iJJG7WFvBBqtEH",
  "key47": "3iXQoCLknuZD22EWiiPKC3SFVcRxVFFRS3gQx9Gy1xANxYn3Zh8hpgxbb7boQ2tcq8yjg3WQ2TFyiS336LtEgK4x",
  "key48": "3yjc7WTbh4pLRg8K5M4fo2FiC6q84fo5rVE49hGFAeifvwbqi144HdbbsG5AoKX3ax1oYNZ9Ny7AYUURhU66rBG4"
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
