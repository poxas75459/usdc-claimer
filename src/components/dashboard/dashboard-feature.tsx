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
    "3hW7pjY69kGvVLDPM71NdtNhswidJx6WnK3SWjJ8P4vxNGy696Uku7y14f1ekj9HcFP7wa1vZrUACsefBUMFMQLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tz4c5i8HYKewYpJH4NPjyjgUpLAmxZWe16YHKcCfmfCXAtyVrJHk1JQV2yTcE7JQTqsrmhteqowEpqLQUX9ALnq",
  "key1": "3Thuq4hrsiRCQqmSvPb189ybXNBiDpa6UUG8tW8cRynYbhS4cvGyNu6SgHhQGDXYzwhpcaNAzNi1PJYw41yHo2Ss",
  "key2": "67c1fhNfX2VHiPGuLj1HcdquJVvFr9T9Lk1oGrTYBo4GpfXQe63rye5yaXKdbTLYMQiiju9RG8dukPhG6FdB4a5X",
  "key3": "3UivLNVK36mEptGTEGkrWnjfht96fXRi9HvLdnkfZWvMSTfEye34JLdp8GAVoddL2KwUjx8vtrdWAY8EHYcsmiMp",
  "key4": "42aiU9mrQMyiZpz14soyVKyvpus4kpYApM7SpYEfbMfFT4tHXmU7ZDRzZpo1zLaBG3sVPz8LjKcxSGTa6xQGm9kG",
  "key5": "33zN6G4ANh4MPeeD1qdtnVd6rzSGKPRvKS8dES92tmsFwK3naxkSf1hvMy3F5NQPysVBC4kC3LQ4YHVRumcPARW5",
  "key6": "4df7trQGSk7jGSddukqeX3iTgiNBztjYaWo7k5YyK6vEfFkFqvQuPWMhYoaDnuPknGHPLneaQf7dK6RefmxkWnzf",
  "key7": "44AXptmG9g1m93ThULtoQ9oS5gnA6qsiyeWPhsJrm9NN12ccy2c6ySTRFDT8ZtMvMVuLDiHtV7dfwU9iWy64tBaj",
  "key8": "2ajiHHDqvHqRFPFn2AreUBH5ynQqgmDhfup1arZNuXpyZ69tKKEof4jCd1xstSq4pXfPRkge1M9tsK2WYmftaex9",
  "key9": "3r4Uc6Qxkink2gUTg8zVJrsssgDW5Gw2tVzTstWUj7y2hTuEDJD1uDKJAdeE5QyecJoy7V6oNdcraCvYA1hJUy3C",
  "key10": "2NqFx1cXPha1bcTR4P11pRxSLrBDafSiRYUcutDhbhN5mqNZSLjKcP4hmv6xNwTHDhx5wDcGanEGELskS3Uzfe2s",
  "key11": "wNHhpoeqZ47ao41e5K1q3ypR6BxnDyuLtaCJzMFverkoHfV43Gd6v3mhPxLBdqbY8Wu2VFpjnvrjyxKhG2nqvLq",
  "key12": "5ezVYEBoJCKK34BgYZk1zD8VKu198PUcQoCt5SwFzMLBo3VjtTLBBtXQnvdvpkfyUXYwB1P58E6wcKrdKFxPSULq",
  "key13": "4vPHozvGLKLSR1e55eqcoPbr8d7V133qCmvRt1zUdKPr1g1pJExmGMXqXfaFp9piyBeKHhUbm1Eqe9iKfvPNj2Ah",
  "key14": "3LCAM7h3HDQYRTdTbVksBC7UgQ1tLTbSCPSH2Gq6EMF4hxVa4Gr6u2Cime4GTEa6FKXzzcMArnThWCye9VPXvqN5",
  "key15": "29TZci7b9o3ZNCHqjXhvDceTaVfe43jgwiuBNNBjdT7at4KAGj3rNmD1AS27szS32oC9mPtR7LuWBybfs3ZG6acz",
  "key16": "GcZVcSr2SAbw2wkQVZc2tikU92hvyJVcgghr1KawKQM2GM1H8WgY95Cq1jFCrrTfioKTKojtTizVqxqgEvyXgBU",
  "key17": "4JeTaXRUyZQg8uuXwTLwVPkbadrb6yGmLPywLEhH4vN1DkuCD1svB6kMjLWXm2Mp7bDQrf4WovVVREsav6P8vDTX",
  "key18": "3x5Ln52kStJm273nNeiVAYg6J3C56Ffs772qHc7D869i6QwpwnLnZygjihE4KQruiywPWGExhw2LbH9jykWSbowo",
  "key19": "123A4hHWKh6eNgrhKqaDMgtJupkrxeToygMySe2qNnwFWm5LcHf84hE75wYJDH2eqeVD8G59G4x4AFuSrXD3A6J",
  "key20": "DGWNmi8L2tzDtbhZV5JqxfuAhQsH6EZi9EknXFdw5cnuk2sFU2NijgAWMEFP3EUkjPLaKbfat4XSpi3QVYqPmzC",
  "key21": "5TbrEsMBTakZEBjTt7XpYLXBZd5ZKDoQSNwff4zYRZXCjCZgCPDEyB7tnrwrZpUw6ttvEi746DfXLvz7nGFF6rZh",
  "key22": "3hxBYgudGkC6QBY1vSAak8AnXqwyojQrWizBe7kLFEauXE2QxJKkBGmvZNo7DqnmYRQoZtxw1jsfQyLnzdCDuU6A",
  "key23": "4VnyDspkWGsoTxzRSWMfRe9LMwzpyfA8y7b8JGdXhgh7F4yP24UVqu8MUQR3MtgxKSykRQr3Xh3ffZsa1y9CyqEN",
  "key24": "2nkt2gsMBoqrrHriG1LDA6N4YruaRH4wVScwZQwQD8Jt5U2UGn3EeDQ6VjdNR6ptJFLNWd35TT1jYDdvVb9RsdWe",
  "key25": "KXxTyaT9XbKM6rSfcr7EegxP3ZfVGETwCMZpee5aNUenrjboiQJnMFG6dMs9EYuxB5YxueMfsnqLn9HbX6HA8Sk",
  "key26": "52gXDUGLARAZuSKcTte99YJdjMDUvUWJZn3KSA16Zn4Dtr9o8jcr2VktKenKUduVEZ6DCBtcnssNc53Q8fnxUhbL",
  "key27": "ZPb7PCaHjxgoQqf3fpprziPoxwsiUWiE2v4NYVzwJYmZHKaayZWM5fhHj5aHo3AWMfmYQtkwSoMCfQ6r6YsXPgU",
  "key28": "26NfM5Y7FMqdaMqesp1NnNuwLVv5dyqDsG8pdWwLod9XDuQNiCM6RnH75b23UPcxhLQjQBYWkuCVLjWvvNWQTLSQ",
  "key29": "3uHdix3V49kbYvsj6gQ76DiPVrGCNGRYHnzYWu6Tii3Bwyxnu5jzZ4etAfv75jTdAchFDXUeLRLcodAvjDXwWpgw"
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
