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
    "2GXWrP1WEN2Mb3UDHiwcyaXfgdL8xoE6XuTJTHdWTTx2WFTheLSvLPsUmq3u4RJnni8yq5PcRAA48pDEotErsjKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tMrm7cQ6x3My3KMcFeVCECL9H5HwABxK2hUayCdDxuZZwGReK34wrLiZ225XhXHMUzhgoCHkVXHLFUAzMBto9ST",
  "key1": "4PBwD646jK21c4zM1o58mvWUkRGJe5YY4CdVBXihohtytR3dCZwWS6jNNzjS3kSJFkuerFmTVbThT7c3RosqEx9u",
  "key2": "5eBrXHgJ1wXYmAedZrRb4XZAn17XpjgEgmDprTtPPn53mQVVATNPYYsp6JeMsGR2M36jHDMAgGDCKu4EhXfsjEM5",
  "key3": "3TDoEUZSiTT3Sbwoxwtnyg2zxAN9QRuxnLMLoqEUsPXbbz5azgsUcej1dqupTnpxqeCVLJiNkCHVmtagQUndsrzT",
  "key4": "Y4sA7xakoZx7rAyCGJdjqttZgeAKbYnuKNoqiSmADSY4bWnVF8vL65crYQ7REmrV3FWrNUeUpvyizE8wpB4KQzp",
  "key5": "3earkVZFPcVYZn4SX4zJnA1K2TrFfBxqap2HHMf3QkNuZsmDG1yKQqKmX3otnXzSi6TKugrTzyDaoF6zJ1Jhdz6R",
  "key6": "5aNghZscyn4Tykmqewa8ZcMaVpnkXZEzg5vRAHgKzMN4PeLn5yMzKLq3DonHt8W722oLtbqVmX9NAdpLFPZh3Aw8",
  "key7": "4ojvVzmVbR7xT9CBVoX2Crh64PYFigQJTbSuk9u81CvSrWBT6k4McCUXapVqk13wxLeFMG9brdF3XarxtXGX4aLq",
  "key8": "4JKrgt1Jv8PbEyDGP3ksVX4s2ytfv8oALU5Srfc9s6LSPtBKDMtddcwp5tYnWM3PPo1NqSiTYHVkthYW6ptJXz4e",
  "key9": "4fWK8pSBN9oKgaVCte8YQY1sz6zNfdYGAoHd3GXkoxoL7uuQWpYBnyNsfskth7p8CqNrvWFM4ybY2DTsGbJPsdBH",
  "key10": "RrLhkFjTKCPge9YkDiP7fML1LGAWatqmZ53s5AnutvpzPSh7eQDjrVJhdugiJAdYmoed45fa4kLpEuG5eXaZN6S",
  "key11": "Y1gnenZyvKRcvhvnR6u4JgjVz6BDrB13XYuRsPtzKWjmHGHQvYNYmMYB19uR3YLE3gnyVTpnVohLdMfmsUruSi3",
  "key12": "5ighk2XQscBTjV7XASyhPcxLV2XqwG3fmwycZdgUb1K4F6wwz9ZFXjPfe1CqYc86LLreunVFNZpuiTTjKARvzg3m",
  "key13": "2eMQxM4gttMyHUymNd6JT97MdiLK5YuSQUfFNMcsSsw4rSVRWXR6Cb2W4WSTNqR1svcXEkGa2eQt3j2W6wKx82GS",
  "key14": "38UBi1FXwNQBw1SZcoUR6h2cvJ5oisQG92Xv7yTXmpH38LNWwyUBXUH94dF9t8BJBMsEBCWXv9ndCLNP3nz9TPJv",
  "key15": "3qstErZz4c5F4hHRN6DhpR5zffLXaBQaLRv1Yn7dK25n8KVXgvLEBNSCRsnjweVsBTMv1Ya9fDV1FXp5hTpFTi26",
  "key16": "5DUZEyGQbyJJRhTfL2vqnQD5FArUhSptRzXoanr1LovihPnHv346rAvgH5RovXC6gPdTBoWyHueyPABmLC5omq9H",
  "key17": "3Geyyx3ThLV5V9UBzABGDVZmCnTUtG4ofm5Mt6ZCuFjLvhc3k6KVn7GTk7i2DTLBnujtVKr6S9g34eBzWkKmsJLE",
  "key18": "2y7ffrGB56EenkNi9LncSDGWZRm96NtLXWgSgDBANxZYhgdfzWZ7tMTF1DcEKdyZxinb7eXeqAC7BmkyWzkkQGd6",
  "key19": "5sBA77pW81URUGvkhnEbryXxW2PxdH2CdVoqnhEAGEfqinefiVu7rQFpfmtV8S2R7x2vCpzegTDXxYiH65RTjmcy",
  "key20": "ZyaGWGtAWMUT1xeJRb3WUusw3uMa9pUQ2qsSZEGgK4Q2mpsMqbLsDeeqLJc9kHopkJU3enMkcY5UYseJ8Vpwiwq",
  "key21": "4bR15j3o7SxXbx9KL2D1kQc5XebwY8earkgBgqxugxXYgwaGNNer6ciXBKZ5A48wr6DVEMXzB6uDLudG5zKPnfJF",
  "key22": "R55HHgjKY7J1LcPgxcB3petTGFvW9439uDeUUbNNpmruG5Q4nLia8vSuzKvr1je84N9CwE2Aic7W1U1ZqD3DQas",
  "key23": "zhpDDgRCb2JJiFAvdPBEPSW1kH5G5X1rxfhkwwN9jy4eqfAQtsE8q3Jm9QhMKq8Pekep73qggEGRTbk4Ej5AVPp",
  "key24": "9qJKXC2bEB4Wfh4kEAPzG7yGebiuyvRptLevLs553SzBpEYhK1jjfgLyQPoFC8RTV4A9hYNJQET6trxZpUaHVGd",
  "key25": "55C16mBzV2AcCGaDUPE6DW6gUnjBgpXVJH221zbmNSgcbLZ8FH7MgdFaBJfLmpd2TxwcrY5Aic4NbJWgVTcwwwY8",
  "key26": "64pXveyuazBgKSvWexwgUjpM8N9jpdgfk6FnL11CmHUscdVoHpX74sQkmoF5KA7YYdx5e61pCGhubieSD63YkA6R",
  "key27": "3cWefy92SVXkZ1TY33pUCDLHXmyxzZoXrXPpEC3EE4LVfo4FKYKv1Zpr2LSVMBmpAfSxLVLQehKahuKo7ybYGuVh",
  "key28": "2zW79nAdLsgQoVRwFS8qWAaw6PcFAsA3w3E6eAKvEKqekZ11XLj7jaXCqeX7VJqqaazree2JnmnuQKCK2vR3wtjm",
  "key29": "YJJsQXr5eAUxQAdM3zzmbsErnffyWEpGfktVFB7HwTcW2WFR3vkEuTKDubUgnC1JvcZhKp9ghnX5ssmqWNNcWYy",
  "key30": "4svUSyqxZAAnKE2Hq6y54uQLu9V62YrYiWAAZ2bN3TzuyyHVr2F2n3iypY2ydGpF71qSG3ykViUY9XoPbPqA9MoL",
  "key31": "2bgL8SL6tfRuUicSjy15dVzQsMaGUVUNpKPPBS7uwKPxjV2NLA2hJQkoJ4nk1ut4G7mvvYA4cm9i6y613JqKokhw",
  "key32": "3zui2E1e8D8xTjzasyR5LdLAKFbM7N84BqWzakPHtfDwDZEkxqtH9abFQrzNhiQKtXtaeym5FkDMv5SqGDHDhwL8",
  "key33": "GUMeJiKoRJmZSogGSLLFawAandL7xmkTiXvv97irP6MvSTjbMYL5YXfLdbFoyTV77PdfiUYHod5nHEPxCgLyR2a",
  "key34": "S7TH9Vkx48XE6LJonxLj74Bmb65ftrnt8iVi3e5J9i92Lv8XRFRyajka8gS3KnJgmqPHc1EKWuvGuNrDYPhkP4e",
  "key35": "3xv7xXf4uq1jFS95zbcQ5YdyWtnTANtGcB1jwMpT6xERbcgXjoQBx6RzbVHcN7MWCwtR5Cv5QVR2LjUBRUnG68Wd",
  "key36": "2T3oXiEbfHovLKURuNYs5f43h9CCDE5vLrjrrecMAYQkCkxz35UwMANPuPseZSupL1o8sq9cRKdbE8SrDqyTFwEt",
  "key37": "2veLdpgt56mBmQWxDnoQn3CD1WAdnzg6eHyiAY6TQPkdmT2VCPvxfB7n1Tq8gWhrsNGuYG4v2pGyTC7RtmRTgKnS",
  "key38": "3fhe6LknXTWdhGRrduKG2NC3NqADhWYLBbrBQTFDmrspC4GeM4DPJbHYcmJzGqvLJ3x1yAWVZnpYFnDArKXKfFh1",
  "key39": "3ByZWXP3jZRqrktJzEes2kCzwR8nbyryYTKUxqJAg2zpURQ41Gsp6YHyfEWK4v8TNBKmc9CZRttRFXGKsGRPSmVP",
  "key40": "4PmuK4reG91mKbxMWf1XPG8LueQkzxPnBJLdbkwHAcJ7otgjj5XsWy7eKKhgekFZGge1LXKnQf7E3faKPisDcYHq",
  "key41": "31TvpMfv6fHm1ahV5NdLTjELT7DhkRWnwGHtA6pEowmkspJxgBQp33gidp1dsVLhoMAnPPyhn8mKnMXFb3UiFU9T",
  "key42": "2aAC9KxKP2CSaWetZVNCrEnZ4sLihxf4Jy4oXt8Pt6vCEg9wx81sdDa22tHbpFEhKRVWXNgLe4CffKQp5JJeN2Ga",
  "key43": "4hMnBtasLG2nekAuVZMC53ACdGzh6im5uNczGA9ZcmzVaeHtVwEpP4AL782jM8XHYUe6RneMVEbVfRBgkuBMRuwd",
  "key44": "4sP5QhGdVNFa9NPiZB3bxamDdL4Ryrx4zUXNkgePch41jobaM1tB2FBfmnpV7wQN83nRohJps24RceCo9hdte3c"
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
