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
    "dqcW781NQDDVnyQAdnLuSCfVjjWkZkSS4GjKQTwbG7ihJcSTPbrJFqVRWn5KoZaXhgTLG1uEj3F4p4fP5QFqBnR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CPeuZyBH2nAHKTX1e4B47JocCNjboiJEMcAPA1dQbTQXa7dxvKCy915BxJqAVV2VnQFxRmYHB3Z8M17E8Fr8Tpq",
  "key1": "4BxsGd9fRwhgVPqoU3s1M6r9YGXd1heeZrpasVxdtem8TuVx8vcGtVcnTU1RgCEiJx1ZFYXME6ibPwxmSpEsQGjF",
  "key2": "5n33yjzXN4q266q5k8dW4bkzgFNQQNx5bGpZMcjm31bEqvtnebLzM3pAnSBmaXurXMv8Jk22z4K44cwLX8PEKdg1",
  "key3": "6p6FBXF7zJwm4edpDRsu7rA3L6F9Xi3g5US8cwPyqpt4WALmQb37r5RRp8oQ8dNQ4T1Q7u3MHmmmwNjMMPB15K9",
  "key4": "34yYc6bymdarG7LanUy7CN5faFnnmNW9JSMFQyW1kvjFTzGLohPvezxA45V42sE4eM3kiieTjrbZBL1BSPdmUn8G",
  "key5": "5hV8LUWQnQwGLAgT27GcMVnodMCdV5wYSbbpik4aiPgervoPmSAmDAmKZrwyJqGRGKft69YXu4vd5hxsiaRNB9ER",
  "key6": "5qeaw7ZDiQyEu143P5TQ8a9VrTqZuqnjvYVPeH2TqZffppvUUf4uWhppG5MC8rp2x8XzVqYtccmTgfr27RbWegN7",
  "key7": "eg74q5V9AB7HbZVpJVHXZoTM9TLdnApzVreycVZSLTEksbgCtTAmAxqjuvS61FdQA9149fQQjXhcbFGbcXQcoNh",
  "key8": "5rVLduMzaypY8HnFzMqhi7gd2AxM3WscV7suvAHfofw2FVjY1xviUKMQXW9BVtZa3E2QPkCpQEPtq9L1vYZJQBT1",
  "key9": "2oP56V5E1Bip1Ue9qWGLUtC7t6zbApNqpAKi8CFe2rPuEAXTLSNXsyn4A7JBLefc4timUdYNfTpyShZo9xyqpXX3",
  "key10": "2hJoXbRV2GPeecaVEnBntGKXa29T7Du2g3SDJMFHkHrLGYj3MsCT4QkiS9e82SLvpsx5CzzeVcWuWisEAbBTsodr",
  "key11": "5ckKFnTiYDhA3qeNDMVuGLYCqczr6XZbvUY3FBNKtgyZMvwS7ES4e39KWDrMuGA5pJEkRiP83XCzdWm2h1e8GzUs",
  "key12": "TrqGn11bL4c6BXUqhr6ddHTPn52aBHPv56aVMhpBwLNaEM7m1WjCBiamvR4StQeUyFqtwHMBiR5rzr8dwbc4rcS",
  "key13": "FJ6BjGsXqGcgvJz1TRDKCmLNakTufAQxder17MYSz3iZJbY2gRJyYmobDMENgXbxW1DqvwaoNjvyqtVkEhxGhyy",
  "key14": "58yvw1YkSR95wbBRUNxbayQRgwzWqN5TufSTkbNR1fedp9cad5bSXYZq3wzrkH2XXQNr5H1hX9wZycFucUoMY3mY",
  "key15": "4DAzVhNXVnf3xKUsueivXNMiT1k8bBziMyF7drmpbZ4ugn9B5wgpUiR7cQQj1ya6Yp4M4tJSSFUBo24beucXJDVU",
  "key16": "5jYj4G7QGZ2yY3PDa2xSD7Xp54GqNbB3SYFbF6nXWj3hfamabnmZ618MH5pzpjEoPUd9nThwkFMLL19rWFtySrFU",
  "key17": "3a7gwmJcRorq5Sj3TjP1gnNPWwjMR8y91yJbJaZ8mSEwPkRoAZbQRjv3qSNprv3UvXvEMs5enPe1UEZPNnorfz9k",
  "key18": "2J3d961sWuEHW5bT41rksxUN8AXiPDtTpupNz9nwJWb7ZssW6qecPG6RYsCQHk3BGC1wuUnFz6YHUduPkKFnsNJW",
  "key19": "9BSiDb7pJotT5LcEvyZNWLGa4ebeq7xNfxaYvVSpRLaxne3fxas9M52EZbXfFC2mRLjsRwzZyrxpJ9BYq5KKvM1",
  "key20": "2w4y5Hjv8dyZDyWs7bKN2VYKi83aEm9hQ3xBfGfe9Nq2UtDfThxNsPRZyomPvAsPKv9t1Rh7bDSFiZ4sS46Hpqxi",
  "key21": "2w31VSTVC8x9PSF2mez6v4TTUsxBgTDqxfE6WYRe7KFJzNcpaLjeXwqXwm874K5zV3c35MxV16tXn94beBpZquVm",
  "key22": "wqfJL27H9YeZcW7ZvzsAnm2maRP9L6CSUL8GTc5vZuuSXET751jVvBHjQdFii3JctYESuvLT77VbkBcEwZ9s6EC",
  "key23": "67UjBnYUkLuQTnXF8KNHd9RryFsG9UtzdvmoMDGEo8daaPqgKkSqn6o82vfySr4SqPxSecbdJKCx9cFP3nQdvFJb",
  "key24": "4iAo9SygnE1Rd7iupKqPnLqVA67cesZHC2QrSSkUTTjcXxpyvELbrTKFLmuKt4VAoQcaveypvZN5k5UPs35TaRWc",
  "key25": "5HPiZArLR7cm3gV5b9jhhLs2nDmhfvtqXmVvHroDTBY3WEW1stkxMFRUC6Pp75qKrcsePmBGZqjRW2tyQ3jG95t6",
  "key26": "49XYaZraqDyeUsBdCEcjMeo7HU9VdxLLWUK1Xv5w6jbc1m4SVNu78vk85Q1RFSBn4aEH7YfA2meUHAju7kGFDoxs",
  "key27": "22ha5uf4RVeGvV3D1xuzjh7pbcu4PvweAtKHwKfaSPxxw7EhuYs8pgELainBB2fjDockV4RTPFfoadLkymdox2sx",
  "key28": "4we8GmiXdSJ88rbEbXnnLRCxVP8UE4ACzzM7TE6MhDUAHaeCZyEWCnVyL8nvjWuQtqBS8JX3XXSHTr1WFa4Ct4Ba",
  "key29": "3dksWwZqKoUYt93YEWXt8QEMHPV4YpZDjUerSrWCu7GLNeA6Egw6quGGWNmVKEbT2wt7bNb9pUhfYKJFPm4yMvZi",
  "key30": "2fDEn9h4HYphhZDavtXaHyLBiifeNCYC6F7ZT4CtfGJQmSuKKhQi5tbjw3QHghuCEDrwGazTjYSkSTcv2BMqQCwy",
  "key31": "5jqnBEpxHDpRS5xgpGTutqduXv42c7K3VnSebmUex2BMQeT7E85rj41Rh68TTr9oePxxqQ6U17ETaHsad1Fp6nmv",
  "key32": "2vFSQLdvytJzMUE3wwEp5tHLDdik9iy28xFfQRGcYQaowchfA5oY1vJyPz9mPozsrxiWnyTfWTCEQMDjpRYoSgmG",
  "key33": "TS14XtV1mqozS6kgZLhCULozEg49Yi1gamtwQjXEZ6RRgeeu7q7dwrxMAGhvR4XZFbjrqhHoizn5tuoAZW5wRgG",
  "key34": "2juoPJRdDHcfe7N9uaDE554FSJiALUBmErE4zV7hGqBMWnQoz12q4LGv19sodSjoHubhtypAgueyqh78EX17DmEh",
  "key35": "5HoATWTY8DiW62XYcuJUxAuQTEJL6DyTzSBmmAbJ4CZ3jmTJoQHngUGJLai6zTLYbmED2ks4CGfBXBVzJXAAqFD9",
  "key36": "QAiDBi96T1xzshY8t5ZRy8HY7PyeiLezMW9mjiYaWUhiVgjcKmSnvCL5yRzoHXctf7BcuqCMbcg3qgnf188jbd7",
  "key37": "2RQ2u1Ff1FnKC4n9HVTJkLnk3p8mmiUwz5AZe6MPew1WjqQMUMeFefy57b8VqscSW5B1dFDEpKz9yX35dVJ9Wrha",
  "key38": "2rZCNnz32UNiv6bhpawvNfs4SvNMo1j1Qu9DFM3LMoq3vRp4y1YaQY5rbyAbv4Hi8dDmYiougav3WjcFCVNw2jNW",
  "key39": "54Y7dNggMGSmwPGPK6TTK2R361q6o67gvPE7SMDKy6VPPx4it9dVZKpfqT5DDauikAHpNdHZSjTarSCmqhSoVFok",
  "key40": "5EWgueMxouQSKLKjErXEjSjYRR6cYGYq24vTTDg8iCrXCDQYLYxutAKHksVy8s8XLBjZRWKZW6ZTx3nxuJkMTbgf",
  "key41": "45woWxkZCnQG5UyYxJ2CtANguKCvAFxnFsqwsojBGroEt2MNm9JGsTMCpKra2o2GfoXc399jXrtdHwkXgDuwxfKM"
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
