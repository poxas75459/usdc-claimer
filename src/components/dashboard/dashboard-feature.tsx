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
    "33HT7V61G7Jf64kEHWXZSfj2m6UCHYv3nsEFf2otuodwMTdTE59MegSkipMThp1p7MB82Ru9b8jAaTNpcmwjwXnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H5mgK25ymuy6vtMB1Wp9GirZ6qtFePAaoFhXM3RLhLbaTt1eaWNvfg613dAiKYFy9LAnMZUhvz3sgvhnrPfUCcR",
  "key1": "4J6p2zhbA6i1r5jZfopemcyD89ufJLexVdqRHaTQU3ZC4QjQBp9LkzpKqkkqooDSWwVHVAPLZsAn898AP7kRQVgN",
  "key2": "VCxphuLrVtCDEUbbMXW4A4iwcBYcitHrwjnabodyVcfbYY9e4gSsy81yh7nAfMyFhCgvt5YwyRanGqgFGLyY6tj",
  "key3": "pmnxZ3ZSE2XHYgHZADSATxxhrkvg7ZfLZYh1Xo7BX4kwZG4dctPjt5isFeNjTaBD4vJtVCRHmbxqsstKwyfJw2t",
  "key4": "4Po2mK9MnwzTfhMLGsYUjEP3UZKHLSQ3sLEoeoGu2kxJrNCGHSp4McMMxRDKTanxhFNRPWqL2Y226axpf8PKUVhH",
  "key5": "3RkZRLwJXSTn7GVqPYeD33botWCQT8rsCvuqmtt5Ay35AoAynicDynxuxRgMndAjxmj6Xx2XZLcoAxjmFToBRuRz",
  "key6": "LbnNruiCF5qKreLnqjbouPWp9v3Um22mWzry6byNR4yXxyT3mV9QYLQE8mJ4XuPmEyMF3vkbbCkbMhW1TVERvJV",
  "key7": "4dB3YPCThCv4pFZSFZieHvmxFsUfKXPid6rwe4m9fJaWwzXS3SwGkkaYqRiRCkp1CJq5Rko56URFdXyBnGpUAubB",
  "key8": "yePr4zyK5SrtxMFfbndmU5coLyAmFve8nywtAq6BU9G1oGMAAfBW3z1GDYDnUe8eCnLQzNKQ83fGGWMqeTW2nYR",
  "key9": "32TxyUnkNVGwieV1vGRHFwp3b9bqK2tMJpbb8PTJ7qAsJEWAehMTCGn8Fb2K1WgKyccLstZFrXmRGwCFNVwvJggT",
  "key10": "62GVxuwzozM16DzRkxJwJYmKYE89GcjeTtxjJoCrvPiNGoigQu3tgDL6xJMBr2cWokUhQojYGJ2NKraoqkXFHnsv",
  "key11": "3dhkSwmHqi9WUEZHZkJXYAaMMJAJHcUN6jKKh3ZaghNfwgzQpDwBSoLCArvyzE7wA5zWEL4EjNhugiJ5wjm47Fh4",
  "key12": "5yGLSpVbEZwZKUDcFDZdvv1UyMAcsD1cnuSuyYGe1jHjX3eHNvrR13Avj9rR3ZCwhGkF5zUF69LYxYAiCDBLJDvf",
  "key13": "2kY2zxLCfx6X5zLoTDSVczFtmjKRUfiYeUV6mL1MAnnUPHPzAsyZ7NBa1S92scgvr9Wiahk3sJJpXJK3bX5XJXWp",
  "key14": "38VCazbnpFEHeLrn3ev6gUrwahH2PjjbX8WhPSHa241zyQDHecN8k9c15tN7e689QAZh1tRZXSjg95MV5RPJtWCb",
  "key15": "2wuskVcUM6jydpNrBbpWjBeaSBNhR9ssFAKywG9SxS9iiHwYx7STVmX8xGg2hYE7KZVshC7BYG8HLnW6UX2WBLp3",
  "key16": "4tgFDt6Qygnw7nyAXySVjscU5ugc5nFGeBRjmUW2kXYLcctho9fY4b7NdCLixa9tRWh8o579MZuLn314A6JEaKoF",
  "key17": "48xA8QZFLTg8oFianRCgCYuCzPWNAj6FDUGRwS2RzWoAtpuB66CX47xEpTtQsLYxbPKijm2zCuSLcsPK7wFNdiXs",
  "key18": "3k51PULGyZCY9FQpUjF8NYLzawLmrnXrLfxTcuh4FAEgDqE328vptsPtd7jmHR3CaQBmZeaYj2FiTy8buznRcWZq",
  "key19": "3XrHiTeL9w9Djyw8kt3phQKuDJcRAivqjEL8Bq1JyhmqZ81yaZLCpqANCtERhr6wPYyHRyDadNoA93QMPtEDLxd9",
  "key20": "2Qnf9ppwsHFsWteSocLedsr4C8Z7uTcasMAwjwQgDeB185eQuVpUxcGpzyWrCMv5fQdrLrSvmkRdH8bfKNJR3HA2",
  "key21": "4JYMUirKkAh3Vd9dJKFbsgrkUvaSf7yqfTwyZityZhhz9HKk1LGhBzB7PBQYeLJMc9kTezSLf5jBHi7r4HSyDYD6",
  "key22": "5tS5Ng3NPW9atEdqM726HJsvcsWmjiZ3UcBA7D4ioufFDirESYNJ4Ks2hkTwpeqpwGmSkA1eGR62Ki9yfz4CcSgz",
  "key23": "5NbML1cVApiwuNx8EV69aPpiEZqJqk6PgLHqiCJjJwrw9PeyJm35e3HtGLjhk31n42uuzok7LL93Y8PV7684gFWY",
  "key24": "4wVHB43k8jQHDuxGEPUPZNx83dqoK5N2fZRkjbVAt8L8M1tSH3aS8LSxn3kJKyWQkEkVjQEcwuLpynzM3ZbL27VD",
  "key25": "mReBHCm5JbfEZb1zbTevZVVP6SEHLdzYF6kr2cRcc7qtyUPbdKPGeSXEV36efU3BWjYer7uu9JSXNALkC2VBpaN",
  "key26": "3mf1hjXs7y7MFKAJiwQDig4AvszeEtMpZeGbwoBpUMKzmSr1tbYrL8CUiqtGGDQhhcdxovieVZMbQcedAuxvstKW",
  "key27": "4xuZEqhzo1Nri7S8Q4pZM3HmfS3Gouq8QN2crbgdoyXwrnMsocq752hnHDbpcSipZ8SSQwWi11rSW2EwjK1i7GTw",
  "key28": "2VwYXKAcS2aTXNiXyd8jVUbX2EfU2Sc9WecXyh7Fk4iTEwv4UNJRFk2HoQF8nHTJezHVs3uV7jdZ2rWwvmNQncGk",
  "key29": "NvbR3dCh8qQyWxMWZivjR6QiGU3auwYLyQQ5K3J9bi1HRuEru1KakmqhCw5g1igVdV5fmk9cVS2wpBMMvxrnfy5",
  "key30": "6yUZXDfcmWSPnq6qTMnz4GU1mJvRdC2fWgiGxVA7Xa4hCi65dKx82jv2FktSzTyUdNDzCPiv9LyyhxzTYUSj9Mj",
  "key31": "TK9XSgSwrHPucVnMoKDj97s3Ds1ZeYU3JnXhL5s2HBNT273ADjDaXNAgPUP6qS53cgUafeAh4uJze7qbTwyTGZo",
  "key32": "3tnj4EKTfbdVVjPJdTw4wdRhkG9pnft3BzSd5jki9x8x99opd5bQwSyhcBpJMrBrAdkPEFkKXUDWhfWnStHVwcUV",
  "key33": "mL2Wj5vMaWTMv2CYh8DkGEhDm59rC5deMPjrsCxSHBtP4Ta5JsL83hvK4V3bnGJ87Ty4TtLf3bpBYZYoCGhwJN4",
  "key34": "23dqKsHmA4BjMZyAsDrqJsvunJDyb8KWZ5p3ASC8Ei6zaVKYJu9JWXA4tVeh7djh8vxS9j2BnCEFRBWmkhxCPuoN",
  "key35": "5hLSEFZFV2b4bj8gdvi5Whohgn3USEYo7aGANm72zQSE9rL7WY7GojKZcPK1ftjAo1RWGL63NwRwgnihygeGp7Wr",
  "key36": "5Q6tmPutveHnekyXMbheDWp24Kf75Nsey1P5UJsPobUutCr568DBE47trXxRCqt6uzsSn4Eg5DbvSvceB6Pv9v1D",
  "key37": "4jNRc4kD88KNZpZBBV6hdc5mUhtfWAtrHj93pMiHhyQDqwkscat6NUWrByrFYPMynmduj95uRzpkwrfu8j4bpQ5R",
  "key38": "5Y58jjV6qkGyeU3QURdfJJPm83K8zAJ6DKDzQzGrLLz3GytNVgG75vBfa7TJ2DwRvf15nwrSCqs6ppt5mMnFp6WR",
  "key39": "ghXqVALFmx2noT2gjPkHW5aQTQcVWEuX2ZPXwSMYiK2gbzrW6ZK3zceZKtzdQvjmT9nNpfk5ZEoGaJxfJ5ZTK1x",
  "key40": "DpC8WrTFugKJwvvapdYH9nZpKFa77MWGJATYGR9h3Pv2kFV9ThnWyJJ1bhdFKdqh783K9bqkS7zSaA45TndbFbm",
  "key41": "2djagBArraxgguDHoxjqbzbc1Y4m5sjYRzyna6GGofbYAwsz6fqjcZaDbYgomMpXwg1V3xsG2qc8dxE1MW3aJRHZ",
  "key42": "yjbwwcCNjeBwVRXMrLhvs86vw5Xpfg5j3rehtVFDxL4QFyze9jGNr5vGQjvbhXQD8Du7FsW2TLAUsiPzqfaTsUj",
  "key43": "5eyufHsBzgm2zrUexuGph7VpoiWFgiUNBqu34BKVerAEy1dTie5cWARuyMSPsvkJC3pdqcoA12MxouucZ7m6zkRj"
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
