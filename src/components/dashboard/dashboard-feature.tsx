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
    "55S3qu9fK7EhZdM8isevhk7DvCgfKRSDkmU9itrgv5xBnCNCzJs25n8uuzUTbzcxgNsEQ7AR8no5uMUE3sPNfni9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f2cxqntgSQWL9fQH1YN9t6HLpia1xvxDP9D4ZG55xZpL7DFiy2j9YREnvvdHrjMv1AFJfz9Ua1AWSZTidPJBv17",
  "key1": "jSfUBpp4wkJmzXuKAkQ6yECx9zXaZr6dQu6rbBdbYra3wvAWAgkG3As8wqEpA5ZniQYPZKG4unqP3ZGBxdKVz4X",
  "key2": "2bZqsiCeKfPoZ3CKK98zbWu3bp47MTGK8Sbagwj7ZBpjzD4BbVx6mdWbYzfVZrgmHyotYwp4iXn417AJQZWxuPCS",
  "key3": "49zFPqUHgsYwMt3FzimQ2D2UyJTVAcuCGmDnWevE3qvLHbboqEnZwzdL47fKBS8AUafSamVjwrW8xWH2XJnCa1wd",
  "key4": "539Zx5yGAvny6tEXskeeFf9YWr1SEvbDakTX29YShkLWkw6vP2HYqZTjEP8yEYiZMkzmJc9KvbLateVWvy5yLZo6",
  "key5": "444aGLxoSejbc8CgSHc9wN5jZgN62PAcMYcABjS7qSweqSnvJ3GwSU8P3M2rYhbPx84dYsn4yQF3Rr3jQNks1awC",
  "key6": "4cdWk7TETakc3MAxAefrJfnkx58f1cdE2eQLeRM2EFZbYA98fSondZJAcXAKR1dRSiZUAmoxg6zmjgQAqBZ8XobS",
  "key7": "rF7EPkJSBKdZSi28cLCSxasTU8CZgAdH6drvTtVVF2uVu8MW3rGvx8uSYE7NjQmRHtt5thA8i2hxoghbzN38W7z",
  "key8": "2Di41isB2u4ag4zeX1AcWocCoZpvSkY8wLKXRFcR2b8XSEEVbdJshjpnJXm8BXyWeBFKCCPmtnYYWQQqLfmthFqx",
  "key9": "59YT7ud36SEmU6hCF26yqfSReJ5g1PsXVrs4ArqSE7Zff3GaMB4bUrLYab9dzTyzKGb8RP4od7sxPp6NJBTqVR8v",
  "key10": "226J8bfVxUXaJNpeur7TzPDp5s3qi8kZxhA7DHwzuSN5iA1RftEQfV7xZJZXTjT1LL8w3jbk2zjF4RUWzip37PTK",
  "key11": "553ArFg84MkMgDKapf16fF8oKTu6ARkueyYcCv6ENsKGZDNFW2nPNnes6rNGXsTedQEVdL52FQ37L8M8xLU987b2",
  "key12": "4AAH2xdj4bZUeRkuW4zQaBT7Bwaf1TFVhfwAJEH74dGaC9fcs9qcyqNW9XRa3KizLV16iKnVYfRzberCv3SVSBxW",
  "key13": "3XHdTdYrsNMzREsBhVETidBLAwT77g8Xt2456FeAFSRpDsirtmXFBPsjJavduFnDGWwR7mNQpn7LpfmGmu1QPbRW",
  "key14": "2LNySdiDdBhymCKoSycf6xJxbMBKBmCHe8sHxEBZmKBtx4edu49HmEueSFvKgxvWwAuLqoHhBS37aR2sMmd8fcsY",
  "key15": "5393Rba4n44ToLUn1DsgKPmNRvozWsDTThxDHWkTAhMvNLqMfZXXU1b6gavSRwaDcxBKFxvT7XnhqBUx5AuFkRgQ",
  "key16": "24qdj2wMYydpxrzasXVo7BLVxps2mWWgUy8MXU4juZ8czfk9Atkso7Y2Sor9J6RG3FW1b3hSM9YBzT7kgfjJUYLh",
  "key17": "2saFkeVJaMVxprFgS43or6A2iJBFTbWGhPVqR796LdwdQpEG93vVh2zZTW3KRFYAizqZBwES8ybwd9HLMFqic9tp",
  "key18": "3gM19N15jBmeF9dRrGLN65dA3ixzHxWerJCVtQXXjB15tjZ6akm7s3ipVMYpnKsP63rzmGa3MNXdiw7QBzL3TnSo",
  "key19": "3fYC2hQo8R2DLeDK5uWzDbTPn9qQFXXzWnoXaG8jWcUKv3c9h1E6S6KGbbsJCPuyRQfwBvgQuEPyY3Dg6gUukaJm",
  "key20": "2n384xxX93wUDZuSJaiNPyuTXUk1cprCNHmb3q7KGYU5u78koEyiTViFuxFbx3oZ7eCG5Y7ByLCzT8Q5zb1xCmef",
  "key21": "4CjWEu7dHf4ng7votRGh57j5Hat5w9JSRcbU8TWU6XhpvLZYHZFHU3pSZvbR9hsefGifAWtGBvJXeuhNYXjSuES5",
  "key22": "XPZEGPj5MCNbPJPdAotacqjkPynhYB2kWeWHpDvn1sbyi5hpUNQ87p8YfbzHQmCfYHVGRzZ7h9j3TyYY3GRUUWe",
  "key23": "5rvTMezHVHWJ5brnmP9mP76MsSfo5QxxvAtEYcQskmxdgNu6fqqqCUXZcKrqxHsqgkVWJZ1ViYR4J5cYdACabjbS",
  "key24": "5t8ufai7JC7f6T5C4gkkE7UEgVsZzqZkWDVdrexbmjXZm1nFoVEFsKvfWJMEj8aQ32LAm9VX4YyucPAfpGPbQFC7",
  "key25": "2eqw8Qhs9d7sJDrcitFzE3q7Cgb9vns5r1oziZcnNdYg6dLrLXLHvhXAPqKvDBs33fBmASdHREntaawEncErm4bB",
  "key26": "1PTrpVX5tuo8Lyw2QLaj2AF7BwJJCGvvpTiZJBdFbde9hrhCt5noUUjMRjBUxugkrdcGcRtcRcnm4ZMosMh15xa",
  "key27": "26HVJCKs1gUwmx6hpGangeu5CazodigAC5GC82cvKgUgyzts583pppMPo1TApCCpWd5wfhbkpADW2nXALhvdSr51",
  "key28": "5E5x8YiekoBBviMQsQ69P5cidijAYc8yQ14nNmVKfG8CYabfowXTtrhfevtEbqqAtVLgSWZLMRjLWcN6TXnEPK5j",
  "key29": "57oVUXGCur9kVpsurm8qGyuqvd7URZnBXQz5kNZLLsb5SrSRzTfSBBrhucRTu91eMtmZwn1BxJWEvvGJraGJsy3v",
  "key30": "aPhDmSgf9vtZ5oik3hoXWchkpL7zvefez49yFaVferpvryJ42x226TDGPDYGW7p7b2FgaTXf8Az778Heje3grpW",
  "key31": "3D7ogcfa7xF1Nyjz6WiJ5pesmMzAikKsekVpdmGQbRUkHWGXbPCYVYBvcAqdQbtVe6GiqAZZ57SXzSAobiihNCux",
  "key32": "5DfZWtEUGPVo1GTiVxdmgReCbZLyVTpFCQzLh44rXrPGuHRYENmbLNqqrwPksxsMx3amEjfqtUvf2Bz9D2pQjtWh",
  "key33": "5FWgt8puMrG3sdh8AjykgX1cVgGapMdEgLiBGndrQnaM27rMGcQzkKaqnBJgEj1CBVMG23pMvfwgndVehMzDZDWv",
  "key34": "46UVciVLKXuqk5r93ymqqFQ6cqzeboY1s3FkJbnjzWZZm8zq34WtRKJLERDxZbzhwwRfphNjLcvRViKXLC5Ntt1p",
  "key35": "3KWqEKTZkm2Tsq2bZKtb564awaEsbPdtUUCrBfoodVZw3bFS4Z3wUDMbDK34RJd5HGsiu8F5s2Fx1Cydm7Nvrwmv",
  "key36": "4YuyVPtrMD978A7MEVNa6iyX4M3NpQmiDnjcyD9vwj4aUHKcNWuHxVzPU86z1pqvZFLhuGByDFounrNyPLs3ihD1",
  "key37": "4nAPxjpErgwwYXPPSwPVG33rHvAURJpkbsMDvkycYiwYKrHbRwys3Dmyu7pYi7kPRE7UXKdu9V4WXfW8LfJUFPKd",
  "key38": "4EZVXUEAB4E7hjB2nHT1SFhT13Y6dhNRbXo244VTu14d2HQvKSSuhUb3UkkH25yqSQh39gf7B4wKGKeUTxCMWRew",
  "key39": "2HXs8omHs6KxUgUgQ1YUjsHi4Mzj6P3DM7oUSbBvSmU6oDVsuhJy1sYJ3KhQte4jJbTQco8NzYVLfvQDEPcApEs3",
  "key40": "4hsEGb1DYup2fcsgeW64AYTv5WyESVD8WYbZr5tHbadjWouChPE61jB5hFBWmPHQzGkXcBLSaN23z26PtVnv9qJG",
  "key41": "2f6MS7uxJSRCZEY4HDJBd2hkVEiWbc14fq7n345W5LF2FnmkfyjqjwM37rJ6tCBfNBENe3xMk3SEMdLxXsEBprDe",
  "key42": "3EhveLEiCnxTj83HQW4HQDkxP2St3DSvzuVxgfQviGCr9qWQiAxKhkpaPSJp6qFeFPnapGqHHT25z5ixpUHNqQ5W",
  "key43": "2GovKpSBeLgBsvSGwnRbisPvVw8on4jCL2ZJ9UPGg8iVsydYHbYshs4pkk8uyBhK4cdJd4ABpn1mTEGXZuUhpreN",
  "key44": "3SzKpsc9hLrw9V7AESAwgoeFDSCktH1u6kN4NVdkEs2BYQsG1NYrjjUW8thMxqNLYEpv2LbiqpxHvKMiBY1vemBA",
  "key45": "Zjn2FMhay8KJpEg48KfdjGGuYguGKocHGHBhLmMeVfBLvdhszJTLYFpiTEMMQQwcLLrG8zQyuAbCGsF4DpPDr9x",
  "key46": "42FUEGR4y3Kh2feX7MvY3rNnyobHc544G8P6LNDgVzWV9JZQo3CqKtmJqMZp1fV1pCZgs33tdCfvav3YDB9GVt7a",
  "key47": "RtMJsRZKbknrSXckqA9ckCYWfPGeTdg1pkpAiNLcQQ7DG8uEuX91juXKSaMHYx7Mf9MHXiQnA86F4BVZc9BXQX8"
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
