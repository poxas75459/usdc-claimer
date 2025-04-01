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
    "5EY4R5wpwUkBysWXVUZqcRreDnbES7HXtx1NqGHtW6SpBMqAHhHAX2EzRZJGthr7PDJ4Z6rKsTB9swtvefTU6pMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SCEJV6sm6R62ASsWYuDFn4hjcmNyvTfrB64fbFmrqgEvpweBXcxbFvQHXtpnficVanprte63jZZDxJfiNgPYHtB",
  "key1": "39bALfEM6UKNABv74hL4RV5yBjyFzxbB6ERDKrQykZF2UgiqEwehRstV6MTATBMzn12MqiCDbXdrBPrRDyFvtduk",
  "key2": "5oryuvvehszzR25sx6C2nRmiRjgzRyZFwtJ5Fuu1skWJ2d2aUZSUERHrsVcjim3jXRA7gbR1SgmjA7XuBWMF92A8",
  "key3": "31mj5X7H1SkbW4TdsYiF3hFi3zEFWerZPaCrEjfaD3XqjxfvC6Q4eKr4gBjyPCtuNgFjGW7i51TeDo9EKgdducps",
  "key4": "99ujX5Yud3j24AL8BxFvEocSrYmh1uCrBHyUBjDwRccuaW338w8jBaZy4xLd3HgXh3qYDZ3acmhv9sDGX2j3DoL",
  "key5": "2YDgaxXpVpzpXCL2fGWpRqhep82UnqgCACvxgqFdH5rSqbePfebNpVFUxU7quVf7ZNKnKBw9sLrwfv5X8XHynvMA",
  "key6": "2KDMTEooAZJaZ5AMhwJMm1hcVh5ScHVevwshGLJn5EBJSec9VgKBLbxDT7ynBFjUtb6hSZP9ebmCy92u31zHNCB9",
  "key7": "4zLCSA9R6WDwhhaceVWjnsqFcDdgZdTHmWVs5TZ7F1FW2T59svhMgXWUKE51eQkn24is5G4QKR3hqdyU9m5k7Geo",
  "key8": "4jK8YG8SodZYSfH3udWgk6LUPL8jZGAX8pwBoAXWgkqZLW31BT8keATyrzJ2F8nYogUfknEgeJnizBYW927M2c9w",
  "key9": "2JUc3TsfbcqkAgSRtFZg6C3gj9fKhMB83Fvcb69SeBiCeEUWeiLqs5dVzMkj5W2S4C7DaWZvezv5aZTms5J6Rcco",
  "key10": "3Xte3m3BEVnpQ8BDgxd8W2ApZgcgovRecRQaEfwvjV2Qeu1dRm5t6DPGwqKZW5FphPHB28qjjgkqr2yNGe536u1Q",
  "key11": "47iucAotQkuTW2gGR1zyPQwhtdSSbGTtk6kSrTcjTRrALLQoQYgonr83ADNtnYZ5DwZY4bH1ubxdYUHbeZfMyLP7",
  "key12": "4HmBkHrmSKzACv5f9bu2zSAqiDWCceyuPYh88CunPHftfgM6HzXV1RvFLMBF9wdLwdjmHW5MySZtbuFRaTqwWBns",
  "key13": "wyetDHDMPpPoVWsuQbigivpRyoqwiE8icdMX3fCgA7Eo51QLWcaPrLKsoQKbEMeYVziwbSTWRfxyXARoBXfyQhX",
  "key14": "65YGrAMDM1rqycKiriatPee7UQcejnzXU55mypgCQdC1G771RhkKwFzDhkyrKR6wSS6mUoS93FGiNbDBMxiorLme",
  "key15": "2mxfzDxx17y3npL8xrYYy3GVKCNoELqdSeo1i2vFENyqwkEkP4Ej62PtKZXKgki1b2ycgpnp97kQvVH58CCbYGwS",
  "key16": "2f3AtS5AArWu3B9ZBksBefaMEaz3HxZgNV6DfmsSSiqdDNocKFutwkdBsdCdavFqAnPw6mmH68YUyYWMArZN2g3e",
  "key17": "5GeLTTg2YRF5JiEr9RkD8Hf6qy5StYowitsYCiUVfUY69EAFKX45jsmvuUUUbBmYayV181sbafmPr6GqLovRpGJd",
  "key18": "3Js41RgpzKw3J37h6AvCVDFgPntBw87KVP1FPt6VHBV1oB8nKuvBt3DiXcxw19Sw32qcSvJS3kmtWMHeFFLkatZL",
  "key19": "3ZaaBg5LtbSM3pRmiG6WNLJWMSoGW4VfUd4JwsiwLdyFisoZAA2jEygbrdtKk6wJeZFBAaJcNExbodQa8VUZumaq",
  "key20": "j7ethz3dW6YoMSg3gsVZ3cyjwJGADnXwaNUJjs573URRbdrTv8ViSwVYAF8x51QgBNdbBmQarMF24Z1WjFaUgBA",
  "key21": "2whNP2AmmizPmYCyjQbk3K9Cm41RV5z73oE8qHdtJgBnpuVDjgDAWgsYqVpLr7Vn9MocXXUfMtq3ySwvz3LmVLiy",
  "key22": "3y4u6jcPjv5dBLNsqQRvNRNqD7K8cbY6Zp1YaKWtTUm1TwQVmcPse1BFby7UkxDdVySvATpp7ubQghxG7n5USN1Q",
  "key23": "5zgeJEkt9ZZRxecxqQMuQiYS2vSKKZnhUe3xedWPrYYZ68tjSBWFfEdnKpwiKjfjnnmhpWznvHGrtaSrWytGG73t",
  "key24": "spk2qDcWQX3uFj6oizrm6WUr1wiHwH1ERSaaU7YTh8DSqMT7a9vby2yoihZVCyf1zTpGh6gdqv2G8WP3rZj6pk1",
  "key25": "zAeKmf7y5PFjSPJEiXG9mxDbVYmnujTjzz9D3bV4x77h9ZdcZKrwkqckSrVgjfhGSf5yF775z5VFNTATc325HTt",
  "key26": "3iP4tVk9rnYcAzzU7tACPKrR5UwCsroR3PVM7zHjN23LaNjW2v9Wx6WncJMqrTvfu6GJXn36gjr5vF63S32NwFGd",
  "key27": "3vS8oTYDUJH5D8KfLcNtwTm9UBZoTxunHCcQB3c3zDBWtJmszA7UBhbMDDKSAfErAPUxZFyMjK78JzUM9q1dhS9q",
  "key28": "3ApYixJc7tmhL7WvvpYG3sXzzn3CFVtiRMQPqdWY5Bi5pdczbbppA2j4NWhYtufn5KsvKYQb2yKxUuaLoC8pbzqq",
  "key29": "2qzewJhUK4LGqrxVdjCV7YWd4UbsTiGmHUKjHebxH3K7EN6eXUg5bKwG9LxFc9c9fvqxVfd2skhdwPJK39PxShem",
  "key30": "53gL3Q1C9TJqPTbh3BE8b3F43zrCEJkM8yJMUqdGPQ9sbV8LAq1PfAdsjnFXMgxTQ8eZGDoZj71Z88Lst87qPHkP",
  "key31": "2NiTWKdd7vK4N2t3NyQZhddRsrMSBADUoWhLjicAsgjYUjsZbyyDESw1bX23cNrRP37ZvugxYmw2FehixDnWVp7w",
  "key32": "3649GJ4SiP1kLa8XALUGXZ9pUnqRBLqmccCGCGbJr6skcFMoLVoYCuj2TLHZUMdZ9Y81iyz3TspCs9LMUgBucofY",
  "key33": "63rWnssweArpDedQmsCeRs9q4XrgwXVpRQXYKj6d3DdQtnH4N1hnQ4apatzNa3ThkzXphh1V9UBQtYefkTD2Gsbd",
  "key34": "5rL7GnkiNWszpNfZFbf3RKp3hKJHRS7y8aLH1PPTQaXxP2puucwKi8soAxXARZwFVD6LwcAJDei1wipdZvfFnFMZ",
  "key35": "3FEekDvcwAS6Jzenqzw4G4YnHezZzeS4pZQfvh8LwaUxxqHDEN1vabuCDtadvgUV1GA311pgzRR2JHxfFsDPDfWN",
  "key36": "2ctNnmvygP7WzG7ngMNBQPiTF31CPviMTvQRhb5MvcAsATyqbpTZGMGbSRv5RP3hEQEwDAKmVXaRmqUoHip6AiUQ",
  "key37": "3hTogPH88AoJFyyCZd5JFoM2BSbzwotE1RX9ANMfoyoq9257EqBeJaEaLt4u3V3jQzW4EthH3n8JiBgndkeyWgWc",
  "key38": "5nP63E4oTwjieSSeXPJo8H8Qp9VE6WdSbmFQ5q97xHzYsyJMwY4s3dg97nHgGxY5YyrdJkmCTA29UPERvVQudhd6",
  "key39": "2A9ikrAr7cdADgtyDbaTNK2JsnA5rRNFbPsiKnUQFpVgpyggEQSbAj3vLrRekvK81yz5ig6JvoDc5cgNoD9bzk32",
  "key40": "3G27xJkitaG1d53ykhCHKrhwpBdMU7JvQ6q3m2eBYqvxrzx4JkpeuP2iv4ZCmRfE1WfZ5FGLorpv2s1WiPK1LRgF",
  "key41": "3WFjEv4KjPGBkQQUfWJVeKs1asxWFKRPDbQ7orpo5cxuBzFECBdWEZM6RBCdVcPk4qiLEgSZwEaLME5WENgtwXX6"
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
