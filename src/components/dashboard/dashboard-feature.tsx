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
    "3u7LZdkPrQkfj4nN2cJWN3g7HfPnkxkW3UUKBw1RcbtAbGbbCJSfhB8eQ6nyotoka8FbzzTWwkgyy7tqzvCNWCzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z1LAmDohQ5M9Husdw1p8NMUgmfJfy9GAZpBo8TNAHBM9yTEG8dNrBpAGXmuLQDgW6ouxxqd5vXWyvmxL3GqhdVi",
  "key1": "yXZFMk2RCd57JHpHc7Yjm1NfPCwjFvabBarySsHpNTHFP74YVE7vkYDnHfLcGXD4dhevbV4CH5ZfH9PWdVQXELC",
  "key2": "4Pj6os3ZU668PmMUmjCUhUV7WZ2JERBxMb5cRDXmNakuUZp7oKNUi2n9VAsYjsZh9TRtwD4wirzkbUnRrf5Pyrup",
  "key3": "4pJh2ByT2hqEMtVWhrnh5sZMQ4yednQQ5eQMKzdYsnyEWzzT51HuthPfqEL5ThzkeqxCRKuRiY3Z2ShfqiS151Dm",
  "key4": "4K9t9ZZ6p83so12wm1CBM67Egacxd7zzNxdaFaz1S7XpuALjJbof7PCPogqKvJBAkXNz3NWMBV7KNz3QEZoHB6ad",
  "key5": "2rJP8VobStPijxoSWYsw5Qb8ZJVR5i3128LSUaZMUSA4H9W5JP6S2uZxagpvb8GUg8un95UCGo2yyoWWuopvnocu",
  "key6": "5KkCA3vfbz5NDrdELAQXER9dpWrbVy8rvXbBsvxQfjujbHLQyKGuXRwyPBfGpT3eUpjeVHJYdxUNoK7vp6pFJBbh",
  "key7": "3EzTJ4LxYC7tn2L9BD2d7qs3gN2ajWQFNxgpyvFoBhQeWjRRSaWukQ7R7XdwpWgJ3fhFj2HN2dsLF2ikwwrW1Skp",
  "key8": "59YctJdAsVtpm6cjqmfynpRCetYavbKE75Q3CozjaAEki7GAx7tDAbooGKwc81MNnQ1vbBjFqBMfkWqdHtWVffB4",
  "key9": "3KPdCSfdYGtmjE8XnfJKzthZ3rMEksxVKmuH8nsqwrkSADT1h4WyYhgKfP3qTStFasHE9CnC3Tf5dz4tBzyLSxtX",
  "key10": "2J1pj5btjACEXzqgtg83yw2PFMwzRPc9zi1bNwLaLYbjFzf6c58qbxFn7WB3zAyHJk5qsw3oAnX8qUi4LzTdpJFY",
  "key11": "25v7gycvoQwx2pTQ84cfxDJSSEueHVboBijD5CS9Qzw9fmCxcQnmcV4nntPUr8NaT2i1hKpSDj2xPafvfsMhpJcx",
  "key12": "52uVFpBGkGsUco3BCYWx2erQwnsQGCpxCBzTHFzRv8hcxydGDxnu9bKfzc9QVus4ssFJMR7QjWWnDoabycJCjJZ2",
  "key13": "7t4nAugiWP7nW4MY7zjiTdkMvcAtNDYREwkEPj2JSZz6bRbDPbsEQEc5LzSGBW1vp1ZQVfSn41QqoNxuJG9A1SC",
  "key14": "4nTxSp9fMfHf9Uqkh7fFqZrJ2PeYpp2FtEpsFy49b6EMkPVxKuvHUMvSoM3KuLFXL6Ji6Pwoj9EGb3oGzZTVGWnB",
  "key15": "2YoyaNJnEEbG8oAeoBPq25xGUQTe6sfaT6z2XgdVv56AV6YGT6LSbifpvp6z6hHoGXsSujQFkLu11gHA9GcRKSRA",
  "key16": "2CJ5bJHt65VQxoLeLAsAP2dYxYUHiHs9wmb7FFB9HxpzuXdyhQa8Sc8Zmu5v4DztfNYPRohLSvSFQaPCSToBYhNb",
  "key17": "xHBju3JnQZfohqQavjEAthTDVvstR92GUk8PmiRwRoeat9FMGJ1epKX8iFH7GQxXCqwBw26n6Nnd9VTqEjsGvYS",
  "key18": "Rs8kY3M9FDuNjW5RyvsG33LtwnB7dcZPnyhpRyjqkcEPvLxfWdS3MxTDqa8mBbkhkNBesh815WnvHbPWMpY6MJC",
  "key19": "3pusvQfbTPystnAhtFHBZKqi5s92VNj2XAHPfHAYxJLfRdZ1oby7NbLhVuz9HpBdmm3ofXAyxr3rKQ8NqydbiYXz",
  "key20": "5YSKdeJ7mQye7A32PiywhjWGnFCAgLKRucmTKgLq16ssTAPUj8vhskDpPCgVYeUNZ17suFiMBvda3mfVemmMeXzp",
  "key21": "49zmDVnM2QGUxJZgBZ5AMtX421FAH9ikYLpYPudoBQyvxyWhRAbPzLhuygBpZdKQwgzHL87qo2yUnXtFiGwJV999",
  "key22": "4Ezio6ka2sEFcbHgPKKHxmGBQ83auQ2ciLTzbLUgxbdE7E5Bsfr3A3BkDcbRBRvN2WLcJYSKeCu9QaYM26b91q43",
  "key23": "5n9K6tzGtBiD2BcA5yi2ggGajj7q7DgH5q3b7iSAJY1q8kXDyAUkqe3VykEwekneR8pae5QLKZBKaxjHQWT8HZ16",
  "key24": "5iR9154DzZtAzUV2ErVHP49mrcCPe4mLhNTFzJgxuu2cd5wnxtViKW32siUpyYL4JPzXcXGur5CWi69nsfYdfv7U",
  "key25": "63V77vYGEz49j6AH85f7pFjMcLWLzkGbh1wHj5eFME6Zs49ibtT3pAaCGE3x7Wqr5MszGYvMM4gn7fUuhF2Msj5o",
  "key26": "3HiB1BoWjkKMnQZBZjTs6gogXya8oKBJstv9Lj8m2AZhJRAE8opikWGsWRDM8A4HKtXNQZrbGQ4enLZUtqokYDf7",
  "key27": "23KafhcVAgbcbMbfDtDGEqbk3nKD71CiD72NiPidpaviutHW7dFiYnPVgQFcXiZYRHQ7FEpqgeDnht6EWpG42L7G",
  "key28": "VUs4rZcQbCTXjsHadoExTZR2QXFCAc6tANqkRjeAtXtKipDGDjSM8BfHpghJcLisNV8nd1oeafjauHeEUejp6RF",
  "key29": "VMeKHciiJMAxcDkdVxUvDSgTpjhF2yVSqeQ2QXxa3GtLn37gSqdHtUXCjwWwKEJBoGWnJ7oj6SWYL56k12A2rME",
  "key30": "3joVVPuNY5VBLxAD95a5zdKCFmD5z1aV6TX8MJB1zgCEJGWUqKms2PcK6wNsxojNta5QK5P5umQXq3GVvaG9TFDk",
  "key31": "MxMREZJBuraZrjn3pNSjnXxugX5vsxTUnzDkxnFV9FJnqmtXW5j5ZnjupN2457HBs4J4Vth5N6bbfaWrZPaVyQp",
  "key32": "4Uuxa1hm5Gfgs1J6LHjycmCBqxSNsoSWjQSMg6u1vniyfn247pys36k7dUPA1jPzcDjwnFg4oTUFGmqedSNg1g1K",
  "key33": "4c2pp5fUVtwxky9pBsFwFZQx8mVDNrA2sio5DQTDXoJDakqBJxX9T1iPNEgzgVsCgZYLqN3YLy7dZfBo5738Bicr",
  "key34": "4KQbLvTq8fYfiNXn1XfhkgWr1pqZbWds6ppJJSp5Qbz2cTqjUHPqNvH3TG76y7fx8R7rg9fmhgyp2uHcsvmvY84y",
  "key35": "5cs2RCKQAdWRLeLvjdXFfpUR9gjUfpprrGZgJPvZUFxTVyuSex9HXET6DMpDQUm9v3khy36k1szpLoajZxe5Br96",
  "key36": "5i5CMZn4a8DjLPVg7QyUcLmyRrh9cKsnjtmVFA7C1kK5MMLA3DnRGdf89FNiWnkSif4feZTvBCN7KpPmGeU3oETE",
  "key37": "3kMNz7P1AkKLzBog4grNv6fYdgtDQjYRvxAfqrHk87woEGefT6Fm8t94He5BKMPx7gpx5snpPzRG53hp4EciKekD",
  "key38": "4bbU4HZuGfx8bjmMSAHjW8m3jkSvP9frmAxrNajzjGUCQ25vY6knFhjvptC8KR36Zf7jckmeL5efUxzPfGCMJNqd",
  "key39": "4zxbg5t4o5STYtyERWnNKz8yLVxpNLmwNBYmUrrZSLhp2qCmpw78C5nsVzrJDxbvrvinZgwwTGjRxPauMP4A4oX2",
  "key40": "5JZZFNuiw2eS683dEn5MA4YEMdzXcCBwes9FyWcPA2gdG98m42WLeX2brFTd4iQiRrN1cfo1o6CHaiE1Lj1Krksp",
  "key41": "5Rf5Hs2YDp1KGCoyhh5xBD9H2nDK4GJgGV1CSb7kktk6Y4hkNx8hWtQtUDe1Bu8oSLc8pzv2cBTYrL665CoFFYRR",
  "key42": "5B3YRaBc6CGCH4DDZ8WhiJornpTmE5qt1XevCfix9a4umc17AmC2pKCNcz4ZGWSqTmT7WTGGEEvH2Ev6nQD8GV7h",
  "key43": "4RpGe7ySt7RAQkDqNWGkdjCmDhKREGs97iUj1wfitrYUidxdH7T4BfiLvsx226FoePVBLR5yzWAv2AdG4pV6hg1x",
  "key44": "59qyQVpYv7M5Y9azeDQLQpKwFyGg64Ktzq6TbUCUXyHkxfB6b7pvkyhLrnA5yNVGVuDWqDrHnndYPLwv2fGgYDoi",
  "key45": "Vbf4rswF5Gvwn9Gw9pqgbw6yawfUgxzm7zBx2XYiDD9qgEJA4RZfbV1oJu4a8FiPvA1682EPHU6R3H2z2zsi4by",
  "key46": "2PRjjkR8XkjTv3wDYwV28TQr6enkEyBC9GSiyEoLBPcNkqf1Q1mMMicu6bcUWLFXkR8HxzphYaMEkujxdDhYJyQM",
  "key47": "5Y3pGMqjYHnDY6tQnz1D1EJQLZhPikFiQR32eqWPPhH4XJeqctZRbtCbKRWQRxrV3sVyL3tSwHYZTxC4FyhwBdcx",
  "key48": "3NfykxDqdEiZZiBpTeh42cG4sKqzFrctZHAQ8iHg8KepYp8nKmvACYivbUawwFbm7L8NPU7mT6cX3Yz4SdtYjJhj",
  "key49": "5nUFt4tybFWm9ZpnJsUHW2yX3K9SU7FevN2MV5Ph9B1oS9G4vGMM1pY6byApmae6TM61bcv6XMYZdDbhgjDdoNqK"
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
