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
    "2MPBQG7kzqwYNqyCLzSwPZboAXaxGfTdnXY4gpHqMCakNNjiRLSD5FJZ2LsM7WSsJdoBkVVd19sRugFLrR3VgCsA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cgL1raZh5tBTCkfjzSCKas9oWD2rN6HhRYu9BUgE8cx8Zz9KErzBsQSCuy89NhjkW5WcgV2USmpsyrnyuv5g1D",
  "key1": "3nvWMUyMXJnBsBDrEfx1Rv8YPM2oAQ1KffJVYDs5znNfha56koFVvKJUC7qwnUhYUiQ2xnAKKdTw9YiADWpXGJwz",
  "key2": "4MPSJtJ9TS5Zx7FVhdXyMPwjKhNX7vRciiT8TJ4CZYkKDmaa8KF2h6XUrwS4y7qyvmmt4TxcNXSxSK5e5wTf7nYx",
  "key3": "5EVNm6KpBh5eWRwnMgEBZmfuzpUUNhqR86SPJ4MvUVxqQDNE1m9ebLxrYgcZnPqfVF4cxUCg4HFNTmv7s5GE1FCT",
  "key4": "5i1X5cB7p5uyvTzxDdWLGC9gs4CddFa6k8WYGyTjrZUJE35fKaSgPvPzf56ZJSzwDGMmx67KAJFD9uHfpgGEHrFK",
  "key5": "cvySzLT9SbYQATobpJsDK3fkANbfMX8N1VLiG47ZKt75QsuVsuKFeRFweKJQeUaTAuy8zPBVhh1fqvUQProUpQR",
  "key6": "PMjaksp3W8Mt5YuFrar6KUEcuHDoq4uyxMcjP3NPFEdEaekTUgQPtKWB553NRfrCANyAy6U9RoBY69rYdHGKZH2",
  "key7": "4qtaebnsJNLjLECpzYN3xofgC2mkxEU8YgpHouZSgSATxXGkepQ2xTzeGJA7Lj5qFR5GJdsyR1BvzwnnqUtb25pZ",
  "key8": "3tzMyTdwTvvgdFqrWGeeC5CVGZNb4brjiC65WV9Sk6rAEZRGgM8gFVY4jWrsmUupy7oiCYK8JDVMn2npZovmtfkb",
  "key9": "5Zr4J5hu3SMa2HnRWyZMuaBAuYxMrHH9UL7rPNHmfg3emqMMR1L2iDTNi38qgtvEu58TofeAUN3yiCnpeBXCKmFK",
  "key10": "4S9UQytV6urvtTX4Q4tWgGSCFZ8XjVrEgKKhmFgJQtQ8SJQncEepNcisBJhrJbj2DFJs3uvZyThzBAn5sh3UQsrU",
  "key11": "5yfHVJJf7L4r68pokPWNZZjaYfZNvBzg43JSXeiEbPSG1VE3xdcTkcSxds227U7EvDxNHeskbTS7j18PDtVDcnaM",
  "key12": "4VpKS9D2TrDY9hxZpACc53aFBZuM3FxTqJpeQn7HuALuZqieawizQ2rjAQGcxvsKEzmGdxZiQt4pkVxN346Q9eXD",
  "key13": "3Fvne2YiyG2A5yS94NEm4oySAswu5M93wQUyX6Njdri5qsHxQXmxYqktSAAb9P1FeK1z8p4ysGAH1HsXGezqmBgg",
  "key14": "2V8DxexF2V9LHtpNBkKvhA7XPTjjTWRxUWFxaZedw7sYQQbwoNAksWXcb1MQXkZV7XzncvkKG18hvNaKcYCuNf8i",
  "key15": "22ZLrrdTWgVnLpzq73apVVYx3rmFDKR4bfk9myL4LvNL2k3ZRA9xW1NXnJVjMdUtWr98DddinrnnUhhHY2bM2fZX",
  "key16": "3a6WXzFGruDWKKUgWKhpNZeXHXZqnRdrMZsH3BEpFrC2GvjCh53dFb4KR7jn6DfS83bo4rb8DVNsMmERpM434mUy",
  "key17": "6792jyGhteDhaKkYf3hWm1nSsXyfAbkW8PmKJXmrApNgCSsQdCU9qAMDa6ykHtZWwAwtb5jEJw4fbahufewnc84h",
  "key18": "5Nq6LRhGfRfD1xrV6gfcapA2iT3QYL33xPWpuuWh5yZthyHimTFssdPsKDhqvAx2u99APHQ24sL5TUXTG3MZYjCf",
  "key19": "449zKAsksahdwZBiSAxRDcPfo9cLFhQuZDGXdtL7M1abPYU3MKHDdgFcQQNDjAeu1LcZySwHxNnsmZvYuczQxkqE",
  "key20": "39VAydWM8UWShC6UneQ3ynbJisJbCCHPqUXrNGtn5cLroEujakArjZnpsueokCtUyH7UGzQNJ5mnoMUbFrkNG2ML",
  "key21": "3kDorA4x6fdGE1SpfdvL9C3dwsdQhB4Jx6vG2Fri5edthNc5nj36NkCMnWjjpAzgYbbN3uX5HLgkfALQvYALhZbh",
  "key22": "4o1298jKaFMzY77khAf8CzoRLLskX44DL7Rkv4v8qDUnBbtw6Cs9w8hns6JWHUJzAqVV3Tct7oq2jrVD4HNbeVAg",
  "key23": "2xrhqDNsQAfdodBRBH6BACcWLUa6uy6AT4N1rzoAtuQ3Bi2GyAJWP3ZMzLvSpPGoyskEUZhDRm8aHTc83sMDN4du",
  "key24": "3W5YT4Evf9jXWUwQkogrEEVfbYM25TNCxgt6A3bs5UHaXZEwQKjw7Q8BydgagoyTTPyBTqf5nweaJ96Kap5sTLQQ",
  "key25": "66vZvP9f171WsMzesdsYX7DxBgEuKa5q2XGGxkDwhDUPj27dwi5arMtv1KPKdvEyztoW7JJKcTQEi7oXUvSv8ANb",
  "key26": "3CHD114njsZejuXoGbvKFy3yfj8p9iEqnrCuTXmB7JYLgieZ23gAGfwHDL5kaAfdJgfLmjU2xFWcLkWAKhYJpRqs",
  "key27": "5bSNGGeGWYExhq7BJqA85heYUkfpY5KeP9AwVVRPJVJeWCLERs41zFEhxAsHEAApHgpB5aKgjVFTxAfspauJhPyd",
  "key28": "25UdLtyS5Qks7hHq95RUwEWVPvkJMMp8zxEaD4XQWQjqVCUPY8JQcTNWXZtee6c8qDQ8Q2ZocT5y3DpsqCyn9HLJ"
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
