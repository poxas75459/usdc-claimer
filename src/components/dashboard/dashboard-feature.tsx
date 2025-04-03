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
    "216QjJFsWAWrfAKrQNkxuiVPYPBG8pFEvoCiERYVCTA8kdFtk5gNxqzPuBCDcDfQ689NX8TQXxDfe7gt1R2vsMYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zSC6xwiCtiSDfja1Wsy5bFD2G14C59CbhxTVHQKZe4PFg72u3LnFM4iGgwmthqzrxcZNCjKeQkQxb1oF5Eu22ri",
  "key1": "4oVdj8BBeFgFs1gzDqiSF8xCNpGtFWCz7Ky3RaDy2xvSqKPavKGEwLG6Pzf7Fv3RktX7TpCGvLhQCmVXJjmegCia",
  "key2": "4fevU6VknDGbc82XCQ2h2YvacYAJ4yHFasbbQNpkc6a27So46FpFW3TXFkoSCRmZdyQ17jFSnzBFUdn6fd8k43cC",
  "key3": "SLZvjun5uDTjXsDvuBHTfDZvCPw9Q9G3yvWx4aGT4yYcPh2UWab33iSmN1XEHmpzM6p4Fs9aZ3acTcTZjPa2DHi",
  "key4": "31HfAeiJSpPiwAzBHA1d12q4heGQsbgrzrgWu2chwn2dG3Q3qAgH3gZYN77nm79vXWoMXhazAoqexanvo7HLHN2Z",
  "key5": "65RfCuQSGUUaDffdZpbKQtNbDN5Pgbg6fuGAtnjFpB2Ga9xfMz3V6w9tpUVgrmAacFg4z1EEHvSMprquNQJuaqke",
  "key6": "4ReFbeXRHdFrwAXCX7BF9pFMDoo6TRtp8NsvFWnRnjK8t5N5gX5rCgbZncbEgCkdTBMrSzg2uNrvx9Cmy1mPjbEX",
  "key7": "4TRhbMUeoum8n1b2umGyWPmKn2og5xKJVpmy5uzd2UKG9iArV5rLzSmZi9t9KPME4ZuTCdjHo3RGaPX2gtYKLXeQ",
  "key8": "2Tay2dmVh4JaHDaNNN4e19cjXqeb18R26T96JNrVPbVcWCLZiTwR2xa7gpWCSXjNiwKAiVGopmBgD6X5PDY7kMeR",
  "key9": "42ohERhgAkXjJmX9f29sSakJA8QEtbMxbvZvsTaF9wf29HmsGhgxSDviSnBB7rvnGS7SjYkaJDSLLVKSdXZ1BFsi",
  "key10": "3VBAuELWpf34JUBW9pjBHFK1J1ghuiPwJE1G3QWYGHKvK9qkK9Nss3jq8dhuim1QPBSLHGNyvoV6dmxETQhYiJ5p",
  "key11": "cBrwaHLFXfBnvS7GcV58BBcuA2sgopCnX7zZacQBYZF4a8MKcwLjmnz4oLdU3HTsBVZ4jzMCcCvfoYZRzX61DEf",
  "key12": "ysWufR37mgctKTECvCEmxMKt6Zp4xrkqtoRfQayQxYkWTtqNjyJdqzu7BqewUbaAhYKPuhJhURA9fSyXkqURjwh",
  "key13": "tFcQKHacaxtydeVLtEV5NQ89Ahy1cXEp4qELwpq5DcrPoT6BRwiXvDaS9nJkfoodojdWimrVgYoEEmnMbnkgwFu",
  "key14": "3drX1Pm1cvF1jQUk83FCJxEx3DWN43kmWvEcAhQPxjDWen4kzHmj99xTjjWg6TfbdRFMmAmLpeBsgSmg3A8rhfYp",
  "key15": "2NBJ3EqQ8JJWhVCW3ALMVoHrtjRcV3f59UfXko75mJ55ShxbDoeqcTndWga3kVCxebMVgiKhEfZffa5Vg4iiWyPV",
  "key16": "4gzp2bV1GyjFg3rh8NaGpKvQwcMd3pSvfnBRCSkrY1dXJqHP5GDnipkaTZeBJBkoNQX69KWkGBMQuCJSxAVHpeEH",
  "key17": "63GP4ho6EdDs3ArJQmo96jbTZMJW9d3KPGKqReXMwnxsyMdiTGUTD4LBGhyk1Co9xk5DcsR5MiXVwdA2DMZ2a7HQ",
  "key18": "xSuCZkfhu77VRXwUcdQgSqKR3FRgTH62woVxqtiKgeGrensArpVP1N5CHtcWipbELzndWKqrzEZhsrqxZ77T7PH",
  "key19": "2r79CbRH5s6CfNhJ69RkKfnDGxUsuU7KgW22YCoAcUJaKwrfAjxSDDwHoF4oa5jwddjZg7mwGBtCF6RrCm8BjoS5",
  "key20": "5hE5GPfJJpqsvuGJpTWA5DdbgyvXFMyw8E1tP6nuibyCb5RqaDFcfLfoedhS1zpGg8MzR5hXUdTpVSaj8XmsFhDj",
  "key21": "3jU7BoXVeJAQEjGFcTrLNtfYvHahDpn85DExub4YqahM3UBGb5wvDh2EoDad1pm8wEwtXPDebJgyJ9hVdAT4Pqwb",
  "key22": "2Ji4BYsXiWbE3wxd1LM2wqcpEWgcRBsUQaoHxdKn8yXrk11gXiTvXGTPC6YcgzJgPF1Kn7X46fCPxG66WV2oyDET",
  "key23": "4qV7qHE4JaRs9KkhrBMUU1HD1tefb1wMANdM1BjMfpEpjSwQ93jxfvEijzf5RaRZMHF8urhYcXhJdft11ZFW96Gg",
  "key24": "38ofZhVjZYZrh92MJsttvCTzrimPUTwYvoRwZVyKyxEhto6FaoHMaqKYE1qjHmrpGiJZajp4XhvtaAnPmCG77tW9",
  "key25": "4euD2BPLmTxa7mm5BwL9gUjBmSx9tAR918hTZxSLLf6Y5orLSGRqZzUcEjEDgoa8bSv5Bjuu3bjcc1F9yDcWHPij",
  "key26": "jE43KKqQ8EyNEXPiSSLqKeVSUmBe8iVEFKnsMJ4LHUjaYvvtHjk5pGVKP5XTKTFGi7PB4bnzyssp1c2zzyTW8q5",
  "key27": "4YLEBncjatAV9uLZCptH2oXDTPmK1N9onPqqn6kerwy5ABfQ351vzr2qMberdLHMuSJU7fPFGfeVqLe4ZJPp7Nm8",
  "key28": "2HJQ6w8WuycArw6mFTdR4oLYTFdK2JGMGf4aNk6pbdH8f1h2bMELdXEbKHtSNWBN8Wg5MLNumLcoNdHAGcPacsyN",
  "key29": "5coeUES2zC6LkGVoZpdaVdU978UwuS3kXDyzEbTsR5nd8y4kHpZ9VzyJJDJ6Zfb6Xd6LdE22ByGtBiNEnNanYuQ2",
  "key30": "4gTSHU1B7dW2djdfML9SEvzgnAzwTDqZZqCia4dZGzDivLHmBX1TG2RsD4udCqFFoUssbdokectpSu2kteceCh39",
  "key31": "4KYv5En96jBTNyFUd4Ah8Aed5TsbCpMuj6UkRXrgeVFNNEjbh6Y7SCs6BMYH5BaZLZPhwspXWtvegnTpg43J4e2C",
  "key32": "38tP37pWmneUGCrNy4fFxzaNEicwVgZY9BSfNutMvywYVjkwPNmM6g8PkeNPq3GEA61DgxspTJxoFkQLuec9tDSf",
  "key33": "61u2D3SDUSkoAwhqYMs8w8friLVTWcj2gTm6Te6dPUyrh4px9QQvFpokvNrv9qjdLzbQoXWLY349NM3WZReLDjXR",
  "key34": "2vqaPTh59Yg7W515bGXtv3wrssNSW82r1iAf63wqQ88rQE8gpRdGxkF2EryapYJi9QqrQgqzXVRn5PYaaQ9eKt9F",
  "key35": "3a555VppSUSBRwsrAbrteomc4hbYqD2PtZN7yzqUMHb7Ck94znYyhp6CVPnb4w92oc6bBptuv1me3wemt24c6Euh",
  "key36": "52DPN1kKmVqEjggMWKhMxqPccVQgfSLBCZmKa8WQ68SmvYWbMDjU8gTgc9qPmN68rARYBB3ndGxnPsGd2qoqR5mm",
  "key37": "3rLtG1VNvfgPU8cR8ckgGUqzuHe9QmMK6PC5b2hagZNBWKynK1s2VfBHHQ9nUBFBhDzn1UjyozjZg4gNP8tTmn3Q",
  "key38": "49KcQbc4TMds2NoFEqX1wEZ6dkSNzHqcxo7oRxsjRnyxFvxNNLcVpn199Txv3HgUJPd9gyswq8jggUPywRhyM3DY",
  "key39": "3482vt8BttLBtTBGmQc4s8mXwVwxAwZThU5nKAcwuhVm9oqCh5fTVjdQHyh4GWV1VmHeVS1u8LiTu5tVJ1Dznbxt",
  "key40": "RdjbaMsyfK2eX54YQ2GazPhq3LDCVTvG7Fr6KCFiaqcWCVfm55rfYGwECoY8DbrmppLZ3esfuN5QGCkag4n5nS6",
  "key41": "2XYJeTfXV53PHyziG1krieJXoyX2JhCxWKcYKKBY7AYaN7aXsN26k2V3rfX9Uo4F5k1S8wgHT49bxjuDCnUNYHSS",
  "key42": "2YM97cpWukUVzka96nZqth4QDhHQ3qbZ4maVpgxeaJBiwqyT9ooN83PsNuHqzVgjei3AJLCZzXWuNqNNGetjar31",
  "key43": "296s7Rxc5bX2HPn6LymV4yQp7BhbJP84RbXhRVNjJLRcHzsvVucZGaJ8SUv2qFFeUNKBoWsyvZyUNuhxzcnWS5cG",
  "key44": "21tiXNPtBKVouwsP3dLpnV64KUSsqehUToX4DquwPkBpqgsTbEeskokwiLDHNZQTzvv5pWr7N6wfFPbwRkYCUd8E",
  "key45": "5Unwt6MzoPEym2MbCwsy3BjhGwJXTAwHdVMSJqjFKxNSVY3CVUc4taGC3jmLQhbdXXakp2N2sY1pgeHDe5iCGfBk",
  "key46": "2gHSMPdRJiZs36S5XyWAXvrFkezm6MRDGi2PETwX9xpiST5p2nV55CxC7jK5GyRo2sHLepMLjPqTBvAc2Yp5PdJR",
  "key47": "3JQ59vf3ph2DoWbZmx5NCGcWLe7K9oVFfcZQVAQNWUAuzyHM9V6uQEkXmaUCZa18tryYJSz6qh4YGEkK8R9eT6r4",
  "key48": "4cShSy8vKV4LY6y1WusZ6Xmn8U2acdggE71ouc12BdHwBHz2UR7M4vW6duyEWGWqD7pcRk1VU9xaoccrpaCXBE8k",
  "key49": "4HhrArdSVP84jwZ2JNaFE3KeVXM6XPWVvcsSneTukfNNU3bVJjQRHVjpk3RpK953rU2PBuVYs4PTFapZp1tajmNQ"
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
