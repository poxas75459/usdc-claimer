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
    "3vjGmmVT4V6XKucJ6nHiUtEb4Bj5TJt2jfP21cp96yZhWpHLau1cwJnMschqQfUeb9ZQjZnZcCAfvkQbN86onN8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VK6K87nPnhA3sZwxLFzQXxLzWQLwsF1EQXpdSHxz3zjE5uze3GFRz659Ln75PuQWMeGBBuzYsp8EgTZWn3EAR6W",
  "key1": "61K9bX3hsniJEH3emFqv4xowWfyPVJfiXibvaA5ou3M1Z7nWw1hzQ8oS8JTkDf9C3FdmyMgN3Lkn9pR716cYLUoU",
  "key2": "21pLdEr6VDPGvmfeymacd3oq4EYMV7aL4Aw6tMqyhkWNh5smEbWcBqYP1m4sJ3g21irPdKb4EaDxAyz4yQ9EoVk9",
  "key3": "3n1aaMQ579yZey1vJFYJBuVuawcy6fVq612SmYBVEVJobpVLBpZgREauTyNNdSahwUQN5B4KNjcQtYEByRLWsk4s",
  "key4": "52Bi1JNhYdP4tf1tEq5rzN4wwxdTya11NaVhVj24a9my43sdUJsrdXgj2rfdmJPdx4TzdHbYCfY3mBUyQBucHMcg",
  "key5": "5tFNQeEkNwdFa9FgrTUTFUDJrGa7shLr9vJ2C8ExECkSGsqu8FWshKGrFZy6vZKthDDTZsBZAafRfc6de3H2WEvb",
  "key6": "2tKDrqfe484ZCdtfHdn9wATjGBvZE9sYK9td367pKw7uq6J6TxXN4QqZXza4C6qAXNfAFEwVLATcnqqBcfT6ciKf",
  "key7": "3jwtrLayFKTb7sF5jBHxS4oZPmQparTF5zhra6sjgqBq38BiGcDahFB7QF7nBTAHdgsmkg6ZqBQFtURqMW7a7XQZ",
  "key8": "YSbLa57eRSP6EBLSGatkyRvjKoc8ixoWNpLCyj8qk56XYSDR1SoR8DWvfE47N5EUpmFedBKBwMrztFxNtMokks2",
  "key9": "TegSMBGSPNSGnzUQhWFGNLVj81vDRGnzPJTZTde6rfRbkCe14ovph1nKA3mvD32zkqeEMYK37U4vKuKQ25qDF1s",
  "key10": "3ZJPacKHzgfJCR41Dojtk6yz9yAyTGKgb5xBYhbwxgPDjrfjmQbyx9dvn74r4CYUh2j51rx2TPzCqwRvUkqJaFQf",
  "key11": "Ln8JRua4KM1PvFoUa33aEorjEGJgEN7MKHKByLR7ZkJvU37PrsB3GRVe8GUTD6EgUZ5SzrXzV4Ad5GMGvVoh85M",
  "key12": "y29Lqo1bk57p7ei93gxfpvL8HftnnKvMTLgTpVHaAofv72DJmCPGjec2znQqmEkQbJoGJ2PR8oFHjPA1FmLJfDd",
  "key13": "5eFipM6WNmSd9q2pPY9JrAwsbe4T4UzqrpnajDof6tLV5b5YqRi9LNy5ArZWjvwqj8PMw1CVLtu6w69dTWQZbDMB",
  "key14": "RowWngMCf8q6i5xVh6Jh88bYT365mYj4bCE9mggDqqm5PuZvpzkfDy2YbeihSMg41Lb6r4qzfof1njRBENTbpDL",
  "key15": "3r1pqGcTUrM7nVqBN9JdStb3ErxxHF6HwXtMTTcjgyv6PA2eMciGMX1ae7KmTkQzvcaSoRsShAMaPWSeErBqHHmb",
  "key16": "2JdR2TPT7KdittAojiPAMTjum9Nx9vZ4AyWjWVfJKRwzgR4fkJqxh6esqFDqyaKT3sJvyAmYqJrBq6FcgzonemW6",
  "key17": "5C7QNhKStsZkSAV3B9YL8eukQZhLBowjeJjoqK9GvAa9u3jcJw2UceuwrmacaGb68v9YGMYZXeS9Wr2yH4i2gM48",
  "key18": "3C85SR1SZmYKuSTj49paqLvGEUtFhnPPxVLUwdWz1knNcgaWjNcRWEpSZPJd5cdgr5tmiQdsrUmXjGwLPuX882NU",
  "key19": "5SBWsw9jtee24gVifHMtxXJJ26zuEPKc3WxBBq2Ka3At7hw62zrk2UwL458DsJdkenrVDZtndRkWR43ieda2Um9E",
  "key20": "5GdQDRXYLCBhZ6J8m9ueLjcHJZJMYdJHkUubrcckkkQoJ2ESgPapj7c79ocKfkwQN4QWBYdQ4vqFVsSP4W7e2X8S",
  "key21": "559jru5vx6bA9vjSnQLdqyYLjfZ8u5gqEt4a3s7Fz3bxvZdrZmurLAcRoiyggHfivFodwyEBhujXYQreAmzoUE3A",
  "key22": "3kQua1guMfqd366Mf7voSFnms576eXACVpXzKeW2vP1WxdQj6R3d6yXGnEuyAjf37u1PTrYYfBaCw3bJtRJg5SJh",
  "key23": "r4KgBN8TZ9hnTF9qRPjoYVWQ9KPzwe9yQv4Smt6x5B9FruoqsqWfDTJixoCCcPUhXtJBiAmYXxBXTrcEKMqXLcd",
  "key24": "58o4HHuQ19LPowhrzdDLRRGeWY6ycbeYSQ3bwUVYGaT2KcRoyKsaZFJS1DjQPJqTq4WrM6yMvvJtUhkbz4ns2wC",
  "key25": "5gDA4QYpFwyZXbW5436Wja3s6e7XS3mczNssRC1jxPxDdUDMmWqERL3mx6NLiEBYtNBETPvs13HCEskpgVwRdMcK",
  "key26": "2UWEY6yEHCDX8aYqaJh8ugPZGeDnNGezFS2obhUibm9DAXB3tk5AtHFiLeyNL5y9KUZW3Q6bsSBPtLKV5XAcucVW",
  "key27": "2sqGfVoqwprPGgNb5kgQiAjzkeys5e3DwBQvcjpnRZo97LWDTLitUVsxjTKfjq2VmPt8Tfghw2G8gDFqZyeonaa1",
  "key28": "2sX6QYo8aHoQrbYHyr1umNqgp4Z8U9pyh9R5DDTmFDZmKvogPnvUhf61TSTt1bQPSh8uTVZpDvWTmQd577AYuDnv",
  "key29": "LhbgdHum41jvrHWDX2zuKFPWizW1o3PBkzVYZMZTAgig1uZnWi3Gmx9MEsN5KrYptzfMr3r4K6zAMFDCUXBTCvu",
  "key30": "4mZghHGXG46LNd1gJKVbuN7ZRQWwMmDQjcuB9N1unVFGCPs7oKKfMi4ydrP8JWyuJeK4ZNbJwrj8LgZx86psGNjd",
  "key31": "ir3FzzPUiQYV74pC9K8QPZJzWCv4ovWDoD6Zz1KneZsAa532RzkvBDMLDcAsWMbPQEgRzZdsS3pqQxjUvz7EsmE",
  "key32": "2ym4FFboxXeEUz6ALQJFTLp8ydmcDxL88r2HREQMPWAzuEL9m7HrJ223v18aJLPpEwCio4wG56pjr1LzUPEQguUQ",
  "key33": "5DNQRqVJ82p8oiwZcmEq6FJS9S5YYV5mQM95WCG1fNJQsh5zpb2wEkxdgCFzTQPNzQKDHhvGnrYivNzEXRsQEkSr",
  "key34": "2hoyDgRWFvDDPoyxrunNkBbP8tTmmvpQvtNYyctXv5A3vUtJu3GuvbAhUFg4zLU4wAoQcvtJfHDU2rh3JYZTgqcy",
  "key35": "5RqQt9Z4W5xg3yjnquzd94mRw8CgfTYQcqFpBGpFGwWXAjXWUJw67PdaNRUizvrswkYXdcjvnN37nvYf3sc7dCs6",
  "key36": "BHcL4tG9zcaZkKzkjAwGPmn3nPXisVZPasKspWEV6nAWTEXxqR95qoJa6H4s27huTQZ5fBE8kaWC8XPgyw8kfQL",
  "key37": "3gufciJTsr2zFU3pQrw8JdYd9inoaNDX3vJdCk56zkD1ST5MFSgdVMU9sXgtaz9J4XTv5GPyeouxmmPo65XjBdKH"
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
