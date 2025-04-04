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
    "4t6rybwhoJ2XjAWvoBQJ4DF6ARpx8ftpGTdp4qduhH3nRXavU7CT8rVqNv8fu2oecFdsbcQLWabM8jm8aWUeuF8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FCiJP53oLYsVa7dEzxJuwvS5zH3NbBChsUH5oTU8Roo83kg9wqJCz2AVy4hsGTpUbzuP9L7dzVbRY2qCMGAf41Y",
  "key1": "2SqNRrQKtTk9SohKTa7iVaFFFqksScgiEc34cUVApjLtCHYqb6acAhtddkhxzE7BepuBTSAce1UhjQLaUmUK8Mhw",
  "key2": "5AsfrZcMn5484YwHbEtgZbJxzBJh9HzV5fUqevnHDQSZvnUZ1nwE3YburwhMKkgEjPJDzf6YQ9B1zZNqgDCGGBto",
  "key3": "2uApnFr6jKf2atLqRQwWVwhc8dWR2ZjqbGbnTY3e1m6y9JVvsg6uo6UELrdkLL7wtYzJJTNSesuP7zFhzsbe5ERN",
  "key4": "3fVQaS5fe3YHSRdmaMaTUX4f55nRA5kC4KbTMjvCXTwbPHbfU9Hx4R1sjdUZekiJBnMo3EVA6JdSduHqESnZeh33",
  "key5": "3TfG5484KSwFRG4LfjE4C8YDkXAWdpcgk2GFAcc77n1Nkw9WgeGenc6LkPRhWQzVVG2yEtVoWt925peGf3NVDHnD",
  "key6": "4FJJRBxFy5k6mdkuhRkmfr7UiziFUUYBHa5wPWyBuVKGjnfsuQFbYxGSqt5uraFkdNaYmJBhpc7XZ2XN2dsNKhDt",
  "key7": "3fJCG8D2m4B4zX4LWXfjGNrHbMt89LsGKCZJAZP2WJZvnSRPjKtyPrbso41u5mNromopeFRz3gukXXmNR8oiqcJj",
  "key8": "5Z7ycbriVpmYZvot2jrjVmstGUamQoz7emc523oUiCHqYFRbknU4DBENPRLWmFTXoomwCcygF9Hk1g9c6zBDnvJG",
  "key9": "5ZaJV7JGaZhdsf6xnLnnW7RpL9UEEUM9JBird8SiPWuwqqwt1YV1LQyxJya2wtkpYs2mJBpQgF455yuJK1TQBUqJ",
  "key10": "4LLuTR3rfyuwXEbzEiZ7vpy6QMgwxmEiU4zzBBt1feDhhUhvxD4ot2uEYDx2HXvSk2sCnGTQBWP4DdA7QRwK3nm6",
  "key11": "wTVkAN7LqCnHCzYsph1tw6eBnXyLsnRwmnDMEWZcJ372abWe3QGfwZQF6CjEm8ZkcybdA4Uf4xgGpH6q6WRc2vT",
  "key12": "2VuRJcL2jfSNKXDHM1395Ag4oGnKYfhxqMf74EwdvG1DvktfTp673CAunpektmCwnNUvdbZcxpEQs8YiSHrhKAxi",
  "key13": "2sknVLBktwCcYXicZQvPCv8c7b8cpaEMkJ7YKoK5mihrevRKYrF2TeaxzvJro7kaJUUL5g9MnXWbZW7p7aT8rwg",
  "key14": "Y9ySxsq6kJFqNEyxtxvK8MbdsYcbPRXzuX1d86zuiFtGSYjEBD87X1wiQmQyffRCkAkJVfGCDye4QCntTJqn2wc",
  "key15": "5sC9HeF99REXgofkJJK5tdicmynxeumXTaeRaSPM6H3et32kasg3ETW4GCLsjpXp5NqXMjfnJPBRQbDVaqCjVi7T",
  "key16": "NZB8za5kz9WmR3kiccQzuzazVYLjXN3rdSofvq5a6aY5pwFF7x4vPkrHgWLsFUWw5SnNmUfKXRPmWpS2sAfVBBv",
  "key17": "5pDvMUsGRNqwfUcZucNB3sUm5WsvYyKJcHnRnqD6VN5bKvEM1pt5G8Jk7tRcTca1TTAWcBDVDpxYEDGMn7BfN2YN",
  "key18": "5jeMdTXNhqk7svSxmbYKCGSJYYJWtwL2uUuQ2DbGh4CUZbCZyVsdAFJxe7yHyD8uC2ArA4WpYYarToUgrEJH4dr1",
  "key19": "vLMWSYdpjMmLx6zC1CHgCgzwN4MMLyuDoWAvxhYAjDmioRKRBCQWV5fzv4DFCNZX4Msj4HRB5kHAhgph3cUitRf",
  "key20": "4NcvTXFFdaEsUbM47yeE2bVDysVYJhHygFPoa3kuBHRUgu9qX5Hk1kWYKkyexV2mvNsNG8DxD8sKzcC8KgShTYX3",
  "key21": "3cgaj1iCFWkAng4kM1oXR6kysDNG53csxUFU24y5x8AtdJUNwaU9vvJwudSaZERCK6Y6wo38PJG3VtMpEEY3u2Wm",
  "key22": "4jGPMX8F2Sw99KHjFUEpoF3WVx1DEtqraj7zFvoLQCQEpsmNJGPW2CGHTXkzUVdmBeUBmek1kJ7H9FtqBsVn1gdM",
  "key23": "3K4u63bEa8o9HW7Jc6K2oAuBVYvD5LCXF9TC7vGS1AP5K72Gh59yaSmRV3taDk9kxtdgt2HYG88br7QpfG8t5wf",
  "key24": "2WHEMD2itNgC1M7LHGwViB856rwx61AhS1QpjojcGKbEwKf3q7iAAHxC6ah3T48CYRXHdckDt1zZt6jwQ6MwCdYJ"
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
