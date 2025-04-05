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
    "4PT14nLjXRm5xHmRWVvnVYAqxFvismACwwWjVfX9CMZ6NFUgLH9dBmvcowj7HXWk1TtgiD34HYdfuVgp3dTsSmbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Svb82NFPZ3xdZbgL9DmeA91DV4Kcuz7JNgyBwtRSM34Tf9P84fDknjX888LTjtpJBoNCQTn4U4uB8uhApdkUrTC",
  "key1": "3NMTxvRrg8BUKUQYyCQEkMpYxPk8RUdBY1QFvbs2Wy5Y2twnDZmpxwYHvzBpD7MnF2WPv42ET5cM5m1rZeWVWNtC",
  "key2": "5ryq4ErKUyZKb7T58HkcrkUoEU5kUzZP2ry4CH2JQqe1ALsuCctnz8M4Mc7SrGgsMqUpjL88fcvHgXhDni9WutVp",
  "key3": "2C8TF9ZzFvLg1tnBvr2ar1VmRfpM2wX3qeXb4omQDGpTASi5fhsxVDk8xx4CuwdLn67ssFpdrjrTBDQ9cvS7rnEm",
  "key4": "2H8zPdHVE1pyptttoJ2CYEDPBv6xwqTwH253Gve2J4uNtYV3Z2TU4KdkggC5ejqsyLiAy6ecvx9ve6PWh8ET72tJ",
  "key5": "3LNe2mCGaRTRtHhfLGgb9cqUbqZ2ji5vRkF12VoQBk8fvDoGmsf7oaYcgpjVfsCgMomPK8r2N2njCRRR1teo9orG",
  "key6": "3mcAd7YN51zebrq5rZEtYjinBdL9Xzbmy9HzXdF39ro3dTZ72eYDyiA4diMGXDggc4YyxifgWyqyDjQe7CLH6WXn",
  "key7": "tg6UiA7GzhLwnrSLgMxK75iQLhw4Q7Gk2e9yVY9PHEeCEd2i2meKJTu6d542svvurKMkKcDjGJSDbogVsiznhet",
  "key8": "2VQMRSPzmXh1uwZR8rS7XQRN3CQkP2Qa6pK5MhrRDZdqqGt1ce43uQswbbdRyVaEkMewNUCzRvdggSuSt8k9FXVH",
  "key9": "3KguSshwqJ8xj2krCexaoxTorBPpcqf5mPfTXR6PHNsxBnb6wYfv12KNB3HYQcqGkozKMuYnpp1rurF9KLyscyfc",
  "key10": "22SisxKXVxHvktwJn6qpJbzNZWckkezvTqQ9ZLAonnE84bAgxwgpqoxqQp64nuFZY6drHfxpahBciRfzHyoJRRGD",
  "key11": "2YCv9bPabigEuVAksvuCepUzNRQe93axhVmvUA3GWzYM2ngw2KN1gf7sx4dfn31DRq98AFULA2jA5uyTsBeCgpoh",
  "key12": "2y8R98fBEPpEuqCE4jgSspJuQq6Etw13nFd6QQ8XD2AVYRCdCz6UYm9MaGDw4souuHh4XPtpdsmfxR5bgQCK7xU5",
  "key13": "xVL7HdWSFiASX4eyaQKNvDNcqMbrJS1fwQhBXWiPWqqXMB44AZHveH1G45c4kK1PJuG3Q1dAT7sQTDQZ7NXzcGW",
  "key14": "4cUu8av1diUMgFJRsZ8pF3zNLWUxxnytqdEemSaBnkQVWC5qorPFGgcpgJxQVVH12pGFFARm1p5aSu3WbKqPZem1",
  "key15": "qPnvKygoyCwy99Si6vnuNtnrHm6AXkaXx2v2E5ybV4ijb63gZBpw3VhN8pWXSTHCRRbAvNdhp1vE4VCJQcxeeUz",
  "key16": "5XS9qzDLvbFzEEF6ph4n2vTcDXVwmmDQPoy3NUXucucKt7jjJf4pTrpWD8mGZmeBYwmcs3DL71JA4qf7cWMSFMKE",
  "key17": "5wsHazKG2X6ZCCBseAoRf7fuY4gXSBqy81SSrEuSCYuv871oP6MrHeF6RLdRQNniXVn45U8N1rud1qsJni7qx3s2",
  "key18": "25pZNJRFJSPhFth3Fx1NRuaUemXtoj8nyQneLtQLkPieqvL3nnFjybLfypAQQ1PN17ksZ8BZ5uJFPu5oeZivuPd7",
  "key19": "7rGF4c8qeie8YSmgLgxzLwTGyfNmTACBfWRnMYvUXRCV9UMhuEUkunEDkQ8KNXNwNsDKXAwvLzBjV4ek7C3FrU7",
  "key20": "2mCXd5KWsnd7cE3Ni5SdyyEfFcmMhF9dZGpBCvSm75tXr7bByq88oUJDgz3uLgs8HKsbhp84PVipPbQ7jYfTMZQK",
  "key21": "67jiYPT5ZmKU8CeZ8WHaVBj7GFwqK4PMPzbAPbPKRjggjRq7AzDmLGKapxw2sfQiHrrud4kunHhVJoBGvmZ8Mxbi",
  "key22": "4dycv29JnzkVzyWWzYeUNhqwjHp4kEEfAV4pLQBDoVTiq3KKU3mVhoLFcbGy4DcuXfVHH32Nn2WT5VzfNNFxNSBt",
  "key23": "4iwzoQrTUKQQTpLnnun53HmotwYYLuDHSUTFgs87qdUZrNwd9geXypXqsZ62TpbauWL7WKDGpYYUiVjQMo46bpvj",
  "key24": "2sr57XjKYcttkiCn4H3uYgeQBvka7TWfXH9zYisdd2pfXw9BExeuxth4ocgbWH1HrAhiuywMkfVkXFvJ5mFmnQYg",
  "key25": "31qoXyqFkPswWYb3XUEabShia3otwo8AQjPQeTRmzaoXrtarmn5rj6H1tppHZuZUrjCNrezh7MRGcF6WvoAW9Gta",
  "key26": "4sf79FoB2MEgqMombQJLbToY6NWSYEhNCKEEY21sGKbFJh6uT8dTpiCYRKfogTamQXm1gGK8UmcEaLRcoUmFNgVs",
  "key27": "2q33wYhpNG3abKFmGBHnRa4L97BoxqoMukoTyCnTvAybYKwPWRHJmZkJAdtcW9D3CBY37FGheTrJguEoiagQwRdQ",
  "key28": "25H2xjbejMg1b8WieuBXKRNg8vEaqFA9cz3GhhX68xnL3gHY2kQoZeEbkx2KVPb5h6i7YcReXKQHAQvZSd8J146Y",
  "key29": "H8G51NjMyZAJL8eiLz1ToYSsJXX9CDnwht7wDD4gdXiKEXETxx9tXWCC39VdBwrQ2dNbvgGS3D3sVM1a3A9YMp6",
  "key30": "5vmZpMgyecMUMFjrTirCPkdNRpH87sDjVxcxYjoLpWbUjSBeTeewDxAGFb5Txo9ogJEwRMpSfX9qFMMwZrFyPuJG",
  "key31": "cKdrPafR78sgWc9yPUHTDK2jD6oaVENsr1WNTiJ3KWd3D8ucFUqXtFE6jZWYuw3yVUNAooQJDNvw4oozK2YEzNT",
  "key32": "utf8E2x15A14Dd6a7LEyngWXXKGiFxqjS63EQoRmymeJ4xP61uxzM9UpfedEWMp83MHFStk1cqN9EDwAPk3Jq6x",
  "key33": "5xjMqE2iUUhCYyGq7wBWH7XRjhBpVD5JkwtnnDBBjxP5uhxRweb1C5JYinXMLfUeaMyBi6CJv6ToGkMT7dwHMAWr",
  "key34": "35QJXFhuZLro8fevTiJyccacgCoKoEeuhToYCniyhU9iLyQXDEBgeucvHYwBZCM5G2MMdA34EfRLg25srp2yywk4",
  "key35": "62xenap8mV9k1gZa6gF7LQxTTVk5eMPpkfHMKtJsSrd8WQJa1dnebPdGM9KhGgwxD2GXoRtkuT524rtimxfkW3Nh",
  "key36": "4vwjwbYPZgzPb7UvyAFhwfC6AN5p5NDmtGrpQoAfkYZ5pRpWqpw57CoHWZqX9S1JW5n38Qq1x97w6i8G8NWvENgg",
  "key37": "3AANYwtoEve8xNjYA4Z42g8d9wVer77CWzsQdsNsUwrBUcTEWGGv1AzDh7sHeLhGtcw4KvwKsnDiXVbBD1AdqjsC",
  "key38": "Mr6z7JejWxt6LiKKeF7Q2s1vwUJPw64FzJRdvrkB2SaWYCVmNXNJeVekRHviALtbxbnoAEkxvYJRp7cNJqYUdPP"
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
