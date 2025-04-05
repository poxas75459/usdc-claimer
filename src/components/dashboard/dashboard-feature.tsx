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
    "3eFoYEvfW4HcajfmQGpTqx4oWg5PYTfBATRdpNd7WgN5gBnRhKueaYL9QYGSQKSxGA99MWuPmobZrArkygGcMBTi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bi6nzA59C5DUhmYJvbcZwRcVuLoq3FxvvwJzfrqADgy9if1yKnVPTNAXATFw771haHCqCqu4z3wsaKm2HyQtPrv",
  "key1": "31TH8LKEEw7RPbEzcGpRfnKPYBXAmUgHzkyVu5xiKddZEZE1xwDBcKF8Bgr9svQ1rSxQffvURFw5iwSe6v2CtULv",
  "key2": "4WDu2bJcrnQdzcynxjisN6tV9cNGCdqKsjMAYheAVRv7ksoZSFtXGWdbUftRZBbJ6r6B5BdfHEx8Qx6jRqTNVt85",
  "key3": "FVyW9Z1tSArBXabpx8ugUMLAL2n8enFA4FxyZEKDy5JxNfkWSDuVgKyci1yU6fm2xTTb6Ua1X2Lmk8bSZiUBc52",
  "key4": "5f25HXfBnX7HCvBonKf3cosSVFpBgqQkuSegJKJeHBR6oZB5jZtFcbzUjaizXKuZFpauDwTmoPzomM7MADNbbF2B",
  "key5": "369KP7SH4BGHbMxq36WVtm19KBU3xsvvSVvwyQVM4StfCT1quNfMozb9csEgqXPNLFxh2CKZeRwaSEhckWZnNwz9",
  "key6": "4NYoQSQN3SDuVofR9nYhkMW4D3V9j7cYRnkkGjrtoa82W2HJ8metaAeVoqqiPCxRfhF7ztWSiQmLFXm7no6EjVTa",
  "key7": "4AgsoZNtupMkMdFZBp34UdrWczTS5z3t9gXRxk38w1fAFiog22c5Haks9uEx64toW2cxWtuy3PxxnmZCNreihMgz",
  "key8": "4ZP7oQxbJdbBczcbyC8LcJV1H3aYm5nVh5htbFa15NAVQ6aZQEyrdTKZjsUERSCQ8Sw3aqLQgetQWLxAMxsa1L8U",
  "key9": "3ixqxzJRCJkj2gF2t9S711NjhkBzyuWN7PetKsd5293iKmYr3EBR1SbrGvrXY2BcRW7Sb1H5QnH1U5aEbhcSCuqR",
  "key10": "5StUUH1BmBojZ1giUdhRfmxUXwa2CXghDg76GVJaXMUdbwTc6mjFkHyBBdfv3mHwG6Tgh2kQoixRPV3JSGTmjCdp",
  "key11": "4VbMYng6bu6bL19G6nS5H5JcGW3B9NMKyeH5fYdD95qzDrzgfzRHkZKaaqT1aZjQDc2UqxXzYW2iuHMFPTQabfXX",
  "key12": "3sLe3hs9jDZeAjvGDGbJ9PyvCXvgKu8snJ9hYnHNBCyyEXUUyRLy97RJJxgRVajsSFFqEGffsLP3mUGbFy3HjHDe",
  "key13": "55j5HngeLdsL1pSgh5V5gY7XpxCctuDTxNPRzJdaD5fNKmQscztxyUCtpw1gETuEfapL47ExThtaFRu55GoDXPtd",
  "key14": "5cAC6ZJoFP1ptnLhbaBRaPWGzQjhUvbZCBD4mszABh7eeKiEZ6mkLFbFWY7RWRk7bvpvrBQZaNrcUjH4xb4MgoVA",
  "key15": "4TMFXUMGvStWrArACx4abFw8AzQoZuTLxuaNusq8yqmADAQGZd1SPPzt29ZkKMb7fh4Z1C1ApiCy3wxJ23GyDoaS",
  "key16": "3wQpZbjiqE1etnr97MWZA8Ejy6ZtcRJFHHgbVTMHhVdb6RnsJKbCpEExtTesy6C4PKMAw9Jc97Vyy3coSgGAhqNU",
  "key17": "MJc3n9HGLzT1RyUuBCKnynLWhu45igcM41di8aKZWQoG9TvHHgcWCn5jNtxxCQtJuLDkd42gWpyV6vRLSfGFKeF",
  "key18": "27FwDwzxj6zVm1ewAwGBW8YkEvWR6fkjyR5QsoaxbxnMKAjaxWB949TRUYHc7tm1zPyY46613Fa8NofsoChnZFBf",
  "key19": "595SwtPsEHb37VvGBLHXhNvCtbbuFmBxwNnuE3xn92r8WyWRThW6aiLKZLLw89wK7eyTCcmz4bujw26D1AL7mfyJ",
  "key20": "3x8PzcSkHybQr1FerR1B25Pya3xEfd1yvHQpfZjGKQFi5sMGXMT2PhHg1oifV6xTfqTQPVRDpQytA9viKT9Se4vt",
  "key21": "5YNWZr3FaEF5uVHPNtaCDLkBocaKkxnBbFMJSAScVCr8bLuBp3nK6S3rHFtgxkq9spyPHGhqZzin44LUCVmYzDr2",
  "key22": "4nW2FfXHVGHGdQCLJ5LWu8acKD85Go9RLfsBtbPJKTZCF24j67cw9ACqnC5dSG6e6fDEZzc8s8PmZEgs4NfLyL7g",
  "key23": "25GNE1wEBCDw3Sm3PpyC5ABqFgvnry7J3Amh9ienrdqRiepnfyqu1MUf8WS6aSXjbuzuTxHPY77YTXnQu5mB4nc5",
  "key24": "4b9SzVXWQAqWvbmqhFGLY8TXipCc35Dm4BKVJCjQh4wedYaeDYvREs2WhJA2U4M3UiA4e8iwCgsi1tRm8WHSFUME",
  "key25": "2MnWHSn2rSQzwopcmFbCPiBE8XzHx3SaBc7EiNUrPfuU1PhTxx5sfc8dcAaoCqvEAeR8EPPWqMU93wHg5rLhqWZY",
  "key26": "niez5x4RrmQ3A9gD592VKC43KibP4CVkhFrqVpge36amBBmvbokLhQGDB6TiPViGQNe35Uh22NjfyixdGXVwxpe",
  "key27": "5MXBPZUXnkLUusA7csWKXsq8FdmsX4x3XUQhwdBzCzqE5f2KUpQokWBLxezKDhwDkG4tzNTjiWcwGp1iPyt3nPwm",
  "key28": "22ufXzXSkRHiwSS3UNUeMD5mSkqoPXGkdfsmjR14ek2KC7uR65ZSFgEovJ3cTEPw7vuUWjxT9J8Y8BUgi17j7KFx",
  "key29": "3cUSChs1XnRDHw37pkAGgZtZ1Wf8T28jZeGFM7wAyPqYqNP6oQg3PozwzQQHecMLB7LFqe8CK4HP6zsErT9Lq13Y",
  "key30": "2NJL8pZsqxhWngkUWQxhBDp9FkfcD2UjyLgbKKMMXddtnZKPyfdRNzdMxhweXsTmm5nstwNTEZLK3E5v5TwgP1mv",
  "key31": "3iTy2ZxFr24Dxh9haUZcbcgk2MKeSYoCTVcZziUzoDaCKAkHYxqPuSFbetrTyp24KQgzd9XCZu4VuE2QCE66iDuV",
  "key32": "5bGGvmRvbc6TmRDuT2wDKEtCheGBG6q1CB2ADB6ZLXVNvv3JYUorgU9dCgmJUwKYfVou4KCRSLSxdUx5huQqcPYc",
  "key33": "4LSBMoF6qcRFtAejrDePVsxCCKvShhFLAY9XXJgbcS9y4uuxtmkRpSgdNoRJWd4TJvqEgsdxte51vcPdgwsZv9Us",
  "key34": "5Z2mCFc8BqRJTDSymfyVYYSjncvRJ7GynuHE9C5NzM7iNi9NkWvNSQnbpWLqyBAEXFfqF6E78Ue9FJENk7E4CZ4e",
  "key35": "3tgmnvUEchkBRQSo38JnXmVvQupC3kVduWRg8gX7Ve8fPxqV7Y776dJ9nNR5efXvr6e7BucnX3BXQvDoYLjcZAjf",
  "key36": "3yLbMYDG7N2CeSw1Mpyth2aMwZTSwib2m4ww2FxugjHy5gmyvR3yyeKnk1Ptrtb1DQUoZKjM9CjyvmQ7eCcxYGhN",
  "key37": "2nNRwPL2Z5RHMSkQdaPc66icuwq7EsWAiaHDmmNnkaVRr3nM81KsswV7yJqaDujsi2ATNrQYSpJkz5M28gRpH2ob",
  "key38": "2tjcTazbnKccgVD7ECMjGarapaspcaP3DiLA9wyzRkabc8AuV44KqXdgmB1sBUYwi4VzVyAjzfTDbYTvBvKKQoQS",
  "key39": "FtA2C8RKkjqHWuRe8S9UKBz3kqnf3pkRwcJNFHBMExWyS87xaFmTigAZxVUje6sPzSCwiBACSjMmeWdyzFqWuRE",
  "key40": "2CZPANRwgWL6dsXspFKCqyLzj31tEKurLB8SiT5EXSSDqspQXRPwLp3LTVLbQ6K7x1yLPWyR8Hbp2TKYYSTyR7CL",
  "key41": "Xu243GaKDdnRdD4MtSRw2ZzWJ2Mpr1RS9LwFqEFSWHVqsgDKEGUha7wMLq2qhFcm9gLR1kycDJgpW8ftzqNGLrd",
  "key42": "3EH9ffXQuBw7mVEeJ2rPqCG2oWQJ4J16ujmFYxZsrdTmfXPZXp9jVSKJfG2Whviehtpr6uzZSq7TP1TcBMDyoYiS",
  "key43": "2xi2uiNiUNBCx9xRRsKoLMD3i8bJd8hFtUqEtYBC2LtyJhdSoiJVasESJVfnWSeuRnpbjMAjJFpiUPKj28YCEdZD",
  "key44": "4UBn3NFWnWBRRsZVBxK63E4osCHMtExtw3ijYwgpajGcw5k36iJvkfDHvDfJpxeX2UfHjyjoeiQuGnBCPnmnGv63",
  "key45": "4YXnDuVP49SXDjiaYmGXkh4HvV4VK67ZPNXVQvuEhDiJ6zM5THqEPpGUC1froqhK9FL6S853wkXoD7mCJHtSgQ8z",
  "key46": "5RmCUo5CnL3oWXBKNKvCzsBSgoh8CwzTuqMVdrBbcbqbcd8nKHjqZEuCydYYuKw8Z2NWfg2sK42ESxEb8csa2Kic",
  "key47": "2gneGG79SwKq8qr9GeyJYtcvZ22tz1ps3srkSx2AGoir1i9rjmCoMVAJonh8dWqx9dJ9crkw63VewpguxAU4HBSE"
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
