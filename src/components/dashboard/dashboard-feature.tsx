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
    "67iY9SwiztDikhepVagavdCXuW4Lii8zxT7E3b4hkH8dPHrAcQBb8HF7efHsehYepnT3RcJL3bcj4urWx4bPJHSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CVMUw4MtJXDfsvSrgGJDESgyqZ5nVmwaEN538GzrThUvgttuHUnZbD1aPjoM3tw1fHckn2xxNNrCEp6NhcXWZNZ",
  "key1": "5f3FRWtjXJFj8JrW2gvk4SFgKuYHZ4pkojuMs3QuJmyJtSdLoi8jorgkB9S5cyGau93DSjVZWLZh9eSj2BSgwonU",
  "key2": "3vfy27krHdQ4AdX62SmBEA8zJKbX8sptRbaYN5Ymp4cbdUdpaWziYyAtk8FrtAz5Xqx2RXKUxjtmQbjBpWsajKr2",
  "key3": "3K11o1ZD6s8Cm31M2LmPg5x4bSEGKKVHfPY34BmDYNGbyCa5F7yTKLc7wKL9mB7LsYjxDU2HWGPT5oAKev5rR9nE",
  "key4": "LpvYy92wZFGNJJqWPRxbQdHkJrqT59MdfqyAQ7VA8bYw9QpKMRTrJjWYZSHcmH9kxGncsXDKuj2ikScrs95vQ8f",
  "key5": "56KfvJKWUXBfs9AW7wftWgYbMSzj5RfHUyG8PXdaW6Hbe8NVD7CD42EYiTqWxPFDcASSzmouDMa3iLpVLtJ926T1",
  "key6": "5WHWJzTNhNPaperfJ2WExmzRHvmwLzHPK1sTXr3RHfAWW4dDQTPWJWnAtrUiMMrncGnXZ1uUhMqM5muYHBYSwZfd",
  "key7": "3FSCS7Kxugt4WFF5pS3yuUcUCn59SroGHvWtgdR9gJVb7LqNEKs5T8Avj9Nyy39XniL61mQzjsbxef11q76yXSzX",
  "key8": "2be67UYGxWQfLohoF7EHqy2wxwbzpDoKMVi6s9vnHHmBXiBeM8rPXiCbghUorjtaWuoHktZPm6HG1qrpBRycR4hF",
  "key9": "54X91fU6kUTfWtp9L41oazJVHLHh4JPCaWCnGNxDxuwzJzUay8g1DhnXptbbf3aj3wVSq67j2vsRQSaNxwCeJc47",
  "key10": "2jgELTTinmkxeXqvPgbN21h4F3BWdUN8oRrLLufTZoUJ6nDxA3rAtX7ML9m5d8tKLYnu2dtywDDdxQAnJqNMMcrq",
  "key11": "Wf53PEF7LXtssU2vbhvhyr3fyAycFF5kyZMDWVncffDYZWwjFspiwbBVWmWZC4cwbPYNTCo4QzZ2cCrfSRA9sNs",
  "key12": "3MEbrQ6kaGigsq8713npqg36MNQNUCz2pPMozc2n7KFWrQ9Muahoqq7zqYuMUMT3PKo3L4HazaD2qXkTHsExKw33",
  "key13": "4qWVqnRPLKwd1rMKEabcLKkG2LXxHuKFWjGHHsdYYCT4pWT2VtwYvsHuESVU8Kp7g4ZpfkoPYPHVzczNvihct2y3",
  "key14": "5aZbAnE9wEUn9jNRKdV9vxhZ3dZdM3gEtWCuQ5W1d8QjA1s9dfNY8dC44wXJbPN19ncYXyZtSzPyExAusQFY3k3",
  "key15": "2aw4mZYMz2ZE4LKQHutnuUvywH4dRk5g3mqh2YHAQNmChe7wPwjbe8EgMxCxe9jnsE9c794LRx1HHa3qdCJko16w",
  "key16": "4PV3y8Tuyd7A5FcEvgbKZBr5sWmfyhVFkq8bsWmWZgoXyyAg7kk5WZHnsmhUvJH8u5sw7P1HYHY4zCoKXfYD5UgJ",
  "key17": "2eaPTdqVx58XF5qGsNtp8rjQ88gYGaxZME2DcK2YocHjVR7DT93xLGTjZEYKiJJ7CjzsfrTmBcNdP8KTJJRUhqfU",
  "key18": "611s93fTVYhPt7SP1rZRqzugrPiSe9KNDWk9CRx8o1Pa4G229eTv4mdPvveaeupyShegN6DN9dKp8wqgWqJVkTc2",
  "key19": "3HQv5EQcEjWvTFihY5SZADtJRCgL1KUUPV7kG3EpKKCEbutgSQcdNAJJHjYyyp9TsFiCgmMeJmAXJNMEkaEDv9Hu",
  "key20": "5bG1DqWC1EthBPfXWZ7ftJw7ew7amBAQ9egeAJ86XwdPB1VjKUH611GJfA9E9R3Hq3WdbHraVBS6jAo86Md94kzC",
  "key21": "fynsDWxG1em6pXVbLdJieEn1HErgGDYPzJkKD3ytVyq5Rp7CPd5mRRJ1ishcFDp3iL5cqYnq4acUUFxPZpYhezH",
  "key22": "5xFUy3jRzxDns99pyoeyLjCaJdTB5CnQyH3yLeRGbAXqXLdNKvuNDLPqRwN4cB57nmus7D3VuEy9f992HuczYgvb",
  "key23": "2qLq6hGWMuXqL4RwP6vjFi458SokjR6tWTMACc4vZJcXwZUcFijfsEf8RczrDRdHpW2Pdy5aa7Gjj3Fkf8UQ7cei",
  "key24": "5nComPeHHfDUYpoouERvkoUxfPT1wFxATiTPPug6wvwB1RnWK2FFBfc6cMtJkk3xE6V9YsCt33wAjhLGSzx8YR6u",
  "key25": "3fVkLsBLPmChE1p8TMmeCGnXA7NtByi8zcAFQ6wwhtEJPci4bTxtYRmyvExYRGGqCaDg5ac7ETxvDiKpDuAkwAen",
  "key26": "2U1SpFj1BHiTNtvfFww74jqu7fWh2PeGwuzGGzSuLfgRYeu7xdvg989XfdbvpfcN4qVPhYkMSNQLSDg91C9P7EMU",
  "key27": "4PHtXt7ZsUTNajCcmTwCGYgJkezCYAewR5h7BwLjeZ1QPPbqLGnB5H1DvJUXH1dvKxYfYTrZxArF5mx1EWvRmrKj",
  "key28": "4HeA2aY466j9cxjiqkc6sjHy455tDrxezBbq8ePF3jgfpi78fm1FCFCsoQrnMFfh61VUib9fU3iuVDjDpVQZoLmQ",
  "key29": "5jf83gGn7iekqPKLz9Yxtu8yWujGiWba6n6ypdtRse19RZn2RcEdfjgYT2sx4QWX3JcPpwa7e6Eez6rNZX5KoXTT",
  "key30": "3CsXGDEMSWWmx2y1WoQRVzq6WebgFA4f9sksC9ttcaLa3kb8sQpcy5yH8FvRbYzYXrA7wMUrzxAWjMhfpuYraxYb",
  "key31": "FBWNSq4cS8JGkKdLmwaaP9iKPAYxMCvDVm3kHRSyjduaaDgDWCHaHcNWpMtJHdeuAUER15jzgZJeLQZE1seGrzC",
  "key32": "2pNwkJVkZV7AgMfHnigwifFmMFez86H3CPFQCGbSjRVUgAXFQf4GiLbMPX24PTNhR7Yo5WgyBUz9M7RztNt1n68P",
  "key33": "4qRTBvZvoVqdcienkHE8UReYfGmXD28CkQmH7RSabJHMxaTNJtZpaUmpKM2oMzFFrZn1WjL5dQcuGx7b2PVAtm2u",
  "key34": "5qtzE4mfpeheTgJyn1JCaFqFBVdKcsqZUvewCqK1eC7XA8sTmSCCJws2FTQkj3Bf8dz5cbmJhAkWYii9WLumUYM2",
  "key35": "58hhCHxjQRNPc3ms46efS7NvD3zfGKwQtgZSXs8z5vVj5Soy56mJ68mZQT46ZyLJqNf9EqSLbPUUNV7g7ZppBoBA",
  "key36": "4rgFFSyySYTntiY5SjLTbWM6yuFqFX6apvk36XtS5R5vs3NFpfgWLMWNw4QCtC5dwxtuHPAzZSXcJiwKzYicvPj",
  "key37": "3sTgppwMxaSKsXLjmHbTFVAnYVVBcUFR6WbPcaeVSRLpvzRmDAk7yMqk2R1p1QUCzjcCAwM6ex4nEBaMwtHtRmUV",
  "key38": "3kcQ4y4R3Dk1zHKLWkD66K8eFZQd8P32fiTGNPE2tWuJUzHdji97KdTATvgp6MR1XXwFk9rdrSp5fAfMmJD9A6fc",
  "key39": "QX19HTYj8ZvEi5hAxvn6m7gCSe2TWB2UDo1qZufA7LAFSuqSdJFiRsUkSPeQhoykGajoLbVfUyrReJm8N6v91G1",
  "key40": "4ByRpSP9G6hHCBTY2jtgHv3w4L1w46sWsHKRgPGdJuUwgzHTU5FWFnWYMw8hqh9aQudSXyappFL46WMK9tCGrKrq",
  "key41": "3juRgfqk7Cu1b9Bqkq1vJCrKrVYapFgYoJbKpw2yFKDmUK5Hae5Q2qRVeJSD3nssDuGHJbCgGLVZGjp1754MrJjW",
  "key42": "5McrZ12rkrzoYbnzqpw1RaMC9jzVQ1vjAmG1zyHBCAwuD5rm3MZ5qzQQF4eFEGVPJxQx5ePWYtiSADZ1NCM3Va4R",
  "key43": "3Ynm2V56us1crk7rdcB4mueRnhQHvdLuudXCWntiHHudThTfgQFgbBysxWjaF3ZrA5XELMHHxvJAtZnDXA2nXTkG",
  "key44": "5r2mFTEmEycAbtZojLnBRK6pX5P1gc7Zu84uZsfZLZ91zvkZNmj9DTsAG9is2n25yR7BHTKLQDegCuybSjcd1MaH",
  "key45": "3XEwUQ3AjVqqhLpyJiPW8TcxYVqVsWDWjbyosPALPSCp2NN8CEdctz3Tb3zwABkQE1yvThKrdNKPa9qXPjz8YAoK",
  "key46": "5Vy1bJLitiarzGxksjCB4tMTjjixCt2YHBS4PeKEZiy6jJRzuNPSc5bNZLaTLY6GHELXWJxaSfSiWchGMyyj5W15",
  "key47": "35barD2Q3ZNuKNFYMwUtTRizSHYR5zvSnX3p4YyHK1eDukD6EqEcKqPnobrLnjxE7tMVyueSG3Mpc2YBUvGHG52t"
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
