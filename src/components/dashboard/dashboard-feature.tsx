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
    "582CFEQoqa97j3zk28c6ufsqF445c6DJ4Z3N41NYM7tTMSEfNUVdYyQkHcZbVw73dRUbNCQCosZAcNzh6XZjmLmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aREXMiJvvyZ4T8nW7kanurM23jHFGrD1XALknQZmR6MgZ9ge2LR8AyH6aUyKhiNW1mbU33oCcGBcGK4vD9BxUwt",
  "key1": "CMhEA3xBDpS7w9SXHxzEErQrnHk9BEZqcend8qn2tzJbXjKKXF4JaFnEoz6KKo769Md6jB1xCk8CQwL3LiGDpmt",
  "key2": "2uwpBPvDNLgPpEpH3vNHh5PgC4ygGF15UAUWCnpGG2zRavsVKzPX2apsM24Ywd388AG9VCLrNbh6QBoU9DGmg8TA",
  "key3": "5gydH63MtxE87zD5MQh7XYNQvkGWJpJJ9W847YMwh7SBB5LEDF3Evnzg5wKzpih4uZEhCWFbLZGXEEGk8qtPVvdC",
  "key4": "4dQ7cvPAb5Wso3va3QncR3B4BVAjaJGf8Z8HRjPmnpdYt9EffauoZWpQogH2VXKAqdFP4QdiiBzph3j2yS8RAjYx",
  "key5": "2Whfk2qbQZkCvW7SCNWsvDrGB8NKvGsqaA2reELhR73ijMKK3eRESLuTM3WTEYVoRTJVRTFfzVyG5eoSdrX7xzx",
  "key6": "4162mQKyAAmA4wuwU7ijAyJ7nTjBFhyrytN6P2d3GSrUSdZmMTRLpMgWXVhvR3oZypxq2dUpCcHCGi7NjjYSWopG",
  "key7": "4SVdnvqN7hJTcxTzPXKK63VUNJBo4mn5fX6WrhsgpdVSSvkSj3RhZwdfhwGGwG88tPqEyqgxwaooaVoHg9hU9xKt",
  "key8": "3kpVvbUYMbrbxWaee9vYU7KGoBxYN4GiiviCUXhrbUb6ZMzE8bubeVN5oJTfLfBYSTAEZR44xqLqXnA2yJw9MFkk",
  "key9": "5dXHNRFtd4KYyFF5j7UbvCSMWk1HxbsfdBAg1B9Fc1QZHArVubMnNYTkjQBBp8HysN9BRhmzgoC19dvKRnG26zVu",
  "key10": "2We9ZyxrRzG7sGd2Kpq4zJoyu8BknX97Cj8UHJM9PnL7em94RkjG88fYoaifaJEmL9sqtp66YGYzqUFiSZg33b2g",
  "key11": "64FmbBZ18ostir4Jt8uTpX9RikGy7ExZhXWdND5NfiiecEqayz5Lnj8mYsBzLHmzup5EY1mXjZJEoiy17TxxNtnd",
  "key12": "5aeo5QZ6yJ4bdnkXcxrNuGjBL4aaMtZ2g4wGAHxWezuSP6aVwTq6A5xyVWdHFtx1hDMT3rNV5pShhqmmK2s6LqNJ",
  "key13": "22bcGiPChVHhRjVoQEWEJix3iTT6HdmXwcBg18DbAC7KgeXAdYQ1R9DPd6aEyTQD5ywpfF51o9AMzG93Mzujh2ma",
  "key14": "32kAY5Z42cwH2eaB851ePK1VpM3UrtS2RM9zMeiEn8jL2Ceo9HS3XvJWVSUtyXyNQfpxsH9YEgBt6YzpWcyqAmHY",
  "key15": "3Tr539dnhNPzoTW71bVRNnWHrfQCfR1NcJ7sEdAbBeB7qvSzssXyaUng6F4nncyeyn74CwD3BrGg8sxxtkQS93ka",
  "key16": "2px7LDNzzqnVy5tXvBqnmL55yrmuc3ei1coaArUVLPz3d1A86sz1XvQAT2zrBhbmpo3gnEiKoucHdKNV41iLGy7f",
  "key17": "3z6RxpSdqkzSD9vxuY1NkK3Z4ArFuNuL66PkMETTCtYp9vD36Qo76Zwg1PdPKRm3ikveB4ZvGfAwY7W2vcDKpY7D",
  "key18": "2rzGLb64pnaJruxft7azTEeWMTEYFhkz8J1kDEPQ336bwHtVMgFeSVB6u4BGoPSdSHbW61fS6gXvbN9i3y6qxhcx",
  "key19": "3HqcHtiySCWQZMa45HTV1C2hPpkD9Vn4wzQenWrk1xRKLw7qJeSsP4j2GR3aZ3qXtnpdf5o7tbkBVAAfLgKZYQsY",
  "key20": "3XHAnndJ73KsdZjx7fbHm4eRgNiX8JqCovstC24CRnKQRPxsct3KaH1DG7i91AiPPQrUV9cn7zhxXHBKaRdAM7vB",
  "key21": "2gUGCn6ecr7DAjE3xj73QAiNbrXoT7DygddEHPemhgp5jweWdQaowgjA3Jz1UCGmqZuAvT4ParHfgQqiBotyhV1Y",
  "key22": "5HSxuhZfZH2t8nnypmeZq3fM4sdoeMSem4xD9QZnLMwUXQBtWuCxnx5SVhTdszz2dF33FoXyVgdGW2CzTbDvc7DU",
  "key23": "4SCs6x1Bh3YssrM4fdznNnFAs5gQf1FvpSD4uN18G1zeSKsMPmtJhK2uQjoD6rKvyBwKWBegoWZHnvKsjCFhxtuU",
  "key24": "4bfEeD83DecRofJrVqyc6sgTszbzRzkntTHTa4F6KiJYWUNfas5inyhxdiwyyVMXvn8PgiS2Mznw41AEEJYVDW7V",
  "key25": "3nDpXNFoCeDDNyGkLW1cKCzdbTZNpFBxV2b35mjnwjs1gCwNQCB9p8Qdcxa4UuUSMX4XiFe4kc3Keu59cfSm6FdR",
  "key26": "4BPrwhUjbWdUkwcnRY3R3G2QrFoFP16Aa8T6XCBx2Zc7Ce7fLgARUnAFifkGY7SKKW6cGsXMnzh4upt8HFPjdncb",
  "key27": "3R9kBX5xPFA5w8mTnTRHWh3ZDsKsEvPGFG3GHJVm5AnBZUuHw1or9rwuaLXvnVAWZkfntkMxYVxP3kke2WGnS26E",
  "key28": "2UPy8RYYQb6gKDKUBKR8iz1fG2WmwkQr2yPey6jJUkNva39DjVLicUi8XgvBLYteqjy1BvPmWwSnNq9rZJWzGiX8",
  "key29": "RsSJ16npKDUPPYPYAaK4NkbiyYYn5Zrh9313cswKt2832yTjZem4kgGmQyUFWXuM3r7EXatAWkMBcDYP6EhEoPQ",
  "key30": "3z2Ri1B73QpXqo4rsm6jgH2qVGLFBuKQDwjGsFCrbsRbVRjgNfWmZpXRx1NDcn6tGW3xJeScS5b71iraspcFRFSM",
  "key31": "ak5zKQtE3gNAaAoJT12CHSwT3iGxEZhMXhaVfgqX8ocrQLigwjPUNEyjyANZc3T9R8sN8ffMMSSB6BbpxEDKLFj",
  "key32": "aECjtVXEoxjNfxT6sBMFjvFGCNqYfCKBiMgXWC5W2QFHMsXcnVcgHDECXnq66WfkW43egu4yr41A7VE6BpnHQpT",
  "key33": "31d94eaeL99C25sGTJfU3g8n5dX45CgVt1bS1uN4ZTDNreEBuYKfqhT4EkiGPXL59dE6xRH3SNi14TCZs7xajGVQ",
  "key34": "46kw6QDM56v32iXsEvPQ6sLCqEUybWShobWFNP4vXD4r8YpoGan3vjCLxhmUW8jMfYNKdLGtk2goeH6H6YebyLYM",
  "key35": "4UvgQXqp2qzzqdCynGTYri7MYkmuqav9EFMEJ9rPP8b8vHEsYzMbi5uidYP8xdMGAQV9aALhitTAVW4arV85oLjh",
  "key36": "AAWToiW2apUPcRF5uMKe6pr2Y32nCzMg5T7C5H6yqecy9gfUywBFZFJhU4MD1TdNpC3c7VEMkDXMxwPEa8FnRGV",
  "key37": "2eX5GF6y5ucydTagYpT8J2ZUwdV4CUPauciCwvprmSHprK1ccFswMHpUKuMhjwGWPsGHEsveVyUuiGGjv2z3SB8e",
  "key38": "3dd822hSFP484jwtdtwfQNTDL1zKDunojHPEsbZkHX9GrithD5qao9D31DYq46fhhQByQekQbMSQxfq5hQywpnx9",
  "key39": "MWesXDtkE1GqQWAK8NarSYgBvHEErQ5YC3UV9ucvReSJ6xJRpSKzpWtxh3cN4SBgKFMBXJRqgUHNwWVG8SZKwSU",
  "key40": "4TrjS6jhYhRMjRXXpV8MpC1ZuaRgNNnpmC87SHsEnu6yu2TFxDmzKAQrAsMzdn5UH1SDUUc8NqdbFuY2gUU3jEa",
  "key41": "qMYUi6VspgrSfX9nFsAnMX1t1cU4htDGD3aM6bKzStqkzGtsqVySndHjLNDQc9KjnyzBbGsaiJz1jQwx1yUm385",
  "key42": "3EnuBKUusWkoULdf5zrn5eohRKo9QERLPfESEnv55Qgfsma5DcS4KqsCLWPozRWtDAoTaB9WJWyyndCP1LWyWpdf",
  "key43": "63SYu3ag8xwFzpgAQv3r2df6V8DNetBnqCF3Q5v92UWV4tVtUCbCAw5APD4RBwAa8KLawYjKA6rkF4UqDVpkaqMQ",
  "key44": "4nJi38wueNRShsxZHYzCz6cazBmtdXCL8fdPUQW2dhr2G1uLy8BtD78WWMFp4K7CWSL8j4yVj3CYHc48Pe1E8rFP",
  "key45": "amEuDsqCNAgtRDZ2SyEzsQRSnBjhRc9tUCrBPTFPLt5fpgy8983KbPtNePHHZ2FvpxTZhNgj8X3pAG6oC8uiwWF",
  "key46": "5Sq5kpBYmQjK3YHVoat2Mt2EtAisDThykanRqSvRPL4JPY4putnMqFdKQ2ww7aG84cYFtnf1yxxJvpkS3f8Xeb9y",
  "key47": "4PgEHwDcscmABZeLYxU8LmVUL8rBVm6gekD5J7T4Z4F1xXPinP7MKJBFeVRnQKp9e4AjvjxWvScT72jZCJWQ9nQP"
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
