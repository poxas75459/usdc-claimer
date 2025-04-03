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
    "3p4QQXiWCUJVSAzKBj2YNL4v1AEtLHCc619JgtxWEWC8PAAN97C9AGYSJiexMBKbPyEgKYogHuXQYPMfLX1pi788"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZobZNDGERo9Vw6KspSactFDDTxVpUhJQmLgUSU1SaiXDJjyjc4hZWkSrgaBFGBY9pvzAzydWVKUpxL4ZuMiDHus",
  "key1": "2TQbiy5NrZdZqX7U2PEiQi3vtLGKfwRy1MeixinRg2tpXgs9zusnsZ5tNyms49J9gjzK912XF4TSkiLQmcwJ7CCT",
  "key2": "3YSDCgqE1FBbq1fN6CBwz94EQ2XVkrMrczAgaeaeMkJk5N9NMiFpCqxcQKp9N8W8itXedQgzTciQeXwR4t6xysN3",
  "key3": "5j6M1cu4ngQxpLMFSpKSfxSchMvtv8n1oMTqQyTjVMcRho7d97EzrXZHzBuLBr82hFjjzVyUgwwpLvKsXuHHNXqu",
  "key4": "3AdAL6Bkjkb7tQaXhW1gude4Pjq3KF7ZQPB4WmUJx2zURBkGkLozWNFc4YTGKZUdg7veN3cnQLnpGJBFDhpqmwnk",
  "key5": "53q3G8k4VCa8BfxrvN2cx3kWxgGmXcEjGp4JmF6CWow12BJJrQU3q8QkCmrusMrzsogrRGT4BYgFCUXytx3ERHXj",
  "key6": "uYFBkm72WUv3u79mP4DkoeNP7hqLTVPMjpN925VFj7Wg4acH3W9uYU2mgjonswxFWAwuRmqbuFkNz7JVPdretxB",
  "key7": "HcGwnu4tBpeQHmmGUaSp9MhhG3v5aPTwE6rMjtaA1YXBEawLmXVYVjbQt4ugWRtFNn6bJLtYqXnoa31cNYS7mA7",
  "key8": "31wEVK2Lf22GLKSBn8FjuggePGpjbsp3aof6mCxaGVhdKdUeny2TgVBDnh4sTUtcKUs45PTpMgSwtctCHSq3y293",
  "key9": "5rdM5tPDRZvFEs2zP6VPLtCAovQyhPBBvd4cv97yJyZsggJcDpKMntNBFY997Auh21DJqQrYj7MpTySp8NHhv4a5",
  "key10": "5Pjm5JkUzQdjmbybD8Wgptee1t1FzeNApq5kedhkW6VPaLAXBPiuXfzCqKP6964MtBYtERJneBF7SnuASaBi1i42",
  "key11": "2eZ7jX1PVBpPWQH3EkdpD7agsAj4fYhZgy8RJnMee5gDFZCA3UHKsjWpbRyZ5k9UpDejCCkp2GoVBuru2gZJThoZ",
  "key12": "3bbC7t9Bt2b2x3LX63SueyrkV77SQJFpBf5Py3JXG7NQKsjLe2DANqFAE7D4viRfEcqKHitiPa5DzVmCMvHUVVAM",
  "key13": "4qfVH2q53wjJ2Y66cLBd4wJfWnFufU4AJtp8Bhrx3A5vcJirkAAMF8PpG87NCkcJ3meY5sr9u2ip2bxFVSeQJipB",
  "key14": "LuRnVf4EtkTydhBrHyLARudufMeSw8eWAHczA6Rnkqz2qTBJEK7pBS8vP1APSxo3ypnf1XzZRgcWVjonns1XzWx",
  "key15": "3GRWuxorHoL4ezF6Gn1WyEz9ZuR8pvxyLtSUeHzuoZCjzp4cdUpKMjp8dVw37Uw6xXQg1PndyvovGrSj7pKhP9j5",
  "key16": "4BH2StzMiWtH23gimyF9E8SaTHT7YhJXuD6U3cPJbx5ohwPh7kbkp8Wso8UVQwfcJxKH79q4LWGvgXoZ5iUa861L",
  "key17": "28JNCtRWEng3pfe56yso9KwGnu8qskoWUEucUrU6hkKfPp96ZNUzVw4McPbZqk4t9DiB5c3YimRfATothdV7ijy4",
  "key18": "3mebPmuWYTAUSoM2fFTjWj5yVrwDE9xr1Vh7TkASsVXotnqFohamhmqbsdaYt4d98ZjiqXU8S2sGgFpc5Jzdhz45",
  "key19": "4Dub7NfDQ96dKkfwUQZKBksTxrYDYowZTHTyjUbobWpLyafcXeTQf2u8aKVLPwsE1bHWefaCpP9KpwxbNJjGAzst",
  "key20": "2CC8LwGLHjXZ54y2mCJtSAVqfCJB5dPFTUmVkGdQPdoDVDuvV8daeY4xNyqrz7ePyMecYoNRsxm1XxVNu5W4ThyJ",
  "key21": "22css89oTHGJGGA4AYEZS91oriTcDNQ59HtEAfNCeCT68kWRgyFW3SWX76e2Hiv5gPvZ7xa7XsKLevybPb64R8uB",
  "key22": "XVLfAUqB8DGmRMt2GbD27g8iuh9Ngp2PMzKMWoYQEVjjX7KxsPMRtLmQvBBxMDeU6ZpB2DfbXYM4wHS6zNRQQWR",
  "key23": "t7FsH7aeUFmxePLiyCSDLF11cTLhGhQEKyDhdpPiNcoZS5ZfBmouZ4fttitfRWTgZvEVUZ2VLXscK5ox4WhDjSR",
  "key24": "p56ZGdAJ33FPgwhteP7y1XvWiEQJMHuhakoJ8urf5LBqnZbyDgDecsJ9AtKW8JymVDrFTRNs2FiHu5KSPwHRdHR",
  "key25": "3nk5rq4mnKtng8uRaD36nAjxw95sVpc8N7gYC8FnwpChYy7czMyGk2f1EPsbo5TGN8JHqBWTBknRNp3vL1f4PpTW",
  "key26": "2xHFfpXksk4ocxAc1uD1vc2YdiCmmx6E2w94RoSLFhTJhdVicK2MBMTqHeb1hqu6xikCfFtd95EvRB894o3GZWpt",
  "key27": "2uV5XjMZEypyDTmvQSn1hvdYZs4KjszbvtNkWUVYh1E1JnQLFrSff6X1ciZaNjgoAgDsqaTfGZv2D1aARiX27NtL",
  "key28": "KVbGeKk3aEKxSbu951jMYUdM99u7WTGC5d4eCyXTJsBPJjGwRzovSWthFinGMsapp2BuZJRs9va5Rw2uHAkpChB",
  "key29": "22CZbyWxVVhsRXusjFA6zZwNyFTaVZjKX7ZeeHx4FueXK9PxqGVcUhCkufTCeWBswC8q9osqXuEE9mzDzjGEDsdo",
  "key30": "3dG69gL79V5M7C8xza1fMbcPmKuLGG4gFLza1VyHiwe6La7SDwg2gsdVhvMfUEzodNkSD2hzrd76wbcWY7PKKaNE",
  "key31": "45wSevHo3gBYGUDUkauQwmLEaDx2LcWmCC4uotFkq3eRvaPjx5cURGoH8NHdYKwhuMG4pRgjxgAU8tKxbdfziwfe",
  "key32": "4YWrqLf5X4kX88q23qhwHNQNBiYrhUVkqYQ2yA2Uon2E1AmENeL9eJRuYgipmDuMeKuu4xsEh6VQpzz9YD3QUNc6",
  "key33": "3fjMLZHS9m98pVfAKhxKYc53E47nZDLbRxwovJXac7QuTV9uMpbHG1VVRVQr3rNeQrJD66KcKp2Zs48KSDZWhox8",
  "key34": "2GrDC1nEVB6Vazh5jibCqYYDKfjr3BgW5KNu2MYPWtHSt4fry6wDrtg1s5A8GaMHmUoLhPTr9Bvez4mETkXMUCA5",
  "key35": "2HyDduV93dUMvim4Vgy4St6HfpJLqVayA9Tict4f1EohiGawBeH4SxFFuMzQLRS4pybwgcWPyWHYhad3NqjLyjvM",
  "key36": "r6knSpdqnaZnoeTV2fe4fsjo7YeLvXs9n1VgCiMc5ALkFzAgSyYb9b1DQ1uifwiopo5CdoXjhTMCDbumXT1hqY4",
  "key37": "5bzpXKZbggcChFA8TLCsENhLRaLE1x6eX8JmKmruQnQ2VohDEvjSNKo5ePgh1iE2BXoqgDwM6SyNMoutQQJwQfoZ",
  "key38": "5qEtFF6vQyeSFULLyuM8hwciBgvwg49VbK8xYT6yUGv8jEzzJnj7XUC9VTDSFmXTES1a741Jzz82hhYDw5Uq4ZkR",
  "key39": "4EFh7h4Eu8dfJuxNXWcqHbPcbJb6bXcsycGP1B35BNeE4xWAtuXFqyRw5Q8pWD8kfY9wL2fR5kLCWySwUCTSgHVU",
  "key40": "2WP8SsaZaTgz4rRCfsYsiWyHEbVfFzayqadrhzfojTi5bF4FQo6uLsCVc8dNf66LXrtpA1EQTBzSpV89Yt9vNhEt",
  "key41": "5TYMJRsu1YFnSLJY2m6gykL6k78i8cW8Ce7DF9Rv4gvFYfzkWd1QT2wEwJAzLQ84QvXvEExVjgsUPjD6ubZ7wgbT",
  "key42": "2NN4mihDjE9peWcnEhBumfG6WRk5zXaDk6hSDj6bw5UzPdFTox4qWHxuKXBpPPbWzSxZfUBias1ZS2M6PbsjhUdw"
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
