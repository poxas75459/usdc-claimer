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
    "2bBsnMVPGYNctCbnGcc59RZDB2Yf7QtbePzm7SXxEJbGMKqzQasQJM5rZuHU4xyMGtSv5SRbryV16caDqm3ofQTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23thLyTToZQMKiXnNhMN3ZCCW5XJYjhJrc9KHtoVqJkCMAHQEhvY8qqJjEotauijKFzvAPcvWCySZkycfZ5xo8we",
  "key1": "DrBxYvbU1bHPSqLQXXnnq7Tnt6cDqiZBW3EvMq9FHUHd6NQrpvrVdScjpQkwzkR3BLRt4aUczrVcBrzRvvJzqxp",
  "key2": "5Cea2gw8bmqvmR5cFJhXo45Ev3dhxKqxEfouhComjHb5y4h2qsf75dMEuHoVxEXxF5qF3e49xdpfMWvinqReKVww",
  "key3": "4RNRZeC49e9XUK91pLbMNh1Mxh3TigiPWpg1Heb4zd9GbHmU5MB3wkUucHFWqvSQ6Gy5y8qwXWbytbGF6vpXknMg",
  "key4": "4omx526oCuNWbZvTnuWjeercMfMzwLKGxYrecwyLRjQadxKnGFs7A1MnDMH48D967BCsvFN5S8qrjpw71aAB7K5v",
  "key5": "GhKeAiTG1avriHB6Vh14LRvhzNRmyDLDp838TxDzd9e1nDP2TiKTubueDs8XDbo26GJLMA1SCwCamZKnCjgvoQb",
  "key6": "4Zk7z2HgQiuYGhMMKo9aPNzFiBu4KVCJiHy7nmjRSBAmHPMGNSvdv2MrJfxHsJeZr9WuWGsT4pgH5VueeyjDMdM5",
  "key7": "3fGHJd3KjQwW53cxZyVSVJAGBjyGCDhc2X7jQTDHsfFUnxyLPebBCeXvPpKApsx5koyDMi4GzFjvBX9VwFjLgDMf",
  "key8": "2Eii9bUD3qgi8wpEmWFtMtXQUjdHeTmqw4eEd5QzfNoubSQiBzDKub6ehKfVYs9z4kBEXdPFKxKBV6ZwoBvnwo76",
  "key9": "3bAqa6pXYJaKMKHTKK1WnhMcF8vgxTspyAvKFTYSQyaqKrrZVpPwYGjN5VohhLVvQmk3cm7MRgHqyTnVRRSGLfhV",
  "key10": "46yDiPAksF242312FX4KSchBFeBFLUnJhJyVn4yZHdBWNGo7J4zguhybampaYJ8mzZWPsD2zxgcyNXZX6HkXekAw",
  "key11": "2eRA5tV2M9hTutWDrWsGTAmjy1JqUw6kaJHUCs5dCMFGZEY1d9K1K7RrCSGaupRRgZAMpFewdpm1fefPua3wuAye",
  "key12": "39mq6sMBZVnoJYLYPK9r5iczo149AW8gMZ4UCEn4q5KsE93wvqxLxoWCStc8sQCUt9azx2LnJKLpMtQbyHHxCRWp",
  "key13": "3F3uShe7QFikC2zBkbwNy579k3rQWb8dF9pTEZQaYFmAHaEM4ADWXN8mPSHFMvFyJjW4TsZhYdDVGjvXp8rCW5is",
  "key14": "4jSY5WfDxztZuxbW5P2EzDpnycfZypAs6GV27CMxdbd9HgnDpVq27DNHTJqD5DnoDC69AXxa6fxjRT8vvAixQ4Tq",
  "key15": "5pA4KeEwatBghJiuosFtK88Ej9RKKAcy8cB11nUjZDZLi8khewBzgAQgpEEaixPKMywZ1CWJgEEojxnQyLDmdbpn",
  "key16": "4hhR8Vo1M5sCRdx77jvKjx81Duz8gpnrGzuZt3Swvj6zQ2miNNjZP9WiJsuLirEMD1xrRi8Gzkn7QjBwSBkmRYYS",
  "key17": "2wf2HGcQWywCs4EW9dkuW5XnSGaFYFfikXo53YxJGstuocFo7veT7GvcRG1t6MxTAZ34TwMG3916AxLwQFAvpZs1",
  "key18": "2x1zBJUCVcvLUrwQ5uqaFzJ4S3WKpvvmamZ5LXy6BzikJbjue3i5KAsrRDEtkx9ndsYUGKVRrw4De6cg7d64yPjx",
  "key19": "5mPadKnEtHRdi7VpKRvGggPGCV2FQBJ9YtzaSE3BHyuw8PJGLLoi7zf1KoBspF697wKzJ8NPgXjVqb2BjVC4S84n",
  "key20": "5zYuihpXoywCL6XQFERLLp3nCyoTb9NMLtDoas1rCVkCvx5CRNALDNAnUyQWTBdsvt2RrVB9VK7Ry5P8s42XnWX1",
  "key21": "5Wcpg93tUsUvygvfnozG3hxyDXYNcRSmWin4gmYVnKztfuBzTYaA3dcDrLMxMNRNcM3mFQsgoZjNqo8Da3eHs6YH",
  "key22": "2n3McJ2hqTcjUQC3yhakmppXyUXcnkCQXAd2855wE2tzL54CTLwrc2XPHptv7ms2dwVzHPGQQj7QAgrVC47NqwJX",
  "key23": "3Uf7EDJmx8Ex8xgsz5K7XwjdJoxRD5q4Lhbh7ZMkzMXHEoppYHdq3gq5pesZeREF4JaxTz9yDoCz7vP46Han5Yfn",
  "key24": "5bENMXS8pcDGyAfLiWK7wwdKNEYgQGMQMdLKad53QkAbQJ7wNYvmSkoy6L1zgrqYaBp3mJiSHVcAvDYu28CA4yei",
  "key25": "5jWCrXybJxQWXdXBcoM9fAzGfquaytK2E6bkwx7FGJAD8FjE7rw633Krjj5rnGgKHDvhAKPigZvYg2LhBT5CYhxD",
  "key26": "4oKhXwzUEveXEWcgCbobY7CJqoM2GFqybs6vLNvXiD3u8UFixrv17mY629t2j3muEE1p2jJ7Fxb3GfeY8GVsqke4",
  "key27": "3QiACfhqeR9Y9nhyvYNyEFhWFAtw8pg9ScDQPXEQYZ81cGiuBbHbW8nWrkzEwazzsN8yvAG7vdGXdwcvxWkagSJK",
  "key28": "63KeSYM7dvtKWCDMHkPgNka3aa7wge1qXMUvaS1bPu9VX7Hj2d6ifi7KFPu2tdp5BDFbqP2PXKoGPTZEebRNsozx",
  "key29": "3b2rfXx5wqDTFG5LyPKgje8DzvMmcWaid7UrU11smoAgkwWzZJSDtgeXsUWCNxcKG1BjRZmfBzWXka1L1fkSMzsc",
  "key30": "26ywVCPrZmcyNCehdMxgsuMW7sWfyzL34y4Q5EEQtx4ihEqTYuuxzXjuFKnQBUzzom2FnSoPv1QQTouBgJzReiZj",
  "key31": "3Na7a4NHjm3WU4joNwmNwDQBwmHtCkn3RPaSxHyW23Bpcr45jPvGjA7oVk75TraKpAsuwhxoZX4ivnpFBtBbC7Mf",
  "key32": "5tyrSuw629c2xvUymXDR1TURWVXemEADSW63iVPTJppMMnWhJ9FUmGybWFdmyAxtE9ejoaCZCtAsWdtcFEDd5xVh",
  "key33": "3e64wDpqZwKbhRPrh17TkG6bsBmEszSHTtSDANXUNNQw6kgvYPTqSTDuTs7rxp5jcLpucePGxidQJzE2wYCkKpKu",
  "key34": "31VwKAJqWXpuy935bLzKiQmDStnJ1aEhE7AdVUHukrxZtYPvY9DGBrib8VpkyEatXox6Mdx7DEKGPNVc2gZifQcM",
  "key35": "5FQMeSFQY5FqpENmBGH8Xcx1ZHN4gtmvMrFHQwRVajfKZVdVefzHgCWzwX4utM5u1J9G1p7HDKuRPygwoUJd7D4q",
  "key36": "4uq2UPfDZ4D9mzwEs1fChNv1w79PujfqGtaSEuLVpceZafP7hDt55qCAbWGStJdgAtTQdwopLenh7bTPovQprv4m",
  "key37": "2wBCPyb99Uj74FBpTJVTxT2Gom5UENAXBAhSJpzVHqSoSR6RY9221wjRsqHJAHkKeEcuk1dy1AVokjSC2BoHFaTQ",
  "key38": "51RWBuAdcLrpEiBTesWSHYuwCABGmm1vppYwyirSgnfz944H6QqfeJLxqH5VBJGnCE5STwUbNDWTbNbSyfHAtUGN",
  "key39": "44iQKLAM4SUuQEhTWC6B4JBK83subKUmgPg3GuYra3z9cDK3Ffm2jZZjYc6s5CtC3dPB3wk2rewLrJHbXjWoVpc6",
  "key40": "5MXNx95YGQo8n6QnDqRzKCHTN41y5ydiASs5j7YGfM2d9FcJcv5Mdq8YTRFTKmBrya6nsDg2qQSMUarvxs61TVvL",
  "key41": "2pou3Jn9mUA6TGKfGarbErRkCvYs1VGLsLCw2ni5qv3WXfEGBn1khZbVwd2D8zM8BJHbtxz31AoZfixzWAg3kf7v",
  "key42": "5JWf17ia82ZvR355BHpdkP6HFGXPMJTL1BmNPsYYT7g9W8skvfBHRLWFQeghRBERXGnbLRDZbPToUnCrCMz8heZh"
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
