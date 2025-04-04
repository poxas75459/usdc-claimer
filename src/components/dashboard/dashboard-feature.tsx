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
    "3h7yk69TN3CW1sKYnUTSFGN98svFXATD3x8gU4LtNLu2EumdB7kvx9nc8Zsj1YzbCSgyo1owcj5hutmKhrujojgV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LCCndAkZGLALZWHRJQMzuUkcJLrno7ntHD2MHPnApSPy3sgzqhV9hgYSFMVUP3T4tbzHdVzUnM53E2GdereVEnE",
  "key1": "4Yi8pdMXvrEdPVp6mYMVZJnYHD7KdWiD5Lqh32QSWfiejUsW25BrCEgWkd6bFqRTDjQskcdQuEGLdyvBLNLV8Xyi",
  "key2": "4bdFwtj5SXiAHde3QEL4wEC3snLK1XZR3j1oaYF4BjbuWaLzsycT9gfQKpHFjpdU22BnTfoteemJac7rVFR375TD",
  "key3": "2SrNhSJ2rUjvwgeZNiPawPADvLqF9VyiggSWWMFr5pWLNWtN1n8mUVwdRhTmSuDARyWrryyxi3jcDFmYcwsHXLSG",
  "key4": "39vkwsF3LKWjd5D3yKQVEeev5FurxCsfrKR7eRxqsn46PPWN1nZhZoUd6dHLx54QmtzPgRbqSsCscwC8oHc2bjQA",
  "key5": "4YuB9dWptJR72CD3ERtbZv3P4Z3qqfmKwecvBdBTKMBD2QVHaZH2ag4vg45dZKgYobcQDpxiLKeNS8AV9iE3kCwW",
  "key6": "2Zyjqdaw7h7NCZ7QC1LZXBi4CTT7D6aveYSpQnguu4HV1Q3tnHP5yd5t3YH7FKdpjStRdbwdkC9xtLAQuqyyAA1B",
  "key7": "4pSScKSoUEkDNGshWc6Qsno41s1ZtefXKJPtvRKG2cWV7ta1n6SnyTfAAaCVJM9oLiNywhCCPNjm8zDjJ9HHCcu9",
  "key8": "4D1v3dzqwVVbR4iSmf4PG93kbLq2o2MVVbpYpMXwTUrsRg1bcy6U1WeJ3t4XLPPWHDfbVJNeVAzjxtrYX7XgLUsU",
  "key9": "3VmnGBSehoJdxVxvyLFWVCDchghkX9BDVoHiLZjun23wVDDSckS3ouN2ErrmKi4dWnBmvgR6mfBN6kKzLEepgMa2",
  "key10": "2zqrQiZiVAHwZNUmNcfAHDRjvbnoinuUZdNabfNsTaHobXtYnYYtbsSn4BQTUQaDLEU3cEne2ucLyfxL7rwMdSAe",
  "key11": "5uHnpGTGN5EFAXubhLuGX9imSB3DambHLf19BsL9U7uvzN4tJajZE3du5yq2g44PddXvmtp8cGzyJzjNr1Y8ctTb",
  "key12": "EAKrfUbHMZih3sGyA8zXcNxvxn2JqoD1eEdmtETwLfWn94sYGVZCgvM8QzB2yvY647h26cmnJYjETMqH9i31ikg",
  "key13": "6itg5Fv4fhT3qbxePFDtQT4cW3eXSTWBhtGCEtTtzGskEBi4UF3RkKVPfhv9Uu4oJg76MhcwwdVd85Qi6hdyK3Q",
  "key14": "455ai7E8ZHKRDVC9re1ft8dv5R2PmYA61SCMh2zPhe4y4qXtYX6sx399Wx7wfSwnKqD76NzuNYNcA8adC551QVL",
  "key15": "4Y5ezvKsRjT4huCt1XFoUniFrNFPcSZsmxPCa2RgNoYiwfTPUCi4PsTVPGjs6GvxFhrSWg7p2rL2kfFXULJojApY",
  "key16": "52dasaefckPXjkvdgY1FnkUcZ942jc8e4F8tjR6jWEEacHPsQXWFMwjMgq16dZmcKZvF3wbhya9JXzQoSmZJHEMQ",
  "key17": "sdsa5QnqH6Tygerh6rNed8sszKrfpgCYk6pjSCpgnYSuZSnuGCnQL6aa7rb892mrZnGQiLFuoZzMvxi2nVtLfhV",
  "key18": "2VJFF8cTTAo5cXCgArfxHDvifCCFrXAXybx16a8fet1oorwmejaD6FG54ctgi6TgydS8FLNwMwtXxJKHTFtBnXWu",
  "key19": "4C46bY4GpfSdJkRBYxKPnYqBaj8b8kDr5cA4NMPVEBJWmD49qC7ixegMb2CQxxJVivLZTxjgEiswY6ffsJcZFMuD",
  "key20": "4ZSKKXFEaKEnNtwy1i5u5wuYsgqKxc1n5foBBzJaPKvk644iX89QPZ6AvctvQ2NA28vY8D2QqtpjbBaxKtt6UDKh",
  "key21": "2j1gHXf83cp1Hgx7uuZ3QVZM34SKH78MqFFkMCugK2Vxng2vKy6UZ8WANJssDYaCa6XBfnKu8DJZhZ1BqRyDqLQM",
  "key22": "oxksP587rNJfcRkUj21hiDriB6juMEpM1MLA8hnbX9XvmZMTJPFwUsedNMV3oLvN3cWSuevFNYv7nghfvSMLJcH",
  "key23": "4B5Z7TtDyZF5LMvRrofPFiTU54ttmWpFcFNpYtS4wLPemvQJU2reY9D7bTEYr2dByazjwuwN31mfYXK3PSXz76g1",
  "key24": "tba4NZGe6VVAiZmtoKFiaBPxAMkwkvBYoL8Cx4nPXHkUyNDSdhh7yhtCUBTMLa3iePN1TCM7ag5Y39NgyDQK6Zv",
  "key25": "5TERXUKeLAbkwXiSRbaL4YTNt6RcQrp4cBScjJW5GTMUnZmNnfsokLPA7kq3PmLm3fEQRwbE8Ptcn2zd7ci2Z1NQ",
  "key26": "29e4sXkTX8BQ3iKmeY5QUqPLkT9MpMVHdCSYoTKA7VenAtf5cv8zG5aPnPgW7i2sXhnUDFZYNC8jQ7Tg7YyZ16xY",
  "key27": "4E1DY4KqfRxsEQLsmqN3LsPegxHvu6Y5RfTsTa6GoU77kS3GHG5GBqmAQtbRkN6nMZbn7dzucJ3zA8qaqBqbWCFZ"
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
