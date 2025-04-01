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
    "2xvxna6MUYkT3gFvCHTAhiuuaKwJAVETnxjTUJVsTCF1FyffmnDuQFLxArjwyaeymyMZUu4zqwpEjFEmp4jYcL8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CHe1WrxasabZWPSdQDmDgxHSPBdZEddoLS4AJAoPMgH4gcTD7JVx3KyoKNDTkend1D66TmgEZMYviPgVzYA68qF",
  "key1": "3Ax757YqAbQ4uZ3QuGz3e5x1wU3bPc5GEj8NLdstwvTpBk5EBYUd12jgXNEhk7m3DcuHGQ6CAL9XnfFKL6siYu6H",
  "key2": "3kXwe6cPEMyDi3fErx3xtWJnTMxjwYvvygFcwavxYhJ7oq2L6YYcmajf89TiyokvKhGEx76fQN9stJELw7KYFepj",
  "key3": "2z3sE11cvzeCa3DX8Gcx19kEXZRtJn6bjqroHn9vvawTJDuUVPyHBLPicjg54m9TR1QpeBpGx6oEk5QAVT87hgGG",
  "key4": "387biRCdKRKg62KxatZEHduDLp9HKbc5NNrYVjynnERS4DQwPB7x9xUVPA4QASy5YD9TGuRgxepQBgUWDwLTSFob",
  "key5": "27C7WLeUM2xMZ1NEhaWxdJbZnkcLP6YFNLg7J2zmiozzpUX3FjqBvc5DMGjTLZMMdXVpXzB3mn5tCuRXuAhdnyid",
  "key6": "2fDR78tvBf9jhdKzsWrZDNqaAoBdh3KTQHMsiELuurKJgT9pQ71zLq3py8end1zMpDuoecZrLrAwaBEaUWnp2icG",
  "key7": "4QgDYp9kv2ajoRGFNuc1bmYdTPUoicuQqAzZS5XAvo7YBnUUyFqjGATxj6WVkDiAsJ4KViB9GXNAEp2CBRS9GJmG",
  "key8": "5a5hDofJG6g3hqAGpWg1jYnoJLTxzSXoTCqMJrcKPke6bb2KGo8mVtkW4A98xnae8EbUHj1yeiso1fGp8Jqohz9o",
  "key9": "3WwHH6zxFpcaR7Scb1zASGLUutmauAKCeV4y2cQXtTzuS1H7osg8iE4rNrSD9B9ehVPX1badN9uXcyAu1txAqfsj",
  "key10": "4AQWe3NDUT6LunVyuuco1vqenpTEUzeE1AzHj81xDTQTdwjBy29o3B6C3mcrCMFozcqmCzA6GgxeAyMj2brj2dZf",
  "key11": "5Fr3nMfmFPEGxTDjycPbu5qdsBhKqRMddvF1VjTAkbhubgoJp8yAFcAnG7PufZytVKJ2pwiQzY9EoPe4VyocT9N6",
  "key12": "4ippNk2Tib7DekfEsHNybn1cHcnh2gdbKeKVGcWDduuTGptZJBJmctpbqWW96Joj4P2Ymy3Uw6Wpt2iev96UsQ5b",
  "key13": "5gTkmc3eBGu8prpKp9eSUex1AeDvvSp68D2dra73UAG8NawtgVdeF3kdbMCvLkx3XBCQyvFvNfjJ1ABRpqNMzDHX",
  "key14": "hY31zypb9LhbxFxx9DFihnF1FbF7fWeuqPSCvhzWojLJmFsT692byMbrbkRvdZTHtuhfUpjF7VcQgUR7HCvGRoY",
  "key15": "3hQBDEUncELUqu9p7HBxMXTnsxmtiZuxwb3N7nx16hEDVxi3eDYQQSbDZWFpRY89oJQT2fNNtBx6d6eSDtLwBipd",
  "key16": "5RL86ojW3Jae9joh4JxZu7rG9deyWHmE6hnXKNE25vDMg8pcVxTKM81ptYx9CaGXdvmTz1biV54aQzYWvnz3Lyhd",
  "key17": "44efuaaXU97WkZ2oNMKUS3EW1RdGbbFuiXrooKRm6VrGoS7pNkWk7xFzKavuhrycXW8wTrDgYY6xgKiCQYUadsvw",
  "key18": "3sCHF1GaPQM5XRSUN7Y7FJG4aHtgi3ou7RxpYPLA4cUCm6tJraJUmVCKCMR8LGuDeSyFEaUVWksJjUwsQvDa2wCa",
  "key19": "4WBNab9mXSTnEwFZohQH1HWMUgFmnFZuKwrHFby7PVPz6yhHxhv6CnVSN5dB8xGUBMftFtBKM2Z7btptiEBRELmV",
  "key20": "3T4gVVSGPdikrpgRPYL7Fb431iC8xkVwV4fKkwT8obHhP6BrVMpX2g59DeTyKnP2PJ7925SHfbWtEvxiiiGdCePM",
  "key21": "h6sDCMuuHyRX3fYF8tbgzGkLKWqMaGkpc4c6UkzVFBsRFhSuwUdqsTFxgBhsXoJenSJiWu539ZTECxPRsur6cMc",
  "key22": "42fxbx2UejdD5y8qTPLFq2CUrf8bMmxT9TuYzNiX8YaFN557dFrZ4787J7h2zegSmgY5nVVPN3r2dyiQjpqxbQpy",
  "key23": "4qKTeQxdFALq6gkhGjitXwu1UbFiQFfTrL6TrfaBGZRq2azonSjgn2EpF8teF1yKPyKUB138AT4CF3Tcs3mHAD2",
  "key24": "1pbFDT8JzpZVFpks4Ps1nzMcMridwVMkeupvRJ1XpUMq3qt43dBnKM3DLKn19Wyz8eMXyCzPMV5kVLUUcqxoFWu",
  "key25": "AAbz8Mr7UFphntZbDj86GHhS3FtDehDxJDmq4udRdETbLymAh7ArsqxJtGh4RjYrdSEGiujCJaX7Vrg2tkD7pbe",
  "key26": "5cBWCqCQHJ4nf73TaYuzLXQpRxuquQZfzqrMmW8wK22APrreMVEy2egT71kFLTZfZRxJjNUqZ4tkgwjrmVdSJVpm",
  "key27": "xuhu1qFC88RwynW4wdniryX3DueM7LYh5ebGFjkuBa4k7wb2ij7BDkkda782Za32f8q2jwCsU4DFmu6JQdNLbRp",
  "key28": "2XMtcGm2m1ooAXDR1AZd2UgdVEc7Jg8RTjxJEieJGRDq1f6JLw6KBW5PSQAnhQWV4yVdvbo9mqwxJUd8n9sJrViX",
  "key29": "3iykRCZMNjikZdxALFwQNVsafxojDrK8xx9GseTd9ZyurkG8k2LZpVYWX7h7sAmb5eVbww3g4zzYXkCbQbJ9mQc9",
  "key30": "ENH1bqPDysJurZPTiWQUMAGNqYHtiGZ1S69n86qe27ZvKjdLghJppmre3C9D5VDRcwxnWqHmiLNN9CA1mYn6vba",
  "key31": "3A6pkXut4xDEKU8R8acnE2C6cRjDvSBgQUYmWnrq84f9MZDtTuPqzwofQwK3UJDPpMKZmxsLgZkMYmsLVFRLCVa5"
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
