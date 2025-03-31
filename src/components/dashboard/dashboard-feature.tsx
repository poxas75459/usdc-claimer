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
    "4hC987TN5ZQmKiwD2egoiLtfzF2bfJFTQP1ey3zigQXDjVDU75uKXxPjsPNdzbfvkSusEs4Fy6eEK3xivFokALpi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hukEhQv1P6dJN54cmkf14skNM3Pbr9sw81n4bWaYKoMKPBA9f8CHu9hFEBnpaz6dpnJMucqwhKop44YC48aGFac",
  "key1": "5cYHtvmQmLib627Qu6ZfJL9bcsDY2tyWknTCn7J3KUtrzng1rb7z422inDXPYXuGWptDb8RnHXPFmd5PmdNFoM9b",
  "key2": "JNhToshwJAcbPZAnPUAB7SEA9HRoSpjbMAdmcYLPG3T7fL7YBz1DN3ETRdAyZtSvTNe51TF98cTzUTYE3KNgcBD",
  "key3": "5Rz73U14uf1xoWLbQw4nUotXeb3pppkXtxq8UNDRK5Y8MQaqbqsq6Hh18d5tJYietLkBzpjsTi555orn4HGc4a8n",
  "key4": "2TA1u41DDQha5uMMNHQ4t76MXNbA4Y4GHWk2iyr875yCL9g1BWf1ar9JZVPHMLrUpqJh6pStLPVN7Ry7DbLT2xLH",
  "key5": "2pyti5p1q2LLFv7LaQo8dkUMRw64woNFMQvuNnEf8qzXD74mnRuwg61SCo73VYhQhUeiBJYf8UwW4h5GN6ZsnCqA",
  "key6": "5HXpCS57J3UDWdcoXJuHHPfCfBF5VmQWTrJQ2sU27fEqFxRKwM6o57F8HCB4WE4oWe5tG36Uh5vhLXoR1ebHs1mE",
  "key7": "63FMNxg71NTNSFKpRxnbS5owXpiq81CEKJCNhfBDWoa3C3tad6FnsZa8G7tKpv9KpCrwobNbZu4JH4jhgWYAHgWQ",
  "key8": "4ceuiAg9gTCFQR32mUwGDgcqLRHkYdjya7PUyueYAntryBvEeBBhyNqQB3SqJSuxb1xFr2MKFb6w5vUb8d8bvEnf",
  "key9": "2U5UdPvXPzqxe12GAkFqn2xsJqjkuyQNPQEqALEqPtAaZqUjhB7MgdNZdZrFE8uxRTREfeGN1D8vPCsg5oAtqaEt",
  "key10": "5RYf87FzKrkJZq9nGHzRtEzUtEuSj8UKsfsv8xGuoxmawe6XLAGVjpXKHjyn8RgxnUribDGvpYLuKwUVrfxaV7Sp",
  "key11": "U4APJXo78jdzAWNZyVxosoEECkCtU3TepnMokvgr4rdCXMasyHYpHWyLeQtNRyoZmveKez4ERnzGf9YnWRmhUhs",
  "key12": "5QTZsAu7wHBMK3jRxhNcEZfK48Q7Hu1UYdJvAp75c88StRVrcH99pAB6uf3kgbBcCZWt8VCUdBzdTCN9FnBcENjb",
  "key13": "4B44mYZ2GZz3FKTxdFSpwyoSttZCBgsXWiBgkrzn1K45Lk8nRWnHiQ5B4TW1zbjSmsLbH3uHowaeoBsfN5SB1YuY",
  "key14": "RTd2nWWtQegMhN4qFjjgxjaK2oradT7Ym9Yn2capmAFPqJFYU9HrjHrhxqZYYZzHZ59RNJns9YnLxwV46Nyea9E",
  "key15": "41ivgt76ucSumriT295qYdJpAFRYjqfUQPEwRbjoAagxJ6WxcBhUv6Gq7jy55U2MaKDkh1gB66ifKDfxF43PR6Ww",
  "key16": "5EsN4m7b5tU8ykHQiDwoBthUYqXhEYNN8hnwyqJXyJTseqyLgu26jH2EcbGh9Tbs8bKC1ZgxACbAqyFnzeQFBTMN",
  "key17": "2KYYW7Xwr5oPgR2i9hZDak7XbghUFPX3d4H8rc7dnHWLM1nDA5fN8rPuZL72xhRHikLzkteZSfspp7P5G7K9T3Qg",
  "key18": "2THP9yEbFfvtSpXksxZ8CZiKUP1uxkauxBuaAZJZeddedSsYjn3ZSbaKF9KpGEvjsqUrBi1oDW2yB3pihjrbdMfh",
  "key19": "3CBLjcyCtuL3PTUqoD2uubB4SRvSL8uwFATpTSeik1Qi7St7svXvU87BFYodHDqKy2uboEC8WFPvEBKgHt2Nqhjs",
  "key20": "j9S9zHRfmnaCCeqXw7YdR1mrEshwbJ6EQS4HsPqvamBPYtcfFiZYh2DrcfCJTdX9nAXdrKFPZmA6hyEHuk6zkMc",
  "key21": "4EJxLYn7ccKJZWFAdvTzjD18NuvPyLVpRuyZJ6krwmsZdgAg56qfZ9wbZ66Y2iPgNYQETMZr3vggG8kVNaDM1UHn",
  "key22": "64841rBjJk6qUzyNYrezmW4ssZatu2ahdrsMnFCtwDUw1QJ58y6AoyRa8AExq3MqW1XMkUtwb4By1hMx9aWVjtZm",
  "key23": "2tFriuL2HHZF58x2kEwNEX2n3ZiwcfPqoasLrun1ym7jZy4my8BzcnBVugtSgy93YbPqiibAxXHr7ve2sfd5mELa",
  "key24": "KXXALNCz2rxTywWdSK5h8qsTshe4921wH14KzTfavqRtRKwhAdCkRgKtoD3EGskXfBr6fuESfLeHKgo1et9azgf",
  "key25": "2NvQ33m36X9RnT84wbrZudT54n3pZtXJAzuyr7dJK3eUUa9xBqA6yqFSyiR5PxwHqP16pp3XqgXCiUeWJq9akPxK",
  "key26": "4ywNoYjoNKThgJyJ1X55Qm97exJc2EmLgjESDZhU9xJtcc7GuvfaJHkxZiYrbu2ekQqYDZgZAcEoBBoHxRrKDuLN",
  "key27": "zgqjgf8ypV16Pyy8TF11bmMGnDn2vamEpxWL99SDgAxn6b38GTMhaQPMEzwE3kxAR45v3NgXc7L7QHFzGzh9AXu",
  "key28": "5zA8zAr7Sx5hMDgsYw4EbhQiKzKHaZdCKGKETJwM84wbEqAZusc4Vk2JNTAAWPufQscBC2HmJUHCWGqrfXNz3koq",
  "key29": "4k3vxopzL5uYXTsmtCVtteMpewLpLwsM2HHiY3r2kGrgfuEMEyC6j1t7rjouWyYWWJ3g2fVpN9eXwb66J6zgZaNY",
  "key30": "3Bt9bhEZxf4aLZ9UkQw4yNq3M4P6osij3NKkJo7eyvN3KQwFQDyFP3cDBfkFy7Byd49mD7QJ5ifXXB2n7ZGWxd1V",
  "key31": "4PZjAxnqkDjkKvsUHPd8o8jgTFovFtpsyufkE5F5vBj3YzD9PEUaxUsDh5HwKFLxPkHJ9pqADqBwdfNW8UoYjHHz",
  "key32": "3HUhcQ8sCJZActdkf3uRTAWipK7QimnccPEkqHjmfZNDCE463NgcEecUKGzPLjYEiqjxHumFCZtXNQk5xdaTQQpu",
  "key33": "41mHjsLzEBkyghiQkY46dsX2YfrGphEfc9MzcEL26wJYanZVjov6XTCzdMVHjet9dpNiF1cWS2cyVVUhNdDG8uuK",
  "key34": "3CATWbZQjYGBVGjkW7sSB1dkfc7xZGZq7gSUCynPQ9gi6nHpfapLWmrbPChZziiv84TofQbjshd4aBibHk3awB4H",
  "key35": "52z5wcKCeoaCtWPw4n9mbFYdWMmFGWduP2Jrz7P6i5feyQxd4nmuYsd8cRWwRxhL9fcLuneGKLUc26EGSdRvwugx",
  "key36": "2ez24kiDrUbEypdfyWNNn33aYZQhuhkyXYrnZpTojPS7eLybKssjBiD6FeK4c5zGkLvWNudET4gwW3aYAKxVo4az",
  "key37": "4m9ttWFHYTzLzUUjpUd4BFuTBE6LNjTQdtEeko7A9jEpyxAvyVQuT8FuPAuJBwE4aqMeb8H1zdA4eHwJeMZzHx2E",
  "key38": "wGQJ7anepCjA7ZcWQ6TDcCSLfVe4i3rec9Dm7gMHPvswjjC8jxyHFhH7PABEztyVus1VrYY5gB8qVRsTQSehEZq",
  "key39": "23G9T7BHS4zBYm3wX9LGfP58opVcX3RuD3uZya2K9uZ7eCs5TRNjqWzhXYayMWS28sGCyKfMNyiRNwQmZ9VV5L8Y",
  "key40": "5ZbniwkK77HDPFCskPocZpdCukZYdCMQnhAGv5tnwyr3FkeicMAo986gG9YsxQNQsDy91GqRAYZsJmRtDY2sGc6Y",
  "key41": "4FVgbrCftjDpXphEHKexZRGEE4QMuGnVYcyjWhfPJ2nztUh7WC1KgbFvUCD1APtKoG1g1usvFeBo9G2KKg6EXnHz",
  "key42": "dP134BsvGsUZstT73ZeNDsULDqq4dze2BapHtFT1csYTBh1iteFcRFGZva5vRFefDWpJ63MPttzg6sH6cDDKnJY",
  "key43": "v7PEdxrwpPECUqxXqtzTw6HxnhkhjwU3P1a16NvaJLC4vD5mCHFKZT6W653fRytjSdM2KGFbhUybDpcnzNpSJZp",
  "key44": "4XEquLF732o2k6dwzzw5ZCdwHndgXUd2qJrhw4LCiyNUSLfp5CRLNGgULDebhK9wYmxNn4oVhCF8h2n33oasQ1wp",
  "key45": "5EHJpAb5AHbrzhTNvcHBrVNgnmUgC9asmnPNzxnTw4j6wnqBtdt1rNmsYC1mjHwyTFg2JMJR1wReHA3oNJfU6ADg",
  "key46": "62ViRgC4RY9x1bFHJnzwGdYMRVaZaPjtG4Wi93PoS9NYUU33TrpnbogL1Lt4tcY3ub4HwSeeYUj4Kv63h74PGUEb",
  "key47": "2EhdkSMUEsXgZKFfrWKJGZ43ZreQ3XTVKrrPxboXpwKSRYQUZ9GZX36U3F9cZGSpvncjtuRuG3VjMpJSUPegkGnG",
  "key48": "5Qve8RbjgCPnwBAX4TNhwpwRakSQve3Q2TNGCRkWVnDD6soWAtQmr8Xgpmfa1HieY6cYHuz9K2z5khRBVazEh86j",
  "key49": "3MFAVyaLUShNTxqRMkiMTtEbARCHNFYyQjEkT8AkoLKKpryGNNfrBLDaQcnRAQaxnutEtrXMzUNiRUvE9uqm4BHR"
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
