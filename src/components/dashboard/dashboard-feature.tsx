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
    "2ZzPqfzxk3iBRGCEZg8WPc32GMgiiAK2Dj5hmVr7GTMpDbu8hN5Si81V5KmiW3P8MPdBXMT3ZpC9tFCXMmGN3KEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KdkVcaAvLmuStaK3qr68XBEFMojJgu2MnpJoncVwE2dnqbc4xRKvzffygLHeHZG9ERSapYdsBqvoLJiLPpRGUJs",
  "key1": "asbxjK5GGVy5nSPkcZ8AfmUrbqrim1AiLE3DvQng7R7ZyLuFfZ4qgdNdnWtjku6Nv7jvQ6yZ53kcPnTqMXE7EVh",
  "key2": "2Pck3z6soPc8tnurRGqofKe1rVc2rhLGQtu65VqNJu8HJy6JgRtwtttm3MchUK3Apf22GSkempeezfhTEpvahsQX",
  "key3": "5ShNnZVmEqMQ7ecAANFaf4WMBHcDRvwuh3TcBo9puR2JeJnYcneH6vQHHKgSgMHvsPXKo7tKKhTY7v6BsFpbPBZW",
  "key4": "zV2HtFB2yWvwfqQhTC5J2SMwMTByjF8YmdAHrX1Ny8ZvGFTWdUHBy2CNWRVrJAb8xdocFp8BS3XPqUKaS2Ffxny",
  "key5": "2GcEvRDQxtbWjFcPGFSHZVYfpj7jMUJqZJabEjXKnE2WSRNhsFU3nbMdzdE6u4G7xYR7SwWs8UD8cA1h9wQEwU4M",
  "key6": "3jnPfZJtZ4zMPsKdf1s8xb9JjMhsGuS8KcyRc8SveFRnGVxe2qUmL3ivNgrLzZ4jWxpwdbJkKqwaEh8x7xrCEJz9",
  "key7": "4Fp5fBfGBDskq52NPdZF69CN12RYP1WPnWkvs9586XhnZF5hMZy7rCFaB8txUGZNGoY3tU6qpGjGf2gzEuMq2pA7",
  "key8": "hnqzfqKbRT6HayBWMwEajnLrsenuEXR6CKEQQQm7uZGwCSXCypLQos7H1zZJWHtWdca8KGZmxazTPccwnGvQueg",
  "key9": "JeccZwHReeanVHgPk2JaF6ZF7WrgVeUyc5gBwaGSCj2Wt5oeZTMCsTqeZUVpFTyd4A5xbKrbYBhVdjsXpEcNxGt",
  "key10": "2NWTpbY4RLu7zCNUDggwuxmrTvENojFSbeN3CWZMs9LQw1KHqxSNnQAxHzFfZGeJFDgqjS6pmMQCdaGT1ipdZLfM",
  "key11": "4nZTNtW34EoQyi2bDZF7uDs4NfsFrN7Uz3mRajaJzntbMy1wH9Cj4QnT7LGsqFBztKN9TxfKYKFM5vhGn9aeo6M9",
  "key12": "2snzQS7TyNgjsmtSCs4R9fav92uPRMwVV6YQ6s4HFrbgvkRQABWgWRN28tuGNpmb8wje5gMHt1ZAa5X7sDz1UEKY",
  "key13": "zer2nST3VfsSxDL5CpeSLxMu1JBPLitpzgVvLtcYWhrBz9N71ZwwmLSbrvm6usxx7X5WdVwkTbc9QpMbVdg4XhU",
  "key14": "LHv3CRKo9oMaAvASZ8rSuYnxU26aeotpg17gBzJfjKzjuSKdMMPTwPDaceCJGFuVA6Mvvn3Yc6MfwgL3KcnjLhL",
  "key15": "VkMnSYDAdzxM2UngmGNRNWSggJRafNFT759XD4DbDXwcDg8Te7QVbeh7CgK16jL2RrSuFEDtkg3iUvn9KR6ohpo",
  "key16": "do8qarkgCyfaGy3YGTthNMFPG7ZF5RDoqsNZwAJE2n8NeJJx1pxkPobduLwShNHTstd9ojmwB2HTZsDTfxmdsX9",
  "key17": "3ouQUhtpihtqtxZK8RcMnk1eeQoHMkdZWEJ8aTzeMNBaz659bGUjFrrmPyrgW8ECQFy7iKXKBnJapEPKaB3RN4Wf",
  "key18": "4QnxB7A4BegchK2ESWoxxN9t2PwcyXVz1ZwwjgB1vNEK8MqRNCi5xd99vgbTYUVB182xjJTujsHZdkWxxXEn9B5t",
  "key19": "2doy2F2XzUCjCqH5wjEkQF4NujBJjUcWv5tNH41vN3AdrSnkyy7iZq4zAFhht17VsjXzdosbXDvpck9zurwhqKhM",
  "key20": "4GQwErTP8KXQd3hU7jsoY13Fu9aSXbsGmXuEfGqwWRE2nscFezVTXp64Eu4HWou7QDGRTpWbXTNiHJLtG88yakkV",
  "key21": "3qLssx7YzqaAsc83KTq527K7Ao3sppnJuhunWwAMsSZv7MnfnjTZSvrpVAayMRcZZJPfqiY35hv3JMsU3Re9WncX",
  "key22": "Tgthre9SFkN2G2g2BkcpKBXoj8tKSBEXW7WnBQ8SNnPQvKsDknXKQC1CKsaLGJyYS9Cxghy7QNQ399e3YbiVu9F",
  "key23": "5B5ukgeGVYrWp1RxhKozvj16S3KrVBARGvqrqMcVG4eNr9tNz8YJqhWZDmDG1gRLs1a8F6W5z8Vjx792KrwmbUKB",
  "key24": "64ZYH6LY9RHD4NTEEqqMzN4XBavkND9HDfdf6sDFpAa3oSHUxMfdBPkjsvNScv2omW1TbK94YMDV2Ui72JhcE4CN",
  "key25": "2ptHmcsKDmtQ8om5Cp9jmhfUeFmJvfhuTG4n7Rihbwj1gAwVzrqyah8zGdusP6dn2rfXRdPmSXEYo5BczD3ga3Fw",
  "key26": "48i5gZhtA4wuXS1ZHHQZoYhXPHGRcEKZdVxPvFL2b3tAMeCxgZ6mfeJVxNSiGq3BkyvBo6BmSHWVgQVAfFwb2Skb",
  "key27": "2PCcK8pei5sJV2V65Ji12CEdzqAbuGgwAd4cttQ1VMjRzhR4s933hwXRHXydDZGxwGgLapCv7ta8JZbDSvdDqPtP",
  "key28": "2KfZst9UpRL62ELpBtXtnuGRcNivrm4DPR3UaBc4zGr9RnuNmhVA1poDzhqqTJPwrRuPUZLnj5zZ7hC6yXxL36Zk",
  "key29": "2v4E3MLejP331ByB7dE3YKvR3TUsN3pBX5sCFD8PErvB4xWerKg75TQNURrf1sdcqzJkwotKToBBuRRTdaWGJsB9",
  "key30": "2jSjTH4Xq9cVHQrWCfuZbjkxwdNyGKmbtaZ5wRa9kprf7yd1pAv6i9YrWuabV9AUJtUbhQAtUpHsZnp35VdTjsgf"
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
