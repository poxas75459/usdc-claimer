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
    "XLCeQuYYmy7SHk9x4ZrwgPnJqbunpzTaDbSGkbRBUGtnyzBbE3eG54BcpDgudRU6MaREY11Ryk45p58j5Q7hx9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QPBAKazP2FhPstoK7rp1MhBizXhwotHNzcVEAPEMSp86jE3SRNR15AZQGzMGsJ7UWjSXTn4vkxz8DoiTQ7HeGJ7",
  "key1": "4db6kG9N3B4q53Vsv4pK49TT5vc2junWD1yXxyskRrCkT82SiXCbYvHaChU1E9TqyXYLC8eieS5SUs6v1brz5WSU",
  "key2": "2tEgxoQFMXaVSnh8Kqc4GYWrhFar5JjQfRvSdyQPz5Z39wmiPRzbZkyN84UKAeJmgd8oqxaL3x3Y8pWAJJvVr94k",
  "key3": "3QW4ks4VNCytXwW7XLpXeK1zCcb16HY2NY6pr8M5FS74gaQkqZoUXPSFYV5WmkYW1jBEs9h9LZKexVTSYrav6gUM",
  "key4": "59jo5FMxoMdn5tz9X6M3MA73kE2zsEp2rBZMvKfn673fQX9K9fkdp8GAb3oTKnZpxRqLxs3SBLqUshWpraXLY2xn",
  "key5": "39JU3UUQ6W3fKTprmrnuYscJR4PPz9wLoELA2csxycmRAHcWGGwUMEg6Nfq5jBxLjfxwC7smvUWayGc4cZDdnMea",
  "key6": "2CrqfWmt8bnDP48fR4yCWqAEHxFCayCNUqLDnHN7214oREELHUEvc8aVF6uhHcJkmk3WoaEzF12gSeBHoQeSzMat",
  "key7": "27yEtcSQQaqs8DaY28jpiBihcn323qydAUJ92ZaM17vFQ6eFWXUzPQMTEofv8pHFVjgJVCF92nL2KEsq7reXKgRW",
  "key8": "9HBGtV4mZqN8UjDMvnKuwUykf8uD5FKCTWQhsdqmk2f7Gy8HhbUAmZW4eC8SfQVG3v3WYcAJFBz6KqcePnuziJi",
  "key9": "3GB86scaYoyVuDX2EC7uqxK3yepFkUReFBNLtovGpUqCrcFp5S7WsSfzQjDb7Tc8c4pbZYfraqHLDwFkDaajn3qA",
  "key10": "3stcfVCiCahzro4w7owvE4Eq57vLCjyt11aGB8EA1DdqDdmQ1H4Mn3rL2NunckWAc3mjCD1c2PdfaVzYN6KKD7wD",
  "key11": "4sgHrqCUZqs8iuXTyCMJ9RCJjJEpwHwnjQdkKofjRXqR2tJotdCxT3yCNZGspzF8VToC5o9DHxP7bDuvHPQxVbhm",
  "key12": "4VWWKXB1SAYoa9G5CY7hSg94Ecbf1yYCGLy9Z4ZmU38uH4uHXZzhDkmTcU7kXWwuGQPQjkKGytrEWtrYJzDo6CeC",
  "key13": "3GCeg9721KeHpMinGZJbUiXdGDHUeGYwggiCu2ZmWbHap6SvN2vC8mX4dQ3R9b53Mwqq4EVf4PonK2g9nppXaxCn",
  "key14": "54Hn5kGuXnzWwS8veSKGhJAqyzKV5JLN3vJTgxr2f7taBav2T6BtLjdEMSDTWemeh5TUJgk6JnVLBMSa1eE8bjY6",
  "key15": "3paVQPZeTBRumU79V93zhkJqtbxBNFqVxMc9FhGqbua11VDLwTKTtdoFsYzvXxUWTLtyoinetRTxWTbZdxWg9jwG",
  "key16": "3vzJiPa6cwUjpmMXrpYejcJxK6wpDSUNrSYU3hzWggXsfA2htE2X2Dx3JmUTcY3UknwNUsvDUXE4h7imXsUutSj",
  "key17": "5NZYvCW8cukFvJB2ioD4Cm1bo7Hy5SE2Wbe56mDgQ6eU17uqzGRvMoMKvVBX3q7FSuzkN2wEnYaYjAWCdwNGEvBj",
  "key18": "3YB4JndsGGFjoWbjdwRNcti3FKbZwNQMgYrNQem2aDfWZsQq8Jp75MhrZRVzak5xYsQXwV4jkNxs1XM7eU2g4ErS",
  "key19": "4gqCnyHM8jS2i6nztdRPoMs9cPGvpid7heWkRhEQZVczqbMwJfDLjRd1qdks7B3ZJzKVpUWS3r7epzJ9KyfuRFyP",
  "key20": "53mbyJyzAcocy4tDQ85b17vLGrbxL7Fk7WxU9E55vFobERfpyw18ASnyCa5WxFowhJoyzEqMnd4AN8mwcxfyzFjJ",
  "key21": "4z7HNso9dRkoXfRvu3BU9Nd2vELrsTBo8faPs8rpWU59oUuNAbMLyfAbZ497uyZFFEsRmXp9YoLEfYNqmvjWEBY5",
  "key22": "4xUvo4uwA6wDTJUfbGNnpPqivMsguJBZK5zrtqQkBQSAEMbA3k3jXctYMJF5zK2Msciuz33MUeoooupTyCzmUUbB",
  "key23": "3npbZ7UJy6iB2WmU5qRTXamVVuojSUYdz3sDLngHNnr6BbYUbVG8EutK3HhdiaFvNvNKKsydJXx69SYpFEZMgqzd",
  "key24": "3nWPPkDHZN4bwCFhAhGfKMHUcHE5JytW1muBkwmsfKgquBpjS3XF1sz1pgbTjSkXJgodtnZ2zyauZyqUrXGTQufM"
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
