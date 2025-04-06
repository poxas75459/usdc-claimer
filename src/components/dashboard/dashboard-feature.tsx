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
    "3AoTtj8CsXMKXRCGecPhVS6m4TKbAv3aEnaZAZB2DDW8o1zh4fHvpVQDUok4jasyjpLxNkRGR1NDVEtThZsCQgx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o4Fv4ucBitXVHUHZunCVC4QtvMDHQ59nj4EGuAbtYYYicxz3Vp3gt54GH2u8QN7r6c9hL4aJa6bs98w2e8WvavY",
  "key1": "4ocsxKiYAeSzB4TqkWXxsahMCtnUxPq6VhVHvQj7kghYSgs515CLe1J5VoTY3cSaYBE7b4GNL1uZW1EWVvL2ELe2",
  "key2": "3hquyrNQKifiw48rA2kZ3VUhKK448aStcUtuXHrC1KSQHLgmK4Sy9oTHzyX1sNcr5mP1fF8dhSk8dzSkWXAwdj5k",
  "key3": "nFY2PCoNRdSg5ZpgeExHcdw2qFFiArUnsdQXwr8iGh3hraKMRfMkYZxMptEBybn1rWWPBQA1XsWCiD6h3yaoBC4",
  "key4": "2wndp1FHMmLCXU3KW8cqypq8KKUYaDXYsBQjwhhWdLrfhphhir2nnS1y5QSUGGJ9FgHrjNk8HynjzDHDfHjq6snA",
  "key5": "3tzF72eAeqqXAd9KMN72UADXEc87sCNhHpkv1FM5npEnGv6aWfqTiejsQsFpv7YPUg2Lq8UEfAZEraCTRcA6jfjU",
  "key6": "5JJ4qxSPqJCH5zhvtCX3VjW7vZX645wX5pr2FVtFg4LhAxMrXwPZZc1YeLQaXp7SZJQQwVNJDP77KBm9TWemDU1a",
  "key7": "2r3wxqgDm4qcEcrTTgLXRKsJDfSqYfVLJyLnj9bynn4S6dHqcn6rytsDUjUQCiZ6HZfHDXQBW7Yhb3GtVnMEFYj6",
  "key8": "49TFrzdrfs381FBqvS1QoqgvcdyQKisXiMLjLXMAik9aQthTB3X7UX9xWjFBAg6WkNUYYK1LtLrDMzv53p2x6SYK",
  "key9": "2MX3xTsek32TKJfxGSbCUq2UxAzF1DiRNiLtJ2Lo6mNF1XJjAhuqGa7H13hJCbZM9Hq4HG1AKR5CyYtMoVGx8RdG",
  "key10": "5vMi8LAnnDRtNDJipXE8b9gTuwgszTTCHuqGAVWWTebi8CvuTEQLEfXyNi17fZmVdWy5R5BikJ6S2NeLWCtJS1Gu",
  "key11": "kQe2wXLFX4eppCoepYd2YpT8Xe4moNQD8FnZEtphhpRf5rBNgWMuAx574Jgf1fynb6qxzqkhDqhP5Bt3cS4MMyb",
  "key12": "9TSDmfXMYrrNBtNEV2ctnrTsfWNYTyYwc3Aien4wkt8MFidPxXH4kimQ9NR3XZrYQgycaiP2ztzovpv7yFhrVav",
  "key13": "4fvyb3VaH7qZH7kiSUtbSGJfvf3qPpnkP7o5YuCFykGcEHuP6NYLoS83ckfYKjkq7Hj9AbVg6iDHX9ygeEtKtyqF",
  "key14": "2yXF4iVrLfU1rKwocC3iQWX4H5xgVjXXRoTkaBmRZ2M7fWJwBfXi82ADoj5JwxvCZmjUeRUz86sWp9P8tg9U3Jui",
  "key15": "5Bm9YXZPm941SqEmdyg4gkzK1GPgvPFYCcgP6fiBimyEGozm8faxhgUCAjjEhf1dhpzsrKSY3dniE2RgJKAB1RXw",
  "key16": "4w8K26T3VcwbnUxKtsCCLejN21oE6umrKyBEqysBLcPecErZZUGvd9Y5jHtzNEq1FnH4KD6QdPCX4uYEnC7sjDgx",
  "key17": "asQWVVDTtssc9bgRrrNME5cnGnfgJGxt3spH7XuJdiCb9ei7NAiBmZLDoFft3ySKm9agQhZCq5RDqicgaB1mdhc",
  "key18": "U6PG7NNq9PkiTH65kvCvde984rLhBC868RTa8xb1LdzRg7dps9WaYe9apJEWVTsQXX4ipvVHGcjcF3mEYzmgvso",
  "key19": "5rQQPmN6ku3XF9RnvVqdRzccKiUoZQgGo11TL4qpd4MUjxt4hgasvTPppevyMuvzNNwdoEmNG2sE7F33tqXDEfK4",
  "key20": "5XUWwAzmdLTwx53qcGGgVXFJ4FuT7pajMCCNfzd6aNbAYeG4DkKQy7VUeQcozBNeY8HecPLoGVDzvrvyyF91bVtG",
  "key21": "5TBU8BnYfR1nyKvRGA9mmQwRawMRMFLedTk5HmzkaNXNKhke6VvE3cfLd623RxKNDzn1pen2XEgQH4HdyaYqMjvp",
  "key22": "2LeTDg48KArj9sPWYybhMHiUqLw6aQeaqNaQStD161Qn6fbXdg3gXyj71vTfsRzXPERad9RtWbYJk3Z8f8Y5k8gX",
  "key23": "1Sjd5dTTSHWfBLoDryD4qAEDEZTksrcmBG7K6N3DbxCRVxN8YboAV8wMqBQ7uhticQFKUsaKST5LucPaTzTLKPb",
  "key24": "6px8PigrhebPPa2hNL4Xzf5dY9Ft46e2Rt4KaxZgqD1AbckwmbL2vm3eg9zgSYg7qbJGUYkj5jfFEtUtVsesrN4",
  "key25": "5ReW1cqUhHhLHEJtAd2fV9vsRiLNr76FQJwWxN2M1BxjR6wvaC95D7TaSiMJggB1hpbq5u6yhdiTkxnkKj8wmtYa",
  "key26": "2eqPQSASWJNKtUtrp3gmwHAgMzEx35FAP4EDgKxXu57oqTBbuWnLsXQ9xfDhNQ3Pkr6wRfYmMVYmb8B6Y2m2iQjz",
  "key27": "4nin37JbbEkbz7jtutqs5yWk7ofdVLURuhXKtpYn7CFuGSANtibTELRShfuaT8WPjzhtzKiSX4KgVFg7KVPpMrb7",
  "key28": "T8Anc1PNCqLNqDSX9LL79KEJUZKuYQz4L5zwgjVgNPTH7xVPG11q82Hzwpu6u1KfJDYtMkMX7eS1dKLXNWCPBVs",
  "key29": "4t7aorCgFWiKntSdRSd3TPPN7z8M3Lwwx2Efd9PBGcuS9vSoaDmNKqRM15p8GwNigi2GZBSS2bWx3jpE5K8VEYP4",
  "key30": "5ni4odR9Lxrz1WSYZ1YVAN3cCaChLiP14pVvnytcgCLQMcWpCEzKmy2X9qQg2f1VaKVbb1A89q1bcsdfuErQnpf8",
  "key31": "3fMGHj2S3duFLZS2rhQCbY9dL6jFqxczh1cuwjRSE71krXNxnpRhcUaow8svRjJiZv1wH9CNrif2YEjedqYxnP18",
  "key32": "22RxcZTFv3gotmt1s6iFa4NgTHTG4PQPmKimyQN4kVULfXrREMF3241auu9Lz1A4kFvJLrJXzeKjz7VJVKFLz8RR"
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
