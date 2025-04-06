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
    "4tCr1R3RA4e9jy8xXovUJ8BijJqcjVD6tZeeyNKpj63Yn6fMHUjB4bz2WVMNPQ7KGLbvJ24G5LQ7t94GHZ6a95DH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64h77FFD7XgBQcGJZn4mZYABWXMH6n74pAn17awrMFaPhq8PPQReC96MDgDeadeV6GCuD3YH1kKZ7FSyzGoYFMoz",
  "key1": "5BqMCcp6YwGDBEW97WS4aEtJGpQLCn8MMwvHWJZySy5iViK54oqWmWQXGwkLQLUL6wH9Q9e2MrU5E5D2e7uG21jN",
  "key2": "3qBFYW23GKa1UrM3x7oBN6mXy8dZBfDf8VecSkNhKfcVzV464u2xvE9impfmDkHKysVgSAA5LgF9TWGy5KvTee4z",
  "key3": "4HL3dDJXMeFJvq2EFSbvPJHhoz8pwt4YrjSMxtM79c6KdgeseyZbHHhLtfFtHZoBW5yuFpj2iF3VxZha13qW4i2b",
  "key4": "496frvxC42qVXyR9bBk4wUMByYGi1xj1Tu7SpmrGxToo4PjqtXrHvu2pUeh684cFoHesaavbgQKYhdaH47c6vpEw",
  "key5": "4DxFko9zDiEqQXR3xCXJ1mbfNLA1wRBjzZ573jeyEqkGwPUiUpcLq6WgJ7oTGqNPr6JE8vg7Jthw4qVEoBhysSL6",
  "key6": "5XnhPQpcG48x4GHfRB8gNcyVkw72wLquM2mhcBhLstMxFRh9sT22jiDKH9qFugxbakaoza5fzS77LTiCBSUyJfwN",
  "key7": "E5WJnHfCjYgBj7sg3yx5uAA7BzwWTVUD655VwMyMW8PGDTTZbtbgq51vtkWhetoPBg6aT4L7cRAyB2NyVobJ1NY",
  "key8": "GTFE73L2vzm8fg7obhggyoBBFgGybQ1WNtfFMuF2NTSQ22R1NRXCMgFhCY8ZdrjwPpde3pfqHB5eaG8BkuKbkkL",
  "key9": "3YtGKm5sdnvVJYGFVMYRXLqMgmBrbJzf5VXPTaqZMpvTgMmDyDUesrxAC6BRrKV4KzoDVcVznZzbd9dwigaEQJ1M",
  "key10": "5EMAAVXyJLPzjXBJT371busrF3iFEGdeAn43RiHdrwTvmYRpCsW4FRCJLJCYfxHhQWLXZLWSPnEMBW4mcWeKFcVi",
  "key11": "5tNJ1cSmJdNC4ajtsqufrE5T5BGmP1WkcnZ3MSiEPJsV5PPL7pRvJYDAPRaDvw5DguGSjSYPRYeEZU87v36ATXTN",
  "key12": "4X2gNPYMj6kmgEc5CMsJkesxtdb4ZeKLV3PxSfv7fQsXauXxi1YUwTQr3CYpZ1jGAFWoU7uUoo4iFuJaitb56AtH",
  "key13": "3oKmZRB297pv3gDev1L2UwNovJQUHKw2oNw2TmZHpy7jiAxVxWYGTyRjqNqhig6tjN9JA4MWtJa84FqHWp6nSM6H",
  "key14": "4ya2TWZboSWeeWFiRUEWwRUD8n8bntJsEZ73iv1GHWmP4GGowqyCnrpMrf9nV5McRtVPZPZDRZkBRG5H8PSYTUrP",
  "key15": "2fWiQdnJ2Up2JR6owiymkke9vLdm5JTYYDNqyv67ywiVQ1t9zypL2abCWVr62Dxyiv31TR9d1aepBiPG2NMn2vHK",
  "key16": "2fP6255d4smG6JUQkwmtHcS4BiLBR2bxbqMfKDiscPVGSsoR6gDF9428kwsnfWT3G1111FfsQt947PqV6fJwRWMh",
  "key17": "3FVjRsgPRi9rYRR7ShWsoePW5wt5Gn4K7TuYWzJE8ipGiqDk7bW74Zxj6bX2Uuve9pGmfWC2DtdaT7pXxXuceJmN",
  "key18": "5UwUfN3qVMgJx9HZCbEP2WrCm4bP2W9H1AgThYzJgz1n1wN3y5oygjBHyeDei2gCeSR4dp54yoKnZCdnyJD3iPvw",
  "key19": "5qvGjTBkMVg12q87ZRFWVEumWAEACuzGBK5oedB9i4W4TJ9pZDSZjDVwWkjzxssd1Pz3hSwC9oJnxdEGzxh3ZKuV",
  "key20": "26uWkGMakQi7ApEwDHqzZzJVWBaCY3g3z4SSPdpFKmiDG9BhBfpLhMZsTVaWmfG63FFYGZqxYPKPM3e7MERvyF82",
  "key21": "JqBzUcydoFri6PjVk9C36hBMaRGGzyx114BPdTopKt9rPC2gMipjPywGCsEjEL6ooRkBzYEed91jFrmDajCFoi8",
  "key22": "25JuAmcFRqXXTVGdn8vYMVm9R7Ud6rUY5VyMmsDbTSEmhdHEpFnrDEtSKTwz2bY9E1vzTVHQcw9dt8Mobjz2AHvx",
  "key23": "4EsTcNivc1fQ4Z8D9asYCzYH5kHyPuYM7LTebs6RmfYvsg9TaNGHiwkPdfLSK35Cz45vEWQDdYWbh4rzmBoWQpqA",
  "key24": "5WvJudeiNyLDRgWsygMFfsUEbomrxxUopRQa6HK6W9a4EeSqDozTAnUCzB1fqJz7KMuJThKt1fNGKoq8Ud5eNQY5",
  "key25": "48pDbio3s7vycVNHmRUMULuxtQkehYdScBhZDRNKim99Zs6TxcUHxM3KteCoRRz7euoRTo9pMKG8MgVEyoQnPVsY",
  "key26": "Zjrani9DMt4vU2JRaZUZViftKQ1hAZXb7Z2VbtmSd4utJQ3rDTibgCEuTw3r9buCeY17q97LAU5eMyFnY9mRNjr"
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
