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
    "339wEfXUCKtx4UENbqAhMmYmMfZ8nNQGS3zsYP54VvQH59JdJbNkfwjdfaMDfm3VygBfbDLNA1avS2uDnpjAWLc8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51jbtzzujSt8v8bsCCMviBkdcdceiXeC5RjDjsMG41Xz2LvYtiQ8TT81jFPR6ENP4hTqgobGoMee2PCaP1SXmAtA",
  "key1": "3mKSUmP8ktRJy6KU2JFoCBGZDcMfnSPyiVq4t56QjHqctHdZsRMsHJv7Nok1DVqXCdRWhWBMoPqF3mEpbZAbG7m3",
  "key2": "4mSkGtJAsSdpSBwBNBfqsVdDka977X4ndQeHsCa34EW3mn54JVDyKU6xVppmKxCC8nY4GELDy7hjp5YCtTRkgKuv",
  "key3": "5CMD7EMGFnXJfMPM8MCX5ejyZ1zFtQJRXvasGGNFYkc9WTBKHTq67S7vGAtYSFUpVkpMmTcYNQobDwChFs49manH",
  "key4": "4VzJyfd1xH5VsWogUbq3wcwz1LoJf9jFAEztYDHotoDLP3UdPuyRc7RsnPiZRpn3WPdT4auskSNgSrZMTPta4PH6",
  "key5": "5DYER6ewx8oqzbSJWfqYUvKoqPqP5PUVoVvovbq9xQjahQ5d8n2uLrZfDR87mrEonFueKi4qVUNZJSZG8oCrpUVq",
  "key6": "2XrLe9YdtBAvPkTKNaQrr34LA1K7gSkf4HJbesY1KtRWxhNwtV8VCBe2WDuTg1HT1htkhVRJjwdXsB7SL9MCN5gu",
  "key7": "3RsCL8emi3N5LXa3SNnb4Wf92nzKfDronG28PaewSfZFfjyqDcxuWXZ7YzeQfAQrHHXYrTgmSX7aTtHi2X7EsGEE",
  "key8": "24e4kGG7HuiySsVoDSxQWfb88q8LfgPwNRWUSAUkPxUFGMscHFqq2eKSX7stRTrNpF3sFmjMeyvXpBaHqj64cDFP",
  "key9": "egb8QkPmpbproKniftkgZm44roJL2t3WgYmhJHxqtdyXuu2kKv8NbBa2Mz4VgKpUgc4gejv84B2iCfkpzri4kw7",
  "key10": "5R1knPuFLxJ3RoFmoEcVnYQv89NSRsUFHHvL41cjmXMVWYSXDjtPGQ23Ls2WmwMD7dXqiChkcDRd5VaKTWWjrxQL",
  "key11": "5Qgdpvx9eyqbpmGJZRPwXswrLxxB5omCDHyCA1Nen1bRAtZUagTutLQpEm2EYTQuPAiemR597RCiGjBTf9hAvoVy",
  "key12": "2UyBrkJERDjbUaD7aMPtTQiHYsHY9yi9zE7fs1epmnC1zHnuupoqEVtQNLUbtfF93RzowHvSXLBDb8QmzPRFpx5D",
  "key13": "2nya3eShJpXL4HFRwvgB3UVymAAt1aijeUZmEB7d35x7Rc5JfmkkXXVa4U3UcDQWbWYGHdaUufWXUfpJqLrhSGpn",
  "key14": "5NxTQDj9jBuTsywSkRYShZMuuoEkSTcfw3gAcYzbwfB5fjV849PHNwU7Go64dzyqUFEostdrfrf5UsKYciQ5U3yk",
  "key15": "fwBS3vG9jX76EfZLWvXbN2iMFQSrynbV6TbVGgm4eqACaqUAFW7745evrYJDWRFYhta3CFiz5T41gtx5uYN8b28",
  "key16": "5N4rBPX7GocBaddisJdjzLYsjzeWqkQN57hNqxMebtPAfFfrsDX5Rj5akSCgd9tFKwbuuYL6umhJZQS8V6Evdh63",
  "key17": "YFgQLazV9cJDZgBm3gRgUydbZ47B1dYPZnuC5CtHxtaNJrptVTPy9hat6rNy77VThWmUmHze18kZfDUeWypYuRN",
  "key18": "5yE9PevmYQ7FSqBmQqVZ5KUaUu1vsq3fhprWKsmGnF6oyQGHK2zry29qye456xVkjHeGbapkFsLCUrQUayw7aw1X",
  "key19": "2ZnMK8davghsSysSBEsEepJPKu3xCcpqPxZXWF5MG36144znyMeq4etXq6Xi2oBZrfpsya9j2SxEww4WBUPDGrbX",
  "key20": "8dg6iGLhchuV4YhnACqNs48aJLqqD7UZbuhwaSBCbxXCn8YGvHHmiA41khNtmKaWfPtWQHj96kpa9oKeY6jGiHJ",
  "key21": "bSswsbGxBCso25d4DCPfMHmCQa6BTXg8sqvZtfhh5ZS1YbDNJpFr1roKYyrZKJKFLSfnWvyKVixMunF5EC2vHX2",
  "key22": "58Es6MvHt3o6YJqXga5kVnN6dUUFGgwqbeDV2VLmpFr2YqdFvKH44HMC6egFNkw9iQqfxz9DpCAJR4y8P9WjmAhb",
  "key23": "2eMFakjtdZt3VN3rEQ51EhgTAZ42SeMZf6aoejtgUSP3YcRdRdpqWxWzS4XB1zqnqHJqT8vDN3gCK52EXAua5FsE",
  "key24": "BGf16ancn8j3KHSZMHsDoUkC8HPBLFyBHCzPq1uWi2LjTsRNaWxxggCbTdsXCEHnk2V7KJ2AjZa7Z3QKy42evW1",
  "key25": "xvixiEnMRqwcbnKby8ysRftu3zR7yXVhAWGKFZV8XfBHDRVz5uEGAg6WmGFTXGXXVrVFFs5TweNDXANGcxMQTmL",
  "key26": "3xjjT5BujyjjtVDuJAaJhVR4RZgXdNVWihwKqFifzWbyx139xvs8F8pADJ24JdZAXonjHj1maoNBncZX26WvgtU6",
  "key27": "2WTbtvwGbe2ScB4ESTHBzeai8QLxDWiX42gsSbKWFxaXRNq4ADYhxqJAkLMYZZXzqBdRssu3UbcP8AVQgf2M9URp"
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
