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
    "k8h81D41TWGLJH6nDt5GqLCgYY63KDHU7zbUM93k9nJdgNfPvpzdnfEKduUYAEZCdTJ66EPzGZ5e39vuhXDBxdG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29mjdEgfeaj38VLx5Fgq4pQWtgNsLt6Fwu4TPxYYq4ir7i3tz8Cx8w7QP43CsALHwUYrVPDJWU3ScXJxhsTa3Jfu",
  "key1": "3RUxQipYAwg1WDkKSzy9WnVfKuFsnWD9k218VsPBfc8k9zvK7wYKWHzQ5C5SFJYnf7URcDLoy2TVJXF71WqxnAMS",
  "key2": "4FL98ws4Xfwo6BSgRXD1muF3P45UMJUUm8WB6wwf9tu8VQLcEZTiqqmfKSUpCvMdqBzzLQEhmZF4vQR7QMzA7qUf",
  "key3": "3YupzkwUm5CjYpRcc6jogZNqHbWfUbPraayCx4ud25vrGkbNmeDTi2i7NKduS4atpkXsV34Tb7U7dbH86C8v5Ey1",
  "key4": "myev8x9MPcmjdP1tyByMCYEyvKFiEqdtR3Qa3guFXN3YMY2oMucJVX9hXBfgAx6tb8XGAfsmH5dX5sy384dpgDB",
  "key5": "2sLh8snE2KsHT23vP9HK52m5AmeS6GpR83gHtQGMhNs2ZB28BeVwUkbu1jPVMoNTbweZ57hXnwuRDbXx8V8GSXD9",
  "key6": "EYHZ93cCrcncYfSPRyWPdpvekbUsjUnr7WGqq3r7D6fNnCE9g77YBWTpwQhgAULitwjKbLjPs72ijVYDr3BcwKV",
  "key7": "4t9PkbDEa5XY5RhHpGoXNBxWsGvFmt3RhPH1WSvsrLAZEavAbKdqmCvPxZHx8Pm2cz3uBNmTkgzHAAcFuabxUtnt",
  "key8": "2utuUwAskaUZjBS25gvekhzdcCRApVthQ6Q8EaCTLPEviufSL8ESkS6qWoZUGDax5bB8BNeVKSEG14V1FeZNzQVC",
  "key9": "4C5NuJzidFwYW4dydRKzzihxm2wsKW1mCRhnqnMP7sAPKu4GjWfsRU7j6QPJGccYaiqDv1zyo3mwGPt8ARGgXDYR",
  "key10": "3wUqDnCucyWLpQF6PKZhDNkXutYnPDB6rQHantEtPNFQDbQg7RsrNSamgVEjYTDtUf6V5TLtCZKYsgKzfLUwC3jM",
  "key11": "2tfdZj9HSj97FjPEpqhDhvphckz3KB3QcvqndZcNsLyHqY7HckabsZPerTrXE7cvbpzoNjFxJ2dePVfK7gBxokob",
  "key12": "2YjsSXeWHggeQmBftRKJLZ3YoLyaC8aq4XGfU2iwVqjLVAUtZcJHLC54h7896ZtyRHU56tLtGHf2ed6FnNesb6nf",
  "key13": "3njAMwWcnmUCBgUFNPdcLBmroDTsYbjiPgcicpjDW9VbhPSkSDBzhkgMeHFrCFcjjyz8MA5i2GB5FqU6zAfBJJ9f",
  "key14": "3G7yRhjvHSQ9gP4pQ1K641UEYCvTHActU7TcxTNKgAuuQGdNTGZvACTP3uP3fJWtA49xmkdFLHNScW1NmWwXX52N",
  "key15": "5PQyxE3B5XFGrMT9KNBWFsY9ti2PcL4wb1WrYQ46JGGANNpvduRqfLc742KfnbpJe8rwJoQLU2na2yV42km9xoCM",
  "key16": "2rbS7eaw7mAodaJfGTQkYTbu3kkmVqGKHgDk93rr6ZhVLtvuxGtzjcNeta1aanaTSod6QSQvwEQsmwjUPk4QxBzA",
  "key17": "5oKDX8BtveH7jtid6en97w2aHNcuQX5dHPGzjeBszeC381gJfuetsVBcBQBTxRN6P8xkE23HvGRqLtabFhH7C3Qx",
  "key18": "44ksUKtDbiDxNSYmACC366YjcoLpojGxR4kWi7NtLZuHysg3GfY8jbFLgsULGsizRLQP81oDxNphE4M7Znab4f7F",
  "key19": "5agzhMKQFpRDp6VUyWbV9xvsZ9jRVgT8RWTH4ZBi8axDqgSak5chFcmZ4nmRJSD44cqxmFGKu53jmmHhHJWp6DMd",
  "key20": "3prMES9EECX5bjnmRwMGG74vApCbBjntstTxjkDh7zRJ5HtU7fQM2X1AWg3HQGhJ1hMMCxSXFs4zWDY99Awod8kg",
  "key21": "5sepT4mussQqB8ZqB6pksbvG1mPvTZHc1PoX7TFT1JPXewEnswG3Y283NupF6rt9bBL5bJgL3Pe8UTp9t7U4bj7x",
  "key22": "4cDjFNQ4Sa8JMmkWa6UArMGaXzbmzXAVzq7EEypKcC1qmd3dxfknCDRr1hx2VbwMbyEcuUgzj8eQaCS2oMJviS8Y",
  "key23": "3iqEQzqovZD1PGf2GSzyVaCafrcb8vaBby6i325g7AXfHSaNH8FRWNQh5LxH4YLj6ZzRfKT6KsopWzLYC7Jbofw9",
  "key24": "5Rc65BZKm3R5R6SNt2Y9Hotn8QwCPnHBHi5LKqZ4uFAWFZbAYgDUKaXTcheqAEQc3CfMzkFySnuDcLLdXcWQ2gjD",
  "key25": "5BE6cxHHRrXRSpJyR9fj7SSKv2tdoEXPNWNJxGPNL8Co3kDa8csxu1ZX2nyKMCBoLmUBfxMxSY1ZJLxsxaDxGuwS",
  "key26": "5U7UAhMwHGMGVE2JS3M6BQMzdFFpgqNPMYA9VkUnNksGYS5yZa2E7sSkpbPV8K55YJkVtVTEYwvDq4yRcR4ysUQ9",
  "key27": "4JvVSzmoVN7RWWyTfxDjbSjzXZByxbTUYp4BiJQ9i2thX5YWzftsqYhBbi16rzYWnCcesKSfYyFqNWKUPg6kCdBf",
  "key28": "2wDsDEy6gq4BEJzzPJ6q1wjbjtuEjap6VEdsC7pNerdY6Woj8gtRKCBTiu53sM6WpzJGYqkjYdr32Ccyq63G7GCr",
  "key29": "37v6KAJg7VUFqfX8H676DkdvEHJFLeg2vR8eAEXQzCRjBAqANr76d6eRm8wNH1EsTZ8PHvHHuPd1we5sSnx4GVxD",
  "key30": "2zFtMCbiaizjzdB8vYuC1hNqUrtwvSFWk93TCEdLxLc6rS5v1vAQz47ew6CUiNoeYzBihxLFkFdE7fYb9E4FYDTo",
  "key31": "UTu2ENYgDUoWk54dL8QrHrqiMNPMGXUWcAMLwgNr9hc7vf7StLScLD499TpQXtMUkb17omYZqyfVtpXoFPVLbG6",
  "key32": "4By64QzzoxE3AHC7o7sRNwc8maaHYSyaVFxuL78fbvDwZZptKNQ5wa7QKcFAaUgQeWYc7xu4DoSTn2M9uDU1rGZf",
  "key33": "AEWYEn4ZwfHeXuiFtWzKjuLxsB1UQbCrzBRjd9qyiu4myp8uARxDhwutfQxPT9qr1jf8Ky9wu2jwpRH93y1fTsp",
  "key34": "3J9rd3UZ3Hc5rbXpqXgios4p8VHcfSKsmREQrfWbjPK37r6763xb9Q7wtkUf1rvs8JTVyBf18cUS9VNB7TLQ1C3d",
  "key35": "4vpfcWz2t3P2XXwmqqrco39nJToet7d57mGBn9Z2fWMFhcE6VjJZ2a4RrWiAc7TsroLfzWMzhSgdfWL8g8gvCMDj",
  "key36": "tfb6fNM9efhVQebBx7HGKmaH4FzVeQ1UmhCfWKAbm7P9phksCzjY1tcu9bhJLtJn1WR7x4G9C1bF6RGB6vt7oJp",
  "key37": "4fMtjtRCXbrP6c9EEGskqND9GYGkb6D14NqAjUMRLAwwtQT7es5FqckN18r6NVcs8CRyhpJrtexLbMCDTHvvBaLk",
  "key38": "4uQMHTQpcAKcPBv4BsbiKFaLEr5XeFbfe9TbwTv2odjt9vFrgaj15gPyjC6DtTVRPMWu56PXcoB7pJ8tXJxe3yjd",
  "key39": "3ogBpaaojTCNMyKnP9M8zcwzGXyMYjiDAuPj882o1gTW7qMMQ4RJQgSyqYjaZAau22wd8WcNkraNsjtdY4TGeMft",
  "key40": "898MvKjHaN89rnwPEEtbBSqcai5NuWexktuupKBQbjroHg1SXUQTqE5UpPFs75UYAXR3ZgeFqE63MYZF8Ezr1Va"
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
