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
    "2YPVFcPXJHPKQktboAiwDML9KJnRf4ZHx9iaVyC4MMeyjXbYZbaKKkXC99uxs6RFdHCPtyy8QqKrCUWk1Q8iLS7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ljcn2LACHmkiFTDQ2XjsQfnp9hAbLd9KfoJGoZd1dCKyvRXngCSJBcQ7RsUPbLuP9ETnCsL3fQYkadpjJVdDRd2",
  "key1": "W18N5sW8SnLCArierRNTm5vFkDafunBATGpaUpxRFwXaiYdAbmUodbtBpjnft4YqSo47jiuqsqEjcs4u6DEmQxk",
  "key2": "gFnsdTtPgBQccd1QYsZTjvWks2Rny99e5KDTKzx1Yoz2aBerfiZarWrWg1sgq1jZU2FiZskREDM7pC1oUENZTdA",
  "key3": "3aDQAU9QM8o2BRHsiXVryj8sSZiBtT82xU9oypR81ETh5gMN4fbCvYf2jJ29QEuV9y511Q8DPxnPCCJLcfwtZGij",
  "key4": "2dVcQr8isr1PBSeAX9eh7LU6ZF2pFJqocJ95BDafySseFyTezX6RYZGgbHwWgkccuKrwHotqH6k7NoGXA2GwnsVk",
  "key5": "3BRnYDK7GtzKs8s6EJ7vc8zcXqCsNJ7o8C2srxoqb4EmKYyKRFG6yPmMzpo7ADf3BntCFEH7QpaEJE6gw8eKKQfN",
  "key6": "39oSDqeN6hLofUBLFU8tbhAAb8AULBpfK6dmvv1DFYpXQZiTnTQnWEaW6f989c6HxAupkDUp5W78MPY2qxxHTTas",
  "key7": "5zJGwWdfBx4pRadSfzUbjWo62fSeUC1x45GXhkcjgD2ZyRhpXZqYR7h4BGs31ozT5svykdVs5qUJYjM52Pjzb8Gj",
  "key8": "48FMQbHiPg4JExMtrFzMD4ECLYimyPmMTgSED6GLDzmN8DEiNY4BaJPDNe6dBjH2eQRtBoSwLxj3UC4YkW3rwxsE",
  "key9": "26et6FuPPVqvprEBSs6V1JD4JswnMSEvomRJPaAG3WwiH7ka7qABRpugYGUXTHbRmqQrbLinkwsoNToyoFVzokfG",
  "key10": "5eLrbH5R6j53CYDEvR3HBZ5auQSkXRS8ZZ5uXkNpUQKLfmBXPYaR5kbCWe8ea75PNPmSn6Btrw6fsfdEi2CevzKg",
  "key11": "aBJGPVnTgN39JQ5ajiZ6Bp1dUS27ffCH6qnHq3ZMSRrk4xEmg5TsEcCmRj6RRoKUfGqP4ppganY6h6wXkJdx7Dw",
  "key12": "3FCWzzsKPg7tKjCJqJDz1rAC84sWZrFN7VmqkdiNkBQ6uank2AvidQKYP4xKevfNb38j3ocDhbhGiRTgSp6sQk9m",
  "key13": "52UPtcv8gvGQrh1jAqK7MhRh9Tpgfv55AM9KCuAdEkzUvf3iEydrs27xuhdnC2NofE1o5wWkpeWTWmUhBYQD4FUR",
  "key14": "4ZtUwA9h39sJZcKJE8Zf6HssmD2suYyKrw4vbHnxTDo4jazXbA1Luzg45W775jKwQu6NwZU15S6KJ2YFMJurQaef",
  "key15": "3dZfn74wG7T2vihvVDs4Ky71nVY59iwAqXHvh8edyGGsfWbat3QPg3x5nTVN5HaDvhksmxtuFUWtvUzNzJA2aonf",
  "key16": "2TvYaf6gPX3GHe65Edq3GSmwUsMacyxvFLwS2qFYbkj6bq4NbFiuJEt28ivznkGsbty4g9j2RTfwx5bo5ZRCiMzv",
  "key17": "2Ez3yCsASrvBt2qcJgDDKGCcMYmyB89dSDh6hvjwKzyKerxCAK2FqEY8VhnDkKasR74Ub1i2ukAPvbpFUvP93Dkt",
  "key18": "4FhHCBXxuqXm4YZnHMgEZaXfxGPN4bSAD3SfTAyq9G67tNSPJkiycuud4UZFKna9w2vQbETcyq4c3h4uFSrvWchV",
  "key19": "4DreZsn3E3NEkyfi3ijo5nojHkPEFhpRrNBNT9DYig86iC9tbVLD1XA4UiKPgehVQvx5SERRWRGEshfqxopS8QSZ",
  "key20": "32tXBJasCtDKRTFPQsAxUYyjekrojZzcLU73bDmhGQgrBtvHEGkocfrvvQ1yPssJqotFeGZSgQdeUEjqzdksmSf2",
  "key21": "4YkDFYixQTZB5qojrhd2XNPeDXLUTnFjr7hDJzBqmLcdwoRj9W9dWPmxCB2zohAHryQBn3KYCfjktbzrQgkucggr",
  "key22": "4yTr3TfDTSVLeJTjP8zHCgSVM12esnwe77Y939uuEQ7kuhqqFWQqxevLQeS7QcesUmxBwpJPLeFeJMQL72pChzhT",
  "key23": "4aRAnHcaCDNUiCGQgoAYazWvfeYNthwzVr4PGq4WQm6zksc3Kb3j1uaPwEHxNrwmRmtEAD9QqiwHHiURDXHebQVU",
  "key24": "4C2a66pcGhw1tzMqYibgngZF54nTm7hoMw99YrPcW9QLef3eFgg3pKeV2k2j4cGdhqL4bqG9A4rajvtsPm9HQm4w",
  "key25": "4Q6nRwULVD1Dt1a2Uo8rJW9uyRaYDd16npdmJngW4Qm6zmBuuNmp1MZPvBA5Wu4JH68XnjQZ4Zp7oLJcTq2mhjjQ"
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
