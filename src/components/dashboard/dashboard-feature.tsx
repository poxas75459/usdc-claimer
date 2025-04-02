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
    "3kaLbwD9AzGZhfYVRR8A8pB3tF2o2jXH9E7LoLsm2Z5KLU7XARYhVNVZYBHFrno1NiMWk2kGFJJr6EnCS5g5HTUt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pjQnjFkHYy4oFZdeksknQVvBCZH4X9qodVz6pqChRAstfUCYzKjxwdE6Ty2DPcm4LC36fvYsRsBXEZsfUJU7fV1",
  "key1": "66QTMAQma1bP5YNFq67Y9GcjxmsDwB6CgCqqZmQZNFHBnf9E7syyXVwRHjMNXifrZiRp2PiM2w2m76S4KJixGmw9",
  "key2": "4FLR3HQhNnhmmG5gV4kQEy9U9Jn8PWxt2RevEbMWxfsXQncaPntQqyHENwMtHQp9Ex9Ey4yMeEhS6LxaT2kwe75F",
  "key3": "4F6tYanmUKQf6aE1CjnDRei7iz4gV55ZpMyEJNkRQCw1yVh9zwVLY4wYtyw64LuJsTGDZ4cXhcSjm98dSxyLqE6X",
  "key4": "61LP94zP3tGSsCPzRFQmHtmRWHYoVuoLoKRwj2eHXeWje7FkD5oG9Q6qofWCx9PMXtjHhrWTnViBx28W5jUhDZp5",
  "key5": "bcNNbNS95ft78iHLsXbm1pjrERZSyQbwyzD39xGR2BEaAeNxAagYonqie9FZXQxvmsRupspuJ2xoofrN6eaFkoE",
  "key6": "58Toaprkjpz3nk22VUY36jtVxyLpDTp7tmjSAYLAmcKbamsPe2JAno13NPPHhAVZzHFfG1Rzr6zqvmQ3xhnLRC7D",
  "key7": "21yPN1xMRx4s5csfvcBWe5m3TwMpBupar2APp6PjG7deHKxPztnxrA5qWfdmX3Yp8P6fweBKX6ExN36EWfzaZYug",
  "key8": "2EJXi4Jc6fgfzgJRnbwgVzfvYhP1cN6six1k7jD3R7V1CuMcBXUKF4mCGk1xP2jEBjnqxUuhuP2yLkGmgSbTZw6k",
  "key9": "47vNrzYbtB9nBNzNQRqyufMgcHoWew3uCb8zWqDLFYfwE5eo8gAY6hxss3ntzLBR5fDcjbhe8TV97BrTSo1kyV78",
  "key10": "2YS97EY74hHi2Ef4iLEokoNKLNvWz3Zvz4vE42GURJACP7WrwCCRmpGYWHjWxwH6fqAyNZv6aSWVRKjZgdp8UnWM",
  "key11": "2zYdjp25RiaGGhwNdf855pcRij46ZVT8cwQNifYxyaCDp5Y8h2JCMZHed4LcuqkUJodrfwXJvjxDnhHiT5B5YgW9",
  "key12": "5yd2iyFuVHA6qz4BcAp2VA5TBGbWybRuVSGRzpvep3S3zmS8EW1KKL98sdwrZHMKHVArBpKvj2ko5FhrSBQgtpmr",
  "key13": "3znJrvySuJDRd44VgvvHDX4AQdjLJ29MSwtANPaNnXe1ymbFDn8qYHvyBD38shC5jFboMc97WbFybM5sv5PQtEPm",
  "key14": "5agW2pXA1jAUcLv1VFJTM4bTkf951h7Y9mvuDiB3mus46HeV2SSinK4372ZCNzi5S3ouyCha9EWoWSzt19EK2vuQ",
  "key15": "5xjHhG6AHvwdDtnDwaY3v7dwrZKsUyRm7FB1mvwM3Aqob1aNM3tNTuHmX4rhQ3kCvLk43V1QqmfpKoG6EK1L3WDr",
  "key16": "3MUXRbQnT3XF3Xhs7FEbVju4DZ3AD1wKSN3MqvMgvTWUpUwSGGbTGhotp5JLUihMFykjdUSEHYfi3nLD3d5ty8HQ",
  "key17": "26i3YZjySmgM1A2cEZLai7Ehc1CM8yymNspnoYqZ6w78pxChyfLba9uTi5u9AbLfj3WiePvEiAEmBDMqazLcsX7Q",
  "key18": "xsAMf3Y9cResxpYn6uykZ5vDXgD1N1jVEAkLXCZqiTtEyBQgiaQDMJB5qTMrY8MAbi4v4JFWaBijG53V8kmc3yf",
  "key19": "AukVruFEyB1z8ztNHDQELtWo5oi7Q6BMmB5NFYb9WvADmjNsLVdfY5wch6ZLjvmBWQWuqX5Kjxw9dXQeCXxv6Rq",
  "key20": "2S6mb9QwjmtfcoBFWJ5zAJAqoi2jqUPT1LBzLiFneH7CGMCLcuV7H2Vyfn5MAzM6sBQ1rBJ8zCBxGVqu9X5SeN9Q",
  "key21": "2z5ZDaLkXkuPNMJMg7WkHcDdPAoWLyrZidX6Q7m3NHuM452WPT4GNKCEtUVBepbkfNJJZuYdXCBDd8xPqZAR2ntL",
  "key22": "2YNNjKbbMzeYuxGhPnrWbEufxagn8WtksdziWiXMycyaZzsp8N67PqFxQEA54YNx1WCxA71ApTr3fxAe3r4ps5DE",
  "key23": "AhFvydnZ9KJQi1Ms3NfNoBvxtaLUFbJVYX9WiWTkPjo49HndwcZZHtSEH2x1o6HZMQhQTU9zer5Xh4UNNmY74eU",
  "key24": "2mbYcMHHaxGZoxuDAradX8wYxR7m8XhMJrPtYbDqPuStc16wiEhyLaJNdnpcU7u3URgxk5qvous2mz2oCJbNmPKv",
  "key25": "2MB5qegUP2R23vCemWLfBa3TJKLuf9sxg5YeuDeCZEPS74uPSnEsxGBaX4rFzBNq2MdivGCWG8nNH3pzBnfF5mzK",
  "key26": "YJifMoLnX6GhjXnXvBPJGSk4kbCnGVT7HfvnwFJAPSNnCwqLkPLT7UMM2TrdeGE1euHHjq6w4ZcgPi65vSJRgyA",
  "key27": "mzhRrW9xwQKsGgMBojaDG1AJVgpALcWQ4NVYE7YFXKYey17M8QTKN2ojpH56AJLkkFtQvcs4oQiWo37SZUAw9Eu",
  "key28": "4UiwkeyqMwV7ZFNh2e6Nx4pAxx4n6ywjui9mNRGT8iENQBrtTR11bwBLENWLo8M2VMg1oCCQmLCe6PprnEgTyAFv",
  "key29": "4LpSwXqvniuouoRQMsTdfup1wyFEXCg3sSmGK1epuAabH2fCyJ24GiQf74y7H5rXNHjAqpm2nwJMwcuCANYzdP2c",
  "key30": "4CdAK1dxshPyEKSXmxhjwZLb5yfooG9PyyQQz91i2Sj2pf8JymFothXPJE6qLmQJWV5CGFSNyc1cgsmQCGftQjAF",
  "key31": "3YEjvh3GYcZXY7ykhnjwWKLL6vnF6HAiQGhvjgmBthrUT6rppLANGiz9WGar5MQX7FzvTE4Y2BidotftEhNEpgpC",
  "key32": "4MxyWCub6HxW3Z5hG2BHHBuUM5ecjydzU7XjspF8DxyYCfncwaW1fBc9dbugkRNagYRcjMhKFnek722qtDfz4qUL",
  "key33": "41vZvAcHK5Fh6HE385w9TKw78dU3SgDZW2y7ETjS26RMtLnnaEybXSXHbtqTh1rB65R49MPijQkb1cCXoPz1Xrk6",
  "key34": "4VvhziaTH6w85BWrP95xbyqASpgHe4RVtF372zDsjTBP1VcVZzvbLhZMER31QbkLW9jDZ6ufAZvK1xKVpaEr96kX",
  "key35": "4rtoe2vmFWne5KPbiw5wPr3JAaEzveJT6Ewzv2xmfof9GmgeV1B2ophNsz91wAtcu3XBphxRcXdTNKF8Yqi2MFoE",
  "key36": "2EvwxidDHESASHejZrvHZKJ3e47TCMpctaJmEMwkptvDWeaTg86itLkiEposUJRUuZ1jhNWfCadGSugWnVjJbvYC",
  "key37": "4bBNuj1kkbDmwZAp2kTTR1gH6V97DZ27htKPvFzjkehKctwHAyiCf8DhzB8srTapvh1jbeKNdCpSztNj9vQ3mRb2",
  "key38": "2wDDqisrTAV2SUy57Jy6nP6A3sfmbXo1jYbr5jqnScqZEobYhrTgCY99nLp37qrRFGkrGTaUXorionL3X3PUC3R7",
  "key39": "3WLpMABK3F9XDiuF4GpmJpzmY7pNkNHtwJ9yNz5VCadBP7kmC5hjiw44Hv79awR7y8hpGQkDNe8E7ZW5oc5d8mG4",
  "key40": "3WA8LjYFpymwQTvst9G7HEdVx6fkeGwEjDnotj8xqHypybUruGvH9Lkvfk7n9zyRKwM15S46pHS1CzkqrkLaq3cX",
  "key41": "3LdZSYYbFG6Q373p3ueuRsnGZdhAKXVMMdmYg7Ddh46bXNGcBgsuoGgobMXotcRv21GuDfexH9fTfzdsUQMmr88Q",
  "key42": "5q6EYHyRzZP91DJxoAvMxiia1qU2ssmmCC3UN9nyhXjjRbqCEeYphd3UHHVT4PA2mDefXmNa4e5LJ8EmmTRU3G9A",
  "key43": "p5DRCWNT7ze9msU9mZdCpEHUYQUfwyBJEfRbXP5rJ8p6zHyLW6C7Xjvtza2nsH1yvka1XNGYbhSdSfwvMjt5gAh",
  "key44": "hZYGdVyRWTYSgfXLFH9EVBBnnNx8r17dZVfQzzUXhynYPtUiTRERG4qL8DV6jfrTds6jpoYzdM3DqnH2jf6CvVk",
  "key45": "49jG1JQSJyndKVXVFhkBoToRbv3TB6KLXbDNfrbq4926UXiwzbFYNxnt8rsPHsw2zfYYzyhAcKxARPizFs4NH2Nx",
  "key46": "4RiaY5Tvkpk1grtBBZc4pVSfPfKDrnioP1NZDA73wLxg5petPy2fK83nMRN8oyXtN6fsrfKoyx8cRdg89hcgU9iC",
  "key47": "wW3QtsFVKBPAHtFHg5W2uDCR1DvHDYu7XRUWiZBBpXU6TnGYg1MMqmsT7KAYNMd9XTgNXCkbnvPLsSWEw5Mc6Ty"
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
