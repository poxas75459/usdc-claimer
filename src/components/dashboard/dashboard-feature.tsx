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
    "35A8Ssm2AuufEKFLU5eGKJKDmfapaGEfsBTkeKqNZV7YWkR5eh5bQJLVRGLducRSJBrB4fKqrC81GJb7hZq19c8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uL2ZcUHsuXLhm4KufskSAZLcoH7VWxYBNHC9WDPRPdcycw5Ey5rQEJGEBiFrPU5MrEyZBYBoG1ETwA9MTLutzb9",
  "key1": "z5xkKKkhbS8sgMSB9zUfM3PKkD1hxLjnF312k133yNehhtT3jgRYeVdoSUkUaCNJEZPcBAhT6o615Y2BPPsVVbZ",
  "key2": "4GL4tCtAq8apZZzsjBtNjt235jsFfsnmpkqAjoaCqr3zigWwpNiyEbJw9h8SPfuU6y34Ez6pV9hgCdjmrxUFyPVg",
  "key3": "kHHCYBfevBP4d1GX2wfY8Fph63zbaCXXQBE9JRf8QAhwaZ2AQFgwMhCr41ZenHjoT9RCgnYm11e4NvAtmkyPTzy",
  "key4": "3PNyPBhjjnHtmvHrBQjXquFRF46bgwkzbHgY9MHhahXt1qeJ9ZqBk2nqGq6fWV1RkDd6asBrFHmpdLVD2vH2Gv4Y",
  "key5": "4okpVV1DBW9qrhdLMsreQXzbztdGMuVtZrWAesTqDUUPMfKa4krBdmToW57E7KBoK9P7PUd3FqUfLjBt66ueF5Ew",
  "key6": "5KNB7YZH5akK8KyDaLivRxHJBS6ffrmTe1qCT85rU2F1fmCbqqwaSnwQd1GdQzKiXPyFAsr17ETR9Q1kE1gZLdzG",
  "key7": "3ECiYY6iBMKXjaJJi91N52bTbvLtrar2cfAyp3DMWR8CrtHVor3vScu16VWdTaZNKSmTyRJ4XjDjnX4H45eJLncN",
  "key8": "4vUSh5pzHQg6to47fDoMjg34pr3saPzfxCovXntzL2oywUVrJWQNXPnogyUMTMvcK8Gv5SkyGJ729R4m6ua4AiDY",
  "key9": "3YswPhA53dcYsyHnS9ib4NfQ77UeDyyzdrLEvES2AUVmgWhXYfLU4jxvDMu9fCipx4jfhK2B3md1NrLp9rexEEkZ",
  "key10": "2PCG8xsYa3HgynAmGEZuPMkWViovYmHbLhLn4pisTHGjMyBvusPdRzzmhxboRdHGpxvcno7h1twD4Kf1MkV9U6Ba",
  "key11": "3sfYx2Z9q7VUGT2uEJhJX2ocZdkGgdxhBGjHaZqVJcsRWbaPeBr5o2yjUjSdrdNCSyGDEQLj6UTTsy49qXHL3ZLQ",
  "key12": "2jG285m6xgtHTKpw31NZTp2JHugpyFAqJ4WrFHfXd8raT6hRYyjXWATrAY2AS3DRAbiZ168wVk99oMWZZaLwKbnj",
  "key13": "3ofH2YDdTkQ9YxABwLdnCBfit2ojZRB89QvyzfkUo9ZeGWDWaodLe6rzqXF6AjPzf3BCWyVLA9UExrLofaDrfoTs",
  "key14": "2R8EhJ19itetGLQbbD7mRE7yH6ZhpLV3cxSCjdhV9Wqdpf7VqzpaRPX5wxJg4qvv2Mb5mCFJ8jX3bf8MBxYr5xLP",
  "key15": "2WNo28zuTw3a9CqYFndk7k5LFpwfMAhbghzj52RVQkof9qM1fqwTzx2itBQoM9VrX1i4GCcjeqCKRG73wmJh7VCw",
  "key16": "6o6cUuickwAXMiipCGLm7dSWsHSrcUmoWygfDWjGJAovQuwSg3GCtjoBzxwkscZH495KZjaFJgowZBBTC2LDBSC",
  "key17": "6728ohW7uXHa9qpcXsu3Pxn8rioFfT1NHFfTEFTHc6FvMo2s5tN15cP6tAfRUbMeE3A7zWDnhwF6ceb7RKyqUbYM",
  "key18": "2QMPiop4bD54jhHS15ytT8JLFuevatVANh12ygWco5jQo5caAzQcW9uYB36MirdSuQdGqbMVZq5PiT7nBojWMim9",
  "key19": "3vCLYwGgYuK8PzNoiwKujUGatr4cd3nrJX3J1uV5Z1YPXNL8iidHxJyf23BZYXrC4kNLj6C5fVNMNh5Rpkt48PRH",
  "key20": "3QBXgif4P2hQLAeQybREWNLWeVNBN8XABmbje2MBgx5EKqvThrxXZJn5SgjA4iiA2GHUtEJqHM4BrNqe77Womrs",
  "key21": "5LWhF4cjMEbvATMHcQybux2uCUEahJx4DVatqQH9ZTsfEiPU1mYUCEH8kmqMKeeJSLwWqZNAZFT3wTyYyY9D9sD4",
  "key22": "44BvJ1wCzRX7hPVN6F83GxaXrMG9T4PufufPgJJSAdPUbYQAa4UwxK9jaeFtsyNaunCmhXoVeQG1s4W1yvPnyaaM",
  "key23": "5zvqwvHSNYgUtM2UUYM2qddzGyifgazYScwDwtdEQx933kkTFCnjhSG4qQ5oVCXVpvMFjXY4jHn1AUpDdxVF19Rk",
  "key24": "4BzqykoCw55NmChMSkh8tq86RbrXvTc56VazVWwkKcQr83iUThn17FRwgEYmXwmfYfUzeQ2J1BxB35LPYSoXojwm",
  "key25": "3iGkBUgNvo8xDaYmjfNVtdTgRnwZEHX3GSQpFV1PvQa2b7C9fLhu5hzmxoEm9HCLRqK34BXTHrKsVmD8wSuaGXZM",
  "key26": "4XGP9Rkw3GgyxjsLa39sAPNmwJ62Q2jEZPdVJrCZLFMf2o6ta5ZVfQo1ukhmE61Yj1KVwmjGvJ5nRrNKoYtmnFMN",
  "key27": "UdBT4CjwTsGEt5FHKeNVwmNRxU4Q2X1Fzh4uP3JCApkm8GZhs1uzJ5YFD1fn94XoagXDnKvWWUYd83Ae5YZ46n3",
  "key28": "r4fLhwSEgm9w2qiwcHdva5TLXBtokbQGqBW3Zx6GEE9bJt6vQBhLX2bEF72Ku4B98JqAAcXE7TS3WAn5dsNeHeM",
  "key29": "39r6V1AUe69Ps9KWZTrjMhqsiBmhrNWWTfEFJBdsCeVQdhpCNtEbMSoQDTmDYgk9DAhxVimw9Xyx5n3ymvUEuoCd",
  "key30": "NAyii6QwvsPGQncX51Hsa72cCXZWi5TYdrKrBeTJ4D5T9jH8bhpvxLgCNx1QR3irw8bgt7vz7JsQh3QhuR5SUfe"
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
