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
    "4tfTmnywwKN364kiHUFMkKYr94UbufovJr66uDXQnBoyyHdJrDowvkP79xKS4x7EYeh4Mvr2nHoL2fxoRtHvVCnY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zhPEYeGo4bcjVjCUZaQWPrTpGMpFdPBqheJ3ERMDueUiJZ8rBTzvh1RNKuWLvr5VipwaLVrpayirAXPPEw2e1ky",
  "key1": "51NUCxRzkZN2WyobXk9JSnexYB3RX3K4CmePS57EHtKfcoDtQXbWKCarrLJ6c31Xa1qNXwgw133bxTypWR2W7p4n",
  "key2": "5HqbvSu44YWe2SguqauHybuLWAuMQTN4iD9gEQHFuK23kERTyrSFoXNiB5qqtaVpUB8j3rdgzf8bVyGoXzjCV8Gs",
  "key3": "2P2iq1vxkAjKDPWnUFMFi19VgEhd2eFCzTZuksuAtytoCYKZX5qbv2qXihhp6huPbu6xwYpYXpeRVkKsmNFY2nrg",
  "key4": "3Qe1orDVr36jivgwZKpp3h8oY5m4zj3kP2TeLaE5pxdj7kyaDrCr5TArFCzkaPmrGJaKsTJH1SwHHu1Lzo7CrJoP",
  "key5": "4vPrirAjLpmxofBUpve6g2Zm5zk3aBVHfxL5H1YpbJGn9e8HwVWynyfF1whnJWBeuiQWsarR2zQVH6Lc7KRtaw3",
  "key6": "gGxv3W4QFC8FTqX9mKXrKWTKNQXawW4FyrQWuLwbYaSs2E9xgfq15UdHp2Lk75ZkPp7icUtYnUqtHHtE6dp2rup",
  "key7": "2YosspR22shjdv6db8mP9p5vC5yySuUp5d5rHhQAV19jeaSgZSK3ftzEpiWAixBACHCDiMzCqL1rmW5Nzhbm2xKC",
  "key8": "376qtE1ruYBZyKkokxc4cW8ozUHVSmfwRgafCyH5xP5b1BsWA8BH82LSVUPoNcuJyRFsZ34QZQ4dFPzEP95zPz6y",
  "key9": "gYCQ6uP1f8W4tSuwiwLAzPofugwr6rMVon7byY7qzpqzhiMWFs132ouoQJucoGH2zkJCANbM9xEYD1fSVCKseeF",
  "key10": "4viA7r6MNuZy2WBXipL5xmG3QfPxdFDD2CrjX7G3RNtJmSDWU8ZkY66gUSFw4AqirgQYSgKzKbxFqxPKRv1n2cMp",
  "key11": "u4xG6n3Vfhaij3Xtq5FchEM4Laipm215uJSNmzvh8qrF9GtGFJHfZGrwgNTAkPMtWJWzZBmbfsV8w1RZpBWmQWd",
  "key12": "3Gn9Ux7g5v37r8iqZNBfma3RpAUxUjzXMxQH6UcaMVAs4Shy3pFyZHheqVLdPHjqZhw8r5XAfXxdjKtxhEHALsKv",
  "key13": "3zbPim51GKin8nRhoXbG927YnoBs742tbwCqucGXEpFyWu5zpYwexR8MzgPkgPUA6AjLwAJ72N2EL64KqX4qSw6v",
  "key14": "5xGzmZNB8QqtTgz2nuTPMFuKnVFymnUMpuzXrMB6z6pEptqMYbaxVSyeSfcgBYebz53Xk9R8bmmjNuP1fa5jhNUM",
  "key15": "5eFcTzWE93qrRQWsMK6RFvj89JJKwR2c9HiAbo8EEfjqPF9kMJoBrgiTwG5X1veVLqHFWFEuKNYN12f1H5P9iiV7",
  "key16": "daREH5hFXmiWZsqzGQ1Fj6QsVKJXhiWMv72YTGPswx1XiWryYW3SuSUytxp2SxevEytbKXRKFyhB5ARSSUZg2bj",
  "key17": "2xnjxk5assmnmWz3LrogKT3azg5uaYreUwkcXKm9E8FiLygzrJeAQ8bZEsqqpjXrWGZBW7KVto7eY4HmBUBnBAPL",
  "key18": "4bKmvSHdPwA7s7rhvSHi5yoebfDr14ohgRxycXUG2D5cyagk1DsXKf3DtqDfj4qsafJZVhHfj9jtgKWsM6Vy7FRh",
  "key19": "5NGPLXYuHrgtXyTUTPLe3yzyXQ9fEG5jX5ZNpwsnKgY4mri5XwydquwAJraCtb5H76GPaX4KPRUdz8DLAvWCqxcv",
  "key20": "3SX29cTwbkDRFGhc2EWDtX1v4sPe28XgyzAnVuLB4dx4KWY5FnXcpnVGjgGHnUasQUzhgXi5QvWB9dQgWE5488TG",
  "key21": "3HD2WTiHCuBNASuq5gGG9pM2kSkH2M5FX6HLxKmjjdHdFyvNCiYCQmv1mosjpiRQ2CTUN3Lk2SrReu9nL7A7TDLN",
  "key22": "ZyrtcjvGbUHzsSEZ52oD4T7dJPQDs1RjpALdv4GWYz1KWTvgDQXFcPajjKEmkR5zYUXuA3aUUM7n6uLaaoLRB64",
  "key23": "33aXJKypqszVuakkH5FcLcxQ4r34WjMkwfR6ss16sdHHG4oVFtLCE7zBs4FeMhb4cpJVAXwMtpDE3x4CLxyyjTZD",
  "key24": "3T49ddRzDJqXdovK7Z8WhtDK4qUfZb2QzPANwWyvT2yUnrZh59byM8sRuys3CQ6aa2xPc6RhKskkRj6Hrx4LniHk",
  "key25": "2RQJU2WE7gkwqNxRbKgCM288TCUUiEW8sUoM3J5RLn9CNB4noBUvNUZXAdgCpDbeH5zhSWPKUb6wjzDypZj3o22f",
  "key26": "3kUgEuuj6NXVgQFaw4Ct5KGvAMDJQXrCu4NcLyTWL8vzJzL5LUkDdJPrpbSj7YbfJAKQLZMx5E4UxrvUT7kAbb5z",
  "key27": "2mu6PXxeJmqMB6xPTsgshYuktkmuMpscHH57UMMussV9gBkjojUXWsA3R2fcCnvduNosGVisjuZS5ZLbVjcdJQXZ",
  "key28": "ED3Ek5KUucfRZnhyCp9tQ8FfCpf8mZZHnWa6Um2mrscH6zoSvzBxDkUq6zNGKdJZpdonxcHUZqH7gMWXzsaZ2yU",
  "key29": "56XDHcUdNS7EyrshMGBp5hhBVPmgUENrAW934CaEpgmuu5F56HpQ7yqLbF8adTwSv5KRyrrLb4UtQz825KRYXnKK",
  "key30": "3zvtmXRew2dhdGZJmSka3BLDjM1dxW9ampQPKPTqWKWNdLZJXSJNHotuEpjUypLvPrV3ESwAGTE46hqAUhzUFYs9",
  "key31": "5tdsY7ervjPTvLmwyWQF3sCVRbQjEqiF5u9KGw7YWhZZKNr2x4DDXgTbcAGiFzVL4sNsp8Si3WGNFj8QdJHwXA8e",
  "key32": "5CTzDM3UN1c34jGTpyj2TARR8nCHDu2ssbQHfyzmHensX8A8NkXc5P8Zz4zRNaoyz3Y7ZbqUwzPwhtvcx6ipMhva",
  "key33": "3rqWgZghWHTgwuMn9gtk1FGJHoedbeMgwcpZrqZ7jnfsmkAtLNWqGdq31D6m3SSGiNCsQbiTAj4EF8CFciG153ru",
  "key34": "57eapAs6cWziE6hUcKAEDtrEm9efHP2jcBp2Gax7gS2Vn8pZuHDeVV4TsjdxFVuonf4b1DYfrs7iXsQcyV1q61cZ",
  "key35": "2uKxTnYTkPgr4qPYAG7s7VANDu1r7KrZjbbpfZZvnpBZkTpyaW2oPnfMGJRrdUR2AmQKZrchpowm8Jjj4Rzej4rp"
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
