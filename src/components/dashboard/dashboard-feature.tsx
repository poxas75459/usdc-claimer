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
    "2sbSd4oYZF5FNQp5fQHzJnLqrbQD1NhNUMHf6R2pequLGcFcAS64sKbvk1f57PKLcjRU8f1cFbhJjgNUSeLxp2Nk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hSuMd8eijDWnYtKD3kJox6VW4y6RTmrCzHXVqkb1Cf4TUY739LbqDoVvtgb7GFQRV1LTkxegSfNoPaHtSwexg3x",
  "key1": "5fuwQcRCNJMHqHk2xCqyaqwT2tMNi5m9886BHMJCrE5yft2o6ZsasP4CtsLfBTPqKQ2Qx93wmgSZMdErQ6XgHCZk",
  "key2": "5GhsempXP85rUYmwGqTCuYbmBtqLPr49uR41xFDfCFAoggwB76AbS3SymDVng2ysd7PFsL1ooRnppZyE66ybxVqk",
  "key3": "4gWxUU4iRRaKprGLeYZYyzt86xgCdz7QFW1x5biRvsBBfiQoa3RGxmTLVtzYRy8nUoTmi7eE8rDZCoxcpynFqyWx",
  "key4": "6323EeiLLcKjvxaMjadg2Qd49pzF6HcWWkj8fqf94YERESZ7RerYK6XzGDHR34H8QQVRp3GAJd3EmfnygGRXCCnH",
  "key5": "3eU5k51urQVaw8E9anTdgk9w6JQne9XNmTXGPxSeryQ6EEELEL43DS7i1gwiKuuegtgoDCdHkgrpma4K4nMP43s1",
  "key6": "hcztbEPvEQymT5Uh9NztNZF6UDjHDHvqX813sGc2Wvw4VcSYdZBBG7anXrKtayPgnqzmHwej4qZGt924682wfcb",
  "key7": "5dwxHXfchBZ4Kfnjj4Xz7ehLjTGBMqZswieV5sMw6JE4V35fhYQaQNpNtQp3kY17uSaXV8KYj1gcCoU5wC4u9kKU",
  "key8": "3gWU7uHLKPqaNn8FXnTK5iKFjk2d5hZWLk1rJDHt9Y8S2DfNRXPH9UgFeS83Df6Nbtns4KENbACMhmbP52yZFuJA",
  "key9": "2Ph8gZZoKmSPGE6PcipQssGZXgMz73t1UqivimHbjXSmNPnfW3ECGxr7wricmV1xfYTverxd4HYu4ccgqZ1Qdh6X",
  "key10": "4CRSbCzVQYYPkRTvW835x1csPAi7L71n9Zs8ZhShJP4UPuJ3JtoWLCFTmDjcR5fq7aacbi7itRcMHBfhT3arjyX2",
  "key11": "5HhtpcYxbPijX9ePdfQXSBSRANfwMNaFppWf8tvcP28tCvfo1r73hNS7q5SDFe8th5LqP4CUJX6rdK1ucfG8PzFu",
  "key12": "26mYQ3f7hypxFStqFPFt8fb2pNcobHfqECC8KZeJQpDRynkoFwMjvWpH5Vub9sm4m8QEmUCuWWZ4LaP6YHYYj6cE",
  "key13": "3S6bT38Xhn5Afp9kX5rnDtySvu8hwmaFx1863fErSSNNrBKse8qTxXg17YDbLJySEBBbBCEHPsnZSPUcF71qPHng",
  "key14": "5Nw57XxEqjonhFk4dDciKfoWMVBvppNN4eusSZhLWBFMwTWBAFmpiLuEntCFcoFLSCtv53daznT3xomUm6qVDbhc",
  "key15": "4PeQydNKCV2nanxgBYnbCDQ9cn5Q5UwpeojQ8ToMEYDpsADcAA5uGsBhfeAmF5BMqVEaFoWDaF66bW9ptx4KtX4f",
  "key16": "4uWFcXYUnsf8433a847sU7g6rMVPvu68CFR7ZYJ8Qds6Fw8WyU1CyHf37rwnTrJGF2nz2XDKr2upzaoZDDGMhg6s",
  "key17": "2XfspZd1wxDSGncugFJmoo1wbfczAXA2CzrQAK2opnAVYTiRoHdqdQxbMK37s7aNvpp4VWWyDpS5UVksYDkGdi5Z",
  "key18": "4SU7fimtdzUvJRHcKCnUcsNXhEC8P6kW571yVgcTsP1zw17GzcGtB9mZsw1bHeaq1tmRd2pPCgTZgwjVwPzJYBLJ",
  "key19": "2fWo5j3H1HuvsB3WrWK4fAcBn3F67wKUskchVmbFE9MFeNFSe8DaFJJ7XHiDqyd1baBjLYAB896JUyJv1faRm9UP",
  "key20": "26Czj4FtXnu6EVJ8ALduHR1ijpqRaEN8rw9J83nrTJPFfwqdBKexuRjFo4v6fzSRTKaryrp85TzQb1dBgvYAkLu1",
  "key21": "46hXKHUTufUnLzXwbiQhFmdVPLqG1yRqGEvfWLYFGkGQd7JQZP5xAicUKDnvMt16Ejmjq6eykZdr2vFsLKiuEBwT",
  "key22": "48CSfSjT8gB2Um2aK1dtEfaYyKcgU4ah9mr8KuzZXf75B7uYdMs7WVRzmDcsZhNQJUUiSiiBfdUQnhHwofGmmy6Z",
  "key23": "3pWEKzpXy3V8APdCKwXnYoYNXo84DnVENGN3sTYpDcZq1aVsGkvirUhoRw5d3gvhynAtbSJSHzo6EWCDMLsuLjMC",
  "key24": "k6j3CMgrXM3vVmnyCniUXzYDbHx5YBWwzq5QhgKwWBi9PjW5xqgHif9kXDawcX5udgK9VZsovgK9osLvc9WQ4yb",
  "key25": "5go5rwaZ357GNCwu6cB8jKXpKhwr84LqUfvYqqwcLm1KLasdWfWqUqR1h9rWY5BEd9F8Uwdzidmp5kFfn2JiKTYi",
  "key26": "5Ggy59fT5M7hqFG2pNpFfPzvW6Eo2pGFdM4bk9mVpGj8VBatPRQxKgRjsFVpeLmM7Hqyyw5RiGq9WqKfpRyzwBKc",
  "key27": "2oyrtGa6BnDnyZp4wKp7N2RZmgfQr68zuB9z84fnBmSgNRv7fxxixnjKtdn2UjkUBFRHBvzezceSTQjrseMAd2uZ",
  "key28": "5X4hZVukUhSb3pmxfEkg1qV1n9MbqikgPeTjRfSgjfyD1mmVucjeypN4aHUZq52vSnxPErocR736hapcgycn39uV",
  "key29": "5Xov1uVcLuZNWqfBg2CCqUj32bqoyjH9rVxV7kKumYhonB9ERCqGTNGDVNEMtoZEZo3GLJnPqe7z5jZLpE8ChXa",
  "key30": "2bLzLu9u8Tj3xvdMLZfr5jVZKrXXkjp52VyvAgsMrhUDTK3Vk5Jfr39bQZMyLKXi7Vx2A6WHCLFBP2viSeskX7UL",
  "key31": "D2gTEksdDsC8SumqxbtngWXBYnMmeUV58YhMrVE6SLy9bcy9jTYDTki6uQ3njGdLuxn9WfQfnAyDz4gFJxZmDQ5",
  "key32": "3y6ZT6VJuS3Um7mQoRPSjFtnNTwnzp4mvXxhkiaLgq4Uhd1zA8GeXsQTWHfmRGKsgAb9Vxm752aTTqrVoQaoPFQD",
  "key33": "3QBkbwJPg1YsjVRh7npPpNVb1mq66kqys1hss9SVeVApnLz1A481WgxvbQWhnJYRTn5ZQMqBfus2VsvX2XUm4SmE"
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
