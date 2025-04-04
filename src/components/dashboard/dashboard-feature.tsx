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
    "3dcB4SBQcuNdyukp3yzuoMJb7hatTEFfzrN5FwYXDWnaMDAV4RprBJf98Vdjk5hANgC4E1YPXX4KnuD9JvUSCjQC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nzBTyZPC6z6z63hj3jeUoMCnVkG3zGNHDNpCsWfuUS9gVASBUDfBTfNKABobZcjsw2wToXd7Pzd1q8zZv7Pjnd4",
  "key1": "2QbFgvLVgkqhpf1c1dXGKYuwMkxaZvuzA4CeKqbdxuGw4StPErzgtAruH7NAhfucyJqoAiLLwPXUX6k9ztSNZvRE",
  "key2": "2suLtmMmFmWhku9CxRStjhqFFa52TGCixFJmK1JXUQaX4hq6npLsufheovmZvWxyN9XRAnHb5HCcjdh8rTRMUirr",
  "key3": "4e32LD6vA71RrbyQMHiagbJRwdrYMopfTqiDCF2CAyqEknZCnig4sHJVVXAdVXrdBqTEZZMVD294taWCSjpxtajN",
  "key4": "53ECWTaFhuwmXYhTLv9C4iZPhtqwS2BpRKqqzjbsWb5hHymYhWE8TEmuAomzDRpU6HbJqwnfJrkTJqkFzLrJASJC",
  "key5": "2KSnkUZY5o811BEJABSpU3Xbs4pbRhdhX1KSUxNnE3cYHhXbxUgmXfU3txVdNiNeYSVPN8THer8Skb779fBdU3wF",
  "key6": "2jXRxM43z1zyuWQpi5yV3CrwjFZQYXoEnEQtJgA84tDgDe3AoxsmNy1wBgFjRsa6crmWCUdacRNVUy6bRBHhP7f4",
  "key7": "3CN6VzXzX5a4CjBWf5EgS8AjEU9q1gWPHVcCjGf5gYQwwqyULhiyc6WcpKeemsBazqfVjthJKXT9ze3vWgoLnex2",
  "key8": "54AbnGtUYuv9FEgrcWs1mivAQZ1g4gyDExF6iMK8hmZvs2hUkuWtPTdog1TxYDu9tFUAbLB19Yb6CV9nSGaYMePg",
  "key9": "5976bGvxhd7ohH6jHvDAMb55WzCF3GG5MqgL7rKYhPQRFhTg8EiJ5zDf6jhtD7wgrYGNgZnQYVXaPmvZSwfrdKmf",
  "key10": "HRDRMMuccqGTdsK1oqtXyqe3H3VNcwakxoeYa1avxhP4aioQsSU7b2fsS6gZHqatteU1AmRcgeo4P8xmUAzfoWi",
  "key11": "2SmCQDPXzAJ4ftNpXNYQ7PdpDYQiWQy5XaLnn8KoM6N3BLc6MiMdcHEFeHJkqd1XUJNujVrVVXva9eoV31UWeT7j",
  "key12": "58ym3mTpXRuEq6LeD25ia3GdyMSEGFZy6ZsErnqbqr2dXGt5RgRPMRksBBMRMvEjAzTnxhuzxd8hxERcRewMcArs",
  "key13": "5n4v9k3eCga8mPX3s3ZCbFcL2WNgfqzsfy7cWxvSyX4NDPpWyUd1xnbxPiM5HUeF1N3JqRgxc6CygAHYC3DQpZEr",
  "key14": "PL8T1VJusVHccDLjcZvYBWxCYa37U2YjjnhgQPBmqL1pw9x4HTw12iME1nnyPuEjgXLs4Tt3pURfCuyUStBV1CA",
  "key15": "2FaPMhfmYbcRPziyJ2Gr2RWfk2ETWyx3oRbMvq5Nk4dwASAjZr6oCbDXkj5YxFyd4B35uKYxB7j4EECj9cJK3Q1z",
  "key16": "3p24kwaxT1B8zkUdQQXfEPf3D4TxgQDmYZvgZSSiFEHq9LETPGKwVbr4SMrsqvVgkF9tzgdiH4ya2ewiCMzdqV8z",
  "key17": "4gi6c7MpLHfhXo3ovtbujy5raFFsjnUAdjx7GhhNbyTZ4VTV2SgC6K54gBJYNDtfut88wYJEgjJmodMr3kYVLojZ",
  "key18": "3LDYmh1vyAcwGAp2Tqkozo96eyqk2e6AaBGZAgJJGuLgTpqNF6GrZacVG5k89hN4qvT6u57Wy8Bam41ufD48hGs",
  "key19": "4o52uadEB42CysMa6zKziZCXEu2R3B5ogHnWJ7KsArz4dzTfXhKQbrBSxDFcNZe1vvnZsFssMDRDjSM27gGkUEzi",
  "key20": "3HuvcGxrEzyKN5S8RK9UbB1anmgraXgv2X6pd6vrrGRm7yQm7fis7bWoeYXnSNsQ82AAxgKSLwYu59X6d7j6HXmF",
  "key21": "5MPjxHJEV2X2fthRar8PPqiRLWavLuw5F4o9G2Sso9WUEJqZ9t4suy4VT42YPN2JmUpLTfJD2ed36BoVETfRQLgD",
  "key22": "3Kdbc5D3fW4DSjTB8aTQ3CLVzkWvJLYKB74QCbvvZz9BufhpE5URzLfwNYcaGxb2ayNRJAxyzmRw1hgwLfRgQ2N",
  "key23": "5FiN2oFnvKRGr4KorBkq77FCQCvXgmm93eR1EogTVzJcVxQ7kWFqqjwb48G5c73Sag8zUaCmdKGTWFshBDQGsvHY",
  "key24": "9hksx9sV9zXvTiVgsEGCo5yxUa7pk1ds9BTkPKjyWEc174tsX8xUBhHDN9FBPErx8a7tk22Pj6pksXWu3zDuDJP",
  "key25": "2RhCKic9TY4rnfQDwA817kM2Ahq8mSJBiMHMfXEETSm5TzUtc5qag5S1JK5SnFT5PQxVWkWbMmHLL4szeegL4vxC",
  "key26": "fm6wppCuiKgVvCSeKR73KW4HhQF3gKY1Zwuy2HBqCovFp5ntARvxzoE6t8hhr4PMLuSmsX3YS79Rm8MvGUvDMrJ",
  "key27": "3dpuSrBDPyBWM23KoB5XaEKZEtqYi52eDUiWvf9ydYiX3Z9gMfhNehPeARMp4NH37dSN3RMPKW1r15sKWBrcZfE9",
  "key28": "2aKxQwzrhTznfZdeTqRvVGj2VG1wg3aKsnXwh56fZwtyg4U68RzHn7DyENYS6mK47c66J8NRfnZXLWAG32FsVije",
  "key29": "5VerFYREDpLeG676VRAvC1MSwvJrXqR2XQNdtSfhc2q1Ed6beBhUrj1ewM9Bti2KjMf9NFHVWYZF8m4Qpvt5ybFh",
  "key30": "TMQgsRjdhL86Vyuo27LMzJmDFS3rh4ZTThSCDQTmKwjc3K7W4WJdhBqAKt3utQUmZCmToKP4CjCTgJENyKQUnqz",
  "key31": "2ES5Mf1aeNVh1HTXGFDmYFdhcMyCygs94hZkMBL5D3UHH8RpocbqDAs792zwbnTy1SQyeYxZ7fEGfaNXni7BWRxY",
  "key32": "3P9QJXRgArY1XphZjQ9kMtGnwfAeLdWqxjPwtkofZbgZpDS18pfjJFx2GAB9Zyg6jd4Y64yq9FCibBLXJzG346e2",
  "key33": "4uCV7RHEGVBcepsKfPrCUhZWmLBVnX5ZaycPo7yXH4g4auY8t84xoz1Z1hUk1tjyBPDzSajmx9zZhBXEEQ3jQXQ9",
  "key34": "2aVZfVQUTNgXzXCXgmbPkyEq9NfeVwpuKdxuJqrpxYRUiaucqRH5xySb5rJLRZPWYhGgiid9sq2dCKn4y5TxTEWz",
  "key35": "2KqhzcfuoNMgF3WPTFts7bofjXyEPBqZYqNeutfMWZ8hjR7MbgTUH1yM37qjgyuKefBZm6YrBXscs5NahUtqjS7A",
  "key36": "4iyy3Prz4qSBRwK69Uex7miVhxoJR2fNGjWddwBc2oUyvPFTsZKZEkCRpfWNTvpo9ZFXcmsWicXAV9YFEgTRy5Cz",
  "key37": "4HGXm3yA4GoBHEWW8rBWvLoM3RGy3XutaYVCbnWtKo7rnfeMfZMRZSfaXN4PfPhwm8CRxdb29cEd5FLo7jTjGfWd",
  "key38": "4kNBegkitzWZX9HRFdMNPu4mcm1xT8Pk2y5NgSrZC2Kmmf3LvPXwnRYENJx1ZHDcr9Dd6eKYGLzKdSxcnewcmnrE",
  "key39": "67WonU5GX7fJjB9jEyrNQQB2dpef4cDyvRER6VerBgA8aem8xHQucPGvqqGvxcehpF1iKxXiUzsxmLRAVL9Rgz5u",
  "key40": "2nDYZAV536m2t1a2bbtnvEvCPwe1r4uAGJFG3Q9K8n5zxtxcLpXgYRcd9yUPWs9WqTtj3WmUtZFjBP98euYo5G3G",
  "key41": "2dF67c7uJDbC7uetnZRRvxMapUYHMEHdptPyrnMNCjc8XXXhPkwhfKU1qgpyqe3rNu6kCdgz8CbrPmX3qs2Z8DVt",
  "key42": "4Bmeodd1qhEk2wqKRuAzLRVAhVS1Qz9fQRKW63U53tyz5u4hiRGJH5hMVwAV2mL2YDChEqm1gr3dHaygntLFsDvo",
  "key43": "4BMCgrS7vv2wSGBk7GpoDh4TRkJJphFUbk5WB6EpffjFMhyVYVuVrSQ2avGi4WFuR2RCCnziFCqDyukeu8EqwBKH",
  "key44": "Fno3iogcLHpq6uwhwhtjpk8d7AiYc9MRxM5xbtVy4fDhuBoZsWvRucnZHaZduiTGBJgYk331rMYqsZzt4r5Fv8D"
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
