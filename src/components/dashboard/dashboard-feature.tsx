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
    "2RY7acMD7QZqYXUfAoHBgSv9rPK7SvfwiDmE3w8qbQEuKvrwWTEPX7rk9z2TRDBaKY6t8DjAkbEjSSUyu2ph6Ri9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XvLXMWEwDAhYDHPY6oZkN1UBrsqSbTymhFcpdn47PZiHzYxtJuNnrM9AnNBosaooj6tM2Mm7rptxmdFWTi5Twfz",
  "key1": "66wdUJRadsNFtH6bJD3FhapWykk3KGvWTuA5Qhh7PtkE6mtT7NWcZGMn3i73rnC9gADRcM76d9ahys8d7j8SNmi2",
  "key2": "4VYsWwQJVrUHoXnqKBegTzSpnzWhVLxgAd9g9suDLwegL3N7qopuhWDe95egP7jc7NkDYo6i6kd9WMjtdeHfXCx4",
  "key3": "38JSxnkNJCW1XQvSjDem31YE5XT99VfrkVZnYAEq5dYYbPqqbpmcCdAfCtSkKrmiN5KU4d4Dft3ikvpyzuNouw2t",
  "key4": "25VrD3L7c3HyYJYh2yGZxZmZFuuYi3uxJaXu1mo8QZcPvJQaTaXn4KyF1JTz1hVot8ePfTdvrWxumtSwMuJcN1Mp",
  "key5": "2M5AZW7BD5j1rEitDgqc1To9dt44bHbKxZctDzLPXTKD1SGJ8UNfeBygYfUnMSof5Us2YMeZviHhikdFfh8Rq3VA",
  "key6": "5hj7vF2zRqmT5eXFwsuD5BVaTfZUQoar3t8deuX98qRVnjmf5akU3LV48inhZfLYDbccjr7f6gHva5oCvVmKUFwZ",
  "key7": "3a1DuU7v2MrH8Ceo8Xr2xrW1abMXXPppfanCg25yF94gqwucNvWnHXvnFoLtNNuLkVxnqZPoqHNx9CftbBG3d9uU",
  "key8": "3z9T69hKC5bzNTQ54hECUdgT56fDqaf2QgGVdUVRnonAnY2bXwafviALPYQcdYhzx1icXEVWTNCzSJAQ1b8udJJV",
  "key9": "3oxzcquyrnrtfbxTscM9Zncp61rpoUruoHLMmVz1ehJTLqQFz6FvM3142Z34ESAbSte7dNnug24CjQaMBo2DqfMD",
  "key10": "2nx8S94uaoVtKZZcHuY3wNUa2mkefVAdy9q3Y9ZfnmLP9pm1P73w7VXQFdhsqevKhXd8sVn9cHPrM9qp7LVMgzTU",
  "key11": "4vf5jXAPLiCTTK49f1svpEc1nJnkEuMKcb8jff2T1iiVwuoAafSQoQykMUt5xMhByJJJXmaUMzBjsg3LWZvWPufr",
  "key12": "7FeM142v4nKGUueL41vwzmnV4C2jDy1KHPMt4kejMVjKBdir9EBCCbsfgAFf2pNwoauXmxmXn499yBpCQEZ1tiB",
  "key13": "3JKerHixK1fWvWS4NeaWgdoGFw7PXvyGdhnxWmvRrUjfPCMtVTR2vaNYfLt6cwNop7dojhss42PzeuLgg6p4Fui3",
  "key14": "5gFoDK61RqrGkiSYsbLmSMFMAWGEosxpwcGZNjr1tVxzqPpjMqpvLAjvtiMxXEDXA2fDvjCZPJZxGLTc9Xu4aCCW",
  "key15": "44kBb9Sg51ZRNZfXhw1o1wEcTHRdbgneVPc73u57uXDSZ2HdXF1bpZYDVybkXW85XUXthH7pxbK5ZKGnB68iR5hA",
  "key16": "2HKDf3g7Y8ApZyDYvNSQYSFRKCCLaN7urmBbkEKAvnVthMhdpx18HwgzXuZudaPoMiXveRMragozgRmW4Zmv7BHC",
  "key17": "53vbv5AB1ndFfcxqqKZfnPA6e8Fxe2tZY5qfUR72UhjALayicUn1qZbGAHfEm2dS5kvUjjkThvh1Yj43VrUHkmjg",
  "key18": "2oyY563E9iNq8NtgNbnoxZG23o7P8cXeUpN9pjHN8QcTX31J9MrPXx213ZoJBPXrJ2h9pyTNcXgsnz7NnGPjGscc",
  "key19": "5GnMgfQn5wiExSr4smkZ55KDPNcfgLFiGQm8DLS5FdqRXGouhPTTHzK2YSYjLWEc5shcf9eC4h2485bjG3CuSnFg",
  "key20": "KibTr2k4hCx9d3Px8mi48xUZFyVxzTmR5BBV7PcDbW9wy6Rxe9fTegJ6mremeDQD2DgwEf3gM9ytVGpvGFTYZz4",
  "key21": "kDCHBH8QmP3L4meWUgNqXkH7rknoVmYTdzifi1YbM5LMJ2odJsq99kaEeRoH6wDUHTXm3dyeW3N57eeixdUxqeq",
  "key22": "2zj77pCbdM3CsQU7xKwBWwehNNdcKUGEf5TNnm363rXEo1NGL3FAMo3VQhnxUnqRCc569hErvGgpdaTRyrC8YC18",
  "key23": "3Coeny7eaWvBeEYzMBcMF18yyiUSbSeyeaUydSsxjWAjQpaj9EVdEfKXgxKbyNA7LJEnXXkewUAGvbvyFu8j77SQ",
  "key24": "4mjjR6iD9PafwxsjXYU4kgkFjUtNoiQARFXB61deDx7zBJLv9GhNKNngpLqeHEDxXkPkexdTHc8apnRy93LtfCt",
  "key25": "2A9uybdRAsHcxZ1Wy9GH72zfXgDDGsM5hK2xXb3Qs5P7Zh2wQEShFfxSYzitS9We6W6eMpuNgiHg89kKQ5AumbWF",
  "key26": "52NvpKM6vijxBSPZcfbmrVmwaGULHKwjMqJSbPNHoBTTJkLaPJLefXeo9Vj4f27BgHzmWHUHo9XMXSRMszSq3yQ5",
  "key27": "28qEHr7n2qqeLU6FtemXRijoo252rMrh7UacxcQBtboWnUdwVwCxuE1mSLkTXkbueq5m39z73GeRdZrypWYmdBEg"
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
