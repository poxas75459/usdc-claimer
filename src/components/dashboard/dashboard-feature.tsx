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
    "fQwKjMKt8uqUMdZR1Bmw5vmN3dnpZqU9mxPsbSWN2x566C7UuQcvZvcEmunbAg8ck6d8cTAGZ3RHCdAa2XV5w5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vx6oEotow8QnmNcnQvwxaP2tCoL9VELVSZg4sxV3QvZya8ffXLrKtK85Y3PHA6kJTC61WZ9ZkoTRXT1cANWzh4L",
  "key1": "3vBq24ZtC6dgvNUSam1TdHSV9U29dZaaNwQNcw3JWKgLhhRnWZejMWmY3gP6G18gx1ZgMDDPEpbQMVZNe8AmvdTu",
  "key2": "5y29RGQYwvmtA1gs4DJsEPik6NrRcoJWUK2krdJxvWEPcyQ5swws4UVJRjLBoBeXHefeJxvSeFMbCtEz6L5SoNqA",
  "key3": "5zhFL1hU8nkc4WS3GTSi3E52uoWQ4rFfEmkYLpY3SedWxwaZwHDVLrbddXk8NjeEkfxwRZVfJ1hbxcG1ziT8vd3a",
  "key4": "2HjFzmqKXVurQCgj5jKG2Nmv3tpwCfkms7d3XDc6HCjiQR8nDyG6ayz7BQZWaVQJh2h2sFbtVMa7quKgyArBTBgk",
  "key5": "3E6unJkuKynFUjTErunjugzTbtHy1UMyvzaZiw15KsfkAyP5YdFgeoi7EX4RPUQsRLBeby9X2Xw7csZSREzFFFDP",
  "key6": "5XUVrE8MBKmfHQ5Az58ATJ4DV3dHHwypmonZ6rAW4xpeBRWpE8GycUE6gdT64rkuJxf521W5ysNW4F2cHA628JaP",
  "key7": "57b9zXgXPmk7oG11N2x76ECeJ2UiBRUpCR2UNfbe2NV9M9dv8EK5PZMCHnTAy1rPwKL2go5jeunVvEDerGcoWEUm",
  "key8": "39qhonh8zm9utaAJNBsTSDyr55s5QLRbQEhLJJ4TJZP47TUoed152KLkY9U66fSkVTVQnXrcpsHcCavAxGZog1cG",
  "key9": "613Mtmnvv3fQEXEfKTibJNMyohnniieKMtMMs6kkLbaNqcdxLuqEKGNFUZCAbnUzEm899RLxK9RwVbHr2nnMisiv",
  "key10": "3Cbq6Zh1nGyjRvFDk5rVr1eGwY9D9wDXtpKr8SorUNYGjfZ5CA8mu92CXQUbiwJUcWxjzyQigqEtFM49ZPjKQq4T",
  "key11": "ihn97N6Z4ZvTM1RjFToAoYxTpFNyLRTcZ1KgpWeDVLfRkS3yfd7Wg5geLnvSAn8psSJt6NsqvSwi3VDLFcgRiui",
  "key12": "9eDimzD2vWmd3YXBs7yiVPAbR85nGeCaknW3roojhENBnaTjBGZiywC2GTnBHU2srdrSwz3Ntm1gswwuXPj7bMu",
  "key13": "3dMVu2KpDkkgH85eBtPMi6ke1D8upxeuLxwGJawEkKuaQDoV5GMWUqvRJGWygK8QQehHvxvDWosBTdbUSd1JFLZZ",
  "key14": "4kJLZSQtFfF84ngDy8uGzXuXeG9y65eSSM5ayg1UAD94UWNSgMbkUTFEks2Y4pnpSzMihMvhUbF1LJzzFYHGvf83",
  "key15": "4iS1Mv1XrATk8YfQ9oFJW4LQUFQRJskT3fzEinkHywC1qv6keUsCgnephrkmLMeKswPUWLmVhGwZMM2oq6uC9M9x",
  "key16": "3UGhLWi138aQPsBCwhwKrLWKNqMk9ZCngBEpGDwChr3QhnJ1F8hDq8oPEixArttn2kwXzzWuXTk7hckfmx2Be8jU",
  "key17": "3szZXpW29FqYRNhCSDyoEcWLRw2EjK1F8d5WK3o84qE1yEfeVfmPfchetSppkeWvrovm8BM9tYjx6GXyaqbY82cX",
  "key18": "5d7jswA1fdaDUpFv5NdHmjKxhjXngHKTNx2JrrQMdj1pBFy4imSxsWv4ERw2XJa7LDNk8Qt653zmmNhT7fu9vFJA",
  "key19": "m4xbFKDas1EKpcHyuAK3DByqZydvtWj5SbULwD8Tv92VQXaj8jUpH7Z4kuA1vY8mDADkHgVodNVRDb4GR1mPQFw",
  "key20": "BJNRqgD6mBAdZiTnC1buyG3gL9KJCmxb2e9wtnBZUCXVSfYzr875NCfYDGByfkZLro15kyx9sbjJ1ej5AWtB1F5",
  "key21": "2iLmX5VCH8SvsB5y8tC51U31N6a24jFGS9z2JWbvz1q9ibjWXh9t1fAoqzSqGDmQn9wYaL6SVEamjRVznbnW9cUs",
  "key22": "4mLcF8f9SCuAgbjQoog2Mdh6iJqrN5QCbE7DB7rGRqBMtehJ89qHr8BCXqNzukVD93w726maLKzuiM5n7uinZkSA",
  "key23": "3WffQ4AGEFxipZXCAzK6ntN9XxM8sUJKfG9B7Z6SLDgqpAmDrX1gXLscqfqjwcxrRnE2LcKtiWCwfCwMhZK8Bjcn",
  "key24": "5GfPMLvQAyQCAZFikPX3qN4symCpgumZoHeQMJvP5JXmYVVrmL6Z3W1UKJhkaiHvJLBdES1CXFaSwasp63cQ6YhZ",
  "key25": "3xKQhWeFxHZUrQyarXjX6jEJKJPLaQsUFtdV7ACy8rskyVxeusATqTYFiHzMY7c3JipAeXNn6cVC5qSiRBBNrUnG",
  "key26": "5YcWth6YNxguMG4WKdK3mgYFqKTNNWSmwvAvhC7vQvEFUuWJ2mBFAeHDBRZVNTvX1wSFdKzMXtYTMJe1VjyWZ3Zy",
  "key27": "4Zd7dz1Q6jJNYrcbqH6nZLXymGFHzZgmcAMQr1dtakY7dfTN6pbEyLgivWnwPz8vY9C3cwuRaKBYhvUep4dAsRnn",
  "key28": "GbUKzDzieZyU9jMZV5aN7MJQbfCAVJWNs8JE8cSZa2iahVSLgW9v9zMLZJPa5FhoVTwa6u7EMd2Jk6N9WSqdsmU",
  "key29": "4nDZYsWUBKi9rQdNihUR4pzQx9r7X9oUyJPqQQBpEpm1HsUqgjwvVxLFfonBUyn14YJf8yC53PkfjhmFb2nFCww9",
  "key30": "biikvqQrPwK4fPLNbkdqB9QUbFrXgqV6pCdNzFCqMsJmk6vEUzK7jiMcTiQuTmEvoQvQPEk98gkvWnrCg7mzF2P",
  "key31": "4QAJ5ueuF947jXGh6cCifEd82Szn2ovuU6FjidWgRkjobtT4BcX75KtDQsskZc6Hs7tJoUjDyFuzCsYmTpDpH8GH",
  "key32": "27kqf9fEXDV7aPMk1edSpw5VSwV79udm7ofktn2AeVmraQuwK7diRG5wye3DCwjSyVyHDwvGgYGudJpNxqHpZr9t",
  "key33": "3anAf2TFS72vHpNRk9wvFPRKgpmTv1Yq7UKdr7r2s2QHG5HHWq1djnYxnqwTbtw46XWposdtLGTA9z6uHeU8AUvg",
  "key34": "22A8ZhG5DjHNRj91RsDW2kX8rqwa93Bnr42Z5r3Ge6mMT8bRzPHQvSjRMABSpKJNSr8P1Bwxs7wGqyWKyYznWRFc",
  "key35": "2oifChHJDuGiXbzmgA6WWNrWDxEWmnKh8prDk8D3f54ksubw1wqebCWZvURr7oUVumuczxiPY7y9LH2UwVjim2vM",
  "key36": "3dzLJQcHTVcwq5QNGCyptyrqMwALg1tbdFyBB2xXivNNE4F6qcCEZsRDwErVQZ8U31Y2cHDwDp24dbrTzGtSmUTQ"
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
