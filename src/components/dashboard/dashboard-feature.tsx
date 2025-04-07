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
    "2spgPvPJiMhvrJDjTaCwJnBJNRbSpqe2BNu8EqYAYrk5BRZwYNXcvZvBkAU4EcPq18SdcvR84R9BUtqqz2WSFbjb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "awvKagj84SkLB7Xkx1attTWPRFH6qGsiKM8HwXSp4bU5KT5cgGempE9Lo7zSqJL6fDid6WQgkinF4Dbw11Fhc9t",
  "key1": "5LBL6HrMbS84cyGk2usMShDPame8mgFan7Tzangsqm3Jm5nhpzK5JWfFV2B4JewJNZJaB8poFPDTs7aDsiE5DaqM",
  "key2": "FGoXWzF1ucBe1YeALuwwYmERufGrrhdq4E6HymWt2Lm5MiHbwiLBZYbUSozD9aNaGmNTBLgaAD4ZUC2JziW7Gy5",
  "key3": "64hDWrRKtFuPoSEjEHagCMgCNwSCa3LdGAdCgNHG3F9dQ25qmspnA5r1Yxd2AsgxLofBnkgToRDyya7R7nD2ymrP",
  "key4": "3dSZMepasrSncZRiZptaAbfhVAF94HwLVFM8d2h55NcZskpDuadMzRtZXWNA9Z3WenDCNeF24joM2oXnLumtJVkn",
  "key5": "5q1fBLVv7QR6hGAcj58FfB93qN36W3k4B49cPhZsUimP24rmAhKmCHKXnXeVhUyT6oN2NkxcX8i79hrdNsi11nh8",
  "key6": "YSqdDFm9cWpmycuV4DLBHr2TjhT6bDmzfFfVMW3eTG9SthUcaP3HU3wz7X3TzARa96E6SjnSxT6atJYGC2NeZkm",
  "key7": "4ERJJwBNAV14xLyfUAnBYhLNKVGBBgXxZbndByiGiadhkSyTA6XiujJymzE76ohDchRiee9HbQgyzYvAVtvP2UPk",
  "key8": "2sHXwm7S87Ggxo1wutMvMYJtJY1v7ECQ9Js6pYm78gWp2LuQ31W4hiiXm3haQjxdLEG8PVpfs1i546ki2rqfAFLd",
  "key9": "yYxzVpnEafW3nrRxqknHcUd8ZGLoGYRs2hsBoQSshehfJ3z4eCDpq5oDLjshg1AhGWGnJzuxXVRTYv3E2gS8MqV",
  "key10": "4GawSH7trsdEWoqE7ErMogV69Uu14RDBRYi8rDyNddbvyCihxKjnxMVz8QGpjzLtpbRegjBi4J3cggRZZRokADxL",
  "key11": "3xDGj4GoJMcMXhNATbuT7S2WPZqQ7GeX2aZyY361cbjhMfsaPemUebcqfnnWUw7nMrSY2BXeT5ShLXAHQimheiFp",
  "key12": "2H9AHDZKhbfW391WwR2ibV48bRdTMkqgM66q5u3dmAxThT8UyVQwNtmGmxhUWjhoZwGTd2t2Mf6pDdJAfGdmHLNW",
  "key13": "4tdWirpyL1QKnsy4G1XcAmbKPUAb2S78qp8FYxxp1esdvcF1rW13LEwLr9zyBErTk3mo24PXf4vUm3tQ9aQmdXFy",
  "key14": "3BjVXtdfE2FpGMAGHS4hrNaoS5mPNsCcXore9EHsgetae6zs8bSPQmawNTYJrcZvoSpK7wjFZui7iQ8tY8kAVAmA",
  "key15": "AFYS1wUREQHXMJT67tCv9EhBkQJ7FW8u8ufhZm59UtULnzTPkSrthj41r8MUfSPomEvCgs4VBMAo2N3qTpKKVM7",
  "key16": "3i4bKa5KpJQTQSKKJGoQenhkHrS2KEDHHeVMwvWWaqVHz5oiMuuCuCjG9xuLFnMrzx9a5ETRdYJ8WkxGXjADAChK",
  "key17": "25yGTyYAx24sK1zYEBy6eu6sGjYt3uqpGnePBiQWz6WaTpd6mJhuXQwxfahK89BaxmxpiAkeoxbkW7mCUFpZy6oA",
  "key18": "2GAuJrY1iogZDUEiw9eadCrr5pn3S2N2UXgXXaBCw4bmeFa2nQn6fp8i2xPFastTaFDeM2KbjTFhcbBpjbuKZLqb",
  "key19": "5GooNrWGsBLuC9UJXhVeua3GaVAv1ozGFyqSaTfmZzCZinREku8gwL4kMf19RPGBZRaz5W3YcZ4G1rZEgSsEF2ht",
  "key20": "59YfcB8sdnN3Y5NYP42Tgc3WEeks5dV3uGHTd1JiTpXpGUXPKmZ64aau1mAEs3niYHw4KdagvMBdEiFMCYKn6zKw",
  "key21": "5714XjCMtfWvgajpb5kEsR4LSofFHazNHsWf3PEKJn9GDHBHBXzhKzg9jBjkkAxZzjUH23cUdPMygwW9ezVRm65t",
  "key22": "5YSS9mgyxMw9ugfvM9sbjEQRsEwfHJW4VKouTiHXHTKzCA5GYkMvCMKGeY7zKzAGuhzUJeVF8Rc3hTvJjSsRv5sH",
  "key23": "3qzD6ySG5u56Le7dmsSjheZRdT1VuDbJ1cNM1rrXwoGTFaSbsDtd2RokVvdZcmqA1QvtnRTFJeE5wPKEgRiB6dix",
  "key24": "5gapfpmEfaii5MQswAYDWZSM6262ykUnAaizH7pAebwNnjgQSa4ccUxhiySMqojMXYjvsia9oHQeCCpUEEABKH27",
  "key25": "5uF7PQ9W2rvrCNht4Mprrhgrv4uESVvFyDSfkN995URjisfWyX74XKm6cteLtwVtFHXshTN3y1vFGkhHiDDxDon4",
  "key26": "2QGSDcr85F2WqLvDLPKZNFd3xXWfPva2mULhJU7vr9xJeWdc3TpthCoaev5xEeTLMSJGR8guvH9T7uj824Fs5iXs",
  "key27": "cdHBew84Uh65JpHcvv8MSvQidwb5Bstn6ir6pbkUCC9keARdk2EpWKp9gXp2DZAmxVjizwXCvjmyDfEGq5u7TPP",
  "key28": "5gpNvq2sjLaawPYWhKx7kutHQUSprscYKZ8hDDtyn9SrJzZdP3KGgsX9oaszGSHaJtZjD1mmWYQceZUnhA1CEF58",
  "key29": "2BkCyXZbwwSmDJ7gZZQ21tDBETzxFKJtm1dBGxk4uLp6xBmCotsf6FJfBJb1npoW2mEjaXAdyJmj1mv89H71LDuG",
  "key30": "5KNQWBX4GVpRn8wbdwgAjJRx3E2ieeJoS8kqdvZMnzAvVtUvazzoJ7qTcKg8KJoJjbJ882HAWvagcZwuWx7JidWu",
  "key31": "5FKDqXpo6zeHSoqedWj4uvBo9tB9cL85G9nZZtGUZkpb5JgePwvhVowAt5z7wFidDXrjicoHds4XLgCFJMCQBJ5y",
  "key32": "MU16s1PE8go9BTpuXjvPn2mYW4wkWQ6oncXsQSHRJu7cdsd5BE4w6Z6W2fPncY6BHRPV74moEJiU4g3vod63piK",
  "key33": "2ziueq66FwQYeuRQrPKxShwo56Er6vPuC48zMfC2Rpy1ysuPfHoJhJU8bDVx7mp32eqhPzNRu54wjDayPqrRquzS",
  "key34": "3sCuQg4yGRp1jzq8gJAWwFaBpecHgxVsGyVCeCZXuuQLLcH8rATT2jZRvdkzvk1qT71jTDzvaANhy9ZY3WxpwNx5",
  "key35": "42hoZkbQojnhFSQgVjxpUZfNi3SDNPx6cN1QPZDp9zJF3nzcjhwNcL1EhgGNp1p1rc5ZgZLyMpbXzYtXtgmuTrMH",
  "key36": "54RpC93cxZsCbVkHuZdeKC251YKRZDxMzHyCWrJQtVVkPVJYYA8CfeuCfqt6tSvtWsaCZYm2edNnBT46XoCjiRih",
  "key37": "56hntzM3iYS7kvbZr2npQgJFoiU7ARXiysBS32eKsSNhHHiSTkj6kSEycjZ5APAhFxkvo9NkrN8fW7qFW5mzGbd6",
  "key38": "3wAMwpeC6eKEkYJ2SeoDbMV5PvKULJAv28KJqsP1pq1CALouqupHZj4Mo98NPwADDtyi6hyNLTLbMRw9oGVGLA11",
  "key39": "34QJvyvHGRCQo8dQwE3o3ndeDHbSzhXkWkFbYXEhcxhcjUy1DaJRjTuWHQwachBEPeCCj5uGFJ2Jt3D3cKeKdXWS",
  "key40": "5FbGFrDZkBArvjUGUr7vnDbFChA15Jb27K34Y3JR3yBfPiVMg35P6Bfwd3o3Kcv9VFbGZQdoc2oY6K46kngbTsrb",
  "key41": "2CjC4djs5VzYBg1pFXBrh4rpa8R8UoyVzh5upGBWxTfoxfEpehFWP3Vfr4BvEoeMCgYZj1otUCZNAVToN6sXR7pE",
  "key42": "4TsCDRKfgjxdmwAYedPZwvjSUscztLMC4Z6TT5vZ8CBhohpWQqk39fFVyVpGJ2QWV5hBcEwKAZVwEV3SbVPTaJu4",
  "key43": "5BywyqEyMdjHSc7Dd2N9a9KKEW5rNV82Lu7sR2pZwe36WuY5DULnHmGqQbUW4JCST1kD4KgcE8JDAQeUR7CMLiR2",
  "key44": "4QSP2ko38Fi9SEPfZW4WWxDVysoqv2UXwPvuMKaQBi1TRULPPmboKFLb7oAceHnPusXaLfgNSyYwbkabLUZuLwco",
  "key45": "4JAwKEnTcv1ix3eNjHeRWi4M7yLeTbxkHzzpsj1GGCVaxkUeQeXjnAnaE8AaP2g5EYSuRPXudARLmSvvXdw4U8cz",
  "key46": "4yqwSzNXdaepzt6zR2EQMrkQUmKPn6SapyrcBZ68GaBfhUYjEWEsebXV5bicvp4snrfDjmhf3c81a4MXrtjZ1qPA",
  "key47": "4NUu4rPc2VrtqNWLfg1zfE1fukW6qwA39ftRjUsQM5FaTZhx9sH47prG4UtL8E9hYcpaH9Aj86KvZd6Mim4gVwfJ"
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
