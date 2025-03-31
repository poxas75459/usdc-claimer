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
    "26nyZkBTCkbbCTNC5wZh2hRteWnvnhBfCHdPizTa4bFeajaf2APicaGm1vPYhQMXwUiEMHidxGtVpTpN5WYog2x3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iDhq4qoouzEdiG5U7cBPkgpUVf3v3C6vkYkwV4yCBFbgesK8aa7TdkqoTyhySTh4GM6ME7HHDZz2cuGjUikPmHN",
  "key1": "mxUsgRVJjMy9PtGsk3ytWXFUknieHhj2K8sBtBmXuMhEjBsVU6j4kk9crsZ9d4Su8JoacbYmAZQf8TkQbKeqGk9",
  "key2": "54fNGqqiFJ3vJeddwPjwiq3aK4cPLmFKn55vBozXs4F1uhWfn6aovNawX1SZp291erf1TEqhKRpSY1miK4hDGmWF",
  "key3": "vXV2f7cGFE21mMYDbGcYfXd46hr3bCFTwfqKxqieNYWQUy3B967gocxTu6E6U42YzKxQP2oYQeG9nWZ3XvEKVJu",
  "key4": "5inddj6DaBdZBaSKwPNXmLhaK9sLwAW7pYqnBVvVuabUiw8tyZYcjc8qjAzUAdyURgidnPokboUFRiRVWsaEqLaP",
  "key5": "5WXuK35XGEKUrSkHt7dqF9up9UszJSE75R9QxUMwS4pPDr5RFLzDaZfC8sTohVWwqLx2qQh7Cd2WfBNFQAuMT74",
  "key6": "5gR8tScopzYDaNxeY7staqfGzttmniCejPGsEe9oa9m6XAsPbyCWZaEzCGRMXsxjqYG8tkdMoTGTkSKWw18HKw6G",
  "key7": "YMrqxmcEgKXopzAi1CgDj4UqQ447AgxyJh5BshcwU5cba2MQVaCMjYywCcKbJ7PBZz2ZRMN7FxUqQpKK1XSeCAN",
  "key8": "2fw4HftiMpAF87HEuwpFcC1MorR2JFJUGpPK3FcEreHrGJaVLwf4e6ctL4hJUgbeb1qAamC8hoJajUixAWeTPX7z",
  "key9": "2DpmxvzSKDQybNbB43PDdw1R696iWzUrPyL4LjXv21KTQiAcqFvShZ1wT77vnw3cfyWmFyRGE7yLyA2eL4fhcNAF",
  "key10": "3zwksiELJaNQEG7nH9nQkWvppu3igdTaZtgDwQfv93BerAXJqt3ijLxxu6k4dLKU4pFVYRaLY8mVe7KExcf6wMim",
  "key11": "4V6EJnY6YzGWV8abkypmLZcEcDJsGB1NaoBKus5EkDBEfuFBjnCSsQ1CxYAd3NwXsGFgqTbFAWBPw7Qh5pbS3CGg",
  "key12": "2EU7cPWjRmX2yauMHGSKUN9a5qgm31Ka1Emo4iK43ixB9VxMS444dgSy2ybZm526RQPsNiwUvNytZRraoTEpV8W6",
  "key13": "3LPGYgWgAphfKp7H93TPmXxRBcc6gxJtkyv4aSfGiSAoV2ANGwZrHySA3DEfGEsCoh7kwkX3eEVyhLoPU7uJYhtr",
  "key14": "5EzFmeppbY56mTjgTWzQkSxNPum8V7EffvM3b9ACvPd8sTUjkZVtqM3nEvjP1H1aHDT45RtHY5opSyfPb1WvRPnx",
  "key15": "2XeEMuQrNMWEtbSMtHFBbbVbqRcgChG2QrNXt6rjEstL7uUudyVocv8vB9d78LN2mJuio98aKTxmpWiSx5k8jtwq",
  "key16": "5iXK1hGUZ41CXKYVHTK72V7cdQd3S43NRSTcui2dhg41sG8F9HNtQtpWmwBng9dsLa1aYiZi5wfRZV4UF2Rcwqzv",
  "key17": "2fBNw52ajMKiXtRV7Fp5EvWWb8p4RFfvoETbtUpKYKkMii7fDnfAUmN3KyC5Bh29rjdRWuCVeaX6GMkDrfxeu7mf",
  "key18": "2TjyTg4cBSQPM67zED3nvP2y4CGNEXgNoa6zKFrG49J96WEHY9XAMDYgwq89JAjCLMdfaqXHu4DbPSMpx8za5Kwr",
  "key19": "5LgGZozJasStytmyrfEvYZQgZfb5hnuQ298jQVdNNTGphyqnh5NTjaHTghf2G5onus5EAQfBR8hmZARTUpAULYtp",
  "key20": "61NYVaCVp5fQsfk8LHMjrnNLXFFv6mDjCDjrtutfbym5Xsi3F7MF2FyK7t6XT8mM1vARzhTdhjeCkrkC8eoZmGAn",
  "key21": "64RdBfFXiXkdVHLpH4GygBoRtg3dtAdN8jKFwdNKRMqi1xeXs63VSEZGeaQc9y9iz3acJoHz81Q99azwwBpB5X7d",
  "key22": "3QsxLrMBJNDV1Y2VSSonytpQjZ6GT7uZXQUB7QWeTSt1C9VL5g1V5SQBRvdZ3QEboxCEUTVfu1H6VoFCdJw8fFEP",
  "key23": "49XKBr1GGgqiaxnVFwxjaXmKAfHPjytbRsMc4mawH1FNBKhgieJfYdS5Y3EN2Nhr59fLK2zHhiLXuRKG1eNQ6frd",
  "key24": "2gxt54TkuYEyLZWa8LvZFoRCXR41S5NHYBJjvbeC9et1gqHtz8NSgxUJPwa9y62jXsTrSb5nRCdGJ1uuJfg26aWf"
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
