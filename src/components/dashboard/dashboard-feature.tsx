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
    "4TEP1Ni1L4a3Q7Qxw4wmC6ANHPMcfdrE4iCshA3nEMRTeaPDZpYNQEj1F41whfTsJV62va2Z2mT8X5duRLifcgx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51jpdrRqyQxnxvrbS7qsYiiTtU2NsR7hNuRyuNDNbzAvjrnqcYrWxB8zf1xBnvJ2yvA1k4QMvBj7GigQzvgtZ55n",
  "key1": "39XApWohhNMJjzkJM31kW58JChUsVrT8NhB5KF8XuA3dgvk4jrscX6c245LLBpjdA6ubrqa75y5v4pZey73g1Mz1",
  "key2": "3jfSFXj5SxxnmCpic71YcZc8rdG4K7GsHhEfoyK9Ty3CKxAsWJ4atFNowDyjuaxdSnAbCrBzgRSV8ZvqucTKpoFT",
  "key3": "4bLGma6wWJuwk5k4yb2nqKs2iJXcipXDLcAruCt3W1cphyr6aZvC8V5M7RQBdbsk91JshHdrjvM2TUvctdcDkysQ",
  "key4": "4PxxD89bCCpCKWjAuFMHzBCYMLYGxM586mB5i1jPCqqTtvvftT4LgUxBCkvpFoC1NeyZZbfAT8JufxTnjNMBYnCy",
  "key5": "Y5Xyj2EKWCmCzbQZ6HB2mMfk7UHyGo4feEcL2XvuiUcv5JYeJksWgtsEiqA1JNb8c9XmoUVaBE86Hv5tzomjmAe",
  "key6": "2UWKf4YGHhicV6JkbMW5PGGpBkd2Pnzk8vfQb4REhub4iYBAyo5XuBJcHSUHQmPJGmt6Zp5q7QHxorgu8KVym8JY",
  "key7": "4LNp6YZou8Pp9pRpNGaFFc6mT77ur9vnNmCqUKi2w8fvXnRaxwAzzFpPaEqrMvm7FrtyLBTGJtsUBqzP48wfsQkf",
  "key8": "2CwBJH2AuQcGbKnEwqcnw4asLaDvWh1HGcVuN7mE3Lg1DGki3urtHbrabrvGHwvo8fcYFz2H2ac7BijHUfdwkFQk",
  "key9": "2x7MZ8foh1vhphMiQy5JyLbX27eYoHgvNCR1JTreN9fE2zhdEgPvHADTU62CTS5KgxqGKn5AZZMnpwXf37PMeHGp",
  "key10": "3DRipKuhSt6JE9tEtgUCFGQWqeE4stH5EAum6UG4LP6k7gTjdoCp7JwZP1YFJQ1yTeYB6zBwd316P7DtrbT69jza",
  "key11": "4W6ifJrV4TZJ5s9MaQ2ovqTve1i5fz5zzT7ZbvgKVeX7PYeU2ghGYbFTXhRzbtxESha3mGGV44EbrLcXTqajQ63x",
  "key12": "2v5vea8iuDKHuWesgynMdVL2uWb5ecYA3ejc16YuBkKQrwMz6UorZeTNytVNRCcsojcUoGJzJmwsopRYhSFPiEYa",
  "key13": "2WgqMvaNT3EMi8Raev9xyCEqLoErVxE75aXLFqx3ieBZubC95bBW82p28JXKwQgVd8UftWGFY5bjngtzNRTwPJLQ",
  "key14": "4TQkgsmXV6FRpsXHMdZffMC6RtWP7QXxYxYFrXM5WvEYiW6je6C4nrVuttUGRgvwprWe6346bEMnBEY5SAQ8obbN",
  "key15": "GYhmg8QK6oVY2Erisu58j8HxYFykNxvmaBDirdkV7MtsZJN9w9ZGY5Q5H82JmNHNN5Na6fdGSyhN2N127BBJKBR",
  "key16": "QbqKYrvgkjJbXXfzbCPu4odvYMdH1x8QnUKA7iLff3VF9BSYKV2DyMnogUqqoVYkJrJtURMiRi6ToTX3swcRUTL",
  "key17": "4ju9QHrwhgpMdL7DJgnJrYjkV8GNZSfqXL4NSFnFPU6EhnkRKeLXHdutT7U8nFSZxZXExXRLrDnKnL7TLJM8AUE",
  "key18": "2QQreE1dFuoPotLAVEy4Ft5ECvr3PwdvfFCh1q5abUFaDDF4qUFnsZEy3kSdJv4DKs9EKUtKHBcbDhM8SRsY4M6r",
  "key19": "4uVpckygcFZnCwAu1YoaCzB7V7uRUm6BbHYX9r3aYXT4thvwVEc78HmwMNVQNotZDgFbJYcfeCVgYsZx575u2NCo",
  "key20": "3fnXkGMs73qCbtnSmQ6uVuA9r3Gq8RQ61LiVmEVdYUVz9JCYjdUoz4TgqTsrPLqCCkNE7pnnK48gMjGPkvDhNnWC",
  "key21": "5iQADgUCefZCEmQfKmN4aR8anBStQezFUrnzPtEKwtuom51YhKXC2KngPCi5kqmG29qwA2k6cv1HQ72YDgQJZKTt",
  "key22": "rdVLLy6svVRy4VRiVjumb1jyxVMjQaNNmodRdWa3JWovWcEkaWEhr5Bgi3oNCbERZ1d3bDbSUVZV1eDSQA4a8uE",
  "key23": "5C83mgHmQBjh3WUqHrEXXMYm39dNgyqoYrerXbgJPHenJYqwg9knhdzF3bAxPT9C6YUqyV8vdNJ5LpkTaJvnKv9U",
  "key24": "48RSaUNvXBPV16J3Lc6tXxxgNVe6iK1ZBk47FHgWgvnwPrB7C668grHE1hgintSkgTPt5BvXykpcUgSocWuN3CvD",
  "key25": "56HbxZ6ai1shevXD4M8GMYMdJdAAZU2Agb7zoXBbcAprwGiyd7sUqN3NLkgNEnDJPgMfVMFknxvtKtK79btyBUyv",
  "key26": "2Yss9AjQhT6a9G9mFfb2ap4UR3zdTWK86kTrcqtsf6Cy67t8m2yK7wtfnuZWRGvm79wcNCHUUPtDnJQrm7U8Brd1",
  "key27": "HApJwHRA9uNdfyLMccdrdtiUPLwoZZ2EM9Jk8cfBGzjLciWwQctNfWpMX7bQee2VXLMAA5tcvVJxrNDkEHZQTyh",
  "key28": "2ezK6ZS6HtKCdZiNqQe8Bp7M4QHuXYJDdgV7CZeCquEF3YKsV5BTzDAMwwxBExp46tGD6QncRp5pUHtTTDkTR4YM",
  "key29": "2rmPxtw2r8rEieNshCymtLR52Y2nifTHmKUQy3cmuuf4SpbaeBi5pz1dedFY57MFHqXHJUhucSW9jeMm3GXkKycp"
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
