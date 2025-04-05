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
    "hi7t4ToJTtLNgyqc7bes1XhjBLL8SjVkyMBPs3vFwoHCDagBGy1JxLUQmzqRnJo18GEp6avx6W3ZzBJdzb4rCZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64wqCJiznCmivcgfsaTj7pd16fUq66BFdeWorjvSknFDV6uTdJinZMgbQ7C34nooc9Spzij5p2YVBArrZtBkoEqo",
  "key1": "5WY4sPPCtu3MyfYWYabCYyDQSnKQiWEyEaUBzheBX2dQUjQoEXoxbiGXjCaJBrXPzaxviCH7HEiiqK5uANvaLLwR",
  "key2": "dts8NBwQFWyEKpyCpuqW2Z2NWd91ZxNUUvYhLKccdgeko8Jrgc4h8kYjSjM6MQm6WTMybbATCJtrgoPLBnpKz77",
  "key3": "4DUYm9znTTVjYQ5D8cV7UFAM5Td92GDJESLBd2y7JvnqgK2MUEVBbVzmr7oMu7mQT5j9GGeQvinpKSsKdMCWhFrJ",
  "key4": "4LMm1ksbL9PxJxSzKjTDiRqhuYTQiyfhRRSksuxcv5VXEido2WsU1Qzprfc2qcRCGWxnXUjs6tJmcGsjDagtLPcK",
  "key5": "2Rur7aXy6biVrusxqmBg8yt4BDZjwidwcLRFwxfDUae8qzUGkXk5CcZgrDmDHmPowXyBTEhTpthPx7dddgSabSXM",
  "key6": "5Aw5avseftNnyZTrmDB3RqQELvRGHy4QpJxjFxNZxJksZzLQR2QeB9XLEZEhboT13CUCAUPsnQAAakxTR5XncS24",
  "key7": "2wAJ1MnhApjEnKaKrcja9rhC7CXZfx1gyfcBFMQCMNk3kN6pQt8Q7Gqm3QDWbBgRXFvQHHH2ZTok8P2bGGkFEJTJ",
  "key8": "5TkHtnPuK8fqJ5jpw9U4WGGZ2Wu4fWbzG2uQ5SeUBM6PtRuVmeFTSCQzki8z4rmGJarm47DuRhtyViMHkzH1KiKj",
  "key9": "5ExThNTyXwqwfynU16bMckemJR865eeRZAKiTQMwPJkPF3CZmbWxAPm7heuHajk8xzcDDa8YAFPvVifbkA3sxzuS",
  "key10": "3rUj7tujxUQppgMphFXBGqVZLff68pBdxGoVjZgkbyEiv2wshJdqXGA2S2twJ5JPbewbs117d5f8Sqtfna5Fa8tx",
  "key11": "3FVrrA5uiqYqEaXmKRU7uyzekAPGopSVRJBC9sTnmPaRcApPNWrJ9KWyKM2AJjJwLT5Q4jVoJWoKbDU9fMNg1U2E",
  "key12": "LMZqBKpRPJEcP3bzqsWHoCktwDQ6eF5smmxgbedUmhrvTkxKW3LLwATu5rGNKPSKK8zZW2eTaZvvKDcBW9LyaWW",
  "key13": "4nFdoisJzN3HX2zJ7XdBeBeuFkPSxd67bxGa1JjYBKEZLW1M59788UyT6ifH4LfZEgdPiaurE1ErpBHJSb3JkM1W",
  "key14": "5hYA9sfrvmfLPKFwoeek9HkeeGsWP1AsxLnHuN7qhPXY3pq2CbGKwB3pEZrwRdPMYKRe4NYgueKPAzhyeNUJnJ9Y",
  "key15": "3LUHyzCz48Vv3Zg32voGsxuUQcitfqzS4H3aRk7suVrymqCspSGTArC9oivuCRTUHvXu8neKJuyh64xnmwcs6qmj",
  "key16": "414UXUMgbKwi5ZvbPevfPV3efTN2dW3ApksWoMTwRSDKHLDiVczuJropG9nvBrxnRuf3Fc3junpdQYbvevgvZRKt",
  "key17": "3AY81aff5QhfG3J6KVmmuBNcaJMHj37buDhY8qaHQDYqjXXQ821x1zd5644NnCGRR3k19fiyhfiKzixX7NqAAf85",
  "key18": "4fUHiSdbZUE9ZRbmZFcHezK5A5hCrbngXWbfJjS6qBmJnCiotXSbZKF3k1u7pFyqvx2BLtMgMjFNHJYtaw4iSnBa",
  "key19": "3JKAzztTaVrZSCfyv2FTzTZmPxsMuiEgJnm5XNxvd2LycUXYE1BpfBoTZuxG6XRW1vWtwrhDz85ue8uwHP7s3G2s",
  "key20": "5ag1jPAya3hguQrnHQX2an7Adqh3uS174251rjw83HuDbZiAR2ykKhem4t9FJcgXZzRVtSKGYVknn51qtqvq5H4N",
  "key21": "5sDWNUvzQoYD9kN258QgVq3EGHrHznLDkyAGyeC1KNi4wimma8qUBbTA18RziuuzU5C3fXFuQ3W1GdZAp1U7B9j",
  "key22": "3mkEFEPfdHggC3CqxCDboczk5Z1FFStp8Gup7ihtSkry9mk2QRpqPiU9YaiCK1UMkGQpkrTLLdmBPNzzTipKgiZj",
  "key23": "21HX4ACnHrKU5BgMQc5eVh4twosY4F9EAh41jw45syn24LUbLZRUon52LhpCicZQSthCgY7o47i4q995VN1acHYb",
  "key24": "59kot7qyTD35FSkj6EBhadN3NyqTYnBNEX5RKs4bHEypH4vUFzdb2pNNyLkpPpzcaHyJHahTKe7hG1C9FvmqyLm1",
  "key25": "3nZvHtAuSrPz2Xt2quxiP1U7p56sueiAruj8r8ThnYEZp6FFJXsWp3djXDxQj9wZmVvbBQFSCFaoxqQq62y69srz",
  "key26": "4cAZ8sNP5cYmSptpi3yUt9AQXT61wKSXMCRuTpNMit927qPhqCBYT2PHLf98j8S3LYmGqUhGufLQW77FwXHGuYKG",
  "key27": "KdMkXVrPvgvDzxL9KS1yUuAoBkyoE5gbSS4mG4UM69XgVDAHcis7895825okQzgvSgUoJmpaJ4LZigYsWsarnwH"
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
