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
    "5pidojWhH3Zn6GT7e8nwMPN8dZjjfGqXcCyQdxtDH5AYLAwaXY2mHhx2sCSynfLm7MrziWtSFa2WSXy11wb5u3GW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3poLVWg2KwqQX8iBEsfAdYqAjuX3UeTpH3NjMv4hppQ7LcJEYnp8WjYRfTnTq2jXRsg9kWj7tvceecAjiRHdikXK",
  "key1": "2zNW4GGmBAVHo26fXTACine8cUzYnavPTA2TWzxpcDkobvfP4oesQPq27X2joZr6pxyqWW8YQ7QD2TogGAZ5uUgp",
  "key2": "2bfdusjWDMzJkvKBqcXvPKp7hgAj27Y84TvtvJSLG6YTs5jwsxEemPVsAgebCmtHgZLarGowLbxTydCFmVBTUFsW",
  "key3": "2DD9gQ24SAYEB8dUfJvrTSk63ufM6SLfydE1SyFJxBxCCSCN7AaSXjpzoD3krFdJL6BjSd3QL5BYJV1HTYTYNpKX",
  "key4": "5aEdNJEasDe8YUQqzf4j7aGjBo6uD6jCc3jfwqQQvNcH3DbTXfBkeigQG9kAtfKJEj8CZL5qvUnaS96yCVrex4if",
  "key5": "24fLD9e1A9SNhCCTN7Hd9qe1si6NK2p2W4xsdxsBmUwoTQQM1Wvbcg8Z1pNymtWGh21VweR5PfB2dySEB2W3E7Rb",
  "key6": "61R8yKz8iNt66Egz9XyWDq6sEVdG2rPBoWyQ2mqBiDApVC4TGJ8xKQgBDWCA2PBrkSjLpLA5eTNjyRXf23mDMHsC",
  "key7": "bXkWbxd4PDoR2VyJbM9Uo4z2VaM8aXcQgMkGYCgyVzsoiguhM9P9r6FkNcBp3ZZRQ9Ueikc2yJMhk9AHe2NsrkG",
  "key8": "7biWVRpCKNjkGf8GLPFeYty2pTDouwCwEfda7KE6eT5V7pRq5CnSHXe5btqtSTPQQHeFZvW9TMDAL4UbMnbPVum",
  "key9": "3HH8i7irqMj3kEoUgzrdR2M27aCijyNkf76g7zwBYxisid5aVzJoyGX8PrUW71FJhBbpMa6xHs3MR88ZF8zR1Dtf",
  "key10": "2F38joLsQUfDW9uo3Lr61fzrF19Kkf2Y4Dj4TEXogU28wgNWmhzRLrrSZdW3jbriXiTXc19N6fXziaCRERHxAZyX",
  "key11": "3VXUYEkYLwpaEGtgrE5ZBaZH2sjQDFtjEaLZti6LzPgmfyMgvHwwUhjfZqhwnNeuD8XaojqYSjbkdAWgAcBLkXJN",
  "key12": "3SqupXrP69WigkAk9vXe2jHXdagET6Vc6VwrXU5UmzsrJz7EpweVxT9ifxsyLbtHZu7J9varsSuYSrWwxiyR15ra",
  "key13": "2Dc4T8iDgu5vEdgfcXTAsfvr2unHKsFo1pdhS9C3NLavWryLLAEDhXhMxWzYfsdwrPse8MdQNkLvC1SrGkmHMET6",
  "key14": "2rrxjpV1RiHFuw4yM8dtdPCX4E4KL5E8Ph6GNMGWbhNTX6cbPpX5iEr4TvMPSKosnL7ebPa5aXps8wAfLko4oMVM",
  "key15": "5ZFngmSSbetXuPBo5aiJPiwLtTy8imydREHry7VA22gpfysq1mYfAFsuBVqYxbJxC1yAHZA9Mk6btuDmJCRMyLGR",
  "key16": "3xGiUKs4AsKU4xSbitnC2dHCQXxcdXgWCamq6hC8FbhCYrd7KqQBQY44CVeu2STJ6pgB9742iGdzVp2eEK7KH5aD",
  "key17": "3otiqpxjopfV2zem2M2WW2kdVo9jsLoaT8mQqthmVRCSiCTF2JBkNToGVfjQzeLMUaGun7C8WA1H1J9yN7HbXaip",
  "key18": "47WyeLLZJoJwAjEfEk58RVmMVZ4yCVrjAu8oQ7vmGGmdLPWnmmC1mNzcnujptTPCT33E4vgcCcN4Rfj7V7Aig1x3",
  "key19": "355zaDmi1FVuBBtsgvdyyT3JxRJ6LAghYF66Hr48wthJtHNZkJQsqbbMQEoeRbsQC6cTGcJT8j25LNEHgcrxZQTr",
  "key20": "iNNecTcQjJ3AzN3HuNGedZA5TXRfGc2mMhXieiGmEn26F6MBczAYvBp5eZ1V1zVYSMxbK9jpej4tVkbRDALb7uz",
  "key21": "2dTbEVgtYBpudKDA1UhcGF1cdVwuQqbDiAF1mnQb1BgXmE6BXD4gEihDY8pNYwLMQ9tUC1MsCt1ioqbweFQY1qcS",
  "key22": "2Hmnihmb6Kvcq8mz9UJfY3XnVrNHLCBS3Gg88P6pkTKCMPkTMCNt1RHiJ7TobPyRgk29yzaXfQr9fPe8RjpGKtQo",
  "key23": "3KpndqFCQ9ozdF8udD4mDW6yuxCLFVNf1gnsQ6oMNFHoN4KiPiaCDJh8QWFq1Bc2kVG7NaX5QfsKLrmCYsziHb15",
  "key24": "2zgKCApowFg5PmSndZfZ29MwtZpBM1X6oFkTeGxZHkDYivirYCQABZzbTayiMsx7rEoYp1C9PHsMwq7P2JxzU4p7",
  "key25": "RVZmEumoPbsRtafKbR92wg2w634FmYjhxPMiscqs6u2tdREp3gh5KNZo23VBPk9wZJAWqrFmHct1CBkZthKUmZB",
  "key26": "41cfqXgkHtr8W65dkiVmcqFLbUxNJiHYiaLUDs7g9JPJJTmNGFcdyavWwK5qawar6mQDTgrZrjYAENqKGLD44J1k",
  "key27": "5kwmiJY6do51t7TSFb4HNHQyNFRJ5WmL61jMuDMSggccUDdMQtNNVGqhsD1SkxPUBBJWBVPHUiBNQBp24JnSQoBH",
  "key28": "pWVpoaGzEVgRC6aYXL2Pv6si79EftuharCV7KXrxMFEo8D4xX73Q8DywgLgGCgCianAB566Y7E7U865vxAqM1Ew",
  "key29": "41wLKPUsJsoDPWVBrMYpoMVHpiwvxScRfwp8Mqxpqg9HrEGzDKwSBREZGbQRi6t9gUHL5axwLrvP1ivmx2HyPuqS",
  "key30": "3ApNBr4t9p2c8cva1Zm1Sg5YmkDuhDFP3wSFDnoHXARYh1wAfKA9ecxsyPMJKVRDkpdc1pf7vMMdkRFax1NRD7xL",
  "key31": "FyBmYkQLNYsHAAhvc4YfvENiUbu3u9ZpBPb8iC1vXNfjNNzMP715dZiFPzd98Djv3WkkrVNGRjCEHndZvGD4CdR",
  "key32": "4M3NyBzdj9h7kQpBe3KvvYCB1tkU1xEZumZYBkFvYhVoczCT4B3AiSeFPLyLX9QSkRzcizuhxPiMpcK1Ux6Rou9G",
  "key33": "3FJ1gR52B2XJaFJ9fu4siNVZaL1aJms6ziJTQSc4PWnzacnZJGhj2jf6EoCUQrgHtTDdUYHX89xVcFTxTwqASC7H",
  "key34": "4D4b7M92oZrGiyVBR11UBhqprkrfytP4ijJD6wCvkh2hoYJo1KMneJNaSXiv3JV91gmSGvcBfjKYCQBAzHHHEvoh",
  "key35": "jgCzs6h393mUYtGHCpvVBHwcU7UNgcXmr9R2ipBxFSyyrA6KzR3w3p4QE1ygzHMVWjnpJa48qimMVXbZ7G7REiK",
  "key36": "EQbVciz6K3AVdY2D3yBbDPNJ8w2NZPL1TzUNWmqv46wFK4ga9HXy7RSdZKQwq1CcQT28N7odosYH4JxnKbZZJS4",
  "key37": "4h4pR9PsVu485zaNjvLbG6huxUiMz7UHHo4BK5VBKJLjGdgPb1HPkNJKMxxHL7AKqAQ34oVeLqnvSMbKrAB4Htnu",
  "key38": "26ykaUxMzaYmYvLgwGex2eZrxXhqGpdZYmXpGBR4Vy1cPYWZpEmQKGDgFcbXmRqG2QiLgmbWfh7qPpj5mDjF3pEm",
  "key39": "6Db74aCXLB431QRrECFQy1Z6KzYxAX6NCV6KurWWmriFM81NPfLjEBLqqHfENuY3eSRg5R2gkJPt7eb4NeZ7pPa",
  "key40": "64C7vMvMZaUEGLHrMe7CpEem1Qc2YjDXWSrw2tKDs3bCRwCshLyVLYVWkrX11D4rmnYSHyCSzzUb59fChfBzx9HD",
  "key41": "2Wnk78FQWwzWNPnHkWcdrFufT5fhMmoiFzpExeJhZ4UVLKv6wdsvFv6rncFJttx8X7Jyd4Zjt7sUXANFrcaKcwaQ",
  "key42": "2iDLif9b84qfgh5vcaGw5meKxfabqgkcvPv9z2nFBPjNuUVg2PX3G3ehzRy2yZGi69bcfzhy72wtSh9u6o7jW5od",
  "key43": "5gbzDsrfz2k9v59o3ehLbwN1oMBekwWFSd9De14TxUjJKkrK9G6wMWjVyKr1SgsnCZxpaZUNhpDNMJR9cYhxVgi3",
  "key44": "4iX3GZPNTeym1oxSNNwn2F9C6K17ppBYLY58T7YK6EVEGtbp1A6B12W7jvxeU16BgjKd45YLnKBhHCNLKz8b6qW2",
  "key45": "2tSyJmiiZeyrTAqTTAspAN5z2kkVZWhbhSEmWz1MGF78QvrGeZRj7MA2BAkfADHSdVs8DzDqdkKhr7NJpQgM7cBk",
  "key46": "5acWbGsmYP6aSFCR2JJ1KPgn29zr5Siy9rgQPXngfJFgmf3DNNYqi7CYEZGJRUid9tpSFCqmAsELjtVw3fCrioEP",
  "key47": "3KhLwwwonUxcxa3juvKF7k4Xch5as5y4N2DYS1UDvhhEK9TeyWEWFCm2Z8NBAG5w9d4N7WYSnhooqEGFh4FenQr9"
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
