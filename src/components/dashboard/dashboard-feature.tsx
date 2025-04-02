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
    "3NBrYezBpn4qp4wBp74GiQyRB61XUQJMQp7ufFqYx4zw3YxRqHQdzCRghy55BdmHUqjGZXeVu1TZQ1tQStfgwnW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4187272HFwCFa2twLozkRPRAxR6cHQjuSkQwTurmsKR56ZkFxQbZmX6ATPnongmwneJhg3yLMxuJGjsbn6pLaqNp",
  "key1": "QeQ5GaTZicigt6GGKzQZqUFNmfb389FUxDUd7iA4jQotYCih8fjuZEdKnmACzN2NSV5JoNEHS5dDfujcwUnXMAQ",
  "key2": "3Rnw2SA2QFAm45PHLEsEDzptEkjiMQtdZWp7aptNmfNftR9Wx9TJMbvmsh2nikVx2aGshKQzZwyYswWt1jR92VM8",
  "key3": "58DJye55stiadSoBdUAkjYin5P29jGaXRcpLNMRgwoAbPgrk7vAWesxNQzMSjppygS53mENTDUTULmnTXuxYQR6W",
  "key4": "2du8zHpzzBiM4GSJ7YvZQzSmSD5BJgyVhdMsvcDRipTARuoEm9AUfBTEPwj5R3riUuNa6QD4tz3ayWB2hkqZL2kJ",
  "key5": "ceX9nHBmPFXAR8cdoeCDDa5GdJj5z2Bsnpkocj6YQSpXqRJcU6xdTRDwTDWa2UfawFy4Ud7rdSkT4RtLqWAPyo6",
  "key6": "4XRu8LrftFuSwkUapQKfmNbUgm2u19XD6x3CDYgQ8YLm6uiymJMbynm8dB1ggrRhcPqBSdJ2CKscyHhVbPmywZ8N",
  "key7": "2h1SCVKwfiNKh5U9ZcdnJACDsdfayPyEJ7Tp47PDpTAuaU4DkWEFKtwSVrdTdWY9ZbPGDVhZREK1xE2ppwBbQ5Fv",
  "key8": "2RVxacvy3AYJT6Mt4au3CHPKcMnCDkC62aVCHM2Ypva2eQjYTjtNhS8369qTs1S9hrJpXv8P6D83h48Eh8jqMG5e",
  "key9": "5UgP7eQftQUGWWEt57BLefcahTg72Brxk2EPuMVxvqq9XoZe7eFzMfHyW34pzPSMRft6JHpTdEHebrSDwjRwkSHP",
  "key10": "4w3UZDkfff9b2wT4z3nKtu1ifEDeu7SwfJQjptBEuUPyFAFpcuieGSgbqMVfaE7f4yH1PeQdrBzLeDpRRaXNtVQe",
  "key11": "3pCijHPgv2bGvZ7fdwPNdC16btkEnC4T5EEggaj7pLg1jjSrkWk1SnN2KnFZgfdygauyyBhgmS594UuxWysZv4cr",
  "key12": "YxJ44UW5U2j5msGsuabE4VSEWKLMyyZFKF8HJPKSrpot5SvPzLZshVgwvU8pMvQTrWsaNYM7F86Ya9pmaN5eG2H",
  "key13": "4H9aKA5BHUuTGVBZsaA9veB5WoRErgDybAECecasLE6qmJ17jM4b24Tdb4kcxRhs7tZZhFKbxXy78bryc5WJzrK2",
  "key14": "3Hp9czX5SpLCsbnwefwBaBSoBpjrLAHT1sCPGjsGdujKrayBBoPHwik8dQGxpoXB38PcAemM9f9w69721QbCAA7G",
  "key15": "25VK8MuowTWcVFR159yFX6HchivodX5TgF9m6sju5cx6x3BVZ5S2SERwsJG3FwucJzgDQD8ZqZAYnG4fSabwHcQZ",
  "key16": "63t5jQscZNPRdJ6GgEBdHc588eWKEKzCw2Nx9c5r5W9PYuimX1dVFWWVegA43BSFa4h3B2rkg8ksVZQbkqADgbGD",
  "key17": "66wpDyieRoCkYfpmR9V2UuDcwhwAFWq8QizaBNJdzssf8Ks5o6Sc3yfW6qABPsH6UvZRBSWD73ppyNc6BjT3VkTA",
  "key18": "2egWDE7VLEzHoYu4As1jv4EcP36HhmjsCwx31ZDUKiTSyXJ5r3uqD63PTrXcHKVVLvoxCpVJTpLW5WcSLXcyEKmr",
  "key19": "39N7gdEQqmF9259hTFkTcbNiNZqXtF8NNRzeSh6NvUDGcek6PXs3GZX135MxmmBniJvHKaEZcBfFZrbZ4obu7272",
  "key20": "cYMYTPmxeWc4QMZSV54XKTV5PtwZsgoFNoqa68vYbyfg8FXUWn5EWzHcCa456NdNFEEchqZboEFHofARFvx3Gom",
  "key21": "5LzwyVYs16Ty38YoFt9PhsDK2tpVhk3CdS5Vinced6xk9Vbi8mdKdbxws9wMJnwZxz5HgLk4DNJn7LWiWB4XUNHj",
  "key22": "3X5hhziC79tQWxNnq4tcBVy3QeASQYGn8AZWbjJjL4zsG3SjL9LmAcUNrKnfBDFe64DUWtoeYC6ktTxny6bM661Q",
  "key23": "66Unff8uf9Q6kFw2G6vub1r9PC82C2kLyFK4TYtg6YtXWrhwJsk1fbPcLqoX2aTpxySTztqT49QTWAAr6EEzcfzA",
  "key24": "2ekFQVLT3KcxpLmgGJFMrNc5zJcCMQhMsFK2z8cVMTuhoAXH4Jb4JHRQuWTL2ATMy6vr9cGdN31547rfcoupzcSi",
  "key25": "5n7jVG2C1uDg6Y8cpUhLBfrJ7wRKZPMqmUwhMuLKq63ZMgJ7nfFfDtn7yQh3xw6frHeafh6AzwDJt1Bw7k6xHvdr",
  "key26": "5RQW2nhqyVtAMHoZoBACpaU2imT35pRkDXefYtymaPcz84Q2S7PhouhRqKd7mCgLstREjyP9bArZaaKgdty6wqG2",
  "key27": "XTk6fNWfSCVH2Az6ztnBASoD5YJffdpc8csu6mnU9JB6MNGb3xZw2ubvAXRMzDs7CEL61t18FuEw5xPwyTx95iA",
  "key28": "3jJ9UVQHj6YCEj4aHuhkab4MCdjA8KSLgF2JKfWQDtgs2AsTykmEXrpmEdmyoKFXjWPqyFF1nuBtBnxSJLtTnGpU",
  "key29": "hLRJDqChyqRaNbcDyeHMj3ZRaNzWaHPjGkPdaGruUAYfZPxzzbjFmtjS7pAMjyR1uGaxwifZL7Na4nKJqZ3z8Up",
  "key30": "3uC7DGfcA7bhnPEoHE2xL1uBQbSLLJ8JuAvSztwN5ZQo8pgHS7L6qFyZbJPQoyRTcF1d1WB1aHqx8P4NdNEWxvhP",
  "key31": "4iuZCywtncEfMjvJnmdrfRV8eYAc4ffreM7Mf4yJyS1gHNLSMGn28Z3R45BdXkUqtFY2dURosa49i5oDJR4D7WrM",
  "key32": "3SUYw1yYMfa3Lp3pDY8JCaNWAcRKUApt3gw7yuqs27GWtv3KcaM85Mr5tkQaWLF8GSfiTcqVjtvRpMzV6kJLxUq6",
  "key33": "4kQSmY8FJTUVQmyifWTB1N3bTL9YfrHYQDFtCHXS7qdCF6nkgivPSHHxi9hGz6rzkNj7jez44pXKSt9fit9g85yK",
  "key34": "2wFtLEePtvAVbo3ERwiiQKzw6R7oKTEXRS3BVvuy6yvP7hFsGp5a3vhS4vFYXUWnbf7mPh1A3cyEPSRk37knLuFp",
  "key35": "4NJram7AY4LyHYqoR73cvZYu5AxjrJ81KLoPazTvRj4toZmk6JcRkcPr9DsCqrcir1ynvhnnm9fAitf6XoKk7g23",
  "key36": "4eLR9FijHnGJG9dEXs81DckQxNCTiheP4VDq8jqLKz5DjnnDcPj1qXhhzHQn7yR1mfn9oQ5dJav7pfrAbbPnEC3L",
  "key37": "4r59rW5TowbiwLd7ZPduYJdZXQ39SWP7yDezJRP6Z6kRUfeQnYwGZLwfVnntfGyeNDS4gyW2S377PJQd4S4jDHN",
  "key38": "4qqdLNhctjE9mfqriKWzaumjVSsQiPqeJJu4ieHhQHJdnBAZmV4fiaFMRzgpJSDpL7qMcjqBWTYfyBjHgApUf5ao",
  "key39": "45NCCaZb5SLEuGMc2tLTkoAskdswKQ98nGBFbmabpJtmkRtxPTb1kC1JMyKPTZzGbR2DGf7bERo2BMf2PKxRHXdT",
  "key40": "3mAAfsiPFCiLeLVsFrxf5a3UDQ4ubTGRqJdjc8LM8sVjxHzkg896xaSXCqFKkK18U3t5Rx63nDSyZtJgmqvQp2Y9",
  "key41": "3KQv3ehxCsiMJx4atCwh6rqTiXhdpZCDrHcARDeWu5yi5CWmNcTHjda1NwaKbwaybfdQ9iCFcNpEUn9fzQc4Lveo",
  "key42": "2KVTPaNtDhg1ouvyLPgBJydE4S4XgeSUADa7PtoXVERdPKbi8A61rPQ3WG3TUw6UfSu4X8c8Wfp8QMzgcYTvzKzW",
  "key43": "59cQwhQovRnqKijL5bJeWowHsKrGvTpYRWBsnUZbVgGvVVrMKL6X56UdrbF1RejqrAMuEsDhs7M5rrXRw1RJztw7",
  "key44": "PEQQuPwJtBAeMHZG9nJXb9nZJ5vBi5juptQa9MBErZemEkd9kC6D2qQ4KYvudReZShpdbf4ieeBwuS86GhnsUqP",
  "key45": "2vfGZ19nmNq7heBcoui7sy2CJ4keYj9jbgx71E81KURSEboXMFJRSW1wMKQvmRARz7VUzNyny4So3ue4vAvAK3cw",
  "key46": "249i9jDtRyr5pbD21SK35Cufxbg5N6smb2Qi4xzD9rscLEcWzXn8u3uR2ajk7wiz4DcQ3xr9Y3HJ4A2nDBmnq8wj",
  "key47": "4vziC7XgtH5nLGZ7BKfXjs3Dx2VcvbSfRKP4eWmUksHvzDcNVMAsy85hC96ErEi6ycd2GKN2rht4s2KNt3g5sVFm"
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
