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
    "28DK6wRKjNzrjNQoPQPzix9tdZ53LGBRnW55R4h4hdYDoUb3eN2VXWPNSw1NimTFtW6hhmsJxLWx48AznNeYFnvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ajt59ExkxdbfUhTEhkVWVTKvKxss5yuoV39YNj9LicC6wDC48VD7WoQv58tkUQexW2j7sjxtjMYCagSjQzYqvkB",
  "key1": "4oj4ouu83k5PMRaAbFGGfhpZFcJ7JhAGUbtwMxCmxKEDwDB3Z79qSk5wYxaLCecGekuJ7cDMJM986Ucui454iLRa",
  "key2": "3fPXt44BSNShaPogNrEL1nL2nEzVooa93zWeUbFwk8Xabssvot5Efq5YUTWrdqhuDwCNMvi6WvGGM52AqcXXP1dy",
  "key3": "5y4U4MSwCNJAVpJAvW8wyH27Q131UUno17nYBRwUShZgeRRfJ9JYS5WSM8G1Z5NFCv6XXULk4C2JCfDFZJF8rywn",
  "key4": "3h3hNiZkTgJ1CgAMJsXUgbf4ueTUJMyBAkrwusUZZdX93f1D9cV1gbPTNdFTPRSq4TJBPHUQ62WCQpJVzXybsXf9",
  "key5": "2WxnUxz1hfFupnqumjjqgt1VdfB6yT2j4d9sYnRi314S7wdstY4LnFAEtjfLxYmpNmqS8qhYoZEaygzLL2baAkrb",
  "key6": "Yz7mQtiRwmU5cYixZnHsHVpGMgbX2hBRKgojWwn3XF35zEvAPufZjDLnb1NZVUZFCtxN7zeBRaTQVWRnq5JX7Ac",
  "key7": "2umPyDRpX5sDgXLtrcMD7ur8NeJxcvWuN3tDJyqZzZ8SexGDXrFp2PFbsHrDg3QriFKhDuTUBVwr4Nok29utban7",
  "key8": "3nkNU2XQ22qW3pUZoLVeqeCAjv3hib7Xua49EfosVQHfpH2YPbR8xCU8vHNWcGvBKgDU4yKeXvX4PumtzE2QRJGU",
  "key9": "49Ryn4UDN3UKW9YTEPSS6U5VtJwA9ktVHVSLnaVaorxmHcVYdGf2S2ZeHZeYLZ8pv9ioNJty8GH473iD5kHbFgyX",
  "key10": "43jaP6mhUHFKAwUvY6s2s9VDPiiwh4QxFuZzKjDuDsEqaNoboqynxBdWdsgSeSS1qUvn4PNS2kenb6NFotD6gqfE",
  "key11": "4BvxgJSZsjbVFEzfuH2vcLZ5sBa2BMWWmKUxCByoZEbEAia5TK9Wn6HgqdxmwDsMos7GUwcVbFTLoq9EK4NDLAAu",
  "key12": "3QtxCtdM3mgpyeejjAc9eHqGApNLZ116s8nm2o22AQvEgxH5nxUixoHJSWmfmvLsa6rQqER2b6yMJjtbJd1vPT2c",
  "key13": "5QbkNfHvwp3oa23U2ZK2mTTVcWt94dNQ8BKU9Se1RS4StVqVKW9LYmGL8KVUZu42fsrAxFyuCeHwFZEAHmDrPpfR",
  "key14": "4WWiMsGweWPh4mo97AR2n4JtQB4mhLfDz8f1mASVfvx2LAZXu3KiEswD9GerQAeQoswpU69Ay8C9BBBVdoDYLhbP",
  "key15": "3bxoVdy2nem8RLztudQtG3b2xVENR5NmJco49R4f9sDQFEbNtnguH3FUafjNH33AA5PC4xU1EJds3AhWPmqfUdLt",
  "key16": "2Cx3oqGFF95wgXmjY6Q8D9VCKK5LhyqrqwVNC61i8JR2reU7WuA47daHuHH2u4DLWx8TEG7DtdHXPG13eBst8ZM5",
  "key17": "5wTzTe22wWcHos8LxJTcFh2dvdDGFqrKo3XtLBjr7uE8y2WqUZA44Tzcwdw7riMVb5R2JKcAZpzRe2FzFZwLuVac",
  "key18": "4wHqxyQaHkw2EDgnGbaEWvU4tKJHpkdG8xTGgV8pdf5DeYSkovNF44bxUhgmbf8nGiSXjjeh5GAFCw6FtWoETum9",
  "key19": "3aP9BDQJtWKnVc8Ahb5EpGxdkEGKfBSKXNSwDE2sCEJUqCpZrk5PVvdRrfP1xetzon2Thq3TrjKbaEiLE6BZ6ZF1",
  "key20": "7KSu8cLWbGrUd5JZ2UCAcVxeTyQq13XeCU7iNk6XiqEMB7hWsQk7HFzeZJ1TXhUDQZCRwLWEHfJxhw5KPf5MmKb",
  "key21": "3nYBYFgKcVDW9n8iM8MmpyfsEsU58JFCVXs6dHUisLNSSWRa1iuZfwbkh8P7Agj2b4S9mXumqtpCDL18bVcjXpct",
  "key22": "3odgHsSJaZMRv6knfuRopF7HeeH3hrsutiJo4YBbjijdd6XmhUKb6cxtYTPNBRV9A2urKpF2SkohNybxJZVyngqd",
  "key23": "62nRdYAUDkmezx797khXQ9SHnwhM47Yk7uyin7poc56qJKioJz8qy8FzMDhU5ZTNCxvdupahjZZCz6UNUdZBFDai",
  "key24": "5yGp4rAJdem8heZcU8t41pyjhU7WoEF6ZWuysDLJnJ187MkQauFpWbBVkjzYKj1dQatybfEBuN3fJymecff2MsuW",
  "key25": "3nHReeRjyKvsrptCEyqqWhQbPWftJQgoqvVnNiYSWxAhov9mv8ZKUyZzBgdXyCHjEuY9zWG2PqhEeyFvKr8CnY7G",
  "key26": "3hy5LSejcpmK6RF7uCv3D26GntVGnDQYG63hqxHeHKDFY5W4TbY6sTnp1hEHjQSByFqpUzikuWPDXBmVdwowkfg",
  "key27": "CPxdkyWoNgfiqJjzQo2MnAwj3UoTycnSqfAU5zV91pxNZPUz8K1K2R6CJn5BeSnquoipCH5mWirq4MRuzxjhf67",
  "key28": "5pdX19c7LvHjquaW8Ud6SUukr9ysAhmDZLEUco3HAfwX3zsSyxMZre9sPoCrH7yPS9fSvpsi8xNR3NES38YqYG1j",
  "key29": "chamDY79QkeCpyKLcsiCWiDkDcxnAmoeQWxX7GEZ2LsCpGJLFEkfQR8ivStaUEhaoGoUbrpcBTmDCg1bCV1edhU",
  "key30": "2xwLoCMLq1uELQEH638G49ja8WQnHPhegN4EUojuaSiVxXDpwt4kaskpdAWjJ9PzcBMbW4MYUjfAjxNNXnJkUMDL",
  "key31": "uDjTqxDsTAy9Qtbw6B4y8pd2JxMhLgPVj3nMXkU6egBhwzFSQsms5zWg5DDzegpLqQ15nrb98G924o2EnDYMPpN",
  "key32": "627nAHTkrqnV9RRmytjwrQnjJsihuYEHQ8osk8RyZtqzJ8p9bRK8H8djefZVqs87y89pNZULG8fiUHafx6mbVqtp",
  "key33": "59ihivJsj9sfbbZQjZGPtqhUJa3QpuL6YNWicJQdR1Q23N2Fzddy3K9ZhKM8DuC1V4CFxuXChigivny2HC78dPfh",
  "key34": "5CiZMUwo3au3rt6FifPAX8HW9wUuzCBXKG8t2G5pJ646UvH7wbX8bUQ1h2hyGdGt8uiwh6jB2s7DX5uWeXmUrYwo",
  "key35": "61tksAKYWhuEQPk8h7T1YWVLapXMgbnkaHU5PYXbzeRHfVkHYZxbZVVRzvERK3Wh8oeQFh1HwUawuSJ5hZ3b5Qzy",
  "key36": "5XNQep6VMiCJ7H3LShvkacCRG3TKYDSotfXtbyirfHYFuuJuYEK54SCNgUeQnGVSfFz7JqhCWN3c1xRvyeiDtp7Z",
  "key37": "5u6zFdZuLmdAT9SzKjxLkbFFHBdc2LskfyNrS97yz4ysJbREgxes8wjpax9g7STasVZAuCEGAH9HU2AzZY62nvhe",
  "key38": "3XquydXrBXgYb1wyekLADfz2gTTwVE2txc51i6Cq6XeMYyjteSxcjuWqa62nM2CACRXjxQ17p322BkY5iNazWThw",
  "key39": "3G33D2nB1rTtxEa7mnpnA5gMXhSymEop33YBUPWbnhoTqbc8NrudCthcJMBLhHWmbcFs9f51XKQHhJdYHKwURjFe",
  "key40": "2HGpqLjcEfk9MzjS8dKXDZwg1qeriFkYNJaiTtiVAeJvSw52HhR6atAXu5m4hqz7GrA9Cppaj8cexTidsViazp6A"
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
