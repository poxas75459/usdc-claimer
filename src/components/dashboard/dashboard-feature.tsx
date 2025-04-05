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
    "4zw9DyBsvjkv6k7P5S75wvWf7SVkWfyyZ1aSfcL8ctf7dhLnHDd9mDubZTEqUaBbycPfGAWxJupvrjx96rsiCDEB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WbqLBCdLUwLXnCuRCXBVYPeFVXsiLEFUhRwA3smMck3rJzcB3fyA4mqhPRQUdR9m8zHuaM7wFQiNuHZmUH26TEx",
  "key1": "2cAmVvHp5Hb7XMkiiAtmSBPXF74V5DhpbVeeWy1x1JJV6mrLDZpR4UBTEsMSMn61xPuAWD1DpKGhLrcoYNN3hXy5",
  "key2": "4R1hfo87zzZP4W3biwWemwPk87V44ENvWwv6SKMhsMyCsE1xyE3DUnU1Wi3M88gUGZ9xadSCV7cQx4xMpnfBus91",
  "key3": "4fTjV4oNhBRj44ryn6Hr9pvj6EZ4s1qjukkqgzHSHpfCzxLDvWyot9emULtLcgDEDC2vpDvWiyRDdT9u7C8mK8Tm",
  "key4": "4f2qc5Bs5jsdPGuc1R172f2yhVwA4ARdqm9X8TExK2ktHuPJX4nvZU2iNkoiz6gKn2dfU8uzdvGt3YLXb4cs9GXQ",
  "key5": "2jCxHaWxtLCNEgfXaKRMjnG9SqC4N3Dt2FuWjiKH1KvrWDtsmKk4nfEch9wV5E33AdVeDZUMRnkFBwWpFHQczwuk",
  "key6": "5ykrzgz5yLA8jmB7R4bVTHCkyYX5GRec4sgwgq7sXE98GwKfubsPU64rT9RqQ3VeU1dDcQSn5RRK8z4f1BJcqoKz",
  "key7": "26nTanPUtzpqxq2cU29g6k95vhngiiwYGxgE9o14jzFFZRMSY3uFnBsZ27P5gEuWJnFAPd1bJcAJ5jP6rmVbYb8Q",
  "key8": "cKG8WUUeHiL73tPDHuqwmx3tZ2ZryYFGHBv7CV7oy171LAXBXB6A28pbrwYNw5Tw3yhn3P34GWAfxNEUkWhRRz5",
  "key9": "tVDPcfGwmAHDdN74mBiD1TQ9H9hrQpL9EtV95J7jE9aGk45N5yjc95YYfq69PKAcg9nbMBN2hRiNRjz4kmRa6VN",
  "key10": "39kxQT36FdJTKqUBCpeswztkeF5oqr8hUhaLJuFJf6JNs9WoTgu2zX8QJFgNrUvceAC3ts4k1VvYHqyAy8XnxYA9",
  "key11": "5KZYihXMkzEQF57kJX5zcugFcz2obDaS5JvwY8hjTciKqj38ddEb8aoMErSNmsmxoc2149YYqFyD67jsco5oG45J",
  "key12": "GKGeV3ZjnhLM9CmrLe7bLDQRvqpwixoqs2KVm7uvwGhuRFZ1k33bEnBRuhq29afpQUhXhb9ywQZQHehzsVTGyRQ",
  "key13": "572JBicjiDXuAdYa9XhpvA7tLz54JgYsSxX5xNnwuGYCitLzDgWGmpNBWM6KwpkRcjhEwbxjqJn7NLjGTEEfPfuY",
  "key14": "2Bv2qjZ1ZzxdCfELbrS4dPPLqyx8wzmjnshQJFPBz1hKjVyEyRvdD6gTDZqoqpa36MaFn5iQ9UqwdBNxa7nckD5q",
  "key15": "JyjEmaQ5qRr8A5JjMiGLmb9YjBWCzbrB5i3EoePvSGzwSK4kMsiN1FTALe9NQyJyurMPTXrqkaXZ7bEj6Ykauhd",
  "key16": "2o81Lzc88V6Nue5pf2t6n4hDr1t65EsSsEZc7KGpXbKViWRJssPGPm7cyZU2XW9WNTmPkkJKBU1AqCCLeMFJ9Y6t",
  "key17": "3wXkfLR7GsBgCWFPVsN4gW6TgjzBqx67gLidsJ3oTT5uzgBj1k9G38eLWLN6t6DGhjBBKW8SjNKAydaYUNmHGYBA",
  "key18": "2eMzcFRDwsm8oWu6UFuirtiFqJ29iQyoZZ2X17MNFfCndoW18CVP1AYkPgQxpFRNjP5wB29arx9xjZutUHWRCbkM",
  "key19": "2brPiauwqdBeVbezaJD2ymfeDQQsJxNg8sqYowWqJWJtvojuiAYp6ywuo2CGZfb814Am1CrymFCVzGYFJEVqnba4",
  "key20": "33byjc1hco4bw5PyWDJPzCBGV5ybPJgjqhBkSxtLGkLzsYkxvg9woeyy1ECQnQgKh3JbMBV7XTwYyvZrdYGJoxn8",
  "key21": "4jdhPU8sAGcToDbGb3PLxUsaYmu1TaXbZDWPrHvzEmSgXSSzjrpXR1rgG1hxZQgqGtbRDWJgy3ZYXXGAfoMkmYif",
  "key22": "41JLx1s8Qzp5nLDJbWaRxRpgCdDR61pzaiFo6pEjcHwcfz7oPEWjJaPEXKvBz3PedQq3n4EBe8mPpytjXSS3nPih",
  "key23": "35KhUZCD3Z348Dt81fF6VFWYDwj1NfW6yDBCmdXstN9Cqwe3Zp194kMqJoFShzbq64Mzmq7bz1M1HxHKyc6wqJKB",
  "key24": "4tUKMTze4Vziay5t2sQM3JmuXTEaVpjCBsWUQUvGBNZR4TbFRykcjGRVRNAsPd8hGkUDkLfbKZcvud8deKD8wxod",
  "key25": "2xR98o2yb6mLyivwtCMZPPLxageh5A5xE2JpyYC7JbPa9sCxbqSWD3evmP7Da6VGLHeNUvm7JcM1pDwNaPLCaVz6",
  "key26": "32JBcdWkk44YyxysVEkdJSMKrSABEGzBwBkaa7KkGMEPyYZtnZFUbg4EUw7LqvPcXf3GQRU3RXHS6JfFpRErufrU",
  "key27": "52uTT3Nrjh294t9ysix6LU7a58CtYLzhKnmFdJCFJc46qv8j5QZ6uv8XUPhNrDhH1TkxW9xBU6akebcXhpwLYvHz",
  "key28": "4NqqtSqcx5RE3r6Lzv9m2TYm7g3gUdRGEpyXoUkpHpHSW3UwJKBg5Fkg6qddtX3C3SpT8zv6rU5o2Smp7xx3Rvjj",
  "key29": "5GDSGWvYGbXoDfEYaBrGEfqJnPihJLHYexEeMXYRj4VMku3J8w2QpYTEi1b9SZ8HwDze9vzRyTB4HtMEDBcXzgvc",
  "key30": "4KUJU2o11fhWpCoeJCMJjCDck99pj6acsjhECXWfi1XDBvpPv5ujCjdg87JUHHKPbwWqHmZPhehSibZ6FGAHUqKi",
  "key31": "5XfFXJv5g9H7Bur5hiErq7bSbQRuB1W3B9YDZe6iAvxHdjBcWwiwtxSSjnxSmMjZAWVzA7rRwNhYXEfKbyEXVCdQ",
  "key32": "3Qr9XYrYo5wCt3xPnVCEXxkGYKfL92agx6BSC65DUZrkv65UFnjX3k6YBnMLorwoqRrBCjRGMbuqZ8uPLQzC48cZ",
  "key33": "FsJvEANWxMex6LXnNLvmeEJvkNGTQgDMPgfFgapLGrWLFjnRKE2p1rebSdJDt78PLMPsDixPdbxqrXGVg7HtWdK",
  "key34": "4Mp4Et452yeSntjenGnSV5UJRzJikLm6q68AN416vz1AuerbKByzU3awuE9xKoXmyADC1KrCdEyGAn9CnzzJXK24",
  "key35": "4XAJJH5rHM4BzuCz3zto4m51hdpSsp2Gd2tozJHDSxJZQgGGWsxpXo758vr3c1KzEdEuQhijJXmjQsPdm5k2zTCi",
  "key36": "28gwneyzSLF3SQDxr7yqJpoPBKDDycx79NFgRZigk4u4N5qQ2LFDzr7q5yhZJ7bNvZ1HNdY8GGyJ6phbikbLre3E",
  "key37": "2243aQSU61ZtRqiEh6TWHnofQkmwFXDEXArYS2VqWHYLjVwUdx4nhJmn3Bwwxw4meFBvfn34LzWc6P9FFvo66hbF",
  "key38": "5bM4dLbrzbUHjpfyvwYRxiJu7u2VYrwEXPDV4k9NyQ49BeYiDnM2ZLf9Xomvf5KTHa3BU5nMKjrdoNzDHch8WutE",
  "key39": "5rsCy3zvCq7n2WmsQmY2NFCVmeDgPztZspVkDJ6P35HVvj99C8XVpZ9qp7ijQeiLc2mUQVZWvdQ15WBcsFTroHpT",
  "key40": "2hJTE8aroEzhkAs6eYcuvD4PmZahnAv3JKT2aVaGKfda9jEQ6kEqdvrZJpMvWWZP2XpzMGBrv4E7iRGrhdD3Cj5G",
  "key41": "4bibziQCe3P1XX22tgyyCEVD6e5bBEfiZhQpBm6kvsCFdq9PJyPwTvfV1Em98nooHdWxy3pMVjWGzBkdY8LAwUqg",
  "key42": "2dCo5ZMst7s2gRAQMqs5SYMbmpPGE9LVDJeLhjHHBmYECG771UwXEH9nRsY7TyaCapCeTkaqg9JBSiYB4EnX2bvu",
  "key43": "218ZJN5vCq7BHvJRG93EdQQosT8pR3joXMGQuFTLTrGCbBQPTUXJWidR7N2krbsZRjDHDu3UGxGCZ47r4hS8rfMK",
  "key44": "2w3WerpgANns9GZdBwM4HDLEV88QATaAcT2wWbZurHquBKzZmrhFEoRh5MbNskk8AYwDZJGkVLxNW82g5T8tpozy",
  "key45": "mNTdXosMHKTHC1RPqsgrXepELfMJXhjt8snEm95QLU82VcZ6hhcGgheLbZCQRmtT5r1ZJtiwC2a1rdwjnca2Us9",
  "key46": "4csoKY8rE1bKFRyMaWUmPjtWFX2uaojJLXJJFLbxxpbX6dMgBN38pUFyv4pryU9NUt73s43EL4ziSRcSypgK7pBy"
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
