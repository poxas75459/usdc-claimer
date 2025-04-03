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
    "P7Te3PYgYELXZDcRxodifMUtE19mBnGZRGJ4K7yR1T97h6kHpynRsWQ4x87e9vUqmiDskCrpdhRGa6fNoDG79Ya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KWQH4TbHeXZrxZ2YvmpcD5g1nrJCiL1jMk4xRPmoRUrjjvyeZZQ2wcTpvMuwCGeuMvHMNnqswTjofKVsEZL11gT",
  "key1": "5m9JXrE8UhRekrjBwunLgzwHpQMWYudpsa2GFxVfqa7mWckKazZdEeyMZpxurev2Rb8ZnJwgwydpNfPakzc4C7BY",
  "key2": "DkGuvTChUKCZpEprNJZDr51ADcjPczGmUvMnTsWQswRFfrjwkRMzEVUy2zQbwwruCkqyThXdnnkroMstPf6RpBi",
  "key3": "2uM8NLDYU2DXYuFbhzXh9FzYrhsAJRntwtFsXJ63ycuury8oSHbB5cmLgSuHYVvBo3LUn7k9BYxRv2hZ2pv5Eyy9",
  "key4": "5Ycpe3mrZ3gCG8frtFYEKmJoV21PcgYcoaZcTFAsTpeLm7HQKabR63DoAuQKx2ZfpHs52xrHokjiu8moMKL4Gp52",
  "key5": "3W417KoDwHFaoRqCUUzq4fKnsL3LRhnF7ttcm6mhwJDorvs34hQV47yWM5YuMv8XNJmNVJkoYCpg4Z6LEL9eD39U",
  "key6": "4x1p8bGF8MMgsiVWjvfcCuo3NKoxVycQ38mczhC61nAQ9YNzqwT7PkkSLJefqP9CjMhRyFvD9WiRKakxAB5kt1Wf",
  "key7": "2PiwyfFYr9ZTrv8hX49ns83Psnhd8gRacYDdL8it5nsndm2hu4shXjjYUfXWt31sXhuWqV1iJCUvAV6RQYrqvX6C",
  "key8": "4cdGGxDpjUgnHXJHL7GtMEEXpPs4LtYfmbJJj8waFRABAA2NQ5uWyH9LSJiFoFStLYWTuYwxDn8Zd4UvY4yHVK4P",
  "key9": "122Utqt4nNGbUXMuFdRajc7V9zA7zKQ36PtFXgadK1msy6oUL2X3WhCXEJDFGsokTVHL4ytBABTeUBc2bpGWvN8t",
  "key10": "YxBwtKkqceDqd64ikE1FTRuNJV5ThuhZpZE3j63qosNbCTTz2c1ajTKFAc1MGMaGf9Ke9HsYpVWtqv2ZRwYapFi",
  "key11": "4VrqrGEx6hRWwHtz4RivfVvzfFWYxKLUtt7tPgtYAHkWFdeFQ6paCSEctpmRi3B5UJwHLus9B4WrPeZrYUqJ92nV",
  "key12": "Zg9Cbw67bMeZrgEjpfpAdckT1LXHV4VQDkuhY1jEHsfSChmPtWTJ8Egf1fZwikm9ngNGSm7gDLDvpgwnGagpPm6",
  "key13": "2en7XNYGZASe1ap2a6xYccgKSY9RNWwt7RF3x47b9CSogu2EsGypZDtSkchm6cCggGiEfrjp1PEHHJCtLZXYpzvD",
  "key14": "Hbu5CE8eQrDkcUmyW1M3xhxTsgn3ja2ZqnNVbY8fsRfM6PoJL7xkXYFSrBrwFGWsJ9X1trNXW8u5jdNBtq4uc36",
  "key15": "3TTpZsoXsX9pFnEYsYt7EwPWdbsqWavTSg5HGorWBNo63SpmVskBwPuBCpYxrbNurSKaL9VduXxdpYHmRsf6DTQx",
  "key16": "2eqv4ctnnW18rVs9esYUaQM67v2RuNn5hcYtSkTL71sFjH8JffF2GssZrpAuAknf1aCTNqjwxeDxgBJoDVj1LaHt",
  "key17": "2NrB7XVj21ew4EGYcVFa4oVdfGHcicntskWnQAoYi9bKPBCdiRLh4XxmfsTAv79RGvasLemECbVjW4QAoPAUh5Yb",
  "key18": "4S8DYZ9qeokKqiSJ4U7H9z2V4LWJERYC3qmd1fwA1sb9PY8zFijPQXbdyC4kLRynnLxLrfRzLeAGTTmNjqmn3iHw",
  "key19": "55ABvUsbFnN2CS6SAZ9hGg1vRFeEhchkNVL5j3HWipCB1Fcd1K9jSzQuvvebfSwZFAZQmwiSEgGeTqFnyoJUscj2",
  "key20": "5ntBn7accSQfWhnYLT4EfkrYuEUZbCeL9vb3of3vbTkkVD43GqBxwvnkYgArTxFG6CtYbcx8YQQbp4uP1onNZe9v",
  "key21": "TmNZKizvQ89U5mTX8aBDXesC6TDSK55KDrykGtbuCWxKsLFHBk1Z6ZRJbiwwJ2opWevkJNFgmeHUx8bQUpqWhYW",
  "key22": "2j7MwP72uMCeAGs64QnJ9mfSBkC5cSqYY66NHr3scn7b69YVSTzRZyW5MNDtr2vk3wZVsao4NCxdRduxjC5SnNYb",
  "key23": "2DK8Se5iZvY9Hc1VFQUjoCq1H63Dd5wnfdtWxfG5eQHLgfeED1hzwYozLA4XUVLQmPz5v6Vfh47YAkrYvsiB7MPr",
  "key24": "53nLV4erNjo3iSHTLKth1oge9cWGmUfgixdJmTpDYPZs9QMqMmJC6j5mZxuQWy3CvBbgSwgtXvVpd7HRdMEAkX6Y",
  "key25": "2TW4mmxxgjHqEWVektwDe3CnkR42ShFQvk9jHnvsdWmTJQr7x8w2SyVwqByWafdJak1av2qqz2Wb5xmVqDjtPp9V",
  "key26": "51mE7Mq2Jt1nrjoAwzJheRqn6VNo6a17VpivTiTb3gTBayaDzVQofcMHUEccCwmmwPycUErKm5BTWbZ6btNvH7uB",
  "key27": "tLNWPJHnub32PYRSFsfxC1tmqoV3LZWUu3K8MUTuLUgbeS49RCaEb4oYHTYsabR73NuxjHpbT6DdRGiT19SJi3r",
  "key28": "1YNDW9SRtwFojF4haSBuxt42ZqL33MFW4sMiaxWdTy8jSi3Nt6iUKB7yFNVhddF84bsd7UqSZCC8ekfGtBtn8w9",
  "key29": "4RfNsFxo5bwQPiqfCZJnPuhTgq3QaGJ81wLBY1vU6vp5UuXvMyeSARU5Kn2oG2vTvctas5iL7phrmTMrruk5LX2K",
  "key30": "nzZvxkfkuYKyuewHakuWxyKyMwfjz2NzHM42hqvK4XmAaoie6wXr3By4U7YLLGRjARCrHALFiGFBCPXZKT4NkwZ",
  "key31": "2jXE9rLn3ftfeSgShD87tMHkKyhEHhKEDx2amQ2vSrKaM69bL7nwAXxTM1pJ366w4SGsyY8SrNg53xBiidz6EBgJ",
  "key32": "234UP8KUYpxi3Kzfb3QxB4BwzEyfds9xxZoehqpqmzTaLN7Dhs6KP4RNb5rM1TM29g9ZciovYDJHMrCLJML1czLf",
  "key33": "CB7YmTqPdJUTwmUr1uRivkNqE2s7TzQdSr2eLeCTwEss5t9XKudaCwiie7qGXSPxmY1UsgNWwquoLFbhWrqHVTj"
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
