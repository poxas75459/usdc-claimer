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
    "5Auy8ywMqLmZT4iebCRa7Avj47FvHDrgpHfG6iZnkbRoLVkniemjm8FXS3vj7xz7dPY678R4FL3Mxg5KamZSzH3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54DafAhGHMZM4qeFhEtSmFWtgeHwcENoFx1XYokuqerJceXbhrDt2vGr9fEghbQWKoGiMg1NAbsux1AWNQAqnm7e",
  "key1": "2Cy8xJvmWrGhudYAa5XXdgY3oreykWLkDPgXofyQ9qywrzp41MUnA9GHiFJM1ycAmGGUzCuw6aqEaho9h9SrqD9E",
  "key2": "droqn2f8M3SRPgU4jm5spVzXPan2Qb69DVtxaVUnNRCr7pEymgxSpgAxqVaUs9smJd149LaYU2kMq9ab3jLZB8z",
  "key3": "64YMoTM1xozDi7hhAHtuH9xnivJXm6aaWGH4hw519JCjMrqwwxi53ogxmjK2avSLpuGrhCmTJknjp111mb3Mi3SM",
  "key4": "2D5yXVM7CjQni1rvMRrGjPYovohV6PWMz4c27fmnpV3gVzAdsJVd47TiBTZTD47pdxWZctWE3dtJ7nnWD79e89j4",
  "key5": "5HXDh3grHGJxeVWf7jqtfc8HQ2yugDxh8aJTEDcZcDgNHQT2WqRYGRQZRUDri3BY8JixjPqUVBswWHosvWpUQNNd",
  "key6": "hskCHducYEr2pt3XycTKfRRctC1TtqzDUnGKeQaERKCMbtWKBVVEacWVS64QLbkGBpDL6QT6wwnAGkkHeLaMspq",
  "key7": "3ACeKgNXbsaqH9i12HdELTPqEr47UMFRMvbTWJSMiV1mds8hYLobu8oCay812Q9P7SByezcqzoKjLgojQ35nDGzo",
  "key8": "3bXiBiHRBzqi3Y6CAgzVMBX5K5RTnt63JExAttkvE2PGUC6CP3RsnfR7QnVZbBn77GNfcJ3MkEuey3Su9tusTC3p",
  "key9": "62dot2XMAuGNwB2eSUiq2UodkWiXAYXch8nxuBCgfnTSkJGzCiaerrWkx3rU3tpxnu32YZbQRNAGwSkNC8t1h5Af",
  "key10": "LyvpKaA9tkAjn5eZk2NxLG2EDHKH9bG4xBtKMqSrcfaqH2WzesmdVtL3s8xveau5pfBvhKeabYHtRJ9wTvrGwCf",
  "key11": "5xrfBb5VfB3X25NTrmve2rtv8zscbVoSDHFbjbHmHykBJwSET1U31SYXUxaCVv6YAHwpJHQVu5oTopsk3uSP9FnJ",
  "key12": "2pk5xgNTv6iXQe2aXyipu7zNFsnW3zrNDtitQ4sd6N7eoCo3rdSSUSVwgj9bZvV8fnKA2SNzyRpDah1ZnCqZu42X",
  "key13": "58aL3yJ3cqG9btrApsf7ro9tfUAJEZ1uBanc7ZPj8Nxsof44ruHgjeDSuf7bcag4uTwq72qxNff9o11T8WMvKDyB",
  "key14": "5Pe42TW99ZP68XobYwF2jtfqs4bw5k5SFJiZD6wQFavpL9tfRpPH8bTAfqjwV7z5YQz5Z76b699daH6duUUxJwmR",
  "key15": "3U6cBqCbMcHjiAS8ENRVErh3fdoDDTiPifyKU2QqWRp281kbDo8ojT8kQsvMj8YqAFHUaZFjB4ptS4AHu5zkGPK4",
  "key16": "4hhvKqkWGambn8mGfEZjeKy9azAsBEWEuEa7xzjVsdsxbeQ6E7S5AuhEHxNTRAMatCoyZKAXz3xswr1BZDsSYmUW",
  "key17": "5kfvKUKH7tCYTYWh17uPmBatKHbVeJfScLoSmtFaTc8XrtXQjmd4ZLmmU1PqxKgNVyXmsK7hLvjVdEFgaoVya4y8",
  "key18": "4EXoceqkpMe5av8X5g9be6D7BcPVCaA4Qmc6u3dxmRvt21Dy1krFUH22rA2AtQWMheFXZRd1sRgTgVrm41xrae2e",
  "key19": "62XGSG2jg4hCNKmgAsczKpbyYZJvZ1YkS1sgHenmna68mZig1EZh5HNwgPuwfvdKXSQB3rWeHr2txhcFwnLpCpoV",
  "key20": "5cbA94Sa7jUpnKWDCFSawgWbwQMRRqVYz4kuV2yMCWoCX49eQtoCxSqpT7Q6jsiQ52zFdd12zC5ZU1McxKAijQvT",
  "key21": "4Mrz37pQAx2z3AWynzVWVpuehjms4WAX2is2uVTHCfZnYJUpY1ByY1exJ8K8JRuYD9nPLnUzx65EPcqdpvzQMb4m",
  "key22": "4XipUyKUaxWsJirQcsfb7LS4NyYDDC2ohxy7oLURuE1arxc4LSwec5oPTf1mpimawD6rjCgvw2nSjDqcyL34Gw3F",
  "key23": "2DEHjsFkPCe2f7BT9AfiUXbBtqhERiKEjsDTfxgZjWts59F35MgB6WmPf8CywEtkkvxpDCmJbsuzkGL9dzDnDqrM",
  "key24": "3soKGPzWwBfJHHyKXrNNki8agvHG36P7aPT25rnP3Fn6xCpD3SsWAqxBUdiChAsbh7pgqBKaydCxqUb8g4KnQdYM",
  "key25": "5ysow7NSVMzJbivsVp4CaHxjwyMBqXHYt4ZBzjvnyxCfAQRx4w84urD7yEFRUDzb2wLo7MavqravE4MvtXnqubT3",
  "key26": "2w9n8ujBDYMYMW8xUnW5mjf7eSyMUhcs7mEsmBApAxNTy24GrsZqTjJwffHN9j9HEnU1LD24bCLqLj2PPewBRQ5s",
  "key27": "2h7uPwe3hLSQYjyV9JUN4VM28a5rQ7BMXN1ZU6PLBuooWp34TWRRTZF3iABymbQcA8LpYmRizWtApRfuB6Uu6CV3",
  "key28": "4FMrnSJDtgRzZW3HJT8UHjZTyBuwLJ4YiiTng7GVRgAWzf5kNgc2jgYZdKdgNKQYUgB6H15Ytbwq1Y2UhvjvFiAb",
  "key29": "hLinjZYemerNSrKnu95uUR6QB6uWd9HvviWfzYpV6k94wnthWXQTJq9rqE3mJwQHAsztS68vGwd4hLx4t9NjDgV",
  "key30": "2gx4ga25ZXY6e6Vr7heGu9PkRdEsggHJGecjUuUBXWM4qx9tUrszuT1rDiYvXhZBw3HGsZpbDUf4PMPsWe26n7R4"
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
