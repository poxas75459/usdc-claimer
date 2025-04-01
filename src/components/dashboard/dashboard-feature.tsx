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
    "5vVJrjpdHDHTnf5cjoMTXwfy8eE183CFH5w1krvb4DtuFtsLSG8zW74C1JH5HcSRpEFBjasXeov83x8SCD1BcVbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DepSrdn87JR8TNZ5XrHRqfRfAYJPx4E6jfMP7Pg87GuzJsNoUYgwhJUojZTgViF6d8WsPX1h49aZPtFaeXQLwjZ",
  "key1": "qTZ6MjBNvL4wzvsHT74tHHLZJniorSqsGZiaiJ2NQWGqK8KKUDuC4bUvVNvTnzhY1numgXn4ynjEiKkU1tGSez1",
  "key2": "2S22pEpp3WAF61eK2VSLAyoMX284jaFXcEaDnn4tNa7eEK6qcrNq8Y6k7Do8ipowBJG7Li41PkyXsP9yGwAoR3jU",
  "key3": "fZso2XqgdVR8EZfagvsbLY3Dm1G8UQSjAVy8CmfNsW1u8yaZQTLPu4QppaqwwZCmk4iFzmBA56jufAPn24oJtXK",
  "key4": "2nW4jMkERqCg3kv5BbadSzQqKUgpM3fxT1a2RqvGne9bMx4xRWVNEbvfeqkgEJpHjmo7gx1bNzoVmLp3zjToAeG4",
  "key5": "31UxL1DQjwDf4i4y2XPHEoX9VcBtz4WAyW3ki91CLcsinV1wgwjgB54N8BmzARHheTxXXkqCVZx1H4UDu53NpnZY",
  "key6": "rthyocvmP9TF7NTRGvNCZCYiifurDPiBsMmS5Dkt4KiCFBe2CFepdizrvjBX3x2zqiBrLUBiMdw7g1QkNSyMmrr",
  "key7": "4TVUk5PppSMJvjpdvsW6Vs64hhg5wJRUmgo5RZsKvpPkvtHu2dTmX9CRveNKYKcNnWWDdDPPy9LNKjfNhz17cCFy",
  "key8": "3uugsNCu4HLZJgUCRDJ5Kwdoxe1vEAxxCu5US9v4xgJSZ9eumsZWcGkGDMkL3J9mgQzvoZSuNK7i8m3yN9WJaeu9",
  "key9": "45AzJswtxzoXDxPaFVYtnqLv5u2dGmRrWYQMvMW9vFryF4ceJtwiFXbG1JMXpqV2Yb7roYsqpQBZxkggbyFUeSAr",
  "key10": "5LDQSLmVG5doUdn1Uu9qJWyXdwy9iXUN9JcT3H1WTc5KY7RKyBGxHdcEvGtmnsBtjmkkaXoUTJso8CwzU8BKCfd8",
  "key11": "5umKEWvjFCgaeAA6M7ApKoWtAZaGTsT72w5aZ7rEpryaCrSJD6jabTEdxC4xqQmA3f6QT2298k9xsWLkZLgB82Gp",
  "key12": "3gc2AjPWMEpmzF6WD97p1T6BkWxYYqW98MCFXRBDshAyxE7HWLehWG86wiMACaj4Q8Ws5AQ29PpY6szXz9UBNrVp",
  "key13": "32utm3nxoDNZDQigNhqjDNwyBbe1HwGMykwhMnFQyo2RfjdE285hHsqJ2gcL4rJZbMxHw64Jp31fMhEu2vyvCQKi",
  "key14": "xN4xkDbMLeo6bMbjBtLogyoQN6fWWqeQbZ9ZjSoXKCBrCupitaqersBCCxTdpgJzXkGDckCLJXKBDBUyTWh8zyw",
  "key15": "62hCng9Az3DjXG3BZnDQPD3fpodpTtPf2qwXPxGs25s5ZQMr4d6kexTN8C1HKzLkDRG5Fo8y4SNU8sVpU8Wp7xXx",
  "key16": "3S9Qa1gW4n5wMpis5mn6HqydpfnxbpMPYnJFZfPn3FzVR683XpPyuQwkqpZKXX9SdYeQvXCTQaZ9Y9bCHB8ozgXe",
  "key17": "3V6mCMpfU4QPWtbrDwR74zNYQBrLFG2WatzioeZXrmFLwW5VFUDDNAJeu9ZWRCj9y5SGq59G25XoVs7HX9BAMfKt",
  "key18": "26iu4zPWkTZD5JVeYUeQjoUtQJL3q14ESgukiANNaMHDivYZS8DjXwoAxAyfANBBuDpLm81NeU8gytetohTDNT6T",
  "key19": "jTphk2WQ9x1HCaVxLy2opW8s3WfrECRGSSyTLYsY5RhTt81Lg7mGQZpmWZfVWH5ygFzVVrnvwnVKXgG4YQaDtGN",
  "key20": "29vbVNWLgBS1heciwDLvy1GezdhqXvzZScLrFbbtgkuZSVdR3nYFr6RvrDwLrjeUh6PCPe7dsaNxMpZe6UUqYQt5",
  "key21": "4XZDiE5dEHY8GN3BvK63d1gUdS8fVj3DpELVLAUicKrTPd8XUpnuPGnoQZTWj3FgzA17s6bXVznpJjULcyKQcWCm",
  "key22": "24CVepTMdQpviTNAuSofYfKD8kk1hUwcq3bcsMU9uUN2athC44ZgVmfZYsAaibpGQYtBgDQMngJLwVyQGWz73MuZ",
  "key23": "2dRuTPJWzd5y2Hut8GaUfjbCW7ghtpjXF6Tt9sZeSj6Y3BCcSSJyo9tiDaVPLVv7fbfS75H1uxtKMpEQ8TFMi6WL",
  "key24": "63Xdv7G6jyCBe2iUVArbgM28e9w1sxGyBVs51ccHp49kG9MFBeQEJynatHDGihLyyCF8E6sUyjQ2orqSKuUcdK3U",
  "key25": "25nHGUXDyKAnmVEVGrxMMbgZW5s4xJQskXEYSULG4UzUdbvidAFtYrmQMupQ3DYWE4tB8gAPcH7pBJAreurt7VJW",
  "key26": "3JwfhmLSfQJbJoVqKgrms5A1i7HhYDbaVuvAUTGcwyxhfnTX2wb35eVSL6HNnycktMTtS7TbSBueBuGL1WfBsF8g"
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
