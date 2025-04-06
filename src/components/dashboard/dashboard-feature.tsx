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
    "x3zreMd373CD4yGGBjEM34oh2J25h7zG2bLHZaTiAGa8RNpgJ4nx7xjeT8H8Uck9kCVU2ScYHyxVHqzSid7M13V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S6GuJqypgxaBnuyXRg35WJSHn6tF6GpdXLA6ADrCAAxNKUE7hwGUqfnv5y4uvC1UBXrJNaitKTpygQCXbCm47Xc",
  "key1": "4of33nAUHmXKTLhWHsLqLR668w3QAUZqdnYdox4aX4RVufdn9eT2vWCTghNkWSBvzTfqMgRKELkWW7Q32c5HqEGG",
  "key2": "5oShg9npK6jf1CxXCVASG9dvqCs1e2UpuAU3azfysR63dVYzqbTeNkYWVG8TJMwM9LG9WFdsN6Cqtd8m2L63REAf",
  "key3": "5FkZxB8s6twZH7TctQe9fVt4zpEmhFipe9ByrC6GMoCQHJUBVnbgidVMnhGFhrFwbRPJ7s9TbFFFSFDFch6wpkkx",
  "key4": "Uo9BgifH7Pfoo1YKYWzzKSAt4n2zg6TSnorttD2srynKQAgBLbt3vXEA83noUD8qP2a9mDqcKzSsjPHjzHcq32P",
  "key5": "f1B1PfC6FvfaStskJi834WoYkXKvNeDfuaFfdjN5HfTiNxTtat2HBB2q89KE1KVPAhoJhb9vXwySAPGSY7a5DRh",
  "key6": "674Ta6517oB5arda2TpzTTjXuLWrChp8cTDLLDk5R8BapJHS4QxrBijpQssncsh4uNyHjN4n3up6rLLwRuZZU57E",
  "key7": "3TkwzmqBC2wvQbHutc3foZe922q2BeoqoGJ9x5pwnCo5GcvYPVzcPFpW7cdRttAaMMvALWqZ23WvHWtoTd2RCzXC",
  "key8": "2z1Bc8EwCMg5c7yH58gM8aGmWoohzr5WDimXKCSonwnjawji5SiV6PD2VmRgJvRbYkWqCDSPWy2988n7985VuLUJ",
  "key9": "Fq3H4HVm8CmVaUBADfsYva3oRPSZGzqGTcodJFQYYsJVy7eNARicAiQU5929B8Muzqwo5VP2QkBwQTZ8iiPw9i2",
  "key10": "22tEG7tqDJPwKWe4jakPGm6rMLyo5aFwP7s9boyFN1cudWKAGQ6k1ZUCgGEt4wkssakNr6FQ6WFTi1gbpoJhJmxi",
  "key11": "2yD9Lh6AjfCivHMMowHGw1qUkhubGXKKghMMRBc4P5Po9i8fvzhMsDF87ZYaAtqTpx6bd1e441uyMUckSfeRdjfP",
  "key12": "3JanTbbJVD2JqSh8RnKq7E8RAwyovdeT6Fbiq4ySuNS1YdfKamQzcyNoULPNwDBqeyDfPoxBHoXFAAmeV25uVSYw",
  "key13": "4Qd91AiktD4EpvAJSyAu8BemmaXAZ2WHVLJPEaEUZbmzqCCiUgnkBQCFCucMnnW1j19NT2GWzT3fZPES2k4qAEMM",
  "key14": "4g73n79VGow8wjZtnpYSYsLSN7KyF6jtSdagpwVVeURvNz6DJe5Hw5eKTM3CxVEGoFNehcBe7iWuT5Xo52TjRNYE",
  "key15": "4bnZYeGqmasaP7aqxDPptSie8C5dEP9S54xHG6U2uaWzYwuoWER9nkjwgJ6m63Tx4sV2SvXitvHraAVk2cZxF9Cz",
  "key16": "3eVzeoySmRcBPkgpnSVR5g2BRKHrPzB7sjK4yVDeNdKnmv4dXreGdk5PPwVB9uB5q8NqbXsouBCeJPeM9FmCwnKQ",
  "key17": "2jqEHgv6iTYcjmD5JXegXTTdCVsFbw629UnhgRWY5kqiTVjNEe4uKGuxHXaRrQ5euFCix6QKMg2sfnprzo4AZhRj",
  "key18": "3s3FbqU3e6nNL8EbRMcAAq6kA51KwnVcUYjWVevVtw9BfD7dWoaZSVBnW1q2ZPVEfRSfSLcVGx5brDN9VhELQSVv",
  "key19": "voiW7nZuH5Z9r9KNUJE7QmTdLvzcoLzjaZngDH3zSKY8zFX2HK6cPJCiHPox1LhnpgrKeoZKBV5j8okZPjSb89U",
  "key20": "q7sfEQHJjAcVePVQCVipDftMSwtoyie1kX9s7oRzdHCp13gXj6pvyhyqYSnrhsraWzZg1ExSxfFM6CoewqA48Zr",
  "key21": "25fJawVcyd2THH7TsM1MkqWsewnfSZnYeDe6gAoMVb5PeSrkbB2y3xg7iMTE4L5Tg4iokVCHLWxCS2gcrRBEUi8T",
  "key22": "sShiJGmTGNV2pJngnhVAs7QEzwfviaBcTTvShEw8GQ8L4m23irHMHsd2S8FD88kpbW7LfK84nrmJkWBQYKA5wP8",
  "key23": "4eyTU7cWY76f5nvZ7M6YFyUY8EDKoBwc11PoZguCJ4o4dzQNd1isdNjFfEUh2fsEEDWg6WAPWtjBrrM87dxSCYJv",
  "key24": "3TuUKnzu8DKuqZzLno5hRgTjx5NijzXC7DyqqLuk84u86bpLVzWUqAXfS5Zy3UgitqXKwS9sZZjzV1q6dEtahd55",
  "key25": "r8qjVWncj6fdnvaUw3aNsWDSEf3C96QjEM5QpGWAqivkTh7gtH4edbP4goCSdERjp4vb431Cv96CSuTHdE2noxX",
  "key26": "3V9bvVXTGpP7Yay5FSUMFqAdodcnByeoufFkYiYn2vRHwBHSGyM9hyjQXGyjyiSi82QpP2kjZf5DCJiZrkA6XjAE",
  "key27": "3cM9q3UWaFRwXxJE2cwwWqvH62N6qbqhDKGnWEk9tRoHFbNZPGnftbSu8Fpo1uuY1BTNstZ9x35o2fYUTYiuuts8",
  "key28": "57YAx5beq7bxtvbJ8dtj8648adMxE4kw4U7NeY313jGoUk6Kq7FWBPAC8HnMdNouiQdor6tXBW83FjP7Wr9fcZkF",
  "key29": "5NsnKRHRM7FQXUDoCpv1SoLbVGbWn84mdoCBbgMArExRVvf5CEBkyBbRXCbZFxij7Lh7Zyfx1WF719JXEVnStcTF",
  "key30": "JATxgNgozyfk12xEE2kmt2QUbptGMUbWv2YKwr891fiVECxkCn5s7kzEdUs7YvGqiLPFi26x1Z3jWbvTmRYAVvW",
  "key31": "4KMW8Cz1Lea2wtG12NkAHAWNs9VJBL8uLdu14rhkJRfhxnvfYQXJJe3QrAnJK5wzv3rh91X8sTF715TQGmRyEthb",
  "key32": "5khHv3jxDWiM5xrLh8BrLzC5mHHdsAqZKp8XV8e2Q4Yf7B1BVCpenw9uiMjy2ZAmn85Kamm3iPHXL54UqxVXxXXx",
  "key33": "5ofvBk57S8YMGFfxeUGuSY3jNNKXrY3hVZ5LjtKtyEhSZRfLFyawaeC5oqLQZo7N8vYaDuTVcxRCdVB7yGbmpahu",
  "key34": "Qut7VPCyqoozEftqVUst9Zj7SQdure4V8X9QSn5Dtvk2GJvvJzRsjLGzU1ccsaL6Ex2EYhpGXa8EPVLfdGDqjLw",
  "key35": "Qfvu1g6gpFHkAwufan5CHKcqkeX7xPS5Ff3EL5AA6a2Fcth2tZbeaBSGTtHGqEjQ6xBBsti35rsbyeyVcgLBSTU",
  "key36": "5AJLahfncKJ7fAstSSDcWbL78YABkJ2K5kAW2jzeYEVUYHEyJVmt9vaZm8ahHkj5W7QDjm8pvbkA6CspBJEkotX9",
  "key37": "5VsDQcjHVmhMauP4nEnCRgMT1intvjjhrPPdiALH8hN5kxCMvm5Cmebd6opdbrdPhtmBoyYGXFYMXC8ZkKEdm67t",
  "key38": "2mQP6RCatJBMC1z2XiFSAtLdWmERA66z3TvRHfwkfVb1GJS3i6FyANigUoPhn677iGcSApyvBkuzX4oWzWaLjPmV",
  "key39": "3eP6GWyCw1ZXR4ezGA6H3fyWTowLhX4xcUD6UQxhJR4c75oYoKZw91vSdnLyLhGtRR3do9zUDDkJE873KfLi5vyT",
  "key40": "2WePahcy6yeqji6qNCJ58DXZaAFNcgZwhZMSJdoPb7NsKwxGvdE3x79QA3qtTaZsH1C6C1ENT8RVLWD4Tk3vKY35",
  "key41": "3YJT5sxnEYV4AkjkMFbp3uyeFMyDd8jhH79XKm3NugoMMn6xts8VH5pkRSkpxxSLrLqNJGucSXe3Yzbad4YyJusy",
  "key42": "8ZD9NmZ4vF1fGW4S5LkEfia3z4PZbDY8pSpQ9cb69GYQHtRA9NkNDCAGQLcFJsgGu5WESgeZR3X27mgBEBZpLgQ",
  "key43": "3ReCqbSBRGuVxxgFPWpKzcjS2DRjyRYAHSuVXcrJwuKH6GvYSxJm2aGPmhJzssXkr6N8c74MRMmnzGhCMoj8G1qW",
  "key44": "27ZMUX8wGPpxJEkUg9uEHx7RyjfqNu99ywWfV13p8kZXQ9N1o65a1WfCQpX7xPFrUkLz4fFP6ZwypNe2gxhTPyyA",
  "key45": "5yRGpsBB6rY4LssCG1RQYcozRZySQU6dejKTEoJwkbXCe8AD2UKEPxRxnqAC2EwLaEHa71pQ6Gj9FsJz3DE1i12V",
  "key46": "558MGuKfh5c5hp7xmDMK1mBpL1BbHiZ3xTs8hBTwByt2pxzTNxfrvpbCcgWqFs335xrD5QyASb52V8XdSiE2gpPb",
  "key47": "3Yt6t533pT3wVJkJzceUYg1hvuNnU2KDP6xyRUuf5MGE49GW1fsqTTT8mPVuSDriZM8HyuCDM2BZapUWz814XgPt"
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
