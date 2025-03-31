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
    "3jdbepSx5MkcHeMtKpj8mv9oYcmtQw9c82QdiJL4Wu4TGPVbRLPTbXGYEjfsbWckAFjN19XkhzowXiqWLUY5qiVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d9gzGMXvTAVpLTh6NPfngQRGbxQaNFchVavRPqsUQU1xiRM7Z9sb9gmPEYWAp9RTX63Wahp3DCgcqsWiyZqvsfs",
  "key1": "31Cnsnnz3qKHHp1GbgXYEW3yaNwSfue1tztTb1wunZwh5SFdzxEz5PXMY3RH6SVg1QixfzWWz1ZUtJofRy2FZ5xB",
  "key2": "2jjfewCKfcz84dAHf88e5X4W1daFPjBQGiSfY1gxkPNLNeoYqfRdBW4JtqXPksUCsNDG2TG5GYmh4FZWcUtHgyP5",
  "key3": "2CeZ9Phr62MinR7M6MdWD9papggLe761ezBDM6RcDXmptQLcNG1zQb7g6U7vMbG4eev7DhaMuceDcPVh3D5XnMb",
  "key4": "LaYBR9ewzudP71FQHmKNjHxxjfLriiB4GvgwD7CoxrvzMc8jJ8csZnpMCK17ZBmutB8nburMESnJc8WFBV4gZbi",
  "key5": "4oTCTF5VL3G6QMe6ZX7ME3N7r7r3RwwDYdSFzhJa6LwHf4icXv9Qco2zAWUtoEnksBaLkD1YBN4V4uEXn4p1tqq6",
  "key6": "3UeiAFV7SYkGACDZFbdQ1YASbLurv5yhooFN2ftiiqmUZUmRbmA6EjZiDjB6Ems6UtMCdNVvHHmNvk1Hf6ihzumJ",
  "key7": "2GS4YBTt32r2L6kpR8YSuDfwL73UBu7drpJWWxJrG4jMB8PtGDT8GNZudFiYm7RPSmum5SZSCSyqU94AFRLG3qd1",
  "key8": "5XV7oMExTgXXzg9LfKaU6UeAgcPgTdwKMWD2o4h6kUWWUEXJDK75FyZjKRcFmRCm1xjb7m4RnD583WLBwsQGGAvD",
  "key9": "319HFVKefBN3JvmktbfpnrcKBQnpeN5Aw4Gy5ux3mqEPRTtPwSsCBX3TUuiqxnnaBSHLVDqMf5jP54EKjckLoC5G",
  "key10": "67gXhiG5pRq8SucB1Lt6ruob79WEWvV49r8jkXf15bjjUWYPwUiVbSb128KUJzt1QxDo2S5U1ciYCT2VJawyYR67",
  "key11": "4zvA9Nsc577bGfWyWZVrvXxNyHarLqSgpGRvBVWNfNFHGFknbG9z3wYdea9aCZohgWExUqogffKRHjrXiH9dcaJZ",
  "key12": "52Z4pK5TKbA8Qxh5QDHKBRbrgC4JxdVZzqdLkrPUaiS2ZfcXta1q3wDjhWXCgwpg44FQmVrp3NvCpX6s7nLr6H98",
  "key13": "DrcmQpnCiSKSgDq26ABamDddhef3AZfvygjWpCAYom1XKXZk65cgDzrRUrbFk1triAw1CrrLmQVoc8n3C6VnJwu",
  "key14": "5WA63b98KbbMTWheA8Dhvyvg1t2NrgSuE31x2hgNFgv1MkcsUfUmKq9NCsDo9zg5CgFg8V5HU1PS1hMojynPG8Yk",
  "key15": "ATBTkqyFnURkxEuS8cxLsceiHu9wsjpeBHjPdD3bDt1JtNK1KqmUaL36h3NWb3dqZwe13jfbbQ2rGXuQ2ALMEi1",
  "key16": "29FqZWQn6ibcX6dktHtCzwF3ZWy216Sdt1mAFW2RnV6HWYLpnAdjDPdWxmkc4PoRpmJrtvCQnKFDYUCMi9dBAPuZ",
  "key17": "3dJALvVSURvf7dsWGbEsgHxpr4VT4RpQoGgzE7bQkd2twTexMP8T5dpGFzm2wtqfodntwrAsZdHMXKH8tMGZouSt",
  "key18": "2e4jaELPCtJzh6A5f9HcYLKbW3pxDUWedk55J9ryCYncPFH3Ffz1uQALctReJsTvnEpKEjmhwb7QV8Es2FYXp6iE",
  "key19": "3r8MUsHXE1gx9wiLzLu8qMouK2t8FZ55cmNJzAT2NtQ9AjDVj5dW24y49t5QvAohVxe1gDw8PJVm9KzRCf16krdt",
  "key20": "TtWnE7Bqxx3rNN7ut8D5eJdrHhGMEKiZ4mFV1wQtjh65HMKBfR94NwqHSE4Xn5uVxJHAoUQK8ZLxHLfaAKViVs3",
  "key21": "4Dfi5PrRe2PwdSesr1wBxj2hmkx7NugTUSVNZ4hQqxeYE9fPXvpqv5oGENe54mYNXTjJNgbTwkGK1i4Km7aXdCDU",
  "key22": "567Bs55qoktD6ToeWgTyJjjnTghyGrgg5rEgrCMBiy1y4JLsiRkaG9tB3TkWB3tGKLsX1c69k8rXLf2pygjyUZuG",
  "key23": "2NnHivKGRnX3YUejKXecJfL3YyWS8QiKa14diaTCw19Nz6ZFLLmrZXVyxiapqaYtFsPixFnkuj6tc95v62jBkCUR",
  "key24": "gtedAbLiEAVeyQfbygpeyvZPdhDbZqSdg7ShhQH2ZJB9JChkG582CcomNQFG1x4ng5wyhWLv6gMHhkgvLGhEuHH",
  "key25": "3Eu72YGnXtqjDJgw9Ww5aukt7UJBz4J6SNbPAg5Yk8fPc2k28miJLhPv2mhP4MyAFFgTXtGbaS6JeHMG9MHKavEJ",
  "key26": "SkeJ1vyAhGZv9G57irCa2HHaNi5iowCG47EG5bCbS4HezmXHdG3dAfH626ijNkruhPdoHwc6Bn47ui4rLoJ6qVt",
  "key27": "4UdmP96gyXiZB5DktJoAWeoB2LHZu7e2nCgDvCLwr4WPRHn6rVT7g71sL8Nhs6QkHLw7FyDZgdaMfja4JorAw2q2",
  "key28": "5XJk34wmxRdxSs6hia4y7kCAJFXfhftasfgVQRDXtLSQKjN7NE2ceTg8kjPxk482Z94mxrkWtUmnhN68UQ9fELDt",
  "key29": "QeqyJ1zn4xa68xirNP8r18KaJApHUMJ7c2DtrKMvAEFPDtsCiabVks5mm6V2mBMaYgheCP5RHvjikyVBJWee64E",
  "key30": "3iTpUzPYQLcuGU8sk2mCUnZddv8EXNMpqj5xG4dpicq16oFY4ey5ipM7rk9qrHuCfqsUm7eX9uVzhzLeM6kk7pgS",
  "key31": "LxaVdgJCfJPqYyzxdhctDcQRNPLDDJpH6m243muK93L8cTnjBmtnbD5ihoeTsdM3JLbtkDU19fsrCXr8AqqaguZ",
  "key32": "3sG21NteBtqzgbPX7A23CWEr7TtnQMosuPU5Zh6yZhrDoStr7aF2fpmgf9952cPGLcn3GntAMVTzbzwL45fWjHJt",
  "key33": "2VG3WwNXeeo9j81br2wC5JqKU2APjJ1vtvT5g32E43tHJJkSncQqY27EcSbz5RpLx4NjjtGaNiGiZXWn7cuFHEAj",
  "key34": "3CrXAaekb1MctodbDkPgPuZ65fXt4XXwquAxRcP3hhaJQMTCszqwJJmTWzeXX6YqYA8pAsctpBfs4C76CXQfnm5s",
  "key35": "59VWnRtj2uiqC8Nw5B8TYtJ7pa2Gh62Zp79TqhqrD1Butki5KqM38EbW9nxsrHqAymP5oFjmMZbQeLKosRuBAKMA",
  "key36": "2v8KC9ZZ7dVEYzoVTnkjGeJSh3DSJUG1mxsfpttkHTmYKdLTjgrDre3s7bHkTmqeV8dZkJRHUqVZYuaLbCinYBg5",
  "key37": "44T2cxVDyrrfsAkcbPPFXGqpoP6HFFGMbFJ4KWWo4nV9wvbAD4twyR1uLhQUUzBYu88as9dVZVDzphsmUkdZtoxv",
  "key38": "iYPhFzTELZfqMNhi6T2oyJAe4i5ug5UmSEUV37Q57dcdnD8r1gJSn6uK3x5iFr7xSsq9ENXQBJYUkpwemcVdDLu",
  "key39": "59KCgqdY2moktS11fPPihuV2wh24p22MNEnrvNEQzLgJ42pzJVL37tP7WwjmtrcoE3G9umoMs5gtuXWxahYDoWJF",
  "key40": "41sepHJRQufvgZJiBE2v1WH8Gomj8NBUTbA1YET6DD6xqFo6aNvbyJuSDfidvQLSzUcHSgSYBKMQJ1bFxXUj3379",
  "key41": "5Bv5HjjtjRdtpsvSCLi3nX74ZB37Casn3hxYxwa4hco1w1XdkoHLs1y8uGZHUak39TkhFcyiPCxapeWPwoVxn9QV",
  "key42": "4xUQYNdJGSJ67z3czE8iy5J5TdkUUdcL45kfPgVTd1pLZmvgehuGYGW9bYyW8KAdPGvB3gs9eQQ3qgLjd1MSo8bw",
  "key43": "2JMwcubkz9uELfZJqmrCNb3NrSTX6JvCiJP2kmhfqmGLaSYrC6ABruNUszkMXtokAkoMwoBckBRPeXbpWLRrWi8n",
  "key44": "2fDMiiLsS8Vfk1mKuFiDbaio8D3hf3Z8QxzMpAg1fe8oWmkTviGUL31RadKCizvhjmoETUhVo5hhxLezWTcFVvbE"
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
