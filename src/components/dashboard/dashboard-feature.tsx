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
    "2GRtrFiYGPebJcQHZtrRJ3iAnPyBktDDSoWKjApy1VUbWGH8cQMEwjawgbA7r4v7S3973APeNrRiAextKBK6zxpT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KpWfHr3GKPhmBMckxTrUFwF67uCY8M9zbHMknLXu3TYU2M3HCYPxU6bV5CyystPmhnS4uzAjT85UHDUMTdCp2s1",
  "key1": "2zLHYiXGLgVdTYmBubee35N78HziLpzPDskw1vRXz211qQst51y6JhjXtjpjmcQ1dMepNSZajpuRzCPsYyTXn5BG",
  "key2": "4E3DyKcy1NPc4x2SSDecSH1LPn7ePHALrMd14kY6Z92aMPe5b5NVRs9TkYawB7ftbvkpvX1zou3Nohoh547t4iTc",
  "key3": "2mhQf7MknVDex9cf6Bp967qwWZEYywe6m2neMykmc2gWBuU2u8rwWsRBrhB6jCQ5MiaW3qDg7zsn46564dS8pfo1",
  "key4": "2cbQBK6byZucnehQG3aYbfmQd7JKytzjzGniRKkdFFurCa7jtzHcKm5dk4fjBn5RHvkRQ8bLqd6uQ68yKSMSBSAR",
  "key5": "5vbvQ37c8UxCtEsVPpWWaUY8cSJxUcYKhV2dFGknbGaxwG15h6x6rrrKoHjpQYbSvRe9J6qxf2rzffK7AKs7miRk",
  "key6": "3ctzvK4SN7ciznq69KUTL4GVPAMHNyDmkSR6rrx1codCAY5ATQdfo3AFaURWY5MRwZHF8wQETJRjR7TRFC6tHsL9",
  "key7": "5UEbsK3Yaba2VVB7j213ZQqN4zkZLP9kANQfbmCVGrqYBpKYLgs2fh339unPM5n3t67jWzsY35GxS3iL3bpy4ptw",
  "key8": "drdisVUVBgrE7JagDj2VaNrzUmocQV5HX5D6ee9tVAzF66fpCqfC8VpEwFDF3A1taEhzDJHLnzxYK2D4ijecm8s",
  "key9": "2jJfoSvkb26cb6kr4QybNKcf1Y61ubR3Bog1LUm8sPS4XyhgPPA8ujhdqxkRRiruQfzpLE551EisWfBtck3MonfH",
  "key10": "3x7K99PpntCfv4yyq1ctzJjQqfmGXAwiMYdRd9Gj6ZjUHALVQpb19jvTzJcafta4GsnG4C7YbVjrSgGvkS8ZRH3X",
  "key11": "5ZGnP9eCKntasJwuvqNS49piZrfivwh9wVBch1K2qDTVyfeh4HiYRgBssR9F4EKoYcpa6mRa8zBmrwnz7jorrvmu",
  "key12": "2uhLrbo63kjzMhkf3KPf1ubF9xjorFcP23GZnGDX6SfgyGbraSXTh5u25KSRC289tk3A15PpeWFUCxXz42jzTkiU",
  "key13": "33sYcjF6cQi6LU4iYK5jVZgSb92WtnLb54e3X5mdtWjduJqzuxiwoPqA6j9a3H38XrXJubV8t3zUCCEk481KHjXE",
  "key14": "skZgdXmS51e8ASV3BpkCuiPW2wQNSLF42szZvgyhcNkZ2Wv7ZYjaJUeEQ38znjUzemeyi2eFapUZCpJP8YhnWE6",
  "key15": "4GA5pqvqCs3kaTxyPEHMAwSQuFH3EdDJELH6FpB1e2YCoaxZSnuQVCKiiFg847LWw5W7QpyXQ2Tq8VTCP5spLKro",
  "key16": "2FgCC8kFZCs2PGFYzHBQoJMVX9BrhEBLN89KyPKTd29ckSo3wcSZkxjXgZH1DJE4h1wG7sVJ3QFP1krQWwUtuRWW",
  "key17": "2EZjecyy6ZySu5D5UPZRuyMp7evg1JUp5EhHN2EJHwYaveEK3cnRQGTXKEggqQzdp8NA3aM1RMw2BoMLHxpYeox3",
  "key18": "5vBnKCaAS92THnjHEZLxDmkiRP9BRtL9UxbRYEPGZpB19KoA8n7wMcuS3ZKgWzsBTVpi29MMYbYpXXS1hBnTv6ws",
  "key19": "D2637W4zZNfd2kLp5HcY6MWUQATe1aveKSrNG3bi93zqnG5frbANYF8mGkRSU2PxW2pP5LbB8ihcTFLCffBJFgt",
  "key20": "4T9HvhkDHxSwh6mDFr77ooyHeu6Ksb2HDpC56YFGSYr3CiAwP6hBymfHA4Z7HQFia4Vrpw5enZ2Qkv452deH9K5W",
  "key21": "4CZSTHvhjN9j7KSk7iXG9RAvupMYZ4CPWKEUf444ovQeNrmc3oS7E6Wfs7ZLDRWLu9qBmETC7kZ36r9avFfEdWLe",
  "key22": "4V9UtZYoGf6hf5imUXfy8vv47oWUwsqd9qCGKE6fc3jXy364cVrz7JhtHrbvfTUwgaqpDv3aFtEPyEM1qvqB3BaQ",
  "key23": "4dWMQyxW8k99wXGeBjYjBy91tckaGo389uZpiid1HsEM2pdLS7TAGYc6s13txuQnV9NYwDyyo6HXrYJmJghm5zuX",
  "key24": "37KKYT65NmN1vqQ7UZQiG1oJg9V6TQ1sVz4FqufEbufKFWYnX79GDSoC5MeiQ1AkPZbzsyTd7L6JZpNaG4U3SWvF"
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
