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
    "3PsC48MZB8bYLi3yWtTRYTRCwJ5iDt6RFVNdsreuM7UtL4gDG5BAyBBnFPLqG6FhicXqEddBdmUiXb9NxWGUJbG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jLYhwV76983Tu7keRGpzSkiPBxTswPdiKo6MoErjVZm3GG7n4YkEX9CdMTpUgPjw9bbdzqCEkCU1HU1nTbbZV17",
  "key1": "2eXMQu1ziSUWKKxyUK2FXZS4CJFwWKR9ScS2rmTZZYpLRCw5U5Fkw5McNLR1XW1EU6SN3NkQJvGAv6WSyfw4bDPj",
  "key2": "eeFHnShwBeQCtF7jGjE5Mpso841EQckismcevggksxZj4kjC8VsJcN1Kh75Wd1NpUWmeaWAFbT8hubFUHege1Ro",
  "key3": "5pgBizXRiTQp2eF8QHoKuHLVrdbYZ3Q2umTE7iFUzm9m1BmasNF242ELLUXZX3kAcyU9kgoPjgwfwwUfs1Dqf9XT",
  "key4": "DKJB9dcZy6kgXNoPrxKmWPAjYcq5Jf9Hig89f5zWERKTfNLKWs6B7vKDPWHoavfsC2D7vVnojeaBHeuVdxGRM56",
  "key5": "S2gZpjp6Q7SPSuCZZGbJRbhYoSdycVT26szezoA5qz7vmmFZHJ96apLbtxa1eyJhHrA3Nt9dRioaVo37ugk39QZ",
  "key6": "2P3UxojKafZQc1bXRsc75zu8Kr7dJwgtGdUShLSasNpv26YRRPhK7GfLSanQKtGsbRWzzQnwRf7ZzMyf4SdWzXfy",
  "key7": "3B2pfSt7wqqRG9pNKjRrRxdQDivEaCKDGsubgzK95YPjiJAn5fp75FYCmuPxaZ4HjpkHx8KjyoPvFEeKDSDms1SY",
  "key8": "5DgSf7guAGdpdziBAWhv4xNoUJpks9Dwiody9BeRTPDju3NoLbhXgTXQbKuWiRaVFgERCBezDaAnFkaPb9BEnRU",
  "key9": "mhRi1mGAaY7A4VWVdihBNXuLSRd96o8Gos5kUSz5uQg8bKrV3CBobrScdbgBcbfBeQuRBy1n6ixSfYsc88NCEbe",
  "key10": "4YSpdsfKL7gMiLMrsf5WyjhdYBWxYBKZvhj9nE7FRzAtbp9sAdBAzBWP2cLwBcqkdFtCAae8j16Rt3tDx3s3gbYh",
  "key11": "5vfXUiwAJM5xzTNfm79RLMFVh8xhF7qP71K7xAYibXHiJ1xYXdc5o1fdrqi1AaSeAujkK94ATVK8bi4MTi4Emh2A",
  "key12": "5uKrBEnmGyeJ73JhA9kdkTi3QXgFy1mcE2wc2WWJXSCFxWontXLWAKUycTfEBNwHftRkbbAddBYTaZmPmbqxe3ZQ",
  "key13": "4umAxLKNG3Ke2Kpgutfp5RnZzxSSkQgE1SjwDRwk63PD3eXdzH21hBMKRWc2zH55axwXt2Lxs8ZfCD3hpgYazo3F",
  "key14": "67YXQJqMy35sFK6bVzp829AzN9pZeMNHBkXXodcgZc1FxaHus6XS35FdkasLYgK7qNFRqN9CQbv9xx5zszieRaiF",
  "key15": "5pHKBsoZaxSgUH7PzakdeQTHBdJvzX6shXNciSPbCkxxupqUuJJQ9w2YkEtCzxa8D62osvtsz9uNfkLvbNVn6jwn",
  "key16": "2q6Y9GWF46PhayaCVBtNLanfqr1NovR35RzwaLSkB4aN1WzMJGczpfN9xD813zXSVFc2nAxKchNYN59JsqV89mYv",
  "key17": "39QS6KbYQBbbjnwyEhnDNcsRJKwxrLBUHSR4WzR6WNEGvSiKQ3fySLv21R1eZSK2EPYqDV7HoNchzgNcjUB9abmo",
  "key18": "3J1tt6kgCsMDDoC9o7qKHbY7H1UegAHPt92aKjQ7KFSPcqavqbzEy1qLKyge59n68C2FmAukZFRjwtZGjNfyjL9f",
  "key19": "2UK364pxCPLuLK1RE8oG1docCVooGJN6EADwj64E6DBLgNJ3mFc3BqoDeRyT3onzWvR3vU4kfohSmy5cJfW5hK6o",
  "key20": "5EYxUKXNc8i9T6TmWtujppGf63m6ZmR7uTkXfud6WfQb4i1VQZUuvzb9TgUkGLqa8RcPcyPYUBV2jF8dCX8uiDUV",
  "key21": "3TaKiKwpE7qys33zjDXzEUebAVASZFPdHHBxUHbn2ypfXsBVUVjzFJ5RZ7ktwYBLLcQPxK8HSWHWmbwg6pdYfbUw",
  "key22": "2dbFpcNcUeJ9x3yCViTtHnzxLpWpSMJjPnV45RS3UTUTwVdYET1QfbnE1ggq3HhnJTQren8HK4rWrSWPE8XdcX7W",
  "key23": "NNYevzcw8AoqGnQndLDh6NdF5HKhshnJWstQakw3JEiGLUxx2aemCfoXDRTQmfcYaoRE78Gh8sfFdX2b3qq4bvx",
  "key24": "41M6tsWNCmC8DsanfZ3AKbWPtmMz1KA8ZH1rhiaFuugqvy3pBz8rA3BmXMQ6tpzagPJAm6my2CCNPbbGp4iMRuU6",
  "key25": "46hURRqkPgE4zHjsTfPZMAFKAKUVfMmkjcsFWQfj2MykLWGVoXPZiK63RPPDzRnjUDgGTNDGeMHijqFeNffCovi3",
  "key26": "JULyFnWF83ciqbhDk6yavHRaC2FsKLxmTBuNvPvLveF6io2Z9aqCEJsgYRLa4BzB2wwS2BxRTjyU3db3ZmJbBkm",
  "key27": "4pWpifi2qVbfUs1h9yuGvkizhbxGaujftntDwU8ycVNKLshPPvv88zCtJUyz57wKe8payMJbVhPqEBtJVvxXWFDj",
  "key28": "gkaRo3azSWmpMfjkxcNN6Lo1nL6k31gCVqcrREjRm1KdcX134bdB82ocLm3kfcL9Vik89RKLwx5SxnXESBy6wgY",
  "key29": "3ugHWiJZU3fDh3psDgKjuqbHQ1cf6P9CkJthJ5ULhGnQiiR7WMqwKsnka6LQCRBCzUiHH27nDGnXwjTCxtZFBTLu",
  "key30": "4tyToYd538Knmc9czgwkvVmHpte2zBfCZTPToGybJ5PQxqsg9nvyvW9spMAv1toECeRYWqRK6zXp2T2ooYdUkuba",
  "key31": "2WTdQ6P74Sh7aZQ9SdhoBpEhyrVRz6joCh88mgHkSvEKaZtdPqHM1sLRazCRWdP3k8tkgEPzWyxVaKTW2ta5Rgdt",
  "key32": "4BNucbPDem85PoVExcYwRSLXGNDoybwhcPQYQjhF1oZaTu2gLFGAqzFZtYYYS3NsGXwJSXP6ZqPcTQYB2GQnKkWH",
  "key33": "3RSuP7ykTFndQaGKcbjeHC2F4RyatfLNsSr5VkhkWZdSb4nLJiN8TV1Qg6XgLFKhcxLJtz3WpSkkCxiob7n3Hv1W",
  "key34": "5NUqGkBMn7as5r8u6mhNXJLHdQ8DmfRuptDrA1wQDCXP3QfVToiQUQP8GeiAcFsnj5eCYLYfo2viEGtJJABKacVf",
  "key35": "5TrjaRzGbe7SixjeaM6B2D7BzCBY1T5rqZyAi3h3QBi7k3pf7Q4JhQiPqtjaUKWVSDLrgsWYkpGQ4pVseS9WafhM",
  "key36": "5oNad3fQk6xqX5cc3Dumip5GhXWVN6obmV1ww8Fk8GGwmDV3G7qPP7snphUW8kKRuVqP1t9kvZcjVdeVquffB9ny",
  "key37": "3gJLHpZXr9QmLoWWoThs8MGJbBvCfRfFnQaQawm9XNdFEvPoVQq1XVc7EDjwfaiqyTuxENxKwGgU8hhwx4FzfoSe",
  "key38": "3WtRAboDeYfnT9sJmjEifKSFuyxCC5g1HD83U8NmWmQjahaTymG1R3ZJuu1HMkQPYdWQEkQiQXC8vgyZuMoM2TZU",
  "key39": "53VT3GLfugYthRMHzabthdXKcjwoSJtdeX84SoeSNoKEoyxvHCb1NqkoHozqin8SMbm35ZZikkStj9k7JRByjUNE",
  "key40": "4Y46idRNVCEmM67Thfv1FaNcwBFBEKqZwL7CGgZUJ3nFRWb95m1TjMnFZ37mjZsMNJ2STtQECNbs2qNKXc4ZWQ2",
  "key41": "4goZJwoGyBc7kgZWYZFPhVDKwkF8hsqpLaGa4ESz8mgPqCCYi87gGxh9pcPEWJwggHSLbMahRiNdbsGfkaRKfndA",
  "key42": "37hY9xZZg2EvaCtQ4gLA8fFobzqmsDBfxE3fJupVA9WfKEANowmymorSa8A77jBzG31fApgFngWBUmZVdWXxLS3k",
  "key43": "4cmXY9E7NFNYC3U3AEVMRCKS3a4e4wKwsqbbY6iJDyrt55BvsFALoeUUkM3TaYFzofSt51Hp7PTSr1EM88Xs9jRA",
  "key44": "2YpaJwg4KSbWZdLyxfeT9pfwy6yy9o7oGd3t3hqZwKPMebnyYKW5WJGcLyp4ZssBHtCUarW1vAunm6SKsJSAxhr2",
  "key45": "2tcQbDArQDYnCvkgqUE7WdTL944StqqR9NFNNDxvcGmQ7V6ZSUskpdiZq2LmxzfbbLZNWXn5qwJ4MX3oFHQuuaCB",
  "key46": "4sTVBtGS5J9bATHqxRZBXeV5yB2uunp8hsFwVcQj9jMfnzC2TDTnh26f8GAradtBVroKojoo3KkdJPLato28UwRE",
  "key47": "2DFFS9gJ19ZYFDMV9Dp38VGxAaSRPAyRFY1LFKKTeiFD9YsrbfywQPvqJFbRDGwZ7omfymBBLbin2ncAUR9Cj2PC",
  "key48": "3jjHYvFYGzZ2fkt1nqKtwDViaCkMScowhhdrZzFgyon2hNW3jszwLBDEvnsnAnATCtMLygWMKm1iwZHw9zqDLBjy",
  "key49": "2zoqbH5zksmpFXo9XhMnbRpQBuqfHBeQeE5AqghuPLAmCNhj9wAiMZu4Nht2T542FoMuCedJJ6qL6f6BxDvEiDHK"
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
