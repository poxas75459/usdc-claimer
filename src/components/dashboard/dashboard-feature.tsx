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
    "2R6Af1qMrbXB14aFLD2Zi6terepciBvibTzTs18JD5RsBgdyM8jeBnkVYnEfzEFVyUzg8k5KyNupRV1h9S9eYCnA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UMfu531DorEcJdqdgCL2FtG3vGjtkHKGLTLguRWV5oQKcy2N4UFyyTSgqBfnNQBSNP9SHbBmvSCCGVF6YpUUwsh",
  "key1": "2oFWsWN8dsbRJywnahEUtj2y2veJZxsCFvtVsv1Q41zKAwdEKpBREwjMjfmNfGQBEir6Hoo4nwGUGQASQkFCU4GZ",
  "key2": "542x8g2yicCfaEKKxAksa9wdYhuttSZq2AbwpaFsY7ZKdnn7p31R2GVedzU5nZEEahugMTv1hWBtMsEf3GzopQYi",
  "key3": "49TxXYqCZMGfkR6Ci5yc9Zuu313HcpfUtd4YJej1e8FPjNgGYLG5erZkUaUVaXcWvn4KjcXYaioEQcKM5FHfP9PK",
  "key4": "5RBLxuAGLr6Xm8cbG3HKskVwVCwdo26owU4ZgzWrDZ1r12C23r5wjvxC7jSS6w8MmhasKor2GnkidjrhC5m3mNyt",
  "key5": "1K6rPNnyg2AKSG4T5sYWbW6tLv6GE4vv9RL6kRfGL4pcdtikBpBeF843S51bZu4YEks67L7WnDyc76VLRU11hn3",
  "key6": "5HzNpfcKhSUoAKq7ZNoYoNaXCcQTBmdNhUacHcWxJCgWB7NVXCJeGV9F39mcmBcofyV4hZRyPWpRyXfHmrbigLiU",
  "key7": "4VFH4vqh8myVfbRBu27Mz5mwNkVm7VSgjdtxqTmhxiGDa9Gewnp3daMs2jTifKBxFZ64ErLYJpnkBGbLYXVTgQsB",
  "key8": "5yfDoVmzPdH9643qwHvCa1uT8vX2bATJbmaJxrEDT1pPcbZyDWzuLvgMmW9vF3BZuFtH4gzPRrgmGqfojQJGsLqQ",
  "key9": "5SEG1vfeCL9o4DZHUZhE6rKmPoVdMRFc6xxEMiUeHXihoC7FHJ1UCbRiCVTjTYU6UNUQghPfnUbKU9XWrncYgQTZ",
  "key10": "4Wv1NDoCzPEL82NnZjR36s7rfrEaZeNuVR2FXmerjNMKQ2wctCQGSTJ9B9kguSc8aZS45a3KzehhLoHyQH2M5KyF",
  "key11": "52AAHck2PARJ327nn282vw7iDfqcY4kgbCLDyY8SMHW4wCc3BJMdtAQHdTyfNZ6Uj4pAijBF8j4ZBG9kar7KeUA8",
  "key12": "x23qpsrbK8xoaNsvKDEiPjpYXkiZZVtMPNWB9sF1mojEp55ttVdCyuVWLe6t1dgiwswZndzrLrSpTusdBKqQF6N",
  "key13": "hdjMNhXsW5nNnWsa6UHxSJUqAAW34Y36KidXMC3hNYegLfHEztmxmJ8FGoVHXZ6mcZez7NQEtfmeTdqqWS75SuU",
  "key14": "5pnzFFkzoUvmPaPv5vhqjfbiBDCMZsdQQUzto2WTBFDo7q1m3iEavapB5sNv9hLoVmDUVs3jpcBRPdjbeifzp7yc",
  "key15": "GRCaVxTBW1Vpi1zZkN61Fs192qNLKYNFPjV4AAVZwz5vfhdSV6zFW2S8umbBrEn3BXBhc4S3jqK9QQzZT58Ekko",
  "key16": "p69qWxrSGiNPh5NNeAd2ZL2TEYnLaFxJtTT9XMvZDTmoLDSGA6MHzgDeeqd6q5zgqupKDWDwGJ2YqcHLtaQ39vn",
  "key17": "2GGP9mG8vMhWx9TVjGsgn3MzKd2TbWrGXPDAYfX53UFRJ1tf2SsuTK1ZTfZe5NQaCVbaLdbYY3SCskThjuZpfTjR",
  "key18": "C4UDWdj5ERiWPpDxymUDHukY3nFYx7D4qMuJPvSmHq1sQQUiG8nXY3gCmvBE9Ao6DqPzE27zo8z1mxxmQwfA3Ey",
  "key19": "4f2wv5VnBWmNx6QvMvtpmJKJZ1bTuUtCJaKym2XNGf2rPEkbqCaiMmbzA8QVgeoV6aJCw9TofpJVGezRSZBh2xut",
  "key20": "4rj2mAX7MUE2CfY9yvpEZKhjZDmDScAUpfHQLss6YYFgbX54if7ZfD5R5LCdwFjycv2HJr4xH8z6ERxwQx2e7nug",
  "key21": "41HDddrL5NcxiG6KWJ9cR5P9qqsZ8mEEut2845XoBhjDt4v5hrQsteEDcwwvtgFmd29GbjW8SmU3YsfygEUv4Z5Y",
  "key22": "Xe25R6sX98qygZBm3KxAjZXDSY5JtZSAvowPwdLsQXLhbXALf8GmdgVoFDm94HSdbG6Xa1ZBNiSnz51hj4NYHCi",
  "key23": "5Z1aJjhLJqkNQpo2ksD9K6ExhNESyyENu5x539RDATjCKQarFqQ7GSN1kDuMyHc1UiaTRPrhFP1duCJUnJk9A97y",
  "key24": "3EmPLKHNxogwAJUowExXrMVZAe72p2i5QUGqzoJgZp5YpX6FGDNHCRR1FbBVhjSxDGfyXmeLgRP7n2MFNyX59v7c",
  "key25": "4c4UFkEm6TPcZtTKN1R5SzD5FcHzU85ab6WJnDS4iymmgUgssb51FjVi2NP3AS52T6qLvMRFeKoTov4RVpxQSgHd",
  "key26": "vqZcUUzSUhf89xRbP8MvkD5sKCHU5e9N8J6wePiAo46FnE7kaBJ6QKjRUZ7ZiL7yhFT9sTnWAhY4DxAwW4YfFEv",
  "key27": "5tC8TFuwmkiHy4hSNRCzLEoGty3jX6K6Weira9w7nKzSTsWcuVGZvWUCFLeEQp7ykcox374dHKmR8WcbPhpTRXg5",
  "key28": "44d1R9okpMJFR6TB9d5GEFznXUniQr8hwpxmXkWNocoR57NPFv5ynNUEYtVjjEma1oyXa1FMQecsaUXL8XTVF98t",
  "key29": "a6FusZ59fkmsgLhr6b6JVd1UmETU3HqmCTvnoqRLo82PXJoHkKDgDgRL54fxeneGzfLApbzxYtfdZ7Sq9AEquM4",
  "key30": "5E93ReU5W5myhUEtQp37TUPXRSAcreD8DSM6vFEvXkNWcJ1KVvmpPZHozZXHGqnu2N1YR4wBVQoc5th6AmotsVhj",
  "key31": "3VJ1SCQz6de8X57fjuf24m9ez3Fhsw99MWcGEedofPQ2TwJ9gtWEKU4BDyQbm5FmJ7EQLjHp7tdVVonTD1UiKvmi",
  "key32": "2o4nsQFtpKTJ8sb59anMzxJtrKvxcEQ8kgUoWXEN5dksyFvQuLjywoSwmPtuUVx5gHmPgCzgw6shpJ1bYa9Yrr1n",
  "key33": "k2mSDgzQS84LUUm4kjpRT9C5Y7N2P3Y1fBEVtp2rSZsZcwY6SgDQiJpTDZd4p4gbq6g2NQojxFtJmyLkQTPz6nK",
  "key34": "5mGuzsmuDDWu6Y2mWrVg7n23CuWMFboQkziC2QCagQZ9Y2eJpTNZTc83Vbf2dLHZs4NQ3pJJNQxmrq6fMK4dUETK",
  "key35": "fvELXHwjinj7V3qaKherMgWGajtAuHZgukBjGkcrX24dZDPmHxPmDkah6QqxEwJ1oLFyhWvy2hKAdbBxoENTurX",
  "key36": "3eYQxMz4GCBzxqZ1rNzM9pCpc3e8G6opE9JWG5cwDRrWBCGWCZU9hsXaP3gfTGYhrdozd31zWUTLSBQMvnxaD7rN",
  "key37": "3iAwQNZRgBtewkv4fQKo6X2beBKrW36DCFkR3Mjwsh6RdQXQokvus69xc8z236fTAyEvWc5hiWpnGg6ub3vc1CW5",
  "key38": "39Ae9we68ts9zRUdwzQUEqZJgRdTY3bsqkTQQhmPjLjRM1s884cxxhSsH6ri8PGkFNRGmdGwx9y48qimYbnvSvVj",
  "key39": "5K3dSAXJ3z92hxcdaq9Gev1ME9yvWmihWv71r14SLCQxvpkrjujFQ113bUNskSzUVony7sPW3gLAgpafB7RX9XeW",
  "key40": "2SN1kGcPCT17F3Qq7dMSovLBbubeSg4bMKFvZZujuLTXGAk6WdpBQVaUtooy74CMhVFAKimDLzTR3ZfriXE3RpVo",
  "key41": "2gc1TP2Lz3koAEdfdjK8j3g1WicXxeRZeNNQBTw7PnoFgwkCcyCPJkrFvLAu3HYkCGRiGe4kNnYUtBK5WtegB3au",
  "key42": "3k1J2QrbdvCNxU7GMogsUGTrBk17d4QR3ZeAq8szY1fYpfmEqKVjEUxeoA8zrmC6Guyg6wsX5ApGxAcvMnWkH2f",
  "key43": "wMVn12BWkBrxTKuoqaJTCqcKzFW8NJdwXc7JeXhDMrM9VmWBkPqYTL8rLxbxscgV4zDk6f5GQnbEpFmVEZyGMZF",
  "key44": "4LozCBgCwMGdqLFRdccDQjZ7dG5zZXJdPgy47Q4pubrB5SD7L8vLjiGzfB6ki5PoZHLFZcMnk4HSoCCpqFsq7Ti2",
  "key45": "eXpRc7iXzq2yDkeUvjXQgcbcx66Y7kyVD842jFdSgdUwJV4FdKUPLNe59q9nEdYKZtHzzQo91mrYb1u98ZEDrHm",
  "key46": "2Ww55UR7qdh9BXEXmNjMf8CqJ8snyWjA26PKzYgchyGkpUyoMBg8eDNksbpRk1PYyavc9A6Bfth4rtv3MAH56DJX"
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
