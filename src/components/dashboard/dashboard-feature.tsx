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
    "3tZu2FfTdpkNAYBGNzqjJZb5bJ8cANBDu3v8DUUipq227vyGAbrgYQ5zwdUdDLZa9C8g32uPpWzCs5FyxhrZggHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SrLRoug6PeKQJoeUTmYG8J9H8UXUSoJU5gsmeoZUcSCmRV2fBVb2D5MFCta9JyUfK3Ash3r5VBsyuhiAxqdYtUY",
  "key1": "4zrxAbQhebjbQ8Lg3bXrmQvkqyjQVwk2KF9NwfWtBuRfiNGjby8WEUjx4RBMtVchcSetVDA1w5siThY3fdaiWgft",
  "key2": "5jGjnAePpnPgrVAJaa99XNKjVyCyi3XdkAGT77jtTiwJDmSJdMRKjHX8yxZopbRtgwASGFFpPnNW1d12kDoVGNMo",
  "key3": "4MuXKT2CP6M5bVAAsKHevj7SfQcPCXLnNR5yRwta443ZDdtDztrauheytSodPRSfUQ1ghR7mrWQ89D3vVB4fWgAB",
  "key4": "zo7FoAHvkwY2XKuCKrXV4mCxg9HkvPbXbJSUHsDkseZoukXSZobAWh2d9Jgac3pAenC11XrXyuadjWkAsmZEr1K",
  "key5": "51imBZjnj66yS1hRnL5oDW5UQS4RSKMtmb2WjSzQTYZouAd4UMKVji6Lx9NsGhzSicdPF9UGnKAwZMW9Z6HX5cHk",
  "key6": "3PBY5WSx6zDpcUfuTqcPRina2kseNjotX5x3nrL3qXto9KX4FznSVQpGRYSUR7QaBte7WNuFydYsA786JxTP9PsV",
  "key7": "zEio8Ytde9JcpTaZAJp3WDS7U3w4CfYGATD2cX6BkbyKcxiy6QYku843UXQod6XEVBJ4Yvtd895NuW41t2nLUkb",
  "key8": "mD637oYzpwGjk8TiimBdsxkinXcg8CvpoaSGpNa8phXbBQLS1rLXW26K78ce9NoUcNyggkJ7tZqZd8ZxEF15525",
  "key9": "26sgxx4hsN9G4rnhyvSsvkAhqNoGom3C2qpcWkbKxEZs9V3mofomeRoNzkSiTWncxG3tWRHTwN1aWcZtzTuEmrxr",
  "key10": "QXQ2uhKfNi43F7kJajK93xzQXUod6n6QD763MoYwHdiJLbQwoeKS8VoQWKcgfcddyGPrLSseb1F4jxzLwanH9bB",
  "key11": "gmVRUPUeWKEcpbXmCgMrca8jBEv7RXpmXBEuAPZ2iX1fiEwCF6zYj8RABDB2jAWxsqGfzFjtShbirgFxihyWxBJ",
  "key12": "2BggcxFVYyeqcQ3dXsQ27nFnUKATvCxULn9qWtwrDwy16EGNTXYYYKqNi4MgfSXzkzHxKTRkFBmcYcP9kzGnoUb8",
  "key13": "4LLTCiKXmwqJpWRC9koqFt45jV7ZAMeQ5cUGoZTLYjKTMx77h8akgm9LAfpPk4XQsE3hzXK1dpGcCCz7LXxWq72i",
  "key14": "4VFbWrhCcqK4MnRhFa2Wu2DyhEBLs7wsxjjmcJk1FCtXjuEp5g7QnHzfeWNhw3APSHRj41Kt5VTctNRPSPTEwnXo",
  "key15": "5KFVVkioBASxC4NXFpSjkARPvdFkuvtE1uriyvSjnPnpJm924NZBRzCc4x16bz4QGWkXi2i9fHNLfhUzgXEcPiMC",
  "key16": "NyLHo8qBKwKAZ3B4YnoJ43SsfdeDogmgvDoJQ8z2AqT168VMJr1QuSuwQ6gdbPRA3MiCshoq412b2oGGCQUuPK3",
  "key17": "sfHGGi274dGVKQeJ33VkYvB4X97pzmuByu3Ca4TRJqbQLahexvkZoH93xnjjh41GqosZctsq5grpytfWgTwpbWb",
  "key18": "4F6aBk8AKNbDFru5goAZSmyQbgqdum6bD3tnFTJoWh47AaSSUfLeQFUs3niWHXwYzjuw6bxgjyusSwQWY5ToUgxa",
  "key19": "4zy8sfMagAB8VSnUGy2gKZ3fSsrW8eaPcqszKxemegKVnnZez9A6syjezLQ2xJ2Vv3qJm2aYLRPDUhsCiBd4hiM3",
  "key20": "4qJvtsRec9suMZzerD2uMG8NLWWZ6ZduwzNNQwWvafxDMVWiCdLfrjGjZdyBPXPNMJAbvEanHwGfDhEeFg6dm4xL",
  "key21": "KxVi3UWSdMZLAGt9ZehYLSSiP2J9ybjg2qkR3V48bqgU1ZV2LNhmvSYFdtTmMUYm4T1mSjTg5WAVcQjujXmBsSi",
  "key22": "48MdCPvoFifnkQjauEBL6xEBV6ykJacoJyst8GYaX86qjM51hzktLQZfe7bDK2op9saFNpt55cDCpfHzcsoAJAGc",
  "key23": "4mq2Tf5XCkLdwVLUWx1DsYtDEbe49652Rv2MDHpBuHMyeE2wTBN29iLkSFVpDKKRfRA5oaxBqxaJCroeTWu6K2eD",
  "key24": "4gdUNTP4iKLufE1aRHSnewmkx7dx64WSJZ4nMNbWVxx62YKfFZ3BTbTJmMF6wmNbbLFkRiwKJcLmD3Zr9t2usvXr",
  "key25": "2xvApUnZbNXf6GKXF8hhEgzbcTfuc19iUh68iFUfB2eXe3QMYiuBZi9aHdEegvoEHVrC2GyG3XfXUGncLBidjfvB",
  "key26": "4NpHKQW6i9MnaKSTodHE3LVnhWzUpvt3ikFAiuDirFN24sv4QMAFGKdo9rJtHogtCYRdYjq3LxjAxQPermixfYPR",
  "key27": "dVRZTidS8hwDstZ5m66cGxjWneoBzrkBRY9iX97AKhDmHJvm3xuXQhEp1Un1D1eT1HiwtU3KxjAk4EpVrbYoQeq"
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
