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
    "4xpNSTGeJChhiJvAiEfuBxdzXMiLBtxm1G3P39PMMayupdvbPP3RKz7moMm5scsRXAJ5G6wPzrmahxsrvEUgE4pm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qeb4XMR1AWW3z1gDKQP4Z5rrbJdSYn8qaunCtYnR7vG8ekHE5snkWKkT52jcNvMkhUvTn4RPMgnZv4Ea2LVgtKA",
  "key1": "2rzDB1BdWKZAp8u5A55NYfb76ar7ZJFg24jJM2NG9qMqsrDW5SZaAkwEA2pVMuEyZhTmAp5xyFSJCC4FeKFoJsza",
  "key2": "656RsiWowCn8igttSTqkCfRPJXhfGUHgpgbou3yEct1AGFi6HwNbTUq5NP2GbARHoRGGZEy5kQkKKzaoPayEf4Ry",
  "key3": "4Ld6pkHare5LdxwPzfLQviumdECJ8jXVUBs1YoK2AaUxFVo9n9ZbeZgyVS5yRqEdpQQ2p4KwEVjnxMA5Nsv3MkxE",
  "key4": "5qkBBmfscwQpE82SMNXuLkDed8LdbhjiG52SK2bst4C4KA3cxfjKNs9Gkq59yTKsT67jytMX8taymoHiGvJX1Ct3",
  "key5": "5VYZyoM8SBrGpA7FYQP7VUqXb8uYREFPhmzLswm4L5ebRKCxToVtHx9KFvA7onw5fpzaqWoYADYWv7AcbYyjJ9s9",
  "key6": "4WPd4DpW2RL9FEXTHbQ3QV4HBDoyguJNpBWJ5bPim7g7xn5ebGjj8qVo69GL3nfAqc29DvuWguCHngFRkpaaLCmt",
  "key7": "5to7wmYohnRYx9MFb8agFWfQjCVXhZmxXKPQghudtgJ7SG5g9JenvCjTdQSYgbTus77RkVo5iRRhxSBBWZB1Kprm",
  "key8": "5RjVg4tkfc3MbPuAdHmczYmkxKv3jZyMmh4wcNy3XNtcjQEBTaiKq6jPjuNcccstA2xhoqdYhjbjfCwgzYuvFxgD",
  "key9": "cyaQp8UCbXqcP57Ft4HYjEjiCXEZkLZxiUcaQmMyWJ7bkoeGcEVLQ1dcnptn4HLa8EuWnPCvEQKeoA9gEagcrFC",
  "key10": "x36kDwPNcbz6TwKoaCJsTyho9vyeK8GpWW1NAf3rdpKB6vfp4K3uXbWdVfpctcVzyUomVA42CNyoefczwJcdcWe",
  "key11": "34iSZ9Yaswyh9s9tjnDKWiWgzptmGykWE2oGCbWFG3tzEhznBArUFBRSsRr1M7PmjA3gn2rkxf5irvte9WhonzVj",
  "key12": "3vUAVq2Kk1JHaq1dAmvssnLNG28B1Vtxz7nShNv56v8qn8qMr16S33Yn6jSwvGgHwiy2qMuXZZH4QNUWYBRUH8pF",
  "key13": "4GNPess49QXgULJPxaWFQGQWvZcdsP6hD9fd7LHKxUEtdLe7Y9YcVJwhuUdhn4jpCYKz2k2NmPAwrSE4kREPNHB7",
  "key14": "5S6SEF8U2syoWgeiXrno4azJDsEmRxzeejntbPeJwnhKb3aG2Ao35tUhRFhmAdDH7B396Fcvw4e6NyTo9kX9bPyn",
  "key15": "5puLbaRt2eUKsez6mnFgSAxRMV4MKh8CJzxPSWWb3LwgbpBm1HTWv5RaoNwyXJzruRJwFgRSWraFLQsDcQSDKCeQ",
  "key16": "ivRBcdw8njLeEzz6nEbWxgHzALNVGSqksTQGc9TQiXVr6MsvhR7ZbnEUkrKicUzRrJ8LQDSzUyHGfsHXyi2bfZA",
  "key17": "3pe59S71WTL3axGJ7pDYmmCjydZqFvj9bpNLzWAggkdgPP1YyuWvx4YgepcvtDGXJtygJByaj4s6UXHcvNhfJApK",
  "key18": "5pmVwZrVEchNWAWDTWZpcqq7hoEemQcYuptDtykqHfYdtPmW89TKfuoNFae6HpzQh9iF5gHr3RJwRK56Du9mqhPX",
  "key19": "45eS969FTgAD2p8EUeaXTuAGbdAJRKQrEJqG5NmpGmciyfAxTw3Z4LTjdqpNoUe97TGd7fp2LkgrG5WDaWpm4hSE",
  "key20": "4pnFBKFUkKD83dMSogdhYCwijGRcaC9kXG2dsMS8yyvsRLMckysXQ4x2PQz5XXpn9YUV79AUZSMr14WPTDYikGBW",
  "key21": "3tSKPFmHKR2nWCEZqn6Yd62dvMJxo2xRJ8imTaafZpHPRh8Kxwka912s2Z9TBUkcT5BaW3bk1phsTa15tRuUL5Ly",
  "key22": "4B4HMZgmie7dC4XH64pMxTM5HueAiJDNMn1AN4GJzNw2G4SE5Rc1Embw2wqy7wcTsW93Xs2ehYWn8DNG93iH5ceM",
  "key23": "5c56ZkFJ8LptRpYgoHmbiuzWdxem6nBkRZP8DKmPhJJovFq2kFufoM1DivtFyD2aDtSc2h9a7itoqWrRPnyNSiBG",
  "key24": "FUYxy32ZCyDW5Xw4SjqMh8V1vjJdqrqiivRUf4ZxbjsTwvKPDRX64Jrga3ki5kaUF5pSZZd3vDWQp62rae3uYz3",
  "key25": "3VeNwuqECLWbi6WABcTXKgkAVj41NBBD8x5YQPjTXcSTrHvCTR4Pey9pWXFaTv9z4EbLhfb8ZKPKUDFYeb5e586j",
  "key26": "5S2YPf5iRxNa6bgyzkYwYWdijQMDd7nHSrdwRnPW2wzKYA93dYdzhrf3bCjtNFmLZyEnuAksn5iuwKREJNeR1R9v",
  "key27": "31i35CkTMh9KZBqjjjFLgM5Tgd3Vp3oewANDp5E21Vei89ZBk8DTxJCne5meVSGZL2viv1hNZ8ZKK8ngjWfF4H8o",
  "key28": "4XFJELykK71EBQY4x6zAZDrSPS84mtZDPf23HFrtYWDinLbEHvUjuPBZAwD3bF4Hen5vqoCKwfG97CSLfTrt3uUM",
  "key29": "VCGtMUeup3oMCqWASNYTWrdDnunZmku4ujCghAr2KYj96B9hAMJ8jvijsKjf3oQzdKoP2hg4gyCvUCufu7K1QeF",
  "key30": "4PnoWPg1RQ7tQkDDbE3UqAkf643c8aL33SwLsWVWzLwy9SY6VPDxzKauQHW3ZthUddBcpG3jsZr5gQLD9mrF4dSe",
  "key31": "3GcodRx2hjirBj3M5LamNVbtQgKFtBjhQwQZR9NLToWmivBgfPk8VTDdQoJmXKjupjn8LFKcd3LEG9tYmw5FPLMh",
  "key32": "4isRUFa2xftAbsGuMfKY6aCKNiwLVNqx8VzAKXM51JyxRTqYebotAPnZFNLY5b4RS844jpZ3Hps8YHnFrm4N61yo",
  "key33": "3DbbpBNTtLhGmpp4m9MmFTHLc5NjGAkJVsWDGppRHxMNCStQX8iC1vXiVaeWC3QzMEJ1Npo5iSio47PBuFSay1YX",
  "key34": "3Xyr32gtnGg7LuHozc7bjs1a8AyknsXB2KUQo3FuktJv4kkD3Zrt8PHCWNZEqRcnwXKmMLkW4dHGKBE18tR46roe",
  "key35": "JBcB6NN3h93VhZhcVUxQNTXoZ95H8dinudgZQTgBuX4BbDZS7Ggw2m1pFcu5vAhyc5W3MrbGYw4HrLcXPjPJUgp",
  "key36": "5dXgAFJSHGGq9waZzrzh2wtJPUNMtoVq6EkmBcmNVp7q34BCszhY24pGhheFzqXztSkNFevDQ6n6zXsUHiumJm2k",
  "key37": "3MutQFJLpzQJ9yqYtwQyhgcBbffqGtPatYcXmhi383pbz2vysHJS5iRcHwFgQBgSHfiee8juKqQRqPVDomm2NUU6",
  "key38": "4TxL92GSpav1dSkjohkTuf19VBuE5KbzT6zXrvTg5ZH1xhumQMiKarEAbo2WcEKGspR5grLKBee9xpHBwPiE2AEo",
  "key39": "5vntUKzNinFvWrwdjJuY8Adby8TpRA4mvecBpQgF4X9zbuT8obSu4z3GJdcnm347Hhw4F19pAQNVVk88EMqQ8AgQ",
  "key40": "3ENYHdRa93oAhHKyQknGKpLLetB1a71QLZFpAbkwNDJxTAmBnrkwtyHEW8BUbAEjdkBpPZQfYSsjq6WtShVB67tp",
  "key41": "3DPjzVnqi4gdAaVBckZKRa8bCNHxurdHTsUFUSpBH7ddHPrTojithH42nMPSvZxqBCo8MPTQWGxgTsXoNXV5R2LH",
  "key42": "61Mi7LyVabR8JGduQhkXGCB4L1D47h18wiKHvjcmuSDJUuYGuuPb4y4okrMPDySKocV34XQJ6QfqscufW9s6Nuhg",
  "key43": "3kmRbMDHYENfySGMXGoW9qqa7yXSkGaEFnSNDpgxXNyixLjAAh2EgbRb4CyHsScf3arpB998k4dXxHskH9xKbCcA",
  "key44": "2uGVMh55eB2zD5mKgetgqPSc27oVuRTfLhXcddSi9fdqzz37y3x4naDV6z6j3Nno539cQuZDVymMwmcE6kZhgJo1",
  "key45": "5kHXcL98t61bwA81bkfSLWpjJwsawmiT3QNU9zuoY9HoZ3sL5afNGwDxfkFCdk6QmoP2FT79x2vY9pAuW2oFqXmu",
  "key46": "63zEGH4pjUMWN8dEvrNtuGpDFgVdXDJ8y6cARRG63gMQC8vNos1YcG975Msia413FmbB7YLVzL9yEKjhLx8tfGyj",
  "key47": "5BapdjLaXXpzXDnJ2f98zU4VRy6Rj42RvcnCKwvZDP1R8GSeebeTMhCwZ9zHnpap7dWLJ3tb2g8KUPk15NfMsmQx",
  "key48": "voLjeEdkttsd4SHJMtWdNrhCMkxjYh139byukYaAgub83nK58AiiQLp9wtahgD6Zd7CtwKcogsgM17AN5LcCrA5",
  "key49": "2aV5mLAc56d5RPZiPvJDaTU2yaN8Y9RBkhnDYXuZJURF4gpECtYEpd1jmKuw3tfwemq58mtZtAHLrePEedZQ9ZRB"
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
