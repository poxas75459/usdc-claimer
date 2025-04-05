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
    "2BYXz9bFuiJpvLZ5xXjrBByYHgCrw78wqKUVHMBBeo8MVxxPQYnbePB6qsEcN4JyC37ozsLeKaRmfFxPabLTem5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W1ajt3YDr6F3ewmX78iRNX5jsF7wzyREPadzZuM58WbzYFRYMTGsTfygyuSQ2T3d4dgBuPuSuzjuouCCVbWSCue",
  "key1": "BPL37g3szTZunUeani31TW1WcNjCi9M6aUXmLBqdxFDa6La5AgBuY62y7dypmtBXNiFuZGAXwcFamfmBoTLXUEY",
  "key2": "3ACi1pJ9JLwc6JTLNpF5RBwtWDYK9CaM3QCW6hZeCFRK3BsB6PDgDueFZJ2fQhD1bCLge582LRd8S6b99DDCkLVu",
  "key3": "5ykMTWkVX8xsgT9TJQPTjibJro59eBhe3KVq5RVvmYfihyBekVJ6XkeNxPyKYjXycgEgbiSMGsNVH5iwKzXrzQWD",
  "key4": "4tgJv8aaMAhFfuuFeCzwQZpzCAMVCK5tjkDnFSysTPx2h4wbsqnRTpq7Hcb8ZoeyCwe2tNXpTVPeT5mDXsa8DGBg",
  "key5": "44SNZWNLuymujPChpotXxzcqEXViePAYr1bwC6xKBHXCH6ScquCbdTZBNkM1tKVNBE33aUNBcrLzPbFyDTiMu4JS",
  "key6": "4rmxwK5XNyhARygzeEPwYxuudRMwpCRpBjW7SFwRVHdKF8EEUCpAfuoE7MuiFQALmExovR3gwzAhXDDtuQnDpPx6",
  "key7": "aphUVhHsn7KheqnSfgudYci1zXu5VYtRSMQFvoFG8eQVMZuqPePQNFPzdbjtQ1M69tb8GZHWzM1MKrgk49vgKcZ",
  "key8": "31oXMkQKmNtMCtmG54qjxN2WFMHyDqxWZNzHarwcXP15R8Ytk7wy7UBkvhvJ8f91vxEf3hpvzHbaEcfsybhyLoQu",
  "key9": "4Jz7sKFgrCKec4sRivXQq6bNb4vBN1QV1gc2sgFQjzv5AZsDGivubCAqC5mDuW6A8GgsA8kNaX3B8MtuxXYNk5QN",
  "key10": "48Q66NfW561X1gSZAVYu2aoi6EzsEb6k1zHAHAZ3oN7qDuhBLJAnz3eJiRJbHqosso9M2WeXFUQz8sNczXjB8C1c",
  "key11": "5WwZTKGmBmRBU8ja2RvVt2yWSdfaNtLWWuqKKFGtjbS4f3SXx6sJyoYD24HURoVUf191em9vLkTN9aemEBDdn1m5",
  "key12": "cA2pv9xYGD28Z4qU8gUuwnjpAbGkwXgq77DY5SKPp4PS9rykRPoLYavBDwdjd16nQVXQ38mUExh7jBbpbgQgtm9",
  "key13": "4PfZG1uRky6pVSF3JJCJLF2b9sr9mj7zGxDCZDYyU4Bwv2g6qCbMeVmc8CAptttjr1r8whEP52y8BoXyu7RQXpqE",
  "key14": "4iX8ryzgX478grd7Z91uUG3DJ82qDFyFNNLR8d2qK9QkpegHFn8V76Sk7Ltn9r7fpHyATyzkPvi67j7rXFhvEDNa",
  "key15": "pR9ZgkizXi99ZcxR2KLiY2nYb6TVhN5Hf65B52G4t2b3KCydQUTEfeUBtZFURP7duPFyndswBsQKKykSWW5AChR",
  "key16": "UbiSuCqhU3cbNjSh7LHmciCviKEfqMgfo5fs5XC7HjLkTTdB9cpjMKSzg24jzmJ8VjMt6wPBMswnmo7g4LmmRJy",
  "key17": "4yejmfC24YcCaSLGsXTB5UMwjDjDVXhKVxS3w4tJc2e18fgZT1yFNdCsxhdg6bkx1B8LzPRtWp13vhzMx52AzhrP",
  "key18": "5YDu38u9UwTKkuru7udBroE6MZiuX8DtbeuDx17iy9vnJJ2VRyk1VLE3RxLkDN6LLFAyxpxLGuQkwrYB2BQPu3zm",
  "key19": "3U4rYw6i1qdb3UhB9jE5LomJt7pzLgBPK2jzrBZew2Bayuuj3J5tZNitZSrJUXoGo8ATQ4KTg1rmiLytwiqwP1oK",
  "key20": "5ub4xMAExQH7Bve441nK4Va34DasNuJ5MBT9scMcJjFVGUFMmtMHw7t4vjSye7nT3BrhdZ5R3tJ55y1ZCv9pE3Ge",
  "key21": "5GsgCmHpRfvkGha7RFCUr6nyMiUiUeW69spVexwacfNyFBu8qkYGm7xryoRfqq8L6FShPcvHyRK5BQLogr4KS9wx",
  "key22": "v2S1w3BdmNoihY574N7C46hc7X3TCU5RZNCA2Bx4fd9X87gLf2yMYCd75i2v2ikSLvL84DmAazfQb3Up7EEqYVR",
  "key23": "4jwKZSicy6MxRKpWCHbqyzEHcXQecv9tEgGkLAWBSi8QgHURyh9xHbemMkBpqYshER2pF15qLSp5XTBZ2NdFEyrQ",
  "key24": "hRMXc5atfvobYgxtKw6oJb3fX58GqHFZCTkCoA9amnd8h7mV1GxPyEsqFWrymVfrJPJyhCrGXPjSFRW1aCSZzBA",
  "key25": "2TgaFrZ8z5UCLq3qhQrVQXwVzbosV31zzYo5UkrjmywTFmRu148nCBFDAsjSbtYR3zuon5bpvHZAfhvUPj2URbhU",
  "key26": "5vH9xWPKw2SQu4c8ieHe5BVq47Uj3gpbR9tZxPejkM8kwwsx5jMcHqbS2fmcfLvJv2GxbjX66UAZZkQpYDxLUTYZ",
  "key27": "34QVmD35jtx9c1VUn93vzzCkwbCjBgcCUm47kSXnntuHyfq2CQg8Wo4CTiZiKGVoUwxTeBYP23MFPSCqiraEuggV",
  "key28": "64x2Mj6vuh1QiSYzdvPzLPy9YPGpdDBXEaYK4i7ty7C7uoTXXcwVZ3wvHeH594qXfnWPJBBjavGgsQoGWFGNhHLM",
  "key29": "3oaHFAHBtcrigfx3rwD3SDxGWX3ug8KvY7BcDsQRAKgQXKnuVvqNeXhKad1pmYD38SeqYcS3jf5KKT5G65Aq7HLK",
  "key30": "23Ac2ZsHLV6dXQjAhzhCj7od29yH97j1TrSK25H9Xtmu1sYtBfVhUFbQ7zRg7Ae5PsEeC17AtKnA9ifS2Z25nr3Q",
  "key31": "5pJYsnRjtF69iNwSTqBjFnypGV545Xbn2RP2bb3F7Yj2yMvJr3FRBvEucxugA4hWA9G6BKm4jowVebapajiH878Z",
  "key32": "2a1MM1VDmXUSMPv8qSr28w8D1JLJUTZuid5ukkuYMpguy5tenPYgpm8gUbHuRP95znHiRZznKhNc65WixkYFWgWB",
  "key33": "5dYPmesPbcggUeiBy72NBSUCukWwHoz1v4dW8Yt7g3WrnY8ERYCXvSapYNWNFfhfBWT8Q6taFSjK3VSnzfB34DH6"
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
