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
    "bhVJH8wqJ96yFU9pHjQb4dNbXdAKdj8HUYXfAHesKFsPdgtuVAmH1cgETPvjmxweWfj41MReJi6x8hNquCPhEQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fZmdVA7uwzZhFLFuthwaNfqUpW9MGVMEQZUieSkxQDTByb4HXFdwwhewK6Vki1WXp9UuAjbkWoNVBdRco1MF1Wu",
  "key1": "3uDZu7i6uehP1o3peXMJbGpiESuUCAuofgDq5c3GqgXTXc1uKV3Xy6PBZSbMp9x4d4JwYeH2PtYAp77bwowDjfGE",
  "key2": "3A1NEj71Q54WvPNrnX1uqNCKohkU2466RFSzoKfnwsed9cgpM8HYM7RvioT4oJBg4mbDxfui28yULHQgiAR1VbQU",
  "key3": "3MxPipobWkwSVfpMnHLVkJWbS57eeYpDV3gjhNDjk6tQe193F2woLPFESNNmF7YRt4d2tE3QY27h8cLFV6fUTuu",
  "key4": "5EhXffU3FapP6mqFVdFyZcc72p2Cd93VLKWjB9ViseGaWfiRv2a1xeu8dnrjy2YnvvYnrQrdf5yucpq9RGPW7hs7",
  "key5": "3KKrMJFdBNho2MHWbMoGjrUEbUpoBTgnGTNuDkUQXLU3H4wHh9q851vJC98enzmx94CbrTCDp65YramUZzu3dzTD",
  "key6": "5DxjHG3jUhMKgsFLZcHbYzg8Wubduq6KPf8CF4rkxeFdE8eRYcmmYFgRGvMAhoapuMJuiujnkTsBPj4y6LQTS8As",
  "key7": "2sjGeU514H9bGLnBFzdcDamVcSXPpcjxJTz6G3xkgkaErY29A6H3tSTeuMTgDghFZQoUo2zaE8wv1dJQ5eK6nkkq",
  "key8": "38U4Ldd4zog88VGmzZMmpuTWfAXXSUGR3PabnASwR718AVUEhC5Si6D2bt6gRNWVq1oTxyPDcja3zAZLnHKMVpuK",
  "key9": "375GGuHqaMPvsr8ieGWkRkDJGM828H6UV2bK8mPn13xV9AndUvKyowyM5KK4PoErf3xj9Z7dEGZsuzRfQL8V8qNh",
  "key10": "qQKRMsx3SHBsHG5rvyMMaXYDo7r1vJypr5ARLap46n5LtLnLxnQyDuobcP7XDSCmviADWxL8JRRL5o16GP5DCQe",
  "key11": "3rwBEgd2TaKkyUF5dYLxj5xrZ32rTbN6YWWqC9YymNn6jJzAfZrMreFCArry6GZizxZPZodmuGHmf21MGFRsKCs5",
  "key12": "4ioHeKy88LdvU214LR6jwZWjMEEcEXAx8f1LDzzmk9eLfu2fDgiK23t9Qb42RnkF2r8pQa4apMcAHP8QA5tXScZ7",
  "key13": "qeMpoSKwWN2s4HrujZKL74bdxrct3m4LHxzDU1n1H2NY9qFvGgwe344vz2CfVE4cQ68bn4hT45VEUqSF6GFDR7j",
  "key14": "u5YDzDCpHjJbKLzPURbcKuabztBtAZYgqjTpBvgihJPjAVmQuGGC5GiixNqECfa6HyqR2aetKCnyVsmUv6MKiBW",
  "key15": "yMs5i1r7zM7vhZHm2MYrgR4ehAVG6uzu8Dm2HLzyaEMznvLcAjwSkYCENiGppa9ieVK6STF62nkBocZ5s5gH9oQ",
  "key16": "3phvVmmgAsRDNnBPQUuhRaT7VcHn4W5Xx41cDdsjjZjHW4vi7EBaGBkWbFLFcisKbRkUPm7UqwNFBsJpEBJQyJzN",
  "key17": "4EC1yqWK96d2gYz3Wc3LYQSL1supentiYp71TDMWkX3X9PFDw21HNLE2GkUaC35aMTE727Lcaz4mF2N4YZdbdt3h",
  "key18": "331VcNB3LyaXmfznbusQcMtTnU1R1pTMXoG9PAt5q4iD1KknhYifPuMSZEEVxjsvr2LPH2pZQShXc79b44oK3mUa",
  "key19": "5Vsd64XbTyLKSwqrAUZYY5vAFw2WCz8EMBHuMsPwf966gaWSt9xHpFkHQ67TiEXmh2tGR3jNKRF4ZBS2PKG1CvEz",
  "key20": "3GF1SL39ycGVxXqudmZe5VZzaKennQUqUfAhj2wpoq5dqofMLNAdKqMt2UT8HyW4ZdQSoneYkzNYXcE5ktMFPUBt",
  "key21": "2iQBwzS6Zhoc2KacHJYkrXjUqFE1k1U6iE4Swfyjpo9PR7dyWgoJ9Jm6VTAKhhMYvXMyiyciKZpum3FeZ4yFP9JD",
  "key22": "33TdeEZo12jfaeResPVrvQFkzVzAnRWDdAgiCGP2ZBrfZYZAVxM1wSVPC9zzPWjoQch7URWrnmQmtERdv1xDz32Q",
  "key23": "4A79iCEpC65kVCfVYWst4iQbmHQdjrR6Ms3ERNSvj7Uv7tyBMygKkVbDxjgxd7DkHkTkeJDcfmASGvEaTd4BUgkR",
  "key24": "9y92pYqG6hC3LoV3c7fbzwH8a2GmPwMqZhQBomFuEoasvFHeUKsWZWiniRhaCjm9jWaP1iKN7KaxCYVmTQLrxGw",
  "key25": "2c1vK4TSxRYNuB5u1Sjy7sY3YcVHUaBq1G5aB1W6MTHxmw7YDhXByPiGqcTkp6GDmLXfSN1D7d7KKFGrx3EvjjEm",
  "key26": "5coBD4hdWouadBgPTGTdRW9DdoAY7sDnHQsx1oVinaSenevdLVnnk2yGgZTKvkWvxr2NuReJwPynZ8qG9gefVVcH",
  "key27": "3JSFcZEhKY49Muf4ShuJy9Rb88yakJ3nEKwMoSsbtLoH9XYB3DJ5UpMWmr1BrWJdWKDLJDMav2UeC8BootFqehYu"
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
