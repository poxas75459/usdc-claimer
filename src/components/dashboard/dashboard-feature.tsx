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
    "5BYdXMb4w8tsHfewFdvy9dxamUvrzgpwyEAs5KY7UiSnBtzELMFGo1k1YF2VjpUdFmK7FMiNeNtgggrB78CY5fk2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QM9YfbDhK4z3XY5yjxPtcUKeT4kEmZLyCGFsVJUxf8pAe1Qt8hVaFQ95adPve2XSM2hwQTZYsxi1yR2CZGXZBg3",
  "key1": "2wyNeNLWyEgvABja6Ld1mBE3crWaKCAi4coXDAxqZS4mfyx7G4pQNUAsF2DzyFrkUjri1ivURE7Nke84Kx2651qK",
  "key2": "5x6ZVtH8thY8xVLpdcELYaFu96AUkh9dk8scaZUMSGAYSDVq9JyBbTtiKtFb9cLhurShUirpHg16VkJaPNucidr2",
  "key3": "25PLrGkUy4cr1WSpiVJVrrVPeBA81bUyXKHy8qRxTpTjpDXSFZVQDHVT7XqWSez4ThKvv3fjsAmt1DkZiCDC3dBM",
  "key4": "4WGr8uvE8Vps2hNogFZDY92xaJAyYw5UDzJjZSxERSCuiTzeocs8DGvthm48eaeTqy5reQVCeUzQhuwx74E6vvXN",
  "key5": "5jWKCTbMwBgNn7gcrEbprHZUTZ9cN8r4hPMVQ3Ch6jSYPNXXegvuRDt75RbAZHw33S8cHp47ESzVpHUE2Kh7kaBC",
  "key6": "3kQvAEGCf7tot32dkerWfRqJ3cYdBSiCFK98Md4K7FTXxjzyniRbizQkcv4QNnTYkxj69vetefjmjci7ZNTK46yT",
  "key7": "2jvWBuKBmrmgrpntbG7Avt9WDdK6XYzpLsWgcDXYzE3knSrQQZY1qcMH1BxZazx1UJqBPXcstKBSLAdPevWdkHnz",
  "key8": "pigRmzEM3nVaKJVoFdHSY1CD6kwwAmVFBUwWMSnZNmkRunHMA86HBt9faHmZcLWAx4DoApADProQxU5aU7X2hGm",
  "key9": "xX8F9gtXv1SrtRx6Es4CjXzmUe63BEijf4yCYXwsR55j5tJKZcTXQ5QfDcXpLnUMWu77Upwab6LQSFzyQ1SSbZb",
  "key10": "5YzojVSPqjxzZhTV8Xeojd6nuckT3JzDvrSkbHDjfTAWryn5fGnQFw1et7un3N2WxRrrTNsqtfwi38UKeAPK7bTV",
  "key11": "5ieDyt84cu8byKFUgpwFCzo79gKqpbDVfiFmmYqHJ5bhLV7uemFD5dVdaj9vvnYHJkyNf3ptae73Ty7vkZz7E3dv",
  "key12": "2rGToLLgLRnhWvLiPCiXsjyjqKmUF4LvhQcQT6RMdSYvhQwU4GjqLG3aDQqwxHcnRWJAscAB9MXyED42SfwVJSRS",
  "key13": "3mxauUFdeW2cXWBWwmVysxgCaGhhEjsbsF4BQgbiL2St4rrzKcDfFXsLsnb9qxAHDNVaqZBCfMUV6nT9WU43V6xp",
  "key14": "3tMwxyiUczDiKtiw6qaQVzBhmmW2ewQXFgKZXYyBrumRCu9DRB727vJjiJ6Aabwdwh3pr34YL9t2FAaJE9g57meq",
  "key15": "4omQoRxqT4K2cfTMjfr9meopuf1TjifBs5aygT2oZyLPzeGfVLdg82RFTVzRfZ7hr8ruhrTtsnmfxB4SVU6q6Qqx",
  "key16": "5GYruNKskTp8Dd3ya7VR3zEmAZLTLCLPCSDU1VFHqDLQG3RBgwsL3rUZg9nuU1QUVFR4h4mjxzxkYaWXn2gVkJjA",
  "key17": "aqFVV4Sibwbckj7q6LM8NGe6ZvPRWQsJc2yYsJfG69yFVDDb6T1MXnjyF3tubMDrWBuvEJcRewLmZsHx1Do1Qoy",
  "key18": "58GtRJ7Nqk1dKxy7F4wkCPQXqaWQ4mUWugZLrbqDipzDyQFunXtyevbtdBzpjaqx8ETpAXWHfKpNYxezkzo1CQuX",
  "key19": "VGEtEwAktv75N2ji4En3CSJCLhSdqAkrw8xZuTvgGnn3ve4x8ULKmBd5vN27ZSvpdys72nVe5DV8mPJPNh6QXNb",
  "key20": "5rq6okpND6pecCTk2PcHdtwT5NPkgfuWVcLyBwHHZLFpN3WQ2Mwspe39uf8TRRjUVhG8opDkdGWG9bxy31M7Kc4h",
  "key21": "4dHsb22n6Hb284nHqbsWj6zNs7jqCN4GPb52jgm2xaAAjjU7XF1Mi6X4i1WzbfvLc4sDiTeQSzRxTg1nxY9BNmKa",
  "key22": "2JuXLgBp4CxhWUt9fiL66aa34D98eZwF9XBYtMmCRNiF7RmMowotLmyZPj4L8QyToCDoPozgWgkMVxcPFzJgEEDY",
  "key23": "5qz2NbQVH7yzVGwrXFoX9LQBeJUdbGsUPqH627wKLpV7H4hw1BXnuzahS4Hq3nkLhYxTb6uHhXQQLCAuTNaYZUTV",
  "key24": "57GeKoodZAY9uUPJWrijKfn3GGNWYqWbwR8fVbu1SXbVigiFM1GAvTJ1zoMJmtUCPNzhX45mtY2WGXm3NiYMgfK8",
  "key25": "PjTaRVUq1aU7jRSP3JaFaUm6EYbKzxw9egN972KjuBzZLVBRd2rnBC1w8ARUKcuTZkUcKex2RG2uY1L2kfpGAX4",
  "key26": "2YeDxwj2xMDWPKRjXTm9Vv4mP3pydKsjMzHnnBosiBJKtmxQRqy5LqswAKKGptpssFZBbDT5JpXm1hBQbgKoxUfi",
  "key27": "ah6YA5RPcRf95BEV7VdGxRmNd94i6XhUVLwra51uvLf1A4DXQQkkTt7sQ16egKXXAnd8yPWkMqt9KKLDTY4ePQR",
  "key28": "AGiZ9G753UxLQpiwShCLKQ6jPmsET372TdXGVEeWshUzVL7qtjCrtG6bPhGAGAiGixviD2GQfZEogVTr8pvcUMX",
  "key29": "4nD9ihNgcZpdmUy7sfR28AqfjTW6AZnxGkwjY1fKuMNzyBgCsUc3MV34kenETMH4YRu4qrMJWAV5EH13Xrk5oZNz",
  "key30": "2TG8Ajsqz7rRoRVXzam3VRb9tHV4RFYvC5sRDf3VsazbBWNG8TE1Tn9qDUEzxeyDn1awKCYkwqAZrggoQYta63mg",
  "key31": "24jKFSRmu6RVQRRcPKNjxafT2oG8kK4BMuPJCktQoKXSX2vVwrZ9bL5Hi8T3CPcV2s3kyMAEJRaxZR9yUV3SKxmp",
  "key32": "4ZgYEYwDegYFZFEkjK33XQv9DL4vP1hKox6qDyXRHuPm4U5BCCk8KnkZzmRj2x7tGqWhKoSJk2dbyLqcpUqcfyVa",
  "key33": "2HEYBULnS5RLJGXNpFudEVKsyGTDDn1sqXeMQFzbUhg6qbsM9coMkLGjjqNModkfD4XgUYqttK6XoKqBykrsUMHh",
  "key34": "4SVzG1xkj5pcji9vSN2Hs14bP5tCo2ZjheTQxUFuE7Ti7kxX73YVEzRHo2LKWv27AMVs6XjRRRZN12jYhHsMq8Vw",
  "key35": "3k6NeDbfFHELVUJbzgeuRLZsCaX6LYTTAXGkyroHZwrvpUBbEdsDVaRzyHrHTK3EjPiBcpHWmB9RgrCpPq17UVXH",
  "key36": "t7WYwbEfJHHm2JPVbFnkvYnv68wfJjThnN32E315mSkDxu9v1wtctQhW483XGbDsMPHkbmCP2PBG5wJJqQ7qGQk",
  "key37": "4eWP3AKwGy6XhGB4AmkqGQMFt5MZZntWpnjmpcU3NqiqWnXHKRJohBin366dDqdjUijmD5GwhPurv7SifsCnxVXK",
  "key38": "3Cf4w7rL3K4qHwbNMRcoiPK4JWSeoa3eytCnpPKLK4yeKbAKPDALG1FNpK64nxS3MVHrkgUxL5S4R5JmqyfM2dEt",
  "key39": "86eLnouo1uz4LWpNQ9LRAZKp8bXtncewkYWtcUHFUs4h9eZgEBJgPXjiUbYBSUvMGBZfzwVBfApeDZn3oXp2bha",
  "key40": "2F2RnDW4SFCeyP1eT96UwxbjFsBRuAHfPy1JRcViGz6cD2L5spBReWbgj5JJVhiQV7TRUpJBxifGjfZHWHDkuKfn",
  "key41": "4Y3dvh2vA9t8fY1hw4gdN56GVohFnpZnH6yjiostxBESHpMncAU934pxuURVYaqwGGBJfhpkk9KhFC9dNCLvWnAT",
  "key42": "Seg55VvQ5vMQ7qavwkZyQHds23yDsek2bhLTbhHeLUCg8thruStVpKU8ic2DLjChKL1nMrTNApioHT5tmok5Kfe",
  "key43": "57tXnHHHALjnYY5iJ1stkYTSzfENkf9bm8zwsTzBW4KVfy5r1zGRahURHhrdS96K8agS98zdnwrhQKhX5QvEuMwF",
  "key44": "4tYy3EbGWwvQjhXCPj9J76FPzjHucxqEaSnFeAUB9SvVpL1U5JX3bZ9EePsqfc8BDGJr6UEahXdR2cF2CEgS1sCR",
  "key45": "4uGn7foceaKw8hSEp7uZhJJumZP3qMztVgKHgsm2KUy1pkQSFwQSsP46M7aqs1pASk1HpW11NkiuxeG9EZKPy2iD"
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
