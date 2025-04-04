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
    "bKi179uVqoYr9jqXZoH8uSPPeEHGrG1BT7juSk67GwbtXhqDJaPQwqef9JspC8A55SR5PY738x7vLDmp27kikri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PZ7u7pAeSEK3jiDqwKjRqNjtmKaCMpESFa7FDET5mCqhk1qQjNoxtTrXKwLuwZVNSNbu9z2ecXfeG4fnMUGAm8i",
  "key1": "4iqy58VuN1XCmRy3jhrX8MahzV16SWafohdYjPVfjjd7E5xTpW3CisKGVLewGrKkgbcgzmp9i7HrdXXZgyU29ms",
  "key2": "C3Rr2g99DUpXQcQbQQTaLgnPodTv7gm8Tm9NMJyv4GZCiH93nxHBY2Qfpq68WCQxnzKNkNqLHkx9frP89JxMAMU",
  "key3": "5iQCrswxpnsvLXntr9FAAT6wt9dYorrUTpnEUacE8cWj6fNPMqdmdYcVDvFKLbs2RvJ4wYQLFLxqcFF4Em294CTt",
  "key4": "4AMvbrMRrfAAxZ4M7nMDyJTc4oojNqhkkNM7ThfZqVrgW8vNoFbbXH8C5pSKpZhcvDwqMP7UsUMRnBb2E7FF2Ta",
  "key5": "T6pLykqs1X3mj2TUbUUww2DHKLf93aPySps6ybj8kiGSSaYs3HqiDeCgieMi1rWde6prDQHK8JwzmvfEjJiAXLQ",
  "key6": "5ViHoLSrNMoyB9Da6PDvjwigdUjVvL7up98M2C4yPzbN7swsBHwora7cTjnWsmrEibHuCq79LPzDPKTVFru5vwaz",
  "key7": "2LkZtq2SaDtLUkMJ4vwF4rLHHUZBjCVz9km6pS5gDwtd3QiJBfw11fKvFKi9oU7TYxqbz8nJ7MGaukQrRW3HARMQ",
  "key8": "4vVFtfQYzHa6hTk6REZQbE2BUovMfm6DX64xk7hQ5X2gsfX6nXkz5Y3X4FxbKVoNwh4G8gAY2UTdrXtZoeF1pdcR",
  "key9": "4LQ2DCoEWFcUKZ7bSTNnswYwrnFTk678NfbBJhcdSgmdfzQjymV9ULPo2HpaVmWmMDwo3XTcsi8TtH3sDzT1RMYg",
  "key10": "5UU8g6UbahJdbNDbA12CukAcqa6A1Xz7dwg5Jo6sWyvHhDFyj5B8tQSy7xfB4uUpU5qEoakXD1iHj8FrEo3VqgwB",
  "key11": "5wKFobPSTuDy45k2mugWwaArs6v1iQzVKBE3E2WdHnu1ZoxWsDBDhve9JS6oejgMFPCYDLEfrwidDZvJPkj3kxzZ",
  "key12": "4bJCdj97GpdSpFKtYQKo1dD53pLabtUiqy6k6tCPr1Wtvhmr9m9FsufZfJUyxTtfzKmwyZPADr3XZWmvjkW1uTfP",
  "key13": "3vEUPQwo8jUMhxydZh426duNEghDothFKG5Mf8LvqHWKJsyKExP7Gi4CVU1kP3XPKLNMU1Ubjyh1Ui4zkuXXM78T",
  "key14": "2hdNDjH5pUZjTVrDH4dNPf8e3jhFG5cs9SBok3RjAz4zMZRNuRfdceNiVTBqfdEdcHJLgD6XWemAg7ogph3DjfGE",
  "key15": "2BtebfQsbvVdWugBW8tKURrzvDJg74VK6SYsK2obroQKYdbajT1sHA2gUEtuKqYWyJ5JEaprt8QpfuQeDmVTfNZF",
  "key16": "4TvUp2dwZwkgUZjeJvupMR24pJDviPBRpTafJJkYnN5oTwsXRzeaw2yeHxiunVHH7Jb4zhSaHZdYU8Te4KUduUym",
  "key17": "2tpKqcLmDCgcpUs9L771XsAXpRmLv8E1i2iLpe75S62R6xsTv9b6kkY5MnpV6XzUvV3henUfPd2d4C4wJnJuJjf5",
  "key18": "3aVX7x6En6bgSsHKKHpLC7CAGetLsYHrwR8nwvWXCtTcW2RbbjLbcqEzhnGzgb6eMqLWxeJLZZQ1V1NH56qP5kYV",
  "key19": "4UFBYAXBe4MEPWugqZXR8QcTcsf6Sq2HnHfYQ3BHPYAYTc4FERnoL35fRmoF9Ec1rePL8XRTzdj7wKAfH6uXbgHE",
  "key20": "3VzgLQREoktEgwvgtzoryDvcQMAXzSUr3doRb7tixuKwZdTXgcAgLP9uk53NTnLoAjZtcQGzSVwFeCw51JRa7FRh",
  "key21": "4MWVr2CX54NM7yMGkG1uSALLBQRbFu67JPud6fYPUfYAatCCeBHabZrCcJKitiHVAKgxShqYWcLYKTVER5JEA55q",
  "key22": "25mK822i4iBsaJGPwAjRauSDf4QJftGhuHqyKWqSAkf8VWjVgTWNeZqAX8UN34RnXc8V2ue1vNMbwRZWCCpuRxaV",
  "key23": "2UsKteX6KVPQpYym2sdRSZ2XRXwTAvoP1CRUiRoDgA6E2TWRJjF9jiM5rzLiq7v94UWrqFB1LhNB2Xd9knCJKELg",
  "key24": "3zcUUf9K1xxZ4y9J3yQAgc9MAnHMprt4re96jzawgbrayuuykxD4xpzWRUSfdhoSFF9tZKJ8u1pPBWLzcs8xEfiS",
  "key25": "56vKxbaAuQAFeE3P7fYWwRncfz1ZdsVtDn8LDTHvb6JvfDWdL6JrZ3Q56VCerEw2bgnJQcMsjCBtz3JUjRxi9KXm"
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
