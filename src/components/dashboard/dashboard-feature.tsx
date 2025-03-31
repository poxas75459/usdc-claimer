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
    "5ur8zSoq8wJec9hvNgTtHaNeYu2PfrabS6KaXqE1zbtABywedkANjkeBm8N1u6Y5sQD4CzwgKGgD9RzaGxF5Rh3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MVYdKgU6Aj9DyATnoWLP6VFEKrrz5mRrTiG3ts4fLUH1LaHbR4fMghV9EoMBmfkvabhbxaTU9zfJ7CD3gVSvuz1",
  "key1": "MYMUVdEhs5aiyHaUyEQG3DXxfDgKAVTWzGA72hH7QV57xwL7FPXft45JD52wwhAJ1LbcerSRrqdEAhhhW1rzdfV",
  "key2": "5FHL3uSafnhTAvFCDThhGzzYaS1vAmpnDBXk2Gg8enM4ULqNc2xHvNq8cYybLSTK2do2opKA2419YbatXYGnZfbj",
  "key3": "4hHCALsg82xd94a45U4ftnrXbrMm7U7DZSa4d1xwAzBpyPG4ZXhNBhVWTLQ1t5Ms7J6sdTGHuSj7M6faBrmqGqFu",
  "key4": "41wtCBAXnRh8iJN6DShMKN477tcb3zpSzy37VYDnJgRmY8aUxnP4p1X53uLg4saEaS2MXGULE5jWiDpgTiwtc8jA",
  "key5": "5hXqtNwmcSJtZrA7rDiLwonhGzz9qdJczgUYfMiHjNNajTYRC6m7LJDJj34XSpNk4s4Aaif9jY8V1CRqNiKo8DkU",
  "key6": "52VDnxgggWXLqoUQfDkLCVcHHfyCxNpiHSDUrYjZXBVvwtUamXd6sUQ52687hyFcK8ky3Pfj7aJ7W3VB6HrH2ori",
  "key7": "3EYubCAJESn2Cami9wc7YyCBmHyPqbiFj4GVpEX9JUcHZUtYRunvMkRWerjXyJzGAP99pHCftvco967cP8ygQq3U",
  "key8": "5nkgGV169ycUKPxpTgf2fs5enYSmuCfJcL8cDUMirkM7kfZgRUdkaNTSH3RmprsqVeLnqkH8GVXrRrH1pUMskM73",
  "key9": "4CYxpfJiqrn9mNBhFE2jTLDYsrVsdXJm7H2nVpWY9NicYR969CW3fZRvHbwyoJDCczH4XqgEafSvSRip7PG9j86W",
  "key10": "5YoBVsEpaMaMPhUjCLu7o4GUSpECSnWDhF6j5kP5DsHu18KrVzfszrrPuEbGHbcbD6rvXoQ5xwRxPei5vwiUhbGW",
  "key11": "41RgBxzpFfe78pD5uWrBx9WbZFczvax96rkFwatmmsgB92FQu2WJzMo7hqsWGJiXK7PdHyqbAM2cJgxVRhLwu5FB",
  "key12": "tbCKPdYQXqbyq43oqheU9udjX92xUtVgfCeanfiAeLdrdceTPVqujMXKS36HkXj4UsuG5BCqtwtZXZDC7KJR19m",
  "key13": "2nx2j8wVCyFoHpaWPfYW62gBRUY4qCwuiaRSCzBM2tudcdHoCy5GLsT6kqpRSHPyMrFxnckBvuzxdXrtwTPtt358",
  "key14": "yJWaFDmronnV9ZNNoHqSymZvbnBkognGDFBdJ5cQio8oozMCcUNbawRuccV5Tj9q5xjpx1wpKKVGd7rPLejUcFE",
  "key15": "61CtnzX4mSinWnnJ5wseUuVcHaQAUR1YnzSeaWNxaSE59VRrmvd93rSpymKcU9e29rLwdicJdmvDVB1TPYj95E6o",
  "key16": "53EJmXYsHQZGRi8gfW7pTUYfvTbRMyg1B3TwjL4ggaXPg6pRRWqgjKHPyD6mWkZuUDvFBCDxNwRHZGX1o4w9oe3b",
  "key17": "2xMocAzpEQkypR8ySGsJwET8eCr1nZCRiGMK8ipN8WGaCLCsTAVcVtEFkrAjGiJZWosTi1rDm5CCGT7xvpwUWEM2",
  "key18": "5UPobMmdAVWJtNGivRXGZr4SJfHXpCyf3skyiJfGUCoUKSvATRyUMuC4W8i5QxUHYwYhZVuc5zFXecLdxrDfyHkA",
  "key19": "3r8S4rWKJGU9Q8S67hiupYvobrDXnP63h8V6J2c5bB4QeQCDGPb92UYYskX16Xk3eKa81KLhEavpdZo13cz7AdZT",
  "key20": "2KKZdESy8qPnYCY1Hxvg2wftTCTRx6vEXJtbYM8Pj99gmXeUzNc8RcYT82biH9wh42hUv1TDkBMcsy12FsCNU5wF",
  "key21": "2G95bUrfpdyForZdddZHvheJcgDVQMzHiVfHQSz69uBTaR1bNxp4zai5KqrEZntNrFkeTPngjCn293dPTnSnLJ2r",
  "key22": "sqQkhKTeie4a4w26ytrsYD5cPuEDbV5TdFQqPv2dhukNr2NRUXmFYrPBjhpT2YMitGfBwHxMK76J2LvRSWwhVem",
  "key23": "4fBeSJxwnGh6ALyoeLk6K4gQafanKeCErFgDYaDQqWi95oia7S3RyxJqJAcFfnHHgyMpUJwcJtvzous7PFqjZYG7",
  "key24": "3zHVUDaVWVjhufVGUPy8VfA49aCYw99oCmZTaUoBcicYxx1xLARJyqaFHGixZpjbdeG7X8SkA7pxkBaQqQSyMncV",
  "key25": "5VFtsRxy9v2giiewrBHGRNddHbhw38LS1AsSkidFaPNGrASngosXqbLmeT1N8cj2bFKgeDL9oUbGScRUA5Wc3pV"
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
