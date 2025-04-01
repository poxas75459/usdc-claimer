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
    "4VLb5zAL1EzknjybNoM4n46MuEMo76FdCSJpMgX5ScUHXz1UD6zj7uErJFArVwbixy4ZyFW2vtmBU9RM1ZmJXcVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zzaeFFSVmeak3Q43kymc4A88D4ckr7ow736vq3PFjSnKZh6j8ixjFyvAaLWGAvzowmpwjYuP947p8meBRuvcjZL",
  "key1": "34TAkgcwxCaNxc7u3gZdxWRPtXLe5nWFSXbZLEs9ijsD2sDUa9tgM2Sp4jS8HBPsSbPjiJFKR48VktUAUXEsDFw1",
  "key2": "5e8x1GtLnnr6tm9AtBbs372Gf4m5f7ed4TkN4Z1GWFKMqwLxb6i7to64b6wnxwrzC2BxD9DCFE4ohzVBDRDH6kLf",
  "key3": "3De8YB3mUjVtVrex4LuXAJtReyXP5ECdfxDGz4R4QvUFy59f5FH8DUNL2TzP9gQ1B7uEWcvNz1Y1eopAPuWJhSDy",
  "key4": "45SHMX1s44VHQzXmvJ2nvhCY4x6paDsUmZ2XzRBdsoPYKn7EchdiQjKJabh1Zuysk9bnvB6ViN4aGaSpZ3LAaSbE",
  "key5": "HixFyDTUX25FBJP3C2fbyZ63d5cLn2pXBLYpJtSMvp6Gdi85jF2X3wqX44fMnpChQAB3xe9AC2k3QnjHuerkLx9",
  "key6": "2ep6CPWFq47TeoySAuPZYgGwMwiNGZNQ7XMjqLACwoSD3pfERZ1KF2tpcNuPJyqcSiPhBfjaNDhAxPFuh2tvxsuV",
  "key7": "45zmzXiewmEfU1bA1Rwg6DVbPTbyQ6Rqwy87zsBJva7ufCWsb58DLXGip8H1KCZiVhGTraUJuay1WMiHwWxtqRLu",
  "key8": "2PnUavwA7RnGzArHjNZx1tSndcz6evHT446gLgrrfjLH4gRwTZYJyV4MaFoiQYcrqF4sabon1CmtYfmqKeH3igUu",
  "key9": "3JHSUmGEJezgHKKndVRZAw6yfMJXSY78usydN3kcvS6UKJYtobeH2YJeHBuj2LmkhP2P28u4XSEqAsbaMEtWvrrV",
  "key10": "4TYNdtpd37EHGiGa1iwoqqG4pFdeZsWMLjPdvM8iKo1gZShQGUBXLwh8QXHcVFiNSENcCqDQRs4QmwkfeH9gkXaE",
  "key11": "457NmhB3L5ja4DA5FKHYCKLg7k6eV9brVSmQoERYdvng22XwetbyBPZBuZEmLVcd36K4RWWDMX6e2iUsPacnAVrs",
  "key12": "3i32PYNHs7mm1ob5WZWmvCmNhGEAiDFGibJjipS6ogPugdqVuwQu9Bi69rt7P1RVsLngCWHLjqZqBL7YnQgnKo8C",
  "key13": "66v56Qg5uMfcrbErnB2fzHGAFBhfnpSXVuDVZKgHubBhEtWmAFnak5ee9fm1kDR4EL1dRrZifBepVfCTcyCDak2z",
  "key14": "4BtvMS5E5SyEYfx8ViokPbjsaPt5Q8wtdSJBhv7rQ9ovD3VzTHq5JjA8PuJRQKFNJwDVRgjHLzUgJpcaDCA6CkBK",
  "key15": "3rZmJzpN7gvReDvKtJXWDXJbptRSoufKdgY63k5eJvM4tmP7pvHVq6SCguizikxtduNWzpyi7SyN7VTwFrsJ6gn8",
  "key16": "3UdmfhKNxCcB3ori7WxJpdxCYYyhvKZCrpKEqdLSgDqhyhm9Vwyiozt1BZSiYcTPyZD1p4qnXsCS4ecCkBgnszHE",
  "key17": "4vVg33KWQdV82AdrY5oHimUALR4Y3e4CpBvCNWG4m1qAdaBpwP4M78BejQMoqCvE22mCaG3MBJbe9dKdk6pTT3FL",
  "key18": "2f3SMh3qz8JAcesf4xtARQXULpt6VwH73NsYi83D7B7H28mviuQ3yatpn4yyAFvYa6zu7roCtjSZhv4zJqfgTdNp",
  "key19": "5KqJukYqvhm57BTUeBQj9EDaUaeJ1rEMgig3EbiXhWNiXsaA5P6oeSxuvLMh6uzgH3BEDGsWNxDbcGNtjYNoXUTT",
  "key20": "445wj6qdKt6nrV2t3SvwVHNsZv9pWZim8EYuxc31NawkBssCUt6x46B5kBcgRs8VSnyTT7zLeJd6zzbHECwfsGsm",
  "key21": "2uw8bdVEqggnLXvuorWv3isjmcPhgdQvazBGPpNwjiRZruUBL1meHrFiaxZyU7rht1vWYiLobcaeZh4uMUHXWXm3",
  "key22": "BUXRA7PkVr3pwW3vA6G17TDe7qsSZMKEDS7mKKSB6FdBmCp85C9cbosNNiJdxSNMwiwfyagJXAvnaWLhkgrknMg",
  "key23": "dkebJ1aGQ6WBgvFtUQbAjjytsa58yqki5AQqN5P9dFKPnrXcpESbpGgL1b3z5LHTTyZ1w1vq1akNVaLJs2ZD8Ct",
  "key24": "3JMTZYN1hUXAoDYFjuFmuQk1es6Vvfu2hr77Gzp2cdrqtVM7dL6Bj2YoYgxkAjny9PGx7iLVWk3Y2i4rAHFuGTNH",
  "key25": "3woFYX6kAhb48wCmaWJbTedJPrnbfyFjyy7reLtX5uw5ZnGR1PA4WEqB2cMhrzTAEhvRqFVZaxJeqfvuGWKF8Un3",
  "key26": "2MYa3MVscN83aSstEmrj7enoPYZBYXEgfdsuiyVmioeT2rA6bBTnNymLpwYZzH9EnJY715QaWapZMR82Hof2AvWs",
  "key27": "33htRjWobLHL61XsEsYMnUSyHpDhRYctH1cboMAdknqt4PnJ4FrTTiAMxSm4oCBpwZtDDwL4xM816deaLQuiWcHD",
  "key28": "2Kmp4c95CZp72HQwomZFpinPfxGX5CAE5Zz6TLzSLaGD9frR8uLJ3V1BALhcE3pzg486AQeogXKSR9VQWwgusjEv",
  "key29": "4XFJrhKuiuJtTfLNjn7g3CSnbYV8CC2FKcYCV1SRs5k6WnjhnFfYnCSugcBzdvtN8PxxiZ7anaZVBfB77a2TdqSV"
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
