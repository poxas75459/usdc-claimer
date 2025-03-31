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
    "F64v9fMAHHpBN3j6bgRCj4gR2fF1vBW6BnFqKsqCq257PA1iYsTnutybvRSPktgtxntYD79s196Miiig9ceKAX1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ofx4HaGYgZibnUokE3gU9WX7LSry3wgr7mHfYkdkH6AGtpvA9isjgaYw2G3pbK1BPCept9dPFm3aUeCUHW8xunz",
  "key1": "5QtZXGMccCdjrxCyoCzNVSr2UMKe6iBJAfCuwjjhvd1hxzWpEAAq4sfUuvHjnuHTRPiBDxT4YNpVRn2T9PMgthdA",
  "key2": "dJe1Yequ3LgxAXYvoiLrywhX2wfM4sqZyT53qPqgJKUY54DZdfLNHF18rEAF2kDkv64wtErK1yVhrR74rn7cWnG",
  "key3": "37pCQNg6wzR9a6j8MugU5yg2dUxhM3aEhXFeNhGjwFeYzxp3GaeTzAhpxnNLDSf9CwASf7DTRFrJSu83NNnSy5xY",
  "key4": "7opsFznr6TReg9JtPfhWLaQLTxSvC2Ysahb8yq963siW5ZZvaARzixsaWAaDyUNFuuptagFXd9DFW5ALGrDgRuy",
  "key5": "2dGkVegKxY2GfqTfiaP7K9WhxmW9MGXbpueePzkm1fraBRD8Rv7viPdBGxmu8dwZEp4bQdY7Y7zXW6MhoutwHfaW",
  "key6": "v32pHWV5dZdTfPF6JqAEbm3NqfEuw6Z2QWNB7YNdeTxiV2m9mMT5k8ZRJ5QHin5KGv6hiGdBqQXRCs5YspA5Ccs",
  "key7": "63qAkaCZXNbrcJfg3P47nNqLqGAPZzYu7aR5PqykzARYeUfAr8JEV5nRsk8AGfyduXXSnWGjHG7wikKDXkefYJya",
  "key8": "4zF36GNiGAR7BJNCEBj6H1P7J3yeQCBfUXgjwut9Qb8k9d7tkYaZcfcqBD4jJ8dB7WQLMZxeKgn2e6UzQnFod7S1",
  "key9": "3pdPGvB3iYwfUN8vSsHpgg4GdjDBK4VBMM1NdFx1JGdnRo7b7Sa7kB4bnPSzKSqDGNakCGKu1Be39dsiWM62YFJj",
  "key10": "46daEYfWUeofLf7pZNYv5PYn1CaqkDSyqgaRFrhawbaqzztCswnpEnhzd4RDBcyWL1fwHKtNSjNxHZw9HzHgWLbp",
  "key11": "2CuE1f2VbsjUpED1GZDf4ZJM21SAmrCcKbYX46FBKS2Uvfz8THqVg8qcxmkgMYVKuWo8LW95rfVZikE4sUVW46wX",
  "key12": "36wCFmtkT75p5BVYRJf88z6WA7FkTsoeA3bxYGb9thCuQt1sH5XKuQufK4JmU9ebKLeZcjWFPbiDkVYibYCsm4iG",
  "key13": "4hRySP53hyFabxCrEE21p8jdsXy8QpidMRVSw4kQ1kW9CEiRBnyMvxRcbYW8xrkZsHstL6yDz3heSjMyVEvEJYT",
  "key14": "24cKq5aJQDevgLKn5o43X8uYpCiGgieBK73P9dcojyoW2uZtj9eAiFeTobmSQEhsVoy8d57ASnKTLBnj1zf4BfYP",
  "key15": "PWw9SqfZaHpEeUCko2hd3U1A1JzGkYSyy4i9e2P89iosTJGt1Shnh8qBJ3YkyLEaEdingKR4kP67pNBJD2yHvR2",
  "key16": "2YjpveGqZh7GA8S9D9RRG8ZQ45P3RFEJdMPaFBMUM8pGeaQyrBNJ4FgBUhLfV2MEiJkhabp4Y7MwKin95ChGRyNY",
  "key17": "5Cx1Qw7xQBDdqLY3MrAnqyfWgpLZwAAXR5qdqstF7DtcaZYRTiHcQj4c91LFWQ9ygQsKCE2CGGojbXBkict45hcb",
  "key18": "5nqeQsReycni72Zo7wk1Yid6cdM76FWXSVL9Bhy9gP4WR1Tdh8YkmzkDWZ4qqKYsAhuixWXDTYVZG5y4PpFDMBbN",
  "key19": "2rQPxQaM7cp8HpWtmA3ko4PuKMCNHfyeJXMsTb23BnmXjqykZTDysgta79WGDHzM4u3hJ6KearuEZBo1Eb5GvVoW",
  "key20": "23kboVjZdFpmNspjZffNvFGZMaGrN8rd6HZnwWWF4Csya9jsuf9MJtEFUC1XPjctVh8RpzBZMv9X8jtg3Zxk9V4p",
  "key21": "5TsCZa17ibrpTKivHUnC1FWsoc1Kp2rF8GqEcJ1tipETG8n1oABQjVL8D8pSyUi5AVUH6V7JZY6ewHtMtvB3Pjp",
  "key22": "2UtfKW4mrmZUpVY9tjs7rFjKJKBjq2HXxRgCRbCLfdhjfyXBbahfezLga3KXjGKEnCU6kXraBwSN9qAny1Ltaxez",
  "key23": "5SSnJAMKTE4fem6BqpfTVrHpjpPzasipiU9x4hBTDSxrqnvqDTfmGERmK5kC9uDDYGzvc4mPBqPC9rZb14U1AuZM",
  "key24": "3bUmE9hgeSn4pS3UpvG3shbtzVdfscDsKbedgmF6SuPT9pcJ6vAPqAv1SZ771JgziTnfs2uoQXxWejyX6NVJYofP",
  "key25": "nVtgs2uMdJZEE3oSvEwC7Nz184U8dCBmEGGfpuNk5FkkjooQtADttH7BY4dmrq4B94GtHnaYbdQPxQqf9w1hAYd",
  "key26": "52aGLiKsXbmMC7CTXbQXj7UeCveCbGUorrP3u7crxv8JiuiFeseUTjQVjwayjQgNj2Vm1Yi3Bqw5FcHfJBQnrsqi",
  "key27": "36htZdeChPcbBbC8bno9KQdKbr3kmn6XR9o1QcLBpVY7fxsNiRfoFxVjVkPijLbB5PxVY7WBNomQH5YxMMeNWJSH",
  "key28": "LnpAFMEW1WVhKPEqJcRUPcj4xf86vp1oNx5hTPPDq3S5K9md89Xy7NAofzBFAsnbWvypExtLRm53vKaCzvDzJbn",
  "key29": "32sjmWKjqEjCduZosZuzsuekYG3YVcaPpoTqDmSDcA2gyipDsQXKD5TsQiuHWqrhNeSMgpQFWHbpWsS1sBRxwFkZ",
  "key30": "5ysQWT4mfVSw2eF2SPgH4Hf8eTA8jshFwnAG4fA115KxmagoTGKFfBzdRjBzj5RjYxo4nB54Zeqq6beTtCgiHpk8",
  "key31": "jAC9P8ZvSENggEizYxf7GdjiwTEUVUmuZEXNKAPse8LNnwFnRRfybTpxFKH3GcZAjC4sjnketSZdnYzxvyg2Xhi",
  "key32": "3NL8jpZkfTgAriaF9bYcNU62ev6zpEPMocCyrZunQAjpKkgFmsEjfhSco68L4SMPkV3TzLK6Jdpg5KD11zfFY87H",
  "key33": "EA74daYi95tqxZ4E8QiCjoxNAayxifcR6bPSsJkk2YZ18Kt9sLkTf4taRSBsZLhcifnYp5uxXgSjfYmT64Bj45y",
  "key34": "42VU62N76tCdsgpU95fmGssXAMHtgAN2z9DxH231X3RupP4rLECJufthCaJLqYigcnTY9A6X4frDqsmTPhsqfsBT",
  "key35": "4S523Jf3sb6iNhueuHwQNEdPv66zoVE54jM1YUZiazbpuFgR8V8gsVeg8p18WCxteQCf4LRKKPPSL4YU9xXXvUFb",
  "key36": "7WjKaTFaBdtZgyecSDfzBY2Cb8PzQVruy7v3hQjBKr29U25aH8gJMJuM91DqjxrNpCv7Zn45sMgxBdm64jg9XJT",
  "key37": "5hcUvoH8WmmF6mGWibXj3ASupj2VimWp9DdLwdMhuPy5BgowqPzwDr68s5jtu2SnNo6rN45v9V3foY42oeLHUtsa",
  "key38": "2JARBqK1JaEzJP8dRBxJbohDQkXp7cCuuK8WUStmE82iLMephmAoeGnkGYdSjgSzGNFJmP6Jt5h9SXudPU8rgBVN",
  "key39": "2XS89YFFcjg6xknyxKiCuTRZt4rVXmJCEEyLyrM25jmLunv8icPNNuNdoupw5zYWS1L6JGX6WX4ohsXRQNStH3Ug",
  "key40": "2M5ijgRkcBXnNGaf4ARhYFVVejjJUQfGMbJ623vdZgNm8yegoYfitAmxZZwegvEmYgNJtHm9xgECz85CZhZXLg1e"
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
