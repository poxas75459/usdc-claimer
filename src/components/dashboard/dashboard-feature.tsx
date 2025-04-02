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
    "3s2CriKwyupJrcL1DXp5vxHi7tDHXCFmJrouXJU8YrtGccTJbmkurrqRHZwrYKReCD4HZka2kdBhAFgUAxN9CF8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ooUbiMzkyoM56kawWFun9aH4AkqTjroJuZxBTkUvJsJ2ijMiWxTv22BKbwC1shmF3B2vGsg1CX1QSoerwPx2wua",
  "key1": "4ZaDtDbXmNNCc4KwsCSZ4CDoTz8faFT8Ay6qRXDMdBSuQLyKoBsPFy4ZpxDgpnxk9novfBh862QEfpc32qjwEcP",
  "key2": "2VLvNzQKk1a5JfbXBDvZeYx5VJD6Nm24oyr7eJwZm4guhuPsC2FxRzxBCW3zYB2dP72TJb4R2dt3259tFNbADAka",
  "key3": "D5PhGnbLRaYDXmCL2sUcYrGudn4nqVMJL13fkyV1XA3aWSGcKhP8x4mAe8yDDfxdZ6tq4msYbY8jCJ56j8zHmHj",
  "key4": "5FVeVN7LkcKRdkDnmtNUhFa8LkKyCFR5CbdokA17vCFN4pJgTmEMftzkzxtYhvGFhzPmVT2FXArZButbXagwRuAi",
  "key5": "5wyMaW8fTEunFS94484pA5JuZeXePPnnSdnQevAoc6ixatnTCFgzK6cNXA4oiVuJGsvKeuhs13wjE13RKHGbo55i",
  "key6": "Dxdzk764zCAmzpz291vtmAsnooVQTBG8ux2LsxMt84XWmMpGijznSQDcMpo35v7SQtr5ukSmMzU13MghYPgUZxP",
  "key7": "59Cb3Ki3N1Zeq8Qjicxnk9cMT7ZfpGybBZ6Me2Nucdimo2Te87XyZpcQDiPVr9ESxLngGhq6rFU7cd7CPPQLNUs",
  "key8": "3dTM8d8mBzbZ2sjRNxioiX1jBE2tvrj6QTD7BRN8ZxrmyViWYZxf5NDCn42aU9Bn9YAh6cZRBWSH9Mcqu7MgsZKd",
  "key9": "LURmLLzcnWVAgVZoz31qhPw8jAGVHupPgPZ77r1RS9MZD7dReAka9gbKtUzACauontrB328DBU6xPvx5oy5FP4s",
  "key10": "5zh7AMhSxG4Q5cqRZTBj8KiaXzcCT9chE8bC9mC8hLGD3wwfvY7wwYu75hTCh9XTjyrPyyGWDYMotEK8fwrewMgc",
  "key11": "adZkPk5TzYK5wHJQFdxJi6VK6ka7msgSuwxrztdvf9KDswy55akFcgWAZPjEKYpcGDYZ2mk7wHx112BZtxkntNv",
  "key12": "5hqTwfTL5yzjvi373hSmaweAuF9pqjC9fKrryTFcNWtRDBfJ8v8jGpY9Tpbo15HZs8Z25Jd4yMkCPJXxLvXyRTqm",
  "key13": "5XkEjToq89GX1WUKNAaQtY7FV7XCTXFAUmNchLL5pyS5nYEnidSKZbe9M3EKhJ1UpCGnT9B52dzdvWWChvb2ooBb",
  "key14": "RRf6VVbH9aEUnERpeUgjoxhPgWiTG3r576TKr6MPWVso2PRAqLsr6d3PshN1fRfJxF7YB3HvwsrFVmcYW4WFP16",
  "key15": "6VB7ZyCd8e4VnJsYhCVzfiTS4E473ndhAbLY2V4C1rQXSTiBNWe71jyVgwEw7spQyC9xbQWy4xwG5TD2D2xtBhT",
  "key16": "4mpr5uXrUpdVuvxUsa4q2KpKGXxAWSB25zRygUxZtU22Eo7Ug9vuafencmaGJgAHqDnGousUizPELe2kpNXKbrta",
  "key17": "8X18gN1zStEi6XLA2gqd2oaSNMoNy36iffUtzgYwW7KYmxgKtWejWa1T9cc7bZmiXdffVgbQEoGJvU6mYgdNjcw",
  "key18": "4tb5JCsUjvjuJUQMKd6Bqw4MexGxfwhJDmRYyoAgYPbyEZBDh78tvjLLVmoiY8wyaumvj2naFBdVwuBCG8xAkswY",
  "key19": "2pYqi8T9QLrmvckG8KfTPJh1s58JyvcgAqobCu8qjppFvaH4zYFxqPASqCef1oEMN62kXyw8VooWwqj4MEPhVBCR",
  "key20": "4b2qT1NT9jr9NYGEGnFBVJd3pfyyPJNgFLDfVAhKW4NLHoiSfLYTiNopA2TgErPowuDwMA25SaMzAPgmsfUF8fRt",
  "key21": "3kEaFtiVpmyg8os1A5xo4sovDPgZCCkyuX8LKm6dV2cd4eSZbvFMH4NTPnbgog7Y123RA1vDyzwT89HRN9GEwKrP",
  "key22": "5AgXB4onCSTme9jCqTHx73p4dwGYAfBdHw3MjcXyxbiwFqXxrhx5jNixakbBbT1URRZifV7Hym2ekhbYcXZ2u8o5",
  "key23": "5REmh2KEw7FQdvvvZdCjEQxw8UYAFGoeMjDsskrhFAxbYPb28jB98zo4g1UY4UQ2fBVBcPpQKjobDmPqR8Bq745Z",
  "key24": "3u4bTfhAURka4u6pHHuMQG9Xdjk1uWP4r4pKpRMMzgrkGSpUnU6kaBEkpMCT1ktBQBxcGQdo296vY45LdeaSSYeC",
  "key25": "2H5wRjsiLbu4kNMHa7s78mM7hqWqzdcmjxPSs66YsVNrR5jHF3nq7GSSw2JwBdUucjnWGA3r3vDkW2nvAivzpE16",
  "key26": "4rtfjD896irCTA6UCx2eQUqkQwLAYCpXEtUNY43HLh58x198UhdjAkpA2LYtWSTtcXdqaDKXpaqayZiHxYcvFSbV",
  "key27": "hF4Rm8pJVsXMN7a93agaoUvDxWBRmmQhApvhxSNctuJyzgXwJEwJeG2XCM6ZbRHPx5zru4EuQBTNTiVrXoCdNf7",
  "key28": "5KjsgYxegzrDEhxtveTGgsMxyqQ9eHQK8HALhZ7yaE74nWsDsu6WiVfCXCt1PReQ34KV5ZuLHB1q8GTd2j1mouaK"
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
