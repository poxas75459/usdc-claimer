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
    "38CzVPDSG7DbAuhhLtbZvYCBL2Rv3TEU8UJCrLY69xRJzTN3hsoNGuu5MCSoqWL7L1FvY8AwNRyboNPWKEQE4nBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MemEjYpLPjbsWeFocXZ48bHk7wVyfHTei6tL3hbVAeLNHnq6EXYz7Qk2TrhZ3oawC1Zv4saTpbrw97kBoKR2Loj",
  "key1": "BYSXTE2kg4uot9qger9YkiEupuDJfzTetLhcFU3GzvdDLnKyKtK8b21oqjfMNdaKjmwDnNZLwa4mzFHzeR9mYRD",
  "key2": "45p3UbYy2erq2582ktb1BL6w1H2QpWtvhiJzrc5c32KnqHQuNJD2DbxYhm5yfBoDaAcqhqoEfnbAZooH3DwHpmRE",
  "key3": "fDPax71FJNZBGrEzNvGQHWLvNqKdHgnxaEWaKmAtapGAVu6hjossy43aspKeyMmhXvK14MuRCQDfKtaAnwJ41HN",
  "key4": "N7ud6GPq7qCQjYAvbAi1piHkUNwcEZTNvyYispY6D7GyEXrZBn9vLEfj3vhFV4qAkisZPxDyKJ3KixuX6PfNNKv",
  "key5": "2twMMX6wdvTLP5GUBEBmG44BvrXXwRhTghTavzzVLctJbZNEQgs3rDJPLAETXpkmUbG6VJ1U4nppHvRfLzGTHrwb",
  "key6": "M154QmmZAHR4gbzqFvomxw1NVTdxcXQ6jTVAzeqNM3BD8TiX6zVZjyHJLVT39t8uk3uUZmiE9ZR6vZrwpZNFbHU",
  "key7": "2LPqcqtqf9qi2HJoXN7bzcJniV5qjLKqtCVi4fs4JuVPCoCJd6n3oUUtsinxezfPUKJ6Fy54hNcrGTX18zi9UR1o",
  "key8": "tZmzkhp14KgsAzTHuR1K9SQy2j3N4eKH5d1wxz2d7NoE5YCoeuSWnwDUPqoEhbwwF1RvwFd1Uiz5pay8L2yrGq8",
  "key9": "4ehaYWhuoqCuuWv2rS7Bc5ce5GcxihNbU4CyzGAMF9CDppAwyGRfjkAV3fnSWszzs8DjSZJTjhCdWv8poUzeiSdw",
  "key10": "611ywrw67DRNbUKuRPjr4hWtdm34QUsFz5qtxfU9RMaHKmrxDM3gSgHTrHbpULTBScJsGr4evqgrvzpyXa6ErtLA",
  "key11": "549764S5ab7TJMF9inQKNskHsEyS8iNukwYPFLHgiKrfoQWraJgAzD8Qcfcb9WpfHBkuADWHMzrZ3zbsoZUBaMmi",
  "key12": "5PzPcKjrytCm4MUjf76TwidQzXFQaUXkXMJnxuCkxAJujYJyye7vBKFdv257LX2ExcoFPfbV6hwWqZ83EeDeqkdt",
  "key13": "2S3yjNs1WS3ASk9EfjevLLSESRafGv8zJquDg2HvuW94NRw5gGcYsSUiGjgE7ptBaryY9PAQgBZ5G4gKBCfSUXi9",
  "key14": "4wNKRLWybz9tyAukFC1Ywdrs5ZhYbaRre5geUDRv98UvB2MFscacDgsWGy3cwWFyZJHkPfcbFsBEUeSdchA3DVVp",
  "key15": "5iVGJ1nyysp4MuoUkrhmwGn1VEWmjBYi7cZfW3CXjV175ArY9NjmLe2YSdycc9mSdcGhv4VwTstKrRi4axepA5Ju",
  "key16": "5h9w8k1ZWoDen2g8MF8Mhp6kJAVwo7nzg1CHvdfP3hjdtv161vu5jT4NgFZmaXLpX6QpAB5wrvc8ZVagyQa6TqvJ",
  "key17": "pX9B45bEntEkUs5qJCChUwwRRd2HxoKcYcwRyLbDCebHgD3J6pTriLAXcQLk1eJhhhhoZhcLPQvcVakV2bxXAqd",
  "key18": "4Q5RFK4Z3GkxzP8B1vrAJ6f7jif8jNQBHyuLptZSS4jD2X5zrmdejZazhwt7Kg84WXdu4QxVKJPd7ta8UdvVcVbY",
  "key19": "667zHtoMyfoUDwtQxSMUhrAN3XexLxkVpeP6ELp2FhoYH3pFTsiqk1jox2JPLL6WLVSVKs77dpQFzvi5EtriZnuj",
  "key20": "X4SNUCfkEqeZKSVUNWTpHZqU3GugRQkCpUGgDTo2NwWcQ8VutGFLNdJnbV4YR9kTA2a8i5RZVrJaoLAh64b9dDb",
  "key21": "3KFGCta3oorxscWfZepU7oUqi5CyyFtGxGTK1BYhvtdLttdd8N1JzSuvyNQ8LUwkMdZBK7gWnoJaL1JBhd2851bB",
  "key22": "4pGJd8pwxWGZqVeMTGN2i6prpT6uqpgosZ6XcHpneiaLsSCgJonL3dvXirM33aCZQp9GtjWph3jZyERmWjajTP2D",
  "key23": "aDmjjaX5sfUNRWit3Vsk6TK6RftbisDCpG3uHtNxC5Ej7u6M3bNGW3M4wKfypvxcACDXXE3sp8Z4qminUNjiYdV",
  "key24": "EbNnf1cn5UryDVNGahFtbUb7kCDaWer6uVWtFvbaQnhB9vH2Dd9xHydkPhezNNxEH8AeYaRM1ystwprDcKaKBsv"
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
