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
    "2GpTqAniqXo4XdySxEUTpMhmGHNtidGvkzvqRtLyXPiSXPuXKq3uNV85QL2rNjpSpvxgTjM2gX6Mf6Y3zYtGBisp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vrqm4TQyVAH761Z7QFTiZ7GKHKt8uPFfo7UvWDmL1aze8zNN2Sk87j6XdhcCBWhDjZHVCS8uJYTrtnYmV57arhC",
  "key1": "5m5iWTn21xFa6TCndUK1VoCpVYWGkbLGhrNbVnSTumwX5Vj2ThAvMPrMcc3auZVpkDGSYpoGAWQUD1My1RzBt4qK",
  "key2": "518if9KhnMEGht3Y3ixwmu1nBuBHP9WGXCfafhMfuPvDKtXKYsCfrdAqzPM5Ec54eEFLZYG9r1yUmzbVjVLaUhU3",
  "key3": "67iKF5XrSLrJxKUzcRCigRzfvJxu1UXUooh2adrUDbNBbe6kFScr4cPhVUF5DewzuXESMKGT8sEEk42UD38RFXqH",
  "key4": "5XrfcWKCcKQXbQgwe7pVQdXSGAZkS6MDw9Ts6yDNNDxUb75sZjtnyZoRVUEBLHzxmmjWorJ7pFm2hvU1UBxicXA1",
  "key5": "3EpGRVpUzsxquU7icedg3263wMC1b39N8rLKASBz3SBTMuCrT3DaBnMAFsXApgRUJ75vDAvSXhXWHvrHYgXy5XJY",
  "key6": "4GBWn4TnPUnp4qyGrKxmdH7zzD1pCwwowCpHXwSbj1WUpXhyZqWrQBKH3SEVLqxwBr4p6gcASfVaMNtWDGi9RKPx",
  "key7": "2Jrm1TvsMg7pmwMUvzyBE7Lz8K2EmFur9BDaK1FYtXN8wCDecMcLbodjUUYDKzksZhhkx56jQNdiUHE5j29yMa4T",
  "key8": "r2fZc2jZpsSVwjfFBvfo8MXw4ouwaumReN9YKW9Yoj1tkdW4hvWkWc3hc6mJYryjhKm58h5ijQRSDvnEAc3xhGK",
  "key9": "4NEaEtBeBvnxYnFmb8Dy6ft2MW39ukGxfPZTa8CuSmQzbYFXwY6G3QtEjjt4kRd76c5GBmG7boDq8XZSzF1DSFKV",
  "key10": "5A4qBWa3muFU1VoYrmHghtHMXE9fWofbYYnhg3TJWrN1uC2ePFABTyKkqAqx7s9QYzVRJxTuRRnGpsHL5Qkm4FZ4",
  "key11": "3n5w9EjbozEyCGWPDFRF2Sp1aiod7BAbb2KU2ECfrUZ7DU9JQBdfS19eXDhkfcw8Cz4BW2kqSZ93y34acf3tXKkm",
  "key12": "3rUEaUr2b8D9bymuCFpuVeosCkXP2DXg7rfsjEpZa2SZjz2nwxL4Av4Q4v5PGUhiphEfyqT1JZiBA6rhhtyziQ97",
  "key13": "5b4ic9prR58LsAeGsM8BPigBeVBeK8CoXpj3kikprr6cALwiwEJKcagC8Cjmu4p9zo1ewG4pvNsTYp74WcRPhw8F",
  "key14": "3YG5MVRn2LoQZGxkGusKnK8vewZYagwY5FckggBR1oek9LuiJDVX6CMziDnBwdhLGwJFvCaaXB5Rk6CnuG8qzW7k",
  "key15": "4hPsY7QoTswSoJ4BoTvHxavnCL9NW4463MqvfoXZ8X37Jc3K6nqf9CtL2c1CmkLp9EHKj6GNhXjKFsgMS6JhKP2G",
  "key16": "5QUesRUCtEmCp5dcsjteUE1mDJXpWMVeRvZPmpUj3DPAYcSjwgfCWESKoUYNStjSohepMj1Bb685aFryjnBWUAdc",
  "key17": "42Gx4rHVsP8mM5bo6t7hrM5Y1iPrGxWp54chsF6es2YUiev3FkziB5tk5rbCixr2FduyEngZmBPvUr699c9wDP1B",
  "key18": "3Dt5kniFHPy6b2GGNCvdMqoMFrTN84KULn82DN3WfsD5CzMwDjgNGNfNRm11Q3W59YQ2rxvuTLzuEm3aPzsAK8fU",
  "key19": "2M4Rf8UHHsDqKzYuPzDp6EzdnChtYGs3wG35MR7mvEcH9WJ9ocs9Z2bagcNsSsustYjqtadsAGTzjurv1Etuu3Uu",
  "key20": "4aMQ2LrucdkJ1E5GJLj1pyqUFqpxKEB2BGKnYzKGRHkAVEPVgNmHtBmgtGSyKdDrYtRdqpsrAeWAqYJTnbxwpFBe",
  "key21": "4yrR5AzbiR7YozQKYUpjPiXNjMZBhBhR1bHAuRBCZzpfkz4SG9Fvu4uoVxHGTDKrQYJoNdUxYd5PJbSLEzJ5zETM",
  "key22": "51KmdncrRfUMDGnZYBRhRHRvwt6UDhZxghXwAU51cLXirwwVnLXok2z7hMRpdFvM7594ujVFmYWWQ5QNDXsTUcey",
  "key23": "RbERAvRajf2qqB4WQr1Ya3ar73kVriF9u9rGSmxzcaDNKDJNmmv5nmBKpK5M2tzhknCbzW2wXXvX1VZCYBB3ycB",
  "key24": "5USW5s9E5rDy9nrc3KiFGLU6uwntqjai2V6Xcswc3d9itTjoy7KiknNjbQPEPfwq2MXC4KS5TWTdZvjRFAQb8UaH",
  "key25": "p6SeCo5AbiVbiyqUfhwh787u5hPEwaK2xEQTwjRvuH6t1aqNikC4hk4miwDRqSBcvcBUpMsHo93j1VsY6HVyEg5",
  "key26": "5ERobY9KTtm5jAik741sdSs9QQrPmDV9MUJkK359s6NQ6XFjcA2fZkigSH8ejAUPECLryGVGYinSy386bzeqUvVB",
  "key27": "Yh1wtSFSFgfmap193B1FemgfkWYPA9ZVwWuMiuzRXgUhoNagTaJHDcrkna8nDyW7dLJxXXpQ6EfHHPDXzRuQah4",
  "key28": "32oHp4YNqi5Ba5iL46LUVZNBoERv9bnfXhmFaBQUYGjmiQmiHGqycxKk9NprTNUyaNe4KeS4TvAfWJB1gaZ973p2",
  "key29": "3nDErB156owJU1K4XDrrpN9gf5HQjUkT7TjVCWgPgR4QmUXg4aTsrUkPR1SQUmYRzGmVRAMonYLPqFzL4rd3yjZW",
  "key30": "62m8fvyuvDTUxMu9GKxxKcqepmjNEbLemWQQgyhuQVUXRkSGfA7hcwxasSvoxFtuAFrZjiHXgsfjQp7xHeXSezrN",
  "key31": "5Lo2zN8RCx7egiaBm1NhBUrQ6vgUxDh1EKF9namVdfTFH5KfiirTU3KZGxN9VFSGo9wCSTumVVPZR9hQNPwUe2HD",
  "key32": "sHiL5F3AndoLPc54mFKJMF4wvAn3rN9p4xoZuu3nRWPvg8KhhABEvkxXPW1rnrt2ZNAMxvc1GfL7xe5f6AuKVV5",
  "key33": "5oafjvaya5g2z4BTtfPF2hjamgds95zAUF4KsG52qmxEoFjPjgXqd8mhPQsKbYF7LALUhhhBFZgmUapjZjAVFeHe",
  "key34": "4yh6WJjPXeveTDjvz57xCgKbj4aFd5dTbjjNWEM7k1DGoMsBkcnoQmJCtBB2GYM5kJXmpbcUzgZZCZYNtZoWdssy",
  "key35": "3rtFq4pxqciSt8AqtApSu1q7xPx3QEuYvgE8eBtvPYFLTMsuycK23F2169avomy623wo8GwAeQsUcL9zQ3CM38en"
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
