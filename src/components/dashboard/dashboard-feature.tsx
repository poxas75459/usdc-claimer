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
    "JEmF41iXDEX2Ahp43PcWVN8pfGj3dqoCfQF2r5JYvKxoNn6KQA3fVdx3tXAKC5PCR46yXvRttoLT9AbH22oYMf4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wJF58CrzAAws598FXNJAjGv1gXZfvxUgY6csFbVJMxSdyu4eRTro4dRrkATrkAZ8QszwkeS1vK9wVatdQfVQbSj",
  "key1": "cpHZsozTofHFqoNWRoaafF59ecY6FenZb4DVAumwEzjrxfgQSta3WqpZKRHCvTuU8TiVugFWGN9FZy4BSPozqfE",
  "key2": "22y7EV2VTf9CPAvmCiiiNXQeHJR4z7r6zRpSpVVwAza6u5hg43xdZEt8DZoE4381RaCQ4iQSXvtdRXtn8kJvQ2d7",
  "key3": "4XmBHviDQCQwsSoWypYdCcN15Jm77YMx57o25HGK62AH18Ymz8TxRQLJEjx9xRHDAFT5a6Q3ScuKdiQiPqaG8B7T",
  "key4": "3JGfsE3ghYVDgcA8UQqi7VwpbdWC3SPDgRcRTsCFnkyh3paKA9yCWGqKnEXFV34YDtB9zn467U528hYyseaGKkbg",
  "key5": "3Lr5ppJiYa6qgtrWgptVKH78xYJvpnTfzqpevxCiVmtnuWwzNs4anpFFcdub5cuvo5WcP9P98bB6ccBWJ3sZMix9",
  "key6": "m6ymuZfcQkr3B7CB4B5SYwLMDK1wjYosz4v8DzHXHQBVH369FXpG9aYrQ1kyth326TTuQdP3e8S4RQQtTHngNfe",
  "key7": "5Cto4biq8nmx5bRqfBjBL7JCSHCMxWhoc3vm1Z9tx2SaBmr7i8jHtoAodBWJNDehQ6VKLRdvjeAYvMfxeVwxg6mk",
  "key8": "4RZarpJTfn6LyNC99pPrY8UxpkP8Aq6UdHN9Ua6WrSAM4Ekq3oCXLKv3jzcBRxZoa1irWDohenhVcGYAgT9ewXV1",
  "key9": "3dU21w71R92Ys63gathHCAaNuhfyuiwhieQW9tNxzhfjMkSSXqyJ5CorBsVnW2QMAmi4jKNMTxmiuq7jdgap37PN",
  "key10": "2FLDnea2s8xyaBgM8xmLeTGA8MoGAHCih1sWXYzej8qBGRC1KrgB2YRf4e6JgSkWuxLtjdkVKJFPh4ePWJg6QEDQ",
  "key11": "nXd6Jov175N4ocf8KG6qRAdGuiWW7WLdGU7cTvGLBYrCgJvQ8Kwkf2a6jLtpNdqHsUbNyjstQF7UtLShL34tniV",
  "key12": "EFcFQJtPKrDmrDX4vsYxSo6w7oACnqLrxxYE6muLRmwj8hpsgfcACJSyJjWkAkc5Cm9JCaBaBEXCuePNNNgJW1L",
  "key13": "583PcDxC89nQkR2GEKai4kRDrSHZiqGR7V4t7ykYJinsH6mf5ft3U7UPNT9g13zR2XyKPt4VZeJ8CxDj15JWhBQQ",
  "key14": "48yes8XveuDpC17JENx6aHkiqABy8yJS5q1FHVaazJgCQJdjWHayrJBkosTe47EncdBGUW9dk1GtTmhCRjdFRfav",
  "key15": "4JQWDQ1PA4yPRFVL5ei2wekgRiJjowNvvgk4XtBddFgfucnv2f55Taok8qHDN88Limfb4qM5zL19k4NzTJVYtVF9",
  "key16": "3PHhvkUuZt3Sd8gXmbAr51vCuX7Nc2NpPDrmKpxUfwkxsFLMbLfkSx3575vnsBNkDaAzQ8ayXc92BBamMZoYEn67",
  "key17": "W57JPuQj5rZWYS66ThDzVFFmXsDaGfWdFGUBXGd7gy7gK5xEsJ2cSYoE6q7CvCj6sf2FxjNwVtCj8QLs9gipeXu",
  "key18": "4PMbd6ZGRF7f29aAQgwHVdSUPZ8s3tKV875xsqW2RbQMPnu4ojbu7zyGZ2VQ2aP2ozRZPsA6cHvhDRciDFQjrE4o",
  "key19": "2qSCz7QoaAR9THWbtMW3XhJYfmVqXT32YCksXQTkG43ppZyDBNQbd7uq75ZjWKyoDJgh9J8CXbHwhe7DJ9QjpJMY",
  "key20": "4gyvcenH8sCm98zHx3PSbpEv8XRqCGsbf7H1YB2xMJaoHBEvmbvhrX3B5V9sQM8uDjtAcfPJjm5chbnBsohzz5FE",
  "key21": "59m3WdYj3BU1mV8cQQSRwrk5Y1gZvn67mmFqb2B1LsyMh5Mhtsjkz5TvwzA3y37z496mSsZQouBz4i7RQrpoBHUi",
  "key22": "2JBHQYnAviXbo4cmjiqeYdVQCdaNsukJbVo6CXKMaaeqMrBBQ6CYJyH4HrnAKs3LsFkGNLdcWCgBAQY7ftY8GTN3",
  "key23": "2zHimWtT5jQwm3SqUeFmtetYqtgGKe57rJK8RaTWNsXBhSz13RqeqDUUfRqcAZJvcLEVio1BoePDjmiVQga7yNTr",
  "key24": "3tVProQXGDpHVTBkLfwyuLAzVbnUdZGD4xy2Pjc1JjsubqkG9pSUXQSAgQt1roQMA7bwzCB4fmWruDaomTb2hLfX",
  "key25": "3GHXiffAB9F3DxhvyFKwEVhWX3jRmWW5rh3QvXWAn5uBMfb39cEsaE8ucZdfeC6Qh7YUG25185tuP2aYEvZuZB4P",
  "key26": "5MABt8gmusv82LMG6CwFmPkLzSkHXBZ3gbHYHd2Hh1aFhhLkJwaPvNe2XUtBpKudbU8Pap8zPuojvZtp2z9t1pPF",
  "key27": "5oLs22UKgPQYLGHmZ4EoZ9t3focQJqhcC4SD1tERx93xCoytxNrQAkD4UtmdeJLcHZiTYDoFg3dMNvAYCUSGEmL7",
  "key28": "2MN4UnC1wCC8aDk88pxytbtWz3c4rAaqKo8JtuaqegHYniWsUUMJL9EjiTc6ppUxnr4cMfJDHot7C3hHxELuG4aD",
  "key29": "5QpH2ZYaV5wMjb8bb321gKCduR79XcQWD9Ubk3aEhjGEz3XKhvaSzdMrkBNTzAgbaPTEwWHQL6CqMRDD4mNpf9CK",
  "key30": "27WLA5cfTuewoysfHmASCC1DHRoSteGkKu1e1bdTHSaamBCaNeAmp1MtZVpPNvQcxpfYU8jmk4aqS55tn5XXbhsJ",
  "key31": "5FTRMwQvWSRkKTFtjg7aMqPhLcob7MUXArF1aJDVCd2HmPYDwvkiECyvxewohaPkjAc4nCfYnd3Xh1b3s1ErK1fw",
  "key32": "5fvFT7xi5hwcv8pYVGqrZgKU2qE5E7tTo3X5dwaR9zqnsEqq7AhxwS6Geeii2K8r7s9paG6Vr2TYkCgVkf94xFtL"
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
