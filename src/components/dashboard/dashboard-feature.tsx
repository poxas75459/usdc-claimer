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
    "2LyFNyV6rqAQHafxDHjmmzyhEjbhQkgnVKQNQ4oJ3PruEzoS9j8eSHJYe388cfjX8NPYqAcmM2qeKKFKkBVDVXP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CGTMX7bKDydHrqkVEu44E7GvQF4F4qRfz3HmRrq2VFqRsLtVDBPyxfsywyHEYxnU8SBaUqTevnAaNoKBCuc3vR5",
  "key1": "xeP5sU1wtEVvCkAmAFiWAvcRacuU9S6hhYL4qXXC3j67uFoi181Ew8chgpfKaEu3S8bTNE2Dk9k9W35oyjRtJaa",
  "key2": "2cPwtGx6AF4ub7VUeeuGG55KKqTmgtF2K21u2EbdWNwvsg49gC9qfC26rn3wvZNvb4bTN3pKWc5RAc7PWRFLi6fd",
  "key3": "4GWPN9j4jt8Yy3njR4cGcrVEFhdJyaL83ZwHfaTwNkLa8KzzfPwrFoCoTYY6K11P91QbkFufwBGTuVtdjTXLvX6p",
  "key4": "3CHB67SW93PDNxGaYd7i29oyfpGYQMjTPdhCGDt12dgnNiyiHDEKjXCNKhJvpHQr14QttgJyZvPpUb1uuB3PZCXU",
  "key5": "5S9czTuLkAhyajEAxT5Pb7Cik9yjCPkJpqvPUmgvSrYKuGWdDY7gT5HwezCFHfszZTpKjENgSeDTnqjfMDrtxhR1",
  "key6": "4t2F9i4RT1Me3jpfnSjpCFGs7YS896TeJwtiDxSiPMZ9aNdqq8DMbfjRiVxCkDC1AGssJn3yqBAnqBcmrsvwpDER",
  "key7": "361vtrm52UiL9Q4dAzcqykVc84TEC7DtQvCoUBmpae8tcCQmd2w6SLwBHFstnsRw8z4a4gmAC7XQuzrZ1T1eG8ng",
  "key8": "5zY8dQLU3Qk7fm9vxAAUHpA9Ciu7sf9GhGBNzGHqiWy2MXkhyWikR39UzNtKkMRHCMUEgr1x7e3utftunqUkZvVv",
  "key9": "3HbXmoygGddHkiBcDd4E6oPn4ubDmizWKfrH7qqgCaEr7LEHKJ7mshPfKdVuuAfeQtPrddFnSFyRi2UQSo3gayKH",
  "key10": "41LmfCeckE3sopbuvjE7D1P9sLRCxaV9jT65FGz9DYy8Shr5wPYF7WfH3V4hsT9nvJEmpUJXRho1H47QsR9jaokC",
  "key11": "2pTdEEqUGbnHwBQaYhWL9RXEagLwzp3eVwp4YcVZ4vaL6pXnzAV9fovt6ySjDcM3SRM2H9adn2iCFeq4r24ijn9u",
  "key12": "5fq6m6HkU25yYrReF8e6JVo4VCtuDjcQkSA6r4jirUmGqzcgGAvKKSCqk3d5VcNJ3wD4LKMjFRDNvF4Y7XHTgEmQ",
  "key13": "63F3gemwLLLHZ46rNC14FrC2SVwKGcep6vvaJ13gMCUzTKDgbTChSWbmYkBkbbdp1VH2npvbMgkcPfHtGXNEtPaF",
  "key14": "5gshBFeEMvd1qspBueChhs5C6KYHP41DZVZMvhBUe2ETJmsDT1JRjQ1jJ9wnVjzEpfTvqSs83jDSLU48yyqw6fHk",
  "key15": "5HqJBDML3rMzvrhAcF8EgaKpeffngmC1BcvwJozdyQcchp52FA4P7LftYC5Dkh3f1MS289EfAqtYNxzm6Y2CgV24",
  "key16": "RBfZr4aXEWqS2GryyfE4ca9XdAbTxhPGPEXHGFgP6bgGCwjtpTcykBRe1LJR2M7QCea3ZyApsVr7uqh6Zvze7DU",
  "key17": "5H7BD6zaUYKA866Qw7uSB21zovAF8wbkbgv5bKx99c44iRoNtaTznD9x3AYadgdq4hMGXQfPqk27i66f7ZoV7LoR",
  "key18": "4PXcc3ch9XMZKnH7QF8a6vK3vM4WVkf7v4nXF7Js89xBHspg2ZxMmwdYYFAjvzvcUZM7STc7AUf2Gyay93e2TA7a",
  "key19": "4rowNgeimwjCt1eSgqjkh9eMvg1hVxHsEGYHAYqP11B6SbWkhJnurwHaW5A1Nm86yfUqXxSpD3CvZAhkh8VbacjC",
  "key20": "2by5DmFWzZhx6RSoCVpEyCjmk8cCn19E1CUTNPRyVzpPcozWMbXMr2qREpVQgaSUqNPfpzYACL9RnqfR7cQZaBun",
  "key21": "yDRURRegxNrYn2mucbvrmMhc77XHLcVXwZfka2j2H8i2SWRJ8hNVrGvJAPppbyJ4jfZo4zNF1rqKVptnBatoiVo",
  "key22": "3sBx2dDZ2iCQcdsmRquCF3MRyFPSawaKC9mNCukbuXyz2fD79WXscbZZ6v1b6fjR2vKBU89xSeYBhUqWR6iQRiuF",
  "key23": "5zUNjbd2qHiq6V5PySXW6rQQNCcFQEDi4FbQyjPro5jyyvYyyYsym5MHw75qQSZA8HQTtTcUeUG8zaibbW5ffF2s",
  "key24": "2orSszoBGmqN4kMSuHNuptw4k5PuZkidbx4i6kj9B8UDiPNYnGwww8GhBPrK8Qxd4t2o7NHZYBema5JF9e1HXd7S",
  "key25": "2okSxuZJPVeCb7yMQYSZ1rHg2hUry4QioAfKtwZ39aWh3KYykUitCqA4LHYmkmHgaRWegUg6Sqz7EkbxKtpHNngC",
  "key26": "4QfxygJuMuoZHqKji7BGYetsi4stn8uxd2oo2zYrkbeCCuEP34BgDPvqFfVLsSBsh2XmBPJ78N62ikuZ9QuE3nUf",
  "key27": "5fpVKF1NQ47K6JQXNzKaHgiXKEb8pA6MqM15Gud3gaQw5g7LBPwxnkfCiEptbACNTEtrcgL1gTFGFNLDU8wV1tU5",
  "key28": "2hpTe6NZTAkZohCi4wAYvnDxtBym6BqDS9Gs9uLH5H3G5ddHdTAhhaCmwcagdmTfmj2hajS37pndsMUwL2gM96kR",
  "key29": "p52PdGphu2m5bm9QSyv7vFBgTj8QJ5KuJ4o5DeaVjcwGci4K5GPX9dTsroCxCzNSoXqNtMZZUGAQpftY7RdZHKp",
  "key30": "GAuZhGoSH1iC9cTx5qnW3zigFPw17GUKyykKkFA5f8MUNM6uq1bVgcoH6MUnfxMq9BA9d8RvZNVtEDtRoX3Bb1z",
  "key31": "qa3VPMBct6jvWyCmTgzZK5mzAnj3KGqPZmYSK98sDsmz1u62XiagR9xzKSyYbdyRtrH5ALswc3LV8BQpmp3cfQZ",
  "key32": "RZpB92FXFSHeM4FSj1uC8TxYYpokWvB7Vk2S4AhuC87BgsHBoPiD1P3Ui785q8PrwJNt5jgxY18pukxzX6FHueX",
  "key33": "4Cg2VoVcHuAL4GQaNbdexdb6aqKWCCJFo2cv1XUmtyh8jDnKxpm2KdzVgJc6U63khA2MrSPD5ARP5LJd5YjgqsjT",
  "key34": "3KXpSaZGnJYSLBdDEt2AGZTjvDsBgFbKtyMW3y2HgUwEaC2PzhWAg6QRJeLe2EYGmGrDtNWRGRB9DEYYHLmxh4Kd",
  "key35": "Bmh9gPC4Dsb1ZcPXQBZfY9Koics8NKavV6irZbupjf4HvUthpXzGL1jZ8eupsrYMahZZ6W6VCpvA2YHnze42uLQ",
  "key36": "5DDemvdB4ceuYNAEmL1uvqzUkSB848i4ivU1yZsBbSNepbPccra9F2oJj33Jm3gMfUZnp5AnPKeFJLHUrZwoxe7K",
  "key37": "4HbUR3qnejLUWaxQch7TpnCtxD7CmTDTbBEATmKS3nrW8rFNke2aaX9mfRb8TpGyWD12Sv5kb9obdryJCd7c2gXa",
  "key38": "3C4HZYWXHQBdA5xiQe65F7yKvtrPfRywMLbsLys2rmT4DD5x1XzVDFDk19w8v8Ci3t8XHmuBTHzoXLKmbd6AeyEc",
  "key39": "3Js1BN7eAcquR6RPpQK5jcnSH4UTw17yHH9xeZZnZJqk9rW7eGvoPGETgXgqcD8Xwb5L1ZySt7rEx7JcVeneY859",
  "key40": "3Ghs6XUPAomDr5gCVxkrUDkn2Nwczr2rRpN8BrfzHQKBCAyfGVMEQbydrwpTXLR9AMAhUSuaTzN1DqosMnXTRZcz",
  "key41": "22xBkvFvNCiE2zuGqRffLDXQuHG5j9oMLccRCGer1rQ7KL6FH7n915KNDooiwGrJnNHM7knbBQ2KLRX6xMXhkVxQ",
  "key42": "4bfLoxY18NXn2HKNzNvhdKSuBmwEcRdxs7tFgE1JeZmjbXzLQV143S7DXwt7PzknSjaNhf5mWyhfrXDxoXAyHBZU",
  "key43": "3oLSmPCXRbNVKwiPDJ9brbjFM1Q6jfMXM3KPKqTZtGeB5PtfdcAzdHps9ZkCA5yUAAzQKHcvVR9BXUELM27sDuHn",
  "key44": "36ntVj6P4EcR8Bav24L4aQAPRAqQpBVW8HBdG3cyjCbHAtRZ2C4MBfgB7X3dLTLw1x7roHu3vFhmsJ4vibcd45hN",
  "key45": "4ER5pPirRPwoF6a8H9tjQM9NrCXT9wgYkHf4DPDFMVnwARHj5uWrE8ub4sfwbg1EReF8652fmU3RqVNvZUQVXQRk",
  "key46": "pQAtUuKDramGU5MG5PhyUoivquCVJfZ3P2hCRajhqf7yHurQSSbTNMXvXZ3bJvu1tFS16h83WEsd4DgpVvhRskn",
  "key47": "3FjmhpqUoZ4WwwVLpgTpXzxxKyPbBcHwfaysdfESijZePUBZ3GCt6Qh4E99UpWeDky4t54CR9rSZFN8Y6UUZLCMt",
  "key48": "33N7CW3cLMqSQQuQ8vDcRHifSFtrxiaes963JAM1m4dmo4zqP376kaZuGGcvqjUFVnxoYpG8pmwE797Ynm2Tbdv8",
  "key49": "61EYC1Gj9PMFRVEHG3iR6KjqW5W1Rt21WykyKK2TKUiaaMRQPzT6Q1aKLR9XNgY9s8dwXsKy8rBTBzGVr9ReVvuB"
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
