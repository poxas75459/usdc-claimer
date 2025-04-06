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
    "3pXMKciFCcN3PjX8GMSkVmTctouV7MSyQjGwN4xCQnxtCRo4sXQ1Ej18iZiaprKSzDJJc1Wh18KPQ3gYEUG2nSy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "294ukUsFpbC3KX9FfvYD8mJqms2JpF9fATYdmJC13fwoUEk38Ydog9wCXXeP6FwNRFq2hJJ5Ya2y2Xgkdn7BN3HT",
  "key1": "mZwT2YBnmG1sMeQCEiXQxGoUYwDXqnmSZ4gSeuzNnovvUpbR2RHjMg6fwmuurwtLwnLPXJEqP6xuE5DxW7QqkUJ",
  "key2": "3WhMGuppRbWxUmc1iqAP7ySjBZPNemE6nrma7FkwNvGmxKgzhR5yGiHn9BpcrNoVxL4aS8wctPFnkxFMjwRbrqfJ",
  "key3": "k8JgsxtRUx3Bcs52XFyffnzREgBawnTdR2c9VZnyQTr2scQZnQhGWY3kLBYRPBd8Bmsa5qTJvSNc8penLucVERq",
  "key4": "2wR9gh1pzyqSdDnHUTR4Vs9EWpW5Lxi1LmwKGuHuM45DYUpq3CHCtSzCGLjCKvxCZKaX5mEBhWaVty53eosjysKo",
  "key5": "3iWBX8iriSRUjcUN5UsgHjRPy7e12CCS3oCPUEX7QcEA4AoXxbzHqYeUfbk9mpJ9zJCSHB6wpgAPiGB3x9tLs5jH",
  "key6": "4tBkM9REQ67eFLL7JTheAuv2wE84uiZxeEWEJTMYgGaaGtQJo6EKeiXYFMweNDtemB6ETkzUMYM3yzmNZdnGZ5aa",
  "key7": "2w9U2UH2scg6uBysvPeqFv3hvG3eZqtpdHd1dGx8zKXE84pKx9HzkVq8VjypW2qh8XET6zgRML2K3mZgTLeZYXga",
  "key8": "Xfnt4PkdoCVNdCkfEooc7LqJhgfgCMaBnUd8NjqKbx1n5xUQy65LfN1ZF8VMQ17qCtz4QE2nDxpE5KHYWGq1w5C",
  "key9": "5VKjhhqh6mszKP3SDvABGgMGq1oEgggM7aKjJBRJ75hjgXnMjvL5Dt4sve2StXerwkXYFfXThDbzEmHfBAg4Vea",
  "key10": "3HHyqQ8b13n7jNDaH5WbTz6Tck8EmHmP5bv3JgHbce2hTdrjhezeXmDEm4Qinzvvh1ev1TktHHjJXwY8pKH3mu4u",
  "key11": "3xv1McCHE84Yc624hH32aks7YVZ78opKnxuX2WX6L7QTAqrdtWPSRaBfVpmYVpcRvuHhEoGbuz3yd6M3EuQBMYNU",
  "key12": "euDaKg9MTi8cCsAWVawKPhKeCjCHYPyJR983dhrETxFb3CB6Xg1J2EAJGmFhc7CTJUGrdi7JfyDjQKcfC8YAMhx",
  "key13": "2qqxwVmQpizvPGbXMDeXp1oZSCE3bVwYAzgaCvh4r2yaCRvSpHKyqsoycs7iUwP9u5SUKJBJQswa1UKrTEnuB91p",
  "key14": "63ZsMztz9YSsbQHUpz1mKr9H8gaMGAB9ZEMVJDZFCUTQYEJVKMxNqMU5odLCmCjd4HdyEMj4YmfhwP4Cjei8LL4",
  "key15": "2E18ccwFX9jqGH1Siuoe9uvHPrH6BgJU8tGH99i7gejmSw9mQ87dXBKk1zdoaeC9nqmDWmmCW3JLVNXNigLcXqEF",
  "key16": "wMmamiNzUg4rRcmDTcyZeBp4yQmRaMJ8q4tCSRRQqZdvSeoKTC1RD1moeaCZ5CNHDHKpy1TrZgBwtsutRPELf4e",
  "key17": "3o1UHqwG9Xj2P5vrHiQUxrdzoPRuBWH4s6ro3VVGHhVGVvJDscDUkBvXLqxKfWbA1K6xAqFeh6SjrAjU5piAbfKd",
  "key18": "25imoFmPxieHCtzSvfaMp4RL7DnCmjFuMbxMWvtu3Q9gJTLfgWMt9nDp6NWmoXpMBSCMHdWXKUd6xAvqkRBCoXay",
  "key19": "5xRgr1tkyM9VvSTkVw1gRWRLxbt8F3Xbzi72MQoiiRt1BzYvcPwqhZL3GKXUiJwPxwoioLHGKQgFaXe5KEacWgsD",
  "key20": "4QDDt6mmzb1pJcqAdJgypkKgRvP9MPM7LrKpNEKyoZ5bMYK5TiJfvxZg89hmkFLf6h64qWLbPtm4nQbVPBJHXudc",
  "key21": "awKB4nPvnj2gSzEpWSPw1yBMg1Un7oRbYnNnKb49rHezTcqikHsE59mAwzSFRHGp9QAVXcVgbvRmXwMBLq6vzQi",
  "key22": "5vQd6YMoXVokt2TLUmN4wtHUQW6GKLEbqj8Zo77yD9YoAvDKq5kfC5FxQf5Y61ZPpAP4ncm9mwEyQwtcMHGY1eic",
  "key23": "izG4mVifccr9vQQShy8geqDKJybuQCRahXdRixEZCVvfYwYwvHkYKxAyyUzgoLrWej1QTVyL3atNN2AzaKiWCSi",
  "key24": "gg3QgNCxg9LSrem4W1U1B3Vbe6YyB9QSFGpXkDJHs3YuYEB3oGUjvvvGDFvrSNTY6vBZ2nVUnpbmFpaNbjKNjBP",
  "key25": "p2RrJaYkrWDH21ifxA2zrHBSHeb5FZkstDb3oWkoj6Mkw2EHbGQPpvX7aReKgKq71vDDW2SPJTJYwafjtzyJa9o",
  "key26": "2JofSfcs1DppaPY6fG1PTHrJMTU2xyy6325FTiqovn56Sido7SL3Tzact5PGBGGbWYhwnsM51TMWL5rPiWUFUAib",
  "key27": "66VhS3WvUL5Xnh5Bnjae3tMGztNNDuRxGN5cyNE61bjtDmQHpszr6qrvpLQzr5iYjfZwCGLgZfXfXZNQJHKcAeya",
  "key28": "s9HZhnyBNaHHGKELotBXpgRc5drMfNt7xsBfTc3Wiikvji4i3zS7g9H252JW1z186EgdDRatTZuTTP2hHbczxRk",
  "key29": "49N6dcWRkkSj3DYVJD1LpoRqap7aYa36mCYdsYQt4oarD3nxamZwNdkxfhrTexWk5vnzCH3tX7tZa3xHctPqX5Y1",
  "key30": "4H7mZPUw5Z76YuEiMBn5UkKynoPD5WVMs9vjR4AcAoGaz5t8DcsBUDhiXEhu8inCRqAaz3Y53D7kgJDmVNzGkkk5",
  "key31": "4ZCuVydwfURYb4uAka12pSSxiP8rf7CeN1tyGCLC7JMmPvTjD8GxvGr36waYEYJjqQUCS9WYzxRNjgRCGwiGLkAK",
  "key32": "QJmWF7M47Z1VHEnLBYzzXxQ1XHntKGb5raebrtJDLubk7Xrao2frbew29kahwToR61CcPaeKZ7fnk4gdtgiMxHy",
  "key33": "57YH5LBiUwPDVWQ8964ZJ47CBVct6tyXcjCsY97HYdHdt4aWK1VMiAzLivpmerJfa31CLR5DFLcLHrnZtj4FECdj",
  "key34": "5e4ZmXXEkWmdgLNS3WJ6MdPEcnadf8KE7CaFcEopcX6Xpx6KpSt7JW4hKYjaLkKAPWeaRZgs46Ei5g1FZvuc86aQ",
  "key35": "2GMNnCKZ48BecNfFWEDMmiAu8ZPJ2zwRtDN66FkL8qsKitpPGWvhEfMWsmiNKjR4nFDHt4yfVL9yohNDXiz9D7WC",
  "key36": "31V9idA93phjwPuaLjnqLGxUHrVr8oQNK6fBRLEYB5y7jB8odURE3Uo7uVmFP4w5kyXExn9ddj4dCne9rqJGMa1o",
  "key37": "257CXkxahL6tQzQmX6ATJhTwdRSGrquNcAKv3MeQZEb1G6ApKbEU187xr6DwRXvToB7RxPgJGJVueEXnifiuwA2y",
  "key38": "4bMKXt3GtkVrcthNkyhhLMArNFKpMb6GzX3tCC5HFt85dvURCEvCRJyhN4WAEYyrFhA37Vc4hVwFJP94rfGCm5ZD"
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
