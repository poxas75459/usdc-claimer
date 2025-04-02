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
    "5hba2ory9bSNHL9ZfwXvnMnry3it2N3Wcv3L9FnbeLUkrmWp3ZLX4sNkuv9hYWVRVyAGTS2Mb8yH56FjqYwz6u1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yj9ze8RGAXpNpv5FxBQ5YKtmg7pWfY8hfZNhmQfyYqV9fV9MyeBcHWptvh7ayLamDq4vvms9vjJJuXZa9gB9Nmr",
  "key1": "FGdGzVK1Fs8r7v9f2C2e1XRprGDQ5TnXNGqZ3KHVb85tGJPXABpPPY5LGNBKh7tPXy31z1nFmFtcfYTU1gyhVDA",
  "key2": "5Fy4TJrTArmKLFzKd4zde5wz1b42zCaDTzLD9mhhBCj45DKSv6DoTVMNySWt8oMTCTsjBTrh7NnYNWfSk8Wj9SjW",
  "key3": "3xYUbbiRDYmCQkmRLs1C9bMDdNns886GN8A2xRSY5Gqu9jeey5iM4PDerhzsPPmsdv8VqPR3mmffKKz3PrvFXokj",
  "key4": "4qmSTw4jwtwN9CpNCKWVTLz8bxEHbhni1PJPgTkt1ccexCJXUkJByNk3cyz9b5Mj1xDEXtF54WTFuEmNUnNSZpzH",
  "key5": "deQRy9CUwNkR6vzwLhCne8FHYr285MXBHANB7PkfBYQg5sz8yZLGp7uT46tQezstLNY4Eg79Pd4nUCvA3QH3G8t",
  "key6": "5jM9EJmocEKMY8nsaY9jQQns48AZWWF2wtGDwv2FLcAZuP7Xo2oeGyYoBTPrkSkJ3EKFZLPzAWVBdV5a2yKmWj2k",
  "key7": "tr524qXarjUraW757L3d47WLkStF43NdDz6HgHBScvTTymqAeqJgyxzhEnpeCvGEHwJLbRN7XcT6pKh21xzZAKd",
  "key8": "2AsBzt5aBR648jZ5MjhQnJHRjsKZ4Cwd18kknEb1uY3AkKjKJbWB3WxrYWSqYgmgpM4NXeCJMWcdPdGjTWxC696p",
  "key9": "5fd6krShZ5ffgNazMagRQ4vHkcBpT82h79gCHm8kNuJ58NrJrLHzieLXg86cxD4yuqWWgkudXm5dtHBiei5WewD3",
  "key10": "2SjKmNfKJ9kWaB6tAPZZALQXwCUn378UAZgzosTpN89idp5pMPkFopieWycorZbWXBZ4HQippbdZUBPTf3rYvYiS",
  "key11": "25wmF3QZfMB2N7o9NTUUQobZjhz86aTL8xqpZfgLeDeuDbUTR3dqX5gr1Y5phJGv3i9WyKyPKzvFXRrA8TwA2x27",
  "key12": "3mW4VWb1nKUBwRxXyXJZJJKsnKi7LLvwQAmspawHwoMR7tBAoBpNs1SxwETmoCEMvkFZDbpfbDg61WnhWSYMWwJg",
  "key13": "43uxsKW9Sv4cAZzbX4YqN7sRubSoGZRQiaEmhWebdrEZY9kxjsXhzZkytJ3MPQKDGX6KPJEE3ZeJ73BNSsNyfHor",
  "key14": "67qGqsDYRFXe22QUyRaRZWfFgBTxWfuULVy56QRLueKJfyysqAunbFk5JePvwQUrBi9rb8FgYaJCMQPXSNsmYBuQ",
  "key15": "2z3quJkzNAZisHHMKkYzK7z2Yki7SNGenMEBaeAoeaoJmmjHwiPVva5zYScsfWgStm3j7mdfPtgfT5AizZg6FyoQ",
  "key16": "3hcK2DiiEPLwBs26XWus9o6ge9WFrSpmSX7hGB3G2Cibp4Xv1ffunUSY3hQ7AKPRkRkqtQLHonRDe1QdaymuFaFK",
  "key17": "4UyHuhmCEd7G7ut7hvWs6JA5Mvr3LSYizjbBWTZDd2KynF61BAjnnuujFxP6SGrFQLAaguSNKLyraoVThqkF4iNp",
  "key18": "462nGE8nevd2Ys7HSCLGvxAeoWM4p6pCjxbSWFEGRDfzb6rMKohEpjShnsXhwY4MB4R7FqAGgu8hpmgcQKZhMwsU",
  "key19": "3VP7dhJ8q89FPhC5Vv45EE3865boy5UPaUg1FP9MijREnXuN4bP47L7vAZxxu2Uj9b1hx3Q3ZXAuVWhWCigmZDVR",
  "key20": "2kQwdoJNUQhEuruxUtfPg4X1yAh8rT89qPU7TebHGmHY7oZiG9Suhj3pm2QwMjC8oe9JdGG5krwYEjHa1rYxBtaJ",
  "key21": "4JAbxoRg2DyqwaQjDX3HK6ge5BvXL6fSbf2YgnqWvw5gHwAJGGMLVgtPyiR2cS3Uedn7ufYtccU5K1TPzeth3E1n",
  "key22": "y1dPWmZXrVCJJ4N89AT32MnagmF7TncSh5uxNagLPXhjMwP3jv98CpEsVszLPfshbhu56PuwJEpUrEX9MKTCzeS",
  "key23": "igx3UnKLKVnxcHjDVYHpksAjhcZUjGd987SUb1uf94tMH9qy7WEDJ7PYTyPawmaWVTftZZsr9BDebF3QwxDxU85",
  "key24": "3RnbdxNan6yLgX38ZShsQKTVbSRK9CSfP3mq1kVvmDAwP8EoqhaDKWSjmPmQYpss7JKa1ayPUDurYprJnXiGjsXg",
  "key25": "vrdjZS2GLc7KMM8wEKwmJyxLJ5yzxkwyQQR8LvFvxHD9MWFu6tTpszoBZtcZmz8PbFdM8E21wjGV3BPAsE1hsHA",
  "key26": "2SF5dZYw6rmpmXeDr6wuq4yEfhJx2gqKjk8AFV3XNEHM4HbwqtnftP6mFg3UjuHpbkfo7Etq4bzUumPBWNqQBz8n",
  "key27": "HLFfujYQjH7FHSoeKXnFqKTXBibHn1Bdf7gUceERJWpqCunGGEfFyVsYUg3p2adVNuMEKJcAyTMxAdyDqMdayYp",
  "key28": "ZJHnFF1hEt1zKshbRH6xzhuf4LGYgSaPfmo79ASELzULBkR8qTJFUF6yGAXSNJC5xN24zf9R4HhankXCw1nMPKU",
  "key29": "3KDXwqg9wbAS6VPdQMjQWpYiMXX5Gwt5LabTjPSv594pz13BqHUmte5SCz5HkKa77xkhHajWAr9E1vJKGU2K9Mnu",
  "key30": "2bpMtiRxXUUXNercQrutgR4SyytNTJqKxjo8gbJnexRSoaXcd2tC2qAsEkpGgW9QHydByeEAuu7aa4Nf77KpngGH",
  "key31": "3PgY6kZGxVXDxpXaePYuJnzSdk6BkUsACfJ8vZs2wp1C2rRDhPMSPbofJwzTM1wUbh7N5ieTyn2AeavqU2aoD37q",
  "key32": "2AgFjg6dccQYnnJBJU4m52kNnNsdrk6m3GuvqQ8KufiyiZmeYcbTPVMW6mLuerzWVyspM9mBqt2jbFVgPatH4CuK",
  "key33": "5vaLK85ocX9LBaL5A6C9oUfdawwFvpNy3AwK12ECk9qF5pfgWqoMrZ4qsWAAKEuyDN5QgE9gs2VfGgjhYJvVCuR1",
  "key34": "27jXDjUg7Sxx8ntJiU3H5e85HBmJ7p8wf2o7aVBy6XgzC6vHZUBuR42n5CwuMafyRPiJ7HarAC9iAUJUFkxeJNDg"
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
