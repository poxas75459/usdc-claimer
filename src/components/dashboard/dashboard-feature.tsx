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
    "5zU1f1yPqDhbknEZd15JP2DNw944mRzup3AtCAWuw44Xz5RjLhJNgUd6SypAmJQDgRvSbUvW9inQXUJPicuJs5RJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EqQLWm5zKp43WCYiUGzPHXyLjqJzMPoVuBsrU3taK4bceVkdxPLQg52nypgzZvXUP1MTGxt66JB5PFwPXnhT4Fn",
  "key1": "61UbRDJFKP4xAL3d9NkpDDqpZjzXhKAGgGrW18agxDpMeniJoANTmmBkeXmJTcMNLzrNvVY7ME7Ae15pmiSsAtAD",
  "key2": "2VLVdaBhggwVE3d6biHPqUeCj4gCtJQEvpcu5mzrr7MmMv21WFez9kdZLXCgrRLdpRhnMrWmp13piBHfmvAhCLza",
  "key3": "3icA1ysjQ7BAE6gfgBVFBDoEWrqQcsfa2ke7C19bcgUyWNnKBzrhn4jER1GLXzoZUocffE4UUE7AzRvai6uBSSmD",
  "key4": "4xJrSWU6dU1rDcXNTPgVghxNi9Sq2xrHEKmGrJRdLXBvdqStcpc3dFgZ7UmqqLfKzMYCxicFPPt8vowCbwdrA3ei",
  "key5": "4V6frm6JmY27bA8j5gpGESHUAkYmz6LNaf8yeiJDLsoSrpQPv2hanoqRuxvbKxi1yaJtj3zmka2PsEnf1g7zv53A",
  "key6": "iKFAp68JikB6c77Bo8qt1WPbzNcZD2FWrEev1pCiPBAxNhnQNJ4rJAU8mpYXobcBrGyFfqVXhySdBAiE7B8xFrr",
  "key7": "2zjigob8JwvGPRooBjbrjJwnfoRx8iAjVZB5ArxBZiqpuoS7ah5Uatmocq4taC189Xri9cv9BLh4sQaR1CK9JiNw",
  "key8": "2a2w79dFnxeK8ZT1LHXzpV3aQPxYBW2kAkJzBVfP3DkAHCrDjTktSvrB69j8i3USdA3DvK5dkWtvPJFD3P6SS6pk",
  "key9": "FHn1XE5SfgSJmykLDk9uVjYpCnYeAGrDE64QfJgwS65oHZcZQAjbnffXhMuDUcJcHiVSkxsXRNcx1NFeekhgxHV",
  "key10": "4iAenUaDyFSWdPg5V34KwPafwZdDGKdgwQXngiVJ9dcMtMqWqbkSeHwPXAN1wDCt6mLwNf82JNMLZ9YeE2UBAv87",
  "key11": "5XrmhL57KkcMg5zH5pLZ2YfEkguJ1oK34YHexyMWeF1bwvd6jPiH4FfLqSuUm9Vf7BKCdLBF8UNpeKUrGRsXw67w",
  "key12": "3K4RqdMqYxH6HjF9JzAYxpYTSe7AD8HvwnuWCmKLkEK8PkKiqS7pwTj3unMpycZDN7c9h99o7ssNyiedVT9LNkPi",
  "key13": "5YvrcboBVR2WoJ8znePwLixmA7enRooECZFApvrSgYwqfbSN5UdPXUEBJNLZKKNacJsNVh7EQinNAX6PxGnLGo7h",
  "key14": "4hDrPgWZKikBvq9T9LKVVL8EijXfBnHuRSzRpXBfVH9CUDivAU9N7WJk57mEZu5oBQwTxf6cXNSshSWpRJCYbCgH",
  "key15": "5hzsFE3jZvB7QTYyBBQtNjY4r2L8GeNnwr1pUvDR1RuDZwzTpsFbq9GVC7zp14u8RYVTgtAVw55xZro5cs3W8tLx",
  "key16": "4m9xJ5W3aqv5iLXHeH8GqWBWVYDDjsa8q4puPgayYZJpgbmH4NBUjWifAESmoeLHhSX6wsksuycuV8UdP3BsNuCt",
  "key17": "2p7md7jMGmvZNLiBh7wXSDuYrggHMpGnM8v8DJrapLB7yt5cqnaFHqWrZjT5chtd7np5Foux4Vyn7CbAW3B6kY7n",
  "key18": "RkPQo3PWn9enHFEY4v9k8YrKtx2Lkyp5GCYXsZie3TKJ5yQdtGUmySTnK4HEMmx2MPeLTXNDaTUhVpTzDhxNhpA",
  "key19": "2Nr2qHNBYdWsc9BokT3CsW2QfP1DxWnNG5vc6EMv2LEbfi17UDmhVntpQdQk6FBdrG7G5HbWo5gzcwnJR9Z2GPvF",
  "key20": "WE8a2NHhmTzz8zkboyhc6oQgzzMBJTaDhpn6Kz4E6uxGwF23BV5EaVst4t573NYnAB9CWkFyvADoLhvCshVyy7H",
  "key21": "cWuSduRBeMNdV6qZZNUfDXcKye2ZtVSHfTvHpnYVaeJQwGan1CioVzxopd5Wkao7WdCkdXQWUH7HNLRQqGb9w5T",
  "key22": "hefQzcQHVgy5wys54JqBXNTtqCCtiekQtdLU1KRCUDKjYAYdNAP7GXASYzxK7frdaQzGTioNUqpbA3PNBX8Uoft",
  "key23": "2SaWoZUoAH1ZVzAeoGU4RZdM2bHoZ4vnShRBDxq9g4zGP5HAt6jhLPwyEU7Jxb1c17zULv9dzAzGD2fKBvMpmVGd",
  "key24": "5HjY9qgm46yBvtXpGVxFVxKxgcvWkLtGDN1S6ZhzoG4VvnbPjwi7xa2DgRACzbdU54cuZ7YXuPNg492rQezqLJMN",
  "key25": "2GFvFGXSUsiafob8EzgKKE1tf923bf8LwbtHwpQuYViXNPgbyzx4SQbGS2M9XC2kHTZLjWNxAMCjyWk5UJMCoEdV",
  "key26": "2NF8aJo1Y4x7nrhfzJnuesUfqE8KryGvZPNLgmmvvJp3Cz7B1DaCCSH18b4AadyF5GCYETHemop2F14Vqa8VzR2n",
  "key27": "hfVfzA2vy7TpqJrKJLV5QjjdCgBi6JcE27zTmDoJLifMDUv7JSAgr24jA1YovEsaWv7x8rTWWK1ue2sErk8umqw",
  "key28": "4wXDJnAzCbZkq7BVMGmL3qEhhnfim3h3EZYcVb9QbxiX3UTZ8mCaZ7diaa7znfJgTzB2oZBQysBmGw5e1x9G8NNT",
  "key29": "481AkDFGvJgpRUCBiVRFkPeBo86HPmbKdzqm4qUQNmH3aw4nYnGCbjs7NLpTfg7PQRt8KQ8RzQqAzzEChL1T1vcf",
  "key30": "2MiiPNKAPFHAapAE1FDpVPGueg2niep3YiHZcEcW5d7nBFc9QSS7iMgspebWei4SZgCPgfgh18JiUDKXPCtwcock",
  "key31": "3RJPr2b1NhB3kxSYhNcscKXKa1w6jcQr8XGkipMZMb4nLhS9WsY3HS5iipA9fUMVUUWUqAC2bvYtUJ9TLs25eq1q",
  "key32": "A6MmGqenrFVmSKq8J613xkxSd7eexKR1zPCyz1uKdrE9bHSPB5shANjv9476NwHsMyCYxEAWhuEgfq2EvWxpkXD",
  "key33": "h8qML4XF7sV5mrF134HKRHbcCT7PMutMPHbWXSCBbg4Ffx3Et7aiZNPzgevSnDQMDfKLWNi15NKETYmxa245jUt"
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
