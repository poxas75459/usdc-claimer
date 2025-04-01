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
    "49PKQo2Z6sBbqqJrTn5Vg7xGpLD6EceDMW66dWsi6oEncBYUmgjiKhMnwbmpKAuJkQTYabzNk1cRb5kgBMrwqLTr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jtNZp3hFRB87SVmJLtc3cUSid3moHw9ni2veyWgMmcXDmy3JDQxzWA6U57CkHHXpPZVavMzKGMLZVW27HjcVMVS",
  "key1": "4Dcv8hoRCFtbqNsoKGr3iT6nkN1hYyfYQt4mdBdAbi51nVFnMSkudDz77zKDY16TRjY7ALwkcEjBoaruwQjXkFwk",
  "key2": "288uL7wdBMDGwFETmTCTK6VbWpEbDUZjYighqMNGyPnEfZpxfDFEhFUa53aKiBfWoEQNqdjEhgRjFMEUNsHad5oM",
  "key3": "523EDciTkpiWt973KM5f77LZH8stLV16tVcfmAsoaEEHGnncPPXu1WUBR6rYwYvx4zDPTyftHax1jc145SrXuMmR",
  "key4": "4iDLsHUtUvU5h6og7b2hE93cNmS6PRWCXm7qjhgc8q3wBbEeTbXi7d7iGh6oinb4fe3AcEpDN2apnuxCrPVujyKA",
  "key5": "o4SGHKAFLhQQXQEb6MAf84nk9wwbE5Uu9UNrcubxCpuCiXni7Rf64imhaHesiZvXTVTGQvjLDFaf7AEcC5DbakW",
  "key6": "QdjFYYwxf3xkyk3waS27SoBkerS8HmminQvMi8HuzvQBjonE13uaS7WrNxP2RBnpx6PeCrdSFBHG8jxhKPpnoE9",
  "key7": "5GkM8q3mnGTARnk4MuziBNejqY2uwhFWx535sNPsFGwKJ7MvYnJ2UqkAnskpfqMtaCX1sxV9QMSPDacfciMkk88c",
  "key8": "tGnnVZCZuPWtPnHrYaumiwCyWxhxFnxfR5f6DrSLwWgHx5aWgzee4XS5UoGPnC38Tf6vw8gbqG52jswPn6cLa3K",
  "key9": "2xd3CX1rHsit5a4XwnK2zgPFNdwgcFhBD8Dm3vgyrudAu2WDhnrbyniqfaqzYgjgidm8x9xxXtqGNtFKRep5QjsX",
  "key10": "bfwq8muhsYsRgEyf5G5JbqekSPNGof5kgJwf8MGdwLyoDjvRap1LEG4XuekkHCbfv5ytnfVB8jMJ1aWcTKiSNPx",
  "key11": "43kPWfVNqVFTYy8YBYuUvfPjHwDpPEnyWoiuebijApkQkKfWuW7Bc9HrSgfrZDy7iK7FZJVsNmDVDF9YD88oUwnb",
  "key12": "5q4HvBbfsgnw4wU1mcwjouNuhZuEMZaPqRjxRF8fZFMwirLM44r4aG7nuSDckPMaF7xbB9UHFyJdoyjeQTTNQJV5",
  "key13": "3waVuCwCfFhbW5wgHU4QgqbDPJDDQetSvk9XKpEe4wyMXbKbLSyFTtShR56t1PYpC5WVRmkMzX5iBABWbsYDa1xF",
  "key14": "4EAWvaT4YKRDzecBB683CZmDZhpszSfbeqJoTMuqZe3sW7FHmRW349bmgTb4VdhPRMaxjCcs2XakG4rkpJCkvJZB",
  "key15": "4NJQ7vgpWSx8qfimB42uzHadzLpQgdEx5tt72KaDjCDXnwyWnkFKgj9ttBiWbFupxt8xhAdfrCjT1i2x8TdgCtWx",
  "key16": "4ugbWDN2eddAk6M5rvHvV6v6SoKUhx9vMrusHsi5QDyVthuijptJjjBaLaqUz7GJw1e2bxPwDoSuNjfQU9oiho3c",
  "key17": "d7GpX9Ue28PbBHgRsZiz7CoSvHiTosjnpE3j9NRwnbtwiwX3EdrAbXoX2srhP4SXUddp7e8Q3rdu5ojcGm2hUzC",
  "key18": "2duLbWUcpReKJSxQQfrvPbi1e2HBajA9CJqHfFJjheLkh27FH85vb2taaM4QAEYn7CAhHmS1ErWiBjnnZLjxD28a",
  "key19": "fqYrYgqMncYvXD63yt1xCMKTUQuxWLaCmyumappswwCRy2FJyLGWqsmQHYQG44JvpNFExfpd2v7sNcoRXyoSzWG",
  "key20": "4EjqKP4b5HfE7nZmEdork35yTBudXP5vQ1NXvyEGz3p83c9qb1kDa64vo9UcT2qC5NmXq2hZxmBwaqQfKHQvgXcp",
  "key21": "466jVVY1KqnGdyewx1wpjBVQqHR7icHqCpeSXxdDKWYDwgU1PM2QHeUTWSJB1hcCkemVuo2nsvNsjDAv3PYTUE4A",
  "key22": "2HzwryEChjnQVGcMmqU7k7VfJG5gfdB56frZgd94e31KyNoTcNTNwbwMEemp7eaNED4759bFd1Z4mvM6jxp4bN9y",
  "key23": "4iT9rcucDqf1pe3H1n51A8FujHrPcjNgYCoMXg9km9ThhVgJrtuptD68Cq4Qz56iSt12X6nqhvVB9rvNZAETvzk1",
  "key24": "4hRS9YV2qfk9aCBrvHrNPYoAkmQzRPSPt6a9EHgGztLHsVhKnxDq2Be1Pz3A864FRMAy2jpVAgP42KoxGLhwwSJY",
  "key25": "3Sr6cpQP5tHuaf5NPMeKLfTNKCfHe7eqXXRmZP2angkrRrpZ2H1wikYTz8U3wwQzrKgyKcdJQcchfQzMBgH7TEh",
  "key26": "zQmDy8kseqJ5JLDJJt6e4jnQhc7wdpuQk8S4MSJpZAj5zqeTpdefpcohc1dtFP3zYxN62WVqBSjyJ9sS3mN6dux",
  "key27": "UGc5ZdJYPqgzWPbTrYfgji93Wb9JuMg6mxQwWzNSqGfdNNwCebwd9ZZk6JN6Hy7igzSRceQZTe2Hy9wxDU6mZqt",
  "key28": "35BJ2jwr2ju8FDccqWjP6vBhHW7MtXMtzVATZwYeqGPpFgNFCofBS2cwrQUkb55WZnpvsz62AeXGS5bcaxofn11E",
  "key29": "5rRTqi89XBqSBmHUhqGzwAKcW5uyFKBQFccYGEKhh3vbMBpNaYxAtNBqGoxL9PCthRb9GtKMDxz4UfDqqcg62czN",
  "key30": "YNPhBkh63UqoRVvXSVLnHWqsadjJAzRGQMZRT4VB9vgxdsRKix2ovcrjNM8kVL19UCLebu3CdfF88z8TZ5rbSfP",
  "key31": "3DgrYuXXHAfMFPkrWmW3Ba1HixgVy5ELhDZRGM9RynHkKHCdQyLCkWQ5y9KpoiFrABhRw8RWn6TsCeeyaofWMu63",
  "key32": "5qiJZTcWWwUcpwfj51DwjmYzQCf1sDJZLCunhcUc8pW1idpS3QC2o3EoPyMkNHsXCUfABsBQq3UbkoAw1VpZXgDp",
  "key33": "JqKy5VRoqs9hJYrSqjrCvR1gq1uteuwYCwqGqcF1i5sZLs6LS4pBgFcJQCWNKirmyaQFNRrZQZ1YBhpN1zSwLwR",
  "key34": "4t7t1nPKMNRQL5nxsVfTS4cmQzGwRawUQoiNkGh5N7hpssERkyemKQquTwv7x5ASGyRZCc3iW6bTE8KD7njQJuQS",
  "key35": "2uf9kXLJLLJfV6dWuaTvoB68NWARuWh9JJZGxm2Yf7q4Qjr42x1mLd45JdXsQxwYv7cFygo6Kbwd9nLb4zZhHjDy",
  "key36": "bHRDTzRC779uadDd8VSw3f89evEwC4D2fYzhfePHYtm6RDYRMC7R1aHxcmbiZ59AXc55SZMyKGBYqwxFG4xVQff",
  "key37": "4bWu4sqhcbfikxJNEZKEm9TR36BMGJyzLiCiQEo8DRodK5rAHcbZHpc8ihqShsfgoBZjbLYF7YsU8gXGQAhnHf3M",
  "key38": "3737JDecj4PkRuPhXvbTGMsD5xK5XNzdE4Ex5Mfo9GQ7ZPL9VuBth3NMQmv1GNBPH68qPN2cnshLwnVkWeHuP8J5",
  "key39": "2SCShQZTjYdJABKt2ydoKGgd231S2E8gsGEEpJy5rUosGqTwF9tiefkK8t73ZRxJ7XJUULL8KHPyGP1MDtQFxh8o",
  "key40": "55MKpS48n5BbZLXf2oZeyZzaD2pmxkPBtXyzydqPLiLJu5Duvx96VcG2Cs7nDU6EprwHHLxgJyNPrm7cQnjQeGAC",
  "key41": "Xy93fF7dKSubKBHSkocKa7T8GoQSSkun24JQBfrHvre6X6qjBuHt9DC8gcTza2H8u1tEAMXxgDJPMkR9nj36XBs",
  "key42": "xSvtq7yZreKPrd1673rXs3RpAXmf9wJkqMsWAJ39tU4UwAU1kPGvLgbFzSaTV1Vzc2NwJ46u5ECJJipmJKoHK6k",
  "key43": "3tiQtML1dhP8VE2u7VSXzHK3exgDUr1DPizWzpgCSKBESurybNQipeb9FrY48ZcWkYzycS33oZ9nLXsHEqFtujge"
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
