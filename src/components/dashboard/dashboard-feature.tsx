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
    "3N6C5RexcqecJwd1YxzcZjJ6T57etACajSqoMAMZejipFjJDSyENwG4dHU51VVXAHQCNgpjxpG2WLfcA2na6i7oC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iwJy2osGFBZe6y6h82DFV3dnMEFcXq2bkkjmk35pShJoRVvSQyE1W5dtLpkDgXEwMnWk3qmKpcrcWyQHYeU1SMe",
  "key1": "j2KYoGtUhzYpzKSsKFgCkbGMM6A9W4fPsSUkq9DnoRrowVc5HGEJXrHuq8pfRK4Ytn8FQ3CT81FMeNPhvtu4Sym",
  "key2": "4XfhBjA6wmAfXEhMpS947F38Xc3Yyn9dEthtyetjdKNfTidDM5GQVnyeR2GAHohAQAKW2UU9T7ibPL4ZAo73daCi",
  "key3": "3jCWKfwyWCFNz5rmbTqt3JQq3qkGRyn2nj1zDDYfvyWpcMPR4Bm55jDgx5pC8nrBsyyBgzYk2akNZyZMiLzK3Qvm",
  "key4": "2L6wSpYnA3ZsA1JZUnh98BmAxW1KJT83WrMntqQvzc43UK6cTEvF9pLXn1qSAJ1Vvd8LL49ADHNvjpeiUUDgjWdc",
  "key5": "Eybez12SVSx6T3toe1gqVexzJhp6yR6Kux18CPcPKnNqLPC1ULrjWaJWgJDK35B6CyhnE8TbHD1yprbjaCyhHTP",
  "key6": "48wBZy4Jj9TUycc3SeSQuXpCq2KXRvFgp2643mSN7Ro4VXDsqSQYKEYB54BNo5BJRhNoTU3N7EkZHSybVyZQ2feg",
  "key7": "mw7jKG66D42wnewqmebJz4zmVKmT5usmZMDnQNo8pch7iFcuNEFmiqNbiBmHevkjmuaiVtsC94ak6awk4h63n1o",
  "key8": "24u8aLfLsJNizCFN5sFbGVXRaD68agGrWqwwFKMPveE1srT95unMkaAwUqK8jdcxSbLwhVJ7jDfJg8gP4Q7faYJn",
  "key9": "4TpezdHdJPVmbzjBgBLx3kQMfkWrc1zmwEmaK69sQBo4pYmMd9C6CEhheBYh6AWJ5Xb77cWJyW8nto7yHfSbLWwJ",
  "key10": "mG5rHUXaHyoMMhhue6gAMLUw8aXX17Nej1rthdzdY1Yfviw6UWZWJFU5P6HfA5wUoxpuQQXNJ6jf4iBDFsEbfHT",
  "key11": "51iHnzWYG55oe5RNatv3GraaFsbdzqBN7VPS3wkHuJTBVEojWrDj6LoGf8qei3UfeCAWTrAJpvSDDBr1dJnnLVPt",
  "key12": "G3UawET1x9YJ8R8ZrTrNULnkFezv8ryM6ohZXt5TYqwXMwQhAymLbiNzbk9mqQjq58qkQyy5eyRsTJNWFCheqVH",
  "key13": "5dntmVjmupe4mJ8KNPx7SnxmqQ11BfMAyTva8oWKXAgkDKjUQREeJQb1p4bcvfzZa7jWvFSNQun1tMXAj8rN2q3o",
  "key14": "2NvXVAPNnkitjTLCLYeBh5DuKCumKxzgjyT4NNufVCiJG2bwSeku4jEBP2J1tFx4JSC5ubAeBA4XiQz7H9ZBR3vT",
  "key15": "28EETmCspxgJK73vRu8TWH9Gz4kKgucVeArMZqCYnoe9SHt8mbbRCUtgsiYyEk7VrgTbxLN7vHM6TUmRGeSBgDcs",
  "key16": "3c4ex6cHoD1Ht3N8PetiPztwvQHwsiTqbW1TmjMa4iZ8yTFxGkSXL8mT6JjELbg3GBUgQCKBZpBBbTPoBsrDHzAG",
  "key17": "2uDf4V29Etvjgm5hBzqu9Gminntn1xT1SZH45oqR3WprNXusDgMARfpeRNxL7AGUiPUZskLPVLU47ZSzSmXYz8X9",
  "key18": "3bDPKY37SiRFjQPLU7MJTYpDypkHhkiPd9BpB32U1GgkvQNvKqh8eTkDqTnxRST8MpZckj7zbWMdpJxQNMaUFj5T",
  "key19": "46LAd5UTeotyi99DxPUDWSQAfgxruTSnpALic5tsyr1jPw2u1k7kym5vPziziAJHivbxSTpSsoosmgztxvmwfN49",
  "key20": "FPZnFj7CtqPgjP2LuKyPLG8B1mmU4HDM9f16eggwvR57CPkrjVQx7sRdGpiQRpCp4r1bDKsRMxDPtuxxBsn4VCL",
  "key21": "3TN1dDf4qg4iXR4YJt9hxLeR5vNqKPRvbHeBvcnNSvvsa4d1BqR4PKE8NjqaP35uwByGobebL2yUwGsz36o2j6J",
  "key22": "kJRoBc1cuyLndo6tTMQjA311Bqv6dY9oVmmzJLQNy2N9yYC8K6CLmejDUXV3BJyifoJV3NHhMRzoKsfk1kVEQ4P",
  "key23": "3mLk2FRaw5nQP7YSvhjMQumDDGwQdhH3MXHt9jF7LFUTqFDiGZtw3GZkQzwC5tbw6t3xEcJhR151fThufNywpbmn",
  "key24": "3Bpxxvc46LNjZidYmuFf1nZzurPmeMFSfRyfwyFtJamWKEbtAZo5PhCaQanqRECtjW8nTEeLVvSK1iJtdkzmcYcR",
  "key25": "3EP7UKdxenpspjkm9fHBVvaMhapxpVcHBpQkuYHZgS6R5CEaMQx8jVChaHEV4FUR8cJKrJqPHF31Z7Hyu2eDm3km",
  "key26": "2HYWcw2pQe7WmSEcmKihCHbEuU4b5R9yo187e8CoEhky2JxzSogsemJRTEyXRgEYJEUpWaNUpKxeTS3aH2JC7fF5",
  "key27": "5fwBspNiaCJf3qtY6YUYACgp45pJC5HZXAfWdS63gVsU6sTmskU2JYr4GDRRXYXJ6jKxJJS5Enu7ZUg2VhRisXVu",
  "key28": "55UaJi5eWHUV1HbpccXirtjbB5Yu816CvFnoB8ErbZNRN3pR7nvNVtVM4sySJgFRuNPhg3o2MfztzudfMu5J43k7",
  "key29": "2iamHgFfd4gfvV8hcus3JCXAPUmoZUKHSWbVBnKHNTotQdwFmixgUsV75vGfN7R87wMQDTXbt5fy9NfV2q2ZwDVR",
  "key30": "4bSNff5QKhaJAtJqUzxGmcBe2Na8BSgP73zCoyF4Tj2DT1CmF8erdquwgz4HkzLfzMkEeTJrAc8ifmjYm8buEvDK",
  "key31": "5qbn2MYXDQ5SxmxywXgVoJvbXaahdLjAWjgQDXyikdbGe7WbCXQardWLvGYAu6E31Ar2K8Bg8D1mUVeD8iuCvgFa",
  "key32": "3AKuYTZTxqts8DYbvYw9mAHmcvLQtUj3cUNusjrvkAaqeGtGWg5ajZvt94TaRBNjbAkvE7gw7V2roYvC169Nm4GR",
  "key33": "4FvnVADRS64TxkWDqbqwbRUizRmnfaLkfp958EbLnhFRuaR6AW1huFSkKsuVGWcoMUhX33sUgpWXXK13K7oxxCzm"
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
