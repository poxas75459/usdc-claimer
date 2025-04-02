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
    "3dzNHP6wzZQT7uKpay5NWMKLnfFZLioKM4rPViWCPP7Fb7nmzonSP4efs7BzfNBKczQ2ufPtxyDtQWKAvRXiHM7y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BQyqUV4TbeUGY8ktF9LNaRQqNs13Gnjra8rQ5H5tmhUxvsT1cRMXCSwGk4amKimjbB8XvamxFF3LCkg2wmLvZAJ",
  "key1": "hA9c6nHWmoNhYTmQiGq2L9VY7ESF7VuCGVnC6QmswS2TEZ9X8kx1jAx5Z1Hdw3qm19sHY4qDPUZwLFjPnM7buVd",
  "key2": "5CCNKVPnrqHh9grWUrYfQyrNYFci5sm3214obwkXZrDC7fk1XoewLa2kmYCghDKPs9REk4dNLANFj7QJAL5bHxzi",
  "key3": "2ZLFAb5cgLfFiEx7qqjTRrU1kJRDFfM9pbbMtferrCFqjAZ7Zhe5tU5FdNvegJBuL51ydWZxXHsficWrfpYQx6pk",
  "key4": "4q4y6rKXNfmgqLgSefJkx4M5RLuLsh55UiLz5gSSAMZGGa3318LrZW5PjQ1k5G2ofuTBQRfpn62s8Di7P764gcV6",
  "key5": "2yw9p3nPNfkJ3TP91icbXYsWzAVrah5ZNmn6sqahwHgKLwUPaKNM15pjQbjGBG4vhokB7bGHF4WKpPqRkwLhEKtg",
  "key6": "5hDkiU5JouaYfZmx7mY8mzsifjeMUpZtHc25PL5KSyxnQDxR3MGdq7NKXiac8PBeVfxdpbLrryw8ucpTmRZFYgT2",
  "key7": "3gNgJ7pPaATYhdgWCvjnaRSsgCvVpjCBmfhGTSUXPtV8x4D1QqvKRarynDS5DheZxT1MtkfHH89VnqUvQHABpbua",
  "key8": "4Fe9EFVBzNU9MS5yxm189e9t3J2N5ynEp6T2ppAg2K5pJhUTECrLFUCVvDuAdXSs1kbdhaNBavREhVBzUjWfiV41",
  "key9": "3qpJJaUsqkGH9XAMBkvHAMBrFSgDXwfjLXAzVYcmL2YrJEJi6uJyVwfAygVxroLyYR3oXxfHcYKYtEnTzekXFduQ",
  "key10": "36ThiXJX5tQbiCM8ZCtDxoNU8K3YvDbQDL8SAdRcJLS1vAYDoFa1TthfwikTFdyWdATazMFAEAvwNhCiMJ1i4D6h",
  "key11": "HhUnLP8bpEQ4KSjHaBZB6xPTshh3vwCdLh5TUqwkLHxbieT4FerpEYG151nq4GNTFtfVRA1UVecHx62pUcJVYtP",
  "key12": "4uPVbKxNLB1LkM72GHyhBm9TkDhJtwcJJKVtqao3FGrSSu8fZS6qV94ui9ZGDWWuUhGEM9efyW3vuS3xtJtaHJMY",
  "key13": "4NVgrdg8xnP7ethSBcWGDLSi5FUQDE9X58PY9ehqpBs5wDgjLKiRGAajoZBkC2oi44ifVvjcLPqJvTeqJtPFeTnV",
  "key14": "VvKJnoVFAJiqYzCYbdZVR3EgrULngZ8mXw4L3Qwckv9Nsgq9dt8jcesnjF6yPZMDs8kWALxRMiswmSR3FbeXVeP",
  "key15": "3iLh2bXFYUYziZwH13fJvPvx1bJ7RUJGFkpBmwrWXUqKDpkd2mgA7HYyxSFCEPLShHpPnFD1URSz1riVw1xD4ZPN",
  "key16": "2mm7gsA5cHhpqtVaUzMcAdRxS2b3UTxPYrGHGAFGfrMoSrhfkUFn4QmWGjM5V3SPm14iVgCchJz4Uu314mxKfBJu",
  "key17": "24rE5xaLREvbSoFXRLfBSgzkUeNJJ3tFvAGckzGrXdJAvdaCYWg4Ltw1Cm9oLT46KqdPDPn28y3CqvoEHeWVRLzU",
  "key18": "58WYii3HxpzkP4CeNxpirJyREzbGYoRJzs3ocjd4fvF12icxG1wjt6Zw6H2A1oQKc9HCp6qrSBoQv1aUsA6PDZGu",
  "key19": "4w1uBtL54j98jAdUtmSjCUsQbnaNAfAbbNWKxNncnfYzmMWsERLNSNX5mfDbFSfF8hHvBVF9JwoUpMdQKjZC2WfC",
  "key20": "7FPwDETrBguYYTxbVCX7nxzm41SRa7SCWmgRistRT3H97SxdRVT7LkC8K2RfCYtUon2AihVDRBj4pwKp4tYCDcj",
  "key21": "8roqof5oEbdns65W1H3ygkAfP5AeHFw8WW8c9aW3h2JfXdjnFeFQTKMzUrRX1qStELDuxk1bk5pyHhCtrUk7na8",
  "key22": "2yAY99CQTYDmPpKWGUS4ui1aMMhiVhCBsL69n6UNJ5pTV5aGyWAtCnFy5TquzX2PVsLmHuSf6JpqzVsjb3FksrnM",
  "key23": "hxt5NEDZ6TZ61L3g4NadMNZ12xdQw7jWcnMeTnpT77A6SSfuohuk4ZJpZQLuzWYZfs1WpSXEsSF3esUwchUzxJf",
  "key24": "5C8iWpXbriG8Qe5cy9c3N3RXn18rindpzFB7jwqYT4uJP6V9kraF7qzWSTZ8wJtPo7qhXf7p8zD4upuJ5yPeD9oK",
  "key25": "AhBYZEX8H9tf7mpo3ahpCobwoEjEdP3xPoyLS96dwbFeBgRcy6GM6Z9ij8UPMv9BydY2mpM9wpp2SoyT87DmC6T",
  "key26": "5k6Rc7KLxX2dTmbmfcUjCP32L2V2x23NCkh4VAjfbndC1hCGv7wBCVj4QipvTtEuyg6YHtbjSaRtWXeKihp7w7b8",
  "key27": "2T1SYMYKxVEGwS5nnrQfjv6NJmK2hjTZinvGvL4KYCzMVe6yKJJTdACSyXhFWF6oMBydXu8KBQxWhCDeAvkJ5Ub6",
  "key28": "4oLc4PGS6za8RAr5FNgeBBvJRrnVEx9W9dbn4XQzP6s8HdmikA9ioSuQCVzG1VPpnJBbk622SNzLh5e6Dfcfpfwc"
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
