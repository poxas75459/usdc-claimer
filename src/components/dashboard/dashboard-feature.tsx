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
    "VSmF1MWS6SA3JF8HTZv8KnAAzTqtKFC2vgKqSndEo736oto6nmpqyTjp6mMRaCTWD3NJcHVGVpWWiByGzedoTvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZJo3eL4oECoRUJS82XMttq15ySVheNGWF4k5KMgWjPjzHkrUrQvbzm175S26CFudCywjpehPQSNXPTFCWphaWUk",
  "key1": "5HZ9vZWnVnR1Td62VqiPTZah4yxv5YEQYW7zAmv8ePGmM3daFUdns6GjnvRCYQjgSAisycdmXcydjUBB1C1kYvWy",
  "key2": "5zs27Tpi8x6SidQw1hk5dPXugsRLsayQxPh3cW8dbmvBLeomKVmky6PuvZEbmhpiz6N1uCXC9yLaNQuawfFWaKyP",
  "key3": "ocY26hRViqHDc6RadoFTZctPXtpZNjGSrPR9GmFjXpGbPc47tk23FgJJJseHgsCqLe5XUQkumQfk1ueJ46Lq4vG",
  "key4": "21RsbesTJSWj6dc3FBs385RehvNXzxe8KqCDB6AMudGsDZcRCkZhm1SEBRkApn8LhE87wdFn5VSmr1rwnpujopUK",
  "key5": "4NrT9c3FtZHCNySqJkDgcnCXFQTBYHiHC58fRwQ5ZtLa7ckAWrB5yjgq5NX2LfoiaUgqGoAXysRWw9TWvh95QtoA",
  "key6": "4KFJJ4yDb4suZrBtK7wmZSfpB7H6PPi9BkrWhjdqTqw1UfVsNdhyGoBquBmbtDExWHc2kjeyk2tkYASJnuQTb3qs",
  "key7": "2UA5MBDc2LMnn8vEfi7ywx6DxGkbcAyAA9ZqBjMHkzch8Gi31ukEC68mH4KBSLTHGvKQukARSFfv8kmFUsSP7Mdu",
  "key8": "3XfcwcTb1ZPMnT63zmiQZyyg1PeuLHUR8D5iqKq6QoFAWS3H11GwoA3Zocb4FCs2hzpyirjqqw17nxWwxyGDp7iV",
  "key9": "2uzUxxpDeEx4cwR3CWWBLwctePcYKBgaMGLqbCGBrzASbK85CRBXzm8wdSC6EfLqx7hLe9qDFYM74HhriLyhcS1p",
  "key10": "5VkQyGkgbvV5GULbSN5MPdRwywXYML8RY3XCnVTwuRyv1k1Hh8NNunZEQRF2SpfPd5ya9vVfiBbee2oNr5B9m6pr",
  "key11": "2snkew3tpL5KRJkrBbEZVcKtwZJSENXCuC73EYXoc64VAaoPUPPr21b6n2PDi2iBzUNNne2EQCPGqzKTab5CByf",
  "key12": "2Djrnq5P8t7g5YfsZ8ANk2HSxxcsEUZS6hFZaV3f8dkzAKMvPgHR2SwwUQP8YjnBpQX4KCj57JVJxrXzBBjzsSFv",
  "key13": "vX6nsd7wTxvyQLJpzTfqmfkven9JtqeqztsXwmJGh7uRM6PPSBdTSZbp6QobnvkizmEprwJ9iqoDiu8g5pRHjX2",
  "key14": "37tYxvqP22DDT6odfuobGF2a9L6RWGqNY6EtDkQMB28uan8FESHTu5bvXtBdFmLxmLbq9yc2Pb8DaeR5V8LoMbqj",
  "key15": "hCDqzcqZRZAuKCj3XX9YZuG66CL8zxsXU1PSWizn5GKYUxhmUie8t9jpkWqTwpMKQU7iLEuh7mVbWsjfptTWWw3",
  "key16": "3MXNzGMSYYPhxKa9h9hiUB8YUNe4HuB5pFGoE5fMfzMRfGNkVFaSx7wGC4hwcnNuU4TaLQNmUvACHBLzdqKXtMv4",
  "key17": "2AWz7euQmK4WPJQNDBQt6ZhX2z8kqswtvNAYim9pGpe2ihP25BWJykGpGQtvgVb6ZMPJk8bS5J4dTbh3sP4i3eMv",
  "key18": "F7qgwTHt4oAVubbaKNcN4mZb7dbJFzsJNgu8PvpEZdhyy5xLRjYqzqiyDHzSvZ93rmkhH2mJphqKirhMsfCaRzU",
  "key19": "4Eav1qQP2M6Uzsn68ByPJ3gaeYkn7bAsSbk5euzoPiVXXnnRZsU7QgWunwZULpAVu525tZjTzp48tzpjjzhfpNcm",
  "key20": "3XSmpWGeLmmXj8scHTNDkSEM3DFTFoBHuHmxvbSYtTEqCfbBgCt4PxWcZtVZRR2227r2UzwpgXNgsfdKDvMxDHme",
  "key21": "46JBsNx77s5qkB3CELwSPLcpLvhLiVPRFm6cbf1jbfbNfsoCVkPTUgJ7SuuADJJnakHgHNVR42QYom36bwneMYCk",
  "key22": "35MHXrkJrLRMDoXKFY7K6QHQVhtUgKtvotJHT77Ejx2T1Ds986A56GG2nvq65NpJawsMNjaSiBiezYCJpDuf8Fnp",
  "key23": "2cGNo9rft4CEzvgQmrCGJkdc2hxjYtrBafA2rG9fXptPPY8UMVQL8Zm2BDERxtveXva4yMS2urbLLPs77H4bV6xN",
  "key24": "3yBvnHrCThkUbLa3rHQPQCDzQmtZBGyZxmp4bHfjWwQbuCApJWQJTgbHZoa1cEfALHgMZe7gkkxGH2gbts2s1mSj",
  "key25": "4fsoray6AMjnJcs7siLZP1R9Fz4L1JjNqRHSQpUZfGSZVuQrWTkDZxv4RmRdjT8CRqPLTL4e6ZK6HpHZyADP1HK4",
  "key26": "4NNUzhLg3s9VGkVY7F6pp2umu7XUPW3n6zT5oYsbD9MrUWNBgV5ZtjPzr7TPcpFC1K6PVPWJ6EqPgo3Z7GAHKBtw",
  "key27": "4Gg4rapC2wzDXUzo5FZAq6FFWjioXRbyPWq1FEQTxeaAtt1FgPY866V1fGiEaS9pKc1my6jZvJvyndU5jZ6GvZq2",
  "key28": "5Zv8gZsGPR6WxNQMqBYSSeooA3WHLhAWEUai4vxEGuypStK1EvwPVxiroz8rRv7RD7H9r4gbJDhpPJ1RY1kBY4jk",
  "key29": "azQrNSwYdJMazj3d9qUWMLA5jfh5KVfHp4M3ivkf1WKmAXZ8fsSDs8f36kPqP1GEDyDNmCizXtPx99MC2bFtYX7",
  "key30": "4oS2DAaJGvdW71th67cvZaGx3MdLyqYM52eoz1wdQNMTb8z7DdMktuuJBa8ni2TJvD1oTAN4MmwQ7K9hk5hpvTzg",
  "key31": "3cruEQSppYUFbaQtsL1wjCTVX3qiRvH55k93Fx4YEUUNZnY8wvwRepwLpncrmfhEkJewwhhSvJZH23dM6iezNxMx",
  "key32": "31kFqM7JVkocjymiPGG7wyqQZ8sjwGvVsaPandsSxi1dxYnyByS7UTkignoeLuEyfww56wqJqjFQLmpf8FUbmZjg",
  "key33": "3fSKVK52oJQGJzbWZrrpkWuxLbxhFLVxoeja69EHsfGcYBVDGzV6h188UfRMRec8hTq9FzU4ymeG7H4zPwAHqRaY",
  "key34": "5YMyabaiP2D58suaombdsyWCm3ZXsjg1KGuiARrN6ERGg7bJCdQBcDxGkxQfmdxLpD6xoyqmQ4ERkKnaMcmJTrx4",
  "key35": "5ncvppXUkFb8tbLgyeER34ApNzVSojnpvH3tR5bptwC788vgiN3qi26NKcrdNboQ37RTUCp65jUrq4hqCt7v7yyw",
  "key36": "g7PtqN48x3tqeJvnXmjuXCXVTcweS8F2hBF6nGWRZ2XeHR44rZtHPiTDje8QsTCRFFEJaxrrcaMB1nNZtqstU8Q",
  "key37": "Wc5Aq8frzeA11jNVYQBrZrhEnxnSnRuWYNKcX3ZnK9D7YEDgbgoVLRdGHmjvjgVF1MiqJ6TaxGULAVdshTujFqJ",
  "key38": "2EUoyHfcKt27YQ3yPBQcTnFTPcZ9kRjE3ocKZsRY8UmAEtwjnd4Podv1ktkUAigrh4Thp3VpkRWPUnz8HT1xmqgs",
  "key39": "5ubBC1wm2zgqfcnqLtcJwp9pGhcaVzSr3AX8ESYtjuEkGhJiTE3euAEKF69pijxzFf4RboWX8Znh2mQdR5fdRyjj",
  "key40": "4XZ4F2KSK2KAW9ir5tBi1x2TNUUTEmTagqoNYPNbbgZrp8ik9j8vZRNs3zkgKH4nvoh4u91HbwfoHtSxqFAB29AY",
  "key41": "3MGULwYa1zYWJWuWakH4mNeFuHD8nsiYUtc5JPQhhwdXiVyYG3yjAY8adymvfXWPfZsqGs883jjLZiAvJGkWrk8z",
  "key42": "39kAaU6GgW1edWNaNNF4Zo8tPz5dweLhKGRLkmxogC43UX8jFYuKpp1TzwjRBo5TEu94RexdsYcGEi8D7pAhKRUU",
  "key43": "3cZRpyfzVngTG8xrdS7RhD1Q1ywYHXg72XQZssxGQHNv1vaCCBhugDXWVjCEm6jauKkP8xLovKP7z6ycLX9MYGic",
  "key44": "4X66jDckxWpc4wdS1xPZ5CE149izoW8kCQAE67rtucZRSX17RZY4aFQXXi4qjdnofJ6P2pgLyPcM4knPY4G2T4Re"
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
