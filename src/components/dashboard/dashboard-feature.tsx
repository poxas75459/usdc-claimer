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
    "4r9EVaqnQ1qRgjN9M9zrBAJ2gTw8LVaZEBmSnGbxaQ4bkGzCeYCPDQNkwQSw2cAWfR4nPL315CjkfKRx6Jk2Cb4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n4FdCUiyT8x7EVHdnkfUdacDKexMTB9aDThhTh4zhPYwoZTPALa3i2jWz2a3gq4Aj4mFTcJFf3m2RHULqTsPSG1",
  "key1": "2Ej7ST73uKvUKjTZwW61ixoiJ51WS9cFULkq89Ru9ATM5JcTY9SrBgM9TNcx5hYgzmjd7Yn1KGCHEvZKXZ7H9nJ3",
  "key2": "GWpRoaEi5RX82vNRym2GdmRDhSbsQH6Pwqz5MuhrxFzDhnQftU6ygyJo1PZHseV45ZWfp6tcDaUXDX5gj5k1M2T",
  "key3": "3hFfxPk1UFuVqmAc8NaKN2PkNbGZBWLBoUZ2zVsFMtqwm44tuSEpx5QV4wzksALEYvhcnvqhfKV5iVBmDNwqDHxs",
  "key4": "RW3qKriWRBtC28VHQSWP5YMiBAbdW48Ht2YsTP3SHMNaKSP6vmVVgJYVHsJWPn2v6zQwe6FKsjCxcgpLMhcFhz3",
  "key5": "2mEa9tStc8wngDx8RKsTt5GWCt2yty5a3vVrNfcQ2gUaZo91Yu5GLZMFgobX4oEy1gXVHcmJwNh7xMi8zH5o8wXD",
  "key6": "62uCR3HjZY9kw3BKnWKGmu8j7cScWxkPFpseg3cDNapnaAQ1zRV2UGCd4HnPqb34zGfRTmqeHqz8GguGHLuDshYT",
  "key7": "21aeN74hX9sgZxHTK97mHzt3SmSkNChNc72DqsJaf2QpTrUQF2mGoZFYyZSrNPbtQPzpQD23zAasrn2PS9C7ErBv",
  "key8": "2dsQtFntP7kx8WVMT78ZU8KeJW14gWBFg1odar5hTb6JauRmuPAjJ35XZHbBL2ddQtujDa1PPqwK5jENqr6RH1At",
  "key9": "tpy1b6siMoXJDX9czsfRb5gbR5g41dfSy7qxYMDQhYoPvcKbCDLo6xTtjLnNVRjdVMK4qvSrgsWq2Rir9SqM7PA",
  "key10": "3cRJP3HPe87KRRbP81mFu6iksXg8YMiuj91mwGssixiLhq5vYxGNCamU9S8m1LtugYEnWRN8JDK8KLzUFMNu6gYf",
  "key11": "5xMbfWgCisZMMpgXK1bPgEgFgykG7NhsNj2u2tUSe2JW8pavx2MmRgnNk4ztJ9u49iqS1LkFdvFesvnPXKHXjwws",
  "key12": "2LNZ3yubT22spwxqSx2CNU17TXVKMVpDZKzAnhGKpSbx7jTLgmX5ZiU9igch4GhTzXGBVMV8VX4ggK8ExWRaG2mW",
  "key13": "3dLeNinHc36yVTDKJsvyQ9foN98L1sbffwSxMg9797zaisgLn5EeiSSmggNjh4XwxxSzcq1aPygdPtZMRkRKYmrT",
  "key14": "2JZ2wEGS7VYZincxj1j6ZwugptSBQkQC6b5VSWvwwxJSSSufAXm15SczyFn3fC7GsRTtBH6VwvVSRtVJne683UX8",
  "key15": "4ahLGSKP7uZFEUYR6LwvZaLD6gjL174sSN6C35atXnGLJGyu7xJJCBkpCaNbpyDA9Yct9zFNK5ovgUd1aybocBbL",
  "key16": "4BBxSCuovbP1qyqTRMYpMQuyrfSVPU8xR6nYqceVEXXzrdFgV2ymafoNKn5vQHmgnJz7M85cezXgzBRBqSPcAhCK",
  "key17": "4mAboHHxTPXyXec3QiskV5zgQtntxm8V3ZBpmB9Cjwuev6K5M9wJGPm9vzfvVLo4ySNRtrYcLCTHwJnPrkb1rfVx",
  "key18": "2H694p72rA2jbC7cWkkEubQWNjM2v2QHQ1BLZX1o2Gr8Bs8neMzyF1Txer9kVefQ7D8CQf4T85baeh1stnSfbqkt",
  "key19": "5P1qexx8cFFydozmesXivdJ3betUTtA7dnjJfCr1JC6WUpKpq9bohWMcbbV4RW3RcfDSyeaWmC5D3193QisCM71u",
  "key20": "5S7hP7oqTbnGMgjkUvL8uay9eNGfUpsLGHEzn9KyBy5vT9mL19xJgzJC2dTQyhNANQ65pDjgeV6kiv1pQot2nZ4D",
  "key21": "53ULDkxzuEmwpcZ8Beuxi9FjNYKmJvY5dGh17pqfYPkuAZfKKqdT9SMu5YGSjdV9j2ZhxPBakoXC2Dra9UZ7bH1p",
  "key22": "2ifR93E6epR5EqdfrPZfzEfJw82tEVCa6YiVPtuJtMo3FyDWuziasfr7RztfKjNibZQVFuQmrYMVdqiAnQGG8x3Q",
  "key23": "5cCSyWoBFTxe159DPHXzTaMmJtiHLpAqNBVURbGGKvdvEfAVGgxYLfu7NC5HoJjABafsD7TFSLd6kPSMMrKk5RtQ",
  "key24": "2KxmhNt3kcPJA5ThEpXcNMRmbdi1xCT2QbBn6PWJsBUXmfHXHWRnXH3XppAftrveCT6UxkrzaXExwMKUoWTefQR8",
  "key25": "2rF4ZqMEMUFHxva7xPyZATzPqXmA2vEga1y74HopoLpUYZM8xg4ZBrQjYEqgwCYKCazKqiCRThr3soiaDsKeqGLA"
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
