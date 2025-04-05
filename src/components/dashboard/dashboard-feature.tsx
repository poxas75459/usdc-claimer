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
    "4MeKrhgvDdec3CS7zEBmVRykx3GKzGpxndTAtFfq5RWGFAtZiB7VMuemZmrJo1ckVQ48CNJoCYkrxyAESk8ggtbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "518b1baWZUccejVq6s2nbDBg4zAMnU4FD2in8TRTF8zhbq9BY922P3bN3mr2YsSEgD3xuQfRPurK4C14KeXsWvVM",
  "key1": "2wDRWdeioTUFhWV7YiRtUnJjT2N1htY9c3zcJehQF3fSiqKZFTQQDcgqLqDVd7DPVbx7aDwdKJw7YdVYxeqffQuo",
  "key2": "tuzjxfPeFDg3cJdPEdhEzveGf3xjM8aeCZN4TbDwFxaK6abfG3Dg491iYE6Qnep3Wf9SmkE9ru89UDfvACAmvNH",
  "key3": "2tayNzBCZ3fD2aPw5S6DAKEh5h5xKEFMGZ7udeDSZ1esfbhdHZmie991LSQ8RXCFdj9K53WPTfPaF7XrJ26uwBVd",
  "key4": "3L1BJjspGGqo7X5KFhP6M1aapFSLStcUSyLeueUcNpUAHRwAw6q6yEK1GksFBtk1e9F4owWoWC38ivKrrF3GVYLL",
  "key5": "3s4CFr3pD75cjMtpCTRVkusFnsb7XP4ix82gF4sewh46U2bZUewHEm18qtEzpibJ2UiJT6kMgdUSfoAc3hhcHBXt",
  "key6": "4TexGAxM55sFuLuW6mWFxk8AricqAVcocq5bHMhrNxQoMmW86V2afuz8hJLZyasqqWevhf26emHrAa6ho4CNwuSf",
  "key7": "UcNzxdwQihHYvoeKGD5iiyDjqmgdWkR3P7kYx5r8qmzgzXMzT7Uzgi8QL6VotP72Xi6RVtZPqoyapcT7XCWmkZP",
  "key8": "FPU1DbXWNrS312Qp4JXGg9zmt8q41k44ccU1jEJRzvkDN6vHPKVy1c6DrozQJVuZGMeQEMztUQzfPx88yYddZ6J",
  "key9": "3Sh8Hh4Lr4bsitkPMFXtPKZA434t58D3fN9Y6BmaDWF8YczsT7cmEYyEAeEai5ik5bkQ4WRC42aLxuftF47xxSN2",
  "key10": "31Z37wDjxzzKmCirfnhrtH5ViZaVmocs7jgQw47sr6MY3d3gkwQJntg8E2imJWct3MrWAdjWxZkCvasYWhrkJuDM",
  "key11": "2MFgcfoALuLd3MVeVYigFkfKdDBhz5a482zCKJjuypzrxqZyMsisXoQeZRwt29PP3f8v4LGYVmrS2VT1n7YYia3w",
  "key12": "2umJjQg7ofV5WR8eS6nZQKYccLas1B3WAWQTJaAD5dJGCqZF7EqyJ2VaEsjufYxtqM9Dk6qrM1AK88FoAbNYZyn5",
  "key13": "3GfiBZuMbDzyBGe3drRVVPwK933YJcNd5tHp44XTSPSDjZCaBfPiHqv4DTpoWLDTHCnHixfpJpQhLgr6rv8VMWXB",
  "key14": "46cY3soNztxaU8RULtDaZ4zn12FMHYqQucBUN1FdUBt6x3gk9xdnbdbYonN5gDBvABJhpppEfcLUbjNjKHULrQNN",
  "key15": "MJ3jfmHfuLpGEfX3GtjfH4vkafkHDRd81YP8iAsZxz4UDMzuZPTqAAAhYjCh9nqC5etMpwTLd5zP5MjCcKiiYEe",
  "key16": "3tZQ5srh9bhZFMPXVKKQ2ZnqHCQQBGkVryaQupGVLBh3wSJMgTtv5J2Nhz8bki2yytTQefjPKRkoED6h6nsVYwMu",
  "key17": "2PADN5PLwqSx59tXimWimEpsHgYXyGB4bNqqodmnXResF4DJMdnapXvj9yS7wcZvndTSFBF85bzeRytZLxWz3EQ4",
  "key18": "67JQQSFHSDgk29gAhv4pYJW2XRXUUpYk3ADkyk8dWpgZQpbMxy6UdaGQwWVa3XdJ8sBtpEi3ypay9yU5P5BRDfiF",
  "key19": "3phXbUr7W6VH7Zj8jt4DLPiiTEK1VwxWvR8EyvAQv1wrrTCB6CKTZ52S55K2VuciFt6qf7q5yQ2mQUZ7EoxztX3D",
  "key20": "3tDKZWgPfzPg5jAbsqzj2mTmmPBk3fADesd3A5Bmkb9KQ26LEoYBzrCxPuaqTrzqe721RbAwTzzqcKWBkDUfJKiD",
  "key21": "4YLnhz8Uip83oaHaGdWmrM5NChZ3QBzoF1CgRbbziKH4cwzsQk1jkPKQtsHmyefDXp2r7XexWjYfaEt2z9K1Kdfv",
  "key22": "2DpJ4JsHPeE11SfTLDsAJDTPqj8xZMasAcv5upaLD5fD6DD2WBCzLBDMPusM2WpxKGVWVDD3UqdoWkFax5Afjcxo",
  "key23": "5samx9qEw9rz1A6j9dBbnEtwNvsPbkcTWKtbdaB1Q159V2NZye2TY3PhNjqPJp7fXNn4VT8u1nnV9r2GxF2CCthr",
  "key24": "3n382eaKBwsuS1ATDQmgQHrMy4LsudcG94Mnac9MUfCZCG67Lr76TKENzAdQvmuxc3qJbVdCgznHqdkygsqFwicw",
  "key25": "46TWF52x14zbow8xjYf69e2A96x9CQ9nDKt21Ca3LjJvJ2nKmFitimhNN5NqD6gYVsdvRsqkG37VfScqMWFg9GHk",
  "key26": "eHxfHL64RZ4pJ2tzmUntztCZG3ec3cDmLNAQXN4n6P1XupFMmC3fubuxg7bwqP6j2bLKfwHRY9gsRX98b4d41rT",
  "key27": "2Up8RkdQiHUL8hGkLCGYbJ6otPxf1s8NHcMKgCt4wcM4WmQHo44FnpmwErycMqa2WCQHhQojm1ceQhr8cJmfYFXG",
  "key28": "2n1CmpTtoL2uyK1KFwsW9pDM7zSE3aa9rHXc3ce3ZSqjRVqSWNAtYhiMMSAT71TCSTTbSmnHnpuA9G2uCi7xm4Dq",
  "key29": "2epLwhMqJCSB9YSnQLfPLikGgU76S5PLore1zMr473PN36sfuQ6xEXYgjbN4Ff7yHqjisYVFa8kyRyixz9GxSwXm",
  "key30": "4Pc7GLqTqEhNTUsGexdZzgSDoLy1EkVinUaYNUQnUzvceYZ9uGg9BtHgq79wHHtPAW4548LL36NbUfLNiur8Hs7X",
  "key31": "TZHqaZhCitHfmiXNrwfspbXKB9MocnUzbSqeTMqjSnvXyeHdnaANN76ZLY66iWregbcCnBRGktjJEHCQ1tD8Uk7",
  "key32": "T33VtwswnPUDhS9KKZcVhCycVo6WrXnoEzU1B4Rc68kbuYzwPidqcHN9X56x3EZR3g6KJJS2omgyHN2hKrSSR9g",
  "key33": "5VtTeMWZ8vo6nBz7QirNP4k7RGQ76BUYg3NgqhrVDBwp76zZDuKrs1VmUBzgUXdGb53o1bMBepSX3mZYhsLKPZm",
  "key34": "5sTzkMQEsptkmQhTPab3VjhbSaPsPC6dwaE4rTNjQ2z5hDYTEu81CsyLpxY73E7PSBDFvMMyH24qGTMjV3F8Gt5V",
  "key35": "5HSYFdcrtk4PjQcix7haZEtJwBfz9kDxdcdgjcA8V8DdqukWkdzCWQpr2zV6g2sZ8jUfbG4mwddDCoCXp6Czpozo",
  "key36": "22yqqfXVi7d2V9FZ1EymsDw9ZpKf68QjsHS1G7MNyGPssDSi8iWuddSHFuY417NGXGRHB9KEZNq4J8viedCdc7qw"
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
