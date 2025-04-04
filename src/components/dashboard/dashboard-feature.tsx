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
    "kpedSrjPypA5a467kUmuMidn1Zow39HiZ7PV1RWotMc1wrR2duKdrDWc4LXbR3saBFhteL9JRzo1cpxsPghpUgi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "13YRLhnGi6x8nfCJ14z2zRVfTFkqTg7E8KqP8eKJivn6E2TM8q6TTqJBac9ZGZGSgnUPPhNFfCDs9D1b8j7wdit",
  "key1": "3ieHEWjaarmQXDHheRHT7eX2f8JUCGCL53VYGeP86BE143BqyrvUM6UZxm1b1dzJHH1PQkAFEY4o2Z5B1oNBNJ9x",
  "key2": "565xYBSzCy9JoCt14nWYYcvTEaDru2LzJxmdn2NcZwu9BjBedb5b2Cc6BrS69kB2WxBTcZwu8eUSVMPH2BTbryuE",
  "key3": "4MVMzaKXEFAmAAeYtgDkCTfT12EUymbHHWubBK79gPq7ymYEJzaH8LCNjzcVK6eSv8w7Nwizhq8rYRsM5eZBHbTS",
  "key4": "3DYkgsN8bZEdKMcvqMVgE8aBzfgUqcvLhmBYm8MaPfBqNSUkEPCsRstkbmY8TyHpt5ebwKa5umvasRZqspDmbaby",
  "key5": "2o9UsSB1zpdVbFpMcMDNWWxs8pk1oV7wkiUWey96zA8DcqwAFsGY9Tupr3ex5esX31g77kkjkCZhzbNgBSPuFAUA",
  "key6": "3TYDiX9Xspxf6FbvfPuH4e1XaFnHmGpL2oJqUftmEYjHsfK56RJkTHv9jRrA8T9WB1YVm4ToBcicq27SL1wtMBFR",
  "key7": "2ZGnSSR4rX4V8bxJNEsgRorqyr4oQn9mXvddMiPLCtieTt8RTbBaHY5zXx5Ph9BqafTHsCbNPNcAc4MnQeJjqxyA",
  "key8": "zu5NPDkEnF2nf5p4GxYbSm98Tfs6oYt7Sw7qG9WihPum1hS8BtU7XAetGmEu3egXbcsYnuxsPtSfbWAKkuQ7AEm",
  "key9": "4NsYMrJxoao9AYTJvyXi3ttu1PUrpN1YFEfzuUKEsh5KZyy1b5deyJMBwTaJwKU6WhP9w5LDQk5v9iN4ot5ZwZVc",
  "key10": "HuyoAuTHT4T1QY9R6tzBFdUi7Z7peULZAbVZrnzhZeq4AZ8GeCrPTduDV97Jn2QEoT4Fi3wiwHRrSqR3BLmDFVi",
  "key11": "3iEpkxWmtDo56i1kFiujS9DqVrWhZuLFyw3AEybXWasf7YA9hCGNujzbuV3DR8ozdF9fv1Qf2xL2uL2LFcVFdpWx",
  "key12": "5b2TjdzC2gt5voLHYcU82xXBehKhqpGuD23LLVdkxEDnWqSDV44SmZoLQHxeNFPxJK3zJrqB58ypjxw7ebgzF7Bw",
  "key13": "Nm4BYpdFUs85oUqvakCnJcXfWa79Xb1XJ2dHJRjw45YnipLoT595EtB2CcayRGCsEaK5uS9qHgpxyXV14ZrNyex",
  "key14": "2J4GkJe3uk6xXq8aqabj7H1dPvFRmygcJCDLohinypbZB2jpzefzJm8zkZnuM6YZDZTzVXXHFe5EH93VjuqUMS7W",
  "key15": "5d9WM6GA4MyN71KUQHeReMQAxHWbLZiyeTcm8zSZmQA92J5Hh13cEE3qbvzBfqjuZDEUvvzYpTAo2x2aAYoyWsCP",
  "key16": "2HtQcRfFPSLBKGcjN4rbMBTZHdq1VGR6YED3B6oatLbm34qwmxDofYNFDHVzjiSpwe7CboqPGzz6W57pQ5ushttr",
  "key17": "5De5BWgMssU5bnLsN5wv7Su5912hMApZQfeLezwLrxyWGPWTByjdkSrDFKEQUQTarzotP29P8WfRydqVWSg1eRe9",
  "key18": "5BTjz1ckZFshXNGwo8wQEze2xyBWuiWXESVke3VacrDZhgRfqpppdZoKwpyGVhruUvSk1ob6UuibvHgdajRLBu3H",
  "key19": "4sTBiyiZSX9JAVWrVtPBHpe4YaLev6EoUNAjWu32UPbE6TrmhjKcophxPq1BUNCXJSmjakSZPSWMzhw9cstXSL77",
  "key20": "r4g3J6j3S4FuwVY1mwEefhdL1k21WmzTsRedFZwKfBPuUofR8wiHjjneet5KQF58A1aXdiTsqFyQdULYkZN7htp",
  "key21": "3rQh3tYSdRgy2xdVdak7g11CfxnMV9mUNBijsezqqiiisxQu6m7LfGgC54zQErnv5mooXtUz9m6WqfejSGpZrCDc",
  "key22": "dspfrymXuhMugBVx41QGDKTk8sbmXa95xZ3vbi3Z16xwg3qxpWWHtKsgvCefRKTM21mXczxpu8GRcfDbiMTPDfx",
  "key23": "5Pxbm3y1B6gTVwGCori35fSD7F5T2sieN1M9oWRsdwRadPAJFG638aHL233PNN2NJhW38hbTL75yddZbLnufoTye",
  "key24": "2tmuNCvPKq8tYQAKm6YPRZXbhawWpADDE8pbxrktWiteD9cgNtEMzjG7XQ6eWm6AmVwkPMzxejRrtes64PAFCF9F",
  "key25": "3giUsnHvhqRoBbndgFoXwM7bXNzzBZfqMqCd7putBtKMoZuA7meFiC9szwCXfK22VMjLpNL6mbmKnJiVo5DpVuf6",
  "key26": "4rKEckNSvVrsBt2ZxJuvf58EWRta49wmQBZRiJw4M5R3zXFoGdwisgCA3BHNUDfwwPFacQDmbtsBcsMpTQv3Fgrp",
  "key27": "4TmG9w7GCKDyFjXdzvdzr5KJ8TWGbmWdaR6Qp4C5Uz1uFVr5CNXT3GVKxFdUcLNJB6t7kdrnH1ak8Gc3Jk4e7mto",
  "key28": "4e5Es4FoJkyX3Q5Pp164o4TmtAXiw8BhjuuU2jPH45jicY9eKQDnmoSLV5haroP59spDdx3oAVwY5kg19itWMqDf",
  "key29": "64zvuphHr7u6Lzfta5FmsqkJBMRGPf5DabWodq5bhn7NAJFpHZwwnRm4GWcuCuPdBaYeqFagooZMxy25dKnaYyN5",
  "key30": "2jnJpEVMHFbtKv3iLx5Xy2DNbKRzGpVNmDWxVgqsrMK9dyfJNMzNoWfBCaT3TEZwZBpKpjC1RMpPS7zPB9pj4PqP",
  "key31": "jtMQRBn4u8xhTZK6Uwg92wH5dSUqcFVesjrGuVPKhJeNEEo3coAFviUaW4h5fvirT85C2afrGbDqV3sqNXZCGwS",
  "key32": "3uwDQjkcAJKWwSeCUjxiHGRJZ16NHNeRN9mpzsaMU3AJRoEjpE3yck5PLqd9tmGc16245LTBN2b4RpY1EfE2P3Hb",
  "key33": "2QoKaZkcpDcMVv3bfWm6djYi6ak7o9k9zBKQ8MhwLQp4aS7Bd4mAX625E73tnD83r7BNeCex7ffDfDpFDSJREW4n",
  "key34": "61TZvqCcQDPHwoKaUG7egf1EjpDPx1LVeZaW4CN9n5Vq7LvNJtw7doET6Hnxs1HxTbqJBEVV2jdH5t7ofV9apAir",
  "key35": "FH9fGe2ni2DHccKCUeJ2Xm756zfyGpNH5FQByzet6qkZiNrTZ2ckjRKWaiFTWFUgZBSMK2SBy63zUU5YdV8QreN",
  "key36": "4Uh99cuCQfAdSZ4N144wLawsKKGBbg8FvrBYgx5Anuv84xTbV5e4kvX79x7j5H7YobBrQixPVFsJVubifFZzyj9a",
  "key37": "pquVscTmiVUBpgTvTd8MWgK9RURHQknNpkaw64spocSGskRSrmWZCuFTGZvb3jBfaRsJwdXnFyizbvTaNR53YBs",
  "key38": "hg7gbt8RbTtdwFVgPEpUDPTaBL8WaqATFPkcUKSz22vPBWiRJi5hAvVUaWJRi2LJURAoDDQcuFLqRPT3iMkuh7f",
  "key39": "2Ugajauzb6xsNVE2vsfEP4KwU46ei2mufhsx53CbDCcvhHyxPSMvzcSf2v8ySjXXthCkVKb6Mx28ws8dQkVYH687",
  "key40": "8piPTz6EaoX22gWLKYbi62hztL5QymgTtyVNZ3RQ3UydXskz5U5DonTqtUXXXYx9bEAzpeJEkdeEqkhuBTpYa5s",
  "key41": "4aDePgeu7tpkEATJqBb38kAuzP16vyHrwELsG9aN79hnrX2vqa7N7DLxv9FphXSMG6CtdrsWELLtgPdvzL7TALZz",
  "key42": "28X3Vo8jP4i44Yishmv8YmRitfiZBD8UNYZDFU6aG3dSgWibGCw9LHoBziXYhsJQubPqxXHYLvNapGEiDdwu8keE",
  "key43": "2squjF58Q2HN9GVr3Ved4pqe9L9m4Fm8guXGL7YN8Sohm58sDU4f766eJsC3QNFWuGjyf3PjXSjiMCcCqTfu1nZV",
  "key44": "4L7Lw5yKHs4PRyDYTAaM4Vnr3fAwQukBfkn4EwA6bAySP2sNMchvoAd8RXMryV2TqKmUQDPf7V8jgWyt4rRezRjf"
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
