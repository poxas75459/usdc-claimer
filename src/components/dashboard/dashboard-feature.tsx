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
    "61kkFnknNKyZSJgbPdd6yqudPoe8YFQWZzSUAnz1V2eTzRgLgiKfXa8SRbWgbxF4obKhcjXMcx4v5Lr5EZbP41aG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GVPCv44mnfKnTLRxLZj2jjrfxBwBXAkvFAPvsdXkDKRVQxoTZ2R65CjoFn9RZp1WpSYLsa7zWs4ofyetC92NkmX",
  "key1": "2qpBnaYNeGypwnYHhhectCcayYzfJF6pu3PUGhhbBxayrvFJ7qhaZhhm7hSnXKYoNYbfre9GrSyyKBdskANmMcRm",
  "key2": "3wymWu5TQYpC25PYAKyecnVxYqRGcWW31v1QmTNfcv2UFm5a3R1UTxAmxh4ctQg2tkwR17SXJVC9LKZgSw95Pg52",
  "key3": "MVCb6YLNQrBK9wfnD7JTyZa8TJdEzecxb7i2AkoweBYbv7ww9zrftWf939GQGDxJmUGwWLnhey7TrF6MsKvyLS9",
  "key4": "5NCuRpDA7eEog6mfU3xeg4yyUBK5ABipPn4AxG1prVGqdU9NSBcrynAYPxPqCY7HneLwDX3b2VziwM8zBG7oKkez",
  "key5": "3oRcNHmmJ96jHsDtwMrSKGneEBPbBNB5zeBZc4P2X3x1mhsiUSHd5V2DdT3TkYtCsc56L22eBBTzTxFV68h5hirE",
  "key6": "5eHsTZY7UqP1625tm74HKXQxsreDKAGpXUgWAa5xnTGKefsmdbSknfmZ81KE9yhjzzgSSXB4GrhmKDW2mLY5stMM",
  "key7": "5p9SJoLR2gWfoRZAyqjAmZfmVubvxdXzxsQoeptFv9idZTo8GyLZkNa2JjrCp9maP1qzXv78AcbR6UH1PqJzNLbr",
  "key8": "5TcZnzUCFv7h8GVEWhV5HLNqbK1EioPVpfhhdjz6QDVgtaqog9tMqsdoJbW33ZmeYVexiADSVto6VNVkuZNtfLSA",
  "key9": "3ARyYigMfLRbFHMUgz8XwQjaFkth9Zx8RRjtmwmurfpJjabQPBD5YvXxKeR83PN2C6wWeoLejwjNSXSGPJhUAcYp",
  "key10": "4bvzUVr87XR1TVLdBexDfqWoyQN3jDwQfTLJXaGtnLRMjUtpzPjeKPikndrWCYacLTiwfpq2d7ftXu4MMPhKTweD",
  "key11": "4dRdfsiucUb9bRUpSYGahtCmb7n7fj4jzhEEUjCs5c4zyqCjA4pyaEy3gYKhHqdb8v9HcWW49JgVRFXb2X42A61z",
  "key12": "5y7YDaH6VNijEA4CnGsczSqnGUNTW7Sg2VJeoTQVztxA78doHtJGarAxQKeqbLmNtws9g2d2RCEtggTyGHGTQ3hZ",
  "key13": "2UrNdTyX9ukoi3zPdHcFbcKBmDJVozEZ77asaDqaL38oiX6whLHribBe4X1XjZVKpytgpPYdaEwHSjyngTPVRAQp",
  "key14": "tAVLQuFV6gJLhNJrz6svmMFEgqrHHYxb4rLATjArqYQbTJmjiQfEfRX7UgUqJanmdSSZY6Si2hziyyWw2jHD8E8",
  "key15": "5GY6ypfMQ7hnStM3yEar8xwyNm3AsghMzhdSENvEQQNC57hADosWw78Lybp4CwYPcYpU7mibyKy17X2cnJcYAkp",
  "key16": "3aJ32Ljkn8AaCyqqc9S2JnfM2S6grAbEoJNA2jNU9oDU6aMGxD2gZh3m2gz8L9znbafxiFCD2zV1cXG9DkKhEwLB",
  "key17": "2zHg9RjD2GG5z1WtmCexZUzdiwRTtkWvgZDJzQZgwE972Y8W6dDrcWHm3xbXcTXo4NFL2Dki8YnFpWxMsVPSfiBb",
  "key18": "542BGHtar3s3ysAht7wZWpYDV2QCQaJ8M1zAzvd72YvrkhteAGD5auE5eaPuyxgybaKkLgquDiGtsWNd9dspfBGw",
  "key19": "qDiSgpcjfqfgCJRm9488nEQYXuXshxKfGRUMDbWkNJMqxNJ6nAo7SWreRtp1NUiCjQ7GjkPfzPrw1QdNv4ACAKg",
  "key20": "AdjjUvmqqk3kjrm9C7VzjLbsf8EJX5DhbEL4r1wEm12spNbrZxmLiTPFTcybZtP738M2A6z2HMKDYcyaki29Tzv",
  "key21": "2KJJMwkSRXRFxqc5T6LAYcvzJKvdDQZbpgK1UUKhyMFc2jHie3n395YGXLMnSR98hAyiiPT8ssWxVmvMBtXeUWcb",
  "key22": "3K63M3nqgKFGYNBFwGFkm34heix3Fcu4ii25A6i4CRQJ53R9yipknn3FCGSQDtTuWtwPq2AuWucJ69wpqyp5C8Ep",
  "key23": "2VDUS1SbD9hitnQPd2uurAKZYAddsb2ZoXX32MerHYw9dM6sa5WEWnseH8QmUHRsxiFpHjidLj4dSt1BxxN6ahxT",
  "key24": "5GLufRugVF1rNX6pKw4UENHBLJpX89ay765h8qxJWkctkYMH8UZABcRB3mb83VxhG56J4KhsfzAdQ4uttDB2DohL",
  "key25": "4v8whaQpu4B5Lr3nmHwKKrvmn76ttU928kjDznbb19sitnDWhHxENV91w1aCHwXzcSfNmo7BQaS4qPAMwNKUyd1K",
  "key26": "5k7mvkZpeEiNp2vcvk6tk8yWE872TGdo1fZaG1m4QJjLcQhMCDSCQgvihqHmjKekCBYYymwCuG7aWbXcY2rhZHnF"
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
