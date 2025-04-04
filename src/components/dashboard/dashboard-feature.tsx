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
    "3CXE4XGBJkRj1rM5FPhUUnaC7HipZtEMVWfY5SyTiiJyta5r3NNH5HLLVGABFucm6pFRidtpNN7XTzutnUGCRZGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KuPZ5T4snkcTbEioHQgW32q19tSMLFwFd5YwJwSn3HCph9uk9RJmPriPJe3npnGmr72eoSbdS6NKf5t8e1qLoUm",
  "key1": "2pRqbJkGi6cm9zgrSe4yV8YSZqoUkTJv52Jy8aefEZS9DYYC5uJLHhGR3h1a41vBuPtBgQWGuGwmjBYMJ5dNfbAd",
  "key2": "9muR9ATqtaTcLEbuBQwSGYQPVkfTedPxUSmSo34ooALzDXuaDvFrgyCo2LMFroJ1UKsHbftmQ3tAvRuB5v77Sjf",
  "key3": "53kYiZjc7iLCVJZ2ZdaK1D8TLo7kYXRutMQcFbhDc59c5kJaiNYEghnARMj1iffcEQPwfZ9kS2M3pjzpNvsAyw8q",
  "key4": "63kgX1q6qL99LTwpRvC2impsqJvLPqA6yaCk2D4mtVpuBR4baW9hCukpXsxYYhj7ZeV6e3JfJTx3r6b482ipGmRN",
  "key5": "3QSecbPUiaQYMK4Qnun1UUCCMtyhQV8fkjcWzU9KwTCc4qKejSw7tDo5C2NeagYo9fTWRKr4Lv7eEf2irxaSVQsW",
  "key6": "4xP9AvYTYMz3GCAkzYJfUhSRuXRLfFMBzcFwo7DMWD1q6U8MRxbMehNHLTVBkVNUKVQ6aqq8Z7D2NdynkDCm4dmA",
  "key7": "2Tt1TUFVGMo2bRjhcHjjH9MvRkMKtESpfF1Dm3ZFHRQLKq59DpiHqDyaFWg1eBkJedWkjDuuVbqPqLvTk3LkshPi",
  "key8": "5UbMqidGMYTBLijxbi49ASj9dEQScig12v6nu3sg1JNTRS4jCQizK4xsafSfUfDDYGHtX4JX7dHUM7v2etgCH9zh",
  "key9": "59bEP9AoMyAkTDws8C9EheipBZEDVgk9JcFYq5NXCvmQ1T3Vxp8NECGeX5BxCi8DC4t8kcQWri6vVjopQQxSU8jh",
  "key10": "5k5kKeKyGHuzHEmFj5Jt7x6482vi1DWm5nrq2xM2KsQbeiHxrHqJ7Vb69GQdNiDoZRkNSba2EXBn61viv38KtvZy",
  "key11": "NeRfknAK5jrJNNxZZ36wFzrxeL17fF8KC8e17H2SDpnYaUVEroKXbt8dgdR7g5whZviSCZJtW7D55Y2y2pZeotd",
  "key12": "5PUkDUWmmdgmRhgBbhEa2aAPspxT4jQM7Xj8PRXrh3ko1S6rVEHsn2nKHn2JjtgoBCqj4wFMeZuKBgdUaAzbmLDo",
  "key13": "59YpAai1Uc8axo87XRu36681qGxcvW5ucCbtfvxs7GxGqVUufVtSyvaEvocQLBcRZAKpmVM2XaUfZ5GLPaR9MCfg",
  "key14": "4JEvU195T7zNXXprHmx6kuPMVpXBMaAG8pLuPYuzkQqD6cCoxqvCJhM7HziZFg1rfUDWPMUc78PyRzMJGZX4EBHg",
  "key15": "5wPDkbHLiax9ji7nR9EvYKvmav8h4oUUEXRGM3XUmHrLVqHZ1TV8nXfu5RVZ5d4tGa1WKQg1D7FRgZWSXEtLsQT7",
  "key16": "3eKSwbUU6SgQHBRsB6ji7QcRh5vyZiVgNncY1JjNQZPg1tALA5A6FPXJaNRPgpGbQicss45UTkzH7iBa57oat6Dp",
  "key17": "HoLrGhWQA3b93W58umgxeBHJAMeYSxoxgBiSZVU3H266Wkq7JXFtPBMf7DWpPrwLpGiAoEpB1K5Lwf37VHtZR35",
  "key18": "3qprvcJYrkCVKnBxiXAeWdpfHASxBUoYrLQQWs3iH8fpaps3rLvXxqHvXxY2QFP3SpgGWbWwjR7eSTSkAhxEJy6w",
  "key19": "3mZ75QJ3Fukaf3bPcoo671FpD12WKvRexmwgmH5UBCDriHKQJxaQwF81o4z8Zx2agcKRKKWLkH9CM8SkB3681NHY",
  "key20": "5S4648YnKL9D2jbdG6xkrydCRHQyKszTQFec5YgegU3ySoZLwKf8nkUmpUtNp16WLaHUNPGHPAhLhPN3wzCG8MgA",
  "key21": "FpHFuD7PNrKTbt6qYF9i6j1yiidPWuSUUJCRwKJtPvdq9XynPyHRoqyDagAxvXZY8FjEnutr8Zr7r2q7GwoKEPa",
  "key22": "qj4yFd85kBHGxtdfuu8oCRKXhW2d5wUzN9e4KyRkPKsh4kAQSybSWMq1Vw1hVFuwUZCwmRn1676so7xxtaTr52x",
  "key23": "4yAu4ipXjkFiVH7cU8iA1nw4ZSVz3tLMrsAxLAmrgdEsiNNoyXPrc6bsoFGTQtdsF9ss6jsqra4wsmBtEuysV2K1",
  "key24": "1wkLsJS88hLyorLwKSVdhGsZRTt1MRFFy9vLCmsHuL7NgCmXNxjuPP4dHaM3YRoD9pK74zvH4wQt4vtGfqYjXZM",
  "key25": "5pTpq1Z399ZLMB3ceM2CeWxs7h1RoWECuvVxCiV4aRydCrze83AAYA4hAepLgyY4QfVP5C5wQt5iyx4i2KHgpCDg",
  "key26": "28vtiLtecGBTSYDmCbzurQqFEHE5dK8LkGw3dsnGw6nNsDWgAWFVY2zbGhG6kxoyTA6yJXfDL8g156NfMJzxZ8pe",
  "key27": "3ME5RHiHFrasUoNqGGzcNvJgu1XotxdtSbxvzGpo6QkxGGE5eKcpG4cPUiW3wi9KdDxDEkAceZguDEzyn9huEUfk",
  "key28": "oWMez5sTVXT4FxNqpsm9otCBC9wWJmsDcZkvH3rqb6oCSoWc6A16BeWW9HGEdi3qj6jRjdDmjNu2U5X8xb6xyGw",
  "key29": "5wfVjpKUZDDzKa96oCw9TvHizfZiUbHzMfo7EUgf3T2D9QR1qsTMM2uiC3fJ2Xjh3YckWbXqTjbjPici1N7qbz4K",
  "key30": "5uhQLsSTgmQNTMU5UzGWrJyDYJMyZ6MAimdreZLvWNUBF8VU8KYEAy65d5yBEEPoJFgrn1mQVagUci4RuFXVd9BF",
  "key31": "213tSDua1WcqdknYNbXxTuMGKNGLNk7YyHNgiiUHJ2oPqXLbjP6NdFMGYbkwfbeP5VV7h2Ls9B6qEG1MGaCwuntB",
  "key32": "67BpTGt71wDTyhXukFi1PozqcHSJqkLPQEFapGnzmra7WM925sySe35SSqy7dRTVd5esVUXbQsxNSN3ghqbTuk6v",
  "key33": "2vuagwWUdZE9tk2jyPtj9FAsxNo6iwHft2m2VPjJkBh4SaoHF1RmTLMVKihwpguYDdjEoymmr9m4KgLYZYyCejQP",
  "key34": "4PSJLAEZd9C3eMS4v7QMUK552d6P2GWJdGWeC7APEHq5UQ3PATGdsUb3BtzyPaSkZ26MXBiuUXvrg6Quxz6HMHhA",
  "key35": "651dJn3DbdeJoubyBr5kQUEcZsTFVRvmUYhqd68urWK2qUmUBw9k2y3Cd77yn86HrF4Y1UnwU7qr3aURNDmMtUgJ",
  "key36": "4J6DFKtRkqTsMDyaC6oDGdTFKTrrr1Cwm9S5FWtjfDkC4qJMJasgNRXdogjtozRZxzHoaQcthD4edaih5VFyPDqq",
  "key37": "4KkWTxWFdcWeJ2zRHchULTfgjT52J5RU1EhbV6gxVaAiidknjc4ZJSnzmfEZVMwzqZ9CfbUPNtuVKi8Lu8qBkWte",
  "key38": "5s1nSq9RD6iBzap1ZdfxP94dTvNSP8BzLcATMJsz9sS4Lx5KZpYoratB7YmeAY2ooUUdYB1gBF7mfoiZL4td8oAU",
  "key39": "tYU4WB43LokWuAhqV9QEoVtAqPNnsvoohTbB4henvtVdeda1RY67BxXtrB6gZR1vPUStqSWS3C35YCvcpVX1yEE",
  "key40": "3a92UTUB88HBXuGS8YV7bG2gemcWFdaao8fvAzf2T3ksb6pPxyBMs7NRmkkgEL184WqoE3ZTNcqYHrjZB3SST1E9",
  "key41": "3TM71n7dk8bGxKWgu8ppSVdxfxUhHF7SeBM2iyVBKu7eHunmkZ9Lpc7RSscXZceQg21YCUxG1FPxLK1XyxchdNmm",
  "key42": "5FjMdeTbK2KYqZumxvCfmYtPLZPyTTzwbosFtYT7UJVLqo3PrxE8hVeizzWmjX1StXQHbzhMisdrDyHL2eRwaYt1",
  "key43": "4Gu7XkNB3MEPTD5v5CFtFXacUa6xeUJriXpsPYs3XyxWGJvEMmFjd73E3ZkR8KLyTaT16AdnEtvDNT69JZSFE9M3",
  "key44": "3EfLoMn86iJXn9eG962RNUnhzvBEjMaHM5i7G1JqyV2jySvG5KgY9dzV2wsppVP5HvSku4VJFFYvDyWf21Md4jyY",
  "key45": "51eNE2HaKAcm7vd5eUHhR1qnhrNWEzeSzsdcyr8yo1FZ2JCB8dhq269AGjPobFzjocGVeHK6d73RRQdQdv3gMfYw",
  "key46": "5t2GkordxhbRWgQAgv1gk1HeGuZcsc9gsABSW1ibqs6BPunXND1NgkHcAC3JVcwfRUb2USmUjR2ysRgLQsE1D6u7"
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
