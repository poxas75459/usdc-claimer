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
    "tEDUPJTXSbJPYorWHRbJvWA5apV29dBUanLdEViV1QSEfGTgvKB6uFL3zoFmUs3NNJR8fd5x3iuaVqLpz1oKQkx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gqCMG7FEhLfLNQmExratF5Z97WaphWMZDjwDNCyU8pwa9aWX5iiw6hdDrqnP17Xo9D3KoYqVzx8KVDCVoGhSXai",
  "key1": "2kT5S4UTyDHHBevQqthy6dj7khqSreAPQMdGKVBRiaPyCrGaSCejJwFTQ3DP3UVeRGA4ci7PXJequ1tRzNsQ9B3S",
  "key2": "5r8krdvwEE2HzcFkG9FbwGu8HhjZPii2DSJzpzW7qyftaNHi9NhUyG3xkhGa2zXq2gHZ3hoAekUPZHn1aF79sn4n",
  "key3": "3c9EHDTv1v5erva9EnPBtgeytTBNwvUsp5haRAnjpFANeGnksj2VzEze3T22kGoUY1RxKiJqqv1powKozmycTm4y",
  "key4": "4yyX6MaJjDNcUAUooAb2tM4PQaNrZc5G3c1A2r2dDmLq1YKLD5p5hKdBqtFx4V7AAjMa16sPr4Ly8DhEhwSGSXtn",
  "key5": "2VtgcBKyrLcLSwkxHHGTSirGCRxaKXxpShMVLmT4aMA75mDS5WJJBSx3499NsFmAhs2x6bpsTd11keMwtV6n4GnH",
  "key6": "3mdBhgAAcqwy6hNGtt8JdJhxeFkGhGa3s8z7D7hhiFEdGJFWT7gg43DAamsdBJQ5ysQxYv6P7DaiVUNN58osY6Tc",
  "key7": "uiVeiYqwzMqqcyT516LwHSbmVbHPE2Z9pWnRksJwJ8mCXqRXECBjSyF4RfSgPkQ33hvX1M6RUwZQ5o8HaDqCL1f",
  "key8": "21z5C12oP1FuuthFTgV5mPcyu2i2fnfRAAXQQfiZaQgJtcnmNj2KR7L2LvKPXT9ok8J16NHnJmNTNqZGQ71nib1N",
  "key9": "4sA9PpFp5CfWy2T2JRWP1o8yCCkMEqESAmUyaiSKtfcYRvLgbbpoa8hVGJpuXyxuNJG62EQvPVsDUS3BpFvmVjkD",
  "key10": "2n5Tm55P2qoZ5dQJ4f8XegSjJqHrBKAaC6Yk4Upfm26qC7DWHnxBmCbq6YZpcYJPMbZ8aq46yyXmrxk8FfNjPt4M",
  "key11": "33GVzezJRjnRzjXxVgx2q8LeHvg1QMTwMtDkJCngqWb3k3ZV9f1i2Fhuu6bNNrQV4AFVAd1ccRTHJ4CUis4UwGCG",
  "key12": "3QAbSoiZdSN6nZctfh82oaZMeb7WR8bvTsopTtShEzgBdwot7W94gddsRqnptbvEYtnuhFHh5BVS5DmyFtNjkdTv",
  "key13": "2Aj6CZSGcJBU9MEHXzQE9C2Lyrbzk8CkCNpHsDPjCdqQqtffuAtttoVB7Qa76BoENivZemkLfYBc8QkjWVpYt6kZ",
  "key14": "cSbvaeB6YaLi5LicHMvsX2H6CSA7buPH9NjoLbn9yF4amRGHBTmXVid6MviCHdphCHcPwXkw1pbDHxxwgRM6McJ",
  "key15": "5o6awaZYBk14HGvKRgyQ8dwF6ZzVgEMvAZUmfE2ksZGDGsHAsALTxbHgdckFYPAnkPeAUd7ChWXkHkax3rAorJvn",
  "key16": "5P6XoFqKtGP888ifpBg1gvN3Qsmm6bekJrzJZ1ZUEvSpZFsnFf1AA73roPZDZPbQFTGYrhGTPmMaMeKsy76rcfuK",
  "key17": "38xC95v1DizceGbho9Rfz4hkJCwb8j6kqzW6hrpdyHk15Kg1mgJJc3SE6rfwewCnGo24C7CEcAYvQPMv77CE47RC",
  "key18": "xL5L73iDCUZi1WWrGr1F22r2SmXp3nZJu9761XXX6moJW48UaMJE1PetRwMUZFyhE3rwvorjbzEbtYkUAkfUa8J",
  "key19": "2qS8gHZ3Z2fesWuAG1nvuXuEfGWSMmwrYt86maXNzKtnsKnRRd7J7QyDYLgpXqtffzS8y5nmxapeZzSSFmXLnRrt",
  "key20": "3ChgnCFVjeth24ZDYa78qEFV1jeiqYM7us6UY3SGeTS7rjfFiJ2AX9CCfwDTdSA73gqQ7LhUWwse9waiVFZ23Xs3",
  "key21": "3EzdmreJmgam18ZqQWbJeMfx91C6sHy8PahsDr7VmxCsobxhywfBoAhgPzskYfqLowttaSbwdmJvLASZ9iiVNWy9",
  "key22": "TM4sbJydkLGULjURh7wPKCekK6uRkvrcFPZtu6gqdVPZZeB4kUsoa9ytmbbjPYQWCQgcjmwGDTLQzBoSJWfxEtu",
  "key23": "5mMn3kJ2FMGygprDtomivw58hQdyLNGb5SZLfQB5Qz5coBB2bgsJvG4J1NwC5DDGyAcJvgHVgFN8Lfi68Btx2kuJ",
  "key24": "46rHmMXdRkEjWFWqCfeB7tS4ipoRQ8KCmGMxtYxc1bi1KgoYboyfAGeiCKmKEHRwRiLT2U2LPT5BvoT4cke86aqL",
  "key25": "64ujeyuAXPRkiNzSNdWUziNXH5YSnyYzcnEM6qU9vKRiBSkH2wWyyGurooC4SLmnjA1Za1dBY3VAjwre8h5iqBLC",
  "key26": "2HRf54exbDMWTvirLXTpq6Z8XEPZtRZZX7JcUZd54xnWYCupKbCLjwtZszBGxuYrKQbha7DfgeLcCHar5ghhVLda",
  "key27": "46ZYwEfbvU9AhfPpA3DFgBKvEVED321JM3zEPWNSy12qudaLXsxZcDi3WDRQU2VprXtHsJPh9VXHMK1RkCb7zF4C"
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
