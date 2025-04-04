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
    "2rynvPNi6MXoizuenwiED3HYnaBSEt8BjGBN2vg1MfybyyVTLH7mUG9fSHZ1AdYNdDVZmk4NiPkVmzoD5aRL1C4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39jMXSmCNhQ8pAF5s4gAwQHoJA2WCgNHPvCoURAmqeoY6hVe8K6DhNMy4Bg8BuVxA55aJW7mVDQoxJE8GHeGX5sf",
  "key1": "2SPmjN39vgGRmTH1TMqGQEVagCJr4j83XYa8RxtGWVK4WSYfRHbpQ6c9u9i5ZYK98EoJuR7JwPZPWCXKxbDxRP87",
  "key2": "iBE3vJE4bC7qrMAWpbVrEka347b1Mo9EbifFmzuoev9vvzsY5qHY3AWYTqVgDee8KyAX5EG5HXkpX5Mnv7s72uU",
  "key3": "5tgQkiXx6drxGz1b2CLueavZrCBok89XjqmQHLoJnemkHFun3Z1JMGkG6sGanzPgKSW2Lx2EniRrwsJaf2ohRPQv",
  "key4": "2hZpxo149UqoCu4jZUteTK2C7TyksZ3sWpb5ukerbampLnwJpqyVKaM4A8GA1vb5cCjrW38NYGh8FrM9trJdtuxD",
  "key5": "5ZEUc9YPYDS9wisP6PTXrftAMW1psgBiijqyYS9XnhVNHwKujjyh4dHyFi5CVBRDvrGD5TP9GrWa3KzA1Czo9KHb",
  "key6": "2mjAHsBHdWEYHAzmwkVhPBwJPj9hg9ejauGtsBPeXCKARKxdkg2KRGBaAcyqj48LaojfuM1R9wxWA8WrsM8dneez",
  "key7": "4vFZG2H5iyri56NVbxKjfeUTwtSK1VinE3X51sADJLHTysWYMaJRxMUvwmytoXc2rAtVcbems8hUkVpiRR5EhQjn",
  "key8": "3VZkgSv6myCfrhWQe1PwfA5Frvgek6JgSwLNA47ebyqjZP3Tmi8QgbiHD3Unz26DHbN5cMHZMvMD9N2C1UYVFpsq",
  "key9": "5UtFK6C98eNdPb7GPZwtFAANLgUgx4JowdrYiK5Uf6asvY7Sgc99YkQWiHub1jYkbTdVnuoDAL1i9EXK5Fm2DYje",
  "key10": "ap2d7SvPKN3ep37VUFtjTF41EPiamW5z64PMS916RM4SJGPcn31yu6YdeLiSX7ZGqwyCgnBgJKumZoncMaceY8f",
  "key11": "66748CkFXsSCLkS2KYQMQRrb4gzd91ewvKoJj7B8mJujbYj4EUn6RGvJn3it5CtNgnZ8VUdrd9ConfiobteBjnkN",
  "key12": "4MQ6waFRnh8W3ZEh19x71XpfNzEdX5hRgyYPz1AeG78MfUkekAFwiiaJNinkUfAPjUVMmHQhFp4JvWcBJDwkUAbP",
  "key13": "3bA8XtH16CG76ur9kxEtg1YkPMrH7uwrWUGnBsYV7BYPXXPXr6KB4gozWkkLL9eGKV5r6xBE5cVL7ZtZNwMBSrWP",
  "key14": "3jraCGNgcB7evi2G82nBVqngNka8aFr8sRwHS5H1aHgTa3fvtoky1DdyGyuRFzZ1ruofLcjaQ22T2x3Y7YsqVmPt",
  "key15": "2oh6BChEWScogebifNZVhhgSaeoUxN9PH8gBXxtFm6FBHztT9ayE91o9MzmEduqwNp3G1c9GJSi8F3GVSCJqnSy2",
  "key16": "Th7wuWUHNLRTAw412pdqW93mvYvUgja8Qy84opKXcZz9XpbK3KQADp9Dnz4cPCvANjqow3YQt4WUEfHnkUc3CPh",
  "key17": "Bs1PURNjtVohUqMeug6mbMAcDovkyAuo7iCi1apda9HjiLVSaUZfA9nbtgMqeFpX8CV2TXvnE2VrfJDFopZ8LWX",
  "key18": "4Nuw6R6VaGQBjn8m1FGCeRo92W17AgKr42RSykmCE4D49s5ehi61z6F3bzKT9UvkAsdZWb7e7SR6xJq2f5Ggux2u",
  "key19": "4xEEzLr39AGqDzKwyCmKCGgkUQWUDeQ58eQUK48Lp8bHL355psnesRctH7YV7qf4Yy6wPkpgg1AVte33ioxSpHTg",
  "key20": "5ujoP5CSRpgfjiM7VADsRjMFoDhzfaexm7A8muCTJLctnkuEqF4fHRZJGvQbdt5TzxmoakqvBNiXtmzLdAm5dHLv",
  "key21": "rAnBRBTAnbEoEQjRF5vXZeVf6WJxQ2CsrCSShLPy62e3UxUtTwdJKs8JcwaJpqHzEDZw9Z56Qay69XKqzXxqx1P",
  "key22": "2PExmrsPMduwJspZnTFF72Q72KpxjPjqsbtLSBNQbSvNHpPze5cWbznTnxyrrNjtjGFSDAHMKaGRctJbVWgFvsZU",
  "key23": "4XR8tnYExpBrzBqL9eXAaEtjgjDvbdj4LNet7dStem8xdUyMX3SNwJyfsLh4SZfuftkB97XLFA7D8rnngeWKw6Xz",
  "key24": "2jmbcnhtXji2MxEpbFE2nNntQNRzYxKixNnCw5bsBE17aeM9BMpz58HuYyePSsaN3y5LP5KWc2Fq52D8DVQN9m3N",
  "key25": "5WjY6T1apci8ATkpwWD9ReproDrKi5kBTnH98ogBGo6ZB54W55LQffkiBnzBFhAnBcuYXjariq29Qs8ExxZdz71K",
  "key26": "3qrEkn7g8UMLBD2yJSuxVmAYRoL3ibwYetx5qGPYPDwPHC1wgxiQBNXCobsH9CM1zUXEr2otc32e1sgF7bR8KJYX"
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
