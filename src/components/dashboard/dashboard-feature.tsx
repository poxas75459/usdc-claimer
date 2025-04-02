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
    "3kCmsd5i84whS7eNMbVbwBDy9NS9QEF4jFq3H9eJEy4MSsWzCX3PpJpdxqFTvxEkQQ4CWGKoiSb5n7UoijZduAAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VCfgNGcfpge5HVTqh7wh2Ycbk2fhDbjT6hV5KnFcruioNqox2qT1mMjz2vXyLkQQqsZ7VttbPpoo6tJVtMzNnQb",
  "key1": "5bgziVQsQSPgicYRBqAt134br6GjUnjTesxUiibbCNK9RgnYjaGD5N2prEcr7JiTreSJ3WNW6szs8FY3seQHuPFi",
  "key2": "Vahp5pYcM2GfDLaDVsks7SbVbwKDt4mTYe7GevU8CBMr6o4Vzfhv1Wev1AVwNLtrZqptEYYKC2HsTNG4pjDXvew",
  "key3": "2bYqBJUDwepywVXzQyyuWEnBtrmQpCz6CMGLvGj2iaHxaV5KayXmyP3k4P8gnL7BAT69WtaqsXatEpF8dGnHzfKf",
  "key4": "aDmr7j7m3s23mjgHPchbE1SwKpST5BvvJqzU3ZPy9Qv46fpUrvHNkAk6Tn8K2W2FVTuxUwTdsYg5yYzAsj4ASeP",
  "key5": "5AgGcJH8deWVPduB3gWHrvoJYGweWWumcGEskq9m9hzBbuPU9mBegQ6G8Ab8C2aqV8zKVUA8DnF15jKBYwwPutyt",
  "key6": "ThQYbrcPhn7W5DS4FGpGANGGLKZvcXtHAV3k1YSZGJCzZ5LPKQoYNqhVzj6JhjSPLxHaZhXS3j7yopfUGF9yw8m",
  "key7": "2mnHF4gSeT9p6oMKi1JM4g7cWDUiDqsP42vStKyJDcBU8YRFtDic2uxgC4EcPjqXiVGAnr85fRmed7wLh3b3jWz",
  "key8": "4P36MZwBk5Q5FDwhzLymiW4Ja3A4mV242EV4uZVxWBXz3tyjrh7ZeeDiakhKMVV1wZq3PSPR22zMNfBoAriHstSo",
  "key9": "3dGA24mbKkLd9URUDGdiof2ZBYWvs3BQs3sF8pSoA8iXbugv694cyj4fpXwgstqAFm6AGZ8bjn5Ahw885c5pGhb8",
  "key10": "mk99fmBm9e7TjGKA8ATyUgs6vfgV67sR1pntpE8ZFXZ2rAdS8BVAkqU2b2Qz3BKqVvVuyiiXwT2Z5q11eLg9skk",
  "key11": "54rsfiap26w4EZpLUwqXUVCK6ZbPD5ecYY5vs3gEEKgm6BJYHNn5PZ7ML1j1yQDzhxYCDJM9HhtyfQ4jeDanzdRk",
  "key12": "53BKZEjm6ZfjGmu23THvJ8CRoQeznD92pYBX15sHHdMWMoumdTc3ZtWH5giL9KAG9BkadQZ5sriyQgJiAtpXfmnh",
  "key13": "5c7dZNZXvH6jzC5z6p9ndrojcg3pqNWfooyTyQx9B4D9XVmNZhMchBgBTsqEiwDp3Zgds18bouyhMsVnH2EwzG87",
  "key14": "5HFVhEG8GAfFQgrWddzsBYRNDZennJwnyWciSHkgH8TsdQUtGMx58NztLHxrFtoeGXisvnVYQsHpRKgh8cZt39Vu",
  "key15": "4hN9Ux8idHjFMYPfdsoYDgqT7Nz7mmLLinrYJWQFPU6antRJoNnUqfJK54E1DWc5FCcpzarT4R6Fkg2QXbw5HLJV",
  "key16": "4sp1iBCjoYzG1Qow6L7rSs5BNXqCoKGUvFv3WVJsFXDdvuRR2ugMEcfe6uXsnNnQdbSQKEJ7NgfuQiQpiZ1yfgsU",
  "key17": "5v5Rof3DFMhjvTfkqVCPQTM93n5VWYmAe3SrNEQYBiAnWimfmASsCvJ1kKAGTNd8Bf3xy8THMXuPVRi1rkDPK637",
  "key18": "4cJCn4ypTfPt2pReVAGM616YwqFMpb3rqD4Er9DHSw4qVGmcjTSd7FqsVLx15ohcWQDL6KFksNMShV5cSHCrbM3b",
  "key19": "m9MRMQszygAb1A7C4qw7AN4mQYovv5DEpnm8FZpp1az6HERusV9qznbwDYGU9eU61vcFwY7McTtQ2LomD1FPrfj",
  "key20": "2XbDXRgUt3FtrWqLC5SW3ZeWL5MPb1PF9YVapUwaieRyZg8CfUJfYPsAvfMjyKHk57hrdbjuLuYNFxN5wwbExUoL",
  "key21": "5eL6wE1dhEQRrsNujeEawCdVPUp5DdjXRNMukrBBZwjojaL7qi1Uq9CZqBxFPNRAYVmo5kCeGyrF4hxbh8Vkn6mi",
  "key22": "2FKn4GP8Dcorc8NWcHgho3xsxGMof5GZtHU6p8EAkHEc5iLGuvTeGvD56gBArUsqH9Lk6TtzfBaMkJuyPm98SFuw",
  "key23": "4KXwhpcN4GJeBYAL2stJiSfb98QyhvNJPtFv1R6Nzd7a9gUmc2FNmyWhzfLjuK2BHTk3nDo8FDYNvnsApcdPMWfm",
  "key24": "53RYJKJEDekxz7tggK5Cj4oHNPMCkKBAMTfLd7mgMywDoLBRVaynbdbD3bN8xdoxEDyruoWHNQGjrnjHb75k8gn7",
  "key25": "GixYESVq9zdhyUPg9AAnhirnKkHwkR7Uf1hCad3iyimzWHt7hKSprDmz8B4zPuxGynhJAfksoKvQJUY1e8bHioH",
  "key26": "46CdGwB6Si9xvsxKSM27GAE9WEw1VQsbR4wrxQNBeCa7zrCWHLe9mXqEuUzvx9d7LAC7dUxscFoBMJ7h8pePdXV8",
  "key27": "5oBETov7iH7wzqsJQ6HSE28nSLbe7cU8ifwMviVV3DiQ4JA2KYqbyid4GfmDxiDQCXjS85BqhvqLGJfA2jFukaEX",
  "key28": "LmuKkE4Pzroyjac8pgM8L2u3XVFoXWHH6YbSdXztBTfWYT3Hy8RRDa9TTvzUpbQAWq6tZ6sffZBkhRXwKBcpsfC",
  "key29": "2qWbmTaRntkCX8kNASFD7w6MGFW765hJT3tgWBt4be4tuciQE6edYyhn7K4yGe1od4uie6NP4q6gEXXRARgAxhc3",
  "key30": "MKNMYNuHpTMnfQwVx71LFz13tvVknxjavTTybKCNqTMF81zX1ovmXDwSkxyY1NowxGQz6XcoFXN58uHtWJFBQ1u",
  "key31": "5Z8dx5cG4tXxQANs6AR23TyFFHzZyG86XNSjpWiUyEv7kWRzyyqayJtakKDSuumDhj3rA9P6wsf1tJJF3AAzDGE1",
  "key32": "5yHYKP6iPW14c4efMqRMHrDnuDHkCVBCPqkwxM2C83PGQLHCagXtDwktDMw3XrFbnfvYeDi2FBcFpwYKquG4HrGN",
  "key33": "3BCNW2WXyEmbEd5SZ1ZwWMJ5Np6jCeHM3baVXaVM7GXKki6kZnFfSHaRcrWR6UrdTGQf81pC35dnscZBTc6nAQ4o",
  "key34": "12stabPGrZkQHwq1FECfFGfGHV4tzerdxH4jrDGSmvN3tLcHWpbqkCer38SVwGjrgJ9ZdxB1F9a3SansWie34iy",
  "key35": "4kZERZN5ashmExhLXintrnrWoNLsDs3UvrHMKGePAD9xnuUntvh4q8NaXpWCYRTVupAwnqViQcJ2fJm5Z3gmz4Eb",
  "key36": "48UjPMbbJNM2nyd9c35pdoxNzuxbRGkdi4SLbjjnJfnBtX5GVgcJwd3Au9BoTETrby4SRSMwcGZ74iF8KHwZ91bG",
  "key37": "3am4wNZBvu1Hr1TrKr9jnwkwV6D7aJfa1PkySiZvU6PYbBBbaupnisU1Y6Nnez9WWrgiG3UyfYjpFjKfCxgvifkU",
  "key38": "2LhCriTyhJGTbgvK4YUuT7agVkBZkc29PapF319e33XmPqKAXLhjoi2fwPawNvvkA3T46NPjsYW4ix8kufroNrJ3"
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
