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
    "3fqGo7s2MFJs1KsmF2aZTQRptD4adktNukERCxGhEuxje4knewoXoMBVwGXXgUtDokp9mPFy6z8LmVQqyUM74vQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52oCcvWEkRtQLBdrvFW59iA3djLt2joxDthqUD8DxHxp8DYqo3rULqG5Gifw91wqsgxVsbExemdKV51mRMoQ2btd",
  "key1": "63pn3VD3jq2BKi52PqEFshdjdo48G4EdkPRBn5kB23b4ZgbhjcyzRVpi6mKaK534cTaeM1hx99uBGVDHHMiMF6GP",
  "key2": "MSfXbP3fLB6GLMwQw4AWPnK9XhJaGNF7XeszNqesPWArMZbbPzRHGpfnEB14vTwmqqJ4r18mLa7FGL3MHoaSZUc",
  "key3": "3PY5YTwoSQQ5guti3QQswNnpFT1BUofjwsYKmYcxS9ofs7XEZxFt8uDEh8AykiME6LM1wjdNPvrAvXFkjNKG9xMf",
  "key4": "2Hh9xuDjPTAKbh27ccJE4XKbUxf65k4jCTUu5p5SizjivY3iPqP4V6cXTs42X54Ez5fxu8ym4hEDrMFcia5JxQHW",
  "key5": "2kY237eEjLR1FUVd9Msj8acGiDVw2rwVibbsPrtFLM3GuHivPtQmXormUw2kMQyuKpBDUbW8PHqeJVUet5bDTqXh",
  "key6": "4LAgApPgtog1QbWLaVwF5WE5ynGSAxndoqWJ6tpuaQLVPEn28A2J55xhdbhebmRyFk7i5kRZMjZayx17Gxqn4WLY",
  "key7": "3TgfovWGj7PHhtRK2kFKWQTSSdvKq898cpco2vRjp7isdazemLDNQkmWGk1ocQysw2SbBQ8X9e81woYghDnibjhN",
  "key8": "53Q5rDzmJTH85diSp3J8EAgiRWFvVyrByPLigN4xEehzGw5n3Vsz6NqA5YaA8QMPp57TnG8vvAnWuDppMTqZW5qd",
  "key9": "4FmTcHkbrLa1C1AgZEveCzAmt9VtnP2o4KgH8Q1FWr9hFMRWD1SVToX2s7xb8kGLadCzQdr9RCQJhVpgdgtS4QDA",
  "key10": "4Cwnhg419pwQjicncBJ3iQimStNF3LbSZAxnXi41kSCdtgXBJGL1gQgvdCDXyjk44up11gG5ksxQS5ykVfUYnSdE",
  "key11": "f5SfW7UkXYTEghdjkoXu69qXJgy37NQw2boMup1k9gfLe363ZKa5mWk6N3RX1m3K7sb58LjjUnkc5W5M59j96Ro",
  "key12": "5CehhnWUwyy14nmvTEpuUayyNndznj7Sj5WawAX5eFktQv1JAqfNxmRvJ4xoj5DUaqdDuyxadSA4rHFoJiQ1idLR",
  "key13": "2RFULnBpYKbSfN4atzr2pASaCyLsBcNESHrrjYPUcXd9jNp1c137xyc6n1ivbyQprWsMcLn4yTi6dgHT7ge55aFY",
  "key14": "3n7uVYfY9wybsFKVUeo2KrGaeXqYFqBwekctep3mCNKSQ6baM2PuU5Ab344YnM2yuPnSMeWVDzBZkJkNy176JHMn",
  "key15": "2YBPYqLL3wtR3WCsEpQdKYVCYpQDRKQc656eaP5KzSiaf2C8RpQ29sUw7ohKPvNHM1PqFwrYihuyP4Y5M9zRkkoT",
  "key16": "537rXpAK96soM7dt61ZQ1ukWggwz5cJr7k7UZ8b41UgMsMkCbR5d8UQZjctiHoVGqPq4YAj6enCnoUuYUkdVFEkK",
  "key17": "5CY4PMNBDmNJTC3ZzVRnnghGp9PJGAmPnL7fg3Nd2mXKxdQcbd13S6MzCWpBoa8NdEwi9MtBjY9wYooCkq8RsF7G",
  "key18": "tkH3mWZcaR8WCU5dtjgM5xs1XufdcnXAcHND6krB9n6XKGknw6gpaYamMb5VsCpUFmQWzvBCVBHggwuU5LC9GFE",
  "key19": "2a4LmCCEj8eWTNitvN7eBtwKZfzpq6uaFXAkpDetR2DkDBfkWZTR86j8B7E5WKtH6n9zTDgT5LKg8L2P86EeJwSS",
  "key20": "4dCFohHV5A3Sxd852uNw6eYHS5yiH6Ph2VuQpKQAhr3Uu6dwwn8ZmiQnZws7uDuWaoQhWYzUJafqRTfwVgxsEbxp",
  "key21": "6p5KFYnkecpXDb4G48M5MwG1H9uhvY6DWmUr2a9KuyEHNTksuexYBdawfVWU2GNLTzwHQpYMVgxUH7so1suSj6K",
  "key22": "1PXC9sXEsUfb7YUMr5bkHH42tMRt8xGmV4FBvJwDtyoLVwroXHq1EFhwzuuWJFLLKYP9khVM3TtfwFwVn4B5B1e",
  "key23": "4dX1HBKfToUa71P3ckG7icVB6KpHKjqTz388dSPfyte55vds6U6SwWksf4hFEYXV5FbtcGhhBEoPB7NneKCxr3cN",
  "key24": "7wqWCL7iiakMqAFaDfwKqYkyuck4VCN7jKAu9PJZMzsvWtDLwS92PDqReKEsK4zZ7ScVZDSPCnnDrpRYQTQvwvj",
  "key25": "4pPGh55xUZmqaSmkQfTPKaUvXJeJQygoJo7d8RitPg9WKrJo5ZMCNtv41h26b4qMXBWsUwDLLA7n4A1hMCFcaDv2",
  "key26": "TaeptAZkwqABDU6tZU5grKtV3YY7SEwFmdRWA15aBGFZ42vPTRZhBtroxVB2ZbqPcdwu4NWuFsrmzab35pZr7wL",
  "key27": "48qR2UQjJf1D227M1YiphFdLdUXjV3ZNKJiwFip5SoMXiBDTBzP2hFfGQN7TJC8R85b6yc4KY3xmQyorX7GArLk2",
  "key28": "4TEA1NiUyZoRcHLUML5L2WkiUg7ocT9ZKUgA1wkNYbRDPNyaXhytmDmaNrYMErQD1jijKet2MuhhEkWCpbcJsTTv",
  "key29": "5Er1RgzapHVvV32Qw5H989vWb93ZgZDVFkdmYHmHMYXuqsSX5VXPwkSvTD7J7Xs3hdU49Lm4CfBy2XshtsDdC6vU",
  "key30": "5t3SNv9jp8hwqzzRhbwjzB45mXUwehgNzpWvKv9hqcKXmGoqby4qeTAkDnrcm2KkEjdJ6ADVHT8X8a44B6eoWZT6",
  "key31": "moyAAnDZjcPuG6mL2a2mBBLUHMUkGpUpbrS8zb5s9DLU4EakX5dx3oeDpGZyLMZDDfP8ZEmU8KQnzsidXhU4KKS",
  "key32": "4AuFnhXsRR74VmhW3oFHvLpCUYwq8r1gVnGMAnjX86uhnkBRmFtknnmaa1rhBfyuj6SQ1S1TrofsfUjHucbE5nA6",
  "key33": "2GTKSegeuSLWg3nEhHRjCwE9FFykJpEbkvYdetuxeJ3gVvgTxmeEC1AywqvkJrabYPyVk33UjHK9qdWtcdFm8zjH",
  "key34": "41PoxkSREe5WoR5eP9MR7qsjRXqTacJEuikczjjwgzLjQNHpPfJvHfYnitWttqNVWE8YCG4jpfDw5jQb5T6Hv5c1",
  "key35": "YgW4txyu396f7v7U8UV94NRuaufpPWCTK3ETDNuP3DzVJ1fB8L3YUFLStJV86DqZsHcyy5Houn5NVsBhVYmPzHy",
  "key36": "2aZdSRjseWGVkqCGyrDeUvf2XmywfApaCsazJft6ihsofBNDrsTJoUZBxfEdfSuLPbShaDiEx4bj5NjijsPCf3gD",
  "key37": "2VoTwRjWuWbdaE5AEQBPg5ynDxnxAp9hSTxUcFmtp4c89sLf6fyFDSkwFTXwZHETU1cvoHD69XMeGs6mqD2eP7hj",
  "key38": "3vbtaUjSNQ815Tu4Qi9kN8sUV7NSQfjhVJz5LDB7vASjj13BUFBpr2GeHAJpR5x4jSZt5C4cDXp5Bcq7Xqbx7vXz",
  "key39": "5SQtJ5C2zjRaFDRk8bt7AkmUP2QCZfpmTS3AoozoJ7kL3DhziVx6WoAntf2aFzv7Ef39sRdQ1tXCvrPiumEdE3No",
  "key40": "pbZFEDLsmfr1nm2hyfAReaqX5hydvMP8N3Sww9if6ozhXaQzZRMyq3emP98E2W99qxqBbjHYYaEvPr3baKbPiKo",
  "key41": "2kYZavk9qRhQ82bhaDDeyH8x9TpERPetjkWNuMknQQA9MvXHxMhqhLKPVPgkRsZxSFD7WqusXum5MwdsrJKgsTq5",
  "key42": "5oAPbjZoM2ciDRxHobXacvk6xue9sMco67JPcTPXPHeoyjJbWUknGhtobS71568kwqYqKYKXQZzGk3L168tDs7KG",
  "key43": "3VFhoJp87uxCfT4u2pLZgUdrDqPKg3scnJFrKbpr5Bq2BRVxnNWKAxUbjQkpBAtRGtMi25Nr5xtdYAFA788G53qp",
  "key44": "2pU5cLDCcZXe2vchmRu8autVWzR8dp3TaQh2u2THXTqc8ZNX6BemPLfxWZwAvmrcWa36QBbU4VhcnAYFfi5hzJWd",
  "key45": "2H2yy1FHx9oDbME5dTF4scH1pRUBczUjcidKUwGmCRScNKGM533LBPTnTMUepagzPPxeVPi9Q66EMrSh39BtfKCU",
  "key46": "3ojDdDgKZdjQAkJceHqY8Ak7dt9KYCno2kFZ5wVqzZaDm5vWuTGfk4eycMxVZd5St5NVUD1uA365AynL5aYRXuns"
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
