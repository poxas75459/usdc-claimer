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
    "62hsXdmcRTrC1HihxMhKZGAiLB6qffMRMYhTzdMY2HtysLGDNpFUQ6Tj2padFrb1to4kKYbfdDjNfraN8kTQYtHE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mgejsn93CLQLL2ZzPaC2o75VfsPFJxHPDJkKSjhhLrRaHZLMBHt7KUQzsZmpxtnAj73ZfGhsMBfb8qmWz6dLNgW",
  "key1": "6jaDqBnZCsMTXyZu2ja1ra51RarfH5JKqFsjXkFE9jeqtCckh3zUVdTCLf82yoTJUF2ZAzBPtcVd8VPQgenKjXc",
  "key2": "5NGNqLSsovLstC8dFx8gcmAcKfi8EvoYaGeXiyym1Muaonv9ojUVjWyYZeM1H2wRbGPfnY9xsFGxDKLKc9VC1tKb",
  "key3": "4dPiYMXYcGyJeyciEp9gsprdVk61F1X5Sm2kz3Ci6fSaUDVkw3KuaLNZiBqEi929xNzbtzSzMDjGbT5ZFQeW2vs",
  "key4": "x3sWUuyYvkYj6SY13Kt3PZtpMGCR23yJHzU19cbCRmEroXjjuzXoptenRbXndT7rukCzxzismaS2gsTJXfin6Te",
  "key5": "3MdqJhs1ha2zmaB6HyGoj4jpWNsuUDWV9GEsiTaSmJDDwudQ8uoFveNrKomUh3d4TaEg9ddB3dMFHxrfXLVo7FKk",
  "key6": "4RwzyJpRkfbx9RANtpxddCdLEBPw1qZRTbGswTiSusdYLfo4NBJuWz2aYETRTAG3CDezjsyjDLccUwnWKzhn6uEA",
  "key7": "43adfHU3PqKi8pDDanK5kEE4cv1bVYJXiN2RkPS6ejcKGEm3RypyhCvahSPo6RqVrEJEz6y9RnTXuJNneVhoob9F",
  "key8": "2kZ8B3Qa1f5RcH3ydbUAc9gRVUgmhrS7Wb7qb44bwTMgVsvBMGtrzrLb4zRixZNrmVR85UbkzJTD3prCywmeYLvz",
  "key9": "kvJwzGKzfckkoidndbJLvij62CsWNahk2T5EVojQyhPhkEt5gYvZPU2cqPuZQtCi3ZCTgZmierQo7bqQfu48W5e",
  "key10": "3AYJAk17errfWpMFFLhtqos45uKJfNB98s1DquhKwrjmdyLHmGL15zYPgXPetozEEe9gxeYhvNdNaaEn7hLTUp2H",
  "key11": "2W6qgNJmmu7LgUpu7sBhwghBEAKgjEoeEj8xwam1GEWem9Ekc5DTeHo9BzYz7rCa6H6EnuBTTipUBYdsL7nXU5xA",
  "key12": "d8d3AyuPznezbh2a9uSWkmUueaceNWZQvpSZX78XBAKTRr8zY4MhDkwi2iWxve1tJeay6ReGfycgtoopLV5yFYD",
  "key13": "afWm1q6tfJexGqc9CsEX3HcpP773caC3PbyS3cvSkMCXN15Xp6GrKxHzN6xbrUqtJsZEsbPixJNPXuydzTn7bWm",
  "key14": "swKeiBmrDWQV6FGS4gZcnKL7S7dE99ob6q3Q2oVd3acNbVJzhrxMeqqaWw5gDxkzchEipaJDe9ifAkH5fVjq1Ek",
  "key15": "2vyqKJmp6bAv3J69atu24MXxWsSPzQeMy254EjtcuYJPFVMcV3ZbxVU4zZnSnKuYWB8HPicXKzykSd8oFw5ChNX",
  "key16": "5rvXWRVyfvGCmRmyK9KuLnYrhV66FEEKLJ2tJZ4vtjVWFSH9CuKEdvQtKH5igr8WAvd8DWu3vVo941RNLtarZhkM",
  "key17": "57gQqgkjykS8UgLFAWqNzi6qi8vLhKoCG1rWurbNhPrEWBjVuZYuDmxVeASnUt7G1U2WeM3YiXosqyamkn4Z5QRQ",
  "key18": "43iNh7UZPSdQMP3ftGj59oRBnFN2tqF9PbgpjmoeoCyBZg9AAf19yczZ3KZNYKBfG56391SgbRYdszcsnpCqzM2j",
  "key19": "2xm5SeWRAEzUqdXnLmiWwxijtRP52oGbrCKQudZ6QUGhNQqVcXYkuWtio8Hkzdo8eQxFFjj8knW2VGRBYWV3jpfv",
  "key20": "2Wnbeq1LA6evTthc1zuejhvvfMPEFEGEbrLDmD9sRjJRw97tCw79QUzqAgCZLo9nrHH9mW1aUmupgFwWiPxLUPpG",
  "key21": "28BR4yWQihn1g8HQLDExufqJ16xm1zxb8DwLE8jkHFmaZJzntB6da8KTqVRN1FBT9q92NsUzqASnteBcdcBsncX4",
  "key22": "3RUhHv9Bd5r5fwhY67ACVs57eBPcWMs5b35Dzao5gQLC5rV9pdUKFksA749JF2UagJu1DXrwi32mCskVaYeYACvD",
  "key23": "GHXVP8tcu7ZtNKEVwBq1CEtvgGvwP82Rbv2jzpa3wh9kvWbxd8KrJNMWHxY64ARzpcm1rUG6p1yhiyXouEUoVry",
  "key24": "64KV3Qr9aorzF9v5d497DM9ixKoLHpMf151odaEBFJRW5NMhxRwGXKx2KpVQdBRNHm9wYtGwA13pytTRpoRpk3Bp",
  "key25": "5fZTJuVpzGwt2nnmDQmNidgK3ofohTaFhbiXTZd2YKgtjMofizpsr2QBPc41m5NTqRxAyFefaziBBvUjdHErmyg4",
  "key26": "txTN6fSjcVFhGGaXuNXz7bGGxx3gow8woS6KPfgSkpjXBzosLPNomib2ZwGgW5jLEknJm35xu5gxEqo8mDFafze",
  "key27": "5VEy8SjUjjezRHQkarSWN2mdCyCgTgzuapUxUBCkAFa7idpFPZqit1GkpEF8qWgiFbBhHc7fw6s2pqvhCQDzBrmz",
  "key28": "ZbzNLCEUjiLzhvHDBFjW7NiFwTJ8SSuHzdNuVTQW3d3dN5rLRPumBdkTRH8MFTwZrJdd4nFxpdk1oCQQpaw3Vtp",
  "key29": "4L9ZyEcbJ9NjBX1ejV16AQxPJacMWFftMuNaEDivKCVQrJ95v95G9DqngqusvPzrRdLmdtSpwcZnX2GTiEsLnn3C",
  "key30": "XpJvah2d2m4YsJySuYrmtBB6QPv2csrwjLKTg2b2k9fnMgMEpvPLi1sPF6EaqLgSJbf3JCCdYdPW8JAgn9VF4gh",
  "key31": "2Dh1jkpezdWu2mYCKpiNGSgnM6qDgwgLNjeCrDhoF3b8ri33wNtN8A5ukRSE8yAQYBuWeHLsP43h6B4GSYjJZTHc",
  "key32": "533e8rVtwoEKX2hsqN7eWNavJKBmp9vQoCbmySMKj2Q7Ad62ebGvdWYdK5UmzanS5R4dDJP6z6vhaw1KJc2VjtPC",
  "key33": "4gq8zo8QcSxjJHLKTD1moW8HhjUXZwj3BALrUgJyRT6ttDUZGPH9h3wsz5dxRWg5JonGXPaYEFgFuse8QGX9wRXo",
  "key34": "2TBZcZCHoh989pRNao7Pmd78ioh8QUPjNoCsu7SFN4cLMMJwPis8omJ5HZXYAYDrvRV6zB6F6jZ9aKGCuQQd6PVu",
  "key35": "3E4SwKfYgvMbqAdg65xotWvchoacmJSa98MKzLk1qBPr1wP8A5nLUKpJdHvB3drCeaXXBVYGb5wbLy1cMYfC7zU8",
  "key36": "5ZiVi929aaLrim2ecjWeibX2JLyGLYQuiex2d7tgaX42swq36GWh99c9YmJA3sUv8gfYhs8nPxYME5w6F3bJ8tCJ",
  "key37": "2RcUFtyC1CrTWrhM68nX4JzQD5u46NCNuXtp8XebfHh1amTbT6pTPuATVF65BzYbeJTsTxB18A9sQCocptw7jJqd",
  "key38": "2eXNTPdMb8MQnP55d9BZWSD65aNdGwZQKrMgTw5f7dMroka3jDpaReP7VToFFJJDyWSmAE14ovewZJCS32nCDmaM",
  "key39": "2gELyNbiNcEJYTaco78XjuGBT6JGanpRSH3v12roeLKrXh2SCasWfzJ4F93MixnoeLtihLk4Kn1GehVmbMPFopM9",
  "key40": "4kqRFifzm2b3geupyxYc8ite1r5LjxHBYfGwAGEn4VhWKqhHaK2XucQz76gZyU8GdZCqQzr5pjgcMBSNPiXvmHKw",
  "key41": "5sLMAKsLUML63YF2jr4q6T7v3rXsfYAXhx1dtd76gsM4AU4ArcKuyU7on5K4ZME9V9QDHjJ3tKB7qpt3hdioHjc3",
  "key42": "4L4WZ3qC9BhCy3KyKo8CATMUrnZ5B4CbwpAY2MMe13LaFFf2eTmLwMHD7jkLBK1tQmsNPceogTYx55BxPZKEdYp2",
  "key43": "4KKr45HiMH7ZeXc3GDWnykDUrXDQxZXytwifsykLQgFD4W3Ftc7PyzLYzUD4wEbizCQnwmaN8j2seMN9uJjYVQra",
  "key44": "5FMjdm7T1ZgbbJXDyPNgejp8EuyngFdxW2LAqzf83JRHKJnnednCD6sWENYq74FyiYVVa1wPLwuidbEqUNfGsPkP",
  "key45": "EVhgWUz4gJuYWwQj9rufTgaDMYLev8FCqdkvbo63BoZNLaqENLT3fWW5wRCV1oSm4h6qL6BmKrPfH7RVx91toti",
  "key46": "4UYFm68UV2cuUNhNeYMk3TPJbmduL54JfnVtwzX4c2fASzA62aqRUZUxXrpNrbqK4RQznjjNovT64tWMUxjUodXP",
  "key47": "3YSTE2VhB4qtJcRBMnwRVMgAqdyvpL8GZGz9vESaDB33die2nS1HmHXkiqQtdpWnJXLnJbQtezUU1NnLWhnfobMu",
  "key48": "58z43AvsmFW4QxE1cvq7puNA7UTjeDQDifWPyqCt8fW44iurVwQKMLs93UpQFvE1QqN5pyB1Ho9Ahi6QeRies2iy"
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
