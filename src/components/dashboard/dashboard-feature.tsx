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
    "4bSHpGZP5pCxBsdnBJQiXjf8eiNMBJtvAzkjfF4PbA1HycJcmeS9UMkPDxe1nshMrqoPiSearbk9fcyWKaASkkyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WZExjU27akVMGkQEnspAKF1TLvKuTNtf4ndeP1N8SDjCnwPr1AnSS7pSQTAFLuRV6cN58GAjHP3XiCihFhMpJbv",
  "key1": "38FhPZkHraMo74n3tPLzE7qM6GiHjUiXXDxge784mGFRPoH5LJQt1zQGHe4KovLiZ7XmERzqckHxsm9jYPdisdBQ",
  "key2": "QGH6aQdsba9zduwDYFWNMSm6S9tkCFJtdveiDR7e79kqB7dNduQe8DpVRvLmabbiU9VLa6x8cU7mubNE5fznBgU",
  "key3": "4cfD28w82qD5F7A5uYiv7TF6HTNP7xMUPFVUUM8aPQJD9qiNLChV7prnwtt26v5D9kwtneq5Mgq2KydfY8xZ9DdT",
  "key4": "cTQyfdEpHzX1K8u7DQXv58eagEStYZhzEJv1V77rvGcv7V1fPueYe8yykAMWXLrJfSkA3omFRniaxtRjiy7anpi",
  "key5": "gk97VMBfsygFDc2rfiAV1so1uusggAy9vw69H7hot5zG4hSdihzQp91FkyuB26GvrZvLp2XiJ7YAwkKh5VyS3SU",
  "key6": "3zi2udvPHjjL9yapgWUCSfijs2ZEPKLRgg4FNR61JVsTHkdSnnYmnfK6XfbNM4WtCEQrfCEbRWKtnvsEW1ampr2r",
  "key7": "cfDMeCwjjMTrVTSY5aPvwXoQkQdGkDapeyZvLnBVRx3iGWbmX5TrXQ5wWxw6KJcG3QhSAvCpzWozsHcBhJpSEyV",
  "key8": "6562UDm866QWaDH8jyFBUQZ3fTHvyXeN8kQK3e6qoAz2N2QuKuVPyRjdZMqtqNfemxAQypEx82G9g6VAbJb5vtK3",
  "key9": "59qzgK2c6QSxvQwfXtjgKjwCyuHB88Ui9dECt9ztm1rRe7Zo6ATrnRrentB3WW5uegMqfVKiUu3gJZr5zPTvUQuZ",
  "key10": "2VVTprMSiXbznP2Td9hdfvnteSrKTVzDzHbkPGaVoe3Gv9qDPKHASAHY7keoiKAeQ5TYPUDcnyPkCnaKZqd5fFqc",
  "key11": "ZyBxhKsgnh5Py3aFse7uVPhwQzipe1AfbQ1M3VejVa6U73GeLWqEiY5na5yHaZyyywZ6h9ohR7VedCKc81uzhy6",
  "key12": "3FZirsnmSuUQ7YhPfimrCDLhPtvuokHZMhStFCNYGbEgWZSAKXGKRoCHBJ1gW8WyHi86a4bt3buDrjYVd2p5P3up",
  "key13": "57Kyh8gUmsG7BrkKhTvPMkcbH71CtNHtxohKM5Q736pWDvkA3kdhTL3QuSub7YRszaJbcWsjNUgCydJBwagUyA13",
  "key14": "2NsAZqKZW2Ug1tbWP5MPuKkbXz1UaQ8SF8EkgESaiErv6FB7Z6UBC8B9VqVdW5iePSGztYZV65TJxG7rvAVvy8SV",
  "key15": "3f7EhUgPTLM6rSUoMDmY8PirbkaMRNN68T23Vta2oWLp1BhaJ3Svy6zUJdqPFZ4mgfxf4CGVGJYiphQNdU9sHszf",
  "key16": "3TPaVuP2VFpNYYuRxkHDondwcK5PUidMwmR8HTAs1HWtveewR39Nx57ws3sbNyFq6qtREN7VfgEnj1Q9XqUg6SFu",
  "key17": "2YdBd2J3r5XNdLZ4QfS9obuGCRHRDxuhBeJgDKLQs8ddBy7TDr9RMvb78nNZ5yKU4J5qPPf7Df9vsQtjMyRmDja7",
  "key18": "4fFHqwUV4nHqhBmoyiYZwZHU4ViTc79f2qhcLEXBE1Qh2G2JwMjWAFcq2ubSA5zMQdFiMzE59oWDaXVApxcdF4cP",
  "key19": "279v3q3xZSBoDua5FdWs3a9gEjsxuRMkSX8QvdW3T32fCnuAC8rLxHthtbuLGetA5n6AftYH6X4xSLuZMEi7DqQm",
  "key20": "i8BArBa31F8mv77dTvt77M4vttcmEyvj4o8SBrT5PUHFXUMha71RuwV8aK9VzotjXxiDX3EF1HnDwBB5sVU7fkB",
  "key21": "3EB1ictWuKP4fZsZwdMNnCWJS9BmDTAEjNgU6QzweVUk4eVykSiVCbEApMNRqkHpcXrbEQTCLRFyYo4MBYttsEAU",
  "key22": "4QthJpXniY9GMAFLVCB1NNakehmmFGfU9tgLNZwF3kAvcPc6mTneyMii4pFtGjpGwSKiFmTmXcuMrEULY2ibjt9G",
  "key23": "nAFkj3AJpoM2SMNcSjXCH5nYRj8qv16bLsnp83wUjQfQZbYJkm4rp7h7HxHstwq2YCnp1aigGdy6Nsb8cizgHbY",
  "key24": "2ZXi43QbDuGa7a5ZFTV3JYGB9EAFhcEzWqAL12psxfNWAhRMyHVhs1L72gSmprgeNvbUu3GUueNygLP37jMmm79J",
  "key25": "2eiqKkNPbUP21kVgCJXYf1CzKpmmVtgb1JUPN6YT76MK4w6YWtjC14HgGJnMGeNeJAAbEPrXr9gZ4TNWBLoPHqz8",
  "key26": "4M56unUXzWAtu2HzqFCZhnPei5iPjHpRaQS4RWNvRg3oySqXGd93ZABrwLPWP294JB8MkBEX3irDnkhvJjK1RrNj",
  "key27": "5gps7uBT8rX1W5WXq22vAQ8gngA1mm7bc4A21QVncNU6Aupy4hbot3LsZsPeiUuJA3mpQQJ3NmTETSEWEr8E6kPy",
  "key28": "3EQGStemTjzmsSrLn116jDEwJAh38MxJ7mUgckwmtPPVRUfsFvP5MWtd8N6nkhbRL98Bqybtw1BDsLdcneP89kqE",
  "key29": "3CX4kHSnScnQQUcWvLvXYFRHewb1R61HgQVybVmz66BCbEFphjjx899ZnTMHhkAn6En67VLDCsXKzBNFWwe46D4U",
  "key30": "4BvijhjEYzBWPWK4eP7LSerqby6cauWLk8Kmmgt1HtYSAbSvifEZYaurdUBnpmfkbQEyaMoxZ9MjTWsqwweDnPr3",
  "key31": "2uYby5C6g6y5KTRpr9vYSvnPSYGAqyZmHELRLNTS3DC6FD3cHupEzwUF4RpDSvQD7UogokeVT6b6jbYeLrDP6eaQ",
  "key32": "29NmTnzQBd4aFkKt6ARkye53G8Cr6FZ1tpTHxwY8LbmEFT3K9rPYsW2drrgTNswXVXAWoL7FjLbARuQhVL85EFRq",
  "key33": "2A3CRDhwb4wb2ug3YZjYhUP4AgPWrJpSxhbcKwRZoyGZ9mpSFfHELY8t431vNinUCqgR4D7JdFsQwJ6sMxs3Edp8",
  "key34": "4JT6q2audsvCgJKsGE8QaAsiY1xG64uYw7n2wGDafV9YyRSpmLfc14SUmcTCKMwSPXd2ZymTRKngbnba9u4umhpJ",
  "key35": "4upc6D2nDvoDGTosSA1N8xQFgRNWg3gMRpTvmS5fNTb2aCy4ZeN1rdCcwSo6RdXoedYG4YpRg7quKvjiHawPoEpx"
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
