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
    "1eKjhyRbMnzcVvQ5jXbQ3iKGQ8aa8ZgttEkWy7AXNc8QBmJY3rgaPoihEYLctrGmTqAb73ARJePypdhYDqek7ZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pCuuuqyRNM6B6Y81NwgUev6MKnEMez8ihsstM6gTxtMVPLsqezWikujxBLLN3xpeibA39r2LXpET4Ao625uH3M4",
  "key1": "3RAiJnZhgfMptVaUe72HfeG2tmAJRxhrK2BZA6CEG21hkBMZ8mNQzeGeA6n3EwSKRRRZYdYmRjfasiZicGFQKi2t",
  "key2": "4rL7gMk6kCWtk1B415vQ5ZhXjpQaQrBzsoY61M4VxFaJgyrGUDECtBK4m1e75MLy4tKqyuVZDxVLnpUh37k3C5w8",
  "key3": "3JRTbsqourS4nAWwevK4Tejr87wvdL9nyAk5pTNnANBDzWh3WT6eEoqDh65Ru23AWsGPtd2KbxnQsVKNMwCtmrYz",
  "key4": "4AL8ymoBA3gmPy29pkkcKs2FZx6ByXn8AanL4EqYNbHVUsuyfoFj5qnQF5VDCNFWoHo9gg5bfxyv6L3sFCr4Ma3E",
  "key5": "vrxTeTG1FDVcdsBRJXqigCf2Yb1ALmMmv9DsoEj6pPsuf3MGL3wJ3c8qo8NQSb3GBa4x7megDo4YkVmJv2bgqy6",
  "key6": "8eYW5uq57UBXsUXwKvizw5ZADUENF1tv2zfci1rYLangXojC2f4X7eMkTmfgV7tsLvdXg534cPW1mpMVdN3FH8x",
  "key7": "3o9QMWZb8rbG6LRVqoFMH2omp8TDWsmFaZYXtrZWhM8nSSxJ5VYxki9tvGLw8z2FfqsmtxzFR8J5cqWmyu7LjEaq",
  "key8": "3zj5YQ2jRTwWK2G2Ab3LA4iU3xsAe3eGhe8chGW6NbJkdVcYQBNDL84c52ymxBWK1wzYFMLx8YLL9mD2ujYRwNpA",
  "key9": "kdNc9dZQ7MabWQK5FCHfaXjsSK9dQtAPJsWmMVeW1hzWau63Cd2vwwiWoQkTzyd8dkcVtBs6QAThyoFQwaww7CD",
  "key10": "2jNzSAGJ96p5kA7YZtnrHPFNv4oQHD73HQZxfuG8WjqnMsvm9s8ak91zMHcxZVn8fWXtBzY8toxCSJRmYTwwJUDx",
  "key11": "4Tnk49zJVF76qbLm893uS9AeECndkSXWqLbJ1AVa4833xSLMmhLiJP5PDdyVBGqV3T95LqtiLBj9J7WmHdNAHNZk",
  "key12": "49wsrnemAvNSbxS2Fapox3NgSkqLCvRKcVfLMoajWUqEzWo6PAAdhaGdRmK9se2pBMBgoGYgu14BhAQtB6Z5AwhU",
  "key13": "2tALmDVzn1UUFTfem3YrdmwAEVGSPFXzB4TtC7mjAKJ4BGNkF5A6YbcarJh77KBi2odTZ33EXPj3j7pAnH63GMBE",
  "key14": "5iXgwLuCS7bLVWHpJVeC4MZcyLV1s3iYPPYdoikHD8GGQogzzc4HhzCpXATzM4bu8TS3Yy9vsFWyzxiZ9f2niZQQ",
  "key15": "3YRrHLGWF8Zvq97eP86CVxJi17Q1W5SLRrtDbDaCMoK7ZXPCFyvr1TPm5cCToC9LvDAA8QVYfTaPxwvHjxXgebUE",
  "key16": "62rcTXFXvAjjW8A1khxNszPuD9v1kRdcsngApeBs5CmZMVZQooHfg8Z5S7NRKQNNDfS1BpuaSHAqaqLkqnSbPujJ",
  "key17": "4smJbasCkQPNwN2GMy68oVr7B7CydhT5NLz4TJybGMubkTqs6MWDpbrj6RX2V21V6fMvzYgsVKctRgkEkU1CHdgs",
  "key18": "2Bf23mYyksN2DWD1FZsnn5D8bNRhQqEKFUfny3pEa1RsnGiqUTuKdikbnxmQjJgJ7avwrJNUrR68k9vdeTUbbsoo",
  "key19": "5CF6SVjB2bbBiaqmXf81k7bhVR31KMRkCdkDokt9L6Xu5uTnbv9hRNy8UuPNDTTt6t4HwjpArQKgp7k977LxP9Kt",
  "key20": "16SZsB8vXWTPXVCucJosQSPughsqrzjuLnnb4yzrCG8D8b612NJozZYjxJbhj3HJRp8Cqf8NgNqqfHaBnCGNG2j",
  "key21": "pcvzQHxNXLYwKm2um632EAYJQJfnmF4E7xePx9k9aYoMizD1Un8ZS9p2Tht8v7PH1V3mtZfohMpUY8hkRCq8xvx",
  "key22": "5YqvzqpKes9B7JBFvUXnkUEovCedrRb97C6EdFe7fPL1RYX1Zmx9yHKJaEYbbgUitN3Yx8BEgvpnhCWzMi13pPXi",
  "key23": "4W38M2ESZDDo9vesDAH6byuySqepQDXdktcxTb8GTcWHrs4ELWfFF2hbV2pPCucBPuXuVxsm5pydqs19NzFhWzMt",
  "key24": "3EkStfUvCK5VoLj3BaorYq4f7J2evnF5gmNBfm69N9gQaZnPGqFUdsJXG7B67n4SQD56NatzGKSeQhSCCQMuHqu6",
  "key25": "2t153PzLh1orbptyrdPwy6DCPHRwT9gHPhEeYT3jEDgZrUj4LPvDE986j5BQ6dc617CjnYSEVjo6UJrTrJ25AfMD",
  "key26": "2NQBVxu8k8JgmtJb2NV5MVEmgMQjetkwkFvQQRVMrMkQ3QMcJBJkKAqGFSZ5gyfgR9udiUtmd6fEFxuv4xy4Z6vK",
  "key27": "5hXSkHJhdvtDFWZckJZ5mgPgLGzSXUtFBwmVm8Dai3LHDjsiuTN2p7xcz2DaSvyFWZB2r8PCen3P6a91qBnfYA6N",
  "key28": "55Cvq5yLuf6568H8k6E5D2ogYKv2nBN3bGGRff1rU7RKm7yTVi5LyUNmvJkjsDzMD6qzzVkJAcfZCypeUaPL1SxX",
  "key29": "5aVMUYKydgdrHHgM6NEpikaQDsJMmSS81GxH6pdRW2anpXdaR72Xqbwqme2c9U2NhfHtTjYKHAnfEsSfkjdqwKNC",
  "key30": "4LqzmUEiUd5UGEof2HH78J1nxRfJ1nn2cx6NXegaWgHQBAXkvCWv1u3HwJuTUUG5eGmdhVWERkLRz1VVEQ5LWY5w",
  "key31": "3mWWu1ctKZKK9oqKFCeomYQjMNvxuaMrdcNVMNAZUa8mWYv4XoHXFQfZ5gqqWeqUejMZ1RDou5hkjjSDRi8sc4Dn",
  "key32": "bQ44E4ikfD6XrUsJVzyRr1oJi7DzzBPwuAvyHZLxDa4izj2wTiBGwwZXRUKZo5HxNuE63sgiAC9EmWAVXNjN3A2",
  "key33": "mCfhWkCthBx7YGkFWxQ16KWfBHUiY9DKy7CqaovJxTXcdbEQKPY7WTU1zAFHDEBnexyHYTK39nA6v2DLByktCsY",
  "key34": "ESn8g1kd9J8ujsXzsVug3eNJLgyFzCKh9rmfo9HgJhCqaELFeNyJu7VHMKVyNEYsFHD5Vr9VSW9ZdG1yscCxPtS",
  "key35": "392dSRkjgMDwWtfkx6xq8sN8Bp8EHpywhHb52BSpXbdXSufojMZd8Mez6iDomqxtM2RsJ7FoR6P6fCun5eNmXiWB"
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
