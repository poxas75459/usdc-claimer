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
    "5a5VnGFczWG7yE3fA1ArwvyYmHi39UGFvjfBUqBW3Cr5zNzSK23ABUC2Xs55ucFRSEpwh4QWUciRL6RK4KZANWr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G9sFzRi4ndDaZJFLBp6UYWgsccsDW3432M5APiNQKTLAH6zdQgVGuoADdeQziXAVD1dsPxGPAsdqkMbdUi9V4M9",
  "key1": "3yLQS4Q6f7ZchbRgQLLjvhZx1nmqz93ei4uS49ewASQVTzzeEHYnDCSCkxx9CsTrtsBp6wNfauWKRPW4StyBEGoZ",
  "key2": "U9dMh3ra1rHjxW6C89GKMBjSknM9Ei2DYUm2yavefoj8mcAD5uoTt1wheC7gkeCJJtRTb1mqM6RXGagJ5NEUcTA",
  "key3": "3dmT2Eq3kz1LCoyvnF7R51BqFhVKK2bZinkrtkzKSrk9qqc2oEh9TV4kSrCPNmAAqP7hQc2LVGdmjEaAR3oggx5r",
  "key4": "64LLBBasBAh8iMBDALE84UEiNgdMLDyMA5W1TXK9BSEY3QbHwVmRq8JjUSQuu1nD6oQoDx11M4U8tD9X3VsbwLbo",
  "key5": "5283KtW87JTJeRyr3UqNVZBMUdk4ayQKzqnHb6jgeAhDss9GyArC5UogwQc8LwMDpse1CgYyM3za3sz8Z8qsS8gV",
  "key6": "291RMXpEbKFCKLWrRE5X4dkJSzY2gJBk8nDRXXSPcXuMx1zfUysrVeFWDnQrUajXRTiEH1BiR61gEWkV4ZcWV3rv",
  "key7": "54XGf2f9LPzD4JxsFGrAn7qZ6i375hVokgwFBkPxYh5AjD9YDGkYLd6fCLDDzfp7YaYY4uSrgQaRXbjB6Q77ZEoB",
  "key8": "3f3h5aPb8yFJoXpUhThxbdXN7Sy2n5xWseDXcDY7tNNtM7agmTvDyhWUtRyKVikr46PJwZUfnfRpmufhp8GZHubp",
  "key9": "QdirrvS6eqXjZaKvixABuG4SRhj3VhzRfbuLV7RG3AKFvLcvJUybSBL9dxNFcvoZkc2RADhW1kJWJrfBrkAML9P",
  "key10": "4G7oy88rimtPAyefxPsoFe2iQXdba8x9SsRV9SAYdnk8rMKXynMyK5xCAx9cBpSzjQYDJx4U6eSW6mMpCa8ywm3Z",
  "key11": "3JLsby5zCUJmfZ61EjaWBsgwsqRyGjTiYms2sVU61D8H9HBrdoTzs1QezdsXDebsvThFUC4PFDBCRsZLSMpL8U9j",
  "key12": "qtiUfv8LAGYBkPPxXJQP25v1dKSh5HMYfkvr6pxVJZ259kUDpJCHgLymKuqE2rpphWRrtssydGqVLTAoXwVhYmG",
  "key13": "8Uu9GbmQVEywQdzsCZ5MnS2AVGqdvM6gsCbBpdBfQgHSmGEqHnfAt3Tk9hrCgPyCQNPpVhTVxr1MsvPdoLQPEdT",
  "key14": "9L13YazezhjJNtn2nKZPS5KRtghnmPEfg979XQE8WSN897zSp4YwUt3uFyVa2TtTBccemAWJTnokw8hL7BvGeEc",
  "key15": "3A2JeSyurmtEFWyB1Ez1kENbQLcz8jsGvxP4iGEfdArYsqeG2eokxUo3RDLrq6e1C3m69vgX3xcHNGTtA4asjF2R",
  "key16": "53BntQKg6eGoMgLdUFjhjTU8D1BTtFDARNTpDsPj8zLqMrEYpgthoDBZzW9zWsBxyLxHz839a6tqi7jzcFpMbPwd",
  "key17": "4wAEhhf6WgB74wUdjG5HBUHA4jzCUpkt2fy16BLKag77nw2kyR8KQTeiDCyXNkwJecpfAPMcbKfUaSWShvoLHnie",
  "key18": "ywdiQqcLosWYKWD5kYu4XMKxgiPHT74UqLUq2aFXXUVRD5FjdBYUm4WVoMCxTs9SKytuMyzGUNjxY9ZVcSaxppb",
  "key19": "5y9du2T6HH6ESM3am8psnJETisQZnvs6MRvwfTsNcEuekMpvjwKxy4wCX4yRC7qgi6Kb81yThb7ssfN3Byk1ctud",
  "key20": "3kdSWTUH6fMCD9dX6ev8xpoeArpDJiLbc3hwoc9iqTnuJdUTkAeTyNCbmvjM1i7CCmcvArEDThUn5Dptf8gnnkyP",
  "key21": "4KYXKAnYjcv3YZWyx19ELAdGv2jwe13a3y6gEZ6KS2rSKuFzrsU28XmJ32uoH67xs2NW8cwWd9Lzvk6w2xnNb6hj",
  "key22": "4vvgzNCvDsvmp2vtqNMAVGXkempn8k787GqDX9UqW4ZQoa31irwRNe62HU8P2Ly56sjCDWfCroxK5QdeDLM7Nuz7",
  "key23": "2QLTJquGy5ZMhcJq6eLdNWziTFWT6J83SBB9FyzKtd5oq4rx8NsBpkorafKmvaKs3zRhyVeD41m1LP51GwdPaAEV",
  "key24": "GKo7ysBq6KVDmHbAbBWPoBY5vd4H4GBZKjJHTaA6fab7mGPng1kKxjWurabvREUAzaQWN8LzDp7zDLEDgV5DtmX",
  "key25": "2UQFkgizwDSJGuMktoYgHHirfdnoTHomveQufRJwYAdLEKXy25vB4AodtnsaXb2hKrWPxNtBMpNtLk9pq5gLMKoB",
  "key26": "25VnBY46ToKThJHfSWpDjkw7cvyUYTQ5v1k24ZtEB8YG14XWNsT6pqKh55F9JQ6QKnzqMkuC8CSEgwZoPtpGuBGc",
  "key27": "5qaMktTGRACFTsR4GCBSw12SwsUnaVi6coL9EcBHCdJoabEGCzVukgPBwWBLFDsungcJnGq4aGp8CrWkSBWhZZc7",
  "key28": "2hGpDtKZ2CfitJVuyGrLxV5Krdq9sZecZZuKgU8yJXsZxWtZKwkSucf7BnF6na3xa9rdQbewRo1uVqTZdMB4mnz5",
  "key29": "2bSD9cqqGN6PsE8djEfqzXVwSNoQVdCQNjeotJeUnV18dnt8FYwtZTaBJwVvaSxguvm2hWvNrHBzhLL2eYXXXjUV",
  "key30": "nn2HAyquk4K73jn3dHPhHGTps2JhnmiwcZAnQ5nrHWMUKSM1Rdt7fXWossMwvHRUSdnfZx4LHeBAqywdkapWom1",
  "key31": "2tZ8KvaVEWzxwniQx2TKVDUZSfTaZMAJq9ZJ8AC9dP1a7vcmNxZb1F1NxBNgPmvPMDEi57XEdxeesy8ASKbAxPgh",
  "key32": "4X2ndVsg3GEBotPaJaK9TCSvwzX7JZdkamZEaJW1rLudrHCY6bGVBMAmfhGyonfCYa7jZ6UGohzg6WSkYFpeiu1G",
  "key33": "4QaCd6Nr4k6equfBxbUsKradMWBSQf8XJF9kDmMXwhgGkkf1TKjgQdjpkcpKNhpdqeKDvR9guu2qNjvJhUapridQ",
  "key34": "4XqiE1CXujEW2Bq1pTwuyqkAkGV7k4gHtEcJ6Yd1kV2tyJExCsRmaovtjUQpFwiF17Xqqu6rMndBe5LbBJC2nfS2"
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
