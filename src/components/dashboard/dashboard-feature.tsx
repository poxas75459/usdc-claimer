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
    "4hMbDFJftueWQm57ihw9NZri1he86fsSkpUvEsvBGM6hePNN3pycxWh5Lxesz4tStf8jinQ8Kkh1gdGNfpm9eKmz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PwNrCHnF8CXJBPMiLMQ4krfvtCkeQP6xoYn8K1u6uZCKvWDt1MH2njej1gbLZHVw6mZBDXZJUMdvDUe1g3Riamf",
  "key1": "5yQPZuLJT3RNZQH167LbWGJeqkc355p8SJQPYQHFWoahZpbQo9vV72epfHsqZT7H9tuPzSrFGZHSscAb7xgT1RQa",
  "key2": "42qhHFMCepB72CiCDEKq3Kj36RvCCzddPhb8W6PqDGe4c1mVfHunpRg6R2e9zhdHDKayYWDzzHC1iz3FG6W8hio9",
  "key3": "5D68n1mrrb57giwMHvYADtn6M6QxjpFTw8qmpsfwFio3aKFvFJtT7YTbaM9oTDQGHtVeuPULz29oKYaUz4x13Pe8",
  "key4": "5dhuZ7PHfBGFyS2vBJwhGyJpt9RJMdXV7Mz1DMoiZyNXdyfARkRHEMRJWo7qCi6ZSLEkNV22WTKgGJtkv8M9E5c3",
  "key5": "4TBXaE2QWa4kHizWdYATAo9zaLJhLvJAaRBwx46CBsmrwt39bEoNqAfosWjSct2stMVHSgcvRb5zMVabEfbH5k8",
  "key6": "224hKoMZ3PCQYquJmRgTPXKLf5PM9r8PkkeYazc2jtFo4KpmEMFSm1FKXiaxRsCd7yzriStAhaTN7KiEth3kcQAJ",
  "key7": "3wriZWrQccd4AJysjjQn9eqDCVfVgveJTb5Ww8zXhrfd2z3vq598wRiZPCjCM1tbmPkEHsqx3HxS5SKdpjjyFq9c",
  "key8": "4i7UckAPEducR8q9YoQNoyaGBXTM4U2ccKCFtj1jgqQPYa5E5myb1gz876vzxN2djtjruH6udDzgTpcqY3Thzhee",
  "key9": "3TMbhCM1gK5WLQVjqpvTJ582LcP4asqVp3bXJcN8Kz3abCT6UjQ5y844fUwbYS3AUpDdcmkKbsmQNmLo2U7XuJkm",
  "key10": "39wALSXDWrE7V3msJF9tktefs88fh4UML6JXquiF9hzazmxNWjfTeqgDJz2aDKgmR9S7WPSQ6RXV3KPvqmZ1sD8b",
  "key11": "3dufUaiYK93kN38FRnZLsRUmguC9hHqun1qkpwcBGNC9LZafSLtMHgy17kbfSyE1foD2NYNsGnUYuJqzGQW7oRGc",
  "key12": "46b51dKr91hPLs7uCZuH5vuSQZP35Zs1X48f2f6rHKDqxG5CAj8GNYVhmbhQ7cFezGb4qYDA54RPb1psioia8KKk",
  "key13": "5FoQqbrxsVGAmxNCE8e2JUJtv7LCMJHTWmevW5dpxvQ9RBSrgoxtYcumBhdAqNKhPzWBCCuogScMc9BXVZJRpYZ1",
  "key14": "3p5E5t3XoVDypBY3JeVZsfQQdSXRHrUdUmC7gdJQY3vPZdKrh26Df2B6HnMbUKoFtHRvHHZsbdQ2CUtAYiHfGLGd",
  "key15": "2zLpmgRGiL66WkiDagawvXnB4v9m4RSMvuiLQt35yJRr2BjczWLBn8pMwNMRJMZaUdpRvZcyYkUvX6SfKbSZJuEH",
  "key16": "LTwrHBHpuN6jfY5sF1h2PNc9tWts6iMx8TeswQVFjPuVbvGsR5skyKZPQCzSbDZh1oNx1Kctxx9cw2zyvjzwQDh",
  "key17": "49Zz7PV4admioK5AjktebNqMPVWL4swEob89ZwyegtGfRzjaxdEAvwCuqgH3ncyFFUJAEZoneaWBoMyYvnNRgay6",
  "key18": "2sgMj35uL5uCw77aW28uA74z4Kc9ey2TpUJhxKmnoJHSBXTVs2BgEYAyb4eexj26M2qYHuUrHXHD83VBpjPZRjM5",
  "key19": "S7K43WA3NGKSSDtG9nVPWRed4uqy1PVH2W31ApdhBRJaxNJqXBpCwXNzjdaiX5ws9bkvUS7NHpH5UZmGj48VwHu",
  "key20": "5joV9nH98uV43BV4FFqc7he47gk52y7JvFZkUBTUc3q6e73KBoH2QE47jXfmy2r9tR8t2yhK9diJhT7GX8HKBBGk",
  "key21": "8G4RaNUXXxgFYTNtXETvCSan4WqabMrUdXw9mUpApCmC13xamuf8LsoYEbcxEjayFuXMkVGYBBwaCaPHx4AKCZD",
  "key22": "5Pp435WHe27QPZ8TW3Yfc1z5s2n7RQ3exiqkyqNK1WRD4eZq7SUz2uBwtcnQRXTRwxzDVxbetjBLGwgxu2ZZYi3M",
  "key23": "o8fEkr6afRqsdRa4Vy2V7qZGHaBNHF3JQ6e9YNwiL3kxZsRsCGZeGHWbUHSuCiZCgoHPB3CjcmnrRQa7G2EDst1",
  "key24": "4SBXzhTdoDQu9LVPQPRW2D5re4v8tsWReSSD6f3hKGxhipuFXJw4PgXetzePThnbCU33En1eaNAmi2ZmXLmc81rn",
  "key25": "5C9EspVbnfS9rB4JCo2rdLE4nPg56x2A7oqgP7zCRnMTkYn9bL597jJMvWUPodDHujenp86id8YkSxF5DWQ6re4a",
  "key26": "55o9ZuLqDnqyZvRytrw8CTz8a1sfLunSpVgEHSfhrBGLWXVKEcbkgfmdBcHfCSx8oJCT5fy6SYwVvvmGMTSZftFQ",
  "key27": "3E5Uw1DjiMxZ1aEEQCU37MLK1btxheEutkK7GiWfFd4zq628xTbSJkVxUwuYPZdnscnbwsmSEQJsN4y86N7P2KTY",
  "key28": "3pDguvqwH9gVEMhBFF6iKjfi1oX6NW8bjsEZaEChcB6a2yR3oMoAAoZvy3DRTwyFdnFaVQRNd3jkWfPdyTnHwEV5",
  "key29": "pfQEqiawMzswxH2v3UkX6LsuQ2HTvQqZtqENp5FHw4EAQKBhaCHpFwABU6dKNsd297ATuvpfEtRcfCY9cpsjZ2V",
  "key30": "4psYmDZq71wwP2JUwLq98wyMV2JhMaSPrJYCqQVNJMbz9CNJHyM7gTePVsXd4niNiDZyisr1ZsayhY6QuqxvsxCf"
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
