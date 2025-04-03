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
    "5gWZhvVDufzikd1VXUAxFnSARgZk7cBc8a3QD88qRhrzWqXCegjfmw6R2nkFFue4MjbGCiRgKRXEVdmh2se6KdDq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nxMRtYiBNr69HZ3Po2NQSriz9tfYJ9mMpkwoeW1qCSF4ENEv1CYbuQQ8zirMdgwXrFLmMFxBVTmrFEnggVkRRDg",
  "key1": "4rHM6Ubo9Cu49N2QA8bhLCoRoJsDhXATgHq9uZy5nQTs4j4jqVq7Bpe96GyFPvUZqbrfvXF8RVpy97oP1E6cWdVd",
  "key2": "3wKQnkznHGkgDJSc99Vs1TSus46shspa4DvicceZTD1h8EsU67N6JtEYYjT5BKKp2ocEXyxsHEjrpEQBFfZgMTuR",
  "key3": "31YMBtrYupzMYWTqjeViwKJxqxC6TMww5GpsKdivxi4KAndZy5Ae7dUAntkhETMoP1BEKKw9UPLtw7vw1T41d3UW",
  "key4": "UKj1JTt1pyZpbavf29Xg4xMAyJtJ5etBmtCfpfAtmJj4zvfMHjpTFhA8r9xoU3Cpf917XYzMrfSqboRABymfTRS",
  "key5": "3BsfzP1UzppNMTBsgXLcgxS1Qfm8gga81qAzce9XXEgv5zEH4B8U4aoWpMEJ7PcdyRcC3GSbrJchpMMsmd8MSkGG",
  "key6": "2haJq2w9yS68xdgMfrrboAYd6ejE7MAv1usfwnbUnouc5dbTNMnC5iFMQUtm5LrKqxfYgda4TThX3YSPSeGfKh45",
  "key7": "5U747EbcdmygpjETfzYK5VQ1RBPiY7zCKnGcuhmLo4LqDxf3QPBHmoZn6hgA6GuRqUmHjBe52o9vbKRSsihGzUsr",
  "key8": "34v162Utj4hhagSfnFwB87rbMyRqj6xCNGjogsy6Uk2SVExDXrSZfNeHmgV2ZzXCYV71erifNk53GZwkfsgeF26q",
  "key9": "VGNPTgb3nqLfzqEjunezPa6NUJeYEyYqL81c5Cbvq5m5gMRCJBfXdi9nMobkx3a4E3CLdEwSn42Na33gsqp9rrz",
  "key10": "3mu5c4ofmdyety8EtDnfMdRAKeEcoUnRpXWeUrvXzHzDLoEg8WTieBgq3Upaf2mGrYQxxwkpwUtZNAmwvKs5YdSQ",
  "key11": "fdAxctCQiPXT9dAJ1GVdBo8KPyhqFT2B4g75KVEHfYyqU1xAzHwhTTq9bRiMwffHKyNPAnmscYCB7m727QJg1gk",
  "key12": "5j4pCgvfSw5dLy2jJZtdTvUh3SdBVdccRAgj6Wwrn9bKAcst5ZF19ZyyXMBuWCYbVibQFqsxNXtf8WEEaydPdH6F",
  "key13": "4oVgaC81FyNHvaxZWraKbaC8JCUhKmVSSiXuCMPZrUDb2ovNBPGGe5iNTap9DLBQ8q7YryirTyQX18WahMKVC5M3",
  "key14": "e4BNZ1NdiuuTcihLFHvL2bJcKpS2LXHLyu7qGiAKQneBJ5XUuojcfUcvDbpwR1jgRn19TSUL7Zfpxf72UFcVy3q",
  "key15": "438pTazYwtyutMLbepZoqVsYEp2yUA2cezbc1FttUJQpmLL7dU6rtPLaJn6UwEwLTUB44uaSrJpJVBJXypQrRdrq",
  "key16": "5CFCCEGh4Zz44wPjGxeWy9f89pjKDRTTKCvzHN6jBscGz9MdMpuHsLAyoQXNTFPGqrLSiXVyFzJ8bLjUPPRLJBR2",
  "key17": "2CKVoE9BnKGA8xAWAtYREUarULwjupEBxwaiBJdY4zNyFm7iurrNNZXc37ijgKZ5yyuwb1CKKZRTGKtwPBxP6W8u",
  "key18": "3eFsCK4p9uoQccwnhYvbCKkKo6i9E5jkkzaL5zsiWiSBNf6zpdyLju3WdRr4UPrMEFsWPDMEJiUyL6u2gvDCLCK6",
  "key19": "25kYKxHngs3c5UtTc18Ydq17o1M9ZN15RugH5z3KzDLRYmM1f4pLQtikob3JFSqjEdR6c9UkacWJ8RwyQoig5wLh",
  "key20": "3PHBBJS2CmfwdkiZdAvxvcH8YQK7pLnW8LAiwZ4P5mewfSupEE53RqZFYQD6r1h3bpaGwLyMfwiGSi8ensB9utsA",
  "key21": "3titDFvPLXDYTAJHvbmpztvs2ybCXs2NsiVvj4yZS5niPsbgvqynJqiDJ7syjhvEoawTTBTCc75dZWw83mBV1aTG",
  "key22": "5UatgiLQ5ezhq3pvkTnvqBX81AKbcguvsqyhAEijiS9oUctUiAgFjfTRv1Ly8qp9mtGHK1dqt55LU7PJZZmtWs5n",
  "key23": "4ZhDJpUdaNFGTa9MRZMrKPwSZ8Rus9X3d5iMn2yFxiMEh27NGRiMSY6e2UDudFTKUQfnNUQbByksJKdM2q1uTqUW",
  "key24": "5XNRQ5jPxwfVEp2GRNtgm4vYE1mXiHvJfo1RJdm2xF3LTfdzxpcyVh1jWSgtcHQBDgpTMcjcqnwHixMY6urCyuyS",
  "key25": "35nBNbQKdMbxQ329mJFkWP3Qj8WDmUkZk1Qcy1G9QmZhZwwzDwSouZDyubrphRC74EMmNkysKvb1cYQ9paARMwKa",
  "key26": "4UZ43TaakCJ3ufesZEUTPK9WUDbTT9MJvnnJBDESdwNsU1gETWrz45yqS3efTRcVUR3FQYasC9KhxSGoUG5zWkeV",
  "key27": "2uw4sk2g4dCKSMpMA6vet2mDQGKhtWjPwG48J1otCAwGoEJLTpgGoszk3MkMVTPfjLPEAsAXsVjrTs5iXTzdk57v",
  "key28": "2Lf94mq5Vw6XqSBxUmhZ52E46Rto8UUQaPCc8Fc2fdpEzvrWtkpM7hR2UhRJKRSdDQU2xJGBRAaqNV8nkvMbEdwQ",
  "key29": "5rtnEGkUJ6cyKSAmvxJnb2ptTuXsvRLQdcw7P5PGNZEBqtQ39xPZ9FSY5MfNfVaGhUhbzQtMqXSZZ6Nv2SS6itRr",
  "key30": "2SWVQC2BNMaXLxvhxCSCAEguK1Dk6VbLN6k6pb3n6wNjGZttzJd421rfpekdijnSDXuQAXxjkRNW6Zfn8JSThtk4",
  "key31": "5qBeudHVrNJ3cmHhHn4cybCZA9AdkBSQxxzEB1AB7WJ7iGi71MT5vucH9xy7baFUqjoHvCe7zuR7sWXQhqWRf37g",
  "key32": "5HZUBhFqUMVCP6NSdPgxng8z3PNYz9Du42RyLu7MManvu9QFqsBuAEfiueHWf83K5Cy4VVCB5uLYrmS8so83bKue",
  "key33": "5dkaZtPENr6vqQBMMBaEPWyQivdXajE7PW2WZtbwuapz8zXv7x1jB5kZUJdVuaUGZvLZh77eCdm5ktV2QUhhdPPR",
  "key34": "5M7hZ6WocfNS3sFnCZ9wZPf8DQHgeibiatJ8n1FTnmcUAYPCy1kmYSesZaSkZdGZhC4V4mkzyXqnq2favV6HNkN9",
  "key35": "2E4HxQnwV1QLB6iLSdsfpz96ngoGu7vWQhdvHEugBVScFEbN4dpaMCJvHZX1jpBpDamiuf3uWgNv6ersmjBo4f8d",
  "key36": "VRTVrF5CsB9uq5Gh14WsQ9oeLmWFridrsuseVdzpG5SK8CFWyYB5L4veYziiepJuUDapoLpY4duVAPk3VMi4Bs2",
  "key37": "32KdtLWZk66BPJ4xP1S9UfsWQvR45ARdLRMW6GAW2jYSM7WZeraTcjqqogUVy52FQRVtk2EfcSeE433BiTBhB5eV",
  "key38": "25nTWDdKtfTZFAAo7a2deefSPiNRBNE9aY3BxKo9cKm7Pe9PtBbJ1CzHyJfQSwWstMV89S83sMU8aapXtZebMRxu",
  "key39": "3Jbbu3gzbwRuonowuoeBAz6qvVvynWd1FCND6J1uYBYMy3nvXTw8MQYr5qS598cdYP39c84EtxyErhZiqSxd3whz",
  "key40": "4GkNwKjYHmyovDsSt5g9p1m5kGKa3DaMLMp52uGFTFFojuw5wKpqCayxu6Ffum6sydDcoSfnYm91PhXVw8koSkb4",
  "key41": "2P9G7Jea5hf8h5atkNMh2VVSvB6JSFmMojAqsgUPsodoJJLQNrzaaRhg3LvPbEo2m9KNEnDcpVmrqENbggoRyLx2",
  "key42": "46CCMUN1YouPLToPv8tX6stBvE8cogngPhnXhzx9KSLCcvG8DHS7GsoVJNVE2i1dFFgPVzmeo4k11oE4tVLGDDxG"
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
