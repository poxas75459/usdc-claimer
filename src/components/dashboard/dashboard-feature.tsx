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
    "2SePgpBtxDh9xGJTuqac1725XadTZKvwtE6gCckf7LC7HNaS5ybykuyo1tNx3qhaRstULmZCc2VS5hrYnBYMDeEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qtyfYarrRqx8xejMvYqs3a3uf9UGSaAR81SF7tmtFDECDEg52yKzqNu264aXq8XLpoE2gAH7ooKahyBycCLy9Mb",
  "key1": "5oibkbgPm5Wo44AGBqraeQ9XDXeDuc9dgERmkjKw8F9hacxkb74G3GQCcqPMTPaVxUEZT2zfmN568738cHN1KEft",
  "key2": "5cSx4AF4qzHEvrAoaotKbRBkMAnxWYCi4r18EYGB4w67Pjhmn3MeZPWMajv9uvQbJSbM2S166bsDg7yQCcipMtQz",
  "key3": "5npZNfMBUkqZhNGEjhDUrvcotPmNtj5fcaq4i7xyenp6S9XWubqZujpZEvaaz9K277ZHhugqV5pyF9Veu8pdZqaH",
  "key4": "41XT86cAM7GKR54CZ67W9EBmqSTVshVCwbtDPNErCBQB6WipnPZXm1ePAwP2G1W86aHvdZrLP8fDDKmvvtjNHuDj",
  "key5": "3g2FkKo34zXm1k1ufEtZghmeqyKVhX2iLkUDbHGCg36PdYTC93ihTfQ8S3eH71sSneSH7xsqkTbaX7mpVWToCADa",
  "key6": "2t3rLqNXdBq9dWMckC5EaerB1SXJvTcRwphBGKwsfTZGXNbCX96E3KkTfjFiXuGK3C6vkMtRQ5nKx2vehPtpEepw",
  "key7": "3rGTdG8Gb6t8TvYg2vHCvnNPrqZfyiRtomAPNsEQZFDc48Pv7n7rLTfhtLAvAqUUn4XQ5rTdh6vmvvMn4xpYE6xQ",
  "key8": "4jDhckwY7Aof4FkYbSEP3stFz3WG7vTp1QvS8f3QzW7PmmZk2QsMpvKueoZYUkfquu2kKuCr56bYPCsskNR7ywCt",
  "key9": "5D78Rq4B9vFR8jwebiTPCKBMjcje4MPfj5T9ifjcZJvset7fYCamYx6fKQtvZLMgTpXhAyjcfWF2hyPPqC3n2M6Y",
  "key10": "2dYoQnun7msHEJLNA52na5YtBt7G8ow9o4XAfjM7g2tBtuEKmcueBKV7ejNy2zPoLrxmSCr66mpXrNx74gKYnUwZ",
  "key11": "3zdwWDkPpBbn21E9KViZLCjbWqckuM3m1bSxLiPpAdi54W5UPUNz8ASvhYR986Ao17aU8bTKRcJTwx7QCkzgu2JP",
  "key12": "2wM9APob3S122ed9vJDMNvWAC6okUvrrU3NQXix6uDEAUEFgPmeCv2x1j4RSanZbWx6UwamfnXZSXkyXbENJmTeB",
  "key13": "43ANYSuuT8U2UefLdapHREU627ddjg9Lm2ZUrHPCnFuatchsRTjevUbqy7nPUPDRdGqM4kgCBvyxzG9LQcnSC78K",
  "key14": "312oWQKpD3H9VQcJTM43QvSZRVn4EWBdAADc3WTucZgXNeiKjTBAM8xripwUZqm8bqT8VPdjP4phjZkqcnEd1eNB",
  "key15": "5VvHV7cmUWXnvDFzBqBG2ckWsEVUXSy6XF5pg93qGCEK9iBWxrtSH6kio7ysUbDLYEQUUBYcD75GotGBFMbbQ3Wk",
  "key16": "4E1aetGDP6bBYxhtHxmYxfVVfmF347MMkE58CHtGdvzEcZVU12NhgPjrJSthokh44aBeZLL9HhY74wSWbX1a6gWX",
  "key17": "GAxTBD28Nnjxn3pWbWX3XpT49y3HL8VkMkAo2EqJN71EyLBeyWSMZBicd2N7bdE1hfhvaAhSbTqyFKrUeKRz2PW",
  "key18": "4x2FRK8scszmSWkU6KForMnWTp3D97MJRn8a6hVcCdZFX5UgTEMatkQysg7swGKbcDUH8niuzj5eja2b4WB7BKjf",
  "key19": "4WaryEMGZ3jaxk9yprVZPd3A9wjZwsuo36ZUuete39reCLtjrZcRcsUFrchE1NybZyh8TPc52AC2mk7dyemNtygH",
  "key20": "4vkvDs74RATvCG7odabQXGvBAD9UqTe3cde5aCD7NLC7dn8FWwML5fx3WrjhDEh4NkgTZpgovivDnf9n1YEYhcFA",
  "key21": "8skcnkFPHcM1VycUeE8eX3tQc1n2Z9zgdJD1Qpzinb9MdKDVehfnccHAXBqGMB1AtbZCxx1iCCXGKJKdwgXULk1",
  "key22": "3kgK55Dbxr65CcHocgPREuNQTWdTyGv4qnHNzdvWaY1XoVUD694dSZj5NnDeg5zrthtzzwzxk5ETQtrevLxugD7T",
  "key23": "5rmoztqSmty58Jya8Tsv23L8HajsMVYtZr1cRTQ8jvXER6NVgjnSrTjHvK6sdtZL7S56NNNRZN9AUqL5Jq9BkhWE",
  "key24": "SbXjC5XkyuTzGrzVpgGhCExNWQGk7TFUbbxeHdqB3uWeHdQE3GvEb32h5HCiRFazmiKkcSLqML49gBY17C3bHqJ",
  "key25": "3z2n8uqqcfP6pacfDXWGs1Nzh9KhadcXbKFJ226uPMVKCz3ye685HoBX4JJoJuSGyDUGkzJgWH87gwBLcon8j18V",
  "key26": "pJieQd6hKFzkV83gV5r5u6M3L6zDvjaW29gvvAbodTEGyBWMYvAyfLNP7czX8wkFhVPHSiPSuedc8iGMLWsgZni",
  "key27": "35xKj9foszKJHuDgYoxGncjxHWh5U4gyNNpwycacTMES3CaNKDJ59AXfLAKf4Jvtkq4tvR5LAhDnPKTe4P67xa8y",
  "key28": "5BJseqPKwDiaXh5sDh9VpQp9Lc6WyBECWWCeTraYurc4y1BLYY4x8c81jLmCcz5hWqd9MELsfuTXKeRQsdsqdseF",
  "key29": "XBfA2KELaccS4Vx4LaUuF5FAd2Q2FFmnDPSxTWHu9fFd749waRKuVRyxYMAk5yAjEBiCv2XLMVyP9JTsigagWyJ",
  "key30": "xQBN3bnBEP9339AjrqrQrA7kB8Z9HnL1aVtMMonMTmk1UiB6HxRCBH8a6CaqvmFTCA8Ys11pkfcQpRmDvVnxq3w",
  "key31": "3DXjNRdmV9xpouWU7fA6LWrcPADFa7iTK73ZA12Dc9m7kqqzEPLx5TMwW8UQx7VtfXsant4g8baHbcMkMb3Doy9o",
  "key32": "2UWEBccjo7msEfX7DyoyVbREGPcuTCZiDVhSwYzvCwBj5P62wAgYZ8bwKW3f2apG6oMfXNKABaiRPrnrTD1uHbZk",
  "key33": "3F1f71xbjFXrgugGUC9SwKGJpw6rRnz2YaRfCL8UwLKLEsJXTSr5eoJZWTSEKq8mtExhy8ewmk5vdNE55MQek4mp",
  "key34": "3HJKkoXQPnM4DdUQaWdmNS3sioFmCdEvvFjQzi4iVr3wUKz27niPhApx7ij3Yo92ZYLAieoNC1iCcCSjNPB8j5yg",
  "key35": "3DtokVSZd5w1kiCzfTsrchQX9Yx7wo3n3HVvumEuogafuvYMdMm6XfEUnTzJww64dKLMT7rLfto1ueNZwx6EVQqf",
  "key36": "CAq1KDxJaX3EzDNgH6N58ksPjRq4x2JpPdBFBawBhef6QMpsVs46Xd1wuXvD44MzpgEBmYmEybY4Cb8dCts1C97",
  "key37": "23Y6FQLqGgLMp2u1THBjBzxSUNUmXe3B7VLGPwAJw1mMm6BkEvQDBtMENzbAmW8qxLW5ZACjLdneWKcW3UKvVpqG",
  "key38": "55iwgfSGjXrLoDsRhyi5SsmTRWYRBJMnSM4p2sQPQcgg48f3GwEvGHWjPRwU9y6b5E1Q9BPUpg6Cs8U487B3A3SA",
  "key39": "2zQaNQjsGcKqzYYBoDdwMEWKWihpSYrCJeBrbzkP6JRXYw3BwP7CT4C4ineHM1Y2K6d62hhBQD5XcxbpXLY9aX2Q",
  "key40": "2v3Nj2jEL2wrm6X4PL3fVd9zXgUpJ3B4C5Ztsu2nuceRCExU1EUmXFWUiGhtRC2PfzaLh7aoP3CctiJzVjB55TgW",
  "key41": "5So3zT3vwuHHoqGfjfKSh9UBsXdp6GHqDEVCzRM4vLZ6MXmAqB1MDF3YzXygGdJjzuHqDeexkmC4Jdkp6aGZHH5e",
  "key42": "ti3VqvFRbfar91ovAJjK1VssGuxMefeuvBZDpZMw7y3BmJZs3ZfR59h2HKHFB3dWdGdxcSoofzWcHGT94ZapFcX",
  "key43": "ZQ6QnZ3cCYt4ZgXnZgJJjZQoXQXv3NWsmnCEYbTCcipJGjJRrxocLJdhQe9ofuKdaVMcK55zQaZPexmqBSdbgN7",
  "key44": "2A7Q9JsMGwKojNpEEGUmv6h2Uzj8iWYHYz9stC58fCQ6SH1kDwoPNZfZ7S84eqyXCUKW6ectt3DbBEuWBN9fe5Rq",
  "key45": "3FxitdyVo8SuH8RZLCbZDYUR1JztHozDjjnaEQg1NXNnJ7kJjEMrdmpHU3htQUcggKsu2itvwRsSbCtrnLDP7Aob",
  "key46": "4c7kqqYxyYJNdd5NVHfdk1bv3iPsnAN2hXfEqRJ2mXHPYcf355zHJrGS1oWyA9K21iMu3xDqLpn62nVvtpZzB3F4",
  "key47": "5K7HjBVBkDzyMGTk7ySoZu5YgeWCTzBvE2eHnboF4Vh1zWHxGoxtzK9N2YhbDsDjye1AAu3B5nj6JerSB5PhMTdo",
  "key48": "462wfpndJMmzdhMPJR9LfJHDjTxMFWMkEpkRKiWjUeBFk76AUUAeX1cxRTS1ZdC379nRRGnWzmmfmJBDJXitX5zP",
  "key49": "3nrgpMmZ7f5NgKZeegUwwCsaLzeXmurNMJxXkteB1R82JYTGPEp5VHFfkTK9qr1maHxWyAAnPRaPpvr5R1pHxkLo"
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
