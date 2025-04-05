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
    "qLGDqM4ktrEjTLDuUHD5eVEw1L3daJC1ssacQEvQxaxEhQhPyiKvVgjkFE5GaphivGHXgEZwgtfp5QuhZSdihTJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wydwfr9iNtzhP4AsvVPt33STJSQRyis6tGguEvS3tA2YNxjyCN2wfa6wrBiqrVeku9MDzLi4hSTpwSFDynGEgGk",
  "key1": "HTeT3n9EFqGTvRBLLex6UsN6ZwADoiWW6CcDSKU5L8yLeYjZo1iNE3wZpk62AQzXvZoRMtKLTPmm1dZMcUoQfuz",
  "key2": "5wvgCmxUpgRbPLeJMg35ArWxg4wMB3m2uMCPF7zo1UWMgEdzEjiSxmHuP9fnZyr1HwT2VL49jPnjmGLD191GAWMu",
  "key3": "2AUbJtbuB8fMTwVKf8MFkzmEL1WiMAFCEMBGexnfjj2JYhgW1Qvnq3fnwmtgvS3vajBSvG7VSpo2x2ZAGHwB6x3i",
  "key4": "4J54JbztnDvK3oCaudD9UvbsMoqY2M17FWceaormjrWwGo1kx9s49iDCc9pKhfaRJy9vCZ1j2eRCGj4umCohVSDX",
  "key5": "47r68WzpMRNbQdVP2VPRQHbUtVgfJm5nG5Y1j5bkjqrymWtaj1kQczhJ6u4wX9V6FdqbRuiCLAwWZRvAx3xNRvwx",
  "key6": "4f1YueKmZDfqnfd351xdM7DsXWedykTXcyD9eJjWM5rhcvWn85tJ3vAJHQU2VWQsPu3ookZPBzcWeKdisysEas7Q",
  "key7": "icS2f6VYnre89nB6fLjWvmyu5QGMkh9fPDw9aDd9TgUdCRtn7i2XWQyHoqyVHos6CfmrGdkjZTjGApuhHcN5k7j",
  "key8": "5popcWX2a71ciXva7VB4fnxeGv5A6vVamUfF6D7hyxcQ28BMxfckxvwtKkF3NSg3YoKkBDDv7gT2JLfnEGCuD8ZD",
  "key9": "2htcRcAnu3ehUqdjRB4Ek3Y9Zinay3JAkesyy72M6FPZQdfg43THTTQVw1ZF7BtkEENokdXJGTbLnikiPJbGDmrZ",
  "key10": "Lt7AFpCbjQ7LP53QmRspSkiu8sp8evtxzcziWqrmHUvseAvvhQ5qCBQtj5V4uGBCSvFU6o9P4z8JsR8WBF3Zhzi",
  "key11": "t6QzGTSd2oY4pJsiLDGkEGCL7TCjfgE5DunzgBsAZCE1cGAje93tbo9WBATebPKYSuMmDazbLMGTvXGeupMfJmy",
  "key12": "48dNzDLsRzSMQKGutKWBy6TkYKcqRPcdmbaoaoLeb41yzePQ4EU8y4XSMFudJuBZ4pjD6M1kJWTzTpwCY317JMeU",
  "key13": "keWXrkyK3KtS2pidFsYob8oweEyUftERmUiD6EHSmQfukvWaBDfbNHFhU4fB4qvtWdvhqW6rtk2LQLiaWmHfdcZ",
  "key14": "2Y8xPu83n2bH98EwHGtHtvWYJe2AtrSBRJ1x31scYS3G2ULCRDNmd28Jk3SFwPRcQy6Y7NUwjdvxuXWnFz1SpWQT",
  "key15": "3VvuJZa2CR6zAAESyKbibFxTFBErQnZsYJN4hmX339D9jdhnt1c7KASqSfpr87oeAdY1UN5XkJP8VxZ5Fbj7FLJi",
  "key16": "3Mej9VD4btpgDJofptCUEkTm13qqun8d1U8FKLH6Fjmg4f4q5j2QKFv1jpRYvyBtSm9yoEbRPaQgcM52XQYBKpba",
  "key17": "wuTgVFD8tZkNpLmP2SQqaULaiuLc6kfVChAUmMLppNNXQj2zjmedVVmwMGn4uC7qheyJM6L9cUcYpgZYNgiDpeE",
  "key18": "2ybbSpbTNJ5qauvUkbUQMQ83hTr8V5Sz5E1FSuzKZdhHzYeTZr76xqYwWxVcYZmKLtSh5MnFh5gn3gALrRkquhHs",
  "key19": "vrftX4RXUQKcZQzLGqBwJmzNT2a5o7pVuQnjytfZ2nxwvM97FmWuWd2PxxC5MtuTabmC8LCcf3WiFVB2T4VjD7q",
  "key20": "3mrVbd59ukAiQLaNk5HuJLW9pJiLn5zkD6kPa1kGNgz982dTuNFPqwYGG2U1Df3c6ZAMZ24V2sifpRTN2PtWG6dW",
  "key21": "2M4xER5M8oCVZVNiir4jA7g1RvGh55dEuoosppc9Uox8WtadmbmHjRuWFxioBzueiXLgeQcdoD8XAxbkQkii6sms",
  "key22": "5hAXt9xtY1D7vx4UNp32s5GrQaQnoq5vcGy96iHKtY1snsKvhWYyoLDfLZw7Ns2uyGTHjahVEZu7AzE2fCvcRyge",
  "key23": "4nXUAhAYttYduuyJofZqg3VeMWMhehkxJUfFGXgNnhBh4aBqEa3BfVcEsYEXCsQuEPDZ5QFVUkRPf2QEHxhxicsu",
  "key24": "YdkrmG633RfmnBADHVVjW3f8Y7RuRoMBjg1fmxSYVi8NJ7NHV8uAq8SELLSQGmELo52TdQWaRPCeNC9BKKbWBTw",
  "key25": "48bQc28s7Sus4CqmcfM3tuyADHjYXSnVHvq58qLpdxV51jtF9aHU6GuAcWSAQUZixwhP6dbbuj9JGDkhS42GX237",
  "key26": "3rWFGV64MwAhbMCTT8YtWrEo78Smiu522TtbcW8wJ5ZBKtkBFpxQZZ4shu6si8BPe9CReXQYBjQmAGujHZdC2Xe",
  "key27": "5dAUCjhcGEfWaR22Zy7qGhJv3Dc4DHhxBAmT9yMMn1DmRPN3ajJxuv4LZCqTCgNEqx29icBX83uLpCY1xKJyVnne",
  "key28": "2byTyu9KqcEae4ETThe7Q7PH26KZDC8ANnv6bjzec6dCdZTnDpvk2DHLbkKfjqCsiYxgNv52Mqm6zzJ4TML4eNUg",
  "key29": "3dMT1EiWYFLscjVtzXPk1ys5WQJw45NtDSUKabwZxSobjsLfsygXasneVgBcKEh3EWRkn4qo73XHNbXwPzG6gWFU",
  "key30": "2zHzjyAuktvWdb65SSFDyNDnT3uFyXtWjG2ASyqhqRYCEoXxdDTdV8Qsz5ncosshH3icbE9VX945i2yQ2ZxaC9vV",
  "key31": "Z7Jh1SLFwWJxrzQ37DWEHwzmHsGUqLg2exHobR4NMTroiiPXXjcWyPUChqXUoSw5TR8EoonCjUVGMiHHJdWqZD7",
  "key32": "5h3bBfVEeiwprb12GmCy5LKWBcg1qynBFoyhovEFb5aJoYChE3noUVYB9nGoUGLzzk4TdqbT6vAC2Xb34gJCSgpA",
  "key33": "3rzLKnbZzEL6BUkggcJ92hWFoio32FhyZWQz4A1nAHat8soi1ikDqeGDFvWG2aBPBbgvb9QNxoe1ZGp7fTWyd2Rn",
  "key34": "8wJL2AkWSKAoJtSFiz7T5MBPGyMt4MmR2EgBPFpMsofyq8LELvCQrCGo2HrH3raQmV4ys4PLuW7XXtKxEBmBXje",
  "key35": "3wwyMZF7n3fJwnNsZCRR3Gvtm5ogZoYr97UCFNvj2gmNQpehyNFBARHRkVz4vjm7b7obBr8JdKjHMHjXLDsgtfy9"
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
