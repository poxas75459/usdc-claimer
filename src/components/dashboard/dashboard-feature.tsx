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
    "5QLuqrQGyRXJTJWe8AqXUCe3NL3iaAvwm5ePpz8LkBrdwhWtSbWMm2VMQ1iz6LjaVmpH4jSHywDc2iGyYKC2AsAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xyz1XzxVHXPKryCegqbR9wGWhKWZyJGPj9a4xhysEBFpvx1bwNTD4RXVjiRXGpDcg3aKtVmRzZfva27kKRLsoL4",
  "key1": "5rqUxf1BZHTTsYR2Y2JTtqNqpAykVW4jFDMyU8zyXubv2JbKfaFt347AZAeDsrPn3wbMVCTa1wDmvcupY9F8zoVT",
  "key2": "5wkZ4bfDpK64zb23GLBE87S2mCf7iV5b3k7dDRYcDgsxqW191SLXuP5MvAbNUsSJuezg6tiz6ZwXThpHFBGeeMmM",
  "key3": "5w8JAeEJFtqdyCyGAujgdsRJNLvKb9Cug7kyBT6UMvikBkUtDPyxsGWTzyU4sQdGNT9aRFHecoJpXEVC61njARN4",
  "key4": "5tpdmBsHXKXDTLWKj1WQjsCrbd9SyAJDvNDryspUUwZ8Pwei1qnrD74kweQkshtrt1vYENiZkxqVwdmF5F1k98E2",
  "key5": "2NwSspnpznkZdhcmi8Bne4pL7sTKYg6rUUaXmrDooQQHQjWZQmpA8Ra3W4Rgr7M36o7nFcZfx12DaMeP3tn4Stjo",
  "key6": "JRBug8nz3hNK6FpSGnEa1f9NkSv1DBGbmpGHvGFXHi571t8SWD3bD5krGWMSEGsuZVtcsgzT1DG1gzGZTuwZXXD",
  "key7": "fE2r5L8BARDzHC6ajxW1AWuyic1pcWhm4qdxcJoUabFvFSvfsytoeE2wT26myu5xai2u5bGV896u8bEhSpHwNXN",
  "key8": "4XB2FUXwTtNzUAwZHY6edCmw2MbJG6iGP4hVcD3oBBNMSqdrBDhCBbRU1G4dpYjKLnifrZxnfbbuapTcXEusKPKo",
  "key9": "3artJgcwor1aPJDm1wGqiHGbaEo9zP7X6WqPcukSJp3sAGRMrw6MpuULuJ5ZfyS5QTZYGwRDE9HaCc1x7N9ZJsXM",
  "key10": "5QEMHMSREHnuSYk2X127Jh9ZTHjBE6ZkfKNFv66XSDRzwxgSi7vnsxZjbA83Vm4P6aajDAUjDxa8dTsjFDpk4C2S",
  "key11": "3Dins6d3awFwXW3ZJnxnSJhnUEg441oqsfTVY9aR7E7rKygGraGhnPrmrxaRtr41hXctCVtABxrwWwpGr53gfqmK",
  "key12": "49nGsteivmXExdnge4gWZHrDFgkU2WiwviFoCCB23LUz7zJz3GmTirTi9yRWkxUmBdNNA4DhMR9NPW6Pw67oJULe",
  "key13": "2mY3LrLdUXvU1RxDRrFEKZBcsAdHvW2hq7ebfb5GnUdBqGoJGcomTHVNnXvAonrpmCC3ey6CBFYxUdRw2n5GUbZm",
  "key14": "LEQdYQjajSrhkktQTwwVkku8fDs7Ed6EYdLjeHZKsnUitRcXR56xXd4toGpSJeg4udPa5Vu8MPD8xuV4FmsCuBE",
  "key15": "CcDFgBpcGpEKUTyddJRN8wX9g9YDvXVdU7ikWX3XQ8h7i8Rmv2QFhoz3oTjTjwgXDryX8pw25Z5JFvB7CwBCER5",
  "key16": "VDFGpW4fQSvzNaUcgRjKS6P7u2nmWEfNs3wThGtvbkdLmyfugPuDS8PQZUNJTt4XNK3TF5j56GSzd5GsWpQfGqP",
  "key17": "4wrGyf6JHzjJiagsJ9A8mkK9987qFy7HQKGeMuWPmFMwBcvYRJEoRnzAY7S6pkU1QCokgHeqxdhEe4H9ahbw9tSj",
  "key18": "kWKAtqnNzWUsPZTYBWhUr9eBbHK3i6UdYWiY96WaFvGvvjvJUgTeuGsS6V2rhuj4nPZyCRpyF2HGakFJWDGTqth",
  "key19": "45HJjVGhiGtvw57m37e7Eo5y6i6xd9JyGeBx4BCzXePFbhCn3Qkq7ZP9u75MbULrzuCnb3VN3hiqDqP7PtVPdfea",
  "key20": "5hch6h6TSsgqSQXCn6P6irTqi8sDZc3D7JozuA4HU3Xst72rNgMYHbZyBztAzDy8TKQA7vYBoRkcb7LH7NwF7wkk",
  "key21": "53z8GkUp4wVTUAkFhMZZWXppwvxMm4F44PJjumYhmuzTZb3LowYZWuKLUpmeXFXiqrLqNGM7E4661Wta3csM29dd",
  "key22": "5EZosAo4kqGbh1aAYqrvj27uCdRJAiXC98vjNX7Lkm1a87QkVCkvUvrtt2XHJ4nALkQJwRiYnvneg93ioajHDJS",
  "key23": "2A6CceHDwTG7F56NoectzMSUEzyG8421DrrYNWUadTLhvPdQH8iLVbTFshFSWf289GowncrEKpvzW7BAMmULHfBv",
  "key24": "4cZH1Gr64eHtte8s989juA8xebNZG2SzUy3hSkPPEs8etX35fmAGtsoG7M9rZmTxKXxFnC3x9dLzW3utzLaqt1CF",
  "key25": "4kNsvprSW4Wo6JmEi7sgeCne9DsP6Ss1Q68VcuQmTNCGnTJVxWsRxHCw7wG7GEzfQc3wFwNxzRDtAdUP5KtghbJ3",
  "key26": "PNEBBohVN3kDeUDR1VMgGQxv6rXqC53JpPP4TTontoS8MqvJgjzbLEtd7SsYwzSGN356gbQgmihCdxzTsXDSk3V"
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
