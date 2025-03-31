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
    "2dPC7hv1iY36dbe5rRDykp3k9Hmu2m6r4pZ26FscihhmdgoBWBoBZxz3u9hEcmp21c7fniR9ovqg7ri7J7JBDPz6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jqgMcEpjn4HjCZQctmerS6s9udTdv4dm1gjjSgSvyW2HwfiZSFg1LJQyYMJUGeE2DYojmwXWQsXsgdGacfTW9Lc",
  "key1": "4iGeStB8WvfSN81FhYL6xEoAaxmLoFRGkUnBbn3Nwr58jZbRxM9cmKPxdgmuLtRvW95mtKsQV3b453ZbfLbYpLke",
  "key2": "5Z3N9xT7Cta39cuAoXSsffF6KpGCCFU1Byade4xZ3z49FZ8bLPvgfJ3BJBdh4F8YrBME8r3XLkgbsQ2FwokMiUf2",
  "key3": "4Ku2XYD5ZuDkCgJKYcD1GWJcUh3wqsJGsrpxKUebryaoWrXEMmg8w9GHaBQpa83omh959uZ55J21GwWeTfM91r1z",
  "key4": "25TYRfMu6HtbSnDPbeaUMWFR9J3y1SqF686ym9g3qTLc9VeSos6L8kqjwGiRb9xTFZhx2ju1ZwouAjEYHF6rp1VH",
  "key5": "5yZjRvec3Ey3rhyWsUzRNJttPjpfFcaNp7kyYBWJGyXTBUS2FyxoKP5xdSdeKdZGK5k3yB4efQXNXaxQhqF2ytAR",
  "key6": "o3bLKKB5PkrzYApGegQEoGJCN9Fj4MdGgyjQiEzFTMsCa8EkVESBfkpCJUH2neznxTp2AutU3x7A6C6BoQchabY",
  "key7": "5RT6eQ2T4ojpZwyWjopHaHYonvhBxDcgAY5UVEWwjuzesqSKEakztypt8V8NwoPVu2uMMrFkwMkNJ6YS8FpwQDqQ",
  "key8": "cAwm8PEptbf4oDwjNNxSWhcvYaPDp5XD2NKJKDbbxt9qkPYg49q9wXKrnjs74xd18EaJ475Sv67g1H1dWGx5j4Y",
  "key9": "4SVtCLZgC36DcG18AzNyR8Uzi5E16sLeMufD3bdPUxwGmifadSGWA3Akji7Hzkbxc9P6becLTMMnurWtc1HkTBLQ",
  "key10": "4CN8MRRCPuF1rVcLi8JCqD4gCVLhNte8amNFrWFQohPu2WQH5ziDjDugEEKwgyNzMj2txxduSR4g7LhVupTAJ5Lx",
  "key11": "5oX4f5sSGByJggkeQ5SeP6Tc8pVZ2XjpvPpPtjvqPvZhzTCMcdjvWxkDwsH7Ty3onbU7L9kUGeDCTKqghmDW5RCt",
  "key12": "2XFgKNjQxQB7SN5pgja6CiXebG5c7tdj2YaiapzocQJ9dJRfuJyybNRW78YAkqdnxC71c33CTgwL7i6TpnTBr99w",
  "key13": "RyGcAihEPnFY5jWCyVGi1NMeQdBMdemf9ZDMDA3NKqBb6GhHo3PQfkL6EPe6pT2UHTNcFAwHkqNiqx3KAB44SF2",
  "key14": "3TMCWLrkgez9YunBLUFbxq37mUNP5L9g46yR51Cv3Q1gsTJvYK8TgjdBRwXNbfiSDcHC1kR1rSt7WZCcuKVxaFu1",
  "key15": "62NZFALBG6BDjnKy5ddvJDMXkXWoTm68G9RtVrioXF1uJ9HPSUne3iahHHaS61z3gRVKCjTSgCN8B8fAoWi6n32P",
  "key16": "3NwKhc789mpUJ4TdtuyjsJznm9fUk92J3NqEZ4Vei2pz7byeyY7mH8z9rJfbt78pGiqFv1Vee38emM7XJPcyCFPC",
  "key17": "5nezhWqhkQ5GTEES3nZQcaDAtYb7Zz8FvabVsWhM4SwmgnYZzP3yjcBuHyVuohFCUeVkrBPh3YTN9t5v8oxKXEnM",
  "key18": "2sehzpML7ubzHikDg9xCDXqe7PxTudXUToUYXVyMC5nWTTR3HNG4ADNbrVcsdYtz7Lo2AqYStjdr2eYTGo9zVuC9",
  "key19": "5Fwa2KzbrzKTZwQcvy9YbiXsD8EVAdmnDssQLSFEKoYxoinyT5hpJz9UhxzQeesFucPqoK18rbyJGvJKbeDDHg9U",
  "key20": "2gaHQsv9EQyRcdbbB9eW2nphYaPNqY9qwH4jexL7MrpNffmjfDTVGry7cbrXgHTCKFDczRrxTrTkH2c7QP8wUQdC",
  "key21": "4xBqZCtoKf2QfUHfMzWqt3n8KspeGSzgH8Qetv4Wj7pHpqxYU1e8emoirp3qEUGbqfEF5AfoPjC8h5pzhAc4t6Uu",
  "key22": "4FYVZjJduEqpFRzYmizF2zLdehkvXfvaonJv5CygYWuP8Kky3WtN75EYpfDeZZ5kBkSGULwJQYzhyM2W8YZV8VJM",
  "key23": "W4Fg5ZXdWpgGpYmQXtLMqugujnBUzkEr5k8DmFu1zMwaRDJjd56QG4crBkVQcp3Z3jEjtpM6FVmyqUKUar5MLnR",
  "key24": "2Mf7UBm9vw3TJsoJQcCR91B1E9tRhZLQGxRvyzcL65QjY6dQ2VDGjVHuqUGhqkk66ACJwwnpQE8fmYRFdVvVGVXv",
  "key25": "3rqdcZdjvbJneWRX6iLG5XfxG4t3M4Sw6GgfiJ1DCj7WSQS3VsrrHWLHEZWfoHUm8rMAq5Lw8sgHhiSdo2h5SVrc",
  "key26": "5E2S2q9A1SF71Afe1PB985KXCMG6QzoqhoscMsXqimkjQv91XucAEYARTCwgfaJFanjr4JPYHARrp2TNwr56Mg5r",
  "key27": "hWhcJckFqkJ7E9BFcqQhBLqncrwh8RkveRgDLe7qwW7rVwdXnSvDwPPqLUApj1kCULweDsqa46zhJhBVEDu8mpY",
  "key28": "5CVAx7DtdbJ7fTWJ9GY59trrRdUAoVVcTcSYcdndxkxCd5niFzxqcrD81kLeCnJv8qmbGLPDNtuMBdksiuBoe38w",
  "key29": "4aRqpjydcFB4haCv2nvktXuRvjmASVdVqyMbQ5i57DjFC5XggdtRNURuHCatJxR5zayMVdp6pTjwjqSj7RnJTGCY",
  "key30": "4goAtaBAL9xpcNXhqoPNjGVF3CS7RbbX26qY4L39x6Rx1rqBA3ag6b4HPynW7QdEnwwQQo3qQRvWoDZYG3P372Cu",
  "key31": "5768eq4G7BYtNnf7oFPto1TUiHQoCgNRxsfRY2oFs28bvudzy1myvcMX6y6JAaJmamkNqsEhT2YR23vpeJj2nCWB",
  "key32": "5P458Qa2hGQzsyEyWUSyjGYFzpN9yREmfyx4dYLxfdEAxZmAtsaT824B9GrQhyCnVyU5C9YXoruJAnvUU669Wqoc",
  "key33": "4KEzzv7T91KFyt1x5VicoVYusyNA3UiRy9ibSh8KCZtrSYLLY7X7fLjdsmgnMzBowTSjKRDJJXdpPVjG7iSUq25A",
  "key34": "jGKLTe5UsQ227NuGM6PurUC4qkMK88qAudtKTQBNGrZgHDbc7q8zyM1c5pAX61jRimrBePCJDuzzUogNBsH78b9",
  "key35": "3HvVS8Jt6rvitKfUuKNV37vem9qbL1CrGB9Z4GRti6c4piTeoR95PNK49gZSgfbjFd1gUE9h74zJySocwqaNkSVu",
  "key36": "5FEaYwjFwwjNvmofSGrEVaBPyjQxWKyoRPti9sou8Ro1pFbeJdKG3mjrjsTkmqu5PD6XNAtDRvFwmNQHkZp7PWWr",
  "key37": "ZoCx3pKWs7DgJXBdfmGryRfJTaNB6Aq2DR78i1Yw5rVGFLSeVV1iYr8wvfwCR2eeZ5N8NW2Fw6icwh3rKh9Nbpi"
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
