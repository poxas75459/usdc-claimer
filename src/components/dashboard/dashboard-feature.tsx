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
    "5rGCqPkAsZzqtzGSHdESgqT3LxZFT3YxeiCUXWBHMswvAhUbr9BvDvzG1SEbX2RmRQeAMFDFj7EBNWKt7TQgjJur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XFPzBU7MTzW4QhhQ7mzjkoDFFpGahxX31fWGdkuWNW7yoU7Wj2vPcrD6EcePEYCnzrDFQ741ntASUyzyczs8HzU",
  "key1": "2DBuAcRmeYT7SBRF5CdxzAkiqFNrkTQz93dWw8GFXJgjHt6XDeUNvgFJkam4wS6LGCdAWzWgUZ7GmsHA9mYieES2",
  "key2": "5JeaUw4d9U18RFg2TrxnjnqbsRH3mMoyquj5ExmYyRex9hqE4sayTnGDMx9EAZPF84Tx6Zkm12oA1SvyVy763icU",
  "key3": "5pcjT1zEZBEoomw2M26NcxF1KFtYUnvut8cbME4MzDmP4aGwSJJhYxqWJAHfcRzai7Ty4B8M4wzANGtmf4jFycn7",
  "key4": "3HTD4nALV5nnwaFmKxLvNTFKy92mTSVyEAmKrN8hzBH5TPvZ68STyZUEZASXYqYuNq4Rzrvs1ojxDtiuJSbvgkdv",
  "key5": "4w6dv1y3HaUAss3JEJPUqWTekCLrpokEdd2cBLAtgXsjcZwuNbyz2szwNiZpTJ5FMw8qVtxUW4jm7HcKXGqLBCEk",
  "key6": "21vfzEi1pCMsmwwRA4uB15YzSbebRQHQf8EJJLbdzRwcHeGh9fRmgKZwVkXKvUkvX6WWZcGKAvSrEqPKyKDxPNpz",
  "key7": "5vGF4Vk4gb3CQT3bnn3GWbj1t7QyrsPbtSusqDKH415DCxfviss75M2oTFS6kHq3FkCCT7wZx64FLSJyDkVuKXd1",
  "key8": "3jzoBkuEXjRRPXcE9kWeJUhtk5KVtsWXz1yQH8BcnuzEnhPjwLXEHf3PjvTCfyfBuSc6rBGqnuEKjhoaXW4Adwmj",
  "key9": "EUhcWiKfyyESwH4Wx51RTYfoHtuyCmc7m8HnP7ZL3BuHSKJBzzRoMPPxRZ3xHYxLwhtcMwJKUC6eZir8DZMfMmW",
  "key10": "44EHsjxgG8di1UX1G6f8T7vR3qHZuGY1K2GrT4UzDjxethho39dNoNGBvQsiHg1GbHDeozFCqe1rVS26L7SrmphD",
  "key11": "pGwBMVDGJNXyN3EJtgGCF4wvWgzLTrTrvdde3aWipECuDDQFbkFDVaEdmUZSq7J2nfxvFvYDDsNTZJR2M6XdcZg",
  "key12": "28EQMu3qYDwEm9V33ZMjNgirYBonnPmb9rt4PdYpad8QCzv4KhMDsFt2XVniKz92uirs4CoczPKZ2Mz1m64YJQq8",
  "key13": "4DStsrbeWushbPZ1GaXm13wYjm54unv4MZbbrMNJZBTV2Pz3L2L266jFS54BtFyZd6TubTBW3LKqrXxeT6PQqT7D",
  "key14": "4ukHM36cuxF72C8YX6WpJM6yQqEmV1wYaDpxGSfwFaBkdEY5cbJT3WegpjdffpCkAv8rcQRn7hwi7Udn5Npi2StN",
  "key15": "3t97HfDd8PaQzskxyyDzbakj3WjLqhULhQ4RfWUtFrdfMBnzvnNiZDR8mYwvZS3fsyQNepeR4DnJFVanszDm5gHh",
  "key16": "4Dtf7deRAPZE2Sq2G8jhQWHL4iHuuoVVNXmEVu3pZf6u29h5C5dyy6MHyXpnHSi9wfagWhYCm6FrWZFftAmw2F7j",
  "key17": "4AsVcqgbduTTWe391n5mTdjFM67nmba7BvDvUX94Gt8db2xjKfAgReMBzzpTcezHEDLsCdHaUqmRJwrW7uHavHrG",
  "key18": "2bx2UDEQgb4oa7JLGneVY72x9EguVDkQMFVgepiTSoKc2k9rEcT5VBUyWzyUcJebrbynfe2tJT45N7Shp2ZUwRuA",
  "key19": "3LMGuaaxm3V1q6DAQgCndveZo9hsTd1TQgZx9mvGVyRoVZ2vZjYUZg46gMgoE7j1fZasca63aCMQVHevHzCMY7H5",
  "key20": "35GZie4BPEdSUegoqQgFTdZxVL5XuzvAZpckk1foFMUDy7pY5RHgAZkA7Hs1M786wfCLudAVarqGkVmusUWU7Bgs",
  "key21": "4ubT2ttkDyWgMZDaF7bMysZtQuVV6wCBi6d6i9sK8hr2jZqfdesknpQxTvkQhN3uA6QBmQ9hWGvCzCQXD7S9H4Fz",
  "key22": "4Z6s9PmAYGLNgJBthA5xsyPSCqjpH5hCGBJYrtt9B7pjwvYxwnGgBbEbYGsudNQa5cJwchagsHP7sHMhiNJNMFx3",
  "key23": "42TxfhpzwnSnvJFSRGL4wuVVTCs9iqDmF48knqh2GLT8j4eF8fXufZCJfNRcVqt1U7Cz9o1Dz1zifA4KubaaotyG",
  "key24": "5rqRcjquSLNjFvwgxSoTTizDu7m8YGXzXSY5zqfQoHtw9v8aweVgat877VWyfcaDqPt5Gu46Pr6nys1agZKqcEP6",
  "key25": "5bCEfbfqrrDFhFSYyqxqwzWEu9Xf6YUwQeNV7W6Hh3TWuM9DnseQhoA5fZgV8pEq2mAXGQAhzQiuZNLTFXswBAEt",
  "key26": "3ApVQconL4KQhDJtGgzU8wPyRzzBeDYVnAyjR3YS5Lzd5XyPqzacBcxv3rhdSs4xHL94UuR51NoQbVaNVpyEFG1d",
  "key27": "b4Y4esMnsULMYcwDw3iuW5ZqTs4rKayd6t9pmt5gKJ9VweAu2eyGi7JFzbx1mnpo6FKfvySzuYiaQQWNZ1cctyV",
  "key28": "65CX8bP6FgzB4tBiZx8aBbtoodnbmKmwrpkZCWiA1ZC6DE3G9kdoT5HkLzn7mttvmC3fVhGPMsx7AaGfYuYjNq1R",
  "key29": "4pkoJg6AexMQ4CMZdPwgZBRp1JRpfKCDQbKUP4C44VoUKRgCJehiq9tLBYJ9ke8HVQJpznJaZF4bZukcbuqHGwgc",
  "key30": "5pjoBpZeGKMhdxo3NoZY4F85CXkwhxefiCHKrEd9ZfAEAMzZoX3bCKd6n4kBGpHw9SS1K8jWEKp48jcfPpJE6NjR",
  "key31": "2B6d6bAeTRruiknJCpH9gcMBCDd8KEgJRXScLKcWnw3QVKrkMHXus5MK4o2xnWsyNkZgMpX6FAtANnwSqS4yKCcq",
  "key32": "2X5SJFS2SEdzWihj6MjFk9H9sHL4P8eAEXf7nvARjPaoFqTTSB74dC67NZWPDKaa8UANtsybFWGeQ9r42WBFaF36",
  "key33": "SfwpTxxWqq7HzpiVK2BmQcD8xqyfm6dhNqZX32tSrgfiqz2euDzsUS4e9xSiw6yUWzuWCe3NXV8vDVDnxsChgbn",
  "key34": "5wJ7t6aiDfdiKj4WSf6Wx2YLFYVHPJro4X2MUaP3RHfcKGompfVz3vWKoLzRkQpdYUUTUJeo1GeaMbSCiYRVFte6",
  "key35": "r2KgpwMrvGgbDMLVD5do8zoayqrSSW9R2rxPuMc35nV4ByeKSrGb2wAD7iTHmJnXiJib2JmpQv4kx8Mm8AU5fkX",
  "key36": "5fUJVpTU8SAaCcdjqGNGedwfRQ2HP1erJpb2nRxYrjT4WWrqZQchCWyukGR4cdcofoxjrrknbf7Ad5e86B2hjN5G",
  "key37": "4sa7qTzraGbvM9djCNc46En4jUKB5Yh6TosEvrqQxhBKrv9euFGcd23SUykDa2bNMXud2Qi9MkJnC67wYWkfsTAL",
  "key38": "4vtD2JwK6EEj2t9hXjkw6zzebFMiLU2NP34TNZLa3gVTHueko72AnUQXcL7KLFnTsgbCfc76ExnKbygrbLA2SCQk"
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
