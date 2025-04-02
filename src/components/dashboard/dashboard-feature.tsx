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
    "2F8y22h5sUiC3T25K4seXd416jJRTjxTiZFxoAFpiSozWnF9KytsQELLM37A6iyMKM7xEQHJfDCZXcC1LtgLJF4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YRmsR9fA8PPG7MrJitF7RTPi8qCGEfNtTdE1ktVr6Hag23y2ZLZgPReyzq2xr61CTpWJ5MfS2VNHCJxhDVySyfW",
  "key1": "5kHc4G3rqZFFipY52CeCBPrwFcE9vuYhn6AfxvHy1fkXJV4zAodcESyPWPEzke5PbHG38fYZKdrPV8J9ixrWf7Jo",
  "key2": "4ecFwuKFmBLUnSo3yC4LvDk2f4wP43JxoqmonBHK2FKZRZsPiVauuqdYWsPFScfnGX7b5WDodiAyyGngsAKxpCZf",
  "key3": "4f64rn3bi7j37YPGbshU8n4tw7egueFt3WvZoC1Keq95hqvogvu7bdZ1gZDbxbf3pzN7x2d9wdHDaW2fWiHLQpSN",
  "key4": "4SDCcidGBtkx9AGFpGryUSSNCC38Ntz2qcMUnhsREUtCoZMZfu8J3cjiKkWJnxg8m7aGMXC6mvHwpjTRisooSKgW",
  "key5": "3cjQnNnX425SUn8DSy8hqzCsWQ2Rqv1486EoaEKQvqNG6qcYxSQjpVRVXsWtTfDwjPY8PTUiPGggZTELBrmrgewk",
  "key6": "4r9ZaqnbA6hSzLQLRiR51BMVoNjKutm15VZehRXxmS9UHK8HxD9pJwWnv8M59nGwmyyToyJnUVYskZRuRSJ5w5P5",
  "key7": "4CkEtjzkLDBaMgW7PzWE49G3NBmKjNmpzZCPWYtwytfemgAFcUNpLeyPzGoLtabgJXTnerjJyjQFUrw28i67mUT8",
  "key8": "6v9JZviqRoAem1cdMtmDzsQrv7QPNmU3oMuifhczrqPiaT7K8Lxj74UHHHJFrG4LzdeTAw1Y5irXhVzpSStBkJY",
  "key9": "jZ9B7vGTh8kxt3rJTNoTqi7A31T7f3c96z8LEHYUiVridBecChHZnxxpYuDP5Ena3qv5SZvNbWLvidKBMFDDVrG",
  "key10": "2yfFVu7k8ABj5Mj5weqot8jZ88NTZ94qtP8YUBXLrf8uecdtaSKkWPGTZNu8rmgCBQsefDgWiM8gyaoccULXYZPz",
  "key11": "4knQK2usrdUqKDGcXmTF7U4HJkLLsEZZRh3miDGfiyMpwJp8bBz66z5LzCBDJktGfvhQNKzBWChduZ5Wxm6Fxuqv",
  "key12": "2NoenJh2fKgN2jJDdHmjLMhaMKubEzU1sNU1dLDYp4YJGwK2nYnf5iZ4PSSwPdwGG93MqJ4A1wuurg7srFXW1Km8",
  "key13": "5ADrVuZhFnsqTE4aedF2jAfpmfeUkvSzMMh3xcqSbekU4Jc46GDRwZZ1Wx4UVJ51f5YZmuy16XY5MvifCfV5LWJC",
  "key14": "2RFDhUKeWuRs5MK2AkWLBy8yb6z4Q8rnCqmnNMzKw3Gvt1tj1Hznarj19DbwChFrFzuMFqiJj9uqY7LtzXeBrg6V",
  "key15": "2fsGT8hjKMkE4taYLrRgApkVaPEhSG6ZvCPLF8TSdKdeD4u1HjfWgULgBh2PHvA56Wp6hbt3ahLbeCfs17J5Kmtq",
  "key16": "2oJXmjkkJH4HxzBbvmHEZccmc8YAXaEktBR2HjRDrzCKgqkM3zVFyGS4fW91BcHEoEkqkd4Vv48u35ZWAbxzEQow",
  "key17": "67MyxVdxef51epzAj7CzsfTVu4pBZRBjsWBL11S5R51TtuyR1QmPnonnXCpYSbKhzewdfBx8Mac2hofFVoDfPKot",
  "key18": "4cdoukBLhkwiNSrsq5sZCeQi6r1H8WXcev8NDVpoTufJ96exYbnM9rf6upW6AhgHWUaymRk1StAWN7aB6f6zNYWP",
  "key19": "ASdgvr5kFLNhDKgSwJt7PsuYt513BCBBehcr6n4jRsm5WtyaPSPA32qY1iLzjMifBfUVm3ybLtekQtTNQZ97BMw",
  "key20": "2cRpfRUQ92eNBoJkkkeGNzrbWB7D7pwv6EngWqEhMgRBz8k6rjM1z48petGFuvfM2vGaQpRzSStbxLMiAiL1Hktw",
  "key21": "4mZ7apR46T2kUMokzJBefGzdmPWn4SNM98huJPcf7jWSfrMbLzP8gXTXCvTrAh6GTmL83TRckV86uJ3iSRpTmffH",
  "key22": "umjPnZdqVn2wncYXzPVoaTZKGTLEJWTUysgsjNe2dznVHJj2EYetqK7FAGhpUtqygXh6D2XNaaUJRTWunFvJcKM",
  "key23": "279S9RoyUPunzA9CfsPMjYnKe7F7CyMZVxu9f67PeuY26AcQhokXxYRK5C7XJr2wRkwRioo5poqp8R5RzVZk8mfe",
  "key24": "RfJQSdpKdqjNyWuwfzByuJzvuV1kURR6EKLdJVn2ok6EQJ3iRNrQBf4G97eXqCH1rwfSjNeWRtiNxuKfEXpX4Dc",
  "key25": "3uQ7ESSvnqPVwxqPLi2DbgbghxYk7eUB7km6Y6MnfoHCMmdyaP7hnBmksQyYh3kYKTnQNN739Jksf9GHiRpGtSzU",
  "key26": "2Yep3PWLXMWgxKLXicZHkpqLAFEJgPDeArTM4iw7G3LJP4BHsPeKpP9SGTaTdGqG5QS5Vui4JDzssrYcPjnfk2Qe",
  "key27": "5abofLMrtzSrLeZEjD5mFraWhxhRN7ca1hFu7r7BWtWaQ4uanpYbeitfQHNCnteyuomHbdxrvS9paK6VZJTu4Ebf",
  "key28": "3UYsrGce6aLmXGpkSTwnAz14eyhaohZdYxDMZRS83TDAHw4s1ByucUUsQsZsh6Wx7DFfchCQZ9zdANZ4pQnPB9de",
  "key29": "2GfSjbcXC3RCN99EA4rqjXeuGNhoejgussc6szskcnB3W6yhxm2rTaaE5BfdDdM1gV2hKUAvZ52LVywtGonrogDo",
  "key30": "4CbKkCt9ynnPAQ8c3xacHeDZq6xka6u6iWxkeAWoqNjTjh8ssEWMqjbVR3gwDCVcaWtrs16gyNbgaENpAhYmYDjB",
  "key31": "3UFfHge8x9uJyBZA26qZXfmqymgmnr27UUxZz949AtECWJfKRzXEvUAzYJgqtxnoi2uPjrqC4bZQtAvja7LYoDjc",
  "key32": "JN6vSTL2wvCouiUuPmfnZ8Mv1DBTo88UUkmGYzi686WJUTYLGUbuNSuiHh6yUWYriMrcPCRF94SYaKiiaPC1WkE",
  "key33": "4sp35m31wSkXjFRGYuaiiTXcChs6tmSxFFJz4KD2vFDERYbvb5KtWNDpGdfCxNUgYyXrJraCBkAZPDuZwAm24uCs",
  "key34": "346s9gbZHsHZoLdne74Zn5enCDh7kePTuw6ntHPYHuFV1wgVtWKJjPmDgTDpYJW8K3upLap1ZEEVFF5HkUHVczk2",
  "key35": "4utK2652DUpxCadhkP6CrkUMTABhv8w5NzyuAM6cG2Mvw5gtxXW8SroUjJLxfTfpktfhhJjP48tL5puRu2YFQoU5",
  "key36": "2iwyLqFbdaqyE31Qaaj4UMWKB5X7WRuPzCZY8kX2MZnin3K3M3cowV813bbYsSKd8SMj3mte399mcNkbr8EdFuV5",
  "key37": "3wBHMhi2Xz6zH2vQ2W3NWiG3tasWXNCGNjn6p4zqHpYd8fzHjZwpjZeMn2UkQCfYHYJ4YjTL1hYhXYi4TVg4RwiE",
  "key38": "2C5nyVg9mwya9bn7QAskNs9VDyPFf9pRVfuAFoPwG6adeYMEa5vNEzkEGT5rPg5XBv9hvwBFZEW7EUUtAvwwpgs",
  "key39": "2t3FaXnuN8xv3Cty3qeWf8YGe8hEupEBdUWbPXQQeMbYaNonZEcuNmt2wTopNMYCFAoyxz57iYJGmfNfDQNEYs45",
  "key40": "4CL3vpqwmyqPUbEavkJNT5wC1dDrhjpo44XfjwPFzg1B3dHYSvLnUNNXw7r1sjYNSfZUbxuK4uiTb5to64tCyQ4g",
  "key41": "4zAbExt7UxXSQMi937y4F1Q6otrmwjPZLanSQbtdyDTXRSBrmfvFPkfy8oskao3aHMzJVg2ZBm6t2ktwCnxXDRGw",
  "key42": "5YLecMX2e2QQYLK78cgUkcjwCN8YMghqsXaJnb9zFZx31MLMTjobiFM8DyKG1Fw9T9gbywhFaRHDxoANumDuQgVs"
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
