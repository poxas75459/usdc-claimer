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
    "5bBMQzdHWnKVdTGVmJdnsoKnvdoQq3MsFbxaCmGBQirbh2PqsddgcPRpiG9amswS7f8kvZZbgtf74fej1PZ5QKGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g5cPiXpw9itFVLzxyz8Sg3gPvCMRxMKAL5HXmKBWnyvspYLPRexwhxNqywua5fMfieGiHtqhXJC44ecy6j9gzJR",
  "key1": "nTGwGk4L9GSjhXNT97y2DDWZjcbeErCFVXfNhAbBmF9k237eSan1L7orrtwDp6yen7g5B1W1Uma91aKbTMLHjax",
  "key2": "3erViwYcvrayyLFqN65hA43vsTwTumPHjASW9XKHJ4hXgbSMQwCeqg5VooTvL5VDh7n2fG7ZjYGQLJG5Rjz7VtGo",
  "key3": "bDZXW216mRxcD6tCeQC5SVnmfVXo3odzmVSzoJHGMsZFLTBDYPmb7yvRxRbqMy8uPVe9RhKDTjLPC56HguFXK8g",
  "key4": "67SaXuqLq4BvGcwXasUuLRJRnREDYgXTj5xKdnWyt3sM1QxefWETXHjPmi4FdwvmDtXomBfAgF1ZRuminapkJPd8",
  "key5": "3nrE18d5ZMG2KWaesayWy66Po5MsKepvkDE9FmNQWimmufHomMhUrBVKLy9mceTgSrzF5XM1DCHPp6H7BHopRD7q",
  "key6": "3jqTRb5w4pZvg7eZ1RJRz7bbCtUZDmCmceVujjaiWq82tf1T67LbJxHKGNyd9gnzyaTMUanXeoGCDK7TxmpzA61g",
  "key7": "57HXESmHacNrSeixNgxEoXjCQG1FmHMF3zbXcWL4K4CjZ64ppVHa7T5NZLCZFrpk9XJGPJ2XdzacvSdKbHutQ3Lp",
  "key8": "2GExcX9qVKn9B4P9UQUp5WVziUxGCZRvfKUQQL942kEWmBrugLkMpNH8A7HWp3bxWY9fB8RntXpDHCPL9T4KBnQH",
  "key9": "FQtsZXwxaBFdNCw5MF3n7J2sAkcZdjptpmNHcRpCCkSoByPyNcQxeNs3YQS4g6RaXbGQCHvvuzPqJixhVAPWXYB",
  "key10": "65Sg1c5Kj2USwGirWTW7Yu78iQA5xZvG4fFxUYcYeNULtJg5KZQhzwtawTHoudCatk4zRxLu2q5EBAudGvr1K9G4",
  "key11": "w5r7Qi3Y5isn9Mzi7TYphyXTS5dZvqjpEocVUH6XjVptDXFUGKqxA9sqaUSVfkvMpMbX4nMw5C1Y8DFVhvd7otn",
  "key12": "263wH4YD35LKMEW5Q6yK9heTqpnNJJnhnFfz4iSNhia4xHgmkX1PkJBqXT2BsyQ3Zp7hTkMqWHGRZZmtaUCo6oHr",
  "key13": "61wp1qBAMm3WT2tdCitVQUtPe52cEyaTtm7uDiwNji5WVKQ27cpVMMsrC9Y9dLoqtd7Q5XvGy3HuGySaf9Y1K5XX",
  "key14": "4aHASs6Fg6DWHUB6rPoP3HBQRQjBiLX9HbJrmzkEcHFx2Ej8wCjYMQo4gVcUvvCyXjzc6KqsKv7dgd6ZWCfiY1Gs",
  "key15": "2q7mWtwQaj38SERbsXL34CxFRCNTDogBu58r5R9vVwKRPujiYRKRTisYH26s1f81yPKxyBNd2kEm5yaqwmvk1spi",
  "key16": "3Vs6Y51Dha39e2cUUaNNh9aTFzWhKhBKaJ7NuBbfaqNmsahdDg7UX96RANB8o4FyDLJ7RnLUsu2YZW2rePtTkqjd",
  "key17": "43kzgo6ePemAAWfCGuxzCL9rY6p32BgbDwajWypLNYt1t1Z21QiaZPAoAj8CxXgyJvU5U2V4xDnTPURyvsapnBy5",
  "key18": "2eM2p7koMCG4rah5hwbDbbrucFR2nC9xHu3FQH49jmmu9qzFroJb2s8mr6Yhf6mWBL7Hb9cVi41958K7bSmAPmpj",
  "key19": "44QgRvQEnWxGcPPsMcZy8auFKVv2z5Z8dMoReYLVbcFSHYgg6qb2njZz2DwoJExa41QANucen48hQh6GL8yEFRzr",
  "key20": "5g55Ab3JyXQf8FDpmZVc2R6xWQoyAg83Ek1piWWN43Cprmv36Kc99KnBeS3LA2P5sVAWveixo7ExDsQyrB7uCvPa",
  "key21": "4tCkvq8Z7LbBuaFTueL63RtkD4ji8g2sBFSSVSbA8X4UeeMa8UD4Wv79A4BFtTtJvJSXDf9Jed369iwwgVow1rtD",
  "key22": "2f9yCbrs36gRbXfspgmvXABZzgB6pewvJJ7Kf9GXEUizoBQLjqpQDeGrK3fWpeS3HWfW1eqzq5T2aBBnNGcUxLD2",
  "key23": "3K7G7PXLoCo29WuVtk6XibmuyU7Tke86c3GdzVryCVCCqGXZaAvrcPMPVF9AZu4asppxGS86mVmyqVp8R5c6RKAy",
  "key24": "3iK8Si1d1WGQEKxpKqaYWWWAu9XKbpLu3oL1aiUhcuyFEYCWfnrqAjPygy6onpmm3KEqHcEKvPdwbWWjYR5dUA6U",
  "key25": "Tgqj24EwujYzNqCsReqc9A556RhVKyNMfRMBLtiDGXgsyNf4yRrt7ZzB66bSgbBmRcf7uxf95jwepRGX732K3cu",
  "key26": "5hZzQPpMdVrooxviyAVNzwLLBLW8SYj5NxiC4mP8JARiXivNFZBJodyHwkRZB4CxuzBQFGvj3S5H27gEmsdQcXTF",
  "key27": "3mEmJ2zkmsqqPEGfJqZ9qcQsspt7H4hU7T2zy6J254KjkmzAH1fG4RbDFPAx18ABYrakFcGveFphC8ATP57fRpVZ",
  "key28": "2X5FgqrxgWkesVYmZz24Xt2NvzmmdW8up2HgSYUk6qvyeRijvfBzeyhdtwfhkH3kaG7BZk1oYVvDrJBpbMeDHEfE",
  "key29": "2CvuXtLQyaNLgzGGgfCBZXCCY1EJV3hjqocEKRxmAJ99qEJgJJyJeKoEJi3jJNoSnhGL3DTa1amiVhexnadjsoSk",
  "key30": "2THRNs6mVjJzLAQ7gezNMXhu5sS2XYvCLvEhxudJcn7oJxhytAK8vpjFXGB7AoPrRbaHfM7mHGcLKAFpqibrwvJ5"
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
