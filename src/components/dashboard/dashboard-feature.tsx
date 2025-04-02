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
    "37TsiiuUceQKamQyciMbLZMCVBxZpaKXBJJ7oMvPyJQP2t6VqVTGT3bYYod4vVhypAFQuL6tQffxQUx11HCbmR98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WrrqmPAS8M9Gnp75gd2AX5F6bVopjLUrqejeJ4JSa8dnuAzttjfnvy74fmp4KYsXo5bW8GJN2r2FdnLZys7NVdo",
  "key1": "5QNtCvhQh6bJCbtoco4GNtY73NiESeKXwxbMU5bVf1yj1L9XD2BRbfMhoy9ee5pq47fGYH6Bg28NM27nc6ScDSZm",
  "key2": "3T9Wh1kRsxvou7dakwUFRyiYzrHfK3RXxFvYE3Z8ZLtBPpfxQhv1UFxW8TkiePf4EyWNr7gXb4TDDTePqn4gyd6i",
  "key3": "RnjCetxDCxSp1nb6PKuh9QJWmQjdF7K9ouwkahXxGN6ytVAqdEJ2rCCwarFDTQXp4244DwaqYQGTsR5cK4metXf",
  "key4": "5YeNaV75ZMo4YT8rQ5VyUS79kVruhTisx8J1sw3VifheaAqEgxnJt4WbnfM8SL9bSUUzMXrw38ZkJwnWEwcEvuf",
  "key5": "5Sb9ycWsyDiNtNn6Kd8RE1q9LRMVTBJbtPBuZtGr6pDZgGotpfkA4rJXpNM8NHTkBR7KAuGhXWVZ6HmpSofZ7VYq",
  "key6": "nRs93ZuBoozQZji7t9ZHdJHMpfZcXBapk6GCpEijQU6iMtRCH48rctWcBgct71twW3PpcXTpj6JSS9ywN3LEXXt",
  "key7": "5z6ve9zhDH8Bj1TcNkgU1ysenGZYFgbNCtNSe63q1RvfmXaznuLNLENH5M9wn1EunRcinsBDrxyAqy4KBpaDeWDu",
  "key8": "4yDt9MPFYtSShfcuKLVVLV9U8hmvkj8ex46PFerfqqXDeyKr5gytGUDbmMnSj3NMZXgBqpsDdWihmhC9UGjD2q8D",
  "key9": "4aGVSKuxg3JC5sXWCF45ymPNLYMcUhjE6ZKFbS6JPR7rgSXigm3PJNJXieLF9K3BVPfzTogMoGjNywqNeGBDc7A1",
  "key10": "3AS5BcDyaKyqiFsFhP5Z4i3Riz3LJ9CEJc9oMCuFvxm6UWznZeYH1UUXyk6nQ31M3rkmVdh9gSNgfUFQHpefkgLg",
  "key11": "4z3aox4Xxy76p2axRCtvCfTb2JWu1YAnES8soh8MS1Gw6m2NS7V7wnjb3CYMTNQeHGDtLmiVnAtwqN6V2aMwbBhg",
  "key12": "2tpB54iqaiv3jkG6km4CnTvGxzyorwAGyidePzUSjMCSoUnxhrSQqz7CFxa4BQQJdJ5QC29SCTDCkAetjNN2UWn5",
  "key13": "27tZqQoraHhNuHETUZv9anr35jMwzyKK12BM4d163yhdp4uy57ScrmHbDYEDob15WhX2AzeL9f5f7xfGtEyA2aMJ",
  "key14": "3HXDfCCEXqn4XTRRWFDZ2M1bUB1gxxTuCGg3RhXCfdFg5RZjyvnY7bgeJ5qP5WhKEtcsVfqo23Zyyfm83ATn9x96",
  "key15": "2ccJ7cRvtfFFwEgHwVpVze8J6599HzFFbxt38y1Q3Nfsww1nGLoaMtovEEuNUqLoTidqTJYYtdP7K5np697yaA92",
  "key16": "3TUMuUtG3hgqpskjCimaKmDQeAzJKBtboChzc5VRqDQLpSsQF24Szuk9Wi9xua5eFrWRRC3iqw4Tr7YTLVkm6p7X",
  "key17": "3D4E8rR6NhCnxH8yR7ui4Gi4zPUauLQESuS8kM4LWVEEA53wLTkQXkNLZ9cS2So6Kk7aKqiKQAqjxqqmHy7kMWBm",
  "key18": "5xUCNTKuyniNnJZpgdoyiiQaxi1Zj5GRRNiTAbwLDz4FRXS5zuawyd5v7bhF1m1UCPW4toKeyH5TGmCXy556TGNH",
  "key19": "8a2dEEPZf4qivUSZ1HfDdWfC3hJV7q22dAFWS3JQbwusthESTocgyAxysjaCBMUZfmEuuovW49wGKnUS7LWV7wq",
  "key20": "5Rt1kALuUmkMxaWyePCJmGASutJ5MqQ6X8YrhNCwXJyz5xGLpVEx26pHGme5TPpLzkacK96aZAVyJCCr7iEJGRUH",
  "key21": "3Y7Zq7MgxqCMrcweCkuSeAeB6WX1jKag9pJNoHmDaRMfwVX5RJNBpMszBeVpxNQMccuVj1pML59jW1EWWy1hPSfD",
  "key22": "4ayg474QjEJf4zsmSkUXp1HaUnJTMLHuWoCbqCGoSUT2q86vnDqHa2mLyCraVcDgiVCHN9NNqPMh6zAqU4xCyXAx",
  "key23": "5X2tWv8N6ETWmhuELd7fVVHzZQt4GFuAX4deHNZVsTq9fL9kQqiGExbJqthfnVLBLgEdMDzkhX8A8n5j8mr1B4AU",
  "key24": "3dLvLf1g3sFvf8cEoVJUNzq3cEE23AAMfvv5BvXfHTmGrXzBscKwshbxV9x6QpvV8NpXvM9ut1gvSGLvexciC2Wi",
  "key25": "3wFjNTPLJk1xd9zBqCLsh4xYtq2T4u99ZyhZ2xM96wrJAdCeHHKToMnLyJtJ4AW5KWotNVkuaAQVENqbWyzAaPub",
  "key26": "4Wt684oAHqD5fHc9dsddoCD5obS7SotkZTdRxvszCofX8kpJpQtQFKuW7L89sM1GQZPGwXiojYvr6bq9pXsswLwj",
  "key27": "2ZzaYDiiSUTN9c29zyvR9fZtJ9aRs8JmKsPX7nK4GboAi2ZeHgWvYSozA3P7gZt8EodMMJzJK48AdpJhBoXUjuGx",
  "key28": "nSgY5UfdWkFrSxBvpquotCzg3oVXomyvGDgzVSgnLrvNSJ2axF2gv9aa5UhcoBQUD8CszULzB1RiWMKrpWa86iE",
  "key29": "BdeYnc65xKpj3oATnBvDH2bN1yvxsYfPzKLigW3y3EXDDWAnkLwEMdycz1Q4gRr4fsRKjAKobhvFdAHf9XgJX3B",
  "key30": "4pmh9etZWst1rjoKRrQ8j3k4hjPUbJKGdoKhUBxVrepvUwkNbDH9npcs1ZzGeTZiCxTL4su4KFUZdEYDNoZHxxAs",
  "key31": "3SsxETyARgZiM5T2ido1VLqUfn3pr1nG8K5ug973tSM5sUUWGSMzGXfprfX6PmaL6QH72irLWdEV98DS6sXRZqvd",
  "key32": "3e2aBKK3ozwxqnaYzxAbUH2xTK9KbAKPse7iwtRMV6ByZcJKCHP85xEBpV7kQ4rWPkQM3bh4FnqN427cChUBU1yt",
  "key33": "eWazAnBa4DF4z1yoZwY4w5xzJwXUJoSwPpUbm1cAxdsSC7YrYyzQeeeGbcpTYpbTE3BncWopAyRnfmKUipzbBbH"
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
