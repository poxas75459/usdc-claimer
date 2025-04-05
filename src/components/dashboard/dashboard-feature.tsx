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
    "5CgbyVqJ326veEmWk6NHt1amJUXexaKYuemuBr2Yb2tunwCs1NXxCn7zEWqZpTNRFT8i5Uf14k1jazGcjdBaTxLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s23XwrAvz3d9MQnHfCV5VAQh83cwrCXTYQJKqWxbe2qNFfanGtavGUwj244Yt7nzYBZXKZ4q4UeWEV1eo1ftZMh",
  "key1": "iX8ZvR8WNDaUdKszSMb7PBtDvs3wnZ8afjcgP1mPHeVLJcWKgBd7hzPXLWrYoHtgVDTYuEANd3SKZnWr2R9G5u5",
  "key2": "5QXmeSmcAUYKaD2sHpPxoT3UVQssoF6yQsa2KQ5t6pG9YfYnHcBgqf8UGWjea7RKCY1m2pFC9Dx2RuJfmRBpnCrF",
  "key3": "2FwgyAqT697EewKDeabgH3ZnBjH6Eqrh6e88esS3ZnmqmZbVJZ4Zhq3CVLQ8VS3dTsZQeFkVJs3LwsRZfarqXTzR",
  "key4": "244VgsbNoJPAVSCNwEeRT2fvhxXjriu9kT9BaCte3kKLpsXucgE77YFyarSdEAPdX3TepGgJUABuKbm9aPfGiG7h",
  "key5": "2Dhx6ZGoJ6CR6swwe3R8j1QFxETwStNbTCLXqmBPwstWeSn1GPq5Ag9Seq1wf4eXD5PfNa5R7cyWzJHFEmpKzWqv",
  "key6": "2MHbs9WmtMtZu9FiutGWhR8SCDPGJ8MJUy4CGyypZaj5zSt9Y2wnjLkyaoQHCftfgVSzdhBu5vpTu8HsH5gZp22R",
  "key7": "5ZkE7WAU1U1DtySzi8pCB4wqMdzct4Jk15KvtqsxxE3iH7w64NAESMjFeqEiNmm1Gg6Wkd9eFERJWQnAAHcibdDL",
  "key8": "4vMuxrWKBsZX1jD8DyQ7RgZA5P9V9QdmKk3azYS5WXaTcniwkuKazpiF9NJUfB1rS1JsZpf6t1KbpVXeUekMnjcP",
  "key9": "2ksv35nyRqXazwNybZu8bKFtJC4v2jF9JhPiNoMNw14gz2REbnuE8SVrUGNcMv2KDNcnXPKZFtvZ6D5VMLwxsRXW",
  "key10": "vHfQdU1D9MX4K7wti1zjxx39xQ4kN59u7xrgr8t9YHfQzPpzeW5biMG2TGicDDdnnE59sxz3QVWE3myDVa3a2ca",
  "key11": "3qzW6N3LD2y3Hq1p22FQL2uFHvFKQyDgJpXrTrW1GQC8gCNf5Ab6EEwawfG3RT6QhRb6VUNjjGdQcd2Kfz3YcYqa",
  "key12": "Ahg69XCzeQiUk9YKKzKZhixF5HUL2Tn3zJXLFSCm31SEJEgzLnDTChkmsueAH2nzzwK3bJwGFqE33UAdMDX4iRm",
  "key13": "5CsoY3CcfoVeaX1brisucs15hHutVL6bRo5VZLouejhEXj2gqQ19LHedDXVY92FHTg3J9vafHmj7hP3pikbqzjZb",
  "key14": "dxFMwWQRvP5PLqvfb7ebQKtkQpgEataumrfgwSHiLWpsbsvv7UTN57EYZGCHNK1147a2dFp1rMQ1prAofdCJh3R",
  "key15": "2k4ZVMxrWKX76PbbRQxu36pTeN4zANwjHnoio6rSa3rD33DeCnzL9e6nd7AFQEZgygQkuTxgUe4qgJq9po2m8KLi",
  "key16": "3qN1CMMZRKPQ4NAwPSYhdfBYzGgnP6WuoWCVB3pRdazbZKrnpfugrcsAj6DqEL62iy3azstv6QqmnbRZCVajGsrf",
  "key17": "3xsUBPk6dW9RumHovVWq24zA5QtVob4ecYWipCpQM4CmdahjtobpRgUv6ZJfF9kRzq2n5keyKfmGotxceHDcR1oH",
  "key18": "2qaqsuzVC5Lm72DJVuHek1HzGSvNenpZHjTHsB4wwRjmtrFu3c8BwjqHS3grRTYGgvCypHvsD2sUihG9kBN4WfCC",
  "key19": "5nNsEZ7j8MtLWUX3ZLK8vykuiUiwXPxu4Af7pbGu8Wwi1g1zt3Tj7wUrm95gEvb5aoNVwU9Mqrhz96X7wDFD4Psr",
  "key20": "2KEX4hqPpq9VZmP15gJYunUi3QFKmKj3tooPJ7fswfKDdLXR8Ru16RfL9kJEQHGURNZpgpVDrn1kMjwsSEbPF45R",
  "key21": "5noewQyormxA8QQxbTBHPkBvTfdr4gQ8so1wcZBHdpHA2dNWQDAdqQvYt3QiQXXZFkmafWM2WR2hd9pehgciEbmu",
  "key22": "5uKkEE4ALfcS5aW8YjTibjLGvibKhaK6Sf75bTQPYPzeH4sjeVqzHzbfNVwxn56C33KEG1hHX8bcWJric3etyKgD",
  "key23": "2xShnZ93nuWQqQ43UMda7XLr7Jy4LTS9uy7goPkJUgLTHh9vQGPL5Sd2FH14j1cMr1J4UEA1h1fhqHoiLzRvfj4v",
  "key24": "2jwXFenitS23yUPgcVQMMkbjajuccmeHGfxrG3apTKU4S7KeFWrcCJvMv1t16r7QNsiFpwk5dPTf1MTqfHJD3Lp2",
  "key25": "4L2XUDtDadG7SQLFmraZCdfk5GMud2ziucMfCY4LtGKtKnYUwyXPmbXduKgJ9jGGgH4vGytiq6o1ux1kEgf8g6xK",
  "key26": "3Z7xnsrbMsGN2xn67hXGQxaLFMzsGCdxrkeSZFxyk97kd59cvVc9ALJ49xBXbSzmcLZ2nkrkguycQhLLB6AF8dJj",
  "key27": "24LnyApjczwRofmmWqtoGa5SzMErnvzfBP9oNYzTMeFpqVTF9rhhwbLN2inSbNJrgqYGnjZWXhPAw4wy12iAEbVH"
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
