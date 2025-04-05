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
    "2JDjmAFVMwDeNkzvRFaNCaeqNboDZWWE6qZjPQjfuDjMUDADW9CjsLDvYTiuTDECLQaxBXyKRoqK1KHy8xZZftR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UFCwew911wKrrNSkHpGNznoHYoWXS21NJfcPhhWqE8WrPR7AXwFoMy4yTD9JGQRpTqecje8NTdPC8YgDoCRB22o",
  "key1": "4Erpw4Fwc51LVZW7UeFXRoxsjd5DA8qNGyfR1XcDLJSauiZMkDTa9c88MqrxffE4TtsoVwkPVHs86QAVQG1GiGWW",
  "key2": "qnT3E48DTubwn6JzzNbTwsf9AXg8SpSKu8Zzo6SNVpTzQZEGyHV69Fp8wDChWcABWNX64CNqJM5jjF7s9yAppPy",
  "key3": "55vrw7A1fwxxyaUUQQUyNdBR3izXTJTdXiHv7YaBjTzxnJup525Jhqdy5weg3SwL1wWZiz7oaGMPQrWsAkz9qtgS",
  "key4": "48A7cn3PtBMMML28VqZLTZffSxPoFwjniB4EKPhcyoUCUyb46U6Xjd3p5kbTZ1fwvGC9UwbWRZwqGhKTeCm4La4k",
  "key5": "5R2xLWFeoaTGi2Gth7qTVTXtBVZFC1qQsHi7nTmXwGDCH7ByjtJi6kiq46MtmcpnWp1b2RRupUGa8XHSw3KbeMkT",
  "key6": "5ZFTLsuxQUECNNwX48VxYwHfP8pMqs4GbETqEXvPKAqcZUV8rbLjk9BF13fWQMHVkrKVEWjMwhMpcR5AmSmEmZKf",
  "key7": "Nspk6B5vUxDi1PbjAGDN5hAjtgR5cxfSg7KbrLH3ZQgsaZGeEibb4ePhsPcmo71KDaC2D1Cm4c5Zq6f7fnc9V17",
  "key8": "5eWMxzQ9kfN93UcvsN3P3M49qJHgweQxMpi4rU8765LFcxuysQJ29RmSk6JVr6putSMVCXJpfzENcjuU4KXutjPw",
  "key9": "F3ZWnG5PAtooocJvqeVgqV3B8HWWAKwUHAUrAhnkgigsk8A3bE7iTAEJiRnRSAXuQuHRUtsJv7SctPqHbDmMzdk",
  "key10": "RiJDoVLcSbHX76Akr4kFShdSH37dNPZa1EvVXaDbRPQk3dnRKdHrR7rBbXZaqMcmKnDat4ZRCBmQo8v2hoaWaBA",
  "key11": "1wTGP2BWoiSmrKhHP9qundEbjSAX33MeDhJfqM73qeANdF4GHdBzLNJ19XGczAEVDt71o5j35Gc7rBvUMAHM9fj",
  "key12": "2rPYCGADyXWr2KvKYhuCt4mqA3DxwSznc1e2fFGGa5rcCC4JQN43AyusDa7W6H38moPripGDKeAFQQCtoCjLpv65",
  "key13": "62nX5iTAd9FrzQ75dh2LAChPLmmr5NsWncvvWLUf4iMNhihEcwpVHASQdekx4hTFNJwDUyfibtTvWG1DkU8agyaf",
  "key14": "3SLXs66unTDHTFCyTaUysvrVacpWnka1xBiuZuCZDfunJewtn5haUpyzVscNpsotHMBadd7mmxAg4e6if1fDqhDk",
  "key15": "4KY1FaJBwfG6PYzs2UrVDSLAbgm5WVnyDK6MoHKG7SR2Dq2LKprLvb1b43rLkDjEDje3ZMyv2b7wGWrdtKfNeEDe",
  "key16": "4eBBLPxcLMXjN6M1nTBszoTdAeiZSrTwHLFfGbfDTFrgxrd8CDEmJrDjHTFLQj67Tmzyd8rTcPVh6PkKwuTLrP8",
  "key17": "31Apggv773gbxfML9ENES5nn3LeGAkKWBpjmAzFqGpY2Qpn6syTuRYnXCMEsNWe6KAovdGehQJjNMioyYL3RfCzr",
  "key18": "4Jiv6oRtWcPNh9vFYBeAnfvYmBtPbP5mg6BzCeQw8wnNgscyCpTchQy1EbBrKruVDxxeXYzb5p1fjemQwRwchC64",
  "key19": "2oRxt8WeSfed1NUuiCcp81beNQMAFUrcBA8FAPR3zVxGQrCsM5HxY2eFuVGinMNJc5i4ydo2W7orksh3RmS5fota",
  "key20": "QF6Z66TCdsvwz1K26p6qRLpqq27qftMerBzxkpNwzJrpnLJwoQ4WsjsY5hvZxA4t9mVC9fHiEnq7mWdXC4nShBW",
  "key21": "2adppGKmKCBs9EQBo6Vwh7Xnx9PUumnQUigfrdtfVaaStnUQzUuZN9EKMkvKtmXKzKe7F4BLdZe3c2eYuSXtS4YK",
  "key22": "2iPWXj1huxZP38Z5CmY8oF3jZv6ViDPaVA5dYfbSE1PmJLq6aF5FJy6N34veoHfeqg2zMM1yKdQMKHzBdyLWWS6n",
  "key23": "mXqXKCFNHrGN4NxrQiXoy35wBwhcNX8AiSyhP1L52h5WV18dFPFgiQVRLaRuPoB9fYXvJ5dWgWiFzsrK1tA7rLi",
  "key24": "4QeUQCZ4wD1XcBQNMchaqZPBHWQygL6BpnCbaBrs3Cp4AfZVzfFY5UPAb9hDH7F72Y6UzT1dV6hA411rcXEMhBsG",
  "key25": "4XCysrFi5dUXzfWxzQvH8yzkhtitZSFCXyRvVY9NuiWtV9N7iSutgbFE6uvrnAf2jqfVZwVUyUZAm694TtxhtN9j",
  "key26": "3ZssB1THYMsXW14GJTAFjXwN4dsB8mRm5ZHAYixkix4t7vLKXUM6468xt9Uw5SnZoFhpH9s1WZNaxQy22Hm5APAA",
  "key27": "2tgK6Zvcg8AsxygHhwi78rggS1oUKoDLCTFPiGGPpnk9pwegApqFjPVPm2btc3Pjr5hJSCSNHM5xoGeFWiDemtX5",
  "key28": "38z9oaNNJ6XUr7GCdLEXXhZR3moj4aC1LMynAFDqFQ7HdBtDUVxFc38MhDNUSAdCAHJBzyk2FMqjTVDb3ZWNwoHR",
  "key29": "5zU2Tix8MijK2eRx6GRWgnNwUF8An9HBU8xVq4LEJgMi8cpzpqsW9dZWHhQXgH3ZqVn2GkkSgEwQn1duwQZZcQSE",
  "key30": "5v1yU3gVGgytNbUSnaPMKUYBYTjidGHwPBCQYqWS6e6XsyxaYNts2YjkqfNBV5PAR5r36yEYg3RacEiezEvBQQ3U",
  "key31": "4L1tG82SebsJGgv899YQFKPWScAcAWo3C5yXQWoTcu6QWQAmMxngcfeoqPd5z3QBExy5Gdtt7qVTePfab3u6Wfrb",
  "key32": "2cLFTgAkzPcopE9vXpRK32phNBSV9pxpXwfYfH43yKJBiXGHqMm8bqmKsN6poykQ9SJsyh7ygiJrhoEbw2mDDSXy",
  "key33": "uGsWDdjFhR1pPK6uLoLRjzxmyFJC6Bo3xaBPxRwoP2hkDMnHPKbdmqMvB7BRKJTc34p4nBAuBCsKvf2Ka9Et7U6",
  "key34": "28qMmyTkiG34dBCjwUwrHnbzqKRpVMZ681VfsK4xtYFo8xQYnj1n6y1twMqVw44ihgLgMpD6vR1xP4wXu3CfQ2Jf",
  "key35": "4iPqo5RoGsHfdxxfWf32k1cahBdYgSC7Rpu7XSTz2WgvjjY63KMvJhmHRRCge2SYg9j7QxcVTyw65YKSaRZTtafq",
  "key36": "4gZccbmEhTJwjPCbdAdZAq4Wf41j2ApAf5GX3gLbPGKR5pWaLscpDdLrg4GB5x6M4s8RP7WezHnRyureGcuD6ZUA",
  "key37": "3awvpXroN9mLttxv8Sj14MiaEc58gJ1SpjegWxMJMYMY11aLp59Q6HcCx5zQVFCUQTkyDKGkb4FRoG8VickzLavy",
  "key38": "5uHMLUYvb7aX9MPWzHLc9qofZs2wzxVj3A4JdqB4kr8mPfGLWaqB4dq4CRAYuTLuzbB9ZzshdLUzQUevCmBLYUZT",
  "key39": "2Kak1UjecZivbU9RaH92mTiWzHhnL5ShAZo6gyHoxmq33MQJQu18vsegcaMDACGLbaqubNJcPxMd6fZMXQPpgU7H"
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
