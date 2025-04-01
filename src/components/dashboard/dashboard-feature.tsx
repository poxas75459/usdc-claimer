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
    "49Mp6WJUe9MLbmuKmGuvW253X2qKEYkZSRYdQ6wQJL3YkBFCnJRi4pg81geZrszMMszNLNkXjtUCwnVy97jPTXCL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DzbC2BtL6KhockR6VEA7cxqYdiuEQVFsPGYee8wrRrqejHpicQR8S1XY5Pmnxjex75ze17QnkLJsmMcWmzy4H2E",
  "key1": "5mvLZq82MhmQXmcWDVD5eeWoc6zVUDSKjJh4T3ibRRfYL9sgVrT2ggB8Mq94k2t9iVgtHGgabtBDQzpQraNFv6Vt",
  "key2": "9AGAkNCR5zjtsrBA9p5KvFogtFBavGjs4Afv3azUexghzYEC7QXaUTKSiAgfh5m4Tovgt5ZmSQeMi5KBpYyeL4f",
  "key3": "4BSeMaN17h9tLNs4iPdWkwWZ3F6x1kAnhw9Wr1ELpTMYzWV7jfowVeVZ5UQ82yRKqJCMzAetzGG1dFsoR2jxbQ5H",
  "key4": "5yJddMj6QEqieMNQashygef52jfzxKgxBznP1fqzWcW33pQHkQDTMyMTDEyEXQWrpjFSf1rV54HjFC2T1PcnHmJD",
  "key5": "66PpmEHtv7Ty4BaSAdGanP2RYb8inZ9gphHRk4NmXvf6PHkRi6xDZRAZzmnGw9fdqqS2MAsW1xvyBQWSHEEwVT4R",
  "key6": "3XKvaFBN1zeU9t2KHJ3qLrD5JszReXRPf22B3NT3zhXsH4ifJzPo58LMzD1aUt3dqQfQZZCCaqR8xVY7KHYa3ZVb",
  "key7": "4HHnRDFFsNaF8qZS817hUviWkXvoCr9nJMVhtqBe8fDJLfFAApgda63gWNct8T6P2Yo5VCejEvaEejhgQKeB4U6n",
  "key8": "2RTBkMVsBaHBtSYW63ZYYbhzzkkW2Te97bbrpWw8Cd4NQkNbHrb3zuicvd5cAjfArrVZysJct4AjZtxUZRpq1XXC",
  "key9": "5Gg8xnqNyqWCt1M7eoB1zkgv3tNrDJ9qXUGxGvPxC43r2NKWzzx2UiBTucV9NHKKUf3mkt2WSsDtprBHb453zXx2",
  "key10": "2TabrfVDbX6BpgwZbsjzciHFcMfd4KRv4Lany2WBrWrFNgGzmJ5rUuUsXmkCQpQ8JyVRURSvQZ9o8StfwuaLedj8",
  "key11": "21d4p6MVDr4cnD65VEpSsWtMNJYYJccfA6XBiZtoVbd7bVRrq1NbbXiW2ubnELv8gg9gJFW9SPvJK7ZF4arKidxz",
  "key12": "m92hoLhEqKpofAeCsda3wWTBQqFwEwSc3W8UFtZWFanRpNEqdpgwiA5vAfiTAqaw4DZ1sNvdZpyD8kezTc9MxAZ",
  "key13": "5n9j3iy7s4Xbnqeap2feBrNnBZR13CoWG2Q15zdyQ5kf5CKbV9qq8vjQENCG7XBZMXGfQkqMFWAMD3fgbuNJJZww",
  "key14": "4QLSLzQEoeXhWa4G1kCz6qnKsM8ouewWgjKbmqtSJmM1gug44JBt6zDR5bNZg3A1rJGP9oFmsaF9qcMv5GV2Tq1N",
  "key15": "4SQ5uHqcpgat6PELYhxQG1ttU28KwZRMzM67PymB9Tv8Ut7wFJ8huAWmsZrcsgkraVcLSNrYrWL9GJKbu6pAQeXN",
  "key16": "2xMuuH3XjM9ggEKi88LiCzy1HZuUoHFNbSGZvkf1zsmA11Gm23U5fo2mWX9yn4fDpST5JoFBrsTm4fFsHppvi9yP",
  "key17": "5r4EcBFXHkbKmuDVLU8rPftFTVhXnrGHadTLU3sT5iKuw687KYrQmTKwkUqAwENTPHJoDBEnRhWAWmjpup4xXKjF",
  "key18": "5s8oMHU8JUypebo9egpL9yw9e5LVSCJfcN57rNF91QxKej5fXnyVEgaEijC45G2dNV1yaDDijYWoVqHwmDkBqcqC",
  "key19": "2Bd4YgdCHcp1w8KogE8sqANdUtEtYrYsSNRairYRLNi2iS7EhJBf2HwXRLurdbg1F1aDyw8oc8zizSiRRUbxK9J8",
  "key20": "5Ueweqn9xBDVWv72MMTKhJPt4TPkQBHxDRvaFFkGz89HA5DxRgoSPQGwQdm4moT2qT5u9g7HVjXA58nY4xQwZe7P",
  "key21": "2vZeuRWNuEwFzSZ3NWXWTSpzNdwTXYnMLnPGpCGK3aDfuqJffTJcs2rFF9MJP4Vny6vgfmDZbAURqLo5bZD6G7Yc",
  "key22": "4TtvCQf98MnwYDBGf6MnEEQwoteH8NJR6vWv1FfqmrNWoFMTxWWbvCtn5GTuNH72iD4daVhDFM31BaKbN9hMHixy",
  "key23": "yQyoy1vB7PQKC8HuC5DFLxXauecPHNU4QEc99FxBYazgzTaoZg8T9jHfTiabLW8gvb9jbJn9gimtkioi5QUybmz",
  "key24": "4K5G8rUirhobxf9zWNmy3augVStP8BNZ22PcxW5ssyN2BD45bEQgz3CKWR7Gu191y2YZzdHAA6fjbH8k3RNzV8Bg",
  "key25": "287SDwBEKa2Ywv45TqDSajzGizU7rgSKTEwn8KkDVZYQ65LjaRmPzrqgLBBHvZrHhvmhVdPj2P1uRc6W5NJESRLh",
  "key26": "PSXgEKUd8Qjvgm21Nm4aArhvV8QZ53F4q6QPaQQVAivFviUEdqzFiCFBYs6UwykLvxKY4KGHkq5cnWeZ9UXwXhC",
  "key27": "4bH85VGM2B9u9WaJKfJ8GozKEocYsoUk7pAU3vb8SS89JgVhTHXnKygtbp1iijRbm9uNHwcuYVtyxT42j7HMuCWk",
  "key28": "4PoiqzkvU7PUHPPRKWaweXGLohrSqL1qnFsbFiaih1nigsiySSmnhkvcVWMMjAk7E3Cg2sSJQtFuHZ3spQL2Hjq",
  "key29": "fd4fnynYfAg3sq5S28e3pNzg9at4v11BLEJszeJx4NVTrdpTMbF3R5shgWswt7kdM1nNgGuAFYCJ5Z1niA2Dnch",
  "key30": "4pXoEZ4jmzZjUyruZUVMixJ1Jha7ibsGqpRYskDVQ8pfStQuh83KubBr6ae7Ckg75MoPmwBDhBQUqdNdWnnvUiBD",
  "key31": "5TPzTP3Ej1tZkYsQDY95rF8gzzwfZxYiV68eeFcmRsXUA4GAmMEuwA9zyaM2g7cA1GLPQfRMafY3tWsQazaxkYpM",
  "key32": "2kfMkrieegwuxPRi7CanD9qkHQaeHf8t4PbbDmJ4MUf2pkmgsrwPjKJsqURSRAA9hnTxqn12idiG8G2zN2wkXh27",
  "key33": "3zJFvNWGmYZJQbGCWqqF3Vqv1XbubFTPHKg2w6y3oYxoXLdMUxyFC23cwnQqVgjKVUfgqE5u7wuJwxrRF8Wmo9mZ",
  "key34": "4qtKJT7sgvTrhb2vjRFvrER4Tzo6AM9s6A18tJx8F2LgDnYqCHPnypDnVXHgbVHuvgyEXUWVGcJyehcjyoDRykcc",
  "key35": "4HNvKVdZFCHXztwNuZhAhwK5SK3Zxyp7uTsY5n8F9d7zFMASvTBu31s3gDUgUVgJyV2o5TWYXjq8xx8RjXTZ4LmK",
  "key36": "48QsXZYwD9K3vRyHVxuf7W56d21Hx1tUBRD9RwGTqNc86HyRDpAKhE5WQUG4YUdzGZCzRemhFkXHsNwgyfXusacU",
  "key37": "2sXfRKk7eCyMoWQXyiDdUc9WfS1QH7dFqoqC4dsSGdsZnaQ8651JNt5QNq3KoHZ5d8SXpE6nTSBe1b3B6zFqzFT6",
  "key38": "2TJHssG6wLVsxnZJtzVerwmTapfEDY3TQF7xfxizbFKixiDAqndnqULFkWv33eUQTKEs7PphqHBz8dciacisttFc",
  "key39": "67dVbPTCuTcbhQsQKGUtuyQ6gb1QBH8t1bEYSmaJdf6qWKkcMrSN29xG93sJC1c4hGfsPuxmshZ9N8uH8fw2vWL8",
  "key40": "orN9F9CWGf7z9kRY6nDsgHfMUg2MHo54s1K1SayaAqt55j9PTZLFekjbidS1zSez2YsdukPKC1SivBjxanheXuE",
  "key41": "Ujz2EqRgHWgeCYpEULHrDeCPi9bHZjKUjbcPGTtEV9YsUQA3Y5DKn33U9zKFfeYsfiJ9KBkPsqEwVLJD38RGTYg",
  "key42": "4P127Dm8xcfei1k2m2HG4tUBVTGGhctcbk13R1j38FiMvfwTcPiMWa56d1nBPTo21BXUmu5RrpXjHJ6UBtsvCk6Y",
  "key43": "QkgZLQn9Jvh6AvmhC5NBXM7P7qThpMQyGeARd14drdtvgqN2FNByvAgZbZKENyNuEkBSrEx6kHs5ueRJK4PSSCZ",
  "key44": "5CBs3amQ4fbrtQDASdm54h9hxtbtg6qDCqaYT9QtgzM173gcthevT4HV8SZ1Bg4AtejKQDhBHVjhJPvtRVC6yepG",
  "key45": "4KGcKYK8Nu7kjiRDm9pbWRLPR94Ae8DjsE3b3WEnat69SxDr59oVTXPMrrxsGF1oazdL71XHJPL6mGhMhaKNACAf",
  "key46": "4G9ARSD85pPErk2Jmq6MeSjAZUho9MmAFCQQ18F8mJ6vxWGr7YWU2dTa41vzRA2ff1g1R3NHgfV67DGTXS6PfGRS",
  "key47": "49Pgw5H5t7Ne9SksbvyVmKgTiqx8PfKP7Vgirw9aRmTFdLePFP98KQ1ymAdgF3qvER37i2Wrjf6pM1HjUqpzK1Yr",
  "key48": "5ekgLyLyf5ogBpiV3YYPVyKj3QMUHPAPHQZZ6LsQp7J5tqW9MNu7sCPwWPQNBCzjpBsEsnAsRJSfWF9hV4ehskWE",
  "key49": "4wnQ8NvtxvBouTvDrZ85KVuTPLFPXGQFr1M4VA3ruxdDTzZUtSHrk5WkU862ZJXQL2qzzyaipoNAv88DUajYvM2s"
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
