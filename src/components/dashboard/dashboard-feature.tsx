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
    "22HJJMGeQ15NVoH24y4j74NNmtnG865U8yQJH56sW6rnqw6ijYodEqKMPTjzaZhxQjn22R2PJwqFAJyVpa3jCYXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DmxDjDhaR8PS4zcuJEYubM6KDYfe3t2KYaHbnYJ9jFwt6swTJXWNJbRnZNBdhSJXpC5C9nPqtWArtumVzHuK62V",
  "key1": "NcCdD7zQDgaDsgd2Uq66S4tAoJueFx1uHesVDJLdwA5FdAqh2nDFijJFaraYJDu5DcR7bY3P553Wr6duNqjR1Bm",
  "key2": "4QvNgXUiMCXYSZxaJSD8yVBXn1EHQ4Qg5wgyqF5JBjTBD4qJsMZRWHzApUReKiA8GpS727wM6Ps9YhtXQHRQ2gfJ",
  "key3": "4WKQLc4CoVyEXnpqoi9RMPiFBRmo63M7wVg34re5WsXkUekrdargR1hpvugnhtXGz5KLb522VuBMtKwLSwT5Yrhp",
  "key4": "4ct86eja3YgLdNttX71ooxb74ELMLxSGpLfRBAUeqPpH3d6jpitddvMV12MyL4bCyzeBzn8HhZYYuSUqJvK7qgyd",
  "key5": "2WDyB11M1dAQ234vkcMgbCE7o4cGJbsyi45ZDa7QKNStTTCWH1wkbnPbeKZt1yzboKSgkc6XSudNDGJbDT9JZDji",
  "key6": "XSCX3jRNsRg6YfncNS6dZkWGmbMrUJXKbCUaCeoyNc9KjE4nMzW671BHeNWUubzCVTiwX6uE4jEwFCtoNf8ScdA",
  "key7": "5sE7WhGuXyZBa7Cs6bruqLBxNk4Q9qPhTXBNaDmrd9YFr9aY1h6bdtmoyXemmvAwydfhNykTXiBpeRvWZ7M4z1jn",
  "key8": "ikmQJvYwyfFQ44DWZkACmRBkbxSj2Vj21WPDV6dzSfTRyuVUczmKqFBnuXQLPYYLf97AbEtUrZc5poeoV1DBSfX",
  "key9": "32Z44uu5BCuZ19SNzq2H2qiWyWZdy6k1zWJLCDSPRNqPar7GSBmC4d1fqqNSTvrbECK2qJ1M1ndMwXjj6S8CBaS7",
  "key10": "573X1Acbr19zaKDQ8g9HBwXHs8TaKfgVvYPF3xqVecNiekePitzWQNbLrY8y78dToXEW79jrM3y31jdTaQto9nWw",
  "key11": "4hcEppUsyzNWdLjWSY6fWAhdjBV2PcJKPAv85ZN97KRbhX77FxJcSEzTJmE9WdUQxPZBXFzriW3EQoP35oUVKaeV",
  "key12": "4K2Sbqi9v5MTmRtiRH9wadmjwTCnZgQBF26F9TV9NX3gUEyWCcAV1DTJAZ5htT5uDjup7gXMh9bA8t3pj5FjCeZm",
  "key13": "31Ppjf2k6TXRW9UD4WhUxxytGCQjuh8qtFCLUDxHZveLW2aRfSYc5KStL2rMRLnbHmRnkey7XsUTQpkwhGGM7ahE",
  "key14": "23jkEpBtreDdNBTfjfAFMd7tqh5XteqbeC5nLrSUtcSX9g8EYpzb1BJb3qbhtP9GEtpjXf2RpWuAjv7GvLRZmqbi",
  "key15": "34W3yamECCJLrUTLoRBY8AnE8EeZgL6yr8pgygtR5rfPhEgkHn54rqv8EPpebGwE5zeVn31CZiRCW5bCz4Y1HdP7",
  "key16": "3owA6ZsGXRHEgUYCTwDLsZY4xD9WquHehTzVhpAmRSqYfoJ6wvaZ43hrcehyHJZhT96QusV9SZet3LiDPKv4Fgvm",
  "key17": "w9LnM6g61EffJjU19LbWLD4p9V5cy9gXnvy1MRV5oU9n1wtbn2YCjny3jthvH518RbpwHX6VwZwCNzPiQQGemQi",
  "key18": "5w895gFYKD5AvDa4WnH2p2EK8d6iwc377t7YbVcuBR8sBHvH3PURQkCic3HndryGTq3ae6Df37ZMxKx2HT5DvTRr",
  "key19": "4oxTfDDw5HNjpRMyCykErz64z7P6hsayQ24hxRWSNdrZ1KBsC9QH97DSuoDhLFurkjEJDnA5R9T8gSAXk2ht1oEQ",
  "key20": "3APhPcdRvtF5vidMoBYbJR5z8kwz6zaJUu3NnEF5Q9bXMdrLaobF3TmCgcj14fjEufRrngAE48dekMkmyqSwTwQN",
  "key21": "4wKZZoTmJABQCBxVL8X5NJc3FgofwozTaSTpA1zYpuYfoYWrsp9Lz2gfrTxQ3itn7ZrcSFU8zLo5hto8SDMuaaGN",
  "key22": "3rcj5uCt6dgkD9oeDFwUmcB9x4ff16ED2BhJCuaU4WmxL1tRR7ZegwZN8YHnyKRFM9xMsVHGXny9rqLtRFGCMDEa",
  "key23": "2HvArS42Gxj6nMvUemAEKFbtcCM9UPsRN1vtwSLtjBBHScd4DQThkA9gEk8xaCTjP5VoxRvZw9Qvja1jt2VzAjkz",
  "key24": "AbQmD9TZQ3oAx7qYahDEJYdVrtHWGrwMJsJQ31L2wmE7zmfHv1nJdB97CcCedi9Q1WVqFcM9xyA6k6Jse7sxbJ2",
  "key25": "ymcybrxLn3Rs7R3x4TnVxVdeUjopTAMdrWZWmetGg9RTQ18kwWueYJBA97Eg95QzR25KtcsxUZ4E8TigXMPUhuY",
  "key26": "56vbqfWsxfNAeQmMzrMuFBnngKLA4K3V61gg1Z3fVRqn1wDwEhB8a9sEnyDz9xuyx7CRpibqEaayJcTa5RDWrzua",
  "key27": "5Unt1KMAbRvHN8KcJzcWzjHP4XezSwVNpy7sXDPPSaRZyoCZp1CxCZzuuF37EcdNpKT6yopjiZjviDVjDuAftYXy",
  "key28": "4LrhMX7tqvdZznXSAuSWvBXKPBVsE7AkEn5eSN4pZbjRgcdTDyebEBi26QgUYGCKGvZBxCf268uMgXAyxiW1yJUP",
  "key29": "5H98VpRovZsE9b6qAFYMii74XzPDqS1LAKoLiUFhxgUxq2ZyPKf8xNekoB4XXDxVtJNTivuWrr1Ei1ABRPxZW7oU",
  "key30": "4c5uU7Z2rzwEdHYRf3fRpVDMVVLKuYt3tiSW8F3LxCkPz1RxTr97r5vgJ1LbzyyvKnbiPp42duyLUXSQJs2xDrv5",
  "key31": "5jLhWc2EMXph8YVejXEoTwj6ZY7STF8pzNnaPccGBU8wHaqTX889MkVjoqdjmmxiC16VZ8tAqs4TrgY1MLVBxxQC",
  "key32": "67KavyfVbzayTZNJDtFFj4v267ZuCx45fjKcikD5bRNjGEdYL1Y6kafsp2WLLVidDJm4vhiRNq17gKGdaqccyWv3",
  "key33": "3rwEQdK4PJqJ73SQsb7APfdNQmHiuexx9KxT3gQ4BRxohcETh7Ddka9eWZNYZzdxyvbhhqhbPrYuHJHKKXGRK6YV",
  "key34": "r1unxQZs7qfjuMcXYdV2Vag4TMyd79K3Kgfs29ScAGUPTjLWuA1LYaQB8P1kqV5Nz9uE1F72VdQDjjLy4Hz9c6X",
  "key35": "4DrgCrY3qYEnSzNykngzBDMoYtPbgi6MHQNQ6oKN9UHQDpNA2MEmnXmRuZhhSa4erWHmpeXg1koVkqMDqddTrSUA",
  "key36": "xx6DWLToYMVsoxoSoEVB5KX9rZV6Gub5rFRCz7nf6c6TmWFeU1jcCxVPKSTB4ifAdBBCQVf3fZY1qfk2KsWxqgC"
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
