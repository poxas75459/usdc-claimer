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
    "2BsSynAfFHdg2Yu5Wnpuuuj14nAtPiSRMYB3X8ifhf6CGYeEBbMTuHG95mmwhVszWN55SewrBn1HEcsTRmRuQKfm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23n2aRU9TnYUfpN4Yn4BfB52xduZmr7nUN1CWsn5FkCrKpEhTfDyi4uhyC15wxT7XoE9QK2rTr7j9Dk3sCZXEsAS",
  "key1": "4kaUTa6pW4ho7DuUpWe63oyAwLSkdoiU8QP2x7j3TbJY9JSfb6V19kdMn89JjUiC81PE8K4D5j4hqwdUtL4jSkU2",
  "key2": "64pRVdu4jUuxQKA49eBaHN7Bk5tkoUmD8Q9VznireZDEZrXq8TdifRBztinrz5kyqmWyFib9Dk9vSxEz3FgQA3x6",
  "key3": "4mdvLQpjaWZydPpuwGiZTWHx6w3xUqW1JvHtfHARwEgrLE8xZQYNR6wMj9owBY4uBwauHnK3m3arAysrz4dBJKTn",
  "key4": "51cZ3VmHjz3SWH1eRpTx1t6BhV6Tjhr6Y2f789bSEnFMr3moGxY7C2YYucZMEKgrDVMTFjswZsCoq313PSXf5YBd",
  "key5": "4HChqaPP5BbkwCNajhqmQJ5ELCXREohd8bpUWD5R5qAJqD4qKMcp4Z4c684NFRE9oGorGtnpw7HFN9ZPpoYPL2KW",
  "key6": "4uKNwYKPeaeQAzEjW3sD6GAMxx8QekNqa1ZUc8eiKFvfKnurZHzjcFit3womb5NvreMcGY9XVohZUZKLSN73iVwg",
  "key7": "3vAo6QdwSzNUmkcT4DDQHAMwD3ssHoc3cQGEqxPzM41HvSbzWH8f5TCTQ3LJXJrAXZy9p8EPY53YR2EuFaYB1oxw",
  "key8": "4VtEZxt15i3BEAduWbffU4MqkTS9iuzapQaVKpNfyQ6Fhn9QNMJXn9c7UQPaZan8WL5ySJKSWJkZABikxX61hATH",
  "key9": "2Bd6fpbNigCGYEKqzyyLRLYkG1udbTgHptDAY89VGpQvwuyMZoj5pUQpufCcFged7tZELkFERQowDHGkf2iHs1Cv",
  "key10": "4KqjuCcC7fKLWwDeB4EX7cpdyZepV94nPqEg4rBbaWpSb2KzgTomqrkp2wkJRcMqUFxBsMdmoFjGvnTTND2Q7kbu",
  "key11": "3ZWXAe29YaWriReEsDwtkxwaGsRyvbyyVQcwDxYLjgZazdHSxTV2oJq6dBjFYw9tbyQuGz9ywX5uuXPKK2jmQtjH",
  "key12": "5sEHVePx7DwvnPmU1a7pB4tKga4u3XkkFLRQNGEJ2yw8pYAm4w1biqQngSVkifpxWVevs1kkETKh5Pu31cxBSgAe",
  "key13": "5ABCocSaxFWaNkyicaMqm9P3VGycCD9SAmNAUQbfU73iLdBjq5WKmgdWW3hRw5jBFTnGWRtSMm23XJtFQy4BA6Qz",
  "key14": "4M8s3V89573h6qmbTfQMT4bWdRdrKJ3VbvpwwgA5Z1pf2eqGKh2t8Nrpbv9UGvEC65gUDQxCTHvFoXJeBh7wYhtC",
  "key15": "4pSLb8yoBGxWYEbtDr36YH6qx5tv2h9Kp8vcHJqxexn92zMicZNvZgs2NXhu111QTiQCVLnKZMjfRx2L9PZj5GAu",
  "key16": "WWWHosRFgWozX3yDFGKttpmxPvvpYZFREyUaUfwJgnk2ozQZo1Gjnew4katr7vnRMukRAnuT8WzHr6kLA1h356x",
  "key17": "3jD5AdXgXBfr2Cy8PKiCQfp2Dp5ztWWcGMztDoo9LCr2jpZYsUTsysnEGb4ucibwQ8cFEx8jHsugtwxVZWWBajqq",
  "key18": "mTRx8VM63xMsfRBfYapWHSpGTV1qQgtG2S48GHgvE7q65W5KCtiissi8onT9Yhyr2Amn5ZR8aVx9VPUWKSF3VRg",
  "key19": "UmgL2a3V3faKisLgQpikFxBLioiM7NCteKpMmA1qYKArhqeX6g6jswzvP6YJDkCekXJYHFW9nwgHoPqm9BncKTm",
  "key20": "3qGvgucQVtfRJiErrS7AS6YNYwz8E6nJ7fCQtuBANvEMCC8BLTGC39q5fjCucKVrFSBUMrnmDmisMDpSDisb3C2g",
  "key21": "2wDxZSosyjCSHizhauUnCBsnLQG8AYyv1ZvFw9AhwdMGVAXVRKEo4kKowf5Y96x8xBW4FnVW2pipyE1uHtpuh8NT",
  "key22": "q1C2F1jHZdZpoBC5CvYkPF9j4CqT5a64CDq2uEb6WzGBWDkZDQBG4RVRbqNjAhJmyfizHuFctNBWGfupZdpHB3T",
  "key23": "3HSTGcTNC6d7gfmfN4MXs32twenNZmKiNpNyf8VFpGH2TXn43jf1ckSqurE1iNJGLfMsvGKbj698UjnRuybMeuri",
  "key24": "5jQMmSu2nprM4NBschjaTpW8mcB9cSYKB6qZ1WY2M7RMkutJp9VP8BgMm8etHdr5jowLC3uGbDmHf6A4oAkx1w6z"
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
