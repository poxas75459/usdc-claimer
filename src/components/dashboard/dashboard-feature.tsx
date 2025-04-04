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
    "SMHaySEjUbCxtAhwQrG3Bbojt5aVjcpsuHbNYm7BMRBg4WnA6NvARVWNKTiQVfa3UKTjGbU6pz9FsCLozsL2DkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3paRrW1UtS94yJxP7MSvZSwwhQ8EDrdNBQcd9AtpG7khhdPcYNrGc8EvTQ4sQi5hgsg1h5GMhRXjh3hBrm2Cj8mR",
  "key1": "2bXP1FYtms6tvQW6WVZXqHd5mKHvcXjSkEmEwUxPpgDdZvFs6ZAozuaTiUa6FjRpRXQwRtKg2BNLjMLiHuk1LCRk",
  "key2": "279riKsH3xNrpvQ8Av5nRn2RxtE5sx2h7NnXYRaXHCkxYoRUhL6Y2gefRumtFN5ZAYiMNCfSu8nKwYdntqLkRXzX",
  "key3": "663HmJ12BR49FS1L9DQvwgvw2Nukq6xXqagAV394ccgCNpk3c6VNJC1F8jfYB6P4MDrip3cBNKZoyaE3gwHGNBPy",
  "key4": "5BPob9sEH1HX6GCKK2bYmyFAomDvFGak6fe5GphjUMwGtrV9MLQcNtoUNzDV9dh26nn6XHaahzHGayjLTXQHFRaW",
  "key5": "5rfBiHVvGn5kju1ALX8fdo1titctkcZKYhSBCY5eWy8NGkY4N27GSGHfCSNhMmRREKN6gyx6AvF5kBvy35Mb6Sxy",
  "key6": "4k8RnyQv3Jj3Qo7qMEEUJfHXezE5DNoXJVCqTe3vVLpbQ1E6xkWj3iPQTF9LS8HnxwyG2EbPdcq9cdmEcGYMXYLS",
  "key7": "4UijKWAo5fR96aWLJv6cfqT7Dw4bUddQ7Httw7p5e4gRaMTcYWDBxo21QpgwhHJUPyEeNRrjqVmBRisT7Yb3ANTG",
  "key8": "3qWPzihawwKqtsFQNv3Uv4sEfTFNE8iEKWtjDqabQmf2QfzUTuvCEDmykhptfnW9t3N9Z3DSQGt6iPCXCq9CPpUP",
  "key9": "wtYK2tRvMxfCf9PphcuqupuJzje7vDNCzRgxLJ85MVCNB4NEce6xeE6UtT8qnhQVTqXQmN4d8hFhhxxswJQo9J4",
  "key10": "5JALXEw1tahTycnixGYdEPchvHRM98HyPj5FJGoYcmBk316vjtb8K6ZLCWnK1BXCeVG2RoSAJ9HZHhcZF7u2xkYc",
  "key11": "3t4AwAwDGGX3FanZbvMLXe2oiHvx6PEmjcTLi5JzaJ6fvbZo8jUYjzZXhnpvcnkXMhupeeMMYXz2crrEky16f8Wh",
  "key12": "dbF2tt7kGKxHt98NYAzFDqzQD5iNb7WkTSau97MoRhKX4Zg3bJtPwCGKoCwScnMvPJ8cLFxxAUAWNbr9GAxsrPq",
  "key13": "WJFRwKnuZru9jKyXUj1yi3FRgnUiYnDuzinxjhCVPXpp3fYJAgVTamgS82o2ZqKCzmXsXmUTGjupiDrLzxtLPwR",
  "key14": "4CNLeuf93PU2XQCAiuM9jsL8ZNSxiPriizgrvAF62ZzJod7MiMgCi3MinZhTLfkofbavENddD9E8ZMp3Bejhm6YU",
  "key15": "4iH7RTJpMjjLsJDdDTkWqjLXTBcqvkQZXLjDQNEzW1YJ3hy2GKGrYRaourTwoMmqm4iM4PHDV2sY9FNwHtb4VU75",
  "key16": "m4P2xQvJzQjHEpF6HXyKCy73B667invfnWberkvMDM43qCsP8CiFMs9MUjquB8uDSuH1XrTSRVERysytK4cRRZN",
  "key17": "42Srh71vU2nCYfqDNJXuQArZhxsdxJEbh7audCWmE4RqFJfhbbYEao4R7c8dtYqFjDFpibGXKmxLS2juyajgTyfq",
  "key18": "2njtzdGyNYBuNyEHfYfdBiWZ6vvKf9tbgSCVwaadHQ3D3hxtBXc89WYbSZPFF8rStTZh68d3Y3zFV3uHD9m8WpkS",
  "key19": "Fju3BZAAt3HZqXdQcCxF3RngoowFYHBByhSponYGxyhBdhr4BKYsWPZZpiBimMUmREwNsJmTmuzvLy9xvXuqVgU",
  "key20": "5HjKxGLoX39Ye8iKmErRLWRr5Y5HtHQimDck1PWLP6BiRQpdGNtRcWpqZ7nXoE4metLhCekuik2GT2T9JzCxceFu",
  "key21": "4gnEinYohAVQScCacyypxBPZwqvyrZXBYtXBX7wo6viT86NwnGc8cXwF3tL5iVPhaTmzcWqYrLM15THa3uSmMrvq",
  "key22": "VXeK2htWXSVmxFhz9ZfTkCthkSNKtuFpWtBuzcoWmbPDCt1m2idt89rJRh76FpLkxvJVrfbkSG2XS5XeKo4hY2s",
  "key23": "4LAhXe8VN8PzYbUkTzpdt8vyf9p5E9CRcUobmPnhkVAMcY3kBSBqUhm9cp9dcxNjgey8wUbqbTiBuVp7VSJ8HBPU",
  "key24": "2eSapdDU48XLo38ybyMduc16a73WvU4UaHbiJB3ZBi3sdEQpi1gd8nCn9TqW5Rgs4gnx6CZmXkRBm3oxsXQetwAj",
  "key25": "2dRNNpFaZhK9F17xaSKjEbqPuQyTWumd8hdu4GUXQkmL26YBkro18m4VnBXotY2PwKWbaEyamgGJQ5o2xZhH4b86",
  "key26": "4PdB5JwtkS3eQjFqMbGW9jixKxa7e1Bn4rsugfXJQXA8yzHeGQYs6CuST8bFU3QaU7X6jUgCWpRv72mKiemJ7oyq",
  "key27": "5tjV5cTSfDbD6qUWX2ihtWGPpVNY2YNKfJPkDp7jdq7DCaMiHsA9Jqo7d58nXAyM8fCpPAu1ZFWxs69RK91Xnw7z",
  "key28": "3qtoLRq4pL8CxBniv2kKfQzrAjQbip7X7Le8stqMUdCQL6kBmKSdpvyLRXrgccNgEHhbus4M2fEvEo19HT5gA9Nh",
  "key29": "2HZGLoC1hEdkhM3WS4CSv3yjwNa1NvrSfBnypnKqfKy8j6xDshx3F9c6RYow4t4gXydBkNSrJpC3CG4rmPhnvq6f",
  "key30": "5fxUAt1F2v7SMPHzASkPPvFS8AhgbWYMLazfkrMLVXCMh3E1C8c7UqDpgJqDbeLHGVTN4rPKYwwkgHA74oUGPZnT",
  "key31": "qwYTqHFsrT8Wec3pSR4FT5ymZok2ThwPfanPRKBAgqkvGGcmerRT8xtNFe38QzNvc11Z3hnjB9ApnLAmG1AMszP",
  "key32": "2G8vfK5mkW8d3czkSzVdF8du3faRQQyzzxsCAa4ENSeuZN7txNSEaobXuYEWYTX7nNK1Cm6o5gKRtLrsEffxdrjC",
  "key33": "ySzvPVXoS3sxrFJfdrHEeHE1SUChqgzXrrycLaUCEqKEw24isy3inS61wfScXG1rNh4bYaLwDuaU6c7JHMf386V",
  "key34": "5wgKZ6vqzqDQX5SBYrk2NrC5jnZtUfjuYkxeiXBn8LDLvjUKVzzsmAvFY7EJiHBoUxrFiggoaEyj142PVAifQvzq",
  "key35": "REtXKQhAWGFutY2UFPFN4kfH8aG2QumnXqwS9KUjuoEDK2YwD9sJHWrmAyDk4TecWeY9wsPqMDPu7ooezDfBapZ",
  "key36": "5pgw9BYw7rJFHXrhBLPYzrds6jXzyvnu8LwWf9smhLHqmfvwdWZrTZyKbXeF8MRFqbwVX2CnKMYvLJ1u9sMu3BEd",
  "key37": "oy19KXbdzreALPVW4UtzUkcDggjMaoMPCGoGWbuPCSh6F1536dsJSZe8ywpGsorXAruhNSW33i76N2T3j4HegYg",
  "key38": "5T1bDqqvQvxcgmpR3H8Xo2JwEsweL7XhgLgnVyqySR2m2i34j9wGmbBcwZC4t84ZRuQMxyGiFCbt8b43L1F5iZZs",
  "key39": "4pbQGdV9EkYwbQkcv8r3kVDPAgbPiTZvtN5RqvGYzQzhq5pmUnmCLddjn38B9rasQXjNybqUawFfLA5pmRonuwAh",
  "key40": "5UjdFxWvSKgcGWzELGuLUZjyF48j2J7DD1jcxqhZ42Zz4d6MHnsLRihR3vodNuyycK21wtVR1PKUyYSyeeXm6T3n",
  "key41": "5pYwDPtM1JnbkUXbf25rZd65mNSCStVh8pY4RPLCXmJjmVnfnuRrGVqQ3hFHsH5sNQT6z2yRbZhvUhxZkNqHc5yS",
  "key42": "2zcWRbwYUHTjmSBbaHwsCGmCNzXbx7uGigNDyUpWtHWsvUZprhAKmmsR8DvqE4SwuZbFShiaEHpKKeZo2HKjC82P",
  "key43": "5SZu4heVry3Vnt8cHuCdfAXmN3aTACZSwox2Q9cHvKBJQf5FUaJrUpvRdfgDgKcdFBz5jvmfF2sBkRP4vbbs9g5m",
  "key44": "2LqUeAkS52GJgYXRKJnVfaZkHrNCpq6pQ18gkPhmk9nbQ6hirATmnjUYg2BbJNKsi4dfDjKawQTHn41nHuxtEXjR",
  "key45": "3QDYm7D7Y6T28k3bbQsP7QDZBwbKWGAmXihSABox5UgEMfpusoFT2N4WuHF2UsYhGgHGTpYREAoy4xoiwSjjwCqp",
  "key46": "4wHdGDHHfkAxU5V6aFwLVN9V6cDfKntqMPPsfuNReMVj7WQSrXwqpMUyh1zePb2qvkyhAn353PPFSjz2zjEcNmAf",
  "key47": "2JaExJKsHFqjXE8jfZVCuyr7pD5MhDeeuAcfwu3sNCWT9YX94W2jW9hBhm6e4LhVek5JDWETZpHwV7H2AdYMyUug",
  "key48": "n1JmMfgXdacurAwLRtbJk3UaUDRcpVHykyfvy1zJyPgCc8MT2BCf9CHMVUd6e8PMgepGmSxT7PXZY2iXpYLvkYC",
  "key49": "5J2oFCX1HJVwy28zXoWm9M1Wg6jMaPM4NmiN5QeGSShomH4dgfPDn5Dd8NiFTnGDam2Vesos11HUV5SWtizif3Ps"
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
