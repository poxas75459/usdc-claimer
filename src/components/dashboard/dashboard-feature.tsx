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
    "4KVUHGtHXKek8DuqEvwzwe49fSowQJT6dAjeTt7x51V3YbYp9DNeW56vskKnLSzompW81VMD9cV44av5vDhQTm7n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49yPrHTotSNF4aVV5YLQ55vpJQ2TXTBF4YoYCJ8LVmEG1uigmB1i7xqqgTxYDiJo2ZNjXDwDzWp4x8xwqx7iHk5o",
  "key1": "2y1R664bPNcbNLekDWoXWrbsgChqQcNZJD52vhnoq3X2ketznHB2Dc76ejzN6EkAiN2cKDX8dgzrFmXqq7qeX8pY",
  "key2": "5rwELxEx6uDtnbS3XiT5xpWwMuBJQoGTbQ82cquVwKHhS6BtdBodhkAJ48Jc9SN5xPfnzpo241qwxe2eiXgM11yS",
  "key3": "5Qgx1PetHzrLfnh5mHiqC4Ys8BSWKqZzt5qoMrJksxC1FdPfgwsd1THtVvNgUsEu6YNZe8BJyc2EjDidtDRVJkC6",
  "key4": "nKFXyUpsXSqHcnq7HtbwQsER1TzARCLEnQrtKxnLNPECPBaviYvGaB7GBn3GMky3y562SRqFeNvU8wyWide6UMx",
  "key5": "4iQU1PbHjjr9wsywghwLRn7d9qepHuDiQqxArbjMbFbMZEiwVgvwmyjSA9QEqMr2aziukXsuwvDiZN696NfrKJga",
  "key6": "4fLLHMYiJS79E14b1rRL7dPRGuDXe9p3TqTxerpQAwitmXnBzKDrHtm6TnYFuC27BV3QNF3v8f7mE9FEc15YjYKN",
  "key7": "oEtsWqRdPT8JowDe5DzZBjJgDrGdawms2H7qE4Jv9soH2nrWXcTsakgLWww1sEXHWJ7PMwzr3QaXDiqhcqLpxNY",
  "key8": "9Gkmwjw3nquqo1UADSJpib9RY6xji6mGaWp9FrSFpbbpR6N5WvPbDerUF9xYMYoyP65qRtNEbv7B8U5fvoCv6TP",
  "key9": "4mqFQFKixL4FJNdpPNqWus5VTK5ge9Apv1YhHLyyoCwq3QfCYhmHHuWaf8B36jb15RDRkdxeews8EwGA1sciKtTC",
  "key10": "4xijYMPCSa4goMaambUpGEAAS7f26RdzuLFDBSrFTz87HFMDqdF4mvpgNNDE3wTXvLgDrRALzWVyTznP9XKuRQXv",
  "key11": "2svGu6T9BgZxVYFkqEmKRyjLBf3We4CvHYgEssNGLAj8vSV5sX5PvuDxNFi1q8k3eMh3o4ef1Vocg4hnq11zC2y4",
  "key12": "5eBCYS87e4tqr5SV1tCzzRQwN9PWEUjvpNMWjQuHeMFqy929LGmqMrjEevbG5KM2fmejnKqLurtduvL3NmLUkNGi",
  "key13": "58JZz1tLVW5TJkuMbXEPCuMTxwpukg6aQBRZQ5pXPgcVVDhxPf87WhSpMPq1ZUqRR8oRZRjQUpDi12G5mpotNmWb",
  "key14": "3UgB3NXx9ewxM9GwGKVAUJTFxGPnq3Yozz5u4SnPxmaZxBpsF8XA4TEjHH9JWjXQviXUsEsDR3f1kt5NWsGGC816",
  "key15": "4xRYwX2HjsUv64uHHFxktRJG5ZVAbEH6FNBVfmAeoaFgnBMd3ib3ktyw4XgAhmAtXmkzs1zXjPGeQopdW6tf3FPq",
  "key16": "568MzrT4wAbyUWNhfp31ZYrWn3kBEEiSNbZLubeQN18whSinQurme4rKNVEXTHHqrTpvYTkgc5XTxbYzxHt6ykXW",
  "key17": "3k8oCHuAnqwsyJVwKNKVX41oNPipkSYHikztwXztvLJnEeKxR3HwBqt9SvRRBacnSjwVhayQzeqZgiqtk63BBMMU",
  "key18": "2r3wAf9J8fgopHPjX4W16hqcJkiNTne1AcCRyy7ZLjNP33VnUb4FQn3qmMnNDdtbbWSYsyH32JCk6k3UWkeAhdQV",
  "key19": "4U1HVmWFabGd1vpAAMTZMrqd7aJjhfDMuHy6rroovQfEbnCaGdJZtMDs9jJvNZV5oG2JWU7Y5UkTeak86KQhvtho",
  "key20": "3sznpBuEXLVkf9FnE7AWZ1H1rhquQjRJD4Y86jU1rv9vw47TBAf9MtXpdWHbx4KTK7aVw6b5usgm35UfgtnZvJZe",
  "key21": "3PpQNbrdXYVuVnQ49XQY6CgbSFnJ88iTbhmMctfCXo4H5HUNT5PRv6pE56f7urVmaYMdjVPTkuA9yKorDCaqgLU6",
  "key22": "euuiDAunbzwbb4Zp9UzBdMyAMmLqCRmbrhhyi2jyRXVzajMexcgZb1JXP6qoQ7CG1Kuj1DJ96vgqGn9koA5fz4V",
  "key23": "5mL9tDzywfpFXXSLkJTjkRvmZBva3CsWznQJt7pzifnQ4kbFF6d7JeFGJr4BfKqfBb6u3wSTixD3XQvpV3p3ME1w",
  "key24": "3C4DN2cgpDb3q5wpcXYN35euz82z4x8TsVWWpgZp5HARNkH2UGmbsZ2roTumj7X3QgScZTcxSqvnAA7xEuGNbsmK",
  "key25": "2sUTNuMqyEwL4Nnjx19yAYoydYRCg7W4xQGHys2uboVpggCcjFv3CdQVuEQMfz3evQf7jq3SLyoMSCGQG1VJq7zZ",
  "key26": "4bV7Xcg9AUUFEsg3XMG97zckN2wgDSr6DW3HH9tdBPXNnf5MaG7pMb7wSGwJmeX4bwMd4e7uyx3p3bJuXgB4HGbs",
  "key27": "2HbVYkZ24sJQDA26YZUUJSq8ncybNAXV8KJr91hDdNUaDzTGFvVVzmV5xA87DVBWA6VNfUoNzUHVuoLCqtwEUMMJ",
  "key28": "JACTiB5dvP85rLsahNEY8XfFgjvU9YYXAzT3j7vuvPjiqdQvWCWuqJCYjYDjarx6jj43qgyepndZGJ3j7tUY77E",
  "key29": "4fnksjQbstd69CXgbvwUyGCJsWZszwpeUELc3RDR1EHraFczbm9Pf43nge4HKWNFYF7UNAi4oDMLkNoLmrNTHX46",
  "key30": "2Nyx1tFuzzWMVBhAosmWDdh93Lw7m43ywHevR6DpsbChgYX26dFMTtY9edP5y9YGLCakoXA3TUXncLFUYV5DpkgP",
  "key31": "4QHbQKbUYEoZWBBfwptFsVUeh1Eq73vULu58K9xonphrYYGW4kN7g29PvAVJBSLWnmqcKHBwAW9JCUu1wXrJHyKK",
  "key32": "46W6eWama45jLWHa8NFgZixG8zA5padosGqcrctmsRtaJwC6XEjAq18JVeiagfGdjUDADBcdTZgbfLMviULhYpMq",
  "key33": "3LGPrzkM2Dxx6w2pgpKY6RVRG4gi8v1npp6NUMuJfANc8s4RPcxykyJgtaRVvQdDa9dFF1vx1hyLJG83LiR6RjF4",
  "key34": "4LyPrR4BC9pvyCXAhc9PLJPskLeQj5gWkVGgRdmF5oUJbJSRoyr5Z4AxuBwT1tJewKpnyQ7FNTHchpYsjyLydzjE",
  "key35": "65VkSdkdjG842d2ixZn9zXdG8fBdmuFMJjC4JqCt2ShoEUPR9g1VRRijtagqXCwrBYSJT4x533ewApt9yB9CFHiu",
  "key36": "4uS5W9LvRTk3epvukTQ8AN2Ec4WWxvjgX8K4jsQznFGd96YGaNwVMGaRvYmZf15mXN9YrFWnsQJ39rXwz9EPY4cc"
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
