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
    "4vhMoLhFj9aUAxDVTccagLsvLXedi2Wdn9Z23a9TMin8RKELhcRRyAz1E2rt6KaUfKEismHjSJ57tEwior43srGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tar8nTpqXiVjuzafJ7MQ3KVfj6aWscL9EboaX9Lzw7goWXBNn46AzX7jZC1frbk5iMNCi1sF87W9fBMj6sBHiYE",
  "key1": "vvedXkiy5o4bZGijTBrLJwoHMv9x1Zk9bgJ1xiWkEKHQdfr6794PevJ2RnQzuxi1bmfUHuY3rENkAUEvVS6cPxA",
  "key2": "GXNMUnQG1hkcVDjnViHG32GMmK5C27hbDauhu5PFQrpvCwxssNNw4yp43SSHB31P2Af4SbJ2cPeFwxxNtFnaifs",
  "key3": "2NzYJhdn5Nko1BNBNxmiogbywYjU2ugwscqmbwAZuv2qD1rQpErV3swwTHFtUFauw3re13F1oVksHuBjbec1i3kY",
  "key4": "2GSvz9qYDZYtHKadYg9PkkxCWRVgNzcnjEqN1zGR5gb4TVs9hbnvktp2vzLxjVqrcNSbaua3GtUR8nT3Mwj4ZZ1Z",
  "key5": "58dGJHJHDNUWDn5VjKbXh1Xc4g36d6ZcSaw1xDuASNAzGzAqnik7RvC7eJtN26ZbkaZix4DL4XF9iCC5E1WQAUbP",
  "key6": "2fo8T25pPzR68vsquewNYmEMfMs7H7ZBxrQJivw2h2vF83PCLbrApRjX7244Z99mMb2xDznYLgwZ6d2PkkfbYqGy",
  "key7": "42wUtyL9RicEutbNXQbVrDLTbtGcQZDbDAqHSqHdMG578QxTg4wAydQRN77oNYNCRWzM5MKvSEQEGBHkDMwtAQaY",
  "key8": "2RUpVCopR7KJ3C1pcBVF1DmMUrdBVgBtCSH16pN287XnWjobcM8ZyqvZghV9N92gQwUoCCUbPUHufY7eRhja3wyx",
  "key9": "26mYyTFwQyEJ5e6DURs6tpzAiKaTBXZbYi79cmuDU5PhzNVFKggcAaK7kyhbtVGwgiU7yhj3yCHWj3Z5UaeEEg3h",
  "key10": "Yjd7aXQ6Tva73DePEPVS8Yv3fUPsg7jMoQo1aFKW9t8d4brg2A1h1gAqPDVPVdScJxf2b8g5o1HpKFCuvoW2Vnj",
  "key11": "3BvcbKYbtZy7P6JE1vP9mRRvY6FYZCdSiL3YnijtZTbJgmAUca8HWdYYZSA5pEUHhYYCv6VK45S1j37QdTVkYLhP",
  "key12": "29toX2PnCy1oVvTH7X2gdD5qqdUBMiqcEcprKWVuoj8wK6yf5Xacom4vsdrAGM7CvFpRv9tQGCuZtyRuH5hxWE3b",
  "key13": "4yfnczzB2MiQfvTRsK9tjsh9taU3QtxxyuFXwckhFzrHquDghvdut4sx4VyJNNeNosD2MbwVJFB6vcFsyLz2G3aS",
  "key14": "4G6Tce4PBCqK8EQTdZXo2NJ6B37GroJRRiVTz27PsZRzNw753qMeh6hajXo3GWUsKZsAwyiKHiCavCaGyuUkh6qs",
  "key15": "1aWcU4o88oLYJtDmqA8yEVDKFua1JUczNacj2EYbwrNMthmKRErjwcMRZwasrtZ8R49P5hqa8orr8AuD2KX1qAL",
  "key16": "3RHqAePWP3Gu7ENqXWZBWMR2KzSPHSxwZMYhM99WEGhzfUTE3Mm7x6zvkGRMFQFNjDKzN4c1tWuFskPSaYWdDP7Z",
  "key17": "46tq4LuQ487ZiiD1ecSEgGDMRshdDqoJmfmZwenDsPY8rux1gsfiTf7Jbt8VnJkMz9E1wwT97wbeLNo29bDXSf1c",
  "key18": "4bJUj9jRpw3oYa7GcqXrGq8A8y2SQLBB1eZnhAZUoJPEQBoY1TinypQCALohyMkYB6LBv127sBBM9iYWQJbcj3HX",
  "key19": "2dnQo3q8hnJNCiLQhMxK4BCqtNFPHz27Ynz6RioUw8SWtk8oZ2dXZeebQKKUswVaUCPiEPGmNB9DV9MZED7db7GN",
  "key20": "ed6NR8VLny6NvynGngBn3EcPDDhwG1vCyNepBVJdFht5ytaPQBfAziquWCZ48dMkESPQzWPwsNgheJ8mxPY1suw",
  "key21": "EUAr71gjuMuD4NSK5RqkZA27SV92Lj6Qb35YSoGcqRcpGfSge1PsVxsMmvieT1VcsrhXqbGgCzetWBQt2q9kamP",
  "key22": "4tJND2y2CkSJUUPhvRhMoRqdN5vVJsJfWAyxDRoqXAWMsugZdhrxJrjABtyVzC6SY4AZoa48vRaXZbetq4tT4egM",
  "key23": "yHSK65MkDCp47C65Y1VrUsiCYYKM52kTV4TfHYe1LFYZujMZGjp4HQhW6wbwhxEuT8dTK4d1unXB3PEPenZqkmx",
  "key24": "5DgMhBfaM235LkisBYHPKHuiQgDJDa2heTPxW1msN39EwsbYRUAgiHCTmpH7jnJWXGpN6Er3Y7KshYivMV4nm4jj",
  "key25": "6cGKZQP3EqfGhhXY9ddyXrTWXz5iyMX6RXhPYQuPQuoXi5BBAeqoDynBLKEVcfM5vVDrAiTjkkzD5KPsJTjExPY",
  "key26": "3hGu2HdEvDXnpVVCMBKFJS6uN8TrJR28NnmdrTuq5viMa2yJBPkJ9iNhdfVwxGayamNHzdD3JZpb8gzLztzXs1z",
  "key27": "3xyBKynr77esj4kDkopdcyP8Gr1xDtMiGTmunAdAoUAazGWwT8wTtHU7YUrwspjEtpJiEzidkDrKSLEDYK1uRSHE",
  "key28": "26ZU8dLfqLpJ2tGKp3zQjqDHPAGtZQUDQERSiJF45iwr5ZXff5jfUfKqMc5k7ZfVV3HVcDNRDZh3Pjpdjj2mMBrB",
  "key29": "3aoHqWTuQVmgebBQF8hexvTEPfmNJYYKJP8usMENiR7JEYx7ryRDHw3R7EDkyVAVEJcqT5CV2nZqDDoABmrmmjLb",
  "key30": "4eR5iHyiBKtKmavqLE5WbvKfE9bbhfw42UL5rYi5u15odaDSwjB56twV2kgNnJW2RkvBTjQ2ZxmJS8oQcmCUSEr3",
  "key31": "62HdFetEPZ7GF2r9K9JVuarjpQEJfohrf625Z7ERacdrhpamK7bHUZQ9Y2P2TQq2XCo1tjWYuHy7L8Fqxhx3qwru",
  "key32": "2zap9jmYHGvjoP4ayLeZNx5WwzDbrAExwsu2ncPij3AjRpFfYM6H2YQnpg6cvaeuEVzPVShEravxo7sBb2MQLnik",
  "key33": "29JwcRAKGpo3SAUccqXW1g53cL4Kgb1UWMAHG2jKLkaNMrsGWRygwjGpjF1uMo7ShQSrSEqmuegKCZQUVYbzNPof",
  "key34": "5ifNzCJAkEuQGnPpP6SjcMRC438iffos5ZJi1GpeyaMGPQrVXt4z4LB8cwynNMVdnrnZiRCFxkoQWGJsDxAJfHaP",
  "key35": "idtxpizKPz1dVSirpVD7hJckRkFfzUcYDwu3XyTtN5Q72MuaP8abiMbQPCpxJ9tXAnb9koiXdHfpVKBih6JrR1d",
  "key36": "3Y2QGz9Wf65QjW8izGkfNFqt8pHHiFW91s6jxTZJvLdWXud65jMQm2nZCeFuXmYe3dqzdKTBrgRpQppwZsKijbU6"
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
