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
    "4Rn8x9p7cYGhQ18fUQoRD4jguzKHbcKtqCWK3EqH4NQyRRjtwGxSTMhtNmB5ezVMLdnNGs1AWbqvqDt4VPsUko7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JjS2Ug7fHTtzCcpPeeNZRY3wDCoGX78aAi7uNR1JvkRcJaUqMFGaqcfpq3KUc1SAnbksGR8zLANUBXxZJ85BK8j",
  "key1": "4aQsiQ9V5DF58yDAQU5y2DmmTP3kapZAke8RZNVYPe7QmT7F8dZbwM9oLFom3fic5qpKABi9JutjQ7B1wsozKYHF",
  "key2": "5oYbvuqZux58hppNhp14sYR1y587o4Xhrx2kYg9xHQpWfKKToWLL7dnxoYndAxQmyxzk63dkjseV2GKPufoCWAeo",
  "key3": "3xKcqB1WZpoJ1cE9qJHt25ZFV9NDJA7AvrrnhuXqavuJvz5wcn64ym1GdNr41sDa1ETufy5dd7PATLmweCqKxDh3",
  "key4": "2VV3eMJ92iQ4bVVvLLUqT2ZgBBkaVeoVSgwwsWoikoK62evS4zLWyhButHV2iQbuUafxrCmHM4KWXZgdJCcZTGZC",
  "key5": "3vw3dwFAeET6L4XfnE5JTM2sau5LVuv1sBGqYAafei1ZVJAmDvP4KyrG1PssURfhS2f1nsDNeaErRKsxrFkxZPEj",
  "key6": "4BkeUKptHFYG1m4Mx9d1t2tagdfd3t2HyxeoLwKGZe9jLntc79ihCPVbhNKsxdtS66N8P9Wauv1Sj5XeDQZ1BNHi",
  "key7": "31uC8qZHGf8kjEr1rTmfY5Gzk2jXqLy5992PBT3fgn3rNh58eypNzx2c5pVHzRt64TAxdCgwE5aW1eUKdstf8Y12",
  "key8": "43oRkYcGxRapJrwCnpjnRuj48trkD4zRejLfbxkktrnuQCxsNonQG8csrVGuNdEJic2RrhfNKBbGiLizmBw1mABs",
  "key9": "2AnPz9xPXfxWrLZqNasaUAsVDRXzAK9BKG9YQm1PvybKKcs7wxZvzAB3XoNu9Ej6Y4YxLAgAoAg43W7HAYS1UW3o",
  "key10": "3LLCzEfsM7HPkEsSAgop4rBdKSw7dTt8c3vq6uX4Lv27xp1JMpWehfYfnzSJYNcmFBvrmzrwesnjfrRsBhrNs7WX",
  "key11": "2HhU6d9b8ywgGvCcMbqPNpsCvjgHbF41ysrnxYiF1AY2N9rh5wGNuAMvey47diPm4ZKpenJMMZ3hUXbrbasFiCtr",
  "key12": "4DtJThEhMYfrnRyXUH9Ez3pDany13vg8gPai4S4AvczbWHVrgN2Win9FAJGpHomZPmPqeYFZD7nyGz8qq1RtZRsV",
  "key13": "5LTotUPbbyGSYznLq5A5K9FARJmg5uuMLfNr1vXXRKYuUTVx42cpsKpdfNAstUA4m2fP5KJJAAGKVFk7mxHkwCL9",
  "key14": "3fDJzXiM22Bv9gVVJ9fNJJGuEznvvwoHMTSgqKvRUBFtsAdU6wGsiq2AdrJ1FMx7JGUnPJERJKryUxiHKqrmydSQ",
  "key15": "3UqMMpzVJuGthQSnHYv9jXNHumDcnwuyNytDYpinXRfbVGD9ZjuroEcvLoQJ1fg9EMzhFkVHiPA24py1ZjPNVNq4",
  "key16": "5DB8m5tEpNwG4psy3Mf1UK4AMz1S5xTgMxYYwQa5842QXJEthaUMGPRRjXAzqpduBF3EPs4fXa2qGLpB2wNkydNG",
  "key17": "fdTB1REBMmt3pA9GtWKWrmfthLdew8fHpHBNaeT5ZrtHLdkG6nAcwtYCgSCSCrbw6Gn4tPrEiTaf9TxKMuH1VpW",
  "key18": "3ixoBL5ZhMtp7iCns1kYQK6vYqmFnfXyi9CYY2iShBko8cBLqF5M7ndwM16hR72hd3y9FeMVT73FXnQh3xksDPxv",
  "key19": "2GQxzRBvrjcQsUREMvE8QTxjjPfcE7jaJW4qewt9WCWwuxLFsbhTa7nzQWC8sJ6A8CbpkAmu7UdRPwBKHbwQ5K3q",
  "key20": "2J63qQGCGNqqqcL9xTTZZEQrRJScUXiufnU6Ab3fCijakU9A3TA8aFg45MQUT4Vcgkxkdr6wVt3qkrVa3DNEoQZT",
  "key21": "3pB7C87ckjeCvo5NMLiu9d37ogzy9yjYJ91SCE6PVEENP4gXW7yxxdzyVXDaEwPfyRmAESX8odj4zt7f9H3n5ZEb",
  "key22": "LCVWUf6m4ZLkzvAnZuohmxUHaR3cQTMeh5H9MRGfBw9DCXdapA4xeuEUsCbG8Gh3WFF8MTL1JhGbhHFePkuYD7c",
  "key23": "3KKrTvjwAVhy6xVxNXUpDCHZfT3NH6vV3fouXXrN6k33ZTPZhUQBqPMfAFotRkF4qRr7uTSebsUBDReB7VF2ZbKf",
  "key24": "BxmaQCDrX8eDTpKkA5WFE4UndEw3CAJr8zFCUuF5Bz8gridUGcU4aHCT9zmB9jPGwPqF8ugFp1GTFJAG1vn26EU",
  "key25": "3xhdVuRVrja3X1ggSpvRJAbeprYvQAkFYKRYMWWjABwvphw5oMmrSpS9eRR1ykosnKvh29ty7C3XyDNDuM5AFYXu"
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
