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
    "5FkhHtoSyw1DhiSLtskSU6sVWrAGa7eBxDyKwRJi1yxp1VtNghhb1JANMAjY3UdiCtUEaDmESs49gukYh2Rq3vUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VtZYk3hET1R6gv9WoQSJrJcs1vpsEyVvmtpQUJRNw8ohjXhAP2xU6n2TKNZd6NmuQgRWuYyjG6RirXqYW4zZ4Kp",
  "key1": "384NYWZnRvoFHjvF457sijv9TRfK8iUky9eUvheLM3WCTiihZnfGurinn3qNU6hbqEhM1hqwVMrqbhKUcJ8Eibgd",
  "key2": "2QX5rwBwnwaeoWr3wjFwayyy1HqU3GPdUb4NPaAmKiKV6Ptjbn5w6UwqfJJaTkvmLqjqPsZ3pVJMVRAWRqt3rHJU",
  "key3": "8hNpxZ3jUxfakpJgyoRYvxfqjLYcgSmcj4N7PaCQbonkbCoRMfjNtduzLKVMVxgmjXEugdzw4txVwC1BJHjEotf",
  "key4": "2wEm2F1JhudH4EmhB5ntMpjx93k7VVNM212GsnfH7nQsDxSnpyNtYDZcFXYy3FTYkpRnXoUnxswtscW8LfevbxRy",
  "key5": "2PQdnzgWjVbpbaYpsLZhv8JpPsLRyt55AFjwXNP4w2z4jJNgDa9D4Fbs3VgoUepJFBkf69Lzizj3K4xSCENMK8NV",
  "key6": "tGKRNipU9PYUu5gCi9dA1brpwFxSKnAcCoGDdtKwzk5PFhsnJyFBfxhCdyNu7vzBvmc2pcihiPt6wWNNUDJPNoE",
  "key7": "Nz83Gs99QWsTD2Jw2i6nrSvBysQ6xWTeK21uHnMyD4kS4chUkWH1Ynadt4jjF2fJ36zrrdavvwczg4JiCBYKTMa",
  "key8": "57zTTG24CJxykrkvsP2ySKf8DD99QjZZcwUYVNmoHttfHFnNga4UCW1sZAdUBjRBjsH72Y28ogoZwydRLPW1Ty33",
  "key9": "4xVpvbto79oTTfpqm69VFxd7pkqUkEAvmNrtH1YMbBGXKKsWjbMRhyhcCYvtdWqKc4rnVm6PpZ6j9yJMZfnyEcNB",
  "key10": "4ZmNJjxggt8MTNRqk5CBg92MLZcsUTuP4nERry97cEUt1mrJSDPHpxhkSLGo68RxUj6UWQCnU4J25JtfUS2AMJgd",
  "key11": "4BZA1MVadpmYheG7m4Da2MyMj8B2ENnWv92fd8b39hYqv1mu7bBfcqt7yzcX5pM6TZkXj3d5LMxjREGkAXNaAuMY",
  "key12": "QKdVnBVuyQAYNGZxvKJK3Jjpyr69TE12Lx7cTuDwzQLgwtbLS4mU4PYGMzp2wgz35Y4YBNaM9fZTTBrhvXepSB3",
  "key13": "2y5BaxXVYzshjAqEjWRGgxoBh5Ka9MA4dLJw2KR1c3Pu7eGKhFpguUE7jmBH7Rb616pCkUxQUnBAmYXgueeM6xc8",
  "key14": "wuP6WJhsKQcH7Ue5GSEmrEvHk2ZUcXA99VSivBteMQUAyYwHXzeSRrrtuiPAP4cGpiMcAMjsJRMCa9YoHgJaLcv",
  "key15": "481WfSSnRQCXXfGEfQ1a4VaxcoiPY1n8KTwFdSteRFFN3dDH1JNnNEEotfQ9iLJEUFiqDVNUUYAwW2TrjiuDatPX",
  "key16": "2u2P59TxpNkukUAH14YZeWXjiK8ghSKsyScLXfMQHyFfHKzmpKE8AYmHioGFKcc3NPXXT812TLhEdktN84brFm4e",
  "key17": "5NHiUg4PHni7VZk8wHT8onMnDU6i77QqK7ztuDGFSTykM8PwC5eA9VsJSCGEwQewWi8zoZxjE1yUwgFWG6Qe8C4y",
  "key18": "4U5tpXx4AxmX2n1PjN7TVRvd3avGsopEiXJ9BrtATQ477oEMzwu12VTQ4e6JGd1ZFxL7AoCv8c4BnaTWJZGv6fDC",
  "key19": "5tdMEY4ikXKnSd7XXarW6HKFq2eNogUAFmxapPv2ZpTMnKbKi4UC92Pvf4GvG68EmC5eADzByAhaUo3DYWv6a9i1",
  "key20": "E2eBwE1p6ucJLW6BWus29fNASiSZMrJvz98pg2aZck2L6gwSii6DM8Ka8PC3qq9NiD9EwN9cYx5RxWHYX6649RU",
  "key21": "4z9SHbGvdx3wWy1MzExiwdVfBxjQpMSMHthYNdT31v9J1T56K89NSprKkrmpX3PxHov2qxHBqG9PUUoTBRhRvd5S",
  "key22": "38R2yLKXBB73WXFP7MPs2S3ueWUM5pwK7jjsU19BowRvp5NtUF78ST3TrVyPGTXa976jyTmSFS9tWXVu4fbYsTfh",
  "key23": "CnpsHurXSUrditZfXDFG7nSh9CoHEtHtaTAsxvvrSWjVAW4J5DkALitnq7DncKCj7ty5bvKm7GN2dfMUXw5574F",
  "key24": "2PjX4RBKQeVfs4vsAYrZmNuJfE1u2xhNm97GUp5AQq4YA6vM9PHyoJf8Tr2mqPSDAEcXsCzRpfiY4uW9PnVGWcJS",
  "key25": "2F5TW2ZRToyx3pAWecCGM9K6VDfT5bbEnSSsUbvcPsF9SbRHYPxTxiqzWFp9aWtDudMUD33PVkW1BhRVMxiW2qYa",
  "key26": "4vRjURP1GSxkbG7wzvG3aUtqQ9T79rMJhyTbY15ALJzYW82C1fXMwHyCQriDsU2Mh2apYyHNTDgSMpBAHwFWQmz5",
  "key27": "2GZqh6pjcwq8kwg8CcrfiC8Nm1k3DqUYsjkCDC6YMPv8NoGcWjizFmdQc2kycVTLUZBgcpDLGE4Rvgcbf8esRHgr",
  "key28": "3fWZAdDBnR1BzJg8qwxiniHsqMu6LtQjdKLUMRzZSuwR4Rx4Jnfpf68HUzFTLQC7Pctk1mDCNKFVrEzXUuqnE59z",
  "key29": "2uDVQc4khvfFuXhDtSL2rUtT2rkTdgxdRkiAniondApeDQH2ETA3nQGe7W6UVEP6pbgR18tqw8PH5PGstP3yTJeV",
  "key30": "21jNwaxfAJLtYKzXuDPHQhx5PCSTC9gHtyaVQDM1K6a5kd9HbSXmWr7R4NL84BpzCaoLR5KuG5vB9shYxB3F3GwK",
  "key31": "4a8DPHU2NN85fRUG19Sovv32tM5VzJbidY9qCqG7Hd8YJrf8HSUga91FHHvyNz7AVtsXJkUHwDZ8RaxwQigq7EgQ",
  "key32": "LhpFQ17XZMS9d8ZTLrKDeQ4gCjiinidDHtceRrTqmCHbxvAj483aPtjmnHh6qMzgSGrv2xnqnyAFYYDJAxL7mUv",
  "key33": "3S3XPfZ7mTqc2CfVqTJiSzCae3k8XW3hkZUE6ENAnomgc6Rq9FKyGwmWTLwB2qH9J7m8GeYqg6mzPWtaZiewj7ir",
  "key34": "3NtHFUNaDtcfv2JoVH6tDEtqMNCErVgXZzGzhitvGsgV7vpDcyBPHz9MMniGQZcCUdNSaG7qxRLJQzFPcQDn6g9C",
  "key35": "3bcCaBu5NXoyMbcLemSeb6nHQBUBQ73Zp4e1sug77b92fvnJTciUSdagrAMWJoPcC7cVCPBDuBQJnpsckkt7QYsq",
  "key36": "3c4jvC724oK7AS3bJNVrg4BNxSm57xiLtALYAMwNiREWWRtrEBXkCkGkkTyhnYh8264gh9yVgYzUZDx1xt5QPCo1",
  "key37": "5ghZHoEaa2bFDgG5tywp28tSJmEENumk9qGFAcSdh6eer1SphzjRMi73vxUH6wHYfjgLmFKVc4C44cArCCHQj67f",
  "key38": "4MJXUNCQtCwgu6qk3NPtYhpmpVYJHnTh957dziCN6EVv1NLVTMQmLYdCVRMHiFDt7GsYS7WY2DAib1af9VaRcZyD",
  "key39": "31eqRkBBKRBqzpHinHB41g83Pxu4SHEoiid5NDuRNPmgtMkgxaqziM4C69AuNBUzep5Xg5F4xRi1yR9Gi4JUxSTf",
  "key40": "2T7uVFwnCZLtGgjxtbtHouy7zrpmKhtiZWJzAiPFw2mnD3H9mpZYri81bZv3N6XVa8wADnsUJ3EypTXiVw8TEphA",
  "key41": "3AUNfjpiFNpz57CNx3XGvB2Vz6p8Ewgo5PMtJYgsjUVnMVuWriJVemjuhgV3iE3mUjsAdJkGgB7W6wZvRNaw7wV9",
  "key42": "4WzryhyMu1hPEQJZzraAUE3MktSBkgV9ZYBteKuuPSjmU6pYbEr7Yam33FACXGn4UvTLy2ySbHxxqfMgeRTYVVPR",
  "key43": "47QJ7Wf6UbuULBdCuvfdtcgrQ4Xpk8xvRcysuZTGfHkj9Jn4ufikexXeRDyEZjkJASfU7YarkdajDznB5Yd1t1HU",
  "key44": "2TEEoCTe1tha5qCD59dJWKgos5my3GKuT8NZjxp2V9d26avtagrDDPvBBqD3TP1VjK2M9q8BC7P5yJR2F99rx3DJ",
  "key45": "oSUDz3QWPwcES8LxqY4qGk2ijUG6qGvCxcMSB43JquHKc2AHMTphHSmewX8LQd2jffCS7ZUYny6Wf7g8Xwg5BeU"
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
