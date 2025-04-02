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
    "XWmHJzhfa7gcV1kkegocBGDoETxwYWt86Y46DiJmmMpJgQkfVn5zuKdgrkU4vXiJvmy9314NWKUAkgu7DjzipR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LpobHW7qmVncQs7BvjCTHFvZTVMb5J7dEhx5ht3BKLDRuxzQVGSTApmBQewGtPUbkWpoDCRkeyXcKjAvRshUNup",
  "key1": "XyCFeMujMgQZXaEYs8N5YBuTWwBmRRDUtuM8ukFmUQugKETNCYLubcmrYr93KkzuhprnNp6Wq7UobV5RDraFsgu",
  "key2": "AQ7MaJE3JHXdBRKUJGcxj4cTEkTwMtd1U7prJXcwNSRFJK8DtfzSFuAzUkjPMzu1VEdsWfQNtGvvY1boKSG2cyp",
  "key3": "5GzWEeBkf4FDjntNa9hobSs63PwGr4Nqeprxi3Cwxa2kGbY1Q69QgWGFU6NDEqsJkTWHbAxiPQ8uk4sG1RbNB1vX",
  "key4": "5zWXndZwg3k51yUv3JbU9MjQAtPERZzGk5CMpm26CDFFqb2947RRbbK8XbcugUkhxx4FBfXVPm7ifRFLZKW2GWeE",
  "key5": "36Dm2fd4wfY4BSE2PA4pKcD1ZyxrfNcdkpSPxRBmT9bD61rU9TLwVQdoDgHPmP57YzJnffENRatcfCUesFcqTJSb",
  "key6": "cURDBVoHpi7D238EeGi1UNognAVcfjLfQVNAMKQmw1mE7KW69AjmhWF3LWXLnrU2ymp3X3GmnjckJJuLMYAs5ZG",
  "key7": "399ZJY6SEexEriWDPSTmCxkXunATNxvNT6DLwngU1k1kG2hhMEKw2xyhf6Z6U2JHDCN2cgiN1nLmfWv5HcomHKn",
  "key8": "4DLQsqfz91p6EsPLjq4ADesf3963oZ5STBRXf9YwYY35uZMumHswTugXEeVAhCTkcdpYNx6rcrQtDBpoQHJm6D71",
  "key9": "4jBcVCkQM8yYnMKCEsT65Dvseo2LBHLNG6WuSFB8qnme3nwaP8t24muwBjbRE8fApHvsZKBgnZqGYiQyZEYV7PFP",
  "key10": "UKm6VHv5tKUKnXQUXEtvqCHvcQAkzSVPUkowwLpwTTB5cWRqPuuCR3f1wCNzWiJDRVSLpNVvFs8nf5h9wBAWiUP",
  "key11": "42nx3FfUZkiwiwTqt94MkfGdb4tTkYzn5h7uwkT4SnLLkGRT17n9fHGfttxytLTsbVWe27GUKvyH9iLp47fqMPhL",
  "key12": "2RGfCjxNMP8c1JWprTdxxTM2uoGn8ELYt63hxSf781d6Fg2qw7YDAd7gGWFjmeFuJsBFUTMYgeUiNWagibRYRQqZ",
  "key13": "RQeZTm6JP3qDiS6E1fc9wWkv3vMoqsGxcVoD2K6EULK5sTJimL37HLW7c5XgTjkuXjWm6xiJ724x6YdKxDqCXGa",
  "key14": "uqD9CwDJ5mRQkjqqNhgPSSBJFHgMHUFzhDk4mDacHvP35bHChoZvrT4ZtVWn7nt7XfvEvhTXany8EvQZb2z6Uzi",
  "key15": "2bnGjXyRXvx8mWzEhg3ozHJGbX2qb11SiErv1Rz2niVFXhVfcBBfNX7L9zd2hkN6CeEhrvPzt6jY6LYDbjBxyLVU",
  "key16": "37jMz4UaRJ1VSoh836b8StRezKFdDn1qTUFQe45ouUwUBoukfWouVatv3a6G93H3MqzTk3m4VWVanXmVgUZb7WsE",
  "key17": "4YHh9rcsbtizx4u8XVUhN8y9AipYnJK2R7ATD9iCb9deexLiyotw3kjYtFdecd6h93C2AzStQVbHgGYoRunRsoHL",
  "key18": "1NM6adopWvKuXha6JRha4TetHYicEuovqn8pomxG5dfZpSRpmJwRAPqjnrwjwy6Voivx7XZrBogfR3F7qcynTdr",
  "key19": "Cx8JsEtWhhFy16XWJDUiPQdnR5seWUoujEWCtN7ok3Km9Mv7WqRyvkERNYBA8PmWwuHN7b1TBfoKVAxc4yypycd",
  "key20": "5ZAs1es8Nhcm1ZtupCXKLqhzq2YFsTzDbv1NQo1KaW4QAvXxf4dqNn6QkAtKTB1bz9gUsXuLUfkfGGqNDeAj8yqE",
  "key21": "4VP9ietVtM9y7w5XVeMkeTPUHghsfJQn4c1J6QDTQci2DqdVJGRqj1pFyePnmyYLRkxK48mYLNYJEvpFPRvKNvVB",
  "key22": "KKKtLei8n5v8i9WvrJCLT2pj4XP9Jk4W1F43ppyiydEuWrDZkxwYXK8p4ZZDGqvS32GJoozQ1Cdxz7URfYzkv44",
  "key23": "dXQdoWtkUt36rzAuYkVEng61iMXkWMPdohYwwM4fkkHd9hRRNimveiRRc58wDCruSyGYpMwLuLnKSxT1GCKTK5H",
  "key24": "4hdSzamLxTow6bHrwtyU8JYJ4yjp6YFJjUNmVXmfrFfJuFZbftF236m8bEhkg9eLMy3sSnQtfjUJTSTcuAeoRY9v",
  "key25": "4pn5LTotAbEkwTzmbDLWmzs6mQwgws1PwT1bufsBDwo8UF2Hpx6AyGqSNRGhuVCtqJQYdABcLkZqw2vq3QtQ7egj",
  "key26": "2taM91G2TqJ44yizsCB8ZFUWZS6kjip3NP6fYzxnHG5vg44gei4hMshuiS9WhBDdubpdLdET4K8kKZqinLrkbyb9",
  "key27": "u5e6APB3jjhUWLRRwywWqHfHNs8L1WjzDSqECkNnED24NivmW1YhqS6J1yfRqsALhGpFo3HiioxBR19nT2ED7QF",
  "key28": "8qUwMcj691Ki8aWzDTAoFWygMefhZeSp1uGdWaH4ihYWaJEepnmpP6pLm86Z74sor1k5zqXfEPt8w2a5gkvSZRi",
  "key29": "2qjyJFVVy2hKxi8PVMPrUzgyy7JFGWe9AwVjNLDBkGiaeaS89TVDniScDy842Po6LTzaBEUvERbXpT6uDSeZnuyZ",
  "key30": "53UERTsHuwqBHZkVFQCMZpUddMnsyJBJp28Qixo5WddvzGoz7zXxns1Fv9wYvXqe1LLsQWB3KFAqkeVgXmaSzw55",
  "key31": "59nq7wznkL9E9kf7DeHjaraoYbuhE47FdJe29tPbbB6mG3LiqPqzVk2WS9S2SuPdaSXTqtYdWxUkn2D5PtdW91PB",
  "key32": "4Z7BWBMTjtXYNiuGxbqobSbjTGmxbb3HmFizNAbMyrtr8XSd5LyqEdSAdYvCZwDsQY5gWaBqsZdjL9rN8XTpA4se",
  "key33": "3X9aiM86tLvPjxJJHoNPvUSKCaMT3AJuWaafRQiduwM73zzaaKUmPnGzYrAQx3pXDpLHkqYiSjZJ9BaFtf4WbcXh",
  "key34": "4X9rutafwKZLcaF8DNo8oueo7onLU8FC37YruEcRzJSQ6LG19JwM1X7RxhnUZNitJVEgvv44cTHdJmMnQYfffTaC",
  "key35": "5sxFGDD8EJy51QZxnYA9UC5qiR7dhWk9i5BVfiY45eFmaxVTqGLZg3BNyd6YDmTPcJbnAHUUrTa2xd7M6FP4rkdz",
  "key36": "2tjSExZkzKQLce7bg4dQv1ji2L7T3PZUpeiL7uBZJAveyD2uoNYmUoY7bXDspn4hdsrVP2iL2m9THZ7iZDMzq8Gv",
  "key37": "2m26HngTGXeBkxEsdKiycqZamgxpL84HEQVbpxWbrx2qQVai3mcQBkWmuMjpLn1LryJdmiXoKDNTvPof1GX4TgD2",
  "key38": "VLecXzmwiHt9dYwN78Wcw5QoTGDm3VyZQWvarxa4r7REfS7m1Kxn8emjqo51oAxsyuJWTJZEMwbTkrwQujekhH1",
  "key39": "524rGBAtDoaYRK1n8PD13kgTRGrivsLyGfCsYLpwS9oKSnj1sFfJ2YGjy57yuggJkahnq8vbgLbCAaeQMFy4tp3D"
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
