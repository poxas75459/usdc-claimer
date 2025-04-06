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
    "4G7LdTxiPdbY1fVfxuJFqydBayjZcic3sGXGtWDRfcnhFHFp8royyF1tzmDi4vSv3395k716g9DDaiwMdQLforvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MuenHswjBgPLNMr8oekRTCwpKkwWeoma1cnZuLBihNMzwpibe8FehDJLgpcBrrkYYcFS7r7wcck8RPYcWW5F26J",
  "key1": "4LFUjyWxLBcLBenUKBgFyJ4C2tqSzT8suuh26dCYr4RUJPZJo2oDWBk5Qs7Vpp3F9tjZfhnWZSTiYEFnfNWrRQsZ",
  "key2": "25thg7zU2nqmZPHm2xgt3mhm8TXBzhEGxwmD2kLKiUHimWxpJNgth9LX54kT3VfyiqwYddu8D7FBTfzhkZP7odNZ",
  "key3": "3VKhWpdg1GXK6z6NnvFn4hNKxFZUQTn5aysnekrgbVYtqg8uH4Cf8ne7DN1PSyea4wzGFQsTWGxWYJSFSZgf7fkX",
  "key4": "39yPTbHPx5VbwxHST5bzejTkNb5UMEdv7whVSfzLtJeYcAn8hH9j6CNyGvUKZN8K8Nq1vbr7S7URq3Yky24h5KiM",
  "key5": "3QJofU3GenEW7f8S9h2mr8qaGbU3DHvz4zwZZPXVeG58LExu1j5Gz4AbKRAzucbSJeH1yWjzxqhENiU42bZYkj7T",
  "key6": "5CwkPPV5bwrRCJfK8vW7AU47o4CJ8NNH2VxRdwKcdi3w6DsfSimzUVUzBQrj7f2ZQ6mLkdZMZwy1ztwFFNVGfHu3",
  "key7": "32Y3DRYpPLpk3Pxhomv91pPRG9dGVYSZB57LEtC7Jrvdo53q9vr8aBTGdRu6HNmkHWTthU2nCiKzW2hwvLvW94eo",
  "key8": "3UdB3Jb9Fk1yWrKAA3jWobdv8BWpQ4HgZXWwhuWjRHxPVBqDwSKauUpXbKbH978TKbMDp2Kis9LAhuvrgQVEWy5n",
  "key9": "mguB59VczQArEfZmHjwHyXrAeJedZjScoKWs6xbhDKFUmDMbYBzDup3s21yuiFjsUoXPS21EGhhrphBVDGnMZB8",
  "key10": "59SDGkVYnFojdHZsHkmrNrGoqUBYzrdgvCGCmk56qJwux8NeQxPyJtd3ARQtVHz3NDbo914dJUvZE6g1W4ZeP2Tm",
  "key11": "5UsJUaURVLLKqcgCifFm4VBgPSieP9DmGf8qZnQCp8LZHJ2gf8ZzG95siU9V946XHr2HTGXWd5y6xqRT8EBdSnsK",
  "key12": "4dxwWZNUe2BVUw5TyEjc9VWouiYJAowTuVw5ZpptaFCKAvsg7WTAtGjZeYJv1zWYLfpoSsKryqoPLisbjLXBuko5",
  "key13": "5JUB3nTQsxcX1jjt6rStQNKp7BYeuzQy3X2rKdWmRgFUhAb48w6NY7YQkY4RXs4qt7WQJgZZDPwfpJhfEGJpWMMt",
  "key14": "2pH13uwTb7ctFGbLgGMSpCQjQr7qCf7Gwk6fR1M7eNJTYdD5REPmR6QHDREthx65PUPbYQ4NgYM5VWBDr4YTZ2pT",
  "key15": "52ZpF9pGAikQ9hEgByGmKR94qJiuBhATBCF73ure9gArRWUJAdQ8su4V7fpTHcWepdWygKHQ5ZcWwKjkgUNfh6M7",
  "key16": "9vwu8bfJaR9t4PYHwmoFPd1kkmtrQjdAqdzhowX8VrE3Y1fVwJDjw1iKULKj4s4A8N5gJaTAa1AvtqLL868D57D",
  "key17": "5i3xyBmEG1Vr6BwiHnMzgm8nZeGsfBzJa5VSxu1S2dEwXykPSjKJ83YzDxJWjcySoR4onPDn3L3GE7LudqCDLtBj",
  "key18": "xM9R4PkdceCRNHHqr72n1hkCASDSJ2Jn9G4jMZsCHboSbHkMFTGN3q68m6vt5yFEH8eQxKmtAVuMc1B31Z6Dwjh",
  "key19": "2iCqnZmuqQ1Mwx6XGhzAEs3Q8qCfCDToKmz1Z2iV2m6RZWF5dcL2ghekVLcT4EfSHky8M2LLiSm33ReSiSptpWZN",
  "key20": "3BqJpP8TsDfvMLfDSZqbkiKFZgiRrogk4AUHqyLAkoe2Sxcr4RixrkFbJGdc4kaYVZzspuCVoUDsdTX8rN1nAMC8",
  "key21": "5vLbUf35v28qFNFvEkexa9om6wCoXyos7nD4gNuLNhmMFgRgAM5z1kkSaZKrbSeiBAgLB1NHHFStXX1B8WLTNxNN",
  "key22": "2krusGrT4jUiU669yWyaHq1U2MyfzefpfRErJxmgaVFPg2RCegJwDFikUzscjoJC22Kig7grzGeTz3H4oPVqZE9r",
  "key23": "4Z7hK2bCtdXciUpVaoikx6WKewe5toWbZD87DCzRnBm5jdQQ2vgFDUsri6cxuFzdsg9KfFtwPfSTKKLoHTWzjxda",
  "key24": "3PHRSN7TMDXhvZUaV1EyLqjfGiCJgpAnyiZDv35apbvdYo38e16S4Snwa1M79oiaZ3F4vDmapR3CoVt1CGtqz2qA",
  "key25": "5EE3YrhgTfHa6aNL18eRAsvpALJWB8Yvr5cLoTVy5g8Xs6PPHqZxmwfbimz31Y3rA2dHLAA5HyoES9JZV9jSfEAm",
  "key26": "3VhL8yWa7pdBdMTki3bgfab3uVNAPVEmtWH5LZVncUcWmcrko8bxRzCVu5RK7jSoZqywdczxL4zmnqH23r4unn8B",
  "key27": "2XrUjDqhEwGSWWwXELBV9CRWdfyDayXiSgyhcYPRt1Gh76w7VsMshw4DsiUbwJrKsiM2uKnhu8rX6tVRJAgwhf5d",
  "key28": "4RKPq6WNoo2WeLseMQMfHU5wJcWXvHnGtWEFJoU11RNWomaovhqzWXSYAG1yrtgMiHhaFTBx5yEtYQSg6qWT7Ptw",
  "key29": "5weNvjJ8FV975TfSfgs8AbX9DgiYnP9rsTFmoPczNnXUYQktQGvUeoa5Ayb9R3bX1a4VoDE9wPfzPfAAMGn3RSBJ",
  "key30": "cUAuYgUxyqBmWsw1J9C6ghgeBK6RXu4w4B44kSUgS6SDHBrvn6z9TQpo9ZByRawouZUgu6uUGNfgx1obj4915NE",
  "key31": "8KTE3ivw1894qXN6nTmQSPTtZyBwGdkPGswUGBPGEiwkz8wqV2nBEQSSV5YLedTzsp5HWt2tVHimEEjw6kVeuSN",
  "key32": "4FCgjtTB6mXMh4mutZSNzwQge2JAWHXcSvJzXh9eJnRYqmgUFngvm8dK68RbDjxBypbUHwWMQhy6aiN55qtaUyfJ",
  "key33": "5PdQXL89m4LggtWwFrjiE5ZPo1smLxHcQ6Zd8NxYqNqnYYvZE1Yb4VF3azvrFirLeDwzTuw1Yfw2gc5tLjfYywt8",
  "key34": "34jM6BPSWccfQeKH7qsEP4SMKErB5FJfqejAozLHyBKvhUhJSziYG7MVP2eWbyQtjswrxRXWbNwfa7aU3SWN62bH",
  "key35": "4wD1dt9BtCKXXJajD8gpG8A2EyX35EUpjrtMvE3ZTsZtTA18f2QYhpmV5ZGW4Yrd7rzNXYerG2LcX7YAmfd3hByP",
  "key36": "4NHpxrebR2NJVANc6x1QFmX45MReBPsKaWbmjyK8UHdnEWEfyv6H5vt5CnCDuktQnhv7cqFCRqunZcUEo2aPMTF5"
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
