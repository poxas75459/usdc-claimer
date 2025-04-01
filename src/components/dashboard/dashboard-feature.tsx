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
    "5Fb942zoGYh53WK8UJDpHc5GKPAthbSJfj9Xe96mfsAKagjjh6h4KNAKyENYLoBW84wVVRQ1NhhfqoatV4DrKxB5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "412xhvVjTw6jFBxJnTkPFuVZuwjrFRqUJsziUxuCaWitCnk9R1AzZsTaMMhxNG5K1cmZSPQuupKrZA3YsmupJqif",
  "key1": "5nMjMBWQPYytyM1qUm5iJGxRme1eQp6DnXzdT2mjhtF2cGaT28iMZU49yFa7NQHsBVCTMo2Rv19L7N2Pzv5XHYdq",
  "key2": "7QWNQdHpw7XmiPKGgFC9R8bXaPxZQREoLXFb664JySXF96ZmpWQy63sLRTng4My2n8wef4iZ1V7cubz7VpjcgCt",
  "key3": "2mEUzyeDsetWPWHSp7g5VnVq36p73cxKsZMYHLfDgDb7oPPeQPP4mPxkSwqpWxYMgsx7nNWACS79GBVK4LGo4i2e",
  "key4": "2QgrqmNLAHp8dpWz43dcmJVbfStZgqeqtPLDyFkvZqKxkM34QwowW4MNdK8tVKU7KJGuBrocqUCZRBBqL4RUGEy9",
  "key5": "4oyLbPAfHQEDvPFPdfDPTP3pniZ6vLMknoVoYqjQho9h6MevTLSYiji5ESjtqRUCb7d2tRXygxouwxCmbTH3Vxt3",
  "key6": "4WophsNZPdfYYLjGgab1NVHNWY1BcR9kc9PtmEBU4ZyLzCUZdNR24RB337pStkng2TRUieZvzQvLUSoXM7qPMjYn",
  "key7": "5Fn974JzT7gSUfxTwovqtwt5wjFzbELCS9MyykYqupZ8ojdTs6UFZiQMzfqHCzowiAEi1Q64XeNTAqR98VDFbctx",
  "key8": "4k9aBvmRYcookwkB7cBDwPoniMZyemPv6TfUgZRD3sqTJKT7c7zj4jthXn6UvGHemDf2bRM2UzQHsjK6rmdFNrnR",
  "key9": "2moRWK27WxDZNSKn2nm7SmNyzc5MN8iMrFTBfBLaSs2Gn3oqg4r4pbPo2jjQYhCVsFfkFFWRPU7ZnxPXsBAyy7Hm",
  "key10": "3KvvY4MsTZFyoru7ANhgAwjPT7Rfk4Dux32n5uV8gZB5Q6re3kkNCL4HD5eyAneX5C7ebyGDoupc42pXPW9PQLjK",
  "key11": "3Eq56MLntrQ9j8zsVuUGsYvbHVTU2ULPfyQds2cWncJjP3bwZadJoYquCfa3vpQxB9CWYJo9m8rXdoSJMqSzzkBa",
  "key12": "4ctcU3iDcjw4hSwbXaCxfUcxptumnYBYLWCxiE8M4tmtLJzBfFTmyM1xrVnH3ADRAkNXT6QyoSsQmGDLv9nkPo3F",
  "key13": "sHd36GuXBQ9vkwnxAVD5jdapWxNrwmm9KAW2m5uK4bzbaTnYkZigfazEkNd7v2UdyLEVAj5ZWhaPdzAPS7aYqjC",
  "key14": "2Bow5eZtcbssgsKJJh1Jyhtfrmcgjdv4BsVdYeHcu8pk5WV7ipF8bsefrtdEckhoX99zPdCtUNavSEuHC3uiajmN",
  "key15": "4BVb37aXfdMxFTQDmi1Z68gLmTozx4s3Z2YzEWEVgDZUw8UoJFDntHnSnTfhrTsAqngVrWpwHqVBNQiwmHrvRcib",
  "key16": "4gTwFAEB2S3PeXEEyMscGuhpmJNre7QqTNNVGJLYrn5Qc2PUiAFhTzAKUwfeSWwncR4SdYowuRtXs6Z1zYReUnW9",
  "key17": "4AADTo53JPDhC95QMNQ2NrSdJfPFr6CYCJFDjAgRwiGN5tFXvwpAhdo7zviFTNSLNfCJE1jotwMfv7iR3zbFsDsC",
  "key18": "ZfaSeXHH9dwEzqHMUbjfsp9pY1rARYGZxwPN5af9M46GGcEXh6pdGuby6wkDnH5nF2zqBwm1QULDn3kJgWeBTcp",
  "key19": "34XijpLG3TkJQ2nvz4xhz9KzoCK1eBEQsSwSfGgVFupmg6pnZgKYYNneBTwf8hefUKq3f1tDoMYP26WvTLBxTqu",
  "key20": "5MStj6gCsUgL3DUbScsNDahySoDnebJAHsoGRAbSzDhkzAqvvGUD4nuJJvAE3PMbUCC5ssBsd5idaZvyjfcatyxs",
  "key21": "4uovNZ8pogS6HjPiRTRZh45UonxwJdRXNcSHTSdNMqcdd7NTdxdphDGFowFDTSYj5msjofqwiwqzqPr5AKwR9Egr",
  "key22": "5YK8BvhS76vUoLxz3sGfL2fu16TohLy3YEqqs4YAfRfskjZmDSPDH9uFdU1upYevREL8oqXxAkaZQHkYgARTWRe7",
  "key23": "57FSQ7Z47d6NpNTfiHevAU3AvUcEigkjH5v7BuD1bsfZAcGHymQb32XcgNgnQ2B95JDgQUjZMD9YtsUALM1jrDwk",
  "key24": "2PE9SbvK7BASmDpABWsNApuriNpAd1pqVaeNA3kzrigrRSVDsxjTa4d7j3aMAzFLqZ8TxJT3ifUTJqM5NT51dCnh",
  "key25": "3s8YV6PsDVyapx6g3qayNAwz8NW8fKCRWYZf9HyRpqoLmo4DH3JuacS8vNUqyVr8GoXauepMvMwGMJAK9mDNr1cq",
  "key26": "4y9eYs3in33MB6pnBHH6kwnqAak5cLKRjQbs6Niprhmx5sRRB7urxVGGyASPZubVxngQXg1YdxPjZQbw7w35nzpY"
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
