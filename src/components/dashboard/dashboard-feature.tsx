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
    "4tf8Ew8FXWUwtPC9PA1Ma5fqtxGgYB32GgvMmtQgom7y8gYzytCdM5zwHSLmc5ZGnCcWk6QiPxZA6FjbQMEEnZ5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48FD1zgnyTjXo7Shepe8tbJ3KvpvLeBC1f2o5kwzmcX9cb9gXQSESCTmCsfdhE24fNchPu5WMSj3Gs1ysHkUhRgX",
  "key1": "29VzoRHabmXm9EHv4F6VZDLbVW2kqBVinrswukKXTRUSGZCYunZ7o6QZstKPUjwBUBrxERW6rySWZGfgfu3jfgKu",
  "key2": "oMJCYFZn84g2xQnJR7vp4SmGzWLF8Zhxc4sYdP7WnBaPeKbMArJzY8qmQecVQbjiZxPZiBtRtxbLmcpx1RgrAJf",
  "key3": "F82A11K7L1nrABVLoHuPJ4Pxd4H9hSFTqSHkZTyDa3kkQysoisLJBdPSKaLk18KKXFhzMU1AnCFvTVCvAM74UwE",
  "key4": "4oHEd8xaSNymiFAtuknuxQfBFdQmysvZoG8kPFuvpbM7b3FXFyHMaQBpPUG7UomVhZk6P8VxCeRGQriBfLKiurxk",
  "key5": "w1ecphxGqUjsdZofGxJtiwrQfwbPmsCtr8iKBEXsMrp1xj2DaenD5vr2KicQeE79iT6J7rVsfcDCHkGgUbyQjLn",
  "key6": "542wkNGEEdwZVoXTjUwzmwd2R51aDCXFBAMgsK9VLgmZjiYdp3vjFGsdk4TxnQkyk2U9kXsncbzfQSUp4qke8r6Y",
  "key7": "2wPtLYNbs2bSfmjZurM4R9VQffexZwvVyhT8t391JUV3bGrfdg4mEQfvDqdCF7RhQTgzXtv2QMCfEBTsNPwASa8M",
  "key8": "vpwJXEbZxm631HXSCx1JnyLcuKCeZgKxBch84eyubAvcYc6mk6MM8EPiNwRM4bJD3HWfaYu896uJD44GzE6fj1R",
  "key9": "3QiGurBNZFMa6Bjw4veJkZo7XvytbPiJHCHYzuLsYTLdzwyveUE5rpuovLdwcZ58TFPKmA8o3FSYPzMhfJGEhQYn",
  "key10": "4vtQNXpiHen6BNYowVoMVy7wJNJwAJ36AnCNKix1oECwFYupuUnAfpYyJPrsdMCr84PTzNMRFiGhcjqMZCvADWkw",
  "key11": "4GcSzkqAqRfm1LRyGWeWatqN9xsh39UpWAtpCYjnMwdp37idg63hrzvNRQDcb59cXE4XCneYn2CdRaHkfXS2wpJp",
  "key12": "3iCX9xcXD3gDQt7zQd9XzZzdpBeAqSXZAHbLqKEeydwq13wuAt8tXggphnuLtYipd6HPmcWXZvuVkJxUhAM4u4RD",
  "key13": "3dq2vXvuSLg7fFx85LYGChUY4bDgvg9nrNoNTPm2QYhfCPvy3CcXnsL8Sj4FqxxKiV3Tr6xCMwJZgc5oCUPStZst",
  "key14": "3Vpm71JBFAypkoVhQyX6WvLCRkT8Hz555gpeALBNPJKbro8yFaTaoGGwGvpMQv1otFnHUQkcztEqLuFuJXA2ctne",
  "key15": "5ccBfsHWfEuAKzWSF1Mmnu6imWpFkwae5W5vDDpRPtm2scf9dbh21zrAgb74g1qQYKStQnkN2mwesz89mutVpH4E",
  "key16": "3iG4qUYaHzo3nyya4gTg5yPv9sQCpGkxtd2JXSE71hyY1yF4k28gWcDepiWubqKgMUFy5ATcNQF56chi8UdpKwkZ",
  "key17": "2uQwqTsHDar5DEbbznKkUQtNrLTFeoqsfWqmpTo7C8aaFKc2KDk1nWT27Fs3No5PGL1RJUf9ZnKMKT1SRLwwqijw",
  "key18": "5TNc3pGk5PynsFcQud5yhQmUMoDpRm7JjwQfv9fP5L895GwdmKdLGukS1rPBwtELacioNwdEm15p62CGB2DXMCCt",
  "key19": "2mg9wv63begnWDBMAhJWBBHjybSCTCR55ETaeobzF9kTrtiuGTHqwsTxdY46ZQyL1LEzfRNCQbWtpP2s5VV2uo6d",
  "key20": "5pAWYoAkRfLsve9RRCp9GKmrYvkKNjSkxPz3A68eyBTQ6Kr5w3qAC3yyggcp6JP3ft2Kyn5N7ZnbLCn2EU3TuXDB",
  "key21": "2dCnk7ng4vbB7BPA2dGwcn9Ltvrkkj5pMaiHEmZ9WSH1XaEz6afFmppcuNWHcfLAxzpVGVp4tSmR1cT9VkXhvVw9",
  "key22": "B76YmjiqptSbKt8By55fsTKmAoU9UfnW6eqScSpTymKP19tNNTSy1eESLVcD2U8YyZ12Ypa5qpEywXh5W9zj5Qe",
  "key23": "4wgpSVgXUQ6cmt7nWnTxADZ3HCqfkn3KG8TXJ6WHKXZ3GpQb5vkwF1VUPaDVuDEtnd85dVWGvENd2RTkwD8bzAtR",
  "key24": "3xAmeGN5mNL1BCZkkszov9qNxJt1TjWtJLWTeLvVnEtuvFGmpjhFym8MfZoaFKUJGBQGV7V83ozSEgzRrXVgqYDh",
  "key25": "4yMtvDA94DhFgaNfcSyk4PwMovQNWWJYujy3dmGVqA24jTZ5xnEighFMk2kJz7VPip6ujAxwyRZ2VzWXcKHxPZkF",
  "key26": "5NrjrANJvy9UZddzFaxSo2vkVDdsSvdy4skjUBKiW73seqH5sFB5tCR1HJ42cvN59eHVj45VbTT4fmsBDhW8jZB2",
  "key27": "3XbhC8CQGCkLrbHWXCKmv9c9yhTaK2AKeNPNX7zE14GqYqvKyBTnq469WoD1D3qKxkxxHaFb4anLGZjf19eKaqir",
  "key28": "zVPyHR7qgaeGNNGWjZFh7ACo4GCvAsPGPpcWv59qvCjFiag4U1GhxM79kNGQD5EjGdkxrmuwrbmeB3VAHR48Lrv",
  "key29": "U6ENvE8jgoYvZbD4Porh41jhbvxTvZ2hVJgBt47hHunNWouhTVnA9QXyw9BiasSUkQbtRGYwt1pm1QZwLZirsew",
  "key30": "2WiJAbxQ8A5PU3wCPymqhbFnkqFb93tgskkGXttCU9DEt5AwN5eFwWD7JACUycyURkNCcGX99PdwtuAAgchr66UV",
  "key31": "5Nn6RwePbuxtyYSapfcArAE5idDzAbkeTpWMp8uo6jv7YHXjkYqJf9DSUMsDrGpXrAMkxv7mgPQ2JfHULX7ncLLf",
  "key32": "48qDN5tdqy1U21yeu5tSihncLNPfossWymdbzzo7i5gdxDkH7Dfbw2o7fRf4Jv869Lo4Xc4LjxUiyw64vjcU6xfw",
  "key33": "CMMTTRzFrpqP4CxD3n36pmKjixPG5jJCRziXJpt7P1uMcaV8kwGeCoyWE89sQmR9FSBFFUoKa7Zpaa5HkeM2Ldd",
  "key34": "36SJwkwWqRdrPYagccBLeV5btrFB3vEBFm4s3saYBeKh9fTAMqSbvnxTSYHgvCVAeHb5CWW9n5ymDRgSC7EcVe2q",
  "key35": "YXnYYRgLiTWqBz3GpninDv4p2wV5nckte4xgLAyxJXBdjyX4hpAJBoBATLzBAovTsJ1Y5NHARffQM4tbmWjumtZ",
  "key36": "2H1AwTTsauQgVBnMtUDx62b9CKji3RxyEeX7U7E2x6qp2WPMQSnN8T2vunV1UDghvLiXBMoxyPNyPzpyhWDrpnEK",
  "key37": "5btPdgy5re6emn9TdtDPgVWD958Mp2NaH6AaTxLqeS4iYBhTSJneVYPZBxj5CXe1hzsq5tWVpyvmRTLwd8zDscqQ",
  "key38": "4jzYWwjQ7Jtghz1Q1Q6BfWEvDJqkAPW7PmTSduDLfKputxWBmmpe6vaz1VirEFjh8gKwu1RdBUrvKCC8HT8Yui3Q",
  "key39": "49q8cEwymWXWiGkzJEEpxmR68HHUg9LjbijEAWQEvzn28dwCwLfxcK5YUehVaMvRig2VkfWEffDVdEp7Gs3qQBuS",
  "key40": "5DbVfFZGo4jwAvYHiwWTnyebYBuELFykQRCUrFjaAZUzBERnjsgk9M8BjneWzYZjqgoR5F99AgRerxt6TTUUPz7S",
  "key41": "2TCxg3xFEoM6nQkVctGy1MvGrmRcJTvqGnBfmN4ZXwXqgd343scxzFdNq8dMroFKiRtTo7utqFKd69JwAZRytz1R",
  "key42": "379aEAUF23ckWw2BtzAWagv3Cc95rWvzYbjcAXkFAEksRswevceSEdnBMt3czsuLHxpbEqnuDVQcE4DhLf4uXvMh",
  "key43": "3zepZNk8aNtz7dkM496Uj1ooJpLQPeYeHzQGvjHUkMepYMj3bNHsJYHZ3ZHpcGsyqGRym5LrNGvbT1xWfGbtDjnQ",
  "key44": "AMmehbUZKNn9Fiq7upCmRgW1RAqnmLrfdXrTczBaC2FzYhEA4yn5cPHs3BYmwnk5p1a4UQocUDM3VoyZvdDXDEB",
  "key45": "5kufQ7TFG7MLna5eMdhouSnH5uoeH6u3B45pKeEfZrsjYnuXN7ZHEe9b426jDiLkwk2mAggk15N3w3VUXtKbZegN"
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
