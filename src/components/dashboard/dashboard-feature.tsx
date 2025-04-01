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
    "5TFFa6gWZ9737AZLy5fiBpWuhHP52hZECVuabNvGS6AkTZc6v5DW1iP4yQm3AZoanbu57CNe3VRS8uo8tNbYMFTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yFxNayaaBEqcTznGdq7RkdGCYyUW2TQdDx8V3wAEFWyoLBoXLbVMwmAjqatc1xPk1vZjukMPdPJtiibg88tbWM2",
  "key1": "3pgLH1SAG6MPKfNJ2jSujEMP7rMCDRYiUBjUPDNZwwfwUkBNP4JZTB6Hka2vhHERS6zTU7RqHiFs7XVhvGpH8iuM",
  "key2": "hauy1aokASCerCa96aVaGwkS8Ri97dwidgsmPd9wzUbXZo5SkJrG7ZKedPdLqvN7Tjn5noLLmXMr489sMd2pGzh",
  "key3": "3DFei2DPUn5G7zeX3rSJgbi7dZJeWYzWywwFxeo2q1GTMsxPv3crxScyNnBmGmRPWYn4cFCCmUqskjwafPb7XKQN",
  "key4": "41XjGvnzEwA8DsrL3pXLB99LTN79injX56TF8hdLUGB1Pd7MhaN77dBP5irdbm92jb7gTG78ewcQ9F7BffyYg4Fa",
  "key5": "3qJ4cUdXxYRtKcfAnUgFgzcWLkXoG2b1Gh3qVMKiLz2frQSbN9sYaAYCCjA55J3GeTmhEdaBSqEaLGZFeRvJweG",
  "key6": "4m7DqZpZnRSwcAiKfeguUrbpV2jsFd9U5TRCsRa4WbeM32CF2v7DD5xk138GBJvh6rtfxhNDzjoYTQWnt6JQay1g",
  "key7": "3HSRf919KqxpmQnNmtwaEQEE6UuWqPSiDNofY7447CR3a3piZiFQVotP5ZTnKTTu3RCaA95kUGVCCeQYM6Miq7ur",
  "key8": "2FS1p9DnHqQhpNUZ62S8T3mHEGGeNadskQ6QW5Ns4vyoWooHdGGD4Qpc3KLwGJ9VwaqTDXR8vkLro2jCfW46nczG",
  "key9": "2RCW58GFamAbSmqKPdVk54Um2sVysWMGxG1kFbqZKnmQudr74stM34U5WNzy13K9GmGykWfDNS7bv5vVsPvw4wzh",
  "key10": "4zamVs3PWXZBTsdWaiKunEMGceP1JfZsBFmUsWdaMyKhmiQnDWSN2nTiJK4mRi1i72hpoWiNheUSe3DG7vUVaJQv",
  "key11": "3EGEcN9eUPepps1gatvW67jxzxj2BBLbHUC1WU3hjg5B1uaguQtHJC9VKTSnJ4XdwiBm5tqBk1LKd2dBFbcFDNA4",
  "key12": "2TdZYoXLTahRWRtZV8nrcyYBTBq3wRfy9PGzh4LGKjQdJihWipBuRJZiubLVaXqsb3LCUNRBWt82KG18JGZZxB51",
  "key13": "5qiz7wGAuHzZKavFfMgzihkdne2AxS89kmykf5q9fhQmdG4iYKwaqszyFVSsf3LyUHKAJ5WLv8SdTWWsm5uaRFYw",
  "key14": "uXH6eajqT6HnaoRoQ8CXR3N8RadYghyEhrwxyymQjjyQVau1GeFaVwPQXcYbfCWsTvqDC6vEMKRNDSbunPT5ouz",
  "key15": "4Rac8b46ZQ9VpeKTBbUJwtF7p1nAd3bJppxQFxFQXsb9F1CSeQy1ZWUY9447iVMVtEMLEwuPGdKczmrdUeGrJNtm",
  "key16": "UXhimXfuBVPAFCgCTfru2HjcgaKAVHg5GVZv6pMBTsGpwxqWavbh6dy8X4mHU38PnXcvYGNzdvkrYLL3zwoRU7n",
  "key17": "4kwyAAPxEu4gbCXeN9ijxS8uLK8QHTLy4LCGWyGgUFTYvupT21fnZrCcuEXfvxQA2dxquVkcQ5W8Xh6Jd3NnFxnc",
  "key18": "5gajFN1YdR8je2fZZbEw5CuqZQZ6yQ4d9pYKuQpSmpfRnXUdiE1E53YDEe6yJdpgeYuejPMBcKy5BugTj9EpaiEw",
  "key19": "2GU94jV9pmT2ukSHkHFEL2nwKYx6dVPdmGEZG82fwwPrvJuUxQQ8aHLgoKjDS4qgePpa7FHgDmTqYbDVmusZVSpC",
  "key20": "4kkcUGVgUon7hBUEkKnYA2HYvkAK5BbPhH2bG4UzjSscbTKwhcp2TeZSJ5gHA27xpomFvZN7PAFCg9DmEFD6kSxu",
  "key21": "3DAxRMhQjHE6N63eLaMhZD3S8TSbsDzx6vwKRPTXJ7ksW3L2tXLcw5Rfn9ZCnZueFfKY11ZG751gfeDqosJ5d6T8",
  "key22": "3CtAyTg3uQjq3FD1tqYSdqGjr6zu7fNtWcn2nNrb7J5bvBF4yDWFQrDAt8tNX474nmcuLZ6jk4mANSZPGnFAVKjC",
  "key23": "3kSVPELRXZv9324o57v7RKBseGn3DMDyge5A42qW8BUjYtrn53MfouKeKbY7sPrniw25PbiJC4Tyy3TJS4ZmWNwW",
  "key24": "2aaNmNXbKEEXKGG5NXQVKnPcZpF95MJYxDapf2Ch1kL4FfeNZ9mnYRkWsMdZxqjLQVFQTD82KCU5DJEugmsueRdi",
  "key25": "2FUE51ZCpTzLVHVLKay9dZ1hh2dnoN5KeCUESCK4QQf4Gfn4QKySL59DK2fugRT7n64eoyqURRj5Mj3NDQzgBEqi",
  "key26": "9RspKLwVw29iSapNsreobauicBm7Gw37gwgaHdpovX5NQcvrQoSJKBS8rXnLpScWgB9jYj9e7qbQeBPk8tqfKXa",
  "key27": "A7Fp3nHLWPxiZL6VQoYjkqaMm4BhQmPBVy1CzahuU7SnJdN16qxaiGjQN99QJAyd9kYrzTVKZ81ve5687Dw629C",
  "key28": "3f5odAdKELFgDNgVUqCiSym5SoWMU32LvSHVvzM8D1vqT6GGFwzjUKXMeqdcJfqUKg9SNCanW27DxpZWAYmJMqLd",
  "key29": "2CLbGWDZoY6bnUBut44niCwWcR5N488T3HDV3nqd3ikk28tJ8SJK2a4ghb2Miijf7h82XvktdATz5wVD4BtniHbt",
  "key30": "2cqWGJWMudr51jsEB6i4BAcosCiTqv9RHW2PmPvZggNhPi3VKD3tNZgWhov8Fa4kzkWhBynaV48b7oResjBwWLs7",
  "key31": "42qUp7iCm7VJi9C9TdAUTAXJYrBKDHfhhCFYRNKkPHwFwEN328JkJFuSgsjy84kFJP42JgQ7QAW5vNafnxkDpd2Q",
  "key32": "3QetqQ2RFZzMbbi2Jp5mvEow4RWPfWqGb8UqEeP5QfaaeYqzqmMpufAqERASspQBNs5qoSD2WaAeSq25nfL2LGtg",
  "key33": "DzmLPSxhdMTUyTEiCVjw3x5CdJQm9mQbZhKY7TTxYS8kfPepPPZFTjJA79cQYeS9uSacaaEgAnPgMvY9cDe7VyK",
  "key34": "55NaQpwLXhDzxa4oJkyRitnkcGYsBB9GpmZVkFec7r9GUQgegewiZwiDWHZz1nAk4TDVpMhHX1SH21keLdhgqJUW",
  "key35": "4S4msmnRv4gq5mgctwc1HfU9p1m6CazoyiHHhesY7yxiDpkCNeE6u3GaSbXQkrtf99iVwiciWTpQwCqAuvzBnU9T"
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
