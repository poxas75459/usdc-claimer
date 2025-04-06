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
    "2UoyhMzyGagSyY3z4jgL4aUpMPmH7FtssRQ4fZwUjX89EH7eHncTJKMNu5e6MXrYsKCRmTTxtrKTWzRcTuwK7XvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51BjYUaMLW2LDkLXLumK1AVpzqLbrKu4K925Cc9YA9sbh236xZb84EwZ9Bs9JmvMgCxRpHrPUW36Kewg3GJXKPu8",
  "key1": "4DootrBcdo9AqjmrHXedBW8jkHHV3upZQL6tsveJQqGWYRYgpTw1PoRyHcghegNrErZgLMCudaefPtszLp4Uj2fm",
  "key2": "4aRFgmpPUwtAcmq1yRboNHDw8ve99P3Qh7MhmkonsggcqeWGAP7jsognx4hoEqRv54R76j56EPKdsXtdKwUHnSvD",
  "key3": "49XHgJJ9m8e6cxRLsrLcms6oY6nxKetSHVt79rcWonMSrzFT4qJiPpRHfWzG1npJQdURVWJLrhHfoGaBMV4a8F4G",
  "key4": "5sGEwJTCpFRUNp1nuCazaS5X7AojQfR79rqyRYh66M2BjUk8ctu96pBn7A9MejUTDTtB5kumC2wPGqW8p2HaS6EW",
  "key5": "4wKeQWxBvuicvLDMUVzt5tH1i9yb6xmAuYd3ZZmVG9mF4318wvzcS2XNWJUEBxJycrwPEKZmxJLp4pAHMunw6UPJ",
  "key6": "2aaATumVebwahiJf5XH5nPdE7wHsex4pmctwJaqQRgnAtJz4tJ63zbJDaGry15rjSqxLSdv4GyTErkMk2YTeqgr6",
  "key7": "WdPAeXWsKGG8p19VriMarvS12xiSE22ScQkPfnd8u1SQDB3QWLLTav1rZaSrpASt1AenW7MeXWZ8eNE19LSaac8",
  "key8": "3BNsvVnUvTwZ8V2G19xnFoFD5D3WwHjZpEteBLsWLg2gb3tN8XL6rRM7DdLvJP5PcJQZ1eQp25yEvGSvwoqW9fZn",
  "key9": "4iH5K6gdVDnJ2HMs1JXTR9rCG3se6QeKAGbsWUkpiKKzuqCoajaamrPbZs6J3kruJ75S3zhaH2m9JkTQQCsebdc4",
  "key10": "UV5U6LaJLQxAYVQz7ndhpM9DQPYpEt4fPhEiSE4EhNyyF48xi876wA2pVhMpsStjSk1SX4Mrd6oidgkCEsTCdrv",
  "key11": "5XDeDRfub57YhmpoxuZpufbhfZgdrGsMKXfP8iyRpxQLiM91EbdsbnMAHHubpZ4aYfW35RES4Ko2JkFhgTndLDbP",
  "key12": "FjzEyo7jnmmpYJDVbpz3qKkfrpWVXGo7AXN1YfKnWbPYteFWq6PEeMnzhawV5ygbdjtr8rQQNnvqPfAaqiuyBx6",
  "key13": "VwLBWqx5uvwv2y1gqWe8RyjLa9AffH6EYCQCRwW7RvYfLRKCCrPuu1DEAUdJZ7iPiXHYtqGvCeT5HW6KpBfq3A4",
  "key14": "2EZesq2FAQWRQfVhLEa1CR3uNPeFvXyj23MbLW2c1fGH96EnC5kKVLkcGP7x95ArAt3HG1eMnG1zHDFRSNyw2fZ6",
  "key15": "4RGrEfeYeXSUcMP8cPrkZM98GuXcA3nxcQSbA1gejh8Yt95NoMYVfoBzHzNqJBzndYXbdWh3kR1J1j6KKCJbr2dw",
  "key16": "4cMam4WA7MkcV4nRYuNznHMWusXmMxzHWdFrcJ95zJ6K34EwXrFLaTc8Ld2bLU6KBR1ywzteRZ8iD6V99HufqMJz",
  "key17": "oqJbyuCGqgMgMmnN2ByvUxF1JbcbdudNPafet2cg4tQUBQD4KfBD6aGMGy4VchBTZhj8LEvEZ6mtVN72ufiUVLg",
  "key18": "5pbX4ZJPf5puUu4VzCNG4fQtMRNoALXCxHsnQQYGyYKfHtYdVnyGpjgTRCBqBFYsT6NC5X9iWVRp69dbhc7MQX3N",
  "key19": "TqG3pcXgBfyVVRjHdmhh3WKmyELo4cKvL3WdsruHrxSZp8jEuw1AWimGcLHkftNpCC2PojrkDpQx7uUuygvvmEX",
  "key20": "3jfWv2xRyhhbiz4ScHPXhyoTNizbiWugEsGukq5YpBSNSGuBdSTasf1iMtpQhenaKdR1XYt1XBFBvBKwA4gsRpR9",
  "key21": "3JRc3NVEiBhPom1xu12JZ5czURTC8fdyLKi88UxJPsUDZipBTxxw3BfkA93BpNemcQyNfWJPiRUn6UhYnXJ49u6i",
  "key22": "rdEDVZ3VqPM7Jg2DsCHpQFk7cmMbcSLUz2KmztCP9NvDQEGJQ4nxwJrTZ4sLYxMS42xDSXUqVJt5xjKcAxgEr2f",
  "key23": "5V9qGYPqHbZWugroofUPTkKkQMbygsavLJ6o7K5jZjswpe3HGhMt3r7soKN455UubGSA14BZ67wwtmrYLgm5ZzVR",
  "key24": "5xfQr7BgfxMASeB192qqvKSxzQvYJTwma6HEmDpBTGsjS7nFWs7zycPUp2ttkMdAvN76FbQp73MBLVoQj4jdHLe3",
  "key25": "2gyYR6izzFQFBarRbEkikGtag2ggkzdLxYXZSLskcyLkACY5Jiu2B5pQp9czx1YR6hcmCCdapdZ9FsDJAc2ZY84E",
  "key26": "5eZeBNKa2jsCTnpcc2XPxFZaiekiiyGs6P7jZLSmp5AYsZdJC3Cj2T2uhXNMemE6J5kNfJZBj5ciPJT7eoSBmDfU",
  "key27": "3HZdEzZxJKpFqxK1VyEKZzkTcmS4mtkvY9ZD1sqKZ7ZjuUx3by9b776Xg9WSFzKDN8qMEBrCpNWZfAMRaQNv2HT4",
  "key28": "5RWmY8q7k6Buq2nYMMViB2Qo5sbqseZs6hXEWitibkT7SHHrBtvGhSn6jST9AjMC2WkJENEMAiYQkWN2jm9gVpH7",
  "key29": "3yQ3kdFsibQvMZQXRwtovdDkAUMFNGBhLWRemAjeAyf5HNBap1LKfuzZS2CDr9ZdviHpb2TThz2AYLSqrZC4WVyC",
  "key30": "4PAeUP1rjLvTZREbeKKEMoo8LBoZFnQWoL4rJ6rgrtdQMSVk2XMpxGXkjrmrATk6QXe5pyA8eySL7CSvq4JAJj4U",
  "key31": "rxfvgyChgDUge5zx5QQtijjhxToNTZKk2K52YWJzd5YMuFYK5xtvhZTPdiZTRbrQhu93WM9edAYFcwAVEp4zNHi",
  "key32": "3rpu48VQBvNsJD4KBNCbwXNdRqq5xJxUz2n9sSurtV3f4UnChdUURC3UpDrSaVMFXiYsDMvLMJLjBn4ME4K9cUS7",
  "key33": "5oo4ZMH95ETricwn7sxzCBgCcsUkBiJBYZLYYsUmSCWn4ze6zPemf3P219oDPkzsHk7DyYFC8NWTfwqY3P9tk5RL",
  "key34": "3F1PjXSV5H3Kfra1YWeyRi138dPqpnouwDKHBB8qCQ4Ek8BhPrU39oqJSub2WkviBzCdH63bJjaUurABk2xKhbLm",
  "key35": "bcVSv6cLqYdiedbV8vbVZvesrhyMP2Rekn1RjMpaYhM7mfWw1aLCYsJGpLuYPp6CKXgX7Rc12zhzqFfFuRiWewT",
  "key36": "4BZDEUF1eeUQcfxRrZyjJLzQfpgKmx3Y2ifoAMGvCHKQ2XKERdhzvgSVS8q3kDndFwcCPnnr7wDemFS8nMnuefiU",
  "key37": "5K9SNxYyX9o98jh93xV4DDjPq4XL3vJZhNEg5g5PJTSorvcQSvFiEVRKcpi1B6SFsKi1KgsAp17kFiZz8qVpKyRW",
  "key38": "HKPad4ZbGw8tEwsdwEMhiNdqKGjCXtNcmy2e66FY1fbTTqUcuCQKJdEWDyejCruA5zurd8NM8dwds2yrvVbtKKU",
  "key39": "4oh7JLnBhxMdsSHW1DzbKewutBpnRNC1HyxH7esxoERZrkfmfjHTzyDymyZMhFKa1B4za9bL7nX2oJB5fpenmzRj"
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
