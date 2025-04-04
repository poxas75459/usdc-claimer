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
    "5JGT1YZxHiAWLh5LSAmVRw11mUJxg7BLikR3EpHE9m5it9CUQw2DB8EFNDTZEGq4H8nzu5CMZiwhePfNaHXUKBii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CDh2whySGrEcmHLwHRK64FEC4BfMJMBmBrmuh8BG5gfDwuQzPMdHpRea91a4kyW7xBw7REyoZ4G7VCYaYMneVzX",
  "key1": "2auwrE2cJHC5g1cuJAwpe8eeRbb9hY3hyRjA9wwB1ESymFZ6TVL2XGahQAwH9RXLiUwJTSt3CFtNQQfhNf9p7Jn7",
  "key2": "Q1iXF52zedVMYSyQeQRZKU4mc1Pi8iK81DmfBfCGjkrghzW7W3SFpAe333nuwbiiWpEVKgYstDEoCdmgK5YqsYe",
  "key3": "WHGWEdsw4aDEDi5eEHAtxJYr75p7CQXVXvVbUqwxRjVTfZiACAkHQJqAiYLVAgsYJuA9mDGXJtJx65VPLiuNiDs",
  "key4": "5tCyP8KUDRtzvfJsnUEFaWD1fMVrb9YUHQZ4LuvWU3SrmBDxEdvczppUEGWm82ybTGoYnXqBXaNYTJ97yDu8Nj9M",
  "key5": "2ybUtotW62t9UB5q68ntuegW8q2d4uGTyjUfDkoyYjQqv8miz8WgeGcDHCNz9NwF11DBXAgY5P7QA7Wka7BUHYmj",
  "key6": "2qX77SQaxcnVYBExmicFtJbnEiBzrxm7rP1ScRU7qFk3UiRvkmzM2rNiPqTfNwdi9s8C8kPo1cZ9iX7tDjZFAfGP",
  "key7": "4pVo7inv9pZb87Hu5TG5bsYe5EBFK359tEL2GZagbHjahvvD2SBm7nKVNGAaMesP4R9CFHoNU7Qb8vb5iWin6385",
  "key8": "4PSnPaLXha6dXAd8cEaFBBzHRvjfEmNykPxHk33qT5ByCT9orATGWALLi8Mt72q1naNzu9TgG5hnrbSoZ8NAD67W",
  "key9": "4zjigUfpBVEv2xL5c3vCtaRL1SzCtvmshqWh75ja3QTNv6reFqYc25pvHraBy51qfTRhFd3Ef834CvYDQv3wHjLY",
  "key10": "2mUrNm9RLKC45CPFQEw2buv2sPoaLGSdMFV7ayXcjuSD7VkTaMAu49ZVDMerr6U9inPVc8KSi2KuwQcXbfy8K87q",
  "key11": "5PziuKoiYmStyp6c6AXatTw77H9z5ozvqwYXW2xPp9SBgpkdfMnggNYTHEkrYWt6YpPEmcF8QJ2ra5nLdzehfYUm",
  "key12": "3mtwDuWRfVS4zziAtPfrWvd8FCf9aDPcfbvBseC4D59o7F5Xn71JcSWLToD6fmK37Vr4FNaibz88vqRBQz5QwSpt",
  "key13": "451RFeamghh1SmU8s9sSkP1kjqZw2FiM1ChDuy63rhTC8r4arR2fE7sEYyxt2BsB4RbbgYGfWAZvy3za568TBihD",
  "key14": "46bik7nmvXURFCbNUn2shZfgmRfcgvnjdY1CSrLRMV3QbtzRrM6Mx6GEfqMAW7yyHfrfTfe8ThYfBdvnscp2MdCY",
  "key15": "4f66Y48MJW2QdWVcH24JJ4R1VgMC7u7QwW895mcoAHgi3NtrRUbMDokrcuJqpRtADNKepoxNTycL6hadLSdeDbny",
  "key16": "5FzHpLJTGEi1irNvHHJVHke62ct5v3VdNr2p6Hh7sU1tvMWH83a4t3WAHwVKkMmQujXN9JTvWsvJK4q63Wcst5vW",
  "key17": "wt8XtX6jWWmPEYi6G2wE6hjeDP2HoaFxd2yFVj3Lmj25R6XMWxRTWkmZqi9WaEQbyeWsVWnfBfvKmS7JWDb1Ktt",
  "key18": "ofAkvGLdiiYFR1Sd9LqqFVy7yZAFPFK4E483gbtLKWUAiAwtLDvVM8MnVd2pxJ2GFtxJM7xyb32BNmGvC5UD8Ve",
  "key19": "HF1AxLehwSKpWcRaC839ZN56LnjaQdmNB7ik2tVVRmXfe9nZCL5q7EiteraY5TtYoiZurMHi4WF6YBniuvS27bD",
  "key20": "61N8w5xJNaUNLfFfpYS9FvCVj9GwRnyEdMEHXjndmyrpGxzRugGsynF3yaumXTMGLgLxRCDb5U2rnEiWmpi9P7kA",
  "key21": "4bQ7rqqiDBPhHGg6k7DCZkm3GKCbdVhmW6KyFkBp5PEqhV7qjxpMe3CKUB2K9sYJazh2k7GgFvQQdpBathFtwbXp",
  "key22": "5vTPmc2H4FpBgSE5bh2EmrCAX1goGuHZMZVzQysmEVGABhDas65F8druNKSmrNzDUsyEUkL6ETrbQa8hjUahDT43",
  "key23": "51k3y9hKwyTLkeFT9W8qDzVGbh2EQoWMh95e4qxabZgxK9dSyrFDg4QwkJRKcPdyQQYgYYJqXsxBAwfpQzo1zM4X",
  "key24": "5CK8sSdVoMybNzhGMPwvmC1ERnhkcUFYhTChxzAxt9HzoomymNc7YyEx8fzQ2cjaodp2PczmiE3idjiC7VnEfU2n",
  "key25": "4iuzwzavjEonfBFUmPb4Ymq3hSnRUKD3rArg36R83R96u2UNB3drgp9aPJtUGbHDPKL7VBamVx2LW24Xcv15ZEfy",
  "key26": "5CmH8XqGDELy6LjZf1qHQSQJwX6sDffYNBm1EUZX8zggKwp1FSUo2ZkJvs4tQ8GH6ezZbmchPSGsNrt1iUDeZ3UP",
  "key27": "269kkbX3uVHxnatgq1RKeWwr21oQo9cSPqFXNMAYCVquGMKSLFpwq1BfSQWWKZ2aiDP1tgthQa6vufnC1wnUdumc"
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
