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
    "4wpS4UcY448ruakW6HzuoWEgmakn9udyz6SVygF1BPKFkPV1PRsdRWATLL49agwFSyip8qnA1Ri3xD8ZeghCqWy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wkqcBZehV2rH4VyDgzXvhVWwqX1HMGQp7YUzZA223Dv1yXTznnQrkdJp4BhLSQgBuo2LzseuxeuzugfANSupFMS",
  "key1": "MtRxbZPd8L6rbmraU5ViP8cBoKGHXGQ18ZyRHSykQ2y3J1aNKoE476ug3ipzRmVT7jTaW64uStYVg59kMxz3CYC",
  "key2": "c6sbr4YbdNwNEXkPusv4TMArjAwiNKkuZmJtQBeZrsBepJecScp532RvXsMcFCBnzqfcuwnjfgidXVRcEGwdckE",
  "key3": "LSfKBZnQ2K8Ur7LgSvKkGZnJrtuMAiKfroerWnqv45e6Q5vYExsuzjRG2NPDoeLh6QBnB6nMhujkybyP7Sse1Qr",
  "key4": "HSX4VSeH9LNyae2xfjRLq42qdsv7RQdFPbD5gMtJe1yeE3QjVCE29Gc3aDVqAgEs5abAmbv4ve7F6sQvZerJzmE",
  "key5": "2FouJmcMg4XiFYALGWaB5cnugz7MLsG9gFSCeFkFujMTD1XpEK3WrGmfwP7sA4dnnQvtdfYM3hEFAQgwysb9aWfg",
  "key6": "3dUu2fDVAdp1GWC4QSHSEdtaGgGkDiRTbhDKKEMUEoxjDS48KoLkQTLrhZN9A4XcaMUKBdLYrRox2voUs2jjj8RL",
  "key7": "3QdtUEKWWLmhj1oJe3cAYFkQRU1GVPKvipo7jC2g2JLC7HJDK3NfjwpeB69hBWYXSK7YQLbjLs8Qn2ABgC7pd4Tz",
  "key8": "4huth9npP4L7TCjezbHaqvkTXDa6865EpePm6Nic6DdDAX7nKZC3SpnP5FMTg6K8XQbLShCaM3nJg3gLQPwQbAz9",
  "key9": "52po3vG6GV2HdTtUJm7RgUFYUTYF3zuFAWyH4R7E9jdFnrpM5QVJuTwTBbV8jgA1QTcmoxsGrE1RLg1rw4j4euw4",
  "key10": "4qubwhvN3jrjdvopNZ7GYDv8TqNiTCnCvKFqbPav5jxCxU6yBvu3x4ji2rhQpbhQv5mUSe7QzAyamqP5AJjKJF3A",
  "key11": "3ULpY9rHKhTauSCHgQo4bwg2Yawm3vgPsWJALcqq9a7tnPJshcLV233gFQaNZk2WMkwBxZwpczSLXpct3guZRjqH",
  "key12": "3iSXqGb3pYWpH1kVJNR9QKnBvGJMyL4ThFASkBqfeYDP5Y11gujWCZ6deHq9fRuZYtR6qNfANZbCLYLVojBNfyTH",
  "key13": "4v4xDCxbb9vDLMZSz6HhWdzHzfXv5meKJvNapTX8kX9nvpc2oHexXPKpfKqxRpCmYuEfYnkoTVxgcsRgHL4c1Tk4",
  "key14": "5XCXvJ96AuF62xGdijERskiVN71kYCCYqpDJuvqooXMkqeS7D9aoSup8D3pWDKz642fH8o1UpuRZeG55VXx1gG4M",
  "key15": "3yuageYwFb2fxxBXjjVEAwP2YNKMtQX5vrnGyksh6ZZ3xqMWHi8H7QKpm7LiBbXjZNrUx9gSz9ZBc2Ja5h9LPcWB",
  "key16": "3yQotVwD4nLpodVW25r72gdPBxNmfsaZDoXqkhokecA13C2EVVmEjrhSaZV9hppJ5tbobmfCChARJ8jaU7pXJBdu",
  "key17": "5jap4Bmz6fBkoYVaxunHYm8fNU2adnxYPjZkqBzPbQe3A9CrrbaobRHqWWVsBiG8uwykrNaBf8uxjsiVYEjy2ogr",
  "key18": "6j3KGG9grYLa96nr6XKzaNQmjXLvcph2RjPVkiDiDHbaC9AGfrNHnLLrYFBjXyS5q3GJvRSaiYbFSGSFCSGFwGg",
  "key19": "2Bv1k13YkGE35bYkjwXV9h6TC5cb7tw4umj9bTufubHvNgieAj9zuXTodSfMKjJXKhTGyZuBNTrvhfXEzpBVAXmd",
  "key20": "586evbvsaNwqMRNq8wtyPGRqQtdMXcArQbx7q6BEw1bY21mqy5Czyknop6dcBBnwtyV73v4ztcwtXGBZwaRJhTZM",
  "key21": "5fHgbG1grbv4iCGty2LazrxUTa2d3mV4borPmMMZ2PrnEevaW4QP2FM2SNgki1Ywky1AGH2zvzbzwRywFvE9L64t",
  "key22": "5Qnx2ELQEZxTTwbtpHoC2yLTLF4Lh4Pf6is1sSLcrZhFyjH3RhnZktxywRZ2zF12pPT9VtGVaTPMgPWkCzApRwQN",
  "key23": "3dXZdxm9EdaMnSZ4osuHmCiWfGVsq9Eco9Thg5BLAatXTBfaPqgmdtnwedD9bEzPVy2fn7RsuxyDNNYEhnwoMBD",
  "key24": "4d8hogUb2fC6EARoSJkN6VcqosPDQnQeNFHjXnqKc1WQP64ykaLosYFnTnwTDKXz6iQLXts6MDYPwiqrmiAUcwBC",
  "key25": "3ZhAFicnWFEiWhHu6z52qJ6NbwtinjDjEby9JdvqXVMy2g5rDF334Cmo39aPZJHVUi1MiSVqpw3sGM2NZ5GSa513",
  "key26": "s8hu9wPa9MeTofnfR7zg6EtACrWzh8pyy3qRJmqbJN1CGoy3VJwsANziN8P2Pi8UTTrhtaTQBwXE5vPmK883z7g",
  "key27": "2NubPR4j94VhXbZArkU44g6rRjVDshHEvVej7B6Zo8SbSL2D47Bwzhc9ssMw6CcceS1T1A5zCMuy8qJnG47u5y2F",
  "key28": "2Ebgjc5uCZwTRuRqypx9buYHGFHxQTitwq4g7Bdv5StWwkba9KyJUyf2FbFhPMXSkbXXBNcZgAcXWdq8xxFrdGG1",
  "key29": "2S5c51jFSHVxK8TeULB4mfgh9aauU3Rvf4C74YaYdxp1xiBMFiKuKMq2mHow3HhQW8TZCu1XkYPaqy4PRw9Eknpa",
  "key30": "5T1U6PuxeoGMKs2nLHiX8S2xGecpbctUfLyXmJeARi2iM1KPYuhrtHXXuv6qzic46WNatWJC8S4mymv3RFrXt6Mo",
  "key31": "5kSR6FeVKVb5iwJk5T2DNrvT5KwszMiuADn7Nw396EvpNAZBJDnya4SCDgSfB9kvozbUZw73sjzCGce8KJ6EDr7M",
  "key32": "2x1ztchjC3zSj7ujyWGetUXhTqi8DPSHAxp7U3wNHaVWAhCnBuSkwCiqkieF33UMz7C8mgvKP5AsR55enGSUsTs5",
  "key33": "2unFBPe5wPdCyYGzDKfujn7KTYUKuh7JhpXHdQ9Pn8zu6B4XnGkCmMphqWJ4YP4Hv7YE19zSvJfnNe9cUdnSjK91",
  "key34": "5DwvUMFTEjzNyAoiN27cYhF71oRuE5LmYgFgdJ2T7FAwmKEaXnMd1bBdx9hXS7PhtnrD1igBonq9EuRVuBi8Sbr9",
  "key35": "2pK33AUZz9dvqpmLFiASbuUnR8CrUQwvbs8ZfePg37uNiu2WqQvK5hVSKySSNf1JeoZuaJvfRnKCcDgZwhjUvecM",
  "key36": "2bYNgbPeUFVVfFoCmHVUVKDZfcKYAJACwkkUjVQbsXnykAPNCyf4rpVjEGWVNXSZfxZTBZw8onTrRxppXiuVJ13m",
  "key37": "4bU4EVmNYNw686vvA3m3JorC9bvkfuWwy4A1Dpsuc7r7DidwfnYxrYK1g5Cg8Q6rDAikk3VXSbzWFiw6ePaHe3tW",
  "key38": "5yqcCAYsVnR8GRUzowNgJcULUkfWDYBwHKtvDV7cNWUqQQHsQvMzShWccXudZtKEv4wmMj1UHpbxJu37eQA2gKy1",
  "key39": "4VH2kTQu8BsqkLNuXbQba2haswTSjxaAkqL5jhBpfVhNsVFo61AoCohMJiBKS8R2cytUSsZMYAuDGyLj2Hnfq6jM",
  "key40": "2jf3sHi8bp6HesaCKN2nZwyA4a7KCCFpm8WXmF9JCuXY1aztwSYkGJ9nXDoJeq2DYXfC1iqzh81PvPjuexb4eRLV",
  "key41": "3pMN3p9GxEpksr4oYebQgZz9Bsxrd9743YedeXjyh5ttgyCEPJeJYSGChah21nYfuaCWqa7TN92QVvCJcvVNUJoX",
  "key42": "3mCkaFY4bx6n4Y5irb1Zphb2mmq9HQnnDAA3nmBWMmZJQMdRFTAVHXQsbaX89YCgqChtEsQ6FYf1fCMqp5ZXE61H",
  "key43": "3tX433bER57wzBcZt2Sk6hzx6XxbSmF4vvSPnqh8SDPgmi6vFofrCBgefwtcNCZXUqEPnXq6RXNKqYaNBY7BqjZn"
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
