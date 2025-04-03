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
    "3FAeMrEio55GzAqFgwF7yc1tfiGK1fuWjeXLu9ube4hQVZeTuMaKUJtG6UCkDWm5zZWsZ4uUVfyKTPXPE3obgPN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RPfBQBWvtRxJE2BoV4duP5vcLXzA8Ygi2c1fDywkekqeWeBC9rkQUMkZgFCqz8yo8JpmzvtDdmBWvLEimMyT2uJ",
  "key1": "5zurMTU6JogZhLHF8GzEJCDTdnnwhMSugvAA1pvhh7tKj9LHWckMLEYexA57rN822bFLNZGE4Xv5whbU6udeQXDc",
  "key2": "5PjjikL2KaRZw3wTx4Z9cC3ypBh7HMXKbsbdEKySAy8CEDCALboUwnks7aZz2mpr6D1wLBchCrwVpfS7PxbZBfVq",
  "key3": "4QVZfcfTVPbXtrBoNFhuCqZtfQvzktP7vusptsdjUMQv8FdYjmdQsYfc9MTMk8J1pStjSQCB3QEx6HwzowUGcVsc",
  "key4": "3EeaHb2uSNjY6Rz7DMxkmxLQWUJeC4c23STNJCXfDm1EPQmBSrquRM4K3nwi6Z3u3qTpBCo57j9rW1Mu1kJhMBH2",
  "key5": "MfeALJoMBuUY6Nt2pJ8c6rx8yw1kDyZ472TDXoPaYksqNj1UHw6mnSiepKNSSu9sf4Ddgv6eV7hrjLvWHHKmJqJ",
  "key6": "Fo8GUY1a5uodsjjgHjFR8BG9fYtZsMQQiBbmUhRmp2w4ZqJnXYQURMkandiy4QoSEuNJrFPjEPxymohPEQCJT6U",
  "key7": "4WnpWxVdCThnULtquqwwLiqSyDQQ1XtEx1WSiMcp95WB94yMZAMrw8T5z6EG8vMqzjHptLPqsfpD61fP7ui952gH",
  "key8": "5bovcQ8swhEC1erbF7pGjQpSaoyzdAhRoKMgLCfFLkmAa6R8eUybjSaqwsACkc1jLNaFT7SQVg2cwqBScmwYbPvU",
  "key9": "62PbPWbUuMfPEmffnfqYTCVohK3JAeJFR15fv8yergq7AMgXf8s6jDNhcPoxzU5TDtATGN7idHBbQNLbHCMsidZR",
  "key10": "4aiGiavMer4nWCTTExa4gERt4ABYu7nNeytGX4JUkUVHzohx158peiV9jsDkgr78cZMFZSoFWJuCYzHr5XkPp4SH",
  "key11": "4AiK5mLZN8NwyLHnVqxKM13vWLoy3oPhahPxL1MRGa24PiVPdyTKPWMmcNUQ3brAyg1kPShMZWCDG1FoVfGibn5u",
  "key12": "4u4gbvG8HHCLB5f6z12qqdYBw6FDL4Z9cDhm2MNJXpRpQc6K4iDTaU73j4DBkHBFPXrZTXXzo6uCukD7Ua2vfBVJ",
  "key13": "2NQ43fR7NVKdhQvUTHtVXbUn2RTtmoeZNNGE29PN7BrbHFCZ9mcVy3yXbkSt2hwRgUY4pofvswg3H6y6C6A5unQq",
  "key14": "5yjYQcMS97FQbKe4wmoAGuU2RDHs7JwuZbthLPcDGihtVL4hk6cwAYfABBYaRzMZkEw1rDLzujTs4F1xDrkHmrh2",
  "key15": "9jLVjR2vV8amGncmzMzTEHshha7UeXnPn15ZY2Q8darN8Z3oF7gMEuQwWjPq91gvCwf28u5LV5snyooPBBsmF8o",
  "key16": "4W7eiRSDma3kksyDnTZNd1tz9NFNpVDfai1Lh2gBznepbyzMhtFikptQBZRfNpgf1spYW4n9hwM8rPFwe9nj3sDq",
  "key17": "3fQHiqcjZYLHwLAeyY7mbhbdf2ppQzLV5MhoT7G45RF3ibki3nRHjwmmMEuk69FR7UgZXhUpkg6BqBYaZMAXWd8B",
  "key18": "5yZBUEq13QfTxnQxxybeobxTJxa6uGFWqmL13N9SqHuxg7vxmaLb9mptHBhJAgJtesR93DqAUps38vB227A1Q3Jr",
  "key19": "3RkNsQKqeXxJKioTiFeyes6QR61fgy5nxa8N2HRDFb4NogxLJvbEo7LM3xNG2UrxZXPscVse4Xvmi8Jdo2fibJsW",
  "key20": "4s4nVrsKxn5wL8PMg6dex8493u4NgHTL5p9eScyrKAb2b1APfxCkbf3qRipeYY37jEapwTe1wrG6Emeevz6sDWBG",
  "key21": "62sTgX7VJ2mmh38M4zXhRxVx6TAsXPc9RFkeHo4mV2DSqbjWzK4iVEtXn7BUDUoRAR62nonaopq9mnYwXnWEBNjf",
  "key22": "5evRis13WwJqJJW1JdZsM7pzDpQSeqtssn8wUeaPgeg4UV7gD2FUhqepBq9r9TGdGntH6bRLcnnPTre7h1oibpEQ",
  "key23": "4CqAwHhcpbcGzaC4AahJzSfRkK6QpDPzJLXHEqKmQbJf8q5MwDawChK9JzAuXSUU6VNE6XN3opPoPMsrWQy6dUCh",
  "key24": "4EQRRvX56zWSbmvt8vhphv1fFntRCun1Yd2vGXpG2rQdPkjTtF6CMqvCBjUnPpeN7kPswTC6pLY2ot2S8sRDuToj",
  "key25": "4FjeHfxWLh4CEN5MRgX7hxBrb7bCoSWDgRTc5SbKvz7Jt8HSFeTHbo8iCXEtgxxhizDtoxq9QuxPiyWPKKYY9DVo",
  "key26": "5P2TymrmuKXjRScztTPGF8CaaKogUFVsW2Zeb6Hj6LKZEHnMHQUC5ewdxhi4KZ862XrT82YqVVdaiFJKtRWaSu8i",
  "key27": "4if9Wm2woahKmPypC4rT8xonPvNRBJYU1KFCjNPTPG1MqxsBj8PivHDDUf3J5ZTtW9fX6iDoMdBmewSvR9HLV76D",
  "key28": "2bguYHULGW1ZAqw5arhsSCeVTwyKua5DeSNvCmy7gcsZrYk9fo46Uj5wwPEoQR3eT1SwhVsaUpjLGavVxqRadqUN",
  "key29": "8DtFgYTL7u5zGV6xasDFb6gMiRG3T8oVtCqLptGdwY5aSVH1ypYmahigTzKg6AuBypJZyavHXHR6JG2vMdzzWJC",
  "key30": "5GPdYyu9ak8ujfP6KGxitiA3EeE7YEo5Sw4cjGYGoXNZDDsYeH4udqZi8CDCWViuqoQz49QfptnutBzcCrDaHD1R",
  "key31": "5hEBbEvKBpLugKdndBnKnMXZ2Q2cCpqUhgpTAk6raE3LWorvyUHimGzsvVArh1ETyXzgMDZjZ94Q339A9tpia23k",
  "key32": "3v2M8g9DpvJAM5WVHfFitunCiuwwuQ94R47o5TgFS7UdFA3RVpYucXSiLkvZwA7oUupPYqwiVL7WNZDGpw44M3E8",
  "key33": "45YcSL9SK5r5yjAhHi3Rep2BY3mvCy2EyCzS1V1veiJ7TFpp3FMb8oLsVkZkPbxcSJ3tsBpnCgRjPm2cwcKvcdSU",
  "key34": "bbgQVvbFrkuNc9gdFHFtG3UxZLg8f4FAUobzht6BYexzXqpjNGjfRwZZVD3GptRV3Y5ph2sWS6DDZfaoiZvvnBs",
  "key35": "6qNFwY39MQdcSZeCWjfnTF8Q1ZWRXAhk2yWahXjAjtUSgSLqMWejGPYiDEHxxcULYGtfZp2KjMpdM5M3VfaHHf4",
  "key36": "2Sa9h9ebHpwwNayd8sAR8CLG9ZVqpTa19xHpc4WpfrUpApxGHVDGvP6pTDbgNPzJceMryM4rFfNiNDSVHFbGh4E9",
  "key37": "3P5MrvREtLiNT9vUQN35NMYik6Ba7Kp9yrUNjtRgPJ6dCG9eEzVAgPaWKcJ4gT1rUdQNfcGGVC55NFgHsek8UGBC",
  "key38": "qPToKWYem6mGrzZQ8ZdPfP9ynuxhLo7LkNoz8qVaarUBXMZcV3CpTAe25hoJuwCakaZCSM6DSZhCN9iCW6L55R6",
  "key39": "3MZbQHKQP41Fv3c8DtNagFRLNCcxStEhEAXGbw8w1rX5QxdTmwexT24cii6s84H3R3j641D5wa3H5LAYfmt7ksEu",
  "key40": "4gVSFgMYSPetAakjgQLjpYm7mZyRy8wJ7wYt99GFoycs5dYd3Dp1Up9k24w9PoMbReHVoF1PQTJQ6385JBEZ6G6f",
  "key41": "3VFom7aSvbaLiJdfKVPcYVTkyRV3HYUKfA8nsbhjdMKpPgZFawJFaiebtwGaw21tXbrHseuadePvpzV4g9EXZEaw",
  "key42": "425jNXCk51h3C7JxxemYA67fg2zKid3rRci7R2eF4zq2puwxndS4zLUgmVd4r823LCX9zW79D158ycu5KAPKu1na",
  "key43": "fHoQL2H5XFyufYNZDcFvqQY5KMxVPKvqfwQ2q4aioQ4PWpgsKQWWeCLav4jdD4Z79DGT59fRyAnynBNXgiqUXbW",
  "key44": "5ChkVhb2LbkN3YsKXy2sKbpGQzMbBH2Ph6po1hpuC1LBonEGCMsxwzBJtbesx9AeWfkSmMaFCKnUuiWPXApLGLao",
  "key45": "imnCFVGnz489CDnxPpiyjsjHWqJgVFydvffGcndVzE5NDkaKXcatoWHHrGZ98Qfpo7osfQWLF73PqtJCDNsiC6j",
  "key46": "22TnkyypCosm2jtWPMwzzkFbbaQnGrHVAcG2DwJ7LcspbMPSgntPq5A2fxkPCL4uyp3guyetPUv39e1fkGzwhkoh",
  "key47": "2vkFVcEBD6GSrpoqbHrFgj765G6NXe3p7cGCVZfUMWpkV9TYX9jsEe44hNNa32mjoeMaxFNwpAF9nKczhY13hZqV",
  "key48": "2tNBjGsrBenai6T6g5eWLcE7XFLVb8Ka5qKZg3uPJrBdmD8hin1WPsJ29Qnc8B5T58jfDbxt7vgkWXcz6pDJDezV",
  "key49": "kwV4NJjPKSGzqEvveL12twcyoWwF943FEC1Lq1ww9j8oT5AztpcwZLh48QyERpC2pPBw3hThUodALvtgonSVigd"
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
