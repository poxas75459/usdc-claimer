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
    "o7XMVARcfm63ftpy6pHou9CZwUpr5vZqaecXkpqZ5dhL2C4P7cJ5ZKuQvQnrWGCVjFVPsptvEBdegvuFWecmsNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aEYfFPhFxpSFKcktt4XeYBgQAAbReYmMgdxHyPB1DHdvnF8bonVwNZf4U84kQyPhmcaviJ9rDgBC3nQAqhp6tPQ",
  "key1": "25LLhTFVDBnTp47X3VK5nSvhHrJmdxbbKoWXfwvNug2UWMpcGLaRq4JSEvPTK5zXDa7T84cAqVKbbBAetELJ42Th",
  "key2": "MgKqHJKC5X5PCFeBvXurYeV8G5az29Szvnj4EQ9u418TzBBhTbCpGFKLrUmf9Qkwja11B29Mva5iyvPh3vz5zTj",
  "key3": "3UextUS2j3wJG1b7U2JJgEFiorRyeEsubUzaNSV1vFmBgr7zn7LFEkTLwrfzM4Z5gLGsbvHNrjzWWaTNpUaXeXPW",
  "key4": "5omtPrYW45CMXsBAAqQ1VJQZULvcYKZNmRhLbEqVL6ALLCyqfVgGoEmQJQ3cLZ75ZGVJ77FSU6VqLFb7tDkCSive",
  "key5": "EzvoQy6791HLvMq3yDM4hjNXyrXLmSHJSVj63C7sT3ukfAZ1miyTUgpQ6U3iRYZYTxPxbGjoEzZu3cetvgPMD9Q",
  "key6": "4YvAp2X7RbShDUSsrF2ofQnzB6j7vD4H4r7rrHLkGZ674ko7UrwNYoV8t3TpS7EgfTx4Xniabp6Go3QsPPGrRbDC",
  "key7": "5L8gJe2fzZRMhYDx92N2Xvya84pmKejSvi6ESq4HkP8KYhG6RvFwDweuhBwg7Hjts3dmMJMUod91WBfNTkgwmN1B",
  "key8": "jH8ivQ56EetDmRUo2Q3kDRcQkt8U5dx48NeikGCPkLfsW2bqrou5YTauKFbSE2W9BXhBXzDZCLw1ARYWDDiQg28",
  "key9": "4TTs4BrkKavun5iLGEGkJUXx6sfhCcuBmMTaV9aYx7PDDk7mV3ByeqqoyLx67w8qAmfAaJrM5mwRRKUrEaGAT9Qr",
  "key10": "5Zea5MPfyqCZ31FjEcCghXbx2JzjSZ8EqP2i2vvBxtj9xLXRBW3UgceNwfp82gqNKQG6RWUYeEu5iAoE5XCrCpEZ",
  "key11": "arBLGbMvkeeK3qCSW6SEYSnXCRQmqFgZ7HBDgW9QKcMXV9R3PFcVjG1Pj1BEzxCeWPfJCu2Yp2sjgXReg5zQmr7",
  "key12": "3nECEZV5CFHnk3xjmFFyM1khD6YYmUjXGzPm5Dn6QeRnP1wf7PRrt7qMih1FbRC97SMu2PNAnvqFuKcT7mfdYUcr",
  "key13": "5w2n9BmV1zUvc57kVe76Gwx56aB4wCJPk9tZ5eA4c1cj4Thco4URL1zy6QWhm3UCX8vHBSMEL3Bu9Mq6oDJk5nRJ",
  "key14": "42KXnrPfiFAJw72NkQBuvqc2tA6QCNbY5qkqjk9erTUof7euXasuZ1cwPw4NpYYBvtroHWiRUj3NEkdiuUGYSWoF",
  "key15": "3r2p7iedxyxwUNHS2MFcdhxGphY8DfdqvMSy3bzZLpAcy8eotWnBRTJrDtWT1gjSJn8zjLQhpjnhvUv652Q5zymF",
  "key16": "4GDavxeEoeHrTxX4HdMd4oZGG2ACdf1gvt3n5KKyvvniJ7shyv6xk5M2mAmJBmr51iU6XGZ4FEZ9iWZjWCNNk16D",
  "key17": "4bwYWu3KncC3C946MdzbkDByMyzwhXfnFZn8zxsAnoGTqndTraEPFErUQPsZN8GJNxaPbB1Cvy7Eb7UFbhRoxdiP",
  "key18": "4r2TEkKHLFDcuZToiC2cxdKnMpQR53Fi42YhVU2ej1AWNQ1w6Yr1Z86jLP5rCQRkKZgJWMhRsbZN61HMyKgvxJmm",
  "key19": "5nNvQLVgMJjZeQS52TMeD9rXNhyFb3JXRQfqTa7Y4GYyFWbTATAk1QefrxnSmsDtisww3LWCob7raUgVC9AyAr7d",
  "key20": "zxza35qag7HUqet1fbUoXsuFubCF2peUFK1aeSDmscZfc65GL3v9gWzdW4TnW24sNSLrxZtsCh1yzntnRUUUPtU",
  "key21": "5iZnwrzWnhMAhLeyCRBq7ULrcBXhTqvPFypFBH9gGGoEhBnMgJoWhsyAQmBAqShnx8Q7F6CYf4gMjhv5vrfHW6Xj",
  "key22": "3yTin7stkN3s6QPBiNwYHx71VgYZ5rFAeamv2ohDbg65UrMTHPaYjAZfErSf5U3xfzwbp2zEKJ3pTohQ28LujVE4",
  "key23": "42xhrevRJ4RAJGPpiXjt4VdjuT8g4kTpWhCXAvpdJT73hD52SRmqZXeoZQtQqhCWM7eHzSFeMKfUzVitVx7qufFe",
  "key24": "G3LxemarwATfCE9dw14w5nb1sVqULqqg3jE4iswSdZpN3RGHJptSd4KH3yNc5jg6s4AmMhmokvwJEiy8jbSxKcZ",
  "key25": "4bV9jgCfpfK6co3HBrGwCZd8kQbf6RCY9NT9A5wxWuCSLopguUgSv9LviFYdz7oTCZfXcQS6bYjtwZYdKPoyaodK",
  "key26": "53Fnik8iTS5oTB2xxyH5RFqUvTDuxXH9V8ozDFv7Hnwg9NFcXXiKr97Kt7AhZ5WWBbbH8H7oFkoHk8eT8zFLokJJ",
  "key27": "2pMoPMk8EWnFwySbKJUVVnaanwun5TXvJ6Gec2yLGRxcryo71qicKLGJmrH3joXvCewwUJKi8GfjF39peTmJxkrx",
  "key28": "2ctbctzNKMg2AhFUTwMvPv37WzuzXBDDowNK3GjKGq9Ws6J6ofwP8x9EYPBzrFcY6bfTYUMRUQrQbVTpEGToW93P",
  "key29": "4fRay4xYnbLszt8qxwXpKtjjyuEevEHqxys1ZUNwcUMve7FgH8eQoajv5SuetrV4eW5ozijD3errFtznk9XRwpPd",
  "key30": "3hKNSNDHfbekv3sTExg7LaC73J8r5rh1gV6jHgJ2uVe9V9rrrVs5UtkRvd6tPuJQgPcRg9N2AUCs7m14SnmbV5jE",
  "key31": "52iDtbsJpAWLgQMB3NSpNqu5jkJvzJtU61xwYuYAEXPZRLnYidAeL9LuwRjGQP2KsZ73iTPTozAM4BQBiBkPeMg9",
  "key32": "3gJN3prqthLTfS16MVam5eNiNQppRwk8BswdxX13ibEwRqCRixkRkgjtnAr5tftjcoF1UbxeFoMgk36LXhCCvrxr",
  "key33": "E1tzv6V8RmRXXZEJxx99234y5w3UFqpbTMj3mgk3kYJ1AswB49n7haN7or3VCQJXh5gGoKoDt4NyfP8nMnVjWn7",
  "key34": "nF4dNTZSAQCrqjueCcQ9dtMwvehWTS71jrboRLbXryT2Zr4hgoiKE4xXcjdreRbEm2VFSsogN46Zv2e1E6vs21K",
  "key35": "2rb6Q6HswzGkdXZ2KRpUc5cb2Q3WFcmYv5vVskmsEaYNSY2n1LoUESj2nWLv5QBKYb9zC7p8yX7ZYERhqYfm9uUN",
  "key36": "rRWjuiqUQsT8pubGWmx7dw1kMWwUHn9X9X5FkyGMzzFBzFF4Z6n8BCmTReFmYEUMLh1nimuvF9iJPt1ezEfctmE",
  "key37": "5UPLUcAujZWxrSkbqauX6fjmgbearkmcXU3yVxuVpLwnHCB64aEGJGHsi4m311RTVTifG19QPvhp4vAW3xSY2Zzp",
  "key38": "4jMTkSw5PosXKNne65pzaMeXJ7s7Le7mc2RZssVWRKnC9BDKrWVnM1oKeiGzKEXyptm5dbsaUfmc3CMb9uiapqrZ",
  "key39": "54UPLcPWYuFis3j6aMNV5e3HpTq5iXETLznJe4drC2ojGcVX6nXsEZBBEtDdrar3LGRjUahmAUzPcRUBXZ5MBvk1",
  "key40": "61rZqvXytTqipmLjwxzormBeED6rvN63MA9imHFMLUvtpwbQ8SRbuQFPzjPh6FEw5ea5GMetjp98zSHoojGbtmVx",
  "key41": "5TVMMoCkHot6tFppFG9BneiSJXswK6mwB51s9XoTM86eF9i3iwSVcseQKL6ts281W8pi4kMEvjVzLJXb6VCus79w",
  "key42": "5hze2GLCT5bSiTgY4cQkK3cGA6Dhfo7MJn2ShBHxquVmiXMboxkBpJVJNSsPBeGhiQf78uxDuy8p4PBCYFVP5Y7x",
  "key43": "3TQxWMsm2zWdJdqgawT7ryTS5uR7HAZL6qiLPfpuKZ1R7H2bLL5rpR9ST6NqT4Bus6nseUYwSxB7sdhBmJpHLHZj"
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
