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
    "5mYwqQyXC21Xqu2x6t3gnurYPLGbxVNpsLuAvEDx3jGmvU3y98WUnwiB53sBewHZmcwSMAoWryyRS26rdesBmJ7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c1bBpeke6iMBD5sLYHqYBGmYkh6d5yvRmu6TKZaCKVyuoZPsQaWoocQZMYqvLX4tCQiaD2QzCMkVG7jnKBVdYrk",
  "key1": "4HqtrfMn7fdaNLG1HinBWpn6gRqfqiUBJGaErbvYg5KT7sdrnsj2YHRUWVEcQ9fmL6MJQ5v4M8m32BykWMufEW8G",
  "key2": "545NLdStrGLNUD7bh1RrcFmq8KbkuMZmVbgXYc51zDM9GPy5PKma7vQQwCrZbmxdG2xsQDMwACV21tg8RSjg3jsc",
  "key3": "2LEWaXy53M2DQTc7RXwLW9HyF1zi6fyJZBesR4J572J5KkcMXhZacFVkMuCHrmyK4TA5y5XHj6zeXLjnxJGx1yWY",
  "key4": "585ePJVnChfJA5uqU99WFbhx29hBqeehT4ws3RqmRBpmcwN5SPn8moTUdvsNea6LmqWzqdAk7NrgVBXRXDD9G6qb",
  "key5": "3oqviUpcpdkFKvy4qQT3K4294PJrMv2znFoGRcQMUkHpFW2gBtcGkox6sozC29Ps1HPnk29TbrqJFae5aGKeyQdS",
  "key6": "2A61ZmF9WazFT1fKuNg3ZJfvHKzAoAgzugwo9YcTQ5LvmmjKRL7BzdKZwhK3JcLcLoNDkQqBcxaDJHfBX442unXJ",
  "key7": "4wzHp9RXaQW2WE72P4nMoogoLd79W9pRwCW68sR47vpnKDNgCihqN8EJNHkyf2gATVUAg3ueiZ21ekQauEngLhit",
  "key8": "2wCv1HdBJ8yVgNidXRphCKXzvY9McD6cMaBRGfb3Xuh6JF3exMJWZ1D6hXCvfbLj2zBsu2uzAnGngpi6UXsskoy6",
  "key9": "2GuWeuUmC5xTvgzYhs1pcqoaCdUiPaCASJE5FNDdtZP5yFUjhVAjHwLQTAR5akeToqa6KFdviNLvDbS6QvLLiGVp",
  "key10": "34g9L1aysbgy5UFzuqjXUnkSq9rMwRVXqAtU6mot4XvjFbzwo5gqsaaG8pNG29r6DUFNB1gc5gghLcK5oLmWfKq7",
  "key11": "3yTwT3cmqsgBfT3S3x8sJ2e4C4NewEAb79UnsjP1S25jEsGwVrMhkeNGkxrELqWLqURJg9BF32e7W7TDbwPbM9gC",
  "key12": "9LWU4HuoroiPX3JRqfzRGVSVsEBxgqVF31Pk8qv8zkXPsKLgDPDMvvwh5ZPKCD6wuQoTsq2QSruB2Z15Ak9eQhH",
  "key13": "NWa1pqhmsgWkXyvZFUf3qR3DHW3fiCPV11m8Pnxa2A8DoQUrhQ6gpo7wNDFL6t9pLwXuprDjZE2uvMHv2FGt7rt",
  "key14": "GHFAg7FdkbfEdH9sV55fpQHbLLHnuWGCjba8PaPHxuBA5hxY4rR3SF7a9x9YUmUzVVo4ZgNjMSNe1RNBd4YBcsp",
  "key15": "axkqDNeXUkp7x41c21moFCkosiEMCY4HbPhksMcFihvWJPM5MN4gErmrbkkJmP1P3SdazsjR5ztkW4q4dREbkrq",
  "key16": "5nWmTS5EWYnxRQFh3hJiA7MH2jv3m2AEyNMewMGDVd6bJm99SRiYMSzmn6NSKa6c1owiRpzfjmfyYrYU2KCQsYNv",
  "key17": "4oLjeiuKpDNrd64DxzCCPcJR5bb1cGCWM9hgBHVjKJSbqhZDTnssBVHSmpJTQzGeksUaHnn3jxDrM28QW4gDGGEB",
  "key18": "43ZLJMX7yCvnDCiGd6e8rqKQ3z4wAs6ZgajUnWzsRz3yTAd7b3ZfdpAHpktMpd3M5GYDdheMCxg2a9QPa8KbUeXP",
  "key19": "59pcYpmmeNRHUoBDjbmeJSQQWzYrXh4p5eavpLMJB2GQcrZvTJaLWyF3tour4HU6g144wEUp7nco6szN3xbW2yZS",
  "key20": "58HXJG3yRdx5nqyJNbNFwc8HnXpvg11vUSZS9qQ6X3CkNYS3Fga9QUF9X87Bku2iTbo3cYpq95pFnqRxQeSipDYR",
  "key21": "5NsDdc8mZv7ncCZKayR58sRAyXg41guLy49xvpktAweZpkcfdoTXZc8cPZYfUYWaA1Sox7fLadtrpzk4pES1RSmX",
  "key22": "5yzfXqxTYRdcGFcFy1j1K2fyXUnhG6nFTYGrfpxgqH2ZgwUzdKsB3SEE63hgtPVvPSi5kGD34UYCCM2Zms3F53ca",
  "key23": "2eypAK5ZN4WzjP8xrAzj6MvsTEwJmbN3sTfbDs24gmcyY3j4QppwSqm69Vq2FSXbRtoTN8rmTNPUD2kh2cSPaSip",
  "key24": "5LmzBSEkAnqZcrVmAdtCh2H2dYGgekY8D2G8yYbGPQCwcoSjSntdHrM8AwgdLrTjZ7hb1HwBgveis3sfHWV3WKd4",
  "key25": "5kvwK3LM9dWfmUk4KuW5orwWGGRVE4LYY1FLAeKDhjUDWDLY1z9Ep5r44Wt9BX1EpfvcftoVzg4RkADaggqBXf8o",
  "key26": "s3rWg9D79zuMhxqQP8yeiYNDHxsnLNUQEy8b23Qya7mKVtV541pBGEFFkX72WH465JDW5iQcs2FWxgNNuPAaFi7",
  "key27": "5rSKhu6ZZGswwYad3FALKfAEyEBdy3EKytEJgfSb2TLo459unnatqdXzGk2unRFYy2dLWZjifmBgKSqEFc3M3snh",
  "key28": "cZLCrP7uxeJKrVZLdnypvcaPm9aQBY29r4qGQBwXTcV2h9kpcBPu4ZUrAUdp68ZVp3B3ZFDqW6w3MUwQPxDEhLy",
  "key29": "5nJAfWx11z9C3qxPG3oqoHyNqs3ZJuaPqPeip2TUjBVaLBxnD9nt7puM8MjR1g2AwL55FkwYzE9FYqYZ7VdcDbYd",
  "key30": "2NsWxjLxCv4SvUF7dVAPGLfLWS15f7ht6hFif9XKaWasRjs9n52PWhxxv4FNCjJxUt4ERVyDunHQctt7XjBWpSwP",
  "key31": "4sdGhm2Ga8Pcpv7Cx6tpvqBCmGU6pLLs5L3TZoaJteNXJ2mwaiDi4XkEaHkdMf3uwbzmk1DrsPWRU2p198ZWZVUf",
  "key32": "2L11FXUkaRZTByWnnoaVabwWKTKAinDw5SmXa3tAsxzUVsqJZAXxBMyX2TBvN5h4bYbScfHKWTYBAL3RX6M9RBRi",
  "key33": "2mSYujijqvBxoLPUNbHyqXeyKiRH4i1xb94sE1Uiq2rdHNWfdwTsmEiP5PPwSYrEjG8QGy2NVTS7u4kuTcr2Uc8k",
  "key34": "5PsnHybgjdhpruDxBgbCSaJ9kmo3er5STo24nbcWkcGuXZANb7HFZnTpgr53wsVS5zJs2ozs3o9d11EmQbHNULeB",
  "key35": "54i7Ma6Qwmvn68GPCxomUppkm1QPvYmo13fhwyc37RQutHsPucSxscu4vC3BdhSQrjgXQBA7S8ajzbk4FwBBbZkH",
  "key36": "3cibwM7TQkzcmHCmj1Qu9sMUeniALKUtuTfZp9rnPQEKEhdFqdNrWUFyewMHZzwXcqbtruJ6urfJ9Q8WqzeXEd1v"
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
