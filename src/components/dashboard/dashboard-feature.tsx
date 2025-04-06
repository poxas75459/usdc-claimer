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
    "3akoRcUm86K3g28iUZsnXsA8yUuULLVVad1CFacBbqATkttytWWTFzaZ6v8Y9EBXoqYfLcEtemhLekuawcZPVFBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D1QFrnekEeyiPvmLwX5GSoqeY9EAnGfXAR3vm4Aov2Tiabk2R1TzDDgnebgNbDZ7VfKytxn5QMwVkz89wS5CB2r",
  "key1": "4FnAfDXZTuBZVqDDdueTLd4Th2Eo2cesifBjkzyHhLUUPCERAPoQ3qChAJUgDCjkYBL5NGt7BBLBsVvV9czZxq34",
  "key2": "5MQoQ2uXPWJ2omafPYxLFfj8iB5qvbxF2Hhqg5JirhjAtVTZTHWj2GZHPBZhov4KdSFKWnPJRwRor2u51HLSBh1G",
  "key3": "5StPb3Fw6Ynx9wMCrHVED8P1TNymfBzpupYtQZSE2pSSoQpKT3iPMWH4tQCZf4UTaTxqHA5KitZRQqfKiCzwfJ9x",
  "key4": "2wKE5kvXS3RWgnSp29mAEUuhH9oM3gGpe9tXtGNB5owwgVC5AYKQMdHdThZ8U2CNMC1rueq5QKmQFaf94kt9Utoh",
  "key5": "Z2eWs4XDpSMaYuym2AHX3dfdS7nPeTgwUgXpeLmKZnUt3QgLsCCb7usDMSC38yt9u1i5rDcM9sMCA1tPj3SSg7R",
  "key6": "2VvJ7kTcrhs1uGNERM5nxCFMofmpQfxLRF5A4PppjJqpmpTrsxokqescsfKGarn47s6u3d871h5W6GWPTg5D9NgW",
  "key7": "34m795kcoAxsKe8khsfJNCN2vjGVVTP5NLt14LAshEDJhrfY4m6iXJuHF9fYJ8498582ifjf7FTcZtBAyavhXUvK",
  "key8": "5C7kVcNLGbhrax5UThZ8vQpsQ2cusNhRRcNViEgMo95DFEvgz6gTKdVTCYaeogeeHrGuKtwfrvx58VLkQ7t8ETJz",
  "key9": "2W8MRzHZJvx2ePu4W75gc1EmY1kSWgTmssqeC5syko59GgwwHv5kx7BuHTpy3ixeZmbjt2WEtjXKPvLHyyJdRpZj",
  "key10": "hrr9ztiyqWV74xWcCajqdrVMYPQkAVjWaZkTpDFUNFvvmD6QZHQvGso8pCyYM5qQjqqGzuzj7t4KbbaKbskDnsT",
  "key11": "26NeEefivbSL43JPtAMf3Hp4fe3bEFYD44bTi4oF2cdU6ywm8o6NodVwuMbbVyR478SdkLK4MSjewc7BPK9TPmfD",
  "key12": "3xaV6HZKw4MpwKPzyVsUnA6qQqTr5bfaHbTc712mtTjZm9uwbNEZV4EqZThiviXg9QPD4HMdHDYvpwcjW1ZUAZEs",
  "key13": "KBWPiojpC8MhivMMWNA9A1RHDKnAMfvMF4YMJupzJUKENiAST1PZQHK8KM2UNRXfX9EpZfW6rRY5AcD1cS48qzN",
  "key14": "4t12TWQ1Trbu926xjXEeC7wBYAGzSmmm7Yap28pTsLd63cBZ9dwFaGMvc6y3HY5fZDP723CPD7A6UtDx7kv5zPFB",
  "key15": "4X5wKneFChzNF9WkM84JePcxFjjpyTaGRomghfZeARnmGD4Pn2BibZB9akZcXM6X5qRAHcVbVoTtxggbBcCFqUa1",
  "key16": "3VbkPQNbmjjr9G8cUFhYaCoiv38JhoqKs2NHvThQjVmmx8DSWbBXN4PtSGUurWBeTb8x2mHEpybhqf6enM5c99Ei",
  "key17": "464PGTXsJquJdBi6ttF2BhCpySSp3DBNiLkgpGV1Prxi8akVZUXPaXS7CveBX6jGe3wYH4yPQWgELftcytFY6QaG",
  "key18": "3ifF3RUeD3YH2QvgRiPtHiYyDA3j5sZhGp7UP1fvBmnApUFheJGDJYAmbYsfZ2Tj1QnVK2uixiVXX2ELjGact59c",
  "key19": "4XgHfMdfGod4cgcZ1f9ZjptCHMxHD8nqXHaq2B38WyMRyzM2YFjpcLsU6jqdxButN5xX4TEMscxXjJjTDvEToDiM",
  "key20": "4STyjCbBd2Dyniut4TvVGgeozu3BrUD8PB2UYGxtiV5c6XrSPGjo7m28hmxvLc6mPJWdJaLS9ocmKcAHVrthVET4",
  "key21": "5LxpGui2uxbPztbmCQPPS4RsFnxakT4NRaULWReu225kmpnqCxsLUJj6cEzYXczJ61YDR5wMXyA4b1T5CfwrRGQ8",
  "key22": "122Ji7SwcURSBDUT8CvvU2p6FTK8UjBGq6UTA6qr4qx57uAU9L3gFQ6zLNDQgfE3ya9DDQ4UTvx17RWAnVaQ874P",
  "key23": "5HRqZdC2h67pigrhYvY9VkEsWyZjvpYAb3oEVje8Et6VfgrmQz7kyvsxp5D3LtrkXe38wmtnBMai32zoVrazp9FF",
  "key24": "4b5anToA9cpQxHyk3nvXZQCBxumg2b5auSudvaHBgQxPt9zBtv98GJJv3inwfjMXbpXDdyaHsBtbhM6eZ7GWAaY2",
  "key25": "RvRhMiicka2jynVnjQVrapvNLozMPCCnfQSyRcVBE2XMHZBARn1F3qPBqPLMF9gGYUXiNM54YkuFxokt3PnAXyP",
  "key26": "3myxN21fKXGMBmCx2Jyxt6bn1naWkevMNhUiFAD7PvpsqU38tfuc1JpSXGcmEH8CwrtY267nwCHqYqNFQo5Jd2jA",
  "key27": "5uvCRQ1jbxGWDVnuESqPzJuH6uDZV2giyMHr7eZggxryM1zHxHfS8jPxQoWVr4cY4WKQPqvhExTWCnZFmibrSYyP",
  "key28": "21GajbLkwhvqJPdgcExLFeYFfFNjGiSe8amXbtKQe9S927LwwyfhM1f8Hycy5FoJDgPkt48JwED1iaMWKtycdUYV"
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
