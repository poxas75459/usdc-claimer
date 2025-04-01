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
    "4ZPiuc5gK6vf2jFKZR1vUdJmu86rRtyF9ySMMqMaqCQFBVKqQPto8PyGqkbWZCFPvSBinysPR11AEq66K19H6uvf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FxbpFsPB3HqLvouzcrs1ALg278HrQgk2QXxQKb3GbjeaFHYHNwLdrW9SqHkeWHEhYvNTmhrQgL9bndjskaqgmMv",
  "key1": "4zWzy6tLDBHZHbKqs2MKatSqNQmoDh35ngkjc8Xe96Tv4ikYbXiN5MadNQ8d7yfrJcKn533johinWwhCFpBr1cBJ",
  "key2": "N5CEPgzsfRivMKA4tUu8ySDMxQHkWpnzmnYbEiDzUPCZv4m1DtLtkp542xfUAdbQrdRDy486AV84mBAgG6buDzm",
  "key3": "4z4TgQbJGAL7eQjGm1B4f38UBGwtsYGwvMXitNxNqhtkNmihxdWUnHoC5mWuUY54PYevyYRg7VGGubTspe5e9BtB",
  "key4": "5Z3uZXHX1W7RdtV58XSRA1h6rmuCyv6NVc4snH4QaFheq8SjRxakpojG2iX9CdjGAv4FEfLBCaJc3PKneCm1eAbs",
  "key5": "2BFVkK4ZB2EZXMCRpfJBCMPz1F1xtbXFmXTBXKUk2iFM4tEmFmwbH9rccj9VAJBkSSv877EhqbmTrxwUpEA3UFq7",
  "key6": "28FTEFFfemnnKaVjydpbnFSrWjJ41CBwJki6iDPjseySNHtJUdwswBzZfYJJ3cMimdsLRvhJciijJ2NSPZrDB1C4",
  "key7": "2KtNvJzra9Q8xXwde5LC4U15EA8gyjbw9vNp5ujzDrH7iPyDgRg37bjG9cFHTbTbJQj4pXLnV3rc6jstUQTD3j2F",
  "key8": "4yQK6Q5iTN9i2HSLZwhTDQaTxSRdb5zkdhLc8E1qzpTc6ziztFXwcZDjbEgeoZUAh6eA95bCgs6eYDs77P94yooG",
  "key9": "58JrLnDxxDrERMX7j2cjXSiX1uFkF8zfUjbk1j968YPo4V6DEvCgUBLQj8q2WNnusvLzvUQT6BRCSAqLyEF2awQf",
  "key10": "4KheWWTPgwCw5gHdFzhWiRk7XgtCVNnDQQDX7xfFrQrfoQ9RWkzk3smUYQd837XsZhjFC27h3PBgZZYptszuNFit",
  "key11": "46vqHApnkW68B7FyoHvJ4LXbabeHxZStceWybUxcNfdNdv7bxss8smttqCEYeaxVCb2BgCMTHVKT3y2ybZcgGjcj",
  "key12": "2qhRdGgcrCPF7S1wfWhmURcukrxZd37FNNwbwaDdnFZ5Q7yV3jcNwfPW7MS7cgnsSYrecxcsurG4CYAXJjM55xVU",
  "key13": "61KHP3bdRpg7oMxwrLN2xwbJ1n39Zz4WvFtXtz9tdCVPTes5tYSXzNL1Z5iSAsmw7TZa6uYRNQZLRHz6FqxTX3iW",
  "key14": "43vMBCuCna2akbPeEFbqgLW6E9jAR24ADiffPjBHuEkVFzGvjZEFedN9ydLUHR9wMxHFaAKpBMtV9B3gjTJBWeSH",
  "key15": "21VcLMqE7NgJSuAvGVZgw5xArwM5DtNvJ3xFawP36BkzUXrFYnpqaRRbs9oVm9L3Rx3C7oBq8VYVMWg5cPXKvNAZ",
  "key16": "5stXL7CbbipdG6ZbzsmVxLzaxc4upU88PfPrP6DWTbhWs9CA5ujFiu28tY87ZpZwjSTEUR1pnjpwXYQ7Gp28peZ3",
  "key17": "NKNy6vi6LwGkjspjTdi6NWyqLbj7YMXpzzau41pDcwzCR4f9BGtp6xTEgjjtsUmmx9V7iHQhAGn5SrcnW81KfFj",
  "key18": "4sznYBzuqfpz7Xe42aBNZXJZ4AX9shbRh3comNu7r1jfVDevJrUk9yToZvwSLmqmmG5UY2WMSN5eCfuW1MWQ4ukW",
  "key19": "5wQbhSRSB99TVbtmD3R2BsmcyW2eQ92AuM9AQB3FWTaPg3eLwdRecGLYDJwWfKfdPDQGk6WUw2HkQ7S5AyoUF83x",
  "key20": "rHpenjd5RMdy9AA6sveZGJuUG17HSkoceMHLNBh2bAhHLj6sMu46stYKSo3m37QVvvhRq4sDGpouDuCfBDDuDWj",
  "key21": "4PSWm7XaQCY9Q6pzQP9Mo5z1ypq9H2S5iiMz2CJEAbzhFHxFS2Pms69yCHzeM5QE3aEzixwn8VGeTJVgCsapE2P",
  "key22": "YxrPaySo3oLif1QpuNEziaeEyTXKgHg2kK4zX6SWkKwYPLYwE166dvHfh5dVSVNPs7nJMoEQZb6WA1nW5KC8fDT",
  "key23": "3vVuqXZz5ep3kYfo5zrEJRi2CFZDoS5Pf15VoAnsqgAwK4WRkxA2D9wGHWk9cWMoLZGkyjmZcUxGNu14aAKhUTGM",
  "key24": "5oEN6GKjptPZRTaHycKfQ5pu31UHtU5fK5g1qdmRqwWHvPQsByeG7QVBcfoXDYmQKe1MhCx1Cazq8tYNfYe8tDwx",
  "key25": "XF75eYZB4qf2Lsx1HUwzeVCsJwHAqaixC5xwS59AbtpJxtgsgij9Xg6Ssjro8nCc74uRiXXn88UQYPe4h5ALv1T",
  "key26": "kpymQZ7szNWSS37GCVYNWiipum54TkUkaG6t6nwnMt2e55gdqQNKDyR1hoK5ZDrj34WQhtd77M5jPTeBw1nnEnp",
  "key27": "2FmAdtPXWRy86HXnUtuUJxqNRztTgByVJ1gBPki7o6jwFQCa6ARnK8G6sa3F6VQvuuoRjUg9i8mxVAKqnpcydMyu",
  "key28": "RYMMJ3AtfuHSwHrguicSW2DQ23H5VEtqHJyD3LZ5LfYZ5pgPSDqXqw3HmjwNtw4ARPZnWkBeB9SGq85QFgWLvQe",
  "key29": "2EJGZSdVQRUzjPHe6DpTn2HhndFaq1muNq5efjyX6TKujgnAFdf2XwmAKq687pPTcVaRHyTDxZhJUXiTvDEG9ka8",
  "key30": "5uaPVKvfTNaY5PzUwZwWr9mTjU9Qddfk3EsVnkh4BdPV7yfnizpJ6a97mCr5pNSv3gHSdXfVN4Mi3kXW2Jwy9XdK",
  "key31": "4W8HFvBYbqnbghyWpi3tWNRV4YaBFSUDqREML5h4obvhZahdamWqTUR8zzSnh2HZvtGYxmMr6wGpNuJ1xS8vgdPy",
  "key32": "3R7aotatpA35c45HMRnHd9kS3pfqCtn4pyWMYtV5dCzqSotNhiivxTbJbtpJHUua7moLDBBZH7WJxJsnrFmeuZWj"
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
