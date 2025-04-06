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
    "ho9mdxTmUdzcxp5GS8unWgBDa3r7BKVf3EUg94WXZj4E4Chsf6FBvkVZSPEEto81sfyL9djCL8aZxTx5psp4z4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vjMbg8jN9Y5DzhHpY1BswSFdkh3FV3HEKc4KdvTj5fyTppraZXiWVKSQhKSS1uV7w3MbofFGZpian4RECCf7E8Y",
  "key1": "4cYrhaByNbhDqtH5LYY3mCgox6vCtQRYVNkULueuo1NCQi7iRzGhyn8jW8qNshgMzFp3THktpYPy5BesgSF6cnys",
  "key2": "545SvNMVq71qrYqW9xPEJwsWfuEdBNuPnBZqeRSfqq8a6F4MNBsPEeT33FawkHprxELfHRr63eZdCvDXD2RDeDck",
  "key3": "2c5GV57KhXFGyeLFiH8kFpU1uxBej5LJHmvtKSPkgSFgLL4BAzXGeSnCHQnqdGCXAwfmJ5NbT5AUfn917rfEC1wE",
  "key4": "7pgVUM32kcKzKoRkyt97Rr4Po7jURvn1fy3jjFNqkhXBZcrNvFMy7y3m5gipm6DNkCcmFbfh1w7MNhqrY8hVBgr",
  "key5": "481cxopyX7U1mY9TcyvrcVTze1yKPA6UQbHrbYtHj5HdW5UQfrhBHQTj7mBBXbubP1vpu1QdF1MdJSqUPRWoKEMq",
  "key6": "2W2jHpY2m2FLaZFX44Eb1QyqEbjaUTrXr64qGp6iHqUMDP4fKtVvsAhkCJVmPwJZXxQ3JVsVJugcUGx9FbWVPgfc",
  "key7": "1EmbR1Yz2RzH3Xp43PGRGZtN7k2GYRonhZ9ivBoSwHdZ7xQ4vSzbND4H4WfEkMd5bK925aBrU6jENGo2szveWSM",
  "key8": "3jhptmZA3J2jv4b5NSUS5VPWVLGATTXY4uu5MLxR4JWsDXMoTbpsB6kgB4n6KTmcjf42XNAhSe6q5ryr2MWDLbN",
  "key9": "5XMbP4XHhJE7zwrsYVLaQGv1eKkdNVetzeEe26C53W6iDZmrADDNnN98qWGr5J5fuayDznE8zJ3UxPSgt6gbdpX6",
  "key10": "5w3BaYZUNi4kUqzf3Zdrtyb9MSYSKDrPAQ5zkL2yfCmLkwwKYYTwidbPof159HpSp55TALCspMWeuNGn1C2wCcJi",
  "key11": "4TB4xYzZrCDvvZeRCsaPaM2itdVXjRUQorx3hkq71Z6efMGKLv8Xk7RxUiQcZjWXrKNGz9ZcNQMsv8KVHBfLCHh6",
  "key12": "5g3oNsvaGzymHgufF7fCa3DYiqmTSWqTssUGo5TyqzL1WCeXp9NwGNZZ2giPjSADF3GysZjZdGimHVzguT88rka5",
  "key13": "3J8iqbuqc4X6tBir1GM9Tv7JfDj7KsokRno4Svv6D46nHJrc23EtHzbet1qHee66FBtdbSxf777mzZydhtwT1pb4",
  "key14": "3AVnJH9eN1Wb61MM3EWSJM16X3Pc41pTXqxUAq196WoMTiGmNyfBs7QU2ZnjUxiAkesxWt8vkmYPUaGP1vJX141a",
  "key15": "4oEsoCj9MUmB9Yxw2eV4T2nHsCFahzU24o3jTpF2FMM3ZYByjsKkfKT3EmFmqWnCQfrvcxzavVdvFwuNcyYbxe6t",
  "key16": "bMqhkGii4rjsHoVu4E8PudgmDupvq8k2ReNbbfrUWjShzJpbz81AxAvMHkySyynhShMDVWWsnftNsgzT6q7M4i4",
  "key17": "4tDbb4TBehGPhG4PkTteuMjzcLEWCXc6CWb1Zkvu6X6GxCwLEVEDY5hD8pJsA5mu3JTzeeeco4i35G3T4175MxGV",
  "key18": "62Eth4YwE6ZisWduLmYTYKSu6mGLJRR1N2wBPFJPDQyMExKS5TLykDiB1FkoEV7Aoznw5DjpnEXrS4ABZzUVfnAd",
  "key19": "NmiB3kkurywsgDHzBwJLppiFwJMPyF7XaqRZr2KGatNXLMaNSXagvoayk8zsVKdFMgf3vgkojdJPECk88MT7sks",
  "key20": "3Fy9E6gXpM3D4ts3RBfXtU3WEDHdy8NV7EjRasszKQSm1iknb8hXxkPR4mgEXkVUzfoguE2Ck32gWp5GjcgkK7cK",
  "key21": "28zqwK4SXZCbsmXaUze2VAaDqN3jBcmkkZ6HyziZJwge1m5HEJfkTzQ5NPFzxCoWMyrRUcfSArUP9yQKf7EWqWwU",
  "key22": "5YBfpEaqN9hkABNW74wAUsahcuoBgmpEzJ4gUWSTeCP5DvoVz2yUEQz5kVs8Wu43JQWB1Rvmy5jzk6gixZPXi56j",
  "key23": "2TqeEemDu2RBKDcDktxhMgzMuC8xuYiDjuPXt1BmZxqM7cFVuf3XUtuGPhKNURZPoPbrP2B1apfteV4GaYowWCAQ",
  "key24": "5Ai2METVxyvrh7xSsonxG4e51vmcA2PoX23uMLwCwumxEYYycWvD1LeuWg1kbwcAwTUULGw7kMnrfvhwmU5bmoVX",
  "key25": "4hpsMLZBtCKjuH8ZD5vkRv2sbeX2nRjjoCfsTFHFD9hDNosUcPJz1RbkSu6S7uyuWWXAtm9d4AkPHZCDQa9NT457",
  "key26": "66p3KDuy42pWPZkLx8CKZXJRqUruBmwyrxvypw3qcci4grXgTzpGYAMouZKkrxJjTkLdkprU7c6G3vv63q7kMAh1",
  "key27": "2TwjXvJZJ9WE1gC9V6MbhTpvqDpPmirkwj3YsNggoLJbHjhcu9NJeijkdDpnuuVjXAWutPpAtQiLQnJXGaEX4QY7",
  "key28": "4nXi1QQjmSPx1kbWreGfDrXHdAyicnzK8YoMjMDDtqsiNamHryuXwdRjscW6FPNf3DQg9W7Q5hg6vswnkpoa6LZt",
  "key29": "4N8jjCdWJrmGPs1gZ3xMsd1pFicz5MW1HafVHrGKwWGfw5rQCJj5vadWB6KSes3nGpSnWhkfHuU3TPXfy9EZNoZq",
  "key30": "4LNvwM51nGFovyE7eeuihLWxevtHtfvqZWnqZjtFxAWJBx9tZVwYJse2usBycPHSz9tuN3zuNrkHov6bEwGMZCF2",
  "key31": "5LAoypMWtq1LbezGme38yQvK8uPkCwZ6BiTRjZpYkLo9aHmyceEdiwdSaEtudtFZ44aaUNHF2PMLBS27Wr6qkcLj",
  "key32": "5sB3j2KUNBCzvaxv1kvnm5F5bpCeSwNPv1PTwJ5kHwoUmb4aAMXFJnjmKfyXZVHzFR69uE6GCRNWftxGDaKrHZGY"
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
