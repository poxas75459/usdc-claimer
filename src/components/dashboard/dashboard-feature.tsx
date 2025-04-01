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
    "3Trd7W4ucRBAYoQEot1goBSW7uHJUPyvRBZ7JhBSYRkE7RmacbNHkDZwwH3A4FArFepYmKqzsDFyMeWn6YrLHcho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eNpgpjRmFujqL1N2PngXBiQyVsZjHJ3Pr9ipfAsYEyfJuwfSpt74yakoMiigWEE1iZ8f55r4AVyfaHdYgHz983B",
  "key1": "2skXxM7AzX79cth1USry7PxbcBWDnU7G9Sjde2dwWDeQF6dkQaafhBERTeu4VNczUv1kFrz8sMbQUM51L9ouZ7Af",
  "key2": "5eWsCGbiyFAX2HxAB8nGTj2vcZnUbq5z9MTbWJExFaBUzmKW1nkGmjaiboa6kUEfEAqGgjKHTMWPcmQSn5Mp1Xay",
  "key3": "4SavhApFDXDeEEYjhisLoGk66BoVgqciYDkzPz9KXnJs2Xy5wCSHuoXHAZb6V2J5yCVAEBtcTbG1ac3sRu9jZRqd",
  "key4": "1GBXMm2pRP9mEcP3Z3DGoaAUrsYH2za8sQQ9VQ16UFCQJ1kt22Y1ZuQUiNCPjqYDeto74ZZazU3pN4N9fUjzP89",
  "key5": "2cMmueZ858sG84pA7Dpk48i7JVwaH3HKVoGB7ood8TshpQso4c6HsMFak27XmTR33vEsmN1sHYRGwU5WnSkiT6nv",
  "key6": "5UYM5ZesQVJkM3LFGvGU32WYzFTnC21Ykym8ax53DFWZBAV4DZJFcE3171hwiiHfeYeWC7N5scDAPZX9mFRuJFVs",
  "key7": "3xv6ycjvCKpbM8RP1CUbatKN2S1sVka1kKWPrQRbWvG94Yg16CyhdJK8JSgkE6nDBbNpJr4J2PC2oNfVRcRAg9d1",
  "key8": "3tggEexoi6pkUoP8AsKzbknNRG6676nrmqTJmLuHgZWfNTyjWUV4ErwYENYXToCZ2c1iaK2Sbf4rgzE6UsCRHbUo",
  "key9": "3gkRa9ZsHTBHf17jg8qScx5qxdUUSdwM8cCe6DroW7ojiPFyx8cAyZsjiaz57jV6u99TP1jG6LFdHGLhGuzRqeVS",
  "key10": "mDM7uva66ijX1XTjiysEg2R33MxJvtLujtHEU2RUoi443TNzgeQRn8PD47eEEd7aN8beo9bVfXm8iw4D8VqqjYR",
  "key11": "2aQRNxmq9Dc5mDzSU8jdRTVQLwebpZhfboMhabzoW72jkrvHLVcbtYZXmGa6sU5yx4on5rV29dgm5Zv8JTrbYzSE",
  "key12": "58VXpMAbwUZZ1Z4Vv4HQwAeRZAkxXkxZ78jyR1cyAwhwW8NEfTprfQWDyv8kzgbJG2Uk5YyX4G8SSSqMFnLRqsj1",
  "key13": "5bNC54VbKNUy1dFFX8ajf2H4TnTW6GXuVPbzktp88ayKHXjuMZzqthdFsnBvJFGo5jJZfZBEq7Jgu6JdhvEYhzVC",
  "key14": "2v4oRJcrJyaPQ6Lo8gm8DU8xXtcw9gJdFr8VshYCraxFxKcJMgDDgfEUs9FRxYFZ9e4pudse8EhvMZpRN56hTCcb",
  "key15": "2PyYJwzmZPnJ8VC5XPVCrMVcq8BWy9F5RXjSF7ByNFxTvq3z8AkM3226983jcXWjTRKSCXS9cq1bHPYNCeE4CGNY",
  "key16": "H66MpD2ijpkhKsj7ZxaJR7hMYuGHjqB48cVsyXMxfkoxq3dAPhw3JqvVz3ayTJCZy1TPUvkt6qCdCsPkibybK8q",
  "key17": "2vb2qjWKcjAqi6xPDxQTUznZghysL8pnfYNhAQfwUn7cNqKq55nbyXqdEP2A355Jcmpv88C4jCWun8f4PnR2ezhL",
  "key18": "34wfZFFqMnGRSqUepKyDyjfqbqQiBsWYkW9Qa96NNwzVBkfoyYNNdXHH3Ad7zSc848tsgYPDbBZ9rUKiZKR4PJ5a",
  "key19": "4sHi8ZY57Jj2gv5B3bmWBenjSroNBzbrUg6J2YJqhpcd2qJHA8TD9MhHZCt7u4msnWMbDGRFsR2XMfBgiFL8gQq3",
  "key20": "3QBPdgeWDmNjccVJBCNpsZwB6RhMunzmAooQYuyD9U1nntKZiD8WSnFaPEKhPr8y1N81JQdWFvya6JHgsUvRMBBd",
  "key21": "59jWmArWokDNRQ3gkmP928oZ8epg26TBoQzbwVT2kjHE17v1NbVU6wD8YtWnPD4TW2fZjUcpNDqRfuEwFsHhcJJ",
  "key22": "4zax2ZPanV3Uf5gUoFAAKUXziFdo8mAz7TxFh5ei6Vmx4LUbzyRsVhJGD7L8Pvq3bkBxkpNqj1KenpL3TkGyuXYX",
  "key23": "5FMtVCujUUJ3L7MiGRDaHY3esiJ8uVVX1y6Ssx9mqyWSJXpb9uT9jrGUBTprxixhNfhdc2rEeUFiQwsSwUhcTuZm",
  "key24": "5Sz8F5dmkWLjY6cVzEgqUutJCFAW8L2sQrWgE3b18g4KP6Xg8oUhVWBvxZGsbBTcE5tiVB2VFtNYaqRyTakiqS9H",
  "key25": "3CfhnnSZEnasr5PfKzy8FRPQmnr1gM7UHFBodTvak23grY8LoV8JifKmThUUpxWeE96bjDvMrZLZhz3YSrG1S1wE",
  "key26": "41P6Djaiu7g4qWsjhrJpP9hdKR4TsGkKdRWwRDViqgApRq11XJ1HAsmeRBrjiLXFR5c8hjUf945sbx7H5RfKmk8c",
  "key27": "5vowbwwag73RTs6bf9YQRycz6JiVLQhx9SJv46hhkgbGJpR3me6rZ7gnfmHxGrPfzPMoHhwzduc8pnsNyP2SkKXx",
  "key28": "2osVmPrHCQT8C6d3XDNXPe6FPTSaDSYiEHgK75jMvyZVxsiZqDPeSLAULMMC3bDPgw4x7CBJpeXcTeRe2zQZWok4",
  "key29": "1NTqRLi6TmhkZZ9V9MMYaaFpSVrgjfEB8RVjLYjjhEQFSK4TdjJB6giiKPKDNcrkPMTC1C25fQRQtuWqQDo28C9",
  "key30": "5yMoSPEMfYzLMNt52fadp6PT9BoihcL9pE92xQQ9DwdSk47Wm6qN7KTMac6eWMJEqnoxirdQaubRpAdEnRe3TSR9",
  "key31": "5V4Li9KPeZLq5yd6Uzcg3ETm5hMYoEcrLxU3SkFzcVxmj27xvGvxBAu8aZ99CvbGrdMgM1NtJKotXAEXPFb8r18C",
  "key32": "5azNgHxZQ6ovNvwacz9FFQemTWtWXt9EpC2BgfeQCALwgSzYaU9dDh3oN41RAB5TJu89KbV8pMFAAPskoR92j8M5",
  "key33": "2pU37qH33kZJ5PzobXXt7hJ3U2zuXvFwHVpTwQ8xnCL6Db2QMDqJsquQ2naz2S3TZyY4KgbJkFHZd5VpEV7MQxVM",
  "key34": "23sCNSoSApzJUKNdYvEpHcKoTG26dZ2m8HkuZaZh3DgbyyaV1vymS7Mu47tFEhDCVoDonmcVTH7HpUDfeXPmCpFb",
  "key35": "4RK437x4RM8jmWGFnmgFwEAQpvw8i2BDREt6Yrbae5rX3qfpWZ5jHUmiLhNFBD2oFufXDF4SHzXypafh3F1yjPu1",
  "key36": "5zPSe6kGpwFTRUTjzFdzhPFjeMbbsdxgZFTFAko1pSZBYQgJjfNSpYf5ASYxF57sqynTjMNML7CmnyDkV6eYtCyC",
  "key37": "66s9wuMMN4QTf6XDnyRgLAjzKMxzGa7yi8ziUTQx6fS9xhzbtMGBUmVYq2QsQM7f3hsAMmU7xXDmYN9CqNmxkQe2"
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
