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
    "2wHTsA9G7EuPBZUJ7ZfA1B7wmkvdQyEbvKsYkDMzPj6FJ8rzMnANCFYDwa2R9ZkHP2N5T8T39JRYdae2xPVDAX9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H2RNj9t7wAoDsJqnVrGr4Bv6UdUrW6U8zke8VQN3VZ6ExFSusQoU3tzkTyuSJ4jcS6uAEbCZJcfw4tRprDqS6p9",
  "key1": "4ytknddbP3bMFYHVmWod6in68FsyDXhbngNnmJrfAm6h8kcUPdz8cvVhAmi5cM6L6PWU5rpUhMCuyQoNdFaotVQ2",
  "key2": "2yLHfSdEat5SvECUaUiLnLKNnvZ9x5do5Ga9hAYkxJEwDPxDm1cQxKFP8XzST7ZGVWXCgQG2SdxsKM5yi8RFpeGR",
  "key3": "Tsjk8DSf3BDwGpwGb8fcw8Qhq9uQ5YpG7WgtUqYxFJxcgUDzFrdkcPGFbTYHLsw2cJti19t2E8bTSHLEJ54UKAx",
  "key4": "2xUk9ChqgSwGdUpEoPPNBF2fNCH5kMY2hXQFqmDQx4Yr2M2s5c4F5D3QYWphBzD43SdPT8gocpiHJK9eDEtCgNGy",
  "key5": "39Vvx6zp4Mmvc1uBiTRgNejDBQq6nouH4TV3WFWnKHrkpFR5SHBur2w5ooaV8hAgZ7pCgK4Ai6gNVr1FzKqdhMVF",
  "key6": "3yWsHUX1v2gU3UfiTd7QQkQ7Hd5fuC4mcDju4A9Q5Vd4zZag9wD5xditoKpSdNANMpg8hk8PP5WufKK48Y2okGFL",
  "key7": "23hK6TWipnDqhAxUXr5gr5qyGg25AZ2NXR9TxxGZXqPqJZXTUWHeXcXAsfJtrhi6nmV8cVSevJCSNgWCKgijgXiX",
  "key8": "fL77oDApdRu1kLJP8UdZKKEgAx8NwCU3Q7SDwojGBQiFEJ8dvYT5iKgcHrfAaReZm6UAtmCFdagEJ9kpLxi2Qf5",
  "key9": "4n69reKxjhHhZgmwXZk9bmYcSWNxbKg2BGFpMAmjq6F9un6bx3PgcDmpetdwwW1fN7ZzmreMst8GjdtvF5gvo6Cj",
  "key10": "3FALqZR26ecvfHVbdxgdgMfXDn9nv4wpMpHAjhGwUuv4rdUxL9yNfDmupaBJ5AiBXwRxNqPmT2KJMMotMihbg452",
  "key11": "4BAC3b3w5Kw2rcksvwgb7XhqbFUH3b3Fpj8JZYhDTiC8nHtop6R9j7BZkjKPDULVrSK1qp8mu94RAwTJdxe12neH",
  "key12": "3cmEpsPXY22iv52HTir9anbWBoPvwZEgk7wYp33VsQWfgnQWp3FJvg4WA9NS2kMeLRSgDc7tR9NbsvhuTtVtDbjR",
  "key13": "2LUtAKfcKoYiKPHs9mGtU8xq9F2Hf2A8o7ZYAFHn8nEPAxBQ39P8ZUrRBJSrZyHr9te27VXfMcvQZdYWsRkb4SFz",
  "key14": "5sr2fFEGJ78ohhH8t938s8S4pEqZcWQFuFcF8Swv44RpgR94wcQDk4hJ9PWj4dgKbTNHyfab8bfx3YeqxXcSMpaZ",
  "key15": "4PjcQVQPh4CoKviCCCgrvBiwyatnB6pTUFp5MnmAcust9hkKyZH84nan39D6v7xbcJBn5TL8S2z23VkYxxKZr8c9",
  "key16": "4ZFy37QrYgzoc2hhKi9kk6eYixysxU3QKSe5KFhZzR4qkk4K4fj6Vuif4AyTBDH7zra7GpFpEPSWE2fVc6xMmjfR",
  "key17": "aw2gwSYav4nXzXcYQxEuaV9LE4EiBGBat84XyRrkzJnykBfspaXTCxbnD2nkme5gDAmzFwPmSJTSCuoP4RsFKHY",
  "key18": "4Mzs3UBmNuK6kswzuysek2TCJ6ZTJgrUdfaY4WymKRBCANmVZznmmEDhRMJ1BdyYbqg5Ep6LnQi1zsZ8e7Gsr8NZ",
  "key19": "3Qr2pt9pdXDcwUtPFWJiEbvdBjLMsJjMHik6An3STs111DU5jVMErM2LtiySKAKxziRk7XANBw3sCUmNNxw7cxSK",
  "key20": "P6oQTqUGrtDMrGVzVeQdVJcHEGTAphD1Ye8eRWvQ7TRKS11dQCUqXBqG7okfy9GN3NaAjKPfVsG83WCCqsjismk",
  "key21": "5vXv5xFiV7GvBiSiRJRgRvNJXvn6ehVKRLdURtUjioKmh915LgB5rnU5Nc9iotYnVJh1rrfTaBofGMwX4iHwrC45",
  "key22": "3Ckd3U9pxXzmvZeDoumsVG4ggY6F7ADWRvZTTZAbZGuQ6yJmN8CCqAigytQZN4itcfKjd89hgFj7wVQK4bFcDGA",
  "key23": "5Eq1bpRSZG3m6Ha5WmkbDieq52zLwwqfdhLjHEZ1z7Mfvtmwf5zr3rwPzGp7X423pLCmPhSnqoRdWqjSdQ3eho49",
  "key24": "4Dmsr1EnbgprQB2QUaJEjEj4627mqUu1RwoV2UzmkM3e9UZYEp9aCG9MGvJxCB4yT2SdZRwZ2RKwRTMqd7HZmvvY",
  "key25": "5opZJUgwvsiTjSHhkbVzTKUE3HRaujn9X1V7UuK9ApTvhmFWrJGAizAcTVmySMRwuQb1iN8GR1UjEm8RdTGaNYLY",
  "key26": "2UxLbKZJicsMBFgEj7pr517BBoDfF8LTFw93ccmeFTcrrCmtUGcHrDjhexUXCVNQMxTBT1pznWRGD1kWMKdyJ7Xs",
  "key27": "4ZH3nXMXioBXNgHjaTNP9VJh18e1WJ959QxntqTq5qyqiP4idmABwnYekt6ovUmmWesT7LhMSoTHtaYiKAMx2TZ3",
  "key28": "otwiyYHX5RJynckMTb9y5L8ErSto7MXaWcQ7Zam8UGD7bsWjjGuAfDy8NcADAiKEkn381V3DmoUEwpVXoex4YTv",
  "key29": "34CccrxLhHD5bEWQpLFujjamw6LvsC96JAcUVKoCcwdYrtLAboKMD8PBevggirWpH9verAnoHPtCqcnoFWD4yZVb",
  "key30": "xffhpmgy3JD1hS8Ymh5xafcPYAKChj1ui2cDmvFbREwzwstq7Pg1ct9gg9XJbw6FfR6Y4VzDJmmhhEba8kjw8Fa",
  "key31": "488iaqVk17yxb523dQ8BukJkdYSTv7wzKoxSSWt98EP7dvWmAvUrwMwzu5QhwvSZxr8pZNvjaqQiWt9QrHvfb726",
  "key32": "4rGjUYmYaRqVNUUQQ2UmgUDLDmrU6JRkUMJX8kLyRLigxufUXCsPurp1Ybf6nyhxPEK7wbR5pgpjTas8DiqzNRtr",
  "key33": "2hKkMgEy8a2bTY83TUsG1zRzTat6ZUqd6PnhsmCXoEFTdxxaGiPZFYnJQmnzjA4Q2gycnaCur9xGsAX4jDrEERMv"
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
