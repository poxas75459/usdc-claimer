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
    "3gQ89XbL6WymRGCMgJh2bJuTnenHRUDB2gcpKYUoVkzLE5Yqtsj7TbJQv7xV2ocG8CgQ2UHSuDzjHGDye9zEBwi7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FL5ptNpSpjfvFDmvL96Asc7AqfccCeouueGpSuQEaU5RZELbgS9PdiT81qmZanEqkK5Ki79JhF5sphJGaZUR6NA",
  "key1": "5Z4b3iSQNsHp4JrHqmxmhUvVG34Tego44DvgTHxZ1rBksnFMWLs359ZcctbxB89qT1zYZJSW1BcXgS8ETmFfAmDh",
  "key2": "MWuAtFm8NiuQygXndAo9G1FGhz4TDnQFW78yP2tTKPv4eMkZZHeJUXiqH5uSe1PnQgxdthYJMUk4VdewKkWjPXg",
  "key3": "5D7rtM2KvaUzneBfku3zKtQygyVPMoYNsXPkFHFXcixNGAUwV94cCfaSWWj4VczBzNXjFoTYqEi1CSrMaUEVNVSa",
  "key4": "64Z1m7W3w6UqCKfrrsHDxYa3Pz991GVH9epsqGuu9WZZtBEQ5N7hoyjtrYGmUPCCwA4pFp9a6nTw9pkiRvKL5Mwa",
  "key5": "ghvgaXZetFRqURQpT9qD3aUY1usbmiABz2G14DUCt1wvHjAeK49Ut6jAQLzEBUCBNTrm9sxYqspdtdT8qP8hy1d",
  "key6": "4MHebvfVpSX8ibdKWizDqxkE5x9GmjaMSxc1pje43fqmu7jGwW2zN3bHjpGG6xHzmBXRtwScckgDZixo6j7J1s86",
  "key7": "5RjjVWojsb8CqG3oMwcjopurXSizCG14CLwGLBJ7mTRVub2gifNAPJHHYtMNq22fyK9qoabnKUnLuV5fu1i3hn8F",
  "key8": "3YNxus3d1Zs2ZSgJNYwGf6rzW15hHKd3V3GvdyHLHCddujAykN9SyXgnG2RXdHhcLQatjzMEbRvPMurWQC2yU8bH",
  "key9": "2rkXcWQEUyKnv8V9nCZshX1KdgcAzSWXvFkhuwQ31dgczKQQbec8PACgiPoT9K81Tp9LV1s5WAiypWN9MvzT1wFx",
  "key10": "Gv4Peg9uM8WKNffQEsqoff4Qwc6WWkq9UonAXh1sinKXL135JRpJEmuc2KHRF3fUHn6TpFmvMmsP8eADz5FFs9X",
  "key11": "5p8o55otWAsFa7G1uiWGDCMrmfk3PKzqzMtJgGUhFTqNhRVMm3JXhZW6DV32Zm9ruCRyBbhSDg6pBR5qGRAKSwXb",
  "key12": "4eemNKQLtmYYhD4AoWkcXZGCSaUZKmA8vqQL4mtni3BoZvgbB435auobE2eBcjgpQT6BW8hjHEwx3km1s3hiEdJj",
  "key13": "3VQSWhjwYpSdyr3WqpTseZeprFwvzHDnYiiy59hzEJcECNWtdBbT8Df1A7H5PmbCqryppkQWV3NR4SXtAJvi4Vif",
  "key14": "2KUgsW9q5eArdnEX49AUpD5f2WUJ9BeiAf5eBAiwneAqqaqVZGE7REYdAdnCbsHgumgKENcgQ1WPBmLxe47HxS88",
  "key15": "4gZYi5BASDhpo6K826hrAZMLHeKuFmmXVkbPAw9xSiP2s18epJeuH2UK2bKUpUkaATL7VVs5XkcScKvtNQUcAPox",
  "key16": "54fb5WCUk7diLR4t5nEUPha7WPfpASDh8HXEC1uZFiuNUhSAETgp2EYimPfuMcgvx4kL8eAUPict5LeBMgEyRQxS",
  "key17": "ncwYfVMu19aSx3N4yxwzGRAVWta3sDLPGzh617sZbMr49dRQu2YfQzyR3soY5JXudHqJsJMeAEo53NtvCo6AJdH",
  "key18": "3WQ85oswxoUz6FUTbZmykxDav9JKduyJCQmTZPCn5SU6bVjQ82PSGB3ebfFXNF7FEU62N5oequVcRrw47xVgT9V6",
  "key19": "kUFwJ74JjLBH1MPxiC38CWz937NnUazKk2W75Zwa9Y7FSjsHyoffsq4ExcobV2M1k4hKjVdpa16z6DCiXHzTVvC",
  "key20": "4k94rPfvxFit3nr6cEUCcG1WGPozcqiLjrkR8r63v9SSgVUWQtGW2mGkcqYyfjatqRxoUx1EuVqZVc1AYVFvKSK6",
  "key21": "2qk77acRD4tUApGh3pKfoXo7twjAkWZSjaaw2GLePR8oSUPNcM3XA82qhAJ7YMqz7Sn4MmZofCnAMxmnXeriQT8A",
  "key22": "6tpLvRafh92GVjitct9kuBYubrhnxkK2pz8pyEy6prxBducxQ8wgG6TCeRtcKX25mFgw3AhMSrBHmEsUBoVw8kL",
  "key23": "5UK5BV7jyvz6DEByKkrshoH4JcAKee1AynYkk8Dps3HK3eB5LcEabufFk3opFFxNBuZAqkaeumv8NBA2T7ojqwNY",
  "key24": "ZWB28sL4db6mRosgnxXLxDd9RkRwgwFZPT9E2pRcJp8ZmH1mAroaKWsvaXZVmEqs2jcsGAnHki7EbvWe6CFNDQW",
  "key25": "278F5jp9xLpr68gnRWY2zLaRXJg31d9wncXG8ZeFQr7LxjAjTDR7htVomsjR5EhD2pP9Vi1vRj5XTwnaT1rWpmtN",
  "key26": "4zHkffHkqUVUrLpDy4PuDNctfQVTiR19TgzC4BPjPW3Y1tYiuhRAAvRxdkVfm6jx2VubzsuxCbFiumbDJzztqsjv",
  "key27": "5JaUqbfwdwpwPzUpNGKk9dhp4UUs1vEsTdXokK9fcEjFyhkjHUZkayQc2o9fjfJhKTrLLJ4BYy3ns35dUPzF6kpb",
  "key28": "54Uzxow2o3fcbNH64H49WKue6nK4F4pxtL7doyrHqGemGyWH4LDxvux8Npu6J6QY3mapTwg5wm5hWZdh1ngZ2xfK",
  "key29": "gxnctFtb9FwhryjbdDRJdktYVanteWLFsDQrpbL1p5mwPxEcinJVBc7mAdHEPREW4CRr7Qn7fnVfbFTqk8ZfygT",
  "key30": "Uw3Qf1ZBv2F6FeVTwGbrfeQf3PaZrstHJve4JQF1cssyqwN1AtRe5oaKhRv6bb2LNisftLTof2PGSZgVQyqoHE3",
  "key31": "3W1aeK3B4LhU5pu4SB7etqgz3KzCUfZV2pRvbUfUTz5DvoESpEFypvkdhd9xRf1pXSiArP4zTHmruKQ387cZ1Rr2",
  "key32": "42cNGwB6gdWZqQNTvF8VVCB8et9CPD53WmXkdvtxLEsQBeHenQCMM6K3TMeKGBr82d63uQyaMr8Vdr3mh88agiC4",
  "key33": "4uxLuokbEBCT5epQoiwctAZz6yMGc253XdjYoMcT6QPSTSRgHrrhP6gXfmNbi4C89uGruQd3fLCtX82pqx1WWMGY",
  "key34": "4RLStCPDaK6aNbPB1xNM5YKMMEQahdKP9pWGYFwGNwwQmufVMnc8dzRxdP7g5FJsgsFJae6WwLcfbfBBo1x17BUY",
  "key35": "YXGr53eKG1gG9Vgs2sYicuNQ5BScJSeqRHMNXZt46Uay2YWsUKyBNQLGLwxrCH4gLsUrTQ3Zp9vvVszV4hdwrbU",
  "key36": "xk9LLy8tkUuCCZxBQk21s5GJxqc2BfgSJjs5ePNuoeSr68NenMEMLh499chnaMLo2yHZZZy8xfqDCqRYk37rhEY",
  "key37": "21hUizKmoCXTAY3sJWN28R5WaEy1wCzi8VXyNeRTZrLXB4ESfdWWxMZ4GmZLX3cHFaFVPpaBWiLAjsR3naoKC4q9",
  "key38": "2XkVbPcTtVJFhjj3vzbPXawUmcnV9S3s2ARkReuM8qQ72iXXj1XEy3zRoKzZgn7NMcLbvpqa5WCYSUGeQExJY8C9",
  "key39": "2Pyugsf8LfXRd2SyNZAvczNJ5zRp1pqis2BmrZdxn4mbQLrWp9asosnRKx6QDUcTpYdzdyw6Sw6wPaRSjCct63cQ",
  "key40": "3YWvB427VeJgonW64o3U5rrazFV1qcbhAQVMQeaPhqHnRofHStpwhTrXWjatt2UkKskZwYTgBLGHGdYnkrnVQUMG",
  "key41": "2WUsDzcYmF17CfM4nz8ZRV7zPpYgQroYy5CwZsLkFnViXRzaB7rS2PrMPGcG9aQmRhsByoDtuKP3HcVrkVA9oH9P",
  "key42": "4BAY2zhymGYAcRQuTR8pxUhQSpBk3AfBPEVoTF4kiudnuCJGAWMKQt4s6XxRqeBuzXULknwLc3kC2GzFToDU842t",
  "key43": "4PRS8V5XvDM3HHesjtdvAX6q8weDXTUnLqJHsQWci6bTYECXBRZUwZ4zKpo33hrr3aMAcynxW8zUufpKWDn1baby",
  "key44": "2Vnu24QAXQ1fBaDudsGtRPFMGXnurHxMhsXdxADxb7i3p9gMnpRzY37QqzPPTpsoNdSGCqoJomDRPDznsFcPGm4U",
  "key45": "2jiHWvLZCqxj896pbXX6dHyAzX2SQk1ik9x6JykzgLRU11gYf18YcmS3hvYrdPsSMkXgzLionRNQsjy2ueg3mPwC",
  "key46": "3GqL4yWC9sTKAZ3ETAzmYmYHQF8tfQwwMWG7Brcdn21JBdMonBcKcSaWkTFpZQu4Ajkijno1EcyfTm9eAXfcXt8L"
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
