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
    "47tsypgHo5Sy6RZej69RLxFKfwD48j8RmaKsC4PkCGvfJadVkH1Nhd2ikH9tfQjFgekhM68j4GaDA8kcnjiw23on"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wemd3pWmpw6FA8BfSS3WtAwvhbsxEsTsSn1ekddaaERQJKcFF2756b4nSoVbwXYRsgjJ75uvQ89UDk6SEDsPPRH",
  "key1": "2Qm3x3Rz7N1GcorYGfygefvV4GANigotUBphoD3caUpC62WmwTerJH7Cs4pPmy4xNbYPTtY6YfJikJ1Kwt8381iM",
  "key2": "3Z5tjLHKjZZfJZVcqgRvrXUyfSUbfakbe6MH8Aanujo11uUpmUGZ12Fcw7xfzwTjEpRCxEq41p5sYUuuDofrdZd7",
  "key3": "5szcQZTyvKqcbiYyvXAtmSdC9hMpS8TkCr7XYGSQDyyeoqZ9hCdmQe7BPmLQVS815hZyiPefunb3Bm164RdDx28C",
  "key4": "3JKU8h8GmVNqXvnPRR75i5Ci31p5qeqVw2kEnx4JKanEBfycHtoRKkgVuXraiDPKDtZpRwZTGyCHMd6cJdaAJoDS",
  "key5": "3ipfAvmM7ivETggvBA6dYVY7YeySDkGufe92HgSCTKY75Y6TpxTJNWuGDbRrdgPmR8XbEJPwAfTmbdKXnDCamnLH",
  "key6": "2Yrb7r2GVkEwLcqJCPetXmPxEXoz9rmNuCpbrj29E8kmShgUzM4FkAAekbvFoG6MoA3QAfuYEdAib5wZRSsCaLHw",
  "key7": "45XvwY2Jcb2UDSVDxKpJDj9SMH1gdLd38EFZvx1yZk7xetP9eZ5U4GpJf3Esz9Na3b1F3prrQe1de5Z8RUUv8Fyw",
  "key8": "LiMAgvhpPaBLwqoo3twuLKFnyB5pqZfoURV3htZ18RDBb7SLcj3iHBpbupQWgHSeMZqQBJA47C64DVUZLiAEFQ8",
  "key9": "48RhDogUUV6TYB2a7ynF7qLr5D3HNA9efEe5KY73Vt3eEGxF4vzBCqHStMjTUXTJwAmEDhp1yK4tUw59pfkFWYrE",
  "key10": "66pwYjgBEpPkfjogUEmowQKmJTXLX4FWT7NZSyr5BaJX3HSeTsZ2ABqAa6zcX8vxWF2q6MopZZy4om23gEzGdDzL",
  "key11": "3BvWm6dgd8WRhvU6FVf5EPWNpXdP6awNpeuXLht3N9o8zcM8bSpue7J3Yy6KGhHq62pb8437jUFtG9hiaRYuzXU5",
  "key12": "2XM8vsR4mS7K5oQkBr47YQm9UkMqaNm5JTpNeDkXvpdeuoCXmQpJ9reHCEvu42TvdQ5zZ3XE35GvWkint2X3ungA",
  "key13": "oEhcfMsGWjKgJN8Ueo9JuJz4gHhv3fAonbxEdUDKZvWwqMnebnMNEC5VFEJxk7oxBfyPL79C9uGixHbsnJvcrQ5",
  "key14": "3J8nUdTaHBgh3GNscyg42te2rZvYga6SDw4zsHxtDMoJWTdeoZ9gACBMC2xuT5dHj5LhqvtEbi22wNEEkNxBMrkG",
  "key15": "2iJYbmZU4eWYJEeDtivaEaVgGjdnbqC8SKjscaCKiHJyvEa2uvV2daS2iLfpWgYqRbvTXToX1rJtMX3KsWi2BBg9",
  "key16": "59bCm7rTtk81qYobDZh78ZQuFAVZz67uCkvBPe5xiEkYcsXPKyidgbnb11FBZUfdBv9phEx994LhQp3u7pwvCVW",
  "key17": "4VHGsRrzfjcvJVjqEmhtZM6URjhkGNBoFeW8DsbC5geJJcqTkiD4nDnXRxzCuEvTM86SnnYxs46B5JfjTDnJKoXe",
  "key18": "awQyg2oninzYnJbtPMa3xRcdXmGUSFWbxMkKFhC8FyFF2Q8Lum8eJKLUkYD6fAaBdKhuCKezzFsfgGoL5x2APGT",
  "key19": "3TRsm5bwBiGy8XLuZEsJBQVC8NKj67n1nkUSc1pD38UoEBo3an1CbVgZnLtNs1U3BsC4dECmokUhQdFUEWPZejea",
  "key20": "668A5mUbb2dkap9QsQpyf5FnYkKePRXaAK8ADAzadkMLN8HNjcu35dZ5aJ3NRBUJoSJhGXtXsG6pLpPSync35xkg",
  "key21": "2XdkQFFHQGbv4AkMsjCdCmzyu7uXF4haMGAuWSmufxPicmQrmYXo6Z3LsakJndLPt8RmM15PAXTwgvqFhG2GRyny",
  "key22": "4cNUSnMXC3CFkQQDwj1jhijGhU9V7LNFXgBQJccmRhJn6mX8rqhvKV2wKoSfko1c3BC4TaDuZ7mRyEN5NGWF7p3q",
  "key23": "5Lykt329KJrqDCXcv9aXGms2eEQYzvA6tPTjfD7KzDctBzzeVu9u6oMCuoMAdWwqwo7tVS4pwqzpUMScBjGowRuW",
  "key24": "3FDFg5Ly7iGt6HcTHTfun73p39Fqsq2oTnfYVJ5VmEFYDr4G2BVGHgLiayyG4V3hSSR3kC7Tf27g7MtRxPjLqLsP",
  "key25": "2jYs8MyvbYVWsYpySue2dYvX9c7bchc57oDLwXw5QZNZKCHd3HrB898t9aNBm3S7HyCF1Pb88NbcJyYnfB32V3Uv",
  "key26": "zYEcNoCQzpw7Zp6Mr7MmDx44K1TzDZpjTtrCwGBNSQhhkfvp8aAiCucBVQfFEe4H6GYMSNMFVVmnuf8D12aZosW",
  "key27": "2ug8fGLPv8NHDTg6QiR3ZkyfZ4a9CyihxLZmrzgUejoHgmX2eVdguAVLdebC8TC5TzxkeWvpNpq1vubYu89THG4F",
  "key28": "AKbatUf5yFBRm1z1nb35w8PYg3ag6UUeFiHKiRG64bUPSrLiJERmTJWHRmGUrwGEd4t5c6S42m1czEc8xTqDfFQ",
  "key29": "N9u7bMfk2H1qQTxQnVa1T9ruXnLvE979ETQSXzbaAJbJt3MYdEGUuYvsuLW5e6fev4vKT9cA6MAHxKSZkC3HT8q"
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
