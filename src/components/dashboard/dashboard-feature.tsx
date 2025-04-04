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
    "YnjqtPc6eaeCKZR8qnJrHPqfz2q6hGgg4bZVCvGEr5cekWB7GBbaiYHcRrLgiFoFcz9b9vyng2GrBA3z54efKBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PPFoVTtjYzwUvrBVJx9Mzfz9u364TK8EXX5b1EahnKWdZArdrUsMUMy49BkeEu6qEyVRSmJgiiFo2UnHspR81Wf",
  "key1": "2iqsqCT2J3LsMsHDDU7P6qDAXxHzQW1jMUXDWwVZKNHG4mTuwzxAgXFGxViVqCdnJwAJAsqXFJJPiDNz6Ck3ousi",
  "key2": "5e7HnDRJLJZqWSEpZ7pfxMFizhFh2M8PMQsbQaAaCPueELHxLSMQRUsLYuhpazwGTHvBscKHkVMsXD2svmZf52kE",
  "key3": "34qts5esrfpbWWbGX4H67E6UFU6v3FCCgMcn39qpCAzrTas5EqfjpQhojPpUJPxe8T99zsMBFtYtxDHpvNdJAoMS",
  "key4": "DEZ2HFUweDqQ1ykCBQDiBovQiaXSKuyFnZ4n1ZbrKcgDiHhHPsviZye4ZosWfhNfv1aD9VP1k1jNUXwDvfAyNUb",
  "key5": "3zQduNdRNAtJGiiSLzWw4DxPDciL4ovVifeaTfJCvEoEDKyg8hfJvWdUeQ65kFdutSXfwF4eKvNcrmfMkWPZfst7",
  "key6": "5Hwj1WHTFmvuP6zTSxe1PMEC9ktVeL7YNubndzg8N5c1qSwanCt8UwkdxT9rMCm39jCQf6psjS5GcKV2zRJu3qYV",
  "key7": "2EqReo95Ny6ueEQBLJBQHyDe1E6tx4i14GwVfbCPAwscHeA17cD9F4DzjY14LLSezm1gDevrze1wcTndAceBVfLr",
  "key8": "3N1XSNb63NZzhPLpBAw8ZRzrqbpe7pbb1s4uYgSYN7QhCRjSpYH7PWmiaBNM2DjeUveaK35AroiSwwMWTJ9NckJ1",
  "key9": "45eAujg549hyBGjrHY7NxgcHUYQMwkLMKFyBPGtaQJt5Gps5x3Ebq3zkgmTvgr4hwAWqtrNfYMkLicpnbZX32cAH",
  "key10": "4SaPgdfFcmYVZcU3RTJWokJXFRAvN7RuxU3qhSq8mLkXc9TN6q9YaS7eiuktApJkGJrxVFe7xPipmj7w6KiTcEjz",
  "key11": "5ksNCmafhv2tESL4SgnVPnmPue7uuvjSALiZWhjWnZfDY4mu9Pjd6NcAuySFb5z8rooEEmhB8QhJQRj8VUZB4Drv",
  "key12": "2PuJf8KMuGG3DiN4HuZnMBqEBgSqZyMygYkt84Qo5RWZnx1yWBp435G5ZxmHgyhTp6ty2YZPSV7Rvn289zjfgAs3",
  "key13": "5PhrEGYZx2eU4tx48CNwxpZ9Wr8cYPAuxDLoxBYvrKvUZ6YfzCenDRufmhC8qe5ETMHJJYN5RRZFGCbydpYzZA99",
  "key14": "47BrvtyNAaxpriY5fJfDxsWmEGcfZzy19oRnzpvHJvVM5a2BN5E6WBD7StiHCMRr9UWZb6Zs4A8DXoDg7V9S5jT7",
  "key15": "3wiefSVYKMTHJfQgYkJRyxWhHqoTyijisQzDeQAgUhDofs2JqCGrjHaYY6pWHGqoU8mNuG46qBKXq7tQDXRWv555",
  "key16": "3cBT5AEHYSxTGPzZEZQ2VbxX1woFUK2rVT9kXCNH4VfPLUiioR8fC5X5c4gxJkGtEkYjvK2MdiJHKSBqENdQL1ad",
  "key17": "65nJhQzDGRjTuV2EYw7rUG7DY7obsyNLUFij1XaYvnL5VemiZ4PnW2XpgJQmkzG2FkEY1x98hp9gmaNzKaT7C6Yw",
  "key18": "36bMhaJkSLWiRiGiYfe2nRmQGfkkdbz96QZV46fj2tTZaGc1G7nfpA53MQL8cuuGqpFgYNEJqYk1kq7XfyLJFNWd",
  "key19": "67onHJ7zTsRdVggi4c5zA82JdPBdt1cHFoRW8Noa63sVrAsutD8r5VKp7B6yjajEsVWN64TJWts1dTWzJQGE18m2",
  "key20": "4N5TL5Bpkr8oCyaKgLoPEmVKiwPFihy6AhBf44ZnczLTFJiScCwMUfHPhkxnbBJNN5KrnbYoNLzJFjLEHsTRiBZ7",
  "key21": "2FYrNMWAi6twE2YiXMyzMUSJ8ZRAESFJSHaHrN9zfVoieFgEAkd4dqojnRVcaVv7EzjW9K1R5Acs24ECLDQTRoih",
  "key22": "5zZxhuxVbV61A4nU5ZjebPemp6hsf85MXzcDP5wiiXY4m2qKbZKsmHNnNFMsrv1tudxhL2j1V46wxdYHCJ6AtYkD",
  "key23": "3P3xoYycujyaGnbTop5weeMhrzfvqu2S2YrWnaYHT2iqCmrkdT3rv4RazMqQgs6NJXyd7VJwMJo5qL1K9E8czrE2",
  "key24": "61QdrKuBe86xqhqGq2UzhTNGfh7kBpTmtRj8GkFnT2SXJxJU9BKAfmvVJjrvViTkQ9kYjFqGUgq9JEuTBim2kNMu",
  "key25": "5yGr64jLoruRxEzVq13piDsWKuFHsDq4g7NzvRpS78KWDSwcQ36a42K5fN3YiNuckheGZy3kjdoeaD7Mez8RAAgF",
  "key26": "2HSmBfY4Svk4v8LU2XWAYQY1SqDmQ1DpKrvpFcSFU6fQ9vkmJR4yMtipSipFAAVM315RzYm2zMTemspnMRY427Xk",
  "key27": "5kT2iv8ZAKtnpVQjDoAsUePoPHYvurgSXmLhTyCh6tWMzYUqzo5rGPnUikaL6n5GmrQCjdckhyWFbsQZD8xUEa34",
  "key28": "4gAZnScKy9G9kQJbXfBUTXpXHDcaMqcQZSURJBJbohHYBDHvP5Ao4nXASCqjCeoS23EckD5RtxSkuTnCatdFf2DM",
  "key29": "3hBS5bHJr58CfvJjiNNiKCdFQmcixnaTSfXTijLsenDDpASTmSXJAoq7Cav6Hk8ayHtHeQ95T4KsM7ixG5N1BkPU",
  "key30": "2sJ3dh2yusE3zsgWTaJ3xANZsbJoJj3bjqoh2CksJK2HQg5Bnvpiz7acAnyy8rnwdE1hhbk29pNHKwps7t91GS8c",
  "key31": "32YayXeyLqwSrmiV7Mrxag6BoHn3e5mEMnNrx96y16QGiAYtp9c1YhDSsQENRtVKgzz7g8Nk4dqoxFV4cRxtuLgx",
  "key32": "3CtUu8aCDjAcSTX6xJUzX1umytm8dcNFPUfKAsJcz9G87tdksANvCs7LsLWhQnjHH9vyJeE1nkZwTyU2rdvTxaDW",
  "key33": "5NHSocEcb77ucKMdr3xHv2fUrSUKNoCe6PZgwmhHzcG9vqqwNnAxb9rzGdyeAuJRjVnXSH5DU9dJvuYuaGbafw7C",
  "key34": "5PctK5a8bhbi3TDbeaGMarYFLmDbfm8Z1ovwuVoyYgTCsVS2hpXv6e68nvz68VgAccTKwLJxaRbmFmpN34NHS8iq",
  "key35": "2VBtfDgKA732ag6Eau9Dr5Lp2sh1neskyAG3dfRqQr5FKMeAu2rioDfmnSWyJzeoxDKkphZScPKugnWjQAuLgGda",
  "key36": "55r9nSoUMjRN2GFwmmJe8AuWHpTN2VA3bW6CRe27nVSHwAeXgssCjPSR5dP5HK7EWYY5UY8E43d2dundZk8bWhnt",
  "key37": "2zgy4MXiuYYTkpTqjzQdTUZrynMtW4pyYJWyYUBzkLsZiwP6ddVmKfGf2qqXu7uHoGNu7dhVCPq48iKSnvLZTmwj",
  "key38": "3xNLhMm4pHGPzudQY7vS6AiapNj3a2NVUJe3x2EubGW3fjq17J7N9BmZMyCKb7JfFaayvGUQHMZxjNzt2mRBGX33",
  "key39": "3ivg29HGtzmaC79m1dhhEtNF853LAVi38DPX538923xaearWqo8ZdP4E5uLVHWyMVrURYgGf5FjCkGz15WcerX7v",
  "key40": "3juXvtsbLBCruGgBz3EksWR54GfXUQZ7SPwCRVqmT9BxtPSFfxb8Giccm7K3ascBYfWnemB7z1qgXoCCJKbWEH9c",
  "key41": "3euXxDn3pWbxgfFDarxFMyh6cpBZ4bAsgUnniuQ5sbhkwDR7CWcdY6T2qhmponzdXfdQXqtFpH1sES1UW5Xafi5g",
  "key42": "35MAzVo8T1hPTJdAJ4YN2LMuHUEKduAnb3fhdk1acCkMsdsce3Lieasg1PCCgnxYSQio6N9f667qNU3UJSbRcwGi"
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
