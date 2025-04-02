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
    "4RJZrfHMVhJDFjbZJafwndUTx5odPsn8ujEcPtzdsoPXAxKZLdWFTLao22ic1VZEZYv9kFL79zeN4wJ9mxGEJNXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z6q2yimfMtUBXJFV6TDEMeVCEDQKyjHToe5D64FubLVX3zkBpAvEMJBGhVsSYGohZtywyzzgLeHnLe6pFd8HXq8",
  "key1": "HhQvxSoncEkXicodgRqLbhy7mzQm8gXrmRSfB9puYxCVwAKFxmjW1yAttZ1bnsg2SRreytLQfRYWq12RKpkuuHA",
  "key2": "5cWwB4Ctq5Ljcs4XHxgQWm2SXUM6BHPHKLYJRG44u2MNmEGtZkD4kT2tw5GjMG528tsVHtLxKmDMCEH5WftZpc9u",
  "key3": "re3jCR4PwecWB74snwmNYgqykZqv3cJEFcJmtkG1p2Jx9ACWNm9XYniEPe81u1891J5uAbDYprPgK4atzCPQTiL",
  "key4": "2X5DpeAo36fpxiw6AQJtUvpH2Na3ftAYgECmgr2fwwpbYLfuWRZKkjNMBTw2DdU5r3cfw5u7xvyeUya5F8ZbpH1z",
  "key5": "3b1We4Eeevnfnppeh6UiuyT9A7PNYbYbDBDz38qb3jhYb98WHE9Q5CtmMBcp7L9haCCcHUmiCp6csxy1DqKp3GtQ",
  "key6": "5CnwHYviPv2sQTonHWQwSYiqymKc9HNBp4nA7C8kyypXLWUkWQgBGWs37xhzpeQZwjZxHmtbZWV4yb3AuBUL2miB",
  "key7": "3DViwiWyHqRto9xx5omSKe5YHy3FjM76vQHugwjGEi9LLJvN9KSnpAftPF9bQdBq28GMbMG8MnHV5sYTRfgv2CoG",
  "key8": "sG6swquEaHU57h7bzWzRe9G188DYFUxN6ZpH8a8QKso65VZ6YrLjz6aCMgH4jyy2GcNHzKgx7htGYhJDVHYzeyX",
  "key9": "34LjQFwWw6RVmHEknjAZPRD8acYysR4i1oAmpSfzNkWpxCmoXC6Zc71kjyzbMfnaBNTVGNTyV2RxQitYpV85rasq",
  "key10": "3DxAfRVy5CZx6iYbptaSLLvQTXEyaXQHJpLpwdLYdZQepCDMJUtbVuiohzxiMKu4MogY2VPRiJ2Q45YpMLhrf2eZ",
  "key11": "5AmRi5o1cFU3dwok3A3vDtL5ej9UgYYZ2GL6zsrcSeSUc3yHFjhAi6ppGaRX5obEqnwXkR9YWqHeEgJAYzxJos7F",
  "key12": "DaW46AxHKV6VyrtjZbjAGZbMsnWdAxnWTFNETNj16i2WNyMfCuKa5nek4e6gkbNsWaSQXDrEwunm81wryQajq6U",
  "key13": "51wBB8hTrkrJZF9reSnG2b1iqhCRdFzGwXwV9ERTsZCQ9FmiTZAfJxX9WyAvMK6aGzfEKTgL8igMAKsUjxv4uSfd",
  "key14": "f9wmXjmU3qeJe6Un56zPcEXHgNNChS4XrbUqsm4Q7JcpYfwXdHPmZ9SjbFdMkno6ANMeLz6GkTB8goCJsoR8ZhW",
  "key15": "3s1NXPHYvA7Dh4BSBkbuJqJv3tJWZKx6ZJQQdcCjCm2AC7eGXPww8Ve1ZQMzxuZ1fB6rgMnCsYB2rauimPXNi6uj",
  "key16": "3GxZTSA1nswcs6KD1ELuKmBmnVe8mwqqVJdyZTfE9di5VQp1R4ywcu73cSvuDxg6uqUdHmoj8aPN7zj6HiRwsGNt",
  "key17": "28YFd4t1ie3BrG9gJva6HNVEhfBMm5TV6WgnZnRYDDDQ7uhgmdzqdTRGmV5r2pUNQAS3JiYGBA5pR8kZZ824BtjM",
  "key18": "597pgSVRoP8Q1MzAdPGhStuLTXL2CLCJraKSXzs68WcrabRecSKM9XJnaLeZG7btoGjud966may1dkgWwNpjnCFp",
  "key19": "3VAK9PHBmUowJDtDj7Vhb9jDWncTadzjBePwyACgcDS4EcFZNYm72g5zdi3azcLtJ1S5qXnJEq7PE7bPW26vJUiW",
  "key20": "fPhAGihhXta39K4WZoPtxB7WoZfbwm5NzAMXzH19woyqeE3tFBK4jqzRcMouSGW3ahLBn664K5xyix8FE5TZc7g",
  "key21": "LfhQXtVigcDSBKTqg3ZrUp8eHd1TPQoD2K9yx7Ehw8HMJfMoKKnquvWKXjLkRzmzRGYTEm7R4NbFTJt3jx5tqGh",
  "key22": "2WGBg3RHFQmyFYzngCTpWW4nRtS1Kx7ozqLfCQJmpBvK23wXBFiCwP9Zo7pDAPCt1z6jKEhsh4XsVKNTPiEdJ5N3",
  "key23": "2d6rhahqoixEe4gwzWhp5UbtfGHMUHnAdK1wm3CF585wmp9gGDvwQZ2afbzYFcLJxzWhAaSVTokMwdZ7rXdDS3gh",
  "key24": "4p2BtD26ewgMqV1ChyPST2uHNeTst4mJaFefULk21SqnqLkekgPBz5YcwjQWuxEErEJMBQ36vigXnTUwWAodtdMQ",
  "key25": "LUMhvGNpHpcJ1sxL8rjoYGTEWsTAjDYY3a8qWH9zpwT3Pu2hiK42sjKUr4vnk1ipXrcfGWH9e498KB8AYkqdv8b",
  "key26": "5dt8yEj4KXUKNhQefjGv7GtxVWiN5C37nA9hsWdP9EhSWL699847QZUWJbcdVoQDQrhmrBoSSQBr9QhQ7cc2WxDn",
  "key27": "4uioorKpgay3HmZxUzxoe9sHhYg8Vm49w4ZRXSwFfoqV2Qf9hZftHeD4tG1EvYVMWiNA3hM2Erkpzt3QcuEfNzrB",
  "key28": "5b3Y8WnpWve7ubve9iynXC8BufXT8hUQtkza2Sj7qXTUNoQPMkdUsR3cQ4ubpyqv9UEnUxxMmqfrWcghcdwPKpcz",
  "key29": "5BVsqfggX8UcvCuKiv1jkiq2JMeYXRg2zZcVGUMiRGWgeaYPsqEFT4tXT9FBF4tETMws7mdceqdogjKJHQ1yVrnc",
  "key30": "4zqvG8VWBib2qTKYo8W5xB8k5kcrjjHjwrsdyMovfB2uydJetwa3mEtnRvKEYLA9Haz7Qtfer8QMSpWWzhg6ahTE",
  "key31": "2bHXJMJVZL6DE9F8PbzQT4Ac5EqmtgEwa5AnAUy2qStqm9PvJqExVw7PsBofWXMd4cZaDkbRsotAra4zeqgGVwXs",
  "key32": "4gxdXG4WW15KvnqbnCFLZWgyntTuWab8u2tddFCG28qFXMQrejV1ZHezG6kvGdf9br2DEN9cP9WY9BcDMUL1HNTg",
  "key33": "3YQWq7eX6hgeJFv5SfUFzytqU9n6x7TcW56dLvQZPQwToVgq7BKJegWiH1N66oq1X3ZYff9Y7eTcXmbARQ4PKFUd",
  "key34": "54q9WX2BZrjQQsDLLR2CT9Pj8ysbeXoShtUdfh5ngLqHfaV2oUMEy8T9TUz2NfjhkDyxGyAeQNrwogaFaic2LymC",
  "key35": "5nmn9uvgty2hETNzrSq83eh8btsCbz2nKoaf7awWktrcpKmsRDSZqkSNuNkSZhSZz22ueEU9W9JCnQBEkamhAukg",
  "key36": "JquggA3sdP7j3fpWornfZfPz5JUV5e5XXjcHyzzuycMCQkfJbheQ2JX3Bh6eayKzpG7oEMBcRuLrwR2AdyAcUTs"
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
