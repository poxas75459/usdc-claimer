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
    "3FCSeYqNvxCtYKKxoBrCorPg8d6WD9v5aJf5fkW5i8EUV24meHkmLnJzpzCCQjq4SYeeFGAdfceYV8UsSPZVRky2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zKmvhTb4SxijUgZL9GkX8QX7jC3YhuhzUjoRdhVVnbk2HVqZzXeNTqbsvjnHERMiJTpr8utn6Rxwr1fgsXwbr5t",
  "key1": "2W5zADCuSRG8bAeky6FJS35KvypVhWPE3EnRJnW3JogkbLBnJDQ7w86mZT5xNihUhCiTYqpzZfbzyP656xfkzZTA",
  "key2": "3WY8qkqS7NS6cB4otmenAaTD8gSyoeyMjaL5dbgoZKvjaDr6Rt3VZfTHwAuywiCo8WWDb8WDxtY47yR1pXqtawi9",
  "key3": "59cRs8ZnQzS73LXe6mnKe3fGbmvDnhbwo32mynm1dmQoXaCW6z5doCnuVc62hPoM7hLLMTH54PApoGZ39Xa4PSyS",
  "key4": "f56pjG3NV4w3z4namH13uTStnms5cwvEYPdcZW2tLFRspAFfHYPa5ayxUpjxcow3VAwdRaL1q4Ez1K2mXETwjfQ",
  "key5": "52eDeyibNXbeGfTEqihFSwdnghDtko4rKxbRQ89LRssgu6z2nVtLt3gf7BQxiD4Y1nbDyZHwwNZRmmc8SPiXkbvr",
  "key6": "2zNuiZ6j3b8sgPxN31dZaXoDVszZWgy6cfKKv4srEdeXqUdzUvDALXgPEsNVxwc59jBtsDQ3ZBEr5CoC4r2USrKm",
  "key7": "2ZY6BAqBrzp8oVaJ3i6gWewgmGXdsMueTRvbeowqYoKeRhPCmdGGrQJCLeQCz5oUqihos6JpCGYk89LyoNYAxJRn",
  "key8": "dfnG1oSNYfrDYJGSYv6vxieH4smepytggwXQd8zBU4raKZE8vzzHPuSjvz3DZL3mVqPj3g6LHV4eLkvMCfU8fHr",
  "key9": "J1dWC4Hpy6cbuo3K6x6ekE5dxtCmUmk2k6GvNjmzYmZ1sW3ehNHYJwCtj2mMYsCjWRYjiDxht6MRVLEpqCbd1Sa",
  "key10": "3Cv71eTY9z5yd8vpGRvDuHUCtdjn5aXj5HamRDN8zF9EY1uuYS8mNiaKCUwCnfbnhkH4uP5owHWToxjFRVrkDpDr",
  "key11": "5aNpXVEqFmRw3MzCyDE4arHQXRk6RRpi6FhSweetNtD67cHJuhCMaCuMfzvDjR1jdTUMstxSSEmc93UJZBJXWZ3Q",
  "key12": "4sCb9hQ1wneZzWqRTa6dWByBckTtgFjFFmsPtigeDUoywJxonKNrTUD2TroBXb28C7dKGWpKK3cvfWwDgYdYRyXK",
  "key13": "64BAzv15cxEjVxfjmbSv3532e5PZqhP3925e5KvywCCeMFtgKbjXKSjTVH9QMLAEYrQtXBBCpgwcZ4Bee4beYb7R",
  "key14": "3ughLXZCqk9A29HsrQ54zS9RHB4uLwYryVN5BVmZFnxM6PEwm1s1cLUEb5k8HCYF8hUdcE7z6mhokwrsMzpGm9X6",
  "key15": "5yvGoKtdFKU1prD1igJ43gUecEiVwvoU83SDGUkTdrzTaTvTG9JwkidEnnJr28EpMghL1tvMt4UxqMUUcQLyNFor",
  "key16": "4yxkqifg6Xj7DFnQ1pHXjMhyGkRBEnnrczSgKkNp4yPsgLhG9RnivKibMii7BsqCefWfAVetoQpMQrpxKdjNo5pE",
  "key17": "28WB9uHVbgqBBg3LVT6fRjn3XR2u2ShMJ7Mp7ri1g85Byihenoi19ihUgLsmKLaSoB75rAXwCYfZxFRmTfybe9U3",
  "key18": "3G6wiexX7qs1A9NeHeqhDe6mLZd11T14Qe6dHdTjLS26RBdwKXbhmDp6JvGPUbxuKF1Lu4TKCRBmBhdCs2vQhhiJ",
  "key19": "1km2WXcduCdfHD7hBdAeUyBmhqQZ36TXSp95q4Etsj1pnwrEPLTwd6VaoADmgnqkVdHt7CaUFuq1BCM6BE1W6xV",
  "key20": "jc82P1KE3eCRQ7SuPfr7LcavbnQYyRd7yxjiWgmSHtYac9GFimh8CsqV8rC2vn6iPVb8S11HQu9C4bK7NrvZrMa",
  "key21": "3nduKimJrMzshQvpKUUfkzNXbyVsQACfx2WFWx2gw8dW46wWBEapr3fQZsv6Hs54PhA2Sdi3Fos54FVScACAEgWm",
  "key22": "keRCqyXQavmy2XqV1oz1sTtRiyq5b9nL2QmJNEahstomQL75Bd9Ty7EhPAcNwQgDtkaa78FMuHqq7naiWN4xcEP",
  "key23": "3T4gw6h8Xup8jKkSMkRDoRSjBEPwo1PiRLDUuorTVKih5QZb7UsH6FZB3ZSLpUcRWyq9UxyeRrDYvahCCzVvbPRR",
  "key24": "2u2iJyNQZH13EMgsLYTBPPqXowN1hsEoZKvW1zoJSBipHpUDEpKJcJTnzJfFMK26Rmu5FAFmyUrET1tCjZ7DEY4L",
  "key25": "3J2MnQ3m5Zj6iEYCPuyrBxDnXv9exX7fdyuYLtun23NferHJjtGdS3RJiA4BvTwT7xUbvPxJFgtYnwoLNXu6D3Gr",
  "key26": "5CRXmqjQQkzYsT2j3zFdCrzrxHQzzRkqF5xC89fwFFtbxb8umDAMiARD8DsMUU1uHoNzXnsjnd7qvqGTDU6Wg4bq",
  "key27": "3aqdHnA3oEReuvM9Pmr6ikaSyRe8ciztCFvbmVeZFtvDkh9uKNYkWhRQx8PbZc7RH2nH7PJbMtiUdBPSi3bQucS5",
  "key28": "5caWMuwVwMT35gAfnoZWvdHgJAMsui6iJz7bbnQBWpMyyxkdHsXeLa48mmVHLoHVbpvoeRj3bfjxFQpXYmw3h4nq",
  "key29": "WSeRMo4HUweWRSUC8WydHKqxBsEvMq85f6BUoExurscggWfxBKB49FuuG2GUws57WfymNJoNmnph9sXEr4w8QgC"
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
