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
    "5yJpqSm2paeqc22VKqEEr35Yje8ZZh8ucfAANSx3dERBx5TYoRP26uA956BLyZswRH5HNBMva5UzCdpNqxsB72LF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pS44WTsgkLc5YuRxeMx2XnRNKnDxPSKhqgJ9XVefDaZtghQYtnHsPT7LZuXTstDQvvY2gUG4fwL5EdcpbKEUHwM",
  "key1": "23sRSTa2JuKUkVuaw425UD45ffBafs5rHM6tDE72YdFuir4YBJfRqXJUgSnPP8C9tnoZNcFX2Lofcn8yD67QUqHE",
  "key2": "2ea6xrMMQqo5b8Gp13fVk8R4auKTSmYyW1jFoJdcRCWnojtntCdsZbizfRVGpy2rbU3ZbmxpGY8YJkn91EusuiAu",
  "key3": "3rwHaHWS4BkJTc985bPUgaxici9iS2AUSvcvQkKsZPg2fuCTfk2V9bs1DiWDWQsRcvJFUnU7dsHZ8QhkYWhH8BJH",
  "key4": "4sJ6gcKdwTk2rtJFueaSkYeVPMts6aZzsCkufmpfy6PyqE4UckPfsTrhuyUA5b3LmnqBFzuLFT5PuQukcPVg7j3c",
  "key5": "59ZiHA9ocWnddNJvH5teoAyVNXUbhc2RF1zhVc8seSZoJWhde63N8iY5zgbcgwVDksS2FuMmfZCyv1RkQ6hybx8c",
  "key6": "5R2tKXj4Rq38iJP51rkpaa6Px8QGcy1EYs8diqjutoHWUN5iyhvbAtqzdwthBGULAFmx2a2SNWHgEBQpmRmbrnJf",
  "key7": "qmzLDVWhFsVDneE1MP97a1PJ51nZm7AHWbFmxbzcXLky2Crnedf1A5DS7Dt73isPDFFUrrmFeX1MME86n5xrESC",
  "key8": "4Vr6E5S5qRNMGKXvxMNdag1Jgv2e6W7NdYLSMFzyxPZLzL5vDqZ5kLeYkRB2tH3uH7ERkNiVzM9Kr6pwG4CAquCD",
  "key9": "igSTHfycm57u7KegMQDVtUYnjUSUSve14hkokeJw3LsYiSfJAMM8zFGA5iBazTBD7oDSqYAfH9c8xdc2eiFvxBp",
  "key10": "4qxKDcGj9VYihWpNjN4ybwNww22jid8WTHW4Poay5bEs5nr4dWy7s8uECk3M82Fk9wNFWQU1b6tWvYWftvm8MDuL",
  "key11": "2hFEH9338VYb2ttUTQk825yUTyPwRwDvsnUr5ZhkCry8sYUFSn5TG4hpiHbUtrXcuTWs7g3RCRH7FspfSxs8NV5c",
  "key12": "3z5sYVQyPyueuxAj4dMAXPJVK7N4dMaj8ncmAU4AZraqYTXNyHrY15UMJCBgKDgJtep1qMVV2BURZMsh51zpr4Le",
  "key13": "6ejEKUwTibWrCnUy7meKCe5ntu913AELf1ebEAn9UrCXp4UM83Y5Ry2vr7BmGHsj2irmqQVRH6bTg6priF5sHDz",
  "key14": "3q4ni45RkxwoypPKG6xWKVmvCmEHwARt5xMjbd5UZw6j5d2DdrzAkk4U5hcEzbT51Dixg2nLBfeqBo36jqpBSnQv",
  "key15": "4pv55kbuVb8D4cVsra5Tj3KwR3d6YFhBKJ2Frfgo4RKQUreQhKuJzFtT4cqhCcz5UbSsoFFaz7vzGNqRYmoW1Y3X",
  "key16": "57hMPxYCfAryYgLfgbnBdSk7b6ucQ3bV1dgKpExNt4Jsvgb8XW2yvAoXcuFRDw9magou9YR6oXcrZUBMC2HVAnwL",
  "key17": "wiiGNgYxKFVc34T7FHTrURoCfHyHXcdkwP6vZGHTTaY7w166e8DBmLjKzJMma8zxnymZRaP24zuuYtGYpN3viSM",
  "key18": "22QoLW3nEE1kJR9CNcWwzrxSsoVdsZ17earRHNiCg9MU28gbez8igfmYKzs4XBiRnX4d8raHULT3fWPtJ8BxsB4q",
  "key19": "4RyCuYGnn7iTWrjbrT7qsnFsw8tVDQR6k5NwNi9RUoWHqjCaX2bknmGUB2yTjxNDV1ztNmcb5TRGjY65kyeXu27S",
  "key20": "3SzYgkNaAz7zjuv6hUe4qWVZxpXKsmmMMA2gU51bNwKRV9gBa1yqMC29WriDMJvZUtzpbPztymnxCWhVKG3urgee",
  "key21": "4TtnEofECzYTtT5pbzRTQshEU2LCogqibTBMuSGqN1pfSEHAKkovioJd35LDxsVDjcTcD3e7AE6s8MxeBcStxS8P",
  "key22": "pp4j2BXdf6af44jqpigmNTYKr2gfXGY6zqfuHyHHykmmcmu8pbW3jKryD44MTbAJ18UFvUzG1NE8pTKZpWQs91B",
  "key23": "4ZB63gpLH6KZSkNqzYxA39rRJRnVKvC2trgqEnjjsQUKjLt8tCAEEhonPgC9QfTTaq67BG64fwfruQDFkXJHyobJ",
  "key24": "5xMKyLp39cgCAq5UdkQQ5W7ySU4y89TF6LyP7NpFLMgf5JbiPojRHs9ep2pRL1rYoEMfRvdBUUnY2wpNAXJMJLEi",
  "key25": "3m8a8eu3K5SRQVQswZ5u9DFdLjS2x5ruWF5tE2hqvAgcduDZbtU47xgEDwBsCSnptvnLawBrhoweKaMguTvEVnZL",
  "key26": "427w7GRed5UCynCvJcJZ2PYgc7FMZ1RBMuyLSKuuNUDfaWh9MQFNGPTfhHN2Y6tqx62Yv4s7iagLjiZoMESMEiqU",
  "key27": "2Jga3jQ76mujhGTjVWFDpwBBQCQUb7EEPaoGf8uhw3krxweAAhvpZNbSYWPCi3ZAoZeeH9jwdjvDpa9eoNayFNAK",
  "key28": "GCb3V6L4AYcBCc74KvPzjwzU7LZ95ZQZLkpCfTbFYo5bNn9GFQaAoeLgCUNgfADR42ABDLrzsdm36G5kh9vYpbo",
  "key29": "DvM6awoK7xkpiJ3Rj4qCr7Z6AcuLxc2qGzEuRd6Ruw4ryaAgVTawqGsmhy3txVRAy4hky3Q3eQU6mE2K6A4FPe2",
  "key30": "35rtm6iX3d7UP3Cejax3aQB7oZN3eeGHaARXxnqVQz8hDwW1vy4Xhz8bjVF72cfNEPeuvfXWUMcPreJy62DePvUd",
  "key31": "3mzjNXKaLJZ1Harq1ZC5yg8dfa9s4z3BHx8xjz6zVv2WrwR12Cg6hSU3LfLhshJgJ78pT964qVVCTX6HS1yhxaoB",
  "key32": "2g4D8rBFrusbagD5xHePQXEJEZmoUQsEzga5FD7PEAVhCRRaB4ex9iGAzoUhVyyPgsb1SwFBEPjzwFZNd2MA5TUw",
  "key33": "5waRe5G47D252FPijpge1Z4Bc1gM1FxwdAPKLUkyDDJNQJKU9gL7CMTpZfdZrH1XnUGpsbWpU9oozazn6DgKzGpi",
  "key34": "jrmmpZtpNByGhuL5gSQuT91bauKasH3vJUzUfoJVwAtJn2a4k562Y4tcoytuaBUWzUSSLJxCEYGk8YSVx5JBcjn",
  "key35": "32xR6tg8dnyJBkvgC2mX7DJPpH2iJBEvPgPosX4UTvQc8yibJ9riLTBvBG9GcSYFPLam2dZvSuH19VBATfpaXBhS",
  "key36": "46MmarXNnBydHNgrq42uZqM8ChqxE79ARncqUBmPNM1uBgSXPCFvTGytBeky9u2tEmoGgd6mN55YfQnBkn7kXara",
  "key37": "QNmtmo2kbSQKGh3bZR9tUFxGg3byuty6cJ9iPqQL17A22ahrb2DdoGP5kCdXKWfZ7mXhuffij31XQn51jWAVCqA",
  "key38": "3ohRsBSP27U86mMi3odXn4eFcKjTfcPdNxUyQbiFbb6paB6Whg4FG8Pq7psNZBRX9CDiTUsabibS3czEBEp87Hsd",
  "key39": "5dmfrReCH6MBcoZ9ya82kY3MHZqwa2x1rYNdg4N7oEcmJmztfLGVcVqTmaTaAc4whrZCXb4Yz6X9efVu6nFDZLHt",
  "key40": "Zr9ZxMDauNzMvc7nS7zbLvX6YGmgRnEwFQNpQJFgjrGZX63HCiRvUce6pDBCfsyS9XyRrQjuNRYFpcrbXDD2LKU",
  "key41": "qbYypajJbK1z3YMSKemytBsv7Zy2sU3r5cRATonpYRPpH1bnMjt8rsKFQUDvJrHNGEqQHkoCrq1zg8K7wwT6Uky",
  "key42": "3pfCRDx6thUkvD2Z5QVKF9YexyPvx78q5xBKKK7nm3Q9JhTAcQoScATRXQY3JGcqU7UW9egD2C4uKGdwtgSChbXm",
  "key43": "4QG6DB2iVhZjGE7Pi5GP22k1fRxdwvrjJ9JiWeygHfQ4CceoqnePtpB9kEXwkzim8mHkdHmtSfEEyA9qHTD9Xzg4",
  "key44": "3GjCbrN4HYETygXPbnHXXiom3Jg5CyeoYWKUngGD18yeP7X8ECirkpHsXZHB78gXEiEkjseZfqAtneX6zoedzt1i",
  "key45": "4eBh7yEpVfbNtiFKgCrkT12qB6f4iooC4pgSrw7JaSFykbysgZrGHtVK6QhgRxBf94D8RFY8TTpmQaVMzNfZHD13",
  "key46": "4nuSr5AJR79GGZrkjc4KV2JmYmtEtANfD88LFjLP1bkEJRaio1mnHyFQzVhV3sii7Re8wfWxWpyb1FUwb88U2crf"
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
