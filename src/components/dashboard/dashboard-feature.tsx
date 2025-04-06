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
    "5TsbZUsYYH7piBso3zayqS1Jiw14MVXJiu2xuniHTWthgREbGMyncZdeJNL7GqQu9FMn5SnJmhpz9rAMTwb5Rbgg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gtU4jh2HB9rpashRjr8ZH5gJqgV6UCLx3NGjLEeYwyzXjxBeJtpSmRyDFdQWTHG49vV7ZTsJgCzhNrEXd7c6QTG",
  "key1": "faMMm3Fg6PwH6qEvbvzLhAxDgdZ9yKsEnngNXdwhWwWXgyogv1zVdWHr8DErZsJEy2GkK8fhP9dD669hjoFZuxS",
  "key2": "4ZT784NvjmaBFk6kVYUasnkdYWq1TSa5En25qw4vjqPUfmrA73mS1xoxgjsTUPrSDGgypLkMd5UiDLbqUzVkMfxB",
  "key3": "3igkgqJXXRZVaKMvxCewqMJQ4v14L7iQfE1qDwjJq9XAeN5q7Aw1RNUeQqzViSG7i4AUQQskRE197TB8SQNJMH2y",
  "key4": "3Wv7dX9aGxid3PHFefPEd9nxwBd9BFyrBY2qd71nxtPzkzqzbK7psg6S5EsKqhxi86ZqdLqqxq7PUh4M9niWRZj5",
  "key5": "H1L5TcLAh1SABvZTgcCy2vjoYrjXaE9TH2sNtksEnkmgiitHRDwUuNbJTunL8AvTj54zgpNDLjJtxk54mum7Q54",
  "key6": "2Ci5nV5gJNwiY2U6mTHPLaTqhgt6wC75B9f9DQQpsF5RKxchE5GiagBxm5k8kEb7AfuaqNfgAvBZ6m1pwvwJbekW",
  "key7": "9nkCNRH33CtkHRbZqXgPUkokmrR5zqyEawuuwGUD8646kwAeqqVdu4HeBZZ7BZwHtx9y9MudSGKNwg11bRTuW5Z",
  "key8": "eHrP69QeDb9y8PyWrmHqP5GSf2DVMmjQyr9T55kA2mLXmNBs3fNcQt3sCcWXWEMkjyAUYwKdCbDbx2kz8sKVCrz",
  "key9": "3D19Xu3hrNF7Tb3hJDJRWQ3wQZuHMaSnwWtYMZuQYWuh5x35R19qp2C1nK31VoirpGrmkhDovcgQUd2HQ13SeVr7",
  "key10": "5ScXiyzcdNsgx7xrVNR6tpkGkM8YoEgax4FAMop1Uv1HNsqEedm62TJnQwgwLpshQt8NhK19euKTnjGrBvK4ZGiJ",
  "key11": "3GGqjZ82cqzq1iF4XYEWvCKAvDqsU6t7W8YcQaYn1rRGpeAga81Jhs8Zg5uuxAS6CqiuCcCs7xrGYZYhowDpKUwr",
  "key12": "HitqovNv4zzRGBVMY6VQ4VqkjC77haHgyDUA7izmXLFrg9AUZHHSZr85wRySXT1b1JDdJXn6ZxnzYdGbPaGmGFT",
  "key13": "TT7P6jnAM1t8gT88Q2GB5vSXUvsJQtxvKoeyynGd2B4ctmCLigWMaXCrsahx2FjDTZ2NfJaLEJaMWxHusTV8i7e",
  "key14": "7AVUCETRs1Eu9VJt4f5rsUoWxKnChosf4kikjsScEbZV5m3AoXMWTnNe7ttnpugFgP26EmwKkD1UwTmuRzgNAxz",
  "key15": "5C1W8VTgNNkMY7vyMBs29KE4UNN3wE5npPPQemwUB41EhSfDguG7aJQvtCnPCPqL9jAY9kDVdsqEuTnxdY2e8mKy",
  "key16": "RTGt6vA4HVNj5N6gZGrr67jsUajas59uLspkwVkKPSEyrpoHBeFe4axDuGHmQReQL9eH1Swe6X7dP79W4ec94BM",
  "key17": "33ir9xzZa9q1XKD2rfAmwyuZHU1A4CqGHPLnN9csTYqVBj5zioyxXrabB69kdayYdbAPq5vTx9eJeGfs1hPjdtv5",
  "key18": "2qgxqE1SZQPQ7WovnoGqHBsQEzD4XWPtp4tiAH1Sii7FuZacB7auK8rM1EjQuWPfGgzJSjot5dNwWkw49qwc32R6",
  "key19": "gkphA5kZYsVvAtjXKQBokUwVSATnVq2u6DbZ5fxBVpVE2HHpP7Rb51mqaus7t9X8kG8319vNmDPE8GH1GTHJLJn",
  "key20": "5s7NnKtePf5Y76qdEnqKdM4exsE4UiiusnfoLYdtxQbV6bDuCvfEn4uD1pzpE9yra8PufQbWjS2ARvgR7mM3nZbD",
  "key21": "4ptJyGKdhFZ97HQEsGHoYFmkSmsg758PARyw3MrP1gZTw1XNunz5EGQWs5AG8L6PBncTJ5XDzAQiyecKRJhQng3U",
  "key22": "4NDo8p1wGL5KEevKX3DgoTwfM4FMngLoXQZs17yN92fPqBLDatLRUbM5qRBJoqJBuM7BQxMxg3V1EfZpqhP5wNof",
  "key23": "4QW9SEUPMjDWw8UniL8vMSPQaBFd4dRHUiFNdfRxuhXXcTNgXp9Kmr6jmnVuWPSRUo9cLNJ6EQksaTvM5sJ1T5kC",
  "key24": "QxMKLxsdQ54jzGQc8FxzBs5s9RsJ3DDPYxgFewsDezuYgZ9AUMJKCTbSFFfQe9uCzPQmoXv84K5UwJimDd5zJJL",
  "key25": "2QihCHHYGW75kGUxu235tcJEuDFLKNtsAARvB5x7qrcXoEnKZwcyez9XgBUXVpAhPvUkJvhBQcyCxqc1UN5uQiYK",
  "key26": "29wuPbbFZ4cLihJ2iYefqkii6WvugZhwKpmoq6oCwzujaSsABiebtf98GZT7MkfUYrBc8s8HvVPFMn3S4myRzDH4",
  "key27": "cnmyEefeXJvVoA7vCBcDcVaHqMy7EYZEEnYXH6Hk9iGPprYY8pvg58gPke83iR8r9zeq736SWLsvfScDXegumhz",
  "key28": "2nrVbH5mmhJYEogPi2sJHSohwbdsmXuNffPVewbJ4n9GpadFJ3xPfbRVjffwHeQxqFNkakTm44JgdNW2wfp3BraV",
  "key29": "SpJ23BB6h91kjfiigh5scryFVbSfY8NxMRpzggkQvpVow4AvRKbBwUzcYf12jjyZfMTANzXC41EQZvBikbuP39s",
  "key30": "3MQ6z7GRmYwBQUGVYAHsLA4DPyP3DWSPKLwLFCVMFtz2to5MWFvfHUQPoWm7GVhkMApx8vfzTBpYS9umfeTQkidP",
  "key31": "3Pwb5iGLaWNeaTYukA1Z5YxaGKPiKf3VmnhssDMerL716bDLzMeQYs2DKnxGQUqYKbmsUZxysaSwXSqUq7Awy6Ss",
  "key32": "3vSd5zQ2L9fzzvgH8BNabq1eZkRwKB6uK2Jgqt2PsbBBWgGaYgJYC64P5UyjQmxjyRTRkMXxVKMUd8Q3fWDUKX2T",
  "key33": "2vurfW3gzgoiMaYJZSHQD9W6DL8TemD41J19iA7L4VNhh4c2rsBnk2LddKvqv2ocTTi4JVSw6M1QKjmWxnEyQUia",
  "key34": "5YF7ixc7A1JYm64srmAQt8wZEmR8dEVmLVHybEPaw1Z7qujNRSC7pvP713KwHHswDBePCwCZABJUf9c82e9N1Jw7",
  "key35": "3gbJ8JAib1zyN9uKTaMmk8o2bUCR3bv5GtoUPk2p98RfRX4T2Fx7ztYDCAP1Dgn7SpJmw7CqwYcfDQ5aqQNqfANM",
  "key36": "2N8Z5aAqMs81giKctg2QDvN4EwaYh9FuBGsM2Zc3VsbEc7hxMWx1wHmrnUwdHVVyEwQVEMhBb71CfpoUnLnmy9Tp"
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
