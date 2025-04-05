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
    "2fsBdLFMR9AYfkfg36BpfPFyuBAnneLzfvpZmdZFjyjHzTVSztVQvg11mPRLSwxzJQMgfcoukoXVAT5j6U9qrDsu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LyEGW3fKpVpF2dtYCL6Be7QVTcSj8FdqXneFQL9vDxG2YCbTPZpKkth5HYJkJfsgwDZMBigA2Z6NbLqUESZBrvK",
  "key1": "3rQc6acwcVosqgpvtcq1tAqwgmoJGBrkXEK9PWbmeszHgYF4td6ASSYCNY13jVBHv5noqe8UEbTjoPD5wfjCxzgK",
  "key2": "3yEQDRxUbF8naTfj5Ss4HoxMpxbHwT6FLTziVQm3F7Eggqkvr47whhW58nrsA2gPNCcnSSwomVVBbjK2dxDYvDZB",
  "key3": "3tbZeP1kSpY37kd5t1uWZYZAhycLfUvmpzuTodh1i3a8YaaNxLVa67VwP1nKUwPR2iez41yAVteK5w432pNDQZu7",
  "key4": "2MtRX3H5RhcDZbc9wpYbw9zTQWmbGcYJNHFwED2Lo6poMooEUcE1wsWpzrKxy45ooFuhHyxPms47Egx4wtSYfuoD",
  "key5": "3djYNPTLxpD9fCeiktxsciuceFgfPDsybiPpZJsADHtrEwKXdsYTjVydGEbhGHqnoLG78NPuajCZcunzStRLSqi6",
  "key6": "3biYjZpG9drUDA3myRXz2VxqFVyx933AvAMPCJ83rh9uHXsoQHKNhjRnmnQSdzKXnu5wZjkNVJT5djG3NZrwhAdV",
  "key7": "3mH5KPc7L95npWJvzeYxjWJzTTTu69EHseY2owY9dg1ExCxFQM2gGN6vxozja7HZ2wA1FPiHG5vEYq2LKodUJCYZ",
  "key8": "55BqrfC44E9pwZUf5e15yb2B2T94Y4ZPX9vGjihnAAaJjFBqGTsMELsHTZYeHAzBMoyRfsnEKDAMP1iJURx4nNjx",
  "key9": "LMeeC2Qou8YJmUtiQdthkAUd2XCJsNMALii82LW882tMzfhsKXi1kXYTmctGKVXECgCADC5XUdfcdHeUNZRbakB",
  "key10": "3FmwHATeeoCGM7nbnTEYNKJSEiZ9yXWhygvgPXeCX56Mx1dWsvmTM1TVTVVgGiT5CAHz5uxegvm2Y5vpZUcesat5",
  "key11": "2ofXaFmf6k6ESXEY3T2ebAJJ1UXJpPN2iRdaohUcJdhu6o4SxYyFrets32TytWai66axhgH65rPpVjPfJhw5mHxz",
  "key12": "2kb2hitkHQD6a1X13kqCf3FxRi4Wn4ZYzjMkey3Lt4UoNqG84YDsw7dkcyc1tj4qto4hghiLDGLGPNfpWkvfrTtS",
  "key13": "3Eo3zvaFtT96Xw7PmKhiZdZntrUmsM8YEKSbZW3SA78ZBY9oZ8KwHFQKfLKXgoD9HQZ1p4AB7zVvfDvU1aV7D8ZS",
  "key14": "3retE7C6i8NamwmNg2fpsKa6YSLBPU97dxTgr4rTLP5shHtmdL6FDrw5MB4uh3i6ffaRGvo7pGQ9ubQr74mH1VR7",
  "key15": "41egu91eTQxNiDfS26gRaSFJVjm1U4zdoFyTVLExL63TysjSep6exk9pupkEhFyZu2UzWvfBUUY1K3AdtWy5JDVL",
  "key16": "4KUWWpMqP245BN4xYnRNWg7fYsymXECe6Ez5rL8nG1GU9YvoddQggDAkQffR38bLEDVWnPgkP7hD9kxiUGEDXZnb",
  "key17": "4Jbdy1XnPN86NgmCRQqcQvGDhsGfqhpcYTrm77ZboaujBARzpZNKzFQEbMt9iEETg2yNWi5mqmLHmcjJpdPqoSkK",
  "key18": "5D8oERn2p8Hueumid1mMhJ9RNU8s1tsnYzgXBqWAmJdGuga5xSmNTRKjbfCLU1R6RDZDHQ4LLg1ou1W5Xg6yDaiW",
  "key19": "4u8Yk4JztMSFFHYrG5k3HF5mDNj47yJgVJN87mK9EhwGjKFKfSS22DuqNo2K595hGXXZENUmXemy3EfKuYvr5pn9",
  "key20": "2ZG7boKej1V6XTAL84dCiN3uu6CYHM2GTKJHMiTa7RruAh8M6MrPKtHTb93ttjhqD9JhWTYkbkhgEYJ72ghM8K7g",
  "key21": "3PPe8aC1rDrkb7otL2YAMmKA2iPF8w7nbxXfUSfBQDjEzNyQerYPffdwFCNEUZ8ZHnTHn3XLMBrjf7z2ib5xwPff",
  "key22": "3udEyyVpPXVCtQxpLyZdphaK9r2dyugvKNdj2FqmMCj1QshwqjJqPYNw9XEVxg8gBAW3AYyRgxtfjMvk1oA9fRvA",
  "key23": "2fEfyDTxUKffGjCS183tH5AEMkodRreQWtPW9RDxTBQ2EN1TNC8jjDf7S2oR5GyG1wxvStHxcbsF7Uk2AMKDoibN",
  "key24": "4477N3vQADYZjBp3ynxRvE4hEQRLxj5Wr8365FMsdSBec9w3PCED12o4dBZ4Lwqq9Bpyp7ygoLZioKA4n21UUM6W",
  "key25": "dHbVZGxDYA1gYT9mQ2kZNUb5CASpYk6szVF3WhCPrVHsJ2amgLAVPpy8xjYDKXEENhbUZXNn1TeR17PwobhCn1E",
  "key26": "3wogb8ZtBsii94A3qBYYonJJcBuDR9GjHbLK9M3qL4W3N21TyCRGcy2ZptagRW8n7HiT4o1e8xnYptwDERUjsGkQ",
  "key27": "5iWQUKNW1NThAaWRD2LgN6fbPSiJoSywQqP25UK2ptqWH5bKkVmkB8Z3mo53tBf3oZhMZ8m4BtxXxvvCib62TkNt",
  "key28": "AUjGTLScCKJoVvzfXdZR6dZJuN3ZdPfsiHouZYvqojKrMvxzKPCD41Gbz181jmJPGGyCdxi4JkD6yNHf24sjef4",
  "key29": "4vrnoSDCxkeJT5JBp9bXeGkB9fsyos2LwFMSJJSrpWY2vT7LYqAYtr3F1givs2NsGpDXjRngbij9HHYZm2Ak6zXL",
  "key30": "2wnWoxnws5bUfEG6TrAD9VtkfUr7G6DVUizrn3NfuobARZ6ACN7fgwVh3n8vbHPSqMrrXpbAGsDg4VN7WHv8ACq7",
  "key31": "h9371xmjG9UQsHzkc9j2FTNEMM96NNb2KQjj4VgKW44khyYXpwMNqKweGUDau7HuDAwJpS585rM3vzAoCy5xEkH",
  "key32": "55p6EES7wF8r53ji2pSEEXHN2wyLdjVWcuTdQ8owRqcbnLYsyrjvWHAgtBZxXmbpGkoK6GxB1jUfC4fDHqgRYGoM",
  "key33": "3zSwgYGZXTGJqgBxgddgFJUCsWREXLP4Nh4RpSdGFAaGBzjkzgQjgC6bq1TzAoXNpwtUJpfTipwFYWvHPjgr9sLq",
  "key34": "4zCJTzmtUkzW3ETUcLWLsmjWnAm3zRkJLakMZKV6k2QqUYmhQZMcLoCnu2GYiVqyJ6GAW9f5GWfq4EzJz9xmYbuz",
  "key35": "2MoDtU5XrGU4AZvA3DgCiSHmeMFv8cdVYbD9JF5CxunNhuq2bei49s3UR71BBnhtufAGuaED3dD71ctzGGb1FZgt",
  "key36": "2voxrWc3PSjaHPyZSC9i3uftV4ZeRKi64sjQ4VNidrvCXqqfiBsd1aCGckeS1cfYe3G7WThKMu9KM51VdKp6strs",
  "key37": "5vamyjXaSAW763o8cqPFWEiTirJW9p3itudxxZZZdGJQVwRjBQBhV5gYMvk9o5RCFPyZo4ywSMo87r9sxqUFVnjs"
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
