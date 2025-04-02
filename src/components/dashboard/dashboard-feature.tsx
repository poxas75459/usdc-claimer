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
    "4pkUyiCQHeiANV5pfyZapd8Ur7w3sKPJwBkpaZLatBmAMMWQSyCNRFNSaUg9Ctw7fBnryDB7no1nZvyPdphT3vMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eeTFLRiRVFinD46ceYiNiDTmDaGf7dc6LshizEjkcbXLY87qhSUAYUPiX9pxiyPgs71W8Xz13fznJ4uQDom2oDp",
  "key1": "5KpkTXTVhBqHc1PFQ6oRwduhbriTuGcFZTir8sLdmg4WxAJAEMtRgaB6RVATyNx9kpmWFGZ3djkXacmoiGwd3xfh",
  "key2": "4Mjx8EgNbPpr8CFtBav52KVMWW84AdnTVJGDRdKeRDxJJGrsuAecTNuS9mBMVrt39wbmqbGJf1qHFNKDdaxJVA3a",
  "key3": "v5Q3MGhADLSyCd2hGudrz5MBYbLdaizoKo1JY5zLD7YBzSD99KazKqoNFDuDEK2FQ2HGLc5ZXNLbnwfEFaHEm3c",
  "key4": "5vrgCpqkeViKi2mW4znoQwiC9Z6RakR6yGX3XPK7Vy6cByX1PBMVs1oUPKqk36MZ7MCSGvFj1J29YKKTThz7J4Bc",
  "key5": "2QhCe7AgCUrz3gQAomHccbtcG5tkfQtg99GBAuwimh1hnsmSAAcpcBZZZNTMrsdiacMNonjNMyNqYsBZfPKWzgiZ",
  "key6": "2Cjh5HqbUMy4UcGpZWjARZSVFLFwawmBMKFKr23iAKVuFJnXdWHf5f8v78MUzZ2eVehZ9CzTv3tNH4sxuHr9qTkX",
  "key7": "2iojUHp4CUdxqmvUQ53TDedJUQnReamyroYiuo1RAu8PYrTGkEwBW2Ep4YVoz5HSBeNqDUKouiuKV3CHnwRsG57V",
  "key8": "5JyYwW49y9FVFcb94PWJSrvkH5qN5KjcQefHnxV6EJcSjtWF6vZ3XJveNpYtdhBJXUAzaLWpfC7fCKanCXu3ydip",
  "key9": "4vZ6ER93cTn7kaoVF5qchn5qE5dnpzk9JCjBFmwdNa4FP1bzNpAf6QTmpwqbJoVdAWgZsYxwsvaJg1HmVHfvGhsu",
  "key10": "4cWSZLK3QwdYsvvLKksiyhGgnQgdGt7Pd3n6Tg3X7T5qCH9Do2ypLDQRqHFYqeEWbRBgBcBSVoxzkZzbveXuCizb",
  "key11": "4A2or4xud15vWcEtoDgiTdUugwenmQoNZQUnxyDFv6FoQdA36hdKuJhYxDHTz9dXBo8AhPXfp7s24jzRNoNiQSjB",
  "key12": "3ZJBguoGjanKZaunEsde5SVZKe2UkRWHQLgh1LZ3mfM5BKAeZxbxNKxoHAsBtkUgpcKykpGMcQBDRS7LKbXCUZ4T",
  "key13": "3GrBeSe9obmMB6WkiZ5t28sdnKWnR7E8p36CtQoUsMCXzWVv6nuPYmRA97WPLLUogvZd1m5CH5BPFKsqeGwsz2iv",
  "key14": "5uGussoptSTUCxkwJqQ6Z6hPZF2Ksebs7MWgPysxoFZcCTPd76Eh3bzziUsEKS82QQyC964XFmjAowsHQqHrpwEA",
  "key15": "3T8E5YrdVcr7s6n6UAcNiz3WeYhHnH9YoENHtuHyN1LKfSfHjXVRP3WP7u5w2LPT6mgtGQjtFdas3rKGAx8XBXiG",
  "key16": "2X2eJYYkW3W1bSmPg3yzP2RT1YEs8GVbKHEWWyVYv2aji162frKxLafCM7XFpo4MNhcF7jBcrM3UczYPpEfHHVbq",
  "key17": "2P99TNWcjcz86BizA1LYdtmav58zmVLCCqQ3QPjYKeJfd86z9EWcuRRfvFS2Ya13h2ULtsNBNiUos43d1PX4KWKT",
  "key18": "5h2itaYeoupj6XivNj8PXkpcELWoEB1tTvn1gQ3JhdjLbXSVNSVu8ZyAouRjXwLeFgeTntF5msfr64nC2ioPCyqz",
  "key19": "332qFXxgyABvKiy9hFv1DnHakJzDKB7L3csRpzkTPGRhxyVdLvGhJbjzXxbEuMuNBmQUhHnPwWDsgE68EWqwxTzi",
  "key20": "2hZTKLZHRBmdDkgdBrcemASHSxFyxyJzw1N1yKD8BtnLz9mb24GB4oVkGssjypb5dYJfXYmyhBPvPrpwEKTbvdRp",
  "key21": "4QjAUvGUr4TPdFghMEaNEgWkncTE7XtyuYh4ANXPAZvQ2vS68k7czKMss7FYnt7oWE2w1S8GLSajDzLGuyPV7f22",
  "key22": "23z99Cb3Phs6HsiPqBAmc2VY8ta5seNPwcTKV8fan2NaVahU96Rs8sGLGg7aGLZbCxDoV9pq32hm2H6fQt9XFcJg",
  "key23": "UYQbNXQVYTE8fDCmBKwaJWHTY4GC7gwSDc7Zkkxk1kXpR957gnViushFiDy4zZiRorTzmV5gLyRyVL2R5wbsMjs",
  "key24": "3U9txfuA9TxbpS5XY1wUaxLHwCyteecYtcAp9Kg1h4N7bUYpKnp5HDWxt6B9N3GS7GU9r3URinLBpcvGxNnt3BNc",
  "key25": "2tbYwRRH5gZGwt3NQ3Kjnw4eppMHxr1LnodGjFd7bgsQvVMfXcpfvUAcM1LHNTt1S9jW3TdX8ANB64yeEG2oMysV",
  "key26": "5rZGepCuS5eMEEk2XdEgw8tbi4wMSwz4P79gtcnfTxnn6QFf2oLjP1YTt6SAeotWd3m4NaXB1Vm1V6iD9NdT25jh",
  "key27": "5SqBLUgLGfkw1nRG6fyTQjQkhK7DBb4deUX1V8iTCUZ7N8T76HVYugebec1NAhZmmrbhnHZe6m9wjzFydGDgUDsE",
  "key28": "3Jgsoqv9xfAtUk3qdWXELBnET7nsM8A5wsN2cHF4rN7zF8gvkyDSQvkeE1YUnj97r3UBpX18CGuiUAYP6sSgJve1",
  "key29": "5orsVkctqL4d51ENfv3aCFbW2MuXqnqfX4vWggm1tLGMoNK4PqKt2SNS7HuYgFmGXD8MxBKnPAbDcz8dWWp4CoES",
  "key30": "28WSWF796AUNVnc6p9ymJ3B9X2sf3BYG9W2HYwsFH3CKXQaKVw3BBtCN4ZC21C67d6ugv3AGSdzPwNN2NGqb7Jcq",
  "key31": "5PbGKwjE78PEJ4Xzbcm28riPHTrkH131RCVsSGpvrLmn8fgXHPmwXUxrk3NAtzE7kWEf15Xf926b8sjKADcAHyRj",
  "key32": "2pAuSM7981iyaaAhZMtSQPL4YyysQucXv4Zsg5LtpWfGFBsv8PWPh6AnHkypf9WNgzMzesgHYPvPfTmPw6VhpLtH",
  "key33": "57XhqF61XLCH3F9iq4nmfhbrPmvsXdhaZ9A5Wu2aJQXy7yDL3YcSiAZEbsTarh2oJTE8RkSSgakezrteBVKzYgT4",
  "key34": "25oLsgrZx1ivsitRc6vgXEnSNeXPtm1zuKJVNZYPkytTHEbiSavT9B7CxFt4FiHQ1sZvPD5Qr5LCsxpHbk9ZiAhN",
  "key35": "bvAZXtCqMmV5PEBhqqf5NnfgPSWJQQuS13iLrh2okGcbZHWJpQ4bkvokhSBd6ietXL47k7rcjeEqbDuuPT7pUv5",
  "key36": "YezSh2aJghkn9NA2SnKkJEfT81ogGAbtjpmuT3HQzmHturp3jiGymJi9e64eFQJUFRHY1VD3p2bR78PX6Xnm5dk",
  "key37": "4jBJyJ64FYJLzR8h77KhTAofU9mqPrUtAuPfmB7YvkszrMP9B1WU5TivRKjMF8HLUA5LTkTjdggi2cga1iRFbrTR",
  "key38": "5hTf7iywJGdkBrAfBMmTnTCB6zBywpr1Wu8Uoa7wjrbHbAzQrvAE2cH5Mvyee5zVFEQAqPFcNCF5pWeM75MTTzET",
  "key39": "3dAWgBWmKdU4TNv4ExDYdhmEgs7hbRcexG8fE4Gve3gbw3eMikjSoibh44CbasDpSMrRw7o3TbLX294vkCHMo4Pg",
  "key40": "phPs5KcgwcxTQKVVr9L2pqFYJxUGcS39ufTNQNg6S8KvPVYsU9TB3SaL6rwnwHjf3tDHfP9p3Si4pwptwFjWAr7",
  "key41": "2kFWVzLnADmQJ5m2h9H4M7Atprws7aQPikxwYAVAAKwyGLjbjF4CzE3zgpkdzBLgPNdmVyjVb2PihK9jvcJJZJD2",
  "key42": "5PCJFmqSzpFvhKeTmJiesmPgDcsSPq2pS9qZc2iAq7GRewt5nbbPBfQfqoLgfErgaXkmXFnxyaRikCmTxod1WbcE",
  "key43": "4xp7VrjaMKgmv3K2UPer4tk2uE7bvJotCerFC4bostaqYJPu82CgyYQep2T6Tzqen4AK1UDvf2TJ2t4yEpcz7zWs",
  "key44": "DF9oDayXpe6FpujdEFYTvdh4EpfTYh9CA9sChXALCAcvhmJrdpdnHHFaonewkFm8qYEhoTFL1Frwo1SpFBktGmm",
  "key45": "2GMVSVt3NnLWzaJayTerwW3DByYidxoQDmRFnACh8i3mY9z8p62XA6wsFKCqtMCYgiYF5onfAK3hWeDmNsDfzcxf",
  "key46": "4z3YN3gCzPc2hdPusP8shrWMfwiy4MSPHUXDHgp7gxh577kHr1cpCi6fVde9gXUyGqYtv4KWvXSEKsc7pW9W3r99"
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
