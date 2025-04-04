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
    "22JQi9pDz5PaziLfrngKQ96RL2vPJrR6k5HP8F65PMpVJDKMYJYXkt4DbPnGqpbGAysKyWQo4A9Xxh5PVtgXzciQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56pZooGvVZ91jf4KoHDPfp26y1KRVmJ5EoVH537CSSyud8geYpSpCqWdqhAc5VDvcNb8fKPfpyPgnuHPgrLt29ZN",
  "key1": "3BBxTNDJvkMJYZHhG7Y6Aa3V9YnAe236QMQoLhA3EGLg9ezm7eNDRRGcPuaikmhaW156kPkxEmT7n7LWU8zZSdYx",
  "key2": "QfzrFZ9kiJ7WfZ5iWmiohnbJfkzPpGGS4gWJEqEZgA9sk5BRfb8Z4aNNEx66zcUZLhvBxHdzwBhK8q3zhtnMzos",
  "key3": "2j34jHqDSaJpbhQozGfRJqWi8dqPQTKZ1F6kKdkmSgCaE1GQexq3wMFyobv53c9mpiNsYidv1mWACDCJ1r5Q4RAD",
  "key4": "4B64t5eWqs3PTPXyGwoNvic4SmuSETB37nVxRVuP26o1w1hqqMfhuMYHZ2izG5285vkiragxHSQMR1XnpobgGBuz",
  "key5": "2EkndkrXZ4mxxk2Nnw1dBboPAGYb936fg44xQUkkEzQxXNFXA89CbrobHntryF8Lys9erMHuvfdTeW8xthisYdG4",
  "key6": "4f48Z8NUg51scDThvQaeQ7CBpAEhsnYTtWb8kGgj1NEycJg3n3kmRwvHDvh3fFuRxgzmBGALCPa1YQQp6KuqV99H",
  "key7": "2V2zGCu72HkcWewWmRSK4wfxjN1vZDoDc5wtMNf7uVhjeTSDfatduBEm9uPjHiFzJjGZZeq8eepsye1XbafNMSE7",
  "key8": "4uJS1eQNSErjj3HWaSeQjXiVLv6tQJyywu5A1RUaf2AG3UpeDBFXUPgDRhuY6KQ3jao5YGRQWvAHtLAx4PCmZEhU",
  "key9": "3ajkTi4tTxwzCHqBNUBPJjddirWMJzMHPSLabvzWRnuG9xpkzMTwjvgZ6F3vBPGSfZTw7t25neTt4QuysJDGuYGM",
  "key10": "o6zc75Up59dsZpLvfGVfn4sHaZgZ87DU2FU1Eo7mcs59VP2mJroxrsBjdKA1XvFU7j3yfgAHiD4T1DRSqEFkNpq",
  "key11": "pxdbryK2Fp5NqciuC5iwKhVja1hmGeDc8gbL9esWV8jmZTuaBop79fKH7ERC6xR7cjc8F4Mb2JiBXK4jB9B7jf5",
  "key12": "5TnreizmCrviRkXmYt6aSixTBffix2KHrEYRx4EFTaCp7m5MDjLApk2cLKYPf3EHoCyDvx9WUJy1ztDwTZo8AsaN",
  "key13": "WVygfdEtKYrxdDfQmFvyGzoeBoARwWM9YzddeBHqDNhaTWPEYLwRrg7WEazKVMH3tYFfaDoGEG5tze1ADigUEYf",
  "key14": "4LGejhvEJ8gHMkAadtmDn9noWGG9BasotsHXHbUZwZcF4ZLZte7en8ymKVvqydRvHcm5UrJNUk62DY8iMBCHiD15",
  "key15": "2aZLzryGqoq8J46RuCnmqtvRSPnbRkDQAeG4G9V6LjSvoJ7hZR7BVHa6MnnRSsK8e8qn435cDBon5AywEr55Lf1s",
  "key16": "5baZCQVXjRtgG5Y6FnUSiY4AtSFxM1orSKajpNg4FptiaorTfUCpavoXuJJwfoUA7sNNrJqME11hobBawhWBJ5Ce",
  "key17": "3oLvsVT1Dom9j5UQBunamqDpB7TssJBzBXvHvigaaTxHG341USTC8vRMneEd7PgBZ4d95SQA1hJVDHbq9CT9N4Ze",
  "key18": "5Rnf57idfcMYtEMWHixvXVyPJv7rMLhWfHrn6LuDzRtjfAqVak7bA7R6vF9UBivoWz5cnC67j9LCCK3wJtbGUCBK",
  "key19": "E91GcqJcESUWxMkiYNVVoqs8dJSBDMdCDMFoHhBrVA46p1Z72sQRHTR2rsc5P5b9mwvidLin3H18twwz1nnGiCc",
  "key20": "3X7Mhdf3tYwgXpb55ccBtFqXKGXp4VpuXJpsd66L9iW4WuEQPNRhBiXXoej7exs3Tghdq4Fq5uA3cFwckhLW9Adx",
  "key21": "4RsVQKpAdTswiPFJNzSsz8UZiMMas45Qp4J1pMxjqKWCxPryPvV6oUVv5p47THGF53maCFNuLu2GWQZPMew5dDjm",
  "key22": "5BhRycDmawsxpVCsSpY1pnRWp8XebQsFPkxnEUPYyMX4Bwt8Zaaw9znWiKKwQkegd1pKi6RiCAwLFNcfwS7W4XH6",
  "key23": "38TEpcDZ4NPJo43Fn4PePNP6k2FJH4bE8b7YeMvxQY78BpJSvooyY6xgeuq1QmDKBR1z2LYzV1FBCSRk4SDWaqjs",
  "key24": "KuvHC4YTskoC2EBqxGDACeBbcHMSkCsNkUBraUwXjwKyXcJsfcdzXuZshoRUom2xftM7Fdwyjcugg3u17etXJcP",
  "key25": "4Xx9WfRdYTH86XbHRWuN4ZCh5os8w68JiCNQSEfaefPZSaYCzK4riDpQ1c7h9Eb2qfseXYnnujtZDRQBjmEDsbax",
  "key26": "43cajgxv9YtrCgKaBHjgvuRGMTB8Sgsa7KmawouN1Gj1mLZCdAE5hciU6z1VrNms4RsYFSg9iTqPXpb53EBwLesS"
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
