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
    "2CSozUdYcd7KUvmUJgK3WvmHoTZYZQnvK6s1ppdYXLS4dCj2khzXB8QSQcWxNGy7AXtrgrc1SsaEzg2WrSTSBYXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59oRNuho7LmHsXEhhbf3LpuCk8FKQhjiNa3Acmp6FjDuJ4Qot2wQ6dqQDqNDDMV2KtcVdpTyk5KGZ6JjskWsChg3",
  "key1": "49HjjYhkFPZ3bXQRhvVMkasPvEcAntrkdXpxyAPNQ881ppg3G7ev14gi7UH2qWHV24kMmRyjWG7ti8HUMXRSNpSG",
  "key2": "2i1tD9CgLFS8VwRoYNJEx6ARNHNMnjZy4QXrLyTDKcqhjGCVh2x8Yq2KjEKhFytuTLXhwaFgK721d7jGu2fV8uNr",
  "key3": "2AiFDF8oTmy9gvFMx4GebQ2KUPZLnhrZ3G7KHQEs4uPjL4n8PKDFpB1Vvxvi2NxVWHyj8jQxwFpVCodePqzs2MeE",
  "key4": "57VqBqZMhSZV4vNDdAEsz9qPYJ2UDMwYBXFbSwLzFzV6hdwp7PYxv9po5uZFdcicyY52RzKbU7NAXAfCoqffkY2Y",
  "key5": "3796FSBE3mybJEiQtn8S8wPQVmLs3Ya3EQJUEMNJFmwGXYxcvFimNJopwreCUWLkyuhqCNCnCxPQxS6rVLCQB5U2",
  "key6": "3ywu7tDWsKHH96JsRiqDAWQ8H2qdBZfz6g9YnwfuYBARqXU7V8hRNaawQJWcx4UDMqYdjARffEb11Urjc6Mcsb5e",
  "key7": "34jaxgfEQbBidXFw7fQ1Nwt5hEznCNG1MCmh5giQLCvuF7UtGTzMpnzbFkGe2hR3DHH9ybvwb5Y963r4xFHVhG9v",
  "key8": "5FPpMcZCo2mXEFH6JoVSLGhAoDKTeBKEtW639QuKaq6pvos7hmL6J7UuxN5F6HxUypj3Qr7F62TYVcrhV6QyQVza",
  "key9": "fU98udxkbVWxTQvtFfuRqKuroR4w7CFRTWnS4mj1xNnZ7NJ2qSwmHBSoHUet4gSXpwcDL7bFQDrsoye362EaLke",
  "key10": "pi6DVxtcyMY8AbkNmGX5m1edYUnLyaMbwvGcu4axth7hdVdBsJtEHsA4iXoAACwHbmo4vJRueTpwvtZBagTtN2V",
  "key11": "3uLk9hEdjX1nWvMExNEdHAi3nQFbuzUuuCXQSSfvpeesL2zdkn3JNDi1KEa8MgAX9bFeaeL2gmYZfYUMZ6iae3hB",
  "key12": "2DeUzBhhc1dJLwr3LdmrYKbv25XEgAveA9tEPvEbpgihxiMgXMgyzqq5gJx1mK8Q5bKFmVs646xsAaSgqRAoZwJS",
  "key13": "3qpQvuQJJ8N4vAyH1797QqhU7TWshDcRC8UUVBvjb5iSdXKeh3zTyKRmqceiQ1adbJjruSGoNoWAYShAFL7f4bwM",
  "key14": "4ZrsQhGrdw6u1nQWmJ9fUX4Hqy25TVEMj7g4f7oYrcee7kTFxqYXfgpbnGxB7HAbpqkDqvyu3bsyTBLyFGA4e3es",
  "key15": "3EdbrPrrTJEL1rbPPDEhRje4qvYYFSoVDu1a1Y6jy4tzo4nMQik18aYtVJCDtCrMpRaphfihCr4h9VnEEE4GLbyN",
  "key16": "3P6VPXkJcRDHsF5FNWUFLuJn59qdFRDbMBdV2eWyKmc28HPMYQgmVnfno2TAAcw4t8wajNu9gjssuLnKGuGDy7ir",
  "key17": "64fh2eyuFt1f3KJKs3sikkFfF9iicmW4ns5W75wHSqNAetY1Jh9BmDZJ7DS8zoAcjgEeA9P87y5rKtV9peJWGyga",
  "key18": "4FRND3eac7uPjZptC8pG2JvSB6tNrw5LLfX2wcngnidNjkbYfwKt3FR7mZQsa5F6Z7Tg1u21kams6ZvH7bfbMffh",
  "key19": "5avzFdEHpG9dBchFHApLoqya8BN9jBZdw5HZrKjLT1A6k2oQf3U5xsk77DDrCLnqrnubksPQtJd3s7FdbvbpUzAr",
  "key20": "2HuU8XVWedTecoZgDvheRxDa94rKicWe5Rek23ks1nR5gTiD7Bw7zRfccLbF3k1HPhhkUCqJpjp3w54hngsr2Ymq",
  "key21": "v7UniT4agGtzFFXxBvwf5Gn8cqYoRXhdFqCmgTBoKuWpAtmpm62acGUow1bBtXCvGZmtnDr4uRo4kHbgdZXgNu8",
  "key22": "4j5vJyaXbWVHEEEUbd65gJnHv4AXGaCE8iN1rALMmTMqLWydWFMcKyADVt8asZabMVX4MpBsyf4SMhqRS6oZmXj2",
  "key23": "2MYzGnDaPxi4Etmm1HwRdg4YG7SwsNyaCdPu9vxnkxbhFgFeWbjL7JXcSEb8yykeSrRrYLdq1j9d9zngTvS3vrGA",
  "key24": "4g9Z9EQJ8toLQcoZXZrunuYv51vdCWFtm7MLGNksC3hAEsKnzinEbcrKGkF7TKVGLrSmo9CZQgQQ5ioMJhWRuhpB",
  "key25": "2UuFpvNkYhxujY9TwHP9Czt66QLKs6B54UVW928msGAqKpeA7njJdnFMDZuYyfDTCXodcxHmgGN8SGqVmHvr7hzZ",
  "key26": "5cRKzuVspEvrxQ4jR7jyH7tD5TeskjtsfqYxEYxWqfc2sWhQ1EpeABrSqXTjwBLzCDMkEwQkBnngi286AQmSjfgm",
  "key27": "3GFJbw3JbCTMCbHVks8TpNuL6BaD2rcpX51ucgtmrb2fQgdsBCs2TTQvFzWG22UHzBX8ErLdFZHr1gmCfRz8Nusv",
  "key28": "3SArA8UavNnxbxJJSF4H2ghbabDBsLCj1Kw6NZwgZLUj1FRNNVY9HFBLYBwibeV3a2mLRQJXAQE1uHE8apFBGk85",
  "key29": "4GTuzUuHxBbKbTTAo7oeZAmf7Aw3gnQXVDfkd7Wowso53x2Ns5FesvA5qZ1hMUUtpiQtM4MC6cfFjHTPwh7P3P9D",
  "key30": "2xYjXinMFqFF8166WXJweGUemyraCSd76yFpPjHy2kTzWuk5xf6oYVUXs81RyLuYH7FDWbY4hrUp3otRys3F9THy",
  "key31": "FViE8sFuRcsyVWJ5csz7bz2jk9vMbDWMtY3XyLfnpnHvVVcsziyJEWJy1Vf45tKd44vTvRJ1kCyr8Whi3pKMhqy",
  "key32": "5kgHm7zYNCYvpNp3Wf4EfZDqUd6z37hvUm3nCA4dno9prFjKRdcvYhu6rcY4egkXcr9ZRVAGj4r5HafgsyZCG4FC",
  "key33": "RaZ1r5Mi9h815JyDSwtoZ6sXjET6mUUXiZuD2i9Whu9b9XwNmeCnh7kxKzVrmc7quYPpVhD3R3n9tuB6VRSARzB",
  "key34": "4FX6JvEY1Nh5JxPB11Ax8ATSftoAbijW6nqeRebJ34TDKzULwnzTF2eRLQoUiFmSyjLhBLdajFA2jLAyN8uq2aga"
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
