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
    "2cd7QbB5f1oSrkdtcjq7ZNntpmaC6CmMedmbM9ePvu6tiCU1MyFkhvj9BkKQBmUDF8jAvbB3hkAYs1K2JQ2qibo7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NtRqaJAzZBeTPLdATeuuYZYaCtAVEc9JppSp5iqPpEBe8CDZda4V4812hPmZSNWt8pe37cbvvmHJiViTLThvsFm",
  "key1": "2VnwV18VW6Do4GrUYyKss5EopqmDv6ANuZonQq6HjrVPbsWSazdujVwBDrYV3JpFib4SA3sAxycqrjZN8Jz9Et4f",
  "key2": "4TX3g14qt4zxoKXjqhZhT34WsiKdRjnJsXQ1XrF4rrZF9Sa1Ynp4CccQwoqJFkoYP5rubHo3vHhEu1iifsoWwPg8",
  "key3": "2uycLBf3Sk7XLdobc2iizgG4pzuC9w9G4ggWJjQV7GdtxjV4QUxqC85u4btap8eYP4bDi6rPKZfUxTEagBbV4VHR",
  "key4": "4tMPYj79aZfH5iyKB5NtC1qcFHxPZVRDr246bWkwiUE41ZwctZurSKTz2TozkJ8tuc9uEotF1NpJDeNU9ryrBwzu",
  "key5": "44w38A3gqa5oQYk1eNgiKTw47yQqHCrkCpSHNox1vqRqGRUdz7zm6qQhiVKW6zFF5CABULB7kxfHPiaQQS5mU145",
  "key6": "5KXnDqrRXZ6XtnK4k8tmyG7aAhcsKkmiR2nNZceXGkWEkCDak8qSaB2JUYvgX38zfqXcyGRMnMQeN5jxf7Y8SQYm",
  "key7": "gx7LrJTR2fg7gWZxVMgNQemrHvPDihvpR9T96snPY3SDSQpJJr2BrusKkARfhns5JVedndNepQRuM8pW4CAGrB2",
  "key8": "5hj4Z78e55Rkq74z6eWdSAEryxFW2prMBqCP2BNYByVy3E2g81yAo4pAEvfLZAJWGGEZDvzjsCLm495GSNVMz7HH",
  "key9": "222JEg9Xq1W3ejdvu7KR5TB6Hs9X42LhB3y8VXeuAh5ffBqv341wDLWAZA9Kbh73xTiq2NG8VqxkgktRmdniuy3T",
  "key10": "3ZK2p2Q9i4HEoPvCEihKU3xTjEGjEmrCSDBNEVB9326wfPicn6qEE1EuxUQJrs4tBbBnbWpTJorQgZVP3RPRBcGF",
  "key11": "3Qy6qC7AYrTzhGyJsGBbeENR48v3iSRYRjy7W2he6nBS4GdsdR4yijPUjF61GXscYfbz6UZy9YU8qjQtnTfBMbKD",
  "key12": "5PoBsbhxwmMZotLxJjiyARo4ps3YwqtW1tYQHVmgW6FbXGfEKkRRRJo5Mj4zK2fizSydaFjsD9YwT43ffSLpwWvD",
  "key13": "33dJfv3XRJ8mED76zNAVLRLuZt22o9QxZ7DoCBHGMgcc4DBLLqssQJjpGYwqxwVejp5VdXeNoHbojWYDbvj8Qko6",
  "key14": "5ip4LT4tyo5kiXYTdCQa56eMUo5gxTDRuy3uwNz8FR1zm2ihV3RMq1Q99UbtmfsKFf8Nz7RUZfdhFiAhEUqibqge",
  "key15": "3x8aoTcPxCWzZkUZENKcNPhHJSZw7JbuDJLwyWPL6kQbR3SrcJNqDSoKfgtkJubRVcVtG4AVK1GknbDUQQNWd5Ps",
  "key16": "o7zbEv5s5kFf2ecPsHfZZLxC5QV9EUVruMaWzzmrDECw85YU7NDZbLmRhhmDo5Jm8gPPhBVcHVk4HdAeZG4tEeY",
  "key17": "3fXVxXzqvFm7hxEodFn1Ly6XuEGRfPMLYbiHC98R4fY1BoriMc1JxM83rbsadmUPfjfnmkecFXbZMVnDVmkNxdhk",
  "key18": "3CWaSxRi2TbQc46vtyzPcTD5YSWN53wPbVH9aZ6gEuetKVnmLjJKaggeYR8Swau85A7Mv3xHs2RvVRJhNjM5QLNq",
  "key19": "3K5gp19vrtDr7kndotadD5XNwmqFEmFv54GPBRNBEbvX3pGGkLGX3dujNN35yWFMQz7aHjDQS2U839bSLjrw3ayv",
  "key20": "u3xK75XBHuVNiBPdntUNkzNnaX5mEU1LG49CNJaWHEAdTiXXZ6eTJX4Brp87hYQRzPiJB5fNQuFTTDvP9UbpxZg",
  "key21": "4bmxkdTSCxe2NWuPxhqU8bY68ksbwHHmM9NQXY6fjQkBj9boH8oLX7ZVMS8an2pSD4MKPZ6ry9v62YnXpPLdiMz1",
  "key22": "6UbJZ1bnP7YfYPVm8Wk6s5enNmWJ7tdvCwkFa3ZHWumn8tm1sxDUJgpaF6Deb495srtQq1QYRBTVVw5oKhaeWHR",
  "key23": "4JGrKy1Z1LukKmaFjZM6t64Ki8xR2fVHhnQGyCukWugBUEZQtxKrVYgP9m2JJpEeA1Ychh5dRcNMfxBYGjwrVQnr",
  "key24": "5tdbVmezy98wPanUVWcWmmfnHAZ4wXuMRUfyNbcZEi5soXNSZijjcQoqQW9ZLKTCYeLeY3Fs325Si3ByedBziAkh",
  "key25": "4KYKEqqsafMS63rb4bKjyMs7Q9scvquaPkve2cibq4n5xFkR2WqB5D8BhA8CG7cb8zG2ENeMAhcncoJeoiBErtpe",
  "key26": "43NpnXRTYZRq4Hqx12J1tW9V7MrBRqGRe23vsh93nUPQGdpVJi8BatqeTnZsRjPGj3kjUJMV2Go97ULoBnCmetfG",
  "key27": "62jjNBPhiWjPS3KqRTiHpJD5hxjJ8aJceiuhCEcD1iMkvmnfoo4Tvp7bo1k54TrJivuGEPPqztiGhYgMxnhCfYL7",
  "key28": "4DNDe6bmUY1LnRFaURpcvBcRK7ECYojYcv9fyUdjfxaYH7oz6cRxcJMyyJTymnbSy2BJXSPgTBXG7cJBrTqNFKLf",
  "key29": "2W9Air9UhhmAP6H6P2qwnEMnUX9r8t2UsRtic1knacy9UQf5xHty2d4T2EamCuQacNqv79m3jbz1iR3godzvX6dH",
  "key30": "4fSJt1xUKmznBDH3CBbYsjMtfXgDuJyuPzS6Ha8pL52oQXtbdYeV1FjZRQq2WVf2GariyJCmLSiMAxCyaZehsDwS",
  "key31": "3RKFfJK5fkWUSmLgbzimz98Fhd1mHqBB5mU5DruNJREyPH7AtdSajyGHnLuu2K4NMuJKHqBsnxbH62fRmv2odAyN",
  "key32": "M84pi8XhYGeKXFepT5bSXYZzYCMX2Dr44PL19BZo4xPotBWbv1ftUCHNDUcE6TiPNTHcQT7X7H4kxSUVytLUCce",
  "key33": "dqWAPkj4pNxoGs4Pgz8FjU2PpSxV2cjMig5ckNJat7Mw8H43RrwowVeKAxFKp6WGmUbh7qkucsdX1Rax5zNCs6n",
  "key34": "44tZKpXwjkwizU3NvLtH2KbKocYPEcrCAu3RCsWeUY9oN3JWecFDJbULaiVQckZq6raDbbWo12nB7dJSMc8rXrFo",
  "key35": "44oCivQ6riDv7c2fdkjPppoEAsWYrZiakPV6dnyHREx5NXhvtcsuMNxwRLNepjBwMuF8brvsfnD4M4GZaqy2WKaU"
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
