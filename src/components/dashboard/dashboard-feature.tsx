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
    "3GAYUWNKbnqXHY3PS8Hwn9gi7ry2vppsVhqiiwrkkTJWZZCSvZRRHrYfd9uTxwnASihB6JE4cDfPVonFRQpS5XBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gydkJVCRCtCripPx5ZnKZqcdiJAKit2yJwbJoCLEGHHT5Pa8DgndqeGWvxHcoBgZzJvkAnf54iMHPRSewjvKqiG",
  "key1": "4undBxDVPdD3LPmxAnY3Y2DE4efD1nWzcgpEG6o17uJ18CzJAsME9jEPETWHQy24tkzX7a4TbTRx3o5jbgSzq3i3",
  "key2": "u6i1LyhE5RZmnPVK58dRX4TfiyZKBKQBxVGsspR5pvpdGzsxSatrTreNjAkcU2M8bwi6mAbadUqPkwHsVjVDnvC",
  "key3": "4Dbo7gZ9WMDh3Tgi6AWSQ52QThogGNo12NRHWzVLDMxXoCwJTbWaSzbyZB7j65zdzf8D2WFsm2mjo4bNABsAwbLt",
  "key4": "K7GRSyGuLfTnixXsNEjCToiw8dTL9BivXg8gmMueEW7WR4p7gBHfnbhKkZTTz8fcsiQ5HQMmfqR2rDgThnDMsKP",
  "key5": "232em6RuUPFZB5sMB4gF967g2q8h21gm2A6bgrZLSJ9NKFWZKJE2r4GBwfczE9Kxt25eq97KZCM6mHPfiETst9ty",
  "key6": "51G8wmiw25awrcM8V9CMsqhsySKEW4DjVQhmG3EFpxpNpTadKMqtkAiYMbHJ2aMemCvzitaUhJ6GLd49ThFhb61u",
  "key7": "YzhnRLz1xLu3uPqVcBEaSvASNpoX8QD8UuhhDCrV2U8FhkMVQgHTtnJKxXQeNFiYr5GUY9HDmiHwTvjzQagAByD",
  "key8": "5BMBDa4HHARnnijDxXY329sVqCa1N4abfF53bhXboEfVsFCc8f1AbQguWuRMG5rFAqgi4higXcPeH5K9R9pWVRAm",
  "key9": "4RSXTvZXGoEz7RwTbPNMRV4J2bsjdCAq6XoSM6fEVPB82HVcG5uzJGDGDtD3FjTPMJNu5HtirXWwd3wUWMFnaUue",
  "key10": "2d4is9k6b2ir89LnkT4zNAyhB8CbaXvxBL8tjtjXhg5KqaLAN5Be8gG5cXrvyH1TeJY79kyEWM6uyDbP72fWRhaE",
  "key11": "5Tc7Lr8Ha5Bzy3EokGxBQLuPRtyTiYqyoJ6rgvxgWUFwv6S8Zyo8ugthcfKiryWb6qofTg2aW2VzPg6uFopcrARa",
  "key12": "25TzkrCJ1DSbi16CBoexLSgRFWwKzqsoScMiQ48qJ2UckGCr6ia9FXt9fispkA1TPeM4aPYbRWJisNAUaeZKW6NV",
  "key13": "2ZK97B7G3LZ6G6ff9Pk2j3kheCtpJyy8G4GGheejiC3LE8DHzKnbQseTq3FkJm3LpCUR9pETotvN1zn7Dw5xk9se",
  "key14": "2Jxb5K28pCmhUEegRmLznVuSe8ULXKn7Jbcgj8tkP37y6qzMnsBi1bbKe7gtxY8st4kDAUTyBnrPwGgYyguZUm6T",
  "key15": "zyiDTqnvisH99CbAteKhJUFUf3LL8tksAoJsmYbt5BbKnieU7BSCbq2E4WbmbxQ5r19j6KHBhUx86H7Kf9NaoH4",
  "key16": "57CxsXpGVo243um9L3dLHAEhquDAyc1SY5A4Pe32HTpnjgHKbbbh5UboFvND3DLMHWJjmNnJVXd5JsTkQeJ8WTf6",
  "key17": "4XM3J7ePyhVBoFg8fH9EREVNSGFHdKBGLsdkXirnomd1T3Rft9aAZm9Tep6dvwLYZpruLywr7hYs45RfXFtK2Ytu",
  "key18": "3fj4AD9LHWYubxWP8QyJQ1B1tc16z2W6Se3tY53r5E3kJbrLF2MGVJGscaonKzF7UBCqQuNqi75fqsaUto6vE8PR",
  "key19": "zVfeLmWJkKJYQKa7Tff2bnbLNLMtDycVrbo1c7dFyiqLVeqCeEHpTPJYhPU8qK2rAJYcQWqaK8z5PpfCsSzmAgR",
  "key20": "4vKazLwPVKkdr61RpJaSrJc6yCQ5yLD4yH2Bx4yaMYqZY87ftPheAKctjwQ7fie6XC2G1vEBTcuqyNzJjoM3upT2",
  "key21": "5Cx3aq9EULMetCdm8sRqzjPVdpmXYCwR5pkEboPQn1kccrEkN76TYVVN5YNfJo7ocyCQPWEDtznZsPJd38Za6PC8",
  "key22": "2HhzLtD157WJdVKosxbnbGAK2iLFnVTdztqnQTAJuVPoFX9ADnAXDxTzUi1sGCPCTATxsTdoTqr6iuNU5N4uZyfn",
  "key23": "cmQnH2RD7TQX6wxxvDenNQvy6jg5N6ToQZ4RYqLB1RfZ7LB88vUadroEkmENtddVvSeVjY1MRrFdsqhfNa1vG9A",
  "key24": "4yoDs82yNCuye7JduyLvp91BuwcJtqmGCsAVNwaRyvceCPqsMuaJVWbJiaTMGDkiSVbZU5CRA18mbLtpKVaopxJa",
  "key25": "26K9jNiiPssxtw72tJBQ8u3nnGFwygCXYtJ4BkgxifPPuvPhxVGxxHudpRAEAXqkfmgsTtA1EYwuRHRJ8YGbrjxR",
  "key26": "2uLCBPvuxKPRnU8NxWkt1pseb1Fg6LzH6EsKUe7FvvWroyGGE7QcoDtYcukusrJ71wecHp5TBRhVXvGGvVXVZMEg",
  "key27": "3x2vuhhHAfyHRkj3oqBkx5pqevqZPx5mC9b16VD8uPctMnWaxq8U6BLuQfY2k7DppmCnfxKMyNBSdS2fx93eWm7p"
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
