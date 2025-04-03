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
    "2auwfcaNs1eHNjvdDpB21z1jTPLGr1CsRbTkxsjx5qQwmMTHDcz8YauVNtzibQG5mXkMwtAKBKQry6tnAB7HrRWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LG1EVHyGQKVSRFt2Lfs1Zf3fJ2PXxBtcCatR7obKTcxkrsgKP1KByoEuFCYhsEw9p2eUt91rnWih1NcNKRPTbYk",
  "key1": "3CNYEvtGKPRP5A28HBkLEoaja1bvfu1buZcSwE6zuSvKaFDTtmpKzyBNk8fDqAQ3iU9en2vcCM6rnDRnzQWhF7zf",
  "key2": "5gLLYhfAk2Jq75FFh6rr2tQQTcux3MbotSngxmrCq7DhsksKkskShkYyfYZY2SSJqPUe52CXE9ihjx5YoJ2j5tCU",
  "key3": "4jq5XaWbURS1s2otvpZUMqbDQKMCFn1QYd2BDuLY1CMtSnyjfhntzqZSTWU1oANPzCLV822msgjSA8RE99FJMnQb",
  "key4": "2VtBq9RaqcH3rkiw5DEYMwRuM2JbN3DGRvXQt5RUhdnDfYfm2iQEu736ptWXMxhEuD4893MAtLZukoPbaC3qd7RB",
  "key5": "2akqSE7EDfwfKMGaPzujNwvWLbWNShTP5uHAfoCakmw4ffksA3PoxcdkkndYnWMWkACU4ea2hwSXDoz4tUJmN6DH",
  "key6": "5ptLcpMtw66VifPohMXRxmCqxzBcJ2j2dK1sbEfmSBcRapqSRRPJAydVQw9ch2Gpo5baL3KQTFegUQjCPhHcv7s1",
  "key7": "4rjp8iCRLCiAvNVWi8Q5HQnSx5vvCJQNi1vwHCFJUbFn9MmzB6V5EgfvhUagBvURv2GBPZCsbfu5FD852ZR9ADGK",
  "key8": "2TwVK74vxEWMmMwqtWZCRugfsXDgWfaAs3gQzfUfFRtQ45WZXryGYGFgaz5UJ2kxhFfg6qnYsSe2nZn3DBGJeUug",
  "key9": "2DftzbgrSBd1JNvifsqakLAu4NZMwYufvEbSj4EHbtT2TApyprD5jG725dXzk7Q3hpZheFztWmznC54iWYmAsoHC",
  "key10": "C1ZFXcL2mekVLHc77QJ51RVmcDRRT2fYJrUPQYFugr6a2uKZAo8eU3UwMQ4VPsuT4SySJqodEZCU5QcFSXZ4oLM",
  "key11": "3oDEhWzbGAtaD2DTcYErgeQi6jDo6F9Brjz8dNZmY19NM1cZZRvGLyVLutXfUzpE6AqtYRfnLYf2A95xpeaMUcwA",
  "key12": "4r443jiGph4YQP8q3Hshc57ua63nZ2SXpnzusWfZvqVDVM55Gtx1idzkdWtwq9DVhkgYfTjasHvc9XHoVsVa2Jqw",
  "key13": "4xfpqojVns1KfXZYCCKvoBu8k72syPszqbcrPD2zjYhjeuHmxSrxnD5KrDaAJJ79pXwG4rX8e36LGxnUP5MZj7Wn",
  "key14": "4e7v7ChM461Rngfb6Vji6Von7YVYy7wwj2j58TayW6FE41FBhDHqqXjGHzKCWPPwSDPyjnNE9uNiBNdX8SkAWNP2",
  "key15": "3G4qG9cRpZfbbX8dFqc3sM6xXEveciUgTwMqqd7MuVActmU9JPX6zXjYFFDGRcmq71HCPjmQhGgb28JFY18WEEqa",
  "key16": "43zDLRfkek9mZj4fMvY92uQpxqqM1NtJaKZ3gzrmMTf4ze46QQKrmdT1WG7nJztqGRxqxKo6DkdHjSyxkpMtpDrW",
  "key17": "jvSBGeJKXc55WMaDasoRzbx7MTCxUbVeu9wvXbFCN1Fvp9JPidJWSfAAs8eaghJGYgwbAkvY9LwVWnX7DDKqjkZ",
  "key18": "VNU9hob7c9fAejZGLBWeYZJ3hVFBdsiyvoj7YYqh8YsmNGNiT95yQRpjK55X1geFgAXgg8kDYjLVwVbZuC5FFr7",
  "key19": "5wDceYsUijRfjXNajjCPPztjaPsSjBqyDZRcVeSQEgCEoGWaNgi4FKpMQXx1LyvYT6jesdc6kUtTeqiTeBRAYnw7",
  "key20": "8yMp3ne8m73XmCQyyeNj8VUdYaTJURdG2TWoPCuo77WPFx6dDShfh5vXztnaNeDc9iYiV9x8qc6RQc7EbfnWR81",
  "key21": "4oDrTxLa4pk5K7A8dNNbpoLYbfiHTkuwxKkk5HeYN1pJ9YqeMa7uKXBdgzMHxdx9YHPbKZz3SdhRnEN2S8u1SVAu",
  "key22": "4BqVjVDP9SY3Y6AUyJ1nQhyaxuwoCXyVRGbT5aDgTEAeFXCnqomZyXNqpqH5obeDZww72BqGNfx9bXRaT45dFjM7",
  "key23": "5z1Ebmbu7KjaLGcy7JxURAhQtYjZyj6LChmHW1RX666Yd9kaqMY75hVxxwZRpQkMw7vTUiNui2xjtgNbg4vk9tXv",
  "key24": "5TGyEzH1H4DQepCx9yNEQaXMQKeiB7hcxTxujCfDVZ6FgpBoZixYWMzdhpYMKYPZ54JFYDnA75qFmYiMiaqJZuSq",
  "key25": "7YUf2PxpdzyjtH8SLUAGiC1xnYXMqBWjTe9EmyQaXaD2jWhdodncF39o9BxgsrsG6SmGdjRCyCNC7CEwkFDMRKF",
  "key26": "2kAV6wdLgjs1cDDWqPxpg54UFmBxc6oUBKVU7umryoj8Rvu5Td9EgwjvxfdsfgY6i2xyZE7PMrQVAdcXqXYPGFmF",
  "key27": "4pfFfGF3SbQKXyysM3LhZozzfnvv7JhgV1AALkR3fyeGexyjeWiToDXr3XanjzA2EBQrDc8MfEEtPNUwi1N9116E",
  "key28": "4pNV6vCHzLSNBireuEs1TxkiEVnyAn1T5LfWzVhryjRikaDGhBnbxRXK2WMtLgp1k3CA8Rz528hCnLkbc6BTvUWG",
  "key29": "4Nd5F8CwPuSRcS9eSNVWTNH69GqrUEX7KTPo11YzW1caUqmAA28kb8EZ1nsuYbuXgwfG523F5LvGjBPaTe3EDeiG",
  "key30": "2Lie22sXB5FgnxUWkDAfr1HLL78ohw71iUTBGcBiGSqwUYakoYmJy9i5BEoSC1LMTWtmZk2zHr8YUvGjynLJh2Fh",
  "key31": "21hXnKRr5cK9jALtz6CJYhmoeNUGLCxikDnWaf7XDRUvQawkXjYCmrxihLzc7QvxvxhihhcFTK2nYTWzYjxr5PJm",
  "key32": "2j9s1stV5Nz9YPHbK8JfV8j3YosN4ppmUD1izxWbu1ZrNR3jv6VtPQ2ED8MhW5LPkWtaHmXD96jbbfy7mwX9AAFP",
  "key33": "5cAXZKhBEtAwCnYVQJQXsbsxfzh6AUHMWysGqp8XMHrWgawcEaPLE9J9drJCjHdcJi3hxrw4nZ8DadVwyVh4iXSN",
  "key34": "3EQiHmiedk51tYWjYQnqQU7ya9XrSWNKVKmtKY5TnpT2LJvPL3sB1RB1ecSHNZW1Aq36HMFjqhZsrq1MZAvG3CyU",
  "key35": "3iartQx2xFTZjwraC5kicJnKJK1tiYESr9mpFhrCVgGkEC2xjjMuDmxLkNVJyUjKMWUn8ATY9ShW9SbhUaFSMiYy",
  "key36": "4nX1GNAYTxNXLsprbtzg9FXkePEj8E8Ju4ipbJy6Knb9Naq4jeLa4bM3W7KCUReQdbkwbqvFFomiChacrsKbVcrf",
  "key37": "3xtMwjnh6TuoYT1vc3XRDzUrqyTm2QVNXNqy4mnek3EiZZYiyULtauBoFP2Rua68AJT43QWp1BW3hYg11T9CthLY"
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
