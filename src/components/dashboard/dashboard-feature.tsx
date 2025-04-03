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
    "3C3yf5pcHrEwfNDk3MvHot76miHy5QeLG9SU1L1rBQm9bDjKYoo4RqEwnG53P1qT7v14qeBfzZqS4wiJbi1ZdtK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DxAjZPB5GgD8Qo6nzqiQR7koMdTjUFQUo8GqkbtYSat1otWSrC3iJyJo2BvK68eriRksFG3y1jMzQdLAb3mu5Lj",
  "key1": "3KGfKkQ8hAhGDxpjkTaFiHn4gsnoMT6v8Cm7Uh6FyQtBNDnXNjKMex4X228mmU3am3GawyKhKs18q868dgqff5uM",
  "key2": "2tnPqcB7gTpCcT3TNLLQsFt9L42ji2yU1Guc2dsj3dSE7dWYJQXwRaVWHXMngDAkbLvKur9DinzYrqB5s9T2imp1",
  "key3": "WPxvFZjj3ft9EFCoiibd5JDz1B8xcmVept6mAm5PGDk9vHoFSsty3DfXFqMEVeEf7kngpNqgd4YoLT3Pd9RkceW",
  "key4": "44JPRVsmdmHk3cQMsWbuxU2HzVR4jG42fQgvM99SPdVa3YoE826zRs6DAK5EgCbByG7HxGutTUZ35NNBVELWTkeC",
  "key5": "5RcRA4jsw53fnEqxB7Rg357e8AsXKkeLCCrWuqaob3PqP8uHkeEPFbFQVR6MViQw6sJsZHBRrvsKdzgEKpiqLYSZ",
  "key6": "ntXLb7YJmVGeLV7frGhU2mdzoXyNydZQuxQaceHcs3y79p8gBmK1ELf9gzbZ2U4SWdZb9iz1xKmnZvZDi7dUgU5",
  "key7": "2mjYguSS7Lqm61Nxz3ECgnXVp6YBPEgZxL3XYJ8LXTkTryC3cj4QjRtTBaNLaqbamTpJq5WC6jnJ9xgMvUVYnSiv",
  "key8": "4iWpM5eE8KsFuEiDmrU6AWPr3hagkJ1xZvjqyGeXPbddWEDF3cNHHVF7JHQCuhWi2VuC7jftRsG5VtbGtKEgvF3K",
  "key9": "5yrdEFgJsAsNzfS9NHauHFeJihCwoPLtPqAi74TjHf486sz6sCGwmvnTkbQoqi8GAjjiaPHD6V4z3AB1rmc2J2vw",
  "key10": "3giJGZT7QhaTaqstZA3kS5vsB2hcZ2YPF1HCM7tLtrtZePT182K84eRR5hekDARnArmayPMxc4pC72BLQgBuc7iQ",
  "key11": "45iLsVMyKiKCutvXbQHjurBZfW5TAUVMiDSYt4rkipFkveYAe6FZr8eCKJFypfRPT1BmBg72QmzutX192WcSKbPn",
  "key12": "38yEjKf6PzWcVKJdJh9kwyxDnxCtomj3PHvpTZ4NWdJnFT6iJ89jWhGANYfRj6vK5yytUG3i7y8YcPcgSTmovf6e",
  "key13": "4CU31W9PWVdmqbAJgfRGbo9pDy1xho9ob7p7DrfYekayq8rTp8kiKLmcw5PMPLVXjgjyPvpfg3SXuqphEYDWFwRQ",
  "key14": "27DyJMkVaardbJCT4Sv4MuapbniENw9Aa61eU3KUGPZ82bPQEYdGU59XVeKxZiXe3QvMbJto6RFnHjCMG8h8MDoR",
  "key15": "5Ew12MLngz8qkT3RQ45PGZhYfs2FSzShLjUhoBRU5Vu9Vg1MWQwXF5sT5vyQaU8HdSDbgf2sqtYkUsuXAA6RGNss",
  "key16": "4aZsct8g4XRphqP2we1MCQ8jWbemq9mrXvWvXMZQicmMnnW8KzAmT7c616EKNRux472VarwHdveuvNVezgK9R81e",
  "key17": "2c1tN9qqccDeo1EFEH681v5d88reFV5ixhWnoHvjuCk9rAZXgkvMNjj7NFwjQfehaHpVp926gHkeueJVfmDRsoYe",
  "key18": "mG6GPfa3ZraxL9c5jDN5FVrBvxEKg5VyeMePuBaJtafjEgzPXZutErHCuePGEeFjc697pxbfHbipFruaEmCdaww",
  "key19": "2njdDgjqrSf2KXnKxBmrpDVfZ21pgfYWWBAqYp2PLyf37zNfRfEBGjhRA84RAVM3c89u6t6ikeDVmE2MHJ9n2CPS",
  "key20": "2ATFXswzo45dpFTukPorWvNz3s5sZ7T7JuFydGVzvfQbSfwDHDLYesLiAvucLEYZ7Tvjw8PChLhsD2WgKA6MSkhe",
  "key21": "2WcM1VKmvjVk2A4fmqeX9nasjAo8p5FbxJxA6VnGFQUyi5w8mqSunUNwL4QWYfeXkjokq8VUzMgZ63vcySmPMgTR",
  "key22": "2dLCHw59pXeCQZQrKAJvwVqiydAynorGABQ2GCGDE79xay5G8wT6ErcD5AxP9cFH3Gd3AWLaLrUUVf6SnJtq6sSP",
  "key23": "2zA5cuH6a4SPAzvhKAqf6afpJvTNrEBALwA5aDv6NaXGVZ4wTLhh9EYbF7aaMasDq57tohvzZ75knSFCezR2rDbD",
  "key24": "2JFfpVPjsN5c3PUKxbLRh4WEZ6mrHF4oqBQMewwxQnWyXd6qZztWJQVCype7gh3fYAaux4BMFy6HQiwUfWBGvA8c",
  "key25": "4znRAZCxn9GRHFu1KbAF9DrvRiu5ZQUg5wVk6VmL6rUjrUSbwJVdUXrQ5yoJZLAP88xoZXCQZMCqGxgkjjsTbh5s"
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
