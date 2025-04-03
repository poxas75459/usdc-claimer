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
    "2sRqJFuEALVXUjEKp1VhtT9yV9u1k45BjVkDb5TM8H49QSsgTzrp4VP3gTMAe9Vcn4BaaGPaLxdWHc8jqK4MquWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wxCPGa3J9KzWeAyCbVrboGXGTEUd6CvAfNH9pVazVKJFiihKWLBQxZSNiVVmM65FXgaTjKwwAnwq2ubBncE6ybc",
  "key1": "5mpwqcP5FFFpCXHFGbQtwRdj4JjdFWFV6DMpNmj1GwneDTHpYycfok6rRBLk6rrATA3nu5S8gn2p8if4J5DbJpHu",
  "key2": "28x4NecEQqD1apwhfsTN47WAVQ2E5XZGGDuqVe6PmAar8QrG7YmGZ7vWBG4GhWqfZoV5KJLbatQgPwphwLtZuo9q",
  "key3": "3j5YGksPszr6KCxMyx6aji6tvLE6qQianeu4uq4XEQvjzaCGZ9WvCpxSeK1bPK4V5EoZ8GxMvr2pk6Vhaw1WtwtM",
  "key4": "32JGo1KPmX4cTcHB5o9coHBtoczyArcKmJy9Q789pBNCrnLw4CEcLPNkaLShu1QBzGM7vJYAwzHGLyY4E5sUjnWV",
  "key5": "FzRcLDRZJiAUZRTqKomshSnQPK6fUZgfqQYuRDdoGwfjzvZHkD1XSqFcxVeRcUye6A7Ep21jW6GyHC7nkQTXUG9",
  "key6": "3h9pqGxUA4CK4XCkUw5jb4TVZxStJS3qZ5Yk4FLggDv8sH327k7n75tNqri8k2eb8NMo32BCQ4DmTswhEcLfexFS",
  "key7": "3BEY1zpnrhGpbFtgDXGXPbGBv6F6DRQy4YZDTAsPDDo6Fo6REKWtBd6tgMsYwd2WqmLUUT7nCeC5pdr5eAtAPqXR",
  "key8": "2FyC7S4pbnb9yajbMAQjuru5vXUw29G5L6gT3VUfgnXT9PdgC9LgnMYbPexRQPjnb2PppeN6X7ZUeJD2p4LQr6rH",
  "key9": "5EuFS5vAQYBjMaiYvMxoPGrcoG11YM72TRh3PybtEvymT564WUMNSyHkdxo3Fo1kbEyVp4CoHJZxJ5awh29tEUkr",
  "key10": "5UjGyL7MLxNRqHtrDgHgs7AZ9hDy8E2RJ9CwQnueTX3iwAUD9vLFnqn7wvxL3r9QSZPzBtXkZ8jPNerB17Vt963z",
  "key11": "SjtawU8r66RNpVWQzBfH3o5fTSeyzrEZUSjMzmUQvnrVcC1vi224XawSLdQxxxvmyaPwMHyuM4vbhuTGWrfy1GG",
  "key12": "4yeT1wwMgn61HfZKAzSwjNXehrV2zV4wedB7yaNvmjrAEos9u5oiYggLP5AVx8uFe8kzRtSNgYUC1EdDVe4NMobn",
  "key13": "3Hpb7ZPa4UxbUFBB3dhNgeMJFkz67CFi5V8UAwVwMJKdr19NaHXixCyqbv2U26gGZaGWS1xaAoHn5kxpK7jrA4sV",
  "key14": "46SupCpJGcEzWh7SU5RUXGMhMTJZhdowPmosTQg2vg8zTRrX2doAMiMRzKHxgWAGY15VoKEBF6eiC2ptoqVkyZBF",
  "key15": "5QjDrg5Sfd9U4NQ2riY95Zwmv1jKXmaNXhrCVy61KCGwZtaVvU9ZQDtFhNhpSiii1zk2SVEait9uTqG4DBDxb3EK",
  "key16": "2rQ9GbNeGpQuhZjFZJJotwZDPcmhHu654FX6soatgii3h2NJwcvLMWrp8DsF19EDYPi1jKtPvVuwaSDzkavs26Rp",
  "key17": "2tJY5usSNuB71D9cBSYMbfUpQedK5zAJjmQQXFq7nEgph7k1hF8E3cypUCGpgeEFJ2kasBUatmQ5zkKUwiDkcFpf",
  "key18": "2tnyY7QhDCT6dq9CDJP523em3jbaWVq4Yk2CFktbxiGCoP3ZzQHvEBtNX21r1wLJ6AET5LH3wM7MdZ8jEufdFJEn",
  "key19": "3FGVtLEpgKpY2Hn9EayZzGPRhzTDJbQwpASHsQLo9hGpJdfypGY6Afv7fjbNBEo1sxhHfqWZtTnciGaiVavsq91Z",
  "key20": "3NsRGb6MtxZsF1rWM9ztnhxJvY9SUxtkwTnYcfP7NCeBJdexqb76BrZBrnfqexhwxq7u6PWwF9YvvU28GqQ8c2Wy",
  "key21": "3FhyUxT7UoxN8zgKiyMQhzVx7gvkWMj3pDfEbHgSdQNNK9XpRMmH36xG7YYS3RCESRkDVvUdmwtQuJmMUPwMrm3J",
  "key22": "2DFtrhxJwRxzq2DeL1Siva7rqNT1Q3qy2kKmxDy1iC4ZgjJY7hEiW8qvr37Lcdpre1cvMMJpexoeZZp3JH7TomM1",
  "key23": "5s925qdnXzUrmCuCAisifBrNTHLx5f2cZhUJyygDjZG6JHvU84z4MToDrMDoxkXF9vw25piCWjTh4WUqUU9jqonN",
  "key24": "tXhSuHbyBT3fsBNot6qFGfBPvM9vG8kVPmVNMwYx4f69woRuC5J15dBXKYiuEWWUJNqH9E7MBGDL7GASFXGE8bX",
  "key25": "3knG7dse6JuQrTAFHJK11TPWh7riVFnB71c8CzvzEAHNL9yQctAKCowABVuxNqR6V8XiNeDGrtvuCf8T8FRzh5eq",
  "key26": "5NExGb9jyCEB8xiABPS21TnzE1v4HaU2B8zvWwgoLiUcNvh8mGyauqv7r5GtZEGz6jZ2JkLRPLJC1fmZi7SVPu6V",
  "key27": "3ZQVMMeS9B5bpBhvBvLGy2sk1XkVyvaKRvuVeDSfpbZL4eh2QNjJfVnjsCSHcNGoVy42RKxmm1a26SrHWNamT1i7",
  "key28": "3L1C2twU4zo4QdeGUuRbZBnjkQMvYB6QW12CfnjMAu7YLsu8rGShhB7G2EjapiSzsjmWL4Df1j3tGyuBXcyuJHZP",
  "key29": "27vtgcEBX4P1V1n6zpW9UB3ji1K16nsLDFEWy2c8U7rNMxcRftEScNCGRSJcYfEatthWGXtYNz9avh8D5c5HTL9Z"
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
