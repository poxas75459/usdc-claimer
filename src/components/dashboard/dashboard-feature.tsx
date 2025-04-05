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
    "21wppuLjYRi3Qs8EZm2qZP4vE8euhdo7632xrkiVeineHA9EK4YE2drPo9DF8weG3JLF2gMhFwxPrSnuyw3pdCX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jvu8cYXsbh6gvJenZW2btNnDNePWAm8qShW4wQ4hHKjryVtxQkc86uNxCFnXu52KTYAVUELn5qJmeYpreBrjRpS",
  "key1": "4BDJce1XX5Ae5wdHW5fmhtwwnnriUTwkr3GG1WEcANWF5wmy1qYupkJYg7KCH5KVTZJYMMVwRdVV3x6MBFoVN6GV",
  "key2": "3YUNi4PKbA2TvN2qzCebwzczkyggDxjxW6yntpdUPv7wj3qWgqMAkGoPg7sERymTqzAGPpLJ17DKZGpM1BAt96Ag",
  "key3": "4fLaEBrQf2MkMmHszk1SaZbYpLT3PyVXoejnuCFhykrxW789Hv9XTK4TkwdA448xJ31yvEjbDCiKqjA4653hjEV5",
  "key4": "2poP1HQyjYbBPtEtL6botKCYXE2wgXG9gk2JgYgxhwXdhs2UrptBpB3v5NZ2bVM1RwiSPW6j1J4ZyQnT4scnHeta",
  "key5": "2eRWMKCYJAnyKLakUMMeS8JFexPfA7c7wQZPFqBJog6kgYU5PRgBYpoM9f2TbKgC4xUpfLvoENqk9X9CRB3fFkX5",
  "key6": "3yytqQyX8WNjTsPmAYqkpNuwPRuepVZaEyrr4DrFG5g6UGVdcvfQxDYbsb29fFf53gLr3mjrczYcsvLr2zadiMxi",
  "key7": "2YaKhUY97gVUBKbibQwJnsan1ZwMpuXuSvC5gVru2garaQMifWEwz867DvvZCFjaonhsLmSA3N4uJPSgMSa3637v",
  "key8": "39Lk6zAFZPJ9wujLHVZ846P2Ej2cEUbW23JD9B8zFYnr9mcWDAWban4iCztRgBUHuX8DftVMTYUpakUpa7iqgsXS",
  "key9": "gFbqrazh9v7LhHUfKBTJnxnURkYzKDh6KAg4svJtrNbsiK9pcmMAbzv5kNzAbNwcCKSGwVRRhEbxYmFjtUGiskG",
  "key10": "3cDJyhN5RQWPkLVKCfgLqp5gnVZHfJ2GuoDhk3sSuHz3ihFwvb9Za5khg2RzeGqd8uL1v6JQQzEL7k4rGWK9377v",
  "key11": "2JmMXo3dRJVaFGdbC8V8E6H6qWqQLMX9CkY2EdgoVEu5gyB188ZfMnai3VAaE16YC2DRKcB54P6McyL9KjEMcW5c",
  "key12": "2Ec56rfkVmnBCGjxCCabUEg1LXVfPfYfSpQ6v1PyA6LDAFag6qgXhetWAPqz2m3SENGjkdDGRfU14qi7o3vx7zyo",
  "key13": "29WFp2ANnAupVHd1koGHHhWLCQkWfnrCovkmdqKhnubnCitcwrgxc9yauUXH4bC57uTDsr8YUpcJLTLidQwH8Pc8",
  "key14": "2YgZVam51kZP18A9t1Tq6CjVLtoFTTspp1UUpgzyYGDy3jJ2kDBy4Sj5SVeZua2J7NeKMx6RPrmG67mqDPa6sTFt",
  "key15": "5wHgqLSPjaQUeNLdU5XmMcJ1qvtEBrc3pNGH6fVd4vHrQ6VZQzXp2iQCf4KmrEf3FQhZE8cY8iPgP7vW21Q2Ga34",
  "key16": "5vY6fKT8SVVHS7hX95Qgi9tP7bTW8hJuEwEAmhdqScDm8AwsP6y933XoAVpfxrFPEQ6PdJE8p25X3yMpy5xMYHUe",
  "key17": "2s2gF1x14g4U2XufyRm4cTGx1Y8otedmCFvQVHUa3PC952BqWzgrHnDeEg5VVAYkpoxv5nhvQDiGvJixt4ZNxt6U",
  "key18": "KqNfB6Axns9R7LoLogTfy9a4ML52TGLgSAt2zDqZV6CfBiSEXXSaSbgEuwdskGoBnHguwvWnnS2sWEGei4J3DVT",
  "key19": "44VUW3aemeqW7XUbQQf5KrdhVTCTFjg3qifACRqzkC1XBqdrWYhkJ1AsbHBhxZaHH1PYKRp6LtTvD1Xw487QE6PV",
  "key20": "2F6ffQgzbcutUCD1z1utv6qQVn6bbSQkFRx7xNWuNfNhmZ3Z6kKC9JZHiGJsNetj4HvEhkiQEzuALqgUSCACdVPi",
  "key21": "5f6wm3raqaJyWT3Wnih54ex2WehQSL8WjZ13VBnyfQbwmy8CnnMvRRXn47W9qVKxvXpP2yxwegiUfxtzgfuKy3jC",
  "key22": "JFxCswWbqMz4ZBM2yaNguSGwVLbQrb3wkfyJ9Rt4XMEziY1fHbQhVzbUx8HEt9e2biq6kS6Bb5LJ8qMoYLb6ZEJ",
  "key23": "2NgYxRGjn8Gp7XZzCPdx914dLhJw8JGsarfP8WZYND4cxqW74SLo2BdwphDZGMkmUJvwVqcqomjUof7AGMkGP2d3",
  "key24": "2vka3nWwUdPnXjPUYodKX69fX7p3NQM3vjwmFh99c68ukcq5C2h4xFBWwt43DcQw9redPVnbX7BvSPjNqHoYkugo",
  "key25": "4F1LM2sZHhiokG2B3U77gaLQSPyc1pLB2UmaMZyM4rTLDry9W7p1gBs3tBWy91H99HZ7Qff2PWrfmgMgF4pG21AV",
  "key26": "54Qimg8HfU6Y1qGbjs1tPk2NiUgeNgQ4YEPioscqcUFj1TrnT3GaDirGy2ZUH2y3yUzCwJr6LdYq3273w5pCWhKt",
  "key27": "5rQsANeHwZUZ66ZeDyYzonmaTCvD1E6Dvu2Tqp4DFz92ZcTytGcvmhmhqcFYrHc6vU4oER4DhwVau3RvrHqkxxpY",
  "key28": "2u5zpJPuZVHC7hf6JRQrv8nc3Ai7Jg62JGj2mMNdFcEMqeYBB2E5LNXfy915HUrHqYdvaB7cmhQTLX5i82Gr7qbx",
  "key29": "3jsdzy13r9vyhN49n3zi7oPuw2t5aEncczSCEXWiLQugc5qrJDKua1Hb7QXHDU4L2MRfF9NjcS8maS9gzZPCRCwM",
  "key30": "4GZk94Mayac6tEjca2vMw7jAfiCE3aSSw49XjZkibH3VHytXdeMYT8ujNjf8zRNE4A3554jd1rrbLDr2Bwb1pwRW",
  "key31": "2Aot87T4oixgSEGnNceVZqxwcvHF6JeZgU64uCXDP6FjJjH69f2P7FK9oygyAHe4qtc25i6s2wtwiAnP4kBraiBt",
  "key32": "4jh8UkMhkGWhySPkedEEg3MuFadXhTTDNCD8Nmk3bSgRWBDBw2dhuHAG8mJajwwrtxgyAVv5n9yKJBYFQLAEL4aL",
  "key33": "5CetZyDHMaLqibk2pjCUV6sHPF8DPyupH4vPv9ai4HymsasCHktWF8qDDMYbXYDcuWDP2HNUJgPuz6pgkWQKkfdF",
  "key34": "pUFbypayQYxj8QTxgHMvT3942yUH3on6u8Uur7FJ53mLG7TGbYExXW7synaV8Gh4mFL2ryzDj9YjhhnKDx7Jsrd",
  "key35": "hD5jKgFrafwp6crKbqTBh5cb3mY3ma1E3AF5emMXxNLBg9rvCx1dnXduXTtieQLTJchdGporewzqU8CUBakAUzw",
  "key36": "nNzRU7NxK3XiEP9RW2cjqFmZHvtJM2gHA5pPaDPT9sS3R83s2htHyZGAoCVJ78nVQoS7ZtNNekJiGSWb7D7UdHW",
  "key37": "3ntCJE1T2ro2YhAPiiyoVNxrC8EjaVcGmNHm566rF8YFVptrNzjmJQ72uViywPDYG2w6d5TcW9xAoec5E4KncmpJ"
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
