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
    "3JGN38gYe4rhQTANKEZydB9sd3ndcUafPtvzX5Afr13DwtzBxvrQxhSVHUAuXKd6D8CYrZK5tycJZtTioRVD3emt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H3gKiyGFpBkjY16gPi1FJhhxCRGaxodhUi5KFSfbpDBfBJ8puhHzKDqZU5eBuMu9NRSFvSmpqcWoHh7E4q371gN",
  "key1": "biXnfgEgoisQjCr8pBVGcfMLZsdej9cXDGPLdoL3cd6wvu6cWqpHkNLgRPtxHbjpRVKijoCDikf3RS6d9bqRTYQ",
  "key2": "5tQxvZsWttgUVoqefPpc1dWYjPx9e5YUvPtGFkvuGyQysDnpCKLoBLiAfeXbvwsC22gFXzjW6yzFMC2QFHLncMJ5",
  "key3": "63kGcxJCQHVv3Ypj7iCawAz838pQmheXVYv5NbmVcRrgPPKv6rDsd8HvxJatB4qooagUho5dXYELj7dByjGtuSd5",
  "key4": "4UxogsuE3MiNa2JtjHkptzwyqPR6D1dzhMWXF6sYQxeMhJCCVHmVJMigsLxmiDKtRaFp7M3Q3cua5BLgrCEYvUit",
  "key5": "3bbViSYXDjnV45kejTySn2ZdHkKXWVgXRguC9Cm8GP53pC743GPCUQgBkeYFeW7nCHtgQdZSBjpAevpqZhvRDfPd",
  "key6": "29XWxNuPiTkvq6tQXCVxnjptYrdDPrQYrczixiqb2cLRvAtf5BgyoA1m4Mafu9upJpXSqZZUkBAWPV6NstneFm8M",
  "key7": "4KVegyb1HwXGsfc9Xg9cCekDDJdk6kSQGWtknbPq7m9AbW4G5kwCDmEVuJHB316dESbPGUSFaiY5QrgeeAnWvazb",
  "key8": "2naj2RJooDEbB9JWapk1GEvwxfbwwGjA3sgxGDBqMHLhJQLQByisTUpx9cPFVcwNiA3SKWby8URdDHrJKV27Xnpg",
  "key9": "KSjqhVrPxoTCyQ5JGg4agynURV7m8A3bvT7YnMnjEyt2c5sfXqDEVsZmYweSTsbjgFKVjSTw889nZ8XiwrjnxVS",
  "key10": "3cuomKsYGhS8JeqFxiSUjBx2GL1S9ubnwmAvMoHc95mSy1reLsnD22TjvN9dUP6mGxMh2iUhvf63SiRXMyKZHCbp",
  "key11": "3QnevQeGSgTvnnXGFFy2Bn8EbBVBrKgBPBZeCk6yu4yvgQi5c2UYotTTYLR3WDUWGqickyc26mfZzCP3YNarwW5S",
  "key12": "N7D1bpYzo8L2XFLKkRxTkRP4Yv7iZaUMwEATGE8bShLDMKNN6fvF5TnG2ctLsNKXnNuLbfHqhpt1nwobXgTQKwe",
  "key13": "5hdpHgrajQTqYqzWXZduLQHihVocaAMdJKy7B7e8tbcbxFUiPxn8QPspkWmc6kEeEBoAPfGowe7uGat7vSD9T2g4",
  "key14": "3Sc73V9UuPqPusJcK3eMNs9oV4VjYadY8Sk4ERfBXtcSha2t5NyZcdBF6X9GCiTmgjvd5pGLiH3Qc2w6fydJqbQT",
  "key15": "5LpXjVzkPczsrjREyCysxekjgRQuHsUAhiLGmi7ZGasjw5DczbhkZUG4YdxZscNtAiWAjiBeL3P623QACkd76ew5",
  "key16": "4y3bVjhvgqm1YPzSDjf4SYEzn3cpJnKFUMv5CV5yMoPos7FNhvXC7LTj7zvtgi8ZUaKzWPCyoUFSsKPTJHNvabVL",
  "key17": "3UAvY7d3YDFm9Ry9vd56CAWRzssy4V16hDcUieFWnJhfUdPjaNUEJQKGbpsGdxHe8j77JjN5nN6NQ4EPx7G3yYFd",
  "key18": "3xtoJMFdBUyS1VRMXpPZ7ASeCWf5nyuEeNiGqN7dHFn3FYAXV7w6CaxLBWZQxGtKV2672Nvgiu8t5p29M8CrSid7",
  "key19": "mHoNJTrHCiLELLsqDG2jpDkhpBnrFVVadoSkfxA6fNmgbkiV3qVL96QLZnyUTx4vXADWRSWh6gd3954MAzttux9",
  "key20": "Ef3JTW44LmmYYstFZK5Rh8a9qPbbUZc8oU4M4komHNn3qRGJyRhZhxET2AMmPVZ8q5aSCyfYZB2RCKM9qm1vEhK",
  "key21": "3ecEzEa56kkfqGDCrqbzmKwFmD9eVRgFH159GoVjeFsBVUXhAZhBNSheiAEPx4PzN74MxsPtCD9qZEne8THJSGMK",
  "key22": "29hUvzWAeq15nshDhvypNJos4ubUDMYCAtRqnr4g6p77woG8MdaHeWo2SKfS1FFy1w5mbpuoRoe2rPdc3qGSeFHc",
  "key23": "35uVk6nYpfVEhqKePwR5q1L22Huge6oV6otWVswFqHJtFo9G2GnacK65xYixBPPpxMmvdWridVwX4DH44HeG7pLU",
  "key24": "3sizVwafW7LaN3dzycuknrGDpR6AwwEnoTXvu8BbEx7iS22yQAJtx3FgCxDK6XmqziqspeLzYffvPoCx27wumhbe",
  "key25": "3xJ1rEqrgwk4RL46eGcz4Rh6WneoviQkKg7tE8vF6LfUVrYPHqZFuML9UhXtbwdHsBBELjzSfH9X7aYU5J2BwDbt",
  "key26": "2Hqy81s7wPEr6ZrgZLUtW3vK9oFAMMzVwMUJ7ifK7FPz8cUGHdzqwsnxMF23gW8rRtQz7gU5UHf9zXNkiJogd4YF",
  "key27": "VsGG8CWQKCUnNQrwYQmbeKpfNEgwFX3gtENaQHBAhiLH79mzqXsA6UMc8YCEtaHN32smL5uzABZWTrMWyVsmo4K"
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
