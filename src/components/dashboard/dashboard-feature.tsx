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
    "4WhgGUPWqAKEz8V1bNKVCc7unMQNS3t9wdaE6YRfjZDmU6Csth2M8HwitPxhfMj8RLgw6xiuGk6CoAKpsHx5oP2v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fraehVZkbt25HmDfTr634CyJiRNigs4zerFoQoWDBMMJQaQwJNi5ZwYJdxF438KerZbEPL2aBnXMafd84uGc7j",
  "key1": "4mf7qaDRpGUBRBStJK4s9Xbpxf4xtFNpY9hjXy9WifA7AJgFVjZVv6CcFGjsqFQzJueEyTsyJrm5BHfKCGJcJLaX",
  "key2": "57iyfPR3B3hnLKu628egRkZCcBoXjX9hSUpacB1URmLA99SVdRxy1PprkJf2hAvftsDT7cruYigqGhNT1uqc9Brd",
  "key3": "3rBst3NTrhhHcViUYwtjyQqTbPBmqLhY5YQVwF1BKmZRZ2zHmAc141Q2tzCEf7rkP3xQkxBYCGcta2tpSLHLewUN",
  "key4": "5nFUPX6vnrXT8aGJYaULAFkGeKafrXGyB3k3HXoUvvr2xv3kDVADQrxmGyuSLiNwNT5FxGJRe2XMy6KEXUktnkLS",
  "key5": "57ToCjy4AVKQ1rjcFkitcG5K7gmEbSgftYmQhNMLwu4R9HEdnoFyVLH64tv1evLeJSro9pW2KAw1GYHKGicS8TaA",
  "key6": "4JqzMvYHmq6HzTX9rffzh4sHuqbGq7Kx42UVbhBAoFJu7iQ3se1vNzTt3cmK3aH7PRmRUVDyzzksgmimqGE6FEx6",
  "key7": "5U9prwYyFhMEmYPDVABgpgLhaqduv7AcgsK5i7Xbd5mNmuM34YMvZFsG8dmDzPQ4arVhww7WdwSmfK446voBH3Kn",
  "key8": "tmaxiY8TBTj93J3F6iwoNA7oAbUNpN8nZgiQ7sR1aJby5w9x6mjMyTRWR1Pp2CUAnYVqM4yi11RyUKrbv4F2izy",
  "key9": "4pZrdvWa87TSgv34bcKYC2iwzQEZM5vWj4Jo6TUDmEtyvkiyUjPxCmbvAr9zVvy1fXucryPssPbwoaQYc9Sf94FL",
  "key10": "31uPTa4xGJW7QUfpz1DH54FA4J222o6jd1eDUdLQDz3RQ5Gmn4hsWrwLcC6AWNDw4oxDdGVHHsd1gY8ckCVQZvnR",
  "key11": "4BkoGobvvjeUjVLYj4AMJ258fks2zsdbAWntNxsE7i5JjAC4fzohDH4SAAzBTfFsWpK9bEBWG71wTGrfNRcspauA",
  "key12": "i4LJksN8L6xsPQ6GjUF2vvGiV8hy2r6XkhnQGjijgp2VhcQP1xwjjY4H5ZiwcuC5ckd92hMDZ85PkjDVoSRSKmv",
  "key13": "2ACXNn8KMQgRXe8sFQRmFZFXwA9Tnqs4diD2nmVbJDdh8ZRCwbPRsRYfqh35opGCC8QnSt7LW7LTFZmsyKVxYSqK",
  "key14": "vS73eddGHfwZ7A62pC7A1KtJfBDXtLEgRAHmdTcX36xnmSftEs5LLrjavJhaW2rZQwT56EwMdSgfAC19fC7MpuV",
  "key15": "5e76cK3942af3nEEag6kqRpVWA61cewAWS84FVK7d2b6wqNpmR2ds6geRR2wFMRCXGF4DnZMM2Sf4cXxibxbEdMm",
  "key16": "3ufaD8TUyP6xQtbcf6MGduhQxKQaXxKM76S2WPR6zVxCzrcmHbvk7GsiN7Mg76Qy6W5VtkLEtqrFaMB4JcKc788x",
  "key17": "5K3Ai4x9xzDUSPgPLGfu9Gsv6tptEDJZeerGSifvofCc7dgKXpR1AtRf31Y4hk1ed4NZoNVRkLiVYegEGx1SwUfw",
  "key18": "7eKCDFW8Ay2pk1kgYmCYghgPokoT7yposkM1QdgGmTRBaYRWqmWdQYXPvGYaVB41ZdZHjigdpsGvWacys2sAbWQ",
  "key19": "4ExiCBi2XHcf9UM1mT1eCHZohGqTaMg5aXEwEWxpFRi5pQHGM88j7JGtx6NKiiAB5JDnTVjkzgfFFNa7w7BGhmAi",
  "key20": "33YjDuEDBei9TmcS8f8jU4DGTeS9tjwiK8Dec57ekYXn25K28CpGhMW2zqMcVBCGqDSGJ8pbgszqr6NmqPnP9Pb",
  "key21": "5gNFEjdGyecuU5RGLfuJ1TyHnccLRacBDkWLQZD2e8rRCeZ2XjuuFhMrcD5jvPqppKqMEeNoHcQthFqRpBVh7pZ4",
  "key22": "g4kwaJRDVJ4zjMWCdesVJEBpft4m12ZJo45fVChCGwBCNoAXqzmFAB4MXjrvgBqFbKSEFBXDLyP1sb7N4jvUxto",
  "key23": "56M6KWm54Nbs67nxseTD7ZVRW7tbdtcxTzwbxWLh87RK22TM2ZwF3ZYrXb1t4xmdsPdVF75x5FzU3psrKXSx7HhE",
  "key24": "qCru3P2MYzzHJRp86u3LaBb4jj2cXGqMcH63C5c8cUDvGNS9o7CzmFqJHmD4dczvska2gB1NUp1qqXQ4gHrP1LW",
  "key25": "2JkYQ3oyjGuDuRirVBURyAwBsF5atVfhssynTcWHjVQKZXgRq3oSVctWbPoQh2pjTz9wd5ajkG2pT13xVNpjqLph",
  "key26": "3zSRrRGJiZz8mqquPHmbojPxzs36NA5cSNDfDMzGP3NctyXidEUZyGMZ3UiS6WUKGCosGxoe4QRZ39KH34XxiMm6",
  "key27": "koWXi2UtXFMHKwhGPdsWGK5rRXs3LHGFDbEQ7iGwrqSPdQZGiLJ7P7hF6DEZ54tStjqN754oAgUNG5eE1HD5nCc",
  "key28": "5UJPJ1wDvfpayLW4My8nU2qdgjQrNDhWkxWnoaL4Ygk7jFqSLGdDPudp5DvH3kwVhWai9ZbdtQnBVSAptHZ2prdn",
  "key29": "U73trBdJb9agY73VaRs7YMWTVkxPhQ9iF1NG5S716HEMZJYGS1Umzd2Cqetc9eZjEvXZs4C3gBB15cnYAok5tPG",
  "key30": "31JS51ThmoohVqS12SYj5HYd7v1KJnRMFRRBFXcUixceyJw7JpvHRVPDYv47gDHqJ9RroojFTh6MFNkLwq1hnDhx",
  "key31": "5pxFaosQgAAvLm6Upo9ug5aCnbboqKbNLcv5LkakBYS9P6ChXTECSE97dkx73HA4sYyDQ3WXYcXkt2Cx1oxQ58Ya",
  "key32": "5DuPRwLBM3HwRXX8iWidtbDVE5F5WhbkbYe9qphTTDD6ZkiKTxXJK8bKQfbog8fFcDcwms1DzgwLKS4BaWGmpsLS",
  "key33": "2Br2h55vmNxCUrLZySVDkwbUCdiGhAbL8meQ17huy65N9XL5uxhvSqmkqtfMNWk6iwHNr8FdZxdFYu8ZFVymwZ8D",
  "key34": "2pxxSE2y1cX9VvRwWAYQg3DxV2G8KisXr2qiS2PLd2JhHG5A5q2qrhQ3QopUAw6t5uMTf8Mu5jssKdsb2cG1CTDp",
  "key35": "63zcYTgrXtKTSMdcjenu22ugWtUDUmTD1d4HZG4HMUgtFuLn5TatdDFBXgzRVpP11tLdgkRG4nhX16xDS8oRd3Ju",
  "key36": "TbbyqVPjanfpBFAG8vt9v1JF5jt2V8k8qAHsBDrMTrjx5pRMcqEzsQnFFsy4oFxec4kvER76VQkyS1Tok79XkPp",
  "key37": "2i9sLoAz3Fqz2rNLp4V6BCgnahGpWc8ZZvVCSQoNsVVy6me5CSDiP6W5b4Eg5HjuFHAi24SUDGW9obeXFqAcbyS8",
  "key38": "5PimBQ4Wnkjx8CFG5xZXyf8Dbv48ScgmTmixuygDXMZNTuxu7QB738GBXpLR5RDppurRZVAYaamBNUmo7HXfvy4y",
  "key39": "2b4Lcnqiri2CKx1YkXWT4NUgKGYovoDJC8BvVvK1cGgL58fmeST6mm5i31wGznnqHskF7f7EGphaMki53s8dtW96",
  "key40": "45VL1zgxRf3hAUH7U8msCy3pYMGmJ5ajpfFvKpqFAoAZGjUUyeix7eCWLQNjCWRtiQk8uMv6DYwcm4SWuRYa54uV",
  "key41": "25dEP6tfU9NAL5pkmfCcxQNF7X5TFA8Y4zviTn6Y8Zb3CDRhGhX7687aK9tr1nLw8vpAw91RnfAG1zurUwj2FZbN",
  "key42": "3FqBtvbu5LwYEeHsc2amUqXRWQzqS2oWNEGGYNsLLDKJSnmAtPTTyHYmRZsv7gvAzKan4BCMPmuPpTNGUaeKLiTp",
  "key43": "tBQ7V5NwrEAJK1K6wyWHtw8W5KR93g7M6BLXthsDm46U1utgCcxoq433gbURknbcvkwXPjcgQjbwNW846hSecuX",
  "key44": "3GSC1GHCDhEFSAgXh536vh5Z7oRUhmtd1oy4j4tdnPqwFcXazPcJcj2iB844jeo9skjmGoECHNNzkUt44H98MVNm",
  "key45": "4mT5YRwQUkFmeWkHy49yzpAtF1gGpTMfpUm2qoeLnS8Y4U4zzZBEKG5dq89chRohfa7DkuJr8VdytaKbWag2nHfQ",
  "key46": "YHfTUvHFASZdYke6y698znavFf9HeNkzpNouXbSkpQW7u4DEoEYBZ6mR5D9wP4LFbDRipXU7YBM8jr8rLPmM4AH",
  "key47": "2Dt2t1adNnZ2FmaDeJYoecwQPfZ1anYYQYhejPdMyGyX7r8BCWgU1aZbWq25i9BKdL6jQoAhzrZvZCrYxDX145TD"
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
