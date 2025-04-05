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
    "4FWaqUkNNhTMhz28Nj3JG47fBFovoLeczfxVjQUAKHPBHkA3yJuSyJL4MVFEaonSYujs2NMYUK3UiVyuiM7uSU89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VYRfLCYq1pE9BGYNqK2uarbnsK5XvPkHaR1mrjL6pCu3pgb6smvt9jriXBEvRf6R8gmcmDFxs7EDgosyDyX6xox",
  "key1": "bj6a4ssGDcserwWJ8Heq2X2LT2La3mpLEsn1njBKurCUMJekv8Qwt5bVGthgeo53PGtkTfoBrif1zUukbuBjvG6",
  "key2": "4u15s25XU7KGp1JaC8hfS6aD568ne5rCc6PQgSWdMWn8LCf6Wdj7Hmwj3GhgZEDwh5wYwce7kgrzM6GVGhS3Zv7a",
  "key3": "59nDiocUYPuGVbLnSSCgAi7eZgSkGpFbgyNdYAtFecPmmRYgFbfTRB4onLE3NJmL5UXmrz2dFhj2UxdqUVeRcrrK",
  "key4": "4iNfKQuV8FxYvjUF6agGqqh965tqYYY9g8Ai6RBxexu5PzPbrZHDgJ3eFZreXc3d7VvXAK14NgoDHRuLc3ymQiwV",
  "key5": "MmTb6LUZAERYHsYeDnoVXvzGh7GsWa6x7cFEWkyKmN1v3wabofcsEcs8Z1euvGeDQzHYePUWneFmxi26ErBRCWX",
  "key6": "5YuKnaR6cu6j7dnj7RYig2uoy4qhdP4vJh3SV8WgkpQfTRi7HmmDYzesE3A9WrB9uxShV6PypDZq8JetrUNP1rvq",
  "key7": "ZFxxhRqtxABDHRVomx62Ajj95oUSQXkHwD6xaxUyNZcVKCRVsWHpcwwMjE3DLzfDrHmKYGGCFgVHJYhaNxCsV5e",
  "key8": "66zVKsFqivWu4XPioeKyL1gcWLGjT7m5Hbt2ZtwPeWrNbW2pDopiTwWJFBQAAUERkc9YYV1FBT2BQhU3PukLoE71",
  "key9": "58Xiy54krdDHaYrVVwJpSTzJ6ExQW2FAXGkjZeVrTtQDfqnYgpJ73Vo7ZiBQLWyx997YLxRkN59vzLmSsugAw3Ze",
  "key10": "3xYEzFKsxELbQr44AAWoh7AnkuhMGehaq1wJyKKXwajDbMcpTofyiCMFNcjSGUGz2mzW2zSknrfWZSyfwaRowT6V",
  "key11": "44nbRn1XoPFEGZ5PBSBrWEmKL1LjUMZvph2YJKE38NgbRk4sjkhSfjTrFX3wycQReDMhFBiYGUkDkFFw4xTT3HQB",
  "key12": "3p4MhgqdRoqqoHZsNDY9XYPMn1xy5gJpUwwVv8QbtuWeWRSGpL9ew8z1HAp9vixpZAARL5EZ6Z4hTc9msWoXGjHV",
  "key13": "5mAriXWLF6rBcjAdq9XHqXrFMojHC3isyRoXQMepF1tYtp1GUBb6kfcRbDYhJjbeugWDJrWm5J695jKZSoax5VaN",
  "key14": "zybbJeC4AbS5Nq9RyCNP9StNLPccYjc36jCSmBLYvfZPnyks6bkSSyayc7kHtt9YYTK2J71gD1j9Hb7cap6pFZT",
  "key15": "2MEEFwi5q9nDybjTjkMp5aR1qZuQJ9auWZXxN1uJXSMUf6FnwMbSXpLLQ2MSzDx6xJ35RjDyir39mfbZBb7tqCeK",
  "key16": "4RLFriMYSvoPUWpmyu6szNXR8N48ddVLNC8Vmh5Ynb3vSRXHMkQGLAFr5dbZEw9SMUjaPS8YtpcEmDuCNntMrTuS",
  "key17": "4HPbQKFNQ778RStmNp37BGWG3SFpSmsdD8GRtBSaGaC3H38rCPsn4MQLcXHBnn9J998LnG7R89GPrJwRWE5g5qmB",
  "key18": "59jJ7C5H8HAaNcXFrezdFcURaoczhw7EuRkbVsGTKvxpkQfHkhqD9kdWqj1NEupZ3RgSXhNvPc1b2oCNHBDNeboe",
  "key19": "4gLTwVYZE1LhDLzoLpGMmtYZXT9Rrv4dqV3Lwf7bWTwjKNG2wYHKZKnjVHbLFQvVR4aytXKfrQct51iQWaz5QhWX",
  "key20": "3fLvkUDpQxYmhf4NQTbpDsnURkSP8sLhLpFB7YCJLUFC5eWZkWatQTqyi8veDmUMS1jxZf6GzSaJzFsxNLeGJqbN",
  "key21": "5fyZ9ibBTmSkpkeAJTVR9DJfESnsiWPp46xsBbCUqYkD5GzVqHehY4zKnveWf778h3CJQ5WwEuZQbetGnJ1vNEbb",
  "key22": "4LMSgJfdPuafhvVSTAfDnqRhEjwTmGCzxcTELUUrRSa2Bm2ohFHwuf6yGW81HhrBUJEEMTcBRnrjC2Q8whBDCQeZ",
  "key23": "3RdKrpdQJHRVuXC57krx52a1zwxzyToQRMCmWBSgvcAkqDuLitz3gwZKjhSDmgJMpzkhFUqqLNiyhMRLJVnQjd46",
  "key24": "5gRrYPxEafCZ4DsUvbTTaEmGLGufXY492u7NpAYmPoZ2heviZohMDZDTjr6K876qg2S5UqufnHcFUZCQt21TzjUg",
  "key25": "42zxtv7gLXCNmEmroTYuEgKsm2TTc4y9bPXrT9hSmVeFaweuaCVGovBv9RYo78pFzmJNSHw6DozzyKZURaNdCLtM",
  "key26": "55NpYBKasRM4UVa5bz4Eie1N6KpwNv5raeiDQKnrrbH1LsTAKRUcxQgy5EiD1JhXx2SWVLvf8vTBd6Nd6c9cp2tw",
  "key27": "268spmNdrEsWvfds2TyZTBjchD266QDri5Gvq5kw1dxh5jLkZhP1wCcq7wcczmWb5mbVTujTxp48pFQHbipwzMgb",
  "key28": "5BykTwUNWnHbfg7KGATKGjZpEYijjNs6AMXLGKh9KwCCJvA481XrnpSURa8MepvthYutLP57YgixKU8cbyoKba2",
  "key29": "3yaWUJMP6LJsnbEcTKFaL4ZCYA7nAvqwaP9PLj2onf9LtT8TWsKqAxD5a1yLqmFFydp33PiY2M2H2FHgrbCaeC6C",
  "key30": "3txPKuFWRDK4Ab14vGz9uDU1rae6Eu2EQEeAFKJjvzab4i6jUedFKMrueXYJCqfo4kGYPtn3eR3E7UhXucmZdTXC",
  "key31": "2TCUGdGJ8ExcCS7xt8GoSsrBU6hXw4YxxwTqwhbsMRuTB2yRK5wzSWG3SfiwwmXFFfktrwRgPuRCWuJwXAUsLM4U",
  "key32": "4vaRwZcKMn7EN1ynNdYBbkZwWWyNcoHpG4PPCNDzzv4eVmgpQjZ69gHwYzCL18oQxL2st2G25vMgRMUitPANegAP",
  "key33": "2iSZfx3JpC3dPw5dEZwfvaC245Ld1cQaqANtFwY8kg3Pbo7LakEFkuYYUHaogicwbfpZP1hdS1gY8WUSQRdLRh8T",
  "key34": "1ukXnvmhYdeqrt6DFoUDj4YfdTCa6jP2Dgogznmo4Dz5xR8fnS6QqQR1rebsCbRd4WaBNXv6o8NSEE8Fd7cBqpS",
  "key35": "48yGvhFX3TiwcLwbuRUqW2VG17c8FYe9TpF4uNadhcpnH6UQsXJWcpSeswuyjk98QzGGh2y8PswGXNaAQV1mm2s1",
  "key36": "3jPV59se6fkvNTeqtkMpehFLL4oMHNpWNTdvkV5jeZ9UeGwcdzmkTdHF19nGhvPsTR2akZE5XVUwyhqJwgNCHnQa",
  "key37": "4aFsDDvCtEpVYq7cdZd6fhhLdFAQbnZBvd5rnQYTS5Sq6ptQ4Gcy38L4BnmzW2MBQyZA93j8PbEXojs5HCbNQ897"
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
