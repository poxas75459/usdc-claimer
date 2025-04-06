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
    "4wVMqp6x7RFLRscTqschM2mQGnXH4a3vyGTMkSeQy9ACMxPVpDC3hszjj3rhDPGWL1bCdT4DxkZsyZmZX42ibvAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YKtc5RFuKoEmEPTx4eNVM9Q8eG48HhngL9j2DdNB2tEZ3uEntUAS6Nu1bM76Eve2y7zhdfdFbzvdqcTDpGh7rRp",
  "key1": "4TxvRuAebmoBd9YcabwDGWmdFt4oVAFpM9XycJuq2VBuCgE5Hpe12YKGsKujc7k7T9bQhAxGXP28zpvFfihoJfPN",
  "key2": "2jkgUAkJDHxA8aE4HEF2uTQVJChwo616ppdKfXzHiqhYMpxD89xf2XdqwvweKNhBfHUdQXhihb2wm7EaP7Ej2Tbm",
  "key3": "5u3t3CwUnxB1PXcZFdx1wa9DKYyhCcY1rpMPN4uxRqyHqnsCvnoXtuAHcXAbUTPRWo2UEDGFZRTKfJ9qwVRmeRpU",
  "key4": "3vRs5Suv1gHhicZ4KgxdvPVpnwJVFpnZ1tTTUFPDWy9g1byAHJ5XJDVkRLCYF6NZ1JxfyQZV52E7d29eepsH2dCz",
  "key5": "VefficwgYmngSZGy9hgCCp77DuDwkRZh5YzByak1yD2vkRLxiUt7rutziNNbZ5AZsrQqtZPh17d6jZbPvW31QBb",
  "key6": "4XrhwigtTpV41vBwGo2hS6HWwqfu7qctKnsax6Ldju1owYKo5BLzMwRPjJsGWEYgpKHgKzLKpKQWhgFSkeEwmeet",
  "key7": "4UJwgutzzJmd9etddFN3kcHkGPCo87sG8mHcSQyBrP9XZKuWs6xmtHuP8o6dAL4uSEnyGQtgJGEE2nWGk2gKwTrR",
  "key8": "4czrndca6UTurMKfFvKYRvfAsJ844BaSe5Rk69cnbJFcUE51gsL1skskKTaW7RAtM9h5QC7EQKwB9VXP8XMkWrXV",
  "key9": "5epybe98zhh282Ro7VqC3U5kXn4cDtyHxZqzAstxXGvrBS5TQ7kbJpmkwXcYDHUaErnhwJjx8J6mKbeydjbFvvfM",
  "key10": "5ebV7M6e4gp4eZ5TnmgXsyHRRwFS6D4KvrVE5wr3hVDN2N51cfsVwwpbYsSJYfUDxHzDK1fqN82Ui7Pf98HenuAW",
  "key11": "4QcmUyvjpQzcYg2Xw5ybNPpjVQt6QtYcuVfj4yYd6bQw3V1XsXEW1QoJB1UrWCDLDbdFxZxfVCZWogxCmKFnSqhN",
  "key12": "iCT9nWj3a9JQJZ28ZJYsPhmGCN7wrxU1nRyKA2SBKjNgAVEGjTMMNCZs8kur5M73Jv2Jez5FEoKxYDPz4MwDEAn",
  "key13": "3yTTe1VdAndqy2DTQjqHajdXZQun2wHaiPDHSjiCJGHJeUB3DSkQf63G3s6rUXaG8iSt6TiTFZh5E66uqS1DP9yt",
  "key14": "5YN1nRztP5mZ1fB6k6B4Ghd1ajG8ApzuCmPRJJt6yYTnGv8Rp7hd9uvENPkaWGT7dFq66up4qctyc5n5DhoBDrRV",
  "key15": "4KMj4eBBJK3XTXjjEbutqSBx2ZcQaYCzxs6QvnbgKPA69BgTBxh3ryhbaZGTV9B9GoQjnAFM5mmQF97tfiaXiC2y",
  "key16": "2ZzNWPtZhcxwcsj1J22zAYgaVQAQAdTGJZWyaQu5Vh1YDacXpWgnr7YNgkAXSEHWhXD27DArtSbNm351rXDKFTvq",
  "key17": "448GDXNCgqCJZUCJw8HULiiqTV2Mrphte1GBgoGwXU2moRST5aytzvC2EqXiJRwY1Z6hiaL3GeitwUSSSjUij6aY",
  "key18": "4BQtgomL78eBSAtwW5gVXgGPN3qPSCiJbxWm3KUqYXU1weDMTWfDjHoo1oR9BgJtffbVFZQUxg5bBSehWyuv9kQm",
  "key19": "417f7vnSdYetk8pBFoeybEWjqnnJQNmjKq8Zs6yH88f1gHyGP6uEppTo8wGWhvJ3REkMuLJBp8b5McHNcuAS9FcP",
  "key20": "3dpibA9kddFDqfzKboRFLKRdLvukmeYzMvCgQuPvv19MRbmutgFaL3Jbr6Bgcm2TMXfTo7nXHKkjjWCr2ti7zVaN",
  "key21": "3Sp3nqP1sDFiQxm5p7pbTotphcL1toPw9RvoLLGxcf2AYu5ephdSZGY6ky2ssWRhRJE2Gs5ScGfHsTX8jbihn4is",
  "key22": "5LrxpwXRbYPAbQaW7NmNhcTqQWNcfPa8KmxtJVYjjYnihDx17Ra1Ds352hH89VYRmbGN341zoQ6L6hrK9NjT1wju",
  "key23": "RGNnpRVDzGvZHp2YUnW7pZxipq8xmnFzKcRzGPt4EGXs2iKv5ZdyNTEXc3eoYSYbnzu1yc6cU3BmiLbLpVjkmfB",
  "key24": "24UUXwm79M6Tzqy6Wtb2BcFcfcdJwJfk1YjXFpFpPDuRQepUCMtS1bYEZb3KUj3dDR1DDLqTBBUe5yqnJWeHfsgL",
  "key25": "4MYNgGjC4fpmUuMVw2ybWAtukfj8nMhstigs12JAKS1XwghAejQBkFFkfkk9URFqB7pWFLFYk85SAchnmwBYKQUy",
  "key26": "kzxgATKk7cjkWMDWtMyqT3xynF45pYq35cfZkLCHue6b5vCXN7AXX665XaBnJhaDNybQcNUhH2Mw4kF9dzFFWk6",
  "key27": "22GswywkxzTaorHfvN4UeSa6RA4HNtpgfY3mGwHMM2DBeaEHaVBaD4kqC63YtK1qHT7Jk2bHC9vS3eqXwuz8rqjd",
  "key28": "4xZcCGHMVgf34JuKJbQtvLoJy7zHqY3oK5eSTUJW4ND5H5pFrs8kevhLHQUHKzyYjvWv6Gk1BKdBfhD7cRZr11qy",
  "key29": "5G11e3haint3JH2jcUhLsHyz9odhscPqT9MTL8LDECeiioeDQtAozoA34EiZWS4aA5HqrKcgZUAYLSMC7pBkr5cY",
  "key30": "2XwHvAro8ri3p29YT7bMYm1skiAgV2xWe2HiYRRyotpKgLgbyMfU2bhWyRBUJqqGri8NnssiyTLCBmfpLShMSWt6",
  "key31": "5iJq1eaRf9dKNztfjYraJZgc8tvPtrut5dXmZRpdLo2RcQV1XXbD79qPvdjzUBKpoJFu4Ri1mMiyMz4EdMmYZbEC",
  "key32": "5mgejcLmroeHHrDB7N6iCa1YAHhsnWED46TfumpPbgHSqxUAcfHTFv6UiojstxiTzhaF95ZX3QZZjKuLANUKWRJK",
  "key33": "2Zikgyi5GftBjgqJzoVQdEwJnmCSWQk5b7iLxjt2SuAeReRCp16JzXYb65e4uCMttDVb7XBppWQ7zQK3MFRA3Ds7",
  "key34": "5ua7GH6tcsMSDip4sHZEBm5tsX7HcbwBREUW32ovtD6nFAa2vc4siPE2RF5LsNZPHqAXuHATvpK44Z683vQ9KG83",
  "key35": "47UAwD8tQJ8C8juuESCwjwNoZozEQgWXBkyc6oCikdrxc4Ym9RHCZJfBsfqM4YVazj9roHQVsi8ifR86MfaGGh3y",
  "key36": "2pV2jxhwYDqhAyRdVFNoiGgF7EDPVatxQDVJDHPDMuaohkt7cMYhfKx1qr5KkrE1DDzTD9Uf88mweniJ7WCtMEhj",
  "key37": "3rhnf9xmQsFM5vzYn7PjFeEXmQ2Xqgos9zn1eiUf5WbVUZjXDpTnSKD3nVRNTqusemXUiVGm5Lk2G788iE9WbXqM",
  "key38": "3z3NNZ62yj1ratiCe5pPczHFR4Zdheu1iqzWs1s6zKTNZ4ZcK9YvPaxRMjhpp2cHYeQYS9NmHYWzajvaKXNf1oXp",
  "key39": "343ojbMxM6p5GmWCB78jikZcvBj2hNae7Xa4P6za9rbvZfCBx7BZiRsdGJF295zYkKgRxtVNpN7RtbCjKEwjF8EX",
  "key40": "5YY6LsxCygnmZJoVVBKs9xWWctwxFLe6pwZar5MHiApV3ptfDko7iHJgRfLopWA3WztXyrNG6aTdiQHm6ugZTRNz",
  "key41": "2mXMZFEqs4XAxd7EnUtTJsnMbpkF4tGAYWRRim84ey91hCZbqaerBfPZPyL9VksmtzCw6Mp2YHNPYhrpd52tSpLm",
  "key42": "2RAwpL1Yk67iQJv7iy5LQHdt9i6FjxLBE82zzhtDbdU1vBaqsd4ED1vo5kjiFJPe8w1DyDXSd6MFrZS6JK1Up2my"
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
