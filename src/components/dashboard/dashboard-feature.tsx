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
    "f3YxXzuCNW4Gu5iVMJUtHLexvtd1eh4x197uLcdEYRHEd2Z1fdZY8sPBfeMK6Uyyu6X7DQ8YqYygiYD3EQXMfJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ofMXX5LNkVoy4hLtuTqqANp6yty8okPAjeTFZTgXZF2wuqmdKm3kh5q7vJ7oDgDx5Fra6AiZGHtfRXaNYUQb4tg",
  "key1": "dsC1VbRHYxnDhVEipE26pzSvXvs1rxH52XJeN4B3STc8XbMNjzTF5b2AjfyrgwuBtfz3FbX1718q8N9Gd3Vp6pu",
  "key2": "2RVq3SJkTTRqSjebM28o6NXZyfS2QimqMvKRj3QQ14Qs7ro622ocqKGF8nCb4zKDWLkVuLfpcbaJQ4qyTD5KPSiv",
  "key3": "5c9KXChLncqLddRB414eUmP4mVs36UvGPjW7qBCPiwAjyaUyrhRe8qnfQQAj8fLjpi3LdNuErTs4LSfakRtU3hns",
  "key4": "3MCUfTFBEJCuq4ouTZfu5b83XripCgpsbqKgWMHGV8jLtUvZfRkon5BfyyLQrY4whFosg6Zt3R4tR7Y1yhjMwKje",
  "key5": "2TBSz8MyEXun3EQZuKki5tUFDRFBE4Sb2rfZjpXzR3MTwnGGUKdSiduDfHYPYbLYMbrsyhjjssy7EN2jwPBEMh2s",
  "key6": "5V5rNjNGxjgLZw6e2yoPNdLFgHSx15GGsJwzjGjWoJeM5UMAZwGaNoKVzx3hQjxJrE6pU24TSBaXdbPhhNR3eYGs",
  "key7": "GAHoqEXpEMzzD5UYT5Cm5CY4dbQnMWYtwRd3EKAHfTRXiu4MvARS9Gru9EzYvcf5zkJ5bCVW4Dwr4g8G9Dz8BJE",
  "key8": "28ygSN4xV6aoNVH8bEyXCsYRSMXxaT1KDnSeTrRnWfbtXr1jskNGw4NFHmmU7MnCD8bJssDUmN49TjSotvwKNZ9i",
  "key9": "4yGZieThaVc1XXmxMXd2bgSgCFCUitnYwbWaMnFW8MphkJu8q7dC9wZk7wDsAGZ69crLMmh3CC5JwxBUAbys1dfF",
  "key10": "iStdwiwCNFmPVywCeNJTgtHgnXVDUryExHEkYi3oj1rSVBaeZ7kGbVfsSVvbme57p6KKS9pfX1jQtTD5FLeovzK",
  "key11": "kw9UUzQX83hgwcdV2pkuZeo3NFqGRRornEVjGCqgYveeLcrSNVPQG7w3Sbt6vRrfCGK3PHRJ7YgtUw3276n7f7v",
  "key12": "3QvdCnDNdPARAJFAsBvC8DyR2Ve89kxzepUBLufD23vRZayUXeWgSerAHdgrqcieotD6oiTymSvLNERSiv4Hxq2X",
  "key13": "4kfek7WiBsJBGHpd97d88Qjy3aa4Eqmee4rqCZXgFdRceRdycpMHJDjLttsBB7A1F1xmwuvHSh7kPwbx5yqcwHY",
  "key14": "2GDjZhp6RzUytGnsDKhjhiXMkr7Q1Y2DZefZGMk3FRmGnNay6DZfAHnnWqVTF4wD4hs4ExuB7HYG1wRiuPUDsF91",
  "key15": "5dtEUNhu9gbKHUoJfmDWtWYke6PXWLaWBB2xJycQn1Wr8L5fiWszV6XdWzse1yUzWmxybpYLov5kU3gkiSY2ick7",
  "key16": "47ZiPbEvSknhk47qwSi6F7G55Fg3xxuBmfntCqLWdEd8cWBr5LmEZTypkofh7vjqSQbUQxqAfd3gbF6R5o7wdEbT",
  "key17": "5CG9yGLAhpTY1woQATUYbjCkwzcbykXkysngwfKutthgeLt8S65QnCX9cEbQBbyVei9Runbbuip9j8CPjvEKELuW",
  "key18": "3BYsNndqqvwDrNk6rYCuNZkHuZHQnbv9Mdu86FzJw8bd8eAv5dNibWwQdfcKFtm2QhotXWYNfPQ8yBXuBtBZ8CDo",
  "key19": "4gV2CKaZhEmZNb9EbAk4XaHgnUGckAYj7cmCgcUNFaC2pbh3iQ6awpjLxfvJQiimxdQysXWNHWvJH7mcWAp7hB9U",
  "key20": "4y4ehW29QWGGPYRr9YiQdtqcyVNibYSqNm1bAJmqCbtX6HHabRzNRs7qPVAa89fXHYox8Du4AwcqyTzh7ar3rRHz",
  "key21": "3dE5yYFGxs6y48KwU86KhMxyHgYznsEduDAUpYokCUkvScYbbNVxt4HWaYhxVtPVDpKEG3CJXUjxiPQ2hN6twbc5",
  "key22": "3hbHxm3Gncr5zq4KRsw79iRrsz2hYRguYE33SjmRCJraGCWqyi8pkMPQN8UAF7cdom5Tdf7rfLsJLrg2RyaebdZN",
  "key23": "5FwT67ChJ8Pxufx1EngmU1gpH5cLnqhvaM4jJD8rn99i81t1cmtCD4PCCMN2frXDhFwkoie43qxqPcFAvmswMfzC",
  "key24": "4nBKtxVFpLRnFHpjUbpDDaLARAUJ5rsn3E4CiYXwavSXCDrCauJ8KCfkwBrbU7CYCvoNS52suRmfa5Vt7Bn3EFKr",
  "key25": "2fkQXExr6SbCN2UGAtuuvwmkEnr1d2qFGJAPQT5CTQMCGX4YovDJjNiqkGP9Rq8Xw9QdFMNGhPDJUexRDrV1CyQU",
  "key26": "4g6n8EFDBkfKkJ9WzAZmUB1EJuHtqXfKN89jRSWjm51YfxpENqRaSLrKZzYyubZL8W4AnPqM1mBq2yGzKV84PYuR",
  "key27": "2oa8D3DfMBpQAwwwimnRpzUgtKVnxP8wFCN466TQDn5YHmLqcMEyC9diGwzrbbnPiNLAZMtXRSGLCTdCt5yosRwT",
  "key28": "4CViAoDESBFxuGdYR2XT2Qqv2cB9N9s2kYSYFSF7LKCGwBZi9KXi7uC1eQG9fUhdsqRvepEScaMe1m6KzuiCVkVy",
  "key29": "53Ghu57pkL6eNqeukEDBkVC1Pq5wgoLVf65pLGfiJtH8cPopepsoQ7SzhjL6gZXTV8nSi6YA5q39G8VqbP3X5BCp",
  "key30": "57QF2BzF6ZnJBMya8oeYY2zpkJZ577YiPXn3R7XD3mWTKyMyLHEfEQfnoHnbAWBKcMgzMSEe2qxC4g86iPnzfYVb",
  "key31": "32jfT7hQCrkz3UzMsqkNKqfiYBPKTVmhRm4HPXvcJZh2xHiV9f86ajsbSk4r8JCWVLDjGF6xzM6eZo7xRST8aMDQ"
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
