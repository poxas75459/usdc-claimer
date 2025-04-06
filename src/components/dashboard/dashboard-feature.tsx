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
    "3BjVSY8BdxHqgejvua3FWR45fr1fiAKhK3HuYRtwyaiohQwRZc862X9dmDU4kJGCLTy8DBUz2M7fWaGMK2YjXCRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "16PKhNNoH3WXFRXQbEszG445Ca2ncwbStLL36cbJyXfkHWSBU3FW25ecN5kEXdf7YPXXitSENxPsDzoev3Qc3pN",
  "key1": "4GqGp4TauAefnzYYfXWHKJyqXZH8jw4Rgt2DqJJb4siQdaeCr88NV7FN4C1f53C8RjBWcLoTDCQ9n5szr1QGzYjm",
  "key2": "3Sekpkqf65Lj2AhmUSPuqSUWKEeAcGy1gCFcrhg6swg2XUfSher4DfboeMWgTePWf7ewHyXBM4YHNhew1DfskTBE",
  "key3": "4kpsiN8nhSaovJNjWj8edHpnsRCJEvsHrPvXUuRADzjkQxkY6KnBVTmXyoXsZZ4C8a21z435WnM1oHdoTDT7TLpf",
  "key4": "359fgBLo19ccTdfqhPYm8QfaX5BpkZmeWY1nqZmiBFV4BS8JKmWQcdKhda6XdokyebJRcTWKJK1cFnco4HscsF1N",
  "key5": "2tgPEU9d4oQ5H7ctpeqJ6Yv5mwAhFnsKdjWzQAWjJXNoFjwQ2KrV6k4Ns42JEfxXPXGuwqxSSwsxsuWD1Hh1JEGa",
  "key6": "d6L7KyWqCBBgXzSHsfStpbLA7MGUKcGErMWNc5UwGXEqBHGny9qmD7YypYEAYTL3vo4Reb62CgoGkJBQvLSQBNv",
  "key7": "2xQ5UjuxwaooaWptuSMpsB4K69keNEYqSC7drBiBKhzXcCPXHvem5v3Z6FetFxj45a8LXEsmfBUkYvmANYQfkfqn",
  "key8": "H1DH69GZyddsnjbV8sXUSA1zAMNLsb92255RXFvFthHGHFj2MXVXsxBvtfnM15aNYR1dccvRUig3ZAaAbhL5Nyv",
  "key9": "65zYmBH2X4PhXh68hhtspGZqFqmG53EwTFESiLf3dKtuQdB7A3b62hZQAB5gu2f7jHPfiBT1PUJ6Fhd54faU2487",
  "key10": "5T41XXoBZsCqXsyWV3NYJQm9q1wXWVeWU1cCYB3jCtZc4LzQ5St1Yfr4C4bhrWbULo3QdudVykAbodkCC2RWtGi",
  "key11": "DBrDN7xd9hia6uVaPAfEu5dD6Xg2CrZAwQi6J6q4hYcwbWSqsA6YNHYBbLXegkd9v6pmyaBJE6cqK2BfhE3EUZW",
  "key12": "419b5qqETdrXYe6bCYfh1Shkbe2WaZK8r7etEo3wntirV2nZ99z5tcBzNJGXA3PvokZTaa6F81z7GVGZxnwATK1s",
  "key13": "4h8v4TaCHzQ9snYh1kMqPVTRRqjgo23Vok2SuhcgKt2veAXuL6aiDGNJKCXAvJvd9FPHTDDmruJbNAjPrxgzNyQ3",
  "key14": "5AtN1m4CRJvhUgaAwRAMHuZJwa28PUjiGNdwTKYUU1xDXh2sEGigUbKQaKWZStRM5E2Qey2aj9TmyuwM96cbAWiN",
  "key15": "5Cw1XU4nM1fWnwjRwQyVumrk6uM5e7Tw2bVAnfvuXdbtDuneWLqrpoiQHx8NrP9x1QjUaTkSie7cYjJh5FwGPHFC",
  "key16": "3Ls8JN8geMUyvNUBNThcBU8vbG2GwcNbKmZ959KGV6rYB1uNa7wBsSPJWhByjXPi2y62ntHPGw87hSTdcipUw6Lb",
  "key17": "5jQoU6iGTzZtPpAEwLhcHjkkZ6uXpokUcn9YphrgMT5ifzJnA4z9mYGPkHcuBx2mc5dpXW9x9e3VpaCmy7FQe6Pb",
  "key18": "2xXK1n3kD2VswdKb9kQa5vov6EbdpJLK93hUMKeDrbujTEz9gJ5MCbBk8smQGVvCWFDMUhn2Fh4aAoQu21PX8HLH",
  "key19": "XngMbHkkvfs2RRPWJm9z1skp1R6RQdu8tWutzbcKQcVjeWFJkTYq1eRqTWdtVEQwGCFq962nEHf865cxjV3ZAyz",
  "key20": "2dxuKNuFMuJSBwRTeFk6PPiPkKhVzwScbWatEGRtx27gggi9bgfFsucUSmSTrDmHhVQkbC4PpoV8QuMdApp29RHN",
  "key21": "2Ej6G5RDNfdpDPgo3G7qfvi3w5C4xuswaz6uYoMDoZM6JTQvCWpTbg8MhuGavZhSM5XYVviAs3JZEYvkdXzzw74b",
  "key22": "5TB3gp79s3x4XzXLfTygA6y1TXnbrVX2kx4M3TWWV1L14JEoCGKztgC6ocH16UFaNZVP2rfA4NbDEwjGcWcAADPk",
  "key23": "3BQeRSieD36nE3oq63u8S3QsFc23vvxWFjujgAfYE8BcyWDRWwyKdmxbR74NjNsqvSJsVuCQ8k84v2zudUsH83Qq",
  "key24": "3GwWezaz2tKPEzdvfiD33wEvA6Mh35ag15twAzsj4FqwkFHKXNRrxCb8iY5uDADKezKMazyyL3pHJanXgxthKjZp",
  "key25": "nEC1e9gFceSiQ4fvGRUeyjmRcGQW4hBHjpn6mrnoB2npDzuzVdLSwZjKBpg5ybm9qdygUvQhnr61RXuJsYbEFtF",
  "key26": "hnsdz7gaJutp2fgJ3te4GqJ2pDBVJi3wwrj33c5YV9R4JsU7fK2vjGHZAMnrhYr8LRvSzw5niN9WnWLxqYGrJ5f",
  "key27": "jejBpbejdGHSyynyEDC1L8qVjrpdDmeuhoX2Ue7RxG2vHhgoKN9WC4f81RWDJWx3KDshzj4KmDeGpjJPWX9GFXd"
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
