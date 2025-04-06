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
    "3vXajZ2EibgYDZYihJDxC9R5hKKgaUhoCWoZW5No52GcoNGdBwzzY3GsNVqKwyJjLZsRCTLASmpxrVwxDeZscNQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44D9iAkxqrcN5HPLsmNadJnKTSDUpFFybYh6FLxHDCyPpMfpBPJLVT8FsKsD1HwYn4nhuFsfjkFgVTM3Z3LzND1D",
  "key1": "4UM64KMS5XPuCoXsW4MQY6sF4DKzvBGShTS3tcMBQshYGT4XYG71wdA1ioXBKwP5V4oMLC6Fb1mqLvtZofnNgh4Z",
  "key2": "5UtEGGAf7p58zovpUJawr8z8ipLMwN1BUSALcttiy4WnDHVhc9TZj49gWg7xtEC8KoZhd3wyUyKARgooahvfYTPE",
  "key3": "2hvpY9CXNfYLU3pngTfwmkEnABebMi6R8KhzhhbjUyxvSboiKp778YhXJAXofupR9dKfDfLAX4efi4AWB2KnM5gc",
  "key4": "SkwQ9xqrkFJfGQnVoRzadr6WhL5ZRmP56SX754WbEabJUcCYimnaj4oRFPPv52v6A42xBN1HQVoQpb2D1vjCY1t",
  "key5": "4Y6sgPJvMQJhEB5CM8eNxvfWNYiyz1Y2i6LegshUefbaoZDBhCTmBts3nMY1ijVRMmzBvyXQTWE4z1XbpcPk1VvW",
  "key6": "3WZCQCj2BuAW9KY24RXfzyREMHx3kULEJak1bJiKiJjWnHx8q4Mvhark8pEusZDh751DfXsxw4xoGz78MUhyKPbT",
  "key7": "Jz9TrSvE14udhpVahHjG1uz178RrsWygdJUJDoN27cp1Mh53u1jWfWqC5CL8w6vJ3WEHtmk67DacCbFDVRCmrp9",
  "key8": "JEpS17q1uTyw3MqaSnRHPLYhbth3SYK4xjRwXwVsDDbN2Y71XGebBWko3VphoRHivg4cTTZbC7CR6DJCvGjy9EJ",
  "key9": "5AK7zpemDb2jxNXQRnuZoKhyhFNNxbDA312kdnH3GQ45CZBd9JZp9SQr5XtndRYQpXTqFpVMFL6GKesaa3XqnRV3",
  "key10": "3cZWjbFDfiXrEzBuD5BTPQu2W7fubXBv9Y8SjYhjLQ7UthwwZ2J3Xnuo4LbvrhWdGRjYHV7L1ZgkzxGJ4ppjHhEF",
  "key11": "5QhXEcBkaVRZBA9MXEy6thm17xmUxaM7HsgMX2F2nxjeYKTarCxMTZujn9WbpKVqXy8W4Qfyaa7W6RzGhZqqdf1i",
  "key12": "4NgG9QFpezn4boNAfFSNM4aprrc7cf1Sjs1jxHNuXmZLhUJfihPYYCMGUdSPeZDvm1eXqcd2FczjbtV2gqSLyynL",
  "key13": "3XKgwsmRXyPX9drxCiy4UwFPdciZLY7ej75cUY21JDHmssX7kE36VLTaEDMPXXrV21rfkcCkZbRW3sVdt1QKg9B1",
  "key14": "5WZD3o63bA3pNttdvXUJSQAgNw5oFAjZX3PVnZewRgirEmDJtVSA9ENx5KggoqF88umfbFCLNCtgPVF5huNXL2Ui",
  "key15": "5RUAUPCmvYkRv2DTyRLqcTp7BwgpjQ5dPiiiyfuYVuKnkUKzZUu487sFHEvMmJkTfkYh9y3Qz2RkdvUbEHbCtpLw",
  "key16": "8nGLUAR9dXzrwhTjM7tVoLZXJo3XvCpewpz5eJRCHFQG5kiZTqZt93ioeEAjUYPKcxTZmPqHRLCZECaesZhucHH",
  "key17": "3JvFuFAGHdrEmQsxrgvdDzFi45JRTShUvfuJcJxC2YWpUAN78hhQaGnWzGgdeVNQ3KXWhzUNW7eccZ1MT7McktwU",
  "key18": "sjkFHBMMPoirtu7W6npaPoFZrrmJxCAeA4H7ox5qqigVaPxWupLaHKPapniGVxMLPnwbGTE5LV1bQjVtPxQszyg",
  "key19": "2QhjFVQdyaQA5dZBPkauxJDjp9HT9D14xDD9xJ3RDDFtmKLyQyj38jd3LYvBFh2hKVcm3sH839op7VRN5rioHrgK",
  "key20": "5A2QPncVRiYQTnGb4hSUuawURJrjYucN8sBibNdDHjjHzftNmuQgseMxTx52GuzD3GiWGwy3NzrDw6tUfvUZWXUM",
  "key21": "2uAYbyAbSjuvZ5QzAPdFn9jTthLPgTZ7Z1spP2czcrVVQsw3ma5N43qYKBgdsxrCMbifmhb5rCTeMa2yrDkV6nHS",
  "key22": "447ajitevE42g1SSVjA3Ek52tB7Zkwb5fyM8WoVkpXw49VmVP42HJz9MAyivKNmzh5A9q4hRtAD7Mm3yFQbryx8Y",
  "key23": "4rS9unKArUFhKbq9Gf56RouaQstuTdu8DLVwooi4aLz9Z74voJV9DACWY7xgZWQmtmn1buXTexEtmfUXSm6XUZnq",
  "key24": "5BozDHkvpy7ZhXBEHoKoAHQfssRTDRohUDca3XUjZkYi7DsmP2GU3i7d3ie3DS4ouDSVDkp343GgNdcDgaCq9izP",
  "key25": "5wVn2g7DFyhUW5vJMyhv17KLMokpYT3CgXbsXEUTmxf1t99UnCwG56GVAEi3WDyNaRdcH6XqVRvQvxKvmzyMv7eA",
  "key26": "4ABwJW7f2ecArJbDjXbxZVbwK6VTcPw4zwnXvm883kX3BF8NNN3VCA1XfKT5XZKPn995AfbnyfYQnw1ks9TpqiPt",
  "key27": "3HCzedahqhdoYzv6MfzLodGakNXWMaSCEu47ccdmDpYE9uui8vbxUg52Ux76dpGZpJJ6zoNePAUDMs6aWxwUceKi",
  "key28": "62wen2kj4dFikZzbAeJicpy54zSdDzya4iv6WQzp8vMfv9pk8AX3ujwtv1wS56E9fAbSYbQM8gAzx5gxxhZ1SzSd",
  "key29": "5CmhY27UgmzqCQX2AnbVw7ASj7TyM5DV1LnFwUTr8aM9xSxh6R1azFisU61MjYf2wwJu9vFWzQPDbw99rX2q7yBi",
  "key30": "tR5WZG3q7fQ4BcwKbjeudX77cdFPLsfkUbWmgRuAG88XoiRZgogWqb7Eevm6Z6eYehSkrD114f8w3FM3XvmSboS",
  "key31": "2gSBUAexqjRQfeU2Dzgyyb6E3KeLomug42HBWCgcbwfC6swqC2biRzUKZ8brHXeiAcXrv8ZSqpZXdALGSjdQjLLm",
  "key32": "3NXfZ8Zx6mtHPLV9FzZfHUmo8wieS1bcuc9onKnaVYX7XF6EPv7ax6yHpq7ChxHThPw43kZC13CxyDfwuNnr2yTg",
  "key33": "5me2M84Y3GTJCsA7b81ujQHFfkfs8YScZGMXtJr9nDFVveAJqkFakTxnsy6FEqMArKx1j8cW3yGgNYRtBhUD41PP",
  "key34": "2JzZo7LmwsP4mv6pSHv9GhcATLzDbeLyVg6LNcTBbziyNLJAy1qKstFfjp7ezWSDkm1SNGAEP3SGNMLr9RsFWFL9",
  "key35": "AAzYpdMNJBTrcBUUBMYJc3KdywRC9gvfoihDLRtHM3QQQnFrqyaZPFqzjxMRwyHQ9wLNpXS3SmBHXB6Cm17GX8B",
  "key36": "3GVT4SnpYSNWQNUhEhc8LGS3G9hmDw9Nw3juskcG8K1P8mjMkfGuM73kVbasxFeByeBSyd6kaiaEWfWKQDjVWZGE",
  "key37": "68rp2H1NPFM2JtKxQ5nCXoLESuRKpmceaziuD3DZJWEyforgSLFKMBpV7iV9BhmoAaQEdT6CTRz7KPjawe9vamf",
  "key38": "2YVCZ8iDUpUyAwFkoWhPMuMmnw4MtPWSS3PYX2wtW8PFS9sHhujC46rHU9Mq5RHHtVT3BZKJPxWriQgVgDpMjSKc",
  "key39": "2pZt6GYoYCHXoLRm2ot9cdvmv69fqyQtydTQchTzL1fwFoqGqUAVPST7TmzyZkaEpVKqabJW5Rpq3KVtuwcKJktw",
  "key40": "2GiRU5edtDkvGdUswqD9irrrGWd5hcxvXTS4g5Y7kekktz3MzyKRXEZhekfEyukuZ38PKMoe87WPG9DMowe5CFG1",
  "key41": "3ZEszV5bwoFBNCddDfSvA31ikx5RTdqwPHtbDDDQqBzpK2jrw11YmV8TdeSKcjFVX5tx2W9c6U5HUwfopnyChS5m",
  "key42": "3HbnGhi5QJxDgtyfmZpuCzJQL7DcZHHoSbCMidVRBws7BraZ9NmTkqXfcrSd2VDLkSWsdYaWLiY8Vb863x1vhwLZ",
  "key43": "3L8SZb56nWtEpJiKr7Vhr7biBNQBMnU3LaQ8shAKPpwmSr3caG4P8FNW39NLEwEMYoDp8phqWYM92HafeqhMdQ9H",
  "key44": "2x1FKDEQKybBNdqNYP8Z63R9TNHgL4pzL4eS1NK3kqkfh98LufjfHWnU7nxZftXFXSwR6pp1DibhNPx15bxpaKzk",
  "key45": "3HDjYLvyXmt4ZbPDB2VYaf54ShW1itTeDqnhtvZakznRvZ5Fk9Ts6MXosu6ctwn3Uq6jwRRWsyarYpCkV3qLeUMG",
  "key46": "5h2y9w1BiC1SatHDPYsb1AP1D5PL6LJimnNsAXyGsz3T1iUNZHSnyLF9oLqcTjf897Vo1ozvtETkWDNVgK6gU8Hq",
  "key47": "4UrAWGWs7jt8ZWzTxqoWuTbwsYCxQay596Xwxcp2oqKTfPj4eNRpH3ck4DrW813aCG7YDAG9nMTgRfUqqNSAZJes"
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
