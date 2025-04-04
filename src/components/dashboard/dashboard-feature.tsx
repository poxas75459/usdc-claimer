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
    "r31s4cUJU7e33XEqW8aQgRp71VbxXLihHRGu2gqDAVdEy2GBQ1frVhZaycy1raGHGYV9UWwcLgYB29d51G946xs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K9Q6DHE818HTCi2JzYyZAiFfa8EZYoSvX2MJEZdJFcaTEofLYzpbRrmzxMoDMjYkH4jHJN918AsL1sm8YZ5KdLT",
  "key1": "4yer8fDM1EbdF7qtL1KJ8TXo7ZHgk8qTXtpFYHJPhXYPcc3xfr6jPqJBJM7FoQhKr3mub2zeRZuhcVeUNTvJCNwz",
  "key2": "MahsvkPacmhAef4jA9G8UaDKULfgzvkZpnZWGH845Qe4y5A8FerEK7jQyrnTPVzHLBa4rwi3Zy3qiWXvapFLK7K",
  "key3": "2jzPxoxJkXC3rbuU5qhKGMg6Fx1GEws8XNpFa2QukZLDomvtaxPiGgRehtuuTdh1GjyAmKxQt7xkkS3Xfy9hkHKM",
  "key4": "3wJ5az753KQQZuR1WN4YC3Gycp4RsVC94haFnuDoVURCTRCwbm6AC6hiTQTBeDmJkdnSXfq96un5G36r42dW3t3N",
  "key5": "5htcTNjLeHb8sKYTJRrqPeaCbhXKspjgBSgqou1zU7ua9Eey6etD8FsLfuDetVmXyTGjbcmrkVeZhKTvpN1uPrJs",
  "key6": "7GMGHGcp2nEY6uYujyVKuLqiYtsq8jLjnqU9yBfWK6Mxux7V6xrkjknBMcyUDxzrLFzK7dgJWxXURZorgpJjt77",
  "key7": "3oafKumQbSwzNqm4T6yYcXXaRdAXEFokbmNmuAcRWPp8mNKDeN8o9oFNfihDbj3xnDD9zrzDpvhLgdW6PDTn3BYZ",
  "key8": "HfvsZ36sf2BeUgf47qE2FXLGz17XjP8NwJCrUpfGGJB7gNyJ3puMcTseJqxzRNNGjqbzEynrWoHP86B18zNcnxF",
  "key9": "CGN3TSVXLJeezXLxmV959p4sSMsMucffLWikDedzovRneK3f6oy1LrjTQAejAsipMmSsKEccrYpqErMyvkRYNhB",
  "key10": "2Y2zxxS8T43eYMftnKKWstVCd3acHrrGjdED6GXZcbMH8sajrqop75sWwLZLVLVPZEACzHr2AXPAohHmMJWhq4iV",
  "key11": "4fcguXHhjygx4ZW98w5xbbCm1oCcEFcuTVCjFGp8VEbivwFDD3UrAjaEStuMhEc25kfLvxWUCmFWoBDLXpDdFQsP",
  "key12": "424UDGb47YfxNg6pRN1puvkRaL7xQYYxrW1u7DrvWJSSmYhqpfiwGNaxdRNAP11sH6kyGnMFmBPrSBUz7A9cX8hD",
  "key13": "5VBoSDvDWTgpo5pGFGSqzTLJ2BZaBAuQqHrdPW365jwqPcaC9Z1dU2ZRg6bmPXJeQPXxzJeqvaxWG8Y9isqGbBfX",
  "key14": "hCfBuxX1SGsF9MkwSCAXMfftEbqRenrgehuAcPM1Xi1dM9pYXDzWU59FK8PDwYHxGpSD6xH7mjHebS2iC3HVN6e",
  "key15": "H5KEJgKDgMV2AHjy6u5csjbvMm7h8sCmFfqGingEwNUHnoQTSnWyfPvRCT4iniSM7aF4L51QiuRkjqE6D4cN1Ha",
  "key16": "4RKsQAs59Vc2HrMGgqdtPtTTRCorzMAu2hs7e3AvQk6aQe2MrnL6JvRjA5pXBZVe4uyaSPZnM6RpiycUH4FHgtSE",
  "key17": "3Ng4ZwBjy9KE9cfQDrk9MpnSqgx55iUohXD44XC738AHHivE999CqfG8iJ66EQA8zVG1ixFLqRfZUiqS6RnqwuxH",
  "key18": "5dxCfZyEGu5FUahbLtLxHdxcZFSPEYUdr5wx9SmkSGdUZku67gVB7UC4ZZqz3YVtDweyKNiewXhCbfyXRHQ1bjzj",
  "key19": "45bBa9zKDnuQVEhXzdW8KiCjee98pEU8PCTRy858ZsDAZbFCiyN9RJRTqcNJEdViKo31L5MxJpuYJWLDcLjF25Xt",
  "key20": "2bPhAprDNMj7DT6d7mvuWKYiDNfJYekGSm4EfDELYcUFQ4JHyZ3VNpvgsv6YR5MQBFx84Ktca8DN7fH1LVcFchxK",
  "key21": "3wCYwscYoGv2CbBAS78PVWcx1jht3UwRMFJfREZQvuARMRZyVvV6TTuib487Dd1VYP32dRsDUCLiSzk4fEvFESAg",
  "key22": "tra2yyR8LvDmCLHUbXf1hpWawrNVfv9Bh1oPtwkgNhwXJqDXzkZMZdy51gEs92BzMYDtV7MP6rPKPNDnsQiTPc8",
  "key23": "4qAFFBArrMujFJy1PQpQt5inPi6fNsXvJxt8okdwqTxu8h9zR5TZzrKUn4znQgkXcwcgKzhaf5gph2cWVsVhYUmV",
  "key24": "3hFKFhLx8nM1SYdbFCYxGZ6qiiw7fA4rUwoeWkQidap28p5s6e3kgHzoUw5brAAZGMukyxoMcyo9M7REy9RxLMZq",
  "key25": "4tLmZP96QMhhvGWFP1J28grQ6UMuDh2UhFa6Bz6NAuzDgtuqvY9tLHfRZu9dM21HKrQvhXnNnu3g9nQBReXMovju",
  "key26": "2MZfKBvCry5XBWnkXr5BTmkfbUfAgUdTYg6qprvFvsfUEp66zXZPAx7kDgaHY1rE9cLAFNxSECHHyPQ11YuTyeJN",
  "key27": "51vDEbCjLP5G6iJqhE6uRihM5r98BboercZvhnokpt1DLjgK6Ld6M3NX2T1fP9t7jfayFeWi2MgPFwobF2kKTqLu",
  "key28": "52TJ34a6B21xVRZeTLfU5kjhcxNcsjNQZea2huQWn3egjXja5V7voWfXSDFnQyc27jkMmKGWgiejnY9ttnNt4yZD",
  "key29": "27CNBNcXYJKpjRY5w1ueGYhXrHnyJHh4ha2CaFwJAyLKCMG78y9nxcv4GpmDwzynuZw3i3V6DhKKETcSyZFnqHyA",
  "key30": "CP8TuBjbAwX4CJzrKhdjC2amcSftEkksTNfoy4cmv71uTQMvzgSJhf9NtJC2EaSWRV4ZZvvkjbdM13xPhUo46WF",
  "key31": "2JD2jXyTqAnSDsrBkryrHWhU5sYFyrejmHvYrVMjtrT7QvDj3Quzz74meb68xJ94eUb5GGvNgPn8wo8sQa8sWiY",
  "key32": "5Bmu14rAEnvQ1KgyQ7qDH3nDtfaCQiqj6Vv4TpQtow3HaAZ1xvgKkUDLwEWhzWAkUEiQh4D1BmFBYZzbwXbjn4Jb",
  "key33": "3R3qFV6RW9oV9CfWNCNrAoTF8ktRDQ2TeziNGTfbHtDxkXo2dGxEQ5V2CWLCf1ABSBHsxTEMPrvk75cxWd2znQmW"
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
