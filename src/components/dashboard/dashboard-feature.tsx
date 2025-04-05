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
    "5RS2VTCi1BcC6xZLUFbmWoXdCipeRhKy8tEhszT8RhY1K9PeapihdimxULTsuLDL8jx9AGAyrq97m6GMgbymo3Vi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uhnQfN8c7V6pGXnfUprJypqso3QJ9JioHg5N1EeKaPsSRYn2beUAJDDeR7ii2ATH4Bbsyc7xxh8bAsuHE7HpFzV",
  "key1": "Sw7buzRoRXxsZkkgdDDubGbH5XK8NbuDPpmPnk9Vz1arzWVu9uAQMbZt8UAPW9a1UDXHXrpkRuSMRkbiAKqt99g",
  "key2": "nUHYbDG6Z6pBKz899mBdzoUQTR4nqQ1MCAfXtV18kFfQK2e1pGDJBQSFW9K5nQPWYmFF4NoehAi1y1qb9hjKQYn",
  "key3": "ZongjjaMUUdgiEUvKdh1JhHVKNapK5KgSbUEL9yBtwCWrmd5zy79Bv6Vb5VfPhuKn7MB9UxHm1TbdURd2uifqjC",
  "key4": "66WHKuMeGJ3HCVoefwz2vG76wiZb3bucdJ4ckgRf1PnhNxUiwHhuGLdhR4wFkVNcU4ToUW8DnqLb5XcvPAqwLNAe",
  "key5": "47ULf1rQCQPAodnGVy3aFP3BpSkf9LY1AbuxZ9x6UBEDunSEq91bKNeuAR6qmyCyd7JMzPm1f253hRMXt5ZCdjHE",
  "key6": "2e3AGz6kdBa8PGRqp63nKVZi5tJXVAoJfUsWETwpY7ANVr1CAT2qQWov6mLnAyAcDGgaenQ9RKTggtgZUBDQHoh7",
  "key7": "4xccE82oa3FmDVibXPzucFSucZGpRyayrBVp4632jrrQCfHNMqBL85t2SqAoqoDYwmtp74TMmbcAy8iW8ANKER4m",
  "key8": "2YzXDRGoz7X6M985FFu24sziUT7nB19x1CG4QZcs5jvv6Ert8sruNtN2UYTKMHQN24XwymPDuZrCNJgnoebf1Rvi",
  "key9": "2G4rW2WpCPXRdJbRRuEUfHNMzgeoR4T3VcoCyYbt1QD4AJwZ3yK6daYiTzg3J9aNivCLTdJyqB1VQw35zM114i1S",
  "key10": "3FAAzjZN1dEz1yuuoguDq4g8rBp6YnS3JRhjDrhH6D3W1hpykLEJ5n7Tc5Vvxxu3FGYsz7NVQkcwbZu6wFzTpdFG",
  "key11": "5Yfy78HyZuReXGwWMdR7DySN1WfdavRiGLZQjFjFecx2v7XQNdPvpZrg26czGYkiwjYHPgQ2KgLhBv2SM6Bujktx",
  "key12": "3XyK7fLCdvuKhxCD5EiP6xgYWw6xpBGcyNcpTKGR5mjZtZ2jFR9QtbwVUt1LsZk5W2xRn9BQo2gq5e45fMRXvFUi",
  "key13": "3rhi4QVLFye2uZrVq28VgjvPgLBBWW2ymDNC4awcVW1k1GPjYWPN2VSjgkzVwDGYyTfqTmMWoXkopaNCzJ4tKgDi",
  "key14": "24qdrYYV5yxRVzRZWEHKUA5LTg8343ktMaBfVrYDyC56gtbFJu9ncoBkYN3bUAjvWMFLZ5Aky3TR9fyyRgqRBxch",
  "key15": "Xo38WJEm11C1GXEFfDvHsu58drk7Kpv2FPLMaeFaZFYxApkgiHJbcc6YYzs4QuUCBTaUBeWCHwk9Uk9QsNNhsQU",
  "key16": "mBvnNtqgE8mLuREEFhNCGEcFoJPzggEPBiMTxZKmqdSqVNjsRheT8gYoYVKD8tsgfL6hrktYq4QTfLyB5NU7Vjf",
  "key17": "36AfaPjXCTTGNVfvUqS41U7sxe9UgxDt5i9QNUSUz3wbzzAPwnVTPgdD2AxH5JhAaoKEhMXqZVRaCpJTQpg32DQD",
  "key18": "2f5WU3bjvd2DsDrpVvNLyfFi5jZx8eQ7mn3Engm8FabQZW5zTtVoHBanqiqPX264UVGZK7chZ7AWys9Ps7qq3Rw4",
  "key19": "4u5LNZKU4Chchh5vaD3d8GgVnARVWkxYLeN9rbvmixrj4jo7dGFLu7yDkAEx4UbcKUbMgiRRDP8pHrCPB9ToWKco",
  "key20": "353dnPiskPhtXq6yLrXWbZ11iph15yaP123ZnvRCx8fk8ZZka4mUovibUW4fD9An8QhDYEBfsberEbvgoBUiFe8S",
  "key21": "4ZMAxTzye9NjvmWxQCMazMgvVZnp9LHNv3HjYzL1B2JJm6c9Xmr93jgoECB8k2Q2ge1jtX8Y7x2YqsvAwToRZSFu",
  "key22": "37AmpJvotVsjBuf51fHPnb1bZJDkTxgj7z7j6VJ12P6copdymR26NBgFCKomMH8Cvf2EP8h33BFF2mwWyWrtaYmi",
  "key23": "29rsQweMFUtxjRHSkScvDKPvUx14Q4b7dFtCYvP7zhYLeSiM8awyKdqu4uenNujDtBCirEp3Q9VFPDrXNnbSStZ7",
  "key24": "58o6gH6zkfHJeT5cseTVv9FsfpVEbdoQy3mEMtJWK6iyqjVxsSftQVYT7igHTKNsHqaUCKxDbDcbyTK7Enn25g7R",
  "key25": "3g2MzqpqPZfRA1CyrbedE2uJEFEhxduxcMDg2q3PLvrXLir6CNCHK21mrN89ZBQY9DscaNRSUHRMLMQk3E1jTz6D",
  "key26": "w6vsZMcd63scTubAR2hBCJsGnGux8JEDFyXYxTMhHkKzdyR2LFS6uBBN5AH2RamSiDodXiLzY23T1ufAY9Kfker",
  "key27": "225jj6QsCAjgDAagi4aAeRB3yKuyEQhdrufNxyBWHiWsisQML7v8zLUGK6trKRqgFq2E1XRj8Bah9LzDVx2dnZg6",
  "key28": "41VdAZQabP9DDL6F9puLYrPPUpuTgiGfq4ds7xBi7NFZu9xAM8A7oMnDZhwru6w6vrWiF6ZbHs7nMkbHjtymMthA",
  "key29": "4LAA5vkZh5oXC9qU3uanez5HuXYdQ8ey2Y7xZt6wXR1z3ZUJxudQCCSEKqKAiPUkZd8cwNUptzL9UtqPHLCBNFph",
  "key30": "udjBmtZ62YNX2M83rpKKU6xjx8ZAZyZPyq6MGYBRtYKYzfpMyUkiT7iFv3gGTdtqXgu3nRn6N5959sqifN21KKF",
  "key31": "27ecQgXEfRtAHsmanGwhEK7zxqQ9rLBQLtiB8MugAD4dvGo9e1NcUxo44zKo3KxhntcnDNV5Q8LD8mGXK3923uFu",
  "key32": "58dTYS67v6ZY3NsP8hC3SRZDZfQjCEC6U5a3abcd2e5cjwr3RsshgrSX7GpXS8SWm33auWZYNL8vjUShDBjfUCux",
  "key33": "24KYQET1bB67CYSZkq3cTYfcxCNNLVNFZEkTKRvurrFxJQgi4N4PtbPkpsY8KTnSVB9gp4DPzdosb2vKD7Po1MLG",
  "key34": "STLXvGRhHj9Zzjw8QTqrLNM8PzGfL7ANFTjrXVSQbPDxWvs11QDZzDUuRVepzMG2uNhVBmvoLdFv1U1Xgzy9Tbs",
  "key35": "5Ye44txNsNaKkbtuPgLXbowvKXQMCzRK5d8S6SeTuh6r9oqehSwrfbegyTDf5vTZsHwoqdmUBkxzkS7JkAHhwJZc",
  "key36": "4GcM9dM7j3MzCCWY3iHEiypQCKy2UBZsu8Ap46UPJ9a3RUVBryKxSTKyuRLsRNtm9dgF7ezJ2BSVXaxxreMamB3u",
  "key37": "3vDCXRUDyBF8UFVQvLPBjfXWqqfPtNdkgMngUZy9MTJWvMHg9E7zfqXfbXYXFEvfwwb8K5zVgkQJxeaTN7hnVmrE",
  "key38": "583tkYtp5xt2Y7Lbxoq8cduxj9LmxaSvtqBFfwHa8UpSSeYjbsDtPiTNY3fY3jcC92WU2zBicrD7QScKSJM6PvLT",
  "key39": "3e9oAAKooGosGDpyNVZL5QW4EpUtJzCNz8sB4mQauRZdgDA7Z3ARgBY43E7TFo8XoXyLuCBQKiEALrigjKFdapeP"
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
