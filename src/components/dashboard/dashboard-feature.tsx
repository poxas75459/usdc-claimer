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
    "3FwGxzZzzPW1NCaAnsneyXJXCZAoHkuzfeX7duisPtaG6p4ZQzPT23dhgkcRsa15gpz9wT7Sn1svZzvobTgJjfXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bs3F9dhyYYYytD91NQezmaiGPtBsMh44o9WjzPH6X4F9fEkj7YH1yximTPjczkeYsmta1ipNUhSTrm8NjuaYSsC",
  "key1": "4phCqp2xJ3WnDastJAWPZwyeJWjUkawD7NUEDU2NP1cBD2Tquj5HJ9L2zFHDRFhi38wyLfLv37vi9msPW8dochng",
  "key2": "f7koAMbumaee89DpTJyT7ZnwHxb8UAc745z7EjG2fhoywUjWhNUmCPJkjSTTyVuhVGQUVKVd5b36nHUUvCXxmtv",
  "key3": "417nYMLqYoJXW884J5E7YpXsp6hvtoYmxVBj4NQvAseTZEiWjWe7oasoDXRUZLe7vbBYCuXzk3gFBi4jVaMRfvYi",
  "key4": "4cCYvn4pGEpLKkSm9mDdfJ6zR5ZfcXj9y9fZG6adLANTJ58PvtgrtWwjDAkoJWTfwbFvaW2UDULoVL5NTX5ggy6e",
  "key5": "2z11ZfCjdtVcr3xwZRfHkfkyJFZmdz37Kc8P7FHPpZG1uim7xDYxNNqHiFTZvkxy4w2mkXpRgkYMFeurssyMusqG",
  "key6": "3NuJ53wBqhymT5XQe8eKvHFB3Nqp25kd2eNhZ64nNHXNE7gWxs2So5PssenLxnGWbX4wwhoTGWAmt8yi3rjzxq26",
  "key7": "2VisFe1y3pRajvxVc1hC3fnEGZiEmmcmcKXGXGcUcJVfngwuhauLnY4mzTiEtGhHKP4DiD65i4bYv78ScErwvTWb",
  "key8": "4NYKmZTAWkTnWFoPsS5VcGgUgY67f2oUmRJ7ho1U6oxeiu1QbLWEaYW2qRMSvuuScqLkxc98FGeVnbPmGJQ9JkGZ",
  "key9": "5bBmQ5HHDQ9nbk6E19oKdFiwabcJTrwK2sALUCJ58kmnpT6bsrP5dDKDqjkCdDkYZZ13YxYMYmsm2zfzhvpwepXM",
  "key10": "5Zvm2UiypRSfF5FeEqFn2L6CU7gfY2UUcLUPTApMp4epYZ72d1x8UjSxegMoAry22Fy5sTkNPgHM5D1Kk8GQJWjk",
  "key11": "3mC9aK3zQmrfSkoa4Y4asQttiR68tHrX9YfjvktAUL2ec4C1Td1T6FMtwLxSFCRtbUaarc83ZCYxUnbYfayAnKjW",
  "key12": "2bD2WMMa5dxKqNmoHsoqtw9TeviXosaeWvnvRM4AUC6wQqCB3H75ieiYoLrNB1rwCvsi6tF94Jr35WY3ejDaR8C8",
  "key13": "55GpCFA5YowkLNLP48zyLoyJ1WQnMm4iWM1EmCqmrZuBwdSZaisaMwRo8hLCSSSLH6rAovyv36aDADBx8EpyEbyG",
  "key14": "2e8heDrq2i3h28FvErkWJ99WUZgQYPK3fWd4c4FHbsybjGysk3XSNmXktosBA2dAVukQC5tfnYTyKs3sovnkwSVg",
  "key15": "4kDa93vr8so2FdQnUo211ks5rUaPUMLqaBFmJ7yGydbQEiPrJJkqRYNxgNjr2w38ThJjuchEYpuZVEiHsP8ggKDs",
  "key16": "2RgQTiufWHFVuQAEqowXLKUb3HEswYud3rdDDzqC2kPQ6hMfTqWLt6BjVMRzoX3468tpyKsmVbVPLbfdmZTmhbNR",
  "key17": "3WGJBbyiSzAFgMHdm5fXHWnMC9bPVkiZwzm85GhnhVtfdS4quvo4cdPwajjSAJ6PB9g9riAVK79jjqZ5HAa6BgBp",
  "key18": "Dvf18qn5QmXaH4gwtsYgK9nLmXtutjTFp1K98SBqBXp3UZPFZYh4HYvb2cP4kn1xFA7S4EM1AQKs1bjn5A4K1t5",
  "key19": "NUtYghjpS78Jx9B7xY1h3v63iLtrZ4XRN1Z7rAUVbeywjBW1aALVugFqMVjW2CQVXRjrCEnzEw9N5Mnpi2Gs4CW",
  "key20": "2ZPhrbmGGWbR6H8FKrnd8Vbu7nZGcrMcJeUvbNfKQNMNoiHT4J1Fc84RimwpnNS78dpd3FXJ7BSJA7f5kcN4Lemd",
  "key21": "5arYpHLzb2YcqW5HtTPHjvEKytn4RykNxm6cQo8Zfa3VmXYW5NwGtd2tzrEwrpGrXaYGmRWYwmXofiT2K4r2xm7P",
  "key22": "5AituDzZLZPkhGudSTzB912crN1urXNu4ePr3p5ayHQwVptWeTuvcrT4Li5TMjophett5oaJ5XQQznqFrkB5b3F7",
  "key23": "3873RY5aMSLaA9aiNzmAGpmbLFcFLeuy7TZP2AfwdRA95cR2Nt8XDAw2FQ9NnQQ99qUiwYsPqSkbr6Z8pxCmY6Ro",
  "key24": "5bHhtJHEvskjKp6iL7EKfF4mFg7i4VVw5GWLVfHYRzkTsyeWH7hsRUTSCazaQnXvQ31u2za3uz57xK6EMtNBp98H",
  "key25": "58fAK7cN4TgepH1p23LVD4BHnqesgfPCLCeZuUJ2toc2VcEthoYLkDaMzWwaLY8iLpzKJbE3XddAQf1PFY7aFtW2",
  "key26": "d2uaMF6rvMVEHru3eckxcyesC4uH8PeNoBLuBySmyjsfe4c4s83Z8zARt3kSzUUYCrvaLf2b2VuiDryrFuEqY23",
  "key27": "3x82bU8aaSZZg2Va2K7TZqkSD93Pkf78sP3nYx4ezHpWMMh5HSsCBMpiuJLuiWS4sHgSvBrgddf5x8ntgHGpJeUY",
  "key28": "sKBUQqMEcupiknZS8WfjYj1Tws464Sen3xMgKkzukRbYB3R6C1xDtNcDmp7pcejELY5YZ2XzBKNtGXC7hasg7Hw",
  "key29": "3Uet4TSdVBrV5Aopv7JyuauobNtKh2LcMUpQibwsCEDfYHLPey9uPU1WGrGAdWSLjZTP81dyG6Jv7ZhuvFycKHA5",
  "key30": "2yjm6jhcn9ZgzAoapMbk6gBRZo2XTv44i9RJnukqrSoatYPCL89UNEHddLVDpApWKtUPhxHz1oUrF9MYa3QDiSMp",
  "key31": "4VD4ExBjAZxaei8VRoaVS6KrRSgR7Fpyf3W45EoW9kmXZpZQ9EZcyPKC35rdZFYPH5mhqY5SCKxxKFygV9oQfSSz",
  "key32": "D79a4p9sFBYqNTY1FRySrMYpjVNFDYLBtXW6vjiheupVCpTQRgXMDfBRepTkdzmVqmjswpVaz5yweK69QGMazc9",
  "key33": "3NukzRJu2CRREq8LMnN75WDdn3YeE91vKtswfZGsHTDg2YSNTwxkQvxnKZhuKzN5tuck8ejgz2WtJMiyhcuzyPjg",
  "key34": "5aUuvsvsxjL2qwhyqvheWjpCjR3CQLmHKykXrJKczGqoQMbnice3emkMeDUwWj3ZTUswM1ytX5JSFsnerEcw2sFk",
  "key35": "qswarq9TWvvEygfzDaX65aAUbYQK5WRo6doQge8VzG6AQw2qmihNvNNHVJKRbNNGfWA1VoPStXFoGuoM1UcPnDQ",
  "key36": "Sz4CEPdyCNyPXjNbjFSqTwWiBbq6WnwL6mKVhuDQJHHPRmc7x5E8eZWwfXeacDjQGPQkBPriVxqjSHJh3NMGrM1",
  "key37": "4sssCgcozUx5XVEDuMUveFXa8aVVhEXGcjbkjZ76dNewXWUdXnHoynqxGWznnrVkhbVCM4bWigjqtFbhBGL5N8TQ",
  "key38": "3rGYqcexDF8zgYTwfjYhomWWTvmTYRs2EHk8hHTqQSdUovyJgvKmd4cF9w8FbkaFAtEsapPi29FV66njZTFEpdh5",
  "key39": "2pQXr96icBtM5NEN9Wx6NiL8YsJj3ZVsSyiSYdaWD4jfn41er8oQrUprDaLUT5vShXAkuP636vESwLGqFckhX9ZY",
  "key40": "4akAxKRWv3WAMKr6UUSiHErxsZkFeAtXn2uFVrXmqUuU25cCFtGE8xRTGqzBFLVv8zaYwxERi7zZDoVWUsJpACpz"
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
