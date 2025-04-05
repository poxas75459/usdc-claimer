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
    "2Nsxq2egGEdNp5sGAkcKt9ffp1fHeghTvxYQiwBAb4nyVdSpSNHUrC1WdNEXgo2jB1Bur85RY7kAtCcvxzsZWTK3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t1mmLXQHVyBCTko2ubx2wsEHrqHkg2d3GjD55o9zmL2oMg56Pr1WyprbERLWcxQA4YuktdAdKd7AyzGzgY3FZM8",
  "key1": "3CwydtXwCBgkGDZVPzCXPKwCPDiJHCz4dqJpsm5P5NcRgzdUDyvTc4gchncnX8Vw5JhhGp2jXuRzFmd9fZBU7o5w",
  "key2": "5vEcGfbpnmSvTDseeqpS32XkWSPcjmzkWKsM1za3QkCTicAu1zcereqGKs2L9zGsedSghaYeKkZCT5KPEdip8Wg7",
  "key3": "9vmo5ErT3q6QL2TzcP5Bu5Rsz7upnSpT6tLGFugLb5RTUU4skLAcY8bVLxH1GH6qw5wTo8EMqw9YZn9GEv1Kc4z",
  "key4": "2AiMbYXebhyDhXhuSwZC5xF3sQdZMUknS549Eq39yqS5634gypE3FSGAiR1KNSHyDem6JHVPsJgjkFB83Uza73WK",
  "key5": "51tjtexXqQXfVNVxPyMQEFtvajVNFcqGXv2LNALcrakfoaidaCX6ve65kAK34N1E7qVnv9tb4GqbiBnXvVoS3GtU",
  "key6": "8vGDW2vk11t3CYqyCUH58mKSC1TpzJBgGQq1JvBdyzqYJS6WsvJYm54wsVPenfiCgSWaBpd35kwkhWAB6K2UNY6",
  "key7": "78F48QPgRP5CAKYxyPWBKziDhjPtXXSm62Z7i4FetKgfP7dijtPabJoscV9yaEhhHXf6fLtGorQgyCjr2KoE7Fu",
  "key8": "2wwdjgvMjhGwPdxicnSLBGQxUStei49vcEkhQsAhQ46ZvZNobYhoBW515zEPo6Vbr8ugajzetGdz1qSFUxrahvhG",
  "key9": "54WvzqZvEYyPxPpQnVPCv2gfxuG4NHgLtyxYmiwfnyNQxtJ8e1JtHxx3rStbdSzcW3FyjPREZtR5spNH3Us62GK3",
  "key10": "a3irFxqJHEJVon4EXZP93GUS2B4wspKJYsv94n5Knd7UhwUUJvNkyTKmmT6BCkHjcbhV8RyjJrugynBtjcV5aNp",
  "key11": "3KsM5EHAv2eYbg1kQYYz2hJMMEGtvjXnJokiYhvoqQnYSq9nqjmRShPqP8ZvWsH5HAvJjzZSWzJrM1Usn16ckg6F",
  "key12": "VYAfa58nSNa8ovSSPHoqxtRKmAkSTAWG7e2zezpNxU95x2gzMoU1QqxzaiP5DKup6AYHskFGnmEVs8nZkV6EmvT",
  "key13": "2AA89m5r72MuYz4iGaHqCukaqEvpdwHNnWCHjumnytezk1MDNBhsb3tVkp18PgbwJLnJUseKdCgatJCfkLWtsMsQ",
  "key14": "2xs5BX81bWsnPNWRJm62e5xVw4gRJbWVu3tJbVgNT9ZnKDKxCd6zZjY7KG8qy51Q4geV6qjsmanf9ngEaYyLV7uY",
  "key15": "uDB3V9cVaZiiakQyuY1a1Jcqs9dzfV44Zd14mdurTXxkDBkqpMZ79NTRFXZRL9HSzkkcchQpRBGv9dtJdkUnLzG",
  "key16": "4F5aDoLpuj6L38vGUKoT2vcpzes8qZF325fXEszPUMcPJWS4B4uZhfJNxm6iXHQFpbo8iEGZknnnq5kuzfgP7C2S",
  "key17": "2i3mdzQY9gTRAM9U7ZLTdSHY1rvtKn8BWuP1ZhQL2fNtcRpdcekGWcvkjmiR81exJ7B2wAuJ3iurrchMuPxtvw7R",
  "key18": "ZLhqPXnxiU2LvJriqTytSC3MkMENfUrWSZiU4ZTUV7Faxj61E16jAXA5Cz5CyvVro1obfyzuo1bHxFEHkhZAfGF",
  "key19": "3NbU8h8xjiK94V7AATQ6AyMRQSXvALtX3RTuRFRPLFuRu1w9mdaFHATm7qottRbw1YD3dyzxYoGGQt9TEXZxEXpN",
  "key20": "Hk8DbcdYeJsaD5MuPTrU4yfjM3mQavK2HRHBCgm5yY9AJoDLZdp1s5uZ1NZPDWDVBnw1p6nh6vhtjUHuPXi52rK",
  "key21": "5vu8PpkYrA8U9mz9JXU41ZvzbeVe7j2W1pmfJ2eXcV43FNy2y8uQsosfQ3wiAEz9o7puz1pQMdAyxXDiaT9s8N5v",
  "key22": "4EHF1yCmzyMKQaUZr3qf1SVK1gDQLQ2XobNUkvvQujan9MLWh8Zm9YLnSmBMKYTBq7kT4nAa8xX3437bTJQj2UAk",
  "key23": "2tiQNDZDAM1RCPHppqKVEuqMWLPbk9Lz9BPF9Cg3FAkvgUJH18GwAxGW8ZynxztkLhnuCsWAdsjHsJWK8eF1pJnj",
  "key24": "66A3HLb6aQLp4CrHG7WPc2SA7d4WYsfXNA2KoQT5NJWGVw16fzCJXgKXNqcwUP3tHJyd8Su18x2ZBj6MQMJuEj5k",
  "key25": "5RtqueyvbuJ37BRDNxkavsYJANVMKjhF3z7Pz3XoGGknUQqYNF7LSqGquLjotRDoUcEgmmcDTvska2v6gUB8R7Ut",
  "key26": "5pGHdosyvtLh8zYHXTv5kyFZsF6kq4XaRsAKFBi2ZgJy4Nh8wZ82EGsXiDk3a1ERRpfpU65TT73KSfa8E6EFaEni",
  "key27": "5zrcCUtY2fhpwyubSJRjNuk2aZQJStiiPDAdXQ4m3UA9nLJc8BGx249zxNcns4cLFnZNSCCySQ8GyEoNkmJL4Dws",
  "key28": "ykR1r9xjzC9KBZNW1xnMw7n4ZUBgT1MgyAaXPApoxpApRnqVNDG137KoFpTJWTzmtJtkw6JJnVMAQGCu6nvptZD",
  "key29": "4sKf6suRFFvKrzxtUm2VxQsxBBkbBkdvUZN8CKHgVPi7omdc1nGJj2kcpQ1HKj3oCVN8B1QPH3XVyv1EPUbijEJY",
  "key30": "5V4gEyU2PvS4cQNiqoNneF6dBxySsPmNSqvvxKyW5hshkiSwoAsEPTtjLkovtv75RfQyym97jyBAKLwUkc9ijjAU",
  "key31": "4q6vMbXGxFjAeYWdTRp216f5sTqCDduwLqg9MgzXGHY7SkCqWy5xfrwajGawXVCs2SmQ9qjgS9bk674u6HtepE2U",
  "key32": "27MUAgJTd7Y2FFqofv4v3PVcFk8B5wyaTbTvcmjrjdTZjefS2tcGtPutJUKnrvcFRNu6FZ459HRpAxcoe7YqSKGc",
  "key33": "AZVexh1HdsqY9REv6Z1rcZwERqh36YvngqDv24TE8udUFeGM7ikngf5eg7EsBAdZb9Ghhw8h1Hb6xKuc71fX6mf",
  "key34": "4Fu5pjQc1BoYZyGNuF1AVfew7MGch5S9R9x7F9KJhTgJW7BmfJW9WVm5JTY2oKoWGNrbEuN6HKdkMuYqZLVa18JM",
  "key35": "2uEx1TdX46LM67GVDUtFM8xoayySjurdBZZ8wH5jkZkTjg9ofKrPiCTkKTXcaUtG768zpQf9a9dWoAin4kxzQHEY",
  "key36": "5k9Sge4ss81X4k3YX8A88kBtA7SV6Uu6oJZHwby3BpkMff5Kavo64d68uNyf9pGP32tmduLRwWjh4hnAj12ynPAc",
  "key37": "2GRZYjpLhGpC2FY9SPQk2zSyaw24bb96YBczq1qTbNBzCjrHjJ3FDhiZ9voHbLkChRuS9GYKSmLWzPYmE9iu1zr3",
  "key38": "3DpHrBkL6McbwXA6kp2LGJXTTmeJmj3xFB5R9p6W9XkxGeHvVW8Efi5TrR3aU4xAocamTCyPvHWuTGq4Nb4QCQt5",
  "key39": "5odLhdFh87kUzyGD4iLgH4VaiCTV6Eg74C4xT3omBudvBbQ6gZspRMrAdGaCjxjbNoSnDVM51GFfUZ4arteecHVf",
  "key40": "4JqBKYMKDQNmHYG8P8mxBjD9Jr1VAQG1HropAgE9iQnXLc2akXPu5Sh3woRq5spSusqcpB7DQZR5u73GU3Uo3cq"
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
