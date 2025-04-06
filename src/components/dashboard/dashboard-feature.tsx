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
    "5PnTSVxCRLBmup5kduJHu9NirifeYi2Tvj8CEKstHR7pqRwuekoSquJkm2rU5VDHQv5GnswXhU3QrCu356PCHcP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zzDhnTsGL6EDMGzBULhXyeicjtJncZyZUdsaQQnNo1H4D1XC15FFY7Z5LCZqdGAPoJXTKqSFhFkX2gBk5eipH6h",
  "key1": "2HFYTEQya64cuSh1sgi2a3SL35PHCCeWL8iEtSRLX5G3Rx4Dgfoym5N4J4pwssrpeJw1m7mmZLmo9fNddZF2aLut",
  "key2": "JJ4CqMcd9tfYSBEAAJw4fBTtLhAFMbrXDQGZNBPRpPcTd65x9MUvbuotbUaH4cUNZW6ueTfhgv6et5KCAgY1b12",
  "key3": "5TsAXav3vucvDMoQNY9DKg3ybhTtMX1ZUVdhEX6qmDcf4q6DPJpvpqfs7qVqcahuitzLvc5FLcWtU6JXp1utefjH",
  "key4": "2SDbXizLXfnjYzQTXZoX4WpqY7eJXWqVAn6fK2PVB4sbhNnm9x1JZcMDvTVDfyihgGFTmqTRvRE4BsFARBFjxVXc",
  "key5": "61BQuaSJADWPvb43UpAFGQGrdBUg1EKFCPHZ7YeJAzg3UBMckcjuUH39xTp3yRvncq8g1TyVcmzwbfXgU4xgUVVZ",
  "key6": "24ctGUoYv67MJNPGzySMw653wjzk5HLd3nPXxCfZLXZbL2PWLv4gkYTaFvfyUistv1UQxBNjdhFB72aHMzDHmauc",
  "key7": "2tsRf4V42pS5xKfYq5gmvEy1p5HK3uEmXnjMnCNfAh7Ctka26MJhRJ9NE1wjMhxG6qqdshodDDkAtQMp1WoYLZg4",
  "key8": "2jbTAjYzsdux6UPcUi1FngvcnugsTogTZKn9eaSh9PmS1V6VjZkmAk5dUmU1Mmb1gSVKFTxgkoPaYeguLLE1cUHu",
  "key9": "3qgWrJALP5omSgpcHs12C5Vi9m7JqLJKpCEXvmfuCgAZZXVQmHPhZiJ3HPu4uCxgA9D5wSR1AshFkQmvnHUtc699",
  "key10": "HDcGrqyzPH6oeCohs7F2UGkEVM9jbctUM5ZogqYEZKC1aLAyXN4JocFcqgfjUKD1W3va4kq4W2Wgi7J3dkRBYkp",
  "key11": "b6fvjT2j3D9Xf4picskysLmmN4xGzV8n7xfCAcoioMiawobnzKv2mSsnm6bvTatZxm2parjSty7pBqMpnnjMonH",
  "key12": "5fZfsrbWttv5dDDTokNwZxCUDUXHs3JHCPyuy9pnLDXUz9fEDda3172MPwgiiyq5pEpbp3XkY13wtvhn7o7Bb5M3",
  "key13": "3FWcFwxyfBGYY8S7gPbuXitmt3HMro6ZXjPjy22u1VeX51ZMmeuxKg4QzN18RCsXXfMcucBpyLeCBZcwnJXzZvRZ",
  "key14": "5AymgebR5PMoFjSVvuxUvFkbf8psQL6nrvigPe4grKYGEVN6oWfHjs758cEyMJf7npJKZCTMnXB7QgnF1BFk3xh7",
  "key15": "5MizFZDM38pjaz1zVp3Mq3aB4B9g9ygMo9JT5T1cnc4FASgXH2zS2fidKyYHPkMjeCc7nyhaKRMix1np9ron5BhW",
  "key16": "3YB1eMBUGuLCqwLPRkUgxZBPXYaLLNc616ZK6mgQ68MsXu7Ssk4SU9ZpWEpYJY4u1dNLX1SBrw7HkBpR4EcvHw8V",
  "key17": "5Xyp7ty952k8nEc37NwrNib9VSHgtCxvv4o69Jsr1Po8yiuJZbVLDSTEfd6oraWAUQiAkugxwpvEUsrTJRHY8YDq",
  "key18": "29MjLxNiwNk3bL9bJnjP9zPWpFQstEL3Tjh1sf3gvnVpgeZhxCHVRfuhWwmw7fmgkMATRkhJVyXrH4ykWw8dPdUq",
  "key19": "xwvM2G45UbyoBDT7Hms8FGsFpF9gqWSAg1HorCZybea1bqu1KjbLYQFCENMcGkr21QqU42ogWBbbgB6ekY4xykb",
  "key20": "5MJNw4nWj3CSxJJTfzPQUz2wCPSxtJwKvg93oege91CW8aQvaWhVHgwXtbboQzpXDqAMExzjLvC4vK9YKivgNExH",
  "key21": "3qXqqt2TJEmcHpWW1oSg1hwezimuNEKtkxtyiigQaDDiBiQ6g5LaZaPFMYQxGBXG8tGMrBg3Thb8ZK8bULsy2qVo",
  "key22": "2qwTcyMmBhFkoTvcyHEwrgHuhw9Bwim1v4KU6AQikTxGx7BxZ7TgRj1k212MyoSBpApbpdDznJTFNUSCE7kF5ED8",
  "key23": "gPkLaoCGJ6vkqz31TVh3Lg6kNYsg1TyouheyZM6jApEWpa69upKCRdAwVnpuU6PfemmC8LPr4G9C4c5rfNj965H",
  "key24": "4MSuYuQmwKFUiMq3jQFuA1LjGkbLvCVm9wmyBrtPZH1Jvk35fpEFcVzEtPcKXjReLgfeBR8cBa2JpVAB3sUe17D",
  "key25": "2R6Rfc8kXhbvtcXLh1fsT5n7Z5YGyboqDc5zTkrc9vyoqYoXSZ6bdDjBnD7fv2SQxHTv1hpapLfE5hdfkH8Wo33R",
  "key26": "3jts3VcBqC6bR3TAGqvZDLcwa94sUeXA95nD9WefmXxWPwCvNECLPDAhcyGLyFKPVRWaqJypjKtoEHhEudMA6F6Q",
  "key27": "2Dhh18SbFHvFmXsoTz1Cm1anqCtccV91ifpxPj4TUbtTWhR1acUjTfEuRykoVKj1jpWfpHdYjp6EEAmwckUNHyoS",
  "key28": "4r8vKssXHnXbAoYdHjSMH2vm3qCKE7X5eQdMgHjMufLUWmMbmtfgzqKhufnmto1rWEmKkaMsU3QWBAGAL3PXqtAW",
  "key29": "2REpK4jXCdgvSK7mbJBSfcvWYyU9kGgF2fb7xiHhpzAqwY7VsCmR9zHChLuKAewscMCQ1MT9KJsHWD6KvJCgRG3K",
  "key30": "UK7ubjAihWotJEbX4Gcp5d7dgGc7NxkXukxCqLJ3HXVBNrMq8NaVHquCgv9Tw7uBHmLUig4uC1m9ZfABokk8yD9",
  "key31": "NZke6DrbSZmz2GFhHD4UiiBuGcry8iKo4HjEpThE2oBXgs9W69vXPBwqG41wHizh8Bb7tiB4Zdjvvfekh8M12xu",
  "key32": "2SoC1rUwuoj7EA7DHqB9crdWPanmEMY4U1Jis1mDMoPY3tVUkuU9v9iDYAUbqeFe3EdpLh7X9pJUE6B69fVfWEWT",
  "key33": "3Mp2mQ7YkFbnax2ZdMq8mcpYDx67Hny7EmSZGCfgEbqYq2WDaftvTc5CkFD1LiiLF3p2C8Kp22G2494cUgoc5WKM",
  "key34": "5agHPsEEppc6P8FoxsR1zs9HuVS7jXEyFsESwVCvE6ibXEDFiubaoSfPr2PEzBcnJF71hK8rpm8kDTo4MWsEAvKq",
  "key35": "47i6r4Y1hLALBxeKaeQNXf3YLjWNwwPegSrZty7cbw833RG3SE7ZNT4DStFoFg1eadAeLWRLwUeeoad4jWrEjvBe",
  "key36": "Mz3YxLd6KmVbqkcseopJjABHGP1EmjJWzveDzVjsQWdJJT1VS9czmET6t54eVoGbL3Q94HVCYw1H1uo8XVvinv6",
  "key37": "44BtyZA97QRuRH67n6CfPyKsDCJ8mit1jSYMdtJiadr8Pn5p4LuMjXydBRMACbadk8z7eV13xrZyvBnFK7sEveJL",
  "key38": "3Ut7AAwd9sBESsesGeXtES2FdfRiC49qkWJ3DmatCAPVTmiKpBaT28P8vJqTEwLufb5D1REHE9CpQY1jBj2voiLu",
  "key39": "kL55Hq8r9w2cRxQViutE5oCSmtubkkjPycjsHK4XWaRK76XwHs5sHoWoFKuchQeM54MYXmpw1jb316ZbmpnEzzH",
  "key40": "3fAZSBP2XMF4h1WkzAHz4QKyEThKbjJodd3wRLF4emER6cckzmuYcyFUECCs5n5m7H7SnQbQohxmgmJsPBQ2zvCY",
  "key41": "2xCeEPsUxZLjPQpa7FrMm3E7CPnNVQPp9vP4X9CwQc4h2AznLtDk472eTjeUKGzTW3eMp6FfWQkMmzxaygqhHAGm",
  "key42": "5tZjtBk6WevP4xHgtg84fY3y4k8ZvBrYNaJNGKRLWdJN2abTrzJNcKRQb5eYF4CrJnTCfKi3NuaZaTaGhtyfeQca",
  "key43": "3F81kjZNAT1Bhr7dRJNrBtZGBdRsqEqDNM7taehBatmnwNiHdYnGkZ3nWFDXbXaaJijXEuuCB6tPZiiBrR4bKZ1",
  "key44": "4feW5X4m3Rtn4G646aNmdyk9KYMoEHdUh8s89SkJsZxSUcYY1USdAaGA2DFSHqyXbXGPKkbjbdcr2vHfyGb5Refu",
  "key45": "UusV6g2xNJMGXmzqJjx1j7GkBmN7Qd6CEXrT3JdEEEmpnMhAuSWeNd7b1iF897tCEguvMBp9RdrfvMkTfuq3v5a"
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
