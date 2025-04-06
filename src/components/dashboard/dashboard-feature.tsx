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
    "JkUCwRxJrh1f7L4eSasE3pckfbuwcvnYXKjstSzefM9SuU7irQkvMWxmXpFAhp35LDHor2vVxF1GyY9KN3soN4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Twz7CEoc4EgZrEm5rJsgmsQyuffsqUrSUAYtZLrTSC4FQXvrBHAE2anobCMZtSjoSysvLL2hyqn9oZ9k48ZyPjQ",
  "key1": "57B4dDdsmwjEvMiV1eSqRDSha7xMV5e6tUnbTPdDSpTQngFTqTTyzv1v8ghKCuE9Pt1fmfsDi8A6qMwNZ6B52k3Y",
  "key2": "5Q5vy1jKE9HEUn9oKYr7AeSYFCYPtc2dvCrtxrV7Kot1pkBX7rmqzA5BdY7o7Lpmfy4ZPAHmifjwz8UXWFPU5qBY",
  "key3": "5FxHrvrVFrAjuFe6Vs71Z5sGqWsnJuhLktCtJDntd9iqUKGSuQiSRRBj8TFqRZUwpC8LzGBPD4K5vpzZ75DBBXw",
  "key4": "2Ew91oMpAAw5VX2KVXf81b2p9jYjrTfMbpCfZtFqCdmpommUKg1c8GrXShZFfqyts2FrSrTMKLu4PikbVgDVxgbW",
  "key5": "5whub7mbTVv49Qs6kEemYHQfjfbVCPFaqeSAseXMQZYJ3ST9chQLUdiSHQQbQznRrecQpvpk47odzKNzA6vcPsit",
  "key6": "5xrxyNv6DNxR5GYXGpc8P4bQJrb5GKbrQvYAdZtQBB2oSaSfrDxYpRAGP5AnPt9CPXMYeSC5iiTmtWDCFA5H15qW",
  "key7": "2pJEsNwmJv836vkJCgHaW9pNFkcScn2mgR5XzjApQ2J2fDue5cNpnW6jLMy9U9L45xTTGBWKkAndxvZzXK3N6FHG",
  "key8": "dFcnHz7NGpoNKkKst3XS8Wd2BtVJuTpZxsVrnUQsu357DtH7KpwddPyyGmrdi1G4pxHmLkZTGnSDouojzoN7ukt",
  "key9": "5zKwFF4WQfXsSUyh95Bf7JJAxx4iKAtTgrwpDEU3Mh76AdyNEPWjGtqSoK8kVGBnuCESxh7wEm5mg3XXCSuqimtw",
  "key10": "5XHh1bpoxyagk5NfKxu9bZaKdchJFkPc25kc7NZw3wKoon6obKrHqeS2Y687ygqTATnJpXec4oRpGStBuct2UNz4",
  "key11": "u2ygDDuJL8Y72zLofq784go8V2jqnSjuW2XCaPktFC1F75JyWKnqyWPrbdTAyddgBsBTDXLcZQ4BUXjBLmaYJui",
  "key12": "2TCdfDX5TCJXeerrReL6v2o97CH54Xynk5ivgatrmc4K8BkNcFKjzK4hiqezRxWayLCRrHZX2aueXmy62rSKZxZ6",
  "key13": "2Xy4CyzjYg2KCiTyuALZxyqriSvpUttVTeyVggTYHZiY6Kfv2do2ekFbXujZxDdrfePeKMkZx9UL2oA1ZpFNcEXk",
  "key14": "B77Mo7bQXoXmBVeACumg1LfAGnBdYXht8P3z2xXpVrLMxgqstZj7V8LRxQNBpJ8HwcCDYRwuU1Nw4CxM1bJdvqx",
  "key15": "2cU2sLCM8FTyZdrP3Jq3weUYFQc8v6ofEjGenVkumkCxDTHYtHqZrF95QU9hy8MEFMxiF4bTVdQ713KAnZznPgPD",
  "key16": "3n7QRpcwpJ8miAgA7ChXZJi7gnrz2uMkM3Kz5MyCjpYZeoecLEXJNghDKTKMqBsUtmxGsAHpNCKL1PNY4ENN9ZU8",
  "key17": "4Gs6Cn9ZPGFZDfkD1UG7dne6mMaKf6Aqj6iBt2fY1TLt7PQ51JF1gzYqRwMZGDUxsCCFWBma7pgn8enx7jVTnDHN",
  "key18": "4eQuyG3ZdqkcgojgfodwizwJDFFC8VGt2xhuAAFWpRpzmbeEobcYP5Uko4rXZmKUhFTyKBYRhFa4Kv7M7Ti7MkAw",
  "key19": "1281NHU2udohyk2bhEnKL5UFVhq9QBcW8CFqS2HFsUguuoXUZyntBHA6uP5Aw5cCkkkffdhjuxWfkrttzkrFypja",
  "key20": "5vJSTEcU4Mox7phC3praB4aq9iHj7WMVqJzsrGocrBvgvRQ7fXc3BcAMk9pbV99BrfV5iGuyBaaRgQ5ArPspfVRS",
  "key21": "56rz3UX1nykBuMMtaGrJUCZ1YcQSqZFSYPFmGCgpmNQXYwARUizsKM4oxCHsoA4h4j8oeJNzofx7PxZgoUmUwju",
  "key22": "4qhthdhwgSFFLUypMnPF2sD4Yon7D9HVsgQGoWPhkvkfJmGeB1JRz5KCmaUfSsksrEWAHX7avSf27KSmyx4qQQJZ",
  "key23": "aQQGeBTaoCmxtoTiqJMd5yLW7eZiMmVrn54MtEG8eFPkr8QkeTG9gVyCcu1n1sQaeiEYdAunrb1aya6ja2zuHV3",
  "key24": "4vGdWaQwfTFbiAULZJakCFdaB88DoohNQTJfSiGEpC5mKawx6AW27a5JDusLXR5yEX7yzGxQDawzn5minZBJ8S3d",
  "key25": "5iJzm9wQq6HUF8Tvks37rHFahqL66zQCKM5LWRQiMbahsT1q5peqkxz3XV93HWHQKYpGM7Don3wdMdNVEUQUtmLR",
  "key26": "3FLYRuNJginnoBhLNLqSdMArnkA6AYRSMTdFk2KGtMJjGczhccw3qqtoUaubNeADzWZnrU8KKRsVMcjUpVYCoNuy",
  "key27": "2s2zvP4Z7N8AWhTvgdfUK4nn6Am1EM1zMKkgYEV3u21XGWmXTvv5QPnvDXjsRZHqNLdCQvUgEmXW1NYxDLqmhQr1",
  "key28": "2FFPxMoLfh9pEj4EbVL2dbjvpdxzvYxk9d9ZWVNDkUTRV54jQp2b8pscMHwB2ggZkgU1CuJtpoQAZ5pDfetWrEam",
  "key29": "4ych5uzprmvEGQ42ZhY5mp4TjUJ16PhZNhKzCmyjPQpZDnmKohkVE9Ng5Tq8dbPSsENaLcohLuM8As3KN7hRXDEU",
  "key30": "rcF7bdJwYow3LQrN4u2NiPYcxSKFRcm7ZYEujGBwXqD2nXBWT9NTtdxe2pk7o4TMDtDh3Ku4m1NPPorAGVG56fM",
  "key31": "N9bY66yCwBrWhGMhbwkKh9p4zXMh9zX87pbebyc5b8Ta43KNp9y8TkNajym5KtxKSGYYnZyyVzoyQbUmAaPMYJp",
  "key32": "4rRUP9HkPvyWNyJzwkDcFDsyae3qSnEa9dKkoLag85ek9nXu1MsSwBBqBmd2qKYh8ZHs9jX214ncH32yBZw7LMTB",
  "key33": "61tmPZng3jfjftcjxfz12cbXKhzpk7WdujRYf9u9mjvAhRJCa6VWDYDTmg8fDqb88H9E9nZQ7g75sPrhpaVRbJXQ",
  "key34": "4t4MChUxBy5BaMmbm2pzkZ1WKfHXiyCbcMZWYUwxPvEFrjFJzFtKUPDomMEpuz1ErcwWrWcF5RrQGiP7Fj8eFSPZ",
  "key35": "5H6De6uY5Hb2C94eGmxrfK9r1KrUQRr7SNGj3HxY2X7S5GqnzmdEeMBtWgd4pKQBFacbVi343zTnHBxGZMEpe57w",
  "key36": "52rDifTjFsuxwar9PGjatoYp6yN4bg5tc7Qsj4QaydWw212FzchLRBQbggq89w5r7dmAhRQGm5GQv1G4xeBcrbBA",
  "key37": "5btds77z2rpLkjKAisFxkRpnqn4ZZWcj64MRx8gn3Au5cbAP99AfbkcKx4yQpy6yGXYo2N7CvswiciUoFDhrSmxe",
  "key38": "5jK9oBBzPbLiNY2vu9SWHb5T4Hg1Zhjue3Yez8ckBYiyop6KM6HYZ6TkBaBSNSLcX3G1GBkSbwjSmKN9kGea7NrH",
  "key39": "2VJUH4rRkL62NQtyTsoSY3iqs5xqVx4ZuAc98Zy2nj1cH5pcgdzkcGNBdwPT1YYaNFKdhqTjkAdBMsC5DTw9Lzwp",
  "key40": "yUoHdgQW13dX7NNUfnZG3fmkrXX8W2QfdX1eLLgMPGL7hoAVo1rtADAf84TvBxhc7DXDSozXcU6sFNKDftdzUgw",
  "key41": "5k7hA312nVNd6wX4Zpr8mbDFgaMXWV5cTH5kMcu1a83JaUvLJbmmyaWzUcsqmGtqQnPrSMZbqiGnadM8h8YghGtV",
  "key42": "5PVb6CycQSsVKKQgQk7dN7m3iyFSWc5X82ccz8v8PAw6VM2LGwmSQ3xvu5k6Lw1diyCBtjGPXgUxWBw8JSfgbWGm",
  "key43": "33PesTN6cymWCw6R6GgFzYvcLYmHVeaWB1ZDfEiKGDnkJYYYyP6J5tQdwdZtR4U9nHUkJVeunwwUnWrVTRCwc1Zq"
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
