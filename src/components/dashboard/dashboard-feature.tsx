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
    "39Tw2kxffyS1uWjxPazPzWENzdivRnMKrWqNLraG2x4VqJF4UtSzrKAH8rppuKpVCPPvgU7K8VgSd5pHynD6Txit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39aDf2YnVfhavi6VU8UwSjQ7ZQR6F6AVf5muiMaqvq44p55tMt8iAvAXYdDAvDpvkrFAxgzaWmeJ7tG6VFtJxcoy",
  "key1": "3QkuNK3nfHYLnfK6JALNQwHxADwEZddxfr8qedY31prFA6pQuhbNRWRtzGqmbZkrUBjAdMWsZZwR1S1Dg6Uhw4hY",
  "key2": "24Uw8Fvyjst5u4ofg1KuCEt2K52HUYYJxaAiGpHW2xsQNtyYvumrH6uYmPG6QJA5G1V8LtV8nE6otameoUtY25U4",
  "key3": "4cUyHxQZDXA7XsXDnw92VTUWh6PqrmX7jdsXGH1AcAPVWxNE6qKTk1yaSS2d9k83kM5m75bF9tZv4vqQdPuPjEzp",
  "key4": "2YQ9R6byccWtaQ9c4WsfmjryVKyojn3FyEpYdBJxRjLttfHVgyNoaQKMm4vcbbYmm9k9CERvN2F1tLDJP8U67YVd",
  "key5": "4hmfLzvMYEUroU23P4vZ8bFnKM3wtxSsBtDDXaDFnU1aAPNwCKqNoXFLaAf6nVfZMANtjURXaNuWn4oGsZxK1oa6",
  "key6": "3Gx3rJZwNRr8DTCf5XdnCChFWLYXr3qbKXm85k43Nrs315WEQYAGWjhtErtuhETGyHGKgxgqybHSgzfPsXnBCKri",
  "key7": "Q5ehzQUof4XyX7ArFGKNy68e3HSfdAU2NYgVWQD51g86nDsk6STxbEaPMTawRHdamhBTFvBEXebK2LDRz4j1TBc",
  "key8": "um6UYJu4aAkTbaDR3KPTAcgkfiwH7YJGj9vRMQmcF5wzcYstZDmJavyjP3t4gf2wTmHELCxdR2rCnv4X5WZzJbH",
  "key9": "2oPAHCQT4LezbqLNqRii1EcyYmXU36rBMiut2e5buThv17GS8kTn5gsoshtPK2vUk4kShrGdg76yM71eZ9ZNVLNN",
  "key10": "3Gwgz6WeD19TDrp92ugxRsPDSn6UCFirDXz3HouuAKSznFDSne4afdpWmQvheeccBUWWvqcatvc8xwiFamgR3ELX",
  "key11": "iYiLdMv42Qzx4Ahu3mTDVoPouuTbizSn4JBSRpcBatVHKDnMGn8CPKAopBu68vvvH9A3q5bApwc5a5oEjRdZ2id",
  "key12": "4yy6CKskpRrJA9pv99Y1LxfkWaSnYTrrwcRsmnPQvFETfwCNbM5Zp1wxCw76Zv6Ehzw2t5kDEJhZRQQSaQrk4sMS",
  "key13": "3c3owpKA8dnbQhHXn8Vkgb1qZc8ZmTZ4P3RffUrbQfWMhwF7VtW2VGf3KBGbSKYisHvz97ENZNr5qFemSvy8nHay",
  "key14": "5TcRZidmgFBRXoCSZtvMm8mBshz2MLxLmFbk9Ni4u87B7eez1XT9S6aYjRa38NbK82cHVUhyroo7eNT46PD8ipMW",
  "key15": "4Lud8kYcu128ZfQBvyZ7mpXrKKQEwstGbAQvnfu9oWWrAZ8kx83CijUJWgvd6WNjGfAxz2sQjzpAgeEZAJqARtUN",
  "key16": "3sJwVViaeqvmfreGeqGDr7Eo54kVVCFrzjddoEpk5SikEtHuzpr14e9a7gMX9F9aRL1J1FWE4cz8Nfyt51Qv3VdH",
  "key17": "3XNGdHXNSniwpcVPSt7tifygRHM3JuZWdc8V8exQAW5LYLbwhuBFBSga5XigySV4pTsoB2LBw1ToGzhN85ktZXEM",
  "key18": "2KMkf5o1d4chxHMySAJX9M9idjU28YBWsVHMqYbzPxXAnnvEWVFxjBjgLctp31HZjtfJbqXESuwK3iubVoz2KXiH",
  "key19": "8ccGQuwB6mySZxfQwdbHYbDPM7XZkhXZbJWjekKHFFJrVDPAd2Bv6ZGUVkEDEKsq4riob79gMd3NjpxjpHqrDxo",
  "key20": "GTjb6evefzAsukDur7MgjSL1zv4ytfXjtNhk2QTy17hBsVJHwTVARNtj6CwD1KxmHTAZCHhShHSfvRKzAveDQAa",
  "key21": "5HWo6v8Puw8K1X8EMJ2cd6Kkd8qnxanqhMv665n5ptQhFqCphB3eABU89GRwMoJxAHAyXn3pp5hgLA6p4EJBuRik",
  "key22": "65WzjE7jM9c7koRxiKnW7ZY3FVQXs1HH7Ka6ty17UVimFUnmemju141sxKTiqcBAHnB2P2gpy4a2GLd7DDrRht5H",
  "key23": "2g2W3Z9ZnR2mxHUizPfNr5SJnukqAoU7BzDrtn6XUiCXrhjitJXtarMyh4aatvk2kaT1BdsM1F2mb9jq9GupAYZb",
  "key24": "5S64rVoz7txmpnb4TJBLmJiatRTGbjJLpEdrL1uHHQ9m8FHpZZL5gzSKrkk79uNC5brsBZ2AkaJtQEt9Fvk4VFQG",
  "key25": "45mBhtHFEnUWtxbS8t66ZLPgr5WJPeE1eXZMjBWjH4KDzwjeyLzaMHKJz7yC61ouwaCecdgPsG1T5R9aJoP8GD4r",
  "key26": "3EMqVjG18iwPD6LdMxXLtZjCq7mxeUPWgTEXcTsroH2RmHqNHJpah5btPHMCBxD9SFQQyJiHtYynuagJc7AUyG53",
  "key27": "5EhfGJu3vCH7H3hAFVxDyXs9fFdJuBWUDv5dQ1rf8egqSzK3eJawcFzspJKYR2wp9XYiLk9aQEcpGcpT8AqtFWVo",
  "key28": "2ES9HovLin9rw5fVpq5fwGxZFVms73B8sya6xd4FGjwZfSakPLHxhmXpEubSWDLA2ediAXQSExAgzdCGXjeoizq8",
  "key29": "41knfgn6HNM6WmyBQSC2Y9nZCQYnsS2fQrqomDfsaYuprZaHjodZXVNnxEu2T4RiUQDF9tJaUqfxEFjUECvDD2Ke"
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
