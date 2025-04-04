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
    "3vFeskQ7gg9AWvSUbqAYxza7oGXot8Ky1ynXsGgw6hURQcp4ZJRE9LrWmKjZxJaV6PgM5FNmumRUjYCEM5Km8ZLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ER872pURdoTkraMK6jBRnrAUDRXkJVhvo9tCHYmXyk2XUQGveUwUYSTtHF74X4Gvc2kjX3Gwdf898q69fu76p85",
  "key1": "3nqGCdLGDPiuVR7AkFSXRBRKEbXnrmzSHMvhMNkTrTVaEvazHuxpnVtVBGMw81GomWFUmWxd6xb1UrTD6HjRDntV",
  "key2": "3bD2iFgBk6yWgAf7VQZ5ARJBskNcAHv2vsrd6FP2yDmV9s6L3qJEUvNWttXkp1xapvk3PzZq64Cs6YL4bR3ngp98",
  "key3": "67oJp1VVhmgyx1GzdaDG11EBHqTZKowEp9F9yFo4RgawH2YBhmKsoqMb6xoQanhPa5EK2xJCnoA4HhcsN5ZmFeKN",
  "key4": "2P3nSp8HN2YgbADt4GvKFXbkJQbc47xxYFzRTNJTu6XkmFLQosXcVuHqc43t6AtJHYCePDRriAuxKiPxVB19zQML",
  "key5": "2CjZUj21UUAn5GR8sUQ7TZTSMHYfhcaDanuuX2pMo1cbS8vp1hzMHRQu9FVh4pezCsptfb42QumRsRWR2rTunTgs",
  "key6": "2CsWTmZj9TToh2qwc6vfn8EUFu2R4yNG7LzfuvMyNypsXVMScGW4M9mnVBRzram6G5QoQ3oVqQcsELsd77FYtUNG",
  "key7": "4dTuvYvfWVRBqXte9cZmDC45UQXNUN3Gg6BPrW1juLJJ1HqKwnV8m55fyvovQngrYkim9QU8e8uZgQwdYkZieF4x",
  "key8": "QDVC5vMyPVN5qHCLcX5vR7a5caHucjBXanoFWLnBsK8Mq4qNJRMgHpttcFNxtLuMsmsJCKYPLqJMLWQtp6fxFVa",
  "key9": "4qAg12Sr1Z9Lr3DNkxtZWaVBm2DDBhJjN5VaMNB94wxe2ZSs3XUsb7ZYQNhrDtzDuzW4JS225p49TUfRUtAwTipz",
  "key10": "ksf7qoU2zpHUzDBjfvy3P8ZJdoHCG6jj6H5kkCriHywTBvfBQAqNVYG3MHP73YfCc6MKYHxsFRAaCMa3yDabke8",
  "key11": "5soKAwRj2CoRZPUHB2FBAujLVLA14DgUehQuUAGdNba9unge4pwSV8bH7VhpLyjmx6m2hQyivX4uB3BrwCphd3ik",
  "key12": "42xNBJz9vSNWz3PBZH85c63tcecnik37reaAccooPAgnJEYzvCPMw4T2CfTUh8G5UycUFw7Hbe1JP2Bot8tN2hGc",
  "key13": "4K1TPiVffAb4SxP43mU4mRvk6AZ4NSQGmg59pPEfkJQ6HfGdfcmFLSpaKhr68QmyejgqdKk4xEVQfdkerCg49Fh1",
  "key14": "4vzosW1Wa1EZBtaPaBuNcyGKToTD7HAw6jsS1tMqQrjCbC59pBLiXpeegma9ZU3vTmPcnKEsFBH1ArmVspspSxmk",
  "key15": "2o6KL73rPHRAbB5vtGaz3jSXTTogXpY6GxHguvKRdvUgQbA7beYTUFBSzMQqCUh6UxwqPWLtVsixrHdFSddBEzuc",
  "key16": "23qtaiV8GSXxaaYvFyhDATLpE2qkZ9TdhitRdwmeEDcTeN9uzb9r9BiDYjQpbqe7rWuGGRnyXqtpqQVYZLWxNVGs",
  "key17": "2NGtGoUG6ucUnDwZag5nyWHa7JmJXkMJpGQN8Jh3Kvxy4LKnw43pau7epwKvZpMY8UmGYe2jbXaM9N6WdXBuLRV",
  "key18": "3x3wck6FwBJpcCgfyJXzk7sszbECFPKdyfex1PmVXCFEJc3NzcxpQb8LwR5pdmEeBDdF2ghQBnrJVueK1eGed6Co",
  "key19": "4W8FsxpHXRHKdJ4e1yFJNsDh7n9wvBsADk75DgVbQmVqjQb3f1yUpz6hyhk3CgW2ajp6RLZxUpyA4AmP8EnHQZDk",
  "key20": "5FtLz1UueN3wHRm2H4AS2auxhaazwRupwquwLWm3ExTfYo5Jf8Q2AddMJK5TVgKWbeREDjEwo9HFLDoo2drKdpR9",
  "key21": "2vCkuAWSU541id38CDACXqYtJv8aF7G6KYTBQt4h29HBzPytkzjFq1mijpCMAGjayraHuD9tGtSTk7s9yYXrxZgp",
  "key22": "3KFE6KgahGCTep8ZiN2gRg19iGeLgsVzuxLRJngyJJDhNq23nMR4grkwdByhodqYr8SfaiZqrhSWXKueKSWNaRoQ",
  "key23": "5b7FMPRar2CZ8oqgDc3hQDPLbtxTwZKV2NN4ZBB4QKLrz8soJNQaqKjPvF7L8m9LesoPhNx2HZiVtBNTGC8CsebS",
  "key24": "bCo4BuhFA7zqzPzMsdi1MqF7ckLYfZfwHdwWQRPehAfNV5nKFg9tpnibVetTwaiWHaRPM54fMienH3Qwz8QcUTP",
  "key25": "kbVkDZHn82uzeswW71rHcTKe9MCmLA286tYaUHDUHXxRWbyHUyXXWbGHVdZyWMAX7rPnaX4XcJb1fJzitVL6AGA",
  "key26": "4UJ1KfeB9oKbAWAHtptVkD9t7c4YWSp5H2H9unK4ovTJDTjx7ZLcRY9SsUsBbz71C4ZmKppQf4LyQXjvcJRxiMmz",
  "key27": "2YMpgxLKJw18bG3wDgbBw6QRQUtvBXpksKvWjQrsr1tQEhS86EJnos98fyFL28xHSXq6DNXB1k2awRYtbvfrimWd",
  "key28": "5uAq4pRLTZghXMxV7SBdJdfaXi4PuMhCnTEp9JSeohb5w4H1YZskNgzHZs2QqzLvkjG6svaGUKQ4fqYWuvH1roBN",
  "key29": "3tnMbHKWVyN16WgGJk8qQaSDNCboZFRFE3BZFrFVH2ecV2tWNrc56G7yi9yqdTEAVPe77q6zzuFWiSLDVtQNtmo",
  "key30": "5p7m19tkBrXHeKNFr8roBENGzez8ptySepEuvCSGKeephEMkxrBZyJZKvM95SZ3tnGLeYSAntKAnzNpDUzq6gEuP",
  "key31": "5ehgDXAq1Vn4qvwPehzQ2wSmKnmN93jrXwmqLDhLPVEZaPNe33c5FyebWKNaXC1fGTicbvbEmT2uTJTx1F2dVYhs"
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
