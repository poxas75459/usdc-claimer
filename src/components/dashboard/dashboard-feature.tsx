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
    "zkqBCfRvdhJYHYyLaDDEobuuvuJZBdPZzRqq1XPjctZWcuNmMCr93qXQ7CDsP27RpMcVkvqyUme6JSN2aVvHcMX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j6Q4RUBuGuAb9GmzT89VWpDvu3JeuTpBLXJ1Tu1K3bApapVZ826Mr3fBZbxvH6dYBt4L3GpctdgaYHb6JT98gDu",
  "key1": "2YSQ7243PPnwviH2BRjwkj4fhkMgcGFxr4wjCNHLgfJ3sPfAQA8wyjMG9XFbNE2tV4yY2mH4jePujYzSNi8J8Xwj",
  "key2": "4yarF2yVTiXn6YWrSDXXyhUx1MHrvp5SnBhp52tmS1867cjSyE53HQNTeP38VU8dTFEVW4CEjKzN61wp4ivBTP4z",
  "key3": "3Y8Z7E3LGt3qMJ97EbxFseeH5VNdtsTdB3tzaMYRTRdFDk5PGGsZEY2bdQVhGhbnC8nREqjBe7HqoFCYuaumDSu8",
  "key4": "2YyaP2awzhPcDURUvFs15NYxMFXJB9NiDJYxrBmQmxzqQhRHmYfyCPhUxU4fiKKcMprdBhLvyhWmiwHtmSie2pKb",
  "key5": "4fqqipFohoS79ZorYejNVLP3g5cYM4qfJf9T88sbNs1BCJEPtrWeDLWn7h15hAHPfZpRWWwtxhcbzkLfyE7vKR9h",
  "key6": "TN8RdkrBaYq5QCQvsvDqpZgzK8Nb3zbLywYKYkxmenU7yxJmzjsDJHxhxYqBwZWUhKHam1xQd7a8bVdmenQKS4f",
  "key7": "KorV3GobbE21mesWTrCEKVFSuw3zoYbJrmvHA6MsW1EFii7Y7DgN4EMCUcpfax75ZWQKSqrAVL9Xdx4oY3iat7a",
  "key8": "4843fCGCVsZ8Gs5sxsMb9pH2JSQ8wwXJu9RE3FZnEMaGcA76JYXgxTRpt7A6jabHaKobdjFSZipjBNBWo5tWmFUY",
  "key9": "xnwRzhwugTZRriwwJiznyhiTDEnLwuWhU6RuKZN9767bekP6p1kwqXBt4GL7LeQjLcpYSfEqDmzB6bBZiYwSenU",
  "key10": "2c5RCvexgVYXcbdDPM8aQ48RsENZWDRZEN9pXYSjeTDwNuL2sFD9WYjEN8B4JdgHizKsXPENgAaFxkyZdUgiaaFJ",
  "key11": "5VXq76DMtZnUcmjCDtihC1f3QU9qbsaZK3fztDWYzCYiXefDxox5oRt5W52wrQa6E5raYdMVG927Twf5n5XsL2r9",
  "key12": "2j22rzhd3cKweEJhhS4gq7L7nhFgtEWNkxKvmJg2zqzem85fS9kp8wHMswscAWEJyuiMsjHrbooqbPdk4u1GnC9d",
  "key13": "QRty9sov1e1NYKjjXrNyTKvYGnbR9BCskTCzY9qeAus3oo2vHjCuqD6t9g438YbKFqCQ99J69PgszCc9koPeXXY",
  "key14": "4x2BF6xrsM2UCEfqYvxpnAibDdPPbSNLrDic2DPjNk4YEXH33etaaXDEiLcuVJKvraqJzdFk4MKq86SknKcVzHFQ",
  "key15": "5enMr2BtPE9ZocCoXGJToWsjTFDkdR1wZRnN8EaQix6Lu28Sb3SqfAB8mQdvcTwVrsKKhP1aNyYkW3CnwtrDUyx7",
  "key16": "2ov23pTiiD7gvR7LptW7EzjhanTSyYHbKdofH2Z7ei1gBukLdNZYxJC4sSMSD3jsy4PUEDHsHtqgqm7fievbNn9y",
  "key17": "5BjWAzAFLf5dR6S7gBF43vCpN7EnrWA6HewipF6erLcBS1yaQN28MuQrsxKEfzRV5v2TeKYiXZEEHtiDDB71u7zR",
  "key18": "5pjh3vKT4AngdCiB7ypTWAEErDzS4nTTtc1Unozxz2GXr5cGWnU65t7jjELj7fxL3Buk4quMHCeBxjdhYdSxNQnb",
  "key19": "2gxztUbbYPQqMgasb3iPYq3WweZnSzHma6LqWvtXjcXdUaTUeWKYWjNyUj2esjc3pw8xabCtrPD9xyprcoi7Fi8Z",
  "key20": "nPvL7qFStf393tRtkqTFoUmpxXG8yC3ZTis3ymupDoeRzEgLHHJFxaKuj1B8Rs6W2FFsvTM1dWaMSKgfPxPbQYK",
  "key21": "S15i3frEGyPPjMBFixA3s1uVP391ZV92xbnfVSLR3uj8BtBmhjgSm9eDpzzLAzkde7ZRHJSoPMoh6gQrYyGhnTg",
  "key22": "5oFhpL4BEoU9o6Q5PRrTpytN2RELsqy1JpWmFZC47ukvkgTH4F2cvUNbJQzG51PcbmnAA5XdmxbTFFMT7VYXo2k3",
  "key23": "ibaA7EpcXSAEGAnqBew3iB3gA8Y5YBe8BBxwyrXpsJhQAYSfzLiFAhkk6BJGePymx4epMTmQHqsAqnGQEHoxxu8",
  "key24": "3yumwnAR7vDpXWSY4geG1QJESs3CcEZue4ExWGKpqrAT6ieBtNXFGX3Lt2PZMTQA93M5cWzHoqTV7a5AFnPFZAyy",
  "key25": "2i4CxjT1yQLv2o4JgWPpqsAjHvXR2V59VhD96gWM5KuirAk1d7WDffaWFinaZiB9UNqXwFUuFDamidRhpQsgzasw",
  "key26": "5gNLNHgwsZUCjmkbrqTGah8H9x7wMZdkE4odvvGXf8U2XhpxXyZTU86wSTYewvJUsMUQxX7hoVQjPiMLdokW6rb",
  "key27": "EHTAJD154KgbtDFHh4ZJ4oPuNGpdiUTy8d9TUY1H8uhbQy492NVvctKU1pyHnoA4sQ7EXFgnvP6uKoqKnJR4UbA",
  "key28": "2Ri5AcRbDmmwvQYwNhUxTEDdoi9LDZZXTKABs5dVoSvt8HPBzrmSVzWTU15yBNUuxq3i2pDN8XDL7Xy4hxuQWgKK",
  "key29": "4opue1cNsfB6nYR2VdLP6Y6YKnZUHv2AQD9mjS1ip1HcdskEkJoNho27k1FVitAUz9hVtE8eKjaGHVPgQ1KZ6MXr",
  "key30": "4UAJK2h4QsC5UYQSY4X3D8vwLNvEdnKFgY5TRyKffjoRfRc92o2c2s7x8xEoNErrmfRJvTVGSgYR4BDzZtiJRp7i",
  "key31": "25RnATmq5ys3qJZYCqiPyuT242Ndv3HXEgXXjfNG9q5k7Fp35R7DFGZ7T3tzwS8z6oB4ohcZNpcDZCKvTELngofy",
  "key32": "ykvxfv13xVHEgtrrKz492RkHL4eHUVVCZ9y5bHgS21BSKNNUAaEn4qD93dQ2U3rcmFXhcz7ikrWqZmAPFNpNvPD",
  "key33": "3eLd9Mdfrs4tN18yHTVDEiKHduFBYuw2MF21BjD1kCTMkTQjEXfQBYy7zQAWfasvahcyztXvTNj42oK7wChsPaL3",
  "key34": "3XjR21m4sXTofiP13QhKXTSG8qUfBPR7xugtZXaaBno5V4s7zAZepFkDgMWY5jiQUco4SUzzcjtggFAkESsrhhy2",
  "key35": "3UeGZmWncU3njLzqwinwAEQ2ACTNGEiggcBjgNAskxEpSYSaTVcSsruyaNKchRE17UbEYdd2jNCGpkHS44epJAf9",
  "key36": "5nwp4TuH7KKBBJgE5o1LzbqXh9GYQybDU2x1ogDsUfudxDMA6s5zA1xpcq98P9HZGMc9yrVRZpaepJKj6Ctpow37",
  "key37": "3mPuHZ7YqWBqRoticBd5WfLKr8Kvrcv5RacJ8eL5mWb7ijjqfyxjyoEmYcbgTq1Ji6bViqMQhdoABWhJfZ2UYGy9",
  "key38": "EMfgnfrTDMNSUEujbzj9dDEUGqFxbyKYpRj6vzGN9SqzDUtU16e27okthXJprXQDFd7BKXApzswsofaFuZ2a8Zh",
  "key39": "3sQHTvuMash479XaLdXFzBzqcN19sgJWX5TJGJ312YLW5tyZDvktxqJTF4gD1Uj89PrjtTp1sS3hFyLMcVv9uR8h",
  "key40": "3HCL8G6XJQmieJFemcVk4NEMc4JCu53U1W2DSWrt5cj4Tbka49dMq5R1iqnRqH8HMjMPrSRjJUZA32TrwRun9GmE",
  "key41": "4HKuh5hPnysT1i4skJcRByUY5ECMLNAnUemfJTtX361ZayNNxwsY2uEWHSqHvqEoCprePdXcLA4wkHKicRY8PyTi",
  "key42": "42u8hveeXQok1ha397eRqLCCLM2F6R3aiJHtAse27Ss1UaHh4cp9FBCiWbCP5qJZVB3wpWkS4ydK7SBw1RVCayvc",
  "key43": "6198tVZah4tDDYUa2DBRyXvqTYarrAaQywMMvzZkMv8yKSbeeZfgbkQUR8qALDuoNtLVS8isxR2aXyFmbEeEw5iD",
  "key44": "2rZEzBosC9diSENLvTuU9Y51HBQWVC5xpxeLfhe3hF15ECovsuXqhbehsUisDJ8CWndUEbkQ23As47qG7wJU227D",
  "key45": "4ukLLJUkmjdCVQETz1if8DRxJ3GhAP1PKLRcqYdt8MKgiexDApjvq3aS5KBudTnjoeHiCyijqFDw1B7XWxXraP5n",
  "key46": "5L67MNHZKZ2s36FpgfYPCLvPuS7kikgQzbj6ZsYUPFn9uWJP77t2yheGV7YNRReTCo4RWZAdqNZ4PDaVr7y9Aj7k",
  "key47": "2FPDzyioZLjYS9FmYe97K6Q7rtTLiDp6Zo7HkcFERqgQRyfJw4idbByGXufqd2wjjaJHtz1eWxf1i3guDECQCfMq",
  "key48": "5euJPF5PWUanE5SSFe8QSssRsAFPD3QudcKcjznj8HbuVv7F72p5Y21hbkt35DuLT9ZiZegoHKvVTRHtxtisTZp",
  "key49": "5rdQVF2MMMa61seCCFCMjs9vW8Lzf6pGBunGKHoFH6m4HvUniCaU1SmiRRQ4kuwTXU9GFnXdDb3eWCqgX7dzdAwH"
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
