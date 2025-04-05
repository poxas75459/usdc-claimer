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
    "jSHrDpqdofFD1JvgYRs4WT3UsoVqLbGgbjjvLxGnVmCVxs3Zr992ohryD1jnuULyr5wcWShCBsBMmGDzcD3xgUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LMqx2jf5tbc8nkwkGVGDcEMhSBtQN23qpkMobFnUm2bFQ1N8UN8GDesy4418TNVtdmxLQTp6Tss5J3uaRar3sSU",
  "key1": "x4uBVqBX2bPALFNU8bQD6Fi3CvpR8q9qQFKLgvZG7dXoopQoPjZNuxwim6FGNfQhbPasgnPcuMuNhNDRQwCyb77",
  "key2": "416vBqCQt1CTfRLr3T7Bv77HXiG5thbxso7cPJFx9GLToLK2Aw7X2RhFSpjiWkg8kqmqP4SyPkugjdF7dGmJw5vk",
  "key3": "pzFLod2NmFnhBTzYnJag2urWxQCkXr8HcZxdjxaA9ApSqHiXyhGxykmALTbWLMSReaGEJDQeDGQo7a6BbZdLJdp",
  "key4": "5hsvuBmrV7ZaYVyFrT6BCwQoQ99cSY1VtbzkLU9ciEDB46aY2aJJtHCLYa7LFR7antnsWyZQWcerz9ezsJi1Lb9i",
  "key5": "5E9JLEd1jHgxbzi7gebd1ZNT13SvS8M9rmp9Wcknz2FYheAmbxjCZ5ufCeHptCbtams4zyVrk9eLnzbhctM7TZJZ",
  "key6": "5jSP6PZmzCH3rKo4S3PSJJ7Q8EgnSVfLpwy1kfPN8VoJmE9J2owjaAakPe9rhc6Jysq2v6znvm2GVJowMxVBZdGt",
  "key7": "4e3tBbaNW4XTnnKh7nJs5hb6Qp6WSiscCebLG4LWnqh9zKgSn5jWzxKvXrZSrAxZPr79p2a88xiBQ8bbxd3Fbw7d",
  "key8": "2w8CbitPwcQnU1AJTmjEM2ueGGCZUef7KqUTDNVoQaje159MCHo2BupSibedrDpytgSFuH5w3X15XwkxDPK7Fs7A",
  "key9": "44h3hq3BKWn4vUBNcszXYJY4TPGrCKjFetsB3KxbTsc78NRGyMwDRHoBdvSFxApQJQc9eZ7ULxzjAeSDuaomGTyF",
  "key10": "2pJaNzZNouusoBjygka7SKSeL4V3Ga73uPB1XpnSdbbGPTrxRwpMv4pgpsLsk2Qs1rTi3tL85nBNjEB5zbX9ZnDq",
  "key11": "4cJ8n33oVvQ81bTapZUfS4fHorhvm6sU8c5g7h786Z5s5SgStjnykBuJTqnZKcUDPCeQWtmJTvRyg3hgpBCyikNq",
  "key12": "3wYY6LtpFS2ZiRpeotzs8oRENhH7jCy2hpxdhBhusY7KRaVKwxWj7CrJhNKWBdmfyuBLJGGN8jdTcsh7eX2jUURD",
  "key13": "3arYeAkoV7aAQJvzdR4PwFg34iQ5xAp4trG7JPFrv2Dn6eXLkVmrSLJp8wdiGGxtm8iHamCG1qQG3F7qHuTDwoJJ",
  "key14": "64m67JHPw5fHtXGiqaP5WxLGoVhAHS4TEoam12u8FSRMYmEdLQ7vLSb1Bhe1vsNZQkj4cqzaUcK3Yv5WFeP89ngt",
  "key15": "atcygeYDMFCzYGrLti9dRngmZ5cjyBUwGbcimjgiVRBgSg5zSMRX5FQ22TVzJPmPBSeeAJGL1zM9qcT5qT4uhhM",
  "key16": "3iu2U57P2mHH3XgReuy9SaBRqWAz5yUHcmNXXcLYUU7SkCG3fDgH7HpGe6mQzs5KytDw9Rj3rp3SGHGcHnBjKVyJ",
  "key17": "v5jpVg3bsi2atCqmHbkQYhVMXweXeVP9P8Uh3jsYjoqefkAKvsPEXu87LvFuVNVHUMYnNsob6KqkNwKsKamYS4N",
  "key18": "2a2BKrxdvLGTgDCHskbibGozaQtAym99uG8TGZEFDNRBbYRuTSD22YcAWjqGhMXWrgp5dEHXXgniKA4afcg9MeCT",
  "key19": "61G68CjpXM44Noewr2J2K7GdQDV353J23EFVF7APusiZcD49EbrsXpYQWn5zJ4dSgyxEnJjtZ9cmTVwhGnWwvE9L",
  "key20": "dTkhFHkbBQCEmt3USueT9HQRM86D6LK1jwj9RbhS18Fh9mzb8FJE8biXHuBSGAKrCtqh1MdbueV7fh64kyBQtCd",
  "key21": "8KXzu49RiusCvdaCw6uJtQfnwBZk8u5RnUTo7fNXSMcVj8Eustxa6dHEEAfu5umr2XfLziWTZvM4zrGR1yTTACn",
  "key22": "4kFPpQ961QJGM35nwSw1dGFu4bFroDxK9eTqWDH7qgBfrMSY9vr2VJHEzS8rd3iY6rVrT7Et98aXL29aWDc4XW9",
  "key23": "3YfjUMQJusVZBmLsRmdgupdWDi8fb652yxBTbZdiFA7kVrq6FyF31WpSK4udNx3uN5bpNG97HpBaAjHtZz9YsSVH",
  "key24": "8VYTz4TJ7dQaoCf7HLvoLWsuvrrAVJewAckdsgTg7zYZ2zeEdrTtgoo7Sdxam2iZdkbtGcVVuNb3U9L69asPbUN",
  "key25": "5tFbzsyDn9tJmtRyEYj9cDKeRpyowRvkBmX2z97nfW6RoTYWUt41FLxy2wfuqXV8xS3NMEJuN4eKKmjsM37YAut2",
  "key26": "2J9jJQvKQTkTLAYSkkvRww4KX51aK4vjoA5ZhTDMxLzirxsVmc3fJntnAYaW5Qb2imM4CLV5T1QApTMpTV6YExK5",
  "key27": "46QsMvH1zcZ9LR1P274eE4pM1A931odAhrXqpKYBBNfKDLi1V37AXtfeLyE9oGe2QqTQXAwB8Y5DXVPHsWnR5dD5",
  "key28": "4wkmoZEDW2NNGDn92KDTRXA1AiP4B4qXBR6Arena5hmMkNa2weRQJRkGxFqE5PZ4a7FSHe3UZxX3XWXNonArA4L4",
  "key29": "5reQut7vmNV9LecpKzK4GawY3WkkBvZ9U4MMn1LJeyTJJNSGAj59Foq5LfKLXT6tnTwrUC8FhmhS7DzfHp9qWf2c"
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
