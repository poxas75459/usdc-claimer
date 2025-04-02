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
    "2crSpwiQWtfAEcob8bWfUKTacVFVNBUsD8M6QAZxezNF5Yiin9mKFZCQnbL3tBXtVpf7DAykxg1mQya3FzRJ1i9E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ras8ZivtVCV9bAWonzWpyJNPWrUPN7svxecHofDLrsSjRqy2eXQK8AGFBSCxkFvznPNhEkZRcX83a2vCtqDQJzj",
  "key1": "4NDQoGVAguu5fubiajkAYve4cxWwmNos47TeL88bFeX4XE1FvGWuMqghrqdAZmq9BSnAggirJUYm5BN7u4d8H7q2",
  "key2": "3jMii4bKQec9nfhGnzHhzaLohnTzcqScB2Wj3CuCxQFq3JSNGX81FCLVvWXVhZxsXcxKvEVRUFV7U1X2uKnotPzg",
  "key3": "3Fc3TFPHUDsZHwbMPsYuMAS2E7iuweRGBH6eS2unwdLKDn5xfKZNT31uSDhRA9qsb8L3HMaWkhYCLZoUPaLCcZE7",
  "key4": "4mUyiTjbAcnwSyhtn8C2RCN4Pseh3o1NLhDScUWNaxRSbMc3Sxu8hAc3vKp6YMmQeMFEc9hMrBknKKcthzpxP4fB",
  "key5": "ju3RbGCqmgA9NPuzdGQWA79TiXDidYXYykbhhA1GPxi6PYj4izq8mVZ3987fGMUoPLwWMG2g1Ep5LvRWZ7WSPPb",
  "key6": "2hwS42xuTbWSUEoZVBam2o4PhHYLqscAATdJe6w48kzZ8iPxvDHr9kUe9559YcxwZtgnqYSpG5GuVJ653bgPmXg6",
  "key7": "RcmXoGsaqMKFsfQbdMkpdzVuJDuGYe1dbvHGFcUWL2LeV7QURHn21AidQaY52mPK3W84mKsRxgSFEngC7rq43cn",
  "key8": "4ffXZWEP2mYprgAgCNutK85uGBDXtaXMMxQ17jfuFjews8Vj6ike1oU4qjKwWmHcYs8XLqsFxeyKqfFAWrLV5tz",
  "key9": "ktXQf69HAzftfjSs8Vs55GTPfrDx7CVGS4p6XFAKJvJFX8N3UyYNYQrZX6z7yjJws7MVpwtnJzMETD39c1XKbhi",
  "key10": "5oW42BLfNBYMAk1h9huNCbXeWkiSuK8hhM8bdTUYDkQAZvmarqFZHnuUaYoknYZCARXS6Xskpz85dmTMdcPPYNXF",
  "key11": "4fTS3kQzPyFiruzsjzuogz1CFMLyauyCNJaxanssDEBqSvrGVmMM2zibVq4NmZt2EdKVKRo5D5guHHGFuDq3M79Z",
  "key12": "3CJDc29fHeb1iWpHzG9twTR8bwgex5359eRoikB8bU8ifBRFF9qcDWbCXrdsRejpx28imuWUiAzUKF64HVvubLan",
  "key13": "2kDs9Tzdyeq2GU3x94TVPe7hnTT3LqgqVjPSer71aZUAyJUaUU8PqaKtM8ZHBBHTc499Fsae9y47TLiwbRk3yBPU",
  "key14": "5FacXC7Ax9Pcw8xrKWgm9bCWqtmBYeqsEHXgqMPjAb5xBe3cJuSKMEhPByLrb49rTk7H7SfdXQKZH65EfMVSRv1R",
  "key15": "533tVZaV9exXGa9NLyesENu581njW7zFuuaChUQQHVwStUmAT6dfF9tz8nJFoJxxd87c4QPU44sS6A1SqdTVLHTQ",
  "key16": "npgXtQgVX8xrqWropgpq6ZDESEr26zHaAhCzAriTv5ZogWn7ozFN9k2ZxbftPseS5CbfBTEASDehhmxA9Hmdwvh",
  "key17": "2kQVpsNysndvwAJsJyTNMQscbcbcVJNpUd5MmRMo3o5zxZXKJUREwWmNQyAU7JfW73w3fzLJqCgSP4BokK2MF6af",
  "key18": "4ij8BnmBa9hgfdjyKfc5WPHQ9H6cTa9eUJhewYFzQ66wNPMuEUFSDFKx9ZApCdqUCNXExVJncFfYXiXLDHAX4RCm",
  "key19": "2wCqisKLhJWqsyvCaPgQREo2mt8dssyUHE8ByskAoZr1cbhNhUnSitPnt8HuSzDG6LCeCvP3rJyEVEQCZ78JfPqS",
  "key20": "49yD8xM75ViwJe8rsxAtJGe2jwP8hw5ZtGjhkgg3PwQHrzpwMsiLbrAeJg9XTkbDzSy3BzCopbWxRMScRfnJicEM",
  "key21": "5XndRAfjyxcg4Ze7qUc3KCg4geKwNbHJjbN8rujRV15hAKUxEz4WTDy1NGoKSGUqVmwiga5YdGRbRxderAxpvpzZ",
  "key22": "NKQ5kvVi62jQN716F8fJdGHu9YPLxK3fc2xDxNqDfnk1v7t1KFag5hXZ3GMRpQ84LHyR42WnfBv8HSoGJzHqE1a",
  "key23": "tZjmRy8weWB9V6HQ5WeEt5MtKHnhRZW7cRs8k1uEFN9Gi2zXLNTyfG1bgHRdBhHF8YTo65Ea74vZ3uCZgLvztFY",
  "key24": "4fXQkRwefKgGvwYo9u4Nmo2wkVC2MtAtgK5RWseaGGSw3kxLpQhnPsKwpwbBWwxVHEQKqf3dwZK6mwBEJrixFMnH",
  "key25": "5sNJxk9mgnHJUDtCXZBMsD91em9SgFHLjZBGbneSi67CDzdFbY24WpbPxqus4pSC75iBVwFjUfZKgaUfnNNmGsxH",
  "key26": "4e4XCr3KPc6NU8PhSJ54zrd8J3inWSwDjfAmffPTaqouXeKcULyLJoUEGZm8xkj6emeJ91Wk6hvKry7LpGp5jS3j",
  "key27": "2LfTLTzkdU2YKTntwz2HTfdQVh5xuGNfmCsNWnx42begWP6UUe4LcHrRtgMV5caybbjKY8xMBsUtvQ5umDk5zphH",
  "key28": "3qPLhjouW12ep3BKxNVgFCYL6Lj6cRn7aiXxoxgf4Umrku7rMapuEi7ii5g6uuzs1XY9DvaJbd2ppgF2uUryAi23",
  "key29": "4ZidbkA3JxCp6K2DqpoiD1VqSWFqcdGFFZQd8frRhPS7Fd8ZJ3NoLhW6TZ8ZjJi2qrJiKr4KNMMhohKXFVc8krKa",
  "key30": "3RiypP9y36VXxJ9MUkbLscSQdnZtLbYWX7wiMw8f2NMTxnvpyVCydmxX8DuvcZcgFpxeU2TasVN89GBcAnstgm8M",
  "key31": "2Lf9bwpX2N4JTd8fxXWEBXRncZCBKARgZCJ1bAnBAeV6DXp7ymGf6PEyqMDBcBgmaiz9NdjBKn1eCc3fmJhnJTEk",
  "key32": "37RVaj9ip9ZnHxti3VrF7KDcgoQSo9J4NRoKBVe8DHfMPYxKRkcUXv31dPU1eTHiV98FC4PrpmZFamoWTk3fdX6h",
  "key33": "63qyjy1yauKeqUps8VxkcWqPPskWaqtKHpdTrQTRYcuonyHRmuGrnHiytV9aYDzo7fHjQYYSPFscsa1YjSF8QTM6",
  "key34": "5YNMDAe25y5BykRazn27B6jow4FtiX2dQbeb61fhaiVnxDs9mxpa13R8PD4VhhRDNMBPMuW1MXJjYRKmBYxufmYq",
  "key35": "3N3RJNKhzzcDajbf3or3RnjTPAQz25rZYKYjEKQdNTtDeNTuJjXTDXWqTK5CUrMG7XsJFnPLtBzuxcG2tDXT8GLU",
  "key36": "WpQcGqUw5DDf45dVx5wHUdtpyssaMNWouC44TDdJKGA8eB8rz964F69gaKrBnenEdXcW9hfKWiDXCqMTcSPVj9f",
  "key37": "5ZMzH6vNL2hDHcSJaEBp4GnqHSWbtDDPjDxr58KviaTXPmD8TPYr6LhZtm6SwMyJ1rbRMuPy3wULupCXXv4u6Ruw",
  "key38": "2uisdkimJaCgZpf67nR2XQ8PS31Ndb8hC8kZmka84AbyTFtXxoSdFHyxf8Prv1wt2PZ76rY9BWjypzZA2q7fCR6J",
  "key39": "vLQidrTjq7HNwqZVe9DQkndLzHCJzQU8zhZPyjQARXgbKMaKc8khd4swPwCgtYUqzv5yENvmtzBYBTkFAs6WuTd",
  "key40": "2BLf22ioJdLqNV55jsBHiimddFHXQrmsdaZzvyTxdwiS4pcLh86z39gXxjdy9MkjEGLcjEyt8SHzfJoJecrnqDZJ",
  "key41": "JvxfaMTRvzqAgaXiSvYxMpZf2i4fqRQoUYrPHyYdN6T79F8wYPneEwtHXhWjpqqCLz8Gv7TnzD79taa9W3m2Fzt",
  "key42": "2i4hPq2VZHbNQJG4QZNQr6Je1yErY2aC6wsMjpBfJYRJXbzueHdFNLGiPCnvrxq1JpubUsNZBYoaJbVLrzW24THG"
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
