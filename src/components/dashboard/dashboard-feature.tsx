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
    "54erK9XRpjpeXackV6ix3X3t6JHxHbvEq8iQ9XVaTWmaDf3Vffg6UYWuMtFrcNmgWcZ7qq5ys2ZjX2SgTgQKbSGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WHpf4YfRYMvCBWdK9gBiTdDNEQ4xX3uZUGCuJWJuxdRe83Kwr2ypQFndBGSKbuUqgLzfiqqPUNWBHuBtoqeNJtu",
  "key1": "44pAJrxwV4KZEmA2GLwxQqTkBQthfnSCQr7h1CmWuW5ryTyATWZie6eMci64RQowZ92Yszo81eknuHqHSSbQgFwm",
  "key2": "4yKxJGwhkVxpBvK7dNVw6ruUgedbLTuyjh1jQXifgdefSsXBF5sakc6BznMsvP8RKE8tNJ5bcUa7WGdArCGxr7QV",
  "key3": "5auSaVxVqtA7WJ6ygiB9xL3nEWeqhs8vxHGjo94JCoo9EhwktDXnNbFCr2JEbMm6zaWFeV6fMxgVWJVCrgneFrdR",
  "key4": "5xR2haZMcivs3YQvwE2Y4CqjxA4VYwkwWBmTzB8ZurvQHHH19Dk7WL5avXCCk6isaBnYjPajSUTB7kkMUwRkzBht",
  "key5": "2Ut97N5nph7tfqkiDycVYvKjDW6RqVofPidD8YFBGbyUjcrAurM9tbNstzmULWn7bpG994NczJvH7TLt6QkR7LjM",
  "key6": "62McFSNpKmUaizZ9sxdGoinit5quq2Mrn8nEv4qur7mA1vj17b6dqc4aA4oCJVFVqtVyntjuPAk5kmMZ5RcSMzuB",
  "key7": "4EBQiW6uupKpFGgizLHkAKpbpBVWEq6WkH84Q2SZdmsuacNReTyMCjZesRZjbnStZ2GSofYqhBp7g8oDm6XXhkUF",
  "key8": "kf7E26aFvhwVXCRzVCzZAcVJhnboEnGxstB2HqeyBkjKSjxGGD9G5VcnFWQybqDi4UevZ7RY7prNKMAsSs9oKDS",
  "key9": "9XXVvogJMNncHKpEESx2LzK5nP5ADHbgei9hFPjuvmJrbaDRADJ6jFKNvFg883VkaUP6nJnmdmGAtLTt8D4YJSr",
  "key10": "51WrBeRyAwJT6oPGrpnj86vjoRLvASuditQV4PFnf1TE2cdYJ62NpDNfA2tXGYGJAVCcSojgzg91zvi2zNtPKh7Z",
  "key11": "33v2Dyr6GSyTxRfCZQLZQ8WGKymToifKwLkxULq2e2bVy1P8cEzUef4y7xu43hnpD3HSfZupzmuK5m8CfJ5DJQhG",
  "key12": "634PoWNVu9Mya2iMBw9hZVqnqw7YqxjxGAFfT6gj1qrpiywjhyqueJtWFSXvpRtKBenvScaQuLunNv8TEyzZGnRK",
  "key13": "5mLnAXm6krMocufkcgFFdQUME5siQSQ7AjVhPgVMNVa2CYmMYnXrRqakDc783JxuYmrLzTErLx9EyAi2Wpx4Do7k",
  "key14": "5y4UN7UrUJXrrMTDuiTZMikz2djFiDN6erG7uLcnynsBV914oSJoQDUHQSVh9eVyXFVFnxAAAugKysqZhNvC5gt5",
  "key15": "4BWdbC5acrWMfQufFkS5YFTPr3syPQoof15KtSW4aazpxqxPpkerm8gdqG47YPxmGWWYpifFGiS2Bo5wzdrp7jF",
  "key16": "45ckzdo5qykXki4H4ZMFYWZg7rdEax7dyCwoP9x6opGFVCdA452GofcV8FD9Uf4QeT51ypmCwmVmU5xGkz6kri34",
  "key17": "2Jmvhrm7SemAqi44Krp3zUvyP1pxTaCj8AegiDmgZb1MAqhpuwz5ChiVgdC4zuhh2EcM8CBmZh73hsEfmvJETx7m",
  "key18": "4cRtSq17HcCKSYJyR21ttMU7w63ETwezJCY2ZCKVp2bYzBq8mSsfKxcWsUxj8m4dMYMgxzNVJ8jzM6aCC8br4HJa",
  "key19": "5226RVvPAGNzVrCHd4iSGMxZsu2V56RA855aECcAJHSkNv4eqJZ9k1DSQXzh5HAxEjcxe27easyfSFopne3YimZz",
  "key20": "4PpeqPWbmdJDNnDisq9p8DrgMfRbzKHCqpsWnPJDGkcLDQQZsroqb5BfUh1y6EFJRQpTgbF7BqNNs3CkAjQLCdjy",
  "key21": "5uS7RBy8UkMC7adE1CjDeTHGq1CajXLHNp4hiwVoL5EMYRkPQbkbPffp6Xu89moMaYGjkrXyycmkEW5hMhKnnrVE",
  "key22": "24JE2jqY1bSoHPTrgRmxj79yMN72pz7v6gjKnMF9aa9j14FbtKR8tP5pvDPxEbDuKXDmPPBtCFKi97DCbDQD2xdp",
  "key23": "3yboh7ZT84eMNsrAvXCz2CmLm9FcLuGCi78n4BqxUwytjJsGbG5cpwW5CBuWgP7BPzc81bmwm8YDGcXE8whQTfp9",
  "key24": "5ewerxgqCJDRQbMTgugcJLTbSmbCrY3pmKJX2BsjSEUWPPftrxECPTPF9hxHG9zBUCoPDDuPfgmxaEg2fNPNyDG6",
  "key25": "122taKF4nBTQcUPTSxZs9qJpXZxKvhz1csA4Bn34NVmuNLeJxhb6tBLF8hKLG8ZUBMRqYanR5tdrXUcdRiv1kVeS",
  "key26": "5DyAmpUsKNxDFmFPVHCpWXiM9jJgakxRTWRVQKAmSL4p9h1NtqdpEaQDVCoyriT7eriVLTX8NFiXYSMYMzXVJNw5",
  "key27": "25B87nrEGopRhSBVhLDJMgk35RyfTBoENSHucriw1oiVgX6XaT5XtEEJxu2vz7UpjLer2WNkgVGr4LZus7pBg8qM",
  "key28": "25ibiumB5KZQrBtx1wPTXqzuB21ZH5ow64tRpt7dBeGHwPsz2R2ofcY6qeMTNyihvcg5xb2iLbfBUEWQ1Y2tPBpU",
  "key29": "5nkQRuN7dux3CQ9K5aTX5bxY8HhtHHGUgWbD577fgY2zG1iMWQhzTMPoCqs4unf9w2eiXqijBdy5zyrbXB2oMAGh",
  "key30": "3HLWUFPuxvcJHLziDSFD3t1RoMjzxmDm8xsdAJ3826W8c89vZnZVMUPDQRNamRwcqfu3PzX9jacq5BMM9mC62B6H",
  "key31": "4aHa3yBmHEEfDeqszF2raNv4QP87ZhkLYTqTkvB4dTaHmMNJ9Y3GLYsAfSFSFMJqWfjMvYCmJakwVJRagLHm947",
  "key32": "2yQXgDQeVxodLyb1t2skmAMfcDKruZ6fR76VYvwHvxgCFZWe2MtdgpEcWi2zZfBd2zPmvqZjYuKeK3etxbBHAwtC",
  "key33": "2R1WXe1CrV3a76J1p3jy5PD5DrQxUKpdscfXGmvbmSppsRY8Hw1iRZabW4PXANxeLrMuoBa11bfSCd8fQa5EsMNr",
  "key34": "4THiCgqze95L47gBDcaPBtvq5q6RKKvVLCRfkb84VSdfYLGix9oNXz7YbcmvdgDG42H76tTyPP288r8uG2hvZQY5",
  "key35": "TLxu4xYiRc4L7T71A6hLpYbVqbUuRFsNPuZSbCcH5fMnaSyh4D3cEDowwwjqHHUY6teqNaXFjA2QTVXg1NXPNfm",
  "key36": "3Ciw6wKhNvimBTZA7LNkNXaZyR43UzwG3yWcrnLzcDw77tSRVkmti6d4GTmG2xURoat4x3Sb4mMNvWQCsooE8kTn",
  "key37": "2F21qnP4drRnBRH9yigqSypF6kBvmsHfqHGL2yc6shorDiiBK3m9qvWcLdYbkMTQrmmeyqsf5inSx7SuDaU7NEWv",
  "key38": "5vDeAG7NPSdHMXXhxURNm7izN7hGo5HJEtt7aAJAxyV9zfzd2p4n8ZujMnhRSA6cz8JzYB3os6EhDJXdB8EqRYJB",
  "key39": "5JBAa4BwohZuvv5ebdhTE4z476DMnH77i2bCKpcHtwvNLur5tPCH1kcFB72hh1XyhrPezikUUXUoWPy59NJJgv6S",
  "key40": "QCoctwB46odPoBfoWva1WxEMon3aNosbw5xV3pFMq6gGn2rXjCVWikofjkXGwb2bCatSd77fvqRGg6vSoavPLGn",
  "key41": "4zDAgrgjpLNepiiJuN4xqdo6S8jB1iVuVX8GTkWYCNAdTY7KPy2P7aZh2wxSZLcP422MSZ24yKBJyPKuD3MDTFdW",
  "key42": "22Eiof1knxZEno2dpSqUzQDRcuJ9xADKJyMwz2bEHupqEqKo4FzVanJVZVrteni53tqmFvtC8X36pUoDoQKXWnNf"
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
