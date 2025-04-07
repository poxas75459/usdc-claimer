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
    "5p7yXMedLbrK686PRw3uwc8oxfU7QFxzmJ2Cc2UtxxaAZUCWRUohK6UTyizsdnRUhmV8VZEvar2Bmucy4eMnmbbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YckGbSaYD9DGk7ucAqw1EqLYEXbqGYF7SGRmmBN1Qd3p7bQwS6J31wsqyTL8BStmW3oU5DkndJ6p3cMGyk1FxNc",
  "key1": "4kG4oMCSJkJqBNjqiyHMuhXZ4gW1jyGsk1W1kM6Rgy4aMixDi8gbnkLdNjX9QXhhKAaUYWHwkZUk3rK3gQJc9zqt",
  "key2": "2zVU3rsTCWQ5XY3d1MCGkd1MgXJkGJeABJmWQmXdejnT5DTLyLCtMHu5VnkUn14tXWsroYe9JMf77mxA2pRgkhJe",
  "key3": "5EMTmu61rR5SPm8KvqdgRZ77r4nY4b4GWC4eB2iBkNA2h7qsVLARnNxdWcdmTim8mKZUNHSEShXWRVxSYjGsP4e8",
  "key4": "ThbGoym8Nxhso98GBgDBjyr7Be564t8xTqSfmbVrLNHcmPc823RdpdidLAXtZ3wM7FnfQgSzgX5SDu965QZ49oG",
  "key5": "22wLzR6zNB8nKyJuVmdLQJXdboo5etuUyQF9gknadgSZVTyhYDP1DzK9FbLzxPq5xCwHRs75MFGyDQHftADUqAiu",
  "key6": "4Q8ctQdw1KtqaNcAGQLHSf89jN3CvByp5cadwZUogeEWYW14bAcvasjagTSU5Sg533wH7LheMQd244oTPUAjiaAr",
  "key7": "5aZjjiNYeSNojj2sPhTW3bar8UURjov6tngvoq5QcdkJVKuT4m7J2e5nXqjPHwYTeoKmB6mQdYPq2ncJoE8nGhMT",
  "key8": "UEuN7gxuodpcFsLTSc7ayvucBADwQSTJCjvzJckH9pEz96a2AuQk81tMi5RQczLPr1EwH7tKYhyC8Dy37wdQUVF",
  "key9": "4wwMWCcBCBLsJDMrXt1H1Vu842cfkoFHARRhnkUPytvbBZpufG5edww9xSYS7Z7BuuvV7pdjxEMC8iHrEUGq7R6x",
  "key10": "TfV3auFUkKBz8aEakJ5RqakmKJBtzdwrk7UEmvVHKi82MdV5MxxYxQLWF9qg7RsGLsfDTH8UxTcjkF27pG1MDVC",
  "key11": "2hE5zVEmmaLndvKwcAzSmsXB6dSEUUTQAvGWLZRrzGWgNtemKB9UA4X3PyKfKwVhLiqtaCGFDNjdU6M89GmLV34A",
  "key12": "2qF4ZU6mRr61GrnXANUh4uoTrHj7D1WGX1tVXcSHomvoNn2Uym9ZkRrZXuxRMWbjJ7ByjtnUiRAkuQcieiqhU7h3",
  "key13": "2ytQLW36rSYcSmDinViwKXYatYtDFvw6D3Z8k6Wdtc8WdpKD16gsPr8mQBPoYthFHu5ENdomhdbqVNKE4Y3PDrCK",
  "key14": "SX4nZTdAZp3vgDCA9fezMC7PpndmDMnGhRMFgPUY9rFSyd8hpiGuzunoHackRb4qoXDoEGy8vh7SxK66fAqN37M",
  "key15": "56CPxmmwKYXLChWCev8YT8JeY8vAbvmQJuhaBVJVniQS18UWAkcekTguq2dbKPrGuhm3oERpnSUbnNv8gBswXcuD",
  "key16": "3YDRf4tGDg1KL3Xr3WQc8jd8cYJsAnegjQumgfAcW7HXFgDh2y7sK1fsx7VGvgvUvAHQ31GGdhVP1uKuAAgC8q6J",
  "key17": "4GB6N4HNNeFZgfe9ZntihcevszYKvBU1Gbc236rk9tvTztdoSf9XSXKBcR5NQgUNw24N3gM3pYVbbrUx5SkBAspg",
  "key18": "2NSdLhShL1NKECGNvrJMHn1ipWbLrUwkSMEh8hyrNorFpCswYVAtcbTLirNis6aMTUhDUT6WfZT3poag8TgdCr1A",
  "key19": "52u3Rny6kL9CH1ufpU4P1qPdbstfpX6L3xAFQ5vrPY2KZxuxXXcAZ3a9Pr9rdyFLX6u4nfQzTEjAEqCswHf52hy8",
  "key20": "6vn5dgeGB6vVZKb5YjzNtGFBBa8SBXUC1tryD89Hc1ePfAMVSLBS4qKzdV8NCwBZE12HGdpvFNfVNAveeW2hM4a",
  "key21": "5JZfDJxvqtk9K42J8aw9LNhP6V2SYdrYwLg1yz3ojwCcueyqLUR3M1YEZjBGAf5qHAkcRux8Qf26mR3D8hWTDyPh",
  "key22": "3jmyNHhEpszzpka2G8pfEWQzCBJXEwvsqzuEbvj3dReeGRGKEcfFwR7vstr7uRBHNoQ2KRcYhAop7Co24JjKddCs",
  "key23": "4mJisjJ2dzZ1ndYAewwU9JodpyHXVKPw4bNLbN1bjuDTD9pf3Z1jBAbC43pdicR1D7YgEvfLr9EFbRwBmJtubwsp",
  "key24": "4nu9iq2s85r8Rv7EtaEVkYdxBm64FsAjeCLZNdQ6F9rUnNJNKTUxVW7sY2GhVHenWN6aKiS8s2jgvo6wNhMgHkAF",
  "key25": "4eBokcBBJheajwg7DtgD9KnkHzMkfrYDNsU5oUrwMwD6m8mWhADHpBEH3qnExaPoDqkFJpGMSxSzC9imWKgKkYT5",
  "key26": "5ZUGr9fG544MEtYJQRtfnfX9kAMAEhdBYVFCCqtzexKkUzfAXSWJ7s94dFFNiYgKt8FHey526gXntyVo2K3tWVRF",
  "key27": "3xr1BdMeji6AmG3chBwZDt4iB9YwJVN7Zebe2aYNu3XNWdZvhh5UG5bBoXJKu3CcGnitYSjGX9TB6FbcGtDCaTis",
  "key28": "4Bw2WdimTG1h2XJCaojBqdxTutnoEjEegzeCRDgrRWAZfX5yt7WgCELNAQYgKrc8Vjdeuoe2yUCNGC2eYAYLcti5",
  "key29": "61WnsvwgSsR3sGw7b23TVnEa7raoj1WkfmxgpyxSwSjmkGEKdXiccDzWaXr1QmDpmKYNBHvMvzZCiybvoKyqZujh",
  "key30": "2pDrxKAZTnwm7rXacTEufXnLA5YyymWDVsXYHSwE4JNAMfHMSGYT7jNGgcRV8wkBqbNpFjUhp2xbPX72N9cTTehE",
  "key31": "4SsigLvkB4QGPda7SNJecEeaS9JrHk7wyqGX8GbU1EBFMPkLiBCMroEqK5ovJJJPbBdb21xFeTV1UCWfqUvT251N",
  "key32": "4McyhRVDBnf4XMQPAUL7MtjzmmPRqYqVr5KFvtMhodD1EqNtfK3sAg4KrBBv2nJ8nFyryTUK9U7hQjJYdQatUhpM",
  "key33": "5CY46YSv1Pw1QzCzysgaE3qU14iz42mKhQQGDVs2XFoBK7iLZk7pQzXgMd7rH6UWsVUzKyN6A8ky6jfcafjUGWtX",
  "key34": "4Xgmc7UWRXYy9Y782JSDRmteTpbW7Ufk65qwjH4JfEeh8uxhtKv6WzXvs5at7J3HwZjA9pW2JXRYgKSnzt4fNiUz",
  "key35": "5ko3myyEFGvyjTVhe7URrtRS4tqTKbSKc4BKGf3quy9MA89HC4ytR1vAVGqavQV9gwfjk6gCsYf5NEGicguh3MX4",
  "key36": "U9nLKBTjcuTFG3eWjv6KaGrBYNAqzuGi8Xrpu13xh9vrQxztD9tMCDiaoaJrbe8LqgZybrbNZTH2soC9BuCfQxB",
  "key37": "3nZavKWBoyWaZeMKrLvBKqMfSjKbuVMueewrXHpDCQ7fPqkDikttinMSNLdZe81zWsqdL4fDjjbLggAAZGLsRiMP",
  "key38": "4LQ3hUEoeeiEsAgZcgJjdQMGjoMZXML9bp77xfnchA5aD47GsvwgCbS6dzsU2r6Eac2iHhGbj5vCqTrXkQbM13Dy",
  "key39": "4z5uQTnfZsjQKZBX4HkNakMbkYaGY1zudHuzsVt5YBSRYfsxQNF2gUvUuAnEc4X87ESqKrbpswEvZuKBiSyipmtW",
  "key40": "33qyhMQfEPugszYG4BXrdsupa4zxidhvjFVwAtPSowPh28hLLZquvpJxLe1DjWtR3Tp1T9Rbg5xkEqaKkdL4ptfH",
  "key41": "5KYnbF6L9VbQuR2eYGA52eeSG68E37qe4q5Q9tx4tETACkJa4kW365MzCyo16ytWwY8qxY7TsUoN84XDeSznZdi8",
  "key42": "4yCM1wejXYMgS8wVRZU7jHe2eBRhVBgjmNwvBbdf69MkLhGnMz2vGpCen2SKrFjr7YMuxyVCfrinaK6PXrs4oLz2",
  "key43": "5WrWMbb5hyiSE9fETDzKQfTwBirkbL8NMnRuGjdaUqJjJewvyyyFyJY22pa4o8Byhqh5JZcQV6grjQLkBd3Kp7ma",
  "key44": "5Eehro9xw1eFR1i4eR5q8AZdL8oFQL6e9pseU23M6QH1zjpsbGczrem5HtsoqLLr7hrdsymiNFfTW516N7jdSXht",
  "key45": "wjoB7b7hQzs1X5SRu3m8Xo7pgK19sZm1Av7acTZSo8jhkX6TQDQPdiNFX5Tas2duAYhWL5vkuvXhR4cioUzCs4H",
  "key46": "3PyRqKpb6GbpmRs5VPecXHPqACEsxLmw3yLnYkZfwRGcoVHzTc5WVSLBarbp535Ehhm3V9TRQGbjMqV1rHjHgnKh",
  "key47": "3u3L5NpqgZEUdvVHLPbHJdfC2GSa1bifEY12rcHov85Qq96B8QyC13rArg8pq1Q75r8BWhqZP61RMxM9F4dN2hVV",
  "key48": "5JpN6SGnXX53aarjESeYKxfVXXgjc4qkh6YeLSvuzVCDnQup4nqfxnoZ1EhE4QwjFLi2wKS43Z2rBV2ohryN2hAF"
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
