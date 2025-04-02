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
    "iEc35TDKQN2js2Vch3VPmdiEHhtyrTsBdP2t71xJQmHUa7H5syDhy2V5mwaEE4mSRYUYF5ovumtSQPsKuRNsUDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LyKpx53ikFstiAYDyndHZPwEGan9wt2oueRwFKP5dXGc4GPQ6kj8kK462ZXivuedUu6NvacmDx7PfSk2tN1rb8X",
  "key1": "71t7FsRa5HyA5hHRh6aJk1QrDQ642zZQHPKWwxmNVyh3n2sR3R2WZvh7kEeie7fQvGWqwP4616yuvMQGuUKzZmN",
  "key2": "2piqoRi2p8USEQZJJLXr2y9Rx4UHZNincmwnrSSWEkZeU8rYQtkBS6YT72wf6oBDv3fSa6AyGwQyv5oQMy1ikyBi",
  "key3": "4X1hr688SkaQjjz4qo2JWVLA8kmZKXNNp2DDy9txVm4XPbazWWHhpgsePe2nzuUQTT89vX3mGuYbyLrJ2Xv54bpR",
  "key4": "jnkdex1XAP8wSe6MsY13FbQaP7fiSWEytmRgabgTcHDsVa2wZ66YTPtmSd15yUS3tjsMLmfM3dstG29d6bktxa3",
  "key5": "4WxQUjazke7gCE4NeN7A1UaYgvQBCeq38ek8GyekZiZbGR1HBGoMxCoLGSmnKmmcS6rVVYXApFMmhjRHPqHpYN5M",
  "key6": "TdBgni313bNpNF4JSZXRE9vn7pFn9sNjXRMofe9EiY8VU1wVxc3nJBc37CWmMf5ZeVRwqqmEP8crQU2JcuuEviY",
  "key7": "4fmoqebW2HC6iRQXB9kQnotu5ncD7mfVbLHYhciHv7WD7bgwuPHAkfUaD4tasqcAQvmAv4JEo9v59pJSh25Dneva",
  "key8": "53cAhSxsWwFYARG7xjhqkLkZT4CNxRs4242TeNMGE9hvmxVYnis71da1BZRRzHJmYdLzokbAatHMfmRp5Tu6UPym",
  "key9": "1265JV3w5fYpRpacy6vtQYw49mRpdB5497sLQszTGnRAJL7Q18pE3QVf9vbVSn1KzboaaSfWbtTXv6DaxVDQYVbB",
  "key10": "3d4xUsxaJmcuMYTqpVc3u92xxi6dqd1Frqw9B1QyA1gu3hu5JQTW2kqVngL27DDFeRZ3zEp6SVujC74BgjFrDMqu",
  "key11": "u4SshyxJyia6FrFGeCepr9wnb4JuDqC5eTtfHGS8C2W11rYTcSDEADcDXc4Pywj21Ew4tycgCeGydN9UeiFJwLs",
  "key12": "4q7PnseCtqPL7MCVxSTThqoLeeXTQnSmPfcXkuxEeNkN693Sc13ZQUfksmuk9hqdTZbQmxiViKL7vfB2QLPZwUEu",
  "key13": "4atQCXE9Uugs6q3vafYBMnFo8iLUK9E5HaETB6HmAPC43onoW2t1EWuGqLKQDXhrKstq17m9dHR9AGcPxzecP9r2",
  "key14": "2beQqYWsEXLH2YGp9oF4CCMrdYE4sDX9PC19zvFUTntoQNR2vPia6mHc4Js1SKZaGr74VVKVs2KzmuMr9X9NAjdR",
  "key15": "4afhfbu8trHtDxq1GYAxxytnmzsjgbeN9Sn6kJnhE8L6XCzgD9V5bNLWkYXnwr3HLgE4aqPVTRYCxb215beT2ZzJ",
  "key16": "3aKyCXbxpLpr367iTYfBUvMB5wsm8nFPmERgcA3WinirinHuc4s8CVL2kKBjP3q8bSs7iqPdnAujh3M7ohh7UCF2",
  "key17": "3S9nLrRCNpkE8xTcvCWjCxyEzJFoD4LbnvWFCZm6VQPTx4DUg1QGkqve15kDbLGH3FcJbQNEej7YvAjHAeUsLVVj",
  "key18": "upTAkbzkHLGEabqPvieftDFPEkNuukbSDsSumDLyFUXR85BUq6Agco9SStwSXRjgcxpBdCu3biSaxGoPwiyqDzf",
  "key19": "3tHQ9CJ1aWPUmx54HkbzmdSCvxY5gEgfEkikhQvAXNVgu5eJLnc37jYaPk2ePePTdS4LYNpsLVBXUzmsRZdc32Pg",
  "key20": "45izhpYZpjroKafpSGYqPLmEoSF63DrMJGHnV5E9Le9ymqrmoAcjCTSKtH2m2qYntDigc1yzTX3pis3KKcG44YMr",
  "key21": "2iPe9FeMqjNXi5VghV8BqqTxEU2jdSZ9CRGBJYXjNvYA9upKKeoSXWvS1VN8sPaDeqnPWdn7EhybDHZX8q5rfeFX",
  "key22": "3DZt5BvCajL1VEbagVQCnVUDtuPcpwRtoKK5ZJPHYgKMkKAu1xqefk8naKH52WsRAhphaGH2WiBYS392cqME7jNr",
  "key23": "4PvMvhTghAfySfttxyAuTmLssAagPNvPAruXUKRNrcxLzzx4oC8HV73PmzMxjZjKjgDTCqsvfi9LGirT63gy7981",
  "key24": "65qdPuw5c3giBMdrdEaoWMDGw9tB5PGqWmfqcQwkmARHA9azsdtN7DkkwzvGexy8DQV3nkaKqB9BoENSDakDGfJ6",
  "key25": "47znRrJ15QKBFzbXZFq12bgXut4DzAYYc8cz1PNoMgstoJG4kApyDWq3kipwpVNmE87WRXxJ9L2YA4bUd1oJNtot",
  "key26": "2Mtx25BgDbwGYCdcDianaPDVZZqL8mAwibAxfunfjzwwZLPrFznM5m5sZCf6cHi4C3mr3ot5Jm7x1mWWNiJmxhKy",
  "key27": "5fuB2zU3kgTqNumHpEaKeVgCKzEHsMdLKrnErXz2YR1nhxqETb55YpagQU6u4z8LHA2mUoNWtjeyYFaEA5YPKhTq",
  "key28": "3pHVZfN28eoCYZMH8QRLn6dfS346tsYhZT99S5L4csCjrbkMUjJXDdjtmqYjNVKFd113L4zDgabkmME6mzq4tkJP",
  "key29": "4EZmG4Wk9fH1qbAp3VhMKfpobDuRpMgDe3VUUuewQ5gvCXpQtn1k2PvvL98M9efaFGJBkekd8rtesgHHqr6ZTBR5",
  "key30": "39nU5WBekqf3smSVDqrW1Dp6WnNbw5AWzxjFUP2qzqzRuhNQStPHEhyC1GAximLwjKoWqGDSSnioRKNefK7YMCMe",
  "key31": "5ww6CnBmY5eSKMPFVSJaj8uYCzmuNHC8w3Tb1aX7Fs8PzC17WCtZVGjZD9dvZpZmvVjs6TPbdp84J9dE92iJzQcX",
  "key32": "KwfsRG1jVeVDfb47PHGwbBhzsAdtfNKm2SX4DtjvrpabZ9NBHcMYeionVWF197BnWKGAk7YYeKh7kdr8CDvwNR2",
  "key33": "32jr15pJ42DhmNWxXc1p21CyGGfmhhQeEB2NMsU9srJ8CyXmCSW88rZB47hn7dkT9LjJspfnXKm6oupGNX4EoUMH",
  "key34": "2zhXXoBKdZRHW9Z514WTraZiTPsR9X3hyqhifMvs5iKQc4FSTTTiiE3QMZ23bxQZ97dkMJWDnoetZ5CZeF8VBbi1",
  "key35": "4v6QzcWbkmt74EGCWqqeHT5mgt5urjmrXWi3R5XbB3TajKzzRBgpoAHDN4qwBDBJCmeibxSW1nUpn6MXBwDb77Jh",
  "key36": "39Ae57CkXjUkE8XHKdCzbfLT26T3kcdSwjhJznvQCASq13QasuA4aRbcv86Fh2D6vNPeTfKHbADYvppZKzpUh1DK",
  "key37": "4WuX9ptorVYK91jF3iAVwGgXJ7r5UwbTbRSkqYXj6a4ZBGskKtVbc9nj4Ho7dQp718xAXBDSNYn3gBm5nH2cCovm",
  "key38": "5t2HAQTQR4kjgmwNx2ScsiPQKB9ni2HB79TNAKCq97R83KvQ8t5sgceUPZ7gBUYJyZUyWMrmDr9GYLZtSMfyjBEK",
  "key39": "44tDaVo9Ug93hSqYXR9QUT3GyAZ63yAmJt1jdxMFij2pd9WnSzGh8uw9nE82thdLcPX4ge42AUz6fY9iupAqQLNw",
  "key40": "2XUwYuh8AQmbjtpd6qa8sfTxzG5SD59ThX1R6rGL5kPe1db58ZgDVPG5arfRNNo3s49zoaiRb2dX63MahafVjBrr",
  "key41": "SYzvVjsjkj9i5ByhqJkUw3M3gCq2ex1oJYGnamw7MWgXjN4qXY7qtFg9CKFQuG8bguKV7ZbGvWbFMAH1LzEcvVJ",
  "key42": "3YGQvDtZ3kVbygmKPmvmkvTBM9bQFRRWQd6qUufq3THSrFLQNEKsjkqxYpLjiSxayar4hvPexhSatSRgXEmECZDh",
  "key43": "5a7pxRy3heepCxnZt2zfHHX6ZggsJppyoKgQLBuoGnb4dLsyHVvn16jBd52NTiGEZC4ck5t7xXLspyxrv3jJ863i",
  "key44": "4xXdW9QDzhXQAiMgocewyTLvFW8GtcQu8EpnXTcNLHBN3eRzAEeGUKp85BGNFUKBiybvYWHAbVmCiamvaeRp1GhZ",
  "key45": "32FmtyiWWuSLYUbzJ7EtSjXmrQA4XaaVYzFPpamytwdZFxuGLf6fWk9SyTMhqCzuKbkZqzCRHA2dvPCt9R7vJdUJ",
  "key46": "Nq3LAPnxE3KLGuTvyrTwcKVsH3MTr2vvEH3qgXPejjfDR1BfUHhTCyU5m78zjLN67hEuh6UgQpfJAU6KwJ7SwwC"
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
