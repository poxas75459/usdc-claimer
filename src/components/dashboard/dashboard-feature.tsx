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
    "ocGLEmLZcjJaNvwvHSgpjGet4aNRX2ZWCVmEvoi6zkq3JrBZ69vuFrUoAQ9GKmAm9zEXa8RjhPGY2PKvvBknE8V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41aRN9Y99YQ4Q9KoUPCyhve8Y61n9XUy11BugJjWyRg7tKCtLwv2kzqzCnjhxKfEjSTWeHZWqASwVXmHbu2jkMN3",
  "key1": "2ziKocjQSkNMU9G3ueUj25ZrxEeNm12hvRCehy3Wz8rFkNp6geLvBLFAdw3LCrXttadbeUFuVRXFthakiyxKWxN2",
  "key2": "CCFTWeR4mqnsFojrg21TBaq6BstzCxr2hitd6ZUPbCSWVXtP5XAzTeASr3VKTaj7C9WNzdcU8kEy4Epq2hYxvx6",
  "key3": "4H3dhYUXGypXUpnFnNzmRdvVvi1S3YE2ZHeRTSUVobhm25c4fHNDRsYyjzmvxKnFYjm6uS8qHEDUfY9od1rkWHSe",
  "key4": "5iQMbWAqfoPYeL64GKVEzWJRKK26mUnEJGUF5zM8v5oZUPJ735PUwqNPGq3UrCYWrwYq9qk1iXKpn8C52BVFGjyw",
  "key5": "2mmcL831WnqCZbSuUNAiEx9RKnDwzZLZ9Z5v44QtdUobR7wXbUUSwWXS5GYoc5px74eRfvzUsRhJYKCJQj2GFDsZ",
  "key6": "28vNoaV8UqM8o5chTrfmyEbijuGpbPWDbNtgySqpjnEmFJES1cTHtGVyN1MeLcD7CGyVqMhbS6pwgMgmkRzRRzKX",
  "key7": "4JAn4BAabxVzubDnfz6aHT81ZA99oEnAb7cbpHeMzM5vvLmdCSC8p7j3et6JEFPZSVCteuF4zap9ghr5MtBBEh3t",
  "key8": "4nDsXsCZDGXNMCKDoXjAsuqphbhE4PS2yP7enngN14UbnY1yhKtf7ahxetmp6RGTp1sDJJc4wuA3MVRNL9ppBgqG",
  "key9": "2QyFqkzD4jJ1jcb6RuKmanAexzABHqQpVrget2sNXUmLwwa6UWNTMpSjtyYWKXRM4cP8o4aHYJ36AS2n7zR1Pvii",
  "key10": "3sMRxs4SY8ukTSZeJ3jtufmvidh9vD5mTTAZrkZ5wcnCi8aU9JW3pr6WNqgVPi1cKyP8t4VuuAAXxot79SqiVVfr",
  "key11": "3iYzNzbJXx1A1FmRdmkz7Rfj4rR5nQbx8PzCaRrQnms3aDDaWzWfDuTypfds3G4kjM3VcUYbjD9CixrfL1aXR1dQ",
  "key12": "2stvdXgHu4ZAfLZA5AF8vHvYVtV4VthX6rbVrWRtnF4BE3TLLnTEcEqHWFnP12vtXZxHZpxC41ej2GFevd4ypsb7",
  "key13": "2bzg4AeXYQWJkWCM9krV54FjAKekqGmMmdBi2tE4SZhjFktsP2cZUA4ysHUxiFz5WpuTj9v88yHdGvK1PVe3vEvz",
  "key14": "2bKZhnnYTmBsjUkHnSieQKnH5BfeVK4HuHieNTNgvCGMxQewUKbMLA4YpM8mTncxQKAveMaxUh2ihYKCauYZ8JNN",
  "key15": "4ppwyya3VhewxToRGi51tXiXxt68tF9QbL8uPs6mvfdpDLEMzSMQqgbaXT4BbE6MNmZ7xaYS8xDztiEabjQk7Cq9",
  "key16": "3W4BEn2eEypCtQ6Fg6vEt7KhmoiHCj5NCu8iSho5NcXWi5tAcERWZYtaXR6beyQj2BK3jk26StKgEgxrcLN8wJvr",
  "key17": "2NkiJwASMGvd5mX7LAVWAdfMDAsY8DvXA9U2A11Jt7oayLzNMq59Jkfq8UJ8pvGAYV1oDtnByTitZ8EG4s8UJjGm",
  "key18": "SPK3ibk8VF2znT3uA3tCtePWrCYb7Z6dYLreR6Uf916UZqnkMynxggm2xSMidqTVM6mX1CGgKs9Qkpfaez3hA6A",
  "key19": "5ZWxRXDnSyVZrb6EZ9jQ9oY2rn8ib2q4u4ww8idgh36g1BSBcbgY6XnQHmThtWxPZCWAtuhinu2ktpHWdnVgzgvA",
  "key20": "s36nn8KCUqdRmrhNKSSYzNDao1aDG24ap47FTn7myQCvYvkbwxK4aLvM5rmNp9DF1tLLnNXu2nhbwzYqjG21zRC",
  "key21": "3okfc374R1QYmYtTFXqjkAvTCrfWkrxBWybZCG96K4yAtL6FZ6X1kK7EfLRFfqrVV814fDGafSqeYBpP8c1ZXFBM",
  "key22": "3fx1fCsjpjPGFwKXSDwXf3ehwgaA9NwFGvDpwkpA7TUkPvz7VwiQojdz8ZFREdSuRgzGzG5pXCTk8ayRDPA14nv4",
  "key23": "sVn5WjD2rX4J9yYtGskErAgK2vqxUzSBNKyWhFPcRwTNdRjL9DNZBd5VdNpy14wWWP6MWvxWnJzg81zywrndiab",
  "key24": "5jY4tNv8ab7yYapFyR4kMdSSGBffSD4VsBsZHrs5PgoBDGDBxAuQhq2ojh825rAUyk1tpsUKfSzwA4LfmV4pzfRG",
  "key25": "sTRbwKyxZRkmRdn6tQ8JkULd96dxHUhJZMATRowDoqVUnbxxawtRYft8TocJiaxxrZBP9zm3kGbUCu6YPx5cj98",
  "key26": "2fFpSdDQTrain1HZAyPfLs4QjZJ8NRAu2MKCQSUM3WRTFtazewSPV6zgngrhWpc7udoR9f4CxAVAZTnLfjWEHonY",
  "key27": "4SD3JijSGf4jfk4CYJqVckafrgyJqAtgMTp3MYdeqot1cHYtFFwsXQ7ePcd8kvGcxphn9VPRHsfyQhAiM5nu1HAY",
  "key28": "2QvkzxNzZfjpRsnw3MzQoiTZsSYEVukaj4LTBsSeZdijQKEBFhRPAAXxk8GwoBgqLLZ7A8V2WixC5k86gsLeNijV",
  "key29": "2hxeLjZMUohbkXc36z4jzHY2kjryna5X4ULv7WCc1QKL5Tjghra7gpYjUzQBYekkXZZdA2e7euTDamLD5dhy3wWu",
  "key30": "4qmfaAcbpoF5oBjkRFKPk5EJvh6DvYK6XXeaH79FJq2w9i8B3NABpy27y41eyrvy3pvCHS1YL166aJiE1XS2m4TC",
  "key31": "53r1GpgRF46FyjadCVhK9T8CeurkSYAesT7hvAP9pmrLKsEgKPzDxcu258znhyT8EMvfs1JdesUPnWYFc15C3NxG",
  "key32": "2W8wT9zDdkL5MDtHXcFn9Puz9qrTC1FzecJPFWKnVUyoRN5jLL8ETFUcqZdZjY8PormjSdiGD24jQgJeUDcGqmew",
  "key33": "ck6nffdPFDg5z5MVnoCkfhqR82DkjgkwCU6kLgpMdS8qUxP8HKfU2NWjX165VG7VV379jzk9szDmYNbZ2GvURLs"
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
