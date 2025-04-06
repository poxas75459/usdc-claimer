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
    "2GrCy4w1fJcpTSHVt1rTLy1npDzTvn5d1wHsZzEQXVjpH7fYAAx2d6QhBPmaLrFGVcSDLREnz62vju9KUobvVHTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C4jaKnQJjD2oM2J5gDX4K5jxu9H4KWB8M3GmHRwEyXBwSZyQkPEH98VAixUvZNTNQAghz4WT2DTfXMCUmVrzGhs",
  "key1": "59mnge6aBbpdKnjjVtnK9fB5ebQkhQMY7UkNUWCBjq2d2KaaFEXicQbEVNageXvRtCqfHScCpywYaUuWaJwbpwzG",
  "key2": "7APVJJiPZQ69zgiiB1HUEdSKk49T9xTPMMJUBTjLJYNDXiN7TmMWFqRMWvpUp3kETTyzQhF99oKUecATopYHSeP",
  "key3": "GecqHDKJQrEFLqAgLEmeQX2bYkGkPJtvQNbB5yCQSZB5ScR17jedgb2pTMt3HfBjbvTp3jf8zr3Hyjq4N1bMFHz",
  "key4": "54kZqKDCwWzEUmA1FLKcZkHM2AeRi2t2NKqQG613vKZyDndaQYcFbcQ5RYmmyfnKBRVB61RwwxyDHYrVinHnmCfX",
  "key5": "2gc5oGouQSpKm7msQhiNi8YVvAZG97VXecoFxnSTAgLLhE5VKdf3bP2GtXtBhXxbVfcNA9okE4qyUXDtPYCL67L8",
  "key6": "5roqrLDekuteTQwCe579W6hZh7PtKEQhMTrYEvTmSGoCA1kPbxYHAke3D6sdLG1reNz5nQEfvdx5CByNKRsEnG4a",
  "key7": "2DBhwCXXqqW1v2jtxYgPwMYkXN3W7chZMu57z541KWKo3XrDnnUM2PxiXckCfu4PK1sPX3ZwuB3QYzpUPkStXXmd",
  "key8": "4dbgrfLDSqMt73nAYZTo1AR6fRPuDL4jsPePVvpt9sw4uoFP3JyzpKd5evebxm79z9gjc6NpsTdq3FdxUgY932wx",
  "key9": "56QJrZiZWRu3mK75gpJfoq9rmPjT5PjmPz3PtyjdCZBHuUD6EY4H9PPQqwBFhU4upeNreshJkLpdNbSezNwoGGuw",
  "key10": "4Dq8bTrBJMULaq78RarQFJrNWTr53VL44PSusFjcvkW3DytpRis4puFa33hxhv6tZHmsRsTWA4xG2xrGS5dBpyu5",
  "key11": "3db3tmFnow9s3f6uy8sbxKYYVQPDfF5RsfFvxmntGjz2ysYJ569iEEeKwDWzYHYTn2FAdS4L16vCzPgVe6kZNiGE",
  "key12": "38VqrtCQSX9LfrAmrNs69Q54Wm2pvZfHRE75zwwJNjK5ynAdrdJyiVKkaCVb43FVp4xgeKNAzV2xpUF92tQe3Sva",
  "key13": "3hkDUxavK7Vngc8LEQGXbtb6zCMXL4bJfpbFVvUkN9rQu8rwQUfTewBW4XsyGFX1J7eJr7zERu6kbsu9E4qoUsZ1",
  "key14": "FKi4LsRBHB24VRNnvs4F9idV5frutbubuJJ4u3hr8nTQZon8nVRZE7QrFxE5NdN5ogewxL9CdrbQpG6X7yTXoK5",
  "key15": "2u4ogLRMN59d99yGJBjwuJr8e2eLMZjEwG6Q4V9XuNom9nVkGFmP6N39Fmp5kqqFFoX1iEWptJJ2MfPsRKCpQ7Pz",
  "key16": "24H3QVdtbT5URAaBAn2KmWAQ1oobqf2y1tVRzbBuxjCtgBqRw8V2PKTD2Xp6t12UMLFNqgS37s2AQUecnhphc2Xi",
  "key17": "3JKf5Hw2Vqooz3uLJSUEiVaTnSx9fmpYfsBYX9FqR3RCJQpgTNfrHVxqrpETgEjwhuEjARjmsb3VPLYGtjQ38VkM",
  "key18": "5ahxPAecCJbcBpMP3e9TMqmbnWii1VWCtfkvei1qB4cSXUyuEC9JRTyTekZxayBECbBLMTEYKH3MyKzn1iwdbXrH",
  "key19": "2LZvs4nC8rU4NqGKMWrssxmSu6yMoFKsDe8Qft5EHLcgxkVYuhXKrzXm93D4LtvzkHub1PQ7dFxbVPCHw2bRKryQ",
  "key20": "3BLBvGvimtms4WXsPXkUiFrGZvBhsBiMuJ6YetBvFdzgMjRJiAce4a4ohT7cDsNjTL56WReNq5vdaJNecAYtHooJ",
  "key21": "641Uq15z6sTPjrBNk8paRJXvs1bjrmvta3yc1nFT5mXQeyXHx54cJ1ozW6taMhCxLczW4GYunQTkAt5FjLRvdEu5",
  "key22": "4wpoNoGxoexbpYuKmsF3SGUbvYo5t7JBfjtVJJJvx5jArMrWqQYwmR6JpgUr151iFtTQyTwhsEj3Sy3BX1Wg7kV8",
  "key23": "4SLXkURxqVimp8zJU6jxux2wn2itK5fe3XbY4zuVhUZCx6H6Mg66bmdLwTMfRcgQ913kNHfXSQDXXnux1HZLRwoi",
  "key24": "2j4iGPQtcCjaASS3Hg22NVA4aoxiPTfPmbJpT4Ligjipvd1Q7wprLvoSTS9gEehwqRfuKefGLC2Z1fpYTtzcfvai",
  "key25": "3sDSjQo6AvyEwkgL9iunWauUEoW3ASPmseUaoPtM3rKKRbEP11BjiwHZkei1vQ2A92RZ83HL6aQHTWtepg3i23UD"
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
