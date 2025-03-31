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
    "2d2MiksycbjJAv9tWWQXLYjF5YGxKnXthVEH5rks1Qi22VFETHkJjLSVS6YAUTBYMxxMrqUmv1B9Jd4keCobmGHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hRCe9Zku6wNALN56ESw9eTM8tmDxNStPKRGeKieuj9oZ1NhW8Ce9Q5RRrBJftGRLWkGTios1pcuvwrxvqTVfq17",
  "key1": "UpdtsbCVu8javounPPayNhUTNXa5hCcUyccb3WGp4D8aDT3XN6ZhoUVjLTEchofgbHTaM2c74HW4vUeJH2sA92y",
  "key2": "4wcr6PXDy8NcFhS1EVCSYzFqevT1UhkJY6HxQVFMYNXE4xev1qCBhqaSZxX9nbLGqmbpG3XeyKEuZpPoRabqgoLA",
  "key3": "2NcTFnUYGqBquCS99jPCVtpB8CzYy3vwAsZKp2r58PWfX775GeBXebMmYerjk6sJ3STNFkxc193mQ79qpAzg6kS3",
  "key4": "5fpG5qvBZeVD9w7KnqdXmrMiXBwRpAK5BUuCzURugRwkpJQiLQT7vVqNQGKxgsZTFpQ4MAomTaLNwPScrzcjv2NX",
  "key5": "5HBtzXUYWGxb1aR2EemUN2KpK1bK4JUcfe9taMFP1NVsZCUm9XDDh27QCf4jsx7XR5jCSmxkztz8WdHf2hp4667X",
  "key6": "3s4QKFniukoX798MFJAR5bMeSxNVf8FBmsJepTpF7JB7fXxMJPJc8HFMDPesST12SYS8HxUQS4kN8Tt7ve2RmM3U",
  "key7": "54zw6nQwbGVnPWdSEXKyWjNNG2zhJGzouWxbHNmwe5aHhPS5yX3EaqGeLQHfaS2QR58MpWh5FvUQdHSCJxQsjKAC",
  "key8": "2N2W2kfoqFrr1gDxd1wbFTdbBaVHxhqfqESpjjXbizGyc6fM71PzSQizp2bjVKhaRPNJjeQqsGBgjnQ5FJywr2BA",
  "key9": "4PeZ4eUwHVFMiQHRnfHQogDbivPL4VnHs9PVDk6fxwS4LHmhDCV1ZdadKKhHghSAcfBATZoYrK5dR9QwbcmSm8SU",
  "key10": "4wDFxNxpnHBteutY3VNwXsZ1jbGrVtJFPZn2AzYAqSZmR5MfpVAkpb31ZuKa1zueVEv8hMhrKAWgfHa4PZPMSZZ7",
  "key11": "2v3HnftTin1SbkTKVRaveRcdKxkHyWJKcaLAoEmoZsnbp3wnZMTpwixsdWS4wLrmp5Uv8D3PyVgA6ZTHxZRb6TRT",
  "key12": "9MQnzugyvWpFvqCGYQdroaJjMpEGmxBcWNFcY4ABUjapyQYwvfawrFJPC9UTTktmLGPoZqszEXAjnAW527PkJKd",
  "key13": "2FLNTc77pcsVK3t5Si9h368Hjc54UMUDT3YiVJ7MYETMpWGKbyWnbhEhf2bkoqLRuMuy98U9NPzoTedtpidB2Ysf",
  "key14": "sX8jF7dq78ftYVkjbEiSFBwSaVHNbXcmgpmAt3LmYbBbs25ecCsQtfb1mMDBR3zoqkCMbxX1GQiJ3wtSro5Jbua",
  "key15": "45YXMf3Hd3SYwbKiSMQNdPPgvAFwdTWN2y4aEswssBWSWQeJvQmgGDipRsS1Qd5V727qmqSnXjU4RBtJjWdM8bzr",
  "key16": "3jnuHESyt1PVw8wyytny8cLwyz68ref8DyaHzaYnkZSVsh3uhGcoEJX4S5diqpU6U8MzXeABWvEhtDY3k24URPLV",
  "key17": "2p2aox2oaPmnuskUKQznCh6QJgyRJzDufdnGFbGxzVmQi8RCyTPPpGZevArh9YeNniLMdkKBukW9bquFGN1EcJBQ",
  "key18": "4HtJ1JQKiKqxympLXvjHgSfDBqGfPg1GXdALTS4p3pM8r9zAXPgpb1mc1Q3RwzEbcmc2YzTa6akjaupNtDcoJ16g",
  "key19": "3WeKLyz55nGrjHfZWRiP6pLtv2euZ5pqp65S9HqsRJFV4R36LorFtiFdB19fdsw3e9fcKySsupYQq8uJcCRair7V",
  "key20": "25AwaXiRmyJKmbSPAqcgEkECxLpzNtRZgg87fd9xJavWv5kibm51iPdCni5B4jCXK85kyuJRsCvtRbWVkWwEZkFe",
  "key21": "5B9L6hTLxaFc6HNzmqfg5U4h1vs67CU6FZk95avnPrrALFE1pT5DriREcjwwCLQmaCCdCCqzfrin1MSx5ehae1C8",
  "key22": "5CS2rV1ywRSdXzJ33RGHHVwrukVUmA6jKPEbVjaThymEpiFz1Vb3684KT7mrzKuCehUeoR4VZZ1nZ5rM4CfxVZif",
  "key23": "2hci35g99qC2c5hYKBVTGig9CEu6RDqwDtPykz69udrtK2Xk3tGBb2hBmGdiG9svT45SZbUvH5NiWqFWbtvkBzXT",
  "key24": "PCSst65FWcwEbJEPsZAbEZnoziqLhr7sQ2v3WMxQCp3uCDdUpM6GYEtejH29XewmpvEwLbUbQyZj4jEKRBM9dw9",
  "key25": "ki7znTiHBRmuRsxMQKD8qh54Q1DEYRTrGEr5BcH8QN7NaBGDSjvrU5N1qmNBsoQX6jFHNJF2wqhDbLMuyo6PpwH",
  "key26": "2hsQqTc63PPNeKD4EDbvu1Jm5UcCYjCJxPJvWouxZAqbtcGHR6jpJsfhpSye4tja5bRJ9tzmhALCsKNd7WVQUrd9",
  "key27": "3HXK8dMWUwczeqcKrt21rFb3dgvWmtZKdLgUKhQ4EjCJ7AxqK6qYkDeVhb1qmx54cin9tLJzvvTKMswb1UV7NpnQ",
  "key28": "3KzHavTTA2Azferhb4WDRYoXWw5BPtkpgrvs9K1rMnqyamB8qaQhN4ivuX3Ve1YsoRPvgRNxWLy4QKfhHm3zU3tS",
  "key29": "5pTAGgoezomQShQhragGS4QDR6uunLm55vPro4stLV3ZBD8WkgUn6LvbNVtXg6hc3QLK4P6Z1uGymJiFPHnyMniw",
  "key30": "2Lo2C2h3eFJ9A41KcdCRLL79824ktZzFQMwqTYfcMKdGn9RyvAkt79PfqQmE38SxryR61CHwHKhkCHAgZhyEu91G",
  "key31": "2YW4demBY6PzxEQkYYgWkVr2BT8xHunjb7nZsc7voHa14xLzKsAWvzgjPEirjcNS9UzxZj41shUop115ByFAAXBX",
  "key32": "53P9JWboetpzQ7WPdjqHmbqjdrNeqFnXJEtwPgxY5rKVwahkNmrToUKsgPsXBkDFKdHsPFCnBSM4vtz91nWQnj1M",
  "key33": "3aVhqUxk7tg2uRP8W1tRGvFQFvz1msBpFqe9ezyJ5dbPgc9KY6ocPevfQDZv27aL79q13wJwDwvjtggXHr9P8Dxh",
  "key34": "3ux1UPKJzPno6pukT1DPvB2tqbHpqaHstzK17gYvVLfvuY9Z8kqMVVgZKgu4M2P1LTw45TUn3saBQB5V5A19T1un",
  "key35": "2fkdc6J9jxn5SeztPp1dbZNCFnP8QMJHJNU4yoEniG5eTsi4dRZxwrMgmJB6hxLdphFMeQAJLS4E5RmdRVewozwt",
  "key36": "syhty99hXaotRys2zvStvN5ux6JmiNXm9qYYP8SuqwHLXELEcPWiZa5JRYFA6c4cTNapWwbRTx9uVo8ciqxf97n",
  "key37": "pTU1gCphfouKiwHsjLFLHYt6eP5z4AekXYkjwmfmJrKvnFrNLjvRp6ZQ2xkbBeFGpLzW6Bj9bV99LNZWKPjXDPU",
  "key38": "3pr8tkfYuNBk6ioCho7wDrxK4jjNVYJBt17idUcsMdseKkyHo2D48imVJ98bv3b7RE1eKdMQUFQ8AEhrcZHTakcX",
  "key39": "2fPHn8bQwGMwvFhnWYgp3dX4EPQE5STe7CZyB4HFaxAYFtNzUGg5Yv4HhfzGCY4yh82EhAwbCq4Rfs94iJRbTLVL"
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
