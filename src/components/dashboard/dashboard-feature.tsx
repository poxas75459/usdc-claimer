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
    "3qfjKdV8VY1xQ1rpp8QyNJkcCU4cWkjAqcGx2JSueH3ZoRLKQvKN35qdA7Bekwn18QbPAhbgLYGwFEtrshAqSHEi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kddJ3ShipGAj1CKMd9ai6Mn2gz25vgFuM5puSkBg72nxB3bHBYudF6kGEmsrU6u1d9Rmibz9vaQ2xG1eHHHD2ib",
  "key1": "3bEvD7rcDWXuG7QwNqu7ANJdvqxgUBfquhJxkujniSzvexpqzSnxHNEQGyhptzJ5rGC3P6noyAJkkFBqacTNDpu4",
  "key2": "4xbf9ay7tVKaf6jtMpPamKKDgdWVrWy2V7uxFXyuKZ4gcVCLNSoT8mzMNLS7ymACPe2fCWpjJuWZfUjV6oFUMrLd",
  "key3": "4drJVKL32TrUvMmS1fXcfccWCf5nHGajAZ27E2RgXKbPLL5HVazUfnw5iSaZdqpthoVufkobBvGHXxqcMmYzzjTJ",
  "key4": "4WgFFep4ZYRDwHJJHWRa9PfgyxUqh8THf6mbkUM4Ebq36k9q3SbwnktxqMnmAaZULseQ88ujMQ2Ekhev85U1zUvL",
  "key5": "3X6FaaKHCeAHJUrxS3LaDmNunRZrcm12ythW8tYkUaWZCSEDa7mWcGBonTzT89dryh13HJMysuHa2mWabxgxbhZS",
  "key6": "4Yv7tF2SP6agxkeYxE2mk2QfJzRTJepVxvPQsy4T6MPCoq9jSw7eKR6XKz688LV1wpPGuXwSN6FJSCNudYZMj3CW",
  "key7": "3aScXZ3hu5TXS2478KHwaeNCf2rpG2915n9JbQNAzc1i3bo4fofq571G1mtwEWvuZ1XyNxFzbVzmhtmwMwWETNCg",
  "key8": "4WdM1QrHUT4xJeNzMfCB4RpvSX8eP4LEMYyTmUkywucwVBVd4hx5Bk1YwnZ4pn6yP5ouZZc2i3ZKE8b8sJyVUtDa",
  "key9": "4oW6dZYPjDLDTu632Kq5ejnYnMA17BRABUf56Qb16Xgc3xMrKaxwVoeZn4Lizk82pQf6LsG3G1iiCrM8W5TWazbg",
  "key10": "2frhMnXU97r8gSDBLuywpqLUFH4a3M7RWumZaUhs6ZxPLHtcTTD1HbSrAkZqNSqEnWpNxWhy2Aw77pj5ZCSWwaxH",
  "key11": "33csYCQwaN7RpnwXgG6v2CdWnCD6GnS9QK5m9Fi3E9Jhu7ddTNm72Pbeo7NiyuX1dU72aVWh8oA3Cc7jmLieVPnY",
  "key12": "xM9daBbzbMkTsaPobc3aV9e6dZnHg4p2ksCsaBqBQogJe7UoQXxWiEsRJFqNndYkMGWTEL5WExRqbGiURS4TasS",
  "key13": "5WY9BrLHHS5nkUSBtkAfCAJzZpHbMJcNBf2upN2Z8Y3LaW5tX8dBgzzNnVgzNzSsWB334gy8gTNFkKPdbn8wvi5J",
  "key14": "5ir8EDELsJANaNecSbb9SmRuQCCSWgcgLEnw21jrrhPEEZGDnGziEjYYj8hKoVWh5NAnkj5n6DMAHdhNvg3n5Q2H",
  "key15": "5aevxVgtN1XurA7sbVPiLgQPv2Jnnm2BdBaydbqXBbwq5zzqMKcC17p5394Q52WWJ1GzA7h6bWuZd2zJ4CmSu7Kh",
  "key16": "26XteLqo6NuucGFzRXwbNEhmpxX1gyfzjrNTALWqT78Ws5B1JQXJwEtNp55Nu1yPt2t3V8RjMc5ewHpTAsC5J4Zv",
  "key17": "tcHHcgfepcVusKd7zBKdi33z1EZTaVHF8o1rWv2eEQ9t2bktppArM4jxnzDcyULssTSSoCMCj6MGDdu2DyDddzm",
  "key18": "2Y8ZhFGzqbeitMLGRKnT16y7SPhh5Dj6Ya6ChYYS9ZNyoMRhRxSCcXEaS4kUfTuqudifWu6M9kEL7xgUSTBCCK2S",
  "key19": "3gCmK8A6HBY9huYWixzSNBaBjGEic1WPLGxJgpqNQwSy1seN7K3rBeGfaWPRxu6dS4siiG78hv7dGt2P7gNj71u7",
  "key20": "3KZQxMLL7McgGnjFMijA4Ewe2iSCoT5caFA1oMcYjYp2Moe5UQhhXUwBzzVRRdAQkP2w7UxfkQxECFz5giH6JRdm",
  "key21": "5xUo5gKWxhEJ4tw2qQRN2ySA8LgQP2d34ryvh9kdtHWNoK9JddpqPbjHBm98CtxBcdt6A9PdAMRqzaQG61TDMH1V",
  "key22": "4ZoTS4vKcL4VQVxwgTphWt5DNGUpwXgUSWXjTgRpFym9jWUY3noPEa8tPRZgKrz8swd1Z2LkMYQ3rSmWYSdCzeav",
  "key23": "62D7bkyDbmYYhckiGaMxCJa79LnZTnnPQoNQk9Xs7bQGevj7STnndWNi9tzZND4dHcJeGDLW2K3r6ZR45W6UAwRP",
  "key24": "3wB58g5e57tFA8aoKvWNvPGnSa8gmwQY8r7THmq9YnKPBHn9h9JgDspjAQDcCXtMerStcdQfMzWa2tL2grcZWtJt",
  "key25": "3xDiAqVYeRtBXCbkXav9KtrBKWy6pxUdquqs8xWmuTkdMCRNUtdQMPLXHPdHGwG4mUXz6Ryv2coPSrcvpErrSEqd",
  "key26": "37anMqZCGn75esyNxBV85AXPkdTLccpeAfKjL7TkQnZ4XWRLSiJDDDwzJ4XqN6n3dETScGQuCY3sMS5aGVxCTras",
  "key27": "2LSPMoRrsjw8WEFMuVaJ8D2C1tiyEpQ33GNP3eXtD6V2EaPKEFjFe2vx4v3K4Qqpe9yLroTYhzmGzCER3Avbt3PM",
  "key28": "4eUFdZdZEiDRCz9k58LncWdab9C8oDsEU59gEi76vvDwQNpFGxPD3U6twnfgq6yYMdzP7gCWmnw5F5SDxBqNE4iP",
  "key29": "3nLCjbYXSKunv3j9hntKuX5WGEQiHiAi4mjojesdR5WVWrT3zRiwf1gGZexDWrAoLvd4hStvhoUnFR9FYQyzaF5S",
  "key30": "44ZQe2arjiX9EcHMwjQjA7UJsHqvq4uwW3tERV9fK1PAxh1VNHFZCz8XbhzQiU58hBg44mXfhbLJy9wGKPLnbJig",
  "key31": "2GZBCzdK3dZd1CfeAGyd4xH9muBRGRvRYDqfKbkzPgb57CmpJgWV7bftYjSLtsnpMHFVEJMtdpNXfk36Znvnc7wq",
  "key32": "539otcnK78qAPjryxihfEra17hFmjP7DThaYpWUhGZNNKCHW2MU5yah7YUk2kpeEjBhVe9DozLdZDxwkSFUTqoeg",
  "key33": "3yZipuGvW56dYFMko7aqfKk8hiWJqVRpRqAE3Xkej5XostomKMnARdPg6enQzCrFhXtsc8Y19bUSLLXB3tqBTeHu",
  "key34": "5VEDthZL6FEAnb1yPEjYBzyuUBS1HbVPcEJVdBEKwyMAF8bMxyppzCMABtUJmhouNaxmX8tYLFKetSmUzguRUAxH"
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
