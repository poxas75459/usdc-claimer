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
    "VUKonAVm1xv8w5fNS6QhK4PbfnPeeTqzmmyNKpe2MSk6ed64NJTi7TTogYzvuBToArEmF5C4tPaovNQmGcUvPkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ShpHTYzZsdsvkDZbUbgSKyX3F7rWSFRyGVLCW1VQU8LXnYmy6m7iYqpZKhs9h91SPNqViEEAvWdSV48hFEFFAtQ",
  "key1": "E7vaj2ChWg8y6mks9X2y8WeWZLZedcAjP3fo2ypbbhXxMsdx8KhagY1CRkZssNHt2RWZSMmf9iP8FUnHQN1UojL",
  "key2": "2y5Pt1gsoJjRxZmdgAaMVoJcG3CpmhBZVF3PgtCQHc5EHd7ywoGQNuTGWLgzsdHw2btraBwRrG2vm1rTRKdk77mt",
  "key3": "3d3eqGjxKxCjZga68dqhUzaQUMme3hyGvpi3WAn83WbJGJZJYNDhP4AdSZ1hgiH812E6EmFszdQrvj1J7gqAjcqT",
  "key4": "RjwoJ69LQuoq6ZY6SQB1Z8ePdybEtPCFiUUVZdxyf4rsTo2JDkPHfDzypmMjyujCybjkvwNiVmw3anS199M3Pa6",
  "key5": "4pE2XWGomYk9AMLE16hT51VwnzBj6LmF8sfjqzFwyP2xppS3yoMAFRX427KoRKwvQMPH3TQSUTS6LVyK6bgdpveX",
  "key6": "rJzAcEcGWAT4wKXKLEfLNLZZGGsDeGh9UraJ8tMuQNV9oXgJoKsbSujoPcTd5fJTRmpX7cuRcjaNkXbG6CfbskN",
  "key7": "4rNYyo5Pn35fY6FPmYeUK9HmE8hpn5wohuvPR258xUcCMNLodjUAzKKHzpyw8kQhubWiMY6QQsmZBE9NHHvnaNXf",
  "key8": "3SEESH7BB2HGaXQg5EYXfdBBmSMeCX6tT7AxTqaAN3JBHqmsjfyVwYFTZPeXfPzXifHQw353irGaU2rmqhjqu2Py",
  "key9": "6EF6JL8b1T19MuR3bMyAsAdzbZAYWmNpAkegLqvCghXkCXE1qs8My1KTBsugaQ6Vec4craQuUJhVMexzKmW5TPo",
  "key10": "4kq3Dd1N6Ed991WoRNNwMUjRKoSx8uD5bN9Ty42zB4uRg8CAtJLKFPkc5JN7cYDpNooHSyvip8WsyA7CNUtqRvqD",
  "key11": "4n5FzicSi2V6ZoNpUxauGDc2qtMsBrZhENQL1UEJncG9hv2aHuDJjxWeVM4nQzjZaHbdRSMgDiaavPUHxKK4XaS9",
  "key12": "wbUUxCVY4oPAthu5yfnLC6JVk1HJnt7TN1YN9G82PRZPagmwdMmwmjeyfZ5BuojjNoapu7wLBsZLCnijuY5ahJQ",
  "key13": "Dj6owhcfHZA599DBzRr4e8oXKzzhRjTsAL1jiPsnd3FfMxZc8CvJVKy7diwqbzeag8nQUReX15PtysTMHNWjdb1",
  "key14": "3cSD5XHv54HLUhfbMfEWp8Xpu2haagWUpnnRp1MPZwpZXzQWehvDszUdN947v9yv7aGjKrd11PRb9GTfVg4ATZxq",
  "key15": "47C4faTK9xPyhssDzSZCemvULMaTDu57m9Fiz8DTzmGZDuEjqTstniKEPxA7myyb9ftfUGYR5VbWJttNYkSGcA6r",
  "key16": "n4kz6L3DcMeHHBpQv2kQEohMUVUNugLkiXdjS5vEzYRtLKiahuZrxN26PHt4pJLZtbCpakVMrv6WFwnW48UJoVs",
  "key17": "2cUYnX1mnnYByTbFjGes7BQBbnotTCxmfEmFEHD6BK7rxHSUY5uvmwdEbQi9Lt8PrJnsuXnUT94p6YNn6pBPm1L5",
  "key18": "2cT8KknHHhcEzPnTZkF2NXCttX6GDKSpZausEbNK9iMeWrMJqqP7KAA3WPs1jmVnwnJK2yrcrQU2o4qNGmVaDvt",
  "key19": "2HPrLruJYywEPAvkZn9auBRAweM5MhixfeVrBhbqGvfWQgjGNp692Si2P9hLaDfoYTPCiDRMPAkGnuzTjDk5HZgZ",
  "key20": "3BK8AcfT5T57b7LSMx71LqZm5Rzw8pQjC6fCdmqwMEMwuRN8hBdANptb4kvVDLXiqUPqfRSEXxUwd5KnULdt3rn9",
  "key21": "4CA3FdF1iF1NvpjRbkbpsMg3eDFw2MN1euUuZcBGAgZtTbSxERMasSBg85aEjveiUsrzJQ3HCDkdioik3e9bFqYA",
  "key22": "2UV6fkB9Ktb5Bitk3X6PwGt6dRrzpiWyk2hAe7bp1Q8zT1WHPsFKrBMAuDjdYZF7nxKHwgEcQ3VKhwqwG1KQmaKE",
  "key23": "3B7LJWbgnAo7qzmm9FYiAwVYtnFw1Jpcbyi5ouEPQkXVsyehwXp5Av6QpZDGDfTAmKGaenDDMeynEmsi1k4PwfzD",
  "key24": "3rLP58MQ81JZCEpXzwyZhs5hawFvNBzwHKAifjbHMV5ETombFL5PqChE5FLMk7gnSacJn63UHLS4NQUqukXJs8Bg",
  "key25": "45rMdWDvCPLRZPatFfuBwqMgt9THHitYrpACoW2nJHc8a4E3fmJet39oq5fcu4F93pzZJEWGE83tnYD35KtcDA2x",
  "key26": "3ahq3mMt1pcicUZ9nkqEJ9hLLHgAd7jvQ1LkBjX9TTEuHPQAfKhtgEFUpeo8WyL6o6P5ej6zF7XFELeiVk61BrUc",
  "key27": "2SdTESaqRQVgtwToswBDggdmibQSRbRqGf228zYG8Lo7W61MsrNq9ewtEAhXcnoK1PUrw26u1dLyxhpLH4SbMhZ8",
  "key28": "3HA4EHo5WEQWNniXeU7cA2VUjQp9bxjmYFGtybQ8WJTX1oGAomVc983m9BHT9nWyX1MQMxzMYomyMBRc8W2AHCAt",
  "key29": "3qjsWqVX3kLvzBWhGbuhzoKffdxYeFecaniBQpcA9hnBz1nJVwq9Kir2TvqrbWVeueFD4TM94NgJqP6dxRFB8waw",
  "key30": "23MpwA9k9WjBkpkZGgR39Jgc4mrJktjAUGDdakcBbC38Gi1N9JCuF2C3rXdRcwJS7uWcKTRDxLAEPzwyHnm3kkFm",
  "key31": "46bwbqfUKQhtCkZDKa8RrYCdXT5GRoS7jC9d6pwEE41jAvaPGkX6mAPTuxW67TfG5LKA9K2iCwbFqU92P5Hbv6oY",
  "key32": "51e2UFvHDV6aim6KQ2otHyE46RvZkx8dVBXc37Xd9SBGh78E6dJZX6VU9DxQV3wRSRnvLjDnN5pS8v28hYe1gNYM",
  "key33": "5v7gYXdXGvTYgXv5xE5CL9jGc5BNB5xDM7tG2FbgksK1gw6QrsDmWGfbhNrLt1AQx55uW58a8FeDz2miu8xKZXfs",
  "key34": "BVSM6jjvMQLWbmZkjRoc3djfndNxWG2D6B36yYXqu2aaSZgdra1x67qwpnfiZkxheqSeXYtCkKmgBRyYMqZNHY9",
  "key35": "3BePPwxgE58jJ8hrFJDre7fat85o5eB444wEP5W55ETniYhBoqbUcrzh4AeY6c4NRzsrK1naZYrjZ9PmRq7RXVaK",
  "key36": "5X1N3z3FSmXiQxuVjoLHahmdnL1FVP5VM9WSUnA3JE5DjC9aPKVCUhVNUGQYjJwLQxKs5ah2NU4EZFot4Z2PKU6g",
  "key37": "4LE7rYEH8ssnyBHL8AXHBZ1JPf6SXeNxKiXJViDw9VsV668QfvwGAiEKg113v3C2hTBHzvSgXacz1zZRKMeoK1Az"
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
