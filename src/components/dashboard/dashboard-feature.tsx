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
    "3GdDGzcJHJCmtpxbnEs3Fvzcx2LmKbgPEyAvdC762cafC9UG4e4DzZkEi2cUhDnoaWcHZYWZnogikxHZFZySeeG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uDq9AUDjbMgbSkZP4NT1DU8oVNpcigvYYRXuXEZnyVRhdp463zMgaSjWBmGcUc3v5NXdsHffKDz5tkYVnzRTdo4",
  "key1": "37C8GrLYmP7wNsRjMm8W8WrxnyxyaVPKxcuRd3M2dgdv1vrzEoKwXVGzvqMMhEBnDMddDZRL2xzduoeeBwBmPneP",
  "key2": "gwCHtLwoNzVrnLMaYPJScrDhNKAq9jiqvqzwv7WUnLwsgWneN7Kk8VHzQLmEoAjooFjVMeTZLYXrxdRLeBdRzna",
  "key3": "4PD6A2MDUYe6FDAh4V9Cs8kehxgAsEWGjWigdyzQjLjkPZX1VinBUjw6yte5zEHKdAyoAaaqFZYwRP38XDq8cvwh",
  "key4": "5ZTQ5RajWu2mCRu8taFTqzASgeLXzh692XjjpGjeTYXiZzB5mzkDo7wx1jy3EhAG4AkgT2auT9nWoQrVdEKD4TyX",
  "key5": "vH3CqR8DvJwYAjPS2wTa2FDcWjMgs74ueQwKbt9M8rdEpVywTicyNGP7g164UkBSMaZmZvatJ1yx1NsugCPhsjE",
  "key6": "3AMsde2T7CtbecwNneD5um2T8XpCHr8AptuwC4b5L6rqKMBwJiFTCeYK8bFxPyFjHRguAXg63nBku85CjrM1pSDf",
  "key7": "2xGH1fv1zFjrcE8pnEuuAuBAzsGzTGogyRrVSdBXdDsRdi8TvruKw8Zjttdu39uZSSxVSf15FncSGe8YFnHSwrNd",
  "key8": "tF7Q3NHNoZrMowJrGzjFQ6D8UsQchsSuLjhwoaMKctPeJixfrNcejU2rj8SfhTuLaSNn9UZ5NuhXWjNqsyKv6ao",
  "key9": "4veYNRsSZL1MGQ3jKRvkaUynFQmGCs5u2oP1pM8nichUYAcd3rT4unrhmYMvQays1Qe5WcJhr197LCagE78ZgTiG",
  "key10": "4RLbLfb4qYr6fkLZZnBGcYKos5WqxjzSUSUuh8f3yhrWwiZyUVJf1uMb2cg8qbGqzUcM41oaR5BWH5GnUtyuirGe",
  "key11": "35XgzjUUnhD4QmU3pSbRzpsBPXMK2M3nLcj86yRcxcYp36HhiLsqe6vcf8EJTrT337HEZvQr4oM5NbyZsFCJYmrh",
  "key12": "2o1CEtbJN6BQjq8Ugt5aoJcb9KTubVAmHGPZZwAGfAZD2Phju2Q8suHb14nGXURbjrnZxGosEHwZQ4333jUUbXnm",
  "key13": "2gSW2BcY4tKatwvy7AF1gZ61vF99mTV5VveWYPoBcuWmkemnkiFUyX933TLpWRiPQxMFd9CNHF8jLutZ4otuiwoa",
  "key14": "5VtGobMeJm6bUdV8V85J7PHP7z6NL8qhfFkeNiwFDsR9CoScbTERY2ayUc5HLpdvEmfPw5F96q9a2QaYwQyuHCDf",
  "key15": "3QAQyPtu6gJxxQkbZVo3DabjemFMyDKyf6K59YeGJJmW2ik3hu1i3tcHzcbcR5VtSY7KpVU52rG2RnKP2EA6Qnst",
  "key16": "4UnsASEkfnkekxYwiXkycS2PfXBv2J8P95TBnGcXpR9Bf1fYjzKVcMwsGi2tBEUy8YFhAoGcKwn8M16dYm2z5TAS",
  "key17": "3dbWfo33q5H8v61hBxWb5exBy3GgwgWsureoSjCAXnnLxU1PC6k7TrPMX5JVgCMe3tEC1Wx31xzwNAjLgjHg6qCW",
  "key18": "376VFZGiZLytR6uLRV2udDBn6hpCZAFm5JrFF9KmcdSDTyJB9Rivxr6hFLRgc76jT7FRTfEhveGL6ALzER4mttoa",
  "key19": "4nUu5id9eCkVFBqwgkuwnGWMRAWPvMFkR96AkeAY1LnfxDonQXrD4WjxHJD7sk1L8xcyx8Fdeaq1wnArmC1A2ovZ",
  "key20": "j7wxSAV2JoS7nP6uNfmiinRiRVFHQbJPS5yiM3R1gx2JxbRpD8KA45RnqVuucPHSiXbZCtctHC4A1TphjKr9CJz",
  "key21": "4XHm2gQw9EctSHf539SYYKhA3Lied7eG5tLNCJ7LjGUSMConbENQ85GEgxHxPPzoBBpSmaqZZcQ8Z4T2zkoUfMa9",
  "key22": "2KvJoT5P1dt8FNLL5yt6qQgYQ8zrV5A1N4hTphUqd5Zy24ZbznSo1wFy8rfKSNJ5kL5atvssqVA4nyVcxVvwr2Vc",
  "key23": "3CAEpLCtCkdPCXA6qfdNR93Sq3F4RxRWLyovkhx7amjb9o8mM8nGpTKizmpv22FPwKbnbNnABpnKDfCTdokjVWHf",
  "key24": "4a24oN3Dx5GhMKKN92iVYJXSmtBNrAB1JF7bLaykKs2zTc23uXbjLWrQgk4pWaCRTayE4NrfEeKKHD6nubHaHhKk",
  "key25": "2hN6BZXEocaysrHr3oxt328h8jEcdccPfHdsZFJZ9eu8s2sTFzCJ5RJPqwrbR4xhzJSF93EVrMuVS8DSvZW8Ci62",
  "key26": "59L3MPEv5mJ2dpN5MMrJTGVkvQEPL3nL6Hqtwm72KSi4DswiRxqs4W3YTY32XPTVEGXRcmxgoABjTah1pQ8pbZLT",
  "key27": "215gysw7HWNHE3R1rLvp6QuwU6TpeVkH6jhnzMq19jpahGhfsCGrrfN4h4jjAAUioPQhYZqZtjKpjMvmG54toJLj",
  "key28": "5FKKvLcmB1Lb5qLwM1ctTWoy3Um7ga2h8YvgUprajim7J9zUmf7QY8ydi6mxXxLpvh7zex7doz9nyLoSKbqxzerJ",
  "key29": "3Qqe5aGWfKyphgapp582bm1qrUqDagdG2VLztv51BxSTPFjFxZK7jBABswLKomsgkivvwH9bnyCQ6kqx6cqoEpET",
  "key30": "jFLL4sKxxH4bg9Ut9kucBDbuWBBLbi2NtfS2Q1tScYvGkfwVW4XfKCz4VceedYvWWe1mMziELSUHVpCPHdgchSy",
  "key31": "4XvB62rqGxeEkNMkhUAHK45qxSjU4ArXxySuAvP5qZ9iS2bAGnsT78KvuKz6SQ4QJRyVoYxzBv81xF1qmKwCfBdk",
  "key32": "2mdrjHTp7WdN5nq2c2ZnXDxvZekczF7weGc3L4hKBxfxHeNatvrJRxbZVeJzCuwjsERZfnFLRRpNBnez2qhiQso7",
  "key33": "3R1Zc7xg76qvd2qsEBbuUvdQ55p2k16NyaGaYTSBuPpc2gofY4RaMTvN7eYX4TcMMrjSH6X3pfKqjuQqgNUAP4Hy",
  "key34": "24JmGXk58G6frXymVhx2PArDBBmWAgt97aXLTkfsNCDqXuLLwYz9ky4g4Y9DRQ5q8vPG57LpKupmVb1sqXNZ59CJ",
  "key35": "3y38neXSuuUrneTq1VAd5UuJTQJLGcqNNx7zCrUtqgKwCXePvWBHoBjrhqmQfm2aPYCDPEWwGcwkXCDxX7WTG9k8",
  "key36": "37bAhQURpYhHsWyPUJkWaX121bq8DpU3yirr2GGDRqAeJuh3GAVVBZVz1csnzfiDZUgiw42qnU1VNgx1z7hWGYQc",
  "key37": "2rR8Gyx2Zw92sdkTh67s3aC6oEWGkGgudhw3TqBrxNTAKgZ7U391vTyTRF2bSpsgSxZ2pPWRbgKHQcoMjDfFaCBP",
  "key38": "3HnN7g4CqNxpHrAsTFVvQGXnrW6CGW1ieZeogVGAXwQKERdegyf9KBJvmKiqUZSKyzJ8i8zGSuEN6NcfVCgLtJxy"
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
