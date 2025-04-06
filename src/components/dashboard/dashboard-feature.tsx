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
    "2E4gQLQLnuo8FVf55aCeMb5Uw19NpQhfE4DP9geWDAiFWHsJi92B2Utd7n3MifGCTckrd73gnt9ALmLTAGz4b3iE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UMNc7M3vzy5txzt9Fsk8TQi88gjm8FRDRURSQvyZQba2sbtayRKRErC2o4wzoyhaxczwANmy2rMZuRR9P4FfRwz",
  "key1": "32mUjS6ArGUw2VEqv67WGydkT5WXtEwbFM376unWzfUXbY7Jq2be3caaY8aoat1huXADPFjMNAEUUTTSH8pXRXPq",
  "key2": "5ABowosspmFG6DBZpbxab2rQTacs584TNu6QfQ9npottToCgagLaX2GZgehrQKMsaKNUjghHtkFo35SWU5c1dg6U",
  "key3": "3Qg2cnt6UKykDsrUb6fybHxXK1HX66dGN9CpkJiWAehWum76W3TpGqrXwsauiT1DYVAKuvVwRB1gJTAutKTArFDs",
  "key4": "TTkLd5YhpdckyHZYQwtqMkayU2yR4vVhZXtQY6xM77iXpPcmVaChfSUpTJwqrccZgobCJjsKDn6gtSYo8WeVyDT",
  "key5": "3KpZvfqrdTLhC726gsXEJXmnVkXw1EpBZRduGC9sJPk7AGBjT6JnYPFiGMSCZxPGvTFvrgP4iEx9cGvWxx6KhmxC",
  "key6": "yksDAEDjqXjiXxgBXTKtVAj4Ak6KtGqsAAwfmY7ZWUpSwUtHKB36sMMbeC41L9F6wcGLKHFXpg2Xm9ojfCBMRCE",
  "key7": "4EwTqotTSQWDyRWckiXm7tgWAYPxLWTscAYrv276u5v3mXi74zkG9KnQHy4e7ZaQAfbuDU4VirZ6wpH5Sj7qvRh8",
  "key8": "5DLdTetAfbys13R2mg8Fea7UdWXKMkRyNfTCsTvB2MuUhbpNVxv3qpXFRVq1HpvUmpEK6scaNChL3CJiGprPmdTU",
  "key9": "4maUsP2LZaWMKM8LxSXDk6uRtmcbmiZh6b9FTeZFHRadb3ZRLfhSAfrFAusktnSiqjXWxh5PMUfEzGQVzftx1HfX",
  "key10": "4wHpyLuCn2SZ75e9jXjjRDsisAu9Fwquv2FMExArr7u4qvETEZYaE9BLvUP73EcWgG7dJM7LebbYxb5HvQCS3v7m",
  "key11": "5Y64XnwDu3zGKeMSTmGDXfqrUnFojYuxNKtxuLJttxS5K45vqFKrPCv8S6CUbcrXMQQiBt1NeowixFQsL11r6UmY",
  "key12": "55iFsoBrCWqXNQdLWRmWsRqoDoL68B4qsAiVkXHyUEVb8kLjgfLEbB5c1ugm7brseFQdymHEsvhLWWRz7JRge7CY",
  "key13": "2rnbQuEAReRCmVpWhs4CD3PRLvVGR9z7Nb7Dex8d5PM2eJ4u7YtAJmMxgrqdYcDZJxrHQbDzm6wgbu36QWLtB4x5",
  "key14": "3Wn3j3VsenXJG5cr6PbNfNggaxwzXU4Cj9dDqTmJ4cmWFj7E8n6ANWmFvtcGsDuVuPfMM8wiqNSjPfKqvECEKfvc",
  "key15": "2aD4BzQzWJhZzQd34uxLsqwExW6M4CVYFWAN9g7cHs5TmAqgt5BWGBpwZnvLcSJeCCWsj5DV4pT7h8uunYXUMkJD",
  "key16": "3NfUAo8N7kj2nJWT6WSwkQVxrFCPiv99Nuo8iQ8bMKMPbK2uQiLbtCGhYpHu6CYGvMe85QRQhRE6Da2WQHDHCekV",
  "key17": "2ZrYE5vrHBqKRGuV9oAekUVwdLeZ4eeLH3zsuFgw8ekec4NsRXtbk5GChUffzad575imnWkXYBfaAVmyNwRtE53Q",
  "key18": "qq5PWPf56uYi6wiFWPafXyhGA148p2HnQFp2krScRsVkTEg18WoZBsrbVhTcu8ChRdktfft8s5cTEkh2f7BSm4s",
  "key19": "3mR27RKAZHUUhAyhmJweGWArTdvqZsqJiG5JtAD92Loq4v9BWSEqbT9oLRbZQTtnma88ExYeVTcy9RfV58WGoLdz",
  "key20": "Nt1JTMLEKoXSPDNVEcMD5TdKz7Yev2zpvs9jPNMjadZZLLS9JcGXiZGRnV7zAL4ahxMZV19aN6uU48cGMW4muuZ",
  "key21": "2fhAYAiCRQC6cH866oJwLgkLjbSLPvaURmByfB9osx69pkUb1V7YhNCRFtQqhUwwcXqo7MN8dqTJ2v1mvZJtSv1v",
  "key22": "5b7bYtv1khKee6RZWSAZjK1wQdAZ1bdcYbeCRnT8XcznaYtARaCU6dd8sadhr4ZirTcmJM3AEvDocX1pSMjXTXHR",
  "key23": "5G77MMvgEswcW5uwFChNUDxCpHdVUqDFBRutjNfQC77j6X9qVkJC5chURGf7GXbCt7kx81bKSts6uHqwgULq5QDk",
  "key24": "5zd8qQxHMJPSL4hSCVa8rWSmdYNHBmoXSMDmwKShoYs375vpEqqGRWHhRVkhjhcFh6EMXQN9yKHFqaTeDov6R7bj",
  "key25": "4eDMMBoDKEyth1hKtRQqdF5cd4rjcM5YHphXZHmGRST5Phh16ijUpfgSk18Rop1TjQQt25NEM3MC5ao1gGemFXZV",
  "key26": "3v1Mf7MKok9Bzn9QfYW79Mp1FGnB1wX9fcFR1Mf3dzpTWnKC6LLZeTjDcDfDC8VudLah4hsDvqHa7ktHXQcpsxoM",
  "key27": "5ej7GGFA2nY9iq1EibN7JH3C3xeXfuEUebEJkBEY7nvB447CdbsyKqytBUryuoPx897hay9LnETDQJCGgc7Y7Du3",
  "key28": "2H8LMizDUGaconLrdTcsQngsMeBscxxvix1t8dD7RDSpR7eMgA6esmEoLLirFw4PxrPJvsL3sgaZQACZznjLHv7A",
  "key29": "62cun8LUALpUU2corfN9aLLmbrni6HhJQXaUL5YnQV8U7KpWW52GDX64WSVDVN4CAoevYeZRupj88vE14cd1bpxK",
  "key30": "3qEfSkdDncAhxZiW2tBEovHforGJcKhxfjBqo6uefJfq2PjsSwRRHuiHUqPvpmATmddfbAMweabtKthwi9hd4Pi6",
  "key31": "5Hmg2UhGACG4HrtuGunNwbYP5rFSzEAQ8TLk28gGCi3CeQF9Hx2YbMVzHBkrDK5wgc9ZuZDSqA8RuutsyeoZjL1x",
  "key32": "cvKgNXQmfsrmMrEY1sn7eehBX72TqNEdYhj3qJ48LrytVLv4dKU2a5ivNQKgp2t8FuR7Xf1W7mvJ1iN9gyRL4VB",
  "key33": "3mGrPjP4eHiCNMLkWZ3dDyDVQqbcJwmwTQy7etyn2U3gTGvTEdpHoJJMQisiGh4oA4bfyGuw58ZpADK4gWuksvJm",
  "key34": "5y1f2TsUfxBxPJ4Tc6q9gNNJk8iWGT3zuUiyPpiAeHu87pwQsrg7REW2sk4J3sgUtZtdBrMq8JixiDqQRUbmn9C",
  "key35": "5eCajXuMoKDKMwLpEkFRcK1GKxXnH6uyPuJQbamUZFG7ahQRbchcbnqx6NecJXSE1gAHFFZPQYBtm8SYt8MxbUm3"
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
