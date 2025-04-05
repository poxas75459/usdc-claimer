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
    "2ukx879VXDRsANqyxC1ZSYXK1a8cHuas6XueYfvrZHuDrD2JHc7JcRCGSRsqW53SBvRoN6RrAk3gytKwgXyANZyb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Se85bw87gTKd7DkqqvLgmPizXzZjAzauii4MNkMTg4roFJhHh5Q36jv3dF5nYyEsiNTZDaMLjJ4ExAHTegW5CP",
  "key1": "47SF3SRS5JzUsQ2Ha4C8pHdbZepwBphtCQBQNWqSFQRttcNNjPSDR2Q7uZYUG1d3bAQPbs9qjYxTpzQCg9bCPfsT",
  "key2": "23AFBguUHa3o3bHfi5KDAj2StNX7hd6jm6Moza6R4bJKi9b9nKL61MxqiavC67mZwhnTKFbzZAwTq1Agrkoy5y4j",
  "key3": "4pTvxk26JtidU33SBbjowtAoudrBRTZuUqGLken5FUXG8G3o2hwiLGdKbEDZg6uQ3qouCYKVpP3L6CsaYU91BjUw",
  "key4": "63X3ogz1WVCUw1M75SZA8h8GqDKVTbYakWqEFbzAFLDMTwYJs3cK8LMoe8D2M81YXr84i13ZRYgucrjefRUJjoww",
  "key5": "5RWYCJ1hYvHvZDe28Dho4xxWcE3cfGUrTVUASGunG8VtRqDhiEm2sE9NWrWUsJdg7KoC2gAgAERQHEe1scLBenEz",
  "key6": "4uxHS5MPDtxFAsxMd1ZnZTMwKHN53MFMpbwZeyKJNtyJKa1fdYPGS1fJJ4Fyn7hFaKNUjM9tP3PEhEg7KfA7ySEu",
  "key7": "59vYt8jMPgQktMRsTYuKdQdqhPd8V3DnvQgfkRxDCbt4qCeY1vGNkrVHsJ9FpgJFgicqaGVyKKKFXY2qt3ioeHsK",
  "key8": "2TcrBEdx2zcGwKNNfhMthprFKACUZ22U4eSk5L6TtDzJoEuikZ9cHRm1b8epVqqjkfUp7gFDTHp1nEyGUBozii7",
  "key9": "4XPAsGTKcap3zrgfHMDc1kAiM3jVfbReZrAPv93JoraMo1RRUm9f5t4qd4ZUiVdfAv51Y5bYqU5R5Kzn2iSFF5QV",
  "key10": "4mf13FURXe7kaRFZvqWexW3Sxzno5WcTqfByZgSeddLv8xQ131qRgTEnU52qbfa27nsixz6xRdJPfmv93qbHNvnL",
  "key11": "4gVpQxX94qLwkm11VJsps1qWk3d3JdMyfncWovMsN4SnmxpvpSGgDMeka29U8VBHHmr3WZTQvkycUeA2DkiYPnFh",
  "key12": "4DbD5VEygvrmQ6UpYLCXNBPNKpq831qyLL6jtQib5FuUGYHrCv6NZ5UN4dqcASSLLmYmKUJQL1s9oyMFgCu7kEMT",
  "key13": "22Y5jDP7DC8tmUMksEjHpEzKPHmZp3yQqLfTyD8zrpDSogyXM8vBbgWiD5rhEmeVZ9N8ugQNtHX7t6fiMQ3UpxFJ",
  "key14": "2upY19hfkx4oS1zm4KvvuHutzDSKozKzMGScmr6bT2pMQHRCTaQaKa8YrADZQXNgew8GR67t2qPC1uzHAUyAZZQr",
  "key15": "62wYVnzrc721FsAjRn5tQGGbDai1UehHy7Ph7jpA6daay4owRUJMfP1tfUvuAvyxMGm9UVdiWezijPcr8feUNhYH",
  "key16": "4CKEhdaBw6jVRbP7Zg1JNkGnBoPZbBtV4L4SdcwnaF5yFrKfiU765WmCUYvSE9P1KCz2yHR3tEQiEHDbEvTGPfsr",
  "key17": "4TskzSX1kUEFyWXjUUaDZrShT9s2Gh19VF1BHXB8D3sqDvZ76C8yaUzPE8jhgHWZp52nvJhVBmF68iH1EcWxG9Cs",
  "key18": "2tsy4fougpEmPQR5LPd94s8NLXCQ8rtvzvL3hcskvpawriprVQBjoE9vj47jZtsWozabH5rWPpfNhW7MvghkH223",
  "key19": "2th2mA3Kme45HzBwddEfkoQQMQPzsWBJBP5fFKXm8wE1hXkyMFCjpXpgRH9B2KZrfgPdv3ZQnBARY3kxwLhbiWXH",
  "key20": "nA7dXjfrX96Fig6z6faz1tVWUd33FQsbkpXbm83z4zbkyxVsE95AZBgndqDc8Z3dYfg4Rzdtdy7T5mQKGxZfjpM",
  "key21": "og9EzmVySHkzAMETVxqAzPMTUtZwvU1m8Csi1pv7tFWR9eXHS7XFjHFhHM2RSaV9xUaQXPTUJ49WLUYKwGpHvFq",
  "key22": "gNNy8BmgFtSARVYNNKTgbQTeTpZqAfu8xwFXi7ALCgB952A69Axcx2Yr2CXPfYDdeVpH1oiqYMyRwQKg7oKtmYv",
  "key23": "3xj6J1ce1A7vrTnysQraD4oThMmx5LLuvEKjAwypuvmJCJjt7JTvcCv3ZB6p8PgcGiTanQ1JgUqX5E4rE9rkX3vm",
  "key24": "3erFGaqhBtofhDTGGFKog2Wit9G8xyzxLH6UcuQ3Nqe7C6Hg4vxuzosDdNtdzpLYRHHum7FodYtJVPu2vqomvP21"
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
