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
    "3JZ1BFQmuEqBssjqQ37MphndZNzrLV44zSawPeNzEdoUKUFb1HUyNXPK85FZM7bt2LqoLU4kRiCbHPxLLubpDiiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A57JNY1i9uHnck46aLPemM2WY61ZqjXaK7TMV8oGLeWCbPcTV7RZCp5QmspmJrPus4MtyLvGk7RdHL75FTVSSbq",
  "key1": "39PbGtd3RXoyowC5X5B2q8gK3DaqgCvYSLziwEZuDrxJp6f7ZP7sjPGwPeQXGTBTozX9isnaw8gETVaKViekRRjp",
  "key2": "b1mAaCsLUQ1zvCNoGebLEiRkE8kLoB6KMAvvegxgLjxbe6d8DGsLTyo9ShzF1S5r3DFNTVGncKQSjKfLGRCnWmx",
  "key3": "2s7YHcJBeq33rviGnPqLxGHv6t33p1tmQo2p7kmtGjmwuGACj5WHTRz9SXFcTWy2euJGVE4P5Ru3Y51dja5gTNWs",
  "key4": "5jTLzkFnMJwYBC6QCcVSxCLjsSp9t9ZmeYNQvqV8LpJGkisN2x6RN88ArZ92QNJURZATK4Sa9BccX65nPBPZycyj",
  "key5": "55UsRspfEvUtXiZefNJVLDc5MudVKbjob5iDEhguHvHcJNDTMDEZmonertP57a3kzVVVVGrxbXQgHsnyxMv4hiRH",
  "key6": "5pqFwjfEQFVaWxKTcxGtfmdUcjmrEeL63TWMNt6os7Y1huoxb8RM6EM2awjtyQdGP1ATBFpNPaa4QSKp1pVg4dTx",
  "key7": "ETmpz1zavQEoCktLXS5Nr1kG2Tt3ALuZtmhhjZAYGjL2WRegkfbbExyyUmSi32xaDVcD121ZokvFnzoMTDcgMxa",
  "key8": "4s3Lm6AZgQqfrKjCoLNzcAtNd4RDVCZT4kGDQxSZfKoutJHfwagBhm6ko1eAj7zQJE9gqySxfgU3xwannhqwKTVe",
  "key9": "5TEtb39Y6pvhx34sVmqiEKVNzNxguqTSt4DWNBoWXwjUjwou8fGuoS5XoyCu3GDibRtst8fQZCtHFgFqJxdbWYUj",
  "key10": "ECSzyKGSU11bJtVKXcaPmvarvjJjDCu2WixStpruEhWWbX12t2UVoZBffh63MduHZUC1gAERAR1x29gqcaYJ9Ep",
  "key11": "2YutoWRixysainQD5d5NujxdaRHQGNhFezNrizmJ3qhMtcg4x6ufFfMPE1fZdzjnmpuKrhXAPcmnP4TX4YGewVHp",
  "key12": "3fGsqr45Ec6vMqEycdZzNQ178WuL1fEpwmK8PBriKiv31DN5HT3y35ZVRcYfFs4ui3ELij8PqABe3q6hGctckCo3",
  "key13": "4uRWdaAHUb3VXt2tgtnD97VjvFxcmyg2ZcdkiFPimws3Qd7mDD6aCzTZGuQYswsEjGz3StP44jtFqd7iCgLFrKdx",
  "key14": "e9Vk11eiKX4hgZ6w9GumUSQNCd6xKE3FdFFJgVnrsJAUdDZzFLMT8oJ44cKSGbqQMLxAqZeJcACLp9xmouJiszq",
  "key15": "2YVRauJUga6Xj6PdwzL8MXDm4itdLuRFmcxWqq5orfDL4AjdQqc8r5kCGDDYBpba9g7vzZ3PB1Nvsab7endx5ySB",
  "key16": "31MDGsFZMdCCVpNyLipaSUfJUn9QYJeprkBmnqZoiXyfLYdff75CseFtLzbCBykVg5Jf7XM9ksyjWnGesASwYJUi",
  "key17": "4u7EXrr2KfTxKp29i3FC5AoGAFvoBvVmHjz4gss7G6VQEH2p6ASCa98CwYXcq1C6qk8A7YeVAuv73n1z4ERCUcUV",
  "key18": "58YjEkKn7iXNaeLfEtzinZiWJEy9KTCJZbDcJjb52tbTnJNm7oTYf45w8d3uwmGZ2SzxaTvTuositqSw3fLMmhb2",
  "key19": "4t5UJcoTCswdqcPdgGGAf2RChxx2JR93VGy3sDBiwewSwBhRmGEyFF6BWFjsPrRuUe8LFLE3N7jebHyvxLaRhv6N",
  "key20": "2kHRz1nzKA93jXVp4GDnfsvZ6kbe6d1Zhjude1xbXCp9Kz29BfeRJbrvxnwnficrZ7zugwRns77UtmNvvPbyfFDL",
  "key21": "43xnw17qbtHJxHFetUPqtDKQXGkLRKu5EcFkAC1zxi9iqnY8aBHpYcf1vdTAbGo96kaPLZCVdBjeKpSSc1RpEhpK",
  "key22": "KnegyXKAPfumR6qPXnctHZHBYwwby31CixT5V8ziP3rNCNLmgSkJjQmAogitaebGDKTJm8nrWevHtVPYJ3C7bX2",
  "key23": "2wLoakCuhQBbn2pJm9JDhDAQrVdPi4hwUkvEna25q3stTFsfgCc9iVdeKzM5M6htUa6Ga8gbrKJMbWq9AKSntgtU",
  "key24": "2wk97ND7HxwJK7LXeVq9BbzcbpypezNG94rfADcyCKuhFTjy4FF5T489RXAL1Dwj8NmSYUBBLYTSjjLjSUUAUGkz",
  "key25": "c4UW9Gb9y9YVyRMtDr6aQuFSZYsnm5HxGxU7vddbAWzRH3aomM9D5QKeqFPsms1NWP8jE8Coxjeh587rxCnugCz",
  "key26": "VNFTqb1eSKg8ue6VdHALtMoAeeThQGws5op7VWkeZxYLTKSDsEtRmJPsXx9VFpY2R53R6tmaciqrZigqZPk56n4",
  "key27": "3gvkKr28y3k5vNZg3ksgTAFGmT1hTTWY5sYHJbv8dv8fwGJCf8gmLTScqRxAZBzCWDaRUPUfo2MWKkcFLf6noEtC",
  "key28": "4nZZbms14xcex7cNmSKXrg4hyDmLGrSnG16WqdXDGXLhQU1yYfasmvcQeah4GN4yjJjQT8vFsiHKDjzYAGg77N7P",
  "key29": "Rje1kEgZgx5X6coxLdLMeBci1QgdbV6b8a1ryTd3HXESp3raAaXCUFbky5yjyid29nJ2TzGDLE2rJ6yZtQAX1Fh",
  "key30": "2JTucKyhF9ogbUKtUuv9j8m9mgVSc6oS8EyQ36MNx198sFBLievQKEQRZiZUTqkz4TF17HeXvAqVgGGoHW1gU6qb",
  "key31": "5Sm4wfHZbr9f47dUdfZEUBcPjR1G1SwD1JkikKpJtWRrdJ7e7HpnwhLJFW5qN2JKhvfMjoQqrtacTKe1aDtTq9HD",
  "key32": "3uJRktSmamfUbLXZ57Romijqr7d7fs14t6aM73FrmrMHheBtxFivPSJoPdMyowrMJAY3UjsCBEfDoMQzCpafWTWo",
  "key33": "ZaubfzMw6rQGj8dpsicgeRBYuQT3R5FNLLXyBwzKCNxqQbsxZZhS9vBYZLvb62BdVUJPYW4nhhh7QnKwknfGJnY",
  "key34": "3hZLzxzzMrm6ZNMHoRJJ9DLacmH296HmAuW7cJsHFiG2h6LLPxpis66zhtHD4fxVVqhocTKhG5W9PqhWR4GaHALT"
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
