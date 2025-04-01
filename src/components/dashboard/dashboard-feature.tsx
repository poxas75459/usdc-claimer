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
    "2BCq1uuzGNp3ASFkAHJ6HBEVyC5ppXeznXn6CkWuzQwfiRdxfquVrvrZvfPnNRSGPih1ySiEjPt975AXz79YJ8BY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pF4Wi8WuqbmgndoM7CKa4W1ESbktoqVFcjGnVwMewu7wXQPkG2JUixzLW2Fp9VmeuRAiNQpzy7qTb43D5Kf7RzD",
  "key1": "2cRJEYQwENaNiSipv9W6xisoVvc7GSCMkLtZrJHLvzdb4uAVAZ78vbgZSpruAAQRxPdTPr3bsq8cU6QLoAxDyE4i",
  "key2": "38vfm9Meen7iLyL6h2BDPWZxq4n5BNWWMAro6THviVWE24ModtajTTeozK1QiXvYj7qu8VX641cx2ANYwjeT1Q5p",
  "key3": "56jy6m5QaYsMSeiUHoghtc3rZTYUygi1vVVkDTVHGbtHYG9Hz1RTJGBYfkjSYsJUo8HCmLvjQ9rHLzBvgVSdt9xP",
  "key4": "34gzca9HwhPgZ7r6nMkAfd9ZUH3om3oAPYngsLsQafGgi3m1sVo1UcRjEzXtHHm1932GnfxhQWpUV7L7sdKBLEcX",
  "key5": "5mBpgzEzBxoSSS2gzuZyCUaYrgcHGyCfbk1tdiMApj3faXdb7SViRGkzUoLHncezuRxfF7Gqddf2xQU9htFQx4db",
  "key6": "4pqSymix5BVfZ43RfNTp7cc2tZ8RGBAS1MWCr2jfnTpegWwNQ4BkzuqUZhd7viPa5vgDUh5s8MUXiStwZMrAy4LC",
  "key7": "3LoL2ehD6assqU3G4FCNid4c5JMTJDEcFdVAXbU4BPNjzKURxEG13z4hC4y5Khvawr5dQXQa8QGGtiw6oGfh7L9y",
  "key8": "65B6p4HDrpgp27GnjhLMsD1ZUSjp1K3HiQdjDddvAuJNPMxrUcogjabsWpcYtcEKyRrZEQmsv5Ycum9JjCXvzMz1",
  "key9": "52YdPRapuYRhucBjBhUjMm8LnpE7guAoZBGrcQo7hp5ghS6a5KG8zPk6V1RhvEG3dtkpVGb1nWqs6ySjjovxNDYd",
  "key10": "3Az6Fsu8zjBiCYevbjmJw5hC2bBwsbkpBoHToK4JNs6RzefrCXRWmNZBRpPkHoP1nqMH5hqNwBNPyfaiuAcW3P45",
  "key11": "VNyydkztPjY111DxhAUCfM21c9kq6E6MZdkBAYpqFSq7yfownz2ZXUeyPDJCSeBy3zp4ZkgVf99y1Tdk1sp8T8E",
  "key12": "51mqq5jQohd8BkfHoZwkC2jV4ZrmCsFwmVjMMU8eeihMjR52YrDXpxVJRQgVxukMrSMP6P5hs1t7x7hzxy82uatV",
  "key13": "5G8oPaRHtZKDC99pTTfpa6jGMPD7fiiFLdXnBD6mhV3geCfjUzkgu8XhencvL9EBC8Wv8AQJKR8Umwj1dLJFrvtz",
  "key14": "Q3gtigGWLs14tMeXoBkZDRkpHH6BctSzdAWt5Uggs9GZ7PPpC1pMvH2yLC5kwUaPVd8pXWsesireqeWxS6xFqa9",
  "key15": "4Uje9LQnxGrYSeGVuaiZSu2mpdcVNDr94Wi7yj1BDAJ7phohVinxn7yuiEAGx2XqQwNpFZeBSpnDb2UWhc9gBZzb",
  "key16": "5jxQUMHB1Fhu3u5uS5QTzBUeWp2srACL3kXGJ5XwwFZWM4bhbWjQeu5GoLBS19pR38NPTXEo7ge5uzVRAqyLhshq",
  "key17": "2WhaPSPYKPDTctFJ6ZBznoddUAVwGgRRLWLGPriEqK5SHrxpKiYFKBRthsGX3kAm273Ds57mMoKVrmSB86tMTQuf",
  "key18": "3pRGSKzCcdb1NwdxRRxyMmxp2eBnYQWBCimDtJL6gB9oQmWMwqhhamKQCdo5wfYqe5kkAcjiuFYRBxUpcX74iqFM",
  "key19": "2ARdSs8Xkv6gpSRxeW1GXPteSVq8KEX9p92tYQDu14T98TX4z531qyiWh2rSuYdsL5DS6zwyDdSVNB5bRGsrqYwL",
  "key20": "3nrHmh725832n5aUtMrQxcuHYHLCu2uLamj3VejyxNiXcAKxwQMuo41UfnRkXaCcxvWs9LReoGUaawChrr1hMkji",
  "key21": "2krc2a59avLqqgp2PxLkdN5aV6K58eB98vK612jHxvDLt2mgk7Qn4kgCDzmZ4wzAPT9ce4SjhjfUKcYcJiakXwAX",
  "key22": "21HG6GMWrWWbpbeLahNRTNmqYFiTYKCmpL9fZg9SoxfnGGXEuoWRuST1hhZDup4XuLd5icThocdUrLLqfWKbDEqQ",
  "key23": "4CF1pH8Zy6LDVoZJS2aTtoGk6xRXsdnvXzqBXPs4GVTxuERuKJVc5DnPj9zSRDCXLUoZDCGXU5NPUSH7esdBQ5dE",
  "key24": "55Kx49daiX4RLFjaBZ1iCBDXhsWrFBS1EuAeBtqN2fnn5XGZGs3owu8zfqxKt2Ft9oeyi579q5Lx4gyN6GNQ3rcv",
  "key25": "3RBbRfBb3NNmUcr4rNY3EKFeNWdFkx59fgGrZjNpoBd5YgnCieW7HvUedPv1egpkeqJY8Vnfc1UpR9PEz15MeL99",
  "key26": "ucAx5orKUPCLxap2BGi2z31wEEWacnzQ9bdgCavQ3TRD9vzzCeKUg6wrxDViQkNUUGS2qsXnnSBT8tk6Jdm2Br5",
  "key27": "5mYoFKJjzVTsLpCZdFQQ7CsC3svDfdVJgAjerHVrVMHzaE9YuZERgKk3xwfZ2Ao37r3EBpXPpACHw6McPJ2GWkcA",
  "key28": "MbZqDQRx53SFG1hWrLTzq9cwrazCMkCWCZvrnrCZkv897WbTaPNJkDRXMt1BzkLQspcHg7CuwmWHwbY8a4C7SqS",
  "key29": "3DQH7G2Cv1Y2mRBn7vuA24s1gKb3J2AEtKpWgyW2fTCAri8YSMQVDNxV4cyoMf5xosQbSn91tKyefmyUHX2CXbXG",
  "key30": "5apNxhpbCRF2g4heD7ECcAa6bFjeLCkKofpGWKEfxWBcNHs6FrQkWdCEfTEymGes3PaSFaJzCQ1z5Edk7WPG1eQv",
  "key31": "29TcZ6MCQg3JHNHxuwxfS3xJcyG4HUYwsVoiZAaGxc6w32TWL2rfdn3w48EUbX2WvDDAbDB3quAy21Wa4rvTyctN",
  "key32": "3FyW6J72MpBBY7FkFNosRYa9dgofMNwBBYBf2fqBAcEfif8bN2N7EVPbnJ3b4zSqSjG3N5p5sWfoyEDeq8fB78Mf",
  "key33": "z8n5g8sKseFFMTHPsDuUqebm7Lve24DTKP2jDvGooix3UehqaNcdsubVxKcSJU6KGq6MmZUApekDn3rQXTKUe5o",
  "key34": "5dSRyaeTxEyXM1nzxKDchezCkPak8CBVr1Fhf35hhCgvihNQ9eEaYpz31gHKXP4aA6W7DwYfJpxMihfrfXudAWwB",
  "key35": "3yHKgNXFG8dKSjvfh15cZAohuqDJrQr9ur46YAdNuF4tYnffzqDfPQGYL8hWx41RGrhb9LkRBjVkTyanjt8FUfaq",
  "key36": "XXZQyVKW65nigMJ3jGVKSBjXSfPpdmHoPMddL9XP7va285AFBCykWhahkfUyxazGashvT6xDSQYgpv8JTkVj1uD",
  "key37": "2d3PT9JFdJgw75zcE2BYwFEcDYyYmtjEpUh3SSHbT4en42dMUBb9qY5rFTfq64a279u7tFpxuQeAzd1VtUKBg4b8",
  "key38": "41D3cQ7xDnEETrS165GfN7keX22yP1YbGg6ppYgSVeiKUPvBL7sLyPgDJqg9kmQZu743wk3anQKty4cspM5zQkEQ",
  "key39": "5Z7Pee7dWcv3YiP1eBmTCF2CgVCdujQpctD3bHwsfcBb9o6emDvHW6yaF4vQ9ko6XjFTPsQ7c4Sn8g1AxSgW1bq8",
  "key40": "5RzJaCR6NifJiqS8ePYS7aFWASmZJvVT8ER955ZBBpMV5esgd6deuAA3YEi8Mgsm8Bb6sQwzh4eGwGMbrE6yKE9r",
  "key41": "2KgbUV8p8xWb3UoE6d7c4ZgCMaPHDDqLiWJ4BhWJEXc6xLqJTVp9dvKg6vsh58SBPHLEqvyf6bEJ9X7xSLQ3yn91",
  "key42": "4xxwiDSzu5HaYAR3SxVSohaWeh8VR5TT8s3qrA6y7wv3TYm6j21YVkMSJYtssyddnL6tyyBD4i8jeMZ671k6ediU",
  "key43": "3EUY662QX5wHmnDA9UdqyTP1j4yuxE6JspNzu3jBuYJUPDw2AZY3pUWw9g51scne9JsMo42tBADKv6rNwLQ4THY2",
  "key44": "66fe98K4v8pAWdWjK1ZzKgaeCUmmnfwDZ9V9KLPE42Lo2qfVrJ6Hk6axCN5biiFCZv4HtpR1RUcNnj5Dupwy1btX",
  "key45": "5pRvhseR4Nk22uk9QR8XZxwE9VvhFXg8ALHbniacdp8symGg49J2hWPQBTUmJMmWMbiC6DHnmG9rTxGyVQke7sfh"
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
