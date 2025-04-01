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
    "45PzVFYDhbTzkaQ3UuL8aH6yce5va5z2wK2dxNC1t1t2ZvEGdm8hdCaAAt7wRxxwUTdFAVj4Ug51pdnTLAykiNEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o7ETv6ZDizbpszAvLZQ7rnT8HHvHJusWDddjK8BSTduURPMvGNeqiwvwCmTMabNU7zZrXhe362ddTirMd3F4HCQ",
  "key1": "5AQipWS2aqw8BWW5KKwqXGWoAgfe6BKmSgi3bkyouVT3G3NR4p17nB7LYc1tiDCb1CemJgAQeudDifq9aHwecWpF",
  "key2": "5B8Vbr9T38BtEBaTs8LQ4LTEBRv8AaTq2LhgVMj1QqBtbskqkdjot4ERVfnAHbdKP5FabfDD4rZNUJ57NCejbm5C",
  "key3": "sgje8SbApBzQFeKkcYaegeZxbt94AVmwgrVopKiFxcxSmxp8GHtQiVNjMVszrDTSmeRcyHMH9DmUUMrs8ybsBKT",
  "key4": "5GbcdmRKnGA4JtyfXhzHX6R7BsZwag1DjWMWbfb6bXJL6CQJMejUEpVnrG1D1AAHcyzBt3njhxP8m5zJUs65NYWZ",
  "key5": "5FMSgqeB7EeFHas2rtEk2msLePYuayXsRr4AfP9be9sqErWBzeY66uyr9Gqtf6KetYPMKjAk9bxttgNbLmn7HLBE",
  "key6": "4yV57YyveACtdSLRxwNCqv9xxs1tHfyRoF6dLiTWGNyGuHxiS3MEidQsaYDfLem1kh77zecv5RBvfzQY9NEbgYfZ",
  "key7": "65EP7Xezjo6WTqnKq3SoPZdHCUHwCxpEHpCGsLTMGZhXBSLAwmtx9Ce3ysELdd6qdErAnXjyFazRZmJCPCihp7Dd",
  "key8": "3DAVUrwWkH624xbjvXNttUyjgaMQDrgFQLBCeMeN8NPzeWHR3j5LLVD515zm8qJe3CvhiN1BCyN87pKLiEKsn1Hu",
  "key9": "33wkjn9th6Zupa6MnTp1tXV1P8GninjYzn7CRaRoEj55UP2TNpfAXiwKk3E4AcHWBqibBqjH5QUV2vQTFWyU7HCD",
  "key10": "4pbSXkZvNj3CYdJHg5rGvBcyYy8xkTKVK7pMsXbPwHChSXCxvRkimUdqXYgEQ4pkZoW92LfXFd5xyN8y9goUHoJU",
  "key11": "4Q5un7D5SzG7XsMz2YwAGDFi2YjNjxbfunK1APHyBon8j13zKGGbm6aNupJeqscCKC1EwjPpST9sQ8JVEkVCn1E8",
  "key12": "5h5Ysnf3LXuMNMAvj98ohLJJjefxF7SC9HRRT9mFEKB23C2wSzmh4WfyEGZb4G8Y1osu7DFPK5eXCpwdzkFQrhAv",
  "key13": "2t3ynJiRhTQKA3ZvtncvkwqdDrE1VyFeBKmG61pe4p1YGh6DFghq68RTge4EV1YhLPfJ34Z2GvE1Z6ajqhmYVtWw",
  "key14": "5rWno9x6Qeowt9VqwBBqTh63im6JSRSkdwDbRafbheUWZ3JRZWpopVsL7diqhsC4WPk5ncZL93f1RcqYarrEMbFx",
  "key15": "5sChZ7tbcW3tWgjqfm4XLSYHqvC2HLLDPXtk5gvaLFSjYF7f8VR8mLifQWWzK1pjE4NMoy56NAqWDAFSLGKycPg7",
  "key16": "4D9jgWkrNh38Kcb5cXykMFwpe2M6iagTBcLBBooFcsVQQwwHgmMTdLgZ2RbxmfYNh1gFPJ5xNRoedYHV2hZePuiY",
  "key17": "JbsY4KK92oBiUk98xotHNpPGsXfymaWG2WSZiFNoZ8TwWwjB5rumLvQH3NATsrnUmQVK8qAuGsBjVU33uFizcFs",
  "key18": "53sCFCtu5A9LHpYcb6e3pm8ndDwzkYRaHtwwRaRjQBokyiJAUyxfig5gZZczddBgUpCGoRC9qNVqwZtxbiqB8uXL",
  "key19": "GLgmYWamjddFfT7NYh6bP76f1aMUVZMD4uuYAquK9nKgsCkNqdwxT87M8F2NCdXdNXmkqGjX7qKrhDbnSwynj8L",
  "key20": "VbFLuF4KXroDKsm9bBXNCvv9GAZ9UA3N8ofU78MKPR8pmgAjRAy1K5pNGqPCPi2j54VAfQWwV9jDsZa7zw4u5Q9",
  "key21": "tVaaRB1dRDtkY8iqvaocVc4arXcXEZZP6cBa5p2smrk8MLy7SGtL3vL62tGN2Hozn748C2uY5xWajGQ47M6RbB2",
  "key22": "2TCE99fzMxJybFuRiwKjyXZeigJwoEod1oPzY892Se5kCJr5hU4ne1TeYAq8VSM1VRbNbuyqCzJaKEDcef9s2T1E",
  "key23": "nmGERFxuoz8MvTtMFzDvJdkBSsBWGriDWYVG7otbaS1jzsNQBRUjL99BjaooTs3wUtuv4R4Q3JtbKEhw3W9tS4J",
  "key24": "8wcGwsfveeFwL8M22y9k4MF1wz2Zt6rxjt1XTyqgyGDtrzXiDBFRCc2q4eYSwMgddC53Ld4THJP2Ysj26bJfph7",
  "key25": "2EKPFAMMg8MoWVaHgZ2RXPchvMycQXwPvgKzG9noj6A28rxLFZLCWUxQKqTAEvY1jq7kvjwRQWsq7Wz6e7vW4pjw",
  "key26": "5kE4gAo6vRdXZXB4iGwFr32GZiXhAmeZG7MyrEnu4reVCQEKq6G65FVKmWwU5LGkJM7uPss26NabgdTjbmxsrCne",
  "key27": "3dfMKssSJGT9nYpfarseqsuwZSBxn2igvNyDf8K2gxNHuDorEGdPkVuGyYyCS8gicAjfuaHGfydjYPmeJ4pMrkVk",
  "key28": "3oTaBDQrXkRjSq3aNPBiNPVZMQQD3actC5cyPM9K3eyzsQP33sHgTNc5fYAWRxe8uEUsHpKiW7wcWKeTHMYy9ukE",
  "key29": "dzY5SyPAHyLUc6VPs8VrwRSbaJMpo1js6U4UWqbebNKwCSpyuS2GSa8WuATsB9vuLnBj9HQPg3XQU6ikRaBFT5u",
  "key30": "3ekHRBTRCZrRiTJsrcMaPt9fwjA46xD8kXJ2c3PX1tut7Ga75gQSG333yZiWCmEHknVdjpGa3EmjE92c8ooBvaeo",
  "key31": "39kw6kXhh6HTuXiPhDVFMe1xLxfSjLYPaWhZi5LxLkUDALDypvg71iBZtewFC5cswJq7D9Y4taFSypAtVpaWwPRU",
  "key32": "4QbNV1F9PEZq6fRnZZynGQnS1hi8wS2tmjYg1gm2Z7G4M33vwxP1PkyK5zgoHPB8Fj1qFsXJwXeptubmZVLvK8r1",
  "key33": "Urb9tscEdCKr82YJTPKBQp4EuuVeAom1QkLTJfJcsJq5upQtZWLHVmMHipufvRhGiTtvxtEPUuGh5QZ4ag9VZwW",
  "key34": "H7UwKLTBrzCy6PiiCdjwqt3VwgUUQoGe982Qh92bq8iu1XDPAt3riASQnFaZTbcEkGArwMoSaqpR6UU58Vi2EGB",
  "key35": "5Jx8PSP8exw3PEXxuCZ76rkk34uA59fe9h5a91wvKRxZpnnKQX3jqZZ4vGHtEWKBzFmNViTqWcsFfsEjU87rfv4T",
  "key36": "ZtmAmTM9eqhAYZD3DEEpwa48rJE78fsGAAgfLEKM6nE5NjspPyjdys8eZbeCczQyYPt24VvEdQMHFQtuQKLtr5q",
  "key37": "29HVmfbB77XdaX1Q1zeAWx48YKshpu3CBLrSHaog9sDr28vBFgcwE8TiuU2XU7Ng1rYnXx9SNmnjw2S4g4wJbkGX",
  "key38": "4oGSgRuAstZo3Kh9UGJRz1hBPEAbpaJ9RfpSDBzW9cyvtBkLvqBcz4P8HQGNaTEeB31MPHPAhkHSAt3rgNN2zh7V",
  "key39": "33unY6yZPcAZc81Moi1upEUAvFKpkiA46zbJ1VBFhCbKwapgWtLyapEGRAHgCShphKN6AFYoG31z6S6DwnFf5Asn",
  "key40": "2PHGz7uqtKdNpsWEqYYbs5bx2MLmRjtNTBLV1L2ntF29dCS41LaKioPTRV8srxGpN49E7xSteygMmEdFk39GYGC9",
  "key41": "4CUDEjteD3AYQPPwAc6WEzQSszhyfiCRWs4f3UQz9CHKrwEg3xHaBzpRFoyrGCY3B1ZscmPVhxa5b2EDZfCyGmwR",
  "key42": "7nsXysd5PnVd8LzoE132SyvvRhREio9ZKqbgjpDf8pXBm6pBiBifxWj9UCyJR8aVoynYk2LggHFXx9gth9f9CBJ",
  "key43": "3BLFVysXdYJgVix2KJSb3ARqKqgh16aQgqrtPKPB4TL4XNAQsBHvpHY1boVKp6eBasDgoyBAVNTfyRoig6DmtoG6",
  "key44": "2EjXy62UWVqDHgk3n5TLRsKk78fAdCgo6yK78cKmNyoJqn7mkEFGRgCh1fe1TVaEYgpV7cAestp4t8q2WvbkwX7n"
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
