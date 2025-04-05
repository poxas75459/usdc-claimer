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
    "49v6r95oFbiKbjzkzn1TvXc5728ePv5jcAad4jJfprhFwq8mafpQmmfb8fMzmSAKFM3RQKNZP4jGrUpHfEtZxgqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66qbmmmEwsPPoFS2REaK1VahqRWLyMgFdNTfJrQ7zaoCPhyQbNiuPGysPJ3Dg8h6Z7AGpFwJkchLxATjDKZ3uoMw",
  "key1": "2dLzEPGtBqj85WnXzKaW2j7Lv1PFtUzyvTsQ9casqX3grr793TNdparcgquhRwEkgjUvCZaPJg51fo9ukWZL9KCU",
  "key2": "3HfRwVw97UtCPC3pkiFTNsLcZJ6oputknb39wAHVCKnXsHVq8BQkD9wnWqWoiPLW7acMBiyUG3rPdd8LF5fGLPsQ",
  "key3": "VacTyH1zQ7gbP526nAmiaR6p9GmAd4rcobiMYxuukkW7oMfKLHjd4kZw6MmzcLHUs18c5yiY7LD4WpkkaoT1oqY",
  "key4": "2u7fhJDuLVVUJ812bTu36enHiLs7j1oSTWCUp8n6n9dHMB3pMfJQY59yELRyMCU77T6iHt85TQoZ9Wtd23xo8czE",
  "key5": "4AswNrTZLBBPpZsvKf5fwen28y4Cq14JeTVt2k7ddV2Jyr24UdFZDRLaNh4hroWdYMywHaFnoyD8AVjef1XKowau",
  "key6": "26hoGTprRLnxQfhKE7AsovrVfx1LRMTyjuzUHHHsLDQj1oXgHXVSE8Es4dDdxqAxEDWvvaLJewDxZSEt983XnH6c",
  "key7": "67M744hpGK2qxDdhDQpcY91qV7h8LUoavitsiVr88aBf7AdMu2R8iG4nwpJzFnYSehkvczPbrqNNWK6LuqKC1Mio",
  "key8": "63SvoRpBwBtvFcFU7MtW4TpX8cRbfSKjrJz7a55XqmwSytLfJoaunZiWcux5zvXeQW6ehWzR6TRv2Uud457YV9f7",
  "key9": "41F8ouiKqPjyaM6PVdNprkkmR8QcgxoaMQtj3eqh6YMVixYUrqHQuwCAyGrybYBfyZokJnYXYMC2xRzRGSYSQqtW",
  "key10": "2eme5Ba5dx8BpGudDxNkyDLbfa35aBpZyx64YFd1mJbXqBumwLT7knWc8czhjTmesGMmkM9Z5JMQ2J9iwNDaZQQ8",
  "key11": "tbh6xJk7CEppxFSu7jvuynJjajHBa9XEMQgVRhPtgpAtRjPftAFfPkxV6Wx5dt112BhVGfmnqCpxDpuUmSYZ3Av",
  "key12": "RBzPb1Xxu8Etg47yaTTmyZk19wqY84aov5Wwg7Hehuctjyg7rX7TMnvesfwNKBDcXTYPvrmSWZ48s3zeuUcFreN",
  "key13": "2HJpoGJBsSqW4JR92VXc3knGpb4MkTt8EErPpuLSahQS94Ey1xJGqmXxs33nrQJhHkA5zG31nx3YhPNiDMT9wABY",
  "key14": "5puoPee7RGvRv2uGva72HAmnepP1u3gwtnwWSGS5tDr2Nkfsq9hNhYwu2ue3gV7iiMpteAtDVS9sUFSW5HhrqGrn",
  "key15": "2PtkexR9CgkGvL2U4HAii3MnsFjy1aDfzDg4rbCs5oE1fbRSZPXLDLm4MbPedT6eYgubqYv15uGpCfzBdDYeKksP",
  "key16": "4YcmvsgQ44CRhNsmsPWvTzgAmfx78fQybQYbSLF9nF9p44C2aNVFNSZ7NUAMv3nGvJ1t1r3zURzhX6REQpNJbgcD",
  "key17": "4dh7ELhGhKS2XFnVuqbyXKejhzzavo7DNmdrxJRYpSTHmAqwQ3D6Zg2L6dmCewdCuF7agWDhhAdHgXgQCpHypgui",
  "key18": "27ufQg9oHKa6Vmuyt7ViQ7MDwPPsFjZRrc1UYUtTRyu8Q9L2eJUWPfRSj5vntxKuFUY1TWZFHgtS89QDtPqA3v91",
  "key19": "2pq2WddZFJdkZswKbgKP8sjdoEhkz1Z7DQwvfeH8hLFRyYr9YNWPBeAAduyeHMS9kHk5oDsTMuHRFDczRXQHhqFw",
  "key20": "Ax5waPxJtrwfxYC4qFGo2piAJorezVNEgTeiDBCoEdxSc6oVFr2kyu6WNWityPWGW8NzAPbP5RiL5315SBpQbzt",
  "key21": "43XxwxfXWC7p4awjWvNsmoGncDHn5rgn1sa8r8XftJUKtMVrL6cnKLPGWSkumpST4voKNBEecVuLmxHxQMYsvrkV",
  "key22": "3Exk525BebL4sCUaBLzKW3MGKiyzFRViH1sRzeFqfAvR7zemrzNRN5jxgMZVXu8HS31EB9ZKPsFMaENABD8syzZr",
  "key23": "4LQsYoM9SUznKdbXZi6TgjGZEgbmXCXwmPSMo3n81LytBDPaJhTgCD3L8aCskkxciYDSjQjm8HF6DXy7pzC3mGPA",
  "key24": "2VJL7Qv5tcM32jUEAkKTSuZKj6TMKDJmCW8P88bDcNJG98CJVa2skeZSofLUmnQm8Qj7PDv6NQfta6YZWws1Dhmh",
  "key25": "BMvAZfn6Wn6HoeKb8ncT55M3z4VYqhEJC2xBeP2QWbARUEJEeZvvxceiaA3M9cAxN8Tpvxizw7SF8itjPaKs6yQ"
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
