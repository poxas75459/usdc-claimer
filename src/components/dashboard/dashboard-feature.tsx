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
    "2vzYUbRJ6a4v64HA3nfkJPqATE1KqsBj5Ab7AwB34YZUwCcEAQNd75uyYNSn3PC8igCyEwrQS1gJeUL3RcnKU8dB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3inxfJeahauziJi6ZjEvJjVQT1CYG3gM7uQquhPRUbQrzMC86n7i8CqznNutcNnVLZ4fv5hWkj3SnMiATorSspPb",
  "key1": "4bpETKqgu5jyifoeQBms7DQydFPcEsnoBHSjzRejqbXa98WaTAHTKgXJTv6fgpkW4oTYM1vjCJ5njJD1rcYxs7M8",
  "key2": "43SiL1MQiHpZriB55M1o1NCU7Up1VcmSxCQe64qxdbv612JfmAGRHzMk1dUXJcMZFwWwZTKqN8odTNinVdLLzZVg",
  "key3": "2Xiby5CBiyoAAcvhAsmGnQ3MnS5omA6YWfDibdxFayW9hoHGFey6Hx8xj7zeVcrs8QmvkxP5tpfoz9X2nzw5FAoH",
  "key4": "5sZMscBXzfXyt6tQiQMuSv7wSG7czyZMUNSfEqpzBg99C3jEadx19Gb2ix1LsboMhTyfVh4NpXdszGrJGo3rRADa",
  "key5": "3KRDdAeWhuDFRYSCVjv4YdLa4aZabghWmL758m1W9nAkqj3CBKa6W7tBgLtbGf6BSh16HejJd2RvSa1ZbuwEtXt7",
  "key6": "3L9iLF6r8scc5Cak37tF5BXrxeUcYL6ycN3hYTpqBbZxDYWiEazjceYdzmrirrMvRxsiDwumJcFVUissxzdhudCS",
  "key7": "3ndWr44Pu6UqeHtQ5wTLBY7tCVtZ7RX5YUZ2Bie48kDgWFgQ3y4VLyc2zVfzdiSo5jUaDmLpBX8LGXhaAPpTMdpZ",
  "key8": "5WxLoD2bnHPE5wSVkzBX2wy22m56bTqaQYgEg36HpsR6kqUeymqdEA6e4RWH6DuU9cSgT84H2b5VmkunvYCjNSZz",
  "key9": "48jLXEtXcycLqxBi1bNrn8YX6JxNSApQZK5PSxXGVfdmQ6TkEeXfAAgZR9V7Zua31uCewoYZhzK82GRQHUEr82cX",
  "key10": "5t3W8iACVmHpqwvTr5Gb2ZwqWHaeTrpRzm17oCKJCyJR3cPYw1cTgChupsGL6kS3ZBzZjWNMejXVQge93zMNUq1t",
  "key11": "3FzvkiweJjKFrPRU3twgDg1FiKjKu9GBVj3peGL7c9TJWUHYydQTYvNndgKB36UFY13df23q4oYmx7kwUE7torF2",
  "key12": "u3qXnjqCjdbed61BXSCrEzzzEhwDinuQneTeUqRW2KnsENU1TCqfBkhZAgwKWuCLRvyzHiJsC6ATJeoeY1SB5Ug",
  "key13": "5fC4DwgvdQ4qYe2Mj87diKKvfdmJucgzTqckTExcdQ8NBwhXwWARjWdyWYj8QCcXG3khPFw1HykuGvSsmYka6uEh",
  "key14": "3ex48Qc1YJayaeYpoRZYHi4rzCKfHAPrCp1C9WP8qZ8nEXSFWyuVo9gF8GdtLawv5VseqqNQ4vjBHT6UgX3Fdsk2",
  "key15": "4qLzJgdUhL54uu2vRetB1nSeWuBbvxhbdbNdZ2D92qhgdQjNsHbyoD5vMuYAQg9cCxmyVja3bKBA4afChKVRmPcS",
  "key16": "395iQ2X2vqVbEqT3cCGBmBDggPHmXH6xEsMoxcxPFvgF3W4nAFeEuKx4kXsjjHcd6pGkysEwJihL5YTJUuex4dY6",
  "key17": "snvwS8T6K71GtvsWFPapmD9Xqcz3ujkxEZ8kvkfoSfBMDHmSsZ8eXcvkNfLhRH9gSadVNDAs1uLRAeun5LvRJdd",
  "key18": "5HvJTV4hbRMcStkQAK3Gtz34zBwqvdzXWLuzSEvoMtwHE1WWhvPcwbQnzKaz9Zc43T3ZVtXMcfqXUwS95HUEJrg4",
  "key19": "32wccrmK8z6oXkBpR2fZJUMokx5e6C7SAKZFed29qywgHwcj2YXDya7sEkhD4VFLi88jMuPZkn8rNGWXNAcNusuy",
  "key20": "5btM8xjqyfuU7NjaoLA6rFexw2bz8niQfjY9yc7JWvckhmoTdYmP5p961xt3GCaXByWmfY7pC7ZtTTJtaNxQJgPu",
  "key21": "5BFFL9z7AXoGGpVuzLosCxtg89zWhRW3FAK1i4S4hgzEH8femACY6RH9x3s99g4vpJBsf9i668ygUtbFZqnBqXaE",
  "key22": "qLDZNiN8JD4TQME1r6aRoGRsrqsrd5hosp7akuoF5BZXcSRwLYwBV25WnXPsRimPPP2gGpgeErm2ghhfE1aNf6y",
  "key23": "4McDXJoTg1qRSWUEFFPKyrAqYnRViojLY3hGVsdSPTZmB4ZXZxW2QYCaCKJrZ7acchyNZbh5cFrSgJzkX8NG7gC5",
  "key24": "36Tqf4LgTLDKaQBf1KbommiquScXRSdvjwJSEWmywwGug5GsJtx4YJi9xHiUU9a1DrZiyEdEaYjJ3nXHXzXTLf6Q",
  "key25": "fx81WMepMFJA67d5ZXH1u9ZtP7np9cT6RPb7Bbn9KTb534oXhr9YoYsCiDXzvedUPC2ahwFLtbGTg7hZkU1ZADW",
  "key26": "2CGn5ofeECNSYeDw8HAL6BfNG8bcxzrsrjo4ehEVcn1HwRASvAcf1QuxEhJC4dn4RtMAjxyg3x7ZYFAxV1DeR48q",
  "key27": "wnAuVRyaEsgrNPukGoE53656S6qz1Ep35B168YnpnuQUvk2MYsmYN4Vn3HMHDS1tPgn5aFUSdq3RNQNWtncDEFc",
  "key28": "2Q96JQZf2k4yEE7oNgErmE9pa9QxU6WqHgyWZmJG4YrhErC2RTBJv7wZFsxpAWYbYc8wbpZshsAkPpTkURyAvgGw",
  "key29": "4TKdjG6q3hVXVoxCYjkB59fiWEyNBVzhLmp5RdFXaTRX1DQQueNigjZq1BYzwXY11EkQnR5ZDiTVPwHUPq4jL4Vu",
  "key30": "4Ad5QWAZ3U2hxXjgVFFo976DGaW8d915i1fomaPC3VFCFrCo1FKoQzbejnTsyYrosfyTnZwT1YHjXpAfZ3B7yseU",
  "key31": "2WkmzAUxBF511rLuwxZxTKiNCCcXo4LQu9gQTzqNaQqNJW9Z9dgqZ1EAPrMKLizJwh44w45MBveWiR3s6uHWFTc3",
  "key32": "2MDbfrd9QDezeBaLKZTrULxDqzGHSKx8G9oQbLax8ySGoDvDAEXGhdPpaad5D5MhnB8RAB1ABrD8NoGJz96scL1N",
  "key33": "Sfnd3hjSdDsdsmCHRTRg1wZAyfotRQweUQQL7nmw8HcTa2b3CKBBVALfnTto2mYWBAuWSjxuF4miibLn8D4M2GZ",
  "key34": "3ntadZKNpC1XnzQeeokKQ47FvDwBorAED9jLdXXEhZpJu1yu9KoMk31LMAsJu6nPui4rwFhbras61G4hogUiqtrm"
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
