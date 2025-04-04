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
    "4JULkZHnAUVmuV7JPLp5GnttZ5TN1jhjH8je6hujCRFFGNiBFwCQkdt965bxgp7DSBi21tLfrb2fYSCFcXHbqNWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V37JX9Gko1Txxq5J9448pK9f8kkKQhixQATG5vZEgftBQLZG3YiStquyoUACnaHUXD4wdxJEJHJjKejz9qS7H8N",
  "key1": "4kAmwrwZPGD7UTuKixw8qJ6c3aqqADw8nJYkuq6q4pBA8crDNGwh5ecXrAzkoQYrxYL54fkZJikSybtTvuUZr5SU",
  "key2": "5YH6bkEJbXkTJVfenWguW5tYqi3WxY4gAeMwGKmdsWEf7erVW7mmhaWBSHJwdfdNBNHu7i716dnpR1YYKPBrvZV3",
  "key3": "4hijfAJ8fiJXDv4Adk8NoccJNYBmWZYt3aBMQw5iwk2uCkkXPHKxHnLKga9zJCWN5chhzzoMU1REjPKo856FD6Ev",
  "key4": "5pui5eYVoAybfPWi9vh2nzEXNWfzatEGjrtyb8U2QrjtxQNegsvmq6mSM5cVQZ1qvhCPCtvEzaUavwuNdDdHeQ4k",
  "key5": "5iLAzVXVevxmMdXmRFcamFwPYTVVRBksp4anGcWYxYw9wx1Bk6QzNH5hYctKPcHGTyCo9uyRACxwrHWvjhgFMXR2",
  "key6": "2hZKNwzfrhc2b3jnfbk5nxWA9JsAw6GAzhdec2g2SM4RzfWDBpkazARutYTKTC1PmwTvSbtFsDLJqS67ruybEa4Z",
  "key7": "4M7Qcmgq2A4kkovr2f2ajMqVn3JWyA9ju8JqUtZxYkdJhcdnsp8NhnFWY4X8s7LBZxcojBNZQpq5w3V7oAzfgDQ6",
  "key8": "3rSk1Wfb7Ra48mAXipRxyjQbE1cqJpVuYFFwKx577a7UUt5um2CcGbiFGVbnt7qT2dVo4MPHKc3fBYMF2aShS9sr",
  "key9": "5BgoTgnwM2RLynStj7YEAH7Dw3agAzjDzNwxs3z24K1cGe3j3LQm4mYvmawuSnnjbtTo2mg9sgGUeoPAMiatjD1C",
  "key10": "5hghihSGuzGYDfhC1QHXvd53giPrQx57GB25Scq78ds8PmjsEn1tEy9Bxtqyrxse9MwwrY9ehvuYQcKcdtfnyB4E",
  "key11": "3MMLmboidGk4UGSwSFFgAyncRftjVcy6wTpWGLwX83v47rSbzzPr6ja6b2HjjPtrSXd6gtBfrCaPfsVJQjwpWtMq",
  "key12": "3Unfq8yXXzjMULAsSTMqBv3BWRJhKvhoYZYksyYkHRPQBK2Y5jyXmVbnHjvhbYFhyqx9wXou5CbtumnTm2RfEJ6o",
  "key13": "4jtgNccn54B3nZwLpef4ZVG3cEz3FaXnF9UPV6iYZVRF3Q6F9zLV4L5hKVsKJ3bYkizxvReqyn3TnNjFbwZNM6vd",
  "key14": "LZZQJrgMLHNuJiie4ss7CqpUbdaLHZQH5fVfcfAPmn143yVBkPM2MaPQAjnq48RwCSmsnagKhSKsYrz9sAbJzZD",
  "key15": "2gQbnCAnMo7XPMjJGwveShdGc3ifc2xb34x2hkZQ7N5XaRRiDQj4Nnq3JUeEL2mDF3dsNqqEKobmcj1AJavPEJJ4",
  "key16": "46ZZt3YqzDYqzJ1gJ4im9rttRza4wS2gnCNJsn6R1s4iySuoc71eRXX65Q1bffp9z8oiLrHZcNV5ktssKTs3teNx",
  "key17": "2q4QPqjS2CSPHbbc7Mtpi92hQvDTQYiEravygmSeboEhCe68g1MJDN8Gvh57Vgt2wKRm4SkWnzxFU1X5HWm9Rnbo",
  "key18": "2pVVVQr91xHh9qCwyFS5m2uVfVMfYp1sLVCgV625NG8oKSzhR32L37XW9nEzEqBqiebWLHTooQnWkiQmJ7V2vR83",
  "key19": "64ZnHcH4zrBFsQu4D4HBWZSNERcPVj1gLmK2YpV7rinbxRu2CYCwK7qY1cUCBD35eNsSQsfujRjoA8Gi4rL5gwHL",
  "key20": "2vywJeaRGTVPu6YrYgf29kFmJQvrVBBSVE878PxeFbwHfoBwdEWQ7C3H672DTvp3ii1VKJT5bCnR2b43y39tysDR",
  "key21": "32RFtDXrp735EYdtwbPcxFQ5WW4gCNSY19FdYRWd92WqpmBknbDXejBNNR3bHi8SXnod9mJp1dijee2DL1rLRdKD",
  "key22": "5VsGV397S2UJbNuHVuXDTGWAACWZfgdUho521Hpnzq7tjufYJzpnpLjFdSdEaYb8NeVnwzyz5fsHFWynvvcLZB6f",
  "key23": "58DQxGNfFC4MADEPxwYp6sdN6WHw2mHy3rpTS85HvZQjwkV6y4PZhqMQ8ibn2Wvms3XsoCNcnngRMx81oor33kXC",
  "key24": "3cYrFoqb4si9uEL8vmtrQ8xmacbnGgoqqN1bFj7aMEJPyGEzwndKy6LYoxBTxVMstAcDKL6n9w2Bs2uSvQBvPWdj",
  "key25": "5uHuHxRNMf3DUz1aiR31hbEx1jWTB98ZkMV4nXY7YnLbWLtrbkKL9g9kh2qgNkyqY6gDpuopepaRfrdjXFFdYSEt",
  "key26": "4X55edruHficbD84ym4qF5pbTDzbqXa5jz21Eos141r1AnPLzf61wvjxN3DTmJt3Yav6PAaQEP2oqUtFS4vfbvxB",
  "key27": "4AzuK6KnkgE4qEethWEf7EMvm22nmK4jEbWCXPV8ARQCsrMp5USZ3g5kT4qW8p25L4s4MCmK9RXAfMPQqQ569QiT",
  "key28": "5eXJsxe25CiabdMh2AvpLiP8ryTBi3wCyStvy9Wk4B118hfs8NXiLgZwxrdwzpDKUjBHLYpZNah7uY4UAiW7aZmu",
  "key29": "3sGbtm7NUoRkkCgzsuxRgAmXJMdhbH8UBNqDBbySctLQ8niA29V2GD7zqMs7zr4VDUTJ3NfiqcwS5h9SfwPciKK9",
  "key30": "4xLdxFfFEXx13yXyvVYvcDygiuTE2oczEusNJURHCawZH87f2fHhKgSAZENyof1iYHANJwDrR7sCAf7KEPmZAxBs",
  "key31": "4SDRC96QJYQxCqbjuKsNwVCwfT2x6b8BoCN9fy1rURyMP5AgSmeaVwhrcd5zaSUSNogGmokeJnKdFcwRv3tqg7f8",
  "key32": "pAE5sHAjRpsR4FkdYqvbGSYPooBCfFvkq4HPgCGCXL9VPvDz4a343vtebyogFB7NTZdzhKQVeNtPaiVVWckCAeX",
  "key33": "3EdM8gW1DqBKNDiBHSnJHRWW4rBbhAuLwU7hF59Xsq7AeCKM221r4rjD2ZiX1Wm3vWnWBBiLwPBjkoFsaUvB58Ds",
  "key34": "d9NGJMMNPLT9saPFeCS7qZ2EY4uscmn7aDFXFVPSNCTKoZGtL65K1MAroFH5hNcE8HXpcgDdp7ZDLJTZ4Jj1AzB"
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
