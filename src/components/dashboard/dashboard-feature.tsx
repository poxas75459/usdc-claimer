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
    "3pcuhSpYUFKppteeqFvTGYmcktrHx1vFW1dZafd1b9GzKjs7qeXnnXHXbc8JxDRp1Lfz7zmQdAN4LoM81MNBKSr8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bemu49fR92qGxshdScyp9aJY44seQHoQmyLVXA1WgkSBTFstKB19ycDSpVCVtnwog1DqpcZegk43P8BnQzNCzxk",
  "key1": "65VP7LHSckA82Grkkd7j9W51BoqcCYf3xivguJhi2dVgvaVUEdokhVUtMBCpTR3mckTnLF6MrUDECznQQ5HSb5bi",
  "key2": "Lx4q1bM7Qs5125SbcJu2dg5HUM5n6hbLDYgyoB21FRSGxZtpQ5yUcf1dg2ev8Y2D88H8thkXk3hfnCqCowAC112",
  "key3": "57HayjZJaKJytbZimnh1jxZcZYk5acjRMwCq8w2Nn9NrgCEq1KGvtcFviFQU1nGNExktnH6hHdSDFinSYYu1QCTY",
  "key4": "3MmbmTRDMJ8TssXyBfzsfiaFDzM3MsW9sQBPMXbmwttEpRzuFo6aET8RihgaCWwWNoB47AW44oWinuLrKkp5mTua",
  "key5": "28ZjfRUGEBHzQp8iNh5b28n1yhkWb7twSR9wP1vU5qCvbRKp26bufn2oLYK1YZ6CXZgyt1tCsZsRa9asbHxjEbdt",
  "key6": "bWM9wsUg72obr9teyVfpb7FPzQ37b5UkoJCGnomGxtHBGvQDVJ5ttSuLvvDr9pNgJQRbeCwheCkUZcWR2g1E98B",
  "key7": "45wwEswJx5X4oFotxesSfHsEKUSUcB7erWo74g2h8LSTeVBV1kFsD89ovMFZTH4y2QicbQbv1oGYgVYjCTp2A4G7",
  "key8": "cMvtxrhnEVvKj5FhjUYdvbTLb4qzXeqrVDDHs9mhcdQVBHEVKehN3qR6EjZRV9gRrQr7bcYBkodgGRfywni7b8R",
  "key9": "3cVk8A45xmnbE7Chobuwgbagn5bGwYbwCt3Mswt8n557ptXWaicDQXzmn2Kfd1zr174iUvsXnE8H92pWwm9RwqXE",
  "key10": "4Dk7PryL1afbNbLLYQta3GuJRup8mZyM42sScJSo9tjaTccXwyCgJjLgTkmoKrfAuB6bMYn8ARmy9Beh7ZFr2C5Q",
  "key11": "pwjBkNY2svrpi9TSf8vfjf8CrJbAm9jrsrLP16rBbiwsoRXTgC6t9B3KowhMwedsy7WVg5CYYvjSo2hCCcSeEF4",
  "key12": "VJzyyeCna92SWphSrFa4jFakTzSbNcpg75GHRUeZc2oTf5jBE1mgkVhGGwC4PnUtjnRnVwoc1AnhzPcr8fdYNXL",
  "key13": "4nZ5jj6jyVwYb2AmQfr1HQnv6XHoMXGRwFTg57DAnDQuv6XDvp8Mjfj1fWk6WC3VqfJqkAZPgDntPnpN68JvZhhk",
  "key14": "4Yuxh1Hg8PJySiAGQQh3MkyFmDeEqzLTN7BYD8VE75dECSNSwv3qZ54iC96oMZ9YJCoXR5F6G8LXwx4JVEqYXtjj",
  "key15": "3UbVxbTzJF29W9TiewhNjcaisVt3A5oH97H1gkSuBp5M2RMn6ARZFEYdDbe617TL6MMtB32pAmsXqGcvpRSTpa58",
  "key16": "2YNMLa2uaKkv7WyqQTHATrSpn3PByLoWKDGFXbzZfMyzJWGsGqKRoZAWju2s7wxPri4m1afRSh9heyXQAEbvQLah",
  "key17": "3htYZVJHUQRSJvTA3sKV91wvC5t15Lc7zoMdiMiGRrtUBc8ichZBALtBTjuwDuh7RByuesXTYwdoLchVEp8EK5Fj",
  "key18": "2jfQ4pzBfaKDZKZRbT2bwBwB7C2jb18rtLFQQ7TPB1FJb79mCgdGhiHivPd6JRqRN87qYHLeY7j3bSjv5cLuFb8y",
  "key19": "5grY8pKyKneT1hrMLqBpLdy6bBY6TVkXCaf3NG3zXNcVr3QEDbt55XoDZUeX9otH3xvWzJvkUVtBEEsh2NqQYg54",
  "key20": "5NKhSNFRFSPe4C7qqQLdLgMcufWfRBQ1MZvE4VgF9vBLx4E7qaQHz55tNDe8L9WZ7Ne8VuDJB5dbHCjxrE1eVdZx",
  "key21": "2XF6VYuTPN1JvChDuatFGoPTTHpKNZEu6osjbXduNsqvQJBFqxmRTbyYY2hS2uJFhzTFQog1yURsfFoi6ChqxetG",
  "key22": "2CV71utEHnpyLoFqBLcMbGy9QXs19AptuPvf7pqagw45Cgdo3z7AE48BR2QAeCzKsbsMVhKq2hH486N3en2KfzM2",
  "key23": "4mC9zEvN3UUkkXKWqVouEMzHGJkgthYdcxEtFoRygon9uFNmanxfCBx8LhdssnzwtF75CvZVW8RHTaaFJqHWbJhH",
  "key24": "3ekupeJY11zNJ7Q3XLVjjgNbeXDaK6uMLPKvKytjZAKqR8i4Y1ytHoqaBDx16EGEFwUJbHsc3vPAMK1hu6aXo3vq",
  "key25": "2m42cu7QL37Jg1anGjPhv7TdkMQU6FUSJUE3osR32jaf1ssh5ZbzWEnSB9TjtpxzPkf7kZhoXFW9Sjc9zx2FvNuG",
  "key26": "4jYacC5rmyNqbn7L6vVDvo1j6dgv3azz3XZLt1t1Dfatr5PFJGa9icEohbZnXGXTLs6qcRncF1DpPT5s4wKNuKKZ",
  "key27": "2f7pxuUQwJukcFeKU1u3g9nGzxFrJs3nj9E5thBtnnvESfteZLrkgQswAK62jtfs9oJ5AVJpncgh65nw6EXMMP57",
  "key28": "rbfuiWSqLpKdV6bfRwzT24JYxqpo8tYejLQ2KCFJS3W5xqhKciFk3xTjAfyeLyuhjPJQpd17gpdFkVwEsJt4aMQ",
  "key29": "7XypEsn1fTj2vBj3683cTmReHFATDQejCPjMp3nJSTMu1Gh9A9qxRQDHagBG6aEr1b11xv1DQ5DuW1RbuBiTKjK",
  "key30": "JZNfGpgz7NYvoUzFbYqN4x5cRbbVwvQQMpzHcaGeTVRDGqk7xY8icLeaAEaDU7RSuUiQeLmjRNGtknVRw4iizbe",
  "key31": "2ForQmjRestDHYZhiRmWrgEzXbKbDNd5LVHtYvHXUxkQw6QWrhxLPM8cm3YqBKgP49UXZg447p4xdVLpy6UqRQFf",
  "key32": "4yzPh9ntp7DzLnKKqdWsy9zo59q4htAVw9hHeVcmWTuB8sb4xURPt4VvQfHwicN8NyZXRbRMP1vGghqJFJnYvMRo",
  "key33": "481Lfk5eEU1fbvyqb97ixmiw48vj1kspxgnxD8r9MSgW6YV6bxWcz3afTMC5W1ZLucUxkX7XNA5YqunGrRQUAumg",
  "key34": "2FcS957ctexDsKvKqBHh646kintstHcB5E11jFSwbAzy1pAWn83KMJ6TGj66Zjndc1bsrEpKqTaxbS2vyxPtVRjz",
  "key35": "2BjmsdzadGAneebEm1vZokAdKEW7FDyH16KW7TbXf3Wa7dJnAWLM97KTWcE8NtfQe88ybfvm79f4RER8NybkC2d",
  "key36": "23odda96Pifrtmg6wNs9np3U4PLHMTKnY4S23BSpUHzZwGKLPPVeymkKChqpvvZKF3nuLumGXUd34UFfkXRDSXt7",
  "key37": "3GmNFRNRU83bRHxNRfa9kZ8m2Lxk9uvh3822A6MHQqV1ZNdwiCauyQMYGR2c51bFz3NzJ1Zz75sfeijjD4dpZsb7"
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
