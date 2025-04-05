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
    "DtKq1qLkXv5CgQQ7r6zs4dJnHNTj7oc6Hdx3hdzugRmErNjD1huLuALM5q1dCXeHGo3zzG25FrRHprTg9okBwTk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CTj3kn8qbWjFLVWixUjfLE3drorRcEjEi5AQBo8NoW2WMAG7mtALfGRDtg84pfCbVbCEQqRuC5mRZaE4Y8f99Wz",
  "key1": "2J54tobadhueydxj6FtdKWh8RA4HVPYwT1Y2JFxxKjW1b16ZpmLmjrVPbYcYQPUT3KdZxgMPP2Vq5NreRyHawD1u",
  "key2": "2MPyXdGsXShinnZVWxQbgy3TkqqdK3GMTp4YrRCRcsTjZtCyyW1qkEB7pnpyAcVJUrfEFjURf5q92DLhKYujZEez",
  "key3": "22wU1NThrUwiPasE9YFc7moS6Sg7vguqW1JvCQb5yiSZaZx9EV3z6WsiDv4zriYqt5VPjDeTyPCbEre7aaCdER8T",
  "key4": "2gvTs23bh7RtYCb4TvZ1fMWnqtnK7GGki4vb1gTCRc9WRt4K8AEsdYkxVyoHuaN8ByhYupBNjvr55LSK3y8eEka8",
  "key5": "1ZRwTCtDvwgThuqxAgdzuHueXXrTf4ksXFo8NajWqzeEwaJ5yyCPZhtyviNaHWpTQLjrhVHRLy318vFJ32fj5NU",
  "key6": "4YptfWRw52MEFu6kPqnsioGq4aGvpAARGrK52m3ynsCh9RAULQkhp8D5x51KaZKp1jR2kX2oSjQwCShdpLe7Yq6C",
  "key7": "2bHYHMEShjp81tjkxHzfypLCv3H2d4Sz2XnRhw895eieNB3TW19vXLAZ7PQjdRpXqq6Es4p6FF2RXDkX19N7UEiz",
  "key8": "3HZnjucVxw6LQ2FFMM1JzNAPE22oZJvLVaAWEjRwzskrhfQgexxgzEDPVniEUmUajhFnhqPNciNKKgHjCGyM5qpB",
  "key9": "3iop6afzPoqwL4uTpNXoJ4BewA1jkcMaGaF3Dinemu596cEreEAjFMAAoB9aS1p1ib7kKhqMRWMyqpsFxYfvPELY",
  "key10": "XAGN5Ho76PY3LWrA4KBCyMqu1XBM3kN37mABXiitiRhbFesJz1GbnTDYZ2s2jYyUz6sZDbLMspn8CnYzfqzcX5q",
  "key11": "2fa8b26kPKM58iLBb6KCMbRitH7efBi3Ka4eZfd3jv9vuoK3Bwz8hVeCnioCR4E4XNzJ8TrqhhZBe8zWciWQCSPM",
  "key12": "4jtvzfbPQRY6KoC5rU6nHb6orrqmWBKp5An5TDxRNbqGbzmGpAgecHFrVrnhshovfUWy6GGDAKPCSeBx4TmW9Eob",
  "key13": "5KSq5oTTJWnR2BDpF6pfGcgnmRmMybaN9KPiT6svSjeeXkyoeVotQJdiQUkALyRtC8EgsQW4UQ67pV1egrgjAaiT",
  "key14": "22yHquheeeTcJuka83dpuXgTWHyNzMuDRnMGU24HBWpaaZpCUQ5wbSaEmFtsTaA3VD9bhjhX9StWV8gvPnp3dnAD",
  "key15": "BDdsHXC8eXTw6Xjm1HJPBMSJVt8hntcnHcbx3sYudXxNgigAB5YTiddiPmAEDYzaSbY4T1wyScWX6JXymdgge9Y",
  "key16": "3GgmyuwZ3D9xbSFTeavHHhRpVW6dnKi5KYBbEVbCt12gRNo1BPZbmpnLzECP29VTHh2SV75MVSKm321LUcgFYTGs",
  "key17": "53UDjNt8MLJFvhf6QoNZLnVbEz35h85Gu12qrSnrh9h5aJsdDbNT5kF8evuqHuQnbQPc8qXjxPza6mozzrs9DCcP",
  "key18": "4Wv1CqKTnQmpdNzz195vsjcG6YsUYZZm8ji831ZWn1xQam9PQxTwdLGDPsertizmwS9xL4q9ReXr3peXsTw4DG2J",
  "key19": "4hPFJwabUxf66wwCGtjNMJpa54aURRPECGuzoD668hdp2Q3Q4hn2nrQwGrL4ZHf9oq3HcEG1DB4QShdRL2KPtWCK",
  "key20": "2YTibTCNL1eDBrCE9XFEpqhRSjBYH5nGphzi2rTUb7eiJA9Fmv7fLL2GprozocC51Rfa7KvJCYtmhuoMF3nnPCZf",
  "key21": "2PGzDCmMv8g1Z2CwZiAxNt9Gn2sWpksqnBCe1dM2VqZdSJNuwHuNAicWoFcqRjvVYd11f5JqrpgCYG3hjJAh5QMc",
  "key22": "57w2RLLs6f7wWhBncGQHVJabQcscFS2V9LqKb1Lu4KH7QywQb6zf8w1JBjgFJU2qUTNPem2gzuP6xEX4oAhHNdCK",
  "key23": "3Qmm6W6hBsEh9B3HmSBBpJ9UsY8pUG3JtteHe2aaq7HbvWp7UQGsZg3WakEimWHpg55g749seWqQMsSvcS6J6xAi",
  "key24": "2J1GRZ5zfLqvB72xGst5LVKecXEjDqEf1CTvwky7rhYuSX262pb1LTVWFxSZYbWKZ834wN6Ea61LWgnQy6zGAGdX",
  "key25": "4Gd5xyXjQ5WTugDs3YsHTdNFSQQGUMgMwhy4LADkfqNdzmTdT57mYhaBb7mHm1VxK6k62uRiuHFGreGwp4s6jPH7",
  "key26": "5d5e5qZBR4aoAoypwu34waXct7NMQJ9hSVddECvVcceEz4SZNC3uYN9KUDbsGoCwpaTNYGThqePEh5f4poo7LfVG",
  "key27": "3fCRf3eJJKP59aGue7kwNynGbNb6MgetAH48KfphRkn4TfXbgBpYPXtdKgrt2izfQ9N9aSMu6sAned5D56B28eGh",
  "key28": "5eiinCFbh1GLRrMbKg5oTeCdQHtxqAzRU9c9qXydJ73srLgWDM8nDCxGELfhv2D21o7LomMhwkT5fHvonzoZkLXm",
  "key29": "Xg2sCoF8e6rpPd2DbVfsbXTziqFJqFSgEPhxZan4G7aoP5YGECDV5VBQdAiSMRV6qbFnUb1zjLc1hhaZviJum5J",
  "key30": "6773TpAfnhiXiXEDYAcTFEc9CiydEdQuDwckjQYWTjE6iySXPmupSNWWjAGctzTuEnbPWzgt8weBtw7mbrpsmxTy",
  "key31": "3rccDj1iRQuerVyKzFY2wNS4Fe4idkLsdYtKYqvqKaNPgFWgRCxJ3dw1y8XLJ4qWEPGh7HoS9SZRBdJNdMiLRC92",
  "key32": "2Df4rHrYVJWCzNVxdzoNw22S4QGuUFPCWteMTPFAwB2Rh2bTKEv2oYogonPfJBtVR8BrxpHPBFHBaJE6UJEh4zod",
  "key33": "38BCM4GTRQo4vnWdYTQ7Ny842Uk2UzdBfBu1kAzjDWTBxW6rhNKNybaJk5eduZDjn8w5JFmznDR7ZBWZEKojq9QY"
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
