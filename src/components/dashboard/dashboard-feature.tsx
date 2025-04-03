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
    "3TT143pVqv91ctHhoVV1cnnfRrd1T5TBhk2aN8U8DSqb1kQUfQTGB78xhi4wTVipDTW7xyUnHgthrKU2gXXvhYBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49nZycgGaGSaRoPdbHs8QNRifKgZLb3Fnw67wQJwkxdeJoSZZwfQkiB1FZkvHqL8pD9EKjqN7cUSZBLtgzkn7G41",
  "key1": "33DPMXXaFWYDo1BeTavkUBZHjaZPxDK5S5oPd55cEe8qEDiGr1cWg82JMDFo9djnLqGqre4ZTSiuLJpB7ej4Qn5z",
  "key2": "bSs2N21BmbRXZN6Ef5883BMcQ6xZ3KHtou1KbZ2N9NxMbc95Bn44JazWvUD9iEAu4KRYTeEWURNnQmnEt27GWEk",
  "key3": "2zHLp5YDMbJt9k9w3fsAzUmos4qfLimTrUqPNhfQ6QsYWth3cusrrAKxQhBEjPR6ckDZoneFLZfWH6jd1K8me7t3",
  "key4": "5HCTYQqLYhLAK2gs4phSykqrgzdScFKvGVKEsGNErmyrH5L94SRfr7RcYdbbTwXWmFxE9RL4mJY4z1M9dwNqpUyc",
  "key5": "5FzukRnH2TPYcUkQdchuTib6PMN7QU5G1tKxTLMxNxf9L8i6FMxKs8MKzUNEXBFocKvBsGQba2wZvxHUobWz6GTt",
  "key6": "3RBrUebT9mx6KxywuVHuMwaJ4C64caxqjLxamU1ensobzFGtqF3rifWjBzRj9rKy1Jq5Wt8o4JgBYC2t694ynj2k",
  "key7": "2TGtcFhMiXjtdXr2zd1SE1medKR1yYod5UhHdZpfYWwDN2N19Kq5jZpwSBkkSqouyFdYdyBWfReKSrFUEWtyCGPY",
  "key8": "4M8aMV5pwdBvjANFfA9J5QzTER214wcyyqmgDqpTJrigrwGZXsBGUCxtHrwN1GUcZWjMSvYxsQWdu6mGb8Xuupaa",
  "key9": "5Kd26jBwGdEobyCS6FPNTkGXvsqqMxVNdJEBw5i5i6Djw8yCP28878Krxb6J6ThD8EUnseHgPB3fq2KZg8cNjZBU",
  "key10": "5yiEWsC4aWfsTbrypw9MZ9a99iXrXhrBJM6sqPVakcQHukLTGBHctvmJ5e581iQmBHCGWNLsBQJD26qPFkWNbdfq",
  "key11": "2cV355kWuALoJXp34VjbXhe9UwBALqSPRhThL4mNEjjnmpnAsKnysVm9xPYTuZAfLYT8D1vpqNLRHnSt6rdx35Xp",
  "key12": "331AXHuz6Gu8iK6H5eKrMbM7HMFxayRRtp6eWBzJNYDxJVdxUJUrkntJne9DWs5PFhsHXdMN3cMvfvnZdCNHXVS7",
  "key13": "27JvDmyCaKCgDTX1zUCjCWHtKRGC47z5Qh1CfzmD8UEym2Doz2APmqxUMY65u1KK7hpVoPERdHvK2UHBF6cKFo2A",
  "key14": "4NqfxgXsWtjMx4x5ir5dPz8rrZexZBXB9RcQmq2Xp3wyp7QWyZsMUF2AcpjTXR7r9xEVePc83TC36ADuS454zbb7",
  "key15": "5RtQiYVu7qhLqETHhoLXUB34e9dYCZD22w54GZcVrMW2ahKPW8roAafA9y4meWdeatVnf9uawcVBngbB2Cuev61G",
  "key16": "gGCb88Q3iujNt9Y487RQiaKdWAmEisgqAJCicfs84Vz8H4Fn3qkEXkxi8NUpLqP9JAzah5jbm1TzqxnwKLZZrxq",
  "key17": "4rzCgajyFJ2sbQtFTFpxbLvi98mVjqm73Nj6S7D4SAbmsBVFV6XssK1j91jq7iGnpGgmBNZ3ymBRXBYfREwRnEZ",
  "key18": "4XBQS9nuDgEA5X3WeBVzz4BKTJ11YahmuSA95XsxuWvjGjnMYakVKXyXRawwip1p2c6j8zWvfMpk67DLoyN7yP4z",
  "key19": "4YmCHvTAwiGMnmf1wmYWqw2aaueqUykjvTE18xDp8TkTDVH71cA1fSFKZZV9v6t5dQhRKcfVbPWk1dm9HNraxZCj",
  "key20": "4pWRH76cKDjvDaRuBcJittmNCoY8ZdMd25dmUnSKaQ5kiqva7zs6RpZ2i6C1zqW9wy7p3NDFTZvoV3bsw7M8Z7CY",
  "key21": "2d3n89jf9PekUMgN3GDfUHt4mMwSU23dmFmbB1bMAY6UH89JyV3tUdkwkYomMfyWvtiLKb4NEy9oMQuidUibnM5w",
  "key22": "2hVXju7kjgBLaczohfeshVQk6SFZuuXWHRwLKvA5CBFk1uG6cWgh6J1HKQkotwBDTXEj4ktJhAmqiyV2n5P1cfMv",
  "key23": "24xGjVs33oox7i8yZ3RUHM2Tynqdy6wd2v2mR3S9HFRxuPRQ7xKAEcdFGygpmYXqEJPjHxT4ANV9D2jSaibgWq7o",
  "key24": "4W9ZqAdLWUoxDrTLbP4wAqRwdMcaHHjDkJ4TcyCqjXp8ueWggf86G9YH7VFuun3vr85wZUt59GDkvf4apVFYFKeY",
  "key25": "MTkbbeBnjjsPygTGh1UDdat5SAXvc2ezm4SHFVo59BTzTrsjgoxFrWaz4SDipRiN1EUecK32m1FPWR7vi8xidf6",
  "key26": "2bFC1kraSfrkTj1KuRnLYQzzjkVzpMm15hVfZo3z8iTZvNATxKASRsWmtbLKGQsFXTDdcuZHBXtfAwj1ACkPcvkK",
  "key27": "3ygtBaBeibMTB1hWMEUnv99PK29QddyBe1t8DXn8tMXMwwEbkqHCvW8a2cwY45Lsps8uTERL2qTi97uiRAfPCvPd",
  "key28": "SSY4sM2NRy7K74CJttMU26CdWsMW65aDq7PmG2S84RvA74wGrkJFwWy5m829DHuqFAWBU737kMu41CJDSekWsBY",
  "key29": "2tHQNcPEUuzWwvDvDyB5xZtQfzYbBhbmv7E6LSbXNi2Z2Hci76vNrpGaQ5ygWk8p68WCUj5jwCG2DrmV8xU4J4iG",
  "key30": "2hAVkZCuPRdgFjNkNxBKpga5pBxP9mXQqyWjEFCCk5k5LzSNAUzkRk4U3JrMwdjxMHFEHXGZzy75xSWnaDYAbVnP",
  "key31": "2VmM9ZfCT9qAuLH1GdeAMP5YS8NWuwwyjuoHx9Ce8RckAEVBm15zyiPKb6V4QG1jwtjsJsit5fGU4iHgStXs1hFN",
  "key32": "4W338N36DznRVEMfYvBMiRWecqfXXX1951mNidUmo2UvBxPTEndGA6MLL5USo3sM5EoQHPcpXnpeiBF9Ecwne5z9",
  "key33": "wnZUkyKYqahA3SuEmUFzRjCntBZHx9UiX3C74eLeKHA4UXGYunHmDZtrRKkp31k4A5XGXXzeTMbdqCPQZD9CMDx",
  "key34": "5U5J1xVJfe1DHnXhE7DDhe4mpebsJkUphWeTqfnE2eCpPspBNdQn963gjyDznXTKLKp2ynCSeJNoYYJVnJWbBaUv",
  "key35": "3yX5sWWoLVWicqd3t9Kii1546Dsyx985mPKkjUkTiPNT9GN7yFqZjFhFNdwBWBXW9UyKpMumLy4bTNFvF8GLEpum",
  "key36": "3nAkbmRtSaQsR87WzL6fWhXFMpyPgy1XEKhqPZTQbmMqcU38hJ4RkKwbF6DewkFxNimShxsNBrSbRQibtva4rXAS",
  "key37": "Kampfq3bcZS7bHhcfZbVfEQRZ6stm6fhRHHUkMHy2Ak81eJ9XPQQR7gULDJSHpSzPUoCyqxekHQJw7XXWJ9cw11",
  "key38": "7FP48c7aeK7m8DhuR86WZ5Bw8rsQSuLxFTFQC1NBSvE3cw15heqzyznRVbsF253D4T51Ub5M8JHuW3jPP46xuDg",
  "key39": "38E7pcZwNc3XdH6aPDvY4vRjQccCT8yzWk1tGZaHzAz5BXjEEhCkU1y6FpNi578QrqMLd6R7WhnPeVCsncFxRC1Y",
  "key40": "2wwAUpv94BYa9PsButTfyexK7YcscEibsvFNWqsQ4qLXE94HSPyqXR9KhxvSxav7wPstHc6gKqcPrXDAaZNZp4fA",
  "key41": "2TF7yccXCophUZLQ5pVv8svsT42h21hbX3LiANF2LNsPfNcjMmVVh2joev9vaZyHsXhnKVHYweqe9vSE1urZvmfg",
  "key42": "P61cthAS9w9xa5odZ8c62ZQG4jZqJmswamKSVzdhUJVCu4Cv5copuTpzkZKWDUKwNXRGwKeGW4uZhm7ucVAf9fK",
  "key43": "435gL55Jn7jY3wqrRwTgR3c3scAwhcSNQSZ37ZGLVL3ksq9pwGQWBcXubaY1YQ8ts6EMWUZf3UoivzUTZkce3Tjn",
  "key44": "4SMFEsNVoyhv2YJAQyNDpaVDSWpz6bX8E7AShqmqxHAhkSpXQduyqjsSebzjnDfovqCkvEDL3WMnEgkA6PQZL7fV",
  "key45": "4R7igNxbkfk8kVyUgGozVC6ScZbhTVaUtcQWBuZEH634Nc2FJxeZTkFNXg2xjnnWfMwaqJVBnZPycrzG66jC1Ch5",
  "key46": "52mKyYmSC4BTYZg4oRGG5FFKRVDkvsJ5wkpVs3vkauVAsW4zYc4qE7dV7uv7H1o9q1xYGD3qHAq7kW2SAYZCUofH",
  "key47": "4Frmkanpvzy5aKdvriMHnnoRTNUHuJxNuVJ24WjCaKMsMjWPDDxBm3kruNREvNmhU36Xk8pzD1gyAEyF2bd9Sd9B",
  "key48": "61jWbzMRnM8dWNSRqZUd5kVDgaipucUqNrdutTcFVcrvNoPdscHbxQRMsnAUufMY9TibN92vfWirjcPeHKwaswZH",
  "key49": "4zpnGwf3PhGXUnMxN3pr4LGpHb5wz5qCQJkeWnm5UYPsentvWZ4GYapgFF941BvZgpKdp6HMbhkpFD6wbhP1toDc"
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
