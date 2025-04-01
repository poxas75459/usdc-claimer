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
    "2sJc5QvdgVHNFWmadtEnGRazGgVpmtxG1bELMSskeMGZzWbz1rktDb191mJaeN4UgTwN6qmiQTPAbwaHvUQDDDFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57CYTdQYrFLkBH7LLaXjzr8fREMHjKdr63ooQXrzWZeequp7y6MUizjzNfe5AepEVLuUY48HVXhnk2mNZ9tdcuKx",
  "key1": "41AqnUXFq8cRd2oUFE3eTxMUAg4phkn5WBzj1u9dkaFKYSFMG4rrzGcg11pLUvBPAHr7KvBAsMJxkbxdhHdYCnhb",
  "key2": "5cWtP7zwiPAn2om3unvgoeiM3XyuP4onvPLYCfQA1DQN1wbSmXLrwnzmb2xWRK4TMRk4c8DoLiAE6z3F2oHWNgV",
  "key3": "5wjQndpM3WKY6bkYSrfjcTSMWxYRffy3iNRXgK23VQCJPaHYxzZr5WPSfbm8Ua4Ns2BFGsBjtakhUgPu7oumbPuW",
  "key4": "5ojzuE7gysSvnqWsxVwjV1yWhX3UFkjKhKCdNU9DHNuZu79F65qWszGb5PWYNLPhdd5nh5E8gwGRCNfxaZWNbAV6",
  "key5": "ywwfA9xQhtk48Hr4ANCF8uxRL5YCTABv37iKd2LVNju5VCwFAcPeeL8cckPA6zN2DJSW2dgRyy7uZa1yh9hfjto",
  "key6": "659SfefbStQD8CyiDB13Ugsp3p35edKXDAgVrWAnVuv8JhEW2w43pwSbbP7zbCt22DNk2VyiVsxnaxBmiM1P7QiV",
  "key7": "3rJSG3wbrAYnjUYTevveJ8BJqtY7bgR778UdqcwafE9cDpXYdR7JzNxFxwa9Me8vJU7iM8GX9NQZAQ8aN6UZcJo7",
  "key8": "41HF4MH8MDABedX2obSrcegZUTtuprhV2rCbv3KVe41oSFKtPb39upvzMKxbHNnVG9K4oNHyBSfCYQmKas2wZVrk",
  "key9": "3WtWt5vsjtseBLntyJC1uPmsiUtzUSXSs8NezvqMuBhQZ1mhJviX9RzBKPcMzSDFucZSbKcbBoUhKRw3SbBRXL22",
  "key10": "5ZpxVhoFuXXUoHmvhduBBYmBedPC5rGXeiPRxhLReJj7cakw6sTk9zDCk94EKjAeUzUfSHYPfkGfipuyHvMzjw3h",
  "key11": "4Cc95wyDyzxBsneXBZ9Q68PeYhQ9tHFULULr11ZFX9Shv2quvexF9wy2zLGzAaVYQ2NeiTwEmZC8KEkuAs1W7VmC",
  "key12": "5UJaz4P6o4J433gBKiLzZMHqGBeqkRwfWNfSEyc9NtKxJxaoYWeeGK5iKSb2uKsbTmVPoU8PRzDCBpJyMJzYTmb6",
  "key13": "43hg6kqk8iKiKPUobTwNCUT5BNPk2PZ7QvwoPuKqbZSVTCwAbDBavjvZ6GAikKBKkP858zEC6xSdL5ez3fPguKsB",
  "key14": "F1PHCwSCqUrjxxxVhxFriqLhjJqzRKnnJBxfAARAxrRkFx4CnZwMqoph4JDgKmGjV214uMnY2tW3mBiUb7PxpMJ",
  "key15": "5MxKtjbajjytNr2ufqRuCJt5Hy52pzLyJrnx2QUPbXpymuQS1fZyvUG6JR4NMxVtpuQ63faDgCSovehujPKX5J82",
  "key16": "38dsiG3kG5M3HPCGzkQgTsRdCFUnCzoXuLyrbQXFQkTSfJaSyutPPnkjRkYDDRD6zoiGcwonQBUQfApx2Gr32Lqf",
  "key17": "4rh8FGKE3jvYVgqpWaJXChV8QuZisoK4Te1R1nPsXuWLmx1iaSZutJFuHVnHu4b7yums3zkSgmVuCjzm4nXUmnfC",
  "key18": "xNgGVkLkj4axnoE34fcguGf2435ULqSseHLKV6jRipx9iHDkJGUvVgyA7TKyk8vJL1uaobpEpJAmzT5QXXWxDNG",
  "key19": "2VqeT4NR4EugSeWZkTVRmNut59sKRWgnjc8qjTgvMYDYNMpPgV186YzHTgmpcUfdrwPWm9T7XSHsVRqMkKnL7sUo",
  "key20": "5dd9C4urHStf9f1TpiXRzAeQXShwbrEPbkBSYrkSHPp8gsi36ySX7gRxsyB9SFq9gjMCzwTJMJhzRqArPTSL5UxH",
  "key21": "qUXqvwBh32yJBz2fdbvqFPeveyB3fp5zypaxFfqtp8vbxaW1rNdCJ23C2bYjUfwTF8wzo49qMqYG7BrnENWXCYX",
  "key22": "7t1s4tCMYKLEvuTB9PztDVqtEi4zbttdYYH1xHRJtzef3QbTrEsXavdzSmbxi9JmNZzDDpLNtNZNzx5ufajCxVm",
  "key23": "2h5A8DJNWBL9742R3PiBEMygT1JKgw7KivviLSvXcJpqgE3CPiypKfqjr7BYKFJbLZnn4nmsF7FqDVHV6X1SCZvv",
  "key24": "5oQrBZyryR7ovKcAnDXtjaoPyMfusHQMwoHUaLKboRFP1nsfzXp6UDvPvje8dwzap3NjunAELEocvdh76uQty1AL",
  "key25": "4GiRHht49mAJMXzGaJWkmyzxZbyL8PHw6G7qZQU5QwcA5fqoUyGyQ9f331gT1s3ntyrBDYXmPZWBvsEmtNnEpEpT",
  "key26": "5ptQMu1xSa1yk7Ky5jBmTfPgX5MCyoKcztwJ6MUGaX5hUrMowHCUmKmyxiZw95MNBwGuRsbn6ph2czhCSYTnruZU",
  "key27": "5FDYLCEZmMkqGyw25avsVkn4z5c2fYcj2AGy4zZje8LDm4kuUuRWaBJ7s2JTVcrSBv1LgqzpkgMGhEysc2xueBdo",
  "key28": "3nniqmhjRu1FV2yXFPiuhjR2oP6zkZdAWtVd4T3FYp1rj9Txtww68zNEKf1gSh6fX9yCZexjMNDFir4quuhJvTwq",
  "key29": "3ZbACyn7qT2YWxzc4pdgSZsCAn3dJipZMxSt1yCi4jJMAzhfmtx6aZbYDZ5QcPw9sR3cC1SyNYxK4a71fnNKqVui",
  "key30": "2idyeXJBYfX5cd4wv8ThGpP6HuuS6DhX7eL63Em5o4P48WidaSE71z31DrA2jDbz1pFZSH82qBqfxdeDyacK4fKf",
  "key31": "gg4bS8EcFAznWvkw5R2D5r7Aarrzj8WEsZUD1THx43Y4fMRWmA3Zt3N6mYAeRuuD36yLjYDbBBdTQ6XauMBjFwG"
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
