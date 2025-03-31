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
    "akigG6hhR2avU8nkrDSYniEHW96NfVNTgYZQRbnE3BwL1pxeAJGkUJRvFjHQmsvFmJVRHrjAnLcC5ugzPqoNBb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rcm8SwhCcMQS6ZcRauJ9SzeH4LnbLXBnEgsZv6f3Kn7j4BxD6twyWAovccR1HknwS5sytodA8yuga8sE8mXCT5a",
  "key1": "48Sg5nZtemrPyctyaokZctxDK9Zy2Fmx53X8SEEsj4qJRdhjAoYwobWTAuHcC6RbYbYQkCEnMHCRJjVrNDjgM2mx",
  "key2": "4A9NppNG7UdmdEzo491Z6fNcNPh2fdkFeT3U3pxKT6ygNAcAN4zP7iq7oS33rJ4kwVxKAwr4SqfhirpNiUHHGNkr",
  "key3": "4zCUqe8ujbH94qf2NUoo11CdoBnQ6ATUBpJqGc63nSEhwEn26YkvY9PiRmbQFxehzbhRiaYfEW7aQEesyYV4C8Y7",
  "key4": "4FnGtStaT2Ki6QygZunvYcTZJSiLN4owv2uG8rgANXiCytCq27tVZ7wNcui6VQMANt9Urfh4nX2bDFGgxs3V3duN",
  "key5": "3z9oZmYFyU6v6UkaRnHAX48CbcFbQVgF6fDZ5X7vVmw3ysVYLy1CzfuJjHtW46PF2mNWB4yGu3y6KtpNHpMNx5ic",
  "key6": "21Mu9detDGsWPVYFay2rXUxCrDccuuY8riUuNgQoBFBJoWBxw1M5URurwUPZ5nZPGmEjz1GkcooYnNTWPoqhYZes",
  "key7": "2tZmWUnh7jFa8tXdKeSrBxMcPxNgCXFSiuEaQoQDBHphBSEy43J1rbh1TLPD92Lv9due65bc4AY6SPLsShtgG7b1",
  "key8": "cNGJSwutJNqfWnCshmBf8WBAaWuUgBjZwwVa62fdWstc72hVwQ1A3RdoHjArvNATthWYZvEkScq9J3x337QNyC4",
  "key9": "2kS6PwcV7SyTVwvH291aVZP9xMDJ1Gczp6ny8LJ5q88RbKTQ2RMw94yrAmk45Sb7gFoUNFJEhR3nQD1LK3NNvzcF",
  "key10": "4QPpBsWvsJw53VMtkbVghW9x4gUgTs7R8NkT4bS8XyHqBynsqPyrCAat5tVA8XDpqH9ANSnbZhKUV5t5kcLjMqm7",
  "key11": "5i2F8v2BhN2MSKxoQTTToHkXBT3U1NLMXd8NEPAkVgNq9u6ntbfZPeypDPPes9DuAdRoFjQoQba6pWB6E7XqMXf6",
  "key12": "gsGYeiSWcqqSdmuqaxmzp8Fn8Eenv95hgUXptvyX9vsoEhqYBJmWiJJAGyf4tVbQejyma1FgDtDWp7PHpttTYxo",
  "key13": "494bU4B9xo2tnZZzUqaWUciWPm7kMzJJS27guVcx59oPQZBaectTBxsA2gPfqUc2HtU14zBLxZKJfN6GVEsaZEv",
  "key14": "4Qwj4hEGRxuVr2Z1gv3Nqz6bSiyDZvnte6bWpMAiYbhiCbYbrjisCgbyMGsHGQ9sKSEkRRjdFv3R2ksFfP9Aps3W",
  "key15": "3VwRC7RXrh1PbY9ssLtTevGYZDpMBn9q1aDXXuntGZgTHqXvH9Ehs1YpRPLkrHaAqgQksmh23Ht5eCCwePWMLVHJ",
  "key16": "2vbTG5YnxWB1xYgN2QbAphntd5GTVLzAokFhUVtMryWg1nfADs7sRJEP7ynSEZPaoW6Q9RN4WmkVMMqDHfGg713",
  "key17": "3e2Lnn3dp3XNwLTZW5wHpFtMniXoW5Kqa1DGW2yVf67cLEBYNuhwFrC6mJkzfF536m2EMQxTcnDEXEAX1rjETpb1",
  "key18": "2kisZYFwuS1YuACqyasA65F76uQ7NQFwVP29nEx1w1ydXtaMwtrzdR5TF4eU42M49pSNTdV5myUjkr7ZqZTJxEZa",
  "key19": "5x6vne2LHWQXRCHBjf6wKRjqqoDw69HpnWMyLZTtBdsKpca19kKeMmUZJ26vEMR2EfbK2roRtwWbVwHCWz4kYN8H",
  "key20": "3S4sKYN1w2XA4C9hLeBjiJRT9we9KLHfpi2W5gAeqUmpmTohcLmrjiedq7SFDouHBCdiz1tuEh5epAGdCJrv65js",
  "key21": "2fzeWy7fmCLtUZBP8YhFGfJE24XaQKkjruQE3einV7Yebvqet9QA2BzA1Qf3L2DG38ugMQ2xLUq6FD7pZ2LJ1QVB",
  "key22": "2mTQiJBjLBxSduWaZXfRVFQmDeUXpaq4HdTrqmtXs4EGyKQtDG1tK1xqYkgNwzx3PDAdWZ7rn2wfWv7Cpr9AZoVA",
  "key23": "3Eppabibho5Eh467PMk12psm1T4oEYC62BRyFUPPhFcAyne3CaMydnYfDM7EQZ9PUX7rmvkFGp4An42wpVbw6m9b",
  "key24": "2rWaxx8CgWEHX195x3PUU4Lf5C38VgZQMp5uw1buenwnnZ16GUAju26TrzGC3C8KsQ6p7DB8juPeKDRxAJ4JRXNG",
  "key25": "5XxMaGe7fbcAxeeVcELGAou3zNHhTemQaf1DaZr2vGTqt3obWDRayYfnWk2rD3W48kTFrRYBxHdsmiXqwjZ4k8Yh",
  "key26": "2TXuxsRt5XZScUaRd2CinDic9CzBJbUs7oLTEHaNY62rhAxeHyQ53PZ67D5pZqEGiepzrTBD15pem58mCz5NMvFb"
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
