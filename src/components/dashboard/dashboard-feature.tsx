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
    "4axzoFDmvP2djSW9knMYMfTUR9m9S68A7T9AuUegbT7iCkHggaRoGziXENsPfzhdykVvm5F6xh4RJnyfTjibVtSB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iofmYfLKweneyP4K4ZMKLduXsypu1z587bXUm52snz8iVpYc8JDePzZuJz5V288NLnKBWewQNjSurb8Y3hARD98",
  "key1": "5nkdJPGcjdX6q6eUtXVEy7yFsEcq9TPXPTBZJvBPyUCR72p7DDZj49dYXijWmZTBBcVDYFTnveTdLCt9rGoSp8Lc",
  "key2": "w8mq2cRjknMedGu2tPYxCJU3YYReyX9hoam3yvALJBTDrNtSihhiRmhy6vw3yvMQQdZsvwJ9EsC3Ldgx2JedkD2",
  "key3": "2XMGW9Ve3HZ5YZz7Q5idVq68dLjdZpF3HFvWA5CKcQgYticeD6csEZaC84S6m2q7Su4SFfAnjta82qbfzVxW5XeG",
  "key4": "2Nb2MkWhgDvTZEoNM3TKm3Lngj5HXhNLDfd1RuDnq1S9E6VCWkwCpSva5wm8a48uhy8GeECoknZQN7E8n4UTQn5e",
  "key5": "2wNU5bxd52hfaBGnoBicAi9kZhtAQbyxuRswpdPcKTKau5RBQCibY8JyTPeh276FocE9XhgNU5DYivPYSNpP81pq",
  "key6": "QvuQaUohLELWhNVs3xXznzFYM3E95QYg5kc2gHPRnabu6yPS5TtWb1RKzqjsVdK7cZXLZgzuWkfALBKSh8gC8Py",
  "key7": "3kNZdkiF5G4EmCrmUvu81aFFDz1Zf1tCHXVSzYSStZHDyRDbWJskMYqdeGev7ys6yRS8UbBAgWQ4ULbLqGZGVstQ",
  "key8": "49qNbWacQbGHLFJ9Q6AZCzFToPuRYnKw6ZJEo51S69sngCe8Pgcq6xnCB7cYRSdhurmErt5FqpRUf69cV116G5Mr",
  "key9": "35n2mCMyfRvPq4TgB6BLWNasKoTrqxiQYwQMDivbwYCM4N5memLHufUjUzHgnyRAD6KAdbwkLzzSR6btnLnWpUjn",
  "key10": "27LkpQ4ibCPStbW8oPsawG8JTDAKxvQmriLAawxuDRM8xx4S6g77nETvkMpvZXkkwNkFryFoz5DgDmLTSaxGcvis",
  "key11": "49dnAyu3nZDj58srNx8oSVgv3smiMLTwkWqoDwtnXYEH2kKeHqLTNAMHxWtucvBF36QLsKHvehsjuXu7DeAKkJkp",
  "key12": "AvQXPDtsu1h6QqrTiULSHnGq2u9KGYRq3NhqsjRKUa2KuZ1dEchxnEBDk6rX8xZUwCT9MBuNF8BCVKQgsd1z3ob",
  "key13": "2Y8VBoarDYra3EmozhLqhNFKpGMUCDV9uStjRbURukUKdNM7fW78f19FB4Xu8Ho52TmSY8tk122ZX9qcMv12yCCk",
  "key14": "4og3eb9ijpYMTcDG7mYVRboGFSgQcvracWxq8QohRbd3u97nC9ZUvcLGaMHMa4tb4nqQzFii5yBzgkh4vpiJpoyu",
  "key15": "ivvM5NjwSdKLTUPKx1nNN1j6u5xMKN8J4JRTPvQaGAwt9XSuKuSS2YmKPBdp3vsMaVVPyhpKfA1NMnrYxfVS8m8",
  "key16": "26qRk1XSKsMhwCXD1azWLHF1ATzJuzynDm75rDgFsatrA4M4nVgzeLB5ZNwffQDQcqxPMQ9c5QKW17ULE4jzFCRq",
  "key17": "24oPbo3JK9D6nkcZkez7LnjgTKFqQ8sKZCwFKVPS3Ufn5jqBg3zPFMJkHSbeZYmbT5jwvTMsC8nSPvio5PHcbw1E",
  "key18": "35Ux9AEEu3t1HXtBs9eoeN1ZwFsy66JX9C3hsobVodpoQWWkxGa7ZY1saSavJ8Uz4u6EmdszgdfHd5dwvtcLL4Tf",
  "key19": "4kjQee8NTFGvzwfrUVMeQaFxfbxkwPc5acpRrVsqS3bPoUZNPrMx9J8KLJaui2nf4VyagjgtEMxNZbn1ZFcienR",
  "key20": "4HXoHoUfuwMduBBAn1o98yvun7xUEtoKA2crXCpWJ9WEdWJvgwuo5kzQS4sq39zRbwg3GiqDH9LicAJgvX7KqPys",
  "key21": "3DBqxALBr9U5CVWAbxrtRpDEDNaBTU8Gx9LA9eSuftnkCxRxdHbnpXApn8D594SSvzkS8k6yGhzshfiMS38rus9B",
  "key22": "3GKEpKbtqKhMCDss4jeyBw65GEwMJJQpUNeFKNZQXXoL11iU6qtmuQbhhPWKkr3vEHKpbTmbbrU2TycVfMVUtWcX",
  "key23": "38cGjEDLcfWpdaxZ3vP6pKSk3PvrvsZHTvFio64N7q2AeX6ctdBxrbigYgrY5KMrVkachMK37KBUyeZqqGktZeib",
  "key24": "2DrJqbZ413LuXCKJPHddxSXjSec7hk5vAkfNAUbwU1HPcENWzkS2cGn7fo3jcbr1GhY8V4jESJHJBbBvGmScaqFH",
  "key25": "577ZoqrP5UYr7SR5bpCucxt5bVMB31f9wTvrSBkW2vZbiJNsGrT5FtkuXf8nPk7itKD9ZRF6T7eWA1X5VypXuYtv",
  "key26": "3nkVZiskT52ak3vwHzJvKWDyQ7gVrLGU2eLhjU8dt9YTzHCMnsmno9gi8vSH2tA4pQzcGcQmQG6HRDvScrE6Lsq7",
  "key27": "5MyjQFwypoFx1iXfPqmPsWThe397KckYZFAgExLhvZRufui1w6oDBX2NjMMCq2XaTNUKzvwtspfUTnhuze6ZJKFd",
  "key28": "4Wt2Qa3uZTeVDgw2nfeAyp7xnjStZCLiWKARUhtphiWPomyHR3vq1vjdXUWfmyLmHQF6kD1CjG5NzzUyLom5TMvB",
  "key29": "UmJF14iMoAzbCRXtixodZe3Kt1pfkXVfiJ93zvm3SAUyDq5YbuJtZ4ErDBKRcBGdCFGrWayZ8xtTDRrf7F49LMi",
  "key30": "Q9BUFWxGXe1oK2oxnukLKxHKGfMksNQxGLwiXHFZTpsSLWRKmPpcxSqNRgYbLpTxZBTWiNBuSuWwnYV8873WwC5",
  "key31": "5RFGpGmnm7mYEhHHqkWk9RVocjTKyA6vwqkvf7TruQzfxczfgi3b83Fa3eRXYVzuEPimJjTCZXvWnd1YM3RTYfm1",
  "key32": "24mkS6LF6YbzJ6xbdaWDzkYaLG8JjMAJjxRSgbbMcz7ovdaJrx2c45fixPgaANBjRwcKnpFsWqeCoU8v23MecUjU",
  "key33": "4xouLdDSdaBiqvc9ijLN4bKNfPqhtZHRR441PgDB61SbkCdSTwX28Q2vDuwNfVrFN76PRvJjkowCUQXD5G34ALLx",
  "key34": "Gyx2o8QqzhrVWyWQgckK2QvVBakmwMB9GykpXJ3Q9PvXWUeP86woK9Uxy2ZbLPnY86HLqLqMKNHNhcDHeTDmmL7",
  "key35": "3nJGN6BPur3SrJVds6dHZhrYfh2BpBEYv1yEyXKsaiU9YMBuhqi83VV9xLNkd3CyLfXz7gFJBxWwfJQLZjFXDSg3",
  "key36": "n7Fn3KF43PcFVfwoJ7wBWLjmch4jpwSEgjPf9gtM2sai1D6sfDdZbGwTpGxUhTVNtDN43xNyEQZvKvkALJGxmTW",
  "key37": "3jnA8rmSj7tmuFTK3LEy5DxdtdKpVxdg15JfPj3hTszmikS6qBPHk5C6fPMhLomyzajSZ8T6kJrpVFW4k6BQqQWP",
  "key38": "DiX1143q8PUZZgVFWZ8K8pAHhkasfWH6GGHt6RuJthHrtWupPdcXW6zbY8FuQQNSBDPiUxvPC331vfyRMfjVk6d",
  "key39": "317ZXF9VeGeFRzfuuW2Sihg2ZQoM4iocx7JF4KzahyP4vHpypLiuZ5a9RnT9bG19UR4qw5AMXnTafBYenAdBgn1Y",
  "key40": "3gJ8buBjRvap1Sc769x2Gwm616stnNXyiyiXDCCWqPtJj4avW5yrDD7By2eEGwJxyH5aU42gGJmyXEMb4tk5x8iG",
  "key41": "fkkWNuXa12dVRJGJxv8j98aoz9jhF3EvT1cBZicbRHiNbHctUj7GcEbJ1WjkXQSzQgyyCJvyWNfhSPzqXAhFovU",
  "key42": "3fxb7QzTuVzUcCXqUcLgaaBCf4yXbFXyWpgok1QLegsjNcChyYnU6Whrta3gUaVhr2MKgBCyZEcU6WzRdhssffgL",
  "key43": "48Fhj1cBywvEXcCyYWhrpQJetkJFEbSKmyFXe1yZK9gV7XtieKWfoaXVdybxpbRaZG7q8ZNX6QGHf1poTjYS3ynh",
  "key44": "Q1mc9VpSeQbVabKKjw8nws9GKiTx5XEHdyceURVHofUvbt3Sivr5vPqjK9kWzyQZv9pBjjij9aD2HWDYbhMN8Pu",
  "key45": "2suXYnvswq4AybFDxH2UTPfW6JDB23TYLeErRG45EdhNDvP43j3iYmouSN4yD8k2RcHDDNfULn7v4jZSYpHrjAZ",
  "key46": "4ZdsU9zXeAXhPSChToF4jytvLVGaFEbkqC7ntZb5kwRKHRyZsmLo5FPVseBxHUxmaTYepCRiBauK6XHLij3jorLH",
  "key47": "5kj8ntDiSyKPgnV4ZhJjasqovXSrbUj4Tttv2229TmXpFnZEtJnMoxbZsdm1tDW85FWGxDe4Bekko61eYK73AFXu",
  "key48": "4gsbqyDGXaMRS8A3V89bmgFE7ne3mTq71suujZ9TnUWy7QDk6TfRmfF5B9zw5anf8ScQrYUS5hEvBibyhnTkrcj4",
  "key49": "3bhBPrHyD5w8EY2hy2Sftf1wauuQsRJ7BrgyqTiWpEJ9GjF2WZdfkYUr7yhSNXPHyJXtPeVvJZwjuCDQKEHKAX3R"
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
