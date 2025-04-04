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
    "4AedVjYNr4UeLchTRFrheQDRyWbugU89jZJxDSmnkwn5dM6JaMGpXVBuKRDUkQtLfwfPtAWAWLnyRBdhzK2F4Ds6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XHs3TxmRzzv1divXRFYMejArTvJ4PMT8KeLsmcpWjAd2d1ago5Zo9jqPEqt5or417Nzw6VHvppfEihshmuSRWi",
  "key1": "4R6iHrhioWmEyi5fgkWViJxG6sHNpJpgEniLZ7ArFTDpjrZ6R8F5PTiDn6dVhvF7kTEoBcrNkbeiw8K6ZyLUs88i",
  "key2": "4vUfzdkLhQWSX5d97SgeaE7SZpQgLx5t3oPZJT1vvAUgrHSvctytAQ9TrHdy4i721oRV1KKc3FzVurEw8ySjBTn6",
  "key3": "3PXzZaqN2Jz2cHWRMQQ1EHXqRYJfnZeBRmGDquPhGTLP8m32LGspksndEtPnQWh6PY8TfxaHqnT3yqxiksneaW1e",
  "key4": "5Enecp7QQ1e6YbotQHoGqPuLGrWydZGG8oUkRadKyfbSXMUEKmuEPfTvKKmCpgf76ZBk9JHaaqbSm4XeCc7AJsLZ",
  "key5": "43d7w1XN8n7cjtdTVf8eDBtQWnNjz6ne5wXTGvgPm8gkW3YPiqqFaatoP965UShEg8QPRzv37R7PXgFctFA2y4aV",
  "key6": "2EgBcsTxXLcigPnGe5QneGp58MiTXqnFv5XTshmyiy5v2qybPWTgGN5aMoK2DnFMoCAuYzMGaHxn1Qv16rRZrBSX",
  "key7": "3MUK6aG3DfE3gwWaYYJiJeNYrprtyzLa5ZGL8nJssWRepPKU7SPy1sa7DzTAVLhGkf1rpvEprUrihHP2UnoR25in",
  "key8": "kfCZ96huHdh1p53PmxPcMiSadRtRtk7K4pTxuGr1JvyKQRyoUecrDpY6gD2SGEjsKug83XasdStmPc3ThcW7mx3",
  "key9": "5hy9NCSXXDaCqm3dfNiWxAakDayUK3kgDKJN3rkeUG7S1JtqFKP1uHwR6kmPzzzBAXggtNtJ4Mw1tn3Zpt4SZ1Qj",
  "key10": "2oUQTkPbYfR1ue82BmKLSFX2uXBxsG6qKxT9CWYWD7JM9AAt117pB4ZVtm4Ryt7eYzUpaEsL3gbbGYyKu9Cbvzgb",
  "key11": "5HEs1FcvJWuzB51xwR7Tzk9whGvNg8nX7DxkosxutCqkSD2YsFAx9NADPnp56K98QFdbCjZfJ5d4TSaQKxSkpurk",
  "key12": "2Jd9SkcUiDSUXS1SQmUTD5UgRTg1zFebRMxHJ326swpHitsr9yMav592jkgECAyCFmxezcBCJwMGZJZbhzzNNfqH",
  "key13": "5BUbxrZ5xmX7NaZcpBPUt5de4RjPRee9iQ3yU6SebkfNASFsNQusyamDECVddD2ejv5eDexun6vidVA8RErxJnyP",
  "key14": "22WNvoYwQzzgbNj3czoDqGZcvUsKWtzGyP1UdGMZH5CgypyVfRYeAJSLAGMUNvppWBVSEsgqF3VYeMFed2T8XuSn",
  "key15": "2ZciPpY9beLQWRT5VEB8Gdp1cQkCewzUefGzniHbaEuMxTuJWuS7HwaBnjEpXbKLk6hbZtiLZHRyDmDCZqeXbAMm",
  "key16": "YBsrARGkyRYfHGjNuUvVXfwa1fagjjJKXAX2HfUNKk4qvfqwp8AgnMhUYphT5fL91thKeZtT6HEZCi3wgJQuFan",
  "key17": "3FaBpmFeaoxAXhVCcdeELW2HfwVo6Tt7FFLx5KEJJ8YesEm3LfMNbBkmgDdc6Ghg1ime1uTab6NyJWLhcuAsTBZg",
  "key18": "3A3fHEEApuMd5eF2hPcp11WaLPzcJaWjBVVkCLCkYv5iZuXdeA3yGPr6uFLDrsk8snjhyAnMnMs7juRMy2KwPmLo",
  "key19": "2wiL5pWUNrPyQiPzhDKpJCPKrp4oS6xuHJMV8YHvcqcC7sWPgNM2queEFNV838AZr4ZwhHFsMAJPvDjkRcDceUe7",
  "key20": "3dKyy5DXjCpxbqHF5FhagUBNHMAEfvcdsdeGhCM1DZvYGvrqWN6AUMGgz3XfVbNk5E4kt13xcJnVUTwymCi3RKki",
  "key21": "3EDpGcx2t9xdjRHTnLD3QFjd2sFFf2frZTrfqUUYywCUFJ89Lt9HzMZgxC1iLsKiyZ3yZU1VurAkWdWBCfpUZ4Ug",
  "key22": "38Ut3ZMs3jaUqrN3TW6M1mwnKVwC9PHExj1b9yq1nerdJbVqPeWuRzoq1BxqkxC8fqEA8BHKKPZFx2MgSRpTAshm",
  "key23": "4xXU3RuUCMZgSotuR6onqPyeXUdmrxQBLvHtox8n5DWBkbfHQYr9LmmyDUV33CJjRyjiUUxqomi3ET5K7Gyo8CpF",
  "key24": "5UstcJ6GpT9dwmuV4EqzSQVti9LkQQQrLAv24asMg4xvTwSrraqYvKaBWFNwB2KduavZFSnV4AmTvdUCjKUxx1Lv",
  "key25": "5hpYUhCxX4JhQVCPrC6APEqVHai2K6k4LdGSenEauJN6N37grdsDjXAd4sADzVPAmzJ3JDWxehidduSPbQuTPFNi",
  "key26": "5R2gcxCRZia4k5SmYXQ24pXs6GtqavWJCnxo1F8ByYWfwSw1YSFAdQGsJ9Y8sKRRYUS9B4LDmrqvd7nwpsTZkhqW",
  "key27": "41QW49HewbHcUXgurVnM5HLQGE4CkfYKd6xAWtcipurYwxnKi2HduPuNzMtBFvFQnr3LvV8Xku3V4UiwXpiLRSAp",
  "key28": "5TSXZvUxDcedGtNM7fS4fv3p82oUd8UP6XzyGotAfEqeBTePqebeQEdBW6vK618nxMKC2aRs3yvLJy8jYtvmix8D",
  "key29": "ksAsMz8qPksHjrha7xuPWevsdNZx6uqW9uxaoPk6SQEZ2ay88dS9teXSaTaaeUWMQJ9cFDNyzy28q2uwGYRmYdA",
  "key30": "ZYjYmBcGtqyHQBsr8ZPHDVy1V9u4Ygq5VUrgiCS53J3XNrRStBQQ8sMV8gLS9GwNiLpJQ6tTLkE5dJcyDZ4srFA",
  "key31": "66PUSXspdBHkkAnrJCQbCK3TqraBYYB8BcJkCAaVADdU7Ffxa4BVoo3KXaqpAab2HezPS6MJPa5hN4qAEx3Von7F",
  "key32": "4kiro9SQTv71w9mxozBdb2KAzQzagR1h7CjN2b2spuzHEjwR8i11zQv9NQDZAZ27AZT7WBvZXVRFJAgxUQgpn5up",
  "key33": "DCJqHeGqJJxtKX4FiUvDLpxvYhjVwxWJfBxB3XbbFTVY5dNmepzvfhzBwgi3QzdPAYLQgd1y3V5SFnNCTRQkCui",
  "key34": "5Gv73V5gxYZyWNiHx76cRb4tt8DSeJrMa23j8nqvWeuRZqstZVRfm8cm5iKt8RbGpKakWezP6ww7G77rjturww5U",
  "key35": "4cPWCeJVfQoCkhcuBG6NTpdaqt1XNotfAvXzuuSxnV2e231Wdf44X2VnPabyNasqda9HFzMtp8M6joyvpJzaLcGk",
  "key36": "Z35Ta3pq6HJpnpJpVm6mCYwTV2SodivDFYgkvak5NTcDRMtiKdUhqnSW3jLF9JBsewK2bnUxn9n489euC88W35m",
  "key37": "3Eo7DApqMKMeWxGdDBRNxpdTvEixP2YXofDxbDran2r4jujdG8cesgERFTBoMTAGF1YpDhGLVcrA2p3nzCXUU7hv",
  "key38": "4X5CWD1mLNYKd418gKTyf3xhjJLz8Zw6aQS3RZH1pjqPCZR51dT326Z7q4FbpSCL8gapXcaWbEZYTaUYjm46fbiR",
  "key39": "2mjwtB2vsfdMh6GmoU91w35VXoPy7Q58rq5yVQ1Yq5mNLwWSMCzpKtWEKzbmf6yxiWt3fKw9ZTtp6f13CuxWq9aQ"
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
