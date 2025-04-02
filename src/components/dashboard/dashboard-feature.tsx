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
    "62RreXUgGkADFVwvy5xfuhzrwjY2MoZ2q6rtLurW1pLPBupN1AW1T9mMTc2e9t6TaUXsYJmWSJ1EeQhvy4gHAP8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EVe4mosxprBQ1CRE4v1M3Fy2KdaJjrPtPebe5ee2qC19WEpS3psFkArtXY4dfH53KRZn1eq6ooFrthprX8SSbD2",
  "key1": "Pk6sNmL9gqQ1NKNUPRHmSzkYS86jLmhXT2wxkDqjW75vgtyKDYMyhHk5cgywptTYPwwQxzvQtWcGkGDpTnzVWAQ",
  "key2": "63fzGP1FUC9uLPpJM9RqpW6cdZ3idrx3hiyoVaFiJUL6heKgqjSDMRtg4a2zANhjwSiwYAdT2rvzqpgkQ9PjSpSB",
  "key3": "5PqZAaPwzsDdWVNQAWeeru4e3ymfrzboP3dqwFWTfbPwzhbqwbgoQQQCe3C79rPrsDmZrrT8m8oubfTx54Z2XXLW",
  "key4": "5dNay3xFpSKzcsZKp7rnmYsi5QgRAqPCgywTBavMF53zw24BboHWqbRQVGzrsvZEhYTKYVmmQ22RqRHtzZUGjEVH",
  "key5": "4p5P3oVip8b2xtgx3CMHLSCZWE32HquEq2zYQ83X2UK2EX5LkKSz1ei37ibh4w1FtMYrRghTKZTRjGKZX1ypRjzB",
  "key6": "3ZtNn5FMyRYbXA83vstM5s2d5hikYc5XDSi7KHaaaA25gbqQ9HMG98cbNFrzWr1sMfpDzwBdUHTqKiPxgYK18Jar",
  "key7": "2mfudoWUUcMGiPGinUF52LQtvRaVSSDZrx6iN6MR1dPBgEe1AEafeJ1VRhZtNpuXrZmofC4rkz8yrqxdnCjoWBRV",
  "key8": "ZM25BBGP4MhdHz17mi4urisX3x6St47ZGitQjr1D7bhwwundFmDVrMuehcwzQmRzUgdKTmg8HKzLJMnspdJUJ9i",
  "key9": "5DJoyu6NnYkkTDXfPHPG2AxxyGN6K56KCe3J56bUhnCzXzKE4WYMWyGKCqXSbQ4TTeCTtSeTUKuW1qtcTYgH3Ajk",
  "key10": "jZ37EFaefrWChBNQheYMBDg7LcN5vzL9MqfYNerW3KsjY1YM2wjDgwNZHoXksJCPA577FvEBrULKvRLmonDeZrW",
  "key11": "5dTazqoMUhBHAg188LrWK1Q5v3EUa4Jqa9cGRWnMjf3o4RUBgLsCCnWdgAfXbBh4ywRj9ZM68sjYgZvEy3B6xxu7",
  "key12": "57JPgpMHZNgd4cGFA4phHTLhKFK8wYrm8R83snAEHW7ArQjxd4EjKnDUXqWRb4RxRtxWLGg2HfaqYiVSUpqNnz4v",
  "key13": "Lt1Y7b7jec8dEvsPkw4PbmsnqMeosxwZnBrgyHVrqPqEHmS5rk2wCD8VqndS5T7f8BHwgeBKxmx8GUEn9etqJ7S",
  "key14": "86RqXEvMaLbCYbRKB8J3E2jDhy7iSez5EVEYVcPMC3ADtscGmYTjSRgsu7NCzSVRMBhH51gQC5fgLPBHjaeQq4R",
  "key15": "2J9GzeAJoZQf1AJuz2AK44wiCBnCvWWCGquyXYmnmnZHheoFco3wh2srpYpc5Yu2UdnoJTbUk66r2RbR9NcX3BSY",
  "key16": "5ZufZwXBDjqJtZT8Nqe7n8QjVJ9HsmywLP65A9roMWaKGWLzopL3abVCcz1YY3ZUm3uVYkZn8Rrn5EDBAHtwByRH",
  "key17": "39Yg7kfVmLwy2zT128LNxdEvmufYvAmfhKjyU88dpRsamHwSZsJ3uCYmuYtoSmzXXX65EUiJrcaYsS5JuGnkTyH",
  "key18": "4P36Se75aUdSGZAazg13ZBGpBT2HmfLrKSXkvZQuueRe3qKYY2w19ZeFn5sx2rNRA6UgjniGcPN8sRSLV7BEsCH8",
  "key19": "56e4AhENbT8fJGCDtTRcakMKAoFrL9AhcxrqPUYVEkmFpKtNFb8sUNZcUedDQtDZ1zH5eZvswUcbajqPR2ftmQBK",
  "key20": "53K2mgaHhmsas4VCTAaMtwxMpBFMAwiwy349SqrQqCRjJ2URpQQfAgKr9is2FYd47Kkhm65EzW2TjkemN4TfWKvz",
  "key21": "4ZdYjjXoP6Pa9yyASKtkauoqzXPaUWPEw2ddTUaS95gpW2TuWwSQ8iTkhTuT15gEa6QEsYtJQiQXnNSW9YZ5eh8s",
  "key22": "3DitsRqyrBUmsm9JUYgQN7NpdREGhyYvDH5tMjDsLP6C1Qxt2dotdmusK5UZEtscHYMPodFEa22P677WAxcF4Z1F",
  "key23": "5ccKSs1Mb5u2AV6rma4H1HgfTcPqV261f6SnZgjYQfCRuMAuLvZqbAfRR5MDueYVYk5BQ1hVDDw3MvEAYroGmtgW",
  "key24": "2B83C3sXb1wVaB7dhdJb6QGSkDSfTJrsjmETZeWSZjfWZ2Ud9xNA9ez9dM9XJ7t4ucF9CVKXFN8TvjC3EpoQHfG2",
  "key25": "2mgEtcV4fkuFNHmgtRgCSnjzQPrQEeAzW9J4LfpNJZrWQjVzUczxV5s2jjrT9v37jA1JFx1waugaFvMBm5maZnFL",
  "key26": "3br16PNL1shcQdtc3TntzatLTrFb6omJhRj3dTeBSrqcUv39FzkUszxjgUv3GUNL9u8y6fT5qJ8wzqPzkz4s4xbc",
  "key27": "2c3JNLoKw3JcGkLojjP1QSEmhRQDJccTYHEt81pg29pbjwJTCT3nhgZWW8X9nnXzUsFzznF3b2Yup6mAE7R9zv2o",
  "key28": "vYmDji3QdsoEuLc4heRH7DevE4ovcPet6JfExqVGbaEvnLF1Yhahvmx1d3VDirb3iWVGJueWFxy3mGrdJb7gA3A",
  "key29": "sbHpnBLy7DA6mMdmT9YxfqdUjXaVvd2NVTzyJdE6kcfCw5BWnskGPumV3YFZrwRsRaXfUS8eDmDt2B3j5G1HrjH",
  "key30": "3LG6KUcBkkyCR17yQEPqptkJ78MN14DQV1AikcVxWhcMCaHj7kyG8q45Dr7t64NjwkbnzPukUxfq7gcENqkoZ9Xf",
  "key31": "5Zkp7ih68eLCNzWj8BshNwnmWYMj1HdhKNhudghZ9G3XuxRDQsYp85VHFrFNt5rdrmh1E7GQZhBH7Ve63nfeexuE",
  "key32": "4wc4FvPVQh1eJhnkWnoBK5y1ntyevZgiQH9HECTSA7NGkmBfdpE44RYM3YTQ1516u83urQXRb4qAEp3zmNfXRFMe",
  "key33": "2eEMGB5r8igxP1q3rnXpie9Tyhx46KJrcBhbE7rmkHcGw7aTSwtidXxxpGQHcFGWddgdrmHhWue1cX1CfCF6vQeH",
  "key34": "5f8C8F4VgNQFkrdHYs9YS4Fz3de9M25i3pjEH71K1MLLmywPyJnukiNkoV22iG5F2QfaFbNqgBmuhQPaiXCtJqEV",
  "key35": "668g8ZdianL9hTeA6U1xsBPpzxkW1hLP1NH9AwbQVcnwxrcZWEAHYgjiVfEXrVr4AvVenTi1dfmWhurV8EY7kh9Z",
  "key36": "5d3zWnk7uDD6gn4jCUSQi3GYzgsjff7RDJS7SafGhcvvhMyYr9dut3CTnbB6wm2VBhSARa6XtscgTXRdzKnfvdvi",
  "key37": "2NxYRqFBHu57NBpENQgRYLXjHP8Piz85mtK6fWzmDTYpHTKnLzUQDsunS69sYFCWjRB3X879qxCGJq13ahe6ponT",
  "key38": "46rxahhdVKBFEZC88PBsjodTSeUQcniEncrFQgKWNMNQr66KecZVEP2MUXfuFnbYCWdHmKeSABrNmnCaiUinM4Yd",
  "key39": "4e1u6v84P6drdqawhcvvMN93ASMhGgsogD4nd9cZhgEiyzPY4dkwdQ5bnDAFU3mut1NT8dwySX22HG9UVFucquKN",
  "key40": "4UYg5fA1c7pm4Qq5hs99DXsiP89Fy9tC1TUHytfS4TJzzMNrAcgxUYaWQbBFv2TvntRsPyU8YUrmrboq2ecCFA6N",
  "key41": "3QcxRCZiNd51vziyyvEEsC3uWrCcczB3MdLAoxpT8z6Q9d7x445s5aPQxD1Pm34ffLzYD7Mbpv3zGjNpMAwvozHf",
  "key42": "4Vt7HSKpXPaxN8mfWsPuM9XWaJVuTiRVZxe1WHpeFMUqEjMKfoLaCLdzzJQ3Y6LdqUt3WLosSSdY5wzSoqRyM8Zr",
  "key43": "34ns9C7aJLfJHcge7CSkDLM8cHL94F1qQ2emnTCZZMyQcvL3kvmSvJtuH9idZvL5uhr9qPSZxnrcNcrAVHufeF2f",
  "key44": "5sgeQfxth1JvDZbsaaKa6uWxk4dMdBxSsojQsV8kp67arL34MZaHsPef8GP8VzeL3FDE1w2qMuVYvYKtYwSNLVQ",
  "key45": "4eeTN9zJrtaxXcrTWbc9ShWDd1CvG5DU1JvPXduyoVeVswdQ7mZxD7TY9kemQQboNEAuGXV3AQBi2ay6J1HxUu8z",
  "key46": "UbETcdt8zjw9jH5gq5kjQ9eDXGWN3EpHPQAQuDCADX7icFmrBJVTJcbNkqknB1ZtS7Qd3kykDoCS5mPoyWKhzcy",
  "key47": "2KWuj9sPH5zt6nnEenu9naMbQzzLpCME5ECbxvtk7TSeJDzoCAKdJQWvqdfJD2ZxhzBpXHWqiZMDVjFwNBbxTPMz",
  "key48": "25TMTRLBUR71Y1rCarqoRD8MpHCGULqAuCpmkxKFwtfqiXqeDiLuDvur2tsnFJbkKMyK76QiZELKJZY6orrvfkzB"
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
