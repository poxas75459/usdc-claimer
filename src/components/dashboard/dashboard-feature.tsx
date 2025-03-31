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
    "2AfxYv2ivgCZrFqdu119D7CKRnGNj9A6PdhyeqdrrezAB1F3GYJbgh9FbdLDvXpZdkLrtstT8zhNVLKVK4FXFzkX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HYbQ9AAEZNN9ZrN5gHhtxpaAkciPVoa54sr7HbWAegZqVys5GXRp9MJauLVFw5Y6vAcJ8LK38b2kFVpdwVJwWkd",
  "key1": "4WSER4HwBYyF3ftJgMg4M4yZmuDTXemJ9YMCrVPaZQkQ9qNUGx4hSxRt1ZV1bWeaesUFG2JZs6quYgrJGc2UcCS6",
  "key2": "3vr5Sho8BFA9v2Z3pQP2Ycd38yGxkvLuyN9CgwnciPKHSN8CC8Wy94ANJx45UnPHcnEcENNwa2WaarZw1iL9vnxK",
  "key3": "5VLNc6B3DNZWuMgzUjJo8V8G8MbErWJ8Efka7dMvvfETLvQ4NCmrfaRzxQFWG6tpisRSkBhq5GZ1yK9dTMjk86Mv",
  "key4": "4TVyhWFRuHUuCA2pVQPVPjDFGe9FMRWpZS9pDYkaxvYCxrRNwqeemeJRmVxnvqHepdmVNkV1cT7nEDY1pAECkga3",
  "key5": "zeyCdyacHTQrZNCTb5BUg9bQg4jsq21p4PfUhVZLVgNT7FQAMG3Ucii2YNXgL5EEmmqUS3B2aUVY1PQTAUKQ23L",
  "key6": "3cwhXphNXny9BtLDHiLDHZxjC6wVbYx669b55CL41ko9HH6cgBGvGpwN1cuUTEcyQFJZrBtuYQnLvaN2hXN8noaJ",
  "key7": "3YyyGFLPFWLtWkxuzppufHH6DktKFsvgS4n2Honm5tujSRgA5DWGdFPE6jSSYS21ekVJsLFiuMoMVZuPkPBqFrJ1",
  "key8": "5eZ21UsGCAz2UBUTGP7i2daQ3hTZjxuR8C5HC34wpHiqkzg1CFyvDn1Rf3FQQbtz1UXrFgaya1ZJsNTE5jxouKvn",
  "key9": "6P1EW7scYbhHXHwxqzktoy7fsimrtiQdXJee26opV7Y4BwUjvEAjrcZQ94XpHWeXpi6AAjXzZRvGbs1bkvBGTyo",
  "key10": "2D8rihZTJuyNPg3cM3C6NjLjBzQenieHi9rYRujdVf8R11EdAy81huDFfgNWpQZVsDZQ8JkNzbKjTJ8BBywp6x5Z",
  "key11": "3598UNENSn4kPfu4Lxm57T2hnLmzdtyMRGi98ndnsKkv9b5EtV8kJNzDa3euSYXqMy2mTdXJTN5jFpbErpqDxrrj",
  "key12": "5WKwuZtwM2gnj1HmvWcsLPbHVaNLbBV4iiBBjBS8oJu54QKjJikG3bVa5imwJE9gEcMnFezxgc3GE1m8B4qGuPSx",
  "key13": "3jfcJg9VVW8AjxF36mQXqU2tUR4r8Zr8LyPmrzC2xyWUh87bE544dq98z8wp7NwXGFjxZx2uPFRs9ybkjiSL57x4",
  "key14": "XJovsrSUwDK6m9Nk4Tj94DVr2E33k8b5JBFehGj4FYDxtmFqwAunZWyQUVmLjU2ZW4i1NfzmHbdk442igSM4aj4",
  "key15": "4mZ8cZShRvQcfDo59zxgcyHVgkMgtmQtLLGrmzi2cauWr8rS29LePaXcrPk4cYsfLznhrs8s9bPTWi4xpejjcioJ",
  "key16": "2R3fJDDegLe7BcToKK424nTycdH4NB6JBQrN2ZFcu8YXuQ627isYGzpChkxmYVUadkvfYH5MjK9JC7seRvXtriEJ",
  "key17": "57uhJCe4vofFc2GBtjJ9TovGhNN2gmbcdPwkM41BMjnjymEnu4WQkb8LAFF5HQzzw9n27yz5j9oB8F95Vyxsb7mP",
  "key18": "48EPC6FnnLTg7huAru3LnNByYenbi9WG5UVqnTRTa8tJLLB4sq73t9XM78uyn7vgAQZquNFhDnpnATShW3QnUDEE",
  "key19": "2pEWYy39UsNvCgRdvcGToLJkZsKKe7jXffT34en76CRPbP8c1CfiAUniHWxAP54a3JRuRs1cHVRDacQLFyhC2mfe",
  "key20": "wvKTeJ9Fefmt9FuGwmzCeK3gAhztjW535SBEdLyXthLMPgBRn9Uj7fmzUz3VyEyiw7JahsxqYTteRoYwAxwQew5",
  "key21": "34RyZw5c1oCgyeJkKM2mYc66SXhY9kz5qWPwpEAkiSBdgJ7U1u4vsFqrBwgQbWx71ai9qy9deqpmj75krr2PLGcZ",
  "key22": "34YJwWE4KL5sEAZxePCM7fyNRPfpuefJwZKREDZLdgWuRe6fMVM73AKgw37crZiiqCHRNcoKY32GjKfdEwnkLrvg",
  "key23": "4pmreSGLwFt9QWQU1TiXezH9uakMPLmHgJ6yuBtWRErbxvMwYYSEXDPc89HkXghnyBdBNAFV5b3YMDpdZY78mQKY",
  "key24": "2nzQgS3XGHPFBxsjpATn8H9Yb4zrjtY4gPrtKK6MyT48G7aW91nLLgyCscY2tRRgwtisbYRCeNae9bVDutMwy4e4",
  "key25": "5fUvRkK3inLVsgg2MmSNfUS8JE1682b7wwHkkoQBGEt4XBWd2QNgqJeDib4kupLXWoNhw8jcFB5ZDuxRFgQDDXtR",
  "key26": "3ohLpvNajSmdsHSkK4sLuMtHkZw6UJBfwSAKPh4QfDELGLTbE2c5ryJM14NR3PFf2zGrSdEniTqfg5W6mYZbNrd9",
  "key27": "2iCzZKVAzACbK4x5QwHKuXCws1vW7dyqfbP6Y178G37hY9kRWJMX1TXLgLHinCrSGdSRpDy6heqqpSae3jDtmVNk",
  "key28": "YodHwCmscxWEZgsX8haua34m8CU2LjZUkdGTxZDnfrpaS455Pscte7g2HiXoFaApwH8wPwq6ioKZ27X7p4bgs45",
  "key29": "3jjZKQinJQcvH2vWT6MEJhw18wjBNSUh7S1buUkqHu4oow21gHe967tFMSGN5QQbKLMKpgsb2iQFjNBWsfDUEDik",
  "key30": "3iYr6tUdeWR6uk9dAuSqU4FUUXYHPp71K4Vd1MuZrvWNYGWqoFbDovEidhqC3WhKinwqw5D8A48UvuHqgbffador"
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
