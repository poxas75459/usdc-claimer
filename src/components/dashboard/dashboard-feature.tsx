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
    "55Vta1uWafZu3Jx42pfzgUZjg63aYaRWxMWS4dacuBn6vyeesTziyso9ZVCgUboUZkf9RyJp2spv2pGRgESsYxQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qAiQnmkyd2h5d2PjdCjs2k14CsrwfHNqR6LPqghqDtkVhWA4ihbnSEUbXPTUGdDSzEVE3uNxEZpvAfCLGe1Lhtr",
  "key1": "3SSPxK64TmAYYEvbfqQP8RWTFfQiNTEA4CYQ8mgR4nutykjQHD5RMLwasCbfnJHFsfDSvjdNvCY8WyayPd3Bp9mn",
  "key2": "9kxzRfjDLRCMMybU7Ce3CTURPcqdXZxbpnGCv3Yj7Tdd8tT2mwTvT6k9GS9dNwbabvBSDXf5NwGYNRDkcUE9zRA",
  "key3": "fZWr2cbKgnW1wDoHiHpnp4eS2Yzn645dwSmxHBMbZxcLZGT9rt2NTZrAjhaDaciBgbQ16up4BT4YNnKqfx6xrRQ",
  "key4": "3RmpWJjtydcXGhmZ9MxxbmGGFrmirfBGBL52FE1ckws5oPradZBxrJ6YYhknwB91qhwF7armao2MoaTMkeGngGhc",
  "key5": "3jXM7199onEjYDZBs5KcsEBzDXEy3becRFaxbqi7CY75fh6CMJy29yPnfGV1FHFbeRCUG3x3TN7ZRRyi4HjFtwAD",
  "key6": "438XMkYxKmktbdrGqLaBUeF6dkjdH4Loc81srHzZ66uqFUXDRBr1MgbEsCor4sBauhSgt3gBvqcKLLmWiKY3HK3k",
  "key7": "2CskAopggR88KxyJ7n67tmv4uuhWxYbMozKAz81uTkfPwMzVGMgmSWevorhKeKqrQKRf3FzkkQVLmY5JJko76PjF",
  "key8": "4ZJ53Nhkw89vAikacQVUCpZkiUs1xQkRdLNRBiJRtwDY8Lpc6hS5wRBMSAD2Y88Fgh2a3MZyFpp7HuWzE1Y4CTij",
  "key9": "5e2wDpXGfzr2jbALK9KSSJDt59K7JxBvGw7ZdrpP7buwBMgkFApyGUyxAkaTKFxnmq1PZQmUojirevCkt6zi7bsg",
  "key10": "5KQMpPhYtNq86tg7jDvPP4fCjFKCA2G6qncfHKEZgvbCnUPg24DU9QXGma6R3b4NAtHqyunqEjBr9LDazfnhDAQQ",
  "key11": "25yW6iVCReamfpBX9tdjsSLT9ptyvrRPjMSLj7hE6pbs4MdxF48gdcKmSU3ExEGc9P9Lcpa3azxu21khjr9U7i64",
  "key12": "673RNvJYpddmggYfpqDEFdUMdoWefz4m4qWDdBnRWunrmZTjHj4TJLm6M9mqTh7cH2Scyhp7xCRtscyq7uA1F8x3",
  "key13": "5J2YVkkiKhWSvT9vNQxiJVXNDRJBXGzRJXTA3uL69EjEk8wfn6sHN4R49wPaZ2azNSHQjaj2bDEhLf8GRcVwvhaw",
  "key14": "4oHAtMrcpiBj4vxZv8Dgi6E8fFuS6Y2k3xWACHbB4temNEXBwXTMjQ4DLDWgUFDayQEM4f3uT3WhxAuFdj5FnoW3",
  "key15": "4x8ZGXssMojBbKXNbKCs7NpKdFfkXB8oL4yFXgbudcnTStU5sZiSrdLFGikQLgUU6ngcyuC7yn485WxnsYnPXxJC",
  "key16": "w8m2bBfLjQJpynjY6k7yZkq8LxXfT5JxqqVvpHWNYARvZfAVXWnfKEPugB44zWSb2BBxmVrHBWPbfFy2FGZS3Wd",
  "key17": "3ksrteUF39bo53Yoo6heKCPVgcoYt2HqJSJ6zrTm4jgB9W4fUUn3vC9Szu2jcgrDoo3ZUeHjwJv8idJhVJVjNcG9",
  "key18": "5BAu3NwGHSrvdLZCQwkpP4w21zvAaryMKtuZ4M8fU2sqr3zX5vc5RvrctCPxA6rR6gjoozDwdxvkTN7UuY8tzkDH",
  "key19": "GcFcNcqrUK7ScSPPep3SgE44ncRsUYMyjgtUucHziwyFBRjHU7bkX71tLhedM3didv8KiQVfyaLdkXiAtLjCzxP",
  "key20": "5k7bJu7kRREzgsuxev4Zuii6WnNsCbSiKvRvHrAHDe6jnNEpLiNxAxwDmpMq9SrUosiG3SLdqQUcWsw21bcr6Hmz",
  "key21": "425oQotKpAP39UQyznDcvAH5L3c73X3WCWMEb6Ly5VNVkunNpWnkfgyAqRCHt69BUDrerRF4My6BrP8VFQYdfaAr",
  "key22": "2eJHHY8DwwkAbGj2opdur1MbQkknuqMeDkxXshwdzXwKHWVsakDAm3iLTipwiHuwLoxy2J7CggjTedJrFqqbsmfd",
  "key23": "4gntgPcRfZw4LwMZqmmLFRisFD2iod3pVtroia1jSaiAGjw5z93vkXMtEkQdNcRSz29bwCM8r4a12hKxcRGLyPrE",
  "key24": "DN5o7n78XnWTjCfwfLemQkVexM8vZUPK8G9aYMzWgps7WbXmZAVrK8jjFqCyvdV1MZLsydQ35PjaT6xR58gGoX6"
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
