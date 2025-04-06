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
    "5fXXDWRnFaTEhcPspKxJNmmRQFUatq9sc4Eqax7cSCVxeebrxcq77qvSE24Lr6A2aguqzz6YMAZFN3Q9uuBiynSA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cit5BTqRYfn1ivU4c1PX6uNdS6ShViyWSNSqTvNMtzAhHoPkmQ6W1PY5za6zxw5N9SxZoMwrt2pPv6y9JpLSnPs",
  "key1": "32XbYPKN4uPJKFiBMWJxTtvBLPCd4qDmtVNRgFuZMwvZoMd9jC9jtjxRHqEqbFmorHuZrCajB8uq9SKhfA2YQdds",
  "key2": "2p6cMyBNJFLSdENf5LNcQgTR57ymyKgqMHsHVH44q7GrPWVoqcPgy8Vgevjy8MCWPBTtHBKvQpiKdVKZWS4NFXPc",
  "key3": "4KH7M7xk6uja4ynkQ2Ae5p2etPWFUfLoHfFTzreU6xzYFXCAUxsH3Qh4BQAT5MTNVd2TDCpRhLms6kFYMQt3Cru9",
  "key4": "2N7j8JCEAiNLnVF3qWjmMZFuCuuCP45pxa2a9Ab1yW1r3r8qyq1PwF31Zrw43FozTPy4RHbpip7qvtSwgAQQVJki",
  "key5": "4bw59fui5vQYLT5Yj985j2GhUuxonozRmDP8TEz4dDwfmU7E4W9RJAYfehRBqnt45CkzT4SRnsoUPFc13cc8yutd",
  "key6": "15HuK2EamCUssTdVgBL1s7r9w4wFAD4ARpMFXWSoW72ZenD1VopiwxbF7HRHGBUPnABjtyuekErbq57Pkm8F3JN",
  "key7": "4FCocFwVDBvqbWWuYStkYorqrnB8En61sbHSi7L82pR2PDNCpYE3WtN53qcwZfxpeGCF3T9zzdeEMWHRxpETJvH2",
  "key8": "5A93EngauLcGfqG5btwn8zq7wyrT3eG7cnjTtzd9AqGntpTRDp9uZ8Ax7Qms5XprnWLrtHMUjUA7DdSQhGJ55UZC",
  "key9": "3jXf7e8dyx5qLYdMovDbPimkYAWorm7CiKHRFnWqwUHq1t3mguRzJdf29TPy59KptazCMjzjKxjUu6QHBsBsRXbM",
  "key10": "3GNAMkPfmKnwXzNEjQb5hbpK3CPchwws7B3t5PQ5AQkaMdikCSvt1j9LUUt2EpXFUkGVnNQosFHoNyLF6oHBgSEs",
  "key11": "61CQ6Y5U22kkrGzqMB465B6VpSWFkJ8hTMqNwFJmECLZHyWdBcoPwmWbKb9Sr4Eq1KGGE8UYnUEf2JRLBCTRo2Hf",
  "key12": "4psH6aF398hU5oiDur4s7XJJ4kjaeowBQF94arvHGVCotsXJJyb1Zxz2WWMKET3LvodVkoX9JVSvKsQKTXaKZiAK",
  "key13": "5iGZiC6RgZafvGa26WvQZEwj9Sm3jpbWbuMxf5jbgof8G6UkwpuGRnYa9jr9jtbgxmTKhUz1JrwR7szrvaRB9sgV",
  "key14": "4yUckPXjLWAGqvZ9cwHgcUnpKvyHnfsiNQDL9kPgvpvBQHMsaXHJ8LrcryTdP4RdFSVkQiHMgo7PBWTrNhKFFcLJ",
  "key15": "w6u7rd1yH9STbYyC54fKGDMBXBVBSn2H4YXREF7rGJSmMD6GZK1EFeCBK8njYcp2Dy1GeKhAqtXmtpngVWFrRjY",
  "key16": "4fyEucWwaU21AaYb4wPcJHBCtJG7SmDHdXhcymdcTMATpL3zvib97LXd8Hz89iynGT6QgTCm2wASx4jxvWQpbZBE",
  "key17": "4R7nNDthvmBLZofPkcFNGdM4qoxqNHMnGL1sbq5BbjWUao1LqYwdUJp3e584fRGbSwiGAmzTPKEtp3R3HR8Vc68Z",
  "key18": "3ieUoRyUEnZiEfeveHMSMXaADBcjE3YDdJSNZo9ET2zbQpEJsriL3MQCT58JcSMJpjtzUA4EBMUzdPuiyaYAyXsX",
  "key19": "3TagadaGWzee5SQ49MiAama6CfMGsXaQdAmxGX9aUz4iKbgwycE97QignqHN9WCZmKADTFehLvhVrnmFuHCojSMt",
  "key20": "Pki6S8MjpXw2Cyc6Jtv9Go3rvjPupVjZ7rZUdT3H8hqfXWB3TZ1pfvpphwbyoU8xD5MsrKAe76AXf1GJJi2ax1T",
  "key21": "2ScwvdnaN3bworFViuBeB81AtUDFitiv8c33na1vXwQHKUDdXALg3reyhcUFZUXTB5niUY9Dpsw77vv2Bpwnjw4f",
  "key22": "4NoghF5AvB2jaNZDZ3HQn78mq8gDerJtS3JrQsfFyaJzt9VoaYy4J2i1rD2d779jk3WJWtdevWSs2CNA1yZpjwax",
  "key23": "4wwjrrHzo4sg4TcF2iQYTBfvXhyMFBq72gs3uKgWZxQwS4vxMdAWdFboEaVfX72Y4dky2XXyszNp2dXeCHrhAWUx",
  "key24": "2QRF1mgS5hUY9cjfdS3rdHXCCBUhHu3SgB5BeL4bunfgs48driRvEuG1JcqeMxDAPsYZsnYK7F19P8FJLjmoRLKw",
  "key25": "3jb71KFzENB3bDQGims5tHtqS574xupHmAhpkdjo9ndszYWeHDdEy8R8gtEz1HYKXaaAK2NWNQtXiQjhRNqDADsH",
  "key26": "39nDUpgcUJTxGF2cEydmxx8oSCVJNRd4dPAAmVqSCAaUGtgJabtPyeif2WpvNyaxtNefFn1s9eU3yxFAgQ5EvUkx",
  "key27": "58rTymp3dvDVrj5niR8KBcJkrFTs8YZJjgVP7vxNaTkoxyxyzqFzkurZPZ3YMwf2WpZLCbhYXZVDHDJXLGphJqsV",
  "key28": "4tfJufCb2aNWbWkq2zB4NPR3UNoZE7ZHqtrxpArN5gxQd5CdVGfiZcp7rv7MxwTnJodMZYcdeN9LFTW17JYNhRDY",
  "key29": "3AmKuiUQN8jYfYBvaHwUpMKiET2W9jhQXwFkmTtJu7YZt4YpbuiznLgJCWpw7Dj9sR5d7jYw9JLez324UGnQ9wj4",
  "key30": "FzzTT9ovWeN7vgryE2Ps8Jn5BjgaXJUHjCwFofBQo8e56uuJdNA4KNUdxDdP6sRCGPD4fgYMUbt2YDLcCM26Xh8",
  "key31": "5oksA55oi9yTmvKmrYXsJK99PRXsTayvReJ67tN1zYwRXgsUCLgpz3Ee4w47Q652zjYZsw3skwqutMuAQysEivt3",
  "key32": "5TdLAsY2Pb4qidpszY3i19KArborM9zgXgF1xCTS3GCjv4Hw5QNG1dwsFn94FrQoZs6k6pdee4xL8e5d2fYZhWJn",
  "key33": "uptyBpU5aQo3yF5m1SEp9XLmFyUdrS7FJsJhqDdzwSGFBuAsggtBujCDihtAr4HimHhkpiEgLW7cQZNWZP8AYUJ",
  "key34": "3ojtwuv2wHG76VTpKUFbgLTo4Zev17FhXJunvzu9Htgu6j8o2QSY55fBv6iR2ND35QSGoT6BEc9YhzWCcGin2sk6",
  "key35": "4gmAyi49eY77tgs5RqHDrCEgixmxPdN7qXEEfDQDxmi4fhBS9nVhw7B1dUgeAtA7NriQnx1cntPZdTQ9DDD8Wtew",
  "key36": "2bEfQhcSNiavPFEgy5JtaPu7XGj17kRF1LFYqzjeVcoeh8aYzLtGeWHAHbzQm81Tvb4oHQCAZyH18M3Co4HSQnjL",
  "key37": "43Lk1JBGKrYQuLhfhSzCc26WyAUKKpkZMTLXhQYqz5AeJscS1wdAQ1w2yKvBxf39zfJzziLmDFSGMLWd1HxruLoX",
  "key38": "5j8ohorRwPVUyzJ7AYpu4ikFB2R4HS8EH6JwN3dwjuL2UiUAsfTAeCzaTkdYBFD6gUfoDDaRDCRaJjSa9wHcToDt",
  "key39": "6sLCWHqMTVZKVrYhLmo2ato94kGz8VdeBEhfKwTCLYjnK6YhNL4hU2QYgrZ9L7t4tuNrWrA7SzRbUWQ6MjWDBoK"
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
