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
    "3YJ7hJetv7zsuVxYc58LpZv9X6HzFJroY2jRAE7fYwQGbTnB3j6BuUo12PmAxHtKTC3T9JaAFjCbEgpoyLRfPwRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p6Dr9nJnK2smWE7m1CUe2GvFwyeQSdfpJmamfqpsWZx7mA9jWMeEkLmrGvYfcGwXPgiyHzTD99cWMp4uCnNk2H9",
  "key1": "5ufkUcXBuMFeahSSUwgJUbAFHNzGVWLN3egXhxH2d7P3obkJk25b7Pb2hmodmoJ9FANfZVFcZXb9KQbqRWqvr7uc",
  "key2": "1Zcn99RTyhvKLdUvf9UEHBC6zAZQxjpDSguKQqhstTJEaAF2owdoztaS6F3cfrrkTSYqhB1zXMU7HRVHtGZzYtu",
  "key3": "3puRAFgs6BytkbhLbaVc6ouU6hvDeLVQQQCwD1WeYejwTDSxQCvi9GMTftemxyiKzZ5QDyg3wCo8myL5jAqLXXpC",
  "key4": "2EyPQe7atf38BQziqZjALTgr35c66U56z3Aws34MSzWfLgcFc1qbXsqD3j93yuQ3W7Q55mCBU1CQLxVfkS4oGkyR",
  "key5": "4KrvVenKBnJhadDwNeBnfqrakz4mt5Zjco4WCMBi9Src4Dc5CYeGkWYTuxWGwaBJPCutAxcFiej83bTu8PQMbqBV",
  "key6": "5LtN8g5QyxDdx7Q4ES5VMw7C7VG8aHdnDkifaZavnNa8ZNe3KwhmqGCwbD9NASGZPDJRQCg9mztZCzR8s7u7M4yR",
  "key7": "2F1dFaEguuxi3TWmtSarp8oN8UGBrXr18vhjS8K4dhzZh2HGMNuKd7XyHoPnAuhaZ4U95e9pW3w9HUPXNuJZWa6Q",
  "key8": "2Jhz4s3xnRZ55t6gz1JzAu7YbbA6dPJZxdbMepoaRihz4L2ZhvmaZngyNpHruAGvc2WDiYuAYEXfUNpTgStavh6y",
  "key9": "2JPwjXQtA46kTcSRTs1iXavKWCfNWKiDGg4HdRFfpWnGevBbdJA7bC4sKnVyWZVukbgea9jGb2D9rBTrQGhhGTGR",
  "key10": "5tehpzesZyXWeizcMCiBzuf2fL8oCSbzc3fxeBf6iy2mkiiGYWJtScgR5kgoiaJzRh3pNhmDgMESXMkFFxhiXRRR",
  "key11": "46wxkgRzLDZo1JMnbqdYcNAXp3BSQBrCoA3cqiMfDo5TG3dLQdq58PPCx91JGxkGv9cS8C8ZujPUxYQY7m5zYvYv",
  "key12": "dapCbjaCDwh6ViSPuvXf79xJ9fRkJAwqQACGV3NxCtAbyPXDdnoHns2FNRUsctjjZqoNtkXfTcvcVNjjS2YJsV3",
  "key13": "5daQ6Mq92vXbPE7r5ZeTMd7MrwbwLy2YN6qm1NiDLbboDzqXQnoYKmvZRE753WAAUcRZwNu8BfBZhVnR3L2LL1xh",
  "key14": "dpVZSU4fW6tyFNTgjiysKvciMtt9HVxR3vnDmGGFkKCgA5C1G79rVtTZKXFnmzqnMLDS3fGqKbzPtC2gQFvz6Yt",
  "key15": "2aK6RJ1g1uH5h5SK3D1vM3NzDWuj3hi24troevLd4JAqHTHKGYg1N6q2GZWdYCeMwERLsmPgDAhQmCQHu6GLgnXs",
  "key16": "2tjVPKLy2uxVM6EijVoK19D557cm2F731gSUyi97S2fjHyTNQFsiLxd9U1c6i8ELRxqPaF9F2cn9VAvFSLhYosz2",
  "key17": "5ftEaahHPxVqksPaC6qsfSLiSao8d3kSAguF5s8F1SiKFMKsze8HSZAjuKpJMcii9wmkqMZzK8AoUMwfsUKyDWSL",
  "key18": "2tq5h8zdc9ga9W7FBe9auxPC1WwCQ9CQPrnFxG5hUsVTUGEFEFsGREtmCpgwugcAt7GKRDuVLQBmesJ6FJUPr2Cu",
  "key19": "2toi25wjgEdeHpAbzn2bNevtYn9spCZkSBn2kjkjtVEc1PxtK7L6saNSvb3DkNtCSTrwuvSpubP6wNx74nzdFjpq",
  "key20": "3QzUdgYDCGPpiKuJAguB3irTX3c9hx9qAPhKXpbSe69yQ7xTSacXR1asCKQpRgXBQX3AGdr5A9nCr5rYmZnsUBW3",
  "key21": "5WZqBvqypovjrUzscAo7BnLwCmVhnaynjch6dGNNLbQQSkCax9jBbM7LCjbg2RrSDwK767BLGqmaYefzkAohAyrQ",
  "key22": "5pDj1arAR4F5DwLhGBH23kwb2s876hZaHiS8kFEFMy8seXtnATJEcbeTGExC8bdRZ5nPXU5Npmviatojn7Kkzb7v",
  "key23": "4SneryXsX1ES58CWsfHsXAA3dxfgtDmib6kUqFTQoeMobYaXEPJ4ENzB6zQaUacT546h95NpiJ7dMaYui9C2Ndcz",
  "key24": "5GQkcUMPheiyzU7dqmmv5bEeBVVdQJX2S4d18GYo4jqj82LLEnvnmUoPLdUpSgk9JHG8NzKMo1WBPL993yqvfg3q",
  "key25": "MeHYbNFBkGNiKMjfrh2x4TDw53iCW4NUtU6eXUov2afMxNVb28Ng3Kn5EyUxu3jdfZU5ZwqmRuAw9nd71EcetQx",
  "key26": "5n38P2AgKDzxV3ZACM3XeZVcrk71UEVVbaahVd51QzxLu3cW56Fzri1bPZXBudVxM1QMkpy3q1uswNLNWmAAYymz",
  "key27": "4GZnJaQ3tTpdhYPLAjLJwV2bbtoPo7s4mbCBzDA4FG8XVMKY3U8JdKSCrYqmU187d2FQTjxgLw3JibknS6jiefnf",
  "key28": "3vJhH4WJ6VLTQ17mu5SkUYbrqSfwACf4i3xMRT2QB48MdBzKRAGetLcDY9THPK7wGf7JXjhithenANfYCQ3m5gy1",
  "key29": "xr2moyHzu4qdCbPpaZnecM3BNPE1gTquMLwCJsm3DotJ8ANoGW5qFVu2M7i76psqHepCstPqyYJ56PR1iSqHAQ4",
  "key30": "2zDivd47AK1SKG2z4VTV92UXB4njCvHgSU81AFujyrGP7hdXZitx7XmWJy3hY6AjRTzra3CTdbgDXEtyeAKRKXY3",
  "key31": "2hKQhDjLmwbt2yup7e1qxVk3fe3ioTvUtLsQygmW978fajVNMUfLhhsgqrxSD6WzVewPutQLkrHxFiBZ2rhrGiGM",
  "key32": "p97tMKo5ye5Gp6AxNrGDyN8E3puYiiFHmLBHRENcs97c8ZMbYaCcqxLwvGfgi65ndv9UaxseKh8pr2VHLqmqRCa",
  "key33": "5h69nTu4Dw7tSvPTAnb3eybGesLgTmJdHUPZSn5RuyyQpn4tfe7msLfwLTMJMeEbdRkJGAvknfTVPCgRnuYpeedC",
  "key34": "hMqRRDtyhZrLVj1VtVrTjWvpvJWdus7gpdDD8oDtWyVSF64GjGsZjBR6NgyHbi1WknMzXBTzpdizxWGoX4ZniqQ",
  "key35": "4r1z4PT48mAmn8t5eZwfcqgeRjaXUHgYgyjZH5FieuhKfs4bJ49i7RxTxeUx8JGnxJz78RNYYmSKo7jDBvvBotDc",
  "key36": "2GmQXTn8ibBG8VUZD7Y7BZHccPFBfgQCXx3nF6GeWV2BfL1cWKeoVDC7U9T6UdHz4yzSb8RZ6ycU6s8gCARtzFyt",
  "key37": "3tnSER6meJianwS2Q44hqg3PwyrhTtjZoE6fAApuVEvwzPKutycVqV2ZnmifSeE4LqBVQvKE7oR3DD4Svhnep6eB",
  "key38": "3VEdZkecMmRb1zRrxkAPXg9rbmgCtsZDhXVXcMGR2hLNegmSXo6ksuCmBMa2aPjQ4ie8a1uoniRHUsyUnRBGRS9e",
  "key39": "4orYE5ReieZhJmUskHhUWHY5T6Cn66Vkacio81uF5WPvzQYdybZVihQz751zzJeJ6CPL5YxcdW9xrvYzQsQDGeAd",
  "key40": "4h5cadGLrt3bFgmvcxjE2gkDJBK4vbunqoRgBKeqbHmnsphfP5JCGz194a9YmxQyFhkwGVr6tH9FjRGBi1zf4USV",
  "key41": "43Dx87M2tP46sR25NUjwoSwagdvN9sRFFSW5kmoAow7Bt7pvTLtVNB7A6sqvioQ9gNMVvjYkiXKwU77jqJ9pta7N",
  "key42": "3Q3Cc5XkweQbzrzrTMs4yebJUne4cW3b1abyXkXxLo6zy4x7TQYgPLjk5G6UukK8hT9y9ik6cchSwBEjf98APihq"
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
