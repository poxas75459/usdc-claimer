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
    "5F4JQVYauEwiGP9Rz9eHTfVpVN6UshMRwuWh2YLiWpxDFdL9Foyzk4m5isNf9et1v6qDqbbPSkF8M3ZN8ZDyB7SY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SRtdNbRG1HDqS3VhSxFYpE5Dv1F5aBP8ch69aRES9bgYegjfH6PVFSf2fKZsqXKon8RVs65vdFurYuWG21U8Rn8",
  "key1": "2ygV6xn2JD2rh4vRyzd8uiLPeLwdvzMuSSYre6eXGepnBnidnHppZnPDFqZzXwcQ3Jh5ENspqofpzkxVGhiK9qyB",
  "key2": "5Q7Ka5qmRSscD2GaEyoX1X5RaSwbpr4Fr4xkP5TdZCqECySxoEPSGH117B49EMXNwwXYs3saeJGc98CMp1UUbB1N",
  "key3": "Ypa3EnJ7xPBLW7W1P56nxzCjkQpUQbWegA12vZFVtxbxD654fTr8tTJUCQLGtSMDFkCU1kHjmHgzFBCa7UGToAh",
  "key4": "57sTbg62fSJJ6zHA12VnC14SWR1m2zrpRdmtBZt6SZEimb6CDtPeBsfEoW578NnXZvGUjDdi8EvLqSW2QjFz5uRi",
  "key5": "4vngY1FxLKcQL1jqRWnLqS41aKSR732TcYexXXNpb6h9qJ76xHjFDihJUu3nKz78r8Tdwvham2QmUbKUqwMSyNFh",
  "key6": "3Rb6fZY5Lk3Xxm9N1cRJYFXFpEzXzkiEVX6tRJkzPHjpoJrMWE8tEqhzbZTkMT9B7EJqaTB6spCUT4CWQRZzFmdr",
  "key7": "2ztUqzRrn5bRvLAe6N5z9H5HjJ789Pd21M4iyLZudRh78dhsb2mCTWcKNci2WMjFJeJaMMxi9K6tG8tTppSB3m23",
  "key8": "2iQwDfmTg4BTLoWkuvrwzFT7GmhDZQdWRekfnfXEju14euGeuUYSViB1vGWm2CyA5aRb7rLAtqbvRAzVwcDzAACb",
  "key9": "3JfTpZwLLeTQvA1J2cgkeNTj4YivE543gt2xPUyxSj1R3WDev7xck8x4kBNJXen4KU1noDbkUn4aGxur3vBxupaC",
  "key10": "R2dnWdz1v1wr8osVsrFVx6CmdggPLGvrbkMYJZ3atkpjkLyz9qb4ozyqY3mXTfjYc22oJy3NS7piKnFFdJ8jdD1",
  "key11": "2WAQYveb3AoaCQEV8ZKDfKdoumsFmXkHMsFh5MYG5YNGMynmKXLfj9Q8NE6XrkfMS6xmGjpcGkCy75UZgXVzbxsE",
  "key12": "34qbTEtqB8zsSR5trgVGybLCAdCxvuVcwJLUpdpqaQ7mEXmGwQtKGsyhAizeq3aiffkh5HdZ18TrATu7XYMS5Qyy",
  "key13": "4j2PpfX1XoGfKTFgCHiCVzx6HEtxx6DnZtJa7byTQVqzpbtHSReVW1mbsdVLzas3tzTPMBRz6B69pZR8qNwT9jck",
  "key14": "4RY3AWdfPn5kf6NyhTUXbF5SBbuhFvPtk8CfvtNu4Y9guUTcxZ8BG4dNBjmaWr5Rp4F8koMAWA4MpgijLcRWb4eu",
  "key15": "3PREZYLHGpBNQWSoUeJ5SFEyGabuCxVLoCkj4vY3SDtjBBzKaDqAZRm58JfjAMzBvgDq7K69hV6PDa3XLBmcznjG",
  "key16": "qccwqYAhPoeSBjVRvUZ4fvXrcHm3agTwNdjwNFAtG6n95EsMYEm38fQJsfYMy1K8MC8oifXHzwouFVZv7Dsnfzu",
  "key17": "4oFM7cVLXPWqvkPgsuh5EsbRM75VY9HaTDL8nHbRxbKr6Nuc4pnWocE47MkuNtaZNMFWbBBBLkaXn3umhSemJ3jQ",
  "key18": "4ekcq6KsiycbWvX2Us38ni72Ti6tZn5C4qbGv9FWfHEWzmAKRXwvNpzdR7S3UnpdFigzG7Fb2HqBDBHFKt5VcgTv",
  "key19": "4RSeGQnoygggYsQBEuGmVGk2sDzTEMvzryhxyqvjvMSk2Mu76dEwcoLoE9QcPqAvjQN6wEdxaYR5sum6uYNHHZa2",
  "key20": "4aH3Pk32LKC6UT2vFNgLAB5y17232LKMxsUNJym8AQrKa4bisbb66Ef3MucQrRs5UfE6KT3btsgk5hhXWjL2Aysx",
  "key21": "2GtaGE7ddeb91gfLnx8mhy5nh7q7T2F9qBE7V8UMYqX6uBEAs6qcGcV4TB4NKqs1zjJJBAdDiNZmtYotMBCQ6Jny",
  "key22": "3PKwa6NCeSXtVMCmTf8kshAUYEzz4zGJq7WuvmDAti4Te9JGRH7qR2uab1XCerpikN8wegLLyZNvUMeGcPuGYQzP",
  "key23": "2PXPKvE6EnW3qBTFT91jspCkgkv8euNAF1xdWCeAyKhgBEpbTqc44LCTJ47E6tUei6whCiYi93DnGRhQkcjG7fva",
  "key24": "4AzLs4TGLQ99ePciopCYHv5jTFnUkgoo62yZskKi2F5N6PAozJQkY8cAwBhCwXe2CKNsDMnq2ZRENZfCGtwn1owS",
  "key25": "2uUW4m6mGr6nXVFwN9A3gk432D9gge7vteLRhky2wZ89C6oeYnt5ExXy5Kx4ii8UCu6d23ReQdpxehZfoHgCqDeA",
  "key26": "5m2eafBxrviemGKYJ2HmxEu37GqM4uoybw7q4LVA3ZJrP3VN1u9HmK1i7uoznHTZV5xwCZyays2BaoxrjRR24cc7",
  "key27": "3fBLDtBoVUkE6eNjH3aHBpk7WhGXt2et2v8p9NYK2VFWL5bj4QMWb9oB59Z4PKbcnf6bYGRLz1xqj4zSfNjXP5vH",
  "key28": "2XfyKKKnoPHW8WjJuj2u425pHSvRw5BmW1JnKhbNsFrLJDxfzDobGGDwbMpCUqJWaVViVLsiKGXJtQoQnT27weyT"
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
