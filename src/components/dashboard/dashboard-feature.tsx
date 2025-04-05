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
    "34kvW1VkJJMHUg3oQJteChPmQWvsREGvo8aXvvYD1nnrS6ZYjaevbmhRRHyggUUXCQAQobJgYSpr5y79vBMtV38W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QxJRhV8yjwQZn55eu941krmbAJ1yAjA2YRTemCvTrUi19pADciXVQ8hcDAo8rmBzxJX73vH64oZrzWwmLpgvsAz",
  "key1": "2mvczwjfaSXtDcMiNp83N9Qgubv3mVy2E11tWwHXL3yyYVbk3mZh5ppxXV3CXo3L6cfdajf6WkULtdLsvtH4L2J3",
  "key2": "4k9gpawaRKT6tiCtsGqacKf4mGG8Qwdhh1tdagbb6jJED4GwYa9q9SJKAvHx2qCcmEwoCbBGU3ejGXDKDTQzHHsW",
  "key3": "52N5TQCvHo561cXd1syhPdCq2pcuy4kNHk3ewfAfGRfc4cQ2tboHeMkR8pR5fQ5eqbcdTcXjRrykFWpnXGziCgs3",
  "key4": "49mZqECwfTuS8EExYYeCPMQ48xsSPQXog4GcCtqxA5Y6jfbJuAwue8LZEX6nUnsQ2FFnDzVtb85eeeqcvek2fgi8",
  "key5": "2aaFZJjCfsRVuVHg3qNSSJG8kcYDaB9oUJUZsnc3ovGzDv4srdij4vz3AMj4R9QoRcBxKwKrq2CfWV8TqhT5MTmB",
  "key6": "4vH17H4QBG3rKdWtfQ4TyKSvRWJT24HCW9BY7SP5jQTpNtgvo9mYCezJpGeKib4pqmDcXZu6mXyFs6KMax4nzyEj",
  "key7": "4HAfY7adeqKzhvYeheQ23Kqzq1sfUc5AhJjKDau3QVayqJzZSy5Ymw28PYPaQF68VXUSiBFnsQr5qEqiTvePBr6Q",
  "key8": "3JerrTr2oZ8yki9xzQkBbRSjnhZz1iUSVBuvzYqgguMmLuqkjMieUHrfaVQejLKJ3XY6x799VLmVyYFNFzCREjtW",
  "key9": "4iDpHdjo8mjMBeUQMPdYpdoC4J9JUzB3g1BKk8JFapQWyDuUdfgroZeDu2XZh72cwWLJEnfF2ZrXiU9PRDzuYvBn",
  "key10": "o6GwKJ4XYSRbkg6AYVpYHqXC2Z3aYQNN6c6iab8CrDqxS8kocwm9q24V6ZDoLL6Xrh9jc4FfHyqSRDkt8zVi2bC",
  "key11": "4kRwQBzUf5LPPTk31tzhYKCHAqK4mT5uPkVvETmsfn2rknnKRn84Cj7fpsW2Zxmf45RzAxoBKcYVXR7LbUkH2mUe",
  "key12": "63pkoQeLSn5gh9sLe17sNEpZoCg8Qg6D2VAyzbG46iJLht7b6goAsnD1cmP28JpCoBXv4wrs52ifsmWLcjsiuyfs",
  "key13": "2Gmhz8HxGJRDzGPajJRP7LSSTqKiNTTUtXJe4NpsGJHVtqCgHVzGYgNJBFfkfZGMiXZHn4RkTrWXQZj3ho5uJSm7",
  "key14": "57be1TREEaVcSWxv1pTSW3bdVnuvZo44tQ9yyG2DG7KCrkU3u7xqrFNCHjuDESMug3BP5RoRczpeqpU1oDjrruWH",
  "key15": "552xL3GZoM6bntFPM8osNu6x7ApmSocJGtKefYvDxNYK7ULXxWxGzJVXic9X6APASmRyMRhRwEGwshne4HBULM7H",
  "key16": "2aCY4s3R2rK6oLrVcpomJXBk5u86Fkg99nPPgp41qfBaJgnsmLyzfZojrprLonq9RHCtxhVsQiT8Q5UEZcGh4PmR",
  "key17": "4u7frRGs69JieeZAJSHXrf4tNn56zXX7cdU3fQLZEJyD8UfAhzL4Wqou55hVKn6MSvxRWgqNrzmrPJmRo9vBjKtZ",
  "key18": "3cnDaNQxomGMZM4PUFGGJTTiUBaXqCtt5EiXbSHbATa6EyD29X2MBfBP2U3hadGkGfZ1bbXAoZ3cd9mXxcu5e9nJ",
  "key19": "5krYTT8DmZ6oMux3sDMzKTsr8XfqR86Pr3SWXZkScTeYnYa44hj4hkeJp7k4cn96uLiSjHwQHJWjeR7iMUTFhKU1",
  "key20": "4XjwbDd6y5PJvCPdFmbzcUPECVqLEDXiL6v48rEQnwRDgEJFLMtf4npBoHfP92osi9HsRojCB3b4ETg5ibA8eQTQ",
  "key21": "3rs8yZ8HoEM2Ubvu2K7cfzXKgEWAacgZDN1ARVne26TjJz7wK2a8WiWc3NHL6UdecMyJKzHAES3Kz2BUKUxpktYn",
  "key22": "4RDCVVGtwYch6sbzMGRNPQbtbVLiQdvuKr7CuFPvkBwHWAtTC3Wn3HkEud9PWryygfFYBQ37duK1PZnNxik4TJUg",
  "key23": "2vzBMWUt3BwHW6sjZdZS7GdJtTR7hKTs5Y8t1Mn6CHyLC5JbEqWMkCMwrZHHb7Ah2akC5TNyaoRCmEtoy9S2xtdZ",
  "key24": "2pnsXxBurcbYEWP24339FWW4CAVybWLQktbWBE8LyK6UGbSDNSTQYEyULkjdencJFpWvt5igff58rUidV6LEuumk",
  "key25": "49rerC8afsJ9HSn1VReV5yzRHmvFrKLJhiFrL8mCcKeTmufp6YBCApiXMeDAr3UpufQDJYosM8zYDzsBPrsUfFde",
  "key26": "3JMc3wVzC1btWJSvuytEmE72NMSMHcZS6e3HFxaCD4CMvL43ewqX26X9Z2yiLYcGQ8N5WxLs5S4ygeSqCwtXwQgn",
  "key27": "4GJdtoYsksqikABmRXVtUWjoXSqhjvYcjTAs5buB9b6juKtjPq12w5a4Shtr1uRfG45QcKPZ3cLXTr3AkruUrMDN",
  "key28": "3HHqYnyVSRbTN47NnLboBaiHavCxxYVYEawMnt9aAgpWtbW9SAGBxc1amZ5e2nvR8gJfs7KfDDVBGdoWjzCxy8Ad",
  "key29": "122ytUSswVZBHryebjjTsZNeD1LBAyDmjnTAXdpgyE4VStC1eDhefV5FoHhUEMzqQqUMo9edY6eogcn1JmQ34NH8",
  "key30": "5cPqrmgwuX9mG1RKnDFXMRXNMjbH9GDidN4RrSDykTomF9du95k566byZ8aci8ntTDRy9GnwpMTCZd8pb8Sc3mz",
  "key31": "5awRSQp8fyM9kdQwWkJJrtkdXZzxDKk1zpCr7nQJgvfQTKenVYyt5MyJxvLbiYhM6DxtqCpoqQYWbicSLeivELpZ",
  "key32": "3mkFph5RCYrTyebR5HMQ2BNaGQdchafAfQydH5btTm3eJ6wLhXemzGSuuYmuE5gp46vTpx8F8T6aaEkeEYHVxXRU",
  "key33": "5e7AZapMAgdDVf24CNTn55JumqMkPcpsr8fbLZwZxjRHXuCXGLXjNL16BRnvjZLyLwYhyMSfYVuqEC8cmxagTsMo",
  "key34": "2PksbzsZwZ5qjX9mmqKNDi3GzQ3CSgwjf2mxo3W4yLZYdNUhEQq1xnnBeaHtyLWm5nn2XK5qgghkZxtRPepp54Zc",
  "key35": "5i6FY9nN3yS8du99cbGF5yQmXcMRdtxwweZBitegxHKsuoYuFtzvBJMkuTJpL8nWoVvvk7fdfdpQfMFAye9UiZ6o",
  "key36": "q6qLKZA5q8WzQGCkuPnsMjS6A7TtVaXJ2ynx3Gwmc2fYuojPKAjH7pUWBj6D5gqvLXQPiiTWXcaTjcR78s2D3Gb",
  "key37": "4n2GnjgTW3PCWzEXYn18gPQYYp2eWUz3qqg42tgas2cAMc5SXA3T2PCeoz3ePtPUdmLh4ZDufFsfKj8FvYRqoVpG",
  "key38": "QXAs3ZnXA3ewrsoH722ZcftsgR1V9E5eX1NW6rUZCdkwGHmBG6p6W4gAq9m8uF7AAtPtjLCTk4dFvFCfkLZoNfp",
  "key39": "3ocquBzeNPZ4Kvb91svMRb8fA4D5QLCGCoqfGRA51pUqePYQxjEa67ZcGYQWmutkxdkK8BfrN7LSHe54zsph31Sb",
  "key40": "5Y6uprebm28dL2FrmFijrdfcCscUJEXe2yapzYTYi23dKzSCt3tHYTsAqCDLWF5kCj7xqPL1KcGFMBE5owxZP2Mb"
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
