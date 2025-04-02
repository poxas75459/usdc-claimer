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
    "5QjYV9nMRupW6vxD8J8Ed6uGyTuhQ2xDxCB7hotAYWzopLVKZVY4p88NDwgq8DSyvwtfU1W3Tmz4HhLCynUSMbQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AtgXKkTDEQHfFyp3nhiNnFeS84UD1LB35saXTzB4KVM4kSAWxmhNW41A8GSJ6wKqKVKYwbyfBY4rDNRUKrWvFv1",
  "key1": "2oBJm2LqBoF9R9BjYpbaeEbJexyFKyDNgkyfRj9kpVmBeGQNfuhNPtweLpFNK9Bt5Bh2Qtfoo7qYEY5EWMeyk6My",
  "key2": "2WQ8p6WjdAYQmo6xLRGWEmBFWDAPqck6y5aUCJ8ttJQchHEQi2kP83TVwNmFX1ia7SDjPNXGaTG5H7z68noxuKzx",
  "key3": "3XoYGzTrFXJAjGfU8ES2EQANpqSTgFZcAQsUFFBDWMavti44jrCZQowQyqQhSa5v4iyHVtBNsLrSYgpeNkkAAmhw",
  "key4": "32ersnqrHueSXaHghnMJEoVapNKvvgCzYykraZ9ekjFhCs7VhUq73mKAyMy2CSAici8yJudCuWHFn5u7dAUDbQae",
  "key5": "4PoRhHB2c5FBr8uN7Va2ZvBRjxuqcwPwC4axw2mjFeLzgMG2GsofAL4eHYSewTYbaxj3twDQcodS8LeEENP7MEjk",
  "key6": "2rgPEjuGAH9UeJSS4GaJzMrRWHYEEKskpbMnMAc3E58Zs3fsicuJvx33aTsdnjknSdovAm9pmK25Sc2d65K1U1Ab",
  "key7": "5BnP1Wd4Koxvg3UqTp5r7dPsQDBDgLieD4RT4yC5jYTvNdef5jJpGup8Zb1cHLKRd9SJZwc7SBm8tQFfDBVy838D",
  "key8": "m4kFck7PuqCWSM8XvCeGD3v2XCwbaeCPBr9KGfVhm1PV53uDhhzLw4VTZtSV3JwrcSmAYuLK3jjfCgDsJuUs8RQ",
  "key9": "39ESQk6G5T8zdcRE1EPYgLc4zAoVrfwsDdyqpLiy5qCTppSHjM76JT3NKky5umPMMbWLUUScjEnpvvvd2b8RXLfb",
  "key10": "5VoQem4AoeHALJ6F2AiUS9HVJAoJEEZmuLszjxoQATUTgCbaninHQ72q8HS9Db4cYpRuM3kt2K8wFrWFiCxoiUSE",
  "key11": "aSQpoe36SgE14jvVDxrbtqRDKpSwT6vWjxhLFiNaZNgutnAhHQuTMDTFSorr9nhsdRYZCjGD7kfhjQChC2kjwHu",
  "key12": "3bCHWDhr9frj44BgU4hsZxLKjGFNCiC647DLd4KXi4dLEFW368j7pt9TZevgcGMiKj9SSzPFednpVPyJpXy8S5jw",
  "key13": "3f12XcYpd2bY9JgJ1HjW63MggRrQ9wkYDEp6kost5Lb48tpPfBonwzfaQpNXhzXjHVHzfGpfKuv97NDFTsWTx43h",
  "key14": "4BfWEfjy32RqDQ35qp9Wwyo9m34WpqSTqZ1e72n5wQXhJJztxXqgd6jcC8d18EskPouiBvzVFewYLkLB82SK1dra",
  "key15": "28hPQvmkdu8vkds2tkWr4ijbVzswp4QmLoNz1gA6zXEBHCitR9X2QaDgZMZ5kegsRCxSrKSaYpy5wLrUG6ttcrAG",
  "key16": "5Y1W2S3zgD7LjM9ge3ssJNAuNNeiNKdwhdYHEMnccpUGuAEzNNpRGgp7qb1JZGUZcdLCX6VNGu3bBRHbmqjZriUV",
  "key17": "m4oGUKCc8gbG2hubMXCoKv1FkUT9TEHuXpxUm65K55j57xa1nzibcAvs6mDhJGVgGjcdirqSXd2zCj7vE5nEPvN",
  "key18": "3tewtMPZ4qj2RWimqBBcXe9iVzh2YqH4qtskcaeqfzwLkWmHkRMyjqpFq8Zugj6i6De6annApKSBe4yzHT4Ape1g",
  "key19": "4a8SnpwMr5LfuSNTMgfpheAKiknoiKQW8pcnNVNLURg3nZn3aTfu5NF4Y3fGpxwck1Ae6KEbTtWRitWcnYMqGJps",
  "key20": "hu4tuiB9CywiiNeuEAfS1T5bWADuXtY8PnFN5MZXK13dwxUPpXpQXdJKX8NPutDdFQGEy7gGjyvW7Dw6tzDq3rp",
  "key21": "5XVj5yXARo1UX6WkqG6CpEFjnzRskXX5U6PCFQ3LGcvgtxeQo1WJXJDHFtebTbcUsMh8bAg6Xmfcqma8nMHXCLCY",
  "key22": "6N5PdnBRev13evMU1NqUgz6sZF3TNjMNn5AxjWEWavdCSg7Mx85NfmBYV7w8sAFEAuHx7vfpRL1t4MzMUhWj7p6",
  "key23": "2hQRTiDNAFwgBeEhpkvSoi13LmUnUYinW4NZsecpTbzf1TG8Nxtz7PwqUArx17bztfaZm8bW2Amj2sYWxgjvYJJw",
  "key24": "2WRtDBDGSxeTQWSBqoi3wsvYBXxCDYL1BULfFLxPC5rN1YUaHejAB92LoND8WxxwTTKrep1HsQWXYJSKgRdW4g3W",
  "key25": "5psTZs2gYqoxS2tyg6LQpoJkwvDAqp8RZopxrqxi2T8QYnZoD5Vnp66YyLFNvAGWr43f4aSHqKNhenELYygsuP2o",
  "key26": "ktB6o1uwUdjPhRHe25nK4dWoWKWJi2Mmgk9sDmovBHALFzE5vE5Jxn7P8fcZ6xzP691hZubC4B3RNCUCe3XbcTz",
  "key27": "51Z3nVU6TvHDC3Xp8zS5GvtsvtkkQ2AwWh6HYAq5WKVTaWBJK1FZXXSH4JxQo21JsodEjYVrCgYohyCfrFUnngUR",
  "key28": "aH6SiP9A6xET2ceXQj9uujjncEsKh9LgLMtTMYXZwTGBjpmayNs1sQ9cFczwG7vEmkaGGA6heY3RWmYMZfcVJJj",
  "key29": "VhNaub8dCn5aDVFt5uiYKg5qfFSzqojy1MtRLVDkuzxKzBh3pg9pJKR1DfaKoxv52DjuoBuZqywy9nKeH3CMr6C",
  "key30": "216ab3g1qQFgug2GPC3YKoEz3VFENSvwqN8qbxUkXeJsGFhGMFLVtTNUKzkgEd9HXJ8CmKuDbPGvCasXazp3J8jc",
  "key31": "5RCqWs7wXgfjfXLVZeGtJCzZ3WW1R5ZWCns8DqL2Rz39R3ZKX8poA7v1GaBhHBfX8hVeZqgQhoiXaXtjTZTPojfu",
  "key32": "usYbuZBVaQ4gwHXZbaU4KjeSajnFnPQiy7ZTCBnytfkGa9LuMqhqZEx5eNis8n93orjSGJxd8ox2M7NxGqD5CfC",
  "key33": "MNusiq4BSQv2gHur2iDfW17TueBftF2MASyfERa1Amn5uFNqrnxxK3fTPgTBceBQfVqyVNgzAgGx6LHLrhCBk4M",
  "key34": "2ibz1x6M9jd51cnMxHSNqddannu3Z2MjXcvacdHAusDuHwmYnGhTtNfRmKK3WASQCxKq1x362W2VeFPKf6MhWQss",
  "key35": "2SrAd7ZPXKmzZnrTwsvzX5wp2LYqektNP5zw2jMxdaA4yApG4jTgm7K2h6H14oUq6PJFgi9yBicBYY2HqfYkC6MT",
  "key36": "4YMQeJ8bSSimoiLDNndCu4gUGSpKmU5i324HBm8iTUcm3mUZ3uDevcMvn7GtTUzefoXJqw957jkttWmUn1M1FLQs",
  "key37": "3DEGtsNfzcrz2esP1oE6TtS4f2iCFe5bZJzDi2tecBC82HPEYdF1fFfJ3zhVAKJsTFTQokwq9wQJbnccbHEW6kVb"
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
