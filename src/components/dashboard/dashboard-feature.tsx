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
    "VuVUtPrQ6FsgdSGq5Xi3KAZ5zyVHMUBoB8KM4YrUoDRHfTRp1Qu4ncU17HM4DAMRaR2o1ttKtZw6susri9n7DNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1dpbks172qeThcWd7vkfmC1WiRcYoZz7wpDhLFMfdL6Ju7y6m9skbvg5mHPk3PYVuB629MwJzrZBtiEZwK9xYtK",
  "key1": "5EkmQv5XRw1daCVR2BaZK27Uiyf4t6uy3xa2VVyhrFkU9Yq8qp5KLaiodYhqoSog4GZCd7cQVFhQQ56m3Gin5Vrz",
  "key2": "zf7vQb8NMUCcKd6Cz6rLM75tQapCfkyiyghzAsqT5wasuUHK3MupuuzeErfuEhQ1PcAp2fRkDfU3moXf5Ui4Agr",
  "key3": "3Fv4djBvqq1eghhvDp9NwQKbecVNBzXNZrevEj4ae8MupCpo5RJjXiGWPriJ7eqbkh4DKDFKKrjagkxEgHmEFhwh",
  "key4": "25rutr9oPs228ScHumQotpXB7HD4E4DtmXDULvwYDS3FzTD3MtWeCbcEdFKAqikqUFnbDK1wMgZchTa49sGaPe37",
  "key5": "UyJecgogEpnbyM7q5mHRyVxyw5imNYFWZQN9WWqDwfw8Jo9dJEbgGLmmh9jQZ4nrE4rvQJhxgcb4B6bDdGeLSm8",
  "key6": "2eriH5g5ja1CPLg3ndxgGrcjyVS91CfFQXW9nQtLxKSw3Ac1xQ5ov8dH7RVZumsvW8rBYEyK24Qb6Uw1yvrrPiAS",
  "key7": "4snXcLbWqNWV44GP5Gtad2hpLbDfBj3ow3x35bUXWmAuFDC1nxsk5Qi5WBeN2kovNp2YdEPMchQmGUt4aNqXwJJV",
  "key8": "5QBKr4UovtYrs2Kpe8drKAx4qxepzHKghEYAWpEVBurxSA3fbYVrAA6jgqjgqqAFv7bPvqJjqs3cZyfah8B7ELz",
  "key9": "5NZqd6GevgUmb5Y5mLEiUsUtGPqCiHKg6Jthq8A4LyhvCbxBe3A97DhocduB6uF912AZ4nfpVyBB8h9w8UdABaja",
  "key10": "5wCtmYbLg6aRQYTjnuCYLwBnTuXaadJFvL3PicqhNtMBL56bM1uikc92X2H7M767XZSPFSArNohZYXCEyWUgkMLy",
  "key11": "2pf9KgrDEM5ogNZLs57eueJ6C1dm68HYu6vt42kutuZKkSPMcS3gxfUq8tjKe3LFA1DFTQUZbz8btzRkQExVohv7",
  "key12": "2cuAhMSVrHEZWvH5poyXVs9E6mEvG9GGugC3Sdo3A5JUMbEWWHuxQYhs644EquFs7JUX7xAXZwV6Eu47m2erLmfi",
  "key13": "2Teqhxi55GeG7eZuJzsZgtNUQ5JaKuzMT3N1hsYWLuXxAt85TH3qRfSeCiwxKdJkqCXAhBzKt9rft5ARPBS7JbPm",
  "key14": "2Ng186nK8xY2d8U4iC6pohrQcB1bxBTFAQYucojjReZQnLKDKLwvpp6w8y4JX52pMYbyvWicuVT2S6fzXqdYM2sN",
  "key15": "5EsB2Vtix6heN6usMH4uokRfS1nx4Cv3xKZudN82XWsnKBcvsd5UiCyw2u4uAbaHeDz1aiCBbFW7fbks7uYk3xTD",
  "key16": "3FXKmD491Nt8SWnE8dixV7SA7PXhFyimmacS24FrS951QVsukxvf9Qz2bES3dyhgLrs1dDQwKsQj7N5p1g7VyNqV",
  "key17": "2c1fvyWB1muWaK3PLiyrNZLWEAF1TFvwSgw5Xh36gGrbzc3T5zF8fVTuSBXeugGdVfSS48kGjM6Lr1EzmeANENTd",
  "key18": "2wtnuARa2Jr9zaYPZXDGjnAwNeTnbs3bafQhwzEHjQmiRCHrR1yWRTP7hs2kY42FHeRn4NFkVY7zwHxK6P4fPQZc",
  "key19": "2BRttvDQWtZxtGRzTT1AD7A1AV2WUoewfChpzbWiz4wwadZxsaByYRcLR9E8sh1Gmjc5UwwDDtvBvN6Nit1HovZc",
  "key20": "gZqMYYR2pr7bhnrB4Y44aJkN6pZRJ9g3zrfXsS8eoAfBXweggJoFgLP5V7MAXeRGdWJ4EYUDNWtzvBPbxwS3w5v",
  "key21": "4uroqqtPs5HvMX65c58ceKUDc2RXhmUSczmT8x9qPGQJ6sz62uHrTFaLN3kGzCTj3D6sU1oPmZFDmLfbye295LYX",
  "key22": "3QUXG9CuU4PuFWjLH4gGCH1Zkus3cpAj7eVeuHjWz2qCCkLpijMSjdWv2CfgT2ULGsv2kEnnDYbobj6okc6SuRC8",
  "key23": "3kKTezvAYSLFPgkohU9jXiGYCiyDoRbpcvxJ43P8NFdTb6wHETNQFp5RWWftYhUzvkmRw7hTFV2BZBxaMPJbzQBN",
  "key24": "66smEAWajJyJnkoweRvQYaWXbVhPG75Ypii1uE3ASX6GRD1B2whjLmVFq7mAcRh5AZmAEB6GhC8mVUNSXQ5LYsoB",
  "key25": "66rKaauXo62bX7SoEtoTyL8drnYv5hhzamKgA16NrKGhKSTSDbah1gMTkoQV9F5JZJ1iFe83SRV2gftD68Cswjit",
  "key26": "CGJPsZW1ymjQiSTqUo2zimbqTDZnVHoSPC2gSLouGgxqEuBPK3rZecSj52J6JizYabYavPNAdLzGDXiT64MqFCu",
  "key27": "4JauMsWsHvCw1ufyPUsjKcFK7gNxSaaqNFgCC2AhiVyDxvotqV9qPnvTh5FVAkK5NsxLwJphH4C3PPiUnNqE8xAY",
  "key28": "2NmYdzv5PYfk2M4Y68QQAaa1nv3EGdJ8todJWDeGqN5oW8wkYM7oQpRY5Vt9NKvaV6mTtR7y3guKkDJt29Up9hFA",
  "key29": "3R8kxv2VefyDg951cLY7ZTszYq41Myxkm8JQ7LzwmCBGUW7VyyPN2bFgX5Y5GCZW1KmmyGgfpg9d9ySFpJX7KanS",
  "key30": "N7KmQGjJ8K7sbEx5J1eP8rhDQ8yGfwudAGHzLzcgxXgN8GdwCRw2AHWTn22ucSCmhFKHZh3KJotYsdp9QvceAX3",
  "key31": "2yNsX5uJstD6wtY5mR5DF1JyuPFZmneE5Pym28sFKNS9ZFCwYpAe1935LKerwGG28va3We47aiYakZvDkqsXdqEw",
  "key32": "45iXzfCAPviqAUyjbcuYfFumiQVfpJQFK5EsqE8SpTNxxk9Qbjmcp62J2AUzRXr1XpTW9bNcx2KvCE49vUHxSEua",
  "key33": "5d3vYKpaT7gTnSnhpJuc6rkh45H4ELBGMPaSkGLpQCAo5cVynTkqHj7VzADWchrgYhtZcrLcSwfuPZHKU2qMKc5z",
  "key34": "2J6LjqSS98nDsTsDD5uiFF9S9CzeEM5ANyA2oC3pNrCddTJXRf3nuzs79Td3Ps4Kxw5U5H8pSeXj4EsDiGpj4iQ7",
  "key35": "vLsanEqCNbRw2YDnE5TY5e6nuXhA4XwWSNWkgoH9tez5L3H9h8UWVUuMnacRksDgHZriniBVhdTFYhLzsVc8NbH",
  "key36": "3btcgemu9iGTrGtXhNK7NRfi6UVb5ahY9kvLiK49mkafDXdcUJ2L68162LFPwjufyz5ny2AiYCsRwdMgQL8FbhP6",
  "key37": "u4oTg4iQ8TSfUEMnAiGFHsUFfGDW452MdTVBbbUdkBZfBKMif5ZtrTdira6T3qvi2GFrV8ezpaKG7vRqRVtWfBn",
  "key38": "5bJJe4VBif4RgYKHZdXpTpb3KUsKW2rue565J1kYGp7jKfXw5GxCb9mYfGMpEbuQfc6DKAcTyVDtprnemCgZPho2",
  "key39": "2qovmNQEnawTDLti9NQ1mpUxcdmrYtnNb2QQbkiFHYtoKwsDstD5uPben4KzQmV7e3gFmDzZBYvGXEfnC4mXbRCj",
  "key40": "9SThyJBiCKvNaoojDS9eTqTpQNy5SPg2L4aTy82x2XBFPko5gcVHQw2yDKDKAjBg8Hue59a9GWnRSw3sYD9qS6e",
  "key41": "4Sd6G3CBudy4xUedFR12yKFB1VuR7jx3JFD74E3YbuXroNYNbSCZmT8R7QBHmgiVFrrQsKXyFtzHLN84KRWbLF7R",
  "key42": "3zTG6VTm79BV8JkHphoA96qaucyY2hH85drstmLnzunYQZ6DZd6wevMfVn8Xbr54ZHWexx4hU3cCNbyiNYVGZhxx",
  "key43": "2YrZmSaG7vsKyXbD7vkV7o7vgutynQWngb8ZPen8NYa27JAxsgGuEgwyR38jcxA1vhbC29CBgPm4WixuQ7fACSHi",
  "key44": "39zrZbabSM9zzLfKFJbsXWvVtyWkmmBo3Nkg2pumKCi4Uy1jeVHmeoCneph1iTTvKiXvY25wkm5tdvNowGRnmHoc",
  "key45": "4zjjRBrRNTfyCnmdYsa8X5BnTeWJsUjU5MRUW8dZYTYGq9PYR6b7RCHau3WBpKVrGDBme2xhbozQD54vCfJRF7PF"
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
