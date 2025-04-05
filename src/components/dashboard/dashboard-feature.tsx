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
    "5PcNvuwqJLrvFkAfAXrzjkwCyeHJJ99iwWpdYmwEsWMaWN9dvZhZrHEGLH2ncjybzQ9EvWTKfagyozoP7xRLMob5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ejrhVYeGj5E4JjdxxsyXuKewm5oZqCKzcZPqJuoDVHbmiQDaPCyYMs3T24wyXRUSQueKxiRuNKZULMVeqHMmVrC",
  "key1": "3tTnWUhNX8n6FVUKqNXarEkuqMgVddx8uubgVFbN23xca933fd9inM5VmyXYKqhyvfiwfndL3zdVfajUVvqtLukM",
  "key2": "5C2pMkiD6gt7oqRwGcyvmxsUZTaqQUD9tZo6L69nhBkiwMvKRWwmQYESmZDFqzkPiWKXjy6UnbfDUQfqQHvwf9zm",
  "key3": "4rYsn9ywQ1hEkTmTn2xFWaDd661jpsXHBoJA9w1QU6jnsQBqRZWPRLCFnjBViDgacbyMUMqjU5FCxvULVLgfNcEM",
  "key4": "45cn49C7fy6ujREPvH4ttxchfRdKmvaceRJPbZCdu7FLbigjDJvB9CH6NNQ5ccXYxJ3p2SMPMzdHkNHxCXCpWCeX",
  "key5": "3V7mTEf2v54spfTqr6r9RCDmjN2SvCGe6QY6cey1Ub7syAA7S9VKrMipem1esXmB3ePiwN1S128dFe24UegeGHcn",
  "key6": "5hBbXBgr9Y8cArEK6tG9f9DwPrPDgK6GMrM7DZuf9GSRnvwx27MpHi9STKPNiL7E9W6Xmt258X6ukRv6qzmB5tMA",
  "key7": "6468yp8fiyas8GSipkBuV9q2Fy64DF3dkAhixMHyY8CJg47R2SeqeZns9QnNqutxbhaxL3wJWwzNsbuaLAdKyxAD",
  "key8": "4FkUBdb5uPSxmy2eA3fCni4zAdgsFRRR6qn6Rj3DXKyrcmfconPRrqZpMG6SiXdrsS6GorTB2uf2KKKH4guaZvY1",
  "key9": "bYxCX4SHJgFRs4RTkr8yi9bMY8TdhEsTdFo72x3XWeqE8jSFqMUdUaV6gLwFFC1hL1ZfiawmKYJcX9unMkJ8yLf",
  "key10": "CnU3aR1fxRGNYJaFB7W49yjJ6eQfrFU83vTRSEWwxecVStGfDV9Rz1p6pvXkrUvpSuNK8KGuSJ4PHAWobaoFnDw",
  "key11": "4PWhWwUHqXfaVufM71QQ9X9ELFk2HTWmkFCmT6nnTEV3Vbuujxbi2R9L486LZZA7gHy7f6WzCyUmSqiDEXKh6CQG",
  "key12": "DK854Hhb3b7Qp8Tvhwhn6vVxBugMo6dhAJ4CtmWPK25PkRRXMHpqQiUQFY3J3cQw5QwjxnwAwojFstfHYK3hxJn",
  "key13": "CPdL1kg9pFjwD4byfz2N49Yhk1JAtKCvuhBxNxgM51f8xaABwfzveckEcR1PgiKwZDA4vfzHDYj5dJ2gj5ZGMwH",
  "key14": "55XGjLZ151tcCthF7hijgXdPfhYvk5DeZ9BAPHKf3UFErAbA6cPxHh4t2cR1M8CkDdtPiygjZEdp3Q39GV3RNquM",
  "key15": "7GRVnxGY45cE4EgekzpG9bzoSPrLuf83y9GyS9Kuqupy8dbJBpv7jTxpeitRZvtfEmbAqMgDn7bFsXSfjpZ5PDZ",
  "key16": "2smvG71Y8VGan9v7yZgaeLBAAf2tiuDCt21XaPN34GwQpzFwHCHvXREouih26bcGP7UEbh2wEs1X1Z18xnTrg8NE",
  "key17": "5dXrcKqHxjYQatT3BnMNGDqdaaE7meuFQVSvhLjndRU8o1hU3re3V8Jqq4BZ8JsfkWgT61Nz4E4feVqcFRuc1Kda",
  "key18": "2wvUqyX63xoyG5E7axoB5nir4bQnemPAH65RUB44fmQa85aEq9P2ADvN6xWkrMExBDHZHvFhr1C659mHSmUhMTQF",
  "key19": "25BdTZ9wJVbgCDPkZXQ3BqF1xThnwdW4SgJz8kqCT1ySv9zNM6hbsdHEL5jm9tzgrBZCF6d6jfemHRswN8GQp7A1",
  "key20": "67KTgg67eA5ouUTeFty6fGebK35CgzRy9WZifygBqoUxuHpfk8zjtbR2riCZkHLFGdD8hFg878usCX3qGy1pwpHe",
  "key21": "R6cmV1JHh4kMRfKLSJ3aj3eonYD4CzsiGFiohPsLLPJPKSkgsuwPehYmGQoAujPYech1D2Mjkk43332NATmEmgx",
  "key22": "2NdZYVHb3qQSAs3vS3pVwnbfMNZJVGJSbodbpAWZ1Wo9iF23iaCcVUeU9sCxBSq69XJmZkqrnLVnLiTTwnBF3iuT",
  "key23": "3cw7YwhKvbsWu4SJFA1nj5mcjkLL2QgM33qTc8c3hiDRZ9hj7NEcxAfVRCxfb9BrqdLWZZmc3i6wxjLABGJ1m86U",
  "key24": "4jqEEHuMwSdf5HRCtAz6cUbA8S5E835kGXEGPUc8fAy7c1LHXcu8TqRiWZonR3qVsreHf9S6EtFcwBvDin5zKYvc",
  "key25": "4bSau6FPMAU4taXZAB6zXv8y9e5QVm6pWhBeZ9B14qDVJgwqpcbqfRp5P6PdXRgZHC837iQRbk99Ac1fckFGGgNg",
  "key26": "3UXmGJtjuwTuyMYJhfLDa9kQXTmnCu1GrjUE3KEAbPm6qZQCjhd3Cuch8P7VWzWMz6g2dKyJgHodyYBWBnoNjXao",
  "key27": "vrFkT3A9qbMfFfMmv9hm7cDDi2yJMvEbEtJq9G2k5DbPrVmzqCeENEVu4rzrxMwAQbvd4quuwiyMVRkonGHr5Lf",
  "key28": "3HLvhsaqhKxTjU9jwJv5bCa7Wxfra2q8rAnevBb1CVdozSxgELBPjTDQdk13uYuBMh9fVq8swVms5hrscXphMTiv",
  "key29": "5uw5zxEgZnPefsZb75aHKYN7TjUFNHNHhKFWXYCxgk5HpQJLa74JqaLSZkVGLU28U2k7Zfj9hNhZJuJZtTPgt6Th",
  "key30": "3xBpy2abGMTYgbjX8oFC5cB5yGC4WuSFALPmTDQoVeWvswj9V57scccYyQR4m4iWN67BuR4ZJST2TE7kvzBH2E8A",
  "key31": "2Fd5zWFp6MSrrm83RL6N8Gg4VycVwPHAKAp416mVsQbD7PHegq4QpYmStaNa7QgRHyQBoVwzg5jMHYk3CgoFxjDV",
  "key32": "XzXcbgdhvqieTMLweTfeXLfWxomzuqQ5uw9sFCEnBbVckKemAW3WpAkEVMMYmoKHRx2YxDTdjhf7goo94XtWVnP",
  "key33": "5sXycHzLebv4hhmWt1yxMs2qsG3aNFveK4YzybSireXd2mimp6HdAjDvUccStngptgCbYhkJn9FEx7sp6Ddqa9yL",
  "key34": "KdYtcDmvb4GQvexrzpZ4ZTzVQvMYjRMLnsX7Rci9ZXrRtiADJxzYAn9fPcRxYLYp5u2v4a8n2duNAWZGjefsbxB",
  "key35": "4wkJZ1yzakzvAXzz6qopwgGQpUBkDfWtKErGQncC1URuZn493Zew5GNZ9XqkscFLE54sx19s3FMApppXg2CZaE9U",
  "key36": "57fSxHYYKcYpK3BZUQb88iDw3GAjjrB3KCMQnNzzcgrT8i6TJJBJB8Vyt7ojckAeZFEtshNSenW3G7kdrPLUDoGh",
  "key37": "SfR6FUpNFWYqhnTGSwv995VcD79PsUTQqZiqcHW3c7HuJfhnWWhXcgkM2MmsMUbr8UNmrA1FUPWSGoxum63AFW1",
  "key38": "3LqeM799dcUbhXJJH2WFepdrfe2M5HPyDLF1ScXSmUWvDLM5bu7RbHwHM6ftyQCKZic6G8dUutCcLYRxk4mqQwpX",
  "key39": "3KExG53ofU68H6kZ5bmkn7fcPgqFFe9qNvrCTCEvFBE2Cwhoiw58oxeGHiNohE2EKAYTauZWiJmXpp4a3cAddejT",
  "key40": "34niuiEmNzsoWqVy9FWY4f2VPgoMQ1EuMQ84kckeAEhtUBZUP5QvSzdoH5zrYLyG1NYH1DD8cAjVkX9gq5hYMMWF",
  "key41": "5C2RqqyeT6NtNiNRA8cootXiW9iAeqC6HAx7KBMMJK9fDanExCxLoBdRrD97CBDW1Zr4GUc1zzLSjy9dYodZbWT9",
  "key42": "47suc1H1VgGt8cuymzySjfGkf8utN5HWfGd8ihKivWEwdVjfzQHsMD4NG3ZYy7ZQvK8qrELf3DjEADjCcXvRGvRt",
  "key43": "2w98Kzb5nUtou8rEpU1YJ4UUKzvUsndYbPwoW8nnahVCrqA4UkLrrq7xkFC8yidVnH39yznzJ9mevuWLkCgnuYaT",
  "key44": "3BP7aAeXDUCr6g1nhFkR3ernZjjirvaUvCC4gt8dDFaZNZhMosKM43XHuyTNx5LsVQprjLNAdjx4qZbGQ1pek2JV",
  "key45": "5e7MMWTtTXurWvmNmVTeEdkGAkUoo7pwHbU6omxnjeqi1oEgzs7YZ52pPUZFZ57dWixeUYWs8VCg41qhPqGSBRUr",
  "key46": "3XUirTJrWdd7JPRvrPvnx5k5JhcE2hxDGTUyAduEc9uQ6Vyk2WfQiZPVmV8ukRwMi1BGm67zPaTjt3cAUsnHNu45",
  "key47": "4cjRMaPYphHt9EJNfEfQ3fSZ6r1dMJ6SZgcPfaXfNwPZDaFQ7R8vmdtmg4fVuPbHXx3RTQtggjAQ4PzjqZUZcJ2s"
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
