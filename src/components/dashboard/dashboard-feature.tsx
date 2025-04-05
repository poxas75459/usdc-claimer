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
    "3HSSFEhApCEi1SYfnyMFkCcMMDvXj8JrBns4skisWe4mzBXmzujsakKV4ZLRmLJBz6KVdH6YnYYsfFZs6a4w97jh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bS9usniDnppfZZk99Cccr2Dzt4sfveCo7XxabDGWVzc8V44FKu6m7qxbopcudjNBRVeHhnisR3isb86ozmBYYF4",
  "key1": "5PXi2GYDsEtibWkUBGqjhWMXkGb8MhNW8WBsrXL523txUmC9GcJRtSkHCeLGiB34U7Ky1J7sTR9JLT4BEo2NjurU",
  "key2": "ydK2FyuHniHxXKfQG8tT2hGfE7nPg8bxfFajcNeMtQV3L9JAZ9o22NPGKUUgS27Yv9XNahUZsWRXhk8tUxMBWPr",
  "key3": "5yMsfB1GunQ4639tMRT6rxo7pybBAUqCSLVYSekKk48Xw9gVhqVwu1MvpCbUUV5XnpTMsP5y7YJM7vetcp59fV9S",
  "key4": "fvWw5F5B3XhDcKzbuVdJo1wh67um1YyAE4A5ALFaWdyqHeHCBcfr1mvTcoKzgdP4vWJviBtMp6yN8bH1vhGQi1Z",
  "key5": "233KQtJYT71Mzqfo7FtZ98o9hA7VcdPe7BM7zS4i2bXA4GNnWFKk8UrRzxwo7LHkB9qybiuQQpMdVrEfbKhiJSpQ",
  "key6": "4DhvRqQH7qhyMrTa1dG61gtk6A8XtVX5LyTdA8C8R219od2F3WveL6gb8NmDVtfgm14q61K726L4EPua19LELxvw",
  "key7": "3TAXsvgNZjMegMyiXSZufpkYygGxJ433UabDYWqHzJ4QgngqY1bvhRVLxvj3Q4z9FgyivgJ8a7Hczz97d6XVKBZJ",
  "key8": "4viajcqHeDRrNSfpBdJwUUyWgaLJtQr4wEcpybt1pagpfJ9wUJha1MGMCNYLHDu9PT9Z49WJqU3hsYVvK23HYoMU",
  "key9": "3Cjh4YTKrhNN4uhkYyNqDLWPyMsrsk5FtQKZeLrxXJZXKY5Lk8kzLujBA8zUcpBJbmRsGR9CU2KwikzRtSgE4ZhF",
  "key10": "vMgZRVNjioR2Mw2zX3A4R8GyQ8uhFvi86eNx4bPxUkKT95WwwT6CR7EuvBQREZ6TY27Zbya4AQ45WUpniJuxpm3",
  "key11": "5DUCAcjVyo2GSjHaxUPASpZCqofTvhsujhzXFUJ5eLSqJAW71oA63Py75BneNrR6wWpsVZ59zzc7M3sYkLpytrkW",
  "key12": "R4Mdrq5FhBn3JvYfAsbXgrWwAYKSiMjn92NFf73e7nMx4uhMtV16164QGfFMJmCxRRxmbBm3Q8yqW4HR8nqEBAA",
  "key13": "2B5bLpp5G5mqyWmMasmtaEZxSS4gFvNUizawqv8YWCKmhGQNfHfQg6qaAkEYPbUJFmSuoH7doJVVoxgDv8mhM51u",
  "key14": "4c2M1WpTUa6hWE6RTSPnePxzmZR684UJmAqjuQLxijMmR9byD9kqrL1wbeQKXwo5DcpjbvT2Tu9zkQB3nbPsYwhx",
  "key15": "3tJAPEBbogWTbuYbx21pRVbQDXwrmPBu5dPrQdKUmainEvjPmnstgLx4LnLTmVSgaPbaiTPDymBHvamabMyUUcpu",
  "key16": "4rkNMn9SNGSwWiUZ689YNdNJigaxeht34SU5cLhtCJX4V9atkMueW3irox2UrH7S1Eyg96fQKwcc14BkTE3YH2SB",
  "key17": "4xC4KNiT1UsonsqAfw7tRcoHywtDndgmpn48w9HvEVSBFhLXNPpJNZP72XDsvgj21qBzqWfchbSWtRSpJtzFU7a7",
  "key18": "4eRVKvgjxNJ4hmFK1fo531TDXWYTubRjJArG4NNzWGKUpwScdesRVqoDjvnNCKC7HSviU79s4X3PM28So9tCHcWp",
  "key19": "3pzfnt3PsHn3Le4rnfDKVUWQwmnP9m5Efp654bfLof5FKKy7vfkfreBDHEGCdjE3yQY1pn8Sg8ab1x7FLxiqt42B",
  "key20": "4JaKqLzs1z2pwrGw7dvPqSgKvxWBXDDdQXKiBHboesLXuKKMqDVhtBLzRoxkt65ZCoUcF8ThCKzfjrZGr4NjAkrN",
  "key21": "3gT8Ew3zenCcvEryS1KcpdaNZbB92zPNnbQgVjMw6HivPrkDUZvGxaF6k5RmYqR1kococ5QGJgQzPkuBCjfrMusr",
  "key22": "4b7GBZwz7zeBHrZQVHfBLGssodnzrfHqidTvnHBer6SL35EhLqNx1mX1CPqpJd3oQB5pU5u61UifACMBnAQahuTz",
  "key23": "XrDw6PXTugquyMAm2ESwZTBfrPa7xcDZG5NBQrQa2SxEj3QffQjVVy6akinYktewi5FYNg6zaeN7Uvqh4aKaNsT",
  "key24": "2kVZC3fYF2VMEDu4wyNko4oYZ6AyHdAcCsDdATWh7icTnCpUnEoDnDijME5o2edXRLTqpap5zLHey5HRqmnFTPfF",
  "key25": "5b293fGxRG2sWXiDKeo2og9RSbBkKiF2buAii8j2RdCALTuKxFnZGxNzHMAuhJ5Ec7wnh9VfhJpDw4z7Twija1w5",
  "key26": "39YJ43iXVPNLabN1Vqd87qWw55Vt7A16W3jHG8NYP988n9eEt58ftMXPK4URMcvkDu2VybkLHQBQ85WZ8BJRcZzo",
  "key27": "2d7eJUWnix7f9aBcepmV9F1jmS4qG86ade1TAw5CSA5dXMjgZ2iKbWhGu86bFSUy55uk5mh3govbiRP8uNetakJH",
  "key28": "3CQh4S1JMdcdyGmAzk1xKQur8dCMUbSsaKgVx617W1Au1WYCU3HmdwnqLUosfAoRUWk4z7DVjc1PxrhddjSjzGq9"
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
