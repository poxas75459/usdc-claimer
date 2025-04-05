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
    "2K2fUZUHHnRhGuCtx54Hb93ZFKEzDXaPJQoWKKphPWSbQk4KXDTgdhXQJhPVKSpMKTdSLaYTeQp2pLRzuScwMRaN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XzKscLc3sqhNwmo5PYyNVaBhSJAfEieoYiysySpyDJTyByoknJKHb4YY5Euxv4eSEnQEjuc64bSoCwt7y4dfc3u",
  "key1": "4K3sxEkpw8V1cXi5tsKm4B5kHPY5kQse5LdMXv9KkKHAw3CzKw3FGiRPsZrxvb7TFrEdfRM7RgmWgCSL321bgPsn",
  "key2": "4jpoUTmeqpiCDmPTfts7CQSn8c6LYw3ng2Q6x2r5XTXcxdE1JBpdfykLvYgg4ZgaJGp17r3yguNArZRQYPgKuif3",
  "key3": "5XhdxrsDUCPioLxZ4dfuXXTRM4efg3ZrVyAEKtcsdfW9TPTSiULseFhNrcabfUfQ7cR4ftNgQzTp3AbNbc1J68Vp",
  "key4": "5jdW5hgkuJBTUDbM2SZwq4chk2HTMD8w9hhxGxSZoumBp2SZZGPvhUL4DZQcE9oBYCMWrUR1BV1PmNmTmtudgvLU",
  "key5": "285RueCk5gp1XJmm8Q4c89PrFRVZA4pFkXJYNKVa4YbcZFjoF2jMrQM35djPxiTnkTkUkTQ4hud2TuvtHinUt8fZ",
  "key6": "2JCb4qDDT9XKBqdGaTdBknXwy8DxttyiBN42UYLaN5vjeTiK1cvJBxs4MLehYsoAsLjgZoj4ZDnZjxTdtnovqAXs",
  "key7": "4YCQfQc6TjCGUpDSLRkwebRYAiwd3WaR591uhEBPPHGfvZUUjnG6GuR33nY8dHncW8sgwW4wrBZHHbnS5RUfu3yt",
  "key8": "4UeEUxffggeXj4nCNr6YV6eF6MLh2ae2g8Wh9fsmvm9PgcN7kWnBw6WrLwTEt5doJZqGvNNSBnG49tfi6kzosBFs",
  "key9": "3RAhozR9d8sGDAHjAyRzuwURUp7SjuSEBnaJCcB97zTHsQ3JMKv4LpeZF1v1jt6gcdijdQ1FyLoucBMus68nU8pB",
  "key10": "KADBLhtEV7aqGr7q4FTkzrvxiQT1CGPqQirL8aZ3t7b8UihMhJ1vJqZZELYrQsD4tEQeUMZ7dxHHPTKzu1C1SRQ",
  "key11": "4BqoCWYz2iBdLhN5mdVAoLP4a64AhLuEKVmcWZ6mASmxY6786jhwfiCpAaijJEFCWPwG7XPvhECR6RkQLcVMsFs9",
  "key12": "2qf1FWEaV4uAkfASXpG3V1J4mAUaimheiUGXQQexxb9VqHP1vTPPtw2ZhLwtAQ1ELTJNUdXz7sv8LW6Mhz2yDraK",
  "key13": "3hELx8N54iWy5YsKisEhUQ2FUcNh3u7vMghotmgZXNPwxWsrLt1teWdNMfkyCaRKKg3L78qcc2MwTHNLV7GkT2qd",
  "key14": "61aasKKVL5BEnwZ36eQpydF7r45XapUsfzc8B4XybPuTLCniBVfQdDvsDSNzWPia6FaLNiWwMsCz4EK5RnM3mGeN",
  "key15": "4zs9ki5TRmV3FYThNRKYWEP1G4zf8sauZ24B3H32tTm1C9qFrNULngWCZHf3Jd6q5NB3Cc7vHZe3QswQZFp3CrB7",
  "key16": "5bLThDoDa6fSZtkUfNrMHM8Jcy7AciFJWGL4YuD78NKqv4YwNjrSvVzRAkh8Whb4GKcr37JkHDy1vRQbEBt15Zx5",
  "key17": "5sZrQ2jWYikW3jUnYnKsjCAxEcoakrvMxgeV8fDJRWMWn7yEWZg4uNQJDmZmWPFM4v2iW1yLSk6eFUfKoCgLamrx",
  "key18": "5GUHciJBuYnYGKWFfW6UCngrzjrECP18LnkKU14Wj3H8UkVnJ43iSm7q3TjqVbFQvScMoHYVjcCzP3VcdW7TaYek",
  "key19": "38NXAhLVvjJEG7Ns2iqrtwjUXTyuqnKHSsPsoS9fagy5AWcrQ4pzHzCZpmZdFyS2h8Se96EoMQofE1JSKD6G7rDN",
  "key20": "5SX68FaiDDf9w9jDpVz45mY1rkrMRCTxi52Md6enkG3oEwnLgxqPKsnkgxwCPfaAnnHBwYNfV1ZjAbFM7Qv624QL",
  "key21": "5NUCj7Brtyx8MaFBVjtv29d9JxbL8HJmvTS35KbUzCo5H6aTFv1biG92nC3Dnhvxyt68M7oqSAQFQidGKEZhmsZ5",
  "key22": "8szpqPZfzMC6danUWDGZoHFCwGSJ6SzrqSZdsJK3DdzWZpvX4hX1rgjYwk2qmnJKR4L985jKHo12J6kXpdUTxyp",
  "key23": "6652biu2gjPVJyKpnZoE97j38cCTFnB9o2DfVBGyWc9RdospRVMnwaDAbBvNgvbmfh7w2BRoe5xShExBvAqkpbes",
  "key24": "387DJnfQXy1wdLaC7EPiwswvvhSRm5sxM4oEKURt1eazmvTMMgDRTPYZEUcFTbKUc4WC46YGdpCWWgPApXTdVty",
  "key25": "4sSemi3EJkgNv1b8ANrfqDVBaoLo51Nv3VfuHk9WjBXkj7JJGKyHGBdtomqiXHoW4RgExbgPVLSKJFkDeZMyXybh",
  "key26": "3nBqm9Mn9cjtgDHRGvMZUyTBUaoHiKCAR7tvRksMXnQYTgZQeqFPtAM5i7aZ3fiWtsJ2jPioyvFgVESJWNqmGYUe",
  "key27": "cjzbzqPSBdTK3GBpPWaZp42W2hY7nmC17gkBEcQD8dikDLL7owvqyTGT1VDwTs8WCxBL4hRQzFcZXWdZBuvhPTF",
  "key28": "5sUrUZuHVoS7fPU9uMr39B7KcMpw6xwS8pKdc2zWRzoUs1pPRQ5C6TdRbeQd7vVcY6w9c5i5eMyiTNkn7jApXD5L",
  "key29": "4ujAFTM5Y1EXuwnG6HLJJoqT5aoCEYySs5skqcwA3grPW7nsDP75NxucdkGeEtdZtehAUxDsb6cn6Qja5oZHNVmm",
  "key30": "619j74zKKS6N4VyWcnxBL5htqKkqi4vZtTorHL8SUAZa6bH2wyzoDJhG1eZnivd2runsm5Kw32w7biNAMWEreHhZ"
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
