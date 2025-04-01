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
    "UmRjeAa6eMrUWknHfV5RVvxajF2SaC33PS1FZGkDMJZQ7ZCSoncpswrrZr2vkesEwr3hb5zW3h13h5UBN3sirKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EwNhqa8kMcPChq58zHnN5fwHbD3qNqy7MewTxYXtk1Zq8SqYCzA67QFSGY9T7BzDyXgrsde6aUR1rxzv47EToW7",
  "key1": "3qmUvQww5A1Y4GXsG2cy1NhWWnaExAHta74bEcKA4S6JKPHN92dauTTgJFUUsoqB36Ef16pqnt5j6iNitHQMqvpR",
  "key2": "tVfFcdKhqKePYQQMg3bKRMRDxSdixgoPnhwY5NahiZhkAB3qhPEC1GtxM2Kshi6KqDNPfuGvWLQ49Kx6zhh1VXf",
  "key3": "2iRneph2RPiemW5vyWWwQKnaxdmdNVFqHB3cLMmWKJKCeT23C8oabugTiitbRaqcsdXaUBfb4PuG6gJ37PBKwHGB",
  "key4": "53LfsCHRAWvwvg7vB7Pq1YLBaE7DRfjKunE7XebEAzniGJwtXA869W5HKunKsMu145KWSb2Q4btbDSybsd8bPSvb",
  "key5": "usv568RmiRTSeZ8j7ezbQXayuqd7goSm4gYhBVJ2a5ePcX3BMHXWQdLDhNYdC4NsNs7c3ZrUQ8U7GyuGhTskdov",
  "key6": "4MjK99StEHG9RKXssPPpV1wRcXcTfzqYVUw8USZiZQeGRDgHLBcAqwCg3gXjszsbkRAfTPN529W1JyPH7fQXK96A",
  "key7": "4FsmrgqU9S5mrTVRbRcSnEed4VT6199vTMZNdy1s28fDhyJ9tLvwNrbXooE8EEdmgNiQFRotPELdfkKjqR9QW6gU",
  "key8": "rf1P8u1AJ8fDfMYD1H8WrdLL4s7Dy3qp5epUjexB83EeDhvqnnEX3S2iAqUAjPmfUYQwKUQ5fv8UFGhpUcd5ksm",
  "key9": "4w6D4BVhYRW9nJVsp8rCK8fBnoYkPAS5DtLWJD6rXp8JmaN7VqdE7bYwecvSE3tnsQJUEJvVo5NDAzZFAQ3qKERP",
  "key10": "rouWYGD85aSvJ9Vvanqi1ZdGzDqVf1wkLNUSrbBKXguxz7HUGnzKA9u4WqRVK2vHjNmUBe7jMqumR2Mj7vzpWto",
  "key11": "36QPtb3Hm7z8rwVBjBFtNHt8H2jWVxjuvDCExHDad99DD3wVcoA5M7ScQZZPmMib5czBMsajTxNDasqUq8Jw5WM1",
  "key12": "21VXrbreiH2Hu3Q4xSNiCVbvL5y1e2YtNLYA16d7HFsNw532uFZYY23W3ZofQbeygXRLibQJunSQbNrHmWiPBVRa",
  "key13": "475UmnTiSgMYuujBFbyCR41LP897qW1XudzZGGauRxETUyPG3StTG22FdDHPD8dxk2nbbe5PuHPsg7ZAoNWe1nWn",
  "key14": "2GVNFDttJ6udMfzhnwbuRQvjTebUocHYPg9fCywgWwpuLzrRLJpzaZN9fNjQc6sQnwFy3YTtWJWHGCMZ3dgn8aer",
  "key15": "3Q81FBXqCpS4z6sfMFppsdde98t5pR58E9kExtEioMF2NFvmuq2E7ravPLRvc1PcbRiUMwBgZ4Bk4CsH5wpzsnuk",
  "key16": "3QfDmyhQUP3ZxizNaU99ffwp7rhEqWufreBAAgUWmGG5KsgxuDE2ddYH9pj1kFVEMB5diDPiY3RgDoVV7AAZ9Fsv",
  "key17": "5RwA8Fx7bFz2qsbEbDW6RTiBVBjQqzshheNcQ2p77yX2Af8mmhySsrseiWVSYtkfCAubvJBiNbyXT7HQTCiUeart",
  "key18": "5v1a5c3uHVgibbqH5xLw4yo5oVc8q6GmHnnzVFKkUSxKSAerXJajiHStKAeYWv252vFTXodBX8BofhizsrEzbi1B",
  "key19": "L1YnhUqeTmh3NwYuFiKx5yMycF4ZLRuwZib6AyXLdWkSA5SNawnraQEkkiHJPuLdCLwdw7oKdiZkxHjULXrDd3W",
  "key20": "sgoeBCwxGEqDjtPgdV2puX2Xyg5YK8mTp5SkGy3paPaDYCGR1ZHsGBEvSzyRD1JUM4EQcioh15E8oJAr5dQYwib",
  "key21": "4uEAH9oacgDRRvVc8wuhdjNNRAzJMeqxsuRNzzPjWZWjh7ExahQ4RsXuqW2JeyVuHFyeZMfvprgUqvGM713XMTrG",
  "key22": "meDGhbGjkq1HpUVZwwwGFiToRsVe9JbPoCnAS1A2nthqQcdhmUwu9nd2WW1voAJzjSfk34ULY72n2Phgmbif74g",
  "key23": "4biT6Gu4oXcBmmDwQ7ipjgQMgGiHfLNyfMp49UzV9tisiKUSxhuXLi5Pb4KS6BzmhAx9RiWFizBAH6JYVVSwxZfe",
  "key24": "3Pjt3pXYxpW1CSaa79xLo3xBGPUPiBQ4FnRaogzyXgoErnVdbDL2nGuUmimvxXX1q7AUkVkBEvJGcqbkb7Beo7i9",
  "key25": "2RmXGuyDx6QqqVwTVMTrukThBwdvKGFbdkGypCqwkYMxenABsdqrogK5UxWFexgcRkiXRFxxEWamzhQgSELfaq1S",
  "key26": "4QyFKygfx8oeCrXaG4qWCrtYYWNqEGZBHC2TpQXuA37yegRfTw9fwa35kpH768sFpUgZy9HMahqC84w4ahPbnCQ8",
  "key27": "Q5PQzMx2Qvx95aUxSuGkDjWBNNS3revUDddhYf3LNniWwJNT7myXmTSTEJzDbsSgX2T7A4K8fXEcwY4VsDGDu7r",
  "key28": "3Lah3u3HnC7McuKQrVzg4noWrnaras9vduzTsuiUcDtV5xkKpMCh3PTc1AH2f7t6eZyaRd2hZ8cfBErQQiErAe2T",
  "key29": "3qmtUbqkVX5enYTLrjmeevz7fp5d8k2bDizXzmMAZAD1j4GzLfoCtUWrwZPxPerqiTj9qYPU2Reca5iSP37Q4Rd1",
  "key30": "2wTMdndw4ohzziKTSL54jaYC8ZbLfs5zEGZz3WpE311szvb7WmqBU83KQs3tUFgFGZqhWUDXq28KHNBJfvWquUaw",
  "key31": "5uQHsHCBUPyiPWRNjyVTc527BWoLiB6gPPfMh1iJQ2EWhSyjtziFnHkpp91Z1zuECVxhqHBJDf6xEdyfnaYorSXc",
  "key32": "KwxtSUkZaJZhxaVd9AAcpnss7LJJ7SG7wQKJZ2PfZK7oKHipmnvqYMs8n21YegCSYSdqkm63vQj4R1JcSY8i1hZ",
  "key33": "32a9yzyTcfkjFRrKFhza62EPbdS2P9aPsR6RZRTe85DPUcb1JJ4kDgNFBfKi2jA8Hrrqp84fi9jGvj7F34HJ6YyE",
  "key34": "4s8vWmgwkHDC5fL2vHdJ2XEAhniP8ciesznvzHGyvw8ci8JBuE44266pHA1seWiEX4zQz5VLXfzuRxPHT2HAqQCK",
  "key35": "2s7ou2uqdr2mvo4KkP7rxAGqx1CKDAuc9VWn9LvojjjmWfZcgc8YeYyhDe5VtW8tKNS9txWavipsCT7osgxkSxs",
  "key36": "5Mjnm2m3AMgdug1yp9ukEQA9bw8fgZqV34QdPptchr3mEe5wXRstJn437iqaUp5XDL4FBs1YRWm5ZxjQ2SwVp28w"
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
