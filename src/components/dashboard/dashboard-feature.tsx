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
    "RyFa68QKjsHgaLauYnGvzQpRFU5oQrhY1cKEzQWaUAQ5N1SDouFk2saYNCUSutT3nUyYEaT96AQndi8mdP5P8eY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nLWTL8f8LkKUzDjA2mPtrUpDRcSu96wyZc6E1pmX3fJtv3kUEaudBfqaHHS2Fzs2oExXc86SFbYwf7oSSjpHFgu",
  "key1": "hVqfsAfxxH9mXM7AhMDXA3GoE3zCU1spGZ3STAADQWVWHfZdHZAfvx9ckSUh94dX9hnb3WUuNKKUZUSQConsZd5",
  "key2": "3i7rccqFmcuFU5b8xwyt1hE2dsQPLw2gKhokiV5KwLZ5mYLyeytT81fhJ1FEf2f28kwYoc5dmipqx4sE6CjMN3hW",
  "key3": "3UWoTwozjDyivDdFk1eCJBGZ951hsyhwtMxoxc5FtTz8WsCSBCQMHnmqzrxjZQVJjny3A6Fc58c8bJwgxcUux83T",
  "key4": "3svrGvLwrv9AmeatcDGbyTh7pgFpxH5mbbGzEMGV2H2adZKb9zitguSnE3YbZ75YwUn6cYh2nFWsUURAXwnUdYD9",
  "key5": "5oENKEMsoVGvFLZ34QSiVpGgfPB51tHVgThY9N1SuG2wcanbSoN8bxU2fxyd5qnujSvUFuDLfmQATqfnnrqW3rPv",
  "key6": "2Ywz9aTTLnYvVAJAjKBxiBK7QvoALPU9Zu5kpG24nWo4LgBs9orB4pagyo54J14z1Kjs7Dgy9JyPF7ZtWuEkamun",
  "key7": "4g5EtXQsXXhweKE2S99uQ5jVxCLoTGij9xjBChPHpnt1qhM7qdjTBsG5PCsnFWQ4br43g77qa1ZgFJPmkgmVKdFA",
  "key8": "4HS53SFrxeNeLEtDPbfbbMCCtgFthsDeoVj1jtZiWa7PDvUEg5RYFHPf5hRhoRPS5NpK1bjfdggCBcUG5mXbDbRx",
  "key9": "4QzQgDde2Dyy3zNSbBmmyTFGwzpRXNvx7piFNkDM9qca9AZMdZEmZ86RMB2Zn2q1GHFcbr4F12UM6KPpunEiWNBP",
  "key10": "2VmqUhbW4Lhm9AhemKS4Qx2CzirDbTKyRpVRoXsGgTXKstR495Husgz5K89xZXEpnHUChHq3acr5qLBAdPWp8URr",
  "key11": "3VpeN6WqSAdFfu8C4RL6odMyQErr8L9kQ7v2amrAsPKfgkWDcygDn1tiYAQfgAsSEVf6eYKDs9cuaU47AzbwVU23",
  "key12": "5PGq327YGyVRkWQuhPEqfUpp9Yi2i9fA9aNZLvLrQ5iUygt4F39mDqMA7xVizHv2kXpp2mcKsm4gSuwn4Tooz1Sj",
  "key13": "4zEP8xi5VWCitkTJCpGEuRecYEEp6GVMLuj3FFsQSQsE2Csx7FBLNvqUFGnvh1FQKGbYeF1yEXU1oJF6Fescc71F",
  "key14": "3xcfy8WcZ1H1Yj8YeYjWkYnnXbMtkEhSCQEQEQNNmLoKmSdUdmjkHeFLMMA8tGqMwHvKsPyY7ze3U2HdNsNXRmYv",
  "key15": "4RxagcLzdTUcKzwpL1KaqVuAAtevKPgTbZLVqYVyYHbPgNZNrMTjHmL7kF62QmPGioZ83oFm8SRDAQT7j1dzZunw",
  "key16": "VYRww3wWsyt7B6bxH1ncyZvq2WGSdfAoMb4MA41qrdcTuJbL4Njw94zgjGwEHH6EDsGtuetxgz6orHqHVVe5wEF",
  "key17": "4yPKqS3mxUkVTVDwKiLkJUh9ciXxHgjumXLvtDL5MDiDyy9213HY2uefTQEEKp7yRy7i7Xa8xRsg4ZfVw1TZ7rZS",
  "key18": "4wZD3XupXe1cv2WoS9YNHztDSY8NCp61quqa4ipk3KHyhE6fSZdqDuS3vgj3Yzk2aJxreAnWXSG14RgF685VghXp",
  "key19": "4NGuWE2CzqkVPXxpZWN3scWSh6nk9pdZB3bRQ7w7CRDzQkiFDVSFKLfRit7A4m478SRuzMktiHb6KjbcQ6F7RJ6z",
  "key20": "4LaUcSwvJYzXQsx5uUiBV33HBcxGUSD2tRqaiJ4ziUYc9BT1NBfiiqPWNbEUzDWP9ABWU2ZzYgQ2L7KfiC244ofy",
  "key21": "66GMfPFL7NU64z3mFjQR8TwdpUTNcpEVpzMokzmyiAFk6FK2hxK3YxzE3KrXktrJos23YHtRUQYEPCzKy6dSxiRX",
  "key22": "5rB4E1xiFD4KgkCc3ryBWXQRPMBoT14cE3TdBmhKv2G3chtftZjgTogb1Z4MDh9jNL2kBqvtr7fBAXnugEhwdTHb",
  "key23": "25ZESgVN6Y6c7QGU8oDZzYjrbY8TaYeadBC3nTDhhsACukbxnUJtnEUbKxv6sTY1zEFrTUCuFgvvzAwb8eFsSbSK",
  "key24": "2yfPFCn7VG2Awhw5oDmQzdbKjbQhwTPkpHh3VvE6hP2jZ64FWvmMTgGvT1p36G5tg6JpVcDDft7sMyiUnAA7NjkF",
  "key25": "4uL3Mn6WiqmchoWSwwXYpkS14gTvruCQMFKWWcYTtevLHUGcHUGyFmpdCQ6CiXF9L6h24ZGjE1fuY1g2yyVDFnFs",
  "key26": "JxV4tqsVAQw97GZv73rTWCT8Kbv12zkaQrL72t7U3u1DHKZLKxmdJ9bPgkzeHho6bG1ThGFFfZZ4ZvmiGVb4YyR",
  "key27": "2KSqmaW2DbgzTyFmsSaH9xevgCGKpkafnypeAQWhazPYKKvcXxjNFrtCFqypdvziBAg2CxM74zC2wmr5d6eUFzdp",
  "key28": "5Gd8pRyS6sLgJLKJ9Hi4xMdbUoNmEx9AwxS2fK7G9nGeuNyzBjebcyiT17zxL1R821cgmaZ15PtNdyHBGcyuCotu",
  "key29": "23HTo7Jk7VbTP1Y7MVmSHupS3kmaBVkJVWvP5mVkjPKsAmLUtNSkcYER93DXNtYofDk3PNAvfqPkEhmYasU9z38j",
  "key30": "2kvTiTymPLAj4Ftb6JqU34EBLmRB31ea51wGuB7e5HfDp39WjFdrXrrR9efZ87jeHjHH9n5rYtN3bRdcasmTmyAu",
  "key31": "GTBuTfmgUBeUkkn1RWAiXnh5EmBVbAhDJoJQJn2jPR3JSwJP2yVixoRBf2ncpze6f5jvHwQYMB3pgBbCd9XVr7X",
  "key32": "2QQiKaNTK13KxtVYDtCGRMoouE2UrkUVNxEVMnaYBVA9X3kAqRgLjohoLsrAYWTjonFSEryMfcUgAbDLA8A8hJo8",
  "key33": "4AkXHk9YA5pe9HeFPzV3H1L8s8t6WbhaufHRmyJ4uf74DFuu6Fj6HHzAcVcfmLFoAZgo5Jtc6ttuFRkw4ZVnUbfe"
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
