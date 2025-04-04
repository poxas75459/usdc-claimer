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
    "5Q9LNKBT351s2t53tUX9mVC86fpum3Kpz9aDifvYbYBWgVuRgR9gej9T4BA5YSD3jdinKviHkVza1xJJNV6prjaZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bXaCAyahBXVt5GCzqhahGuWh9MxrL2bsp47mgD2Z9nrdLRWSuT4HhydRStRVBFpB9HZbbnF58YXryT9QuaGJij3",
  "key1": "2MGzWdfxxKD6XrMPLgMzpAtYRkFiShpoZs8XsFxXLNLdiCd1pFuaBGxcFopq5fCPKKsaiKi3UeRn9jSFjngeAjCg",
  "key2": "5DPrwQPe8DvFMSAM2aJpSPmUv93o4BZyukvtSaoewLsFCwYAiu3AcHnroeEvE9UBVArr8nGcg9ybLNqCYKsKv1MT",
  "key3": "5jPkZ8gqacEpJVk8ZHVNrfca7hTR5wm6wwGVFdC16Y6Jio2X8eU7iqGgWYjBhjqeXtP821RVH1FbCRnbzKAG9iWh",
  "key4": "2S13FgWXoAx3DudPi2SHEh3qyTUzeiLuDfXC9BTumV3fRL5rEM6rj5AnM45Fdb5PXfuTc4NPbR9PQZQiiSWkzrTz",
  "key5": "x4obCxGdRtEHtPnFMpZZdPPMXmnpw5X233nrMC4CcuwVZruATh6ypmw9k6JQioGR29fP9SrRGM5jjsn9S68FBd4",
  "key6": "2AcwRBotp1Hi2viPEx4tzD5R9G8TQemfECdMEQhfHCh7iZuHTKFBmcpcp768f3iXCjkqqp4iPwH6xM4LNt1dfVwR",
  "key7": "bWGZxFE9RWmWMQwQJQdhn9afWn7q6s8wZz2ETL9T55sazTF41mK8sgHNDPGnDxa5KDUyhX9Tkss631u7dzQ1c3Q",
  "key8": "3Q1j7YKJ6yppzKffkdEEE8pg9efEjBV7mnDZtzbdwp9G2SmzLJ6LDBmkm7r3edZtMkgr9RZ7wfxyRWntEWna76sh",
  "key9": "57vrsWATi32iQMEc81vm7s3hshTURCkdX7PuBJwwQgmkrU3Kb7jLqokYZvrUZPHmzqA4miNdu7QRe8Ry7tZ27uQq",
  "key10": "59mH7MjJ4BimFN2LP1PaLG6anU9SRNafwFTqnp7D3uaGadnMXB2tWmVbi9yx8B7Rnx1YoiFqYTm1yv5DHnuxzqi4",
  "key11": "3nncyTe8kTqrrVyyWk29dAhM2DHwcvqpuUX3m5UDsuMwnh8SQwgy5qSmbWW3sncsBDqD2k8BgzqV5pKxyVA5VQ2q",
  "key12": "4SG42Lf8qwmFyrUtUNRyWLEmoe1XmgXopCuok7AWdNq8mBA3b1JofoA6oyu1cWv1zGHiVQuFNCK3fWgpgoAXMwcH",
  "key13": "5kFCjgpUaMWHwQfJLYpxMpqL1pF2AUn4Z5ujxRNBxYDSe7ePMrGUBJtuJWhpMwWT9vUxJTiBc1BeWMWTuXhwCE1Z",
  "key14": "2fQb25GJ3CKL99XmsQdsZWwBnER8UxtzoaiArktSDFjPGbpQCBVu7WHao3tbg2ioTdGQEeExBoUfK9obzi5VgUNp",
  "key15": "2PtdRr7oQazsm1Tmd7J4z3ypcAJCLGMjWLhq6DstSbc52wLihGG66egepadvkPYeitXxhXoUp9rwLWKPLHXpTtES",
  "key16": "s6wc2hepZmM6uAFp5fVVbL8t1E7rmgPaAApug73nUA59BTKRzWzKgadiHTevRrk7tPCgw4HaFvuwJVNYfuJdi5P",
  "key17": "5867XeYQqrVVn4geqyFL1Dfs9yEC8Zg8w8hv7TwPg6uHBhBTKBKB1gpX6BsjqUwmbmW8LgDVEUstYLzQwaMUreWj",
  "key18": "3e2neXM6DixYuJPuLqAe88p4bWy2DwGLCgfaDDBX9zfRDr2upEiqeyiXFGLfm8e5jiKmHku6hVTsqmNkYDsKkz8",
  "key19": "hBsmwDbCbMVx4qNxp4hUUCEqWFZegokFv9yuN5jX2Qgcd695TgDzF4LiiEUZ3uiwgWaas27zaaiZHGtgCYACy8o",
  "key20": "25X3cNpJYquK5i3xDgnbz1ALpkBrGhyFyySX166YVpyH7brUamwmRn1MvCRdx3RAqiuWA5fNbMeWqqQp88oWBMU1",
  "key21": "46hkrYQZRizsiMg9ujfwXx73uEXrtdFNGGwW5g9qGh3zojbBizjcrcseuqysComxANJtvn8pUKiWHMX76zxdZ52",
  "key22": "59cFKY5wWoHQiD14Z4jFPnBRV1iz4T2uesCypiy6bPwszuKRQNx61wA2Bwxz13QBJDdZrxNGJyCz6c7LSk5T4Zwz",
  "key23": "5dJXuycZpbxCVMBtdfKYkANX1dKgeaZ6cc6ygPnuS8XuwzGQXbijQ5MVsw9oP1DMaMSmCCod76Dtmedeefccf7pG",
  "key24": "5ZhsakkXCbSKv5t5dZMB2ezVqbP976tbB4q9fqCZUxayCUTbLJcooKbm9qCYN3LhDAtrmxk7Fo1BEfvFifjZwxvn",
  "key25": "3ZiQEet1JfF1KD98vxjs7gUNqy1Nggxb5fZFM7ZmKzrQEosiDc26S2Rp8g1NQHB5Z6ho4kepso8eJAVWhm5thLMj",
  "key26": "3rQk8wwFEARfvs27jX743qDmB7DuWtCJSrCZroVyghDVjrE48iFXkq8yaPeWcXszP5pxXTAMinyNTkqPVCmG697y",
  "key27": "2FhUZ1sUVWNVxgjhBuBjayEeRsj6bw4sttatz6FCW4GviCmv5AbedY2EvWJNsoDZRy5oVmRz8kCLco8JGNUpBpKe",
  "key28": "58RrCARThos39ghntsifA6742FJ4UJgc2kMnyYEVH5WKF3bpfALZnPM7aNknmd9hbSk1kApQt97yNg45kGD87xeZ",
  "key29": "2kiDdETU81vD2iZ4EWx2YbzzkNbnwbu5CoPF7Kj5ib2f7i3i7b9EgTY4QtPJcZ35aE5jztemzWuMNtJrz2e19QEW",
  "key30": "ieaA1txr1HVizRE3g4RwXd6seNotwvCDWKaygJ1rn4o1cr6NPe4kNsMLyoieFhpeRBnhvezKMESgMXmovawcMHR",
  "key31": "3H27KrhrTGNs8FiB2dWBqPDRAmsg3YTE4J3ZbJ49gxKf5DWLB5HsWbhKRa15mjoc2gmVveGpR5LnxS36aqnxNzPb",
  "key32": "28wqewodNtjxHNTFYcJgQbLB13biovA8f8ccL9WWttn2a2fm4sfkbQ1pqwNoLLCcAa4DgQ894b52fqGC6j5hocTB",
  "key33": "5tFApjMhvrb2HCr7KpnRGwtXTa8UHP7BgRAEppkjUJVnjoqhTvuRjptpP1CVNMbzaUhGFmgcuv6geL4qx3uJ8rhB",
  "key34": "3ePj1nioDZHzjrLCDzpM2Ng4UhnuzXo6QDEW54pTkZsWuB8PwcrhnSwWdjp5sxn7rRqB3hVnnDPLnHynzurNGjCE",
  "key35": "4uxcV7JyPUjLv55s9mkzKthh9UmTHmDkkzQwrjpGEEq11Vv1FJfgwimTTgGk6fAFb2bUiuEhTHkmZ1TBs2uKcU9g",
  "key36": "2ME3MXks3wP7Crug97VFEWbwYxKt4GBoVvkgumGSnXvvgohehsyYMNwpJxwQxbizbd5iN9qkeqW36szh1jRG6dAB",
  "key37": "b3XJt1MHyXiJG66dor9rXyCZ6FiJcMXBQm9NCRRCueLDKgMuNriMFThPj8wNoS9pgZHj27htjaiMrDqBBTqUfXF",
  "key38": "52FJZMGCaUpFsgM3Jk8qs3dErRwrhTawDNWH8ZYwYmMzgzCFFG9EH7PNM7GYwdx8mqoW38wt2H9XAJB5SeL1FhA7"
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
