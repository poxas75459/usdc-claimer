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
    "4rDU27SoHCAnXYiHRpd8VjtEUwCmJuy4Ex4EzdrH53rCKRi4D3vxpJciLk82omnW8KWbyZbeoiRs5oexE7BJQE2i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zWPY4mgoiuFqt5Sbrveka7MgqKdw5g6zm6RXNEMsp7K6a8UNX5XqwRkC8H9TDKYrhpbBUEqQbGic4Qoy6X4PJFT",
  "key1": "4G3aZKJq5zbdpJy3snh5FS2MhMqrxS24ZmSPDt1TJh2iCsDUF2j7zzSoPv6XzDEcLih9AcUg5r7seyumqTpMDJH4",
  "key2": "2QDHyyQqM251EaJGGyC4zPTn9CiSSzVKHcScCSvgYBfatAXYHKA4zqhxjSSsm1PZPnBNt7kEMv1TYhyZnvC5wp49",
  "key3": "3MpAeNtBhp2TQoKPQDkBC4LmSzERrRkM3cF5dSZv5QSiSmCz9XKVx6Sd1VPN8UiotUxJ2bMsDAMKD8SibQfL8e4n",
  "key4": "57w5LHbGHcPMdh3H3WEzQ5piL86HdBpt1fkou9AKfe9JQrZgGPj3HdniNqQGb8267aMMQjVGGtrSdAqTRosqprsF",
  "key5": "5Fjyu8vZ2UbBSZvgMYMhuCXaBPtfFbMDiHwNsZQu7gpDyD1AuUYYDvvJxNcXKn35koFCdw3LhT1iL5MEoZjsXXBU",
  "key6": "DioaqDuovforSndVB28rVmQ691jfTXwwTZuoqvybipunWy8aFx6d2tMcf16a7oNgNVpqsgiCccqe5EsmAuSdBJ1",
  "key7": "9yBC6bLZK1fSjFN9iUJB4YtZ9dREXUZ81BbH29qZuUtW6doZA5Hcd9md8XyJazX9PUBrJG5gsvpVhE7HxpgJvBk",
  "key8": "2ZDeP15C9soXmcLHb5C49E39Zfw1Edg1aeizVnrqcZ5BEgZzTQa8tmAwrzQLb2PozB3pDNbyWsHwDJdHV2PngcDb",
  "key9": "3ZgecxBFpo9ESFeFYHfvVxaKcdTCXgAC5vimmfbeNZNYkWK16SFke6D5KtA6ZtaHdKc85surBtU7JzczDGXtcbRc",
  "key10": "2vFckE27zgZ6MmUHoKqLkRypFxxXz7xeU8aHvkred3UMfs6rPZvNSpCRHGqEutzs93hCWvdVFjniG6TcVizsnq81",
  "key11": "3nitDw3yMaVKbzJWPwxZFQKqknUiDHt3efwkjihpoqiyNMTWDrwnTpRtZVLsawxvxPn8NyS7uXowwyA8e5DbJu7J",
  "key12": "ybHjVyJLRACeLSb2CwCUSnojBKZnC1tSoPaazpwsVCn6Si1u4yFDqpHpQUMwsj8RK8YPaoGu5HtwVUvKvqXWThY",
  "key13": "3zDFcNRL4rAYQ8rd9Zv7zvNV1FrcuEx5qcfbDdhy511N2Qwhd2iZ67m1sUdzqk26DsPEPxQyG4652EaLWDd7HVrs",
  "key14": "5Ag6ZVgK5GtorunwDziYYiG7crT1MMwKxeijCQePkcxchv5Mq7L1bB7LHs4WQhvZzRQjXrXVDGzADWmrMNA9Skic",
  "key15": "3H3hd5wuKvvgrRt3wHXQn86rtkCg7Ur9x6fYVAHow5CKph715ExuhUGFWXKKfBg8DUZkq4ZuBTyVbeZi5CniAuzz",
  "key16": "2wYm14MoPLuxLNsShWgTfGnMcz4YdD22dnZxSevyCuTchXfobUV3UhhpZpkrFRJgS2D2dDxPGJvfYv87wxFPF3kQ",
  "key17": "t9pvyFCr881tVGLgE4ARkWaJTTFZYdEaGGSoLR5XcGCotakApg68zWaXWvZgxhwYSa7Kyji2Fu6eCQ3iPmzCZuo",
  "key18": "5sXz5CUXP6HUiUyUy2j1Gkqh3cawpTmF9g8kXXJARRom3zf4AKC3wcUth5BdZWhJUoy94VQUnU4F3ESzAk7ejgah",
  "key19": "3RgEYzJNgDM7NwNGvVJEtVbmWE6p4ER9uatpBNyuoVECXvCb2QqTLJCrs1hjSkCfcFrJF5WsFj7rHtzkFwBbuT9J",
  "key20": "4N3fEpUoL9jtgf6bD9YiAXX2cNNqPSQ7x8a9mSKkbMbn29s8vC8QQKJzgf6k7q85Do1aZDx841R97bLYaSfvWyRB",
  "key21": "5AAV4uvv63e7cimR2YWHmY6cdbhyPNTUxvXkp4kwcZx5WEVHpQWU5ULTUDiMynY1w2bj5Ez8vLYZ67KrZw91tGk7",
  "key22": "vGfYNTgZDuMvhTLttmGEw4RzWpVNT92zuMvXsadn5BzZhaZKsSnCFAdHFNDEhLxskaJD8Ds7iFTfFJ5UwWNPvXY",
  "key23": "feSEZgLUVgT8w9T8sh6pFwD3GfpwPQmywTd2jSbfp137ihcuPuLEcwEWqoLGbYogsNtaJgr8L8M9joyX3ZMXY8a",
  "key24": "5Qy5WjH7zCFYVbXtDVGE677ECi1k6zRJoN4tMMMHSVoCtRh9mjbGWnrNr2vQxdXcfcvj1kTjbrSANRwc8tY8k3Xg",
  "key25": "2b7rUsNaFccpjUgfALiZ4ztKwS9ez6gYKmk3TE2Tu4VWUqTM6jewsby6z3HE28qkAXndyoLKyLvEENtVe1XV6nuv",
  "key26": "4awPY6Kw1cctuTdfwsS2AYr2cf4e9Xq9seiVUUEmJaRJ5xCCRV1bRETmgLJYMjE5SQ1oQV66Z5BkueU1F9LfPPaM",
  "key27": "4Prvfzoyc6b8jBgqH6pQ12w7PGL7afG4g3qcpL3ZxdXzkttGjLrA4Hni5ukZ6QmjYQteLptGhkt2MjzvCWz6aEgn",
  "key28": "34dqYKVPWGE9DSn8dHEv3Vjm7LsiAA3E19rpTbzBjg799hn8HatLoMRsmeXQA7Lrx3ErCuzfzzpehhaBWqBX9pxh"
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
