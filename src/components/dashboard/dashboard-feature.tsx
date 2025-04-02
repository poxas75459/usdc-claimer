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
    "3cU165emkD7htStiCF3hg6MNCqCkjneh3eweYh63WQ96ERnsiT5HzYoqHtisBrvqLXPtLiaCkUmtEyJze1wpuu2Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8njrjtxWupFF2hM1Gyqt4fo98Qx7HcfH8fKjYH3q4DPQyRabnxHG6xEZ7vcbeeNXMxJy9r95YvxRVXEAHqVLonm",
  "key1": "2DxBUr1aB7vsuTo9Xu72mKePfjPJ9QhkQ3tTZJ5unG5hPEjaaAUkcxunjiuDsrU6d2mJe6Qg6TNnWyXGW75XH6tP",
  "key2": "5mvszAiUeuqeEP2AamW5snhozoQZKoAbSymhoWy92NXz1iSRB1NvgbpzvsdEtyeQwZJ38y79owbaoY3SeT3Y1QdU",
  "key3": "4kQkdoSx5APBgcsxWM9tqTEy64zBtcAGNGSDjfdSTnNrJRhTEfXcdM6Sf5aVqpkPF8ZVErd4QWqNDFy8jip5bLHM",
  "key4": "5YBLs5W3GJUN1jNSSyP49TPg7nkQqYkCiCiaoxsV4id9QPvtEW7aPU73cmDBSj7qfRcsRHt5vdjewGuAkJrkmBJM",
  "key5": "41u1HMDgoZkHWWTarLNafiZqb2BKxyZ5m8LmxDXsfhg6N9bmV5ChiJNbGUEoPCd5fUkmTBW5f2sLHLeNTrnpWqCV",
  "key6": "55QYvRkUfhMUQYzDYroKfGkE2hx6HXUfcayYzwDyB1SdTQyFpCCsMcru7ZQ6VsFKpRQRj3Xe7g9kDBMToXC9FufY",
  "key7": "5QfdRm3T6a7s72orQpxC47rNkzsYCFduk573fkQYACc7evypcvUJfgRHqcAMDru7uB3kinyK1fpi6gq2nMzLh7Bs",
  "key8": "2drQP2ZD1vtq4frAUVBtjW2T59hv15E4enZMxRbyhFZtfj6FSCGjQnf3EBaMLrQsLifv4zTh1QGawStcEHt68tZt",
  "key9": "2DpEkGZpiHtB1MzGM6eApucYcC5g4PSoHxuWawdt8rs3bs8GyZ72oxcvoHSThD3YcESeAnZJconRDiGbYS4LYcrK",
  "key10": "2CNdfNpT21v8RF4sN43KyVpMhqXbhFqW8PVCmXJsVceZmV8BKBu1pT2hHZ8NHdXKn5LTCNaDCV8dhaqEs6SVQ57S",
  "key11": "5co8g2KG9qPP92WL2APcFB1yaR2r5jJSv9sDz9Toe1fCAki1dVs82iTx3sFMLAmY7YCQ3oN7EAjsgALDMKQ7oYGt",
  "key12": "2ewAukxvv2uXqvm7dLBC8Zv3F8nf1KiqHenMvH2prasSgN1JoL2vDgarxWQZAeRv7ZRKTyDgABrZF1fE9sPTNEoc",
  "key13": "5DLTpaoQmaSeyqn4wp83vbpcb4pVng9SouQU7wdpG3dXjhYFeBQF8CzSpn6bDq6XvopfemuE7ytCZ4Z6X6VUpbUu",
  "key14": "2ungwpwELomjNc1XrEqdCAo3tCqAwveSeTzeY7nQHwQyLvhPmoKp3w31iTWwi2nLedcUmV5sbztj9vKULynErda2",
  "key15": "4HDEB1e9LkmjrBPkuW3zkgvV9L1QjqXoLQosVETm8mTjvNK2ox4U19yRhFhUQ7FG3qxEA3yhrd4KdFKhM22eFn25",
  "key16": "64XzwXQ5fccUpKpxxBkV8kVKbFQ864hsiDN2ctJNuXbZtqo8Kt6sLHMEJrgY8eAYXtq6MJUk1Ct2f9uRbUbR19eU",
  "key17": "5vuoUfBzpM6M4Bsxe9PjFSMLbNMsQSWq5UqjmHQzuRppqpZjpBF8VXKpcutqETBEqkt6NWUdDTVF4TUs4eUDRdgg",
  "key18": "245oHd7J1Fa8BxZX1BFhe4BdMF5umkzdvuaUQVSbJqwHuygDH17reHKg4VbE8EAsHEdWdJpfVHYjrtBEaPw2RqLK",
  "key19": "3QmRFKZE8FRdkbKxCf9iS93efQSzBP4HDMo3ttS8fZmkybiMnA9nExCV4RhRBQWB1uWAu9AUPLFHDaJ7sX1USuhT",
  "key20": "3pRVsiECSQPE9s33KYf8ZZtNnAKy99ncbRGvspa4Cbf7rLr3d1xsn32QBttQvUZRWGucJZF8e42c1rWXFmGMJcxy",
  "key21": "odeWarSdqhLByUjotPia96gVUbeMKmmH1EDmvrcBKLqpyfKgZh8j9zQfjATJdoNBUkNay3AUJcvtfMJYZXuofrN",
  "key22": "4AETK8koN4QhEc9XW8Mie1T6EWNJK7AAMTuf6qRDgNYXWyV3RMwDVegSLYDtemUjTBQEXgiZ4cNTGYoKVtpjzcX6",
  "key23": "5FQTLtGRyAXveVTMpx3pwRndcnCbNeNdQKHSdCS656uAusmao3vMQqarj4QTRcMBJRrmrvpprWFAZGn1hNacSy9b",
  "key24": "49LoLRhc4P4Tyt7KsPnVaDXm4ZACwFi7cy32H8pqD7MFibD7wcxdywi56UosUk2GMnHcKjoTdukaVJR7z9L67bc5",
  "key25": "2fNFL6jQTAxQFwMLPhScoGkY9umsGmrBhy1YiZFFg4SojmdJxbgo8jTABFbHTNr5pqru5AAbFDY8guXQTAt6pjRh",
  "key26": "44Vxvdo3MNVUpoMtuReiVQ511EDJsC3dcWt7okAdLxT6iXUCrwoZckVcF1yzUTzgS4n3SwnkjobxpLEEaGsTgkAJ",
  "key27": "3eJhKtLKH3Dwbbhp3EN846gWzVPRcrdLf77Vude33vHmwhbsNH8gPjeeVeK2EhBYpE4NLUQQCehayCa1YSZAFAfc",
  "key28": "46YqczUU9nahgZGoxRdxJJdGrnazE3dkP3UkJZX3AgcnFLL4YepyHrxqEW6bSzT3nD49aS8qkhD3DD6kwLqSPgjS",
  "key29": "4tVNo7yPFmqfGN7aSnJ1ggMon6EV2h4bpPfkuVcZTsuneH5mZYKW623vLKuhc2AwE1S7um7T8oZP9eijHYj5Nwen",
  "key30": "DWpTaPGcC6Usnk4zfZ7jVTEcincaDgbaVucJafWMr33bfrcnmDcUS7sXZSYytp6Q3vagC5UV2m3Q9z7oPdccsw1"
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
