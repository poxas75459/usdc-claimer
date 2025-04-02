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
    "nwNNv9w5BGBC7jyfrJzRU8Kwz2d7CQEapTbZHfKm2xdp7Gn5A8tLTiDMJc8bNowuDTi7u3urTRbfFkdAfK9i1sK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Krw1Lf8eA3KaJ46ftesH7Ej4uEoMLNyBmbuB5A1yB1Mu65MDcoqunwj3SABBJw7emGtrR87xvAXVXEJKkhyoQFh",
  "key1": "nXk4wgH8AMjwaCmAHNMRVXj9ZcJqNVP3xdbiUZj6jAsXFSjry3pjdH4TxrKjEKb7R5yPa7tW5tWSzRosY8ba8Kq",
  "key2": "KFhMMgtAs1NqX47pdmki18nzxjkna36KXHFw4evX32RppWwFEUjkfi6k312xELBDsvtAqgU15wM87yZZq5nXxi6",
  "key3": "ygRJXiFjmxSiK6prdxAP7HbJciwVo89MjeMkS4oqaUHsgsZzmUFuP8V7howZkc7MhHqeEZFB8dr9A6h6eAkNj65",
  "key4": "2NybB9xRhyCNnTL5Mx6MG7PMnKx8SHAYVojfg9hVAquF6wbFo3jrbwavCk3F2xbxgJyJc5BJz7Z9JkrXUf4sGWXd",
  "key5": "4KmWebeAVJFqf3koaytz14m6C6CPVHxCvftbYAvdoGDCXnahTuXDXWiu49iYjogbMWyX1YEhVQ59jHHzRbzDgHX2",
  "key6": "3ugmkebDShv8Fmj9Fa1woyJpdEHzvUBv2575UPwRiei2KcUkRaCP9cifewrcDxdD9N5KrMufnsHvQYNW7iKArJHB",
  "key7": "ysgFLdg8SzjcRQk5LYskt6z7QVzcNYSA9UK1fqhmh92AXMZ5ax9TXELukZJcPU8jzLdfYMbThgVgqbxtDkZx4ZJ",
  "key8": "24dToXyLx4CRuv4p9947exeBdpMH8k34xhBVVLy9EBGB55NubNjzaNWRkf7mAVCHMsmoubiXh4vDLi3dGj9TwQcu",
  "key9": "3PrV7UsFGNC2ebDNAHnez3bR4j6xPeg25NX7zjtweK6sNR19WcwUhxCKjJtKEfhzjY8x3LYCjH2atQN5hS79Haes",
  "key10": "4DbquSpB9sUp25BMGTNPrzcnwk433rXehqcbuBnTaexbpfpzHoj6XXMGFE6b8myuxKxhqtSsihqWkPYaYiFbj5J4",
  "key11": "2bk4mp7UW33oyhiQJpcYTDAKeXnyFDYagfMj6GMBqskWeHdP3rUhghFC5aDjXzNv46fhsyYV6jgYhHNbvFHDXC4H",
  "key12": "4xKutDcUPnLZDeifAFS3Uz7FBfajrhoBj7GNwUek6kNqz4xw5vGTrdvTpxTvdPxrifQ7mbijoKRWBMNH9MH4XBYw",
  "key13": "4XSzKsPvxWxGKR95oAtjHcYyF1bY2sLHKYmNBeKZvXN8CKf5N2MCAX7jJW8FmjCMDWZQ3Bsnd1YRbDa1CwiY3425",
  "key14": "5RD3cjgJnBsiwcRPfHaVB1THzQAxUejMm5cn5cdJH4H5wUVNayJeW8S4N6JPrZrm8uGoxg1ai9HCfMe3K9F5xwpT",
  "key15": "5KAUvbLTpk2vtekDstcVVsrEkWxE6pfJtofEk8m8WEBtvYbSJa41rGK5dNtE2ucohQkfhxXVsh1cJ8TfNc5tuCyT",
  "key16": "DKgYpSYjBvwWR4wbJgMPhbMNQJiQpPuFvFcWMaRvRcXPH3aP8Em7RjY1R7zVtxGw3VGUrZWbVTcxniF1mcoVBex",
  "key17": "4tZ3rv3tJNAh4t4cTQFvKTAbRrwawbd1FKdwXnxhNMoVGw3TeN5opQV3FE3H9DGQ1bME23wAGXDu5tmkbqq8dujQ",
  "key18": "36ruSQvxBfDN9bqW9dQy2ozgCmxK8Pwz1y7sBhdBLgmHuaEB6NA45hyBsuoE1pTGEWbzSrfcgm3a75xHox6G5CbF",
  "key19": "22yiTatQnRLxSLmknbsCna7fRUr94smJWNhBQwcQFtRUKrMTgJ6MRvALT8AA7ADKKXtCdUNVCSXS3oi4F8rW6fkU",
  "key20": "4A8V1QHZnujGpEBhS9CPbDQunzDMQwuSN5hSQYgU1QxCwYFXyYQ7cc1udNnsh1kQUYBtPuwExLTLWApgFZA5J7kv",
  "key21": "2G5mdu7aZCAxeDiXwtkCMBk299xPQ6AkBTRCkDYBjG7nyGQwJSKo4WFTB99tfopSxtQwqLg6aELvhED626vKmrU3",
  "key22": "83gtU31DmsbaRmhTNSToFZfyuW1mFPrjbWT15wt15hGk8Xa7fYWWkdMrA3Fty9SdtwUFpDvLEmdvpdFrtb7qdjU",
  "key23": "YkG4CDLxi6UQ2j4N3miCe98H5SUBDoQQHSPXVoz6c69brZXBjQEzWn1k6TAqdDg6L7m5pQyLSbEcP5ND4maHA34",
  "key24": "3DdEjsu5fMEvue8XszycCh6gkekkvDmZC2L25HoyeRpTgKFVTkCMKGzVRgjiXcWGFbDFt4uo3QCoVZnwU6zmF1PS",
  "key25": "2RRAzLiKShYE7Y4rjLaosSmP4qp5gM8Wye1h7Kq5SUE4E7GmPiSUSjTAUYb65e12p84WYDekioNX8hZNSoSpfYei",
  "key26": "4YEfM4N6YQZHWPWnMNZRKo4wvq3fFQQmh6GJCzqm5owpRVZudBF8wPXkFMXnb7g8W3bKcxyPKXvd3tSvsNnLL5RU",
  "key27": "3DYzyS5tSVmnVfrPkqc7oqX2vVMpZ5AHiuzy79ak1NUg2HMbyJdqkz4FEBYaBHh9JdGyzqoC2JATA4CsMQsHeQPv",
  "key28": "2hkE2uf1B7Rs781A5ctApZtDAGbAs9jTnpHbSuMhQdRTDApaNibkyy4L8xxCVaSbYDJNFUzBiA4Vs3Y8nzTvN3ts",
  "key29": "2FTsJprfAabuoejNBQw3ScLUaF8WZvyuchwCW1U7sn5id67WzEVkWYCW1jG5UHrpAsN1mX5U6LWoWUJCbVan58SP",
  "key30": "2qLW7oeA9ZnRCvWas7b9vhbBCNKUmG5i8La1r5RY8qdkZA9Y5cUMTsVJRFDuvEv3ayi6g63Tzhfks5J6a1i5CPYX",
  "key31": "319V84eZoisbwf35ueGijqMPdAKRbZvQs2QhMjwULggHCkR3gujVMetzRUf8yWzuV98i2r1SJPu11QJfEJwbfxNU",
  "key32": "5oMGshMCjcSjLwaRZAixF72zeT2v5kZWegpvtezuMztNcenca5eJWXvqtcLyZsugxrEkEnwRwFUx5BG2vSwzkiz4",
  "key33": "X5PSa2vj5jznKbipkDLqr2wsxjLedevs9q6mAmySDwr4fi4tV8AD4xyMRKxtFFKSKhW4bnFJcTTDqsiHWcKZQbh",
  "key34": "4MaEppoYwXmGLfwL7dqevXbDrhUrKreWXbyzwfPdjGziTs67Ffh3etUs7ZWnMy1b5p1S9kK89zJEY3uYT1RUdxJR",
  "key35": "33uMhejjAkHMP1tj5CBdbKyPjvDv9kUkKCeE2WuUANuybPb9wc1Nv86UVH9tWkhLodbgaiKaY24D7PFp1Ehsw8uX",
  "key36": "27ZeWDHYE7B5KDF3xFCUFBsXdtyWMGDsPRPF7NMLNKMrReDSESn52uZU7BYj8Q1pzL8V33D3j1ucQAhm79mXbLx1",
  "key37": "2on6FGbzLHRzkb7pcgqwsBhp5ZVNjsePTRWaQRSR8Pr9AiTb8sE152Twpki11YFKxvwmxpX25CUBNiJUeKModooi",
  "key38": "2n1zVuts2Cv4gdYVjn1d7ydu9xpPk4RnSdz4v7eMozAY4enfwrfzkEU24ZmDC9gkCRwSia9snwRR5ax1VVg7G59V",
  "key39": "2zPRubhMjFBGV4wWugyqrgzwzGvcNKuwbm5n9QfwofSaVbr2FqfpdmvrAFrnjZc4EqbkcVJ4UF2n9ux3P1LHcqpi",
  "key40": "1H5RhDpVxAUuYye7UwobkePqZGYsQmLwFMYVTTCcAKNmuQvwCag1uxiTMDy1vcxVyyCwYtZ2wmQAVQM6e4eWPMw",
  "key41": "392Q2x5ZsBb66VESL2SBJDZMDEHpR16oKtGRK1UWHVzrKXpCfBJaVc6xQpaWkng1EuZDEEEYGKT17tB8Wb9JyG8f"
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
