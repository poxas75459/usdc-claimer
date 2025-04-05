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
    "2LQBzK5rC4obYene6Y7NMBp61UziYmujbWWzYENsEMjEgejreyQMpkujbXRGeP8LoQVftGFaFzdSw3BjxhrHTTm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QgLMf16wWf9GpLe5cPg7RhWXdEMXToMYPDCy3eD4bKHSpKFf733a14GPs5qcvWN2ekjZWRFhVe7Z9v6P1HCD5E2",
  "key1": "5gsi4TtEpNKCwWyzZLuSFxvmdTLQWvq2jvinSs8VVyGtwVtw8qaLVZ1d2wzJJpKjrDXG9rca5cjGmQY3yVrMpwSo",
  "key2": "4WTRhJDmAtwmaYtg8aVBSqMjMSvjkgwAhk29159qRNsWj1vak2TEyyLZFkWygQEBioeHsiRPZcVTmbyNV5jE9oTx",
  "key3": "2uCeCHZ9zd7q7y9ztJ3cVwfLGZ4QUe8HuGmZDu4BsUd9213fB8zvsqBoGoCjNE7dB8CPoAhQHJYkXPVikoT7f2X6",
  "key4": "6624kTyeSWiiUxc1ZQkvLUpR342qdAgNDeZyn4EraNzeuwfMbLTrPHjP96fAiHBZkedSaPabA3dFDymcMh9mBw79",
  "key5": "5xS6KnzpBu6bfpKLh2Vy77GiGeXBsucg4tXH82TsSxN92AG56pkgYs8MeF1bxQBA3UShfjugcWZGzj6gBvE15MKA",
  "key6": "3a4tVCpjFjSUkTXHbMnfTz7Ry5rbnFP8Jp1aiD5cTmhzZ7L4JJSgUR1PFhgJDh5vH2K4AgThV1QHKEp9Ctg495fx",
  "key7": "34JXtbB6bC3Bq7Fdqwxb47W4BGJ8PxVP3SXSTkEJ3176sn2hhAbfjfcdJCznFAXCrPSoqgeQPGgZfmN4zpX5rnHK",
  "key8": "Acs39PXu7SuAW771JrWokFWSFZDnc24xbLJTWktoUP3bp48Aqzoh5HKZ8K9J1nSv63SKHUBoZgUbADsY1HNWAc6",
  "key9": "5doBbfFCpB6HzWi8W3LHFvVzU2UeUjagfNB8JptunF2KEGUT2zvGXGxJ19RyEBptrn55RfQWABgpXXHcS8dq2YLq",
  "key10": "66oAMyRihRmFjqgm4W31NvjTp9WLpmGBiucPp3t5igP6agQDEYy5WSotDjhr1CWXC4RTShHLksppncr58TmRHVws",
  "key11": "5EBDxDqTXNxMiRCyg2FrFJXttRf7HxKHwKFYJaqGJjKsZiPbpbpE8McKTfshs6TqpEzGT8zcn7KLESAVpyAgVqgk",
  "key12": "m8q9uNpsTu83QpfxNr9vz2YXC6avs7DiwiqxnVzTTL1XbnTHaZ6cvU3hD9cf3xYYKBFFaKnCgJNSptqgG5c3o2A",
  "key13": "4gTP8pCU9WjXwAWiJh5kjieoWakce6kwhcCJnfaJDL26GhvnBatbxwt5Rbn7DjCvePTacdke7Nd7JmPEoeVymF5P",
  "key14": "5Z6MEjeoU4tfrwd6dz8ic62VpNgBsT43YGc6FgdMnBKWKVAZduJoxSEsNgByMVhXb42UxEttGsBm6hTvnuk2FUbB",
  "key15": "RjEYFZf2hwBqgJ5wu5bVXLweiFsBMWJuj9XMwEeR4FuafNQcyuLjWi5UMRNNwNEn4E1xdx4aS4dqvRpVu5RHes5",
  "key16": "3pruv6cgjmWUcAKX7LoR8qsv1JFBBhAAyvRBw16kyxAUXcAY72a1zSFjCYZm6WC5DMyQdAW748MELyyJ26zegZbE",
  "key17": "2hrWNcamisLeqMJ9meroEwmsqMPHK6SgzCQvdYJLBWcJy58mqFUjB47VcoUGgW4M1sopqmbJntJNJCiMxhXy6YzW",
  "key18": "3duzkBVg9tEAs8w1NNeBpMb9tbNQndudxZeg8AfYxfqizFDP4x2TavCdHgAqLHYGKsncMKkgxXP6ZEaXQLSpVdaj",
  "key19": "31DHKdYY5oGComzFz6gARwLpEV2HSqQvt5BbsSrNGDHbdjiaRYYBAsTzcnWZw6rwJNvYQNKJhPwKPeqS4nK3jdyg",
  "key20": "4mZ4P1T4ScSUo1TTwzq8WpKHLz6um3njFPn3YAioNdAS45ui7uzUXSBFfxpoCdDkh4GoVLQQektNeTFCzUPyjB1B",
  "key21": "57Yc5mGiWsYocpPjqL1PijGfKA81Pa743wJQXBzrKe9rySYcAJE8nMaJkA5rEoL8QGUERnkCqDty873H4TEWKhfr",
  "key22": "35F7GKaHYGRrmN9mmxXrQPzEeZhtCgNFKidj33ioDhxf8TC8PshK2nxwQ2eEktG4V2tJsXbgD6hyxspvznPEVpTY",
  "key23": "5S3nFVSEu1kAm6cTujSeiiHse59UBZKhEeJ63yXgGb7gyznx2dTyfrLwJ5gzQcfsaet1QWQKtr5Wm44ZvoJK4aEn",
  "key24": "xE7MUXSVizLG2EmzVExCqmhbv6CVSjeKGJBLymGa8ZRMmfNWbnRbMcj83Sp3gUhofB99KUWrvWcV2EJRCzfz8dh",
  "key25": "5GCmd7Zb9vR8f8MEYDNianoyKzXa5QYgaSSSEiEJ8vV2euUfwfFoYDFW29Liw5CRc9pc3vU7ydjXAyvafE3XqXJa",
  "key26": "4HMjCuqXZu5xARFx8DYwMFvrcKV3tFdTdihVuUQ8HTL1byFaqSgoR3TXesxGE8iNj3qhT3hHfBp1k58j2Bo69VPG",
  "key27": "34PqBuBuZAvirTdkRcGJSVNAzLhkPMJyfWub23WxfGnbHRScS7bY5wSyQYZhRjWQzeLpuAP9F9piEmKFjnXJkWqb",
  "key28": "4wSj22m9CBCuhj1v7oXjywSeKFXjbS7xKfjF1XZ91bwYXayTfh3TB1dv1fs8fekwKzHa6pCuLkQ31uYxNaintTuQ"
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
