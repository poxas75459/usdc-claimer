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
    "3RKr8x4oLiTirdGJbASNs4oq4nJEBjfHZrqwu4U5kRWKqTJkWJXhNtaHWpG6unvjY2dH4y4coKux86kAPTYyd6r7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y3EC7MRyXPNZtHdJHXAj4HtEWBPhX3vrDsTCVgiyPd7Y7z8ScmvWTnbD4p1vEaxyitb8YrekogSwRs2aRk7KGzS",
  "key1": "2joQaHmgbudf7UrUgMPC69YrDPsGVYCWpJpyQ4GH96TkEQpSSY8DNbRecEBjowPzN6pDscHEZdN7inGU9tQcWCpt",
  "key2": "2HmsiaetRtirHnbKhPg7mfX3bTitj9AKr9HHg99AY9Rzj44dY3BZ2WcxF7KdTpUjUHFxLGbfVwgBNmfzpfuLkCpr",
  "key3": "c3KvvAi6s2wmT1bRqgcwbwMBgk17WNgQPdXkfKxuYXZEnsu14o3gqQMv4E24FDVGnwmMSccNbLSRuFUgFhbZ9Kt",
  "key4": "2D2eEFsfN1QQgagRJjvm19Kp3FmF6QM5muUHL4H5NRSM4G3KsyAo9eg7Xp7mdjsF7qSDPEjkrY2dWTsMeLTBeHhM",
  "key5": "26pq6fmTC3cgHMBNotEs6PyiXjkFywzUrkS4iH53cPVshyRjzWHxjrBv9jZviaLEERb7G3SKeFPKVR22gHwxAJqS",
  "key6": "5QiUFtXUiEc28FiUYFSCJS35t4BWFvgN6n3kv6THyXS8okuKXyiCiTm4n5mn7YToF9VziKkYfRkwXL74c7hoghQc",
  "key7": "3isnfkZPUhWDNS34iWq4Ag4cRzugU8SUw6Sh5fhFPmnnXLzg1x39rwty6zSTmR7omZg4rfxnvf5ogLn2358MakAT",
  "key8": "3e1y8CG71eG1B6pCrX2gn8J9ByAbJnzPGP3f5TdLCXv2ntF4aGGyfdiz1GnLMEqQyMDRnFNw1dU8D5dLHnLuQuU4",
  "key9": "4T4d3g8hY8CR9SA3MkmV6ifJeYWZ2MxqBUai95knGjV1BTTBWX2yJWbUN5dgA6iVXPRcdGUGVB4LXbuqSmnowZbM",
  "key10": "44Bd6Sce8D1Q4T8ut6zw1cvwTWFixTwLpzSiPPFRi12VumWPujsqBQUBiTnM3XMjphv4FopPAzTGavoPdYDdVAxX",
  "key11": "64W9TqBJBSd4m1wFk12hpSHwWt7dHAH6e38maitE3CDcseodDpEn9V1eQj4anZemrVx4UNLXoVTRiNU1ftmjGGqZ",
  "key12": "3XwmnVEtppcKkyKQP6yvkKDTNyBCsy28kTu8QyQ5haauZQJqqqtn5wes7DEdMiFXJa7xcoY5tMfQShtyjKkBumTE",
  "key13": "64oMzVdxMMsT86Q2ahu8KusPzeQVKNFrMJfhohVr1Esp6xiy51AsiqkVxVcSNFgwmxW9wUfP7ErQgKx6aM6puRHe",
  "key14": "34KTozmZFgBfXNaS6KD4sNwCgtXX1Ky57JJ6QSUt1UJHQSpBvDwzYW1ekFenXW24ajKEK9mPah3aMDaavcwvC98h",
  "key15": "Eux7j6LJKuYNmCzZT11tfDDkcaktxhAjcGjgLtuz8Vzgj42qz8EpzRDAspPRk4EzMKqEzRptdqqQkiYWNFTPREB",
  "key16": "3enhfqpCYjHZhXrYLcCzUr3dxFhvSCH7ecwMMd5fX9ZWd1MLUtyrpXxocsxswiHJaopsmU79mzvUWe4jrxFcCfYq",
  "key17": "39qxcfcFheyygkjsB8ZBiiKGGshNyFZGQmKN7hg6cwHcLe5LD2YmMiME9zxrMjz8HBAPMBbRVjFsL7mFnYb2m5Ae",
  "key18": "jxjqw83TQ5QTJhWB7gPiWqNtDfDzLmDaA5RuFYw4a5xJwUmN95WR4ssZGHCSqZCJsA1K1tqLAmhD2TGW43LKWJR",
  "key19": "3eAhhCnJJJqvu7eZcXxzJhSWWHMs5sVpDy9WGnseW6QnaiPPokF14hvbHmR4D79DB1wK3qPm9CVuyeYS9RfeDn2A",
  "key20": "5Rz4krZmhbgN37o1Q4G5hKwmQge4wXTPTXLtMvCnFARFPQHpRKM7rRWMHQbPSt1FihQc52shZxvZhkYggyjQ817H",
  "key21": "2XwznUSbXrEx38KnaDbdNFWNqbX8va6aWYfJbCQn6LSFDwkd7iN3YtPeTSnrgcxYQa7ajbdJDXSTdzsEdBMCHLHv",
  "key22": "2bkqsDb6viqpMVePcCUBFaMNAg3LwEg5oMJWS9Rq6qZbLCDnpzdTuoPv6ED7UBe6cyAkWYHshLtbjjU3M8Dcuu5m",
  "key23": "4hX8BUXTxhfpGcFJPZaYcEeo8vsGvvioYZVW9vfNFKNNfx2HTFd1syaVKvvfAWtHQxuwK4hGqrNqrwHg36iVw1Xn",
  "key24": "5F7ucePdeEtVRjnkyiEkmmhAes5vsbfuj2trEbs9iHj1JyrD8gb1hxS9MQ2gVXF4PR84jBnaG2tknrbywQTWyS7N",
  "key25": "4E411MaRgj2ZXHqdVHwbh9cMHmfeBvmA2ihC4Soyn9bUREBeYLQQVP6fdxTU3MpKrQqTokYMcXGBy4tXvcV4vDG3",
  "key26": "2oZitDvdwTi2eXbBMS4Js63FtD1tUvsB38dhpfb2gJXYTKAxc7jADt9am7trJaVfAs5o13qqhcpQyYoHpM499RA9",
  "key27": "5TtKfMUwJwbBFSv6TiCvrmfwpg49aDNziyGH1SnZ8oURW7adktyMpqaZwsEoa1tKVMnuo98qR6rUdTTaRpdJSnFA",
  "key28": "4yukqahgc9ZREtvsGfcbrMSghRfCk8xmdTCjshntJHUQxt4fTvV6y4NBisPnR6DHZtD9ZPQf1Azeu7rMbrT2GvH",
  "key29": "5vrgBpUNLQVmdcCRmSBoBjSM71YL5K255gNAn6fyJDtszE2NWEwMrtrk6RpeKmGYHyKKiAdhPawvhDAFkVLSpSs8",
  "key30": "555zrCrJ6CGNaDmrf4s4jLEGnbpdCAZqKjsaacSdUVDt2qZYretNqRvWjv2gzMduqCeuqbUWs4a1TRDMHW191J5E",
  "key31": "5vSBUepc1K2GjuLuQn9yCCKsNfLZxGgkcdywbWd25CxcQePnQbxcQdZ8V1XqDLipKqsZVXNyyEwspwAjHJTT8mqg",
  "key32": "2DyUKcwi1MHPxvwvqw8mDHMVcUs2ULc3DZTWf1AEkzzhYwWcrVqNq2gHabCndK5NAtSPjjehg5fVQvQJNCA98m51",
  "key33": "3zHVC4LsQDParNZ6RYNBQdwi9o6m2g4oqo3XYnTpzzBDFBS12VwfLXDEnFUW4xGifqbJ7Q2VSn9PGHadA1AhFeqA",
  "key34": "TtLqW3NAPNFrXShatZAnPDXuhoQvacZSntS5nPwhKqVhHJqYEtRFbtAvrNY2aM2GPY9fMXM7scrJv4WHRqja1oJ",
  "key35": "YcYGEgxapBD3wF9ahFF4DbRyMuKus15bdhhHWdjcDuLu3UaoC2Z33BQoN6kKQJYMNcUxjtiZ5X8Fokref42z1QC",
  "key36": "38scGjn8sc83Yyw8K3w9vMgmhSpaggTfEXvdYQSDkYUEmopsTnZi8GPszvBug7ngD84GQqPLkYPVWydMZeEZyXPA",
  "key37": "2Z1nQ4jthcvxZRNaAsPdYXijam78PukcWZ3q2C7K4vkqC6zqqAWnRDRiejxAY3w6RgUazkfuMCmtgVV6LBwJRvmL",
  "key38": "4WXarmV9gt5PXcbBVqDNLdeYBTPmispBUE8w45Ud4nEsmCEgmuvrewKZZmRmDYjf9tDtAJxqqBhr5g2zTF6xHfQj",
  "key39": "RK9WuonjJysf8PvoSUnoW4HHo3GuYfvaVZc6q4ATdwCT3J9S122PevtsJBfRpJxzx47GgN8HFoQSJCDD4yrSwvV",
  "key40": "7SxTCQg4o4j7pywhMtV5AdMP81Ljf3VMhb3AAyCjjyLD3KwkuTRXv795Szwh9B65js89Gd8F7oAH7nhMgBwgi2d",
  "key41": "3RZ9woYLZGpazroMY1tFdfU1M9GN2CjJoqczVYMx1V1AD2XEr4Kw9q7GW5FFjyXwsp1GP67W39rNtiYSu58eUs3s"
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
