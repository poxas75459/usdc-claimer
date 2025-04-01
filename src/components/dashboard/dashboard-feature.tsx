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
    "3TR3KuEnGccixUXspmcCPXbWoywkyGGikBhHqmRUhdpdqhzf8UAFMTt9s1NJW9s9n7cqU68GdXsQLeP2eSfkSuys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y4Lp7KFoqjMMcKWWKYeYa2TxPQEdWMK3Mc2BTwMnjswNfDhg1EWSV2q71qr7VCQkPgP14hQjT1n9BmTdLQ1jBsq",
  "key1": "2W82isCqQKiA5Vb3N6zrzHsD1DiVHihMdTHasXoCiTmD8N3drA54Tt14vEq9YwJoGpRZdbiXyvUKUMsfAw2VRUx2",
  "key2": "5h3oiFk9ELTiKtS76M9zo5ywp3pwZSdd8aHPRmshcZYSLH6JV2bpCA69feq9eyqcNggLANk4cdGFLpVzryzJV9rj",
  "key3": "5mowUyD7bj6FPYZaTf9v58rCPumsZixSRjwWbhxcknZ8xJuz3wTSHvywc1LUePp5GrS84H3Bc7zmoLtNPXUFBkVv",
  "key4": "2Ggo8EmnGXvHAYJqFgJA9wH93ouD3URQg7vpnAss9RUjg9UicTqrWvVQyWt3RvTK4mX3tRbq5kkLxaYLrG2H8MC8",
  "key5": "3gLcfpt6bTbE3MALtoado9bGyzDZJH7G66As6ruSf45ZSA3u6duCnbVeHi6LV3f74pQ4naXmTRJgt83YDFUbEWbx",
  "key6": "5bqYdLc4v3vLPd7Ph3PQdVST5zA1mkrjNfxBD3B7smWNsXtHFpS1ZfMZeTttyKD1Waiv16HRRtJbJHLWWD2iiSyr",
  "key7": "cyCZi89NsJKuJ2CgkZadgqYA943HnK7Zya1iHzFq1tkwehDCpnvUDDMR1bRjS6hjTKwDYc6j2wtASHEsaYqXWCu",
  "key8": "3oHj7DJixezfGnCunEHZRsZBqMfBWX6QW4b1GWxezYvjgvXepXsi1DzbbPg9JLhi1WNvPQKpHdJ9BesEmXTA8JHa",
  "key9": "5rxCRu9GGBwAv6gt9UCfcf5QcgZ9L4bhQo83XKFiDn19e2j3DNU4S3f5933rvmz6MvTVmUX6xQzJMN2zaja8RT6H",
  "key10": "3u5eXUk3XWdDYcX4vuZ7G8ACaWttkYTYgZecUcpLsG9BwPvFhz1cMdRjF7EUwtDmaX4sYp86tsbizjmb6zftDB7c",
  "key11": "VN2oJWKEzYN6FZ9biQ3uK8zqiJhRsqTSRJgyLzQbp4nL96kpAjkXJPepSJc9cZui5phobzsPbruQtzfHYLRTXks",
  "key12": "jcVv5fZHtJKFd5phi7hCa52Qbj7CWyCHRMeJKmbYGFYeoxYypf77GS5Xpq39cJL6cz4inikbhNLpCLgDUuWnmh5",
  "key13": "44tsTWiEmpv566LgStdZs55pa2YfnPyZwayeTUNkKMkkg3r2qgoy8k5gFAgRX9UB7xPZstYLznzha6u8XkBRnowi",
  "key14": "3CSgkgDYyiugEMvgC7EPqGgXfy8wEeJeg4WGNMt2ZrXGBvfy9iR8Kv9x4h2SBkvxUYaTm7KLrjbD95k3gT9izsq2",
  "key15": "7Wp15YtcKsjmFwaCxsKk79uAGvnT9tD7An63ywmGDV6HZ7bRWKGAdenojV52oCTnFX8EEABiufuEnvjmzdPRkTt",
  "key16": "37Gdy1H6rpACF6eawzU7yKsEESWCEGxbtZdhESvAyVcYtmyRLEdV2oDUWtocg6MbJrDb6ujf2wtf7Grn2XtYoYnG",
  "key17": "5MuiLuekrcxan9wv6AMhTZJCnshSSqzt3o2H7mTKLQrgYXJJjJz6798kVny6UEsBW7dYf1cJ3PuULCdhzeENhUri",
  "key18": "5nrb5aV3TR7QVGRQ3P2D6r188LLC4hnsZEhj6SaS63e3CjtuGP5uZGvBb6z9dHMo864gb6ug4jhKfJruLbp22Ei6",
  "key19": "RmZXdnVeZPAJyLvJe2miAEYBghzZB91na8wM8kg3GYVPW7udJEMC6HkaW7mabvrV5SsxWTk7TsQ5vCQaP7c8FiX",
  "key20": "88tndoCX6wbL5nvLvrxTtimSH1nPQgHbSK43FBPsv5X54gypziej8e6PWs95wM4dWMnf6Xfe9u1jBGnFGijd4vw",
  "key21": "2kFkqbd9NYMsuWAEc6N2a7cHU7JziD7mNrbKsamQoFi2ijHLmqKWAtDzbWsE5YRZDn5CLtmQJuFPpNpgJWcqabtk",
  "key22": "4h1KKrDKbKR7EGe518i9TYTjFNGt3tNA9FWFBoXqGo1NF2CguTPsJcdSg6qZod5WZP5GwyFMi2vWDwHr7jjZAfot",
  "key23": "676LFpEYW3wseRk7ozmsbdDwFK8j8wUSUv73xDxeD1aigQLAeRv1vtyAma7K7D9wTRLVkYMAK8sj9iz5z4QxJppx",
  "key24": "525JX9mPfGEYonFJrrEmu9GLCe44dr6XbpCBMKYzNuXfqm2yEZRZ7puQQM4XsogN7G3WvM13SAaDFKSYp8CkFnDA"
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
