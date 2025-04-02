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
    "66bQ6t8aYMpX66jHEVkgSBTyPk5dBkN2u7UPEyZCBw62mbd5eqFC7CsPHLHzTihZJHsMPB4Le5cSvq2YrFffdoYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vUpUzF8fPitfASmXk5gkCooFiygXDKFnBL1Bq8YvQa9FHzyD9ZtDHURCiS4EHFhNUi4KqKdvuvL1Fmqc2K9ncs5",
  "key1": "2yfirTcrLnwAcrT1evCb9Vbb6de6ohARdmoVe2H2nkKwYBFpB7PfSYCfEXx1ctKJXhkPx4cN1tqQUqoQzqmHjDJa",
  "key2": "zTzYRa29H4qCSwkaf2HYFpyyBMKD2CrY1ewXgHpgCaJDuKe2NmaEAPecPZHsxbFXinX2JVvr6ar14f642D387Tv",
  "key3": "3HaK3Uth9qTcsi8ZRWXegBBEb7jZQRZUA5CpcMqHkDVpQpVNzcjxwJNCxn2vK5yF5MK3a1eSM6qqXvie9TNxESGG",
  "key4": "4q6xF6cBppRVszSYdR3ZdL2PJDa7H94DP9W1Kc4mjuMwTLh2KSMBY8Z8LRsoTKtK38RCKqD5aCdxf3C2s7nKHNoM",
  "key5": "2aRYMKeM7cgsn5nmDM5vLNhKsTStC4F4fdcJJteMFGG5ej2kgaxeoPWBVAFWm5SpL8AxsFZGUVh2fsRpoBU9Cec2",
  "key6": "5GLd3JSeCnBsY5SmGY6GhaMKNqF667P23onMNPN6Shb7Xh73f3jGTVZjEpdPPLBMhjRC7WMHxeJzXHbWQv1gLgY7",
  "key7": "5uGj5UTpCRhdBLiiJeWNur6pvsRz1pTBYbxTfqGcK2jSSEr8uQoVuUswDbumEWrgnxGTrxQoaLramrvn8wskMJdA",
  "key8": "5f9WFDrhre6vD5vdEXMzjYRaCSfajy3o4vdPWYkCTVqP1Zy2kRfXpB1oRyRhHg3waMLYtGuMUjPDd8E5hxr7k25o",
  "key9": "4axZFfdoatXBzNvPcpFNUK96foE6hrZ8vpUWQzg6hwdgaCFt1ZnEsrg63jdFLSFupEX2ade51rD6HYS3sSmE8js1",
  "key10": "22xggT54puiypmtsKBbM23UMG27j6EXriPeRCJ4zkB6G7qmRoy6pUGfTJLhxkiqvaDpPKTDspMAuXsmLTao6wGjm",
  "key11": "2QXhQhxGko4iRdbLrLswYAxrKaH1onaPzvU3mTXy2Xd8RfcRYvemWccDDuWnPKyU4NuMssX5bAFwyuwJkq8hNKgn",
  "key12": "3hgJyHJigmK6P69sHCVTtgUjEMdtWU51Hf6pPFPgnF6GGv4UHiu9iYtoMSx71Gw7PQAy4vKMJWLvw13jVS9a9h5E",
  "key13": "3R8URdxQWMSWQzyLZjaEi1zFhDndNU4jGCRmPuo2bKo51ooHecngbSJeC8qChAWttoYGR22exH52GDKhwmCzUGmE",
  "key14": "3te7psUybtoX6eS2MyJEWoe6Zmmp7UfNeT7GhceZNZdNd4BN5motjo4KQXVEczhUCaKf2RpHhuk7KnoCanYbA2Td",
  "key15": "5PX8aRCqvJoPFPin7KUgZcKbkQMm7ak3sFcF8oJCeShHqHTzcxacGqnJ39bj7KrtDfsGRDYjVri3ioLnNL3ftqWu",
  "key16": "5KUK11Ja3UKzcWs8Gs1ifkn5YPqbsHKjtfWLLgg4Xfqy6k54T68wb9EJEaHwwtNQNiu4fc7Ajb1WAiBByqe2QRBt",
  "key17": "2DQkRhP2o5raAveXUt3DBmvTJb6oF9pMP8mG6M5ndH1pdpNwPJ8ts5iWugf3oHJYrXggXeqQFEumJFcgqi4dMdbb",
  "key18": "44JUqe7ZH8tpmi4j3NRewEYxnY3pVw4H5cHZYGPicj8VHhu4LoSS58UxzMHweJRz6Q2FZjDU7vmjxHkwhoh47nJi",
  "key19": "4fW4XKjcwufb6gEZ7HUrUaKsjdFkZmWcrs1AjkFfmky8Zq63APKAMtBEAvx64ZbPH5dHdxMt2CerVgDuY4dBiEE1",
  "key20": "4hsc1USsY9TCdQsv5CZyMgZZF9V9ivZ3v3p2qBeonkH9WM3MhrNwhrrwAe72RwRtnajJoSPEMiF33kXzdgUUuizd",
  "key21": "5W3UZ6FEQwCAH6iURV9q8q7SVUycFZ2UkCDCfbqptvVxDcPQd2tr52Tb9278D8sPVTUEtzc9erCFv9EgKTx3evM9",
  "key22": "Q371yfi1KM16vZgt7EPkBM9xJqgbppFZAxLzrkDCWq6xj8sv7XX2Zz19tzrvbE5XShoaZL2NymBpb4TQPFRVvLf",
  "key23": "3xXBDNcdQvFrYwJgDbKfdx16i6aK84JoZBvDMQxYhAgALip4N5oBGhbkM99s3ofRPBRPyruF64QSYQBaqFG9hKes",
  "key24": "bnV9soUz5qrkJD4C9D7GWaUyKUxvYBkKpM7x6uERMCWZZTaptJChL4pJKTiJqDU47sgNZnf779QuGt3xBxQenVZ",
  "key25": "2oHvNbPt9RwjoCzSUYGydtyXngPAUH6EiAmowgsrokeXgeMU3d1CmRsVtaB6GyfJ7zbA8yEqHGPpj3c2qrG9S9uH",
  "key26": "3ULWv9DMWs6aGzcW9nkctdQh8WduTC87L5ntfqZAi1spSZdB4mU6nJuoao5ikH7nkqcqXtqTDyzLN1vzgcjNg4on",
  "key27": "5HCj6ow8U533MJvJUMuXeh3keKPb7PV81GsP3b3F61HzL6F2Ja3n9wdSg46EtbgHNJASh1AyUqrEppy2W4WsAVXc",
  "key28": "3oui9ofBuE7wVidcgmaJnofy1RWmwL2k2KaLs2SiZKsLRYmZg8x9neGk4gm4QpvUUarpG17xF9ywvgrfBzhGLzv2",
  "key29": "C8rrWec2oWfn52HXNPt5egcHJBUEnvdwYNFdyCbWpmm2vHFHB1UeDViSM1J2ijt22qzSbwJLhkW937rGPpc8MWD",
  "key30": "3Rv6JSkAHqunnwxAUmJeip5nWqiNowJwRvPi8aFLLMTLAoxZiyB5nbxqDEuzfBTZQEshyWYzqJJGCSwThzX53nhi",
  "key31": "2BELyNKuuAqX6wnLqpZM8Fm69drCL3TrwZMDrJgPfD26H2RkhjgBjZ8pogTN61bhbH23c4eFkMRWZXc5R7RJFeaN",
  "key32": "4BeS8j2LppSLoifFrbDgEa2TRWEJBdmJggrCxymgFgkU93cySuVYs3JBucBV8tE8BwnrXErBxSpmgbkDStVKeGtq",
  "key33": "5cNUKRTcd6n3mkY1RimdMYHnxfGqWQdSHHyFs5YNtRWxXKaZCGFhPvYZA3QsjGeM71qxxufJGw74VThaXQiTBiKX",
  "key34": "5cFZcdvhEJcykjocBjkxkEoPJsCV8hSaP1sggF7V9qQuA2P3YDmX1ecjpEhsexToo379WZ75rgsdFfB9jr9JCTcV",
  "key35": "2dAscF4jXd2CsSemhDrHSuiWSytFy1SMvnvSDTBt1855Sc5JPuokUu4eEx9x6UygWUPUH75iZGi65PDs6FAkTZWP",
  "key36": "3YfAJL2NRCqBe8hv3WETbAAs9abox75CS9V5vXK2wXPw1rjuzzuvH6NzGoBDjXBr8PK6GdwGskmLueLG5Hg84gvc"
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
