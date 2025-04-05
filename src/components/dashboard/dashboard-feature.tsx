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
    "4Nr2r7cXejPhZWJsPzRmWR4rsDZaLCodhziBfMjpwTtqSJSqCkGACsUa7uTxLPmmnuWowiSqY4fzBxdfcsH1u3UH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XUePFTPUaY5gzV3Cgn6FBiy4Z2KUqiLcj3YCLWbom3yNP7bMXJw4pzmY7XhTiGjDmt99UQQpLcDcfGdfU165QxM",
  "key1": "55Us8Laqp6FkaURxrC3kKZAeYB3hPioxTSfphdRZcHu92XP9QgftYgKHbfiHXLMjQQLH9N1rhmomrTQnqUXPYmJL",
  "key2": "5tHnNHHhUNSCDvG4FdWJVUZVAka3Jo8X2yiyx3722GBF7LEH2CAg3TJQ1Ze7fpsE3VY66g7utBuPQR6bHSWvSb8j",
  "key3": "3x1ri2KL6jkg9nLxsxUjVBG9oTUqwdn941fpvYiTbVN5Wyr9tzinDKqhFX6RBrYNPVN1ahLrikM6ga6vA7VxfE3C",
  "key4": "kU22YU63HG4BrBxE3eDeesd1Wca1DLGkTaumnofvB1SuTHUDejNdjhLBJAHCuA3WD6XHbtmndjFNgt8XYvWDf6i",
  "key5": "arzF2z8EziHQYAW81eLK2wqNx74EcFVJt1mC1BFpBwC1w7jwhh631hNPa2VTJw4x53bGgdsfqCqVSUVaKQJizzj",
  "key6": "2fbsev2z7ecz9kTCcp3TDzDD9xnQJx4KnHRDGSSyJbJqWP1tnP5n8Mu8ULr2WhUM1c7tx45zAoy7BRcucBbdFQ3L",
  "key7": "4MH9Q4Gm4QTfn5ZJN4Z3kPqFuQWFgzjtxFjNijVLboYocS8TLSXPvDxLRF6cuR2GV93ERzcjXBjYjZM7DUwztWLM",
  "key8": "4nvywJjVbT7qSGYwKzUpasfGLkTmhGrw8WofcHXxepqkZPt5GKB24QLu79dTXRerLdnbo53Hb3PRR352F9Zd59qT",
  "key9": "4YqUn2g8xjnhH81D8Tsnt82tWqSiuc2ScD2gvDZzGUk5J1f1ZGyg7PfNkkZZoDywhHG4rWR8pEJZiUdBw5qYUrky",
  "key10": "3sFuMhhLkrvzf8d7yVJ6wzSia1tDFsarGKkianEbhmqqpgADUyMaWXAoDvYRLY8M4ZHDZk1PcrvWe2QBbxufypq2",
  "key11": "4DzjuYpee8EGM6v5ymAZXbYFS4GwyDLLyXVAbZ9Kh99h5YFtFVeo9zuLm2ABqVyaDkTRekyYn95vW2jhmyAoDXPn",
  "key12": "39AHRTN5wnc3W5vtJipusSmEYFHGdUE4VUzsCdLFAbb22JTKZmCZYYQTU2xYxm5E5b7gbPRMxcJCExZe5pbdJdf7",
  "key13": "5AUqQDXsWgNZPbSHPKeRhYw4jrcMQ1S7iEaxzf5cKyLV1LxFzJYYwUdpHvb7wytGfu2UcEBYnBsV5KzvvrXBqpmi",
  "key14": "3FguSNgD5m84y6WyL1Tv8MS2VbBAbXi9ECQgkPey9wp3NPoTm6D6WvMHHrm1tW4fw6JPWmijBBUWy7uk29HKQXTQ",
  "key15": "4WgrzqB9J444qorDcvyTzixzYcsNrqquPcpHxKejifC5DaLBzAgzcuz9MtBqjgwJmjeNPnf9FTMehNN9jzHBmXBV",
  "key16": "bJ7A9PGZkRf2ZizhoP9yTeCopaYNFw2RR8XZYsMvZ3AvoAwTzXKWWh1oUDG6buhB4cPDTbS3yjpU7RyerMrKNkV",
  "key17": "4eMLiJxDWdv5akkNis3tEPK3sKRSbJQLdFhLWuG2Rf2tG5AcXUbhtqnXH9BKJhbScdUMKVpBETgyVTEPaa8vxpEv",
  "key18": "3xD3gJGUsMmdBzfQRqpk7SpcJcfbGJRj1TBJm3Vpue9qiRe8kF7UbCtBjycTm4N9KpWo7gkDKfgviEcvf14MyBGV",
  "key19": "3cHhuWuaFNquoF3tiMrB1SjZwRzj7eNbEy2K4Q4uwfekUZiCA6RU4hHXHvwD3LfTL2kryTcMh216e3efJRCzBPQE",
  "key20": "47QWWtwt9b2KvL3fP4tRvZFLZzYKStNnCAQd1Qrsfcu227UAbD9Wvh485E2M2fFKpVAf1bhmXmVvvsfa5RsDZnjf",
  "key21": "4W2HAd4sj9KF4wVwUvstkHKpN1uPX3Dp3QxeJCvJDNatGCbMQAdMVRnfLRAVWni9vJe8wz5FZqC75MrfMSYxnNsc",
  "key22": "3Q322z82sKZYCrG7b4FzVkHCG3G6ZZ69oPVmTAfqSJvqAMsCpzAXxWZgcwHWoh9wqagjcqwzMXSyfDDAqZcrfEq1",
  "key23": "2Szm7rxuWhSBNsttZkwktyQoaDv8D8fVmVgRBeza3teCJ8bozUDDMvc5XBUTr1FAndtTAuVMfbxenj4gqmEXVUgv",
  "key24": "2HHundjzB75oWeEPr57t1akPh7U8mQHiD1hXrohMUVVwA9uXYraQoq3EW4uUbMQrnYLwqViLCrUaHF2Agx5qh9TM",
  "key25": "3Hunr5YedomsnKrCHTBdAtjdMpdn7Bw9DKyq27kirpB8HFbNBPE4ygHtK4AvhdwqYDAEM5PAmseMAUELgAcqP8Vu",
  "key26": "67dvoYmoJFEd828HTX4YwuHRbrujJCgD6kPmhYR58NyhXBAXruLS41F98E8xmCHb9xAJCaVgQyBEPArNEi6i5jUv",
  "key27": "2KSkx9ewLzHkhZNerHLcLPRwu4DS4kKuLqp4gHL16A1HdgTAHB6keBqP7x3E1qFJrKhzh5GyT2wQh1qcsWe9it3p",
  "key28": "4tYhkEadAZjuVbHoGBuvhgXns93tkzniom1pFDNE5dwFGp4cnLSFvtGeXcBo1GUbGHnJESjesTT9oV9BXFTawanK",
  "key29": "4wQ75mPqyygYsA32eHmksATgG5RB9pMvyGdtwKN12GWBuAr3t6r6VJs94H7WrM4ikRaej2p6SsSuM2URu3ujxBf6",
  "key30": "4Ev5iK8PeRFfYeB619hJPQ31w4Tki5XxDAsnihkGwnHdJwVBs4k3WWxEUVuSbKHUdXvprdWAmWeNLJbJF7bGjWUd",
  "key31": "viMXvcsL3iruEuqT8N3xENvtG5JJna9zsjii7D3Tm272r6qpBA3EfFvN5AqwuzsPqgAM15VtZNBKTDGBNQExMCV",
  "key32": "48yXEZbBgncF1WkS53RrUiqM6D51wScTE279wYP2vVaPv39LSoyEWUQR8srW9QGxaFrj4muUA38VMdjo7MQiJNqF",
  "key33": "4jyuLVx17C2hZ4VWUXtDrhiQ2HeTnuWQB2fvwFZRYUeXQwdLe57a7pzeLYbkJwrYY8dbkZMVYQdmRTGGwaHLeXH2",
  "key34": "2VW86B1hHjUg97mZUY7ibMeLYiegMQeJyNaVgv6LXnevG7nk66i5e8iR18kq95wYBsiLSTvErrxZRYmbfLdxzMbi",
  "key35": "4bWTJftGYG9qH6xmMANGMTQ2DJAESZRC4mJro6Bkbs7GivXH9tXYKfZm97GydsvUX8Af4gWTKhEGLa5h85YfzSWX"
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
