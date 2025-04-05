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
    "RctQnpDk6EDyCBJPhTqND7qL8tEYiGthFHFnTE5B4nZ8EAg8we5iq88ds8D6vsqSUX3jNEkr1ED8HUcqmUb9jpx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CNecgppZA5B5bZbFucjA3xQt7BNBfEh9DjhTK6pNhorTaQLS7oTyRUcNzRuSrcJFoUFqNB28AnJFnfiyvku3w83",
  "key1": "878zY8CQwBxcN85QwgDJFChMsXMNkyZQ7zx3disAZ9JEVDdTbugeYP9r5E8MGnjm3MQnJb6WHFZmwbVpVqTdfBx",
  "key2": "2JUixU6d6ipuK5x6KZk4C1m5bKSdzoVBZVHEKkWKDceZ7rtb9qSn2rxm43bgRX5jjDk6NiLg8hJotuZzBpR6kGmq",
  "key3": "33WU7JJnGu1UT3zW8cn7BH9y6mfgetvH7EXb9HyL55qGTqNH9CZf1BYgHndrx8rRMjHuDS28cwWahfr4fTzMVasc",
  "key4": "2DDnTCgJpVD2eQAMR1cE2QLvo46LJLByt8QVAC2LZ96uaa3XpvsDHkhA6eCjzwprMsJinWgTcma8PijSkunG11Qf",
  "key5": "oRbJx7sFTHPuiS49xmSDvjcxCMeQ8SZZeRwzSXk8JdHxotjXYsePEVDrPvTTpYsWtXpt1b1mgFXbVa49yf2WaAR",
  "key6": "4Av6Tng63DUu2xFtTmE4ySdgMysByBVG3PZLm6kbSfE2fTcZRsvdvQFyaDDZijxmT34x7VELuoNDXgPC9AKMQmTA",
  "key7": "45Q8B5DtUwRBNA9Xa5Vovcqbthb6HeKZdFPcvrWBwnTf1g1V4z71g2QgDS33jBETzboC8uhWbQiTfpNt9u1HzYuW",
  "key8": "g5yyHZZzcPnzpPFSRaPxDwA9JcpfyEy4emkEj9gbosmcPVPLSa1S5fiAhXMBsDrvZ1NMQ7M4Gk67AeXvbZZuiCQ",
  "key9": "1x3PCExxdNvzjAvCBY2z9Mpe4mRAVsiLjeWp61c1VKbukWU1ufMRbzkJyKuTFYTqBnh3RnTpQnrVQ1TwkuGKEVN",
  "key10": "4YUpXpwWaKZgthfx7NGBS27Y4yYFd3faBAKzgNYhUFHDNkwEKARZkt1BCoTDWWiU9twLTUdrDA5TKkGZCn7cEyWW",
  "key11": "W9FDR1gfsjCnVzdC9Z3VLG888Y2cWkekMTxFBTMghP1dD7TYaug13hVKJsEc3HAWimA1PCQMoQggrrESjvHyA3i",
  "key12": "zfvS4izrqcxnhdcxXwrV39LALq18kybXXR6PUDsKLDA99btuXfxNMxWWonWdZ2LnCTLFum39k2Nftnbu6fsHDtd",
  "key13": "3muDaeMHuu4YUoKDUHE6qptmx1jxQJKiYgxFgCZgXqZRTkyLRydvDyE3Ks73FhnEksjGqp4uCjns5ynkArPZGNnt",
  "key14": "3Bw1Q2ctfXp31zRWc8ydmJUVmnAbjPoNwzUmmQbHhHyivTpm896im9Pu9pPKUZUJdHJue3tXgaWrRXQiuZzf7GDF",
  "key15": "4SBiAGsQfbVouzbFm6qx8RGRTH5dqridAVXeHAH6pmujUpsUtYiLP9wPLM3wSPAfZ3Aqubg7QrGsT2M3Ko8tW6gi",
  "key16": "3K8wV3YUfviLAJfixvrNyZVGv2Ydn6ikppBQ5Tb9y6p2yA4bMwwAPA9YmhKnKeqeRp3Zy3MDew8R3Z1exicKiTfo",
  "key17": "3v4entaW253ixiq7reChRc6Pnz461WX4WzNe9jqcfMnPfCxZEYRxjEaxPiTHHLFAgbijEEEgiSdzv5XrV7qwLRKL",
  "key18": "3YyUE33kzWXhUQR5CXn1dMWRYbzjEJEz4BoVyQC66PtYWCMb1XmDGKRaXBdtEcFpUDNFiHmNbSvb7oti7R8wRbL9",
  "key19": "4fQw7tYjxL3PJotSnechyWgZEvXXA2NGxVy7HEWRLgMan54SuGthYQyc7zgeUKDkcnLXskQ38L6DdBH6fjRd6HKo",
  "key20": "3iUxyfBeLonAQxTBuoJZoHSzvnKeVzWS4pPtdNfXUffVt3JfCQcKvSZZAYwQuY5dPMvVnHdECj1riNpsrWhUvWPg",
  "key21": "4YaReNSb7rRx87pgZMPrpf5NF1Cd7hJvu2osAZ8i8yUGVv52FEMZwZucNCUZLHw7xuHW6x6w7PmzQmtB4uJDJBgb",
  "key22": "4TYrqEqi2RaqmwXWbUtf6prKjf91qPHvQcPRcdg6uTngcYUpW3NvX4c2y2AbMN7fwNTegXPJj1bDdKewLcVLdLxV",
  "key23": "srUT8kkFUWvgePVWRvnwZBLQvAkBfNQKG2ZafgHoDyU6dSYJR53oiDsWWRXzNXnoF1zvNX5kS7BxQmhptPu34CB",
  "key24": "2xprFUXHcwyW3RqN2RkuAcxiioEKo9X6GmwwdWEPPudwM19iwqMHMvmrNZCQa4LXf7VR7QXSAHU45LcsvmDhEb7J",
  "key25": "2NjendyCLgGiJ5DXdBr9az9AMyeCk2CZFgfCvcESUZZnV437QhSjBiZT1HVJrR9VeM33Gcv76Nc9F2yLGVhWvDyC",
  "key26": "61mngyhnKGSp4UFUcRXHxGU3FEeCRMQv6NxET4FLyZpFsoiR1HSv5AcVwubriWCZoTGS9R1Ws1fTfGYavmSiQGWA",
  "key27": "4BbbEfXtcPdn6yFDSzrXWARpnCEYfb8zQSqewFYouTpWqqUkoAqvhwkp78k5hFNoN6N2ytPM2VgUbMLVLTVjfQU9",
  "key28": "2xBvDkPNjaxBgZ7qnKDCdJpbzzWNh9Tddu3NpeY23q2zqWyKzLPUWXFdccZT2hYedr9b2aYJtooDrCui6UgdSTTW",
  "key29": "NNGAGqqByEZR2wkx4zSXRBqotHHdMrzthqqmKsRSMF6LcZcedCd2CNtLPZxMHsqEBXgCgmmM9AL65ygpKzgeii9",
  "key30": "3LETPW8k7RMMbxykbUPprkZeeBioQqGjJqnQyHeF7qcB9pRUBGBaTdRqQa8Rt4rbtnVYaGfiPrjBU4S2MMMqsqUb",
  "key31": "45qnEnnzRiQAz99V4P69QQvxtKhPZqgPkDN66CCR5S8Qz7bh1C3ypAYUwbZNTqJvDGGBuauh13SQYBXLEBnrKAXT",
  "key32": "5t8JpAk3sWzPmWWUgL4VaXhHpf1sUATyCSQcybbbX9MzfuyS47zganxcvjSbMUR1Avp7V7mXoc1teaaDy5ukxKrc",
  "key33": "5aTGC2yXBcC6sEF4nDJXz4W5vR4HBQshD5op3WxfkSH52CDCTBqjW2zaEEWkjRKy3QT9hSJtDJKkHLaW7eRezWhJ",
  "key34": "59r3yCMEsEpuxxs1XkxPL8DZ4zUfJ3Fn2LeudHbVFSKn5sNiek5jabmTuVvZbuewWfMwdRagU1YDKTznT7Wi7GUY",
  "key35": "2a5EPs33BBJMrZADtZWWNpcNEcNYmiY8kxT1ti2567zt7VeJdaNEoQTYoxCEi5EKt1Y51GoPxGTLJp4MNAuHRejD",
  "key36": "3nGT2e4btupHCfsuc2BLmGj8MJ55RkfLB2zVmnE47h6sbWpJL79NjvvoXuHrNQzeHaxp9E5RCovyDTh1xgCj2Rbs",
  "key37": "4CcpqLZPGELMTWkufGPsDFPVq6WALRpjRRF9y1aVxn3srKPUkr9EzDXP3Nzb4z7rLJE2yeYeZNFz6f4mdTJBAXpq",
  "key38": "27TytDpi4frUGScFrMfWiWLa6xKTzQSkiscUgsuDrSHhbPGjd7t5QB9JXfUTdf7mXHPcj6KSMr45v9YTfzkoN2nk",
  "key39": "5z1nu9w2n9bQBHwR1kVPEaebCgKUgNDKp28kKQHEEm3cEPTzEmAHPFqDLGRx7NpKnrH1G19Cx14ycL2Nk8ZqnfSo",
  "key40": "a8zMao4xqqWf4QkPYUJueKdgQmA2nJ1G6LHmsovdQDvt5hYe34HLjgco7s6gtUQknZ3Xd2ZoB7menxqEipZBeNM",
  "key41": "4bXUBAQq3Mqgcctw4R88NZoHVx53nWuZxkYZ4mnYqTCJo4MdNY9LA4EvhgP1tUqgNE2AgMbcfj8qmwzyFZiQEvv3",
  "key42": "5DW66fAs9C63HXJMZFi4ZSzTMAK8Px5npG93ouShzxGL87bk5iTCnwWZofAbm3mnmx4jjzQd33BUmxebsLi8Y4sj",
  "key43": "5MTJXGT2uQABtMmM2sR8UX5iXFPvg7srd7wtNmk63BeCrYeaF6ty3Xt6todDpsbBhWVV1jBZzek4G8iVXqa9nbSm",
  "key44": "4wrjoWkke1CSp1UEtjAjLTQBxAPoiAS5hTb8fHyn7rTbTCGpfjzLiSF9pfJBmxq7YFMyHdMsNBF9ZzpYtQZnk4mm"
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
