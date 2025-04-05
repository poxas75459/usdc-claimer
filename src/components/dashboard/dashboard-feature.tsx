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
    "6sCoRyn2au85YTVdc6NihnC2NHWKCCVPFAHyDqu7p59YKQrD7aTJSfrMi564QVgmRUoR6p9Pnb9zomAFdmbLWEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DpS4v7KeY84BAjQEZ5g3GHvf62tiE7NTerrzANrRY9FvDiymcBWahgKhu1vCZSk2hWRzLZ3BFwg4GesC1rtoiEH",
  "key1": "23JowV2JrbcUGgiGy4RQSKNjduehW5M6x1HozCVa1YwYrJ6qWABSTKMy62LeLBUxAZpXJmdqc6rnkZzrbZtYjQUc",
  "key2": "2GWj9Vyq9vZnBCCQzCeRcY68YwWReeP2FNv7P6aj73i2BtgrYYS9ifFJdoy334qiUw8iEqGtVJyj6ks3cZGE3LKb",
  "key3": "5qkFv1pvps8UtBDCLBJKrChpjniYRFZwCmAVi4QrLBssHwFjPiUrpJ6aUFskrNuG71HMABn9VVg8kBC1DS2kBWQY",
  "key4": "5GfKUMPSg6TMZBSUjcTHrL6Qx4Dvo2XBVZxDBNBXcaqntVZKDyfzYXwwLkD35USWe3A5yGadw8Gy9VfTBiC6DDtM",
  "key5": "5yQT4CUbXuAq5Eqcs8Gv9mgdbJ82emwqwiRiUkMeVfDr7KwZkX4NvArdZdS8FBd4ouqT761mh4Neu4qtThjBNdnA",
  "key6": "CwDGCvrCoUYf4kodSCQYqQQSaLjKsKgU7EPjffFbE2WxSPaFM8EU5z4PQVqgGfkLU4eZLo2sPiYGvq3XDxg555f",
  "key7": "4onSvhw5cvbeMC5XYDwP4JJV8t1keqnCuTki76Br5AmGBquxqoV88TW9RsjJaeNDvyG2pfLBz4saBH18f8J5aQXP",
  "key8": "w4GE8QHeJadcQzQhAhQt8o9C5j5ukvDNwuhm4mvvyukNev9ugPqdhAkdXcbfktFq563FwHMKzHzKZRXKUrYrKVV",
  "key9": "4ddKFodQGg7fkZNnVCeWfaKWDbXJ1hAzvHLvsAksDsdFmDSYLoPGYSb24pNvNQM8M1Fk49HgTJugBaoTNec7kFG3",
  "key10": "25XBRkxkBT28SJ8yy3dWYz3XgfvkFqoC2waGopPu7vsKSg43eUk1Hskf7xBZBchSMuCstqyMneAThXWEZdxWz6pi",
  "key11": "Gtzd2jiz53E5ccoqSffWShqSUQLGZr4hNqK3PhqSxXouZtxtHLuNWjv1mHAqwiEWffDfqGYZTUNap2r2hsv7JWm",
  "key12": "5PmZQKUTwE9UndhSbUP5fn8HfZZNEp8r4KAKZXeg1N6H7iEs7Ra6KRqsbJQBy8iNKgGNXmTkTLK1gorCBAxkqXSf",
  "key13": "4dEdYC5K6mwjJBiQzkNJv2VWCunx8H9RLphp1hePSMhNmTwA19Akv8PdDqq3i6geT12fN7wQsVnYujMRarJG9cGA",
  "key14": "5h9kxc7nxEwe6NzwP1RfnPV8eUaZpCa8CmtL2ppgjADMTYeTBCVQ3mj4EmCoYvYR4N18QQmLPw8xpUGEQWQ4ZCBm",
  "key15": "5DzD6pcTCukqmNejXCAkFC7H3bDU2VTfKZs8cu8xWyG3qMTWLvmr1EoguAHbWLbXBBZRCJpNkn5mUoFH9rDiUZt4",
  "key16": "3GyTBkPTkAUpX772gNvASwdoh272qkSDhVTnnyyCXT9XBBKvAYFvpjyx8bpz4C2UUVXbGQYxkGZMUd1NLxqjp4dB",
  "key17": "3MCNdvMo6q51TGHWg2tZh66EnCW7pv9o49xh3gPWidUdGLpofxnKNSzvZfg2PPTxMegE7xCA7dwFGRwW5iuLCuj3",
  "key18": "59xTnmELfWZpi1wp8mGqs3PAXfcCEhCVmbFwv9RxQzXWjWQ1souCKHu7tTMratn7S9yGUGmkdRZKHk2vUUQ8XzYo",
  "key19": "45NzZn6vkzUTJjdWNnH3CJnTS7hMipY7XvtkmoDvNmBWa4nUF4qXZeJTTPNvnKMDrE4XeTeaWGnt4esmXERw8ZkD",
  "key20": "23ZUfASJXy8ta3mJryTcLVF6aFsYkA8CaUE1YYMPAYym8A3kzs9nYpSURpJXpE9FG5NnX33gVMy9xRJEiJd8t3iD",
  "key21": "2HZVQiSx42Eva7FBum4tW5hakd3SWniiouq22Y5vxDKV7DQQCZazYq12TyVjprcENY6UTEVQHsCzVCsRw77qx5PV",
  "key22": "5s5w3i9ToHiL1Rws2HC6WUGZoCLdHmHbMy1mjqoHA42TrTVbqidLi81kccY2qchftgv3fCEwKC1cLPS82hBuTRad",
  "key23": "3FkjxVGYiMsGSe3MzcUR4AyC4xNa3i8eLCSrpwfHnuPvd1foLenrANtzZRbjLNAVCHnj7Xu1F6RmojhWwRNtDdPC",
  "key24": "1S821FxVHoR5tS2YdR5ZY5Xb7KP2kqvf61aoTd6n5hWyfid9tTHo6j2Bx5syg9ZJQfY4UQBM1sbfpaGJRacw72v",
  "key25": "5aLcVZweNz9UkeVtPfCWLNi1Pq2vJ9yrpvZHHbT6xM6BtKnXmssgJ7hwobAo4jzn5T62PC1Tu2KvZ3TWXxEdSwHj",
  "key26": "2yGgUCvxopL76bantqVmQZM4aYKwt5jMBxdDWVJ4xsEsMstvk2QufZ3hz2Uh3rUq4ZVpq4yYSuhRyRbXgVzspZ6G",
  "key27": "4pXCo3DgRumKDbHNDnM5nkdy2pcjCPVBTJgPhpudgGNwt4u2MvyeEUQp3qTVmRweupzMU38NqoU9FtcWCqsd1Wtr",
  "key28": "5J3ZcQMDHbqsSTjkz3F1mfhbAnqFeDf8jix6dXCvnnnsUJb4wSMr7RVspUhkDAEPbpHopAsT8wBHHqeRv91tGMs7",
  "key29": "5rgm8pq87vkqkh6QvDHr5KodMR7WJvVphd67273p6438o15gTUqoR3w1nxjg3FJVdVq1QMQAg1rKHtNYvvhgkGxA",
  "key30": "5VeUWYkwQTTbe4YiDhhKBXJeEV1BPBkggW4xHyAE87RCrKnWkyg21DdM8uuK84kQmtVsQ7TuRtpcTroKwJ6awwKS",
  "key31": "KJVQWDTGgPkCoxF3d7FbQm77GsnDJHgDuuyWNk1R4gx3DofRRC8vxGe9MCsTjnDDyWQ7jFKKVnopL5EhyCeqAJQ",
  "key32": "5XDGBfpMy73eecRDfGErtTYXwP7hD2e5MXejszMaVPkf5qfeqEXYcwMaXX46UCW49ymPkMJMUWnoyh4afXj8FnFG",
  "key33": "FoxvbPwMy16jYacNmcn2kxBRVMGG3SPXEj2gxrSCUJXgHWikgZA1a6Jc7QL1H2eiAf4UX3UsbZuScvcif7AgzsR",
  "key34": "jnbueHgpbTTHvrZg8aENU5dLQxAxB6XRSPUD7pQ8WjrpnkZEaStx2Pe91H7boYNbrxy9TAPzmEQpCBJAYbKyxad",
  "key35": "2SSTCAQbV977aBnAV2gND2khhsqJRmjha9GVhu654CH5dezkLS65C4Uq3kkK841fF8DYyNMGGr6iMVouWyFQARyr",
  "key36": "3C3wK2jFfXjxm1jRS8KY12wtnftuE43zAYPSEcWUrQZWynN9p2B9dvV4k8RNewyUWRje2Kv3EnHfeTEnH131FSfF",
  "key37": "8q9dwanuvksVTmn9weCfHkP9tjmjSqD5rB5wGKKRKNsVpHgHPdxukWUGBftXmgVsrn6cnkxyJi9NaM6FULWv87H",
  "key38": "FgaoZqtAEdhb4arRxrj31hM4DaNJuS4t73bTEA4DVsWAfj1nNP77NYGpYUmXk1bf3nyFYfENyUnQiVsEK3ZEwsW",
  "key39": "4dxuMZR2DWW5KSeY6aoN7qNZbPwv9zsfuhDUALzANz7b47J2cDdUeKftoCN2B7sy3n3u177KuorCLCKZp5K8CLnH",
  "key40": "4qRVqi8rpn6eacLDm1esmZ3ub3okMRgRruj8S4HsbUvpXnSoWgwMSAucRPksbb8RE9AVK6xXZYLxHoyf5pmVrEdC",
  "key41": "B9x4hbE9CmXswA6XJEbtwSotZQbk7m9vx4r5VCA6j8s7JueAeoJDYCKXPpZ8jqwRQnUoo1YGJy9uD2tX5cd7J4g",
  "key42": "4gQgcmVf1YnAN4heLJaX6kFxT8JiNeKQmZVtkHMJcDhxuKMBp56S7q99hNxQGCea8UpSdziC4SVDiphaHpnMa1PZ"
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
