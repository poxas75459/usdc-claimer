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
    "WKCS2aToqJCQzi5Uzb4s8PRkKPUXKtL6yxk3A4zb8vhy7f8KPYqb4bK4RYLBgLkwGEqF14rRN8L81aAMGYAXgQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cdBJxz1GuTPNzjuCQs9t1PehtjGKZXKSb9qudCbjuaA9otyck5cJWTZ25y4tuej4dj6t83avVhVWnC8Fmtsutt7",
  "key1": "5d6bfLnGrvXvXEZqyAAtsKY4SLpAJdUqJY3U534zEuXLfGRZjYut4Uw7ai1ho1Qyxe2mMJHgfS3ukKgPbzA9rcQD",
  "key2": "2PJw9wsjLURs26i4W2aMarDSDVUxTujPGikJSaCVzq6bJkZfVRLtDtCu57JY4wMTDsFtPfPpWvWyN9hcPdCVkaHw",
  "key3": "Z36GBYDtzP6st5irdsydgzzFt9HcUzqQwgPwBBubg3y1ksFJe6WowdRTwNRpo3moyPVjNA74vwBt8vURuNZ36no",
  "key4": "ruc2uRViwAp9euyx7pT5kV1Hmm7eikgNh4XRwcAdUR9KdK38XUnx8ELy53HH2kNuoVdLYbmR8NVpb7jSvBorG5o",
  "key5": "2iFSotBNYdUtdFiLxZpgC43zSzmvwXZNYaPeYzPYpiZu3sGx7CbxhjYPpu6i97Vtk1KiJU3tkQ8ovaHq9QGSJxMv",
  "key6": "4ZYwBVG95P3DAQjtCFJHeN2sv6Ar6Wi6Es1RpwXKrqrLRMZLwvL1twtiYzDq8zVhK8B73UmbnVpfNeX5gAwdZKE3",
  "key7": "V9iUobuG4svWBe4WA88Z7Se2Xc21YCFsn51uDv9Bmw8mxzUoVaoirwE6sxv2T2i8aHANQdHpVkeBb1cjK2FTZd7",
  "key8": "539acWWD1ZgZmxF3LcEgsRQa1bCRMo5rsNHPNBttgU1sKa8DMeJQUQxWa9VYZTGsFt4V2u9eU49RMZxjNZvrfjTo",
  "key9": "3BPaqZtTmu6WVPAf3cJBEKnf5hw3G1jBqYJu5ZwjUhbS4ad3AerxwcTLB2LZR4Yu4DkajDcYEXLyVxn3d4X611PF",
  "key10": "2FH5fu3xsXUdniphjC9RRC4id7a9ENUjKk98JqdyZx7UAQKS4TJXrgCzgT4ToXzhhPiSCLAGJb3cLrRrhctyRDUZ",
  "key11": "4Xw2AvkqD6xR6WZu3z1U7pBtfe1vsgt9CddLfNx58dfcSxFEfjzHZQaWNYmaSNC9jWJCZnTRAHsb5QtyWyStk3BC",
  "key12": "2mkwtKYcKSLRRsQ6cYg8MRRhUhtYnLs7ihC9f1uA6mCqFW8EPp7jc1exuUmNSQbTTgzQuQhjj3e5z45hnxLeQz2p",
  "key13": "sHPQU6ERUbz7wzmG5ktH86NW6Qc2vgQuEQ8HU4UaWnWmrEZCQFijfzzZSXxZkoLNGVyDTGVxcfkNTVyxk4hBQ76",
  "key14": "5UAdTPRyXxaqeU9wzBHdRP9SswoFKf41GvZuAzh6o9kssFnFvuvKdgbQNpJHmMpzqmTuWzwrvybjgk7gqmbLUGKA",
  "key15": "5GLbTejwGhccXYbFwuyhj3wAiWRenJJNRoG6rUNszwzfJC9FKYpoVRbdKEHEZ1FL4WjmcoKw1PQJvNjFyvJBKy9",
  "key16": "5H3fqfG9BBhQswN218jDke8bNbMebVZCjSvqFs8E93MjEYze2GuULiSsiizbS4ARHVrRg7ygzTYrdNWDfWnrveqT",
  "key17": "2fPmSuaPzWDu8AKPrAsc4woQqmSTNbVSP7verTgdCrKTLW4rgWTccGa4YgSJghG7ProeYPH6w7WyTYY8vjNxDNDu",
  "key18": "5JotDJ6TW5wjL4QS4Ma2WAsVZHk867sqnKC71wGzNr1AmPzcKE8XX4kiAdDTHxbafj7mHxRoLW8sLixxN5YxsYUC",
  "key19": "4NRhsJW1Vk3eeccsa9WyrJbYEMzGWdWrWGnissPGBeDAe3tfWNU3Tid1fyQZXvYFTU44xgS99EKR1jm49GuLiZ9B",
  "key20": "4we6tpMohLdmhwAog8dMVmtFQxGHtVeWEWqLeFfDg5jeikbrJv8V5icDWkMGubkTfvfiPhaByJWzuSrpKqJgDe6Q",
  "key21": "wUNvkpNcN4bnStyYRadWnHpo751zrbLZ6c3rfkp2g6Aox6ASaJgVwk3wNgWAEngYPk1ieKDadXXA1zSydP4juum",
  "key22": "5SQo8LSqJPcB95D6PtKWVTuVoAzbQZ82YomMVJ7mVM26uiURsA79W7j5m1zSWuGNjmsGtU3jdciANXvdRsdxj6KF",
  "key23": "5Jip5oPJsJKsw8b6jJzzcpeBmk4k8Ggxp71uXApHkU8ykx3wodhFqrzxaBkKmkBy5n47Jg5Gs7vHEz8ih2AqErdp",
  "key24": "3jxNY49jpBrraYdCZygJm7soCxm1Q5CPdCVMvUxqDuY8hToNeLRu1Z1HDNiejpZtTAi2ceyzfrTKASaReVXB82Sb",
  "key25": "4cXAqwavA1kLfaYNNGCirgS2txAdevTM4pqZYLU666wPd68eJiEDbDHVoxmsEW6uE5MDRPfxZ31BgNzJqp1WbxNK",
  "key26": "3NXPVv8ZyLMWeqeMfFDV78KdxXRpYfLL7rVfBDtTr5Mp7u2V6TxGLtW1i9c4CuZZZJxcNWpoqLwP13Y9PJpxHpWq",
  "key27": "5V5UFkjs2p5CzDyJpJg7ogwvbjktmpQccBgkaHyfx3PiXcZqPyB975P6ebmDBS6a1YgjXffSpgNNNFgY6u86A4gg",
  "key28": "XGw4W2QRPsGrStqY92ExTRQp1QnTajXi3AMkz3EcQV5yB1JYrUjEHvTJxvqjtvyKbeuVSzEKjuKkgWQihs5Vp3N",
  "key29": "4VCFw8Z5CCUC3T4x8A4JJEG4bexftnaTbPPk3r2THsvw61YVx1tV8sZmXbqdFDnHFyzjnXEiZhWEtD76M6mHEHqn",
  "key30": "2poZuSeLwR4NUkQgbomojpkuCQZD8bnki9vtx4soqjeftscN4Lsoi15fRz1V15GavSrdFcMxrgqycsZzzSyoyh1D",
  "key31": "rH4zva7abZa4vt6BswjUE4tZq4z1rEHAYnFj42qGARq6sbs1boocyL9pyhv2VpHrUMzQcYKBkYZeDmRuDdM5MqN",
  "key32": "htwKvEQpjM6THWXuCFQJr2NeYX6Bx3YhBRQCCfsJdRQLCPTkbRAZZWR1uE23wsvH3WSbo74qaksyiiYH1J3g97c",
  "key33": "gR6uxShbF22xy3LL3jQ4HjSC7f9fpSEzWsKNzobLUZTx1Z3mPg3VMQ2pULhcv4kT6pssuCHiuGWsDYuBPJ8Zggm",
  "key34": "5tGAdo6MtfkGaL6P6LmxKZxsfwxVzHuSDzfJMv4DzJhwV6uHzASibT8PJutqTxCgbLKw2eXzdWrfYY8TWdYJ8oUt",
  "key35": "5oWVF9ER8iN8URySg6YSWx9PX3pi83C4pX9PNMUYNTBKUFym5aZr5E3XU8aoHRmVaxTUkA7pCy9q6hVBTwLatX6P",
  "key36": "5Dt7hV1jr26myyjLoA2mpmEjChV6qTbisvrEQc2tf6oaNbSvkTtfDhjeBFeBZLdj5Nhi7qqBLu7j8f7ukWrVchrT",
  "key37": "XC726pHdHM9i4mYsMSQZCyCNC4J9sRypJ6TWQM24NFG33h9gkUWznKeeKD3HUc8gNsVX1p3G9i5WZ9o3ehGvEsM",
  "key38": "SaxNroXTii7dHDXDBbfAh4WmPo2YYf2YFvDdbDZESghjqWctYpaNvv5UMCDycECJmJZAmg4Urxj4NtRU4sAht1V",
  "key39": "4fEqwV1ueH1gQSydGXoaB4y4KdZobmdUaWi4BwrTZ8TVf8TZUHpN9YZEA9C6TLYhCNnueJqNrFcp8vbEvmqnfawQ",
  "key40": "gx9a4PtL8DZfZYjTozS23QM3T8MbpAhL9XFHHYANw71WzxVwN2qY5FLCpfr8LHqc27SA9ckXdxUtYTmgBDXaV54",
  "key41": "39YuKzdtcWZLTn3ngf1gW247kWh6jmv8igzKnBPfpu6KeEo9eLZmz1YkFrzUJWioFiyXvVbgFTPqcVk2soxiJTBf",
  "key42": "4k8y8L3zF8QoXAfrQ4PAhCTq5tyGu7PKZSKU1S1RXD4i2ssyWTMy284fb57EsSForwpQ1kgLzB9MEZfmyrDihV3E",
  "key43": "5R9fHPtVh1tedd5ziUzYoV6Z2oBiJgXSAnHQFf3h7nkMbr1UVCnNGJwHB3rPnuyeocFgmrjeT7QpR4Bsk6hfesg8",
  "key44": "478nKkCbb4sRzBEu5nT9vdne16mGkALufLMmvEEg84f8fw9tf6pGcZ6cqDRv3Cr6VSFxS5wmZBeCeWULQ3BxS9oK",
  "key45": "599UkVFmRGRKWAfn1D1vixD675C2Rkyp1jx7tnejr41ji9E28v9AtTwFVCmhSKFNFLE4tn6FahQrxUNpBH6pHPue",
  "key46": "3GmF8TcSYj4HH7aAUmfjywivikRRoH68CC8nymoWuqLm3ZQG39AyRpyG5dFY6wPkLSJuET2iXTtdfQUC6Mw2o65D",
  "key47": "YkKB2zjNcmmnbpb9r2jLPoqW5g2utFvEAMAaWFz9nJ72otk69EXLMDmNYsFRfLVmC5JUWYKz4TrogXCEq3pm16z",
  "key48": "65dFozEtwj1Z19e7gysXCA7YZAQhHRBLmJFN6vtTfmWF5GZmizeNTT7rgu2PsAq7UMkD5LV1ynbzFk87PqQPJajh",
  "key49": "3ierVn4aZUrvRi72VwCFfhYGfQYsR3dgRDLf3X8rsd7ccApojPNooEpJgRYt5Yq5YehLCxyGPbPNu4BA26cCrX7a"
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
