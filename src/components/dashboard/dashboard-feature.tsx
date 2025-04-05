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
    "55KKyK5mJFdhkRBSk3BnW2WPyQXBb6CBSwrk6RU5P9YE68xXpf9o8ae9eucp8XSPrAqMRXGCfeyuqrZqFQNrJHUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gMqwKS8ABBANzUPyfXjwdaDE3LgdiTtVZLE8X3AYyFcf5pcMxw9MzudNaqt9Yp89WqpnmYKNNysUi6n4vwj6zsb",
  "key1": "4FeCivMkjjLCinMjmDXSQUiQ2FWZzeqz3aTknULKaCC4iNqRXmDsZnwt3guLgJjYBdGEcoDZeJDf4RSdCwJTU44H",
  "key2": "2iJazpETeAtYZrntCkvnQjZphJ2VDUht4UcnhuqGF7VAgYichBdGibfDtWqZxbvkVyZGFfDiW8cHigLqLxcRpiTj",
  "key3": "aEgR2j13x55EwRTimXeqVVGUxs7An3qXTjX8JHLEenJBf7AXiqfFvgkjkdiSSPZ4XzSfpCxvQN1yjE2YPbiKDpv",
  "key4": "5e7hEUkmWc6gbQDNDzqnP29Xae8pD7VK2dazkG4mabCQGGpxTK5q7rbuKXVNH5YuUxJAJV6soVDFaDqLxJmMdH2w",
  "key5": "46KTAHfMi5WMJfumhRpDuNF4us2feFVNYZXJRUVbgZ3BkrpMkSzrGv2C4vNWFPmpw8dP4hHx1coV8E8QoSsRbpiZ",
  "key6": "3SSkHPLvJAaVuoFx63fzE5gPguAPufyEgy9pmNYvxs9xzb68uaKDAJVEJuqbcYecZBakat6ZKAhZbcKdohH5on75",
  "key7": "EPQEu6GFCDCWrmroBhNftGH3vRyMrJd4SM33xZigNovm2VQN79rm5gCbY1dEc61A6h5dSfwgvd8CDxovZDHhPU3",
  "key8": "2kx2drmYKfToYDZCKnUGUrzNgTFr4RshzzPDiBho5n1DvRji8grFQttU779FuWbvrSaWCXFfEck7psy8PfRe1PFE",
  "key9": "3P1dxVZxD7Kipr14zSjL6LyW6A9h7aYDipkv1v2ULdCAD7mWZV7P14E7dAdkqSMrGwF9hSK7tR4u1Lf91SAPiu42",
  "key10": "d5Q6DSEq7GpNDAjoMquFcCDZGaEAH9m5iTAGGFDuc7KX5bLHxygzmTXHpaJEBUrh3spqJnsHkPvV7mMB6o9SbPT",
  "key11": "cQrqbGPhcSDmWE5to4zRXBrwC7vnLEavHVQdueGBaCcp5Nb78wHxLE7ULE1ZGqokDcXbYVgDDDj9NxyrJa9QokD",
  "key12": "4GDgLgUx1SJRBsdH8KeGBSRz46uhYThK4mBePyNqYbi9JmPmXUd9nbxVWKFmS1HgkxbaJKE887XbUZLbervYu9D4",
  "key13": "61rA6QdpzMEsK8k69GmvFRP7c2KmwZ4PEL6f4zxrv8mucQGEZJd2m9HvJJHFWe9M24mEvccp255RzEgeNDeQErT7",
  "key14": "56CH5mT6ViRacAWDMSGw3HC3yeQZKhR8Cvwzjn3jdWyjcg5xBLSDWecwYTtWhu5LS6VjrM2Kd6zfbqSZw8rUyKGZ",
  "key15": "2uJMuJxFzEFmuZUiBDg4xxgRxr5GGTyi72cymgnqdh6feJcjkjWVQoTYehUu8Ujt6LC2gMCKt3ARD4x9WxU45TCq",
  "key16": "2JVyZfJ9NnjDwravqvzEfYReogGoh1VP7goRaiy7xvoRirDKa9yDAjp1FJWoxCGJox3hnk5q57s3WUMhqnuK8SsX",
  "key17": "3TXmVq1LaUVAu9SJ5tKXDa7zBmqQU1wgUiH9yUWUVrHxa8xMsWwnHXYJ33VuCx2GBmMXEfUG1RnvqTDPjaLBeU4C",
  "key18": "53o3HvAVXTUJW3ieB1jn1GSGiDaJDUkwKy2z1V4L9m6u3SFvyD1w4xASydVkBzN1Vxq4kAtGgz8KAMf4ppuJR2Nv",
  "key19": "3EAa5L3eKnkA1UwsKKzD7yTcxJ4qSFSryPkfaYgADSr6uAwyi7to9w13Fdjx7JjRj1HA12TfnDMqEA1prYCdrtzM",
  "key20": "3ckbFGXKcjpScdb6MEkwrsx3w1F6NLU3NVbr5fuCexhkN2yHruPLejtpXMDXEXmwFbeHeWePWwRM3KRf1W2hEf5",
  "key21": "5QwJDY3nJ9vBm53vtbBs3LvJf2qh18WFqS4tMBsv6rPMUsShLn62GNSuKCJ4mF63nz4hz7pQWLxeHUZeR8NNdfxD",
  "key22": "3NgmCmY6HLuW27stKbJg3jdF2BWm3cg6iTzViLJcu7QXjLNBJygXK7X81FuM7y1GzprXK2SdQswDGdRC4nDCCMZJ",
  "key23": "5DHSJi4ACQ3X1JXpoAgA7Wi8azztyX5vyC2vCGNF2cViy7e6CuscVdXGMQvjrFt9RAhQnPAMXf2gyop6DSWbvxme",
  "key24": "3xNCtEr57YUT9xLKKWnGE8HTCDjkttG436zLachSNriSaz6kA1uvs5WhMTRZipC3C6Wp1WgDsHM3Rsi2jJjAnrcF",
  "key25": "3JVi6asXP69Bv3rUWxDeGTCjv2QLpddVuSrLNMrimb5dxfSQ2jeiNmyFN9RbN3eDxKTeuWpDkkzmveUg4JKAB1yX",
  "key26": "5pTmNUb9Jb41USLAoQyjnPCMoPyhLaKpkMKd7eaR3YJhhcg9xDhqwqFNWgE8q8dTAwdDp1Xu8g5QuRsvZ68iiPLH",
  "key27": "5xg6XouxUgXDJxNCwqNxnemud8GKyCKma5RhYkupzUEBkiw8PiBTkvfx9Z48zRSew2HKkVWhYTW3J7WRJJ2C4fZc",
  "key28": "3RAJtP2eu695fhXvBgYW5BwtXywtLHkVNmuabjCafmmFqx9C7XCWg396QWeXvvBzHSevaeCZjFrkubDX9NJkgmSR",
  "key29": "cBt16iv4NCcvdQrZLHP6UeQWr9JUJUCSCuJSVy8BvyWi7SGD9WjVzagqaTVqfdpr5K2imyrpZ5WHWyHad6xWHDv",
  "key30": "25UrcvEfwE6W88YyizoDLEnr3rm2aWcZ12CMbqVf2Dg5kxS4NyQSvUoUokq51ZL6SpZfedfs3nyJFDoCd2XtJnSe",
  "key31": "3RDttBvxeeffUt9HH5HtLQJPubKbHiEabdH1vgas5w5rdp3KdrR9HG48T6EqQEkztw3PVkbWE25kSbHmDoS6862s",
  "key32": "5xjS46KBhNSyfggLZts4VKjViQ6Tv4twjsorCQYjPGEFKLgfWVF8ggiZLPVriEx3fZaG6fcBzpXgiCJsTwAUHi7P",
  "key33": "2GnQ3ebtKeoAZwwuVV9TWYnhCxtCygjymqByM88tdmbck4PaxQKKaqQRmsLotV7mgUf2MvUhZUjZ1ksVaUkTafAt",
  "key34": "ted3xa5g3gd8NphLxAggUogC7hL8DFLYDwhT36mkyp2hxyzKGHUioiW7gcJvEUCsMGLwsmrq6GJQnzfr5mzrcDR",
  "key35": "5aGcHcwqjM69zLji8rm2sWEFaHNJj4CnEBwPYwesqpu7qhT4WAC5rcjRFiREaVQ5sBwh7LRrzypyv7Bx4Rf39aB2",
  "key36": "21cMm3DjkaS5GQ85NTsD2CNoi8RUAi6JLeehwupqN4JBxEAJbXxauD7Eq8hrWm3WNGYSC83A9mu7uNWXoP94VFqo"
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
