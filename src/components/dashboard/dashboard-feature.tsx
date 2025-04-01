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
    "ddfokF2fANPZPu533KQJp4Nf6QTnhpWTuPEu5LAp33gD33TqtmVtzEhgxrU58vnuuS5w5xi2EKU2KzjRuHzia5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kr9T4Ck8Dm1id5mE1FvdgxnWgQYRbAidttznDEMV23DHSBC6gyxybe2QDzBUE35S8RkiyxzHKRTTqbV19Dmem9k",
  "key1": "Fk2fqKJ8eokJ83LPEp6TCrUobRYFhzRxBe521RPpeSVmLEB3keWWi2e4xwUa5VdXZehurC7zeqeC2GaCDXPnRUR",
  "key2": "23mXtTPGx7Edu1LWHdeaFtwX9Ec6s684sh5ogwgSY2KnBUXcnuXwG7Wp6FKdgGHyT4jJdAsWD2P8jdkiwJhxdeM5",
  "key3": "2pTNyqcmRQDPSxirPYDQaSpaALNeq93CrEezVEbTdhND7bdiRhPuXMhGqvP1q1Dq7aYuH8fCcMhmLA41fZHLY2uC",
  "key4": "4ye8bXpjRtFwckb8RKAhaFBeAL1XjphpZT7qZ5YLiUKmwi5ZbjywoPwYs754FvTEsTKiBGVDamwooJY1TtLC2WCs",
  "key5": "4H7TMhqBkBGEz2LhJM8okQLfi51bjSL9iKSZ1TiLsZ1Te4TH4YR156H4RrcvsvqrR4nGgZEMsBYTX4UFJYYJCDU9",
  "key6": "5a3yxDNvnmP4SKuH7ZpqmfktD1aw6YRQbvFni4CyaUPG9yCWeeZZNG4vuWyN15thbmXbVVoQmxinyTopBgaVGiFm",
  "key7": "gPPomTf85CqqDxrETNhwgwaVtnRJGdWsviTHqaHfFc73uUEoKwZGPsbuJ5aWzT1yQRqhzhXLfDSzqGmFshRNb5L",
  "key8": "4XXxqiAifoGvZ5CjcYhKkrxPndtHL3QhPjheCnm5F1oxqqmWLHDhVhPPZSaDp13U6JactRKgCSGvYn8edtUXyfzd",
  "key9": "2jwUQQgE5xAev8J8An2JhKiHzMbgXohBtZE9mhhUfisD7Qtc7kGxe92fKBjNaDUfE16mbvox3ZZnvwE35uo3kunV",
  "key10": "48A4UfVkrVRCjcLjkgW6SUty39VrSdDKCXnM9ofMyenMnewCHFg6NgEmE7exXbbe5D8TgPrYSmEtLPMLxD448RNk",
  "key11": "2WV5TskqffgmZQh8DinvceS5GwqgAyZqHmm7XRWDtro6hC43DhD5f3orYHSKMA3SA3Jr49Tmthp4z71JtjViZ6p4",
  "key12": "XkBtFsroET5ibCtZzbFNT5pXzieH7C8Ub7VW2HqfK3186gzHbUaX2X7ZjNmkXREHr2USwu1gtpVhratwAcRNeJa",
  "key13": "F7HYENTZ14F79t8miJ2tno2mA56ivdVV3LcHv2fWgRsPhNjzcCLxgtAFfUQDtEr3G8LJSpyrL6HqKwV5yEeDqbr",
  "key14": "45h5o1iNrwYj4UDM8vMZUFQTh8GsJUwtXdnXrAJ4NUbFR1GPKtGBwDWRdTshc2Qae1TWSUuVK2CWuCNQMx2vfBhm",
  "key15": "4sCphHZb9DpEExCfvd1XLgRgWwrvXqwCXvueMmqaKL2pbv32znzJax6sSR8ovnHHWXHSxagF8M5jrk4Sc7yvGmgK",
  "key16": "KXLeDudBBHJQALiormcajLUWDGd42dYEpB6HAev2jzn7szDi1dWj1V3bDrdwJqggdVq7NR8Eqc3rnYZ5V6GBvLE",
  "key17": "2gf4aZRFkZTjETPJb51BSzxrthCXLyENae34PptuGmY3Q6vRq2i9ztXtUeiwaeqcWdZ9E8BotgvX5Q9JFTmYfsTN",
  "key18": "4vLkDKftznzWqJ2aUuLVatVLaH5CC5U6MvxFFYSRKS4QktgLgfGUwvRX6f2Y9vKXstHAtdYxa23HsLNReLNU4D2G",
  "key19": "4HRnjoS8CdNkJrgt429gJvXQzMEo2gPQwNeKvAKsPsnhVDtRdQ4AXh3YKCgKXEQNUmtfqaffBiFmKBfG14LSLhR9",
  "key20": "5dXtxYG8jypQubH1MSMYnrY219jL2TtVcmmxGHBji6uKfeiZh3PNF8gQWCmC4J1HixGY11qqrW6YWNrH4bPwRGuY",
  "key21": "zKfZDwmKvVZpa3d38CZx4x4zDV71T26zeokykb8xoaqpwKnyA6Yqagh5m1YY1xAk1FkrytueuAQQWKGY5Ly1CMu",
  "key22": "3DwP9hpPzc1GnHzsx4idHeEYFUtXqoQ7VWxhtQuQFsTpDiq6BMEG62Haghnb5yX8etjKGR1TBtdFAe5pmtUQszaA",
  "key23": "5Us82CzT2CF5YcLJePYmisDhRuttsHKXs7ZaEhf3KDPZ1UC8WjzU25pBB8v7gDSFt5zmQL65RJWmhJDnC2gGYkpd",
  "key24": "3tUBoqyG5XXHJtZRGGaqGbaDGbZ882Ks9xJd9r4RBEWZeRrNW1ZJYjbCY1XJuVwsVtCESUSKRiZ3p91XAX1ox1h4",
  "key25": "5J2VPTvahsWTR9muLBZQ4h87FgqT7BiCC8StoKR1QYCe1CSokCuzxjTkApp4AVGzqYPmjY2MsUeYtviGXE3paVWM",
  "key26": "2hhzqkGQN5qH7Ws494txP1PXU51mQACkLkpuh7zf9wbZUtcpDptXhdbxCFXjZcHV1ABY1KQWEJDYC99JCqdkmhjD",
  "key27": "5M5gdqkPjdLTVcstP796HdRt3jzu57LyM536NyVhAxovm9zJE5wycxVV2MqhrLBbpwa2hy9Zo6BAEGaY76HnHXWw",
  "key28": "2cYiTAjciRHMwyHSQKNawpQ5RZCCuQqxqGxCrzCwPBV1qCryJwTPbaWGJ9BGaEcrvSa2US94tnvzMhEDTWsqPw1L",
  "key29": "er86PCwZ5S4uVZE2T9CxCKEhPDddANpckBuM9avFBFm8DAd12W78zCCrBc1L1SysvamP3i1KtQofAiwJQYpFZR4",
  "key30": "2GSZBymwEA29wxEacsg42VzSyR7hdpMqcKYs2RLqQ2VkyxjgfY6qDDNUG4E2CsigQwZ5xkzVtbJGXFt4D6sQY2vH",
  "key31": "3WNjxemkZL5VkzFCyuHRAGPPbv3E98Q9XetyCZXy3ew92Gpqg3qdQ9s4hrQVK1fTdLFNwbpFsA2ZQCbkFZd8gYMb",
  "key32": "SxkMBCupfyWcfeAtVUD4D3aiQ4SSzwHE4kFGCBnxDq6kMQE5WgStyQLXRXjmyrmuzwkV6xxZdFRB2MgyKv5Uc2W",
  "key33": "4Jfc6C9exLRfchhcdAKkwq2Tb3iaCLuAeqbRTiSc6xJb13sQNHYDfWEP8jFPfLwujC3bG4ndCiMZxwmLTkEYm5r8",
  "key34": "2v2ihqWnEqtu4PoayugDoCknaGr8TGtP62jwH2viQQLoxzJPWUvKqSfD5N2fzNfo7wDzCSDnFh1rxGmzNzzrZJyg",
  "key35": "4A78ayzBbxz2hXZDzUQ6siGWkU4wJyYv7LqHM14C1EBDGaaHNigfxuKZBxsY5akWePYQfk3PhvQix9D1pubXwY69",
  "key36": "5GMwwaUcNnn3AdViStyCyaHiY6tBx3yLHnHSLpZcenEk9kqLXSqyVwdUKMv3CpoWnpv2Zt8UXtfeJdrfuT7ivLJG",
  "key37": "3BTnLiQQZQQsVpKi1XvKEsZAJ94roxMRUzHR9CdnPXE8v4b2FRE616QzXbmVS7VYNHBLYHq7hs85pd11gCP7baj3",
  "key38": "65kAuBzSNSz6aDN4dwAp9tAH1Ja8VYrqiSpyVzYr1uDcMP9DxHTsCKLHVXMq9cffxwA9cvha9DKJNrxuMJrETjh3",
  "key39": "Xj4GZbZJCkF3ej36eTtXP23WGCeivnHozMXm6qwaJedKqpR4F73mzJJtK57tkfojoZ5ZcJ6et4ZNpuoQqzbUHF2",
  "key40": "5WxTYAvqAGtB5nXgYG9g5iMnFEvQTFY4f6sY1esnXQN7boAnjp2vJxKcs5sTPG3DBqyMTjzreRV4G7nwP2Qym3E3"
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
