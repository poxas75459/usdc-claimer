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
    "JU3yJJ5svcLk4kc3wFuHLArsqVs8ozD7yaGEC1xMNjAbCHkbgVpMuDvgFYM6naZB4vUc2njQxe5pWVbzYiVMks5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JTgBpm1W587tFChSy8ztU4Y9igS9v3FZUa2wEodN9SX33UxcqHuUvGX1cM7oDaB3BHH2o9p6vcxdaGAFbivHhrC",
  "key1": "iPm64yqiZ2dWXdVpMx59kZb3x9JvMgi3LtCnacqW9A5WkXvnw2uESRQLeps81jVkUXpxyHNg1pVaQvNUVdrzb3J",
  "key2": "4jDw1mhNMM4XnHLAEhESXrqTJKbDRMAEcLTK2pW5YYRH6nknq2dhahex6y1mGiWv9tZToubwCD5NZtkixQRbY3Xo",
  "key3": "5KZhe2t6uw7micxZtkrsW53h563Ttifb3VQPJRZTFSDoHW4yC2S9nXcWmUHxDAWgPxeFLVGvZ97Gf6jDA2YWZaq2",
  "key4": "zSNA9xPyVjAjvzubVcwULzJpZKNktAG3QFzs4tRQn4WcgbdysNmov9FNzjidpbQeMNh3qK9jTDbBPW2r6kiBeio",
  "key5": "45EbkGqey9LMCwGmoAbxWB72r8Qj3aqdbdrotbHyJ5S32Wwehe9PjwCoqU6N8PKhEu1fwtq9L1fnEJhGo81y8b7T",
  "key6": "3RmdJSauzPNaNmJjRZq25e6erAnAdoYmvXXHUJuDECtf45yD1FiQwJDhkmyzPjjKQqBum4W3NML9M22kBM7LBEta",
  "key7": "NYoWN8mvWV4GhQNyTN4M3bfX1pNybidSoTCUCtcmNBZDAdtSF6MDqjKHrFzvJEKYGSU7c2qpBjHhmuEU1Q3UQnJ",
  "key8": "2mfRgn8ixGzk163qjpS81R3PmQLT1tZUDRRZXK6GGZYGCDiGnUinWidWPgZQqPQg6zy7M8uLWTAPeLhz2oKqrco9",
  "key9": "2PEWuEuMfXU2rY7dSvWLGFqSfDFeJ9hv5PD1nwxh6B8AD5XLnfrfBY26chr8tcaxcqWKvevXiuPc3QLU77uqjzeo",
  "key10": "2QcNsRvrLQSCPdtbCWsXoiBTNXj8YWjoDjDvpzMNZ9sTkopcxR7egBuRECRdTBUu2NWx9WVH71Lq5pXrCg3SFmNp",
  "key11": "HarXycJ837obMBAhPDiArWxuWdi2HdkFZX1xg7JzNnW1UQpQREUVnPX1mmU3zX7o6EwNeSkExGQHfWKNJ5rPMsr",
  "key12": "3LZ8YrsA1Fav4kea4DaAnTaZwmTwKqc7enfPDThjENjDCWaMGVsjAacdwQ3rzHZ8RAHPMoJMuxnUXpweabzGEevL",
  "key13": "43wNzNzeujhSgxBGGu3dWLm4As37VbVRiQDDfnoK7bzctkbKjCahR49v9vgnqz6RSfW1ppqRVPhd3bZZmoet79v7",
  "key14": "5s5GdV9Hj1sKkwoFnwwsgwnWAQBmYJRcGKYrrPW17ymHCeUqwC9k2A9jiB1BzLmepqMPVNkLJmjqStXoZZwrKr9t",
  "key15": "3jCL4RHtdCafLZ7J7y6KJ7q4EBW6xaF7mgMjf13shNrsXVBjq9hAwLh5VoUiRRtWQTCrgF8r2bUQFvtpDLcQg1Ph",
  "key16": "47MrDNQBciD5Td8NHaQYyNTF5D27c173gAtANmsF2b6FarNMEEceZ1CakypdTo61Fsv1xFhP2gUD3SEt4V3eBAZC",
  "key17": "4PZoXihnzkZaK4XA8dmXh2iBFYg7Yy11ww53NL7v6AmPpdsKebELydABBw5Wqw4jphzWaXgzodg9EDBYZerKjnEi",
  "key18": "4LD8m5QQZPPeuwMemRne8rvwmpn523fyobX1yWZnnwWYcdz77Y1MC7ifwU4NMH5SKv6LHZpGztZQHpVTYdiKEMPY",
  "key19": "GtHLWqier1SWN83fUCQAJQfBQ3RvimAgphgfUQr26GJyhkswy1sTQpwkhE8LbgLhRyxMAXAf4CgSvWayJPqA121",
  "key20": "39AFB6nAdao6LUbPgsmFuzDQRk4dxf234Jqkn1RHnsBGPr3ojpi9xQffehdx5AhcaxKgxVx1VnxNZiZ7WYFuA4VZ",
  "key21": "S4EcVjkLHWGTBEDwUPGorEj4SBEVL9QsJpLrmTgannSPXrXfrGWA4SoXSrBZ1qHvd6TASB9YduBjHCfKjmBZ2C1",
  "key22": "2UW673uELJExvSx5TQYuxffNAkv4a7sND6ubgyogjtdz7rDxCuQEjeDwfwGNdvpsfdHYvdrtWREsgkDUm96ppN4c",
  "key23": "5qX5eXMtZwTGhvt3eG9LYRSL1ddEcbmi8LfJ93VX1jAFe3qP9ixHXk3wf2jXpoRduydqjNS9bSnU7C1UCSJ1gvo8",
  "key24": "eD8QPRkxytYxcpbSaXtRzHP4KzmZo7KV4N1xzBc18JRNwDLiLK46m6PiWrKVCyrE5vCZicH3yTR5ZFhPXEg2aFX",
  "key25": "2jzKx2cBoXUs8crUpdsTe92KfXetJfrT5UxMZgAew9UToLpV9asCU6zzTjUrRXrBgCJnmKCohkVvSxbsNzod8KxA",
  "key26": "5ASDX8yUZQR8x2y1vAE3eWbH9gaVyNBw4FoUUh3YTxZ2q1yd1Pwciz2fkNwP7NiPm2t8G7ELtw9dyZSSh7BWfZrA",
  "key27": "3ysLqY8aU6AhFD3NzBKoo1x9GiZyLpR9ZgQAWq9EMHwv1Pk8XwHeKDrgV3gb1VHyebyMGrqy1nsXyzXczvnbSS8G",
  "key28": "3ukWyp3Ju2NSw4fEFauTq64t1u1L9cdXx4QTPmBT3Lem9gApbE63pPtMS6bwz3ggD3Y5NTTVE37fordxwuKrjtdh",
  "key29": "5xr21pA1doLNe8wCTpKxur6c4kaHui1hBF2sL9fzhrbJvMHxz1F93xCvCykDB2sBdAuEe9qC4nVLzmkRWgAfJKVb",
  "key30": "4aTJx2wKMLZwttBiK4QbVFXayRVG9TY58DxAJKahbpTeJ9oEUpcp9iqCGXbLAm6zks1TdCS775KB6YCX87GCBeqH",
  "key31": "4bSo5RnX6Je2uXg9e7ySJEyyBJZReiNo2eYfZYyiwEuzjHhQtZgFs9MmEzxZRAE6iqDCBB3WrW12ftD2rG5Xek2D",
  "key32": "42hVhu6Yv7Z5PvnUJhUjz2FshsBZYnNmByMb4x4oKqKdjWPep7chAHMXxUAHpCX7HSsjtvE5MbBRzJyWr78at1JT"
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
