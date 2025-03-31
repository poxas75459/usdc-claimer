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
    "3cJ4r2ucMdGcLZG4jbp6YoW6shjLCpZELBVU3HJCW8BgpLTRJv8MND1EfWj7kinyCxcSAQtkJ7dcyta6Q2Ggzpb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WHoKW29pd58GogKB793RA93jz5kZAo2RW8QWcfJ8P7J2SyZF8AVFoJ5HaKsm1kxWCo8Y6jwgo79fyjnZq3tr6Ag",
  "key1": "3WEymn7JKoyQLrLiXiy6mQ17zYqrtVXhwqKzFentwxFxZ7BuV8wqWsUckw4ux5oWkgmg1RTp8FzKffwyBpPE6rBs",
  "key2": "4vZPPPzCoHgFxLb8w59fLLHPMWUCAMP3EnkKP27EXWmU7yTnAHWQXNLVwNE55TP7NGA98B7GDP6Jzyhj8vXvXwMo",
  "key3": "5CxSFMqPj4KDShvE8ecH2nDyvxLENWFBGydaamLEPngF3rU4syybZRLdBYGEheHc27KBb5SzpThkjs1hHre3k83f",
  "key4": "2fXBrXbQQCiw9s9ZkhVNFYdnC7KyCz1SHQby7ow7Tt1rtWwxN7VvNV6aAPzEQHJaXntrus3zFRJnmDMWfPrQnxFy",
  "key5": "4eiSAwbDNPP7sPwrxgVXicwgNsmsJKGmBi8cDgQFnbRJ9zJCQTSbqA4kyvS4HHceQX8StWHpQ2Nq3uJbPL6YG455",
  "key6": "3596EAinaJBsnRnQawbucVzuo8zvaiFmVryAEkgjvr1DRuwPAK9YCAWJQ7Z17vpQfwYasHEa5rSAeXnf7TJf7MB8",
  "key7": "5h1zpyKFyjocwoYmfJNUstvCroXW67tXMavkwKtNDppqcxY8JGisFnDfje6C4PFJVZ1vvYxDvoq4Zg34zLKtcqWJ",
  "key8": "64hmyGGupCnUcLvdLB1zZkpitXNrTeyJtrxZHXqUqs6rEzTBJzJjLHPcZTdbwodzarHoyRNTYt3i1XdUqtnsx7kX",
  "key9": "3XjGxE3tLrBT1PNzySjaDdyq29NX5r6rTuM3VR72LjvftNe46gmnskCmo1ogKyfAevccd5Ywk5KmiMhHd1S2cJLF",
  "key10": "5bptTvyWdcvdGJ8EfNLzs2AjYV1YrHRP5ogpJjAMcM3e7weqo4m1cgrub6TaBeWdnQZwuWximhCxjNT4YqsCukG6",
  "key11": "qmj6AzbcuVyAGoC2zTV2KrCgc6sHn3G4fPGuA8BL5zfuRkmt7bmrQeTeqhpBFXWuCcs5xUGaShVnvnGYqXv6Ue6",
  "key12": "4S2E5P3nfm2WF6kkEQxG2kxMFssmAhHYAhdLVswpngzv1cz9T7PJJ7HcngaYJ4VwHiXMVLcvTQtudSJikqgqJSDz",
  "key13": "3S3KcztRqK21FmsS68opjwwhUPb8z43iWszdk7QmRJrB1U7qmu5R6rCd45AyVmTHQiBkgx6Fu1MbeH1LJUQQvpxu",
  "key14": "3pFDFA8L2DwU3UoiigxMfK15h91BbNgVCizkdjPgNGWAYjaPC9fQ1wd4cqEFVj6asQKwWTCjWGW1xW5nrtPcidLc",
  "key15": "2wNCxUhLgdgTPLtqZxP3G73DDE5qRZgmJENG8mue65ut5do6gns7BZW8JEYxRBdAhEti3Qmt18qMdAb1Kfb9MGgk",
  "key16": "Pw6izbSM1x1N44CvbkRxZ7R5rNRfJnRDYyUeDA5yuLAnrEPFnFsZkWWHt9t6DB6xDGtChZurLKnAtZZ9VS6VjZz",
  "key17": "3BvXW9AY6jqKXLE93BQcdMpVFhc1h87xXF1T4JRevQ13tCkzrjjr5VX4RGnAvub2A2355i6yUtsmbMpyeLrRwzyU",
  "key18": "4gaUAXWtn9oYJY22ZFeVh49adSoxB7WAV4D3RNek2YUQsuS93rM9kHur8ji7ZZwjXxoJcZPMbQNr3unwwj46Capm",
  "key19": "3SihLwmXWcoazfpxtRYkPr8rAkqmZJrSnWXsXLq5tFuF8LzqGnwa445njryMoJWeGkT4rBFqYATSTy859WPZqXdt",
  "key20": "62oyGHJFVHX4BC8V1BH7QjMik9aCwGbFVU49fjjE9s1uA2kLJe5APihFMzyy67kwxj1pzb8XnDwwF4UVw5ywc7qz",
  "key21": "57M56aDGX4myWsvbnUmS2StFuSFvtR4NM7rQDz8LRJVAp3KHUxcMCU3xQT9sA6urw2Tb42intWtSiERE4bXbPRpy",
  "key22": "4KcQ1qasLoVAXbugEhrqR4su39q9WNCmfMLk4ib2z5RvGMHsneh8okubLDY8PbuLmmhbhkawTbpdKX23NwhiDtBu",
  "key23": "3iGmtzQ8u1HbPizeuNfQ581KgXWfp7ytYC13ZwJyNy7RfUpH1viEaJM59663BNNraKb3YJQmXiAYeoc9Kz2GCJYP",
  "key24": "4cz58U6crxfb3VzwP766hLinH9wz43gwmA3TBDmu8SygWPKi9d4dHH3vneqDaTivPQNsYu4UAFtBFSZwnjLTHV42",
  "key25": "58fZeDgPkCrK7MQGUfKeHKnoSyWCNdhst7fA4uNxHBEsZBWgQtuvVKZvkkt21QYsPoGkDfZLtNpPDvK3bpjGeGkg"
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
