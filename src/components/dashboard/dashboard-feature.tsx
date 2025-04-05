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
    "4X5CpMQJ7R1yTvFTthvEkhbgyx7ZQ8Z1bFVwtj4vFmsLjj9Pa6BY4QVCWGmo3iBwF4L1gfgtCw1Fsu1EH3kAuSAW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RFjP1cYMvvpC15fYSmYnyqnscFWD2Vs5SBA2dmYNmTtrFK2vFe3fVPf6ychusVLnPfV2p3hFui8gzzvvdXA9Qfc",
  "key1": "5G73uBuHpvEgMTeFCZamoFBrqdk4Fn5yKZBZNWoG49x1MN7j9C5a33Vhk7qM1yq3zqUCgdV2TMZvRtgHJBwcMfFk",
  "key2": "4QXoHFYZj6maaLmrxYU1jcWYaZMgpypHeiDooYJgUzMXwRLxceNy2hddnBmJzN5pii77DbhnAph3aqqg4ro1cGou",
  "key3": "8r769WpdwKN7kCkQBsdTSycmdU3VYTFMvDKYiwxH1JcwgH4DECxkp1iv14pdAQtFZfWeiAgFahdrbxLgqGuWFvU",
  "key4": "3RofH6owzTMrKjkv5P5sCsyVDFR34saGy9YJ4WCNaLTFSChM8wjMGRySuVnGxqC2tG3hvskeer3RAYet6Frp9nFE",
  "key5": "3QWPC1X3LLzqGJgy9oNqkuToZiArRyzP1g36AKZexkfGqSVJWP7vKfCm7m2tKN4bSjBUV6QfG5pfbTKeWR2HUuZH",
  "key6": "2ENjisopMkjYYeh6qvkY6eKbL2BLdPkGwfMFBWRP2oZwzhKUfb34kbnXeLRwVbJM4fFSTxTFKtqwUr8JW9FpTxkJ",
  "key7": "5ppuUGbHoRGkau4UW8xRk6kPxUR9TyrYxVxYx1gZDjMFWSyyom8eukwdfkhwsBSWCQKhC75rsptWZjnwLKupWXsw",
  "key8": "NcyGUvGNGwnkCSywUgNwsCwW6sTnhtx8K4puW9YVq2h7yY7L7gFuTpm5mm2QKAdioahEa8D53qFZih2WQNFb1re",
  "key9": "QwnTMngTGbgbGbC4K3GxZwNno3nckRe4X33ANR9Zkb5BWB3TMxg75hQoQ6d95a6QFNimb29e27mbL5vFqL9BdPF",
  "key10": "5jTR5QR68MbWcRX7CazvmgdRfjC1MABXa1yhDUomp5V4ZK9DFmmrF6hctS7u2UtYkPxtb9W2jiLSvqE9BY2u9uTE",
  "key11": "3oTdb5PrsKzkQo41pVt24Jp6d8DEfN9aSipJJ6zjgcnNJqwByRD2kLGGydnW39WD6hsPJwKs5T2zyGhDMzkknUE9",
  "key12": "BXCWQbj963n3FhiqN4LUmLoRwYj6HpoZHkyrpzB7JgjUfxt54xkZ4xi7WWmgwVioSsrswL4Cv2r8VSDjiyudWCD",
  "key13": "2x4o96oeYWTNHFsZXU31FTZaS213F7GyJLXyiRzAWpDKjbGX9f834dwSMmy1vt41NAuU7R7U51N2Zus8s7c6WhsU",
  "key14": "3YFTS3miJ6GZYPd4Jn2QGq7e6NL21LhCQP67rfEHYnP11wXC4VADYDZZoGu1wY8xQsQT6WvpjQX1wn7kAHfPczgK",
  "key15": "5PWWwZD35zbfetoNfPg4ssd7XKwrckhRhy2fxEFMJ86i1v6YEsRyfwFsKQn47Uo8eaxbdkqh2C4nhuvbup7GQRpQ",
  "key16": "4t9RxMUyk5haeHyQmhVBMzJu6ymPWPHiE6wPNLUoGE46JCppoLAAm3pKGwoqGqTp6zGMdJz4RZ73aUsRHpjAo1e7",
  "key17": "4dMSWpREDQHiP8x7LquXTYkcVfkYBcAnD3C3iYkWP8eZF3uAgpGFUr6pNtg7zt1YCYxBE8X5wL5NjARfmbACXSgN",
  "key18": "4jyQbFgTTJuxoDKsT4V56T36tF4QMgBAFGUWFFnx1bznT77grPxZ3t1oQWLkp7JSdZmz9JwevCya7Snz5Q4gcoAK",
  "key19": "37t1tttWHZb6xdDqiWVBz5zuYkocEYmjGKmNoEySrj6NnBgMNWHUJGyZGqpcHBWoaeLo6yA4ybQCRRYNapmjDPS9",
  "key20": "5A53And2n6U3XpaW2eBN2iqxLY7NsLKtqAkmmyhgJQW2DE4kMxtgHkqVu4p27C6uhncmxeq5vJou2KhigFd5VdzY",
  "key21": "5nZMxURWVAiuzDTvoLf5PXJdQ3pJmUR1VePtR7TTovijxAnMZLhbbei3cw71oxwSuPiSn8CD2BSc4p9uRNP1LEFX",
  "key22": "5zEtgyZV4tobBNBN4zfsfuhursiaaEeacFGNaZpNNmr45RMXZbA4SbQatpKVUoHMnkHCaALthX96SYRJNXtZiuRU",
  "key23": "5q2Qadf2KKJA2MqzH57WFkNqGQVSv9ycu4HgkNnkwDesoKKBM7nzb12dbpRmhY3PoVYCiRwm3HSk7s55M4TPGKAc",
  "key24": "2wY7whYjr1FCDKHaR4ufmbWFckMo5fYp4WyhymsGsZvyfZEYBc7ZxGdvCCUhtjk7xci7Q9XuMhZ3tVmYiN4A9gfk",
  "key25": "2GUA8HQuL18jJK5n8SjZnKbG2e7vHPuc8YqtYvV6XsgdwKLDZvr3vMvUPGvKnGuR1xvtGXdcveoiPfyD17ecKgrN",
  "key26": "4h9sEo8tMaeD5DiuzGwq6iVrXL3JEzE6zHyE85doAMQfnYJ8jsNL2TzyhTfWM9n2osr1kMQ69mvAYQCXNWarLkzr",
  "key27": "2VYyfVN5Wv3E4voebUnKjvea6XAoMHyntC9kSeGJq89ts4KcKZuVFirDNxuxatBof2adNLDbetPDtUvVEDcCSaad",
  "key28": "4Ms8MdMXkQNjhWDJbgoecAaZiC93Tv6pVHc3VNzxtNFe1QAh5eRgfUmdeEcUJGSsLSrxAtDAWv8mX43WpRiyQag8",
  "key29": "3Kw2GBrH5Ezg5qwHC2iFUDXwHJv3vRcQzYVdPuBmeZkcXGVM2BcheHsVzmRydv7gEcQpjZUEWKQrqpARcMqXmwn",
  "key30": "5YBhNfAoCLnVKNquVhrtrE325CGKf1N4LQCBzammegiLjTHhkSaQZt4d1mHARGaR3LQHmDCLmY782XjP4sc3pMKh",
  "key31": "3XPJNhppcDRLuC13L4iUSrUaEHd3NEKxkd5ezxxWqgAMcciKZD6B5mGnoKPketSCY8fsobBeGJBwiChCmHZxV5kx"
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
