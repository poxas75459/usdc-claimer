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
    "4LdLtc1TSXE5DDpeieadHi59M7dciauvZswpFPzwfbYXWiT9w64SjQcqKNMMtEfvuEfZV4NxDEJT114Z72XwkTdJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39vXs17xooMqG5LfmS1GsmpDAB8BgMs2RDZNs9DmpBfPzpaxDZCEmzvUn4rRyRXcYFPCGoES7vTbQ2Gzz18HUKTP",
  "key1": "3puMob8zQxFXheJXFf38LdgFrjV3DFzHNqVsh1RVGvVz317LjqCP1f9KSPipnWvLVDfTG9aDYdrqfvHRQWeusHpR",
  "key2": "JMsSEzSmRgdbrKFH8UsLpRapH59CtnvpAGaGnhh2gEUbuMgzgGjUo9YtwrURQJxVjko6SRyaR8SyJRELrhH5mBr",
  "key3": "dKbNQvXLirVJLLawogApe9cUYdR6sPncUZqd8AVTQGZbnW7j3goz1JHRtpGK3pAqpN6MLbCapSMEiYxeaYTgULt",
  "key4": "2AXvmVcKWQAhsZyQxHCWxFFkrzAYyJZeQs8N1QgwAWANfsyj3QjmA24vrywYs32r222spCLCSU8F3axHXWN7WBPa",
  "key5": "4NckF81hRq7tdcTrMpD8iEJs4hjqbGUbpKEX29a6uGmSHPcHAWEW8LhKr27hkDvxbQCFzDF9EovCELKcAQ27LX67",
  "key6": "uM8Bxo8giJYokmcaMvaJongpYXWvWwpbk7AqbNiTLypU5eHEdyKAQfcFPTsUUPCnz8R66wjZhtnsAvdLrKTULpD",
  "key7": "5SoppewwW2FM6AuqWG1tQm3kKPK51BDwvLTL6c6enN24F4osfsZ8SyxwBar3coAJGLnh9JSBNF2v63FbeSo5jgNg",
  "key8": "4RzjkPB33XKcPA7VKbNbM9bjb3u83XTxmGCWdbuh85TbPs24Hsdhfp9z8ZoNYmumDouVQrikaj2XmdNmW4YXDiNh",
  "key9": "2kEMiZaHb7CbQG2AuDvrLPrWVZbWyKaJqdVHkzq2pHBRmpoC1uDUTiuZpfpx6AxqvMtCaJVH3dKzusB1BR6ewaRj",
  "key10": "2Ut1awdmfqhXh8gvMQsyhKt4RkgwZkKv7fRgFowz2kPAHqAhzE1kiLb3uc3YDsNuehjSJZCwYWFbBXh2cYccFYN6",
  "key11": "2Zw5mjfN1ELJpNBBkb6UEXGDK2PEyEZFEHJxLHkyqS8cgy6A8WByFAQ5dew7UXzjoKVSu9dYbac2w1CLCERGqxHe",
  "key12": "3MyJEHpL9ZDFzdzndsydnZu7KonFdNJrg9AhbZhpjs1Eeh26F33AG5LN9M7rSLKtitj4ZPsgWz3uVdNUZt63N9Zb",
  "key13": "3NKAGUxmiQodhrSkmLCykQdsU1CaKwPWgcPBBztokpA2uD2yEmquXT5AnXS4pQhbNtmq8J5V8bQ5dkhWjSoLXByG",
  "key14": "32uFdDpRscoBYkE32Y7z6ThrMUjCAvWVX4M143geUbqbGbExZBJ3NLPQVWKJ3DiE7cwmGk3aqFTdHFM24prNdG95",
  "key15": "4KGUNYKfgx6QL8XQfHvVjwXJkofapu5xNfQP367uND6yEQG3tS9t5a2UYWNq3wdKKYVSckvcqgMvpzqsGVrnx2cz",
  "key16": "4e4hVmySoXfrXmtrXSsqm4NzBerQWLLUibLiYEQaK6DNvLhqgtvsZTfVuMD7m3ppdmjXTAZPfzaW3ZaUNPY8QD96",
  "key17": "51BqhYgHL8EEFboMjmge79nqpbgauCqdL3jWXVg7FUGK61V5bmnZjr1TAVRb2ikY6PsnCrFPUAGs1zHj36ae2msJ",
  "key18": "66Dg6NMeunTmE3NEC7dU8YgruiXx9rS1XkWhH3c5wisnmodkQ4bzHKbeDfhGt5Ccc1jnM6nxbUFghpCBE49m8Yg6",
  "key19": "wjoSjVHK7SMb7DLqZH8ZEuuMqyAstFUtV5BppEjV56rkZ6WFz4gHKKa5uPgactPkPg4rLxJpRpExvhS83EvCHwU",
  "key20": "4LJWRNsotbjmpEk23WnoyU7LZodPiLGJPa9QT8MDopJnSfy3y4FUpWEzpUAi9UY2jyTYjNcCjSh76CJT2PBY6277",
  "key21": "h9wjsRrFS5vKoLNYPLMU2YQ2Lg6yDhLZaECoTHqhoczeC3BHQG1ogre6PiTogTTzFjdYq3rD8NENe7VzonZddz3",
  "key22": "2nZ8jgjUDtTJWHt96kLMozasChCJYqxqf3Rep8eThNzyPW52qTp9xXNfT8CdU8Lmmf9Lzf2PRdEc1D62ujFq2Wkx",
  "key23": "3kZowe7V3Y1ZBgivcRKsf5TuN1yrpDEdRqb7oVz9cz899TERRiTepKVNHXM73GddctK6L3jHNHPYMUJ7wRQ6NKMU",
  "key24": "3tz9w3aDudtiiVBGsyeKjXE3EG5zv4yHjkzir4aGSnyx8yXDq3jEzSQdJPxcxagMviP55F4AKdP6YgqaUYYZUGcc",
  "key25": "5x3CH75vA32diAqCzgu2gLn1pDjf8iyfzxdGsox6R1A8FDacRagGvKMa4HvSfn6iPM43UCZGr8NfEJzQDfZ37sbt",
  "key26": "37YjocN9GWeTGraZoaMcU9EeDDFHQvHRVT6Q8Vet7ac9dG6gfupQ5DGJQSTusu36DayhkqJSpcCVHenxakLmVJo3",
  "key27": "pn7Gm3cVFq49Z2vQi46MgJYWGuTAFTF4EtLkhyDLm2HxvxTHwfmfFcYwWYNc4q317sfogBMy9wZnWf7s3G3RNia",
  "key28": "RTKxFP8NnXbkH6URsR2JssZcgKeBMMFZ7dkGzFBRvZabTocrsb3stSCNrZbM9JVSxJqKuDbUAmVQx4PXm5NMBTA"
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
