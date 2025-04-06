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
    "28py8rA49Da1MnHeh27KjgbWdM7GYGMUeTuWqCXgombG9dsXBTcxzSX1aRtzJ3YMNCgMFX4D77JiQ8TzyicEEdJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pFUxSNzHmU2bFr4cwRHQgAmAM2c3tm8EXzPTg4kueSSuXxZHKXmDxXrHMkaAHzHVM9tDbvd3FqfKFyvEUcUSxoV",
  "key1": "5DfETaYu99HhJTQirfeAFnq6rdKiJNWXj8WqLVx2wga4VJxLBHCdBmDc3j9N4GZ661pR1jnBbcYxWEmghMR1UM6n",
  "key2": "5SHrtDR15wf4nG3fTavum3bMqA8ZZ5Wp7bNxMdykkPh9fa9Ed2NpnTwPibLjZ68MM5ESXkwqWbDAh1WaWJcBEtvt",
  "key3": "4HyM9tZAGdjEtSZh9wzP7owhjToR4YieNpMt7YJP699sxmDgrwfELZxVGeu13aJn3fZFsZ17AtdS54S9vBQvLuKp",
  "key4": "26jRsR4421BpxENaZXWTmCRUWx5yBfgbeSLSBmjKggCK4CejCyiYqDunL3F5eYXQ7tuD1e4vB4sXfG4XCqJJSjpk",
  "key5": "2TPCZjhdZeZ7tEXiZ6ZzZqNkCC9vd6tsAmV5waM97gBctLt7AvMJFXco4gyYS9mgsgvHWesxY6vrU5vDeJAADcqq",
  "key6": "3PKqUwGQ9gTeNAYxP5pkHu4ME8uSpV9yXxh9rSJSd79WHyjcKPoU5KKpRy29kpYDWC2QcvMkH3Nf7WjmvQjVeet4",
  "key7": "3G9KgcdcYjWtzA6KqfcvFiwX3oKhKyUNWupXtd5FJSbWKAmyHbcsX4koiw6gBVJUGZowXZP89PwzDYmEMpky3tMW",
  "key8": "4oWkvfogSF5nSrVfHfXWWgakFuMfHa6bFvp9vTBHchagTzAjNAsSvnnDFPEqKXKBwGjmWmwCEprsA3yjr7BhqjGv",
  "key9": "EkVVzevWSmSYc2AAPZfPDyRoepMz6mLL1LWJEJyr8XZQqwbegbRBoZdSEqm5gEh6axKGuKAxNeodfBfTpcpet4H",
  "key10": "4aYLA9tVUQxn5vLCkmwiK8eKe5a3qR5egjHpemuvFr1w5aAi6jS6HSL5guM9ErWuSPx92GBwraSyQCHWzTuxm9yZ",
  "key11": "3TTodnFAJAzqRBGHne25rZ3tyFhyDf6z42dZiwbJdaatrAP9SvwJNfBmSk8QU9gcR8vYG2w4RrpvXtcQYPBQaMgU",
  "key12": "2ev5syD6dD7wSVn45f6VcLnD4fCBt1sQEf7fS53GchovuPK4veHj8FjYdFnnd5DcvsVbuL7STsRXUJuiffErQooe",
  "key13": "4vaTdJbUcyVUTRdE7mWXgmh7mg7axhtTXdiEbPa6pW2SRcLwU6zdne7SB25esAdVXrEgchLga67Q4VyuC5N46NcH",
  "key14": "3vgFuxrtbw3hMMwK8ENKW7dmMisnjDCTUE2D5BYDrQM5xWxy8xzPsqU71znRfofcbxyAgwcwpETJtWoFhGcWcVzK",
  "key15": "5UGGAfFCAtp8iTkNAaZbjPA76h9vW1HCNv6ix48urd8ipySmeYuCE7EmRY325gVCBUFpWfs1V68DSvdqr5ddA3bt",
  "key16": "5QfxH1A1Zn5EVTSJXs9kw6MqqteLJy3mMvMemHQ4rw4GRT9GfGi4GWE7We6cC8LXjCFgqJx8PWe8BrT8WvcSqQpq",
  "key17": "2nHZuvHHAARbuFxAbj3rCaCMBn3fqYRrd969x29WtGX3AdTDWWyG5HZ5Usd5p3rSCTnkWyQd5nWgqteSV2LujsNn",
  "key18": "523iEiukyW1bDshAwxr3PmdBFRNFKXdYCk391AGVjAhnK5Ek2Mkag1WYqqsP3xD3JqfzX2MWLqii5iB1q7YrP9DV",
  "key19": "vFzgtq9VjjBueSaREa9ct33QeDxaGiHue2wHjvuEsPp8tLAQLK9SQGcDxQ3pWc9cYCW3AmPGxg9dwQuiFKhbXB2",
  "key20": "2Lti7288BRY4huxa3SCEUrC5wy3zgKUCQAytn9H4N6JGE7wgYSCGeJMPMdJzh1DmmuaLRCu4CuoGCzJkzkgaUu4J",
  "key21": "46Mh3UWABegMkeVJcdmCp12k6GXBJxebyJyoMTP1pJ4jFS2FVRVqv3LSGDzDJLFTXYiY6wupSJoaysoVnZEY6tYb",
  "key22": "51r8Ce3DnT1ZL1E6AWjUCnsPV9oYBUtJ89uW2oHMPffXENQA6D9R77urJdguPZCBVfGAgdHji6JW1qaoz55hhvXE",
  "key23": "24ZAoPhBgxQEHR6A5c1PQneKprbGFQZSHKNZW43HAYQpiNLABcUVqSQHEuyjbx5qAQPEtcY4zvJCNP1MQR139xPL",
  "key24": "RUWDkkdPRDsSSXaA7wf1rXGgCKW1drHTpM1CsmrqtmoeHHuzHNg2SNAbQTP9W8ihBY6tmL3T1Dy3LrhTUMTqWjT"
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
