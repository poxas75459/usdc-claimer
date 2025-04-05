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
    "5UZ7d837FSc4bN1zWvSPokfWBZsNwKVXowLWbbAj9HLzCdhUqg8uoGdFpgufnz18RunvLEudrb2Hh9Znqqg5jLC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eFE7qKbKF1sytjZjirggwRYt9GczvwrCw2U7aApJpfFosHJP6r7i8jxUUmvkapV3b9RRivNVYnQgoDV7Qzarebg",
  "key1": "5DHZuwoUkCSWWhCm1tqdZc1Xqa4WQXDPYjj8QFDvNobBaD24iNyYUx191zHQa82XvzTMyv6LgwiQKTEaA3E99r7f",
  "key2": "4zAjtKv8LSwKkdzumLuERUZxNJRoywqrkC3wBv9ZsV1rcQHPVgxNaX9GVtVpmvEiazuaMyGCC9VKBjFetbYG8jTx",
  "key3": "3YC35RKVMs2EkTx2ycYagtz9NmQXmi4dvsgDwHbKiPbzApCfJUeJ1Yo1UpQ3qc96Q5UVmJceEQLxHETwYxmz3h6D",
  "key4": "c6jepPHwd9SfjvUtfeJvQi8vwoSRCYpuZc4WBvwpDCXiNHbBj2ojKREuJLJ96APWAQ6Vm1G9RqMQMhtDLvKorNJ",
  "key5": "2etnUkGFSMrFcQbi3GAWJuabrnvYyrLdQz7KC5WneEHeWiHN9e5EfHUTxCcakTWdSTHZGYaxAPQcvcCJQbpNEEVf",
  "key6": "MwPyfGvFpW9YQsajjSiwSXb2DCKCzdYGUJzjrPoSjPcVCFR3r7wMpb7nzM4QJWNDW5nuVky93uxjKXEAtu7DmbA",
  "key7": "YjhRDRCUBsP1eyNp7qr3ubPcc3safKsw1UiJJTxEKtRFFt2NdT9u4JtBZUUHzBoGrQ1wKpeVkjM5sTq3xfW39fG",
  "key8": "35G4AZcZrgpGmTh69swGTbBQhZQdxM7HvNELdsGUp8zErNAzDAJDek4WSWTK86WStWyMgwxrAawZJ1nvQGycQJAA",
  "key9": "4guv5V6avhAayicaRhQEmrT9Vo1kRyimLDcz3j9yXhasKyHvnHRxYP3dgFFwFk4GXYDMmV9NJazbpne1dGpWKw5",
  "key10": "deoPhHNp3XizE9KipCjQTEVNCNkmzkmLEZywfwBb9ECj8w9nNqPtoDi641BzV1XPH4GDLCKz2m73M8DKzTyCYwF",
  "key11": "4WXjwyy3XCroxvwZe4XR2SZu1wxNBRto9tkTBnjXaj1hjxpWRzAThm7FQEAUQot58AcTKWKNVgx6hyzeK48uPhuv",
  "key12": "4AJNAn15XcnvMh5AUki2wzVJkGFiVw4Ngk2kuYoWfNCAgn8PA1ccKt3xuus9T81tzqxAWDkuJyXYtQLS34uyqMV9",
  "key13": "2MUmdRMz9KSAR5G6Mea6j59Zy781rrUjBUqtbQf4fSpk8nRipVSpZ1gS92YimdpW1kQQdstxzyHMJGFLRV2asm5K",
  "key14": "5hF2GX5AkrGHsLw1oAHzaX7k55eXaCeAXYV91P62t6QmvKa8YbLkLWWuf4m6sD1N4pi8uD9zLMEs47SUcmBNEZuL",
  "key15": "3TGPkF6GNgxNYpF8Bqmv9MzVNpbwxh43E3cX2H1K5MoRnu814JAcSjc4LZWrW2eriFAbjSigvCH2BbfQJrmPSknU",
  "key16": "2w8AxuwgTTZ39vCMW9fazKVQKRqqVH15fsBfVHWWBxc35UqJteaC4ERRTgZfP3iyA4KrcdTe4hjoJYW3bknVbk4c",
  "key17": "3Jhtmf63f2iGXh88gNpz1ra1LBFxeZSZqeMXw99sEtEL6W7eCWzjSNF4Vx1q5ehYFMrPAFKxFVySSJwmmdxqZjRE",
  "key18": "2GimbHK31qEMVHtgFBt7kfTKPjhqFNbRzDyQyJqNsRFyXZxdDnhvCNudAvjwxtTkp4Fs441d2zEts7dFMFm3PTAX",
  "key19": "3Ah1bXEQCWJpB48atBaYnaMknevpKJE4g3NZXw4Y4neRJZ8RJbczjJqLSFHYvTexKd7uDpTnKhyNDCVsJnZWjAfm",
  "key20": "4UCZ2jEFzMBThZpwdLHNud7XC4C9dCfvrtVfpDNL6X7gbs5uJEA2Tj7BoBPwTXyhqR97oj2ykrAij9Zm4P39KzP9",
  "key21": "4xeFgV2vqcp6JUVq45pPJCkRjMGq4NB9PJPpDhFzkK2H3RZPPfzfWj5FvNipSxf3rZXx9jHjapsoN8EjLCaEoKXQ",
  "key22": "3Rwh7TeFX8w2MchYJ3ras6CTLFhd3oX7H7PXAkGdMLDeyzU48Srcsxuqh3uB8N9sLTGYfusyB8WDERpnVdQM57DQ",
  "key23": "DZHyJ94Jre9FRC7NNAChPkPjjeBQqx1Jn1noXseCR2oCUjDcQzS8xVwcHWAd5YgYoeEfWktVcJMomUTPSSCgUQQ",
  "key24": "5dfsUkCZ1Q1MCxYxdr6VDC1hMwYm588qDNQd5C3hkSaKLjFhfZYtQQgMaXXE3Nrtsb3B67pKhXehfoK8wKorPAQp",
  "key25": "3mcCo4xQFLBQyNkrMgcEzXVuwVuDbNPdKbPuhNDPfA4uy2zhVABiSd7EpV49WAH5sBTEKsoGy8ngywM5D5K7wc4z",
  "key26": "5nD1kVzqEBh6cd1WDpCujASDC7KU3NnCnKzgJZvTCaCaoYAyXmo1oEAS4XGMPFGuYgJJwHix3GmVnzUkhwqmWDgQ",
  "key27": "63qAusyvWK8itYHwY2snHZLRs6hiB8GzUUWStCL2BhfFqMQL2678qmjsPZDXwXfRfxKovoFWy2kxWGgN7Euy79pv",
  "key28": "63oqh13tJwfVdmvMS8bZhUnB8rRcHAh66w4ynf2GW4YcewTF4jX8XH6vkMwrJhoFPSTEVwUEeNhz3m5gyJn8KzSN",
  "key29": "4W6gs6U1fW5ELVDveRXXzQVm6VfPFJ5fg2gqDQadQQfM286NpmVVadSgQaoznYrMhnJKDecVeoBgUYGvkG8jnnBr",
  "key30": "3ATM5Zp6hbc5pmKPJvvh36DUj1xKcZEtsa7UH8YnbD1TfW3k8psuuW2WrG1SoDtQW9y3Xb5gVwyRhicadvrnGnw",
  "key31": "2fZ8cq6VrWYRfRJjrB8xgPMjHWKaU1s8KLDgjUb8MaujLJxRtZRFY5Q1YcN4mfooji7GxvjxP3CSkfRbikD5pXjD",
  "key32": "vYCdjpeZsjCgRMsfHgZSfxxQxDtfWTWFdZKVZ23hHeqpUvRjeo8Hcup2va24YZNbxM5B32ca7RmLzPoVwuL4VRT",
  "key33": "4SfMFCFqdtAtKFM1Yk4szJTwTahxGrMSFUZck7Gh9o9bfPR2kAvny94xeH7Pi4mYeEt73B1HPdZcAB6gaGWa9P1x",
  "key34": "4rELXKFir13Tuoi8sAR1gAdRvGXvhjZbXfaLhD9YSEcAzXTSPS1qGRnX6iu9jWNx12x3G38NLgAf7p7i3NBd2dCp",
  "key35": "2KeF3Fe2P8d1rpid2ax7dPpVjoy4qfaPJEvteKpRp5CeiA6taC479JhqwMREpSyYxxNFPbAGgzrj3AMSVc8KbBjP",
  "key36": "4A6yESNJ8P2UmeRULxsnVKqe4w6FNNwZCH13TQvVbzWFyoBpbrBqHS8RSc2kTKy6Jb2uTB3aoMSAqqCQdUrWFgZ"
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
