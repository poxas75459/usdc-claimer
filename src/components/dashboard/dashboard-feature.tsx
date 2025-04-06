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
    "2pjYeEwtt8Bi4gciP2KjGLKvMupLS1rpfR3qETQR4wy2ZSjDeAS5DaaPcnQ1qsTHTeW5aezExWroZWqvDQ72aXkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pspPhVzfUNAekqyfdrb4PSVRyi4GpgnjG2JP9UHNoTSsoP5Y4XoYDNfDPn9NRFCphRm1BZmDWSuR7fENaC78yRh",
  "key1": "yP8BvrJojD52dZD2Mow7uVmQ9VgudFQSNy3bbuppy7nsfEjdEQW3Uu4EAiu3fjwKhByKo2dwqF85QKnQcHNm4iR",
  "key2": "5RAnBKbw4Dmzu9o4EM62xZcQ3UFJiQZomf1VscewDJRkeeccVGqywJNsehnDS1oQd9zKXMFqp66QZKZ5aaDNHD7e",
  "key3": "2CPHfFNjuXKU7RrKZKwUbC1b3gyGMF3yFMqJLQc838PbJYtmc2jfNwaDwRU6t81KLpBvP6YvgQh9JqdrSHpU4rfq",
  "key4": "cG6gzNm5wY2wszESeQPF56VsvaphxMkfZHAWHFuYAWhHNneuV1qWwPHpL9A2hb4BoNmrDvnFgw71wxRdGmzDjMm",
  "key5": "3s2pfouUyRLstTU52NE48yqeWuZM7D5f9jW2o2xJ4RSQexGSjLCEbpyXjZWB6LSZkqNZBxJkokJv5AupmCzioycT",
  "key6": "3kxD3nJr9yE38kBWP96Mye1ubPDGAgyS16c21CuNp75wZcNtvgtsxeL3W279GpEJoRXoyokSJW9kCS1ji1szWcsG",
  "key7": "4yM2a7FZTFYQyxTdKWpcbBM3fibAPwrJ59ccCthtzuVZ2x26yFEGtyeAqswCJP22dRhrLVeamuvcdfDrq8V8ZEM",
  "key8": "2ZRozrpdi5yoyEiGRYjo88kym8KdxspH9BREQHr7kJ1DakNDVgSZrzq2MNYSwZdDBCJqGUkQczXuhzd37KQLPqhG",
  "key9": "2fYuDb1eCRGY2jhXZNwdyA4FRTmWsCJXu6yFfXVn94942moVDGPZh8YUCXcg61FjAMwfzMsHoRqfoETJmn6A5BHC",
  "key10": "49yTYkd4iSybvK1zWvyD2MhZUHYbHNityvCuySXNe5AnaQf8jvny9yeaFBjcH7Nx35GjTPERaGzQ3S1YsxZP1Yvu",
  "key11": "5ZrXsGihTjVYTaUzi862YmjJ1nCECnjz2XkbmdE4u5MT1cBQ7thpouELbLEnqDjjQ7Q4Xtc5z4AdpVFhQLBZQsta",
  "key12": "2UuhPd7zsTgVtndZZiJN7k4i4AUjU8JnwabHupWDncv4nPLw1Mug6vrtTozwABk3nquToBMFgNCz5PgcPXv8uzwa",
  "key13": "5Ctgaf1mF2fDpkdZYWCNyZgo3GMGKbNw2XykZ6uWjqTNas35RxgKQyb2MfVeJ4YLZzhZtoQri58SubtTDdvPeZn6",
  "key14": "m9GkmyhFvGdncM4k3yXMKJ9HpRQmadhBwvBTjMjtrdrGFBfTxibkxjQKv69Jm1LASvnreYj1V4RyZu3vCnMwRCD",
  "key15": "2h6bojzpKCT6yn61suWC7wQCJAxNwNJVCDHrJaEwn735cbvjULLQDafZVEvw5jFz146xm1WARTcu7twFz9tw8qkE",
  "key16": "4nRHTX8pinu6S2gJSAYGREVQqrNanLQ5xipLjkiXAg7Wtbfy47E9dBpvV1cEiNrypgdyWWpeQ1Zdb13btJ3fhQQB",
  "key17": "3ETSWARpj4riCAyqLpgHFefqUUWzAbJENf9oAvZLQ7LmgCexHgtQ6iCAWkC34zzb92mVJRBPfeidr8AQcyTvT7yd",
  "key18": "3xMufkoBFgJVdRDi3EQNpuZyw6HDA8ZvqEmEgjM5BhmHf8QPoZw9CQPyQ9aLiEn1XWeZk7M2djZF3hRqR7Q4FWsq",
  "key19": "5xceYCAUAbzTXLkoeRRGYavVQucCDgCyxab32QGv3dMH62HgVqVrkF7WiLCtCPBEwem7pcwsNybfFUz2okfjQa6P",
  "key20": "3yxYBbBECYixR25QeY5u2fwuRssuhvphzkYEVvWKXAfr4S4kSJLQEJBYJnRptSTAZCsHbob3Pkp9BLziGes2FQd",
  "key21": "3cBuu2y9PqWFd663uyTcCHtsZNbLb8ez5fjpAif4AgjapdQuDABgdtyfRoFu9CHmVuQKvLrKH6xd8fB8MSJrqoRv",
  "key22": "4iWZcVCEGQjCoUEttweGAabZVnLBFtPfLGTQ24EiGxToZLLcZhgaxdNhRsnX2G3fgwzcuHkuqVaFp8LpbXmCD2Pj",
  "key23": "2stsYCPDqW7uAbP9Hd34xkyUbkL1HsoemJkF8id9uM96k3DmHhCquDvzZjAz4hDHz3gD71HPs3zHdcmReJrjyVu",
  "key24": "JEALcZXfXe2yH6vZcf1xcVkEoG66yPmM9oJxzuVcESxtMgFaHLHhwb2NHN6tCzaZ8NdJ3G4i3SYMNvB5x6ttYtD",
  "key25": "3gw65AUFGSwj4FpFhqv48YPmpDhceSDKeFJQPRfMXfcjuXa8dzHfVXyTNtTnDgqqdGMhufYTNPwVk9WjEY6HKW87",
  "key26": "67cLb4Qki7gdaD3V7kf5moDgTTJHSvfEVGQSynWS8TudStfRzENeLGNzLLvvafidZEFweTvW474xRyYDiZnjCAkq",
  "key27": "2PCG6WVinhTxEQdrdzeSkfq8ZkQoqV5JDQXRsjtXPMoN3957bF9MRK9bVKUBx3Z9bktPtwCtceS7ds5Q6fjvUHoF",
  "key28": "4Qxyzm1jXbc2cCEKYEnwphrAGw6c43HfC58au8PaUFD1EAs7DGY33CjK6URzRemnptkyBVAXbrudV2B3USkDaToT",
  "key29": "643pjTduQnxEvi6BgdtPvbisoXuf5rhyBLhyPXWLAtGCNC3oVfuCxShyqsBqgyoCMDtoQGF9FgPgtXAj1vGVqomN",
  "key30": "4imSNvUbzAaLdpriVDGigwTc4edybztVCxVDpanEMqKCzkasuJ148fCRf9px4TFHWF8Ptz5eUK2B5sN2sWCvdBsB",
  "key31": "KQnw62mVypXCy3DiSBttQcqzF3MfL2Kcc3fGe6WYftfG63vLDup28NFnQt2JDquFX7XNiY1xqkBq7jBSSJSEQia",
  "key32": "U6x89pXUSe4BCmnbNFZnsYXFiFwSo7qrS4uAge49RyPfPVsVNaiDgi6j2uyb6G2LysZsrRfCE2zSuZgwz6kyLQ6"
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
