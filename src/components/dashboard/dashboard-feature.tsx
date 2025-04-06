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
    "5UHk6mrhrhD8xfNnpPQ6k6uG2No9UBhCVH98vP51cms7f4pbLomZcZxEGCEv2EfTqd7ymEn6iVwHPo7HvfkXzRHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZVzpYAfUMAEp9t2t8Bi6QD4jo8C4rvvYA4neqmngkU1RRmjmg9Aih53zYvGtqLW1WKkasc4ReTPo2ptpdfFM8Yf",
  "key1": "4YtwbaxzgnJnqaRNSvCeCxcNfKSGQJAhXQwsVeCXhzzyf1BqP3qUYYMcWC5xpb9v3T41ATiC4pLLW8qm5Qyjtfrh",
  "key2": "TJ12UatdGLqfWhiEUojCjMR3xEdssA9Fq393fKPhrXXSnWjncu6mfw93SNrh15kRpXq86uM7aNNQsdWbib8smpA",
  "key3": "4kf1rnuzJ5wtCULqrKcvs7H59BJdPw74NquUW5CbLWMfeb241ggcTf1EnjxW92TnGXRHBnyMAADtuqdyrEgvgCAa",
  "key4": "4X4jkRZKbKfu4gczZQeryeSzLXKCovBkb24YorjSVjZAJym2DBTz1kzJJeGKVZL77tezswEZUzboZBJPvESGbpuV",
  "key5": "3Y18fL6fiCoZ79ZKasgt623Ut8gKCiLZzMWBg6L6Rm6PZSTgwjjikYuQvhKiyQArbmwiuDnqYk7svGgiwSLWbRcj",
  "key6": "2jZtgAkESi5fnKBXdYmA4SDUvitpeCPgoh3vcGZGP84R9rdLbG2DrrStWFwFydZCpqSUH98pnUhfwb1jWbEDmLU5",
  "key7": "3ANgMeCiXcLwnk2NQN2HtRpJBbqGp8TZkhbGGtqek3QJaESqkEAKB6Py2EDPEMVASmDj6MpfGa5ZzKAA8BbvxJaV",
  "key8": "642j8vVAh4iFwNsE7ZPeJF6HdYWjMLR9xrhXeEEhmzGmp9Vw33W5HPap9MBJueoxLygZUxB1gRnARccJhV8FadLR",
  "key9": "3BS9UKkovvgnaWUDDkDSow4E7WadTLTLzwbAsq2VT4kk2g3iJwg2kzbYqn8rLAkmoawagow9iDUpxfZ4kxzRLU8n",
  "key10": "4pHu4FJP2ib2k9nzWuYBaMC2z23KTrrwmNkMdHySeMPupDPWRp5XAEFEKfGYQrhiosX1TAriSagSLqnbYuunSqqi",
  "key11": "4WSXw8Esj7VvZ4rfqX8YUwrosaKNRkezKmQgckwUSGtZjFWAK18cYh5UWbx4FeR7KW8cFRrCTbi6AC6ZccGasnVY",
  "key12": "2rvocaEY8345UmyWSn9dSLQqubpiQKpBAg3aejLhtTpVi77tBqeRmzCHWAosYiZT6pUVmJLJnwasiyghbUzWzirw",
  "key13": "5FoTTpehBzgY5prTPK8hDAZgrVuygy34NkPRDLZ4rzQm67YLvGVd44RBEPtL58kGCtRa65CeyiLUibR618n1Wv4v",
  "key14": "4wG8FrMG1MWsKpwwguqZn9CkihcNFn2W6G8qeTLffAyVFKBwoy49SEy2f9MqdiAvekFwNBVLPM2GV4aiYoazp4F7",
  "key15": "2WcS7k471Jj6f2RMuBJuDs1jdw82XpuBVL3x5EJxLm7q3rJWbhy2rvxy1bNk7GgnHxqAzZxPpbEGc3Z6ZCF9DnRX",
  "key16": "3BG4CMRzvYVGcLTUk5T1iqmSDzxrTABViYK4HLWBDkfYbVN8nANSAJCGSxNTuWtfckCiro2sVoMH8H2hgTCjDE5Q",
  "key17": "2tbiCGt7XWxUi8mfuodoPERXb4fV9Ly6kA8yiDbWfXBmSe4duidDXg5LCu2vhF7HDqzjT2vhA8koq3jXEszK1Ta9",
  "key18": "2M4XgJy2e2SQ6HuPq2kvACTR3S2JeUhA9RrgyvkR4dGYnmq2LS9KCyjgKwMxrCn9ZxPcgKfX7HRaCsF8RrjKczhy",
  "key19": "4HFq95jJKGRYuYU1qMkpR69dE6duS1vJe2sYoua2udN4XwGzdAKvsR7BApiCktXDj5po4tTwFtkySiqYwnfyjEdY",
  "key20": "2Pzfp3fSHkfDQVju2RkBpgeCpdcHksqYpekiXNAwUsEZL2Aq6KSWNcjGHJpmH9c78ZnzioHidPbpRXpgrHikYwmC",
  "key21": "2KLaWpX7rLLkEyMbbVpiYrnLerkdN3eDkj8Ga6kp3MWmbiPaeUrhoPPKdwSenck3GaXhsBKf2XzAsiPVfutNcfEB",
  "key22": "3n8hz6ouPn6PyQGh5Ti19nCweAPzA9n9kqWYpE5mWG6VAx3kJz4CTVp3b94uS15tYKZdDXqe8fRCPNM7z1GvwWcV",
  "key23": "2GNAQzsqQCsWbyq1HbhkFSDJoMPhYyzvwzGZqtjzU12V4nCV7yMtiSAh1ti8FsPBdrv64G7bSFrSabZZWVxyVfMu",
  "key24": "4EGYMH3TnBJ7yJCR5myfEYQUZFV5fgNzqQGSte6we5ngMhjAbUPJQtbKK8KMBBFjBkMNjfRXzP7yKwEc4UKQoz5K",
  "key25": "3YwxYn24ReS7tGp5RdCJHhdK3C9ptoqEfigY4Z5vrnJ6gYjCPLsCXAEm85kR2ecC1qjMpAmEVCcLpHrmbhc4jcZD",
  "key26": "3ogkKVPSvSPEv8VHCqo8tYcyJq5VGcGLPq3jfiXD6WmTha2Ggfq9Jtxi5D2hCnSt9Vygzit2bDrihRRZeFgtJUqC"
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
