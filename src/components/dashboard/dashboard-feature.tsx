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
    "yiCr47pDBo2HwniuX4bZjxMTqhgDw3wQXYVgPqXcZ33g3z3GGC75quXU3BcRGyeYCuhxspZAq49ArPpVpwPSFsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XX5j3M1ZbcS3DSwKN9ryxgfDoehyRvDJtJ1V7roaNxZkKc3GFSRKoB3iGWch4FE42Pqhb75WBEXrqphiV9hTwAS",
  "key1": "3KfNXTeaL9YUCHqfhULhKk4fKmS3f4MK7e6Nkac8jS3tzn2JAWSBXWLSitXpcyt8mwB29HycjV942QKx86U9iLHH",
  "key2": "5kVvdjrUS4ym4RbUJ3225RAz9B6PtQPG847EVZz64bguEzzyWkw1CajQt9ttPUMhskoEUwPJZvefNSohTQSEisfM",
  "key3": "4ex5fipBBDfJr6RVgQqGDvMxWnw8tqn8p75sKUFKjY5yB7t4xHCx4dfZ59Gk92p9XkSH4q52qBQJMi5vXgXE1CfK",
  "key4": "3Vv4rSncukvhaDNqo2ZY6PuL1M1ijWrpSK33bgo6c3LhXi5jupJYSXJhcHiMVfGkzomNzaZRxE9bAwoa3Wxcnk9",
  "key5": "64C8voDJJ136d4iThUHTwwjEgBbE6SVaJ7t4iU5uiBHRruckiwYSqpbNpUTeWmS7KEEbfsyfgMeBqQhwavHFCuw6",
  "key6": "WdDtqPFdHb8aM9ma81VmfQxaLFL2LY4thGB4ciUMBx92yQdpeGheoHZjCPCPhfgGYmWPy6KM25C5Q76JzUfgcyf",
  "key7": "4RLHgmzAyChoxLF8LFzj9rQfCDzTbqrjJjZZp7rqRuSwX8utJZ9tTx5T1okyrwZBthVF7r3sMSyAceCgmt2nfMYH",
  "key8": "2sJNC1BV6EWApuBFsipsTPNpnfCiCA58GszssTZqefxQNn5X1j3Q4qwArnueHR6JFbEToD4Y8zcLRyeWsYNs3akr",
  "key9": "5DH4SevVSaoi5M3AJaXK7URDjUMN6mfPDDdpxLfB99SQaTygxReRmxekLMSrBAifCJMk8oiGWyaQSUQs23mE99JL",
  "key10": "5mx5qPD3RFdASqYFKuqiabMTFrUTTMs3mjX4fjYmMsNS66FAmpjHdAL9bx3ZDzYTFSAvdTy3zq6oFYf5kifUc9Xu",
  "key11": "3K7Tf1n8LMix1vxVRk5RvLUJfdTiXayed7XMBXf2Dbc4t6pNgbGPcSNDy2qtBUGZvWGSJhfqPKQAxi5xaCQoSsvH",
  "key12": "5RyCLiNGnRu1Tk5DKDcKuzQmFnwGm8eEw3CEAtQZgXfe5tDhbGXFcD8ju2TE5J8p8qAanWttqRtBX2hjPKkMLsij",
  "key13": "TNtCpAccUTxfuZAovRjMDCWtj88D9nwKHpMHvaWc3Qd5xj7DE5DBYPzjw7QggL7S5598LFTZNaR8hrCmWgVBLh5",
  "key14": "2wcVzkj9xZNPXKzx8iQtAXWDx8w9vs5Fbyg5AwphoiCpiMvdiXdaPhpMZvtiMfJYza9zRi3hKLxrKhhwCMduxaYC",
  "key15": "5Qw62H4PowUjVfx8T5D2jgjv1BSd2nKCEpBnkB5Z2gPGAgo69Wx54CLQVoPARSAVKB9gvFaHqhK2ZLEZ5v8HY18J",
  "key16": "655bmM2qMpV6EPDtfGSWHdmUrxuT7wE9S8DfFSG4ymooJd3GHuHULbiMsAFzjtYNwjNKAW6GHGaVbUcAsWrgJMKV",
  "key17": "27JyvvBSwL7GNu9A4ph7Lbs6QvSwg3LQDyiv7djeBBLPs8oL3VVvhE16KZ1rWAuXxr5tFJhrsFqKsVqo1hte5xP4",
  "key18": "62dsqzL3GVXsJEV8JJY6ju3ovrfq8dyo5mjkkUgAGWqy9apTtrtcYC2oCv9YTt9edQ5rgmE2iGkt9J5krostQ4DD",
  "key19": "4NdyVrr27PM7S3pKujfwTNuyJpzaqbiiVPzTEDA4Lb95QsVD8Vs2ieRY1ZNv7KeVf4dKYYy6hPmPCgTYGfnYQf2m",
  "key20": "2oqHJVxw2g4ZbvRYV9wnfPqauT1JQbaRu7iBcQdYub63AsPYG7J2d88U5RUrSKJh5hSTMQY7jpDz9q5574GNdi5H",
  "key21": "2GtsuDtLaKcnaCi81M6BtMQhEu8oMXis46cpkXcSLavwGpYGH8LsQLuRJPyQvLGQ79RobxQszfvAaP2BjB9Xb8p7",
  "key22": "3TLe1vBVNNysEye8KJ9SzaScZDNV12ut3X34PS1Zq2cPTVWf6Dy7Mambfc7rMTeNvKXXnzTrYfE3ytUukBCBJ8qZ",
  "key23": "5f94K77JufJP1GX333CQRMDEYWvCpi5DAz5BMbTpmjsvsSG1GtVpnpVpTNXA1mC4X8FntF8fgVmJtwnmhsD8QfK2",
  "key24": "3CEJbzSpyEi9dfnVJwyZYsAkXKxAqSfyWhmgcqnQJMkPcr1rznALqvJz1HK4TtVG4VfQMKP92MFr7t267wwACCCa",
  "key25": "42Y4iisXBuQmz1NNZb3a8KH8Ya8FL6ctbWnFoEmugt3Qx8bVcs9utVmB6QjugwjC8H7c1iLKNgVpYn24D19DzF94",
  "key26": "adpHfFnTfkcDeCjK3QX9novvydYqFHigo8LPUN31XjoTUSNZREHfFnseEzZvCpMQu7tjayStjNwKV8GwbhZKKfA",
  "key27": "5vyygjceuP2yZ2AbeyaekiWJmn7XeJ9Gvd6VmHLvTqrTepB5jrFs1mHQqJEDjzASYpVKwaiHKM7p51LcWbTgwUjc",
  "key28": "4DgR5LcJzRfyteC2qMbvfWi4aar3tJ9R1ZBMXTy1f6P2UGzMKQ52cSZzhUbkmN6pV7AJ6kHyTDDwdpZfiopDJU7w",
  "key29": "x22eLbSbvS4YE8pW8eZRu844MyWCY5efAtunjPEkZC1WuveF58wvY5JRBkNxHuQrzW5WsgkyJCdBFGkWvwuMpvU",
  "key30": "481qXRbxCuFhkomjmrq5hLd4b43WnLhLmTAwBuBCyJeeSo6xbbiv5tbtmtGtXVCYhjWf2nPs3NitjrtPs6eCpvvt",
  "key31": "4zLpf7SiteyNXQjW6reEv25xVHy6PLhtA93i7b32CCr5BUmhjpMmiFHhpmpEzsLmPMp8qyYcdJXCeUkjFkSEoddE"
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
