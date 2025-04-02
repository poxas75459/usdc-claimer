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
    "5sCGCruUHMwzkcEL8q6yvfgT8CAKboGbcqLSfFxgHeivAdJ2vjX8JP2EX6cpm65vR7zYsVvnHeKccXUDxuvb1S8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hGEykmavGYjwkT85VARqsjKmHtZU6x4JMbcaNDaS3PWffeM63ERWwTwhmsUtdJJkce9RSu5RxrkptfD4avFMwjv",
  "key1": "dZDXTTf22rkjXnFNe8zfVfpJv143kZ8EqY8wiuceVK7WZKiDX7oq7BvwPDdJbPDX28SXm2kMp92UqkuCu5KaSY8",
  "key2": "2kdms3ZwoUVWDDX8GatcV1inWEPi2cPV76MK3QtFKK5SGJ2KNcKmNPu4wQFXCEeJGqd9yjRqKJm6gmvVDTFoh4UZ",
  "key3": "4YQFzg9nvdEeJsXzwz6ipmqgEwurqUsG3jFbHYMt7jfYwQWWjJsHdna2dnbQ7gF9j8eBitARhfRbqFYnRd9K5zDx",
  "key4": "W6wiSekcfZ5j4P8gamXUNyL8TiN1EV5z5337AGy8LNgxik5eF1HpxoXV4Lj6bHzGRfJNni5rM4SzzX1ZD2b8GEK",
  "key5": "2GVKTnJsQfr7P5VSTeQSHMoPyr91JPMWqnBN11opkJ4YNPfxE5QaToBLG3Mf6QA7f4jF1sMrtZyoNgKq8LU8zrTV",
  "key6": "5TkZfxDGN7LW7dqw99dZyCuYEWk2nAj2nGHATA4hakika8tb4hZfbVw38UTd84egwTqUJeZCF1882bECupF8kgmH",
  "key7": "615VowHCazcAdS7jUuTWZfzDgXwwkCEE1HqGaUndEBQqkyozaSCSgFULXkhi5n4xKgUhAVNbzzqPxiFHUCoVKnix",
  "key8": "2SKdVvhKAhWmy2267QTuUYizJQbjX1SMPucq5NTthvBxK4hQTVmFdQuKMjkuBSXXE4AFnfrvNwzufHZBMS9aW1Hv",
  "key9": "TKALo84N2FuqiZRxHYMTnHmR48TgPGm2e6uoS4qMc7XdeVwQ2ptXqfDBbPm5sSTE7rxfNFjZqxbSj6UagovriBC",
  "key10": "3a8H6QRdwoV8wbDXxSGZmgEUCPjh3u5F9gikDc9h3fMnrRV8botf9K9jWCjRnm4RssQrMcYsfvVwB9DPpXoCBEMk",
  "key11": "2qUsffhMJRUpTwphnknaL24rq4bSwcD9vcJKdeU5cuKLQ2JLdakj6nP1tmZDgYCy67GjLfWs6QGvHFW2UBK8Lt7h",
  "key12": "5ZK7PzweD8DGZpfttxFbhWFBTjKfZWmKCCr6DpLdcd7gKxwf1NKZckdnpCatmUb8B5UMLtkKhKhwT8eoQ8DKiffc",
  "key13": "2vwJXyBPDtT1MV5wFr9WuK7XLBPuD6dNZvVmbrHZov7XvGP9kAw9P8y9pXsSUkP6Ku7WkoVy6LRwqMWrF5zqbdVV",
  "key14": "h5Soiopi51vP4xn7vAGbaYSiqbqgzn74ZR428ZrdZttapeixBGuy2U4bbt36pFj9A2c4uwbdEnnoTobGMNeNcyf",
  "key15": "knAuu5jhbGY5ExCBAVT1yvSpgjEVk5CnZY1ViGsZ2GZ9Ry1PVLEQr1wC8RaFJauacqdGe5R6Yjoq28jBkdfux6m",
  "key16": "2CazprAN1MCDgF324oYLHjAjPbG5XzCVLukT24KQhu3DyRaSvTH75f4aqjjknbMHPJqg9nCKHJhg47MS4XQnjkPA",
  "key17": "51izzicezhegmRF6RqamtSp9XWrqrm6DczSmj2TxN4aYhZi6TGbvBNsVgHZbS84sAqHmTCcnFvLcCvFLHQUEXywN",
  "key18": "9QYLPvaX4z6KPNm2FrUKj7ArhqtotyBPwvEhVGbxvv88DS2EK3xop19SmVtbjRGebU5vyJDU3wXtDFo2QejMTQJ",
  "key19": "4if3kMSS7XaxwXotUNXjLuXfMUCvkL8xyuGbMc1qi61Ehgigywr1QzKAF7SNCqBxfptxqA7RDURSmWpuWJFUqhZh",
  "key20": "dFettyUsMMKpokbifQmttwtFMUSu56AfLpHRX5Udj7mojagacrzPdfiTcvQnWkVt6a9ZieNswerEX4M9DTJgNst",
  "key21": "3FqfugMX8dV4APpCtLcShtbdXyLnYywvnjXADbnH8nAcoVrFoh4X5TaU1fAx7MHXw1T1omYmVKBT2efSL8nbz78g",
  "key22": "2nxZJdNYxWvzxbFKzXux5TM8ApfYnESqUewa4jvrtuiwoREU8n2r2AWAGb6kVr9aNF96VUEoQppDrV5SAFxLUb7s",
  "key23": "oAU5e7CnSjqu5ABUiqab6hwJ4rCpG4qhMCn9dkUUpm9DPws5oEVS9LkdX6GHwf1dPJ8tB5etzvXXxZCXB6nhRUR",
  "key24": "3qt3Z4zv5NnJxHFfkEFWk3kbCNcEfvn3ard9MALvXg9UfMEo4zJgWVpVxJFSMCKHNWXrexGdRpY9hzVmqPswx3B4",
  "key25": "39D65bfv765dnUkNy98SyoQWPSYYq2B4yrVcVESEJ3SMVyjeGBF3vagvLsrDT5urFspC5BT9txeNqKx2esoEqYhG",
  "key26": "2WnVW7xXw1zDTQ53r9MGkNQxz8hYizAXyoi86kQKY1BSc6Q2eN8kRUTs9HdBuNjkScnSufXkSAsDLUgPKLWYCrjk",
  "key27": "5MKAL4HgAN5PMVxVLUjs6ySvU1DUpGLcDimiJuVtH7bJKLigXjzBGkyVgVXLNJNC2KtdQpFQu4Vsn1awUndMJh6U"
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
