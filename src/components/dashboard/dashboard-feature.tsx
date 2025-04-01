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
    "YivKXpdsEVHQF1Fimze7LzsqdgX5Hcya5APxkZxFPCpCmzfEHwMgZu9zinSkvrNj8jnosuYT7FuNj7MAtfGEHn8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ycwQjbtf1uJTYsqdaoGnppyEoiquCxg6hzdrk34hrKgCjcqLBtoeYGCKreYUBuXRH1BzPvVYPY2BHqQEZbSmq2L",
  "key1": "SG3KPuP4vMcSYSm4yaGYxHkjyD1AqTSrsYQyRdbuEeZc8aeQms1KtRt6jeXfV49xQ9iXUtAqqBbHypKAdMBMzvN",
  "key2": "jtNefsjYmRudFkxrYV93ZvaTJWAGJejYvjXARoE3rLzJvGtsTFU32pjNkuww3YzRjH7jiPRy1SQhyiGnKhvXm7k",
  "key3": "4B1wzUFDJgWajZfx7Sy5pnSFp2o9WNK4tjGZozds3RzwK4U6MGjQMCru9nWFkcufjxfoj3FaWakZXW4chP1Ctf41",
  "key4": "yXVzNg11xeJTxQYGTMmfFk1mWJzKUwkodmrCb4TRgcwLStZwKz7PFAJRHQmjMdqA1MvQ9Sr14mT2XgBWnsEBNHH",
  "key5": "3SEpHcbsXtYDKxdzP7PWSL2kGmsCkpjvBUY7oaxqJtr2wGocxd4HSv4L7Nncgw1pbzN7455yY6p4fBFVvby3p4c7",
  "key6": "thxAzJB5yDnXCkP9CjWWCUA9MKXPAajnRtxyTyxeyCSMLaXxPu2Tb2mRAMvsv8r2q5mujqW2QibFTduwXePnbcR",
  "key7": "67UE2CAkvkNGJ5nuGjx24z6e4SkcKmvFaomg6hzgbauFnDVqpPZ4ojvtTaGxRysynZ1uzcSKX5aLzz9VbE4mB7BF",
  "key8": "sdLkasn8286ghpxh6rNCZNxT9fJ4WKPBVSkZxG4fCW9A4kpikiNvmpTghNyLUZoLkbwrn9BSNNq21gZTzaQ1RrZ",
  "key9": "8saUnvueaD4aQrK3qEyF3L9xpSvDb3bPetRfD4htpXCmRa6UYKZEPnDWChxxh3VhGxawGFf6QBdEGWF7vgCcgiy",
  "key10": "4e7JGP9pX3toCLtDLhc5Ry9BcogY3YQKfX8xC2FYUN2V41m6CLNdd2nWF3jWkAYrJpix8NBaqvyJYhyjm2hbnMwd",
  "key11": "3F7DasEJuWRTZ4ZyzaC7CH7zPY8kXE2W8bJ76w31m5Z5Wa2hux8dEPvFgs5MBQ138i15qBrxcaekueQ8PQZpR5A",
  "key12": "5VZag1MouJQVxWTFhxgVZE9Z1atFmQ3nf9QSPaW99uPUDDxDAbDZvjTsNk4TEZVRrs37xmbBGy3r8NfgEhfa14Kw",
  "key13": "4qfjCuZEYPAWrKdYfzGavtXPc3Cow477K91kHDj1T7qsZFkbedjMECFHAcJcq4t3KGAA4hW4NTSYUfF5Mg4EFtNi",
  "key14": "36Kvkehurhai1gEK5mBYqqrPioXF446V4nTUm9xroE4osMnYzGJf2rf5MsSVpNFAmXRD4sbiRM3r31AbfvvVsjM7",
  "key15": "3wqyFEprdtxkNmJMzH5JyBGA3aMWvBbQGfnJnNBg8xDmhSR7WddjhomXoLLQHvYXei94Muc4ze1Qyt2JbWP2MgdC",
  "key16": "4Luzj8gBuvP2Mn4sTypDBscwqz4Rovc4VrfBvCftLd4fpDcG4EmYYjTdv1hY254ZTWUjftyBj2NQYzwxwTY33qDc",
  "key17": "3FjtKkeNku1zAgmY9NC5tfaPtYNSubxbTQQKVkFs24iQ2ySxvxD21wCsbcTtTCsHmSMDWY8yC6EumoVa4yFW9n6a",
  "key18": "4Qzun9buxpFEWDQz1nTwTrNd6oMgyorS3VCUjm4iDWwmiPpXVtm82dUXrNUfF8RzXrwbjMj1MQRpabmen7HJaGsk",
  "key19": "5e3wr8aF7hLnKvwPZz6F6QCX5goZRQoRqDrWHPGRrmmEhqGVXCJwbS6avuhjND4qhUyKW6XTxj36QyjsbmMEgoLk",
  "key20": "5uYCh4234wtJfNhzoiuV4mTigp4aS1RyaKiSgUMDkT8nLNSycaYack11ddvVNwtfhPCtYu1QASwb9xyaLhSgX2Hg",
  "key21": "nfuCWxqz1HLmn5wJeE33QxPecZYbscxVxLqaCr5Xbry8RSoDfr4s3mRF263YEGiqRH8pYAhCUFq2fHexRuwY5fe",
  "key22": "fGXn7MUgB9u6ANhFc4LTNHWpUkFBbbhQSPrciBjcTi42J1cieHbAAxNHuKiZ6o4oW1w5NcGEcgwRAKHsxWznvja",
  "key23": "5bVv2XamjhFC8WGkU7uNEjktwswNrr9kiuiqZcd1npHuBpG54Cmja1Xpixcgd79DpkNoQ95wU83knF1vuz4E9c9U",
  "key24": "57nq1PNrvREmSVJL5jk17ijqzqhc1MzLDm28qaZSKR5Xz2hPyBHYAgx1okDyc2iAgRSv2EeGTCSpRCNLCqoxTc6M",
  "key25": "2vVHDUZ7H6zk176JB58uquUMDjCoTH3Ldg7DPUNC31goCCgKvjJWA2Tcg5HGdbDk5Vvmx7RJu1sFNU5aUiwnXqoy",
  "key26": "Wjjn1nqHRk55cLKo6urRN8QLkG7RorddV6yHSwfZ5en2NhAhtqR4Xc2wuokmaeYXRtBi8LBqNPuRGbuabNHsCiW",
  "key27": "2X8XuuteXDZPx2FNPfEQQaMXyTFSujyEt6iYUVqjyKDH83HHhCegLLiWLhzApyPkYc94Zp1EYbkULkLRXivTmcnm",
  "key28": "uBMfnaTLLxc2uz9CRv3RssGyDjj1jgu15JVJm1dSH4p6aNPV71kuKaqXZFQosFQ4QUJkvsKMgA5V4VmegMPQPLr",
  "key29": "5bbd6BpyeKyAiYcGG6AFPd65rbXjvywmswPXUnv3A8vK2CN6C3Ndo8sxd8779T76XFjQJusSoqKqhB2Dv5wv91vm",
  "key30": "5nkxDH37pZBQsq2c9YhLJCXrcoHaFJNqN2DMQcQrBsNbxMWnnmHmQ865T3v6Q4AiwqwUFQ1MLm5XPUvK2ueJGxxX",
  "key31": "WkenCA8GYPZEuBJ4vajbN6WD9tCPmeF11aM4GS1PGxZ3KjAJYQGETYPaVUvCcQgdDcjsdCeZe3zRNT2DLqUBGti",
  "key32": "3G9vVuJuFhxN5sNHp5dbubwPnSsb4rQ2cBg7iFzMKJAG3STn8sWSxkwnzcAtkB9DSDhyEmamXXEuQbr2fCKsutVH",
  "key33": "2d9F1DvBEHY45uF5TcsD3tXh6rojJy3fkTQNjce6txgA9jsn1xNEuyMbYTDh8zyjxx2MqmeBto7G23MVqHHAaz4M",
  "key34": "tquqgb77rvxWNsaWYQCX6tLjjJgaCikHkMj4Qebx8ZedXCcg52gFFErBqJxnq49SjcfohB89FUuLtvtXzQY9NG1",
  "key35": "277EFCMyD8v4BmLPSgLspTfVk1YtPVPCZMbiUXmbB1Dz1Hx6TFQ4Stqth8ZNPfuepDZ4mE7etnJU1NPt7EVuwm7t",
  "key36": "65TxiaenEuCkUn2EbhDTcDxGaveNnLgGXN9o9gtvoKPVvcHF1L4zRZuYfrnCHJPv6K6NuC5sZSDH3GDBEgPDw3sh",
  "key37": "2aZEMRyyDWCUATgQLDG9NknbJgCbTgEdDim3Tnbi3R9Kqmx6Rc3w22iK28QmDGDj45ARCjoWTXC1pXwADpZ8QWQC",
  "key38": "iEAeApU8zzYC6rWyaZFY8qJkmJnuTnyrAXpzGFBeJoETuPiJLLTFRM8hmUrqfGT8xW69iCckaGo3onAuXz26vje",
  "key39": "pSGPH7LXBS1brZdaERaawYcuQxcwVEGxLZEdYi3Bx9BymAk4riAPbViPk78RkxtEvKXdfGvJgJfavcLM3MuBgBx",
  "key40": "53jXgfHqgCQdsGv1YupDUM6eUuH5cQF5or8B9DtkD8zXjX1CoUSef6pPG6QV1wVnBXiSkRUZb7FYdMjtCHo6qzjW",
  "key41": "5PvyS6M3UzFUk8GjZcL7cGgAMbsmBD2SiqGVfxLLhPbCPWRsGP6hiawSqwef7CzyFGun1sf8Sg2o4HCQcVq9jB6X",
  "key42": "5zBq3NHfEAAwSsHQjXGmCmY5fVPKjQxjRSafRqMwa9YexBD3dwujDDdtx7a85VD2F5y1D54StzsJM7aZeh6BHWvo",
  "key43": "5aGpKW9V1GwZytCvxLFKN9i3b5LjxASzneaEk1jkCfp6LuBJpPBJ7XKmx2TKU7eCUm1G658v89xrs4TMzFkHTw18",
  "key44": "3CDbShuBcgfx69GzXr2nfQfeWcgxWG1u4KjzR832asfpL9oUeSoAFNxbBoNxbJYH1PSDqPuav9Wyr8xPfRS8EMv9",
  "key45": "4kHMDyLUuPdoZy6pWX7ydVWqC4T3gqxHhEvvGfPe285xVfz5bFgXinyBTCN8K52ANMnGKZ3tTkah5rbskGynVoCN",
  "key46": "4km9ShQDJWGqhau6fKreyKDbH3na1uPZvHi9q38PKoYaGkfWRt36fmevgctbygk6HVWhavUJfd9cmfAmqfYWx8vt",
  "key47": "FrEJYPmci6k4nbPgAvictgR7u2EC3AQxmxbBKM8JVGV93b4JSHZRGAMJkvuG1iK8NSm67NzZ5Doid6gHYtiaEk4",
  "key48": "5EP8zHVGgJoJw5bVxAZayLqSvv91WHgFouYRQcp48hs2vA7AVqsZRyMFZHvgu4jWm7cJ3tisC6BjftBkes8qRh12"
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
