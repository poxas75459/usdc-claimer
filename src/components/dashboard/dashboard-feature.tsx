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
    "2TTwhEA4eYfEZLxU1iqfRXKHgRokq9vdWS2CE3SFraJiTXkk5igvo3dkMx8p86iZq6sf7UHtMx96xZzTctpsAuX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vhre9fEvk5UtiLpap4DusrVbTubsM44vtmR9c7N8npdK1LdDvFJD3d6KjomvxSAAQzuousABdPCmyRtoFMf9dDw",
  "key1": "2KH1uGwPtDpKNu7YiujDufX1YVjt3bCLkUzfEfisBmvxMQd3z1MHGo9yGonpZPzXbSWaNsvE6bANSt9XZnqPPHhM",
  "key2": "3dMAybjAJqNmvFNenAhP6yiv18LejdmQJH7nTaYYUPQ1bN5DCtLV7THxyEJpKi1PN7Frm2krVMy2gaq4pEpxy2tZ",
  "key3": "S9VePWMdWEFtpeH9dkYAPGw2q1r9nWJ8cAgfR7BCS5VpvGc9KYeeRGXU7ruh92RkQAv38o1TxoSszJfrtnzSeXz",
  "key4": "4Dijao5VJRZzNEQCf88YP7huQZok3WrD5zz1hXah2jjJciwD6DgNyp8npDztfcxsM1H9iomKNjkgYMAmjQ7Zng8",
  "key5": "HeJkHGCLh6rTx8f8ruhagxDsaAFJ92ePNZsDNTCorDWuU3spro7cXwWKW5NBb6CtA5mMeZdj8GvVvys3NLoiKPo",
  "key6": "bEUsY9sXUE95zCE66ogXEpkH6zus7DsL5VmHEk7nmpGj4RpacTfQtG8eNZQyQTRiV1LmjBK4WSUjshZJJDpMoek",
  "key7": "4DX5E2NB2fS6xJWBYBLQZ1eBdVKttk8NSpRZ1UGzuQPHq1mUqszTvLmHJLFUq543Lph3H1YvAdyGJwDVaJCjEAwC",
  "key8": "5K82hVCjx6dBXt7crhz3jrvEd36dhJ5hFgbzdiUDkBDQjNYyMHavUcGMXzikoCEkJobh3xrzsnCxUsNYsVFdSJJa",
  "key9": "39VuGi8iUMCx54ZZiDnUzM9jEzVWop82EUbVuPoR2mPjiHDbMexAm88fYaCHNyZGjvbk6xtgACTcwJhYf7xAGWz2",
  "key10": "5yrf2DSFEQcEtfJLa2PT8n1wrFgs46hv1rKbKDUY7kiHxhRqAgspFUo2P1Ew5ALH3U3kgyiXaBdiDdZDzc5wFmUc",
  "key11": "DgHVwQSgH5vouV3ZLSV1gXRH65199zwboKxAQAEtJ1PojKn6PaieUrxjW21r3Jftb6j6dayDu8DHRgcA7nE8Zxr",
  "key12": "2et3LWCSmMR6s58LmetZC9gZcBdEfHShCjEiU3vDVot1dQCMsTkE1tz7xtWRKKHfTkWnxDqWZYi8FrV62uRRRbFe",
  "key13": "iwvCuUFDzvFVPVxxLcxupUr1ssCZe1VFACM8FC3tW1m4ntttCogwVdowbrn1k67sgV6GeDbgfihtxpib58edcps",
  "key14": "2HtNQvAyD58wQ9FNxJSZBwk7Cringyx8b4aUtHD6t7rS9nyqgF9TVYKrSqU7eePQjeGBWKwcPQgmEvzPj7aSvXQR",
  "key15": "anXxmPguXcv2asvRYhbGK6ekhyDdAJ6wWP2XJd9nBn4dkDqgUYbrBf5K9CHKfWhHBJUPgexUPeHqP8dGzg27tKf",
  "key16": "3FaBG2DedHCseBLkngfjMFVLed1yEfeeBn1KYugGztPNK5iEbG4sv4DMiqNwA33p8uuezv6eVq95hUGFraDnZVK3",
  "key17": "xkvR5eyFo9C5cH74VkpfMQmZnJL93Xu9JTA2MpVxodG3yPjGaiZw4XzwGrhf7aitQuPAFg4mNYq24JDtxUYM7H5",
  "key18": "324P1mWXuqDoAvErS9VH2nutDoS6CGJpsXTgTHyVTsbTSTQVav5oRRxSTQU5vGV3oQqyAto3PJmEfoRBZrVX48SX",
  "key19": "4KTeaFMu7mdgtPsajW2v3yr49zSyVKvSNR6UbQU6B94dnAGeJ5MtUS6WTQyjRDA9VArX5m9if2mTYHzPTpZbtovK",
  "key20": "2Z5ECSxbdmBq61JZJDknkeDn1GzUAcj41WhXcQ8xxL9ajBnmh4vdaW8NVHev8AMSDzrWbS5UpHPfUH3j8A9vTr7z",
  "key21": "3imixrCqhW8Rbaf7UHLnEUArYF98oC9xasboP9sk7eihjz8D6Fdd61MGP9g9R9D6zjv5hb4rSjj6GgGxsqwg5drh",
  "key22": "3cX6oxibCjdEbfF3rkPajCV6taKJjn4nw7d2UqC8QvEvxb4eLF2wmk4tWLriwgwHrnF1E6FMQEiU4GuAjaZKWi9k",
  "key23": "5G8ZnRRm6Qz9zmEmK5t83EdQcBiSgYDCG8SM4VDXKe7PfH5DzY4dBjK8WUYUNmev1TpbuWGDDtgd5Zp9cc9EpAZ9",
  "key24": "4A8BFv5buX6zkPfNRGBhPMAi4ys4kSKSq7Rwev1stPWqgHBwJBsYyMJw6Cn5wQMx54eNdU2UXZJfWfuja8zkCmX",
  "key25": "7WccTJ1R1iae684YVapVZdwN7HZaCpaFXWJWnn546U6MgRGSqZYh2wJwn9BgxkhivrJu95UtChPiwD8Fy9PH5uJ",
  "key26": "2JfwHguk62NkE1Vywg4eBR9U4mXJDEC8GyBTJsjqAr49VUqn3JRuAGEbF2XMadnQYwr8bDeYEmczQkjwHQnfCL6f",
  "key27": "3P7VPWxKYhDfS4WnatwdPcHJdqjTxZijT2RjQK8WSVnk29k4v5D47NPrMmiLbx5oB2VZnuzZCpw9YbG5EcJbDW9n",
  "key28": "5VvWUXEQkEyWvQNCSESDWM2fpLAFj7CXrC3t4g9DTPwXAx1eF4f9BaTdV46xca9RWdQNbDMAEKup78Rc17hdqFBg",
  "key29": "5URjTYBEjtmQhqaJoQ8kbuV6nxASbXjhs6ksC32MmGh7HcBTDZnJYXutM25EbYoPN2rnEz3duojUegGtiSp5aiFc",
  "key30": "4wQ5pTscnH66Jw6ipc2yB1Ax7G43PzBLQkjEtQ26w9LifY3QkbwSzByFxJARxC3LiiBH7wEKE5LAAMe1Mo6u5bmf",
  "key31": "CR3qg8bUES1iLvYvvFxJH7KDuK3toiYcdidmMvsUwEM48H4q1ZfYkZ8CJTxjGrnVBayHXa5GXZTMhPVYqYQNSDj",
  "key32": "5QrVDD2YdQb4YpYieQYWmZ8Wh5qazckNA4y4mqqRYpnNpL4pYvFVFQRaqH5MQ5y4q3c947oHNPiGaCtBcraA8Y1c",
  "key33": "3STqpJGa4583wXyQXyzYcw5ecRV2u14XUgMvALAUNEvAK5d411BQLUfrQ3XVQWx7xsmGfEqTbXhh8eRzvSh6MqfD",
  "key34": "QHFDueLUSaBZbQe4S4KFSwD372rhFeAf9ZqktNQJZggWSY3isTp4rhwXoJMb7fq32RdPJL2UibqXyoXJXCcLGn9",
  "key35": "2sFfQ6ktJoB1XHDECmDMW9Gt1C5K8qi1GAUpJbV6MWmDbZGyws4NCyNwwrCiEN3REUzKtPANshYa7J3hjBM4UeNv",
  "key36": "5oy2aXcQyuxVz9PNa3zS9aZjpHQbZxD5T415Uny3dTAK4sJevDdBkwsLHvHtRbhSmZfcDFPYX9khfjWXAGfphbNg",
  "key37": "4oi58A2QDNKHJMkZGMarnRwo74K9EGSrfWbCpDtFh1bfVdFCjCpsRwwhE4nczopMkjJTAUJfxnChJYHmcxwvK3ME",
  "key38": "3jG5P3bjzPaAJU9jDPPVrjV8syFRzzyQ3k84Jkm6vPC9RWGtWiJXUoQeRuS6EzPqi9L1svvmAyqasvoqjnxtjthf",
  "key39": "PBYBNhBAG2tKe2Sk8Lj1tUzEqrhBNw5FPhQBtnT9L9Fh2etpVEV4SSZpKGHq2NufWtnimuzo6mb6E7Uow95S7Zq",
  "key40": "3TWfi8qjmLoZUUyRCRbbAMqLDhpmbJaMVuJ3CasW3D1U1qQwZmGNxJyNEr36MJ3ooaXPY35YbyYP1AQAVqEgztaE",
  "key41": "4Ug6KUrZczo4sw133jAXEWKGMqCMHwhHtHCYFzUkWVQchxd17t9gx46pFUSXcJ2GKR5T1U3NfiAj3vy7YXkZwmvk",
  "key42": "3KYr8hkmVYcNChCjpcLcY5hhNhVd8qbxt4CQHCcT9m8HYPtBPGSQHjXiK7aUyKtYhsaA7yeBJtoFGX2GpLA1d7mi",
  "key43": "2yMzfxH21anuUBU98WkP7bdtW1vRGqbUeeJjnk9qUPUTUyKMr9ikzsLgjrD9qDmiPygA1WBd3u9vdSNG1Czapfif",
  "key44": "4SDZwuxc2RThRQr4ZJ6QejriQKbrnvdSZV8mMJvtJAkXaYW5teeedtvShJSFTX2Z18ka7nATwamrbjJNt3iLJCMK",
  "key45": "4qvP4oeiYLTXNrLb4QCMvxoxhDAYtmF4rDx7huCBk9tH2ycZQ8ozJiuvxYMVVMBLbJWq1RdBd8Jwc8RbTctybeXw",
  "key46": "3ckid2N7A6PQgGbDeiHmndwq9GgHq1hLvmG1dRA1F6QW3ff9694MPzvv1rdPysWEmmgePDyqQZFtfCtJQUnu5dxm",
  "key47": "4RWP5YP8XuqeMjzq5zDGBNJVitzVYVeDY6MEanXtejTRjmAEvHTS31SV31U4Nf7J6WYAv4ZXBtEVeyKLWNNaxyt7",
  "key48": "3NcqjX8VQNfh7dDUsBjrCQeZ3azCrfiqgasmmN2v1xZ4oyJyKvovGu28a768Z71Tz9jQLdh9XGzxBEMmg5FCtefD"
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
