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
    "6CTH8nc43yCnijiMqH4isJ8EDy7RWeVHJXnxoEeSuHvcccBj57qogRubUgaXVDL6vLWiqDC3g2zQ8pzXQkT1Er3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uMfWVJbSVjiKXacg2z67ciLX92ZGvZZaW5NxTR4GEdYsWaDN3z4tVvw2nz2qeAeaHxaEwrRuZ8jruoFVrPbsGCS",
  "key1": "2dzSjNNHgnq6AUgLt681eED8sKPTEpqRVJLnMyC7oeczfzsXFeiikdrKjfZ4YtSy3g46YX2q9nkuSTn5tmRAoqP5",
  "key2": "3w9y4nkfNspvZHW9F7eQbHGW6iDedCeYvUM2pSpTMrFa29YJJpNMzZiSSSCjJ6Cspt1oJf4ytnHaZ9cZKiiMkG3F",
  "key3": "27CjegnaEMDcw5VUdgzgKL4c3peqk4B829TG36VjXWDrCRKHTT6zVMwCfSbv9Wj9DonzTut5qsQZDVUDKYdWTZif",
  "key4": "uAiNZTrEz2Xi2v1NhWrksZV6MLrckjRjrHNrXvi8vrLNs4WbXhNwVddsZCwtmBjF8FGD6o1LEAimPAqybpio2ez",
  "key5": "5PRYn4ou1UzZCwFqDaeYt3iQMDvZdRjiFwKcUFXCGyCey8PLAK5UoGDqHzLVSYkfeWpxzZwtxkbDzWddH5y6Po1Q",
  "key6": "54pkvNJDfzMLE74ZEPZEJsyhWg4oKRmV7CvjVSP8uoKf1ETEvi9oLDYPAcNR2CMh7GkvKFqHVc6Z6gyTPgC5box3",
  "key7": "wvTdYyfcwt3hJ4Dr7mXps5Ke9M2AYREr2pbbMSfARNx8aoMgmEnGQC6628MEFNzKV1qP6bsDUC7b7WTDPfHrXwN",
  "key8": "f4a5m4SethrLgrkZMGZKLD3ZMPvX38zYx4zFp34G6jP14JVqkQsr8gEjcfKozga4bToQrN261f4j5EeDLHc3KXe",
  "key9": "4NJ1KuZSGWF3epKyH6gYSZyxUdYkgy8283iYpA1hrTEACwdPjMhTh7DvT58g7rnTVAd8Sop2dxh3ZUehRosBh7qP",
  "key10": "5SFaCnARmdZ8QZfo5eX9EQfroPDC16bGVxiivZS7qAk894G3wq7GLg3oBxYAKCFpwzGDsBrFqa6njkgv8ckvVvZa",
  "key11": "3jkv5QUBodGJNhATNKGJtJv68ndoYKCEJCTZvUYwcZLiHeWPcv84TW8wpE9pcHNTegFxcvXN1V1Y8ndywhCm3Fte",
  "key12": "4i7QgQAiqQqdNhuHhkxpind67RxBhswZF92vzDVFMXEivjHig222sDggj84P4QjfA8gfZSu7VtMoaL1yjXEPYptU",
  "key13": "4Gy2ntZ2cxFEoJJFJRyYb66eT9giNaFgKYWKRyXNXa5om2wydVfqocKho6Tqodwwk3NCnyABPuuyQpGr4RDwqoL1",
  "key14": "3pN7zEpgCKD83K5gC7pwrxyd7TvSVAoW9iNMd7RgQ6uohNod8zJbnMjDa8gDF1ExQCin7s8dTPWw7URXDJMULF3h",
  "key15": "4LjHnCAxdApXoAsf6fQqV5vGGLGnweKtmcTibiVvs6cenkjq8M2YWfP9ivY7ZQFWTBtXNcNZQr1ZEWTNg5UygioZ",
  "key16": "5htc5sDmaeuQ5evvxEo9rN8xAExqKwvPcpwjh1FdwL8drAhKjXE6VRhiuSFoHrGmB4pZ6Kd3cJERrFK6DCorAZQP",
  "key17": "4ek6EtGWHE3H3oQ1QGtm5BYoCb8Zu3qzoxShF4tidZNFq9Zn9br2YiKZWPNKu1kf8zMLLVt9DZqbJ2vsdsHd2MBL",
  "key18": "56N3hw8Ggub2ZLKHVdUoYQ4LhRAwhUrXKNjuMJhFNERLkn5CD7rP2bE2VhKpC76QTr52efAmtd3HJHw1mhRM78qL",
  "key19": "37wzvXZq79YkZq7uChSNdAvoGhMdx7Nisp8Fizz6WVQbdD8X9w6GZET4y4U6pGuaA5rdLEKEyVsAwV1idkpFA7jU",
  "key20": "A4BsCL6ck7uGePL6x3SQ6SwoMkTnUjhwpiujCuN1gCekpoy6Q1FXDRvcnK8rM1BrvZjdn97Pt1bHBtEytXzsXnN",
  "key21": "2yS8H2BpJW7RwhSC6tMtmPNQpeq1qppgYAG75uDdU6ptQzMjR6QfUW6gCxvFgiSg4SVNVwj8jnAKyPqkzkEJvpZz",
  "key22": "FMog1sx4xG7H8ykkNaTFLsPZ8f9Yfm46jtapyYW2SV81WQoxpVRtdchAV3JBKmRcNXAvjpDWjMPkF6KsS98iwxm",
  "key23": "39AuEqq8ZmUNk7JVZqHcTAN2XZfyi3DxLJmXCTZnB5xF4maxfp18tMivTgXAGTbz1dkhdDGteb4gqbf7VpoY21zT",
  "key24": "3HCwpAHxsXe9RgeQmyqfVWCbVN1KQ3JkWjcjkPbUGWSHf3YaXiR1e72qrLyYjZLRT3eUyBc2Z7Z5nv8iB7Kw6a1s",
  "key25": "23hY3tBUBjhCaG1yPKDfEVUj56qiBmdBJay8np8btjzNRXVpZbjfeN3WxSL9NiPSyiP3Le6vmFprV9QTSfxxvzUD",
  "key26": "kQPpdw4WpvNY435UywPxDyG2DsH9YVZ5qrJd6VBnixKxR2L8HxABQvGsFoNGY9WrfLJHNVuanRqdKyJwAJdQ1n8",
  "key27": "JvGRSK9dVeAbv5uMXpFzbDK9jzVftXWP7b2ruhStLzbMY1i6ieSzB1iJ8ZYBUyPUVU9gjoP4HrB5KiJGgSh7Hp2",
  "key28": "2BuxQM7GHh1eTeBCxCLD2A5bWw2ejrxMvAeSzaK8CjAiaeCfGSMyEt5f8URmPNNT3n4fDrC4GKnvsKWZm93qJyS5"
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
