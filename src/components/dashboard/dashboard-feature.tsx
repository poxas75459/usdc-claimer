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
    "4hHb8wZfgxsMFLA9jXSAZeYxv2yDKG1U3wB6uX6M8ox5ozckzdLGidrwGWFirgg4WKPyrLBJLZkCQkwMRWUBaSya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qs4qybfJm8QpeQUwb2ZKmvAU4HXPUn2xRMPTAQALqP7zedsx9DwU3GAYLMzGs3c3vf8apSXcdcxVLJs94Xa866x",
  "key1": "5hkrcTcuPJoXpHe1Y7PWca3kdtP7jD6Pgwrz2BCk5SGUAQShcZrtGZ7xRLKDnh3Kd3c3kmATRCAznBkDkQhEW5dC",
  "key2": "59VAjyazGGyVhXMRHuaP2fZUc3FXnvKkyFoQsnK7JyjWEDGezvW7C1SWQhTtrQoCMCQ5fjGso241A4brFh7DWbii",
  "key3": "5c1NbCZcJ4p1f4nQspoL3HcJ6oS2VNvgED6GifX9Lyt7Han36g8NsbDdFBFquXq4yXxopWiozhJyHuzEnpu3Rqk8",
  "key4": "2Ew9d5SPRavE3DPc7N9o7S2Gwj1PSteLzk9a1C2AkiFgcrfT2gB5xa9GGuficVTMQnsWxxqrxaTfGQF99SRTymax",
  "key5": "3AimomCLVfq7xHKS7wLgEmin2AU1bRW4BVjQVn9RDMTnP9nQwYnQcN7krMSmZZYeHyLurZzievSe5beZboWqab9P",
  "key6": "jPMTyKwezuN1iKecu3AoWWznqinPZxBab8nhc9Ys9rbJ6AzBtZcezCBybi7qsU4QpaGsTJAQzh5fVNY8wpWV4UP",
  "key7": "2YyE2iWwSQfBYEAb4q7gpYkKZ6idhrMEm7S3BAGD72mgrEykMoDe9BxKzzz5u8b2mRur4swnGnp8UNVikdRyWmKH",
  "key8": "2jVU92RfwJcasHsqYG2swn3b8LVhqpZ86QFfJ27ePeD5HJ7cfjY7oaDFbuTd8jkTmNAoDCsgbUXMBSCSE9xRqq32",
  "key9": "3XoYNa6J4DVfCDfu7WPDSf5DEspYn72HcWJTxGbdB2G9JG8g8tKQCyLCpcNQtvJXxX8sWnRg2PisdWTuCq5hTaku",
  "key10": "2UV6GwjyepFHt8H79jijNbgzfBtnDxDcV9W8XDdZQYCUW32SkVYagm4LTDgMHtd4p1u3XQuvQ2PfzMBHBm9eEa6J",
  "key11": "4FJkgACu1DgDHdSieD5DHT71j1ejRxJYP3Wi3kTM2KxiMSr7aUYBwUTgzFYjRyxJvPsw5bhn1fVAe5327FGWVt73",
  "key12": "5fPHUocj1ru4xAiiZEA7bLvh9s9TTAYZ3oBNssCSP43dSnyfy7Th1MA44tko3kLnNs5VJHMsF99UxsPhpUod1Kuy",
  "key13": "4KaE18hFqJAaJqNsCdWj8FUcWFMVL51r47k5bbyC3p5pXjYjG8vzJjrjXg4d5vfuV7jVUoyRbyLuMoNMN2kQfKVf",
  "key14": "36aPcbrbwR3TsuPFLzaPNGVwnS79fJFoHMhLQq12ixUHvsdwxTWfb1bi8fSYb8PWg3CZuAu7cPwYFWBuDbAXcw8D",
  "key15": "DdGqqsokEXrGAeQZr4PYwuU432qWz5cLpuF29faBrpcGnKerPbowKFhBBubZVJDSDHAaSGEBgfBWDnAd1y1cYQ4",
  "key16": "4RJD8MUityoCLn27an7sVFZyXBnqqkzEWxU2J8WhZzn3ZQ8DHx2ymQNGZmY26xpaYDEUSZS39sHKguGF9vZvPYhM",
  "key17": "5yRZecmXMCMJV5oLxahZ7AeCj5a38Mcqox2uDRcAbHVez7ynCHdj89o3yyVL4zAoENzcZj1UuBHyXKE3Q4Qv1wYt",
  "key18": "5KpZ7XhoM1HZrSiezRpXYT38y9Se97dDKUYqVrsqCuiZ4JCCsFW4d4ZTjWugvqFwX8GgSe8UaNaLA2rXCBJDt4Fs",
  "key19": "3pNA3kKG4Tdk1aBweEkWhqrgoNAKz7sPXT721xJbC4vayTKrdUEyod3SeM9YnL3GBZgSwYdrWdzUhmzLPHiWYoDs",
  "key20": "4mcEsQPmsSjUMLhzeyoqdvBvHSZwXb5TsYSwwdkGwoNGPM6Fo4rQCsZ5aNJRDDrG5L3DaFGdpXJFSVc31Mc2LMHM",
  "key21": "29J2V51C8q3TpFC15rGRm5oSVNSNYDZtBQHQQ8eQ1LzmTyQxsNMtT3SMp1rMzSjTwfDx3yh3LP1Mv38tT4VTxZuN",
  "key22": "4m2p9ecgi6cyssBZuqS1Kdnsi8RBNvBEW5UMjLyApCRpZbcrb2S495fzQZDZohj3TuJCRPFTsWjvVca2PS3xd7HU",
  "key23": "3UYZLaegmdjkHtqSef3AvDmL1kcYRPEn5FzzfUrVRrVXuXQrnJbAQ6xkiZ59AkQ4Spf1UcyBpUZAn2Gp8SpD74J1",
  "key24": "2FqJoxHapd1HCtsEKNxTkK3LtvVgAtArXvdLnASLDXhyM8TC5onASZm74TQBv9vxFnacFsWeY8Yfy76tBTBkxE4R",
  "key25": "3zXNzW2yycFNpMLvjUdRGK4LBegkZvU5fjuuhUow2SHAKspmkKBPW4X9B1tkJm6HfEVfcJj9gH1mcw5boc7JWbaV",
  "key26": "43nwK6hVsiECGZZ7f95Qa7qDtviXA1wvNetVw1hghwq4TEtzLtcfspKxeJzAnJ5v1P4GrzF45FvdqftvPy4sZXV9",
  "key27": "5LQ1tBY73sJjkBh3ZHoHwEHk8CYjRHPNsvG7rdEXBrJEtrnsuspd45ipPXJzHiVTQ1cJMmw5q79XWfSz9DAidfLZ",
  "key28": "3RHvUAQwVhfzw2RPQZv6YaNnPYsQERnx9Vvr9XMX9inAVheTMw4VRe5CgFBac4XzsmYkNwBKqTjRHDQ343mx94sX",
  "key29": "5xfLwWsUpzW24fwj3Adr36DgRArbNVhC6CMYs3Mrt76FrH516h4BJXpWXM4nAyZhiuMahjhp6apPL2tDsVnMXynJ",
  "key30": "5onunLBggyHgkKb1houYRnUbCjbajn74rnWTeNMznuLUBAyRoDSKXRYSarE3aCgkEnaZoAMaaKx7gXwPNDtikeQU",
  "key31": "3oYutztnmsXmN4nqvBak8Prje6j3651wvLvmrZS96LctRWfJBTfXcM1py2n9sQGaXyQoeFiizDyeZdRtjmDrXnLJ",
  "key32": "CzJU6kn84RjfmW59ycpuyAde29uGvcmUBbFhvFMFMwDyWtwYuSJcGMzJCHCBGi29JQ8Lwu58z5rWNzd82Emp2TS",
  "key33": "5pFEgFzf7pKxyWTyfsWTyqYRfkoBx3py5PFD8SA14JHWWbD7Fi6t2LzzC57RMNM58eJMDQqaqqP9wSoyywiETqUi",
  "key34": "3DDA67WodzJEYx1Zu9o9KX8kvrPozMoyUmMyRUAXhmNEWbnhaBw2FNWxDi4cggEo4WnLKnQg88AKhLWJAfSsgzT7",
  "key35": "5C4WxpsfespV9wNGyZ7gJW834ibJyy4887PVSeavTQkh3hQqn4L6XLVzRns2LFSFT462n6iC1FWEDvTY7ZQtTJA9",
  "key36": "4ybizhdE8VCfZEDwnop6vGiJdvARQLUKhTGW1h6MTyAXDNmpd4K2xvb9y824NaV8EMt4XpDTtFwS9jdoyC6om9Gi",
  "key37": "5qqehyFofRuYfwNBtirJncPXuFCmEqpu5KBkbC6rBF7sTSGYPh14aLv3iNFztcteZsFH1gFJnADx1MR429JwqLBT",
  "key38": "3eSyxVQEHuPcwMQCiNjZ1eaqzd86ZtcntZU4xb7V4DVFfPWrmENbPGf7GNS9Cj8sYz4dK6Pbz54cpma671aTZv59",
  "key39": "5EnsVwxdqEkHZBDrYM9rJSwyB7aERtQuu2LhUJVjCQXgWovrexG32yGKZk6CmLX8PnW4yHmNz9ee24ZEiKQkP1w8",
  "key40": "2SPwGnimyJeVN35x2Bqj52tpNmUDzQXRzDjNUUg3L3xKDdzYrDs5ynBpWM4dCDyjnsWqxLsvpGgDG1jxkDTPQ2p9",
  "key41": "2g9M79KXvr8jHuy3h1sQeDefewUS7edJkox2YZRhZ4LT2oEfZ8nGSAiesuuyqMskGXQvo2dYd8wN2SDNSZvxqFxt",
  "key42": "4abmsUKXfW3wuTSR8NDSDXRc4QYySei8LrGbz4VMQb1NvowqfikxPE3WhjvGrT6gwM43Fn1UxwjvndTekpUMETca",
  "key43": "2bkPRNeSc3uCoyiL21BwDxyVurZMhHDgCebhMuM7QZxt35Z8SBsErK2UAZeax6BStA4ceEnTxNFfsbw5KP8M4BXy",
  "key44": "4gH2WYoe23phhgM4iSnApNHJFPbvP62srka6EubdwhsRgHGYizp7EeKSBytfswePopM9mQ5ASyxgWVv9i526o4Jk"
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
