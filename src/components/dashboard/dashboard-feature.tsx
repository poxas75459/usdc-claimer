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
    "5hpwsYUMVBx5JdDrDWazTdpqY58Q5A1A8u91e6RqwJBUV2bzzd2nkZ8yaxKD5eAwreFCbTGuLfSxZnMpS41sG5dT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Va1g77eRWS1iu4u6i684sVeqwvhhJsbFGVbKbCYqnPVbHGoKPUkWHGN8PYVenYoMkn2s1ewUn3xuFSPnuVULq3U",
  "key1": "4F5Czqsze2ghnjxiN6Cw9atbS6Vb9YDsuNmrk9eoVagvjZwW97ouEpfBQRNpAAz6mngBEuJaUHtkdsGrvr2Sa5qr",
  "key2": "2WuBD3FRpLCCu21kP6h5QT8A6pJwQCzZaR53NYtjgLLdtB3DEYyE9v8iMLzsseXTdtqu7RcanTZzXqijhGaPud6",
  "key3": "1ZAiktjxSkFMq6vp8vNG34qG9HUNuoyRbsYQrdudd3D58oaMupi5E8k3DJoYPdN3xXXaMfDfaLLbhSocRaNHFtv",
  "key4": "2tdfPyJfcRxQfwwtxyCqM8igBa3MfrFmeDn7n2vZL6nMjh4ePjDTkTaPqq36q3LQmhD7k731aMjJQUF66CNXZXNB",
  "key5": "ou7mwLw9eG4SN569tinnSdxCADqNgveXmTbkXYK2c2oJ6hqeSTUjvnQVsCKwE4JQsorkhJYSGK3XRtVxhVDUwVk",
  "key6": "4657K7HVT7J8Co6qeMZHXv3a3AjcaCQW6V1K6hYCNYov5U4PytuQRsU2Ljt8bLfkFNFwKt8GjFCGJR6fTccNQMx7",
  "key7": "5PkrxXCcYUYbxNNRp7Jd9mZy2JuxiSNrZ9aqrubfFoV8oxESNrTc8LN7aUTmsKcnQ9uRMMPyXeRts2bCqxkRJQyB",
  "key8": "2J5nitnjsz4WbBXmGEfoy4hGQwVipymB7mMinW5iKfqjXJKiSf79xkSdwB2Dq642AhvcAQp2oefKbysxx3NtViKi",
  "key9": "4PogahU3LybCbDguXTL45kV4jav2PjQ3MCnmqYx68MYXDnNgeUbSvF11VpsLBYbZu1rjYBSd4ZebzS1ZExo5BNW",
  "key10": "2gb28y1CwCtTWqBQbAQS7DXVn1B9SC47NgEyeNj6fTbd7Nr3PVxQWNtpnELRpXuap4yKucsTEDsLiiK14u3ymxBm",
  "key11": "2UzVGdWN5c6CGsowk5WPRUgwwq5z4wqjQSSVpmnvKVd1v5SJQmi5563WfpW7REPsUHaQEwcC5oCgeeyHm7jukPvb",
  "key12": "4e5tdYZLpaz3MSYcTGvDNF7WeTbTHD3dYL6HvyUGZ9b94HuQENqxeUyBP5xvwEnC38XaEHV9bjbeGA8za1yGhYdV",
  "key13": "mkVQ59KZCcdrxZCEiWXc1JjQV3UTSjYCKc47wCvH1YqNrvLBBdzfw9tyZp7zYm8obnME9qKAeVLiEzChRakhv41",
  "key14": "45c3WsXWXyS9NFJxWxHNmfD4SHBzaCudBiJsCw4uxAbfn5Uok3B7KFb6w2mEVtq6oT6uFcEoK4KhLtwhvBrJMDiQ",
  "key15": "4jF1rYbDNQ7MSWNyzHP1NTeszkE7QNgfkJQmBApuwVjvmRtjnaZH1yBSx4bTdipbxYT7dzbFJHm1MqKSuhy5Qi3F",
  "key16": "3SsQuLTE8Zco2Pp7fD48T2PaakpYHZMogPMFcqbuuXAUNqm9N2ciaL8PL4RQG6jK4ZBkXEwWBNYpXdfx1G7VzHsM",
  "key17": "5uVFGUDJYuCfK32p97EjXHbW6i4kjbaprRnMforSxoxK5GEFaocopHjdyaMCc6KTu9KvkWSd55dEunbDbQkW4UF6",
  "key18": "5t9wq7QddfkXbneARka12txKK1ZuJgM6VzfF67SRuPpFfZLCKLQHBHnyyJUhLvzU7min1T6p4Niwm5WP9XB9uxXv",
  "key19": "3DWvMwNgxMi3NavRZ2CoaDPNQ82kqKBDZsK9NVVxYTurnaJnqoBKyZY2SmKRgmugork81fjAALRJRLs73YhqSJV7",
  "key20": "KZ4XyWJK9SDK9vpRSg4TKgxyRCttBeeWeLyeF5BZ82XKQuqCgWgms8u9Z9UFFjUwFFiwXHuxnicdNd1BzBZJody",
  "key21": "4uHdZToufBTgpomuJF4JAasgmaY6M8a4kY6gfVVaXNyQTbV4zthiFS8MztzCamXqBFsyB9esoVQMrz4HLjw9wCPF",
  "key22": "3ZAQ9DUXwCdDLBkfe9E48bgfNdwRQTcdxPS9r8Tv2jiZK4YenYGouqTYvkWK7S3Cke9vZ5ZxHN6teGmdGu24kVjY",
  "key23": "4YmsN8kbfPbFUJk6WRovMi479HcbPpJf8kHWJdMGf4HDpmpdsFCiYH1i3kpPuBJcuxoJpoBXiPuU2WDUKdo11JFL",
  "key24": "4Bkh6XjHz3rhMC9zSMzqQo1PGJcgAEjCEybwNaCPZsTnWLHMwGhEubSsgRrrGtJWFKFwD9BjxKQaazMDxVE4DQ9p",
  "key25": "3FLVp2fHigyfTah8Rz76KfXzn7Jyhe4sjVEtG1GVhYP7GmJNknU93KFdzdTXCnxdg1ByYL4zMYNW9JLHMJzDhh8",
  "key26": "qn6wmu8gDSjiShZuFPsEdsC3KVLpEsbA6FCK7ZozkEhVBPQNhJ8j5xHNwdQLcanEUqrextTBfMdZY7hcNQ4wpDu",
  "key27": "38STXSxtdQWrgcKujKcigZJLnsyrVAaJqpbDBGM6Hu4EpM7po1RQVKhSXMSKexX1NpBs53Szf1KkpxD1NxQVrc9E",
  "key28": "3RfHy2eDB75bKDdo4tt8E6tns6Gt9KAnepVpDQ5uGzTf7MPiqBf12ZBcrayZbqR5mi5ZdeCNSMCJemCHjeHs8xWr",
  "key29": "YB17r8tVutu3Tmh1eeKGbaeJRrbyoicoTBy4ZjA6Nnve6n6d5qiastZnkBWjS7HzWXuAKfQKbkZgptfUzQhr4UU",
  "key30": "46sNBKJviKTvhsP3aSrbfXFM42UBYy2nQL6tod5a2PQyuFvkzXPTsi5VEhRzxCpKnmcaxkD9dLa5KwSpknSLfVsT",
  "key31": "4jm7ZWusZj95P9S8oyHDEXEYvJGVVCfX4DGLuGbWruMEKre3DkmqKTx8YC8kXqo5bgDwQVTsgNf79ZQJgQ2L3QC8",
  "key32": "5LATyxR4ovZ8SYo1nqvKBqhS2PxvARiU925dY88tnzJc1Bg5QKtD3nddpfADNgXajxBefhigpmfPkRw5p1bGcwZz",
  "key33": "5eWxbwR47QLqK1QbMBs77eP8r8NpRxX63uChLsSEnAP7jH9JnQnU5pBjqN2XgCinrHM9g4v66QhepCAFsz2HRbRX",
  "key34": "JvKVrK4Ekf2xkamz8BKZonwwMcYNuokyBnxo2ZxU7CAgo3c7op5TVCE17jSxH5JYovevmdChRsogHHUc2LYHSj7",
  "key35": "TmgfE2wv6iT6bEjKf8J2hr8os55ADMbhPA3RZ5PUKcztzfQvjhVC67LPZkHGUwuUZCNB3aTuJzK7ebvjq8a7dm5",
  "key36": "64W4UTorCsaKC6dTfKsRe9QzjGfcZ4BUp1M8MeLtWrTkXiWY9CGP5KKD82aiMzb4wv7ohaUMBTTd97rqdYfiYQ7b",
  "key37": "5QgvF6qoLnNWGa5y4ogm8zhnqwJYPLVvvPvbEWQVtVDYLYrSNH6JVV9cSJU7BXgbxf8GfZCKZeZ4WQX7wNHShdvn",
  "key38": "3kkKbRzmQm4TuVzo5NGe2ChY4MBxXWAZcvk56XM1dfVJGZmoaszZfybJmi8QtfmTGtnfgHx8Lpm9FGh2oiARYaJR",
  "key39": "3bMa6qeNxS5MMrAb88NXZzgcn1orFgegSsQ9qZoWCPgPGZBwXxYbQnvJJodxAc1Uoau4yjHaAM4wAFJbSgggTBu",
  "key40": "39qALykW4rCRKbxAqtV8XhcCPLPFoCWfTCp3YggLDx6Weu23zfcAJdT1ikN4CHzGyV6tX2VXYqRZEAo2hskR5Wsy",
  "key41": "3rYydP7FnYEPqX6MCVasJ2NKPANVPHDig11yGUiDP4ATZjxh6woTEPtPFuianKahb88JXPzVoNSqiovvURnCrvvr",
  "key42": "3QG4brcHjcmqpf2PcEryicFrhdftXnceaUR6dUa5mQCGAQuLbPuC76qpqHEiGqshNaDZfrToCAotm5QxhpLqFA4A",
  "key43": "42zFEjpgmwxXpXpRHbHXuLMbKG8XTQEvd7GcCmoWDDpmq669bQwyvCXdVtTRo9kufadUYMXvyJMiqWwokgSm3TQL"
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
