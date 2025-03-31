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
    "5ryzMWSeHQzMixYGEdpAV4hBMU2igyeqAxkPuSeBaUEep5gX5vnnBgDCfELKm3QbY3GJs6CaWi6vYEUAnvaqiMnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pW3iYKnEifjYBafBSe7bBDxTgpA3jbeB7hTpxLsgCtA47DFmRR8mG2726oAjy7wry9gzuMfbVz5UMPkHKbLHGfi",
  "key1": "34fUEUn1CXPFbCqdEjpGHJ24ETDeQLwtnbaueVdL2rwDJaSogB3xgNxCrPrsaQCenE7QgW2Vyg6wYNf3iuVHZJN6",
  "key2": "4jjrn7isFE69Z1Qx6HB8NC8EgrsHrcFmE44NRAmcDvVjVKmjXRBmmgQyFtufG68X3KrTpVQzzk5EXg8gbtY26BL6",
  "key3": "5cdF9GxSkDs1s3sZG47SEiXjdDkHrp7B2KNwyRs6xCQPdmg6o9GRtpyRaPLnkKjW8G3GFPUKA9w8H78TTDg7jCxS",
  "key4": "2arq75cbgyYzmg339i73jLG2vPkmBse74fdZkhftwZn7U7rKfMLhEtAwTqA7y4WQU1cTfGLZKfNoj1666YiLPj4b",
  "key5": "2tAPqunoTvQtGK83Vp47xjznQqfYnaN2KwGiK5H6jSc366p3EhCCojf6H1ZGQ94FFQ9jzCYj57RXySNKPQH4dKSf",
  "key6": "5gZ2scqcymf2LK4dZtE3hFN6L1m2pUmXvHzVsSctWa43MF83HxrFnSLB88zkkv1cek4qt9Pku64zw641JnaPHV4s",
  "key7": "2HhPmtrZxE8LGFkgYN4h7QYNc7DrAyduwzDc2gFEYWX57G1egbCvNdWjrHqghGgq6RLzBtqqbnRW6wgjh4wSajDS",
  "key8": "3R7uzCxxdWpJDNUQK61EhUbjfjHtN4Z9R2yRMDHHR2V6JV9FuCa3D5rHcGdTU46aeNNjMkEcYNWiJckboBd4eeq2",
  "key9": "9SskFMy3eLCrjK2QWQJ5jjrDMQKP6yNoGHHAo5X3Wi9CU4tPXtRkXSVjHVKmK3XTPkCJbTojcy46SNbtFGFiDzB",
  "key10": "2w4Sgiy2GWH27Sng2LaphAiaDsuXqbBnk856u9XycMUFbSxA7TzvXP3EtZgse748eEcokYhmd8tsZF7MgtmFoCky",
  "key11": "23oCQ45ryXBznEE6EmiF69uhnoaLQTfr6kpxCrdVM7JHdcoACtH9DWJk1byrwaJBwj4RnoNHAdMsJERdp3ZDk6zt",
  "key12": "5j3rtFGDGjFJ2A2U2AMhH4Dbkckzphmeq9A7aTMpDB4WaVCZ8wtPB8h6Gyo1TWt2bPu7afxM5aAqurTbtphKSLUn",
  "key13": "3XfczLeV438wtKpRLVDy95krYrM1zB33onrUNm12AVBPWLGQQeub2ZpHxBdTqJyLX4M4eG5zBDHAbYeFcKKp6B77",
  "key14": "2byAfu2XTSopNE9937HgPTqQnQyE6Pxu2ycFjNUS19diHmf1VfthRm59UWmJTTkTLLbKPHyH4ZeTh5PUYJVVT3yT",
  "key15": "2WL2A1jkCvu9FwJHo11zxRcXq7c4v4Vx9jzcWae1Zdc1DpVXKsKiwd7fm9odETuRFkNXpAHnjYa7mnBYMxaZDRz1",
  "key16": "LpyD9R8AppfqHbWwC4LU1338ad6Hv229AQSPh9Ngb3ZgsK6pWfcdCUc71jy89r6TZAvagZD1jwiZREBdRxgN3A5",
  "key17": "3WCp4ZChDtCTzvpY2odgcnqt6WPGjjr9XvRMgaHZcZuhEBuGKFLd3D7eTcrSFRhj2jY97ABgDSXUKQS9BU3p3bf",
  "key18": "3H7FPJXBtFeLFXSMsn9EnsBAQt52aj2eYBQjhdR926roRdmYSFdGCEXGg1nLbbKBQJLNRTm1oCoGRTKArNAvuyrK",
  "key19": "33vkGh3gB6NcAGRyyQ7RX8B9Nqasd4Txg9Xio353x8amyyLX21pECpTgBreJRKQ44tSBCsrnfJYYKCW9g1cwDn1F",
  "key20": "5mGMG5yHHtUqTFN1xdCuzEsFXY8v1irhQtnjWsysZoCyTuJ8FdKnuoSpu7QME9TYTzVCEiDD8LyyHQLGnwCxYz11",
  "key21": "3QxM51RGPMLBax8qoP4AtxG2qP64uSAahbhd1T6JPSrSnaPDXCwJLEwPRgAtzQRDhq69FJWG7HYPCVaXpF9uJp7o",
  "key22": "3CPe8uA5a1kp4xWofLNeTQssFoqUrt8SYRmccVeJ6hWLTPoTCZJ8SYVWSpsJoRNuVLcR5yujSDPnYH8osCpw1SN",
  "key23": "1SYYF7fJkuAnWuc6FJNYQ9RkS9yuCi3JT6pyF91jsXYbR6BTm9f5CF8zZ37tBm2jDojH8mQFjQTACXaZsin74fK",
  "key24": "3wuE8bjshP2QPi6cFsEM47yv9dUyUUeqDgBXpcZWXHWaC2Jk1u748k8yCu9YFfro4wftCXBmffM9NfQw5rFe77XY",
  "key25": "2krtznBcovEheAw29UA5GPpZotBdCTwyaAF6LfpmFX3pa2kHpfKdpwBJS2QtNpvTQUxWs5FVtpvrvAvvxKcvwwvG",
  "key26": "2nyMdmUpT8FqdU2DBDgpPmBkKNDuQmFPHQLWHny2tLvurbVjZz5vbmKFxzmeK5dBWqTUGjeZuWpC9LbCRCSu9kVg",
  "key27": "2mFCSnetXCWJphWFiPA86rX9W5cZereVH6CafbxKByy7tBrGpTYwFAM5Q9z1ZQ19oxYiMPyTSto6XpK49YgBMBQA",
  "key28": "4E4sxNtWwWdRbjzbE1k3uxB4SfcLV14ny5NbHxmtc5c9Rbz4SPJaM8MumMxAAYe4MxMy8caiNF2TC9a6mR1cr3kn",
  "key29": "36BNL9tShsab4AdLMBW8VhKw7u1tHFwdKKEDLERPzLEBTdZ6QVBRnDJFQDTnJWX1m5rpSmdgmDuhckWqZBD7Lr1t",
  "key30": "2TyRc1CYam6AjnLizPoqYNr3GGhaTnqQFbNWCKT7Eu7YzsHtL2Gthov9NGxJ4kDPB6Sitjh2dzBmDbeKsGuSiQNT",
  "key31": "5gRzudn2Du4hRzQ23HKpt814XZ8FceamBikuSLDWor8xhfdAkSS6naTWXhispvESGewH4BY9t3BKb4oPeiuD8Xeq",
  "key32": "2dMnHK23DqSz1XtXQWqPAhmqEvHHZjvfXS5H15kMXwwTtjufH6nUJMRU7zmvRYJLJx2sN7eUsXDKzXbgczQ8Lorg",
  "key33": "6N2YpGJn8ccYY3EBVUy8AL5f2q6Zf3ARoFkjeyqiSkDKxxdaFxYb2W63kK4ttNSecMn8JUjKzwbeMLdN3kxG8EH",
  "key34": "21dnpW9nmREk5ezyR4589vGPdDU2jDBkHSWFaeW2zzFBL8kN2Tu6FNGuD2t4VDZjxTz5CUv7LFvmmiajfMFP251y",
  "key35": "3W1LV7RA1zgTaxYeVQ5eVjjRNVN6BWs3pF7ponPcRKwfpJxnzcgT7hhF5TW3dobmCrFqGu6jo7ga95QAtZhLV1qf",
  "key36": "nvgdsrkype87kmjHFRp3MESf6aMx9kDUwNB8SQrrm393FMyS8vyRjUiJ3EyPemFSmCcoS1mZYs4Ctfi9HkBBZXf",
  "key37": "41D4ynt3c1ntrTSB2gnLiiVWXy1vh7L3Ug4BZ5ixPwbcJzWdvixjL1wp2L6kt2aiwuCRH28QrHEjBcjMPSH348By",
  "key38": "4UE9HCo3UQDhyqij8vabECUA54VJpAXgvY8MEZ26F5LDP9Np2vWbfCbxfZBeSnMbEFd6qZmFx7hfP7KedMZ1ECLk",
  "key39": "ZdijzdhnXDZLqfer2AdQ5YgiG6DJh3RrXjUL6ecALKtJgNDZMBspSamv3JSsatXG62XNga5fsgnRzgWyWK7QJ8B",
  "key40": "s7xgSNvFgdn5keoVMHpStXEnM6CBH3evh5rvGtnY6uKJXTGbFGvWSVHrEEG37m7LcUerixcdqbDdM1R7JwHThuz",
  "key41": "316Pniqd2yiD3Rboief2pUyDciAgSCAXb5ZTDT58M4VtGPR64n9QXvremtmasxhTVay4f19S9A2x3Qg6kD1Jgrc",
  "key42": "2WQ96Vei9zu4qKwiK2TVW1kRh34HDLnr9XyrMPNK2pZJiwc1HkgpKzT389g5533QsSoqULwydwNLi1RE5owzSrHB",
  "key43": "wGnSpZM8fGKmKCB5LmPGkRcAsiW228hcEXzm5mUvyXsJJRbLdWxmgdE44hxaFvVgypcTT66hqTj6vCrigu531dp",
  "key44": "3iUvutxyWkKGYemc9grRSfKvNbsH4P8aAwGy3f5jaMP5h2RuF9SzRKkTbQT9szuTQqB2NESpckKkdHyXPsBTGjxU"
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
