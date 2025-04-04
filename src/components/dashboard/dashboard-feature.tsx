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
    "4pUtLZP55XWsLpXiSgya6sQfRZtjYvFFstrW4QuaUYzi7fFdiQCBFiBPMLEnYz2qF5ZqSxFMJbMTFpr2msEY3xgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23XMFzbV8GU5SHhNTaraDT6MF8qoLv7MMUP1rcSqRmy7g9qNarAqwda9UZU1V1zUHYeoSsQsxSCGysMykHox2rFo",
  "key1": "BxwNhs9pU6HZuubHkFvvKR5MSektni8ur1XNPW7y3aY71pmixg1UwArv5zTe4VMagy899mptBxEswxHdxHPzYRk",
  "key2": "4mcYR2ucdTaJUz5am5QBAX9b4xi4xRKPZyw2Yz2BzTATP8aeqtornE9SsK3aQsaoCVLh1EcUgQ1pTqEuvfSgaAWD",
  "key3": "3T8aVygMYWY4su4RrkcRojYWVdY5LzLdzZ4qud4rpcudn17YSRteWjWioeqraFtXttrFRsjrxfGZR97GLnjapkoB",
  "key4": "4aZeHCPRb2vdpPKwGRGy3irTmC72okUeMAY5mRYC956gzG2XtN9VJ9ptu2ZckhMERZgVTZ5hvW6ZWC6Z273DfzWy",
  "key5": "43xpW2Ts67A4c8y6NdzWVFi48ypGkF8w7LUAifqZ4Yzu4SuGeqDuXgANH7BkxdUakSEX9qCRVRk3C9R3QMc76beP",
  "key6": "4jzAqtwns59xxTnygijuvexYq7btaYSM6ePmgb8VvaRkmXoVeuKjmaGWNRzFioNpXDqPiVtWvTuYM4UpRqXPMugu",
  "key7": "4na9xoJBobqY3dzfTLcooQbLaWFykzpTzujV8vKTUEmu1kGSRgutgbb2f9tCyfSaNvgVFozuzmYYfcz8Bu9x5yCv",
  "key8": "577yrrXcfUPmKFzfiC4ZCqKJqF58gzmpKua44aw62cqr6gAKGVBY1F1gxrSNite3ddPXJYj2H74VfQQfLveT2FEi",
  "key9": "2cCzy8V3stpQcdhCViqZj1cLQd3Ak4ZPpnZzUGHMxKvNkokekbdWUNXsbwSvnTUZ2vMvWhNt7gUhgnnfkv7kmqFi",
  "key10": "3ugdypiwtHsQA5aQ8f12YHMRdJHQjhuCEtFCQooZyCazyspVz4U9tFbqeD5iBMyR6iodmfd1eUdS4ccZancC98cJ",
  "key11": "3bhgAQv7aR5t4c5hiyBw8TNE5wfyWdkJnxdZnpgY6wBRjg2CiFPbVEADfnmkNvMMQQfDaFWWfT5qoYwLQLeXjzJY",
  "key12": "PzoSmhmWu2jb5vPYsE1K6wvncZ4sDw7wELpE8jD2PNh45C9wiy3zmk2X8N6ULfB6e9BayG1ZDHFBxSgDzg2YDrK",
  "key13": "3VAFYE6AuVeQ24wnC67hiQaroCTbsy7zPoCXdBqA3oRUgZ5bsauZg5wcTVVC2hKf1V6F43YTvMTaFHCZwwucTWwb",
  "key14": "8v2DcTTaxxcLPmChKXafB1vnYhQp6dSAFpbPbnqFkQV5C27P95CXaYzTMwR2VJ4pZWjQHkak9v5mvHe6u8QZoWF",
  "key15": "2TkjnxEiSZaBGuZ6cobBzrsHU3RERFKHqnVmQhwgp1K3cqMg9pCWghoGP7H4S2a6qQS4qERCPfi5SF3amk4CiBqj",
  "key16": "45oaDWsbMYgKNQAgL1kR9Yvp841WXUZC8aVfFd4qRuS2EyxWRa3CC3fSJ8LBp7osuCbyJW2rDWheZiheEyLfsk2c",
  "key17": "2uuoppcRhyyb3ioVEemq1vRSYiCzdMu1qnijY4vtpVo9EvYF5AcXMAmuqKSMLHSiCA9QdvjQpadmYit1UKS11zgn",
  "key18": "3ipVM59fRqef2z6h6A9RaWvt9d1SQ84itnp6ABSL2aUU7Ew8EGqmTCTfDdJ9duWd6rCnKKEhQqXhZ3PMrZbgFqhc",
  "key19": "442NJ5oFW5fNXa5qzugTSMGJy2ruFF71VrpKX2AbQW9v7tbkPRcoFijuZtKrz7fi5ufDReT4hWaSADyekDqj5jTt",
  "key20": "32raNEGZzGP9ntbpzj6ZKZ5Vt944rwzuaTs5P4saDcAgMQaaGza5eb9tKhUW7z2wYdpbWFZr7KCvYhgaL2k2S5SH",
  "key21": "3Jx77e3ocw8tFcZLEXgiXtk1twhGyF7Y9DmZM9f6ze3ccG48NWEe1wEUmT7YL1yhDNnM1eNfFAndT3MQ3TMrXMhK",
  "key22": "5WRQzsgZbR2fyvHaA8jzRPw41PnU4NW8CNprLJ3E3trc4gTvW9rHUU132kUeeG5H6Lfhp8nHJVevELg15qjszxt8",
  "key23": "21VGYeGdZhEE8rxgKLS6XUVbUTZZ7JxExUZd4JuEYJdmAdm8U1AcCqZv92tFKMdSht37bd1rtpxjiHK9DVEP6uyp",
  "key24": "4XMbeb1Q6uh4j9trheyRpPg2h67qJqcHzg1VSLnGwz499hzJ7shGn5Zy4W8L7Xte59xEL1t3z2GAtCA2XwRf4h2a",
  "key25": "3HSaY7yFnPP51PxgGhyWHufWC4dE3WYB2RyWnuovJevsvtks3BM2jQiyiAAgHrGe8KFEQkYqboYKzko25H9t5wqN",
  "key26": "THUKVsNNaw5tYsvzntvzYMoDqzvfnufFSygxFPqN98KXuGjqapgz7myHQpEXfSsukbmnhskuW4sXbbkepXoc1DM",
  "key27": "5hBGtrm42NKXzCQNMBVbNvzLrK8CJ4XCcBnp28RCSZBm6cZjLSbdKTiyBNQ3xeu2mPJCiY7HcbK7CRSSe3Z9k1am",
  "key28": "3dpVhw8E7xYdjSn9tuB1dzCWrFRQERjbqemr94auU4gMprdXCN8btRX5p7RuuYatNdkqQ1uaqJYV8uyaMbmf3wzo",
  "key29": "2UsPGCSXajyXWdyBCB4kN18HkexdqQag5JeEJH8NWC4chYpGTUDkeE726hMKU8H3hzCj5kXojcHX6eWvfhgobmo5",
  "key30": "5RYSDmpBqXeorWhgRaPFSEarDF6Dk8TdNGAEpuHqTesudwWwA2v3tLu9N3AWypPLYaaz4ZkN9jTGsyAiAR2qNRuB",
  "key31": "49p5ETsiGajoeqr4AaWTuUUTNdLDt6F9vh9pBDgbtYTag9BuTTnjy8sg4nBLLu5D3bpqmoyBYxX7irz7Vuu8yoxb",
  "key32": "2EuqqvKAxhFcmZ7TmgAi3UzcaZWAgAPYD792TuGBPVucpAmwJ8heiGJ72to26QuCQHnsdfJRJENCbYmbv8yiaq7U",
  "key33": "mLf22KqP6nENgjY6t5idQQ1j6dZpkTjiqLZVqmwcXfpgUrP8JVU4CpXtzMtWvXnb8LLA6m6gBn2dnrESFUgGVwR",
  "key34": "2EFjQ6PrbRv9Eey7ybeKniJqUBxgoYBdSywib2P2nYzx9MYyiT1nJfH5EbjXytu2bKuSh2y4MsdfsXi1nCAgZ5TU",
  "key35": "sh8qfFsWGnWZAKT6474tE5wo7v8JdiEqmxBAXpKgSVLRmmQAWiww193nwtNyGZUEtTn6bc18VgdzTv6bbwfkM1U",
  "key36": "48rAqgZ6p2PxyCfvPinZBhXg68N5yZG8gQjvno3DAXRSScp5VippEbycm3UwMnf8tvzwQaT7VUPJVxsBwFWwSg2q",
  "key37": "48KGAx4D86dr3Q6vDmwkgFKkboKHRwP617KWY5GrBHFKx18agsnUSzBGeA9U1yp2qUQwT8Wsc8akqE3yoP9TNRz3",
  "key38": "466wsEGi5Dq6TemcrWfrYmPauFqnwAtKqfDNbNko5J1gcJ7WigDPZKNYyGhMGr1wtVsypKwrX2P5Vaeyod9ddfvf",
  "key39": "es88JFFULkcJ7txGMWmTjSgcaqT9jtU9eqV5Uqj1uSJaF5scpodUTMQ1NBA1ZS93LV4BZeSZnMsYY61WY8uv1BG",
  "key40": "5c16qhBFFTKwRDsm1Gv5dHEdgA6hUygpSAz23CgksuxucdHFZn2arjmUVZNnaXeRFCTE1885c28peNUURQJv1pJn",
  "key41": "25mUoMwRfqmiotZ6m8aKVqLBb38CZmC5bhFcaCjN4kqjHNdZCzw2PPPcJtcKAVEAtpJ4YatBHK5DcY1Jtvqn3Q3v"
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
