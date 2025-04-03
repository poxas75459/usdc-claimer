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
    "2JYYmRJveHWhAgXP5HeTDUkkgHVhQ4twyvs2GX41sSXpQnMm7zw8if7T7eZVmd2G2ntGo9tnC5GLxQoF3K2pkubX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ca6pFsbsSg7iz5jeHcQ3SBhQ5bod6sgwb4h7gdFdB6sSKYH4aH2uw6tbGZYKHTv2M5bd1kuG5ne2ubEV1RrmrDj",
  "key1": "5oeuW9FYPTHzVvvNkrzRdRLbnt6tvAB6PsKmD4YGwtQhMJRcbBq3pQRTvGUB69dpevgJNSNu2twbgvfVbQg9sP8m",
  "key2": "3yGRFv5JuNEEysCNCpcCftiC3hfRei7vLgMw4rM1atHhHecgv2gkwaWT533ZGSwheDaeygJHTyhjMHeGfhTpHkxt",
  "key3": "3A9r2ix1vaw8z7j8MXFUz3rieyKYpLKRTRBC2tdR2BLnXzA3GF33z5q5NatJNE1o4iVeD4NH2ThjQiDZVY4xUvan",
  "key4": "5aNvJ5VeLNtGBqiUiJ8hmnbS9ZNBTy5sdy3gG9hhXLvDewNNHdPbVw3kqkgxTXwjFkEXmj11fyFU4FSBJouV2ov7",
  "key5": "5aFfxKKQ16XojaU5YzJbQpe5A8RkegeHPvm4He5VFKZtXKusi4bWCBTDU1MkAfpyXd1yg3MqJMKupDJzqmumNGnh",
  "key6": "2NUCxTQo6nWFTX7DEEiqdaPrFrGLKNygq8SuQhtyTeJsWbxVDdkaDjSUNRk5C6bZPLNGUfCDEsXLSpg4wX62XLVP",
  "key7": "7Xtb7xdbKaRHXMovduJL4JKzJyyritk7H8bz648q2sXC2eAtfsXK7jYx4tPRirnKkvc6X45icBPjhXjK5TCuSKX",
  "key8": "3pDWnVSo6VtTssFFubtHCZueoZzYmZm6RPBX9XuNjZFAjMK9MKdaWuDXqRYwuN4T4b8VX9p2kohooJpzhopD8vJx",
  "key9": "4RV85NnMBAcCgGJxB6Bd8a19dN5qRCFs1oQP7ZrXG2RbKRD7QAX3yb3192HzNgVs2Dvxymd31pnPDuUXLEJsHWN7",
  "key10": "4iNj6pu3Xspaas9vHx4FbzvJo5oj3PCirgeq6AZy4uXRjJM9j6VYvLdXP1Y6WeGwauwLSQkujsgJexaLvAL7VQts",
  "key11": "3cweUpEqxv9TVeZcLY1PeFFPcQwJtjnas1yvDXPoBJ5vWPzVTQ4WqZz1dovusAr11ZebMUzxyv5xAjkwtSxxW9mw",
  "key12": "HavCehwJzTEj1rPTWjTJj1img2enEt5KrghF2ymekPegmdeGxiSkBfE4qEA2L4LrKut2x5GrGBREnoA6JxBNBaP",
  "key13": "3qrtYdLbbxYhtZtFENcL69q1JANeZvfw2anqRo4tzDqbeJbPDvcsZQbaEuydWaYtEgj1aQHBJdsxfdB9tToiANzp",
  "key14": "5UaUBo61g6VFZe68Kcf1jSmz4yAVwgXCwx2NLv8QwRprBoTiWoEyHcb3pLFiWWE4ssE5Dd1xo8qNc8xpcuRak5c9",
  "key15": "7pEozy6f7tWsDWPyEXJcWGS44woy3pmi4hfGmvEXc59dSMixFgW92sN7MEsNRd8dSGCXfTBfQsdp2X8Ch6Ysv53",
  "key16": "BxzPfethiq8id9pwceSKqQQjp48SFVK9BR6sZRgaz5Z34tsjCTLt1VH22CdrtMqhZa9SRy3E6VvmKwYCW9SAHy3",
  "key17": "44f7aotJs9nWwVdLZHsopMwJhUkhCH3cBrw5QqM7TiwiwCTePmb6RxVP5hYp6LyHwfhvs1W2PaCfHRAtXoSSWaWL",
  "key18": "42kbA5w629DQrZEDBxyUJ5CHshKVbAnh8tpXYP7zSmpZTUSFmku5vGLkvEwRsX6cQnFuo7x9bLf1CDL6DgpQk5kq",
  "key19": "6mGLLVrU1zjyRgnGPHG9aj2ra6QDJZDV855re95UBMz6eEQn79piZqWgXoWG3MpE1BJrVfA7sWc8zbMnkniXHrT",
  "key20": "676DXHdD5p5JW22cL4srEcspC9oePmi93WxDpMpPsZH8ELuo4Jwxr8d5S87aBEtHp2L1egbPWTEHVwizadM7JTQ4",
  "key21": "4FAGoczQd5rgE6Fdt5bBzVvw2v3qGXkQwSK4iQ2KAxZnsDaNHUtFk9ANQZrGq6pJ9XF316PKc1vY9csDSr64bZ8J",
  "key22": "4S5K97F7Uogah9rsWkPmj1wEiCNgv98JTWr3PbMoVyMmP1u2tcL7L4pXDeaBbSQjn4w1poWjmJQZAMt9K6D3wqgr",
  "key23": "5ELGMHQgEZCdjipFK2JD6qHabYn83sKycm5BvqbBjjkYYKiCkVyYB6VaptyoeNQktKtyoYdWovDomPe9qW2DeMqN",
  "key24": "28Zzf6MSsPehD839RtuQmnjeKw54fFNoFzQ4QcusRPJuCUMXT7daft7rmKEJ49EudecA6hxo65VcuFpVyvSYj2Q9",
  "key25": "3uiD7c9mFvo8u3Mu4FdgycaR2EfNfJWuGVJX5kyhjy1UJ74HWBnjwgBj3u5KNtvYGDg1i4wkMGv4xgkYSj2xXRXj",
  "key26": "4YPegQJcLiruLKAxHGYJnG98ZwNtrX2LYB5GeTGo7HgTKohbzrD3ig9Lz4QYQ2198qMnn857o2U8XYdx98oXSAVo",
  "key27": "5hZokbADfmpkmrCKm5BKHpJWQLNrQuL56GyfxLPp4CBYJrkZemXnvqmWu3c5nf54UVNMGCq2CZCgacgmUJBMnuLk",
  "key28": "4gr7Mqb2tXAiSuR7vKZSftGZgn67i7qFPH4pDHnvsG6TbpFBo28JLz8mRoSC2hgzhngXKZHwywamAovs9f5tjzQE",
  "key29": "5vWnV7REPgNAdv8cWWSsjYCA5K8r1517gkho2jtfyv9yxHgYbJSyEp2asXkVwKqVGFm2MD5ZxKsCtXZXqRcUUN6p",
  "key30": "4eLoYrrfhdXRUCX7nonRtW5ZJe4Qie1RbrTvz8yjrZRFc7rtVU3pgUhhiczFqakyu5eBJdd8ET6ZXgeW4WHPDV72",
  "key31": "4aoAfjYWhDxfQhz5aVrPtsJBjK4eiEvhdNa2XkoF2kNbi4veJwLro4EpBwGFHoFG482Zqbiq8yVQa14y31j8LfVv",
  "key32": "5kwdEfyoTRYJ2gqweWGZRJG9cEyWXiZvHG4gQvuY3cjn54b57SNAjnzEnEZx1kFZg9orRc2senVyTJgGXm3ny2CD",
  "key33": "2X33wPwstomyedaA4eLvqiChkhzbm5R68ZhqaE4pR4RhKGbwLPYAqG7d5ajm5SKegTMmB62ahEUQ7E8wZA6LXz1G",
  "key34": "4RBKZDASsohJ2mY6mtXYt5Qt4J9UnJKH7uFvFsN34oe2ohyqu2fT99xc6uPRC4GhMSZhcYLSjA1163KZGXCWD4A4",
  "key35": "5vjq4EE14o9XkKK4vXPbSqYiCWFQrnEHsqFw7MRePPdNJo5Fy1TQLL6Nf5vWawvPha1HNURhiC8wX58ZUQKr31TE",
  "key36": "66M4GMh52P2GSaojfMaaQXH3ENcVZmakCdDQHeskTYEPYwsi73ZyTtMDf9o1zFA5GcwqC616mkjtSGULycBCahwR",
  "key37": "JJG4gMGNVEXyz5wUucXKSfdrTrvkjizLCA9ZcbaKhe262JiBqFhC3FWU4QzmWCXPJymfevmzx5Q65fDGYfNe8ua",
  "key38": "2bzCe2JkynPSDhTvdY7qcaD8BCEVo8KSdDez9npykeyk9SjNANradiRRjfuUahrus9yd91QH2NPj3YfpZFtWgpZm",
  "key39": "2dVUwp3ByxAQ1UYpwaFRHsqYY7TKhFcoY2BijrS1Y1S8P65tdBeAXckrrT1guaprqQuDajRcUrXwShE97ymcuRYN",
  "key40": "4Vw4e8q23TbwwGXMC6XTP3N6NqbZC8RRrdukca87CRLpf9yBZgWiVdrAFJar16JquJoV2waLpwuErjtHTrYbcUi8"
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
