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
    "3NNxTgiuMXkTvyVTJQsysTssXsnESv8topi4rcTS1TdoDJ44oyShV43jLd1BkkicUT81rVaAZj5kTtUv9vTA8e6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rv6Ump9eZao4rySBXK9TSkyvf5pCrWY9UopvSo1cEYhVEPSWw25zbi8y3TTJXCQmUHD7PnYwqfVG2ZXeQhsQ1Kf",
  "key1": "3mtyZ1HK4grmpPALD6YQemhLRSgaEknBqP57y2x7PfGQXs3asYrcrAhS7dK96BDfMWB3LG1x2g46YAqKYugyVN6D",
  "key2": "2xMtTBNRAqpme1pvwkuwzF6VMm5QuqfdgvvEWUmvXE8QB28G857nve2dfizoEEFhvZCNVb2kW4fCXZCBLAPwdz1q",
  "key3": "r7ynR5TevecLrcZeqowCiY8wQVwuWQe5zsA2KTosmLLN4jbtzhYLFbfartFKopdLW9LJWrv5fkV9oryGvm1ZnsW",
  "key4": "3EcFyGnBLXKqMQR6LhGabbrHFoBeU9N23sS1ajj1btkPDj7HHMs7GpnM9VKJt32BxmJGaU7rARPXFBvhXJ4bwx7N",
  "key5": "5J4RZHFSbmFwHrM7VabGKFdtcVMFLThjbTE16nYkTDKkVBLETus8mSATqoHi2qYDcf2LJsGWDbz32Q3N6iPmycgP",
  "key6": "279oUBqgMKKfT2GT3Quxx8HYBubKFWjiTjo6KtCWtSp77WG9PQPi5LThKKK1M9kQnb5MRA6jbHhwp8ScLjuXDsPN",
  "key7": "iQsAYgeuTD6ChpejQfmEEzYxy7r6FvMRK5JBmL8danP4mhHYk21zdzfdks3BAesjh3bsUSmmVVDGmoCzGRbs86e",
  "key8": "2eEVkuP9UdqENASaf9Kn7YoD1BiyU8DW9i3mHx98Rgqw5QY1ANoeMTyAAdnq4dsLJbWkL7aH339yAt4g94phyHfQ",
  "key9": "2PWAx1bnyFf8derad9hjzG7hZLmGWoPS9tMFsaqRnwazsjwy4djcn2aEw34zL8gwFG8jcmkgEExmGdpsfbXg8VjY",
  "key10": "4nrmGqLUmwhjkBiYK9GCA5Xp3TqXevmmnJyJQw7kqQ6q44zsg9YAVF6dD9mncEC1x2kAkJiEowUEfmKY6KgEPv2w",
  "key11": "5S2VKq3Edoaie3DWPXWDecMVJFECVh4CAgXgAqNMxRwywFtQ6F1JL2PbSu7noeL8c7q24k9ACSNMHEeAiy9EcfQH",
  "key12": "G8oLynypxBLPWD9Rapzjp6LpXS2CtyGrfawu88ctboLanZjecxtpPVrKP9NEEBiWogbxkix6UgvJUZQMSdPYGbi",
  "key13": "98hNF58gGNWaFP27gtWXLHXbnW2zU2iFu7BoY7g9U1L6rFWdYDtqxRc9wzaKWHFh6Z3od1iXQZuo5xLykzpDyGn",
  "key14": "2QCLyjs48wnpecxLWjJxnqVVR5dY3SqnTwzkimvAtCtXmkktJ7tUx5BLVd4xHezmJKuAMoB8fztL8pAj3a8P2YQf",
  "key15": "4CM4gQJoYmskrAg25JRmNGJ95B1SURtNTkReKkcYLYpJ3rkJtcRJHvr3pfgaYjnPs2ems2ciWQLPfME32XmhaoL3",
  "key16": "3NYsPkcUTuscUFqRzA8utUVPXre1QqWn3iM77hyHXtsrbsX1R1q9nTxiGGFcxxbydZQ7YxAgxxrs29djWafed23X",
  "key17": "4bL4tzm7GnvnCvqEr3oCpimovf16aZGvZCyBc1Q6bRpgACiqqYYeeLhNYM2qSsJJbfvjwsZeLoWqGdTeACCFSSs",
  "key18": "fDSzQpA7sS69F774otPUrthqR2Xoa3Fzya6nQHsj3Ao6uqA2pmneUPdNG1QLCdNnmEUbegxvoPGfQJuGCUDsceD",
  "key19": "5kXBw5VEX2C7miV9q8QLxpJqCBbgbBDD16q29pCGDtcg7Zpkq5WvLkV8mFKewWU3XtZqnHUENxXeeZ1eVQAJTFUt",
  "key20": "2xinEjojJN8XjqP9AeVrhkaphbFbZY26sPZqxFukFeRB1Q5STKCrPg1PonV8oqgvcd8A7gNVVaxYe1MEYe6MKGhA",
  "key21": "4XdjJJhiPcj6wbTxXzzWThEjbmaHfSXumpNv3tKgWRTMJ8smL4ccXcNedUyMgkKghwhAxtzK5xZG7oA4e4R4JZX6",
  "key22": "5n6nh3gT8u7AwQsgi3KVGk9qARFaRH3NaKk1mWCWFtZC38DE49nfa4qhJqfZDjvjDuitgYqcJ5dz8urej28JBnkc",
  "key23": "4Xb5TZ3hAefqKNDwHJN9z5AhnwUyQ6Sr6BKZauuw3f5MfPcm4Gv9h8qfRf4nkT5FKeK3A8K3fDSJZc7akycJ1Wh2",
  "key24": "525MFnTmw3DTYpfUfZamDQju8gx55c3MyqN2Rg6qm52TZU37gyLmmAkcK5wFkHvFyq9Y4o5zWJrrAnX8DN2tSsLa",
  "key25": "5EGXo38AUcXinpJYrrJfeBhBEGZjKvVtpsivL5YkRv7iSU2sod3CTZsFSB4A1UtpuqcrHvKh5ygGMMGwKFHiCeJL",
  "key26": "PTTmFmaDXhtaqFmB95R6rncvtReQwQjLJXeT5DgFHUVDpQkxV6SVSSRtqBgN2fnZqwH91xQ896RCZ6Bvg9JMpMp",
  "key27": "3bwQVdms3uS2P6ntPAuBftLaZVDviX778gZCjTY6hEyb8q28xFn9oiUufZnkBPg59PQVGWAr9FMsLXGmLTWVk4Eq",
  "key28": "4AER19jtazRtf1Q7Q4qUZ1gHqhtxZZs3F3dAkVUkVb3sgmxdHzwZ7La4rZvPdJmerLahe3uHrjUv7fG4ZVF1YqcS",
  "key29": "3PcrRsEfgVfRxP1r1wQewRTisxYfPa2sfTSG9m8FEzBnKA1dGH8pW7Ck7gky15b7XJRe3QL52mwMro7UQKj5Y7sB",
  "key30": "5pJFP3z9HAMfDsK9N9j9cL1ka3YSH89xAVrxFC7mgaPyVvyUAUdoL7qBLTiZiLan889riAkMD2sZ1psH2GfRtQFG",
  "key31": "zchMKZN2y1BGGExoEFXRKrecTqBaK5h4t8vkMzStB5wNsguJtuHuebW6Sj7hGg2aBw4fnQXvhJy7Ei8Tb6aee21",
  "key32": "3qdW1CZRsaVLhE8SsXDDzAzuUbShZVkULpFCcKpQy47sUUSMzDraYochKg5BtE17396SyKEVURDryNoVdhHxeew2",
  "key33": "4hWL4NBiK9kkeeCPNztyEjbjZNrHvKEY5JLsymngBwpV3PD9yLybfQa31VsJuz3Gkuu2cTFNCaGWavenUi9ccQjn",
  "key34": "5nzFJWTXAZ8qCnfbx3GdekocQyZ6BLVzhdxxibkcbvzbwavTqtNPZ6vwUFZMt4yEZ9db8jj7HDN9Du9EY4zJ8XQy",
  "key35": "3bBSaKJrsBDFEJWcvUN9ZQQ2ighp6UDuPNXQRYMJk273irRKuar8BgypxDoA1mBxG5TgVMpu6psT6V69Z6X7fDXv",
  "key36": "4LSFpUkz8s16Qk1VkEjETc5qJE35pSnTjKZ8TFkTVSViSE6QQGTptk5fXbfnv1GXpHHAvV3aFs7Xa9dHFoFz83ws",
  "key37": "3fTiNcA8FzuidhvKF39zZxciY1kK9ejocRMH3nbVXWj1sUVfEnDL5QLaifU5J9prY4FcxrBAWGwRadJd8YQXvK7P",
  "key38": "4o4JADtXRCJcvdsmwtnSR3iHZAEoeySjaHBomAu3JWiihyntJ1EhA5EKt7EZj4sPvKy23ifKf1aeagtqUSkyCyWg",
  "key39": "2bDrjr6Fcbt94Lsy11bRexxCwArmYJ4WzuewgBUjNizM9xbtWdS2Se7L55tR5gB6br6fV5rUfL573Jtkskhh4qo6",
  "key40": "4YFAsy9Mbt3MYaWownyHx3ndcjnsUGTYByVgvgXbQWw4Uxr72Pmk8QY22eEqpoxjsxLEHPUKZCKEXRGsRheP8ers",
  "key41": "3cwB3D55iGD6dXHKkfTMWik1CvevZyJSRU5CFvc4Sz4LS8KbM7Cgv69z6YwaxuN2KvV6bkTsE6frTx2yHyUkYwW3"
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
