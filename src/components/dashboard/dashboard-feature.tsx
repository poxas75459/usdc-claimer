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
    "BL1fAUSEWsUs4pK9vreffZBWE8nxr5vpFAFGS7od63jwpRNqEgigHVDBfoTe4vJjSSTpAVQEu27XsNQM8gwK1vx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KXk4C2kdYNL5LNUaZbKJoja3VN6qm5hfmccWZ4u5VeYoWVrnVv4Byf3LKi3ifeoUJHBSt7vjuygiJgNuEV16zdd",
  "key1": "5MQwbrdqNjBDzw5y1Y4Y1aGtfexN7mM4h6kqCuAPgSdff9LtKn4nLQfufpgp33w1GBHcBL2Fi8dwwyJTuphFCaA5",
  "key2": "43fNbivvCfD3mLqyZBgxaC5fLprXCp4ATHryietwCkA4x9uP59zooRyEhV4RWB84SiWJavaQM4MthUTn1MGJq7KC",
  "key3": "2RxFcc4JQEDigQ5uq7v4p4r5fz6FQtGvBLuhK8cCmaF5crzpdE4TvxRWLnXaKdnAPT1yXmvGNvT8a4Z3NBt2wJNE",
  "key4": "3Nh7wkqapvZYj5AeaT9UaVN3eZVsCu2mR22DbAnpe1g7bvULHr63FhKrna9eDmDCK5GeQchiaor4bRaQK8kqzz1j",
  "key5": "5NHxg7mShD9DChrwom8PPBjqPYDqTioXgsRdZuP23TFGjVH97cvVoibmxxmCeFqifWNhMQjo1UaR4hbeGwDhuFgP",
  "key6": "5s5jr1LPyiisQ14HBJDEbDeaj4XFwB8TaCzDVX6P7JY7qTbtxiUNhXzitzzCK27L8LAdb5ydJkunC8Lc1MWw4Yzj",
  "key7": "3wEDeC8GBrhLwRQCPXbkgFgcq7Jeui26Zj8pKpDtqiiSNp6b6Hm5U73MBYZwARVec79ofRLRHzMJSgny1EiMhCdh",
  "key8": "5ZGCw98smp7KEPWoDPdjFgCAAvhfVHGYo9xPDxd29VtCqTbbFVqYxdzMTmnbftEoHbjFbs3VV5zPwMR6DDt5waVA",
  "key9": "65xeTkseoEDk9kr6vRvGXNS9YpoVGN8xERRwZnUQJ1Rco4Tqndkg1aBo3Up2uCVX1HKkhVZbXBguUCQ3jXBty1Rq",
  "key10": "58abfUEQKevB6Qu76d8wkb9x4X2VYddx7dCU4Ene5RdBTE1XcZyKqJwb5KsmEyMcq1BS5B8MksKGRUbEJByg1hBU",
  "key11": "4UVifBwWzvQiqrDuq25vUmevBLidhdwAApUCZMZ8FHG7AetH24W9edyfztmJu9iVhYqz7dvEuRYST6ZPnhDZAVsT",
  "key12": "2he66rApAQK5pR8SPM8oQY5fthip25aG7g5XFkrSQ1KoSPPe2sNHH9YK1dCjcAqcuDjEMip6EdX4Qe3J2jka7ZH1",
  "key13": "5S2hk2VCAVXRK6L3p8Wjby7eWFGVmTXPk8f4GdfH8taGjJXcc7jsokjMAG3KQGdd9KdqhubJuG7rRJS3sRFu1iK9",
  "key14": "3GFFgxciZ56CRZKUj4EA2wHzmsJNosxejVSJuCek16zfjZPYiKRiTWzMWnC5mMTYfjLADfos92veyq4Qb3b8xffw",
  "key15": "2SeYjSL6Pxch8YFUzRWaZZuhycJ7bt6Wd79sajg568gRDj7ZLdihb4gKaKPJQ8P7R2nw7Z9Y8NBmubLfCReDRRtu",
  "key16": "5QiGg3nFBTxg3FTw595MmPc9nEfPuVKEoL8YDvg2bNLagM77EeGLD5dokjuHaoxPzAWkcYg8y7Myx9tYWKSyUvma",
  "key17": "4cbMgq28KSHdyyd83DYtvBWaby8Fh4qPe1PR7hVhJxosSFj14AyJAQztp1nPeazAuQ61QvkiUHnfpiiVap9NqZd9",
  "key18": "5WJXVkgcDqcsBBy8F7W9pwFARgPdoY7qQX8WngwDNp78PatXmba8UPnyytgbhqAesZ2Yr3KAJJGZLopdxn59hwUB",
  "key19": "2qGDLDHf78af4ZKE3pC8yBTkKBhQGvSw3EjsvGCa24An2evwfY5Uet5oZFvtGrVtkV8zmLtGWzBsC3omfd3PYy4P",
  "key20": "5AL29SqbHtwD5wJoTwpC5mGKKbcjcdahze9pinkhyA2RYDsnsqicZKXYLFundk8Yp4qzq8qGgKvvrmUPEduGEJoj",
  "key21": "3u5KbvfgoEiWpSK6yA8HoyKU9Z76bm3gTQ5tafGYDn6BumrBmx6FcKuTUTuRwksvgfMTyQEGCeEzgdhYxKG5sn4Y",
  "key22": "3zMzgg4mXqGQ5Au8DsBvSwoAkKdKp54zjCYxbyvf6cCe7aRseHFZphCa5q8j2DPwcWwrwzXkUV49jkyqD5qK2efm",
  "key23": "4aetzrDk6A95C7FDgYVNmRPvH9pUNW8PBcWPzSxAhpqhEYPzvk6R9jmjqDBLRNAGLKdNHPBzRcVxKcdyg7qAnfCh",
  "key24": "2w5Vir9LQHVhJuvRwNdLpBiGje9XV7xugKJxYfsXFVnXrXvrub3fEknQH2qJVA9MQejAahpcaoTpHQLyaTiXXKQ2",
  "key25": "eKAchBvjuGQzsRbLsEQEqyXgSaxfrTDoTi8mNV7qcq4M4n6RidqYXV36XmvdzvDtZ9nYZvgAFdL9vwLgRpWABi9",
  "key26": "22D6zVPPHLDjB1kM7UZibkPedLM2Gugo45YYEsDGr9mJ4tpGN8cakjwgDUr8WtkMHhMHbbGXYmmvu5uDSYY4wie2",
  "key27": "5hw5vZijoQp7tPYSLPHN96qtC8t6Jc9tB7qVdEzqh1fsERF87Vv6L6wFXWEz9Rci6T4yhj3tjU2Usr4bysbqa2vS",
  "key28": "3HQf19K6MQ542wUpfwgxmU8nUnNhbqnPTrQiXbbNf4Gyt9pgbC7Z9P51iMrCBrZoTX56LiBmiixnaNXJSW7oiTGN",
  "key29": "2NgjK93dGChyamnnqXALnEfae36fQruW3Nn2TvfFk6oYXbz2AjAjiRm3pa5PBKSH2htaR7ATF5x5PsjiHgEQCa4D",
  "key30": "2x38gQXQC57iTMopXtTfgPg9xcRNmc56WyJkXiKcoDxEKN5AiHcQBfgdPdCPZQAyPeaHyXCgEztFiB8w9D8mxsNy",
  "key31": "2AUaYi3TYQ59LaMD3HV1oAVHy4tPkivvFTBkonByXQ49gcUgVHpRLn8gxkLzsX4hvaadMfYGYctup8kbVk4kpUSJ",
  "key32": "tpWytmcMGfUZvGCze9zZ7ExHGiwri2qiGnuRt9rgu3M2h11jDgEVsBvY3GZmCUyMjjPQpXNhNufduxN5tyKqF8D",
  "key33": "5k6GaCS1d5styNZWJgQcFTxgUyNSNsvyvnZbrwJ56uzioUM9UAaoGvvmAruZMUCsJdfKzBwowZFKYUYa31CNQJWQ",
  "key34": "2QM3DU5adsZQdaocDLza12YnT83jxuxntPmuJQs8SMNeYkqLx5nysnQZi55kX79q8VQ4B6i9tNLQJUwv9zGp8VSt",
  "key35": "64WQrjtsgGUeFV6iY2H8ain2mLmmLyTZGQoJKUHES5XxedFSmQTYuC4FLPwuMdhVqj9RodMtec4pHBya7KasFUxo",
  "key36": "qgBE2u7XXsfiTQNkv8SL5oo39M21DHi3ugBaNGFCWCpVw4NcCzAStX8C4g2mCubbT8ABeYg4er43P7e4nudpX7i",
  "key37": "4puVnwTHWKS3LvAw7pDe9HjKzSjCjfMm1ErzaC7FS4jDb5WpV5bX1LsWQfogWzfex5NCdgMLw2AcyMhEvuscULG1",
  "key38": "3mojUavvzR3FMyJq1eJvY1ifwdKQEQeRYgFdXRX8rcGNXa9gheMn2ixbDXq8kM3DgXSgnnsMP8zhDHwYRsnRDqbM",
  "key39": "PRnSrENRpYZQuQg4oZjb654E1H36AmNWVsmxAyJuJuWKJcMab6oJXec2bZHj7R2YYi5gNGQdfmaxvEr2TYUgaAf",
  "key40": "3t5ZMgHiwFbyatRx13PqVdzTejEBkznHMjcEMASj6V3S99shEz35kTxrWwcFzorMRfMiekpnkiWski9So4jryrYJ",
  "key41": "3hfcrJG8weSrXjGQZh9R6TFhkCEjwM93ySPZKc5tPqjhrMDyEvXbicJHJXwmJwWeedtDVtqDZfJgMDvVwQNwYZj3",
  "key42": "2hXaatkXDU4W36eK6DrLtVfbtHpNLXypVzKfdJtDxFrJGkcejatvGk8s89uJpwdueQBWvyh52Y17J5ceJqcHUjs1",
  "key43": "dfj8L9oRukAQZUmdaxFGjcPJf3RPgYL7JXNNug7PPSgBsnybdVmNVGXoFNpAX8qk5H76FyyQKEcQ13eQaRK5MK3",
  "key44": "5mBLnhZUjSjK43MJ21qdSTcL1qu5xoX6rDDtrArR9eexTxx3yTUwuVk1gxRjqxzs67ZrFcuzvqZc5UwPYfz3Hqrz",
  "key45": "ndWLrqpiyJDVKPaUpYXbJc8Bq5DehXgPo14aXu6tsv9z1GnRGJUzpwZHQvTYUwQLt3kgckMs6ecfgzFmx9T84z4",
  "key46": "giCK2xQVtbzXWUdPS4FC4vHBfyKHANfQZFehmHqgvLmKtV3y3rErj4ivvRBJAM5aA72LU1cGidckf1Z3bSb8LXq",
  "key47": "Qq4UQ3p19AGgu1PHGKY9G8jQhsf7kjbv2BL5cBNjvpiXkkU8xf4Vj9WmrbXqpd8fPu92Fqjj2tEDu9ueuNWrNUa",
  "key48": "3QSouEsX6tkk8BWox7BRcqmdGN2ZAyw8xFm7XqNYLgyNRQkj4CZUWDGF4z7hnhuZvgdzTEUNiVq5p69QsMRTqnTi",
  "key49": "3vkk4dfsCjKCvdHmbsmPRD5KqCA941mkRwCuWLVS9ZfDCfszhnmbXgcntRUk8K6ycbBQjpB6tRUPxYY3UPRp9kGA"
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
