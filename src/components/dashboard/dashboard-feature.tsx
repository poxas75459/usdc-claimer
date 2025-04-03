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
    "CJhpDSnYyrCTGx3bjAPqkr9ySJUxnRs1PrGCJC9LQjQgjyXyWPMCHiUQVuYLw2Z6DY6y7jQRM5QSu3DtEq6ENMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Aq8GgkaTbSHGRFqz1N9Hfrc9yFnL2j753ZHYf73HE4ZRyMefhWh3LqoRGuRM8xEtqUH3jCcaMGjwHgcS7gatuq7",
  "key1": "39JZ6rTSMBSMg5DbvvTbhuBkyMQMMuNpnxgALwLSyrKvUpWs9khGYAJV9NEzHZxphUXuiq9gYTa7wkhbRDq1kduP",
  "key2": "2KRQT4PiFEk9NhDB7mXuJugMdq9HwYZyk2T16H7gXKfQGqeBc9Bg5bTcDFP9VNntCC9eFDUv3Sc4jtK6NmJyU6cN",
  "key3": "435WbiJ216pwLtPvvkHmoo7gFCHqWsVymLW72DNvBCt58tUWZJvtNqxehF5AaFSJBc2Z1ePM1fKzA1aYuyhScjiE",
  "key4": "V8dBd1fATnBQjRjBV9N74jZH3yDJjuSmHVCSqx8P3JGFjT1CzDH7MvLALuVXMf6KKbUzHii3s1Bc61s78fVhhVK",
  "key5": "5A9p1YRdS4d5mnJMPhDHRdk11X5kNjdkpt1jphiEVjLbVtuLxREqkS4mh2GhnpSpLRSpJGWfCvzf7PbyPKdCog7F",
  "key6": "589FW8bCzweZpoch6ddLqXGqaQEiK4wcBzw2a6BjMWoUyNrhejHtX2bZjrZMk9HDoAZ9G7SYQg5qox4sBKjCKFMN",
  "key7": "2UuQnX6xuaWpK1nY9J5apa14dV25XDAE3XWt75V3QSrvTMMJWfwnJCCgRcktgHQKh8VixPd8AZpgPvFoEoTnaH2M",
  "key8": "5MvyNkw8d2LQEyBYW4gK862hGQZ2aajpQzPh71vscMLRDFREygSF3tdbpG4i2H4F23eDW46wnmhGVEwQVagAB8Jb",
  "key9": "2G835PLvbXnJX2uAGfDBG2PKCtscZ7ktfNsRwDPk7SSRXn9d3XnM5657Es5UoUPPs6F6LrKcPQzvD7nR2QJ5NHP5",
  "key10": "3jcso1HQ7ZiEqZGKcmwLMti3dSqbmXFfCqnzHsByzFg5GjVLeT5m9w2S4mm89ryRRXB2rYgpko6onbuHt7MzCfng",
  "key11": "4ZobcW5x4f8CC2mkV3pAADqmAEbULfnrqUmK4M5gVmz4kPsoKgTdLRaaARhgUHN4hLMEhKMM98KgfRCAkuJGpVq1",
  "key12": "39jP9aygoKTH6CVkFHg46bcSWj1gsqfJuDLFDZomx2UhphUqmpVHgVRSabsrm4ySj1qpHH98owiN6fkqZhn6h17p",
  "key13": "3niJ2QebGCdLGN14xbj5DfYWqa3bWM72i11d8g9YXHq7n6vNeTSRxFwHVUXp69tz9dLFYqgSFVKRd374Hf3DwLxx",
  "key14": "2JUTY5tXEojtCcfTdtdvnUdjFPPGVSJDRK3ALvREcw6Mp4YmxTr1WTqJyANMZFmbAt2P2etrnHFYBNdJ8PMiVhfh",
  "key15": "246nxbLTjvV5TdATSnuu35FmdTBGRGnJFu56Sgr6nmkKtUrQgVR9f7sNFZcHFHTvFMqy344yhndSHxWx8RzuLRwL",
  "key16": "MmzW6higTzNiCBaM6RZAkWbfGu3ziCjWdeKYQNqJtoiew69fanbokpSXAxzP3hKgibvGuWzYngLLRaz8S71MNx4",
  "key17": "hXDRCeAovQkpAih4d41JLwYtJwLF7gaCWBebSVcfmApwJDoLTauJaqs7USRdP2HztDVj7cxkxeUY4v6fEqbUHZr",
  "key18": "3kLKot2pQUfR7Qhs5ZdYFXu2cUivktBCZUYxg7yN2WfnBSj6x5Z7upDcW3EiCwNX4DZeANNSX2iwcw6kMoTmwaW1",
  "key19": "3ke9PXMUeHaws6hbQyW21s2csdYpz75bw2NGtSTeNLmmUdgUQ97cndp3hcPibnvHdrNxUbhGjfMXU9mzomnRD5R3",
  "key20": "2ScmTi1SYn4XW6LwZEs1RKheefb2Y4sbjeBvEvTZFyLg3uv2vUCUs6r3bB8f2LnjMCFw2nFDsDBAYZ4Gg57JXvfs",
  "key21": "58vi6NSRTRg9PzckssNixVqxBxxJGj1iy5JcVHjHSmSf2vJ3RKnBzaNR2wD6wvZV3XUHaznMbHwHE2chYeUGQAEo",
  "key22": "4VLvChNSLoWmW44nuFGC2HjU8c6Gn4WMDbgHSrWbvomYgKgwvUfVgXqCTjdFqYKPr87SPMRYNkn3g6LcsEv3EjMP",
  "key23": "264Jb6TYskkwTdcb6fH5ciCeg692ZvqXDk9FpSbW4Vc3DKVbMnoegZwoJJF9eu6ZfNs3kpGsAgjjote8P8qZLeza",
  "key24": "4EvwSPqqwhcLxhJVZ9NHu6PQB2q1ZzrQ2RdMufst5X7BgVCBhtY971LcJGCqkMJCZRSCEwEXa6VkUinBv3N2zioz",
  "key25": "65fBHy8gqvem5ZV6tJ5vaFs1EpfcJ1dNvdeLf4AFwDt8tunL4nwLSFcqP4RR7S25fX1gwuapXJJpaUhwUfK6jza8",
  "key26": "4X4ji895Z3feveY49c1gfJGW95nLdkvD68GZPAUe7XPQ9inirc172D6honb4DfUtLRbZTcRrmFb2Ko8zrC54BY4A",
  "key27": "63dxGvpWSzDcaxoASDa8Kx2akwhCXCCKiKcqiFWNUdvoqH3TENwmGB6q5vXGyLhTdGZSsaSxqL8z8386w8t8wLaj",
  "key28": "2nY2iKGVnYpJnuN2cUSmUmwDCLFeuDD1L69ofrQ8EGouzyPQ3NP7RtAGdwVApThKbdMMSJNtWhZGbQB6yuqDzj55",
  "key29": "4tK16sJNiYygMMKShZkaLxwEp6xjyDDzWLvfaXpeBJuQCTxtWNyAyHe2SzTX7mNT3PzVhiDwiJFkZHwKyJFApEVd",
  "key30": "2FfWDJpSkKQQgRprJ4obKU6aREKS4DZkXwrP7NSGTQ3KyDcZivq73W1gFQBFnv46BwAL1prjAFs3aTGX9qHFiNru",
  "key31": "2pmacd4E7q15efbHZR9MGCP7yheQirUDrC1e2GiwrsnN2dFdRR6FrvRireqJUcYSRAfSria18s3rXYBWTPvsLHZ",
  "key32": "4t8V7SQqNom3CkMoq9vfMfaKEdENdx48rpdqxUZvgnkiq8GVXF9kukUf8ny5wNvsr7UmDdf6EhSDuKuje5XrkaGU",
  "key33": "39ZkYCJeJ9RZqbKsTyvrmJR4o9YJdm42jBJ7cPWia4Shs4Ajp3YsVrZx7cWG4JyXYcvEownYPLFQ71jKvss8wav8",
  "key34": "5BZs2KXuuPw6kvSJTmWL8nwW7sqWxJLDaEc3pDUtPdnifD8wf3G93P5jMiNBz252XwKS9vELs4DUjXAhnm512DtW",
  "key35": "5Dg3Yn2KxbWjRnxqe6bNV8RybmXZDt3cCJsLi2KGARCUvNz7UnRLNzAepkZHpXV2QPaX4hdgHbjtqKFcHA56m2pi",
  "key36": "4sw1EJ34o91hXYUzTZRr9xyXyBLXkWHqnmCwjXmpcxnv7pZDnX89cEqJn2yKu7WMcJXmcoFiLZhWJtsBfivWKJgt",
  "key37": "4ECEWMZEmArheaNh75qBdVE8eZTVezoqkSVocQ5oN8iGMzjAgGY5Lv54Qm9H1dM6DBwFz1nRTyRE4foPL6JZ3DcE",
  "key38": "3w1Fk95p2BitAqctaUqxvFQ5Y3bXgxGY7bWWtJBLUpXJftDWwziPqL91s2qGzcN116SrFb5oPrtZ1FvD1RhL5xEt",
  "key39": "5CSqTsKQLUdv27y6BfRLckxaQZqsHUm9s47F293LBdwJZ273y82MmVyAXZn4kMTBMriYiUZDEfGXfcePkv3LoQCZ",
  "key40": "5DyA5qw1aXD8umfavBUpPtyLh3NT8VrQqukGfJj31Hj2cLTgTxaFzztDAECEDcG72wtufi3Vd5UnLmnCKQFuirJ5",
  "key41": "61zTZF4wr4XyPiRaav9hUaP4vwJG28hPM6WETHyt3tErVyh7z9fBxsZS9wNrsxtZsBenu9wCKYbDicA2avUEmyUq",
  "key42": "2T7rdYzL8CXd4zFgB1krBZDjP3SXeW7YRh8VB4bNcmnHfS6VybPjzPHVPMdA9vxC7RroaAEFRmZznUgSkeqipGAg",
  "key43": "2Xsxdws6F948Zu69L7J91yxr9EkjqigxL2QRfF7dXuyMab6pxjbvw3onVcsUYQNkjjeY1JBkWqXho9CsUx3nv6Du",
  "key44": "5BwkmUQWziVk4wmxUe4xqhG9gMJ5sDcYFoHoLsS6YVAHwCm1Y2HXc8RbfPD8FDdZEio8R2WiqZYy2N16HosEUuxs",
  "key45": "5meDCjMdez81XP5JHXLVzLLmqDLzBd5r8WHf35jCmmjt67es2DjPmvgs2Ujcys1ADokuBXCAXrcz4NUtq7KkemUn",
  "key46": "L4r4pt1xF9WhbJ1YHqp58S6fckDHy7SRHjvRt1nCu5US6pZdFGvvQfaWZ69yr1T3CqCaNc4vSxtRFbjbL4CWjpu"
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
