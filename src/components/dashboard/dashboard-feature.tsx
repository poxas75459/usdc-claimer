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
    "2WXQFCordfMh6dzWKKAqAQh52L2mNmhGxcW9FuykybmQNqCFHNywGHRwTEsezgr9ejmueFbzF4pPTfrKZJJmeDkV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kKPyUtFrzuiSvXoayjiFPUzHsgf6EWGmzYxh1MgLhWG9z8DSRGoMSznqour86hRd4Emh4JY7YXcZpsgySxbb1HQ",
  "key1": "545GqCrjDnZV1b9T8Hp3dQ8ySMc77x1C6mLcjWTNHUw4LiRFE9koLZ6S2GkSxBg5nw3PDX2x3ErD3XS951gX52ww",
  "key2": "53wtPxVkjx7Kw1B9DeKJ8WUKiF4R9qYVEgc6u6iokMsGvaVMDKHC1pkc1Brxn7HTwtRTn26v8FRADixaUFqKHJxU",
  "key3": "4aggZodcJtM1SVk2Vut1mQpjdpb1bQNfMyvQNzH7PEkXEwCbi9UubPP1C1FbbAK32hXGPnQbEcKt4niLXjuKpqnL",
  "key4": "UnVduZBTaGCh6qbnmYZreaZSqoFvn6TtSs8xnDRZWbkCMmpq3p4x5hahGjReTdryK7VUWiwohG6X8FFJP6UoFmX",
  "key5": "3iYXceQsyKhbNH1zE66zcd5X5PCyrS86ZxZfe5NffYMgqwAaVm33Fa7w38jDmALJDoLo9MK3YC9XdBcTrcbmUcnm",
  "key6": "4wVe6UxMjFFWR6boWBywoTq4PPe7WK2NyjKLVSojnsuf2ojuTVh5HxWWac1WTJjUVXf2TBS1Ay6QzoAen7dDzv71",
  "key7": "2tASFpVe7w4XL8Ag6zJKxtCaCr1EMZ8QGJvpvjDEwb94Qs81myKasZwD48JB5bs7Gt1eaGRAKdNsXZ6nv4mpuJat",
  "key8": "4APQN6KiUqw9fFQXr9cypyHY2UEBnzhjhNrPaDTQpWPJpdkyV6Paht8Uqu79FEWAz2C1AghLPfiSvSvSafsEAfwx",
  "key9": "5cLFSCesLiVEMhvcuPBaURJoPELgRXaBY3YY41DLzUxck9e6UCKGw9nyZU3oxrF8HXKBCRMJQcxdsdNLicJ1o25Q",
  "key10": "48Y1F95zFxfmzwzAy1X9D9QuzjMxCcgwhPqK9h2Gz6XgB5C9ecZRgANqwCFstNVCik8pPp88V6nC3WZyYRJtHNAx",
  "key11": "2au4g9Uvby2YsfxfE2Zovb7mekmD2n3EyhgD3iDSWQc7NPd3BSvxq3oY1ST9PUbuVdatBq5uWhUVKchvAYzABFMy",
  "key12": "94u7oAxEt5csEHXX1mdgW6pyUJXyYfwbSnfQk6idRfSLhTePypzojzxDYdFcTM339JEQPNgcUYNvTeU1bDKrg8u",
  "key13": "BdUKzJfaUfvzBzZZi7M7FuaUH7nhy1XqrXaVR7cBTf7Q1ny6TMMac5zM4Thv1gvHsw6SHP6rUf2Vx6iCvTdnNpe",
  "key14": "4QQokG9w8R9VftcKZESSYDWEjB9gLYgPhvNbZpdVSfHjjkfnnA2XyaVHF1eajJE9Doq484NRz1QDj9eVSE7dMwDF",
  "key15": "h9KY3jfbJNnRNzo6KTJDAAV9ANPe2ipH9T8rnfpzKBKgeoZbhVb1uNWUmF5xpET8Eq5NPBZNb6bNkRD7K7N8PXf",
  "key16": "5RdQMWNC7qXmfPerQ1tNkrEXwuRYVtPF5noZbnwzYkXLGvsWL4LiF7kFfAsCcy6EhfNMPs1FvMcMKGuQsxtrRAps",
  "key17": "3U4uJz5JuHCHosXNHanX1PEdckq2RvXHk6bSTRgpwwubLwADvEqxbDdmbhRFLWgNXgkHoz4ej735opfgCDs9p1o4",
  "key18": "ambCkRXQy1wSxkvEwyAsNZ249smpN3tS76hidkeUNsivoDMUmZiAfFLrN4SEzMtsrahREEGWWbAFgnjweK64ZWs",
  "key19": "2oC32SYyK7MaegkRCTtmjeK76yUZEA1okdNivhq9yKNehxfYUiBnwg8qFVuy5ozpiHNT5M934GGJLCzsN1uzecZi",
  "key20": "2Yo8NzBvbokTXSbyH4Mio4hWcS8wFpCa2ksupJ1C7A346RwteDtjeW96fGB8swrnt1WXZrzPcbJmjaZFjS9Tgizg",
  "key21": "4AsoWpZNPbfwtbcFCQWct5XSkafqhs7g5G39HB7psrUMqk7GLVmjRADytK9tRKKnNHw84J6Z36KAp4kZfUFRPXtp",
  "key22": "2hxHcz4ron64rSZ8JbKBLdPA25QUfuN7pVmRW2Us7NEiGooFFUL99T8ifCffUEAJcycQApD1wRTLzG1mAGBP6ZQH",
  "key23": "XEWHwo9ryZGux2wc8dWd2enJ5zkNF3rJj43chS7HPR53VbaZTKedpug4s1Hv2kMm1r6RfcxZ4T3sozXfjCK16PG",
  "key24": "57o3cnnnHjzBUX4F5NbxzyTBWPGLhSZY8bEav98R5VACaTLZ46qDiAQL7CKkSoEqWrMdXxKr2HedapsJc1KgGgm7",
  "key25": "2dAB6dda4t4ZSnPABFDkSZQC6QAdMdkebTSgSCqPw58Vj43jgXaohAXyfg5pC46Mu33Cx3SKF5oGekWaHV1yf563",
  "key26": "bknMPrL5Yco5yzurbUwHdHgeiYo5pube8NqZCp6Ze5WxMTZWkYK4a6ZJVEknUm58PCyFFnm4qrarZZNRj1xY5Ky",
  "key27": "2aUEphoCe8qvbrnpbcmg3G2xAJEY2SNjTjkt9i9f4FnXA4BYEjfUAWzFNwnYut4pA8wtEgAnD8Jjx1HBwz4qDgP1",
  "key28": "49EgEpqjhquuVfGPLV2S3CSvfWHpqfcC93MPCF4p4G7SqeBFWSWCynDYZP5xgm6jUwB7S9B5F9DRJY3aU4ry7pyh",
  "key29": "2HVhKa7aUh5mejk7VvAi935TdoFU5yyMU72ruSpqiTxPsduGfk1vx3a56CnbPwWj3vbh8nnqcPEoVnxV4SESqNK5",
  "key30": "2qtuEPy2o1CEycGei26j6wF9p9ie85p71SGU5Ke1AqV1MW4h5Up2F3rb5mv8f3pRXBVgTzgcwdHepPLC2rSaDpGc",
  "key31": "xX9eoFGcKNPV8PLHMzUD1SdTSiBkJJJPsEJCvqm47wEuq1cb71BSL8f9MYh4HCxAz9gDzm9PHMT5sT8kBzHkD5w",
  "key32": "h68mHaCEM45X7URkarJyQLTDeA3cgs268agLLpcHEryhGm2cGVanXm2jirAEUY6HC1NhsFToRyWqJgHzvCHr15u",
  "key33": "5bm1QwkZ5PvJHnkcBNqdCpqTtWpGcP78h3iyKsrcqfEDnT8FJ5PLApwEjmk1EB9ByT8cUAvmRMCT9EVCryP9QoGt"
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
