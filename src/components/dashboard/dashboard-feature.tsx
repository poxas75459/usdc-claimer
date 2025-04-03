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
    "YQW75HUXP2fapSdhQoS3BQBHsefYqpEBQB6i9B5U1D4qX4YnPnepJe7zSh2tw2JaCbpdUEfUd2dim4GTqKbC8LB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51SafRwnaMvvzt4EXQc4wxVpPtdhm7ijSJCqhxxaje23jceR2jxeeURGz6QH16xZB5EKhBzgSXGXtNiMvhxuNdU6",
  "key1": "5cDC8nsMVrgKmPo36ffUZgshtESFQWojiRkv1eMgT2dGFJsP7zKezDcD9awuwChqsJq5MmY8ew5oxfaRQC9XLpDr",
  "key2": "2Hp7sBQ7NxdyfuMjd52HzJfq31vedCUdgCpJV45bydW12Zx6Q5mzZhtVHWUq99AJBPo7zkrGkMJ2Dxc5mZgDx6Lw",
  "key3": "4ZueGK17KsmvfABRjCC5X61pamMBccDgh5kV4CMc3JnR1VABi7DiDDeULTMu5FpcN6yUyCcKeU7Dsp5KT1mmvbzB",
  "key4": "46BHWsUNpfmnN8A7SEUQLaC8D3SEjxdaqPE3bnSeE5ajZ5Ltu5xqnNHMN8zRa8EHkXAnBDC5U2LpM97KZrqpotfa",
  "key5": "Xsi7MDopkF1dM7gwVXkRtMf4fVqSSqz2Kh4tpPdeBwsoyK6V1xL7Nap7t39xm8qLBCDjUdVA8e3uBASUB1HRTFn",
  "key6": "4mTzfobmku4naWwgfR54TsiXTNHhJKK3NZ6AsAEVv6FtCg9vxJeGBg25mL2roKWMAwddcjCzuRw9nuPG1P2AbQs",
  "key7": "4XXhi1ST9TcxGLr9GEdQ5q5Q8hfSVDryQhVzFJVdoNvT1XUKeJw8r8ryjneAevNhMGEw75EYv31jtcT7nQuGB82X",
  "key8": "2JM4n6NUMkhr3SHnxJbsdauKJvCLWYhm5t8Bh6Lorg9Z1t21nuUKkBtQB8EUQJ5jhsTNxAX44cCiQCeTRnUFi9HW",
  "key9": "5BiPhBmahB1Rpd9Si4LdgVDP7ABPtBD1846Tnv2HwKyHWa7RASXdW6MV2h3EoWEyB6RSZkJHcegV3aDQNLu7txAh",
  "key10": "4dfCbzeEXgdEVR3SWijyKEvjoDEwUTmQ9rcWXXZE1TwvGJ69Fhn3pBW45NR1Ad7DwMsPTnarC2CzPUikFTREFNdR",
  "key11": "2gj2DZtkuDXH83jCRoZq6JKyQmXZwG45RNhCFKNMKETBMKE4zpAdwRmi8TSu5TJqgJhqjLdAzEkkCetWbyGNnnYv",
  "key12": "5ZkMS1M2h9qhmeA8sXnir49WSCqor7iKb9oXQAqHSfsNffFthZcTTijaqcV8S8GJcPGBB4DhTXRqM4ayimYZuK8N",
  "key13": "5EKU5aCSojjgNjJmfnY9DfoXuPxyamYiPnvUGoJrsEbXd4sV3rxQLW7C2qa2g62Bqv4dP1atEphijpqWzXXYBt5e",
  "key14": "CzeHAvc1ry412DmrDaA163Z5dq95PCR1RaK7iJj3P1jViq9He1CjfvocBTRQZwhYKv4PFqN2N1xQfDgVe3E5o6r",
  "key15": "5UYxSm5J6csdh7TsV1BQrXpFmFiue8fXLy7Px4oxYFhTvqfQXCNpfnNVC2ux6S9FBmPDfA5RcEFVvhuhqpj1S9Tf",
  "key16": "4S56ctJdHWoQKG1cue3GDct43f1zGFooMyMdb2D14jg9htdQ3oTa7dn68Dt4Fq7hejzQHHz4KSeRCEpLhNsgX8hC",
  "key17": "2Ct2FT7brgwTXAckzk6PGRzrbCReGMt3kV5JuXeHWMpRExVWan4XKYu8fNk6UGgK8YLmUS5Ta3CVHhLkUxrg1ePr",
  "key18": "5c931N3XvzB1M66J2RvCLZRVpXBPKwfbU1WRDQiKv94n3bjuD8rAsh84soNZGYgNv8AV4Vadvf95wkM9acH52FMG",
  "key19": "23GQf8MCX3ZHyTyxySemn6nSc2EaueBHFnpWfLEjx5P631ZuspZ92PLeuny3Wb5xUuYnVkDG6p6LbANchozjpkJA",
  "key20": "QrkRHCYKmRJwJntKUzzC1STiTTQAGgxFCEyuvPpuNV9b32hKg87Vxsd3SCvTripMNYVAobTnpt7sK4n22WHuE86",
  "key21": "2TeZj2HwgVP2ktJoCLeQZdNWZ3m4wWPLCnMLSzi9DFHQA5eHKCjBnikjjUmSBJKSFWZTQzSf5k86pcTsjHoioQPf",
  "key22": "5kZD8HhDgjJjMKJEQKEef2VGWUCjnnJ4NwFULjNgQ3oeLjzLZb3tAFrzaw5p2nS9Bph3aWGjrApENshsS5gQ5S5P",
  "key23": "3kDvMx9mBzCQbgM6zgBG1hbuJs2Tws4NZPowh5x7sZimsFkkppov9A1fqGKxybaPo1zYkMm4XtXfzbEWGbuxvQfX",
  "key24": "r4p9YpurcQeDsfixvN6CqKadi55eEx83K8aDGymYuoYXtuvEBLFUbvvz1LHQLdzmDG1y98k8BM473EosSQ7ria3",
  "key25": "4LuDPSx6Zt8kZy7KsaMd5aoxNg6zLxSS1gy3unSo4AKYG1FwsD1wy1hX8Tg7tgZghuLDnNcPjLT6DDPd419EY42x",
  "key26": "5d4HwmKJZsvTjV4BsvL8BX3XHSwdPMtSkohcgH2rWUwv87sV8Befiy7YdxSLKMptWKQ8iJU24FQQjuBg5KCSnw1n",
  "key27": "5qmCvYsmfAD1BmTjo752VGrX4XBSk5JCU4wdy96WTbSXWPJxiSqiQPJ9RgBmWodUFTaJynVjWM6ZSPQP4Mr5ZUZU",
  "key28": "51R86Y5eKhhPL1MfkB6KFxsGdkjwmf6bF3wpMdacvidMQFRvpmqt5rdvBkDhv4n6rP3aVrAzy1AuTyhJ8mSccxX1",
  "key29": "r85BM3dHKYWQRa6vLjKg3M615h1amy5KHb4JhT3jjfr6zcMbweC6SP4TFGAt3cAXW7FEYekFRBrR4vWtvizgkRn",
  "key30": "2QjkgjTM5PJqT2u4wAkvp295HmTbMVa5uLs2Zrdsc3ot37Zj2PVDZV3brGTRJM4fqGQKbYrZXqMitj4YfNV38sg8",
  "key31": "66bZGmLgtFKGV9Zqy1ipVjwXLDGu8QffCWAdWf6ya7khjdePpmrm8DqHi9EAZeKDstjzFETMrGHThmdDwkxFmUiv",
  "key32": "5WkRomKwUQLfAuCrqbvrqhsBmYWYeSjjUF43huXNbZU79gMKYzFxgbWEB5nDJSqbDPcQVj5Gwvy9mpSt1kZP9qgx",
  "key33": "S2Ssh7xVkc8Rc7MajYLa4B1H5jnpY6fBvWRWbUEYPcrvqDDGY9qy4jbSCCdJpxLgaeS2n7fw8tyMVutsJx5dPMz",
  "key34": "5XcHLSiy5fVbE4FUXHzTfni6TF2SrkFHLniAvwmiqp9FdSJHmV3SHMriGGGK6Dq2NAK1Be1tX9qB6rbRwAAZxgak",
  "key35": "3nNEGBMkY6UA4Yd8JuDjWQ1rpJJ6Dz8cupX1iBmWRK2RhsowMeWJ7i9dM93bK5GhBxX7AnkCEiRAQFeZijjEKNQb",
  "key36": "3zSgK2cGQei47bwQvmXfSDs4oKogeyQEzsuXnWnqVmTqXg2HCMhKwoRFBYNypm7ayvmDGRqtgmZEnraus3jiLoTs",
  "key37": "4Sx7Yc912QdCD4xvVHEcdMYufitkDRVhk29dDRsZfq5qEZXXNz5xcvW4EVkcRKXVLahFUzJDwVkzj39d2WvdceZq",
  "key38": "55bHWdzFYhQYoNcjipZha5Rf2BpoSjnYdEVmunTk9ojUZX211Eq3juBuRm4Ud4bA33KoavcBZj4Pn3HbQSrLtyYN",
  "key39": "yM9XBcMLFRoBGFRTwmGSPnH6ZNsL4w3EenSDCPEoY2kybXPzkexRjdBU6Cg3tbBkYkW9YP4SuebU9NbuU253xNh"
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
