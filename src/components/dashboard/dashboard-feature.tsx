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
    "57EsTmvz3UKQCjzAVHhstNtaDSk8Z4Yj1CA3hQVx2JVk6tdA4BXsa93wV1f2zYaptDN9W7hckpYkaSV7RepuNViq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TXXyQxPXDZCRKELetRD4JbFPQdn9XJdrzszqKigrS31nkz5bYtGemoBKudX6nQTxtjahd55keMwxA8BfP8Kxjtg",
  "key1": "418ivg7ywAdW4m4MQNUXrUDPY4zK9RcSXoL5rHEybFMizN2syDgqm7ET7e7kX4wH3nCaiQ3hNszGCh4PQraE4mNy",
  "key2": "2LorDLKWEe6RvfzrwuowmmfgNxjCK3AnGiYwvPrQTXomcjSGCJeqdGBVxTNH1dgsJ2VhpSE7DV6UuA6SXtVatwMS",
  "key3": "44go7bCoALUR6vEDiNx4rN6p5YZBMkSEJtiqNFMkH334mW7L4GRNPnybuT54t1Dd5sCWUHJg81JSTaTU872PLrYK",
  "key4": "5JtaNGmRYFH5jDuNQGQWKnyXCqiBtx7zWUMv3aoAV2saJ9Jp1yxWR5T596aPz5WsiRvyshA7UqTXU18EVNQ9cUHZ",
  "key5": "yyNrxXkCQSo2ig8kUxG2SEEimkNopbyzk9bQHgJacJvvfqoUcBGm8F3McSNAZ99s244SkQ8CkivKaDuLdg1mNQp",
  "key6": "3o4B6jDWVcEGxAPfHsSoMaseRApqBCftS9Ca1C3o51cscNKmhqAeCcfWnBDHXS8Hx7JrPR2egVYBVBMDgKmw7WEy",
  "key7": "8xwwXhnW2eWT3oNavtYraGCvTQK2L7tNrYPkhw65B63ud6EUkBtyZGPm9dHjWUK9NYZHCA8bN4SiwoZtq9b7gFP",
  "key8": "55AdFMupV6tyhBjLbLBJqG2phE959EgBGPrGmhMkBZtJAw1zaw74MoDmhNDGfPP8GeCGQTFucLsXw98gxPZPJq4s",
  "key9": "3zBtM6hBecdzSnhibfRJqabQ4SbYzw38wwYbKecuxeRT8Sc7dc1Z1pF1fKMEDjXBN45HZPaeGFggnhWvYgUW564y",
  "key10": "3EGB1DkCtuRnTCzJNCYtPuJofuwa868sMUA2mfLjRC2tJwKnepyDd9RZ4x2Ak8mjHtze86Aqg4tSoR3PPrrpAdss",
  "key11": "59kjPxLR6ik6qzkMz5npEYCCUBKrLNGhEiw5Zm98GncSe15zCMUDTh3at1k7XUi5bGP9JYa8fGRixr6EJDdmvSrJ",
  "key12": "2trJMZXUJbLWsZSA2SHB2882SMX9CqmUN2q6eUFrN5eW7QzubTPZ48udYjrDbNpTYmqBc4NEREUWK8hNBe9LPQez",
  "key13": "3Hb7VpcJuB7QDr9gqCFEFLJz3tkVzZtrU85eBN9kiXjt2kQejk1mdhtP3fW9gF1G4vQv1RW2zagvLVTYAPQ9XHow",
  "key14": "PqfmmNQ5pbNYx3SjxzqaxGT2Z512RPGQa9FVNrPb3hSQufotcaDtQYF793jXFomSqs5Rbvn9ksEoYyRk5Y9SAaV",
  "key15": "M4DJmMWTLR9EZzM8ewKaD8TBKYeabfpM6CNjN85A6Qndprs11Mr25aJpqgPD2J3ZJehmQGYveBJJ7YX2pE1weaY",
  "key16": "4b5NEfasaGcaUQUU6MFJKsU7bjLxukYGSgYNguA7pCDRYKgiuw5S41PBofRodhy91aTKRKd78cLfdTQqCb4tZUB7",
  "key17": "4k8wY2uTeNhCbAugj1WB1p65RNmoBpEuiEHQ6KR1kKWrZygf2jsbDkMC3YvKQBxtiwD7cTcwwqzQVMj6ErZhDGsH",
  "key18": "5RsZrCJgysiY8zTddoKTurB35PsCgsQ1oFjRKdD8XdyPsybgSzTaz6cWYAg71ZhGGsdEHmPR4Hhz7S8nkwng5kCp",
  "key19": "61FgdJggivnE8r1EiLc6u5yhoDigsYajy51RZtXV8gWEmnnqFEqe8vk8CmvjxeMAKGb5oSmnJwtvC7q4qx7BC2mt",
  "key20": "4Uj7A9YDNHPX7y6GU89cZu78S6ZnuFLUPcWbrpxkPvd5M4vwXsZrmaQ7gQt45zK3qcvuvVas6RktMNEUueb1RwVn",
  "key21": "2VVEf6D6cCXHa8rVuhoNNZuthkFggvPLRPLkZEz51b3Qt3bMpbXsmaibkjv1pRqRj5NYmPbJ4KssjnJKSqMsrxnQ",
  "key22": "2ambzSJgc5tx8MHoAjSn8JuYrmnJwu7Fd7BJMETF2n9yYQDdNiyqVvoAi2BTq1a9HtvrB8LhSHrjDd3EnbcnqiWy",
  "key23": "cprYmwYUGMn5iwENPibVmh1rLkJbKxqdKQo8X3ERYWFwimkkHSt6f3ycn796fVtQxHCBBEqRepg5zkRRseYzVpg",
  "key24": "52rWR2KzZaeXfH84a4px1L1e7N3558LVcED6MGw9UVxkoU498oNES9jX4x2Lu41zCA2U9dF81BFmWuVe3FAK3vxH",
  "key25": "1aATCHv4z7HnqMgjZM7FJ2DkW8b7sbNMQEYaFL2sm7MRPd71f6Xeh3nKuextTE1qwstDFGppWmAYcUodhfYomVh",
  "key26": "3tkqDXyfaAv8YzwjTZsziAH3yrKfmrXwDzBWMGrAeouA13R41haozMyqo7LP4STDzfwAhMMeXcgcRSQWDQHXXDw",
  "key27": "3Aw15ToXnwgfddrUZ6wd9i3i9Lwg5spKPwVMCa5yA82NXUKZ7tN8DcmG1TkUoPqeJEuL41wRBb7zcJsj3LVZGpBT",
  "key28": "4dwU8nShDzQ2GrKH2MHWqUwT5XWJnSMcC9TJ6TMzg4rugttnD3NQsvZL5Tx1U2oEQPC9GsZAYTU3J67iEXebqsMQ",
  "key29": "216icLrXR7Z9t3cMXV49ueroVQ9vFd5cF3Fr7SESHtAnSDdkfXMYn4xL8si5B4aZc3toobwbMH43n9VnEfk5GaKN",
  "key30": "5q78gw4gRg3ovwRWncRqqHDKUxn1j2Zo6ZnGzhgt5Fbepm6pWPT1ncTxypeokk7cjyMsV1qRgAeXVZnLtVyoL6GV",
  "key31": "2bnEKKLavUqgTRbKhZkjxfQvUzmD61t1Ux7s11UXN5fhYQ9ncs3z5Yge4EJM1fTgS68XEjfiWJMeAAzzFUufcpQN",
  "key32": "3vqDngN6VREME4uKLYc6inWXsyx7UwmF1Cr7nSHNGLUip8KaMu9BRF5QURwGZEod3AQj8cRYmYsgtCqz8fcADfUx",
  "key33": "5YphvTYNhTxqoFUzdNDSrGSdChmUGE81nTXuH2bo2TV3VE6tWg79d9TNYAg9PGQqvi4NrtSSPVeaWpzC55vd8Lf5",
  "key34": "3udeqM9JqHHfkhf7jKJdpL2qMBPjP4abn29mb5SqUgbnx18Pthx8uLTvXoiFGiGb5vvWfeg8mo9MZ56U255oyyhS"
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
