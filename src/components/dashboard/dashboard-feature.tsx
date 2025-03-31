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
    "gjHMY9ASodskqyoBgjn2CxmYE74u5vywzMGCry3Jowey9qGLpMjaBAuB9JBLLyVXz1XMJSiR9zaRTycBKgvXALY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kuPYVZkdP8aLZp1KVt3CkwWBLyRZYobTcTSvvTBW3SmU37Rfd3WETFLoQcWiVKAxBzZz6gnkBEo1u15XDmuWUfo",
  "key1": "4Ytr8woetu3kpE4S8UYioXedqwuG28svYK4J4iJZ1Zp8HBkL6Bzn4RTFpPxrVS73PkWt7jegWMWkpWPuK2dpjFSd",
  "key2": "48dvzgrZKNtJW2FU6DBBFRow1s5VkLmaboUUKAgdVPkBS9ARdV9gLgGG2NmEuVGo7CnRV3MQjpiAZqfHndond7fz",
  "key3": "2dzjwU3F8htePmh9CtmfFseWixTAUhytLjpxbruidsLCee4njM6tbtJFsrYRoPwkK4eR6T62LiK9qMH6K6pWSHaw",
  "key4": "5hoop8tE9epgwnDeEHoVjfx9KphFpUAVE8ugE6xNqMEKFFMWbNdLT7ZP8dR1VHiAv9c8mMpzswy1NojbTv6wXQ7",
  "key5": "3rvTiiQ8DsQhfmjwQ1xXMEKAXvL6kcr2AiwMjnmM24NLA17EBKU2BBvpFPLSt9JjGoo3mw7DyLHnaC8UeCHbDBas",
  "key6": "5yGQPMbn4SGVGz4LDacx6WLm5DEozEG6KRkJ2127dzU6WYJMK9t2TooYGBHS9dBXT8XgdpReaqfF2DiLiYMz92Zk",
  "key7": "3fyxR14fzxq9WQjj7UCBP1aQsfcSYB826BVRJDrtSmouQgWqQ9EJpRZo2ALJErxtxcT5Z4tLidJgC3kFG714fZzw",
  "key8": "4TUjD2C1FzR1w37G2XfyqoY3Cn5KpncU7Q8dFkPMMAAUTLTP8tfpZJwpHnxJfKXrFYC2yBVrn8Eto1VwuAann8da",
  "key9": "Y4mLBKo59VDcH8Pd7jUBN5WBcwVs91kCGucXnhtJFMoeJS6FLAsU2eACqt5atPAryrakbtZGPeEH6uJA5J5FeGh",
  "key10": "45LFkxxn1jVEnED4uiBQJBnney6BcnxNmdyhYmS9tjmGeTnc6nyemebzu7gxbQ7rfhBbpenFDUVb4sDETaJTovnD",
  "key11": "k8wH5tUXTiKMafVJznggJc7aaMLLSAFaqga33ESyeYvinykE665ZKgpbsDkxbuqmVtu9fxLFQbrpgPQz3WPhznb",
  "key12": "4fECauRexbyUuUCVsvgpuGKZ5sqSNEbCDqH8MVJvy7grteLnDRPSv8Spfri7F6PtC7ib1dqNvBzGsXBS93tjibN",
  "key13": "4PdaT4r9DL5TC6RXAdYqTyFUuc8uq3Q9SaR3gLEzdquzwWtcMQ6n11715hrN5TzKsuVpumm199NQgFE4mY6rnvtV",
  "key14": "5eferbSW1HqhgSGQeJYgCNPRnknbMBxUC7NL9rYZu7PxyjhY7fJAnXj1h8nJJorXxz9sTjwXpp6BviYSA99oB4pc",
  "key15": "rDSvHp6buhSz2wst2tRcEhJjz6jC8ErVYKinfD8HZjaJ4xGDvpFv4AWvLomDsxPDY68ZwHGFC1ADnE1AGLeYHXj",
  "key16": "2dob8HaeudzkTeSKDsUixU3pSUP7vTunTGKWNAecsCHk4cimKeRxqf5ZW8XUuYxSJHnsxPXFyd8qTbRZp3igwdza",
  "key17": "5wBfdKC8DckNwgbQkNFKaE7wZz1Y4B75UdT3NiwFvzBATv7dah6fkA35KMZX1eRxTD1QgfwmCv8x4gpLZAnbAaz4",
  "key18": "3nzjoJwkebbMo9YBEom6L5qzVP3Kfz58ESVqVVuudT67ai4Udfkx64Qqu7rF6tpKji3iKN7hYY7AbybWEY6LAHtY",
  "key19": "5JdEZmSsDX9kHLfSmTcvdSyS5KczuJT4hAM2SPmLkYFFK8sJYoXzNjmuXZWn9KnsNM2JofUewaB6Xv3zyfZTyuQY",
  "key20": "5FE6UqSUhmjAYiUUwPieSNMRxWApNxCHiKorRvRUtjzXbfJYqFcKy76VBfjhXwoyDaBRLtqumwCC1nQpBXJGHGta",
  "key21": "2mCLNdPqzyYHCs6rZ8YE9EqQLEUSSkLinPDSpwjxYNBQtiNJBToCSsn4xxUoNwD2kxM7XHd44YnohPTuMYbSJLjA",
  "key22": "5762nHqoh7o7o29mgxmtDQRP6keMXSuVz1kZDzHKyogfYdkFb1mVhHcC1mevXF21PiXLxWojcTizubr3HitpYugj",
  "key23": "3GMARvRv6ETGzXX34MUfaU4BeWGqFrSpah2iwZ3Q8gWKLYFud9hQTFXWSiWjsoRFRVPdLFGPqBVEKUUbMJB4iyaA",
  "key24": "5VNCerEeRZtQdQqTtjTNpbpHVDeVqAVoo7ZBSnjcw8xuaHAVrx95F2RhxXnxwXyRrRp15NdsUeLbQq8YKCkJqNki",
  "key25": "5dVbY5KmpFbT6fDzSHj8PvypFvf6K1rGwej4zHrnXDVMeZDJ664u5eYL3svqvbRMegr53YHmY7thyQs8f8mzTZhb",
  "key26": "317XdHGeD5Xw4yRt5WKPcsorXEtFdcdJtao9e6ycNdFPQzxEWsrNo4EuambF2zCmDs1K9yf6C9QYiBEexCfGcxuS",
  "key27": "4kDwzg9QhZAo66PGucTosqE235bK8py9Pc2EhcKjuaWYVm6LYeP1gaJ8H8ZcvDPeR9VQtSN37bThMGmhwe1zj9DY",
  "key28": "5xa5gF9U319MrRVqkBE1NcRhvG9zFaMuLjJ8HQDm3HS7ZrPxNeoqwG5rPzz7Nz8XVqdfzEANd2bgmKwC88s6j8Lt"
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
