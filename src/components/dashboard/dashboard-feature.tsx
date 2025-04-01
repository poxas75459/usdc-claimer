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
    "5tytuWtbS4YgTvu1z3Tt2yr94KmpuHKoPFUWxZQjapsAKUuN1bGuUbA25WDzW8sE2px6Gy92SsweVTvEXyhjF9N1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EByGVGuw4Fze9x3fxg2qP7yU4qQGfdLw1x2yU5d8PevJNpfNRvyAPGeoKQao4DEm9zRVroWBDaRczpTnxZWponZ",
  "key1": "29oka879nCz5GR1wgTqJfsWAyZNca7UW1azeX92w5CBvPCX4TorkKaHMxPyGc28GzyVjYi2EzVyFqrkPwagoyXPY",
  "key2": "5hqCGVQAJ1aCkork8ZSCdJBFypfnR5FdvD7kHLAqUcfPSN1VbEBhcNSEnRfifNP44Li6r5xx4ST4JD1QU1iCSR4Y",
  "key3": "3phukWUe1kzQP7Uu9uBKc5GPk2TVk6Wg9QRSXEjE2XxNMgmhRLcVz91scpess6m8oByPkGNtb65MPLUwJWzbZiD",
  "key4": "gWfC93i1fpMY3i34VUpxKcchjiWjFgMHPhGra9pDiKB6PTaQ3sgbKFdB4mNaspuvXLwpQcBxm67ey1SHVthqMwH",
  "key5": "evVRDkRS3UWnj4KcdbjDkyxhn48KGJJn3dtCpgxr1CzsBLMVkQkhznuw8QSeDUfuSB1assgpKNHjaKt5A3xhZ2h",
  "key6": "8qdhdgT74PGJQPbnnMik2o34CASpYmtFWMFLRxR7KCj5Nc3v3mF9WXi4UcV6uh5kpovmUWVYz5t5X8fZcW7438m",
  "key7": "5ZuauY1LLkjaZdmKM1MfaWzKDMYeFsRytxQqsaS4qD6ZFmvwB197AHJzCDQyXP13MBbTM4UiZ26tJNvhuJ7EP8Y2",
  "key8": "XV55wH7VMuQjiKCHJNjQWpcRtHo2ab9oPpRhvfbRzpK45LQss9DyFL4AEJavMPp19Nxcnp2JJsAq1ieMmgAKh93",
  "key9": "4CZQRQx8StJFXXhtjc5XgG3s4BhGCDiViDV6LtRbnBSm3FN2aHhihkG8Sz8eX6wDvmZeEYsEYhbguXCdZFRDnbs2",
  "key10": "5XgZ829YiQmhAvFRtHNPjGS5qckoREcEY48PcWW4kD6VosGFKjF8sNLwxu5eXpPsoVTc4UPvXPAKJNeUZkL8PBMH",
  "key11": "46WFYgEoSRHHkTAuGYwzWZmCwuD4G8NBHou64sXKWZWcum6GetitVQH4aVT27ESN9jvWb2m8eubgpBvZWHehTR8d",
  "key12": "5h7NGZXVTZptPMhDR3NJbDaqqT31LNspNFGxZWZSMxHWXDYcSiF3pBE5oTCvJhiXFEQQhzfWfz3kPPfeDYHYQDbM",
  "key13": "5KKvzyy9R8n47EsWmQnu7zYRsuD7BFkxms5F8YfQHN9n4Ku3FaGCPssLnt3GqaEprfn52J3AcDfnJi3a3Rx6Jr3Q",
  "key14": "3NeUTj7SRr1FXXBgoHoWv7djSUNjXENvDs5eTAPqZm9bt9c7YscNoj9XqtdGEpB47GB5PyQ21ATHYvETTZ2zqBEs",
  "key15": "2eEzZHxzkjeBzwfSRdQCeERb8TcchzrenfjTvuRnLKPoCHt2LtQfPXajXmfRKmQL9b8YLBW3LCdwKSQwMq6o76Zv",
  "key16": "32XqGAATZJHuFLTNKb4YXSeouNchxjpyQEJnwFiwcGrGxkhSjLd2hXrwkpptYR7GHAK2rzVRCXRojZuz1PaKzNkr",
  "key17": "5ukvPBdks1t437wiGTzVYEzbiSMLLGAu9s5jf5yhbN7zvMkJKmoa796B1UumkKnqkY22hienenKxAaRTP8FtG5xy",
  "key18": "KLW75mM9QA6bQLd9gDNtHjF5pJhBYKiZKiFBTsZhtnwipwnVeeXXS4f7XHaygSDt3zB8DpfxWCqM2GtitdGfFMy",
  "key19": "2j4LjP276HpF4cSKWDqMb7TDyhRhFSE5TFF7GW6n9M1a15ZTmUzninGoYCqPNWQSZyYKTnV8RJv43jvAbAUvVJkh",
  "key20": "55KgYHDAu1U7GyqYdHgoLoKi8wKmhBPdNcC4GoRhpMyyRbtWkMidMZmrigTTFCzrS1Z42wMRnBRjfTR9iV1MJG2B",
  "key21": "2jp5kzWUdspNGY5CnPTqppA1k1UXDbb9HGQJFU9Uc8igNXF8mXosVfRknBAq85o1WRaLapiVLYwmhReCMeXyHq8h",
  "key22": "V5zc8xZDdyTdAWG11vgsjKHTmmtQUpTgb3izSEidu38mbbkSLyVoR4vwnznwVVTUJu2Qsuh4Rgd9K6xQfSwbdaJ",
  "key23": "31LdL8b6bKFU3zCK7oSnJpemqcjzUstTVX3c7Gsd6uVYvef3NMXFrq5LJY91PtAtqqxu1ZbUsH3L3ZKnhmBrtFjK",
  "key24": "4KWvYoEQEuxGTUHS2RfgiE15djj4nPasjoUjzjAvg5zgbYUqCNE3bcAodw6Dr9kpW8vqJD5APCDDHxeeCRoc7sZw",
  "key25": "5oHS2nanLcx7NyXDcsyQLmBP1NM8WgJhewp6FMwor5PJU1qjc8FFUikJdXGt4S5nE2S9TKW5zac8v4WXTPHCg5AS",
  "key26": "4zqpSTt2kG5E6wVxvwjDeAJNvAYPYphsq6T9V3jrTJgKBYTjV45CK75eR9QRcKJyZWtFUpoF3SjCx34PBkADnnQG",
  "key27": "5Ch8pTG6V7noXNPZtFeiWaDwBdY7dPGFvYcCDUJdbiMjXiyquwjFxjKFd6n9Pt1doQEy5ybitkyur1AFDsD11tAg"
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
