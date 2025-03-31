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
    "2LnT3X4KPbunqyY4yR2s8LRiG2knx7fgcUGEftZrWtuiY4jeKPBuNdosfzXUYAQedFiu2VrTCkFAsW2wnZSN9Xzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39xDo6Tsh3scpcYKwWp7FForwizvfP1pisQYbagqsyKcAZBLfJLoebNdagtfuGUC2JbECB8Eze54EUJfTWkoFBVM",
  "key1": "39PAMDwZKurGoQ5r1KpdaNk6DeJpkkxfLzv3jRQvR1c33oTZ7YjSp9CjrSkrF62Yt2UbwXoiK6VdnPgNz1tzALa",
  "key2": "3qnPCeGGZ6bEejuGPuPUR53yKQBRT3wyqempDJHmjjSqRZF6Q2GCDLH8mS54jGM9i57pmkvb7Py5TqwotZ96cGuX",
  "key3": "65cFkLRuXMbK24FGQCYE4rykcft4zM2HsxLmsTYNTP4jSt8dGWxGZ8dPYyPCjwhEDKZgj69Q9xTXpM7GvvXi8DvQ",
  "key4": "w1LtdNo8y7uUqQ6CFFxEcH9kjVba6BNXjJyyQ4Zyj3uawmFPBM1WTkHnkd5NnXzmpCjkCYncYXhk3EehxiM7kL6",
  "key5": "5y2DQY13x81u1Awk6HFMdy7m25PTvDBApcnmzSbX3RL6PPsmodqGWsLN6PcuxC6sVBkaGfi9F5QE5HFs4vfm41tT",
  "key6": "5VLyvi5xRfpKxi9gnfo3w2rcJ8G6cUzm7MkYUS7R4Mw3F1EFQbZrSQDR8hg7HPehaSUBTKLn2hin4o4JiWuV37rw",
  "key7": "5XdpPAnvfkAw6EXNxnSvmNwXXMWKFuZaGMRL65Y5k5Abqr9ZrD2XQ61tZxvZSB2CgB7yTegVZDbbfWBHq5BXFbNi",
  "key8": "5SmSmYbXTfVEEExCf34SG2YGEresBW1TZSuFWdXQVntV7nfpgbec8fRQBeUyq3czycqWhrpZEqxfXGGWutduwJoN",
  "key9": "3vBmhAMBfbJyPQjkr5pAbmH13QjULL4wVx13mfZJrTvWtkB6efK84VjN7PHdaPfKFYwXoGM6TxUjdET1k9vU4kJX",
  "key10": "31fsiqVPqUKjNbpuBe5Vq3AEQJEkDWGx7Kr4DJVmU9CE3fQ1f8EAg5rNTeLBpaCNCCvtSpVAVZG7zMVNitG7ho6Z",
  "key11": "4WKeWRToPtdLESWvFzRPYFuK29cSwqtoSEbWQoYWY3vcmsLYdtSYPpVPDspx7k6a1wWUAc22nywV6JUrisSLzGdG",
  "key12": "2GwzXmCz8Vi7C5PGG7oQjMrvChGnFS7tJyavZE7oeD4k32zkuoAETYCcLjaYUjenDhjBJXbHCPHx4a4txYziPSaU",
  "key13": "48VT2rAcDE5UXSMzMSexNvD4Ng9pBr198suoLAbxmbFjD6HdqgVPpxZNBtG39NcKvc7ueZNnZCRwVKVxoV5dFnBg",
  "key14": "3n1VCWntDbwok3uZu69a8yRTzAe9Z8ZaVE4Ka9Fg6F1h3J851R474PgYoe5LXDBPUxYQSfSaoQjfpdy1Z2fUZcoW",
  "key15": "2PK8qr8gDqV6K377EvmfqbJNA1u9heR16D3thQcAq7EMx4Ma9XddS3SCqjFC8KSpR2Z3wNw4hm9i3sNMjqutgXYK",
  "key16": "4ehCe46zNfHuGg3YoSaYUs4ETAVmUBVrX4hw4dyYQqK4ysQk123K9Hg6G34d7s6ZmFSgbcwBsQGNFeS4FUNFmoGc",
  "key17": "4wFGup5fNzpdNGgzbsYZmr5rNTspYzchnZoSK9KaszwJn5LHWb1Ne755M7Rr7zmyrRVj7Lr32GvQiMbJB7FrNLd6",
  "key18": "Ro8Xq1hHJz5LSZr7FVHgKWNZhk8v2VsQS4ywxVK3KRRdYU9FNqX55t41nNPemrqFnHFr3ucUxEYsb2KGkv57e4K",
  "key19": "2CVB6v9SExsCGXhN5gxAW4tC1bCrB9utFPtG1QYiQcmHAAQ1bpAxQbYyrmGNLWyZetipWduiiZhdkhXeyy8b55RP",
  "key20": "4DTQgq8ThHFtxhybecEPuLCVAA9N1toDQVgRNHBVuCUhXYJLvvcZnDYCwEdG4o3bcrciLUrogZpJbqjKQVKpXXr4",
  "key21": "2WU9K2f7eYytBfFmKkRycEoBg3yNpUvHBnrPnv618muA5y5Bu89xjaEEMkQY9hcbjYsvhFjHpuj2Pn6X7Z35QKHH",
  "key22": "3cGc58tvtzfkUptNe2xvnQUNrQwfYWaBeLqCSAxgNK7HQopKeD4RQDPH7scUmnTvvutWxfs363v6tqAQEjZPELWg",
  "key23": "664qrpD8AfrxsXvM1MQKChdGL77cwuLbEmyTcwa4bu2TCCFt3Wb3WooTiCroevQP6qtTk8R3FVhksSnQbwWDJn4F",
  "key24": "5XsgEBFNvS1HCYwuWKeuw3YbSqXWaRdyihxYvwbHv3nvX9MVnPgd1EXy65mzhpCk26MKLEMcr4d8McmzKFXV2gTZ",
  "key25": "SrZdj3ybNkawzqDhTCKgQRTNjSkcJHC7Bviwijsu1jJoV45W7APXxFnWZUxf7YTCx4fuLTLX97UPBPBGRd7a9Ux"
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
