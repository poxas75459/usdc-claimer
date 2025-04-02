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
    "5aTX3SxmTeBv95ztXGSuTfzfe1ZR7Q2NyRyepFeLBa9Dwmpj5bgEW5TusoP5nLfnDc8iqoheJomNyWmy1CHei7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VzENAvgscQaVTMvdEorfdAcu9BS4UYBqGPBfsdocucdy9moegPm4JhPFM28xEAriMw2eoaEGRkAgvRGQwux8GBh",
  "key1": "66s8P1GH67W294xMK9HPbPGLw6z3F68VkguwMh867X5mpBiSph1MVa9owS67i6fryhp9eckG7n8fGnuNmBPmyHEj",
  "key2": "5KhecMZbv1bjqmKpvkPs62T9U2M8bP5cCvq6SRY9XxZxx5UX3pQUcxnp34pCkbye8HsqoCa1NC8UTsWAbyvc5oBa",
  "key3": "4cNHJKJMhjo2YpzgkQJy2JpQT3F5xrihzBBXhQ4XBFghYu97DFASW3V4KFTamAPiZFLTm5og2KvuzvjZi8nX615V",
  "key4": "4WwMnTf7yztZtg3BH63oggsZWjCyWT5eNygDARj4aCahTcmYduD4bD61CcoLDVv9AqwRAc4u65BVosRNevSat4zC",
  "key5": "5TQqtzjpJhpZjEbTawpvKDkKXrGARDkL8ZW9rr9Qn4tjE9KnjmC4EFkz6uyfKaDu8xkne6UwtUR9E7MZVcdL7Mb9",
  "key6": "kXzEg7cBsdDyw5gbLHR1rs1A3H2z12RHL4pagxAXH4ru5ojaeEfcAvj6YLkJdXeD7RnaRw2w7dkXXD3zXoByH9K",
  "key7": "uPYm4XcBd1rY32weffqUjHcYC21SZDHYwDgc6xA2KCE47KAjWemxMQEMjb6qb6TYhoZDkrcCFsRM6savWR67LXF",
  "key8": "4L9iVXXrq6hoPaPgicCFAJmoHcamipX71QJfG7a1FeqhiUUn7nt2ZmKfT6DritSdMJsqpbxYH9tEV6Chw3fahsFo",
  "key9": "LQAUuzUWaSd8QxUR61LvAuH8TFwxVdKN7Vr1wWFDWCF9f83ShHLzQ8khgqQm7BsxXELHufnpqUr5triuia4PoU3",
  "key10": "WB1T9YqDrk8bmf8rcU3DvMbCKm2MvSFQckRM8CH7d133BvkVgLLVYLbm4h6CdCskPPLe4ymLUL1xYp3EbiSiCWk",
  "key11": "54C7G11oYM77PLjPxUXgv5YpoCuVGHk7LR2mTAq7Xq7RARcFUgkfLEKwB5W5EW7SNL7niGLP2YEoqeRzhKZk5kHa",
  "key12": "2kJWiHzdWRFci45pc8c898SMDLDa5mRJY14ybtMXN5aCUp6Zm5q1A1DmoV3HgjnuyvTpxiLFb6ZE1tDvGnxfMGP9",
  "key13": "2GVpUty9LHEg6Sii9YxWwGwgHh5pBFQ72Fr9CzaaGJDX5FnPUCFqAJi1pxj59BQxVJUSsqx7pYDF2LznowYzUyrk",
  "key14": "2izZxpq9ywh3Q7p83Eio9gy46WtymSvD1vurZ4oaDeX3vphQxYVxaXbCzM5dyE8Qk36UNRQZLqryhj9SDfWLKFxR",
  "key15": "59AB5upiypDhMEgSGRSn8iNDPxa6Z71bJe6kRMpSXme7pke5cC8q5UJ7uSLtms9V2oFu4mo2MJYZfQTpMXSzJYjg",
  "key16": "2V1KurBUdmyZnVwcLaXdSrWNToQ5wHjZsHr2zJusWvXQnpGm37JebKZBVWa94M8QQX45bZ1ZyTKiaTnQaEAXNSLG",
  "key17": "512NC9uKXjYthFKhiDW3h2zuHHuooez5C2WkZykUNtSXPa2RzXkq7pyG2f1b16CrLJiLmVCwin4t6CqhJKZKD2Yi",
  "key18": "2YZTtwkmCkgaYNjzJmxBiRySNSp6UatqSagA1jZCNSAPGDzxapBibK4VrUhXa5PvMTthmnjWrSpGY1pXT8k5smM1",
  "key19": "vHFfiQ8MfJ8B1irU6YSoFxL4gbqZR4qQJ1Vo2jq83CGuGyHS6aSpMCovEYrT1ivsrn6K82wytXkK7u17CNPoKzt",
  "key20": "3Egc9bvy21KiYA1AXpLWjPkes7FriFNCESYX9ZwfiUBSJfxxrFskP1LLysej6ZHx3o8kNPnC2qv8sYAstoR44WTe",
  "key21": "3jy1GbaLjV88qDk1ZE5PC9tAxUxRmSYoucFcockn6sv2FDdzVwvnbTMRhQgQjcENp4NCKeFkMTd2oAQ58hJTvoZY",
  "key22": "2gX1QzbDpAnTFbVQDY1ZthfCJy6Kx62aX8DzPCVJi6KZrnDFdr5iwucpPDZ4uoKDaw7ibmDvCdz2s3vu1xW5GYBo",
  "key23": "5J7SPpgpsAmb27YevCqWkekei2BdpaHAwsPz9SR6nMyJX5YHs3W8jcQz9rUGtWxFAfE8HcrskRKaNatFPJwRFgLd",
  "key24": "55DV1N4MU6ZjTyvzg3FiGQB3bzPknAZFPPVNhak6W2RDi2p2EnpQPXkyeecPhRhqqtCANwGh9KqeAi92R8ohKWdL",
  "key25": "o37viV5kfVeSJ7Rv3iAZ72Hidome1Sd5RHGuovHNWYCbEZZsykQqVXBeiUnUZeiR2hM7qK6qpPMDdS1X4ixkmKA",
  "key26": "2R4DDLirNHPM9xXLPXr9xN1ceYCabEpSmgrdJyJ1dgVvR9awTxfEUwYzfeWeifyUjzcurznn9Mo4kHoRpmEzrxAS",
  "key27": "3Rs8WB7CJzdesLTqYaw5Yc6hHXn8fqgXuuFtMsJmnauA6CyxWLk9a9UzLwibzdJjM3zHdzcGJo1DoYzYsDS2mcUU",
  "key28": "kuK3GQS8NpqYQeT4Yo3doHB77ws9tZnMwqao4cN5KnYXuZwspgLuP7FiVkh8hdm3TTYRC9t4R8Z2SoybWQY87uL",
  "key29": "5MU4mmrgtXU9baSgFUXYv4r8WHac3ooUbCwn5jjvNn3Wdb6tPprPxpGbWfkdvTiRGSUFqT4NuMxUngCDfaBYEyGs",
  "key30": "26tStGwmG2ihhV7stnfLEi2CgB1v1ayxDv6t97DyrMMtN9aTm9pTEs687YXvUGJDUYK6eyvQeXjpVBQ6wPfE8gbn",
  "key31": "5fMYnnfoFEatxcgpShugCZpkSVNJAUgQb1py9RY2VqRupTLJ8dFFhZbBGDxJbtZmkcSYDZjD6ANqgNZV6JgjLT9e",
  "key32": "4fhHUmxWYQNBcKEg9rYgfUxwnDUmJgRSEz8j4T6A7CbFhiu4djkPjSKjAMPTN2M1e5BCAemrgkR6BHPtJkAt8eKv",
  "key33": "5FpmJbqYyCsr7PB93vWYTHM94h8a6cMjEHcAjTr7MQAPtS7vojhpJSjVEGhBLm3K4TEjKAzCdmxqETuWfJa2XLFN",
  "key34": "3TwuoHESjkftvyJAE8sNbN66QofXUWWwWnx4KMRYYZyxSjhCGCeQAujPrnqt66g6CmqnjiAiZ17wfYvhSHacDvp7",
  "key35": "YdApQxDLRF2EGutpfTDMUznyXPB6nsTN1gE5hea5GgTZsQPDQZEQhjK1ZpUSK6rCtnwSqengAoGPLJaqYEnqsVM",
  "key36": "vDWs3Bo5rZJ19C58SXM4uk2pBY1XtqumCCVsGXRGTRhtRY6bRAf9NiguFhJNfeT2TEt4Q74qReukwjTaxtmJryp",
  "key37": "677YzTQskk5hrir9L3AwfhCbbJfRom83Y2MPudCWuDyELY6awowpnMtjCEENfJrDsTUz1mCLPhjsCVFvRLkroy1y",
  "key38": "5jd57aEzndbpwLvPsPnqVE4SvR1uW54XwDsi7RG7ft6AGpaCaxkLj51DFd4wgC1i8P4e6pkcVi9ktHSpPiGb7wUS",
  "key39": "5fJMHxE23dXSRRveu1i4MPEbM7PWSTwLvbu4X2RsH7jtJcRdNLmyQxd4HB3nPVAJrFGrh8cSWTpbiu9HmsR8PSQX",
  "key40": "4NofjZ33FUtaTLQdVtLrcxDsiVFut9c4e5ixNDXJK4FPWuwYV6qSi5mvSwhtNjZPoNfSAfhUeLUZJuA5DUiVMnPg",
  "key41": "2KcCiPRhsRHpk1U7KiVsu1rvWzWVUMoDKbxfLmTxX5F6jg7nXBjj4JHCypRDWjF3fFzh4YP82txCuhzAreJr37ba",
  "key42": "oEZ8tjU1mu891hePP2SjV3KA4XZFijhNBp6Xf7g2oKdra8FJ6938ZLtWsCgoZRHH1tmaBZea8pWdfysWApqz2EL",
  "key43": "EWFzEKQJJonaM6UrnjAgtMm2c4JW4Ranm2QYYUi3QuTt7wG489xm3V5HFus25jub66XMATWGWrJTgNARwjosd7m",
  "key44": "5whfyiRfpWSdwPM9rJ4sEdises8R1PZuQQwmgZnuzfarWSJaZAYdLH21pvBxpE2R4T87P97jSF4BhCbArUwiEpDx",
  "key45": "3YyjmRJitRspJ9K1sjKtdHJKHzwDiRpY65EGka232rerfV7kwjD6Kw95qhvXJx8aBHw1FaVm4BPrheht2VwnojKy"
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
