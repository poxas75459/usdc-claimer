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
    "4Lk2jjqNrRpvc47iJejhpj1JVwwaNz2K2fAk3QD4Po2aezPrfiiHhruwf6V9ZxcFPi6ScuV4jQWdpqfzDfyCvhwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58bGExZVDFqeWFJ5XR2HGDmsiaMrpjKFNhupoEvMtExqDZDVScYE6C28nzwVXDiTgq4KUr7CjzWT39QmDBz2fTxM",
  "key1": "3XhcEaKx7crrPhU9ifh7uzvQGKoQAhQkSpMX9CfA6VyGrc7Gud2NbsJy4D5wFBvtDZbXSmzorndYL7q3JhqYKoS5",
  "key2": "5198sQpoG7JsmTcvARUTSKeQuek3DwKgqhuk6LcgcWZLZFwvegeUgPNkfGgi6JUBj7b8GZ1uGnwT7ThS4vNm8HzN",
  "key3": "5cAJpfKPd2R7AmKkg1p1fCnjsdkWFyY7JsdiNLp5148RnmtnE4fAzovjWdH91RA1BNpJJiBn2Y4z1eGAsGSA3NBE",
  "key4": "5GGtew7tBcELx13161wS4PLbrH3KSpQqQJDSWaLz76MMKFjJpVZFG9HBBxS9qzPEddQaQkD7LAfR1Fjo2vjB3Fa7",
  "key5": "4tWDexaqp9pwavHhueYzFE9otKECH25DuB2JKabvR7MKz2RwvKxZa9qcJr84vKbeYEATu2ut77fH5XSzXUKmeYnB",
  "key6": "5AooCahaSAwkQQePpbvnQATkf485enGQe4rJu1cBEwq67jvHihPwSAKHdWRDmEZE6JfdPPkf8LkCwHePK46xWtWj",
  "key7": "2n9phSht1Y8oSvz4KBHtGudz7tqJUwxZEXqhqBkJEex2EcaxA6qz94jcTqw1MvAzPySarEs4mXZCzUquTXw5jATh",
  "key8": "3E1uJvQ9uAZqULt6z5VWfnobdJpp4d6qvwxyvPF5Fd9ASyepNZMfhmQq1Jdmtv1VhnF2yUvxE13t5cboHeeDAjeH",
  "key9": "4GACNjJK3GZvYuJXrn3Sgxb4YVFvvyTSEd8L4gctQHZzu3NRbxUhhrLEAod15p5PKcvf1g8v7kHb3oGqb48Sk3f8",
  "key10": "43HWEVrCEhmxT5d9byohqkEyVjaXFvmJJ9TsVaG3sMCDuHppNp9LuVsJfK64NYADyA9nvKSWEwUjQBrTXPUmMuDb",
  "key11": "3xww1LkGs8HHUKhA4pBEkMZQqdCoJBr4FppucyeVqJ2xekkKWL2wkaKXngW17Ld12Q2MRH6zDP2zLpW4RmgK5sKR",
  "key12": "2VNUem1Lu1hp2WcoT3V4dqseKR1Vd43XvyWWRshadTvbJzMi3zcTCBgFopiCC53c1bgm8rGzhtXYNpE2w7se8fSU",
  "key13": "4aywC7Nn3ppPoXk3gdh8LnQKhc3wCKPu19jg8qLayBqWTfjHbyj2FFsbiiQxdG5vm4PB5ikDstJ6Rr9iY5AUgw3t",
  "key14": "egLTARpwccb9fZjkzX2MyAt8agffCypzQ31vJ3WgPDa9UQSHmJQswRigYkHpBoegcfn1Pv4utehZkCN25KEG2Xg",
  "key15": "43SDJeaQYHkXeWc8Sd7sDW2Hk4kBsftKTMJLoNRiBUGXqSsZ2Yfvkqf98eVRCDEcqhp7sq3BvticiEdWYkZJu9eW",
  "key16": "66fhuHB99FptjW7GU9CKBTHR8EzA3JbPRLVwHjDNeauvn97pf93rNLHrEyA3ueVztk55ThaNrbdCRU5kdv5zWoNy",
  "key17": "3wLJ7v2dv2zjhZZLLPjekWwQRGJMsbjgesUbisPmtJEjkTBkQFd8jxyzGwy28TYqqskA6JMTcoxcoYVf3sbowF5c",
  "key18": "2SJHHhoG1Vvsfo5W4ZHbK6K3sEFiezAKYV5sZGfXB3uFexqfe9hXhMA8dwwNBQ4RhNy2za5bZixBb5Xnkfy7BHcb",
  "key19": "1dJ5NxP2wBvxdkS7v14XwUqnuNkEJfTTACtACPsv5zHjemUWxnTMbXMazTmVT6feoHSPKFBESJHxLyXi52nWtrV",
  "key20": "4vt6YE4s36fiH97k65KqoGzeNJDr8gfdVsVZWbMoVngcw6RKrTQzfHtDEYyvns1S9pHAmTJeQ6Ebh8TVAYExhAeQ",
  "key21": "3pTGs9BqDtDSHvJ9DdULcBEL9sxyHV9C8TprQMZZ1zVxs9sZhkL7YV8kCNFKjsPrj5zb8e8i3ApWNR1ez7u85XLj",
  "key22": "cGfqWPcpDeC4CUJVUv3mzGz1FXJszzQyjcVekzw3fNxzbwGD8y41Vn6vSgQ1yZM3Y43xrMNkzbgvpqYyiBjYaFR",
  "key23": "2S6c6RT12yHswZCE12bYPCYbvneqwnJP9pN4W7HmWBtjf9W2s6EeKFP5VWfGVMW8ejRz2iGFR3Q899Kfy5RvMWfb",
  "key24": "2KhM9RZ6sEFsGx3aHqwjkk4fNnkbrZuPMcvxkLhXGSuHrQv4jNKczVHkvvBPBcNfL37zgZmCo9bEMSPcfBThGEJK"
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
