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
    "3rwxv4URyHJ7y7qrKxj9f5bY3eUmvBQjWd6BxFHy4BFocRMwAZNx8M8FaJNQaFWZZ7vYZfkCtceAdysR1NUzv9aL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iDToGQ9uZPV6bcMF2m1qLicZmGa3CZiui1AYcqtU5uMPcQ43pWdh8ngdVK2G9zZMbeUuRjeH2dCfMLUcF6M1M9z",
  "key1": "1JhmA8p4ZD6BU9Sqvg8nmYJdnLVYVjvZvZt1hc44TtXxVLDDAwRsjxGEQ4DUhF4gokbKovaMxesWGpMMEafAfFb",
  "key2": "39oVsTz1zSpBevvVwmvkj1ZQKuZ4oJq2YYAauiDShVS6q4YShfg5FtYfisXSdY3CERsCebmSyU17R5yiFBtE7wQD",
  "key3": "4hFd9Kz3Fq9DNxXRKJoJAsJExjpebWGba21Ei73zad3D4W8haJyzf3KLqbLu7oEJ5a3iaBJpp8dy27c9J2DjomnS",
  "key4": "4dYjzNdvAnN2mmGJnCURJavTBDaoeiwy1ei6FwQf3G3oXPg5tUPymKukAcHgXRWFgKkHJDJcFg3dEJhPsFCdgDpq",
  "key5": "4q1Hk3jGdg9Dj9BEeWuP7qikfBGKaftmUsEnay8ZDsBTTVfuh7Go6fCBkyoNtyTVRWKCePFVmZxxPYC3yAWELhHN",
  "key6": "bCZtNDBGE82XBM7ku9N1ov936wgmCkezcP2BcMow4AgHf3axtWg4uJgqpUN9CYLB4d2T5QNqr9Genx133oHkSjG",
  "key7": "5RHttptijnbakuZHEcgchZzkNJCteyYfdN9o3ofXE8aJ4EmFXkwddZk4FAnKMvahMdDQFXKjk783EAmt7ikZPGTP",
  "key8": "4rc4HxdsZ2vHZ9kkUj9jvwbMhq7UWp8sHgpQvPg3JZ9yxS8uPhQgPKgbDWRLPiyBKHSQwBUCmncho9wWWsGu8BS1",
  "key9": "5yF7MQL2eKDsmtbyxDWo4dB6CckEfuwWAws8UaXy2WhX6Yv5BX5crWgV6PxGZAEFsQ8SgAvQd77wJCsLCNxY8Ztp",
  "key10": "5A11W5KkK381DCQRaHths8kHBMU3rpoGnie5woqnubAQ951c4SL8sp2cs3sJtA1BryXSf4P48hcAhtrnkQxQTFdr",
  "key11": "31RaHUwZ8p5k2hWDBnysrpBSqTxKDwEvTLb3qtXtaiSqm2d1Ge37DcDVJrenrGLRVQMUrAR39cFVTj7HBK9Uv1Qu",
  "key12": "4BmneSkrav1H19TE2AwNuEKyMwCkWrLfgAym7q87wTB3yghdD41yLBSykUm3EK7pquhERCMjpQ2FigmT9P3Xdx14",
  "key13": "2wGTT1ToxjMMkHqTiFUjqbcLhPBsmybz15AeTsLQWonNSQPzYvf41u3xfTGQywBo5ZRCPJERyaxZC6XZ3ped2Fvo",
  "key14": "22dvV4PPx9AQ5zbXQfHiMaLBzBB35jxyDcXgmySoEvaHYptD5NExuH1k6g4dnf31R6oEg3JvrioCJ4tYWrkdhwBw",
  "key15": "2skKuCtEBpVfK39sYBeQRgw3R8XbnhuchGknMc9Fwddm4okwqry5uYXKXn1T2b4Ar63pPeRpWs5D1Df1r6HpJcCo",
  "key16": "4Eb42f4fHUXU7T7kfVpVCiCkT4uRvq5628TdEDwMyaVDXrJtZLsVgKcWYAGgct3MRrp9VMVX9x2KGhjjuoDqpmBC",
  "key17": "3ZLdHM6MCFm1e4Ms932hzoxP42UDFv8csVp31Me9cbey1bDtbRhDTAea6RWk9h9cRZ9rbRzNmYrXt5zLHcaPfKah",
  "key18": "2Uumiybmu51azLZ1PFQ5Ffu9VWLaE8x9TB4YhySfe548nhQjDAwD4QJkJmjoU5P578FsMwqNGtPKpGr5a1rmv3u2",
  "key19": "61fGwpow2U15FYzgm8D1HTLCyhpodaCP36X8LuyfTZgceFCTjocqd4K6a55ox6yseL5aePfKZNSD7enMX9tQFEyn",
  "key20": "5mQptd3jXk6aK2Q17UPu9tdeg24wYfB5yj2P1xJumjNP9Px9VqBvji3WfMiE44h8wywWkSCrGzfiwkLfcWmw1H2S",
  "key21": "3RVDwMKnpmp1vJPkKyY4pgs92v6fQ1BmqKJGFzTJj1yQYSwZH1kDevMy3dN4M1H9VxDb5ZEXQEKY8tJ124G32Aje",
  "key22": "678brJ3M5jtoo5kfmAb2JMfyWzfr3h6rinjCzSF6bRjuYxFuKPeCGaysZwoLFveH2FA9DvjCZqSxY4qTd5Uvfcv9",
  "key23": "ixC5xrxujnrgwFciBC2UJuhYegyKptywMcXKiT7Hyh2wzh4ZuP7WSRG6kDX1zDwyY7n2EzoQbkRRrX6G3jYjfHw",
  "key24": "3rrcYufvRmJKXnnUXUntCwhdcbfi6267MqoggbqKAAN5jEFqyAQ4H4PYhcRAAevXxXHiJeMgLc2iYsxYUsiQJvgu",
  "key25": "SkohkiiQGGwjAJjwsGTSfLBVa8Bwc47C6LzhtbCdz3X3gafznHbjzCoYVYqThaC3TdkiM98hcTyyszeyAdoxzJk",
  "key26": "3nf2nuPasU7jXu9q4wXNnk8vj5GxcMxUFTXDCZmoEwUMdYPjqvntvgWYDx62gU28BjrxgB3B7fZeJxcLKMKr38Ac",
  "key27": "5ci8EhSZDYmGFwYz9E2hncrnKC2SZy6x421bdHUJ43KsbjBLvSCyNXkCmfiDtbQwgUG3SRMgpWqBz9EWq1T1WH2n",
  "key28": "3QgqyBagXmuBM9kqEtJog2xwFtfKqt4y31WUaS2CR5S13vkDKiMzGc51L4S7vvYRwAs3BUe6SpfUr7u1qgrSpzNN",
  "key29": "Q6MTtiqvy9Jy4Tutp7pr8FwVxVwzAK4vz1Z7tGDed8c4uNY32JAqHyLEkYM9ZE1aMmhzGzfQHEja9hwkvNqa8C2",
  "key30": "FZ5QQZLW1HwHrKrr4VZHzWhHb9Cr7VLtDZf1fPzamLLELAsVCXwcRZPk6EAk1uQ5T7Mg7448miDdTTkBg1t38Tb",
  "key31": "252h7H36cThAGhpfx7Vsrbr9iv7yadkakX2WtsSc6Fv6jzELKcLszwXSdrKcCC7cFLmpkNtgY2ABwgiB2QPipg4L",
  "key32": "4Bnajpqsm67Yna9HVquPLrt7P2FjgyNAFRwiqiwdeoJ4XnS5xnHAhY17njtaf4JWxPNkTE4oKywgE3UdYBuR6EKB",
  "key33": "5ky7aZ34g2jVj6yJWhKszanKeFmY78s86LNYkbbQDCbk692hKYPawSKmnRMXTPSJZ7iKBYXznV55FM4cMBkvy3AS",
  "key34": "48mb1HpsXjzFTXtFXa1fMEcYxTbG8voMBp19LekFB9uAMzdvnR82rmQjPZeFYKBDqfeqx4fuyqVDnesE7oGq7wJP",
  "key35": "2jXCkwUUtJMbpKj4g3mwDPRbnKrrqgb1M6MtEdcwbzBQyoE4AsvhFudvDzaoFTAUyAaX2XyjnEsq76LdrWnwASXS",
  "key36": "ubA7P4eUGTcSqNdKFB2cN2Hmt19j8tjeEAfuq94hPZmGYThEaARsxJgbE1tDoWc9BGpMjARLNEV4s87yyVNQo4v",
  "key37": "YEa8BwSLy2sjJUv6C7wTnUPgvfkGUgXbthvVswn6gy8mfYHHYwWdoJj4Ea5rvYUadYvQX9MEkVsYN3SVqHG3Bin",
  "key38": "48uE3vevaW5FedTYCnFR7jH3T8rLj56jNWz9y6aDseVZNjahHK7ZcLeBetmcGk1VBnTopwuXKLQueKNpSwSWTsPP",
  "key39": "2UrS54Q2eERZVCGyaX4eSMsBJ7fCWFuQySZLwTqWGqrmL2bhDoAqL56SLRwNT8mYg81xfDNQLXG8x3hTaF9e3EKM",
  "key40": "pvhWcF9BjC7Z876Kczbs6LaLcvYhhq28U3BJ3TvkUmvEtMsnMTF1KcZAmBuC24Ermxkg7gSC6qmnta3LLnQF1rz",
  "key41": "2mDgVMrj5LvbqnNVuAuULvRbXnwJY94MFqGA1LZBLe1iwbD4XcdNk6ZWvsk1gaUTtGSAmk7APGb5PX8N2UzZN7mZ",
  "key42": "4nk5sp3asNsS6BYD8iW77QfkmDqEB8cGA6vvBPHtCm1jzuqnt5mDPudTcfTxpp3Kf7FkFrt23ydQkVbJBCET7jQf",
  "key43": "3BaxGV8jEBB8P1zj8kz3v3LbTfNUgmv16pvCF22Ng6mnghJJeg1zRYcSn453hGSZLpuq5f1LZc6cyR2SmZp1KH53",
  "key44": "VAnvHEwSnVEnSZGvU2YhxhjwNKQrT9T4qdSZGfHiDmjNpFr3Xg4FBNGsSX1VDVpkLvRcjdPEFA26FS7nh1aJiSc"
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
