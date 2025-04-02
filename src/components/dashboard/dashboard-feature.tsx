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
    "5JiFTBHBBUnKHCvij7S3MA8ywp4PxPPbVdK63QZkMDu7G1ooE31gMmJfiUxNbK8EQZovSvqRkjNAq4bw9Vzxnjgd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EVeXhHtyQWfUkZUGT4MuNfT2STwCnkRKkHt3C1SVuDYXVdtSyVhUaoRLfmsYe9HLfY41jAFfy5nPNNHPUFAb1iH",
  "key1": "5VGJfxSPZ56gNWTCmWf3UCZdQMxK6fhXEyui1TWbhCmUy3YazFFSp18hvjvWRTuVgmpsQkZwEx6a2boCSDeq4G9j",
  "key2": "4CJ9XvBg2uk3V4dETsRkbk4KvFiPtfoFzjqjjXWYwCkfgrx2iXqFnQkkFE33k2sB4HqztMqSMGLd8rWfF7baC2Q8",
  "key3": "3sHGdTcLaMawmbebiGbPdtjaQ3vmE7NjzcFtU96WASVMj8hwoEAWMFxK8yh3eEanwfQRcJFgEhUvPJxQXRh6Dgcx",
  "key4": "4MGwwKj57AwNZiKit7HVVQ9GsynX7Wc1fw6Ln2HWWfRzZZXXYVNYTmnUr6AHGLZmGPdfcMBbDTHipZcXnFRSBJNv",
  "key5": "4SnjF1vtDRydCbtAtmdmwoPUSR78hh28u3nnGZm3ipCK4SRfx4xoZu4ZpYPWGNj6oYVEkLkbhxz1GET1ywezt2qs",
  "key6": "5GDZEbLXS7rTj3yJUegW5NGYvP6nkRvETJ2Ev83qN76JagjVhQXUmU2JH5DKjJCYkUvX8cqSEh2SpRbs3vKDWjC",
  "key7": "3h6KBZFYxK8A1ttuRjdqXYHeQJDvLkggbsgfU8rb3Dx5B6KigPUn7JJSbPrcRQzHqkRgsgoQMtX3dChrSGE26PfJ",
  "key8": "4xcqpphRVjaUBrk4PbjvzTZDXS91bWhNErR8BgPLqRQjkdFbRBteeuD8VJdFLENgJBbj6yLyvh2bMqt5ZJEkjdiV",
  "key9": "p5TxskpA61bfDvrQvbTEoMAYAbPrBm5NZVQGKQV3bdAqLRrJoy72JT58tz8eey22veGchhhATMczeceCD9f3KY1",
  "key10": "5yphV9ksQMZyuQxY3tXE7Fxd4Pg2mQV8dB4NUJe5bZj85MmNChAUwMtH55Nr4ypbNuuJSwqazkHRvyLabpGWnzQX",
  "key11": "289uU217cv22KtXugbNM9Z2Dge26F2mepArwunoSVkaYKHHikfwPS6KEaewRJtHsG8k8MMpiHpZoHeh1ccsYKSTL",
  "key12": "4YUzVRnXzvCbggPkbvtqxHkKVHhDbstzBq6mtRPDDA3WmKTaWZECRb7FLMuF2RUoWS7qQsYqT1mf2znseGETCMHn",
  "key13": "3XGUm5Yps9mJc1eihvRr1QexU3HAJ4U98Rm5wwedWet5TfjLPnreMzzeUCXEJRQihJmrMCxmaQ6ZfZbmYZTmpapr",
  "key14": "5JujtNUDsRJ6XnKWjE2196gzwbxBnjejyGSD7Mg5T5PueffMrvDNWNy3wPH1b2afiiZ7kA3gbq3H3SXsJtYbtsrF",
  "key15": "5e79vcjwcZFSsJ1bEz1Xyo2DtDFAXDArgTFWNNk7VcKKsRg24y7Hr7vZFsXEumbzuDbmeUhm2Mx3ZtTZb5WB8fNj",
  "key16": "3df9nR9YntDat3nRBr97Ydo8HDoaFGpd3gKp2icXXTmFNFuzqa1JmSS6hm712KE7uG8ZaJb4Ujw3Us4YdhTTSuK1",
  "key17": "2d6NpmJLQjQn4dK8ZgXj1xk3ipz3vuvmy3umr86g1Fv2bfWhtEFgQW9sUW7VNczBoqY6godWw3wBz71vUaMh6Tns",
  "key18": "2FrzeKf8yUojcyrLcxXxDFxej8oy9FZtnim3cizeqfPddrXidCe3WeAGrdcXER2zurj2ftqRamutDuBToHXS85Kb",
  "key19": "skm55BtDi74p5X8Xtocmg7p5QaPyEaSFSoizxoUsyhokNthJW85LWNraTdMFap33DWPoAetXpL2XeQutxi5qH4Y",
  "key20": "KdGgEiVEPjRC6WuvKFi9R2YrDtc8G9RN3SA5vKawL1zmEFE8oNfALnNHRFZvF8hzxk4RUUiTvkcmgwH19ZdVjkJ",
  "key21": "3yG65zzT6WaN8VX7AxingHZHhsDyYd5RT9s7SWX3G8FuFZ75FZkU7vhMT7CkzzWqiAi2TttDhEQexP64TcxdkHb4",
  "key22": "3B9ZXiuzicsy8ZK4epVY6MXDhnLERCmdaXGTyxEGGvmRK1QRPPuroCuyituWMkbtSmEPLbyQNRjP4tTmFJ3MigHq",
  "key23": "3kdMyMNadp58dHzNcUMpx3jez4ptQaFx2W7jXtp1vTExRTsHsQV4G3SnijJSPWouTKLtUFoC1G6DaMwcdy4K7NkH",
  "key24": "418J9nFFseTWsvjEuDceCjxrFpwGyKUFeco6Vo5cPaGfzGG256ifLaGBttGKxG34HJAEcJtrrmTSJAJicBNs9CWj",
  "key25": "5G4VLkSTvTEieyg2c1XUHfx22zon4Cy4q5ZULmV3gLoyjqU1TSkdWuZfywMn3HTXtXYkBozLXf2aoAvpzaffnHg1",
  "key26": "t9MM3geAAJmCHE2gjtrEq6X7GCnGxdoF7uvhRyUMHMhC4RVnicE2aQN2KKddQPKS5WRTDFdxG4Lb7Gbb1TMHrCM",
  "key27": "2QRfuKjfftDdMJStJNAegyiGB1SGvH4jPDuGRiT5W6DnA3hVZZ1aL5dSSn1BW2BShpvuFis2xYdTaypCv3K6emsW",
  "key28": "4NapRdT1AX9Xzsjr6WxotviL7Bz5y9vmPZQCMgjmjFiZDjBiwYALX6k5GGSPL12bPwwpMfAM9MEYkHmVzDvRDLU6",
  "key29": "2s5jYBKhGq1BXs1XEPpq2ifGPVZfAykztze5ioELeRgVSHMNLNqNzndpGkUs1ofUjKjTezYThd6APT5By5xPM1SR",
  "key30": "3yyUd3sDRgVNHsjwPTrcZhuQwU8LtH6F97wkfxvNK613ZKxryHsjG91ZSamV6fFExYrMUDSt2ueg6iSVTiyC1yoW",
  "key31": "5xRrfgeDUV8pr9Yn2tzMsjhhheHWVfsPTwLc1Zrt2wGCh8nZnqdMNhJGis2k4mCDMe55s8KXVDd2pvFC6WBgxEA",
  "key32": "4xEvChbzREjjoxJnCorKayRiXpmsnL1Jhgb8zqmiksCxG4zZ3jD9BGMcMP2q6VvxwoPmxQ89uguywGZLPY1qVXpU",
  "key33": "2nsefkkJYWb2wVBAo7fcsoiKMMqMP4yCzAAZVgQJzGoK7yTYa5sgpnytBT6PWpHWT6qpKZZ4jqXfpXVinSuA2R6h",
  "key34": "YP7kRmwvs9LLxzWG27fa3ur47c5oZjocGnp2fJ38KDL4frYsHvvmsDVRU6GgCqfdratw9wX7kEkR1e8cmCpH7CQ",
  "key35": "3SMC2zRvuHnhQA9hPja84222gEwmCJppWvfoFAHk3MYMTXyqcuAJkRe5ooA9VFZwtDtkrkiLhP3CkSJtuN988nkz",
  "key36": "4YDo58MspFWhL6RCz1zCSCNE6oLCNiNKoAYiH97eNCwphLQbEV6FA57c1TCEM8MuLVjNFLD9xAbCD6bzMRisLgoM",
  "key37": "43aCkVj3WinVqZZaoKsBDZkTnQxAjTbw8txkyrc887E1KwWUBtgvcj3DcuvqseRCLoMptAAsrWqKaKpLsoe1Don5",
  "key38": "4KcsX4GUUFFaYRCpH2gGtRERCgEqQSEJMZ3xQ6QV3qh7JHBFcLUD77wE4Ja1JqRLC4RGQ44TX8t1dcbzS61bhmqD"
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
