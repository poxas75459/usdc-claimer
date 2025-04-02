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
    "4GxiP4fSiyBeEfJkyyJCX1puCTGSUufNTNngAwmSBERTusLFqgnmQdNkzEhvtQh1QTZbMzNLTo94oT8fRvKTsHqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JQrfDuNqhxQWbC9zfHnREe3HpMKw9BD4ZuRiUBRMkAucNcAnGMMEjad3AqLeeSSnVVMbhtB5bT4QiKX4tTdvXhm",
  "key1": "3bTr8B5RoiWafQKUiTnhPATkk8JF6Fc8Fp1Y6Q7ugUJ3PQWX2uEHperjfVKP2gQqu9aGUZVSPSt4yH6bosKTuYab",
  "key2": "59ioM5jn7FnvB9LC2rCerRC57cELC1BTPy9984xsHzMHp62JasQQtU73qSGdAg17g1yayxXXs3W6ZSPC7P8iYFRe",
  "key3": "4ydHVxV4nw1rUuiTBjDTwfpHCPcTUPtwX3cH1qJPT4dBf1Xg7YEATHBuK4eHyDso5j7rvtYrPbJG9mAWNRknQ1h7",
  "key4": "wxnkCYGqd47NZzVjSSZVaYoiJf24pg6eJ9EG6FcUSnZwm97AqrBse62XaYvioGi3LCf7wqbbgdV2TfgLMFy8Dus",
  "key5": "2xGu4aa3UKpownRcyZ6uk4gg5ENRaASMM3XxVRQJwPs5MCdE99mkqnJ5SbJATEsBYcze81w4Q7hB4Diukytsnjzg",
  "key6": "2JVFDrHC4RFYFLypVrCuBc2N1tfqfjzde5zsjjwRTR8aRbgZdLW1iLAoE9pjQfomeCKhBSJwEtHufrjx4f6Dr98t",
  "key7": "5nHmqTEmsPuNrgKw6psDVUReJMZLgFkoCUBG9eAbbZKeC8gUf5y7qRmnTJRiXRsMkUfTncnXERgZoS5p6o9X6f8R",
  "key8": "2vEvTWcu9BFqGdfbuA27mKSoMAcgSupKK1RksijyPB81Ui8yihJomhfH9uXKk2zD1C33xw3bYLa5WzgwF37c5tim",
  "key9": "DV3gxKxjaGH4Sy8PfrLn1VdNKf5s3romRcUvjhkeWp544DYuxBq8o6Bshp2eJqQkFopsHJKo8gkaewxM1iVXw86",
  "key10": "5PSXgdttGqcxsjjnLU8cJhrdKxPi9LiqkqNP8yiuBpzxAn59gWomm7BuTSXmfApNcy8FPUWLjy8G2LMgX4kogEgz",
  "key11": "4mgjkPH4wym1e3CuUzewWCx7tdZwqLfC6vRybghQcFvR9WLZi1FgGpkFR4d6Hwd7cvMt54oKZGsAexvMur9jhfyn",
  "key12": "YD6Kac77SXENy3BNJ8SMKwE3QUwygHGFDQHHkgiwCzX2ZHStaC6jxj9Jz6KwGk9EkHxUw4J6qFAzESxPmhPc31F",
  "key13": "211Z26bRphe4xKyedok3HyDhzePVLbuaAc2Gt1R1a86jA4E5eBaTbW4nnkeUrmwkCx5USNZsrsyxHUDu6VGrVSaa",
  "key14": "4ZajTkQB3jTp7aRDmq95rkG9wYZj3SKvq7URcrbxxDPDm3EkdrfiUpG82x6JNWioxQjziNxrFH4GQ4AHr4oyReMU",
  "key15": "3rTTPUcw6K7UA5s1VWiwYzWMPB9LdyohDmhfPY7tKgsNGm9DWWtRoEgoVoXdfBzJ3CRaNoau1kmubYSxRGHS8GNr",
  "key16": "4mKyHZnxVZ2JjdZLbKpbDQs99ccaLyPpLvnkcREfKAs9hpYCxTw741PfXAiJsFR2pvYs25fe5kWMY8jfH8fv4XUS",
  "key17": "iHkCVKDwKKgKucRUay1LkoTYfVHtdo2ERZ7qtm8WUd5Z2N2K9ex7RFzKzJyCqf76GZbk9qNrjCLc3zHuYtiu8W4",
  "key18": "HbewUw9V1AL4E54evgCv93YY5Jhy6sztJdxmmqWdwceofdsykNzEcJ7DJsWrSQXeNGfVbxUvbVMW6K6ujYgsu1Z",
  "key19": "45grxS4Zq17nFX24JzZ2Xw7r5U8HWg4c1Xu6ea3Vcnw9hNMkr16D7CQFCQ4oCrmCd3skghBPc1YGs6RtAtVLcwCo",
  "key20": "5nFSkhZZJWCTmqCRB8jzQQcNU3TSmrrPEtB3uGDRX9feG5VNQcUD1ALrd4inWi977CPAmGVVNs8qGSR9SdVDJNJz",
  "key21": "ZdmVL3XpuKDvdE2zerw4KduFGj9pkDBHrKDHKTv7J4oLS5rM2g1WBTmaxkbEJ9WDAEkDQf2tF4hNVsk91qxsyJw",
  "key22": "5xiCi9GQDn9KnLERo8aeh9Dd8bBzCp7wxzZLFU2UQuMaFWYZBa6qSh6krH5fi99VXJeuGkiyEPCQqaUGW7V9H5EG",
  "key23": "53sqUowTrK6hwGRYXrnddSi6RawgBZCpVws3npJv4V8ZrsrCT2mfekXjJBMNf4dcM4fCXZE1S5zkK9Qxztc5tUG3",
  "key24": "3VogDMSMKB4vCmDXkRbVdnpFMpe7t4QM3owQgBL8ZBY58togDpvVTDtYx2Tzuz1rUie3A4SCztrHPdwQRL1JMA63",
  "key25": "3a66ibWoDVRS2jaMUB9Vn1SMiFS9NWYMx2QM7y7mRTzQVAHkGTKgNw6mHgqgof6wBvpUeiPgsB8WgFPU5PG15q7W",
  "key26": "5cLfU88CeY3KhgEY57mghifXHoKdSqLCy7X4Ny2kKYHFTNythUWvcLf4Xva8kiNM2rTQGYf8sgq5k4jr89xEgb6V",
  "key27": "5QwaxWY6PkVsmitvtJrkQv9EZKs4aSeMy2PBRFUjiNNX8Axefz8tJNCDYFwiubiAxXRK3mhsskP74NibiBoPqVCL"
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
