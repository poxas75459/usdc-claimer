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
    "3Kj3NGHXKbuXXZsZNcqkCx68xY9QJ7kmDcWRtCBJA5KjRcTL5Nxy4F6SgPr8LzT6SRcBvKJSNqW3moKYpC9WGjjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62qzuvsAzrfpiYfqZau8WQtUdmV1FcT4w5Wvp178Fqfrx4XjCRMoCZU5HktgYVWLDDHMWVUEuMjWbkBtpPRqPvxj",
  "key1": "64ga6yKGdHSHXV3nEvprZDLUqzpk24cqzuKQgUw4YEdmNHPp7w6KmGHkL6WyX2RpbnGZB34bqQhmotcD7xrHdYmY",
  "key2": "5BScX5NwTpwZ9PTnP8KFuBQ2dFEWtsrzRJwdKxXUmmCpW9oQRDoVt9xY8SGbT72Fbw9wsK5nmHsJ6TFY6vHQUZPa",
  "key3": "31xNaGSP28uSeKPYUAq8VTkQzgyp19iBebqRajgZC2mns4FADQDFQ5RjcFUPRCQqzq828sLtnqEHavS4DnajpDg7",
  "key4": "2SoR2Si4v6xihDKasd3zaAUbgmBj82B1ebaTytThZtL2pKbW2rdazZNTpbTSgusYJhkYEuUPayvE6CvqRw7Vcvds",
  "key5": "548vcoNBEqv2WbrRjNFVMfXNnyEpxE5jeSrT6e7BsXYQawJsouopUtBLkehiLCoZZZyMWHgHKaAD2T4uXg4gtBht",
  "key6": "2R4jwAVEqxH52srEBXo35qCoHiRGNSsgfbczyeHKsevNuuJC7PQ8JvAPYP2gWe8FpL6PUc3oextEykJ7s9aztZvh",
  "key7": "3iPJUwdgfVtaz2VDuEMY6a7RHcFzCs8ZD8a4st4XXcqs9feiERcprYwpRg4Jxn8W5FKiimpYWCpmkuRc9DWjYx22",
  "key8": "5ELqmbdLAGpK9sAP8nnLAGWuQqkH2RW3xntnfZyLFtEHza19WV3YY9oV6p4kmJprTswDdNeBic4yJs5oFgvZZhgG",
  "key9": "4FNive9jbt1XxeeZrSEo2jkb8rafHKa3XYfmKeMkoUgXtxtGuaCe6c586kvio7bw6XoxX3beWGnJQfnwdswiRTMf",
  "key10": "5CrbrjiBshACyLfUiQvroiCWy3QRFVQSsRBS8emPndRgKeWdZTGWtwShdwSLSoi1AnAPaRYDPeMq2q1dQumj4S2c",
  "key11": "2Kf7p4fzuAANujzN9PHxDZjYPzT5P53nysGvRiqsTANdgPdv7XZ3G2DZwwrbGWsmnKiEEP7WvWJ36pEdmcHpc2Pf",
  "key12": "592YG3kQXATTjgNxVoVvJEqnRgY1dHsWo2KPsrY7jrw8x3MXydMBQPujcYVs2FwAgoePBdHJsNutXcuUnTaV7F6U",
  "key13": "5K6axq4kbUjDV1Ghn5Tj9ezv6w2PqahFuhrTReAqDiYFTxVFWVxqGSMotRcPYBP8qUrLGSwQnhupw75Am4oXqFwn",
  "key14": "64KoceSQPRJ4cUdLNYVdZeAgX26ZcvnTNR8sxDfsqrkzXKdweSdovXGiVztkKwFVakBkx4A9CuvP5EwGfPqZnerA",
  "key15": "5wb9hc6Em3E3DpwTat7T5mHefuJ67CgAkFYAKfUnXdnRakEv9JwFLaVdxDbuL5FpLLw3j14TeFwpPUhd9tjqPwR5",
  "key16": "5U5F5bDpVCM3NQzNnH3Fuu9UBMaxQ9PKiceMNf5W5jKKTuz4goXmeJgqwcaPqvo8R4faeMRgtzP3vmP3jiPpHmEA",
  "key17": "4pRGRjynX9PpSrr9MXY1QovSHVQFf5YYBZJNUfbrtfEagz5sJTu9Mrq54ebo6zJtDkhUUJYDuu1gs7YsiDXsuUMX",
  "key18": "3UrJUGwLV9HBoXWUhsvxg6kvSsao6CfCZqYy66dgTrGkWFhJXZuMZF1zyqqJ3w6S5t3o7BLmR9Dv2FMSzmHnWvDt",
  "key19": "4UUHskNJQ687QoviXd6rCh7tjjTnnjViWMpYWgXsZKVZNUsrmNutLHQw4YTNK8zMcjGHzNJLE9SxVWG9MsKAX6iA",
  "key20": "5nuL8kC7nVDM9iev1KckjaNofWJC1uMVWbRr47X8gfcaCBrmiqjVEwVseyuDB2SDNytUhD1jhy4Znx9pwhjsXdx2",
  "key21": "4H6M74CPXhWU57CWvMmrhdWkuo5Rn1neH4ib7pCikw4EQdoPHePkcrGLP73FDiBP5GEbokYfkyHVSrVCbHkfL6Ys",
  "key22": "3Ss9PYmnwvTwjuvRHvQgnYGfJPqPt6vMEpVJ3HJNmbTXs8DcjjM3X6h8HcN9Pvqf3qP6R4AgoyMSy95Sza4v9XMj",
  "key23": "4VgH3bKA4ivwWYATKHVwuR9gKshRkmifomJ6nmhyGxqYJ2aZRMQoGozFnQkxrN9cyFcYh3ugvEHRaYYvnA5kQKBA",
  "key24": "3pkDQnsNNh594Ry939BbGHP1JEff9nG5yvR5jpeg2NAVXNhLGpouxtSiXWxoPUQW9nrALQTTEEtMfHAsisWgQrmT",
  "key25": "3M1NeFYh3Yv7nCJkBaWVk5PNBhkzdb8Fg7FJpB3bBP3FWURp9kMtuSZrraoCPSBafDrRCrdZcGqRLQ8CkwcKfhdw",
  "key26": "36NfHiPa4dTNfB5qYehrf5EGbVtmrZpEHEpLaeCWME9hRLMKYTvV8xNbfGGVwwECBDVPXpbAPzTJB7Wu4sK6MPxk",
  "key27": "2ocuoEpn3CNLUB5dW4kjLf8Rw72MbdixYX4Lr8Hx9HFQEnAgkRqiGk7Z5WztyDyey2Wiyqu3ZdXv2RivdMJuj4xd",
  "key28": "5DCv5Lj5sqEFWWVMPf4UEu6AQSmnztwq27VuweK8soA7S2tmdneosaNEjcf9Mwu8WihrnAuk8gAFFVbc8dfTkT4X",
  "key29": "2ZpXSXwT7tNk2qz4Lf7PjbWTSJXu69SrdB9VTU7LPbBfJckMiBqmYgKTcjJgkYD6as3bZ9nfqrUpV2BUm9aJ6HT3",
  "key30": "4mF6uCRjcD5qgP2g1PmyzKBUjwzFnvERZEbk4f5GpVVP8xP1Z2wqaXeGe3iZVZE643u7nF31dEAJbAX5K1UpAN3g",
  "key31": "5CugNVa67QCjhJkFQYkfLuEeLoUH4HuVkreECfT6x59dj6xwPo8VedofZFGZk9TT7caNoadMNnAprKE5DkaihCf9"
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
