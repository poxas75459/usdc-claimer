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
    "65iJtZFQJhufrAqV3M6zsdbRXiFB6CD7koZsnpkVNPqXtEsTCVcUsxBwSiFQ4qZPGKyBeQ4JFkNBKtQQD5mvH4jZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NSsq6Ex7A3qcJi3Rdqq94uiRty2j8iUi5B7aL6mhc5VV6yVY5oddtKiCns3J5N1pyZ5hKDXVD2bh9ck4Jgyw3JH",
  "key1": "NS3dPDAaBKk1AdYxV5hThCnbHzjJoKEVUQK5mVsrQSCVySXiAhuZiCUQuqRdPYmy7SNGL6mAzti29TaroLem2ud",
  "key2": "2bjXASdGHnA9EkPXVk9cDKyKbJjcKPALBN5Q27tr3cRPR39FTUT3chtWeps1ynjoM1WVEfgXSRm8B1bLNw2WzC6d",
  "key3": "3LNgt9V836sfdqgS7wCKNFKMc7EJLsYBEBa83GXEC8iZHLDH4N8D6AjvpdgcbViQ7xycAqu3HWeXUFTyBoZf4E8b",
  "key4": "4fYXZMsnJFy15cdXqeRGW7UbLDCvnqwshV5DtBgLdbSXh9gQ8epP8bfRJPtkkC3nq9nNiFLu831fQw8h3FjKCwq2",
  "key5": "34KBn8hjg9XzLXF9fJh3jfp8KoF165VRW6E5tLJUxezyJ4WfyfutVw4pgvHUq8fviDrmsMesBTfnDistDjjCWsBg",
  "key6": "U9zV1u4b8bZU7rbMVFkTEcYXhk7SpRBcXxoKYDxTf9iV5Pq7XQsQEe3z9UQRfpsXfxuvGrTK1T96qbGAmCMxDig",
  "key7": "wywPc9Vm7j9nkhFxWvRNChzpux33cYRnXwp7kxVXfaeXWUNeCiRQJPGcJPMaAriiEMTH4qEyxz3FQYF3jgGf79D",
  "key8": "5kNmdoMJooopMRZUEqC8pqXdjHCnidfhg8M3Tds85rbkYHJ59meGZPU1LVaoZWR56CaBKwi24UW32XgpsjLjFrpg",
  "key9": "3uTiJLZaiFKxf34ySP8Kvhe85aVEbK7UpwYdMLrwL9jj2GjgPAPCEwibwYsT2pUjgkNZw8siLxEhYBSnttQyjh4Z",
  "key10": "58gWzG1ohFqz5tESJhoyovm16wK4Bzea3jUpY4J17nFLhwVYLmatbbzPFLGYh96RFqGYe1MPhkW1dqn8LYwSVqUD",
  "key11": "2jktFATe9Hs6V5n95vVBDD6sd66LdWNwfTcQfDhhPeBetu4HmT74zsQyM9ggkeNbcEuTcUYSq8nNxa6aZpCL7CGg",
  "key12": "31wrxerrdzXkDpV7b3YquHEWE71JdSNxgoAYA9P1L2RxXnRWvJoF12LnFz9nTNdALCrC4sKykKjY95nuDBKsJvjk",
  "key13": "3XxVwv7vEYQDnFquJ5R7AeuFQWBuaM3BPSDYF3zzwkaF7TPtjcpLpyh3cNSpgJ4xjYeRgaFe8NkNSzqUiKSHav78",
  "key14": "34zc2nYfSscRi1aRhTbsEofKMg77tevMevhaThwtwr5u8n5PZ1zKEQKd1HXRmH41VfVssnEjcnDozL4wsSxeijzp",
  "key15": "55VcVfrcm6mgjENeFMr17opysqHSxaFWWVwKHkUW526boS3BqsnTCiHxaLkGiv1ASaYfCqy5EZakEDyDcAaZvTkp",
  "key16": "2pj11LTqCzLM477rnu5FT9fAitHqGFQWj6gugkFhATijdodKVVQzN9wV8tH96Rc7jJ4SqBDWZRPspV7eKbDNZuvf",
  "key17": "LMzfjYGob8dQ55fvx6VZtRWYWbs6LwpdNbatbBmNh8HkTDZrBDnRj44eavQk33hDH64idFk6yjioF6xymL3K4dz",
  "key18": "Z5yg2gbiFwCJNmo7PibaQmFkE51r3V4Jc9xVwTBM39WksT26o6T2f5qNoc7b6XegTgisfGMSdMHdy4sP1Kr4JgY",
  "key19": "4ZhFNfF8fp5VDP9fJpnFMAXt3iiVwG3Sx4TcfKVw1fdpyQ2Ytea4Ji4GDRyirsDfDhLm2TruwFBQLYvQ8x5ZEyzR",
  "key20": "icaNapQ7X8vZTHDSs8SUeGeVzZwSuvECXMuehPe6enwobY72mWmjtd7NETYjeoU6bTZaWxhbsQYUcMrtkDwtzkq",
  "key21": "38fjar7sV52KaRZMufBfWttiRdKU1xfBGpkGbHTcWtxNojUe5DkWLn9W3J9fTF7wBrEenF3zAdaCRYytW1MoxjpD",
  "key22": "4xcVAZZhsEdtruhtqqfYX1F7VXaLJD16FZ74eiVKLPxMZEAXFunhofJFhNeMSJjA2Ai4hvUuKg7nssb2SdGseo1G",
  "key23": "4VLnuGzvp9oVo3eFdzvhYH5xDexuPq6w9pBqaikfJj9PHDgfuGVsEoNDD6Fq4fFR2ipR12DwGHPLiVWETHd5vEN4",
  "key24": "2LTCKnQieQZmzheqVHPVVpbbB8Rh2xNEYCiKdNy9bJ1MUdzX4h8EyGfDhF2WEBgfp3j4FRHCHBZVDgou7MkRLeNE",
  "key25": "2x2X9qWLeSSNpJNvw9ztaT9nFsR4kqpN8j9u4MhzEs1mbsvLpdp4epmbMCBED33jgabEjvL3azz9ZQCeianTAQCm"
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
