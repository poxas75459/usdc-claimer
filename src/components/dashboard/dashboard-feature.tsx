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
    "3dxxub7oxFRMGQjquHNAoDW65UCGG3R6vjV2YYyoAuP2NBomHV5DSKtrLgdwZcSU4ceeYhcmAzpJDK2nZT4CKSx5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d2p8JBWFFVPEHnR4XQTU1qtwKiQQdjk4G1GVvDYfFYgdFBgQTnYgJj4UcWS8GSQSrCEMMMzJEsa6EoXSYFM2yp6",
  "key1": "2EgYReykyxDSXdH7xW1HXCBuWZxjgmvAzKxQkNdS3MSAY5bD15g7iEbTSP6wZ2V95nmgyJMNbqkWBKxdzMp7Ht9S",
  "key2": "y9823FG8X2bT1TFNvZZfhyHbqohUDft6aXtRYDAbnNnbjTzZUVhbAuTNvAWu1L8j8o2RpUgsu7tcudVAmJ61R9m",
  "key3": "36xPPqmD22pXMLHTgH2CbqENyUpVtSVf7kWLiJXMpb1uCJcrg6UWa53RBGSkZtuyqC5M9KZpKPgGoHpWAGFZFhUW",
  "key4": "2sEZ9uVc13vieB2jBZHFG9vwcmiUsVJZKFG36C1iN137cyZaCK7Us8oNL6dRYL4BKGHvEHvdC1ykXnaHRY8HqUFz",
  "key5": "2e4KiwuBtnrjCSQNLzHXHRMHLJYiEB6pwd3NNsRNsWeEp7VS2snraXJCEUCXaPRQnGzYSNCCPNqFqEYxNf8etAoA",
  "key6": "5oSkemtQ8mbfpExtNCXfkkRxMcbXPRmGWfphTpvxifFgVjFK6P5hyoZhsgVjMBGHZEtM5LUxjYA2QVJeiGrmPWSf",
  "key7": "2vMXF8FKsvdNknb8enN78CxfSSMUAYJA9qc8eoaYT8S3bL8ahAA91Botgo21YncWeywjpiQAFbQXTezeawaQ3T4C",
  "key8": "PACbpj4HkYpPhPDvxFnQyTdBWzyU14ZXowhfHrw6adgVEoGxNnqwLnV7MWSs3i6kLL6CqmvspwWELKEiLUntdFj",
  "key9": "v51Pr4NoSL7br89gsGYvJWr3N9SeseQ7N5cV4Jaii288aQJUyHeGxo1i6JqouWsXtEdNK3LtkoWHsSibHxxT7LH",
  "key10": "ujDooP9zjJc8BFPoYaJsnHDSUaK81xzqshYwVmJ7BqAeV7puFvXqnU3CJEjWXFMwkxgam5iAXoP1mVr2GkPGpdM",
  "key11": "37dXSb5vvnsmCD6c7uzeGV5uUVX4vuCdBu5dyzSqrM5LpUzHYVYREsFhK72AmhHxSkKnw5d9QDsC6eVUfwSDeUAr",
  "key12": "3Pjcu27BNFYn8uCYDk7XFcpX7PKAgPFYjT6csiFztzkXCCTxL2vrkEksF9JvLZryRQP31fYJGijifqTHdTkkpmYW",
  "key13": "2r2v61yDh8Jn1TMcnTA5uDaf3my6wWq2h2Ef48E4xaJ7bBG8FN5Gdrj7bfSkThn52P8iMxiKctf1hgP5WmEDzPW4",
  "key14": "vGsGsRX1ABWVFzAoEwNGAiD2k8GgfT6dQNhSjvvqA3RuEaHoTotRdgbnFsRbBTmzRiFgdn4ZiMmfNsoCWVHDZwY",
  "key15": "4S5K4bcpcLtpt5oySpeQGdzJAS3YzYyTzowGZ6rvdhsPvE8BuuBwDQjghEcqHFxr9jBhYBqDuP6GMVvPohQgepb4",
  "key16": "e5z4fXaxREiakELRKFAUySgeeb2CQqPinsdMVRTejguqBNxP1EUzoqiP9Euad1RrjTcPZ65EUZgX3WxqUBquxh8",
  "key17": "HkJ3jNRy5rNXsM8edVKoMSWyB6k9UGtGHXVjkpeLUfxgTP9HRnvU8XxZq7t48vij4qoUpAiKwbVNsYmC1jkuCde",
  "key18": "47MZpFwCv1uZ6BYF4tcVnr2nGkkB5JBU2tQABLmdZ2oqAnwDc1K6T91Cbv4Ecc1dZ9SEj4mx2cEHDPqBtLrAsuvh",
  "key19": "2QQJphofcSSyRVhnzjYHo1iLSBxTDsSe5RKwd6d5gWpENJktYYrVHN8rdrq7pM4NiC5AoRZGBJkWwpgQgTRMk56S",
  "key20": "2UVNzyVhqbNhNHJfjLULreCZcNY6AbfbCdTHLnpiAuWUfoMh4gDxvAeHx9TbRaUx8rwTFy1v3AZgveZ3HQmVr58y",
  "key21": "5NQcvJiSARjcp1DfsnUdNfh81rvX89wWErgxffYsctecLNMMnabTSyBf5nUdEKa25b5kDEedXonMzRR8E3krsKA7",
  "key22": "3sQRDiDQ1jugdmse43JjBGR5Px1rZ8mLadEiEztjzgebX3gH4ro4k4kiG6JQU6LHmjcgTedsZta38s9n6Yw1RPv1",
  "key23": "5J3kb4QzKrP2PCkx2MNtryyP4Erpfoy1GAXAf5vqFiZJVtZ3YXLgJvGJwY3GpbVSqY2AFjEYUttG6v2BYft4fgms",
  "key24": "Jh8KDVMTHxX2Sv3WQZ499r3xFaducTNTBYuNksnLbSxxxWhnKUo3fdtBf4d76mLxPf7rRqxbo2jh1T7qwbCu8gc",
  "key25": "2huAs8ysp9tJyQdmf6rwNf1HgmyyJadJSFfZw53TNHhDS2whseC7bFzfzd6jnzJutTxzpc6mNT2f1DRdqSgwNc31",
  "key26": "2a5FtsHeTW6uAGa5nXqhehHqedMP59R3dhVHtTbDNjuLLSFtcZQzVFddasgq5YpMdUwtcNCmjgiJV8prvGism9Xv",
  "key27": "2dGPrJZNmzgjjAxY1VfAomHK7cnNhUpzkmfvDhEpznZQ1WiK9z2GErCkJkjqUsH575Ko6YyGYFXmSxCphd5xn5sM",
  "key28": "3unywwSbW61DpVU4MipZfLSxadR7jfuZqs3sgHYU1foyfWHAzauAyDy6pt7bUZ8wJhk9iq9ecTtywr9XZxi9MReC",
  "key29": "3aid54kV6MFRM6MGe53TMf8YWsfRQQJF96b1RQBD7kPk1N4cQVD5L5VCZ8i9frUzTZhtgi9AiHVve2HzPE2qaZDW",
  "key30": "3qJT4JzB1kAVrRVGSgJ3B3Vi7ov42M2eCpZqHLNDs4m6biubWGAh8AMgp3nLvZiHTPjkCTRJqGLf1N83ppsFdJMn",
  "key31": "5vexM3eABSJdwAgNJdbxfsC9WdH7E4fRhZAifseC7rsUGrzXZrM7kJEEqNNFxdZA1PktkcCTGQyNd4EDd29bEwCb",
  "key32": "57tG9KekpUYtedheb1Df41s6kjU7C8Brq7RRzuusgn1H4xLkBmgFkAeqdgsMAF7KfDFxDn8zHzraH9h4otJAPauV",
  "key33": "3sa9WzsmkDsA1Ux86xx4prrJdTreR6ejrGxZDEs3Ef546eLWFzH3GE9THcBCR2C8cujwB2u4P9ci26VHW8mS7zfv",
  "key34": "4d6YMZkPajNkFgTj89D5RKFK6M39BFCGXXUkbXZ9JNoukZ72rhZ66iJ37y9vgUhxGHxcgbe2kPdYXLNCEcL16nRF",
  "key35": "UfLdLjTgQ4YdUX11GJR9ynrxefShkovDSV1y1ueP1mZSDVpxuKJDErhLBmzzUHszYTw3pHJeeBNkp8a5VBZM616",
  "key36": "2tmtRq2nCTXweQBHnzVRwQJZoDn9WxLkNKoTsT5hJHS99oxmKs9WqvWnY8NE3hjCtqJi8jTfEzmhwGKeLrbRUAW6",
  "key37": "3sznVXpq7PmRtJvybC7ahWZ2km1cj2UtyXfmRFTCH1hgFCGSdvHMKJ2tMmPhfdoEv9aL17XnWi76g13qDgmPr7un",
  "key38": "4ZfzYtD6HRph5sNatf12z4xmC8MpEE3CpYFM92fHetkrajj6m7wgmrgn4dZ7tcAhBDTsLwjN3eXsHtRhnTmgNikb",
  "key39": "5Mg7iFcL86C4WqAWk5bMjRFP4Q2T1oKk6987wAZandmMrYMCJ974q2juD4FGTfvmuRkbC37mHXqKyPy5rpRki2kA",
  "key40": "5Nq4WF45mCCuaDN9PJ5pMNZLcs2axQZUL9j4vhgfcMWGU3a3rBZuTCKaAeATBKoi1Gf5cU7aDQw8gXJMpyfWaZQp",
  "key41": "bPPD2V1A9S4fydPS1Lmph8oTtxMqDry8ktJATFaaaKjkrLd8mUdf8FkCAt9d75a7KNNnvdaR5VfJAMqfMn5vpVR",
  "key42": "5Dzn5XMm8p7wrFDTeLRVChJV5jYU4mLeTjBEH3s3uSzwNe2CAkbcAJGxGy4H7tzGQgAhHvV9XQxNnT1mXbmSuvPS",
  "key43": "45PiS4aoTXCGD7WQi5swMczpKkbXg4DRNkaK3KZJcf3tpSAeXz5BCVntbfS4sk1PojE7YdFoYQBF7EVfbkRZcXta",
  "key44": "2ZXmLCZu5xDPo2Z3csYbBo2fuJ3rpP88jz8uzEHRv4CMPeLE4EJW95qWi8BfxRxLiDv3gYB9CSnxCLyRzhaosA2v",
  "key45": "5Gsfc8tCAFmPTJuyBChtVNXDquyJYheZ2YC1MrMWpb7JYK3AH7efBHKupSprEVnhqLRcBzAVski41dQiVU8uNyKZ",
  "key46": "3wrrUABLSzAYorsXgPFA3mhihj22SVJPtnqceWCTkxEENUVHdqdxy3JvpQVeLMw142dKLKnMBr5fyyyJdyyx4eh5",
  "key47": "5haVHSRrJRUP54y7YqJzG6ArvUaDreDbeksqADNuULfmYWxtyeiW4QTvokoUobk7ySqc8MtKEy7twj37ZgggjGRf"
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
