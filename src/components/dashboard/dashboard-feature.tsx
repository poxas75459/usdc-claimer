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
    "4uXBszbfrRWuiRRrN1FLNy4N48ZPgdHp5GeSLy7QhzpKphHEsW5SeGtkk78bNJFoKcDC8w4ff2cYStacfwc3tvdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rGtnA4L9ZmUqozNo9qR8LtQ5vSMBhDXmH6vPB7K7xV1rgVPmuHxDNuxXTYEaeaH7vt5FqboxAdR3hrkgCuNM4zj",
  "key1": "3t1zp4tNYh13iDyE9EUHWLNZQBzkh1geJBUrnuMhNhA7TxdQJHVdnJnr9wSmEGNvGfWv9L7ue3FX3wheqkrvG2Lu",
  "key2": "5FM2XMM2fvKwGkbmtQwszcJAQpkkozYrHv7PS219tHmwrfZCH7uCJw3guA8qRqqno1GAujUj1ohRUybzRZb4BpRX",
  "key3": "9vZ4SDSB8UvZ7u8hCgz2PRtpEuvhDqk9WWAA78yumhqEoHbdp1ZCd8TWz1GmKNygKNYvKWb2E7atbzV5bcapsFz",
  "key4": "2CvAC7Zg5KBMaRiPQyaQsFea7McBqjprRtYuYQCMES3h2ZhmJq6x9BSiDUnutMD3WG3E3uhnzGJJxAaLMNGKoQ5T",
  "key5": "2kJRWmm1xhZp7JYPpppZTsnAgxFaCQ4QgGbU5izJDfgrRkJS7pcMQvZbNLZCRXHPVvkSu2L1S8SKcNcZ11z4U4fA",
  "key6": "63M6kZJbNEjy4ViUtVQPWLM5CJJMSJzGwoVbHrx51RL46JuvydjEsnvwLFrgax52hHNrCx2FaDdghvjFfrhNoaZf",
  "key7": "4mY6PF5GyKwE6ftsPwn5M3DXB5fygjvb6auT5mQqbkUpaixQywAeiJMXgU9C5ToNWykAG3VqovPx1zRmStJZfHYC",
  "key8": "2Zo5LMGJ86hPC1bDsqaTNpJmyj2uHLxskCui1f96JhFX8SwzmeKmQKtXaPqmy4VkPQZK9wd5TRpfSujd8Z9LZJ8M",
  "key9": "6eWJNaBz6iG8GyyCHAd14JmrbM82y8euf6TFm2DrmTbppFZugPSjRN13Sik8a3pcTaLN4ePhj4fF8EUa5rka3NP",
  "key10": "5fVpuyFceveQNYN8xgTsVJ31JpbYqDFdAoH1Tke3w8pSU3VS9xPh7Zu8NVS5iy1aDAqUvCksngg1QPuDPms33a7E",
  "key11": "2eakow1P3AJsoRsqb8M8KrKYU8xqJv35m2jp8gWk2YgDeUHoReETuwU4wCmQyHMpTsV1fxgddAb36kfHG4zUBD5L",
  "key12": "267gvsp7eeKRdwnwkJJ6w8hWR5R3ep5MdGQ1udFJjwmEW3zq8K7X1FWVJR4qtMGHPyU6bCRxxuucCm4gx2K1gQN7",
  "key13": "3UPVakRP3zjkY6Jgn7A4GV5pPakuzBA4T1xRjVAF5xexNGJwGuw2epWMuK8A8idNncT95osiExGMB89u5yXwykF2",
  "key14": "2CYuaoFmeMgvxUqQsRSd3PoMzGtgQd8iUyCYyANyvnNYoHYW1S6YhC7aGy2cdrNsqRkrNmkEu5f5i7jMeW9yg1x3",
  "key15": "2rkbJLChzxMDkzxFuew1uoaxzE5BpVUodo2VWNd3WHHKnCpFJMtp3GMaGeXEngcvDz29R8jpq23WfPDGxk7CVQki",
  "key16": "5uSFHP24KoDi2LgPF6UbBKMoDozpgvesJj5jbZj3Mm3fNVtUrMRcSovVmKi1Q1QMVCvwKXjCfaxVfgekSqd7hrLw",
  "key17": "2JR5dDcbmGWe1kL7SLHPRkx1nWrKET9QZhCPEWcnFgVbWErtsogECbEvBMtEbYwjLjhaNwofi8WuNoyjnWtPFzLW",
  "key18": "5pmRyWmH5Ah1z4DanmB6cRNFnPqzP55arufFhMEkcpZzrSarzR2kQmf1XA8xW3W4Cj13RWaS1DBmuN8Knqj3bJwc",
  "key19": "4CsgEZT6hgB97WVya9xi2grnN9ojHQvbeAMN6nn29rFHeVGQjFT9fn5aWi7TXbiTtWWBtdjLeZkstBs2BAdonvty",
  "key20": "5xJ1ND44oCCApVBD5ZyVPvMuxvDKNomHLzrjz24Z7ef8JFXgjSiK6eXMe1rCqQ9ppYJEN29kWUaUQ6go38hn3WaS",
  "key21": "5Q9269vCbMKvfD9cYqQVoYkVj4ZkeAxaMaxKwcs2ajCNECgjGc7U3xuXff4AZCdedA8514TudWLr1Mja4pzhNGMm",
  "key22": "21YpojkyKHPPYFpAygySxFaogscyicYM53iXZiSjP2pVCSVXt3rNewHbFUByLi8xAJ4sBXpRV5oSttZQ2RHaGDMh",
  "key23": "5fE8Homhh1SvEAazVmT6i8YojSPNp9BNMKNQ8aLLiaMRcozncqAXuzy6rNStghxYgs815gY3e8dDxjzjXXRwvcYm",
  "key24": "4GJp5KBi2io3HNi9qwfZV8wXXspCWmWhkNyg66QaFgUceHYFeVUUJ27tXMgZKsrFDtaJdXshxDjxCxh8yPn2NyW2",
  "key25": "cQ73bPWBNKyi7ruEc7CCwqLcyDiE5PdkKux6WcBAfYJbebq5FLUKxLDYkZpubFvHmN5nAx5jAJXkfgCfQF4XNgf",
  "key26": "ALZZeEBPFPKN8yiPchWxfqqRXmgybsaCd8E1ppawBR69V28qr5q1bJWyNi57NqB64R2swSWkTR3pHYtxXowWPaa",
  "key27": "27jJzoFgRJV2di1fvarvBpBTyricm3zYEUn1wL1sWAddAnpfbqwebJ441fAojDs3D9gr8vA82u8GkdWHeqnJhLYs",
  "key28": "46hkbMpZ3eEs6F558afxY4g4SJjaJpMNqH9L6wQvzMJvHqENmPyNqoHEmSCaS68tf2McRmCA7LbTek5ggR9Qcdku"
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
