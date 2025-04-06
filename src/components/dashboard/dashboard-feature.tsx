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
    "3dZdxDLjxjY8hXuAPEbmVqfCmrkHhXimT5L1uTYPuMRiPzxVA8tbzt41DHmM1xAp6qZxc7ugdcDVfwS8Vtkwg9et"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62oKAYWVaVBASyet42QHBQ9wBKLRJF1zFADFZRgWbKxjkg1i6x5uRf9JRhgqiKnPCZRhhVeFqHrnKZgA1djSdZVR",
  "key1": "45ZvaFjAitGJGn2iBBPRyeyVQZS951NvyghSt4xuCRvGxTw631Kqsxy7aYH9PuMgeCPqZFdgQEmp7vMMqFGJS9ZT",
  "key2": "6BsoauoZUAkpXr1iTWvrggwKZwc9qHAMnzZqrSYtP8o1SoA2imsrsqfBZJpxbrJ3CFGnbNutmMgxm3zohnhcUim",
  "key3": "4NcG6hnyozJmcc1RK3Npop1Hvm394PxbffYe6kS6zV3xyquGSQSszfEAa53sDYQPrz5eRc8FtJ746Gic1jvHKxnA",
  "key4": "2BTu9nVA9okxMxAKtCRbETQqb4AxWvoMi1TTBwXA3VwoyqZLpkZh2YJm8sPHCGvRfCYhHQmBHSQL1wCU23QSRaSo",
  "key5": "5czmRb975r8FwZqqmKoGJVbA9bUSQWZi9sHsNT9ix8N2rWQmx9ftqjB9tzNtao45uAjNavjLzWSZXtRkYh8WuWSr",
  "key6": "38vr4qQUb8dW9xHKdqAtimbtoYcbDmYdroDGgdExH5A6EXYmSZwdrNZH3Rq8EsLTbCtYzzvLewBoCdt3YXH5CinG",
  "key7": "2hqhSPvqBt7GMwcX6aR5wFsRUEeqehnQXcz5twNkxdA2vk6tcUBdiczXEf2t5KXFvpMWjYxVB4EGGAzkW5Q4CDtG",
  "key8": "cQZGVSLpXgTBz8aecRdmJTPmNyf2HCZ12w2iP8qmipCA76wTjpZXrJLLqMqdDNa8zZre4QXiQXYqRapFDkJEmTi",
  "key9": "5xVLTKyFC2NtcHPPTAuHNmYzkbdAWPJRLP5eNoNKJKikAYKjuDSS52B63PLK4BA6Gqhga1vkERXQd7ZRPG7FTShE",
  "key10": "55Be6FUnMEeoyT3a5M5xS4iAN2eFY1yeGR3wpD3uuovD8fh7qDcvn5WAd9jTVcQLXZpSZLXbsXrsLoyH6yjDgwfk",
  "key11": "4D7SjK4XzvjGY5GFjV54VpZnpY9XbCGGFcnoRe5PZ6pAKTFgndTGXMxDDuAoJYebZqyTgwACGAB3QHZUvpr9nN4H",
  "key12": "2gZ6PPnciv2ornCavUsRS8RfJpFSxyS22BukDftmUC6fJZkuhtSgYd9ojwEH8iBfTR8Tb9N4ADHcb21YojByUVHS",
  "key13": "2yPVJBLSq55T6gHYSCS7vGrjoasAPVziKkPVyMZtd7sve1MxqcRXLniS74v42e6UTMCrUwWKvgZuXwXwTSeoH5fb",
  "key14": "5LxDBUhfdVSyk4EyDrYpufzJ2Yjh27xetnqf4vZLwXQ6x5hKv3xeYVJJYBZTisNVzSxoDFcDkTbE7pwisuaazPcf",
  "key15": "T5JUykNgP6rwyc5m9NfQNxtGYt1CV7p4DTvn6t46THKXQ92gyb1SJeWZ1KqGRLz1Gmd5ffYuxdBJHDMQkejPgxd",
  "key16": "RB9dZPhhxUVQPAPtrFAwc6gkn2oZ3qzSz6SvKcT4MW7Xnr4DzVuXYqek3MYtBSJLztnXXy7wosaPu72RFTiHsXU",
  "key17": "4UNwzoiDBEwYitK2HddBht32m8qzd5kXBjHgNfZqtEzWpNbtioSLx827KENi9wCtwqmqJ4W7k9yPK1hW2jc17iRC",
  "key18": "Xz31u6WicFCVYYussNbE7VKe3ZXMXuNtxJ2M3ZAkT8CtqBB1jYAhPafFnfn4LD7upa17DCSkZhQHARryDvm9xU9",
  "key19": "2rh1MWks3sESs6SWSFU7Nb4RdrAQfXbu5vY5KWpakqFAthH1Usxwrh9Hf3NxZRYdAcSkkN9Wfgt6RW8Qh22A6Psk",
  "key20": "3fZDraKuDzHXC9D1u4kmmEodbVsRDyFF7P9tbuBnXDuejn4ZaJPFB1gEypHAWt7UY1amDMzvAEyNqpZtzdM1zJmD",
  "key21": "2HXiKhW3EgwPVoGbjeV6qX14Le9X76G19cxbsBa9uXJsC1W186thqbsXnzbuS2nQ5AuUt6JvugiwhveM5FmZY4bm",
  "key22": "5d3GhS4C7FbiXKqVS4pokLsZayfLVXocp5Mz7MEZATdk6hatKR6tqxLBzffRwiwxJuYxpyMpu7aSeNxJhps4Qz1M",
  "key23": "3LTKekFdpBJWZYqvRsR8rwGT5AFpUJnyE9y99uaHFg29DVM3ew7i1kiajQHJXPVBLRc2XmRqfdEv3EPEdLa9q2g2",
  "key24": "4q3626QQDBkAR1szuHDwo381Bm1MpBYVTP4XKTUEEnLDZKtJQmZFY9nJ6goxaAPrR7DHmmZWByNkpA6tkd8F99iX",
  "key25": "5Z7T65WS8AE5i2VSdASfjeMwbeR8yBGe7nKmqP2wESuMU7BSna9gFjZs9VJcXzn6CrsfMvCSv9DxuH6MKaXT8xxE",
  "key26": "4C1S8T1iFvnhHhyZxQyKsdrp9sPUo1sU7bepdFqHRKqy6Cr5H8wstiMk9oBoF8SP6tehCukuhP5DjdMKRB9NfH3H",
  "key27": "5CH5YM7cboU95hkVSUgh7yFgUjf3NFghm3vecqihoN79m5pCf8JcQiqSVc2RYJKe6ncTuZVgEqevKugNXQi9nC4",
  "key28": "35PULk184JJVSkV7YynbVSRgq1mJdPj8NGGPBxb1eSgKSFbsh7UpTP9pz5eUerz4mUVKgJiMyuFAbgpR3ExnBiDB",
  "key29": "5d6jjzv34iCEqmeBMW8wfJCe5ZVh74a99aTtaAiVVjVxZbRKVRCT3UtZbioda7bxLPF11CMDF71fV5wQp1vCL5Ze",
  "key30": "3yJCAAxR22D7iBwhJiR9Tok7sHZxPm3xMSJ7WATALGqr6rdGseqQgMWPQ4dFTRhqrXZ9zE5tWKis6xc5PtiR3BKR",
  "key31": "3izQnqGVz8Bs3prxrihXyCfaQa2ZrLnBQto1Q27GvYkmQJHvBcADBVxJpeWjQuj1dJxGfx7bGu9xuJNYLGEvaKta",
  "key32": "5pHRs5AfDKKEPGLmgau6wwUv7ZQ14LiTKaM2PWXQyt24V9z3oaFfw4KsZxzJ5rsNPpE7C41nMwSUfbziz59c5RY5",
  "key33": "2K21WBcFnoFKv9s7B9DqMAgxuVN3fesfVvYyu8P5Cw3DBbA3p8bNKZrVqem8UUyGobk8SooN9i2QUuXWjCGpB5JV",
  "key34": "21tLeHf4cZi4dx4FuDAgNApGF4Ur6b3PwmRZshBjYByz3h3pa79z2Sssd13BAGaK1rEBxEoxpazipLaD86XMaqxq"
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
