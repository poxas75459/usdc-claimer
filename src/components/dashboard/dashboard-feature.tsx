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
    "4apmkL9e9bViUn28rxeScBrw1oiQn8h3W6He5GzygZnqwWWbgGUwbwH8e744ZRBYqrdKeytYpQWBFfSMatjY86kF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "616dCSvHmAP8v34oHdbAh4wKWNik6ofGkHmjyZ5hmzdJniTsAs7YXmY5TXBVWhJmbTrnUHyC6aUt5SWMHN2ETHqh",
  "key1": "2nUpEVKVfQftMLithpdhx5dCAWBR8gajfsktBfZ9agDiV5thVLd9kb9nZgF1Dmatksk8qTYBEhSJd6KUfbY1sJgP",
  "key2": "61mpZWoiCznApsh74YDXeMowe7nSm4x7ZbDxZeUzfYGhZ3qvsj8v5nPoFKFJZ46m7szcxbFvPv7wXcy1UmRQLPGX",
  "key3": "5WkJ1uZPwBUnyBw1QrKUXR6xkjPdVxVuVAHd9S3NQoBGpTh9ce9KxuT2VvxBtp97BkVwaH4GRHiVHwoD1z6x3bq9",
  "key4": "5jPVNJbNUsSHPrrLG7bz1gdRy2jvKG9Jk1K9TVQ9Nj4bcRJ56iPeyUYRCyK96kbPu5j1hWttgKYi6hU3SNJRtFWf",
  "key5": "TSidoMHMEk5Jj7wiovxSxQ5YjBJCVFCHMSYezUaJ3wtEMyw5tpV1Hw9XCQEgTACnNX9pcxMhmYWKTzfYA3xEexG",
  "key6": "2j366vawvhc3mAdA3BNVfV8RRNqaaLEXYKZEvtwkKvwB7FJbqGNPJkopeF4Narz8ENE5RbwGmMedSTrGQb8jWKiL",
  "key7": "2w8h8VgYZrHtVULqMqNswfYZVWFjCX3LkbNpxPRMCXHKp5bVamX5ZFx1Ew7hjvHayafjNih6xmZofZLCpuBMPWa5",
  "key8": "4u6M8yDcrc3erCcHY3k88JprYW2Sm2D7UFsuxWSqDvpaNeN63F4TAk58Xz9vhMTNeFSQmVGJ5UXZsTP9fGG19KT1",
  "key9": "3FyEdJNuxVacy81WnhbmFYV83tsXdSDzpM5fb5VBBZamihvhGh1jVauDzefFMCAhPnTi6evwVkHMsYFynoJ7Me4D",
  "key10": "2LRQrHCxEVraBgqn9dxYMLj2CMcQ5F4vsSXoGa86WyJST26Jj7PN1RTK26u3Z5MowhPTkpEAHj82c8oAQ54x8wQ2",
  "key11": "3wXbzFbvvs5fvnQRhuLx51TfwoeimUuQCiYnWXDSzNaS4RBmeWcZcvXtgnuAzDin4axdAMv7F3ZsBJURbkd14ez5",
  "key12": "2mFtCsxuzGwJ2btq4pxXz3VJeeDeKxrE3zVsHT2uGnUYRHqJfngJ8gFeYGKEd9ruVw1tFF9CQYZQpMVZ5Hrv9Wu9",
  "key13": "5X34HnbVu4eMufCvF5AXgdS6dMV5rsXTgtPj6dVm4w5dcpj7N4fYziJmbqhgdQBw3tyQGck76DaTAfNNHniVBWco",
  "key14": "T6LeejipTSBCvm4DXNmydghaNYp7jqujtsLzHXp4WvJsFAkWySxjszfDy8qi3T9typ2yte9abkcmASRqHCWSAxM",
  "key15": "sY75Qi8L41GkZ4cV1gSyXUz5HXNEE497gcmXj5Q1Mw2YREACN9ciiDiGJNGuq7zPsEzvhcMz6pv1qu2MdyoW2U4",
  "key16": "9DwTHwFswyoSoz8b8z69iqf7UAaJAmFMcjrKPNgnkNF4LN7qF6N6NH6diBJx6JDYuFm3UtSY8k31HeL3syYMqLF",
  "key17": "3p68RhZtykgvWoeVX3cuJLMyARzTXKCHuQ2WwGWde9MHqBg5piKsxBFnrqqxY9ZdyTDyB4r2dTz4mMeVyHtqw1iu",
  "key18": "5D7rtxgiABBWsmCfMfKejWsTka4485gRL713TmtGKR14T4UgRZFaMeSGFVpPvrBXLK9aE83BmNdJafR2V9SSkVBA",
  "key19": "4VCrCGiks8RANxZrJg7NCqhkwgTjVrfPwZaMvaqrkdwnSNV3ASZL94BmGZNaVerHBsyPXMTMcW6EdrQer5yCNvxA",
  "key20": "54ejDi3xUWJdk4BCy4E1XcWXDA3zRieWDDgrgFdidxcqtyYcyEJgBjwsstMPNmcdCAQAH4tCN3rURC1kxVmk4tvB",
  "key21": "5jiT9145P4oPZ9sBUp1x9zVUsJcGoGLze9XhmCdUbLrpSbsHz3GXhDKEMbFcbsWThS5BHrppFCAoy2ve8HVNxyNS",
  "key22": "2vxt5ZT5DCcW6vhvVBAFk1W1yhCkXw1BScm2RDUq9bjtuLZ5eiP9jPeAjoynYPT4pyTGo1eSaLYd3Gdk5ZnQuZnY",
  "key23": "3YguBr1Gu9zSJ97jqUhiqBrKFyQCFpViK44eFZhV4wajf98TpccZWzXN3VmTn5jv4awUmsiMjYYuvodigAnCcVvt",
  "key24": "5iVkrqZtXxXp88HY8jKSZX6RiudioV7HDfe7MTJfhJTRwY7wZ3MoAhUrauGEkQ8biWDXnEHFkVxRKd2vuLBkiRQT",
  "key25": "3xcRxv8v8ceB8xGLi6PHTQkuwJypTVGjKDfHCoth52GrupJ5tj1kR4yYLB7BLeew8X4ZwygAAnCPCLgj23ACpsMJ",
  "key26": "5k1VbeF6RftPWNC14B7oPthxTpo8w9e6q2rGtKg8P8RCXpbncGQBHwJyRgQPpMZXPYM19Dfa26K2H2BQfpdAir4z",
  "key27": "y4JBYZerC1p6ebFBEQHfppjVxu719ua2YnYKSi2DiffDMtXbZi4SAqtsYUJNhfYrdYCurkdodnioh2AoH8qcEPb",
  "key28": "4xisBPJjQJsTZbuzhdXuJjE8owFqtofbW2RBPWc3BBLxZhafqViwG3cNU7XC5g1srn9zHxpy8dfP9Y2uF4Nhmwqy",
  "key29": "5G2r7zVjsFLiC7UTEoMF3Y63N5xLv3GaiE6MXGx4brJqapktgbCeKN4vveHYkbCr1xduG3vhtox4bAssmNwiwx8z",
  "key30": "4wZTx85LoCgcogFmi8zdxQGYjDcURSV9uCo2EMLpWSvAof9Rjatgzgn1qHqz5j6eVaDsdVLs6pF3juvd2v6Sbr5E",
  "key31": "31MS5tWwtg1WV81sNKvsXVtfkTKZNS8AVYizPDjfw7r4wM75T28LM5aAgdr7Pjb2v5ACDHy1W3AtE9fQRmRExPsB",
  "key32": "4CKSHAZdd4JWVM9Dc27ZFts5FkpgDRC8HjAayNWmTfMiPmpYSFqY6LZQwKLHVMBcTAkiiBMeExJF4WdY35pztPGy",
  "key33": "23PRiZyuGoyDmN5aNsLLCG7iTFBi3MLD86H8UcmRVuMj3Q8gJuXNfmDSNBXn1tMqb3HosDLUVcVbRBdyzBUh6NPJ",
  "key34": "4bswZ7DTbEj6qFEEv6PE8oZrXjih74FuQJvTBoaCGc7jx6vFLVQKGwhbsu3X37xUwKNoz9U37SUHfo1La1P46KAn",
  "key35": "44MngncXLNCc2DBLAneGReq1QGkgHy7vpW8cB5sLX3Hz2sGDsT6rnfGacHSua6cphJPbybDWM3tSmbAwknXUMYFK",
  "key36": "4M4chRarQ6boMoxdFpX7MuS8LPGbkg4XJHuZeasfvWEKAMHuFP6Pn6FPWCVsca4jHgUet6J3TuuTg46DUSgH6pac",
  "key37": "59bqPPPWRK8i1xkqhm8QmTE3MN1tppoeim3YChunGXttNNhyNRLoamZxT9qcDdf6JdM6snxYWhbkC9E5gHeRjGXC",
  "key38": "34Lr2gbPH5eGmwmuR1iNPS5fJJ3RmFxoP4Z9jkwxowPxyG9uJkUFyUDWPkXXtUnt2uCg2Nm738WZu3EtE5pEAA6n",
  "key39": "48DWfmfSCGzAcdVMejPqQ8PkZd7YhF2APwKNtU7fJHH7nhn7RbRvEdaBn9jcBUTsmWWZ3zBJdQkWSJbc6kDNfdte",
  "key40": "2fDYm6Dud5ApqUAVKW8nouX1u12KkeWGc3WWZVUZpU2FnGL7827xRJwYQyGay4vLZJo7k1KSyMBNDshiwwUbuLTS",
  "key41": "4XxJhMfEnMNFghsz6UGWHUoGm1KwhVvyJ5w6ZjqjCJ2giqkPXRDbj9qgVvcF4jfrB1hMHaHVVxAfhaWi3QC5UfTh",
  "key42": "3kcS63UNRGdHXnM4zJYNU9drvDtsCEXjKVezmB6KKR5kK9vuKKHeQ83XuFHDEVHzvx2VhtbHg6E8gDBJKfSRLzuW",
  "key43": "3poNY9BeEXi2ToBvduwxnD5LHYcahMBLGWQPCvPScvgN4q5A3UsNZbbsz5D9sbgNBcGfnYxDNMRUH356UZ9Qn66B",
  "key44": "5vgs9ZRePMcN2Y9MwkTWrKmTqjqbf4UJFdRkfGXb7NPYRpRxhwwsRpiA9x5Ahg5tff4xBJWZTScQMvEEufKPo9XJ",
  "key45": "pJoCsfimAwyzqUxwPCQpUePHhMgY8KuPSzyeUNcqzLt4Mqm1PS5Dyur4YpW69bK4nn1dTpmkGGYh3wUuqcPJpPo",
  "key46": "5RBbeDGkVYQZuez9CnkD9bWwxuu7PNkDmCxAuNgF5jbS5T2fA36uWABntzLvRf8zYjcxfHfopwvdwPXc3kic7wBW",
  "key47": "5NWDQbzkt5rMtvrikMM2KoJWk5AoTLnVBamnt7UvkiVt28WuWPXQwa9LsL38jxgUVMWVh1mZrvzRehMrdESzJpUb",
  "key48": "cXryKZkrktkZdtxy7AjGgbUfsymahA5WsyNeKmziwQuoukD5sqYW7ZqKKzaLyD4B8qNxfQq33e8E8nVTzSL3pA4",
  "key49": "3GB9HRcGFo9Cpefa9UzNHoSNTg8HUkXP9gj2dhqRMdhCWfh3srDDigxF3oFj3iC4nBgAT7UNwNetJ4bEGqSS3dh1"
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
