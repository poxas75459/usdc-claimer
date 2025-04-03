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
    "5yydfAAp1cTAiqjn897XVCaoP6vnBjPNcbozLpYfHmDaK51SvuSjgpof2rW4PWVj5ptsUzFnCZAMV3vVFcSwMLQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bbAFbVtA8UKW7YXe4dVkvyzCres8TRwRyqoTJBRrpcRfBYsMq9W62KLQNttVU9bzePAuwccLrLwRGddaGg4yf6k",
  "key1": "2KoyWsCiUcMBbz4GosFyusAYnHS7kVsA6SM97jfsshu1kxGbfU1jJZ3ESfUJVoRJpqChRSLqEsMxzz8aoF71rF2d",
  "key2": "5nfWrZ4AS1JEtN3LEw5HCXsTgTnJhxMfaDqSnAAVHxf5jHt4tH6GMiZVvGB5nZNScDVwt5xvhqYXHzF9D5xs2NhT",
  "key3": "61BTaPcT3FDP7fwjndhyVKsmFsyzVHHsyBo8YVuNzBbtTSQU1rzCwU2fTnaq4zvERvZBLLzuy9LRBrZHjqMMDbAs",
  "key4": "wp9jhmDX7WUy1L67xLykXgs4XWnUKPvhe3ZFaySs54omP1QEeaLTF9SqfCvLKx417VeWKGApNgDEeS9RsU8Bt9j",
  "key5": "31dX5ZMFds2HRStBpH28ne2BKRvT9BnkhMcnPvFHXrXvdoDswxC6fiY2uqTHtTrEwmoSp4uCN5c4CHoopRjTFB1e",
  "key6": "LvNnFa6wjGTciBYj7oezBkC3vqvpDTvC8qoNkaTgxmy2NPj5SmWi9hcPezKoyKYt78eKn1TXcnWh6WogcGq5FHv",
  "key7": "3BD6KYf87hAfbz1DFM8r98coJnm5GwQzAGaHK9NGFAuGW5ExAFPVGm9e6umZP3xdNaHHFhe7GkNCDD5My5VUYjXg",
  "key8": "R2ogdNFEtC5LCjXquV9qZXskBVDhbiKyLQ9ofqBbmDMkzjJtRxBYToqc2RZbPqMWJc4QpMnGR9ysyeNAUwmmfnp",
  "key9": "3TzaaiyE6CbQYnuNJTWxt9BmUjEUmwjmHKrw3wUA2DTqm83kAx8mGYKLGZGF5vkkJutFvVLJKz8ynCwgM1mE5Sek",
  "key10": "22uU2WTPYVikZRxmYnUB5xHfc7Wei631u9WfiYtj59ps5Ai69X2wah98HupiTp7UYZY93Ja9h1BHNCSpYxjA9RJT",
  "key11": "3YmCkodQuZnwQZ9MbBzLepSZC3Ryp1oKW59J5Y1hy9VG7b7xzE56cjWwXiWK4fTN9ZJSVYLKpCFqLvLi94vXFeCt",
  "key12": "5zLQQs4r3y4fmBqqyVenZ56o3TjKkCu2vCPCsRAZZ1SuGM333oGNohft3uNVEyuzLRrAEMYYE8x2kExM5oZnqhTU",
  "key13": "3GYHL6xLLbtg8k1BYYe1WmLg8cHuiQaFh2xeVd1KWaUwnwkqz8J2GoAw7bSp5h1NkqcBi3EQgc5o12bK36bfdakK",
  "key14": "2mB3ddu9r6QpKaibXFuTwcCWQ1MQqZRcjUHBfTxJWMcHZqGyGxp2RQkdfs1Yy4TMv82mQgFLZyic8U16FDGhxLKX",
  "key15": "4uTFLJQfVyLgnwVBu3KeKpQgsPqKzRqbVSvrxhYPTkcBEUspBMQN9i33x3YMjJ9GjjY5mjWN4qNJWt7m32YxsspT",
  "key16": "SbZaZ486mJYT62QEwHZx5Y2ABrB8SfpfRWDd4K9Vb6wVSYm56C61reSs4Y3yRAK2un2kcUsiKnGwmukkR9iY6wc",
  "key17": "3Zo8wjpXihDNtEcEskUJs7RM9eC9afVz6sS67iP3cZ7ZWwx1gbQUTgCzuSZEopPQCoPmCkdL7HG9ZbF9ARG38iyK",
  "key18": "4knYsyKnrGtNDnRmTN38An2Ddwx1mQX1Yv3rishgMfc88wosqUJgWKj7V4zB7PLfZAkQTWpZmgq4CuyL3ZK2EbYo",
  "key19": "4Xuj48FoSeU88DVwwLhwndks5othnVikoMLEf4hFZL82rKc495VkbghzmknRG1MndivkZyQ71GJWW85wgH6Tyke5",
  "key20": "2x2aYa5LwtbGgpdTM7nVERbrQ5kZpesonWraKkLhdArPhEVkRtvdkAT8sYVULncc6PKD9ztd9Soa5TGj7SBWiDmv",
  "key21": "3f362q7qbokkL6HPUfmxrs9mgKAuF5oF9yqtJLySiytzjtP3QQqMwympHvLH4btAuVK9PJjqiddy3r2iyvQo5BDq",
  "key22": "2SnHr7aC9M5LuyrbnN7WZM4h2MNdbmaQvJLV3FXUjciC4cL3FXvbJH1omsMqQqBXYnWswse2PFcL7TDPFzY3DcKM",
  "key23": "2ixQvTHbuLNJ8HWkDwgSdijaMQXTVd7f41PbZcB64RGvzmPZdu1NcTxE3XGVF2HY72YFrdWUj51JkenGY3qrJjRi",
  "key24": "12yL2CjoKqU9LFEBWTZkSXtzGzHZFpNJLh8wXi3M5tQjXff4jCgvAkokR1U2MAaUQEWBB7AN41N2NXxwysK7gBd",
  "key25": "5y7VURucDXji8AsMMPRSPUSyH5mZGP1xNjv2WxkKNXS7WRT4oQmk42oVaDb68RFzcfmSeGRt4Sk5YfGWZGyvo2g1",
  "key26": "YqtWLTsYo8CkzY7Kc5HHmAJzchGL1MQ3Ex4XXtMBe5kEn4nLmbHjmfh2gYRp9o8XuyBJqtcycp3s6Y91AshKnKH",
  "key27": "3U8vvLUQTws39fLD8p6MV8ujrw9N46XeJH2qhk9ZFEt1xe18vsXZn4ewYAPB5reyXLn1xptdG3x69mgEoG6ShNux"
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
