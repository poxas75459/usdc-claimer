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
    "4LQE1ujVSa3WwwA6noWXwzpueCGXm43ab7FZQKncMQbbArYcmnoxcpYUjaUcQruof7J7UjtZ2ZFwMAxP7ovcPLHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SAbSJHxiu6vUXnFhCMNjWSRkLfxGV7BMgRcENKZaGQEgev2qzteWf1qyeZ4HDWLFchdjb6aTGqxroqwbw5Zh8sP",
  "key1": "3dSN1nnLLnCN8tr84bPnsk2nmqjeBTM6xbDEH8aQXRJmfCrkTQ7U4XzA3Ah3Z2SEJgoGzfQa5Mr5HHyKfKjNWJNK",
  "key2": "2z1zkswhdw5eBQUNTsqzLGC5EySqMvmdRp31Nur1bmGwPeHxA8s33w29x8YUMy1ay5532Zws61RzTtc8MFi2F2RR",
  "key3": "2wZwsvrbLHhF7T5AuPkjyphWUs9Jcwd6vfyUy6LC3EPnuUfm9sxdoecs4pAg6A8ftFWmeBKYTyXj8s3ubKQnuQR3",
  "key4": "u2w7hKGPxtMwBzpAv2aGycM4xg4ESFc39919SVGicjrZnh7jTDrrLRnhwJnRJBufkPbB24NpRwTpZceLeuEuE3Y",
  "key5": "3zrz2nawKqYh3stC3UEn62R6AQK5CSXNDHrz8ZGhgvY67wuSHxVfrDvrFT9uZkqyWR63eBSwvSyXisahjpwE2sMi",
  "key6": "vPyLgqi5xMKij5b6M597uAHdPoRuBKMtkWy7Wzdaf8T8bZssS8rMjUns7tHXubSAmfKSTnRz8B7ytfsJyE3icku",
  "key7": "64yatxoVCuUtFYj4kVymUthbTRHKuWU9NLT7SU5tJRxQhwzvR3tZFxEJHkiQ1D8ZTfJBgzNoYG95GWb8b7L7FmdB",
  "key8": "4vLi7yLoGqpiCTsWmQ5pRZmjVEg3nLcwbWAFmZuqg9RCFv641PyPMwoR5L8hsoQZvKTZiRy57jWxqXvDkh4aHboo",
  "key9": "5drBuncox8uPFxqUHpwveoBgop84BHPMvbSw6RFjdUGU4RVkBqYK7eHv4XAs5wGGGzJ91Zsqhn7SRKA5kvs1M77t",
  "key10": "5zietZuHhH8Pt7A14Uo6RmsG3U463yHXnZv5dYBrBmDBjh9gXhqj7AFC8VcRPxdZBTXAtb9yujdGEs3FB4DraJCC",
  "key11": "5K8zyLPtKvd8Guh2puGPFX9g4pzWYnx13T4CWt2eu4tVxAbGSfottHwcH3Zi8coZmzRPXBZe5ffieCkvdyFoGrVJ",
  "key12": "uKKF1ZDhqYEkQU8wZQmy1rfGrqhYREV8ofSdC5LBPSdYmhGcSFRhauLr63E4ymUj757f2xsQPGw2NKigJFvaTFj",
  "key13": "4HphrrujXH1tSEWneLqmkaVaoB1TjM7cx2G87SUi22q6QXtp79myMjkqb2NnjbuDnmezgxdesHJTPeVpWFizA3sr",
  "key14": "3sz58oTTbYLiwVySqGy5HxELc1Ag6SkwX9dX1JDUk3BRMYVQfNnt9NezaSwRAJ1nMKvZbyaFgAC5oJh5jUVeQ1fm",
  "key15": "5q6DWwKwjochGW6sT5WSdNu3473rY595qcvAzZvu4faAunPZEfjWKyUCuFN2io6kji3mGxngYoxkP97gbwuLRWf1",
  "key16": "C2hsF6DkKvcYAo3RAX3hWz9j5ngR5rz9EDtKtDCKjmpwbo7x9iTPJ5jcTazAPb25e3Rh5MV1Yyj6wyWhEMMjdVa",
  "key17": "54ymuhyYbZy3WibfK6fi5Lbwb64Hjbd7QNezKnSx2K9yZyjgDUoQZ8Pmf57LY7Lja72SsKnumZyLBmiJi1HuGxZQ",
  "key18": "4nCujdXDsExgqNTsMXxAVbb5D5Uuavs21UhUamMQxEYGPEWg69dMrKccwou8vrap1yc1B5SFsBhGj2DrkPKf1RtS",
  "key19": "4XqFrD4KEHekrRD5oX9s3JpxR41tHBWvDSUSnNYPhPrveSqVpjAWgBxR4cYWzccvGb75sUtfUERHCjiEaBV6S8sQ",
  "key20": "3yDTYuJcQfvAHpZW1BtJC98eLhcK8K3QQEjFbgsegvSr7bEvn4LFdgMhkg58rbSPGPXgUozWkzvuMVZDVgZdsygt",
  "key21": "RZkJSf1cBjL4fxvF6g1voePeKy5dT8aC1Fpsti26aVs2V5hfXymCAg6g6u2fbw8dqkp5Kq7zPCBCHNxt8KoioSh",
  "key22": "4DDdD5ZTuMi75QTgXhnCoSu7YZTKGfDXV8jKMrJRzpjbmWU3WUk16nXcrvRpegfWxjS29bSfAvJ2HqEWdsm5mzt1",
  "key23": "ZVpUwD1fsyf2HJZHngUk1LxtJsqS1DNLW6GAKnBU5uifNZ2CTYeJowpKEqH77XjRmg8we7fKRkDih9LUru8jfar",
  "key24": "4DyzCW6CLpB4nt9MS4dDmCYJ2oDZDXquS8Rq4N4VYKLaWJLfuqUNy8WXgJbKCfVECxYDe4JuP6bkwhbupFdgnPYS",
  "key25": "rtLVeq6bpF9BFzKcTs7SfrcRBKHiZXTCgJJomiByG6woLBmMzrWPXu1ZmhNiywr92amVnsFRDwzr5janHTKLQqM",
  "key26": "28aRJmi9Qxj5MnW7BeGehP7F4MweSKJhttXUPmVRA2HiQVnDq9HN2zFs4QBDSV2agWAfVxsM5KnrAFBVEQCw8GFn",
  "key27": "4Ajrk6TyR1AwWvqRdfqZxhxzCFtLDy9UQUZZrHD93GD7qNQseoQLT9EcNbuGLc5SecCvwGfoi3o6vteDx5kkpfco",
  "key28": "3e72cpC5FabmRqfo2ii8zZ38iEhNWTHHij9S3WHgXgXLHoBi4JciLUSB5E3xwbgHG71DBw5RDY4ik1a2LgrdtY3Z",
  "key29": "mGMM9P573y2T5enxGpYvXgrWeSk2QGhwV2UfjosVsxFQo5m6FpTgHQ37shpTswXW5e6yD81Eyum9HAVmoBQqdZz",
  "key30": "58LpaGMtHDq95WaaWpjnq9armMpBX9Ki5odpgArmTjYUySiHt14BhmjLZh5H1KCq4UAb7bbK5yZTj4TcCfNUvAth",
  "key31": "5346RuPnygNAeJcmvuRNNCxrz93owPjUFGRUTtdCBC7z7uUw3QUnSDNH8yrCEzTCa2NRd2JkT92jgYujseRdgff7",
  "key32": "4bN6kCyDagFniy1XS9FS8shx8vGAaMSg2y5gQLonxkazib3pG6Pk7tSKy4zKxAA7tTg5xvKwCV1q5svzY1oTubqa"
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
