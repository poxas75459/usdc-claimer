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
    "Tv6JPWGkFX2DkSAcVRrzzr9NEBqu4yJACTqdKM8rSxK1Sfz9Uz5niFMHsoQMz2kCmi3CKHRpZPAb6FLaF1WYFXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ymCvNv8N1HY5bCxYTVmAztv7ECaja3rbSSNTuA63eT4sREHooBoyQzRGznNZFUNkkizKekXJbSSwVTkQdkrdnR1",
  "key1": "3Zxuw5Notn3akHNBxytLAekX2JnhcGkNF5yMtrEzBS2HJW6Hv1Rqjif8C1VBMUmyqvSaKzncAcxtBLNLurQhXPbV",
  "key2": "3kDpCarcRici1TnhaJtmpt6h3ihq4VryUF7M4D3dgwuC4dk4bLHYR6GARVdn5f3U8vZaTP13zw8p19awvhBzXoKr",
  "key3": "2ykFv8Y2AFMeoE6tLbvv6UFRdPjQPVKePfjrhWLuBTYT9bope1nwW24rf5FwPxWwJMH9oVvN3xhXKxu61KXD3eWh",
  "key4": "22ZM1PpuWL8PSstvMgCwmuCDHfgBSgJABgvsJDhd9Y8Kef1WVeZMMwfCoZ2XFyzJc6RA4vtrBNWy7uGXjC75MNmD",
  "key5": "4A4ZkSD86TcVZ5uTwYtr4fayHCsMrbxBU3vAueUU4YfSx1ZwmS11zNLosWKESjEXEszmCRdNG7C1WWAiactPMQgM",
  "key6": "2dhsBAb2EySS2JuD6LMTPNq4FWhFAPhZUZFgQr8XS4BG1TsMnhN6xaTQtiCQGUjitKFQ3UE6Fthm7gtNrMZeZdrk",
  "key7": "NkJXqTMg4JoYXE3UkfG3TZtY8AVbCAK77q5SbDhjGY1o3a9sHDPBDTsnWztGRJfQ2NhYymudyEXX3ZovBrwkzg8",
  "key8": "4PSs4865QS4gVuWSh13UouCMyQX8QCfVU15uzfaCTraTLDjdfeYdkgq4jUQFzL2vwMBxDo4k6SbwtRFsPSbPWi8u",
  "key9": "5kLdeCAR44XaSZi32f2NLRXyNWhMpe4TWJUjaRrTjpHZj7xHoaNE1iSGWc1BJh759gA5CyKjpv8YJxXob7XHvMJp",
  "key10": "2DwDJ4HNR2LSBnaC7tVZX146SDzSNwf2Av1XmtHDc44CqAnz1ok7BT7xRGtohS1CB4G9Qf92ovdnNPMmmdjcpWAG",
  "key11": "5ZuVfCVJyJcAtUXKdt3Anz9yuxU9tp7gSVxejKZmW11LkThC1WAD3LcjtUvafd34k4TEwQd78F5nijHh5pG9psg3",
  "key12": "5f8kvfujxw7g5FttDEvF5BBaDMEiMKng9MHtoKxvNAGERpFtUXfnHL3Wd48i63CSkRtNZy94nPscskzrqjQhKros",
  "key13": "5TMmwQ7NSCzhqPemYwSUXfiTM5NyV2kfa7ugXbeja9JohHJ5UHDSh5WGe1DCKxhcrLTH4itdHne35RJx9sVBcj72",
  "key14": "5E9RFsHTvN3sgop4GPA2siM8Quj33KUM1D84gMHrbZCHUbZDmmDNCDeNBfRpNDc33PUKi2WWyCGZAWG4DQZQPQyq",
  "key15": "59kyvedGG5uQSvRMTfQbxYTcw7zEJMhjrX9gbwFeAor3QXGfR9NACKRinGGQcmWG2ooZmGkkkpd8fQZHMchTMV1c",
  "key16": "2rkok1Q9vpYsKA4CUQG7XS8hGZBGZFHX4veiYkoMSzJTpKu2wg8UUg2CnMc7W4ZBzjB3Pfeo1RSfGcbZBp9ZEFny",
  "key17": "54Zhmr7Mgk6CLUx5dnF8ukVF8bLHjazufC9uK6HFsEHcw9vDpjXQw4yTJ1mR58Vrttpn3i5u1rHmSYMpCMRksGQu",
  "key18": "3qzjHFiXHgAvzQjKB1KRiw8DjzV8Jua5yYwTZhyqM6VpY2Mq1eiFCs7yYuXt4owBCqCUyahUTvdwyPk5xaXJ5YtZ",
  "key19": "2zUqPzHaQ1CudAREHA2s2SsdFsHM6B8m29KuTN9VmdQKhqofC3EdNxHCcMoDaUCsMUddo1Apmi8mRiGCPVAT21BQ",
  "key20": "4rpCcuEF54oF9x4cqwdPLmb4vviZiWDRwxeCuMUqpiHF6zo9PCixsBpCjidYtS2HXz4UepbVxiCD6JdkFkbmBCnH",
  "key21": "3yetuwHRFAzEGiDYgbkvM8PV9iF594yz8LJa4SBMSfTADVuZwTQKKRx4ANCwXm8biWMLgbmEeZ8Rv4z9XemRJRCZ",
  "key22": "47XF1gvNmaAgWRNHFzc5SF71KPRBBLdc6rauawXuNysdwpBiPYeAEuAZnjThqB4SkNYe46ssusZWQzNUC6fkUi1P",
  "key23": "F6bA1sUudhdZiVMb3GFzjS31uSppmF9P8T97BDzuTg3qidmrb5q2jJneGThnR5zeMR7pyyH92opvi1EDVnYoEQV",
  "key24": "5dqQoJcw6g3SNEsgW1wNKh7MRUeX7wqL4DbE4WzByhbBNz6d8bPshWMc2Qke2HUDem3TCesSgxStMTBzJXF74a1t",
  "key25": "SaNsXEg6QF7koKXqmhWVBptjwfdKSEas6wjusigG7atvgMbCANeGG34WxZdV4Te6TxprJfYMWVnNhBDnHvnsLkJ",
  "key26": "3BcD4MCw25avMjmwU2xHuwPUUbBezyGj6qhokZK3ANiDMg7SwL77EQPH2M75zQRxVn8NeosE6WFtV74yeVXUK8Sy",
  "key27": "3eUJEzQ8m4NH5NmYD2YJKEhAtEdiHoXKQUs2925GaRGYrJpXrZGn5YukrgsiKjNS2UVqL83tjHhsoZ3JAtVGGXSj",
  "key28": "5hMxBEfLsLZ6j8DVvz6FjX5vHRqiyxB6VUnpPyAnoiVncvaoAuDUgxUSN1QcXjjuGVvghXZwo2QvTkjbvf7ansKT",
  "key29": "2RYwdqcr8GKTgsY1mPCmgd1b8V5T64fEQpqpY4S6NmErMoP7aGWc7UpSWgN3ZXbUqwEND2M6T8XfGHzfoQELALxv",
  "key30": "5z6qynZxeiKdZd7EbgcBf2rKUzpEJ52u6E42jKKSNTa6rknzoY6nGWmej7Kr6RwnaFYubnfB3QDyXdLSms8t72G4",
  "key31": "3zFVBUHBePRWKUbcgNMSuZqu7YPsUr9HLSaVYGzrJHvbLML3SShmiquUDQGgHm5iv39Nd98rsUqB4z5VHa5iHzbv",
  "key32": "ihPtuhd7PWz8bazywDyfF16WdZNXoxgG95gaEUFypjZ7GfhBpJoRVXoqzD7VTrtQrU9GvLTN8pDKCbUkZFjzYVh",
  "key33": "4z7VVsvF78ZAgqd1Lzwvan5tN33fP1uy1Fo8oRQ16j9GdmRsov52Notsq8BvBJyJn41yi9k26iaTQ5bhisUtRg6v",
  "key34": "3VWjGCL4GjRQawzicJmLcjBiCSnQjzoRy3xz1ytiNBG4bnWZMTkG3pjRL99Q7478mhBYdAWah9Pmo6V5ACgaujfk",
  "key35": "3v8wRWXK92PdD8HdjdNM2mBtTWVTy9DFn6VvwwnWEqZ4gEhX75Ess9izVkZFWvNpNPbYaWB9KW3kPq2ZrWSRRERc",
  "key36": "25pU5caBC9VFhqM39HYS4Sy9iZVHauybJV7BF54UthP7Ec4fMVba93HRJMxkydnRVDjEnmZfT9wbsuchSeRyvU55",
  "key37": "36wqYJa7Kp8MQG8g6mquLAmCQ1VeggXqCTudtPbsVTWSwyJCcKh5LGHmPF81cNLFjBVQ5beJy3ibBZnWDcwgLpYU",
  "key38": "3oQBa6jiSqjKwFSfSEtWygSMPrxT4Y6E5WgabyXGL1WYDWf7rvDtCEzXN39yHydNnb9Bh4VKJcEZhHaG1iEs657D",
  "key39": "4TVeiFtN67UB1EoSw5Uuuw1afTRWaPu3ZU9FfhwZWViXhJa4xF8xSqt3UXcy4uWsk5vtfWzm7SxWT8FEqv7WFePQ",
  "key40": "5v4XBo8cJ3K7FJUXmhs2WYQidpEReJAR9TbZdG85VytG6NGzDwLwEaxHrdsTfhVNcLjtq4vxHBESuYX6nvY7XuUv",
  "key41": "3r29aYDn63o36ZT4WcEMdmCBY4mmMq7TiqMmw8TRXhePL4bJgwjbYRDUkugtu1GLbCurVM4admqHEXUo2GN4sjJ1",
  "key42": "3n1rhWN993DnzrCzFt3ZYg2nAbHQvP1tLsHUeGa6maTMubajhKSyCA3mfMF7Eobt63P8rCx6uwJjRhww4bvLovWA"
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
