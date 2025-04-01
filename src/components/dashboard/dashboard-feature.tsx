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
    "3t2mwgyAWuRFpfSyCr1gKFEg2nDYMTjuaZh6HnSnCze1un3sYxsRAcFhs8Lwqwugsp2NTTgD1CcktC7AYHu6BAFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31HLCubNMDzMGsDPEaJoS2FbxANMjEG9wHAox37PTuhK4oTH5tFNGqGrKoTZxfbq5HfKBmjri2Ae87ezj8feXHTv",
  "key1": "4fBR4dCGW82ouX9FWuc2B8DNR7fz5UQxKDjJyGKABzU2vKqoftZD8pxFSCcGNdYEcmPvnaeoFd5E9yAzqHED6W6a",
  "key2": "5qzJXkqhwmg3mHSjLgb8WU1UtpTKY6qj6FujpCSmBGjvkRMQwRJWEmGowUmFYQnzkfLAynSSTkJNxfquXVZdHEHM",
  "key3": "5sGRaHBRpZXhXjNthjRkyjnYvUP63LDSMGsV8Ct3sSCdEW9KxJbnp2KjkwDiFNcQTVq9UzdEJC2Yn7DFYwNWmNjC",
  "key4": "5XoGc9wHxp4uX2xh7RhhYC9XZ7JBUDEEwmeWhhRznyzetZuxicjPrhjf5XkmTHjNeo295SXfaNLeSgVkaDur9U96",
  "key5": "4wDMMsfJoLyDUByFTfwnzzd1Jfms4gyzM7LWU5gSaHSftEDkTD8ud9JJ1FdGYH6L5EmTwMhqJBVEymqiT26Ywk4e",
  "key6": "UcAhi9KgsZespcM2GTw5cCzzqZwzQzoLCN2Efn6tm54ipEu5nYJzc5cV2n4tq1M8vt5aMeQFUMZw9k3W3TQxhrf",
  "key7": "4kb6HfDC9S34QbKNcGTMLNWuNFCwvyuTU1ximqBfDLVGdjZ6VVu2Tesq5ybqcNsmRLdaYJMctMGwosiTenhLz5KK",
  "key8": "2UUmzau8nDMECQr4gpfZpnTuXDgUaPKsVumNiLE2SsShFSVkth9EBAi4VcDsC1Qed26LpzvpcBMQr4eAUmLPpiLE",
  "key9": "3cFBcH3JjTLPzcwysaDotai8a8DcyiL6N9ujZHDjPgoFoejJe9HeED8FEP1YgFrdhysnkrggNhKWGPbwgXcz1shZ",
  "key10": "3qrrJ7BbgDg4FUny1xb2eDUx8GnN2rVUsdgXA7r8NNWaRnMng8rpq3kE9JTj271deY6m3oA1H998HjJzmcLzwbao",
  "key11": "2Cw3Pr6SPEpd1ib7pUPibkb8fkU8RzGTM1bT2whLRCD4g8nAWRuDvRX6APKqDodMNTrxE21ZoDHH4tL37bBgkf7Y",
  "key12": "21BJj8JT4hMxdvCf3Q1W199yYm68k43HXzwq5UwKXWNsFSNh9GoJu8NgKzoYKJhxobFT12uwFjZ2hF7WLzc3fyfV",
  "key13": "4i5PtVLmMWD4heamcwsQZBPVvhf5HSLYYgQHuNHg5iTQXgmspsxcYqqjgk5uLMS5iXckYNV2xfnAb2XDKMKxZBfz",
  "key14": "474CWst2wSSVPR1J2gWJ3fh5rDrczurJy8guBJQ8HzUhme8jBYxwiXwFSNZYbtTw1iFyu4qGJkNN41kQAr8Mr38V",
  "key15": "g3JTEXxSTAg5ktQKTxEPauA7etT8w6S1gQk9gYa6yAQjzNc6itQPwciEvvmWSimgs5DchfazYjVMXaLMo72TSCS",
  "key16": "5LcnDz8HNZ14t1Pc8RbRc6sQSttmm6BBJy13kAz1UxRKNvL8pjMSXJnBSQrWRhfkEZ4ya8mH7KutxYPk8QwVxor6",
  "key17": "2cHCYS9mtsBMaBfk8RfKnq3H1ngeYEkXrRZ82Kif4dKA7YwJmL93Qm1Uh3XUZqwh5Sem98LvLK53oy1tha2DCSEa",
  "key18": "2oWyrN3r69o6nZYZbxRVh3yH2FhVA6RGZ9DomZtcv9EhLv92pCSfSfbyS6LjXqwGnLDziw1WYYyiw6JX3BqURQVz",
  "key19": "4MDFfjcnAUYKmKqQus2ha7qAYBymNSUW6zux48Zo7tq67KtY9QChg2e9S9CBVgYgVhzUrJNGFa7YLJQA6J9nDJsp",
  "key20": "3ASeEibhraNVwVBV7KXUJxJ435Yvzq6XbMyTAHQCc97nvuYNSKFhuHtxK2qQ3bqhxdBmDSe9sJFHW63dKDPRDPJp",
  "key21": "2GtPd3CAm7Du18UqS3KeTkN5p4v7NubPXKMLYazq8kNVf66a9tVM3vRqC38rnBAwhhvKBfnuxvpwHeTQq7S4esFF",
  "key22": "2gQNhQX8GS6Wq4LYcUtfQZZwpNEi9WWcA9D5UXf1ddFwwe4YwZCPbRPNRp4U13e6LdUgk4vYmJ3QL7gJv8v4NbS4",
  "key23": "3HvoWXNk1rgxC48MsAe7Utq8Ry3GtWmtVrMRuj6J3UnnWRWihe3B7qrJ1WSQzxASF45QKVVQYoAFwqVRKQi7gqqg",
  "key24": "56FN6yptbgd8nhUmemqAHjQyhbriK8tLivVKVeW9MnBeYdaqcbzy2U2gmKzXgF5dk3HH2ixErYYCJZhavDys8fNQ",
  "key25": "fh1ZnaaGqFXh9aNrrHgxxS7H8HarcZoisTAJLCy6Bs19dWcGkUAPSw8hGwneiEVYkkAR7ZSGgjCFEzxh54f1sqz"
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
