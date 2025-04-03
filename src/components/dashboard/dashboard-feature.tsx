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
    "5p8Dtv2GAgvLy5VG8X8fcsL1U5wRhwsg44HaxcjwjF1wdGrkSo1CJ8jR7eg6rGbdk2L7LcTQvMKUuUdiwNtqBtKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PpC8oHiAYytW9n7UmEGpVdeautkBvKqR4KDt7ie6bkWJ9r6p6FCyesRmk1UUa14C7zDAFAiJjGZGh2XyPGbPur2",
  "key1": "2bikL2bCbGmhWYZsHjS3gKfU3TGgUrUrTDWamg1eeJGoRVsXjd8E7YmPrYT3FrQokjNkspbZx75SPpmgqZmRgDE8",
  "key2": "59QDSxs82tdni9E8TAU6M37N6T3A4umkrssYMycSPwjTEuyqT8R5ddj9MVQxiPDnfazpvBZx2uXiogKFkE2KRztX",
  "key3": "4yo3wJktU5gxF5Zkx81LEeLe9btEvPwDskM6MwGzeQcFNVhmLpejb2XdWuqFcoWLTvh1KmMLL8UnMUt8ZQSE39DE",
  "key4": "3REDDFSWJYFwJwqCQUv4VtRCxT7bcdHTfTVqQHn3Xty9dqydqEMg529VHMRnQML9SJ9L6kGMpGkcC7b1HPQRuueB",
  "key5": "2D9mQVbP9WF7GRDh59G9uqXHkbmTH6pHhLQAXCa29H3UwgCXCuivPWbMs5kFteMRGUANLB8SyxGNQmQfr7bQpW4P",
  "key6": "2jGdxnvEojh6suYdHntsde9Sw73UPESzb1nVuPahe29TzvmxKqVXerEBdnvZEUCdPx9Gdy2uwoBxd8Zi9AjT8Eoa",
  "key7": "tUfVx9ZTqUzMbLMhphXY5EvwJ1kF9iPnCC3oaRDy1kJVYDFeFBKBGFqWnNm62LaJ9Jp6jWyuk4Cd5egCtANVpWr",
  "key8": "382PjmHBUmwaQY9isC6aV7HpMpHzsrk97yFR8na7XKHfie996tMSjfNZFa7BZEuU1DX2C3k6mpKVDe5jaWJMcuY",
  "key9": "2qi5uiPFNJAsZ3rDczS8KtjQQDrTHjWjKuiDd9vo5vRAi2aLF7MosjsHw916S2n8KuMrYa6mchwbJkkKmeJiz3M6",
  "key10": "BUqb2ZLPihFc2VYybUu1epccCrKL8pYRWuWwsYvKEeGytGckj3T3sXcPeKzieDssR5oge5ojTHAfgTsBxSQtpTC",
  "key11": "TajpjkY6Cxr3cBUM1fwipBaR1oGD29RHzNJ21GMoBNWxsHqrtQyBPKrRngc1tbttjxAaMryyZQd8mpvsBsFSgf1",
  "key12": "4ojoojXwopygub8DgzHi4rADSw69EnwqVT5pJasciznRpgmnfwK9HH5Ma9ag4XK453UcEopuZz59TJ5ZzVNt8b4Z",
  "key13": "4ssD9G3ZJUKGceybjKQFSALXbpmFyZWD6aYrAzjB32wt4x9bKNbzWqfvHy2TEChwBumnjGunQ1L8EkvRhirf98uB",
  "key14": "2e2KtPkY6Q7S4ceh2r6NXvf7D7PrwUtUw9tjpm5VnJe7ShSrT4LZzh4b7K8pSKZcVR2zgXw35feH3DzMN7Bj8RRL",
  "key15": "3sVE66odiruyncdoxmX2v8Pzn4FGoeF8aVYmrADFY8ebW1wsGKhjBBBBcEHtQ3d2ww9Mwg6sdPCiebaHfdy5WNJ",
  "key16": "5ZycVQmap2nQaTW9KjkHXqJ9nWfu1pYQKGfFUWUsAWayQodwLnVSETXpbuTbVAU7zJitz5i5zhXkXn18SdJwaUq2",
  "key17": "5sBeJXZmTuV7pjLX2HEGArrpZgkeuJBcrXj3D2zM4uSqzcjyuoPXhiC1BfdbAcQpqc2w6xhQiceNVutiVKkHFh8p",
  "key18": "3cFCC4RANimuLaFnVShNtrMdAY6AXN4nRiLx4uyoahBd9C4WcRQxKKPAQGn1bdePWfdv7JQRGqRQd282gCSVtby",
  "key19": "4tHLQtrjfXVpoFWgGSJju3fnUX2XAtYeCCNR8wnyK9SziX2smzyFSyqBpjhEQ5eo4F9MpWesNnwkVvR8zbLKTJ7Z",
  "key20": "3WJVn3t1Jr7tFodUZBBpnaiK9YY61iMLeNWvmv8poc8hXWN2Ycbs7rVsNAvf4ddNFBrNBsXVhphHpzmUrg4C7iXj",
  "key21": "NYJ7xfERihqxpErHWA9Rp3P7az7XKsawRLKXW6voZdvbKce2NEKhEF2vRDJn6LPic3o75Fg2grh2pJJcPWQGFW6",
  "key22": "4PRARSeh6aroArrqMuS4CT3qZKMww82UEU5MuDNXe4DHvgKjFujw8LhhGkv1EAheVg2R2e5fAQxBHoAGjaJQiaza",
  "key23": "2tzSf8hiX6dYu1E7CXFyfDXjawSFR1Sn7rPupe457p2kiVk2E2t2oYjTe3PdGtduyRE9LrEpqMmcFn9spMZzJWuV",
  "key24": "nDQFsJTAxizrk5eKc7NJ7Zxg5EKoznr3iNN1dAiXaejVK4iGR4Nbpajx4GejLimcxN93DC52kopGRwing6joa8Y",
  "key25": "4qDiVEZiGqrFbVfv66F8kWV1WBUppyYv6quRSDjAW89AJgnn7ccbj7AHyAdA25tk5GqxseZ8GXVMgQ32N4p7jSq",
  "key26": "3LgTEe432RfGb1QDnTuQrw6JW433MoxYbv4Mw5pAD5W9jHUD6XqWs57BvgaWYxc6kojFcLnhrM8gEtzVQrJdLrdn",
  "key27": "4ZqyFXzRCVMhbHFJM5p1szD4vi6aE7UjJo7d2xTRoz7L7ZAGJgvkZcYKu4ZBhiK8XjNxzQoPkvHaKmxMxDanxLe1",
  "key28": "5p8Nsm5QoVzKCrpm8zySMXFVGw1Hi6DLWxY8u5wKcxaCuPLSsAQj1xFj5M1ByJJbBjeztr69uhzRJ7gj8gunaNLQ",
  "key29": "4jsMeFxoE2p2SH5jhMnmez7FsTuy5ZPB7CZCzzR5k5VAJjujNo5BqGnESaU2LXLqhwiqXYJgdfVcy45o5stjyPjG",
  "key30": "61iMCBNnXTqiFDfXHuJbhmLJAezcpNpn3pA4R5Nn6KdAiMVKoL4mmrg8SyJS3yWLF74wh7pViNU3DpgdSVSfCr9V",
  "key31": "5DQKkFcYTao9BCbCNhguRv2EPH4f6bjWsLWkAF47XJYr3WvDs9E89CZApYeuz9YSyZBK6MJoaB6YmoCtmEj5g5LE",
  "key32": "51ZgyyUZX8au5zFHWzxCyeTptAErEXAtZFcgwuBHdwjawvWuN3pRMe1R9L2LJso2b5VKySw4iThSHk3V2R3DJ4H",
  "key33": "5stQzPNhZpUMX2MicWWcVNnneieFpv2x1ygD1XM5spydBSnHbSAYMPzxhCNyu2gea5S77UMLQrQyA2xRPxYQxZHd",
  "key34": "3x5CJtTDBXE3bJuVChkxHb3N2viztB4eyH9iFn4DfjnRVGkXpRSt42QzXgQufkz3aRoqzw3Z5vsgBK9dyxqbtsG6",
  "key35": "2DNqp5UacBxnY468gdRGnpDCLfmwEfd3Ru7dh2wioi42egUQbYAXADcWnMqG1jio1umtna3rZqvHDi5K3mXsRErS",
  "key36": "2S7n6tZ7zVWkRghKUSAjf6kVfqiRx4WtKF8SiYbyG8V4PtSDxCGKQYTT5XuH6nRDAUzWnosukvFRm4h12ks4rVv2"
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
