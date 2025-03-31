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
    "2cM6yJ3pwRAXobUba8pRaFVcsqDEf7n9XT8sTcs6z9CEhymVF78U7Re9jS6BsfLvWxqm2QJPHtey3U6PJ24dNPpH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49ykExv2SgmXU7mxukEBc59UZJGKdSTTsMgbzcykTnfNh21g6L4QozEK266fPHgsDP5ndPATW4SMcgqhXbUprK2T",
  "key1": "3XQZxwHgda3e9maYcMPMj1WwLw1Ej3ZwGJAjA23RdewBC3msb8mD1YBtz5Pfh3GB81ewAWh3thU4gLWnvH52sMW4",
  "key2": "5LenYCpyAdjvZ8uqCBbxb8LQd8XcnMnd6hhCJW5yEb5DhFCecU836gHjbYZNAETEzNwMagdL9mydfQJL5B7ZWdGb",
  "key3": "ygxJ6Dn6K2ph3YhE9NyeeZwrNMLrjS8qgvYUjtTH1G3xrjSJN7AbMAVB7JZmmqbmkG879p5cNQPwdTKovkFMhWm",
  "key4": "3izywcVFoxSr6fyPnuvFkqZqzoscv6gSz5uKMMEzQWcjH1YcmaGoHUc1mpZ3P7ozpw9JHSBVU1cJ3f9TbodwRM21",
  "key5": "JbKyn2Qy3cT23XSUvRKXPuujehdyka5KTYjrioX73JEBajQD15gapbT9UYD4xqRtaXs7DzgcNuh3gmynuvYDwww",
  "key6": "G8m1JUMJbokMhTUNdi9jSpx3iz1KtypP94sQdYtpN5A93WHA1BhZQ86EpWUAgeedw6syAgqWaeTZ9mswNkYrN4c",
  "key7": "5Yp9xNXBxHzdGEmC8E68z2gLKRwp7QVHFxvnwBqX8R58zDDqsK83nyv8kD1KagPdKBFQrJJNBcPZumMMtQAeKjSD",
  "key8": "5usZVdjYzFmxMsVRx86vGeJVtWX4uic9tFUTz2pwRknJ3m6AnM5gAQ5u1p2wS4qAJ6hdQMngXrEDYcdecNCS5Jhf",
  "key9": "3uska9GGq33Ke6wMvy2jxxgh6HpjGxhYkzZ4YZRMffuJBSi6YiFCktzLpnk5yHcx8ZR7Lb7a7M37JpyP8XjmEkEi",
  "key10": "3PnMmxwLS883QhYXN855ULCDmKy7qc7LNGyRsvtFuni2rHuDao2X8n8GHekv2BrZfTtrtDXB5mf2YSBXwR1iih2k",
  "key11": "4QxYbZA1zmSFJLJ5dgLRnPkXovpCzLcWbhB76SfpgorBj5dn6p2g4EVJAHTKoBEg5vpwARUsEfiTuJLsK8khgash",
  "key12": "ocyPW5pbfVKUNbZof7kjF4gwppwhjrmfRBZVwj6qWMTYGxZaTkrfAnwc3LHLBByEYCudKcaNH9qab5JyMo87b3m",
  "key13": "38U7uAd37fmTgYeSRhvdHHjrCEG4Nxif5gQeMpQtETmC8xHzm5aagwT1PQ1goEaRxo7XeoyYGz3WNNx6jjxahsPS",
  "key14": "4ppPmdAagnJBfX7gzxocUD5B1Yo5zM8Qg9rbUogj9DCEarxfZDg3oz14SgdPZTtxebVghckmtNDffrQPkdkSGfo9",
  "key15": "3MACK44oYH9xRFZxFdzwWqQzAN3kbLJkR5aJPK6cxL9pVBDVmVbV549APonWiq5WJDXWvqfe4yzR1rWFeVmtcQ5N",
  "key16": "4HV4o1kCM5xxzYL7MYS5MHqT1E6i5aKWnBGmhRMLtCsUBg1jyyYq1ot6xRFdriSnr77y6DvAFtSczegvzqHkeWE",
  "key17": "46yUvjtEMMiYg4d294yMCHJxYPRcR4TKUZtiGdxiDtL2uFCFxGsxiwDw2616WPwNvyzmscLtALGx73Jy9Ajxu4e4",
  "key18": "48L4YdR5QYzo2aDGAgaEPAFts9cjSh5xjsidYiMuDuHpS52ASLZ3LDh3gtN2MoogvJdyJeKM87PWB7E1zSpJ6p5v",
  "key19": "5QEYwjZsX6VLY4CCB74kHe2rh8FkHjefaFNMzqmAY8AgUFELumNXczCiPdGfmggC5EiyWJogFX244ECDoYGnfb1y",
  "key20": "3YTFuKDcq5hw2axV2UDBXWeGCnCxKarxsg7MkfsaigBnLazRCjJrophGEw3Jv6oMR2HkZ2scrbod7qbmpUG6fdZ9",
  "key21": "3Qy21D94vTmdudKLKrBBi7BpDKzYkxBhC61u3zbVpgR91nheVHUobZ9CXpeVwue5Z51yU6tbbVwp9tAyuKr8UxFK",
  "key22": "31xWscV3DGAABidco43HZr9XKcKdJAjJSq25eF75B83jWc5zqSHWy2VfXV3c2LqpDS7BkWkHBjismhXeiT8g3Gm6",
  "key23": "8aDwEDpn9Tm3vEuUskWmVu4an1J9HbvkCJecNbxGiKvK7ybBSpyjkDfiCZ6Kjsen95hP2mRLnEvMaxA4mbCjdya",
  "key24": "2yQCTnPZcZSjLk35pjnFoorAZnJsQJPnfTHU5aJ92nzLz9bqCFCTFcYAtPEbhu5Bn3HKZVngwNBcgUv7QAwPoHm2",
  "key25": "3xaCS1zvMzjhzrsxR6tqxLKt3TNu27vnKjAqdqkcZ3WYGFKVbMf6XBNtoaNStZGFYqmzdwbfxk2jMaAmtyJRh8Xz",
  "key26": "DxcXDmpFs9CqF3wtQHmhXCUgg8RsxmWSS6H2T2F9qZc7nCHHEHCuPtx7Fkz1zUCPVsm6ddzHLXMDUcfykjE9dPa",
  "key27": "5CcKWkT8suJrJDhZv4f8Gqd7pzznEM1cR5kzxc3eDJwiAVaWa3e89cSMe7u3pZ7CUpJ4YiVwKTqe1x5DfcQVGcs9",
  "key28": "5hTS3R7PaeaYfYPdajXeQbjQ2pPpz3CaGxwDDpChjAqsNToZS5aFKKqkRP7uftpVV2xR5dDcyJyDcPDQZ32Sc68s",
  "key29": "fmKoj9f15g99xLRthWNKMC2jXDt2F5BDr4hSLNirF4sCoicJzSBm7z4im7x74pzwWiMc9eqSc1sJX6AVUA69ihy",
  "key30": "2o1gZ62mX62vjUzPtQR1avo9nMZDuiMnCmHtYwGZrnqJ6v9nuT6xQAoN3i6BfAKhQtCvG9uKFKCGXmGrhJLFT1mN",
  "key31": "4upKX4sxEeYg9uFVgr3K2sxQFra9DLyF2m7xm53UqsGybZEJF429W9V5TU1ufJLBA365AYX7wG9wpXzn6meRJ3KR",
  "key32": "5L1rbha8ReCWvZBCXnfhYEb8MAa7dQ1qwR7kfAKBcTgu3T5ncGxfoxg3NcwARqRAdErvV2152qR8Jshf6WhhkNf5",
  "key33": "1UP64BkKy35os74HmbQ4c53mGDczou8LjfozaZoRDEXVGd95PqqoQ8YrQzLUoPE2pzfrozT6zUjc895Mvo78QyD",
  "key34": "3erGpq29VW242VsGUG4tEfvnRpwFFZKhWpxK8ULKJ7GorZUboLWUj4tPN8EtQXd3LJ4FdXm4MdvY9ShNakKWRNJ2",
  "key35": "63fbZY3uH2jFAGZEHKtJFn1zstdpoaYeU4P98M7tXQE8CGSjk8Sw4f8svhnSjSUJtcGLokmLghE5fid79oTVxifv",
  "key36": "2MAyCbw4h3UsPmBSJUoDGAJBRT5iHx9sVFC1TUqgci62dpWoyriHTrUxGXX5qS74arN6q5raKo9v6XqYTVeYJh5p",
  "key37": "2fGf7DRhV5n32j3zpTFLDu9hHbSetkZvQuhYSJxyjEss6mZ9cUQU4kUAuQZNyE2MubMgB8zWpc7C621diDC3gPDQ"
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
