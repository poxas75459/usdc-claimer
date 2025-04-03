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
    "64kpNthSsAaqVJHSSVNzAYCgRx7HdhBvi6wi851wXB3iLheWuapXkUeKZkPWKNAqFEyFXxPvvv6wB4cGsB3oojRE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59UhjHiaDVRSLjqXvZkUcXgY5x2DWrHk4JPEg3tVCP7MR7EX7A42dR2t5bWr8pRss9UQgowsDhT9i9oZdnFeAj4M",
  "key1": "51ESsTaugWK6Jj2apwrGoB9xnT6UWJbA1eYrQbLFaWpaUS1q6HZoBDdwxXdFjYsLykh33g6yx21KyuAPJmxMrWmg",
  "key2": "QcpoepNmhFhizP6z4qHudjK6RG2HKdNjSoikMKMuycAPJhdmnkR1tk9PUbG6pyaiTfkAuoAZ1yPw5UMKve1gwtP",
  "key3": "5r8QR3ewr5br1zSKHFE2t5ergVhvqSWUXbsxAhgKN433b9DJvWAB55nXuVWHyHtF1creT2nPTqhvZCgK25fW2Rud",
  "key4": "2G9k6TiEktDrUtmdVtQN768JU4GFoid4mKz3AwD152wkA9fpaUxDxxioah1DrtC3VYZRS3JEFuVMWhQm5DrxTuPf",
  "key5": "5vZjYTh5anRkd7Kb8tU19r1m5SG4fToRwiKb71pLYusfiTUYt7ovuhsCzj2QRF8MKsEzWCmZ1TjzThYvw3zoaV53",
  "key6": "4cQ4u6uggwjdjpV8Lw1dbh5SUwatXNxAegq7CUuBjJ6Cjf6MuEVUq4FXPwcHCUvGJxXgT5c9vzX8CJNzkiAgaQts",
  "key7": "NkKJubCo6KqvFp9CRb9KbpHZwizeQGhoFmUq2nKocznLcGi78kqQ2haw9tPA4TJbnTTdtkiJx9BSmCmZkpLdUnB",
  "key8": "3vduwEtgXATApf7yZtxrozNaecFEmeaA7CEFeMXgswPLmURL3f7HhqQuJEQ6FNrJszFYfpbpB1N2gTPQG51q1kQS",
  "key9": "5jbFVWViTjFobNdQogUsausUVmkBRaC4f6FGx8BcEbVnZ53PxtA275wTdK39g7qVQJQouyEGMn9cnxrkmgJUyoG4",
  "key10": "U4j3keLgxZcDPm5pipiYRV2PvNxCdBDHk9raJ2kxv593gnM3ahciBAJFoE1nqDuKv523MbXeA6srDM7nfyis1Aa",
  "key11": "2z1WKEGovhbTygecHf29CpbxofD2fN48btRoLUZ7i8L8sGYEGoUi3oNgU9nhw7QoMaTAo1Yu26bqhBjooD11F7xB",
  "key12": "EiBcazZTrXqcMwJfdsTYoCs6zvt9gFXZN3YFq9JQj2xzmV37VeZWLu68V3n6kWqL8LnYHRUW8fqBuirBJ7gPVBF",
  "key13": "3WpWhpeNRq97MyDeEv95A7CSSFTXFXAitrU6QaDJKLNTguKnPcfazi4ShyZh7ry5Gwv4fkuicJDtScWFTpZjLrsV",
  "key14": "2Rpjgq8CQXV5HjoxxefvBFrLqS9xXzY4kbsUxRS9xkXPWnWfrR3VjhFb5kPJGcKBigrPHd5HfzGDj9r8ghy2fvDR",
  "key15": "2Tg56hDoKC3C9o7WeNtta8WHiiUKnaPSRy9yfQfiqD9gJNMKvgtUQ69NkjYHP49seR1CfXCU3CdK143Sy4rw6QZN",
  "key16": "29WjPfdJ1JSt1PPpTsChDH91FhgWgU66m8ULoiU5xv8dotsQAsXP3eicUbXaEmZ1Tu6HNhhdsdJ81SC4mfPGd4NJ",
  "key17": "5qcNiAMGaB3bs1QR5H3KyJ3FGvvFjSqVHnTiVCHbhn5sSauAj6kX5RuTFTTRwtsryruBbbFD9U6rLqXSpnWT1egt",
  "key18": "2dEzssxn8ZrS46dGzjnJsqnPgfEB4RnMWE9U5yE9sUBEbVq4KZJQFqR3CcrLpA4ohTR3sdL4iGyxR3XWtT8kMnMc",
  "key19": "3gnN6TQkhovjqs8w9Css5he6H2e9ZTCvor83Ta6mwNFR8QQxjq1bGc9gCmKFakMmJ2ZS6YrkWwBM3bF8isQwJH1V",
  "key20": "2eNWujg5TbzdJxsvgw7XzTPcGEfKBsaYpXwNstGyQqLDBzWzcrBaykePNEaujnX6psYeJcVMMJi4VNV4V5Qzp2Ym",
  "key21": "5wr1yQfuE3mwL17qaPWRKgNuPMeCxyK8w7EHkTovyd8pKw2oJa91C33rQcp8KeyuJ3nrhdWBJDgB7UPckuTNdA7p",
  "key22": "5RBWm6bSYQoCQpSpUX4PTCc9hq1SMa7WZMrY9w5dCDsPK2c1vCqtAP6VyPQvWPxjanr8sKNB6CAoHKk6koVSwnEK",
  "key23": "eofgxPuHgHZQCwrc6by33e24o5uWeqyUK5YEMdCJQTZz1f4BgKNpNiEQTTzZqieGzrxhfngk8jYJYa6STFjxxNr",
  "key24": "3zMHXuM4xm3K2APmN84U1Nu9FYcFxhUUq15b7eA7iHay6DbAgu3h5oKsWbEajsu1MTXv91v8h7FrNgWKrkFtMucY",
  "key25": "3CALQftQSShACSgXY22vvaFeQmVKbBewKCZ1FvrDC9k3ZVn1ZjPLey44WmdGCKyujLY53qDYeXfYm2ijATin1XSB",
  "key26": "bMezdGypbSFMv359TAPwcSRGGBQsUfqMnrV7gTw8Z9oBKXJD2CqK8ZHi7ajUWbh4jJcNWkgFfkS9TfAMXcAHXe4",
  "key27": "9jj641YjZcVurUdsVU3skuGVBMddZ6XGWjveaLQqxav51ZtXPiY2RivvGdJuHfXZNBbUFZNdui7DqW5sG96TQZE",
  "key28": "5Vi45pSD8PNQiSLRUQLgsT1DaaUVvUikSnZZJC9G1hw9gKGAyvtFkz68pi8rPWjS6ycZ68XafBXNKZkXemmy8rNV",
  "key29": "3dyHwu8RXamMrXv8BwLWd1E7fZV9jHwrn2RsgbYEswGM9miQ6hU2sqf4HjETb9nP8Zo99NfjHB3nL9gsFzthmFSq",
  "key30": "2K9WhrNKxSermGvCgxhdPdUPLJFt76LFiedwpRBS6DiLrKzWA26yVsmdHSQ6akrH7oRqTpAF6uz6pWLoCNJV3Sj7",
  "key31": "4R1BeSV2oJc2WoF7wQBCk6QDvcq6vtnw6RDa8PNquGtPaXwxmysS69Qaf9Z26j7NC2fg58iHNhZFFa3UC2rB4wf4",
  "key32": "TS4dEUCAW5vsVhWPqhUxbFwPFB69mu7LNKwDvEmV5SmdAvmnfKRPqEynBMadYziK4PBgFpamfN36uLW2PAX5Ho9",
  "key33": "wNmNaSrZ9Qy2cfE6V8NkUe5mCqUeXmr7DJVBWrvJqBgXACwehVervDBjkWufiEQfBGF9jmwaWxDUu4JzbyAahSU",
  "key34": "5s1dnQR9hho4QatsufxPjUZephKX7keae4FgGqDYF9V1rt5D5YLe2X6utWRRRZ3qs3b8FpbH8VNqgymUmn3Pn8d1",
  "key35": "2YcNe69ccHtW7oER7GssKKQhDKn64nkny3eRCHtCgEGeQHqxCQRUjzKFFwvuqYLoVc8GyfteCytU5ipD9G7CCN2t",
  "key36": "4Q6VGyYRDW9pb12WbbTERWoRUMGYLCcZthrLCxCYHSpKbLfArH9bnL9PyB6EFVRwxtWVGptsxfQvdqCaTiqjpHJb",
  "key37": "5AoaDCukjW8pzZrPtwSASGoQzsAGPjBb7JspDXERr4t9ZFRoZw8FUqF4EY3s9LCVZ3pjg7FCSzykkmCDDA7r1Gsu",
  "key38": "nCjYEDGnpkQAExE4ZJ5mJHcMtFqcYzbkGZFmd7jQLCGi49Xrg55uF62D3rroNyiLKcV7gLXyGGNLuJWDDDKkCha"
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
