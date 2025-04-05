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
    "57SnUvwNjBtLE5PHFr7CTY2iBLnT4qWFAPrkswrHJ6VoGFJaXHBN3AtALYNUg6UXKud1tmmVGB59HhDYD6twRSF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3acVdHbjZZQjfY6WYCWqdUV3xmRD8cTQgLcJoPoFjo9Y8H5SFJSxp1zCjrwDwp6AqiAkT1sQavoUuLM8HaqbayQ7",
  "key1": "3NXb8SircqBMMf3DYvZkzMjP4sAwcfbMuyALJmHYbh64iz24KNk3GKswSnpTAvTzNNCfPvMqw7z9zcqw4LjVe58z",
  "key2": "2Udz7TD3uFvQQbCGcNmzvcbpju8KNC9BZ3a5QBpsXvt48CjhaWU6gxZNsSWzcPMa2yNWn4Qz9tAiVTkFpZcM5z2G",
  "key3": "2MACkAyfpViedtGpd8SMoPAJi8nH5qoECbUguhVCT8nmEJEfvCpTc5ATX2p5PW5X12CS8HATKGBagTf9pbPxX7JX",
  "key4": "4BkECJ8vDhqpQScyeP2qGJJ3gr1dvrMsfD5KXudxtbM8AyGigqaHe97cqdWdgNhDZMTeacPRcdatRe5VNjLRCDKy",
  "key5": "366NDMkTnhb4xCdSXYFbZHowso2ku51mHuM42kHw8oNSCVk2ba9J4JAWVN2Wjww7q7nxEB9gNWgj79dYQu915edz",
  "key6": "2BcFkHADXXRpSCydwh6hoom2in2GybFRcBF4gYe6mhuPiNuaELhyCqETmQvoYN2iWFzyL7e9CYwQAfUBZE8TbbEC",
  "key7": "3WXWWM145XsbZ7j8E4G5uGoXYxVEzS1A9VKT5RNag8d7nDoYt35x6ayinzuLpVmJTbWf8qExayZz7ki6UmqBUjHn",
  "key8": "4PY8hJGbp66AXxUMCKujyApTbWhXZf8Um4gY2H4wcJdqTdhDjEXj8ezBTdVXR4dbitvUF3ttqXJh7X5UAA3MNhGg",
  "key9": "4TQZQu2inBmwjcyN6uBu1mguexMLK7vgGQ21vcx1F7tXaxVAeexn522ZvsZYgQfjAtdJRHZNCWKbFbRzU5csKgrG",
  "key10": "63jMEHSeJGPq7WAtPJiHsVHsX837vBh6DEzozZLSCbkCQfnXsFR15MntdHJF9egFzuuSg5zSv9sadzBiJumefkBn",
  "key11": "dmWCdGc9HNAC4Xafzo5kC3bUUV4pFrQRVPQWi1gdKS4feH7SRMdto6gpecX9X2bRYb2CQaHdNuLnEycys4PsJ9w",
  "key12": "MyGnNJH7oMGcr3bWYt5yZ8qBhZFjkcgitRdmvYLQa9KSug2DKv7fedwoSo2JocjoAnv9Df7wQMqBC6k86ng9QyP",
  "key13": "5mLxVASkHU8mxPzibqVaLWxEGanXA3fubCkgJbaEiTc4yiFSsEfE82kJcuFgyw7HtQCmS8UFVfPtR2qGBhgM3ibm",
  "key14": "2QMa2yVFsGtYSAu3Ek9Mmpcrpi7QZAdo3xcCNbakyfNyoaTERhgxQth6rfcaRwyzBf9bJamy4MqxAACgV6d1zEcA",
  "key15": "3ZMaDFXzamhF5a48EPjLXKrvVjU96WkqAL1E1AnJ7dpZx1GqVbonDrn7LCNZR85FSkYr4ei3fkakkGhFSADQUxcT",
  "key16": "4nNanNHoVDik6XMWSsiynnFTPDqBQW5Lmo8GyzXXd6tQK5xbpT8ys3xpSYwxiFgUc8AB4b1iw8i23L4Qu93qRR26",
  "key17": "5AHLfaPTHSxHW5iaUwYfCxDhgL87XXjFhuekvwdQttwV2Z87tDbBmjfcfNMPgeomZu62yhNsHxMVFcDuxQTzZFew",
  "key18": "37ed2HcmHuaJvzfqFNdfosCGh2fYiqbftS1vZYe74C7TRZt6ypUn7EaRQsfcfKpe77gCXvcpC8p4LTHN8qVudDgM",
  "key19": "dvXYCA6icneHRqZNXfEMRrQh2wPS47m3STqLZviAtjhFfxouKHbEhFnGS6xFatR56xzVhhkKi19oJyEno9kwoZy",
  "key20": "3Gk69ttND3KiXezmZPi7U8RToQKfFo18V59zCbwR39pKXD2mksY5b3SLH6NvKDKBdxVL9uN46wZJCco6PtStFe2T",
  "key21": "37eyYpeDAy3kegnLwGX8Ngjk835TRfeczFtRNcTuSRkbVvk5Bwv7BUF2LzyzKSutva5sUXPuowPkDhS3o5Bnhm4P",
  "key22": "5fZg5r3hoXMkWPZ2536QRESwyZocG2QE4qTnfTdLe8YDAHe98LMMTR9yF5Uoe672EmHFmAwFLgyqs4Racuavst3",
  "key23": "3T2iMzFhyLeDvQ3Fzx6BntthEUnehAGLZpwiF6siuJT1B79g8PfTjbmM16VkLGJdPNCn9dyRmyhMATjYeSNa7B2E",
  "key24": "5HjL2jfBEtqqNxzg5FcuApvnN6XJGvmUZeJkxt1U3Ed8oTc7kmuoG9JCSTv8h7kYsend6QcSNoj1v8Ptn6b7JcMq"
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
