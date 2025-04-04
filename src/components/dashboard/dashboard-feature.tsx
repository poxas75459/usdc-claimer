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
    "3tRRsfYjPu4djPAKuGAaRav5UTYKaRs6uvU8fvVji7gM1upq6w8axu5efjpiG1vkSQwbVV4BGyToHP6zFSLtQom2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bHpVWEFLWGLm3n6mAzeRGxk5xLjNbS86U639FxaYN6Foe2FoT1FdZtUgV4gCnSmaU19CZ7PqXQxdrY3xwjswkH8",
  "key1": "5VdzMfMjuDY6zEKoSqnGgepaAZBYr6VbEnvv4XLpLhLctnYQeLVvYrnBprshx8Hea4dEYTKUNW6qZM8E9mfrnroC",
  "key2": "4jt5TzyY3Ld2DgqhhZrWCN1xJm59RLzNKikEeSAjSA6piCuFog3opwX98PDTXCFXto4a7SEB22Tj7JXeT4BQoACR",
  "key3": "3B7ZxwhhDEKDhoGK9eshyWiaNp93H7iKCgNxzVv1rUDmcqqZGzJYnNYdu9GyybhjQeHH47SNq5pPE169ZbWqnfQz",
  "key4": "3ddiPYRGHHAPeYdGEjqV9TpwejKWJMPv9VZPuZoDUA6HrLtH4URse8YpcdEiqTwA2p5iZR44GczC7VjPm7cT46hz",
  "key5": "5zovS3hmzSQQdMcW11Cmotg7sEqvs1hG1yxacuzRbchZDAirMWm29VziXwXTUuroAwLcXQPG7rHjzrWY4gS9jhVv",
  "key6": "5dSK9oWZybevdanV6wN7bhJxpVZhqFty3TvXJkD8Gxk8btSkDDt79NJM5s9BwEXHwnVgjEMvRzBzKZKpPeWxmtqG",
  "key7": "3uwTS15eYYuSBVf6PdeHEsZmAWEKiSSnwQXaEtuCXbiGfczbpSrt1y4U5BYZJUgv2ABV4mZcvHDcxwhc6Wo9KwBG",
  "key8": "yDmoJK8Jd5or4oWp23h7WBgQMA5RiumpzjQnwwJ5r3r759XneFzLA1c7Dw94fNHX6PdFA6SXLCmvTekqdSp5fxV",
  "key9": "646QPcbTEuKN13qQaBoQNVhqtUJbjVRXJHDjnDXGuhhE9yY1DvP5AAtwAtGGExfbyUu9bbt68JpxMmt1AHvfvdvD",
  "key10": "4GLRc73Edq2m7nDPRkFq1KF5LzDg7DhTzw1Mv2RZxRi2U3tqTDq7yNvt4EcsjAjqCia4jdhjdsykbdZdtL9MqiYj",
  "key11": "4aw5qYyT9X6Epy7Vdu1NciWCh1sr5pVeX1qzdtKcLxVK7rW1yD2BHBVAaiqcLY5sFh6qPjKzpZGmQ21kwRP51mND",
  "key12": "4Yn2TBFKSDrzugBJEkaCg1pQs4uDFUzdfpbm7tbjogUYKQPSKcHUGiZFWrrrhJPQAwAHEDSF86CvzNGYYmBQTywi",
  "key13": "5K3N83u3w9WTRmUCJVKQvdy37xRigDDUYJipQLX4RvYgJRB6mzQDXdusoiNuTmj6Hszc9KP9hZVfs5EcdSE253di",
  "key14": "5JpwLCwVPFsBq6vPJrSfowd5KZriBsN6Y6d62KbmPHHvt8mv4VZCVcGWaCotCua8APmoT2ani1Qm9t1Ft8eUtwH8",
  "key15": "4oaMRG4kyWv19txa1M33z3gnpt2CSkmQmYAJXAwky78iDvcnqVvjFgfDkc8BENSmGhxB8LywPYG6kAYBnyJrsYgH",
  "key16": "53ZSJyT6m3ycr62A7LpPUNsrupaLyt9M3AREbKdbpawWf96tEwytss3UfT2UfCSCEzrx98pe1FuURrbka7jVUXy5",
  "key17": "4rdPdftreV5CiK7JyYVLDZbgexSEqP7FMNWemDxD1uFdGoAokDsmhAThb26rdoEjS9WceJiy4YzRPd7njVx1CkYN",
  "key18": "5ZkrLPkGWSnd5qqj6ZNVACtL49HoFyEPkHJK4Gy6QiqrtniK2AQiXVF9vK76anzFE5V1ptW3nPChQSHi9c9rVjNL",
  "key19": "5PA293dUUTBpncrCdpdWmU1guHwgFzHEvkFXNuSeWdXD4qk2ttdQYYhws2QHfHpoXxq2Cq84neyHzAfRbhKQaTJv",
  "key20": "PNQw7YRJNmYDuxbFJ37j4L2WjitNV4UtPviFv5irZhC8W5qn63GQNDH1jAmGHrNaGFjK8Phz4YV6xCMTQR8yR58",
  "key21": "2js7qXWZCEFmo75i2ZZx5bKcSg1FvNRpSZkyMUTiStkkXxhcC3aJ9xfxrjfTU3YgwxPKnTvLbK8pGmNwTjApBg6T",
  "key22": "jMYSwShWEiJL8sNVNSpbntoE3r2t7T5bRndv4XxhPDDLXdPjJVGeBoX53ZSrKjPdFwpVq7cYAzM5vFVaAxes1Ev",
  "key23": "4bLVVqFSZmYDrFFrPxGxEMXnRtZbiwaTciAscqCo7zQk14VNAnCo6oCPikxU6VXzZaVxVLfxciHvTuMMSGWPgf22",
  "key24": "4koFRiv5YyvF5rbeczDnsDdao59DjkNkQjHBkKwLwqaotJjpUyi7M6tFmAh5vgWETcfbvfQUJtYcyWnBfW2CLMGF"
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
