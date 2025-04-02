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
    "2jkYLMWAUun9G78McG8PpTxEgYwB5LCaujKcKmLTdQK82Rnpo55XbyZ1sJ1AMCXSXUD322GDsYeYKHaJpRTr56xF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FsZ5bzWkABBLgnBVtzHSgQiYdqKd9geN3B7W6iHDpJWiDJuK58NcjiDXXYr76vvWEQjR28YpUMdg41Vb7HjtQyK",
  "key1": "YJfwPK2QBn9XdEUYj2zxJEzau7vE6ALBr2gLsb4ZaFYGMeppqpwJdUkECRmxN9TAPGRPuGDGqf6VqaLfhjKKsu7",
  "key2": "5TekJxQoZYroFdq5QRPRfkWq4zhjDfvtRSMBU3q28BwqPtG5EQ56nH5AYjaht8prgwUvLkdyVRUnZYWWQkfqHpZQ",
  "key3": "5rTfGwKKFvz4ahLTpEjgpE4QELaDTQ2bs1RKiTKZyj3KRWsGAamWNU21bdjVEFq5LZBQ878DxWTSxA2J3MJ4TfcN",
  "key4": "5uT5fx1ZA58Jk3Bk6YWn5LZgwnkSNoedWUoXma8Nycc5GJdXjRP87Y3A8JjAhjz3iAxahFAV9zqk4Fb4QMZX4X7w",
  "key5": "4Ya2ccbmLBYA4JR7GQamWCqtzrYbKK3TLzifvgAwW65d5omZG1jfY5NL79vgWe93Rry2Ug6bo4oRcrycF5fVfTr6",
  "key6": "3zyMVDTNMcMbi23MVjye6FgrjVvMTVjMKwqXGugNL6tnMYcBnNWjFwZashQhw2WT5dVXob1f2eHcy3B7yRA18PdV",
  "key7": "3vk3SDZdZ5GTuaJJkQtgxEAM521LysWZBMNH7zhB2eVAbHEAc6QvFxrP4oEXp8VwoeTGoVHoLkVtrFRNe9jRGX8Q",
  "key8": "47Mqzw958EdpBiKuxrG7cjb2NqMV1yc6753xfboSkRazNpca3N7P1tXfhPGe1KDTn8rYRpPYA1wjgwVhtJ1j6XDC",
  "key9": "4QhEJ6pXZedAyvcuGy3czgn9MtsPkHfvcGjQ3TfmtVCSrzz1YvjFAUG6VKdR2o21riP5p2j2gaMbd45wgiXWwgoz",
  "key10": "54kZx3RGpXnFCNSH5mPbA1sRaqTvzB8ECrutEAQz2WRQKV1ER8Dg6zKAScbQqyKygF5XUUGhPgabP4V46b9cVATQ",
  "key11": "3Wgt9BHem3sYg1EXX6NCLvXDV24is5tEyJUFi4AYMzG7E7StFFAsNHJkeYBTTLAPH3xZGQbBXst8F1nkDuxMwW4s",
  "key12": "65kRsLjdd7KxwnPcq7bJgmPLUq8NYqFCsfwdS1aC18BwtVYSmjy6ePr4d52LeLtcakfAHKwsV2VpPXDoBvRp6Rmi",
  "key13": "3s31DxL5KPHuQBJCJ6JtMS7VhweTeFJFJsxGfyb94LWUZ99CFdHfZAfRCFpUZRZazr5h6ewtzZEwg2Bua451Gfys",
  "key14": "4kN6qEf2PE5tj9oC4A7z4q1aGfsKTyEx9vbN7neyA8p65wT9972oXXoxkCXBMNxKPw1RPUtwo4aeAGNfcxjW7srV",
  "key15": "2r9bx6dftHtqgmsQs2iPCiCpMX8hhL3FmEe5XQqazZejovqk7RdEGoNUqfBU3B2HeZnB3cc74v12A5kmcdVSx5vP",
  "key16": "24Qa6se9MC9nznBZvjdkE1nsWDXSBjHuTzZVGM5RRbMm4jnaVGKZa4yBpbFqQTQKq2rsBumW31QEti6cF4js34Pa",
  "key17": "vqrjryS6B715JRpBjBmaD76ug1n5adxdBSwH9mcFavxrSK9tVhSoyT297ajBpaDcZ3MSMjSgChjzJH4D5DCEbs4",
  "key18": "4f4MKqTPgYbFoPr1cWUvtPDzCmPc1tAXLK7JPBaiRgyo3XzF5qEWU1HgY5FUyiHAGBfvXdVN2RNsLtRfPqC8yUsF",
  "key19": "3c5f9yJnpZ3bMuptVGULrJ49mCUBjtLJ39uQnRDaMXU3dNztqWNXFkioKgVFWMjyNAJGyUPcjWNzQFd4aMKKKn6i",
  "key20": "5brmjmUa1xGEXpTy8muj3HSydTNqV7nbvrcNf4Z6BxxcVzyLcQfiKKEJFE1HnBUV7JJ5YVxaun4s1GECudYdXXcQ",
  "key21": "mV4576Rcxi2bKtWqzrawduvtijSA2jzmmr2WxGVcv6mvEctKWBX7a497P41bD56KaeKvSHnsyEZ7NBfX8R7LZQv",
  "key22": "57wcM7YkfvCscLkmWJLEsFQra7eSgrkXXopjZsSttoz2LpBDYGvzwBPJCyz9ecZzL7ntcSYVGTRzkGSVTb6reuPB",
  "key23": "2PjFDWpZT8MBPNSKAjtDSbkKhSdhwKtU3RPe8ut6N8nipvnNo86Xa6GsPkwpfkYgCPGZnqev2nKRfWGCEY7yJPg6",
  "key24": "3w5y43mo9Cu1A6fAbGniNH7DQidQTAcHusKgGXfQhz29NHiAMK2KUgubHGpq6ntmzYJd4QoaFGxDHpo4UVmXGsX",
  "key25": "2gfDevXeeuJydH6yRjtUPoHwAJub7xbxGUSxxXYDFMapvVfCwUvpRwXG5nNwBFf83TAyVuUjxfv1X4vJzkvvWgh1",
  "key26": "4yRvo3dBa88s6BP3ckcPsnjBLzDCA7M5z1GAGvBSszH9c3wVwHoKJRN6Awag2bTrXJPxGUXVi438WE1WEQuNwQEr",
  "key27": "5gU868qG9MFP7guD1mVvadFU6PhK8a7ybd5R1cvBoPcSXDqD1p8NcVYDkTDeYiFfvpp1hC88xdGCGDJGC8UZhH9T",
  "key28": "2eS2Qx7vnpGwrbRxdtVjJ7MQPnwfEtw6ZhCyZTeAqvcQzMVC87ZZ8pipBvqgpqqKKAg6vu7V7heZVZzA8877KQW5",
  "key29": "4LrXoQDFStPRvtGpoNubsvzRqoY6KLcbpMDBbG2jbRspKAak96mCdAhd7DgFGWZZLoMsHMGuHserwP1ubhxvdp8p",
  "key30": "5YCxtBoD8y6t3oPsYGcWEgciR9thAedJxiP8ct8XYKRQEezaeq9Q679f4NxwGXZYLLqj3o4Y2bhuwc6dce4LoK4g",
  "key31": "3d9vCekfWduP6UwDesUe8Bip8o6dnJx9ggqExPUsAWax2fezkNUuFm43u7VwcDQRmdrSGhqwjgi8sK92rEQFFwbG",
  "key32": "ASUfM9QtGDz2wUrQAXEsbRwr9aop9g1Pp7ubmw4CH36cndCENZhTKm7xhZj97varQ9bGohMfethFbbLQMihJbaM"
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
