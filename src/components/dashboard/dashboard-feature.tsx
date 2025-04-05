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
    "3hA2vzckM4ZuhtKf9rGzckHE5nYMDx9QbxfdkPNQPGtQNED6H8Fp9BTxz18ZzetahcwL2AW9pzeqszCkYJJzKjk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RASAo9iKekUtMcqKbRWxWWFq52fEWzcvs2vE8MQ3HeNqSifgABAQh2q2rkwzCSVU2x99PoSJUL9gyeDq6JHKKUJ",
  "key1": "2FJD8LiRKKK1bmSxUxxhznguXJa2xCLRgZ3LoUiKz1xUjxkxHfiFTSzRjydMW31F7ihAjtKWpG47EuRsMQfbdHoB",
  "key2": "2PijvzYc3Tzd8FCiW9XeZGDkb2qRrJagUFqgfnEHXQyMjwgaoVPeB8BGXxtVniGcrE25VXGQif1QW9gGqaUNdbp5",
  "key3": "4p1chi4ZxeSaLVTbT7369BR7xBYZB2F6ECUqGcrbKBHbChpXCbLjotJ4twRZdeVZjfffgjebYS8JFFSoQ5kwrGUB",
  "key4": "2FbhDQqtwWVTjR5ysRhzvN5tDURpmjSKMjpuRfCCz8afHSJyXcdtLM8YEj6Fv7eqfbCiQntDca6nE9VPJyPERWmC",
  "key5": "34W6Dw566b7uUq9zBoAXzf57wA3BM5UFxJ2SvLG1zq3tXGvm4JMyjed9FXSmyRu5QdMmDnLXcdQ4Y78ya8jQHHYv",
  "key6": "3eznrffqpAjprfUysguZsQLi8m1Dr3n5zSzp9Trmc5GdTxsFBf8d9AmXfQBuHfDtAz1EJ4oKT9zMvbqWHac8zjX8",
  "key7": "53jtduaz2RPeJhC3RYnxgC4RkSx9ghKEu9YijSaukYhMq4XydHfrLyY4rfBLRWXrUoheTEsyjDrxS2sy9xu1bKcU",
  "key8": "bsdXjHiJiCbW8aVrY41sbV1FmyE5YPxPqY48hwtE91cXAfTC3VbVeVWvQc7GqWakx3Rpp5FFsBvreUpJsLRa5cp",
  "key9": "2PwfoBXJ1U52nKkVc2LtnXuzkJSBCTkHU1kzPLRZJt3KgnsGeLrDvRYShVyc7Z2Z2hLjFxjpHvsgzy8rwZ7LSCJZ",
  "key10": "5DKF4aX1D8ns2qcP4VEkQwL1CZ72D4w3UtepuKgc5M22FzZ3g5mw7yZDuVxT64AB1yJ3C66MsPrmjAMATE5aajgc",
  "key11": "3jULgU8SqbZW2Xsie8ouMeNwov4DK5eNh3QsrPX1wmiKAaRQSS1smGeMPVj7H4tbpNFUhz8xTKf9HapYpfrTxtbT",
  "key12": "TiYq8rM3dTsKhvCc9XsSjRyTut4n5Q8vBT9ZoGMnMQZ82ZVNyyTcC1kp8d4NcMKYvBUpq9djzSwa8sWgKYnJp4R",
  "key13": "3girF2JzEUu33KV6mRL8MQhgtooz3GQUXzXz8466TxDdE6cgvoj9QBET1QgJekneFSaLPBGfoDGibUxjXjFwaBfR",
  "key14": "2dBanA7pWjkHLUY1insQKnZMLUMjdxKPmF7cqBcVYoBVHKW6rYytbegNv5QepFj8gXpgjzcmc7BGnYv4x7RJ3DVY",
  "key15": "5E8pP8VAQmo2ZkoChujAST9WKMGwXdho2YTTnv2BPbTqpiYSXzb9Mees7n6G5Ji2X1YrfWyZhTUJETNabqPYmf3B",
  "key16": "2w1bZYPWJVbZudDyoYhGUoBej3hir3VpcGWo1GE1YatAsHzLi3NA4FNBfJckK6FGQRpvcAvv9dxcdGodtokfYgbz",
  "key17": "5Q5pvvnDVfZWKxiVWMmreJS25o1xKMahsinPHUJ4nJUKruss5aCRoiytn6cWggfC8XRiMwoNoHgfG6mb3hnNPqaj",
  "key18": "2n9rJVFXggYQXSESGUvuoeXYUxEERUXbSYq4VNFDKZbhjc4SHHfUjcCasSe6KzE33ybYeckrpgxZoaWLjDy6tQSA",
  "key19": "4bjQUu1k9nHNncaG4zCdhdBtwR4tSG716GFN1bC6JUhCHzqoL6AZhdPWYCiLsj1ZRZgQhvpAZzzQqCwwJ4RaqKLf",
  "key20": "4BRmtEtjRSZpGgghQJipggLzWqdU67oacxaaWcTDbrRACy3ZP2LhXES9kKPoNWhQaEkWkDhFxw2Ruce5CAvi4cYQ",
  "key21": "4PRUvWFSfh4rTC9AXiKL7JMjPMgo1b8HpKszLhEQtf9Bfb15gcC86vMZeh7hqrh3p9r3NTEu4ooqQsGPhpJUpvBG",
  "key22": "34x7wxkinv5JBpQDE2bLUUgQqKjRAhi3eykmVqrpuPx6sCabaWuoAUWBF1EbYRMsq24PVoVmdSTE8SLjwUz65PCj",
  "key23": "3HnDLEh32j8wdVJj4D4ofXmh2EhtAcYmy4tQij6dbm7strJXcrScTksebR9z97awjCgKPWZbNykc7w99nGavHnQ6",
  "key24": "4AiKFpUdsDWVv5qKqxoMGaYGD3MSfGpFfUa32GvYs8rqe2CCwE86FsWcbg65KwBhXxGrwJdXqH99RUYcSNADbB4j",
  "key25": "2N1uQb3vdyjZycv6frEsTDrhUgUNE6uVmVUFgxhL3rnhV51A7TttRBjSFSc1tdnFt9QRpdaYgVHegLD5scqPbuYq",
  "key26": "4rTMu3ejWqngrUu8U7V22wuP7urYdGJYXGhgLazn4xaEw9Z8DJxBEZYRj7QKD3ueuB886we63qNuqkoe5AVsGbYw",
  "key27": "585aHvk41mqJw1mHwnUf7YUuNGNeonyU9aeXBdeH1rm26JRPTvg9m7RMVsM4TLtuvjBcDV4EQNwXzg2yhMZdvf14"
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
