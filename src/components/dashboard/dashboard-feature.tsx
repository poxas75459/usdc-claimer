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
    "4hpaM33AuDyzvhJ8Mor6dLEdM3APjqpbs3FMXfGszepmTmNosyNEiuoTpXRbgRqWcNnmGU3DJo1MTvCdimDuV2tT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27BhaocW8HfxqZRb4fYDg3Lip6FDAsts1gA67zkjj9K4WebGVL9jg9sWK4PucVEEFrWYA77cXzT7sFkRMQ4i9vGL",
  "key1": "3sKmbj7yf3iB4CPi1St4AzWEFWJG6LEY2JVuKyxNBE3jwrmZXn6FGwbVT1p1fAutMnqdJKNij1Vxt9mZmvtBaA9C",
  "key2": "261eo5eGbjjSCLcFYHeRDTpKbUNzT2hima5zxEPsxnjvv59Wp2WKr5rZia19rwKLnnDCkpZ1f6rdkjGgu3HCj77U",
  "key3": "3FCYYpipjMjQGDoti5NUa8eMNc3iLD4etez55QEUUduNt6EkAoBQpCtTUXBrPScptzoaegXyGXt4ZPwYcgwttPad",
  "key4": "itjCZtiSJ4HH8Wxssv6BpwHRBhe8TNXH4ANCoNSyGZM69xb2ysURdtwQv3Rz43DVxeXrNuQG5Q1pX6b4fnzSYLD",
  "key5": "wVuhdxUczUhERScMGEyuKLtVMw4F1fS21Q7im4Big4grbqipufWqu25JwXFnymMe8csPS4BzGTd7WGkQFH5s8HS",
  "key6": "2ZM7YCSeBjhEciwe8dtkcf7R1pH2vCEdr2XKr3b6c7C143u4VaXoWaUoHZ5Lpw5xB6PT6VoAAxaEzjYAS8ZTBUHs",
  "key7": "RC2GXZh4Ba55UPzpUisVnEnKRwuES4Saeg1bZm8eyBEQ3uBVnqBNhdzxYh9ZauvTHUxjDYtbWdNWQRpLSGkcsN6",
  "key8": "2cDdC3CkemhZQwEJCtSHVVmqvmtBXup29GWqXBQdqhDdwsxu797KK69y56r2tPt9txkBok8eNYorHJMgNkZsCKZV",
  "key9": "4Sgm53ZPDzKy2ztzP7avaA5dydKo5Gp3LDzcgyDTtVC3HoTHLf7tqewuU2sC5Chz4gz1swpPgcvX98NBPVtLeuaJ",
  "key10": "3CbtVE4faammw4Npg7E8gdtd1U3Lk6P1AuSYgNfjt6iRd4ik6aEbTjpcPTiREYfGsqDAoLgNp2t1qRGG8tFpKbEz",
  "key11": "5YCfvXRU8dXJdEDu6SUDSZjerJNjTKwJcHQBxR3NA1XEpsQFqnqY3ZwR7v3FCBj8hJ3uAUEzaUemUpjUKuPH6cyj",
  "key12": "2A69eY1GNE1MGHPm3DVGPCYV39zFdtMk8oaPGDHDYzAyzkkBRNyoC84bZA3aPrStVrSGGN6vLJFH2UL9CvytMo7C",
  "key13": "2bEJmfTZcpL5cthM6LfUtuqxE4jjWRHDMKtyjjxbQYq1VL16FXz6ykFmBQVTaJYUKCDb6ibWACzvdWt5AwwZZyoG",
  "key14": "24wfa2WzD9Cv4pmi6PK7wxTa3TJ5S3zw7t3iHbivhzf57PokkUPTb8nscLWunAekuLqjKQjPePcWynSW9nHLShYx",
  "key15": "38DoZo3faEhkzqBMsapLdLXAyMj8MegYKSSnnx2gu6QVSFFyr763MJNknMECPZ4QQmYAvNfwdbde6GauTEkKWAGf",
  "key16": "K6xUPJ72YQyhHanTDjGjVdkiRu36WvAqxMoxjkSaFdW4DDQWMznQLEJ3wUR7ju8E3M8s8b5ktPbwNnCxZyy63ji",
  "key17": "5qecjpk3wTHkDNTMDuxVmatjWp9KPxT1DdsnAFu44Krg5cB9SEdarFcqCYNpt1UNjkvBDNFpDR7wKEBY3APQWn9P",
  "key18": "2xNBWPMAwsEEEwgHAE7LfMRTtYb5ZLw2zacvU4nWgj6vT6yGuDpQ5k92NGMBm9w7RWWWtxYbDXyuNuB6hhE2skW3",
  "key19": "2LuBWM3TeuAeHfeiUmRowuwc6RfUhZDcdUYqba5szrqPjAgMXbJJpp6Dt5mk18LJQM3uL9Na7na1AV9hJoAxSJt2",
  "key20": "nUj9U512mDmDN4qMiHSqpSsWaBVkbnx5QCPXVjU5Q86m3T5H5ukVEJx5gD2CvszkNwiBndHB1ZQdLYM9WVTfnEz",
  "key21": "61Peed4AnxRbng9kGRK7nNfcVTWo8idLgDNUsnrwwnte2LGjWoZbL9LLddgCHtjdibTQFEMqfU8J6Hf6yxZkwXEG",
  "key22": "RMZHVv8jmNvwzPTYJrneJ2wZ8S1EvdMf16pz5orjt3thtC9ukS14db6uUsJCZNFnYkCVvNGGYHXFnws98ywCf7p",
  "key23": "58tQeSxcbE1cWsqqUMQdmbYXEP3xRGduQMXVTKvNC4R24DeS3nsRViMUXTEMGNBHEjFSB2JycvJUbEGvXWZQ6t9T",
  "key24": "4Sr2QDfXAe82nmah8tGJroYvaXksDVnHXSb8dYEGaUjqEvpPxFojA6MLpiSX5ygxVVPrgfJfFmJ2Jo8i4cGRDYYq",
  "key25": "3CHqY72SBcoDyuQk5K9FW4ff7TRLLkCLZ3E73hubQnZ98KneemfxkJqfwvX8gkjfLLyvVURSap2Uu7or7xgEXjtL",
  "key26": "65qyR3Cq74AJB7w659w3C6EAdG4McwwSm4fwSJ55w5xgHL6Treh5zm6HoJF15udTt8AGL8T1CJuoyJVNDP7wkmRP",
  "key27": "5XmVP44p8UeJzRVhLmZzMaMaxuMj55sLHtfXxEyANU13N5etEz4kyLsvkC4pbYT2YDbMKDYT6romBpruxKrwCmLX",
  "key28": "2zoje7D9oy21hP9NmU3LkAwLZgSciiieBwwj2CGT8Epp9Pgh8WBDAe9SafSUoviKodZ16zCcZ8a6rq7mM9cfFRfB",
  "key29": "2gWu8JU33ScyDKUr68kSrg3pruDU1P3USfvcEMn8ikrZiMSC9eST46gmSpMD3zDo3gmzY7XAEoTa7rn6eJPjexct"
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
