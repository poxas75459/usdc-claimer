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
    "4tKNX1RDXgJqy3Tz1Vq83KKcuC8yQVcGZLSEYAUuFREokpQge1Fr2ShvoiMPTKJyF9aCkynJvfcQqVREiBhCAWHy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XefzMPFZ1XKTXzy94ZLuCgLaXtV8K8ydyiqTz8JqK8ou4r79TsiJ7K9JZYd8ePQ8vXDvuy6snTQpXQ93F2GuNXD",
  "key1": "FWhQXD47kjbUABd6GabiuaXJqiiFSPumqUGBC4X4Dt9gvBh4qs1TMxoQCJDHRuX9gBDBPqVqmJSNvHSbVV7YD7m",
  "key2": "5gkVVL48BrBZh84s8HwPBPyCJhjmCHq6QCjsviAAw1VSqfmk7SEVQZc7c5JP2bCW6Y8a7bNRLVXBWSracFcB3HDR",
  "key3": "3qDnVtG5V3j2V8N9g5KLg3jr2Xt1GgH29H9C91gRTxdyi5SfiLnkUDmsoFfnHrAqM43DEyFuFU51LAUv1G2LdqS6",
  "key4": "3CH7a4k6bMAFphj5iQzpt32R9Ciqa1BadyDkVQpCYmWCESTAGueGdpMLMNn7y1sLnYYNo2e9HQPGUajKDT6iJiy1",
  "key5": "2HCZDDRaE2mffY5CizY8YhXQ4mXe18zJY7rEWYbrfguQcmEEECsnjtvtpQ7xWgS3ERpjc59RVVVo9uHbhcZpYnjs",
  "key6": "5DAJQPztNnC7JaQVRzNGQoXduBCuYRMzGo5KXcpUL5YY2xtNDCTShZZQyNmVRUkdZK9kqfQ1agBaBrSRBHEGDf6t",
  "key7": "YsxeuJf4jbPLSAzbr5k67aqpvz9cK5QUEWAxiuLivdK1Da3Btm8zVaTm363YKUAj5QtcTb8euPdLXohv6VpyH6i",
  "key8": "53xzMPjufeEYhiApTuRZPoi9hFjfSpix8T8awUtJTN7ddEsKUhTnj3y7Zc3EGs8ezzTet4W4ErVUPo7fAyhjUyCt",
  "key9": "5SLjM4FYwLb9BZEvRHrWAcyzoQkUS4ZWHw9HFtMchw52jkuPG3g9NBf5e29hBHCg7GuisVPhKgzbb4rmpJxqzAdx",
  "key10": "3vriduJkt9QfGXGTmSauknANurUhEDU5WD5y6nauxpNFuYRHGhgsPiBF5uAXmDho2zdGAhixBujQxxcMFctrAa34",
  "key11": "57zpmfag3JkjuFtqngSuDTmHE2vSLr6va1nTCyfN6YJDkFR9avF3DeFZ5x6GFuBm75USUEWJFpMctAmpbAucXZji",
  "key12": "2wb3cqKuWZYxf7QeSDoTntje85LjJVY2eebzmb1nurGNhNit8s5hH8Fh8U5qMMBdHUVdrisaqeq5Y1geBPNSEBJV",
  "key13": "5wHR9A5birKrVutULp6jvAya4pRFiDMyTn5yGgGKZtSj4GuoVLQFzMj96JtvQoBzmcsoqS3ZZs2zixSXTRK9xxP3",
  "key14": "4V6DDUCMHHnez82C86EutV9RnxtXuWb77Y7LK2atyo6FEBFegMayrEH37QgJcFHcstbhWm1t693fZWU7DF2Ch3Th",
  "key15": "2H3Ap9j7Pa6n7cK3wF6JDHZDJBscMJJaYtTSBwfnw3vcwXBpLy5utAVrNwy2UY8obnrw98RUJ5TNSDE7E4jbZ7Pw",
  "key16": "irRvwZ8B6tbi9YcSVsLd78nthipJa6QFzMf2hnk1UH1BtcuuhYpazJQ45MAbatuiysMw3MY1b1U68z9CzteTxt5",
  "key17": "3g4sWR1aVHUGsV3Ut9LvwDGkBPRawybDfqZ3j4hK61pNrv1HinttrU1VJcYQWzN112YzrW9fyPRJ3bbzpWHkmsPV",
  "key18": "2vmJTvLzbEPH21xws94gKhmfAM2m9FV5wRK2U5br2UU7tni8LB74uQikWk2wSXF4uGUeDxDC4QoaimgdkM7HvfdY",
  "key19": "NqkBFYHSsSEGRHapU7MmawFdQ8ijAizYUiXpJyzQsvtTjgVF4U9GmE4kMUCQL7ZCpMYf4HmcDv8Zi19TvUYwaRZ",
  "key20": "2TVxyE12CcarAEyUBAncUCw4rjNCS3cCP8ZTafLbNQSBRA7SwBwqbQkjTzcFiRVDEFQMciksbS9WaY92HNH5x8ZU",
  "key21": "5kmgVYcGo2egwQTGMomS7YQxCwUfqUtqW7X4TYkR2m3W9z7RYp9AVbE5FSiSL8Q9RnibF2HYXoVDMBnzP97UQKRK",
  "key22": "2SHumJ37sbxdc4mPrh9ms7VzSqcgrLGhQgEzDpN3dW8mugVmaXrNXjKSePqKowG4N6X369Z751RvzJCkxzoHgzcu",
  "key23": "4AwRb2fj8dGKsQHVJUi6uceiuVtNb6BMXWLB5zqBcvdXX7wqFVwJ6XTiW4YK5L4neGWBmNrgrrugjH48fGTuAZUw",
  "key24": "XSZ1NMtGdv7E3muu3WRNVoYN2SjUnEg8fY7DfroV9ou9NtsFX2qc49NGphpuwMuiAtHeZ4ajBWtrgjY9tBJmFqt",
  "key25": "A1xfJdz7ccHCRGo3Q2Kok6Qif99XurTxfSqupPNrUV11RuwEjeP4NZ1EPvN4icNoaCPG79w4zhwBhLuLdC3ih7S",
  "key26": "eyBY4d764pgaZLQkQyjxSKByoVkKSyAAu9Gsx9Vmkx4mLLTQrb6D3XVh2qM4Pr2sqYY6XdCWNBVTzdnbHsXLoPt",
  "key27": "3WKp2SuUPuRbdQcw7Ljb81zxxyYWXcobJQTP8jYDCXNv3y4WhFx2BebF2bHnXXN5Jk4tkyuGPpnQTy195Jf8jGKH",
  "key28": "5k5a4Q54fWaYwzRo5pxEhhRmX1rC3KDH8d1yJyMfGs6Fv7NoUmMZmGvkutQCcYexxqJfTnoN1FcVvNpAWVkBuPhH"
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
