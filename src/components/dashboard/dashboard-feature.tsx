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
    "34GbhoU7Zz27ppUiScubzjXh3fEUdpbAxpnnm2hgE3QyDuJTbY8ZnvdtPPULuLsY6v4eFgEzngHjaPSoY8baU58r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FeWBnbDnJGUjvEFXAoMZhRGjCMHuhkfQ99HRWJPrbEzGPuXJPMYaFPnTwJnPt86M9cftAM5F8PVjp2dwZ1hZArQ",
  "key1": "Dy1QQsiKyfNyRqDs11NEfysEQ2joomWpeJ9LzsYsFjUv5wJU27jp9Cb3NErBbsDd41pZYkydCvc9jWZYeUgip6J",
  "key2": "3BUsLecUevnj84upmo2nNtFmRPXhKmopmo5si4GqiGKTeqBtuKWk7nQfxrpQA8mMAyNSYccDXYELTmxCdsayL2uL",
  "key3": "3QhMytGZcEqS5vEwDUU7sXLEY5Ta6oRCRcuAd4MvjrRAWupJnLY3mScE2xV6YMVV8KKktE2bQeCDL84qjmkCk28q",
  "key4": "3Qfo9CWg3bZajYzVir6XqBem6EkdbqWMKCeP6M69P9TCNAiXdXvcySfs9f4pmSVFLUdCJbQJzwuHqUnnm8vT1MM",
  "key5": "5seQr3hQXWu42USm3feDCaUzK6msCxEGn6z7gbjgBKTGKj1RNns5WYTWSH38u5NdLeDhXpivdT8hYBzPv8W7rVWB",
  "key6": "2LZ7ubyL8pYv2LQKd3dgyykjyPkbWUs8v618Nh2zxfhpUg8X5tP7rKqVFCSn6z1eeED3WG4rvc7mXvYMxK9Hz8Ej",
  "key7": "5gi2jSyL4zPweNzfBouAH1XFjg9paeeAogsG8T8771rFcw5cngauhMLoHA583Kw6at3WfQ4m81KbdUFr97ungyqE",
  "key8": "37aKwmxkKXmBwCZwsUwSXaqygVTpUxA72tbvR494rjwN9FxiwiX92osfXVB1fLRsazqbrJtWTFNmVp1BMTga3zzf",
  "key9": "52jEfTy3h15HZaXNuW62waXFhNv9p4F9RSCAV82vkj1dFtSinwmLi3P4NawSzwutVyi347pLu8a3o9DQJ8eqmwWb",
  "key10": "33thJ62BnNP3b6Q3Xs33xvkWyqtPnPsC8XhjQzfxHYW8aEDSvR7vJ7wQYT34gPEyZXYZWpgMSefsZ5wKNapSvhD8",
  "key11": "6zpuKUwFCwPnFoCH6D2BZcLBnZGHBSKkK4SGAav2zDYsNnwPogfkJ9Z3fTD4TeaGf6xrseogRrmx1Cbnew7N2PP",
  "key12": "2pqeyM9PBFwRXDyhfg43Db9WgpHKaGT72z4rBbidH5JbXnra2RkmmPQeFj6EebyiCKCCHf7sFG18PRfH2Y7LixgQ",
  "key13": "41WL5XLuyE1TBLFZ9RGJ5eHbyeu8W5VDnWZAV6KrqMPQh87C4mn5zE5YiaXQPxsvwTr947PKqnKNkvkhUhcWfKxe",
  "key14": "3oAVdctqSvSdhKAZU56AyXZdaFiMBSQr4f7C6nNK9gQ7c23VehAjh4gejgdzs2kDRyoGLxPQj4Snsbx6kcQzwVVe",
  "key15": "4ViJRMmTZCxZ1Db7nTHhDhSLVazicWdpqmWzQRZ2hZkzfRdCaeJMFdpJAGwS7qxJcoXqda7PvY83z8JkCgf4uDSC",
  "key16": "4GjD7popz3pt3pLSC41XqtcFhnVW2UXvaPAtMJcRs5PkCZKXgm2GMmRAsKdJnCFN4LwZbQDo3M1giQLCM9w1WEQh",
  "key17": "2P9xWwx1UUEBTE8us46duYBD5kGYKfZGaoPRLQS6SjGAPTiMGmNT32RA9rpRx92i6JLDqnqWgvoq7r98SgtXgAwt",
  "key18": "65iTrTTpLGfPZvfL7AHwZNPCDuYJDjC29N3KSr9cs6d9ye3HXA7u69cNZWGmu6ayWXTsYM9AErNrNtqf1zL3ok51",
  "key19": "2tUotGY399RBMmgKmTbB4Yf1uXBcf1j879J9iuCVJq5dMk1iYoEuW4e6gAC3XXcgq4JsTcmMqSzL3K92oBpdu8E6",
  "key20": "27RM83af2xiYM7ANgMjx6LJqkJCo5uWNDdpZc7JNkg32ZbHgJ1HGCG1ybdFXeWQ81WHq1wJMjaJpnuUsib9KykTi",
  "key21": "3txYkVAFFK41pnHHA6Gz3BmZcftz9LXUVR7fSgYaYAzoMoH7JqSEU5EKKupTLc4R5fXMHfCMY4Kp96Ssvx4tNs2T",
  "key22": "2xnwUcBUZRiiNAq9TtrwU6p8xVAZBKQLMs6hMVDMCtr92oTBJsaD18VBKLYFgonk7wv6EAgQq4rKPX1MVeYfUgtT",
  "key23": "LfNxtzJmhXRkaukeaxto1tNXo8CnsP92v7Eo9syT5Dz4QPaRDFHwnrK3LpGirY9NYqr65npDRcM57YNsxg4Yif1",
  "key24": "3rFZUFkozduA6AYJuf4V888DPdUGZ8B83cNUQJR3N9Ebn9hNC2QGRp4VNY7nmvfDYbSrHUc5qanZXHN9TjGLuc47",
  "key25": "43T6PtpunVWiFcYnD3EAj5hoLrHiuxCtsaRMFUGTfBJUX2hMTFJmonvE3N5cissVyADxWgFreYLA9sJJHdfGPdXi",
  "key26": "27UoutSSsUxGEKbpvVZdK8bgyhC3kfGAR4e6c4DFxN1SU2ssMWFteBJpnnxGir7FHeKE6UjDVbZtTiMQvB6hY2LW",
  "key27": "2y6X89cH2xeaYUQQjaU82R2iAJkrSebjcsk6yjia5ar14BKaqLoMM3qxEJhaGE5oCBq9VmXA2TbajbKj9vi7hexr",
  "key28": "3UwFM1SPQeo85Zywxky3kT4EGoRAnMvXgCnMV4ZXohY7rZ5p8VBfuzfFNHtpCg2p25mRspTY7GRxtEFYE9TbhgQ1",
  "key29": "2pkTAHuhQRMSw9yvMkfKiq1gx9qeJ6UtjKPMb7f4X9tdQQ9KKtmycKPpo9oVHnm5nYyPfq2pKFpu8C61JeQbvpJy",
  "key30": "JQaArMbXyRpBYVRGejqiVRrKMB3asWDphoCQZGqFAaK6VRCtbxsGPCyscbt5LNMp8fVpXVMApiYwmHG6vTYVu39",
  "key31": "61DoTYUF3LgQzhZay3dXGz9q553YEc7F166qHJeX89BzD921R8NRuAMknF3m5w5QcvSnXw51THmV4qBaYcUHkEp2",
  "key32": "549d5rPdKjG6uHYU659NyqSTFqpx9mDAZeAk8EJXHzczWMC5mqoURrSidRc15T8jZ25dvSwRVBMVwFjy1npDxcN1",
  "key33": "3ZHSRZzbbZU9BfcFazCyMSDy6Jj2BUMtm8zjwTDVP2QyrWnnZEhskgFQtCQBqyMGKEJQN4fWZP4qRsbauTvrdUGW",
  "key34": "3ugM8ndxsnCjzJa37jahgzpCZscAvQMQuRDT4PqNfxvsGP768aqJUxXRhgRE7HiqubPBTjdf2ke4R7rYEDHmcMdQ",
  "key35": "4s9sYrQvsRLK5rKzqWnFTEHSTnVR5SDrhTZw3VBmd8TSPBYx6SQFRWtsxzr3KH6p3TeUfvtnEXvz9zaUSrNvuE6j",
  "key36": "64igXHESURvkRee3CyrgMbqMhV6kofF7KAWwS7hir6TbvgdYtkAUjFHDKXWVRS965pFUj7LHM3GisdbeDZgKG1vd",
  "key37": "2qCRvCTqTz6zQwHZSie7Ss4fpb6jnpW8jbsARBD439oGFn9BTWmnfhtrjay377cgx1naCbWuNQ1FrVeYedLnVdPx",
  "key38": "3CrjLrGCRaGyqPmfdPm54QBh6YQpN8DYqZDLBhPv1DdDe7t2eRszbMTv6CmtyGuUqq5KyHdXXEvkvmafBs83yGgh",
  "key39": "5wHo8VZeoifnuwR61TDXr92Z2wJ5LQPLjJNwtz4EGLnmQVEh7Nse2t6fyixEr96u5zkHUN5ABXmBMHJEmvZsBzdm",
  "key40": "4RTSA2TwDuEP6jK21LTicw1TfUxkRMgad4graPZHv87e2t9gR2zUKYTm6Z9PBtyFD1o1Aj1yMm8RRos4qcRwLUPW",
  "key41": "5VLdBsznCnwQXzNmNTdR4nygPAMFpjto683qhLrRhbrURVTLpipW2RjTAcbhnMqUQVv8WtcYzsvar6cqVwrajzfG"
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
