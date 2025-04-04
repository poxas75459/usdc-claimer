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
    "4roost4oohY9WkoJ97gScbmNqqFFfsUVSNdYxqGuSwQum6NvbV8QBtKpoBpe96wmcUi5vKm5zxzYTX9Rw9f4YQnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62G9d6RFcVgTPUcXe4An7SU1SEfMtKCgAi1KBVpk2zzj3AimmqoVNbMch4qWWnpgjK3kgdVNPJ5Q8XStLQRTvQ2q",
  "key1": "RqqGWhtBqBK7bpH5jVn5EDYULMbBTgPBaA3LWCuZAud2QtGDKoBuYUDg42PKrfVzVKyCCZ7AbgbsSRJhoEAsHZY",
  "key2": "4Cxh4a3mEjG1pVFVy8Bs6ecvXYG4mnE8tzY3S221egFKSX3UsMuFLp7hHnyav7vUpPBrg8581rueqRENcYUDgcv4",
  "key3": "4Rg6oYcmCs5sfVwRtQXic1C7ugrRnotkpqXdiBGhbHDTRbzEDVEDfmZFwJvLYG3SfmS68PVA6eYdTmgvqU6j6NiK",
  "key4": "47GhTeTYuX3MZWJEwVMMWYeX7yx7tYEyjKV5wvtrPhCJtmr6MeLXQyMsp95w8W5k8FgsR8UhNX4kD11TAeCwg77S",
  "key5": "2itxcjGr1kZ8RJmTxqZk1WnsqBWXs7kjHAB39xztjQQpUG5xY5VyE2fxnychvJcrzDBR5yRkwuo152pvLEKPGaCy",
  "key6": "34ebPjebJuuH45znLthfdLp2Dpyt6p6R6LKFKuoZacb6zMM8hWZALEcorRQcVgy7AcRDpbtqmCAFLNwWuUQYc1wK",
  "key7": "3uiJFhC4VUFQRgGufPch6gzhkxofbyeeMvJYd6RgkPY6mdDadwehaRRAcZsPYWqTSYpgZ5FWvLQwvx9cJafPdj3w",
  "key8": "5HTMj3DihRHYJmcH4jE95B7CV67921ZSAYgSzskRsq4RVoTaqWYZssdTTLFmpm3T2m328jxoo7B8aTmYMPrmUbfW",
  "key9": "N9AysrgJgTYAAyUWsEwqTL5LnHdpBHGWEm1SkYMQzWte5vkGvK3nDnkmEq4L7a6c8H7EZ7Q4oRiX82nsdXQYwTx",
  "key10": "2zgTSRLtnCYtfQwR68ck2P2JQhgTt8QcD23wPnSQFVskk5kTM2LfsPk1CaD1qu3eH7X4mzGq4efeC4bqXRUbTtcw",
  "key11": "5oBJZsjrzsTaV2YHQhRBMNvWPNUChjf85YK6NV8ykAunUowoDjtf8eQwaFF2zpizq2A7vGewJpy8sBtCn2AumAwh",
  "key12": "3eKpQZLGYuiaabJu86jBujEW2Ks5ynrYELk9hLSRkYMiEES1Tw9ZhEipDKG5mE5K2SAyzs75pVFFcC9Sguaji2uM",
  "key13": "45Yp78ryi6BudjRnGWNALjBaMRQjXmebDc9GWpaXxPyPx5fgM3Wf8NKAPtEkeAVCd5Wmx6DNH1uR1rhJg1wLKHbK",
  "key14": "3zEE7uAZryEQcXxp7PZfxmTLDB93af49ZqNagxVXrwNhL6Mm7iZgJQ2PXpdEn6YujxWbe4xd624otgeBa9sDE8W7",
  "key15": "7tJDzYPhZrMvA6BxhmnyjrWPC2zPYtk1tp37biXEBE2tdvidHDXeP2RNYjubgUWvYsnnFukoJimfftymaFiw1uT",
  "key16": "4nTeDtWuN9MfzQvB6EzxAiBf4BSvooF5G9pmaYWux97aJ3ea5KrP1M4Yy9yVwCrKnUnYqF8ogs1kPfmv2fLyuXZ7",
  "key17": "oTFSyiDzr8c126XKXioRrrWE9yeReDpqk8Bk8VeeThcqT6uLDPmvHUksM7aEsxD66TZmhY6jv2rtSWAjLGp7uJX",
  "key18": "3MsD7ECMsQYPcawRixoPaqKUwjWS9gfcLTG9qRgHezrbXwSqdvUHZFEm67XfC4XCLgYjgJ9YMBPynFPC9nhAzhLG",
  "key19": "53BDGFZsdY5wRfT1V3tC63GesYBxgBxTXscVHQ2tELz8xdabveznEJsMYqVWf7UFkHDR7SkvxY4TPPHv9gkNG2TM",
  "key20": "BJmz2AJtWu2GQUSa68VAzKfGdi3pKtvqqRaLsUie3usKacDh5yxMs6oSckQVUVLip2r6qTMQgj3LvNT3VKbZ5C2",
  "key21": "2FkRmP5eP7esxYftvxNH1fW64RjNGNBWddr2PSTZNaMxcNCc5o4BXCrH8zy3p4TBbfxvu3pL3d6Hqb4yCAUckVYq",
  "key22": "35L27AgDwUMz5iUSarMJVk3Zz2PN2XJ1YDLqy3bnLEPcFPJEXSGsWLdzevg34c6EjNwYKg2UECRKWmA8ieGQEXyn",
  "key23": "cqdu9Ks915MMkKTT441AUVZ1dMMUij8h1GYa7YSJaZ15SgFmEXiasvNWTVuTptVUA2KHXNHiZ4uUE8SLu5wF76a",
  "key24": "51BKKjCt6VDw6PuDsq3yEzhKMfNrogJPF6GaDnECAbzWqBFxCFCAjAvh2weuhtadRRiZFmppg5cy5W8kKPJD5wTc",
  "key25": "2xpzPsDrKEKQZxTiqGCh51mmGwvFFKvvf6XWaZsCPiKAn1qwZ5jzZoCivQJhp2DUy7gQfvCEf9isSPqeSyQPxqyw",
  "key26": "4uerU5wVbp3YsYb63a3JKC6uhoRqGCnCDtzZGURdRanh7TvyZxsi7VZivWScBWYEfz3Fa77AVfBVzwMBk6GQAsp3",
  "key27": "3oaERL635ba9fvRkAk9nyz2LXNCpGGr2wcieQEz5Sh857HB7pdmPKkrnaYFmLRTLiJS5JugP5yXMnXtYyrdtrpsh",
  "key28": "JmNof8FdMeC1orXmv6YGQqzbL7XyK1ZzATgxRBP2ufwdWcySQZ3uQ7542H2ADj1AF1yQHNVnH6N6TaYBTCmvZtm",
  "key29": "2aesTLR8z1efAGqKPnHcSAiNSLXYMWe2DgavQeMMM5EvJLMZ2R2nyTt45GY1UhZwMtXWnm71txSAsEgspYhi6UyH",
  "key30": "2WjUbQ9fsReNw4tDtc1yzMKmLfJ9m71Nb5TAaMDg5aGuHAtakUxDFgqNj9XPaEtD1j9wnBboWLXBQE9jTjjmqJto",
  "key31": "247Wrk8KT8ip4EMKc6HBxMcD4JiEHM7prq3xDd8AgCYik1H5BxAWBcePnrQ44NMEj2FLvTpHjutseD7rNTUZCtee",
  "key32": "3uHJi5nF9aApskZpiXLe5bwwNnYVk74SFTLvPncAkqetZpVy7xoxHoWCDSaHxCrQ33c8mwdjZj5hzz6T72F9nM2q",
  "key33": "37ehdhisrqfujeqWry5McAkJFdBbaHuWG9FQ9EV9JBeH2Vp24iRxyk54QmeVwox2YLcYodJhSZ4T5csSnWJWdfqG",
  "key34": "2h1vKWSEc5SqMW5cSyWbxKCdBd1Go86czdFhYxmRgH38QnQJEoHTKsioZrfs6kGBvPJrKbqBoxEvcvdC1M92Qsd7",
  "key35": "5A8PVpG82T9JJ4edXAahppSTD2wxrDh5kVAMJRXLqBdpPh8kZcdW8Z88DGc36dyV1a1iGZY1d9NNzGXRupRXfXYJ",
  "key36": "xrAxRB2nt68jbDDHBcERC7w3t9yayzhrWDm58acHv2aTHfNYKsSgCGSwAUh6Cy9xqWZ9hQQzfZvXdJZNdPS3L6G",
  "key37": "5F9dAMzU46PqsYEgx67mH7ApeQamhVG7WuMHiYG4sXvDQyf85xHVm9ABxHWNVEX5ARQhQxKjGk4feFTsNaG8QuiU",
  "key38": "5kRZv5ZHddByaeaDd4DQjnGACy8KbXoFHE8uNGP1KSMqcNAi16kGxFe6qtZ8TDDFz6ig1GRacjBfLqEvr91Xsg1D",
  "key39": "2YN1Q7ZeyEbxnnhsFYQ6T1F89L6apATx6GuJPK3TNi2gPXwx83ZN2WZjY6RJYVhS5W5Re6LeFLrWABQUrTJSL3Gw",
  "key40": "mH8ACWPTvi49d1scME5oCAtkhs2bGSEUx9h8zPdxzX3Fwgjq2a9RxJ1ePU6gCcjQS3k9mLZ93soUynSRumq2cg5",
  "key41": "ogPqhrEdKYdzwy9PtrvGSuG4ixqGhfMEy56a2qX45sRu5SXe8c5DNJNaGVeKDy5tLR4oQvMi3bCj2SCXTCiUZAR",
  "key42": "dNtbooU5K7jNz2XEsqzCENFoZxptHy2RG9CkFVyhp3QCXm3B3SZMNBL1D4YfXNKMq9Mv4kw9rvsU4FhdC5Mppnh",
  "key43": "4i1wvnk6xa718eFjLzYedh9QNc6krA7cxwD4x3aUGMLKqtVydVYL57k9cDDdxZjL7r8RgTtBf9r1CFHaETuEvMSP",
  "key44": "sLpZjU685zNrzbFhiwMtVyVrYFBmZuGxyvW2MjnnXyLvAsvNogsPUb8RHWTmci2GGiqaFRfcTWkJoEbFgD7quzM",
  "key45": "2sf4QL8YLsL9NH6RMRsUb5frczPg5QjkxoMrcKKUpwHVxfRhWfH4szcCHkXtdTGjmrF9riq78XsDUjkpEGcEBNd7",
  "key46": "276vqXNbMdBVjYQ2VKe2uXfTH2bmzPLJ6Yfp3SVQggJLkT2RvF5x8hoMvgBo7HfbnDhPjAcNDzTh1fN5YCsiYSuN",
  "key47": "4yJHo5kWEcMFEw7qew3bCHi7Nx5kCBHvxrysGSdhWGgW7TrNh6om2MydssYbTpkhDM5RBsBGDTjEjPHazv4Cjudi",
  "key48": "zqTecdm1F9P19F9tE1eKfS6HXRuMZVjnqrEmuAhx1ECVA28GAV2rBEARhZM8BpgKJpHH1XPqxdRFVQ4Umor7oH8"
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
