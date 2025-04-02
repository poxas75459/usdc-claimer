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
    "47PTHPBU4ysXwzGeXuzurhPKS1WZrt7cVPKZ42tdagcVyqGv5Tn48Azqzy3oMa9nYu53jRhncCKJeQ9fP5mpbe53"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rxh63LrSfHdnvVX8jaBujv2Ea6aQ5WjtMTZCpauX3JpKqU4hvtiHugaGoBeZ95cB6oXDyewSPzipeWzTgz64teJ",
  "key1": "2u8puT3Ranyv3DWaTgSG7o7eUn5fmd7ti2UbjGaoVMeVYb79t7ySTGdYZBWi1juHPYR8D1XYVgArMha15FvxU7wy",
  "key2": "4miNApvVSbuVXMdCkfe3ie1ua7to6M8iKd32RrboeYPNy564MQG9LGKnkPWXVFvWVeYT38YUKvjqNVbGpKXtGowf",
  "key3": "2T1LMA1dnawmA9D1CFmQ1KQQuQBsDomX5C6E7A1Tgzg7NktvDMxbjrUecnxSvRYPZg65LGFehnVHWLUdbtoW6nGU",
  "key4": "4xTQwzPyHbPEf8BiyAkw9thuc1H9bjRnhToKUbFM7ABv3EK2UJKvnHtQZbkU61vZmvcYo6VqsDHFMv2B6DHzZne",
  "key5": "2bhoqNieuB1MQAdVvgo9mfRhsYuGX8SNq4FRDN6wGnabsWiBtJ8d1smeYnt8i31XZb6Ym2hJi2gk7URoP9MG5Q7q",
  "key6": "iZ6D64Gp1eUvFVxEf8yamYkEvnTqTAqVzPqmgxo18cSJcbgbGVt4BHRLcPq6ytUgG2gqYWXVEQ9ZYtdhVUcZm2u",
  "key7": "YCLCfyfXECTx13RrZMFwJGrsBab1MMu9TZgSgSw1XDh3L4ywxtc7MHdXx3ftnRKrAMz1kr3U7sMambA1Ji8h9Q7",
  "key8": "GHon14h9GNuFkpZAioFdr7PPUCm1yU82HgyAXXSR2ZSuxgbWdvpwzVsUTN9tbViikKcGPP3HrxuteBf5gNF2GdV",
  "key9": "2bdmmEkrmD2VfxXFiBXV7sdEF9FohCVKNDJvhDkWYj4XzCs1cVvh2uqiM1LFS85KS5XBcLu78HMMeu4Ac4TKqQE7",
  "key10": "3fVZSBmjTxMoAPMBPT38eAe45sqCK84U2wW6zBMCUMDsExeDUJShFBSUySBTvYgdP3eb6a8araw7L357aqcgDbPc",
  "key11": "2tzJ6D8PXmwez2rqi15npRSRp78VaGbgU6ptVbCmybyyn5mrDaWSGNBRA8nSdkPHwZCWh5XNMWouyrwrmdHT1dif",
  "key12": "2cmKPwrRbfZCW9TXy1tuMXb1gHtt3st5nn4HMZVc6J5Ds1noDDCCUQJ7C9DGX3RBVDHw3gBZ1iDwxxXS45EPMMyx",
  "key13": "5WwGH5wUENKHFZwCXsWxtNwD7bq6pLNvBifzYGKfxdWcRYmDsyoEdt12qWouTJWyCG2EjFEZAyhK9v4ZfdLfyH2v",
  "key14": "3apuVTn1CS3wCqZwL7UNJ5GjNjEEvdhq8faKXGJBzJU3Z9agMn3XASdjY5wqqmZCa6GD2mbjHUUNyLjZkuPdGF9",
  "key15": "5fUYW3hdVvvweZfcbLiTzE2WDtq7oMViX1SBWWZKs1MiUjsdWqWm9TXnJUMJPNrb7U3wmEqGqRv4Xm7wgC6YFL3t",
  "key16": "2q16PxiWydmgFEyhUym3rhioUqYdZmHf2cmgfQHVztJkBh4Q8jxwF5QxVPeP53Faf37bpQfyCYMQ11dMBnXdrkx9",
  "key17": "4tbVCViR5V8JT7DAQw4UJDfPXK2iwRs8YLdSRcbUzTnuLZXhBhu5vem5y1FVyWw2PueHxu23Uho7JLsbtFKdrbxX",
  "key18": "4kgZyUhKgoySh1PP7idUNiZPrt3EmfDe5BQT4aanzG3gWCRsiBHbzGNWjWAR7azrCvxM7eGwrxhfWxTMWM27YuNY",
  "key19": "3K28466EhEVyR7U1st4dbJ73R1wHXJumd98agp5yi6KPs7KFj7vCQ6TBLz6vAbbpoDQ9ZnUyffnoC62m5dsPvgA2",
  "key20": "25Lff5tpdJKGomyx8E7Ueiwfwfd3Ldt3S82MqVoyV4Sv2q9419sFA8m2jpcsFA7KNTS1DQ8483hkjUT4ZDQ2dhzP",
  "key21": "4dPJkxZKBFf3yCK6RpcMGd7MJqW6aJkG5EonH2DJjEktgm2Cu7B5tRp8dFcuvuviUPugVCWXzpe48QavHXwuyD56",
  "key22": "SVQv6xc31KrB6CBEVgktafaauseo8FUX7tc3G3siAA7PydetxhJcwAQ24bUxbRxm9PyoGsvhv3JDA9CvCq9KKeH",
  "key23": "5zVudWvFFLmHcxF3QV2EpK2qjC5wLrUScmvGfbMFdybDkTQcPz85YZ6gcXhCxoTjiY7AtauqArd1CryWhzeiXLAu",
  "key24": "2wgnrdBRkug65VSjEdqp9PLSBxpZuZr1NoAaTTXkdLYmD26GDQwZJnS9Hze45Qi5sHkcd5CevVpKB3xxe2emN2vz",
  "key25": "3dP5VUKRmc5UwEgXZ1aa2EwojeMU57EDtrWUWYBmH3mJX2oLkzD6fFjescpppXpz8JS1gyUhPePEckpTNa5nnzMu",
  "key26": "648ngbUtx2jydE1DPUdLARdBFjSN5oPwNU4sh72ARf41x478GnHNqsyqCQYxeYgNTHAsQpapLkoiLdCFMv22AYkr",
  "key27": "3tFBF6sQuf6oYzKYym5RBLKYd9jt7P1DRYwjfsSScfAMRqdffntNoT33ddiJKgFQBDwU2L7zsKA71scSuC1Lw6zM",
  "key28": "5G9JFdtPjb3YPEM8s88PqhEJaKuR5uYKX4uuX1AG3ggCMAg5pvgVX369Hgf4epHvD9Mjwx42PB5uL1Yf4qHmpXKZ",
  "key29": "5R7ctjmoAsGZMZ5LUtCKVaVFtU48CJWNL8GmLEhMx9utLKTgMWVhajagLi1Jk1QvGNEkjZdozJQB91SPwnWyr4By",
  "key30": "MgHwGeyHnFbRQcwUphEi94WxP13dtSKuKi6NLN5tCXWJX89X7MWyy7boP95ERUyzrkSzsH7DVtnHfQEEygnfXcd",
  "key31": "3AWTMrvNkpo8Zbj3Lo9GuUuUsPhiNx51mVUwrHv9PY7NAqCAZWuqqx3dChfyx27RghrJ2pA4CTD7vro4GuvQbj4u",
  "key32": "4nXvXvC1cpT7XYzt398te5MnCKgJPfPtrMTAYFYafsr6vpyBS2oMvPvLY2thXtaNYCmKMAgsmp6rfQ33ruPbqh4a",
  "key33": "3aLdBtjHCNySbSzYTCget3Z3yyd83Q9oCz44bLJpynbGyNgQ5GhWCw7scvaBShN3QztPxXFv2dEfw66pgRWcSnCP",
  "key34": "3PZutch67geoQUK7aaUZX5gVw71DwGR9MhpVBaXs3GTEvbBGDGYAdL3YDVpmtou9QLAGSPvSTxchGjZhQE2eyM2s",
  "key35": "62wmnEjpouDdruxzF9hqUSAkgQmMkUkPzcRRtHJfMxFttjdK9SKrQCZLrhsFCD37iER1WMLC3RDfD4YYdMgcxWoD",
  "key36": "5JQzdCdfEs6DsjAnQfU11QRtKZEbtJUcGBvdnkW35TXEnZ9CGgiK3nsG1ptoMMAXQmx3ZbuMQ9tTHZqv47sPg233",
  "key37": "4K5WCCZABxthsyHBX2JHzgDekTvv3xieyjedXgnnKnu1dZVZwqNxvAWpnAT9mGWJtFwTpE8awycmDuqWbPtApUgr",
  "key38": "5UPjPWCLYzJHofbVXZrJ6FzQdV3BDtyCvngkqHaTpYv67a6knms7riRMC6zmUtYVFDn55eMrgiNRuNEgFNGLeLPH",
  "key39": "4gmpPFDkovRt5QzzVhf9zbbfoqegPNDiRToyisrt3TgpFzhSyFarhv6Q147QxUc9roQxiMahhw7aBKZUToD2zREZ",
  "key40": "5x71FdzFjbkCXgTKEWXxqwgJQvKLXPm8LYAvjtmMj1x72iFR8nBFYPgDdaac4pA7BcpJxPtu7jAAHfNyXAfPut4m"
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
