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
    "3E9qgEaFf4kfx4tDfwYueToTf9CEyVSmTJ9Hvft4qAXeEay7bwNiNwRy71eZFNu19YMU5bEFYRvnqMCN4KGgiFni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SUiPQ9eyMYfB2cXWtJ77X92X3kxBr5U3HLJctPm1v5UAbujgAmff4MWc3th2YpH96kHf88pYAEy7vxuXmJi9Fdb",
  "key1": "xi9S7bzHVYpncJ1zD6hNEf2i7UG1gieRnuLjsQLJjwo3Cdoryp4PbZSaEqA3YfZtruANwTwzoaXPGh5zSADY4mi",
  "key2": "2yjgx8fEMy1LyhLec6SZPwspahUwtWxGehUe6UBDs7hmPYu4aMifydGXMBfjey7BvoHkgWvymeuMBHTJoVtBAN9P",
  "key3": "3Ky6GSf4n31RP9eFADYqpj1npzUU3XYHjmyHkiSb1XGrtfk5wHWrdPLJJYjkuDXBbAAzSzUrztQSzChwGBc3ZNjt",
  "key4": "3GHeNESKALfcpBmAL14JVNfVBbRjtYVWCQnbJ2nhbgehc9y2D4B4iutCHdLNdK4wZL4JhSpDVSg5BXxFmRDVvUeD",
  "key5": "5qNPNK3yGK3xsDAB4WWKpJ1huQtjBVkCSAZCZddBGwAi9KiNTKTGAWsN883N72J4c2VETrmVaXXqTafgQV6x6Ey8",
  "key6": "gqKzNV9Qm9oUjtj4aphJ2u9RMNrvqbL1b5LvzT9Wpbz84NSjK16Rgi2rwxnDeXXaQ9M9jqeBfnvZT7LDf2Wa47p",
  "key7": "2FfNWUURZzFgmENFiAFzW1uuhihqJ5o3KbnDMFpg7fFaL3cmyAM3mbqVw2QwrUhwKkPZNCLNbqGpFhadCNDUbbFH",
  "key8": "3FeifFnSTWDb9fVGWNVnWXizaHhvoVxzYJ6fckarowu1vy55ix4MFYqzfekGhzjWhQiKJweVxysAB3tGutxDA7PK",
  "key9": "65U1FsPkiYzdms1jaf757E63kYAuHWJBvTiWPVjabPL4tUEAz1pux6ey9bUCeYJcqzSog6RfiKAanvkhs6NonPx6",
  "key10": "65QFgvKoeQ626dokSdDS1crjhgJs9LXn6qdBDjyeuk574xPg8UGTZmn7cuXsXbmdemFhtHGfd8TcEyHMzbM4StZG",
  "key11": "5B6k4vA8dKi12AhHm76UrtgmJ6tw6u5omW4M22Qt365EbvW7iwjeDV3WkVx8NiTmPrMbSY2WhVquUAr27oMzKKCg",
  "key12": "2o8Sf1tRAKCxv1xLVZnx1vLyvLxbP43UciFDTm8Xay2riYyM9w2TbWRpEQk5CLyCMPRoZPzx8PSXC5ekxGgpevGP",
  "key13": "5RkjnXoTK7uTG8sJnV2dG96oTi1xcXXgaHkXNa9LYetZNpFFazwpHgaopVszBoZmaDTyjBr12pX74opRJPJ5mMfz",
  "key14": "denpwC5Wau9hDUxcadFyAMXJ2ncpxKMDAnd3sGRugHjea2Yq2fWtX9viY7wqLk55caCs2BtMWZWX8v47m4AJ9xC",
  "key15": "4pA5YdwMFZLYRnCJaWdT3TJzHsMwJ4JNzw9gZZq1Qv7HL3DDegAvdteGzVP588VRz84Vw3wTSZY5sNZrWdSVNexj",
  "key16": "526uj2Nx6osyspDbpEpG24m51yzpvU91i2KUsfQwwoNsYcxa4rVth4aGsBWDN97s5YTP666Up774zA6zZ45DEeET",
  "key17": "DkAbRcsSjJDR63uRmPR7RWRgGvy8BwFBwhMRL2bXu7kJwqRC4tzx9wNiNsgpiGp4xdQHGmmewqxoCaNgoUAkrcL",
  "key18": "4TVymcg4Bn45fGtfFxWYw5q9gK7bxUxEv6SbCTZJGsXgmjHPdBkQW7DJPn8AdBKVUVCZfsj2ZgvMnGUPoGJQq7WA",
  "key19": "9m7CBJUf4iQHnNB1o8ohFazEVDGNmTWvXWUVxPee1g8ZKZ7zA3nyiBtyKCSWxuTGCwBDv2BtdTW8XzthkuQXz94",
  "key20": "3BkhthQn4gBAvRfFn6gKGX6THWGcGWATrUhs4aoy1m9QuFF48vTtQ3c5Qr1ZoBprLpQ5TeZ6Q3su5EgMxLJs5mBf",
  "key21": "5SEV2h4uiwxQbLjgwaza8wTK5zQANV3bf4r5rrXv4PhHXEnEVCYmQ6dnq85UmnWHfSdgn8VXTERric5hSKaby3y5",
  "key22": "3PUqohT7Pcfoi28wbF2iQVQDBH1bMhwU2d39e37B7RY4J5Apky4QHbfkftdf8b4XweWZee2rH2V22EdrzgLEBfk2",
  "key23": "3d14iXq7tnjatH8hhRWvFkWXjuPwTSnDQLgv3DadPCnpmLFbaYzqfFNeVEYZzu2K4ZAko34c8xiuxjPJsXXkg24Y",
  "key24": "qqRh9v13dHVmK1G1sRuuhEmsbWEeQNoBkPv9F1L2baXXRaJGDbbodR99aDbNj7M5CcCJorGAgVaEbdVer1tdwTk",
  "key25": "2nHosshDNDhrFUFDSPFvxmLWpBxPyZbwETpBR8upFJy1S3aGGJ4dX68epgHDXKY8hgXLadmfDtUSr6ZYcknmvjeY",
  "key26": "4gHxFYH3RWbs8CMA2Dr2KTtyZkizXcXjLZMcHPVAxTvZSTNF433bEzE5mRD2AJmKiuCA4nedkdLPUnQ16A3Ra74r",
  "key27": "3H9tsrQH9L6KfTfLLwT2U94KCpCdPHzbnZAL8yr3YWvFDx1bcbRmAk767RKSegdbjg3zhsUSfMhZn1hn8Wj22Vav",
  "key28": "2BNJcGe5ykoiMKPdaP38gV9JoBWgsQUxobdGWWVAd2L5inj82y8p6fMQX1ee2WNqzDft28A42PaeYgCSACsrdBDR",
  "key29": "X2gonKRdZYxK9BwH5WPEJgg82xWbcS6ANaK98v6WYMydtVbXQmEro4gHubmF1hUwUpSLA7bjunS2thf7Y68vM2k",
  "key30": "tYsDLRXwdBgmngKWXXuqMM1bEfVeJNum9uFZeCtg3YWKsNWdAfwj1nJfzV2ha1CXCwM8tDLjbMz2495jdLxvHW3",
  "key31": "sXqFZbYmTR3iWzspKYHE8W6sYNaxcEMWUUkhko34P5LNwt9hmpiU8d1U6Gg3USaC56jEFocGi2ef9uPk1a4GWMe",
  "key32": "5cExzLi3gz7PVKg8t9HDTzFZ2PnEsjy4eF2SSGcfNzN8Fvt76jun9REAaAZz4woXU38doyNyhTfyETNM3w2dLTx",
  "key33": "5B31p9YEJxTUzoboERkGHpKvNAUJRCw6UgvEAoEaewwZd9XiWybAk7Sd64FufJnRntvTwn8Wzt6jsdMojyowLtrK",
  "key34": "427kRhGmHJqTzqYGSBwxD9incaJ27RwrwRct3MwDgvi3z8Lg6ocDmvafj2T3aJ8icN67sGUM6rBrbsBP7rzVeU9f",
  "key35": "2bkkW6LJ6eAPbTE7qtS4Mkc2LCS2iR2TPpRF4QAp1eAHuHPaaKWsZJqG7S4mEjGPyyGbZwUb2twsxz9jwmSC5CJx",
  "key36": "4goqUHkB2mWHUFMLsRWGD3fRyPRiD3JkcJb7XPo9VUZk5Zi7y2pNrQSMjEf1QicSx1zuudUxcWQ6q8nC2ussgha8",
  "key37": "4XDdqyuJxe4NEAuTwyDWByFh51xjtPGgBDhnAPzpXT95HW6sWLsnjnqthvupQjbcap9HdJdqXRVrrihdSrJMXCa9",
  "key38": "3R7ZK8oGeR6g4mxpxonqyQB6c7L523E34ikd9gZyWFwQDSEmVdi89BDTaPtxNw89NPwqC3zUeNk2Z5caYdpWLxDp",
  "key39": "5rgoNswE4PgzPkGkDR8NUVu91YFQeHA2zZjhQysSYPeiQrc8pL2dQSub6AyX1i2wccQAcnt2NhJmLYPihG9gNtPW",
  "key40": "3D57DmtfNYKZFmvXQBr2EsJBihaykCvF3RZ5zjDfc68BmKTbLzVyE1otswrtZCbUahw5LeNM8RexfcEiAHYw3E5y",
  "key41": "kCiJQoc3rQyd4jZFxs89Wb7oR28X8yXT78dSFrM1cvR6trM1AdFUEGcqr26VLN8yUPkvxYyp5qkrVMaQTJYv7PN",
  "key42": "2zuY3jDwXHipMbCrQUxurr17WQu39RxyZdUKY6DUuGQfihRfTm4yCJyfV2Frz8c2LouwRkpnDtU7iTKGpbU12NmX",
  "key43": "LN7pyRj21iwrC6ojjcsYeS6NJdcqhB6546z5tKK5SafceUh1PHZuKGezjcfsp3UpLKqwQwHHpo2cUVkpm8RpCX8",
  "key44": "RSk1RqEc27dPz16MbDWyKUHVYE5quMWfj5TBucCzm71bVQdnTfTXjmbZ95f3hqKWG1kk1B4eZDT3gZGocyATdu8",
  "key45": "5ykAaHqKaEiSm4tBUU9ZMo42kDKtJfWG49HwRXvkNwtApLqMvzb3byn4hEvVD1Jg8n4TCbEPdfBzMt2pm263xibY",
  "key46": "5pB5kp23SYoV8WuJeUHSCkgDSbpXRhbxHEvGCJELbxmNLFLubrTw1iHJBY5yiRBj7hW8xvcuivhcaMsyaTJyr165",
  "key47": "3oZDLxPbky3upqqaHHJirmnEWrkVz2WkYLbZaJQb4xwQVGQDRzpy2GiaS4Reuq4pN6Cz2G6eM2G8ZyADpkSYCwYQ"
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
