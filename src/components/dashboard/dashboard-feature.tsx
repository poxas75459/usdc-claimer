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
    "2wX3epPZ25U7kiXQqKtJ4VhifFbSH4kpwts1X8LindoMq55NaxFU5RcaXDsoh7RiPU2LHKWLysAcrU8hEem8rKy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dyfirYWUrYfVVCy9QSFkjYiYSjAoo8dyqKXuh2YirFkLh3DmXXKwi8uBsMdFNshrVgqsLeavaEZ3NvX5sDaGbYV",
  "key1": "5qeik6wWAKtGteTueWsRxi4Qx7nam2srNWjtfEVkBECM7XCygeyKSFvRX3gp4hL24xj5AvzYBuxo5Hy6bM82tvs9",
  "key2": "4berVa2TjSnuQ9LiADZRVuAZ9hmp4yR5DXEio362mwPgZBK5jo4An7WYY2FyrnEANeXhCNZ64ZFEgUgZ4fLGXvZi",
  "key3": "BHWjf6VrhJkbxM4K5UKy7mhJWD3UgAfxqdSybayueXwo3SQ9fpCBYSBnexK2zC27hdEpoXsKFghDzkRfpjMs9Zj",
  "key4": "3RLvpVoAw3Nvw3Hg1MZHnRW3vrpUgsXCm2UMuXU5f2uK6W6GTMeuPkdnGoFRyjotHgaQBbyvpqQ8Ky9F8tcNTnVJ",
  "key5": "3g5hy3g9TciqUin5dv93oZ6TkpiXAEqWWrwMmHbiXa1EFojaiVCrTxbHnrsDF5nsTaW2kAHvBC9HufVWo2EUhYYN",
  "key6": "2uMBZkX5q2FXVHDw6e76wWipANy4i4t21vF1RQsX5JRk8UWghe4TW1yKPhwtyBewCig1bA7zLhRp4wa2ScePW4VF",
  "key7": "64yiaWGJj5NAN32AbpCqtuCHLwy3tAvt9A3puRykxHeq3QTi8kKR4GxeJukHBa7oT63mXrTbsZxBgjzmjidnsp7a",
  "key8": "38pfqXn26Q2scB3A4Pyyz8gYtCuixWgYGva12MPegEcQX6gWg6BT5hDnkATTkTi1nz3iwoXchd6JGnjS1iBkFgCi",
  "key9": "2cg9xjnTNWj2gxMAX6ubh3E7SBzTEgrhPESdgumsP7AWsRh7UCWFh3GbnSZCZDMkrCTu1j6bvuiSxAnVGkoWUx8P",
  "key10": "4FxruvcdcNq17z8AcrrEbpN4CswJAqERfzLfKJxJ7LAHXKwwnXZowuuBw8qApzoQQJSic4ESEgVENJjv6HCWBqKA",
  "key11": "5CjoF8qZ7wWD3hmExebSYSxrKvMSisAYUMZf6JLbb4ey7VvYdZyG3xHDahN1qAefK1GqJw2AGtz7rUVs3q8fjCvp",
  "key12": "s8e2HP7pPESjfhUsgN3joSGTHr8tyvqXM7hvVyohypCt9LYkaPm2q7hwKTK6ssLG5evY3EWbpzAARZKPXDX3SVU",
  "key13": "5yBEyt39Vn6ZvKFjKLAv6k6zmvqRh7JtJ75ztZyo2AyW3RXCc5nESXk15KaAu7JNjA3NtBGLhYTrQVHB151C4dxT",
  "key14": "5TPJF7sr5XNpwyzeF5fS2rufd8vxYV7qE8v4b39b9TimGqB3RYeFaPparU5JvHPUBWkZHh6fxav8JgQpkegWVpmc",
  "key15": "5uBX1RkCKtL6Ca5cSgscrpQLhp12ovfb8fbV4aUY7Y7n4YbuBfk4hRG7qYy1XZor5qe6aXbFGRBWwHg1xf17ruFc",
  "key16": "24PFjzUDrxRame5yhmEGAPnvwmC5v6TUXFqhrPHzaHWGo4gBmfPRZgr9CEJYGKjKjgf4Q3MHSxKcV3rCBNdDWpeM",
  "key17": "2d4N5bpT8cStv53P7K9tjG4zrmJpmanDAviL8vD2P9iYFnbMwAUVfRTh3G6dNAxDmkx3VF9E7mUE55exkwKddfSM",
  "key18": "4XyDi2jzWSLShsvnozpnd9zKa5znsz7yNJcoZgGag3t56v95zAfm5zxoLB2LfYXpttqp49Ysc4oU3ovG3E5BqhXw",
  "key19": "5mQ8cXf1yHALjLFCciucErTKfSAci7SKs3f1T1S8ExXJ23DCwQokNC13n43cPmCrbs2tHaTnZJEPuEfYoxXAU1M4",
  "key20": "54wVeXV21qiRMdYR5J8NWtgLrD4dFoGdWPpmSqW1412zuUErgfpKP6QkfrWVbM4bTVQxrKPeY2a8AHnk27ryAxTr",
  "key21": "3aZ4zqxiN5yuncXv1u4uK341uicwK3NUZkYaVDfun8rUBNuQ5q6LwWS7ZMs6UacWn1iFUC2zuZCXcrPhp3yVQGwf",
  "key22": "5ASRFFQfVpQGX1zaYnF9PsUWkEVbJ1koKbPyQUuBzF5gwxWsKWiXT9bRfmQ3PbPbbRMGL2umtspC3FaJ4TP2MNcV",
  "key23": "wcczgkMGpxss5FMa6PAR141eC3kLZKhsfFP6x7ijufBFpwtVk2zhsUtRWDF4pgqzwEzXNs5XzYeiSwW82LnEuXq",
  "key24": "2N9gFHt4x4F88auUAT1voAeNNmXYJ3mWfCipDuLJjiwvV3W3X1A2EgbVoxTx2Rfa7rcHbRk6mr4KbYP5UK8HYvEp",
  "key25": "2o6rR4Xc6yrnLGqN2ZkZoRzJrsVqTA8A7bjCKpuMqW1wnJ8wNBBFNa65YbdHvtYZVYjcM7KUDborc1GJNs4FxLNt",
  "key26": "2EyBgQrkboUfRcGVmc7kHViU9VeyMd3R7Y6vf1Q445Cs1oBwoaHnbHCzCGVCfrYfg9ic4kh6Gp7rKYc9GdAWZ77A",
  "key27": "46M2gaRHrkqhVVMa8Zqv6XTHfEnLdstpCBvwnNuu4HRb8S8MruupHmV5fJKr59wREW8HtxKB8kC39jcfgSA7vgR",
  "key28": "3cs2caj3wyADGoVxrJtdMtCeMg9SYSy3TFxj7SdgqppgPmxSoDV4EvYUKGL3kwtAfvum9z7MgM8rSE6mayP7UJMM",
  "key29": "QQTvc3kaFq1vX3aE2hmm2tjFTwJAN5ZDFwAP3vcdwQYPamR2QxkLcjZG5KU8v3oy25yGM7y8HaELqYZGSauEmKy",
  "key30": "23u2wazCMMGSkkhfHBFcv3qmoYh9Vh5ord5peARCmJaoQ9EZ11b1UMTh2BjaphKvYxYei4mbNGtSqaGNzU6Nd4SY",
  "key31": "5s7vMLgTnZFHytUfbQ3AefZT7VK95Syag3bDwvrTbweFUrgoY7PqdRUew2RuFo1y43zMGHSbbp7uDvmqBwtheBhe",
  "key32": "4zoNhPrthw5HcjMTbxBwaY2cjBshiinXQhznzRM31caM5LzrqHwM1XmzyPsoqvPkjYNHe4tGL76Z2PVmpfVgsyC4",
  "key33": "211hK5TqdMXXmBTMcxxNQ4SP6dTN41adiMydTEPnjcxKvkiYhZ8NfQrboL3hrzo5MpSXy5tp4gJ4gvEGHDhXFpn6",
  "key34": "5d1evmKwtTev2fVwpNzYh18gigZCCWuNqr33hz4QdVd29HE7zz66f27d7v2M6NeSfvB8rF5iZ5wGJ5kDANzLqY97",
  "key35": "2Bh4yCiuAUKusPU1e52wPoSGNkajcrtWoSowdAAjXYsWa38bkakh5kdqYdTEDRHdiZMoMcSfsQHA3rN8m2VzwWnJ",
  "key36": "41QLD2oAfp8waMnYQqx137yHr83txBDL5zjGMQvu84bdtP3g8QUSr4Nk9ifUPBNa42YQLAmuDo6oGGibywYyCBsc",
  "key37": "21GY372ayLjcBEEN9gQKi2EZQbRqQpqsJRs1VMLX9NumEi4d37X9ZhxhwyotDkAV6QE6LmmgLK7BEAD6VK68gEJ8",
  "key38": "xCBTxpw6UVWnbvQPhNxVaeL9SMo3CTCibS4cnREFU4by3T1NRgyEGPQvjkRJfHGgcPNjZyAiuFnigvVeU97PCS4"
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
