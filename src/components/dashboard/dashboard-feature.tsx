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
    "2n5gBa3X1HPhsPQDGYLCoiGeQe4Do4wKaW9smMTqexwCM9yvxLr8Y799tHVnavXoPfttVkJmA42Bt6XLn5PA45vb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mt69eDNDZTRKF1dFMxZThyFJxcV4vYWH6fPvkbAmrUH7etncEEV5ebstVi8GkUQNDisAWgJ9nvnu8K35JNLkYL7",
  "key1": "2ehWZgA6BnNmE91rAYeNmwBRRTLhPgx7koboReW7QFz8BqCcFMjFfVLbDc3dSAnQAEBmMtjnHNGdKgEExRCET8jd",
  "key2": "2iydPhVXbFXXZSjq5L5AitZKa7f2JXhYibY3TUqmF2GjCnabfKUQcFLsR8qxxx7Fo3DEPbu9psqCvr5c4aitBPDg",
  "key3": "ydg1HgAaP996ztkmA31wuNCmyPK4Afsw5AYTLJhtqZWYWi15S4YyLs7h1DJFN2rBT7vsfYkpbsUfSCS6m4eVihA",
  "key4": "5sCrv41L5jCHyrr77XJAj3QmhEpXpr6Pi7fbyUpw2fuEiq9eVM7KdPxGbRx5k9kpvWgaRecrBsLG6GfrtoCgDwAA",
  "key5": "4A2KMhN4VxESRQ8vuyxRtAdWFrVvhno2xs3zbod519tRznttYWJnBMq3nxXwZCwDKUEagaBF7xZ1mkLpVCtpzDov",
  "key6": "13UH67Fagj7w9AVwJLfhRPdxgQWpM975UvM2E14FiUBZSFCS6tU3TJUREtN5KMRjnh1tpD72YzJ6c4DSq4zpDJf",
  "key7": "5hCs8mwfRwrWj1yrRk92Sg8FQaJ2983heieino9DCEydebuCdwkDazjYVwWfkpHviv8zjFYi9kpdXT57DJA1Umv",
  "key8": "2MAb9LbCumKQdjm5gJbJQ8pVEpUZjaauXUS6X57MmXnK59Efd1giCkN3dfdtJbrQYMTNe2xTtfd2gS12ddeUrBHv",
  "key9": "i3GruyHvGsKq9XT6mXkHDeffjPuiCDq3keMoGDReFusNgWRm3GS8PSgVFJkd7QVTTDK2ufQ9p2icx1DGgdSAaFb",
  "key10": "3vakKtyFRVaeGwZUaextRD383FXZdcjH5s6fVBRZyeZan13AoZi6Vhwqp8EMd2om8LGC5dSyKsoXwbYQBNoJwfyN",
  "key11": "gb7phQgP1GiBEbnyFmquUfwCVhcHG4mmpgwXaNhViThZYpSSf6Uw58NapwtGFpnUSu4HCjC7cSBkXHSmpUBrXQw",
  "key12": "2hmRqGAQDgk8RW6BUhDWM2DudN8USFuuiXCtftewqYfaF5B6mSEWkkGqcCSq3oKEvzqVmxWtsYfa5uD1bwE3kfR6",
  "key13": "2xpT9zH3XiPiPi7KUrPWVqtGfxXnUH2eFWLNZxhardeYt7tSvBNWVHZAPoxDwZZpygY7GA9VFJBFQPQE7W79AZJa",
  "key14": "5HbzRfk6rhCPejsfmYRUtgb7mFVQDsabAobMAQcm7gY3iKbXGnMPwNvonPCHeAU7133ycmnFxz6r9jAQbsX21WHV",
  "key15": "4V2NMujGbrKrrhW4X63otLtoNqj4huPmi4dNSS8AkrrY54jHpZE4GmEbV3cwFbEvQ8RaN4QKGL8tTD4xGu5uqKnD",
  "key16": "5cQh1TjqaNKJnUQw7ZoxRgp6YMSGvVn5cqUqxVouYZ3LTYedmpKknzwmEu9nAJFWURAGJpY7cAh9kczjjx5h7CxF",
  "key17": "3t4XUNX2oKo1AaJXk9E2LE9J4xs96DcZxzauffHB6dTQGG7SF2Vd74NnW8hGiZ8TfC7sPf1zSxvHiGmVHRPYJR7b",
  "key18": "3Brq2BYj1poujkJvFyUjnRBnz9GkmPHugM9qwicyE5qWoRLhWq7f3MxLN2umcG6WMXTWrijAEWcfLjBdhXEKnGrw",
  "key19": "4TkB8Yf7TEro4dmNzKG6GY4hPBeBm3dVsvGFeELcYQyMCiVsnHh5TapR4UaDz1C7vcyUjimMDGVAPc6SttxgktU8",
  "key20": "2b3k73C7weMv1F7UH4FH5658vvjaTU1tgPMQ1VPNMN3c6MGqpkxEXqLQqqUKmvYLQ6bXJzUVwVjg3Hdqs3XYXdpV",
  "key21": "1koz9kucG6mhDWoADtLJ4nr8H2cQU1ij3Xruy8LLgLEXhqcGgJB4jmYsEoMCH6AR9opAWW8jH4AgCifmbPbHoWW",
  "key22": "5tW6MkZUbgkEQ7F4tA5Ya24XgxcpETsWDCmsXfZcxjJpqY14hk76vHKAXnhFtvK6GNtbF1uyVTH8eU6XyTg2vY8G",
  "key23": "9fu1jSwqst1X2mzUF54aoKVcdHCc3U1k2i1jCn1ABRjrBaruaDFtb9271Qo825PtYEMHJ95pTMH6gmdkFUViiPh",
  "key24": "4ybeigrbvTvmjTczQ4CBWxfaxizEiuQE1DqKJQxWjQ53KNAPAA8pRqTkGaP1YHoq5FMTjCVaNEWq3R6KDAkXBeFP",
  "key25": "sj95qry2LyDgCmp8pm1rLPigsxMP3QQwWw28VWxuquz45UpAepcSCzXCeSochtmNU4T7ZNvkfpVx7g3NrSvxR13",
  "key26": "4hurKvWiZVd8YK67fnXmgb7BgvVNhz2FusuzbSuk71Xm8hX1E13UgyBLnFiy3CZ68fhbJRqSjw7Gdna7L9qxifnH",
  "key27": "56SfnpLxr2rF3uhwuQMTNFSuwrzEnfUvZs9tDwfLqX47vuYVerEoYYrZmp39xouP7QPzoyjc3vDK9juA9cZVJaRU",
  "key28": "3UgZjU2RmQHNV5A9sm5NXgu3bZKweEKKWNARbCrbfGuThJEBJMxq5fqQwRnsdHcFM9euBDYpRMNtWuowiMMk4c1A",
  "key29": "4GLfEufrEDVwccLeaud5ZErz1LzHNMqrUogApY7VvPmpE2Aw3by5rDhoKaZgNkK3f2v3iSrWGMtnEKGAwoXY4Ase",
  "key30": "3tMGKsYrKAv4HEiSsBh9huVwZVHLwkm7ZkgZgzLeeEuVKkrJuF8Eg1VL4cL7gPhw4xmpMiyPr3oySJhV5rrxCXYp",
  "key31": "3Rck5BqdX3fUVcMTv9JbcFw9QfX16JFdS9EbzVhVk4ceDND97VGHAacdg9hS6RfdCp3QouSbfeSrSNsB5RcrUMAm",
  "key32": "2hS4mJdqPXXBur4xkrthV3bnDc3vuZisEWX5oBrFtzTHyLDX9SPWFg822vCM5X9vvKVBmoZuRjgkQbcniSeijRrh",
  "key33": "tg4gDTLd8iQ3smc3Z21v3jDjhkfKh9iVWHgXZ5jFSU5roBGcUmbCBxmWBbHN722HrDc9PFZ8c9Bx4TLsTzxthEe",
  "key34": "qLRa1b8gzD8nQmiF1qzpgqXTf2vFPGDHk7ms4P9R336i6cyNKfpSnJizMcJY7iTijhzZWF22SC4JtvfzPu1zF4V"
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
