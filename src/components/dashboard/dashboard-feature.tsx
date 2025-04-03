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
    "3HekpAMKLuk46JcWoTVfMoS6JQUKcRhfo23jZqYrjFzwLi4L9DK72i8P6J48fhPpWgTzi1UKr8JGz7BeHmPq3ZaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39yc9yuZhVymkqv847SUCNzvEFZQBfycBbfRQiaR8dqKn7JMVv5qM8tSz9uFCeLcZJYfhittzd8q8gGtB2M6s54s",
  "key1": "5zktNV5Q9NEs8PngvZbgddJTmaUxGGv9iNZG5VXcaS7ha2Qb4aSNbUHBrLw7ZjUqU4x7sSWoY8vf7rQj3obKid6k",
  "key2": "3XzQcApEdpM1Xtz5BtwzLcmJG7XCeofCqUwHVB57MzgWBuoLiCzNyvWnHMgf6TD64S1vmY5JgcXibwiAXmTGCtL8",
  "key3": "sfmdMeW4jQtw25BfdsBdW7GSuoyAVT5tkhvdxx5LJ28t6soEhAy7WhuGCHJgU1VY7zFMURFkUxYpH2avBJUaMEp",
  "key4": "5UgnwBA8AK2HTTkwa6khhQyNz6LaA2ZzhrZZFmUzBjYMYqe91BNfrFv1qFrFm2Vk3uSuNeJVDMCq72e8xJbJ9azR",
  "key5": "33vTJPexUbXTVfXQPt2TYe8mPcoCobRP8sz7GB9pQR8HsG4gCFS8QQTSDLuroQzCBnvPi1KH6yNzbWMRqd9euyDH",
  "key6": "2RymJFxc2YtcHE622pmd9FwrXq6PfT9CLJWQcbSdxHULqRSuKqjy3uHL7Titvs7Z5eqagpf7ip7DVWGmSRBaVAPF",
  "key7": "5RHAxJmvRQDapRtTU1BzpPRSTpqAejaGiFwtt6VqypRsB14Cw7r9NJGgsHZCNe23WeiKmmuVkTqu42P1H8XGbgwE",
  "key8": "3Np3gAPcYhhZFN7vMA73EsgDvCMpUMgoyF4kh2vWivQxEZiXYRSkVBxZQjFHs9d8Lc7iqG85ViqxVC83Zya9NRQd",
  "key9": "5wULS2aRKJXSB5oLn7vLHWiVE4xkRBMvoCb2RbcqW4DRgzNow8bV2UJ2yDYDeBZDAmNN4deBvWdwJA86A7AVJStc",
  "key10": "4dd9zspz3nPk4ETdidEKkPJHundkbEtCz3t6F9BsFpsfUgYV9rVjXkMccLzz7p8sF4gCqiX6bX7CSNBKBLBvE6Tq",
  "key11": "4mXgtMUS22MFGjfsmNMwS78bbHTn5NGMBFaonuKuCbrVs2G4Sg9yP8GGz2TmT5sc8b7hKW8NGe5Wx1K4dsFzDNqc",
  "key12": "24rrNwBxKxbpKJouNrBfAhWSZMQHqBiZzm1HkiShrBb7feL8DUQgjJHJpPWxnzzgwZr7kyBn8EJzFLUmdFaXp8gE",
  "key13": "5g9JMxmdu39G7KqSgraYXioXFcQ1wD1s6wqrJA1qCEaYkooUxMaBJTtuRJv4F64R3GLkd8FqBdgBDDyK3iEjzSvp",
  "key14": "3tRXi7VJJ9T1MveMhWJWzwSL9ECRzpjDETzF5BG4DWVQErBpfoSiGwdpgfBJ9T35eLceJBi851ZDDPhwrmnC4ftZ",
  "key15": "35938fBuL6zfyxydRBANESpnTzPngvaTWcVNbSqXnqoHKRkM5ReWThH5BezmgBjqrPkGh96ppgQPuui2Fn4UDgLu",
  "key16": "2pZ4k6AMP1aJNr1tF39xvakXXqfiLCa6CHZijeTtSv2hzMf6Achc1o9HEK72FDtJej2tLpcbSMkP6TUaM41zRB7y",
  "key17": "5FsLwWRZLnnf4jmsRxEGbPMU4o4XfK4WZNzXYKFMfjAwWHBGLufMzVWQTJ5Aw7YdmrMkBWRgwhVgK9U1vbE5S4uc",
  "key18": "48dn6PHFC9DaZh9SCNPvudUzpC4uPrNAnCU6RzrsnmWNw1pHyYQZGv9TW94Cf23KMps8snCww4KbKqrUkcqYpdaH",
  "key19": "3cT2ENnJAofW2BoYonQZMMrcVcKLZ7r6FSBpuh8FZhRzBshBD9sbZknN2NGHAz3ga3DjUZgztKwufjeZZACtFZpS",
  "key20": "3QrG3FM7poQbTGs4dYHZ226WrPthg9GC1m7159ngCRCZnecnYAcS2dPiE5vGsrvMWAJmPjU1jro33VjV7F8ut7Ki",
  "key21": "3qHWd3qwv1prc7PLd8DBoyUp4yRBcNuNcxw7dPftE6xCLwEj4X9J99nVVyVxeipYKZLB5EQAHVGgbAKF2dZq8RQw",
  "key22": "2NThJEXChtbjhphNvWkyBB3W7DjfbdnizZ1XFcMmu8BjKCjmvjDABJLRwMWEkMHvTvzJCLwMJCa2Pdur3RcaLAbQ",
  "key23": "5yCpMTTbwbydqi8D4ReJ4bJqZVWwgwwtEv62fjSaPyaobE91bgk6kuSbnkDPkwZuKobwGqnmVV2hsZjiF9ssFf6b",
  "key24": "VFhZSkXDQbKjSdVJfqJRz6Gst7W68ocCiJeL5kZwBWvA1iKeXQE3ERt63y9JxcpcU7QbMxtmaVr79Q7cyfEwMfU",
  "key25": "2zfdRAwTqMxJbB5sXVEadHL63kmejgvM49DfP32rNgNnGsNmRJkZKMhDgUnwMwN67iywHzLe2QazUVu3ts8uBPK4",
  "key26": "4uj1Sjq9kgsJhfaKRVj8FWPXPo6QCFTruzwDjwFwoAmH9742rbTudkC1Cj3H3DUC6iSqDAWVH38jV3tVcD3PQ1R1",
  "key27": "5NfovCCREwfD8ZejojyXds7VXYvMVsxvAjSnw51azCBNBfZJTG7Kr7DQsXVuTKt7RKtvedMaJza2whMUcAUcE5CN",
  "key28": "3jaiaCS7N8bec5HD1AwoVV2dEoGEyivkyFtJrGLrPa6rgP3gWeKSPDz85mN16C5pqvv2uESd7zevqWWorHNMFqui",
  "key29": "4jWkohsp1bvrmawz4SCYiF8S7Wych7TsPd3fvLs9ZwpE55wePdpp7xzhrNkEGnWvE72ubJeZ6odfS7E2YKLkNNEL",
  "key30": "VTFhqRyBzWn5yf7bG1VxtUdjo3WBEAZw3zJUyezDctWpYuPZPSpA2XU77DKgqF1zShx7pUVGHKP3vGxYooHfFJd"
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
