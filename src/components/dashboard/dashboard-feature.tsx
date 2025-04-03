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
    "5PP14bGyfffstkgXG2ViPEw5uwdg9cusbP6WgLHck6EXWkHsgx9uCgLXF4QzHkbeSTppFV1DGoGM9Yvxyxmf8Anq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GfWdBJzRjqKkkHCVZBkmx75Zno1JoCy435zEcKf4KVk5Sh9m3EGGSVREybnWjzVX58VfcEokcxGSCHKXo78XRvW",
  "key1": "chfFAv1xcWKdg23ZWUeNMV4BdL1zJVESSiVUfKZZg5Dki6jEBN39ChfKrdLLw1y6jcztv3d19Ee5PM9N3jPaXtu",
  "key2": "5uPS94Vtk5pWuk5VtKPyEhd5zPbA2CRktf6LgcoVmkB68eRpgkb8xmRxWUPMXtVa8qbmebpwQmCpZijY9S8Qn7hL",
  "key3": "2TNAgfZq15vCFTErWssNsbc5cwMQyk7RK5yZHqpWakDWipHG3R12GAWzJALeN9ieDjk5hrMjDy1cn6s3Zhwtwd3k",
  "key4": "44CaK4m397PGDSTPp6Fnr4di4A8xALidu3MUHx6hKVoCLGkVJVWLAe6P9iweaumsMn4JdFjeWWAdJDd1nnjY3byq",
  "key5": "3gzK7Neb9gs63EAFPVYLUUZBT7rwTkoNmiRyKZUXmj2sjeaAAkUwCD4gh5oqzX79dL4FPQweuFBHnTZeELEQEGYz",
  "key6": "W28jJtT2NtQiQ9K6rzkW1o39HwVk2dkW82RvyKcKGKnfMYP8RT45nBQT2nZtMkcrkSstPwH2qkxGjkngqMtHyGU",
  "key7": "3fcnb1gZ8gguZEKbCcwy2WUdQkTsYsemKCRQgKpT7JBoY8BpLm7JVBoeatPYHDeN4gP3BwSf4RXUZWDdP6yCkPPX",
  "key8": "gfZ2hYH7kjPpvLanrZ7xxMFnVcqcAtej3qcQ6DmbF75V4uPHn2SRnKcTNYLJnTqMpAWyu1oRgcSR3qZc32z9Nsi",
  "key9": "s6pdCsLqVXWh2gy3dJ9CdrZXAbQyNr7ukzEdKKUNkZFBiTpFMh5bTiWrXRP1YA1vvM38JvwiPXt73XVwNgLWX9p",
  "key10": "5DDF9QVtKCLfWi7Kf4UtPKBc46acmRLDthsR4RwkPhWXq2BWS2Z2J3QxCieJZkhGjaQEna9MrF3KwzUd2M8hxaXU",
  "key11": "zPuEgQgzDStwE2yanjwATZsF6TrzSEZYjscVdbUH8AavLNrqc88yr6zHD4335bB2Ta2av9BsFx21dUvEKQHbHLL",
  "key12": "HhCctk6dpsXopH7RPJZND1TcZjKiytaFq61XpLAmGno2xtFmn7yC11bdiEa6CbBdDeJgLAbaBarsfY2QdoQSj3D",
  "key13": "5GHTCJXE7mHRZDhaNJRimeecVCY83saNJK5UtV9LY2sAkXpR9Lao5MZnCZYW9YfDU96GEQ7JqzWbjz1JanaFJKbd",
  "key14": "SnmE8683SKFhk4fQpzYnr54GUfZYkqpV4ThEd8dVWLRkPvhsPernxy2PDT74SMgM37pQsiFMMTGGzqeGCZ9iDu5",
  "key15": "4b6Q8oEubfDsWQEhSnY3VQjC8BgySHFL4pu5hHToiWPdNa6qV4igWZRmvWeQQTvB75AtvDPqbpMKmZ3rHdLbvo8Z",
  "key16": "3zCMoMt5idyvW23517DZK3UYU71hBjvSRtvzZSUP5cYWMKduE8CJqx3WgcoRsSi1F6QGbmncbaKiqKRhpcsaJR4k",
  "key17": "5FPQm4uDcSJCxypiknWimFyWAjhDi3ssZTWYmFPSrmLkRkZ7YSUHgr83uNVyDeH8zgHCdX3bLshD5U6mAot7NkKw",
  "key18": "6m4fEWzqnkkXsvsieSA4Aa6aR51EZJu3Wq6sRb6yT9mTF8yN3Ye18aJTaM5oQi75C8VkLKqJrU3VyCynz2GvoaC",
  "key19": "41EfXs2c2FDTJSjkVEdmFQzVaY5xPR5ueAic943ChwK2CPBUChTfcCzc1K8z3wpe4FFxBaFUVeR1vfRFiEPFxxZX",
  "key20": "5VU7NgRVWp49rxZRnTvf1yF47iMF7swvDGzvyszscPhfauwJpkcMdFXfKkpEV8UsA9NcnZyj4J6bWpeP514PVzuZ",
  "key21": "2oegyYMLsGaXtUZsAHWvPJgPoYhRQu9jQgGe34aEX1jsUhebUxoSttgpWmYgtyVs4fmjyRAwUWQRR9SszxcdM7RZ",
  "key22": "33m9qCXpG9HKx7kBjHq6jV7tNEHW9SmgixrEmv2TDWFTWZrvdHMBmVkqJ5gdeDxVk6ELtPakCk9WxDzMBC6AM9RH",
  "key23": "3DcV2LTXaEkf1rYKRziM71rHtQgxU7a8TgeFMRwExjX34NVkku1fcuLin9njCdif2fWZAn7agyFyjvuxCfRsQvBR",
  "key24": "4Qkfpm65m1VDbuNtaTB4uwHWkLacmFf9ZKvDHta8QHkvaGdDMaNoXDt3bbw7U2qhTBKWz34yway8vakacm1mgbz6",
  "key25": "3ULGzPBxshCxmSkKs1gEAuS3zWBB8VUPe4SAxJWLCQprJwgg64SgyzdSiBBDUdHy7NBFCiKq2uPYZr6wJoZKVU1R",
  "key26": "3GkA5xP6qEFLnq9kJrZyVjHjZ9YCRy2vaDQn4RzY21U3xGw2yqz7BZpqKWZ2wSSiQ1ZwKE7KebU1nxseWTdz7MPk",
  "key27": "bfTTepdDrfiGvTgsanwJzsqNuhdV4EMKMQaC5ipeLtSPb7ayMkDnSHot9YXdvHZJKAZ8Gn3p74oGpRh2topAHeP",
  "key28": "4KQKNc2PaByQpSJNVBYyL6ZYvsEsE9LF9AYZkJa1GtjXVEkqeTGtY6pBwVLmKgWCW6FLBtp8GPUHWpgiVkPNSmg3",
  "key29": "44GGSVCnCU7Gd6KW77NNF8H8mbzfesj7KG7Uh8JdGQncgbnjmDLAobLUKKkZm2QEFRM6RNqNGsY3XHzVqyH1yadd",
  "key30": "2CJMz2WgLMyJS8pkLSNhTexXurUyzERoPaK7yiUybxXJcpQYqqyJRRyMzdv8PHEjB3nNi5CsJfduf2yQ4oF9yHW2"
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
