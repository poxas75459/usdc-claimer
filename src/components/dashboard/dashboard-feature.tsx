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
    "2FdcgdE6t34f6g54bVPogvAuAPhTeZ3PYk9AXeMJkCofwVnkESgYF6K8t4r4MvHKndyTix77kZeRtmeKrti8RUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64z2V7eRHb6buSTBcEXMWDrqRXMVqoh9jqxQTj7sfG5gWWkSEuVzDKraSz36qCoRzweDU46GUgKREaiwi8Mq8PNu",
  "key1": "4qgNqzgGzxX1Ces5mTBDJ6Zqx89ZKXsjy7TgaLhhpvFniBt66fYZK6EZ9kebUCxhYtQJ1jyenVycEKg8by4Cc4n3",
  "key2": "ewhSjgVQTr8o21DCXSuBa7hNDyspAUru6iYwLg8a5b8WCa2s7HAFXz9tiySakdRFvVLMJgbmK4rd6xXQEDSKzwj",
  "key3": "7uNz74JiFw7VAe1TADu4KrtZGUhL4RQCPxLJohZ1aF9BaYUv79HQgdQxLutykQYFwA1q4sXPSENcUxMWaVpMnXe",
  "key4": "5zWPUvHHhrYfCQhBrcrXuZb4FNNxEe9LgDTXsnZj3nKVDyVWS4iLdwyMFSL6uRFBK9by8zT1jYf8MQDMD13AKan7",
  "key5": "4qV8gxM7tYNbkH1LF2tAR4zdybMG2inAbSokSw3WsKESSyDiJbGbtBxokUwWiZwHEHmSC9c8JpVw1w9Zw9yP2mTi",
  "key6": "2Ks4MkJzEtbV2kqgaCWQEGYCvp3w794AfojU1gfTbDTwhW2BZBn6hm6UVann1ojiP1W4kokemBXe9gRsKt6vcYPf",
  "key7": "58HGTTC6dttA5zsBo13JXDTu6QiiYLf9pin8bHRERLj12zLrsvJ2rPDyCt5Je2NvsJ123j9qPNHyjxpwBm3uNwpM",
  "key8": "66bHV3tg4AXDBUcjskzt7Errph813pZ3v2LekK1c2NDKCHU7ckXUmXZ2LxiHhTHAAnwq2Nc7rgKMkFgf5Kxd6FZz",
  "key9": "23i5U7raeyB17X5372Gr55Mx5SN1uUiZBNax2HGBZkzEy6tYM2cYRZRZ2B7ZMuZFVCxmv4gA4maLKTpjcn4hgPvB",
  "key10": "5YHkhZDDHnK7tBYSgUiEecmmQyL9b3dKCnRGrTrkfbgJjGqLXf8qYR4ZJZZYyd5iAuUneqyDPxvLYcfrd4aSUsgJ",
  "key11": "28k2HkvV6jnLSoTsPbirZRkh5EvUhbjBKCdj8n9A9LVv6VA18ojE6vQGF3PAAEYQRndfvG2jtyKwYntiPhKdtiBz",
  "key12": "3kazk49T8UA1e3pSNcfcVN1W4v5FHpmm7hWhV63EzzmjVGJK23PahbfagVCdieQCa6sGNws8on6RAi3Vo25aHuDW",
  "key13": "3pnAjPBDrePdrj8xgurHzFNsumXhGY45qiyyHqJp781XJq1hLziRa7uSioku7GkStcrJzGB2gfWNqzriMRRP9ctD",
  "key14": "2oPzcnNCT8tt1AV5DSdktUcjXwmvaLD45KZzhbj8qXLridz9e32HA7SgdoUfyk91HuaPjwW8kEEv672wTHMHzfpU",
  "key15": "tJcH5GKWmCrbwqnLS39pL8kgUAXE9mkSebSetmzCg5gonEzqZUYTf6tihnN3yvqJbwriYbrW6GzNFEzZCX1N1Cb",
  "key16": "4UmT96Tx4k5t1LLEVBVrB8W4pbzav9Jdq1QoFHM4mbzLBGj3YEsn85w7FHx4AprhSnf2MypNu3WW9ru44CsArwgR",
  "key17": "5xnMUJxBFmnDJLZzuqsNcCvU292VFthqqPTU7pLYTAKMUZPHrYFtTodsJhGsZJc5tXXrKLHbjowmTbvoNvYfWxgo",
  "key18": "h9giEXXNSKEmveNXmMrB5sfWAZyJrwkHyYafdpKfAZ4jwHWgYFwGiDbcvAXYDkMJKKW6uM2SbHVm9bFkDZtpKHW",
  "key19": "SPhtJGU5Rs2A9NzBs7rsuuLtLT5JqmVVS82L9Jppg1uc5afvJ8hkMbfMb8yL71HMfavD1xyHzAyx8o8e2havMWw",
  "key20": "35ofy4QcpBcSJrJKMhxhgojkfWJGbWHc1quQbGDXbVLzk46yKxmpLJzS7PdpMtGSQqfmf8QGNcbe9nGAZ2ejTtyK",
  "key21": "4SBWQwJ1YXNoA58D4TyrcGwXbqMpXVPxa7H6E148qTTZ46uhtMjJ748ziuvXtr9KAbK1BDfrD9PYYRRZ8GnijHZp",
  "key22": "3w874tsjGsXGHyf1exi8zTnoT5a2BvvZLYzc1extUrHQi2k6BsrPA8fyQMFqNyvzPirkHFoB4PCHG9wLRVr1eBDi",
  "key23": "4QuyMjeEdZhYsGr289zvEeb4ep7JuFTWJbtkD8ZdqNT1iEecC6BcK8tnRDEk7draFqcAZhWEm4LQJjd3zvEcKy5N",
  "key24": "3eNdnKYK1rzc9ByE6kVzSSoMKGc7xRVgZmcL26RM2pbocgQoysEdUa62WKQR3F1PiD6Xypu9uakf1JWDUm5rnGy8",
  "key25": "fHrQbTcbzfVCX4y2AkTMnfQmW1RVkizpF2DryL4Jm1t3fuhw16UsxZVo1uhJUxiESaAz8rMvJp8qciFsCYBoQ1b",
  "key26": "5k5W4kt8mE5BYmZ7ewAoJ5VRHDSABEUQRtVSmYRuXR82x3RKLbJrXEXuhuPwPAQFTp86jA31j27Arq4ZsFBDqm4L",
  "key27": "YjBAonxqTdfgMny3ja7HpdTJbJbMTWjLzQxXDVtkF9eeUVqgGAr4HyteSSqq8u9HcYPHfZpV5uSrxqtSvv8wZP1",
  "key28": "4gz8sZnhvVwpXkc6mGnePkgCmgUGPjXkqmYPEjgvuc6C4JNWBzEqUyjQ3RLCKkSuD3spSWTA4TjKuBfsjmoCfqbR",
  "key29": "597dMbDzzpjuYNMqmfL4VtT6WuHqPQWVtiDWy6ACCKgUKpGNUHzukpHQxmW3sUjnJekAcKkMYjV4yhgGum2msMBP",
  "key30": "xFJZAyVYjkvj2PT34LojE1TfXhrFzpgfeGaa3JfovptRvTzXphGQeAmrAKB7votQQyFU3PQo5mBqphxripA44EW",
  "key31": "4M9fj1b89nwKqaB6wPY7HGPyK8QpYwWmGCUiMbtmN6z3FM6j14Y94aD7ba9vWP9yrwAkTFe232pYmYPEV7CJMmqa",
  "key32": "3PfYoRqgbz3RVuioLi8hpxV23HE9qZP1CgKVpi3Rz4mDSTDt3iCLBJJN2CkNSwNrWVMg2r3Jfntp64mE45sG8mEy",
  "key33": "5ehjvzpcgn7KaMBZcwNUDSYut83XyDMXeZNjaJ6UjfAfQywaGcR92p62FykPegs3PZK8qTXNiTA4MLtwPkUM3kna",
  "key34": "488VHResy7eCPGxz6nZwVTqz7MP5vysCTMRgYkNXorhzfy3Vxp2gpFGJA7uLJrLX5HB4iHsL59T3J7XBsxrBBcAW",
  "key35": "5UC9wCqLTuzKbZEiKjmagSwaUSC69g2dKhPxwN24SPk8FmhxV8gyBgoqVkfGo2KcCpfpStswLJtPcvfZqhZE4xYJ",
  "key36": "2R9kbwY1DRSqtKMvY48HHLwizdSEcBCcc7tjMzxBPPYWEVopyk73ssP7ANpWpAmyAj4DqAgWwMwGVTZL2MXDkVLq",
  "key37": "AdCr5gkFkUM7R8cRYxnYzSKbSvVrPvskfJctnQac4hZ7ZwT54N2xJbyX4wYNnkfmcvWwCvuWoMtXMzEcdmFaXZU",
  "key38": "4PiQ3C54zdpQYZi64AVeXLKXhCimXaRxE4cG1PAp6eUHoLmyez4zkDM6bKbEymu2AU7ugnzdrfY3V66s7uHSKrMP",
  "key39": "41eMArFmJGbjBK8Rp3qLjhWQr4eMX4NSAex9XE68fTVgDWLBKaptbwkSynw67r3WYNF3UDDWCHErQ7qWszMVEhr5",
  "key40": "3v3C5kSSfvWgnZfxgMxVNPQrZF2HTFeaJgcg8pgYskA6HyDSszTWMjbfE6XcXHSXPNoaXG15xCKz8KQ5KSnbZptk",
  "key41": "XEEXzW1187kSuYvsXm7x1sdohTLKiyVKWBHg1J7NVtBm8KvmekHUneWbeyMDSv4wExz41dxDGKGE6HzaaCpprFQ",
  "key42": "5Qhid32gNbod2rehSwUszUuHKXRLdV8S9anrWBvTxX5mf4HCG3dgK6E8UN9DT2pSXBgLQZcfTpnvqUEPQwuGYGxE",
  "key43": "3bYp6hJJDRrGCg8yxJocMtsrYcPTPwZVbofqrRmcPu6ybtQ5JGgAi3WfFMcX6vkQwXhxyzMuegJ3mXbvb5kcR8j4",
  "key44": "4aLK7NicRePYVb3pyyyFmYcZiw916Gmt4Btve1PDvHwLtUpawiGnFfr4Bd8vwnmqPxyf4HJ11AraNLjoRrP3WD68",
  "key45": "2SfyTyEiszp9Fzq9BPwMjfXD39kRZ27Fn3fET1dAgaTMTmsHLiQYjXsNRTbtgzSDhkJc9L3KuRWxyhFN8t7BUPtX",
  "key46": "5cddDcZCP8ssvsB9MsVCiYyJ5YJFXEkuFLk7iQETUs4VhrB4iLW82jHWCdgGGeq4EPqT5YQEHfZWNix7j5Ssa2rT",
  "key47": "4cmishaccEE35smzkxbdUPShmNEa6TzuHAbvb7Du1Bdaj5PkAEFadpw9TCtWUDSgPzBsjSaRRhc4ip29gaweLRe6",
  "key48": "3PmK4hcBWKyatdcEQVQiEbuwNLsEyu9HzxK1XRLBqLVvum3vgBPyVkcvA1mCF5udhpUJGdDZzDzd8amPEFsffTvj",
  "key49": "3hBpHuxCyk8phgwHpSa71VuRTDYgTZ4Dibek9HAXXTFnLvMLbaccJj1rQZq4Qv9RoTNfXNRYGRb6ZTk6L9GF55qN"
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
