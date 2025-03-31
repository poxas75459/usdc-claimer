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
    "574hhvp8DtUDsbjM7e4SaN61SY1HmVs7XUoBZBU9qxSbTDfPBdeykg3nibtc6vHW554NBr9wae6DZzcKuT8wTvGD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D5Sdi5XCHxiBwB6zmtbtu4vhGnc1Pf5EJs29T8fR5tV3XFp7LGxtsh8XoNfGQZ2qjpwEAkiF57uknJpWkrg1d3e",
  "key1": "HgwcaphHi2M64HwPXu8h8hR3Tq5rKvkiUdLjha6NARN7HFqXSqrJ3ELKx4EZWRKoB7r6N84UPQRdScJLMC2xHyv",
  "key2": "48Capam5hP9kykCLNZtoxFBn9npZGvH13VmymvfG8QszLsYiGH75sAYmZwpRkBLzp4sVQSEDRpHMo435BNHshxeL",
  "key3": "2RD9s88fp6PbphDPeHiLpPkGcHqpkCD3xqwoRiYFAh44NcmSgUKVGBv5m79intcRCvFHG3BLnMsvGAmsk4rj6aX4",
  "key4": "5yGnLUHhvwZ3y1y4GKagqPo9RE8AbVvAkJ9iNRcUs1DYYxBCE2Vkg36tHjmK5gWE5m43Zy1jHrrahh5mfgMx1i5P",
  "key5": "5pBgxj7nqZwKSi6XJomWjdhKsJTFn8j8esPiKb1dWeMfCisxV5upm8VypqKz4Tnp35iu1SLd78D3CA3DBz2Nazv5",
  "key6": "5XjVEKcDkYRxMy9nmPrsiaZZ9JUr5oZV9pVwun5z6rDnNZ4kXpSFi4tWjdTfx9MJM1tQU933t6WNRXMCxWRPKhCC",
  "key7": "47w5NhAPDuoommoaTz8pGaCPwjeKFp7qHUHyX5M95NHSbyyLUVpQP5Lmp1gF56Kfrv769Qjz443uRqkyzbaNoMeP",
  "key8": "2rEoCdehKPzNMeDnUa36DMQSMtSWQecAkni833tEbGSVMNN8pHt6hbMmBuQQJ3xNuCu9eUUQhFfuRam57w9iQRBZ",
  "key9": "ePUUp3TtjQDpZ73bapw7K6NC71i2sYSKuZJFpwQSkUmcdRudZN47aYM6nULaUwKw6JS8qo4xihAuWGaRxaXNLt2",
  "key10": "3TaSjzXuKBzvgMc1ma5eZYQ3XXVSCJ7zwNSNPNDKkb7KzHymwJ854qXfj6EWa7eRigq9PM4Kfnq9Ttx8BfMxVRpF",
  "key11": "aa3xpKa3aQqF32dfNc3P8UDwfh5HnAWoYf277RK7WP5tovTP5LDs5sYuXLbT5BAos5wkwPR8TKkT9JSrLPaqXzX",
  "key12": "2MiRu65FL69ohrucgEsP574G9Y5SaawedAi2jHY5wj19bBTEtsi73egaj4qcmvTtymbPUbYBmakzGE6MsNydZY46",
  "key13": "5zKGyEkYKqaQzFD3Nk1n16XtBioMwhrtQS98tDdMd2seHN99eNzZWkgMbHnGHJ1RPURp95xSryQQ9iuKqMAQmTxP",
  "key14": "5LB7wQm3BFeumct3L7UoX5hqQYVioKFVoF8yH54JPyBFMDGVnvdGUssNNJEDuS2N1zCR8pmXMwepYGT2NNHEkMTG",
  "key15": "5ao3rGvYtYbbkstxcxKrvaKSJgWuhD1gRtRc76bzMmhGVLTG6ZWYeLwKhcHZDoVRjxoBiZFp4GAZXG1YVf8xXahS",
  "key16": "4mQk55QfBAGMEic8uKVAmEXiVjC4zbLLmtTZRWVZq1huZxRXtHZ8EVz9hbqZSnoKMpXiaNtCDn1DsEKtZio9VTky",
  "key17": "3uaEWCHmtk68N7MbTpS46HVSKxcL3bxt24j1eKpbUvhUJ2y4YcAP5JYrHiWhBdEyYzHbsQczYmQHaLdtJ3jmyMWP",
  "key18": "CvTrqaV1tyiB7DY5448gE3jFBfkEGobLdofdJaxbvShop1XjioGjQJ2P32bWSTkgiaHU9msT1uqCFLvy9Qir2qY",
  "key19": "4Mz9rwd1rPSbTKkxfiiuAKC1adUYCZAzkvZE8fgBXLGRCetc81vKikSVauzLkQYoToq2uUYwUU1dYVZ8pWCYBXMz",
  "key20": "q1ZHaVwfNVG6QtDqD7yeqZ5a7qqWU5UpchN5PrnqQhZ6newreRbwitR7RgFMWgb2Nw5qExckHwTBvhfiV4353Sj",
  "key21": "2HfiTWTFqugDsUBXG3nGHUG8Bkt4F4b9vm7UW7T5uVbVVEgdMMj82sEd7hNf2ADgDJiYK5udMVQv83v6RFK7Agxn",
  "key22": "BK1cwrymV6LRLjkiLykjrjKmhVB568MTJ4gVVzhgxL8MQTa757MRQzGyv7AskVdJVVa1PaFuMRKNFPFrzrjtB3x",
  "key23": "CBf27AQ1PCbZsYqth7ZFCRVxCjgtVFHVcc8RvrX7pndGogqTgtWryJWDvXaHgJbEpxAnPK8Wko7as9Vt6kAifdv",
  "key24": "nasDZaG4mH1ek9AChZGbzvDEmJRKFHRaj6FYNeeFh2pa3jkZ8E6AVBVxciy3PdBn7jbRc56XyaX9vMs3A3VZdhW",
  "key25": "4kcyDijaaSbGTYoLPLm3scAocYyhkA3QWyUYtRST38BfDvpJDK4JdceQyzCqj7CnSLbQKowpC7EZ86pjEfPMGyEU",
  "key26": "YEvTzHUURKdSZnfYHdiT8WrGGu4bAh8opaWwSWbr1iiNN6xgU6oa3gZLssMXs5rgNdhLygH3iHrsrJ3t6otFqkV",
  "key27": "3EthnBMuiifwsgbZmwr1QBiby8pNZ6ZEPEWiozJ6pqjpMtcjW4XhYEFerDP3QmpuKgvb1ATTTPC3X7ojQSLUp1XC",
  "key28": "4q4eNeGbmHnqEoocBaSt5YQWdMGLeaThnJZVBYKqaKofiJVzVVVEYxXNBVJf9isoJ7n2iYx23Va1ZBbLrnYCiC7x",
  "key29": "nXHPyH5xtNvdJhZx9QWAXqSpwKg8DDSzeYfJG6jPuMAMywHbDtuUE6t7pgowMU3L147vGXNJRrzRgatruXeTgf4",
  "key30": "BzfKMh31rrTzfQPLk64qD53YmhKYZmY2Y7NS6qhXj7QgycanwG7P19mNBdSghjxxBdnHAWBgE6h4aWPfCiWsDYy",
  "key31": "2wQfUkkEa2M2KCUi473DzDxtmkTnXs3kf2pBfUhWpg5Em6AfkPxrzFZc2uNcZexzzGaXCuJLDuoJEBCGzRcvpghD"
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
