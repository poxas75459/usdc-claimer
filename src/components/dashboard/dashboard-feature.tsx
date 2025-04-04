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
    "33XDYFKCZ37AZ5pC7nJMA9hkmzxV3oG9DSu5qcf8ZD9aEq4Hc8QxJJce5v5CZJM4bEokPMzHwNo3SeV3DMHEZiqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Qf2FP3k9asH9WSqZUUPdhEW7vok6MTCuiac1E8kjdZVk87qviZT9RvtoVeQxmpFYVhgMdpzwLrzD48W2dM5BVM",
  "key1": "4npQV2VCpcV7bn6tfiHvVm5ihHYhLDzb3toCUaNoGCFmjyTFU9shB8LKZ8gGq7WTq83ejLQqevgRqaBumHJmdFvg",
  "key2": "hauszb8Fg66cJarSmMAvjD49iohmADgyLtc8MGmZYhXatk4nbCvnDfFcoK28SExtWtiYMhSLz7rMkqtuHBvZovL",
  "key3": "3YGqsx4DcyKHjx59uCskDXUY8NNwSyDSp779JKSJNAnaXeiwqFJn6s4yejAVUnvy3DWha75EtugjgM2Vx66tKoBk",
  "key4": "5YUJXNprHaAiaTqcPNVqN1zC4F4reeY5AEiN2kh4RigZx6uMQ1qwUe6Fn3YZuxKnZ8u1HbsSpYXKPYL29MP13mGv",
  "key5": "F7bTyqcJHamU54umgoGfRPyPUVqY7vmfJrWTrSXLzbfe7fsReCG3aCDPXfgB6LpKHWy3bBgrHvaSgRWfBKsHnBS",
  "key6": "4kawxsScs6w4C3VfyTgyg1mYTV4gEToL9XoNY9oitY4BkhdNZgSDp2NijG2QSA6PJD4yr51uqzmEZnCBEWFZXkGo",
  "key7": "5cf74npZ8kuVYcmk8xxe1VeyktkKronytr5iyPbHoiW4qA2zUp1Dqn6KDjYGS3v2eSJLXjekn7PCt6nC9d71rvfi",
  "key8": "5PvdVUUVf7sc8zdzePc4XdPPKsZysaXQZjmCz6XMGC4GzaejW1nn6HA96Mo4J5KeGiXtEpa2Eddg8ho4Kr33hEM2",
  "key9": "4DVF224AcJpVrw61dpJCU7tPttgVoxVYEKTVdkcrfuVzgUsYZzNccNyD3QtvauHL46tCtRfC97v2p4rjXLReukEk",
  "key10": "62a4STubQ4rAEdaCSgDD5BqExZJS1K1Ln1p34rGj3VZJ4eATR2PTQfdJdWKH8Zqcd9KEyQ8rvEsjUubq9csYVpnt",
  "key11": "67GRvqPLayHf4jK7TWPxNesePce4fYSW44i5KfLzd8dZmi4ps6AToc4Qnt7NM74YWQPp4jLBBmmwPxKKkTvUhU8W",
  "key12": "YuPT1zdX8HW28RrzTjAj3DLJ8XSMu5kdmvnXgeb9WdmrxMGgYUun2K6mPA1HTh921ifNUNAUELVfyJWE2aQMby2",
  "key13": "4njfruqYqAxiFTRM1Wx8sFzw4dKwwaLUG1KaFZwJJ3tyMYe9EXq6EZpBduBY29HhUDUdGpSSGVaryVp66z5WVuzX",
  "key14": "2jJew1LhxxT2RG9YB8MdGsKNWQf9bVxkrNWotVnLpo8ocxRHb9uQXRXruAk1pS5cLw8EwZ7srvaUiH7ozKSdiign",
  "key15": "3A4c7JXZDD3JNRzm1pyDwSausjL92JNZQtMj8HSYX8qKymX1xAVjxK4qWrbXpsdCwWc4fgCNCTZjDskY1AZi2C4R",
  "key16": "389HNK2r7Bqx5Djk928foSipdgKfUn6PWJqCazTxFJAHvTVGNHXzPrAsav3t1szoz8biVxB17JdjqWAsmGV6zVCt",
  "key17": "X4Us5BN6VZPHsUJ8uXdgD8f2b5pygox8W3BPKX2hd3TBwB5EYpMpu2GdbPwQmG9XD5ejjeiBQKLi4rCZFuZKh8G",
  "key18": "2tccQbotDwQekAFjWNq1ZsBwKktbKDwCHduDyPmMcKEtruppqnKgNjhMyY44S46CoZqazyQPEHVSSm5jwUrC6hTe",
  "key19": "2hss11cPcM4AWLoCR5qiT3fAN9cpwyPv52qp17kDUxet72fbjQpuqUtfbKnx9rLsqD6jgVsM26MK1rwr9wLsLQMr",
  "key20": "GrSznmQdMnWurZ7xb5LGDtsgkNFV87YBTRkgTJF4MTpW1cFZ1LGjsrzEr5FzTy3Z2HBbZZJwyqo9Kgxse9Rcs4h",
  "key21": "qTBBt2gN7no9s7oKwf5N2XfBijJ327LWKwqRyCfYMJRbcDdav9VMtaBrGojAHcQMCCBWm2wTnXGu55tNJHp5pCN",
  "key22": "3R4JzVJTwi8ejmcBwLpWB77XcBqhAQpX49Ep42Pf8JewFHvuRAvfKRD7EfobEfG94dBqf49EQJs1gbLaNqFKzsXg",
  "key23": "5txtYxaa6B8Q8nqZ1SwCMDcxggZmwaxnkzsgRBmcQ8KXoPzf9wtWxyaszYPv6f5R56Lmf4HThyuTZnigk8n7L6K7",
  "key24": "5fiT9XAQb5PyUZw7xRG48eNoGh4Dbu6Unoh8pefbvFd8MLNY2MFsxYrXNnWPT33nm2pdjCxNmhPuBY4tXLFBKbNc",
  "key25": "2pkdw9YihH77mLPVb92orriqGiFNxWbX83UkDwT4L7qwhPZZkosNZusRgH3ei4S4oTnErtrrVXjVFtfRiLn1K6sK",
  "key26": "2N793G4oqPbPbLTbeZaWp2ou8eieJAhfzPSJW2mQqts2ny53PXPu8ZCy2EUSTP8K2evfncRDDv5JjjTNXowf6mwe",
  "key27": "5W59TYisqBpHXs4DHdsP1Hv9yd1q86oKK13gC62jAf6bD8CdXp9zvWxmYYj6ULzhcHZDyUFw8KcehR4UxHmksSm5",
  "key28": "5LbXLL4HPiooZ2v2DVTrAFmzPJZ7aq8daF2aekG7WAS7bzxuueZLdSq6hRM4uB9tU8vbigweCMCf5qBDNY7K74AD",
  "key29": "5A3xHptQa6zqYiVDottZQF25VNHovi47k6YJc9syNMxExRXwLCDJpEAi6fKYeXaGRtaGrpedZyhzcQUTPazCFswg",
  "key30": "2JgfABb7ULYys2s4TUsgndESuYnNyTxtawuxP1BtZVpeWyXWkn8BDbAGkSeBDcXTwf2nHCchxgpm63vt1zT9AR2s",
  "key31": "5QkCcxrdT1wXTnWednXS3knfoYFzaspgPhBzWYEwbEgqDeU7Q62mNmho7yaHTqWoV5creCqTfuHgVkccbXVsGQ5u",
  "key32": "2k3ofvxQJDvZ2EcVEn1Fp6ALZGnEEWZCDRUwzn6ca6KjazDecXuDmRqWLsjYwj4KHShWGwhT1XLvXFuSzFSFXp6N"
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
