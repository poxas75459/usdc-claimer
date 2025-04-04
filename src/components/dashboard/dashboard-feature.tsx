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
    "23VdXBsxbAU5fakngaxZt93iEy1ur7K3dfEubCdu6r9jR5DgDQAeY88TPB3vN1KkoHe66o6pt3uo3FemNRWkQSrc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35pfMxESHPt8jAKm5u3wbNYDEFRD4WVFKgivsuFqYc9yqCjybWyBShR9NSm8Zfaut2Ki6Ka9GM175NVsCeKCAWD5",
  "key1": "TpSvZCFM44gLhBZEWe3o44j5KaCwCecihALickeExXiqmYBJ1vVf9pFM69bJx3xJ4HQAJWB8uVRUJeNqofv2nQg",
  "key2": "2mntmSpZ4p1KZ7kq7gZyLuuWE2UwWgMkzz1kNpiPVNpG8ovSfr12LyYxCxayLTAttd4VpP9Hft5HCq2WP3hLM4iE",
  "key3": "5qWqUZuLsQHdFKSSmVdcuUYBz8ZmbxtSZhMTyG8QpnU45P3RoWv3kAARgb3Jygj2suqrxt2bRf5mzYJ5GATStjxp",
  "key4": "3bP6DtqWbKqr6d6HzMvjRNiZK1DBHuYXgGPv3kPqKMPjPPmHYutQitzNK6dJe554AfwDwe3RJHjzwRWEmNCEubxz",
  "key5": "3Tc2Wfsi7MnWRM5ShPwhBr695dExpR383m36rvD6RBGGxeh2qfjQ9Jr8JyLKxoHcTctuV2v9xpdA3DeQ2Lhao1D4",
  "key6": "2F9mLAGqXqLSav8pdGBh3GL9iD6gbS4J3EoiPNn7QwHnRkQBjewa6WwwS97Q3PHzLosUcfKgYk7stCDnjqRazboC",
  "key7": "sy8wA3H7MAMYGXpPPkDJpgtaFXHEWPHnatuoPmQu4xohEP2f8QbhkVECaBPrFfSZeFForqhg6VTjARE1D4duCPF",
  "key8": "2emYAqMP4uQrST4Pd7pHstyr8hkhQoCMzpS5iVk9QMEe5waui65t7HspsvraMLWaCqQfEA9cmyfsNBWvaNG3Siqa",
  "key9": "3Q4AMXbvxEnJVYcBPi2NvvTTCvFLHv916JVGmDSts2YZcYM9cfXDY3FMAQxXMv8QiACNHEUT46F5eR2Br64jhVYJ",
  "key10": "5S4tGTArLe3NcPZse4Krg5eAj1EMi1nPfnKTYsAGsE4sERx59UZbKpJkVohVT12zKbHfbjVtZXtWuxpKUP6etFjR",
  "key11": "3Exff1LG5wEpb9dXARGfhgyccDs6U19YJomu8TDEzeXXKcxBS5xrXLU5hvwUNFUid2TQksdkJJ5wjCoawsBp98dw",
  "key12": "45V1hxYoxnvHy5QsBBQzUYqPPPG5e4CKjMP6Gj9p2DFoTYiTpMJXv5vGJE8oYBZ3LFc36vZsfPCEwuRbnH1g5uZ8",
  "key13": "4vTu8F5im7SeG8Y2MfuBF6sF58aAruod96cU7CTeJARe2KhnAW8i6r4Ff9t4QQpDpRH2Jc8D9SVWmeoq3oaW5gH",
  "key14": "2VarcpLy8SHj2y4bQp3sdZgkC1ZAp9gngyCspC9SPY3FPreVWa147kxm4eLKi6Tyq5fDf7iH7bonotp9Nrp3sEua",
  "key15": "2xeYaSrWeurExqCzTy7mfCPwCMFm8zz56yHjSNHg9zd99g79hha2mAyF8vJTT8NSnJTEbUvJcxvkaivHrUCHkxTi",
  "key16": "38KVjSyxkRj7BanFT7ZqeGpLZSH2kzqkcYnxsFvrE938aQXbd3JT7MGAw8AYpj6teVLSQEqo1MVsDppKEpx6WBfM",
  "key17": "H5tS97Co9uQD53Kj8APa8UHFZ7zWEhQm27iz9kUwLFHrPy2Abo9SL5R1QjiWTy74SaDntFFQLhPomCq6D8XhGT6",
  "key18": "4Q9gH18oZVQKKWcdfaaP2nwhsA46uJNxknMjQWKxUJ7cFqD4N8XxTtdzFE4yQT86Y8NWizTwvJtieo4rKbRWaqWJ",
  "key19": "2aGWawYDsbj2D8mV2K1ASRjiPQMPRDJRrVdTyz2cXkhq3xniHUhbbSRZ1td8GnpVMcnRTRqHvNfSgGMmZVRnoM1z",
  "key20": "3Sd8FehS5TsBS6EoxWb4pEHa4UgQumhcHLdpePTht5vJdYK6WMhszRjttxFqdsC8u3HwQJH6tNzzzABH2xxEAk71",
  "key21": "3suxJKdzb3q3Ykgt7r57L6z6ciJdcdo4HTbrZookGpKJXLp5tyy6NxPkhzy9eGZ4W5bPdknGejim1nmjJNcP1b3Q",
  "key22": "2nQ15Pn9JTjJMekkmCzKYj7BCVWC58eGXAFAXMPcjEowiF7cGEnJ3S46q2LxzRqWoD8Mbm1kRmWkDgsaTfRKsAin",
  "key23": "37PuFZzBDJVfvcJBDJpq2ZGGCNeJmZ16cBFsiZQEBosKx7GTqxXJrdAmwLbF18yrxu6XD7vjebfjJsvVRP81RnoX",
  "key24": "3RZR7rqTyekzLBbFxnW8GSwGgrjH7Yt8xcCTujVNWyQAiwtRgpLAShic3v2TFfHzbJyXp6G1QNPeRh1rs1Tbkhb4",
  "key25": "2nsoXsLXS1xgrbz1GQbkjfRrvDhpLFdycEEC2MAfvQrAZApzVxeGPMkpSpqfMpH3zGjyMe4GwVipyPux4pjfkiHM",
  "key26": "4TQc2A9LFN734B6wEW8LNnMALuNV9QENVjDsEagwYo1HD4t1qEjfr1uxgSzsZKySc23ZuhmWdNXdUKSr8MBtwGfv",
  "key27": "2UA9XGf9ATxXLLYm7XmVk5YM1LnviqMxSWHfRJmfvdXg5dUsuB8X32NhuEUzQqCEm9BneyMrBqLgC8DiHYopT75u",
  "key28": "4j8hvFSwH7XhPuFZh2KnHE44czVbyHgWm8d83PwJWpsh3QEQ5NT9E4rC6wWxGCk7s3LHvqkzK9AuxNZoZySpFtwz",
  "key29": "3DhrsP3W6bZGSEC5vDrQ6XcgrYWBfiTrrp71c4RFnXehPt1J3ZSdy5DjVpLLaBH4uxLnnL7XmHsU1o5bqU2e5SCB",
  "key30": "3JoCn2m6CSK3ZMi4NzAfoUxvEHwnMoXp2pQcNb5frcvcQn6i5LCUs32S9KsXxK1i9p5SinazGepbgs7Du351WUki",
  "key31": "3YBycGNo8oU5faH5koU25PndtvhyGjjaT75q7SuKfjF3o2oXqzkMbxd3NxhmqrXVea7vLujLXPhWAfXz2iYxVzZ5",
  "key32": "5hmJFi81rG8u94LNkhkeHsdTsPU1FVuDNsvBrxr13hh1V7s3uvJoPfWGFRJTLtLyaBQdaZB4UAmQvrxHkXscLQkH",
  "key33": "2x9WqoEx8ASBFmLVu6UTkL8VDvq3c5PsXk1QLr5VQDinTHikKhc1XVVfAJ7a7het7iLntjVgJ1M1eZYapztGhFzr",
  "key34": "37ZQPfg6dNrKt8rzgm3RGv3RW5rb8LZiE5F3XK2QkKBXprBt1LFyggMxVVqpgzRbbdt7ahmtLB2dj3Czeyqfzfiw",
  "key35": "4eheqKi17g79qKxQ6xsh36nw2evxzibcC4yLnEddapLpbgX7ezk4hWkiKgKqMmdH5PQ1tPpdxvh3ztPv8vMooLHb"
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
