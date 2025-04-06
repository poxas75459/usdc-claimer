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
    "36jBAnzN5TbyQi8FoMN5i5Cs3No4WwhfkrqhPhdE8fR72kaiHLcnLicBymPDWinyVTGPX1NiHCuxueRArdRdCRT2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RupP9yBCvBHaj7ey9976DHfqMj3SavcaU4LPtWswLFY7SpuZLxka1CaN3PJdeUq53MmnJRW41sFgQoFsCJfvKAW",
  "key1": "4q7ibJroZjLZ6PyFmV4YgHgVeQ3LE5am2KjGEmSqf5KwHPTffSrZcgqeRtHZPKKUaJ3NdmudGttFJmRhcT1CTR42",
  "key2": "24xmNvbZ1rBbf8nNU92yEn2AfiAUuL7Wy2QpWgQZX6g4aZAMLaiyLJ8eGKuaED7hd2MTCraW2qdJGjQRY3Q2PRwg",
  "key3": "28gXV3e9eGrSSWCUgPVvteLNJ2wbHfzbJHpfHQ3Aq5ZmP47WUBqrba83S7C5tsdZHUTkocjTp3kaHMWRCTnfSq2V",
  "key4": "5RsXnvRjA1RUp45vaeCQ7RKz52qbFPKL654tEKCBDmbNiu4at6FPZA3eRLyQ1cD64L37iHD46LD6UvukYvrAVn5S",
  "key5": "4TJhHzo9XQpN5F6yJ4X23q1inTXrNBs9UGAYc6VwvetquqCt3kGXKQ3civBcYBP6pbiUH7Abdub4ztNjNKy2Qm8b",
  "key6": "5Q7PR1qwCFY6WoNJVt9M1hf7zG1CKRknAtfXhUZptNW7irChsAdaeGjNpvLyd2mA8TyyW8WNW891mtdXnEDkfHJX",
  "key7": "G9pJ1DSuLMFKDnt7gCFipG495vyoLDE62nBQGA2xxqNeqjs3hQa4dF8YmVBhNucxL6j88F3X2S3QYoABDqhxMVy",
  "key8": "5CUtV1cjL47YY1aJhhPo8NaRQRDYPZozNw935BfBXurJ4Sv987KaCHr28SfmY9fD1Lu7oAon7uAiJZFdME6M654Y",
  "key9": "4BAtfJ7xFUzFZw54A6rMAswMdxAmZ26Pj38safDtkEZVHN5hMVH36onyqmtgCnMkhGVU6iRKumBhBgFqtgvWk5hr",
  "key10": "5tmNDwBR2g63mWTKuvvSwv8AUCeLacww3rZ5qm8n3Mc3ihLM7jjhwszAcgQyt53hSutH6bxECkbYCxEei83c81rf",
  "key11": "2FrsKNKejAEXkKyDuvBwu9RxK6gnR4KYZinBS6g2Mg4hsJZQtuHkv1gd4fWEHsKfpV6kBeP81pfX14dEScoVXGTS",
  "key12": "3GzGWk4BSt8MHYHF81d7jjvWzysmskh4dzwWQ5F4wj1HiCtThrTv5dTRKS8xnVRLYKg2CH1ckKjSRUCVx5VZwLYP",
  "key13": "sqgbhCJBBk8WUqyd7mTtmZwcejFYLh8km9KH38CG6d3ZcyroXcjTxVRiFwtrsMWtQu3C5ijzHSKkvtwPkMgH9V6",
  "key14": "4bWnerZTR41PhvvQftNwqALBhMxbZdmrDFdSQyWGBg8qPkmV84h3P7xxYPodrS8Abg5hGp4hi6Yuk8QazauAKCbH",
  "key15": "3YzW1ifqggPAW7zudCxVee1ud5UVxrthY7DXacNsQEWtrLYuhFhXfuvhhB8ubj3shFRzscwRcQ8mcsyixgPgNLbr",
  "key16": "3sQ4MPndJuMno4eVJ2vucYbKtsCQUkj2TYMBiG2nXN2z7EAPgHsQsYFh7mnQdosKJJXax6GY6KkgeJmEm7qBArmW",
  "key17": "w8rhFSvv6V81phN3MzdvpXKqVWEZaGKJNZvUasqUfxLUiWQHNxLzPQ9pzJT5X5AeNn5NC2vqgHYRQU6LhHAfzg6",
  "key18": "32ro7XPj213opkHD1zqGsY2LasBTpBrijjhPdiiwLDag1UQoFypfuxbn5bM8nn3L5iEEYCZrj3sJFchkoi4Krn2J",
  "key19": "3XUomgaj21UwFKCkBSoSXDrX3LQFq5axLRW8icaaQnffGYaovg5aVdbsNvkJCYNCiutRmREoWmvoxEXCVJkargSU",
  "key20": "ksDnjNbAsc5VrTU1nVcYxPWCC9AqEWREgSjeS47KWEfefncii75jWpW7PWQV2pYrfNmwtRJLiJBj5hNAH3fZ2jN",
  "key21": "7HSce1uuyvMnqZhcVNTCoWHMhTB6yGb1YvxcbYrzHwd9Y6tU3WgQsJi1QWaRteUztDUZHfef796EcoXJfG7G5iM",
  "key22": "5vKAPTiYxx4yBef9JBmTJkzkQKbozXydirWc3hDpS5igP7iRRSsmzQsrN32Zmj2afmyhHNPqhfD6BGUHjDH967DL",
  "key23": "2hwpyb2VjBEAHDJHVYThuQqCb5749zs5R7zEz6ZZawP1y4nDeRBnJbTfdxfnhomWFKbkuSFR1dLCHCQ4o93TSBJm",
  "key24": "2jbAnRjFoJJUPQNf1webTUdzkkz2jFjnzZzA38aC6jcibRUGHCEHXj1PBmu6ohZV326asFpmeCVZPdtGFVMpbbPs",
  "key25": "3CxeeN7CrNDxDQZdmKyvJx2PcWjnCh4hkX6GuiSeAVDFFEAAk2WMq8qhSKHQS6cJpEj7jzGo6azb8e16W6bUZAJg",
  "key26": "rsdrYDoAJzUS3oByey61SVH23ftn6Cu6xeqcMBiKuFrdcj78jxhPWg8a9GG6kqeyREmvv9Wsu7P6DX2eo6eXZjv",
  "key27": "4dtkuRmvmHLgxZW81P3fakDqB7deSjFL2jbuNERuMkXsKgHZioztFNuZ3BfdUtvqm4BckR8N1dBsmYh79mW34Rz3",
  "key28": "25HLwkZqnxBQNEuHmry9VAWdnk1CtZKVPaxaZu9mqZWEdERWbtpkxfGVAHW9UTiy6pDWwVxmjk2LBBwBdReDCnyw",
  "key29": "291b2ebk5qrGnERjBPirrAJ1TWpPY1y9pQV7WhLLWfXbxzfWz9Y95yGZCEE6dbjGC6ZvfeJGsEVh3SB9sfePfyp3"
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
