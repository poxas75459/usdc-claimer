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
    "2bcyHx66p3848kgwkyPG2sMXveiEgiuJySGE21eacvWNUB4rXqZLpZK459tM6K2FpYuzSZjnVUw2XnGQcriFq4NT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M3XRFF4cC9kEmvTEig6rxyFat27AJQgPge7rqrPWGfmZxa8urL8EFny3w6xjMeyYH7sH7qZhgvufCsxd84P9JjS",
  "key1": "5Fw6KGcA4bBGfu3imk9yCmnG5Yyc3jPRecJEAiGzEMgYM5BUhTYymnRadFLA1Bwku9NPGURX5mToM6dTN1S9Npey",
  "key2": "3d1PXeWsHvoqohNGXpwMJoBtVpSdSTYcj3iJHGSdMPQfHSTc8TsN4bNTNTcMX22HN726WkY23fBaqCDEcoyJ47LA",
  "key3": "51VtEtVe5hWLJNpYP3r8de5V8m8gaQJtNMgBPUtk6ZgdxPMNjgFNGc5HjcnK3D8hJK5S94MsYZWb8YDfEvyqJFzT",
  "key4": "2eeHjEMuSehLbh5VeMHHPT7pFGg1n4G7J6ZWuRZYA4RD7yHPTL89R7TyXqLwXHXvLfMjv3V6dMFRupqueASAcqxA",
  "key5": "5CoGuA8gsxCv4jfitvhFAEgxUBewuEnmewUtBDLmerM5UgfvNnDWbN2Mho6zNSJG5E7RGsVRHvuW4rVR5cyVz4ey",
  "key6": "4BesJyzMbkNPema3pmGPCHogj8BaYjpDmUKMJyX5ZP9Gw9NtXqQxm7QQykojuznY32PgAGrkw5g5WbBMp1VDrfR8",
  "key7": "rf2a65QxSjmkmJpBXTpK6CZDwyLzmmBd6JdTPERfEPDDgvDM8WbeLCYbcjAMAZsQPhmdnXkZe1Kv6pQfus3jQ3N",
  "key8": "61VLh4eDmBipVrWrh2pz6hm6r6dj1SRQSBiNih6Sk1FFsEELqvuw3UxWH4EV8mBt4W9exbuehAoqUjhHHieEPowk",
  "key9": "41aNRVoTzS8sM4Hf9aky6QNHm3TPcuFhZUPw6mRFvxFovueQQXyX2U4NnkruRpJ21sr2iiogVSoXeqdyFcrUigcv",
  "key10": "2BGXE4M8xBJxbhZKpPPaJ24rWycCDXg28bZSwqcE2fVQKDJzg7sz6wR1Wb97DxoiX3DbiXx9y9nhAzGfQzztr2dC",
  "key11": "4yQNNJzAE8XvyjxeRT5xFcV6URSjXfUw1Zz1Jt3KCMVNGdVHPayNQWZG9oVzAckb3UoGY3sH1m7bXs7RKogjfFkQ",
  "key12": "5veThE3TxkG2NRRH1pfuwr8uBFRAAvAXUFnNgdGQ5qGmN4sMcMkmxLwgCTDRvr6iNEGFjBbi5Z78q4ENs43vGWx9",
  "key13": "3FJ2G7Lrd77bQxN7haxVy1eVAebHcPxpqiwdGNtLKi9ngbrVyRFf1QgR5R3jFwDk5FJGP6VFutZEuDZKL4SFdkm5",
  "key14": "ezdwQTQqmyi1Z9RCL9u9xtWPAp158Z5AkkCwu7rQqDiZ4Vb8yQbeXJsyx79sbHSRXnjMrEADHkXV8WkC1kimryy",
  "key15": "2CRBqgYyqHx6Zzy8irbRx4geCwL8TcLFip2CMGiFU8qpM3BFv65ryq6SKkL5dNKamTLU8ZwW9nWYsHTCvdUuVjHE",
  "key16": "4U91wam5XjW6yqSsU2BEZJJ3pKTuohX2hZ36q4oNgQiMmsQ2Y6oGKw53H6rub2rg9Qoy24GVEVFTfR3eCkzhG3G4",
  "key17": "3qxdDFa2SjveDPubN9aRe34JPmversPEVws9jQfgFmqZ4FerMgD3Y2SdzmRSrnE6gHYRgPsrmoPoYxmLgVD8zPRG",
  "key18": "3DKvEGyuY2tRW86HicLxEwRFRiwxRwstpAjwXtqzxGTqZh5ArDJc5ZSKXabV9xTPCaEBD4ZH4qff6tAB5K4i1TcM",
  "key19": "4Ggk4TdvZLmMbuJMurJc7xn42VQrzbkTGzj3os4fLoDopm4TRLMm6mRaNhDci9yP8xr7tLfR8iQof56afBz4ZKxM",
  "key20": "m9Rno8QcUbVDF62EHXJruj1fhn87Ad9Yjr1BqW1dbnXvfUY3y2oNJTUN6kLgC5bqU4NwfvzVhuC32j4A3Jx7Ehy",
  "key21": "27Aic2MFNsgfkJ4fbyTFaAFbo8Kwo6GepNqRgJ7MdhHKpct1ggJZ7vQbE7tRYsYeB4krpErvJc4E86pvXnoPKnXW",
  "key22": "3XBHV61kZ8MUiBnEEsTafY7uyL3it1u3dEb6gzTpWXNK5C41a4LJMzA84rXjigxJe3NFUkxMJNPzH65DAiUNpgsy",
  "key23": "RCntwLgiK53j1YEgbgu6xy6NdsUnqQeSScK4kYURMqsdAkaA3eh68Kn4FRo6SVA9oDYN95nFr6wxnZyGFPu66dY",
  "key24": "5nJsZq2kWkVdFdmosxiGoY11Lk9gevapJQcM6kAm9Gghy27xchcnVzyn6K5pQsTBiLjVvfPBjNGVU7dHMEFmd4CX",
  "key25": "4kWqADYaaHxprSUof8hzH4NWSwXkox8hpFf4j5DoCusL56FQtKEnGuPmcsZtEYwxJKsiFRcRuYQqErF6xjPs45Lt",
  "key26": "wzh6sGepaZq62QU17UHfsWm3RUBdqmzRyYjz4561LeunKJvQhiW81KYehWzCufGQDgEqTrkazWaEi1SD6hRo6J3",
  "key27": "2qJCaXHTFA5YP42x3JSFKyRxgYyfUpZFBdeZuibQV5ZPPqxJZfgzVJ8WYyhRzztBYesU5ggXvf8xH2D5LHaL6iy",
  "key28": "4jSGizTGibryRqTg4evjbvUsf4nyWu2WYQjSfmAQuPhEuJLrrPVFdyuzwzF7JjM2T4x7ey4ifEm9TsnAb4YKWaUy",
  "key29": "2Kf55N6Zwxnfe3jWBA5EQLogr36oQ2D4w62ZN9xZHaEmesmGJZ7DCzL1X35oYAxmfhKwcRfeevbU5RGHFDKGBjwC",
  "key30": "ADJVuKH6reTg18pPXA2H3pxWPx7RcyaWij5SUpeVQqLZkTWKdMY69PwHQbe9ipdDJRk1Pb78WhYeaza9hQ3RJMG",
  "key31": "3arCAAKokyjtobLs49C53Mg3vUpdVj7tUb5P33YH1hj7FbJtaZ6nZN95KeKQKgmtQvgoka5qusbvNafN9XPh8Z4n",
  "key32": "2bVaB7Tnz83hHs6fP6kJdmzyrrvwWATFQ4aHR9rDga3U2hBSi9LssZ1yzz5nzAvSyE8pzjioQE7PoTkRLRHLqHHn",
  "key33": "2EYM5RhtLAkFEBoqtvr6XeT5S3TtBwcKkWYNJrPzshvgDd9HRT65RhqbopFqbTmN4UnG3dSt7QuQbw5vQvBafri6",
  "key34": "3ahr462ikE6HWh3VNYPzGPDbHs5X5SFucNZxtMF9bFE53EWWhHroegxPeKaB3MWYt98uFMgWmtzimi4WESrLPHC",
  "key35": "3sJEQgFKhpR6kbFzKJps69XKzCRGMjeC9UmCEpcqsFHC4zz9JLUnUbkAGB4rXjKughhSXYoMXbsL3hjf6nL566L5",
  "key36": "hFiBHrBWZiczroTMJdZuVk7Hyj4wbpVfrzawpUM622odnFwaAviGL75yrFGejhA6qvDRXmB57UJz6sDfNRZqDoc",
  "key37": "61YPwxE5cLokCPxqe7UaGRnS2HsVqq838gm4DYSAyvTga2uTDtwUxjJVaqhmVQ5ZmyfytevEUnfg8uUHvx97U1ZY",
  "key38": "fWL6msez4PwfcccA6bpW3FYp2nNAFnaXei7aBxxXZNz7PthLRkuG7Pg9V5mc6LrtNNy8MeiS3oSeYAAGprfrwir",
  "key39": "4DwDaZ6ph8GmzN6J5AVtvUSpYUKNNjEVJGHoZK7Bms6yv8daA56Uy7VRMFNSB6wsE7o4nTibesB8gjRzN5c6BVbu",
  "key40": "4JcrF9anvMUoWdMw74YzqifX4Xt18hmHWxUK1vfHP9L1wHCJ8BYpCktPPj8QuLeAZiYedwSP6ofCRqb93944X1tV",
  "key41": "XCWvMWf49dEf9zJ66KAuRyE55UdYFhDugciFxu8zdyujKqmqvEikxPDMu6xFzgZ7u9rZFnMENTLzUM1ejNeZyWg",
  "key42": "Cd9ci5du3vGpahaaXQLfZRD9zoyPqyFuNRF8i92rz4FNncqMp7p22xCS4fdSzJkSC77FKSPtEPcMmi71DkU8kYU",
  "key43": "seFasTQmMxRoCiXRSvjFekxGADJPkfwZQRYxM8HQ6LL73aX5ofjBciuZh2RKSQNdsmh4ttikdKAxixQHpjqQeGJ",
  "key44": "3oVGsPKxRBDHsiUoMvt56rExaqYq9Q6qnUHcpee6Zqq9jygPdTpxQVhUWqz3yiSbrYYqkwPCuMDVBM6ev8h6k5wU",
  "key45": "RH4JjXc1kz2FbGXhj9iFpuTaqzvTh51MwNLvWYuyAWSzxtvrYAiJhudZtDoKr6jD7U38byQmNGP5xNc4FjHBdCW"
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
