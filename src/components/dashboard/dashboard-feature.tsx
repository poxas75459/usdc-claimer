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
    "2JeAy7S9D8ozJhQ3kKPBNYRhvdqRFJYmdTdYt45pBJsVqTPkY83Un2mpTYM18qX2FhXT5bayZHSn2RNSwBNdRCqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oBkFMnnPhCvvTVg9pFhLiAzpRgxCXLdoPppUrikqaJx9Mba5TRXX9EkUUmD3XL7rDT1SEGvsppMKVP6xdzzRxw8",
  "key1": "61Cry1ZtJHq2GPR2RKbPtptp7ngumBkyaZPv4RmCC5k41YNe6BY62t3UXR8kisJ4prUoTnmoUK5FMv7n3CosLBW6",
  "key2": "2fWbtQLWzYT7ty9S2hY9hgiBdkkDujHXXjU5wYh3PE2FGy8ZgtvYvjvsSgomN5tH7d55RyeBekMKFzej72spunbd",
  "key3": "5UHNGgScGqAdWvxDGLv5QBTYfFdLb1kFvq39VC7NfornAGgbA6iFsWckRjQNz3kXTryiBeW3ABNXiMwZCt5mihXv",
  "key4": "2rb95hmuyhazKk39tmi5zJ7a1Fz8Ydm1eTfyrhEBk8g1M26xxkEAoMs7xzynz6LwK8wQhAE516o72WaAsM5e7Qus",
  "key5": "3piHmWqDHocB72PSKTRTJbuiE6bb6E2S3g7rGES5FYxTgGRWYk9QQxgyFw2eDU1638QqiQH7a5hrygxJFY5C1xe7",
  "key6": "5SAg3C4WXyABChaR5XXBCNZxpUrjiykNTbFd4N3o8pmM9BmR5aU6Sygf4JhSMi5YVSPgS3CzHdfzddAwDhqaJ5Z5",
  "key7": "U6ifqRCiWiJDotDSUAv9B2Z3TLd5QFuf5bKn7ukDh4y4W3rTNcAN63i4PnStNimdXLCV3XybCKyFJM5tUsMk9J5",
  "key8": "3TURjS7R35GFnZHmffSmokyeXF9xXJ12z27KTVmrFQLcR4z3gMEMGckruP7Tn51VwnPu86e4VGxazJqxN9nXq6ab",
  "key9": "2uizQ53GFAj5naUfPAYkM5gVSiTSsy4JQGJvayPPVGUUeartc3UTv9Vk2UiheSNnkGJKmmcTDbB57fGZuddbt3wQ",
  "key10": "5qPRXcJb5h3oL3r6sUKa7v8m8XGndURREMWhS2s5DRyeVxX8AWGR6o4YQhHUVMj1ZzN2cLq8vYH7yHY3DcNeksLU",
  "key11": "2aMQZ2tjugaiocharYDgUmX8fhtHA6dXVB3HoPabCV8mx6V39f4Ma8s3yMQiVnXbHnFFPJNqydVDeoHSh2BYxtrC",
  "key12": "3VGcKBAYfr7TRJsLkmubbRB2knpNL61TesBXES2rrYwLr3Ao5gU44ETnJgkyE2XjXsJ8tS9zV1RNYvjd2rtEmkpt",
  "key13": "3UEvpjbxQ2LqbJn3nR9wUneKCTcLr9QcZmsPhNDpGzfUeirfB3tb5KPxNGZmZkX4VZB7bh7MbJFnCpVV3YUV3t7M",
  "key14": "3KAgtWTJ5mW2qZYP26NrwxtJuQHBJruPJe3aV2J7HnsEPmyrfdxrH84nmiKfe9WpRZpNcZU5yrrrSUB92b9cW6nY",
  "key15": "2LMefnx7inpHqrBqo5s3Vt7171cvTnFeoTmYPmgXyr4zrSbfMCHKWJprMmy789janhuFtUGy5fbig11LrfiRp1wg",
  "key16": "2z5XhkJkowkKhyE7Ka2po2iFLjnNrTEAB4QdwoNkLz5mj3tVb3xjggLhyqXf38DyV5kuYmyjhuuHuAtxmJCzHsHi",
  "key17": "3uPfpuPZE582KWnhL8XK2xRZnxDes3UYvMP7rEg3VX3SaDweryEv97sUoaox5S6DdytNafsufcLjcKjNDwJHCHur",
  "key18": "63srHZXDncK25fXijVfnzuge13zAv5NMm6V9Aw5puCj3eW5Hsd4jzXcNo4KpoAvLcct5hEbNC8iorQ2nSVseg8wV",
  "key19": "235JwA9Ccm9fQHAum2wZHuBQLUKWZCqmHFUdEG4fndSfuQfy9g11ziocS1RTJQyQYRhsf5VQHdoJxoWK7Tvct51Z",
  "key20": "4QpGhkmG3gPQvNVV5jqzs9MraXb1igkVWs3Gviv65CpWECBHu4CeKpVwm5sc2mPmw63CiJvXYzMeWrEf6DV7HnBB",
  "key21": "TRpNVHan4u4LFmizsh77QUAhbZnUYVdEZ6ASCTkmSBkph5zBh7twBQP3Km5ThvZafwJjZBC8Uj2eZAXxvQoydtd",
  "key22": "2KAcK6qdXdik6NVW3CVrV1fQGmwPtp7C2HMRAJmvGG5DU6hrbL24zev4qrekzoKd6xJum1UCydDej4ktCggVbDhw",
  "key23": "65x7K6it8UaJi5LQsJDMLWhsBZuWyMfhj1x3z697MaTYNEYSHpneghAf4sSeZ2TUxNdx7DGztx61vGME2xmUKvei",
  "key24": "5eo7wR5xFASP6WAaPj28m3gDhpBcvjvzkXA9AremoX3iJhMDEecaTLuno9HXo187iFNKLLBa1L6oqhxfUzdFFDdo",
  "key25": "6fFgxboSQxiGXjJQo5dvkTqL1v74pmRRX6BFoMCgtZWty1x2oHFgDiQK8b549Lvp2mf7H4N62GWKeAmqzstFac3",
  "key26": "51WC8uYJhjx2mzKzvFL9STFLHd6AU4kqaVcX2bH97K9i25QwFe8VjTB9pv9F3x3fT6KgTLfNn3BqMMcoW5Uhse85",
  "key27": "5qLd9DuQ6N6acrVjZJYJCFAb2i4PiLvPaHVPMb6Mxp6xSFQJweoZcavMHMug1GguqCpRAVsbGqnnJSdkkNK6ZGx",
  "key28": "4bDhmHxMVMBu3LRLVnJ3GDVZAzcxBQafgqv2D3nP6DkK9cWmbM3v48nriKEeMtKijcNRdGxWLPUvLR7VwuVASMhH",
  "key29": "5siz2FEbA92EHDqzfpi5Hnu3faYi3ju5T5BvjFL9EDRXrjULLWcgqS64soXnvAKG5CL1hZUUW6H7y2LtnhDHfk8r",
  "key30": "2skYNonPpTSbGN1fHZei57uVpxp35aaRrooGSq5XiV46h52jGajvwLNdaCrpBMB4WTdb3FttAN9mYaa7MbfWqsNU",
  "key31": "kLh9hJiZK9EwjViVTNqcZRR2uBKtuxCcVLqmLHb8B1kLbihrPEFJiRSMYhPyFMnk2U9mU1Qu6X1wZbcAc2MVoSC",
  "key32": "569FuiZYRtasxP2jrFNjad22w6UkAjtLgimnWdm2hG8PqcfrtxeZUQZpHN5S33mB8ivk1cmUqCRWRdifCxShMyV4",
  "key33": "Er8yFUeW124HHSAAvDoyJa2kW3wHeMBH3NA2wo7UVxZ7Bq8mKCQfrVrrC35GUwtW8Q1GpSn4GJPpzY4BKHEMQ5X",
  "key34": "5LPSXokXSYekgxMxDESoWmJnpyHpW8rWnjyAtLSxjRw1bd9SWQykasm6qsstH9fjNLSjtpA7vf9B7A2tzYnCtSEH",
  "key35": "3NKZPKr5qzmFZQfKviwpq6tJxfAsej2PcudtywzWpqsgt74C9TEyARnSppjf4L5jFpzhaD6yRpw7imphhAkGw5QM",
  "key36": "W7dBw2yovyZHPJFmxW6kXhqQVSre3L3ps3r7rZ558EKuoTX6xMPp7vQsdZ11VZN8M29doJhFNGkjmnLZPWbfxHx",
  "key37": "3BxbrUXBM9epX3EpciaQpQxmoSxLbdDFSMfDiWm3ZXBvx1CQLzhRsduLWepbjrEQBxYGWC9iGqLPF9qqzLrVS5xr",
  "key38": "2k85Kdu9VHVMi7cfV78q6DT6HfPPpgDRU2xxWXwSxLtotwpLMLHRZxeFfVvoJkCkH4MSeC3kHaPTQBbBQvwYqoCG",
  "key39": "5EhJaetPZbhFbzMUk3CUy3YL2x98gZsVdPQycnMZyQDc56VuHmVENRDAxUqVMj577ijtf2frWB4P8Jvjuk7yFDzg"
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
