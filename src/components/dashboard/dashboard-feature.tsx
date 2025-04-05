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
    "4Dy9K8tagkdaihDTtpy5Cf6SWAsSCBoNE5baTHwot8QaAHZnGfYXWDduQxJunp34JedoWfXqqjH42NLZgMy2KBTi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DS3PgerezUJ4brZ3BzHb3wWExPin2ttMwpSTv5yUBqPj8TPbYA4xxQNsKhvDkyMVkLwWBkHGUv3u8HeLWDGJPc3",
  "key1": "3yqoT826b8PQwAnPMLdu7Jyk1YL2B7dGQGWrE1cMuVqMi7b9aBsJi3BG7rh3o5QcEzLwrCaasRSQk2gJ4JBnL3WP",
  "key2": "5o71VuQWQmtFDVjpuumghP29LsEmD9jedhA6T9NSzpswuYKZQpo61r8sjcn9ryefXwYHMQY5YQiQbui8dWKh37L3",
  "key3": "52heST5ftp6ZsyKWVTZ2swCmf7ksf3aefZ5DuN7tuSshZQcV1z2xQuG2KHPTad69XtV1AM7soVEAc22n4hbvnXtp",
  "key4": "5PYzGKfsLs6j6Gkdn4SmXy7pTpZcs8Xn4BJ96iTqd2S6qxTE7FCMVu7SnDW8pgDCktjPy5nX5vcCAAknLo2gVzJr",
  "key5": "51m5Ta1hvtRNJvZEtYbNoJ57uvpCKDDMmLYtE1p3YGwgyp89vT4MK49i3vqqPH8y5xC33RZSn63JTfnq5p33T5BP",
  "key6": "53E3jWfsx7zdhumchA7CVyrft76jW22UUJPZoMrN5urcZBqEQwPWdEHvwJ9M7GS8HZ4MknyZbtdMUuF2QXCXcc4V",
  "key7": "3fVTQMXKExsP2fWWArbWxadhAeRgZpQBa78QXj1Nk39dJLzyHNjtQDxWjVrEr6eaVYhpwimGLpaidbTi56wcojrV",
  "key8": "5WpApgH7c6uPMBSxFpDMoek1bjajusszbkPrKfRx1hYVUNEhubVP64XfevpDwBPyF32ZEwfvkNKukNye6ScF81Rk",
  "key9": "sFXDeRRKZfVhxTwAJjWuRUapupCowBWXguBui3mhFPGbHEaf51ctLqR4tSXnwEF4yMB8MFLeuQYruAHcnxG28Xz",
  "key10": "4L5gaaXwHn5nAUTBSzpyRqKce31onsSdmiVxnUmVBQb7sZb59BRkqn33cMv3vNSp4L66vLRG2apcReqoVucYW82T",
  "key11": "51DHMu9iynXN6d5XAd35mfPyCeJxLosdG5wXXWjPfADo8CjGFMCbVCZP2phxsm4hqwnjLwTg3NqBsZY4JfPWNwXA",
  "key12": "589APHjgXfEYKm92o5msqbfraE2JC3Ltq5wDCf877siEG2q9Wa2TN4iG9Hjd5f9K1wpCnMaUJKQRU419LEU5gNZs",
  "key13": "BdpAGpKeAXSjD3FAXazLFGm6z4KSoe2AwQiJfZ417Qaq4FKoYi8C9JECysWCyY7dHC6sHXooUWPXoXFZE9GAkmG",
  "key14": "5HP6wqQTRk6jseK3FTzUrP9zGGTUui8VRaFTLybiSAsiJbTAkd6rwWAvySoKCnkmUvVoSKBeYvNAh2mopjpXNXGs",
  "key15": "2t4AnFJgeZq5BTX4mEHpb5TLDqPPpFLcCXwgeEnvhXWZDQvoz753aKQtyvvykSVai2XNEFq8Fhy4UQAR9rVqarXf",
  "key16": "3EHYFZ7MEKorbTtwzbY2h2jeWP1qg9U72tbfULEJLWrWpFrij1iHyt1TYTDoBiuq2DsQAkbsWcGNWs6Fd8czy3fk",
  "key17": "5moGVTAUN1mPXhtGf2bHbP2R9eYRg3arR4kDYvyzXaPnVKizapsHzCJLeoRQLdDAFRU9k8n3BFoSwjFjz4FTGKxJ",
  "key18": "3mqUqSQXJffAoiHhd6N4hwz7yVkucPt2TRRyyLxYnP6HgSvkojQPCFGS7MSKaznspXvqQ4fhXJL64GYu2BijRYbf",
  "key19": "4uVZQTZRLCuw9t4bmFgZ5NFtYaZwPCaErTZhau2Ja2uocU1TjRWTeDF9ME4DL6jFmbiTjhYrt2CQYxHBVZL7hsmd",
  "key20": "4RJg65xmdHneL7vmsBrHFCxZqWL1KCQwtfUVuMzMqbEiFH9cbCNmr2ggr5fHHDeouNRKcZy9D1KBtFxK39DY64ZV",
  "key21": "3e4933D9xnMN79Ujt4o2Xtr4dGntGNvNziR7cTQaGDLEZjz6WsVv1VgMgfxPC147m6WdDfL5HGQnxjqcp1wyvnFX",
  "key22": "4gJX8vGJKwAhkozhxEwMpGE72AsQwUbbyzX5F5QVPo3uu9jv8mbxvWQgsr7gb4SzYy8xMAR2u58XDe2fHjSyLWKw",
  "key23": "5Zza8kv8GHLuuTgNwRKw8hS37epy5EHyjVv3mYdm91Y1ezMn35tV71MixdMDG6NJWNb4PiLQ9VfeHaB59YVhkCFd",
  "key24": "5T85QN13UnFT7zVuB32FSmZi5GJQNKajpKnqxLhBa5JagRDMn3SiNLNZ7Fn5dmeYZrs7YLpqQYDmWyC1JmR9sfjX",
  "key25": "7aqo9ZHnFQA7CmHyJcrDdBQWVJkSjYCZoyxMvGf9hhxmtznTYEtqPtffEBZdxybvSLjsH3sXHJdWdEkjMqcnVZn",
  "key26": "aBembN9cmTixSqRhz1FsT7zpg4rigWQpZe3JfoXHBMe381CWhxsa5vZxz1uxJwZbGxfsarGf2bx2sx4gQv22dF1",
  "key27": "4PftCwvgv1iw4F6bxFRqbF5kWNC1ZRG3HFYnGNW4UHXabgLT35sjcMdYH1f29zr2B1sSiGg4USCpGQSnRb9Z3dUy",
  "key28": "4JfYg44CAJZr6YLNb7SWaPGcgQB2MzSj8pohPdebqS7iRASDFCffKPUYiVm2RpBVZp2ehY3rSXK4k2e3CX7BCpN9",
  "key29": "4GZ3LKB6ZXFv9K7BnBX8ZU3UM7pXdERwShk3dshFVPoHdhfKX7TBrimpt3X7ruWLNRq8DCE4kExPYRGCacTbPR3R",
  "key30": "4TKimYce9FK5E3xaDbe4YF7WP8FgJEE34f4HpnGXgpMSzBg3Jhk233nwquZCuAAxVzQhz1gVeB2TC6CyW7NARmr4",
  "key31": "iCqpuVfRCggcDJbfUj9Mo5dkfXtTZZK1ogrPEEHgFenb7CLeq6zrx12cn4j1hepb1omrAKufqJVLwtq6fiCzp25",
  "key32": "5ARUupY3CNPBzFjsAgefxF1a7Cr1WfpuRaz3NpN5fU7Zj61aPLBU8JACHdVu8mRWxwvx887WHgfi6WRwF1pNGQFN",
  "key33": "5e931J5KghQnhNdVft8NR6TMjmtv1UEXRpKFSoF2bgsSaUMsN6b5v6qVDJJhjWKrTnxhedom7JXPshrM1oXQe6sC",
  "key34": "4DtTLMUccgKbW5r5Bd7qj2BRaPRSPfuYYSobb1qSwbfGxcBkvuMJPPHh7uBCw8QXMmBFcC8ThGA9khuXa5tm8MVp",
  "key35": "28raU3YGFwT3bZonb2J2M6pTphQU3KbMXsVNBMZgH52tU8bkpE8jtGJtj1Xxr49JQJQxFVG8TJZan7P48jhCPLmr",
  "key36": "3TrMG7M4SawQevP2Q4fhudaTfWPRu5g8RQtEvJrKfxyBGjx4D3BDRMubv1N5ntSomgQNd9abzqxwvaa6uwAHWd7g",
  "key37": "3CEQMaYnpQNXL56uRsvCzE7fZ6yCxYLGzLTx6kxKJtyrLV7mQWbaTsuNZZrSXcQAD4MjzKmkGVEzCngnF1wzcURv",
  "key38": "3yT18sWnTXq8DxGJZ4xoRs69nz9oo86Q3HRAX273fVSBN4HSCujpDWZiCYShgVyEpTp7WmuxTqRxsZmKRVrTUrAd",
  "key39": "39ViGQuJYphNRhTfT26KQ4TDzxjY86jH7RCckEmC8pqhBi21xjncx1fLWFxs8fVHf4SEC2U5h9X6NoznfPw8noEJ",
  "key40": "cSEqFEHp6RKCiPP87SW34tzHbZDbtSe6SAWTbm1pEujC9ad2mTXNKB9xyUD53zhEADzRTGtV8spxVbCZepG18Ba",
  "key41": "2kWqA9cytZSZDNKFdxD1Ts7kEFsyxr15jZwkxeX5sXiSAa8ZweapLvJPKdh5sdxxxGCY4bs3UGk9Z9nbxCRmYCJK",
  "key42": "65ZwuBzBitnwBqixKEbYdfZ1ic2JTXbdiZ1gweZXfw3KEHsSTQ6oZZsMdyyV4v8KYchCgCbzRCCRZZsfZ42zxTSX",
  "key43": "4yrzs34F3Ug7m5YjRdDNb2Lsq9CJJdy2hpXVUxS1meD5xqcpcvBQd37pKQuKWXCumxHFAc1BpUJ4qvhDRXs5i9b3",
  "key44": "4zschbinNbK9R4dmN1ixihxFu8WronK6Ma8VpYHEHvheqTc4rUqVtTdCxLX58EFAUqZxZhbhxEyd5KEtWA3vzx31",
  "key45": "4JoEN236XxZ77PtFi2JHFDEKoTfoCaMQ2XrHnBZon4TAvJ559ffq8QPPuymc7ZgqGW296kmMu3HPEKaUgY2xQyAV",
  "key46": "461nA6CExiUzaibDBPQMHMZhssf8EQ5qeZyHg9LF3HJquhCSUzmucUgZ78gL1V3xNhfX36aSgMyR2WSjZzNVJGcg"
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
