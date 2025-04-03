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
    "3c1UgBJhGfRQHcLNnCiUKJ3LVZwWSg7JsZU25uFc4xSz4iXpCCokSqctBdJfs9C7sFoAVCA2YjL8xSkVR3MRL2Ey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22G3a6DquUJZw852wGpzoVokAbh3WufS15hZ2qo8DWBnpq2CPvmFv6xHbDBSpq6gKHHVWERfaHhhqmRVhd35H8RY",
  "key1": "2hAeEaBnj1VaRhg4oJQiKpRfEBnSSQoYD9bBKrGP3MMbv3dGtAcqsmSN8A2G3yQR2W3wvCfwa6f8FcSxRiv26V3C",
  "key2": "49phAMM5v9r6a3iDMZqsxY5kCxTka7YxhHBJ6UoRgaRJTpqgCJw2iVC4JwuatMCRNP1UnujgX5zq1XWQ7HZ98rnw",
  "key3": "3D1Kr2pFZLCZiCSikENqBVKWMbT3m2eSZ1de2TTrMDZmAjkzDGT3kqw19EvES7Z5Fhki3Z8nijxFXYLsUmAERK7Z",
  "key4": "3zBrZtJAnKS3YPG7jjQe2pp6yPaHULffPF7VvycLBPAGov4S1Gb2noNXRrgzy1viU7N5dzZGXhneeXJzSS4PfsXS",
  "key5": "5V83DrR26FhDSWpMQTXgZopHjQr5fESW6zeGW82PE49CdJRQfT6NAV1b1TxN5SJnXs65XMEY71d2M9HcRReog1xu",
  "key6": "5xmTqoQyaoHRyvqabJHyQsqJNaywRMYm2odnuwDb7LbNiVZY723ugse1Qye7aSNfAAdGmHzsgq4Xdsq5g7xwmPBK",
  "key7": "5yP7EzyhBZ4BXVv7uZSWXiSxv8hKCvFtm2ATmtMKVGVwoevkGJZS8rBrF4XuCsyEtE5fTe5M2JREdBNtLU9MWpA7",
  "key8": "suMtcu5KdePGAjKf1fV9QhdT76C5dXLhDHgKy2NQT66BxHUx3pV1Ur6bxfDYWiqKiZdN7FhiC1hfCJQmbac1uKN",
  "key9": "3p7FWSddBQTbeZXqAmby6BBmLLMetgxwksf7neFC4TCEXLSJyahAc9u5yBm2Ks8oCfHUuzfmciLzptiPSmkzEnLA",
  "key10": "2yyR9fyjYEtWKnYFAtok4x7PT4hBuW4GcZA6WhgnBzCSpuq3DJGV9fQUN1nFRA8PVVTGMcieLywuxVB72pLe8ARP",
  "key11": "5j1VjWZUGjVPGbAbcLVqJeVwgxvZ738GAyuoxS8s7BiTXkBZKTZfFpGwMvi8GLs6rrbRe2a7eB3ZitAF3xtwocMd",
  "key12": "5fXx5wQasT7Vya6e2nzHxFqHwndpucLcdVG66QyBDQZME478aozqH1mFkFHCJbapA947azxNhBVzZ96fGHiEDwC",
  "key13": "2wMB7zUVfHmQue4RCfsMpChdReHXDscyiHYLB6m8WdoSuV4CmqKBxg7Qb3crJne1dBo46cs5u3DTj9oeLPYY9XQa",
  "key14": "2w99vLbpWUDKrCGyzpVqEHFXQu5puKtdEst4FgEhs71xQtXUbBhj17wCAqAaEUU6VphXYhASJH8cvb5TWXUxBDof",
  "key15": "TCv6CQB3psdkobj5opHvruiwRfBdppLAcbuf2qKKRGfHXY3Nu1JjoFBZTt8xnRzkxnaFjPYTvRCaDcCiRj9y4YH",
  "key16": "iWGLqM8idHUEYDycCnLkpBxTNAAHgaFkmv47g7pLmkfYwM7MsCwTqe6bqn5PzyqKgKH3nKaABsYNrpCSFZALDgm",
  "key17": "2kSDmMoex7hfqfyiPbrnV7oLCDxx9wgbhcLfB36stafLYy7F3rkDyAbXTKbgW1NTZCrZC3n5UH6tNMJcS3eHD46m",
  "key18": "VbQ45oTKvcyhnuEUoQSHa5bYMTcEZvCpcFC75WNDNAufHrnrH6NUdU8kXg1GbXmZRpyCqbc6TMSyA1S5W1oGoLW",
  "key19": "5CD4arJnbFeKfD4kF1BxfuvN1rk9ACv2YtgdR4oHxtyPRH4VVupcxJQMPv4AAqQczvksCy76Qt7SdLFu5jRBhtkG",
  "key20": "4acdDervNSxzK1yQxZi2GgqRanYR9RPjt58cNav9JRLhf8DmcMyJRme5iwamXc4ryjppVx4f74wGtgQ39MjT8u86",
  "key21": "wxP5aRpBeWNwmGaWBuCPW38wcEaVYznwtBTCktQaeNV49BRLp4LhThfZycecvD8eeFXHFeZb8jtPqE9KPjZ9ZEp",
  "key22": "5HRN6kzkhvrrh2p3sjCT5JKft3yLat18KpcGWmeCi7mXSBRPLoqY4DSAW7xvWz6ARR9TijAYkHQqiTU7ApLXL1mc",
  "key23": "5DRHvz6Zpc2XRFvf8tdUi51s7uSy9JpMdj9ec1TRhi1xH62SQnynHpQuy2VyxQDzfUH9FzAsPneRmUcW2hGowEXA",
  "key24": "5Up3Lp3J57WkXTsWw2iwTvHUhVpz7APFPCdiUnmMth3UZKyFAMnUMG7ChFDMgeUArVV7D52cRmg23qQVJ277zBkH",
  "key25": "2aGN6t1kxvEPPVYouuFRqDin3XzbB8boPU2wKMRG56VMoQdSro1fiof6VXcR5eVnwVAVNuuJwTs5VyomKr3tKtf7",
  "key26": "4i2DKtRjFnSXSYxZH2zpkTM2X6et4xTFSF2JSJNTcKk7mY2akfUgCsjyfoRwgKptu79DN68CXMYPvh57vfcMo6NZ",
  "key27": "5j1c1PnHnWLbAELsADZxTXi65Gd5vU2agX4jzCy8YezpfJgZXyvFHdccxs6rdCznNyWWbEoY7JW6jW3cLzPypHot",
  "key28": "49wsGPRksk9K6dFSj7JwSoq9KvyfaFhVRB1TZEGWhEXhbihvWGuB5vtahw1eqVrVpSBSfAr7JMEMV6ncQpiwdgrt",
  "key29": "2UKJrmbAxCwubYFufKutcCzjG3WTpvq9yoxBwinanvQvmfT5oE8aYET9RCh2x8JjwZ3JRXs5JFo9BV4kEToQAuqC",
  "key30": "3QDXbMbbBF6kFQYo1NTj1hUnMjNyuYKKAur6Cqxoc7kuZi8Btqhr6BSk2X4krEffeW2o2z4jyio8gCDQZvn3Qt1R",
  "key31": "25bgs5bdAmswBgBEDajx9zEhE9G47cXtxDNMRWLWE6DcRuHLyK3MmngKDtzhFoijwoiwEoeF87X6d6EB33TE1bFi",
  "key32": "3FXRTnZYJD6CJpVFfX9jcWpPwDWGwEqhGYUXJZPELum1JDfN5ccNrdRwozRyRZsX231etqaiyydKuXV1afj8MUhk",
  "key33": "zJpcf7sNsn4mHB8n2BqH64ZtC8Wobqin2ySUphBzLCLmu2tM1urAYqcfzxMFhiXNVtuqDADkW8gCfAe9rH8eEJe",
  "key34": "48zgsc3Du5ncaU3NzdjVXZZzTZ1MJEhKSK6umRR8uXWRfi5HYhu6YtCqznSdveTd64c2tgFpgb92f4XKx8eJqV9e",
  "key35": "67WJtsv3RTg8qHUWNXDb3ApbwvrPwP8V5JxQQnJgFCfNQTyZdJE3WzTpKuggmt6Zv4Sh3Z9GcGHxMZGPvpcC5cYV",
  "key36": "F6p9S14Kj2Z8voseZ5Ra5ezU8XEoDf8sVW74jGRfcC5BdLb5Dr8REyhu4btwfnv6vPbt1ktwn4RYt4Du9SD9jXh",
  "key37": "WaJp3tdfoU1DCWJBmmjrEPf9o3u1TWRTvtUvkT8wPBfBoebpQFj7uTmpi1ofGwjwHBYF5N4yFQeKzMydrVkrAVK",
  "key38": "4JH3jm2EGAxDKZC8yYGw7Lnic7VqztCeMVokHHtt8AfBzdRvT4AK4skf2B4sB9YZoNPUsY8mRyjeFZxeUt57wFj",
  "key39": "3jt5MYGGRS9Y5GG2LDSdeHygKxNF3oVyuPF23m9K1Wowb6ejmU5KQrCwMz7Q35HJzFudTTKwT4tUJKavfqDTbjCs",
  "key40": "24JajocPQdh7TBrRt4jCKEK7HHKAUNs7uMsjQTuwXbnQuhjXDiJZBn4RWRQojAAm1qRRdEpLCS9Pk445UEMKqY4R",
  "key41": "4QQdZgYPUB76WsqzD4Kf8uCtfqSCPPnJBjTTePt3BR28uFD7p5wT438t6ZoVyTu1fPxMX7oXiHP1oFrzjyoS6WuW",
  "key42": "3UUJ1rvmW5sbZ8JfBtzveGKLPi1HNNoGtdacCrWipc4xN9XQoxJzWCcgLuUJXyRftZcEtrDBMQwKHzvgQYsKBz5s",
  "key43": "3vAQkF6qF3KAMq57thfQQtiHnE7VnSKapcJChcgcMYxq4CzuweLGQfUKJQ88t7NpVqDFmybhjWn7SUPUJQBKHUwk",
  "key44": "2hCX4kMfm3rqHWoVQuAYo3NwvdNE2WxmPDaraNPvqbAmWykARriewukaW2pQXGKF9zywEF1ndNVD4HUzR2pYaviB",
  "key45": "9ckNK7VRVgQY64GzmcArWQfoxNPxWSGWXpbSUDbwdrmd3SG5jCSScDev8MuT9wcPRYpsezvox6UxiV1Xv7DFi9Q",
  "key46": "34ajM1RMHSQzB1CnNaKFFySLuZZm4rQEk5fuRMGFx564j6UxbJDBvfSJaRxcaTkPhdeisfRqdeHXXM9vUAuecqja"
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
