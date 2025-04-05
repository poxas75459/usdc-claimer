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
    "3tfExSxQr6kX8xeMAiji9gGMNEuoz3fX4A266BkuhQxxdQ3i9iheeN8yKpbBLdLsSdF5iiRMHu5Nj5iGdw6Rgy11"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AJqRQnFMVLLP3vo7YzuRgWVBcEPevZnJZpzzJk74PSGM56insXw6D9anbQtpVmdhf5srYWjKUL9pRE7sfbkMtvM",
  "key1": "21QmdJ8tktQqeLrqPfh8xSaMZdqtiPUkhtQwemz1n8rPEYacgXCARvnEgyhuAAcpXPugicfbjiQ98p1JbZ3yuc1P",
  "key2": "4mbdsw5xtG5BBupXgCkA8HYWJ64anub1DvXLbcuSUwBKBBNpHNbMeA7a6HakrpL2ueML46cNua8nbnSb9axXGnuw",
  "key3": "4SCP7pLqW9QmADC3b9LczqqA6rMuJTWfG6L6wNNz2cwu9kDrGZkY2BEAWKYCQHxiW6gf5cUPBoTVEtgjKV5nQags",
  "key4": "29t46tyX9fJ3pgXnwfq4Ndc8aZCg4ew3a9QVhqu1RhxLCFnYZfW1p498HdKD9i2LdoorKMM4qo8NmYV5CiJrFFx2",
  "key5": "3VR2mHPfyt2ukaDeugCLyeHU5BJUw9JiivafkiLTrwMwbmVAcUX16nA6ZaQRnRpo6czC2QjSz5u3jmw1rJ4qzusv",
  "key6": "2aHs59Z8uWKDdqLgboRvFzJnoLtP3PtF28ER8JZg9ifTkgWKE5oW2ycS768ow5HW64PxumpFBw7uxY4itaj5BbDg",
  "key7": "3HVrX9KZ5QEr6sKgv2F9o7mrEo99YhYZTfcDf8dtiYebBKjMy2NVK2VCCPXbJDhL4ChfEJjUaQD1QuafRVWsp4hU",
  "key8": "4hHtysEuXMLDV3dG8vswchcUyCDvrc6z2Td9rrCEnzM7sPS3ztAjYW3qCRYC2eoGu2i7KYm3ggQUNtZuV8sDqPUw",
  "key9": "2dmjcPRse2FtWEcPkWxgVW6aGLt6ygWySosXzdwfiS6mRgeLjjE2yKpdfg9MnQpyv7u59JGcuarrzPEMDMf8EkUQ",
  "key10": "4zjr3eA8dbvzx3GGmVuHY2kNGHSKspFGGoCCRfAhZmDQTcNcPJqznWQEcFw6zjmYw7QP5ayWUVKuu8Ye8yR7nmHW",
  "key11": "GWBFF9bHgMjHjFZxGmy5bLCSupf8u8LEY2SSZk8aRH3dJeaNxYizYVv7jdFRa6rTUBvhSU7NCYwUgHRzsLB8dFS",
  "key12": "2ciJbFnhLy7UUaMJX8DE57ePBKhDGeWwKyzyFdnHCTkyFnzLCqpmbKMp3UDjgUF3NuSXjcmCjuZK1Ay2WxuJHJ5Y",
  "key13": "3qaAXZ32kE8tTdDC4f2r2CHVjtrupB1QWRwksyTr2dauPyNd1tjT6dnJbdjYdqV844zz5Th1doFJa1fBHPtp8Th3",
  "key14": "5gsniGX3Z3trio7RaTh1SgtM79G59mAk1GJoSCxXzYHshw2W9tQUvDQE5MQupM5GHgJWXwh3ERYvaw9iNzb2EYzm",
  "key15": "5wDSvdSa938DxyAK4QnVBcjLCZSqgofun8DeR8RVob2n3TqYuu6MHmfriNM8r2zw6mEbeT76AzdjhKzvaNx31PjF",
  "key16": "61eW2BozqE4ujLDz7YPDYxsz588EoWPDD3aBrid2op3AEXdDpCHjsuyb2BniDvVaNoabdNhA431Dgceg13ZMjRMY",
  "key17": "5Td2KrifNUgkovgx6bHsQyEUGnAZdxk8D8FNPFubbMxbAUkduAUkMNDkWBfF9ocBHjmUUQzN2oDvyu53hsfrKbrs",
  "key18": "5CWbBLQpaJJtPsSiaKaDcbzyyX6aUA2aeJQYQiVJCW39d9WT7Ms6CuSB1na8iyZ41YGnSxSZcTt3M1w4U7nUPK7q",
  "key19": "5AFYbMDKkFzr8b5mFm5oqDZqQvB192RNz9b5X6hea7tYNuNQZHEVFM26ASPv1jn9y2hxNbQagMoc85NfWWgL4iiV",
  "key20": "5XncoWnA8rwSuHsGnF7Za3bL1yxRPdhY4u1us8yejKr8DKzWc86Xnezfzb9Wnr2dDTgXrCnfkGa3mF5AGkmN9erf",
  "key21": "ZMjfept634LEBuUgJBK2DfjaJQ3MyNNUbkRdSKTYAvZxJpDr5fXiyXjceAjX3WezR3gHuzdVAzQwf53ZsUENkhv",
  "key22": "4ePdh4vEKkqDNv7u45XhqMYWCZgA1XX3APnxmXciipvsCpgw15Yn8qzhLtuEsWGsFpvaBjt516A6g1CHtzAXhJGD",
  "key23": "2fX6hdkcGs5NTnM2Z6vCoK5cFT3Z836eiuPkr6THCvtBBonzn4d6BK3JwY5AoyodJpVBpo89M8g12cGyqRB4LcmH",
  "key24": "5hPfEFGYWjZ5wusa1QGTXjWq6qT6WqM7tKEqpNp5YJE3KhPAHCiQ9K4aYth1kY8mSbLiFJSQjv8wEmPmoEsKWu8W",
  "key25": "4HQz55taHosA5zJNKp448a2vSp8ntmsHbcVauLyehysd2AJTTnxHkL12J9zXHfj25k58quv4cPVkV68q9h8eHxph",
  "key26": "4fTHGRJsXPPoxUwnGqeJY2fiCtP5QW9Ujx3dYsuL8TgGXQD6oYJy5gCP7RDqKkQbj94LNkm2GUv9eScwcZe4Er4R",
  "key27": "2Au4iCq9YoTjn1niC7uaC2LcRfLTz9GSZSPuCLBGyByFUosDkY1STakA1DfG7CqMphYuSGN6tB62iki2yMNxvWLe",
  "key28": "58apCfX1gdfTEL2bi2FTPi9ivqod66AW3E2XJwnkwXzGbt8oTSnbiT7kzYMpcRz6HrQnZbFeheCY9evTpUAdYjy4"
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
