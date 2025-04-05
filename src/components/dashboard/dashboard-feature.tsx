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
    "3gcyRvCzjAxZ3W24XXH9tTouXGqoEmzbwrzCf4vtzZTUS3Nm5eAU9a7YhsVyH68V7gJbUkqw2HEbnYNH5o6UMVHV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56zvMvZnkN3YHJ74LBA4GRs1PHNJWVaFmUEZqLqV4KdACNB4n3s2ne9AWpiLwBgBVCTQtifNJyWvr8qbC9Gi1FUK",
  "key1": "2Z6uubD62N8okTLnR7WsHsAPKafNKHwweo697HK3zL211dS4bEQsiVM3C8Mjvdh4Y2bNBTnBNGrnCj9NtVjoGCNL",
  "key2": "4sYwC5BThx53YhNoqiZpRyX8gdJ4TsduMQ3N92faf4VNTUrKom677MxdTWXKEjEaPNceZMpDgoXBU6mPkLkmBVMk",
  "key3": "28atTZoR2pmSvta4JbnFPKAU84WQdV9qpa6gnXVE4mrvD7mmWpDgg85bgxJ88X7KPDA6nPxKUU9JiDKxKuDPZ1mk",
  "key4": "aP1fBwqtq1eUMarZLcehEnZXofFw4xNfqNACAcaF5vCUWVXnyr2CjA8yLt5wntKHrALmzfWh93jyiwWvMrUYubU",
  "key5": "5wwaRcMrQB31icwvHLZLXYxdZGJNuswbiohuGXNeAmSMURsvUTrvPRTWnHYTtrn2qjNhbar1LgbanFj7isQDCY6T",
  "key6": "kPq6gCewgB2MRuEyUkscnjRs8jexam1DWxE7qpTCnfBWwNDHsm9xrWJUeGV6zbfti52J2Dh9o2QksdEb1AcKXQD",
  "key7": "2ih3f1SEYKB1gPrnvBEY27UjCmChWwbVW6C1783fM4X7oUxU95SMubxchXhEdPrHzBuFr28S39RM8jHBy8ijWfcf",
  "key8": "2XNXfDf4Pdqw85kkV8DMcVBE3jqwh5CeiqHMACuk5BKUMvpmNXdM14APvyvhTPtpTZqgKXHqD1vQfRgvvyUfzz5e",
  "key9": "3nBMe8fQpd5AExtdYAixoHs4E5TozTydQsKC46DxWY4x1z5ZxnsLcUoxNVVmtpu7rRNhyErJJiwkMSUqrhu7qbva",
  "key10": "os3CASvLYa7gz9NuMnGZWVziLDnEvUXH3p8TxQPWAf1AvpPWqF1HUeGShfKnqNTFbyq6c5n7rZLMbNFQpyMZw8w",
  "key11": "3aPXmKrHUVfNHbxZiqqEDWUYDEymV9bGccm5G5oNpFt3T7zzG7GHu48jh575Swy71Wgj6oXiLKep4e1M3o6LVLXJ",
  "key12": "2otR7uAcX5QzK9fQfW88eqPh5ERhRg17j2Km5XyX978jJh8MucqnnbrSRTzqp56eVWUjscrs1R3dAZEgcohR26UW",
  "key13": "4EfBsigZ3KWUS1rf2PTESrZ4Gp9JSSkwnnLTKHvHa5UYwzUeiG8Ta8eJiYuvJs33TGeSY92SQMkEKcEXedXv5HuM",
  "key14": "2ScKyRha3Y6tBiihwPT2fDMtTdYGsnAR1bvVSHUvkSxB5DXtPVpboXyzJApMJvDTinoEMxHDKC2UdVsCsANF5KDj",
  "key15": "CVvY3LtU634kdJAP6xrrVrJAWkduqdYdQkNvB245ip6ov4xe9rZ3xGi2ExR6dByUUiGuhEoQ29pXJnba15hqEgB",
  "key16": "4AAs21rKEyXZGTbbhXdAjx1HiZdsoxGnHCKsR9PaVFGDdyJwhJSBCo85H2GXrsCp5SVg2qY9QbhBKsufgHBpPcuW",
  "key17": "v1xq4qTHCoAqYqn83wCxwgT7bcAbYq4bE9ornXSnKxDrLjgybxqydLXqGvTZaqiDXzTbtaPpZTiEHYv5aaqfdca",
  "key18": "jr1wcdTgfvHPMYemtbxU8js4fYYwbWzuBmcc6amZ9RPrZrETRgC2sDztxY5JkczaTyFUH7KtLLBwpwqiceJPvrj",
  "key19": "MgKPAKAprJdYpiWcUqHXHsfAyQfFNX8DNP6XQzA19FjcZ8xh3u44wdC4SpFiBimdBKpxAymy371Zi7ZX2wT58JU",
  "key20": "4R8wC6tN1CHyDPZpH6DqxxogEB1mrSz5azZMy63zDAtkcjXeATUhguQqUkMkKBTUokkD1DGSgmg3C39RjLxh1ijR",
  "key21": "5jvbnWrP7VGWpZFmkQcUuMDPh9iTpzh5j59ZJrYLc4KV2AGsatPLBTX3p4TDZYFGZVWr4eaWgPppNp7YnWCiS4j3",
  "key22": "34CayvWv31WFshPVWp4S1vGEQws3wYDSyXrjeunsRvufHetf7uz1VG6stoAFUnVmkYmWJx62d9gTiHa9DnmnqVjX",
  "key23": "5JM4vPk3KXWCwFrK6TZt7fuC26Kfcm8LorsZiLWT7SLCnrvUsXR7MsgTARug8BmxTHWunm5K1UXRjB1zVmfAchwc",
  "key24": "66kqv5mj5HhYTm6mLrRooQrkEfA9WtEM9bMUHfwd31o7pA6xQ25iJhwBBCWqycikNkdQcLf7xirP11QCE87DFhpX",
  "key25": "4W1RtbNNYrHQbDeey9a4XLZSNCWeu6dyXQrfrFRvUMki98rYbUPMCuUEjvKzbk8iYAXU479CYKrArZvWEsqY3ynA",
  "key26": "3eSLi48YDqsxq5Lrhn1VRTUrxGiHgpCfAKdB4HUzcCin8qoTDytAAaS73JJVpRnvFzEdcvn5rWrNRhqrcE69QJCw",
  "key27": "3LNpFp726dGdT7CjZoB2gRLydH9S7Js4SFpqam6jwr2tR88tTmzkZ6t4Foi2ETpR1fLYzfKdUWQXdDVvMJJh6nJE",
  "key28": "2TZevJFM4L4Lej3jBaUbtLn89okPQuJsdqu1hKaVmEcCdpDdZsS5NtVc2fVAd5R7oniKKsnsRrx6rNaHeRcqpt67",
  "key29": "35V1ohVxKB8ND7bavGnGG2eR9VbpfrJejFQi4LaitDfgnZCTHu9V2MKPMZqqrtQ5ZtYzckU7oH8SLuw4HaDZtjFm",
  "key30": "23uU29B6mqdhzHZabRAuTHH75iCwYxaNr7omygRh6tidprAYGdnc1B8h8PqrWRPmcRmS8o6RmAoeE8p7N1Q2xWHS",
  "key31": "5KnjbogcJPKDaVioYpTGQZcH6Ys1jbTQRdiVmdnbfWmboNVevUp9mmsr9EA7EFLC2r8t1orJ98mqCi5TGnhKFpNP",
  "key32": "61BtfTeQ8NV6hT4YgZf7HcAaQsRkL7U2nfpYtCZ1TMvYBy6uQHakXGF1K8EaXGVKeTA3XvzR83CkSdK7smZSxH8v",
  "key33": "8x6FE8A63kHkwcAp1X8oBvZKK9x2zubF8pQnkXjVBhvSmQiBLmWPd2pABu4wbMfawnsq54x1JiExxGJm39MppK3",
  "key34": "3aKMwDZbHxofrL1TQFZDFKNnSjsN29fmLdDW6K4A2QNCrXyn4MgQtokBhM3Th8pTFU2PMYMCnejiRyQVwBYd2q2L",
  "key35": "55WRByqnuQq881ZWLnCy8r5A1pBzVMPuzq5itNn63q5nS4QgYJEcwECLhM7z3N8yB65xc8wk2HPLt68h6bJKsPbb",
  "key36": "4FDgkv1VziaqEWSiYgoKz2GdUzAGjtBHKzzKWceTT9dxKf76sDj8EmT6DwXnrK3CZfLqfoziGczNdcxqMLnw1vXt",
  "key37": "xep666qibfFwtBrfe6FxQF9W4YGsPU5d5b7Xv54sbv2PFM5pVUVV6BEh5pRNxsuc2dEYmPYsJRzwfSUGj4ZRqxo"
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
