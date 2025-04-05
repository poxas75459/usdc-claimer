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
    "2Tx6h4CtZKPmZUjMKZ2pbjH552mKatMmSzXL2b852hfsmQLFBcYpErCmm2jfS2Kk3pXFpNqhRkGhWE5wh1H3wuvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oSrKbUCKj3S11AVaC3SLUGVmRZLhEjbqLMMTSoRMJyKAii5rG9QwoBsMxpZF1na3HiZ8jUwtcvhMbNWveYB5rSf",
  "key1": "idhsp4zTkZvTeRRS5cDoztuFRJfMoqU9oyBSu4u5q4EZ3239qf6heEPZC2vq3VSTkG3TQ2hK7shYr9ZosZutaVX",
  "key2": "2imc9iMjLW3K2RVEz2bEPU3CzZgrxEPRnA2d5Lh2eXkaXWj6bLSHDdU4eeyvGZZxwTbSkV2o9sjdNHmfkLT5zfrG",
  "key3": "4pjN8aaKN8PJS27jSQa5Qw3TdgyrNYBUFHBABf6wF1b7ggcDrDYYpyqnLJTm7NqVw3dKjHJCcYsVwgpJPdbsAbAg",
  "key4": "4cKGXzZ4CyY2k9VVAvAut8ygDXSLBLFqpecZLn9NzZum9vLNTFABqvjmoKfygfsHC76fpLpbcxnDRJu7tsqhBjE",
  "key5": "5wfUWdLErFsrT8BiyVyGwWT6wR5EiAVLh2Xik1kL8qzMNoJgs6xWi6uZZqdJzsjfiPbpkfJ8U5hvNLtDR3dDp3nE",
  "key6": "4wim8mQv3J7iJp1ukCA6UnwP3LTxHyKQ3WgVY2tbsS6JB3jKiznmzen5wd2AFpmS1qiLSdmg8PXr2nP9428Za79i",
  "key7": "2VBHP4G2Xo8ZxuH7hZAXDLHouHRdmahfkPJgs8QeUbdNgg77SCC4E1YLFgqFAddRCW6RqU54JWJvvzjMS3XvNJ98",
  "key8": "51HVDBZ4cdAakDRj1x17yYwaWWJjkV3p9jxsHE1uqfPv5JHnAD7z3BYHzjnz9haytwJSAQhRoqJmrqxGJgnVzMqA",
  "key9": "3XUkxXdiAx9v93fjzTFuCXfDq5C2hLwp4F6ZryUfeEcB2ua46cyyS7bVRvoL7y8EjU6faWivYTGqEvobxg2G3gDi",
  "key10": "5qYv1rWusd3UUQy9AkLkSBa5fm1r4fWpcDyJ6Fh3R23g2m3amqzEbDRuGy6BUVLW7inVmDc2ciP3njyVoJcrr3Uh",
  "key11": "3QnAiM7d69Ck2dugcXk9HWCmapaCb8m257zPToojK3dVrznDyHvZC1QTi1TNXNBorweUBDm68WN1fnUXBnBCWMkL",
  "key12": "5Vh4LSWbJkMfnozuHEav42uadmCiYQtuUENE64STXTvkf9cVCR3doPA4uLr6BBFaB4jkvQv2Z7AahSdhXDtLduvr",
  "key13": "3tq6y1P5Ewz5PcauG34EvDVHajtZAQZfeURYUUBVuwTwY1bCxdsbactexvVLHg9dzFzefNmurAADd2VpvM77eJVJ",
  "key14": "bKwZ7K58g6dVmM9wiWo2Gnqu4NDdYe4i2HqaEqfXiA7YkqjJmsGr8N4ht7oLtckqNG6zyJqH3bJ74ST5xeuqCxW",
  "key15": "5MfHJTosdaX7ABWjRhyFmXoz7uboxggEYWsBPtA4RjyLhUVY7mx9CzCuWTokNwTpHo1BGZDMgLWtaWooGn7tPD1U",
  "key16": "2qsvFZgnaDxHXnb26ERWYuR6xKQL4ustt3Le2mSZMSbeyAEsj3vWU1wniCw11yx14SpuuVFGyAyJsNohXLAXWPtC",
  "key17": "2J9tnsC4CA9dCEvM9auX1Ruia5FZyTKjDuzMC4Vz7r4GQwXxMG6F2qKhiv1LN7mv6BhCv38xjEkH1HAmwzJJhY3K",
  "key18": "5YASB7PxYMMmEWDuViSYuWKZa12Z8X78qxmyNUNMPxHefNg7LZzevWfM26tvkS2jf4HEhKXN3U6UtWBtYPXA1XkE",
  "key19": "5tDEEKW6U6j1brkbYxMARVordqqjChXwkhbntJsg4NSv84zGDMCfv95a9NTD8YR5iof3B9CjvS7YZGBNCFZorAJT",
  "key20": "3CEADrwkkX2D5FqyTaeA2213hxeyiyJQ8i38AN6ePu2TfjxqUfpA23SkCPLjD68Lj4Ch86pKzZoPuzmj4ksPUJDG",
  "key21": "i5qDviUq8sFP8DnKGG7W6rPZTxux8HF4WbwCMLz1CGr6xwcJovijUW7CPgvW1raCUmW9NFeDe4uYm2A2er7CHnj",
  "key22": "4GdLPbeSa9gbcvoE1j3m1oCE5XTPdq3kHXQFPZx7mJX42XMxoRVk5TNKTnrJ98BhiHZTgNkZuFJJGEnAC1ZMF5Ms",
  "key23": "5oS5dsh2QQfSg7P4YtLAQoeMb8mTA1RS3fiSSLyqbr6EQSPz3S2mqiB3TpnUr92wBURx8HsVrp4Y7f5bbQRcqdRn",
  "key24": "4Gbc2XNNqHKGJ3cEQ81GSSbTH6avMVRrQPa69QCbeEqQWPNr4DUQBgzXc9TWrXhqZkrMQ6Yixxp1dNA4DUDhYheq",
  "key25": "vruEaBFwN55GN7iWEhSPbuDpFUJYXrVyH9PtDHg6aZ8jqc4m4bVzfD8r5HVZwK2bosk7GdceAVqDFuyTbf7meEV",
  "key26": "3tWa1UeDqbrxtyfTxNJfTwMPAmGynKRnv2E28vxP3EGao2sRqvZ2yyH7MGWxNLT5ifLJvXk8YKUgDJpsbGSj7C6t",
  "key27": "4CZeov9MFmcJLZNzDTqWjun4BHT1neXz9H991J5rE5J8F2ZRZmsiBAYgwarjosyjFJfBKUhUeyM7ZiYirZfBh5Es",
  "key28": "4rDFSeVKvk6JA2ZJHmf6peJ2pQvNBHgoQ3JBekSpZd3VVEdCyZoMuD5QDfPLNYAjYf6VWErVsAH8WiR9sS3arqgT",
  "key29": "5xUeaJXWSQM16B2Fvnkx9gqGLQAh7GwqBXbbMtZ8qEct6N23y8R44ywixBegGSovw4FG1TeNLCjdsJdfZbybAUUU",
  "key30": "3hU95i5tQHDWcSjDENUWSUYSeJepP3n4i9uGZNtUEapo4YU2c3JkfWnPcJ959W5VHWwMUyMtdhuStWkfTApCJqec",
  "key31": "4Di793rF7W6iSt9dKD1E6chxkAoip57KiM7L3EqEypSr2nhvfWoTANVRPU9vsTnMqPyWVhuBr3yWkG2WsezxkFFS",
  "key32": "4xjMaTbtKTm8Qb9bdtppJkYNTZgiZxMMyZEimjfBBZZPMiD522yYjdtEqVH4xSoMYWosQEu6SeKym9cMuP79VoF5",
  "key33": "3sWS4HKpfyGpK1KkJwUdTNCBkZ5ZCBSfT2qCQee3NWhUxhyiPoSv49ynmzjzLq2fVis5b8PdT6VZEcAst39agRfi",
  "key34": "3tcQZ3xCdP2aZVMd8MrR3TqVjqbLUmy93yCYX6bZMrBausZVJKjB8bLGvtjjSaGvzwRwaJQPGgRbmrzpcqhJwWnD",
  "key35": "2tAwGRVJ3NS2G3dz1nwVne3C5mN1EsfKpBFMWCddLV7LcjGfYeHnmJpr2TigAotS3rmyN8rmHHFiqxrEf7TNQcX1"
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
