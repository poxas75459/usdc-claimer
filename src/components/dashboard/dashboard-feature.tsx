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
    "kup5aLAdq9emCvL9g6WcNiuhKYCGxNLENDvH8e1Gw6Dv1AEgphHNvV3NC9CJuUFLLJ7cyzdL3hJCM1sgDaU9Dgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "273H3htf6n287ZTgekhgVC5TiK3t8qpSHKp8jAxynu5DNwWwSvY7veyN6HXBjBtDt9mbSepnFkxBzAEjcZrFojUr",
  "key1": "3r52m3W54JBYRZY3UMyDLp6TBFisdNqQhjTiT5XzHk2ZTvru8R5kw8WmE4BaB4A2E6MFkqFHJfFEEUFQqvMVKzhk",
  "key2": "guYJh6okZdzj4ok9wZYvcXaE14TKB1yQK3qZzFeCLn1tQuX4dRoT1QMqQcaCGQxj1n7edovzWYnHQF95KGH976H",
  "key3": "3V79MbM1VzdY78Yyt8FV1G31j3cVaCSy3ezVEM4Ny8xDVLCoLtqxMCdnUNfRPxZGsE4JAUABK5Zb4DimkVvbrqsq",
  "key4": "QCShEcsRGnfzjMrvXqFcAkmTBPVnCfXHsM3EqVNcxrxCKsnQjEk8acRMcHiYjDN7tHBpSnJxZnANs7Hhw4CjjyC",
  "key5": "3XdSE3UeKHriVi9oDEq9LHMBj8dQHbrqJUL18vdoWnUjmQuSt2bj6afjCyx6TpT35hmvCW5sz3JCP82hBmSj9adP",
  "key6": "s9DbbdzUPkLG516gvNwtQyU7BnN3FAp91M7UVxuL92N45w1HjmXDybu1LrEW4ibthRmJ2ZCTZWzDsgX27VrEwUi",
  "key7": "2iganABT2JtvHFHiL4X5YgkpJuFAVrkizQUG7UNinDFVapw2vfaRrSTG7bkcKpBk7sxEQBftjPWDAqjy5iah8scE",
  "key8": "5kHbzrXvTusL6utzqp9vx2G5nhzW7g87mxhU4S6qonxwVysA7z5zHhLvvBWjJ95iLhuajeiTedwXrUaER1XqJxoL",
  "key9": "4afzfywgcpjp6wAZDLkJs7dYsXAPkR8BeX15ywjMfVQbY3YhP4BaTZpjT9XZtujRnG27eaZyeyFVeKnFQgfwKb29",
  "key10": "3BWfr1RSBu57wp9tYrJNx8wiFfbyCPTCkeNq3wCVDAJTt2EwDai1XuKhjG8hPUeZuJPmaQMPRof6MNfo3aDp254h",
  "key11": "62zShnT3VqHUfedy1VBmon46aaGL9wNXgCL8PVpGYcaeE5NR3eSgb7xt1SVw81zgUcZXtVWrMNZsnsuviJwFAoJn",
  "key12": "31q1MFGDB1P1boHyQ6hywt8HNfPA1r3AhXXxeQFndJnV3sx6mrFYrgVHuuSUSZaRrTLp3m3rXcCZH8oNFBGeywgz",
  "key13": "3dHC2oNCYtW5QfBPPMWRcZS7mLAGwRzcGB6QdPSeJEr25LX9CvtgH7PbzYLtgBLWd7FVfNDsHa2zDHNq58rcLkfs",
  "key14": "2onSxuYAVm5vGfeTzvMAmMmwwQHTWxVzVGvCf5CdWmgpCFMotcYYmYeAo8aiKCtpku35bSnAv21iyeB4VC2YQJJp",
  "key15": "5ZhR5xDPxaFUPLzuQiy7vyDcrTQb5yTfdUgnCLQZwqWrknHUrssCMMUXEdGUvrG4u4xapf6sLszQmjTCwVRUC2Wg",
  "key16": "3DTuMYSy1hKDepPtB4aPLZrWQZnqHfcP9GRVBSNHFLEVXcuP9cntCjmMmKwPLmq6sqnJtBfyDFkoPnQ1aLkZPvRh",
  "key17": "43BxBLq6rDuf4EyQha3t1zLTqSKy6qbR7KiMmYfzj9fGbb2NNj7kA2fyp2SkGRdqa1R1UAuBsS7rgc7zLznVQhWX",
  "key18": "2BmEfLogckuGU7kNFjxEQA1UJvHXfUPTn1fpjdd4wZGjdXDWyLbbeaXCQAW4bxYaefj6rgpvEeH5UtPV68JN87BY",
  "key19": "5Hqp5jRKppQx54AUPAFhtadoeq4xHQGVJPc49Awd28MMEk1xxByKvDrFr3AnhWF58eNDvVVKzAT5MuiffTjUokK7",
  "key20": "4gftguveAsf8KPum2DxMeaWwDp51HtfmH5RoeBAksJB5GzhsB3DvA8ZH8EoT72aZQAjmEQn8PYpYbtBS8NTrkUKg",
  "key21": "3cxrfQHnSX9iUm8hG9kwSHop4CbwtjmLcDuXNr3dH113pGUhbUTQJDVmcvL79QPLyY1N3nAwjR3vLGzEwycSd7Ww",
  "key22": "5zW8aCLZae6c4RR6NJ3Hb43pY9dRo1jJ5cRBgVRzbm3KWK6nYNUPTcvVRDmVhtyzkjShHLkQWKAkNESADy5sXQtU",
  "key23": "2xBC6JTAgEC6RYxKyGwga5hRuhm1SWiXedizzbyWfTdqw7XkijjbACneLS6rvvtT2aXHx216pD86nvx3nnxm7zff",
  "key24": "4x9eGNJRdoyyqmVxZP7wRyiZLcngasTGJkWwx5sqodmYgBTyWxGWMKAAF7GoiTeuJfEpkPLdxHxeXWTa7gLiZZJq",
  "key25": "2vxT9AWy25ngHTiQLPbZpvEm2e4PC5nA5MbMcpBTPYZ6ZHhMHmtsF8zTKiuTkfC6VVdqxQgPsFdp91wNCBEYYqJ6",
  "key26": "5vMkqfekDAGwZqwCbCJzrRLPPjtrKWrrJMZ1wm9SQ6UsJ4PLRvHs63TpFbCNzvxBzm9y6YckR9CRmK5WebkY6nM7",
  "key27": "56GucgqtzQMWR4S6tpsLtcrmM2pjti3wkFwH6amjU9rgPqpmmtNNVcWsHLBZ7mJSfxFhkPaAGntMRVC4iDMJGBgR",
  "key28": "4VJAxmCc6jheHKpTDxRvpsJueRx7hB3gQtfjzozDyG1MumJwX4JLvdzZViTerqQUe77pZHY6MXvGyZzkCFMm9pUg",
  "key29": "4s1HMnoX5FZX1h8LJz5WYN1FKUduKWXxpJDgXXJWJGejNc5NcEYYKomVrfbW6t5VkSk31QnatQDuDoZrqbz9mPMy",
  "key30": "4DmiMnsidZrHX1oAL1VuAJCieri6LYFdyNCVaJH4r6stBtmXhMDcAtWMwwTgioZ5JdiMUrotJLoYNwxqfJYm7ZTB",
  "key31": "67jXuZ7QTLiGugCFAXCXjE7KwVKvebBvH98aB8CxzSFnWrkH4kzbY8GWHtMga1JjM6t681UH9Y7KhHUtLeAaLsMj",
  "key32": "5Un1h5puP6wwCw8EPuBjEysE4qurhanQFZDeKcUMJwXo1RFY7xq3BzMirCMcWB6nr7SCcxBaUATnBftRmcSnHJF9",
  "key33": "2WqjbMW1A8uzx9keEVBJ9SvBpPZiGfB4pUaMqdLuNTvCpJ5DSjKqr6NpZgyBr5VqH2iPQWumhhKFesUfzVwcBDyb"
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
