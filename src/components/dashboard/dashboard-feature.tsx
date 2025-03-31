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
    "33EBAoy4HLrCNugQpdZxuzLgZxQsDqDJQUbaNxVpDAQHjYjfrxSVoTciAKRYMzjjabCFeZ3qeSGKxdRiqktdWjGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39S8S7aZUXJTJcY48o4SwVFK1VR7128H5dnkKkxh5VkRtaBo3Sdxeei3Uvs1XqoK8xGcDhRo4APYBdwd9dffgYha",
  "key1": "3CDZA239Z1SsUvN95xqemNBW9g2KvkuwtAgVdhWPzmpNzW5dmSAF6JPSyb3TW3XDKdwqESsCA8yWeBYGwZL6SpTS",
  "key2": "5q7Hpd7HL2Z36GtYdaL4GUPi9YgGh4dEJrLZR1sreHU38Jm25MLU2ktgGM3kCrKrE8xQQMRVNTdAVtYcSAWYRf5E",
  "key3": "xEiZrcaP7MukcFTgVZsPk1u9ADGoXnbFEsitzJttzTXi7sZXuGZw1i5pBvyz7v5z4DAJnxnzajerqf3cFBfGgzo",
  "key4": "5tVr7H1AhVm6ZuAQCsw3DjSFrxb4gR76ysq7E6XhHRRFwqdpVFo3oSHNKbnzmJheWPXxcYSCE5gn7q8rueWXUFcM",
  "key5": "48MwbBzCFEfxw8Hfhkat4p9PJ19rfR5VUiy1SJEKzNxyw4aq7FjvY7viRr51VGbNArCTg4Ytx6aJ9gtNvqZwP2wY",
  "key6": "3vkWbJJhSo27VdstoNRZbZXFj8LuxDBhUpv2JExVNwJSm4nZKfKJmaVhTMDxErY4owgJDHQWx4ZW1J3dak7MNSHr",
  "key7": "3smDa4z4eM3mSfq5Ko6gQNnVpHu4qwEYychh11Wu1mixmqqRaUSQ7zPK2cas9BeB43SZa1bWWdLsRDHhZT5MmnTy",
  "key8": "25xo52qe3dxnYS2dhM6njZBLadyDE54hRom9rcqG5hKT3s7NWtExujPL3Kn4gWFEs4d7GhUnnV56XBhPpMh6nw4Q",
  "key9": "3vWNZVuktKnoH1VDE1SyEnV83pRFYK6c6Hw9r66jbVopLWnRqbJyhSmZywUmJPVpNUTK5EWrBM8fwn56ojoB9BvK",
  "key10": "3qHBhGDWJx2VfkWQANfrX7wgPTv5CYb4Sb4zTSaGQU9RXXXbJzs41XeikmEkE7BDr9kn2WdPS99DwwNPVDVPUcyE",
  "key11": "3eUNDgrJjpeYfJE2erJ585oQRn8Yun1wevfE6bojP9vuSoxtq29rvXc1ZMGg3r78e9rPweL1nsRFCZn1bC6ocdRH",
  "key12": "n9j6cqvurevmkP37kYe1W2VHdygH5U2seYgmfDEWFHZQFawhfKM9yVvtWLcuwA5jaSey5YstpwYUtwPrGq6BmJL",
  "key13": "4nRCHaFHuQ2BkSAyvW77JpCBxYLuivc5Ej9gRSk2UqM6JpkW79D91i1cALUb4b4rdTNBaXb1VxRkBgQto2koYfoY",
  "key14": "GffcgbuutAvTW5FNZCTkxbmkRiE5JTZCqVTzF8Zd1nZXrS6ckSE8F9xHmC7Bncpr956Ryx95qRjxyK4hX8qakaZ",
  "key15": "2ZEShWkGqd4W3puAfmoTF5dRZnH45KDyD76tQVHADxgnq6bH2WndzXCnNv1DmCTcLoMjyGbCUgTzXyMnHGL58g1b",
  "key16": "3SXvFVZyvhSZipBjrWrjVaE3YdrYL2WmFJrvYrCNFSwZ6PHVwFEuajMeANCuTRc15eT1vVTDwTgQ6hh4bq7knTXG",
  "key17": "2LzQAzgsMMjX1QqPnjoctotqzUp79NBUSXXfQhqN762GUS7b1GFzcpC3koVwPvVnECqQr9KnWNtQ85w1cX7zwAcV",
  "key18": "5aRxvixWM2j9xb66feYXxHjhfvGjMq5cWHM2F7v21ruSM8nnHZvVQWMn81PKqqgKqfFX22yq2sKztGT1KDhrPbLu",
  "key19": "3VPPuAohyWvBZZ88ugzc3LB29QnnyGMELpFSymtup82nLMcroXwLCYg77UXcVLwULTULBW4ZbrVEgnxj6Wg4bPjP",
  "key20": "2Mgk7RwP75yseCLjnC12Lr35L5yJ8SihARoPd3FdEsLNiv98jjNBNMTC7P6bRTMAJUXJEJZxuZ7J8BfCHsqV75d2",
  "key21": "3RnyTbFwZsM3vwNDJUvSM2ciKY7WMY3xrWghDJUR9QLiP56eWYkCD589mcgNxoDJj74eEGYvesiQ6j6ummMjKovC",
  "key22": "2TUxqaqAJQVB4NneroQr19n7esn2wqBmXtHWNVUGryEYvZY9atmM1AwL2CoiPCQBqvKunzjDHSfYS7dGssQJoByy",
  "key23": "3qTCEytXX5z7WxQNrfrBZ6pWzy7oJvHcKwL88FfGhAj6kFuV7nSL1SwjN5Sc2TUoR1PLnDMft4GV7hrXnef9QEsT",
  "key24": "5ykSV4xbXf5pjeMVKQUcXCMivxzBX9CvpNnhVKr39wrGiP6if6a2A23iZiHtt9wgDqPvsKpxnh7xESXy5g3kjQvh",
  "key25": "5W9ntoFfw2PE5P8JVVGwkovsBR2arjgsDqPbsD4FhJgqqa9VNiDGQm4Q6QnuKQQTHdjs4SyXBSqGqh6xwTwXh27Q",
  "key26": "2vGUGUnuff7HfCxMPZL7gfScZyRPkbo8uTuv31cVTiw5bqWkKB9qiqcUVQNKfuparnJRiymCu3LkGna7YJ73DKL4",
  "key27": "ztP6C3dyTS4DggfNCF391oKrQ1fPdUZGf4gKYy3JxVkJT5ZLDDZXRzBuaxRdLXfSQ8a7iz7rPKDtJJab431cj3V",
  "key28": "2jxt2Wvt7vz3WM9ibeCVaLSTG1W7n2sRbeYNYw4kqxXPZh7axAnLMXYMdzt5y9zaxv2Pei3LYkZtApi9Lvp4xPj8",
  "key29": "W7g5p32noS2DRzGbACZ5CgeU5VVPCTLRzNUXtRj8cQcB81FqHh5FE4LdYbbRYaVzc9hJjxbfvbq7ZTbjpSqvUP1",
  "key30": "3oc6vkkEiw7fqtDTwq1vJCx7SQNNCpxteAaa424gSGUCwtcUDnTQrjTdTmNYFrXQH3XfxwWNt7khSgWN7vFaLP2E",
  "key31": "3yczScHezimzcoqnQnnnDXMuT3soJYzGa9A2vUngKFT9ro3PARdYdXpJynMycuJWaFSNxbJgrfQT7vAQ7PG6g3Dr",
  "key32": "4tFr5jTijEjnVyqVZebkJ3Tko44KfYtpj8kPtLCQoDMhFehnCae6ybVDE2GDqgKaBpBoJiBUMH8DjPccVvj5reRE",
  "key33": "2eDV3NfShfyiXhC9rqRPo198yaBSu9TRn668emBHGVQ5ibSsz1XG6xYboNENRHL6u9eMitev1fs8AaQ7TRkx9fWN",
  "key34": "2juReGenKJRKrNzSJucARvyZvUY6JBPTsPt8u7eSesHUbdu3PkPVu7QgKxJgCDuLRAxM79L88HQFcgG4Q7KFES5w",
  "key35": "3qfNZedJDRjrEW6RKuVw3weaCuup2NZhTRPPGvcFQ7gdp2MRdb3UiEVdiLvnA3JJZWXP6tSeVktdJw3gYPZpeHBs",
  "key36": "3Kip2ydLraCwh9BH188goB9EEDXWk47aM2yMJBKdyd7dMgaFG2bAznWnsxchB3zT6szZxjXE6TtvPeZHu8L76vq1",
  "key37": "XttSHQy7Un9FKaorn6sxyC2pw4Kq6EniftwoqtK3NdY4kqCYhDwUq3XWhhD3Sm7X11N6jQ2iJbqNfom78ReYCb3",
  "key38": "5KKmtTc74zDBhQvXHNeXWpGyGrSYVZcGJQ3eDjduVEKmB8sUzyqL2LagPvqVpxQjkPNuHwPYMjYt57bNk9dLqiNA",
  "key39": "5pPK5c2Fm5TMD4Uz6GoMkTPtaga8LpoAEpnEUt1NidTjAF6ZWmNmFx2pMs522GBCzKdrLHoUzUJQERGY75n42DUo",
  "key40": "4PQsrG7XtS62NFqtuQkQBiXZ3F8oQ1tCP2sQxBHnbFKCMuKLkxKnwgUNnpk7FuK7T4iSDj4FMfdgF8T45ZREta6t",
  "key41": "2GSYPhhSQR9JSFPTyz7v75t9YGKDy7VXKsheR6s25igeKSStbLBz4Mr8QrpkSrKu4xeKCAT9SoGF2W4jUMNHoVcC",
  "key42": "4R9SDqsp4mU8y3xXUpeGKhocudCnzJ88XoPJkoFPYsXr5FFiz1fH12ueFcnp4H7rXPZMJbgZvijVxo1iB57QETNS",
  "key43": "3TRoPZfvvbPDB8aEWSFqkMg5dYzSfAzK6d99YVxE6db4sGjqFNmBkAUCkmuSEoAvwkp4pX9ydHfYxZEqKgokQqdA",
  "key44": "2FcvSzjfiiB2MHtSbjXNSfAFT3yspK8f11BHVLpMgyFAEFGcPyrZkfEBEBdFfXLC4hw52dKt2VNcGiAaM4zcKuLc",
  "key45": "5KG62CPzgsY11sgHw5gS2rTYV2GL18WhjUbCNanANWmr6Hg52ae5qAz6uFtWBvKcYjEbQh9H4wfmUGAuFKgPS9VK",
  "key46": "3WXnwwsVKEZRg6DwXahYseNXEvMJAaaxt5JCgfVDRXwSFMUVGr2nGEcZsiPrXDV2H8gAXU4AVJYJ82MjMQJVCi4E",
  "key47": "27EYeqotoABxYJtNK45ngaTA1f3WmtgTgxsZDomBoTSPLBkXNLHMbkVAQkyUpk8ZQwMjVQp4x2ydDSpbgqk5iNao",
  "key48": "ZpwXnzkukdXxteBXHvfAyfD4sjZaxLekEGePZE3HsYZ5U1i5K8PKHt8efh8rsFwT7hYdtENBsimAXodgUEuhk7z"
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
