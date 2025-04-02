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
    "4UNQztxhVTYmQWSq43JnZekwgAhLqsgY6HrwqUqAfQZMNDxd3ay9uvUTwMr1zKMDeaHcoAwhvDWy3AxQmqVeED1w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qUNwjsUAAF6y8GWdssjtV8LNYpqJ6HQj8HC3AQwDcbmfcZo79KBUtc2BQcj9oce44oaJS5UPpGKXStxq1dSuEMR",
  "key1": "4WrUH1yoLwd33ftLou7PXDrgp9KMZfYKi3zsBjQ829bwJE94C1FMx9ha6CPF2WvSnWNtiCNuz83ZhkYSt1Hmde7f",
  "key2": "3eo418yzsEPDW6DhrGbMRgCL86mDPbVMmNTNpJ6FEP63Dv2MGbvJAi8WovNUGhHysoRaEh7cPzW2j9haoc9WWL9J",
  "key3": "4auBv6isCGKbGsfFKm82G5Ei63JF4cLWXRkX2wqGknGuqPNPr7Dczfn6vQzbppfxuofnid4sefoN7G95PTBo316F",
  "key4": "DYX9R33jmdcbAJZwFKpZxe4M1PPUHzaqksVHM26CgS2P1NxS4ouhGfCxFGL3h8LxiNU6nZTTqCYkkKEdXuUomj7",
  "key5": "42nwSt7QtpBwxYEAWQcQodyfUf5L9NwTZijFrgGADbN1sWsYgY6rmcctw4MUYLrgKBCbQ8GjGFoHqMyFZGJGVyBq",
  "key6": "3awDCh2JPuMZ1GAoViAkGX5CtkJcof2L3ayUv8QnjaGR3up4fW1JJFLUGnc9dJVSDJL1gRMDzg1CcmpyxqGf5BqK",
  "key7": "63mCrrZ7Mk7KQkQLCYrQaRpTgs2NFRbu1BwycM5ogyg1x9eYBUMDozwYLUNvY2TVfgVh958LyzLmLGGs1kcEcz53",
  "key8": "37X6RpQhzEzR3kbcspqC3WpUovbGHrg2qxxRtiJPvp2XE3VA8SRy4NJKiG8EMzQASBDQnCvHEVh3BJpK6duE1Qxn",
  "key9": "sTGcyfoZWgboqK2Yo8MyXpzGpkcemcJuBhdsqYbLtNtAf3KR3d2RaqgCq6wAw3F5eDnUp6C95Khj7c6d5UKEZ6e",
  "key10": "3G4Wknpow7bxyyis5Qcv7jbmNJ7HehaYHxpbBqDFRqpTYhmJsYnecFX8fviPaBmoMnZmBq3HtaQ7FHke9YmQ9gX",
  "key11": "4vcCqevriHJN4EfsdNGEMjkphyYgqjvezoQtcHbQeEtbJTVK9V3bH7WNGbj9TcfrFw1fYNzYEnjsaHL3985k9sBX",
  "key12": "nWpk5puogawgzrikmng9ZihMcWW4RxoxCxrZVpESXrXQhCE2g5ofKsuf8rxySM8PUs7DCXz9KJvUez2M8SCGiSR",
  "key13": "2hSgNW2cxGMHygm5XXPyntWatRJsERq2gmAXNUfGoTUVZ1taPYuh5BrU2fCjyMBA4cAVtWCkjNXa9bxgviATxKAA",
  "key14": "4aJJ8F2gFfrucRV25SuEkbxg8EPnLkyW6k4vwaAoWwzZaCdQtmbhdk6M3x24WQzAGFJfAVtYcMnzCyNZn6tBSyHW",
  "key15": "5Q6YDSuWDqGehJ85dwXwn763Hom2HcqAVW3raFSGeNd5qqLk7WE5Khw2367zMG1TNF66nHudzRjVsutcQuM8WrKf",
  "key16": "52bzqFXczkXGbx1qe7LNAw7QVRWPMwsfqAMWYh3wGRZELGS9EeLyYBkdQnKEcBijSKv5RJNLpppkQeq8USmG4nrf",
  "key17": "5DJwRy6BTFDwVQ6dLDsFwVRd9SXryrvYuLBLBzCiRkiSbnfhUjvdysUxZ3HqBYhpMibumWt51MsxCfj7YxoY3jtc",
  "key18": "6gZ45VjgoqyxHA7q77XNKWkSkfd44Q8EDPn5CL8YEaY2SLbe26pQSyUDJ5p459Bz1L3zPiwi474F8PCB6fJ8UHX",
  "key19": "MQXJUzqKXwMd4x91eCcQ4kpDwmS49Y5kwyxFQ8zpDmUTfabq7JXoc14j7LQyLHDXPafmnFkdqoFNwfBUmHPc79g",
  "key20": "2GPapW2BTXYtjziGs2bSrEi8zyehBmVjU8NQ83FFV25qCR9d72hSr6RP51bxPkLs7uhMLFpW4qDi2BMp9qsnATzA",
  "key21": "2xfMJTzBaewY7oaFe6EPfsji7qS92K1dYAnuGBt3g3CToQd4WHALmar1UoZKoLWUbqoAGZbgrz4qDi3KHo5N5T2m",
  "key22": "5R7bw71qvhZT3cJGEgg9kNLD8MoKbq1RTCqTWMBX1speC9VwgGE63v9ykZujF13Sxj1cJcrxR4jN5W9yvqQTz4kd",
  "key23": "21YBbJ1b54tpfFWRYCEPjuL6vZWusSFT7cecHyYi2t661oaS9eehnZPpkqqcT1qTYVNrH2RPDRYVQss1ug91XF1U",
  "key24": "4LMvmcWHqLzce6YUPmMDxNPFj7jjdyKLYMtHNxuJx4HbPivVgF9UU7vzUH6iu9XNrETsP8k3uEujLhVF2XkmME2S",
  "key25": "2Zgvo6LGD7AafVNYURiFUsMFWsYkRK1DK1u5PrVgVF3BaV6gTkrMkUkMXr2xEx95VJgawZmhdhtCiLR5HqSpDwzn",
  "key26": "2CjcJ2eMNPv8ysq2hw4QwAei1ppL73U5osAQknZkg2M3JP6Z8r3EyKUiateKj1eXnbkcjq5ZEaQR5vVzDZ7Xsqb7",
  "key27": "Vu3rVaw43ftz9jJhqsJ6buRsG2PK5FZNrPocURpUusA9tnF9yRXrdizvQDrGL3wsvoXwW34b1kzrKZG8ngk31zJ",
  "key28": "5hphXSQ4CKN1wtCs8cp83YxjqGYuXEXF3N3htNbUj4kVVbGagawaB4PxWooMiJ9fsaLdDbPtzrnpDmZo4W4fGLoM",
  "key29": "57YoP7gsTSdTpDarf6JKZzdaBVG95F3sqbc5JNXXjwLzMD14mZLdiLu1kwfdxsYNzHAzS2tML8sGGGWzbWoZqx3F"
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
