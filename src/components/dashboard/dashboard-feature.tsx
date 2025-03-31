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
    "2xAGVpVnuHbra7E1t4JvRqV2Nu9PTMuNmwzyTkawZkRSzFtngy2PMUP7SqyauTmzrmxGEdwzx4qgwXbmxhcCuLf4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BDvVHedeqDiCE5nXfstoUe6zVmVVen8SAzASVrgDMerxVcXbkM1HgWg6imTFB8jbTrwTxMZw23YvGFeh6MivZ4Z",
  "key1": "U4PHERCSzXhW13mgAgjmC4REGeWmtBv3gGbQczmXKQF6xHwzuogGZemV7iy2KJAw8UWbUexhJXC2M4q9v4qaNXg",
  "key2": "3tSvB8Ei2dBwPiyDcKruiMp8oMTuvDfCjRs5XxuyVK9z3rqk7KDmwXBMDNxMg86UWijEpH2vBr4AkY4iHb8VWpVX",
  "key3": "iK2Ux1BadDQdEH1kuf4LL8WTVEQjEA2U1i37CVcFURw6pivimXXRk8zxQzxSYTGhqM3o5AfBjQCx4YXv5akmENg",
  "key4": "2kc3nckaTELvxU7TkrmqfUEohVDXii7X4PPzUL54SLCUoJYajW9atX3PNnhrXbuWvy4KhxritUtvXz5XCskz2xAU",
  "key5": "2M7QN6rtHy2PrVj6cat7uUmpKdrei9FbFjqoDgWQavHPA6AiaddEQW5PMvRNtfvziMQ2e32RWZnzej4WVFEN2CXE",
  "key6": "3d58o6HQDVdtrdNas8JujRfyPL9vxKnWTpHrdyLHPGWhXmsv7gtCZbqtht4JuwZJEjA45gDzAmqHa5ijZAwTDS2L",
  "key7": "5PiwLFoJ5U4YByQJXkhFhus6rJN6UtS3bqrXSThsfCWaG1EMy5P48UagmAJypxsRpQ8Vr8ko4xMS87xZFhfMM33w",
  "key8": "4qHQ161DygGYn8xiD7YY1XQsRwfLCYXCsizuuHxfL23sNTALwMXdJMFafq2aHjmc9YBpMgmedRaUJdrkFMnyqDFr",
  "key9": "5XHkeZYKHW5Hx8jFAzMDfWYbNZVxQDzCBA3TPsGuR1Se1rB8RQSdzjFCrXAVXRhtyigMgykDCc6QN9kxoqQkds4L",
  "key10": "2ZJwmkgeYHrto5CGW3xDkj8y3uY6VncJ9HciUa1bstVepLSWbpfAi5qtGXaqzm7FBH59CDTzmUZJEuxStcfd8tGe",
  "key11": "3ZUnMCR2o8mETpieKFZYPKqU2KfLEjiWbwdF2tGeFcvVaLdH9W2ayhjNc1ZkVfzmC9tQem7Kgbw8upZXXkr65wcB",
  "key12": "4W6hvM4aG5oPXnkF7DbduUeK8Trj3kg7gtx8bZ6vkNuSVo6Vf5WjAq7zTRNhDa3hjpAXs9vi1YXNhgVHgfajPGtj",
  "key13": "2SEVvMoLabDxRmSUvyWaTQczMkG1dDskFWkyiisjDxAxP1iaBcg8qaTQJkKAzyksMhicbXzLCAjm8DaSAE9GgHxc",
  "key14": "3EM3KC3B8LMozn5ebCVqYSrtZUgdPkvH79ND23UPTtW7ZzaB6hWbmVdShcZfoAVqv6abwnDuVvmMRCKiB4kguBQ9",
  "key15": "bznnTQJHQcZ7yaJ6tkHGjMUJx54gw5xFznHBAYCggUGq1HnTymvNbFondE8KvTbXtWbUDe5XPAzMQKTaJKDPL7F",
  "key16": "2U9sKM28JzuZxX7aaaKUkU1LG7rRwK5MEPQrFbGp1gmTSXNtJpWRrrKjVtixBwEUyLkaj9vXWnMePHYm4rSqhkWj",
  "key17": "4m1Bw5nnDrdbGrRBSevwv1PSbTRMsaRF2jGuGJvB2x8hXJ7xiadJX6uf5NrEb6a2vhrcaaDQ219kiDLunqfmZkD3",
  "key18": "3oz2NKZWHbAWrsKcVK2q6BovAmheLVSU2zXjK1Y4DG7Tc8cbeem5dLZZyN12CJku2B5pYSe4jVneDJXyKQZWNCii",
  "key19": "4xQj7wSrqHt44wvqZj6XLA8bNwUXUCwqtLbXLbcev9nnbUU4MBpXUoA68WiUVos4FiDmqniFQA4Q4rvWUEvXYJFR",
  "key20": "3UXiE1mCsuPWxw2F8eiudZXCzKX3gxoE3dkFerBeDf7FKgpbRr6dRK6WBkQBhfyxV19nwTWpUMge1s1Qs7mqY1sK",
  "key21": "3uLgniZtZpMQh7JqbXzjVvygb6SPBRKa8tKmz9G7i1VRuebLiS6nVjBLWct3LjCMLCRaLfMqwvrHzgoaKXvnFPKi",
  "key22": "isped8Z1jqD3boZym23HjtgiB89b9rG6eVZL7tGGQkJig6ufh388aHLwNV6jDZweMUtZXTTRvMrv9HQwtpMqhh1",
  "key23": "2khXLtvk4wZYfkh22C6wfixJ6EpdvwFdndyeqjNfTUFzs4NSpu2YSaKoBq3QK1wLmYc2NCz9S6TxkkNtzwC5m6U",
  "key24": "wpTN3zrTktHtWvmWFrhzZjLTcb7nLBwCryoUtm3N7pxXnE9KXudqm6ZTTDNbwX4fue8YK2khrX6WTjV4gYKfufr",
  "key25": "5UqJ9mvq9zj1iY6g3K5mjkMzRWtKM1bRUBXqkyBBGFx3skpnjkNLCAYwnTYgEeTBL562RzHKaG3io88tQqmyjTJP",
  "key26": "5VpiSBY5JPHsyFkJXkzHd2XVcfe48CrpjpP26Mnezqmt5BYvPo1fpp6AEJjjMHBT4UfyLab6Q6XRbJgwCKnopbKY",
  "key27": "U3yFWK6H4CWGFiJLi1EGy3ciZK1i6AubG2Q3GYpgHWzpGVJ7qbGzJXHnfzdJQ4AnR2qAwCy5befrSjSs1sK7Dom",
  "key28": "3Fx4SmbSFkCUSTvBeJ99VyZ9mhjP5mBsEGbdusZfGCVCuKpFeUG4JWWwVxRXRSVTeeDVgvuuFtEz9jQEpMD8PBMi",
  "key29": "2CW53jgaBARJqwpyGqJyKWE6kfofqVMWvfNqBncwceCMEi2AVi4k9uNFxMsNmC5M58VRj2U8yfn4MQFxm4sVqJ2w",
  "key30": "3YAeaJ8hhHtduGdXM5H6kCAknBN5QK1wLDgqEu2qQ5ms7SSZeETWsEwAoU2gvmvDNju3gnB8Tyn44xueawDzkVnv",
  "key31": "3aLfbDmQhgxpmutceTm1trawUSViMWsaF8jpU1fVM1kLk6z9ExR4fdBP5UuE5X8PJF2ZZWkJCAQipdzFK6uMw2rd",
  "key32": "3PtYENuUExwuhcC2G567ckUuzAiPmabtAAN5vCkztJknWq82owghF1kBkNP68ZRKzhwgLuP5EgV7rvMQwouPVYRB",
  "key33": "2gXi2guS6vKBktJuaqLmU5U91SJDjT2TzH9dSYjAv8gMr9ikvuZKG3QYwtNDyM9CERzQGWyTffacqgV4B1SQsMD4",
  "key34": "3Unet7cRXqjakQnqok6TYSC8eX2m95SAQ9WezmWqwUkxMALMGoBsxdoDXvQppswQgqt8gMEJchS3A8qfn3xZKUf",
  "key35": "3kHGzmh6FzAYfxHvAVu1srqc7rLV9xEtdndRkoPEzBg6m9Zgoza7PjK69MB15qwHBc4VjqbFv5xcvvKoKiA67tJi"
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
