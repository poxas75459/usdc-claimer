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
    "4NizFXipbq9k8QAgxPGKGpP57uFt33N6vLVYJQaN6hYjCiJ2sNFH3cCrVUEhQf5waGeEZNkN4p5qNXsX8idZov7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RGHoMYMN5VEzvGccyBupNxuPQzJn7KAhusJj6gq1ib9tBqNDccbwA6MAaJd5qGN3RZ5MQbg1kG9qnGuJjj3MDdw",
  "key1": "3BWN83e4VqPD9ZUWt1pi2iMvYEpP33FAUE4kFJNaLfHM7WPABNkMJUM4v8Z848E599oPZMVoQybQK1C2HG15k6bd",
  "key2": "ohVoWrcF78SfKfphvvanxDyBSFUFCYYyKL9kQKu1n1JosMqKK8S2gZ2rpXvbWPAftHUTtCcDqADp8jMJ7EmA5gG",
  "key3": "2gBDxKC1PQ67LD178ncdg53cJ1kiJ7xFKrLBADpv3CJNdNCSg8pFD2tr6VGRtwbXjNhoz4xUcPrLiiokof17TU5H",
  "key4": "3Eqk5sWakanD8X2KMFVbER3f5freEt8TnRCQKgDAu6GAaDtskbA3st2aBXx5yfB5Ss9HjxbD76za3SyNx4vx1syd",
  "key5": "41EkPev4fM5sjg69jJmAGdo7F2XjfE6EzjvYqXKQC8dYfRcA4297NXfKH2cqkxdCQK4cveB1kj1BP3rp7sATbMQm",
  "key6": "DQauXCQ4MHGzyUXc4AECqSECad6LPhv9MnbNS7usjmgqT3JBLAtAsczja66vDh32nkFq8ECrxKq5JyUspppVYco",
  "key7": "2DSPhx4NRTpc98QxQrRWreMEkXHCMponwxY27Ffi5hBdnBfpXMhD4U3Vs2NdKUsLYcAuC5uVDX29ctqTqvv54m2N",
  "key8": "3uzoKz4btn1uvW6WdKsL8RcvS1ihztXC4wzCxApzh1CN3n8mVn7XYf4cdnatJuHcb1JWF3Wv9K89SJhjcEi4AHbs",
  "key9": "3CxKX1PH1VKedVAw8RBphvJkKZ6AhvBEKhJd3uhwvsMrPyEi9iBvYp8mCL2zxinAyDVsNJT2acxWSUgcN7TBQdbq",
  "key10": "FXMiEz91EWHQvs8kkBsRJoyoz9sgupa2PmLxsb72wrv8fLBE2zDHweb8JG1dvbrFde1vGMfgrogN6HBt9q1D3eQ",
  "key11": "654GeSgxxwtPzHvGniaan2U3D319pXijXLVeSgiXnGtc2jgep6TCCCARQRftQqE3LAFCHqoJGji96QjsCM8uLtJF",
  "key12": "5HpU1tcnpDEkCCCq5ctVPLo8mNAnXafaopbY9LwHRgtjc3GzcvyLZh6d14MgxwysbnXn99dKe25ASdfSRu7GcEXy",
  "key13": "2rMnYGfAmtDKX8uxwJ59nmwmuSRrwTamC3bwEoNb1pEPyMqun1PhKCj4RrUUmhpooCY6sNG1gCRyvVyoVBDsfxrB",
  "key14": "2J7TcPRi5kRe9kDqEHKq1uTyjmkuBSERqVThN7sva3kyjJJ1jEY4n7v2vsGARa5MdrRBJssJYHnrp9pCU7acbuss",
  "key15": "4nkRit1o9s6bfcdwQLQ794KwFyVbGpDD6gtQnhTQB4eNJn2FcaBPk1bjGu98Bxv71jqwGZkeuF4adSX8da9ykTVB",
  "key16": "5Pjidyp8kaBeLXrKxnM11ULmUBgQpstRsZGFcopk2gGN4PvugMWHMwttENHtwA1STSbTustJh3ek59cY7oqLhemA",
  "key17": "3NjFSeww4cNHCU6aYmsnp11VG49pKoq69Hi4VyrYuvfu96iRNsZWxT9Bn9oTviDNCeKTMz8fgeZtJBV3id9RehqF",
  "key18": "31tSkJW12EKFFEu9p5gA7d1y7k4jrkcr7NK6CMsYYuwuZRLpi7HVoTxXskPy9XQcB9QZTtuEHgyAaWA4sWcwuoSY",
  "key19": "g6xhEh3mWH514eHSMjH4QGrbhsF34b9ZLQoyLyQ2o5oBGEb7Dj4qwmDdqCk3gwCFERddYgcGuTTkE9adreWjbN9",
  "key20": "2gVQw4svALjMP6Y5FAKonAPh68rJGm3vjLbMrZm8NP7LRC3ST1yBofXgCvwZNfmzjpU2782Cvm2EvyKtaw8ewk55",
  "key21": "xf8cLEfqBJ5DFpA2VfDV2szh3yYdZeFjzeo5E579e8uEYjFYNoa345U2orZE4cHA5TFpqMG5hBwG3KYy27CTRv8",
  "key22": "3nDFLhw7B5CKwPPky8xNcPWWfB1uaaqRuP5LemNsR4SQY39v9dSGA5CuWsCDims45UUmsPH1UwKrTf9iTQw69amk",
  "key23": "P7fXi2WK7bnAr6es3o8a2e9gxk9msTwnAzWLtGTQW3Jao6TkXQeFBCvcvFYukHAdADyFQZMQh2msZgJRYbKAgr6",
  "key24": "4GPkRFsWBeKuZiLDQ1dYnpdS7TCw9fgFSDurrEX67T9Q6Dcdw4fjQsjfp7GQXh6St3zvRo8xhc18J4hcfe7XcMa8",
  "key25": "s7f3qd3cs4hKbpwJiyEhrg6LAPatWFpgHa3LDmovq7oTr21oQFjiVq3MTzyaJzTRvzEw2RUnkz8E2vkDobNz579",
  "key26": "5BCE1Ci26rWavKdvvc19XpXAKKcKwxy34sTpY4h9WaTnNEwxNUoQKpZZp8h4hGHnNMv1DiLLADcgNQHjp8oAK1hs",
  "key27": "53VF7UXztuuUZz4y4NmfxXALR1nKG1rMv4LrAk3nmmtW5cLxQUMvsLhFniq821yVHCbfe8JmudhBe3qpszFyZhSG",
  "key28": "5APFdLznSeAd4FsrCJJhPGhJA8mdtqKjfFouJd7BrLuPogD2WrVhAxo7H8E1cWp4ivQSPAB4eZmeWmvqtCBdrkjx",
  "key29": "2cN9oZsNT4ncUJy9FF1qZBHC5UQL53e9MBXfsr2fxHhuLD7J6Udrmjv8aEu4sPtxevRRm3bnyrVWUvjXYeYCLbzs",
  "key30": "4vUgbfh4Q9TPeWcPGtt6oUGn2grAngiesybabNPRCAWtrhoJbfKVmWU5HHsXDzCdXEKjf5qfSpaQjwmkYUHKCP5R",
  "key31": "65exXCkQuDSyAZj4K1VNwmrfj8Qng5n48sHWw7fu1VoB9ax2ULDNgh1DYymBi5iqywDxzqEm8qFe2sH3cmEM8Lm1",
  "key32": "SCqcGTCCiKMCu9xgfAiwxkkNVtqNo6drz7yem4xsU9KJHXPhtEj9MkQq9NK19hdxPKy4AqFrpnsu7hAC4pqcopo",
  "key33": "46GtRxMcH5ftxNT7prwb9uRwYk6zguZQT1kjRV7af2AWbttARozzvGQPcZrsBtVapr11i1xsBCuVS7dcWPvxBY7F",
  "key34": "3ceCqP5QbYa97xPvYF3LdACTLPSQSrk1HEGUaB1oGhJpfYVtdU26Z4nnjDCHEc6uynKFmeihE2QWSwZAMZ2wTYZw",
  "key35": "ucKnny1uUPkM3mQ3onerUbzaUg6EVTQ2m584rKViAotFG8YXq6hKyvc2bBjddoYonYpSumg4jwUF9gf4BjDKAfb",
  "key36": "3i9hFioPVh6SJtF5zJM52DoKbDG4WTDm8tqUevWchDJUnzTQV8AmJ3taJvLiZF5PEjYVNgiSQtGeJn38CdB757Kc",
  "key37": "3B2iSbojcDPZSNpKxf5DcnEiTsPKLoYKcGzfXEn2A5Hkso7o86m4LUFFrA7eFuivsCB6zyoYpVkFHwGTCLGcEZzk"
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
