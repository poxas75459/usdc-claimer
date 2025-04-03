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
    "564CJxE7ez5QDZ8xuiffMYqZAyRMKr7BwpNX5gAfDZZNdYLdbGZdJcpnvrF4Kan4AqjZ9nx4XAAEygw5JHm8j2dK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nQJj4BfqhLwB4YFZpckd5dQGDpe8GxJ1tjebWhjNsyskLWqcM3bUeY45sNCgCbaB722rznqz9MdSfR3VCtZKG7r",
  "key1": "61Pzov6dw38rmZmC7X9yV4yiZGfo1pdxWWx7xc2zUYQnnFk3hjrSeBafMETo1j3y9RjPKFxH4sPZ6u2vjiYmMDSA",
  "key2": "3BjLJP8AixKMSX44d5K8sLRMQfwm3SHL1Xz7keAMmMdZgs53KhvMx7giCjTYscbSYVNBDM5qgRboekFiKURxvXoW",
  "key3": "4naqxWHM3Q77TwF5m3EWQUQTb4e2eMBqr6UPcKeZGyFSank85FwUCswwdiiDnaDFBax8kzkNouaPou4BTrmfrncF",
  "key4": "5uhhXcJL7E5wFL3yzzxcBSKwvStjAgSY1SUeNx9T9QF3HkNumasa3StZTs1fbQdb1BHRbA2Jg2KftttFGFE5nDtP",
  "key5": "34FxpSb1Rju7KMY2BLk4TYsqmdjUg3f37yspZNgRPLRQ7YjMQsMZPJFv5n2d4BWAA51edmsRsnD5AEAReem2GXLa",
  "key6": "41CoBNjEBYt2qx3n8Np2HoXwRtL6Z174Na1DtYi4Hkhr8yiJqyuH5xaH3VgYzKezdwCgitXAdoxbAyo9fBrAeANB",
  "key7": "2noV75s3hmusFGnaTLmXVRfL95oxSLFEM9gWavnu6ZmjCksbMTQ9ZAS1WgaDdnUVpcpGbzf9iGSUGRRB7M3oyUw5",
  "key8": "57wQv7AFtewdPR2qRD2YKCWYDoye3JJX33F8zbdiMASGYNq1M2tik88AingKoG2mcEvCCGezbzndwd2U6s3JdCbV",
  "key9": "jPecqZqyRbUoUzC3DUzVw3UXMk13Wvm7SConBmcfTgtpLS7PVNDS8QToCHsuWLEZ8cNyJRdMHfFDcVGQjT6yj1x",
  "key10": "5XQUHsEEWqk64d8NPise5WwJP2HiaSQNDubc8Mh3k29AuzSY2PakCZPvTXfV8cJJC2768vt6QsTXce77g5um7Wdg",
  "key11": "3rZfAycRBMKtAXr3oDXAn5YyoqQatDMEg44T1BzytsPDtre8zuBZ1pkKqAW72jwu3WVbYB7fgua9T1aLuUiKYu2i",
  "key12": "4mcT8QZoiHhqnsutnXQyGAzexSdD5S21SMgaVksgYdyUDtKbXgWuyQ5kTUQvn4LDSPZSNkBbeRJRfBS3nEKc1o9J",
  "key13": "ErjraxiTh5adgW5YdTazAoDUukKEraBqrk1pEkyGCrnA7qC39BjX2cGw7LDh36Fyxz6cjYnzfLS4fzJy7jrjzRw",
  "key14": "3tsK4zeJvGRJWjtTM3RqM5RyB74ZkzpWQYboYEcQpDToFTEicxAwuYG94eCYa4DRfTe2y8xxC4bcH1GBp4ujQLSw",
  "key15": "3nQhEqcHYXo8EqVQxvfVypZtxpetp6qdSBkrwYvkfAvyGpRKAn573njT56EBuNjDmcQL1Eu8BLED16D385Tbaa2c",
  "key16": "3kFVZvsT4vT8fHSVX3zNSQRKukmHRqZKhMtZ7gxvT1Q9ezsHHP7cRuSFi75KMLPnoY9dWqBqUbkMsuFK7ysqKSf5",
  "key17": "TN83bprHDMeGGN7qfuTVGmBYXyFdPc4cxAyLh7Aa2TEqjAUJkFMfgtasZFruE6kbcYJXyck8thpoT9WVtvqTFT4",
  "key18": "56V3tmJhvobSt7JGe955R53Y8KrPFLoXvLRx15L8aLtdPM4PjGqDFG1sPTu1rKnTTab72ipy3W4E3GJLuDcJcWw3",
  "key19": "5mupwcncWfPttTKNmr3qfgYnQxkNPyxLsy71Dj8z94SamkbyqPJ9LZeimwbTzytgL72PtLAcAyvW5DYPzb73tb1Q",
  "key20": "DJN9pCCpwDbRPnRut6QxusKBoUPd57qz4y4BMgC9Hkassw5NVwp9udLwM8ox6wzJqqAX2fTs2rauaM6V6E4XBHF",
  "key21": "2HCpTsGZnG5d8mH48RbyzLChQxXmbX76dGb3DMPyWHRbr3Q2NScq6PUvo4H7BiuJqxg6GNxvUxshcEw6sK8cWyJr",
  "key22": "3XnnD5cEZqeDtrE8EY62bQkFgKABvWaFH98nLXwTYwYfDyy2EKq8SZEp7EKh19RNKFwT9TgcUVpHRUTAGvmjJj7B",
  "key23": "qyeBYwBXobvuwofxXQbMRnEyYgEdE7mSXcnRRAT3iVbKqGbpJFAc8P4h4RY2hBqfrXmDHdke9MWgt8YuUEi7Kof",
  "key24": "4UHUiEXmvh47QrGp1oBANGiFHiCPuTtKCesJ81B8S5R9th4wVdQGkWT2kvpsWoh4vs1D3s2TT71C34RDu6biB5aG",
  "key25": "3s4nreqSfzNXkN9qAxrwsnvX32Ejc9fHjb8zykRzZnZks86S1qSobj8W1KSDJ8NHuAU4DWXqzVd4Twb2i1H7fedF",
  "key26": "4em1bAdXJwYJvZztYs3PRha7mcjXoCebDnLiBuQDZ6gs55qcnQVfndbjnF3feGN8cz9mDWPVQJMKg5cq5nu4cWsF",
  "key27": "5BpHaK3UCHm9RoMuZ3WNAkwuCx1kTsG46SnnJhDj9ocEN5FUBC9jaqXMZgH9GcqSkT6r8cqyCq7ZGhBqt3CRjheY",
  "key28": "4Rc2YqKDAUm8quxRruKSJwNy7rd98ajR1czQ8JE2ySCFvH8FVASKvxH1ZNJdhTw4HXLAEi6hLPmnZAAkxzGquZS6",
  "key29": "5RjNLUd9qv5Vvtey4rk4ATzeQUcxVV7rKXTHpUtEGDXGhedycB8MGWZUriKi5RKz7xZhg4uNK99d3YQzBi8r2xzz",
  "key30": "52b8mcGdTjDDJQNMSPUi94abk6XtEV1YLnvS2fRR6DmjBJyJtGJUtqMVtec1XhsW1UhB5KEPfAwW16NKZcNctNoC",
  "key31": "3Nc2RNHc5J5y3XRXazYKhrbFFk8dQZbxzwq76AnAm48YPdXuzUBvUJaDZfDqyCZKVbevT6sx5rvrxiqtzkcUKhhR",
  "key32": "2swr7hZxo965CMaiNMuqtvRRWjonYmgq8jchmg8bCEg6y6DEyL6QWJXV9oDLoDePqDFLx4MxhpoK7hnuFCGY1Cd2",
  "key33": "5QBaDo1gY5iGy47cL27tDFAQz2pScvMDttLn6w6gwS6m4RyTEdFAKrCDs4M8qMqsJXiCvcRQyKjWFCSUpJ3q3wwV",
  "key34": "4oPqK3No2NUS1U2RdYJLjfKBxUFHmNa2uxYJ28afd5bEdnRoskz7gRu8v1sDSsRVMQEPPDzcQUHFwFP1WPoEdNgS",
  "key35": "61ehV6Uq1VZzdYw5KksDWrVi9xwNy61VST3TkiPt13GSDSpKPdBcKxmTh8whR8xuP4LVnvpqGQQTAJ24JcbXEFqo",
  "key36": "53xQdGNCFn1QDhMKD4KGYUFJ7cpbPsfMXd5YRkmfBZz2Zpw8Gvvh6GToosQLZcxLNMwNtnwvPXBcV4BPMnvS2u5H",
  "key37": "5MaSLGZA17pW31p4Tc8e4yoH6WbwxVa4VEeqYJxUWqecRjpLXbqKEBLfFY5fcFARK2Nq3ug7dLbct2CttZY9nyor",
  "key38": "5zRqw2bWoH5TxZdM1hYx1DomA8M9FDBQB2aFJjWLgSHtcE28XXZZi4DZG3uGptoswuKhjY18krUVA7nh5F67DQAe",
  "key39": "ZWsBAing59XQaHVUHLZRB8DRne4P8afvdLJiVeKYZGXcju4QEAXewy8kC9fHQ7hNoK9A7CZod7bGq2RxJSXzYPd",
  "key40": "5QUopF6ZWzRCanhwS8sR8H93kqdBaAXDWjSA8abS37BU7zYftXeNBthmy5i8ucKs9MNVYDT4a4GWJdcKugSWFPow",
  "key41": "5Abwt8iNQa1yQ3mmNwWqts2kGxL4bcs7UjActX9VxbNYLyii9bjkJxU2ZTLbYVqNKBGNi8bZsZqithRmRD6tAYGt",
  "key42": "3K7NUXMFUDU4BGkWos3phS73sPi8Wps6QWnZU55EUwDRJKcptxYPXYCqBmTRY5hwRjUbniGe141UfmhUXEXaA2LR",
  "key43": "5KNYt5v4rE27s1EzhNfTQhp1pRWLSbH8uXYo53mt6ECKLnMpqBno1Mn7huTPxNEozkZ2YpsGb9NUHrpyZrhNk2Hf",
  "key44": "3TyGEXVUFvSqV4SLzutRmmA4Bi1uPDVbjjrg9cinxK2s2c3zyVK5DtZDbzEMQLp2h4L8sBUQiKVapow9CzLSKM2B",
  "key45": "64QSi4mNYEy6cvVFUpXggDqt11Mh9YDHrMRiLRC8RLyf72W4rowAfAzeoCxCHhDJYbmrAUFY3xUeaCUnZ3xMEXtZ",
  "key46": "5bckoqEsGjybtNTFcvQuDM3tBiKhAtZpNervZz4mhgqAGSfPkUjq4xAFZnqXuNTHsqtsGLd7UP5j35FNpL7ae1Ke",
  "key47": "21grFjUaX87BRZdnBMKMdtE1DJue87w5MZ7y2ekCjykccD5F1oU7z5AxdHZHPpqNHQdrrCtxUsEXK2rEpvGszFBU"
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
