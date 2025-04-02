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
    "4pG9JjrgHYcmjr3cu3ojDYyzt8khr1954Ri45u6j3tpdJfdEvUCSC3jwHHKrKZpkr6cMeTsxqzpoZm2hsmhesenF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5njCb92LF91gRZ8GCcTePUinnsjnPhKXsx8uFcghGbLvRvzfwdiLu3gEydXgBsCF6dUEHzzBVeXtU87E8QJMzTy8",
  "key1": "4J8QeYdGMjMkZrkMv9N9NE4fF69aZhG5pb4PSr27Tj4vUsqxzm6ACAm5np7CSWu5Y5heezFymxEh1AxHcrCDjsoP",
  "key2": "44aMXPFmZqs13btYoiiysWmW57rCFHmgDcfkM9o7eQ4nCDHPGC8EyJWkwMoNV6QDfPvTsYhCkDqm51sb76SQvGhP",
  "key3": "3PpzKPLB9e2DRp56z2CBPST31FV1a4pc6aoe7Ucv9EVnfDBznrCJAxHjHZ8PUd2GukCqzrjqJEFdWbSkj6A7khn6",
  "key4": "5m9cKninge9DTQCrgQAUVjAP4ChhGxCUb9GTDWTqhMbrHFrVXToFqzXY24YJyMWG6KbSGPEnea54WZ5Q246p8jXV",
  "key5": "4xr9qrCZ3X35dSGDGkk6sVGUiLxXHJcDRKQ9jW4cWMZHB2VQQVhLN9ZG1MgRvxoZ3SLatU6ckxmhnerJWxToEXk6",
  "key6": "3qimkh2uYfdrbKHqe7sYDBy4AFFg5bon9HGBs5WNuGmtwbRmRmDFB68W9hD9Spoa3m2D7deohow36fVqMYWG796m",
  "key7": "39ri8KsLvsGCgkxBCr9h9Si9w3ER7e7nntCBtiS7tGfmCaQ76UC4RerrgVahJcmKyGVwWsTTMrGVu88gY3v6RfCs",
  "key8": "Rv7jcyCkmxGngzGYkfo5tyuheu325XtFnqdMio9tix7t91fdEDwMT7S9qHSzagZnc3icUDUeXuCAMPa6qHpn9zi",
  "key9": "2j4Jz5wjbuC9ovg7sNYwjwwLDeteW7sSjZqhsxWbRSkDSk35D8JTimEqSQ4FUV5Fw9y7JPEML6mcE8MbJHpfv2RN",
  "key10": "5qhfZHhZmvNRuzMdBXz6VmYyXdeVa5wznAQgyghySxSMJ2nYajU8bCg94rcqKgCikbBjWTxSRPQZoXDzHb486VAs",
  "key11": "495ZFqTjLJPzhZeJSbcuD8AuigGk2566HyNu8zCA7HjM2qTbdMWPJ4rBwLWfXeFFaruoF9KsUwCGFrssyt6snudH",
  "key12": "4fLqPUtfAgf1VBdj6vSjnbZogDGaDw1Z7ppBFJbU6WtRzjLzYdNY4QBxdDkxz9UYQEyd8Siwr65WCUZbcArsZbkf",
  "key13": "5bBAigpt5Pe1UvRAm771af2QaEDa4WbDU4doFymuPb98edoobBHuKCDoFtWLja9aqo6gb5BBtEWixRT77mUmxqPy",
  "key14": "2hPedUPp125E4Aqvrx8AiH5ibeBDgPhf3LMKVobrdJxM7K3zQwZPsVrQnoVy6MczT2JWcaNJvPrts91d5LdwfxWe",
  "key15": "5YmniswZ9HnzGMFnjvKAqgJq8ossZkBH6F6mkyM3Wkd4ArE3ToGrE1GfXCquKXbZWh1je71KZGdQBLm8iYvPqhrQ",
  "key16": "4s5ako7tWsxEZVXV17Gt99eUaCN95nHk1JJJHQQ9R3KMZgi4H2iLo7DPhYyfFAB1psZvGVQshEFLLRpkniHjkB26",
  "key17": "7WsCXhhn28F5Wr3WrExbqfbHnFH6rWLufpqxd6LDPnH6W34Ej4rcqFvt3bfpnrg7RXKFMDMzq11WHGVbdKhEx2x",
  "key18": "2amdqCJ6pi7RQDsdZ4dhkV5i6cwxJnM7xAbAV3zaPyVArdNWacCWDHwC645soSjXmfUM26WfdmU1ALkzJbuzxehx",
  "key19": "4wgKqohexPJMD2uZ3RDWEssveiS6PznZGQW8TETJdxesWHjfiznaXce6CuhzV4GMeaHy1X3K6T1AVDRXsvjRJp5D",
  "key20": "3qYewFzSguXvFdw7a4FC2GHbSDodV9qKJZJskhJj2nwwGTrC6TSpWbWk9wZ6pp4GL3i8SyRp3GszGKtztjM18fxs",
  "key21": "2GMfDKJou92rMr6hHYaJ21B6c8HNMhnfsWHH9DzJb1dxpJ77n7UTd4tjRpD5ALvDMbUT4KDDpXECGwuAjjNTcPuf",
  "key22": "3mP5GBxf1tD1Xi28q4RJ11NwjGJq9zP2b6MV12RALzudhUpUicmHjDjHRxhTdfA1raMX3eoyRVhbFu1Mouw9HE4W",
  "key23": "2pE8Qg9a1mGbAfJ2TnmP3B12iMKYBerceQmE9RjDt838UHLE4k23YLseqSzQwE8xM9oWbWpiKaVBKgA66afwREZ8",
  "key24": "3kBuSMA6cP8gf3VYr95RF3hjGfXwtttPeC5siHa3qKRmmFdcDMZfEesmc5V7mpZMXPTkc9GW57ZQkod2nG7EQ68N",
  "key25": "4y61BJhm2w13qDQdxSqgVgNqq5Y4CazJZnx3YNQygyQGknojW5xifPNaXZPHYBhm5HN4GEBadvX3WrCnPc3aZKm5",
  "key26": "5nGQLkgRdWAvN7Cmk9dJSrp9ZoLVsNkNSmm8EXfUSy7HiYUG2v4Nfj9Ab3XQdHJz8mSD8DRJ2L35ifa3RZqMPf26",
  "key27": "3fCzNtDVLrtLXuREHys3HRgows6dgCGVCG23WWbeMwsB1sszdvbheZpVppU1J8sUNMN3My9HAiDgtcHqmL1LfSTH",
  "key28": "5Lu7wAz6yWdAPR51b1L9WhaGVfzRuyrqjevJMHBtyeGfFrm8qk4z266f9wcsf46QADKmFkixeNJGUEyXn8ruh4tF",
  "key29": "61TzLvR1bKLaLSH4seLcZAkjstydS8ukiiS6V794CBPN5CewSPmwBnm8pzLami6HnaGnJBDqnBaX3bQBUmQhoh5P",
  "key30": "63zefXkmkuG7cpx2PTosbbyeX3eXbZbqHA41sJhscbnjqUakThnDUREsz8PoLEVrC6Yk9RS3LocaBnSVsuJVRxHq",
  "key31": "44EFm2Fy8PmTBWtSZrwtVs5z1sSRWhUEeUxA3S1nVeotoyngHCY2ZDtzdd9hpvfjCXev7QCRjDD4wAzjapgYqhP2",
  "key32": "4XG21apaArdLN2uUb95aQ8SjMqVEMPENoTKHJFGp5ou4aarb3qSLgEuTQ2eYXmd4LCCmwnKWBTFTC9Mbvc3jwcKX",
  "key33": "3poCYhbN5bQBku4TN2oHwaX6yqN6cuwK89uLaLEyXxnetsUdx4LABgGeqvkg5ccpQB9WnKRXyb3t6EFoqsZ5XFkh",
  "key34": "kFEyh9eNXhoM2yVPXZG4djLGqt5oud8sKYSZXoRdrrXZffgFj6ivqvTj95wwz9ikdea1qFBSLdbYmdziHeGCbZm",
  "key35": "5FpHkonW85BGWoGXBHspwV72mdG5p7CNRZsSmU9WyG4aF3TmrdSL8Spi7YC1o5okpsYsJxPBjWnCXxjbD5Gk4su8",
  "key36": "33qqARH3TMww9XeyTxSoHydqdE8DfFHcRTYTZryDQm9Peizxo199pDg4fzTyrQB4qT6Bngrq2zNHVSWF7bHkgGWP",
  "key37": "2cj8Uoqvb6PXritzekvZZ1yoKnd9T3ds7jbHj2rR2aNZsKoJFASu7dv6kaSAyXjn9TU4SGKMyf7eFATYQTotyvXR",
  "key38": "39Rmcr86t7Ue1LWu1byfW81oQYwjyDBWxUbQzwtnXbkxt8D4EFgSCcXhgbCyYxk7UP1qcJqYQ9GQL6qKWDESUREH",
  "key39": "125uRdKXYBVwqeLgLirxUL4EzDuM1QXrvZ2gam1wdqtf5uZy7W5B7bATWV67b7dpmNDnyC4CuGKtsgxuzwKkgJmx",
  "key40": "tv4FLYbTod4Jhnj9gacFwKnV75tPDTSJa3KoVZhzFoRtwQBwtKEUh2AuTzCUiwo7jU6zoYgeawGAzns7P7iuGZ3",
  "key41": "Zk6Z32zc5nrtmYxNT8ZgodbcjXkFWuRPGVAouLH6moP3pk8yYbTQWeJyDXghfN8ypoV5EC4YdRxYax4fmUa3pEq",
  "key42": "5hsRkaH2VXQwiEGt6RfHm4fNbTdAG51ASxax4pXsbucPiopNvqyb4vbtSuHR6KGVEzFzNU3fokziJjzGLYyWEVp8",
  "key43": "2mJ4DPgHDc8wwd3eCUvvsS9GwgLHp3maKDDUA3mUagqJBDSh99uGDUJ3xPSZykQm7oT7mSUffZtiQnNmPCAghDCq",
  "key44": "4NoKymLkDQV2Jnuf3M5WGVFft58VmbyvjKrtY8RZZ8DQsnzaxcEXzf83qNuo6LBHg13fGqfzX4rFh21VTx9epAxC",
  "key45": "5NSCSVsKCLboqfgdfq1GWYBtHsVjhCtfc1wUbLQnjGEh8MkiFL3nyuh4BiYs6NS5nKMSgEBJPsjraGcBCiPr4jUH",
  "key46": "5XJt3QZ3tgwfga8zDmPhyrZWznqwh15CsZnsTGFWZTmzxcrm2LfzdeHvh2MtQ7EUpjXytrH1pzsTEX5qQQ2DuyUA"
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
