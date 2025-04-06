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
    "sRJwiGVXTZ84qzqPJcy9L9cnpph4dmBYzkc4eGKthmvqArz7P81bsHSveUcEALGWiZZo9okotVX5mygdzSovJwy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XjRtfN7t3N1M11mFNk9GzhkQpBmeVuukNjYg1fZwSn9MTDWRd5nJuTmscK4VG9s68qGGYwxYs7U9aVLpBxyUjt",
  "key1": "2FMfpLBA5WB7ha1rtrAmUJHfr1KdtZCif14KYg6uLrn92RkbSsJgLTVKQtrW1Yj6DgRb5oh4G3to7GWdyPoHM8m2",
  "key2": "33n4knnFvuYqdtvzDM8F7HnVfYtwXSmK7SvQeK4jKbZsMhbpCZbVeQySmoyPM4e9JzQq6jjLMzARGgoA7xktvhxg",
  "key3": "3TpBNtqBrVBiJSLEFe5JyFcHMK7FEneWuZk1BtzW9Uya1UPvohFvVxA9ZR2Nia4NtM6oCkbTCj7FbWGCDvZRLFax",
  "key4": "54H8xGXkFWbeGyC5Cpheuz2sxStGmCM8WoLDLW77QwPntsXT5cAXjWagV1Sy5aUbYk1zfndNuPe3vHByGHbG7Ha",
  "key5": "3PNdb1kJUoXAB1pxR4rTtDwJy7sN6FFQ9Wjp8JVnrUfDaHinF39oYE1Q4sD5Mg28adAZxo9MW5FsotzDHf4vdMnn",
  "key6": "ZrRMWomUm9Gcy2SGVYdin4q3MpefkUwFvtWJqJsGWsXfakCG5CPSDhnvAiaL88WqPCCoZUM3HT2NLGB9LQ6NPdP",
  "key7": "Si42gosXrmohUBj8nCsZ3cBqwmfwTE8ZGU6D6AHYmxsdWgMeokL3kzoJVUUVLQdmCE96cXruiPQ2RfAkxUVAeHK",
  "key8": "41YBZCG95iAjZyJK2wbVQcL8Yz6nF6zQkdoByQwja1Vkvf9RjVYjLABDMtfks9ThqdZWhUoRAErB9Q9dpQr4Vu9f",
  "key9": "58DxXb37LsnnRuafpU57w2ZyPdWEbSrPRth7HpDueWfqtGfWNY29mx35rJBryxL9aqD73T6uStxV4kgav973cDrk",
  "key10": "4QQJ4PhBDjvpZWYX98c36x39AkUhpHudxgdouzWdvV8g2rgomQxNS4gj4M8rbbxGPsmNupBtx2evJKR4Py6meKQN",
  "key11": "LE2K63KCKc9kYJd7TpTZqtQsNBCUD8c8WLPNYQCSVoEghZ1h7Dk5dZJ7DrvBnj8AJwKVXVc3AGKBG3RXpJFv5Ko",
  "key12": "5r1o3Jp8cjPaQA8gNdKqx4is7oVWNDu3ekRJ5qTmKJqvHQX6GbhFDdqgc2ooYmbX2VuB1hHFAhAGMzatyRVsQPi5",
  "key13": "3b2LJ7Cy1poGSyP7wgx14wEtt63Dbvw1mtoABQQQJ2pnapzX5sFLXr2L773Yx9qexh5g4yJZwtHfMMtKrx4bXkUu",
  "key14": "Z3L15Ti4QZWr78LfVspagDRdVUv4vpYshm5UTRSqNZpCiCQ95MivcEzVmHCKvEYVXUhuDthxFw4bqFK7KCvTDL9",
  "key15": "4ZmUao3sXkspLHezgnf5u5Zxws7daUatJoHpfwzGRNFcBYLPGz9LCarSMXRmgL6WKAaf9b5FoDwahcBZM2u12m5q",
  "key16": "3aP7xdXx5RCcmAWpHz7jECtoiFz4r67f6nFdVSskTrvDjPkxG6bPM12kcB1rS49RAXPVg3RnzXmMRRVqK8K5ZRV3",
  "key17": "39Cfq2qd3HMdQ9pZa4RNP9pNkgguwEBfFZE844iHRR819dEnxvywHt9A4M1t9gC9m3YtXnNGL2gKg5XyqjgkFpD2",
  "key18": "Cf6TDChDXdVtqE8r6Q6k23WGF5vGraKcq6drhKhu53VSBGeQRdaU7sQnLAjUQ7KQZoroh6H3GGd4GcvM6xMazUN",
  "key19": "4RCDaD2Pfxdw5F8LXqme7SQvnwnpfyX2XPBhYuNQRckTCTyNvCV2dAV5EWWKW2zv7PCqv4DH8rCeDTj1LQMJoFi9",
  "key20": "3B26jzBDH9rEcHBzEEX5HTjcKcAmzCf2M7LnEwLwfS2XijXi7XH1xcVcvyxS9aZL7wincD9cRjpZGHFUZegiumVc",
  "key21": "9deHULFcmzserdtPvwYpvjQF9gvHs4T6zjt5Uj2iXCPRM8j1QNrVYq7LCaht1sNw3huLoSN92gsdpNVWJ5Y5B1y",
  "key22": "5bx4eDXGcU2tKu1CVchoRRp44gUoreoMp3ytysap8q17ywZhSEqyQqcnU3so13ntFKuL7YaUZX3GZ8xQ4LVg3HjS",
  "key23": "gi7PRy4AEiVX3VzWCFrWrYCJF1g6dkbargU8LDfWqH6dXDBRzHqQCmYJKxXFMwbH9uL5XNmZ9ZvQSRhKHUe8xJC",
  "key24": "3yEga5Y2Lvv3LRUrgsB3rQDipro6HqaFbPEQCahepwfaps4K8ad9MUC791qRWy6vXzPrGZvHGtsbYJMEScWx6MZu",
  "key25": "eCTjH4H1NqSZ382k5qHSzmJFGXkgt3C49opV8nBAf3B7no1juWLL8bcNHVQZEsXFLdqW7A5E4ZPnSpFHkKb5X78",
  "key26": "5kxnKSzvvxzdScMvfWz2SWmmuBwxi1ybC61WbdoQAuAxYmtPGQJrddF8CWR9rYxDcjX8oCSTDfNiJ2xAVg3mwmLZ",
  "key27": "2Ki3v6JZwR2mpxGKbLA7rcPrPySPFCz1AhuN7MquwoyVka76CcN2MHmFHywBkAcEZknjc1mFqFS544P32JBXZRX2",
  "key28": "6QLzW8AQa9RGwQmw7wv4kmMy6CZT8uiTxGg1nLwEE2rHWWrchGQ2dXH1AHLis37FrWFaT6SBBf4gmkQiycfZa4B",
  "key29": "ZFsPtkFvhw4a2rdFLooWT3GCFBr8jdgNgEYWDYU1ZHqzhJ7U6oK2jkM1yVFcXiTdD194hw7FB317AmEEW9NDAWb",
  "key30": "3NGARLUGfiBP2LGG2xRyPXKq8oiBZuLgiHa1RDJJtGf3CGEwwNBELGj9twVi8Wf6qBsJtfMR4ad76DvAHqefZJCt",
  "key31": "5UoJ5L5FjXrfD6WXJMjFbJAQUGSpUwv2w9eCqcirWBRhFrTh9agoHBAAY4F7huWBn7mMiESppCQ53SRbhqxqRTG",
  "key32": "4bqS4YsSMqVH8Dnsiky9czYxcyjwQbc8J4bRfE6QKePcCPWHduHymaUT1Bgx6FbFfzsTWnb3PaAhbKYV7Uey6zhr",
  "key33": "2P2WESfEFdTy76GcWTaygeJZHfCuRm4oz8MzXrhw5awk1BikGmAoz4XcALH6oBf97ekkKnM1CESksa7FzoNENuL9",
  "key34": "2Cw23kLVm89Vi5z6R3d4gnJ5HrFUTjiGF13yaSezBKPRNG3arcu8ietCVW8CbDkkssMkLU8Az9aYF7EpjhXFzYr2",
  "key35": "5vnabtENpnL5qcKCugxtMpnhNsTans31tt8MtdD6NqnS2djeERVDx6oYSRWj3cDpGFAED1xchp2vU2jmG5depzeF",
  "key36": "4nEgMj6cHnS5RniHp54KXutDd633jYVcU7kM6ZxZbbqVNycY8iaw6WPCXsqNfMrfX7qgZskP2gGP4roYqYvJ1Eux",
  "key37": "36UxAC1EH6G7R614D6QYR7fx6ciiEUS7XvBsFgHjhcrHMCoXEtqAgKKnikAo5B9LL3aSmaGSFrXY25ndWrgCRtGU",
  "key38": "tcX8q5xtxpKkaVce3Tn56rrPVftngZV7CvE8JBh82R8RSjoK586GVUsfxhdbt6fFGMvidXaALYYWmVVx8my1GzQ",
  "key39": "46zrDfS4EjwCMRAswxVxsrj9d4pUWxQyVjZcnuvDMQEpqh1CRTEbjFYEkcHpb5CtUm78NDBD2626dw6PGrQ4Wv2z",
  "key40": "2poaqhxwNJBJMByQg6XHsoQAwLCEiZTFXGke5XgUBknCrtS9wJGLsQefLjSP5voXgRS7jJnbkHwZMhKPK2jfDw6p",
  "key41": "3mdDi6xufUcXB7TF12SknzeKcTnRs9zVzw5RWpYn9qHGRpAmuN9KYnEgy8ezYzjyWanyZGKcPHzqz7gpt5yx7noc",
  "key42": "E8TWNHjW3dHprjicpLHvEBkLTkTiAP63avq5RxUwFPBa3kvFHhhC4V1Qq297oUhMoK9eyszzSugLbmotb4QnKSN",
  "key43": "25VxkWXKJ9Et7GF2hzUrFBWsKLviUJqivZXbX4mNHtr13EerZEtvJNTBtMcUzUTgd8fdyGBnK9QhHb87EAFugXaR",
  "key44": "5GLcB4nx997Wi9ah8eZ8rokproSeWrJjDzCBUe8e9XTKSh94S9DaJhM2Nfk9o3PXJ44oa16iuwzqPrJtbNUZMtpz",
  "key45": "rkmtv9NVtFu1kcQ5GDwEAuZFgTH4ZgghJmdHeFng1hf2DuNjiFXZZbSvQQmUanEhu791KkpvmcezVWteJAVo4GT",
  "key46": "4btzQG5gnnUp87kPBRWP6KUcXMPmmdtPFQzQ9GHMks5Ua8Lk6E2srgQkdN39jSrzf8XrErmSGNgPbzZ8yqw4qCMj",
  "key47": "4QL9CZGtiGFPEXcKeE2MZE87sRax51PyTx53tceqLBSS5W1gSzajb3ZnuTndshAdfpKXBDmRdXZ8K2Hv9fwMWYuF",
  "key48": "2dfduEmNhwjTFQb96Hh74uweLhpukwByMMiaFpokVEB9nyRuw86982dSTrN9WttygXFBgKHY9ULc6j87Cg1ePbrf"
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
