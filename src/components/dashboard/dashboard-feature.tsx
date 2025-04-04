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
    "2qEDHCZHBTcrFj7VPVVB5b9YfPXKGHSsyqUjAieqg2X8FrSVs9j3D65JfNuLsq9A6CrRPwzxzTdSEQFzWAZUEMzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s6eH3go3zgF7ypM8Z5c4Kuh6rVZPYd4VosdTxgq3Usv5ebNdgKF9skuy1WDsMiRNMHUc9c86GGoYSKd4zcVEePX",
  "key1": "3xVWVfg9wGEaJYQKof1gAENDbaXWdgRBx7Z4wivbQFvywf8nudhpj4r8mfNMf4AjHmHvYFfsEpfc9Kp4LfTjEAcY",
  "key2": "5yiiuPNLrPSuwCWEF34Kff59CJqANqFJiqkHg7swekEzL6muGkLJF8mioUrt1Lj7ubqxXRKHH7HbRgDtnD3CgxB3",
  "key3": "64fTHAnWVqbpWdz5i3RcrxMBanfgWYsqdaSjB78qcdVZoQWBnjSHQH6FkVqv2uQGkV7CX6zZmKaZes68VXtSUapc",
  "key4": "nDyDRfsVb6aMAwQd8TpRh3XKBuHJvDdA164dXd5wdWy8VEcK62zDDWqgV7GwtCKhb7kRsCU5sQHm83XFoGiKaAV",
  "key5": "vVjbbRrSJyJns28DMYxyZgMNwSGGnUURnmzc8DCJF22CKkrgN4snEdphzThSB4NxddnzcPE4vihakQNePM2wf1c",
  "key6": "3XBmXQtmnuTPLDRJ6WD4T82ag9tqghJYFWMghRXGGxz74TpswEnvUXTyrV58xdtMV8dDMP6YS1W6R4HnaDjQpjT8",
  "key7": "5cp5qPvCL4kTZYv72GGWWRWuXYdBGAN85u5B7TNYAG2QgEBqJDC1nciGxLgJwtX1YmU16NKVwJDrvTWewwH34d93",
  "key8": "q7VTrYNBQGFtvq1QiexcRFVSZVfYiY7YNAPPKL5KbSXLVSvL1avW7QTpP8Xh8kevhEPrdhYHq3fK3y9iYY5raq9",
  "key9": "5FgbxPaGsd51dpEatZmdLkEEnb6HBmm3eworgv2VJu74HUwsu3AeQgN2xyAWF9NehaHg4PfHBjCRaUut9n5ABtcQ",
  "key10": "4EKViZdoBfSBTkLpepskNf1CF91yAq9yqMo69e8azG7tSt9pByHPk4PgM4nvT3Avh6YbhnnwFvnqq9LW5s2SMWKd",
  "key11": "2ztSY1MYsk3PBLyykEMEKqU6e7Vpm1gqnYV8JiLdK4TGQ1ptxqmHEYEw7wYNuBxr3NqpBNoPt7FcvjCvn9on7Nn8",
  "key12": "3ADrpJFSG4GtUycJCCokTuuRTYbTUP6NRFpYoS9FYk3pgmAyjca6JTRgicRpsrdDJF3bnZBgwhaAYJ7Kov4ZH4AS",
  "key13": "3UN19je5gBY4LH1YV57VPVzKNBwhzE744fnBAqVGDDFaDY5kZenHn6mdxcrrf1UvetMmRmj7cqZ6zToQEwqUYY2T",
  "key14": "3m4yRbFSJmb1yynftR2sXSxEJjnSqTkG9gtw9UDx7WRw3zfQRbTwV7sy8UQAKCUcpkKXDCVfFhKGJAWcf6qznbpP",
  "key15": "2gziWBmKKUbLtrstWPkpV4PdmU79NNUshk9pihUH1Utig6559QipZ8jbcFqg3YihAhQyzeZBK2DRZST6NUorekQW",
  "key16": "2Pk2BtLUiR69CqaDibQAyfa7bpVwj4EqGAuYxqTk8w2H96x6myNHDUrw9mHUhXW5MahXSD6v7S1DUiGrqHXHwJs6",
  "key17": "49Aq1vqVdkA8x7ftQEpnwTkgj2637fsiA8e1dh5sSdc4ttNUhj4E3Ge9msDCgN3b7NGQmjCJdLPJxfqWwSCjPs96",
  "key18": "4ALGusKHGnscMDnyXDMmu5C3zJCWQXT8iUHZ2h8sBAY1V35kdiF9RW4AL63RrmgY2JZkdg833cegMkhUPQT7LRdW",
  "key19": "oniP5L4ReNHWdep22vPBqMhV2ZfrKLYSNCtAB52JBX485ucRBUtnmiJqAi8E4NAgSaYaQX1fGZqQcAn1NGaAnS7",
  "key20": "P7UqNcgyrHHTq7ytpwsgobgfH3FVavB7dRvi9DwDkYdbTqoacKHoXiuqGBX8Ke2cdmnDZVhpLsns4zWkhJrNYe1",
  "key21": "43cYKNFrRTsvuzjinX61LfUnXMFFcVsyBKRRcrYCPfneXBaxyEizX7dF9v1DjePVNRC1843RTcMQjCHGMZ6f8R8u",
  "key22": "4d19tz72NxdwFtcjU8Vq3ELwobpQooz4T9aQsBj9dG3GE22rCRQrKvaCz5XH9KTyfuMUPBK28AEocx9s9kDCw6Rc",
  "key23": "vSUWRC8nkmokbs9WbeK52gWw5eMLTXkq9t4FvDQLrBc458VnXNZhzG7BzPmmc8vKvruBighFUjixATHbd947cy8",
  "key24": "4uRKrxC1X3zgZB1wpno6MW3JQ15SFAqpqH3Kk2v22zVeudGZbd6jLch713n4r37nsdkEjSL2P2C1a79GFTJi2DXS",
  "key25": "nJSCrLFZdpXjDRZMKncGfSoXh9ALge2WPDBp7YZMMqwRF5z52m7ypThL6kwEdtc9uaayiu4YGVZt7BcGMHVDoh1",
  "key26": "2wZspsWPoqyZ3jhwmmBouZrqYAeyWXTj8dLAKVSaiWGEG7LzwHcoVevUfudWywJep8t9adocbatT5K7XFyKigo3T",
  "key27": "49fUHh9BT1t5vzm4FRxhMiRfi3tiqUVGjK3o7fhgEP8fNTNmiXRxFz1PrPUybuHZUcpUY5P3zgyLfjPSx7YL1DME",
  "key28": "5iiQMFwfK8NHp8yszd5eGb7GxXvFdskAq9b6tzyrmWRKWv4cqStt7MBgAznbT21rRWjxF8omoPkgfjWpaFUACsvC",
  "key29": "HwkmGnE1kcGeFZChJwsg9hMna3Dje553u4MwSf3qag7pnLbwDzRwURXMJc8Lkxs646WhjAvPN8Yi6ggrzcuHu6h",
  "key30": "2qGCMonTt7rnddWKBso9QRfBHtgrjGXqPyosAewpS58mKW4enc8oZcnj65hsw8Ah7q2U2a2hj6jkENsHhedsMtrj",
  "key31": "5ExpHp4pySiy7B37TybQNRcjN7o2R6KoHtmv9JLxG1WYYRUcHq5KX6CZ71kfPomhfjv6uSFjWr2zxbvf8BLhyUnh",
  "key32": "5tKr8FuiEn4xQ6Z4tcUVtGHxcs2aFU4QJ3F77HEwhzHiDdVYZfTkjtwbHpEUCwD5qJtNQHmwaWcWn5z7oCLEQQrk",
  "key33": "4T4fdjD97wfgLJXBMQN7npJf6oU4N5yeHEyBiN7Zct1zmDREm26Xegu4yYtgr6fouo9cUvdgr3QLfjTJ1GEPkYMd",
  "key34": "3cYzNtyTQHGC5Hx42fuWXrykkFGUxggeXrPgqydrmmdgJSMSttyLNj7NPK1njQuGLePRKxCDUWZWp1WybBzw6B35",
  "key35": "uQCPfoQGbv7E6sq6BcbnD1JHuwsERAE8kuy3G65MDZ37a2K7LVgJX94U3W8SD7Nu5JixSoEtzsfjYkHcLSnv7uT"
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
