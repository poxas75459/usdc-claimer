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
    "2T4qeFjDrK42LNGv1ZfSVvmJVK3j9UP4YBsxrRzdUwts652NoHEgNLsRfHvfWqt3aQqoTnHsKVUDBjuTaYGp9nZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qN3cSpYwiLACrvP3dCn3eFrJmRxMjeNJfenw6emogdka2ouBekG6GHQ2SveQEsFoFwmcem2KG39qLgZ5KbvKAwc",
  "key1": "yotob3JYGp198TdF9osj8i3oUtGMXDuniHfxg1XRiN1QnwCVurcf3dEdiysEzhDbCAjodUPTekejGZYwkdZDGQm",
  "key2": "SZ22Bft1p2LUuS4kg28Q9gV8ftmsxf3vzdMGZpqdMXcnkdWTFEhcrdeGSmNEc85z1XQ4wmjhgK1DAxihD7Du1qk",
  "key3": "2ySk33eWJyjK8X2ZDDb3Sx8p9mjWJiziMwpSqQJescUJNazF8HfdBjf2CjHis8qCt6km1D8gYY83Y7Y2D4xLvVng",
  "key4": "4vTT4aGucSmDv4SmmY3mdFXru4sr2so2MTf4itcN7btPkNxJNgtX44iHdxgTef9tyz7Pr7dTByamrk6peg54qEf3",
  "key5": "5XX143ikttvtv5nRsbDCPaVcBMdQ8kqkunAHJUBrDWn7V1ptX6yCx85ZYFawwgFrGrPJnU1vphm8kY5Bm9E7cWVU",
  "key6": "2MHEmjQSUFTZncVXAQSwFTUrkFwkrH5TD14Vr6bZr9Q6hQggRnXfc7jqVuPP1vfCTNRfEvddE1fawZnVXPKekjd1",
  "key7": "2h7rWy9aDvQkFxngG7jB2Roa4FdnLxJTFV6ETRPAXuf2xh8ieeUcPnzbJPM9Yx2RZ73utm5RLsGeHhfsqq244Ckg",
  "key8": "2Cm2MirnTYyaGtfvY8Y5ACAxEWMyNhnQ4GyDMHmsBDPBiamjJXUmWhqiMfrvgkkRFcGKf6Cj4tueSAYgcBS5v5NG",
  "key9": "5gxCbyQYQgQD3CRZmVrXXBzKKJ1mXGeR2Pea5Y51M3YppgCjZaXDA8H3Cx9aEsCBs2Qx6bLaXiN2y6DJjAgJ3jPf",
  "key10": "36c1XcnxeWwxexKqPGkWqftUYQsSpCYVHpc9H9Y2XbzpMsAxXVL6sjQPBu9o56FajCMoihjjbiS69RUnF9ijf6Pe",
  "key11": "ySnqCNjc7kQS2twfPY1VFvMtCNzhGmniwUtZbVWS3W4ZqdNwPfkhRxb2wDED37QBgmBp9ATcXMv9LNneDUYM5G4",
  "key12": "4c916WuG4ToVuHfD6c9Qt9HQ7VYzoKNtN31SHkjXMXBSZSMfyfeuzDv5yGsfMRDLePmFh4SRW8LCQBWWXnvS64SF",
  "key13": "2FC4MjK9rMVGDYwTg3rgLUj65juzvVnQF1ShGn1dTUB2zKCgTMfS2TDenVM7CsCETFgPNd743etwLXBubEXTpPUw",
  "key14": "4c86PjwPck7rKj3HLsqLz76KdZAKwfHjMzWc6t6eKjqAejUVgmvzt3MNAXPfq3YvcWwETTyLVqA1qwPS7Vjw4Bgs",
  "key15": "3HuwPGd1k7fRmsnT6a7S3Aja2mGfhStSB8KCre9SvK4HmgTP9nAny96FmWYrbSmcuvS6oiscNyrWydyn3ZCAt85Z",
  "key16": "36nEtrAwgSkrmfQQmoeRMAzKgRw9jU1imxkJkRAQzyMk7mv22gFGkJwe7ss9SQoiFLyVKBL2REMDanVqJJbJF5kC",
  "key17": "4DLhWJxwkdWhjkVDTthjmL1ZEBXhJcDdz7dM8aEfUxEV9gtq5ffWY8yVCY7js23nYjX61jm2VnDgf785gLnSsp9R",
  "key18": "32jVJRNDrPgKUKhsSpodnUNZ4VqUGq9Q8deTMPghJpmrcXLBRzmGuEov4nmSqRErtzctTujvG3D7zaV7HsFyDg95",
  "key19": "2kcN65DhabmunZRNRaJr5Xpk4nkEWtFUgbvrbdyxRhjVKmacgijf4h8zSodqRUF9wcTjDUFg2k8Q5J9u2UUmZVPq",
  "key20": "24g7rPrNGdLzQG2EVFGN6PPA4HTniH1gwrxgMcPvzKaRX6ZgKiuR95gUxPdQ2UPMcoqZ6dV5MqA2eJzP6oY1G2wM",
  "key21": "2uXQytZxGFhYAcENVDpqiCHcfJart1nPxunUwTguiiuoQ1z8MSfjm9y4Koz3HgyQTmHQ2HYWxoJudjwpWpYUq5mV",
  "key22": "4tAeCt5sk8gt7CFiM3Y8moWPcvgkaZRbj8TvNB89sbC3ZaALrzLifSb11RUMpjpK35LfA4kDLA2TB4xjMwkDebWh",
  "key23": "37GVUwv21Ysni4C7cgEh6wxkVzs12S4vNgPkP6WjiGF7sT8iZzzdhHsy9NaYvdWUgvYGfaqxQnTzmnmNGgrXdCLi",
  "key24": "35D8Zi9tpwNDFcosqD4EZxcKT2QfyYgHgP5eAhhBoPfnvcZaABocamsM7B1NdVHKvSAsF8AzEV6nfEXHFUnFT11k",
  "key25": "5oY3DZAK4uaWGHBjL397V9d7ht8SiCrvxA6yDTmwny1tqFDxJ3CMdsF4zfM36cjwUg2MeunKigXubWXyjF2mgQ5E",
  "key26": "3HJ3bGGpABzf6TSfFitxNkBFSrQeVwvEahpgcxrvXFQPw7CQqFJKVKLnpXJzraZ8eN7KpMx6gQbsKFixNSyNB9yg",
  "key27": "4J7Ya5VEy2bod1Td8DDXr6Hegvso8ozBgkf6Uowj8RdoZWAzX3aGP9ctZtySjQn4iUNjAfdx6Lem4LFMhEmdGZAF",
  "key28": "63RSNMqm3rEEiMohiG7Aizt42JSVfnjZJmkdPmQunFrNCGUviutmYqznwwKQ7vQS7Fxi4yW8kv9LD9Z1KzPP3sU1",
  "key29": "22vd6psxmysJA9zoDh5gPzD6toy9MUYLhs9Lo7fK4v9YKnwsEntCkNscrPK4qiaN41dyjeHBHqq3nS68UM8Z4Ksg",
  "key30": "4PjwTyH33CRvMsz1dN7zh2eijJxLpJJxTLog39jHYik1q6ekVsU4uBePngTbw7Gk1s4jHCPoYDFw2X2CLq9YJ2zz",
  "key31": "2QghS1obw839EiGha7dxNw5i4TXgT362z775kJp3TzBYpnmbvWqXFPwgwSNFxGouCu7hf7xia35UZwj9auJusT7B",
  "key32": "5TmJYFJDkCefNihXbTpKk5qvpnF8eo7szHDDWKqidvTiw83S39KBmXWQfYn9vvXvJL2poZW76JBhbjQqmuwjLvg6",
  "key33": "4cuxBfLpUPLMxgD2YnKEZ2M2jZGtPcQ7CYYCvzNLuXh6WPTqs5JQDmvv4KFHsY7wx7V9YQmRXNENYa2vUZF8Hxxx",
  "key34": "4ESyzH48s6iNwKTbUnRhRTPXzUBUdmAvYq7bS3zmNBwN4tYYD2dwsSnticf2yQ2WQnLLonqNKCRnjC4vz1g1VYug",
  "key35": "2Zb4JzJEEkQegJ5Me34f2CbXxYSJLrCjXBj24kyjhwpvcoQ8jyJQr5mwW3RbWq5Cx2aZWFRPRNLJu9Qzdi7NRCvi",
  "key36": "fbUA57b9rEmLUMLKvhkkQRxvs2b3vPyBeFoPrK9jXYzBC4hP4SoJ19scyTLfXGsfDWiiU6JbmajvbY9eRD2HpSC",
  "key37": "5vAj53tZcbwmcXa6jL13R6CS2u1nFMDuW6s4zsEoYiW4AcuzzWJe9GUX1qTDRz3rKo9vhX74KecFERJXDWyJc9Gg",
  "key38": "2tKZ2xgMsvXC9Ps7PnUymGpNqK6Lnxi2DbKCcv1FfMNCC1panRdHJEstBhp5WBqpRtCg8oXBB1rTPn2cxELB8ikF",
  "key39": "2Gqy3tco62SzaTDCjrVHv2Hoxt86TzKAZvyYpbF9F8QYCExpxLYwaB2zsaPr7cTVetbKMYJEdCEheNTQM5sNFvDN",
  "key40": "5fNtvXSBtMptsadMP1kmKoAYByGQ5CvaJnxbHgWSR6MQ9Jr8Ht8ebs8cq6ux1YxDrp4rWDt796v4ePEEFKnAyfA9",
  "key41": "9t1wmimfnGafKejPZmY1DuPAzFKtf7kJknqygSzAYGB9dJ8UxRTd3vKU8YszYMe3kwoCcoUmAhvtTgnSjnpJhu2",
  "key42": "3m9a5XnpMuLfzzPnASYezkCLmwhinxT1d5PfAgW768DkXFHZpu7QouRCQf1BtS1T3fgkE2NjXo4dXhiNFGknYpqv",
  "key43": "4bVJPZVYSBVobURCgMKYFb8b89dUj74LRAQ5pQrXjH6FwRNBqy9eCkfQxBmFtyLcWKjfK7XLTnCHDEnNpcsC33fp",
  "key44": "3MQU5rjLH3quyqXTwJ6PyXAbXjYn3FWQ9xVmyEc23pHEtoHciRQcKyoTfihLMZxpdNhUDH7Eb9JZpBvcdj7Rfccx",
  "key45": "2BXVfgRoTTrDGVpaWZxZsU96m2CgdioNxLSoWV4LLtjy9KV4WMPduUuFFZhmaC4DtVieP9E5C2DuMmeSXWXS8fx7",
  "key46": "2efe5LRAooYg9UujMtPWxdF9ooxn7SF1o5S1XEAjaxkNpjnvuwA5pCsMxVuSLxyahFk1wgAHCW7P7rBzu7gGqRrD"
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
