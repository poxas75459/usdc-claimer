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
    "2fPjARVC2KSKvmhisprYPTEVj2MW5stoBxbLzPp2tJDmW6afsrUkKgCz9fWPCUGVYW6gmzp2d4sMS2juqm8LGXaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41XoxmDKwEYgzJNunLqfv5PgqPrZpnE3nmLPdzuPqZN5rPQ75CmKKMAzRR83nn6DvcBiRrBVnWLsnVZm5QJMH1vr",
  "key1": "4xHCSUErZUwuNLm8Md6nvqsNCpiDzWYZhohRwZPzipWcF6DhZSbqwqrs6DyRAwwHoHH3SL8qY4ZMBL1fkrDseXFB",
  "key2": "2M3KrbYAHRwyHhsTQ7CDT1cSMSFzjmeQGKUd5tui1P9qAAay8onPdVd4giGJifHydEajNFdugPaMJBGDDhui7ro4",
  "key3": "2sMXBzRKFGyzsWreGykTigT4MVaKbB4iUyZW2k2KPHMafF74SevAQcgRS8JV4k6ZhNZnm9MExY4f9qVYoqVNy5jF",
  "key4": "4CH5WFntvFae3nCgLpnbHRQHnUEwQjpwfEQ1717dsPPQD1mtwG8jnGVA9rXjb1dJXiRnvAGq6AkXjo5ziFycidHi",
  "key5": "5SNJ5oM1U6bq1WVAaikEfxmsv5xBqCN8bNziNuJp8otXX5JhuWmtCSWGLBVDVRNM4YszxtLsFfSxsmA5vD5AYhMm",
  "key6": "3YUrr3YFGkEpF5AqigTuAPXCYopW6EwPrtmDq1xDUa2WFsdmy45nXa2YisqrRiBXTTWYCEArMddrUMyaAUoAL72c",
  "key7": "4rCz7K1NJvFPytWXmm3k8gVSzJ21K6oTs3usCd4r91XVkZDJw3rbKsbEBBY5d8ZfJp3SLmDr4fuiQWPCzArVhvfq",
  "key8": "5Wbg1tinNb12YPsVkjFeJbzFnPNVyZT9c7b6xjJiknsY42MbBpGpDhSdwSki7DftWw22DB3PobAywUL6DLpAtLrX",
  "key9": "4TpSkBKLhoXCJA8dgrxwa8cdVKWTBXRDFvwv59GDQMHhKLoFbZkn6RiqUSuwe8dWn1FDsTfaLknGsGk45KRykyWw",
  "key10": "kxAM78ixcGCVpSdAsUhu3q149EBQZLRi2mieNt1iMeNvpDS6gnK3zfXMRyd2c8fkAvMDSWEpXGQ55iZn1tWn6Jk",
  "key11": "5bJXC9kp98wF7brbdoekkonXUWfqg7QkrqfinPhSV3VqpN9Q6VJce2PQ67snDVEzZNwgb8pimbM77uPGuQdQrgeA",
  "key12": "4qtWiEGavK3SzGUTHx111UEovDa3fomFwZsr8MhM5NhaYXTzfpLi3zi7sY7ZfRXNtTXDZ4VqwoEbC8APBjs68Zix",
  "key13": "25eDG4aQ3GDo6APfqYceHxCVkHP8tY924avE1DVMBVEeXCJ9Niv5KRwdAecUjSyrRQkCAgkTSuXWJ1Z36TxZzaJa",
  "key14": "41GDsmkoZu9FafEnVnEfyNFthu11dyqekG2NPDGCukG9EgsWuhzRBkzPTrCZJy5qi5vVrxd8yWFcubsssuPderb5",
  "key15": "5ZiQXb5LWYhfNkRsgnH1SKChLa4Y4h9175JF8AmT7RekekTtetFVso8fmieJyv4bfgGHp4wRALbNBh9hQmPq8XbM",
  "key16": "3g4pN9kx2Rqq8DGswBKha48X9dcyoLnGQgMgZxMEBDJ2yKqjzixsTSpCju5yeCH1dUznRFeivYn9mHQRTyefHBkb",
  "key17": "uXU23gK3XSp2NRL8vhRRnupit8btyts3iuZM2WrWEZapR2uQjwNRcCsPP3GeEy2CbpSKrxZBoKv7S75WMxT8dUt",
  "key18": "2cTUX5C7rUn8qwJqkFZWA1qozEGVnLdjzDaCfqEe58UD1sgU7N3tT2eTP3HXeXGtLKzo1VQRwocto8qrwnXvEX1b",
  "key19": "5UsJiBmHgXGL9Jm8FzA9dmg2G4wpowzuGyA1GPf2SBFS5bjfN99nkLUMM9ob7L6QomUjHkRSKzwWsHUvgJUh8Zew",
  "key20": "4v3XT133ytumvYMmXBh6TEsghV96chvs9LqqekZ44X3J8w7gk6zqnfCZkxsrJiKBwbA4t3yxXMvy1BQGNdDMLnEf",
  "key21": "5yjxg4UdLHTmf2mJsknNSLz2X8yNsUmwpwsLc53Vvtw2YhRdZkpT1oUQoeonGzvH9A43e5H9ZzbfCBZfq7Tc5DS5",
  "key22": "5BEt2fkeTytZbx5rTau8X5o2bDDqnjKpDDCmGptDumHmdL4NzH6mGh1j7RnKLmiU4Aho9U1RRv9AbMHP3cy1iU9i",
  "key23": "57jpQhpznNQGecKiXUqgiU4RYu3XdtshQCcPscELMH8ZxfxSnHfALkqbNwi7h9m9tCanBJUJ7YDJe9WMyPQ73STd",
  "key24": "63PdBfUyWpxKQTnDGsw4kPgizgA71bs2pZUvxYhqwmj4ZHeCSjwQ7tsSK5iZpimLxNBsasCDf1yTgdNa8cxPMvVb",
  "key25": "3R4B5L9hc2kfznpDhMbjezhJgqxnMrmXZ46Uju5BK77NjRaozKACKaqriG4b5GHomHexg1KmHnV8kruWgxXHbJ3D",
  "key26": "3ECQeWnMsBSdvm1VWf8pjcpQpxBpQYYXxv47JDe7Sp17NqDWmKLKLY287bmmrfe7tbptbGCGhz6mwKSa3fG2aMSi",
  "key27": "4ZcsYRHtLf1sMXKWudY5HKfL2efdufNnYv8nzWSsAtmnut2TZMwUHFURbdzU9UfK377xL7krwvvML1t56XTpTHRa",
  "key28": "5vPr9Sk4rvk7VndgC7jNduUeTitwzLaYQbnVvjExMnFWHFwp5iQ7Lu4zUmPirPUH7keaC4Po9Evyg1xx7TdEYW51",
  "key29": "47GiLBkWHyEXiKVM3xvq9mKxx9pFueDyiKHQ3cRjtLQWaLojNFAZNHTmDmCqKtd2B278xQwJYTMfcowQXicChq5i",
  "key30": "4AudBYBQGAmacmTasBbYoX9QnxvxqFgWj32YtSiVtUoBfiJeAPPQiEidfdZeg37edT3d4i4TdX9g88oWUDdojdEH",
  "key31": "2ataNVNfMJ64CscvvaGx4RLJ7o6UC7cYBBquFe8E9rHY3DyLEYFbDLoxYx4mN46vAJdx92gWrT7Hcou4ajdXcw95",
  "key32": "4rZvhvBMBrTr59RxhHJGUNHaabbk5dK6hz69c7oVC57ieJwZYCkxVmFAZziH7HyAXnyQBown71h7GjFinfgNvH91",
  "key33": "3UHH17TKWPfLuL1sks25VDjogpDvDUh1NuvGyxnB4fmvTWtK6meYnbBxGas1GRb11ww9gARQYZphqcXJGFeoPzyW",
  "key34": "5mD6afQYqKhUipC7wmGgJcy9g21gQ3xLe6PM7AHVk5NQwTgfuDhUEvicLDf4v7ZRWGXEraSxyya3BLZzTzEFJQVW",
  "key35": "fh9xrAwyQ74k6guopD9rLEwQ8vwAHkeRFuBKtGiT1LiaM2EaejcrzjmDSZTsHJagyUToq7Rg3sZWuEd6k4rZmTq",
  "key36": "2FEbri33Bqx7r9GZpyob8Wywh9obwjMpwcjm4pHMHeL7iZUuy7u88D1MVeyvFx4ino5r4Z42wYdkVKpEEYVF51zP"
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
