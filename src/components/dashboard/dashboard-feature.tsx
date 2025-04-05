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
    "eDZ3izq4A9cBG8XkLLUFiVbAvCEipRR3izapauftGG58qr95f4ej7XCmLD3D1gsdw6qFvESaUkZXRCnnUnbu22H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rKMDUHihBygQRse4s5cehLWqJTR6EHt6zneobaQvtgfskHtPJGE6LHTmPGnzYW9msy459biwTWvFkZJLrWomhrm",
  "key1": "4BW6Ta2YPZKRckc7i3Cjo8RKJC5dMB4H4JvkFZJHK7S5avvn4bUghPBN8wYqGDMiyvf3xbBKY9cdbzMmLUChv3Xr",
  "key2": "YJ7Pagd8BiV9MpQJts7vqs3Yn7CkZgmfLuvg39gj1fe7MzJh2eC9skT6wDWRK6SFEN4HKPhKstXCVFpcdnWBUz3",
  "key3": "2Mo2EUtnr9tjXY9Qsi7txzMDmbU5jWCBEYPxVHpAyduvShkAuSqxwYy2hugZEZB1FPM4t1Hy73Mo7ExPvwfkqfTt",
  "key4": "7puxhnBMTaYf1jDydXdCk8mYK5GnwLXg5YSC8QyZheddJNjbFtJ4NQmyvZpni9ExkYqFtHkiRhi2m6Dz2Wf3W8e",
  "key5": "8PQnhFpZKh8hwvGuH3N5bk9uBLec9RzEZ41qxxeS9dK3PmbRQTPSMFKP2CZUALcyaWqvi6E2iXxqu1LUY6tPA5D",
  "key6": "37FJwNeQKh6iu3R6CzHHouiWSq7Y1hi94Y64kXXkcUX1CSH7Pqj5hEccoFBDCtRce8vLmRi3w8DWM6ejx4YagzkN",
  "key7": "2RpNQx8rdFKhzMowMywcTgKrX6UgjUSzHXNgmnNfoxxAEFC5CDwT24tt5sWjPpNY9YCPefpFpJbsaVWAtHTbjyk3",
  "key8": "4kdyQKd7NXs3wv9T1RhCJn6jEvEufnJKPcxDog7W7oCHV4yyZjg6uDLqSYkkve9hVaFinrWL4SEyBd4kaf56EUsC",
  "key9": "3sJ5HMyTCcvZxnN6eUy6uubda1dHD6vYXBYc9zEkTe9XpR9k8Rh24aT5iYk48mfDDWz1CmtdAvfB2Kbxvcgtzx4X",
  "key10": "2LjsfaPgWXri5Q9iuDFGUgZXXcWG3BEmDdkDaqPgSjb4Pm5gejo9KLFreFmNMQJjSD2GKSwoSxsBUJdKmntUjCeV",
  "key11": "2B9QpoPXPjPvcQVAg27FEN6QTHEo8zo1ZUBgHjEnmD4CRAtmoutnmZDvr9ZV8jteR9NNhka18h4BjXzx7e2DFNzH",
  "key12": "278M2hevK337f9hVo3eCXXfgWpFRmqBAaMAgqApVoJL1qtVvRDNq1RmBQgmZ1P9ycxkhcyF5ikJJ9aWypeVNQ4ja",
  "key13": "8iCuT7DfbnBK8XPsr62qMHPojnjmAMUZ3vKhsaTXh95ZLzw5FnNhMx8QKNUMXu2WHVY4CNf8oq3CLHutDENQqwC",
  "key14": "3iBbKDP8vBQckX43H3PfZT4qtrM88Nf1VzLzRp8Z7aWt3eHKv24Mw1eJGeNUNZdch72zRqo9NTt4eJdoGNshVmBH",
  "key15": "3tJqBpeqHjntpLbR2NNqTAKYJbGBd8ajq2prhot9qeUTJ2EmgHmC1eDhdhgKiWFgFzDBXxYPnB5rfZd3uDvrZeNu",
  "key16": "g98R7fEb9b4UecBeZiESpPonBpk4pT2ez9haCnytpozbgtmWmu5AeTEFMqR1nFbKZe9VYec9Z45HPcnWCVjjiHe",
  "key17": "dhej6XGEy577RbTBrsjeSc2ffFpSTttkLYRQHBHHV6NkdnEDRKkFtedRLqLGzrMSuuYwihjwqxVNJvokkZE1Xjd",
  "key18": "5uH5hZiXFaxzSNyABzKy8LQuCwX1RHFcDS2RiVBq9xRGc1rLT32zfr7MsTEsEb8pYESLD6DkSybRhYS8ptaXar85",
  "key19": "4F35S4z7D1otQhMY7SejMHW6UkSc82TDAvQgYFhmVNH2kMCcni38ZW4Xv2FXhLnbP7DtMJs3Ej561VzhagSF5tm8",
  "key20": "3xvpbhL5WwAstPanaj7zJUYZV4qcUZXjivH25qV8msd1dcmLJBooQ9UJgaWzYujoDpf2rAPAivUeHXwDoptuCjGM",
  "key21": "5uWHwWcM1WZv3PXY18zmB26WgW1mq214RfgN6XyPdBj3uPRouDS2QH851J1E5pLNdAxJ6qX6DtTF1YkixrFgpZ49",
  "key22": "36xsK4P4wwH2rwL7p9hajNgGV3Ar4RvKgrfwoZHiwBLJc2mcAc2uYpQEixyUfWVKh8Yx7iJeSfsHw4sGvbS3i4XY",
  "key23": "5bJgS2wFwEudajWnxQSxguHxYq3aZwnFGL6zfLGbPgUvWxdSTEfuqLVMEeL91xTeNiwRgQrS6bx26UKbGKbRETSM",
  "key24": "4zVFaE9yqD9S8FAdTemBrL5SC1RczWK5BFjYxMhNbXHp3MxhfQ13rn3DDhPbKXqegTUrV7RWS6iNUDV7keP5mut5",
  "key25": "zqR5o1uzM942RALQiR6nKmv5nBGXEUQaZeGnM3GqbLEYMQMqZkTkkMUZ5YpTPAMRsh1qRtGkEfK4nr9ieDcPraY"
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
