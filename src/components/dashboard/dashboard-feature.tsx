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
    "gYjZPeNaR2jPoZmkCX7kF4hX8Rq9EvsUKUWbZXKBCPePjBELhSshXoB88AfsPcrVrStckfYKjwP7janfhzoFAhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d49PWd8zZha2g3mUTjerq9wTtMmRAYm63p7ict6BjBMjxBXDDeiXYAsCkfNAFEZmPqJRqpHxmpu7a6UzoPkqtjT",
  "key1": "4tqfwsXEfw1euymHughSiYX1TfCE1bLFSsgfgW2iYdnkHnU4fJNWFhS2Qq4eGQW7t7QHPSirkhSdBhC6Jvnaia3o",
  "key2": "57MSFxHonVSWGNoXUZp3eCxWb6kVXJGTe6rCgFjrfeR4xk7zVDVJTTYwVqsc4hZDmdk4JYYFLwYGT9WQ2U6tbojz",
  "key3": "UwC1WzikZdXFEuduLnzR5bbbLCFHqghLNQoKuXtWg4RpQmrK13BR6a2of3xmYYkD2afWbCoMY9dYKKKkdPACTzK",
  "key4": "3Tk4BUPEHdqscsjvwdnHQ3yWrvubPFH2xmDTv8w5ro2NBg2oWbrkzMSuFZocNViCJ7BZ12BiH6sRgzewq9Bk3ELu",
  "key5": "3npDSt3GyDHcBUNko3tgCupGSTYuW48PfYFPgg5XHCYfpjdu565yGRR9raDYdAVLk81hg8Yhppv2pHGNfvBq9Vt3",
  "key6": "ccjTcfoAy9yUYy6vjVn3HzjHSm67xdTG3gYrBJt8ZuhjacBg2EKENL8SfVKMVg3AphZrvoMMbcemiURmEwVcVsN",
  "key7": "5Q995aGoCyfAR54CuAdQvrG5RqPYAUJvoBv8aHM3tnTjtJHiW35cEpsLYQrE6jQwJABtKh3ahARLPyoRogwi9qTC",
  "key8": "VFGaRAqaUvrGxzegd7PxMQ2Gc9aGvpLNATQRdcFdM8f9iNjGWzFtJHGYjqaZgoPczf2yT1LM56y3JzcW7k1DHCv",
  "key9": "3kPS4RgzCGTPWbXqaH9ZHc7KL6jZc2TQjVxqu8sAP2zHAJADozVApgRNdAQo3sFi5CpytySxrhpwP4vKV43J3V9F",
  "key10": "3C38jps1TTwVKrWJ8KHxvRTRRdfsM2zEdEH2Ekm9KD6gP76htgeinugxB5HFX1ELBKDcTufAozch4emSUbhnJUhj",
  "key11": "HkcPLhN4tUfZ4QNq52VZcqDdV8D3PmjtK9Tn37DVw7ftq2qgn6VdKYa67QrMprGgtDrnY9oFB2atDbUYe69BhkK",
  "key12": "5ebSnCTrRSJMjPDb7pwtj3NtG97fqSKSPyaBHvQdt8hn1E9wXmAXDKLA6nY6ssqDbKU6B6eAiY26pjN7n7Tewjpr",
  "key13": "5f4s69P5CvdDPvzkeCkM7hArrtFdhgpv85sJS3HURS5TCk5M5Fr9s9ZpDnGu6d1jbx2dGrzZrnAGXGQhJ6uDmNYf",
  "key14": "3VvQcFosuBZpheZoXmeKbBX2G34S45r94fwCcan6An2yrPXxiU58c6L8dqSaqhvyz7uVyiDVvBePo7QEY7hqNCEm",
  "key15": "3i31Sy3oDsU6HgMcSFYhCz2q3Ag7XWAT9DEbcuBNcSCzAcLUDJEWN16y3tD77FKBk8qS3HfCCFLsPVx8iqXH12ro",
  "key16": "5C75A4gPssZLw8zPi6MCf5w9RoYKJ92BYJHsAieYFGyVb4yCiMMSEkNZJAN4GjeADcNGkpSM4L8giK5QkPZ8N4HQ",
  "key17": "4rzotboHEA1pyZNd1HZkkVazhnRj9oF6KBTY6pq3YxjM7ysGcTAygy9WvXcJT81rTYyDv2x74Gy7nT19pkbTimb4",
  "key18": "44HsSJgDdzXHXa3jzKUyHtSY3hY8qMP6VtkBTYuSDs2Ro8EyrJmrcnkhuGjPDis9J5ESF2AsHbHiEnYZNomVRUAL",
  "key19": "28MjdtvtKU5Wwf3Ad1QYQBKVZRLxkvjh338WSmD3QYfX1aaHisH7uiJc6EtkMHJp2GQ8BVzon3Mw3V51PHrCXerS",
  "key20": "2Kf97PwcopxZnnvjkBxoE352pnP2RJ4pVQAMKbMbdGUqJAXvST6i5uzRnSNJ9GGkycEhca2c5r6KXrMEi8HNqSeq",
  "key21": "3prhmFsDwjEFXt5exbYx8kpmua4acw7Vd1hm5hqaP28RXK3weTQujbV1fMPG8LDSgzoxJexzkDxgd322SWRFZiHW",
  "key22": "5vE5NLjeBBfEJj61FAULSrbQHSBe5YCy6ywvzVu5f1yr6aS7yfAzXEMztc9Ln57KUiK1vudk42nVNvHTaHPSBhGk",
  "key23": "4fzh7GUNLUwManmuy7Kw8cCnb8cTcEFVG8HpfveUab6fFYFQHRX6AoP58nRdF8skwXfxeixJc7ACYwUfp3XnxfCJ",
  "key24": "5X31gBk8w3V3r5QMzSJauiNKbRQ381LqdZ7bKGPSA9emycatfTskTaE3v6Ki8Jy8mrwiNwoEbcSoxXmHsi89MvfA",
  "key25": "dW8QBeiLLFzfSJiYQRFWJKoE3hyHA7kr7RX5aUggwor3VKgkJx9BLYZcmK5E6XbcXChUeTRhMzdM3TgP1SPVy7w",
  "key26": "5opcWrUj48gvUAnSkRcCwKJFAXq3PpUEsxWRednpG7qJjXAaBZ8R755JRpdoftLCR85bdpazCcYEb8pnup7cKk15",
  "key27": "5mCCMH9sZFsJ6RMFkJyFLxTg3LxxYN1Gi4ftzYhVg6FUFvSiUHWqHSM6ArtXdJqiMCxFU5Yv2r4dtT8Dzho7ukte",
  "key28": "2633hmbLPCPhUgRwdE6uo54ERxA5hbN1oW4hsA9oi9vDEfQSVEaMMjXPB4XQfzn3r2v3tnKUiAUnEcPi7BDLAGkg",
  "key29": "ETmSfrPB36xRHmdA8MwiVPVNjUmXJs7MpwgRNyi62d7FzuXimZLMAPpfa2puadRFrzgFHBn1wxdgNS8HWgHYXd4",
  "key30": "4zxDmwx12hvGJykKW7SCHhAaA2ynKTtwsuGye2qxBKX7xaxcVCris4qgjagohZJojHEKPZby9gDtv3GRvzn9iZrs",
  "key31": "2zVSpQyq3ezrXdGw9dVBMhAUceTdUELDdc8rfTf1MxtVeec3DzSdggDA139cAHSUf6AvrhVhvcmAFbuCzmqb5Rc7",
  "key32": "3t2nYSUgj9FLPNGN6N3vJqHTqGUY8ST73gMVTbmYwcvmFoevBsdLub3xg74HyQCY4PP5WEcDfvtoxwVaY9t6ZEPt",
  "key33": "3VTbhqttgeSMJ9y8ZnPGYMD9xteXfcZDJ2MxHzLxvt9Lr3iRfuAERqUayxGmyx6fqUNUmihWFFADSQc67sdFw4Vz",
  "key34": "5feYwPDWmbLVkL11zEmMLHeHihHgMnDyFJRWmzx1cAqUMkctEzzzUtSzfmKbszC42EvAShCnvjhXd21tfk3pSkNg",
  "key35": "2wxTqnjBB5hQ5H8VSsW7yHtBhuwNndpKb3vhAB8fJQU8FGKharFGq8oYR9r5Lytz2nzCWXqzhdC6MfocS1w19698"
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
