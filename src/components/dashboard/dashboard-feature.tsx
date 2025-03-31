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
    "2EwKjGQWyEsFHedJXXiMBifKMXGKtGgqePUyDnAs6YvJVVG7jLFiyYry6cCK7hk1rmJGy6LmCmNZcpcLPUCiofTd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oJpHmeVsDxkGUHAFRGFpZvjHXtwZyFRyMiSJYzzawaWA6KQeANTZWS2nHQe84Da8ouF1FU43hRFjHJdTQxiey24",
  "key1": "3B6rzXuCe6LmA2Rbw3dkRycanE59dAG8HP9Bcs89ALLGnhzZNHbcDYeTyDYQhjF8tXj9VxJRm33KJeyRB9iHtk3F",
  "key2": "2v8isdZqVgrAiirFfCFkz2woDQKShmUTVxiJLLg2BykjfprLXd3EGySCPXYmmUvUht8UY5b3ABN627UZzAS3XsmU",
  "key3": "53qfVKVefs6AErTNb6KfH6iA82fY3B7ygpb8qFETyu8HRLSfcGVxvaDeaU9L7g4SQ15KAPzogMRqanTQYKXihVhP",
  "key4": "4xufbG3bk7hNR6a7Dt3vsYuQtwvs4W92prub6ye1av6pQzZokSUPhQqNLzqB23848zPAbwt8KSyD9ejg1tVmcL7Y",
  "key5": "51vYrVD5WyASGCEUE8AyW2t4gwLqfrp87fV3GVqPDc7m8nq23qSKRcE67kVJPsy33dvDp8WXRpTXFkSk98ySzPzK",
  "key6": "HFcsqMXG4xMEF9gPPF2T4oSoSh2rU1kRu1KXCqfbqyvzMAM8RtcrXfeWRn9HVU6EVGGsnQy1JtscMF5A4Hek5N2",
  "key7": "4S3qWaFwg8agMYskaUkvk4Dbgx8N4qSJ3HCd3qndWEKortYFXZSycQ2MdLtY8ktxKnBxRs8EZUzaooEhGdEWgj77",
  "key8": "4hLdfaWfhEfxV4YiMvHVkqauQnZMD8VpfCsVGi6ro1XrjqtqL66YRnqS2nAECnG7QNv4p9rvfNabJnEpYeAixAKd",
  "key9": "4rcu4WVjj7KBZjhtgfau8bXzNeS6xQw1BF9NbbJb3whYNHuCps5qQF67pFGtpSyC5Bgfp65HGzLPjZKPYWPipNhJ",
  "key10": "4Ltk5mEcab4CT6dRAyw21rmo6kRVxDmCJC1Yveg14Wmp8iLakNjnNaD78Spt6sGXAemmbqs9zTcq4VWp3R5KCc3m",
  "key11": "5cEp9JPoPHNKsk2U3PTJgZhHBauzw2j747vkbKaMo2G3dPSUJyHt1FpGTMNDHucJYBRDG4xieUjfva6gLpP22s1T",
  "key12": "2pSqbN1dzMdJhG9GpwuC6UaKMpCLvhLWQRDrDe88tMgW7krUHpBouvK8woSdb9mbpEmnff8MNBimEZEHkU8Aehwy",
  "key13": "3vF1TVx8ddw7AekVopacsYWU4TNo3v4QAjgNWfS3Y5h1Hy2RHNd6x1667mu8dxFdYun8gpKfcp8cHTqeYwShy7Ed",
  "key14": "24PbUF1kC57qpp2m2cmRW763iuDcsnXLGYtN6DdahFQqPvhpQkaEFNa1A2fBYMK9R5HxGW2CL7GjBUDC8Po4zD7b",
  "key15": "28iEELftiDvsp219Jyt9Judq71V52a9bGQszrvwwyNhLMCzZnpfKPdmb1muVKvx6q7ZsnbMj2QQ5o2inQyPWG1RT",
  "key16": "6i7QzR4ur6mS9QyfrPxrFQtBiWuMMoy1ZtbCPjrNnqjpyJ3hrHkqaGBb6tMvyAPaYnwL9PtrVRr96P5PUKtU3aT",
  "key17": "5UVKPiLsrc5cMmBHP2yc1n4DzZdcLyRFus4DjenbMyt7AG2sM6WqMFmpbFCrHgmYPxoi8vCzpaQQ332S6EznBVQ",
  "key18": "5mhJMvo1JuLHBBE1bdh4YhbUWKUhuPmdeLetpi2T74nFeHWSQH1442AfZmtwznnqMMbM85yvsoDo3CJyH68BPp7o",
  "key19": "3x9rY4cG64igVYTtvTJWhgbHGZZzTJTp8iyDVxjNESn9qDWPk7oZ7nfoJ6ivSWAMJxfn7YJxaPnNgQ6xDeiVkUu8",
  "key20": "5TbB8n5g7V9exsu5kx4JtQbFG6Tk7HFpvNhdNauBmNcJPn1LDSEXqDaEzBJ63F4QQzLwBaRNzGQn2B3kMczncJJf",
  "key21": "5b8t6MaXXmcw6q8fCsGZkPnYmYXA1K2ejaYe19MnosfGqip7CfnHCepvTNrpQEL81cZHc3jrfZHYdsRaMM5cyxcj",
  "key22": "2NZCa7zYNtnFDxXTXSPS8Fz2Y5bmaWDE4awXUG3WprjfBytXSs17dAPTa1GBoaA7YYv9avwLb2rVEsPHvJ5n35PR",
  "key23": "44wkUEj7bbZETr9TcWqFSFbUEtcvxzuDrQideTuWkYmJgGr8N7KnVWxjcwD72voAc9wcFdiJ4jTbnKwzMpmW9XTy",
  "key24": "4RabX6HxBEEoc9siMNscyr9rfiYNNKKUvRRUEe8Vbwq8Hxc7Go3gyaje75ppE7mY4nHoNnyrdJkjjtJj4XsgEwaU",
  "key25": "2Zk3LijPbrcVVi15mvq65s1SqN5d2oKxYKvf13qY8oB7SB4XoUhWfEzRk3tQoYe6pwGDHcJAmhjPJ8h76NuX2y61",
  "key26": "4hKTTJsWoWsYbSdixWmuPD35Ktv6MwL4PWnCSnARUuRYBjzaWJ4vTvkrV6aCxPjx4678df6i25Se4Ji1VCJTh6fV",
  "key27": "oRyKuhrAXuw1pCNFefdsEFohD9Rct6mBUknaspJSedtqH5LBT5cZxdkpzfgiRsK64fEWizsLqwuCXJturHFsrY5",
  "key28": "3xeSBhCfv1huEjbhr37DBUqf65KY4Qg9ytwzQxFjJoY7jPGYT21TgvaxQZpJ1iSz37Cue8mC4YLKTd1RngsvkqRr",
  "key29": "37ZD3EWQENpynC2QDMVgC97Vs6rkNvXETXa96AqHcQVuYmBWwALisLbDUKST5w44Fttk9uHRq3ytGPn9XqfJk1TT",
  "key30": "25fR8UHC5yQf2XDcbqk4zNvAm8VVKCykgJ5cw6fhqZ9A73SZNrvaB5YVvnts1Fx5KUkiAKeE8uK9RaiZdqqCff8T",
  "key31": "4ry6knHtocozkoP93PpZQjWG3JNUd2jkq2nfFBvRT9ZxUZZKdUypuHecfEtYbpMu6xNEEPsFexBEhVhgFZ1vm192",
  "key32": "3wjtQTUWsY1srtFmqaYXhyvs1tu911hxWgCQ23AwSfv8rGGq1yqp5pxxqCqNMPCB64F8bjnXabkiJ1ye8AnBxU3n",
  "key33": "5TQHXRHFtykW6jcfYZCtjVgvVWi2LYhYMQPeFgMsevwJGMewzF7v72sHkbscP5VwanjfUGa8BhDUgGJtC2fp8EVY",
  "key34": "5ofdV1GZunx1kDxSHNVw2SNgfLGA3zhQJQPhZgsUbAcLUhQ9Ztzvm8aqoSx3M6z3NGKb3WvTCqUHLZ53LyFRTQr1",
  "key35": "2W2gJesfZVpP3wV8Kc3tURSNRmQjTDNBE4mqgAC1eseBxF6BbgnwDsWMyT91CK7K62tHNVXhAridm9F62CiMPDFm",
  "key36": "5C9bqaLQSxVD4HYiNA8VoFCY4JQsMS4YNSYPDrMEXycuyMkuJj5k9783HQnFiZMtsg2Hdm8wodomyjYHtanJwb5V",
  "key37": "3RhbTHc88ZqmurSkHWaayomvsTVb4nX4pUoLH7HVYyRTWCrH7ErAMoFa8MxNyU1L9uRVJxxomLYYQZ4yYwmnVvWw",
  "key38": "TvhDWDq2ytMfuthnaUnX5d5XGeUNdNnpUFzkqktstZbhiU6tyEz1kjqmGCtnLdCKSSHmBtnvRwZRyArgP9d5L7N"
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
