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
    "5icN4V3a66jY1HqHKXTh1NnB8octYUfDycA7UzajzzKTyGq2n5tssWE6QsfKgnLQPMDt6Ef5wRLnQYPr5BUB35ff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AXApnQrsa3dA5Ryu1Meme62Lcd37oHwHfkPex8tRxbAhfBZXuRZZzbPVk3KC4eTqJx2zHTtu5Z1ehCseTGpQ6oo",
  "key1": "35BT4ckHcerm9tJkYCbmoKDzFJoJfSCyUt8aFnfeLye5zbFyxmYB5T4JCbWZUfVxwTihD3mB5qYr4jyA1LtzJjVQ",
  "key2": "2N4Lthcd65QVSteKNw9SjqtuCAgc9Fmin1ysmDK2AiKnnmQxaQzrRg97utsgyWRz3Yyw6DwvR5vHFBXuN8FXpLsQ",
  "key3": "2fkwyWKC9CNyVj5fPHqkvjQkMuePXQhYUm1pJfd3YV6M9MMauALgaQAsCXdCGFxBGbmJaG5ListTpdB46388tMCP",
  "key4": "sKTbBGRmkE8RketEZeaA9VjeQJnmJM9AEXbRKhxkySEEDVeaJXHv1b86mmKVSmggQWtLsYWxtdeet8Hj2VqqyEW",
  "key5": "4sY66UXJH3BjU5QPeacGYxMemPAZnbvDvudsP7LK9TKfNN5Pj3jDCUQfvW1qU9iALri6wYN1nkdVG3L9LbGkTDkN",
  "key6": "y7BmRAJzjTmBZKajvz3PPUfafsaxNjve97z54Bc8Z1Y9sEMgzZaUH7kh673J2HLCkReL3FtEewwXukZZKsqdN8d",
  "key7": "24cFNhsk3aumDKAqg95tRV9QsauB7mTCBFw5MCEn5ixZd9DQcDvCium33cZipgmzb7Mz8jFcwuNfeP8waZMhXCGf",
  "key8": "5LVN3dXrCknZvbTKzG8LEysd6ME7NMDL2FoogxmhrGvXLvq661cekzduv5k69moXdfptiBudhg7UeLkdwVT3DMn6",
  "key9": "3GKbq3qZGBhu7CLac59AWwKtXdEv3Ssm1v4u3BAuHh5uo2F3799KhXiL8nFTnX1ck9RnZJqPaD9mR7J4HMYTWyzE",
  "key10": "314HXGuzuNC2fD8K4JKVU3rh457kuZSNuZdqojYHyNHP7FYHoyozP9eDcrdQggQjEhTqxi7e9zCsRsETDQ5TZ3YE",
  "key11": "B7shCZZqAgqJBiCK6naCHWUVjYF44MCNU6JmGgX1kYkKcNM6xtkSuxeY3yNfHQEK9s7QuhEWgDyeQwL724B949G",
  "key12": "pFaTYVCEbFgJbtTNJ7uSY4BMV3pCmHhqWoqNcTAYEaFLES5DoAtFm8A84iSLamSajEaafjMZ5wZSVXMifHgjyXM",
  "key13": "4dA9RPXe176pMFaGqSpgiAJoipHvZfuTCuHMFFhVE4V45kkszbSYE6pg3otfzrESMap8zhM6BPmNA4gqt7DgosPM",
  "key14": "2Rcva2343gCwfG3iaVH65B16gHKKxwMaBSM4bxoHDc4cPVDrFqVZY86zAhPtmBjfZ1QVDXm23HaTy6bXfESecXjY",
  "key15": "2Ek3rMg9F4ZL2n8u8wanovMPmgGhCAKFbUrmpvMVp9zex3aSyCAp46teFHXbxULCgijXeGURyJPdHo2Ls25QqTBt",
  "key16": "CvYUJ7S3AAR2Q5QtLV1Z496GTAuVFwLKFgSGBZx95QpSDh7xhaAvstf2Cfw44VDPwtvCmaotiKc5dL4QpcDU4s8",
  "key17": "4Pb8nfm4fxCqGYX9BhSM3hcGK5hrFpdDBbUzdJLC7Fva2BBUHqQFNxuFZzfLMxRcGroL5jqK2mHy4wYvqp9tshfk",
  "key18": "4G9X8KvZGSzgj3WAmtM1nN1exJ5Nkdz9ny1AVU6CGvcmxJfw8gSEje87N26GRwt765Mxmca6aT8hKNThs19ZqK9c",
  "key19": "qVfxgxeesHkMZAwLRxN1BxL9GrWY3LjB6DxVs47ug8cXTVuQy9kuBniiuoFVK8iP2J5XH6dnckeQSq2BJ9XSRcF",
  "key20": "66UGYm7Fa2e6cRRyvkfBAKpMHAiDKE6YRYUQAtXLYpN91xdWEc7TVD1mEbW92UjkJemTBF4jDiTHp3w8puo52Lf8",
  "key21": "Ed5d4fwBumZLiTwvxwPK4FUA7MhzRcswyw13Ck4AvYB2PycKWBawSa4maMJZehHosVuAVrDyUy3d3fk9uXN8wgz",
  "key22": "3pSdwcXhfgJKNVEcDh74ZcyoJEnPLuW6DV1w3GE1GWgzfiVo6cd3aSrzJs7K75fFWKUUxRuL8TWwyfB7nHeUZoE6",
  "key23": "3PQTwt1sX7jw5gRAFXyM2qqyxpRxgXzXg4xsuKbLinvMu1E8Je9cAg2jKjCJPHLyBZMtnosJwbNQ6txDDFqmCL5S",
  "key24": "3GELt7vEAupwUv478Q1gHd8sTfjvrVDjEcbTkM22o1G8sBhmB5bAL7M5Bv5SF2e76h78TUn8AeJLdy6FcnrTkaTF",
  "key25": "5kyBsRJpEm2xEf5v9n5pFKjbBtKrvJN7Eq7w4tcWeAn2e334z8p9gzvqhAMNTydG9Uw1LDwPf3WRfzwS3XThi5hi",
  "key26": "2oLNT9cirKWGEbneyrTLMXeJykput2TCANPYZxDVLnUYkGhWfDQEanj3EkcJUQY8YPRybf4sQJsgy9LHqs9Aj6z9",
  "key27": "57g8zVmCQHzzEhqFhui6EnBVB4ykgzfqF6ccQrHHhDNQHqEG95GTzkTS48G4LhZWHkzhebNkNWSk66URNiLFZN2Z",
  "key28": "3hr7U7EoEJNz8c8gkwkfWdjr8StZZGWjvrYeTcVJE51V8y2UW4MHBSMUM1pgh5WWXMv9fnccQKCN4a4oDeZ3DusN",
  "key29": "iRpWSM7HCw8Qny5mxihK4fLA5RP6x2citnZ3Yj7ZucR9vNRjQMKLup3jM7gsHoTPJSzpJDKp1ERm3a7QpeJCZ7m",
  "key30": "4wS2oaHZZ7kztsvADwxSZYDQMbHUubMpooVNiXpbApmuLHxMcVuKfNZcYZVDow5DchQfqcTB57YpgP2A5R7mitA8",
  "key31": "5xd7XYtyLpbWhrHPqH2q545UyVDnN7CPxV71bRdQ7qHNW1jNyjTMYEtEcibuU1QFUbaaEMZa7J79qsywMbFtUsEL",
  "key32": "4CrzUkee2WNfsEZsThuvtxDi84SbydUqds1i94CJToBeB2uB6PBC92r3MXtwZqqkVjm1NLEnhTttDCwQtwNNAWzn",
  "key33": "3rQsp14sYcC43h1prDP92o9zX7jUhnewjFyr6r8K6dBKbpFcFDtMLUbU62jYPSsBwk73Pm3qy2pu2yd3BmRtTmqT",
  "key34": "3cwGTjWpd85yPjTw4KCY9Q9pdHqQ48MMwuwsyTLk3iFKnFxdZ7ybWVFB4TBboSCJkT4MvPQWCebKtheL34XK1DSQ",
  "key35": "5rBhKVRVySy1aYcXD6gTjp8jvaLnneaFhmRZYDMbVpxVPBvBLW1vCcApjUdb1etUBfaQAuKxaSRrA6us4VYWttzG",
  "key36": "tr5QEv2ayb9GkkayAyF3n4ceVgaqaTyQCxckroPkx5iyFrumfhFJcsjEEFiBpjyjuhJDZpassn9YAM2GZWdqv78",
  "key37": "Pm5MKBcWuaMP5GeEW7NGYmjieCDfeWLNVTmTTC8zbnFKff8miDd8jaDN2aaxLL4Fscg7doZLq55bYFErUW7TExU",
  "key38": "5ekP51hYJCX22Vp5adq8RLPv8Xe2kCcRCJUjmN9bxW9NrHiGyNY9PKM68VC9UzCPc9VXzmkW8xH7m6HVaGeKfqgr",
  "key39": "3Utgpsqv5egZavcXBFHAoHqARmZ95LoaUoZ1n7Cd6SBivHo8ynXRYP1qsvp2JMCrRhStSw5J5BXh9uY2xPiWkb9U",
  "key40": "4MAsQvNp1vjN6BuMp4QazJqAVdmdoo4kgZeCWTFf8GYsdrpceYAzx2mKxthjaT9M2gx89MFj8xf1fnLLDqyvkWV5",
  "key41": "2g6QGaw2t6HDfQLaoH8uK4Me2uPCRgeJSmHH2MZVcMG6w5bxLHYcKsQvXKXsQgEw5TtUPp5FRUvBnzLUJFrfq5vd",
  "key42": "47XMhepbUMoe7VDnp9R8FScFmX5XGNr9LiwKtzvKhjZE4aex5gYbjE4K8gbAJUoQarqs4RK1TKpaVgg9UhDHNUJz",
  "key43": "3guzaKqcXwgPL4ARqB25E6yUuAp6yJYSJJyNzqt2FoJiJ6HD1HfJsuhD1HGDCkpYgPoSB9FbNMjzYAJHpesQjpZ9",
  "key44": "4EtEY1DwnkkRmnzGk7Sb1FGFnM4ZvE73S1TevkrWkweXfUtqQuPogV9SgZM9qnCj5tyGBEJN2jZzDGpSVJwcXu7y",
  "key45": "3EwiQRwZxcyWEY2c9B6WyrT7SB14SUKnju5dwbMMu9WRDruSKk9miwU4UAzs7ELC8xu8wP4KsFqqDGZpVnpjsXZk",
  "key46": "SdUws8yGaKF7cmzLN7wNdKqnKdg6kBFPMv9eapQpwBytuMakEepoDXbKLUHdFnHUx5hpj4wZHbkHT8YBZ2ufuEa",
  "key47": "5H1YYGykh5LnNpjbT4rpvTrs3XMu18wTXFzGzsHHTEgzXbfPTJhq1zQLGyQJck791jKcxp1dqrCsyWPi2c1kVniJ"
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
