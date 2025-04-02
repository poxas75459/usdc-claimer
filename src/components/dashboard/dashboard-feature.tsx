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
    "5mRjBnQBY8nGGuaszDkqx7DAFYsbum2WNcqDmTXm6kUr7HUHKYYdaFgh6ShmCecWsMPwdDPqBFSRXdQsyS3TdE8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TnQyz78Kj5oavigWg9JAcvpvbTnoFWyYKzzGsjD8NkqVRhC9XoavsrnxDyGgD4T42gWwMuDn8NK42rN1UcDbRG1",
  "key1": "5i42W7saP8kurZYcCiQAHHAWk1ZxysAkpjf4CeAc8y675k5syurArRDzJN1amdHopquvNeVzBky4cbdcmNJbQQi2",
  "key2": "55bE1kFkZd7VkTy12MhyjQcYiNFSMnYzz5sVwy4Kx5GCrohgP9SLQmSFp134N4h64ouHhPmXFFdUz845VHYRTYMd",
  "key3": "uYvMS1ddae15jvLoo4y7SA4s7pSbuKi9qD2aMe2K8iVdr2ZuMN2Xor3mAtb24LcHoX5zCTs4WoKqbmmBLfq52tQ",
  "key4": "5bs1xpdZTZsZgiUckmhKqyJ4TuD4M4ZdYhDCDL7irZDMPqjpcsyjpww5paZSLkcEYTY4xk4PM5ycGNDfKhBDEUTo",
  "key5": "EyjtdQ48PoEcHdKLQQjaywCEFEar9MP3hTaEhJa1cU7TFAiGBonkAsQtsk7s7d7nG1Co2ii216LXYCKXD6Qt8UV",
  "key6": "3SmdbGPCdn9VK6qaEqW8CVwLh2EVYxq5x5bj8idmzfXKey1vXMHV2SJreY1C5WBUT4c9WEHXykNKb4mSjzNY6k8a",
  "key7": "4aPHsGT2iUBKwDQUqL3N1c4wT2aWtHrxYtuJPbiWz7sSpg6r5y6HgYkhqmz2P3rYVqLXDcV5RMfSJjsXtgfxVJAs",
  "key8": "2mBL88emwKwrdEbLpr9aG81SGWQ2PS7JRaHrx6yety48TYxAw2wE6J4hKvMbwbV5FTzydaSdTvDMAAokV2TkVfBt",
  "key9": "YxM2YLXtsBCCtkTiG9in1frpofHmvhpchhZWnZsUx1oZ1t8bVwPWEgmXbkwpa7skEU52HLGJGLEbDVuA65Swa79",
  "key10": "4h11EU6FnEa4WNwdMnPyisiCPFDAgTyMDvjHuX8PWgXPbCcta4RaYxRui2MLJpShWwK64pWKcPgk2UQykN6qWVuB",
  "key11": "2BaGASJ9Niduceh3BQRBTQuvWxTG2BLcDW7RcQNAgHQojFKdAxfbHaRpQQcwRccMqfVscqij4LZ7Qt9Fu6bDMwM1",
  "key12": "5QZpoWqwCTFEApVx8KG7ErVHXDP5kdCMEH95aSH5difLNVCZmrHTvK1RSP5z72rXvCDwxnkYbJmrQpHrefdx4eCb",
  "key13": "3AXA7DHoEj6Wqqzih6PsGRwJKTAoryCcfcUq1CKS2WMQgsah9n895J4EhXCBnySLXQxCCc78Vm47rfiUizQFeskA",
  "key14": "WPNkx6LTHh3nzYa2fdHxcEfBMvAcpz5oMatQfxWhnqRsa5EjGxgr1DkhLAF7HBZbhgLV5intx4CNz24Lb6aidVp",
  "key15": "3wr7oWdar671wqqQjBudHP5fbPMfyEi1UxNDrEfbNehfqHbcZbKWAnTpdchPQ3VCmYVLwXQz2yDm5NgLCbNkjDhs",
  "key16": "3r6TTE5D4yk9UTWSNTTtY5V6NEaX17V8pyWp1q987ESfB6wjMsEDnSQJCY2yV7L6wvS8LgjPFP7ZhgEoeyXFu5bV",
  "key17": "5f4vQ8NHT4AnE7n7Ktb6eeWZDwEHtcwEQZ7RLHy97etjKNpwJXmyVNcFQbbZZm91kVeUMYM9FDQVtdhQwwK2JjxN",
  "key18": "2tMVVccZ8mxDeRvQvqzCPfWajsVTwLsdwkEPWoTUKxary6PfPUQKmFHz8Rh8dJ7suvNLcuc8geFP5hMpQVFkefrG",
  "key19": "49KnJMs8HXsKHEL7n5Hdtg9V9MjAJBeeDFv3JQyFvPqceW3huMHK9W5URMyWxVqxAe1eSoJirDeYEkc4xQeU8Kna",
  "key20": "2Z8Ac5LZFS2wrQfPqK96a9J6KJL8vXdkbBCeVvLdEE4YsMWe4xZmdCBB1tiQ2UAjkgxobF8Z7P6ERHsDP9sHARs3",
  "key21": "5YA2Axfrei6DgmqU3KjhbK6ExccSdbmMnMGipsE8tkZo2X54t5dTzxe7Gk6fKvLvGbkqtTX8RuuPXJ1GY23kEae1",
  "key22": "4E2it6UcjFQ74fmrsLLfGYb2rJxKn8H2Le2oMGW5mznLd4rDSwg4836VJPhAdcFBKFzZSsm9pwfsVnrUqFLcoR7F",
  "key23": "2c85QzbdNQrdgbbdQGLdBkYnmuWZWNNsyj2V6hj7dAqfPDH3U7fpwVNqoxCnox5LJ93kMVR9Xwobz2QkPH2D79Wk",
  "key24": "3E6CHLgLAJkcHYQqsPdfEmiQBmWFxCqkHK67xnYNfqsZdBVyBiRdAezNrQTH2VGP9Knk1G5mVTwjnJReEoLzkXmw",
  "key25": "21C4B8P2yow7RbSgo1JTvE9Mu45rDxW8JPaGVSP8vP26tDcT8WVVRG9GLsb4C59JLTyBaoWx9skbE2yVbx9LKArx",
  "key26": "ETrz1Pi11GmBjGCGZuYeWsrTcq7WG6pEodMAK9CjdoK5kWzoWLMLEPWT1bGWnwSFCWuQKqRnCEpch7CiDaUcrWb"
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
