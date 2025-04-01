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
    "4xMFKFu89zYVyCrD7kA6ihvxfwTs1GezfUkxDaa9aW9f9D6CubLcP7ThLnsspfF1G6wwXz19GxvRrA17CTBYprfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zCR3Y22VTmWMr4jViRbsnBwXKQ9WrvxfU4bpswFEzF2QmPUw3oiQ9kCgJ7fycgQrKADVPC7YUAghVFXc9GdbD8h",
  "key1": "VpPtxzJ8GzMPWeDBJY3R8JjwftuJoiZh1bvn334dHZtdFN8EixL1YXnuvKHBC129LMLekQfuaxKooG8uNZsjLnf",
  "key2": "2qhk7472BRJjGvaBaJUma8sw2yVi6jLx9qXdL1LJxcSZAKirfhNnWQ6oWqmcJfpNQs2u4zfkrssAdH9qpHZjYeQw",
  "key3": "2HyXxMkK999V2s6LtqRz2ukWwg2evMgcj6WayFZBmNyzXL6pnvfPcPQtPU85HFWMvfEztNgnFBEuoWxbnyoXFRZ1",
  "key4": "3ST8GUXCH7rofQ1Bn1XXTp72s1RGorU6wVaAJteUaV3gXV2tHNR4XRcUBJxzqxnGTELE4mrHz4TfJRFzDrjWpU1d",
  "key5": "2j9QzptzfDCQEgcyr8paF3CuP7Pa9jcTYX7P1dz32gsfvJTguEw5s3tR1RDiraiMMqfJV7x24HWeSWNJasgVxjnA",
  "key6": "5PuddvZz2nskUjRa4rayMNSwoRT18YPkhwKx9Pfc8GZsQGa3vZjHaXDP15NYXoofRL4w9NfVLsFv3PQMti3Ey24s",
  "key7": "22qoYhj9vDoypHRdFHaZMZZj7Qg6TsaiUjrJxMJ4Y9mUVbSRUa2LogZQhPG1eATxBLbnDvSiix1M6uaz6xCBut9S",
  "key8": "5ryzU6QoNxK2f8EMbwqFohGt9CXMt78YcSGRFDgmggdYwupAbB7t2wQqfTm76SokrMS3b1CX6auUajFeJHKFifey",
  "key9": "121afNPiGKfTtEC1wX9ih9ZmLacV5qrLAt55jgCA96d7FBM5CKXQWZRfKKictYhWsAAkLq1Y9mfdkuES3LsTPZNo",
  "key10": "kAe6BccTgHhbGActaKNSwCFCtADcmZWoWq8jgCyBHZjZggHGasLE7tnmn1L5b91H8s9MgoLJzGqLdQWttdFSEHC",
  "key11": "2m9Q8Q95pycbX2g5MhtQFBff4iMje5Db2MSAcbNGBv6RYTe5VkQDxGmTAtG9RNYrzcSGVUdnVeCbhxGpiwkU1pXX",
  "key12": "3hmyKKJmaUfUGjDdyevuBqHYL6rGwjFn2XywrxsWGnybJ2fq1pToG53CG4yLBjMQ7FfUcknHoPh17zGR5bUQ5x2q",
  "key13": "61Px9gDBiifJVE3HbepBTjACcVQfwsRvTmWtSok3Mk9jgadMpWj5YorbeCzQxGf1nk9WfNhJW7iHHHTTNgqVv5LF",
  "key14": "5o7moPPgQMrNu3zwDWkvT3FCKAD7LnCqHUjCfotgjtgv5D8xxu8m4XpUJiAYJPfNSfbqpS4vBUdN7U1vgkqvbTZV",
  "key15": "L3TSMBfYzDKhvFauY7eoFBc72roriC7NRi8U6rW3mUTfuyFDn2Ba3Wn563pf7me41NLAjqAwa3ix9K6u1Bd1yFR",
  "key16": "wArXrfKstaQf6NDUN2oNCbSFu5k4rUx2KTRfDsmiMcSD7Nuj5gaawXbV8f3tqXgDduqXH3Zk2aY8apdY42VNLRA",
  "key17": "4KGT2aRNFsjUEXLonN9Ua9dxHCu2gcECa3rMDW2iyNjp1LtesRfHq9GTXP1sjVTcmzYh6YTDzfM8zNicAMGekbqD",
  "key18": "2ESsbsLhukfbWizF2QYteSgJsbMwXcdqNEtyiUTsr8cWxpTrU6oVx9YsBWWqaUT8dmngXyHnnzFQY4x6WC2CuqXo",
  "key19": "3zaTeo7AQv4yr5fiG9Sd95BEsdrKUAKRQkz8bV1ycmApdFiiW9FeSHAg7m5mw38HPH7McxqU95GxUjkWf1CdGMmt",
  "key20": "3KH4baEUZdAFG2y3E7Ry6ay6QET3Ex1Efhsd7EZ4Yy1yCGxKn8Pvpe2thpJXmSkt6NmKVUpqiQydhVEaDzeL8EdM",
  "key21": "1oKHRw2tmrr6XXvcvpDhs2W3RnRgHXtRqZEPsLDwjbHYEqyENgmrikYLKyNqbyKQaUtkYxe841iJ6DTQ6HBWmcP",
  "key22": "5pyJ9Pu8wGqggsKKaNoWJ5ox1B99GsMERapFVbWHm5idAuMngc2NCuy8X1MBsteGPATR1UeAs3eRY2sNMxtMBzpC",
  "key23": "3BEsXC7HLMsD9CYch98Jung6d6Kd5s22byiJKh5eXxzZG1gUdJXnSJVw1oSTbuXH7tYs1GCp47eT9wHPV26ykumf",
  "key24": "37c5FadFDGPzUfexeH2gsKc5hTu2THP3vrviAEjBwRqBUvdpskrFdK69JAuWXGN2Xu9AKFAHxQ3aWAvpgYemfCeX",
  "key25": "322ies8isomUwYzEnJtPoAarDdRL5tJxfhsWHgMtyV82QaFX4t7A4ELHC5nJiJfJxBdZEFYTKug8fsdhLHq4H8ME",
  "key26": "3KFqq6yZM5UCkoKizxoW8ewziCgELaJMrdn3cJB1nHCQrdPnnhbMc3egbyTJu8ptKTZ3hhzXLWbaNnoMRiEApqni",
  "key27": "3auHUKG5ziHMpf5vAD3MG86Lhbq5nXFyqPw4dx4n7BgQ3ob1mcxtgVB6Y3nBjCWS9iLCfoCAFwoEDdMFrh4b2aKL",
  "key28": "47vjyrDYeMtHFF9fkne9TvF5RC8bf22PtD3qkzAV5Sa4hhB2pJkTAYKNtvuJH2ddR1tsc2k7bjJdj7qPS5ZCPVCE",
  "key29": "5PYgg7ygA5ecbfQ3uaaQU9VnzxgqGE5WQk2CcsL7shu7SRwH7ijZRbfSKzdfyuTfKpJiimHs2bPkAHgrz93qXdYk",
  "key30": "zHYw6Bxt2hs7r9MnfrWa7quZoAGwhMx3CyVAenCq7QUj9kF2S58xBbqX2yFfom5688yLcnRrR8uxh8T3CeL42RV",
  "key31": "6BJpVmLgq68KTCDRLzK8BcgLtB3TGDctAY2fBL2CXyfNmL2D5MPLoWjbde2TTeB5dEdvmRdWq2qbQDQs8LWKTrg",
  "key32": "49SmZ8ewfSLRWd2qD9UMoed7585QV8a3qCYKzF4w6hLgzsLCokqJQ7ekEyhHsuPs7yUMy33i1e1KBiFvpwcEpMDy",
  "key33": "4FPk7H1Sm961PMCsVEGDZXa3QN3wvhUUpXvecoNucXSRRSXuFWChPePkebxRTCjf1ZuD28qqLycCzNEeKR8Ziip",
  "key34": "5XHw5QWKqpxBPLqF6Z7D6RkbrCfbnghPBinTTMdVY8351dRYf8xxN9XCSwUBa7W6byNDZu16ifffftQjtUCsCDVH",
  "key35": "2C3249KcaWkdxihJUM5YAUnF919wkqxeZLzT7DTidUaq3ne1ih15SPQSgt9QSPWWz5CdtVqhRxzzG5JuvyBdMBw1",
  "key36": "cKXzpZa2bVg74B7knyaThnfGQZbSQjzGTrH11VLmxHSkhRzFx7Jh9fnXvrEi3uPzpUcUcfUrgQ9ghh1YhGUryr3",
  "key37": "4DnBpME1Nwr5nZEx5wUw7Dn9fpEzsBAmHsB16fYbWUvtjowsPMqNuZ8qKdMg6YcnXbF6FQCFHWidww5XksFpiZhc",
  "key38": "2mkrYUoBCxkXKM1MGbSKeGrjUHTK1QzJsPUJRzXisuBriJWZ4VmrHXBjBpo9nxbhh37v6qYmDwq9bxD7Asj1dGu3",
  "key39": "2MX4xZkTBw4r2d9MJChRsue4GJvaERxunDVNEGEg4mKk2wNtmfghCed3hy9uoMaycGCFVwdAQp1Q4zoVAMEkGtDY",
  "key40": "NUpGT291XatMPu9eFWWovvJHBpDoYDDXkoY6G6WFALb8YVtM9bApZSP8myp6vUfSTk47Aktr5Jgm4QwuFHwU83X"
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
