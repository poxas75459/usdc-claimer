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
    "e4jA8mAJUo1rGq29ufCpGy1b1EkFaNy3NSSq2xXRtmURsF6LLJB9mjtFrqSUd9JM5RqUz2ZmTsWoDQYyKJvuNPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uxnH9KAbxa26BsvhPRoE8fkoqHjJ2MfJp4mS7D5iC3ToVpvh4CwbCCeFubypZyygGbgDkRWMYTxDkBhTAHMbU3P",
  "key1": "5v3ynaXoAMBq15irkANrsKiMvAfVuTwiaDn3jy3ZYEDBBFZ84Q7TQsir6Cg4VxboR2wPgzdRDfrkRxYzmLurXqW",
  "key2": "4dGtXNYZ1jFSuNwVxUFcBZFCcaWxpmhzufnQRHb2ehDNiZkTut8XNGz6FCeM3ugiSkZ3JHtz3hsCxvRrAgA3Lpvb",
  "key3": "2ySe5d3yYQbiv2nKEsZZTRhQh3pFXELCGopT9Rj7wh3T2sVLdp2HDVnj3A9KrrNNjTDxsjaq5WaxydKuAo3ysuim",
  "key4": "5KHRcfhhh719CLuh7n9nMLUfAWEfciKppVMtgdMWsVCJfe4cegrqZhhM9RrWT8nmzKLTWTXFX2nkqmjjhoWugfqo",
  "key5": "hk6MGssdp17QPptMMHp18V4ff3Jascb2YJ42YT3U6yhUmZqUr5riLptKBFQch1BK3kCEAobNMRMfCtNC8BbfWcv",
  "key6": "4eAkHpvLhofiCmoaj8BLbx1WDcdif6REbBmjq1NQoPHEsZH1R9sYrSW3SCbx9hWtYVo4zCyAurJzNFPcgrMhQyB3",
  "key7": "4rtq1P83XZMjV59j8xvSc9CbNrgX8HQA3W8QikJfeST4oz2ZEyRQ1mMz6pPkK7bvASb69RpvC3JLaR8u9H78nDqa",
  "key8": "w4y3WQZ78At7c7wh8F5tmUSAFtSi1VCrjn2LAVn7adfp7VE1JK3UCA1CzFNUDQMC1g2ZoSoU54kqezUcCVQE2aH",
  "key9": "5jTZf4N3xdz7gvWuveqNPUAdrtcKwmFtgWm9yL5Px8Rhr4wYdQB9ePAxCFiZcJo5GsxveR9H3FRGv1txiy4eaB7s",
  "key10": "24y8KEUQ6UN1f1b2ZXA81ncPWyEhdFuVKiFW6zypqdE4fgYMUKbbEvXS95bM5zyeEGYDvmo59UKPV7RrCuoAbkAc",
  "key11": "HW472KskZ5A7S983cZ4fVuDGvUE5hkXjQJq4t375k4KAkAGQyJy2ZVJ9gttJDgNvaMYSHZ5afY6CEvncSHNhZmA",
  "key12": "JspR7J4RRhbJms5bAx6m8xzyPyePX6Xa5HqeD81KSmFHXwwSxpEf3BMARFJWTW5a3kDHXUmXUWNtbBLdE2eSk9d",
  "key13": "4YomHLUaCLFGrHZwjskL7KwLGEXZCQyXtnMRQ3CK8rTqpXsuxCgU3ayVErZUkTYncLtnX6NrYyGQ4NKQuiY9oHut",
  "key14": "4iMPg4esLn1QBpqZjVdMThZSPETXHiTYYNVN1QEW1hCva5MWZakz7B6NDpMpquVf9huVqaMGp75HovyyttMiRNw6",
  "key15": "2DJk8jp657N2i4uRFNFsZGteQUTjTxbqUv6Eaocdg7VFj2QjAqKHtdt5uJ2dFrcmmbv8mc5QBAsMxx7Gb4WkXMRw",
  "key16": "2cdg1jorbb2x5iEDLqTVTTb5evxwQkUNr47CkP7jzebmX2y1Lp8hxfYStWfHnYLuJ2Zphm8myqTNcjDnUGRbHdcc",
  "key17": "59ypwe6XHd5nKvwACuNe9Cp3CzjGTshKwo57DL754vRGH6nzVqR21GZeLSuHpgHAs8FNtstDASnyWhZps7gMMuf2",
  "key18": "4yx2e1eXEmuv52Qo9yhx3P8yMpwPZMfrJis7jxkvRVAK4kMyHDKNQCKz3hBKpjmBiox3JHH3yiXriViVnHbjTf67",
  "key19": "xV52otqHpdUyDLMUzS1SY9fBgTsedqcTz8HSDqje71PW1cB1ngfCGhuy4dEMZfvk83dmVE8CgH5vzAg2CTAMUAZ",
  "key20": "4szS7oEZ4YFXDAXuTAZPckEXeuZMPKpL8Qri5ZzdZFWfFQ4KG8YY41kFrNNhaNxs6tStdFGQRctFFDpGbrGkLPH4",
  "key21": "3jUU18wVfSRVyTZwSr9wmsHW23cFePt3MtSAvGpmCNFPcFBuHr3NrQ1TAAw9NKxoR7ohSEgeG6eXoJYvVUrfz4Bs",
  "key22": "2oT9BdFLJqXTJMSDdTLEiaKgbiAHKeqD3GkVexpunYTNztffPu4knAHC7PprzmMVEhs67cAKSvixEAyNk6U1pmVM",
  "key23": "5eWukxzRhNEbzPqyix9S9QDnzpBL5XV2oBjq9qmuE6Rfs68WqWC8wGnVQ9TGgqQ5sM5wEWqoJeFoFhRseEq17Xp6",
  "key24": "4Ep8sYEJjGB81oUsMTN27SVZQ4jWQ5FT4c98XZJTf8UmxYc3EahJTeiEz4or1JKWNmh3dAGePpnArsrDW96efFbt",
  "key25": "3XqqTdqtA9WDUgAPQyFTXedsAsq9wzWAsnSZrCQWgxjmK33TbyRU3wSs8s1T9WGzf71ZEJayBFj4WGagLbrcpXtJ",
  "key26": "35z6hjqDYKBoKhGgiqH12ADc6J1v3F1MBjmGiC8GZVsBjsVDvJaj8qZRV2qW8bdy83dJsvtnXyEQMX2MAAs1JTN8",
  "key27": "5pwzaGGcjvN5ZjviHJ2vgsHfpx9KCUSkpitUZPNFPgZxYnuSzmcGaTYNYWsxrRM5Yi1H7K9ZkMhnZSkPZUe62pSQ",
  "key28": "42nxhXBFVLGyBCHitVk4H36gtBnDEotoQG3wYR6MT51TJcetf8PBwDyVvk4WdzSywaJCJWEp8Z6FCpgvs6FVKE6M",
  "key29": "5J6bTxBqXaq568GQEgdZJ5kdYu3XzcL7o41AJxmyLjVYizikNAEQyqqUTK88n4C9cLdkg9n1AYB5bXBe4Tm33GvU",
  "key30": "5PkN424L8cSyeskKrrpCeEP2eHrJrGpFeRNaF5tyYiQr6JXnug2AvVTxycyDsyk7dtYSJccN8idPS9tuWGSC522M",
  "key31": "3muxaRpK9Xr2aJH8WNWs4QYqPwceHDXr45k3oFa2qxYaZmd9XF4QsYeXEf6d3gniaNJDck6zCB9d9sC9zWyHTVx1",
  "key32": "45R7YGuheyyuVPXiyrtDrxaAQW1F2BnWdaCDtJqSC6MRv9nEmAouQE4hP5ijxPSqL3o2Er9YZkKhqjycvLV8A89y",
  "key33": "21aNqP4eCo2HrqL5cXhESSiJHeMTwzf23fNpouPHT5geTk1HGmnGfhgP1QPKgVLMB4QW4mnG8DqgmwLxE2JMNh99",
  "key34": "3gbc414mw8ftLgSsFPXsVrvGySrCvAJaoG2Y3vGfdeCRBfpS8phQR7EEDxsYdc54mFx9dXKbPcpxS2K5xDmBVnEF"
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
