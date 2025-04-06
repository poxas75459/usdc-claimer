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
    "4p832n84MkuUvFDyS2ozdcEksUTC2nxf41bzwzSrZJwYrcWhn5xB2MS2E886FnfBECqiUNzMV74gKzw3CSXJAPZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vDAEgHQ9er2cYaenTH8jchq4kFWg2PfznQHxuxUpDA6ffP6of57i8o3e8DRDCRxQEMPz9KeWPVt9o6s921onFwQ",
  "key1": "2gaN4xVUfwwoTg3rfa2onXi5xiuwUumLL284C7v7qVMYAkswHC9gtV9dyiVxVhPUcrid8nAN2G8xFdEoLc94NW3Y",
  "key2": "W1apEG8QSHVDdLge76RumCo31xXXiBoW7azEri1HQv1b2oyb31ynj2iLSrp7FGroqXNgPsEeW624xcxTGMAggTN",
  "key3": "53HWxSMkK45C6UFyxpDSxSSK3tWKAbnQuC8bR7YFNWT64LPs6APBrQkN26iaNiCkqWkhNpvY7aWoUh6b1MFeUSPA",
  "key4": "5nmdSbPTueHAhnwDQFZVZ6hLi9BQ4AZyyQdxcoAXo5xMuSukioo6CPPQRsmLj2db4URYpZt6d3kpwddwfZnrFHGR",
  "key5": "5pJVU9C2gZ7gPaLj1Y8NJAVX5x4gMWQQ8b7ptVg4HMLti4FCsMr6BsjiBGX6SyzMK2SEaxzpJAAHszam4J3KZqso",
  "key6": "2ZG1HYBn2o6NSntZt7ucD5V1rRbCroTPj3ztiiAfUYR7HYU8vXZdnAu3J4jhZKovuoTSF2T4hrHGySq7PFddmWMK",
  "key7": "3GmnW3kJ7Rb86vYhTg13TPTjYdVduC1WVWtYRXKkDJcyytT3eoRKLpj1ADKEsuj7eHPHeWb8ZkA7Lg5sYhHv8wGJ",
  "key8": "5aKRLMTygZYeTCGJsqAgZs8epUZi7kX6bY4g6qFBZtskcFEXQFAQY4vP7ygYi4aVTd8wYjTGCMzs4q4sjDG5SVaG",
  "key9": "2Z8XUbkJ7zD6VGn2Tf9GKjr6NVPJTy1WTFK2KfSRs4Uo9KPycqshAn7YScaT4YHLzgchGciDprYkyTXPsjoHPqp9",
  "key10": "65Ai8PSPenY4puaTWVF2CoHYMZAPp2efaXbLZALSAgRYkQaCqFPW6QypQ7JmK32itox29BkqFVRC5AYCdVVfUUMm",
  "key11": "3dK4JR96YJZ33vdBQAtZ8UJccApsZMDKv9iTm5EYVNu3byeGanSYxnXxGxMDym9s64hCp7ckM4bD7qTx5gUVXRPA",
  "key12": "24DT38zAiz5H5cDNtobcJKMnpzCCnuELddw2BoAx2bjDcYzM5HzVC8L9EhW9EvAVw8iCjARSBA4p7dduZpY44xsB",
  "key13": "62Sc9co2EqtoSyCivFFYA4JVxAbudvmDBevLQRVBGMuWkoktQAVRTiPQhkXXCb6ETM8TSsAC8RMHFRAN16kMcNzu",
  "key14": "2vaQe47fGPmC2vm5TgmjNfMY4N6Xd3CPjW9u2415mpwUCeR4KHXnzfuVmdg1Qufhh8RrcGVioEpoeDgxUpro99WZ",
  "key15": "2bXahg8MYzeRYF6hrJPn9aByKXih274c6BanvkFqEpkei72XPpPi3hwJEMhUmGmoyKFp5r53bZfh6R3JZTGeKCmw",
  "key16": "4Ps5giDuvWd7v6U8AeCNs5dUCNfpqGNV2jTgYyHtuE2HsLxZwZYZcSCo2RL5HMb4EEeR1Ho35xQZbhwXe9sz7Rve",
  "key17": "3pUpyJPAFiu5rWqNYoRBtW2zyt5aLCkcqi5hrJavsYXpF1bvpprSs12hahbCCrigj71oHNLFqrH1DVqktGaaTUfX",
  "key18": "3zymPCfPqZjTHagdN99zqJKjakRRr3Zkxo3Zqr8KnCsSpAd3wNdhNNCqZeQB76W7bdvrJFXDx5RWk6dkCjtEDfc6",
  "key19": "5eAqqaerzb3AGzw7sSGY7aSQPEytYKTW69EzVShePE2qkf763Daf7HZcBo8nHEoGPG9ufGyt6zGsDekPNANCMgbr",
  "key20": "226v1nQFw9MVrWw5mSYFBngfD3xye5fQUppxZWsRn3K7hjq7QMF9ChgGEW9LL6ADRkNggdkkexuiAwAgYAe5xBa6",
  "key21": "2H1XuLHo3TjsUwupoRUHWbNWwKYYhXrEWNPbDtZ2PP6ATLda8c1biNYTr8kGmXSDtdonBZB8TTiFpYUM1HQcA781",
  "key22": "2CyMt79992iddeH63MejYrrRUrEWoecMpr4ohJfKAMjp59L8SX5UvGjo6pwgGUGbzpdiBftxPdhbSNhsD8Y1SbXm",
  "key23": "rpNvcTZXR2x8iN4PxDcrKwTwMVMzzXfpb5ZuCCccUHRWz5qrJ6K8Q6fFk8ujosKocpZ7PsgEH88wncEWtxawRUc",
  "key24": "2EHicnhULkCs7qNPms4KEjQfoYDFmHh3pquxpGNokAFnEVikviHn3d1qyVA4WFdghiiYRo58AVPCwzrJMgjNLbha",
  "key25": "W2szPXyAx5VjNpEZujK1iwdVKr1224cNgPmTXCWTNpg3PDsjPVP5d6uugVs6ggCtEjVE9RuYpsZLaeJRoMwDFsu",
  "key26": "3HcoiP21MqYT9D1TpGcLkrjBPX8bVr7rA3Kw1Anrg6ddysYEMH3NpKWqFnTaorv3wPLZMZdDC9yzNYrJFiRkRpWg",
  "key27": "2XmR5kxvWZh56dNi5F2SsEPhS13sURYkryT2KnCrGKdP77daXb4t47WDFMbhGe2fL46FeCK9XZWHFgwLVvqzGR4e",
  "key28": "3hF65yQJK2TxXwAJPDbP9X4WLwAT1wauJziPSsLtJWXmqLLQvAufS77AS1JvAzT5U4wUT1RowyqDUdReaQy3ZRWy",
  "key29": "3sgTyQonLMz7G9mDCdQSt6p1sU4nV6KhnabhJdRos57oznrVLZczBdQaPWQCPoSeCqpLb75um9Skq2vRANDaLV6F",
  "key30": "56ykLpv1t6hLAS5KMzBGbExoMnxUzMzWcSDo6eiYHC6AZ3xx2dUK88ZPPAoSZSsHDd9fZN3NUPLPvhfLopfj4H6i",
  "key31": "3KBcnhgaH6zkeMCoEbHtu7bi2ZHjMfFJp5Vnw1spVu4h5C2XPAAZzJcBVfF9iVY3X11UPC8XaNxYJH3KRhfHwd7r",
  "key32": "2ukAcFEYjU82s5cKcvMy8rkbSEabu9oL7mWZ2SBjq9SEmowQJvAKAHsioh44yUEF3FCvhWNo4kTbFPoQz8YnMHoD",
  "key33": "3vv1X57jkaaeK3xF9Em8TBbYmekNGsoH2WCz8YHF2QwbFjLkGLLNnaUKARgtgfnXQh1FKcaMfg6mfbhRsynJUUW3",
  "key34": "5devqyL2acybkMVdrqTW3vCXnvHwUzCo33ydb7jopCAd2yKXgzuXf9BmJZx9di7vuFqDQZeiUaiE4FAMR25dqdNs",
  "key35": "4Pqb2SbSRKJyVG444N3qKPXPRmwa9c4uTkU2F1dEZUWEnSVja4jR59iLmbtgWP66hT2vAgn9uwuDFMJMKYFfvdyu",
  "key36": "j6GfTnMCMmoaoQc91wSzpf8yFb87hLqo7XB54rDAukPfoXysyqRLHcs2LXqJZXzAo5z6g6jYeNDsTtbGeyJLRYY",
  "key37": "W1iD7VwLbJkqHSdDQA2oW81DeKkDkiQs7ribdYSrcnC6ofpy568uUVLPrEnC7r5KrnSY8nR46X5tQPtcsN3aW5B",
  "key38": "H5k1ViakRXjqtESkYpcy9R6BniJ1XyLiDwv8pBf4ZbB1tffgPjpGB29LvUKnphdp95r36iYpo5wVfPGZUA5cGkN",
  "key39": "2xo1MS7hdKUA42abHYhD6Jm1gXQGW74SftCuwcYvQS1fPiZ715SqVnsAkN9eLHBrxbyE4pkWY5abwDhBNK9m9yki",
  "key40": "51LiKjWLNvFDSv9CYCo9LYHxzgH1Z3sRytZRDZ1i7GGzaCDb5kzGQmY5qENa8VaSwikCDLHFjH9wTKH2cDr5cLHe",
  "key41": "eFNVo31CC3dkMxV3NwbksbyyuoMTgRxyLUWs1P9xXSDVvrTcUdkAEahLxobebTbsMjwNuC9zAiyMAqNVj7TDJ6b",
  "key42": "nXuS5KMxR1AdUKeh9Rxrbz6TErfq4BGcMxzbNDD1AX9Q7deocXCt8wa7EhkxqmZzBzmaLVqf52AcE2REFq4kexH",
  "key43": "323L3XrncPDJ9h3gMsQwh15LpGMbxc21cq8MHeRQucmgMcPe2ot5UmNQGw3BYGg2YzbkwyENb5N2STARu3Vxt7vF",
  "key44": "3Km6AvHdz7gDQ8rd7o95MpTewcrZAY1yh4usXEvCfoByxrxttrM5EoMWy1zmq5maTJfW8ehZS6UrAchTjHhrzNPo",
  "key45": "3S6DBSPReRDGUyexnrg1U4vJGahGvvQ3mgdxQeuEsV7WJS1qUbp4NPJSQDxMsRpwo2WFnu5arzjxiNyAXveFotf"
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
