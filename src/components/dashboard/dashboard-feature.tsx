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
    "3wTD9LLgm4LA1Ggtzu3Pi99hBvAZmTst4oCyWJXW6otNr1iX8cUp2rSfHqVFRehhxx3rQZoYmV3sXoPZ8FSzsuSh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nMaHofddxys8CxFDSU1UbuakCGSeKuWQeY7gAXGEojLX9DViqD8r8BCfn9pNVd9EbHf7NsnFWx5fRKTRYMUcwhD",
  "key1": "3eBHe3A7gJkQaveLAjYFxVtCufyqZkkLzvf4HpR6N9XMD2aHQ4kpdrBqejyagcZSY9HTaFmuVZoixQ7VJstM1TWo",
  "key2": "3Ebcm6Au6WZJ6G1d14Pm5hq2u2cH1FfAqjciFvFhdC8ERwPwkswmzaYoNyotKZZLLy3LbEzJU2sbT6ndKHo5sDi2",
  "key3": "5qp5q5V7Lk2N1C9zDsshVqdGk9M9zN34QQqLKrwBnsb4caLJ7834WNQfA8P7pmhAJgch5DAv5bF9hi2nivQLvxEh",
  "key4": "265vvrvkd7P3MW57CsZwbysm3AEHtoBHLTD3HShyPiZPxNK9ot3ww19mkYRxG53AiJPY6STcmfnCgLZ7NRfi1ybi",
  "key5": "4LF73gwES9e2C7sh7LT7sEerHg2LeQPdsVqmk7KSedFdArm36SvfSGpLNLEnFUF7EQbrKwBe6hwSHm3jdvHVQGGg",
  "key6": "26CzMQv9ax2h5vKzjrCZdEJTE85WLtABQfz1Gy22Ri8oCWF1yvtMnEYeXpkoYDXh6wVFAPXzomvYgicTcnYcVdGN",
  "key7": "4HatTW1y3sjJShCVY14VDJoEoxkNj7FyMbv5YGvYz4KCMMtfbA9Rxmd4QYjYAjUT1UZgVjqocUBBQ6UkyBb9VhzG",
  "key8": "4wMLtCXdnfNAH6fqjheWkFpTxzi6oovhzj7gLmueFoptQtkVqfgJ9tQ1RjJtxE86bG3kejmNzkLVT17PEy4muLmh",
  "key9": "5RQvRaBDqecup2Qyo8iVhY6EsDB4yMvHB5iZhehA3kXka9MjGN9iMGEhHkhGNxGH9cZs4HtAQeQweRNiiRZjYcJk",
  "key10": "52BkMpHMaqmtFHk7JZLvMy2H4J5HWxQDwFd7K7LrzRynBZvm3qcPdNSh7mmPhBFMtYNFNQsgnvynXRtvvfmTkYeg",
  "key11": "38bkz3z627aE24Fpy1FC2o6i6X4rxAEZ9jQbeHSvLsQogUShuyjG1PvxKaGe3H88KkQQatWdddqribbCoTohwePY",
  "key12": "ptrhvr4aiqeZeihd1WPp3baZtJ2988xqKv64YwvExDtKdEZz3zX62yM5pFCPrYpE4F5yNbPmd1hGctq3hwfCemw",
  "key13": "2j1TQRLjBHTxGQDHuhchE3uQm5AS3SMMPZJMvjjnHBxjKxNL4dBAGRVfXM11KhBZR2viMj5GPC16UxskjndGCc1n",
  "key14": "5Y22mAw9FumEodMer6mtaqsT7tghcvzcbm5aBwZs9yY2gfwVMyE2Af1v64yJficfZherYmnfHAZ5A6YZ4PCebhrq",
  "key15": "3A2bfxJRuoCLYrsQaKT8r7KE2VSJMUwAGsp67rnYYq9dn7eTtTwH5tuTANozBhcq41Bcokkxina8dTvhZVYu1o3E",
  "key16": "2fQa1JvQjdjiX2bfcMdi3Jaox2dMZUzXJSJ12Md1QF6riJWKtgK4HtriRcAvmBqH9YoznXs7Rr5NL23SyBUjWhAq",
  "key17": "5XS3Cmo7kSTWZWKJBegLqqYqRrKBgaZFyW8AhTYd2WDLjTzhBQi5p5tnEpwvpScBwVCHKmbBd3Zp3sfd1uWc8az8",
  "key18": "2mSB7DVX96tuENZ6118fny2aRSGQRcafaC98Dgopa2md853bkfLbYBkbpi8PySf41k6RcnE3aKFt13uGcs7GpFvH",
  "key19": "3z6Yibhcc9aAgjpPzwDG9MzGdsgcvqzdexyHTseegEYbWJooQYLVMByZsQB4KUSgUj9sikxToKuYyynuHiuH2X4Z",
  "key20": "4TFG2mwgeHc6RoqfhYCKunVkqmDwg4X2SnLVPtoBztgh2itAa5pUMKiTsPE4r7M6SrqVyQuR9AZw6XpsPasRHtrS",
  "key21": "2tadwQdB6GYpMNTxWkFVVKJcrHCVPocmhyCoU7Shsd3XDykA9vpmYEm6292J62iNbeYfDNDS9KEXyvemjL8u4fnC",
  "key22": "m12N9pygskjfC5E36kMbCNnKWnan6mXBqbFN4mdF7xHQCeRXzyHcnweyMVktb8cWCd2heeCX7rzkHdj9qL89azb",
  "key23": "61Cp4RsFgDfhuTpD4k1HPjmENLdi2fj9emei8HdYLQAFWEBv68S43TBPcGxkvLVKeL5sbdomzpgPPzm99CDca362",
  "key24": "4BiYqsB9DKn9MMWftKxDwXjndG8dUkAtMfdBMQWyVrVrJQKSHFQ5UR9jjbZzYieDHnfH8MNuCyPDJY8JycBiUb1U",
  "key25": "39g3hrbRjWkjrTTTyR23E8zs79jsaXZ6o1bEA6kdw49hMxvY5ajSyUMybkdxoS7xSA3tuYxiUPNcVhS5TomzmbCf",
  "key26": "4VYcVaW4mBCCJj8j4Daz6GWYqypY7xsZus3h74FQ2jfHFdT4frd7icxVQ4VM3ewkDnma17sCenKVWyc5QhoxbbXB",
  "key27": "KKNyBHim3QuW4VEnjSjYNRKcYnPHMaV1JbSDEbp3JTLw89xg4CLk5R6R1ADgNhjQ7Ccbdbx7ZhWjNmC7HPAbSp6"
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
