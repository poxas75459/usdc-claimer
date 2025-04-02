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
    "4RW6MyLKa4Kiu6fKnb9wESrgeremxRQJoEM3zz49tmXT3yiGwAMCdRcSBUv1ddNDDy45nSGfrziaEgwN1geTH3wE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w4W3WZyUn1YL6mnNTLxPzWrkmPFp2wHEE3Suv7hgmgzhsMDYSdk5rXgLEiTo25GqAnQ89Qea8vQhPcLsCLTsApN",
  "key1": "2LfWi8cav6XsMcGxbTDTAKbvgwobtTEnpw67iFgVTMTimwrbApZtaRQCfSXE1oQw5aizj56yQs8scmzMDkJn2dfm",
  "key2": "cri4n3cuQszseLuWh8EA5oQiYxpRY2ieDmwAyG3X6stDBYEevGmjJpsG9yUcdjnojbpjGEsqv2D5fGLmmvPbSEF",
  "key3": "1BjZVJk6apSEx7jUHhGqFNteJdLk6NqJ3rWFKzZzSYmwNcdfDajpLBoFvv3uTFxmiM8hqAWbsbDMBcwZ3MrQYpR",
  "key4": "2FoBeT8y9kD7mS4tNKZjUpT8NhSA9w9sUpBnMuZJRLxYekkJRAjCGvso3q9kb9iUknSgTys22Z8ZzHxFduKUwPuG",
  "key5": "35XP363gVWcvH8LoXSUBviMc1Dvdig4PSN7wM2BBxuJoe7oCAtveosm3LoQJMUv66Sxpm8paqviWXffW68udUUTb",
  "key6": "3ZfAKkYDvM1Hh4sEmeVCDfm8kRNjvcx4grpgDxrNvGZ1JdEEv4gWfGbRaAJfuJQsLCV9RM2Lj4R4xFWc5AMX2gqg",
  "key7": "2ZEh2AZySGHrKwvwZYsxDURYGc76u5i6G8UtGN5KmGnvGwcXzUNN5ynyAvctotH8EZPpwkaS4Ea2EASa6aZsDDo8",
  "key8": "5HASCKm4rTGXLtQk2QsFwiWTfr6zBF4XgLQagC8vYa3WJteYmmMQ5Phkdp8hdjSmAPqBW4GG2LzXkuSe4nnnTKpp",
  "key9": "4RNkXRxuehEUFHBjqhRSWm7e6pANoY5gaUB6HcmW8vWMB8CkczhUXNiwDgB8df6ZjUF6Bzabc7JhhifW9m348AjK",
  "key10": "4vfkL6yoXd4ArhcgcXoT4CCNp4uqffcUHLkbCWbpb9FNZgVhnceormELdXXpxZJxSWJYajSPf7a4JKGARG3eua2U",
  "key11": "5fxpowKcWUe5mgRFzoWry8cPW9mAHXjNKA7CPru5YBZLygYxVouCQ2aKBtyf9x4mZq3VFwpSKfZp2cX2147oTHN5",
  "key12": "5AAHCBiX6Nf8863dpAp7aJQLavM97NdHghPGQBmiEFbs2ie1GWjMrsqTPW1cVs22rW4g1jpM4rs2tEEGh8MhGoq2",
  "key13": "wZnvTvWcK4Re2uC15jzRDu64djU488vutWhmPobxut5Ag3TK9YDvw8LNccUfZVBtBdvyofoywpjnNaP6QMxhWPv",
  "key14": "5KrUcLP1qb3xLvN5dtQwjDyfBduChH3xkBsZMhgsxrcgdqVnqs5DKjJ1JdR9MkZx7X9RG5Xb28ZmZ57V4pZRJNiX",
  "key15": "3C2NrmchiXqWwezwXE3jWRhwTaCnPbF1CbEM3LSxBPiehnzGnPpZ1pheK2ddqSpvGhPmdsMwaQaWZD5DeTXZvSAM",
  "key16": "3YopmjZ7tURyzkfR3N324Vs8qNWQBtvB25N8Uh8HZiQVXx2qyFhtXxgb295pGd9eYPfrSpx6dbBsCUxxRzcnkVY4",
  "key17": "5aQgrQJBhgCbhp1RUKchS4A4MEiprp4HTz6w8GuKAvm4waKokcgfwRGp9PkQcWzT585QhN5FJ4Cn8QshtuDDYSjV",
  "key18": "49iwffLmc4Fc5GUAsPXq8EGzkuSChTtZYQs2o2FJdsAFrD8fb8CAFFH51eh653r8r4NE6cphSR35P9dMpuT351K7",
  "key19": "37Gus8pTBM6C5ShvbtaoLFJWD6fxTYDd1ot7mLwsbjtoc7AZtNhvBFisMUz7XzgJzCR3QbyTQobhj2EGyHbVfka2",
  "key20": "49xcAbnqSBSyLtDNo3fE3qRWPYpGRWeCHx85uPAjVrrwM8c4wGTuASJv8BfSXL12nBcnPcRFChzC4i6dNuoKnZR5",
  "key21": "4iSHojid6z3p6twyqroSyUG2GDPxwnvUwGNGGiXNsFAoqkcHaHV9sBFrxXtut4eG9Q3YSqEe5hM5tPqU3vLZLe9h",
  "key22": "2vGeQkGpXAiQzM4pYEdgsJtm8apmnLTrLe1cSLb3frBoBzZt3U6EnynTjDuvZx5LxS3TNGAtnmWwUFeRVkzg8RA8",
  "key23": "2U7i4McYm8EkGCH44srD6jE29whqioBiPrKbeNscdowci4gHv11c4BVepxkDB6dP4XhsF6BsqYkmr4n1AS1eGgwx",
  "key24": "4DBo5KVtco2CVg19HTP9iEXoMSgYRSfpEAT7ZWJDtHxUyiGUesF8hB8AN5PrYAcXikUHFhk5tbpPjrMAs5pyqcmd",
  "key25": "5uCgCLmBifJ3kxrcc9MZHEsP9CrkRyjSBRU98nTheKRasbWpRdpGB7BFJhJ9uwkiKjqvCDxUGftgWqukj9TKYCmq"
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
