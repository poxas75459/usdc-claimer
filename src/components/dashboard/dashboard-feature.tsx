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
    "a6SLEuwZ1bAKzWxRtd4nDKQkvWRxSFwNGgJEJWeYXq1VppihHFmCEvdBFNXvvfi3zK281uxMqjY7LPgn8NjZZBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HRGU82NwxLiovYiXQruQFjsGvgr2GS7mAZMrz3kc4cvKpWnjChEb7nyCvNsEAAta1KgDmkMznJpKhDsCarz7TAU",
  "key1": "24gzdtQLVD1J19eANJ4vw1sS8NPiXNVk37SoDbZFXdsEHvWEgnDuQ5VVFzNbJBw7hVeLgFfCxhrpp4iZocwzVjP3",
  "key2": "53Kmzk1EBocHW3r4cE5AtPeHywah8SUC6cayqQFMb9Krt3kVZAMSLRnMSHSqYvX5vhpkpfKdfgbm6AuEVUedjw5J",
  "key3": "3gKgQZoTA95gGmU23gtRFgFyGMXAtU6QFMaFTc8qTbqUT7BBsUg4VbeqrtTLf1KnUauH3PNdY7fBFJjcywiuXTEB",
  "key4": "2rvHTGNGTZF9Ln2CgYYxW8365c6auUprWcYqP711BEtKeaEmoJzzPdJ71n1ypYkQiEq7nuUavkDrsipPxV838vnb",
  "key5": "493rVnhVvJVuXRsbB4HruewFuS9GCLCcHntZozZnN9Y8z5eZdqPXmYkg62fwJ8hbyhHHs44st19kvujx2sjHAVHp",
  "key6": "66fivbysv1ZEtVgqVCCjbuDRqDqKigV72DubTL8vuzxAvzjJFjo4iQHsCRRSC4GAqvrwP5PoA1E4Msr4Wxq8KFDL",
  "key7": "53zhDCuarKwczyPBfFPpjoy89fZbfezB1x1mJ7KXAJm9LupgRMVTrodG5WBqRWeiEn9WMrATszxGLwKgZmLLk62W",
  "key8": "4PxVoghYe6tizdbv45931wDfHSgmL4VrDLDapYW6TCTRKTmLMqh5ehaxoyrJqF4qwwCdmo9JcTGzjLv7hqYpdcbR",
  "key9": "4zXafSK2CDB5qhm2FjL9DXi2P9uKVMSdZDceX1T9Ke6QsgN38MWj9gRdUCk1WQA1wp3Fa3Uqn5cHhYCYB41jSU2P",
  "key10": "5ZdhqdsWsAJAE5FMqx8HWLVtrsXReBRNNb5P1iSZw8zziyh4nsgGaRb5tD7NNUZ1jL5pghJctz3JSorjwKPYPtEm",
  "key11": "49hRXdogYC1JmKbWCeidQBvADWMyuA8MmtmEw4YjsYqvPnVFr9kUAi1qtNaQT53kkij5Coneuhm4Y2WgCznyDafx",
  "key12": "4NFoe7myXtqSxNtzKM8zhFZ9ZuuPF8HjvqwnvzKYNw1KYJCVk7W5PgZorPWUuS5etCVuVx6QiaBVFWnHX7c7tYUJ",
  "key13": "3ksU6n1WiEZSD7qXN2GAxsHB7cFRNYFFUZhC2kifeAnTnbsWQLWuvfZmDwNfcHEiQGTMsnaJqUkh6FmWKYB5snzp",
  "key14": "3wBJxhAZh6qckA25QJZyqhhvX8jCfeD2s1JZ2hFSs8FYTofJbQ7kTfv7rTCf97mzrFCd18gdtQpCJF58qC9KDmMM",
  "key15": "N7QzTh1ZrCxAUxt7JwBrWyhbVZDQvSFYq9DC48tEthm8DRhwyibeoSgWXTpkwRCATysyZF6wra7S6hfw4kmRLt5",
  "key16": "5jwi9cu1NmnvxeqgQLqw4ZrtDZtpDrhuXnPrDHLfMf1tsDEebzkt3T7CnZvk9DdeDKZU56ADa3epuC5FEpHLpqST",
  "key17": "4tv5awjfN2M4ZZzs1rPxbnGzyPvtKZezo9QVEfjromSGaU5seer77TwkytTuoF4ZCsn1GEPWKqrK6Tb5EkU2Yick",
  "key18": "2AKXrQFUJD8uRKTygBjBCKyZD9sZJpADiWJc46ntoKmdSUapKc9k8xGtVrVMpXaxgwWmnFgsMvwccMFReqza57zs",
  "key19": "4EAkW6sxQV5GKdebdw7caepmwFHAFYLus6YU4knHWCpqKhGZpdXDYBaSLBzaPxjcqFdp4xH57sTAoMLBM342k3yy",
  "key20": "29XWq996X2ESoJ9t4aHiNAzsoFhGdZWAxGuCiynkL9SvV7howLwSAhfLgnedVr8FsVENAnYQCCDKQwDTh1jutYqY",
  "key21": "jkDDgFfbEZvysuf2fBDfgDQqV61JMhpuYduRJaqmNg3KUEmFWriLSN1FZBdRafDGBGsRwA7tDmJPVfQKCHLG5Mi",
  "key22": "2QaLu4oUWaHNqeU1mtXm8wRaVAZLB5fAFYnUT2CiJ2immnUYeA2M1yzA9kBrQEca9hPgASxMi8LcYMRWWCWGBS5a",
  "key23": "2DbHbnjoeNbqf9eFtZWVArcQi1caK9p2VaGbdwJXD2trqmTqy1F45y9UZbHJ815BmDHk5BNRWT1otYUdvbVvNB3B",
  "key24": "5f6q7ueKWQKM2KDh4bShTUj8Po6X5TMpV9yc45yLtKxBCSYWNMPG6vDWmgMbNCUAdByDQ5TZ6fe7nHKqWkJryvGj",
  "key25": "4Kg9sEQvRUHVtzGiJCkCgT7zc77kx9LhKcU6Xamv9DGSAeYjtVCHgnPhRnHspeJLjuXWuhoJQUJ9fZE3sBn4zVqa",
  "key26": "eBLY2c6YxgnVCyPeHsSTg1WJzi2iabFjiZWJp4R1SFTYR8FimUwjg8AZRQHnPfNhyVFMPgxkacNL1KaMmDmKfaa",
  "key27": "4zUTGy8NKBt6xYPoWjZ3gkZ6wnQnzrJ2xuuoNbxpMQJ62TABkPpEf8RajSR4Xcpnwphq7aJseGSTwy9ejet6RJ3v",
  "key28": "26AeEyq9pXjBUWzf8U7kKqMMcGTwFJ3cfeCnKov1z15yzjqxMtQBqrpWBiGSQuj3enUuj9QoCr6QrJsYXyccSLU7",
  "key29": "hsJkJPka2Nhg7GVxbP19CMq9tdizoRQZiMFwbd9aPy9Gk6E3GrcPqnktHuhrm7yUwAP8CWxkVz516tGYPGmeuZS",
  "key30": "46NVNPqoKgB9fDsupQ9K6cBApT3UPMf2oNZBRbDJ957KmeP8qkTFFuzQfYnayNqgaFG1NNf5GFxx7USSqLD85ti6"
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
