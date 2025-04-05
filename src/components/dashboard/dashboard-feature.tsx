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
    "4vcJk7WNbhVGDhyGLi1WQc5PKqsCM7cLgx16W7iCG72VkExoAwvasxkUu59A1eWtKHS7teXJML4m24w5gQwctBek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E7Gw5aecZU6N5kyiAPAmjzMvvY18sWsTJ8GiwWqyEohd9oErQatX3PPVrkrDZY6v9L9CGnaMusL7GM1t2kDTLbf",
  "key1": "3a4HusDemRH1gJ4E8T2qcbKSQv4mfHhga7jvBVgjdSTjZYEAUhHJ9RFKjfNnaBitZe3EpRpCH2LcQZgV8vh2z2DR",
  "key2": "4wNTw4Le5gjhkLBAsH5KmFc87ghA5dVen5KvfyPGtzLpD6m4EA8p1WwN384P1XmCrqs1SQNDxitcJMifT3qq6soV",
  "key3": "4KJPjDSymKMcY2K2VZS8ZWecZYKAbzdHwMPhoUna5sJhAd2MTuBifJBZ4Ry94XYJupQhMYsP2FVtXBpXKrU6sGKB",
  "key4": "4gGg2meaw1Y4dFBY7weYficgbUKGrAW3uCy8uTgTkDdE76WKrz2mD3sM3qyPLgZfNKNxXc9PDgGRcWDB5QnwWLE2",
  "key5": "4EFp9TAHQQGZPoXHHbEsBoEkpTnJ8CD1T1i9xhtqDQnyY8BBsjueeSbFSw2bM8yrK4sfq3bLhPN9382FDhJvEWY5",
  "key6": "2kb4L1FNDiWcG6QVLRTQfZFXQHqrg1HUnt1CMs7hB1G87VtETPhoKf6SSHPPqpjMg6otkqEpj3JxSeNsiGnYWiyq",
  "key7": "VvNYPcgVV9WLdrvefCujmTHUW1Q7MCJ5rgfidQrEez2oJqVout9ozDUCfZyoc61C9umiXGyLFb97HasZQdt7yGS",
  "key8": "2G1pSBVjBRN8mdBdgSNH2bfmNC49xUHihcGMncUpF6oZXVPueNCNbvtkeLGitkNcCtbVyiURLwU72dbFgRD7d8VN",
  "key9": "TNvxL3mXJJfoBFGVEZ63oPY1FyhWzutUuzRUwSxnjJyEa4SGnUPQYuSd1rUn9R9ygPdseaRPTC9CD7vAqUzD1eL",
  "key10": "2yk2UBn81TkivBKu9YoczdmVi2fjRA2imJjvaCv6yAzqWrX2zbZUesffwJLHsVtPSQ2dp43CuBYQniW7kLTLcMTZ",
  "key11": "cj2Mu3imYoG8odDVwPKzzUHZCQ2bQHFw34UvcLBhPEwBRCPMEab5AZcxJmRCHRGac593mPL6xqhmsD9CADY188y",
  "key12": "5Be3woCgqiBoAHcqfEd8AnhUSXNYbupCWiWGC5GvocUdsUJrnycioCXnUvE8z2EXzHWCkpj8fiiW1z1fYkq1Pvqa",
  "key13": "36dnZNKmsjXyjQyGt2d1kpXVcg8LnLLEZTGQH4i9vmGV7qWeKeMqsJicHLVzuFrL451ZmEnrj2tZAiy1PvQeNMRC",
  "key14": "41dtSvcAt3zbnwsyLf69io2XXKZ5jvBJDF4CEk3PgnhwyWaxqcP2438N5C6jEFLpktYtAwHgA5vypReqSt3cvBrg",
  "key15": "5ZA9UAwhzq2GJ1TxMU8wADxwzSVghBGBLxAvBWqErPtowZte6YntfubmDzfpDf9RjG2uJY3sZv4fRjVLZMrWBK22",
  "key16": "5jAKktK5n8SkJaN5WRckanKLd5oP5FE1QHpK3u6ZsDUkRf7khFTyxwTDcpMDSBum1ht4yA5ocS2y698JBd4gA4EG",
  "key17": "5Y4D5eydEyz5LezVJ3yp3rFZWA34n6YLVxRfKJwjU2cT9BbEEBuLSVq7CBSrBrqMWsFM9K4CXEPwmSHU3Z2N9wUS",
  "key18": "47gxrp3yDbQQJdKxWhvmhVvrsiS8RmpSTyRJCvZU636hGjbF64BoaxRNAXeEQ1LCQ7MipWUQ7gyFBaGgLZJiPidh",
  "key19": "4S2BRMXgYMgWAvqqek8JjzeAJp5YVJkMpoxspV5q9JRse3obrmJBVKFXtjFcnkPY7HYDFoTTbfPk3zvbHAty26tR",
  "key20": "2jNWceA5X1sdVmDmShtS986zJgUijhDbSeYAdMDi63iNDVHvKxgQH8Xjke9RD8RYn7FJ5UjHvpHbuPAS2cR6tBBt",
  "key21": "36wiLCqEPNqwgQdtcV2RnHbJeJNYA2nvMgDnLirAF4sv6Yv8PZZm47Bo1ru9xPiJwKWFRQKdpPDSBPRanK1Bd4Y5",
  "key22": "2DTn4fwY2GeEjQs3sS26NRZ17cAwFfoRVRpZ7k1eFwy83sQUbFggr3ZLEw6cUWSyPfEfxcT2U25H3cU3bxjUvMyb",
  "key23": "4afdLk15KmNyQNfKuERs2BStKYEwXzqENWc6uetPBeNL79fnfWYExnRmFcNJ4hYTsxKHcFXvBS1QoJHo6crib1Lq",
  "key24": "27qm83quDQtdRRv43kcBuc8pYUgPCtFsVNMucfkEcqbZGW5FnEYH75ysj4QrsyvoxzMAkBqXTTt5bmZ3STDV29XC",
  "key25": "3U9JhHsU3gCTpfVwFiXPvEykqMCsXEkhBmD2kma2iYgj9Hy94xC3epQJR7fXSrjDeegdeVRVYKTt5Euxz6SBiegJ",
  "key26": "3CRMXcHi2qpPPA3KKTwqyQJXQEZiLLLtYsVkUHJ5Jdk3iSZveacttTHHdMfk6SoTTRkXei6atB8JHEJuzxEmjaDt",
  "key27": "2tkeac1nhPgxTAWhMgVyvLS9hQaJXyx7D4fTgwfiiZZ8Zy1dEEpL1vLyFD4SsJrGEbtuvuB1WecoUzX2eHqw3XqN",
  "key28": "321DaVz2Kjgh64V4YK7bR4nTevmgMjRkfzBHHZfk7NpM4t6DPc8uFLQ8NrSztJEuHRQGsa5D9bYDqqqWG1k9fpBR",
  "key29": "2AnKYWMP5KtttJAYVqj8kxGgf3SHxM6tENny8yKJ2ySU33Vc29JEiuwpj85EwFK3d2uqSK7gwQXXNUWY3i6LNuqy",
  "key30": "5euk9TkFEqB7g9sftTkfAcUShqLGDUynAD3TaN1EoYcVfKwAwdKGkTdR2x4qigYPPNJwrDciRfuARAV2467pyhJK",
  "key31": "5hpEGUjSFmDuFd8hkReEsuNTRDKBDGTC9Y3EqooKYLsgqy8ZWunwJhNjZcGvCUZRtQP6WsLZzhDgWKCZn3QGGQcz",
  "key32": "5MuanJFSBMRFT1rEKqVAkJcrt1haZUeG62AWi8mf6Nj7KrYP7UQiYpH1AD9hzCoRN5EoSdQV3ZL2ggsd6eeYBohv",
  "key33": "p3UFVrvsneKA3cGqCq2D5xuhAAFUxVSTSN4SskKdnbf5nTQzK2wzhkCZ9agZ3ixkGbWbX592mHeJpE3rS1fsL4X",
  "key34": "4SyKhBQq69EbEKMe1mFTgERF5nfngX8NSpNY5FhsSYmDrDG1azMkzVBD5hNUF3c1EnDTNxu2U1K8Mus9NuvKcufK",
  "key35": "5BptLi68GcrNaBbCVLanHMksi3Vj6pHz79iUfGJHqgSnWY7dm7KUkMLRejeTFSMVHrx2zShPTeCTP5uenhKW6tcD",
  "key36": "4YdQ8DRVTJXkzMbnD8eg6hpa5fBLst29MEqybRkkJCDHNN5Ug1f8okZyozWnUJCbtLCv28D9Tk2fC69tsHjkpmgB",
  "key37": "32iCkpo74H61SMbpeCVij7HtduRQ8953HZXmawsWun5wkK7LuVq9RthVj8U2NKqp7vD9cAzhYZbErqTo28AwJz85",
  "key38": "vFDQ31kMDhmrzWEemnv2LBBnvbUKXrX76cqLR7TJzrKPqUvBmi96AkMRfHvyASvwWZhXBDsLCgLs3quYNCNKV6U",
  "key39": "3HYuB3upxr6NJavVemsf9GJMbgcFcQ3DTK7UHMDBCZTmRoNDsbh3i75FvZkTWcARRZmwfZFDSsZ5ByvFxZYgf8ek",
  "key40": "3Qmb3pi1BJWsq9Dud4qt4HUK7prKvG2pLtXtT3LqeUBBwWUa3vRH9KnzPt3ZxqDMpRX8tGxUJ8bDS9GpV6g8eBHX",
  "key41": "2VqdExkfPipcx72CAdko72zjgBt6KP2XCedAbXGTCuAVLGpxv31raPfKCF5Jk5QznsZNSE1RLAQsEGUGkVZeBAoK",
  "key42": "6XZHkTu1R3WWWWSn3RnLYgnRbst2ipah1QCKjC9Z9piXv4uueHuU4NeThBYjU1hnVNftv84B95YATxxE7yB7tYJ"
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
