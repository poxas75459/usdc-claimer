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
    "25Smfn5HXVjZsx4fYvvougvpGf9jDWQnjUKUMywVCcd1tmNbe67TgvbzZVhDQqXWnaWBwsDWxtZ75vUCXA1aAW15"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LK5RBzcoX6UXHHNihyfZvEFvxE9Gv4cqqRUNGtkptfJV6c8riWGSoQWoQewbZWuqHYVNNjdjfz5nF55cJcYMTtU",
  "key1": "4qhqKjG7TjSAs47wuzSPb34zrrvhkSj7Mm7w9B99MfaR8gAuKZu4B4CftEYthuRH4h1uVxUwUGJ7icRsGmEXEoHr",
  "key2": "3igPTy24ccskLF3YhzmePtD45ACcqpJZQ2vhPqmafXdULkjXDB5eQJBGy8NDNw2qMwMGcdQNwGajdve1BbvfhYSg",
  "key3": "2j4BrskZ2y823YscAUnmGjMfMbBuA9ESeXRpHKBHAq1zpVL1ZjKuojRtmpUXkY1s5nzpuNErcdVtzmCgCDCmzhy",
  "key4": "2M5pLmiL2t3RFAvR9T5VdeWGCVQsT2RUgJmxDzCKfszWTjuitAcsQzwLeuQ9oJemb32nuRYNtecGc88b1tSLssXa",
  "key5": "VFvxYb2HFmon7Aw2J9ZUtsCS45iHCHhq9356cgaiope1xAfa4gcfQjdBCmA9jdwALJEaAFDTNgi3JdmMqrJyL9c",
  "key6": "2z4BqB2muLjDyjiqHZU7NGzZgBKoX5zW618edGXTAc6SWSXPpB7gWhmq2PSQ7Wv3TibD37DrAaNo2oEckNmhV2qL",
  "key7": "5gnqNGbea69VoTNrGinvyjkWRqmbaed1wb4twHrHT9h9JSZY8z2Cr9GAHgm1WsD4GNX8PhULM8ME28TvRkBputSu",
  "key8": "2zY4FiBqMRfaUMVwNq5Utzfe84wKML3qVZYctHf7PbE6ESUQwkdRX52cTzGGxUHaYrbSoYWnPvHna1gUidWfrc61",
  "key9": "2zeMyvGDwsnGaX9MojE5kAkGCcBDob7DmELFMcyaCHCywrnNjfKJ781rCt3JR8nBfrsLzKJhBUYFDgmtCeEGCD2n",
  "key10": "hGfqgqrPj4kNWLbAg7uKB8odz6Et5xwqcDp5ULUvZSMvJxEKuKavnH2ias4AKtFEV15daP7NhfgSRg2yPc5GbtT",
  "key11": "5juFSpYdjoQ9PFup4SPY4rqsC6AMkLeNao419aEdLj3rVQ56fek1TrQC7gvB2TrK1y1YFadhDAWMcSKsN5rdUVWW",
  "key12": "3UPxPeM7kT9XpNAToRknpVSkuPUkBq7ww2Q9U65ykdNHSjx84nkKawqGe7DXSG4caZoWbfq8oJTqvZVpRXG28kSZ",
  "key13": "2L8bQiJeHzvQtS2MgUo2ygiMCrt5v6pKJShUNfPKDyWqMScwF2VRokvceLnWpJTYSJfjqKDLVdBfh9X4AdF5bs6k",
  "key14": "xKs2JzW6q29b4MUJo8XE2Pg82x75Yvc56EQDbb2jkWatSFqkVLHvZsJ5UW9MSCRmbYnjLECTVu6A3vgrQDcL4Dk",
  "key15": "3b7JYFPu75toXtSBuwC5fjJyHFepzjqhDTnTfzuNUSpYXy9gZG25gmHbxVaDiT6MTDx9BS5vyWQSzqwXvgyfbPJP",
  "key16": "3kYzxVQquUCGMMHEJgMdzTtYDr2qimBK7K9uffuEgVfhJBK5AhwwVJkzSKmHZdfgQURxGvT6q2nKZD86RsddYGYD",
  "key17": "SZ24kX2BatDdhStaDZNZFympYsARPMWeTmJjEXDv2Yx9qmXAjwBHZYKB8eTrbBtG59mXZRckhEwc3wW6wq2EDtu",
  "key18": "5k5fTj9zA3DWWwFhdXG8HSvnhXgSGy5r6eSbMSxeRHYKVPXg7GJer2dsQ8uNGbDfbixzWx8MJXWTTTZibk2KfwU6",
  "key19": "5X6JGSNdFXc6KHDWLadQAS8EPJ7rYwJR2RuCm1SZ6Vn41PYsdzXRwsp9U5ZjKAECGhvhwPwVD3vrE3pMaYoApQPs",
  "key20": "27Zh2XXyR8TmDW2PKn7daeoaWwihN1YJQ54NzCnV1tNaXRaCKDnHp566jXuijBqnaBWzSnDDHRSryV4xsRfss3ZA",
  "key21": "3ERY11YFEZDabQcBVcGyN14LGrvtnkrgmLc2bv5GLqjZ2ApcDNVvzzu6phxY2B5vnk4TC2aXC4Pu5LqbHPJ6Fzwn",
  "key22": "65PWLuYDWvuG6zVxgt6NpU5Z8FBXaGq4dwbj6qhGUHwTGHVJrsc38tfSRUW1cKuFCC31bCpTMtPUg6cUjvhJhkiA",
  "key23": "JArvBJ9aFXjqu75v8Rsy97V9wuGteQPnGXbmaAPvEjyKXkQ13q4PXZhP8Z1Eodt8H5HWaMwurSc51oopqyNsneB",
  "key24": "3kqdsSdpat41bhqHYuDBrGHvA3JA9k7uiKx4PMVuMMhDyBUnSnv1UeYCzV2Y5ZA5n6UZZqWFiNWNmkZR9e682sRP",
  "key25": "EFr9crUBAN3Q4jgtSz5u3kpVrDNqvgpSbaTK6PJZQtYLzgqGMaaT4KaQsBhzMD7cLS7MgNzVx95BfpzqrV4jjDW",
  "key26": "4AJ9ZDortZAnxG44tuzynZAENmTuwui9opQ35qnE2FNcLJnBmQGhBqaUnh8oXJLGw1xZiH5a4taojjca7BZvxesi",
  "key27": "47eTUFnztKY7zdCZkRdAZN7RPsuCQR6f6174F9nFv2L9iA5p8YJvaQpXrpRqdMMSPzoxztMNKHWJawYPodtionCQ",
  "key28": "4oBc5CxHsvK2dSAhk1gtvMQMeEMRgP5oKiPzbcMiMVyuapT2549BXyr2QsxjNKLcFrJp9dNN3BB5S7spPuB1X6Eh",
  "key29": "36URZsedoxrkJ26TaJ6W92EgAcpdUNUnSynJUx4qj9LfPMoanUX1pkf1HZZRnepxtjf562JzJSXbXXVcmSsdxg9m",
  "key30": "5QxLaxBtKSMeABrSGbHWiLNMpYbphuMPd15RcWXXgo8nCFAKnG9qLwZzfraz8RUiCdn8StWpp7EUthYoYNvCu8Rx"
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
