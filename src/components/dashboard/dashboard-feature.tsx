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
    "9yuvPkBzTGoqf58p3PUip7mMfBoYfQN5ZYfpA4FNzwUkA3187rGuJh3gFRdGKd2eQkGzHiisq3EMvGcJCQkxdhq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eFzdntTiDyb2LcC2gQdoSQYd6gNL2i8CdJrBbxvuZ7ma1DfZTfPg8oVjebtF56FNxGoF8Fqxk77Bt7mB4nn2Csb",
  "key1": "2Digv35XDhtvXupdrC6vyYpGUuPXpwsjLh7fC2KCHKY3ocEsCdeJ5L8n4cJtywSxobYQ9rqgnSxgYsindA8XY8Q8",
  "key2": "VxWz3ZmwfVjw6BHpWhcU75EaGGF2bH5f76UESzx31CuxkwPudeqxw96DCesLfF4ET31LyLKS2rWvaY6AxvKwcsL",
  "key3": "4U6gbJikR6N1NSFyTjy1AvCNRXtedYFiALm7geQTC3GVek1MofALUKwGmMJV9UjPTCMgZ7jmGdapC8ovqij2jovA",
  "key4": "54CtXAcizh5okgbuntqxPcWTavA16tHvgZ9Mb2iT9zXC4yD1gX6n5Fcyf7cmDHXGdF3vRAWiE6j9wcY2skUZStu4",
  "key5": "3m4DZkKijJ8daFJp7JLjJp2Keb45RU6n3AzCLVdxZtnuUEUACdPYtFer7HHkqTRQAyBzW7GjJjTWsJkkrsC13PfK",
  "key6": "4x9YrefJDxbea6GoG7DiyhjeogqzuX6488N77kS3QRj21cF69aAZaTw1SmWHwXKatHvry24spZis56VsUYG9tp7M",
  "key7": "2RHmv5EFEtyiBajvunCzVhRJ5BYMcRvsMMLq4qV7674VnY9zjtgv2TjeuLb913t57hRqdxuB2DRmRRSUpBMwokWD",
  "key8": "P8FcwPc3My4nJoTcivYid5dFzFtEPUZMPDcv53XCdDEe1Ux5RhbF2P5TN3CMXziBq4S5yPMB755dx71Qhd4bb5H",
  "key9": "4sU4LX2aRNQmQy4dzHoTL5f92Zvnc3jUHBRUcyt7r4e3iPkZ9eH5jzomUFZTkGUyGK7TJsbNrsQb9hKnruLSkgGj",
  "key10": "4zdwJeNFdzqd7SZfFSCewLKnNkwyPvWRMNK2avNH66WRiLFYhQpjVGYRrciwtDyMdnfYN7go4aSVSKeXhqyELbgL",
  "key11": "4jBaQyyr9RhhmSbpqTQFtVWn6WMP4FzZpohDja77kUKjj4y6GpZYBxZeSHiRPLUx78Ppx8SGGv2sHzi8WrQUm4M1",
  "key12": "458ngB6siuBb49ssuF2qm5CSK2e335Bs96EDJNgZSYjig54h2UGwuxnfqwE1b2RVLuWPv6Tyy3fEX9E5ra7JUAgT",
  "key13": "FTdpNH4gbfMbGLG1JyR5uZ6vfFy38fsbxejkFNNDEq9KCYPzbFx8cexpXQHjo2eG4XYDF72aTwaqNRSAKtKb4Pv",
  "key14": "4LNVY9gWqcr2pfvtxswHMgt2hVGFGfTpZF91duEeG9FZtvx8yfGfSAK6JP5iRDo7GDfywtcrieAHT6Uvi2V1BrQB",
  "key15": "p1HqwWJmKGDwFftNkFMrSZ8Di8DeD6waBFKrLbn1B3AGEkVYckMmtbqZydaaYNfgweRkcphPrYkyX8vcUeY5kNa",
  "key16": "5NM2rAHyUq9pe8f5MaU2vxg15iqjbtdp7XQkaBsxRmZQcpqdLxUyHaJy9NdcqkF9TCDMcPKDmjkjDZKyGeVJp1vq",
  "key17": "25uVWQEckmVKquQ4GmQjPg32U8HRp9rvrrBHfFFfzxYPW4QixLULeXEMMCZr6wXL6RTurZvutBFa4N61TC6tPdsE",
  "key18": "2RDmtjrqWJYhUbWRUUpSYrL9xgSUwtw8bxckiCjouSwLhpNaDBJpx5KVNppsmLz2gigSsVSU9Lj2bYvF9qx9jNNx",
  "key19": "2j2oRZmeic2ZxYVYLdjGqouBqC2Rfwe1FczuYZ2fk98gK5P5g3whmmaPy4Mmyh29fg7kRn7dpzfZupZfW8jXv9ex",
  "key20": "4maBgCFb5zDPb6v4adRQWsG1pkmv6mDhYvxixevFt2943UkeMHVWXUg6GPjMMH8rhgiMBSjX3UuhvVV4UvYNWAE7",
  "key21": "413uxkPwQ2YSHJg5G6v3HUHZmEgwFynqw99kd3gy1ZLohNzTBoYqmr6AAVGpDAu7cyUEM7svqHEUNv8SkDYFWo5P",
  "key22": "6CP2doeLNihy9wb46xhFzCsfUsJuBQoiJLKhEuggmDGaCUBKNAhDcUxSiKwNmdjvtKBgEfTRaki3jfk5D2njpah",
  "key23": "5DS3AEF7eLjHWQKz6nge3NAx7dWoALw6akhxFFdc96GKpHGZu5MtsuzgYw7F9Fo9VTwaaSEHB4psc5JkuMQeECfR",
  "key24": "5SBGm5ekM92ZJvH8LoaSXhZheBZYKwugebMSjZ3BkiVA3QD9sbtxr3FSABBqKgkgW1PWRmsPne9HzCQwRKnaCtSa",
  "key25": "48GvC1QJvvnPGCsksTXaYaJBU9Apzz4q8YHvtpKhDQpqXGyVvbzFddmDd7JJ5FKEGyXChDSeLURLQVM15Wkvvezv",
  "key26": "c8iYB8HNzXbz98NHUNWqT51MUFRUKKoE4KE6GrCi28f7jCvEKFtGUGmA7EVm3NvnUF6X9ULKjzxAJJ6YC7nnbZj",
  "key27": "3HrSA55a6mNEKpGbfqtKrzzqMA9ds7fFMpd4dn1QyZJJ6LMCCWDSKn6xLS4Vv8hZgATgQsbBSoMutoVdcbxDg489",
  "key28": "5MNyh7YgfB1eQdc7erwZ99eFByG1Te8XEPh5tsmr758zwQDXWM5B2oMeomMKv1Uzjs4Vvty6Pn6vmVCtUbdg5TLk",
  "key29": "efSmWYJVNXZLLnQTBiefTWj8tLEpMFJYLrCCYAWQp4hSeEh3nBnjrKwUDofpeRGEFhwfofZvNrrBYtJPcAV3VSf",
  "key30": "3TyiRYhctqxYRNPGoZhKAhZxJpymaZQ3jtprsyRYHMZJZuG6pUVBQgMP7xXrjbRMfqCswnGdx4xeCLATceB3knQ7",
  "key31": "49AHW2RJXpc5tMsvHxxzKjm4xUGWS5GwVRPY8pP3tAsPwVgwqMheV23hH4yenJGRnjeGks7uXwbfKUu2dmd6spRn",
  "key32": "4bXDsqR78qgBHvBPrqTcYV1XaWmcZR3Wy7BwhPqPYuuUS33cV2VTHn3na9hiPesc1SL7uubhCGhGCzUjTKhoEmXX",
  "key33": "3tpgzK9UryrxpoZaRwe2iEA4b1eJ63Mb1P5SFqUqhpMPmw5otiwujU9jJyCj5VHwu8qQJoomim4KmLvuC3bYu4Ja",
  "key34": "4n1geFHYPzGFDneCStfBMvjZzuXNs4dQnYG5M8BgfLzGoDrpfApvxZnt1i8QYaMRCALfiKKGsGcHGCz1rSV1GjoZ",
  "key35": "3Ut8oPJLqyPmzz6QzvwSJdec5y4ENCSKKPQerqdxp6DL3gwbRH7LAdV9Vbey7WA7V3Jjrs4QW7DX8XhV6ZJzdNup",
  "key36": "4KvMshAgyBKqmBq5usasvs5j9R7c2sFmYP3eD9AiSmKbM2BD2ispdYp1KMJtQjeXdx1u2CAcjVr4qZQpKa5NvAhr",
  "key37": "3McbFGUx4vjdrPx453jd6Aryy7hAuvxVKq1tYsc78TDRfzcLT2PWbaNKQdv3Y9m4GQhedtMSyXvDy8gczfttJKBM",
  "key38": "26qG9iqQ2BreBwQRFt8M8a96reo9Y8qDKtA7uo5yiY93tLpLq7HUJruT8MyF7LwfQtPmbVNRwK1sr3bfwFjX7oSB",
  "key39": "5H1FVrWDDAKHSrtDBMaoHcenUdH3jsthHeLnujn7io5F28oU2gsDicURBcJAdDKmDpXKDJ8RtZHRQKV41EzZWz2u",
  "key40": "2VcT6VUqf4CjNyYuBCK21ro9aeVN862rCJEukaXcwxnKYMA5fG3udXNKvNsUx7nRpPwpru46nKXzaPhZcHCtNpo4"
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
