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
    "4SXSru89N9zY5ENjQeQrfV7BGr1tMaghvYFVVhyNvKMxhrT32Ge2pmMC36qzAwEoWoXQ3Qub1CeECYqEQuLTije4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jmCf8UnLdRsyZqV3MEzTXWNo6FSk5BggZtkYNMtFpVAiNLNPVGWXHr5sXRhKrRgibDxCfL8rW7yRW94ieAWAgcB",
  "key1": "5nBMhzuMh5yKAJdEW5q9EHd8L1CoTJ81jnsQHLYFepA5aC3VY37H7g74TCB6u53cbjFb5wmn8T4iF4XLF1ZGyS2N",
  "key2": "4rrzm33zMzU2KnbdwM3kkzfJL2tzUhhqMNK49tTG4Xmywpp2D3fLdQWpgy7cRmmsu7zDCuxJbVGYPiZsUK6N6eEJ",
  "key3": "YLHMHPzmq3KqyhEf38EpnXxZPJ9PHeVDFsaftw89SnpHnnVU1L7brLgLcDUrQex4zwmufLUw1Sh6kT3gyHvAR2N",
  "key4": "4NgDCT7a5nDDpoSaxvjp25VoSJT3j1QeD6Qs71Q7Vb79LgWgh4MFngQYx14RGrQmc5F4sT1Xyt1pjcFa62N7wKT4",
  "key5": "5NZxAUxkpnZwKGLNmYov2pEbSemDLhkxtjPHdkm2FSbVubvcy37d6GTYEp9rTWVuz21XwigDrkLQW5Tw1mk63ced",
  "key6": "3nSfhZ3y552sNy7hMvjHXTvVhXsUNq5paiKj11cSToWrgoMFfPmq2nTLNfbi41nth8RaLgrSJbkYYm9J2aX2oooM",
  "key7": "3iiLGvxtwr2abDR4VXPJnKtzQyWiAE8KtfvJchuJ63EndR2vh9pZdEVZpQEKuQwxtjsXXZ8tGqXwWdVZyRteLKRv",
  "key8": "3qSicrTPngdAQyKYzKcmkx41yqMsMjUR5ucoTCpAdbwbNxHKdGtAioiKZA9M2AHxNPn713RbyeghnP9c92tG8c9N",
  "key9": "2vBpaV7sh6y34s7BwNCUx3ybbhpAyH2q8eTCnPLQy5qzSwGzKEwNDQ5muSSLnFq7JDPa2VZ5w42UgkUCfwqzDMyN",
  "key10": "3vojNBmnqT8KMXpt8virfuHKYrTjjxfC6eQXWUJAUWcvNfxBuGEQTFkqHgrj2UUok7TLSHpZ8zCN2md3ei8cnvrc",
  "key11": "2m1nVDxADHTU3JBSWbvb5GY8v4HFRmyHaL5VuktjTHFUjVExEyNjQnHEyUi5BGPTkocGPwKVHcXmSkxZW6NQ7cTo",
  "key12": "4iRQjbvGAnKZrzYiinNi3ujjBAQzhRiSTrisYXFREBUtBivpu36haAGBjkxmVATQo44qkHqJs4vEg6pNQ2piuPao",
  "key13": "25zq9yYrL2yXC3d2eCe4Q95sFjAVGbjbvebhugfFofzkawTJmBqeDn1xd5RR8ouMRKTp9gwaT4shUFAtuwBsGx3n",
  "key14": "o1tX8Sj38BBNuFBzMjXtjFnveamNEy5Zj96T8LkY4TUEj9FNZnrmzov2DHkp8DLZDWh2DVnrjHgj32t8oWbSxoL",
  "key15": "2vJtEsFgK3Jzo5Knh7JAM185Umuxriwu2ZfTVpoTMgXRGHohY97egPvLvFqXgRt9nupr1eFX7c3irfm3WQz1utrP",
  "key16": "44dEnezfndE2byobrcJsaAKUhP6XE1cEuwx9NkmgLQ6C3ruSqioA6ciGFpzgh5RgcQ8BppzCqsEBbMe33pTntjaV",
  "key17": "G9kcDAi2nYAEcA7ZnNRXDMq2vmc1GbqhHxzHdsivKaAyhoXQ6NpaJ8hacjauXRzpNcgkk45D6thrLoX65jVhRQ5",
  "key18": "5BdKJbVPEnxsNdoy9bJAkHYxqmQbNRtRV9ovbr1NmuP4j8KHFsdGt1rMFzu7PPUhfm7HaS5XGaFHTZL5K4DajtZP",
  "key19": "3q9NLr7XDXk1ZL9cMrJfX9gNpAd6nueGzWbfxB8GVgjhMrncbKptGFm7MLBKt1S5BUb3isuk3y3QQEEf2x8hw6Sd",
  "key20": "3hH94q3dLqLpdPWDjg7xGNGchmAkmE1DZUUBx7n8mHjak3gVCxxRQJFMQFapfgTuKEo2ooQypgTQBVQxoAeGxr6P",
  "key21": "51KVETaV7VKzQyDX4dY7zahKdDopZnh5G6JZj8DX7z5ibvgnUyrBVs3jkE4ArUnnDA4CWxK5GmrHDwj7pEjBhkft",
  "key22": "4Ywsp7b5WMdCEhJrnTw8QCBKSEV1eMqqHjhNRvuxajZC6hxC4VhezhL6e5AeHv2U8eq19aSFxan3WrFdGjcgDvBr",
  "key23": "2e8ctkopPcAeiC9pQ1B2XkKSr3xbyWEXrWiBBEFP8kEjuFMT3g4KTZcb47pioDxqD26BvWpZeAzVnqwnYGpbmzZP",
  "key24": "4kDFYTU7Vp3GTeqEFEALk51692tj1SbGcGz25U8YC25r6Rb5ay7qMVsrskpj3TsC83AkKUPhhnwtMJHoFwcoH1wW",
  "key25": "21VkcGJN962TsLzLggu8vwtXXY33uk6AGerMUgpaxYRVceHjTEJr1vqEwrJPqMXcyP893RxLZSxME84LFGLSiYys",
  "key26": "64acQoHVFoTc8EBeMndQFkEg8h6RT28Ha9Fc3qWjqMnX9pWjtvYRcB75yExnTSfvS7vt7wuMQKGrWxkZrnANwZsu",
  "key27": "66cyRwoGry7fuirNLYqw5FZwYRQCEekwYP4XEeJcWuJBs6Aogvigfj3qALZHgQbkkWpRcPw3qjvNfQqcwjN7fNDo",
  "key28": "4im1NQ9P57GFyLtZhf7NSWUHNFGeJtrXofRPSXcsvAxTgfSBwjyRg8T1KUSJQ1VpZnSbHk1KCBG2Ggo6NM1GZUSX",
  "key29": "5HuhQNqKJ3ZPMwvaP4AnxaRUNEBEPowqHPekgNaeSo6vxi4WEroFgCA7YUcL4Cn7SX1y7J4QBoN32kwt4af6wM22",
  "key30": "5KY7V6zX7PYuBME9eNeRLF9eiRHxSyxeZEzxe4tmiQ8fhhirgwKTvc6UMDAspZpDBMiXj1S8QMmLZSH92GmBAgNn",
  "key31": "36usGvRVVpCvGnKtLxqCzfzGEnGv1gFG82m5rWpjQuMA8FwdqQCKpt79WSn1PGy8JFvP3MbXU3s1DqXC9o9oT35a",
  "key32": "3rWBTXMqYLhKJMWBnEgWsPeEMUBgo7fJsEaihp7W9xkooMSdcyv3Y6jTVshqs8VrAxPPWfuLYkUXzm97kpkcoWFu",
  "key33": "4NQmq3kASYuJxbxvrSkimahV1nRPJM9WLf2P15ijxT4Qyt6LUpXRwd1kkoyPL2LJDQvNZkPo4HtaTZpXhQP86A2q",
  "key34": "2b56wRXacmoo9Ln7aFD6LqsV41jGbTiv6qiUS2yMqiBnCUKJ9MAeCfDcWr3XBp6FBARBDrwCWEwazmRjdx3bGt1K",
  "key35": "54vdx9pXq4XMpotTJ2Xg7aVJuaY37GujPJoPkA8Lgi75hijLyr1Xew7u8qK1VhSpMJauVAAVb55aVpUU1WjFmhVd",
  "key36": "56cSXiWpDNpPFnKNavyxGqqiYJPbHQ5A8YoGNm3Q81bESSponaH5tVXUrzTeBUVGwVcYsnzyQ4tp4AMMcGXMCj2R"
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
