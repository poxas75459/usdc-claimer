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
    "2j7aQGdYACiCsqBdWXfpCng3WYRf1xK4cCgrSRitwYgTLmc4xCQ4s1c6NYvVDXVc9hJ595M5HHech72LdXyXznfD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FeWvwHwiWhg2SE7PeQ7ovUgZeuWThJUoN7CdiudrzizKquRGehjS2xQSNVXvALf6cTfKwWdbEMkgAVe51W6Pfxa",
  "key1": "2t8YG3UMP1Nr3m4Aw7zUbReMgb5GuMNcUjVnCYeQJV1s4vUMVwXsDBymVzS1at1nLRvDUofAuVdhLfTY69wvRk9D",
  "key2": "5WyctKgnUPu9QjYye77SZ9kgTAYKgfHZKYAZBtNPzKP7dmHd7FyGJqydUB21sLw2jAwabW5i2PNnApemHQQ91g7C",
  "key3": "36VFzmYVAYCBfV2UF1tw4dYeDdXgx7wQdgdw6oXPDVPK2LHMLW8uQRsmRE3VKgnoKM3vyQccQhFmfNq8AkjabZoo",
  "key4": "3a7bPM7B4dPbF1KgkGrp3upxmsqKbys5PDqMmhMMpeuqs6vvbubAb9iSUhWxwzZgzv5vgxsJhPke3HK5AxmtyWvG",
  "key5": "XnQqR1gDsR9oyVZc23QDXc4PqT8RJBSC8rbjD6UahguC7LPDbDRRKEbR3dGUtU9RanBLw7ARXfMpUh8r1SMGmPe",
  "key6": "347aeD2h6MprgDs1s8TTbmLfNERSzw77oG5Ze3h19DZvRhiZte4iFnV4uocnfvziGueRTNHXctCyJrGHEBBp5juJ",
  "key7": "2EwKxCb4kUmsu1yorFD8jTWiD1RFjHj96VrGS5HE6EFAEsg9t8WxZn1VtDbAVBfHKoTPCwY23yYoatLQ4TKuc5NX",
  "key8": "fHVutSxw36FD9kGiGqTdzgNzj2L4dV7ZtdtDiANdmBKDytrY5TmScWSByLJ4d4KD5BLdpt2gXyUPhyVff2ReRiw",
  "key9": "oWU3zGoF4ht9vTeFXDTtpxxukqk64Aktbe3V8ukP2ND13tGHNdxtgcsECP3Wo95x7fHTSiDjpVvdgjDXyBjMN9F",
  "key10": "ASF7R6iDLvVTFnqEK98TELngi1gQNNQRTJuXryv8RNdDSdEXXHDy1QdyqbeWuAkZDeXH5cAjcVVzVcF5R2rdbon",
  "key11": "5Jc5TB2P7eLfiYY58gpFCfBuVEXdwdy8S5mkanZJA9HChBbN2EbhTPp288t3CvmjFHnPWoiJa6AFjnFjmTzfYrvA",
  "key12": "3xYRg7oPXZRWMCMT7SCyNCQcTMgKYb2Mt9Z6ZXXvdPxVpYkrZNbUVU2GmoVDUQyMoDc4Mu8a8DgiyAkkKJKMYbsM",
  "key13": "2fB7BfzPQkEJUb3cGGU86twBCJ5MNFwZGXDHYLZGVhUX3JgQen6CiKdpxkLNzRhqUELBasEMp8arpXZC2NHxN232",
  "key14": "4PtH4REu4VwBa4Zn75rWU3ArfyjcT4XBfBf7BpTuRsrusPeYp6pauHDjWWp8Eg1uobUCeErDxFWyfbWD6aNJLvfb",
  "key15": "5n9E6xmYgkU3QBcm3CFZG8XbanJCPoamZmn9iSAzo5QNPtz8mNS4syBTXB7bPTeJPLGm96rTndRrKYvB7UecDdBR",
  "key16": "5rbAJfEqcYdGieLfZJQQ3G3Tt5vdw4qbCzVXM6RiEuBHBmtJvX36UQ9ZjQKZcLMQh2Nb9Vv2c8npe8mhqHt2J49q",
  "key17": "4vo2CgbBor8Kx2ABqtbEzHEVF4wEyRHkAC6gTnxCUvHMYXD9sKaRCbQQvULkDQMgX3VUEXrF9XVhSwAfYrCk3nKD",
  "key18": "2PvifSWgcVWxk3qpvkMx9LQpbyGRk3FRbGAtan2z9vdLG6w7pH6SE16m2eb9RjdjnkCiaWX8yhUPdPEqJWbKfLYi",
  "key19": "356Dko6y2uJb9zjsgMD3hxZwHFrn25tZx2V2bJbziKBemrueBGNqFdVr2h34595z9wDud6bCWV2DY6yydp7C3XEQ",
  "key20": "3je6vRkuQ69BnhsR2LkxJqZ2z9pDt4J8hZMNLL8ArMLse2WK4NEoauZdaafH9T3fXVNuGC8KRSQ1NE9R6aiQ6zQg",
  "key21": "2WadhNjaQMNAJExjyjCDkEPgeMs5pATXVoSBGu7Xwb9cms2aJWDbhwEzyRAPkPwEUQbhATUEB6eRBGJR9fBaLEhe",
  "key22": "5RXpjb8jXqqwvZRdme9VxCvbD22XaTukKPai3by5xWQvV1CxnySejjAYVReYMXPFU6K3wrJRLA8DAcp8eKENJz3t",
  "key23": "5jovjP3FPcMivWq2XFfD9fjBTiMVbh3yQvHshijCJ8ZWXs2Q9ktoiSMqYcyv3S6zbQCv2CZHmGRvbubiDrNrf4jF",
  "key24": "3Pq9w9zBG66kQFCpUKSanNh9qkAo2fcQmtnBUdEVhpZvUqvcDLKwXTTgpNuGiQkVf8bEHqhtkCFUteh6m2ZxGaAv",
  "key25": "4zF74HjR8ib9VDWF158GMcgwTkJKaWUVNQgQzhi33hUwrrvXms8s8ob9otUm2v9A23vxrsPBw5FgbBhdY3gpg8hx",
  "key26": "4c3tbgoom22vo4K98Vp3wVbRNkTDKvKpc1sWvk1zMdpNn3kkEXEGbWpcR5DZ8PdhQ1PQwRnfbfQMdNmdyvEiWa9t",
  "key27": "2E4i2JwnksTSdZrzp9zUWpWd2x5jjzDd2Ruoy6P2ccFgi1S39rUpmnwMcgrL14Wm9ZSGEPjN8oC1NF13gjnmbXfd",
  "key28": "2xWYN9SfBG254b5veeSNobxE3F8cERQuEcqQxMWibPDnXEckd4HCN6De9iW74cRubGLnWyN3txzbQT11aDHEv1aK",
  "key29": "3DPTkfJiUX44JH2K5RMqDeYJE8cbHnuRuze752YHv1c9aKZMwHtUWTcKFHDyCdRiXsXH5W2WV18Vw5DaZAp3VWtf",
  "key30": "5ppBkceTxQjtzo9BYmsXe9Yn1Z22XcYUqAXQGa8VAamxvyojbp6Afsz6UqBd6bJixkVdXVMqfoRsEX9vpf6fMiBq",
  "key31": "YnXTXrAvYUBuVw1Rwc9YxFk3pqXUkUcjYJszfXKL5pghXhg7qJbnu8iNkRESRKeFM9GdoyQbRCtWZ8JjGy3iRq1",
  "key32": "8Hvn5hMy9aQ2ehudu7acMsNPCYxnXhc59PYoEBMfzwxpou38QaXzhcUuA1SQR5PZvLUoZg8x6FEqoUCoweNiNfb",
  "key33": "3WzQrvTiagvMtYWqKgddaFb23rbJ8ivNqxdkmXcq1vAQiBW3WceFxTRrTGQsGqYn3cqpyHji9e9WaFTnHpzxenv2",
  "key34": "utEAmrXugDAk6KZC7Ct6dyHtYCwNmP4nwf5FRtrDmeC5DDwm6exVTyWEXFUPyJ6hQxByeExuBSVN7DZAWaLgDyd",
  "key35": "AhzvzX2Jy8mvjZnX4vLm6sPEVBLiQybGw9n7vgYh37FVCc6qvtXeN7gB3Kzycv2MWgodSdL89mUHp4RaNE6wVSG",
  "key36": "3hBNTtiBkosb89fmtN9tK4FS4tEdrR6nbnp7VzfmAfMvHdwiLdYFw3eN11YTJ5y6NfT3bwDaf5b3bFjDySN6RmKh",
  "key37": "4b1UEnUq91HvaWTPPa328ZoZptWuMJwhLxGgYXj3CS6eBzmefjuPHSiKF29PxAgJKtpAkTPVDpKjqhijG7Enwcbr",
  "key38": "3sT1w2s3YfTbC6MnWQpbzjcpUbetrRyXp9A8hwRdJfpnjQgZxPeLC9h9QtrNk38ZrGxu6V9itq713mRpPzYkzRA2",
  "key39": "GwSH3bmRWhvWxxGswuwGNYVM1VBDuiXjMJLg9grKJUxYjbE68mB24ER1HZZFnpNf26TPz9FZPh6qSWjUSDoArah",
  "key40": "2Kb8nKogjQH2wpreLNvHkQ5kpFvT9oMdpoL3tH5rW8h6n2Haay3rFwPUbqZDVBR8WYcaRT8KX3vuuvVnhLU6NtT1",
  "key41": "4pUysSZKDSTQfuo7xc9bEMzBy8pSSyabAgRDMWgaRH6pr1iCiy9LhY5eUUwW2XdQmCnqzRqufopUwFvJx36GLXEE",
  "key42": "4ZbznUEsvS1XgdW6orJ7Msv2q9DNegHBDoSzTuen6ibsbJgmkmvmKybWDUpeS1hCEX5fsSxpahL45UhDk7Jk6zqT",
  "key43": "31zmj5AzL4mdTTE2oqW9K63Cq7b6zKEq6ERWkuxau2UbfwqHPQdqw7wHgbrs8gE6EFq762hAQJqH7M23SKoEDarx",
  "key44": "3MzBoeLMZfYTKbtUnyzfLMEQ9Pfame46JgdDBHBk4paS6PSGEp8fx1oUyMjjQhAs9sQQ74iipMz6U5MqWgoMgyaM",
  "key45": "2Y3aWcqQnLH8UMZ2MCnVGc3SsXbS69L43SMzrUxx8QjX4T8oGjYwCagiYjSBSnuqCkT5vhcdFvbkgXPN4vREjckj"
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
