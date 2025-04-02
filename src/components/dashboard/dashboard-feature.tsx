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
    "5hmcc86T6Kr9KG4oKmiwPJiWVNS64YWrB2BXWoqMpbRham8xigxwSMZnu5LTt7F5CAkXRYzMPzSGCQoGVaiLCn2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2refqaKCftyhSmiidJG41v3Kos37KT3zdkuFjVVHftauRBubiryqbx61hbhGbt3UmDWQEkpjbo7Be1j2xbdczNrY",
  "key1": "5EXANdn6UUZ3936uYbZsJC2gNvtew4SYG6YoC6R1Zhq1toHHTHoEFZToqThWodr4r5sL81JyPskUJJWxAAKAyuD",
  "key2": "5LheYp5NM9CwZKppycfeJK2bKFo332YAHRMmdUyvY6aDGc687v2qLsR2vB7v9SAejayvZzt5NGgugFyG3SjDPwd2",
  "key3": "4apFUN9ZiceEVLgr9dKWK3DF7auUL11uWmBhvRpa41Gv59MwaPvLDQz4KW2ftvKLCpyZad2LxzHHs2CRF82sX3ed",
  "key4": "66EJKYdG6ZMRvEyPcY2sttg9FKnsEvg85REpxxjz6mQ2Jgk1ExBmda3C9NJcJXK9Q94BuGbyVQA7xK5nmw2QsPDC",
  "key5": "wC9UggdPNAXHcEPkZy5VVegxCuvsZ66ophWXwwqdED9tTGEfQWYjoHpGYe32vipf6Ri8esu496n88dPqQquKDWR",
  "key6": "4P8e6bDXgaLZnU8wWyFua4JJF2MictD2Rupv9AVMZGQJvDiCt7VJoKXecCsFYyNw8GzjyPpAARrQqSxsCfuh9LkD",
  "key7": "2TPJVFHnMV4a2a6PJTxnsS635VSXxF1DCvf3WTs1urjm5WAJGV9KBCBLz4YxeNW5VoxXVGp1VQCU9npKwFQVUeXC",
  "key8": "cLjnuSmHB9SfeM1wygU1ZgQB94ao5PQhXqqGPufaX5DSLnEGYEDWsexYqTtXdRTedgDq6bgmf7aEHYmWAUuJ9u9",
  "key9": "32b43zpVEKPDKhfPyMyZpQoMs9tCF5oa7doyzBHzyGxLtA8y7ggX1T8nhC1MvG8MqLoASz4vfdchski84Y6Z7mJw",
  "key10": "59DfpHnseetRG2gj9f3rBvZbU6Qx4BSu591Rm3D2gmH1XTwAd9y66A5DCBeWBJ9yTGgUDL4EcxaJ1WNccEPaXqFZ",
  "key11": "5rMMCVJu9Y9m4Xy6nWHJCJm8evTM7nPy6hns7MHbojwQUXWVP5FZks71yAjyLyHLLvSXh4zXBHJShpMLqMDDqMYC",
  "key12": "3YRAGZZWx7tDCE2dQx7nhWcfAaUk3V8mmuQhrssUgWB9dxRHUWWRGFVhCzbhwVbpYXWuENQt5NAXqxQcqp7kPjxk",
  "key13": "2RwafK2fccD9aKVt1Pa9qXA6YGhP6n83NsmJJb1oit16K8JaYcRcTt7oTzvXMzFS35qRVZSMrUwVW1xfSRcgJYWv",
  "key14": "5FYddf1ZfV4YxsKNSRhDN7A5H4MnkrFaDowXQ9ngM2VWxUAtHT9iGpPBS4P8srMignLRgTTm3Vp2TZD9XxC2AzpJ",
  "key15": "3GN3YR7E1n17upYgSt5Mm7kc8Nb5hk8H8zy8ZFRJHhaTxUWMf6UEPV6nLMd6Zwr53wdjUY6u5ePKpLfvXqZ2hoQZ",
  "key16": "4Mqi4VJ4u23EPpAgBsZ6dH7PsiX3BHwaift7TqXpnP5YGxKag1N3WRZRHyaaUu6AqqbaEgWoGJobnpNHEQzEP7qx",
  "key17": "2oZMBJ1LKmHQtgd9RQ9TCZYbFuzSn4sSbC52LkHxuNk1ZC5VfUNQx8Ujwi3KaXv6nJguo9Ej7FpniEhRhfyqwvDh",
  "key18": "9N1T5mJTCw7Yu3WwcHbzfZCyHtycm5Wx622MNxsVHyY6da6zi3Ji5AHt8zTsrs5iM1ncwU46mQfAKEb8kfPQocu",
  "key19": "2jMSUsRYWB9gyRochKZg5gPZ4xhJSwxh33stvWrEZ27Y49ddNpxsxHcEpPfN57JbKkYtoY6KYUDpLFxKz47NkmLj",
  "key20": "65BY47R3W4SpCzc7FLpvq2zvA5gHgm1WqyLW1Rysr9TqgcxwHsnuH4ZkSc33RVJcTjkfKyQVHrGXvbAazCydMYdh",
  "key21": "2hYGFKNxT2M1KPMJuHU7uedTxhQmTt4GkmThxtiCx1aTRTZwRBXogiBgyC1tdG6sB89J7XYmgbK4c2TJ6R51AEh2",
  "key22": "3Nb6i4dHY58TVsMwrfLYjttdtaLUEabt7R8R4hPbqo3scnxVqL2pHKXu1m6MnQukFnNWHbtkmXPiSWnm4LevUkKU",
  "key23": "4xTvzDKMd2vQHhSAMhiuvvg9WaC6d5cMhe696ajzyq1h7atQjWzWVdkEmLpCUeLY7iDauYFhjQpuHmhmaARq1rnF",
  "key24": "YBQuVnLgZESCyHK8mwZ6UzDkf4aLvig4fAqYeuarW1chgUUeCJqpiDy292Vy1jHLoBz8uboi7GPFHL12KdEgn8y",
  "key25": "66ARMisP8bba4LpjfwNHEmSe7bS2Re2YwD4Ubdf7vbMpPtKYnAgjrRHw4f1ZYMcTSHqKcdrToUTnrV7gveeA6h1u",
  "key26": "3aDCufPu5gDk4G1nsrxdJ2j4BTi5nxRLv71yRevmve9yZnQgBZAouQ3Ea79wimmT3KxKXvMCFoCeXYcj4DsCshFy",
  "key27": "2hjRLLf4XghT731SKQXKfGgHJjc1o68ZLEtej8t9XewqXa8P4T7hoPgif7ZJoreNRGiPePcQbkZHjWr6YZ4JxkuQ",
  "key28": "zMernCSMQZUv6GjYsuMoa738Zs8wniNYMi97MaY5b3c3Z9whvBs2Dyfsup4egAhKG6zZnvK9cAMEofvpsCCxXXP",
  "key29": "2K6wkuCCqNuBYgvTErup2XSDfhdBbt4EG789CZYqvdidMFR9Ujc2itWP6mTQLC4Njepbmdw458bu1rWWvVLMkQtP",
  "key30": "4fpCh1QEwSqdUXsCiTxvqLv8z89vSS6BPVLXmikmeso4q9CHDx9DJKAR99ZEtAkGCTGUQ84MqzqSoWd72tau24ph",
  "key31": "5C8ebwL2mdVaWs1K8idx1hGdNYjsV7JUREXG95NrgcXqnKhp7oDW9r1B1ghNrYZKSCb6QmD6wGu8xNBGsZQfkDgM",
  "key32": "dyrpsbUBDXM9mPpSNGpiE7ejERLtjtoSe4tGsKNCzAnDkp9UKfiFXzMZgJrVQWTAKsSSLmhbonj5NYFEQGZwaFj",
  "key33": "3Djuba8DLbxHEsPg2NkkodMtaM3kuGdVDchphkbeTmmGEChvtqxYd7aqqjzsnA2dabdLXLU5CV2nBPunpSTSsedj",
  "key34": "mSMG8SRfV1Wqfa2PAbuHR9TDTf8xwCRqyBzBRY1o9pNB4y4cVJpgQzk5PzojACNs3nuT5pmK2YrMAKckF3ucYT5",
  "key35": "29XrU5JqecpE97i52XW8orDQuC92wBkM9vGyBBCjgdDwVmxYdDwCYnH8ABRZiaWhDn6Vrw21fYvLyMdzEdQg6ips",
  "key36": "2ZFVhDTbv2ZrWLbKgV5jqBr2sLVZ7fEvb3fx9txksXNNrwYGEMhw2oLsRZ5VxQfahPUT8gechF2HYw2vA56sDVF1",
  "key37": "2NFeB21mTkCjRUh6d9dH4zp7kGvRHZ6X4NCLidBSd9CreFSWiuZcjoJ7k8T6qrskRdKGHffHbuKEYdrbv55byDek",
  "key38": "55FGMKvbEmGotfcobV7nrTncoNjKvcpvUvVKH1Hck1DDoJZzpiXpFbUBLh2q9HfpxWXzaQhVogHHNrGMoqrwuyhJ",
  "key39": "52f1TKCK3s6NXSPPgGrys7XBvLyJJvchawD1RWsVBUeFuJqVmivRZ2AVSbmcHWdh1QKoAXTB6WF3crWNCqmWTnKC",
  "key40": "3kPQToY11n63uJphY4r69qEX57M5tSjHQPuaMKVcrKpL8drZHUbsTy9YWYH2YzWhexosSNSVARJXhAquykHANHZr",
  "key41": "3LsapSBfCRBTBS82efWtSPmLvWyUoq7GEvmmn1aocrAwwdaxFnhmSEh33DUPxaAg6oi1WSTvHXbEMdj2pNDExpK4",
  "key42": "2f4heNV3FWLmFNPdz9wVPcrZoLTMwWzz71uDmU1EDm24eucwhVQSQ39ye3gRSCbtGsdhSSpzXZtGmL4zypXDFaKc"
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
