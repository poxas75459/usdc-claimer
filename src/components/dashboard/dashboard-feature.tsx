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
    "7eXp11GuubbivKT65fxAvK8dvBTV9mFHkjhjZS6j6xMXbHUTWgrsrnuvcpHt4LFTXWdkUGnEquK2ZmCQRAx9i4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4psjbiTKLnpHQLHrA1ZGqTDDDAeAMVQx98zAeY9jdeYPAg7xqepGfTt1EJgbekhmrRbHs5EMCBgbH7vMw8nx7bcE",
  "key1": "76oiDu4wANMhSuuU2z9zkxnNVcdieuPP6BqUSSR7pmsAxk4ptGr5uuvFh5mmRkg1vABu1iVrmh3yynY45K7B2hN",
  "key2": "3SNSG4F5MdGNJDmcD6HUg9xE7HzZ4mMYQ7Guue6Ro4SxgSVYmSCTSeZcpHeB6AJciyLj8J995C7Fy1yd2FFz7oGf",
  "key3": "5iJydyF91YJH2xhS8Gx5rtTvgJ7TevqjobXTxuBYsQGM8pgDMpGRCtg8oQfqL4gENGey5NwdZJvW7sa5wwnGLQiU",
  "key4": "2cDJEYAzuJgg36jUtGcwkqDPAXfAyfefp1nosmWi3mFyPsXcwr7fAnqLnF1oEAX3rNEQTqGbdSoJzsmwk5i8XrTS",
  "key5": "67aoVDtb7qSv7SMR8R7FVHX92F2o45Zgr3CUEUcPvf3BaGjyyJdyaX9Nim8udxjoqAkRP2mRKsTNCp4SV1CuoHjm",
  "key6": "5PN84WhfHcmpJYk76BHhQwJ829fb4cnaCiZbZnzYbcfZqiygA941ceSEMp1hWeBNE68EfamyU1fAK6APzvCpgYuX",
  "key7": "4MFNgevauR4ZVqxgKBPVXvNEb6dtTmt1dd2ifcvTJ9mbGZghtfUL3reSEr14FgknZwdnM6sKMUJN5yVSqAbvhwBB",
  "key8": "59oWGmh3hQJToVThVomvACge13hAT6qfSYhoPWp9HVLWp6zsRVoq7bdkrgWWPYTKMF9H9UYR99GcMbt27hsW9Sj2",
  "key9": "3GggfxrCR6scRSXSac5Rdvjc8EEbY9c1cxkiyvVboAq4vCvwAaMkgunzWJxqxv6jThvCMZKjWox4UFoJpCvRtu5R",
  "key10": "3eWw9pFZ4LSLaYeArP38pwdRXcMTbjX26iCVNR6NVfc9AuDa8Da4aEzPaLnCXN2PW13Qxu1AbvFh2EGwxQtuosVY",
  "key11": "3RZjPLT7fzuW6S1AYcYuV2ZYBCs6TAJvuJnSL2U21kxve2ymDNTkzTRhXHP7FW3gU4bpJRLTCg83bNVope77vo7x",
  "key12": "35yL3ht9XTzaMbbymoGNoM2QSbyj5gxzffNj5kMvghyMJv6x8QL9tgcZt7gv1qntXndxiZ23L2Dz1jcdkC8RqKbB",
  "key13": "3w15iFg2Qb89jjXpEKgTVbgLdKeRxKrb4L5zAkN9Z8gJpZwVY5yPagsujA4aTwHd8ZPX1B9zxytz3VLAd5SSEFZU",
  "key14": "5tU32VrBKFs5nuXwWRjEQ7jXzqskbt6Swb9FzJ2mbqAAfJBhkL2Da3RYs6ZcVS1GnPaqna2Z1VUYKqofkNNmTTjA",
  "key15": "4pgfR2CHYprjx4BbrjCvPyrWf5zFzDox6rAvU4146bGmP9iC9TpgUZsXe2cJjoKfu5PKfzSUS3vUfvNCCAqNEj3k",
  "key16": "47nVmxhvKN2UQbtasVh529Eb8XBy38xx8Ho5Vodgw34k1YaJw7QU51JPRbAStNuQpeaDxFnt47iqTHbywqfEgJRd",
  "key17": "35MkHtEmpQtNqwLS4szNHw6EChgfAENGg8SBHubeDMZudMxzYenYbAUCEsmSkCoyf6wLM26Pb8LxeuD6JnZtvAM7",
  "key18": "5oTAzJGtypJgYvXrMyzREQLymHVEQMRui3UrREWoLfCx6w5q5bBKZNEpCHP1tVozhrbXxqon3Hy7kqKn5avMi2QX",
  "key19": "2bca5kdrfh8vzn8vsB1UQwV4s9R5qpq1gdQHdTukpqANjhKwwUecfqXs9aAAm3oNEecuCFisccXzaJ1NHVAxN7M6",
  "key20": "4L8oe8TFYtQvf3wuF7HnyaVNhbjbdrrSD8RvgbtGCPpzpprgRAUSwWNcr31csR5kNN9pwHGVtw5HKN7Ump2psfUv",
  "key21": "5CUqg5q9CUCy3dH7pCME9Dn5J4SFtPtbtHhZ1eJnEknPXkjF6za826dgiv15dNg1GETApXn4CyMvPV9pcdpe3ave",
  "key22": "mSw45oXNeoE6uMHfYWRecyGTujFtBLvj9xwKB2xguTsPb3ofpahb6PjJfacDASi4GuJST5wM9kJPk5rsmS4QJ4S",
  "key23": "33d4w56gnRwWys1tdD6Gr6AdxGN8L7QJVsvpQWQC7svqPmJj317ddzcwf1dQe771q3RfPbnFpovhi4iJxZckL2hA",
  "key24": "7Nx5HNKnfQox85T6ypwm1nLzJx7bneoGsfa2x8VqsuTRm4wTQzKUtze1GmLhEMTbh7hDyiP6tBBQsU4Gbooj6Wg",
  "key25": "2U8bcoA22xdyuEr9gQWxSncbK3QD1Q7KdaNW5mvqnFY33S3sa5wP22p6MMTCKbePbbHT2eyjgjohq7Yua1deNpYG",
  "key26": "4JYpsfyrudiLzfbgZN4YQy3drZyzpkXSoKy9pKnsXDSh1PNxHAsuXftdTKoeaUY1M4SoSn6kcUsK2JwLBSCnQPUz"
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
