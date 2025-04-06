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
    "qFb6v79Rr6J9gxS7xr8m6LtJLRvwuezrVtMd9k3spMvJc6gpfP4t1kpsyikiFsncKhidMPJe8dh2gTZomKbkcnn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nv6nuPBHj9Bya5jcBPPu31y5FUXcFh5n5BAzqfzx2JD7tL4GKAXsLm41nE1B5ajsVWvVJyaC6dxFbqQBBbHBNmJ",
  "key1": "2o93SSY6Ai21jgLAdSsCgrAUkTSJ1FxKTSbYxm3EifziTxmdu7fZKn88njYpKkMhqdeX1JJXu4vEtZrfhxiZQBhZ",
  "key2": "kvwX5Bk9hx9BBYaePfuEu2DvUzAQ95THiAM5rY3GX3JdNWc9uz7WYKiqRv1sK65rZAMfzyrGN7YkTp4t38Le2Gd",
  "key3": "uJM5EzPNwMANH2f2oLu2HitdhjWtzS2dv5ExneG16NU2WXgvoKMnh3EMWsuD6cGuMEekAgKQa5hVX8tjazVy5FY",
  "key4": "2MBysDLkjwZJrvH3NMXbXbnEsTmswdSzz2Ei2ysqp3grPf43eoLXgXqBnHDxz2oP3GSV9L4sSonkdvVcGyjz8ifY",
  "key5": "4AmBJ9q15ux56hNNq5yrqL1y75KbCxPaXuFyUd8FvBLx9jZhf8qcY2ZPiR5MdFmM2AAoRZ71Say942mmKCrLFT9w",
  "key6": "46DXmVcBAzGPjDtSic4wLgX8VEnhubbkFBDFdqVKkxe2JAaYtP35grMX17uDZCPozPKe3Bv17LkLxjjfAYcS5WmY",
  "key7": "uVYxtCKdPUKXPpfypa3B1fch8poCQYuwJX23stUxZjVnGXVK9GMSwXH8yMxswFG79KGJPtQvrWEZpohFpQxJRgV",
  "key8": "4rnSXMKnco8i3N7Twn2cWjmeZ2uuy7umnW3SY6zZHMWNaSxa9Fd9hGpbnGubhDneJX9C7tpTqMpMvhuvMihBt5Si",
  "key9": "3ue11quaghCYJnwdmyBWzsJt4wzescj5kRXtQuaUg1VSm2ek65JHEYzSkRYtAfk1eznogpSfxu7nxUn9NiM6pxSJ",
  "key10": "254v3wwFEzk1spDAV277eYF33RTocBYmx46Libp4WB4oSCdLh5Bpjk2vPLsj4pYeLTwmY5jtqfKbpDUKX9wyZN3r",
  "key11": "63F6t1951PigPpsY3Hw9VPBiQfcLfwqM4PMULp4bGahHjcvWDcPgpggETiHMaD46zgDcYKGWdmH1DBG9dmfEGqeM",
  "key12": "5mYd4qnB3TGqV7Su7AyipeGwVERK4hpEwSdQwCzmCwamdMZJVc8rnituxxoQT3hGMoWg9LsuPXtCKHsusBqXg92B",
  "key13": "5FFgB7qZUbDikqndVVMVSTDPn2WEQFkxbn3t6ACyRwboet3RPFaEBGFPj3DrquELhtVYjSWHBA9fdSn6aDHQxGJy",
  "key14": "5DmezDbvPqkHhibiRTsDGkvTYERo4cCk8sRVzhG6oxc5XueL1PMHPuqvxjoH5d2ssQe1vVZcDkNHzmFbtiWRTBCT",
  "key15": "5ckpnSVFcBFvrSRpGKaWXWTvNKiSTn89G93LdH1J2wqKYrt1ohuWxbKgC7v92xDmTmfEPBkQeavuSRjXabLmfXTn",
  "key16": "2t8CdQRQGyJeVE9BSUv3tX8gSwC7qZJ2sdA3QoWpUigo6WAdxzSX3xPK97Ynxo5F6usfZQumcWhNh8d4gBgeiCNs",
  "key17": "5Wzwt7wsdsugA4ErHh2kPSpiwaZ6r43PiNCKpMBUro5qyvQ7mAbyDaSqwVXpAHC18r2N7ovtB2GQyDBEPXLZ2dfK",
  "key18": "4PVo2t3RosV1ViBga4Qd5t4UD2E2kDaZgTUEhikLDCD1ZjEH47LP2h4DpKXAXsvPh4U1A7LvcVuU5ooQJw6h3zPq",
  "key19": "5zVxb2ENKJdgmezYb9fzLjbEttFEzMvw1dsmh97XLHP4vZrv4PobBJjxqUB9Toqr9gBKknR4iLGmso86sTtJS1Xx",
  "key20": "4WUH8xUwbh61hWSq2Ko2LMqVLTUybuCgoyqMddSTZuKUZMPAAjsG7tGFfEZaGiFEh8FAscrrWk43vqhZeEcd3TP9",
  "key21": "3W8pisjeJrHqotvszWnhkK65noD1SBxgwnEMABzZDgKXHm8Q14DSWS2rk7rgqbrQubLwncyBtWyoEdxzHQFAKQc",
  "key22": "52nkdLKK5MjqZM5ZtWNii6HX8ApWcGHk6hyeL2nxr4pzwrr1o6hpZRLKk2GCeXKVmz3SbRV65Sjudsv5FTqTDXUJ",
  "key23": "2SnknmYMx3kauLiLJvpWiy6WoK7xsg9NCXivTgHy9ACmkJi5FdbbLq79QZYndq8Zr2X873HjqYYZxq2VV9NC76ja",
  "key24": "262HjGpmS4VS77GMxZfUMPZ4aYUTijCnJMrPyBqxftjgBLT16GxFCboFUvZPdheKG42spnErGk4gYJHjzKymLsfG",
  "key25": "63xyDRiYbynQJ1BmKSbHp9Xhc9Cw9VcGQB8qGzq6eQJbw3WrgVhbzXN4wygpHqo6EWStLK3jqTFNgd8tVh8utpWZ",
  "key26": "4vgYRVA3BgB5TGp8egNwJ623rAdqy4NURPwjsR34wEdF94ax7k3Y2SYftcopCziECC2Sw6PziLGYH1AS26scBfQy",
  "key27": "5zbcrSG2VtZWDMjBsamm4YLqDNh28vBdGJc9Hr82nysetqob8TxWTCCRs81TQHPCBYDbTwRcLW8Lkzb6N4Ce2b6H",
  "key28": "3L5wmwqH5S8yx2qWtk5kZH6yKDbUKeDJsGv9eQib1629b68NtGv7y5JG9pawNxCSk5gxEJJQhqV7pHW9275ppChq",
  "key29": "4J5YCwvJWXButA6kPgxxKbi8AMfGN2nEPTSnogcgRqDt341Ja9vB7r4NRBTYipbz5fdx7EdHbGswcsGiAHAbwfS2",
  "key30": "4QNKbiWgN8BsyMBTLxmosVbj4t5qziEeVtqqwukkqAY4Ehv9bcSp3LH3iDcnT6mELRR85hsht8MWY58kfpTyYzMA",
  "key31": "4iaZLp1Sxjmk26Hxjrg5iXLgQmAM3ExigVpxSzJvZ7JTiwuDJUBjvgM7n6LQp79isdUCPYAdFJVp1jH2MntH4ZHu",
  "key32": "4ovftYyPuxnM9HvXp93kbxU82GoUXSguRAeBqrSWBSvgUutTVsZpTLj49xiahBtnsc9ek5ySHc8CUwkAfGRWtzKg",
  "key33": "29Es8rDW3tGEetwTPDdUS9AYs5McWqGAW5TvxLDkBZBZYUcqA4JmV1717aPpNonwY3mE1YoSp2Sdv7JnUCQUPdJK",
  "key34": "4hBbSRCUivRhMdCs8yk3EpPi3Wuhy31deQuNuRcAabGAyr1J2s3iqKyBvmyikjnQYn1Fy6HZEbbm58Q1ADxxkWaS",
  "key35": "2iXowgVLB4231WxtJayMtxZ7h8gTHFfjBdN1VHqJvW7rwPJNV8X3yah4vfkwBRdRBpenhxJrqNFE7hFCBdXzWd6y",
  "key36": "5KKDWzexTvCx4SdqPWACB1eTrmcqfAhm2UhN8jpFKPcwriGgAisWfGwW7XyzFskKSK5W6ahVFBPQz8rLzpaAFHPk",
  "key37": "25WTY2hjDE1bgL1K68KZ7PtXMcnaTBQj3yxE9Mfy1aNaooXoMEhCfnqxCFGb7vZEZys4GWYz9tehxJEgo9fy2bi3",
  "key38": "2iCR3jEapSYGBddRn6axVqdku5x18485tVBsJXemZoHismvaGa9YHfU6P4pmSnk5aGkG7iDjAMh6amPGmNtybVYL",
  "key39": "52k9ykWEQ4hqXtqBD5dwJ5489aNDw5a2yj5Jcgcu1Y7iRPPvbJvkx4ZtHarPkw1DdR6n6gohT4LKGvEPWkh7Pmed"
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
