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
    "2PRJnEhf593zUgTvqG6yn1Xurh2krzkomahbAPJ4mwz1qgfk6V44Pa68wqhGFnjyRMH2tMFduDzF7Ku1zJu1VV1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xc85T4Vc45qvaPgcuGij8NSowgdsAKTnAfRrQ2hJn3BoxASz5b4QTRTv1Le9Z3Try4PnSeE1Zi8ZPmUTLvhNe8D",
  "key1": "6XaTrh5DMBWt3kGpBaecbcwXQYtmcht9t4kyjony23Et45GB3bgYmKo3SfSteR2ryps4BFY6sFMjvhD6am5dtLo",
  "key2": "53K2YeYg3vtUnyCDtxRhFhAGYgZEeWFKXb6fchT6oWW6M8k54m2NoFr9zNWERsYb8XLBNaSHkoZ65JxxuXUvHkeR",
  "key3": "2wxA16rcESFCt9nozu7HzDKinMEQyFsiDB9pXj5rxxu8HcxtQP2nKzQ4ez6msGERvexuw2c7h5KEPmEDwuJdsZyR",
  "key4": "2CKzHRt6yvJPqZWyjs8hy34umcCX8SMWsi6GhQPhzDr2PunAqfsQ7UYkwDEWR1Fv1VAS9uRgsrqnnYEUejwbevP4",
  "key5": "4NH7nctb8nUcjMFM6K7MFmPL4yA8qwWWM71u1SZ6Er3xL3XfCdnmMjDcPkuEe8fH3jX1pKiGUUESrvPRtngiocaj",
  "key6": "2QXoR46LzpRgaeqP1VN9x8THnR1K5HJKjF7gt8v4weKwdfUi3j99YnEuVLeQSvfL7KSgG7TkBeJPbysjoBMuuArp",
  "key7": "2JWg31EE73Kga9uP2he3L1sXsu5rbW3q8QBoLG1sYSqbTMFXrBCvvZ5C2zCCKhMK22roqyAfGfMD4wgfPegZS9Di",
  "key8": "2QQPmwVKE12ycHbzDfiLJzsys4wHVfkWhDehdP34U2Ureq5ByDDeahZYrfSStfuoWTwguk1Z31Dxubxs82Sg6drr",
  "key9": "2EkpBKRM4khQgs2modBTLz7oa7eNxWdMQg1d7pWxKkL4PoJBQ8nCMV9q9es1pbxMPFsJtCMM9u716eTMYPjsePdW",
  "key10": "5iBU7qAsHWa34dGvzb6RKRuwSC4SyvdsTnWBAqKKboU8Dm2m4yTVLrNXo2uW49TQ3cM21utdudTWr2RE9yFzJVJ3",
  "key11": "5ZjWtsDkHyseaoWH4oc3VrSTBHQYtrR7P3u361ohDwzLF3WXXPmy1seaZkpUYpCFUe9KURnmn5bZ5kdriwsWK6NR",
  "key12": "2q8FbDEooP1HpAqvAwGX6rTPW8EsQSKUBxdc6mApfHfcDdHwkXQSw7k7maXk2xMKm8vmTbyAB1SuDhJPQwYhW7p1",
  "key13": "iqYEgF5E7kUEmpnDmwNx493o3zxUbXJJpjQfxZKdaGjt931Huggm4ccyBPeU3oQYQsMCaSWHintF4qi25wr5FWf",
  "key14": "5A9kZKrkfGN1X2dXDg2gjRhLngF43W7WiUfHZLW9LkMS6tsDB2kETxLS1R2AJy6DoTawEoJvrNQkGEMm7rvizzDu",
  "key15": "4HsBc9Fyv91wAgYwqmfbYqDnCejsfQ4qRgudnxBGxVKSyWjS7KQbjw16bPyYSsVk4EungrVvtSVA9dQugj31VtBx",
  "key16": "5717yG3QQZ2ryyRYoHvQfNgHp4bvKEVUWXckCDqMZRS9qNyAFWs6fYfbD35z6gA5VstCRsWbiThsJeo68tkZP9ys",
  "key17": "4JcKdJ5PUziN3MzccXHkKAHkz3gkY1wBncS9nzwQ58Ro7BHZcZcx9DeMe2uogCXkpZWoWM9u8rwQK8SSNLeB8Cmv",
  "key18": "62SA9znVYk1cGteS91FweXnXhaH61bdop8jY1rpD74qPmHThzufMXv5jtMaWgFhyhH2Zmw3dbVTmLnCVxhQUKfM4",
  "key19": "5jA5ds8S12sCEo86kK13FhZErdg1fcug7Equ9wYJFyhzjk2NFA15NEdTw2fT21p1C8kDWpWhCvMuQ4VcfXJYUYAj",
  "key20": "4iXkwVg1DdFYg2hWKfg7EGZp6nhhXQ26CbcWs4a6d9RSeddP8befKGuRREbvJvJ22ynW8H6E4zdjHjD7eBfGK3Ci",
  "key21": "52w5h5AWdxe1jbSrjsh9TLH2Qg2GuqJJa4zkD6gA65W148i5XGk132NWShBVuptaGpuAkEkkS54jmQ15Dk4Essi3",
  "key22": "cq6yZLee9MML6kHGwSw6R2GyS2qwXvL8tPf1TcqY4YqWtLwU4t5x1DUMMKhDGjT8iMwaTBPS5GyYNidrDWat4VX",
  "key23": "28NNBLAAiU88sJqNLn7KNdS5GhKVuRFWo9cQM2WDhKgsUyfXwTkB4cNXywVAbS5RCCW1yM8RXtuMauThu8z8nWur",
  "key24": "WvffoEt5jPPcbNdFoW5JYayCGFtzqfQmXT4s7q4BVDSWsavhaaw9yNef3ez231U4aiPb2AGgNLpvVkq3U4MpKry",
  "key25": "5F1ZzZREXFAiQ8L9uga83KXbSHioE1JaPwTtTdTtujaZKHgv82uKZAfSRc4pp5Ja2pLpGUKaygi1M2psAyB7tTGU"
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
