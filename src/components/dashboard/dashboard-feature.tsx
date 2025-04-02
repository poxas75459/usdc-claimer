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
    "5EC1LGF4dD4kkoD5WTFZs7YpbwMBJJaVWEpeve39qcY6BfueCSokfUmRayfyhsFfujH3a7F7LHToEkL1jNwpbqiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3axpNECDqqdtrq7SwAawvpjFb9gof9pwUnyGjQ8VjQF1RWG99FGSFAUAmieB3kjuHW4hK2BjDCfwxx9YCbmQ4uC5",
  "key1": "2zaKjTMcQhXHsJyU5FPwXVXNLSRUXbFeb3mcszhZhaDdRqxXdXXvMRmmTBCMtpEvziFySGB2Jv5ipwir7Tf74eQc",
  "key2": "4AWXTg5WTRePeKMaBE1j1gqGFXruDM9eFqrar6x78oChWBSu72NDH7LK7oQonA45digJ13ahAiC6bquQ3YtE9CVr",
  "key3": "3tp62AHZimRzdeaxqi4RcawvTetbpzvV3usczzM683D3VTr4WWUuRDjbJDYNUhpMs2QUzWHRf7aTM1iiKd9gSDgf",
  "key4": "47yWb2iwpxbXeEfw7qJC3TXNg92dBa8SZxjfCBeP37idDpDczBHDhT9SoYYfEmijsemwkFB9skMmKkAsQX8px7aH",
  "key5": "3Ubgb78iPDW8nKnmeRTZCdvrcsK4MpDVB2DPqfUjABs5CrUy5wHRT9EJ8gBuagU12uCoonmDtA1Nc9S1pUJy1BGk",
  "key6": "3wMfSf43CKMqPg2LUqdTEUF7Y4w34c7hWCJYueEfeF3SFVnAwSsypifiBjDxSFMoNnZJVzQnfhamtfN7dc7u8mqn",
  "key7": "4WqVuC5iDhKy4L4fpt8kbf4rm2C7JZ5wZjbLs22GqpacSY9yzGjTaMJfCA3cd8NazvAYuaMVVPvdddbFjKDMVnND",
  "key8": "3HZZfaHuYx7aUje7vxx2X9fxFqYkkshj64V5Ax7P77zUx3n1xJkd3KjiiXbZZ9NTsZJ5t21wMT16iaf1715nLZBc",
  "key9": "57JVMuSTUC52shBtoAzrMNXxNNNPj5aXh6jhDgwzwsKFzARt1nooUHkaKZqP9CajxpLxTaYWC4TCSfRYSCaCVPS3",
  "key10": "2Cfm5FBbT1GJnCyPC27hjU6jtgDUrzXeNRAcLFobebH9cXqfZuhnLJQhEA4zxEaY8SWnkvNNTAfnW1AMnantNGkh",
  "key11": "5eVG5eMcTi7BqteMfD8rmPtYmdVNmeUwDwkkuNNZtG4YgHYKSZRFfEcmgtkxMtyfbd1cPPeSyXXUR3kHJdctFM5E",
  "key12": "3nPKVLvZU8Kzz4QvpBmMmsqmpFj2tL9Xj58MUySTCnwGf9MrYfpgtZp37tdtG23nLMRWXAzG7jsPAHAmsuX645GW",
  "key13": "2Cs6oYLzENyVjwd64QTtSeEmugWnFZ3nQnDStxNVgnRgzdN7NES85zredKzY2ycCf8rG2AB4U1w8iTDNyk4c6Uvz",
  "key14": "4FXU6UbQpKYboWMRr9i6dKzXwiUtDgE2DXVF9LdA2a5xDn6oVC5nAg3mwqbg67UWkAyVQUb4SpKKSXnAuqkodzMX",
  "key15": "2nfKKqx1PDZoWsnzjTpnuicN7juTdzYBXfTbz9DHJ3ouQgsgCbvzYd6tk6vm64H95H2VH2krJJPU7Vd2by5DmBgw",
  "key16": "4AXWwuiXDc2PgR9Yj1Mny4cPPmRn2EcTnz4jz8cUZqwjo36peddb2JrBvDqmedFppGX2wKaEfmUd93MKAYvNJ1q1",
  "key17": "3Jyh2r2WcpjrSm35cqpNnvumnkEpDdkZUEcLdyT37z9TTviH7ecwqiozKFoCA8xvEStUU8VSyZKzeZDQ3XtUtUrm",
  "key18": "PUvcFYNHnFvL59D8DwBm8NfpTyQYz1dFoWQv4zJsffVgnmXxWLiJ5Hy4XUD8XJYEjagUGed4uzVrmNaiPBhGDwt",
  "key19": "4UxNs2G4hLeaP3H3mfQvMvA5U4DrzUUWyay4kiyfeMQPMRfGbg12QARJXgUVVc7fDbosEuYDxQUnexoDTvMkZ5Gt",
  "key20": "5HrtUBDrWZtr2CtGzSA169WH54EkwsvqV7Rbfh5xbm5v4GMg1zV8NPUqUHrjUMnrumoShDkvasucK9ZiN8cAAQf9",
  "key21": "3MgGLv84z57xHyN2ztDfPtnoZrkJ2cvvsL41AXqTTM4RXthYEyo7VoYfm3Dg3eekk8nSqqpE9cLfPAV7vTom1mSY",
  "key22": "2rKzDC1YRZ2PbKH3vJsQFFCvsTjAD2azRSaRaZMZjRVPxFTxBBd7V3m9BL9riHKQgCP94gCvfUVgRZxkGJrX9ZPK",
  "key23": "2HqxMtQvgD7aWVh7yPahm1i3kWGeUy64wBiW9SyDUWm5CNNTQG8gwSeZ2LEMewGEKrsUygjSE8vqCY8cJK2e9ew1",
  "key24": "3xAXLmnXmzxNFSXTLhhqcn6P9QdR77LKpQCEi6emt5UymzoVdCCts6aXwtPRqzhLtp7J9PbUeH2rpQvDkm5VGqaD",
  "key25": "3ouMUUuUeqdcDszkP17feEHn7LWfAqutDG6uTj3A3Xzsu5G18hzshAxyB4974F9cAp6QivpFinjaMV8XemmrsbfD",
  "key26": "K6DYHjNjrstNNZ2C5Yiw6D6AMmvBKmvGrf2iwWBB3T7hGYkwA1UeGU4RbTxzC9K3wiUt8k8AwcCKQsqdrVNJG9H",
  "key27": "5rYS3H7NBUJJKFbQqoeP4o9jcF9XXqcbgsNU9MjHhMb6Wv5m9Z3JC4xjsMATMXmvsPmPZvrNymg7U9x1nctCDvi5",
  "key28": "4eAfeLLZA9hdtMau91T89MjJrRWAAYaGc9of1KcU7a5j7KyLFe39rX1xYty8S58SJXDLGj2wrTZmNGzopsjtjZVL",
  "key29": "5TSTAxqjVdNWKjPU3iTdcwDAtZ4NdEymEQiHuSBVhsdqrD3auiCvjFgjQeKs5ZZYhJTjePiqEX6EfNSr5hkS1cNg",
  "key30": "3RMHTzPZmGumK2qWez1SMisYBwKadmMAvFwNQVR1tKXpN2h4HspcByV4sUGpzxWH69KyLoNQa6M8kSV6NW1du6S5",
  "key31": "3r3FChtiiTgkiiE7PjVyVCGFw7iwHjy83uDVV2jutiAReHK6sPzvjjQLHBaAkAVu289R1jLZhU6eNQsCKosg5B7V",
  "key32": "5Xc8UBMToijfHnu9whsYZHqJzLbQccXpcrwgHQSzHeZkUdWxvTiuc3dGCpoyhgmcj2egAAscN6nXwYJsMh9bRw52",
  "key33": "4uJ3fSyyj1zR18cpjc1uabsYu13f8yAtXy2r16mDZupEVkF1uBMNu9xbxyhdR12vQWkTqt7taEP9ioqAzSgjqvam",
  "key34": "3k91P47YjpUHpvPv2qYiTBnetwM9YEtzZmJfeGij9A3MYPY54UigUEY4PgVGk3nBs7MEQASoKhcG6R2E9bhvnffY",
  "key35": "wcqbCY1xGHb4vE6MKokeWpb4i8eE2YcBPPBSvKFb9kx7fU9xD5qQL1rJK74btq8R2xsYSA2bYrvz365nAsU8fWH",
  "key36": "4hz39ENmw2MPmstUFU5dL4ZLHmqexcsdsjikXKhS3mMkWmuvkAF5ifgLryfj6YmTGi4Bz5RZXWZEuj8jwvQi4U3p",
  "key37": "5yHQi5azp95GMdag4JsZT55uF27zqn1mv4ziV5ddzsxHorNCjYswa3QVTmZrhK73Ly6mkHmyxFKqmizG8CPTssRK",
  "key38": "4g3vnEDudagj94385trMnf6CWqE7xbzArMhjTrBSqpQ1DCD8qPyfdtkpA7xrGoCcQzqHpSgNtUMCAG7fkmYmzToc",
  "key39": "2J31iMD5bmTPtsPWAwVCLmYLbV2DpvGRNZooo5ArE9G4kbDa7syxwxsLJcvHyi1QHXmGSVce4hpqUPtWKzL9ZyJE",
  "key40": "AJZN6JL81BqiiuTkc9MJhHdEcDEUHRuY2gDRKKNqpEyzTErirdGFgZbkvcShFKQ8AHcfg2ycLyZAmpkcApAr7sP",
  "key41": "2a52MLQBpMtoNFApyx9ToLbhkzYRrGAGWU3tWB9iVBG5Py8zb7vpRPhQY73YoB5ieE3ajiMPy9J76TTYtCTvwnNJ",
  "key42": "2qrqHTSUKvX6G6ACgJGB7bnMRAu8oHQdgkdjxeHgG8AuB9akFpDu4cKXQ1Cr79jbD2bdi2bRpV6F5ANZhrH7BGQJ",
  "key43": "3PbhLcKFArgrshpA4CbajzB9USFsAiPVUp3sKsdFaxAHp4nsUB7PSbdYCm5fmhEJXeoL3n2fK52RxdQRJ4ABL4RG",
  "key44": "4nDu2d2wf7udxNc1viYjyEh5QboGKD6RV7YTq7FQgSTrEEKjie84SC9C5nxWkmLw1jNKCcxiCJmjrf3ooTdrj4Pf",
  "key45": "55iUoB2cauxQSzCubJR8WiDg1JgXeBankgokpwtEj7SyYotfFjSdpq859nkAh8Q1v41pNUL6DwHQ35ZtnxHK3eHL",
  "key46": "4hZKmrgNwDmdbFqNnxi6ktJpfwPxwXg2TtCG3aCQCf8w8eiFM3miCG23A2D2yvAm4e5h8muKUorn3edrMXW7V8Pi",
  "key47": "4XvzTLMpxvqZDdos9fHDFoAD3FAg1BmCsd9z7bh8trejaspA9jpmmJxZtfNiSBgGgLLAmPfWqXdURMzJxwMoeKDQ",
  "key48": "58VegYi5CfTfqX4dqSU1tvKCTWPbtDXTPM5Y6ADQ6BG93VJ9ooQ4nMCDo4iVEcjrX9cxCaCmxJaoUyxwYb54aZyS",
  "key49": "2vSBVXR9yECNwVhNmLSxvwz99jGtgcVgeBVgbJTWT2mtFTw67YPnj5ywr8KnyxdYdDXTciaHgxr9T6gUpaQ6HSyU"
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
