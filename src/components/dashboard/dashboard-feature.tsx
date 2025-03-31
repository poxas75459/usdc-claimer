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
    "5bXML4yjcCWqT28j2s1YWBpdyoGaRyKDv5Sm5tPY178XEXKoBpgVHxmqeWGgzkqoF2ah33m8iknSfmoypNEe3SWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e49t4gUjqprXwDNaDny5VwxMQxSFspNnkEZqRZUvLEpUiFosGjfuXk8wPc6QeLTNyXwuNj2q5ehycYEQQzbXFva",
  "key1": "2qX7h8dvrp9M5VLwwPpcbjfdFMQtYqkpJVSaEjVtCqx4jeR7ZVaBCDt6Z1vVWeNnWC5FMxB4NePhXKSh97YQZQh1",
  "key2": "4AymwCyhy3N82BQVVjHX2iwivHi6P3F62mAydnMEepCbawBiAjvgCAmd8vnefEci52j2AsiQtCCj8QaePiL5Kifx",
  "key3": "dHn8wFmFV8dLfUDUJw5NwFZu7RfHsM7DuPpRXnfHwrfusHE1m3SPhCxDECGn34xdrPYHuvbv9Au9JZgYe5izBZi",
  "key4": "Uw1itKw893yGAWvvBMfJ8RddWUuphM12XR6s7rTfSGfK1qExNJRJauxtH19uRPut6bNVCNivtLw69MziVBMQPUM",
  "key5": "28kTwgzbCvB9dsBS9BMZHauxVxXjjUSzKgTHNMfD2wSmhfipRvGW4jdNzURtDpWmRs5o2FM2jXtQJZXErvc9EPsP",
  "key6": "66dpRw8MYCFL7JJaM8xjvwqGdF7NYDceMsp7NrdbGgKVcTEDc15S4iDQTMrNeQDqmb2CiM7BGJ2HqRp7S2zumrCX",
  "key7": "3KJg91vBp3wfLPMnkeuNG6sQibBTGgb7YYSJ6t7bR6njMnu8QaBdcztWJzb6CP2ZNVg9G9F2mWmfwnEiV2YvT5cM",
  "key8": "2wkXopyLoYRtQzC1hKitf5JG8RKqoVDHkmW8jErHmfDYtKJYwYXHz32Lqa7K7oAF4RAN2MxwJqMunWmudVpNncK",
  "key9": "5Xgo9EoNXi8uToybZZrWN1qh7MZKFZPv7GtkpjSZFBuagdSaiQZJcvtp7uPPxQRuLgeZ7eTresvtc7gLpXEeedHh",
  "key10": "36doGP4LsJUwju2TEqmdcVqEKzpnyqtDJtmqKexL5ENanxBMu3GnUFG7VHaSpFjzUxKdLYqvXBMuv8jhqJBv5GmY",
  "key11": "48MFUBWH5Rh69hzs5YbNXiM9k7mZ9jwM9HxM2csocCotLTERLbGVMvDih8ihaaGJeLjga3K1dnrDnSD9UYjNUKvW",
  "key12": "3TCAr5RM2QxngS2r49RSBeqTDS94cLFJMPKusY217JWqA8U5BZ25PyM15uHicgZyLzgzn1SiPa7ymS9U8xxo1wv5",
  "key13": "3J7UpS1Kkf4u17UBcEiBuufAn47gNmw2BbeMLi7Af8kqYoeA4U1sPYopcBz8o8i4g8scHJoUjENyiR5fBBctvUUz",
  "key14": "3kio3tnj7wukV6pnHejyuQRaLyP79vshKJyW6F5nbyG2gd8KZ4A8BS8z2hND1qEfMnEN4AhL5zJyGCWyFiDB7CLd",
  "key15": "65c4qG8dimihP3zzJ4ZmK1LhTpiFnXXeY9a9KXjiV3NNh9ocHsghAa8KPZUL4PkK9eVUuuDWZvcfCNH3vrDFbZaA",
  "key16": "2RXZWBPVbdDgJDZN1rBQ7N5xKfauBBGJdo38Mb2KFq8amsv9VX3Gg47gNgeK8uCwdM9w7ih9tkBmrsdX65zp8H5C",
  "key17": "5P1cw3uqAyap5gjc15qpDWtD4WzSdU4N9QW3dhSe15rQfBQ6gJh4pBJmCVCunvZFUktCJyLJBFideh48KFf4ZeST",
  "key18": "x8BGE89RGSAo4UPY7n9raCeZzMgxxEsoQtg742WBGeKhGqTHPQyuCrJgw4sMzf22jz7743NZFAgeQSETJhD28M5",
  "key19": "p7vJUiF2qYEg9BCQEmY2MnoL3yb4aaWTmeq9i8ZV8TYUch6sBBbpTQcgNGnyds8j1YrPXCjMSyLmfD48VARVscV",
  "key20": "2hLbH38Rnpeym7R3dDj8GPihJ6uWnFR2Yxmt3o6jAueqQuS1L7Ny2yB7MYSaNx5GrhJsoLvDBRr8PjMQHwkBAXDd",
  "key21": "4FjCbr71FHhkwFQQFCeLJsHS3zn2jLSCq5Mp5UobCPF9WWFjvqQJe25FphsoGwmCSDWMQUGDHascyYQj1j1Fc8vw",
  "key22": "sqVNJ3BhNgMFSSdYLsXBDg33UgxgKwUAfK2YgmVLCK149iKXvyaLH9zimjd7knS29tDwMgs9eJuSe2mgRKh63uJ",
  "key23": "4NrF8FfxDMK7Ew51Gcrte4AHLf1kWXobK8NvyqwQDkx5E3Lqk9nd48JkcAZvWuEh54jYDSxexB7ELiL7d6RQwSqP",
  "key24": "3FRfJ8jEiApEfyTNLNpaJUQx3WivKmV6dMSMis4CbcTrd5TXLiVN32Gems5BV7yyVu9sm2vcjy4nWs1ANJWTcYx8",
  "key25": "3NetxoD4kVpwX9jPGEQ61ty5nMCcpTfEhR27pyBwzTnnUdGfojSEUMgK1pc5iHMEe4oFKEffeHkwrvLTPuH9bS2R",
  "key26": "4UA5b1uQc3G3DceAbRrA1zdMksjpTMtfZn27hC7ecK5WrQ5pBs35xAqxBZAAySx9CkXFcJK97bKMKVUn3F1Bd61f",
  "key27": "21YmWeqS2xEkA7sE9xwfY6cbNf4SD4rxqgtgB8eHJFBSuhXxFxrR1fSMEJuDUcvCSpS2YT2ysvZjJZg5mJ9y2wfT",
  "key28": "qMab9YZmbVqsejbQv3eeZeKJ2Z8L2FpUzQ3qCqFYvNas962VeB2ZEa2Umo2ucKwz3WUmawzCgnsFu2nnWQEgXod",
  "key29": "53GPti4SUbbNN7hkZsTsPH3UgZ3bVNUJ74MP5jZKjt8rQMqvkKF3bDAGpoYTSYzgbFtUjaBdxSdrPPXBdFwDUvmG",
  "key30": "Ef7QfhBRocYXrrXpx7MH98vRF9GmJUjZuKHcUK5mCXCb4JwzAeiSMaceAzrxxdfYtwN7DpbdfZXtagZfsaEGjeJ",
  "key31": "4fiDZKixS2q2SRAvzZZvP4ZME36xhbY9huNKSYi27GapoV1FgizWZ2mf4LtGwMDsbsaPzV3spqr41gRnZD8vmEuH",
  "key32": "AFaU11versgt98BrCv3fW34Kxr7LAqRyTTP5omwGK8zHPwtmotHtYVthTRsAVptBcfKAoKVidEmHjvD6FActq7R",
  "key33": "2JxNC52zkiTN4ZRYPQqE24Rq2hkdQvxJFomh14cckBdQKy6R3UsejyJvVTNj9AYk3f7oo1N286hioRMux3sEwcYd",
  "key34": "4ymGrfWsc1a7C6S8u6g354Qa6yJLjMZsi9uJVBAwvEyDUGtr33gzemKaKWvM7BzuDHZWYHnhFuRW9Aapwabna8WX",
  "key35": "5B8dDw5TxPVCeSSA6NLwvnMmA6eFLRaWKSmQ7hJocHaCPiqgffDDLsWfYqH1tGj1C55hwA7Q7jfzFnqSm43GQcPb",
  "key36": "3vcbyQhdhwddTPgtZHKQQ8ktsF3uD2pXNcmZQaMQWFajpRFqjC7T4EKzpupt7i31r43hiG4KVrZFEaYUnJyFsuxQ",
  "key37": "5PpN82msiE3yxPGABheBnwEHKtmC8JB5mf5cNwreTzhCuXzqqrF5TyDfqgQpZWAqWkU9yu5hpvVkat7SJiipufC5",
  "key38": "2gDg1iRVAQ2QNCab81xr7zM1gET3uWBaKkn2wuTVMGmT8Ltoa62kkoMZgCKixV7jSmxv5811wJ1rJQmYRWfuRBkW",
  "key39": "2QJLky55zzpHs6dMwzE65Mbsnch5JU7tX6fMUXhneYwhcPAfPLprDGpkJyveYKv9AiC9DYsK3LCk1GRZ7Ep93kwE",
  "key40": "5HxEBg9GmnP3Fr2JZr3qmz5mQp63XpZjJZTkoLnNqH2VWNbtmA1fqrAQn74TjYbuZUeBNqSnK1tHYtCoiGhMQYtq",
  "key41": "2Q52K4BHxjrMfSBuvbGPF6aNuxv4GDWsxDEpqy6pbuBPDgF4DK9Kqh4kiUQntBM4pFGe5c8TZD3SRbE2Wv6cjpCq",
  "key42": "3RM3GJ1tpmx4AfoNmAfDffbwMafpZfHWu9fB1JjRjkgCJEKAr5qWkVkV3jGKR9JTzUZVi4mQPgn9RYj2CGTdV7EH",
  "key43": "47y8GykfL3GVfubGNprxF7tUP4xzFoENRpEUcVeVNx2NS3CeD7gy343EsFX166QnTkZFc1p7PQ3uK58hcriiNjmZ",
  "key44": "4imTzm9XGjgSbguWB1JaE7egvZVU6AQrsihEzCeHfCr8Z4gaCW86iDJbRkUMBgQnfbcPvzdeB1YHcAoxrbQQAC8n",
  "key45": "5aEzoW85jxj4hBz3brBacKtGGyaw3aFoudvAXhkeSMYNv3rveoWVKimWY7vs69YHXTHgLFdXVzXKakyfskxNMqt4"
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
