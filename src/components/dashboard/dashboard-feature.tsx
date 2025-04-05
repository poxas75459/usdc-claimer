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
    "2fmduCrTf2J7u8rJsdzqBXaLpSRnuF7HdFYxZ6rMqFTNQBU5uXbfCgBBndAWRSGJeL56fQE9oYwvEeeSRSAAGTnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p89jSxDhXKUbsMdEc6hEonokZsUvM4kimqvpjzLva7uJqFpEGpatpxGJLtrN6a1bSJL4HhmVHqGaMsF3iq1aPBA",
  "key1": "2bK12TUSkgjn217XuXTYuPgzFB6Fqhcw26U9fy6apLjRCF2zicBk8CC1KVdCxYuGxsEP9xM4y7KF9ouXoZ5qYWor",
  "key2": "2Pv5LLPCRKvaie8keMd6mdHLJtZgUU5QxKT9xHbiTYK8kJaFozQ5w4cX69BZNJE88rqVRWcp5T5DP69KLQUCuNQ7",
  "key3": "2Gcz3cA6H9MrjEcSW4hCWDwk11JtX6Z4kzwpggT7QRgjdBfuahi91H39fcu1V11LKV4FpkfJ2SAQqqHoBUDwyh9g",
  "key4": "3o9ugnNWq9Bhc27RQRxVJSCQC9i7Asnnb9a36w8CY5fCnwRpCsVTy8V3oVqeWCm2xqp9NqzGL9qotmtYwVSft4Zg",
  "key5": "4GevjUwvUiuotbnV8aGJ7uNCefjvDtLzxhU6sdegwFZ6MaqMp8VEYZgaoDL1FzWNgatKCcvzha1BPUU9CStjGfh4",
  "key6": "28BdABdAoeqcDWpueehnZmE6ctgQQRwipUqcy9MJ2VhDJxSgN9xdnszABCrykuwRV6rZXVuxEt9ot1snkukDXmpt",
  "key7": "34P3Cy1QVhz1rq14R6k9rhqX9u9FukD6rqTMJrWq7hnNCWFDfnKPWQnghxvmVPeeUDknjyyMkTZ2Q5xAnLR6Dxqj",
  "key8": "5XWMArqiYUBcixSLnY5ya7hWPUwLYdFyed17ahn2aGpux2yeZEJmSH76w5i6Z1oDfdWh8USB7BoPmY8T6RtpvRmi",
  "key9": "4Fqs6t8XJftTftzJaqQJEru5u1Mc9QPt4sxqkySzLwLJeLo9kaS8yAjrxmcDvqt8idcKkxMAUofYsQDWacXk22hN",
  "key10": "5ACbhFSuqnxHh7iGBXursQrYdCvLDvxPdPv2gnZ1h9xYYzwJHfb6SJfAVJq3a6ux1akSKzmzENMAgusFZMyLU3f8",
  "key11": "8YERegfMVzXZgCQFG5WVgRX5U8ztKowvwkAZbMrMjttRAWzUmWfYsj46Yizi4QHve1Bx8fs91UcqF21ceBbf6uL",
  "key12": "55tyW7MGKAn5x5Fho7Ab3fde13WQHNjWrV9TdRtXkYDDduUJbD9cPtLxX7WzYmLmsin1NUHfGnRAUaJjyfKtbwjj",
  "key13": "5BqbboC9bSfMScfoyRcZQtpEfR7xP9pTuEGcBSjzqgi3jSYBUr63WxGyUqP9LqfJsPAa6mjD8YbiL7GKTXHdb2sz",
  "key14": "5ur6pgtsUBovBZCueRYdZRF3JseWW8GbDMdYNoNmTYsMMEsDuaFeESMXVMRcsEjezXo2qzS3QGsuBTc4UXqQoz3z",
  "key15": "Q8bu5yvLERfQBhBauKfbqEq3gtTYu9UizfCY266vn23tRYWdrTfFE75t2xEigVAMxTprx91K8xNGAVzRU72mEjt",
  "key16": "4n7ExKGCaMa39V6FVovKY5K9K3hK6kkz8K5LQk6AeTj1MKjWivLRvPRhdPQDpaLLFhZnqtRQSBnKvGYRx7EzQFVT",
  "key17": "K1H25CoAr5TXdCsMGwQQv2BobDUGE6ZugMYBzdJtrATLB5Vqh1GfDG5FcZ1uyDbLZ8zDiog1DwqND2GkY5a9Ps3",
  "key18": "4uiFNdSZZo7TP3RJESN43rtC7i6E9GEk47GwBEhaXR6evyPGFL9qEm48XTzovk69doM3iSqu3kbJUmio2pY7V64f",
  "key19": "ro36h3hh9TFYCoTLEGhUMzsbu19hQ9vKhcpUM3DfreYp4f2La4jYt3p4CLkW1yuNqrbnURjh3HR1da37UkJuUcz",
  "key20": "5TPXqHaDVpdHxSS7E7GjwR5U1zaDDjBZqVAzfSUrpUuFtTyzjJ8YF52qbHpYewomkZzTPUFx7ddQ2Q9D8CTy9kPr",
  "key21": "45fcH6Kvq5pcqg7TqmWvGCBQvp9af7rLDhJDgV79EqD7cij4qWwCfqxv1YGHznr3EXz2n69jqgdfcYK6gMMXH2NC",
  "key22": "5HqP8rjMjgBRkKVAJJWV91CrtpBkkGW3FdtYXMc2HpvrnU4483c2Mn8LNPW4ox7ceQyt33rCLFor88E1oiUFjcGj",
  "key23": "2s98kpx8ZukUZNVQ5iskUmo3v6RPuga9whswtohbowQUZjjgjKFT2vZhYNDLpLR2vTBGNg4ZYjdKydn1sSsY2wpb",
  "key24": "y67YxCLefDZLrbeWi3ER948tzqumnVqphKfbHWEvx5rzgQcXNjv6WSeumpV7GSyioWzR96QuWoGFxhiWBb9Fv6w",
  "key25": "48fcqh49P6MGNaVCHTLFgcLhcjRzYPv97pR5jTQYVMzAZEcYG9vPR5voK5c8KDHaBxFX27bJrZfZgbTi2Uo5sENs",
  "key26": "4qCLf5t7MFv5FVU3zcEBzWXqdzmy6STPTkegmXKhrGf1jjbx9ULBrKanGFvxSbaFEY85TcUTZkXsTW8oGPoZ6wC6",
  "key27": "p1MtKrxEzKoYutehCopfjC9QTpNEQphfGtKYNyjB7YqZfgx24ewzDnKTv7XgW4ztr4KNUQECSatybfj29UyFfmU",
  "key28": "59oTbmKcUXHDDRDnzfzPWSsmyF5fooHLPtmwgZnnj9wM4Dy36RPfpCCKvKUuLXe6qAwJcmjppPurpMcUqpqm5RXf",
  "key29": "VtNQBoakkqBzyE4XvM4bcUf8GQq7qvuNd8bPzdp2LAkTkhPSd5oqdvGS8YryMNBWgj1gdBahLvaoRrGoLn3zwe2",
  "key30": "3LJSdz2sCcdV2K3vLyvJkk9aoiw3m9vL8gZaR4TKY8jhDZxTzABVtowijDqWejy9868Tm7Woem9yqg3VnmaL8L1s",
  "key31": "6zHvaStmJzkUms8x44tacsAVLQH1i64LLTsmg1tXoCQkcaN2pjurS9JqG2vL3s1EiiPZEcXeJGvyjk1LGTyFG8s",
  "key32": "ATjhRUEbvMnyjY83Zuww5DaExmM5LBzm69im4CcQKViDsD1vZoeKvdJUT4Xyz81uG9sDfQDsy45gpFhxEYgRp2c",
  "key33": "2yABnqrWGPvQnitSDQfCHaAUAYpv95Hjohvy3TRvmrVzVphvnEJLsB9xsv7REV7xE7rp5FsKZJQ56SqYwfU24YTU",
  "key34": "4oKP7m6S5SbKP38FQu5RMyJj1cZGWqhefDtKLiCiKCJdw9js8rf45Kmyt9GXQFG2H13tkmVrMFDJYUKtb9BB4ESw",
  "key35": "29s85nPX9t4CJaiwZSXTeyPXvdVVqZZ1ymY11MDjCJgY1UDpq5pQw5uFnSNeXYX5Spv3WMbb9cDpAvP4NZ5kq9s4",
  "key36": "4en7uFW4AyJRwMPv3uuycouCKU6nn7vpza4bBNYrrpXGzVBoG42J4amKfTih7uXb2skoapBqvLTeyoyRELPkp7sT",
  "key37": "4EuVDQGuXYAiucYKegway9Nwpe7vWMgDEYAs9xjZecuqvoRHTNZrVL2hFFvSYu7kKh75aLdju36LaTaVuHjtGwrH",
  "key38": "4fPtyS8XfyYBm1wfqX8sqUcevw3cNkFL3gLfPp5vfbtUvjDcBxTmKfufp4WJoyv8eSs2KnpqoVKxUo5coF7XDdoF",
  "key39": "4FzNFaY5ejbyjD1K9X2qzBcYV4Dm2qvD2U7rGnmkRdMwcQR2ZRXY1gXHKhaaDvvGBW9kiDrrYAtJFk4JzCgikWAy",
  "key40": "2eRv48p6Wt7De4yPBCg97Ti3hm2keKzpBiEHDMkmU3oHLcpBFwx2FUbZhRtk4kSuKNoLYSymiNL7VmwYmQfiyKsX",
  "key41": "66BeTbpkH3dCFePA9mEC7GMcvcEDuoiLpQLq919KvAczBD37Dci3yidQVGnfimrEkGtwVKTwbdexECWGoADoYFHx",
  "key42": "3vkMZFUTcXo5fbWeEpoSuSgtQoXPzfx5Qstb3tCuhwSuKCUeXyG6qpnEbYEyjXCMMnAWDPhtNT726u2wei3ofAEc",
  "key43": "4yiYnE1hPHJxb3iNzG8BqebRVA4mu88T9WpgxXLF6NnatAJkKziomciGFttctL8Yni51bRnWiXG213McNAeise4R",
  "key44": "28vnY2ZsHi8ms55pahSSRbZLkkbw8NEsk1uURXwwGCoS8aTVu52xMqFViPoAMwmSs6bzAjvyUtk44w2YNqDzvVqu",
  "key45": "YKj2s6nU7xG59dNKMGKrLsYeGy6HQiTq13UDfFcwkaZUm1qB5XGwvEprr5Veof2LB8VmE6EGdxXJjLCFbbbvCSW",
  "key46": "36giyKARhSaYBC9boe2p6y4N2VerERAQ8dW1aXy2Q6tGfEzoYz6gYaVawkmfgAR8NgR5Cbz4s8CeD2wjq8cLyuFh",
  "key47": "2aNogQSmNn4GALxKfiT8mbyZ8bsv1K2stLbNCQHrAmkomPFXVbDcgc77wEZboYRBwYgUcuZtU2jGAsj3sSBamQAT"
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
