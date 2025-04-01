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
    "f1vJ5QM9c3cdhk7YG6oxbXapp8PH8PP37nKhojAGWDkhDg5jRhVP75NV3tt7YkYR2fnKpX96rwCnAKyVJH5RfcH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y8WLfZx579TAUtBaUeDqkN59csEH85jU8S77p5EWECPxtiw1YRyqBheByJDzxcM1CC5PJsMv1a2Vzai95ZSxUjd",
  "key1": "kpmAeCkuaL4uHNfSZQzFNKbSp418wWDWbtry3eQhFRgwLd8wV2SbH7ZaKUAv4tcPM6c71tEPqDcyDWijiPh2Fh7",
  "key2": "2dNdkDnmMRPuuFsEddNbSog95R58Yo668wRHSBBSuJYZKQX5PCZ66n2qoQzzoDV8TC2e1vJEAJDgjXERcv4tjZVp",
  "key3": "51jLDQYqk6GsHjEH7w6UZba18srmsHJ52BtcKFLbo1hK1vn4FTZZiqKDY54uBSMtSBX6w1cTd9N6WHwMforwmvHQ",
  "key4": "35XQf8Zv6ayjEeCWNqnUasj9CUKXbUGmvqbwoFy8yEjeJm2Y1WxaZj7D6o5ypP5DUxyczmmrhoNKnu3dZ34wrd8g",
  "key5": "28k9AXJFhUivwAioZme8drRunK4hFySeBGFvQGEkKXtHbKwY8PESDZo8SdVHJBaahn1WKs2GYgKNxRnLMxD5AW6W",
  "key6": "23qrN243DCvf6ogZs1e6gKuvR2poD7X5J45nQBijU8UHFeCvmcMyp1h3VdiX7SjcQqacgz7x58sBQ3t2JQqLN7bo",
  "key7": "M9PDt7dLPD1FEeFzPsC6tqWPSBsmFcLBZMVvizDmrc77GwbFgpY391ayAZGirppb8nkXEYvfqeY9YBRr5Hv6e8s",
  "key8": "eLUKub9z2c7qEdVCgekAvty39dpYQoEyk8wXp2Wciuyk1iwBxJPGv98g7TfNURHWrSAXy333n7QxR3dWqBxKgUY",
  "key9": "4AG37HV4Pcdf93fiBWJvRbmtLxsbq9WSU1VmPNsFGR1PSVq21iZpwdYAWM23eMQoeaDG47ujhUTBM2GdjDjD6DJn",
  "key10": "vTFMo4TUWXvYsNNztRhP5NSwZQctbX9XyWY1CuBKqTyLEnaTF3JF7tCtb7dkMFedoNVuQGhwdEzy1LQJUZuA2Lz",
  "key11": "58iMpb327D7yQ9ggCpqahu9RwB1gjQoN7EEYZRuC48L2o3WB7n9xups1evzZPg1rmWaxK3NS4UJmzfGF24f4oxai",
  "key12": "2T5BXKbTk4SNTqXXVnE5vw4jZzJyrcKogEbHRQQvpPhqvbAmmeYdnQQf7pBfouBzMGKkw8pwuSRZGHE8w6PbcYtD",
  "key13": "4kDhUki7BRYRK6RtXkdBhsek1DDdEPfXP34Lw8mLCJqakNJinwGL9bEzhiLLn72Cmw1ghHjntxnscjTTqsU3mF4W",
  "key14": "2piJL8qiyBdHQWF3rBKYD9WgYTYnhacDm3ycBWJbaXi3kpcRFayHJBdtHSG6AtehH7XrqCJWec9ZmZ21e7pQcskx",
  "key15": "XSDsPWMSbLLwi5eDH1aYTpFJWrfZFZYQamB7oxCxUpYXkCMoGFjWBVnqnc5WxFdDqjRrWACD1DgpnXEyEyVx1Ay",
  "key16": "32wGcZdhQRqEQKd4TmkkvCYsu3NnuyN1dpUGHbwiMvgmQTgsjDdnEBnDuGxmb59npTnZYA8n4EfdtfWdLoUntCsX",
  "key17": "Kfn8nGx7f6qBpubCshWbgpNs2vbPa3PhFyfnLqCnzLkekozFWGZLQeED1mghJpvhm4EPN7okTYPST3GFJobC1gD",
  "key18": "3kDXkShfzmAWXyh43DZkQYbpqyGwMwMAH3xACM6R13x1GewatbEtxS6pChCMScmAZu2VNsPiRFXNCXVs8iLzwQ6N",
  "key19": "4wKo5G9H4sCZYjSX4ixyhK7VsKzYQFSvWT93jduBCabYSaGnxJPAnQdsfbFoarYAK3gXsAPDjhG5awBDSGSNdPQk",
  "key20": "4YLATRrqqkUFNxij9FBvxmxZA5mQeCvdgWzZsvWPtvsEfRnMPbjuyKYfytbJhdHzM7anHpXLGSYwbKeQ6jJQWi6c",
  "key21": "eDmv3SB5F5Hv5mxz4HUVgxkUQMkg14JCdjgDYYnqayHCKw6S3uMgn1zdhbBqRmcsxKSvZaDu39Gp7DJhPpe3QpX",
  "key22": "24ACBzn6LE41yQbMNrnpdo44JdnhYR79JkE67rrhNR3nJFmHpwn1cGHyt8goiM91Fz7KdPDpiXKYBSoKFvcqDTSN",
  "key23": "3DQrctixeY6e6RMdijHHVDkpkXWff1pD4rfGE1GepFxy5FwMqoUHPoqQGpdZGGU26dD3TbvDafH5epZ246bogKQa",
  "key24": "4en882K5mZg279vyihWo6KaY9tAThVEEY8poSPocQ2pQrNV1j3qUpNCGZs13yPDoo7RGhyBNu3KUU4rt5sm4wBDW",
  "key25": "4CAusdK5qL78W5Z3VoGBvzsmWi4hhCz7nvrjDXjmGb59Z3T5t9R2bs2v3WyE4WJMe5pw6R4zmR5i9ZQRegKTA5i",
  "key26": "2ZjjuTioJEsNh9U5xMi3DAAwvHfRFXASiRKjwkyNDMLtERFqmitrRfZticgoNMGPpaC9PBzo3GXSuXFfTiBZUE87",
  "key27": "64DXMnqqamHJSdz8yF4fZ9EZQcqayQeUs4cyHF1ezXtsA7t6uiYbMNz3doEqXPiqbGisvaG4MAZkh8zhf6sDCerq",
  "key28": "4gcCv5Ys4RD9P9hq29f2PZvCWQZGYCsRQosy55QFjJi1WseNPyxydZn1RQkdET1HNie4WA11oa1bm3URpdMeSE3p",
  "key29": "xT9vhbVoitzGYgF9iUMDs4yVYX1Ro7XYb8nmGyoaFfJgZ9pV2R5N9Si13y8cWrtJxFHQc4xnQ8h4rnEjQoBD51d",
  "key30": "4cmdd93vGiDs4nZ7Npxrvy1GDSf6DamVwBLBXwxM4QFXNKuJwJeahPFGgfCo4UkNLqQ3RXg4XWCwW7nZ12ksVAgf",
  "key31": "2i15Gd4cY3yqU96sToGNhK68TXXfRMdF6qEeJQNm7S34kaLNYQY9aALwd5CqoWiY29EhFSTYBFsRoxALBmEajrQM",
  "key32": "3rZ53qwGGDsPKTc84K6pzHL8Scf4i5nUfscv1GxvoJnesDiu24mu2KHSeimo47JYeCVJBRpnSEPbenKdm1p2sGXG",
  "key33": "35d7Z4sQTVqVPZKejDmF7A5H1Zp85e8Nd7s9vS3MwWVnBsQGC98bUa4tJxtQaJp48F7uU5KSHFtycAuLBqhWykpj",
  "key34": "ZdJyne8KZVeyqJr1iAgwFoUDnWDq8UsmkU92wYQrzhzUtJxatDh8sBQjNx87TJhibLhq2m7Wqv3Lk3kEDtANJdW",
  "key35": "UthfUvFB3RUd8dpTECozmEsvc2ry3xmcwtgxqTyBR6BF1WaWuBuGhNXSoDUvkvCsSv3KGtKuq2oMkc9N1Lu9GH7",
  "key36": "28YoUVpmGMePgENK7mCvvJFkRqYvEEU9tYmrsCaE2TH8mqAjaupFufvdm5g1aTTbst2tvMrXo7wqSvSMiAzXNHTG",
  "key37": "7Th23KpDH2bW9XEt3aggDdr3DQrcC4FNzJMA2VoCXgMjWE2QEmy1ppdKfvP86QH1y3m16TNRBh4SRxx4wStBYKV",
  "key38": "4RBZv2JeS7SJuunJVaPtE7BKVhJF9Fn6Uuj6zV6RWoCN13PCRo1GpnKqxgixRtU7TpDz8mtAeBCKBUtKseDwgxzj",
  "key39": "2hep39h1mErJV4pzGPJZ4YtUxWw7RkNSPbk76RDbgMv6KziVCMWLKpDzzxPEr44qGeQkqJvT7ssyPAoxVFj2q3WJ",
  "key40": "3Ak3CMtkoY9XRjYqcUAvaEjXeTPs6MM23HpsSs3nqvGpfNzpDQsJFKY3BnJt4T4ecsiSjva91mGdFz5oxv2zYQxQ",
  "key41": "3oJfGPL2wybRSmURJ2r2evbfQ3fisEpZRBmR5wz9bKJPDhRpyi3iYPUB9TXTv5c38FzUvRQPWdfuHBzpTXKvg4am",
  "key42": "5vMZhPUZBJsALPro1kABCucyDTTMdcLPXxYkE96Tg8KB7myzdKf6AEoemcv2daacwsiHpyPvbJJitKPPj6NNfyBv",
  "key43": "3QhQVisXSJPvn3YC6gfguBoVVuF4bZYaKkoB7dfQSLUNRFyzDkN79hhxfgfo41rv3TMXHrBdDeoq5FyRZ8vY3pWh",
  "key44": "4pyaq11FRDejaZnUhBJmvd5c3Tap6JDU5LdoFY4B3YhWaYUDYcSM6AZo58CWWJrHK3niTKtcMKW993vYFWwn61S7",
  "key45": "4isWkHSx7BZdozgQgrRticz9iMAAh5qRtRQ5rYfcCZSacXxzY6DRo6AVS7LPj88wgNcBcV4GtA3FeofRp2NyJsa"
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
