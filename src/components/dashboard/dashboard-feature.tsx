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
    "5n3f48QWZAfz6RAiwxFnDyMP85aQnvwBK4eqAsGvH85vTS5eZvfajwy1KnsR3PrdxBriXAG4wCo6qDderxmTvPSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sS6ejmdJupVC76JQtjWfbxAamuyURAcaiQaZ2FYDFhgEVruVzBQU3oRGPZ53x4QVF65du4Ama9YSnAXXgQ1JHv4",
  "key1": "5ofDX1hD9Xz4HLVWaZEDtjJJfcoTGatD16HozbHnGLgA82rAijVEthtNQfZV9RRnHHz6RAmJXXErGeVgJautG429",
  "key2": "5smfTviqCEmZWN3VoRmWduYVeHLhxaxaJRthLUo3azmkstHzgs1dEhym32YFo848SDpZmjMvkkYgE1FkgJAiGWCU",
  "key3": "5WoGmDN9ger8LQ3UXF8yKecDFXSnopsm6U76tAwJQ2DsYuBPnVVTKMwytvePgQEkWELn7xtXu2PYV5mgMUYFiJZU",
  "key4": "PQHkRU34RA85VmCBm4GyWf7qssFRYHiRCiNdZZ2VsX2kXzF3YxGLwW4H86oGBeNebewMPJyr1ypU886RAufhEsW",
  "key5": "52Qj45cArUVKEYMttsWYchAETTt1U74CvYVDHkp3tVqYWskCVVmJzqNey16Ut7atG5yfzchsmVte198Pi5zbEZrs",
  "key6": "2UoQu7copFCFuR2y69Etpu4G1BknVot38pqBSGRCUCJvvRWbgoEv4JJrvdA8ph7Ei7qE7SDk9bbGhBj2DpEFFG64",
  "key7": "46TkUwheMVfAzqn7bNDJn8wCTaPuf4HFjZy9BwJK5kKcGCgtU8TuHhB9ywPfoddDYBif1N3FtArE4jXqXRQA6x2f",
  "key8": "4mdbEtU1J3NJFmEwzxdQnRdgR5fd4AFm6DRY7ffFY179kgWHgWffpFBZQG14JqzJWKb3k6ccEcd35W7Djb3tvjpL",
  "key9": "3HBkZRijJ54ZJoJ29rhGETLsCsdtX1fYTh9aGrt62K32pmZvjSXS51iSQY2CfymVZFwVtphraBo3vF9NEqtiREZZ",
  "key10": "VqgqtgdBoumXn3bve4GowC2GRJUeNSVjDXh6uUgtCvNx6ZcGfeCDhSDBCP2yynNQtXH4cAbwoHzUSD4BGLEj6in",
  "key11": "4Sos4TKjJgmiu6M7Q4DBi4HPXfK2GipBvro4M6VvzcyUvScrgsDLPerEgFYVy9otQEW1VC7CsX3fSZxhPL22khqa",
  "key12": "sNpBUpQP6yYQtgaovCWi1syzfTPWEYfnyP2LybCKaW3DjzoruEF9dt3xpp7uZHvmY2BZ78JXcZtfdE6hsxiWhPk",
  "key13": "3bpKFsZHQuXJfrpo6pXLfbPh3r8DHyaZeBsHxp9M7qMmkjX9ufFJbDNBN5Ei1vzx6ph5vx2bSV1SWgN1AnoWmrgK",
  "key14": "2Lm9Yqwy7844m2RpzsQBnQRYowGR4e6wmPB1MShUGG6fepe4GiBcds9xmaLYGgqsJYQYN14Di833iCyuD2MuToex",
  "key15": "3GR7jpSoCdgfYQHWNjN2SB3Xeu7DaLMJC6S7LVEyDMVBDZHcwSXBEb5st3f6AVP7QpNte9aJRFcKsF9FG8VcGzKt",
  "key16": "3b9gWWWR2pxQkbXsYCTwWvvh6XbJH1AdY4sfkYvyfizuxepYgEW3txwY74irmcYQa44nagj7ABkizEcAnv2dHA7u",
  "key17": "2ZQnXptzKqwWAEcmoMMs7jUKfeDZ2hjNkF7W6aqcc2DLoNawBNRfymwRPpANWPpfBFDeg9u1k9GZh7A2HcrWhy4E",
  "key18": "5Yjd4q5jiQ6ZBDqJnGxf7uUnemv9Q6Hc3FoMs21gneSeEvacFXsfesh9p1oQKHWgpHK8m8oHfB978UzBPwj6cvgM",
  "key19": "5NRcM3kDosDJgsifNTAHnmigZJJkqgoA2Sp43iZ45bphtJ6UCfViisvdypQvwatxu6JRZHR67cj3v71qr3KoQm7e",
  "key20": "2eK3PPAFKRSxLu2hyXBuzjq4QPULaLjMNCfFvSpsfY7EbCkqEuyGxJ26ZKJTNvNVWBCtvBP9YomdYV2KiBAJepnZ",
  "key21": "5iqo5oVRgWkgv6D6gZfhdqM5SCu3J6mmcB88MddNFcMgQ74bQspJ4k2AAAE22kPoeg79YyvpvhEe5YPAbNFo3NJD",
  "key22": "2uY5AMmc31vTGQkWXjLgzL6eqCLinwF82dcBc7sCuEqRhdyaUorqySRztSCzwUseEGNuizaSs5hpCE38nPvUUQR",
  "key23": "7zVsqb9Yaob6hi4iyAbo2akHyPtZgJfKWiyCC9TKvyj6GEVjbJEccL6wkMfgFMQSz6Y7tmzRQxLRrFftD4b5b4b",
  "key24": "2ZxvGRwjY2ivghLKQ7Tzz3fh6mebPqwAtn9zRVHNQBpnmZtb28wvJobEC8yygD8rihqdz1hHEsCF3uBNnR3mLFZb",
  "key25": "3rvKBanWWWuHFDYMx3jVwqcJyLthjYctL97y2zJd4x4A8EJ8d8owetKPJ1YRbsjc9mbpmTPQSrngfvYGN9uVUbrS",
  "key26": "4xgMLwZnnpjYDWNXPJUSGFVxfU4gpD7Nn1RNZaQzxQ4kqrYRM7hd1bKsumEQKLULmsFtBSvBygtCPd62aoqQmWps"
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
