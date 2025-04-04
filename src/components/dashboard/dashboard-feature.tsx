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
    "5qSxYLGXv252uUQXnhCQLpEAatX7ZxrymTiAbJC3yJyQqxRC1yXzkaoT5exrsURQbwsB8pfeUrJiZ8yAowe3vPcU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EsASTGCtZNHBAmj9pYXCsZA2aZgxqwBRpNBLnhYRQmuFAr6LFJswqDC3V3kJ8degE2weC8Luhq9LAfMooHcNpzj",
  "key1": "43TgFXcGtS3UJm9mjVihwwPmEWo6TQPVPJSvB5E1oEVJF3XgTKDekkrMNVVzdetLVx7DWdgoSWiX6bqGMjrhnTpb",
  "key2": "2WpMbrwU4gq3hrrTYV494vajZyunTdid9Jhqx7DgSSrgPXQ4ud8RdaKbsfPrRCGH7UDyc8rELc2VwMV9HRWbBXFQ",
  "key3": "373fCaobaxK8GR5xKFL6qiKCyBQxFo1b7usGBqrM66gG5zaUv9MymiHE1cRA4rdmisgdmMpDKnZZMdeKyxkqknY4",
  "key4": "2yScuDtcTXmytVrudS16fQHUW36hWEzyCBQrF7cDHReJtz8QgvbnKsuYXhWQHpHnDRRwzHrQBQWqJ4xDrCMuqtBj",
  "key5": "25gShvNSGfcDuFXWrKaMAK556R41HRWVnVH4NS8Mn1zPiMQhftW5Bgr8dVs6hdLTQxxBfR3seSnmEgwZCZCpnCmj",
  "key6": "2JTiryvujVuUyiQ6n7UseD36zRNyQy6DBGkCLoCnESFoVvrrCH1dWBp4QwW8Gr3GZaVTggBz1pGrJeH9umButrd3",
  "key7": "4Dvf6cUb4KJ3vqZK8BBj9YNnca1WxBTYs2cGTXhfbTdF9kBgQc63NeQv3CfdjAySZsivhSKcxzs6jds8DvwHWsAs",
  "key8": "2KpWRFh9fbWuHUfMfABf3BtTQ1TD1qo4KrZZwwpmkiR4j4pvkUJe1VEKiHzd1raUFWyZsahJzGrozRBsiVLXASQ",
  "key9": "mbEbrwZwtTtaPaxUigoc1YRZEoEMKCbbVHKZDUBhzcnZyA6Lb9PJVB1RpmNyiCR6oQhA1q5LMcPnMSVbVSiWnhz",
  "key10": "XgtmM6tCaSQADAESAi24CvPfQvmQ8njjK66Wn5W9sHQTwmKe5BJ9DZJi8Q8u3MjxBWtAz83KGJxdYtuXRf4AQc7",
  "key11": "45mPpH5xXoxNyTAhMuTaEogHSGnw9BPPAfgwg8AdoDCZ6zN7fhBJP4SvF3Nt7RPj1TVSEPTe8j2cVtt8gi3yhsvw",
  "key12": "43HaKjjnotq2rhmV8RSN71LoAUJgEajGcauTGXboQBGxBFQ4Hn7PDgypnmsv8UHvgqVnoHGYXSvBUiHx5q7VzzkQ",
  "key13": "4MW7wQYzXDG4tfyMSh3vJf5swu28edkR6Tb3uv81aKqir8geBsmn1hvj153NC7qctetrpdtXrHftPW3oS9bcNnGK",
  "key14": "2jPxbF6C8SwqT6tPteeWnSHyhJRuXzKpN9HLpMziA71C7f49oqQCysPM7syyvaGpEgDRmpFotXnyMiPuCHvzp1v1",
  "key15": "3nXnm8dHzxydAzox17jns9SJKxdaakUYdnwtVnQset4EzAaLrYZgSFw4xPqUkVmaeGqQw6awEgfd1agVCa6WKEe2",
  "key16": "3MGUbiKPxfKQhoUzBbYuhi6Xnyb6NPpKhbfHYjFCahP1hV8dSgf8hPJNZgQm9qLvBrcupaK8cEWRDqityy8iAS5o",
  "key17": "2Pn1ok9hQzmzFMugNxM7WcsFvrdWJFGnHht1URvwXgqZ8nyQwYBf6Bd9oVCoCEeTRkfc3VciuZwbhEoxFASC8XKR",
  "key18": "MysLVYcCeYwaXkyfcCM9Tcw3BGUcx7BawESaUPjmrJAcZZEU7Gs8BeKuGcTrtcKKDGFDahAjv33zv3EnyzJ9QHi",
  "key19": "3igGZgExEfpPMW129ysB7TjX4hTiKP6m6AASR1Sx6bUEzyKRT6bPzEYdWG7oXaqEyn42TnauQV8YTuNaHCwAwffH",
  "key20": "4TBqqmrE8SWynzw9LF4JqaT5r8TrgCfcJ5wa22SYro4QznuxZsnuSs4mLMxp662gA1UKUFGyeF66Tm5Qx5wzDiYc",
  "key21": "5uK4SUKX2dGkDdaB8ahxzDetCxxSYynZcZRnZxKiu4ks9CaYcPnD1tBL6NSNxbEUxZXvMZ9UvP5XV74kruqTD5io",
  "key22": "2qwpZrCqoFAmdx612sHvpYmgy8YjVWZzoonoag9Rie47oGWxg4kX3y6PqeDj89ANoSwmE6KJzNvqecsMWC9ZHRdy",
  "key23": "5ocN3iVvx6Y25kScPRdcx6w3k6hsHHNuXSAqnsFceSVenhusu2dyj1sD7xXFtxCtd5k7vKtBr1DUbFbVcpfQfySs",
  "key24": "4HGGqNMubxTrEyr2WRRr11JQYLmQTYki5CdgxcXyCmMxFABxC8pwNheyLzr1mWeqvmdH3HFQmxt1rNdpekASzeNy",
  "key25": "2zkb2NAa6MwKajEMV6wSAeT9yepz3L4yhEVeuVyq5GrfGLqGRpb5oDJYvZiazcqLPQCnFj64bvkK6JEwAQBa72So",
  "key26": "3hsHSf2ajm8mqnocLc8EWrYxAg2VnDfkuJr1GE12rWyszUp1oWk9Yp3cm4v4PYaZwgYv3AKf5imbPCsqU1EYeo73",
  "key27": "2bFB7H9EEi1bhhQMM2996itnABUZu9ffkMV1kBRXh7GBbLjRvc9GLQY2ftCu9M3hWcgddA1HDr4uQFnMbiYwzZE",
  "key28": "26bpxbV3KUSSEBdwC6KMH1RGWbktrz7BrMZ7rAxTYNBtHPkGY6bzQWyijt9nWBLJ8Pr4kDcHq4iyhi1gPD6v4zC4",
  "key29": "4tsmdgsMDwChcGKf1kLvKr2smep1QNpEpLzWYGEWXdDH9EaubYmwjhPngKcnizcXNs9sesdsJUm99Tw4TD6fa6b5",
  "key30": "3uweSvZrwi12xqpaCF4Yc655qM9RPtkraRhwDJruM41ddYbP9oxdUX7hHnJeuKKFepDqmftQkCiFTKrWJqYB1nUF",
  "key31": "4RxA39gJ4f2e5BzZLbpzfyqCLcciEcBwAnmWJZtKoc8JASuBCbXiUYPw8WnJVsm955dhYxy9xPK1HxnVH9DAFRcx",
  "key32": "5gQuamapMao9xjTjAsyvhtijC2XfWbrLZpVheFhfL7M2ZbKWBHFt9rWK2syA8FCWsK9dXJebKxDmvk3JEtP6KfVG",
  "key33": "4szLPeZ54DzjoTqe78HNjHmgp16XhzhEnZfqqzbQh1JtfGhYUGLEmQJGztQ5LjgivyC1vqRUH7dyFtAbZEhcGdL4",
  "key34": "4tzpTrE9i4qsPZtbUpsBRBSR5WvkeC2T1zeAZzggWvDzKSB9UPEj3GLWQ51oitZMTAH4hZ6miGQUT9uxnBRHj5M9",
  "key35": "5iZyBnSgZmw3STL81MnZvjRMMXVE1ML4rV7KgREiDu5VpSxfFyavEJVEU4DniTE9aP55QVBKvvGQL3QRtHydUDSC",
  "key36": "PGEPBp2Au3FTW3TRPvYHmd5CyyU71uR8Zrj93VBR4YCqcaUrBaGL8cRG9gpmd1pEoGooyn7mwu96fuJNaRigTh3",
  "key37": "23Uendgs92TmDQE7xLksFfNMFR92rsoMn58AgQZ3uTDsc8QTYYFbsmw6CELjeQA7DSap8P5TFtMYhaPZBsD396bJ",
  "key38": "34pDfTw4qYqsTZYvVrsb2JK71bNrH1vas2B6dXSrWf1z1pfK6Md9jTtgmoYZEG14EXgbrc498ykeUaFsQD1qXRm3",
  "key39": "2rSeL3evL7btKmfom2zEJYEmkJz8sHTLKAi1hDjpaH5Ap4w1H8vTx6rCo98HCtxR7sxpkWkpGh93DCGPDyFzWRJs",
  "key40": "3ZQ1qsmxPunpbQEayoB3CRRSS6jQ7ykMiyrWdYDttNhRjaNMaHjFdQkRLyvZwzxvi15W7myubuTCPFPDM6T5x8PU",
  "key41": "3pRCgFyCh1bJuSsTbEbPxfEaVTjgBBeDWH9PF7xDdbp3YvopoDhKdz3Xfxn8RMJ6nbVyJZ9BSyTPVPL5MVTcymm",
  "key42": "4Zo4GeGyBumDx8FUmoKqHXmYRAH263ZgUS3jzehY9b2sbqySwg1ykuHJ541wFVwFjwip8isvzqSXP2Fiq9RUWcrz",
  "key43": "46ULBiodBfRVEEZct6wRTLBC6YLF6TWo7SQ1ZKtTTWLgKmLewiWhPa9iF2WFUqFV84Lp9dNaAzNSitGVPCo9TCv2",
  "key44": "2CoTLj3auZXdfxjvddD66vriqwQLkfNfJXVLGZwwCwjSG7BrFhnntUvKFncmFViTc3EGuG6qXTp3CRe1YNYCSMKV",
  "key45": "adaxWpGPSmimKiQmvdkw5aW2ku5opW1RbGq62FRysg8g3FVMKz8yzP4L6xsaMqCACm8sMGk6QDhp7gfCsUCDVSz",
  "key46": "YAw6UugWXvoJdSH7vcHF3AAdiWNac35wiAhXvXtyUpUpucqqCBgcvAWTPjbzcQbyEwUUmEmX4E3ixUTjc2L9iXg",
  "key47": "5S2KVv2azr4yZrjXnnXJ3cwivyNJb5Ax9Zbhv84ZqqSizxzNpYd7BgtMGiEK4ztxRUWzgEjERYb4tp1YkuvwweW2",
  "key48": "3v3bPntHgFaFLJhxt9fVnuSprF7T61n6Z9WNveNec5sS64WWQbw6t1A2A7u8JsCtTP8B4e8w898VTckZNn3zq1Pk",
  "key49": "4XHDtGfC2zkYUwny5nnF1fFBy6Kj3pg2Kxeq58meBjQGhFiTinJsrP1hfezTSaDkrBVTZyjZEaDTCskTAQvry39H"
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
