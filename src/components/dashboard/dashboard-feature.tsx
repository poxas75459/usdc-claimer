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
    "5SY1nVaWJyYpdzoPTbtrn9vzkBt16oiufYSHWhwRKB5m8BjZqeE8xd8ZsggFaSaJwXd1KMh8x8sh2Dj46Sot6mZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ct6cgQdvdA77gpSJX7MotkTt7VL97N8va5Tc1N4NfB2HU2pMQnvdLieH6B59X5egzPWkYQ5kc4cBfWnJx5p8P1x",
  "key1": "5sSkjQdjghiXDo5gbjNCc7ZjPU99WxSC7gCDEjhJUMLy6YTiCcm17nvZZYH8wQydNBwiyEdSa1Bvr1fC9aKYXcro",
  "key2": "3MRZNniqJ9pj6aMGop6gBgtg88VXmG5mp5gaYM4Py6hiZ61Gh84t197kB6Z65DxCMTfUXKFsJdrkAFZv8cJeZ6pk",
  "key3": "5xiPX2JHmEZgBWxkC6U7vNJn4N8qAd2vNKacqqipWNRCdyjuuzyXXQdM1kFrx9ZVybPJHiX2x4JfqK7xoVdm7vD6",
  "key4": "4GeUGLggS7ZP1Fy5sg3ByidkT1S68PC7E5mkVHoYRSHkwGm9k4AjYDim3ADFbkcE81KrUwHdd5KvohyNoSspcRvC",
  "key5": "2upQLCurrrfEyf2F2LocJbgoPeRTJ1u74SvjFTw8Sj7v4LCcFDHRNbiB4TTzsvcUUxFgRyAEqsvJqUrtbjytcCyD",
  "key6": "y6KJNwkxC1kgkQo7iCtM9AFGyugMLpLWifL7uxXHKDyCrgcT9D91YB9D62rL1kg6nz38RSgjSxbqZABBmtUF53c",
  "key7": "3MhGHQTxZgSvRf6QTJ1YqQV6qExbCvroJu3x5FDGE5VuUhdbVqHNNo7WPJViVNXCkB28ymPYuNmzES7FG28Ea1VN",
  "key8": "43M9roxzxthp19ewtfGM3W447xKjx77xMUYL6qjWLFyaTy9a2y1KNwLnfMigD23cieycHUBM6UdVjFKK5i56Y6My",
  "key9": "3GkjFe8EuTfQhwrXzm1vDiTL3vUZQQx28JXnipZDdwRCqaYm1Ej32xzcn49XyxXKuWigZLjB9p7QMJPbpErccjAL",
  "key10": "5HphQiHFQ68yVLKj7rjUk9thTZCbuFyU8a7DvszURdtqmFErTgmSH3ubqSswzpnPQ3n6dfX2zjCkK2szBURjpdP3",
  "key11": "4gYWtHpLL7arXDCgBfG7SzXcx5jNeqKkRsHVjTAtPhd42BCxyYobJu8wyHDBpXk6L7aTbs4BmJCCmWCA9Mn7h36F",
  "key12": "3VR5vfUq1mDiSX6T3jRdf9xV4TySsLetVgF3WUQc4pQSSGXidozgr7vcVU8TJmUys6CNQAQu8SPBhhVVEFMXXRiN",
  "key13": "595KqZ8PXdvJ4MbqiHNKLrcWfPpz8vfdW7q63R3sLWR9Qbk9dPVw5DnP9njatgRgs9yUpfu8RVXJquFdHq2yC23U",
  "key14": "36bLpCKQhYxJCPpVjyJPwNSKBJaGHe5nAeGzckGArpT4gBvGspqkPZDFj2r7QTKEfLscSg8HiCTpMqWYP3ZYa4w6",
  "key15": "5fUfJ8FaB7GE3FZwnKGWYpZDwSpFchvpoc4qCFykDDJmYvjSC4RRmjrjTjKu9uPQuA9ce2AYNDcxT4DuZbpSNLSb",
  "key16": "47zziWgxURPJuHLgUkiB7pXvnv1wqpxiqaSP7dndv72Jeiq1WnbH5oe76iMwS9j6jxezuupCHA2YtmchYcREkTCb",
  "key17": "2BygihhK5Coezi8MwbTfA9B6uFLkKmKpvHiuTiwXzGzKrp1Myr67rxANaSFsX118obUfLT58NaZrQFEbxiP1qRmn",
  "key18": "4oh3158JXpXd57rAh6x5EtFyL5gRKZe9FRzjNp84nZ4Syx7egwjMDAniChUoEPj3cYFTCcDxhhD79piVLRsps6nM",
  "key19": "536bvg7XJiPkvDt6oHmGQDWEjor97YGd3R9FK8ix1BPKN6Qsopqb3GUH1jshbXwmFeHdTxSKkkTN73GcGC11Mq2z",
  "key20": "2TWBq3DngfgCh3xDsyRje1TbmFcGDEAyptYsxE3hnd1LTfqKBwpkk3eE8gWhAKZGZr3CPSWSVDqyW7m3puuwKtqZ",
  "key21": "46jPV4bjypa58DEUEppHQWCNnmxzNLCnZejnvB8C28hiyHCwj82ByXDeNs2cAYdf5HS9CWSXDwSp9emjG6CRAyeX",
  "key22": "4z4NrrvbvwFStbEhUNghaeAygcYpAaqsaYNQkBscvtx2PvJccXY9eiLi1cQsPWBCYWF6x96rrDV4oKiRo2LgEqqx",
  "key23": "3Sk3zi4Yf6vsfJfhstGQmLRZLwvqUzD4FsUn8n327aa2PfZPHXT5NVoXtfiqrsX5wFLyhCXPC2JVoHMcWg3eVwKu",
  "key24": "zZJWZAMfac6cgPJUPh4ZLekZuprcdYwBb4rmVUAX8rgkTCsQnBxvWtMNEz261HbvTZkBFtudwfZdmJk2ZFrGEyu",
  "key25": "32P1oj1YqtFVJjBCjv44jjkLXUyjSiZzh7kXF7bobcXJ8uaY2Lus3zU1ts9Sb1K3ocEdoSMccfqxsPgP8bbGouF1",
  "key26": "43r9Wv2YCTxNLedJ6j1G1b4o9Y1utkA4jqAe7m1hdYA8AaLTZZMtDy2CYRyPYkPvyJDN6V8zxQgLgdNYfPB9fcSe",
  "key27": "4u5yHWNFeitqCbJRtbz5UnMHKVQNwKV72v2HyGKDobg2g1sL5hXprvVJA4m3BnGqD2vrmp7gBcVcvji8haVCmECj",
  "key28": "3KBwboXRHmc7ZWdLdkLaLWXm6MvZNdoNEwWXhFBeQs1YRN617PgdHPYEaLZ35NSUGbSfR5kNWvGndg2du8ekspyE",
  "key29": "27MxwhkWHCBJLJrvxZbFztcR6is6CvB9ooFuiicMU3yD7zK2tGqktPf2X8W6pMmkoUJtP52P6GqtKxp3yNeY15S3",
  "key30": "4mX5bMuSaDJr3JoZ7N9cvJFGjk2DpySUxbNTeabZaiYsDdCnBCa4bueHjHSamoNVEn6b844afQDynqpSdgsyDMuA",
  "key31": "2kcaRHZ85w5UxWQsM3bN1Qzg7x9KC4UHrwPvbL6oicuSMcR2oxpN1vH5Gazeb83nHGbzePVoJFoaRrpb51tfLYov",
  "key32": "4k7cYqdsnPj9G6qDVsy8DRDp5b14z3Dcys1cywzsyZWKahZmW5KxAePn85CmL4zuaGRN9F79ixSuEumkGwxxN4B7",
  "key33": "3j9FYLCTaYjWKWDWKzjL8UMfK2rXGcpYCbVoCspmuvZE5n3FD1MCh4R1UzgZ4fsEA4hGS5gg9rDaqRgh7pRbidAX",
  "key34": "39voDe3cQgmwoQhDn7VRevjBwkg5yEg75Ez3mNbDEJJqMa4y6ruw192ayHcckLkcHFepidPCEsPRPLNxUaWtQWs5",
  "key35": "4RX852wrDfjitMqU7nbzGkigitABtPFPdFbiwAn81tmjEZVn7DN2SWKuyVnastxDTUuUfHYi2mxHt3NCSTDHgdfP",
  "key36": "ihaArrokGctLSzt5Gpvc5iTM3WdJWqr77xsBcFPkEjDm2iPhMAgKKGb1yupLY3UGvbMnnKehAHvGjbSmyCsUKB5",
  "key37": "3FZ4zBQqGfikedv4ugHbm36wJEoNEbFs9eMT8oe1ZqxVxwnFAN5ZdgCHAmepAEakq2YvkpfzqFZmKDCrw3RTm9A6",
  "key38": "2FtgGbafSTinKRv6paMvKLrntUPnF5oEXg5sz5pAoqkYmiSWcwuxogfB3sAzFcpRs3hP7rsLaLKJiCbSqrRV5Jr7",
  "key39": "5mMQL2ouMDQko9jmvEosCyuKVFtLUNk9CgUDDgxKG1VNhzdG3Wyfy5mpQPcMnjDMof1AHPvUBVDSR4sJzhfZC6iG",
  "key40": "4t8NngqNHsgHdm7mGXToEufhYDF7tKuHPSvQsThSfV5Gfhne99aXbCXrsBj6j8qCKQnPPKHwCGTzX6rtjPTLAion",
  "key41": "3B7EUT65UK91cbE7uWdY5arTUCuv39h8vqNBTSJgZCm5s6Abay99MqV965r4Fj7U9uLMeM8ZpuDT2df8YxHFEeaG",
  "key42": "3NxUyJw5JPv94ZM2gDHvscptWEMfzP7ja9FzQ98cK3FFoZuxSRsrj7tULAXMYLZTnkfrBoq4TaHA2dAbNQk32A5c"
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
