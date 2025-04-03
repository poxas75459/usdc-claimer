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
    "2YByqW7q2eGxDhu2WZtboM53h48fu2zBQG3FxrCbsB6TYuHashEbeFjGWCPsvSNVN4eK7wSvqXHiYwJfPJf1vjay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q6Mk2H4khQPAiWsQKWnE9sbYyanKjEhwovbjyafuCCjidmSZHjafG2AgCfMxtfqyide6GckiUoSEpGwVCjAWc3u",
  "key1": "2AbEMwpJR7q9nBaiR1H2SAJhq8LmJKPc7sWTuyFG1tfav7PvzdaEjQBfc29mLkMrgNiYfbgB4542AnbYwH3cjxbw",
  "key2": "1gBAsMx3fA2fD7tdK1uZpWngsizcs54abdfbW354vJrYnKFL3sYCJ3rdDY8cTHooXtfCndyNLtZXvw1BXFvjQTb",
  "key3": "5UVaJuyuC6LBr1PFWJ9k6UPC2dTBqgX5UgrgC5wzbmTEv2sbnQ31SQ19GhGtKUPpGmvxk8ao7gWXzD6jmHsrrFyb",
  "key4": "4Ehep8MGNbg34GxouLe8FTm69HoUY7aH3P7QffiyimmP6FA5TxVETEtkqDt3Zf76PKpNdre8DuCEQa7gRgyRqJMg",
  "key5": "56UMM9nvKQ3nNhX1nfRkwHJYyNLPfoeXuHpJJ4WoRFkgZeyZ9z4f69rVbpe5PcaJ2Qzk4YYJqa1nu8TPQx5EfcdZ",
  "key6": "7uxNz2cunZFwKR65aJF3wpmyBLju1Sgj6b9esM34sMUk22fPpr32UPoGEwHtLz62kcwqhs8Jn6Vd4bLUKoCQWuy",
  "key7": "4meYPdL53ik8PgGZRasSKwZsipPLN2S7WP6hcKQoeXgw8Rrru1cRsg8oNgVyd6vg9M46g6Ns79sQv4bZZ5WbrQy9",
  "key8": "tK5JAP11tkMqWa249zSUeUYmRSZQqoHHiMpjdXzqNgTttfWPa8z2pbMRVVPLtsNerVR4R1VwK5PEAySrm5ZL9nQ",
  "key9": "5sb4gAXSNtuhFdn3uwNmNkPmUEPXn6iDdgyovDoJZUBz6uSo4Kzo7NHMhXyHRSniZLiy4HGHNrtLLEc5ovByZBoq",
  "key10": "3qVXzTD94TvDtUh78e4ruSehFDzXfSoAmYxY3GWjPnh5FbBE6yVdiQ5cJ7qVyw6hHxyi4edY1FDndhKgP6p2VDZe",
  "key11": "5CZkwdkNXWH4sjzp2yZ9LCtzKVZZRnxzXj383M28oyGKUh2FX5GunCktGspN49av8eydEPR5jfdqGjzdWfieNwrf",
  "key12": "5XJGsetgRaFaK7HCU9ir11su77DWVy9sdq9BvvpXGBgkHSegtokmN9Fwn9kTMHNScYhcmw3qd9vXBrEYd7V68h83",
  "key13": "4ARGERYNriFrBx6My9KH1YP7YbKxBNVShvxtBbVMwBDedZf5SyNSq5rhHcvzj8wbHNni3tWu58K2ZoKdbEL2ChAt",
  "key14": "5hQ6UiuHvfHS8viw2g9VhckWykdETgS5zTGrhxsYqHCaKTdB9UaRUKgVTZrPD5Hi768ikFU7hcBhMQ2CNdhJdy97",
  "key15": "45iCm1Db1ms8rAq6kSvHfHMaV8MuWguGK6igmdwzUXdvodwiyFzSMiEP8nwHMnrhN9RNEGEn7W4XUzCaWsnTEnJD",
  "key16": "58fHiW5MMTQjA1ncoJCLoLCn3KjghmB7jgNiSHDVP4PpA3WyHHmCf3iCXUjGMhfan8ZhhukMrMJ2qgj31F9nuqND",
  "key17": "3umQf8fjozJgKRKCRSCdexZ78SRFfrSuMoAKBawniFruEDBZk5rGm64PDkdLghAGnvBMcuwF33mJDhauEJY3YP8J",
  "key18": "3y75DBRGGhDjtXwujXi1o5JceKvcmJorCCVKDJD6gqBouw6zsX2odnezvz1d1PHGPzTDZPqbT4gcWWurTshp8Rxi",
  "key19": "5NyrCGdNPuA5d1prfgqT3V4Pp4Yaec3CLKpJ5nhNCDg9fW8pixdBZUDkG9nxcPqCJAymThPF9DRz69eeFVcSW9T7",
  "key20": "49Dysm1qd9hTUN34Hd3pCbr4ucZLEbyH59DbRpqYTMvU7JsT42LPfGPtAJ9PLvg6iRDZGfsfGjoZrQ3HHtiipaY8",
  "key21": "2Vj2iawn6nxtkd9DwUYy99VPH3yq7NkWdATPRFRAtmeecbhjxN1nFis3f2AvbfhVUDyzjRERGvfzTyvC9RpUDTEP",
  "key22": "2HHyD8VF2JgoaPZRG527J6bwD2YLtNhWb72uyMLm81jYHFfes11sicae9qTbMguCaNdPsRSvjkZiw3wbczAcCChW",
  "key23": "z6j7uPczTu6hTZeTg6qPjvE1cFJ5eYWPWn4gWSe5rVcrZ7Jing7zfNAA1EDkqdd8KjVymbn467hjCt8x7Y9szXJ",
  "key24": "L5BFdwdScjk9neqEQBF4UdVWsPjSuGyYtms5C7BdnRnTaVrotZ8ReqZh4BR97VqWJYvaM1UiWUXbwwjq7RJNUE8",
  "key25": "4PqTnCt4UfQWxURXJW1R9k14uCYeLu5odkYV9CvxpL6oopuW2Ympa72NfJXVUawW8GkRyBiXwfUfatVoBFVDkE9w",
  "key26": "3ynPzMTt6XvEt52bKKS3b4j7YLR3cjgKaKsHJr1AAY9h8MLJyrCw3N6wonYQuwcNiruADLbEiaXwo5bnFPqLZr48",
  "key27": "4LySDJkFgLz33dV1R5XcPoYb6HVXcEerNG9cjpQnckkxMDKTgbNDdQiky8MVtSz7rL2GaFkdH5hJkn17M4sWHMuD",
  "key28": "583DNHCvcJEw7GCXRvDiGC4BWY3dEyHvVQ1MfXX7GWcgdV4QGJPnm1HdTVsBDJuJnkRLVSEMhoC8UvpvLXLn7RMC",
  "key29": "33Nb3vC2cR1GkkNyQCYDnPysWXKJ4gWsSYT13P83Q9533DYxDkrABPnUvuSj3LyA5Hwq5cgWizgecRYz11dHgajp",
  "key30": "4QrJpFHNVmP2mxf6jgUbnRzcVRYmbskqKvp75xZjLa6FRDgcWF6fMmEUXF3sUhohtkaHGQMDVJza4FFGNkBH65Ng",
  "key31": "5krcoek9XeAbhpKaDro1QztX7BjKrivaFtmHKNBpHMQ3Wz8pgmnHZrJmbtzhdVYBPs5iptUJiNC7BGnzL8kzfpcF"
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
