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
    "VkoSomYx9S72dcCHMfUtNowYMbsCbHZEPkaqX9kzRCg2swTQfgVSTJoumUV8uEntoFvzrdbSrnXc93RnqiVJ8xB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41CDdDSPgEHY35GXAcWCyK7TG1jbugtDuLy4sbYHgNEBu1MqXPzmDcfPGaBtGjeAypAjDBrmSMfEtkkzSYVxcMQM",
  "key1": "5SGNgnw9R2CDydaGERq8QAm3aujUesiNT7XdPod9VYU3fcY57Weq4QntF7v3JoMCGNJYjwxB2x2ToPXoM7QkBB2d",
  "key2": "3ovQX97uipjk9c24c3VsXTUXUnAe1dUja1HzVLHD6HEKmaF3cqD3K9UGDUC39AYduA7dGUWVeoKZmLV1mYH1oYoC",
  "key3": "4QEcKFNZjM2zin6sCj1UjTar1cjLtmjdUnW39T5HakiajzMDVU6NrrTAdWptD3Tr3QY6LhGupayGHoG8EEwhyrFU",
  "key4": "3ZtHznM743fRCRY9T54W19pHX1xGG4ninnt1aJoMDaD8skVzvcqjpnGxUP75s6GGDxKwHV8whjS4YMZJckJEPH2j",
  "key5": "27TkZLrVCtJKJj13pKPBpHLzEeuT39SHVbKP8ncEAhFYQVBXvnjndvD9UuSDt3AuvhAcoJVjkujDXrezTzzPvW1G",
  "key6": "3UyAc65sczQF2oKJdD9TwFY8ss6hr3Qdqb8ssgDpwT5Q2CHCjaLEaLBLQLnKaKhi26JT1myTNrw7QASoaKvHrMZA",
  "key7": "ktc9jTQ5G668PfERArUgAgVJZXuKMr2xKT3SdzWgnpJWX54oJzXs9nH5ju8KXPxHHE9JYV1WqxrvEwdh9hq45aN",
  "key8": "EA5mMhg8sVhPSHu9rYLy4i2G5nR2qpv3B61MxhGVKc9GcsbuhkQCdtYhu2d2g9SnsXRQYgpGiPPDpXDfmDpe1cp",
  "key9": "4fDUMv1ahTotM8sAAybuwjVvvW9t7kW8xM2Mx67hN6WFekVGaw4sJrfRjKaRfitLv6HpoZ4VjSFbdshKant6D2as",
  "key10": "4QuuQFDuH327vSN4LweD82yft8mSa4GFaCTiuE4Voc2WtzATrbi8vq5QDSbd1QdHot1JKjt3P7SfexzNiehjmTtS",
  "key11": "5GoFp7za5Vn9Ef8uViYefWeGHEnTVhkhtB2GKqRCdj1sjfFAQ2JxqcSEsYnc6rYHEAcv8BexLaqf7kpAARNdJXBr",
  "key12": "22pNopPUERxYJ9HfGVQxpigaKc9ykk7piFkezNTGFBbvmqSgjCYYJCkowP7zV9a7QndjupzQNbpUE9KxLet3UmdV",
  "key13": "5cpiiYkhnSFmz2toQhnEdx4qvy6Xsyvcv8ydhnJ3JA79XC3JQNDU9Jo2XWD729CLBXtTsci9RmDrsTHdWrjq9Bmf",
  "key14": "66CuJkgwr8AQdZgwwM4iL5Y6RbjH9YAJoK7pL3EVuPUTrnU5CXn3n5ruGusLpCeboXKEhiz8zu5e7BzGtKopmZdA",
  "key15": "34bZSh6tWsmGCse3S7TDEVQAr7SxZbdVUudpiwsHaiGoFYfYeLUj4Nwpy9dzjvvKjDxHHFjsz4Wd3UqdG6SZLV3X",
  "key16": "zu3Xygjycx6gdPBJUGrbHo3YLAcoshgVGRuezFYYArmoMZacgApiXMSspmGysata4U2HpM3YBA93g2R4WkTeLV6",
  "key17": "4LCnNvzFH78FKx8QV7rGvrqH7pEjvYhUsr6sy7ArQqCkkrZZsU9aYAU493hNdUkADsUsL6LP2UuwXk8J3hVDu5yr",
  "key18": "4UZ8j9U8EnNEQoAe7W94VyFLw6AoY9N4BZ9QaifoWFdsBfVvz2S2LFRowRLCk46wwwhFWq3He4zm47b7x7HYWwSJ",
  "key19": "5Q44MEVnYzzwHwao6ipKPTYpMPvbwKc2MzduWs5U7UJmh7rpBsLFNpyPe36DEBUJdi4TeKSxzuCWqACi6kibK8x",
  "key20": "2cXy8RA4TZkC9YhKezQwuqc9RmM6JD1CnJLegAXjVrTP61qSLm1NNZwGxQubgJUgvRLcLj7Zgt8a8jSCtB5sZ6dh",
  "key21": "3gRELD4nBXyMUvcgiCxtzYcrsNgRqu2iJFQRJa2rKZcbYMvkaCUyJCMMHQrxxRD5AUso52QGL9AJpGoGS2Gcx7aS",
  "key22": "2H8RhDaQcMBZ2LA3sTHpf7sTfFNsBajRHwNQcdLf2CCfurPucbxVZMvcBRCur4UVBBkK68RUuGfj1y5KZaKaLMYA",
  "key23": "51yhVkQNdC9tzxLzQiwaGqEUdRyYy5TtkKRqGptWdHE7Es5J4bfx5yRL6fatZDbXcLUmfYX1cC1wyyr9rH4p9W3q",
  "key24": "pyXHTAYwfeJv276CHqkZkD8wYzFbDec4aLPg5MbVbGeis3G8izRL88v7LBLH2Cwrny47ALZXuX4cHXeA71gMB7q",
  "key25": "3pjYvxmBLwW8qdBuj1Yv7sevjvepeYndMBTZMC2oXDGNaQJ9b62wEkm1nt5mPwKzgbRgzFGxJYvTwC2x3BM7aNnE",
  "key26": "3cABjiCFaqdznvzjCtqwjrh9crQtkpdA5vDdhjFtQWJrZz1NzfbE18o1DnJbjuGV1X6d8t4qZqEWp4dHQUEq5nVu",
  "key27": "yiCJPB73u9dZ2JKEK9pRpk1Swkv5UHJoAFfSBoKGmF1PqAccMytVY4VC4Ur5s613tZAmbUMamFo75QbyE1DpNyq",
  "key28": "2LtX4cyohC4Mbtzck45MpjjHgPA25gnMWg3Y7tMwzfST1FFeszaJXpttwpbjEVFN28W6AHmnHfYDHUuhDKUHLNyg",
  "key29": "2C6gN8oWEmHraQooyowfEfUB8iRmUDuYWqeW1S3FDuYcoJSSCuyHxjSUwvD1bUyayCBHUgrAywEa2Lj6ib5TND5S",
  "key30": "66fs8ci8jFVdLByTAHoHffq4arEFGkspkXd7E7r2i19wNF6z74e5EzCqeLVs2JScQ3R57Pk8JAgEkseZRt4tCZtt",
  "key31": "3jk4tRPitGn4muk5PgxauHxU2YvcbZ9XLiULX9pzZk8EgHyyoNXuqk3z9QMFsEUia8j52bRpyf2s4PhJBtrBHhFn"
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
