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
    "59VPhsNiVW9exYwDFBCgy2gduzdWpcA5zmH7YrF5vsnfWUv6pi1eEW8v7HJv5gVA76afyNHmNrMd48sadS1zf5k4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21fEKNKFr1bkFCH8HA6JyK1ngEyzzG3RBi6uuVdNy2Roz4MAqZSkTpRToJBv1eCuh6iwJy5pjhL6yKHrZ4QvBoeC",
  "key1": "N2CGZJ8tt4JKPqgyBp8M2ZR52Ex7UGPD61kr1EF7NG12o3PobuU3YrothLJnMYdj9erGQR1zBygZBZtEM1JEyEi",
  "key2": "5GAoEKPBw49dFbFKBUkZNoCQfveDcreBnqhQt6fiC7f1bnxMzC7tZ15NNBLa7bg1H1yanjWP8soRsHiEq69vnSyg",
  "key3": "4fpAFQb4cBZ5KxfxUrtppGFqPma95ekotn4kCumfzPVDwF6FnDo2WydYaJjY1bEUraRteCMJp3RMCLdJdtofX2Ph",
  "key4": "5QXtLR6XRD3zRfeqpiodXeynSJbzvvBDG6SgPA8nbFMce2MKAvpJYXjJUsgvLk5umyEF732esZwhSVFMy2USnPXo",
  "key5": "Yd7xTMHwLXFXdC3EzeUtuwVbUx4o7oBpHMFtDzK7PtH92auPLzs7vHuLu58uFMXxBqK8WbSB9TJSZaFCwQwupo3",
  "key6": "4iMMVHEfGhRsM9xjz5civg1YEvCPSCtbHuAW7ezi7jnQcrYeZJ5X8BS9wRLoAMR95ixS6jUTQaiNrdfQvn4LECmz",
  "key7": "2BSGuKAvQ38kBfLmDvcj5ayTyvknWNikMkXUSsQWJ2Tam2fp661ZuhKDvoJgiBijoWwAoyMn3mYgMj5C44yoauRp",
  "key8": "5jd89ap16HsNToRTbZZU6tJjUm9WdJpeo4n5WuSoDo1VvNhjmfKkTqxdBrdWTLst2AHpveWchn38bZkaNtdpdgkr",
  "key9": "2gUU55TPa6XAVKtpKBLVaN7FtERTn51euhRMsUGpPvCGoUdpH2LBz8wfnKWFxkff7E7th9GNavTuviRDnHDAAnMW",
  "key10": "35GaLSDcCVYjZmy26oFK5QHbFt3r14Z4ndDFA7dUqFcys1rgf7hKFcCEji3cV5wJu4YLSPZ8oHRQnTcYpUVZFDfK",
  "key11": "foFZ4gihd8Sk3jGQrZgBdRBKhdp2kL24cNcu4SAu3t2zT8WVnr1woDmcdGAwuAdKmhgxLz45k94r33NZUTFWmiK",
  "key12": "4U4vwi6eU2uTZ2ZuqgznLaJveLqd9rJStxgpikkXmsf2ua8btZnsinpQAffjTrj9zyArTmWjit39fk4yqgZM6q2g",
  "key13": "2W8sZFr5fApbWaDEDbf4yatm9ThUZobrkz2U9e2SBTeDGTD6dHTmbc1vZYRKJUnkF6uAEhPuSKvpoHyowWs2czXt",
  "key14": "5VwKZnNyLEaaWWAPiSjyzmweDkYW7Ly4ujAM1CkdEpm4bMuCN5zUVMiGiURfJxvYqhkHvgWFBdiiL6yz1176LNSp",
  "key15": "Hdq1CEh2w9dh9X63dwVDazWqq24dfFRxVPXam93FdJHpKThKZSFpXy4cuoZBMBgobWR69wC5BcPm3wXCx11LSQp",
  "key16": "29t7DRQw9N6qEHVNcb3dRy6AwJ7sxeMXetE2E9kbjcskp1vpL4Grti1PbgqXqkT5MDBWDAiigXmJ7Ao7u9SrepPN",
  "key17": "66bxBkTswTVC9ZLWst3pqSVRP9ksRxjt1vQxU4Sy7AvJvdy3NGLZSngnssR74cK5huWjKzxy1fSPSUkvBRgr1X4P",
  "key18": "3Xa4mUyxmf7kPMthVn28GN82m3gaPCn4uKoPW74qwNhZR5hbUr9DioPrgCSLE7moBPYs2c2cEQMxGXmzwfRbqWXt",
  "key19": "4hvP4s9VgtafmCZKB9mZVr3Ghz6SVhC9Nz3ibhmgoGGKojbZV9ybKLbRgUvVaGnZDwQACHc4rGCqbRRA51Ym5sQG",
  "key20": "4qQfxfwhE2q95fY7cqeRWYZB6BWPzjDVWJ5Ao2r6vwuebptBkuaoKz9cfZor4tnEcUGF1Q6fpuKVmH23auxzc37a",
  "key21": "2yJokuhiKwD2XBDuPZakYeEtcdux9YftW2eqiwLoJf9tKGNvRFAGWUpwnmvjnpWQZ6AWpt6aL29sqn5avGd2Rwo8",
  "key22": "gQXJPWt6Qm5nWwTDJGia9ThEbZJAbCRzMJXhyPZPLZb3m9vHzwii1CwzRc9WUebTpP3aTzj6HFVLMZEJFtJQnx1",
  "key23": "2qmWQNrdquQ41hNFYGUyDox66dwkVFGFfwFM5vJ1xisB8FA7C4gHSvev4yRt4yVBqekZnzjFh19qPT5z2KTFy1Ek",
  "key24": "4dEFYMa4cGZAir8HMkmBkq4jLx5DoT2wxPm5q9RVStjgViTHtVrWB3NnetxJ4xuGEiMfiWVt55sabPexPFieXn5P",
  "key25": "w72UkDLhjkgxMixRz57P2ku62MifrR52QvbXchmxLynjM7A7drYsUyCz8JBDLkPdo8xxto6V7n4ciiNX2Bf1w36",
  "key26": "4fGtcUXvD5na5D9zQqQQNna7e2tBC9TPc3bvNX7pGPC65L7FQjQJZGL4LH3DmgGpavA7gNeraXgyctyZnVuW2gYb",
  "key27": "Ssvce4F7JTTP4Lw5YQMxhpaTppfWHRsPB9LbpSZbGxGqxopoaPfMwrE8ap2d7czeWvUB8gUY72Vy8MXucMMFM6d",
  "key28": "5H2xLerXHPHPKkR1XdQ8psViv4Sq5g3XLtVCuK1HFr5oCrYK8Rr1K9FpTyTuUvpUYsWqiP2S1wD8rRACvUn1UrzD",
  "key29": "32Ds9PaSDgEWDCVKSoiqRBQfyuyGMB5vw3sQbBNTA4gHPPYaGfrtRpr3eTx1Ts2MUNXpuRpHhUnD9nCNPvnHBHrZ",
  "key30": "XxDoVoh9HgU7qUWPEAq6m1w1dUQPfNhhu841tLyp8CEQ9wvtKdtw8FRY1StNxoLK6AhJtm9E7rhXzE3FqecFdmp"
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
