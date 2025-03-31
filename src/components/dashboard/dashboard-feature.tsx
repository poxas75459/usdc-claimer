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
    "4EaE7m7zzTnovdNzGkgoeDzsmznxKvbDW4bkoeMzzQXmqqxbmjTsA1PtSN7i8Mqrgv8XPBP9ckXKv3BevJS9wbuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2boPfTThRqAivqmV6yySXhdq6TyuKRfDDab6XT8BvpKn1ArWweMVoVPQAHdjc7nqcqGbyXcpwbkgX7JtxJrXxQid",
  "key1": "24mU6Fj1HeKQRm91HvAGs3SYZnReEmiMSr83CMJFXsZB18dTVbmhG4NcRmiLRkfiduWtA8ykavrs9pudugFuEHrf",
  "key2": "u6utqUx3ziz6FShEdSCS5EQWQsHfeKwxVX7WHUrWpjhw2FpzdgrGwHxVynuUywdyij4WEKWyKPYPW1TKbfRPBej",
  "key3": "24SbZSkZwcgxEbK9kZvVJRvz6Wsqopwgr5vPec3o6dbShRT1b9hKzVjzqFnL43ZtoebDPJPJedHqw22iFKY8tWWf",
  "key4": "2WaDmqyBZAVdbtSuZi4JUp5Dnk7egma5t7RFp9dxm79ZHHKsbcH53LzqKaU218SmCDYCEPX7QwCFTsvPqXmtpGrR",
  "key5": "5JjR7J66yQ7CEPdq1tBmaUoLSL3GvN7yBFgJqknJTZGCwpTkvjb7kBvSo2KnAjwVjSRrEXPzmEAwaL9wpV3pDJy",
  "key6": "BG1mGtUFm1L5sZP9YLPE3S7KFi9B2YcBAEqCbygmggpE479V8XapRomtA4zFdf363yGWgC7FvzH12UseQqB3pZ7",
  "key7": "67oAF7yWTN8X3UjjZPRGntV9iky7JdJQp54zTKNneQHZqeJcQLhEjsDQYiXhVQMdZVRXn2RXvyrgE6j3eVLjPDCc",
  "key8": "TDaLqqj3G18bQYJYo4nP6kmRGkbDeqB2irAefwG7g9qfo5rNTasVXRyHmHDFyCKGctLSyw7uiq3PendedRXyha5",
  "key9": "4iQhTKb8xVoeuuzSnodBfz1iaAuXkHCDnL92qKarrYms6GWirx7yPirhk7srWWXN38qzcZtEgwmPgfHoxvQGGh8a",
  "key10": "4mobA3iNUGCY5FMXEiSwuWbNajUBJ3fxYbm4XFQ3qfLXEPxmKNE9JcJ6Qw1Cz8yiJZzvHTzdK1SDnaPZxEHyiCPn",
  "key11": "34xDsjvo3EWA1C9dZ7k1xVCo5ogvoq3yjedgLtJyu2FKBLFbcDgyobVezWTaFTdNEJdNEFEjawpTbjsPfdq8DhnG",
  "key12": "4yrGVEEBtJckn2ZNVR3PCZnmiiA5iTM3KhmzdwiUv5ftVzWsZhSHvdEkhgdRjS4K2Ab2HzBZk9rGjc6VEdsdByEa",
  "key13": "2aaNTEoUfmMvHUKU9RzrjyFCZeYKNQAqhzxkZvr9qhrVizBetorQWUuJTsdobTep8xNexD1UZQH2rqDt8VTju4pk",
  "key14": "2LtTEMbG4Btuf7dDqMimAhUFZkz1HrQuWt3GFHRxN4sZqTbjf5hPx1m9asxizjDsdTPh6SDB2S8SQ9cfP1UDSByw",
  "key15": "4yDCzcm5ZtV2zCp2ZLM3jz6RvdVVXVmLGvTNZCC7V35GwxgJBjf9UYiNrJ4pNJhyZzA5if32HpQKQcHbJdRU4SCm",
  "key16": "2qN1p7EEqBn1oY7GzMQBni1LBDxzUWe7yzrxhrtLD29VPWjDuJCDvrrjNkif1Hnjdmd48aCvPxKKFQeh4fkdaA4E",
  "key17": "46Lo3mbZ6uvGkaiFmhWTTGvAnJG494AorLAKK2rbgzRYkEvMykyMAXsCQqKmoBnCoJtFiufJK9mL75yKMFkuWahx",
  "key18": "5s2Hy2TaGVHkx3eZNuxDMhCZbE1kNioX6kizfCWHVioyQgvj2HFp48gwUvGfRj1F7sFxdM5SCNnV1idZ6jcScH4K",
  "key19": "2fvTzw125Yprzpnr4e2dAw3NU3Cj2bjAk6RWWQ8W2FZHP1uDFsHNTKo2W9if84WwCoPUdnAhEtHogJvkeJAmTVsZ",
  "key20": "3LnQzRPEs2VjUSwVEWBP1wt8yX5GfmKvFME9CTrL9gsaJtTDfYxX6DWr98fH4y3Svb41MW3Lgrq5GF4dMJ7aWhPX",
  "key21": "oHkpg9EmU7t58jpeFagmdaKHs228FbGmmF6hYm22aGf54QipoPi5CAxuc7mm5vvc7C2xKCBJwXq8u1wNGcuziiM",
  "key22": "7sFzfZ3jpUxDirbTwsb1CLRmnR1W7E5gjsMfwiJ7vwrYR2XGXxCXA8eyHwM6qfEEnwAoUor4eqgJfHcF6nwvabg",
  "key23": "5AXghwHMTJM94Fq9hwdy8DjSuRG86jqKyh9uj4E336Jk8uuZNDVCusPkL7hfphh34vmj3GKRAR4pUSfsjwRiEkqa",
  "key24": "579gJwtrJo3prXwPGiZJGPEmeLdL7fEXsTqZubxxsEw6FqywP29ti1vXgZoyQxJAcuZA3aXGQ462h8YrtgwgVyH8",
  "key25": "HfReaSQR748dSdJReyYxrewYLCcnTExwea4r4zjngJ9fz2yRQtBRPdv1rTCbGRfGGgnVawqhgcLbFvjxP4wb6Ge",
  "key26": "3KvyWqZW78eEq4oKiqYcjZdvQ71BpC1SbZrtFSTpZY3P7tBSm5KP3nABrDDKQFaRiX2b9ydaw2pzxCGNAWdnUYaz",
  "key27": "3mBAPR41cdScbPhRvWEZvLwGbW6jgyNLy7hFTkTys7d2X8wuAXTE44mfQGDzFvwzsBfju9cjaU8rj8it5fhLPwTx",
  "key28": "1iW8RmW1PBS1Ptoaf9H2gZi43rDXvUK3Te4Qsm6ZArRSCsTXSS61avhZZicy2foLQ3V2HxEAZxVUCQ2jaAid3ZJ",
  "key29": "3p2hcUSPmqHB9cNpqGNpbGqEsRnUFqyhgnCNfdQoQXErHi2gdW7AHh91Rd1nPp1N8cvzUC9f7oavwgsdGc4BqjmS",
  "key30": "5ZCvD5eANHSYix1MZNFARQuGziJ9Y7FBRtqrfQeQoZPsCB9arLwXCEK6nDq5VyNPbabofYDLge3WdkcBvF32JKn9",
  "key31": "PErqcfmYQoSn4neLxoQUXjpXUQYr5bzrkPkUqrYA9CZLvuJ8EmDJrg6LCZLxyJai6gHBiKVZr5rq8HhG9kY9nE8",
  "key32": "5fioJMgNusBFAycugBW8hupnTAd3kyMdMEwBPEDwMW5ZxSMXCAcPLqx5vhcFGMBM41bCrLqXVguCddeogJR26tuk",
  "key33": "5ptJLRW8T9utD4MxWLJf2uxFKnhgjquUa4QZawSrsqf9B7dK4ifozww4RLMfFuaa5onFC8UWeP39qquA3FrSWBgt",
  "key34": "5W38kbK76sZUupYEEWcuZAD8mLNJ1jLtyu8yCSh7q1cCr7acX2asvK5Z6WfpCgHw8yvrKE4oUSQspGs11iMUt6Vm",
  "key35": "2L2HwShvKvaz96ZXgfiqpUEJAM3kvsGyR4TcEffi8wM3Jev39ak3BtDK2hivXtkdqSG7G1kfVSDRaYmtayUjiSbP",
  "key36": "4dCqPrBa4cseDjitCHVrBgtJCKRcrYatiTkiQXHQ3asCT6cEiMgcvju2FcLucX8VpKPFX4KhtPiTNjfYk5pTmADv",
  "key37": "58KShrTkvP6SJ9EBmdFFCS2ixxjrQVV7wezEoG9LARqqrgL1qbVJikxk9CGsnZzpSiysmq5Jcbrr4SoTa1boXiUF"
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
