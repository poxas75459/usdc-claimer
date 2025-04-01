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
    "LYV1o4E1a26PeYQQ8F6Gp3rcTuREeiSGovaiRQWypmibr8wMFD5yh2LLh1BYK9P1k41mrgXFJWA5Mxmr2yQGMcN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S3chYDYv1mTXsNt1PijnVEwb1r3Ujy953tMtPVd3zYarg7VU2g8yeHo6vAi7NJbwGh3Do7jJmCFVL2X4FwZvtP9",
  "key1": "3oVhxY7gmwk5SqkZJ66so3GpcKk5TNG8ZuPAYM97npHqRNhsw2k4tE736n28EAS3c19YhdxDhiVxPih3YJvHSPSX",
  "key2": "4y5a386LuZMae9HTN42rB59dwxYiFC1yRGKyaovsTGpkRtTi2pWSKbmnznBw4v5JmvLYfgBkB3PKoQSwBzGMer9W",
  "key3": "xZAwahhELzttbEKrmgLKS6FZvZg9LUufu3kA1Hfm1cguGaKoyw6wyUoNWEwS6pwPUqj35HRp4uPniLJbWpJyfER",
  "key4": "2vq24Lq4B1BKDuWwhrk5YnzTPVHsV1EGSi7WGC27npJyCrCMzy1NmFVfpnKmrMg7QQAPvoSKxuoCBfrs77Wq3Vkg",
  "key5": "5x2f2ZT5N6X56M834avGaR678MbYQ8XM1Yo7VkdMevRCzFqjY2sNC8K3uvMhBcvGDSqgTPEYhgHZc9YERoX81GMR",
  "key6": "NkXFWaRnd3GdMAF3Vxpu6t22V3AmTe7LxtEWnJb6PMCMfVK42s8JGkGH6kSNcdgHzx3nd8BxsHc799Ygm5NZGrd",
  "key7": "AdmosXiDjPM89iCpuAcB2KADUN8QgaB9ELAsp6KA4CSQWe3fEXCLX12nJ7dqxUAz6NfRp1Ycd3dynuGodNbibWj",
  "key8": "5rDh8SX4BFRPwUCpoAi3Uo9piSZaNPTHLMZAnMLQT9cE2AGyE8BK5BBZMdNzR9PMfvvvJC1v98AgfhFzyBzM2afr",
  "key9": "2RcTK1z9rurd4c27RLrwDsozRuxqwRWAYRj1YMpaN4Znbdf3mZpb51AjBrUTmXcdhV7ggdW5t3xixKc2ozcXbLfz",
  "key10": "2VnPEpzZZfd8hh7LMxhddGAwd26AAaDzXHvgYiH5KcbHPhcxLfo8ajFSuTbh4Ng53JQaWA8biiZkJZVAd8gPQJd",
  "key11": "2djoCgShnr17BxWNt7MBF9kM81dxhuuGJ28hhUW9zWq4Aj2LzTwnDRynT4d22D2yvcVdUKkBCvk6rcasser4xrRT",
  "key12": "aCr7zNmMjWG2boVmFFsxRoohtQeyvzJiR8GedmL8SVPZk3oTVdv19xVkg5VfHDXWsevrtR4CYXxsg77YfYLWuak",
  "key13": "2oseoQdcddw5riY3RAxRLqLxgLqGS7WdT5ezpzg7kdfvntvGd8eBtPZrPt4oaareNyQNgGr3yePT1en58EqN7JYH",
  "key14": "2PGnPjYTdhhSawoTJ6SC7w5DgwoSZ68WTV5MKkUYgGa5vCJdvKoAbDuZLYQK4MtB6HWL1PBx2DxwQfMXHCxRt5Tp",
  "key15": "2uxGG3uJP7Xzubikz6uuTnRchGeBhQFkNxdo6p3oBjMtVrRb6zScF2NEnrhkYueuqTu7dbd43UnUWjqHQnHxxxpe",
  "key16": "43C6Hggi2rFEzTgyojAobhG924yowfdMtKM1sXCVwm8KBfeEMsP4u12cpkE3xv4qrkg6xvfsgjCSjQ7AuPcTTyKF",
  "key17": "4ixeJqeqi1cfX5H9pUFYoVSdCcP4cQchzdWxAHHT48NwJ2w8xDZ3P8VMAoaBWZPVfQajeU8SKaiLRjPn2UyN1ZiM",
  "key18": "3e78AprMHSVnM4CLaQ8p3F7SevqVua93s53fwFbgMnwY9snsLPgJt49vC8PVcRg5T3RNDJmysyiMqVEFD5V5DgXo",
  "key19": "PXyszDDNtw3RF7Hnsharso7aRNBmvboy5hL8wZKciBQPK7aGr7FtJPEq9C4wugP38N2Nvkoa2AkWR5Ske2cen1G",
  "key20": "4NJBRGDrAkSVWPxb6rJ4VM41uZLeVS3iwHtjnNKTRsDjAMsoAsyJKC4XevqP3akLrziSFfEKAwhEfzMQcgmsXTLN",
  "key21": "4eLgvyGps7FwjBHLRTwHmyXYGsXAponCC1csuGGvg8GN7CXBKkLVmidUGZxfj5K4jaD1tfWiTguBNB2yqFLdnvMh",
  "key22": "5U4Z2XNPC8vZznjcETYGVCgJTgceFLEUgSfjYMtMAaxwk7uPNc3ZGkfrpdzn8ZbxFPjQrCSkueipmFTrTsMKLjfv",
  "key23": "26MYT5f31MsWNG1Rd1GxJgkbgTPUYoCbjbbqxmznYD4tmR3L4XPEQPvNfJo3qSvNE83hFWd4ZMkXMy4QQLtLR2RS",
  "key24": "3m11NxwgaPkHycw8W89nxUg9mBFnZY1Q6riewxKA98ADtEHMzxTTJsQpZVtTzxLXYiRtnXAnmYK3KqQZHCAkQYK1",
  "key25": "2qcTDqEeLCrr73wzWc2QK8MF3Xyk3HCxdmUF8THpacZnBHFUAAWnD46WrtaA41qZhQuDUkgNG8vd1hFSfrhENQeX",
  "key26": "5BEWs1WEntiBDyg1TKYPWGaAgYWrjppcUjjRTi7PXi4ncNUMHkYnJE7hd15Unu16Ybgc5XpEhnnPAKF3tRe5NbSg",
  "key27": "4DN3NeQAJi6EW4qLYHbZ3d1jQxEyYv5YESx8oN13JuwoB2oEfH23r1nmErYQbwJL1fene21Z71RnYf5cuokXfYqo",
  "key28": "s3P1J3gYvzLV32gR39qknNNVy39yYDj34A6DzyqB6Ddrc9VUvBeS7Xz3s8c826pteSdvtXE7b6Dm2u3XrsFA2Mg",
  "key29": "2hzTmkAivSAwsAZ9do94WwDigLnWvtKuEtjV5sdb7udvJZ5NuPnp43JzcNpuhN3sKYGec4zR2bcHYe1oDrrcijfn",
  "key30": "vUMKJ83eD9ZBjkYgGe3CcD4Xz67htSuP8amBKQvN97TEhbUfCw9EvWnkyqutMvS4TRuGMz3BzsndEV3ADX5m7uq",
  "key31": "3RXzembDtpe5L2WSJNwXD5LRbZ7R5nMYWGu29BT2qunPpeNdHd9WnqwbgpNpYPNqnijRtqA736tYp4bopztgrcPU",
  "key32": "4WtfFZJ7HP91XGn2dbdZTgyiV5mtZbsKEZj7rm34x7aYbKAVpcCuYWY29s6xTaYMzeU3iMVosRUtYdhhdjXDM1cu",
  "key33": "75f5w4b6XvpaZN4xr6MYntam3Bo8bnHBJejcpqmP4fshUQgzGUxSEJz1qkigN5nFvcjV74nqWXHmfYSutz8u2m4"
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
