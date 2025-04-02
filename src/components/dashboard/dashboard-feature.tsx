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
    "5CLHuzuv2cjksjSV42PgFnKr9tk1rf7wCH4ik9oyH3HbsC2KMzni14wC64NmhvHKsAvJZaxBWJ4kN7YdnZ7KLh6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46eTrdXBoMoaouaPQdguSkUxBnji2Z7am6ANmpwibW7oVKbetCw6aN7D7bSgWjjjPRcMkxXkEw4Cp3ooLPbGEt6W",
  "key1": "3iatt39AS1Rc2YWop2Cdz67FsWchm629dUHfDpEoZfC6T98Ddxm3VzqThNkdou1DbNmVc4YxUdqNwphG4RiLazWH",
  "key2": "22hE2BMjjAWofgTp76YTrCB8GyiFkRCS1mB4DiQxzQcnhPzXFzYprqDu68opyZ6vVGEk7iBP82oJa6zGfcgNCdaf",
  "key3": "BVXtE88r4qD4RqLy4zhhAh6ToM8oy18CbtEVxUAnJKLCB61a4qsRmMebPCUdaRF5zEW7esYx93xwRmpiY9LQo6D",
  "key4": "uUCt85APwWT1XUwqSrNmcN1CCBEa8UMZeyMNWc1yTXeUe6ZBL5xygZNn3bZvDaB3ZpAnMpZuGgSZX3vGfSjyPpJ",
  "key5": "4JUC5N9kdDAZ7tW4P3x9H8WrxmpX1fM93XTEB74NThjCWEfTDNuUjrdfFmW7rDL1tnvtHrd17pgWxHNEFYqefyCR",
  "key6": "deMvZYh7eBsvkqT6DDb6vnFNVvfpNo76vWrZc3pJZSTiqGeoe3GhsQkSPA4WksnU2KmixwGov8i6CrGoXciaJk9",
  "key7": "ZLvdQEkA484gkxb38ErdJ2fWioYJsV48eCRtt5wTfjmLfJFhotjeAFkiX2kf6GXPnrz22JgRV52BNuCiPypGq28",
  "key8": "5K4WDiK6gJSz1VcJ1xT6c1fUwBDmsrrqpeURHQSfSzVmue5MUNGYodKRNrWMouTFkbSt5vBgrJfiNX9Hawg8AhoU",
  "key9": "2iJJ2a4hrpiVJbpDDYWkS6Ljkb1vB6Th8LzaWrfKZSntPvkf1T7RAegtiNg8x1dS79Ppxze5Zp4eSgJZu8LnQJXr",
  "key10": "iJcVfL2QmoGQLjsdfv7jJ9u3fra9Mwm7PKQUgdfGQJhavtSPdkUWAyaV3a58w5ZdY3hnZWFZ5vU1XNHsEMwNTMr",
  "key11": "1dkkeoNHWxRP8353d9aTAFBm3t2f3XzHpSwcWeKGdHMqmvhLRYB2wiiGeW89D8yaJ92WU71VbmJcrqLxdh9Ny2M",
  "key12": "39vJJA7Qo3m7bfhtTQtJa66zM1gTdzx2LTaGTKbNHMa4bFiLGtDUqTyAaqxcFYrsBFHhF4iAm4B89q6bhStw8jVj",
  "key13": "iNNtvE5DP1Hm4t9jPQDFQosnzqg3VqytxiecrHjgsDXUChVCHXZpuQzETvC7KPV9pnnqTxHpJch4SiWXLQhYQVc",
  "key14": "2MTcd6jZehUWBrhinFyU2SkWzjkaA3S1aLpd8ybGwYyCbEWvxqCqujnRjSsKGDiZADMBFSJqs8KyRTzC6VcVDLDR",
  "key15": "2oHmUs28ZZgjKmwieEmNx7rDnBR5U3DmuDcrxdzrkZEerfWF8YipmyioKAT2eLhyzTXGHjEZKMqYQ3gLXTy21Eyr",
  "key16": "5eLrXYufVu7732ELT2kRjtVZv1SRjtfsJeXB9WzDtWnSFsnyNkKF9eo1oSpd1dw1F4vZsgvuNVpCQGHhoyR58xc",
  "key17": "dFoHiSdZR8dcFD5pWmj1gu6wkY8TwGPKdixeeRcA4pJKByMD3CnNdFrK4WiBeMvBQUDN7fGGt3BBbA4m1mqoLao",
  "key18": "4Q4GYrMfysF9fN5tKK1VUNFSqFNYjXpiMDJMrAmG7WmxthipXmvbQGRFHmgXSefPs35dG6SR1Uaa3pze88PoScqb",
  "key19": "4rzn7EoxECrZ7YCH7P8UsemobtrY4hsxd5yoQTnf9iSPDZinbo5b24nTurWfGvCWQ6Y2Vv8Fbu1w69BZSy9HE3qj",
  "key20": "4SzfCvBnp4UYsmfZsi1SeE9agd16mxHSSQPniCf4i2XpYmSDjAVPeG24HbfppWd5EUYBtFNAmoeiKENa2L5dipRJ",
  "key21": "5epXVPEHCgGtqNXJfHEnVfHcL6N5bWvaHKS4itWuCMnLcLKgCHiS72i5sFeUy1HX3PZYCkVWpo9R3HDyNYCXppHW",
  "key22": "4pLw2hVV427mLgRExHftfFWeRUa7SFJnK4Vpe7u9D7Yrhd986AJKTszqmWBbieEy6Qzcks1oSxAfMQ6T4HXzdC6b",
  "key23": "4CkFueb3CjvAjBFiX8wvAjXHDX974i4ha5Sh3LtnAEd7sZT6iQ5NKFrr4yQPoCvy4FkFEbubnfb1pCfaBAB9npxd",
  "key24": "5v3G89HXNTxBh5cKb9GLLvXkvFvKUiHJh9ATuqpoTRvHUAPtEW4su6ZWVwS5qkLqkSmaJCCgBxF9Sd6r7FSb9xA4",
  "key25": "2CJxkytukU1vvJ49PkhjbBLwCnH585dKbS7515LbyCjhzbmGtmVAaG1SjUsVTNM8EqL5hXqdsHjwJ1xwsfvwDez9",
  "key26": "2xhVbrJm1kjoLm5CmxJUn2qVtrFuxGUgwkEDb1qPzFwg8tZgRFRd2TLTVysubeSA3E94PpdGmWY1tfyXictCSK7c",
  "key27": "nP2XrJcwDB1C33DDmUHWT4zZh5sA9Do1n1KL2M1wLbkNku2idMERjcubEoBnXnYE86HK2cs8yAvGvMYUHqD6EWg",
  "key28": "444GvFNeNZS4dnGBd7sP8RBCbqQCbLenu6u51frMoL9rRwLYLd25JCWRt3twoi8aYuSVj75WrUvgEqLpcTCk6Rd4",
  "key29": "6hwY38DnwceaXG7jS6bHMzJy2U8pnZCLr1Qs1C8sMGDWrQ9CVpPwc3px3EC7px2skPZkStnaTZgfWCZUqSmDFK9",
  "key30": "SHsxuLdiVmpCtDiPYo5ymXebgezihQXaApJ8Z6SRvL3Ute6Np4jrtJuDPEH3654ZYyqhuMVLmwrwuREhReEPb9A",
  "key31": "553L6A6quTbh7vgzi3XeMAz8ybSspv8bwY3ubh7Jw7CVDgHKkYtcCTf555y28cB4S8rbwoBB1tSH15LNmnsuTACX",
  "key32": "5L9XZ4rrMXWddRkMRiCrZBQbfxDu7A3P23YxhiEGJ2uTWz3LxRGuRHsCiVDLoy79CcDXQ7D8TPsQwj67UFb5w7zd",
  "key33": "5nqVaydaDQSqMWJcZ25D4jXyP1szZUpJjtbe5eVE1NWBnVFXfJa2b98ybgyFEc1UqgCTkYKE4AnqgpsJQesa5m9G",
  "key34": "4H944Df4ixvtLyJztSrfzigfSmJodG6S96CgmcaMsVgfNsvd4LYA38unH1WrZ6zfn3enh7WTWVxHk1bWJmQk44gn"
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
