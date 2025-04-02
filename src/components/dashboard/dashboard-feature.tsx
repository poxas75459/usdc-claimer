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
    "2j4GT4ekUvdrAVTMkeunUqcLjHZeaWWnZyfmt9G37eGin854xDjEhwzzxfQLvFg9JKynCTMK9TsMB8GewWuBL831"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "usS9xxMEkzzJGFRWZVtbkVCUgrs8Yitv8Yvw81gv5pRetysuFsFvxw6gujomx6QTG2RjXx7YUmr6TZXkRtSmtyS",
  "key1": "3yrcxhgKC2t7jGPkptpfLMDnSjYiRFcWF17qwzPMpBJSSMGGfps5YNnUBCWgZkBx7dVrcBpLqv472rPWDtfn6hdL",
  "key2": "3VXfeRgoy7EzJKpMS3iYvGGGixwBHhBHgAFJx4Axr3kxgF8keLaiWNPrkGF82mEeJVE8qEQ9LJV1EWqNJMzkUj63",
  "key3": "4VzNS9V9fq4t8aEaNheTUkkwFKWyeQXPuiNvr8aJEcRqeg196MwZ9VNpX82dKrKKYMxkTj8q3sTMD1ibdzGc298U",
  "key4": "4E2U8GU66GPopYXPuX9AyFgDLrtQzvyZyLDTAQ6Yr1Y1mCdAHpGi334NAFfVe2ChDisia9vj4KBCEmKobUvvRV1q",
  "key5": "2nqze9T3e91BTXUxGy8JiZRzwCS1RDdWUjvCGEMMACC9Zn89HHg9K4DnFuAkwyZf6pvWHSrKmBaC1mnKpd4MkD4E",
  "key6": "3g5B6nTDzwvvADd5XbGm6y2zGsNBgWdjmwxtcm5mXJDVLSqXUD8sGuko249p7QXeRidz6MKDHoLX3CNEfNj2QDSK",
  "key7": "5NXMEoZWAhupxG8RpTh8RjyBaqZMDK62tvF5VBBzTz9UrYs4fGTb4wTeoSkRk5xEcmcyhnZRkftZLscvLGDLXYM9",
  "key8": "4gUDNA8zCgbqEgQRCqRRwqRnm1fT5V5qtSCusLQq4KBQ1tS4CWvEYYCirLwMJhETg6FL2VmHCA2xyuBrPHVdP9Ju",
  "key9": "AwkAp5ueWtrL7156G9Dmmgaof9MVsmUquWfdXCFeS3qgwoeQPtTf92vQFzz6BgQ1im4QPuY11qe7ZNrnup34Dru",
  "key10": "4cYjCmCadcveDpjhnQzNNk3XggX5h1nxRXw6hYdvoXfm7QtzmKoNLUgSgnj1AzkkA3uf5f7qjv69A44FKeg3FghQ",
  "key11": "2YXX82Sq5zCwLMMWCKMbHssV8BpDzJ2Vor1M6GPNRWzE5BYGiAg3ggZ9T2wrwoC1J1J5QmFkK6QwK7c1UCFdnKym",
  "key12": "63nRe4X3LedhAwaK6zwDyaFYoiQFSfEpYyTZWLSLxtTWU7xRDQnDP5nL1fajhNVY6cGgFBd4KRSFrBH2uuhNWVu5",
  "key13": "rKQK9BvHKa4tBFYneo5HvUYT5Cx61wVDfBVk2HSnPxz18V9EyEzGwAfiEfVgctgsfisMWcXDY2PGN8smKUsDLuT",
  "key14": "rEFR6Y76aLnJpWriVJQixRDTe57HZvFGMxFgcJefyVZcqkWR89U3WEa1AUHnA3K5njiH5m5VQ4ttVsCSMPmiCS7",
  "key15": "5rpHKPABVjWna1vFmTzkSAB3ukVw6Tz9ihLs2eYasXo13Yn3fYRGZ9anUfTvmdMmJwyihWomj2WQ4qwLoSVYLoWs",
  "key16": "58mKENkXbrB52zTJkoMP3261kSVMUumqPi4rjfxYEhyu5FKxQhwzc7P9mYZ3e4PZNgo8HeE9yG9qUNzSejX5Tu55",
  "key17": "2yJ7D3MMVVPPbvik2eeQJYRQTm9dNSXaexMHc5RGZ6c3tcZUx4SQgrh7B2rRsarZu2mMv2dkuidC6pQnssaPrPus",
  "key18": "62sZ4mXW242D9b1BUA7BvCcKsQ9HV6sdmoPdUMKBAm3k7UVhMYB96Z7U6BdxZq5MNHJm2LiSARwXZ1oATec3rvzr",
  "key19": "21KcnfDDUfyjcdDjUAaYwmhbujdmGXP2SJLd7Awm9TRG6NnJWjDbNZZ7KUd19fHWq9CZ8sAFxwCku99Zv5WvS4ZD",
  "key20": "2cpnGt8X1CQcFAEtqmGsqLMDWut9YzWfseCM24s6NsPpL748B7mPNfqikmhCkUfdjfY5Zn8W2SNfc68N3aJqN8dz",
  "key21": "5PpbHkVwTRDhiw5ScY9of1Snhnkv2gh8D2D96r1Z6Byo5g56GacCGX9RoE9j97639un2WS2SMQ3uzL1sVWkrMxPh",
  "key22": "3CYVDMVGK6wWaMtsvchr6cJcjiLmw8Rw9RNN7hUx4daJrrrpYb7kHCiZqaGXnbrL4EU545qhzdi1yt6V6wxmNv67",
  "key23": "5nrwnoH2AmHWEmXsZqp5QJdnNdugwZYaK72RDSqQCNWzcC7dLDnu3msV36iv2Tn1tFhvNFTMATnoZ3xKD3vPwqrZ",
  "key24": "2rKrEtcG5WsiuWYCxExCJf7nH7FjxAAKttuc2AN5QW3DTYTcW9jE2mJhzR5WFbsdnTvBqzdrxFXcNmaJbuRxtpJV",
  "key25": "4hMNNfCKt2MnWi8eu87jWJmbGWr45mLiYFttcRbu5n3maN9f1GXor9qeNyKK79swiLJxh4ZxozUzmS9Dzvy7Ld3H",
  "key26": "5zCE6KrF8XzMZBYt7DiuFX7kdAXqqbemEouBpufgC9CzQyn98wPauTtkFYVjddxKT79iQbhcC1XUbCHaZmCKGg5Z",
  "key27": "5V9FpC4uMkwguxwQQSPKeffuPeooEtZNy3zwXvGTwseVxVX22SoLgLa2h7jPa5ym4P6AHRVxPHebcCLPS3REGi1q",
  "key28": "5gKVHr8joiwYGWKhen8NoDAwBRRAFAfwAd46a2WJKgUGYWjCSxwPsnTfethhMfDJf3m7c8ax8VMgYPBDBbf9nksb",
  "key29": "66Fk1Xoe1ZVrZqRKtkUh6WZVshmxkF8cKmi2pym88goU2sZsaW9znto14N1wWPghpkE3FdrRynUob9R9R2WVz3hr",
  "key30": "ifEZsfa9LRnYJWawFLHsejXSoSzrfbetN6AnzKbrBsmuKfu3L5xt4XXZyft7ungBwxZY4HKicHZegPRzUuYBX6T",
  "key31": "itN7nLxTFacA86WnDwAbTnLd8X5fdnYQ8JMTQNUnHM9KTwgfb2Mkpytno2XT7AjkiysmPLtfamtQUQF2iiyHUnm",
  "key32": "jarUm3YPfF3ADb7bTrT8rHzJQ4juPWHdKmpwstnLnfR868HcwLpNhTjHZehxR5YRDUCe8TbbwFE6WcZjZs7whwF",
  "key33": "4QMguUJfbJJgRi45VgZH99HMw1xDq7L9UrGdBKdL28Bct5HwmcCng1tyaBhZ3mntegBzUsVgKbmN5eEM2AEXPyry",
  "key34": "2zvVcwFpjJe9Z5SpyZoTRfZBBwwTUJBQRMS5pr17ejRLFH8u2hhxYt88ETCMhTQ7VV2wxnvSr78cZdVCdNnjmJHX",
  "key35": "2Csk9LULu5MT9vMR3gh4ALSnmF4WbNhm9TYbkd35GiA9Ra6HLzRgLHSy3GXxL8dhSEUUgdxoXXNMvd8rQRBFafnL",
  "key36": "4trgswbn39hkQndBZcYaWrT3sTPSnJHDXBkJ4vUWBZmomFsbd7xEaHWwN4PQp978qG89Z4AyfuwhMJg4PuEUEXTw",
  "key37": "49CUrjsWpLpDprVmfJWQW52D2gHBSyqHumFFFFypEXmyMUKkQC9To7sEzDgk7Vzuo7HMQQLPhULirmPK7guwHfJ8",
  "key38": "5zFaHDYY4vSbqoFub2LXxh6EPRUyJzs76RBBsxNaLn3pi14Jw4pciRpyZg2GQQAS99hPY9hAxRL3iSC9LzD292oM",
  "key39": "3jqW8t5HCZ5VtEbNBEMhV1KyzDGBsvcPR3TSSEmimxk33QVpSBtGnGcEQDBLW7eyWQ1qLsSx5xrEZLHYt3Vdhtu",
  "key40": "541vobrf4mDDi1AeXDze2SXEMUc4gGDgBHzVGkh3q26ztreaX65pUMVAG4o8g1WQi7ft37nviCSwrQjtWuDgGejz",
  "key41": "5DBjwbRrviYeJEAqcvrJRKFLyj16crjzRZK3LXs6cypRc6G53Ad1yAtVveGSLYEboAHPpmNZuputAvrFUiBXa1dR",
  "key42": "4yZfUYcjrCvrwmU5dsPhdkt6V9yjmoeeW8gMdA7Z53W6wMHnWbrLZnNaaGj4gK3AEX3DdeFkEmUtZ6RR1sHyFbAA",
  "key43": "5pUkzcnUKHZb9RRbMidegzQ9QXmjZU4gtv9KupytthWLpHn3CEtMht4S8CbytAhBe6tJvXMNMp3AdFf8ZxkzND3H",
  "key44": "4pVpXPyvre4JZd3MP6bLxKfkqRzDuJNTBg6YiX792xjjmUe237ZbgGemZhPpq7oqchY7sUq4dvRvRwdDnutpmENJ",
  "key45": "2ZPxxiozmNjyd8vuhUr73o4EiHYD7Po9D2yFCoYPvvQZPPJwwxN5pqkVw25wtAVJdpckbn2yq5iAGGsqGaTVvnDM"
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
