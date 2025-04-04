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
    "5d93EytxYWRKMeZ21N5azZXQs5UpLiMXVL6umdfiKtZumR841mm9vVgkuhPonxFF8Re2Fj6b7CZYNTtdZo6GTFmd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PfQoqMaGRiFwN2Vng5er2f2zQrr2j1VjeVi2L9Lk8SGWeC3NfUS5SnHCqSdXkMsdc9bYPExwkyUqbRLq8m84CBM",
  "key1": "41QWcFxoDNqQHxSUZ7thYPhzz91tGKjEKcp1HwqzKHPQdFQLo9X7cQwgWVRm3gtYPqNLCdf2CDRvmRGFtXmiWm3m",
  "key2": "5HajV6oFf79thpeha43TL92kPJS4ws73m1PuL79wAcDrSMeUXqxBgLd1GEaLfYDvHX6QGb9raQCUhP5Wk6KMjueE",
  "key3": "HnDu4TvVEbycekAmAMtTtyNEwogZwkUCa5upRworvQk5BCtYGa53S4QNEEDoejQtkaTDA336S5hRK4tVpuwdkaE",
  "key4": "33t4LKseUJKmpJMhVkwK5z5WEU9rGo92xNvZ59aSYGxSSXpLWKV7hrgpLJUx9zrVDk7XNwfmtWLCZmSjtQ8QPHwt",
  "key5": "62RPaK6YrYLqh7hLNZFZ1iNsuZjnnjv8mEnFfd1FMfNFeZ3Z91zvEK97kSFcuKxticxv1BjEGTsWEz7tcrj33X1E",
  "key6": "ss28W2YGjYPx813Y1SX83YqzNZrJRDA2z7qqLotE58ALVmwrAVeed2meAes2HYFuGyiL1E5e1F6xKWsjFmFNSJE",
  "key7": "2ivNaqP92ZYyqrYqMF4qPnsSQ6Rf1Scx5WqQ5VREEdSzDZ7RbnfCQ1gcGgfKkfPUmbzAPe8chkrAgEBNLZ8amEVZ",
  "key8": "3U8Yt6qyANEyCL24N4ikjocezhhmfFBWotRzAyBznPynahJcguKXT7VTZgnLRSWh3JwVM2VQmNg9sSa4yzSEpcbY",
  "key9": "4isB8RY14RvsoD3DQgUcUpPpNeGziciZhB1XuMfWKr7PmTpabU3bH54RVrmbHMRvTjrDxhVpMQrLM7doH9XdmkSk",
  "key10": "5cLoo8AjBwjdxquBEzzup9DCJ75sYys5WvxNVwucxUkaCUAqXeX7xJ5mK6jAkkh52t3S13JmGjxwahfQv46W5q6T",
  "key11": "4sXwQRpK52rCXVziC8vKoiR9xZxzXZu8pHgZjzaRVxEuKkhhsor1YMmaMWcFe9UJHyp1ULd1wukjNjFVFfYhN2xJ",
  "key12": "u7r3DrRMJGdR56pLWDtUGFJoPLVvbJjC8xVUUyKBrFqeezLsTi5QHCA3n3Na9kYKqVbJXoABCN2LUQjEqusdsGM",
  "key13": "43SXqF1hv1NsVLA6s26Ky3iEwySFcDnJKeYsdjwWPtg44r81sG6zrj2gCXkjVQGK9tHgXfMFcWpVy2aB4mbMmFPS",
  "key14": "2ULooqMBHQW1gpJuZjQGVVQb5fRs68m7vHUa39JLgvyM9d4x7W4aEZynWkuC96ZVhY9m75zZUdGspr87Uwa1txSK",
  "key15": "3prRf3KvfyPQQKC4no4gfLo9uL1ARXXCWRttKvDqPP46axf6wi3pDdYNemyZCnpJMv74SKLuY4sBmJcsnThfyzwC",
  "key16": "4b7Vokrbu1cNnov26LsVrUN5jKeE4j8cXFrhnfhziuXyeyvtFd44sF5QCagey93sgZxm4FBSQq8GLVVABfgzyHMX",
  "key17": "5BEB7XrT4iV1J9yQPKKMDqNEmPy2aYLv38HexJJ374RXPJgKThHpK6XMBLGQnYEHnP6ymWVgeaBqJwGakP4ebpS3",
  "key18": "58ATsZUptHyDJbj8f7Xj2rJUiX23WcRAEzTxzWNzTQ4ea4c4GK57kS7aR9MUywXoLPRKML5FLxiC2apub7aNPB9n",
  "key19": "3feuDtVFcJCbVDaSGaD9tkCWGnJc1BB5ZxhuXveNxVsZcdAMsKmdPNfbz93AihvHZPp7m2fUE45BzRQ8HUNhz1Co",
  "key20": "48Amd7Bhpgenp8FL5cLntFbXtAKtBJvTK9QgaeNyEaQYhMUwSAgfhGf3jK7d8DxZwahXtBvMcqvqvieN3caRTvPR",
  "key21": "4MTB1aLbktKz9XZNxZkCKtn7SVxbrLTpNrZyUb3ivqpPbyBnztaBua8RjGuF7pJVZvFEQjAacG3QPJNbd9sf3Vwx",
  "key22": "5jmibUtBbrwTjwJtAnYvfLuWnpFpeGXAKnLoo898ieCanwFtUHDT5utaucwtyas9obRRraKeFLuu8tQo5iZPiZvP",
  "key23": "4e2Ay4KkN9QeYHJmHh813dvcYdjLKg5FwhUvmEGfaQRNxH6hEEELtYW9XGAfZHNHiginNkManHJs2Hmq7jntPuVh",
  "key24": "3xRogbhLoTJnpfGTWX4REFwmUGVvfbaDnMezvch8JEv9Pq1BpN31A2jCRJhoKKpGDfw2b65FECU6rXVf7LeggoLD",
  "key25": "3Tn5rJSCPBshZBKs1fxt1GeDUBT6Hq3L2TTSkWUw7A438VfrxTHLxAm5KJBPT18ouCYNTzonwVppr8L224wiBiCE",
  "key26": "uZWc3ags9VbfVJ1LZ27GTKM7492E58AvdZmmoHr3vPBRr7bksLHTpvFZvNaQot8MeoKhfBVtU6JbwNomYekGaRh",
  "key27": "5DB1QKDBLdZnnM85Snvxj7zWCQWAYmngGfvBcBXUBwQS44C9KiZfdnPagcUBrcsNPPTr3fAWfS9oXKFWiuwHUgjA",
  "key28": "faN8QBzhSCRPuLkQEX12seRbHhhXTB9WJhzHUq6w36L1NhBMRQhRjWKeaAPcH7F7pzMaNEU2SDKPafxqCdnWedb",
  "key29": "61taak9zZD2NVxgGs4qMb1644MyQNxqgHVy5zDNjPeotqHnc6wcBWCCUz8zSY5jgLAFqjRuU5FgoD5SxX2Vry1Ct",
  "key30": "56QeizsenPDVP67AArKLjTCEqizx2DWgAq4rY5eLLZ9JLmg5yjtYsdDeqVakwdtfbKiYhqi6yWvQT1eBCihskijS",
  "key31": "2iLjnjt7WG5rPY1y99YaPBoyLwCL4fvTahGiQXyNdgngf6zCzsrKc4hRNi4toymT6BkRBjMgN2p1sH8yB7Vko9xK",
  "key32": "G8pULr6Jnc2A7HuRWzeG4XEL7LGF2JKGFJc44t7uBQbW6kfBn17LnAGisgiHAkJnVFzaUfW3fK7xsCr9EkkS9rK",
  "key33": "23BCBUcKgsGnxsAFnRRcriMDyHwc47iBQMMALh3XJt9aSDxRpCVqmecfZoYj1soQsABJWU4XcZX11Wv1Ay3QARms",
  "key34": "5rVLGmpFZ34TcH91khVUowKV81Fn5BNTitUF1nJaxBwi5zX1iVjTHxsGcN7WqFCmwpX1ryo45Fcbvpu1D7Q4if5Q",
  "key35": "3KtTvcNySCy3PdSp9R1CU8dksN1UtUidxf8MSJX1hJpw61yfmY2FvbWWm4NZ7B3pZ8JWvZ2NiVZJmqkLdVGndjRS",
  "key36": "41Zgb8i48yS8X6n7vRdavxFDoUYSQWJHhVA2TbwiXGicnkptZuyntPzvMDWP6ydrtQYw1qwqMWS2DVCUaZhzpknR",
  "key37": "2MkoozwZqD8dUydjS4TxzkNUHjXUhDPUpwTiA7x9PaB2yuxxb4LJvNnMQksxeSYhdMKi8PUmuZ3Lvmi9CFJErHSh",
  "key38": "2qPeQqCbNcth2cc8cEJQj79cDL5cj4DHAgWutovjYxCFgmRPzgqfBEMegbhJrLbV1xYMKsYAHTG8nDv58DY5TGFh",
  "key39": "2gQAizznvPqYeXTuEDYLsqiTSmyGLoXA8pkLHovaCz1u4atjBvkHRarrfDk5i61pbUhJMHsij128BwyQpFaJX6JK",
  "key40": "43kTxgiFhLrzik6yMyrjdbRKDjw2f8tBBosEBgda5PkFGfLEeoTBzGMqFJwYDa6bmjWYfQgBXTjxUShKUcjiMuVq",
  "key41": "4BdD59ix6E5gHJf5f9BibmhaZnRr3wx7mSgxcjKcSDnoehZx6DV6D6FQoU9QxnN6qfQtNpfQbfPNViRyvaEM5imC",
  "key42": "X8HUdYpQyvRTYeZbWfTeCx2hF1CtxaoB5ueqhRXwaezgX9NhrMvhRUG2NczwcQ7UsejAp3yR76fy6X1f821MGY1",
  "key43": "34ywq7zqGxnQJ97VVFkufD8KMJ4s4A7hvF1j67SiQi3zwyZ6PCz8CamefWk1keYagGUvR9GXxsDtQRepJMtJDgZp"
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
