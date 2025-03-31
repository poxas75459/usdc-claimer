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
    "4Gapx6UDYx5bkEhmwaEvRVd3kEBYETeTdZeH9W3bW4VNmWTgdea9sopRbR6y9UtbBkxjyA1jgcyx9g1vVhxSL6n3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fNZVn72na3vXN6D7aUeUFvgdoomRP8rpAezDfZZtpxqLgmMT93YatQKchuUReSVzJrD27gtF7y8Uya1fD55YWsP",
  "key1": "45kR5Pzq8nfcvfPkKnqp73hDgGgRhai93maGoHhaPRDVi7JoDgFSjw7FqVCJaRfAJBVxK6MXCUNbyfo8LwZ5z4PC",
  "key2": "5vXDkCsTpQum5nvS6esuZKvQUw19WkMieLsAfHbfvTeXM1pnyhZ5RSMx7nCcZ3L4qUiixMALjPMhxWyUBAfrAzfS",
  "key3": "2GWYE1Y54JP4PsZ5mUrg292Sz4uuiEuafiTShq1Hdr2fmHhGoPxDFEXp49pVS41haDVkEP4toxRsA1CLqmchBTVF",
  "key4": "47m298dgFmf6BsKKYfHKBEJ5VMBCxaoWSNKMcT56SWDH64DovXd5BAb79DdHk73waW2hTnPvmxEaCKr6WpiUq1zk",
  "key5": "4JXAdVcW4moQ6pPJfZ39HWETcT4tTvkPrD4W5VNwCVqiB1qFykr4vXg1kyi6jEp2kWY8hmbt5hELkE9JrCz3Vqxu",
  "key6": "3YstWMWWfy716F9KXcQn6QGS7UDHvU94x8LcRLYZayNxaHo8rHqRjW2QEi3Dc6HWLjMi5iXVdP241iGg64RKZ4Pi",
  "key7": "4ET6gDX52qTpYSz69cD8Ptbid1i6v25yybSnEct4duUe9QgRa7CFJJS6ExpM9zcoLPLE9pnbaBAmhrbrQYdSjsNm",
  "key8": "5AjLWo2GxuqkfZnucbNwdPEnwTSzsHgBgB1gjFYrCJ1htndwE6yRN1N3VyASL8Na9Mp48FcXJ9NmyzB5jM2SGwpb",
  "key9": "32QLyYjsCk46Atngzno53V1kLC44Ncrgouj3iqnFjXwKafS1bm5wvQ3QmutgU5amAAmK5xP7rzmsiSG1yU3Bd2Tt",
  "key10": "2dDjKWSKaDkpdde56ktGxk4JWY2ocNRJKEraEcgnAfNDG8YBXsr7WomhPd39oGPvFkddZr9WiBSecKNWpqZWYo1m",
  "key11": "39L6w8DkDrzSAbowG3sjYU2eVJ9ZM7JcGcPKcMfvZQJaWfc6Lp8FR5qU8SY8cSn24SBnqxbsMyowYukYqc41vFuf",
  "key12": "5NXYrBX8VebYQG1GdHsSYM9zKzuqAVAwe9ftsyGa6V2STVSb63Jx9carZG8A2UdvnR3pn3NXGfdytVBu4PY3BrQq",
  "key13": "5LtwYcvDVBpisdKfeTHKZCtU2aRym8nqUVDoTtbmcK6keQXUv1WjsRgdjpoGGM9gvQbFL4DK9KvR1uc9uWdApTYc",
  "key14": "66thtp2uKXcLC5P1utq9Q9HhBaugZgXyEk7YLiGbrUYxnh4WG17uKVg2epCeQQrjgswYX5uf6TphjSTj7zNLM1JE",
  "key15": "2RRQZeTULHbbt5fiQ9zwgfK934Ai5N1CvHXxzDx9f5sPe8tWCBJGQXx3QWgsxHctUW2WbnfB8z68y7yvqJa1WKn5",
  "key16": "3XwffW7DAHjjqNfsWDhndcqZyU2rJbY2ZHvSk2cE6JM5ZZmkX9RzEqKwiPcC5io6BzYHQRLEYHfaofGrtNGmzzyS",
  "key17": "3gWYnZSqqZiaFAVVt6c91CLCsPPdnv8eo6z2rj8DTMSqAb6opaoJ7NdzzRxUR5UaQTm4CR2UfMFbo9LBw2CWyPvb",
  "key18": "61UCtA7ZMzWkchVsxMmnVNytakLVYQCb4U8nrb9taehHuE85S2fCoem8eB1p4BEexx94dCUZMsZiV7Y7evCxNHqL",
  "key19": "3b4syfMMBEkG3EMe8qBg2ASASDYAZ21f1HDUqvbxNW4ydhU8C4xvfRysnJB5B1AJG4KRLM45Emk9bh7wWUYgYgkG",
  "key20": "2xS3ascrnqHcmykR8dmEzCwYSD2DLQbSg6fumkXvg4hPyjsjjoS5ta6KhUmpnKEpoWdAHTvMuRpe9AiiJPtNGn3N",
  "key21": "3sb6bmksboRB3k9hLbQfuw9A6PngPEmtkurVw8i5WArErK2ya4rzhMAyQWttMkZpYhwTAMi4EYSUJ9NvK8X2QV1j",
  "key22": "3FV5RAWZkJYLLKXdgjawaBoi6iy8BCSTcwVs3bGhtbSoBaZRHbnpAkcC34CVbxcvCjL4G3txgMwPJXUEtCWtE9jf",
  "key23": "4sXkHVRvAPiVF973HUms7fthvdwVd1oF6YEoRP4i3sgoru7VtX5XZn2VbhkVi4B4fckF9MyWHqzjtxJWA5hnbS8R",
  "key24": "5MppGxRenooKrYSdBMMRcfq1oG46xCYNVhJTExZyk3U5dw5S6cZF9DjQSm9WayZ6iVVbNJu5G3Juk9Vq5XzXMtEh"
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
