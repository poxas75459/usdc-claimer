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
    "wjNd3ftXUzk7Nkh8ufkiu769ycyN8yYjRMgUeU86bthUisj99TNYPK4aZy3o8Eduh2xGA7v7kzFNcsmg6rXQ3wj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iwar77kZoGB3iBZnQrsMXQK7t7WCwDdUnNzUBBDXm6z7yaMsaE77oCJ4QDpwX1qYteMmNb7VcPM67pybriJUH4d",
  "key1": "5Web9jjjnvUu9af2o7ccLNwfxhSEf9ZvdZ7aFpqAXToEAEDtXDDmYMVeYxCnEb8bLZfvysKqQq2Xt9t3JpSfq6fQ",
  "key2": "3992tkHLefDnYvzZyhrqjERuwQhFXw8AC2s1esghW8uQZwqxmYLqYbL6TMVLbsjF7jSB9ZYFXRT5NjX4kTby2juo",
  "key3": "4GQ6kYxwTFU1XbegUnNVPTvtSJzBPLmCsh7ZNqokfZtSHMK8Gn7JsxY279Mzmq2ntjUitj6jU8itj6ujNvE5Dzge",
  "key4": "3sLxrCdswTk1fxautY98Dy7ZvV8wRPoVmAsDojWYGvJS96aPKNq7oq9zUPn5MFfdPia2DNxNr1tQqCZpyLqnZjLQ",
  "key5": "PkQdgr96Z4136v96pggbJbGQrxr6jBKDFduhez5AGd85sUn1mkPgGQpqbDM3MK7hAPQjrRA4NgwQFMBCFbU326s",
  "key6": "1rLrj9YsVVLbUQzLwhp5cURuAFksynzqvdPigZDMto9d1XxrL4oiBcXUQC37whe4pQHH4V8fiJkvkw83Eyfvffd",
  "key7": "3Dd1o9DQsMFkwzQhnoEwkfZ4cQnJ2JKZ8rcoHRtgwNW8dRQ5bx4tZo6zcE6MnuBszqNmrpgNy7V2zpCq1s7zYwYq",
  "key8": "g2dVdTAEiPKqFeWDfQnMXqeB47q76S2acsRkpYhMgrYSSR34sF333FkhiwC8c7NHEXVuxMHsqgXcsHcJg89aJ3z",
  "key9": "2FFoiBaTkYCXwq6irUD3i7Djsu75aDZbDSoE7eWQoPghsKoatfdAoE3kwVEdwQRtHJrygZtSy6nY6ECU3urrVrxU",
  "key10": "66Nzpb8XwTiRRXrRQYu5ybrtYwadTN21Pj6YL5ThqV7yrY2rwHjUJhWMBzcSi5etsXKPFF4hTroTJNK35hR2NYSc",
  "key11": "5AXrEm6AJkvRXanzvJR4E56quSPnduazAamoCxG1anrYDmxG6icTwyqootdYvs1i7LdTRo8o4DS2qnW73z56tK77",
  "key12": "ECBiMh6tqrnZ1dnM9rtxjvDYVf6mtCnoPyg1bwka6KzFcjrtAbEtywYuvs5sryLbLDuVuRzdUgGXAGiVXm5k2Mb",
  "key13": "xY4TthncnzttsSfYMcgeaEhr1coZZPjhXqE7MqS1VyXoD2bbgwmSRhzUpkjhsgSkDZQN4fZLmdKj7oBWZWrEak4",
  "key14": "4DAnTVYDYCASFZVHyRozsTTL7BeRBuHYjiHUnPz3FzpvJddJPBbvvrMHkwMBWCxtSFe9YSrv16Cp1S4d6CWrAsy1",
  "key15": "5nvd5KeJoZ583xKM773Py7NYD6f2MoYzMP691HdYzzeDh3t1AUuZE6vGLRbznPdnfrJMrSfgXsjtWCwgA2Sr33dj",
  "key16": "5nQPDeXuUb17rFhyqhckGhYzXfbQ7KrdqnGaAeH137e6mzCtUQimyhpBtV4pyfrqUBterK5zrEaipS8EbnqPGdFv",
  "key17": "3aDvntMGbBp4Tp87eiSA3kiXYN1yo5uaujc94mRgEN9w3UQoqt1vcgfEqZQmxPTTLqnGtkgNfpV87DxH3H96bLCT",
  "key18": "4G17EzD933ffhA8KaFQLUY99i8twpTRLxm58Y4bmyQKjSh3ZB3wBykRLL3JydB23B8VB19kGwjHz4qqkfMb7aZAd",
  "key19": "249LyJQJ74RdMPPH5czZwcQ3oTzs33xDTAXTdRQvTG1qyELrZ6Us6J4R4f1rcw3XgVWjiy7chbEtxU78pjBeXh4P",
  "key20": "5UAesNMTt6rjtDqiJRoWcmnLLpjhEJAR2SLQzgBLED7E6RKFuAVBzpo5sre1iLeqd7n6nm3aXR4Fwon7HunLrDzA",
  "key21": "4tdepaL8qo1njU7aguzwSQmeqVWHN9zZptNs72QJBMP2k8sct5p4oVS8TB6CSLBnTDMVHYdzQM1QrrV9VLNoAYnW",
  "key22": "2ypTKK94prg34kdNt42n2s8ZFsRXhRXHb8b8Ee7BrQGamvxwkLoDjcU5hg4SdWop7d8zut7XggnKWawcyV7JEYK1",
  "key23": "2KpftSoNbAXhjw5h1xu8MuJ2W7NA1d5dWZvhQpNmcbrBu6zuL9hXeFBnuETSiEJmkgCpszRYLkTQCTEdzVYpuiEy",
  "key24": "63Fxz5AABhTdKmocxVtyy9cvctjQSj9FYhrAsE2VrfAdBoj9uvgfKpHofWd9o71acWYJiJk1DwmX5YFHaka5MAcr",
  "key25": "25HQvjjQCRkcRzBwG6vSmJ94QdEZpW2vBWcqgRCzo4s8jxNKZ1HWym5pfg3mAoFCHmedLhq7ZDWrhA43okoFzcgS",
  "key26": "2LBu4RE7bTMeu8MjrKg8mHPSgFFS88399uwrNQf67c3eCrbWTe3yAFReGAbSXwR4v2LeYYrjeU4o5rw7nGLG2gBJ",
  "key27": "2WjUCS1iU5kmYbWePkoTG2DSCNbcoZKok9zKFngsXJznd9cg1d7fiauyQt91Mt7yBF6PM9oGGBieVfWni1G3QfT5",
  "key28": "4y8xu7enhwoUQMSy72mwrYJ9wfxSyexeictwLaDE9qHfF7kZ2r1vZVduRge9ikUFBQgyaMMsEKktAQd8X9zXyzcF",
  "key29": "3ZjEtQj2fD4kfu8vVMrW8MpGEgdfzLef4ahwMvS5YmKnfcBdyxs3wn63e1f4Ayf8qio4urKp78XUDDLd2iGG43xd",
  "key30": "51FNetaxPpcUwSqfRoHvZc5R9winQPrsCXoaL2MbSkorfeEHLDmg4jDs9JW2wJ1VDgCmii67ind2tbs6X7onrKvJ",
  "key31": "4idzii8ipBBafJ27798WjnSQ59Nz66DHu2UqRAsL2u7VsDYBTWNJHvT2253BsCJwdFUs6SuAtxA3yk4ptqMiMU4",
  "key32": "4qW4V7NZAMDzeYVuK99ormcguk6DkrLP1T53hLeeSuAG9qke2gJbyojuqbFfHEL62vk2TVkgPRmsjRZhsmN6rpcz",
  "key33": "4Yex3G8EJVckA9qmXwDnLqi2XCYSMUTd5Ky9Q6huqvMxR8QwYb9E8XJq4SH9xGzHvSBT35uc27a9ns9cDuLj5PbQ",
  "key34": "3KGQNdeJET3DXJcFTym6Czpa6PPatFpToG7vSAncS6YJPq41bgmNKeyN33RSKa5WVeM9yumrhpbKfkgZtPUG3xTT"
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
