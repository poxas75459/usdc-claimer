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
    "4YuH84GwPP7SENaDXCpYVAeWCuop8Vtq5d8jVmL2tCJm44RATiiJStwmwqKqZepHANnmZbzL39T2DGJNwgu4ExH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cw6KwXn1mEVxrg7QrzZ7TdaXoSvVQZ2uji2QZ78Kt8ok1gowffM5aVDjbD2Yc7CJYrF87nfEoYUzpcn4X413vve",
  "key1": "2QDpUVHrZv6K3tu6vh4mDna1v1NVPYnEp5CsEm3XTEvCcB3H5E32rH3ESC4HLkx3aFNfqeuSoFSMKQm3yrcJv5ot",
  "key2": "4emphwF3YouPRskRJb6mLFJoijnFqU7bXzBZVE8mkSUXHRdJQtqmvG1hbFQYDTBq7ZMoVqrywxVDZLWwxfkbh1ze",
  "key3": "4um64YrJC1hfFkemo1ZP7cRSzDsWxWWeMnjvZKy7P7Ps2EfVf6tcV9wNeT54Z6xbavAhyLrYVg9kE8VJs75SVsX9",
  "key4": "5pFM9V7WhdUgN49in1qipfES2q6jAEjBPwBB6JKTosHBb9M5nuH4Vw2GFrnAZEHborgyMU6Jcy5kSbUqNVuiATe7",
  "key5": "5tgz7e1y26oA6t5VNzNC1sCTJo7macBBpehHJQmLbuHsEyRDni5ocQXE38gAjBnR9ybmGaxsKuMwpPtzG87f71xe",
  "key6": "pGCqurNCqYT74PqPQ95JzpmR7DFoYXURcunFwT4Qm5CNbq7gczHyJwz8SWEZJDcPkEcMTLmsU7iqounS9pjcuzn",
  "key7": "3Xdnn1nGxPZfRqwBBbW1GYUXzEiuuNsxYByGPic5zC8G59KvRfgBKzZkBWpC3S2exQNtpyhHiZfpcAw8RAGMcxi2",
  "key8": "9BFvZL7Kh2BGR16u4Y7UJGDpBhnPNxKhGWwfEcCHs13JKSq4zrDokm13DviCeBDqzGWgfe376NmFGZZAYwhRt8d",
  "key9": "3tfKcjowrdUfHb9sugNZ9Djeaib9vBacxjCEPSDEyFiewg2F2ZrA7YS1FGkzi9WCpbjLsKipGv8B53ryGAuTYkvz",
  "key10": "3z4QUrPLv8GtcUUieucNCoZe7EzvqyTg8FwkxqyhakdMrqybq4Gx9xogJGfkhkwohXWHPYKoCBXfx9i79sFtHxC9",
  "key11": "YLwbaZ7w3yVTb9vVqJ8ExCdu4qdMxYweJdh9ctPtwcqgRdkWQQ1uNqRue6LKgUnind2q8Q5dejLC9iYkgveVpEs",
  "key12": "4C8uNQZFZm5vg9G1V9bQjy1XUpWYm8nUBeCG8mRGFdrmUvmRQjg7AMUFpqmwcpxrKGFrMLwgRUHU7Rv3RiU84NEe",
  "key13": "DjFCsM7jkGT1jrba247gGepGBjdjQY6kv4kfsyxSBsoHr3Qg6kAL5pSxAUtKz7zKq9osXszJ4vu9rS9b9AL1u7W",
  "key14": "zu97pLbKWxpF1PMmSUxFJ71nY2RSTN42UBf3ecVexhj9LYBFE5C1S6j5FgWQvKpVuRhzPjH6eE8com6JBT6MzJu",
  "key15": "2SqwWrCbKmWHLk1Sh1kkyb9KLg6Gwuxcoxm8MZ4bHSeDHQtxa7VTyJPqPVfXGAatwfE9QqKTuGbHt9e7SLY3aqtA",
  "key16": "3FcdQZcKAJPCAu3mmoTPu2qrX8U4LbUisZyGboP2iTDGu1egC3FXHVzy1oM72yfSDKAAwzp5xtidswdWXX2kwHEX",
  "key17": "5QB1FqTKKYZ7akg35nuxYCo6VQExSHAuSLechjy3SmriSSth9L8zWwgKXu1xSokQcuChWgfAyLaAXBAdm7VfQ8ei",
  "key18": "4ATPScgoKZYWub2W4KJrPz4ZVz8iJdNrP763sNnBSYPdftdZrPxDwBJUi4t4hbEfXXtoEKJ7W9t86eR2FkdVSvTH",
  "key19": "5mPEyNmpQgeFJ2gBXajtJ8PgK6x58rkSdk3kxBvCU4AwskT785Gte2UyuFFcoU59TtxKWaixhakLDPir9AGgPVxj",
  "key20": "5U1TcJv2mhPkxgzZ645Rh6iA4NWFUZZZib9j4LFXZARaX8PbiTeAU4A235NNU18TeFKej1baHuyMLMCtJriFeRaU",
  "key21": "hckK94ratoaHFRykE8uVuYxdBaD7BSryiJVZY923tRAZZy31Km2HeawiiiN3fTx7iYxKddp1NE8ePrKy651VEMo",
  "key22": "513CKJSx1ZmjjKF359Eb3mw4GjhbedeuSwoLzLPuPZEZSRhwx3CHtJaHEnp5DGLoDpz3CpS1nDsXCJdpPpnJMiCP",
  "key23": "4WJezy9ceY7JnQruCfF8J1TeJpiJwyPZy9rdWyWYu8mojK7ijbBvBQ5wsLthD3gW43qfWrhjQ5XvWZ8CjdAZUneW",
  "key24": "mTdJ68VhEfEq5xhwQFxap6oJvETjC6B3ubPjCqAonbAUyaxA59uPV85S4pdSpRL77Qn4tjGrLEALhc4hbKR5hKX",
  "key25": "G1HXaHk3gDF7rEZsUiA5WwrpaNKb44A7QzRAqYtfR72oBuFxEewxSTA3ovcMP6PT51j9E47GRVjwY7a4wcxX65G",
  "key26": "4QFuGPrfTQnit3ig7yeV7HH79D2XWzep19vEhrfqyNTRXrCYHSjoAxoxHyBsm6ZhbqkrSstHrtWZ2VMggcuCX7X5",
  "key27": "XTyvJmgt8hxnKJqpo9MTjq5RQeoBYAXhK6iXcKnPumcFvHiMNN3gBqxtn2DpHn1Stt1HkVgW6v9Sv2AcmhxAfdF",
  "key28": "2QJD1HFx9q1GA66uLj2cKHqavg39GTeZ4K3yf51esfri9uCKwtPwdZvr1Cs5qanZgPAm1pbmYiYdQdyYUE5i33Kk",
  "key29": "3JXSWMaQbbcLCph9yo6dDb9ESQYVDPmo8NXDYatwErwYQrWe8fVD2PqmFWnDiAy8ccJEST81QBVQP4Hv7jKMGqKt"
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
