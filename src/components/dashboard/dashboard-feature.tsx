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
    "3gF13C774AS7nAgdE1abZpKhV8rmrHtNxG6wuF4m9FAdmmRFHBgovkGPozrA9xY4QfS6VY2p4KTu9zzvrikkz7WQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KRPHmKMj5A7z3xpc7fXHSKqZZZkrxzNDuJYs39qEfmVKQeWfq8Ufiz5RCnuwxPLmFYxbyTZEjJQrCjNfFbzKJ3F",
  "key1": "45j9Fd5g1WnxBhVrRx9NVS1J2jeiUv3GCrjSEFMTAiVNnSk8Vqc5prKkA4YxMCqVXkS1KYy17tkmXMTdfD61Qtjr",
  "key2": "2Bx2jxYNtE49eM8WSezkiPbS9CWBjghsMkLSHkzBKqkpktcNHqavRYtmcEZHuifg6LWx8fYx66vk8RTDxb3T1fkA",
  "key3": "o37weoT3PggQnLvxTYz3WhU3XdZ9afEC1JxnBpauhBCXWK2X2AwvzX4zvkT87ftBTctEwpsUycJHztsHUWo5DEj",
  "key4": "5DzDsBgK7npFCeiwAC88HZ27Br3EYWfXNo2U9AX6aRcM2eiKEQm5FZaXXDgpcjYk3u5vtREr2z5sfjYeKp6c5DLq",
  "key5": "4KuDnwuq2HDyCiwhiBF7eVfPiRWegoe6a41i1umUg3kL2RA3W1n9Qb6X2PUQ1zvJdgwYwiEhgWT56k6enigEKRAj",
  "key6": "5bUag28Z45PqcEN4qJMFqmuhNWU3UJnfAGrDR43H5uugPAAvi6c4cg9Y8yxitKmKh9rfSvQqnoDHzvPrNozHV4wb",
  "key7": "KTSKpUDWqBFJkdGf37b5oVRxdiSaj8RcJVgLc2FePWwxvkRkpkci9U2CWHrfsSd7Z6Kz4zW1gsn1orwfEbd3phv",
  "key8": "2tvkTCFuUnDxzx35yQExSvS28ebHQ9wtsoaJbNesbH36Q6Udjsh7bdXdygLbsaqTaFx2iDgQZQRf6WEJCxkLukZX",
  "key9": "2iDwjHxxGeu1Hj6sYhWxaiA3cXriKk5U1ZtRMtPXdRKpZpbzozSt7XUNzBNCbx4B8KkMTRL9uPhDC7caz4ZW8JC5",
  "key10": "3p6C5RmG1P4cQaQwqY98jynj8yPGP36N4aTrXhTPxkcsw6Z2nupnvsWKkFU2rPkd1vVumQ6Tnvxstb5nbju9qkZ4",
  "key11": "27rrjuWXyFeFPPWpfgN494xvf5j1F3NF2a16xrfzGvncD6869L3Kw3wWjQXamGHgMztMfaMUWJaKcEiF9yW8o99i",
  "key12": "4kXytsGPcFnNv3asmNcGiuRnh9aSiaoCN8bX6VsRZfNxkkepQJhULophHHdNmZ6jqgqCzb512n2ZKB2tbEmRvgw8",
  "key13": "3wFjnPtGEE5CCuspqxRS9uMn2oHdAemDCR7oF1tQNiWZMkhSq4Y2JY4SKiTokcLwstSVroJnKauQahcFfDC5z9P3",
  "key14": "2fQXCbEx7kJxszvNEbxezaFWQ3jFtcsUQwrC4a2qxzNMDXuryWV7mn4qLcs26N5hYy8BxTe7Pc6zfdY2ZhNfKV8d",
  "key15": "3hKwDRTBzyQuHUgjjWcd5hqmxRUjvKaKXED5rtTGcjwCGwEEjKbiPCSFtvwB6gDjJVQxGR7oqs859uvD9NiGq2ME",
  "key16": "2x5HbQP1kV6pBKZtEFTUTgKw48VdvQWWzigTBgoZSNWaByurqsgCuGsXt6Pa7KucyrLTJKUmvzJLinynR2wU5BYz",
  "key17": "3sg2bLo8XYoozKVGPBjCnLRdbWQvEFyCM8CfzynJsyTv4Eqh2L389w5jtPRfR2eqY4LXeH3hntpDUny5Are6BCzY",
  "key18": "3WJJyn7jtNaVs3G596cbueKUWQGLfAYDWZcUZnv2VsSQbkSAkzH7hYuFfzRT3eRL2SaTtrbzAWW7XrD6tZmPwrf8",
  "key19": "4DTKt7FTnoEVhSaFKu3PhxXtPPubxpDk3qqP1Lcokm4FyQiyQMjEMYcm32PYxwabJs7Em26ZAfGgps8su579YKz5",
  "key20": "3wcaEuaGQCQqT1YBKJ7T95GuexXz4w7icr7wFRjnEjF2hCvmi2eJHTvRmaQnvkuwC7x73UTGpNXXkMXGfquAJwW5",
  "key21": "2o1mK5azzGfdJMpJ6wWMVtkNpXXf9YAaqdc44g815ncZixMmjh2SP1WY8Y2djLh4jcFfJ2pRTj4JwNN89w2w6R2L",
  "key22": "2WUhtSJ34JVrV18Kytu4meHjyzWAvq8jPpDnK1Sb78yPqPKUs1id5su7Sp9LzdmJvkvY5LsVH8nc8q79NBLcSqFL",
  "key23": "5B3Xviy5TDggaUF6SPRZtUE6TKCTdVBbsHAZLAUBhp4961EcUomdR6tJutgFQNCx3FbXU7Y5xY8GPcrSQyRW25Yt",
  "key24": "4z6fRS9Vvue9ioPqnKAnBgGUFcPHppsjF4kXR5N8Vv12MqaDn7onPCcbdb2P5pAYUWZpbExHfKaCzxyf2qaqGEQn",
  "key25": "5TQu3FkzXM2an4CzShzKiu5HG2psP79yRsBPFAYZjRUDprUkAVY7eDFxSA8vnBB1s2LzBmWBxKpMuapTZnCyEQKM",
  "key26": "5Wx34SRX1EjDMFS1AAA912MxYJMa251MTdADWAPXZZwvqvVf6zpHEYo5wxnx3yPozCjfRqBeMqr1SJKUoyPy6cxG",
  "key27": "4kb4CbeVvtTt3G2rHhuy3BWoiz2d3eDMtqZigB2TSMfMKZkW99e3voSN4KFyLJ1MGLDNom4mj4Y7u7oqFGZeuDVd",
  "key28": "3oqmzyCKUZpGHsa28V9Zzfa3dUHCYLqKkPjXYSb9Uwqf3tenL37KVHbF5GjCMhim8zR8VEhUZBXd6psHp8VcQUvx",
  "key29": "VXJ22r48pBvK3nGxDy1Uo4nxTJqDd7wRisyM1v8gkWXy8XSN4u8Qd55cX7SzXKUBn3q6LwJXK4UGU6XxkQZiid9",
  "key30": "2swx2H33B7s8MJLz2oTqCt4qLykAVMiThX56XTMzmLri1TxaeqjgDR54gULMcYWQSS4yHwxE26KUN4aBqDZYWoTU",
  "key31": "3R17yKhDwWYXZZgSxojSMfwBwuVCpxZYW8iGkWkUjXhzJJFQVngryXbrMMLcbWKrRs7cAoAJ78GHo7ZR5YTdjRdh",
  "key32": "5Ecv8gSfG3m5sxJ3qF7zCA5FCLHDXeaHQuPaGafzEn9hE7psTN5u2rRduJ5DLJhUhHZaPhvngzgcAhvavyAakwpn",
  "key33": "4f4cGhBH1jvNsz1ywkyUYdR5uiYb1sJBm82eZj2EK4W2dndGPC5Pep24XSb3bvQg86TPLqDhTBh5CgKoZH2rTdhw",
  "key34": "2n9QyFAHuEbsbEF5fb2SGQniCZwKQ6yfDXJzsebADkP5iKnCUgfMKcZe9zawhH2R1kw1bi4yy5fePBaypyoZzvy6",
  "key35": "h7WAVmfCmpCrrUJfsRC3khcqwtpQHtfYZBYcSfAbRVdnG8UATaUNEhbAPH6vHSF4xuzgPcyBzRXe9y95oQXVQQr",
  "key36": "3MoGe9rzHhBe9RxvPfCb9QSm2AdC5uHA4Z6fkGZLLozUDCNXefuodi2CBCZyxrPxEKxSQPij9Bsyze2se1xaXG4C",
  "key37": "26gxDeeZ1tMBmwSNF9xLfGHjWU8Cybms8uzBTGFKCeHGEjr95G8jXoqvVWxp4hDpsQedn4U5yzmuzHq1dG7MuFVM"
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
