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
    "5bSw7L8aRdsQLBb67E9sDUCkdoHu2onb1bbzLmSJmk6n2XGEFCyjnKkdmsMizcApNYYyqoHji1M66WBRuMHST4js"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bcx5Nyc8rrCYz1A2ywqbRNANM8b9QaudmN8RHM4c5AR7vFi5Shc4EnNR6BmpGLPrdT5PahYKbSGUV72n7jBksBX",
  "key1": "2SGQxeCF5XFobqtcC5Yh6YDxHpNbf92LE2DzqBpntizV5FgsCSUKY4qXcdUM1nrdQqdzjBDREXsKfm8aWtGp45Md",
  "key2": "3QLVgytzrPZdHbEwtmYyrZHQ2uyLnJa2jdSojnNqKoTP9FR7ECK5Avm2c4uppBWt8uepUHqHAcjkKcSNEmWojRH9",
  "key3": "UyRRaDbE4qprq34Ehdoj1hwtw8Xcn56KBKsQANXHzXCCvf1xhaaAgcpWC6nzbCBHX3KfN56B6L27RXExnRCsShM",
  "key4": "4fHhHPCEFw7YLa6rUx6nZ7rss32rUs95vkkKoECviVKGX23PVX8NgezwoadGhzsTA6pPhc3Mob8AV42Q8oSn6r3W",
  "key5": "5TpBQRX4mVsYzDNwjeJwNdGpWmjtQj2VKB5VH3PRJpDLxJSqCFtCYm7n9LMp5bA8xgwvsB5TYEjnxWvENU4tgdp8",
  "key6": "5vHN3DzDeYRoAaCJzwtruhsSCaMB3RmKN2MbXkCzb74tWWq7FUvHzG7RMk8ad3LwnDw9QxbZyzDPKEavEe1e74Wd",
  "key7": "3yyaiutaVR9iX7vztbESKenKNQqLsm57kXmwzC4y2jaRnQUs67qi6YiSFrwWJrL5VNEjTWCs3372NmjacZxk7Pj",
  "key8": "5HuDfbx5J4F8s9RNoQbx5mQUGqKFe42Hc9Y2vjwP2PuqxLT35octFRbqBGMPmXFdHJ7FLq2E9X5rFix4dSmEaEKt",
  "key9": "3mYaevxq2Zcp145mPT5iCWXr74SR86QJhVeVRefJJNoPFTaA18pTtH1gkDpkggkKaxxPu9UefKNAMAntCfW5dVNw",
  "key10": "4aD2BwBTjDNCMEnFRqdjtTRajZbUkfqsNny76shQU5KMJ3rG7xWdEnJjKyDCEeeT4xAPVgLLYFPPPfQcMbzM75dZ",
  "key11": "3bcUquTLCExFHn17v7FZRDrRrpoyhznmoLhmnxcsZGXVd1sFUSij8Pp89S12x7LmLwLnKBGK9MJR5QPFFZ5SKhbp",
  "key12": "4w1TS1yvJimXkkvpoAVcTVcJPJJhwzc5VfS7ZwTXLEPA2cJQ5sANhYUa9C8gFWcu9ch8q5EUijLTNuBXb6vwXCWB",
  "key13": "3vgfiU8qGcgvS6Vt3BgRFcFJpjGP2kn7Uko3BPAPdMP1fh6Lbj3YL2TKrq4deb3eS8cRR6is8WgFPZEm4JeCh4xV",
  "key14": "4DRhZhW4qNQ2oojFP9c5sfbYtVdA3xQCud8WRXNLWXGm2qphgEhknU6ehef3ViJ9d2nXMEZbeo53A6jR6M4LijQc",
  "key15": "2mE8ZZcZwrREQS1bXUrkMJ4kiHKu72gV8bCoXJnhZddMn1MpDDiipSJuAF85ke4GABv5HmiK1zDe8ti2UrcRxDWZ",
  "key16": "5TkxgNegRfd2MMTD3NfG7qNtKRYtRi4smxKdegF1i8zAfnpSXn1G79xw23ksSiFemLDifQCWmT18aquNJPwLnMC1",
  "key17": "4bZ3Q2NjiKHvwveqEHoMnMzfsPwaWEyABvXqyrdVQytHfHvMGDQcazmYWKwzQ4f9z84g59caobVJWXcCeaFw4avV",
  "key18": "4pv8GGip5RDt5PQNTwKB2BWvnsW9XVxHjrVRdi6uhxdugUcH1hNKGm9y5z5GD6nUQUNQK3xUnU4DLuYNw3UjwnMw",
  "key19": "DGBUjCKq9ZLd2xb8Wf6YXHrzTrxwtvvrPrMu71F584R9jTPJSjLotKJiXieWFQG9td3dAaWusQzrSrq51Ri6kpZ",
  "key20": "33vwPVMSEVEtBiDBv8Zg438s4SoRtF4kXVbZ2ECsR1dL5afXR2t1DrUtN4HWNnD71kr8BUGnDZ7wBhxZe8jrTXED",
  "key21": "3EmCbrZSczLsL8WPh5hNGaMTdqfwvp4CM8bqW3icH5RfPZUYXe8KKewidLngfHJ7G8Wmte1efosDWKCZQW3Kv1EF",
  "key22": "2ag329KyQJxtXwATjvuFshxBaimajGv2sGWpiXZKn4mp9rus4VnScstYvuKtkLu42ych9xRtwubKMoGJ8xhsaeFF",
  "key23": "3vYXgCaBJnRB1SDf8MNt9KZjkmriuD7H1CfvwujjKzAs3bNaL7wUgybWuhZDmkenoZL1SzSqCK2fSzCcZbNYw1XD",
  "key24": "27xsHFdqWR9m34tKswQa6rXd6BXfN4pqkuWjPGbr8tKGLj9Zv9F3DmZbK3gJMBjAGcdemvSiPPdz5FRjfYnCwLDB",
  "key25": "5YW19RAHqHcFaM9LSLbsovHPcgK7631iWYhKPtGjFqe574LTXHq2Ky8PwLGd5K95pEsb18Z8VNb6S5gbR1Ag2YJ5",
  "key26": "4ovdX9qzyhadV2qBW2D2GWFXXBCPGz2MwMKTTUPmo5RLiWfpNmPvLdyv673YKUFkeGQB6c8mYYP97HtHdJzEB2XG"
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
