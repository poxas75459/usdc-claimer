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
    "rrNQYySSu3od3ArFMUU2qBVxqB5ijkpYbDdPAg8VyFR8iGw1RPavmpgygW97kbNsuXTRzQ26RiPKxnKvoRkWM7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZHzkbbJVCmTa3FQWEB8jwkZnKtkq4ZTEHyhDBX2MKS6DkWbStHWhhhHFKuWDNVJnCGgSbBDdM8NnqGo96rCyzD8",
  "key1": "2Gu1q1eLZY6rLUZvRNhyutVVn5cNZAdD7kMHtZfAFkJQmdFZEpB1vMa7j9qYreweUkxHjLMyE5UnX2WGDPXn6tEV",
  "key2": "mQ2dYtNo4CmNf1wmcYBqWSjTCChywnFUCNRjPWJZwAztFQTnDnfr7fDUb7UjenteMo2eu7bMvJGkteNqeKb2xtF",
  "key3": "5nGY1QGePvHSzDL4evJzYx99FSNkzbjdNjXByukLN3Fz5kvE3jGixWdXeCi3wh4Wz75eBfucvkw6cm5anP6ShY93",
  "key4": "bdXX4g9NzYCwgX6TQBB4rXBk1M8gJ6JAXMBfWaqT4d5tgx432KswbLUgsr9zWx943NNUnwqz4LyDmatnqnh9trV",
  "key5": "3ymi2fJLgiJ3xNcXaZHvGBN8VmUez56UuyuTMiCkdHmpAvJRRVczV7RgX2mZPdrCHUVpAFHSNZ6aS8VE1udTnWAW",
  "key6": "6CdeACEzjNJSQdXzThS999awHUhUR4Pe6M9Vkf3LmU4GDEDQ5AuefDDWYT9smHMASfCTVUXyHMWawNpPDZyv9vv",
  "key7": "52SCYeAcMMWMEWnEoTMz4Nh7ZRYdunnEgCqfxXnTxBw821piNSY956fZgXbaATqx5yPpwvYvj9mELUHc78VMafk6",
  "key8": "No9HF3FnazMHx2NuhceEzPCdKCAdqS5NrXQHapUyKaa73jHJbHiMYaamuZF2iaLg1UN9xCTiqej8ktELnq37ZVx",
  "key9": "4W9SQqcV7UhoPbwEWNPHves91WJqfE7VPyhgM7G1JTkiTB9YNoxmruPLKn9kGjNjqNLBRLLxvQhwLAutdCp4tAJR",
  "key10": "2fWvHbQeqP38VKqxUGnMXkefXD7RA2RWGTGGhtAzq8QE99C9JJ1GuKksGsDSBTAETvY1eNqtkaaM5wJhnJLsxfpJ",
  "key11": "5oRtazGr4MxM34bivxaPVxWbtiTVdmCD9yC6DccvUUrczedU1TgqDYPPdmkBAFspqjeAxXwz5tSPcEsZ9kmrWnmS",
  "key12": "2aVbTmcMgADFcF6Gyw38FQmNBq4kWej2533MCt9RcPufBkf8FJpyknezZYfSuJxaSWc9HP1onD7UBfnwPumDBjib",
  "key13": "4DspbnTSnRqFpnANmKcgYojgfT63mtW5tFTLVFvV4tokrVdh6aeMDeJNax3sSFFZ8BkQZEFctuG6B4z71sqEGDp4",
  "key14": "3ioabVWjjSwReW3h8WKZNvJ9MxMv9EywxUFpSDteCmrYG3kbC7U5T7W4q9ZcQQFRKem8nFfRjTMHTM2mGejv48N9",
  "key15": "347nHQzEYpwTfwMkSoKCePYga72vT5yLmLasxFYG24QZUmVpXFot7bevGjWi1xQthJZ5fMfzZRfqojcEMtjJBdbC",
  "key16": "5i8E32wGbLSEGzsFp1T7KCSxtmtPr291swZiTPNiRHy4a8gRnrXkCUMXh68iCx9VuSwrf4c6YcFYrfDBbNQKQjta",
  "key17": "2adDj1NAa7YH3pcBvnc8RAvshx79t5UfqE7Rv6Tj8QQ5t47TZGk8SDqxiP5KzwKFr6MCdSKj2AjXRuPU7vnVwhTw",
  "key18": "5u9CWxn7pi7x1UTh2N2gBeWHyCTSD8zQmiTj59LsTmuvfbq7CSa4msZRUpLdnTUEzT4oMMSdfUEt1PpYjDBPTAHM",
  "key19": "35jBbtFRQcHsDrdctioQhQxq3JTf3mjNzxpkfGc329e33pPZgsMHhz4j2nWPKhy9DjyM6a9Nft5G4ePMBLY6Pom9",
  "key20": "dUV43yMCz2VApV5fhdd9XJVeHx42ihdhwt4SCcDNe4yCBN2o5566QBBJDK6Yr7bsPn9Xk4Ty3TdRUPuxha4R48h",
  "key21": "3kw93isP6qUwUErzpX17B5Lu2ztXcTKieLZEzmZYV4JRVLAwcNKpcdDPM4wN3k1RxxFy8eS321HB5PtZcG36tifD",
  "key22": "2unqzogLChsXRgqWGwkiqYVNXszQf3c51mM9C3dtBXHgrNcQhbBdZEa1bkfmBtBjoTaWMsmW3SeNvoSTwvXAfJEJ",
  "key23": "2p8ZapGD5CHUGZjFW9QTMe33e4c23EmiFrCdxmVvCkGdqfx4vDtkTxFxytwM9TRLsLYgG9wiguJJ8BnZzmPrnWTY",
  "key24": "5JJH66UD654bo99ALqk3Fssi6mekrX8zTqFcwN3tjpsJfCKZnFiFWfhdM83Ww5az2pWp3Tv1u68gzDuC1vQd9YhJ",
  "key25": "4Q8MJdZiQNGXx84e7xC542kuDpS6bNYMeZJVrDFFNtbKkdo4ozFG2eeo2qZnZDsUK5KKav485EQCRFMnV8J2hv5a",
  "key26": "4J6LAGXM9QBWnpCmbfoupezhZhbhitFS341Cv6aQoh3bf8EswJDCsfjRzCQsTG1QKaSbdoQLaYrip26jSC2vv9oC",
  "key27": "ywEevZMzioDVF2kY3NGKPjvc9v4nyfNRtj2iVSVEXu3aSPHqB2iXb58LACMhvpZaZ8yJx3sZR469rKo5QfiJYFe",
  "key28": "5jtkdcNUAMam79h3B75kRvGSyUtT5DvzqZgkZMTLz2P5kYTHV7YT84LdNLbDo7BtmU1jQeAR7EfbUMhm6pN8D1Tq",
  "key29": "4mcZ6zzF3g8mHP5ueuq4kL6wzQ9bB7kYRxNV6ahtWyuDHJAwAGuS6Dhbn9hfkfwCRiyewE6czDMQp4FThhXgNzkT",
  "key30": "qQJZ3nFoivAXqwZXARuuQBhMFbB2t6RL91xr74jXL6t1srw8QxioetFC9nNyBx1Jb8Sk3jkKsDgN5NUAtVe281Y",
  "key31": "3REsgQVmpDy8umLznZoTu4Wi4HWbDyV1UuqJZ5Wb1Pid5BvWbygDYPGiDjHxY61hsFBESwqqKMWq6Cz3Hx56zVap",
  "key32": "2kJNDidVtj3udTaFDnMi2jJFemi9voQPrXbPmXQzNFjGJ9ES1GJtmmo4gn6JWGHiQHV1KakhzjuwgWqQjmjcEtky",
  "key33": "4bFbZt77Gz7smDoxsLSecvCoRRMuA8erVFyLFf8C4igt1gBmBoepRF8qvzhYqd9r46w9vYezrruPqqdPzG5bS9eS",
  "key34": "jKSc3KLTKMVK9u7G4QDcpir8PtwZkqgHLu4ZtVbaaHVguM5mrdtPDVX67GYSqAi9h9XLof3tH8xyj44GrnTtaAp"
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
