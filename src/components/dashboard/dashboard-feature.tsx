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
    "28TZ7yWhDMnDkSb6GSMDCo6yELBCNfRGpvQ9pkRN6B4NRvDPhpCuuoz9BNuSXXyvMahWyvirdBoaYWdS78Fug9gB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "niUGgFCw4yAXYRkw1WPoPodsjFKXidaAL7Lg6LJ4sT199WCy9DUBDtuXsmhZrnGrGEdDQyqguGBuy17bfJv3tns",
  "key1": "tVFNERqfiKi6A3xwJdTL33AReoHfj6q8GehJNNrMMNvc5fBBTM7LfbyxRywqhDpjHixY17Bcqv97zhARFpKicbE",
  "key2": "3mkjMzsbgpbiyCDZrjEddnyLxxd7aE2Jf7LZC52C1vbdCgNgK2vxqjPDLJxhXM6gHzJBzkeyNWdTaxCRHmikGX52",
  "key3": "4EisVGshY5C3R6dx7zGFjFSxKwNqap7XuEJMZbNbZsSFbwUnX1KCygZfN5V4pkYa96SKKUvdAw8ENxSB1ZjMcvYh",
  "key4": "2kk9LxdgfiScZ6USyYL2QKQHyXZ7DNYc7K98YgDLLQiJM2BfV4xDpMdt2ksG2bHG4TczmfnMvT1nfaroYJ8gpi69",
  "key5": "3WJNzXMN8EM9spAD1N2u2FV6Y3Qzc9Kn7gJu87qqG7WHQzfy43VyVauBTkCn7qoVM9Xs8GDMM2butiKQw1kskJrx",
  "key6": "1ChtyfcPw7aQ2DVQfbQEytdXyXSQbrkUevexvqNpxfLg66rMSyMVaRc5ECagAx1y7zBxapXZ3wveD2T8tKiqbZy",
  "key7": "5VhL9FXMvBhmP6egqxJ77VvBccscmXNz3k9ahA3JPiPdWZJVY85RiNvxtawBgQgTFQWSiSottxNmHSCKseQunAwY",
  "key8": "5YebbgQBGPxQEgrtfsmaBdZUNEdK9jHq71H8MDG75rvX6BQsywm2mA7ETgLG3uHNeBVAFraYbMAAXGruLTCxazte",
  "key9": "2ANYBEN8Uo5PBMWw5Uo56jg9WEGjcF3gsEh9YbUTxJjU51d5cmAbtdvK2eNG8d4bRhcS9XShdHcXYxobP7kSxJP8",
  "key10": "2oFg92wEXfRnmfjKp7LDzGqey9sR6yUK7DPWKyUcApb4K38o19VoSGMxv3bRduFgoEyVCAt7PJbixjmeVqQDe8ye",
  "key11": "4C3D1bTbuwsfzky1hPJjAEAw98RKEJCN4CcuNB2RKHvZwrcfdKyZDcvpiwwvt4s7rQjEY4mfmabFgyDkXcPmZTHb",
  "key12": "4tLYTdK3Dt3JQuz7j1njBJeLyXe7frhQKCzpyMbZNP9i2eWMZ3j17yLyuLyAxZ5uQtuD7BDAkNd97VF6crUVoSFf",
  "key13": "2GtLbCLfojX8kzhuWDakxxJWKE2uK7zRxAncJxskef53CcedLrb6AoLkdoeNMd6KU4CRxxTVGkU9v92CoJCkTNhX",
  "key14": "4KAVTtYCm5FAPX2f12RZCQrS6EoV8t3q5GVEbpxQsiYZp2huvZQwfPw8XQGPyCL5LH7oppHzZBgrfMAety9koCE",
  "key15": "96daeiz7HwahCk29XKHnBGKWy1Yu8mBd2z4rsdTi9gPmAJWmJCfoqdwGjXBAuHx47Hx9tBR2YpPAAAxKfuAij9M",
  "key16": "3xLNrquBh8pvkEd2XmthK4M5bVbHwfYtuzznibAgN1viEY7YCwVBSAf4P2P4dHm7K8Pa4WFQF7kVyJqq5pmr7Qka",
  "key17": "3WwnbeurAF1o52UFhcCvZ9XWpAWvUXoByTBj4jsxcuytyWg4pNYhLV6AriDmtf64JjzUhNxX1gRF856adk2ADsNT",
  "key18": "4BM8R9DFWzJYJm4SqWz4PwDpwDuEgERM8wuqqtjN3YYVWj95GtRfvAB6P4EyhXh2QHAvQt5vqgdNfTKfkQqbPzh8",
  "key19": "5L9h3w8ZCXeVRRArFjf5L8MMiKwgHfEikPeGivhJ92wxGRDwjwQh9JDS7GbbgCBMtiAKewx4m9C4jELR3HJE9G5H",
  "key20": "BkFSvVzHZUarKysy7FvcjkpFwBsdB6L9V2iDeJG2Nz2vir6jjLdjWKa94Wj6NSpntWNG4Z14qJcH6siXF9BXCq3",
  "key21": "2N6NA1E8NhwvNQcEmhjbTcLBgyVsGydTHH2wvtqbm9NRBG5ebCph1ybLDKDPZ8EM4ybRAhPtG4A91vhs8MEveZA8",
  "key22": "7nGiW9pYjh5KGu1JrqnVXxHpKZDURMRFswKcusRJ93h4Uvt63xMqBe14kNWMCGDT4hAfphP14cNkg9p2HfeqB85",
  "key23": "zFsW8smyuR5Aw1aK9vUrF7pPQxttfMRpriq28E7hXE9us9gDW72r27W1CisMjZbvjS8XzswyGSsmfVTZcu4SB8U",
  "key24": "5ydWHdMRQPBqFGrSbjysEsaHNHLMNwSfoShD9KHYjbQWyWCU5cGUbm2Ud3efiRKhtkdrUhkxf9BiF7FGSMhTKFK1",
  "key25": "4mcrCJXSEPpPAwAuzDnwj3V9ZgNRQ5Dfj2Vd8ZUShWhkbrbYkKYeSNGSyG9DBYQxzFarasB5t9sjpETjyDbFCqJW",
  "key26": "2cF4v1F5JhjK2EV9TaP3LeTsV8vLxFnUg5jQUX4jGCMuqeR8jiLHkncWzpaMmpH9XiqAFxBp9hAqmqxzWrjMfe8G",
  "key27": "4zkfi44N7e1EkoCcf11ZKyGh6pyMEGW7ARj7VrUe9p74WgjPPC23ZNagz2MLrNe153UTk3rifKZxHinN3gheT454"
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
