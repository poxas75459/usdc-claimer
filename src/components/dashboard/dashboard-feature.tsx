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
    "3EBapfMAxpmKTL5wJVCFqfPak8mgtngxnGRm7x8JNj7VU7YfioXzWnQzjrQMHyJD8xvaUcjPEipGZtFKhh4yhgPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fpWVmQQLwQ9gcAv6q2MeuA7FGoDHRTFHky6DPM2LdJg7zuQmsai6HibdxTxvH2214HRfTWWsPB9At4utRzLit3r",
  "key1": "iv8rbpo6MeHcVsQZEeSBQR1cvxnFYMD7wU9LTTtShZxV7ye3TGKZeLBz5Ru9Fjum3phehoFSGycAtqkhThufTEd",
  "key2": "5csD935FS8cHudBJ7qemv5TNsezRCJWxj56cy9PwzwXPhDRqnpmYzD7WS9RgRk8hmtViNQKZUHEdmzBb26YPKFva",
  "key3": "3QBJT4evp3txgpohRMAHoh6N2ph15mRBQFQqEeH5tWB2mkVNeahUeidv37REU5W6A93n24KW8tug9ERAYx7bA4Wg",
  "key4": "5Myeyweq6jSHkRrKzrZV3Dv7LnVj8GqeH8N2LEjZnVx6Y38DaB2op8J5q6PogTD2MYfZG667t1ZojQsa1kYnL2gS",
  "key5": "55BpYiVXmgSkz2VidJimqtuspiaP3YGeM29TRVBQf5TTt7VxsJCdyqAumHiw3yvxpCgYRvCwbp12bHnWcDietPpE",
  "key6": "52ZFx1C1cjecDKcw1XoCdz1KdwRtQgquaSk93rHGVWxXWjt4sh17d1tMD8ajTLxFMVtCktupNMUsUCwTEo7KdGND",
  "key7": "2KknVcyfvSLxNa8MsahYEak5fdcwQSpeifzzYDDVHWQrkR2HVUUKSfTi85CBTWUAWDk9YcbvHW9fC2kWbGBwaGLE",
  "key8": "3o4EhrCbVEUNZvw6DEHjNQjKfTtk28ESpiUkzBf8V1jY77bAmk2LC3skLGc3VaryYR5ZDDcthUotigmpfDLhjJFH",
  "key9": "4YR2dtSW3p4Syotto9Hd5N738XSpCvUoMQjKQRmbWkgC3edQ8mcxvPBpYYZe3QCXt7Vy7G2PUZVjw5vAuvEVjVQN",
  "key10": "48T1zsoysgfPfu2MzHQkZ2pSVyENV3QeDpMku1an3XtLxBgXwQDvn6yFDfHszxo81Rhuwr4mDe2PNFMijr4E9L6w",
  "key11": "5SmuRamQhqUKtFjWfUpsHR4CNupJ4tQZzhFMe2JSRMmeF6yySUhbgPDcLTEp3j5uKBJbRKtduhLJENpshBZQAmhx",
  "key12": "3cJRsqiuVPND9TERNQ469R8N552yiehhfuD6JhE3CGfN2JcoY5AejGwaN6E9TvjjZ3Z22rtUgTDAwnVAUPXefK8V",
  "key13": "naU1rivutvZfMak15y6PRbCosZCGPnCxnghV1x9ryvNdLpNdtYxT9wtkSEAAx4WudSnKS2tVGREszcqZY7gwC6n",
  "key14": "3RUN4kQj9a6wPezvLYJqrAZ34HRQ1j4qsEb14kFqZc3FpFpRaYHu1Spkw7ABNownZtrAjCknwxYrGKDgAMR2GdUx",
  "key15": "3tbmkT39ZmKpNRd1xBgsfou4yxyUDtH2anu3WU8dcc1T8EDTPjaxWnLnJek69BUXrbLHymojRgopzz2DbP2FnFNi",
  "key16": "TwLJdAFS18rknK3No7C8gG3h6RdTmT9ejXYZRbhKJ36S1oJ62HqK3HG21fTZdq39b3GGRQZ8Ju5Hv423ikTU84A",
  "key17": "3GVcozhnu9qM5aBAxozbyyLJ9zreZFghe4bccnpA5J2hfEVTor1dpjEmJJq5twe9Zd73hpBG4v1MPqxBWK6DXWPq",
  "key18": "25CDCcH9bLsUM3THYTSLJNfWB8FRhzRJhpvqMdg1EaJUf7F6boq1BCoe3f8omMtykEVES2Gj5EaownGbGvZawKxr",
  "key19": "4AP9m5G76fSiNcf5qSRjWNjQEWUA7MtkrTyVqQWWYsSUQw88t6bAcFBpcTY2B3cCBtAUWYJ6FZZ2AUqgXdqywzwi",
  "key20": "5VjvTxB5NbxQshZXM1jCnwQ5Jo9r9BJzizrEKvm5RhBj4GyJnfKXFBS3Un2nycMNzetD4i4uxqy7WVqLkM2qPxWn",
  "key21": "3pxZZ1PdCTTTQJPTmykSPj4jbDKProjNroDp5N6AaUL8stjpyyfytk1KmoTBRpWfYcZ5DeAPxjhmUerJFdwt9AH7",
  "key22": "46FVfvWoVAn3xh375homuN927DSqxGSFLJDUjFU7ngehp2AW2t8ZN2Jh3XZjvSDdDbf4ULr3HmgXTmP5KJC3BM9A",
  "key23": "w52YCA2YsM1dw5RgzsQiVu3eHH1DjM13fydTaT1GNgKDr5SgYDvYzxBTXKvgpSy5pQbfd6V3jajHAzFAmYLWUig",
  "key24": "2SDqtMBppHcjUpMcNoPpNvRMj4kgcGUAJZumNkoDdXL6WA1V2vbxZT6dYTXtDJ37AVRHXdav1puKs6txbHyyJxyT",
  "key25": "3WLMB3j3TNgxpQgJpWgKwBMkKMq2zNqCcYAudNcnDWnFJFpCEc4JUn3s1engPw9vCoJEtzg2oj5K1MVPdA4JPWSD",
  "key26": "4dFHLd49daNtzDuKPFUkogcp4GPY7jD1nFxyv3LdLvmvZzyE3NT7M4o62GvP2BvxM97GFfZAh5pocEjCscLSsjN8",
  "key27": "3GU5f4KVGvoawMKJg2hxF1WZmjGQS5iWRqpVQdUF6a9ckUuzfnaJhJSPZedGB9YxM5MkWsnryNHmCZnjvokH7oPD",
  "key28": "MtDCZY6RGGNJJEi2QtrYgKBkJ3mE4UFzduiYHHqQVjWYTCwL6JfuRLip9TRpC3ZKihufUUK4FNBsqkAqiMuga7Y",
  "key29": "3uViXSX7zgefFFWpNRAUxiRa3Ckt2pfkJK2hjyXCjeMgjGAbjtn35bu55zXK7ik4ZyjUPhe9Unm4TS59XBT1Vd57"
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
