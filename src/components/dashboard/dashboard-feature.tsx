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
    "3r459qVQPntwhaHWYwiLaN1ByYRLKmAL7a5bCjzfsuJB4pfaroCVMhT6fzAYx4zZtJ5gErZm68tharJDtK7baHVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JeAvRHmxqM9H9ex1T8ELD8CKXLRbwyiJqtGDdPWxAa6i2cGWTrpoZePCYEWUALntKACvUgqmqdSQCE8kjMKHf1g",
  "key1": "2wA19JEA8ACv5X2hREeQMsyCG1rCuvqUuy3EcXm5mFZhwq8k1jcJJC2JF1R7rjR2pJdM9htNtwbY3wJ4rxsUNVgW",
  "key2": "XQmwMeb7X93WLTx73SEQvsxWWNgNpVr6jmTJqAMPS6tnsVGXBpAgtDLphgjTAC1QxFtjjJ5PdhRUVizr4c1yAi2",
  "key3": "4DEYYMgtAw2MboCTUgpD94HdHsmyRJxprZQAsUmAC6QF46cFZpx6aj1Xpo9rFhPZnA4RycW5rFLKes9ELP2SxoWu",
  "key4": "3GDEJ5rNCMuDkjyAqwPSuRJLAoPvhXVmcqCfvozAjXes485zL91yydeXd4BkP7VHEmRQr6qfcSy94uDEiRGpBXAN",
  "key5": "4UwYhX5yfRLWE9XKqLpDn21zCeZtb2iaNUN6h1M8sH1mcq2X9bSJK6B7ccV44ZqKfyHpVGJDt5aB1cHf1s1X8RBY",
  "key6": "AXcWz2RkfmiEX8C5oDSXkEcHav4cmspoECmnSZWWy8daRoZJApYxSVSxZfCta2FTA71iJbmnzAsvAthtrmVvp37",
  "key7": "2ARdCYMS56D8uhosagFcWJuHKWTvbDww1SHezHwoujvLnc9Z8uSUoBD4w6Zb81TijyN45bvdbjuXXgeTPJYxHt9U",
  "key8": "4E3pkzCdxTwAvdSHHdHX79MZAWPk9BVPjAkdNP53D7DWXBZFDaQuGGuVzDKLT3a5JrTrxoP3s87qetDoApVT1Hd4",
  "key9": "5WiaeWNzYcDRWEAqDZyCXQVF8BpSTib84DJVEaMuKXvZYFQ6YxaVCXzMkcPrFjYACr3yScpQ4vjUS7tHv6ZNMPj8",
  "key10": "cQmzjZMpHmHwv8vGzDVFjpUVcuFvj7HDMkSRceQ1Ckp7ghri3RHeKrQ4ynBXovWZRovLhuUTSpzE5wwsPpwaAfF",
  "key11": "3MdnJeu9zrg4FfQRRXLNCceGtTSbFWoZ9XjXkNgnu53ZrxddLKBTixdUbyZAFrUE2aBYFQ66HfhhyLbtBCWwENc5",
  "key12": "3RUXULxQw8WYBXzv4qH4kzioHT84jDJ8ezf5Em4VvxupE6EB1Dm6UUFZKcLEM8YNdQxeBQ84nsbjraGcAf7mtXQZ",
  "key13": "3WsEx6UtWsZLPJZtuayznD6jyBKr5DXCcDXKVfFrtWDa8ujiF39nfbVPzC9NYQfVcLPS1KpGfW5DLBp8T4Ppovwv",
  "key14": "5wfdpckgA5kruXfLPURd5i8aeqKze2LT6d9g6tPPt6JPcX549odVNvUyHj1FggL9iJkQDuFJwhYavaGokYuH3YL6",
  "key15": "5tCf5NFqYdSbYRHqFCAJGwgLR78o8cVyhEmGmqvMydqdzP2H5LrbCxFNexUSsYZEkS3gi7mn5SrE7afsbtM2EmG7",
  "key16": "3zYEvrPhXhU589PXPafT4EEP7Nd7MRVx6w42ERpXcxYkX7DgZ15iPUK7PcBDEDphrBxF5vtRRPgEJRJz1U4NgXux",
  "key17": "4UYKD5r9PXpNdKU1tB7tAFDdoiegoGHcEQmaucQB5gf8Avj3qUr5vrvBJbYV9xE7iStzgDEDtjW55nUbzVtt1MeL",
  "key18": "5RzoeQRd9ei8WUFtwXwwJjruE3uYpyZff4n45xZD4NdqkVcs1RapUvpYo7aK4wAmtiBmUA24oTTcrxpEuZDgxSiU",
  "key19": "4wCXE2Rwi21SE3WgM8N2sdqV7rKLJRP3PyMEEjACkrqaP7G9E42tNbmryUnpxrGZhtchmGriz9yTRu6uAKxYiKDT",
  "key20": "3qh4Dj6d1W1yRg3vUFBdvKL1i6CPJx8rZL1vkd7UvmkUs9HrM11ywepkWqwLjFyFkiHhqqnxeHnxz2akbbNtMuZ8",
  "key21": "25ksRYFQvuqXAqrQCcQZ3WVJ7Z5Su3Ahyn68vcQNJ8LGjxrzKgDE8j8VpgCuUdtBXMAUivAKjeT6y13GANy2GqMU",
  "key22": "969sz9fnuWHVYg5VPHEZYAGEcZ7bg2F9b1owh1vFQmpmumXEFwoWzfNEbvtPyjvQbmRxDShctpznV5wSuYEAcor",
  "key23": "4Za3JgCJMwG9sjPVRgNckQhokFQ1wK3wfu382vcy2S3DfzCUGG7EHEkQ1FPMn8wfT46USSFBZoKCHmgjRjevQB3Z",
  "key24": "4NkULk14Ydx6SDxfDkfbvDpTbmPS9X1G981dX5dBxt4Gx4WWKG7M4frCq3QpALUHbLAzxHVH3AvnepxxnrjTkRny",
  "key25": "3aWSoAWt7jFd4zYAMa9qH3LEsqfanJZfrzkpzmYXzJSYwFrbmaD1igWkLmGBQF43xiEgUvGGHqTocyNAmru24s4H",
  "key26": "5cbujF4etYxnStPzV2YHqSajrczNKSw3qw8B4v491BybP96W7SZaSTGUNR9QmFH4YuQqiosJDwTrMaCwxCfhE7VA",
  "key27": "fQFVpseQGurirCQedZT9gLVxWXWerhgncpXK3oXQnKoh1pLyC594xqyxLsJEncrf2J1ukJURabUJM1asz57wwVZ",
  "key28": "54LLyomAbyuoTW8eUCwiqyryLrVA44qeYSsReNVQgHevPGLatkvXbJJt9U7zJNaGwBUh1e9Vc66UxtYLKJk19qMq",
  "key29": "4MA2KX4rUyLN3MJvojo7aQrmt3ipv6YHUhAKaGdsf6x6p9ptxWtLtkuukKnukjSs88qd9qsFuEfNa5cWRQaUnQjB",
  "key30": "BgzCXnWwLS6oTBZkLcM7HdAtt1MfYaXMo7iTAdYWkr6Ckq9wBYmzA8fuPaMB8cD5Rz2kk7q2PQDozqsQgAR2NkC",
  "key31": "3hjVBK9BStSDkXQrixH41wXqfgiAYS4mzECHKFzGzoH1VLYvUFaBwbWGiLmzd6sbGDWZbHbdeWL42UnQv6bpNNyK",
  "key32": "2NStNitJyqgjzYBGPaynityxLvawNrEPwaPTsdmequ1T1cKP7SZMkgL7hv8QiTrhroCSfEFVzut5HKcebsiHFVTs",
  "key33": "WBQj5spwBmjsxQ95qnruFSWXaeLknCLhzzk7avVDYJ3w5uLWcGi9Ua6nD7HpSnX4zZfB4GM65TF5xMQydTLn2wn",
  "key34": "4iKYuudhEGmEmsqq2stNwoE7yVKpSbXpqxBNVgfrDx6n6e7GpNpJS8CiFDitEoyzGfwuaQL9rH44QNMpWeSjGaRq",
  "key35": "3bswnubYehvUjTEmJyXe8WaRBovfDd6dVQJAMvQvnpwaDEfTgecMSAwnmjcsb9uEyiuXbuG92uLHEFbAX6rtFsDn",
  "key36": "xwYFvpviPMZRartgCzrZxTEaGGWeWoRYqVvrkbkRNSZ5z8YYVXc1B3G6rKinApx8oFHJwPasFTBoexZFWSET4rX",
  "key37": "2rBuiApW8HgL7xKVUMQG3Pv8in9gLH3RdzpV1pbJC31VAQP1upD9v2rvzGShaSfC5BH1oAL5GMoS2CmEFCnDdcn7",
  "key38": "531BZnTtgjszr4ANj5WjwrPt4EE4CLMWniQGfQ9iCTaGF2UT4QuJpugroc2AC3CdY3NawT4CeDwDpYMCN9AFUDfM"
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
