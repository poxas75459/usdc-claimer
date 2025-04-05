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
    "4D4oCj2WN2ae5FPTo2zTz4uLnn5vkXuxv4VVwboZzqoV4EKj15XxygKTDZYVvodZjzz4wPPg4LkZbacpS3AMSn6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SWoymbHRF9u9zAfY9MGwpDWzEKqj94fn8GHmccGFj2RsCTuinH9EN9RcFbjjLgZSVmhB3ETMmYH4faf52tR4YPq",
  "key1": "49z5dNN3h8tvEa1fPzExo36pFHPKEWke8FNoN6cGSdHn9Rss7Rz5caCM8rnbJtTAj6xZDi4n3oTLjxVprWGW9TrX",
  "key2": "4WmnETCe6uqiX5hkjPKK4BMoC6KP68f5Sq2XTBiwo8a6PN6VQyfqmpqvjVDke3JEikkoAhKPZsYD53aSwZJzCYZb",
  "key3": "2mJdhTu9fHvYtZyHedv2XnL6JQyaSSsTsp5FAYA53Pm8NzXMmReAuf3VPQdDsFHykX67AxUjPAg5rjGMWJjjMBQX",
  "key4": "4tvUAcTpkYP3shvgYaTsqr3R31fswtNY3ouSaRTo7zDwyBePGnAYb2HT4cdPUsihj3q7wtr4Ys31fZmZ2CdofRGa",
  "key5": "mzjAMTL78C3TuEE1Bz2yjQHyD2LSHkET1YycMh8vUV1RzY9uMheVdEtWk6zFramEKg1R8UXt7EFGD1tfkV177YD",
  "key6": "3PBWPYWNprQnV5kC1YnUdWKmCKngmCZyKk2Q72Ror7QpXHwywtNd7iHKcGg4Cmasf2BcuGoRZBcCkkuV86xakQDP",
  "key7": "2wpMWe1oAobC8BNo9NWEbARLo7KkDAbj4WiwinZVheQGFKrMv1tpCseRCg86JL2ks4VNjvgFcwuCr3D6cyyuJMm",
  "key8": "3Hzqi5Y5m9Ybfy7EzoPfhKW3j4hkpthA1b9HVaZ3VcNY2fBVrW4DzuPTYwnJxeRaxdSRUEXp7arHD96CBGmpnSdF",
  "key9": "5aFadYhDF6NPch7hcupkbXtDSQisMKgcwoFKFutKKA6GMJpMDeNmYALh9HxBACjt1F2T79sZnF25BWLdgRpJNicP",
  "key10": "4sWqiHmwhvgsCpipKPjLDeewRtqUYxra8wc9tp4qzke6St7vmrfRdQo8178ruV53DCYoTx2xbKNgVtzZdNmfMYzD",
  "key11": "33oJqPighXKW3Tqbr2Pf574mK8WNRVGEEFetarC7xtCMNUkCYGdRbZWUdjkTSoYRB3eAjbQU38eXy6teomxYEcUH",
  "key12": "586udq5sSHr3rv2wkjWUoGQgYXa1hUS6P8fQFNc7rq5yTJT3Pi6vrZ8b3FPNCfos6nNaZk61cmybhLtNf9h17ZS7",
  "key13": "3AVfce6ck42UWjgAuLdgHmgmFqfk3jS2u3jnxGvDuNSQoUfBK3pdvM1uByuhorkyTDq54Qnh2eFUeUJ7p8dFcNHe",
  "key14": "4YkH2beiqNDeKVufLDqrw4q9Tev97nq2MMNBoKYUSYGM8EKt2cs6yQ3cU8koaeJsQiTxQ28dZhfJwEQauG2mEfb4",
  "key15": "jh9VbHbsLwSqTWvsFXRrjpjXzTmUtZmukEpuz8pqKFHhbLgHSq6PNYBEHnzbSgSBMxQ1k2KLxgsjDiCQ1oAxLzV",
  "key16": "3Z4y8UZ2TU275nokzJAWmHDgcUjQpZSzCJjwcrA8fkYisXsq5bytpnbSqCENFFaiXV8JwiqEgx4va5tky1up7qTC",
  "key17": "591fe11wQhWymjdxGueXwsTkuAvniSn3Qch2U4GpmVuPZy67fteSW91tuZF68KYoihgtogbDCkmvbi1XATK4DNt6",
  "key18": "4uLAxjfquLsAA6NV8evaDQ5gCJTm3y67bQAq456EhTqdMMrPohECUEu9bxzrFWybiAyBgA4e7wNoVbmFvoePztLN",
  "key19": "fnJF8NgF4HqqvntgNpsGiL39JSroYTVxbJnzfTzKjrU2BN4jZNPgsk3QGdWuzGZHdEHrXSf1Qpm5wTfmgxTzKav",
  "key20": "4nYJKYHykts6xRyPmtn85oiJ4SHdFCZPVp4ChDeAncpzHd7vkGkf13gpaPMKXJXuRUedpfN1ogRoxeUWpJ9dY3nt",
  "key21": "4QTdyGucvdrkddqtXzpSAogu7jYSspZN62jbVLWTjVdTj86PfphqBAZuJ5btD8NRJVFov5J2vSbGCZm2uihfm9Yk",
  "key22": "66h5DrkMnmfdJDKE4xnqcSVh8s2dQsGR6N2RUA5rPXnvZwkNpNCdmmESRhYH1Z8Bjh2qVEKFQk4MXZPWGwqigNpg",
  "key23": "4iov5RzD5FxrCdkmSBKPsjeiQYeUGjbPSiMGF3U2qB49qAgGkkfGD5VNyR9A4J7Sfxqw1zKsqXvs3WBLXUXhgXE",
  "key24": "3eS3GMeM93t4fbjn8G62hXN3F7SLRhpnS4kPxTazJva7S9bUSRiP2boye1DN6Wo5bTQPP4Zd5o3wyTDV4oHquSng"
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
