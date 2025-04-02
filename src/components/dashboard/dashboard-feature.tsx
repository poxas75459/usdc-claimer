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
    "29W9dRxZuze4MvCAvND4cAwutd7Fn567M3CWTG9cGPzJjMAQdbxAMaoTa5F7DsnukF2EBBQAVZpz3bvuinCVo68o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29HBBgax35TfqM73PSPEr4V226Wgkah61oVjC3i9GxXK88SzXFyH8G7k4ku2UXhJ9t4eCL1a9rG3qTb72LsTHjmN",
  "key1": "4LPknRpkmCjt7SN4P4LXjDeZQFb1C6MqGwUVZavUfe5jV1CCtW8KJY5swZ6JbaHyhFHZBJAFnWRqeeuqtsh3oAB1",
  "key2": "5WJjwWFj2CVpU1BSQiDJ9wsrZrYrA3zjnghSPt33eMJQcW6yKMs6cevZXwLPcumfZRjuLbaVcAgXF5QoathxpxJA",
  "key3": "4uawaT9EeSLpC8vsJvjAJGRHvgPAVxiAe9WDtizMYCpVfpoFkJnjwpStFc4eu1Lq86399L6No79CBK15p8So2TQU",
  "key4": "2mrmSCaVFYR3Qrsi5CZMxKX7YXKgj3pbNnkCB3sNfrrmoh4yJFMU5tQbooYsmpodjcwD1j7JBB2Ko3e2PqqnT6UG",
  "key5": "3Q9NJwwqvHqmKzxH2Z3npGgrhwxD5HcGvke6LBLcvG5QwrRFiyivhcnDaYnGQQLdMVSLJvUvDnosYgqsFXHJ6KL6",
  "key6": "5KLzYL7ya5tUaj12rEijYx3v1i97tqVzEXPHZQQyRF4fi9k6GUAVMpwL3xgtR1rbAyDLraTpP4VkeAMVhejiMsU6",
  "key7": "5xrDVgXzN6io2nRBACYWaDR1fzGMMrgTN64aVZgM2L53NuUYUPDBvziH6S7UKifeq3TTrTie6Jf5GA3PvHsUg3ge",
  "key8": "4sSqbiSRsSn7wnw4tXW7opdM85nk93uR16Qw1W8bAKSDmxdDUh3VRU1BDTwhMiLzyjNnX8vbvM4WDnNmjXJFdBHs",
  "key9": "56tXbyBwjWmFGCkvZer3v33YqeHeMNpyhjmxtfPCLdAb5xQjcyrtFZbjwtDkkMZ1mttKMoCByPgP1QV52xGqp1J4",
  "key10": "4okHJyJPXfAiteRfk2xhcDNdiLwBXhAfmEBemdtN2WjTETazqmmAUVQtXMDPgAqdwbB6Qa5epBJr3d1kNCkCNxfK",
  "key11": "2jdjVkSRYx18Upf833Z32MgdtfisXoysTw8zD7pVYKAyRnYR5Pn45Qw67CCuMEHrSYCGLzBn7K6s9nQRSYpZ5Kd8",
  "key12": "4p2RYgVh98JxbsKTCRYUKiok2Tb9zkQH4pXEK2sDCRjwVePV3wxYfxL3JMnCYBAnT9naavvZYPZN76BDFZpEzjXu",
  "key13": "ykQi3jfiJQTCjwN6wgaoMRTxnqZDJXgRxgGboBqQ5X4RgCondMf58c8boZpnMsYo4zBqnQNDaf73E7jne6jT5KQ",
  "key14": "4HFcL4JwygKiddYPaJCGZAhgF5pU55wi15uTjwvVK42tSYrDvPvm7UAb5fEmjvrmsGnUGu4aEbaGggqqnh5xQjM9",
  "key15": "2MMHD8ezUsAUmyZZgTYqVU4J5yb9DsdJN1v8m2o2Ja3nm6Zmw8cFWXfmVanruHRS1tNGxXTpf2advJgej1zxBZp1",
  "key16": "5aAXjkaCfQtyQKasUfrf57ZMETCTuDuwFsSAnJ4Uj4ZVPayMUYREdee7nNc3LDJNiBzHMxAcg6T184K5oAGjY2yn",
  "key17": "4gbtAXJHnsffauWPYZ8d2UC2k2NbjY3gbaYQFHTvJvRW212NCj2m32VKgDpGK9TPPM4jBK8aWxdt1jw1YT8nNLxh",
  "key18": "3aiLNMC7Wu1oNi1usemBCsxuXwF3UgTWWWY5GSfoTqsZFFcmNCtWTcMDacEtHqYNBDRj5Cjjp61rqEtAoB3ZXtcZ",
  "key19": "5id2JpddMaemKCNy67XnRVGVFHWMEciqPYX6NgXt3K9Yy15HRxUB1tAxVRMvt6bu6v7LpwtWBvKMsaE5iT2xYnnX",
  "key20": "2CqZMszPFqsKSvYvCGDSQs9H8v35JTnXbv5nv1F8AWXyr39ZuSSXMAxni3KgZS5ZHJEsjNrZwVLMkKwCju6z8hLT",
  "key21": "27HNGHqF6rz8QrD3Ah97zmx7K6etKdUqBa8jsU1fBkmwTEHTTJEmQrJNH286oTr3onRqomzfZ1yYb2t3SaWVubM8",
  "key22": "22MuM4wBPNXwDtsrgREw89vp8bERKr5AvznYCvVbTJboohFE76cTDCYG41yB6KXVtKkXXjcyJagYfjafuSvrkcbb",
  "key23": "2YBCwwkgkqXokG5Cebk9hdBpSEXJazunyv16mu7SwVEKewYUEo3PekvBg1X8ZQtAGSkVw1rimwRxAPqHT8MjonQk",
  "key24": "2h9pwqLeDKBQDf7iA5LKUHyu3oBri5q4svK5iRNV3hiTS5ZmR9YhSisqf1ickpv8fo3bzRY3kqsg9zHrZoMJebZL",
  "key25": "27Kv5wFNAJw3Run2JQickD8aobbssLX3igHAJyUa8EM61wrTvGLv3WmUXjQ3hy4XiSmUFwEfibUy1FgqoehyuvTz",
  "key26": "3aU7eUpx3E1jC69uskTibuAHMjNPhEcfpVvQaoLDy9ESW5FoUMuhtiC38bCbLwn8uwga63JNMRXy8QLiF7LxG4yD",
  "key27": "cQAJ3ehLnDP4XFkaDiNvLxzzfKKwtzADPLNLymvyV21idNzKnVhHnicZd6go4spJmqa7CqCNB2a9GJKWGPhT4LZ",
  "key28": "AYRVsEUVTtQy8dcH7VAdyXargADiRPaqk1PzLAfUQJ2CyJhp43gUgyNEY5kzUmofbKdeqGP9grpVAWDxRH8rvw5",
  "key29": "2kDBJK2LnGXc39d44tmzqM8nJ2EKmaj9uCHjJQvUNHecqiXeLfTqx8H6xG5ZyQsmMNmMaXbN2RBKuucJnRJEfQQi",
  "key30": "56Q7t1zZMDqfVnvQBxdxHrz42hgY1r9BHTSneVTLvJpA9BQpW95YeCLLW7yrLis6XdV1CJKKWaNJDmqF6162T5Be",
  "key31": "7WH4nQtcDjdbrCjpE3jCgPkTdB3BQhoprZYPLCHe42JFXnbiQLkS27ftUhcByHJ8oZjeDDBSgNGSdQhAzctfmYC",
  "key32": "2eyfNqTxMR6xhvgQZJxdi8reHpHYWD25mknaVHZtN8hPL65MbQBgZ9mFnEheZN9dMMNLsZWpK7VdPKzeYRijfjbq",
  "key33": "3Fvi5kyk7rAaAoDbLFqtUp7Dhqhh65D2D1aPfkRUp5d4SLu4pE3kqckMk1YgKB5y1NcniM33UvXVNQ3CuNGfXFhb",
  "key34": "4FKATE799wyUkhkEpGGYb3ch5T2LUk5zgGQpvTVG21GUfn6grzfkjMRTP7FrCHixe8eHhooNmYyLAJTSzFMrtPoY",
  "key35": "2UJLutLkGk7hjnKQMohmgnDAvLNRCFCU4ommivCNLL8BgJkKfHdKR9qZGY5kyyyGb3v8GvN2v5pf9dFt8RFrCgdq",
  "key36": "3sjdpL2baW82LSSvHW62233cGzyCCBY4S87LHKaQy4cWShm8rrCtUmeRti5XjS65CrUNhpN5bP83QnNQBpHJSw4H"
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
