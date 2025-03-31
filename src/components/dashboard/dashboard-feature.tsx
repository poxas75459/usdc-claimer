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
    "4aQJ4cWXdiEet2oRFqD3nzG5m1VRayd3W6NxMA6cuxegPD1pDqGa6XC8QqS8NV7VfogHZqUjdoS8acdZHaXHXyj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sTSikjFpPJRQZobuG5Eg71DVNURPNw7je3ousQt8kRaCWf6sHu9vjcGufv2QWehSofNRuvZwdpEiJFhNdwmkwov",
  "key1": "4GCvUqFpwQuyBCRVhjTfz5S3ScK2ypfJvSdiw3MhAPAx3X1DsyGvewmdV6iLHyWB8hx1QNzhmsCZHpNfovzYwFhh",
  "key2": "4WYdj95ooQEJu7jHCuprkiEvMU343uYTYNZFnHCsD4MkycY1vguMrK93RTiXGXwDHdQhbPJwZqSg9nDxRm9kZKrN",
  "key3": "3Xemdier5RwP6KE93NEQjSKRFoYKUFxwm6ARYnoBFV4wHJGd1Veyh9FSbMz3jaL2e7REQnvnffZCcZBns6MUhJtJ",
  "key4": "127xxytbLV1oQiaq6a7xXAUYodDTUK48ej6JgWk74xy7eYd8CbYDa2dd3L2jGwD62caCPJgGZjxy7K12VqwsaChQ",
  "key5": "57f18kkQFSwgoVT4ncGW4bwX1Mhp6Aw6Us44TKjasQnSVufAMrtxhb8zJ8XfwpCf5VtgWJUfrdVM5dgzw4pmgCr5",
  "key6": "2ej4qCcg5jcnEq8AWXnZtNQYjFtpMGKkqPbaQYYfWBysWGjzcDnBXpKqSWCCv9EATje55QPvA4YH4jTFQ9DLahHZ",
  "key7": "4rJFZo6bSpqVzPts1w6a1M2zrL9tpzfSYkNWqbS8raDZP33NKkjsjEvm5LUJDFHfcU85XhRFrRBeqoXTG8ckZKeK",
  "key8": "32VULagLoNrQNH5apnm5b8Z9ywGaGbSRmCD7sakuqGBuxvUAzJBs9prnfVHuM6AUQU76GGzoWyyBLSXh5At3gim3",
  "key9": "2jhYNH9uCS14hiNye8tN1zghvvzEPS3hXpwbBdiWQd7uongCghsPP9Ltd3QZYm76fA5qerjzVEwv8dp3EvBwuxEQ",
  "key10": "5PtVE67ZPzsajy3VCacGjkxC1pcoJ4pTqdip1DXL4ar1ewrKeuz7Kse6N9f5CnAFJzLtiT5tDWRsbCcAUMtBFRG5",
  "key11": "2U91p2csjL3MLv5TfSeeKPFgSD4uAaSozbFX4g2yRk2esLbefeUErVcQ8M5uZmdqEbmd6cPZ7BMGfvML7jFxJYYm",
  "key12": "57RR5MdgiHwKr4Dt5d2ejYwvSFxgpcpRg7DMEyBumk7eEB6BWXDr3vwLZGa5itpd8Td3FzJtqbZjwntBzZxpjqip",
  "key13": "DqxLPQjdM5fiPuBCbyFFyHwb2TvG1xFQkds3RerDsYoViyjU6PmSHNQP8p9dm8mxk8rR58yB4gTMKmYpysr7Unp",
  "key14": "5kMzkNBfGSMVcBNsckuZpc5q4eJow6YQeyE4DyT19pAWkGuupSXmnLRA6SeST3FiHRiLMHAVv6Ny2MXjE4W4V2S2",
  "key15": "mvQMWzqjsKtm9KmDcTSQq2UJx2pZPNoEHyJqLFyFssmuVTS1ezEaBXi4Wodob5JGjXobj1c9UPbS26GKZEwX2ot",
  "key16": "21FVuXt5pBpogyC7YvF1j6AbrFnafFDbCbBKTQz4kA7BMZGr3MNzErPVT4MmvvVjpxGLujrT5dWYL9Puuk6PrpkV",
  "key17": "EaAaxEn82X2rkGJNcu9sWSwX88Te8i6BTBVxJEr7zkvzKNtysQjqMvCqqgisjYcKs4nEiwyYZR1GK9BLVSS65DW",
  "key18": "5L6yeeQC4eP2iAKGEVJE61YV3HP1QapnFFeBzxQYMUxit3QbatmXQ4FD6USoxBdqty6pAxvagFh5S5jpYnKZsxfo",
  "key19": "2SNnZc6hqVt7xWucJJvaMYZQDxuG8DKYPP78gWZkDonqNYS9SHA5RS8wszpdvksDAhZsMiw2vEUBVpxvMNHsvtQV",
  "key20": "2sb4WtGCBfS32PJTLYGSWyi3pphVWP1nCjH3YJ7RvbcNCUUZsV9bCroVApCQZmoLdfVqkWjG5am3VXb7jJeMq7xW",
  "key21": "413QWS3Kgqa2csgs9AqhBCJz5ysd2g8MBHUqBWMwPgWnA4DxfbxS8TKMXfqCBDm5UvyBTL3iKvDzukiqDnE2rSjQ",
  "key22": "27ELeHzbwaDyzo2cpkWStjitVFYRDAEKHQfZbTpKWZfnqAnDZvpQt2xLiSFX7mSn9YhTqE7nj7jmBjEjyyb2sTU9",
  "key23": "TGwio82f4zh6L6FwkQC4mgZ8GR5wvtWU5qj7ixyC7qes4VcAjEmYmatghs7DJ6YgMBbyexNnVkzM5Ffjnj68xC7",
  "key24": "2k44YumkyhVGZZR2wmPKWv1FNwNzvNwyuwpu4YQjen1V7AeoktueggkAEW59Rxo7cMXNTKgC6dKoedoB1MjstL2r",
  "key25": "2etSUHkpraC8YArXU4wczdWJc1XmxPySdCXGVvgAafa5KAdz3GnhourGHM1hHrt9FtTWCFnCuVcQt5w1JBV5phtv",
  "key26": "3tPy8Cr8sVrgahNXEx5MNcfSW1kQviuQ7Y3QDMJdSm4FxiiAv7B58pZHWkPwaofDH7onrbTHfndnsV7VN8rV6wni",
  "key27": "Nqx186J6KHph4azsXTxqQrMyeTkFcpZCHMwxbvp6VsKozmkGbsPG1qF3ANfXctweDafHmFMm2sywxv7fwCHesdN",
  "key28": "2HFcNQr83p1rPj8GtbfXyK5TKnp4V4QUoYewqcEgmrS4EpnrUVFnzsEpPrkCXpvtsEESRFVYmig15uivuvuWasGo",
  "key29": "2raFZ81Gu9qRpR1U3W9LgjGX79yEhEpNHT8qiSm7wdCLzuhmMN8QmeQwp64WCJA19B6eiM82dRvoabWApcct5Bmd",
  "key30": "4McnawvvX2miLJnJnc9D21uLgen24m7QeEZ8jrWCQwp1KHbRyafDpJi7US7nRFKBeMHNo7nrXctnkVb9qttBgCGz",
  "key31": "3fDgcXANdBN4z7jM7YDWNkaYzsmUKuSkJJ8uoPfdsDYsy3BykAArLvJK81nEfWPoim6GSGnohLvs4nHB2ks9tsbr",
  "key32": "52i681SkVM4LL55YxU2baNk5BFXqSKoNF49LqGXpmfkDP97mH7uVZGMKqmqYD5PGBpe5eaNUiyfiMgjXWQCkD9fW",
  "key33": "wtFdx25oJMmm4qBZa6UWmRReLJdCqfEhXmwK6JBFJNjpcqLBH4wCYZkWfEv43394tWmMPQGq6NvSNjJTCoDVQaQ",
  "key34": "22C1u6JrYG52ccdei3jHdYNtH3mr7o5Jj1sZzDQtCwcUwvCtriXv1DR2SwGixRQhnEZm2bViuG5b5gY5WGwwfySE",
  "key35": "QK7CzC9wX3MeW8vmCqx7qGRgRQbF4V5rYqcPdjHxHhiWV55aCxE44qxf89urjqgzdHTW4J2JVfvxT9xDzVhSA9Z",
  "key36": "3Kv7tF1dsRQ6uXMa8fu2Rnso8k464hkKE196ePZuKyMxGNWkWiPnDf9t5AmqzzzDrJrfPJ296Mma6tzx5TAbkKhv",
  "key37": "AM7Hur2dSrJTMbBMptu1c6qixbYSjUXNfVWDEDCzRxZvFz54Zi4t27sfFu1b5MfPqvoKuFLMmzY8ENhv2gTMgPb",
  "key38": "2Sp8oUNDZxS1NCRZghfgNnyQkHNKytNfW1o8aYLJsNGrGB3CZ2ajtsBhDTLzcBDbAaUhrqtWNPbPQUtMULjGeMrX",
  "key39": "4KWByuMMvQmduNMArZfHEw7dLoUxmjNRARCBvpsbPukdHy7HX5nPTfWkuBVaKhtrngUhTG3jyEVv7ka6c6zcZCdV",
  "key40": "2Vd6enBgV8atj32TQwCXioFYw2jLWBdCnWu54xz561rioTWthNtZbaN9Tu8oC9AbrqAMAX6WTN8nNdRCUidzwgJN",
  "key41": "448Mjg6mMpLHXdjgJkrBafEPQVHwwpAfJVFRYjV2A7tQ8fVLTrnZSrQmxAkc3msbecWX1WjaDgVZmxR3XS6PN98n",
  "key42": "4dUaWRCz33jAHWfNxh1QbrXj4t8VumVqTXEYuqTwJ9JQ3r2s2Y6P8M5v1RSMRyc6h3zX4dXHBovvS1U9byWC5Kug",
  "key43": "4UKDwV2iw7YpppTw7ytNdabAbKSReMnJYrfnsVTrq1NkWKfW9uR6KxdBRzW6Bb25dE7DXknRFgZsSo5yQHnzVNBJ",
  "key44": "vNL9rf7ZcDDc5bSPRUah4jRt3ECCAijA4RwnU82iZ8erWZUL6aFo3YUSA1KnZDhBUv5Z7Pukc5QeDkHT18jYt6J",
  "key45": "4RMMarhUUWW65Z4bAwCiv55My67NcUTz5Hz89kUCWrMeLLXhJr8CSbn28cc7bHp23U6QAfAMPNQfzRQ7w7i5Etms",
  "key46": "3sexgYRE5sGoR6SXMq76n3AgAk4rNQiEX7xeRNNCFRC7iaJu1suEVKFDNSg7jpJBuEe8JjfRe2VaZuvgzQ7TacAx"
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
