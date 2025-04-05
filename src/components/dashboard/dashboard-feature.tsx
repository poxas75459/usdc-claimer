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
    "NJGgMwGCCb4ShLz7P7cdZSvGAXtGbURccjXXEsqzu5qZqNwnGSfE5SLP2b6G43owabsF1Vhwa9YKRYbdJQyVvim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hmt7pvo3uv6VknjqKJ3MZSbkYetXHguZSYm2hNt43oyKWhjcqGR59cwJoVs8bkScXmdKSsk9HBQhspbmveJZzRG",
  "key1": "5gJMk2JuS2HLUJ4z4jurvattredbSpH5VMib6NxUBGonq2Zcb3H6rBWLqoGLidqbnsU4AZbTotHS6fsD8dPTcNu3",
  "key2": "2d1qSLtKQfQNdNfosBwLycNNTuU8mjrYTC5XuE6eGB6gUr5rhFPEFb753n3agN7HoMH2W328oZd8n2pBe1HLQS5Q",
  "key3": "2EdZNj2BCT81f16XWG6gXhXcHmvMmMLJNMRkeuTPU8Qbszqf7SYkUM9qMdZeyRjD56oGRX5d5FQvtAEAFLZ5ZXxt",
  "key4": "3qq88ZW9RmuphDKahLCwn16wS9yGR5C9BV8tyJnKoiPp6rtfpq8dghtXCSAQqReQ2sRsUCBG8hxBpAADh4joGSWD",
  "key5": "3smv87UmvXEL4UHbTT9n5MR3qhkGd6FG6qwugH4jSNeKTV8KEF5vPBZ8JsiosLwru31HcunjLMrtmBW4h49himhm",
  "key6": "2aJS9NBbndoo5cBToUkrjF57UxsP2PkRYx4Q8QMWCtSho5QKvoPHC7rRwhdqiPrmiLJrJ3ComH7SH4stJH1XXQAf",
  "key7": "F8HHpQbs5ZX4bdziEeAQZ3ERneoCJV9pRLKEtgTmJdaq1v5tRziNqpEeXdR8RuS2xgunkbhLvJ2LhKiGHpCsF23",
  "key8": "vN8R8EERbC7KDKoy9r6QHc4BWGeqKrHAmrg7Sj3JYKRdoNV6JcRW9kvVELyksYS1sMuu1R3B3XMUsbBm9BuyVpc",
  "key9": "3qW4Vo2KMSftwGNY6CrRP1gFeDBqzzBrBzGjHQVsHuCo7afBFB49s93jfxmgS7jrYsZyXd9Xm1WGabFtEhLGYu4k",
  "key10": "jwXarrqDR5UjHAE3gSZ2ySrzJ6XNPyezBN1fGDSL1HkYC4XnavydHcGNcRZm8vNhVjAciK5PUur4csRAWomDtQU",
  "key11": "24kK84zs7e4ynBmqXP8DCSeA6gB9EAMy3GHEQaef71GQqYC9KYPRZHzNHJHme16Vmuo41asWE8JAEH4Es7GKYTZb",
  "key12": "4jn1fgbAuWjWPeSTE5kPLWJmeh3bSojXVEMKyGsGwQQJKx61HrEb7zo8DAAv2MCn6bn4ua9hwkapwvVFNRTBdcwV",
  "key13": "3wz73bFdiTbmmjEoYmmXnnWaEfLHRmL1JnwPWwFcdb2JHRkQzyz4GccRKXWmxkUfTNcpvrK6vgQm12qs12NW2Vwt",
  "key14": "4vcWXaUedv9N1C9k58HxoWN4yRtKGZSw2rd7BacTw5jETZeBM96awnsNjurJvzU53YBDg23Jvj3qaXbysiFCHEZf",
  "key15": "2bsAKtrQUugvaoiRqvxFKA4ZZhufoLZkjimoSXRhPRUaf8HNJX3Waz5GdLApi84kn5pTfyjrX4W5XVFUitJgf1GD",
  "key16": "4BZjHrmhcs9RiZP39QK477LdHTQhNLwg1n5oYLswEsdAeA7hn5AJnwhssuEKD8z5PytKGD2i7jrrQDU97srgPy99",
  "key17": "4LZVkeUUUuUbZbQAFfzJbQ3wuakp5XKBtW1k1yJipaxm9ZTLgxZuoRrnJn6VAGVBqhozjCvApDFes7JwcECJCmcE",
  "key18": "4hyFLFFxCQq2JZBE568Zi7ELkhR576oaUdXKCnvoupzBdVKRCqzU94RSWLeNeuWML1vdhL6HBbU7KnBPViRCYZf7",
  "key19": "5gSrBzDpu3Nnkt4kpBxcbekqcdkqYK7Kd6HugFPGPoNmGNqAoFQr2iVL24d85bhGRBnYRsCGXsbbf5QPa9NeWh2A",
  "key20": "2ZYBkUTgUCjMsYnY8yDy1rE9PqEtkbkdyVYJwewwZ5uzDia4j3DVkxpNMSEFpK2gmgNLsedKMqpFCbz11ihvGiyf",
  "key21": "2r8DBFbgnpwAXqkCdjgsD8s6wyqnnDeZ9ZN5kj5vfazrsdD6E2QSXZKtMf9gYBoA8CF3MimgUifxYnRA6QAKbk3A",
  "key22": "axED6BRtL2ed5uQkjDvmqkASg1WWhqvnHW1TpWgNkV3ovseygYTkxK6NxDocYNVAbpndR7DX1LXo1eQ8X4P8nwD",
  "key23": "8AkJtCcbtrUsvzTpcQVUMKY4nDTJE1TzxhyVfik139TfbrFRyEfk34mZacDcCbAJ926HoG7STUdcFMwq8scTBab",
  "key24": "gp6uhrNmQmQXY6E2fEwJBErU374ZdHwcYEiyDcGgy4zi7Ejy6vCEAnzHcc7W3CcLLZAJV5r8VaCCfaB1eUsYtm1",
  "key25": "5vmDjr8MwimNEo5CQDiLipWNfEAqahp96UvjXpv793S2GaDzu9cLH2177VwaaHcPnAHC7pGF1HuNVtcEF55VU58b",
  "key26": "44oLgkzSzDDHzGfSxqSoPdbLrhwT7RBPu6oBRymyUV944TqYjCryLAZtxV8NvsJsbfk8tPGzG1BRuxEtBGsVTmXB",
  "key27": "5CYznySQukz1EBp8w266k3zttHMmDrpVgHoSnA1Whxyd9hkLYQvP1pTNxvPJkb8apszFhYpBs6rwC3i6tMcTP1ax",
  "key28": "3TzyZzaTcg8QY6wbBDTSDeyYHcaCNdHgXV3zRK787SWdAHCJZhZkeyaX9gdzrTBVnz5b9LxRTssD4XPFcsVyio7w",
  "key29": "4AnCpzQhffxS32oBHZQ7EPjKA9yVcBkdLNEpG5rCXExWL8EZZdVrJ5PX7GtRYbSWuJL6Zb9Xnp18auEQ6z2tYVaw",
  "key30": "24TtEgKh44SezrhkyQQeKP8t79rTTbtD4BdR9q2qL9SfX9BFteGosWa6DKCA2t7QzKP62hyjWjoRp9PJ1p39NGQg",
  "key31": "3aJWPAC2ugPouPGrJP2bTmaYBNX6CNRU4CSwWGs476mz9hc7f7yfRWVBqfDUPDpXxVXoHEBC6Xr8yRcAuiRLz5vv",
  "key32": "2k1v43xdDeb5x4fNbJQ4jSQ3rM5jYaQB7ubUcj3B6ANPGdhqhg4c4Mr2vmGzQ7izW8RT8zBuvpUkFTmuqsyBgtAz",
  "key33": "4DugpJYwVWp4dnPuPrxJXk4wfjnLHqui8XsUyTzhh9fgYRiJg2D7TSBMZHFfvW6m9S6NLi9pYKsxi6txoVWwqc7j",
  "key34": "2FhQtp5rEFfwuXPkFttRCh56sE5XrEtgBeHQx2HMAPYRzah7vHH6qsbdkpNyWBrW4AUkPfLTC7YrWycC9PXu99Mt",
  "key35": "4HtzWrWqDGj8Rvkr572apYXq5vEwxKP2MqkVrqXVGyDZgDZnuRMu7bniwxP4TrcJhmCVa4pRpGg5KGU4JstdgHRd"
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
