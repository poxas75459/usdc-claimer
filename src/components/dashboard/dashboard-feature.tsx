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
    "5qhK2jGQb1z1CGBp4pckVvSqibvp2toRQm81geYrytSdVB8tg5NhE8j1DT3MA8JjAGQKRLEjyPXEMtEKah2rMqpw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M1v1c8WR7rKoVWNnB3zdXeSAMf4WjEZsZUGtjHMnvzQGv6D65hubqidQX8srV1jepbuVuXWnE4tx4KKNjhcvGAK",
  "key1": "2HNC4FHbRADCBS6cS7cxEDgWNVkdncGpTDx5PgPNwc27QX1V1fLkFYT8cQ2D2DDaEPYVGs6RMHWMn4d4Mf3u2Ggt",
  "key2": "5XTvaSRry2pVPH4qpFyvreUzkafMdbkSTsLkDpXXL4mWnhZ1a9bts462hrKsxww5wW1QJKsmE16PuYJrNtx93hAP",
  "key3": "5keHUdtc7E9DkPmaMWyTKXK8M7hhGUQhjTcj6RVFYGqpogMwnqCGAHFsqFzkR142iyqpR1fF3H6t1gUoesGLm1pp",
  "key4": "4XbRVjqLqipdt6Mk7vfLx8q8iemX1UmAztUAZdgvuHko12J7JnYMai6ugDLPk3khmgHM3m4TGT1J6SbDRpn3pQyj",
  "key5": "3iBQWWFnp3RSzYCn2ibkuqxnAMHaHiSTw72r7eYa9qXVxSigtbGqz8xSiZHrRDZEvYtxzJg8WvFabdDWLww4jxkm",
  "key6": "hjS76HUeeWdUHfrVvnpnTodhffYmqqvEidTnxD7wYtBHNf5oW2rgtyCUs1LipUezLNq9mYJPQgd8ugNdKnCmDLW",
  "key7": "3ShZ6Yb9tY4ZXcq1SEWSJPjR6wCr2LfXBjMRor3ba8iWztyd6F3qXDKySym9kovu6S9AkmiKnvCyPT9bJPgRRPir",
  "key8": "5M7jTmeCvVJndNSva8xWQsfsB24CEXEGMkrnz6pEjhLqbsxLwtuqpaKh2XSNngxA5HiqPKhmCJESuP8avWNUzRDv",
  "key9": "5Hz2iG1ZshvammXdpxcvh8rAg27BtGdKaEjKXVqGDMRsfUavrcrGT7vQa2aLDpKvLvPViRgv5a1ZkBcdp5sxykkQ",
  "key10": "f41aTWfB6NQQUizYtgRpcDLNhjxT52oQFZctVGzZoJKCJbp8Lvc5B78jcgFQkYeigjjvUw8uAqbxPMYzQB2emHz",
  "key11": "3Aqa96cctxR4DRi9GzYZMnN26LYn2mKq56RnWzBR3BVRxuKNY3Qr6uR5cEi8YgNZeMBVLcUJSbyqKGBDAGDpz48q",
  "key12": "z6AXbwpeGzaZg3q4c8iRWpdWWUZCjU1UzvsztvpAHSLn53h1c6VCGZsBgsM6WqqLcWshP6jLJd1ETzXdteq9ihM",
  "key13": "4okfhRxysVBSmfqPRHrdBYNPUQSiaN48BVb7yJ1tCWELTjVtFkuR9rh8KowUUrCdxKCn1ARcY5FnyZWe1Wc9gcbt",
  "key14": "35UKi3NsBnyHwCpFsivdpwy4HSVxt1mSek4PTNDxunYyj8aZ5TbZGHMkU71odAAYzcxh8ZQoUnr97Pa8GtzDANzL",
  "key15": "4MGBr48Km9ewPDPaLAhWKNPvRRzBNjehJH82s9R2biG8nz3kDRBPnGNtX2jm9QhpbP8kYDTpg9eXRLmnm6ZoBabY",
  "key16": "3z3n5Pj6aUSicmzxTG2mXSSN6mhps6Jw7h62d1jyMBYa7hjJyv7QDChqvTTP2eNCtq6rhxN9kn64CySC4uZgGP5k",
  "key17": "42FEwExJFUWLsEJWybfxi42eeitEosCLdLgFENdGV4wDXBMwpAgCuJADt7v7sLkGwbpmPPTDCS4dJvQYWY4Davc8",
  "key18": "2kS2MNfF7iHwK7v1eS5JzpakPgZMBhbJ4x7bo4KszCDXaJBMvJfxAjmwUSm3oTBz4z9m8mpkN2gnUR21c7EhQjbM",
  "key19": "51Lh8ASUEx11TrjJybTHzENx5R8g9HePZXZKTtVsc9H5tLgrub6rbbgAoDTPJr5nJsCRVNzvW7yMZVewv8t8ktiH",
  "key20": "2zuB6m3seT62fXmeivqKwQpfPJmBVtQE8tXM8s8uPDwXaEfAGHV2yBZwsK4GHo3Ha7RCWzeNPo1wouwkHNAg6tGe",
  "key21": "5cDtyCHaX3nKjY4VSwpHCKpVRv1DUiga15ywjfmCo4LyxYpKBgV2H8S642qm7M8ZMKKzYKcfDnqe4rZvF4A4TWdY",
  "key22": "414kTGWQnkvNEPXqH3oZnzNHocUzhXa8xCeS1DLywR7KJfiUbXtW6LJVBe8Pe2iKFytQtvfjfcrpCkt5JwCMq1eS",
  "key23": "4zrcdUjzghcCvHFkaLnvzhSPmwntwgzb8c8h79wN939HTHbu8tbM9gLPCE5uausqznnYagboV7QP5J4YKBBUtBze",
  "key24": "ZQyqJFypnYGdP64GRNDhaFSEwbXQ2izPECtSodAQLFgn9tpFYVxEY1Zyg1Xt5PJvGaRv5JJq168ku1W2tjpzcMN",
  "key25": "4xL8aekgV6HyiTZ8E8UBgbw9xQ3X2q17EPGTR9wVmGR4e9tcQA37ckKBQUtTm1GgvKEVizqy8e9JQrtSmMoSV7J1"
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
