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
    "3y96RuggTrvgcwTYYNeHYWyeVn4ytEb3SwjVt7jPzAYXCHN1aqbun5hFUXtHNF2F12vCwFaNoY5WNzQC2dWQKSwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7WAS9BhT7MARMYigbH8tMvd4u1Xx52DSYQvyf79ABQ4n9PrhNFxkbL568Gg16qdHnyrcPvp8emGf9qdVYStTMVq",
  "key1": "CPsBEaLVmUCWdDmNQfDcT8nQR3nuyXNwubiRgbjES4Gz4sHHRgj5phYqxUHUihU5eiCkAU8m3EcyWh8Qykt4mJw",
  "key2": "RyGyYPp5twEC9ZjZuaaxA8To2WmrNhunegBEAMyHBPFP2xmotkgtbGGNr8dyvQexghgiB9E6V6iJbQVjA9s85u3",
  "key3": "63vK98hu5m4rksmLF9yNGp7YzCL1wRncp56CKs6fRRasWoknUrKEbDT6u8YvbqC24BxeDditnVQQPwedkmJSSk9T",
  "key4": "2RKN7s2UXYdvwMpXM86GbhmyrG5ko58VKGBHAgfNpaFfdPjq9mf2WmCG84rvv5H6mVzbs7TADvwBgHQDpsGecQww",
  "key5": "RvDLQHPQmBCC3GFNUzwbAzKYgXQV3WiXjiKRAHPZbmXBvKFEHvKnVPrH9spACBnt8ApLsVtHdUQ9DZD6G2kPgaH",
  "key6": "2jHYMBGS9vrvoUYwdh3hncoUtRBZuc7q5FcTDaxLBNNNKmonxtA3CQrydm7m2tCz9pitMuBcQQJrEt5eCU2mQTmf",
  "key7": "2TxQSBe9cAkweC6HdGSieDYDCzPubYXoRbEPp6t1vwrASBJp1NJXtcq3ktR8bFMSbKvK78g57aWx4Xbrahhc7JJC",
  "key8": "2Kap5m1PF2YUtPapihHsqRQh62pt9Lvy3cFB7ih6BtZyPyifds2jyAvLn3mWWQaDZPEnexACxY6EZGTxBxHEQQBX",
  "key9": "2f4g5mqesCK6fg5CnePdTL7rNfk5C9tbcFkdLf4wJJAfWp33Pzu3KbXy5STiuyRFgkwG7bJLfcVYnpJSjqRxdvLh",
  "key10": "3ZmmdpAy6jHRf2c49w6poNCqoFPCknM6bY5ybC4R4LfzRyQtTs4eNWW2FhAtBnnLsM8zNk9tHDJwfeM2HxU7kPmQ",
  "key11": "3j97jhvY5BJW6AaUGHWyK4gyNKeSMprZeQH32zgKwhpYdwePsL2bk1ejGivHFLHrAsgeL3MLxP5PH4LvWAJcMh9v",
  "key12": "4pRJ4cuFZ7F6QuorXcS35uWJk5owxC2a1GyMKPUT1A2cxBBYzoiM8weLp5JcD3V51H2oStMJB9si3A2YVJcpBkWv",
  "key13": "3sCGavHcfYoaJZ1KjzACtRTHuujgShmKybCHK1FUqUDTJtPZu3XRYQNeP5mzYg8PJCZLbcHQWUtcPUKWKsv8So4L",
  "key14": "4SBzn6dVjMgQ8szQZAh4VQh1oUeAFzHLpu58EwfQTVLPq8eKPL4UBH8pEqt7qEPkWhwDwZhg5P6gn5SSQkxDouRY",
  "key15": "4nsYDPMCpJrQwgr5XMoDuCsow62xjNqD4miGuE53Evd8R3zPoTo5HBjgWJ1Z8gHff7g3kxmdj5pcmwsSixZ2Lf3m",
  "key16": "2FVjNj7KAjR8Tou3xWkHGQHBKey5u42Pjz5vHijqoBXHmM5Eno2dvaJyGJ6pXfr17qDRMNw8v95wLcpAK5Zo4BbS",
  "key17": "EryroymUZiZUmte1mBBkrMEkt5ckPoZGHzTVh59wZ6b1DahaHBaCU1XYL5Pk1okweRUSFT88ifDNHh72vpcyFyw",
  "key18": "3CNGhcsf3GQGKkuB68RK6dPUVdCeNo8L3Jcf4SS3X2pJv1T7D8WksvUkso1byGijoLVMMuViA5DHG8encDZSM87Y",
  "key19": "4jqyTbccjV85i73apdT6NaYnVNLV9AeERhLriChxRZY8mErw99STn1zGeXRi26fWKGG7aZH57xDPaMfjZ3DQ3Rr",
  "key20": "2PPpYXbtjGqZCxsC2ZUPADpirqsMv6QmTX8XG2213HE3WKQbbVs2CmwPApHjDw9hziELEgmMp8Tr7RX4ah9Q39i",
  "key21": "bDoBQ91wVxcuA2SNzns4utmCztVpCpyhDHJQhvczYqzQCwsf8NQuyU6DzxX9FPL1d84yNSncCH1R1Hu1cUDYSF7",
  "key22": "2nD7TuqMr6gZEgYhcwTZ4iCusu9P9bm6brb3QvpKxcMRDtSdDz6HvfnbUgmFDUFrpz2N7t6gr5zzKHwWAcyfWdSA",
  "key23": "5fiVUgjQzQck5KyE985s8vEz51G6PNZeJpWBZNq3LgBaTk5nUdvP51Udo7zibWmx7NFv6YkeJzWkGNtFhmB97Jb8",
  "key24": "2Wa5qGzPeGvz6hsgKCp4BZemrxXwoMwvZ2fp1cxR3EUXdfhejp4egAmFnnJXyJpFXedtft2iCzXbY6yqovVKz21u",
  "key25": "453R5j57KWLdpYp6WTruXBGpguoL6Jon7XCMj7SBYnnVD928wUWP4dSHYs4T5A4hY2ztnPivTPmVJVhJaBdEq5dx",
  "key26": "4P4fdX8EYK2ijtsmLRXXv68S8nL2Qo8NjtaSYcZ69CjZRZ2J5xf1d8nBmxVsXH87gkwsjL1bNUKcSbFY8HLiR41Z",
  "key27": "pVvQrge5LYZ1VBPLusLQcx6ndyxpCeF4QBUbiP6T876kVVkfx2LWdYjHiMyQsNUtnPLswAj4V2kScAecGJHqmK1",
  "key28": "2UCN8FXS56MrXgEuSz5Kex4MzayBtwpJsrnWhxpbaRXmgVkxJPLPvaY6sFP9nW1awr2qYSMwtf1dcknRMrhiQ5W9",
  "key29": "5dUeW1iV1aFzUPgnBu5wF9C6h2QC4mCPtbscuY9mSNygRc3uCyFZcVKhrLvAmHBvdrVucLQd9uuhnMvUphLWUtDk",
  "key30": "5CniD6YgJ38kZREfYRHxydptu5xBtVbgAG8j7pPGfDRx6Ho4wwdLy9KT7GKn4FVDQ1sHyHvhKxi5NAseAe6XvmPu",
  "key31": "4t4ToQpgSvJ6VVSV5trRHj5S7N4bj1ngHwegGGoWfXHtxmbtC5YKb7FsZVpsghDd8H1EBXme8cTfrq4GTKvEqBQn",
  "key32": "4NwpVFnkUTpZasVdEGXMc7FxMtteqkssPnhYTMCtWr58dWdpuwLQhF8SZzBLkjATzM2pYbE3chKTnn4V8pQeUiR6",
  "key33": "4NtikJRckKfjMYaxsSjD5vijXZUkh4yzXdRBWQQkKqiyxxW66nKYMwk943figqBQTVVEByB6CCrGjDGz6uU92hwz",
  "key34": "4hDQMenLELQ7o9BRg7hUTzVy8cMLT2x4iEv2kwgDBLS76z6PFiE1yPXpy9rvxUUFYxbq424osFY41o9khBTdRb1Z",
  "key35": "LhCwEZuqDnwBgEEBjRfQAZ8kqznWK2afnLoTK2HUEiU6PS5UUJUdTMvo3LqwoYgfx3NsZtgb83CG9GAR4qynTGP",
  "key36": "4pgVfJpBz6Cvj7h2zjHWn8Uk7FonTfuE4qDDKgLr1bZhv8tockFPDXFicZHDnQBsTsUdH2SoeCmNWaTdhuVKTic7",
  "key37": "2aKqE5xFAStbr1SkkFSjThwWC4SPfr8Tz2BBMpRi9BLmW53WQUgSf6mR8ZfzGcebFQwpKEKmm9xgFFcWQXhkGXCp",
  "key38": "577AbzbJxqtyDjUpymYwcvXTBSAKamGUHCCGdmDgkWnT3r2vZ9gvLLS4UT5ynm16XJaMSqJcX9rsEnZJi7RFFoha",
  "key39": "4E7rE8ASiNtqbMQo1D6iiXz3LzqfsELveBrAkifsCdobAQ6HZfC75wpNw11vg1wL3SScgz5kaNPw5srYPzKhZvHN",
  "key40": "4J2M7tqCDRK8qKQJdKCVGUf8762V5RKZapVEheuM6cBtRoyFtrPKvXT9fxx89YZjSzmMnsye1xzng2Rebyovrx5u",
  "key41": "47wepEvv9Ve9u2rPFqAGxkq9N9b8BUKArYGLSYkZdoWtk4nHYhxdwPeBWCoKR6sLX1i39PyptPUf8Fs9MAvB6C8s"
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
