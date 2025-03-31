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
    "5htXphhHPZrmLTkNBCsRFovkJiLr5DVphNRYszLWnnxFDGJLVDKQgCvGm12hS7jXGrs1zmRFDf9EAE8vhiqyo3a2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LxukxK5nSS5Two26jdqFdjscRmMjTaasgRAKLEPNWFgGu9H1NsmMGbP5Yit1eUrsr4g8kswgVJ9baT3MaKVD1fL",
  "key1": "2qwnAeXhvZxXy4DF32vPVyYJ1sZ88KkvNzgx8oALizSrdwsiTCgnREZUvGGuXiV54jh3smKuQNCCjcUhkQHThN7",
  "key2": "3xE9CnoZr74LdYLAkg8TbmWmGmdazUc27BgKdLVSKofqGTHz8UkPpraiRzvDXCmUd3j8ip1RxzHxBpYuLD1B4wDH",
  "key3": "44ad8BEGhJKXz5g4LYyrNVCyBqvFPnszZ4A7h9qXoH7jDp2vGf8Awj1BXeDfsrBh1GdovQiWyDQ43uZNdaBskJdw",
  "key4": "4Bs8fFLs1erzXssDxxjnHCWmuQnDg9EcPrbFCgZQaZDRogxNptDAuXCXHfX1ELfo3rK9buscPwqrx3zPibiiv93",
  "key5": "4twUxUoHYGkHyssTH8yQbb4KWMYxgco1rMYPacS35gzhazq9Egq2vuM7KH4Khz6AcMUjkjbCKQvRFqMgi32V1mUz",
  "key6": "CosJgH74q6QjD3JBXwkF91XonzPLqiLUAfy5gdJYjTe9msZQJ5BnHUuZfz5PRWZ6EQV23j1UbjaUmXyQwkGeC8E",
  "key7": "3mA7Y1obCzAGV5GRAo1xJeoKZiL4U39J1ewMMT6KDAQ1KS5mkSwJHuWShJXea3j8Eh7o7ZwFi292fx6sYQnDjZ5y",
  "key8": "2QuXBRfDuKHN9whZQ6n6FfVexsd6U9AQCM6ZrPssdefbQMG99xd6cQPASEeUJsM2iFYD1q3zmLQW4wBdy2sP1X2t",
  "key9": "5aFbBNHrNwQ8jkQ6GwDJqvnFn364NikrQEuaZ3NdkifgxD4icuWbW1SGRRAGf7aFWui3mxf7yrrjyayFwUDBdRe9",
  "key10": "owMz51wEXBmhjekp4GWJtTYCttoxgWv5X7KizUCxSPXDo5ZvuSNB1PEwYe3m57u7GTqmmcacSjvxsE9DwyjenGL",
  "key11": "23JAGDKGjcXZiNhz3aBhTEQDJNjCWpGcJUQ1WZZiDpVJhqtuCNcmTGzkuha7w3M1rnwGM1dq3mfyDZFtBcbJGTHe",
  "key12": "qKfLX5NVcrea1xQyvRUDRCqUi34YKiRFBFWZdFHc9Kgzio9HM71vNA692NJ7nN9GYB2mWS26iKFypPZEBQRHYs4",
  "key13": "4EaSwZexBSqm2fHiEK2yBi5ffNGT2jAmCqXnU83PuH7ADUr6xTPkZnSjm1ZXypFcAmcKj6KikjnTVe7LkK9jB9Jp",
  "key14": "4cuuj9u5kZYJdgYppLSKXc7dBK8kU9Gehhbmg4epA2LKuWqwvRkNKuxJ9T6GwQrtGSuH53V6iEUsLpgcEn4WCWHo",
  "key15": "2jN6QJ8KxAfunVHiKUrUfmAcGYjgcg7bQDtsggc4Fxfe7P5JR7WXWKFRSs3xu11iNF1zV9Lkzm8VqqkN7hXAToNd",
  "key16": "Hkka4Es55QuekvgPYRCiheH91gYy9J9WukofMv2ZvcWrkNEUux9LA7tipjbtWmQVHsa3k7A5Bs1h6eyj4NEdC8x",
  "key17": "2bQZF3ag7BAtwaHW1Uky9MRNwZkk8VLDRR1X37ucko8bLt7x7xPDNTMU1XYF85DrBw2Zv1R2bFWv76Cux6dyTAwX",
  "key18": "5cSgxQbrS1b3mcNmEiwtSFMm7cW47yi26tFB555xiodBpETrnjbD7nPCg36KnRWwPPhnRtpPk8N5v3airo87YiDy",
  "key19": "5Np4pt8xqZrxTmpp4TJmop9ksuudRgbe1k9Z9yKfQ4vqpZH5NYbiRTNnibbPs51ppbTCz9kwgtJXoJeadiqULwNc",
  "key20": "2kBphqF6GgwffabH6ZdNHqsmtU6UDp5vrWNRQRy3dDaa4yaYDvwsjWuU2qPG3N2tSVtAvmiMhurSXi8iHESEJaRG",
  "key21": "5ZobErn9qEA1SVQspCszJuVZVDPemRQF3dFVGi45aP8HqsqeiEUBFFLfAr8QZLmiNcF3x4UMsFQptTFf9bJVEjKp",
  "key22": "44ErWmUdECXh6MVMHUmEZeDDRVTfDhd63ZwZiRWAwJwy4WHKRVs53UozD7P7BQnNUr3CnUjMUea17KaQz9gDPaJC",
  "key23": "5N1gmu641njfYsi14dbsr9S81uadUUpvs2spYFwfPZzFtMwdMUrG19wgAwH14cwrc3RCr2rExgxaWZTVJPTs2oLe",
  "key24": "zy9FKgLB8itbb9VRaFaWLCYpr9xyhJ9gpaFaQmFCmwdK9G9jB6A7Y2vEq1BP8hj3xV9ugQkRkMLcgGKN39azXGd",
  "key25": "5VMBayaD9QwNtF4URb6qcqooimoPZvq2GzwYGTR55FmeZm5bkYDVLUtuFuHag1CnTuY9hX5Ut1LDbpZAh2TBjvBH",
  "key26": "3JA5HRPAYLpPr78QWvxc8bQqfnoHk1XXbn1WD63WiGHz9WgQEbyqTe8ABGcf2Uw4YwaDzZyqCAMA2z4kuYfTtZTj",
  "key27": "3kw2X6BPWG7NgK2Df5XrPsSDTeXJS3DRSvYdmycKtUstYV2rzfkJ9fJoFXDKg4Kx6M3g5jP3WeqeX25DeNCay9Fk",
  "key28": "wHc9tkD4ixdQKXmsLdwBfjuzBPNgn2BvM5C6ZnxHpEehQ3xXyCRMxqPGaVfJn9qwh7Kuxj38Qu3mtGFYZi22ub5"
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
