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
    "ufCk3FdxuurS1G3vFhaWrDZtYBkcmEGw8GGgQpcwracp2ACn89q79YEKnbuQYLEj9h4EtbiLWdyWCUxkvMGuQTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dwwkGmtyMbTn7QwUJTHqnX21q5iuGEzsNXq5ysErrZ1rnWSWE5engUo61nY1dfAAbUtij8CEeDS1YA58HhpWDiq",
  "key1": "a3zXiLgYykVXdTZwS98smKfGZhvyv3hS4YDaexp8JTAyAdr2n1UThKhGFdwC3QAWJiT27oTVcGyCSC5GkenvC6m",
  "key2": "5ygryDwV593VmMY9QfJKZ8dJ3NXuBNYsyqE1ijbyx8Z3W9GcvzsE4yN87qBfmezeZ5K63k7AsJDcyc91fz48jBVF",
  "key3": "4ccnjgpLnADXMtrQ9aaCeJFc4DAvyHewoBoPsVqHgxaUuWXKsmxExwCohwquRh5J2uEkr4Qee98MgdTL1ZL35anc",
  "key4": "52hvpie1LrrQVqLpAMc4UTL7ybefiSYkTfNJkSVj2gcqxvxDCVbFyYjimmYaju1uR82XjnJ5qHcNuHkvGhNnsh7q",
  "key5": "363CAHmRseAVoGmdYdUdmeftw9HgfhxU3FRSpBrbFcUN5hAftZveB9BbiHCcXXxhAzhg6kmXDTTuVshr9oEgkdq9",
  "key6": "T73gxnMcaS8Vm1LcY2wHMyFqCz6FWobGDoVUZKSbAp9NeBwsXfcT47Ro3wTsToVW4B6VTf7VzVbXqPwc1QWorPR",
  "key7": "3dBrUxgadvheQ2bTGd1C677JxYTDzuspniCeUzHPRjL3Jmp93sqyUUZX5fssEskAqRG5435QWsRy7cZzx7e8oAth",
  "key8": "2W5KYEwfJXNk8eCBB7bvfo2wmLY5bcTkHQBrGiSWeQnyCPCUCZPye3AikLFYdjv1vLega6HJv5tx8fsHcodExYtN",
  "key9": "4bbyvchFy1pYa3WV8BbGLkvtzkbQQasnxhFGrzeqadspygdh33SS1nGcckbacXXe86jNrkw7tREWS8gzMXxQ6mgF",
  "key10": "5pxWXjDU8NMt5UG7zBfWvgM6JWxHS5bLRBGM8hR8kr3GaTcXSq1u7zEkbrrADNyPMaFmf76popsk2niz9G95mUCM",
  "key11": "5RJTtCTMePTTJeJpSVKxKUsKBDtihQ3X8G4Fwzd9w4CE4c5YkP8JnpoYWNnPbTy15PxozRWRzaUB9uTMQxAhraED",
  "key12": "DKDNKkEuREcDxnYCDMnKcLChhWGCmcr9Jp8u4e6u24Mohimy1nUQk8hDdZSHaH9vmg7M7kpu3rGhn653w2ae5ds",
  "key13": "1gSjUjRKT7GgZCmua5Kg7DRSf33na3wnvKvpPhKUVLDW7PHmwMSao6vLr1VMXAH4yMfwrvvr4yqjRLNVPCEGbY5",
  "key14": "TuuEwH9GzFQqRt6MukeLLiPYh557JfhCWxyL1NZJgF7JQvBXiZM4Kf7GLPtDVfFyXggTmg3hnKJ673xNapwjkKi",
  "key15": "2iJuig1gkD1xijZkFVvqNpSThwhkMV8vsE92fyosAnbgyFTC8AT1Pv5LSQnu9K9Tor7g6DxmJ1WxuFgop686dwP2",
  "key16": "26Zo9Yt9GshHagABVEd6zjJQQQWhgbQvHBrzsarmfS4nPdyssxwn1cbLm634tjqXjAiVfVUUVpUGgF87xQzKUk7A",
  "key17": "3XezwxsAKTcBimrdvwZxryB4YdTBsUwSL4gxzXF6YXc3V9cCA6icR5hD932pogL9XR3hGo5pLYLiMAKpVEmN7jt5",
  "key18": "4k8fdskefRYTi1wonU7kPS7sfNJcG88A1Qvft6zHR93GWGyCEmLAEHGWj2SpRkYyvf5atm7Gb5vEGo4yfStj6MGY",
  "key19": "4wkPhWCyS4ouYpwyzK2cgbftJMvXvjff8WX5u2oXWrgc92fdNuaLsLGqhau2TrNE5bB1VMmDmHZuDr4p3M4SHHfZ",
  "key20": "uKUybtnBoqyPr4F7vJKH9gfncWX6XWF5DESJGZs2A9LyG87tTgjEDdpJdcG12datNvrP7UbfvN7pmaxshgVC2HW",
  "key21": "4AdJbtRMWj16yxE3BhT25M2DUdbBbQCTSHs6Z2pxWiSUGGx2cgcfMrhT7zrGnFALhfVma2AD946c2iBbaUZBRRrw",
  "key22": "39XZjJ3fmCUZvBiHMa773Tr4DnhPhdDvULfYv9hDLoMdj2JNgavyQGLb57yTML3Upd2HoGmL9CBwDqYSQjRGnQ2u",
  "key23": "5qqAG1NSWW2nB55J2cqmokr3dnKfE5XzPa3cew5dmGrn41mLk2Z789svSEWYrJXrgLCdMNJVAP9itVZ1ja5WhuVA",
  "key24": "xckeVwt4CyTXSa4WqVQWXgcawa7BFX78LxPygH1pvMYFsKcHgRmoRQpC4Rs2YbC13pc7CTSixrVfgL9uaDyDkW2",
  "key25": "4kF2pkb3DNbzE43xawakcngHXiBGfw9VW9e4eaqv29A5jfKj34x7WXDnSWFUPAMTnoVtmdteo5MkkmMU5WGtxPEE",
  "key26": "CqwvwLnBobnvZmfe28WoLr6fumP2ASehZKVAzwQ2FC4yNqkoEeoUeYdxkgiPPLhqgCARnsY5onLsyjancJTDuuH",
  "key27": "5bSo2Dj1QC4QioLCCCf6q6eVjMm9qCyaCsQimAMs1JKjeQQWi3xTHQwDv3X14ksuAaQrn5avukoW78yxjnMz6pMV",
  "key28": "5CbqeZ2urNwMrMybqN4U8LZJNDCrRvrmJECCRDpuRaTmmFzfweAAUYn1yKhQgv7n9mdcfGZtUj8MpwXbCdVGpYmf",
  "key29": "K2kJ3ecRBmQc41wfpHpLtRwzMJ1E6rug6skYW1Qyxx7zzriLE8QqTsTXhsMVvTh2AvBuPzaorYZgBsJiENV7uaz",
  "key30": "uHuRUaP9eprVdvDHGh8oJPthrb8WEWCYJvRLEZ7nnC6RebMhbtwQzy5fUUnWzJZJy9i7fqjmr7Qnqut1ixRmv1j",
  "key31": "32dc7L6ntCYer5M8n3BeTMeQt7H5xvuyWH6FjLKCrv8rbR9cKjK2S7HWLW4jcZfAqGykZ3RSbM18RX2TtHNpBjCw",
  "key32": "5wzwsLBjXSpQ6s9vzmvuvsbHt94NCFEEfiJKpV7WxGepySpS6xx5oz8V98S9W49UWxgQEfNFDuvCNcUtE9APCG2Y"
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
