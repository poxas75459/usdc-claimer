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
    "2WbUHRmkywMPP3RAUat88kBMR1ZzpCNRRYhSSiV69BMoiiombegBCX5v8NJSWCQzwfvqW7d77QJj6ub5mCJjzats"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jFmtYLs59KYGwB3a8JMTNARZUMaJQRicv4QvCUfMigzf2pQ9RvRaA1s8uJZ8dwHErtzHCn796CKL3vEc9WfJqL9",
  "key1": "4HwrNbbxpwC8R9SxBypHqRjJGcX8zYnptDcoEve4FejS483jXDPyABY8cyXdvqZ8fKvYGHZcgjgHrX3dtK1Y3ytc",
  "key2": "3wivfN1Btg6etke8hfdqJFEjbsLcLHHURuYfrZfA68SXtQsQ7y8sakfd75yLmVSQybzJmhMwh68zcF8pq24DGTJt",
  "key3": "6bvbbFZxN6P22RFnrLQLfw39b8fFuEZLekc1fw28zwABmjBfdC7F2WBZ9HCcvBgXxkqzPy4niQtZNCsTt3JA8p5",
  "key4": "4emv7XexxuGWpgTUrWQTz4arn6k9HUov4QMptrMdmxUvS6pL3wAJr7dWtoh16g69Fhkk2zcSHAGUaCE7SqqSraqS",
  "key5": "235MSi4M59upMqjsRKL3SHV43hSQsazcaiRe4JoywncbDhBFnWhYycop1TVuxvojVurrxwnRCCHv92g8rNccrheZ",
  "key6": "5mDJwCrKigqD6hTRXjYBo3MsUmCqSkbaUyJpYCLryh98pso8Pxt5pBVHNN8uPudoJmeYoS3JWeCcvmmhA9Fmgn4w",
  "key7": "3aStUwEzbYsUJawuBbd4n1yj3MjuwSdHEDEbj5Uydjon5Vtmin9rgzxD7FKR5PZyqBU2YHUCM4uBJ4ZrYz9zxHFQ",
  "key8": "3wX11pCNokmZBkcZm15vsYbfuKACMBYGUKk4Jrj5ctQHbf7dAQ7GT1bKPJswsS92Hy5eL9QaALirUQiFCcpfyiYN",
  "key9": "3ecByihENscYPcWx5UCptLWLfNVAZZmTVFybDen6jUo7N2eTxB9NTmp2gwnLb7sCMC8n3ZALErMgHr6YHMek5kGA",
  "key10": "3DVii3Sja7C6bGjZCLJokhyV1pnJZmx1mDYtBf1JNkagBJvdonJQnY7HoUNGi8N3nE5mZKd6bQvkVyXjtFQedcPj",
  "key11": "r4h2JLoW2v8dABxjnxu1TVkBsvost45HEAw127Eva9SoLPKteS2AtSbGiN4XNYBvLEBWeiiGLAydMXYQ24PVAhz",
  "key12": "rtmtFerFwGnPHzvqNPKSBW7o7vc1FUSosnrkPc964Ld83h2VavtrSD1AvZs7vqwR5fLH2JPNWHBjeZXMQquTk8g",
  "key13": "9p3cmVfj4DeJzRH4ZL2vwM5wEB5y5yBpk7ZF7u2tN3B6NYE7vcf3N8xkrCbBTpsJUXDRwWRoS538MYcLm5EjZyd",
  "key14": "2SoWuGRfAvFCuKnfEd9Tr72zd8c2Q3gZTJuaXJNmb1929NX7sFH9UPDgvCWdannkUmykApYxC71oAERqNuPZpHaV",
  "key15": "2wFnnyQNn8wcdyMH36PVeGzEAhabNJBhiqZPmu4rJaqtZd78XYFZ4pQZbe6J14nibkiKmAe6bRTmiGTFLJQ6TEdn",
  "key16": "3UzT9miFptH3VCYMigu2EoYvhyNuAqKXvoQFoiFQpDYeKXhCnNPcz5d7LNagLrNYWi2BmJNoPwoJknKQkaQKPEdL",
  "key17": "52J5m7nnWyroV4Cq2aeH5gd7J18PPhCAkrKjSj3bKUxJSoTGo26W86omymtKe9JY3kdtGAD76Fdo3HcW8kQT89sF",
  "key18": "24YjUn7koquXZCbJYfv1MmJKwvXEazPmmyrHE1MYD2BNfCMqRWEBEcV1qYLGPp5E2GYsymFfmTG56Kb6LDpA63Y1",
  "key19": "FLT3MFWkEAeBkJbmhs67yVkNQt43Xf1sJwVz1ku4Yw5JBPSypovdbYjkwgJZHcGakZruKBe1T83z1gkSsqw61rz",
  "key20": "4U318515bh6SKkmAWJxekKVf8xvawTgqL2uGP9uufVumsUTwSHZSjtTcKAaJFHnDNjgzM9TeVfahUs3PDxiV6fwY",
  "key21": "3VhXNiWvxDHRnc6xCbDuykVRsEsTcLpbWipzPDeAm4vFsBxYc32pzWe2i9CChL1TAvcXcZSa5tt3kHz8DkLk7wF8",
  "key22": "4UKSgmpvfvD2BcbSAAKiJV6HCTAytaEVWvHN5E3fBAQvGSrEJNgPnwiADxLXfoDQMNXhaZBD4vuFoxT9RyzCdCjz",
  "key23": "3KW7MARFwyLKkQDSydLCqFEbaeAEyXTQbYugkkVX7G3GZ1yfvCq6P8keZfVdPipPS92KqjhSS1CYtPWoyQjvX49W",
  "key24": "67WZt3sGAgzukt9joc1vdSECdi7XWEQHUrFgCfhcVwPhw72LCxYUSqwiD2kj3CgrbpkTtnQ7iJzWtxBMx5dC5FC9",
  "key25": "3yUnZtpaPWvdHpH4xAxK21xvKbqGE4AKjdZ5kZvMPRNhjgojpuyd9JC9WT37fgBHM353T1guExYPdkqFB1wQpm1j",
  "key26": "4K664fKftrMETiUgoR6cTFcsVoQPUQzo2WhFTV1na4oNR5tYTDETVkRJVY5eHrqM4hzbWqsXGU9hbwDApFPHg4HS",
  "key27": "3GeRYwH5S8mXAZJbbJ1ZSur4B2gdFmz52RZSXuYRxt5LRSYJkwEzMTFj4gKRo8SMLece3nmNzucfs1hQUGwFBJY8",
  "key28": "2S4FtMd3bGsWny1WBrE74E1MK45ydzJJ3b9rD47bJQiFSGDg6JEwujopmhBx784iUHWbYgJkC5MpZ1ufGjhq9cyK",
  "key29": "4mxeSsyTqWJJHEyur1NAieM4nkg3FiQ5TjpHzQtKYy8kuhGauRQzVMFgrSQZbp7PcKpQSWeX7vBz6Fncd2kB7zNA",
  "key30": "5bp9Knq9J2538tRxKnSFZ5ERxXcEzp84VksiVqqJzjH3kAETx2XMAYMEK8DJgrypGttHJrT8BnKSMRBr1wdcQ6R8",
  "key31": "CF3toGmQiJPhBi9dXNUWGasou12oxRi8JJT2ZMLqNocSAJ5Tyugj7TmeyEx6KnHymBXqazr2P4j743eWezZ9ixS",
  "key32": "5C8HvyKwpUqLiSgivJ1HuxDPCrUaBA4GXzdBh1zgmcQHz33oRsmXLePBPN4Ad4NMBBvZwEE1weBp6y6iBfhPbofL",
  "key33": "3ymTg2LWvdp1QBg7QDxjwBprwiLYbrBZh6c6yqjtXZk9TddEKwmtSAFpQwMwHDqVZywsC7GLcTQMaQVcb1M4dzJ",
  "key34": "2iGszRS9n8kE2XQNbXqReQj7gy4oVJRgeDMpNgcW98U5QxRRCqRZay6QEVDsAnNzksq3j34oNLgM5c51D2cC1v2E",
  "key35": "3cS6Uas3K8FGSxVn7CiN6TQn8AA7fWMX5BJfiqjqGXcSr4KHQWicXS5kWjSBS6kM6vqjKfjjUu4REEs4L9cHVLK8",
  "key36": "3a6Qv3CQFmWzJ3GLybjkpRCJ5cFRw11f3y71EF3R77wqviaD243M3ovycJCESeuufGuiAJoVemzyhcmh3pC9eB54",
  "key37": "3uJW4fBzLdRxnaFW4i89MCSmkBBPzMd19YWJ81fkqsvY88MyLVtRDpiPUYZza7kwCxXwiaizyNgNDrmzFSFb5FJ2",
  "key38": "5vtJ5T9g5QgsVZxHmdCW4y23MGTC7tkoMhcvxQXGUy5Ty2fkpgP525xJkJav2P7saVPvtCqGtSvSdrQJM3oTXKwX",
  "key39": "2bhau8tqxyyPtj3rPsYnW1CidnhgTHVEYxmRygJrMpXdE3ySJJEyYK9oPjptYxt1o8sWpE7eRyZXBB9zpcG4FQ8j",
  "key40": "4HgdaaPShEHjxUJMnv4pJUDmBhVbtiR36ZoaJDb2MBzCsDDudRP6ZRdtAAhEYGNJfBJsJdmDqZZHUKLye8SWfYT3",
  "key41": "5x3H8osL8Je9iUcTivt35hqv9XM9yXjx8pggbNQQNFJWZ9D71vre66UrgMXH6ZmmZRnEyaDd21EZqWXPVRuKjZ5j",
  "key42": "pzFqVLjC4DD2f8hxnQj7a5X3DLBTZ27Qpdx4n8YTapYex777FAFsmeGWQaxxX5ccAuhF9HTMeF6e7pESbYPihve"
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
