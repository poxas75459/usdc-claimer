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
    "5Xn4984t5gymaA4YzBisEa6sB8MpLP8j4fcPeNrsj5g3UpwhLG7WYu3qi65yRPLYAragvi6dgN54MJjL1mKTjJ3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37XoN9ycHyuTA2xmPpFa6Jjv12Ujat2cSxJjRMSccHkGfTxq7UuKZEn7NDEi5v4Fgy2qdzAFEVe1SpFncTnWTMsa",
  "key1": "5ocrG8QkTZv8x37oHUeNRxnggQn3oBSMgD6n29zm8Hb2Sionek8AFDwfwTPNiytYZoJLZ4E2abQhtuzDmWghKeW7",
  "key2": "UTNmovzZqj1Nqz72b2Nm4KF1JJrxCw6SUrXDkf4JanJeugS2nL5JQkyDdXLVJBfhDc1yTrGt76eaC1jtg2rubZh",
  "key3": "2BH7RwxcE4THkqYXJ8taVLoQPzww2YGNL9spT6iBtq2ie9441XuTupBQfUacqN5z8zVanYWzR9kpJxi3QBLrxKhZ",
  "key4": "25s8Ny5ozBKaRTo4zBFThAE8CCgDWfQ8xf2nJr9mtnq3dri764YjR55jp65vknUcCeh3gsSvaggAseEFvnVfW7aB",
  "key5": "2pQnGVGH6E5Fv92WxNEufk4xpSPviKMkN2fwGwwN2tuUPnTRkDvGMx2D5M28zoL6QGJfjUhezdkidHBH4xBfKQZw",
  "key6": "3N6Tjg5QMBjHVAXPYpygzrZs7hjA9DuubkzjLuMWYkDbpd3PjFmABcAoPg68VeNZUYfhYA78UTWNRV7if4NhtkrE",
  "key7": "jjMZLaUeCZNFXgjo99BzLSdqDGMudmMbwLMxRvRxPLwwVSEDM9uxBc2UMgfVFJxMWYHpJ2fSCRdBcWtExyrozyM",
  "key8": "3UYgeW6Nigxsat1mfH3XKVz2wbQxCxG2Sq5wa26aSMd74epMLDtpegbnfeqW4rZVDsMLSoojuBAsTTaG1PkRqNix",
  "key9": "4eEvGGmnuFX7ZRMzYhAiNAHzykVvcemmn2f6hpKrvu6jkGoieAqLoFSKMmPAncCGWnnWLNjjBMrDs5oMFmgr74qT",
  "key10": "2uNDXMcWPDD1E6a79CgSvVJdVa3QSCqitt4Ts4ZyBmRSvCtL2FjVTikkhmmukLUPGCBfCuJsYh5dPDJW16WdTXrp",
  "key11": "2eZXssjoWhDPkw1ya6tZMn1NYLziCdRtg5mmizr9FsX2r8meV7F9b2Jqrta34Yy9egfv7jn3qUYrpYJLpoZToivR",
  "key12": "vf1uzf5RMozzJ5CvmJwg1ppQjrZ3X1HamXQp47r8yevyqrvMP4XwtqNr4p4cYDANyjLozCWjppc36bZQu7wwywB",
  "key13": "PGe6UsCDBvjGDNVgNYvUWHQmZZErKP6AWygEvENAEwiHE4DedJq7KfaEq3eji3mDWrjWwBZTAFeWg2CUZgDJUxe",
  "key14": "24atZCxVFm62w3UKGgUEtSRjdMtwKm36x2jHkUdJXVaYmRabePv8XZFp6zBzqCw3d1KaKNZeruPYHtYszKohrEqd",
  "key15": "fFp4d2PWVQDfiwXaxSTwEeFCYi636awFceCe6fWRrgC3fqhDys7HKGY7zkhQuhrj6b2RAMctuoiNaeYmncUosBt",
  "key16": "2D56yTismtZW7SA7r38KoZ2YZ3brb5tzUjMSbtSc3n5tJhzPN8C3w8CxxCgczsyFPbAJSBty4NPLkZkBxdRcsMQX",
  "key17": "4UBAtzv6nYki17duB8BxSaBnQPapDfgnLjAWh5ATGxgYGmw9Cv8tV3P5NHih2yivk7hfr5UbcdyT8f82Sw5YLRk7",
  "key18": "4Y6uLdgFA8FFUUigXNxoAo9XYp11JsSmWQy8Ge33dbzNT89cJ9Q7T5wrTnjzHeG8koMn3fTxn8D5quTjwWca2nj5",
  "key19": "2iV4KT5GnZZePF6A3d1pLDTN9Fu1X7hn3XPBWQKgdLcqwyTby61k7ptZzkR5yVe7fFbTjrMahNXL6J6bHofPPWXh",
  "key20": "125MwksLEUeeFmXLHDrjp4hEu7t84HJfR2aSp6NqvadpiCf8dMsczfGdgYWxQ97gaNSGWBByxErMeYVmZPc32aCM",
  "key21": "5Y6HJnZPwEm9Sihn3tk4ha1BorqiH8zhkewqAHSKAkfxAK7cTqXKY8hDQ3tPCacF4wyasB1MTZNH48HX519s6Usr",
  "key22": "23Ka9vJTdwwFSkgFJJe9Qty7mV93B2jPEgVtsBW9wxM2QrhHPeagcU4Awm1aSGDgHVMFArPRJGBEQJPbNkgk26td",
  "key23": "3r4XV5UbsEX1k9c6mGqCHLs5Fw7PoSRRiCb7yLqWnw5X6bmwtnhdRyKvb4su8sJESyogyxfZyfVvPBiELjNVnxyX",
  "key24": "3uY9ybkHozHRtd6UCzYsiiNdrHoZjKugcURZw2BYRMo2W3QzQ9o7LosTLmGPk6UdAX1GWjJJLjcsPAYgC8yxPqE1",
  "key25": "WR2b813TkeMS1JFo4zw5LbKpX3kwHiq4XBA98uPzZRUUZgAJ6egzgDFxmdQtzhVC8haSjQtnhaWenNu4nGDXdMb",
  "key26": "4JSV5NsbyToeMBAYRbJ5yiyPTX6SMCNWue1TnUgBUB6AEEPWN7piKQZvmrPHP5SBqZVCkbGMwAPX19HAWXAYoTnR",
  "key27": "5Fainc2d3G2h85RfSujegPqohTFmJ1vnhXYxauCg16qzfunhTC8hvCW7n1QJSoc16wZJx8mzPnVGPFYTcqSA9Kbr",
  "key28": "3QVfxv3vSgNPe42ozJ59YeFENuUtWPqYEUqks6BvLdLgEDthQJx82dpjvm7ZuPzPYN4kDzj479GJreG4NqkbRWwu",
  "key29": "4z34YceyoegN5VYAw3DfB7bkiUvPbCgVyrNiv2oRcZFzbvyZ9XjDyWLLBGRpQvhAykUd5S6eFuHAjiHjWDiw6iJm",
  "key30": "3PqKVeFrV41xQoPbjZL1SHF8zcc85EJfcsG1xwCt8ZHoiWWRV1FTc6P5vEiYpUEEu1FEo22sCfoWbTAYqEaidiNn",
  "key31": "2vnFPjeh4vEXTNjD9f8JZq5L9CswhkhweSbD7XnP5bKjpzW5yXza94adJ8xNRu4v9t5aRf4RGfr8F1epMn4db3Nk",
  "key32": "3YPyHeqkQV4TsVXpamypr897g3CRt28wCoEryD86im8X8neYz3sjWrc8JpFVnXcsaW1CjfH4eAazxoCmM3ywdj5s",
  "key33": "5PvLvUV2j1GWK7V58N3ZSrXbSzfFeo6s4zGhMSHdrjW2MRc9ZeJNPytc66tqpr86Mm1KvB3rM4J8LXmxAJhgL932",
  "key34": "4XX4zyo9Nd8p6Noi9cktRJPg3F4amHNimn1RW7LZUrRuAbGusb9y1U71EAqcYjjo6x6Az8k4GrxE1AmNDpshn3XF",
  "key35": "25VzodBgSMtFFnrQXUQQbj8Lrka19geBnkHHMbSHZ7syqYqoNuVN5XBieNjGoGvUiWNdBh8VYTrQwhJq4bs8uWm7",
  "key36": "3PXVVUcQeXiJ1cW8QTSy1okT7FbwK3M71m55DXF47zYuuo2aK9tF9Nz2WwD7hn1VtqeepqxdvvED77FnjWGatX8q",
  "key37": "5L1j8yX8CMnUr9xdCwYw9z4BCzMqigQBLR1S3CB7eKcMNHjx4m18Dm7FKTCW22hC2ZxN4KwbxdzFk5CrrTCZHNNa",
  "key38": "2YNpn9xyzYL3vWa1PTEjobNdwn1sKdWh6HycCcyXuwjk1nvW81oUhj4QcnDEJMTSvj74jyixyi5bDg6XLb5zhh6K",
  "key39": "5ZT3rUejFtahQxzZgro37ueQ7Di9XvEex1WjwW4BdH9YnhMK9dQNpptYw2RB6tFYNt9xEJn5e1raZX7pTP1cPi9C",
  "key40": "5uDkdaG82tVkJSHpGYiX3YcR96RKKqZnxN5D3h6TGCJ9b5LA3qaQyTSG1RweuxD2XV6SeijAKHDvjk2RtYqPPRRk",
  "key41": "qK3LQUUBjyqfHsDQAVhhWqWgDSaQLAtnk1FfUPcTwq1YtF4syAVToTHSeRqqwG3H1KMa8jnUBWuYqn6T5z3pYMA",
  "key42": "5BjJc71xKRj3CHEdU9moAP7gb2GLMAqHgitv8bC4uEdYhVVoM5fH9zdikVYgG5LbZJUbnUcGAcWGNcP7t3A5z3Pn",
  "key43": "3Jb2YRByj1uQi9skEJBcD9pre9AWqJyUwYboBpyZUMVNtmuB9WyahjErWouQajc6JZ2rVfdi5kdfmQjZc6r1c8xZ",
  "key44": "4xcsfJKkPTg6BJCD4wfwzjrgi6Hf7JsezVvakLMwQ6CvseUC64d6XWDWkAG8SD5bJYK2yFQXTF1ys8FgxiApSqsL"
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
