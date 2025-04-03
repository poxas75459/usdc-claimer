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
    "49afx7pcLknmi1kHcRYBs37QDT1mSzpVQeo2dzt7Z2uQqSACjbdEagmpLMEGVx86fRFxHoxXkkMzxDeN4uMRsAB8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WhZBHm21sbUrpR42yxEjRnXJXide4SdWVQEgNjwYCFReLRr2kzEFN3RzvMXzK3i9iQyr11t8qgNwGZPw6DXXgDV",
  "key1": "7XGoWd18sQ7e8Sc5gph16jGC3me5WGBXz65erffg1rYvceP6zBBFLNEBF1H86ReNjErw2kxFjwyU1AKa9WTi1Tj",
  "key2": "2zL5QArH8KojCfKovWCDuvZXfLfNPEcgR8P6HBBM1w61z4mMUxusyyv4AgKf2YSZsekLfNmbrVXvpY67XYJQRfwr",
  "key3": "VVXtTgEHUvuxrHZMundWiTKUj3rGtJRHf9NeNpPeUJjin4fJexc3uaF283q27cdKTjKJdEEkVU8Qv9RJBpH4M1r",
  "key4": "51kNaudEJXvcKbZDW85hq8aRdtqZrwqiy6c9tpoRGjceSNGUqN9sBVVrtM2kB2uDsArL5G2zsbiSPivsnW8m2TrT",
  "key5": "7vVCu9DTsioUoTzMEPSwQjCe5f86q1jYEH4fVkpaARL17KwS2F99rx99ka4fX6rg2VLMZQvHFga8WnqmiEbtY3D",
  "key6": "2c91RieHcxrzb4MKdNNg917HRQVq9vR4azsfNG3pqagiF3WNxXquLzTVDCLxUfzSJDe9Kjj6C2fpTEEpXwgpdpQQ",
  "key7": "5DgkDfTndJvQYFDQ5fZafZ5YJ2DWTnVT8PniyCkwWZBDV9NcqyYBEqQou9nonZWN9EK7ExX6eMpKKSJZkiAWcUDt",
  "key8": "2U4PpPvPVkrgnEEwUM6agLfMiM3HUgMxkfaCgB5ju2gGXkYy5N1UhWP9XYdqfSz5UV9xj8LVAyRf67tYgR7ZtgXG",
  "key9": "5HM5cjSRNjUaYRxucsAGZtAL17J8sjw3TcubUT2rqAApVUeHQe9Ex6MuqcRPnDHKTW5XTFXZWQrvyQRU3UYir2a4",
  "key10": "435gCiQgCnkiHb5rUNYNF71jffdUTJhPQ2bNXeJuj12CwK14WrX5F1SUYyZatTE1XDseQxJDqqQe8FP5skahnUcw",
  "key11": "5mux6ZDn4K8D1icaCDL4ydLBMkbGH6EiEnmB3rfwrohG3L7x8x5wK4MNuAVy4Wn9BNtqPQTnoBsbHUz7ekM1FsVi",
  "key12": "2Su1wyQKkQ9tfgBUEmPPY9uyeQC4LD4htwJzRXZApG8Dp2wSNFLKtEDEDbm4Z3Y7onVesxPP1TKQEmdhuX21ogvx",
  "key13": "3NJQB5wWm8grpeHJ2SrTfXRhXiSa5suWwRrpWBBFzwgzcDWuxC7AWJ2nNx3vi8WbxfzFEqgaUNd1Uj3H5t1xHyyF",
  "key14": "37BxuHQKrJGWQvDbBYDZre2L9ubPKbjEGTrqBYLqjGLsH2exfG6x868xCTioYwhJbkKBe3KHoXY1DFfXi8LwFSCm",
  "key15": "e6ojj9WW7XLgoDdjdKZNwCGsCdzeXPuTZDURyBFVLXY4zfZCSRogXCQds9jnoc3gxoDFN3y4PfbRrqFQ1sFfSai",
  "key16": "3B2ZXaUsEp9TFR2gAC57qivhySZ4rmuaU19B4DnDjCYG9tF3YB6rjyRJYzBpXZhwgNkySjvdzkkNddFoQBdBLQqx",
  "key17": "23PFPgNXMUopVKWqDTfHyPg6WLPMXPEDUeA1Bi8oR39YBJUBCeufvC1uwJ3kXfKP69aLYaFKDvGVEmctx1PVeeTB",
  "key18": "28Jxje9wi9D8NZjxBKTa9H3eZvThVKh7v1JJLFKFrzFMaocdESS4gGyVUCJxRV25espcJevAyx3raAwbstrbeEcw",
  "key19": "pK3zpAes3MkVXZqHiRFnURqSqDdqWD6hLU8L4GPVn4GsyUuRcVjzsu188hLbWGRHYMmKVuzkZihs8BRk3cXZh5k",
  "key20": "29AJtCyv9ejzhUmUdGcehCEGff15iZfvMocyv3Re5SiWyH836BT2RtqGS7wDSNgP5X8bukGr85ndiwBeeZXiexky",
  "key21": "3wbxmKRWB8mLh6ePR8crMj2z3qBy6cjkP4kD3rRLN5JWGE2xTMSJi9s35fYjgAGD5xxq3ADm9Vko3E86oCvjS1NW",
  "key22": "3vhvMuB5zB8Qg9BNcSUyvFq92LfrnfBVv9sfBHJVoFJLVfxWwF1ha5dDPPR24V3GEdJQxLVyzvjx2BwAcQ2fjj4E",
  "key23": "2iNPokk5PdAXVmBqQx94a6fg8Jf7kRSyihAPuMY7w9yEkFmHYSS4iCvh5EWov2JGC6HkMY5ZcfmMmKahswd2Z33M",
  "key24": "3ygciweUav8Hb5pc4svwzLAubDaKagBFpzjke3QhFfsYJnEEN6WMtqNHS5dfyk7yGo9b4YsjytgeSkRoMb229xHu",
  "key25": "2kA2BrVfrznn8L6dKtucAsuJTBTGJ2ybc1phf3HBo1rcsQSHxHq6PmGzvJ713PJPXLdj84nUZPhjm7DpDXmLaCQq",
  "key26": "5j5pvqM6m1WCQJBt3xB8HVsiM5GyhRMSVszQi8D48rwqaSYWjZ66xd9cGneseraVioLfRSFMTgEnNTtLNoUM9nHK",
  "key27": "5A1bZUnZVi66zenu3tjxkucb1AY2t8JvjNDtCJb8ykDdVPVujmypLkku1z927ZqJkqcPEvqEbfjxaKU13awjajPw",
  "key28": "2dQLKPKvVR1zQWHtKVjyZiHKyZ6uQwHPG5PcWSY2wGQR738kWtgrFWT7WbaDdxUqhkckaBM9PncB3E8wu17PcyHn",
  "key29": "4P3gQsJiKhrKQxTk4KEewFdtV8zZ9iBataywGS15u7KwgStx77YzyAhcWpNt2WZQGDqMNkUyrhFB32guHUWQ2G7t"
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
