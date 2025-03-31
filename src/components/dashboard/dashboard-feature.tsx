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
    "37TC6AQLMseffyXmDdCZAc3r1RgLNigJ23UJNmqVwbbgAHJJKLyaR5XeUwWTfbQPB9iFK7yJ9Ek9YPTyCFJ6Eirc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GMfAe1FiqP6NHYsT9Di6FufuZSabyqBxSbaJJRTLmoXpuB9eERvgnxEDytiME12H7Lkk8bZo3N4kswADBdgk2KP",
  "key1": "Nba5jJudFwXuENbGGbYdRwU9TYXsDLYwtTf2spfXgv3qMC1KTZLakSpqZMtBudtiWQr6dbDwVMb1ynJTkos7Z5p",
  "key2": "5sqMWgUh1RFyimEFhmUctYiUp4uhtGJ2xUemGvVQuR6ACkvoyEuqxqxt3triFwMa3dJ4T64m338U5Tf6gfshxHzj",
  "key3": "kjgtaA1frCPTWkmaP3ugMthwtRyzyt1jBxZHi7KVZeKMx7WTxFm812PHcvpzojDs4sKbArEd5tPKy5aQ2fYhExS",
  "key4": "3GmnoAz6W238SfaGe62sCoXHgmvdVFAErdQV6UFnAVjCns11aWnkxrgh3uKpwsMsKD64StYrHEPVCC8hgNCoYVU",
  "key5": "1jJ4xGE7QZpUTyFFxPNHGRk6v7RmogdaSpdDE4jf5waS7AGvL9WMPr9Zt1ujPhM3yRfzeKenPpJaTN384RDgFZK",
  "key6": "3gy6nWaJaBac2bYMVLumCUajHNGgmphehv5bgTgxUXSMesNkxahS6ztW9nBTCeq573cTkLGPKUgSUVkC9eUn5VnT",
  "key7": "3rkcXo4mCzxJdC8rGNwswHbqV6Y4uK2R56Gnt2ZjXC6ewBSrcyTGNtp9Z2VVExef1o5oyFmutGTJfQsXYT88VNTk",
  "key8": "3WehsTXdSpCeSCDd8GJ56tnNAKx2XGQVaYGDajHjU7Yp8GxjYPf3sauYe7Hp1497ZHPpbgsvnoApk5bbQYaPr7Yj",
  "key9": "2LumJxA18NiFsAcDcF38Bx6B7TkWptoCrmzuvB8HqwRa8vHUrpCT57i7o7iMguKNqhZbbXbYNDCqxZgpcXPfm6oa",
  "key10": "XL76aRrmP2YePo6jzpDtMqbekhpivbFKxoBmaN1djUVAzmu9xQxaogJgSYDBvZxR7w3DQnY7X8Y8it8NrqZiBup",
  "key11": "54i1uabVe2zPqbCkvi2pDiZjHa3MnKw2FEyDZPkq8wrReR74Uc1AZ23Gjm2WGREmovKhYy6tDZWbgpWn1Ex5qptc",
  "key12": "4pLHBgYvANYV7NWP4vPyjZ23o3n597nsV8yraEutY5oKrATxdFEkqXnPJUaoqHobygJPvy4pcV3v2SeYRZbjir3q",
  "key13": "Ge6kKdAwabhKko7Z5HpBvj1ZpkHpn4zfXjvNgxyk1M2o1FLF8SDoiPyZ6wkuVJhdCXaBd9SWM72TYYWWKmvYnSa",
  "key14": "xfriTdK1yLx629NwyyzMY4y5PRUdms4d6kDS9eozQYUeFSvNBBwof74G9nvGbE5L1isxVvojTYq39aeqD12xRvX",
  "key15": "5yDJo3FkGTh8nZ6gkQoTvtk5e44QxhgTaAJBWh1kkou1TfNJWvneAAypW41dPssPmsm8sJFFrnd1KjPr8o2U7GGY",
  "key16": "i7bEjBuHZaRE73JukEjtxtvQ2muEwntxipMFgA9HPk3DE3dGanSx6J84PBr3eGva794wjzVHRySihkoGdYJcr5r",
  "key17": "5ZdEGM7rbV9AqHH9gC9tBFThc9bWehsPReYxsSCGKzxP7Hy5U22isC8QDGUyzM35ThxWmzvkWMc5iSNoVTR74jVE",
  "key18": "5ho23SsNFFj9Gtv86Yxd4FjPcqdkrSohh2SS158NQD5roPbveny7fkBauED8CavPQzx4LRpyXx9utuaJbN3ZSeN8",
  "key19": "4kcKnNoGF54eGCRXtFtNcqkg75m3g4446FXKTvHr6ukudnFvKfhd61vNqYZDhBfNruSzGN1EbakEBHJB6kTad83D",
  "key20": "5CGRZHCcwhoiqcqFLpG2GSM8AUb1Ayi8squL1tbiZx4RSKzB8txE5kutp58pYindpQDdT2xfy2Ua1DvTfdj3FMvy",
  "key21": "FYuxFGFi3tyiPBZQYehKXQVG4UTvaQRmECmHAP9KbSoZYB9p7ji94d4nYzs8Qk4f5pRLry2Cqm3wLbT2vy3ZMGf",
  "key22": "3Wmj5aVtUg7ycQmubN9GTSZU7Hp5CpkFKXwb9hMpUW4VyFjFTJd5aQAW98anihFosm4iwyQvUo5MudCd9QBwxFZE",
  "key23": "464n8mNgU8CjZwpKqgh2dJnv4LKD9Eic4jmVT4481YhNndLcQcUTWyfHMFwQgLAjNyRo7ngWckNPM3ZSHgcfd4yv",
  "key24": "4c7aHYwQdzgrpJs4TgsNoefzjsr4YCQzkPDgByueXhA8neRUcn8rG39RtTCf53QpdY1d6V3bcSvsocSUjLjhiJyq",
  "key25": "4P4aX21o7m2scmuKL4geMcHpac3yfJiwgysxp8Xk7pi5DcrKfQ1TuznaSuhbSjTZK1xdQsqNWHKH2BgznyZMTS8Q",
  "key26": "MchcAnduSVodKEoxETYLKqFBKMZWStWCTSoLk8atgZiB6tx6nDWfMgsyJJKN3qapojBhsYaTbF4fJDmz2qDRuyf",
  "key27": "2ydkxV7vG9qrQvBfSLQnuMtfQr4pftDedpnLVdRPBaFubY3XHfFQmZaSDN7y4Yokyc5bVgbfD8J3u3MrSvEhAsFS",
  "key28": "4vPiHmKF11wMitzhpj3vgZgqNWtkVmxPvuiT9XEGv6fzCDQDujTc6xmMuGwqjJJojd3EPB7WfWyh7jwBUJDTXiNp",
  "key29": "6F2SJpEsRcfDagbU3keyM4CEpGgCAgfMPwECEsP6AFJbBeaBkKLSpiRrkC8qJdYb2xtSCBwR4P1b14S2Ku5wZ6E",
  "key30": "4iWxyWUiFBmeZRz8Tohp9B6mmZdKe7tkiVbabrwQaurwy8ZgKn1dQCs6FSdwWktE2KrujDJfhf8vzTqP8jfUMne8",
  "key31": "3byeo73M6RPySzbhUncKfJyGzT5h7nexghZgHxKzYv7vmkQopHJGtmUw4fjrPr5uF87Ye5RN7jVh6YhoZ8XtUBLa",
  "key32": "5u3tRZBC1ogZcVRHyzjzdYZknmCQ8yNvGbNZJtjstLwVjcNqWzHiHv9B8C4HxWZk512oppGDL4yN4KQzCCLeqbGB",
  "key33": "3u1kqHWNjPxBPZijp1Ywqk9HMAeuqdndxBEwvsHaAR3u2CePTrqZuQD4HuRyVw27W93tXpMkswozeRq3EQTo9RCj",
  "key34": "4HZSh1L5YHL33tXiMmf9RgT3M2H2ai5YNgyykv68X79ygq2RxB253PhGoFRFoigWGcL18Q6FJNsNSawhEx5L7Jt4",
  "key35": "5BmKseN9J4qxVgcne3Un2r862E1UMjeVuqkNk2LjeA9DGGNntgK1j3gdwmSv5Uv5mhodn5GAvz6HxmGthbtvyMit",
  "key36": "7BCfRpc9SpcPC6wGMrcRbxb7st6HtXBCEBDdWqS6foK7grv5ADJjjnVTenBniW89fbRbNfkvPqhJL7Tkhg65vib",
  "key37": "3EHbChLkYpihi62bEPLuQ5CUYC1Soh5hWqhdZaPpnsPzkf4nGtE9ZosAD938sViSS5Ui35VCsZeZFsNokV1Vkkt2",
  "key38": "w45FeFpWQpinhqeX58v1wD76b5d9BFcN8jbCCTdLjaTUZ5Qc83FUJsjLWAeD472eXCHAEhEqraCw8hmGRzQNir2",
  "key39": "uUTZMc288fqNQ7txCvxt1Q6VjrcSDL6RqRtghuWybFpeiTLAunWTU8CV1qxAFgBaXMx7LdH8o3grKjJdJa66FcU"
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
