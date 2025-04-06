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
    "5xN25RNePRS9f59xSCiGjbKnjtnZCwZegFA2o8J48i5wjpFRgYPfKqcKpz6ALiuqEXYSgWeEUty29n3K6Go8QHPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N4ZSqVHhKhwueNYzVSn4t6Dmv9QukrGjKJ1ajrLy19PZxmECCBa98v7SimHFYjrV4utjrYAzTzhb7Xdi3yhAgSq",
  "key1": "34bf7aCtsV5J3KAow8Sxv4wqSyyZeTRKbUNznUvssvDYSjDQ5xR4kNEaHr6Dge587ZUtZV8DSKd5xwuQtj26V9an",
  "key2": "TsgL9DDSZGLJvAj7GRRg5vfiJ1qJZyDBsKoWgRmddpzzVuVsjkjzysvd6NCrf5J67M12LDLo3PrWfmvh6r1ZShS",
  "key3": "2v3ZLcbH8WVQEkRGU9eHpXijqCMzQWZBguqBVHEsEcVebLWyUeBfgRFgqxxvDuH38yBDhStfUyGEBzGu7prMchGX",
  "key4": "5afh4a66enH7ywQDbRWUdA4cMUvgrDaLhStSaFvNN1cZZaZrAKTVvphtLouNyCFwEbSiiG3XUcn3wDggTQgkWGQa",
  "key5": "5jDUco58C1vRiyruoWedvFoPsxtkhakJjKPQWcHaxQrpziAbkzt41etN7vEJA1JUce1bNWJVfQJmbLz1iKaC84kG",
  "key6": "3n2A7YDhZZs7d5uJVeZtdBktBb8FDbVW6yVPNjwCFcrKVnVwyzDZ8XSMvANj6GL6sjFYmVKAeb5WehWcdihMUWnY",
  "key7": "2tCiBZNa4C8i2hYqndzsELQ5BuKLSVNwFjGeybuXBmxsQMprkAyo9rjh9Gsr279bbkM4ZsBPUiYev3NG52i5qGKB",
  "key8": "BT2mZFAnZ8w3yeasXsHmbZh8PYA9tGA8G2KiTf4ggvE1cc9vpbdYERxcFUxZ9TssjY4BgNSgk3UM56DFBKKZZ1L",
  "key9": "2eTE9GF1ZjC7Y6XUYV9iA4ELaw7joP7DT2yAo7rW8pTMj4eFKYM8Smn5Kf4fCt841uxUMTwLG2Sw296qyUe9221Z",
  "key10": "2gqg6vxioSetxJUYbW1VFeY83gKYCKfy1gV4L8qWBUHLmUtGaKRGPpz6n4Y4CfEaYxZt6tBjH1ncgQybCaBhQQ4k",
  "key11": "4GBfTter31F5UdtDH4Q7SdRKziumrhkf92cZpaMEwrxPA6xwFttwmQwx6qBCZuPryQNuDouErNTS2sfPoSCX8Zh2",
  "key12": "JR6s24wWJhVRNBsiiQLu4iChaiwrZNqCcnXyK3iScyFVKjK3TpJxsHqu3zV385zU1Lb44CBupsupXukzQQ8ySQ2",
  "key13": "5V41rN9P6KqFS2xV5ei7oBCkixPo2r1DQftCcn4SZ85gtBtLKieE3qarVRSoS65W7QLph8sEVGFcReeztHm7qVDo",
  "key14": "4CNiix9A7ScHvGBF58LWg4xU77uwPYQf5Y8HBfoDpbuyc9MMhbu3zBEq114LDSiwFmASUn7d32m8kJmHyS7UND9L",
  "key15": "uud5zqmJXhf9nfive8B4N5WRKHGKpRztMHuRaCzWNVoqNknpNLGYM61hpSYGkmTyAx8KZCPfbFKmvuHHpvyecxS",
  "key16": "4k6EHL6jDYQjdzdZVCvhNdbrzkHEunPryQJ4ZJrany8NoZk5M85yKqN1h2uP81UajM1hedd9ffBXxEK2CUWdes7V",
  "key17": "4ZSrbBinQ3TSR8FyhSKXV3B7q3mefY9APUX2YWFu29hm6pW52yxAY9kDTnbGbpYmPwJdW8LzyjB8cDj8Z6rzUSBE",
  "key18": "5u4bzsdnhsNiurAc88vz2cssVNwF668d9JE913PuWHDbsvDpshjxV8GSTQCSPgYSAVkHVe2uTxxxivK4DjxuWB8X",
  "key19": "5Adnta6ZejCGktzUizP77LNEAXfVtLW76RHtUQGcSVYKGPVb85nBHA9pZiqyG3nnSefvX51Q8tC7oJXuFnrDVe2p",
  "key20": "32yKmRhiFd7XZvxten3wGFeMZZnZxDcgC3FTmkLNfDWV4ufUGzpv1Ha7F6kuC6ffiGrqNV6RuCaioS83h5pbTGvX",
  "key21": "3ZwxML6zEj9Ys1hwSDT93qFxsUFEqvCQCSHkPn8F3moB7V5C99UfFVQwLB59gqeANE3cujJ31zK6kte7mNqunz8f",
  "key22": "4yEfV1RVM8MCFiuEDo1sUKqeJaF54KH9YWWzq4ZJZCfPfEMrfhJyaaJCRc79NzKPrFRY6HD4z9s4eMW65bmT7HLK",
  "key23": "3T8HLvtiTcJZZ6L77Nnw8ZsTt9iTzizTVCjo4P5RXLogXwj5WdCEGrgGodQwHRw1ZHMnCnvojtYoXHtfrHMt88aS",
  "key24": "2QBJsFyZqEcX7KwxowLqu259igmygznycLc1gCoWYkb7TGjWhmkfPPRCcMkixQsNvUC5iVUZu2fbg2J25WJBGjW",
  "key25": "33ym5j1f28T3UWvYU6ZC7JGSrLgeCbWvki7mQdrE7byt5XeJaCDuuLVD7h7W6e7FzbaycUhqLb8JzS1zJu7TqTKg",
  "key26": "4kd57JYXKvQttSFvo4p1bS6nx4MbF7gnpU9czA8BfcqhXdUPq124oTPSFVQq1Vcx4Z5TcxTpq3nz8DzWJ8kyceGd",
  "key27": "3ghHrSk7LCTasuYQuM52RF2uwbY1CsdT65SFENdQpDfzkCgLMYkgZpmV9TiiU3oJEJHryHcEAQabEgAGjP1nDZwn",
  "key28": "4bjffVmW6E2UAR2azahqrk6frVAftHSZuScSHbBkK55v3ALNHYSV8Zhgwr88xaLuMYRZUA2oZkJUu7eWzYusAoZA",
  "key29": "2D2GbGHKR2zTgSg2EPb8u2mWp4LEgEjL7iC7eB3KU1KGYcpnt7eS6dxWNfCHBqGahWQzKSmUo1k9n4SWCw4EkP2k",
  "key30": "46V88pC8Cho6faPYMUNebQiHWtcfPQW7aJhaokL3Gg8fuSAY9UbwLgPe2QftpEC3rfq5Ni2QVUPQVtiuaCzoXhv5",
  "key31": "2BUUyoXL8PqQjLFFspmRYkvPwSmRkHYNsYj16rYoEcQEeeEEMKyLygudeieqs27Nj4ieS4pqQ5TfNndfF1iRCGC6",
  "key32": "VGh4WPsNQ59UoijZ83VRJjQ5KoBjzWxqvtPi6CTokh3eAfBfg6grSoStoHsB3bVqTph82hsh8KVXyFTUU4Bybgi",
  "key33": "W43DD9qHGZjkDVC2GUxwsmQpMngs7PEdSLQQq6kjDLwA7aEQT61X55PBhP5Bz5DLexp8dQACSRtRoFso46afLSe",
  "key34": "5MQ3hbckNqHzyaYyiGVM7af5R3hJVboJm8towLyqZCWnxf19B36hLHszj9ATmcYFSAUQvX2HRKfGjy22dN9FGqGg",
  "key35": "vRurgoC3KGgaQiDYZ3XoKpWxZBT2krWM8pGeyxrot3UQJwTc9FgCTXGGX937JhhqvBRfJ3u5AvoDmV6YzLL4gTx",
  "key36": "5YMCSUcwNx3ofJsHFYv7Sw99ZLqVdEeogpi5cyBaZPrYhUpi7e5a4VZuUX1NmnpNsTokPMYbpL44qhWAnazaMDnt",
  "key37": "3BPyt68M2VG1rPn55MHTckkEwgGweFb7s9oY2K2g94qdFxbDUKTmbmJKVUNz8spMexJyNHGcbYczCL26ijA9MmV1",
  "key38": "5L98yR4MtVSWZcKeJXJrAxX28C6dg7Mc2gbdzyZLCnHhwgPboQAbaQ9qcNSoC7cySBWnjqF84aEn37CucZrkYo5",
  "key39": "2pCUyhdrcsB7m57nVAQ5ajfowiLFo6etKgXqeffUS1UmoqPZNja7itnfupHs34Jdue6b97bNXLzGeK3KLfM7re6T",
  "key40": "4V4NYbcoayZ18EEZWChv5rysUa3CpGQK2KU7F3ewc3Km9kdavupGMUZ66G6UBsqH5ZEvAKMcomJHaE22cgim6WEx",
  "key41": "4f8zAEYqVQJPrDWbwRJD5beWDJfuDRLWEmKaQkgvg1Zn5GYdZTPjWPWjCRVPDz5WdTYe4UQ6NgCtezePLwyS966i",
  "key42": "4CZwQLdrSawCf51NmS9PfY84ngcYy6hwP2TZ3w85ff1mG9quDvEDTCDAhgMi3xg5gJ5gXxAnwUxuri7ag9a4t67a",
  "key43": "56NSCUg1WW6e8hTwykt7ViXYoKKbZfGhEsMqejDH6NPGjF9LUXJzNfzWCxtxjWZH5PJwXU9iWvpmKZAmYzBZSyYs",
  "key44": "34DRyZCv45ETwo9HD5ztsRSyc2NATYh6KDoxp4uEv3v1aZ7HkBrWmhXprRQKdPgMH7ah24gHzcTccKXVmudjmX3Y",
  "key45": "3McQNBCQD1Krk4qckxSfeWXUQnGxcsctiX6TcB3e136g7ACJ4DMguiYHRQ2SeYvN8sLerrS7WkaTbDyqVc84BTCS"
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
