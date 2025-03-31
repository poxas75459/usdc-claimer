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
    "2F3TWjEua5PzLBwPAcPm7gsLGXXxJW6e2N4SKEHmp7ZSse4gXgPmbP1YCNmfj8r6BdJTRq9eS9HoWQfWRf3d5dug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NQe7hdMGtd4yk8eMYZKBdM7vdHkSJMXEDwXqhjC9X3tLyv9uNB7nz2Dfg6s4toXoNKpaR9uKtniMSeFsnBUm8G9",
  "key1": "5e3HeXSLXizUSrNzns7Rpt2bTwo3sRveQ8ZsSNYH1FwN3eDQD4hAAWm2C1SBAzXvrsFxkB7RBJ9MdqrNDDbodXVu",
  "key2": "Z6C8XDBMeeE1gnpybjJDQNzwJkVomhttBTePVV1ntAaiAKc9SCffwwGUDGKM24gy5JsLN5e7iG167dqLevjfy6M",
  "key3": "2PKb3ReLyEX1rse5MYp7nkHpdjimkSoHFH29GskPWAb4956tBVKvsEgZcbuKNyCRaEgnbqSetYJwgRYG2XLSbhwb",
  "key4": "3Mc9hG38GS85bY2C8s42HAoLddBCXGSZ5FNzsEsXhw1aKjRcsBsRXgMxWTKQCfzhtDZSUrd8eTNQMDg6ttN2B1QP",
  "key5": "47nNvg7kwmgjgCz9ba2Ppv5hnMvYrC1KxVdkn3nDhcVR6YEuiPYVswJePWtRFewgrr44Jm2Li9xP936RAURw8WZq",
  "key6": "2TrZvwc6eV7h5F1ZZdFU3qoz9yTDo7FsHGQTvG5QECopUtNMY5ztjLRSv49vcZtAF2FWJXGBkJCyVhJBhNngreoZ",
  "key7": "3U2RqpYv1oQTdsyQ8yfA91qBm9mzvvm9wciy5j2VTTTXy8rQMMM3FzkfTFty86K87oWFniVJxyW4c8dAnw5JGKTf",
  "key8": "xrMGTknhRaVxNHhBrPX7urEeNvhp6o9LcFBmQv8qbbobZNvAAM9fvzGeRweYNXT7iuDrf7TAyYdVqLnar4JuaJN",
  "key9": "3aZAxpdnQHLSDG3M1AW8MVXs4889SApAxSQ6Fu2DbvXNJcNzMJLkbnpFJDw8pxKDrxs43zRra6di6C1N1wfwQkMv",
  "key10": "5qtwxLAxT6GjJQoGRXgfEB6z2aBSmAc2ys23CCvhXnhreF3QgrgJDoLfV93uXCuQVAKzP5pYuhNUgef9FeYr82mQ",
  "key11": "41N92XcAFDip25Cc4PsgCdzgcXh897GMsxJkmoV9k8MeTitAEV9PmKq2PxZCjS4S4NoLYczWipvcVy39SeQ4YiDq",
  "key12": "5MuPeUWs7hT4hxMEhEgQNA7VzuCzqv3guqBzbMyApgFmkV7KR5Ct52bxmt6qQLcU6cC7yM3UTUsZKBxUzSA5rCCF",
  "key13": "2ftCEiaUP6GDFpNtcDr971Z4q2FN2aBdFUuuebBaCedgwiQt4jWmp1B7FB4P9qYAv7H64MCpikWiRYxxBBRfzjfd",
  "key14": "MfGcqYDyVWmBsh2eoeEwbwRvmm4ymUSG9SmXpZ8bBi8TEjxKMxrt682kQf9Ea6xYUE6xZPd9Simr5g9rZL1pgoW",
  "key15": "4H2b8TACSKPVaKHKBVktaSJqfcrqxym5M3scknsZQRy6ztZBpY4G9ayRm7KAuu4uWzsJKjubn4LTkW7bm8oguLB3",
  "key16": "4axHfGuGyx1E3D6b9bkVqHRhFDcS8PTCYRgPj2HCcPMDak4G6YdRkE97AgHFKWFAibEDk3QSd5A2QtFvJNHxjJAT",
  "key17": "2oXPQDcAasZkwd6AhKakhYQaSv4dB3ciYzju7o4vKQXHh22ANRGRghhoT5YTD7NQ95n1mSbEKXEdQ2EHy1PCnj1w",
  "key18": "5jkndPbLoEWQV8XrFkCZn1UXeY5iJUSUnjA2epTccdWmng6YtfWtzFFSjWD1z8Nkndj3e8JgzSZLxXPhfBuq1pya",
  "key19": "26QvpZB67mGXuatDSTS44LJJ8vtY2rwWRhjHY1yeJiNxnhEp4cceKosWi91PkpDPZiPwX2Z3MxAxgKetMkDosBkZ",
  "key20": "4JHd2Qcj5rpGomraD15CF9oVmG7Ja59KJ3AdRdM4khJBETvYVKJmz5kBff6vjqhbCv34jR5nTam4NpU6W6Ss2c8o",
  "key21": "Fj7AjHJg4DBGxU6P4123qwfABTPRB7xWvkeWqVh1P3Y8tnkgVrsgMmesDBpqmpSfgEURx8Az53M5AFJCP1wNq4b",
  "key22": "55eckkVef7vu31yTr3FrWTyECccG1cZ67JvjQ2kLmUXSvT8tb6CVwPsojK3eEFJXGCk663McKYf29Kgnt35fBvFK",
  "key23": "6WJ4dQMbZCvjVPJrqW2Y3fR3ojJsffP3kWAsU8iGjSD1dbLVAUEuUahursUoMTR84nUr7u12WALgEsTDFcaWUy9",
  "key24": "5q5C99Yzwyss2xWqy4Fy5FQ1EAhAnyKVqYrC4FfqNpc5nem1LtmbVnan8BnBBD1h3qRedgGLeQRJ6BrDTZjKrfgL",
  "key25": "KUxMGCzBnswiR8We6p5rrqchmfCXsN4NF97uPyetANCxmY2pNMUMyFNiLofRj6TA4E1ZUpKMLeAG3BQF46roBYU",
  "key26": "ypsV1NC7tQCCSMYh8i26WX2fKDa1Pt8cR4ZvcppxRAtcexhPqjzVE6c8DHzW4L4vmkVHoRypERbJDoFzhLnBQD1",
  "key27": "4CNmQTUp1QvtMhRhGsxWUKYbSngxCLoLxmmTdMPXhzJB9BQ7EkUG8CCrQ1YfvrhY1TMELgm6UJFomoVXoZxVVnst"
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
