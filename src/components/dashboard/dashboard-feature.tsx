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
    "5X11vQASaFk8LmaKjHF8SZJqT4cKZCSSNfV5SCry7DELET6hFv3UGLZcaG42s9GMwhuYukcvSegobSr6fjiJr7mD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67Df2XZssXdWsvxePexuvtEWonuETwYzHTsyCxSCLgttLcMqcYHza1EZhyXMKYYZov1geCNcXoYhsiALArYXJffM",
  "key1": "581aKjbfKPYtv5526pteCaim2copZerJodmWo8z7BsmcnDtxJp6yTAyRmMCqLn9fKi53TUjqfPBv2NmWGDVfqmxF",
  "key2": "YBXmxAvs66esWJJapkT9UTXoZVEkCcD32U4Gp2NoFBnbk2AsJJDkFUKVzqAwkVE5h88riTRg8Xvc8hvh5TUPFnF",
  "key3": "3Ft6XPHm2d1VqLYqSUUvmz2pcDsynDASortT7v48TQDUw2oDXV3CeLvAHf4LBAqCpwfQztBjHGG5rK9g8zKjkQLw",
  "key4": "5MCcDUKyb4Bc96WdyV8WhuViVwJbUy4wDyAwsMJfiAuqXMdkP48bQbuG37pnrQs3C1hkgXG48gEGSaC5cppuprpE",
  "key5": "3Q8mAUb1nT5XfJEBmBivxyuLWZkMVXfoH8jiQDzVWgkZMD5r7YLDwQfYdmLZkLedban9C3zKMeQJt3AecsYC5E62",
  "key6": "QJim7BVD9Sf3jzDaHCzqsR7kCjvE5Zy9BHRuiRjQrmngTRLPtGXJy9MXdxuaxURB5MxgZpLqJwHei682GA2sKC9",
  "key7": "3uKZywDCo8F62eitdu1kprAs5uX42odKtwX4ix3MtWxuKozLKzDTNnGtrDt1WwPpv6PRp6FBhswAdp2mYreE8VHu",
  "key8": "37TChjRm1znpwqyJ5dMPDeBT8M8xyzZjJf1rJdPpmg2TSo8hwnrGAKgeHMmoKps6XQJuskWLP2B77av1Q1Js4mS9",
  "key9": "2h4REqyX3NkfEsvno3iiHEXjeDY1Udobdw6x3sQzWhgZMpT9PqqkPnxgz9qKAdsCx2KgXRoc1oJ4Jp194eQq98WQ",
  "key10": "5z6PMSq4yAkchUgZx2KxX6mNtWfXy1ZRwYEobDXHrFFdxfajJn1m5DQe1AfPW7XFcES6DjMdmp2U5DGVsDX7NnEy",
  "key11": "21BzBaSpnkK4fjLumwBtiBcJ12EZHizyjzcb99gf6vYXmDfRsomVfuLYDVMjS13yXTn3Ugc6jid9tzs6EgyDzxNw",
  "key12": "2YgxZZhh2KZbfrR4XySfpVGhChZpUUCjZTEW2FMynMX38umffVD4sZAZL235UVMqvB9ZGSt7fn2HFice9SyRycmn",
  "key13": "dUMzCEiK8TvVcYTVtGtZ5oMQBgoo9JQnvQ6KimHJKNwCbbQ5oiXgNde1W3vhfZLQD4VUj1Y29BTjAt7Ae3JKv4G",
  "key14": "4L6b2EmWsLiwbwnycGSmdZ2tZQFUmCLnxKNdiJ7yd5xG9MuFemrXxEysB8HFFN6JEnN7KN1Q3wWKRuPd87q5vtDV",
  "key15": "4LxRbnQ4SpKHEdNDk8CC4KLPZ931bFzLqJWvDPYSuh7FYMq41AJdtBsgYDmuiXw1qExdQPvvUZQu3LQ99U8jMNML",
  "key16": "5FZgWR42AbWAxVgfj2KQ5xNZBBz7jGTyM77bmEkJC92sVwPSn6tW1G6osaMAvYsMmhYuGPqSHocmNe72ns3BdotP",
  "key17": "5XJpfq16SdCKmMgq96VzR6wj77JVazyWEZdhjzcofC81JMnD1g4ctQvZLT3bYTHadthWcQiYy4WQZE3LN2eLJVri",
  "key18": "55KxM4JyUxqdoy4RA4oNXRjhPwWDgCtLmJy4nyzAT1TdGZEptywrxQpUykYyGdkmqPUG7JEUoRqsJQpCW24Zc3RU",
  "key19": "5vexyBhBCuhwEzkmiPBZXTtLTGg5CpWBAiDS8zkcAr2myqfTburtSd2FrGxtZASRMSt9p1RNHuG7REiXjPEMTHke",
  "key20": "7ToMPd31jCUay2xwtJFzZXzeE9RPTTwwaXEvrStBgz6FvFXo2k9HoL7oWQ9GPxBRrWsxfQ6HC6KnGEW8KGyVGZf",
  "key21": "242nYrM4y46sEAX9HU5mcrYJSoqxZzEYXsAc9C8NojMcPKUd6wRRCv3PWmvm8SHMzTfzBrPcwuBHKRLt6uqDV111",
  "key22": "3mfiMYpHjw8AsebDtyNjvShPGSeraoNDHFBniLWuk45oL2TV1xo6DbHru1Y3samYnyKCdCSk7rnzUcryZpLQVKXV",
  "key23": "5tdJH87uhCYcccQSR8MWbgWsQKykiLMtoFtaBwqniC5iZ4JV6ns8MZ2mCx6xxwv17gvD43jVF5s8Xvj5msnmASRt",
  "key24": "5K2C96mcZFQEzrFKEhoeaHjCk7ZsnLH4A1ksni1WHBqeGjMnQ6sdT2qqr6qW53ZBMhiQs3SJZB9VUZHZ4Rs2o8Gy"
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
