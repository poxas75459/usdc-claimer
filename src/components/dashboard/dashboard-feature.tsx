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
    "4vprf83ABAKo3M8uYbji2utxHKoLT7nnbP27S9NGSrLv3FDj4y5vqa42AeYkSSLTYTKCzL1fAus416eVjKmVPoeJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S5dV9SF1BJDJWHcyNK9FJzBMXU3yTxi35L5DN6iYjd6DWNZqGmEj3U9LNaTQnUznA8uxQSyeLvqx9Ft4vPveQ51",
  "key1": "2m8e3PYyS5gBZbyQWsSha72W9Gm8eJyi3qDwZF1grbZ3mhiYrb5RtbWWh8J2zdmZFsYUao7yj2ogNJhM5rZEj49A",
  "key2": "ZtJu9Dxzcxu3TAfsEMYmdgsGTQpka3dpfUzUrzdSpWjmGFWTTeYEqCrhvbtvA4icLdib3qH5axT9f4ty56ivDvj",
  "key3": "xXYKpWJNnB2XUGUdwaxNE4S51udQ2TnxbWhjYugMVfA5P7CvzRo1zfqwjFhoh6uFATD931dMnJpoFZpTjiUXX2Q",
  "key4": "585PTyF33AXZWZtke92Q5hSYgAA2ZusudcjhC8rWv1gFwdYyMShHWYpC9F3V3BzLdQZiPShYHUYSv9MwW42vqNZD",
  "key5": "4HfkZgmfwGr4KYpiqMGevkoBpXCEhY9Kc3hAc9XzWeW1Ke538u9Lx8Y939b5HuHeYBJGhE3X4c2Lbf77GwkWxspY",
  "key6": "3KKb56MF12mQhTHeAFTQTMvvUFt953kYDpAvd9kGLXxWPtsnTrS7B53JgUAN2DJExyMtSuPKmpbnBG3pZg2TQPhj",
  "key7": "61hVAU2mWgga1w3b6i5uvFQUVhkCqHNr451XYkNSVkzuXfrDEje358jNMY6cLCr2FyDdD1wdMBAvYsNn1txEoykA",
  "key8": "5hKrFMaT6GohFb2mWE9jynjH7v3NHaQctiN8FpJ9fSLY6LCdhXSufTihdfE1tz1Fr9eyYXihKxYtshXixGSKwhdZ",
  "key9": "PJAA4gj94Z5v3K79HZrY6bUKHX64qQrXgVpQR5d8BnkY2ZSkiH6F6V4kvQ6joReuFqc7xVtG9swof4JbxuSHfMk",
  "key10": "3n6H5PXX6LWVsJtDMqH4PUY2qFhSNFoVmpKpZiZHmnmxMrPzEpG395rRmD3uUGUFi32gtFYioEKMEkkerW4yELLe",
  "key11": "27yiccAxFuitMUxdLkrxVZUBwt4LP7MWGyQo7YhAPy9qkhr9D2AtNe2omo1jfNt1aAVDzaqW9aQfXKadnmqrLKda",
  "key12": "365Qyrs86dv5nM3sHeGKwDWQkMqCAA8oQopXrjYghLt38fzhHQw2LxnKVBexp8Sx6ANmdikwYimWEsmheqMJnw6R",
  "key13": "3iUxJ3KCtqmTj8jETPZRmcgegosFVCQd2VfjiWvJWb822LtwVwouqW95aovpXFWDhCXif52SCMFNp15tQbAykmVN",
  "key14": "5NifvPHR7Vtb7GcWgmwYJ8VJrgXr2bFtbccADpdRfxMNB8Dbnp1JGmmoEQuRqkLBttJc1BXURFdonk4Wv3VFrFVB",
  "key15": "4LAKjekdV3PmCwXuuv2JKGFBZpqeEFdpAsu8FUmeWpKUTgkgCVtKHfd8R9ttCf8pLX83zwrSg7jhYeFkJNVQzvV8",
  "key16": "3VQLDNSCeptCnx5wkPgJhGvVVKh33u8ziUtNSW1meNekcF3JVxnk4N1yRan7JfetB7pePN5PG7HmQH9uuPicjBN6",
  "key17": "2goXuqxJQcFjsV2eaLrBcGP3FDGJ7ahYGuxNmuacUKUG7bsmfr1SmJT627QvGB2DMs9EgiSL8PYa2c9rQvLptbPg",
  "key18": "LjJzTGqQTX3pfqFtst4FJ4k24zuquDPqpABQigCBVSsKjhnULbp4HHW8mBrq5JDxq9TFo2RoYY7VG2oVV5BBEAV",
  "key19": "aEjW8gPY7crmSQP9FFFyVLzFUf4DFYErMuvpo4nhZE55WWeJYYZjHxZiwSfcBbM4QjbZSkVTW5CXZbAVBi3Ysk6",
  "key20": "3xr3sFq617N6tvxW2ByrMVrNpbqRgBKW5n6pokJMfE8jT8QuGUWHDUdmpf8zYdK1bmtwHykTxW7DVun5Jd89Uh1E",
  "key21": "5QB8DwHUPzC2V4QA2rdZumP5hpP8WjBDubMRiVmQhDcTepF2twJAWtGGYuvPi6B7nWvgLiKjYog2RV1nS9cXsHWA",
  "key22": "3DUCikcnZpeQuj4hiwVYyfxgeztJT1V1xvjnEiDeShwmDCJS9VTFxAP15Gq4tj3ufAgMSh7CLKtMm2P6FLffz7b2",
  "key23": "63rEXLV6h6eeNtyHzqMYx7kwsLR81den5N4ruvPuFJRuJmfDvM36du4AX8mnTy6HtiLCRSyNyLLykGUAw1WProU4",
  "key24": "4zrBJj7GsP6cDDG2CHHCS4dAo8r4t9mKMxPns5u4sfotCfHBjcGk6HAdV4DNe4iJKs4C1gDsZqtrrXSD8B13JQ22",
  "key25": "4i5XeqhNVTNPZ2PGVT1jdK3JM9Yowk5PLeyfYzweEHxskW9ksTtDKi4myqq4FTPdMTstVdD2DfcciEbRPNzCoM1o",
  "key26": "4EaPkdMccibTt6dgKjvYGXGk8wA3hQ3fHSwqZZGrrT98MU6bYzahpW9avRmbRXBEQf9KpCkEgxkZvBMWPFzpbaDE",
  "key27": "2nozvnNTsh8YAevkqHTH9jHdMw5GYE38sHhGX3R4o1T8UBeuhU6auXfStiEeVmNBZt8fJyaDW5d4A6sN9eNWCPTL",
  "key28": "2wjHNjtoYaWqWPqcLj2QE1DzzVH6ABKNkSyaCdjqqKGrLqgP1ufe3ZuUgoVdh378JwkDpMkoNkT9ZjTPrY8bNH3t",
  "key29": "47Pe7WpZKM6D6HeG8yWQsvnJUbbhRBMgtmDRXMtZ2P6KCWYbusMpeJYDDGJAusHCvkmTnPmtz7Aps1EuB6ntjHP7",
  "key30": "59fUFPYxvkuDUvobj63bWLacjVGUmBYW29SsnWueZ1LoHw15YRzX6vb4d5m9HTajEu3Aoir9FVWiXov2Yd9D3Vf",
  "key31": "KZ1kFaa5AKhgpfuyq4HzqFUW9cbfURBo1vhFD2SQDoPRKYymB7mzqjg6fQ8RVrybuigzTzskPK9yLtK2ncpJAGs",
  "key32": "44mjNJ2thAcWL16aiKPjHPVshBAoru4qMhHMT8BugeEbznYQpH7UDBdCAmHdbaHhBa5XzFzvDbaSaKdDPD3Kwifk",
  "key33": "3mTp6Q4AXob5hpJVoVArC8XuA4Y5FEmxKxeYFzUSZjtfcjqpA5tRBCgdLpao8734ge34HDngTc2oJ3AAkfdt3Gpe",
  "key34": "5vRC254ei1BntUiCo6kM6nsqx8AYCCmgwj1i4g2EMmWedRVyBT4mhGKBxVcw54itb64stfVsWWYE21hjyKY2oGii",
  "key35": "3KnRgAjUirVvyLPzYAQpEgECzHCQ927qjmrSAZxKYQ5JBHgSEM1ZrzcZqSaBhbgYBKnWYeXxPS2pGeLA1nmyJPx",
  "key36": "4g4EiSJd7rpHUV6YvBLmEJEJf3NEq5NiD8w8etsCpcZeMetAPmzB3mZbA6pZccxfGVcpx1AzshnKLCxAByAvoQNW",
  "key37": "5nzWHQA5WMqFpkcQHre5V5wZ7r1BbvfcKGW8dRRvyRbSeUVTordSXqz4nN2uZUUHzepjmLLrNmbCcP8ffc95CcQj",
  "key38": "ULS1CjUkNZSEf34o3ZvmCzTYvasdLkWUdmB6wDsNHQGMTquDtTw8SLW4iyrySif3ssFcy1vYuEKcn2VNpTan1o8",
  "key39": "3XLgVxtucwJko9gaZxkTgjqMffiitzxwEy4p6pBQL2hsezj67vnPEvCG63tS8gFzgrsrbAK4WtogiuJodeLkpj9j",
  "key40": "JBDQqwbHfxVyDuHfQmgCbL64Ejn92fhP8qW4H3J3ftX4HoJeQFvNGTyJYyTcQjJ32z1ac28pzXPPyzpTLF3zaZt",
  "key41": "57ei2uFatoqTL7hdxRYAGp8b7tdnjqc5k8eHSa8yHRcjjThbne4h1oZgaoanxNN1qSAuvdrbiFEH3U1C1ZfVVKWS",
  "key42": "2TZhB8oUiMpEu6f141cVk7GsbZ6FYjLeGAgYxpL3jDB8SaZWppp8SfQrewowMuH2VRb5FgkeqVRHoejE4mzQgf77",
  "key43": "2SDrrYgjpCwnMEy6wL8RBAVKsiCtUyZSsgA93DqS9cbVtktU9q9ZxCd1uX5zWpeTHhPZz2J1cjjEFE16yHwyZZ2e",
  "key44": "j9JcLNnnG9g8pGouruvtUY6pWXZENuLDQcmg1nHpTYnvRNa3AtT8GbTZr1meGvDywunLedHSoJEmKUmLdJFekWv",
  "key45": "3BKcUunfsTZxcmy7PNvV8xezAjXrxdReEzPkaW93WSL5TweBm3qdrnYHtMy8PXNxh64C59ifEjck6YfzZZyGV8qz"
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
